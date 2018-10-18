// ==UserScript==
// @name        Vivaldi Styles
// @namespace   uk.lonm.vivaldi
// @include     https://forum.vivaldi.net/*
// @version     1
// ==/UserScript==


function makeStyle(){
    var style = document.createElement('style');
    style.innerHTML = `@media (max-width: 1199px){

        #menu > section:nth-child(3) > ul {
            display: flex;
            flex-direction: column;
        }

        #menu > section:nth-child(3) > ul > li:nth-child(1) {order: 1}
        #menu > section:nth-child(3) > ul > li:nth-child(2) {order: 2}
        #menu > section:nth-child(3) > ul > li:nth-child(3) {order: 3}
        #menu > section:nth-child(3) > ul > li:nth-child(8) {order: 4}
        #menu > section:nth-child(3) > ul > li:nth-child(9) {order: 5}

        #menu > section:nth-child(3) > ul > li:nth-child(4) {order: 6}
        #menu > section:nth-child(3) > ul > li:nth-child(5) {order: 7}
        #menu > section:nth-child(3) > ul > li:nth-child(6) {order: 8}
        #menu > section:nth-child(3) > ul > li:nth-child(7) {order: 9}

        #menu > section:nth-child(2) > ul > li,
        #menu > section:nth-child(3) > ul > li:nth-child(4),
        #menu > section:nth-child(3) > ul > li:nth-child(5),
        #menu > section:nth-child(3) > ul > li:nth-child(6),
        #menu > section:nth-child(3) > ul > li:nth-child(7),
        #menu > section:nth-child(4) > ul > li {
            display: none;
        }

        #menu > section:nth-child(2):hover > ul > li,
        #menu > section:nth-child(3):hover > ul > li,
        #menu > section:nth-child(4):hover > ul > li {
            display: block;
        }
}
`;
    document.body.appendChild(style);
}

makeStyle();
