<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="tools_Properties.aspx.vb" Inherits="HelpConsole2010.tools_Properties" %>
<%@ Register Assembly="ComponentArt.Web.UI" Namespace="ComponentArt.Web.UI" TagPrefix="ComponentArt" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Project Properties</title>
  	<link href="tools.css" type="text/css" rel="stylesheet"/>
    <script type="text/javascript">
        function showTree()
            {
            //document.getElementById("tbldialog").style.display = ""
            document.getElementById("trTreeview").style.display = ""
            }
        
        function TreeCancel()
            {
            //document.getElementById("tbldialog").style.display = "none"
            document.getElementById("trTreeview").style.display = "none"
            }

        function loadpage(id)
            {
            document.getElementById("txtStartPage").value = id;
            //document.getElementById("tbldialog").style.display = "none"
            document.getElementById("trTreeview").style.display = "none"
            }
    </script>
</head>
<body class="content_light">
    <form id="form1" runat="server">
    <table id="tblwrapper" runat="server" style="width:100%;" cellpadding="12" cellspacing="0">
        <tr>
            <td class="content_dark">
                <strong><span id="spanheading" runat="server" style="font-size: 24pt;">Project Properties</span></strong>
                <br />
                <a href="tools.aspx?projectname=<%=request.querystring("projectname")%>" >Tools</a> > Properties
            </td>
            <td align="right" class="content_dark">
                <asp:button id="btnCancel" runat="server" Width="130px" height="30" Text="Cancel" ></asp:button>
                <asp:button id="btnok" runat="server" Width="130px" height="30" Text="Save"></asp:button>
            </td>
        </tr>
        <tr>
            <td valign="top" colspan="2">

                <table id="tbldetail" cellspacing="0" cellpadding="4" width="100%" border="0" runat="server">
	                <tr>
		                <td style="width:150px" align="right">Start Page:</td>
		                <td><asp:textbox id="txtStartPage" runat="server" Width="216px" title="Defines what page will be displayed when the help system is initially opened."></asp:textbox><input type="button" value="Select" onclick="showTree()" /></td>
		            </tr>
		            <tr id="trTreeview" runat="server" style="display:none">
		                <td></td>
		                <td>
                            <div style="background-color:white;border:1px solid black;width:300px">
                            <COMPONENTART:TREEVIEW id="TreeView1" runat="server"></COMPONENTART:TREEVIEW>
                            <input type="button" value="Cancel" onclick="TreeCancel()" />
                            </div>
		                </td>
		            </tr>
		            <tr>
		                <td align="right">Default Skin:</td>
                        <td><asp:dropdownlist id="lstDefaultSkin" runat="server" Width="216px" title="This is the skin that is initially displayed when the help system is displayed"></asp:dropdownlist></td>
		            </tr>
		            <tr>
		                <td align="right">Help Format:</td>
                        <td><asp:dropdownlist id="lstHelpFormat" runat="server" Width="216px" title="Determines if pages are displayed in iframes or not."></asp:dropdownlist></td>
		            </tr>
		            <tr>
		                <td align="right">Default Contents Mode:</td>
                        <td><asp:dropdownlist id="lstDefaultContentsMode" runat="server" Width="216px" title="This should be set to 'live' if there are multiple authors." ></asp:dropdownlist></td>
		            </tr>
		            <tr>
		                <td align="right">Editor Theme:</td>
                        <td><asp:dropdownlist id="lstEditorTheme" runat="server" Width="216px" title="The HTML editor interface can be light or dark."></asp:dropdownlist></td>
		            </tr>
		            <tr>
		                <td align="right">Users Dataset:</td>
                        <td><asp:dropdownlist id="lstUsersDataset" runat="server" Width="216px" title="This attaches the user list to a dataset to allow additional information like 'company' and 'phone number' to be stored."></asp:dropdownlist></td>
		            </tr>
		            <tr>
		                <td align="right">Activity Log:</td>
                        <td><asp:dropdownlist id="lstActivityLog" runat="server" Width="216px" title="Determines what user activity is written to the activity log."></asp:dropdownlist></td>
		            </tr>
   		            <tr>
		                <td align="right">Allow Scripts:</td>
                        <td><asp:dropdownlist id="lstAllowScripts" runat="server" Width="216px" title="Determines if javascript can be included in page HTML. If disabled, script tags will be stripped out when the page is saved."></asp:dropdownlist></td>
		            </tr>
		            <tr>
		                <td align="right">Default Page Status</td>
                        <td><asp:dropdownlist id="lstDefaultPageStatus" runat="server" Width="216px" title="Used as an approval process to allow managers to see what pages were changed or added."></asp:dropdownlist></td>
		            </tr>
		            <tr>
		                <td align="right">Default Comment Status:</td>
                        <td><asp:dropdownlist id="lstDefaultCommentStatus" runat="server" Width="216px" title="Determines if comments are automatically added to the page, or require approval first."></asp:dropdownlist></td>
		            </tr>
		            <tr>
		                <td align="right">SMTP Server:</td>
                        <td><asp:textbox id="txtSMTPServer" runat="server" Width="216px" title="Used to send email notifications when dataset records are added, edited or deleted."></asp:textbox></td>
		            </tr>
		            <tr>
		                <td align="right">SMTP UserName:</td>
                        <td><asp:textbox id="txtSMTPUserName" runat="server" Width="216px" ></asp:textbox></td>
		            </tr>
		            <tr>
		                <td align="right">SMTP Password:</td>
                        <td><asp:textbox id="txtSMTPPassword" TextMode="password" runat="server" Width="216px" ></asp:textbox></td>
		            </tr>
		            
		            

	            </table>
	        </td>
	    </tr>
	</table>



    </form>
</body>
</html>
