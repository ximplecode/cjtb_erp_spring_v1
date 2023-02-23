/**
 * 통합정보시스템 고도화 구축
 * @FileName    Message.js
 * @Creator     UI공통
 * @CreateDate  2019.05.02
 * @Desction    메시지 관련 함수
 ************** 소스 수정 이력 ***********************************************
 * date                Modifier                Description
 *******************************************************************************
 * 2019.05.02          UI공통                 최초 생성
 *******************************************************************************
 */

var pForm = nexacro.Form.prototype;

/**
 * @class  Client 메시지 Text 읽기 <br>
 * @param  {String} msgId - Message Code
 * @param  {String} token1 - 치환될 문자 (%AAA%)
 * @param  {String} value1 - token1에 치환할 문자
				︙
 * @param  {String} token10 - 치환될 문자
 * @param  {String} value10 - token10에 치환할 문자
 * @return {String} 변환된 메시지
 * @example
 */
pForm.gfn_GetMessage = function(msgId, 
						token1, value1, token2, value2,
						token3, value3, token4, value4,
						token5, value5, token6, value6,
						token7, value7, token8, value8,
						token9, value9, token10, value10)
{
	var arrFstr = new Array();
	var arrTstr = new Array();
	
	arrFstr[0] = token1;
	arrFstr[1] = token2;
	arrFstr[2] = token3;
	arrFstr[3] = token4;
	arrFstr[4] = token5;
	arrFstr[5] = token6;
	arrFstr[6] = token7;
	arrFstr[7] = token8;
	arrFstr[8] = token9;
	arrFstr[9] = token10;

	arrTstr[0] = value1;
	arrTstr[1] = value2;
	arrTstr[2] = value3;
	arrTstr[3] = value4;
	arrTstr[4] = value5;
	arrTstr[5] = value6;
	arrTstr[6] = value7;
	arrTstr[7] = value8;
	arrTstr[8] = value9;
	arrTstr[9] = value10;
	
	var objApp = this.gfn_GetApp();
	var row = objApp.gds_ClientMsg.findRow("MESSAGE_CODE", msgId);
	if (row < 0) return;
	
	var msg = objApp.gds_ClientMsg.getColumn(row, "MESSAGE");
	msg = this.gfn_Replace(msg, "\\n", "\n");
	
	for (var i = 0; i <= 9; i++) {
		if (this.gfn_Lengthb(arrFstr[i]) > 0 && this.gfn_Lengthb(arrTstr[i]) > 0) {
			msg = this.gfn_Replace(msg, arrFstr[i], arrTstr[i]);
		}
	}
	
	return msg;
};

/**
 * @class  Text를 치환하여 반환 <br>
 * @param  {String} txt - 치환({0}, {1} ~ {n})할 Text
 * @param  {Array | arguments} arrText - 치환할 인자값 array 또는 인자1(, 인자2, 인자n,...)
 * @return {String} 치환된 Text
 * @example
 * var txt = "[{0}] 검색가능 일자는 {1} ~ {2} 입니다.";
 * var ret = this.gfn_ChangeMessage(txt, ["알림", "2019-05-01", "2019-05-31"]); // 배열
 * var ret = this.gfn_ChangeMessage(txt, "알림", "2019-05-01", "2019-05-31"); // 인자2, 인자3, ...
 * trace(ret); // [알림] 검색가능 일자는 2019-05-01 ~ 2019-05-31 입니다.
 */
pForm.gfn_ChangeMessage = function(txt)
{
	if (this.gfn_IsNull(txt)) return txt;
	if (arguments.length == 1) return txt;
	
	// 두번째 인자가 배열로 넘어온 경우(세번째 부터는 제외됨)
	if (arguments[1] instanceof Array) {
		var arrText = arguments[1];
		return txt.replace(/\{(\d+)\}/g, function() {
											return arrText[arguments[1]];
										}
		);
	} else {
		var arrText = new Array();
		for (var i = 1; i < arguments.length; i++) {
			arrText.push(arguments[i]);
		}
		
		return txt.replace(/\{(\d+)\}/g, function(m, i) {
											return arrText[i];
										});
	}
};
