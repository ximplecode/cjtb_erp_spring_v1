/**
 * 통합정보시스템 고도화 구축
 * @FileName    Transaction.js
 * @Creator     UI공통
 * @CreateDate  2019.05.02
 * @Desction    Transaction 관련 함수
 ************** 소스 수정 이력 ***********************************************
 * date                Modifier                Description
 *******************************************************************************
 * 2019.05.02          UI공통                 최초 생성
 *******************************************************************************
 */

var pForm = nexacro.Form.prototype;

/**
 * @class  공통 Transaction 함수 <br>
 * @param  {Object} pThis - Form 객체
 * @param  {Object} option - JSON 객체
 *					{String} svcId    	 - 서비스ID
 *					{String} partCd   	 - 업무구분코드
 *					{String} svcUrl   	 - 서비스URL
 *					{String} inDs     	 - 서버전송 Dataset
 *					{String} outDs    	 - 결과회신 Dataset
 *					{String} argument 	 - 단건전송 arguments
 *					{String} callback 	 - Callback 함수명
 *					{Boolean} async   	 - 비동기통신 여부 (true : 비동기, false : 동기) 
 *					{Boolean} waitCursor - 커서 사용 여부 (true(default) : 사용, false : 미사용)  
 * @return N/A
 * @example
	var option = {
		svcId    	 : "A1101010010Fselect"
		, partCd   	 : "A10"
		, svcUrl   	 : "A1101010010Fselect.do"
		, inDs     	 : "ds_Search=ds_Search"
		, outDs    	 : "ds_List=ds_List"
		, argument 	 : ""
		, callback 	 : "fn_Callback"
		, async    	 : true
		, waitCursor : true
	};
	
	this.gfn_Transaction(this, option);
 */
pForm.gfn_Transaction = function(pThis, option)
{
	// 1. 변수 선언
	var svcId 			= option.svcId;     								// 서비스ID
	var svcUrl 			= option.svcUrl;    								// 서비스URL
	var partCd 			= option.partCd;    								// 업무구분코드
	var inDs 			= this.gfn_Nvl(option.inDs		, "");    			// 서버전송 Dataset
	var outDs 			= this.gfn_Nvl(option.outDs		, "");     			// 결과회신 Dataset
	var argument 		= this.gfn_Nvl(option.argument	, ""); 				// 단건전송 arguments
	var callback 		= this.gfn_Nvl(option.callback	, "fn_Callback"); 	// Callback 함수명
	var async 			= this.gfn_Nvl(option.async		, true);     		// 비동기통신 여부
	var waitCursor 		= this.gfn_Nvl(option.waitCursor, true);			// Wait Cursor 사용여부
	var dataType 		= this.gfn_Nvl(option.dataType  , 0);               // 0(XML), 2(SSV), [1(Binary) : 웹브라우저 환경에서 미지원] ★로컬 및 개발서버 xml, 운영서버 SSV로 통신★
	var compress 		= false;           									// 웹브라우저 환경에서 미지원	
	var objChild 		= pThis.getOwnerFrame();
	var menuId 			= objChild.form.fv_MenuId;
	var formId 			= objChild.name.split("_")[0];
	var currentComp 	= pThis.getFocus(); 								// 현재 포커스를 가지고 있는 컴포넌트
	var currentCompId 	= this.gfn_Nvl(currentComp.name, "");
	
	// 2. null 확인
	if (this.gfn_IsNull(svcId) || this.gfn_IsNull(svcUrl)) {
		trace("[gfn_Transaction] svcId, svcUrl 인자값 필수");
		return;
	}
		
	// 3. url 추가
	var objApp 				= this.gfn_GetApp();
	var handle 				= svcUrl.substr(0, 10);
	var serviceName 		= svcUrl.substr(10);
	var currentMenuId 		= "CurrentMenuId=" + menuId;	
	var currentFormId 		= "&CurrentFormId=" + formId;
	var currentComponentId 	= "&CurrentComponentId=" + currentCompId;
		
	// 4. svcId
	svcId = svcId + "::" + callback + "::" + (waitCursor?"true":"false");
	
	// 5. svcUrl
	partCd = partCd.toUpperCase();
	
	if( this.gfn_IsNull(partCd) || partCd == "UI" ) {
		svcUrl = "svcUrl::" + svcUrl; // svcUrl::Xxxxx.do
	} 
	else {
		svcUrl = "svcUrl_" + partCd + "::" + svcUrl; // svcUrl_A10::Xxxxx.do
	}
	
	// 7. 전송 데이터 형태
	if (this.gfn_GetServerType() == "PROD") { // 운영환경
		//dataType = 2;
	}
	
	// 8. Bottom Frame 메시지 초기화
	this.gfn_SetStatusMsg("");
	
	// Wait Cursor 지정
	var objEnv = nexacro.getEnvironment();
	if( !waitCursor ) {
		objEnv.set_usewaitcursor(false);
	}
	else {
		objEnv.set_usewaitcursor(true);
	}
	
	//세션타이머초기화
	var objApp = this.gfn_GetApp();
	if( this.name != "FrameLogin" && svcId.indexOf("FrameTopSearchAlramPopup") == -1 ) {
		objApp.gv_TopFrame.form.fn_CallSessionTimer();
	}
	
	// 9. 실행
 	pThis.transaction(svcId
 					, svcUrl
 					, inDs
 					, outDs
 					, argument
 					, "gfn_Callback"
 					, async
 					, dataType
 					, compress
 	);
};

