<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="EmailPrompt.aspx.vb" Inherits="HelpConsole2010.EmailPrompt" validateRequest="false"%>
<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>


<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Email Prompt</title>
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
    
        function CloseWindow()
            {
			getRadWindow().close();
            }
    </script>

</head>
<body style="background-color:white;margin:15px">
    <form id="form1" runat="server">
        <table style="width:100%">
            <tr>
                <td><asp:Label id="lblPrompt" runat="server">Email Form</asp:Label></td>
                <td align="right"><asp:Button id="btnSend" runat="server" Width="90" Height="32" Text="Send Email"></asp:Button></td>
            </tr>
        </table>
    		
	        <TABLE id="Table1" cellSpacing="0" cellPadding="3" width="100%" border="0">
				<TR>
					<TD width="50">To:</TD>
					<TD>
						<asp:TextBox id="txtTo" runat="server" Width="100%"></asp:TextBox></TD>
				</TR>
				<TR>
					<TD>From:</TD>
					<TD>
						<asp:TextBox id="txtFrom" runat="server" Width="100%"></asp:TextBox></TD>
				</TR>
				<TR>
					<TD>Subject:</TD>
					<TD>
						<asp:TextBox id="txtSubject" runat="server" Width="100%"></asp:TextBox></TD>
				</TR>
				<TR>
					<TD vAlign="top">Body:</TD>
					<TD>
				        <telerik:radscriptmanager ID="RadScriptManager1" runat="server"></telerik:radscriptmanager>
						<telerik:radeditor id="editor1" Width="100%" Runat="server" ToolsFile="../_engine/ToolsFile.xml" Skin="Black" Height="310px"></telerik:radeditor>
					</TD>
				</TR>
			</TABLE>		

    </form>
</body>
</html>
