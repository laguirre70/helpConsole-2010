<%@ Page Language="VB" AutoEventWireup="false" Inherits="HelpConsole2010._engine_SecurityGroupDetail" Codebehind="tools_SecurityGroupDetail.aspx.vb" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Security Group Detail</title>
  	<link href="tools.css" type="text/css" rel="stylesheet"/>

</head>
<body class="content_light">
    <form id="form1" runat="server">

    <table id="tblwrapper" runat="server" style="width:100%;" cellpadding="12" cellspacing="0">
        <tr>
            <td class="content_dark">
                <strong><span id="spanheading" runat="server" style="font-size: 24pt;">Security Group</span></strong>
                <br />
                <a href="tools.aspx?projectname=<%=request.querystring("projectname")%>" >Tools</a> > <a href="tools_securitygrouplist.aspx?projectname=<%=request.querystring("projectname")%>" >Security Groups</a> > Security Group Detail
            </td>
            <td align="right" class="content_dark">
                <asp:button id="btnCancel" runat="server" Width="130px" height="30" Text="Cancel" ></asp:button>
                <asp:button id="btnok" runat="server" Width="130px" height="30" Text="Save"></asp:button>
            </td>
            
        </tr>
        <tr>
            <td valign="top">

                <table id="tbldetail" cellspacing="0" cellpadding="8" width="100%" border="0" runat="server">
                    <tr id="trmessage" runat="server" style="display:none">
                        <td>
                        </td>
                    </tr>

	                <tr>
		                <td>
    			            <asp:label id="lblSecurityGroup" runat="server" Width="75px" Font-Names="Arial">Name:</asp:label>
				            <asp:textbox id="txtGroupName" runat="server" Width="216px" Enabled="False"></asp:textbox><br/>
				            <br />
				            <asp:label id="Label1" runat="server" Width="75px">Default Skin:</asp:label>
				            <asp:dropdownlist id="lstdefaultskin" runat="server" Width="216px"></asp:dropdownlist><br/>
				            <br/>
				            <asp:checkbox id="chkpublish" runat="server" Text=" Publish"></asp:checkbox><br/>
				            <asp:checkbox id="chktools" runat="server" Text=" Tools"></asp:checkbox><br/>
				            <asp:checkbox id="chkeditpages" runat="server" Text=" Edit Pages"></asp:checkbox><br />
				            <asp:checkbox id="chkeditcontents" runat="server" Text=" Edit Contents"></asp:checkbox><br />
                            <asp:checkbox ID="chkApproveComments" runat="server" Text=" Approve Comments"></asp:checkbox><br />
                            <asp:checkbox ID="chkEditValueLists" runat="server" Text=" Edit Value Lists"></asp:checkbox><br />
                            <span id="spandataset" runat="server">&nbsp;</span><br /><br />
				            <span id="spanfilefolder" runat="server">
				            </span>
				            <br />
			            </td>
		            </tr>
                    <tr id="trDatasetPermissions" runat="server" style="display:none">
                        <td>
                            Dataset Permissions
                            <table borderColor="#DCDCDC" cellSpacing="0" cellPadding="3" border="1">
					                <tr>
							            <td align="right" style="background-color:#DCDCDC">Add</td>
							            <td align="right" style="background-color:#DCDCDC" width="50">Edit</td>
							            <td align="right" style="background-color:#DCDCDC" width="50">Delete</td>
							            <td align="right" style="background-color:#DCDCDC" width="50">Find</td>
						            </tr>
						            <tr>
							            <td align="right"><asp:checkboxlist id="ChkDatasetAdd" runat="server" CellPadding="0" CellSpacing="0" TextAlign="Left" RepeatLayout="Flow"></asp:checkboxlist></td>
							            <td align="right"><asp:checkboxlist id="ChkDatasetEdit" runat="server" CellPadding="0" CellSpacing="0" TextAlign="Left" repeatLayout="Flow"></asp:checkboxlist></td>
							            <td align="right"><asp:checkboxlist id="ChkDatasetDelete" runat="server" CellPadding="0" CellSpacing="0" TextAlign="Left" RepeatLayout="Flow"></asp:checkboxlist></td>
                                        <td align="right"><asp:checkboxlist id="ChkDatasetFind" runat="server" CellPadding="0" CellSpacing="0" TextAlign="Left" RepeatLayout="Flow"></asp:checkboxlist></td>						            
                                    </tr>
					            </table>
                            <br />

                        
                        </td>
                    </tr>
                    <tr id="trFileFolderPermissions" runat="server" style="display:none">
                        <td>
                            File Folder Permissions
                            <table borderColor="#DCDCDC" cellSpacing="0" cellPadding="3" border="1">
					                <tr>
							            <td align="right" style="background-color:#DCDCDC">Add</td>
							            <td align="right" style="background-color:#DCDCDC" width="50">Delete</td>
						            </tr>
						            <tr>
							            <td align="right"><asp:checkboxlist id="ChkFileFolderAdd" runat="server" CellPadding="0" CellSpacing="0" TextAlign="Left" RepeatLayout="Flow"></asp:checkboxlist></td>
                                        <td align="right"><asp:checkboxlist id="ChkFileFolderDelete" runat="server" CellPadding="0" CellSpacing="0" TextAlign="Left" RepeatLayout="Flow"></asp:checkboxlist></td>						            </tr>
					            </table>
                            <br />

                        
                        </td>
                    </tr>
	            </table>
	        </td>
	    </tr>

	</table>



    </form>
</body>
</html>
