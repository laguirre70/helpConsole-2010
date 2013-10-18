<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="tools_SecurityGroupList.aspx.vb" Inherits="HelpConsole2010.tools_SecurityGroupList" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Security Groups</title>
  	<link href="tools.css" type="text/css" rel="stylesheet"/>
    <script type="text/javascript">
    
    function AddRecord(projectname)
        {
		window.location.href="tools_SecurityGroupDetail.aspx?action=add&projectname="+projectname
        }
        
    function DeleteRecord(securitygroup,projectname)
        {
        if (confirm("Delete Security Group '" + securitygroup + "'?") == true)
            {
            window.location.href="tools_SecurityGroupList.aspx?deleterecord="+securitygroup+"&projectname="+projectname
            }
        }
        
    function CopyRecord(fromrecord,projectname)
        {
		window.location.href="tools_SecurityGroupDetail.aspx?securitygroup="+fromrecord+"&action=copy&projectname="+projectname
        }
        
    </script>
</head>
<body class="content_light">
    <form id="form1" runat="server">

    <table id="tblwrapper" runat="server" style="width:100%;" cellpadding="12" cellspacing="0" border="0">
        <tr>
            <td class="content_dark">
                <strong><span id="spanheading" runat="server" style="font-size: 24pt;">Security Groups</span></strong>
                <br />
                <a href="tools.aspx?projectname=<%=request.querystring("projectname")%>" >Tools</a> > Security Groups
            </td>
            <td align="right" class="content_dark"><input id="btnadd" type="button" value="Add" style="width:130px;height:30px" runat="server"/></td>
            
        </tr>
        <tr>
            <td valign="top" colspan="2">
                <table style="width:100%;height:27px;table-layout:fixed" cellpadding="4" cellspacing="0" border="0">
                    <tr style="background-image:url(images/manageprojects_create_top.gif);height:27px">
                        <td style="width:40px"></td>
                        <td style="color:white">Security Group</td>
                    </tr>
                </table>
                <div id="divList" runat="server" style="width:100%;height:400px;overflow:auto">
				</div>
            </td>
	    </tr>
	</table>    </form>
</body>
</html>
