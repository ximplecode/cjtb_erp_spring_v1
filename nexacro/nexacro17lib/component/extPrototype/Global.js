/**
 * 통합정보시스템 고도화 구축
 * @FileName    Global.js
 * @Creator     UI공통
 * @CreateDate  2019.05.08
 * @Desction    Global 함수
 ************** 소스 수정 이력 ***********************************************
 * date                Modifier                Description
 *******************************************************************************
 * 2019.05.08          UI공통                 최초 생성
 *******************************************************************************
 */

var pForm = nexacro.Form.prototype;

/**
 * @class  Environment 객체 반환 <br>
 * @param  N/A
 * @return {Object} Environment 객체
 * @example
 *  this.gfn_GetEnv();
 */
pForm.gfn_GetEnv = function()
{
	var objEnv = nexacro.getEnvironment();
	return objEnv;
};

/**
 * @class  Application 객체 반환 <br>
 * @param  N/A
 * @return {Object} Application 객체
 * @example
 *  this.gfn_GetApp();
 */
pForm.gfn_GetApp = function()
{
	var objApp = nexacro.getApplication();
	return objApp;
};

/**
 * @class  LOGIN 사용자 정보를 반환 <br>
 * @param  {String} colId - 칼럼명
 * @return {String} 사용자 정보
 * @example
 *  this.gfn_GetUserInfo("G_USER_NO");
 */
pForm.gfn_GetUserInfo = function(colId)
{
	var objApp = this.gfn_GetApp();
	var row = objApp.gds_Value.findRow("ReqVariable", colId);
	
	if (row > -1) {
		return objApp.gds_Value.getColumn(row, "ReqVariableValue");
	} else {
		return "";
	}
};

/**
 * @class  Interface List 정보를 반환 <br>
 * @param  {String} codeItem - 칼럼명	
			
			코드 목록 및 설명
			
			HANBILL_RELAY 	: 한빌 가입자 신청/해지, 이메일발송
			KSNET_RELAY  	: 카드자동이체 청구파일 전송
			GASAPP_RELAY 	: 가스앱/캐시 연계
			GASAPP_UPDATE 	: 가스앱 업데이트
			NOPAY_RELAY 	: 보증보험 연계
			ADDRESS  		: 행안부 주소
			HOMEPAGE 		: 서울도시가스 홈페이지
			MIS 			: 서울도시가스 MIS
			WEBFAX 			: 웹팩스
			REPORT 			: OZ 연계

 * @return {String} Interface List
 * @example
 *  		this.gfn_GetInterfaceInfo("HANBILL_RELAY");
 */
pForm.gfn_GetInterfaceInfo = function(codeItem)
{
	var objApp = this.gfn_GetApp();
	var fRow   = objApp.gds_InterfaceList.findRow("CODE_ITEM", codeItem);
	return objApp.gds_InterfaceList.getColumn(fRow, "ITEM_VALUE")
};

/**
 * @class  LOGIN 사용자 정보를 설정 <br>
 * @param  {String} colId - 칼럼명
 * @param  {String} value - 칼럼값
 * @return {Boolean} 성공여부
 * @example
 *  this.gfn_SetUserInfo("G_USER_NO", "1111111");
 */
pForm.gfn_SetUserInfo = function(colId, value)
{
	var objApp = this.gfn_GetApp();
	var row = objApp.gds_Value.findRow("ReqVariable", colId);
	
	if (row > -1) {
		objApp.gds_Value.setColumn(row, "ReqVariableValue", value);
		return true;
	} else {
		return false;
	}
};

/**
 * @class  LOGIN USER NO 반환 <br>
 * @param  N/A
 * @return {String} USER NO
 * @example
 */
this.gfn_GetUserNo = function()
{
	return this.gfn_GetUserInfo("G_USER_NO");
};

/**
 * @class  LOGIN USER NO 설정 <br>
 * @param  {String} userNo - USER NO
 * @return {Boolean} 성공여부
 * @example
 */
this.gfn_SetUserNo = function(userNo)
{
	return this.gfn_SetUserInfo("G_USER_NO", userNo);
};

/**
 * @class  LOGIN USER NAME 반환 <br>
 * @param  N/A
 * @return {String} USER NAME
 * @example
 */
this.gfn_GetUserName = function()
{
	return this.gfn_GetUserInfo("G_NAME");
};

/**
 * @class  서버구분 반환 <br>
 * @param  N/A
 * @return {String} 서버구분 - LOCAL / DEV / TEST / PROD
 * @example
 *  this.gfn_GetServerType();
 */
pForm.gfn_GetServerType = function()
{
	var objApp = this.gfn_GetApp();
	return objApp.gv_ServerType;
};

/**
 * @class 서버 URL 반환 <br>
 * @param N/A
 * @return {String} URL
 */
pForm.gfn_GetServerUrl = function()
{
	var urlPath = "";
    if (system.navigatorname == "nexacro") {
	    var objEnv = nexacro.getEnvironment();
		urlPath = objEnv.services["svcUrl"].url;
	} else {
		urlPath = window.location.protocol + "//" + window.location.host + "//";
	}
	
	return urlPath;
};

/**
 * @class  Session의 상태 설정 <br>
 * @param  {Boolen} session value
 * @return 
 */ 
pForm.gfn_InitSession = function(bSuccess)
{
	nexacro.getApplication().Session = bSuccess;
};

