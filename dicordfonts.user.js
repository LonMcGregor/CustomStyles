// ==UserScript==
// @name Discord Fonts
// @description Use OS Fonts on Discord.
// @author lonmcgregor
// @namespace lonm.vivaldi.net
// @match https://discordapp.com/*
// @version 1.0
// ==/UserScript==
"use strict";

function makeStyle(){
    const style = document.createElement('style');
	style.innerHTML = `
	body {font-family: Segoe UI, sans-serif !important}
	`;
    document.body.appendChild(style);
}

makeStyle();
