<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="DialogContent.aspx.vb" Inherits="HelpConsole2010.DialogContent" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title><%=sTitle%></title>
 	<link href="tools.css" type="text/css" rel="stylesheet"/>
 	
 	<script type="text/javascript">
 	function CopytoClipboard()
        {
        //alert("txtFullURL = " + document.getElementById("txtFullURL"))
        //Copied = txtFullURL.createTextRange();
        Copied = document.getElementById("txtFullURL").createTextRange();
        Copied.execCommand("Copy");
        document.getElementById("tdlinkmessage").innerHTML = "URL Copied...<br/><br/>"
        }
 	</script>
</head>
<body>
    <form id="form1" runat="server">
    <table style="width:100%;height:100%">
        <tr id="trImport" runat="server" style="display:none">
            <td align="center">
                <span id="spanMessage" runat="server" style="font-family:Arial;font-size:larger">Importing...</span><br /><br /><asp:Image ID="Image1" runat="server" ImageUrl="images/loading.gif" />
            </td>                
        </tr>
        <tr id="trSave" runat="server" style="display:none">
            <td align="center">
                <span id="span1" runat="server" style="font-family:Arial;font-size:16pt">Saving...</span><br /><br /><asp:Image ID="Image2" runat="server" ImageUrl="images/loading.gif" />
            </td>                
        </tr>
        <tr id="trShowURL" runat="server" style="display:none">
            <td>
                <table style="width:100%;height:100%;background-color:#FFFFFF" cellspacing="10">
                    <tr>
                        <td valign="top">
                            <br /><span id="spanPageURL" runat="server">Page URL:</span>
                            <img src="images/copytext.gif" onclick="CopytoClipboard()" style="cursor:pointer" align="right" alt="Copy URL to Clipboard" title="Copy URL to Clipboard" hspace="5"/>
                            <br />
                            <input id="txtFullURL" runat="server" style="width:100%;" value="" />
                        </td>
                    </tr>
                    <tr id="trRelative" runat="server" style="display:none">
                        <td  valign="top">
                            Relative URL: <font color=#737372>(assuming help system is in a sub folder named 'help')</font><br />
                            <input id="txtRelativeURL" runat="server" style="width:100%;padding:3px;height:24px" value="" />
                        </td>
                    </tr>
                    <tr style="height:30px">
                        <td></td>
                    </tr>
                    <tr>
                        <td id="tdlinkmessage" align="center"></td>
                    </tr>
                </table>
            </td>                
        </tr>

    </table>
    </form>
</body>
</html>
