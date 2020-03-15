class NASA{
  constructor(){
      this.key = 'jtbtjVmZZcSxwHe2ogejLHk1nQI1MkvPD2hZ6aUY'
  } 

  async GetData(date){
  
      const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=` + this.key);
      const data = await response.json();
      return data
     }
     updateUI(data, vardisplay, vardescription, vartitle, img = '', vid = ''){
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
          vardisplay.innerText = data.date;
          vartitle.innerText = data.title;
     }
}

export default NASA