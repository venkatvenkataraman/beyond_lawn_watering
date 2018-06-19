import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
// import Jumbotron from "../Jumbotron";
import Footer from "../Footer";
import API from "../../utils/API";
import BootstrapTable from 'react-bootstrap-table-next';
import './react-bootstrap-table2.css';
import './dashboard.css';

console.log("In client/src/pages/Dashboard/Dashboard.js");

function zoneDateFormatter(cell, row){
  console.log("Incoming epoch is: ", cell);
  var dateTime = new Date(cell * 1000);
  console.log("Computed Date and Time is: ",dateTime);
  // return ( JSON.stringify(dateTime) );
  // return ( dateTime.toString() );
  return ( dateTime.toLocaleDateString() );
}

function weatherImageFormatter(cell, row){
    return (
        <img src={""+cell+""} alt="weatherImage"/>
    );
}

function zoneImageFormatter(cell, row){
    return (
      <a target="_blank" href={""+cell+""}>
        <img src={""+cell+""} width="60" height="60" border="1 solid" border-color="#3333ff" alt="zoneImage"/>
      </a>
    );
}

const weatherColumns = [{
//   dataField: 'epoch',
//   text: 'Epoch Time',
//   sort: true,
//   align: 'center'
// },{
  dataField: 'timeDate',
  text: 'Time and Date',
  align: 'center'
}, {
  dataField: 'day',
  text: 'Day',
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
  formatter: weatherImageFormatter
}];

const zoneColumns = [{
  dataField: 'zoneNumber',
  text: 'Zone Number',
  align: 'center'
  // ,
  // width:'5%'
}, {
  dataField: 'drainage',
  text: 'Zone Drainage',
  align: 'center',
  width:'5%'
}, {
  dataField: 'shade',
  text: 'Zone Shade',
  align: 'center'
  // ,
  // width:'5%'
}, {
  dataField: 'watsonImageClass',
  text: 'Image Class',
  align: 'center'
  // ,
  // width:'10%'
}, {
  dataField:'zoneStatus',
  text: "Zone Status",
  align: 'center',
  width:'5%'
}, {
  dataField:'wateringState',
  text: "Watering State",
  align: 'center'
  // ,
  // width:'5%'
}, {
  dataField:'numbOfSprinklers',
  text: "Number of Sprinklers",
  align: 'center'
  // ,
  // width:'5%'
}, {
  dataField:'dtLastWatered',
  text: "Date Last Watered",
  formatter: zoneDateFormatter,
  align: 'center'
  // ,
  // width:'15%'
}, {
  dataField:'durationOfWatering',
  text: "Duration of Watering (in mts)",
  align: 'center'
  // ,
  // width:'5%'
}, {
  dataField:'projectedNextWaterDateTime',
  text: "Projected Next Watering",
  formatter: zoneDateFormatter,
  align: 'center'
  // ,
  // width:'15%'
}, {
  dataField:'recDurationOfWatering',
  text: "Recommended Next Watering Duration",
  align: 'center'
  // ,
  // width:'5%'
}, {
  dataField: 'zoneImage',
  text: 'Zone Image',
  formatter: zoneImageFormatter
}, {
  dataField: 'zoneImageDate',
  text: 'Zone Image Processing Date'
}];

const cityRestrColumns = [{
  dataField: 'wateringDay1',
  text: 'Watering Day #1',
  align: 'center'
},{
  dataField: 'wateringDay2',
  text: 'Watering Day #2',
  align: 'center'
}, {
  dataField: 'wateringDay3',
  text: 'Watering Day #3',
  align: 'center'
}, {
  dataField: "wateringTimes1Start",
  text: 'Watering Times #1 Start',
  align: 'center'
},{
  dataField: "wateringTimes1End",
  text: 'Watering Times #1 End',
  align: 'center'
}, {
  dataField: 'wateringTimes2Start',
  text: 'Watering Times #2 Start',
  align: 'center'
},{
  dataField: 'wateringTimes2End',
  text: 'Watering Times #2 End',
  align: 'center'
}];


class Dashboard extends Component {
  state = {
    weatherTableData: [],
    cityRestrData: [],
    wateringZoneData: []
  };

  /////////////////////////////////////

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

/////////////////////////////////////
  
  displayWateringZone = () =>
  {
    API.readWateringZoneFromDB()
    .then(res =>
      this.setState({
        wateringZoneData: res.data
      })
    )
    .then(res => console.log(this.state.wateringZoneData))
    .catch(err => console.log(err));
  }

