class Cactus {
    constructor(x, y) {
        this.body = Bodies.rectangle(x, y, 50, 50);
        this.image = loadImage("../images/EnemyandScale/Cactus.png");
        World.add(world, this.body);
    }
    display() {
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    }
}