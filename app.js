function onload() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "video.mp4");
    xhr.responseType = "arraybuffer";

    xhr.onload = function (e) {
        var blob = new Blob([xhr.responseType]);
        var url = URL.createObjectURL(blob);

        console.log(url);

        var vid = document.getElementById("video");
        vid.src = url;
    }

    xhr.send();
}