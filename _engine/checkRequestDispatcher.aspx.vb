Imports HelpConsoleAccessLog

Partial Class _engine_checkRequestDispatcher
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Dim fromSite As String = Request.Params("fromSite")
        Dim loginUser As String = Request.Params("loginUser")
        Dim application As String = Request.Params("application")
        Dim code As String = Request.Params("code")
        Dim helpConsoleAccessLog As HelpConsoleAccessLog = New HelpConsoleAccessLog()

        If (application IsNot Nothing And code IsNot Nothing) Then
            If (code.Equals("DAWBDAwEPDwUKMTI1MTA4")) Then
                'helpConsoleAccessLog.saveAccessLog(fromSite, loginUser, application, "CawEb!@#$%^&*")
                If (application.Equals("Concierge Assistant")) Then
                    'Me.Session.Item("AppPasswordEntered") = "123456"
                    'Me.Session.Item("FromSiteAddress") = "other"
					'changed code to login as customer  - Leo 08/10/2011
                    Session("concierge assistant_autologin_username") = "customer"
					Session("concierge assistant_autologin_password") = "Cu5t@m3r"
					Response.Redirect("~/Concierge Assistant/default.aspx")
                ElseIf (application.Equals("Voucher Assistant")) Then
                    Me.Session.Item("AppPasswordEntered") = "123456"
                    Me.Session.Item("FromSiteAddress") = "other"
                    Response.Redirect("~/Voucher Assistant/default.aspx")
                End If
            End If
        Else
            Response.Redirect("http://help.goldkeysolutions.com/")
        End If
    End Sub
End Class
