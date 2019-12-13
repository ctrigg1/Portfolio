const key = '0eMgpF6lOC6NViYySXzRTHJREGKopSFLMpfHOLgt';

async function GetData(){
    
 const response = await fetch(" https://api.nasa.gov/planetary/apod?date=2019-12-01&api_key=" + key);
 const data = await response.json()
 console.log(data);
return data;
}

GetData()
.then(data => {
    const img = document.querySelector('#nasa');
    console.log(img);
    img.setAttribute('src', data.url);
})
.catch(err => console.log(err))