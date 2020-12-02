class Box {
    constructor(x, y, width, height){
    var options = {
        restitution: 1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.x  =x;
    this.y = y;
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    }

    display(){
        // Name Space
        var pos = this.body.position
        push ();
        rectMode(CENTER);
        fill ("orange");
        translate(pos.x, pos.y);
        rotate (this.body.angle);
        rect(0, 0, this.width, this.height);
        pop ();
    }
}





