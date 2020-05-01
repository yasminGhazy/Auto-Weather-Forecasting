import React, { Component } from 'react';
import axios from 'axios';

import "./weather.scss"

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
            countryName: '',
            countryCode: ''
        }
    }
    componentDidMount() {
        axios({
            url: "https://api.openweathermap.org/data/2.5/weather?q=Sydney,{{country}}&APPID=21432e29f051cbc261002482df0c6dfd",
            method: 'get',
            redirect: 'follow'
        })
            .then(response => {
                this.setState({

                    coord: response.data.coord, //main.temp

                    humidity: response.data.main.humidity,
                    pressure: response.data.main.pressure,
                    temp: response.data.main.temp,
                    temp_max: response.data.main.temp_max,
                    temp_min: response.data.main.temp_min,

                    wind: [],
                    weatherDisc: response.data.weather[0].description
                })
                console.log(response)
            })
            .catch(err => {
                console.log(err);
            });

    }
    render() {

        return (
            <weather className="card col-4 px-4 py-3">
                <div className="opening-hours px-4 py-4">

                    <h6 className="font-weight-light pt-2">{this.state.city}</h6>
                    <h5>Opening Hours </h5>
                    <ul className="pt-3 mx-0 px-0">

                    </ul>
                    <div>
                        <p>Country Name: {this.state.temp}</p>
                        <p>Country Code: {this.state.humidity}</p>
                    </div>
                </div>

            </weather>
        );
    };
}



