<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="hosted_subscribe.aspx.vb"
    Inherits="HelpConsole2010.hosted_subscribe" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Activate Project</title>
        <style>
        body
        {
            font-size: 8pt;
            font-family: Tahoma, Arial, Helvetica, sans-serif;
            margin:20px;
            background-color:White;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    
    <span id="spanActivate" runat="server" style="font-size:13pt">Activate Project</span><img src="images/subscribe.gif" align="right" /><br /><br />
    Click on a link below to create a subscription and activate this project. There is no long term commitment. You'll be able to cancel the subscription at any time. For more information about each edition, review the <a href="http://www.extremeease.com/helpconsole_com.htm" target="_blank">HelpConsole.com Edition Comparison</a><br /><br />
    <table>
        <tr>
            <td>
                $16.95/month - Lite Edition
            </td>
            <td>
                <a id="lnkLite" runat="server" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GDDPD6CMLB7VN" target="_blank">Create Subscription</a>
            </td>
        </tr>
        <tr>
            <td>
                $29.95/month - Standard Edition
            </td>
            <td>
                <a id="lnkStandard" runat="server" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YEJZ8PKVDFWRU" target="_blank">Create Subscription</a>
            </td>
        </tr>
        <tr>
            <td>
                $39.95/month - Professional Edition
            </td>
            <td>
                <a id="lnkProfessional" runat="server" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CWPU29ZWJQSK8" target="_blank">Create Subscription</a>
            </td>
        </tr>
        <tr>
            <td>
                $99.95/month - Enterprise Edition
            </td>
            <td>
                <a id="lnkEnterprise" runat="server" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SYUE68NUPDXB2" target="_blank">Create Subscription</a>
            </td>
        </tr>
    </table>

    </form>
    
</body>
</html>
