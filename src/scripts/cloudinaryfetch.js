const cloudinary = require('cloudinary').v2;
const http = require('http');
const fs = require('fs');
const path = require('path');

const localVidDir = path.join(__dirname, 'video');

cloudinary.config({
    cloud_name: 'corewayfinding',
    api_key: '581188456953191',
    api_secret: 'EJVeFrC41aK7Z_abKon48B3qvYE'
});

const videoContainer = document.getElementById('media-div');
let myVid = document.getElementById('my-vid');
myVid.style.height = '100%';
myVid.autoplay = true;
myVid.muted = true;

const refreshButton = document.getElementById("refresh-button");

function readVidsAndPlay(){
        fs.readdir(localVidDir, (err, files) => {
            if(err)
                console.log('Error reading local directory: ' + err.message);
            else {
                let localVids = files;
                if(localVids.length>0) {
                    if(localVids.length>1) {
                        myVid.src = 'video/' + localVids[0];
                        console.log('video src init: ' + myVid.src);
                        let currentVidNum = 0;
                        console.log('local vids: ' + localVids);
                        myVid.onended = function () {
                            currentVidNum++;
                            myVid.src = 'video/' + localVids[currentVidNum];
                            if (currentVidNum == (localVids.length - 1))
                                currentVidNum = -1;
                        }
                    } else{
                        myVid.src = 'video/' + localVids[0];
                        myVid.loop = true;
                    }
            }
        }
    });
}
readVidsAndPlay(); // Fetch at app start

function updateLocalVids(){
    console.log('clicked refresh btn');

    // First retrieve list of local vids
    let localVids;
    fs.readdir(localVidDir, (err, files) => {
        if(err)
            console.log('Error reading local directory');
        else{
            localVids = files;
            console.log('Local vids are: ' + localVids);

            // Now retrieve cloud vid names
            cloudinary.api.resources(
                {
                    type: 'upload',
                    resource_type: 'video'
                },
                function(error, result) {

                    if(error)
                        return console.log('ERROR CLOUDINARY: ' + error);

                    // Create array of cloud vid names to check if local vid no longer in cloud later
                    let cloudVidNameList = [];
                    // Check if cloudVid in our local vids list, if not, download it
                    let iterationNum = 0;
                    result.resources.forEach( cloudVid => {
                        cloudVidName = cloudVid.public_id + '.' + cloudVid.format;
                        cloudVidNameList.push(cloudVidName);
                        console.log('Cloud vid name is: ' + cloudVidName);

                        // If cloudvid not stored locally, download it
                        if(!localVids.includes(cloudVidName)){
                            let vidFile;
                            const request = http.get(result.resources[iterationNum].url, function(response) {
                                vidFile = fs.createWriteStream('resources/app/src/video/' + cloudVidName);
                                let stream = response.pipe(vidFile);
                                stream.downloadName = cloudVidName;
                                stream.on('finish', function () {
                                    console.log('download of ' + stream.downloadName + ' finished');
                                    readVidsAndPlay();
                                });
                            });
                        } else{
                            readVidsAndPlay()
                        }
                        iterationNum++;
                    });

                    console.log('Cloud vid list: ' + cloudVidNameList);
                    // Now check if local vid no longer in cloud
                    localVids.forEach( localVid => {
                       if(!cloudVidNameList.includes(localVid)){
                           myVid.src = '';
                           fs.unlink('resources/app/src/video/' + localVid, function (err) {
                               if (err){
                                   console.log('Error deleting: ' + err + ' trying again..');
                                   fs.unlink('resources/app/src/video/' + localVid, function (errorTwo){
                                       if(errorTwo)
                                           console.log('Error deleting on second attempt: ' + errorTwo);
                                       else {
                                           console.log('File deleted! ' + localVid);
                                           readVidsAndPlay();
                                       }
                                   });
                               }
                               else {
                                   console.log('File deleted! ' + localVid);
                                   readVidsAndPlay();
                               }
                           });
                       }
                    });
                }
            );
        }
    });

}


// setTimeout(function () {
//     cloudinary.api.resources(
//         {
//             type: 'upload',
//             resource_type: 'video'
//         },
//         function(error, result) {
//             console.log(result.resources[0]);
//             const vidFile = fs.createWriteStream(result.resources[0].public_id + '.mp4');
//             const request = http.get(result.resources[0].url, function(response) {
//                 response.pipe(vidFile);
//             });
//         }
//     );
// }, 86400000); // Update video contents from cloudinary each day
