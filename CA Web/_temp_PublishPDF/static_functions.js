
	function SearchKeyPress(searchtext,e)
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
			DisplaySearch(searchtext);
			return false;
			}
		else
			{
			return true;
			}
		}


	function DisplaySearch(stext, sPageName)
		{
		//attempt to get the search text from the current document
		//var searchtext = document.getElementById("txtsearch").value
		//pass the search text to _search.htm
		if (sPageName == "" || sPageName == null)
			{
			//This is the global search
			var sSearchPage="_search.htm";
			}
		else
			{
			//If a pagename was passed then this is a child search
			var sSearchPage="_search_"+sPageName+".htm";
			}

		//if the fra_contents frame doesn't exist then display the search results on the current page
		if (document.getElementById("fra_contents") != null)
			{
			//window.open("_search.htm?searchTxt="+stext+sPageParm, "fra_contents");
			window.open(sSearchPage+"?searchTxt="+stext, "fra_contents");
			document.getElementById("fra_contents").style.display="";
			}
		else if (document.getElementById("basefrm") != null)
			{
			window.open(sSearchPage+"?searchTxt="+stext, "basefrm");
			}
		else
			{
			//location.href = "_search.htm?searchTxt="+stext+"&type=noframes"+sPageParm;
			location.href = sSearchPage+"?searchTxt="+stext+"&type=noframes";
			}
		}
	


//	function DisplayIndex()
//		{
//		ShowIndex();
//		}


	function DisplayIndex()
		{
		//alert("displayindex");
		if (document.getElementById("fra_contents") != null)
			{
			window.open("_keywordindex.htm", "fra_contents");
			}
		else if (document.getElementById("basefrm") != null)
			{
			window.open("_keywordindex.htm", "basefrm");
			}
		else if (document.getElementById("div_javascript_contents") != null)
			{
			document.getElementById("div_javascript_index").style.display="";
			document.getElementById("div_javascript_contents").style.display="none";
			}
	    else
	        {
			location.href = "_index.htm";
	        }
	        
		}


	function DisplayContents()
		{
		if (document.getElementById("fra_contents") != null)
			{
			window.open("contents.htm", "fra_contents");
			}
		else if (document.getElementById("basefrm") != null)
			{
			window.open("contents.htm", "basefrm");
			}
		else if (document.getElementById("div_javascript_contents") != null)
			{
			document.getElementById("div_javascript_index").style.display="none";
			document.getElementById("div_javascript_contents").style.display="";
			}
	    else
	        {
			location.href = "contents.htm";
	        }
		}

