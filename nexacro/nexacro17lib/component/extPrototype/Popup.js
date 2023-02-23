/**
 * 통합정보시스템 고도화 구축
 * @FileName    Popup.js
 * @Creator     UI공통
 * @CreateDate  2019.05.02
 * @Desction    팝업 관련 함수
 ************** 소스 수정 이력 ***********************************************
 * date                Modifier                Description
 *******************************************************************************
 * 2019.05.02          UI공통                 최초 생성
 *******************************************************************************
 */

var pForm = nexacro.Form.prototype;

/**
 * @class  Modal 팝업 <br>
 * @param  {Object} pThis - Form 객체
 * @param  {Object} option - JSON 객체
 *					{String} id       - 팝업ID (FormId : 팝업ID 및 Callback함수에서 구분ID로 사용)
 *					{String} url      - 팝업 URL
 *					{String} title    - 팝업 title
 *					{Number} width    - 팝업 너비
 *					{Number} height   - 팝업 높이
 *					{String} arg      - 팝업 전달값
 *					{String} callback - Callback 함수명
 *					{String} scrolltype - none(default), both, vertical, horizontal
 *					{String} scrollbartype - scrolltype 넣으면 auto auto(default), none none, fixed fixed  등
 *					{boolean} xDelFlag	- X버튼 visible 여부
 * @return N/A
 * @example
	var option = {
		popupId    : "SAMPLE0502"
		, url      : "sample::SAMPLE0502.xfdl"
		, title    : "모달팝업 샘플"
		, width    : 600
		, height   : 400
		, arg      : ""
		, callback : "fn_CallbackPopup"
	};
	
	// [type1] 팝업 전달값 (기존방식 : String)
	option.arg = "arg1=" + nexacro.wrapQuote("ab cd")
			   + " arg2=12345"
			   + " arg3=ds_Sample";
	
	// [type2] 팝업 전달값 (JSON 객체)
	option.arg = {
		arg1 : "ab cd"
		, arg2 : 12345
		, arg3 : this.ds_Sample
	};
	
	this.gfn_Modal(this, option);
 */
