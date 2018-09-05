'use strict';
class Table {
  constructor(selector, size) {
    this.selector = selector;
    this.size = size;
  }

  createTable(size){
    var rowArray = ['1','2','3','4','5','6','7','8', '9', '10', '11', '12', '13'];
    var collumnArray = ['a','b','c','d','e','f','g','h', 'i', 'j', 'k', 'l', 'm'];
    var figuresArray = ['Л','К','С','Ф','Кр','С','К','Л', '#', '#',, '#', '#']
    var nodes=[];
  
    for(var i = 0; i<size+1; i++){
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
       cell.classList.add('cellClass')
       row.appendChild(cell);
       
       // cell.addEventListener('click', ActivateCoordinate ) 
      }
      nodes.push(row);
     }
     this.selector.append(...nodes);
     }
    }
    
    class ChessTable extends Table {
      ActivateCoordinate(coord){
       var classRed = document.querySelectorAll('.redCell');
       if(classRed.length > 0){
        classRed[0].classList.remove('redCell');
        classRed[0].classList.add('cellClass');
        
       }
       var  previousCoordinate = document.getElementsByClassName('redCell')
        //console.log(classList)
        
        // previousCoordinate.removeClass('redCell');
        var coordinate = document.getElementById(coord);
        coordinate.className = 'redCell';
        coordinate.classList.add('cellClass')
        
        return coordinate.id;
      };

      getActiveCoordinate(){
        return document.querySelectorAll('.redCell');
      }

    }
  
    
  var table = new ChessTable(document.body, 8);
  table.createTable(8);
  //table.ActivateCoordinate2(a3);
  
  table.ActivateCoordinate('a3');
  table.ActivateCoordinate('a7');
  //table.ActivateCoordinate('b4');
  //table.ActivateCoordinate('d4');
  console.log(table.getActiveCoordinate());
  // chessTable(document.body, 10).setActiveCoordinate('a3');