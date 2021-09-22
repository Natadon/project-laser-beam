class Map {
    constructor(scene, key, tileSetImageName, tileSetName, backgroundLayerName, blockedLayerName) {
        this.scene = scene;
        this.key = key;
        this.tileSetName = tileSetName;
        this.tileSetImageName = tileSetImageName;
        this.backgroundLayerName = backgroundLayerName;
        this.blockedLayerName = blockedLayerName;
        this.createMap();
    }

    createMap() {
        // create the tile map
        this.map = this.scene.make.tilemap({ key: this.key });
        // add the tileset image to our map
        // name of layer exported from tiled, key of tileset image, frame width, frame height, margin, spacing in image
        
        //The first argument of addTilesetImage is the name of the tileset we used in Tiled. The second argument is the key of the image we loaded in the preload() function.
        // found here: https://stackabuse.com/phaser-3-and-tiled-building-a-platformer/
        this.tiles = this.map.addTilesetImage(this.tileSetName, this.tileSetImageName, 32, 32, 1, 2);
        // create our background layer
        // name of the layer in tiled file, tiles that we loaded, x starting pos, y starting pos
        this.backgroundLayer = this.map.createStaticLayer(this.backgroundLayerName, this.tiles, 0, 0)
        this.backgroundLayer.setScale(2);

        // create blocked layer
        this.blockedLayer = this.map.createStaticLayer(this.blockedLayerName, this.tiles, 0, 0);
        this.blockedLayer.setScale(2);
        this.blockedLayer.setCollisionByExclusion([-1]);

        // update the world bounds
        this.scene.physics.world.bounds.width = this.map.widthInPixels * 2;
        this.scene.physics.world.bounds.height = this.map.heightInPixels * 2;

        // limit the camera to the size of the map
        this.scene.cameras.main.setBounds(0, 0, this.map.widthInPixels * 2, this.map.heightInPixels * 2);
    }
}