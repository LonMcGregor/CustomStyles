// ==UserScript==
// @name        Gfycat Redirector
// @namespace   uk.lonm.gfycat
// @include     https://gfycat.com/*
// @version     1
// ==/UserScript==

var webm = window.location.href.indexOf("webm") > 0,
	detail = window.location.href.indexOf("gifs/detail") > 0,
	id = "";

if(!webm){
	if(detail){
		var id = window.location.href.substring("https://gfycat.com/gifs/detail/".length);
	} else {
		var id = window.location.href.substring("https://gfycat.com/".length);
	}
	window.location.href = "https://giant.gfycat.com/" + id + ".webm";
}