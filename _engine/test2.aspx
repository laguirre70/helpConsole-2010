<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="test2.aspx.vb" Inherits="HelpConsole2010.test2" %>


<%@ Register assembly="Telerik.Web.UI" namespace="Telerik.Web.UI" tagprefix="telerik" %>
<%@ Register TagPrefix="ComponentArt" Namespace="ComponentArt.Web.UI" Assembly="ComponentArt.Web.UI" %>



<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Untitled Page</title>
</head>
<body id="body" runat="server" style="margin:0px">
    <form id="form1" runat="server">
        
    <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
    </telerik:RadScriptManager>
    <telerik:RadEditor ID="RadEditor1" Runat="server">
        <Content>
</Content>
    </telerik:RadEditor>
    <br />contents:<br />
     <ComponentArt:TreeView id="TreeView1" runat="server"></ComponentArt:TreeView>
        
    &nbsp;</form>
</body>
</html>
