function doScroll(positive){
    var col = document.getElementsByClassName("js-column")[0];
    var colWidth = col.getBoundingClientRect().width;
    if(!positive) colWidth = 0 - colWidth;
    document.getElementById("container").scrollLeft += colWidth;
}

function toggleTheme(){
    var settings = $("body > div.js-app.application.is-condensed > header > div > nav > div > div.js-dropdown-content > ul > li:nth-child(4) > a");
    settings.click();
    var sheet = settings.context.selectedStylesheetSet;
    
    //var n = (sheet==="dark") ? 3 : 2;
    var n = 2;
    var identifier = "#general_settings > div.control-group > div.cf > div:nth-child(1) > label:nth-child("+n+") > input";
    var btn = $(identifier);
    btn.click();
    
   // $("#settings-modal > div > div > footer > button > i").click();
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