/**
* @class  MiPlatform AllWindows 대체함수 <br>
* @param  {Ojbect} frameset
* @return {Array} array frameset
* @example
*/
pForm.gfn_AllWindows = function(frmNm) {

	var arrFrames = [];
	if (nexacro.getApplication().popupframes.length > 0) {
		for (var i = 0; i < nexacro.getApplication().popupframes.length; i++) {
			arrFrames.push(nexacro.getApplication().popupframes[i]);
		}
	}
	
    arrFrames = arrFrames.concat(this.gfn_AllChildWindow(nexacro.getApplication().mainframe.frame.all, true));
    if (this.gfn_IsNull(frmNm)) return arrFrames;

	for (var i = 0; i < arrFrames.length; i++) {
		if (frmNm == arrFrames[i].name) {
			return arrFrames[i];
		}
	}
	return arrFrames;
};

/**
* @class  MiPlatform allChildWindow 대체함수 <br>
* @param  {Ojbect} frameset
* @param  {Boolen} allChildWindow
* @return {Array} array frameset
* @example
*
*/
pForm.gfn_AllChildWindow = function(frames, bFrameSet)
{
	var arrFrames = [];
	for (var j = 0; j < frames.length; j++) {
		arrFrames.push(frames[j]);
		if (frames[j].frames) {
		    if (bFrameSet == false && frames[j].toString().toUpperCase() == "[OBJECT FRAMESET]") continue;
			arrFrames = arrFrames.concat(this.gfn_AllChildWindow(frames[j].frames));
		}
	}
	return arrFrames;
};

/**
 * @class  Component 경로 반환 <br>
 * @param  {Object} objComp - Component 객체
 * @return {String} Component 경로
 * @example
 */
pForm.gfn_GetCompPath = function(objComp)
{
	if (objComp == this) return "";
	
	var path = objComp.name;
	var objParent = objComp.parent;
	
	while (objParent != this) {
		path = objParent.name + "." + path;
		objParent = objParent.parent;
	}
	
	return path;
};

/**
 * @class  현재 Focus를 가진 Component를 반환 <br>
 * @param  {Boolean} bNoCompositeFlag - Composite Component의 내부까지 검색할지 여부
 * @return {Object} Component 객체
 * @example
 */
pForm.gfn_GetCurrentComponent = function(bNoCompositeFlag)
{
	// bNoCompositeFlag 가 true일때에 대하여 추가해야 함
	if (this.gfn_IsNull(bNoCompositeFlag)) bNoCompositeFlag = false;
	
	var objComp = this.getFocus();
	if (bNoCompositeFlag == false) {
		var objParent = objComp.parent;
		if (this.gfn_IsComposite(objParent)) return objParent;
	}
	
	return objComp;
};

/**
 * @class  특정 Component의 이전 taborder를 갖는 Component를 반환 <br>
 * @param  {Boolean} compositeFlag - Composite Component의 내부까지 검색할지 여부
 * @return {Object} 지정한 Component의 이전 taborder를 갖는 Component
 * @example
 */
pForm.gfn_GetPrevComponent = function(compositeFlag)
{
	var objComp = this.getFocus();
	var bNoCompositeFlag = this.gfn_Nvl(compositeFlag, false);
//	var objComponent = this.getPrevtComponent(objComp, bNoCompositeFlag);
	var objComponent = objComp.parent.getPrevtComponent(objComp, bNoCompositeFlag);
	return objComponent;
};

/**
 * @class  특정 Component의 다음 번 taborder를 갖는 Component를 반환 <br>
 * @param  {Boolean} compositeFlag - Composite Component의 내부까지 검색할지 여부
 * @return {Object} 지정한 Component의 다음 taborder를 갖는 Component
 * @example
 */
pForm.gfn_GetNextComponent = function(compositeFlag)
{
	var objComp = this.getFocus();
	var bNoCompositeFlag = this.gfn_Nvl(compositeFlag, false);
//	var objComponent = this.getNextComponent(objComp, bNoCompositeFlag);
	var objComponent = objComp.parent.getNextComponent(objComp, bNoCompositeFlag);
	return objComponent;
};

/**
 * @class  하위콤포넌트 존재 여부 반환 <br>
 * @param  {Object} objComp - Component 객체
 * @return {Boolean} true (존재) / false (미존재)
 * @example
 */
pForm.gfn_IsComposite = function(objComp)
{
	if (objComp.components) {
		return true; // 하위콤포넌트 존재
	} else {
		return false; // 하위콤포넌트 존재하지 않음.
	}
};

//////////////////////////////////////////////////////////////////////////

/**
 * @class  Load가 완료된 Frame명 배열에 추가 (※개발자 사용 불가) <br>
 * @param  {String} frameNm - Frame명
 * @return N/A
 * @example
 *  this._gfn_AddLoadFrame(obj.name);
 */
pForm._gfn_AddLoadFrame = function(frameNm)
{
	var objApp = this.gfn_GetApp();
	objApp._gv_LoadForm.push(frameNm);
};

/**
 * @class  Load가 완료된 Frame명 배열 반환 (※개발자 사용 불가) <br>
 * @param  N/A
 * @return {Array} Frame명 배열
 * @example
 *  this._gfn_GetLoadFrame();
 */
pForm._gfn_GetLoadFrame = function()
{
	var objApp = this.gfn_GetApp();
	return objApp._gv_LoadForm;
};
