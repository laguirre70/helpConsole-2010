<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="HostedChangePassword.aspx.vb" Inherits="HelpConsole2010.HostedChangePassword" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>HelpConsole.com Change Password</title>
    <style>
        body
        {
            font-size: 8pt;
            font-family: Tahoma, Arial, Helvetica, sans-serif;
            margin:60px;
            background-color:White;
        }
    </style>

</head>
<body>
    <form id="form1" runat="server">
    <a href="default.aspx">Back</a><br /><br />
    <div style="font-size:14pt">Change Password:</div><br /><br />
    <table>
    <tr>
    <td>Old Password:</td><td><asp:TextBox ID="txtoldpassword" runat="server" TextMode="Password"></asp:TextBox></td>
    </tr>
    <tr>
    <td>New Password:</td><td><asp:TextBox ID="txtnewpassword" runat="server" TextMode="Password"></asp:TextBox></td>
    </tr>
    <tr>
    <td>Confirm Password:</td><td><asp:TextBox ID="txtnewpassword_confirm" runat="server" TextMode="Password"></asp:TextBox></td>
    </tr>
    </table><br />
        <asp:Button ID="btnChangePassword" runat="server" Text="Change Password" /><br /><br />
        <div id="divMessage" runat="server"></div>
    
    </form>
</body>
</html>
