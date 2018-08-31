// global variables:
// var FIELD_SIZE_X = 20;
// var FIELD_SIZE_Y = 20;
var SNAKE_SPEED = 300; //an interval between skake's movement
var snake = []; // it is a snake
var direction = 'y+'; // movement along y axis down
var gameIsRunning = false; // is game started
var snake_timer; // snake's timer
var food_timer;
var score = 0; // result 
var scoreBoard = document.createElement('div');
var barrierMassiv = [];


function init(){
  prepareGameField() // field generation
  var wrap = document.getElementsByClassName('wrap')[0];
  
  //prepare a size of a container
  if(16* (FIELD_SIZE_X+1)<380){
    wrap.style.width = '380px';
  }
  else{
    wrap.style.width = (16* (FIELD_SIZE_X+1)<380).toString()+'px';
  }
  // actions for buttons 'start' and 'new game'
document.getElementById('snake-start').addEventListener('click', startGame);
document.getElementById('snake-renew').addEventListener('click', refreshGame);
//actions for keyBoard
window.addEventListener('keydown', changeDirection); // ===addEventListener('keydown', changeDirection)

scoreBoard.className = 'scoreBoard';
wrap.appendChild(scoreBoard);


}
//generation of a game field
function prepareGameField(){
  // create a table
  var game_table = document.createElement('table');
  game_table.setAttribute('class', 'game-table'); // see css

  //feneration of table's cells
  for(var i=0; i<FIELD_SIZE_Y;i++){ //field 20*20 see var
   // create rows
    var row = document.createElement('tr');
    row.className ='game-table-row row-' +i;  // see css 
    for(var j=0; j<FIELD_SIZE_X;j++){
      // create cells
      var cell = document.createElement('td');
      cell.className ='game-table-cell cell-' +i + '-' + j; // see css 
      row.appendChild(cell); // addition of cells
    }
    game_table.appendChild(row); // addition of rows
  }
  document.getElementById('snake-field').appendChild(game_table); // addition of a table
}

// the start of the game
function startGame(){
  gameIsRunning: true;
  respawn();

  snake_timer = setInterval(move, SNAKE_SPEED);
  setTimeout(createFood, 500);
}
/////////////////////////////////////////////////////////////////

// the function of the snake position
function respawn(){
  // snake is array td
  // at the beginning the length of the snake =2 

  // respawn the snake from the center
  var start_coord_x = Math.floor(FIELD_SIZE_X/2);
  var start_coord_y = Math.floor(FIELD_SIZE_Y/2);
  // a head of a snake
  var snake_head = document.getElementsByClassName('cell-' + start_coord_y + '-'+start_coord_x)[0];
  snake_head.setAttribute('class', snake_head.getAttribute('class') + ' snake-unit');
  
  // a tail of a snake
  var snake_tail = document.getElementsByClassName('cell-' + (start_coord_y-1) + '-'+start_coord_x)[0];
  snake_tail.setAttribute('class', snake_tail.getAttribute('class') + ' snake-unit');
  snake.push(snake_head);
  snake.push(snake_tail);
  //console.log(snake_head, 'snake');
  // console.log(snake_tail.className, 'snake_tail');
}
// a movement of a snake
function move(){
 // console.log(snake, 'snake');
  var snake_head_classes = snake[snake.length-1].getAttribute('class').split(' '); // получение головы змеи
// movement of a head
//console.log('snakeClass', snake_head_classes);
  
  var new_unit;
  var snake_coords = snake_head_classes[1].split('-');
  var coord_y = parseInt(snake_coords[1]);
  var coord_x = parseInt(snake_coords[2]);
  var snakeHead = [...snake_head_classes[1]].splice(5).join("");
  
// define a new point
  if(direction == 'x-'){
    new_unit = document.getElementsByClassName('cell-'+(coord_y)+'-'+(coord_x-1))[0];
  } 
  else if(direction == 'x+'){
    new_unit = document.getElementsByClassName('cell-'+(coord_y)+'-'+(coord_x+1))[0];
  }
  else if(direction == 'y+'){
    new_unit = document.getElementsByClassName('cell-'+(coord_y-1)+'-'+(coord_x))[0];
  }
  else if(direction == 'y-'){
    new_unit = document.getElementsByClassName('cell-'+(coord_y+1)+'-'+(coord_x))[0];
  }
 
// check
//1) new_unit is not a part of a snake
//2) SNAKE IS NOT ON A BORDER
if(!isSnakeUnit(new_unit) && new_unit !== undefined){
  // add new part of a snake
  new_unit.setAttribute('class', new_unit.getAttribute('class') +' snake-unit');
  snake.push(new_unit);
  
  
 // check if we need to clean tail
  if(!haveFood(new_unit)){
    // find tail
    var removed = snake.splice(0,1)[0];
  //  console.log(removed, 'removed')
    var classes = removed.getAttribute('class').split(' ');
    // delete tail
    removed.setAttribute('class', classes[0]+ ' ' + classes[1])
  //  console.log(classes, 'classes');
  }
  if(barrierMassiv.includes(snakeHead)){finishTheGame();}
}
else{
  finishTheGame();
}
//console.log('snake', snakeMassiv);

}
console.log(barrierMassiv, 'barrier');
function isSnakeUnit(unit){
  var check = false;

  if(snake.includes(unit)){
    check = true
  }
  return check;
}

