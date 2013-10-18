<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="publish.aspx.vb" Inherits="HelpConsole2010.publish1" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml" >
<head id="Head1" runat="server">
    <title>Publish</title>
   	<link href="tools.css" type="text/css" rel="stylesheet"/>
    <script type="text/javascript" src="page.js"></script>

   	<script type="text/javascript">
   	function ShowPDFProgress()
   	    {
   	    //alert("start PDF progress")
   	    document.getElementById("trPDFAnimation").style.display = "";
   	    document.getElementById("trPublishStatic").style.display = "none";
   	    document.getElementById("trPublishPDF").style.display = "none";
   	    //Start the progress loop
   	    //ProgressLoop();
   	    return true;
   	    }

   	function ShowStaticProgress() {
   	    
   	    //alert("start Static progress")
   	    //alert("folder = "+document.getElementById("txtPublishFolder").value);
   	    //if the static publish folder is -root- then ask the user to confirm.
   	    //if (document.getElementById("txtPublishFolder").value == "-root-")
   	    if (document.getElementById("txtPublishFolder").value.indexOf("/") != -1)
   	        {
            if (confirm("Including forward slashes in the folder name is potentially dangerous and is not recommended. Do you wish to continue?") == false)
                {
                return false;
                }
   	        }
  	    document.getElementById("trStaticAnimation").style.display = "";
   	    document.getElementById("trPublishStatic").style.display = "none";
   	    document.getElementById("trPublishPDF").style.display = "none";
   	    //Start the progress loop
   	    //ProgressLoop();
   	    return true;
   	    }
   	
    function DeletePublishFolder(projectname,foldername)
        {
        if (confirm("Delete Publish Folder '" + foldername + "'?") == false)
            {
            return;
            }

        //Delete the folder on the server via AJAX
	    var http = false;
	    var reqstring = "action=deletepublishfolder";
	    reqstring = reqstring + "&projectname="+projectname;
        reqstring = reqstring + "&foldername="+foldername;
        if(navigator.appName == "Microsoft Internet Explorer") {http = new ActiveXObject("Microsoft.XMLHTTP");} else {http = new XMLHttpRequest();} 
        http.onreadystatechange=function() 
            {
            if(http.readyState == 4) 
                {
                if (http.status == 200) 
                    {
                    //after the folder has been deleted, reload the page. 
                    //alert("doing postback")
                    form1.submit();
               		//document.getElementById("form1").submit();
                    //__doPostBack("","");
               		window.location.href="publish.aspx?projectname="+projectname;
                    }
                else
                    {
                    alert("Error: "+http.status+http.responseText);
                    }
                }
            }
        http.open("POST", "AjaxAction.aspx", true);
        http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        http.send(reqstring);
        }

//    function ProgressLoop()
//        {
//        ShowProgress();
//        //Call this function every 4 seconds
//        timerID = setTimeout("ProgressLoop()", 4000);
//        }
//        
//    function ShowProgress()
//        {
//        //Get the progress using Ajax
//        var http = false;
//	    var reqstring = "action=GetPublishProgress";
//	    //reqstring = reqstring + "&projectname="+projectname;
//        if(navigator.appName == "Microsoft Internet Explorer") {http = new ActiveXObject("Microsoft.XMLHTTP");} else {http = new XMLHttpRequest();} 
//        http.onreadystatechange=function() 
//            {
//            if(http.readyState == 4) 
//                {
//                if (http.status == 200) 
//                    {
//                    //Display the progress 
//                    document.getElementById("divProgressMessage").innerHTML =  http.responseText;
//                    }
//                else
//                    {
//                    alert("Error: "+http.status+http.responseText);
//                    }
//                }
//            }
//        http.open("POST", "../_engine/AjaxAction.aspx", true);
//        http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//        http.send(reqstring);
//        }
   	</script>


