class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA : body1,
            bodyB : body2,
            pointb:{x:this.offsetX, y: this.offsetY}
        }
    //console.log(options)
    this.rope=Constraint.create(options)
    World.add(world,this.rope)
    }
    display(){
        var pointA=this.rope.body1.position;
        var pointB=this.rope.body2.position;

        strokeweight(2)

        var Anchor1X=pointA.x
        var Anchor1Y=pointA.y

        var Anchor2X=pointB.x+this.offsetX
        var Anchor2X=pointB.x+this.offsetY

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}
                
        
        
    