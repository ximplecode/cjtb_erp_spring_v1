/**
 * 통합정보시스템 고도화 구축
 * @FileName    Frame.js
 * @Creator     UI공통
 * @CreateDate  2019.05.02
 * @Desction    Frame / Form 관련 함수
 ************** 소스 수정 이력 ***********************************************
 * date                Modifier                Description
 *******************************************************************************
 * 2019.05.02          UI공통                 최초 생성
 *******************************************************************************
 */

var pForm = nexacro.Form.prototype;

pForm.MDI_MAX_CNT = 10; // 열린 화면 최대 개수

/**
 * @class  Form load 시 수행 항목들 실행 <br>
 * @param  {Object} obj - Form 객체
 * @return N/A
 * @example
 *  this.gfn_LoadForm(obj);
 */
pForm.gfn_LoadForm = function(obj)
{
	// local & nexacro 브라우저 사용인 경우에만 해당
	var objApp = this.gfn_GetApp();
	
	if (this.gfn_IsNull(objApp.gv_ServerType) || objApp.gv_ServerType == "LOCAL") {
		if (system.navigatorname == "nexacro") {
			if (objApp.mainframe.showtitlebar == false) {
				var height = parseInt(objApp.mainframe.height);
				objApp.mainframe.set_height(height + parseInt(objApp.mainframe.titlebarheight));
				objApp.mainframe.set_showtitlebar(true);
			}
		}
	}
	
	// 부모가 div_Work일때(화면일때)
	if (obj.parent.name == "div_Work" && this.gfn_IsNull(obj.opener)) {
		this.getOwnerFrame().form.fv_FocusGrid = null; // Excel용 Grid
		
		// keydown 이벤트 추가
		obj.addEventHandler("onkeydown", this._gfn_Onkeydown, this);
		
		// 로그인 User의 최근 접속 시간 및 접속 IP를 Update
		this.wfn_A1_LoadFormSearch(obj);
	}
	
	// 팝업 일때 처리
	if (!this.gfn_IsNull(obj.opener)) {
		if (obj.parent instanceof nexacro.ChildFrame) {
			// keydown 이벤트 추가
			obj.addEventHandler("onkeydown", this._gfn_Onkeydown, this);
			
			// 로그인 User의 최근 접속 시간 및 접속 IP를 Update
			this.wfn_A1_LoadFormSearch(obj);
		}
	}
	
	// Component 초기화 처리
	this._gfn_InitComp(obj);
};

/**
 * @class  Form load 시 Component 초기화 처리 <br>
 * @param  {Object} obj - Form 객체
 * @return N/A
 * @example 
 *  this._gfn_InitComp(this);
 */
pForm._gfn_InitComp = function(obj)
{	
	var arrComp = obj.components;
	
	for (var i = 0; i < arrComp.length; i++) {
		arrComp[i].orgcssclass = arrComp[i].cssclass;
		
		// Division
		if (arrComp[i] instanceof nexacro.Div) {
			if (arrComp[i].hasOwnProperty("gridbodyheight")) { // NxPivot
				this.gfn_SetPivotInfo(arrComp[i]);
			} else {
				// URL로 링크된 경우에는 해당 링크된 Form Onload에서 처리
				if (this.gfn_IsNull(arrComp[i].url)) {
					this._gfn_InitComp(arrComp[i].form);
				}
			}
		} 
		// Tab
		else if (arrComp[i] instanceof nexacro.Tab) {
			var pages = arrComp[i].tabpages.length;
			
			for (var j = 0; j < pages; j++) {	
				// URL로 링크된 경우에는 해당 링크된 Form Onload에서 처리
				if (this.gfn_IsNull(arrComp[i].tabpages[j].url)) {
					this._gfn_InitComp(arrComp[i].tabpages[j].form);
				}
			}
		} 
		// Division, Tab 제외
		else {
			// onkeydown 이벤트 처리
			if (this.gfn_IsNull(arrComp[i].user_event_onkeyup)) {
				arrComp[i].user_event_onkeyup = "onkeyup";
				arrComp[i].addEventHandler("onkeyup", this._gfn_SetNextFocus, this);
			}
			
			// Grid 처리
			if (arrComp[i] instanceof nexacro.Grid) {
				this.gfn_SetGrid(arrComp[i]);
				
				// Grid 추가 기능 Option 적용 _wfn_A1_SetGridOption
				if( arrComp[i].user_UseRbutton != "nouse" ) {
					this._wfn_A1_SetGridOption(obj, arrComp[i]);
				}
				
				// 달력 컴포넌트의 Validation 재정의
				arrComp[i].addEventHandler("oncellclick", this._gfn_EditGridCalendar, this);
			}
			
			// Calendar 처리
			if (arrComp[i] instanceof nexacro.Calendar) {
				// 공휴일 설정
				this.gfn_SetCalendar(arrComp[i]);
				
				// 날짜 Validataion 재정의
				this._gfn_DeleteValidationDate(arrComp[i]);
			}
			
			// MaskEdit 처리
			if (arrComp[i] instanceof nexacro.MaskEdit) {
				if(arrComp[i].type == "number") {
					arrComp[i].set_displayinvalidtext(0);
				}else {
					arrComp[i].set_displayinvalidtext("");
				}
				
				arrComp[i].set_autoselect(true);				
			}
			
			// Combo 처리
			if (arrComp[i] instanceof nexacro.Combo) {
				arrComp[i].set_autoselect(true);
			}
			
			// Edit 처리
			if (arrComp[i] instanceof nexacro.Edit) {
				if(arrComp[i].value == undefined) {
					arrComp[i].set_value(null);
				}
				
				arrComp[i].set_autoselect(true);
			}
			
			// TextArea 처리
			if (arrComp[i] instanceof nexacro.TextArea) {
				arrComp[i].set_autoselect(true);
			}
			
			// Spin 처리
			if (arrComp[i] instanceof nexacro.Spin) {
				arrComp[i].addEventHandler("onspin", this._spin_onspin, this);
				arrComp[i].addEventHandler("onkillfocus", this._spin_onspin, this);
				// kjh 20200601 오토셀렉트 기능 추가.
				arrComp[i].spinedit.set_autoselect(true);
			}
			
		}
	}
};

