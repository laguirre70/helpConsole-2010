<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="linkpage.aspx.vb" Inherits="HelpConsole2010.linkpage" %>

<%@ Register Assembly="ComponentArt.Web.UI" Namespace="ComponentArt.Web.UI" TagPrefix="ComponentArt" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Link Page</title>

    <script type="text/javascript">
//    function loadpage(pageid,sfile)
//        {
//        //alert("pageid = "+pageid);
//        //alert("sfile = "+sfile);


//        //Get Internal or external URL
//	    if (sfile != null && sfile != "undefined")
//		    {
//    		//-- EXTERNAL --
//            sURL = sfile;
//            }
//        else
//            {
//            //-- INTERNAL --
//    		sURL = "default.aspx?pageid="+pageid;
//            }

//		//get the page name
//		var node=window.TreeView1.FindNodeById(pageid);
//        if (node!=null)
//            {
//            var pagename = node.Text;
//            }
//        else
//            {
//            var pagename = pageid;
//            }
//        var sTarget=document.getElementById("linktype").options[document.getElementById("linktype").options.selectedIndex].value;

//        //if the link type is _EmbeddedPage then set the url to the page id
//        alert("sTarget = " + sTarget);
//        if (sTarget == "_EmbeddedPage") { sURL = pageid }

//		var returnValue = 
//			{
//			//url:"default.aspx?pageid="+pageid,
//			url:sURL,
//			text:pagename,
//			target:sTarget
//			};
//			CloseDlg(returnValue);
//        }
//    </script>

</head>
<body style="background-color: white; margin: 0px;">
    <table style="width: 100%" cellpadding="0" cellspacing="0">
        <tr style="height: 40px">
            <td style="background-color: #DBD9D9;" align="right">
                Link Type:&nbsp;<select id="linktype" runat="server" style="width: 175px">
                    <option value="">Normal Link</option>
                    <option value="_EmbeddedPage">Embedded Page</option>
                    <option value="_SmallPopup">Small Popup</option>
                    <option value="_LargePopup">Large Popup</option>
                    <option value="_MouseoverPopup">Mouseover Popup</option>
                    <option value="_MouseoverPopup2">Mouseover Popup2</option>
                </select>&nbsp;&nbsp;
            </td>
        </tr>
        <tr>
            <td>
                <ComponentArt:TreeView ID="TreeView1" runat="server">
                </ComponentArt:TreeView>
            </td>
        </tr>
    </table>
    <input type="hidden" id="txtLinkName" value="" />

    <script type="text/javascript">
    if (window.attachEvent)
        {
        window.attachEvent("onload", initDialog);
        }
    else if (window.addEventListener)
        {
        window.addEventListener("load", initDialog, false);
        }

    var workLink = null;
    
    function getRadWindow()
        {
   	        if (window.radWindow)
	            {
		        return window.radWindow;
    	        }
	        if (window.frameElement && window.frameElement.radWindow)
	            {
		        return window.frameElement.radWindow;
	            }
	        return null;
        }

    function initDialog()
        {
        var clientParameters = getRadWindow().ClientParameters; //return the arguments supplied from the parent page
        //linkUrl.value = clientParameters.href;
        //linkTarget.value = clientParameters.target;
        //linkClass.value = clientParameters.className;
        //linkName.value = clientParameters.innerHTML;
        document.getElementById("txtLinkName").value = clientParameters.innerHTML;
        workLink = clientParameters;
        }



    function loadpage(pageid,sfile)
        {
        //Get Internal or external URL
	    if (sfile != null && sfile != "undefined")
		    {
    		//-- EXTERNAL --
            sURL = sfile;
            }
        else
            {
            //-- INTERNAL --
    		sURL = "default.aspx?pageid="+pageid;
            }
		//get the page name
		var node=window.TreeView1.FindNodeById(pageid);
        if (node!=null)
            {
            var pagename = node.Text;
            }
        else
            {
            var pagename = pageid;
            }
        var sTarget=document.getElementById("linktype").options[document.getElementById("linktype").options.selectedIndex].value;

       
       //create an object and set some custom properties to it      
       workLink.href = sURL;
       workLink.target = sTarget;
       workLink.className = "";
       if (document.getElementById("txtLinkName").value == "")
            {
            //if text was not selected then insert the page name
            workLink.name = pagename;     
            }
       else
            {
            //if text was selected before this dialog was opened, assign the link to that text.
            workLink.name = document.getElementById("txtLinkName").value;
            }

        //if the link type is _EmbeddedPage then set the url to the page id
        if (sTarget == "_EmbeddedPage") { workLink.name = pageid }
      
       getRadWindow().close(workLink); //use the close function of the getRadWindow to close the dialog and pass the arguments from the dialog to the callback function on the main page.
        }
    </script>

</body>
</html>
