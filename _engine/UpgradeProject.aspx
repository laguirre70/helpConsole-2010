<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="UpgradeProject.aspx.vb" Inherits="HelpConsole2010.UpgradeProject" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>HelpConsole Project Upgrade</title>
  	<link href="tools.css" type="text/css" rel="stylesheet"/>
</head>
	<body id="body">
		<form id="form1" method="post" runat="server">
    <table style="width:100%;height:100%" cellpadding="8" cellspacing="0">
        <tr>
            <td style="background-color:#DDDDDD;border-bottom:solid 1px #CCCCCC;height:60px">
                <strong><span id="spanheading" runat="server" style="font-size: 24pt;">Upgrade Project</span></strong>
 
            </td>
        </tr>
        <tr style="height:250px">
            <td id="tdlinks" runat="server" align="center" valign="top">
                <br /><br /><br /><br />
                <table style="width:600px" border="0" cellpadding="5">
                    <tr>
                        <td style="width:50px" valign="top"><asp:ImageButton ID="imgbackup" runat="server" ImageUrl="images/tools_backup.gif" AlternateText="" /><a class="heading" href="permissions.aspx"></a></td>
                        <td id="tdUpgradeDesc" runat="server" valign="top" align="left">
                            &nbsp;<asp:Label ID="lblUpgradeProject" runat="server" Font-Size="Large" Text="Upgrade Project"></asp:Label><br />
                            <span style="color:#000000">This project needs to be upgraded in order to work with
                                HelpConsole 2010. Once upgraded, this project cannot be opened with the previous
                                version of the software (HelpConsole 2008). Click the 'Upgrade' button to continue.
                            </span><br />
                            <br />
                            <asp:ImageButton ID="imgupgrade" runat="server" ImageUrl="images/upgrade.gif" onclientclick="document.getElementById('DivProgress').style.display='';document.getElementById('imgloading').src='images/loading.gif'" /><br />
                            <br />
                            <div id="divMessage" runat="server"></div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td align="center" valign="top">
               <div id="DivProgress" style="display:none;WIDTH:100%" runat="server">Upgrading Project...<br />
               <img id="imgloading" src="images/dot.gif" alt="upgrading"/></div>
            </td>
        </tr>
        <tr>
            <td id="tdbackup" runat="server" valign="top" style="display:none">
                &nbsp;
            </td>
        </tr>

    </table>
		</form>
	</body>
</html>
