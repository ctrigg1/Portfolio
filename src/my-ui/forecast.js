export class Forecast{
    constructor(){
        this.key = '&units=imperial&APPID=b4b12e7281ad7d5991673000e7940e1d';
        this.citybase = 'https://api.openweathermap.org/data/2.5/weather?q=';
        // this.weatherbase = `http://dataservice.accuweather.com/currentconditions/v1/`;
    }

    async getWeather(city){

        const query = `${city}`;
        const response = await fetch(this.citybase + query + this.key);
        const dataJson = await response.json();
        return dataJson;
    }

    // async updateCity(city){
    //     const cityDets = await this.getCity(city);
    //     const weather = await this.getWeather(cityDets.Key);
    //     return {
    //         cityDets,
    //         weather
    //     }
    // }

}