// Edit가 date이면 달력컴포넌트 Validation기능 재정의
pForm._gfn_EditGridCalendar = function(obj, e)
{
	// Edit가 date이면
	if( obj.getCurEditType() === "date" ) {		
		// 달력컴포넌트 Validation기능 재정의
		this._gfn_DeleteValidationDate(obj._currentCellEditor);
	}
};

/**
 * @class  onkeydown event, Enter 입력시 다음 Component로 이동 <br>
 * @param  {Object} obj - Component 객체
 * @param  {Evnet} e - nexacro.ClickEventInfo
 * @return N/A
 */
pForm._gfn_SetNextFocus = function(obj, e)
{ 
	if (e.keycode == 13) {
		if (obj instanceof Grid) {
			if (obj.enable == false) {
				var objNext = obj.parent.getNextComponent(obj, true);
				
				if (!this.gfn_IsNull(objNext)) objNext.setFocus();
				return;
			}
			
			if( obj.getCellProperty("body", obj.getCellPos(), "displaytype") == "textareacontrol"
			 && obj.getCellProperty("body", obj.getCellPos(), "edittype") == "textarea"	)
			{
				return;				
			}
			
			if (obj.getCellPropertyValue(obj.currentrow, obj.getCellPos(), "edittype") == "textarea") return ;
			
			
			
			var rtn = obj.moveToNextCell();
			obj.showEditor(true);
			
			// combo defalut event  call
			if( obj.getCellProperty("body", obj.getCellPos(), "displaytype") == "combocontrol"
			 && obj.getCellProperty("body", obj.getCellPos(), "edittype") == "combo")
			{
					if(obj.isDropdownCombo() == false) {
						obj.showEditor(true);
						obj.dropdownCombo();
						
					}
			}
			
			if (rtn == false) {
				//var objNext = this.getNextComponent(obj, true);
				var objNext = obj.parent.getNextComponent(obj, true);
				
				if (this.gfn_IsNull(objNext)) {
					var col = -1;
					for (var i = 0; i < obj.getCellCount("body"); i++) {
						if (obj.getCellProperty("body", i, "edittype") != "none") {
							col = i;
							break;
						}
					}
					
					if (col >= 0) {
						var objDs = obj.getBindDataset();
						objDs.row = 0;
						obj.setCellPos(col);
					}
				} else {
					if (obj instanceof Tab) {
						var objTabPage = obj.tabpages[obj.tabindex];
						var objComp = objTabPage.form.getFirstComponent(true);
						objComp.setFocus();
					} else {
						objNext.setFocus();
					}
				}
			}
			
		} else if (obj instanceof Button) {
			if (obj.defaultbutton == false) {
				obj.click();
			}
		} else {
			//var objNext = this.getNextComponent(obj, true);
			var objNext = obj.parent.getNextComponent(obj, true);
			
			if (!this.gfn_IsNull(objNext)) {
				if (obj instanceof Tab) {
					var objTabPage = obj.tabpages[obj.tabindex];
					var objComp = objTabPage.form.getFirstComponent(true);
					objComp.setFocus();
				} else if (obj instanceof TextArea) {
					// N/A
				} else {
					objNext.setFocus();
				}
			}
		}
	}
};


