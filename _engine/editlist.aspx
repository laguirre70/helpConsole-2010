<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="editlist.aspx.vb" Inherits="HelpConsole2010.editlist" validateRequest="false" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Edit Value List</title>
    
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
<body bgcolor="#4f4f4f">
    <form id="form1" runat="server">
        <span style="font-family:Arial;font-size:9pt;color:white">Enter a list of items or an SQL statement</span><br />
        <asp:textbox id="txtItems" runat="server" TextMode="MultiLine" style="FONT-SIZE:11px;FONT-FAMILY:tahoma,arial" Height="200px" Width="255px"></asp:textbox><br />
		<asp:Button id="btnOK" runat="server" Text="OK" Width="100px"></asp:Button>
    </form>
</body>
</html>
