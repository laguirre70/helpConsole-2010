<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="reports_UnusedImages.aspx.vb" Inherits="HelpConsole2010.reports_Unused_Images" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head id="Head1" runat="server">
    <title>Unused Images</title>
  	<link href="tools.css" type="text/css" rel="stylesheet"/>
    <script type="text/javascript">
        
        function PrintReport()
            {
            window.focus(); 
	        window.print();
            }
    </script>
</head>
<body>
    <form id="form1" runat="server">
        <table id="tblwrapper" runat="server" style="width:100%" cellpadding="10" cellspacing="0">
            <tr>
                <td colspan=2 style="border-bottom:2px solid yellow"><img src="images/report_unusedimages.gif" align=left hspace=7/><font size=5>Unused Images</font><br />The following images are not used in any help pages, variables, stylesheets, or page templates. Check the images that you wish to delete and click the 'Delete' button.<br /><br />
</td>
            </tr>

            <tr>
                <td id="tdcontent" runat="server" valign="top">
                    <asp:CheckBoxList ID="CheckBoxList1" runat="server">
                    </asp:CheckBoxList><br />
                    </td>
                    <td align="right" valign="top">
                        <asp:Button ID="btnSelectAll" runat="server" Text="Select All" Width="175px" /><br />
                        <asp:Button ID="btnDeleteImages" runat="server" Text="Delete Selected Images" Width="175px" /></td>
            </tr>
        </table>
 
    </form>
</body>
</html>