// ==UserScript==
// @name        Vivaldi Styles
// @namespace   uk.lonm.vivaldi
// @include     https://forum.vivaldi.net/*
// @version     1
// ==/UserScript==


function makeStyle(){
    var style = document.createElement('style');
    style.innerHTML = "@media (max-width: 1199px){ .menu-section .menu-section-list { height: 0px; visibility: hidden } .menu-section:hover .menu-section-list {height: auto; visibility: visible}}";
    document.body.appendChild(style);
}

makeStyle();