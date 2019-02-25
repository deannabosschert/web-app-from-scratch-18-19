const request = new XMLHttpRequest()
const apiLink = 'https://api.unsplash.com/photos/?client_id=52ed480c90eaf026bd329345fd21431bdec643724f11f8aa54b49a48453edf8e'
const element = document.getElementById("root")


request.open('GET', apiLink , true)

request.onload = function () {

  const data = JSON.parse(this.response)

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


zometeen eerst doen:
- modules zoals opgeschreven hierin zetten (structuur)