/**
 * @class  공통 Callback 함수 (★ 업무에서 직접 사용 금지)
 * 이 함수가 먼저 수행되고 사용자지정 Callback함수가 수행
 * @param  {String} svcId - callback 구분ID
 * @param  {Number} errorCode - Error Code (0 : 정상, -1 : 오류(음수값))
 * @param  {String} [errorMsg] - Error 내용
 * @return N/A
 */
pForm.gfn_Callback = function(svcId, errorCode, errorMsg)
{
	var arrTmp 		= svcId.split("::");
	var svcId 		= arrTmp[0];
	var callback 	= arrTmp[1];
	var waitCursor  = arrTmp[2];
	var objApp 		= this.gfn_GetApp();
	
	var objEnv = nexacro.getEnvironment();
	if( objEnv.usewaitcursor == false ) {
		objEnv.set_usewaitcursor(true);		
	}		
	// 에러 공통 처리
	if (errorCode != 0) {
		var errCd = -8;		
		switch (errorCode) {
			case -1 :				
				if( errorMsg.indexOf("ORA-") != -1  ) {
					var fRow = objApp.gds_OraErrMsg.findRow("ORA_ERR_CODE", errorMsg);				
					if( fRow != -1 ) {					
						errCd = objApp.gds_OraErrMsg.getColumn(fRow, "ORA_ERR_CODE");				
						if( errCd == "ORA-00001" ) {					
							errorMsg  = objApp.gds_OraErrMsg.getColumn(fRow, "ORA_ERR_MSG") + "\n검색조건을 확인하여 자료유무를 체크하십시요.\n그래도 오류가 발생하면 관리자에게 문의하시기바랍니다.";						
						}
						else {						
							errorMsg  = objApp.gds_OraErrMsg.getColumn(fRow, "ORA_ERR_MSG") + "\n관리자에게 문의하시기바랍니다.";
						}
					}				
					else {
						if( errorMsg.indexOf("ORA-20501") != -1 ) {
							// ORA-20501: GIS접수대기(40) 상태가 아닙니다. GIS접수를 진행할 수 없습니다.
							errorMsg = errorMsg.substr(11);	// GIS접수대기(40) 상태가 아닙니다. GIS접수를 진행할 수 없습니다.
						}
						else {
							errorMsg  += "\n관리자에게 문의하시기바랍니다.";
						}					
					}
				}
				break;
				
			case -8 : 
				var fRow = objApp.gds_OraErrMsg.findRow("ORA_ERR_CODE", errorMsg);
				
				if( fRow != -1 ) {					
					errCd = objApp.gds_OraErrMsg.getColumn(fRow, "ORA_ERR_CODE");				
					if( errCd == "ORA-00001" ) {					
						errorMsg  = objApp.gds_OraErrMsg.getColumn(fRow, "ORA_ERR_MSG") + "\n검색조건을 확인하여 자료유무를 체크하십시요.\n그래도 오류가 발생하면 관리자에게 문의하시기바랍니다.";						
					}
					else {						
						errorMsg  = objApp.gds_OraErrMsg.getColumn(fRow, "ORA_ERR_MSG") + "\n관리자에게 문의하시기바랍니다.";
					}
				}				
				else {
					if( errorMsg.indexOf("ORA-20501") != -1 ) {
						// ORA-20501: GIS접수대기(40) 상태가 아닙니다. GIS접수를 진행할 수 없습니다.
						errorMsg = errorMsg.substr(11);	// GIS접수대기(40) 상태가 아닙니다. GIS접수를 진행할 수 없습니다.
					}
					else {
						errorMsg  += "\n관리자에게 문의하시기바랍니다.";
					}					
				}
				break;

			case -9 :
				if( svcId != "logout" ) {
					// Message 창 출력 후 로그인 창으로 이동함.
					this.alert(errorMsg);
				}
				
				if( system.navigatorname != "nexacro" ) {
					sessionStorage.clear();
					localStorage.clear();					
				}				
				
				var objApp = this.gfn_GetApp();
				
				// 열려있는 화면 제거
				objApp.gv_MdiFrame.form.fn_DeleteTabpage();
				
				// 열려있는 팝업 제거
				var arrPopFrame = nexacro.getPopupFrames();				
				for( var i=0, cnt=arrPopFrame.length; i<cnt; i++ ) {					
					arrPopFrame[i].form.close();
				}
				
				// Left Frame 닫기
				objApp.gv_MdiFrame.form.fn_SetLeftFrameSize("collapse");
				
				// Left Frame 메뉴찾기 Clear
				objApp.gv_LeftFrame.form.div_Menu.form.edt_MenuName.set_value("");
				
				// Wait Cursor 제거
				this.setWaitCursor(false, true);
				
				objApp.gv_VFrameSet.set_separatesize("*,0,0");
				objApp.gv_LoginFrame.set_formurl("frame::FrameLogin.xfdl");
				return;
				
				break;
		}
	}
	// callBack 함수 실행
	if (this[callback]) {
		this[callback].call(this, svcId, errorCode, errorMsg);
	}
};

/**
 * @class  Wait Cursor 를 표시하거나 해제 <br>
 * @param  {Boolean} waitFlag - true (Wait Cursor가 화면에 표시) / false (화면에 표시된 Wait Cursor 를 해제)
 * @return N/A
 * @example
 */ 
pForm.gfn_SetWaitCursor = function(waitFlag)
{
	this.setWaitCursor(this.gfn_Nvl(waitFlag, false), true);
};
