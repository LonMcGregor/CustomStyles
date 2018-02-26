// ==UserScript==
// @name        Outlook O365 Styles
// @namespace   uk.lonm.office365.outlook
// @include     https://outlook.office.com/owa/*
// @include     https://outlook.office365.com/owa/*
// @include     https://outlook.live.com/owa/*
// @version     1
// ==/UserScript==


function makeStyle(){
    var style = document.createElement('style');
    style.innerHTML = "@media (max-width: 500px) {\
        body > div._n_n3 > div > div._ms_2.ms-bgc-w > div > div:nth-child(4) > div > div._n_P > div._n_A > div._n_R > div > div._lv_t > div._lv_u.scrollContainer > div:nth-child(2) {display: none;}\
}";
    document.body.appendChild(style);
}

makeStyle();
