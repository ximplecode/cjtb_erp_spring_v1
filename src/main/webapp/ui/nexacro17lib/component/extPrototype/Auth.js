/**
 * 통합정보시스템 고도화 구축
 * @FileName    Auth.js
 * @Creator     UI공통
 * @CreateDate  2019.05.29
 * @Desction    권한 관련 함수
 ************** 소스 수정 이력 ***********************************************
 * date                Modifier                Description
 *******************************************************************************
 * 2019.05.29          UI공통               최초 생성
 *******************************************************************************
 */

var pForm = nexacro.Form.prototype;

/**
 * @class  화면 오픈시 권한 체크 <br>
 * @param  {String} strWinFg - 윈도우 구분 ("W" :Child window  "P" : Popup window)
 * @param  {String} strFormId - form id
 * @return {Boolean} true / false
 */
pForm.gfn_IsOpenableForm = function(strWinFg, strFormId)
{
	if ((this.gfn_Left(strFormId, 5) == "Frame") || (this.gfn_Left(strFormId, 3) == "Com")) {
		return true;
	}
	
	// 팝업(POPUP)은 권한관리 없음
	if (strWinFg == "P") return true;
	
	// 메뉴에서 찾음
	var objApp = this.gfn_GetApp();
	var nRow = objApp.gds_MenuList.findRowNF("FORM_ID", strFormId);
	if (nRow >= 0) {
		if (objApp.gds_MenuList.getColumnNF(nRow, "ENABLE") != "0") {
			return true;
		}
	}
	
	return false;
};

/**
 * @class  공통버튼 권한 설정 <br>
 * @param {Object} pThis - Form 객체
 * @param  {String | Object} auth - 권한정보 문자열 또는 JSON Object
 * @return N/A
 * @example
    [예시1 : AS-IS]
	this.gfn_SetCmmButton(this, "00010101");
	
    [예시2 : TO-BE]
	var option = {
		addRow    : false // 추가
		, deleteRow : false // 삭제
		, search    : false // 조회
		, save      : true // 저장
		, select    : false // 선택
		, excel     : true // 엑셀
		, print     : false // 인쇄
		, close     : true // 닫기
	};
	
	this.gfn_SetCmmButton(this, option);
 */
pForm.gfn_SetCmmButton = function(pThis, auth)
{
	if (this.gfn_IsNull(pThis)) return;
	if (this.gfn_IsNull(auth)) return;
	
	var objDiv = pThis.getOwnerFrame().form.div_CommBtn;
	if (!this.gfn_IsNull(objDiv)) {
		if (typeof(auth) == "string") {
			var arrAuth = auth.split("");
			auth = {
				addRow      : this.gfn_Decode(arrAuth[0], "0", false, "1", true) // 추가
				, deleteRow : this.gfn_Decode(arrAuth[1], "0", false, "1", true) // 삭제
				, save      : this.gfn_Decode(arrAuth[2], "0", false, "1", true) // 저장
				, search    : this.gfn_Decode(arrAuth[3], "0", false, "1", true) // 조회
				, select    : this.gfn_Decode(arrAuth[4], "0", false, "1", true) // 선택
				, excel     : this.gfn_Decode(arrAuth[5], "0", false, "1", true) // 엑셀
				, print     : this.gfn_Decode(arrAuth[6], "0", false, "1", true) // 인쇄
				, close     : this.gfn_Decode(arrAuth[7], "0", false, "1", true) // 닫기
			};
		}
		
		objDiv.form.fn_SetAuth(auth);
	}
};

/**
 * @class  공통버튼 활성화 비활성화 변경처리 <br>
 * @param {Object} pThis - Form 객체
 * @param  {String | Object} auth - 권한정보 문자열 또는 JSON Object
 * @return N/A
 * @example
    [예시1 : AS-IS]
	this.gfn_ChangeCmmBtnEnable(this, "00010101");
	
    [예시2 : TO-BE]
	var option = {
		addRow    : false 	// 추가
		, deleteRow : false // 삭제
		, search    : false // 조회
		, save      : true 	// 저장
		, select    : false // 선택
		, excel     : true 	// 엑셀
		, print     : false // 인쇄
		, close     : true 	// 닫기
	};
	
	this.gfn_ChangeCmmBtnEnable(this, option);
 */
pForm.gfn_SetCmmBtnEnable = function(pThis, auth)
{
	if (this.gfn_IsNull(pThis)) return;
	if (this.gfn_IsNull(auth)) return;
	
	var objDiv = pThis.getOwnerFrame().form.div_CommBtn;
	if (!this.gfn_IsNull(objDiv)) {
		if (typeof(auth) == "string") {
			var arrAuth = auth.split("");
			auth = {
				addRow      : this.gfn_Decode(arrAuth[0], "0", false, "1", true) // 추가
				, deleteRow : this.gfn_Decode(arrAuth[1], "0", false, "1", true) // 삭제
				, save      : this.gfn_Decode(arrAuth[2], "0", false, "1", true) // 저장
				, search    : this.gfn_Decode(arrAuth[3], "0", false, "1", true) // 조회
				, select    : this.gfn_Decode(arrAuth[4], "0", false, "1", true) // 선택
				, excel     : this.gfn_Decode(arrAuth[5], "0", false, "1", true) // 엑셀
				, print     : this.gfn_Decode(arrAuth[6], "0", false, "1", true) // 인쇄
				, close     : this.gfn_Decode(arrAuth[7], "0", false, "1", true) // 닫기
			};
		}
		
		objDiv.form.fn_SetEnable(auth);
	}
};

