import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import Footer from "../Footer";
import API from "../../utils/API";
import BootstrapTable from 'react-bootstrap-table-next';
import './react-bootstrap-table2.css'

console.log("In client/src/pages/Zone/Zone.js");

// function priceFormatter(cell, row) {
//   if (row.onSale) {
//     return (
//       <span>
//         <strong style={ { color: 'red' } }>$ { cell } NTD(Sales!!)</strong>
//       </span>
//     );
//   }

function zoneDateFormatter(cell, row){
  console.log("Incoming epoch is: ", cell);
  var dateTime = new Date(cell * 1000);
  console.log("Computed Date and Time is: ",dateTime);
  // return ( JSON.stringify(dateTime) );
  // return ( dateTime.toString() );
  return ( dateTime.toLocaleDateString() );
}


function zoneImageFormatter(cell, row){
    return (
      <a target="_blank" href={""+cell+""}>
        <img src={""+cell+""} width="60" height="60" border="1 solid" border-color="#3333ff" alt="zoneImage"/>
      </a>
    );
}

const columns = [{
  dataField: 'zoneNumber',
  text: 'Zone Number',
  align: 'center',
  width:'5%'
},{
  dataField: 'drainage',
  text: 'Zone Drainage',
  align: 'center',
  width:'5%'
}, {
  dataField: 'shade',
  text: 'Zone Shade',
  align: 'center',
  width:'5%'
}, {
  dataField: 'watsonImageClass',
  text: 'Image Class',
  align: 'center',
  width:'10%'
}, {
  dataField:'zoneStatus',
  text: "Zone Status",
  align: 'center',
  width:'5%'
}, {
  dataField:'wateringState',
  text: "Watering State",
  align: 'center',
  width:'5%'
}, {
  dataField:'numbOfSprinklers',
  text: "Number of Sprinklers",
  align: 'center',
  width:'5%'
}, {
  dataField:'dtLastWatered',
  text: "Date Last Watered",
  formatter: zoneDateFormatter,
  align: 'center',
  width:'15%'
}, {
  dataField:'durationOfWatering',
  text: "Duration of Watering (in mts)",
  align: 'center',
  width:'5%'
}, {
  dataField:'projectedNextWaterDateTime',
  text: "Projected Next Watering",
  align: 'center',
  width:'15%'
}, {
  dataField:'recDurationOfWatering',
  text: "Recommended Next Watering Duration",
  align: 'center',
  width:'5%'
}, {
  dataField: 'zoneImage',
  text: 'Zone Image',
  formatter: zoneImageFormatter
}];


class Zone extends Component {
  state = {
    wateringZoneData: [],
  };

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

  render() {
    return (
      <div>
            <Jumbotron>
              <h6 className="text-center">
                <strong>Lawn Watering Zones</strong>
              </h6>
            </Jumbotron>
            <button className="btn btn-primary btn-sm" onClick={this.displayWateringZone}>Display Stored Zone Info</button>
            <button className="btn btn-success btn-sm" onClick={this.getWateringZone}>Update Stored Zone Info</button>           
            <button className="btn btn-warning btn-sm" onClick={this.deleteWateringZoneInDB}>Delete Stored Zone Info</button>          

            <BootstrapTable data={ this.state.wateringZoneData } columns={ columns } keyField="zoneNumber" striped={true} hover={true} responsive={true} />
     
            <Footer/>
      </div>
    );
  }
}

export default Zone;