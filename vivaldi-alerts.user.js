// ==UserScript==
// @name        Vivaldi Notify Alerts
// @namespace   lonm.vivaldi.net
// @include     https://forum.vivaldi.net/*
// @version     1.0.1
// ==/UserScript==

(function(){
    "use strict";

    if(Notification.permission !== "granted"){
        Notification.requestPermission();
    }

    const alertObserver = new MutationObserver(alertChanged);
    const config = {childList: true};

    function alertChanged(mutations){
        mutations.forEach(mutation => {
            if(mutation.type === 'childList' && mutation.addedNodes.length > 0){
                const notify_text = mutation.addedNodes[0].innerText;
                const note = new Notification("Vivaldi Forum", {
                    body: notify_text,
                    icon: "https://forum.vivaldi.net/plugins/nodebb-theme-vivaldi/images/favicon.png"
                });
                // if multiple windows open, only show one notification!?
            }
        });
    }

    const alertbox = document.querySelector("body > div.alert-window");
    alertObserver.observe(alertbox, config);
}());
