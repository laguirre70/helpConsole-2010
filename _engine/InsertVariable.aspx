<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="InsertVariable.aspx.vb" Inherits="HelpConsole2010.InsertVariable" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Insert Variable</title>
    <style type="text/css">
        a {font-family: tahoma,arial; font-size: 8pt;}
        a:link {text-decoration: none; color: black}
        a:active {text-decoration: none; color: black}
        a:visited {text-decoration: none; color: black}
        a:hover {background-color: yellow; color: black}
    
    </style>
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
    
        function InsertVariable(variable)
            {
		    var returnValue = variable;
			//CloseDlg(returnValue);
			
			//alert("return value = " + returnValue)
			getRadWindow().close(returnValue);
            }
    </script></head>
<body style="background-color:white">
    <form id="form1" runat="server">
        <div id="divVariables" runat="server" style="position:relative;width:100%;height:100%;overflow:auto">
    
        </div>
    </form>
</body>
</html>
