//function Highlight(pageid) {
//    if (parent.HighlightPage != null)
//     {parent.HighlightPage(pageid)}

//}

function ReloadSessionandPage(projectname,url)
    {
    //Reload session variables and then reload the page
	var http = false;
    var reqstring = "action=LoadSession";
    reqstring = reqstring + "&projectname="+projectname;
    //alert("parent = " + parent.document.getElementById("txtactiveusername"));
    if (parent.document.getElementById("txtactiveusername") != null)
        {
        reqstring = reqstring + "&username="+parent.document.getElementById("txtactiveusername").value;
        reqstring = reqstring + "&password="+parent.document.getElementById("txtactivepassword").value;
        }
   	var d = new Date()
    reqstring = reqstring + "&dummy="+d.getHours()+d.getMinutes()+d.getSeconds();
    //alert("reqstring = " + reqstring);

    if(navigator.appName == "Microsoft Internet Explorer") {http = new ActiveXObject("Microsoft.XMLHTTP");} else  {http = new XMLHttpRequest();} 
    http.onreadystatechange=function() 
        {
        if(http.readyState == 4) 
            {
            if (http.status == 200) 
                {
                //load the url into the frame
                //document.src = url;
           		window.location.href=url;
                }
            else 
                {
                alert("Error: "+http.status+http.responseText);
                }
            }
        }
    http.open("POST", "../_engine/ajaxaction.aspx", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send(reqstring);
    }


//function ShowCommentDialog(sUserName)
//    {
//    //Determine if the page is in a frame or not
//    if (document.getElementById("tblDialogWindow") != null)
//        {
//        var doc=document;
//        }
//     else if (parent.document.getElementById("tblDialogWindow") != null)
//        {
//        var doc=parent.document;
//        }

//    if (doc != null)
//        {
//        var s="";
//        s = s + "<table style='width:100%;' cellpadding='0' cellspacing='0' border='0'>";
//        s = s + "<tr><td><textarea id='txtAddComment' style='width:482px;height:174px;font-family:tahoma,arial;border:0px solid transparent'></textarea></td></tr>";
//        s = s + "<tr style='height:30px'><td style='background-color:#DDDDDD;border-top:solid 1px #CCCCCC;' align='right'>";
//        if (sUserName.toLowerCase() != "public" && sUserName !="")
//            {
//            s = s + "Personal Comment only visible to " + sUserName + "<input id='chkpersonal' type='checkbox'/>&nbsp;&nbsp;";
//            }
//        s = s + "<input type='button' id='btnCommentOK' value='Add Comment' onclick='AddComment()'/>"
//        s = s + "</td></tr>";

//        doc.getElementById("spanheading").innerHTML = "Add Comment";
//        doc.getElementById("tblDialogWindow").style.width = "500px"
//        doc.getElementById("tblDialogWindow").style.height = "250px"
//        doc.getElementById("tddialog").innerHTML = s;
//        doc.getElementById("tbldialog").style.display = "";
//        doc.getElementById("divtransparency").style.display = "";
//        doc.getElementById("txtAddComment").focus();
//        }
//    }
    
//   function AddComment()
//    {
//    var bPersonal=false;
//    //Determine if the page is in a frame or not
//    if (document.getElementById("tblDialogWindow") != null)
//        {
//        var sComment=document.getElementById("txtAddComment").value;
//        if (document.getElementById("chkpersonal") != null) {bPersonal=document.getElementById("chkpersonal").checked}
//        var sPageID = TreeView1.SelectedNode.ID;
//        //Hide the comment dialog
//        document.getElementById("tddialog").innerHTML = "";
//        document.getElementById("tbldialog").style.display = "none";
//        document.getElementById("divtransparency").style.display = "none";
//        }
//     else if (parent.document.getElementById("tblDialogWindow") != null)
//        {
//        var sComment=parent.document.getElementById("txtAddComment").value;
//        if (parent.document.getElementById("chkpersonal") != null) {bPersonal=parent.document.getElementById("chkpersonal").checked}
//        var sPageID = parent.TreeView1.SelectedNode.ID
//        //Hide the comment dialog
//        parent.document.getElementById("tddialog").innerHTML = "";
//        parent.document.getElementById("tbldialog").style.display = "none";
//        parent.document.getElementById("divtransparency").style.display = "none";
//        }

//    if (sComment != null && sComment != "" && sPageID != null)
//        {
//      	//Add comment to page using AJAX
//	    var http = false;
//        var reqstring = "action=addcomment";
//        reqstring = reqstring + "&projectname="+GetProjectName();
//        reqstring = reqstring + "&username="+getActiveUsername();
//        reqstring = reqstring + "&password="+getActivePassword();
//        reqstring = reqstring + "&pageid="+sPageID;
//        //alert("comment = " + sComment);
//        reqstring = reqstring + "&comment="+encodeURIComponent(sComment);
//        //alert("personal = " + bPersonal);
//        reqstring = reqstring + "&personal="+bPersonal;
//        if(navigator.appName == "Microsoft Internet Explorer") {http = new ActiveXObject("Microsoft.XMLHTTP");} else  {http = new XMLHttpRequest();} 
//        http.onreadystatechange=function() 
//            {
//            if(http.readyState == 4) 
//                {
//                if (http.status == 200) 
//                    {
//                    var sresponse=http.responseText;
//                    //If the default status is 'pending' then inform the user
//                    if (sresponse.toLowerCase().indexOf("pending") != -1)
//                        {
//                        alert("Your comment has been submitted, and will be published after being reviewed.") 
//                        }
//                    else
//                        {
//                        //Reload the page so that the comments are displayed
//                        loadpage(sPageID);
//                        }
//                    }
//                else 
//                    {
//                    alert("Error: "+http.status+http.responseText);
//                    }
//                }
//            }
//        http.open("POST", "../_engine/ajaxaction.aspx", true);
//        http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//        http.send(reqstring);
//    
//        }

//    }

    
function ChangeCommentStatus(commentid)
    {
    var commentstatus = document.getElementById("lstcommentstatus"+commentid).options[document.getElementById("lstcommentstatus"+commentid).selectedIndex].text;

    //alert("change status " + commentid)
    //alert("new status " + commentstatus)
    //Change comment status using AJAX
    var http = false;
    var reqstring = "action=changecommentstatus";
    reqstring = reqstring + "&projectname="+GetProjectName_Page();
    reqstring = reqstring + "&username="+getActiveUsername();
    reqstring = reqstring + "&password="+getActivePassword();
    reqstring = reqstring + "&commentid="+commentid;
    reqstring = reqstring + "&status="+commentstatus;
    
    if(navigator.appName == "Microsoft Internet Explorer") {http = new ActiveXObject("Microsoft.XMLHTTP");} else  {http = new XMLHttpRequest();} 
    http.onreadystatechange=function() 
        {
        if(http.readyState == 4) 
            {
            if (http.status == 200) 
                {
                //Don't need to do anything
                }
            else 
                {
                alert("Error: "+http.status+http.responseText);
                }
            }
        }
    http.open("POST", "../_engine/ajaxaction.aspx", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send(reqstring);
    }
    
function DeleteComment(commentid)
    {
    if (confirm("Delete Comment?") == false)
        {
        return;
        }
    
   	//Delete reader comment using AJAX
    var http = false;
    var reqstring = "action=deletecomment";
    reqstring = reqstring + "&projectname="+GetProjectName_Page();
    reqstring = reqstring + "&username="+getActiveUsername();
    reqstring = reqstring + "&password="+getActivePassword();
    reqstring = reqstring + "&commentid="+commentid;
    //alert("reqstring = " + reqstring);
    if(navigator.appName == "Microsoft Internet Explorer") {http = new ActiveXObject("Microsoft.XMLHTTP");} else  {http = new XMLHttpRequest();} 
    http.onreadystatechange=function() 
        {
        if(http.readyState == 4) 
            {
            if (http.status == 200) 
                {
                //Hide the deleted comment
                document.getElementById("trComment"+commentid).style.display="none";
                }
            else 
                {
                alert("Error: "+http.status+http.responseText);
                }
            }
        }
    http.open("POST", "../_engine/ajaxaction.aspx", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send(reqstring);

    }

function ClearActivityLog()
    {
    //Ask the user if they are sure
    if (confirm("Delete all entries in the activity log?") == false)
        {
        return;
        }

    //Do this from the server using AJAX
    var http = false;
    var reqstring = "action=clearactivitylog";
    reqstring = reqstring + "&projectname="+GetProjectName_Page();
    reqstring = reqstring + "&username="+getActiveUsername();
    reqstring = reqstring + "&password="+getActivePassword();
    
    if(navigator.appName == "Microsoft Internet Explorer") {http = new ActiveXObject("Microsoft.XMLHTTP");} else  {http = new XMLHttpRequest();} 
    http.onreadystatechange=function() 
        {
        if(http.readyState == 4) 
            {
            if (http.status == 200) 
                {
                //Reload the page so that the comments are displayed
                var sPageID = parent.TreeView1.SelectedNode.ID
                parent.loadpage(sPageID);
                }
            else 
                {
                alert("Error: "+http.status+http.responseText);
                }
            }
        }
    http.open("POST", "../_engine/ajaxaction.aspx", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send(reqstring);
    }

    
function getActiveUsername()
    {
    //get the active username
    if (parent.document.getElementById("txtactiveusername") != null)
        {
        //get active username from parent frame
        return parent.document.getElementById("txtactiveusername").value;
        }
    else
        {
        //get active username from this frame
        return susername = document.getElementById("txtactiveusername").value;
        }
    }
    
function getActivePassword()
    {
    //get the active password
    if (parent.document.getElementById("txtactivepassword") != null)
        {
        //get active password from parent frame
        return parent.document.getElementById("txtactivepassword").value;
        }
    else
        {
        //get active password from this frame
        return susername = document.getElementById("txtactivepassword").value;
        }
    }

/*
 * This is the function that actually highlights a text string by
 * adding HTML tags before and after all occurrences of the search
 * term. You can pass your own tags if you'd like, or if the
 * highlightStartTag or highlightEndTag parameters are omitted or
 * are empty strings then the default <font> tags will be used.
 */
function doHighlight(bodyText, searchTerm, highlightStartTag, highlightEndTag) 
{
  // the highlightStartTag and highlightEndTag parameters are optional
  if ((!highlightStartTag) || (!highlightEndTag)) {
    highlightStartTag = "<font style='background-color:yellow;'>";
    highlightEndTag = "</font>";
  }
  
  // find all occurences of the search term in the given text,
  // and add some "highlight" tags to them (we're not using a
  // regular expression search, because we want to filter out
  // matches that occur within HTML tags and script blocks, so
  // we have to do a little extra validation)
  var newText = "";
  var i = -1;
  var lcSearchTerm = searchTerm.toLowerCase();
  var lcBodyText = bodyText.toLowerCase();
    
  while (bodyText.length > 0) {
    i = lcBodyText.indexOf(lcSearchTerm, i+1);
    if (i < 0) {
      newText += bodyText;
      bodyText = "";
    } else {
      // skip anything inside an HTML tag
      if (bodyText.lastIndexOf(">", i) >= bodyText.lastIndexOf("<", i)) {
        // skip anything inside a <script> block
        if (lcBodyText.lastIndexOf("/script>", i) >= lcBodyText.lastIndexOf("<script", i)) {
          newText += bodyText.substring(0, i) + highlightStartTag + bodyText.substr(i, searchTerm.length) + highlightEndTag;
          bodyText = bodyText.substr(i + searchTerm.length);
          lcBodyText = bodyText.toLowerCase();
          i = -1;
        }
      }
    }
  }
  
  return newText;
}


/*
 * This is sort of a wrapper function to the doHighlight function.
 * It takes the searchText that you pass, optionally splits it into
 * separate words, and transforms the text on the current web page.
 * Only the "searchText" parameter is required; all other parameters
 * are optional and can be omitted.
 */
function highlightSearchTerms(searchText, treatAsPhrase, warnOnFailure, highlightStartTag, highlightEndTag) {
  // if the treatAsPhrase parameter is true, then we should search for 
  // the entire phrase that was entered; otherwise, we will split the
  // search string so that each word is searched for and highlighted
    // individually
  if (treatAsPhrase) {
    searchArray = [searchText];
  } else {
    searchArray = searchText.split(" ");
  }

  //Make sure that all toggle panels are expanded
  if (document.getElementById("trTogglePanel_Body") != null) {
      expand_Toggle_Panels();
  }
  
  //if the tag divpage exists, this indicates that the format is 'flat' and we should get and set content from divpage
  if (document.getElementById("divpage") != null)
    {
    //-- DIVPAGE --
    var thispage=document.getElementById("divpage");
    }
  else
    {
    //-- ENTIRE PAGE -- 
    var thispage=document.body;
    }
  
  if (!document.body || typeof(thispage.innerHTML) == "undefined") {
    if (warnOnFailure) {
      alert("Sorry, for some reason the text of this page is unavailable. Searching will not work.");
    }
    return false;
  }

  //var bodyText = document.body.innerHTML;
  var bodyText = thispage.innerHTML;
  
  //var bodyText = document.getElementById("divpage").innerHTML;
  //alert("bodyText = "+bodyText);
  for (var i = 0; i < searchArray.length; i++) {
    bodyText = doHighlight(bodyText, searchArray[i], highlightStartTag, highlightEndTag);
  }
  //document.body.innerHTML = bodyText;
  thispage.innerHTML = bodyText;
  //document.getElementById("divpage").innerHTML = bodyText;
  return true;
}

function getSearchText()
    {
    var SearchText = "";
    //determine if the advanced search textbox exists
    if (document.getElementById("txtAdvancedSearch") != null)
        {
        if (document.getElementById("txtAdvancedSearch").value != "")
            {
            return document.getElementById("txtAdvancedSearch").value;
            }
        }
    else if (document.getElementById("txtsearch") != null)  
        {
        if (document.getElementById("txtsearch").value != "")
            {
            return document.getElementById("txtsearch").value;
            }
        }
    }

function GetProjectName_Page()
    {
    var projectname = window.location.href;
    var ipos = projectname.lastIndexOf("/");
    projectname = projectname.substring(0,ipos);
    ipos = projectname.lastIndexOf("/");
    projectname = projectname.substring(ipos+1);
    //convert any space characters
    projectname = projectname.replace(/%20/g, " ");
    return projectname
    }
    
function SaveRecord(sRecordID)
    {
    //alert("save record id = " + sRecordID)
	document.getElementById("Form1").txtdatasetaction.value="save";
	document.getElementById("Form1").txtdatasetid.value=sRecordID;
   	document.getElementById("Form1").submit();
    }

function CancelRecord()
    {
   	document.getElementById("Form1").txtdatasetaction.value="cancel";
	document.getElementById("Form1").txtdatasetid.value="";
   	document.getElementById("Form1").submit();
    }

function AddRecord()	
	{
	//alert("Add REcord")
	document.getElementById("Form1").txtdatasetaction.value="add";
	document.getElementById("Form1").txtdatasetid.value="";
	document.getElementById("Form1").submit();
	}

function EditRecord(sRecordID)	
	{
	document.getElementById("Form1").txtdatasetaction.value="edit";
	document.getElementById("Form1").txtdatasetid.value=sRecordID;
	document.getElementById("Form1").submit();
	}

function DeleteSummaryRecord(sRecordID,sDatasetTable)	
	{
	//confirm delete
    if (confirm("Are you sure that you want to delete this record?") == false)
        {
        return;
        }
    	
	document.getElementById("Form1").submit();
	}

function DeleteRecord(sRecordID)	
	{
	//confirm delete
    if (confirm("Are you sure that you want to delete this record?") == false)
        {
        return;
        }
	
	document.getElementById("Form1").txtdatasetaction.value="delete";
	document.getElementById("Form1").txtdatasetid.value=sRecordID;
	document.getElementById("Form1").submit();
	}

function DeleteFile(sProjectName,sFolderName,sFileName,sRecordID)	
	{
    if (confirm("Delete the file '"+sFileName+"'?") == false)
		{
		return;
		}
   	//Delete reader comment using AJAX
    var http = false;
    var reqstring = "action=deletefile";
    //reqstring = reqstring + "&projectname="+GetProjectName_Page();
    reqstring = reqstring + "&projectname="+sProjectName;
    reqstring = reqstring + "&foldername="+sFolderName;
    reqstring = reqstring + "&filename="+sFileName;
    if(navigator.appName == "Microsoft Internet Explorer") {http = new ActiveXObject("Microsoft.XMLHTTP");} else  {http = new XMLHttpRequest();} 
    http.onreadystatechange=function() 
        {
        if(http.readyState == 4) 
            {
            if (http.status == 200) 
                {
                //Reload the current page
                if (sRecordID == "")
                    {
                    var surl=location.href;
                    location.href=surl;
                    }
                else
                    {
                    document.getElementById("Form1").txtdatasetaction.value="edit";
                    document.getElementById("Form1").txtdatasetid.value=sRecordID;
                    document.getElementById("form1").submit();
                    }
                }
            else 
                {
                alert("Error: "+http.status+http.responseText);
                }
            }
        }
    http.open("POST", "../_engine/ajaxaction.aspx", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send(reqstring);
	}
	

function EditList(obj,sDataset)
	{
	//alert("obj.text = "+obj.options[obj.options.selectedIndex].text);
	if(obj.options[obj.options.selectedIndex].text.toLowerCase() == "(edit list)")
		{
		//Set the index back to what it was
		obj.options.selectedIndex=obj.data;
		
		var sProjectParm="?projectname="+GetProjectName_Page();
		var sDatasetParm="&dataset="+sDataset;
		var sFieldParm="&fieldname="+obj.id;

    	//Display the valuelist editor.
		formurl = "../_engine/editlist.aspx"+sProjectParm+sDatasetParm+sFieldParm;
        //Determine if the page is in a frame or not
        if (document.getElementById("tblmain") != null) {
            //FLAT
            openNewWindow(formurl, 300, 335)
        }
        else {
            //FRAMES
            parent.openNewWindow(formurl, 300, 335)
        }
                

//        parent.document.getElementById("tddialog").innerHTML = '<iframe id="frame_tools" src="../_engine/editlist.aspx'+sProjectParm+sDatasetParm+sFieldParm+'" style="width:100%;height:100%" frameborder=0></iframe>'
//        parent.document.getElementById("tbldialog").style.display = ""
//        parent.document.getElementById("divtransparency").style.display = ""
//        parent.document.getElementById("tblDialogWindow").style.width="300px"
//        parent.document.getElementById("tblDialogWindow").style.height="335px"
//        parent.document.getElementById("spanheading").innerHTML = "Edit '" + obj.id + "' Value List"
//        parent.document.getElementById("imgcloseform").style.display = ""
		}
	}

function ShowSmallPopup(sPageURL,event) {
    //alert("document.documentElement.scrollTop = " + document.documentElement.scrollTop);
    //alert("document.body.scrollTop = " + document.body.scrollTop);
    var docwidth = document.documentElement.clientWidth;
    var docheight = document.documentElement.clientHeight;
    var boxwidth = 302;
    var boxheight = 102;
    var scrollX = document.documentElement.scrollLeft + document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop + document.body.scrollTop;
    //Position Horizontally
    if (docwidth - event.clientX < boxwidth) {
        //document.getElementById("_DivSmallPopup").style.left = event.clientX + document.documentElement.scrollLeft - boxwidth + "px";
        document.getElementById("_DivSmallPopup").style.left = event.clientX + scrollX - boxwidth + "px";
    }
    else {
        //document.getElementById("_DivSmallPopup").style.left = event.clientX + document.documentElement.scrollLeft + 15 + "px";
        document.getElementById("_DivSmallPopup").style.left = event.clientX + scrollX + 15 + "px";
    }
    //Position Vertically
    if (docheight - event.clientY < boxheight) {
        //document.getElementById("_DivSmallPopup").style.top = event.clientY + document.documentElement.scrollTop - boxheight + "px";
        document.getElementById("_DivSmallPopup").style.top = event.clientY + scrollY - boxheight + "px";
    }
    else {
        //document.getElementById("_DivSmallPopup").style.top = event.clientY + document.documentElement.scrollTop + 8 + "px";
        document.getElementById("_DivSmallPopup").style.top = event.clientY + scrollY + 8 + "px";
    }
    document.getElementById("_DivSmallPopup").innerHTML = "<iframe style='width:100%;height:100%' frameborder=0 allowTransparency='true' src='" + sPageURL + "&pagetype=popup'></iframe>"
    document.getElementById("_DivSmallPopup").style.display = ""
    document.getElementById("_DivSmallPopup").focus();
}

function ShowLargePopup(sPageURL,event) {
    var docwidth = document.documentElement.clientWidth;
    var docheight = document.documentElement.clientHeight;
    var boxwidth = 550;
    var boxheight = 300;
    var scrollX = document.documentElement.scrollLeft + document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop + document.body.scrollTop;
    //Position Horizontally
    if (docwidth - event.clientX < boxwidth) {
        document.getElementById("_DivLargePopup").style.left = event.clientX + scrollX - boxwidth + "px";
    }
    else {
        document.getElementById("_DivLargePopup").style.left = event.clientX + scrollX + 15 + "px";
    }
    //Position Vertically
    if (docheight - event.clientY < boxheight) {
        document.getElementById("_DivLargePopup").style.top = event.clientY + scrollY - boxheight + "px";
    }
    else {
        document.getElementById("_DivLargePopup").style.top = event.clientY + scrollY + 8 + "px";
    }
    document.getElementById("_DivLargePopup").innerHTML = "<iframe style='width:100%;height:100%' frameborder=0 allowTransparency='true' src='" + sPageURL + "&pagetype=popup'></iframe>"
    //document.getElementById("_DivLargePopup").style.top = event.clientY+document.body.scrollTop+8;
    //document.getElementById("_DivLargePopup").style.left  = event.clientX+document.body.scrollLeft+15;
    document.getElementById("_DivLargePopup").style.display = ""
    document.getElementById("_DivLargePopup").focus();
    }
    
function ShowMouseoverPopup(sPageURL,event) {
    var docwidth = document.documentElement.clientWidth;
    var docheight = document.documentElement.clientHeight;
    var boxwidth = 313;
    var boxheight = 177;
    var scrollX = document.documentElement.scrollLeft + document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop + document.body.scrollTop;
    //Position Horizontally
    if (docwidth - event.clientX < boxwidth) {
        document.getElementById("_DivMouseoverPopup").style.left = event.clientX + scrollX - boxwidth + "px";
    }
    else {
        document.getElementById("_DivMouseoverPopup").style.left = event.clientX + scrollX + 5 + "px";
    }
    //Position Vertically
    if (docheight - event.clientY < boxheight) {
        document.getElementById("_DivMouseoverPopup").style.top = event.clientY + scrollY - boxheight - 70 + "px";
    }
    else {
        document.getElementById("_DivMouseoverPopup").style.top = event.clientY + scrollY + 8 + "px";
    }

    document.getElementById("_DivMouseoverPopup").innerHTML = "<iframe style='width:301px;height:107px' frameborder=0 allowTransparency='true' scrolling='no' src='" + sPageURL + "&pagetype=popup'></iframe>"
    //document.getElementById("_DivMouseoverPopup").style.top = event.clientY+document.body.scrollTop-195;
    //document.getElementById("_DivMouseoverPopup").style.left  = event.clientX+document.body.scrollLeft+5;
    document.getElementById("_DivMouseoverPopup").style.display = ""
    //document.getElementById("_DivMouseoverPopup").focus();
    }
    
function HideMouseoverPopup()
    {
    document.getElementById("_DivMouseoverPopup").innerHTML = ""
    document.getElementById("_DivMouseoverPopup").style.display = "none"
    }

function ShowMouseoverPopup2(sPageURL,event) {
    var docwidth = document.documentElement.clientWidth;
    var docheight = document.documentElement.clientHeight;
    var boxwidth = 400;
    var boxheight = 300;
    var scrollX = document.documentElement.scrollLeft + document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop + document.body.scrollTop;
    //Position Horizontally
    if (docwidth - event.clientX < boxwidth) {
        document.getElementById("_DivMouseoverPopup2").style.left = event.clientX + scrollX - boxwidth + "px";
    }
    else {
        document.getElementById("_DivMouseoverPopup2").style.left = event.clientX + scrollX + 5 + "px";
    }
    //Position Vertically
    if (docheight - event.clientY < boxheight) {
        document.getElementById("_DivMouseoverPopup2").style.top = event.clientY + scrollY - boxheight - 75 + "px";
    }
    else {
        document.getElementById("_DivMouseoverPopup2").style.top = event.clientY + scrollY + 8 + "px";
    }

    document.getElementById("_DivMouseoverPopup2").innerHTML = "<iframe style='width:388px;height:230px' frameborder=0 allowTransparency='true' scrolling='no' src='" + sPageURL + "&pagetype=popup'></iframe>"
    //document.getElementById("_DivMouseoverPopup2").style.top = event.clientY+document.body.scrollTop-325;
    //document.getElementById("_DivMouseoverPopup2").style.left  = event.clientX+document.body.scrollLeft+5;
    document.getElementById("_DivMouseoverPopup2").style.display = ""
    //document.getElementById("_DivMouseoverPopup").focus();
    }
    
function HideMouseoverPopup2()
    {
    document.getElementById("_DivMouseoverPopup2").innerHTML = ""
    document.getElementById("_DivMouseoverPopup2").style.display = "none"
    }


//    function expand_Toggle_Panels() {
//        var TRs = document.getElementsByTagName("TR");
//        for (var no = 0; no < TRs.length; no++) {
//            if (TRs[no].id == "trTogglePanel_Body") {
//                TRs[no].style.display = "inline";
//                TRs[no].parentNode.rows.item(0).backgroundImage = "url(images/col.gif)";
//                }
//            }
    //    }

    function expand_Toggle_Panels() {
        var TDs = document.getElementsByTagName("TD");
        for (var no = 0; no < TDs.length; no++) {
            if (TDs[no].className == "TogglePanel_Heading") {
                TDs[no].parentNode.parentNode.rows.item(1).style.display = "";
                TDs[no].style.backgroundImage = "url(images/exp.gif)";
            }
        }
        //Display the collapse link
        if (document.getElementById("Link_Expand_All") != null) {
            document.getElementById("Link_Expand_All").style.display = "none";
            document.getElementById("Link_Collapse_All").style.display = "";
        }
    }

    function collapse_Toggle_Panels() {
        var TDs = document.getElementsByTagName("TD");
        for (var no = 0; no < TDs.length; no++) {
            if (TDs[no].className == "TogglePanel_Heading") {
                TDs[no].parentNode.parentNode.rows.item(1).style.display = "none";
                TDs[no].style.backgroundImage = "url(images/col.gif)";
            }
        }
        if (document.getElementById("Link_Expand_All") != null) {
            document.getElementById("Link_Expand_All").style.display = "";
            document.getElementById("Link_Collapse_All").style.display = "none";
        }
    }