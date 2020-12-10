class log{
    constructor(x,y,height,angle){
        this.body=Bodies.rectangle(x,y,20,height,{restitution:0.8,friction:1,density:1});
        this.width = 20;
        this.height = height;
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);
        
    }
    display(){
        var t=this.body.position;
        push();
        translate(t.x,t.y);
        rotate(this.body.angle);
         rectMode(CENTER);
        rect(0,0,this.width,this.height);
pop();
    }
}