/**
 * @class  공통버튼 텍스트 변경 <br>
 * @param {Object} pThis - Form 객체
 * @param  {Object} option - 텍스트 변경하고자 하는 설정값
					  addRow       	: "추가" 	// 추가		
					, deleteRow  	: "삭제" 	// 삭제		
					, search     	: "조회" 	// 조회
					, save       	: "저장" 	// 저장
					, select     	: "선택" 	// 선택
					, excel      	: "엑셀" 	// 엑셀
					, print      	: "인쇄" 	// 인쇄
					, close      	: "닫기" 	// 닫기		
					, addRowSize     : 120 		// 추가버튼 사이즈
					, deleteRowSize  : 120 		// 삭제버튼 사이즈		
					, searchSize     : 120 		// 조회버튼 사이즈
					, saveSize       : 120 		// 저장버튼 사이즈
					, selectSize     : 120 		// 선택버튼 사이즈
					, excelSize      : 120 		// 엑셀버튼 사이즈
					, printSize      : 120 		// 인쇄버튼 사이즈
					, closeSize      : 120 		// 닫기버튼 사이즈
 * @return N/A
 * @example    
	var option = {
		addRow       	: "추가" 	// 추가		
		, deleteRow  	: "삭제" 	// 삭제		
		, search     	: "조회" 	// 조회
		, save       	: "저장" 	// 저장
		, select     	: "선택" 	// 선택
		, excel      	: "엑셀" 	// 엑셀
		, print      	: "인쇄" 	// 인쇄
		, close      	: "닫기" 	// 닫기		
		, addRowSize     : 120 		// 추가버튼 사이즈
		, deleteRowSize  : 120 		// 삭제버튼 사이즈		
		, searchSize     : 120 		// 조회버튼 사이즈
		, saveSize       : 120 		// 저장버튼 사이즈
		, selectSize     : 120 		// 선택버튼 사이즈
		, excelSize      : 120 		// 엑셀버튼 사이즈
		, printSize      : 120 		// 인쇄버튼 사이즈
		, closeSize      : 120 		// 닫기버튼 사이즈
	};
	
	this.gfn_SetBtnText(this, option);
 */
pForm.gfn_SetBtnText = function(pThis, option)
{
	var divWidth = 478;
	var btnWidth = 58;
	
	if (this.gfn_IsNull(pThis)) return;
	if (this.gfn_IsNull(option)) return;
	
	var objDiv = pThis.getOwnerFrame().form.div_CommBtn;
	
	// Division 영역 확보
	if( !this.gfn_IsNull(option.addRowSize) ) {
		divWidth += nexacro.toNumber(option.addRowSize) - nexacro.toNumber(btnWidth);
	}
	
	if( !this.gfn_IsNull(option.deleteRowSize) ) {
		divWidth += nexacro.toNumber(option.deleteRowSize) - nexacro.toNumber(btnWidth);
	}
	
	if( !this.gfn_IsNull(option.searchSize) ) {
		divWidth += nexacro.toNumber(option.searchSize) - nexacro.toNumber(btnWidth);
	}
	
	if( !this.gfn_IsNull(option.saveSize) ) {
		divWidth += nexacro.toNumber(option.saveSize) - nexacro.toNumber(btnWidth);
	}
	
	if( !this.gfn_IsNull(option.selectSize) ) {
		divWidth += nexacro.toNumber(option.selectSize) - nexacro.toNumber(btnWidth);
	}
	
	if( !this.gfn_IsNull(option.excelSize) ) {
		divWidth += nexacro.toNumber(option.excelSize) - nexacro.toNumber(btnWidth);
	}
	
	if( !this.gfn_IsNull(option.printSize) ) {
		divWidth += nexacro.toNumber(option.printSize) - nexacro.toNumber(btnWidth);
	}
	
	if( !this.gfn_IsNull(option.closeSize) ) {
		divWidth += nexacro.toNumber(option.closeSize) - nexacro.toNumber(btnWidth);
	}
	
	if( divWidth != 478 ) {
		objDiv.set_width(divWidth);
	}
	
	if (!this.gfn_IsNull(objDiv)) {		
		objDiv.form.fn_SetBtnText(option);
	}
};

pForm.gfn_IsAuthenticated = function()
{
	var objApp = this.gfn_GetApp();
	return (objApp.MSAT != null && !this.gfn_IsNull(objApp.MSAT)) || !this.gfn_IsNull(this.gfn_GetUserName()) || !this.gfn_IsNull(this.gfn_GetUserNo());
};
