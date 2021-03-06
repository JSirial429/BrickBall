/*
Ironhack Web Dev Jan 2021
Author: Jorge Sirias
Date: 2/20/2021
*/
class basket extends object {

    constructor(){
        super(0,6,170, 470, 80, 80, 'Images/basket.png');
        this.pointsTotal = 0;
    }

    setPointTotal(addPoints){
        this.pointTotal = addPoints;
    }

    getPointTotal(){
        return this.pointTotal;
    }

    basketMade(ball){
        this.pointTotal += ball;
    }

    move(direction){

        if(direction == "left"){
            this.currentX -= this.speed;
        }
        else if(direction == "right"){
            this.currentX += this.speed;
        }
    }

    checkOutOfBounds(arrowDirection){

        if((arrowDirection == "ArrowLeft") && (this.currentX - this.speed >= 0)){
            this.move("left");
        }
        else if((arrowDirection == "ArrowRight") && (this.currentX + this.speed <= 320)){     
            this.move("right");
        }

    }

}