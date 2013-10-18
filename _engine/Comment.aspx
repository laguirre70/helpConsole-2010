<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Comment.aspx.vb" Inherits="HelpConsole2010.Comment" validateRequest="false"%>

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title><%=sCommentHeading%></title>
   	<link href="tools.css" type="text/css" rel="stylesheet"/>
      	<script type="text/javascript">
        function GetRadWindow()   
            {   
            var oWindow = null;   
            if (window.radWindow)   
                oWindow = window.radWindow;   
            else if (window.frameElement.radWindow)   
                oWindow = window.frameElement.radWindow;   
            return oWindow;   
            }  
        </script>
                    
</head>
<body onload="document.getElementById('txtAddComment').focus();">
    <form id="form1" runat="server">
        <table style="width:100%;height:100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
                <td>
                    <textarea id="txtAddComment" runat="server" style="width:100%;height:100%;font-family:tahoma,arial;border:0px solid transparent"></textarea>
                </td>
            </tr>
            <tr style="height:30px">
                <td style="background-color:#DDDDDD;border-top:solid 1px #CCCCCC;" align="right"><span id="spanPersonalCommentText" runat="server">Personal Comment only visible to {username}</span><input id="chkpersonal" runat="server" type="checkbox"/>&nbsp;&nbsp;<asp:Button
                        ID="btnAddComment" runat="server" Text="Add Comment" />
                </td>
            </tr>
        </table>

    </form>
</body>
</html>
