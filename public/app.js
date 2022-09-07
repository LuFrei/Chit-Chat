// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const pixi = new PIXI.Application({ width: 640, height: 360, backgroundColor: 0xe72b01 });

// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(pixi.view);

// load the texture we need
pixi.loader.add('bunny', 'bunny.png').load((loader, resources) => {
    // This creates a texture from a 'bunny.png' image
    const bunny = new PIXI.Sprite(resources.bunny.texture);

    // Setup the position of the bunny
    bunny.x = pixi.renderer.width / 2;
    bunny.y = pixi.renderer.height / 2;

    // Rotate around the center
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    // Add the bunny to the scene we are building
    pixi.stage.addChild(bunny);

    // Listen for frame updates
    pixi.ticker.add(() => {
         // each frame we spin the bunny around a bit
        bunny.rotation += 0.01;
    });
});