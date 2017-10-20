// ==UserScript==
// @name        Kurtjmac Twitch Emotes Cheatsheet
// @namespace   uk.lonm.twitch.kurtjmac
// @include     https://www.twitch.tv/*
// @version     1
// ==/UserScript==


var button_box = "div.js-chat-buttons.chat-buttons-container.clearfix";
var textbox_location = "textarea.js-chat_input.chat_text_input.form__input.ember-text-area.ember-view";

var emotes = [
[459635, "kurtDisapproves"],
[459629, "kurtBusto"],
[199781, "kurtFine"],
[199787, "kurtLaunch"],
[199789, "kurtYoink"],
[184684, "kurtOhkurt"],
[184686, "kurtOhyou"],
[184687, "kurtOhwolfie"],
[129409, "kurtFacepalm"],
[122985, "kurtCar"],
[122870, "kurtJokes"],
[94751,  "kurtWolfie"],
[94750,  "kurtIndeed"],
[94756,  "kurtCone"],
[94757,  "kurtSub"],
[94758,  "kurtScience"],
[94759,  "kurtFail"],
[94760,  "kurtMagic"],
];


function make_all(){
	for(var i =  0; i < emotes.length; i++){
		document.querySelector(button_box).appendChild(create_button(emotes[i][0],emotes[i][1]));
	}
}

function insert_emote(name){
	document.querySelector(textbox_location).value = document.querySelector(textbox_location).value + ' ' + name;
}

function create_button(id, name){
	var emote_link = document.createElement('a');
	emote_link.onclick = function(){insert_emote(name);};
	emote_link.className = "float-left";
	var img = document.createElement('img');
	img.src = "//static-cdn.jtvnw.net/emoticons/v1/"+id+"/1.0";
	img.srcset = "//static-cdn.jtvnw.net/emoticons/v1/"+id+"/2.0 2x"
	img.alt = name;
	img.className = "emoticon";
	img.height = 20;
	emote_link.appendChild(img);
	return emote_link;
}

setTimeout(function wait() {
	if(document.querySelector(button_box)){
		make_all();
	} else {
        /* wait for chat to fully load */
		setTimeout(wait, 300);
	}
}, 300);