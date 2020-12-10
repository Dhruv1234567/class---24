class bird{
    
        constructor(x,y){
            this.body=Bodies.rectangle(x,y,50,50,{restitution:0.5,friction:1,density:1.5});
            this.width = 50;
            this.height = 50;
            World.add(world,this.body);
        }
        display(){
            var p = this.body.position;
            p.x=mouseX;
            p.y=mouseY;
            push();
            translate(p.x,p.y);
            rotate(this.body.angle)
            rectMode(CENTER);
            fill("black");
            rect(0,0,this.width,this.height);
            pop();
        
    }
}