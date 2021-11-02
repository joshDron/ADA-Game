

var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Body = Matter.Body,
    Events = Matter.Events,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Bodies = Matter.Bodies;

// create engine
var engine = Engine.create(),
world = engine.world;

// create renderer
var render = Render.create({
   element: document.body,
   engine: engine,
   options: {
       width: innerWidth,
       height: innerHeight,
       showAngleIndicator: true
   }
});

Render.run(render);

// create runner
var runner = Runner.create();
Runner.run(runner, engine);

class things {
    constructor() {
        
    }
}
statics = {
    toptWall: Bodies.rectangle(400, 25, 2000, 50, { isStatic: true }),
    floor: Bodies.rectangle(400, 600, 2000, 50, { isStatic: true }),
    leftWall: Bodies.rectangle(25, 300, 50, 800, { isStatic: true }),
}

// add bodies
Composite.add(world, [
   statics.toptWall,
   statics.floor,
   statics.leftWall,
   
])
