<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="test3.aspx.vb" Inherits="HelpConsole2010.test3" %>
<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Untitled Page</title>
</head>
<body>
		<form id="form1" runat="server">
        
        <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
        </telerik:RadScriptManager>
        
        <telerik:RadEditor ID="RadEditor1" Runat="server">
            <Content>
</Content>
        </telerik:RadEditor>
        
		</form>
</body>
</html>
