class Forecast{
    constructor(){
        this.key = 'ov6sDAyA3THiUFNnGpXl6V6nh2AcQmXz';
        this.citybase = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        this.weatherbase = `http://dataservice.accuweather.com/currentconditions/v1/`;
    }

    async getWeather(id){

        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherbase + query)
        console.log(response);
        const dataJson = await response.json();
        console.log(dataJson);
        return dataJson[0];
    }
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.citybase + query);
        const dataJson = await response.json();
        return dataJson[0];
    }
    async updateCity(city){
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
        return {
            cityDets,
            weather
        }
    }

}

export {Forecast as default}


// getCity('Atlanta')
// .then(data => getWeather(data))
// .then(data => console.log(data))
// .catch(err => console.error(err));


//     // const locationKey = data[0].Key;
//     // const location = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`;

//     // console.log(location);

//     // const locationQuery = `?apikey=${key}`

//     // console.log(data);