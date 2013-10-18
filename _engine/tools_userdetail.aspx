<%@ Page Language="VB" AutoEventWireup="false" Inherits="HelpConsole2010._engine_userdetail" Codebehind="tools_userdetail.aspx.vb" validateRequest="false"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>User Detail</title>
   	<link href="tools.css" type="text/css" rel="stylesheet"/>

</head>
<body class="content_light">
    <form id="form1" runat="server">
    <table id="tblwrapper" runat="server" style="width:100%;" cellpadding="12" cellspacing="0">
        <tr>
            <td class="content_dark">
                <span id="spanheading" runat="server" style="font-size: 24pt;font-weight:bold">User Detail</span>
                <br />
                <a href="tools.aspx?projectname=<%=request.querystring("projectname")%>" >Tools</a> > <a href="tools_users.aspx?projectname=<%=request.querystring("projectname")%>" >Users</a> > User Detail
            </td>
            <td align="right" class="content_dark">
                <asp:button id="btnCancel" runat="server" Width="130px" height="30" Text="Cancel" ></asp:button>
                <asp:button id="btnok" runat="server" Width="130px" height="30" Text="Save" ></asp:button>
            </td>
        </tr>
        <tr id="trmessage" runat="server" style="display:none">
            <td colspan="2">
            </td>
        </tr>
        <tr>
            <td colspan="2" valign="top" style="width: 839px">
                <br /><br />
                <table id="tbldetail" cellspacing="0" cellpadding="4" width="100%" border="0" runat="server">
	                <tr><td style="width:110px" align="right">UserName:</td><td><asp:textbox id="txtUserName" runat="server" Width="300px" Enabled="False"></asp:textbox></td></tr>
	                <tr><td align="right">Full Name:</td><td><asp:textbox id="txtFullName" runat="server" Width="300px"></asp:textbox></td></tr>
				    <tr><td align="right">Password:</td><td><asp:textbox id="txtpassword" runat="server" TextMode="password"  Width="300px"></asp:textbox></td></tr>
				    <tr><td align="right">Security Group:</td><td><asp:dropdownlist id="lstSecurityGroup" runat="server" Width="306px" Height="22px"></asp:dropdownlist></td></tr>
	            </table>
	        </td>
	    </tr>

	</table>





    </form>
</body>
</html>
