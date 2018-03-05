// ==UserScript==
// @name Discord Panel
// @description Discord webpanel mod for Vivaldi browser.
// @author luetage, lonmcgregor
// @namespace luetage.vivaldi.net
// @match https://discordapp.com/channels/*
// @version 1.5
// ==/UserScript==
(function(){

	"use strict";

	const HIDE_CHANNEL_ON_MOUSE_LEAVE = true;
	const ONLY_IN_NARROW_WINDOW = true;
	const NARROW = 800;

	let btn = {};
	let guilds = {};
	let channels = {};

	function makeStyle(){
		const style = document.createElement('style');
		const style_text = `
.search, .search-bar {
	width: 75px !important;
}
.tab-bar {
	margin-left: 24px;
}
.popout.popout-bottom-right, .popout.popout-left {
	left: unset !important;
	transform: unset !important;
}
[class*="sizeMedium-"], [class*="sizeSmall-"], [class^="uploadModal-"] {
	width: 300px;
}
.message-group {
	padding: 8px 0;
	margin-left: 8px;
	margin-right: 0px;
}
.message-group .comment {
	margin: 0 4px;
}
.message-group .comment .markup {
	margin-top: 0px;
	line-height: 1.2em;
}
.avatar-large {
	display: none;
}

/* Overlay Panels */
.guilds-wrapper {
	position: absolute;
	height: 100%;
	z-index: 99;
	top: 48px;
	left: 0;
	width: 70px;
}
[class^="channels-"] {
	position: absolute;
	height: 100%;
	z-index: 99;
	top: 48px;
	left: 70px;
	width: 240px;
}
.channel-members-wrap {
	position: absolute;
	height: 100%;
	z-index: 98;
	top: 0;
	right: 0;
}
[class^="channels-"] > [class^="container-"] {
	margin-bottom: 48px;
}
[class^="titleWrapper-"]:first-child {
	padding-left: 30px;
}
[class^="titleWrapper-"].theme-light {
	background: white;
}

/* Sidebar Toggle Styles */
#sidebartoggle {
	position: fixed;
	left: 6px;
	top: 8px;
	height: 30px;
	width: 30px;
	padding: 0 0 2px 0;
	z-index: 100;
	border-radius: 100%;
	background-color: #36393f;
	color: #fbfbfb;
	font-size: 20px;
	display: flex;
	justify-content: center;
}
#sidebartoggle svg {
	fill: white;
}`;
		const narrow_style = `
		@media (min-width: `+NARROW+`px) {
			#sidebartoggle { display: none }
		}
		@media (max-width: `+NARROW+`px){`+style_text+`}`;
		style.innerHTML = ONLY_IN_NARROW_WINDOW ? narrow_style : style_text;
		document.body.appendChild(style);
	}

	function makeButton(attach_to){
		btn = document.createElement('button');
		btn.innerHTML = `
		<svg viewBox="0 0 200 200" height="20px" width="20px">
	  <g>
	  <path
	  d="M 72.664062 28.873047 C 72.664062 28.873047 49.356396 28.359865 24.677734 46.632812 C 24.677734 46.632812 0 90.864507 0 145.3418 C -4.7369516e-015 145.3418 14.396593 169.93348 52.271484 171.12891 C 52.271484 171.12891 58.612518 163.61447 63.753906 157.125 C 41.988698 150.63555 33.761719 137.14453 33.761719 137.14453 C 33.761719 137.14453 35.475715 138.33912 38.560547 140.04688 C 38.731928 140.04688 38.903335 140.21789 39.246094 140.38867 C 39.760233 140.73022 40.274926 140.90064 40.789062 141.24219 C 45.073553 143.63304 49.357097 145.51185 53.298828 147.04883 C 60.325391 149.95201 68.72355 152.51406 78.492188 154.39258 C 91.345656 156.78343 106.42646 157.63645 122.87891 154.5625 C 130.93374 153.02552 139.15954 150.80699 147.72852 147.2207 C 153.72681 145.00063 160.41093 141.75546 167.4375 137.14453 C 167.4375 137.14453 158.8687 150.97624 136.41797 157.29492 C 141.55936 163.61361 147.72852 170.95703 147.72852 170.95703 C 185.6034 169.7616 200 145.17102 200 145.3418 C 200 90.864507 175.32227 46.632812 175.32227 46.632812 C 150.81498 28.359864 127.33594 28.873047 127.33594 28.873047 L 124.93555 31.605469 C 154.07007 40.315005 167.60938 53.123047 167.60938 53.123047 C 149.78588 43.559635 132.30451 38.776964 116.02344 36.898438 C 103.6841 35.532235 91.860406 35.874033 81.40625 37.240234 C 80.377973 37.240234 79.520465 37.411256 78.492188 37.582031 C 72.493901 38.265132 57.925509 40.315362 39.587891 48.341797 C 33.246846 51.0742 29.476562 53.123047 29.476562 53.123047 C 29.476562 53.123047 43.530578 39.631412 74.378906 30.921875 L 72.664062 28.873047 z M 68.037109 88.814453 C 77.805746 88.814453 85.688958 97.182327 85.517578 107.59961 C 85.517578 118.0169 77.805746 126.38477 68.037109 126.38477 C 58.439851 126.38477 50.556641 118.0169 50.556641 107.59961 C 50.556641 97.182327 58.268473 88.814453 68.037109 88.814453 z M 130.5918 88.814453 C 140.18907 88.814453 148.07227 97.182327 148.07227 107.59961 C 148.07227 118.0169 140.36044 126.38477 130.5918 126.38477 C 120.99455 126.38477 113.11133 118.0169 113.11133 107.59961 C 113.11133 97.182327 120.82317 88.814453 130.5918 88.814453 z "/></g>
	</svg>
		`;
		btn.id = 'sidebartoggle';
		btn.classList.add('hide');
		btn.addEventListener('click', hideToggle);
		attach_to.appendChild(btn);
	}

	function hideToggle(event){
		if (btn.classList.contains('hide')) {
			hide();
		} else {
			show();
		}
	}

	function mouseLeftChat(event){
		if(event.x <= 0){
			show();
		}
	}

	function hide(){
		if(ONLY_IN_NARROW_WINDOW && document.body.clientWidth > NARROW){
			return;
		}
		btn.classList.remove('hide');
		guilds.style = "display: none";
		channels.style = "display: none";
	}

	function show(){
		if(ONLY_IN_NARROW_WINDOW && document.body.clientWidth > NARROW){
			return;
		}
		btn.classList.add('hide');
		guilds.style = "display: flex";
		channels.style = "display: flex";
	}

	setTimeout(function wait() {
		const attach_toggle_to = document.getElementById('app-mount');
		const chat = document.querySelector('.chat .content');
		if (chat) {
			guilds = document.querySelector('.guilds-wrapper');
			channels = document.querySelector('[class^="channels-"]');
			makeStyle();
			makeButton(attach_toggle_to);
			if(HIDE_CHANNEL_ON_MOUSE_LEAVE){
				chat.addEventListener("mouseenter", hide);
				chat.addEventListener("mouseleave", mouseLeftChat);
			}
		} else {
			setTimeout(wait, 300);
		}
	}, 300);

}());
