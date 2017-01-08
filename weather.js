const weather = 'https://api.apixu.com/v1/current.json?key=cd93499e97644fcc873154715163112&q=Manchester';
const baseColors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];
const tintColors = ["#F8DDDE", "#FEDBB4", "white", "#0193D9", "#009245", "#E7E6F9"];

let manchester = [];

fetch(weather)
  .then((blob) => blob.json())
  .then((data) => manchester = data)
  .then((data) => displayWeather(data));

let iconWeather = document.querySelector('#weather');
let temp = document.querySelector('#temp');
let textLocation = document.querySelector('#text-location');
let textWeather = document.querySelector('#text-weather');


function displayWeather() {
  iconWeather.src = "http://" + manchester.current.condition.icon;
  temp.innerHTML = manchester.current.temp_c + '<span class="degrees"> c </span>';
  textLocation.innerHTML = manchester.location.name;
  textWeather.innerHTML = manchester.current.condition.text;
};

const background = document.querySelector('.weather');

window.addEventListener('load', changeBackground);

function changeBackground() {
  let random = Math.floor(Math.random() * baseColors.length);
  let randomBaseColor = baseColors[random];
  let randomTintColor = tintColors[random];
  background.style.background = 'linear-gradient(0deg,' + randomBaseColor + ',' + randomTintColor + ')';
  background.style.transition = 'background , 2s, ease';
}

setInterval(changeBackground, 2500);


/* toggle */
let showing = true;
temp.addEventListener('click', degreeToF);

function degreeToF() {
 if(showing) {
   temp.innerHTML = manchester.current.temp_c + '<span class="degrees"> c </span>';
   showing = false;
 } else {
   // convert to
   const f = manchester.current.temp_c * 1.8 + 32;
   temp.innerHTML = f.toFixed(0) + '<span class="degrees"> f </span>';
   showing = true;
 }
}