/**
 * @class  Spin 기능 설정 <br>
 * @param  {Object} obj - Spin 객체
 * @return N/A
 */

pForm._spin_onspin = function(obj,e)
{	
	var currentValue = e.postvalue;
	
	if(e.eventid == "onkillfocus")  currentValue  = e.fromreferenceobject.value;
	
	obj.updateToDataset();
}


/**
 * @class  Calendar 기능 설정 <br>
 * @param  {Object} obj - Calendar 객체
 * @return N/A
 */
pForm.gfn_SetCalendar = function(obj)
{	
	obj.set_autoselect(true);
	obj.set_usetrailingday(true);
	// 월달력 Popup Div 호출 이벤트 추가
	if (obj.dateformat == "yyyy-MM" || obj.editformat == "yyyy-MM") {		
		obj.addEventHandler("ondropdown", this._calendar_ondropdown, this);
	}
	
	// 휴일 셋팅
	obj.set_innerdataset("gds_HoliDay");
	obj.set_datecolumn("MNG_DATE");
	obj.set_textcolorcolumn("TEXT_COLOR");
	//obj.set_backgroundcolumn("BACK_GROUND_COLUMN");
};

/**
 * @class  달력 실행 <br>
 * @param  N/A
 * @param  {Object} obj - nexacro.Calendar
 * @param  {Evnet} e - nexacro.EventInfo
 * @return {Boolean} false
 */
pForm._calendar_ondropdown = function(obj, e)
{		
	if(obj instanceof nexacro.Grid ) {
		var exprStr = obj.getCellProperty("body", e.cell , "expr");
		if( obj.getCellProperty("body", e.cell, "edittype") == "date" || obj.getCellPropertyValue(obj.currentrow, obj.getCellPos(), "edittype") == "date") {
			if( obj.getCellProperty("body", e.cell , "calendareditformat").indexOf("yyyy-MM-dd") != -1 ){
				//일달력
				this.gfn_CallGridCalendar(obj);
				return false;
			}else {
				//월달력
				this.gfn_CallMonthCalendar(obj);
				return false;
			}
		}else if (!this.gfn_IsNull(exprStr)) {
			if(obj.getCellProperty("body", e.cell, "expr").indexOf("date") != -1){
				if( obj.getCellProperty("body", e.cell , "calendareditformat").indexOf("yyyy-MM-dd") != -1 ){									
					//일달력
					this.gfn_CallGridCalendar(obj);
					return false;
				}else {					
					//월달력
					this.gfn_CallMonthCalendar(obj);
					return false;
				}
			}
		}
	}else if(obj instanceof nexacro.Calendar) {			
		if( obj.dateformat.indexOf("yyyy-MM-dd") != -1 ){
			//일달력
			this.gfn_CallGridCalendar(obj);
			return false;
		}else {			
			//월달력
			this.gfn_CallMonthCalendar(obj);
			return false;
		}
	}

};

/**
 * @class  월달력 팝업 event <br>
 * @param  N/A
 * @param  {Object} obj - nexacro.PopupDiv
 * @param  {Evnet} e - nexacro.EventInfo
 * @return N/A
 */
pForm._popupDiv_onpopup = function(obj, e)
{
	if (typeof(obj.form["fn_SetInit"]) == "function") {
		obj.form.fn_SetInit();
	}
};

/**
 * @class 월달력 호출 <br>
 * @param {Object} obj - Calendar 또는 Grid 객체
 * @return N/A
 */
pForm.gfn_CallMonthCalendar = function(obj)
{	
	var width = 168;
	var height = 134;
	var pdvNm = "_pdv_MonthCalendar";
	var objPdv = null;
	
	if (this.isValidObject(pdvNm)) {
		objPdv = this.components[pdvNm];
		objPdv["user_comp"] = obj;
	} else {
		objPdv = new PopupDiv();  
		objPdv.init(pdvNm, 0, 0, width, height, null, null);
		objPdv["user_comp"] = obj;
		objPdv.set_url("cmm::ComMonthCalendar.xfdl");
		if( obj.changeEvnetFlag == "After" ) {			
			objPdv.set_url("cmm::ComMonthCalendar2.xfdl");
		}
				
		objPdv.set_formscrollbartype("none none");
		objPdv.set_formscrolltype("none");
		
		objPdv.addEventHandler("onpopup", this._popupDiv_onpopup, this);
		objPdv.addEventHandler("oncloseup", this._popupDiv_oncloseup, this);
		
		this.addChild(pdvNm, objPdv);
		objPdv.show();
	}
	
	var objFnc = objPdv.form.lookup(obj.user_callback);
	if (typeof(objFnc) == "function") {
		objPdv["user_callback"] = obj.user_callback;
	}
	
	var left = 0;
	var top = obj.getOffsetHeight();
	
	if (obj instanceof Grid) { // Grid
		var bindDs = obj.getBindDataset();
		var row = bindDs.rowposition;
		var cell = obj.getCellPos();
		var objRect = obj.getCellRect(row, cell);
		var column = obj.getCellProperty("body", cell, "text").replace("bind:", "");
		
		objPdv["user_bindDs"] = bindDs;
		objPdv["user_column"] = column;
		objPdv["user_value"] = obj.getCellValue(row, cell);
		
		left = objRect.left;
		top = objRect.bottom;
	}
	
	//objPdv.trackPopupByComponent(obj, left, top, width, height, "_callbackMonthCalendar", false);
	if (this.gfn_IsNull(obj.user_callback)) {
		objPdv.trackPopupByComponent(obj, left, top, width, height, "", false);
	} else {
		objPdv.trackPopupByComponent(obj, left, top, width, height, obj.user_callback, false);
	}
};

