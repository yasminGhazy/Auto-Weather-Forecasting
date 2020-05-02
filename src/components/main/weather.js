import React, { Component } from 'react';
import axios from 'axios';
import "./weather.scss";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default class weather extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            humidity: "",
            pressure: "",
            temp: "",
            temp_max: "",
            temp_min: "",
            coord: [],
            wind: [],
            weatherDisc: "",
            city: "",

        }
    }

    componentDidMount() {
        axios.get('https://ipapi.co/json/')
            .then((response) => {
               this.setState({city :response.data.city})
                return axios({
                            url: `http://api.openweathermap.org/data/2.5/weather?q=${response.data.city},{{country}}&APPID=21432e29f051cbc261002482df0c6dfd`,
                            method: 'get',
                            redirect: 'follow'
                        })
            .then(response => {
                this.setState({
                    coord: response.data.coord, 
                    humidity: response.data.main.humidity,
                    pressure: response.data.main.pressure,
                    temp: response.data.main.temp,
                    temp_max: response.data.main.temp_max,
                    temp_min: response.data.main.temp_min,
                    wind: response.data.main.wind,
                    weatherDisc: response.data.weather[0].description
                }) })
            })
        }
// 
//     axios({
//         url: `https://ipapi.co/json/`,
//         method: 'get',
//         redirect: 'follow'
//     })
//  .then(res => {

//         this.setState({
//             city: res.data.city
//         })
//     }).catch((error) => {
//         console.log(error);
//     });
//     axios({
//         url: `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},{{country}}&APPID=21432e29f051cbc261002482df0c6dfd`,
//         method: 'get',
//         redirect: 'follow'
//     })
//         .then(response => {
//             this.setState({
//                 coord: response.data.coord, //main.temp
//                 humidity: response.data.main.humidity,
//                 pressure: response.data.main.pressure,
//                 temp: response.data.main.temp,
//                 temp_max: response.data.main.temp_max,
//                 temp_min: response.data.main.temp_min,
//                 wind:  response.data.main.wind,
//                 weatherDisc: response.data.weather[0].description
//             })

//         })
//         .catch(err => {
//             console.log(err);
//         });

// }

render() {
                return(
        <weather>
            <OwlCarousel items={1}
                className="owl-theme"
                loop
                margin={8} >
                <div className="slide pt-0" id="intro">

                    <div className="overlay"></div>
                    <div className="sky m-5 mb-0 ">
                        <div className="sun"></div>
                        <div className="cloud">
                            <div className="circle-small"></div>
                            <div className="circle-tall"></div>
                            <div className="circle-medium"></div>
                        </div></div>
                    <div className="m-5">
                        <p className="city">
                            {this.state.city}</p>
                        <p className="disc">{this.state.weatherDisc}
                        </p>
                        <p id="temp">{this.state.temp}°
                            </p></div>
                </div>

                <div className="slide" id="details">
                    <div className="overlay"></div>
                    <h1>{this.state.city}</h1>
                    <ul id="weather-detail">
                        <li>MAX Temprature: {this.state.temp_max}°
                            </li>
                        <li>MIN Temprature: {this.state.temp_min}°
                            </li>
                        <li>humidity: {this.state.humidity}
                        </li>
                        <li>Wind speed: {this.state.wind}km/h
                            </li>
                        <li>Pressure: {this.state.pressure}mb
                            </li>
                    </ul>
                </div>




            </OwlCarousel>


        </weather >
    );
    };
}



