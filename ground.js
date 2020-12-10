class ground{
    constructor(x,y,width,height){
        var propertie={isStatic:true};
        this.body=Bodies.rectangle(x,y,width,height,propertie);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        var t=this.body.position;
        rect(t.x,t.y,this.width,this.height);
    }
}