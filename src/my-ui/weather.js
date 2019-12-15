import './weather.css'
import Forecast from './forecast'

const cityForm = document.querySelector('form');
const details = document.querySelector('.details');
const big = document.querySelector('#time');
const small = document.querySelector('#conditions');
const card = document.querySelector('.card');
const time = document.querySelector('.time'); 
const forecast = new Forecast();

const updateUI = (data) => {

    const offset = data.cityDets.TimeZone.GmtOffset;

    // updates details
    details.innerHTML = `
    <h5 class="my-3">${data.cityDets.EnglishName}</h5>
    <div class="my-3">${data.weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${data.weather.Temperature.Imperial.Value}</span>
        <span>&deg;F</span>
    </div>`;

    //updates image
    let timeOfDay = data.weather.IsDayTime ? "img/pexels-photo-912364.jpeg" : "img/2FFvzA2zeqoVJ2SVhDmmumdPfnVEcahMce9nMwwksSDdRvRqJZjuJCwyFbKkAA4ZMXS9jqNy9U6tyfvvtidPLAGWJh4qoersDE56fYyTFgw5VVSYZWmfTyXi1DqfC.jpeg";
    big.setAttribute('src', timeOfDay);

    // update local time
    let hours = 0;
    let seconds = 0;
    let minutes = 0;

    //turn on display
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
npm
    return offset;
}

const timer = (offdata) => {

    sessionStorage.setItem('offset', offdata);

    const offset = offdata;

    setInterval(() => {

        const timeroffset = sessionStorage.getItem('offset');
        const localTime = new Date();

        let hours = localTime.getHours() + parseInt(timeroffset) + 6 > 23 ? ('0' + (localTime.getHours() + parseInt(timeroffset) + 6 - 24)).slice(-2) 
        : localTime.getHours() + parseInt(timeroffset) + 6;

        const minutes = ('0' + localTime.getMinutes()).slice(-2);
        const seconds = ('0' + localTime.getSeconds()).slice(-2);

        const html = `
        <p>The local time is: ${hours} : ${minutes} : ${seconds}</p>`;
        time.innerHTML = html;

    }, 1000);
}

cityForm.addEventListener("submit", e => {
    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    forecast.updateCity(city)
    .then( data => updateUI(data))
    .then( data => timer(data))
    .catch( err => console.log(err));

sessionStorage.setItem('city', city);
})

if(sessionStorage.getItem('city')){
forecast.updateCity(sessionStorage.getItem('city'))
.then(data => updateUI(data))
.then( data => timer(data))
.catch(err => console.log(err));
}
