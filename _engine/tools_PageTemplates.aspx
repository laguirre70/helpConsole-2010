<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="tools_PageTemplates.aspx.vb" Inherits="HelpConsole2010.tools_PageTemplates" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Page Templates</title>
   	<link href="tools.css" type="text/css" rel="stylesheet"/>
    <script type="text/javascript">
    function AddTemplate(projectname)
        {
		window.location.href="../"+projectname+"/editor.aspx?template=_new_"
        }
        
    function DeleteTemplate(template,projectname)
        {
        //if this is the last template, do not allow it to be deleted.
        if (document.getElementById("tbltemplates").rows.length == 1)
            {
            alert("There must be at least one page template.")
            return;
            }
        
        if (confirm("Delete template '" + template + "'?") == true)
            {
            window.location.href="tools_PageTemplates.aspx?deletetemplate="+template+"&projectname="+projectname
            }
        }
        
    function CopyTemplate(fromtemplate,projectname)
        {
		window.location.href="../"+projectname+"/editor.aspx?template=_copy_&copyfrom="+fromtemplate
        }
        
    </script>
</head>
<body class="content_light">
    <form id="Form1" runat="server">
    <table id="tblwrapper" runat="server" style="width:100%;" cellpadding="12" cellspacing="0" border="0">
        <tr>
            <td class="content_dark">
                <strong><span id="spanheading" runat="server" style="font-size: 24pt;">Page Templates</span></strong>
                <br />
                <a href="tools.aspx?projectname=<%=request.querystring("projectname")%>" >Tools</a> > Page Templates
            </td>
            <td align="right" class="content_dark">
                <input id="btnadd" type="button" value="Add" style="width:130px" runat="server"/>
            </td>

        </tr>
        <tr id="trmessage" runat="server" style="display:none">
            <td>
            </td>
        </tr>

        <tr>
            <td valign="top" colspan="2" align="left">
                <table style="width:100%;height:27px;table-layout:fixed" cellpadding="4" cellspacing="0" border="0">
                    <tr style="background-image:url(images/manageprojects_create_top.gif);height:27px">
                        <td style="width:40px"></td>
                        <td style="color:white" align="left">Name</td>
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
