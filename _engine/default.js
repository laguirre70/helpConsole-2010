//----------------- Functions to resize contents window ------------------
var dragMode = false;
var obj = ""

function toDragMode() {
    dragMode = true;
    obj = document.getElementById("tdcontentswrapper");
    //hide the page iframe so that the onMouseUp event will fire properly
    if (document.getElementById("frame_page") != null) {
        document.getElementById("tdpage").style.display = "none";
        //document.getElementById("frame_page").style.height = "5px";
        //document.getElementById("frame_page").style.visibility = "hidden";
    }
}
function startMoving(e) {
    if (!dragMode) return false;
    //obj.style.width = (e.clientX - 10) + 'px';
    var iWidth = (e.clientX - 1) - document.getElementById("tblmain").offsetLeft - document.getElementById("tbldetailwrapper").offsetLeft - document.getElementById("tdcontentswrapper").offsetLeft;
    if (document.getElementById("tdcontentscontrols") != null) {
        //if the contents is in edit mode, ensure that the window is wide enough to display add, delete, & properties icons.
        if (iWidth < 210) { iWidth = 210 }
    }
    else {
        //if the contents is in live mode, allow it to be resized down to 10px
        if (iWidth < 10) { iWidth = 10 }
    }
    obj.style.width = iWidth + "px";
}
function stopMoving() {
    dragMode = false;
    obj = "";
    //Ensure that the page iframe is visible
    if (document.getElementById("frame_page") != null) {
        document.getElementById("tdpage").style.display = "";
        //document.getElementById("frame_page").style.visibility = "";
    }
    //reposition edit buttons
    if (document.getElementById("frame_page") != null) {
        window_resize();
    }
}
//----------------------------------------------------------------------------

//var curwidth = 0; 
//var curX = 0; 
//var newX = 0; 
//var mouseButtonPos = "up"; 

//function setPos(e) 
//    { 
//    //get the original div width. 
//    //For handling events in ie vs. w3c. 
//    curEvent = ((typeof event == "undefined")? e: event); 
//    mouseButtonPos = "down"; 
//    curX = curEvent.clientX; 
//    //Get the width of the div. 
//    var tempwidth = document.getElementById("tdcontentswrapper").style.width;
//    if (tempwidth == "")
//	    {
//	    //if the width value is blank then this probably means that the width is not defined. get the width from offsetwidth instead
//	    tempwidth = document.getElementById("tdcontentswrapper").offsetWidth; 
//	    curwidth = tempwidth; 
//	    }
//    else
//	    {
//	    //Get the width value. 
//	    var widthArray = tempwidth.split("p"); 
//	    //Set the current width. 
//	    curwidth = parseInt(widthArray[0]); 
//	    }
//    } 
//    
//function getPos(e)
//    { 
//    //changes the width of the div while the mouse button is pressed
//    if( mouseButtonPos == "down" ) 
//        { 
//        //For handling events in ie vs. w3c. 
//        curEvent = ((typeof event == "undefined")? e: event); 
//        //Get new mouse position. 
//        newX = curEvent.clientX; 
//        //Calculate movement in pixels. 

//        var pixelMovement = parseInt(newX - curX); 
//        //Determine new width. 
//        var newwidth = parseInt(curwidth + pixelMovement); 
//        //Enforce a minimum width. 
//        newwidth = ((newwidth < 50)? 50: newwidth); 
//        //Set the new width. 
////alert("new width = " + newwidth)        
//        document.getElementById("tdcontentswrapper").style.width = newwidth + "px"; 
//        //Set the new left of the splitter bar. 
//        document.getElementById("tdseparator").style.left = parseInt(document.getElementById("tdcontentswrapper").style.width) + 10; 
//        Position_Edit_Button();
//        } 
//    } 

function window_resize() {
    //--test-----------
    //document.getElementById("tblmain").style.visibility = "";
    //return;
    //------------------

    //if the edit page button exists and the editor is not visible, show the button
    if (document.getElementById("diveditor").style.display == "none" && document.getElementById("imgedit") != null) {
        document.getElementById("imgedit").style.display = ""
    }

    //alert("conents offset width = " + document.getElementById("divcontents").offsetWidth);
    //if we are in edit mode, and the contents window is hidden, show it now. 
    if (document.getElementById("imgedit") != null && document.getElementById("divcontents").offsetWidth == 0) {
        if (navigator.appVersion.indexOf("MSIE 7.") != -1) {
            //IE7 - The 'table-cell' display doesn't work in ie7 so use 'inline instead'
            document.getElementById("tdcontentswrapper").style.display = "inline"
        }
        else {
            //All other browsers
            document.getElementById("tdcontentswrapper").style.display = "table-cell"
        }

        //document.getElementById("tdcontentswrapper").style.display = "inline"
        document.getElementById("tdcontentswrapper").style.width = "300px"
        //document.getElementById("tdpagewrapper").style.width = "70%"
    }
    //alert("contents wrapper display = " + document.getElementById("tdcontentswrapper").style.display);
    //document.getElementById("tdpagefooter").innerHTML = document.getElementById("tdpagefooter").innerHTML + "resize again ";
    //Hide the progress indicator
    //document.getElementById("body").style.backgroundImage = "";
    //get the height of the header and footer
    var tableHeight = getBrowserHeight() - 4;
    var headerHeight = GetTagHeight("tdheader");
    var footerHeight = GetTagHeight("tdfooter");
    var pageheaderHeight = GetTagHeight("tdpageheader");
    var pagefooterHeight = GetTagHeight("tdpagefooter");
    var contentsheaderHeight = GetTagHeight("tdcontentsheader");
    var contentsfooterHeight = GetTagHeight("tdcontentsfooter");
    //calculate the page and contents height
    var pageHeight = tableHeight - headerHeight - footerHeight - pageheaderHeight - pagefooterHeight
    var contentsHeight = tableHeight - headerHeight - footerHeight - contentsheaderHeight - contentsfooterHeight
    //var pageWidth=document.getElementById("tdpage").offsetWidth;
    //resize the editor
    var editor = $find("editor1");

    //    alert("tableHeight = " + tableHeight);
    //    alert("contentsHeight = " + contentsHeight);
    //    alert("headerHeight = " + headerHeight);
    //    alert("footerHeight = " + footerHeight);
    //    alert("contentsheaderHeight = " + contentsheaderHeight);
    //    alert("contentsfooterHeight = " + contentsfooterHeight);

    //Resize the skin table to fit the height of the screen
    //alert("tableHeight = " + tableHeight);
    document.getElementById("tblmain").style.height = tableHeight + "px";
    //Resize the contents cell
    document.getElementById("tdcontents").style.height = contentsHeight + "px";
    if (document.getElementById("divcontents").offsetHeight != 0) { document.getElementById("TreeView1").style.height = document.getElementById("divcontents").offsetHeight - 28 + "px" }
    //Resize the page cell
    document.getElementById("tdpage").style.height = pageHeight + "px";
    //document.getElementById("tdpage").style.height = 200;

    if (editor != null) {
        //set the editor position
        //This code is included so that the editor can shrink (as well as grow)
        var elem = editor.get_element();
        elem.style.minWidth = "";
        elem.style.minHeight = "";

        //determine what the editor height will be (based on toolbars)
        //if (document.getElementById("toolbar2").style.height != "1px")
        if (document.getElementById("toolbar2").style.display == "") {
            //Make room for full toolbars
            //editor.setSize(document.getElementById("tdpage").offsetWidth-2+ "px",pageHeight-52+ "px")
            //editor.setSize(document.getElementById("tdpage").offsetWidth-6+ "px",pageHeight-81+ "px")
            editor.setSize(document.getElementById("tdpage").offsetWidth - 6 + "px", pageHeight - 84 + "px")
        }
        else {
            //Don't need to make room for full toolbars because they are hidden.
            //editor.setSize(300,pageHeight)
            //editor.setSize(document.getElementById("tdpage").offsetWidth-2 + "px",pageHeight-29+ "px")
            //editor.setSize(document.getElementById("tdpage").offsetWidth-6 + "px",pageHeight-29+ "px")
            editor.setSize(document.getElementById("tdpage").offsetWidth - 6 + "px", pageHeight - 31 + "px")
            //editor.setSize(pageWidth-6 + "px",pageHeight-29+ "px")
        }
    }

    Position_Edit_Button();

    //Ensure that the skin table is visible
    document.getElementById("tblmain").style.visibility = "";

    //if this is helpconsole.com, show the bottom toolbar
    //if (document.getElementById("divHostedToolbar") != null && document.getElementById("imgedit") != null) {
    if (document.getElementById("divHostedToolbar").innerHTML != "") {
        //alert("about to show toolbar");
        //setTimeout("document.getElementById('divHostedToolbar').style.visibility = 'visible'", 5000);
        setTimeout("document.getElementById('divHostedToolbar').style.display = ''", 500);
        //document.getElementById("divHostedToolbar").style.visibility = "visible";
    }

}

function Position_Edit_Button() {
    //position the edit page button (if found)
    if (document.getElementById("imgedit") != null) {
        document.getElementById("imgedit").style.left = document.getElementById("tblmain").offsetLeft + document.getElementById("tbldetailwrapper").offsetLeft + document.getElementById("tdpagewrapper").offsetLeft + "px";
        document.getElementById("imgedit").style.top = document.getElementById("tdheader").offsetHeight + document.getElementById("tdpageheader").offsetHeight + "px";
    }

    if (document.getElementById("imgEditHeader") != null) {
        //position the edit images
        document.getElementById("imgEditHeader").style.top = document.getElementById("tdheader").offsetTop + "px";
        document.getElementById("imgEditHeader").style.left = document.getElementById("tblmain").offsetLeft + "px";
        document.getElementById("imgEditContentsHeader").style.top = document.getElementById("tdheader").offsetHeight + document.getElementById("tdcontentsheader").offsetTop + "px";
        //document.getElementById("imgEditContentsHeader").style.left = document.getElementById("tblmain").offsetLeft + "px";
        document.getElementById("imgEditContentsHeader").style.left = document.getElementById("tblmain").offsetLeft + document.getElementById("tbldetailwrapper").offsetLeft + "px";
        document.getElementById("imgEditPageHeader").style.top = document.getElementById("tdheader").offsetHeight + document.getElementById("tdcontentsheader").offsetTop + "px";
        //document.getElementById("imgEditPageHeader").style.left = document.getElementById("tblmain").offsetLeft + document.getElementById("tdpagewrapper").offsetLeft + "px";
        document.getElementById("imgEditPageHeader").style.left = document.getElementById("tblmain").offsetLeft + document.getElementById("tbldetailwrapper").offsetLeft + document.getElementById("tdpagewrapper").offsetLeft + "px";
        //document.getElementById("imgEditContentsFooter").style.top = document.getElementById("tdcontentswrapper").offsetTop + document.getElementById("tdcontentsfooter").offsetTop + "px";
        document.getElementById("imgEditContentsFooter").style.top = document.getElementById("tdheader").offsetHeight + document.getElementById("tdcontentsheader").offsetHeight + document.getElementById("tdcontents").offsetHeight + "px";
        //document.getElementById("imgEditContentsFooter").style.left = document.getElementById("tblmain").offsetLeft + "px";
        document.getElementById("imgEditContentsFooter").style.left = document.getElementById("tblmain").offsetLeft + document.getElementById("tbldetailwrapper").offsetLeft + "px";
        //document.getElementById("imgEditPageFooter").style.top = document.getElementById("tdpagewrapper").offsetTop + document.getElementById("tdpagefooter").offsetTop + "px";
        document.getElementById("imgEditPageFooter").style.top = document.getElementById("tdheader").offsetHeight + document.getElementById("tdpageheader").offsetHeight + document.getElementById("tdpage").offsetHeight + "px";
        //document.getElementById("imgEditPageFooter").style.left = document.getElementById("tblmain").offsetLeft + document.getElementById("tdpagewrapper").offsetLeft + "px";
        document.getElementById("imgEditPageFooter").style.left = document.getElementById("tblmain").offsetLeft + document.getElementById("tdpagewrapper").offsetLeft + document.getElementById("tbldetailwrapper").offsetLeft + "px";
        document.getElementById("imgEditFooter").style.top = document.getElementById("tdfooter").offsetTop + "px";
        document.getElementById("imgEditFooter").style.left = document.getElementById("tblmain").offsetLeft + "px";
        //display edit buttons
        if (document.getElementById("tdheader").offsetHeight > 17) { document.getElementById("imgEditHeader").style.display = ""; }
        if (document.getElementById("tdcontentsheader").offsetHeight > 17) { document.getElementById("imgEditContentsHeader").style.display = ""; }
        if (document.getElementById("tdpageheader").offsetHeight > 17) { document.getElementById("imgEditPageHeader").style.display = ""; }
        if (document.getElementById("tdcontentsfooter").offsetHeight > 17) { document.getElementById("imgEditContentsFooter").style.display = ""; }
        if (document.getElementById("tdpagefooter").offsetHeight > 17) { document.getElementById("imgEditPageFooter").style.display = ""; }
        if (document.getElementById("tdfooter").offsetHeight > 17) { document.getElementById("imgEditFooter").style.display = ""; }
    }
}


function getBrowserHeight() {
    var myHeight = 0;
    if (typeof (window.innerHeight) == 'number') {
        //Non-IE
        myHeight = window.innerHeight;
    }
    else {
        //IE 6+ in 'standards compliant mode'
        myHeight = document.documentElement.clientHeight;
    }
    //Subtract the height of the hosted toolbar if it is visible
    if (document.getElementById("divHostedToolbar") != null) {
        if (document.getElementById("divHostedToolbar").innerHTML != "") {
            myHeight = myHeight - 40;
        }
    }
    return myHeight;
}

function GetTagHeight(TagID) {

    var thisHeight = document.getElementById(TagID).style.height;
    if (thisHeight.lastIndexOf("px") == -1) {
        document.getElementById(TagID).style.height = "100px"
        thisHeight = "100"
    }
    else {
        thisHeight = thisHeight.substr(0, thisHeight.lastIndexOf("px"));
    }
    //convert from string to integer
    thisHeight = parseInt(thisHeight);
    return thisHeight;
}


