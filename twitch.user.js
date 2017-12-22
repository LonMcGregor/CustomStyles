// ==UserScript==
// @name        Twitch Styles
// @namespace   uk.lonm.twitch
// @include     https://www.twitch.tv/*
// @version     1
// ==/UserScript==
"use strict";

function makeStyle(){
    let style_text = ".theme--dark .vod-message .qa-mod-message span {color: white !important}"
    if(window.location.href.indexOf("?no-mobile-redirect=true") >= 0 || window.location.href.indexOf("?popout") >= 0) {
        style_text += `body.dark * {
            background-color: black !important;
            border-color: purple !important;
            color: white !important;
        }`;
        setTimeout(function add_the_button(){
            const chat_buttons = document.querySelector("div.js-chat-buttons.chat-buttons-container.clearfix");
            if(chat_buttons){
                const toggle_button = document.createElement("a");
                toggle_button.className = "button button--icon-only float-left";
                toggle_button.addEventListener("click", function(){
                    document.body.className = document.body.className === "ember-application dark" ? "ember-application light" : "ember-application dark";
                });
                /* stole the camera svg from vivaldi */
                toggle_button.innerHTML = `<figure id="ember1076" class="icon ember-view">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M14 4h-2V2H4v2H0v10h16V4h-2zm0 8H2V6h4V4h4v2h4v6z"></path>
                    <circle cx="8" cy="9" r="2"></circle>
                    </svg>
                    </figure>`;
                chat_buttons.appendChild(toggle_button);
            }
            else{setTimeout(add_the_button, 500)}
        }, 2000)
    }
    const style_element = document.createElement('style');
    style_element.innerHTML = style_text;
    document.body.appendChild(style_element);
}

makeStyle();