const imageMap = document.getElementById("my-map");
const videoPlayer = document.getElementById("video-player");
const closeVideoButton = document.getElementById("exit-video");

function playvideo(vidname){

    if(vidname == 'gymmap')
        vidname = (upperImg.style.display != 'none') ? 'GYMUPPERENTRY' : 'gymlower';
    else if(vidname == 'spamap')
        vidname = (upperImg.style.visibility != 1) ? 'spaupperentry' : 'tealounge';

    videoPlayer.src = 'poivids/' + vidname + '.mp4';
    imageMap.style.display = 'none';
    videoPlayer.style.display = 'block';
    videoPlayer.classList.add('animate__fadeInRight');
    videoPlayer.playbackRate = 0.9;
    if(vidname == 'bootcamp' || vidname == 'corex')
        videoPlayer.playbackRate = 0.75;
    videoPlayer.play();
    setTimeout(function () {
        closeVideoButton.style.visibility = 'visible';
    }, 800);
}

function closeVideo(){
    closeVideoButton.style.visibility = 'hidden';
    videoPlayer.style.display = 'none';
    imageMap.style.display = 'flex';
    imageMap.classList.add('animate__fadeInLeft');
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
}
