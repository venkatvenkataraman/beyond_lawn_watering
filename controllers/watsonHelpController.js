console.log("In controllers/watsonHelpController.js");
const db = require("../models");
const VisualRecognitionV3 = require("watson-developer-cloud/visual-recognition/v3");
var fs = require("fs");
const keys = require('./../config/keys');

const axios = require("axios");
var countOfZoneLoop = 0;
var zonesClassificationData=[];

// === MongoDB update based on Watson Analysis =====

function updateWateringZoneDB(zoneNumber, watsonClass){
  console.log("Now ready to update watsonImageClass field in the wateringZone DB");
  db.WateringZone
  .find({"zoneNumber": zoneNumber}, function(err) {
   if (!err){ 
     console.log("In watsonHelpController.js/updateWateringZoneDB #1");
     console.log("zoneNumber: ", zoneNumber, " watsonClass: ", watsonClass); 
     // db.WateringZone.update({"zoneNumber": zoneNumber}, {$set: {"projectedNextWaterDateTime": 1523840000}});
     db.WateringZone.update({"zoneNumber": zoneNumber}, {$set: {"watsonImageClass": watsonClass}}, function(err, raw){
       if (err) { console.log("database call failed during update of wastonImageClass with error:", err)}
       else {console.log ("database call succeeded with zoneNumber, watsonImageClass and raw = ",zoneNumber, raw)}
     });
     db.WateringZone.update({"zoneNumber": zoneNumber}, {$set: {"zoneImageDate": new Date()}}, function(err, raw){
      if (err) { console.log("database call failed during update of zoneImageDate with error:", err)}
      else {console.log ("database call succeeded with zoneNumber, zoneImageDate and raw = ",zoneNumber, raw)}
    });
     console.log("zone ", zoneNumber, " should now be updated with watsonImageClass and zoneImageDate!");
   } else {throw err;}
   })

  //WORKING CODE BELOW USED ON DEMO DAY
  // db.WateringZone
  //  .find({"zoneNumber": zoneNumber}, function(err, inMemZone) {
  //   if (!err){ 
  //     console.log("In watsonHelpController.js/writeToWateringZoneDB #1");
  //     console.log("zoneNumber: ", zoneNumber, " inMemZone: ", inMemZone, "watson class for zone: ", watsonClass);       
  //   } else {throw err;}
  //   })
  //  .then (
  //     dbWateringZone => {console.log("In watsonHelpController.js/writeToWateringZoneDB #2");
  //     // inMemZone.watsonImageClass = watsonClass;
  //     inMemZone[0].watsonImageClass = watsonClass;
  //     console.log("In watsonHelpController.js/writeToWateringZoneDB #2");
  //     console.log("zoneNumber: ", zoneNumber, " inMemZone: ", inMemZone)}
  //  )

   
  // db.WateringZone[zoneNumber].watsonImageClass = watsonClass;
  // db.WateringZone[zoneNumber].zoneImageDate = new Date();
}

// ============  Watson related code ===============

function askWatsonAboutZone(images_file, cb) {
  
  var visualRecognition = new VisualRecognitionV3({
    api_key: keys.watsonAPIkey,
    version: keys.watsonVersion
  });

  // var images_file= fs.createReadStream(zoneImage);
  var classifier_ids = ["DefaultCustomModel_30404095"];
  var threshold = 0.6;

  var params = {
  images_file: images_file,
  classifier_ids: classifier_ids,
  threshold: threshold
  };
  err=null;
  watsonClass=null;
  visualRecognition.classify(params, function(err, response) {
    if (err) {
      console.log(err);
      cb(err, watsonClass);
    }
    else {
      console.log("In watsonHelpController.js/askWatsonAboutZone");
      console.log(JSON.stringify(response, null, 2));
      var watsonClass = JSON.stringify( response.images[0].classifiers[0].classes[0].class);
      var watsonConfidence = JSON.stringify(response.images[0].classifiers[0].classes[0].score);
      console.log ('Class and Confidence are ', watsonClass, " ", watsonConfidence);
      cb(err, watsonClass);
    }
    
  });
}
//  ====== End of Watson related code

// var watsonClass = 
// function callWatson(imageStream, cb) {

// }
// function findAll(req, res) {
//   db.WateringZone
//     .find(req.query)
//     .sort({ date: -1 })
//     .then(dbWateringZone => res.json(dbWateringZone))
//     .catch(err => res.status(422).json(err));
// }

