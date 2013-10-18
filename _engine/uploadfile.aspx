<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="uploadfile.aspx.vb" Inherits="HelpConsole2010.uploadfile" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Untitled Page</title>
</head>
<body style="margin:0px; background-color:transparent">
		<form id="Form1" method="post" runat="server">
		<input id="btnUpload" style="VISIBILITY: hidden;position:absolute;top:0px" type="submit" value="Upload" name="btnUpload" runat="server"/>
				<input id="File1" runat="server" style="WIDTH: 89px;position:relative;left:0px;" type="file" onchange="document.getElementById('btnUpload').click();" size="1" name="File1"/>
		</form>
		</body>
</html>
