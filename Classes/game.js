/*
Ironhack Web Dev Jan 2021
Author: Jorge Sirias
Date: 2/20/2021
*/

class game{

    constructor(){

        this.gameObjects = [{gameObject: "2ball", img: "Images/ball.png"}, {gameObject: "3ball", img:"Images/redball.png"},
                            {gameObject: "4ball", img:"Images/flameball.png"}, {gameObject:"brick", img:"Images/brick.png"}];
        this.basketHoop = new basket();
        this.objectArr = [];
        this.timer = 30;
        this.score = 0;

    }

    createGameObject(){

        const rdm  = Math.floor(Math.random() * this.gameObjects.length);
        const rdmX = Math.floor(Math.random() * 360);
        

        switch(this.gameObjects[rdm].gameObject){

            case 'brick':
                this.anObject = new object(-2,5,rdmX,0,45,45,this.gameObjects[rdm].img);
                this.objectArr.push(this.anObject);
                break;
            
            case '2ball':
                this.anObject = new object(2,5,rdmX,0,45,45,this.gameObjects[rdm].img);
                this.objectArr.push(this.anObject);
                break;
        
            case '3ball':
                this.anObject = new object(3,7,rdmX,0,45,45,this.gameObjects[rdm].img);
                this.objectArr.push(this.anObject);
                break;

            case '4ball':
                this.anObject = new object(4,10,rdmX,0,80,80,this.gameObjects[rdm].img);
                this.objectArr.push(this.anObject);
                break;
    
        }

        return this.anObject
    }

    renderGameObjects(){
        
        this.objectArr.forEach((ballOrBrick, index) =>{
          
            ballOrBrick.draw()
            ballOrBrick.moveDown();

            if(ballOrBrick.currentY >= 490) {
                this.objectArr.splice(index, 1);
            }
        },);
        
    }

    checkCollision(){

        let endPoint = (this.basketHoop.currentX + this.basketHoop.width);

        this.objectArr.forEach( (ballOrBrick, index) => {

            if( (ballOrBrick.currentY - this.basketHoop.currentY >= 0) && 
                ((ballOrBrick.currentX - this.basketHoop.currentX > 0 ) &&  (ballOrBrick.currentX < endPoint)) ){
                
                //console.log("Collision detected");
                this.addScore(ballOrBrick.points);
                this.objectArr.splice(index,1);
                
            }

        });


    }

    addScore(points){

        let scoreDiv = document.querySelector(".left-bar");
        this.score += points;
        scoreDiv.innerText = `Score:${this.score}`
        //console.log(this.score);

    }

    startTimer(){
        
        

    }

}