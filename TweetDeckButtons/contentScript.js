/*
TweetDeckButtons
by LonMcGregor
See https://github.com/LonMcGregor/CustomStyles/
*/
"use strict";
var script = document.createElement('script');
script.src = chrome.extension.getURL('tweetdeck.js');
document.body.appendChild(script);
var style = document.createElement('link');
style.rel = "stylesheet"
style.href = chrome.extension.getURL('tweetdeck.css');
document.body.appendChild(style);