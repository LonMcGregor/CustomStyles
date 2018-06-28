// ==UserScript==
// @name BBC Weather Fullscreen
// @description Auto push the bbc weather page into fullscreen
// @author lonmcgregor
// @namespace lonm.vivaldi.net
// @match https://www.bbc.co.uk/weather/0/*
// @match https://www.bbc.com/weather/0/*
// @version 1.0
// ==/UserScript==
"use strict";

/* Aliases for sanity */
const $ = document.querySelector.bind(document);

/* open if meet the following criteria
* set to 0 to disable
* set to 9999 to always enable */
const PANEL_MAX_WIDTH = 600;
function isNarrowEnough(){
    return window.innerWidth < PANEL_MAX_WIDTH;
}

function goToFullscreen(){
    if(!isNarrowEnough()){
        return;
    }
    const button = $("button.wr-c-map-fullscreen-button:not(.wr-c-map__map--hidden)");
    if(button){
        button.click();
    } else {
        setTimeout(goToFullscreen, 500);
    }
}

goToFullscreen();
