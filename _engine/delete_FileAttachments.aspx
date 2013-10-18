<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="delete_FileAttachments.aspx.vb" Inherits="HelpConsole2010.FileAttachments" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>File Attachments</title>
 		<link href='tools.css' type='text/css' rel='StyleSheet'>
    	<script language="javascript">
//		function DeleteFile(sFullFile, sFileName) 
//			{
//			var response=confirm("Are you sure you want to delete '" + sFileName + "'?")
//			if (response==true)
//				{
//				//Call ajax function to delete
//				}
//			}
		</script>

</head>
<body>
		<form id="Form1" method="post" runat="server">
			<div style="WIDTH: 100%; HEIGHT: 30px; BACKGROUND-COLOR: #cfddee"><INPUT id="File1" style="LEFT: -17px; WIDTH: 100px; POSITION: relative" type="file" onchange="document.getElementById('btnUpload').click();"
					size="1" name="File1" runat="server"><input id="btnUpload" style="VISIBILITY: hidden; WIDTH: 3px" type="submit" value="Upload"
					name="btnUpload" runat="server">File Attachments&nbsp;&nbsp;<input id="txtdeletefile" name="txtdeletefile" type="hidden" runat="server"></div>
			<div id="divfiles" style="WIDTH: 100%" runat="server"></div>
		</form>
</body>
</html>
