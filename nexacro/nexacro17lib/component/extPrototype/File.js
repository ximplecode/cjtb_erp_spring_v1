/**
 * 통합정보시스템 고도화 구축
 * @FileName    File.js
 * @Creator     UI공통
 * @CreateDate  2019.05.02
 * @Desction    File Upload / Download 관련 함수
 ************** 소스 수정 이력 ***********************************************
 * date                Modifier                Description
 *******************************************************************************
 * 2019.05.02          UI공통                 최초 생성
 *******************************************************************************
 */

var pForm = nexacro.Form.prototype;

/**
 * @class  파일을 서버에 업로드 <br>
 * @param  {Object} objFileUpload - 파일업로드 객체
 * @param  {Object} option - JSON 객체
 *					{Object} fileInfo   - 업로드 결과를 받을 Dataset 객체
 *					{String} [callback] - callback 함수
 *					{String} [url]      - 파일 서비스 호출 경로
 *					{String} [path]     - 파일 폴더 위치
 * @return {Boolean} true / false - 실제 파일의 업로드 성공여부와는 관계없이 메소드의 수행여부를 반환
 * @example
 */
pForm.gfn_UploadFile = function(objFileUpload, option)
{
	var fileInfo = option.fileInfo;
	var callback = option.callback;
	var url = option.url;
	var path = option.path;
	
	if (this.gfn_IsNull(objFileUpload)) return;
	if (this.gfn_IsNull(url)) url = "/sample/file/nexaUploadFiles.do";
	
	var serverUrl = this.gfn_GetServerUrl();
	var fileUploadUrl = serverUrl + url;
	
	if (!this.gfn_IsNull(fileInfo)) objFileUpload.user_FileInfo = fileInfo; // 업로드 결과를 받을 Dataset 객체
	if (!this.gfn_IsNull(callback)) objFileUpload.user_Callback = callback; // callback 함수
	
	// 파일 업로드 시킬 폴더 위치 지정
	if (!this.gfn_IsNull(path)) {
		fileUploadUrl = fileUploadUrl + "?filePath=" + path;
	}
	
	objFileUpload.setEventHandler("onsuccess", this._ful_Upload_onsuccess, this);
	objFileUpload.setEventHandler("onerror", this._ful_Upload_onerror, this);
	
	objFileUpload.set_uploadurl(fileUploadUrl);
	var succ = objFileUpload.upload();
	return succ;
};

/**
 * @class  FileUpload onsuccess event <br>
 * @param  {Object} obj - nexacro.FileUpload
 * @param  {Evnet} e - nexacro.FileUploadEventInfo
 * @return N/A
 */
pForm._ful_Upload_onsuccess = function(obj, e)
{	
	if (!this.gfn_IsNull(obj.user_FileInfo)) {
		// 업로드 결과를 Dataset에 복사
		if (e.datasets.length > 0) {
			obj.user_FileInfo.assign(e.datasets[0]);
		}
	}
	
	var callback = obj.user_Callback;
	if (!this.gfn_IsNull(callback)) {
		var objFnc = this.lookup(callback);
		
		// 함수 있는 경우
		if (!this.gfn_IsNull(objFnc)) {
			objFnc.call(this, obj.name, 0, "");
		}
	}
};

/**
 * @class  FileUpload onerror event <br>
 * @param  {Object} obj - nexacro.FileUpload
 * @param  {Evnet} e - nexacro.FileUploadErrorEventInfo
 * @return N/A
 */
pForm._ful_Upload_onerror = function(obj, e)
{
	var callback = obj.user_Callback;
	if (!this.gfn_IsNull(callback)) {
		var objFnc = this.lookup(callback);
		
		// 함수 있는 경우
		if (!this.gfn_IsNull(objFnc)) {
			objFnc.call(this, obj.name, -1, e.errormsg);
		}
	}
};

