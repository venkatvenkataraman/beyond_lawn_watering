import React, { Component } from "react";
import Dropzone from "react-dropzone";

import axios from "axios";
import API from "../../utils/API";

// import sha1 from "sha1";
// const keys = require('./../../../config/keys');
const keys = require('./config/keys');

class Images extends Component {

    constructor(props) {
        super(props)
            this.state = {
                imageFiles: [],
                wateringZoneData: []
        }
    }




    uploadFiles = files => {
        console.log("In Images/uploadFile ");

        API.readWateringZoneFromDB()
           .then(res =>
            this.setState({
                wateringZoneData: res.data
            })
           )
           .then(res => console.log(this.state.wateringZoneData))
           .catch(err => console.log(err));

        console.log(this.state.wateringZoneData);

        this.setState({
            imageFiles: files
        });
        console.log(files);  


    
        // Push all the axios request promise into a single array
        const uploaders = files.map(file => {
            // Initial FormData
            const formData = new FormData();
            formData.append("file", file);
            // formData.append("tags", `codeinfuse, medium, gist`);
            formData.append("upload_preset", keys.cloudinaryUploadPreset); 
            formData.append("api_key", keys.cloudinaryAPIkey); 
            formData.append("timestamp", (Date.now() / 1000) | 0);
            
            // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
            return axios.post(keys.cloudinaryURL, formData, {
              headers: { "X-Requested-With": "XMLHttpRequest" },
            }).then(response => {
              const data = response.data;
              const zoneNumber = parseInt(data.original_filename);              
              const zoneImageURL = data.secure_url; // You should store this URL for future references in your app
              const id = this.state.wateringZoneData[zoneNumber-1]._id;
              console.log("In images.js/uploadFiles...");
              console.log("The full data returned by Cloudinary after uploading fiile: ", data);
            //   console.log("id: ", id, " zoneNumber: ", zoneNumber, " zoneImageURL: ", zoneImageURL);
              console.log(" zoneNumber: ", zoneNumber, " zoneImageURL: ", zoneImageURL, " id: ", id);
              
              console.log("Let's now update the Zone database with the new zone image that has just been uploaded to Cloudinary!");
            
            

              API.updateWateringZoneImageURLInDB(id,{zoneImage: zoneImageURL})
            // API.updateWateringZoneImageURLInDB("5ad56e46d2d32662c170194b",{zoneImage: zoneImageURL})
              .then(res => console.log("zoneImage URL update successful!", res))
              .catch(err => console.log(err));

            })
          });
        
          // Once all the files are uploaded 
          axios.all(uploaders).then(() => {
            // ... perform after upload is successful operation

          });









        // const image = files[0];
        // // const cloudName = keys.cloudinaryCloudName;
        // const url = keys.cloudinaryURL;
        // const timestamp = Date.now()/1000;
        // const uploadPreset = keys.cloudinaryUploadPreset;
        // const paramsStr = "timestamp="+timestamp+"&upload_preset="+uploadPreset+keys.cloudinaryAPIsecret;
        // const signature = sha1(paramsStr);
        // const params = {
        //     "api_key": keys.cloudinaryAPIkey,
        //     "timestamp": timestamp,
        //     "upload_preset": uploadPreset,
        //     "signature": signature
        // };

        // let uploadRequest = axios.post(url);
        // uploadRequest.attach("file", image);

        // Object.keys(params).forEach((key) => {
        //     uploadRequest.field(key, params[key])
        // })

        // uploadRequest.end((err,resp) => {
        //     if (err) {
        //         alert(err);
        //         return;
        //     }

        //     console.log("UPLOAD COMPLETE: "+JSON.stringify(resp.body));
        //     // const uploaded = resp.body;
        //     // let images = Object.assign([], this.state.images);
        //     // images.push(uploaded);
        //     // this.setState({
        //     //     images:images
        //     // });
        // })
    }

    redirectToDashboard = () => {
        console.log("In Images.js/setRedirectToDashboard");
        this.props.history.push("/Dashboard")
    }
    
    
    render(){
        return (
            <div className="uploadImages">
                <div className="uploadImages__header">
                    <h6 className="uploadImages__header--title">
                        <strong>Upload Images for Lawn Watering Zones</strong>
                    </h6>
                </div>
                <p>   </p>
                <div className="backToDashboard__btn">
                    <button className="btn btn-warning btn-sm" onClick={this.redirectToDashboard}>Naviagate back to Dashboard Page</button> 
                </div>      

            {/* <div> */}
            {/* // <form className='join-form' ref='joinForm' autoComplete='off'> */}
                {/* <p> Upload All Your Zone Images </p>  */}
                {/* <Dropzone onDrop={this.uploadFile.bind(this)} /> */}
                <Dropzone 
                   onDrop={this.uploadFiles.bind(this)}
                // className = "dropzone"  //Seems to take out the dashed boundary for clicking to add files, so commenting out
                   activeClassName = "active-dropzone"
                   multiple
                   accept="image/*"
                   maxSize={200000} //bytes ~200Kbytes
                   minSize={6000} //bytes ~15Kbytes
                //    style={styles.dropzone}
                >
                    <p> Drag and drop your files or click here to select Zone image files to upload. Only .jpg and .png files are supported and their size needs to be at least 6KB but not more than 200KB. </p> 
                </Dropzone>

                {this.state.imageFiles.length > 0 ? <div>
                    <h2>Uploading {this.state.imageFiles.length} files...</h2>
                    <div>{this.state.imageFiles.map((file) => <img src={file.preview} /> )}</div>
                    </div> : null}


{/* There is a queuecomplete event that fires when all files in the queue have been uploaded. */}

            {/* // </form> */}
            </div>
        )
    }
}

export default Images;