/**
 * @class 그리드 달력 호출 <br>
 * @param {Object} obj - Calendar 또는 Grid 객체
 * @return N/A
 */
pForm.gfn_CallGridCalendar = function( obj )
{
	var width = 202;
	var height = 197;
	var pdvNm = "_pdv_GridCalendar";
	var objPdv = null;
	
	if (this.isValidObject(pdvNm)) {
		objPdv = this.components[pdvNm];
		objPdv["user_comp"] = obj;
	} else {
		objPdv = new PopupDiv();  		
		objPdv.init(pdvNm, 0, 0, width, height, null, null);
		objPdv["user_comp"] = obj;
		objPdv.set_url("cmm::ComGridCalendar.xfdl");
		objPdv.set_formscrollbartype("none none");
		objPdv.set_formscrolltype("none");
		
		objPdv.addEventHandler("onpopup", this._popupDiv_onpopup, this);
		objPdv.addEventHandler("oncloseup", this._popupDiv_oncloseup, this);
		
		this.addChild(pdvNm, objPdv);
		objPdv.show();
	}
	
	var objFnc = objPdv.form.lookup(obj.user_callback);
	if (typeof(objFnc) == "function") {
		objPdv["user_callback"] = obj.user_callback;
	}
	
	var left = 0;
	var top = obj.getOffsetHeight();
	
	if (obj instanceof Grid) { // Grid
		var bindDs = obj.getBindDataset();
		var row = bindDs.rowposition;
		var cell = obj.getCellPos();
		var objRect = obj.getCellRect(row, cell);
		var column = obj.getCellProperty("body", cell, "text").replace("bind:", "");
		var param = obj.getCellProperty("body", cell, "text").replace("bind:", "");
		
		objPdv["user_bindDs"] = bindDs;
		objPdv["user_column"] = column;
		objPdv["user_value"] = obj.getCellValue(row, cell);
		objPdv["user_param"] = obj.user_param;
		
		left = objRect.left;
		top = objRect.bottom;
	}
	
	
	if (this.gfn_IsNull(obj.user_callback)) {
		objPdv.trackPopupByComponent(obj, left, top, width, height, "", false);
	} else {
		objPdv.trackPopupByComponent(obj, left, top, width, height, obj.user_callback, false);
	}
};

/**
 * @class 월달력 공통 Callback 함수
 * @param {String} compId - component id
 * @param {Number} retVal - return val
 * @return N/A
 */
// pForm._callbackMonthCalendar = function(compId, retVal)
// {
// 
// };

/**
 * @class  Bottom Frame에 메시지를 출력 <br>
 * @param  {String} msg - 출력할 메시지
 * @return N/A
 * @example
 *  var msg = "조회 되었습니다.";
 *  this.gfn_SetStatusMsg(msg);
 */
pForm.gfn_SetStatusMsg = function(msg)
{
	var objApp = this.gfn_GetApp();
	if (this.gfn_IsNull(objApp.gv_BottomFrame)) return;
	if (this.gfn_IsNull(objApp.gv_BottomFrame.form.fn_SetMessage)) return;
	objApp.gv_BottomFrame.form.fn_SetMessage(msg);
};

