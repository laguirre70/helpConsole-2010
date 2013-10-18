<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml" >
<head>
    <title>Untitled Page</title>
       <script type="text/javascript" src="helpwindow.js"></script>

</head>
<body>

<form id="Form1" method="post" enctype="multipart/form-data" runat="server">
<INPUT type=file id=File1 name=File1 runat="server" />
<br>
<input type="submit" id="Submit1" value="Upload" runat="server" />
</form>

</body>
</html>


<%
    If Page.IsPostBack = True Then
        Dim fn As String = System.IO.Path.GetFileName(File1.PostedFile.FileName)
        Dim SaveLocation As String
        Dim sProjectPath As String

        sProjectPath = Request.PhysicalPath.Substring(0, Request.PhysicalPath.LastIndexOf("\") + 1)
        SaveLocation = sProjectPath & "import\" & fn

        Try
            'Attempt to save the file
            File1.PostedFile.SaveAs(SaveLocation)
            Response.Write("The file '" & fn & "' was uploaded to the 'Import' folder.")
           
        Catch Exc As Exception
            Response.Write("Error: " & Exc.Message)
        End Try
    End If
    %>