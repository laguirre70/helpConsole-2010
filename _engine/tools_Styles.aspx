<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="tools_Styles.aspx.vb" Inherits="HelpConsole2010.EditStylesheet" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Edit Styles</title>
  	<link href="tools.css" type="text/css" rel="stylesheet"/>

</head>
<body class="content_light">
    <form id="form1" runat="server">
    <table id="tblwrapper" runat="server" style="width:100%;" cellpadding="5" cellspacing="0">
        <tr>
            <td class="content_dark">
                <table style="width:100%" cellpadding="0" cellspacing="0">
                    <tr>
                        <td>
                            <strong><span id="spanheading" runat="server" style="font-size: 24pt;">Styles</span></strong>
                            <br />
                            <a href="tools.aspx?projectname=<%=request.querystring("projectname")%>" >Tools</a> > Styles
                        </td>
                        <td align="right" class="content_dark">
                            <asp:DropDownList ID="lstStyleSheet" class="content_dark" style="border:1px solid white" runat="server" AutoPostBack="True">
                            </asp:DropDownList>
                            <asp:button id="btncancel" runat="server" Width="120px" height="30px" Text="Cancel"></asp:button>
                            <asp:button id="btnsave" runat="server" Width="120px" height="30px" Text="Save"></asp:button>
                        </td>
                    </tr>
                </table>
                
            </td>
        </tr>
        <tr id="trstyles" runat="server">
            <td>
                <textarea id="txtstyles" runat="server" style="width:738px;height:453px;border:1px solid white" rows="10" cols="10"></textarea>
	        </td>
	    </tr>

	</table>



    </form>
</body>
</html>
