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
       width: 800,
       height: 600,
       showAngleIndicator: true
   }
});

Render.run(render);

// create runner
var runner = Runner.create();
Runner.run(runner, engine);

// add bodies
Composite.add(world, [
   Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
   Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
   Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
   Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
   Bodies.circle(200,300,50, { isStatic: false })
])