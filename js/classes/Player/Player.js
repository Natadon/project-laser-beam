class Player extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene, x, y, textureKey, frame) {
        super(scene, x, y, textureKey, frame);
        this.scene = scene;

        // enable physics for this object
        this.scene.physics.world.enable(this);

        this.setScale(1.2);

        this.scene.add.existing(this);
    }
}