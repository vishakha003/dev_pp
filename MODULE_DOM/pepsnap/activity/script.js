
let videoPlayer=document.querySelector("video");
let recordButton = document.querySelector("#record-video");
let photoButton = document.querySelector("#capture-photos");
let recordingState = false;
let constraints={video:true};
let recordedData;
let mediaRecorder;

(async function(){
        let mediaStream= await navigator.mediaDevices.getUserMedia(constraints);
    videoPlayer.srcObject=mediaStream;
      
     mediaRecorder=new MediaRecorder(mediaStream);


     //SOnext we have attached function to these event
     mediaRecorder.onstart=function(e){
         console.log("inside on staet");
         console.log(e);
     }

     mediaRecorder.onstop=function(e){
        console.log("inside on stop");
        console.log(e);
    }

    mediaRecorder.ondataavailable=function(e){
        console.log("inside on data available");
        recordedData=e.data;
        saveVideotofs();
    } 
console.log(mediaRecorder);

//attach click event
 // attach click event on recordButton
 recordButton.addEventListener("click" , function(){
    if(recordingState){
        // stop the recording
        mediaRecorder.stop();
        recordButton.innerHTML = "Record";
    }
    else{
        //start the recording
        mediaRecorder.start();
        recordButton.innerHTML = "Recording";
    }
    recordingState = !recordingState;
})
   
})();

function saveVideotofs(){
    console.log("Saving video");
    let videourl=URL.createObjectURL(recordedData);//conver bob object into blob url
    console.log(videourl);

    let aTag=document.createElement("a");
    aTag.download="video.mp4";
    aTag.href = videourl;

    aTag.click(); 
    aTag.remove();
}


