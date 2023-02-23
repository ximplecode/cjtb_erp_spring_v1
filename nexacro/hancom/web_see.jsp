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
</body>


<script type="text/javascript">	
	
	//init
	var HwpCtrl;
	//var BasePath; 
	//var lastNode;
	
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
	
	function fn_nexa_message()
	{
		window.NEXACROHTML.FireUserNotify("AA");
	}	
	
	
	function hanCreateEditor(event){
		HwpCtrl = Document_HwpCtrl.HwpCtrl;
		console.log(event);

		fn_nexa_message();
	}
	
	//툴바 설정
	var InitToolBarJS = function() {	
	
		// 툴바 보여주기
		//HwpCtrl.SetToolBar(1, "#0;1:TOOLBAR_MENU");			// 0
		//HwpCtrl.SetToolBar(1, "#1;1:TOOLBAR_STANDARD");		// 1
		//HwpCtrl.SetToolBar(1, "#2;1:TOOLBAR_FORMAT");			// 2
		//HwpCtrl.SetToolBar(-1, "#3;1:TOOLBAR_DRAW");			// 3
		//HwpCtrl.SetToolBar(-1, "#4;1:TOOLBAR_TABLE");			// 4
		//HwpCtrl.SetToolBar(1, "#6;1: CharShapeHeight, CharShapeBold, CharShapeItalic, CharShapeUnderline, TextColor, MarkPenShape");
		
		//툴바 안보이게
		HwpCtrl.SetToolBar(-1, "TOOLBAR_MENU");
		HwpCtrl.SetToolBar(-1, "TOOLBAR_STANDARD");		
		HwpCtrl.ShowToolBar(false);
		HwpCtrl.ShowStatusBar(false);
		HwpCtrl.EditMode = 0;
		
	}
	
	
	var fn_merge = function (url1, url2,dsH, dsO)
	{
		HwpCtrl.Open(url1, "HWP", "", function(res){				//문서 open 
			HwpCtrl.Insert(url2, "HWP", "", function (res) {		//한글 문서 내용 insert 
				fn_sign(dsH, dsO);									//결재라인 및 도장
				InitToolBarJS();
			},"");
		},"");
	}
	
	
	var fn_sign = function(dsH, dsO)
	{
		
		parser=new DOMParser();
	 
		xmlDoc=parser.parseFromString(dsH,"text/xml");
	 
		// 특정 테그를 기준으로 변수에 담는다
		var xml = xmlDoc.getElementsByTagName('Rows');
	 
		// getElementsByTagName : 태그 호출
		// childNodes : 자식 노드
		// nodeValue : 해당 노드의 값(text)
		//var name = xml[0].getElementsByTagName('item')[0].getElementsByTagName('row')[0].childNodes[0].nodeValue;
		var test = xml[0].getElementsByTagName("Row"); 
		
		
		// test.length  행
	    // test[0].getElementsByTagName("Col").length //열
		
		var arr = [];

		for(var i=0; i<test.length; i++)	//행 
		{
			arr[i] = new Array();
			for( var j=0; j< test[i].getElementsByTagName("Col").length; j++)	//컬럼
			{
				if(test[i].getElementsByTagName("Col")[j].firstChild == null)
				{
					arr[i][j] = "";
					
				}else
				{
					arr[i][j] = test[i].getElementsByTagName("Col")[j].firstChild.nodeValue;
				}
			}
		
		}
		
		/*
		문서내용 dsH				결재라인 dsO
		0 : TITLE				0 : KIND
		1 : WDATE				1 : SEQ
		2 : SECURITY			2 : F_NEXT 
		3 : DURING				3 : STATUS
		4 : CO_SEQ				4 : F_DATE
		5 : JIKCHAK				5 : JIKCHAK
		6 : BUSOR 				6 : BUSOR
		7 : F_NAME				7 : F_NAME
		8 : I_FLOW_ID			8 : I_FLOW_ID
		9 : REF_NO				9 : KS_SIGN
		10 : F_TYPE
		11 : GIAN_TEXT
		12 : FILECHK
		13 : F_PATH
		14 : F_NAMES
		15 : BUSE_CD
		16 : OPEN_CHECK
		*/
		
		
		//document.getElementById("menuname").value = tmp1;
		
		var wDate = arr[0][1].substr(0,4) + "." + arr[0][1].substr(4,2) + "." + arr[0][1].substr(6,2);
		
		HwpCtrl.PutFieldText("P1",arr[0][4].trim());	//문서번호
		HwpCtrl.PutFieldText("P2",wDate);		//작성일자
		HwpCtrl.PutFieldText("P3",arr[0][3]);	//보존년한
		HwpCtrl.PutFieldText("P4",arr[0][6]);	//작성부서
		HwpCtrl.PutFieldText("P5",arr[0][5]); 	//직책
		HwpCtrl.PutFieldText("P6",arr[0][7]);	//작성자
		//HwpCtrl.PutFieldText("P7",arr[0][9]);	//참조
		HwpCtrl.PutFieldText("P8",arr[0][0]);	//문서제목
		HwpCtrl.PutFieldText("Text",arr[0][11]);//기안제목
		
		
		parser2=new DOMParser();
	 
		xmlDoc2=parser2.parseFromString(dsO,"text/xml");
	 
		// 특정 테그를 기준으로 변수에 담는다
		var xml2 = xmlDoc2.getElementsByTagName('Rows');
	 
		// getElementsByTagName : 태그 호출
		// childNodes : 자식 노드
		// nodeValue : 해당 노드의 값(text)
		//var name = xml2[0].getElementsByTagName('item')[0].getElementsByTagName('row')[0].childNodes[0].nodeValue;
		var test2 = xml2[0].getElementsByTagName("Row"); 
		
		
		// test2.length  행
	    // test2[0].getElementsByTagName("Col").length //열
		
		var arr2 = [];
		
		//var path = "https://cj-erp.chunjae.co.kr/erp-next/gw/sign/"
		var path = "https://webkian.chunjae.co.kr:8443/attachedfile/chunjae_sign/" 
		var nRow = 0, lRow = 8, qRow, signPath, signPath_1, signPath_2, signPath_3; 

		for(var i=0; i<test2.length; i++)	//행 
		{
			arr2[i] = new Array();
			for( var j=0; j< test2[i].getElementsByTagName("Col").length; j++)	//컬럼
			{
				if(test2[i].getElementsByTagName("Col")[j].firstChild == null)
				{
					arr2[i][j] = "";
					
				}else
				{
					arr2[i][j] = test2[i].getElementsByTagName("Col")[j].firstChild.nodeValue;
				}
				
			}
			
			var fDate = arr2[i][4].substr(4,2) + "." + arr2[i][4].substr(6,2);
			
			nRow = nRow + 1;
		
			//0 기각 1 승인 2 후결 3 후열 4 대결 9 미결
		
			//결재라인
			if(arr2[i][0] != "2" && arr2[i][7] != "감사실" && arr2[i][7] != "경영기획실" && arr2[i][7] != "감사" && arr2[i][7] != "세무")
			{
				if(arr2[i][3] == "0")
					signPath = path + "gi.jpg";
				else if(arr2[i][3] == "1")
				{
					if(arr2[i][9].length > 0)
						signPath = path + arr2[i][9];
					else{
						signPath = path + "si.jpg";
					}
					
				}
				else if(arr2[i][3] == "3")
					signPath = path + "yu.jpg";
				else 
					signPath = path + "mi.jpg";
				
				HwpCtrl.PutFieldText("Edit" + nRow + "_",arr2[i][5]);	//직책 
				HwpCtrl.MoveToField("Edit" + nRow + "_1");
				HwpCtrl.InsertPicture(signPath, true, 1, false, false, 0, 10,10);	//도장
				
				HwpCtrl.PutFieldText("Edit" + nRow + "_2",arr2[i][7]);	//이름
				HwpCtrl.PutFieldText("Edit" + nRow + "_3", fDate);	//날짜
			}
			//확인 
			else if(arr2[i][7] == "감사실" || arr2[i][7] == "경영기획실" || arr2[i][7] == "감사" || arr2[i][7] == "세무")
			{
				if(arr[0][1].substr(0,8) >= "20180601")
				{
					if(arr2[i][7] == "세무") qRow = 12;
					else if (arr2[i][7] == "감사실") qRow = 13;
					else if (arr2[i][7] == "경영기획실") qRow = 14;
				}
				else if(arr[0][1].substr(0,8) <= "201710230000")
				{
					if(arr2[i][6] == "감사실") qRow = 13;
					else if (arr2[i][7] == "경영기획실") qRow = 14;
					else if (arr2[i][7] == "감사") qRow = 15;
				}
				else
				{
					if(arr2[i][6] == "세무") qRow = 13;
					else if (arr2[i][7] == "감사실") qRow = 14;
					else if (arr2[i][7] == "경영기획실") qRow = 15;
				}
				
				if(arr2[i][3] == "0")
					signPath = path + "gi.jpg";
				else if(arr2[i][3] == "1")
				{
					if(arr2[i][9] != "")
						signPath = path + arr2[i][9];
					else
						signPath = path + "si.jpg";
				}
				else if(arr2[i][3] == "3")
					signPath = path + "yu.jpg";
				else 
					signPath = path + "mi.jpg";
				
				HwpCtrl.MoveToField("Edit" + qRow + "_1");
				HwpCtrl.InsertPicture(signPath, true, 1, false, false, 0, 10,10);	//도장
				HwpCtrl.PutFieldText("Edit" + qRow + "_3", fDate);	//날짜
				
				nRow = nRow - 1;
				
			}
			//협조
			else
			{
				lRow = lRow + 1;
				
				if(arr2[i][3] == "0")
					signPath = path + "gi.jpg";
				else if(arr2[i][3] == "1")
				{
					if(arr2[i][9] != "")
						signPath = path + arr2[i][9];
					else
						signPath = path + "si.jpg";
				}
				else if(arr2[i][3] == "3")
					signPath = path + "yu.jpg";
				else 
					signPath = path + "mi.jpg";
			
				HwpCtrl.PutFieldText("Edit" + lRow + "_",arr2[i][5]);	//직책 
				HwpCtrl.MoveToField("Edit" + lRow + "_1");
				HwpCtrl.InsertPicture(signPath, true, 1, false, false, 0, 10,10);	//도장
				HwpCtrl.PutFieldText("Edit" + lRow + "_2",arr2[i][7]);	//이름
				HwpCtrl.PutFieldText("Edit" + lRow + "_3", fDate);	//날짜
				
				nRow = nRow - 1;
					
			}
		}
	}

</script>
</html>