/**
 * @class  새로운 창을 Open (AS-IS 구현로직 포함) <br>
 * @param  {Object} pThis - Form 객체
 * @param  {Object} option - JSON 객체
 *					{String} prefix     - prefix
 *					{String} formId     - 화면ID
 *					{String} [arg]      - 전달값
 *					{String} menuNm     - 메뉴(화면)명
 *					{String} [menuId]   - 메뉴ID
 *					{String} [btnAuth]  - 버튼권한
 *					{Number} [row]      - tree row
 *					{Object} [ds]       - Dataset
 *					{Boolean} [isClose] - 기존화면이 열려 있으면 닫음 (true)
 * @example
	var option = {
		prefix  : "D10"
		, formId  : "D2002020010F"
		, arg     : "fv_arg1=ABC fv_arg2=123 fv_arg3=가나다"
		, menuNm  : "배관ID이력관리 현황"
	};
	
	this.gfn_CreateMdi(this, option);
 */
pForm.gfn_CreateMdi = function(pThis, option)
{
	var objApp 		= this.gfn_GetApp();
	var prefix 		= option.prefix;
	var formId 		= option.formId;
	var arg    		= option.arg;
	var menuNm 		= option.menuNm;
	var menuId 		= option.menuId;
	var btnAuth 	= option.btnAuth;
	var nNewRow 	= option.row;	
	var isClose 	= option.isClose;
	var categoryId 	= option.categoryId;	
	var objDs   	= objApp.gds_MenuList;		
	if( this.gfn_IsNull(menuId) && this.gfn_IsNull(formId) ) {
		return;
	}
	
	// MDI가 아닌 경우 RETURN
	if( objApp.gv_Mdifg != "Y" ) {
		return; 
	}
	
	if (this.gfn_IsOpenableForm("W", formId) == false) {
		var option = {
			popupId    : "A5101010080U"
			, url      : "A10::A5101010080U.xfdl"
			, title    : "권한 확인"
			, width    : 400
			, height   : 160
		};
		
		this.gfn_Modal(this, option);
		return;
	}

	//대메뉴 제외한 메뉴 총 인덱스 세팅.
	objDs.filter("MENU_LEVEL != 0");	
	nNewRow = objDs.findRowExpr("MENU_ID=='"+menuId+"'&&FORM_ID=='"+formId+"'");		
	var row = this.gfn_Iif(nNewRow >= 0, nNewRow, -1);
	
	 // 메뉴ID O, 화면ID X
	if( !this.gfn_IsNull(menuId) && this.gfn_IsNull(formId) ) {
		row = objDs.findRow("MENU_ID", menuId);
	} 
	// 화면ID O, 메뉴ID X
	else if (!this.gfn_IsNull(formId) && this.gfn_IsNull(menuId)) { 
		row = objDs.findRow("FORM_ID", formId);
	}
	
	// 빈값 확인
	if( this.gfn_IsNull(prefix) ) prefix = objDs.getColumn(row, "PREFIX");
	if( this.gfn_IsNull(formId) ) formId = objDs.getColumn(row, "FORM_ID");
	if( this.gfn_IsNull(menuNm) ) menuNm = objDs.getColumn(row, "MENU_NM");
	if( this.gfn_IsNull(menuId) ) menuId = objDs.getColumn(row, "MENU_ID");
	if( this.gfn_IsNull(categoryId) ) categoryId = objDs.getColumn(row, "CATEGORY_ID");
	if( this.gfn_IsNull(btnAuth) ) btnAuth = objDs.getColumn(row, "BTN_AUTH");
	if( this.gfn_IsNull(isClose) ) isClose = false;
	
	if( formId == menuId ) {
		menuId = objDs.getColumn(row, "MENU_ID");
	}	
	// 메뉴세팅을 위한 데이터셋필터링.
	objDs.filter("MENU_LEVEL != 0 && CATEGORY_ID == '"+categoryId+"'");
	nNewRow = objDs.findRowExpr("MENU_ID=='"+menuId+"'&&FORM_ID=='"+formId+"'");
	row = this.gfn_Iif(nNewRow >= 0, nNewRow, -1);

	// 중복 화면 찾기
	var objForm = null;
	for( var i=0; i<objApp.gv_WorkFrame.frames.length; i++ ) {
		var tmp = objApp.gv_WorkFrame.frames[i].arguments["menuId"];
		if( menuId == tmp ) {
			objForm = objApp.gv_WorkFrame.frames[i];
			objForm.fv_WinId = objApp.gv_WorkFrame.frames[i].arguments["winId"];
			objApp.gv_LeftFrame.form.fn_SetRow(row);
			break;
		}
	}	
	// open 된 창이 없는 경우 또는 DUP_YN이 "Y"로 넘어오는 경우 window open 있는 경우 set focus
	var strDupYn = objDs.getColumn(row, "DUP_YN");
	
	// 중복 실행 확인
	if( this.gfn_IsNull(objForm) || (strDupYn == "1") ) { 
		// 최대 화면 개수 확인
		if( objApp.gv_WorkFrame.frames.length >= this.MDI_MAX_CNT ) {
			this.alert("화면 Open 허용갯수를 초과하였습니다.\n기존 화면을 닫고 Open하세요");
			var objWin = objApp.gv_WorkFrame.getActiveFrame();
			objWin.setFocus();
			return;
		}		
		
		// navigation
		var level = nexacro.toNumber(objDs.getColumn(row, "MENU_LEVEL"));
		var navi = "";
		for( var i = row; i >= 0; i-- ) {
			if (nexacro.toNumber(objDs.getColumn(i, "MENU_LEVEL")) < level) {
				level = nexacro.toNumber(objDs.getColumn(i, "MENU_LEVEL"));
				navi = objDs.getColumn(i, "MENU_NM") + " > " + navi;
			}
		}
		
		// argument : JSON 변환
		if( !this.gfn_IsNull(arg) ) {
			arg = this.gfn_MakeArgumentArray(arg + " ");
		}
		
		// MDI 화면 생성
		var winId = formId + "_" + parseInt(Math.random() * 10000);
		var formUrl = prefix + "::" + formId + ".xfdl";
		
		// 화면 생성
		var objChild = new ChildFrame;
		objChild.init(winId, 0, 0, objApp.gv_WorkFrame.getOffsetWidth() - 0, objApp.gv_WorkFrame.getOffsetHeight() - 0);
		objApp.gv_WorkFrame.addChild(winId, objChild);
		
		objChild.arguments = [];
		objChild.set_dragmovetype("all");
		objChild.set_showtitlebar(false);
		objChild.set_resizable(true);
		objChild.set_openstatus("maximize");
		objChild.set_titletext(menuNm);
		objChild.set_showtitleicon(false);
		objChild.set_showcascadetitletext(false);
		objChild.arguments["winId"] 		= winId;
		objChild.arguments["menuId"] 		= menuId;
		objChild.arguments["menuNm"] 		= menuNm;
		objChild.arguments["prefix"] 		= prefix;
		objChild.arguments["formId"] 		= formId;
		objChild.arguments["formUrl"] 		= formUrl;
		objChild.arguments["navi"] 			= navi + menuNm;
		objChild.arguments["arg"] 			= arg;
		objChild.arguments["btnAuth"] 		= btnAuth;
		objChild.arguments["categoryId"] 	= categoryId;
		objChild.arguments["orgRow"] 		= nNewRow;
		objChild.arguments["preCategoryId"] = nexacro.getApplication().gv_LeftFrame.form.ds_Menu.getColumn(0, "CATEGORY_ID");		
		objChild.arguments["pThis"] 		= pThis;				
		objChild.set_formurl("frame::FrameWork.xfdl");
		
		// 화면 호출
		objChild.addEventHandler("onsyscommand", this._onsyscommand, pThis);		
		objApp.gv_MdiFrame.form.fn_InitFalg2();		
		objApp.gv_MdiFrame.form.fn_AddTab(winId, menuNm, menuId);		
		
		objChild.show();
	} 
	else {
		// 아규먼트 있을때만 연계 (2009-10-26)
		if (!this.gfn_IsNull(arg)) {
			// argument가 string인 경우 JSON으로 변환
			if (typeof(arg) == "string") {
				arg = this.gfn_MakeArgumentArray(arg + " ");
			}
			
			objForm.arguments["arg"] = arg;
			objApp.gv_MdiFrame.form.fn_SetTabIndex(objForm.name);
			
			// fn_ActivateCommon 제거함 -> 확인해 볼 것
			var objFnc = objForm.form.div_Work.form.fn_ActivateCommon;
			if( !this.gfn_IsNull(objFnc) ) {
				objForm.form.div_Work.form.fn_ActivateCommon();				
			} 
			
		} 
		else {
			// 메뉴에서 넘어오는것은 focus만			
			objApp.gv_MdiFrame.form.fn_InitFalg();
			objApp.gv_MdiFrame.form.fn_SetTabIndex(objForm.name);			
		} 
	}
	
	// 기존화면이 열려 있을 경우
	if( !this.gfn_IsNull(objForm) ) {
		
		// 닫음
		if (isClose == true) {
			objApp.gv_MdiFrame.form.fn_DeleteTabpage(objForm.fv_WinId);
		} 
		// 아규먼트 있을때만 연계 조건 추가 (2020-08-07)
		// fn_ReInit 함수 존재하는 경우 호출
		else if(!this.gfn_IsNull(arg)){
			if (!this.gfn_IsNull(objForm.form.div_Work.form.fn_ReInit)) {				
				objForm.form.div_Work.form.fn_ReInit();
				objForm.form.div_Work.form.vscrollbar.set_pos(); // 스크롤 위치 설정.
			}
		}
	}
	
	// 메시지 초기화
	this.gfn_SetStatusMsg("");	
};

