<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="reports_PageStatus.aspx.vb" Inherits="HelpConsole2010.reports_HelpPageSummary" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Page Status</title>
  	<link href="tools.css" type="text/css" rel="stylesheet"/>
    <script type="text/javascript">
        function DisplayReport(projectname)
            {
            var filter = document.getElementById("lstfilter").options[document.getElementById("lstfilter").selectedIndex].text;
            window.location.href = "reports_PageStatus.aspx?projectname=" + projectname + "&filter="+filter
            }
        
        function PrintReport()
            {
            window.focus(); 
	        window.print();
            }
    </script>
</head>
<body>
    <form id="form1" runat="server">
        <table id="tblwrapper" runat="server" style="width:100%;height:100%" cellpadding="0" cellspacing="0">
            <tr>
                <td id="tdcontent" runat="server" valign="top">
                </td>
            </tr>
        </table>
 
    </form>
</body>
</html>
