class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot');
    }

    preload() {
        this.loadSprites();

        this.loadImages();

        this.loadTileMap();
    }

    // this will load all the images used in the game
    loadImages() {
        this.load.image('blue_button', 'assets/images/ui/blue_button.png');
        this.load.image('blue_button_hover', 'assets/images/ui/blue_button_hover.png');

        // this loads the map tileset image
        this.load.image('background_map_images', "assets/level/background-extruded.png");
    }

    loadTileMap() {
        this.load.tilemapTiledJSON('map', 'assets/level/large_level.json');
    }

    // This loads all the spritesheets that will be used in the game
    loadSprites() {
        this.load.spritesheet('dude', 'assets/images/dude.png', { frameWidth: 32, frameHeight: 48 });
    }

    create() {
        this.scene.start('Title');
    }
}