function DisplaySearch(searchtext, condition, filter) {
    //if the mode is 'no-contents' and we are in live mode, then display the contents window and hide the page window
    //    if (document.getElementById("imgedit") == null && document.getElementById("divcontents").offsetWidth == 0) 
    //        {
    //        document.getElementById("tdcontentswrapper").style.display = "table-cell"
    //        document.getElementById("tdcontentswrapper").style.width = "250px"
    //        //document.getElementById("tdpagewrapper").style.width = "70%"
    //        }
    //    //If the contents window is visible then show the search window
    //    alert("divcontents width = " + document.getElementById("divcontents").offsetWidth)
    //    if (document.getElementById("divcontents").offsetWidth != 0)
    //        {
    //Show the search results window with the loading animation
    document.getElementById("divsearchresults").style.backgroundImage = "url(../_engine/images/loading.gif)";
    document.getElementById("divsearchresults").style.backgroundRepeat = "no-repeat";
    document.getElementById("divsearchresults").style.backgroundPosition = "center center"
    //hide Contents
    document.getElementById("divcontents").style.display = "none";
    //hide properties window
    document.getElementById("divproperties").style.display = "none";
    //document.getElementById("TreeView1").style.height="100%";
    //hide index
    document.getElementById("divindex").style.display = "none";
    document.getElementById("divindex").innerHTML = "";
    //show the search results window
    document.getElementById("divsearchresults").style.display = "";
    //Set the height of the search results window so that the scrollbars will work
    //document.getElementById("divsearchresults").style.height=document.getElementById("divcontents").style.height;
    document.getElementById("divsearchresults").style.height = "100%";
    //Change the contents heading (if the control exists)
    if (document.getElementById("tdcontentslabel") != null) {
        document.getElementById("tdcontentslabel").style.display = "none";
        document.getElementById("tdindexlabel").style.display = "none";
        document.getElementById("tdsearchresultslabel").style.display = "";
    }
    //hide the contents controls
    if (document.getElementById("tdcontentscontrols") != null) {
        document.getElementById("tdcontentscontrols").style.display = "none";
    }
    //Show the close icon
    if (document.getElementById("tdCloseContentsWindow") != null) {
        document.getElementById("tdCloseContentsWindow").style.display = "";
        if (document.getElementById("tdeditcontents") != null) { document.getElementById("tdeditcontents").style.display = "none" }
    }
    if (document.getElementById("txtAdvancedSearch") != null) {
        document.getElementById("txtAdvancedSearch").focus();
    }
    //        }

    //   	//if the condition was specified, then set it now
    //   	        if (document.getElementById("lstSearchCondition") != null && condition != "") {
    //   	            document.getElementById("lstSearchCondition").value = condition;
    //   	        }

    //Get search results index using AJAX
    var http = false;
    var reqstring = "action=search";
    reqstring = reqstring + "&searchtext=" + searchtext;
    reqstring = reqstring + "&projectname=" + GetProjectName();
    //Search Filter
    if (document.getElementById("lstSearchFilter") != null) {
        reqstring = reqstring + "&searchfilter=" + document.getElementById("lstSearchFilter").value
    }
    else if (filter != "" && filter != null) {
        reqstring = reqstring + "&searchfilter=" + filter
    }

    //Search Condition
    if (document.getElementById("lstSearchCondition") != null) {
        reqstring = reqstring + "&searchcondition=" + document.getElementById("lstSearchCondition").value
    }
    else if (condition != "" && filter != null) {
        reqstring = reqstring + "&searchcondition=" + condition
    }
    reqstring = reqstring + "&username=" + document.getElementById("txtactiveusername").value;
    reqstring = reqstring + "&password=" + document.getElementById("txtactivepassword").value;
    if (navigator.appName == "Microsoft Internet Explorer") { http = new ActiveXObject("Microsoft.XMLHTTP"); } else { http = new XMLHttpRequest(); }
    http.onreadystatechange = function() {
        if (http.readyState == 4) {
            if (http.status == 200) {
                //alert("tdcontents width = " + document.getElementById("tdcontents").offsetWidth);
                if (document.getElementById("tdcontents").offsetWidth == 0) {
                    //If the contents window is hidden then load search results into page window
                    document.getElementById("divpage").innerHTML = http.responseText;
                }
                else {
                    //If the contents window is visible then load search results into the contents window
                    document.getElementById("divsearchresults").innerHTML = http.responseText;
                }
                //hide the progress bar
                document.getElementById("divsearchresults").style.backgroundImage = "";
            }
            else {
                alert("Error: " + http.status + http.responseText);
            }
        }
    }
    http.open("POST", "../_engine/ajaxaction.aspx", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    http.send(reqstring);

}

function DisplayIndex() {
    //Show the index window with the loading animation
    //document.getElementById("spanindex").innerHTML = "<table style='width:100%;height:100%'><tr><td align='center'><img src='../_engine/images/loading.gif'><br><br>Loading Index...</td></tr></table>"
    document.getElementById("divsearchresults").style.backgroundImage = "url(../_engine/images/loading.gif)";
    document.getElementById("divsearchresults").style.backgroundRepeat = "no-repeat";
    document.getElementById("divsearchresults").style.backgroundPosition = "center center"
    //hide contents, properties and search windows
    document.getElementById("divcontents").style.display = "none";
    document.getElementById("divproperties").style.display = "none";
    //document.getElementById("TreeView1").style.height="100%";
    document.getElementById("divsearchresults").style.display = "none";
    document.getElementById("divsearchresults").innerHTML = "";
    //document.getElementById("TreeView1").style.display="none";
    //document.getElementById("spanproperties").style.display="none";
    //document.getElementById("TreeView1").style.height="100%";
    //document.getElementById("spansearchresults").style.display="none";
    //document.getElementById("spansearchresults").innerHTML = "";
    //show the index window
    document.getElementById("divindex").style.display = "";
    //Set the height of the search results window so that the scrollbars will work
    document.getElementById("divindex").style.height = document.getElementById("divcontents").style.height;
    //Change the contents label (if the control exists)
    if (document.getElementById("tdcontentslabel") != null) {
        document.getElementById("tdcontentslabel").style.display = "none";
        document.getElementById("tdindexlabel").style.display = "";
        document.getElementById("tdsearchresultslabel").style.display = "none";
    }
    //hide the contents controls
    if (document.getElementById("tdcontentscontrols") != null) {
        document.getElementById("tdcontentscontrols").style.display = "none";
    }
    //Show the close icon
    if (document.getElementById("tdCloseContentsWindow") != null) {
        document.getElementById("tdCloseContentsWindow").style.display = "";
    }

    //    //If the contents window is hidden then show it now
    //    if (document.getElementById("td_contents_hidden") != null)
    //        {
    //   		document.getElementById("td_contents_hidden").style.display="";
    // 	    document.getElementById("td_main_visible").style.display="none";
    //   	    window_resize();
    //        }


    //Get the index using AJAX
    var http = false;
    var reqstring = "action=index";
    reqstring = reqstring + "&projectname=" + GetProjectName();
    reqstring = reqstring + "&username=" + document.getElementById("txtactiveusername").value;
    reqstring = reqstring + "&password=" + document.getElementById("txtactivepassword").value;
    if (navigator.appName == "Microsoft Internet Explorer") { http = new ActiveXObject("Microsoft.XMLHTTP"); } else { http = new XMLHttpRequest(); }
    http.onreadystatechange = function() {
        if (http.readyState == 4) {
            if (http.status == 200) {
                //show the index content
                document.getElementById("divindex").innerHTML = http.responseText;
                //hide the progress bar
                document.getElementById("divindex").style.backgroundImage = "";
            }
            else {
                alert("Error: " + http.status + http.responseText);
            }
        }
    }
    http.open("POST", "../_engine/ajaxaction.aspx", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send(reqstring);


}

function SearchKeyPress(searchtext, e) {
    var key;
    if (window.event) {
        key = window.event.keyCode;     //IE
    }
    else {
        key = e.which;     //firefox
    }

    if (key == 13) {
        DisplaySearch(searchtext)
        return false;
    }
    else {
        return true;
    }
}

function DisplayContents() {
    //hide the index window
    document.getElementById("divindex").innerHTML = "";
    document.getElementById("divindex").style.display = "none";
    //hide the search window
    document.getElementById("divsearchresults").innerHTML = "";
    document.getElementById("divsearchresults").style.display = "none";
    //Change the contents label (if the control exists)
    if (document.getElementById("tdcontentslabel") != null) {
        document.getElementById("tdcontentslabel").style.display = "";
        document.getElementById("tdindexlabel").style.display = "none";
        document.getElementById("tdsearchresultslabel").style.display = "none";
        document.getElementById("tdCloseContentsWindow").style.display = "none";
    }
    //show the contents window
    //document.getElementById("TreeView1").style.display="";
    document.getElementById("divcontents").style.display = "";
    if (document.getElementById("tdcontentscontrols") != null) {
        //alert("hello");
        document.getElementById("tdcontentscontrols").style.display = "";
        document.getElementById("tdCloseContentsWindow").style.display = "table-cell";
    }
}

function ShowTools(projectname, formname, skin) {
    //    //test--------
    //    alert("enable toolbar")
    //    var editor = $find("editor1");
    //    editor.set_mode(2);
    //    editor.set_mode(1);
    //    return;
    //    //------------


    if (formname == "skinlist") {
        var formurl = "../_engine/tools_skins.aspx?action=showskincollection&projectname=" + projectname
    }
    else if (formname == "skineditor") {
        var formurl = "editor.aspx?calledfrom=project&skin=" + skin;
    }
    else {
        var formurl = "../_engine/tools.aspx?projectname=" + projectname
    }
    //open the specified page
    openNewWindow(formurl, 770, 570)
}

function ShowCommentDialog(sUserName) {
    var projectname = GetProjectName();
    //get the pageid
    var node = window.TreeView1.SelectedNode;
    if (node != null) {
        var pageid = node.get_id();
    }

    var formurl = "../_engine/comment.aspx?projectname=" + projectname + "&pageid=" + pageid
    //Determine if the page is in a frame or not

    //Determine if this is an iphone browser
    var agent = navigator.userAgent.toLowerCase();
    if (agent.indexOf('iphone') != -1) {
        //open a Small comment window
        openNewWindow(formurl, 230, 120)
    }
    else {
        //open a large comment window
        openNewWindow(formurl, 500, 250)
    }


}


//function ShowTools(projectname,formname,skin)
//    {
//    //alert("form name = "+formname);
//    var formurl="";
//    //Determine which tools form will be displayed
//    if (formname == "skineditor")
//        {
//        formurl = "editor.aspx?calledfrom=project&skin="+skin;
//        document.getElementById("tblDialogWindow").style.width="100%"
//        document.getElementById("tblDialogWindow").style.height="100%"
//        //Show the expand icon
//        document.getElementById("imgexpandform").style.display = "none";
//        document.getElementById("imgretractform").style.display = "";
//        }
//    else
//        {
//        formurl = "../_engine/tools.aspx?projectname="+projectname
//        document.getElementById("tblDialogWindow").style.width="700px"
//        document.getElementById("tblDialogWindow").style.height="540px"
//        //Show the expand icon
//        document.getElementById("imgexpandform").style.display = "";
//        document.getElementById("imgretractform").style.display = "none";
//        }
//        
//    //window.open("tools.aspx", "frame_page")
//    document.getElementById("tddialog").innerHTML = "<iframe id='frame_tools' src='" + formurl + "' style='width:100%;height:100%' frameborder=0></iframe>"
//    document.getElementById("tbldialog").style.display = ""
//    document.getElementById("divtransparency").style.display = ""
//    document.getElementById("spanheading").innerHTML = "Tools"
//    document.getElementById("imgcloseform").style.display = ""

//    }


function ShowPublish(projectname) {
    var formurl = "";
    formurl = "../_engine/publish.aspx?projectname=" + projectname
    openNewWindow(formurl)
}

//function ShowPublish(projectname)
//    {
//    document.getElementById("tddialog").innerHTML = "<iframe id='frame_tools' src='../_engine/publish.aspx?projectname="+projectname+"' style='width:100%;height:100%' frameborder=0></iframe>"
//    document.getElementById("tblDialogWindow").style.width="600px"
//    document.getElementById("tblDialogWindow").style.height="475px"
//    document.getElementById("spanheading").innerHTML = "Publish"
//    document.getElementById("imgcloseform").style.display = ""
//    document.getElementById("tbldialog").style.display = ""
//    document.getElementById("divtransparency").style.display = ""
//    }

function wopen(url, name, w, h) {
    // Fudge factors for window decoration space.
    // In my tests these work well on all platforms & browsers.
    w += 32;
    h += 96;
    wleft = (screen.width - w) / 2;
    wtop = (screen.height - h) / 2;
    // IE5 and other old browsers might allow a window that is
    // partially offscreen or wider than the screen. Fix that.
    // (Newer browsers fix this for us, but let's be thorough.)
    if (wleft < 0) {
        w = screen.width;
        wleft = 0;
    }
    if (wtop < 0) {
        h = screen.height;
        wtop = 0;
    }
    var win = window.open(url,
    name,
    'width=' + w + ', height=' + h + ', ' +
    'left=' + wleft + ', top=' + wtop + ', ' +
    'location=no, menubar=no, ' +
    'status=no, toolbar=no, scrollbars=yes, resizable=yes');
    // Just in case width and height are ignored
    win.resizeTo(w, h);
    // Just in case left and top are ignored
    win.moveTo(wleft, wtop);
    win.focus();
}


function Timer() {
    ReportActivePage();
    //Call this function every 30 seconds
    timerID = setTimeout("Timer()", 30000);
}



function ReportActivePage() {
    var reqstring = "";
    //If the contents or a page is being edited, report it to the server to prevent other authors from being able to edit it.
    //determine if contents is being edited
    if (document.getElementById("tdcontentscontrols") != null) {
        reqstring = reqstring + "&activecontents=true";
    }

    //determine if page is being edited
    //if (document.getElementById("txteditid").value != "" && document.getElementById("diveditor").style.display == "")
    if (document.getElementById("txteditid").value != "") {
        //alert("activepageid=" + document.getElementById("txteditid").value);
        reqstring = reqstring + "&activepageid=" + document.getElementById("txteditid").value;
    }

    if (reqstring == "") {
        //neither the contents or page are being edited, just exit
        return;
    }


    reqstring = "action=reportactivepage" + reqstring;
    reqstring = reqstring + "&projectname=" + GetProjectName();
    reqstring = reqstring + "&username=" + document.getElementById("txtactiveusername").value;
    reqstring = reqstring + "&password=" + document.getElementById("txtactivepassword").value;

    var http = false;
    if (navigator.appName == "Microsoft Internet Explorer") { http = new ActiveXObject("Microsoft.XMLHTTP"); } else { http = new XMLHttpRequest(); }

    //This function allows us to trap any errors
    http.onreadystatechange = function() { ReportAjaxError(http); };
    http.open("POST", "../_engine/AjaxAction.aspx", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send(reqstring);
}



function changeskin(skin) {
    var projectname = GetProjectName();

    //determine if the current page needs to be saved..
    if (NeedToSave() == true) {
        Save(false);
        return;
    }

    //if [Edit skin] was selected then load the skin editor form
    var sSelectedIndex = document.getElementById("LstSkins").options.selectedIndex
    var sSelectedValue = document.getElementById("LstSkins").options[sSelectedIndex].value;
    if (sSelectedValue.toLowerCase() == "[edit skin]") {
        //---- [EDIT SKIN] selected ---
        var sSkinParm = "?skin=" + skin;
        var sURL = "editor.aspx" + sSkinParm;
        //window.open(sURL, "_blank");
        //Show the tools form with the skin editor displayed.
        ShowTools(projectname, "skineditor", skin);
        //Set the selected item back to the skin
        document.getElementById("LstSkins").value = skin;
    }

    else if (sSelectedValue.toLowerCase() == "more skins...") {
        //---- 'More Skins...' selected ---
        ShowTools(projectname, "skinlist", skin);
        //Set the selected item back to the skin
        document.getElementById("LstSkins").value = skin;
    }

    else {
        //---- Skin Selected ----
        //call AjaxAction.aspx to set the session variable via AJAX
        var http = false;
        var reqstring = "action=changeskin";
        reqstring = reqstring + "&projectname=" + projectname;
        reqstring = reqstring + "&username=" + document.getElementById("txtactiveusername").value;
        reqstring = reqstring + "&password=" + document.getElementById("txtactivepassword").value;
        reqstring = reqstring + "&skin=" + sSelectedValue;
        if (navigator.appName == "Microsoft Internet Explorer") { http = new ActiveXObject("Microsoft.XMLHTTP"); } else { http = new XMLHttpRequest(); }
        http.onreadystatechange = function() {
            if (http.readyState == 4) {
                if (http.status == 200) {
                    //after the session variable has been set, reload the page. 
                    //Note: the page is reloaded, not submitted so that the page is not added to history in Firefox2 and IE7+
                    window.location.href = "default.aspx"
                }
                else {
                    alert("Error: " + http.status + http.responseText);
                }
            }
        }
        http.open("POST", "../_engine/AjaxAction.aspx", true);
        http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        http.send(reqstring);

    }
}



function UpdateSaveColor() {
    //if the save button is loaded then change the color
    if (document.getElementById('imgsave') != null) {
        if (document.getElementById('txtcontentschanged').value == "true" || document.getElementById('txtpagechanged').value == "true") {
            document.getElementById('imgsave').src = '../_engine/images/save_red.gif';
        }
        else {
            document.getElementById('imgsave').src = '../_engine/images/save.gif';
        }
    }
}





function CloseDialog() {
    document.getElementById("tddialog").innerHTML = "";
    document.getElementById("tbldialog").style.display = "none";
    document.getElementById("divtransparency").style.display = "none";
    //    //Hide the expand and retract icons
    //    document.getElementById("imgexpandform").style.display = "none";
    //    document.getElementById("imgretractform").style.display = "none";
    //    //Ensure that the close button is visible
    //    document.getElementById("imgcloseform").style.display = "";
    //    //if frame_page exists then make it visible
    //    if (document.getElementById("frame_page") != null)
    //        {
    //        document.getElementById("frame_page").style.display="";
    //        }
}

//function ExpandDialog()
//    {
//    document.getElementById("tblDialogWindow").style.width = "100%";
//    document.getElementById("tblDialogWindow").style.height = "100%";
//    document.getElementById("imgexpandform").style.display = "none";
//    document.getElementById("imgretractform").style.display = "";
//    }

//function RetractDialog()
//    {
//    document.getElementById("tblDialogWindow").style.width = "700px";
//    document.getElementById("tblDialogWindow").style.height = "540px";
//    document.getElementById("imgexpandform").style.display = "";
//    document.getElementById("imgretractform").style.display = "none";
//    }


function CloseLogin() {
    document.getElementById("txtusername").value = "";
    document.getElementById("txtpassword").value = "";
    document.getElementById("tblLogin").style.display = "none";
    //document.getElementById("txtloginaction").value = "";
    document.getElementById("divtransparency").style.display = "none";
}

function ClickContentsTab(tabname) {
    if (tabname == "contents") {
        document.getElementById("tab_contents_up").style.display = "none";
        document.getElementById("tab_contents_down").style.display = "";
        document.getElementById("tab_index_up").style.display = "";
        document.getElementById("tab_index_down").style.display = "none";
        document.getElementById("tab_search_up").style.display = "";
        document.getElementById("tab_search_down").style.display = "none";
    }

    else if (tabname == "index") {
        document.getElementById("tab_contents_up").style.display = "";
        document.getElementById("tab_contents_down").style.display = "none";
        document.getElementById("tab_index_up").style.display = "none";
        document.getElementById("tab_index_down").style.display = "";
        document.getElementById("tab_search_up").style.display = "";
        document.getElementById("tab_search_down").style.display = "none";
    }

    else if (tabname == "search") {
        document.getElementById("tab_contents_up").style.display = "";
        document.getElementById("tab_contents_down").style.display = "none";
        document.getElementById("tab_index_up").style.display = "";
        document.getElementById("tab_index_down").style.display = "none";
        document.getElementById("tab_search_up").style.display = "none";
        document.getElementById("tab_search_down").style.display = "";
    }
}

function CloseContentsWindow() {
    if (document.getElementById("divindex").style.display == "") {
        //-- CLOSE INDEX --
        document.getElementById("divindex").innerHTML = "";
        document.getElementById("divindex").style.display = "none";
        document.getElementById("divcontents").style.display = "";
        //document.getElementById("TreeView1").style.display="";
        if (document.getElementById("tdcontentscontrols") != null) {
            document.getElementById("tdcontentscontrols").style.display = "";
        }
        else {
            document.getElementById("tdeditcontents").style.display = "";
            document.getElementById("tdCloseContentsWindow").style.display = "none";
        }

        if (document.getElementById("tdcontentslabel") != null) {
            document.getElementById("tdcontentslabel").style.display = "";
            document.getElementById("tdindexlabel").style.display = "none";
            document.getElementById("tdsearchresultslabel").style.display = "none";
        }
    }

    else if (document.getElementById("divsearchresults").style.display == "") {
        //-- CLOSE SEARCH --
        document.getElementById("divsearchresults").innerHTML = "";
        document.getElementById("divsearchresults").style.display = "none";
        //document.getElementById("TreeView1").style.display="";
        document.getElementById("divcontents").style.display = "";
        if (document.getElementById("tdcontentscontrols") != null) {
            document.getElementById("tdcontentscontrols").style.display = "";
        }
        else {
            document.getElementById("tdeditcontents").style.display = "";
            document.getElementById("tdCloseContentsWindow").style.display = "none";
        }

        if (document.getElementById("tdcontentslabel") != null) {
            document.getElementById("tdcontentslabel").style.display = "";
            document.getElementById("tdindexlabel").style.display = "none";
            document.getElementById("tdsearchresultslabel").style.display = "none";
        }
    }

    //else if (document.getElementById("TreeView1").style.display == "")
    else if (document.getElementById("divcontents").style.display == "") {
        //-- EXIT EDIT MODE -- if the contents window is displayed then set the session variable _contentsmode=live and reload the page.
        //determine if a page is being edited.
        if (NeedToSave() == true) {
            Save(true);
        }


        //determine if contents is being edited.
        if (document.getElementById("txtcontentschanged").value == "true") {
            if (confirm("The contents has been modified. Do you wish to save changes?") == true) {
                SaveContents();
                return;
            }
        }


        //get the projectname
        var projectname = GetProjectName();
        //call SetSesisonVar.aspx to set the session variable via AJAX
        var http = false;
        var reqstring = "action=contentslive";
        reqstring = reqstring + "&projectname=" + projectname;
        reqstring = reqstring + "&username=" + document.getElementById("txtactiveusername").value;
        reqstring = reqstring + "&password=" + document.getElementById("txtactivepassword").value;

        if (navigator.appName == "Microsoft Internet Explorer") { http = new ActiveXObject("Microsoft.XMLHTTP"); } else { http = new XMLHttpRequest(); }
        http.onreadystatechange = function() {
            if (http.readyState == 4) {
                if (http.status == 200) {
                    //after the session variable has been set, reload the page. 
                    //Note: the page is reloaded, not submitted so that the page is not added to history in Firefox2 and IE7+
                    window.location.href = "default.aspx"
                }
                else {
                    alert("Error: " + http.status + http.responseText);
                }
            }
        }
        http.open("POST", "../_engine/AjaxAction.aspx", true);
        http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        http.send(reqstring);
    }

    //Call the window_resize() function so that the treeview scrollbars are displayed correctly.
    window_resize();
}

function loadform(formname) {
    window.location.href = formname + "?projectname=" + GetProjectName();
}



function showoptions() {
    //if the options form is already displayed then hide it
    if (document.getElementById("tbloptions").style.display == "") {
        document.getElementById("tbloptions").style.display = "none";
    }
    else {
        document.getElementById("tbloptions").style.display = "";
        document.getElementById("tbloptions").focus();
        //position the options list below the options button
        document.getElementById("tbloptions").style.top = document.getElementById("imgoptions").offsetTop + document.getElementById("imgoptions").offsetHeight;
        document.getElementById("tbloptions").style.left = document.getElementById("imgoptions").offsetLeft + document.getElementById("imgoptions").offsetWidth - 198;
    }
}

function browse() {
    //Determine if the contents or page is being edited
    if (document.getElementById("txtpagechanged").value == "true" && document.getElementById("txteditid").value != "") {
        alert("This function is not available while the contents or page is being edited.")
    }
    else {
        //if the contents is already displayed, hide it
        //alert("display = " + document.getElementById("tdcontentswrapper").style.display)
        if (document.getElementById("tdcontentswrapper").style.display == "") {
            document.getElementById("tdcontentswrapper").style.display = "inline";
            document.getElementById("tdcontentswrapper").style.width = "300px";
        }
        else {
            document.getElementById("tdcontentswrapper").style.display = "";
            document.getElementById("tdcontentswrapper").style.width = "";
        }
        //document.getElementById("td_contents_hidden").style.display="";
        //document.getElementById("td_main_visible").style.display="none";
        //window_resize()
        //DisplayContents();
    }
}


function showpageurl() {
    //determine if this is an internal or external page
    if (document.getElementById("txtexternalurl").value != "") {
        //external page
        showpageurl_external()
    }
    else {
        //internal page
        showpageurl_internal()
    }
    return;
}

function showpageurl_internal() {
    //if there is a frame named "frame_page" then get the URL from there, otherwise get the url for this page.
    if (document.getElementById("frame_page") == null) {
        //FLAT - get URL from this page
        var sPageURL = String(location.href);
        //Remove &dummy=1234
        if (sPageURL.toLowerCase().indexOf("&dummy=") != -1) {
            sPageURL = sPageURL.substr(0, sPageURL.lastIndexOf("&dummy="));
        }

        var sPageName = sPageURL.substr(sPageURL.lastIndexOf("/") + 1)
        var sRelativeURL = "help/" + sPageName;
        openURLWindow(sPageURL, "true")
    }
    else {
        //FRAMES - Get URL from frame_page frame
        var sPageURL = String(window.frame_page.location.href);
        //Remove &nocache=1234
        if (sPageURL.toLowerCase().indexOf("&nocache=") != -1) {
            sPageURL = sPageURL.substr(0, sPageURL.lastIndexOf("&nocache="));
        }
        //Remove &SearchHighlight=abc
        if (sPageURL.toLowerCase().indexOf("&SearchHighlight==") != -1) {
            sPageURL = sPageURL.substr(0, sPageURL.lastIndexOf("&SearchHighlight=="));
        }
        var sPageID = sPageURL.substr(sPageURL.lastIndexOf("?pageid=") + 8)
        //Remove everything from page.aspx?...
        if (sPageURL.toLowerCase().indexOf("page.aspx?") != -1) {
            sPageURL = sPageURL.substr(0, sPageURL.lastIndexOf("page.aspx?"))
        }
        sPageURL = sPageURL + "default.aspx?pageid=" + sPageID
        var sRelativeURL = "help/default.aspx?pageid=" + sPageID;
        openURLWindow(sPageID, "false")
    }

    //Show the URL dialog
    //        document.getElementById("tddialog").innerHTML = "<table style='width:100%;height:100%;background-color:#DDDDDD' cellpadding='9'><tr><td>Page URL:<br><input style='width:100%;padding:3px;height:24px' value='" + sPageURL + "'><br><br>Relative URL: <font color=#737372>(assuming help system is in a sub folder named 'help')</font><br><input style='width:100%;padding:3px;height:24px' value='" + sRelativeURL + "'></td></tr></table>"
    //        document.getElementById("tblDialogWindow").style.width="575px"
    //        document.getElementById("spanheading").innerHTML = "Page URL"
    //        document.getElementById("tblDialogWindow").style.height="208px"
    //        document.getElementById("tbldialog").style.display = ""
    //        document.getElementById("divtransparency").style.display = ""


}

function showpageurl_external() {
    var sPageURL = document.getElementById("txtexternalurl").value;
    openURLWindow(sPageURL, "true")
    //    //If this is a PDF then hide the iframe. otherwise the link dialog will not be visible
    //    if (sPageURL.toLowerCase().substr(sPageURL.length-4, 4) == ".pdf")
    //        {
    //        document.getElementById("frame_page").style.display="none";
    //        }

    //    document.getElementById("tddialog").innerHTML = "<table style='width:100%;height:100%;background-color:#DDDDDD' cellpadding='9'><tr><td>Page URL:<br><input style='width:100%;padding:3px;height:24px' value='" + sPageURL + "'><br><br></td></tr></table>"
    //    document.getElementById("tblDialogWindow").style.width="500px"
    //    document.getElementById("spanheading").innerHTML = "Page URL"
    //    document.getElementById("tblDialogWindow").style.height="150px"
    //    document.getElementById("tbldialog").style.display = ""
    //    document.getElementById("divtransparency").style.display = ""
}


function addtofav() {
    //get the project name
    var projectname = location.href
    projectname = projectname.substring(0, projectname.lastIndexOf("/"))
    //projectname = projectname.substring(0, projectname.lastIndexOf("default.aspx") - 1)
    projectname = projectname.substring(projectname.lastIndexOf("/") + 1)
    //get the page name and page id
    var node = window.TreeView1.SelectedNode;
    if (node != null) {
        var pagename = " - " + node.Text;
        var pageid = node.get_id();
    }

    //get the project URL (without parameters)
    var projecturl = location.href.substring(0, location.href.lastIndexOf("/") + 1) + "default.aspx";
    projecturl = projecturl + "?pageid=" + pageid;
    var sTitle = projectname + pagename;
    window.external.AddFavorite(projecturl, sTitle);
}

function GetProjectName() {
    var projectname = window.location.href;
    var ipos = projectname.lastIndexOf("/");
    projectname = projectname.substring(0, ipos);
    ipos = projectname.lastIndexOf("/");
    projectname = projectname.substring(ipos + 1);
    //convert any space characters
    projectname = projectname.replace(/%20/g, " ");
    return projectname
}




//------------------------------------------------------------------------------------------------------- LOGIN FUNCTIONS ---------------------------
function Login(AdminHasPassword) {
    //alert("login");
    //If the username is not blank, validate the username and password
    var username = document.getElementById("txtusername").value
    var password = document.getElementById("txtpassword").value

    if (username == "" && AdminHasPassword == "false") {
        document.getElementById("txtusername").value = "Admin";
        document.getElementById("tdloginmessage").innerHTML = "<table style='width:100%' cellspacing=3 cellpadding=9><tr><td style='background-color:#DDDDDD;border-top:solid 1px #CCCCCC;'><img src='../_engine/images/warning_icon.png' align='left' hspace='8' vspace='4'>To switch to edit mode, login as 'Admin' with no password. This message will not be displayed after a password is assigned.</td></tr></table>"
    }


    if (username == "") {
        //if the username is blank then display the login form
        document.getElementById("tblLogin").style.display = "";
        document.getElementById("divtransparency").style.display = "";
        document.getElementById("txtusername").focus();
        return;
    }

    var http = false;
    //var reqstring = "txtaction=login&username="+username+"&password="+password;
    var projectname = GetProjectName();
    var reqstring = "action=login"
    reqstring = reqstring + "&projectname=" + projectname;
    reqstring = reqstring + "&username=" + username;
    reqstring = reqstring + "&password=" + password;

    if (navigator.appName == "Microsoft Internet Explorer") { http = new ActiveXObject("Microsoft.XMLHTTP"); } else { http = new XMLHttpRequest(); }
    http.onreadystatechange = function() {
        if (http.readyState == 4) {
            if (http.status == 200) {
                //if login was successful then unload the login form. otherwise redisplay it
                if (http.responseText.indexOf("_valid_username_") == -1) {
                    document.getElementById("tdloginmessage").innerHTML = "<table cellpadding=6><tr><td><img src='../_engine/images/error.gif' alt='error'/></td><td>The username or password is not valid.</td></tr></table>";
                    //If there was an error then make sure that the login prompt is visible.
                    document.getElementById("tblLogin").style.display = "";
                    document.getElementById("divtransparency").style.display = "";
                    document.getElementById("txtusername").focus();
                    //If the username is not valid then clear the txtactiveusername field
                    document.getElementById("txtactiveusername").value = "";
                }
                else {
                    //Note: the page is reloaded instead of postback so that the editor gets loaded.
                    window.location.href = "default.aspx"
                }
            }
            else {
                alert("Error: " + http.status + http.responseText);
            }
        }
    }
    //http.open("POST", "default.aspx", true);
    http.open("POST", "../_engine/AjaxAction.aspx", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send(reqstring);
}


function project_logout() {
    //determine if the contents or pages need to be saved
    if (document.getElementById("txtcontentschanged").value == "true" || document.getElementById("txtpagechanged").value == "true") {
        if (confirm("The contents or page requires saving. Do you wish to continue and lose changes?") == false) { return; }
    }

    //get the projectname
    var projectname = GetProjectName();
    //Get add page HTML from AddPage.aspx using AJAX
    var http = false;
    var reqstring = "action=logout";
    reqstring = reqstring + "&projectname=" + projectname;
    reqstring = reqstring + "&username=" + document.getElementById("txtactiveusername").value;
    reqstring = reqstring + "&password=" + document.getElementById("txtactivepassword").value;

    if (navigator.appName == "Microsoft Internet Explorer") { http = new ActiveXObject("Microsoft.XMLHTTP"); } else { http = new XMLHttpRequest(); }
    http.onreadystatechange = function() {
        if (http.readyState == 4) {
            if (http.status == 200) {
                //after the session variable has been set, reload the page. 
                //Note: the page is reloaded, not submitted so that the page is not added to history in Firefox2 and IE7+
                window.location.href = "default.aspx"
            }
            else {
                alert("Error: " + http.status + http.responseText);
            }
        }
    }
    http.open("POST", "../_engine/AjaxAction.aspx", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send(reqstring);
}

function LoginKeyPress(e) {
    var key;
    //if(window.event)
    if (e) {
        //key = window.event.keyCode;     //IE
        key = e.keyCode;     //IE
    }
    else {
        key = e.which;     //firefox
    }

    if (key == 13) {
        Login();
        return false;
    }
    else {
        return true;
    }
}


//-------------------------------------------------------------------------------------------- PAGE FUNCTIONS ------------------------
function loadpage(pageid, sfile) {
    //determine if a page is already being edited.
    if (NeedToSave() == true) {
        Save(false);
        return;
    }

    //Ensure that the editor window is hidden and the page window is visible
    if (document.getElementById("diveditor") != null) {
        document.getElementById("diveditor").style.display = "none";
    }
    //if (document.getElementById("imgedit")!=null) {document.getElementById("imgedit").style.display = ""}
    document.getElementById("divpage").style.display = "";

    //if the properites window is loaded then load properties
    if (document.getElementById("divproperties").style.display == "") {
        //if contents is in edit mode then display properties, otherwise make sure that properties are hidden.
        if (document.getElementById("imgsave") != null) {
            DisplayProperties("Page");
        }
        else {
            CloseProperties();
        }
    }
    //if the [page name] variable was included in the skin, insert the page name now.
    if (document.getElementById("VarPageName") != null) {
        var node = window.TreeView1.FindNodeById(pageid);
        if (node != null) {
            document.getElementById("VarPageName").innerHTML = node.Text;
        }
    }
    document.getElementById("txtexternalurl").value = "";
    //Load Internal or external page
    if (sfile != null && sfile != "undefined") {
        //If the page frame is hidden then show it now. Only do this in live mode. because the contents will always be visible in edit mode.
        if (document.getElementById("td_contents_hidden") != null && document.getElementById("tdcontentscontrols") == null) {
            document.getElementById("td_contents_hidden").style.display = "none";
            if (document.getElementById("td_main_visible") != null) { document.getElementById("td_main_visible").style.display = "" }
            window_resize();
        }

        //-- EXTERNAL --
        //hide the 'edit page' icon
        if (document.getElementById("imgedit") != null) { document.getElementById("imgedit").style.display = "none"; }
        //load the URL into the page frame
        //replace any instances of [project name]
        sfile = sfile.toLowerCase().replace("[project name]", GetProjectName());
        //if the frame_page tag does not exist then the format is FLAT. load the page into this frame (not frame_page)
        if (document.getElementById("frame_page") == null) {
            //-- FLAT --
            window.location.href = sfile
        }
        else {
            //-- FRAMES --
            document.getElementById("frame_page").src = sfile;
            document.getElementById("txtexternalurl").value = sfile;
        }
    }
    else {
        //get search text
        var searchtext = getSearchText()
        var searchparm = "";
        if (searchtext != "" && searchtext != null) {
            if (document.getElementById("lstSearchCondition") != null) { var condition = document.getElementById("lstSearchCondition").options[document.getElementById("lstSearchCondition").selectedIndex].value }
            //searchparm = "&SearchHighlight=" + searchtext;
            searchparm = "&SearchHighlight=" + searchtext + "&condition=" + condition;
        }
        var d = new Date()
        var nocache = "&nocache=" + d.getHours() + d.getMinutes() + d.getSeconds();
        //show the 'edit page' icon
        if (document.getElementById("imgedit") != null) { document.getElementById("imgedit").style.display = ""; }
        //Load the page into the page frame
        //if the frame_page tag does not exist then the format is FLAT. load the page into this frame (not frame_page)
        if (document.getElementById("frame_page") == null) {
            //-- FLAT --
            window.location.href = "default.aspx?pageid=" + pageid + searchparm;
        }
        else {
            //-- FRAMES --
            //load the page into the page frame.
            document.getElementById("frame_page").src = "page.aspx?pageid=" + pageid + nocache + searchparm;
            //If the page frame is hidden then show it now. Only do this in live mode. because the contents will always be visible in edit mode.
            if (document.getElementById("td_contents_hidden") != null && document.getElementById("tdcontentscontrols") == null) {
                document.getElementById("td_contents_hidden").style.display = "none";
                if (document.getElementById("td_main_visible") != null) { document.getElementById("td_main_visible").style.display = "" }
                window_resize();
            }
        }
    }
}

function HighlightPage(pageid) {
    try {
        window.TreeView1.beginUpdate();
        var node = window.TreeView1.FindNodeById(pageid);
        if (node != null) {
            window.TreeView1.SelectedNode = node;
            node.expandAncestors()
        }
        TreeView1.endUpdate();
        //also ensure that the 'edit page' button is visible and the 'save' button is not red. (in case the user clicked the back or forward buttons)
        //alert("imgedit = " + document.getElementById("imgedit"));        
        if (document.getElementById("imgedit") != null) {
            if (document.getElementById("imgedit").style.display == "none") {
                document.getElementById("imgedit").style.display = "";
                document.getElementById("txteditid").value = "";
                document.getElementById("txtpagechanged").value = "";
                //document.getElementById("diveditor").style.display = "none";
                UpdateSaveColor();
            }
        }
    }
    catch (err) {
        alert("error = " + err)
        //alert("window.TreeView1 = " + window.TreeView1)
    }

}

function NeedToSave() {
    if (document.getElementById("txtpagechanged").value == "true" && document.getElementById("txteditid").value != "") {
        var editid = document.getElementById("txteditid").value;
        var node = window.TreeView1.FindNodeById(editid);
        if (node != null) {
            var editname = node.Text;
            if (confirm("The page '" + editname + "' has been modified. Do you wish to save changes?") == true) {
                //Save(true);
                return true;
            }
            else {
                //if the user chose not to save then clear the edit id
                document.getElementById("txteditid").value = ""
                document.getElementById("txtpagechanged").value = ""
                UpdateSaveColor()
            }
        }
    }
}


function pagelink(pageid) {
    //this will select the page and cause loadpage to fire.
    TreeView1.selectNodeById(pageid);
}



function EditPage() {
    //Get the pageID from the currently selected tree node
    var node = window.TreeView1.SelectedNode;
    if (node == null) {
        alert("Error: page not selected in contents.")
        return;
    }
    else {
        sPageID = node.get_id();
    }

    //Determine if this is a new page.
    if (sPageID.toLowerCase().substring(0, 9) == "template_") {
        alert("The contents must be saved before this page can be edited.")
        return;
    }

    //	//Determine if the page is already being edited.
    //	if (document.getElementById("diveditor").style.display == "")
    //	    {
    //	    alert("This page is already in edit mode.")
    //	    return;
    //	    }

    //determine if the page is locked
    var reqstring = "action=lockstatus";
    reqstring = reqstring + "&pageid=" + sPageID;
    reqstring = reqstring + "&projectname=" + GetProjectName();
    var http = false;
    if (navigator.appName == "Microsoft Internet Explorer") { http = new ActiveXObject("Microsoft.XMLHTTP"); } else { http = new XMLHttpRequest(); }
    http.onreadystatechange = function() {
        if (http.readyState == 4) {
            if (http.status != 200) {
                //if there was an error, display it in a popup window
                alert("Error: " + http.status + http.responseText);
            }
            else {
                //if the page is locked by another user, inform the user
                if (http.responseText.indexOf("<lock_message>") != -1) {
                    var msg = http.responseText
                    msg = msg.substring(msg.indexOf("<lock_message>") + 14, msg.indexOf("</lock_message>"))
                    alert(msg);
                }
                else {
                    //Load the current page into the editor
                    LoadPage_editor(sPageID);

                }
            }
        }
    }
    http.open("POST", "../_engine/AjaxAction.aspx", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send(reqstring);
}

//function LoadPage_editor(pageid)
//    {
//    
//    var d = new Date()
//    var ParmNoCache = "&nocache=" + d.getHours()+d.getMinutes()+d.getSeconds();
//    document.getElementById("frame_page").src="editor.aspx?pageid="+pageid+ParmNoCache;

//    //hide the 'edit page' button
//    parent.document.getElementById("imgedit").style.display="none";
//    
//    
//    
////alert("step1");
////    //load the page into the editor
////   //var editor = $find("editor1"); //get a reference to RadEditor client object
////   //editor.set_html("Hello World"); //reset the content

////alert("step2");            
//    //set the txteditid field for future reference
//    document.getElementById("txteditid").value = pageid;
////alert("step3");            
////    //after loading the page, display the editor window
////    document.getElementById("diveditor").style.display = "";
////alert("step4");            
////    //document.getElementById("NewEditorHTML").value = window.$find("editor1").GetHtml();
////    //ensure that the editor window is set to 100%. This is done to workaround a bug in Firefox.
////alert("step5");            
////    window_resize();
////alert("step6");            
////    //Note: We don't need to call ReportActivePage here becase this function is called from the server when the page content was retreived via ajax
////    //If the page contains a 'dataset detail' panel then automatically display those properties.
//////    if (GetRadEditor("editor1").ContentWindow.document.getElementById("tbldataset_detail") != null)
//////        {
//////        PageItemClicked();
//////        }
////alert("step7");            
//    }



function LoadPage_editor(pageid) {
    //-- LOAD PAGE VIA AJAX --
    var d = new Date()
    var ParmNoCache = "?nocache=" + d.getHours() + d.getMinutes() + d.getSeconds();
    var ParmPageID = "&pageid=" + pageid;
    var ParmFormat = "&pageformat=edit";
    //Get page HTML using AJAX
    var http = false;
    if (navigator.appName == "Microsoft Internet Explorer") { http = new ActiveXObject("Microsoft.XMLHTTP"); } else { http = new XMLHttpRequest(); }
    http.open("GET", "page.aspx" + ParmNoCache + ParmPageID + ParmFormat, true);
    http.onreadystatechange = function() {
        if (http.readyState == 4) {
            if (http.status != 200) {
                //if there was an error, display it in a popup window
                alert("Error: " + http.status + http.responseText);
            }
            else {
                //alert("html = " + http.responseText)
                //document.getElementById("diveditor").style.display = "";
                //return false;

                //Clear the editor undo and redo history

                //load the page into the editor
                var editor = $find("editor1");
                //Clear the undo stack before loading the HTML
                editor.get_commandsManager()._clearCommandsToRedo();
                var manager = editor.get_commandsManager();
                var length = manager.getCommandsToUndo().length;
                for (var i = 0; i < length; i++) {
                    manager.removeCommandAt(0);
                }
                //alert("http.responseText = " + http.responseText);
                var sHTML = http.responseText;
                //Ensure that we are in design view (not HTML view)
                editor.set_mode(1);
                //sHTML = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">" + sHTML
                //sHTML = "<html><body>" + sHTML + "</body></html>"
                //alert("html = " + sHTML)
                //set content using get_contentArea() so that the content is not added to the undo stack
                editor.get_contentArea().innerHTML = sHTML;
                editor.set_html(sHTML);
                //editor.set_html("1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12<br/>13<br/>14<br/>15<br/>16<br/>17<br/>");
                //editor.set_html(http.responseText);
                editor.set_initialContent();
                //setTimeout(function(){editor.setFocus();}, 0);      


                //editor.set_html("hello world");

                //set the txteditid field for future reference
                document.getElementById("txteditid").value = pageid;
                //after loading the page, display the editor window
                document.getElementById("diveditor").style.display = "";
                //hide the page window and the edit button
                document.getElementById("divpage").style.display = "none";
                document.getElementById("imgedit").style.display = "none";
                //ShowToolbar(editor,"minimal")
                editor.attachEventHandler("onkeydown", pagechanged);
                //editor.attachEventHandler("onmouseup", pagechanged);
                //editor.attachEventHandler("onclick", pagechanged);
                //Show the full or the minimal toolbar
                //alert("toolbar = " + readCookie("editor_toolbar"))
                if (document.getElementById("toolbar2").style.display == "" || readCookie("editor_toolbar") == "full") {
                    ShowToolbar(editor, "full")
                }
                else {
                    ShowToolbar(editor, "minimal")
                }
                //window_resize();

                document.getElementById("NewEditorHTML").value = editor.get_html(true);
                //ensure that the editor window is set to 100%. This is done to workaround a bug in Firefox.
                //window_resize();
                //Note: We don't need to call ReportActivePage here becase this function is called from the server when the page content was retreived via ajax
                //                //If the page contains a 'dataset detail' panel then automatically display those properties.
                //                if (GetRadEditor("editor1").ContentWindow.document.getElementById("tbldataset_detail") != null)
                //                    {
                //                    PageItemClicked();
                //                    }
            }
        }
    }
    http.send(null);
}

//function CloseEditor()
//    {
//    //Hide the editor window
//    document.getElementById("diveditor").style.display = "none";
//    //Show the page window and edit page button
//    document.getElementById("imgedit").style.display = "";
//    document.getElementById("divpage").style.display = "";
//    loadpage(TreeView1.SelectedNode.get_id())
//    }

function ImportPage() {
    if (document.getElementById("txtpagechanged").value == "true" && document.getElementById("txteditid").value != "") {
        alert("The page must be saved before using this function.");
        return;
    }

    if (document.getElementById("txtcontentschanged").value == "true") {
        alert("The contents must be saved before using this function.");
        return;
    }


    if (confirm("Import Pages?") == false) {
        return;
    }

    openMessageWindow("../_engine/DialogContent.aspx?type=import")
    //    document.getElementById("tddialog").innerHTML = "<table style='width:100%;height:100%;background-color:white;'><tr><td style='font-size:14pt' align='center'>Importing Pages...</td></tr><tr><td align='center' valign='top'><img src='../_engine/images/loading.gif'></td></tr></table>";
    //    document.getElementById("tblDialogWindow").style.width = "250px"
    //    document.getElementById("tblDialogWindow").style.height = "150px"
    //    document.getElementById("spanheading").innerHTML = ""
    //    document.getElementById("tbldialog").style.display = "";
    //    document.getElementById("divtransparency").style.display = "";
    //    document.getElementById("imgcloseform").style.display = "none";

    var projectname = GetProjectName();
    //Import pages found in the import folder using AJAX
    var http = false;
    var reqstring = "action=importpages";
    reqstring = reqstring + "&projectname=" + projectname;
    reqstring = reqstring + "&username=" + document.getElementById("txtactiveusername").value;
    reqstring = reqstring + "&password=" + document.getElementById("txtactivepassword").value;
    if (navigator.appName == "Microsoft Internet Explorer") { http = new ActiveXObject("Microsoft.XMLHTTP"); } else { http = new XMLHttpRequest(); }
    http.onreadystatechange = function() {
        if (http.readyState == 4) {
            if (http.status == 200) {
                window.location.href = "default.aspx"
            }
            else if (http.status == 500) {
                alert("Error 500. This error usually occurs if the html document is locked open by an application such as MS Word.")
            }
            else {
                alert("Error: " + http.status + http.responseText);
            }
        }
    }
    http.open("POST", "../_engine/AjaxAction.aspx", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send(reqstring);
}


function ShowAddForm() {
    //determine if a page is already being edited.
    if (NeedToSave() == true) {
        Save(true);
    }

    projectname = GetProjectName();
    openNewWindow("../_engine/addpage.aspx?projectname=" + projectname, 400, 268)
}


//function ShowAddForm()
//    {
//    //determine if a page is already being edited.
//    if (NeedToSave() == true)
//    {
//    Save(true);
//    } 

//    
//    projectname = GetProjectName();
//    
//    //Get add page HTML from AddPage.aspx using AJAX
//	var http = false;
//	var reqstring = "projectname="+projectname;
//    if(navigator.appName == "Microsoft Internet Explorer") {http = new ActiveXObject("Microsoft.XMLHTTP");} else {http = new XMLHttpRequest();} 
//    http.onreadystatechange=function() 
//        {
//        if(http.readyState == 4) 
//            {
//            if (http.status == 200) 
//                {
//                document.getElementById("spanheading").innerHTML = "Add Page";
//                document.getElementById("tblDialogWindow").style.width = "400px"
//                document.getElementById("tblDialogWindow").style.height = "160px"
//                document.getElementById("tddialog").innerHTML = http.responseText;
//                document.getElementById("tbldialog").style.display = "";
//                document.getElementById("imgcloseform").style.display = ""
//                document.getElementById("divtransparency").style.display = "";
//                document.getElementById("txtaddname").focus();
//                }
//            else 
//                {
//                alert("Error: "+http.status+http.responseText);
//                }
//            }
//        }
//    http.open("POST", "../_engine/addpage.aspx", true);
//    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//    http.send(reqstring);
//    }


function AddPage() {
    var oWnd = GetRadWindowManager().getWindowByName("RadWindow1");
    var doc = oWnd.get_contentFrame().contentWindow.document;

    //change the save button to red
    document.getElementById('txtcontentschanged').value = "true";
    //Note: a node should always be selected
    var node = window.TreeView1.SelectedNode;
    if (node != null) {
        //var nodename = document.getElementById("txtaddname").value
        var nodename = doc.getElementById("txtaddname").value;
        //Validate the node name
        sMsg = ValidateName(nodename, "page name")
        if (sMsg != "") {
            alert(sMsg);
            return;
        }

        //var template = document.getElementById("lstPageTemplates").options[document.getElementById("lstPageTemplates").selectedIndex].value;
        //var pageicon = document.getElementById("lstPageIcon").options[document.getElementById("lstPageIcon").selectedIndex].value;
        var template = doc.getElementById("lstPageTemplates").options[doc.getElementById("lstPageTemplates").selectedIndex].value;
        var pageicon = doc.getElementById("lstPageIcon").options[doc.getElementById("lstPageIcon").selectedIndex].value;

        //Set the focus to the page title textbox
        //doc.getElementById("txtaddname").focus();
        //doc.focus();

        //Assign a temporary id
        var sUniqueID = new Date().getTime()
        //if (document.getElementById("trMergeProject").style.display == "")
        if (doc.getElementById("trMergeProject").style.display == "") {
            //Merge Project
            var nodeid = "external~!~" + sUniqueID
            var sfile = "../_engine/mergeproject.htm"
        }
        //else if (document.getElementById("trExternalFile").style.display == "")
        else if (doc.getElementById("trExternalFile").style.display == "") {
            //External File
            //var sfile = document.getElementById("txtExternalFile").value;
            var sfile = doc.getElementById("txtExternalFile").value;
            var nodeid = "external~!~" + sUniqueID
        }
        //else if (document.getElementById("trWebsite").style.display == "")
        else if (doc.getElementById("trWebsite").style.display == "") {
            //Website
            //var sfile = document.getElementById("txtWebsite").value;
            var sfile = doc.getElementById("txtWebsite").value;
            var nodeid = "external~!~" + sUniqueID
        }
        else {
            //Normal Page Template
            var nodeid = template + "~!~" + sUniqueID
            var sCommand = 'loadpage("' + nodeid + '")'
        }

        //replace any space characters in sfile. If we don't do this, then the treeview will bomb on the server.
        if (sfile != null) {
            sfile = sfile.replace(/%20/g, ' ');
            //validate external file name
            sMsg = ValidateName(sfile, "external filename")
            if (sMsg != "") {
                alert(sMsg);
                return;
            }
        }

        //add below the selected node
        TreeView1.beginUpdate();
        var newNode = new ComponentArt.Web.UI.TreeViewNode();
        newNode.set_text(nodename);
        newNode.set_id(nodeid)
        //if a page icon was selected then apply it now
        if (pageicon.toLowerCase() != "[auto]") {
            newNode.set_imageUrl("images/pageicon_" + pageicon + ".gif");
            newNode.set_expandedImageUrl("images/pageicon_" + pageicon + ".gif");
        }
        //set ClientSideCommand
        newNode.set_clientSideCommand("loadpage('" + nodeid + "','" + sfile + "')");

        //If 'Approval Status' is defined, set the status attribute.
        var DefaultPageStatus = document.getElementById("Form1").getAttribute("DefaultPageStatus")
        //alert("DefaultPageStatus = " + DefaultPageStatus);
        if (DefaultPageStatus != "" && DefaultPageStatus != null) {
            newNode.set_cssClass("TreeNode_status_" + DefaultPageStatus);
            document.getElementById('txtcontentschanged').value = "true";
        }


        //insert the page as a sibling or a child
        //if (document.getElementById("chkAddasChild").checked == true)
        if (doc.getElementById("chkAddasChild").checked == true) {
            node.get_nodes().insert(newNode, node.get_index() + 1);
        }
        else {
            node.get_parentNode().get_nodes().insert(newNode, node.get_index() + 1);
        }
        TreeView1.SelectedNode = newNode;
        TreeView1.endUpdate();
        //hide the dialog
        oWnd.close();
        //document.getElementById("tddialog").innerHTML = "";
        //document.getElementById("tbldialog").style.display = "none";
        //document.getElementById("divtransparency").style.display = "none";
        //SEt the changed flag
        document.getElementById('txtcontentschanged').value = "true";
        UpdateSaveColor()

        //Display the page
        loadpage(nodeid, sfile)
    }
}

function ValidateName(nodename, sType) {
    //validates Page Name, Page ID, Keywords, Field Name, Table Name
    //Type: 
    var sMsg = "";
    if (nodename.indexOf("<") != -1) { sMsg = "The " + sType + " cannot contain the < character." }
    if (nodename.indexOf(">") != -1) { sMsg = "The " + sType + " cannot contain the > character." }
    if (nodename.indexOf("\"") != -1) { sMsg = "The " + sType + " cannot contain double quotes." }
    if (nodename.indexOf("\\") != -1) { sMsg = "The " + sType + " cannot contain the backslash character." }
    //if (nodename.indexOf("/") != -1) {sMsg = "The " + sType + " cannot contain the forwardslash character."}
    if (nodename.indexOf("+") != -1) { sMsg = "The " + sType + " cannot contain the + character." }
    if (nodename.indexOf("%") != -1) { sMsg = "The " + sType + " cannot contain the % character." }
    if (nodename.indexOf("#") != -1) { sMsg = "The " + sType + " cannot contain the # character." }
    //if (nodename.indexOf(",") != -1) {sMsg = "The " + sType + " cannot contain the , character."}
    if (nodename.substr(0, 1) == " ") { sMsg = "The " + sType + " cannot begin with a space." }
    //Do not allow the name to begin with 'template_'
    if (nodename.substr(0, 9).toLowerCase() == "template_") { sMsg = "The " + sType + " cannot begin with 'template_'." }
    //Do not allow comma (,) in the name (except page name)
    if (sType != "page name" && nodename.indexOf(",") != -1) { sMsg = "The " + sType + " cannot contain the , character." }
    //Do not allow ? in the name (except page name, keyword and external file)
    if (sType != "page name" && sType != "keyword" && sType != "external filename" && nodename.indexOf("?") != -1) { sMsg = "The " + sType + " cannot contain the ? character." }
    //Do not allow & in the name (except page name, keyword and external file)
    if (sType != "page name" && sType != "keyword" && sType != "external filename" && nodename.indexOf("&") != -1) { sMsg = "The " + sType + " cannot contain the ampersand character." }

    //ensure that the page name is not blank
    if (sType != "keyword" && nodename.replace(/ /g, "") == "") { sMsg = "The " + sType + " cannot be blank." }
    //Do not allow forward slash in page id. It is required in page name for embedded projects.
    if (sType == "page id" && nodename.indexOf("/") != -1) { sMsg = "The " + sType + " cannot contain the forwardslash character." }
    //Ensure that the field name is not longer than 64 characters
    if (sType == "field") {
        if (nodename.length > 64) { sMsg = "The fieldname cannot be longer than 64 characters." }
        if (nodename.indexOf("'") != -1) { sMsg = "The " + sType + " cannot contain the single quote character." }
    }

    return sMsg;
}

//function PageTemplateChange()
//    {
//   	var sSelectedIndex = document.getElementById("lstPageTemplates").options.selectedIndex;
//   	var sSelectedValue = document.getElementById("lstPageTemplates").options[sSelectedIndex].value;
//    if (sSelectedValue == "External File")
//        {
//        //Show the 'external file' textbox
//        document.getElementById("trExternalFile").style.display = "";
//        document.getElementById("trWebsite").style.display = "none";
//        document.getElementById("trMergeProject").style.display = "none";
//        document.getElementById("trPageName").style.visibility = "";
//        }
//    else if (sSelectedValue == "Website")
//        {
//        //Show the 'website' textbox
//        document.getElementById("trExternalFile").style.display = "none";
//        document.getElementById("trWebsite").style.display = "";
//        document.getElementById("trMergeProject").style.display = "none";
//        document.getElementById("trPageName").style.visibility = "";
//        }
//    else if (sSelectedValue == "Merge Project")
//        {
//        //Show the 'project' list
//        document.getElementById("trExternalFile").style.display = "none";
//        document.getElementById("trWebsite").style.display = "none";
//        document.getElementById("trMergeProject").style.display = "";
//        document.getElementById("trPageName").style.visibility = "hidden";
//        }
//    else
//        {
//        //Regular template selected
//        document.getElementById("trExternalFile").style.display = "none";
//        document.getElementById("trWebsite").style.display = "none";
//        document.getElementById("trMergeProject").style.display = "none";
//        document.getElementById("trPageName").style.visibility = "";
//        }
//    }

//function MergeProjectSelected()
//    {
//    //When a merge project is selected, change the page name to [project:1234]
//    document.getElementById("txtaddname").value = "[project:" + document.getElementById("lstMergeProjects").options[document.getElementById("lstMergeProjects").selectedIndex].value + "]";
//    }

//function ShowAddPageOptions()
//    {
//    document.getElementById("trPageIcon").style.display = "";
//    document.getElementById("trAddasChild").style.display = "";
//    document.getElementById("tdShowOptions").style.display = "none";
//    document.getElementById("tdHideOptions").style.display = "";
//    document.getElementById("tblDialogWindow").style.height = "260px"
//    }
//     
//function HideAddPageOptions()
//    {
//    document.getElementById("trPageIcon").style.display = "none";
//    document.getElementById("trAddasChild").style.display = "none";
//    document.getElementById("tdShowOptions").style.display = "";
//    document.getElementById("tdHideOptions").style.display = "none";
//    document.getElementById("tblDialogWindow").style.height = "160px"
//    }

//function AddPageKeyPress(searchtext,e)
//	{
//    var key;
//	if(window.event) 
//		{
//		key = window.event.keyCode;     //IE
//		}
//	else
//		{
//		key = e.which;     //firefox
//		}

//	if(key == 13)
//		{
//		AddPage();
//		return false;
//		}
//	else
//		{
//		return true;
//		}
//	}

//function delete_AddPage()
//    {
//  	//change the save button to red
//    document.getElementById('txtcontentschanged').value = "true";

//    //set the action to 'AddPage' and submit
//    document.getElementById("txtaction").value = "addpage";
//    __doPostBack("","");
//    }

function DeleteSelectedPage() {
    var node = TreeView1.SelectedNode;
    //verify that a node is selected
    if (node == null) {
        alert("Please select a page to delete.")
        return;
    }

    //verify that this is not the rootnode
    if (node.get_id() == "rootnode") {
        alert("Please select a page to delete.")
        return;
    }

    //    //if this is the =admin= node don't allow it to be deleted
    //    if (node.get_id().toLowerCase() == "=admin=") {
    //        alert("The Admin node cannot be deleted")
    //        return;
    //    }
    //
    //confirm that the page should be deleted
    sPageName = node.Text;
    if (node.get_id().toLowerCase() == "=admin=") {
        //if this is the =admin= node ask the user to confirm.
        if (confirm("If you delete the 'Admin' node, it will be re-added and updated from the 'Help System' template. Do you wish to continue?") == false) {
            return;
        }
    }
    else if (confirm("Delete page '" + sPageName + "'?") == false) {
        return;
    }
    //Make sure that txtpagechanged is false so that the 'do you want to save' prompt does not appear.
    document.getElementById('txtpagechanged').value = "";
    //change the save button to red
    document.getElementById('txtcontentschanged').value = "true";
    UpdateSaveColor()
    //Hide the page and set the 'value' attribute to 'delete'
    node.setProperty("Visible", false);
    node.visible = false;
    node.set_value("delete")
    //select the first visible node

    //var rootNodes = TreeView1.FindNodeById("rootnode").get_nodes();
    var nodes = TreeView1.Nodes();
    //alert("id = " + nodes[0].ID); 
    nodes = nodes[0].Nodes();
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].Value != "delete" && nodes[i].ID != "rootnode") {
            //alert("id = " + nodes[i].ID); 
            var nodeid = nodes[i].ID;
            //load the page
            loadpage(nodeid)
            HighlightPage(nodeid)
            //TreeView1.SelectNodeById(nodeid);
            break;
        }
    }
}

function ReportAjaxError(http) {
    if (http.readyState == 4) {
        if (http.status != 200) {
            //if the error is 12029 then we lost the connection to the server
            if (http.status == 12029 || http.status == 12007) {
                alert("Error: Lost the connection to the web server. Try refreshing the browser.");
            }
            else {
                //switch the page to live mode.
                alert("Error: " + http.status + http.responseText);
            }
        }
    }
}


function Save(bQuickSave) {
    //Determine if the page needs to be saved
    if (document.getElementById("txtpagechanged").value == "true") {
        var editid = document.getElementById("txteditid").value;
        var editnode = window.TreeView1.FindNodeById(editid);
        if (editnode != null) {
            //-- SAVE PAGE --
            //Show the save message and disable the browser window so that the user cannot do anything until save is complete.
            //openMessageWindow("../_engine/DialogContent.aspx?type=save");
            //openNewWindow("../_engine/DialogContent.aspx?type=save",200,40)
            var oWnd = radopen(null, "SavingWindow1");
            oWnd.setSize(200, 1);
            oWnd.set_behaviors(Telerik.Web.UI.WindowBehaviors.Move)
            oWnd.center();
            oWnd.set_title("Saving...")
            oWnd.set_modal(true);
            //If 'Approval Status' is defined, set the status attribute. Also set the 'txtcontentschange' flag so that the user knows that they need to save the contents.
            var DefaultPageStatus = document.getElementById("Form1").getAttribute("DefaultPageStatus")
            //alert("DefaultPageStatus = " + DefaultPageStatus);
            if (DefaultPageStatus != "" && DefaultPageStatus != null) {
                editnode.set_cssClass("TreeNode_status_" + DefaultPageStatus);
                document.getElementById('txtcontentschanged').value = "true";
            }


            //            document.getElementById("tddialog").innerHTML = "<div style='width:100%;height:100%;background-color:white;font-size:20pt'><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Saving...</div>";
            //            document.getElementById("tblDialogWindow").style.width = "250px"
            //            document.getElementById("tblDialogWindow").style.height = "150px"
            //            document.getElementById("spanheading").innerHTML = ""
            //            document.getElementById("tbldialog").style.display = "";
            //            document.getElementById("divtransparency").style.display = "";
            //if there is a page being edited and it has been changed, save the page
            var projectname = GetProjectName();
            var reqstring = "action=savepage";
            reqstring = reqstring + "&projectname=" + projectname;
            reqstring = reqstring + "&pageid=" + editid
            reqstring = reqstring + "&username=" + document.getElementById("txtactiveusername").value;
            reqstring = reqstring + "&password=" + document.getElementById("txtactivepassword").value;
            //Add the page html to reqstring
            var editor = $find("editor1");
            pagehtml = editor.get_html(true);
            pagehtml = encodeURIComponent(pagehtml);
            reqstring = reqstring + "&pagehtml=" + pagehtml;
            var http = false;
            if (navigator.appName == "Microsoft Internet Explorer") { http = new ActiveXObject("Microsoft.XMLHTTP"); } else { http = new XMLHttpRequest(); }
            //This function allows us to trap any errors
            http.onreadystatechange = function() {
                if (http.readyState == 4) {
                    if (http.status != 200) {
                        alert("Error: " + http.status + http.responseText);
                    }
                    else {
                        //After saving the page, clear the txtpagechanged field
                        document.getElementById("txtpagechanged").value = ""
                        UpdateSaveColor()
                        //hide the saving message
                        //var oWnd = GetRadWindowManager().getWindowByName("RadWindow1");
                        var oWnd = GetRadWindowManager().getWindowByName("SavingWindow1");
                        oWnd.close();

                        //document.getElementById("tddialog").innerHTML = "";
                        //document.getElementById("tbldialog").style.display = "none";
                        //document.getElementById("divtransparency").style.display = "none";
                        //After saving, update the NewEditorHTML field so we know when new changes are made.
                        //document.getElementById("NewEditorHTML").value = window.GetRadEditor("editor1").GetHtml();
                        document.getElementById("NewEditorHTML").value = editor.get_html(true);

                        //                        //After saving, write datasource for tbldataset_detail (if exists)
                        //                        if (GetRadEditor("editor1").ContentWindow.document.getElementById("tbldataset_detail") != null)
                        //                            {
                        //                            if (GetRadEditor("editor1").ContentWindow.document.getElementById("tbldataset_detail").getAttribute("datasource") == null)
                        //                                {
                        //                                //only write the datasource attribute if it does not already exist.
                        //                                GetRadEditor("editor1").ContentWindow.document.getElementById("tbldataset_detail").setAttribute("datasource",TreeView1.SelectedNode.ID,0);
                        //                                }
                        //                            }

                        //reload the page in live mode, unless this is a quicksave
                        if (bQuickSave != true) {
                            document.getElementById("txteditid").value = "";
                            //document.getElementById("diveditor").style.display = "none";
                            //set the focus to the search textbox to prevent the flashing cursor in the page window
                            //try {document.getElementById("txtsearch").focus()}  catch(err){}
                            loadpage(TreeView1.SelectedNode.ID);
                            //if the contents has changed, save it now. This will cause a postback
                            //note: SaveContents() is called here to ensure that the page is saved first. if this call was placed at the bottom of the function, the postback may occur before the page is saved.
                            SaveContents();
                        }
                    }
                }
            }

            //http.open("POST","default.aspx",true);
            http.open("POST", "../_engine/AjaxAction.aspx", true);
            http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            //http.setRequestHeader("Content-length", reqstring.length + 200);
            //http.setRequestHeader("Connection", "close");
           http.send(reqstring);


        }
    }
    else {
        //The page does not need to be saved. Just save the contents. This will cause a postback
        if (bQuickSave != true) {
            SaveContents();
        }
    }
}


function SaveContents() {
    //if the contents needs to be saved, set the action to 'savecontents' and postback
    if (document.getElementById("txtcontentschanged").value == "true") {
        //Display progress indicator in case it takes a while to save the contents.
        document.getElementById("divtransparency").style.backgroundImage = "url(../_engine/images/saving.gif)";
        document.getElementById("divtransparency").style.backgroundPosition = "center center";
        document.getElementById("divtransparency").style.backgroundRepeat = "no-repeat";
        document.getElementById("imgedit").style.display = "none";
        document.getElementById("divtransparency").style.display = "";
        //before postback, clear txteditid so that a blank editor is not loaded if the user clicks the browser back button.
        document.getElementById("txteditid").value = "";
        document.getElementById("txtcontentschanged").value = "";
        //-- SAVE CONTENTS --
        document.getElementById("txtaction").value = "savecontents"
        __doPostBack("", "");
    }
}

function nodeMove(sourceNode, targetNode) {
    //change the save button to red
    document.getElementById('txtcontentschanged').value = "true";
    UpdateSaveColor()
    return true;
}

function nodeCopy(sourceNode) {
    //Do not allow nodeCopy to happen because this will cause a postback, and also will create a node that is not compatible with helpconsole.
    return false;
}

function onNodeBeforeCollapse(sender, eventArgs) {
    //alert("node name = " + eventArgs.get_node().get_id());
    if (eventArgs.get_node().get_id() == "rootnode") {
        //alert("rootnode has been collapsed");
        //eventArgs.get_node().expandAll();
        //eventArgs.get_node().expandAncestors();
        //TreeView1.FindNodeById("rootnode").expand(true);
        //TreeView1.expandAll();
        //return false;
        eventArgs.set_cancel(true);
    }
}

function nodeRename(sourceNode, newName) {
    //Validate the node name
    var sMsg = ValidateName(newName, "page name")
    if (sMsg != "") {
        alert(sMsg);
        return;
    }

    //change the save button to red
    document.getElementById('txtcontentschanged').value = "true";
    UpdateSaveColor()
    return true;
}


function printpage(skin) {
    //Determine if the page is in a frame or div tag
    if (document.getElementById("frame_page") == null) {
        //-- PRINT DIV TAG --
        printpage_flat(skin)
    }
    else {
        //-- PRINT FRAME --
        printpage_frame()
    }

}


function printpage_flat(skin) {
    //alert("step1")    
    var printIframe = document.createElement("IFRAME");
    printIframe.style.height = "5px";
    printIframe.style.width = "5px";
    //alert("step2")    
    document.body.appendChild(printIframe);
    //alert("step3")    
    var printDocument = printIframe.contentWindow.document;
    //alert("step4")    
    printDocument.designMode = "on";
    //alert("step5")    
    printDocument.open();
    //alert("step6")    
    var currentLocation = document.location.href;
    currentLocation = currentLocation.substring(0, currentLocation.lastIndexOf("/") + 1);
    var htmlcontent = document.getElementById("divpage")
    printDocument.write("<html><head></head><body>" + htmlcontent.innerHTML + "</body></html>");

    try {
        if ($telerik.isIE) {
            //PageStyles.CSS
            var oLink = printDocument.createElement("link");
            oLink.setAttribute("href", currentLocation + "pagestyles.css", 0);
            oLink.setAttribute("type", "text/css");
            oLink.setAttribute("rel", "stylesheet", 0);
            printDocument.getElementsByTagName("head")[0].appendChild(oLink);
            //PageStyles.CSS
            var oLink = printDocument.createElement("link");
            oLink.setAttribute("href", currentLocation + "style_" + skin + ".css", 0);
            oLink.setAttribute("type", "text/css");
            oLink.setAttribute("rel", "stylesheet", 0);
            printDocument.getElementsByTagName("head")[0].appendChild(oLink);
            //AppStyles.CSS
            var oLink = printDocument.createElement("link");
            oLink.setAttribute("href", currentLocation + "../_engine/AppStyles.css", 0);
            oLink.setAttribute("type", "text/css");
            oLink.setAttribute("rel", "stylesheet", 0);
            printDocument.getElementsByTagName("head")[0].appendChild(oLink);
            //Print the content of the iframe
            printDocument.execCommand("Print");
        }
        else    // if ($telerik.isFirefox)
        {
            //applies to all other browsers (Firefox, Safari, Chrome, etc.)
            printDocument.body.innerHTML = "<link rel='stylesheet' type='text/css' href='" + currentLocation + "pagestyles.css'></link>" + printDocument.body.innerHTML;
            printDocument.body.innerHTML = "<link rel='stylesheet' type='text/css' href='" + currentLocation + "style_" + skin + ".css'></link>" + printDocument.body.innerHTML;
            printDocument.body.innerHTML = "<link rel='stylesheet' type='text/css' href='" + currentLocation + "../_engine/AppStyles.css'></link>" + printDocument.body.innerHTML;
            printIframe.contentWindow.print();
        }
        //Telerik: close here the print document
        printDocument.close();
    }
    catch (ex) {
    }
    document.body.removeChild(printIframe);
}


//function printpage_flat()
//    {
//	var printIframe = document.createElement("IFRAME");
//	document.body.appendChild(printIframe);
//	var printDocument = printIframe.contentWindow.document;
//	printDocument.designMode = "on";
//	printDocument.open();
//	var currentLocation = document.location.href;
//	currentLocation = currentLocation.substring(0, currentLocation.lastIndexOf("/") + 1);
//	var htmlcontent = document.getElementById("divpage")
//	printDocument.write("<html><head></head><body>" + htmlcontent.innerHTML + "</body></html>");
//	printDocument.close();
//	//If Firefox insert a prompt to compensate for a bug in Firefox
//    if(navigator.appName != "Microsoft Internet Explorer") 
//        {
//        alert("Print Page?");
//        } 
//	
//	try
//		{
//		if (document.all)
//			{
//			var oLink = printDocument.createElement("link");
//			oLink.setAttribute("href", currentLocation + "pagestyles.css", 0);
//			oLink.setAttribute("type", "text/css");
//			oLink.setAttribute("rel", "stylesheet", 0);
//			printDocument.getElementsByTagName("head")[0].appendChild(oLink);
//			printDocument.execCommand("Print");
//			}
//		else
//			{
//			printDocument.body.innerHTML = "<link rel='stylesheet' type='text/css' href='" + currentLocation + "pagestyles.css'></link>" + printDocument.body.innerHTML;
//			printIframe.contentWindow.print();
//			}
//		}
//	catch(ex)
//		{
//		}
//	document.body.removeChild(printIframe);
//    }

function printpage_frame() {
    //if we are in live mode, print the content of the iframe
    try {
        window.frames["frame_page"].focus();
        window.frames["frame_page"].print();
    }
    catch (err) {
        txt = "This appears to be an external page.\n\nTo print this page, right click the page and select 'print'.";
        alert(txt);
    }
}




function EditContents() {
    //get the projectname
    var projectname = GetProjectName();
    //Get add page HTML from AddPage.aspx using AJAX
    var http = false;
    var reqstring = "action=editcontents";
    reqstring = reqstring + "&projectname=" + projectname;
    reqstring = reqstring + "&username=" + document.getElementById("txtactiveusername").value;
    reqstring = reqstring + "&password=" + document.getElementById("txtactivepassword").value;

    if (navigator.appName == "Microsoft Internet Explorer") { http = new ActiveXObject("Microsoft.XMLHTTP"); } else { http = new XMLHttpRequest(); }
    http.onreadystatechange = function() {
        if (http.readyState == 4) {
            if (http.status == 200) {
                if (http.responseText.indexOf("<lock_message>") != -1) {
                    //Display message if the contents is locked
                    var msg = http.responseText
                    msg = msg.substring(msg.indexOf("<lock_message>") + 14, msg.indexOf("</lock_message>"))
                    alert(msg);
                }
                else {
                    //after the session variable has been set, reload the page. 
                    //Note: the page is reloaded, not submitted so that the page is not added to history in Firefox2 and IE7+
                    window.location.href = "default.aspx"
                }
            }
            else {
                alert("Error: " + http.status + http.responseText);
            }
        }
    }
    http.open("POST", "../_engine/AjaxAction.aspx", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send(reqstring);
}


function linkpage(commandName, editor, args) {
    var projectname = GetProjectName()
    var elem = editor.getSelectedElement(); //returns the selected element.

    if (elem.tagName == "A") {
        editor.selectElement(elem);
        argument = elem;
    }
    else {
        var content = editor.getSelectionHtml();
        var link = editor.get_document().createElement("A");
        link.innerHTML = content;
        argument = link;
    }

    var myCallbackFunction = function(sender, args) {
        if (args.target == "_EmbeddedPage") {
            editor.pasteHtml("[page:" + args.name + "]")
        }
        else {
            editor.pasteHtml(String.format("<a href='{0}' target='{1}' class='{2}'>{3}</a> ", args.href, args.target, args.className, args.name))
        }
    }

    dHeight = getBrowserHeight() * .8

    //editor.showExternalDialog("../_engine/linkpage.aspx?projectname="+projectname, argument, 375, 450, myCallbackFunction, null, "Insert Link", true, Telerik.Web.UI.WindowBehaviors.Close + Telerik.Web.UI.WindowBehaviors.Move + Telerik.Web.UI.WindowBehaviors.Resize, false, true);
    editor.showExternalDialog("../_engine/linkpage.aspx?projectname=" + projectname, argument, 375, dHeight, myCallbackFunction, null, "Insert Link", true, Telerik.Web.UI.WindowBehaviors.Close + Telerik.Web.UI.WindowBehaviors.Move + Telerik.Web.UI.WindowBehaviors.Resize, false, true);
};


function PasteImage(commandName, editor, args) {
    //alert("PasteImage");

    //Get search results index using AJAX
    var http = false;
    var reqstring = "action=pasteimage";
    reqstring = reqstring + "&projectname=" + GetProjectName();
    if (navigator.appName == "Microsoft Internet Explorer") { http = new ActiveXObject("Microsoft.XMLHTTP"); } else { http = new XMLHttpRequest(); }
    http.onreadystatechange = function() {
        if (http.readyState == 4) {
            if (http.status == 200) {
                var sresponse = http.responseText;
                sImageURL = sresponse.substring(sresponse.indexOf("<pasteimage>") + 12, sresponse.lastIndexOf("</pasteimage>"));
                if (sImageURL == "") {
                    alert("Paste Image not found.")
                }
                else {
                    editor.pasteHtml("<img src='" + sImageURL + "'/>")
                }
                //Add a dummy parameter to the image url so that it isn't cached.
                //var d = new Date()
                //var dummyparm = "?dummy=" + d.getHours() + d.getMinutes() + d.getSeconds();
                //sImageURL = sImageURL + dummyparm;
                //alert(" image url = " + sImageURL);
            }
            else {
                alert("Error: " + http.status + http.responseText);
            }
        }
    }
    http.open("POST", "../_engine/ajaxaction.aspx", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send(reqstring);

}

//function linkpage(commandName, editor)
//    {
//	window.GetRadEditor("editor1").ShowDialog("../_engine/linkpage.aspx?projectname="+projectname, null, 350, 400, linkpageCallback, null, "Link Page");
//    }

//function linkpageCallback(returnValue)
//{

//	if (returnValue)
//	    {
//	    var selectedElement = window.GetRadEditor("editor1").GetSelectionHtml();
//        if (selectedElement == "")
//            {
//            selectedElement = returnValue.text;
//            }
//        
//        if (returnValue.target == "")
//            {
//            var sLink = "<a href=\"" + returnValue.url + "\">" + selectedElement + "</a>";
//            }
//        else
//            {
//            var sLink = "<a href=\"" + returnValue.url + "\" target=\"" + returnValue.target + "\">" + selectedElement + "</a>";
//            }
//    
//        window.GetRadEditor("editor1").PasteHtml(sLink);
//    	}
//    }


//-------------------------------------------------------------------------------------------- PROPERTIES FUNCTIONS -----------------


function PageItemClicked() {

    //Determine what was clicked.
    //var editor = GetRadEditor("editor1")
    var editor = $find("editor1");
    //alert("this tag = " + editor.getSelectedElement().nodeName)
    //alert("parent tag = " + editor.getSelectedElement().parentNode.parentNode.parentNode.id)
    //alert("HTML = " + editor.get_html(true));
    //alert("tbldataset_detail id = " + editor.get_document().getElementById("tbldataset_detail").id);

    //If the page does not include 'dataset find', 'dataset detail' or 'dataset summary' then exit.
    //    if (editor.ContentWindow.document.getElementById("tbldataset_detail") == null && editor.ContentWindow.document.getElementById("tbldataset_find") == null && editor.ContentWindow.document.getElementById("tbldataset_summary") == null)
    //        {
    //        return;
    //        }

    var oSelElem = editor.getSelectedElement();
    //alert(oSelElem.nodeName + " id=" + oSelElem.id);  

    //get the field type
    var sTagName = oSelElem.nodeName.toLowerCase();
    var oSelParent = oSelElem;
    //	if (RadEditorNamespace.Utils.GetElementParentByTag(oSelElem,"TABLE")!=null)
    //	    {
    //        var oSelParent = RadEditorNamespace.Utils.GetElementParentByTag(oSelElem,"TABLE")
    //	    }
    //	else
    //	    {
    //	    var oSelParent = oSelElem;
    //	    }

    if (editor.getSelectedElement().parentNode.parentNode.parentNode != null && editor.getSelectedElement().parentNode.parentNode.parentNode.id == "tbldataset_find") {
        var oSelParent = editor.getSelectedElement().parentNode.parentNode.parentNode;
    }
    else {
        var oSelParent = oSelElem;
    }


    if (sTagName == "input" || sTagName == "select" || sTagName == "textarea") {
        //--FIELD--
        DisplayProperties("Dataset Field", oSelElem);
    }

    else if (oSelParent.id.toLowerCase() == "tbldataset_summary") {
        //--DATASET SUMMARY--
        DisplayProperties("Dataset Summary", oSelParent, "true");
    }
    else if (oSelParent.id.toLowerCase() == "tbldataset_find") {
        //--DATASET FIND--
        DisplayProperties("Dataset Find", oSelParent);
    }

    else if (oSelParent.id.toLowerCase() == "tbldataset_detail") {
        //--DATASET DETAIL--
        DisplayProperties("Dataset Detail", oSelParent);
    }

    else {
        //if the page contains 'data detail' then automatically display those properties
        if (editor.get_document().getElementById("tbldataset_detail") != null) {
            oSelParent = editor.get_document().getElementById("tbldataset_detail");
            DisplayProperties("Dataset Detail", oSelParent);
        }
    }
}


//function PageItemClicked()
//    {
//    alert("pageitemclicked")
//    return;
//    //Determine what was clicked.
//	var editor = GetRadEditor("editor1")
//    //If the page does not include 'dataset find', 'dataset detail' or 'dataset summary' then exit.
//    if (editor.ContentWindow.document.getElementById("tbldataset_detail") == null && editor.ContentWindow.document.getElementById("tbldataset_find") == null && editor.ContentWindow.document.getElementById("tbldataset_summary") == null)
//        {
//        return;
//        }
//	var oSelElem = editor.GetSelection().GetParentElement();
//	//get the field type
//	var sTagName = oSelElem.tagName.toLowerCase();
//	if (RadEditorNamespace.Utils.GetElementParentByTag(oSelElem,"TABLE")!=null)
//	    {
//        var oSelParent = RadEditorNamespace.Utils.GetElementParentByTag(oSelElem,"TABLE")
//	    }
//	else
//	    {
//	    var oSelParent = oSelElem;
//	    }
//	if (sTagName=="input" || sTagName=="select" || sTagName=="textarea")  
//		{
//		//--FIELD--
//        DisplayProperties("Dataset Field",oSelElem);
//		}

//    else if(oSelParent.id.toLowerCase()=="tbldataset_summary")
//        {
//        //--DATASET SUMMARY--
//        DisplayProperties("Dataset Summary",oSelParent,"true");
//        }
//    else if(oSelParent.id.toLowerCase()=="tbldataset_find")
//		{
//        //--DATASET FIND--
//        DisplayProperties("Dataset Find",oSelParent);
//		}

//    else if(oSelParent.id.toLowerCase()=="tbldataset_detail")
//        {
//        //--DATASET DETAIL--
//        DisplayProperties("Dataset Detail",oSelParent);
//        }

//    else
//        {
//        //if the page contains 'data detail' then automatically display those properties
//        if (editor.ContentWindow.document.getElementById("tbldataset_detail") != null)
//            {
//            oSelParent = editor.ContentWindow.document.getElementById("tbldataset_detail");
//            DisplayProperties("Dataset Detail",oSelParent);
//            }
//        }
//    }


function DisplayProperties(sType, oSelElem, force) {
    //alert("display properties")

    //If the properties are already displayed, don't bother reloading the properties window, just load property values
    if (document.getElementById("divproperties").innerHTML.indexOf(sType + " Properties") != -1 && force != "true") {
        if (sType == "Page") {
            LoadPageProperties();
        }
        else {
            LoadDatasetProperties(sType, oSelElem);
        }

        return;
    }

    //get a reference to the editor
    var editor = $find("editor1");
    //Get the project name
    var projectname = GetProjectName();
    //if this is a dataset, or summary then get the datasource
    if (sType == "Dataset Summary") {
        sDataSource = oSelElem.getAttribute("datasource");
    }
    else if (sType == "Dataset Find") {
        //var sDataSource =  GetRadEditor("editor1").ContentWindow.document.getElementById("tbldataset_find").getAttribute("sqlquery");
        var sDataSource = editor.get_document().getElementById("tbldataset_find").getAttribute("sqlquery");
        //if sqlquery is blank then get the datasource from the detail panel
        if (sDataSource == "") {
            if (editor.get_document().getElementById("tbldataset_detail") != null) {
                sDataSource = editor.get_document().getElementById("tbldataset_detail").getAttribute("datasource")
            }
            else {
                alert("Please enter an SQL Statement in the 'SQL Query' property.")
            }
        }
    }
    else if (sType == "Dataset Detail") {
        //var sDataSource =  GetRadEditor("editor1").ContentWindow.document.getElementById("tbldataset_detail").getAttribute("datasource");
        var sDataSource = editor.get_document().getElementById("tbldataset_detail").getAttribute("datasource");
        editor.get_document().getElementById("tbldataset_detail")
    }

    //if sDataSource is blank then set it to the page id.
    if (sDataSource == null || sDataSource == "") {
        sDataSource = TreeView1.SelectedNode.get_id();
    }


    //display the loading... icon
    //document.getElementById("spanproperties").innerHTML = "<table style='width:100%;height:100%'><tr><td align=center><img src='../_engine/images/loading.gif'></td></tr></table>"
    //document.getElementById("spanproperties").style.display="";
    //Fire the windows_resize function so that the treeview height is adjusted
    //window_resize();
    //Get properties page HTML from properties.aspx using AJAX
    var http = false;
    var reqstring = "projectname=" + projectname;
    reqstring = reqstring + "&username=" + document.getElementById("txtactiveusername").value;
    reqstring = reqstring + "&password=" + document.getElementById("txtactivepassword").value;
    reqstring = reqstring + "&type=" + sType;
    reqstring = reqstring + "&datasource=" + sDataSource;

    if (navigator.appName == "Microsoft Internet Explorer") { http = new ActiveXObject("Microsoft.XMLHTTP"); } else { http = new XMLHttpRequest(); }
    http.onreadystatechange = function() {
        if (http.readyState == 4) {
            if (http.status == 200) {
                document.getElementById("divproperties").innerHTML = http.responseText;
                //set the height of the properties window and the contents window to 50%
                document.getElementById("divproperties").style.height = "60%";
                document.getElementById("divcontents").style.height = "40%";
                document.getElementById("divproperties").style.display = "";
                window_resize();
                //alert("display = " + document.getElementById("spanproperties").style.display)
                //alert("html = " + document.getElementById("spanproperties").innerHTML)

                //display properties for the selected page.
                if (sType == "Page") {
                    LoadPageProperties();
                }
                else {
                    LoadDatasetProperties(sType, oSelElem);
                }

            }
            else {
                alert("Error: " + http.status + http.responseText);
            }
        }
    }
    if (sType == "Page") {
        http.open("POST", "../_engine/properties_page.aspx", true);
    }
    else {
        http.open("POST", "../_engine/properties_dataset.aspx", true);
    }
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send(reqstring);
}


function LoadPageProperties() {
    //if the properties window is visible then display properties
    var node = TreeView1.SelectedNode;
    if (node != null) {
        //display keywords from the node
        var keywords = getValueItem(node, "keywords");
        keywords = keywords.replace(/,/gi, String.fromCharCode(13, 10));
        document.getElementById("txtkeywords").value = keywords;
        //display hidden/locked skins
        CheckHiddenLockedSkins(node);
        document.getElementById("prop_pagename").value = node.get_text();

        //Display page id
        var pageid = node.get_id();
        var renameid = getValueItem(node, "renameid");
        if (renameid != "") {
            document.getElementById("prop_pageid").value = pageid + "  (renamed to " + renameid + ")";
        }
        else {
            document.getElementById("prop_pageid").value = pageid;
        }
        //disable the pageid textbox if the pageid has been renamed, starts with template or is external, or the id is =admin=
        if (renameid != "" || pageid.substr(0, 9).toLowerCase() == "template_" || pageid.substr(0, 11) == "external~!~" || pageid.toLowerCase() == "=admin=") {
            document.getElementById("prop_pageid").disabled = true
        }
        else {
            document.getElementById("prop_pageid").disabled = false
        }
        //display the current status
        document.getElementById("lstStatus").options[0].selected = true;
        for (i = 0; i < document.getElementById("lstStatus").length; i++) {
            if (node.get_cssClass().toLowerCase() == "treenode_status_" + document.getElementById("lstStatus").options[i].text.toLowerCase()) {
                document.getElementById("lstStatus").options[i].selected = true;
            }
        }
        //Display the page icon
        document.getElementById("lstPageIcon").options[0].selected = true;
        for (i = 0; i < document.getElementById("lstPageIcon").length; i++) {
            if (node.get_imageUrl() != null) {
                if (node.get_imageUrl().toLowerCase() == "images/pageicon_" + document.getElementById("lstPageIcon").options[i].text.toLowerCase() + ".gif") {
                    document.getElementById("lstPageIcon").options[i].selected = true;
                }
            }
        }
    }
}

function LoadDatasetProperties(sType, oSelElem) {
    //Get the selected item
    if (sType == "Dataset Find") {
        //--DATASET FIND--
        var editor = $find("editor1");
        var detailtag = editor.get_document().getElementById("tbldataset_find");
        if (detailtag.getAttribute("sortfield") != null) { document.getElementById("prop_SortField").value = detailtag.getAttribute("sortfield") }
        if (detailtag.getAttribute("sqlquery") != null) { document.getElementById("prop_SQLQuery").value = detailtag.getAttribute("sqlquery") }
        //Show All
        if (detailtag.getAttribute("showall") != null && detailtag.getAttribute("showall") == "true") {
            document.getElementById("prop_chkShowAll").checked = true;
        }
        else {
            document.getElementById("prop_chkShowAll").checked = false;
        }
    }
    else if (sType == "Dataset Detail") {
        //--DATASET DETAIL--
        if (oSelElem.getAttribute("redirecturl") != null) { document.getElementById("prop_RedirectURL").value = oSelElem.getAttribute("redirecturl") }
    }
    else if (sType == "Dataset Summary") {
        //--DATASET SUMMARY--
        //ALLOW ADD property
        if (oSelElem.getAttribute("allowadd") == "true") {
            document.getElementById("prop_chkAllowAdd").checked = true;
        }
        else {
            document.getElementById("prop_chkAllowAdd").checked = false;
        }

        //Get DataSource property 
        if (oSelElem.getAttribute("datasource") != null) {
            for (i = 0; i < document.getElementById("prop_lstDataSource").length; i++) {
                if (oSelElem.getAttribute("datasource").toLowerCase() == document.getElementById("prop_lstDataSource").options[i].text.toLowerCase()) {
                    document.getElementById("prop_lstDataSource").options[i].selected = true;
                }
            }
        }

        //Get OpenPage property
        if (oSelElem.getAttribute("openpage") != null) {
            for (i = 0; i < document.getElementById("prop_lstOpenPage").length; i++) {
                if (oSelElem.getAttribute("openpage").toLowerCase() == document.getElementById("prop_lstOpenPage").options[i].text.toLowerCase()) {
                    document.getElementById("prop_lstOpenPage").options[i].selected = true;
                }
            }
        }
        else {
            //if the openpage property was not found then select the first entry in the list and add 'openpage' attribute.
            if (document.getElementById("prop_lstOpenPage").length > 1) {
                document.getElementById("prop_lstOpenPage").options[1].selected = true;
                oSelElem.setAttribute("openpage", document.getElementById("prop_lstOpenPage").options[1].text, 0);
            }
        }

    }
    else if (sType == "Dataset Field") {
        //--DATASET FIELD--
        var sFieldType = GetFieldType(oSelElem)
        document.getElementById("tdprop_fieldtype").innerHTML = sFieldType;
        document.getElementById("tdprop_fieldname").innerHTML = oSelElem.getAttribute("id");
        if (oSelElem.getAttribute("defaultvalue") != null) { document.getElementById("prop_defaultvalue").value = oSelElem.getAttribute("defaultvalue") }

        //Required
        if (oSelElem.getAttribute("fieldrequired") != null && oSelElem.getAttribute("fieldrequired") == "true") {
            document.getElementById("prop_chkRequired").checked = true;
        }
        else {
            document.getElementById("prop_chkRequired").checked = false;
        }

        //Disabled
        if (oSelElem.getAttribute("fieldlocked") != null && oSelElem.getAttribute("fieldlocked") == "true") {
            document.getElementById("prop_chkDisabled").checked = true;
        }
        else {
            document.getElementById("prop_chkDisabled").checked = false;
        }

        document.getElementById("prop_width").value = oSelElem.style.width;
        document.getElementById("prop_height").value = oSelElem.style.height;
    }

    else if (sType == "Dataset Label") {
        //--DATASET LABEL--
        document.getElementById("tdprop_fieldtype").innerHTML = "Field Label";
        document.getElementById("tdprop_fieldname").innerHTML = "Field Label";
        document.getElementById("prop_defaultvalue").value = oSelElem.innerHTML;
        document.getElementById("prop_width").value = oSelElem.style.width;
        document.getElementById("prop_height").value = oSelElem.style.height;
    }

}

function TogglePropertyWindow(imgobj, windowobj) {
    if (windowobj.style.display == "") {
        windowobj.style.display = "none";
        imgobj.src = "../_engine/images/properties_expand.gif";
    }
    else {
        windowobj.style.display = "";
        imgobj.src = "../_engine/images/properties_contract.gif";
    }
}


function GetFieldType(oSelElem) {
    //get the field type
    var sFieldType = "";
    if (oSelElem.tagName.toLowerCase() == "input") {
        if (oSelElem.getAttribute("type").toLowerCase() == "text" || oSelElem.getAttribute("type").toLowerCase() == "hidden" || oSelElem.getAttribute("type") == null) {
            //-- TEXTBOX --
            return "Text";
        }

        else if (oSelElem.getAttribute("type").toLowerCase() == "number") {
            //-- NUMBER --
            return "Number";
        }

        else if (oSelElem.getAttribute("type").toLowerCase() == "date") {
            //-- DATE --
            return "Date";
        }

        else if (oSelElem.getAttribute("type").toLowerCase() == "checkbox") {
            //-- CHECKBOX --
            return "Checkbox";
        }
    }

    else if (oSelElem.tagName.toLowerCase() == "select") {
        //-- SELECT --
        return "List";
    }

    else if (oSelElem.tagName.toLowerCase() == "textarea") {
        //-- MEMO --
        return "Memo";
    }

    else if (oSelElem.tagName.toLowerCase() == "div") {
        //-- LABEL --
        return "Label";
    }
}


function getValueItem(node, ItemName) {
    var nodeValue = node.get_value();
    if (nodeValue == "undefined" || nodeValue == null) { nodeValue = "" }
    var ipos = nodeValue.indexOf(ItemName + "{")
    if (ipos != -1) {
        var ipos_end = nodeValue.indexOf("}", ipos + 1)
        var ValueItem = nodeValue.substring(ipos + ItemName.length + 1, ipos_end)
        return ValueItem;
    }
    else {
        return ("");
    }
}

function setValueItem(node, ItemName, ItemValue) {
    var nodeValue = node.get_value();
    if (nodeValue == "undefined" || nodeValue == null) { nodeValue = "" }
    //if this item already exists then remove it now
    var ipos = nodeValue.indexOf(ItemName + "{")
    if (ipos != -1) {
        var ipos_end = nodeValue.indexOf("}", ipos + 1)
        nodeValue = nodeValue.substring(0, ipos) + nodeValue.substring(ipos_end + 1)
    }
    node.set_value(nodeValue + ItemName + "{" + ItemValue + "}")
}

function keywordchange() {
    var node = TreeView1.SelectedNode;
    if (node != null) {
        var keywords = document.getElementById("txtkeywords").value

        //Validate keywords
        var sMsg = ValidateName(keywords, "keyword")
        if (sMsg != "") {
            alert(sMsg);
            LoadPageProperties();
            return;
        }

        keywords = keywords.replace(/\r\n/gi, ",")  	 //Replace linefeed chars with ~ because linefeeds get messed up
        keywords = keywords.replace(/\n/gi, ",")    //Do another search and replace for just \n (for netscape and firefox)
        setValueItem(node, "keywords", keywords)
        document.getElementById('txtcontentschanged').value = "true";
        UpdateSaveColor()
    }
}

function CloseProperties() {
    //Hide the properties window
    document.getElementById("divproperties").style.display = "none";
    document.getElementById("divcontents").style.height = "100%";
    document.getElementById("divproperties").innerHTML = "";
    window_resize();
}


function SetProp_pagename() {
    var newName = document.getElementById("prop_pagename").value;

    //Validate the node name
    var sMsg = ValidateName(newName, "page name")
    if (sMsg != "") {
        alert(sMsg);
        LoadPageProperties();
        return;
    }

    var node = TreeView1.SelectedNode;
    if (node != null) {
        node.set_text(newName);
        document.getElementById('txtcontentschanged').value = "true";
        UpdateSaveColor()
    }
}


function SetProp_pageid() {
    var newid = document.getElementById("prop_pageid").value;

    //Validate the node ID
    var sMsg = ValidateName(newid, "page id")
    if (sMsg != "") {
        alert(sMsg);
        LoadPageProperties();
        return;
    }

    var node = TreeView1.SelectedNode;
    if (node == null) {
        alert("Error: page not selected.");
        return;
    }

    var oldid = node.get_id();

    //determine if the new page id already exists
    if (TreeView1.FindNodeById(newid) != null) {
        alert("A page with the ID '" + newid + "' already exists.");
        return;
    }

    //Don't change the actual page id until the contents is saved. record the new page id in the 'value' attribute
    setValueItem(node, "renameid", newid)
    document.getElementById('txtcontentschanged').value = "true";
    UpdateSaveColor()
}

function SetProp_Status() {
    var node = TreeView1.SelectedNode;
    if (node != null) {
        var pagestatus = document.getElementById("lstStatus").options[document.getElementById("lstStatus").selectedIndex].text;
        if (pagestatus == "") {
            node.set_cssClass("");
        }
        else {
            node.set_cssClass("TreeNode_status_" + pagestatus);
        }
        document.getElementById('txtcontentschanged').value = "true";
        UpdateSaveColor()
    }
}

function SetProp_PageIcon() {
    var node = TreeView1.SelectedNode;
    if (node != null) {
        var pageicon_text = document.getElementById("lstPageIcon").options[document.getElementById("lstPageIcon").selectedIndex].text;
        var pageicon_value = document.getElementById("lstPageIcon").options[document.getElementById("lstPageIcon").selectedIndex].value;
        if (pageicon_text.toLowerCase() != "[auto]" && pageicon_text != "") {
            //node.set_imageUrl("images/pageicon_" + pageicon + ".gif");
            //node.set_expandedImageUrl("images/pageicon_" + pageicon + ".gif");
            node.set_imageUrl("images/" + pageicon_value);
            node.set_expandedImageUrl("images/" + pageicon_value);
        }
        else {
            node.set_imageUrl(null);
            node.set_expandedImageUrl(null);
        }
        document.getElementById('txtcontentschanged').value = "true";
        UpdateSaveColor()
    }

}

function SetProp_skinhide() {
    var node = TreeView1.SelectedNode;
    if (node != null) {
        var valuestring = "";
        var field = document.getElementById("Form1").skinhide;
        //Check to see if this is a checkbox array. If there is only one skin then it is not.
        if (isCheckboxArray() == true) {
            for (i = 0; i < field.length; i++) {
                if (field[i].checked == true) {
                    valuestring = valuestring + field[i].value + ","
                }
            }
        }
        else {
            if (field.checked == true) {
                valuestring = valuestring + field.value + ","
            }
        }

        setValueItem(node, "skinhide", valuestring)
    }
    document.getElementById('txtcontentschanged').value = "true";
    UpdateSaveColor()
}

function SetProp_skinlock() {
    var node = TreeView1.SelectedNode;
    if (node != null) {
        var valuestring = "";
        var field = document.getElementById("Form1").skinlock;
        //Check to see if this is a checkbox array. If there is only one skin then it is not.
        if (isCheckboxArray() == true) {
            for (i = 0; i < field.length; i++) {
                if (field[i].checked == true) {
                    valuestring = valuestring + field[i].value + ","
                }
            }
        }
        else {
            if (field.checked == true) {
                valuestring = valuestring + field.value + ","
            }
        }

        setValueItem(node, "skinlock", valuestring)
    }
    document.getElementById('txtcontentschanged').value = "true";
    UpdateSaveColor()
}

function SetProp_DataSource(sType, svalue) {
    //change the pagechanged flag
    document.getElementById('txtpagechanged').value = "true";
    UpdateSaveColor()

    //var editor = GetRadEditor("editor1")
    var editor = $find("editor1");
    //editor.SetFocus();
    if (sType.toLowerCase() == "detail") {
        //DATASET
        //oSelElem = editor.ContentWindow.document.getElementById("tbldataset_detail");
        oSelElem = editor.get_document().getElementById("tbldataset_detail");
        oSelElem.setAttribute("datasource", svalue, 0);
        DisplayProperties("Dataset Detail", oSelElem, "true");
    }
    else {
        //SUMMARY
        var oSelElem = editor.getSelection().getParentElement();
        //alert("parent tagname = " + oSelElem.getParentElement().id);
        if (oSelElem.id.toLowerCase() == "tbldataset_summary") {
            //oSelElem.setAttribute("datasource", svalue, 0);
            //-SQL --
            if (svalue.toLowerCase() == "(sql query)") {
                var SQLQuery = prompt("SQL Query:");
                if (SQLQuery != null && SQLQuery != "") {
                    oSelElem.setAttribute("datasource", SQLQuery, 0);
                }
            }
            else {
                oSelElem.setAttribute("datasource", svalue, 0);
            }
        }
        DisplayProperties("Dataset Summary", oSelElem, "true");
    }
}

function SetDatasetDetailProp(PropName, svalue) {
    //var editor = GetRadEditor("editor1")
    var editor = $find("editor1");
    editor.get_document().getElementById("tbldataset_detail").setAttribute(PropName, svalue, 0);
    //editor.ContentWindow.document.getElementById("tbldataset_detail").setAttribute(PropName, svalue, 0);
}

function SetDatasetFindProp(PropName, svalue) {
    var editor = $find("editor1");
    //var editor = GetRadEditor("editor1")
    editor.get_document().getElementById("tbldataset_find").setAttribute(PropName, svalue, 0);
}

function SetDatasetSummaryProp(PropName, svalue) {
    var editor = $find("editor1");
    //var editor = GetRadEditor("editor1")
    //editor.SetFocus();
    //var oSelElem = editor.GetSelection().GetParentElement();
    var oSelElem = editor.getSelection().getParentElement();
    //alert("oSelElem.tagname = " + oSelElem.tagName);
    //alert("oSelElem.getParentElement().tagname = " + oSelElem.getParentElement().tagName);
    //if(RadEditorNamespace.Utils.GetElementParentByTag(oSelElem,"TABLE")!=null)
    if (oSelElem.id.toLowerCase() == "tbldataset_summary") {
        oSelElem.setAttribute(PropName, svalue, 0);
        //        var oSelParent = RadEditorNamespace.Utils.GetElementParentByTag(oSelElem,"TABLE")
        //        if(oSelParent.id.toLowerCase()=="tbldataset_summary")
        //            {
        //            //--DATASET SUMMARY, or DETAIL--
        //           	oSelParent.setAttribute(PropName,svalue,0);
        //            }
        //        
    }
    else {
        alert("Dataset Object Not Selected. Please re-reselect and try again.")
    }

    //change the pagechanged flag
    document.getElementById('txtpagechanged').value = "true";
    UpdateSaveColor()
}

function SetFieldProp(PropName, sFieldName, sFieldType, sValue) {
    //alert("value = " + sValue);
    //var editor = GetRadEditor("editor1")
    var editor = $find("editor1");
    if (PropName == "defaultvalue") {
        editor.get_document().getElementById(sFieldName).value = sValue;
        editor.get_document().getElementById(sFieldName).setAttribute("defaultvalue", sValue, 0);
    }
    //else if (PropName == "hiddenfield") {editor.ContentWindow.document.getElementById(sFieldName).setAttribute("hiddenfield",sValue,0)}
    else if (PropName == "width") { editor.get_document().getElementById(sFieldName).style.width = sValue }
    else if (PropName == "height") { editor.get_document().getElementById(sFieldName).style.height = sValue; }
    else if (PropName == "disabled") { editor.get_document().getElementById(sFieldName).setAttribute("fieldlocked", sValue.toString(), 0) }
    else if (PropName == "required") { editor.get_document().getElementById(sFieldName).setAttribute("fieldrequired", sValue.toString(), 0) }
    else if (PropName == "showall") { editor.get_document().getElementById(sFieldName).setAttribute("showall", sValue.toString(), 0) }

    //change the pagechanged flag
    document.getElementById('txtpagechanged').value = "true";
    UpdateSaveColor()
}


function isCheckboxArray() {
    //if (document.Form1.skinhide.length)
    if (document.getElementById("Form1").skinhide.length) {
        return true;
    }
}

function CheckHiddenLockedSkins(node) {
    //alert("document.getElementById(Form1) = " + document.getElementById("Form1"))
    //if the list doesn't exist then exit (lite & standard edition)
    //if (document.Form1.skinhide == null) {return;}
    if (document.getElementById("Form1").skinhide == null) { return; }

    var skinname = "";
    var iSkinCount = 1
    //var SkinHideList = document.Form1.skinhide;
    //var SkinLockList = document.Form1.skinlock;
    var SkinHideList = document.getElementById("Form1").skinhide;
    var SkinLockList = document.getElementById("Form1").skinlock;
    //determine how many skins are listed. The function 'isCheckboxArray' is called because an error will occur if there is only one checkbox in the array.
    if (isCheckboxArray() == true) {
        //iSkinCount = document.Form1.skinhide.length;
        iSkinCount = document.getElementById("Form1").skinhide.length;
    }
    else {
        iSkinCount = 1
    }
    //Initially uncheck all skins
    if (iSkinCount > 1) {
        for (i = 0; i < iSkinCount; i++) {
            SkinHideList[i].checked = false;
            SkinLockList[i].checked = false;
        }
    }
    else {
        SkinHideList.checked = false;
        SkinLockList.checked = false;
    }
    //get the hidden skin list from the node value
    var hiddenskins = getValueItem(node, "skinhide");
    hiddenskins = hiddenskins.toLowerCase();
    var lockedskins = getValueItem(node, "skinlock");
    lockedskins = lockedskins.toLowerCase();
    //Check skins that are hidden
    if (iSkinCount > 1) {
        for (i = 0; i < iSkinCount; i++) {
            skinname = SkinHideList[i].value + ","
            //Hidden for Skin
            if (hiddenskins.indexOf(skinname.toLowerCase()) == -1) {
                SkinHideList[i].checked = false;
            }
            else {
                SkinHideList[i].checked = true;
            }
            //Locked for Skin
            if (lockedskins.indexOf(skinname.toLowerCase()) == -1) {
                SkinLockList[i].checked = false;
            }
            else {
                SkinLockList[i].checked = true;
            }
        }
    }
    else {
        skinname = SkinHideList.value + ","
        //Hidden for Skin
        if (hiddenskins.indexOf(skinname.toLowerCase()) == -1) {
            SkinHideList.checked = false;
        }
        else {
            SkinHideList.checked = true;
        }
        //Locked for Skin
        if (lockedskins.indexOf(skinname.toLowerCase()) == -1) {
            SkinLockList.checked = false;
        }
        else {
            SkinLockList.checked = true;
        }
    }
}


function DeleteField(sDatasetTable, sFieldName) {
    //Ask the user if they are sure.
    if (confirm("Delete the field '" + sFieldName + "'?") == false) {
        return;
    }

    var http = false;
    var reqstring = "projectname=" + GetProjectName();
    reqstring = reqstring + "&action=deletefield";
    reqstring = reqstring + "&datasettable=" + sDatasetTable;
    reqstring = reqstring + "&fieldname=" + sFieldName;
    if (navigator.appName == "Microsoft Internet Explorer") { http = new ActiveXObject("Microsoft.XMLHTTP"); } else { http = new XMLHttpRequest(); }
    http.onreadystatechange = function() {
        if (http.readyState == 4) {
            if (http.status == 200) {
                //After the field has been deleted, refresh the field list.
                var oSelElem = GetRadEditor("editor1").ContentWindow.document.getElementById("tbldataset_detail");
                DisplayProperties("Dataset Detail", oSelElem, "true");
            }
            else {
                alert("Error: " + http.status + http.responseText);
            }
        }
    }
    http.open("POST", "../_engine/AjaxAction.aspx", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send(reqstring);

}

function RenameField(sDatasetTable, sOldFieldName) {
    //Prompt for the new fieldname
    var sNewFieldName = prompt("Please enter a new name for the field.", sOldFieldName);
    //Validate the fieldname
    var sMsg = ValidateName(sNewFieldName, "field")
    if (sMsg != "") {
        alert(sMsg);
        return false;
    }

    var http = false;
    var reqstring = "projectname=" + GetProjectName();
    reqstring = reqstring + "&action=renamefield";
    reqstring = reqstring + "&datasettable=" + sDatasetTable;
    reqstring = reqstring + "&oldfieldname=" + sOldFieldName;
    reqstring = reqstring + "&newfieldname=" + sNewFieldName;
    if (navigator.appName == "Microsoft Internet Explorer") { http = new ActiveXObject("Microsoft.XMLHTTP"); } else { http = new XMLHttpRequest(); }
    http.onreadystatechange = function() {
        if (http.readyState == 4) {
            if (http.status == 200) {
                //After the field has been deleted, refresh the field list.
                var oSelElem = GetRadEditor("editor1").ContentWindow.document.getElementById("tbldataset_detail");
                DisplayProperties("Dataset Detail", oSelElem, "true");
            }
            else {
                alert("Error: " + http.status + http.responseText);
            }
        }
    }
    http.open("POST", "../_engine/AjaxAction.aspx", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send(reqstring);

}

function RenameTable(sOldTableName) {
    //Prompt for the new table name
    var sNewTableName = prompt("Please enter a new name for the dataset table.", sOldTableName);
    //Validate the Table name
    var sMsg = ValidateName(sNewTableName, "dataset table")
    if (sMsg != "") {
        alert(sMsg);
        return false;
    }
    var http = false;
    var reqstring = "projectname=" + GetProjectName();
    reqstring = reqstring + "&action=renametable";
    reqstring = reqstring + "&datasettable=" + sOldTableName;
    reqstring = reqstring + "&newtablename=" + sNewTableName;
    if (navigator.appName == "Microsoft Internet Explorer") { http = new ActiveXObject("Microsoft.XMLHTTP"); } else { http = new XMLHttpRequest(); }
    http.onreadystatechange = function() {
        if (http.readyState == 4) {
            if (http.status == 200) {
                //After the table has been renamed, refresh the Table list.
                var oSelElem = GetRadEditor("editor1").ContentWindow.document.getElementById("tbldataset_detail");
                oSelElem.setAttribute("datasource", sNewTableName, 0);
                DisplayProperties("Dataset Detail", oSelElem, "true");
            }
            else {
                alert("Error: " + http.status + http.responseText);
            }
        }
    }
    http.open("POST", "../_engine/AjaxAction.aspx", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send(reqstring);

}

function DeleteTable(sTableName) {
    //Ask the user if they are sure.
    if (confirm("Delete the dataset table '" + sTableName + "'?") == false) {
        return;
    }

    var http = false;
    var reqstring = "projectname=" + GetProjectName();
    reqstring = reqstring + "&action=deletetable";
    reqstring = reqstring + "&datasettable=" + sTableName;
    if (navigator.appName == "Microsoft Internet Explorer") { http = new ActiveXObject("Microsoft.XMLHTTP"); } else { http = new XMLHttpRequest(); }
    http.onreadystatechange = function() {
        if (http.readyState == 4) {
            if (http.status == 200) {
                //After the table has been deleted, refresh the Table list.
                var oSelElem = GetRadEditor("editor1").ContentWindow.document.getElementById("tbldataset_detail");
                oSelElem.setAttribute("datasource", "", 0);
                DisplayProperties("Dataset Detail", oSelElem, "true");
            }
            else {
                alert("Error: " + http.status + http.responseText);
            }
        }
    }
    http.open("POST", "../_engine/AjaxAction.aspx", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send(reqstring);

}


function InsertExistingField(sFieldName, sFieldType, stype) {
    //Get a reference to the editor
    var editor = $find("editor1");
    //--DATASET SUMMARY--
    if (stype == "summary") {
        editor.pasteHtml('<span class="SummaryField">[open:' + sFieldName + ']</span>');
    }
    else {
        //--DATASET FIND or DETAIL--
        var sFindPrefix = "";
        if (stype == "find") {
            //sFindPrefix = "find_"
            var sFieldHTML = '<span class="fieldlabel">' + sFieldName + '</span><input id="find_' + sFieldName + '" class="fieldbox" name="find_' + sFieldName + '" type=text>';
        }
        else if (sFieldName.toLowerCase() == "security group") {
            var sFieldHTML = '<span class="fieldlabel">' + sFieldName + ':</span><select id="' + sFieldName + '" name="' + sFieldName + '" class="fieldbox"></select>'
        }

        else {
            if (sFieldType == "DBTYPE_WVARCHAR") {
                //TEXT
                var sFieldHTML = '<span class="fieldlabel">' + sFieldName + '</span><input id="' + sFieldName + '" class="fieldbox" name="' + sFieldName + '" type=text>';
            }
            else if (sFieldType == "DBTYPE_DATE") {
                //DATE
                var sFieldHTML = '<span class="fieldlabel">' + sFieldName + '</span><input id="' + sFieldName + '" class="fieldbox" name="' + sFieldName + '" type=date>';
            }
            else if (sFieldType == "DBTYPE_R8") {
                //NUMBER
                var sFieldHTML = '<span class="fieldlabel">' + sFieldName + '</span><input id="' + sFieldName + '" class="fieldbox" name="' + sFieldName + '" type=number>';
            }
            else if (sFieldType == "DBTYPE_BOOL") {
                //CHECKBOX
                var sFieldHTML = '<span class="fieldlabel">' + sFieldName + '</span><input id="' + sFieldName + '" class="fieldcheckbox" type="checkbox" name="' + sFieldName + '" >';
            }
            else if (sFieldType == "DBTYPE_WLONGVARCHAR") {
                //MEMO
                var sFieldHTML = '<span class="fieldlabel" style="height:44px">' + sFieldName + '</span><textarea id="' + sFieldName + '" class="fieldmemo" name="' + sFieldName + '"></textarea>';
            }
        }


        //Insert the HTML
        //If the 'dataset detail' panel is selected then paste to the current cursor position, otherwise insert at the bottom.
        //var editor = GetRadEditor("editor1")
        //var editor = $find("editor1");
        //editor.SetFocus();  
        //alert("parent = " + editor.GetSelection().GetParentElement().id)
        //var oSelElem = editor.GetSelection().GetParentElement();
        //        alert("selected element name = " + editor.getSelectedElement().parentNode.parentNode.parentNode.);
        //        var oSelElem = editor.getSelectedElement().parentNode.parentNode.parentNode;

        //        if (oSelElem.id.toLowerCase()=="tddataset_detail_fields" || oSelElem.id.toLowerCase()=="tddataset_find_fields")
        //            {
        //            window.GetRadEditor("editor1").PasteHtml(sFieldHTML+'<br>');
        //            }
        if (stype == "detail") {
            var cellHTML = editor.get_document().getElementById("tddataset_detail_fields").innerHTML;
            cellHTML = cellHTML + sFieldHTML + '<br>';
            editor.get_document().getElementById("tddataset_detail_fields").innerHTML = cellHTML;
        }
        else if (stype == "find") {
            //var cellHTML = editor.ContentWindow.document.getElementById("tddataset_find_fields").innerHTML;
            var cellHTML = editor.get_document().getElementById("tddataset_find_fields").innerHTML;
            cellHTML = cellHTML + sFieldHTML + '<br>';
            //editor.ContentWindow.document.getElementById("tddataset_find_fields").innerHTML = cellHTML; 
            editor.get_document().getElementById("tddataset_find_fields").innerHTML = cellHTML;
        }



        //If we are adding a field to the find form then also add the field to the heading row and the detail row.
        if (stype == "find") {
            //window.GetRadEditor("editor1").ContentWindow.document.getElementById("trdataset_find_header").cells[0].innerHTML = window.GetRadEditor("editor1").ContentWindow.document.getElementById("trdataset_find_header").cells[0].innerHTML + '<span class="FindHeaderLabel">'+sFieldName+'</span>';
            //window.GetRadEditor("editor1").ContentWindow.document.getElementById("trdataset_find_detail").cells[0].innerHTML = window.GetRadEditor("editor1").ContentWindow.document.getElementById("trdataset_find_detail").cells[0].innerHTML + '<span class="FindDetailField">[open:'+sFieldName+']</span>';
            editor.get_document().getElementById("trdataset_find_header").cells[0].innerHTML = editor.get_document().getElementById("trdataset_find_header").cells[0].innerHTML + '<span class="FindHeaderLabel">' + sFieldName + '</span>';
            editor.get_document().getElementById("trdataset_find_detail").cells[0].innerHTML = editor.get_document().getElementById("trdataset_find_detail").cells[0].innerHTML + '<span class="FindDetailField">[open:' + sFieldName + ']</span>';
        }
    }
}


function AddField(stype) {

    //Prompt for the fieldname
    var sFieldName = prompt('Please enter a name for the field.', stype + '1');
    //Validate the fieldname
    var sMsg = ValidateName(sFieldName, "field")
    if (sMsg != "") {
        alert(sMsg);
        return false;
    }

    var editor = $find("editor1");
    var sDatasetTable = editor.get_document().getElementById("tbldataset_detail").getAttribute("datasource");
    //Add the field using AJAX. If an error occurs report it to the user and do not add the field.
    var http = false;
    var reqstring = "projectname=" + GetProjectName();
    reqstring = reqstring + "&action=addfield";
    reqstring = reqstring + "&datasettable=" + sDatasetTable;
    reqstring = reqstring + "&fieldtype=" + stype;
    reqstring = reqstring + "&fieldname=" + sFieldName;
    if (navigator.appName == "Microsoft Internet Explorer") { http = new ActiveXObject("Microsoft.XMLHTTP"); } else { http = new XMLHttpRequest(); }
    http.onreadystatechange = function() {
        if (http.readyState == 4) {
            if (http.status == 200) {
                if (stype == "text") { var sFieldHTML = '<span class="fieldlabel">' + sFieldName + ':</span><input id="' + sFieldName + '" name="' + sFieldName + '" class="fieldbox" type="text">' }
                else if (stype == "checkbox") { var sFieldHTML = '<span class="fieldlabel">' + sFieldName + ':</span><input id="' + sFieldName + '" name="' + sFieldName + '" class="fieldcheckbox" type="checkbox">' }
                else if (stype == "date") { var sFieldHTML = '<span class="fieldlabel">' + sFieldName + ':</span><input id="' + sFieldName + '" name="' + sFieldName + '" class="fieldbox" type="datex">' }
                else if (stype == "number") { var sFieldHTML = '<span class="fieldlabel">' + sFieldName + ':</span><input id="' + sFieldName + '" name="' + sFieldName + '" class="fieldbox" type="number">' }
                else if (stype == "memo") { var sFieldHTML = '<span class="fieldlabel" style="height:44px">' + sFieldName + ':</span><textarea id="' + sFieldName + '" name="' + sFieldName + '" class="fieldmemo"></textarea>' }
                else if (stype == "list") { var sFieldHTML = '<span class="fieldlabel">' + sFieldName + ':</span><select id="' + sFieldName + '" name="' + sFieldName + '" class="fieldlist"></select>' }
                //If the 'dataset detail' panel is selected then paste to the current cursor position, otherwise insert at the bottom.
                //alert("parent id = " + editor.getSelectedElement().parentNode.parentNode.id)
                if (editor.getSelectedElement().parentNode.parentNode.parentNode.id == "tbldataset_detail") {
                    //Add to the current cursor position
                    editor.pasteHtml(sFieldHTML + '<br>');
                }
                else {
                    //Add to the bottom of the form
                    var cellHTML = editor.get_document().getElementById("tddataset_detail_fields").innerHTML;
                    cellHTML = cellHTML + sFieldHTML + '<br>';
                    editor.get_document().getElementById("tddataset_detail_fields").innerHTML = cellHTML;
                }

                //var editor = GetRadEditor("editor1")
                //	            var oSelElem = editor.GetSelection().GetParentElement();
                //                if (RadEditorNamespace.Utils.GetElementParentByTag(oSelElem,"TABLE")!=null)
                //                    {
                //                    var oSelElem = RadEditorNamespace.Utils.GetElementParentByTag(oSelElem,"TABLE")
                //                    }
                //	            if (oSelElem.id.toLowerCase()=="tbldataset_detail")
                //	                {
                //                    window.GetRadEditor("editor1").PasteHtml(sFieldHTML+'<br>');
                //	                }
                //	            else
                //	                {
                //                   	var cellHTML = editor.ContentWindow.document.getElementById("tddataset_detail_fields").innerHTML;
                //                    //cellHTML = cellHTML + '<span class="fieldlabel">'+sFieldName+':</span>'+sFieldHTML+'<br>';
                //                    cellHTML = cellHTML + sFieldHTML+'<br>';
                //                    editor.ContentWindow.document.getElementById("tddataset_detail_fields").innerHTML = cellHTML; 
                //	                }

                //refresh the field list
                var oSelElem = editor.get_document().getElementById("tbldataset_detail");
                DisplayProperties("Dataset Detail", oSelElem, "true");

            }
            else {
                alert("Error: " + http.status + http.responseText);
            }
        }
    }
    http.open("POST", "../_engine/AjaxAction.aspx", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send(reqstring);
}


//------------------------------------------------------------------------------------------------ STARTUP FUNCTIONS ----------------------------
//function Evaluate(sTemplateName)
//    {
//    
//	//Get the edition to evaluate
//    var edition=document.getElementById("lstEvalEdition").options[document.getElementById("lstEvalEdition").selectedIndex].text;

//	//Get the index using AJAX
//	var http = false;
//    var reqstring = "action=evaluate";
//    reqstring = reqstring + "&projectname="+GetProjectName();
//    reqstring = reqstring + "&edition="+edition;
//    reqstring = reqstring + "&templatename="+sTemplateName;
//    
//    if(navigator.appName == "Microsoft Internet Explorer") {http = new ActiveXObject("Microsoft.XMLHTTP");} else  {http = new XMLHttpRequest();} 
//    http.onreadystatechange=function() 
//        {
//        if(http.readyState == 4) 
//            {
//            if (http.status == 200) 
//                {
//                 window.location.href="default.aspx"
//                }
//            else 
//                {
//                alert("Error: "+http.status+http.responseText);
//                }
//            }
//        }
//    http.open("POST", "../_engine/ajaxaction.aspx", true);
//    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//    http.send(reqstring);
//    }

//function Activate(sTemplateName)
//    {
//   
//	//Get the key
//    var key=document.getElementById("txtActivationKey").value;
//	//Get the index using AJAX
//	var http = false;
//    var reqstring = "action=activate&key="+key;
//    reqstring = reqstring + "&projectname="+GetProjectName();
//    reqstring = reqstring + "&templatename="+sTemplateName;
//    if(navigator.appName == "Microsoft Internet Explorer") {http = new ActiveXObject("Microsoft.XMLHTTP");} else  {http = new XMLHttpRequest();} 
//    http.onreadystatechange=function() 
//        {
//        if(http.readyState == 4) 
//            {
//            if (http.status == 200) 
//                {
//                //Determine if the key is valid
//                var sresponse=http.responseText;
//                if (sresponse.toLowerCase().indexOf("key is valid") != -1)
//                    {
//                    //Show the edition
//                    sEdition = sresponse.substring(sresponse.indexOf("~")+1,sresponse.lastIndexOf("~"));
//                    if (document.getElementById("spaneditionvar") != null) {document.getElementById("spaneditionvar").innerHTML = sEdition}

//                    //Close the activation key prompt
//                    CloseDialog();
//                        
//                    alert(sEdition + " Successfully Activated.") 
//                    }
//                else
//                    {
//                    alert("The key entered is not valid.") 
//                    }
//                }
//            else 
//                {
//                alert("Error: "+http.status+http.responseText);
//                }
//            }
//        }
//    http.open("POST", "../_engine/ajaxaction.aspx", true);
//    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//    http.send(reqstring);
//}


function GetBrowserHeight() {
    var viewportheight;
    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerHeight != 'undefined') {
        viewportheight = window.innerHeight
    }
    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientHeight != 'undefined' && document.documentElement.clientHeight != 0) {
        viewportheight = document.documentElement.clientHeight
    }
    // older versions of IE
    else {
        viewportheight = document.getElementsByTagName('body')[0].clientHeight
    }
    //return the height
    return viewportheight;
}

function GetBrowserWidth() {
    var viewportwidth;
    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth != 'undefined') {
        viewportwidth = window.innerWidth
    }
    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
        viewportwidth = document.documentElement.clientWidth
    }
    // older versions of IE
    else {
        viewportwidth = document.getElementsByTagName('body')[0].clientWidth
    }
    //return the height
    return viewportwidth;
}

function Prop_ShowStandardTab() {
    //Show the standard properties tab
    document.getElementById("trproperties_standard").style.display = "";
    document.getElementById("trproperties_visibility").style.display = "none";
    document.getElementById("tblpropertytabs").style.backgroundImage = "url(../_engine/images/tabs_properties.gif)"
}

function Prop_ShowVisibilityTab() {
    //Show the page visibility tab
    document.getElementById("trproperties_standard").style.display = "none";
    document.getElementById("trproperties_visibility").style.display = "";
    document.getElementById("tblpropertytabs").style.backgroundImage = "url(../_engine/images/tabs_visibility.gif)"
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

function SetHostedEdition() {
    var projectname = GetProjectName();

    //Show the transparent layer
    document.getElementById("divtransparency").style.display = "";

    //Get the selected edition
    var sSelectedIndex = document.getElementById("lstHostedEdition").options.selectedIndex
    var sSelectedValue = document.getElementById("lstHostedEdition").options[sSelectedIndex].value;

    //call AjaxAction.aspx to set the 'appedition' session variable via AJAX
    var http = false;
    var reqstring = "action=changehostededition";
    reqstring = reqstring + "&projectname=" + projectname;
    reqstring = reqstring + "&username=" + document.getElementById("txtactiveusername").value;
    reqstring = reqstring + "&password=" + document.getElementById("txtactivepassword").value;
    reqstring = reqstring + "&edition=" + sSelectedValue;
    if (navigator.appName == "Microsoft Internet Explorer") { http = new ActiveXObject("Microsoft.XMLHTTP"); } else { http = new XMLHttpRequest(); }
    http.onreadystatechange = function() {
        if (http.readyState == 4) {
            if (http.status == 200) {
                //after the session variable has been set, reload the page. 
                //Note: the page is reloaded, not submitted so that the page is not added to history in Firefox2 and IE7+
                window.location.href = "default.aspx"
            }
            else {
                alert("Error: " + http.status + http.responseText);
            }
        }
    }
    http.open("POST", "../_engine/AjaxAction.aspx", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send(reqstring);
}


//function ShowLanguage(lang) {
//    //var lang=obj.options[obj.options.selectedIndex].value;
//    var url=window.location;
//    var googleurl="http://translate.google.ca/translate";
//    window.location = googleurl + "?hl=en&ie=UTF-8&sl=en&tl=" + lang + "&u=" + url + "&rurl=translate.google.ca&twu=1&usg=ALkJrhhg-pzdTnHmzu9wAzalFDM_lZBD_Q";
//}

//function setCookie(c_name,value,expiredays)
//    {
//    var exdate=new Date();
//    exdate.setDate(exdate.getDate()+expiredays);
//    document.cookie=c_name+ "=" +escape(value)+
//    ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
//    }    

//function getCookie(c_name)
//    {
//    if (document.cookie.length>0)
//      {
//      c_start=document.cookie.indexOf(c_name + "=");
//      if (c_start!=-1)
//        {
//        c_start=c_start + c_name.length+1;
//        c_end=document.cookie.indexOf(";",c_start);
//        if (c_end==-1) c_end=document.cookie.length;
//        return unescape(document.cookie.substring(c_start,c_end));
//        }
//      }
//    return "";
//    }

//function set_cookie ( name, value, exp_y, exp_m, exp_d, path, domain, secure )
//    {
//      var cookie_string = name + "=" + escape ( value );

//      if ( exp_y )
//      {
//        var expires = new Date ( exp_y, exp_m, exp_d );
//        cookie_string += "; expires=" + expires.toGMTString();
//      }

//      if ( path )
//            cookie_string += "; path=" + escape ( path );

//      if ( domain )
//            cookie_string += "; domain=" + escape ( domain );
//      
//      if ( secure )
//            cookie_string += "; secure";
//      
//      document.cookie = cookie_string;
//    }


//function get_cookie ( cookie_name )
//    {
//      var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );

//      if ( results )
//        return ( unescape ( results[2] ) );
//      else
//        return null;
//    }
