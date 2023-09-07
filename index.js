var btn = document.getElementById("play-pause-btn");
var mySong = document.getElementById("mySong");

btn.addEventListener("click", () => {
    if(mySong.paused){
        mySong.play();
        btn.src = "./media/pause.png";
    }
    else{
        mySong.pause();
        btn.src = "./media/play.png";
    }
});