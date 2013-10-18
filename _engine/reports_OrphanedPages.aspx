<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="reports_OrphanedPages.aspx.vb" Inherits="HelpConsole2010.reports_OrphanedPages1" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head id="Head1" runat="server">
    <title>Orphaned Pages</title>
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
                <td colspan="2" style="border-bottom:2px solid yellow"><img src="images/report_OrphanedPages.gif" align="left" hspace="7"/><font size="5">Orphaned Pages</font><br />The following pages were found in the project database but are not included in the contents. Check one or more pages and then click 'Add to Contents' to add the pages to the contents.<br /><br />
</td>
            </tr>

            <tr>
                <td id="tdcontent" runat="server" valign="top">
                    <asp:CheckBoxList ID="CheckBoxList1" runat="server">
                    </asp:CheckBoxList><br />
                    </td>
                    <td align="right" valign="top">
                        <asp:Button ID="btnSelectAll" runat="server" Text="Select All" Width="175px" /><br />
                        <asp:Button ID="btnAddtoContents" runat="server" Text="Add to Contents" Width="175px" />
                        <br />
                        <asp:CheckBox ID="chkReplaceUnderScore" runat="server" Checked="True" 
                            Text="Replace Underscores with Spaces" />
                    </td>
            </tr>
        </table>
 
    </form>
</body>
</html>
