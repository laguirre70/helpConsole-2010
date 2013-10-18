<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Properties_Page.aspx.vb" Inherits="HelpConsole2010.PageProperties" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml" >
<head>
    <title>Page Properties</title>
</head>
<body>
<table style="width:100%;height:100%" cellpadding="0" cellspacing="0">
<tr></tr>
<tr>
<td style="width:1px;background-color:black"></td>
<td valign="top">
<table id="tblproperties" runat="server" style="width:100%;background-color:#c7cce0;" cellspacing="0" cellpadding="0">
    <tr style="height:31px">
        <td colspan="2" style="background-image:url(../_engine/images/properties_heading_back.gif);color:#cccccc;font-weight:bold;font-size:9pt;padding-left:7px"><img src="../_engine/images/properties_close.gif" align="right" style="cursor:hand" onclick="CloseProperties()" alt="Close Properties window" />Page Properties
        </td>
    </tr>

    <tr style="height:22px">
        <td style="width:16px;"><img src="../_engine/images/properties_contract.gif" style="cursor:pointer" onclick="TogglePropertyWindow(this,document.getElementById('trProp_Standard'))"/></td>
        <td style="font-size:8pt;font-weight:bold;color:#8f8e8e;padding-left:5px">Standard</td>
    </tr>
    <tr id="trProp_Standard">
        <td></td>
        <td valign="top" style="height:96px">
            <table style="width:100%;background-color:white" cellspacing="0" cellpadding="0">
                <tr style="height:19px"><td style="width:80px;border-bottom:1px solid #c7cce0;padding-left:5px">Page Name:</td><td style="border-bottom:1px solid #c7cce0"><input id="prop_pagename" type="text" style="width:98%;height:17px;border-width:0px;font-size:8pt" onchange="SetProp_pagename()"/></td></tr>
                <tr style="height:19px"><td style="border-bottom:1px solid #c7cce0;padding-left:5px">Page ID:</td><td style="border-bottom:1px solid #c7cce0;"><input id="prop_pageid" type="text" style="width:98%;height:17px;border-width:0px;font-size:8pt" onchange="SetProp_pageid()"/></td></tr>
                <tr style="height:19px"><td style="border-bottom:1px solid #c7cce0;padding-left:5px">Status:</td><td id="tdprop_status"  style="border-bottom:1px solid #c7cce0;"><select id="lstStatus" runat="server" style="width:98%;border-width:0px;height:17px;font-size:8pt" onchange="SetProp_Status()"></select></td></tr>
                <tr style="height:19px"><td style="border-bottom:1px solid #c7cce0;padding-left:5px">Page Icon:</td><td id="tdprop_pageicon" style="border-bottom:1px solid #c7cce0;"><select id="lstPageIcon" runat="server" style="width:98%;border-width:0px;height:17px;font-size:8pt" onchange="SetProp_PageIcon()"></select></td></tr>
                <tr style="height:19px"><td style="border-bottom:1px solid #c7cce0;padding-left:5px">Type:</td><td id="tdprop_pagetype" style="border-bottom:1px solid #c7cce0;font-size:8pt">HTML Page</td></tr>
            </table>
        </td>
    </tr>
    <tr style="height:22px">
        <td><img src="../_engine/images/properties_contract.gif" style="cursor:pointer" onclick="TogglePropertyWindow(this,document.getElementById('trProp_Keywords'))"/></td>
        <td style="font-size:8pt;font-weight:bold;color:#8f8e8e;padding-left:5px">Keywords</td>
    </tr>
    
    <tr id="trProp_Keywords" style="height:72px">
        <td></td>
        <td><textarea id="txtkeywords" style="width:99%;height:99%;font-family:Arial;font-size:8pt;border-width:0px" rows="5" cols="1" onchange2="keywordchange()" onkeyup="keywordchange()"></textarea></td>
    </tr>
    
    <tr style="height:22px">
        <td><img src="../_engine/images/properties_expand.gif" style="cursor:pointer" onclick="TogglePropertyWindow(this,document.getElementById('trProp_Visibility'))"/></td>
        <td style="font-size:8pt;font-weight:bold;color:#8f8e8e;padding-left:5px">Visibility by Skin</td>
    </tr>
    <tr id="trProp_Visibility" style="display:none">
        <td></td>
        <td id="tdskinsvisible" runat="server" valign="top"></td>    
    </tr>
    <tr>
        <td></td>
        <td></td>    
    </tr>
</table>
</td>
<td style="width:1px;background-color:black"></td>
</tr>
<tr style="height:1px;"><td colspan="3" style="background-color:black"></td></tr>
</table>
</body>
</html>

