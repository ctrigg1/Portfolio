class NASA{
    constructor(){
        this.key = 'jtbtjVmZZcSxwHe2ogejLHk1nQI1MkvPD2hZ6aUY'
    } 

    async GetData(date){
    
        const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=` + this.key);
        const data = await response.json();
        console.log(data);
        return data
       }
       updateUI(data, vardisplay, vardescription, vartitle){
        if(data.media_type === "image"){
            img.setAttribute('src', data.url);
            img.classList.remove("notactive")
            vid.classList.add("notactive")
        }
        if (data.media_type === "video"){
            vid.setAttribute('src', data.url);
            vid.classList.remove("notactive")
            img.classList.add("notactive")
        }
            vardescription.innerText = data.explanation;
            console.log(data.explanation);
            vardisplay.innerText = data.date;
            vartitle.innerText = data.title;
       }
}

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

console.log(newDate.getMonth());
const currentDate = newDate.getFullYear() + "-" + (newDate.getMonth()+ 1) + "-" + newDate.getDate();

console.log(currentDate);

nasaPic.GetData(currentDate)
.then(data => nasaPic.updateUI(data, displayDate, description, displayTitle))
.catch(err => console.log(err))

userForm.addEventListener('submit' , e => {
    e.preventDefault();

        if(pattern.test(userInput.value)){
            nasaPic.GetData(userInput.value.trim())
            .then(data => nasaPic.updateUI(data, displayDate, description, displayTitle))
            .catch(err => console.log(err))
        } else {
            alert('Data Format is incorrect');
        }
})