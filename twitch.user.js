// ==UserScript==
// @name        Twitch Styles
// @namespace   uk.lonm.twitch
// @include     https://www.twitch.tv/*
// @version     1
// ==/UserScript==
"use strict";

function addToggle(){
    const chat_buttons = document.querySelector("div.chat-input__buttons-container > div");
    if(chat_buttons){
        const toggle_button = document.createElement("a");
        toggle_button.className = "button button--icon-only float-left";
        toggle_button.addEventListener("click", function(){
            document.body.className = document.body.className === "dark" ? "light" : "dark";
        });
        /* stole the camera svg from vivaldi */
        toggle_button.innerHTML = `<button class="tw-button-icon">
                <span class="tw-button-icon__icon">
                    <figure class="tw-svg">
                    <svg class="tw-svg__asset tw-svg__asset--inherit" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M14 4h-2V2H4v2H0v10h16V4h-2zm0 8H2V6h4V4h4v2h4v6z"></path>
                    <circle cx="8" cy="9" r="2"></circle>
                    </svg>
                    </figure>
                </span>
            </button>`;
        chat_buttons.appendChild(toggle_button);
    } else { setTimeout(addToggle, 500); }
}

function makeStyle(){
    const style_element = document.createElement('style');
    style_element.innerHTML = `
    body.dark {
        filter: invert(1) hue-rotate(180deg);
    }
    body.dark img, body.dark video {
        filter: invert(1) hue-rotate(180deg);
    }
        `;
    document.body.appendChild(style_element);
}

makeStyle();
setTimeout(addToggle, 2000);
