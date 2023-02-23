/**
 * 통합정보시스템 고도화 구축
 * @FileName    Report.js
 * @Creator     공통업무
 * @CreateDate  2019.05.02
 * @Desction    Report 관련 함수
 ************** 소스 수정 이력 ***********************************************
 * date                Modifier                Description
 *******************************************************************************
 * 2019.05.02          공통업무               최초 생성
 *******************************************************************************
 */

var pForm = nexacro.Form.prototype;

/**
 * @class  Report Url 반환 <br>
 * @param  {String} flag - root
 * @param  {String} dir - 구분
 * @return {String} Report Url
 * @example
 */
pForm.gfn_GetReportPath = function(flag, dir)
{
	var objApp = this.gfn_GetApp();
	var row = objApp.gds_UrlList.findRow("PART_CD", "ui");
	var url = "";
	
	if (row > -1) {
		url = "https://" + objApp.gds_UrlList.getColumn(row, "URL");
	}
	
	if (flag == "ROOT") {
		return url;
	}
	
	switch (this.gfn_ToUpper(dir)) {
		case "REPORT" : dir = "ReportOZ"; break;
		case "HELP" : dir = "Help"; break;
		case "FILE" : dir = "File"; break;
		default : dir = "ReportOZ"; break;
	}
	
	url = url + dir + "/";
	return url;
};

/**
 * @class  OZ 리포트 호출(HTML 버전) <br> 
 * @param  {Form} pThis - 해당 Form
 * @param  {Object} oParam
					dsParam		// 파라미터 정보를 담고 있는 데이터셋
					concatOpt	// 오즈 설정정보
					type		// INNER or OPEN(Default)
					OzInnerWeb	// INNER일 경우 웹컴포넌트
					divCd		// scgOzHtmlViewerForBill.jsp를 호출하는 조건 : As-Is 함수의 setOzUrl함수에서 divCd조건
 * @return N/A 
 * @example
 */
