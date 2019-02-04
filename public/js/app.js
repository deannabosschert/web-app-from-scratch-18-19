var request = new XMLHttpRequest();
var apiLink = 'https://api.unsplash.com/photos/?client_id=52ed480c90eaf026bd329345fd21431bdec643724f11f8aa54b49a48453edf8e';

request.open('GET', apiLink , true);

request.onload = function () {

  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(image => {
      console.log(image.color);
    });
  } else {
    console.log('error');
  }
}

request.send();
