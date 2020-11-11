class Mario {
    constructor(x, y) {
        var options = {
            'density': 1,
            'friction': 0.8
        }
        this.body = Bodies.rectangle(x, y, 40, 50, options);
        this.image = loadImage("../images/Run.png");
        World.add(world, this.body);
    }

    display() {
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 40, 50);
    }

    jump() {
        Matter.Body.setVelocity(this.body, { x: 0, y: -15 });
    }

    right() {
        Matter.Body.setPosition(this.body, { x: (this.body.position.x + 20), y: this.body.position.y });
    }

    left() {
        Matter.Body.setPosition(this.body, { x: (this.body.position.x - 20), y: this.body.position.y });
    }
}