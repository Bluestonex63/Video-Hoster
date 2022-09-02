let body = document.querySelector("body")
let errormsg = document.createElement("p")
body.appendChild(errormsg)
check = function() {
    if (["Laser Arena Attempts"].includes(document.querySelector("#videosearch").value)) {
        errormsg.innerHTML = ""
        let video = document.createElement("video")
        video.src = `C:/Users/filze/Desktop/Python/Videos/${document.querySelector("#videosearch").value}.mp4`
        body.appendChild(video)
    } else {
        errormsg.innerHTML = "Invalid Video"
    }
}
