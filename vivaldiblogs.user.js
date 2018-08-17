// ==UserScript==
// @name        Vivaldi Blogs Styles
// @namespace   lonm.vivaldi.net
// @include     https://*.vivaldi.net/wp-admin/*
// @version     1
// ==/UserScript==


function makeStyle(){
    var style = document.createElement('style');
    style.innerHTML = `@media (max-width: 800px){
        #postbox-container-1 {display: none}
    }
`;
    document.body.appendChild(style);
}

makeStyle();
