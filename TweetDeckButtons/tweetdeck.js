var dark;
var light;

function doScroll(positive){
    var col = document.getElementsByClassName("js-column")[0];
    var colWidth = col.getBoundingClientRect().width;
    if(!positive) colWidth = 0 - colWidth;
    document.getElementById("container").scrollLeft += colWidth;
}

function toggleTheme(){
    if(light.disabled==dark.disabled){
        dark.disabled = true;
        light.enabled = false;
        return;
    }
    light.disabled=!light.disabled;
    dark.disabled=!dark.disabled;
}

function setLinks(){
    var links = document.getElementsByTagName('link');
    for(var i = 0; i < links.length; i++){
        if(!links[i].attributes.title){
            continue;
        }
        if(links[i].attributes.title.value==="dark"){
            dark = links[i];
        }
        else if(links[i].attributes.title.value==="light"){
            light = links[i];
        }
    }
}

function makeButton(offset, tip, action){
    var bp = document.createElement('button');
    bp.id = "scrollPositive";
    bp.style.position = "fixed";
    bp.style.top = "0px";
    bp.style.right = (50*offset)+"px";
    bp.style.width = "50px";
    bp.style.height = "30px";
    bp.style.background = bp.style.border = "transparent";
    bp.style.color = "white";
    bp.style.zIndex = "50";
    bp.innerText = tip;
    bp.addEventListener('click', action);
    return bp;
}

document.body.appendChild(makeButton(0, "⏩", function(){doScroll(true);}));
document.body.appendChild(makeButton(1, "⏪", function(){doScroll(false);}));
document.body.appendChild(makeButton(2, "✴️", function(){toggleTheme();}));

setLinks();