pForm.gfn_OpenOzReport = function(pThis, oParam)
{	
	var dsParam 	= oParam.dsParam;				
	var ozUrl       = "";
	var gReportUrl 	= "";
	var divCd       = this.gfn_Nvl(oParam.divCd, "1");	
	var ozUrl       = this.gfn_GetInterfaceInfo("REPORT") + "/scgOzHtmlViewer.jsp";
	var gReportUrl 	= this.gfn_GetInterfaceInfo("REPORT") + "/server/";
	
	if( divCd == "2" ) {
		ozUrl  	= this.gfn_GetInterfaceInfo("REPORT") + "/scgOzHtmlViewerForBill.jsp";
	}
		
	var dsOzHistParam = pThis.gfn_CreateTempDs(pThis, "ds_OzHistParam");
	var dsTempOut = pThis.gfn_CreateTempDs(pThis, "ds_tempOut");
	dsOzHistParam.clearData();
	dsOzHistParam.addColumn("PART"			, "string");
	dsOzHistParam.addColumn("REPORT_ID"		, "string");
	dsOzHistParam.addColumn("REPORT_TYPE"	, "string");
	dsOzHistParam.addColumn("PARAMETER"		, "string");
	dsOzHistParam.addColumn("TITLE"			, "string");
	dsOzHistParam.addColumn("FORM_ID"		, "string");
	dsOzHistParam.addColumn("OUTPUT_ID"		, "string");	
	dsOzHistParam.addColumn("OUTPUT_FLAG"	, "string");
	dsOzHistParam.addColumn("OUTPUT_NAME"	, "string");
	dsOzHistParam.addColumn("OUTPUT_CNT"	, "string");
	dsOzHistParam.addColumn("DIV_CD"		, "string");
	
	var aRow = -1;
	for( var i=0, cnt= dsParam.getRowCount(); i<cnt; i++ ) {
		aRow = dsOzHistParam.addRow();
		dsOzHistParam.setColumn(aRow, "PART"		, dsParam.getColumn(i, "SYSTEM_ID"));
		dsOzHistParam.setColumn(aRow, "REPORT_ID"	, dsParam.getColumn(i, "REPORT_ID"));
		dsOzHistParam.setColumn(aRow, "REPORT_TYPE"	, "WEB");
		dsOzHistParam.setColumn(aRow, "PARAMETER"	, this.gfn_Nvl(dsParam.getColumn(i, "REPORT_ARGS"), ""));	
		dsOzHistParam.setColumn(aRow, "TITLE"		, dsParam.getColumn(i, "REPORT_TITLE"));
		dsOzHistParam.setColumn(aRow, "FORM_ID"		, pThis.name);	
		dsOzHistParam.setColumn(aRow, "OUTPUT_ID"	, dsParam.getColumn(i, "REPORT_ID"));
		dsOzHistParam.setColumn(aRow, "OUTPUT_FLAG"	, dsParam.getColumn(i, "SYSTEM_ID"));
		dsOzHistParam.setColumn(aRow, "OUTPUT_NAME"	, dsParam.getColumn(i, "REPORT_TITLE"));	
		dsOzHistParam.setColumn(aRow, "OUTPUT_CNT"	, dsParam.getRowCount());
		dsOzHistParam.setColumn(aRow, "DIV_CD"		, divCd);
	}
	
	//OZ 출력 로그 저장 -> 프로시저 접근권한이 없어서 주석처리
	var option = {
		svcId    : "A1001InsertUserReportH"
	  , svcUrl   : "A1001InsertUserReportH.do"
	  , partCd   : "a10"
	  , argument : ""
	  ,	inDs     : "ds_OzInfo=" + dsOzHistParam.id
	  , outDs    : ""
	  ,	callback : "fn_Callback"
      , async    : false
	};
	option.inDs += " ds_Param=" + dsParam.id;
	
	pThis.gfn_Transaction(pThis, option);
	
	var systemId 	= dsParam.getColumn(0, "SYSTEM_ID")	  
	  , reportTitle	= dsParam.getColumn(0, "REPORT_TITLE")
	  , reportId	= dsParam.getColumn(0, "REPORT_ID")
	  , reportArgs	= dsParam.getColumn(0, "REPORT_ARGS")
	  ;
	  
	for( var i=1,cnt=dsParam.getRowCount(); i<cnt; i++ ) {		
		systemId 	+= "|" + dsParam.getColumn(i, "SYSTEM_ID");
		reportTitle += "|" + dsParam.getColumn(i, "REPORT_TITLE");
		reportId 	+= "|" + dsParam.getColumn(i, "REPORT_ID");
		reportArgs 	+= "|" + dsParam.getColumn(i, "REPORT_ARGS");
	}
	
	if( this.gfn_IsNull(oParam.concatOpt) ) {
		oParam.concatOpt = true;
	}
	
	var argSaveBtn = "";
	//null 일경우 true 로 처리
	if(this.gfn_Nvl(oParam.toolbarSave, true) == false){
		argSaveBtn    = _Base64.encode("false");
	}else{
		argSaveBtn    = _Base64.encode("true");
	}
	
	
	var args =  "part=" 		+ _Base64.encode(this.gfn_Nvl(systemId	 , ""));	
	args    += "&reportId=" 	+ _Base64.encode(this.gfn_Nvl(reportId	 , ""));
	args    += "&param=" 		+ _Base64.encode(this.gfn_Nvl(reportArgs , ""));
	args    += "&title=" 		+ _Base64.encode(this.gfn_Nvl(reportTitle, ""));	
	args    += "&reportUrl=" 	+ _Base64.encode(this.gfn_Nvl(gReportUrl , ""));	
	args    += "&reportCnt=" 	+ dsParam.getRowCount();	
	args    += "&concatOpt=" 	+ oParam.concatOpt;	
	args    += "&toolbarSave=" 	+ argSaveBtn;
	args    += "&WBS_USER_NO=" 	+ this.gfn_GetUserInfo("G_USER_NO");
	args = args.replace("\"", "");		
	
	
	//Inner 형태
	if( oParam.type == "INNER" ) {
		var option = {
			objWb 		: oParam.OzInnerWeb
			, svcUrl	: ozUrl
			, sParam	: args
		};	
		
		this.wfn_A1_SendWebPost(this, option);
	}
	//Open 형태
	else {
		var varDate 	= new Date();
		var popupId 	= "popup_" + varDate.getHours() + "" + varDate.getMinutes() + "" + varDate.getSeconds() + "" + varDate.getMilliseconds();
		var dsOzArgs  	= pThis.gfn_CreateTempDs(pThis, "ds_ozArgs");	
		
		//Dataset 초기화
		dsOzArgs.clearData();
		dsOzArgs.addColumn("OZ_URL", "string");
		dsOzArgs.addColumn("OZ_ARGS", "string");
		var aRow = dsOzArgs.addRow();
		dsOzArgs.setColumn(aRow, "OZ_URL"	, ozUrl);
		dsOzArgs.setColumn(aRow, "OZ_ARGS"	, args);
		
		var oArg = {dsOzArgs:dsOzArgs};
		
		var option = {
			popupId     : popupId
			, url       : "A10::A1801010011U.xfdl"
			, title     : "오즈리포트"
			, width     : 1080
			, height    : 703
			, arg 	    : oArg
			, callback  : "fn_CallbackPopup"
			, resizable	: ""
		};
		
		if( oParam.type == "MODAL" ) {
			this.gfn_Modal(this, option);
		}
		else {
			option.resizable = "true";
			this.gfn_Open(this, option);
		}
	}
};


