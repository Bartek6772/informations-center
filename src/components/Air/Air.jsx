import React, { Component } from 'react'
import Element from './../../containers/Element/Element';
import './Air.scss';

export default class Air extends Component {

    state = {
        loading: true,
        data: null,
    };

    async componentDidMount(){
        const url = 'http://api.weatherapi.com/v1/current.json?key=7e724a48764448828c0104404220201&q=Cracow&aqi=yes';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({loading: false, data: data});
    }

    render() {
        return (
            <Element sizeX={4} sizeY={2} name="air">
                {this.state.loading ? "loading..." : (
                <table>
                    <tr>
                        <td>CO</td>
                        <td>{this.state.data.current.air_quality.co}</td>
                    </tr>
                    <tr>
                        <td>NO<sub>2</sub></td>
                        <td>{this.state.data.current.air_quality.no2}</td>
                    </tr>
                    <tr>
                        <td>SO<sub>2</sub></td>
                        <td>{this.state.data.current.air_quality.so2}</td>
                    </tr>
                    <tr>
                        <td>O<sub>3</sub></td>
                        <td>{this.state.data.current.air_quality.o3}</td>
                    </tr>
                    <tr>
                        <td>PM 2.5</td>
                        <td>{this.state.data.current.air_quality.pm2_5}</td>
                    </tr>
                    <tr>
                        <td>PM 10</td>
                        <td>{this.state.data.current.air_quality.pm10}</td>
                    </tr>
                </table>
                )}           
            </Element>
        )
    }
}