// Compute zone status based on some simple logic
computeZoneStatus = (zoneNumber,cb) => {
  // Look at the zone details in the zone table and determine if and when to water
  // Ask watson for the image classification. If it syas 'Healthy' then no watering is needed.
  // If it says 'Sick' then wantering is needed.  As for when to water, you look at the watering restrictions
  // and decide the earliest time the zone can be watered.

  // const zoneNumber = 4;  //  *** Hardwired for now ****
  
  const zoneImage = "./controllers/images/zone"+ zoneNumber +".jpg";
  console.log("zoneNumber: ",zoneNumber, "; zone image: ", zoneImage);
  var imageStream = fs.createReadStream(zoneImage);
  var watsonClass = null;
  askWatsonAboutZone(imageStream, function (err, myZoneClass) {
    if (err) {
      console.log("In watsonHelpController.js/computeZoneStatus #1");
      console.log("Sorry! Watson did not classify Zone", zoneNumber);
    }
    else {
        // if (myZoneClass !== 'unkown') {
        // console.log("In watsonHelpController.js/computeZoneStatus #2");
        // console.log("Watson classified Zone " + zoneNumber + " as " + myZoneClass);
      // }
    // } //if err
        console.log("In watsonHelpController.js/computeZoneStatus #2, myZoneClass: ", myZoneClass);
        console.log("I'm still alive!");
        if (myZoneClass == JSON.stringify("SickGrass")) {
          watsonClass="Sick";
          console.log("In watsonHelpController.js/computeZoneStatus #2");
          console.log("watsonClass for Zone " + zoneNumber + " is " + watsonClass);
          zonesClassificationData[zoneNumber] = watsonClass;
          updateWateringZoneDB(zoneNumber, watsonClass);
          cb();
        } // if myZoneClass = 'SickGrass'
        else if (myZoneClass == JSON.stringify("HealthyGrass")) {
          watsonClass="Healthy";
          console.log("In watsonHelpController.js/computeZoneStatus #2");
          console.log("watsonClass for Zone " + zoneNumber + " is " + watsonClass);
          zonesClassificationData[zoneNumber] = watsonClass;
          updateWateringZoneDB(zoneNumber, watsonClass);
          cb();
        }  // else if myZoneClass = 'HealthyGrass' 
        else if (myZoneClass === JSON.stringify("unknown")) {
          watsonClass="unknown";
          console.log("In watsonHelpController.js/computeZoneStatus #2");
          console.log("watsonClass for Zone " + zoneNumber + " is " + watsonClass);
          zonesClassificationData[zoneNumber] = watsonClass;
          updateWateringZoneDB(zoneNumber, watsonClass);
          cb();
        }; // else watsonClass = 'unknown'
        // console.log("I'm still very much alive!");
        console.log("In watsonHelpController.js/computeZoneStatus #2 finished and zonesClassification data array is now:", zonesClassificationData);
    }
  });

  // var watsonClass = callWatson(imageStream, function(err, result){
  //     if (err) {console.log("Error in callWatson")}
  //     else{
  //       console.log("Result from callWatson: ", result)
  //     }
  // });

        // console.log("watsonClass: ", watsonClass); 
    // if (myZoneData.watsonImageClass === 'Healthy') {
    //   console.log ('No watering needed for zone' + zoneNumber);
    //   myZoneData.zoneStatus = 'AW';  // pretend it is already watered
    // }
    // else { if (myZoneData.watsonImageClass === 'Sick'){
    //         console.log ('Watering Needed for zone'  + zoneNumber)
    //         myZoneData.zoneStatus = 'NW';
    //   // check watering restrictions and set the next watering date
    //   //  *** Need explanation from Venkat on how the watering restrictions are specified
    //   }
    // }
 
  }

 function zoneLoop(cb) {
  console.log("In watsonHelpController.js/Now identifying images to be processed");
  for (let index = 1; index < 7; index++) {
    computeZoneStatus(index, function(){
      countOfZoneLoop++;
    });
  }
  // while (countOfZoneLoop < 5) {};
  // cb();
 }

module.exports = {
  classifyAndUpdateZoneStatuses: function(req, res) {
    console.log("In controller/watsonHelpController");
    console.log("READY TO ISSUE API CALL TO WATSON AND GET BACK RESULTS");
    //HARDCODED FOR ZONE 4
    // computeZoneStatus(4);
    //HANDLE ALL ZONES - 1 THROUGH 6
    zoneLoop(function(){console.log("zonesClassificationData: ", zonesClassificationData)});
    // console.log("Now ready to update watsonImageClass field in the wateringZone DB");
  }
  
};

