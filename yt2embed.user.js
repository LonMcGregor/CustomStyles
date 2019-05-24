// ==UserScript==
// @name YT 2 Embed
// @description Quick link to the embedded version of a youtube video
// @author lonmcgregor
// @namespace lonm.vivaldi.net
// @match https://youtube.com/watch*
// @match https://www.youtube.com/watch*
// @version 1.0
// ==/UserScript==
(function(){
	"use strict";

	const re = /v=(.{11})/;
	const matches = window.location.href.match(re);
	if(matches && matches.length >= 2){
		const video = matches[1];
		const quickLink = document.createElement("a");
		quickLink.href = `https://youtube.com/embed/${video}`;
		quickLink.style.position = "fixed";
		quickLink.style.top = "0px";
		quickLink.style.left = "0px";
		quickLink.style.color = "white";
		quickLink.style.backgroundColor = "black";
		quickLink.style.zIndex = "11111";
		quickLink.innerText = "embed";
		document.body.appendChild(quickLink);
	}
}());
