// ==UserScript==
// @name Discord Panel
// @description Creates a button to toggle guilds and channels.
// @author luetage, lonmcgregor
// @namespace luetage.vivaldi.net
// @match https://discordapp.com/channels/*
// ==/UserScript==

function makeStyle(){
    var style = document.createElement('style');
	style.innerHTML = `
/* sidebar toggle */
#sidebartoggle {
	order: -1;
	position: fixed;
	left: 0px;
	top: 0px;
	height: 100vh;
	width: 6px;
	padding: 0px;
}
#sidebartoggle.hide {
	background: #4c4f56;
}

/* fancy message avatars */
.message-group .avatar-large {
    opacity: 0.5;
    position: relative;
    transform: scale(3);
    left: 25px;
    top: 0px;
    -webkit-mask-image: -webkit-linear-gradient(180deg, transparent 15px, #ffffff 40px);
    border-radius: 0;
}
.message-group:hover .avatar-large  {
    opacity: 0.8;
}
.message-group .avatar-large:hover  {
    opacity: 1;
    -webkit-mask-image: -webkit-linear-gradient(180deg, transparent 15px, #ffffff 30px);
}
`;
    document.body.appendChild(style);
}

function makeButton(attach_to){
	const btn = document.createElement('button');
	btn.id = "sidebartoggle"
	btn.classList.add('hide');
	btn.addEventListener('click', buttonClick);
	attach_to.appendChild(btn);
}

function buttonClick(event){
	const btn = event.target;
	const guilds = document.querySelector('.guilds-wrapper');
	const channels = document.querySelector('.channels-3g2vYe');
	if (btn.classList.contains('hide')) {
		btn.classList.remove('hide');
		guilds.style = "display: none";
		channels.style = "display: none";
	} else {
		btn.classList.add('hide');
		guilds.style = "display: flex";
		channels.style = "display: flex";
	}
}

setTimeout(function wait() {
	const attach_toggle_to = document.querySelector('#app-mount');
	if (attach_toggle_to) {
		makeStyle();
		makeButton(attach_toggle_to);
	} else {
		setTimeout(wait, 300);
	}
}, 300);
