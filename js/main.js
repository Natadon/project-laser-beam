var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [
        BootScene,
        TitleScene,
        GameScene
    ],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 0 }
        },    
    },
    pixelArt: true,
};

var game = new Phaser.Game(config);