/**
 * @class  OZ 리포트 호출(EXE 버전) <br> 
 * @param  {Form} pThis - 해당 Form
 * @param  {Object} oParam
					dsParam		// 파라미터 정보를 담고 있는 데이터셋
					divCd		// As-Is 11개 함수에 대한 설정값
									gfn_SetReportParam				: AS1
									gfn_QuickSetReportParam			: AS2
									gfn_SetMultiReportParam			: AM1
									gfn_SetMultiReportParam2		: AM2
									gfn_B2_SetReportParam			: BS1
									gfn_C1_SetReportParam			: CS1
									gfn_D1_SetMultiReportParam		: DM1
									gfn_E2_SetMultiReportParam		: EM1
									gfn_E2_SetMultiOdiReportParam	: EM2
									gfn_E5_SetMultiReportParam		: EM3
									gfn_E7_SetMultiReportParam		: EM3					
 * @return N/A 
 * @example
 */
pForm.gfn_OpenExeOzReport = function(pThis, oParam)
{	
	var dsParam 		= oParam.dsParam;			
	var ozUrl       	= this.gfn_GetInterfaceInfo("REPORT") + "/scgOzExeViewer.jsp";
	var gReportUrl 		= this.gfn_GetInterfaceInfo("REPORT") + "/server/";	
	var dsOzHistParam 	= pThis.gfn_CreateTempDs(pThis, "ds_OzHistParam");
	var dsTempOut 		= pThis.gfn_CreateTempDs(pThis, "ds_tempOut");
	var divCd 			= oParam.divCd;
	
	
	dsOzHistParam.clearData();
	dsOzHistParam.addColumn("PART"			, "string");
	dsOzHistParam.addColumn("REPORT_ID"		, "string");
	dsOzHistParam.addColumn("REPORT_TYPE"	, "string");
	dsOzHistParam.addColumn("PARAMETER"		, "string");
	dsOzHistParam.addColumn("TITLE"			, "string");
	dsOzHistParam.addColumn("FORM_ID"		, "string");
	dsOzHistParam.addColumn("OUTPUT_ID"		, "string");	
	dsOzHistParam.addColumn("OUTPUT_FLAG"	, "string");
	dsOzHistParam.addColumn("OUTPUT_NAME"	, "string");
	dsOzHistParam.addColumn("OUTPUT_CNT"	, "string");
	dsOzHistParam.addColumn("DIV_CD"		, "string");
	
	var aRow = -1;
	for( var i=0, cnt= dsParam.getRowCount(); i<cnt; i++ ) {
		aRow = dsOzHistParam.addRow();
		dsOzHistParam.setColumn(aRow, "PART"		, dsParam.getColumn(i, "SYSTEM_ID"));
		dsOzHistParam.setColumn(aRow, "REPORT_ID"	, dsParam.getColumn(i, "REPORT_ID"));
		dsOzHistParam.setColumn(aRow, "REPORT_TYPE"	, "EXE");
		dsOzHistParam.setColumn(aRow, "PARAMETER"	, this.gfn_Nvl(dsParam.getColumn(i, "REPORT_ARGS"), ""));	
		dsOzHistParam.setColumn(aRow, "TITLE"		, dsParam.getColumn(i, "REPORT_TITLE"));
		dsOzHistParam.setColumn(aRow, "FORM_ID"		, pThis.name);	
		dsOzHistParam.setColumn(aRow, "OUTPUT_ID"	, dsParam.getColumn(i, "REPORT_ID"));
		dsOzHistParam.setColumn(aRow, "OUTPUT_FLAG"	, dsParam.getColumn(i, "SYSTEM_ID"));
		dsOzHistParam.setColumn(aRow, "OUTPUT_NAME"	, dsParam.getColumn(i, "REPORT_TITLE"));	
		dsOzHistParam.setColumn(aRow, "OUTPUT_CNT"	, dsParam.getRowCount());
		dsOzHistParam.setColumn(aRow, "DIV_CD"		, divCd);
	}
	
	//OZ 출력 로그 저장
	var option = {
		svcId    : "A1001InsertUserReportH"
	  , svcUrl   : "A1001InsertUserReportH.do"
	  , partCd   : "a10"
	  , argument : ""
	  ,	inDs     : "ds_OzInfo=" + dsOzHistParam.id
	  , outDs    : ""
	  ,	callback : "fn_Callback"
      , async    : false
	};
	option.inDs += " ds_Param=" + dsParam.id;	
	pThis.gfn_Transaction(pThis, option);
	
	var part 		= dsParam.getColumn(0, "SYSTEM_ID")	  
	  , reportTitle	= dsParam.getColumn(0, "REPORT_TITLE")
	  , reportId	= dsParam.getColumn(0, "REPORT_ID")
	  , param		= dsParam.getColumn(0, "REPORT_ARGS")
	  ;
	  
	for( var i=1,cnt=dsParam.getRowCount(); i<cnt; i++ ) {		
		part 		+= "|" + dsParam.getColumn(i, "SYSTEM_ID");
		reportTitle += "|" + dsParam.getColumn(i, "REPORT_TITLE");
		reportId 	+= "|" + dsParam.getColumn(i, "REPORT_ID");
		param 		+= "|" + dsParam.getColumn(i, "REPORT_ARGS");
	}	
	
	if(this.gfn_IsNull(oParam.concatOpt)){
		oParam.concatOpt = true;
	}
	
	
	var argSaveBtn = "";
	//null 일경우 true 로 처리
	if(this.gfn_Nvl(oParam.toolbarSave, true) == false){
		argSaveBtn    = _Base64.encode("false");
	}else{
		argSaveBtn    = _Base64.encode("true");
	}
	
	var args =  "part=" 		+ _Base64.encode(part);
	args    += "&reportId=" 	+ _Base64.encode(reportId);	
	args    += "&reportUrl=" 	+ _Base64.encode(gReportUrl);	
	args    += "&divCd=" 		+ _Base64.encode(oParam.divCd);
	args    += "&childViewOpt=" + _Base64.encode(this.gfn_Nvl(oParam.childViewOpt, ""));
	args    += "&param=" 		+ _Base64.encode(this.gfn_Nvl(param		 		 , ""));
	args    += "&title=" 		+ _Base64.encode(this.gfn_Nvl(reportTitle		 , ""));
	args    += "&reportCnt=" 	+ dsParam.getRowCount();
	args    += "&concatOpt=" 	+ oParam.concatOpt;
	args    += "&toolbarSave=" 	+ argSaveBtn;
	args    += "&WBS_USER_NO=" 	+ this.gfn_GetUserInfo("G_USER_NO");
	args = args.replace("\"", "");	
	
	var objWebBrowser = null;
	if( this.gfn_IsNull(objWebBrowser) ){
		if( !pThis.isValidObject("_wfn_A1_WebBrowser") ) {
			objWebBrowser = new WebBrowser();
			pThis.addChild("_wfn_A1_WebBrowser", objWebBrowser);
			
			// 웹브라우저 객체에 이벤트 추가
			//objWebBrowser.addEventListener( 'message', this.getPostMessage);
			//objWebBrowser.addEventHandler("message", this.getPostMessage, this);
			//objWebBrowser.addEventHandler("onloadcompleted", this._gfn_onloadEventOzExeReport, this);
			//objWebBrowser.window.addEventListener( 'message', this._gfn_getOzPostMessage );
			//window.addEventListener( 'message', this._gfn_getOzPostMessage );
		}
		else {
			objWebBrowser = pThis._wfn_A1_WebBrowser;
		}
	}	
	objWebBrowser.show();
	var option = {
		objWb 		: objWebBrowser	//oParam.web
		, svcUrl	: ozUrl
		, sParam	: args
	};		
	this.wfn_A1_SendWebPost(this, option);	
};


