<%@ Page Language="VB" AutoEventWireup="false" Inherits="HelpConsole2010._engine_permissions" Codebehind="tools_users.aspx.vb" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Users</title>
   	<link href="tools.css" type="text/css" rel="stylesheet"/>
    <script type="text/javascript">
    
    function AddRecord(projectname)
        {
		window.location.href="tools_userdetail.aspx?action=add&projectname="+projectname
        }
        
    function DeleteRecord(username,projectname)
        {
        //if the username is admin don't allow it to be deleted.
        if (username.toLowerCase() == "admin")
            {
            alert("The 'Admin' username cannot be deleted.");
            return;
            }
            
        if (confirm("Delete User '" + username + "'?") == true)
            {
            window.location.href="tools_users.aspx?deleterecord="+username+"&projectname="+projectname
            }
        }
        
    function CopyRecord(fromrecord,projectname)
        {
		window.location.href="tools_userdetail.aspx?username="+fromrecord+"&action=copy&projectname="+projectname
        }

        function btnadd_onclick() {

        }

    </script>
</head>
<body class="content_light">
    <form id="form1" runat="server">


    <table id="tblwrapper" runat="server" style="width:100%;" cellpadding="12" cellspacing="0" border="0">
        <tr>
            <td class="content_dark">
                <span id="spanheading" runat="server" style="font-size: 24pt;font-weight:bold">Users</span>
                <br />
                <a href="tools.aspx?projectname=<%=request.querystring("projectname")%>" >Tools</a> > Users
            </td>
            <td align="right" class="content_dark"><input id="btnadd" type="button" value="Add" style="width:130px;height:30px" runat="server" onclick="return btnadd_onclick()" /></td>
        </tr>
        <tr id="trmessage" runat="server" style="display:none">
            <td colspan="2">
            </td>
        </tr>

        <tr>
            <td valign="top" colspan="2">
                <table style="width:100%;height:27px;table-layout:fixed" cellpadding="0" cellspacing="0" border="0">
                    <tr style="background-image:url(images/manageprojects_create_top.gif);height:27px">
                        <td style="width:20px"></td>
                        <td style="width:24px"></td>
                        <td style="width:175px;color:white"><a style="color:White;text-decoration:none" href="tools_users.aspx?projectname=<%=request.querystring("projectname")%>&sort=username">Name</a></td>
                        <td style="width:175px;color:white"><a style="color:White;text-decoration:none" href="tools_users.aspx?projectname=<%=request.querystring("projectname")%>&sort=fullname">Full Name</a></td>
                        <td style="color:white"><a style="color:White;text-decoration:none" href="tools_users.aspx?projectname=<%=request.querystring("projectname")%>&sort=securitygroup">Security Group</a></td>
                    </tr>
                </table>
                <div id="divList" runat="server" style="width:100%;height:400px;overflow:auto">
				</div>
            </td>
	    </tr>
	</table>

    
    </form>
</body>
</html>
