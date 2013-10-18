<%@ Page Language="VB" AutoEventWireup="false" Inherits="HelpConsole2010._engine_AddPage" Codebehind="AddPage.aspx.vb" %>



<html xmlns="http://www.w3.org/1999/xhtml" >
<head>
    <title>Add Page</title>
    <script type="text/javascript">
        function ShowAddPageOptions()
            {
            document.getElementById("trPageIcon").style.display = "";
            document.getElementById("trAddasChild").style.display = "";
            document.getElementById("tdShowOptions").style.display = "none";
            document.getElementById("tdHideOptions").style.display = "";
            //document.getElementById("tblDialogWindow").style.height = "260px"
            }
    
        function HideAddPageOptions()
            {
            document.getElementById("trPageIcon").style.display = "none";
            document.getElementById("trAddasChild").style.display = "none";
            document.getElementById("tdShowOptions").style.display = "";
            document.getElementById("tdHideOptions").style.display = "none";
            //document.getElementById("tblDialogWindow").style.height = "160px"
            }
        
        function PageTemplateChange()
            {
   	        var sSelectedIndex = document.getElementById("lstPageTemplates").options.selectedIndex;
   	        var sSelectedValue = document.getElementById("lstPageTemplates").options[sSelectedIndex].value;
            if (sSelectedValue == "External File")
                {
                //Show the 'external file' textbox
                document.getElementById("trExternalFile").style.display = "";
                document.getElementById("trWebsite").style.display = "none";
                document.getElementById("trMergeProject").style.display = "none";
                document.getElementById("trPageName").style.visibility = "";
                }
            else if (sSelectedValue == "Website")
                {
                //Show the 'website' textbox
                document.getElementById("trExternalFile").style.display = "none";
                document.getElementById("trWebsite").style.display = "";
                document.getElementById("trMergeProject").style.display = "none";
                document.getElementById("trPageName").style.visibility = "";
                }
            else if (sSelectedValue == "Merge Project")
                {
                //Show the 'project' list
                document.getElementById("trExternalFile").style.display = "none";
                document.getElementById("trWebsite").style.display = "none";
                document.getElementById("trMergeProject").style.display = "";
                document.getElementById("trPageName").style.visibility = "hidden";
                }
            else
                {
                //Regular template selected
                document.getElementById("trExternalFile").style.display = "none";
                document.getElementById("trWebsite").style.display = "none";
                document.getElementById("trMergeProject").style.display = "none";
                document.getElementById("trPageName").style.visibility = "";
                }
            }
            
        function MergeProjectSelected()
            {
            //When a merge project is selected, change the page name to [project:1234]
            document.getElementById("txtaddname").value = "[project:" + document.getElementById("lstMergeProjects").options[document.getElementById("lstMergeProjects").selectedIndex].value + "]";
            }
            
        function AddPageKeyPress(searchtext,e)
	        {
            var key;
	        if(window.event) 
		        {
		        key = window.event.keyCode;     //IE
		        }
	        else
		        {
		        key = e.which;     //firefox
		        }

	        if(key == 13)
		        {
		        parent.AddPage();
		        return false;
		        }
	        else
		        {
		        return true;
		        }
	        }            
    </script>
   	<link href="tools.css" type="text/css" rel="stylesheet"/>
</head>
<body style="overflow:hidden">
   <table id="tblwrapper" runat="server" style="width:100%;height:100%;background-color:white" cellspacing="0" cellpadding="19">
       <tr>
           <td valign="top">
               <table cellpadding="1" cellspacing="0" style="width:100%" border="0">
                    <tr id="trPageName">
                        <td style="width:80px">Name:</td>
                        <td><input style="width:100%;height:22px;" type="text" id="txtaddname" name="txtaddname" value="" runat="server"/></td>
                    </tr>
                    <tr id="trPageTemplate">
                        <td>Page Type:</td>
                        <td><select id="lstPageTemplates" name="lstPageTemplates" style="width:100%;height:20px;" runat="server" onchange="PageTemplateChange()"></select>
                        </td>
                    </tr>

                    <tr id="trExternalFile" style="display:none">
                        <td>External File:</td>
                        <td><input style="width:100%;height:22px;" type="text" id="txtExternalFile" name="txtExternalFile" value=""/><br /><span style="color:#666666">Example: 'docs/example.pdf'</span></td>
                    </tr>

                    <tr id="trWebsite" style="display:none">
                        <td>Website:</td>
                        <td><input style="width:100%;height:22px;" type="text" id="txtWebsite" name="txtWebsite" value=""/><br /><span style="color:#666666">Example: 'http://www.google.com'</span></td>
                    </tr>

                    <tr id="trMergeProject" style="display:none">
                        <td>Merge Project: </td>
                        <td><select id="lstMergeProjects" name="lstMergeProjects" style="width:100%;height:20px;" runat="server" onchange="MergeProjectSelected()"></select><br />Select a help project to embed</td>
                    </tr>


                    <tr id="trPageIcon" style="display:none">
                        <td style="width:80px">Page Icon:</td>
                        <td><select id="lstPageIcon" name="lstPageIcon" style="width:100%;height:20px;" runat="server"></select>
                        </td>
                    </tr>
                    
                    <tr id="trAddasChild" style="display:none">
                        <td >Add as Child:</td>
                        <td><input type="checkbox" id="chkAddasChild" name="chkAddasChild" /></td>
                    </tr>

            </table>
           </td>
       </tr>
       <tr style="height:30px;">
            <td style="background-color:#DDDDDD;border-top:solid 1px #CCCCCC;">
                <table cellpadding="0" cellspacing="0" style="width:100%">
                    <tr>
                        <td id="tdShowOptions"><span style="cursor:pointer;color:blue" onclick="ShowAddPageOptions();">Show Options</span></td>
                        <td id="tdHideOptions" style="display:none"><span style="cursor:pointer;color:blue" onclick="HideAddPageOptions();">Hide Options</span></td>
                        <td align="right"><input style="width:90px;" type="button" id="btnok" value="Add Page" onclick="parent.AddPage()"/></td>
                    </tr>
                </table>
            </td>
        </tr>
   </table>
   <script type="text/javascript">
       document.getElementById('txtaddname').focus();
   </script>
   </body>
   </html>
   
   
