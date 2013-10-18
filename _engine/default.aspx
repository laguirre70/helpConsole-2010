<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="default.aspx.vb" Inherits="HelpConsole2010.default2" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">

    <title>HelpConsole 2010</title>
    <script type="text/javascript" src="startup.js"></script>
    <link href="appstyles.css" type="text/css" rel="stylesheet"/>
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />

</head>
<body id="body" runat="server" style="background-color:#242424">
    <form id="form1" runat="server">
    
    <div id="divWelcome" runat="server" style="display:none;width:100%;text-align:right;color:#DDDDDD;">Welcome&nbsp;'<span id="spanWelcomeUsername" runat="server"></span>'&nbsp;<asp:Button ID="btnlogout" runat="server" Text="Sign Out" /></div>
    <div id="divMessage" runat="server" style="width:100%;text-align:center;color:white"></div>
    <input id="txtSelectedRowID" runat="server" type="hidden" />
    <input id="txtSelectedProject" runat="server" type="hidden" />
    <input id="txtaction" type="hidden" name="txtaction" runat="server"/>
    <input id="txtTemplate" type="hidden" name="txtTemplate" runat="server"/>
   
    <!-- DIALOG WINDOW -->
    <table id="tblDialogWindow" runat="server" align="center" style="width:360px;height:210px;display:none;" cellpadding="0" cellspacing="0">
        <tr style="height:36px">
            <td style="width:8px"><img src="images/dlg_top_left.gif" /></td>
            <td style="background-image:url(images/dlg_top_center.gif)" align="left">
                <img onmouseover="this.src='images/closeform_mouseover.gif'" onmouseout="this.src='images/closeform.gif'" src="images/closeform.gif" alt="close" style="cursor:hand;" align="right" onclick="CloseDialog()"/>
                <div id="spanheading" runat="server" style="font-size:11pt;font-family:Arial;color:#DDDDDD;padding-top:4px;padding-left:2px;">New Project</div>
            </td>
            <td style="width: 8px"><img src="images/dlg_top_right.gif" /></td>
        </tr>
        <tr>
            <td style="background-image: url(../_engine/images/dlg_left_center.gif)"></td>
            <td id="tdNewProject" style="display:none" valign="top">
                <table style="width:100%;height:166px;padding-left:7px;padding-right:7px;background-color:white;" cellpadding="5" cellspacing="0" border="0">
                    <tr style="height:15px">
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td style="width:70px">Project Name:</td>
                        <td>
                            <asp:TextBox ID="txtname" runat="server" Width="98%" onkeypress="return AddProjectKeyPress(event);"></asp:TextBox>
                            <input id="txtCopyFromProject" runat="server" type="hidden" />
                            <input id="txtRenameFromProject" runat="server" type="hidden" />
                        </td>
                    </tr>
                    <tr style="height:30px;">
                        <td style="background-color:#DDDDDD;border-top:solid 1px #CCCCCC;">&nbsp;</td>
                        <td style="background-color:#DDDDDD;border-top:solid 1px #CCCCCC;" align="right"><asp:Button ID="btnAdd" runat="server" onclientclick="ShowAddProgress()" Text="Create Project" /></td>
                    </tr>
                </table>
            </td>
            <td id="tddialog" valign="top" align="left" style="background-color:white"></td>
            <td style="background-image: url(images/dlg_right_center.gif)"></td>
        </tr>
        <tr style="height:8px;">
            <td><img src="images/dlg_bottom_left.gif" /></td>
            <td id="tdmessage" style="font-size:9pt;font-family:Tahoma,Arial;background-image:url(images/dlg_bottom_center.gif); width: 668px;" runat="server">
                <span id="spanbreadcrumbs"></span>
            </td>
            <td><img src="images/dlg_bottom_right.gif" /></td>
        </tr>
    </table>

  	<div id="divtransparency" style="width:100%;height:100%;z-index:4;position:absolute;top:0px;left:0px;display:none;background-color:Black;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=30);-moz-opacity:0.30;opacity:.3;" runat="server"></div>

    <br />

 
    <div id="divContent" runat="server" >   
    <table align="center" style="width:870px;height:31px;background-image:url(images/manageprojects_heading.gif);" cellpadding="0" cellspacing="0"><tr><td id="tdManageProjectsHeading" runat="server" style="font-family:tahoma;color:#A2A1A1;font-size:10pt;padding-left:10px;font-weight:600">Manage Projects</td></tr></table>
    <table align="center" style="width:870px;height:493px;" cellpadding="0" cellspacing="0">
        <tr>
            <td style="width:8px;background-image:url(images/manageprojects_left.gif)"></td>
            <td style="width:754px;background-image:url(images/manageprojects_back.jpg);background-repeat:no-repeat;background-color:#010101" valign="top">
                <table style="width:100%" cellpadding="" cellspacing="18">
                    <tr>
                        <td style="width:180px;color:#CBC9C9;font-family:arial;font-size:9pt;padding-top:5px;padding-left:0px" valign="top">
                            <img  id="imglogo" runat="server" src="images/helpconsole_2010_logo.png" style="padding-left:3px"/>
                            <div id="divServicePack" runat="server" style="width:100%;text-align:right;font-size:8pt;color:#aaaaaa"></div><br /><br />


                            <a class="white_nounderline" href="http://www.helpconsole2010.com/helpconsole%202010/" target="_top">Online Help</a><br />
                            <a class="white_nounderline" href="http://www.helpconsole2010.com/helpconsole%202010%20demos/" target="_top">Online Demos</a><br />
                            <a class="white_nounderline" href="http://www.extremeease.com/help/knowledgebase/" target="_top">Knowledgebase</a><br />
                            <div id="divPasswordProtect" runat="server"></div>
                            <div id="divtestserver" runat="server"></div>
		                    <input id="btnUpload" style="visibility:hidden" type="submit" value="Upload" name="btnUpload" runat="server" />
		                    <div id="divShowHostedStorage" runat="server" style="display:none"><asp:CheckBox ID="chkShowHostedStorage" runat="server" AutoPostBack="True" /> Show Disk Space Used</div>
  		                    <div id="divShowHostedAccounts" runat="server" style="display:none"><a href="HostedAccounts.aspx" style="color:#CBC9C9;">Show Hosted Accounts</a></div>
  		                    <div id="divChangeHostedPassword" runat="server" style="display:none"><a class="white_nounderline" href="HostedChangePassword.aspx" style="color:#CBC9C9;">Change Your Password</a></div>

		                    <br /><br /><div id="divHostedStatus" runat="server" style="display:none;width:94%;text-align:right;color:#CCCCCC;background-color:#555555;padding:8px;border:1px solid black"><br />
                                Status:&nbsp;<select id="lstHostedStatus" runat="server" style="width:126px;margin-bottom:6px">
                                    <option></option>
                                    <option>Lite Edition</option>
                                    <option>Standard Edition</option>
                                    <option>Professional Edition</option>
                                    <option>Enterprise Edition</option>
                                    <option>Reset Trial</option>
                                </select><br />
                                Code:&nbsp;<input id="txtPayPalCode" runat="server" type="text" style="width:120px;margin-bottom:6px"/><br />
                                    <asp:Button ID="btnChangeStatus" runat="server" Text="Change Status" style="width:105px"/><br /><br />
                                </div>

                        </td> 
                        <td valign="top">

                            <div id="divCreateList_Heading" runat="server" style="width:100%;height:21px;background-image:url(images/manageprojects_create_top.gif);border-left:1px solid #000000;border-right:1px solid #000000;font-family:Arial;font-size:8pt;color:#A2A1A1;padding-top:6px">&nbsp;&nbsp;Create Project</div>
                            <div id="divCreateList" runat="server" style="background-image:url(images/manageprojects_create_back.gif);background-repeat:repeat-x;background-color:#474747;width:100%;border-left:1px solid #000000;border-right:1px solid #000000;border-bottom:1px solid #000000;color:#CBC9C9;font-family:arial;font-size:9pt;padding-top:15px;padding-bottom:15px;"></div><br />
                            
                            <div id="divSignIn" runat="server" style="display:none;">
                            <div style="background-color:#444444;border:1px solid black;color:#CCCCCC;padding:27px">
                            <span style="font-size:13pt">Sign In</span><br/><br/>
                            <table cellspacing="0" cellpadding="4">
                              <tr><td align="right">Email:</td><td><asp:TextBox ID="txtHostedUserName" runat="server" width="270px" onkeypress="return SignInKeyPress(event);"></asp:TextBox></td></tr>
                              <tr><td align="right">Password:</td><td><asp:TextBox ID="txtHostedPassword" runat="server" TextMode="Password" width="270px" onkeypress="return SignInKeyPress(event);"></asp:TextBox></td></tr>
                              <tr><td></td><td><br /><asp:Button ID="SignIn" runat="server" Text="Sign In" style="width:90px" />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<asp:LinkButton ID="lnkCreateHostedAccount" runat="server" style="color:#63a5dd;font-size:10pt">Create Account</asp:LinkButton></td></tr>
                            </table>
                            <div id="divLoginError" runat="server" style="color:white"></div>
                            </div><br />
                            </div>        

                            
                            <div id="divHosted_Msg" runat="server" style="display:none;background-color:#444444;border:1px solid black;color:#CCCCCC;padding:17px;">
                            <span style="font-size:13pt">Sign up for a free 15-day trial</span>
                            <br/><br/>Host your help system on our server. No downloads. No software to install. After your account is created, you'll be able to create as many help systems, knowledgebases, FAQ systems or websites as needed. Subscriptions are on a project basis. You can start and stop subscriptions as required. 
                            <br/>
                            <div id="divSignupError" runat="server" style="width:100%;text-align:center;color:white"></div>
                            <br/>
                            <table cellspacing="0" cellpadding="5">
                              <tr><td align="right">Your Name:</td><td><asp:TextBox ID="txtSignupName" runat="server" width="300px"></asp:TextBox></td></tr>
                              <tr><td align="right">Company:</td><td><asp:TextBox ID="txtSignupCompany" runat="server" width="300px"></asp:TextBox></td></tr>
                              <tr><td align="right">Email:</td><td><asp:TextBox ID="txtSignupEmail" runat="server" width="300px"></asp:TextBox></td></tr>
                              <tr><td align="right">Password:</td><td><asp:TextBox ID="txtSignupPassword" runat="server" TextMode="Password" width="300px"></asp:TextBox></td></tr>
                              <tr><td align="right">Confirm Password:</td><td><asp:TextBox ID="txtSignupConfirmPassword" runat="server" TextMode="Password" width="300px"></asp:TextBox></td></tr>
                              <tr><td></td><td><br /><asp:Button ID="btnCreateAccount" runat="server" Text="Create Account" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<asp:LinkButton ID="lnkSignIn" runat="server" style="color:#63a5dd;font-size:10pt">Sign In</asp:LinkButton></td></tr>
                            </table>
                            </div>        
                            
                            
                            <div id="divProjectHeader" runat="server" style="width:100%;height:21px;background-image:url(images/manageprojects_create_top.gif);border-left:1px solid #000000;border-right:1px solid #000000;font-family:Arial;font-size:8pt;color:#A2A1A1;padding-top:6px">&nbsp;&nbsp;Projects</div>
                            <div id="divProjectList" runat="server" style="width:100%;border-left:1px solid #000000;border-right:1px solid #000000;color:#CBC9C9;font-family:arial;font-size:9pt;"></div>
                            <div id="divProjectFooter" runat="server" style="padding-top:3px;text-align:right;height:31px;width:100%;background-image:url(images/manageprojects_project_footer.gif);border-left:1px solid #000000;border-right:1px solid #000000;color:#CBC9C9;font-family:arial;font-size:9pt;">
                                <table align="right" cellpadding="0" cellspacing="3"><tr>

                                    <td onclick="openproject()" style="background-image:url(images/button_back_large.gif);width:100px;height:22px;text-align:center;font-size:8pt;font-weight:500;cursor:pointer;color:#CCCCCC" title="Open the Selected Project">Open Project</td>
                                    <td><div style="width:93px;height:22px;overflow:hidden;background-image:url(images/manageprojects_button_upload.gif)"><input id="File1" name="File1" style="width:97px;position:relative;-moz-opacity:0 ;filter:alpha(opacity: 0);opacity: 0;cursor:pointer" type="file" onchange="uploadproject()" size="10"  runat="server" /></div></td>
                                    <td id="tdCopyButton" runat="server"  onclick="copyproject()" style="background-image:url(images/button_back.gif);width:65px;height:22px;text-align:center;font-size:8pt;cursor:pointer;color:#CCCCCC" title="Copy the Selected Project">Copy</td>
                                    <td id="tdRenameButton" runat="server" onclick="ShowRenameDialog()" style="background-image:url(images/button_back.gif);width:65px;height:22px;text-align:center;font-size:8pt;cursor:pointer;color:#CCCCCC" title="Rename the Selected Project">Rename</td>
                                    <td id="tdDeleteButton" runat="server" onclick="deleteproject()" style="background-image:url(images/button_back.gif);width:65px;height:22px;text-align:center;font-size:8pt;cursor:pointer;color:#CCCCCC" title="Delete the Selected Project">Delete</td>
                                    <td id="tdRemoveExpired" runat="server" style="display:none;background-image:url(images/button_back_large.gif);width:100px;height:22px;text-align:center;font-size:8pt;cursor:pointer;color:#CCCCCC" title="Remove Expired Projects"><asp:LinkButton ID="lnkRemoveExpired" runat="server" style="text-decoration:none;color:#CCCCCC">Remove Expired</asp:LinkButton></td>
                                    <td id="tdBackupProject" runat="server" style="background-image:url(images/button_back.gif);display:none;width:65px;height:22px;text-align:center;font-size:8pt;cursor:pointer;color:#CCCCCC" title="Backup the Selected Project"><asp:LinkButton ID="LinkButton1" runat="server" style="text-decoration:none;color:#CCCCCC">Backup</asp:LinkButton></td>
                                </tr></table>
                            </div>
                                <div id="divBackupMsg" runat="server"></div>

                        </td>
                    </tr>
                </table>
            </td>
            <td style="width:8px;background-image:url(images/manageprojects_right.gif)"></td>
        </tr>
    </table>
    <table align="center" style="width:870px;height:8px;background-image:url(images/manageprojects_footer.gif)" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>
    </div>
    <div id="divScrollCode" runat="server"></div>
    </form>
    <script type="text/javascript">
        //Detect if we are in IE8 Compatibility mode. If so, display a warning message
        var IE = IEVersion();
        if (IE.Version == "8" && IE.BrowserMode == "Compat Mode" && navigator.appVersion.indexOf("Trident/5.0") == -1) {
            document.getElementById("divMessage").innerHTML = "<div style='border:1px solid white;padding:10px;width:730px;text-align:left;color:#dddddd;font-size:10pt'><img src='images/Warning.png' align='left' style='padding-right:6px' vspace='5'/>Your browser is running in compatibility view. HelpConsole runs best in normal IE8 mode. Click the compatibility icon to switch to normal IE8 view. If you don't see the icon, select 'Page > Compatibility View Settings' and then uncheck 'Display Intranet Sites in Compatibility View.'</div>";
        }
        //else if (IE.Version == "9.0" && IE.BrowserMode != "Compat Mode") {
        //    document.getElementById("divMessage").innerHTML = "<div style='border:1px solid white;padding:10px;width:730px;text-align:left;color:#dddddd;font-size:10pt'><img src='images/Warning.png' align='left' style='padding-right:6px' vspace='5'/>Your browser appears to be IE9. This version of HelpConsole was released before IE9 was released, and may not fully support it. There are known formatting issue with the HTML editor. It is recommended that you switch to compatibility mode. This is done by simply clicking the browser's compatibility icon'</div>";
        //}

    </script>
</body>
</html>
