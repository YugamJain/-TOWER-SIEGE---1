class poly{

    constructor(x, y, r) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02

        }

        this.body = Bodies.circle(x, y,r, options);

        this.image = loadImage("polygon.png");

        //NameSpacing(renaming width and height)
        this.r = r;
        World.add(world, this.body);
    }

    display() {
     //NameSpacing(renaming position of Ground)
        var pos = this.body.position;
        strokeWeight(2);
        fill("yellow");
        imageMode(CENTER)
        image(this.image,pos.x, pos.y, 40,40) ;

    }
}