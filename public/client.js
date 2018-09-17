var submitButton = document.getElementById('submit_button');
var formData = new FormData(document.getElementById('form'));
submitButton.addEventListener('click', sendInput);

var xhr = new XMLHttpRequest();

function sendInput(){
  var input = document.getElementById('input');
  var params = `${input.name}=` + encodeURIComponent(input.value);
  
  xhr.open('GET', 'http://localhost:3000/send?' + params, true); // инициализация соединения
  xhr.send();
  xhr.onreadystatechange = function showServerAnswer() {
    if(xhr.readyState === xhr.DONE && xhr.status === 200){
      var serverResponse = document.getElementById('response');
      serverResponse.innerText = xhr.response;
    }
  }
  
}




