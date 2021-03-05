class object {

    constructor(points, speed,currentX, currentY,width, height, imgSource){
        this.points = points;
        this.speed = speed;
        this.currentX = currentX;
        this.currentY = currentY;
        this.width = width;
        this.height = height;
        this.img = new Image();
        this.img.src = imgSource; 
    
    }

    setPointValue(arg){
        this.points = arg;
    }
    
    getPointValue(arg){
        return this.points;
    }
    
    setSpeed(arg){
        this.speed = arg;
    }

    getSpeed(){
        return this.speed;
    }

    draw(){
        ctx.drawImage(this.img, this.currentX, this.currentY, this.width, this.height);
    }

    moveDown(){
        this.currentY += this.speed
    }

}