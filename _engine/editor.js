 //--------------------------------------------------------------------------------------- EDITOR FUNCTIONS ----------------------------
function OnClientLoad(editor, args)
    {
//    var element = document.all ? editor.get_document().body : editor.get_document();
//    $telerik.addExternalHandler(element, "blur", function(e)
//    {
//        //alert('blur');
//        pagechanged();
//    });
     
    var element = document.all ? editor.get_document().body : editor.get_document();
    $telerik.addExternalHandler(element, "mouseover", function(e)
        {
        //alert('mouseover');
        pagechanged();

        });

     
    //ShowToolbar(editor,"minimal")
    //alert("browser = " + navigator.userAgent);
//    if (navigator.userAgent.indexOf("Firefox")!=-1)
//        {
//        editor.set_useClassicDialogs(true);  
//        }

    
//    editor.attachEventHandler("onkeydown", function(e)
//        {
//        alert("Content area key down " + e.keyCode);
//        });

//    //detect if the user clicked the forward or back browser button. If the 'edit page' button is visible then we can assume that the user clicked back or forward.
//    //alert("Onclient load")
//    if (parent.document.getElementById("imgedit").style.display=="")
//        {
//        //document.getElementById("diveditor").innerHTML="<br><br><br>&nbsp;<font size=4>Page Expired...</font><br>&nbsp;This usually only occurs if the browser back or forward button was pressed after editing a page.";
//        //document.getElementById("diveditor").style.visibility="";
//        alert("Page Expired... This usually occurs if the browser back button was pressed after editing a page.");
//        parent.loadpage(parent.TreeView1.SelectedNode.get_id())
//        }
//    else	
//        {
        //Show the minimal toolbar
//        ShowToolbar(editor,"minimal")
//	    //Force the editor to display full screen
//        editor.fire("ToggleScreenMode");
//        document.getElementById("diveditor").style.visibility="";
//        editor.attachEventHandler("onkeydown", pagechanged); 
//        }
    }

function OnClientModeChange(editor)   
    {
        //if the user switches to html view, set the pagechanged flag to true
        var mode = editor.get_mode();
        if (mode == 2) {
            document.getElementById("txtpagechanged").value = "true";
            UpdateSaveColor()
        }
    //pagechanged()
    }


function OnClientSelectionChange(editor, args) {
    //alert("mode = " + editor.get_mode())
    //alert("selected element = " + editor.getSelectedElement())
   	//Display properties for the selected item (page, dataset find, dataset detail)
   	if (editor.getSelectedElement() != null)
       	//if (editor.get_mode() == 1)
   	    {
   	    //alert("mode is 1")
	    if (document.getElementById("txteditid").value != "" && document.getElementById("diveditor").style.display=="")
            {
            PageItemClicked();
            pagechanged()
            }
        }

//    var original = document.getElementById("NewEditorHTML").value;
//    var current = editor.get_html(true);
//    alert("original = "+original);
//    alert("current = "+current);
//    if (original != current)
//        {
//        alert("content has changed")
//        }

//    //pagechanged();
//    var elem = editor.getSelectedElement();  
//    alert(elem.nodeName + " id=" + elem.id);
    }


// function OnClientLoad(editor,args)
//	{
//	alert("OnClientLoad")
//	editor.attachEventHandler("onkeydown", pagechanged); 

//    //detect if the user clicked the forward or back browser button. If the 'edit page' button is visible then we can assume that the user clicked back or forward.
//    //alert("Onclient load")
////    if (parent.document.getElementById("imgedit").style.display=="")
////        {
////        //document.getElementById("diveditor").innerHTML="<br><br><br>&nbsp;<font size=4>Page Expired...</font><br>&nbsp;This usually only occurs if the browser back or forward button was pressed after editing a page.";
////        //document.getElementById("diveditor").style.visibility="";
////        alert("Page Expired... This usually occurs if the browser back button was pressed after editing a page.");
////        parent.loadpage(parent.TreeView1.SelectedNode.get_id())
////        }
////    else	
////        {
////	    //Force the editor to display full screen
////        editor.fire("ToggleScreenMode");
////        document.getElementById("diveditor").style.visibility="";
////        editor.attachEventHandler("onkeydown", pagechanged); 
////        }
//    }

//function EditorSelectionChanged()
//    {
//    alert("EditorSelectionChanged")
//    pagechanged();
//   	//Display properties for the selected item (page, dataset find, dataset detail)
//	if (document.getElementById("txteditid").value != "" && document.getElementById("diveditor").style.display=="")
//        {
//        PageItemClicked();
//        }
//    }

