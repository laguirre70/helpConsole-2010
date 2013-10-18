<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="InsertPageObject.aspx.vb" Inherits="HelpConsole2010.InsertPageObject" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Insert Page Object</title>
  	<link href="tools.css" type="text/css" rel="stylesheet"/>
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
    
        function insertObject()
            {
                var returnValue = document.getElementById("LstPageObjects").options[document.getElementById("LstPageObjects").selectedIndex].value;
			    //CloseDlg(returnValue);
			    getRadWindow().close(returnValue);
            }
    </script>
</head>
<body style="margin-bottom:10px; margin-left:10px; margin-top:10px; margin-right:10px;background-color:white">
    <form id="form1" runat="server">
    <div id="divWrapper" runat="server" style="position:relative;width:100%;height:100%;overflow:auto">
    Select a page object and then click the 'insert' button.<br/><br/>
        <table cellpadding="0" cellspacing="0" border="0" style="width:100%">
            <tr>
                <td id="tdInsertList" runat="server" style="font-family:Tahoma, Arial;font-size:8pt;"></td>
                <td align="right" valign="top" style="width:100px"><input type="button" value="Insert" style="width:90px;height:30px" onclick="insertObject()"/></td>
            </tr>
        </table>
    </div>
    </form>
</body>
</html>