function haveFood(unit){
  var check = false;
  var unit_classes = unit.getAttribute('class').split(' ');
  //if food
  if(unit_classes.includes('food-unit')){
  //  console.log(unit_classes.includes('food-unit'), 'unit_classes');
    check = true;
    createFood();
    createBarrier();
    score++;
    scoreBoard.textContent = 'Набранные очки: ' + score.toString();
   ;
  }
  return check;
}
function createFood(){
  var foodCreated = false;
  while(!foodCreated){
    //choose random mesh
    var food_x = Math.floor(Math.random()*FIELD_SIZE_X);
    var food_y = Math.floor(Math.random()*FIELD_SIZE_Y);

    var food_cell = document.getElementsByClassName('cell-'+(food_y)+'-'+(food_x))[0];
    var food_cell_classes = food_cell.getAttribute('class').split(' ');

    // check on snake
    if(!food_cell_classes.includes('snake-unit')){
      var classes = '';
        for(i =0; i<food_cell_classes.length; i++){
        classes += food_cell_classes[i] + ' ';
    }
    //console.log(classes, 'classes')
    
    food_cell.setAttribute('class', classes + 'food-unit');
    foodCreated = true;
    //console.log(food_cell, 'food_cell')
  }
  return foodCreated;
}
}
function createBarrier(){
  var barrier_x = Math.floor(Math.random()*FIELD_SIZE_X);
  var barrier_y = Math.floor(Math.random()*FIELD_SIZE_Y);
  var barrier_cell = document.getElementsByClassName('cell-'+(barrier_y)+'-'+(barrier_x))[0];
  // var barrier_cell_classes = barrier_cell.getAttribute('class').split(' ');
  // console.log("barrier_cell.className", barrier_cell.className )
  var classes = ' ';
  if(!/snake-unit/.test(barrier_cell.className)){
    classes = barrier_cell.className + ' ';     
  }  
  barrier_cell.setAttribute('class', classes +'barrier-unit');
  barrierMassiv.push(barrier_cell.className.match(/\d+-\d+/)[0]);
}


function changeDirection(e){
  switch(e.keyCode) {
    case 37: //left
      if(direction != 'x+'){
        direction = 'x-';
      }
      break;
    case 38: //up
      if(direction != 'y-'){
        direction = 'y+';
    }
    break;
    case 39: //right
      if(direction != 'x-'){
        direction = 'x+';
    }
    break;
    case 40: //down
      if(direction != 'y+'){
        direction = 'y-';
    }
    break;
  }
}
// function af the game's finish
function finishTheGame(){
  gameIsRunning = false;
  clearInterval(snake_timer);
  alert('You lose! your result is: ' +score.toString());
}
function refreshGame(){
  location.reload();
}
//initialization
window.onload = init;


 
    
     