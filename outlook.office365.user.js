// ==UserScript==
// @name        Outlook O365 Styles
// @namespace   uk.lonm.office365.outlook
// @include     https://outlook.office.com/owa/*
// @include     https://outlook.office365.com/owa/*
// @version     1
// ==/UserScript==


function makeStyle(){
    var style = document.createElement('style');
    style.innerHTML = "@media (max-width: 500px) {\
#primaryContainer > div:nth-child(7) > div > div._n_T > div > div:nth-child(1) {width: 20vw !important}\
#primaryContainer > div:nth-child(7) > div > div._n_T > div > div._n_X {width: 80vw !important;left: 20vw !important}\
#primaryContainer > div:nth-child(7) > div > div._n_T > div > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(5) > div._n_Z4 > div > div > div._n_d4.customScrollBar.scrollContainer > div > div > div:nth-child(1) > div:nth-child(1) > div > div > div > div {position: relative !important;left: -40px !important}\
body, body > div._n_p3 {width: 100vw !important;min-width: unset !important}\
}";
    document.body.appendChild(style);
}

makeStyle();