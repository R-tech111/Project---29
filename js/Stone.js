class Stone  {
    constructor(x,y,width,height){
        var options = {restitution:0.6}
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.w = width
        this.h = height
    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0 ,0 ,this.w ,this.h);
        pop();
    }
}