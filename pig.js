class pig{
    constructor(x,y){
        this.body=Bodies.rectangle(x,y,50,50,{restitution:0.8,friction:0.3,density:1});
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);
    }
    display(){
        push();
        var p = this.body.position;
        translate(p.x,p.y);
        rotate(this.body.angle)
        rectMode(CENTER);
        fill("green");
        rect(0,0,this.width,this.height);
        pop();
    }
}