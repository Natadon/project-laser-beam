class Npc extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene, x, y, textureKey, frame) {
        super(scene, x, y, textureKey, frame);
        this.scene = scene;
        this.direction = Direction.DOWN;
        this.velocity = 150;
        this.counter = 0;

              

        // enable physics for this object
        this.scene.physics.world.enable(this);

        this.setCollideWorldBounds(true);  
        // if this object is the same size as the others....
        // this should be extracted up in the game
        this.setScale(1.2);

        this.scene.add.existing(this);

        this.setupAnimations();
    }

    setupAnimations() {
        this.anims.create({
            key: 'left',
            frames: this.scene.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.scene.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
    }

    update(){
        this.setVelocity(0);
        if(this.counter > 250) {
            this.counter = 0;

            switch(this.direction) {
                case Direction.DOWN:
                    this.direction = Direction.LEFT;
                    this.setVelocityX(-this.velocity);
                    break;
                case Direction.LEFT:
                    this.direction = Direction.UP;
                    this.setVelocityY(-this.velocity);
                    break;
                case Direction.UP:
                    this.direction = Direction.RIGHT;
                    this.setVelocityX(this.velocity);
                    break;
                case Direction.RIGHT:
                    this.direction = Direction.DOWN;
                    this.setVelocityY(this.velocity);
                    break;
            }            
        }

        switch(this.direction) {
            case Direction.DOWN:
                this.setVelocityX(-this.velocity);
                break;
            case Direction.LEFT:
                this.setVelocityY(-this.velocity);
                break;
            case Direction.UP:
                this.setVelocityX(this.velocity);
                break;
            case Direction.RIGHT:
                this.setVelocityY(this.velocity);
                break;
        }

        this.counter++;
    }
}