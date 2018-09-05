function chessTable(selector, size = 8){
var rowArray = ['1','2','3','4','5','6','7','8', '9', '10', '11', '12', '13'];
var collumnArray = ['a','b','c','d','e','f','g','h', 'i', 'j', 'k', 'l', 'm'];
var figuresArray = ['Л','К','С','Ф','Кр','С','К','Л', '#', '#',, '#', '#']
var nodes=[];
var activeElems = selector.getElementsByClassName('redCell'); 
this.selector = selector;
this.size = size;

this.createTable = function(size){
  for(i = 0; i<size+1; i++){
    var row = document.createElement('div');
    row.className = 'rowClass';
    // document.body.appendChild(row)
    
    for(var j = 0; j<size+1; j++){
      
      var cell = document.createElement('div')
      if((j+i)%2 == 1|| i==size || j==size){
        cell.className = 'cellClassWhite';
        cell.setAttribute('id', collumnArray[j] + rowArray[i])
    }
      else{
        cell.className = 'cellClassBlack';
        cell.setAttribute('id', collumnArray[j] + rowArray[i])
      }
      if(j==size){
        cell.textContent = rowArray[i];
     }
     if(i ==size){
      cell.textContent = collumnArray[j];
     }
     if((i ==size-2|| i==1) && j!=size){
      cell.textContent = 'П';
     }
     if((i ==0|| i==size-1) && j!=size){
      cell.textContent = figuresArray[j];
     }
     row.appendChild(cell);
     // cell.addEventListener('click', ActivateCoordinate ) 
    }
    nodes.push(row);
   }
   selector.append(...nodes);
   }

  //  function ActivateCoordinate(coord){
  //   coordinate = coord.target;
  //   coordinate.className = 'redCell';
  //   getActiveCoordinate();
  //   //console.log(activeElems);
  //   //selector.appendChild(coordinate);
  //   return coordinate;
  //  }
    this.ActivateCoordinate2 = function(coord){
    coordinate = document.getElementById(coord);
    coordinate.className = 'redCell';
    return coordinate.id;
     
    }
    this.getActiveCoordinate = function(){
     for(var i=0; i<activeElems.length; i++ ){
      console.log(activeElems[i].id)
     }
      // activeElems.forEach(item => console.log(item.id))
      //console.log(activeElems.length)
   
    //return ActivateCoordinate.target.id;
  }
  
}
var table = new chessTable(document.body, 8);
table.createTable(8);
//table.ActivateCoordinate2(a3);

table.ActivateCoordinate2('a3');
table.ActivateCoordinate2('a7');
table.ActivateCoordinate2('b4');
table.ActivateCoordinate2('d4');
table.getActiveCoordinate();
// chessTable(document.body, 10).setActiveCoordinate('a3');