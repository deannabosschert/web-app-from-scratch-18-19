'use strict'

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




// // modules
// import Router from './modules/router.js'
// import Api from './modules/api.js'
// import Detail from '.modules/detail.js'
// import Render from '.modules/render.js'
// (alvast voor wanneer ik alles in aparte bestanden doe op het einde)


const app = {
  app.init();
}

const router = {
  check wat voor route er exact opgevraagd wordt
  this.handle()

  template rendering??

  check of je niet al herbruikbare data in je localStorage hebt staan (if data in localStorage, dan module localStorage aanroepen?)


  (hieronder ook de detailpagina dingen)
    userClicksOnParagraph
    --> router.handle check wat voor data er wordt gevraagd, meestal een id (moet t niet routes.handle zijn..?)
    routes.detail(id)  check of dit id iets/er is en wat voor data er gerendert gaat worden (template rendering)
    loader start
    api.get(id) call deze data uit de api
    loader stop

    if error, render.error(error)
    else render.detail(id)


}


const api = {
  api.get
  call alle data uit de api

  api.parse
  parse deze data

  store die data
  render.overview(data)
}

const render = {
  if error, dan de module errors aanroepen (nog aanmaken)
  daarin rendert de bijbehorende errorpagina incl errorcode
 (of moet render.error wel in deze module/dit blokje code?)

 else, render.overview (de gewenste data)

}

(function(){
  const app = {

  },

  const router = {

  },

  

})()
