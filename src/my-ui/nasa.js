import 'babel-polyfill';
import NASA from './nasa-class';

// added polyfill to handle async function in imported module

const userForm = document.querySelector('.searchDate');
const userInput = document.querySelector('#input');
const displayDate = document.querySelector('.displayDate');
const displayTitle = document.querySelector('.displayTitle');
const description = document.querySelector('.description');
const img = document.querySelector('#nasaPhoto');
const vid = document.querySelector('#nasaVideo');
const nasaPic = new NASA();
const newDate = new Date(); 
const pattern = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
const currentDate = newDate.getFullYear() + "-" + (newDate.getMonth()+ 1) + "-" + newDate.getDate();
const cutoffDate = new Date(1996,1,1).getTime();

nasaPic.GetData(currentDate)
.then(data => nasaPic.updateUI(data, displayDate, description, displayTitle, img, vid))
.catch(err => console.log(err))

userForm.addEventListener('submit' , e => {
    e.preventDefault();
        const userTime = new Date(userInput.value.trim()).getTime();
        if(pattern.test(userInput.value.trim()) && userTime >= cutoffDate){
            // && userInput.value.getTime() === cutoffDate.getTime()
            nasaPic.GetData(userInput.value.trim())
            .then(data => nasaPic.updateUI(data, displayDate, description, displayTitle, img, vid))
            .catch(err => console.log(err))
        } else {
            alert('Data Format is incorrect OR is not after January 1st, 1996');
        }
})