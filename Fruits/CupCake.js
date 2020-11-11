class CupCake {
    constructor(x, y) {
        this.body = Bodies.rectangle(x, y, 10, 10);
        this.image = loadImage("../images/fruitsandCoins/CupCake.png");
        World.add(world, this.body);
    }
    display() {
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 10, 10);
    }
}