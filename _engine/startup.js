//------------------------------------------------------------------------------ APPLICATION FUNCTIONS --------------------------------------
function ShowAddForm(sTemplate, sHeading) {
    document.getElementById("txtTemplate").value = sTemplate;
    //Clear the renamefrom field.
    document.getElementById("txtRenameFromProject").value = "";
    //If there was an error message, clear it now.
    document.getElementById("divMessage").innerHTML = "";
    //document.getElementById("tbldialog").style.display = "";
    document.getElementById("tblDialogWindow").style.display = "";
    //Hide the manage projects form
    document.getElementById("divContent").style.display = "none";
    document.getElementById("tddialog").style.display = "none";
    document.getElementById("tdNewProject").style.display = "";
    //document.getElementById("divtransparency").style.display = "";
    //document.getElementById("trtemplatelist").style.display = "";
    document.getElementById("txtCopyFromProject").value = "";
    document.getElementById("spanheading").innerHTML = sHeading;
    document.getElementById("txtname").value = "";
    document.getElementById("txtname").focus();
}

function AddProjectKeyPress(e) {
    var key;
    if (window.event) {
        key = window.event.keyCode;     //IE
    }
    else {
        key = e.which;     //firefox
    }

    if (key == 13) {
        document.getElementById("btnAdd").click();
        return false;
    }
    else {
        return true;
    }
}

function SignInKeyPress(e) {
    var key;
    if (window.event) {
        key = window.event.keyCode;     //IE
    }
    else {
        key = e.which;     //firefox
    }

    if (key == 13) {
        document.getElementById("SignIn").click();
        return false;
    }
    else {
        return true;
    }
}


function HostedWindowSetup() {
    if (document.getElementById("tdRemoveExpired").style.display == "") {
        document.getElementById("divProjectList").style.overflow = "auto";
        document.getElementById("divProjectList").style.height = document.documentElement.clientHeight - 415;
    }
}

function CloseDialog() {
    //document.getElementById("tbldialog").style.display = "none";
    document.getElementById("tblDialogWindow").style.display = "none";
    //Show the manage projects form
    //document.getElementById("divContent").style.display = "";
    //document.getElementById("divContent").style.visibility = "visible";
    document.getElementById("divContent").style.display = "";
    //document.getElementById("divtransparency").style.display = "none";
    //document.getElementById("tdAddMessage").innerHTML = "";
    document.getElementById("divMessage").innerHTML = "";
    document.getElementById("tdNewProject").style.display = "";
}

function showSelect(obj, i) {
    obj.style.backgroundImage = "url(images/selectproject_back.gif)";
    if (document.getElementById("imgediticon_tr" + i) != null) {
        if (document.getElementById("imgediticon_tr" + i).src.indexOf("lock.gif") == -1) {
            //if the project is not locked then show the edit icon
            document.getElementById("imgediticon_tr" + i).style.display = "";
        }
    }
}

function hideSelect(obj, i) {
    if (document.getElementById("txtSelectedRowID").value != obj.id) {
        obj.style.backgroundImage = "";
    }
    if (document.getElementById("imgediticon_tr" + i) != null) {
        if (document.getElementById("imgediticon_tr" + i).src.indexOf("lock.gif") == -1) {
            //if the project is not locked then show the edit icon
            document.getElementById("imgediticon_tr" + i).style.display = "none";
        }
    }
}

function SelectProject(obj) {
    //If there is a row already highlighted then unhighlight it now
    var SelectedID = document.getElementById("txtSelectedRowID").value;
    if (SelectedID != "" && document.getElementById(SelectedID) != null) {
        document.getElementById(SelectedID).style.backgroundImage = "";
    }
    obj.style.backgroundImage = "url(images/selectproject_back.gif)";
    document.getElementById("txtSelectedRowID").value = obj.id;
    document.getElementById("txtSelectedProject").value = document.getElementById("ProjectName_" + obj.id).innerHTML;
    //alert("selected project name = " + document.getElementById("ProjectName_" + obj.id).innerHTML);
}

function Hosted_Confirm_Remove_Expired() {
    //ask the admin if they're sure
    if (confirm("Delete all projects that expired 5 days ago?") == false) {
        return false;
    }
}


