const Direction = {
    RIGHT: 'RIGHT',
    LEFT: 'LEFT',
    UP: 'UP',
    DOWN: 'DOWN'
};

// Phaser does not recommend using a container unless you need to
// see: https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html#toc0__anchor
class PlayerContainer extends Phaser.GameObjects.Container 
{
    // default constructor, may need to add more attributes here
    constructor(scene, x, y, textureKey, frame){
        super(scene, x, y);
        this.scene = scene;
        this.direction = Direction.DOWN;
        // this is the speed the object can move
        this.velocity = 150;
        // enable physics
        this.scene.physics.world.enable(this);
        
        //collide with world bounds
        // prevents the player from leaving the area
        this.body.setCollideWorldBounds(true);

        // add the player to the existing scene
        this.scene.add.existing(this);

        // make sure to have the camera follow the player
        this.scene.cameras.main.startFollow(this);

        this.player = new Player(scene, 0, 0, textureKey, frame);
        this.player.setOrigin(0);
        this.add(this.player);

        this.setupAnimations();
    }    

    setupAnimations() {
        this.player.anims.create({
            key: 'left',
            frames: this.scene.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.player.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 }],
            frameRate: 20
        });

        this.player.anims.create({
            key: 'right',
            frames: this.scene.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
    }

    update(cursors) {
        this.body.setVelocity(0);
        //this.player.anims.play('turn');
        //this.player.anims.stop();

        if(cursors.up.isDown){
            this.currentDirection = Direction.UP;
            this.body.setVelocityY(-this.velocity);
            this.player.anims.play('turn', true);
        } else if( cursors.down.isDown) {
            this.currentDirection = Direction.DOWN;
            this.body.setVelocityY(this.velocity);
            this.player.anims.play('turn', true);
        }     

        if(cursors.left.isDown){
            this.currentDirection = Direction.LEFT;
            this.body.setVelocityX(-this.velocity);
            this.player.anims.play('left', true);
            //this.player.flipX = false;
        } else if( cursors.right.isDown) {
            this.currentDirection = Direction.RIGHT;
            this.body.setVelocityX(this.velocity);
            this.player.anims.play('right', true);
            //this.player.flipX = true;
        }    
        
        if(this.body.velocity.x === 0 && this.body.velocity.y === 0) {
            this.player.anims.stop();
        }
    }
}