pForm.gfn_Modal = function(pThis, option)
{
	// 1. 변수선언
	var popupId 		= option.popupId;
    var url 			= option.url;
    var title 			= option.title;
    var width 			= option.width;
    var height 			= option.height;
    var arg 			= option.arg;
    var callback 		= option.callback;
	var scrolltype 		= option.scrolltype;
	var scrollbartype 	= option.scrollbartype;
	var xDelFlag 		= this.gfn_Nvl(option.xDelFlag, true);
	var auth 			= "";
	var prefix 			= "";
	
	var authPopupId = url.split("::")[1];		// A10::A1201010012U.xfdl 	-> A1201010012U.xfdl
	authPopupId = authPopupId.split(".")[0];	// A1201010012U.xfdl 		-> A1201010012U	
	var fRow = this.gfn_GetApp().gds_PopupList.findRowNF("FORM_ID", authPopupId);	
	if( fRow == -1 ) {
		// 팝업 리스트에서 결과가 존재하지 않을 경우 권한있는 메뉴 화면일 경우는 팝업 호출을 허락한다.
		fRow = this.gfn_GetApp().gds_MenuList.findRowNF("FORM_ID", authPopupId);		
		if( fRow == -1 && authPopupId.indexOf("A5101010090U") == -1 && authPopupId.indexOf("A5101010091U") == -1 ) {
			// 권한이 없는 화면
			if( authPopupId.indexOf("F") != -1 ){
				this.alert("권한이 없는 화면입니다. 팝업등록을 하거나 권한을 부여하세요. \n [FORM_ID : " + authPopupId + "] \n [TITLE : " + title +"]");
				return;
			}
			
			this.alert("등록되어 있지 않은 팝업입니다. \n [FORM_ID : " + authPopupId + "] \n [TITLE : " + title +"]");
			return;
		}
	}	
	
	if (this.gfn_IsNull(popupId)) return;
	if (this.gfn_IsNull(url)) return;
	if (this.gfn_IsNull(width)) return;
	if (this.gfn_IsNull(height)) return;
	callback = this.gfn_Nvl(callback, "fn_CallbackPopup");
	
	// 2. gds_PopupList에서 팝업정보 가져옴
	var objApp = this.gfn_GetApp();
	var row = objApp.gds_PopupList.findRowNF("FORM_ID", popupId);
	
	if (row > -1) {
		if (this.gfn_IsNull(url)) {
			prefix = objApp.gds_PopupList.getColumn(row, "PREFIX");
			url = prefix + "::" + id + ".xfdl";
		}
		auth = objApp.gds_PopupList.getColumn(row, "BTN_AUTH");
	} else {
		prefix = url.split("::")[0];
	}
	
	// 3. argument가 string인 경우 JSON으로 변환
	if (typeof(arg) == "string") {
		arg = this.gfn_MakeArgumentArray(arg + " ");
	}
	
	// 4. 너비, 높이
	var left = 0;
	var top = 0;
	var type = "";
	width = width + 10 + 10 + 2; // 좌/우 여백 : 10, border : 2
	
	// 시스템 팝업확인
	if (url.indexOf("cmm::") > -1) {
		height = height + 35; // titlebar : 35
		type = "system";
	} else {
		height = height + 50 + 10 + 2 + 35; // 상 공통영역 : 50, 하 여백 : 10, border : 2, titlebar : 35
	}
	
	// 5. 팝업실행
	var showTitle = true;
	var showStatus = false;
	var autoSize = false;
	var resizable = false;
	var openalign = "center middle";
	
	var objChild = new nexacro.ChildFrame;
	objChild.init(popupId, left, top, width, height, null, null, "frame::FramePopup.xfdl");

	if( nexacro.getApplication().gv_ServerType != "PROD") {
		var strTitle = nexacro.getApplication().gv_ServerType == "DEV" ? "개발계":"로컬";
		title += " [" + strTitle + "]";
		objChild.titlebar.set_color("yellow");
	}
	objChild.arguments = [];
	objChild.set_titletext(title);
	objChild.set_dragmovetype("all");
	objChild.set_showcascadetitletext(false);
	objChild.set_showtitlebar(showTitle);
	objChild.set_showstatusbar(showStatus);
	objChild.set_showtitleicon(false);
	objChild.set_autosize(autoSize);
	objChild.set_resizable(resizable);
	objChild.set_openalign(openalign);
	objChild.set_layered(false);
	objChild.set_overlaycolor("RGBA(0, 0, 0, 0.2)");	
	objChild.set_titlebarheight(35); // titlebar 높이
	objChild.popupType 					= "modal";
	objChild.arguments["url"] 			= url;
	objChild.arguments["authPopupId"] 	= authPopupId;
	objChild.arguments["auth"] 			= auth;
	objChild.arguments["type"] 			= type;
	objChild.arguments["prefix"] 		= prefix;
	objChild.arguments["scrolltype"] 	= scrolltype;
	objChild.arguments["scrollbartype"] = scrollbartype;
		
	var objParentFrame = pThis.getOwnerFrame();
	objChild.showModal(objParentFrame, arg, pThis, callback);
	
	if( xDelFlag == true ) {
		objChild.titlebar.closebutton.set_visible(false);
	}
};

/**
 * @class  Modeless 팝업 <br>
 * @param  {Object} pThis - Form 객체
 * @param  {Object} option - JSON 객체
 *					{String} id       		- 팝업ID (FormId : 팝업ID 및 Callback함수에서 구분ID로 사용)
 *					{String} url      		- 팝업 URL
 *					{String} title    		- 팝업 title
 *					{Number} width    		- 팝업 너비
 *					{Number} height   		- 팝업 높이
 *					{String} arg      		- 팝업 전달값
 *					{String} callback 		- Callback 함수명
 *					{String} showontaskbar 	- Style 속성중 showontaskbar을 지정할 수 있다.
 *					{String} resizable 		- Style 속성중 resizable을 지정할 수 있다. 
 * @return N/A
 * @example
	var option = {
		popupId    : "SAMPLE0503_1"
		, url      : "sample::SAMPLE0503.xfdl"
		, title    : "모달리스팝업 샘플"
		, width    : 600
		, height   : 400
		, arg      : ""
		, callback : "fn_CallbackPopup"		
	};
	
	// [type1] 팝업 전달값 (기존방식 : String)
	option.arg = "arg1=" + nexacro.wrapQuote("ab cd")
			   + " arg2=12345"
			   + " arg3=ds_Sample";
	
	// [type2] 팝업 전달값 (JSON 객체)
	option.arg = {
		arg1 : "ab cd"
		, arg2 : 12345
		, arg3 : this.ds_Sample
	};
	
	this.gfn_Open(this, option);
 */