function pagechanged()
	{
	//only change the save status if the editor window is visible.
	//if (document.getElementById("txteditid").value != "" && document.getElementById("diveditor").style.display=="" && document.getElementById("txtpagechanged").value != "true")
	//alert("page src = " + parent.document.getElementById("frame_page").src);
	if (document.getElementById("txtpagechanged").value != "true")
	    {
        var editor = $find("editor1"); //get a reference to RadEditor
        //Get the original html 
        var originalHTML = document.getElementById("NewEditorHTML").value;
        //remove any linefeed characters
        originalHTML = originalHTML.replace(/[\r\n]+/g, "");   
        //Get the current html
        var currentHTML =  editor.get_html(true);       
        //remove any linefeed characters
        currentHTML = currentHTML.replace(/[\r\n]+/g, "");   
	    //alert("original content = " + document.getElementById("NewEditorHTML").value)
	    //document.getElementById("text1").value = document.getElementById("NewEditorHTML").value;
	    //alert("editor content = " + editor.get_html(true))
	    //document.getElementById("text2").value = editor.get_html(true);
	    
	    if (currentHTML != originalHTML)
	        {
	        //alert("page changed")
            document.getElementById("txtpagechanged").value = "true";
            UpdateSaveColor()  
            }
        }
//    parent.document.getElementById("txtpagechanged").value = "true";
//    parent.UpdateSaveColor()  
	}

//function GetPageHTML()
//    {
//    //alert("getpagehtml");
//    var editor = $find("editor1"); //get a reference to RadEditor
//    return editor.get_html(true);
//    }

function ShowToolbar(editor,toolbar) {
    if (toolbar == "full")
        {
        //Show modules
        var buttonsHolder1 = $get(editor.get_id() + "Module");          
        buttonsHolder1.style.display = ""
        //Show Toolbar2 and Toolbar3        
        document.getElementById("toolbar2").style.display = "";
        document.getElementById("toolbar3").style.display = "";
        //document.getElementById("toolbar2").style.height = "26px";
        //document.getElementById("toolbar3").style.height = "26px";
        //Show or hide the Less and More buttons
        if (editor.getToolByName("More") != null) {editor.getToolByName("More").get_element().style.display="none"}
        if (editor.getToolByName("Less") != null) {editor.getToolByName("Less").get_element().style.display=""}
        }
    else
        {
        //Hide modules
        var buttonsHolder1 = $get(editor.get_id() + "Module");          
        buttonsHolder1.style.display = "none"
       
        //Hide Toolbar2 and Toolbar3        
        //document.getElementById("toolbar2").style.height = "1px";
        //document.getElementById("toolbar3").style.height = "1px";
        document.getElementById("toolbar2").style.display = "none";
        document.getElementById("toolbar3").style.display = "none";
        //Show or hide the Less and More buttons
        if (editor.getToolByName("Less") != null) {editor.getToolByName("Less").get_element().style.display="none"}   
        if (editor.getToolByName("More") != null) {editor.getToolByName("More").get_element().style.display=""}
    }
    //if the browser is Safari, hide the sticky note icon
    //alert("browser = " + navigator.userAgent.toLowerCase());
    if (navigator.userAgent.toLowerCase().indexOf("msie") == -1) {
        if (editor.getToolByName("StickyNote") != null) { editor.getToolByName("StickyNote").get_element().style.display = "none" }
    }
    
    //Store this setting in a cookie so that we can display the same later
    //setCookie("editor_toolbar",toolbar,365);
    //set_cookie("editor_toolbar", toolbar);
    eraseCookie("editor_toolbar")
    createCookie("editor_toolbar", toolbar, 365);
    //alert("toolbar = " + readCookie("editor_toolbar"))
    //Call window_resize() to snap the editor to the page window.
    window_resize();
    }