/**
 * @class 서버에서 파일을 다운로드 <br>
 * @param  {Object} objFileDownload - 파일다운로드 컴포넌트
 * @param  {Object} option - JSON 객체
 *					{String} orgFileName    - 원본 파일명
 *					{String} serverFileName - 서버 저장 파일명
 *					{String} [callback]     - callback 함수
 *					{String} [url]          - 파일 서비스 호출 경로
 *					{String} [path]         - 파일 폴더 위치
 * @return {Boolean} true / false - 실제 파일의 다운로드 성공여부와는 관계없이 메소드의 수행여부를 반환
 * @example
 */
pForm.gfn_DownloadFile = function(objFileDownload, option)
{
	var orgFileName = option.orgFileName;
	var serverFileName = option.serverFileName;
	var callback = option.callback;
	var url = option.url;
	var path = option.path;
	
	if (this.gfn_IsNull(objFileDownload)) return;
	if (this.gfn_IsNull(orgFileName)) return;
	if (this.gfn_IsNull(serverFileName)) return;
	if (this.gfn_IsNull(url)) url = "/sample/file/downloadFiles.do";
	
	var serverUrl = this.gfn_GetServerUrl();
	var fileDownloadUrl = serverUrl + url;
	
	var param = "filePath={0}&baseName={1}&reName={2}&downYn={3}";
	param = this.gfn_ChangeMessage(param, orgFileName, serverFileName, "Y");
	param = encodeURI(param);
	
	if (!this.gfn_IsNull(callback)) objFileDownload.user_Callback = callback; // callback 함수
	
	objFileDownload.setEventHandler("onsuccess", this._fdl_Download_onsuccess, this);
	objFileDownload.setEventHandler("onerror", this._fdl_Download_onerror, this);
	
	var succ = objFileDownload.download(fileDownloadUrl + "?" + param);
	return succ;
};

/**
 * @class  FileDownload onsuccess event <br>
 * @param  {Object} obj - nexacro.FileUpload
 * @param  {Evnet} e - nexacro.FileDownloadEventInfo
 * @return N/A
 */
pForm._fdl_Download_onsuccess = function(obj, e)
{
	var callback = obj.user_Callback;
	if (!this.gfn_IsNull(callback)) {
		var objFnc = this.lookup(callback);
		
		// 함수 있는 경우
		if (!this.gfn_IsNull(objFnc)) {
			objFnc.call(this, obj.name, 0, e.url);
		}
	}
};

/**
 * @class  FileDownload onerror event <br>
 * @param  {Object} obj - nexacro.FileUpload
 * @param  {Evnet} e - nexacro.FileDownloadErrorEventInfo
 * @return N/A
 */
pForm._fdl_Download_onerror = function(obj, e)
{
	var callback = obj.user_Callback;
	if (!this.gfn_IsNull(callback)) {
		var objFnc = this.lookup(callback);
		
		// 함수 있는 경우
		if (!this.gfn_IsNull(objFnc)) {
			objFnc.call(this, obj.name, -1, e.errormsg);
		}
	}
};

//////////////////////////////////////////////////////////////////////////

/**
 * @class  파일 full 경로에서 file명만 반환 <br>
 * @param  {String} fullPath - 파일 full 경로
 * @return {String} 파일명
 * @example
 */
pForm.gfn_GetFileName = function(fullPath)
{
	var length = this.gfn_Length(fullPath);
	
	for (var i = length - 1; i >= 0; i--) {
		var c = fullPath.charAt(i);
		if (c == "\\" || c == "/" ) break;
	}
	
	return this.gfn_SubStr(fullPath, this.gfn_Decode(i, 0, 0, i + 1), (length - i));
};

/**
 * @class  파일 다운로드 URL를 반환 <br>
 * @param  N/A
 * @return {String} 파일 다운로드 URL
 * @example
 */
pForm.gfn_GetFileUrl = function()
{
	var url = "";
	var objApp = this.gfn_GetApp();
	
	if (objApp.gv_Islocal) {
		url = "http://localhost:9095/";
	} else {
		if (this.gfn_GetServerType() == "DEV" || this.gfn_GetServerType() == "TEST") { // 개발 / 테스트
			url = "http://10.1.9.30";
		} else { // 운영계
			url = "http://mis.seoulgas.co.kr";
		}
	}
	
	return url;
};