pForm.gfn_Open = function(pThis, option)
{
	// 1. 변수선언
	var popupId 	= option.popupId;
    var url 		= option.url;
    var title 		= option.title;
    var width 		= option.width;
    var height 		= option.height;
    var arg 		= option.arg;
    var callback 	= option.callback;	
	var auth 		= "";
	var prefix 		= "";
	var type 		= "";
	
	var authPopupId = url.split("::")[1];		// A10::A1201010012U.xfdl 	-> A1201010012U.xfdl
	authPopupId = authPopupId.split(".")[0];	// A1201010012U.xfdl 		-> A1201010012U
	var fRow = this.gfn_GetApp().gds_PopupList.findRowNF("FORM_ID", authPopupId);
	if( fRow == -1 ) {
		// 팝업 리스트에서 결과가 존재하지 않을 경우 권한있는 메뉴 화면일 경우는 팝업 호출을 허락한다.		
		fRow = this.gfn_GetApp().gds_MenuList.findRowNF("FORM_ID", authPopupId);
		if( fRow == -1 ) {
			// 권한이 없는 화면
			if( authPopupId.indexOf("F") != -1 ){
				this.alert("권한이 없는 화면입니다. 팝업등록을 하거나 권한을 부여하세요. \n [FORM_ID : " + authPopupId + "] \n [TITLE : " + title +"]");
				return;
			}
			
			this.alert("등록되어 있지 않은 팝업입니다. \n [FORM_ID : " + authPopupId + "] \n [TITLE : " + title +"]");
			return;
		}
	}	
	
	if (this.gfn_IsNull(popupId)) return;
	if (this.gfn_IsNull(url)) return;
	if (this.gfn_IsNull(width)) return;
	if (this.gfn_IsNull(height)) return;
	callback = this.gfn_Nvl(callback, "fn_CallbackPopup");
	
	// 2. gds_PopupList에서 팝업정보 가져옴
	var objApp = this.gfn_GetApp();
	var row = objApp.gds_PopupList.findRowNF("FORM_ID", popupId);
	
	if (row > -1) {
		if (this.gfn_IsNull(url)) {
			var prefix = objApp.gds_PopupList.getColumn(row, "PREFIX");
			url = prefix + "::" + id + ".xfdl";
		}
		auth = objApp.gds_PopupList.getColumn(row, "BTN_AUTH");
	} else {
		prefix = url.split("::")[0];
	}
	
	// 3. argument가 string인 경우 JSON으로 변환
	if (typeof(arg) == "string") {
		arg = this.gfn_MakeArgumentArray(arg + " ");
	}
	
	// 4. 너비, 높이
	var left = 0;
	var top = 0;
	var curX = 0;
	var curY = 0;	
	
	// 시스템 팝업확인	
	if (url.indexOf("cmm::") > -1) {
		height = height + 35; // titlebar : 35
		type = "system";
	} else {
		height = height + 50 + 10 + 2 + 35; // 상 공통영역 : 50, 하 여백 : 10, border : 2, titlebar : 35
	}
	
	// 가운데 정렬 시작
	if (system.navigatorname == "nexacro") {
		curX = objApp.mainframe.left;
		curY = objApp.mainframe.top;
	} else {
		curX = window.screenLeft;
		curY = window.screenTop;
	}
	
	left = curX + (objApp.mainframe.width / 2) - Math.round(width / 2);
	top  = curY + (objApp.mainframe.height / 2) - Math.round(height / 2);
	// 가운데 정렬 끝
	
	// 5. 팝업 Type 및 callBack함수 지정
	if (this.gfn_IsNull(arg)) arg = {};
	arg["pThis"] 		= pThis;
	arg["url"] 			= url;
	arg["popupType"] 	= "modeless";
	arg["popupId"] 		= popupId;
	arg["callback"] 	= callback;
	arg["auth"] 		= auth;
	arg["prefix"] 		= prefix;	
	arg["type"]			= type;	
	arg["authPopupId"] 	= authPopupId;
	
	// 6. 팝업실행
	var showTitle 		= true;
	var showStatus 		= false;
	var autoSize 		= false;
	var resizable 		= this.gfn_Nvl(option.resizable		, false);
	var showontaskbar 	= this.gfn_Nvl(option.showontaskbar	, true);
	
	if( nexacro.getApplication().gv_ServerType != "PROD") {
		var strTitle = nexacro.getApplication().gv_ServerType == "DEV" ? "개발계":"로컬";
		title += " [" + strTitle + "]";
	}
	
	var openStyle= "showtitlebar=" 		+ showTitle
				  + " showstatusbar=" 	+ showStatus
				  + " showontaskbar=" 	+ showontaskbar
				  + " showcascadetitletext=false"
				  + " showtitleicon=false"
				  + " autosize=" 		+ autoSize
				  + " resizable=" 		+ resizable
				  + " titletext='" 		+ title + "'";
				  
	var arrPopFrame = nexacro.getPopupFrames();
	
	if( arrPopFrame[popupId] ) {
		for (var i = 0; i < arrPopFrame.length; i++) {
			if (this.gfn_GetType(arrPopFrame[i]) == "ChildFrame") {
				if (system.navigatorname == "nexacro") {
					arrPopFrame[i].setFocus();
				} else {	
					arrPopFrame[i]._getWindowHandle().focus();
				}
				break;
			}
		}
	} else {
		var objParentFrame = pThis.getOwnerFrame();
		nexacro.open(popupId, "frame::FramePopup2.xfdl", objParentFrame, arg, openStyle, left, top, width, height, pThis);		
	}
};

