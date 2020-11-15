var video = document.querySelector('video');

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector('#volumeSlider').addEventListener("change", function() {
	video.volume = this.value/100;
});

document.querySelector('#volumeSlider').addEventListener("change", function() {
	video.volume = this.value/100;
});

document.querySelector('#volumeSlider').addEventListener("change", function() {
	video.volume = this.value/100;
});

document.querySelector('#mute').addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false;
	}
	else {
		video.muted = true;
	}
});

document.querySelector('#slower').addEventListener("click", function() {
	video.playbackRate = video.playbackRate * .9;
	console.log(video.playbackRate);
});

document.querySelector('#faster').addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.1;
	console.log(video.playbackRate);
});

document.querySelector('#skip').addEventListener("click", function() {
	video.currentTime = (video.currentTime + 5);
	video.play();
	console.log(video.currentTime);
});

document.querySelector('#old').addEventListener("click", function() {
	var el = document.getElementById('myVideo').setAttribute('class', 'oldTime');
	console.log("grayscale");
});

document.querySelector('#original').addEventListener("click", function() {
	var el = document.getElementById('myVideo').setAttribute('class', 'video');
	console.log("original");
});