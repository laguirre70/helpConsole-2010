<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="tools_skins.aspx.vb" Inherits="HelpConsole2010.tools_skins" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Manage Skins</title>
   	<link href="tools.css" type="text/css" rel="stylesheet"/>
    <script type="text/javascript" src="page.js"></script>

    <script type="text/javascript">
    function CloseCopyDialog()
        {
        document.getElementById("tblCopyDialog").style.display = "none"
        document.getElementById("divtransparency").style.display = "none"
        }

    function CloseRenameDialog()
        {
        document.getElementById("tblRenameDialog").style.display = "none"
        document.getElementById("divtransparency").style.display = "none"
        }

    
    function AddSkin(projectname)
        {
    	window.location.href="../"+projectname+"/editor.aspx?skin=_new_"
        }
        
    function deleteskin(projectname)
        {
        //if this is the last skin, do not allow it to be deleted.
        if (document.getElementById("tblskins").rows.length == 1)
            {
            alert("There must be at least one skin.")
            return;
            }
	    //determine if a skin is selected
	    var SelectedID=document.getElementById("txtSelectedRowID").value;
	    if (SelectedID == "")
	        {
	        alert("Please select a skin to delete.");
	        return;
	        }
	    //get the name of the selected skin
	    var skin = document.getElementById("Name_"+SelectedID).innerHTML;
        if (confirm("Delete skin '" + skin + "'?") == true)
            {
            window.location.href="tools_skins.aspx?action=deleteskin&skin="+skin+"&projectname="+projectname
            }
        }

    function showcopyprompt()
        {
   	    //determine if a skin is selected
	    var SelectedID=document.getElementById("txtSelectedRowID").value;
	    if (SelectedID == "")
	        {
	        alert("Please select a skin to copy.");
	        return;
	        }
	    //get the name of the selected skin
	    var skin = document.getElementById("Name_"+SelectedID).innerHTML;
        document.getElementById("txtCopySkinName").value = "Copy_of_" + skin
        document.getElementById("tblCopyDialog").style.display = ""
        document.getElementById("divtransparency").style.display = ""
        }

    function showrenameprompt()
        {
   	    //determine if a skin is selected
	    var SelectedID=document.getElementById("txtSelectedRowID").value;
	    if (SelectedID == "")
	        {
	        alert("Please select a skin to rename.");
	        return;
	        }
	    //get the name of the selected skin
	    var skin = document.getElementById("Name_"+SelectedID).innerHTML;
        document.getElementById("txtRenameSkinName").value = skin
        document.getElementById("tblRenameDialog").style.display = ""
        document.getElementById("divtransparency").style.display = ""
        }

        
    function copyskin(projectname)
        {
	    //get the name of the selected skin
   	    var SelectedID=document.getElementById("txtSelectedRowID").value;
	    var skin = document.getElementById("Name_"+SelectedID).innerHTML;
        //prompt for the name to copy to
        //var sNewSkinName = prompt("Please enter a name for the skin.","Copy of " + skin);
        var sNewSkinName = document.getElementById("txtCopySkinName").value;
        //Validate the skin name (not blank, no spaces, no special characters, etc)
        var sError = ValidSkinName(sNewSkinName)
        if (sError != "")
            {
            document.getElementById("divCopyMessage").innerHTML = "<br><br><img src='images/error.gif'>&nbsp;Error: " + sError;
            return;
            }
        //reload the form and pass action=copyskin
		window.location.href="tools_skins.aspx?action=copyskin&skin="+skin+"&copyto="+sNewSkinName+"&projectname="+projectname
        }

    function renameskin(projectname)
        {
	    //get the name of the selected skin
	    var SelectedID=document.getElementById("txtSelectedRowID").value;
	    var skin = document.getElementById("Name_"+SelectedID).innerHTML;
        //prompt for the name to rename to
        var sNewSkinName = document.getElementById("txtRenameSkinName").value;
        //Validate the skin name (not blank, no spaces, no special characters, etc)
        var sError = ValidSkinName(sNewSkinName)
        if (sError != "")
            {
            document.getElementById("divRenameMessage").innerHTML = "<br><br><img src='images/error.gif'>&nbsp;Error: " + sError;
            return;
            }

		window.location.href="tools_skins.aspx?action=renameskin&skin="+skin+"&renameto="+sNewSkinName+"&projectname="+projectname
        }

    function editskin_fromButton(projectname)
        {
	    //determine if a skin is selected
	    var SelectedID=document.getElementById("txtSelectedRowID").value;
	    if (SelectedID == "")
	        {
	        alert("Please select a skin to edit.");
	        return;
	        }
	    //get the name of the selected skin
	    var skin = document.getElementById("Name_"+SelectedID).innerHTML;
	    //window.location.href="../"+projectname+"/editor.aspx?skin="+skin;
	    window.location.href = "../" + projectname + "/editor.aspx?loadedfrom=skinsform&skin=" + skin;
        }

    function editskin_fromLink(projectname,skin)
        {
		window.location.href="../"+projectname+"/editor.aspx?skin="+skin;
        }


    function wopen(url, name, w, h)
    {
    window.open(url, 'test2','channelmode=yes, location=no, menubar=no, status=no, toolbar=no, scrollbars=yes, resizable=yes')
    return
    
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
        'width=' + w + ', height=' + h + ', ' + 'left=' + wleft + ', top=' + wtop + ', location=no, menubar=no, status=no, toolbar=no, scrollbars=yes, resizable=yes');
      // Just in case width and height are ignored
      win.resizeTo(w, h);
      // Just in case left and top are ignored
      win.moveTo(wleft, wtop);
      win.focus();
    }
    
    function showSelect(obj)
	    {
	    obj.style.backgroundImage="url(images/selectproject_back.gif)";
	    }
	
    function hideSelect(obj)
	    {
        if (document.getElementById("txtSelectedRowID").value != obj.id)
            {
            obj.style.backgroundImage="";
            }
	    }

    function SelectRow(obj,projectname)
        {
        //If there is a row already highlighted then unhighlight it now
        var SelectedID=document.getElementById("txtSelectedRowID").value;
        //alert("selectedid = " + SelectedID)
        if (SelectedID != "")
            {
            document.getElementById(SelectedID).style.backgroundImage="";
            }
        obj.style.backgroundImage="url(images/selectproject_back.gif)";
        document.getElementById("txtSelectedRowID").value = obj.id;
        //Show a preview of the skin (if this is IE)
        //if (document.getElementById("tdpreview").style.display == "")
        if(navigator.appName == "Microsoft Internet Explorer")
            {
            //get the name of the selected skin
            var skinname = 	document.getElementById("Name_"+obj.id).innerHTML;
            document.getElementById("divPreview").innerHTML = "<div style='width:200px;height:115px;overflow:hidden'><iframe src='../" + projectname + "/skin_" + skinname + ".htm' style='width:6200px;height:3840px;zoom:.18' frameborder='0'></iframe></div>"
            document.getElementById("tdpreview").style.display = "";
            }
        }

    function downloadskin(projectname,skin,makeactiveskin)
        {
        //alert("makeactiveskin = " + makeactiveskin)
   		window.location.href="tools_skins.aspx?skin="+skin+"&action=downloadskin&projectname="+projectname+"&makeactiveskin="+makeactiveskin;
        }
        
    function ValidSkinName(skinname)        
        {
        //validate skin name
        var sMsg="";
        var sType = "skin name";
        if (skinname.indexOf("<") != -1) {sMsg = "The " + sType + " cannot contain the < character."}
        if (skinname.indexOf(">") != -1) {sMsg = "The " + sType + " cannot contain the > character."}
        if (skinname.indexOf("\"") != -1) {sMsg = "The " + sType + " cannot contain double quotes."}
        if (skinname.indexOf("\\") != -1) {sMsg = "The " + sType + " cannot contain the backslash character."}
        if (skinname.indexOf("+") != -1) {sMsg = "The " + sType + " cannot contain the + character."}
        if (skinname.indexOf("%") != -1) {sMsg = "The " + sType + " cannot contain the % character."}
        if (skinname.indexOf("#") != -1) {sMsg = "The " + sType + " cannot contain the # character."}
        if (skinname.indexOf(",") != -1) {sMsg = "The " + sType + " cannot contain the , character."}
        if (skinname.indexOf("?") != -1) {sMsg = "The " + sType + " cannot contain the ? character."}
        if (skinname.indexOf("&") != -1) {sMsg = "The " + sType + " cannot contain the ampersand character."}
        if (skinname.indexOf("/") != -1)  {sMsg = "The " + sType + " cannot contain the forwardslash character."}
        if (skinname.indexOf(" ") != -1)  {sMsg = "The " + sType + " cannot contain spaces."}
        if (skinname.indexOf("'") != -1) {sMsg = "The " + sType + " cannot contain the single quote character."}
        if (skinname.indexOf("~") != -1) {sMsg = "The " + sType + " cannot contain the ~ character."}
        if (skinname.indexOf("*") != -1) { sMsg = "The " + sType + " cannot contain the * character." }
        if (skinname.indexOf("|") != -1) { sMsg = "The " + sType + " cannot contain the | character." }
        if (skinname.indexOf(":") != -1) { sMsg = "The " + sType + " cannot contain the : character." }
        if (skinname.indexOf("(") != -1) { sMsg = "The " + sType + " cannot contain the ( character." }
        if (skinname.indexOf(")") != -1) { sMsg = "The " + sType + " cannot contain the ) character." }
        if (skinname.indexOf(".") != -1) { sMsg = "The " + sType + " cannot contain the . character." }

        //ensure that the name is not blank
        if (skinname.replace(/ /g, "") == "")  {sMsg = "The " + sType + " cannot be blank."}
        //Ensure that the name is not longer than 64 characters
        if (skinname.length > 64) {sMsg = "The " + sType + " cannot be longer than 64 characters."}

        return sMsg;
        }
        
    </script>
