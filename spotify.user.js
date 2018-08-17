// ==UserScript==
// @name        Spotify Track Change Alerts
// @namespace   lonm.vivaldi.net
// @include     https://open.spotify.com/*
// @version     1
// ==/UserScript==
"use strict";

if(Notification.permission !== "granted"){
    Notification.requestPermission();
}

const trackObserver = new MutationObserver(trackChange);
const config = {attributes: true};

function trackChange(mutations){
    const target = mutations[0].target;
    const notify_text = target.computedName;
    const art = target.querySelector(".cover-art-image");
    /* Remark: Can't guarantee that the album art will load before the track name, so default back to regular spotify logo */
    let bg = art ? art.style.backgroundImage.substring(5, art.style.backgroundImage.length-2) : "https://open.spotify.com/static/images/icons/Spotify_128.png";
    bg = bg === "" ? "https://open.spotify.com/static/images/icons/Spotify_128.png" : bg;
    const note = new Notification("Spotify", {
        body: notify_text,
        icon: bg,
        silent: true
    });
    /* Remark: If using old chrome notifications API, discard after a few seconds
    Win 10 action centre keeps full list regardless */
    setTimeout(function(){note.close();}, 3000);
}

function init(){
    const nowPlaying = document.querySelector(".now-playing > span > a");
    if(nowPlaying){
        trackObserver.observe(nowPlaying, config);
    } else {
        setTimeout(init, 500);
    }
}

init();
