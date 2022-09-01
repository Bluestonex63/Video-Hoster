check = function() {
    let v = document.querySelector("#videosearch")
    let fs = require('fs');
    let files = fs.readdirSync('/videos');
    if (v.value in files) {
        console.log("ok")
    } else {
        console.log("no")
    }
}