/**
 * @class  OZ 리포트 호출(스케쥴러 버전) <br> 
 * @param  {Form} pThis - 해당 Form
 * @param  {Object} oParam
					dsParam			// 파라미터 정보를 담고 있는 데이터셋
					fromSend		// 보내는 주소 (생략하면 ozadmin@seoulgas.co.kr)
					fromUserName	// 보내는 이름 (생략하면 서울도시가스)
					toSend			// 받는 주소   (생략하면 로그인 User의 메일 주소로 전송됨.)
					ccSend			// 참조 주소   (생략)
					subject			// 제목			(생략하면 리포트 타이틀)
					context			// 내용			(생략하면 리포트 타이틀)
					format			// xls, doc, txt, pdf중 택1(생략시 xls로 셋팅함.)
 * @return N/A 
 * @example
 */
pForm.gfn_OpenScheduleOzReport = function(pThis, oParam)
{	
	var dsParam 	= oParam.dsParam;	
	var ozUrl       = this.gfn_GetInterfaceInfo("REPORT") + "/schOzScheduler.jsp";
	var gReportUrl 	= this.gfn_GetInterfaceInfo("REPORT") + "/server/";
	
	var exportFormat    = this.gfn_Nvl(oParam.format	  	, "xls");	
	var fromSend		= this.gfn_Nvl(oParam.fromSend	  	, "ozadmin@seoulgas.co.kr");
	var fromUserName	= this.gfn_Nvl(oParam.fromUserName	, "서울도시가스");
	var toSend			= this.gfn_Nvl(oParam.toSend	  	, this.gfn_GetUserInfo("G_EMAIL_ADDRESS"));
	var ccSend			= this.gfn_Nvl(oParam.ccSend		, "");
	var subject			= this.gfn_Nvl(oParam.subject		, dsParam.getColumn(0, "REPORT_TITLE"));
	var context			= this.gfn_Nvl(oParam.context	    , dsParam.getColumn(0, "REPORT_TITLE"));
	var divCd 			= this.gfn_Nvl(oParam.divCd			, "1");
	var dsOzHistParam 	= pThis.gfn_CreateTempDs(pThis, "ds_OzHistParam");
	var dsTempOut 		= pThis.gfn_CreateTempDs(pThis, "ds_tempOut");
		
	dsOzHistParam.clearData();
	dsOzHistParam.addColumn("PART"			, "string");
	dsOzHistParam.addColumn("REPORT_ID"		, "string");
	dsOzHistParam.addColumn("REPORT_TYPE"	, "string");
	dsOzHistParam.addColumn("PARAMETER"		, "string");
	dsOzHistParam.addColumn("TITLE"			, "string");
	dsOzHistParam.addColumn("FORM_ID"		, "string");
	dsOzHistParam.addColumn("OUTPUT_ID"		, "string");	
	dsOzHistParam.addColumn("OUTPUT_FLAG"	, "string");
	dsOzHistParam.addColumn("OUTPUT_NAME"	, "string");
	dsOzHistParam.addColumn("OUTPUT_CNT"	, "string");
	dsOzHistParam.addColumn("DIV_CD"		, "string");
	dsOzHistParam.addColumn("RCV_EMAIL"		, "string");
	dsOzHistParam.addColumn("TR_STATUS"		, "string");
	
	var aRow = -1;
	for( var i=0, cnt= dsParam.getRowCount(); i<cnt; i++ ) {
		aRow = dsOzHistParam.addRow();		
		dsOzHistParam.setColumn(aRow, "PART"		, dsParam.getColumn(i, "SYSTEM_ID"));
		dsOzHistParam.setColumn(aRow, "REPORT_ID"	, dsParam.getColumn(i, "REPORT_ID"));
		dsOzHistParam.setColumn(aRow, "REPORT_TYPE"	, "SCH");
		dsOzHistParam.setColumn(aRow, "PARAMETER"	, this.gfn_Nvl(dsParam.getColumn(i, "REPORT_ARGS"), ""));	
		dsOzHistParam.setColumn(aRow, "TITLE"		, dsParam.getColumn(i, "REPORT_TITLE"));
		dsOzHistParam.setColumn(aRow, "FORM_ID"		, pThis.name);	
		dsOzHistParam.setColumn(aRow, "OUTPUT_ID"	, dsParam.getColumn(i, "REPORT_ID"));
		dsOzHistParam.setColumn(aRow, "OUTPUT_FLAG"	, dsParam.getColumn(i, "SYSTEM_ID"));
		dsOzHistParam.setColumn(aRow, "OUTPUT_NAME"	, dsParam.getColumn(i, "REPORT_TITLE"));	
		dsOzHistParam.setColumn(aRow, "OUTPUT_CNT"	, dsParam.getRowCount());
		dsOzHistParam.setColumn(aRow, "DIV_CD"		, divCd);
		dsOzHistParam.setColumn(aRow, "RCV_EMAIL"	, toSend);
		dsOzHistParam.setColumn(aRow, "TR_STATUS"	, "P");
	}
	
	//OZ 출력 로그 저장
	var option = {
		svcId    : "A1001InsertUserReportH"
	  , svcUrl   : "A1001InsertUserReportH.do"
	  , partCd   : "a10"
	  , argument : ""
	  ,	inDs     : "ds_OzInfo=" + dsOzHistParam.id
	  , outDs    : dsTempOut.id + "=ds_OzResultList"
	  ,	callback : "fn_Callback"
      , async    : false
	};
	option.inDs += " ds_Param=" + dsParam.id;	
	pThis.gfn_Transaction(pThis, option);
	
	var part 			= dsParam.getColumn(0, "SYSTEM_ID")	  
	  , reportTitle		= dsParam.getColumn(0, "REPORT_TITLE")
	  , reportId		= dsParam.getColumn(0, "REPORT_ID")
	  , exportFileName 	= dsParam.getColumn(0, "REPORT_TITLE")	  
	  , param			= dsParam.getColumn(0, "REPORT_ARGS")
	  ;
	  
	for( var i=1,cnt=dsParam.getRowCount(); i<cnt; i++ ) {		
		part 			+= "|" + dsParam.getColumn(i, "SYSTEM_ID");
		reportTitle 	+= "|" + dsParam.getColumn(i, "REPORT_TITLE");
		reportId 		+= "|" + dsParam.getColumn(i, "REPORT_ID");
		exportFileName 	+= "|" + dsParam.getColumn(i, "REPORT_TITLE");		
		param 			+= "|" + dsParam.getColumn(i, "REPORT_ARGS");
	}
	
	var args =  "serverUrl=" 	  + encodeURI(gReportUrl)
	         + "&strPart=" 		  + encodeURI(part)
			 + "&strReport=" 	  + encodeURI(reportId)
			 + "&strParameter="   + encodeURI(param)
			 + "&strTitle="  	  + encodeURI(reportTitle)			 
			 + "&exportFormat="   + encodeURI(exportFormat)
			 + "&exportFileName=" + encodeURI(exportFileName)
			 + "&fromSend=" 	  + encodeURI(fromSend)
			 + "&fromUserName="   + encodeURI(fromUserName)
			 + "&toSend="   	  + encodeURI(toSend)
			 + "&ccSend="   	  + encodeURI(ccSend)
			 + "&subject="   	  + encodeURI(subject)
			 + "&context="   	  + encodeURI(context)
			 + "&reportCnt="  	  + dsParam.getRowCount()
			 + "&prtStrDtm="      + encodeURI(dsTempOut.getColumn(0, "PRT_STR_DTM"))
			 + "&gUserNo="  	  + encodeURI(dsTempOut.getColumn(0, "G_USER_NO"))
			 + "&WBS_USER_NO=" 	  + this.gfn_GetUserInfo("G_USER_NO")
	;
	args = args.replace("\"", "");
	
	var objWebBrowser = null;
	if( this.gfn_IsNull(objWebBrowser) ){
		if( !pThis.isValidObject("_wfn_A1_WebBrowser") ) {
			objWebBrowser = new WebBrowser();
			pThis.addChild("_wfn_A1_WebBrowser", objWebBrowser);
		}
		else {
			objWebBrowser = pThis._wfn_A1_WebBrowser;
		}
	}	
	objWebBrowser.show();
	
	alert("작업 완료 후 메일로 전송이 됩니다.");
	var option = {
		objWb 		: objWebBrowser	//oParam.web
		, svcUrl	: ozUrl
		, sParam	: args
	};		
	this.wfn_A1_SendWebPost(this, option);
	
	// 오즈스케쥴러 팝업 호출	
	var option = {
		popupId    : "A5101020020U"
		, url      : "A10::A5101020020U.xfdl"
		, title    : "리포트스케쥴 작업 조회 [A5101020020U]"
		, width    : 1000
		, height   : 500
		, arg      : ""
	};					
	
	option.arg  = "PRT_STR_DTM="  	+ dsTempOut.getColumn(0, "PRT_STR_DTM");
	option.arg += " REPORT_ID=" 	+ reportId;	
	
	this.gfn_Open(this, option);
};

