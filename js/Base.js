class Base{
    constructor(x,y,width,height,isStatic,color){
        var options = {isStatic: isStatic}
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.w = width;
        this.h = height;
        this.color = color;
        World.add(world,this.body);
    }

    display(){
        rectMode(CENTER);
        fill(this.color)
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
    }
}