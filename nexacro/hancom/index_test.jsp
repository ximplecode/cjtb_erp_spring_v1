<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.io.BufferedReader" %>
<%@ page import="java.io.DataOutputStream" %>
<%@ page import="java.io.InputStreamReader" %>
<%@ page import="java.net.URL" %>
<%@ page import="java.nio.charset.Charset" %>
<%@ page import="java.security.cert.CertificateException" %>
<%@ page import="java.security.cert.X509Certificate" %>
<%@ page import="javax.net.ssl.HostnameVerifier" %>
<%@ page import="javax.net.ssl.HttpsURLConnection" %>
<%@ page import="javax.net.ssl.SSLContext" %>
<%@ page import="javax.net.ssl.SSLSession" %>
<%@ page import="javax.net.ssl.TrustManager" %>
<%@ page import="javax.net.ssl.X509TrustManager" %>

<!DOCTYPE html>
<html>
<head> 
<meta http-equiv="X-UA-Compatible" content="IE=edge" /> 
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>한글컨트롤 테스트</title>
<link type="text/css" rel="stylesheet" href="layout_test.css" />
<script type="text/javascript" src="jquery.js"></script>
</head>
<body>
	<div class="wrapper">
		<div class="container">
		
			<!-- //LNB -->
			
			
			<div id="content" class="content">
				<div id="" name="hwpContents_area">
					
					 <div id="hwpctrl_Area" class="canvas_wrap">						
						<iframe id="Document_HwpCtrl" name="Document_HwpCtrl" src="hwpctrlframe.html" style="width:100%; height:94vh;"></iframe>
					</div>
					
	   			</div>
			</div>
		</div>
	</div>
	
	<div>
		<input type="file" id="open_input" accept=".hwp, .hwpx, .odt, .txt, .html" name="openFile" style="visibility: hidden; width:1px"/>
		<input type="hidden" id="htmlContents" />
	</div>
</body>


<script type="text/javascript">	
	
	//init
	var HwpCtrl;
	var BasePath; 
	
	function hanCreateEditor(event){

		HwpCtrl = Document_HwpCtrl.HwpCtrl;
	    console.log(event);
		InitToolBarJS();
	//	ignoreSsl();
		fn_Open();
	}
	

	$(document).ready(function() {
	
		//File Open Event Handler
		$("#open").click(function(e){
			$("#open_input").click();
		});
		$("#open_input").change(function(e){
			var target = e.target || e.srcElement;
	        if (target.value.length == 0) {
	        	
	        } else {
	        	HwpCtrl.Open(target.files[0], "HWP", "lock:false;");
	        }
		});

		$("#getHtml").click(function(e){
			var cont = HwpCtrl.GetTextFile("HTML");
			$("#htmlContents").val(cont);
			alert("Get");
		});

		$("#clear").click(function(e){
			HwpCtrl.Clear();
		});

		$("#setHtml").click(function(e){
			HwpCtrl.SetTextFile($("#htmlContents").val(), "HTML");
		});
	});
	
	//툴바 설정
	var InitToolBarJS = function() {	
	
		// 툴바 보여주기
		HwpCtrl.SetToolBar(1, "#0;1:TOOLBAR_MENU");			// 0
		HwpCtrl.SetToolBar(1, "#1;1:TOOLBAR_STANDARD");		// 1
		HwpCtrl.SetToolBar(1, "#2;1:TOOLBAR_FORMAT");			// 2
		//HwpCtrl.SetToolBar(-1, "#3;1:TOOLBAR_DRAW");			// 3
		//HwpCtrl.SetToolBar(-1, "#4;1:TOOLBAR_TABLE");			// 4
		//HwpCtrl.SetToolBar(1, "#6;1: CharShapeHeight, CharShapeBold, CharShapeItalic, CharShapeUnderline, TextColor, MarkPenShape");

		HwpCtrl.ShowToolBar(true);
		HwpCtrl.ShowStatusBar(1);
	}
	
	var fn_ActID = function() {
		var act = HwpCtrl.CreateAction("TableCreate");
		alert("Action ID : " + act.ActID);
	}
	
	var fn_SetID = function() {
		var act = HwpCtrl.CreateAction("TableCreate");
		 alert("Set ID : " + act.SetID);
	}
	
	var fn_CreateSet = function(){
		var tbact = HwpCtrl.CreateAction('TableCreate');
		var tbset = tbact.CreateSet();
		tbset.SetItem('Rows', 5);
		tbset.SetItem('Cols', 5);
		var table = HwpCtrl.InsertCtrl('tbl', tbset);
	}
	
	var fn_PopupDialog = function(){
		var charAction = HwpCtrl.CreateAction("CharShape");
		var charSet = charAction.CreateSet();
		charAction.GetDefault(charSet);
		charAction.PopupDialog(charSet, function () {
			charAction.Execute(charSet);
		}, null);
	}
	
	var fn_Clear = function(){
		HwpCtrl.Clear(1);
	}
	/*
	var fn_Open = function(url) {
		HwpCtrl.Open(url,"HWP","",function(res){console.log(res);},{"UserData" : "testData"});
	}
	*/
	var fn_Open = function(url) {
		//BasePath = _GetBasePath();
		//alert(BasePath);
		HwpCtrl.Open(url,"", "code:acp;url:true",function(res){console.log(res);});
	}

	function _GetBasePath()
	{
		//BasePath를 구한다.
		var loc = unescape(document.location.href);
		var lowercase = loc.toLowerCase(loc);
		if (lowercase.indexOf("http://") == 0) // Internet
		{
		return loc.substr(0,loc.lastIndexOf("/") + 1);//BasePath 생성
		}
		else // local
		{
		var path;
		path = loc.replace(/.{2,}:\/{2,}/, ""); // file:/// 를 지워버린다.
		return path.substr(0,path.lastIndexOf("/") + 1);//BasePath 생성
		}
	}
	
</script>
</html>