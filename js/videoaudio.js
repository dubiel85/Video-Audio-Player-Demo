var counter = false;
document.getElementById("videoplay").onclick = function(){
    var videopath = document.getElementById("videopath");
    if(videopath.value == "")
        alert("You must set the video path");
    else {
        document.getElementById("videoconsole").setAttribute("src",                                 videopath.value);
        document.getElementById("video1").setAttribute("autoplay", "");
        document.getElementById("video1").load();
        counter = true;
    }
    
    
        
};

