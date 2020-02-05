import '../my-ui/weather.css';
import {Forecast} from './forecast';

const cityForm = document.querySelector('form');
const details = document.querySelector('.details');
const big = document.querySelector('#time');
const small = document.querySelector('#conditions');
const card = document.querySelector('.card');
const time = document.querySelector('.time'); 
const forecast = new Forecast();

const updateUI = (data) => {

    console.log(data);
    const offset = data.timezone / 3600;

    // updates details
    details.innerHTML = `
    <h5 class="my-3">${data.name}</h5>
    <div class="my-3">${data.weather[0].main}</div>
    <div class="">
        <span>${data.main.temp}</span>
        <span>&deg;F</span>
    </div>`;

//     //updates image
    let timeOfDay = new Date() > (data.sys.sunrise * 1000) &&  new Date() < (data.sys.sunset * 1000)  ? "img/pexels-photo-912364.jpeg" : "img/2FFvzA2zeqoVJ2SVhDmmumdPfnVEcahMce9nMwwksSDdRvRqJZjuJCwyFbKkAA4ZMXS9jqNy9U6tyfvvtidPLAGWJh4qoersDE56fYyTFgw5VVSYZWmfTyXi1DqfC.jpeg";
    big.setAttribute('src', timeOfDay);

//     // update local time
        let hours = 0;
        let seconds = 0;
        let minutes = 0;

//     //turn on display
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

    return data.timezone / 3600;
}

cityForm.addEventListener("submit", e => {
    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    forecast.getWeather(city).then( data => updateUI(data)).catch( err => console.log(err));
})

