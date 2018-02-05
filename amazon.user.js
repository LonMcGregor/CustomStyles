// ==UserScript==
// @name        Amazon Prime Video Styles
// @namespace   uk.lonm.amazon.primevideo
// @include     https://www.amazon.co.uk/gp/video/detail/*
// @version     1
// ==/UserScript==


const VIDEO_PRIME_DETAILS = `
/* video details page */
.dv-product-offer {
    display: none;
}

a.super-tcg {
    display: none !important;
}

iframe {
    display: none;
}

.tancaccept {
    display: none;
}

.dp-main-bottom.aiv-container-limited {
    display: none;
}

div#dv-customer-reviews {
    display: none;
}

div#navFooter, #dv-sims {
    display: none;
}

.dp-rating-group {
    display: none !important;
}

img.dv-action-logo {
    display: none;
}

p.dv-provenence-msg {
    display: none;
}

span.dv-action-watchlist.dv-button.dv-action-secondary {
    display: none;
}

#nav-belt, #nav-main .nav-left, #nav-main .nav-fill {
    display: none;
}

div#nav-subnav {
    background: #232f3e;
}
div#nav-subnav .nav-a {
    color: white;
}

* {
    max-width: 100vw;
}

#dv-product-details {
    overflow-x: hidden;
}

/* subtitles */

span.timedTextBackground {
    font-family: DejaVu Sans Mono, monospace;
}

`;

function makeStyle(){
    var style = document.createElement('style');
    style.innerHTML = VIDEO_PRIME_DETAILS;
    document.body.appendChild(style);
}

makeStyle();
