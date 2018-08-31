var FIELD_SIZE_X = 20;
var FIELD_SIZE_Y = 20;

export function init(){
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