<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="VarPrompts.aspx.vb" Inherits="HelpConsole2010.VarPrompts" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>New Project Variable Prompts</title>
  	<link href="tools.css" type="text/css" rel="stylesheet"/>

    <script type='text/javascript'>
    function CloseDialog()
        {
        parent.document.getElementById('tbldialog').style.display = 'none';
        parent.document.getElementById('divtransparency').style.display = 'none';
        }
    </script>


</head>
<body style="margin:0px">
    <form id="form1" method="post" runat="server">
    <table style="width:100%;" cellspacing="0" cellpadding="18">
        <tr style="height:50px">
            <td style="background-color:#DDDDDD;"><img src="../_engine/images/varprompt_logo.gif" align="left" style="padding-right:10px" /><span style="font-size:16pt">Project Variables</span><br /><br /><span style="font-size:8pt">These values will be displayed on various pages throughout the project. Variables can be changed later by selecting 'Tools > Variables'.</span></td>
        </tr>
        <tr>
            <td valign="top" id="tdVarPrompts" runat="server"></td>
        </tr>
        <tr style="height:20px">
            <td height: 20px;" align="right">
                &nbsp;<input type="button" value = "Skip" style="width:60px" onclick="CloseDialog()"/>
                <asp:Button ID="btnOK" runat="server" Text="OK" Width="120px" /></td>
        </tr>
    </table>
    </form>
</body>
</html>
