<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="reports_pendingcomments.aspx.vb" Inherits="HelpConsole2010.reports_pendingcomments" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Pending Reader Comments</title>
  	<link href="tools.css" type="text/css" rel="stylesheet"/>
    <script type="text/javascript">
        function PendingCommentsReport(projectname)
            {
            var commentstatus = document.getElementById("lstcommentstatus").options[document.getElementById("lstcommentstatus").selectedIndex].text;
            window.location.href = "reports_pendingcomments.aspx?projectname=" + projectname + "&statusfilter="+commentstatus
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
