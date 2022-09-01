let body = document.querySelector("body")
let errormsg = document.createElement("p")
body.appendChild(errormsg)
check = function() {
    if ([""].includes(document.querySelector("#videosearch").value)) {
        errormsg.innerHTML = ""
        let video = document.createElement("video")
        video.src = `videos/${document.querySelector("#videosearch").value}.mp4`
        document.appendChild(video)
    } else {
        errormsg.innerHTML = "Invalid Video"
    }
}
