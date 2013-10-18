<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="tools_translations.aspx.vb" Inherits="HelpConsole2010.tools_translations" validateRequest="false"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Language Translation</title>
   	<link href="tools.css" type="text/css" rel="stylesheet"/>
</head>
<body class="content_light">
    <form id="form1" runat="server">
    <table id="tblwrapper" runat="server" style="width:100%;" cellpadding="12" cellspacing="0">
        <tr>
            <td class="content_dark">
                <span id="spanheading" runat="server" style="font-size: 24pt;font-weight:bold">Language Translation</span>
                <br />
                <a href="tools.aspx?projectname=<%=request.querystring("projectname")%>" >Tools</a> > Language Translation
            </td>
            <td align="right" class="content_dark">
            <input type="submit" value="Save" style="width:130px;height:30px" />
            </td>
        </tr>
        <tr id="trmessage" runat="server" style="display:none">
            <td colspan="2">
            </td>
        </tr>
        <tr>
            <td runat="server" colspan="2" valign="top">
                <table style="width:100%;height:27px;table-layout:fixed" cellpadding="4" cellspacing="0" border="0">
                    <tr style="background-image:url(images/manageprojects_create_top.gif);height:27px">
                        <td style="width:175px;color:white">Label</td>
                        <td style="width:200px;color:white">Value</td>
                        <td style="color:white">Description</td>
                    </tr>
                </table>
                <div id="divList" runat="server" style="width:100%;height:396px;overflow:auto">
				</div>
	        </td>
	    </tr>

	</table>





    </form>
</body>
</html>
