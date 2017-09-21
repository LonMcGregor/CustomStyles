// ==UserScript==
// @name        Patreon Styles
// @namespace   uk.lonm.patreon
// @include     https://www.patreon.com/*
// @version     1
// ==/UserScript==


function makeStyle(){
    var style = document.createElement('style');
    style.innerHTML = "#reactTargetHome > div > div > div:nth-child(1) > div > div > div:nth-child(3) {display: none;} @media only screen and (min-width: 64em){ .col-lg-6 { flex-basis: 75%; max-width: 75%; }} ._2CM-components-PostFeed--spacing > .BUO-components-Card--card._3JC-components-Card--lgPadding._3wX-components-Card--allBorder._1xV-components-Card--hiddenOverflow.blf-components-Card--noPadding {display: none;} .sc-jbKcbu.bixViD {background: #F96854;} .sc-caSCKo { background: #ffffff;}";
    document.body.appendChild(style);
}

makeStyle();