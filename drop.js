class Drop {
    constructor(
    )
    {
    this.x = random(width) ;  
    this.y = random(700,50);
    this.z = random(10,30);
    this.len = map(this.z,0,20,15,15)
    this.Yspeed = map(this.z,0,30,40,500)
    }
    
    fall(){
        this.y  =this.y + this.Yspeed
        var gravity = map(this.z,0,300,0,0.4)
        this.Yspeed = this.Yspeed + gravity
    
        if(this.y > height){
            this.y = random(-100,-190);
            this.Yspeed = map(this.z,0,20,5,10);
    
        }
    }
    
    display(){
    var drip = map(this.z,0,20,1,3)
    strokeWeight(2.5);
    stroke("blue")
    line(this.x,this.y,this.x,this.y+this.len);
    }
    }