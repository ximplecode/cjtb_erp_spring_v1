<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head> 
<meta http-equiv="X-UA-Compatible" content="IE=edge" /> 
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>한글컨트롤 테스트</title>
<link type="text/css" rel="stylesheet" href="layout.css" />
<script type="text/javascript" src="jquery.js"></script>
</head>
<body>
	<div class="wrapper">
		<div class="container">
		
			<!-- //LNB -->
			<div id="lnb_Area" class="lnb_Area">
				<p>#테스트</p>
				<table id="table" style="">
					<caption></caption>
					<colgroup>
						<col width="130px" />
					</colgroup>
					<thead></thead>
					<tbody>
						<tr>
							<td><button id="open">파일오픈</button></td>
						</tr>
						<tr>
							<td><button id="getHtml">Get HTML</button></td>
						</tr>
						<tr>
							<td><button id="clear">문서 클리어</button></td>
						</tr>							
						<tr>
							<td><button id="setHtml">Set HTML</button></td>
						</tr>
					</tbody>
				</table>
			</div>
			
			<div id="content" class="content">
				<div id="" name="hwpContents_area">
					<p style="font-size:0.8em;">#웹한글기안기</p>
					
					 <div id="hwpctrl_Area" class="canvas_wrap">						
						<iframe id="Document_HwpCtrl" name="Document_HwpCtrl" src="hwpctrlframe.html" style="width:60%; height:700px;"></iframe>
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
	function hanCreateEditor(event){
		
		HwpCtrl = Document_HwpCtrl.HwpCtrl;
		
	    console.log(event);
		InitToolBarJS();
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
		HwpCtrl.SetToolBar(-1, "#0;1:TOOLBAR_MENU");			// 0
		HwpCtrl.SetToolBar(-1, "#1;1:TOOLBAR_STANDARD");		// 1
		HwpCtrl.SetToolBar(-1, "#2;1:TOOLBAR_FORMAT");			// 2
		//HwpCtrl.SetToolBar(-1, "#3;1:TOOLBAR_DRAW");			// 3
		//HwpCtrl.SetToolBar(-1, "#4;1:TOOLBAR_TABLE");			// 4
		//HwpCtrl.SetToolBar(1, "#6;1: CharShapeHeight, CharShapeBold, CharShapeItalic, CharShapeUnderline, TextColor, MarkPenShape");

		HwpCtrl.ShowToolBar(true);
		HwpCtrl.ShowStatusBar(1);
	}
	
</script>
</html>