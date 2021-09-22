class UiButton extends Phaser.GameObjects.Container {
    constructor(scene, x, y, key, hoverKey, text, clickCallback) {
        super(scene, x, y);
        this.scene = scene; // the scene this container will be added to
        this.x = x; // the x position of the object
        this.y = y; // the y position of the object
        this.key = key; // the name of the image to use for the object (hash table key)
        this.hoverKey = hoverKey; // the name of the image used when the mouse hovers over the object
        this.text = text; // the text to display...obviously...
        this.clickCallback = clickCallback; // this is the function to call when the button is clicked.

        // create the UiButton
        this.createButton();
        
        // add this container to the phaser scene
        this.scene.add.existing(this);
    }

    createButton() {
        this.button = this.scene.add.image(0, 0, this.key);

        // make the button interactive on the screen.
        this.button.setInteractive();

        // scale the button 
        //  TODO: this should probably be passed in later.
        this.button.setScale(1.4);

        // create the button text
        //  TODO: implement a better size determination of this text size.
        this.buttonText = this.scene.add.text(0, 0, this.text, { fontSize: '26px', fill: '#fff' });

        // center the text inside the button
        Phaser.Display.Align.In.Center(this.buttonText, this.button);

        // add the two new objects to the container
        this.add(this.button);
        this.add(this.buttonText);

        // ------------------------------------
        // Element Events
        // ------------------------------------

        // mouse over event
        this.button.on('pointerover', () => {
            this.button.setTexture(this.hoverKey);
        });

        // mouse left event
        this.button.on('pointerout', () => {
            this.button.setTexture(this.key);
        });

        // click event
        this.button.on('pointerdown', () => {
            //console.log('button clicked');
            this.clickCallback();
        })
    }
}