// 현재시간을 나타냄.
pForm._gfn_GetCurrentDate = function()
{
	var vDate = new Date();
	var m, d;
	m = (vDate.getMonth() + 1);
	if (m < 10) m = '0' + '' + m;
	d = vDate.getDate();
	if (d < 10) d = '0' + '' + d;
	return vDate.getFullYear() + '' + m + '' + d + '' + vDate.getHours() + '' + vDate.getMinutes() + '' + vDate.getSeconds() + '' + vDate.getMilliseconds();
};

// Base64 Encode, Dec
var _Base64 = {
	// private property
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	// public method for encoding
	encode : function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;

		input = _Base64._utf8_encode(input);

		while (i < input.length) {

			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);

			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;

			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}

			output = output +
			this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
			this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

		}

		return output;
	},

	// public method for decoding
	decode : function (input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;

		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

		while (i < input.length) {

			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));

			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;

			output = output + String.fromCharCode(chr1);

			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}

		}

		output = _Base64._utf8_decode(output);

		return output;

	},

	// private method for UTF-8 encoding
	_utf8_encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";

		for (var n = 0; n < string.length; n++) {

			var c = string.charCodeAt(n);

			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}

		return utftext;
	},

	// private method for UTF-8 decoding
	_utf8_decode : function (utftext) { 
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;

		while ( i < utftext.length ) {

			c = utftext.charCodeAt(i);

			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			}
			else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}
			else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
		}
		return string;
	}
};


