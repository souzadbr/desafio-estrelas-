
const numeroMaximoDePersonagens = 671;
const nomePersonagem1 = document.getElementById ("nomePersonagem1");
const nomePersonagem2 = document.getElementById ("nomePersonagem2");
const nomePersonagem3 = document.getElementById ("nomePersonagem3");
const nomePersonagem4 = document.getElementById ("nomePersonagem4");

var id = Math.floor(Math.random() * numeroMaximoDePersonagens);
var id1 = Math.floor(Math.random() * numeroMaximoDePersonagens);
var id2 = Math.floor(Math.random() * numeroMaximoDePersonagens);
var id3 = Math.floor(Math.random() * numeroMaximoDePersonagens);


fetch(`https://rickandmortyapi.com/api/character/${id}`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    "Content-Type": 'application/json'
  },mode: 'cors',
  cache:'default'
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
   display_image(data.image);
  nomePersonagem1.innerHTML = data.name;
  });

  fetch(`https://rickandmortyapi.com/api/character/${id1}`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    "Content-Type": 'application/json',
  },
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    display_image1(data.image);
    nomePersonagem2.innerHTML = data.name;
       
  });
function display_image(image_url){
  document.getElementById("imagem1").src = image_url;
}

function display_image1(image_url){
  document.getElementById("imagem2").src = image_url;
}

fetch(`https://rickandmortyapi.com/api/character/${id2}`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    "Content-Type": 'application/json',
  },
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    display_image3(data.image);
    nomePersonagem3.innerHTML = data.name;
      
  });

function display_image3(image_url){
  document.getElementById("imagem3").src = image_url;
}

fetch(`https://rickandmortyapi.com/api/character/${id3}`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    "Content-Type": 'application/json',
  },
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    display_image4(data.image);
    nomePersonagem4.innerHTML = data.name;
    
  });

function display_image4(image_url){
  document.getElementById("imagem4").src = image_url;
}
