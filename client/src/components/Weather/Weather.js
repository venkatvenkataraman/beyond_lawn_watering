import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
// import Panel from "../../components/Panel";
// import Form from "../../components/Form";
// import Article from "../../components/Article";
// import WeatherTable from "../../components/WeatherTable";
import Footer from "../Footer";
import API from "../../utils/API";
import BootstrapTable from 'react-bootstrap-table-next';
import './react-bootstrap-table2.css'
// import { List } from "../../components/List";

console.log("In client/src/pages/Weather/Weather.js");


// var tableData = [
//     {epoch: 1523318400, day: "Thu", timeDate: "7:00 PM CDT on April 05, 2018", tempHigh: 79, tempLow: 68, 
//      avgHum: 86, pop:40, conditions: "Thunderstorm", conditionsURL: <img src="http://icons.wxug.com/i/c/k/clear.gif" alt=""/> }
// ];

// <img src="http://icons.wxug.com/i/c/k/clear.gif" alt=""/>
function imageFormatter(cell, row){
    return (
        <img src={""+cell+""} alt="weatherImage"/>
    );
}

const columns = [{
//   dataField: 'epoch',
//   text: 'Epoch Time',
//   align: 'center'
// },{
  dataField: 'day',
  text: 'Day',
  align: 'center'
}, {
  dataField: 'timeDate',
  text: 'Time and Date',
  align: 'center'
}, {
  dataField: 'tempHigh',
  text: 'High Temp F',
  align: 'center'
}, {
  dataField: 'tempLow',
  text: 'Low Temp F',
  align: 'center'
}, {
  dataField:'avgHum',
  text: "Average Humidity %",
  align: 'center'
}, {
  dataField:'pop',
  text: "Probability of Precipitation (PoP)",
  align: 'center'
}, {
  dataField:'conditions',
  text: "Conditions",
  align: 'center'
}, {
  dataField:'conditionsURL',
  text: "Conditions URL",
  align: 'center', 
  formatter: imageFormatter
}];


class Weather extends Component {
  state = {
    weatherTableData: [],
  };

  displayWeatherForecast = () =>
  {
    API.readWeatherFromDB()
    .then(res =>
      this.setState({
        weatherTableData: res.data
      })
    )
    .then(res => console.log(this.state.weatherTableData))
    .catch(err => console.log(err));
  }

  deleteWeatherForecastInDB = () =>
  {
    API.deleteWeatherForecastInDB();
  }

  getWeatherForecast = () => {
    console.log("In Weather.js/getWeatherForecast");
    API.getWeatherForecast();

    // API.deleteWeatherForecastInDB()
    //    .then (console.log("In Weather.js/getWeatherForecast. Old forecast deleted. Now we will get a new forecast"))
    //    .then (response => API.getWeatherForecast())
    //    .then (console.log("In Weather.js/getWeatherForecast"));
  }

  render() {
    return (
      <div>
            <Jumbotron>
              <h6 className="text-center">
                Austin, TX: 10-day Weather Forecast
              </h6>
            </Jumbotron>
            <button className="btn btn-primary btn-sm" onClick={this.displayWeatherForecast}>Display Weather Forecast</button>
            <button className="btn btn-success btn-sm" onClick={this.getWeatherForecast}>Update Weather Forecast</button>           
            <button className="btn btn-warning btn-sm" onClick={this.deleteWeatherForecastInDB}>Delete Weather Forecast</button>          

            <BootstrapTable data={ this.state.weatherTableData } columns={ columns } keyField="epoch" striped={true} hover={true} responsive={true} />

              {/* <div className="table-responsive">          
                <table className="table">
                   <thead>
                     <tr>
                        <th>Epoch Time</th>
                        <th>Day</th>
                        ...
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{ this.state.weatherTableData.epoch }</td>
                        <td>{ this.state.weatherTableData.day }</td>
                        ...
                      </tr>
                    </tbody>
                </table>
              </div> */}
     
            <Footer/>
      </div>
    );
  }
}

export default Weather;