var video = document.getElementById("video");
var btn = document.getElementById("playBtn");

function onClick() {
    if (video.paused) {
        video.play();
        btn.style.display = "none";
        video.setAttribute("controls", "controls");
    } else {
        video.pause();
    }
}
