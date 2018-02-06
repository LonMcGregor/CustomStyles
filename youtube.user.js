// ==UserScript==
// @name        YouTube Styles
// @namespace   uk.lonm.youtube
// @include     https://www.youtube.com/*
// @version     1
// ==/UserScript==


function makeStyle(){
    var style = document.createElement('style');
    style.innerHTML = ".adDisplay{display:none!important} span.captions-text span {font-family:DejaVu Sans Mono, monospace !important}";
    document.body.appendChild(style);
}

makeStyle();
