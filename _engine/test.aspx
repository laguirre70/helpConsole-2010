<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="test.aspx.vb" Inherits="HelpConsole2010.test1" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml" >
<head>
    <title>Untitled Page</title>
       <script type="text/javascript" src="helpwindow.js"></script>

</head>
<body>

    <form id="form1" runat="server">
    <input type="button" onclick="ShowHelpPage('http://localhost:2482/test1/page.aspx?pageid=faq',event)" value="show page" />
    <input type="button" onclick="Test('http://www.google.com')" value="show test page" />
      
    
    </form>

</body>
</html>
