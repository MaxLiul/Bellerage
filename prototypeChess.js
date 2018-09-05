function Table(selector, size){
  this.selector = selector;
  this.size = size;
  this.createTable = function(){
    var rowArray = ['1','2','3','4','5','6','7','8', '9', '10', '11', '12', '13'];
    var collumnArray = ['a','b','c','d','e','f','g','h', 'i', 'j', 'k', 'l', 'm'];
    var figuresArray = ['Л','К','С','Ф','Кр','С','К','Л', '#', '#',, '#', '#'];
    var nodes=[];
    for(i = 0; i<this.size+1; i++){
      var row = document.createElement('div');
      row.className = 'rowClass';
      // document.body.appendChild(row)
      
      for(var j = 0; j<this.size+1; j++){
        var cell = document.createElement('div')
        if((j+i)%2 == 1|| i==this.size || j==this.size){
          cell.className = 'cellClassWhite';
          cell.setAttribute('id', collumnArray[j] + rowArray[i])
      }
        else{
          cell.className = 'cellClassBlack';
          cell.setAttribute('id', collumnArray[j] + rowArray[i])
        }
        if(j==this.size){
          cell.textContent = rowArray[i];
        }
        if(i ==this.size){
        cell.textContent = collumnArray[j];
        }
        if((i ==this.size-2|| i==1) && j!=this.size){
        cell.textContent = 'П';
        }
        if((i ==0|| i==this.size-1) && j!=this.size){
        cell.textContent = figuresArray[j];
        }
        row.appendChild(cell);
        // cell.addEventListener('click', ActivateCoordinate ) 
      }
      nodes.push(row);
      }
      this.selector.append(...nodes);
    }
}



function ChessTable(selector, size){
// this.selector = selector;
// this.size = size;
}
ChessTable.prototype = Object.create(Table);
// ChessTable.prototype = new Table(document.body, 8);

// ChessTable.prototype.ActivateCoordinate = function(coord){
// var activeElems = this.selector.getElementsByClassName('redCell');
// var coordinate = document.getElementById(coord);
// if(activeElems.length == 0){coordinate.className =  'redCell'};
// // coordinate.className = 'redCell';
// return coordinate.id;
// }

// ChessTable.prototype.getActiveCoordinate = function(){
//   return document.querySelectorAll('.redCell');
// }

  // var table = new ChessTable(document.body, 8);
  // table.createTable();
  // table.ActivateCoordinate('d3'); 
  // table.ActivateCoordinate('b3'); 
  // table.ActivateCoordinate('d3'); 
  // table.ActivateCoordinate('f3'); 

  // table.getActiveCoordinate();
 // table.selector = document.body;
 // table.size = 8;
  // table.createTable();
  //table.ActivateCoordinate2('a2')