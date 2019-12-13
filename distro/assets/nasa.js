class NASA{
    constructor(){
        this.key = '0eMgpF6lOC6NViYySXzRTHJREGKopSFLMpfHOLgt'
    }
    async GetData(date){
    
        const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=` + this.key);
        const data = await response.json();
        const img = document.querySelector('#nasa');
        img.setAttribute('src', data.url);
       return data;
       }
}

const userForm = document.querySelector('.searchDate');
const userInput = document.querySelector('#input');
const newDate = new Date(); 
const currentDate = newDate.getFullYear() + "-" + newDate.getMonth() + "-" + newDate.getDay();

console.log(currentDate);

const nasaPic = new NASA();

nasaPic.GetData(currentDate)
.then(data => console.log('pic received'))
.catch(err => console.log(err))

userForm.addEventListener('submit' , e => {
    e.preventDefault();
    console.log(userInput.value);
    nasaPic.GetData(userInput.value)
        .then(data => console.log('pic received'))
        .catch(err => console.log(err))
})