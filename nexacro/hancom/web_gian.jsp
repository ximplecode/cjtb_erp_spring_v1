<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.io.BufferedReader" %>
<%@ page import="java.io.DataOutputStream" %>
<%@ page import="java.io.InputStreamReader" %>
<%@ page import="java.io.*" %>
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
<%@ page import="java.util.*" %>

<!DOCTYPE html>
<html>
<head> 
<meta http-equiv="X-UA-Compatible" content="IE=edge" /> 
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>한글컨트롤 테스트</title>
<link type="text/css" rel="stylesheet" href="layout.css" />
</head>
<body>
	<div id="" name="hwpContents_area">	
		<div id="hwpctrl_Area" class="canvas_wrap">						
			<iframe id="Document_HwpCtrl" name="Document_HwpCtrl" src="hwpctrlframe.html" style="width:100%; height:94vh;"></iframe>
		</div>
	</div>
			
</body>
</html>

<script type="text/javascript">	

	var folderName, fileName, pageCnt;

	if (! window.NEXACROHTML) {
		window.NEXACROHTML = {};
	}
	
	var parentNexacro = null;
    var bInit = false;
    window.NEXACROHTML.Init = function(str) {

        var loopCnt = 0;
        var interval = setInterval(function() {            
            parentNexacro = window.NEXACROWEBBROWSER;
            //console.log("ParparentNexacroent:" + loopCnt + ":" + parentNexacro);      
        if(loopCnt >= 10 || parentNexacro) {
            bInit = true;
            clearInterval(interval);
            window.NEXACROHTML.FireUserNotify(str);
          }
            loopCnt++;
        }, 10);
    }
	
	window.NEXACROHTML.FireUserNotify = function(userdata)
	{			
		var pp = window.NEXACROWEBBROWSER;
		if (pp) 
		{		
			pp.on_fire_onusernotify(pp, userdata);
		} 
		else if (typeof nexacro == "undefined") //windows runtime
		{			
			window.document.title = userdata;
		}
		else if (nexacro) //mobile runtime 
		{ 		
			nexacro.fireUserNotify(userdata);	
		} 
	}	
	
	function hanCreateEditor(event){
		HwpCtrl = Document_HwpCtrl.HwpCtrl;
		//HwpCtrl.RelpaceAction("FileSaveAs", "HwpCtrlFileSaveAs");
		HwpCtrl.RegisterModule("FilePathCheckDLL", "FilePathCheckDLL");
		console.log(event);

		window.NEXACROHTML.FireUserNotify("load");
		//InitToolBarJS();
		//HwpCtrl.ReplaceAction("FileSaveAs", "HwpCtrlFileSaveAs");
	}
	
	
	//툴바 설정
	var InitToolBarJS = function() {	
	
		// 툴바 보여주기
		HwpCtrl.SetToolBar(-1, "#0;1:TOOLBAR_MENU");			// 0
		HwpCtrl.SetToolBar(-1, "#1;1:TOOLBAR_STANDARD");		// 1
		HwpCtrl.SetToolBar(-1, "#2;1:TOOLBAR_FORMAT");			// 2
		HwpCtrl.SetToolBar(-1, "#3;1:TOOLBAR_DRAW");			// 3
		HwpCtrl.SetToolBar(-1, "#4;1:TOOLBAR_TABLE");			// 4
		HwpCtrl.SetToolBar(1, "#6;1: CharShapeHeight, CharShapeBold, CharShapeItalic, CharShapeUnderline, TextColor, MarkPenShape");

		HwpCtrl.ShowToolBar(true);
		HwpCtrl.ShowStatusBar(1);
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
	
	//기안문서 가져오기
	var fn_load = function(urlHwpDoc)
	{	
		HwpCtrl.Open(urlHwpDoc, "HWP", "", function (res){
			//console.log(res);
		}, "");
	}
	
	//기안문서 저장하기
	var save_hwp = function()
	{	
		HwpCtrl.SaveAs( "" , "HWP", "", function(res){
			folderName = res.uniqueId;
			fileName = res.fileName;
			pageCnt = HwpCtrl.PageCount;
			window.NEXACROHTML.FireUserNotify("return");
		},"");
	}
	
	//모바일 전자결재 파일 저장 및 파일 정보 return
	var return_url = function()
	{
		/*
		var today = new Date();
		var year = today.getFullYear();
		var month = ('0' + (today.getMonth() + 1)).slice(-2);
		
		var m_path = "https://webkian.chunjae.co.kr:8443/attachedfile/groupware_mfile/" + year + "/" + month + "/";
		
		for(var i=0; i< pageCnt; i++)
		{
			var m_fileName = fileName.replace(".hwp", "_") + i + ".gif";
			HwpCtrl.CreatePageImageEx(m_path + m_fileName, i, 96, 4, "gif", "" , 
				function(res){
					console.log(res.path);
				}, ""
			);
		}
		*/
		
		return {
			folderName : folderName,
			fileName : fileName
		};
	}
	
	//기안 모바일 문서 저장하기
	var save_gif = function(i, url)
	{	
		var result;
		result = HwpCtrl.CreatePageImageEx(url, i, 96, 24, 'gif' , "" , function(path){
		}, "");
		
		return result;
		
	}
</script>
