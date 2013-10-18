<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="tools_variables.aspx.vb" Inherits="HelpConsole2010.variables" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Manage Variables</title>
    <link href="tools.css" type="text/css" rel="stylesheet"/>
    
    <script type="text/javascript">
    function delete_AddVariable(projectname)
        {
        //prompt for the variable name
        var variable = prompt("Please enter a name for the new variable.","New Variable");
		//If a name was entered, load the editor
		if (variable != "" && variable != null)
			{
			window.location.href="../"+projectname+"/editor.aspx?newvariable="+variable
			}
        }

    function AddVariable(projectname)
        {
		window.location.href="../"+projectname+"/editor.aspx?variable=_new_"
        }

        
    function Delete(variable,projectname)
        {
        if (confirm("Delete variable '" + variable + "'?") == true)
            {
            window.location.href="tools_variables.aspx?deletevariable="+variable+"&projectname="+projectname
            }
        }
        
    </script>

    
</head>
<body class="content_light">
   <form id="Form1" runat="server">
    <table id="tblwrapper" runat="server" style="width:100%;" cellpadding="12" cellspacing="0" border="0">
        <tr>
            <td class="content_dark">
                <strong><span id="spanheading" runat="server" style="font-size: 24pt;">Variables</span></strong>
                <br />
                <a href="tools.aspx?projectname=<%=request.querystring("projectname")%>" >Tools</a> > Variables
            </td>
            <td align="right" class="content_dark">
                <input id="btnadd" type="button" value="Add" style="width:130px;height:30px" runat="server"/>
                <span id="spanMessage" runat="server"></span>
            </td>
        </tr>
        <tr>
            <td valign="top" colspan="2">
                <table style="width:100%;height:27px;table-layout:fixed" cellpadding="4" cellspacing="0" border="0">
                    <tr style="background-image:url(images/manageprojects_create_top.gif);height:27px">
                        <td style="width:30px"></td>
                        <td style="width:200px;color:white">Name</td>
                        <td style="color:white">Value</td>
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
