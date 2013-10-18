<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="tools_backup.aspx.vb" Inherits="HelpConsole2010.tools_backup" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Create Backup</title>
  	<link href="tools.css" type="text/css" rel="stylesheet"/>
  	<script type="text/javascript">
  	    function DisplayProgress()
  	        {
  	        //document.getElementById("spanMessage").innerHTML = "<img src='images/loading.gif'/>";
  	        document.getElementById("spanLoading").style.visibility = "";
  	        }
  	</script>
</head>
<body class="content_light">
    <form id="form1" runat="server">
    <table id="tblwrapper" runat="server" style="width:100%;" cellpadding="12" cellspacing="0">
        <tr>
            <td class="content_dark">
                <span id="spanheading" runat="server" style="font-size: 24pt;font-weight:bold">Create Backup</span>
                <br />
                <a href="tools.aspx?projectname=<%=request.querystring("projectname")%>" >Tools</a> > Create Backup
            </td>
        </tr>
        <tr>
            <td valign="top">
                <input type="checkbox" checked="CHECKED" id="chkIncludeImages" runat="server" />Include 'Images' Folder<br />
                <input type="checkbox" checked="CHECKED" id="chkIncludeDocs" runat="server" />Include 'Docs' Folder<br />
                <input type="checkbox" id="chkIncludeStatic" runat="server" />Include publish Folders<br /><br />
                <input type="button" value="Create Backup" id="btnCreateBackup" runat="server" style="width:150px;height:30px" onclick="DisplayProgress();" /><br /><br /><br />
                <span id="spanMessage" runat="server"></span>
	        </td>
	    </tr>
        <tr>
            <td valign="top" align="center">
                <span id="spanLoading" style="visibility:hidden"><img src="images/loading.gif"/></span>
                
	        </td>
	    </tr>
	</table>



    </form>
</body>
</html>
