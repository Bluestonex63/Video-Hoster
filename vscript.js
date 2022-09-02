let body = document.querySelector("body")
let errormsg = document.createElement("p")
body.appendChild(errormsg)

check = function(vdeo) {
    if (["Laser Arena Attempts"].includes(vdeo)) {
        errormsg.innerHTML = ""
        let video = document.createElement("video")
        video.src = `C:/Users/filze/Desktop/Python/Videos/${vdeo}.mp4`
        video.controls = true
        body.appendChild(video)
    } else {
        if (vdeo != "") {
            errormsg.innerHTML = "Invalid Video"
        }
    }
}
document.querySelector("#btn").addEventListener("click", check(document.querySelector("#videosearch").value))
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
check(urlParams.get('video'))
