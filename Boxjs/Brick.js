class Brick {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.image = loadImage("../images/Box/Brick.png");
        World.add(world, this.body);
    }
    display() {
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    }
}