//	function ShowContents()
//		{
//		if (document.getElementById("div_javascript_contents") != null)
//		    {
//        	//Hide the index and show the contents
//	    	document.getElementById("div_javascript_index").style.display="none";
//		    document.getElementById("div_javascript_contents").style.display="";
//		    }
//		else
//		    {
//		    //load contents.htm
//   			location.href = "contents.htm";
//		    }
//		}








	
	function addtofav()
		{
		if (document.all)
			{
			//if there is a basefrm frame then get the URL from there, otherwise get the url for this page.
			if (document.getElementById("basefrm") == null)
				{
				//FLAT - Get URL from this page
				var sFavURL=String(location.href);
				var sPageName = sFavURL.substr(sFavURL.lastIndexOf("/")+1)
				}
			else
				{
				//FRAMES - get URL from the frame
				var sPageURL=String(window.basefrm.location);
				var sPageName = sPageURL.substr(sPageURL.lastIndexOf("/")+1)
				var sFavURL = window.location.href
				}

			//Remove any parameters from the url (eg. page.aspx?search=X)
			if (sFavURL.indexOf("?") != -1)
				{
				sFavURL=sFavURL.substr(0,sFavURL.lastIndexOf("?"))
				}

			//Remove any parameters from the pagename (eg. page.aspx?search=X)
			if (sPageName.indexOf("?") != -1)
				{
				sPageName=sPageName.substr(0,sPageName.lastIndexOf("?"))
				}

			//remove any %20 codes (space codes)
			sPageName = sPageName.replace(/%20/g, " ");
			var sTitle=sPageName;
			
			if (document.getElementById("basefrm") == null)
                {
                // --FLAT--
    			window.external.AddFavorite(sFavURL,sTitle);
                }
            else
                {
                // --FRAMES--
    			window.external.AddFavorite(sFavURL + "?" + sPageName,sTitle);
                }
                

			}
		}
	


	function printpage()
		{
		//if the basefrm frame exists then print the contents
		if (document.getElementById("basefrm") != null)
			{
			printframe();
			}
		else
			{
			//If this is IE then print the cell containing the page HTML. If this is another browser then print the entire page.
			if (navigator.userAgent.toLowerCase().indexOf("ie") == -1)
				{
				//Current browser is not IE
				window.print();
				}
			else
				{
				//Current browser is IE
				print_noframes();
				}
			}
		}


	function printframe()
		{
		//print the basefrm frame
		window.frames['basefrm'].focus(); 
		window.frames['basefrm'].print();
		}


	function print_noframes()
		{
		var printIframe = document.createElement("IFRAME");
		document.body.appendChild(printIframe);
		var printDocument = printIframe.contentWindow.document;
		printDocument.designMode = "on";
		printDocument.open();
		var currentLocation = document.location.href;
		currentLocation = currentLocation.substring(0, currentLocation.lastIndexOf("/") + 1);
		var htmlcontent = document.getElementById("td_noframes_main")
		printDocument.write("<html><head></head><body>" + htmlcontent.innerHTML + "</body></html>");
		printDocument.close();

		try
			{
			if (document.all)
				{
				var oLink = printDocument.createElement("link");
				oLink.setAttribute("href", currentLocation + "pagestyles.css", 0);
				oLink.setAttribute("type", "text/css");
				oLink.setAttribute("rel", "stylesheet", 0);
				printDocument.getElementsByTagName("head")[0].appendChild(oLink);
				printDocument.execCommand("Print");
				}
			else
				{
				printDocument.body.innerHTML = "<link rel='stylesheet' type='text/css' href='" + currentLocation + "pagestyles.css'></link>" + printDocument.body.innerHTML;
				printIframe.contentWindow.print();
				}
			}
		catch(ex)
			{
			}
		document.body.removeChild(printIframe);
		}


	function showpageurl()
		{
		//alert("showpageurl")
		//if there is a basefrm frame then get the URL from there, otherwise get the url for this page.
		if (document.getElementById("basefrm") == null)
			{
			//FLAT - get URL from this page
			var sPageURL=String(location.href);
			var sPageName = sPageURL.substr(sPageURL.lastIndexOf("/")+1)
			var sRelativeURL = "help/" + sPageName;
			}
		else
			{
			//FRAMES - Get URL from basefrm frame
			var sPageURL=String(window.basefrm.location.href);
			//alert("sPageURL = " + sPageURL)
			//Remove any parameters (eg. page.aspx?parm1=X)
			if (sPageURL.toLowerCase().indexOf("?") != -1)
				{
				sPageURL=sPageURL.substr(0,sPageURL.lastIndexOf("?"))
				}
			//alert("sPageURL = " + sPageURL)
			var sPageName = sPageURL.substr(sPageURL.lastIndexOf("/")+1)
			//alert("sPageName = " + sPageName)
			//Remove the page name
  			sPageURL=sPageURL.substr(0,sPageURL.lastIndexOf("/"))

			var sPageURL =  sPageURL + "/default.htm?" + sPageName;
			var sRelativeURL = "help/default.htm?" + sPageName;
			}

		//Set the table cell innerHTML
		var sHTML = ""
		sHTML = sHTML + "<table style='width:400px;height:208px;background-image:url(images/pagelink_back.gif);' cellspacing=0 cellpadding=4><tr style='height:35px'><td align=right><img src='images/close_pagelinkform.gif' style='cursor:pointer;' onclick='closepagelinkform()'></td></tr><tr><td valign=top><br>&nbsp;&nbsp;&nbsp;&nbsp;Page URL:<br>&nbsp;&nbsp;&nbsp;&nbsp;<input style='width:350px' value='" + sPageURL + "'>";
		sHTML = sHTML + "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;Relative URL: <font color=#737372>(assuming help system is in a sub folder named 'help')</font><br>&nbsp;&nbsp;&nbsp;&nbsp;<input style='width:350px' value='" + sRelativeURL + "'></td></tr></table>";

		//sHTML = sHTML + "<div style='padding:4px;width:400px;height:208px;background-image:url(images/pagelink_back.gif);background-color:white'><img src='images/close_pagelinkform.gif' align='right'><br><br><br><p>Page URL:<br><input style='width:330px' value='" + sPageURL + "'></p>";
		//sHTML = sHTML + "<br><p>Relative URL: <font color=#737372>(assuming help system is in a sub folder named 'help')</font><br><input style='width:330px' value='" + sRelativeURL + "'></p></div>";
		document.getElementById("tdpageurl").innerHTML=sHTML;
		document.getElementById("tblpageurl").style.display="";
		}

    function closepagelinkform()
        {
        document.getElementById("tblpageurl").style.display="none";
        }

	function loadpage()
		{
		//if a page was passed in the url,load it now
		//alert("href = "+top.location.href);
		if (top.location.href.lastIndexOf("?") > 0)
			{
			//attempt to get the file name that was passed
			var sPage=top.location.href.substring(top.location.href.lastIndexOf("?")+1,top.location.href.length);
			//alert("last four chars = "+sPage.toLowerCase().substring(sPage.length-4, sPage.length));
			//if the prefix is .htm then load the page, otherwise don't do anything
			if (sPage.toLowerCase().substring(sPage.length-4, sPage.length) == ".htm")
				{
				var myframe=document.getElementById("basefrm");
				//if the 'basefrm' frame is not found then assume that this is a "no-frames" help system
				if (myframe == null)
					{
					location.href=sPage;
					}
				else
					{
					document.getElementById("basefrm").src=sPage;
					}
				}
			else if (sPage.toLowerCase() == "index")
				{
				ShowIndex();
				}

			}
		}


