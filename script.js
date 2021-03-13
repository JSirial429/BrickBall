/*
Ironhack Web Dev Jan 2021
Author: Jorge Sirias
Date: 2/20/2021
*/

const canvas = document.getElementById('play-area')
const ctx = canvas.getContext('2d');

let newGame = new game();

let frame = 0;

setInterval( function(){

  frame++;
  
  ctx.clearRect(0,0,canvas.width, canvas.height);
  newGame.basketHoop.draw();
  
  if(frame % 15 === 0){
    newGame.createGameObject();
  }
  newGame.renderGameObjects();
  newGame.checkCollision();

}, 100);

document.onkeydown = function(event){

  event.preventDefault();

    newGame.basketHoop.checkOutOfBounds(event.key);

}