/**
 * @description ChildFrame 에 시스템명령(Command) 메시지가 들어왔을 때 발생 <br>
 */
pForm._onsyscommand = function(obj, e)
{
	obj.form.child_onsyscommand(obj, e);
};

/**
 * @class  메뉴ID로 화면찾아 반환 <br>
 * @param  {String} menuId - 메뉴ID
 * @return {Object} 해당 화면
 * @example
 */
pForm.gfn_GetMdi = function(menuId)
{
	if (this.gfn_IsNull(menuId)) return null;
	
	var objApp = this.gfn_GetApp();
	var objForm = null;
	
	for (var i = 0; i < objApp.gv_WorkFrame.frames.length; i++) {
		var tmp = objApp.gv_WorkFrame.frames[i].arguments["menuId"];
		if (menuId == tmp) {
			objForm = objApp.gv_WorkFrame.frames[i];
			break;
		}
	}
	
	return objForm;
};

/**
 * @class  Main Form 반환 <br>
 * @param  {Object} pThis - Form 객체
 * @return {Object} argument값
 * @example
 *  this.gfn_GetMainForm(this);
 */
pForm.gfn_GetMainForm = function(pThis)
{
	if (this.gfn_IsNull(pThis)) return null;
	
	return pThis.getOwnerFrame().form.div_Work.form;
};

