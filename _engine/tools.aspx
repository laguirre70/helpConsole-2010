<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="tools.aspx.vb" Inherits="HelpConsole2010.tools" %>

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Project Tools</title>
  	<link href="tools.css" type="text/css" rel="stylesheet"/>
    <script type="text/javascript" src="tools.js"></script>
    <script type="text/javascript" src="page.js"></script>
    
    <script type="text/javascript">
    function ShowBackupProgress()
        {
        document.getElementById("tblcontainer").style.visibility = "hidden";
        }
    </script>
    
    
</head>
<body class="pagebody" style="background-image:url(images/loading.gif);background-position:center center;background-repeat:no-repeat;background-color:white">
    <form id="form1" runat="server">
<br />
    <table id="tblwrapper" runat="server" style="width:100%;background-color:#FFFFFF" cellpadding="6" cellspacing="0">
        <tr>
            <td id="tdlinks" runat="server" align="center" valign="top">
                <br /><br />
                <table id="tblcontainer">
                    <tr>
                        <td valign="top">
                            <table border="0" style="width:300px" cellpadding="5">
                                <tr id="trToolsBackup" runat="server" style="height:85px">
                                    <td style="width:50px" valign="top"><asp:ImageButton ID="imgbackup" runat="server" width="50" Height="50" ImageUrl="images/tools_backup.gif" AlternateText="Project Backup" /><a class="heading" href="permissions.aspx"></a></td>
                                    <td valign="top" class="tooldesc"><asp:LinkButton CssClass="heading" ID="LinkBackup" runat="server" onclientclick="ShowBackupProgress()">Backup</asp:LinkButton><br />Creates a compressed copy of your project that can be saved to your harddrive or network. It can be re-opened later from the 'Manage Projects' form.</td>
                                </tr>
                                <tr  id="trToolsUsers" runat="server" style="height:85px">
                                    <td style="width:32px" valign="top"><asp:ImageButton ID="imgusers" runat="server" width="50" Height="50" ImageUrl="images/tools_users.gif" AlternateText="Permissions" OnClick="imgPermissions_Click" /></td>
                                    <td valign="top" class="tooldesc"><asp:LinkButton class="heading" ID="LinkUsers" runat="server" OnClick="LinkPermissions_Click">Users</asp:LinkButton><br />Create user accounts and assign permissions for the current project.</td>
                                </tr>
                                <tr  id="trToolsVariables" runat="server" style="height:85px">
                                    <td style="width:32px" valign="top"><asp:ImageButton ID="imgvariables" runat="server" width="50" Height="50" ImageUrl="images/tools_variables.gif" /></td>
                                    <td valign="top" class="tooldesc"><asp:LinkButton ID="linkVariables" runat="server" CssClass="heading">Variables</asp:LinkButton><br />Define text variables that can be inserted into your Help System pages. Variable values can be changed at any time.<br /><br /><a class="heading" href="../_engine/permissions.aspx" style="font-size:14pt;"></a></td>
                                </tr>
                                <tr  id="trToolsPageTemplates" runat="server" style="height:85px">
                                    <td style="width: 32px" valign="top"><asp:ImageButton ID="imgPageTemplates" runat="server" width="50" Height="50" ImageUrl="images/tools_templates.gif" /></td>
                                    <td valign="top" class="tooldesc"><asp:LinkButton ID="LinkPageTemplates" runat="server" CssClass="heading">Page Templates</asp:LinkButton><br />Edit existing page templates or create new page templates. A template can be selected when a page isadded.</td>
                                </tr>
                                <tr  id="trToolsTranslation" runat="server" style="height:85px">
                                    <td style="width: 32px" valign="top"><asp:ImageButton ID="ImgTranslation" runat="server" width="50" Height="50" ImageUrl="images/tools_translations.gif" /></td>
                                    <td valign="top" class="tooldesc"><asp:LinkButton ID="linkTranslation" runat="server" CssClass="heading">Translations</asp:LinkButton><br />Translate text from English to another language.</td>
                                </tr>
                            </table>

                        
                        </td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td valign="top">
                            <table  border="0" style="width:300px" cellpadding="5">
                                <tr  id="trToolsProperties" runat="server" style="height:85px">
                                    <td valign="top"><asp:ImageButton ID="imgProperties" runat="server" width="50" Height="50" ImageUrl="images/tools_properties.gif" AlternateText="Security Groups" OnClick="imgPermissions_Click" /></td>
                                    <td valign="top" class="tooldesc"><asp:LinkButton ID="linkProperties" runat="server" CssClass="heading" OnClick="LinkPermissions_Click">Properties</asp:LinkButton><br />Set properties for the current project.</td>
                                </tr>
                                <tr  id="trToolsSecurityGroups" runat="server"  style="height:85px">
                                    <td valign="top"><asp:ImageButton ID="imgSecurityGroups" runat="server" width="50" Height="50" ImageUrl="images/tools_securitygroups.gif" AlternateText="Security Groups" OnClick="imgPermissions_Click" /></td>
                                    <td valign="top" class="tooldesc"><asp:LinkButton ID="LinkSecurityGroups" runat="server" CssClass="heading" OnClick="LinkPermissions_Click">Security Groups</asp:LinkButton><br />Create user accounts and assign permissions for the current project.</td>
                                </tr>
                                <tr  id="trToolsSkins" runat="server" style="height:85px">
                                    <td valign="top"><asp:ImageButton ID="imgSkins" runat="server" width="50" Height="50" ImageUrl="images/tools_skins.gif" AlternateText="Security Groups" OnClick="imgPermissions_Click" /></td>
                                    <td valign="top" class="tooldesc"><asp:LinkButton ID="linkSkins" runat="server" CssClass="heading" OnClick="LinkPermissions_Click">Skins</asp:LinkButton><br /><span style="color: #575757;">Create, edit and delete interface skins. Skins allow authors to change the look and feel of their Help System.</span></td>
                                </tr>
                                <tr  id="trToolsStyles" runat="server" style="height:85px">
                                    <td valign="top"><asp:ImageButton ID="imgStyles" runat="server" width="50" Height="50" ImageUrl="images/tools_styles.gif" /></td>
                                    <td valign="top" class="tooldesc"><asp:LinkButton ID="linkStyles" runat="server" CssClass="heading">Styles</asp:LinkButton><br /><span style="color: #575757;">Modify page and skin styles.</span></td>
                                </tr>
                                <tr  id="trToolsAbout" runat="server" style="height:85px">
                                    <td valign="top"><asp:ImageButton ID="ImgAbout" runat="server" width="50" Height="50" ImageUrl="images/tools_about.gif" /></td>
                                    <td valign="top" class="tooldesc"><asp:LinkButton ID="linkAbout" runat="server" CssClass="heading">About HelpConsole</asp:LinkButton><br /><span style="color: #575757;">View HelpConsole settings such as enabled modules and maximum named users.</span></td>
                                </tr>
                                
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    </form>
</body>
</html>
