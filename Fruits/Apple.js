class Apple {
    constructor(x, y) {
        this.body = Bodies.rectangle(x, y, 10, 10);
        this.image = loadImage("../images/fruitsandCoins/Apple.png");
        this.visi = 255;
        World.add(world, this.body);
    }
    
    display() {
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 10, 10);
    }

    disApper() {
        World.remove(world, this.body);
        push();
        this.visi -= 10;
        tint(255, this.visi);
        image(this.image, this.body.position.x, this.body.position.y, 10, 10);
        pop();
    }
}