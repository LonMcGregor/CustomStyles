// ==UserScript==
// @name        Vivaldi Blogs Styles
// @namespace   lonm.vivaldi.net
// @include     https://*.vivaldi.net/wp-admin/*
// @version     1.1
// ==/UserScript==


function makeStyle(){
    var style = document.createElement('style');
    style.innerHTML = `@media (max-width: 800px){
        #postbox-container-1 > *{
            display: none;
        }

        #postbox-container-1:before{
            content: "+";
            position: absolute;
            top: -8px;
            left: 200px;
            z-index: 1010;
            font-size: large;
            color: rgba(240,245,250,.6);
        }

        #postbox-container-1:hover > *{
            display: block;
        }

        #postbox-container-1:hover:after{
            content: " ";
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 1010;
            width: 100vw;
            height: 85px;
        }
    }
`;
    document.body.appendChild(style);
}

makeStyle();