//function ShowToolbar(editor,toolbar)
//    {
//    //alert("show toolbar");
//    if (toolbar == "full")
//        {
//        var disp="";
//        editor.getToolByName("Less").get_element().style.display="";   
//        editor.getToolByName("More").get_element().style.display="none";
//        }
//    else
//        {
//        var disp="none";
//        editor.getToolByName("Less").get_element().style.display="none";   
//        editor.getToolByName("More").get_element().style.display="";
//        }
//    editor.getToolByName("Print").get_element().style.display=disp;   
//    editor.getToolByName("AjaxSpellCheck").get_element().style.display=disp;   
//    editor.getToolByName("FindAndReplace").get_element().style.display=disp;   
//    editor.getToolByName("GlobalSearchAndReplace").get_element().style.display=disp;   
//    editor.getToolByName("PasteOptions").get_element().style.display=disp;   
//    //editor.getToolByName("Cut").get_element().style.display=disp;   
//    //editor.getToolByName("Copy").get_element().style.display=disp;   
//    //editor.getToolByName("Paste").get_element().style.display=disp;   
//    //editor.getToolByName("PasteFromWord").get_element().style.display=disp;   
//    //editor.getToolByName("PasteFromWordNoFontsNoSizes").get_element().style.display =disp;   
//    //editor.getToolByName("PastePlainText").get_element().style.display =disp;   
//    //editor.getToolByName("PasteAsHtml").get_element().style.display =disp;   
//    editor.getToolByName("Undo").get_element().style.display =disp;   
//    editor.getToolByName("Redo").get_element().style.display =disp;   
//    editor.getToolByName("LinkManager").get_element().style.display =disp;   
//    editor.getToolByName("Unlink").get_element().style.display =disp;   
//    editor.getToolByName("FlashManager").get_element().style.display =disp;   
//    editor.getToolByName("MediaManager").get_element().style.display =disp;   
//    editor.getToolByName("DocumentManager").get_element().style.display =disp;   
//    //editor.getToolByName("InsertFormElement").get_element().style.display =disp;   
//    editor.getToolByName("InsertSymbol").get_element().style.display =disp;   
//    editor.getToolByName("InsertVariable").get_element().style.display =disp;   
//    editor.getToolByName("InsertCondition").get_element().style.display =disp;   
//    editor.getToolByName("Insert").get_element().style.display =disp;   
//    //editor.getToolByName("InsertParagraph").get_element().style.display =disp;   
//    //editor.getToolByName("InsertHorizontalRule").get_element().style.display =disp;   
//    //editor.getToolByName("InsertDate").get_element().style.display =disp;   
//    //editor.getToolByName("InsertTime").get_element().style.display =disp; 
//    editor.getToolByName("StickyNote").get_element().style.display =disp;   
//    editor.getToolByName("FormatStripper").get_element().style.display =disp;   
//    //editor.getToolByName("ToggleTableBorder").get_element().style.display =disp;   
//    //editor.getToolByName("AbsolutePosition").get_element().style.display =disp;   
//    editor.getToolByName("Indent").get_element().style.display =disp;   
//    editor.getToolByName("Outdent").get_element().style.display =disp;   
//    editor.getToolByName("InsertOrderedList").get_element().style.display =disp;   
//    editor.getToolByName("InsertUnorderedList").get_element().style.display =disp;   
//    editor.getToolByName("Superscript").get_element().style.display =disp;   
//    editor.getToolByName("Subscript").get_element().style.display =disp;   
//    editor.getToolByName("StrikeThrough").get_element().style.display =disp;   
//    editor.getToolByName("ApplyClass").get_element().style.display =disp;   
//    editor.getToolByName("FormatBlock").get_element().style.display =disp;   
//    editor.getToolByName("Italic").get_element().style.display =disp;   
//    editor.getToolByName("Justify").get_element().style.display =disp;   
//    //editor.getToolByName("JustifyLeft").get_element().style.display =disp;   
//    //editor.getToolByName("JustifyCenter").get_element().style.display =disp;   
//    //editor.getToolByName("JustifyRight").get_element().style.display =disp;   
//    //editor.getToolByName("JustifyFull").get_element().style.display =disp;   
//    editor.getToolByName("BackColor").get_element().style.display =disp; 
//    editor.getToolByName("StyleBuilder").get_element().style.display =disp; 
//    editor.getToolByName("TrackChangesDialog").get_element().style.display =disp; 
//    editor.getToolByName("FormatCodeBlock").get_element().style.display =disp; 

//    //Hide modules
//    var buttonsHolder1 = $get(editor.get_id() + "Module");          
//    buttonsHolder1.style.display = disp;

//    }

   
    
function InsertCondition(commandName, editor)
	{
    var projectname = GetProjectName()
	var myCallbackFunction = function(sender, returnValue)
	    {
		editor.pasteHtml(returnValue)
	    }
	editor.showExternalDialog("../_engine/InsertCondition.aspx?projectname="+projectname,"", 290, 400, myCallbackFunction, null, "Insert Condition", true, Telerik.Web.UI.WindowBehaviors.Close + Telerik.Web.UI.WindowBehaviors.Move + Telerik.Web.UI.WindowBehaviors.Resize, false, true);
	}

