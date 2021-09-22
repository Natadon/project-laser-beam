class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    }

    create() {
        console.log("Creating Game");
        this.createMap();
        this.setupCursors();
        this.createPlayer();
        
        // add colliders
        this.physics.add.collider(this.player, this.map.blockedLayer);
        this.physics.add.collider(this.player, this.npc);
        this.physics.add.collider(this.npc, this.map.blockedLayer);
    }

    update() {
        this.player.update(this.cursors);
        this.npc.update();
    }

    createMap() {
        //console.log("Creating map");
        // 
        this.map = new Map(this, 'map', 'background_map_images', 'background', 'background', 'blocked');
    }

    setupCursors() {
        // these are the default WASD keys
        this.cursors = this.input.keyboard.addKeys({
            up:Phaser.Input.Keyboard.KeyCodes.W,
            down:Phaser.Input.Keyboard.KeyCodes.S,
            left:Phaser.Input.Keyboard.KeyCodes.A,
            right:Phaser.Input.Keyboard.KeyCodes.D
        });
    }

    createPlayer() {
        this.player = new PlayerContainer(this, 160, 320, 'dude', 0);
        this.npc = new Npc(this, 400, 400, 'dude', 0);
    }
}