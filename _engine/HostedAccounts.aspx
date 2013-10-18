<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="HostedAccounts.aspx.vb"
    Inherits="HelpConsole2010.HostedAccounts" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>HelpConsole.Com Accounts</title>
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
            <div style="width:300px;display:inline-block;padding-left:24px;font-size:14pt">Username</div><div style="width:300px;display:inline-block;font-size:14pt;">Full Name</div><div style="width:300px;display:inline-block;font-size:14pt;">Company</div>

    <asp:CheckBoxList ID="CheckBoxList1" runat="server">
    </asp:CheckBoxList><br />
    <asp:Button ID="btnShowProjects" runat="server" Text="ShowProjects" />
    &nbsp;<asp:Button ID="btnDeleteEmptyAccounts" runat="server" Text="Delete Empty Accounts" />&nbsp;<asp:Button ID="btnResetPassword" runat="server" Text="Reset Password" />
    <br />
    <br />
    
    <div id="divMessage" runat="server">
    </div>
    </form>
</body>
</html>
