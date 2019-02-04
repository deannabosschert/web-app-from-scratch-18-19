var request = new XMLHttpRequest()
var apiLink = 'https://api.unsplash.com/photos/?client_id=52ed480c90eaf026bd329345fd21431bdec643724f11f8aa54b49a48453edf8e'
var element = document.getElementById("root")


request.open('GET', apiLink , true)

request.onload = function () {

  var data = JSON.parse(this.response)

  localStorage.setItem('images', JSON.stringify(data))

  if (request.status >= 200 && request.status < 400) {
    data.forEach(imageUnsplash => {
      element.innerHTML+= '<img src="'+imageUnsplash.urls.regular+'">'
      console.log(imageUnsplash.urls.regular)
    });
  } else {
    console.log('error')
  }
}

request.send()
