// ==UserScript==
// @name        Twitch Subtitles Override
// @namespace   uk.lonm.twitch
// @include     https://www.twitch.tv/*
// @version     1
// ==/UserScript==

(function makeStyle(){
    var style = document.createElement('style');
    style.innerHTML = `.player-captions-container {
        font-size: 30px !important;
        text-align: center !important;
    }`;
    document.body.appendChild(style);
})();