/**
 * @class  OZ 스케줄러를 이용하여 OZ 문서를 파일로 저장한다.
 * @param  {Object} objDs // OZ 파일과 저장될 파일의 정보를 가지고 있는 파라미터
           * 필수컬럼
				SYSTEM_ID : OZ의 업무 구분 (예> A10)
				REPORT_ID : OZ리포트 ID (예> A1702010010P)
				REPORT_ARGS : OZ 파라미터 - KEY1=VALUE1,KEY2=VALUE2 (예> PRINT_YMD_FR=20200101,PRINT_YMD_TO=20200105)
				EXPORT_FILE_PATH : 저장 될 파일 경로
				EXPORT_FILE_NAME : 저장 될 파일명(확장자 제외)
				EXPORT_FILE_FORMAT : 저장 될 파일의 확장자
		   * 선택컬럼
				EXPORT_FILE_PASSWORD : PDF의 경우 지정 될 비밀번호
				ERROR_MSG : 파일변환 시 발생한 Exception 정보
 * @param  {String} strCallback  - 콜백
 * @return {String} objDs 내용 + 에러메시지 컬럼(서버에서 추가)
 * @example 
 *  this.gfn_OzExportFile(this.ds_Out, "fn_Callback");
 */
pForm.gfn_OzExportFile = function(objDs, strCallback) 
{	
	var dsOzExportParamList = objDs;
	if( this.gfn_IsNull(dsOzExportParamList) ) {
		dsOzExportParamList = this.gfn_CreateTempDs(this, "dsOzExportFileTemp");		
	}

	var option = {
		svcId    : "OzExport"
	  , partCd   : ""
	  , svcUrl   : "OzExport.do"
	  ,	inDs     : "dsOzExportFileTemp="+dsOzExportParamList.id
	  ,	outDs    : dsOzExportParamList.id+"=dsOzExportFileTemp"
	  ,	callback : this.gfn_Nvl(strCallback, "_gfn_Report_Callback")
      , async    : false
	};

	this.gfn_Transaction(this, option);
	return dsOzExportParamList;
}


// 콜백함수
pForm._gfn_Report_Callback = function(svcId, errorCode, errorMsg)
{
	if( errorCode != 0 ) {
		switch(svcId) {	
			case "OzExport":
				this.alert("리포트 파일 변환 중 에러가 발생하였습니다.");
				break;
		}
	}
}