import React, { Component } from 'react';
import axios from 'axios';
import "./weather.scss";
export default class weather extends Component {
    state = {
        humidity: "",
        pressure: "",
        temp: "",
        temp_max: "",
        temp_min: "",
        coord: [],
      
        weatherDisc: "",
        city: "",
    };

    componentDidMount() {
        axios.get('https://ipapi.co/json/')
            .then((response) => {
                this.setState({ city: response.data.city })
                return axios({
                    url: `http://api.openweathermap.org/data/2.5/weather?q=${response.data.city},{{country}}&APPID=21432e29f051cbc261002482df0c6dfd`,
                    method: 'get',
                })
                    .then(response => {
                        console.log(response);
                        let { data } = response;
                        this.setState({
                            coord: data.coord,
                            humidity: data.main.humidity,
                            pressure: data.main.pressure,
                            temp: data.main.temp,
                            temp_max: data.main.temp_max,
                            temp_min: data.main.temp_min,
                            weatherDisc: data.weather[0].description
                        })
                    })
            })
    }
    render() {
        return (
            <main>
                <div className="container">
                    <div className="row slide pt-0">
                        <div className="overlay"></div>
                        <div className="col-1"><div className="sky m-0">
                            <div className="sun"></div> 
                            <div className="cloud">
                                <div className="circle-small"></div>
                                <div className="circle-tall"></div>
                                <div className="circle-medium"></div>
                            </div></div>
                        </div>
                        <div className="col-5">
                            <div>
                                <h1 className="city">
                                    {this.state.city}</h1>
                                <p className="disc">{this.state.weatherDisc}
                                </p>
                                <p id="temp">{Math.trunc(this.state.temp-273)}°c</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <ul id="weather-detail">
                                <li>Max Temperature: {Math.trunc(this.state.temp_max-273)}°C </li>
                                <li>Min Temperature: {Math.trunc(this.state.temp_min-273)}°C </li>
                                <li>Humidity: {this.state.humidity} % </li>
                                <li>Pressure: {this.state.pressure} mb</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        );
    };
}



