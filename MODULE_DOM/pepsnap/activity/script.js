
let videoPlayer=document.querySelector("video");
let constraints={video:true};


    let mediaStream= navigator.mediaDevices.getUserMedia(constraints)

    mediaStream.then(function(mediaStream){
        videoPlayer.srcObject=mediaStream;
    })
