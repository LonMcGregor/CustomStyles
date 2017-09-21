// ==UserScript==
// @name        Twitch Styles
// @namespace   uk.lonm.twitch
// @include     https://www.twitch.tv/*
// @version     1
// ==/UserScript==


function makeStyle(){
    var style = document.createElement('style');
    style.innerHTML = ".theme--dark .vod-message .qa-mod-message span {color: white !important} .conversations-wrapper {display: none}";
    document.body.appendChild(style);
}

makeStyle();