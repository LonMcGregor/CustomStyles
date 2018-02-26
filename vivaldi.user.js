// ==UserScript==
// @name        Vivaldi Styles
// @namespace   uk.lonm.vivaldi
// @include     https://forum.vivaldi.net/*
// @version     1
// ==/UserScript==


function makeStyle(){
    var style = document.createElement('style');
    style.innerHTML = `@media (max-width: 1199px){
    .menu-section:not([data-section="notifications"]):not([data-section="chats"]) .menu-section-list {
        height: 0px; visibility: hidden
    }
    .menu-section:not([data-section="notifications"]):not([data-section="chats"]):hover .menu-section-list {
        height: auto; visibility: visible
    }
}
.copy-all-code-button {
    position: absolute;
    right: 20px;
    opacity: 0;
    background: rgba(0,0,0,0.7);
    color: white;
    border-radius: 5px;
    border: 1px solid rgba(255,255,255,0.7);
}

pre.markdown-highlight:hover .copy-all-code-button {
    opacity: 1;
}
`;
    document.body.appendChild(style);
}

function make_copy_button(){
    const new_button = document.createElement("button");
    new_button.textContent = "Copy All";
    new_button.className = "copy-all-code-button";
    new_button.addEventListener("click", copy_all);
    return new_button;
}

function copy_all(event){
    const code_node = event.currentTarget.parentElement.querySelector("code");
    const window_selection = window.getSelection();
    const code_range = document.createRange();
    code_range.selectNodeContents(code_node);
    window_selection.removeAllRanges();
    window_selection.addRange(code_range);
    document.execCommand('copy');
}

function add_copy_code(){
    const codeblocks = document.querySelectorAll("pre.markdown-highlight");
    console.log(codeblocks);
    codeblocks.forEach(codeblock => {
        codeblock.appendChild(make_copy_button());
    });
}

makeStyle();

setTimeout(add_copy_code, 1000);
