class Link{
    constructor(BodyA,BodyB){
        var lastLink = BodyA.body.bodies.length - 2;
        this.link = Matter.Constraint.create({
            bodyA:BodyA.body.bodies[lastLink],
            bodyB:BodyB.body,length : 10,
            stiffness: 0.8,
        });
        World.add(world,this.link);
    }
}