/**
 * @class  Form으로 전달된 argument값 반환 <br>
 *         전달값은 "this.parent.[변수명]" 또는 "this.getOwnerFrame().[변수명]" 형태로 사용
 * @param  {Object} pThis - Form 객체
 * @param  {String | Array} arg - argument명 또는 argument명 배열
 * @return {Object} argument값
 * @example
 *  this.gfn_GetArgForm(this, "arg1");
 */
pForm.gfn_GetArgForm = function(pThis, arg)
{
	var argument = pThis.getOwnerFrame().arguments["arg"];
	
	if (this.gfn_IsNull(argument)) return null;
	if (this.gfn_IsNull(arg)) return argument;
		
	if (arg instanceof Array) { // 배열인 경우
		var json = {};
		
		for (var i = 0; i < arg.length; i++) {
			json[arg[i]] = argument[arg];
		}
		
		return json;
	} else {
		return argument[arg];
	}
};

/**
 * @description Dataset Viewer 팝업 (각 화면에서 단축키 지정) <br>
 */
pForm._gfn_Onkeydown = function(obj, e)
{
	var objApp = this.gfn_GetApp();
	//objApp.gv_TopFrame.form.sessionTimerCall();
	// Ctrl + Q
	if( e.ctrlkey && e.keycode == 81 ) {
		// 운영환경에서는 실행 방지
		// kjh 20200717 권기철차장 협의. 전산기획팀/솔루션 운영에서 사용가능하게 변경.
		var authFlag = false; // 권한
		var dept = this.gfn_GetUserInfo("G_DEPT_CODE");
		// 전산기획팀 : 200143, 솔루션 : 200473
		if( dept == "200143" || dept == "200473" ){
			authFlag = true;
		}
		//if (this.gfn_GetServerType() == "PROD") return;
		if (this.gfn_GetServerType() == "PROD" &&  !authFlag  ){
			return;
		} 
		var option = {
			popupId  : "ComDsViewer"
			, url    : "cmm::ComDsViewer.xfdl"
			, title  : "Dataset Viewer"
			, width  : 900
			, height : 600
		};
		
		this.gfn_OpenDebug(this, option);
	}	
};

/**
 * @class  Form 닫기 <br>
 * @param  N/A
 * @return N/A
 * @example
 *  this.gfn_CloseForm();
 */
pForm.gfn_CloseForm = function()
{
	this.gfn_GetApp().gv_MdiFrame.form.fn_DeleteTabpage(this.getOwnerFrame().form.fv_WinId);
};

