<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="GlobalReplace.aspx.vb" Inherits="HelpConsole2010.GlobalReplace" validateRequest="false" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Global Search and Replace</title>
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
        </script>
</head>
<body style="background-color:white">

    <form id="form1" runat="server">
    
    <table id="tblGlobalReplace" runat="server" style="width:100%;" cellpadding="8" cellspacing="0" border="0">
        <tr>
            <td id="tdheading" runat="server" colspan="2">This function replaces text (or HTML code) across all pages in your help project. This operation cannot be undone. If you are replacing text on many pages, it is recommended that you backup the project by selecting 'Tools > Backup' </td>
        </tr>

        <tr>
            <td>Find&nbsp; What:</td><td><input id="txtSearchText" runat="server" type="text" style="width:225px"/></td>
        </tr>
        <tr>
            <td>Replace&nbsp;With:</td><td><input id="txtReplaceText" runat="server"  type="text" style="width:225px"/></td>
        </tr>
        <tr>
            <td></td><td align="right"><input type="button" style="width:130px" value="Replace All" id="btnReplaceAll" runat="server"/></td>
        </tr>
    </table>
    </form>
</body>
</html>