//		function tabclick_contents(sSkinName)
//			{
//			//display the contents tab, and hide the search box
//			document.getElementById("imgtabs").src="skinimages/"+sSkinName+"_tabs_contents.gif";
//			document.getElementById("trSearchBox").style.display="none";
//			//If this help system has frames, hide the contents window
//			var myframe=document.getElementById("fra_contents");
//			if (myframe != null)
//				{
//				document.getElementById("fra_contents").style.display="none";
//				}
//			ShowContents()
//			}
//			
//		function tabclick_index(sSkinName)
//			{
//			//display the index tab, and hide the search box
//			document.getElementById("imgtabs").src="skinimages/"+sSkinName+"_tabs_index.gif";
//			document.getElementById("trSearchBox").style.display="none";
//			var myframe=document.getElementById("fra_contents");
//			//if the 'fra_contents' frame is not found then assume that this is a "no-frames" help system
//			if (myframe != null)
//				{
//				document.getElementById("fra_contents").style.display="";
//				}

//			ShowIndex()			
//			}
//			
//		function tabclick_search(sSkinName)
//			{
//			//display the search tab
//			document.getElementById("imgtabs").src="skinimages/"+sSkinName+"_tabs_search.gif";
//			
//			//show the search box
//			document.getElementById("trSearchBox").style.display="";
//			
//			//If this help system has frames, hide the contents window
//			var myframe=document.getElementById("fra_contents");
//			if (myframe != null)
//				{
//				document.getElementById("fra_contents").style.display="none";
//				}
//			}
			
		function previouspage()
			{
				onclick = history.back()
			}
			
		function nextpage()
			{
				onclick = history.forward()
			}

		function showhomepage(homepage)
			{
			if (document.getElementById("basefrm") != null)
				{
				window.open(homepage, "basefrm");
				}
			else
				{
				location.href = homepage;
				}
			}
			
		function browse()
			{
			if (document.getElementById("basefrm") != null)
				{
				window.open("contents.htm", "basefrm");
				}
			else
				{
				location.href = "contents.htm";
				}
			}

		function showaskpage()
			{
			if (document.getElementById("basefrm") != null)
				{
				window.open("ask.htm", "basefrm");
				}
			else
				{
				location.href = "ask.htm";
				}
			}


		function showoptions()
			{
			//if the options form is already displayed then hide it
			if (document.getElementById("tbloptions").style.display=="")
				{
				document.getElementById("tbloptions").style.display="none";
				}
			else
				{
				document.getElementById("tbloptions").style.display="";
				document.getElementById("tbloptions").focus();
				//position the options list below the options button
				document.getElementById("tbloptions").style.top=document.getElementById("imgoptions").offsetTop+document.getElementById("imgoptions").offsetHeight;
				document.getElementById("tbloptions").style.left=document.getElementById("imgoptions").offsetLeft+document.getElementById("imgoptions").offsetWidth-198;
				}
			}