
function ShowHelpPage(url,event,width,height,classname) {
    //ensure that the session for the project is loaded
    //LoadSession()

    //If we are loading a page then make sure that the highlight code is supressed. Otherwise an access denied error will occur.
    if (url.indexOf("page.aspx?") != -1) {
        url = url + "&NoHighlight=true";
    }
    //winwidth = document.body.offsetWidth;


    var helpWindow = document.createElement("IFRAME");
    //helpWindow.style.top = "100px";
    //helpWindow.style.left = "100px";
    //helpWindow.style.backgroundImage = "url(reports.gif)";

    //set Width
    if (width != null) {
        helpWindow.style.width = width;
    }
    else {
        helpWindow.style.width = "400px";
    }
    //Set height
    if (height != null) {
        helpWindow.style.height = height;
    }
    else {
        helpWindow.style.height = "300px";

    }

    helpWindow.style.position = "absolute";
    PositionHelpWindow(helpWindow, event);
    helpWindow.src = url;
    helpWindow.frameBorder = "0";
    //helpWindow.style.border = "3px solid black";
    //helpWindow.setAttribute("class", "helpWindow");
    helpWindow.className = classname;
    helpWindow.allowTransparency = "true";
    helpWindow.id = "frame1";
    helpWindow.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=95)";
    helpWindow.style.opacity = "0.95"
    //helpWindow.style.;-moz-opacity:0.80;opacity:.8;
    document.body.appendChild(helpWindow);
}

function PositionHelpWindow(helpWindow,event) {
    //var evtobj = window.event ? event : e

    
    //var docwidth = document.documentElement.offsetWidth;
    //var docheight = document.documentElement.offsetHeight;

    //Get Browser height
    if (typeof (window.innerHeight) == 'number') {
        //Non-IE
        docheight = window.innerHeight;
    }
    else {
        //IE 6+ in 'standards compliant mode'
        docheight = document.documentElement.clientHeight;
    }
    //Get Browser width
    if (typeof (window.innerWidth) == 'number') {
        //Non-IE
        docwidth = window.innerWidth;
    }
    else {
        //IE 6+ in 'standards compliant mode'
        docwidth = document.documentElement.clientWidth;
    } 


    var boxwidth = 400;
    var boxheight = 300;
    var scrollX = document.documentElement.scrollLeft + document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop + document.body.scrollTop;
    //Position Horizontally
    if (docwidth - event.clientX < boxwidth) {
        //document.getElementById("_DivSmallPopup").style.left = event.clientX + scrollX - boxwidth + "px";
        helpWindow.style.left = event.clientX + scrollX - boxwidth + "px";
    }
    else {
        //document.getElementById("_DivSmallPopup").style.left = event.clientX + scrollX + 15 + "px";
        helpWindow.style.left = event.clientX + scrollX + 15 + "px";
    }
    //Position Vertically
    if (docheight - event.clientY < boxheight) {
        //document.getElementById("_DivSmallPopup").style.top = event.clientY + scrollY - boxheight + "px";
        helpWindow.style.top = event.clientY + scrollY - boxheight + "px";
    }
    else {
        //document.getElementById("_DivSmallPopup").style.top = event.clientY + scrollY + 8 + "px";
        helpWindow.style.top = event.clientY + scrollY + 8 + "px";
    }
}

function CloseHelpWindow() {
    document.body.removeChild(document.getElementById("frame1"));
}

