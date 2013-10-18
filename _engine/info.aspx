<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>
<head>
<style>
    body {font-family:Arial;font-size:10pt}
</style>
</head>
<body>

.NET Framework Verison: <%=System.Environment.Version%><br /><br />

request.Browser.Browser="IE": <%=Request.Browser.Browser = "IE"%><br />

Request.ServerVariables("HTTP_USER_AGENT"): <%=Request.ServerVariables("HTTP_USER_AGENT")%><br />

<br />

<table border="1" cellspacing="0" cellpadding="5">
<tr>
  <th colspan=2>Current Browser Capabilities</th>
<tr>
  <td>Type</td>
  <td><%= Request.Browser.Type %></td>
<tr>
  <td>Name</td>
  <td><%= Request.Browser.Browser %></td>
<tr>
  <td>Version</td>
  <td><%= Request.Browser.Version %></td>
<tr>
  <td>Major Version</td>
  <td><%= Request.Browser.MajorVersion %></td>
<tr>
  <td>Minor Version</td>
  <td><%= Request.Browser.MinorVersion %></td>
<tr>
  <td>Platform</td>
  <td><%= Request.Browser.Platform %></td>
<tr>
  <td>Is Beta</td>
  <td><%= Request.Browser.Beta %></td>
<tr>
  <td>Is Crawler</td>
  <td><%= Request.Browser.Crawler %></td>
<tr>
  <td>Is AOL</td>
  <td><%= Request.Browser.AOL %></td>
<tr>
  <td>Is Win16</td>
  <td><%= Request.Browser.Win16 %></td>
<tr>
  <td>Is Win32</td>
  <td><%= Request.Browser.Win32 %></td>
<tr>
  <td>Supports Frames</td>
  <td><%= Request.Browser.Frames %></td>
<tr>
  <td>Supports Tables</td>
  <td><%= Request.Browser.Tables %></td>
<tr>
  <td>Supports Cookies</td>
  <td><%= Request.Browser.Cookies %></td>
<tr>
  <td>Supports VB Script</td>
  <td><%= Request.Browser.VBScript %></td>
<tr>
  <td>Supports JavaScript</td>
  <td><%= Request.Browser.JavaScript %></td>
<tr>
  <td>Supports Java Applets</td>
  <td><%= Request.Browser.JavaApplets %></td>
<tr>
  <td>Supports ActiveX Controls</td>
  <td><%= Request.Browser.ActiveXControls %></td>
</table>
</body>
</html>
