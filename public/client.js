var submitButton = document.getElementById('submit_button');
// var formData = new FormData(document.getElementById('form'));
submitButton.addEventListener('click', sendInput);
var xhr = new XMLHttpRequest();

function sendInput() {
  var input = document.getElementById('input');
  var jsonBody = JSON.stringify({
    [input.name]: input.value
  })

  xhr.open('POST', 'http://localhost:3000/send', true); // инициализация соединения
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.send(jsonBody);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
      var serverResponse = document.getElementById('response');
      serverResponse.innerText = JSON.parse(xhr.response).modifiedText;
    }
  }
}


// post-запрос
// function sendInput(){
//   var input = document.getElementById('input');
//   var body = `${input.name}=` + encodeURIComponent(input.value);

//   xhr.open('Post', 'http://localhost:3000/send', true); // инициализация соединения
//   xhr.setRequestHeader('Content-Type', 'multipart/form-data');
//   xhr.send(body);
//   xhr.onreadystatechange = function(){
//     if(xhr.readyState === xhr.DONE && xhr.status === 200){
//       var serverResponse = document.getElementById('response');
//       serverResponse.innerText = xhr.response;
//   }
//   }
// }





// get-запрос
// function sendInput(){
//   var input = document.getElementById('input');
//   var params = `${input.name}=` + encodeURIComponent(input.value);

//   xhr.open('GET', 'http://localhost:3000/send?' + params, true); // инициализация соединения
//   xhr.send();
//   xhr.onreadystatechange = function showServerAnswer() {
//     if(xhr.readyState === xhr.DONE && xhr.status === 200){
//       var serverResponse = document.getElementById('response');
//       serverResponse.innerText = xhr.response;
//     }
//   }

// }