/**
 * @class  팝업으로 전달된 argument값 반환 <br>
 *         전달값은 "this.parent.[변수명]" 또는 "this.getOwnerFrame().[변수명]" 형태로 사용
 * @param  {Object} pThis - Form 객체
 * @param  {String | Array} arg - argument명 또는 argument명 배열
 * @return {Object} argument값
 * @example
 *  this.gfn_GetArgPopup("arg1");
 */
pForm.gfn_GetArgPopup = function(pThis, arg)
{
	if (this.gfn_IsNull(arg)) return;
	
	if (arg instanceof Array) { // 배열인 경우
		var json = {};
		
		for (var i = 0; i < arg.length; i++) {
			json[arg[i]] = pThis.getOwnerFrame()[arg[i]];
		}
		
		return json;
	} else {
		return pThis.getOwnerFrame()[arg];
	}
};

/**
 * @class  팝업 close
 * @param  {String} Form에 전달할 값
 * @return {String} Form 전달값
 * @example
 */
pForm.gfn_ClosePopup = function(variant)
{
	var objChild = this.getOwnerFrame();
	// modeless 팝업일때 부모창의 callBack 함수 실행
	if( objChild.popupType == "modeless" || objChild.popupType == "modalSync" || objChild.popupType == "modalWindow") {		
		var popupId  = objChild.popupId;
		var callback = objChild.callback;
		var pThis    = objChild.pThis;		
		// callBack 함수가 있을 때
		if( !this.gfn_IsNull(callback) ) {			
			//callback in string 일경우
			if( pThis.isValidObject(callback) ) {
				if( typeof callback == "string" ) {
					pThis[callback](popupId, variant);
				}
			}
			// callBack 함수 실행
			else {				
				if( typeof callback == "function" ) {					
					callback.call(this, popupId, variant);
				}
			}
		}
	}
		
	// 팝업창 닫기
	objChild.form.close(variant);
};

/**
 * @class  gv_ActiveWin 값설정 <br>
 * @param  N/A
 * @return N/A
 * @example
 */
pForm.gfn_GetPopup = function(obj)
{
	var objApp = this.gfn_GetApp();
	objApp.gv_ActiveWin = obj.id;
};

/**
 * @class  Array를 String 형식으로 변환 (팝업에서 사용) <br>
 * @param  {Array} value - 배열
 * @return {String} 변환된 String 형식
 * @example
 */
pForm.gfn_SetArrayToString = function(value)
{
	if (this.gfn_IsNull(value)) return null;
	
	if (value instanceof Array) {
		return value.join("*^^*");
	} else {
		return value;
	}
};

/**
 * @class  String을 Array 형식으로 변환 (팝업 결과받는 화면에서 사용) <br>
 * @param  {String} value - Array 형식의 문자열
 * @return {Array} 배열 데이터
 * @example
 */
