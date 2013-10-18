<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="tools_reports.aspx.vb" Inherits="HelpConsole2010.tools_reports" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Reports</title>
  	<link href="tools.css" type="text/css" rel="stylesheet"/>

</head>
<body>
    <form id="form1" runat="server">
    <table id="tblwrapper" runat="server" style="width:100%;height:100%" cellpadding="0" cellspacing="0">
        <tr>
            <td style="background-color:#DDDDDD;border-bottom:solid 1px #CCCCCC;height:60px">
                <strong><span id="spanheading" runat="server" style="font-size: 24pt;">Reports</span></strong>
                <br />
                <a href="tools.aspx?projectname=<%=request.querystring("projectname")%>" >Tools</a> > Reports
            </td>
        </tr>
        <tr>
            <td valign="top" style="padding:15px"> 
                <table cellspacing="0" cellpadding="15" border="0">
                    <tr>
                        <td style="width:50px"><a class="reportlabel" href="reports_pendingcomments.aspx?projectname=<%=request.querystring("projectname")%>"><img src="images/report_pendingcomments.gif" alt="Pending Reader Comments" border="0"/></a></td>
                        <td valign="top"><a class="reportlabel" href="reports_pendingcomments.aspx?projectname=<%=request.querystring("projectname")%>">Pending Reader Comments</a><br /><span style="color:#8393AC">Lists pending and approved reader comments.</span></td>
                    </tr>
                    <tr>
                        <td style="width:50px"><a class="reportlabel" href="reports_pagestatus.aspx?projectname=<%=request.querystring("projectname")%>"><img src="images/report_pagestatus.gif" alt="Page Status" border="0"/></a></td>
                        <td valign="top"><a class="reportlabel" href="reports_pagestatus.aspx?projectname=<%=request.querystring("projectname")%>">Page Status</a><br /><span style="color:#8393AC">Lists help pages filtered by page status.</span></td>
                    </tr>
                    <tr>
                        <td style="width:50px"><a class="reportlabel" href="reports_unusedimages.aspx?projectname=<%=request.querystring("projectname")%>"><img src="images/report_unusedimages.gif" alt="Unused Images" border="0"/></a></td>
                        <td valign="top"><a class="reportlabel" href="reports_unusedimages.aspx?projectname=<%=request.querystring("projectname")%>">Unused Images</a><br /><span style="color:#8393AC">Lists images that are not used in any help pages.</span></td>
                    </tr>
                </table>
	        </td>
	    </tr>
        <tr>
            <td style="background-color:#DDDDDD;border-top:solid 1px #CCCCCC;height:30px">
            </td>
        </tr>

	</table>

    </form>
</body>
</html>
