class TitleScene extends Phaser.Scene {
    constructor() {
        super('Title');
    }

    create() {
        // create the title text
        this.titleText = this.add.text(
            this.scale.width / 2, 
            this.scale.height / 2, 
            'Project Laser Beam', 
            { fontSize: '64px', fill: '#fff' });
        
        this.titleText.setOrigin(0.5);

        this.startGameButton = new UiButton(this, 
            this.scale.width / 2, 
            this.scale.height * 0.65, 
            'blue_button', 
            'blue_button_hover', 
            'Start Game', 
            this.startGame_click.bind(this, 'Game'));
    }

    startGame_click(scene) {
        console.log("Starting game");
        this.scene.start(scene);
    }
}