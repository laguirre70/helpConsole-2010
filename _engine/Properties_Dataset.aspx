<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Properties_Dataset.aspx.vb" Inherits="HelpConsole2010.DatasetFindProperties" %>

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Properties</title>
</head>
<body>
<table style="width:100%;height:100%;background-color:white" cellspacing="1" cellpadding="0"><tr><td valign=top>
<table id="tblHeading" style="width:100%;" cellspacing="0" cellpadding="0">
    <!-- Heading --> 
    <tr id="trPropertiesWindow">
        <td>
            <table style="width:100%"  cellpadding="0" cellspacing="0">
                <tr style="background-image:url(../_engine/images/contents_heading_back.gif);height:27px">
                    <td id="tdPropTitle" style="color:white;font-size:10pt;font-weight:bold" runat="server">&nbsp;&nbsp;Properties</td>
                    <td align="right"><img id="imgrefreshproperties" runat="server" src="../_engine/images/refresh2.gif" style="cursor:pointer" alt="Refresh"/><img src="../_engine/images/form_cancel.gif" style="cursor:hand" onclick="CloseProperties()" alt="Close Properties window" hspace="4"/></td>
                </tr>
            </table>
        </td>
    </tr>
</table>    


<table id="tblproperties" style="width:100%;" cellspacing="12" cellpadding="0">

    <!-- Data Source --> 
    <tr id="tr_DataSource" runat="server">
        <td id="tdDataSource" runat="server"  style="color:#828282">
            Data Source: <img id="imgDeleteTable" src="../_engine/images/delete_icon.gif" alt="Delete the selected data table" vspace="2" hspace="3" style="visibility:hidden;cursor:pointer" onclick="DeleteTable(document.getElementById('prop_lstDataSource').options[document.getElementById('prop_lstDataSource').selectedIndex].text)"/><img id="imgRenameTable" src="../_engine/images/rename_icon.gif" alt="Rename the selected data table" vspace="2" style="visibility:hidden;cursor:pointer" onclick="RenameTable(document.getElementById('prop_lstDataSource').options[document.getElementById('prop_lstDataSource').selectedIndex].text)"/><br />
            <select id="prop_lstDataSource" runat="server" style="width:100%" ></select>
        </td>
    </tr>
    
  
    <!-- Add Field Buttons --> 
    <tr id="trAddFieldButtons" runat="server">
        <td  style="color:#828282">
            Click a button below to add a field to the detail form.<br />
            <img id="btnAddText" runat="server" src="../_engine/images/field_addtext.gif" style="cursor:pointer" onclick="AddField('text')" alt="Add Text Field" />
            <img id="btnAddDate" runat="server" src="../_engine/images/field_adddate.gif" style="cursor:pointer" onclick="AddField('date')" alt="Add Date Field" />
			<img id="btnAddNumber" runat="server" src="../_engine/images/field_addnumber.gif" style="cursor:pointer" onclick="AddField('number')" alt="Add Number Field" />
			<img id="btnAddCheck" runat="server" src="../_engine/images/field_addcheck.gif" style="cursor:pointer" onclick="AddField('checkbox')" alt="Add Checkbox Field" />
			<img id="btnAddMemo" runat="server" src="../_engine/images/field_addmemo.gif" style="cursor:pointer" onclick="AddField('memo')" alt="Add Memo Field" />
			<img id="btnAddList" runat="server" src="../_engine/images/field_addlist.gif" style="cursor:pointer" onclick="AddField('list')" alt="Add List Field" />
        </td>
    </tr>

    <!-- Insert Existing Field --> 
    <tr id="tr_ExistingFields" runat="server">
        <td  style="color:#828282">
            Click to insert an existing field:<br />
            <div id="divExistingFields" runat="server" style="padding:3px;width:100%;background-color:white;border:1px solid #7F9DB9; "><font color="#7B7A7A">Fields will be listed here after the page is saved.</font></div>
        </td>
    </tr>


    <!-- Properties --> 
    <tr>
        <td>
            <table style="width:100%;" cellspacing="1" cellpadding="0">
               <tr><td style="width:95px;">&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
               <tr id="tr_SQLQuery" style="height:22px" runat="server"><td align="right" style="color:#828282">SQL Query:&nbsp;</td><td colspan="2"><input id="prop_SQLQuery" runat="server" type="text" style="width:100%" onchange="SetDatasetFindProp('sqlquery',this.value)"/></td></tr>
               <tr id="tr_OpenPage" style="height:22px" runat="server"><td align="right" style="color:#828282">Open Page:&nbsp;</td><td colspan="2"><select id="prop_lstOpenPage" runat="server" style="width:100%" onchange="SetDatasetSummaryProp('openpage',this.value)"></select></td></tr>
               <tr id="tr_RedirectURL" style="height:22px" runat="server"><td align="right" style="color:#828282">Redirect URL:&nbsp;</td><td colspan="2"><input id="prop_RedirectURL" type="text" style="width:100%" onchange="SetDatasetDetailProp('redirecturl',this.value)" /></td></tr>
               <tr id="tr_SortField" style="height:22px" runat="server"><td align="right" style="color:#828282">Sort Field:&nbsp;</td><td colspan="2"><input id="prop_SortField" type="text" style="width:100%" onchange="SetDatasetFindProp('sortfield',this.value)" /></td></tr>
               <tr id="tr_AllowAdd" style="height:22px" runat="server"><td align="right" style="color:#828282">Allow Add:&nbsp;</td><td colspan="2"><input id="prop_chkAllowAdd" runat="server" type="checkbox" onclick="SetDatasetSummaryProp('allowadd',this.checked)" /></td></tr>
               <tr id="tr_AllowDelete" style="height:22px" runat="server"><td align="right" style="color:#828282">Allow Delete:&nbsp;</td><td colspan="2"><input id="chkAllowDelete" runat="server" type="checkbox" onclick="SetDatasetSummaryProp('allowdelete',this.checked)" /></td></tr>
               <tr id="tr_FieldName" style="height:22px" runat="server"><td align="right" style="color:#828282">Field Name:&nbsp;</td><td colspan="2" id="tdprop_fieldname">fieldname</td></tr>
               <tr id="tr_FieldType" style="height:22px" runat="server"><td align="right" style="color:#828282">Field Type:&nbsp;</td><td colspan="2" id="tdprop_fieldtype" >fieldtype</td></tr>
               <tr id="tr_DefaultValue" style="height:22px" runat="server"><td align="right" style="color:#828282">Default Value:&nbsp;</td><td colspan="2"><input id="prop_defaultvalue" type="text" style="width:100%" onchange="SetFieldProp('defaultvalue',document.getElementById('tdprop_fieldname').innerHTML,document.getElementById('tdprop_fieldtype').innerHTML,this.value)" /></td></tr>
               <tr id="tr_Width" style="height:22px" runat="server"><td align="right" style="color:#828282">Width:&nbsp;</td><td colspan="2"><input id="prop_width" type="text" style="width:100%" onchange="SetFieldProp('width',document.getElementById('tdprop_fieldname').innerHTML,document.getElementById('tdprop_fieldtype').innerHTML,this.value)" /></td></tr>
               <tr id="tr_Height" style="height:22px" runat="server"><td align="right" style="color:#828282">Height:&nbsp;</td><td colspan="2"><input id="prop_height" type="text" style="width:100%" onchange="SetFieldProp('height',document.getElementById('tdprop_fieldname').innerHTML,document.getElementById('tdprop_fieldtype').innerHTML,this.value)" /></td></tr>
               <tr id="tr_Required" style="height:22px" runat="server"><td align="right" style="color:#828282">Required:&nbsp;</td><td colspan="2"><input id="prop_chkRequired" type="checkbox" onchange="SetFieldProp('required',document.getElementById('tdprop_fieldname').innerHTML,document.getElementById('tdprop_fieldtype').innerHTML,this.checked)" /></td></tr>
               <tr id="tr_Disabled" style="height:22px" runat="server"><td align="right" style="color:#828282">Disabled:&nbsp;</td><td colspan="2"><input id="prop_chkDisabled" type="checkbox" onchange="SetFieldProp('disabled',document.getElementById('tdprop_fieldname').innerHTML,document.getElementById('tdprop_fieldtype').innerHTML,this.checked)" /></td></tr>
               <tr id="tr_ShowAll" style="height:22px" runat="server"><td align="right" style="color:#828282">Show All:&nbsp;</td><td colspan="2"><input id="prop_chkShowAll" type="checkbox" onchange="SetDatasetFindProp('showall',this.checked)" /></td></tr>

            </table>
        </td>
    </tr>


</table>
</td></tr></table>
</body>
</html>
