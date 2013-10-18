<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="keyprompt.aspx.vb" Inherits="HelpConsole2010.keyprompt" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Activation Key</title>
  	<link href="tools.css" type="text/css" rel="stylesheet"/>

    <script type="text/javascript">
        function GetRadWindow()   
            {   
            var oWindow = null;   
            if (window.radWindow)   
                oWindow = window.radWindow;   
            else if (window.frameElement.radWindow)   
                oWindow = window.frameElement.radWindow;   
            return oWindow;   
            }  
    </script>   
    
</head>
<body style="margin-top:25px;margin-left:25px;background-color:white">
    <form id="form1" runat="server">
    <table cellpadding="0" cellspacing="0">
        <tr id="trActivateMessage" runat="server">
            <td>
                <img src="images/activationkey.gif" align="right" alt="Activation Key"/>
                <span style="font-size:16pt">Please Enter Your Activation Key</span><br /><br />
                Please enter your activation key. If you click 'Evaluate', you'll have <span id="spanDaysRemaining" runat="server" style="font-weight:bold">30</span> days remaining to evaluate HelpConsole. For ordering information visit us at <a href="http://www.extremeease.com" target="_blank">http://www.ExtremeEase.com</a>
            </td>
        </tr>
        <tr>
            <td>
                <br />Activation Key:<br/>
                <input id="txtActivationKey" style="width:209px" runat="server"/>&nbsp;<input type="button" value="Activate Now" style="width:125px" id="btnActivateNow" runat="server"/>
            </td>
        </tr>
        <tr id="trEditionList" runat="server">
            <td>
                <br />Edition to Evaluate:<br/>
                <select id="lstEvalEdition" style="width:215px" runat="server">
                    <option value="Lite Edition">Lite Edition</option>
                    <option value="Standard Edition">Standard Edition</option>
                    <option value="Professional Edition">Professional Edition</option>
                    <option value="Enterprise Edition" selected="selected">Enterprise Edition</option>
                </select>&nbsp;<input type="button" value="Evaluate" style="width:125px" id="btnEvaluate" runat="server"/>
            </td>
        </tr>
        <tr>
            <td id="tdMessage" runat="server"></td>
        </tr>
    </table>
    </form>
</body>
</html>