pForm.gfn_SetStringToArray = function(value)
{
	if (this.gfn_IsNull(value)) return null;
	
	if (typeof(value) == "string") {
		return value.split("*^^*");
	} else {
		return value;
	}
};

// 디버그 화면용 함수
pForm.gfn_OpenDebug = function(pThis, option)
{
	// 1. 변수선언
	var popupId 	= option.popupId;
    var url 		= option.url;
    var title 		= option.title;
    var width 		= option.width;
    var height 		= option.height;
    var arg 		= option.arg;
    var callback 	= option.callback;
	var auth 		= "";
	var prefix 		= "";
	var type 		= "";
	
	if (this.gfn_IsNull(popupId)) return;
	if (this.gfn_IsNull(url)) return;
	if (this.gfn_IsNull(width)) return;
	if (this.gfn_IsNull(height)) return;
	callback = this.gfn_Nvl(callback, "fn_CallbackPopup");
	
	// 2. gds_PopupList에서 팝업정보 가져옴
	var objApp = this.gfn_GetApp();
	var row = objApp.gds_PopupList.findRowNF("FORM_ID", popupId);
	
	if (row > -1) {
		if (this.gfn_IsNull(url)) {
			var prefix = objApp.gds_PopupList.getColumn(row, "PREFIX");
			url = prefix + "::" + id + ".xfdl";
		}
		auth = objApp.gds_PopupList.getColumn(row, "BTN_AUTH");
	} else {
		prefix = url.split("::")[0];
	}
	
	// 3. argument가 string인 경우 JSON으로 변환
	if (typeof(arg) == "string") {
		arg = this.gfn_MakeArgumentArray(arg + " ");
	}
	
	// 4. 너비, 높이
	var left = 0;
	var top = 0;
	var curX = 0;
	var curY = 0;	
	height = height + 35; // titlebar : 35
		
	// 가운데 정렬 시작
	if (system.navigatorname == "nexacro") {
		curX = objApp.mainframe.left;
		curY = objApp.mainframe.top;
	} else {
		curX = window.screenLeft;
		curY = window.screenTop;
	}
	
	left = curX + (objApp.mainframe.width / 2) - Math.round(width / 2);
	top  = curY + (objApp.mainframe.height / 2) - Math.round(height / 2);
	// 가운데 정렬 끝
	
	// 5. 팝업 Type 및 callBack함수 지정
	if (this.gfn_IsNull(arg)) arg = {};	
	arg["pThis"]		= pThis;
	arg["popupType"] 	= "modeless";
	arg["popupId"] 		= popupId;
	arg["callback"] 	= callback;
	arg["auth"] 		= auth;
	arg["prefix"] 		= prefix;	
	arg["type"]			= type;
	
	// 6. 팝업실행
	var showTitle 		= true;
	var showStatus 		= false;
	var autoSize 		= false;
	var resizable 		= this.gfn_Nvl(option.resizable		, false);
	var showontaskbar 	= this.gfn_Nvl(option.showontaskbar	, true);
	
	var openStyle= "showtitlebar=" 		+ showTitle
				  + " showstatusbar=" 	+ showStatus
				  + " showontaskbar=" 	+ showontaskbar
				  + " showcascadetitletext=false"
				  + " showtitleicon=false"
				  + " autosize=" 		+ autoSize
				  + " resizable=" 		+ resizable
				  + " titletext='" 		+ title + "'";
				  
	var arrPopFrame = nexacro.getPopupFrames();
	
	if (arrPopFrame[popupId]) {
		for (var i = 0; i < arrPopFrame.length; i++) {
			if (this.gfn_GetType(arrPopFrame[i]) == "ChildFrame") {
				if (system.navigatorname == "nexacro") {
					arrPopFrame[i].setFocus();
				} else {	
					arrPopFrame[i]._getWindowHandle().focus();
				}
				break;
			}
		}
	} else {
		var objParentFrame = pThis.getOwnerFrame();
		nexacro.open(popupId, url, objParentFrame, arg, openStyle, left, top, width, height, pThis);
	}
};