function Hosted_Confirm_Status_Change() {
    //determine if a project is selected
    var SelectedID = document.getElementById("txtSelectedRowID").value;
    if (SelectedID == "") {
        alert("Please select a project.");
        return false;
    }
    //get the name of the selected project
    var sProjectName = document.getElementById("ProjectName_" + SelectedID).innerHTML;

    //determine if a status is selected
    if (document.getElementById("lstHostedStatus").options.selectedIndex == 0) {
        alert("Please select a status in the list.");
        return false;
    }

    //ask the user if they're sure
    if (confirm("Change status for project '" + sProjectName + "'?") == false) {
        return false;
    }
}

function deleteproject() {
    //determine if a project is selected
    var SelectedID = document.getElementById("txtSelectedRowID").value;
    //Make sure that the project is not locked
    //alert("SelectedID = " + SelectedID);
    //alert("imgediticon = " + document.getElementById("imgediticon_" + SelectedID))
    if (document.getElementById("imgediticon_" + SelectedID) != null) {
        if (document.getElementById("imgediticon_" + SelectedID).src.indexOf("lock.gif") != -1) {
            alert("This project is locked and cannot be deleted.")
            return;
        }
        else if (document.getElementById("imgediticon_" + SelectedID).src.indexOf("dot.gif") != -1) {
            alert("This is an active subscription and cannot be deleted.")
            return;
        }

    }

    if (SelectedID == "") {
        alert("Please select a project to delete.");
        return;
    }
    //get the name of the selected project
    var sProjectName = document.getElementById("ProjectName_" + SelectedID).innerHTML;

    //ask the user if they're sure
    if (confirm("The project '" + sProjectName + "' will be permanently deleted.") == false) {
        return;
    }

    //Hide the manage projects form and show the 'deleting message'
    document.getElementById("divMessage").innerHTML = "<br/><br/><br/><br/><span style='color:white;font-size:12pt'>Deleting Project '" + sProjectName + "'...<br/><br/><img src='images/loading.gif'/></span>"
    document.getElementById("divtransparency").style.display = "";
    //document.getElementById("divContent").style.display = "none";
    //document.getElementById("body").style.backgroundImage = "url(images/deletingproject.gif)"
    //document.getElementById("body").style.backgroundRepeat = "no-repeat"
    //document.getElementById("body").style.backgroundPosition = "center center"

    //Delete the project via AJAX
    var http = false;
    var reqstring = "action=deleteproject";
    reqstring = reqstring + "&project=" + sProjectName;
    if (navigator.appName == "Microsoft Internet Explorer") { http = new ActiveXObject("Microsoft.XMLHTTP"); } else { http = new XMLHttpRequest(); }
    http.onreadystatechange = function() {
        if (http.readyState == 4) {
            if (http.status == 200) {
                //check for errors
                if (http.responseText.indexOf("Error:") != -1) {
                    //alert(http.responseText)
                    document.getElementById("divMessage").innerHTML = "<img src='images/error.gif'/><span style='color:white'>" + http.responseText + "</span>"
                    document.getElementById("divtransparency").style.display = "none";
                }
                else {
                    //Reload the form
                    window.location.href = "default.aspx"
                    //__doPostBack("","");
                }
            }
            else {
                alert("Error: " + http.status + http.responseText);
            }
        }
    }

    //This function allows us to trap any errors
    http.open("POST", "AjaxAction.aspx", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send(reqstring);

}

function openproject() {
    //determine if a project is selected
    var SelectedID = document.getElementById("txtSelectedRowID").value;
    if (SelectedID == "") {
        alert("Please select a project to open.");
        return;
    }
    //get the name of the selected project
    var sProjectName = document.getElementById("ProjectName_" + SelectedID).innerHTML;
    //open the project
    //window.location.href="../" + sProjectName + "/default.aspx"
    window.open("../" + sProjectName + "/default.aspx", "_top")
}


function copyproject() {
    //determine if a project is selected
    var SelectedID = document.getElementById("txtSelectedRowID").value;
    if (SelectedID == "") {
        alert("Please select a project to copy.");
        return;
    }

    //Make sure that the project is not locked
    if (document.getElementById("imgediticon_" + SelectedID) != null) {
        if (document.getElementById("imgediticon_" + SelectedID).src.indexOf("lock.gif") != -1) {
            alert("This project is locked and cannot be copied.")
            return;
        }
    }

    //get the name of the selected project
    var sProjectName = document.getElementById("ProjectName_" + SelectedID).innerHTML;
    //Show the create project dialog
    //document.getElementById("tbldialog").style.display = "";
    document.getElementById("tblDialogWindow").style.display = "";
    //Hide the manage projects form
    document.getElementById("divContent").style.display = "none";
    //document.getElementById("divtransparency").style.display = "";
    document.getElementById("txtCopyFromProject").value = sProjectName;
    document.getElementById("tddialog").style.display = "none";
    document.getElementById("tdNewProject").style.display = "";
    document.getElementById("spanheading").innerHTML = "Copy Project";
    document.getElementById("txtname").value = "Copy of " + sProjectName;
    document.getElementById("txtname").focus();
}

function ShowRenameDialog() {
    //determine if a project is selected
    var SelectedID = document.getElementById("txtSelectedRowID").value;
    if (SelectedID == "") {
        alert("Please select a project to rename.");
        return;
    }

    //Make sure that the project is not locked
    if (document.getElementById("imgediticon_" + SelectedID) != null) {
        if (document.getElementById("imgediticon_" + SelectedID).src.indexOf("lock.gif") != -1) {
            alert("This project is locked and cannot be renamed.")
            return;
        }
        else if (document.getElementById("imgediticon_" + SelectedID).src.indexOf("dot.gif") != -1) {
            alert("This is an active subscription and cannot be renamed.")
            return;
        }
        
    }

    //get the name of the selected project
    var sProjectName = document.getElementById("ProjectName_" + SelectedID).innerHTML;

    document.getElementById("tblDialogWindow").style.display = "";
    //Hide the manage projects form
    document.getElementById("divContent").style.display = "none";
    //alert("selected project = " + sProjectName);
    document.getElementById("txtRenameFromProject").value = sProjectName;
    document.getElementById("tddialog").style.display = "none";
    document.getElementById("tdNewProject").style.display = "";
    document.getElementById("spanheading").innerHTML = "Rename Project";
    document.getElementById("btnAdd").value = "Rename";
    document.getElementById("txtname").value = sProjectName;
    document.getElementById("txtname").focus();


}

//function renameproject()
//    {

//	//ask the user if they're sure
//	if(confirm("The project '"+sProjectName+"' will be permanently deleted.") == false)
//		{
//		return;
//		}

//    //Hide the manage projects form
//    document.getElementById("divContent").style.display = "none";
//    document.getElementById("body").style.backgroundImage = "url(images/deletingproject.gif)"
//    document.getElementById("body").style.backgroundRepeat = "no-repeat"
//    document.getElementById("body").style.backgroundPosition = "center center"

//    //Delete the project via AJAX
//    var http = false;
//    var reqstring = "action=deleteproject";
//    reqstring = reqstring + "&project="+sProjectName;
//    if(navigator.appName == "Microsoft Internet Explorer") {http = new ActiveXObject("Microsoft.XMLHTTP");} else {http = new XMLHttpRequest();} 
//    http.onreadystatechange=function() 
//        {
//        if(http.readyState == 4) 
//            {
//            if (http.status == 200) 
//                {
//                //check for errors
//                if (http.responseText.indexOf("Error:") != -1)
//                    {
//                    alert(http.responseText)
//                    }
//                else
//                    {
//                    //Reload the form
//                    window.location.href="default.aspx"
//                    //__doPostBack("","");
//                    }
//                }                
//            else 
//                {
//                alert("Error: "+http.status+http.responseText);
//                }
//            }
//        }

//    //This function allows us to trap any errors
//    http.open("POST","AjaxAction.aspx",true);
//    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//    http.send(reqstring);    		

//    }

function StorePassword() {
    reqstring = "action=WriteAppPassword&AppPassword=" + document.getElementById("txtManageProjectsPassword").value;
    var http = false;
    if (navigator.appName == "Microsoft Internet Explorer") { http = new ActiveXObject("Microsoft.XMLHTTP"); } else { http = new XMLHttpRequest(); }
    http.onreadystatechange = function() {
        if (http.readyState == 4) {
            if (http.status == 200) {
                //If the password was successfully written to the server, refresh the form
                //document.getElementById("form1").submit();
                window.location.href = "default.aspx"
            }
            else {
                alert("Error: " + http.status + http.responseText);
            }
        }
    }

    //This function allows us to trap any errors
    http.open("POST", "AjaxAction.aspx", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send(reqstring);

}

function ShowAppPasswordPrompt() {
    //Build the form html
    var s = "";
    s = s + "<table style='width:100%;height:100%;' border='0' cellspacing='10' cellpadding='0'>";
    s = s + "<tr style='height:18px'><td></td><td></td></tr>"
    s = s + "<tr style='height:20px'><td align='right'>New&nbsp;Password:</td><td><input type='password' id='txtNewAppPassword' style='width:215px' onKeyPress='return FormPassword_KeyPress(event);'></td></tr>";
    s = s + "<tr style='height:20px'><td align='right'>Confirm&nbsp;Password:</td><td><input type='password' id='txtNewAppPassword_confirm' style='width:215px' onKeyPress='return FormPassword_KeyPress(event);'></td></tr>";
    s = s + "<tr><td></td><td align='right'><br/><br/><input style='width:100px' type='button' value='OK' onclick='WriteAppPassword()'></td></tr>"
    s = s + "</table>"

    //Show the create project dialog
    //document.getElementById("tbldialog").style.display = "";
    document.getElementById("tblDialogWindow").style.display = "";
    //document.getElementById("divtransparency").style.display = "";
    //document.getElementById("divContent").style.visibility = "hidden";
    document.getElementById("divContent").style.display = "none";
    document.getElementById("tddialog").style.display = "";
    document.getElementById("tddialog").innerHTML = s;
    document.getElementById("tdNewProject").style.display = "none";
    document.getElementById("spanheading").innerHTML = "Assign Password";
    document.getElementById("txtNewAppPassword").focus();
}

function FormPassword_KeyPress(e) {
    var key;
    if (window.event) {
        key = window.event.keyCode;     //IE
    }
    else {
        key = e.which;     //firefox
    }

    if (key == 13) {
        WriteAppPassword()
        return false;
    }
    else {
        return true;
    }
}

function FormEnterPassword_KeyPress(e) {
    var key;
    if (window.event) {
        key = window.event.keyCode;     //IE
    }
    else {
        key = e.which;     //firefox
    }

    if (key == 13) {
        StorePassword();
        return false;
    }
    else {
        return true;
    }
}

function RemoveFormPassword() {
    //Remove the form password
    reqstring = "action=AssignAppPassword";
    var http = false;
    if (navigator.appName == "Microsoft Internet Explorer") { http = new ActiveXObject("Microsoft.XMLHTTP"); } else { http = new XMLHttpRequest(); }
    http.onreadystatechange = function() {
        if (http.readyState == 4) {
            if (http.status == 200) {
                alert("The 'Manage Projects Form' password has been removed.");
                //Reload the form
                window.location.href = "default.aspx"
            }
            else {
                alert("Error: " + http.status + http.responseText);
            }
        }
    }

    //This function allows us to trap any errors
    http.open("POST", "AjaxAction.aspx", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send(reqstring);
}

function WriteAppPassword() {
    //verify that the password is valid and the two match.
    var sPassword = document.getElementById("txtNewAppPassword").value;
    var sPassword_confirm = document.getElementById("txtNewAppPassword_confirm").value;
    if (sPassword != sPassword_confirm) {
        alert("The passwords do not match.")
        return false;
    }

    reqstring = "action=AssignAppPassword";
    reqstring = reqstring + "&AppPassword=" + document.getElementById("txtNewAppPassword").value;
    var http = false;
    if (navigator.appName == "Microsoft Internet Explorer") { http = new ActiveXObject("Microsoft.XMLHTTP"); } else { http = new XMLHttpRequest(); }
    http.onreadystatechange = function() {
        if (http.readyState == 4) {
            if (http.status == 200) {
                if (sPassword == "") {
                    alert("The 'Manage Projects Form' password has been removed.");
                }
                else {
                    alert("The 'Manage Projects Form' is now password protected.");
                    //Reload the form
                    //window.location.href="default.aspx"
                }
                //Hide the dialog
                //document.getElementById("tbldialog").style.display = "none";
                document.getElementById("tblDialogWindow").style.display = "none";
                //document.getElementById("divtransparency").style.display = "none";
                document.getElementById("divContent").style.visibility = "";
                document.getElementById("tddialog").innerHTML = "";
            }
            else {
                alert("Error: " + http.status + http.responseText);
            }
        }
    }

    //This function allows us to trap any errors
    http.open("POST", "AjaxAction.aspx", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send(reqstring);
}

function uploadproject() {
    //alert("upload")
    //Hide the main form, and show the 'uploading' image
    var sFileName = document.getElementById("File1").value;
    //get the filename (without the path)
    sFileName = sFileName.substr(sFileName.lastIndexOf("\\") + 1)
    document.getElementById("divMessage").innerHTML = "<br/><br/><br/><br/><span style='color:white;font-size:12pt'>Uploading Project '" + sFileName + "'...<br/><br/>Please be patient. The upload could take up to a couple of minutes depending on the size of the project and the speed of the server.<br/><br/><img src='images/loading.gif'/></span>"
    document.getElementById("divContent").style.display = "none";
    //document.getElementById("body").style.backgroundImage = "url(images/loading.gif)"
    //document.getElementById("body").style.backgroundRepeat = "no-repeat"
    //document.getElementById("body").style.backgroundPosition = "center center"

    //alert("upload")
    //    document.getElementById("tbldialog").style.display = "";
    //    document.getElementById("tddialog").style.display = "";
    //    document.getElementById("tdNewProject").style.display = "none";
    //    document.getElementById("divtransparency").style.display = "";
    //    document.getElementById("spanheading").innerHTML = "Project Upload";
    //    document.getElementById("tddialog").innerHTML = "<table style='width:100%;height:100%;background-color:white' cellspacing=0 cellpadding=10><tr><td align='center'><font size=3>Uploading Help Project...</font><br><br><br><img src='images/loading.gif'><br><br><br>Please be patient. This could take up to a couple of minutes depending on the size of your help system and the speed <br>of your server.</td></tr></table>";
    //Call the click method of btnupload to cause the selected file to be uploaded to the server.
    document.getElementById('btnUpload').click()
}

function txtnameKeyPress(searchtext, e) {
    var key;
    if (window.event) {
        key = window.event.keyCode;     //IE
    }
    else {
        key = e.which;     //firefox
    }

    if (key == 13) {
        document.getElementById("btnAdd").click();
        return false;
    }
    else {
        return true;
    }
}

function ShowAddProgress() {
    //alert("show add progress")
    document.getElementById("tddialog").style.display = "";
    document.getElementById("tddialog").innerHTML = "<table style='width:100%;height:100%;background-color:white'><tr><td align='center'>Creating New Project...<br><br><img src='images/loading.gif'><br></td></tr></table>";
    document.getElementById("tdNewProject").style.display = "none";
    return true;
}


function IEVersion() {
    var _n = navigator, _w = window, _d = document;
    var version = "NA";
    var na = _n.userAgent;
    var ieDocMode = "NA";
    var ie8BrowserMode = "NA";
    // Look for msie and make sure its not opera in disguise
    if (/msie/i.test(na) && (!_w.opera)) {
        // also check for spoofers by checking known IE objects
        if (_w.attachEvent && _w.ActiveXObject) {
            // Get version displayed in UA although if its IE 8 running in 7 or compat mode it will appear as 7
            version = (na.match(/.+ie\s([\d.]+)/i) || [])[1];
            // Its IE 8 pretending to be IE 7 or in compat mode		
            if (parseInt(version) == 7) {
                // documentMode is only supported in IE 8 so we know if its here its really IE 8
                if (_d.documentMode) {
                    version = 8; //reset? change if you need to
                    // IE in Compat mode will mention Trident in the useragent
                    if (/trident\/\d/i.test(na)) {
                        ie8BrowserMode = "Compat Mode";
                        // if it doesn't then its running in IE 7 mode
                    } else {
                        ie8BrowserMode = "IE 7 Mode";
                    }
                }
            } else if (parseInt(version) == 8) {
                // IE 8 will always have documentMode available
                if (_d.documentMode) { ie8BrowserMode = "IE 8 Mode"; }
            }
            // If we are in IE 8 (any mode) or previous versions of IE we check for the documentMode or compatMode for pre 8 versions			
            ieDocMode = (_d.documentMode) ? _d.documentMode : (_d.compatMode && _d.compatMode == "CSS1Compat") ? 7 : 5; //default to quirks mode IE5				   			
        }
    }

    return {
        "UserAgent": na,
        "Version": version,
        "BrowserMode": ie8BrowserMode,
        "DocMode": ieDocMode
    }
}    