</head>
<body style="background-color:#FFFFFF" bgcolor="white" >
   <form id="form1" runat="server">
   <table id="tblwrapper" runat="server" style="width:100%;" cellpadding="0" cellspacing="0" border="0">
        <tr id="trPublishStatic" runat="server" style="height:250px;background-color:#F5F4F4">
            <td align="center" valign="top" >
                <br />
                <table border="0" cellpadding="12" cellspacing="0">
                    <tr style="height:125px">
                        <td style="width:32px" valign="top"><br /><img src="images/publish_static.gif" alt="Publish Static Help System"/></td>
                        <td style="width:250px;" valign="top" align="left"><br />
                            <span style="font-size: 11pt; color: #000000"></span>
                            <asp:Button ID="btnPublishStatic" runat="server" Text="Publish Static Help System" Width="100%" OnClientClick="return ShowStaticProgress();" Height="40px" /><br />
                            <span style="color: #5f5f5f;font-size:8pt;">
                                <br />
                                Generate a pure HTML Help System to distribute with your software product. A Static Help
                                System can be viewed in any browser right back to IE 1.0 and Netscape 1.0. Static
                                Help Systems do not require a web server, therefore can be distributed on a CD,
                                emailed, uploaded to your website, run on a network, etc.</span><br />
                        </td>
                        <td valign="top" style="color: #5f5f5f;" align="left">
                            <table style="background-image:url(images/publish_options_back.gif);width:246px;height:110px" cellpadding="0" cellspacing="3" border="0">
                                <tr style="height:13px"><td></td></tr>
                                <tr><td align="right">Publish&nbsp;Folder:</td><td><asp:TextBox ID="txtPublishFolder" runat="server" style="width:110px">Static</asp:TextBox></td></tr>
                                <tr><td align="right">Selected&nbsp;Node:</td><td><input id="chkPublishSelected" runat="server" type="checkbox" /><span id="spanSelectedNode" runat="server"></span></td></tr>
                                <tr><td align="right">Flat Format</td><td><input id="chkflatformat" runat="server" type="checkbox" /></td></tr>
                                <tr style="height:13px"><td></td></tr>                                
                            </table>
                            <div id="divStaticOptions" runat="server"></div>
                            
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <tr id="trPublishPDF" runat="server" >
            <td  align="center" valign="top">
                   <br />
                <table border="0" cellpadding="12" cellspacing="0">
                    <tr>
                        <td style="width:32px; height: 130px;" valign="top"><br /><img src="images/publish_pdf.gif" alt="Publish PDF Manual" /><a class="heading" href="permissions.aspx"></td>
                        <td style="width:250px; height: 130px;" valign="top" align="left"><br />
                            <span style="font-size: 14pt"><strong><span style="font-size: 11pt"></span></strong>
                            <asp:Button ID="btnPublishPDF" runat="server" Text="Publish PDF Manual" Width="100%" OnClientClick="return ShowPDFProgress();" Height="40px"/><br /></span>
                            <span style="color: #5f5f5f;font-size:8pt;">
                                <br />
                                Generate a PDF manual. PDFs are
                                very portable and can be viewed and printed in book format. Because of this PDF
                                Manuals can easily be uploaded to your website, emailed to customers, distributed
                                on a CD, etc.</span></td>
                        <td valign="top" align="left" style="color: #5f5f5f;">
                            <table style="background-image:url(images/publish_options_back.gif);width:246px;height:110px;" cellpadding="0" cellspacing="3" border="0">
                                <tr style="height:13px"><td></td></tr>
                                <tr><td align="right">PDF Title</td><td><input id="txtPDFTitle" runat="server" style="width:110px"/></td></tr>
                                <tr><td style="width:90px" align="right">Include Links:</td><td align="left"><input id="chkIncludeLinks" runat="server" type="checkbox" checked="CHECKED" /></td></tr>
                                <tr><td align="right">Selected&nbsp;Node:</td><td><input id="chkPublishSelected_PDF" runat="server" type="checkbox" /><span id="spanSelectedNode_PDF" runat="server"></span></td></tr>
                                <tr style="height:13px"><td></td></tr>
                            </table>
                            <br />
                            <div id="divPDFOptions" runat="server"></div>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
        
        <tr id="trStaticAnimation" runat="server" style="display:none">
            <td align="center"><br/><br/><br/><br/><br/><span style='font-size:11pt'>Creating Static Help System...</span><br/><br/><br/><img src='images/loading.gif'/></td>
        </tr>

        <tr>
            <td id="tdMessage" runat="server" align="center" valign="top"></td>
        </tr>

        <tr id="trPDFAnimation" runat="server" style="display:none">
            <td align="center"><br/><br/><br/><span style='font-size:11pt'>Creating PDF Manual...</span><br/><br/><br/><img src='images/loading.gif'/><br/><br/><br/>Please be patient. This could take up to a couple of minutes depending<br> on the size of your help system and the speed of your server.</td>
        </tr>
    </table>
    <div id="divProgressMessage" runat="server" style="display:none"></div>

    </form>
</body>
</html>