</head>
<body class="content_light">
    <form id="Form1" runat="server">
    <input id="txtSelectedRowID" runat="server" type="hidden" />

    <table id="tblwrapper" runat="server" style="width:100%;" cellpadding="12" cellspacing="0" border="0">
        <tr id="trheading" runat="server">
            <td colspan="2" class="content_dark">
                <span id="spanheading" runat="server" class="ToolsHeading">Manage Skins</span><br />
                <span id="spanbreadcrumbs" class="ToolsBreadcrumbs"><a class="no_underline" href="tools.aspx?projectname=<%=request.querystring("projectname")%>" >Tools</a> > Manage Skins</span>
            </td>
        </tr>
        <tr id="trskinlist" runat="server">
            <td valign="top">
                <div style="width:100%;height:21px;background-image:url(images/manageprojects_create_top.gif);border-left:1px solid #000000;border-right:1px solid #000000;font-family:Arial;font-size:8pt;color:#A2A1A1;padding-top:6px">&nbsp;&nbsp;Skin Name</div>
                <div id="divSkinList" runat="server" style="width:100%;border-left:1px solid #000000;border-right:1px solid #000000;color:#CBC9C9;font-family:arial;font-size:9pt;"></div>
                <div id="divFooter" style="text-align:right;height:34px;width:100%;background-image:url(images/manageprojects_project_footer.gif);border-left:1px solid #000000;border-right:1px solid #000000;color:#CBC9C9;font-family:arial;font-size:9pt;">
                    <table align="left" style="border-top:2px solid transparent" cellpadding="0" cellspacing="3"><tr>
                        <td id="tdCopySkin" runat="server" style="background-image:url(images/button_back.gif);width:65px;height:22px;text-align:center;cursor:pointer;color:#B0AFAF" title="Copy this skin" onclick="showcopyprompt()">Copy</td>
                        <td id="tdEditSkin" runat="server" style="background-image:url(images/button_back.gif);width:65px;height:22px;text-align:center;cursor:pointer;color:#B0AFAF" title="Edit this skin">Edit</td>
                        <td id="tdDeleteSkin" runat="server" style="background-image:url(images/button_back.gif);width:65px;height:22px;text-align:center;cursor:pointer;color:#B0AFAF" title="Delete this skin">Delete</td>
                        <td id="tdRenameSkin" runat="server" style="background-image:url(images/button_back.gif);width:65px;height:22px;text-align:center;cursor:pointer;color:#B0AFAF" title="Rename this skin" onclick="showrenameprompt()">Rename</td>
                        <td><asp:Button ID="btndownloadskin" runat="server" Text="Additional Skins" style="background-image:url(images/button_back_large.gif)" BackColor="Transparent" BorderColor="Transparent" BorderStyle="None" ForeColor="#CCCCCC" Font-Names="Arial" Font-Size="8pt" Height="22px" Width="100px" /></td>
                        <td><asp:Button ID="btnCompileSkins" runat="server" BackColor="Transparent" BorderColor="Transparent" BorderStyle="None" ForeColor="#CCCCCC" Font-Names="Arial" Font-Size="8pt" Height="22px" Width="22px" /></td>
                    </tr></table>
                </div>
            </td>
            <td id="tdpreview" runat="server" style="width:200px;display:none" valign="top">
                <div style="width:100%;height:21px;background-image:url(images/manageprojects_create_top.gif);border-left:1px solid #000000;border-right:1px solid #000000;font-family:Arial;font-size:8pt;color:#A2A1A1;padding-top:6px">&nbsp;&nbsp;Preview</div>
                <div id="divPreview" runat="server" style="width:100%;height:115px;background-image:url(images/manageprojects_create_back.gif);background-repeat:repeat-x;background-color:#474747;border-left:1px solid #000000;border-right:1px solid #000000;border-bottom:1px solid #000000;color:#CBC9C9;font-family:arial;font-size:9pt;"></div>
            </td>
	    </tr>
        <tr>
            <td id="tdSkinCollection" runat="server" colspan="2" align="left" valign="top"></td>
        </tr>
	</table>

   	<div id="divtransparency" style="width:100%;height:100%;position:absolute;top:0px;left:0px;display:none;background-color:Black;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=70);-moz-opacity:0.70;opacity:.7;" runat="server"></div>

    <!-- COPY SKIN DIALOG -->
    <table id="tblCopyDialog" style="width:100%;height:100%;position:absolute;top:0px;left:0px;display:none;">
        <tr>
            <td align="center">
                <table  align="center" style="width:400px;height:210px;" cellpadding="0" cellspacing="0">
                    <tr style="height:36px">
                        <td style="background-image:url(images/dialog_top.gif);padding-left:8px;padding-right:6px;font-size:11pt;color:#BBBBBB" align="left" valign="middle"><img onmouseover="this.src='images/closeform_mouseover.gif'" onmouseout="this.src='images/closeform.gif'" src="images/closeform.gif" alt="close" style="cursor:hand;" align="right" onclick="CloseCopyDialog()"/>Copy Skin</td>
                    </tr>
                    <tr>
                        <td style="background-image:url(images/dialog_center.gif);color:black;padding-left:20px;padding-top:28px" align="left" valign="top">
                            Copy To:&nbsp;<input id="txtCopySkinName" style="width:300px"/><div id="divCopyMessage"></div>
                        </td>
                    </tr>                        
                    <tr style="height:41px">
                        <td style="background-image:url(images/dialog_bottom.gif);padding-right:10px" align="right"><input id="btnCopySkin" runat="server" type="button" style="width:125px;displayL" value="Copy" /></td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

    <!-- RENAME SKIN DIALOG -->
    <table id="tblRenameDialog" style="width:100%;height:100%;position:absolute;top:0px;left:0px;display:none;">
        <tr>
            <td align="center" valign="middle">
                <table  align="center" style="width:400px;height:210px;border:1px solid black" cellpadding="0" cellspacing="0">
                    <tr style="height:36px">
                        <td style="background-image:url(images/dialog_top.gif);padding-left:8px;padding-right:6px;font-size:11pt;color:#BBBBBB" align="left" valign="middle"><img onmouseover="this.src='images/closeform_mouseover.gif'" onmouseout="this.src='images/closeform.gif'" src="images/closeform.gif" alt="close" style="cursor:hand;" align="right" onclick="CloseRenameDialog()"/>Rename Skin</td>
                    </tr>
                    <tr>
                        <td style="background-image:url(images/dialog_center.gif);color:black;padding-left:20px;padding-top:28px" align="left" valign="top">
                            Rename To:&nbsp;<input id="txtRenameSkinName" style="width:300px"/><div id="divRenameMessage"></div>
                        </td>
                    </tr>                        
                    <tr style="height:41px">
                        <td style="background-image:url(images/dialog_bottom.gif);padding-right:10px" align="right"><input id="btnRenameSkin" runat="server" type="button" style="width:125px;" value="Rename" /></td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
        
    </form>
</body>
</html>
