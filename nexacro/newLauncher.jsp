<%@ page contentType="text/html;charset=utf-8" %>
<%@ page language="java"%>
<%  
response.setHeader("origin-trial",  "AqiDJ8ZN8Rl8B858gHsq5FJFo8fzHUw8bUFT0y8r76AQNA+JmbysgsY3hSduFlC0MpITy8YG/1zuEkSJb7yX+QgAAACNeyJvcmlnaW4iOiJodHRwOi8vY2p0Yi1lcnAuY2h1bmphZS5jby5rcjo4MCIsImZlYXR1cmUiOiJQcml2YXRlTmV0d29ya0FjY2Vzc05vblNlY3VyZUNvbnRleHRzQWxsb3dlZCIsImV4cGlyeSI6MTY1Mjc3NDQwMCwiaXNTdWJkb21haW4iOnRydWV9"); //3번에서 발급받은 토큰값   
%>
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
  <title>천재교육 ERP 신규 Launcher</title> 
  <style>
  div.container {
    position: relative;
    align-content: center;
    text-align: center;
    display: block;
    color: #555;
    top:50px;
  }
  div.errorDiv {
    position: relative;
    align-content: center;
    text-align: center;
    display: block;
  }
  div.debugDiv {
    position: relative;
    display: block;
  }

.button {
  display: inline-block;
  border-radius: 4px;
  background-color: #f0ad4e;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 24px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}

.txt {
  display: inline-block;
  border-radius: 4px;
  background-color: #FFFFFF;
  border: none;
  color: #555;
  text-align: center;
  font-size: 24px;
  padding: 20px;
  width: 280px;
  transition: all 0.5s;
  margin: 10px;
}
.disabled {
  opacity: 1;
  display: inline-block;
  border-radius: 4px;
  background-color: #ccc;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 24px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: default;
  margin: 5px;
  pointer-events: none;
  text-decoration: none;
}
.info {
  display: inline-block;
  color: #fff;
  text-align: center;
  font-size: 18px;
  background-color: #2196F3;
  width:800px;
  padding: 20px;
  margin: 10px;
}
.warnnig {
  display: inline-block;
  color: #fff;
  text-align: left;
  font-size: 20px;
  background-color: #d9534f;
  padding: 20px;
  margin: 5px;
}
.warnnig_small {
  display: inline-block;
  color: #fff;
  text-align: left;
  font-size: 18px;
  background-color: #d9534f;
  padding: 10px;
  margin: 3px;
}

  </style>
  <script type="text/javascript" src="https://cj-erp.chunjae.co.kr/common/newlauncher_new.js" charset="UTF-8"></script>
</head>
<body>
<div id="container" class="container">
<div id="contents">
	<div id="logo">
		<img src="https://cj-erp.chunjae.co.kr/common/install/etc_files/cj_logo.jpg" alt="천재교육">
	</div>
	<p></p>
	<p></p>
	<p></p>
	<p></p>
  <div id="divtxt" class="divtxt">
    <span class="info">
    런처를 먼저 설치하시고 <strong class="warnnig_small">새로고침</strong> 혹은 <strong class="warnnig_small">재접속</strong> 하시면 잠시 후 ERP 설치가 진행됩니다.
	</span>
    <!--<p style="font-size: 24px;"><span>설치 후에는 <strong class="warnnig">새로고침</strong> 또는 <strong class="warnnig">재접속</strong>하여 확인하시기 바랍니다.</span></p>-->
  </div>  
  <div id="installFile">
    <div id="launcher">
      <span class="txt" >필수설치프로그램</span>
     <a id="linklaucher"  class="button" href="https://cj-erp.chunjae.co.kr/common/install/TPLSvc_Setup.exe">런처 설치</a>
	 <a id="rdocx50u_pro" class="button" href="https://cj-erp.chunjae.co.kr/common/install/rdocx50u_pro.exe">레포팅툴 설치</a>
	
    </div>
  </div>
</div>
<div id="errorDiv" class="errorDiv">
  
</div>
</div>
<div id="debugDiv">
    <!-- result -->
    <textarea id="debugTextBox" rows="50" cols="150" style="display:none;"></textarea>
</div>

</body>
</html>