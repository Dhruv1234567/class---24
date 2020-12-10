class box{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height,{restitution:0.8,friction:1,density:1});
        this.width = width;
        this.height = height;
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