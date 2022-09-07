// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const pixi = new PIXI.Application({ width: 640, height: 360, backgroundColor: 0xe72b01 });

// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(pixi.view);

// Add container with square
let frame = new PIXI.Graphics();
frame.beginFill(0x666666);
frame.lineStyle({ color: 0xffffff, width: 4, alignment: 0 });
frame.drawRect(0, 0, 208, 208);
frame.position.set(100, 100);
pixi.stage.addChild(frame);

// rotate the square
pixi.ticker.add(() => {
    // each frame we spin the bunny around a bit
   frame.rotation += 0.01;
});

module.exports = {pixi};