  deleteWateringZoneInDB = () =>
  {
    API.deleteWateringZoneInDB();
  }

  getWateringZone = () => {
    console.log("In Zone.js/getWateringZone");
    API.readWateringZoneFromDB();

    // API.deleteWateringZoneInDB()
    //    .then (console.log("In Zone.js/getWateringZone. Old deleted. Now we will get a new"))
    //    .then (response => API.getWateringZone())
    //    .then (console.log("In Zone.js/getWateringZone"));
  }

  redirectToUploadZoneImages = () => {
    console.log("In Zone.js/setRedirectToUploadZoneImages");
    this.props.history.push("/Images")
  }

  /////////////////////////////////////
  
  displayCityRestr = () =>
  {
    API.readCityRestrFromDB()
    .then(res =>
      this.setState({
        cityRestrData: res.data
      })
    )
    .then(res => console.log(this.state.cityRestrData))
    .catch(err => console.log(err));
  }

  deleteCityRestr = () =>
  {
    API.deleteCityRestrInDB();
  }

  getCityRestr = () => {
    console.log("In Dashboard.js/getCityRestr");
    API.readCityRestrFromDB();

    // API.deleteWateringZoneInDB()
    //    .then (console.log("In Zone.js/getWateringZone. Old deleted. Now we will get a new"))
    //    .then (response => API.getWateringZone())
    //    .then (console.log("In Zone.js/getWateringZone"));
  }


  //Entry function for uploading image to Watson and classifying the image
  computeZoneClass = () => {
    console.log("In Dashboard.js/computeZoneClass");
    API.computeZoneClass();
  }

  generateRecommendations = () =>{
    console.log("In Dashboard.js/generateRecommendations");
    API.generateRecommendations();
  }


  render() {
    return (
      <div className="dashboard">
        <div className="dashboard__header">
          <h6 className="dashboard__header--title">
            <strong>Lawn Watering Zones</strong>
          </h6>
        </div>
        <div className="dashboard__table">
          <div className="dashboard__btn">
            <button className="btn btn-primary btn-sm" onClick={this.displayWateringZone}>Display Stored Zone Info</button>
            <button className="btn btn-success btn-sm" onClick={this.getWateringZone}>Update Stored Zone Info</button>           
            <button className="btn btn-warning btn-sm" onClick={this.deleteWateringZoneInDB}>Delete Stored Zone Info</button> 
            <button className="btn btn-warning btn-sm" onClick={this.redirectToUploadZoneImages}>Upload Zone Images</button> 
            <button className="btn btn-primary btn-sm" onClick={this.computeZoneClass}>Determine Watson Zone Classifications</button>
            <button className="btn btn-primary btn-sm" onClick={this.generateRecommendations}>Generate Recommendations</button>  
          </div>      
          <BootstrapTable data={ this.state.wateringZoneData } columns={ zoneColumns } keyField="zoneNumber" striped={true} hover={true} responsive={true} />
        </div>

        <div className="dashboard__header dashboard__restriction">
          <h6 className="text-center">
            <strong>City Water Restrictions for Address</strong>
          </h6>
        </div>

        <div className="dashboard__table">
          <div className="dashboard__btn">
            <button className="btn btn-primary btn-sm" onClick={this.displayCityRestr}>Display City Restrictions</button>
            <button className="btn btn-success btn-sm" onClick={this.getCityRestr}>Update City Restrictions</button>           
            <button className="btn btn-warning btn-sm" onClick={this.deleteCityRestr}>Delete Stored Restrictions</button> 
          </div>

          <BootstrapTable data={ this.state.cityRestrData } columns={ cityRestrColumns } keyField="_id" striped={true} hover={true} responsive={true} />
        </div>

      <div className="dashboard__header dashboard__forecast">
        <h6 className="text-center">
          Austin, TX: 10-day Weather Forecast
        </h6>
      </div>
      <div className="dashboard__table">
        <div className="dashboard__btn">
          <button className="btn btn-primary btn-sm" onClick={this.displayWeatherForecast}>Display Weather Forecast</button>
          <button className="btn btn-success btn-sm" onClick={this.getWeatherForecast}>Update Weather Forecast</button>           
          <button className="btn btn-warning btn-sm" onClick={this.deleteWeatherForecastInDB}>Delete Weather Forecast</button> 
        </div>         

        <BootstrapTable data={ this.state.weatherTableData } columns={ weatherColumns } keyField="epoch" striped={true} hover={true} responsive={true} />
      </div>

      <Footer/>
      </div>
      
    );
  }
}

export default Dashboard;