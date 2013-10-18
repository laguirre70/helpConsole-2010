<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="tools_about.aspx.vb" Inherits="HelpConsole2010.tools_about" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>About</title>
  	<link href="tools.css" type="text/css" rel="stylesheet"/>
  	
  	<script type="text/javascript">
//  	function Activate()
//    {
//   
//	//Get the key
//    var key=document.getElementById("txtActivationKey").value;

//	//Get the index using AJAX
//	var http = false;
//    var reqstring = "action=activate&key="+key;
//    if(navigator.appName == "Microsoft Internet Explorer") {http = new ActiveXObject("Microsoft.XMLHTTP");} else  {http = new XMLHttpRequest();} 
//    http.onreadystatechange=function() 
//        {
//        if(http.readyState == 4) 
//            {
//            if (http.status == 200) 
//                {
//                //Determine if the key is valid
//                var sresponse=http.responseText;
//                if (sresponse.toLowerCase().indexOf("key is valid") != -1)
//                    {
//                    //Show the edition
//                    sEdition = sresponse.substring(sresponse.indexOf("~")+1,sresponse.lastIndexOf("~"));
//                    alert(sEdition + " Successfully Activated.")
//                    //refresh the form to show new info
//               		document.getElementById("form1").submit();
//                    }
//                else
//                    {
//                    alert("The key entered is not valid.") 
//                    }
//                }
//            else 
//                {
//                alert("Error: "+http.status+http.responseText);
//                }
//            }
//        }
//    http.open("POST", "../_engine/ajaxaction.aspx", true);
//    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//    http.send(reqstring);
//    }
  	</script>
</head>

<body class="content_light">
    <form id="form1" runat="server">
    <table id="tblwrapper" runat="server" style="width:100%;" cellpadding="12" cellspacing="0">
        <tr style="height:60px">
            <td class="content_dark">
                <strong><span id="spanheading" runat="server" style="font-size: 24pt;">About</span></strong>
                <br />
                <a href="tools.aspx?projectname=<%=request.querystring("projectname")%>" >Tools</a> > About
            </td>
        </tr>
        <tr style="height:300px">
            <td valign="top" align="center">
                <br /><br />
                <table style="width:450px">
                    <tr>
                        <td>
                            <br /><span id="spanAppName" runat="server" style="font-size:20pt">HelpConsole 2010</span><br />
                            <span id="spanEdition" runat="server" style="font-size:10pt">Professional Edition</span><br />
                            <span id="spanServicePack" runat="server" style="font-size:10pt">Service Pack 0</span><br />
                            <span id="spanUserLicenses" runat="server" style="font-size:10pt">20 Named Users</span><br /><br />
                            <span id="spanCompany" runat="server" style="font-size:10pt">© Extreme Ease Software Inc.</span><br /><br /><br />

                        </td>
                        <td style="width:32px" valign="top">
                            <img src="images/information.gif" />
                        </td>
                    </tr>
                </table>
                <br /><br /><br /><br /><br />New Activation Key:&nbsp;<input id="txtActivationKey" runat="server" style="width:185px"/>&nbsp;<input type="button" value="Activate Now" style="width:125px" id="btnActivate" runat="server"/>&nbsp;&nbsp;&nbsp;&nbsp;
                <br /><br /><span id="spanMessage" runat="server" style="font-weight:bold"></span>

                
	        </td>
	    </tr>
	</table>



    </form>
</body>
</html>
