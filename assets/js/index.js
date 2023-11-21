// Get the video
var video = document.getElementById("video");
//  Get Play Button
var btn = document.getElementById("playBtn");
// Play Function
video.removeAttribute("controls");
function onClick() {
    if (video.paused) {
        video.play();
        btn.style.display = "none";
        video.setAttribute("controls", "controls");
    } else {
        video.pause();
    }
}
