const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var canvas, mario, ground, brick1, brick2, qBox, isTouched = 0, randFruit, apple, mushroom, cupCake, iceCream, walkMushroom, cactus;

function setup() {
    canvas = createCanvas(displayWidth, displayHeight - 116);
    engine = Engine.create();
    world = engine.world;

    mario = new Mario(400, 400);

    brick1 = new Brick(500, 400);
    qBox = new QBox(550, 400);
    brick2 = new Brick(600, 400);

    ground = new Ground(displayWidth / 2, displayHeight - 156);

    // randFruit = Math.round(random(1, 2));
    randFruit = 1


    switch (randFruit) {
        case 1: apple = new Apple(550, 10); break;

        // case 2: cactus = new Cactus(550, 10);
        // mushroom.display();
        //     var mushroomCollide = Matter.SAT.collides(mario.body, mushroom.body);
        //     if (mushroomCollide.collided) {
        //         mario.scale += 0.1;
        //     } break;

        // case 3: cupCake.display(); break;

        // case 4: iceCream.display(); break;
        // case 5: walkMushroom.display(); break;
        // case 6: cactus.display(); break;
        default: break;
    }

    Engine.run(engine);
}

function draw() {
    background("#5e91fe");

    Engine.update(engine);

    mario.display();
    ground.display();
    brick1.display();
    brick2.display();
    qBox.display();

    var collision = Matter.SAT.collides(mario.body, qBox.body);
    if (collision.collided) {
        isTouched = 1;
    }

    //
    // mushroom = new Mushroom(550, 10);
    // cupCake = new CupCake(550, 10);
    // iceCream = new IceCream(550, 10);
    // walkMushroom = new WalkingMushroom(550, 10);

    if (isTouched == 1) {
        switch (randFruit) {
            case 1: apple.display(); 
            var appleCollide = Matter.SAT.collides(mario.body, apple.body);
                if (appleCollide.collided) {
                    apple.disApper();
                } break;
            default: break;
        }
    }
}

function keyPressed() {
    if (keyCode === 32 && mario.body.position.y >= 515) {
        mario.jump();
    }
    else if (keyCode === 39) {
        mario.right();
    }
    else if (keyCode === 37) {
        mario.left();
    }
}