/**
 * @class  Modal 팝업(cmm용) <br>
 * @param  {Object} pThis - Form 객체
 * @param  {Object} option - JSON 객체
 *					{String} id       - 팝업ID (FormId : 팝업ID 및 Callback함수에서 구분ID로 사용)
 *					{String} url      - 팝업 URL
 *					{String} title    - 팝업 title
 *					{Number} width    - 팝업 너비
 *					{Number} height   - 팝업 높이
 *					{String} arg      - 팝업 전달값
 *					{String} callback - Callback 함수명
 *					{String} scrolltype - none(default), both, vertical, horizontal
 *					{String} scrollbartype - scrolltype 넣으면 auto auto(default), none none, fixed fixed  등
 *					{boolean} xDelFlag	- X버튼 visible 여부
 * @return N/A
 * @example
	var option = {
		popupId    : "SAMPLE0502"
		, url      : "sample::SAMPLE0502.xfdl"
		, title    : "모달팝업 샘플"
		, width    : 600
		, height   : 400
		, arg      : ""
		, callback : "fn_CallbackPopup"
	};
	
	// [type1] 팝업 전달값 (기존방식 : String)
	option.arg = "arg1=" + nexacro.wrapQuote("ab cd")
			   + " arg2=12345"
			   + " arg3=ds_Sample";
	
	// [type2] 팝업 전달값 (JSON 객체)
	option.arg = {
		arg1 : "ab cd"
		, arg2 : 12345
		, arg3 : this.ds_Sample
	};
	
	this.gfn_Modal(this, option);
 */
pForm.gfn_ModalCmm = function(pThis, option)
{
	// 1. 변수선언
	var popupId 		= option.popupId;
    var url 			= option.url;    
    var width 			= option.width;
    var height 			= option.height;
    var arg 			= option.arg;
    var callback 		= option.callback;
	var scrolltype 		= option.scrolltype;
	var scrollbartype 	= option.scrollbartype;
	var xDelFlag 		= option.xDelFlag;
	var auth 			= "";
	var prefix 			= "";
	
	if (this.gfn_IsNull(popupId)) return;
	if (this.gfn_IsNull(url)) return;
	if (this.gfn_IsNull(width)) return;
	if (this.gfn_IsNull(height)) return;
	callback = this.gfn_Nvl(callback, "fn_CallbackPopup");
	
	// 2. gds_PopupList에서 팝업정보 가져옴
	var objApp = this.gfn_GetApp();
	var row = objApp.gds_PopupList.findRowNF("FORM_ID", popupId);
	
	if (row > -1) {
		if (this.gfn_IsNull(url)) {
			prefix = objApp.gds_PopupList.getColumn(row, "PREFIX");
			url = prefix + "::" + id + ".xfdl";
		}
		auth = objApp.gds_PopupList.getColumn(row, "BTN_AUTH");
	} else {
		prefix = url.split("::")[0];
	}
	
	// 3. argument가 string인 경우 JSON으로 변환
	if (typeof(arg) == "string") {
		arg = this.gfn_MakeArgumentArray(arg + " ");
	}
	
	// 4. 너비, 높이
	var left = 0;
	var top = 0;
	var type = "system";
	width = width + 10 + 10 + 2; // 좌/우 여백 : 10, border : 2
	height = height + 35;
	
	// 5. 팝업실행
	var objChild = new nexacro.ChildFrame;
	objChild.init(popupId, left, top, width, height, null, null, "frame::FramePopup.xfdl");
	
	objChild.arguments = [];	
	objChild.set_dragmovetype("all");
	objChild.set_showcascadetitletext(false);
	objChild.set_showtitlebar(false);
	objChild.set_showstatusbar(false);
	objChild.set_showtitleicon(false);
	objChild.set_autosize(false);	
	objChild.set_resizable(false);
	objChild.set_openalign("center middle");
	objChild.set_layered(false);
	objChild.set_overlaycolor("RGBA(0, 0, 0, 0.2)");
	objChild.set_titlebarheight(35); // titlebar 높이
	objChild.popupType = "modal";
	objChild.arguments["url"] = url;	
	objChild.arguments["auth"] = auth;
	objChild.arguments["type"] = type;
	objChild.arguments["prefix"] = prefix;
	objChild.arguments["scrolltype"] = scrolltype;
	objChild.arguments["scrollbartype"] = scrollbartype;
		
	var objParentFrame = pThis.getOwnerFrame();
	objChild.showModal(objParentFrame, arg, pThis, callback);
	objChild.titlebar.closebutton.set_visible(false);			// X버튼 제거	
};