// 달력 컴포넌트 Validataion 재정의
pForm._gfn_DeleteValidationDate = function(obj)
{
	if( this.gfn_IsNull(obj) ) {
		return;
	}
	
	if( this.gfn_Trim(obj.editformat).toUpperCase() != "YYYY-MM-DD" ) {
		return;
	}
	
	obj._isValidDate = function (val, editmask_type) {
		return true;
	};
	
	obj._masktypeobj.isFilterChar = function (ch, pos_begin, pos_end) { 
		if (!/[0-9]/.test(ch)) {
			return true;
		}
		return false;
	};
	
	obj._masktypeobj.changeNormalizeValueFromBuffer = function () { 		
		var i = 0;
		var j, date_obj;
		var y, M, d, h, m, s, ms;

		var edit_datetype;
		var normal_datetype;

		var edit_formattype = this.getEditFormatStringType();
		var normal_format = this._DateFormatConst["NORMALFORMAT_" + edit_formattype].concat();

		var edit_char_buf = this._edit_char_buf;
		var edit_type_buf = this._edit_type_buf;

		var before_idx = -1;
		var curr_idx = -1;

		var curr_date = this._date;

		while (i <= edit_type_buf.length) {
			edit_datetype = this.changeTypeToDate(edit_type_buf[i]);

			before_idx = curr_idx;
			curr_idx = normal_format.indexOf(edit_datetype);

			if (before_idx >= 0 && before_idx != curr_idx) {
				delete normal_format[before_idx];
			}

			if (curr_idx >= 0) {
				if (edit_datetype == "YEAR") {
					if (!y) {
						y = "";
					}
					y += edit_char_buf[i] ? edit_char_buf[i] : "";
				}
				if (edit_datetype == "MONTH") {
					if (!M) {
						M = "";
					}
					M += edit_char_buf[i] ? edit_char_buf[i] : "";
				}
				if (edit_datetype == "DAY") {
					if (!d) {
						d = "";
					}
					d += edit_char_buf[i] ? edit_char_buf[i] : "";
				}
				if (edit_datetype == "HOUR") {
					if (!h) {
						h = "";
					}
					h += edit_char_buf[i] ? edit_char_buf[i] : "";
				}
				if (edit_datetype == "MINUTE") {
					if (!m) {
						m = "";
					}
					m += edit_char_buf[i] ? edit_char_buf[i] : "";
				}
				if (edit_datetype == "SECOND") {
					if (!s) {
						s = "";
					}
					s += edit_char_buf[i] ? edit_char_buf[i] : "";
				}
				if (edit_datetype == "MILLISECOND") {
					if (!ms) {
						ms = "";
					}
					ms += edit_char_buf[i] ? edit_char_buf[i] : "";
				}
			}
			i++;
		}

		while (normal_format.length > 0) {
			normal_datetype = normal_format.pop();
			if (normal_datetype) {
				if (normal_datetype == "YEAR") {
					y = curr_date[0] ? curr_date[0] : "0000";
				}
				if (normal_datetype == "MONTH") {
					M = curr_date[1] ? curr_date[1] : "01";
				}
				if (normal_datetype == "DAY") {
					d = curr_date[2] ? curr_date[2] : "01";
				}
				if (normal_datetype == "HOUR") {
					h = curr_date[3] ? curr_date[3] : "00";
				}
				if (normal_datetype == "MINUTE") {
					m = curr_date[4] ? curr_date[4] : "00";
				}
				if (normal_datetype == "SECOND") {
					s = curr_date[5] ? curr_date[5] : "00";
				}
				if (normal_datetype == "MILLISECOND") {
					ms = curr_date[6] ? curr_date[6] : "000";
				}
			}
		}

		if (edit_formattype == "TIME") {
			y = curr_date[0] ? curr_date[0] : "0000";
			M = curr_date[1] ? curr_date[1] : "01";
			d = curr_date[2] ? curr_date[2] : "01";
		}

		if (!nexacro._isNull(y)) {
			y = y.padLeft(4, "0");
		}
		if (!nexacro._isNull(M)) {
			M = M.padLeft(2, "0");
			if (M != "00") {
				M -= 1;
			}
		}
		if (!nexacro._isNull(d)) {
			d = d.padLeft(2, "0");
			if (d == "00") {
				d = "01";
			}
		}
		if (!nexacro._isNull(h)) {
			h = h.padLeft(2, "0");
		}
		if (!nexacro._isNull(m)) {
			m = m.padLeft(2, "0");
		}
		if (!nexacro._isNull(s)) {
			s = s.padLeft(2, "0");
		}
		if (!nexacro._isNull(ms)) {
			ms = ms.padLeft(3, "0");
		}
		
		if (edit_formattype == "TIME") {
			date_obj._timeonly = true;
		}
		
		var maxDay = obj._masktypeobj.getEndDay(y, M+1);
		if ( (y && isNaN(y = +y)) || (M && isNaN(M = +M)) || (d && isNaN(d = +d)) || (h && isNaN(h = +h)) || (m && isNaN(m = +m)) || (s && isNaN(s = +s)) || (ms && isNaN(ms = +ms)) ) {
			return "";
		}

		if ( (!maxDay) || (M && (+M > 12)) || (d && (+d > maxDay)) || (h && (+h >= 24)) || (m && (+m >= 60)) || (s && (+s >= 60)) || (ms && (+ms >= 1000)) ) {
			return "";
		}
		
		return (new nexacro.Date(y, M, d, h, m, s, ms)).toString();
	};	
}