function GlobalSearchAndReplace(editor)
    {
    if (document.getElementById("txtpagechanged").value == "true" && document.getElementById("txteditid").value != "")
        {
        alert("The page must be saved before using this function.");
        return;
        }
    
	//Get the name of the current project
	var projectname = GetProjectName();

	var myCallbackFunction = function(sender, returnValue)
	    {
    	if (returnValue)
		    {
			alert(returnValue);
			LoadPage_editor(TreeView1.SelectedNode.ID);
		    }
	    }
		editor.showExternalDialog("../_engine/GlobalReplace.aspx?projectname="+projectname,"", 350, 250, myCallbackFunction, null, "Global Search and Replace", true, Telerik.Web.UI.WindowBehaviors.Close + Telerik.Web.UI.WindowBehaviors.Move + Telerik.Web.UI.WindowBehaviors.Resize, false, true);


//	theEditor = editor;
//	editor.ShowDialog(
//		"../_engine/GlobalReplace.aspx?projectname="+projectname
//		, null
//		, 350
//		, 250
//		, GlobalSearchAndReplace_callback
//		, null
//		, "Global Search and Replace");
    }

//function GlobalSearchAndReplace_callback(returnValue)
//    {
//	if (returnValue)
//		{
//			alert(returnValue);
//			LoadPage_editor(TreeView1.SelectedNode.ID);
//		}

//    }

function InsertVariable(commandName, editor, args)
    {
    var projectname = GetProjectName()
	//var elem = editor.getSelectedElement(); //returns the selected element.
	var myCallbackFunction = function(sender, args)
	    {
	    //alert("paste value = " + args)
		editor.pasteHtml(args)
	    }
	    
    dHeight = getBrowserHeight() * .8
    //editor.showExternalDialog("../_engine/InsertVariable.aspx?projectname="+projectname,"", 375, 450, myCallbackFunction, null, "Insert Variable", true, Telerik.Web.UI.WindowBehaviors.Close + Telerik.Web.UI.WindowBehaviors.Move + Telerik.Web.UI.WindowBehaviors.Resize, false, true);
    editor.showExternalDialog("../_engine/InsertVariable.aspx?projectname="+projectname,"", 375, dHeight, myCallbackFunction, null, "Insert Variable", true, Telerik.Web.UI.WindowBehaviors.Close + Telerik.Web.UI.WindowBehaviors.Move + Telerik.Web.UI.WindowBehaviors.Resize, false, true);
    }

//function InsertVariable(commandName, editor)
//	{
//		var args = editor.GetDialogParameters(commandName);
//		var argStr = "";
//		for (var item in args)
//		{
//			argStr += "[" + item + "=" + args[item] + "] ";
//		}

//		//Get the name of the current project
//		var projectname = GetProjectName();

//		theEditor = editor;
//		editor.ShowDialog(
//			"../_engine/InsertVariable.aspx?projectname="+projectname
//			, null
//			, 350
//			, 250
//			, callBackFunctionPtr
//			, null
//			, "Insert Variable");
//	}

//function callBackFunctionPtr(returnValue)
//	{
//		if (returnValue)
//		{
//			theEditor.PasteHtml(returnValue);
//		}
//	}

	function InsertStickyNote(editor)
		{
	
		//Get a unique id for the sticky note tag
		var sUniqueID="_note"+new Date().getTime()
        var sHTML = "<div id='" + sUniqueID + "' class='stickynote'>&nbsp;</div>"
		//editor.PasteHtml(sHTML);
		editor.pasteHtml(sHTML);
		//set the focus to the text area inside the sticky note
		var doc = editor.get_document();
    	var sticky = doc.getElementById(sUniqueID);
    	sticky.focus();
		//editor.get_document().getElementById(sUniqueID).focus();
		}

function InsertPageObject(commandName, editor)
	{
    var projectname = GetProjectName()
	var myCallbackFunction = function(sender, returnValue)
	    {
		editor.pasteHtml(returnValue)
	    }
	editor.showExternalDialog("../_engine/InsertPageObject.aspx?projectname="+projectname,"", 366, 391, myCallbackFunction, null, "Insert Page Object", true, Telerik.Web.UI.WindowBehaviors.Close + Telerik.Web.UI.WindowBehaviors.Move + Telerik.Web.UI.WindowBehaviors.Resize, false, true);
	}
