<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="InsertCondition.aspx.vb" Inherits="HelpConsole2010.InsertCondition" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Insert Condition</title>
    <script type="text/javascript">
        function getRadWindow()
            {
   	        if (window.radWindow)
	            {
		        return window.radWindow;
    	        }
	        if (window.frameElement && window.frameElement.radWindow)
	            {
		        return window.frameElement.radWindow;
	            }
	        return null;
            }

        function insertLink()
            {
   			var linkContainer = document.getElementById("CheckBoxList1");
                var returnValue = CheckBoxList1.options[CheckBoxList1.selectedIndex].value;
			    //CloseDlg(returnValue);
			    getRadWindow().close(returnValue);
            }
            
        function showSkinTab()
            {
            //alert("Skin")
            document.getElementById("tdSkinTab").style.backgroundImage="url(images/tab_light.gif)";
            document.getElementById("tdSkinTab").style.color="#444444";
            document.getElementById("divSkinTab").style.display="";
            
            document.getElementById("tdUsernameTab").style.backgroundImage="url(images/tab_dark.gif)";
            document.getElementById("tdUsernameTab").style.color="white";
            document.getElementById("divUsernameTab").style.display="none";
            
            document.getElementById("tdSQLTab").style.backgroundImage="url(images/tab_dark.gif)";
            document.getElementById("tdSQLTab").style.color="white";
            document.getElementById("divSQLTab").style.display="none";
            }

        function showUsernameTab()
            {
            //alert("username")
            document.getElementById("tdSkinTab").style.backgroundImage="url(images/tab_dark.gif)";
            document.getElementById("tdSkinTab").style.color="white";
            document.getElementById("divSkinTab").style.display="none";
            
            document.getElementById("tdUsernameTab").style.backgroundImage="url(images/tab_light.gif)";
            document.getElementById("tdUsernameTab").style.color="#444444";
            document.getElementById("divUsernameTab").style.display="";
            
            document.getElementById("tdSQLTab").style.backgroundImage="url(images/tab_dark.gif)";
            document.getElementById("tdSQLTab").style.color="white";
            document.getElementById("divSQLTab").style.display="none";
            }

        function showSQLTab()
            {
            //alert("SQL")
            document.getElementById("tdSkinTab").style.backgroundImage="url(images/tab_dark.gif)";
            document.getElementById("tdSkinTab").style.color="white";
            document.getElementById("divSkinTab").style.display="none";

            document.getElementById("tdUsernameTab").style.backgroundImage="url(images/tab_dark.gif)";
            document.getElementById("tdUsernameTab").style.color="white";
            document.getElementById("divUsernameTab").style.display="none";

            document.getElementById("tdSQLTab").style.backgroundImage="url(images/tab_light.gif)";
            document.getElementById("tdSQLTab").style.color="#444444";
            document.getElementById("divSQLTab").style.display="";
            }

    </script>
</head>
<body style="margin:0px 1px 1px 1px;background-color:white">
    <form id="form1" runat="server">
    <div id="divInsertCondition" runat="server" style="width:100%;height:100%">
    <table cellpadding="0" cellspacing="0" border="0" style="width:100%;height:44px">
        <tr>
            <td id="tdSkinTab" align="center" style="width:92px;font-family:Tahoma, Arial;font-size:11pt;background-image:url(images/tab_light.gif);color:#444444;cursor:pointer" onclick="showSkinTab()">Skin</td>
            <td id="tdUsernameTab" align="center" style="width:92px;font-family:Tahoma, Arial;font-size:11pt;background-image:url(images/tab_dark.gif);color:white;cursor:pointer" onclick="showUsernameTab()">Username</td>
            <td id="tdSQLTab" align="center" style="width:92px;font-family:Tahoma, Arial;font-size:11pt;background-image:url(images/tab_dark.gif);color:white;cursor:pointer" onclick="showSQLTab()">SQL</td>
        </tr>
    </table>

    <div id="divSkinTab" runat="server" style="width:100%;height:308px;overflow:auto">
    <table cellpadding="0" cellspacing="15" border="0" style="width:100%">
        <tr>
            <td style="font-family:Tahoma, Arial;font-size:8pt;"><div style="float:right"><asp:button id="btnInsert" runat="server" Text="Insert" Width="64px"></asp:button></div>Select the skins that this conditional text will be visible for.</td>
        </tr>
        <tr>
            <td><asp:checkboxlist id="CheckBoxList1" runat="server" Font-Names="Arial" Font-Size="8pt"></asp:checkboxlist></td>
        </tr>
    </table>
    </div>

    <div id="divUsernameTab" runat="server" style="width:100%;height:308px;overflow:auto;display:none">
    <table cellpadding="0" cellspacing="15" border="0" style="width:100%;">
        <tr>
            <td style="font-family:Tahoma, Arial;font-size:8pt;"><div style="float:right"><asp:button id="btnInsertUserCondition" runat="server" Text="Insert" Width="64px"></asp:button></div>Select the users that this conditional text will be visible for.</td>
        </tr>
        <tr>
            <td><asp:checkboxlist id="chkUsers" runat="server" Font-Names="Arial" Font-Size="8pt"></asp:checkboxlist></td>
        </tr>
    </table>
    </div>

    <div id="divSQLTab" runat="server" style="display:none;width:100%">
    <table cellpadding="0" cellspacing="15" border="0" style="width:100%;">
        <tr>
            <td style="font-family:Tahoma, Arial;font-size:8pt;"><div style="float:right"><asp:button id="btnInsertSQLCondition" runat="server" Text="Insert" Width="64px"></asp:button></div>Specify a SQL Statement that will produce a list of users that this conditional text will be visible for.<br /><br />Example:<br /><font face="courier new">Select username from [_users] where [security group] = 'admin'</font></td>
        </tr>
        <tr>
            <td><textarea id="txtSQLStatement" runat="server" cols="20" rows="20" style="width:100%;height:125px"></textarea></td>
        </tr>
    </table>
    </div>
  
    
    </div>
    </form>
</body>
</html>
