/**
 * 통합정보시스템 고도화 구축
 * @FileName    Validation.js
 * @Creator     UI공통
 * @CreateDate  2019.07.09
 * @Desction    Data 검증 관련 함수
 ************** 소스 수정 이력 ***********************************************
 * date                Modifier                Description
 *******************************************************************************
 * 2019.07.09          UI공통                 최초 생성
 *******************************************************************************
 */

/**
 * [검증 종류]
 * required  : 필수
 * length    : 길이 (Byte)
 * minlength : 최소길이 (Byte)
 * maxlength : 최대길이 (Byte)
 * min       : 최소값
 * max       : 최대값
 * equal     : 일치
 * greate    : 보다 큰
 * less      : 보다 작은
 * range     : 범위
 * digit     : 숫자여부
 * date      : 날짜여부
 * fromto    : 기간
 * dategreate: 현재날짜 보다 큰
 * dateless  : 현재날짜 보다 작은
 * termday   : 기간(일)
 * termmonth : 기간(월)
 * termyear  : 기간(년)
 * resno     : 주민등록번호
 * bzno      : 사업자등록번호
 * email     : 이메일
 * function  : 사용자함수
 * regex     : 정규식 (예: 123-12-123 형식 검증 → "/^\d{3}\-\d{2}\-\d{5}$/g")
 */

var pForm = nexacro.Form.prototype;

pForm.VALID_MSG = {
	empty : "'{0}'이 없습니다."
	, notexist : "'{0}'이 존재하지 않습니다."
	, norule : "[To 개발자] 검증방식을 확인하세요.\n(예: required, length, ...)"
	, required : "'{0}'은(는) 필수 입력 입니다."
	, length : "'{0}'은(는) '{1}'자리입니다."
	, minlength : "'{0}'의 길이는 '{1}'자리 이상 입니다."
	, maxlength : "'{0}'의 길이는 '{1}'자리 이하 입니다."
	, maxlengthb : "'{0}'의 길이는 '{1}'byte 이하 입니다."
	, min : "'{0}'은(는) '{1}'이상의 숫자만 입력 가능합니다."
	, max : "'{0}'은(는) '{1}'이하의 숫자만 입력 가능합니다."
	, equal : "'{0}'이(가) '{1}'와(과) 일치하지 않습니다."
	, greate : "'{0}'이(가) '{1}'보다 작습니다."
	, less : "'{0}'이(가) '{1}'보다 큽니다."
	, range : "'{0}'은(는) '{1}'사이의 값 입니다."
	, digit : "'{0}'은(는) 숫자만 입력 가능합니다."
	, date : "날짜 형식이 맞지 않습니다. '{0}'" // (년-월-일), (년-월), (월-일)
	, fromto : "'{0}'의 날짜가 '{1}'의 날짜보다 큽니다."
	, dategreate : "'{0}'이(가) 현재일보다 작을수 없습니다."
	, dateless : "'{0}'이(가) 현재일보다 클수 없습니다."
	, term : "조회기간은 최대 '{0}'입니다."
	, resno : "주민등록번호를 다시 확인하세요."
	, bzno : "사업자등록번호를 다시 확인하세요."
	, email : "이메일을 다시 확인하세요."
	, userfunc : "[To 개발자] '{0}' 함수가 정의되어 있지 않습니다."
	, regex : "'{0}'은(는) 부적합한 값입니다."
};

/**
 * @class   Data 정합성을 검증하고 여부를 반환 <br>
 *			※ Grid는 gfn_ValidateGrid 사용
 * @param  {Object} objDs - 검증 정보 Dataset 객체
 * @param  {Object | String} [option] - JSON 객체 또는 key 직접입력
 *							[JSON 객체]
 *							{String} [key]   - 검증 구분값
 *							{Number} [start] - 검증 범위 Start row
 *							{Number} [end]   - 검증 범위 End row
 * @return {Boolean} true (정상) / false (오류)
 */
pForm.gfn_Validate = function(objDs, option)
{
	//alert("objDs="+objDs);	
	// 검증 Dataset
	if (this.gfn_IsNull(objDs)) {
		var msg = this._gfn_Msg(this.VALID_MSG.notexist, "검증 Dataset");
		alert(msg);
		return false;
	}
	
	// option
	var key;   // 검증구분값
	var start; // 범위 Start row
	var end;   // 범위 End row
	
	if (option instanceof Object) { // JSON 객체
		key   = option.key;
		start = option.start;
		end   = option.end;
	} else { // key 직접입력
		key = option;
	}
	
	// key 검증구분값
	if (!this.gfn_IsNull(key)) {
		var filter = this._gfn_Msg("Key=='{0}' && UseYn=='Y'", key);
		objDs.filter(filter);
	}
	
	// Key 없는 경우 전체를 대상으로 검증 (※아래 주석처리함)
// 	if (objDs.rowcount == 0) {
// 		var msg1 = this._gfn_Msg("[검증 Key : {0}]", key);
// 		var msg2 = this._gfn_Msg(this.VALID_MSG.notexist, msg1);
// 		alert(msg2);
// 		return false;
// 	}
	
	// Null 확인
	if (this.gfn_IsNull(start)) start = 0;
	if (this.gfn_IsNull(end)) {
		end = objDs.rowcount;
	} else {
		end = end + 1;
	}
	
	// Parent 객체(Form)
	var oThis = objDs.parent;
	
	// 검증
	for (var i = start; i < end; i++) {
		var dataset = objDs.getColumn(i, "Dataset");
		var column  = objDs.getColumn(i, "Column");
		var title   = objDs.getColumn(i, "Title");
		var rule    = objDs.getColumn(i, "Rule");
		var useYn   = objDs.getColumn(i, "UseYn");
		
		// Bind Dataset
		if (this.gfn_IsNull(dataset)) {
			var msg = this._gfn_Msg(this.VALID_MSG.notexist, "Bind Dataset");
			alert(msg);
			return false;
		}
		
		// column
		if (this.gfn_IsNull(column)) {
			var msg = this._gfn_Msg(this.VALID_MSG.empty, "Column");
			alert(msg);
			return false;
		}
		
		// alert 표시명
		if (this.gfn_IsNull(title)) {
			var msg = this._gfn_Msg(this.VALID_MSG.empty, "alert 표시명");
			alert(msg);
			return false;
		}
		
		// 검증 Rule
		if (this.gfn_IsNull(rule)) {
			var msg = this._gfn_Msg(this.VALID_MSG.empty, "검증 Rule");
			alert(msg);
			return false;
		}
		
		// Dataset 객체
		var tmpDs = oThis[dataset];
		if (this.gfn_IsNull(tmpDs)) {
			var msg = this._gfn_Msg(this.VALID_MSG.notexist, "Dataset 객체");
			alert(msg);
			return false;
		}
		
		//alert(tmpDs.getColumn(i,column));
		
		// Column 확인
		if (this.gfn_IsNull(column)) {
			var msg = this._gfn_Msg(this.VALID_MSG.notexist, column + " Column");
			alert(msg);
			return false;
		}
		
		// Component 검증
		var option = {
			dataset : dataset
			, column : column
			, title : title
			, rule : rule
		};
		
		var ret = this.gfn_ValidateComp(oThis, option);
		if (ret == false) return false;
	}
	
	return true;
};

/**
 * @class  Component 검증 여부 반환 <br>
 * @param  {Object} pThis - Form 객체
 * @param  {Object} option - JSON 객체
 *					{String} dataset - Bind Dataset 명
 *					{String} column  - Bind Column
 *					{String} title   - alert 표시명
 *					{String} rule    - 검증규칙
 * @return {Boolean} ture (성공) / false (실패)
 */
pForm.gfn_ValidateComp = function(pThis, option)
{
	var dataset = option.dataset;
	var column  = option.column;
	var title   = option.title;
	var rule    = option.rule;
	
	if (this.gfn_IsNull(dataset) || this.gfn_IsNull(column) || this.gfn_IsNull(title) || this.gfn_IsNull(rule)) return false;
	
	// Dataset 객체
	var objDs = pThis[dataset];
	if (this.gfn_IsNull(objDs)) {
		var msg = this._gfn_Msg(this.VALID_MSG.notexist, "Bind Dataset");
		pThis.alert(msg);
		return false;
	}
	
	var arrTitle = title.split(";"); // Title
	var arrColumn = column.split(";");
	var arrRule = rule.split(";");
	
	// Column 확인
	for (var i = 0; i < arrColumn.length; i++) {
		if (this.gfn_IsNull(objDs.getColumnInfo(arrColumn[i]))) {
			var msg = this._gfn_Msg(this.VALID_MSG.notexist, arrColumn[i] + " Column");
			alert(msg);
			return false;
		}
	}
	
	var msg = "";
	var isValid = true;
	var objComp = this.gfn_GetBindComp(pThis, dataset, arrColumn[0]); // 대상 Component
	if (this.gfn_IsNull(objComp)) {
		this.alert("'" + dataset +"'의 '"+ arrColumn[0] + "'칼럼과 bind되어 있는 Component를 찾을 수 없습니다.");
		return false;
	}
	
	var value = objComp[0].value;
	var tmpComp = objComp[0];
	
	for (var i = 0; i < arrRule.length; i++) {
		var arrParam = arrRule[i].split("=");
		var type = this.gfn_ToLower(arrParam[0]);
		
		// 두 개의 칼럼값을 비교하는 경우 (equals, greate, less, fromto, termyear, termmonth, termday) 또는 필수 (required)
		var objCompare = null;
		var compareValue = null;
		if (arrColumn.length > 1
			&& (type == "equal" || type == "greate" || type == "less" || type == "fromto"
			|| type == "termyear" || type == "termmonth" || type == "termday" || type == "required")) {
			objCompare = this.gfn_GetBindComp(pThis, dataset, arrColumn[1]); // 비교 Component
			compareValue = objCompare[0].value;
		}
		
		var option = {
			tmpComp : tmpComp
			, objCompare : objCompare
			, arrTitle : arrTitle
			, arrColumn : arrColumn
			, arrParam : arrParam
			, value : value
			, compareValue : compareValue
		};
		
		var ret = this._gfn_IsValidate(pThis, option);
		isValid = ret.isValid;
		tmpComp = ret.tmpComp;
		
		if (!isValid) {
			msg = ret.msg;
			break; // for문 break
		}
	}
	
	if (isValid) {
		return isValid;
	} else {
		if (!this.gfn_IsNull(msg)) {
			pThis.alert(msg);
			tmpComp.setFocus();
		}
		return false;
	}
};

/**
 * @class  Grid Data 정합성을 검증하고 여부를 반환 <br>
 * @param  {Object} objGrid - 검증 Grid 객체
 * @param  {Object} objDs - 검증 정보 Dataset 객체
 * @param  {Object | String} [option] - JSON 객체 또는 key 직접입력
 *							[JSON 객체]
 *							{String} key     - 검증구분값
 *							{Number} [start] - 검증범위 Start row
 *							{Number} [end]   - 검증범위 End row
 *							{Boolean} [isUpdate] - Insert, Update 된 경우에만 Check
 * @return {Boolean} true (정상) / false (오류)
 */
pForm.gfn_ValidateGrid = function(objGrid, objDs, option)
{
	if (this.gfn_IsNull(objGrid)) return false;
	
	// 검증 Dataset
	if (this.gfn_IsNull(objDs)) {
		var msg = this._gfn_Msg(this.VALID_MSG.notexist, "검증 Dataset");
		alert(msg);
		return false;
	}
	
	// option
	var key;   // 검증구분값
	var start; // 범위 Start row
	var end;   // 범위 End row
	var isUpdate; // Insert, Update 된 경우에만 Check
	
	if (option instanceof Object) { // JSON 객체
		key   = option.key;
		start = option.start;
		end   = option.end;
		isUpdate = option.isUpdate;
	} else { // key 직접입력
		key = option;
	}
	
	// key 검증구분값
	if (!this.gfn_IsNull(key)) {
		var filter = this._gfn_Msg("Key=='{0}' && UseYn=='Y'", key);
		objDs.filter(filter);
	}
	
	// Key 없는 경우 전체를 대상으로 검증 (※아래 주석처리함)
// 	if (objDs.rowcount == 0) {
// 		var msg1 = this._gfn_Msg("[검증 Key : {0}]", key);
// 		var msg2 = this._gfn_Msg(this.VALID_MSG.notexist, msg1);
// 		alert(msg2);
// 		return false;
// 	}
	
	// Null 확인
	if (this.gfn_IsNull(start)) start = 0;
	if (this.gfn_IsNull(end)) {
		end = objDs.rowcount;
	} else {
		end = end + 1;
	}
	if (this.gfn_IsNull(isUpdate)) isUpdate = false;
	
	// Parent 객체(Form)
	var oThis = objDs.parent;
	
	var bindDs = objGrid.getBindDataset();
	var msg = "";
	var isValid = true;
	
	// 검증
	for (var i = 0; i < bindDs.rowcount; i++) {
		// Insert, Update 된 경우에만 Check, normal이면 skip
		if (isUpdate == true && !this.gfn_IsUpdateRow(bindDs, i)) continue;
		
		for (var j = start; j < end; j++) {
			var dataset = objDs.getColumn(j, "Dataset");
			var column  = objDs.getColumn(j, "Column");
			var title   = objDs.getColumn(j, "Title");
			var rule    = objDs.getColumn(j, "Rule");
			var useYn   = objDs.getColumn(j, "UseYn");
			
			// Bind Dataset
			if (this.gfn_IsNull(dataset)) {
				var msg = this._gfn_Msg(this.VALID_MSG.notexist, "Bind Dataset");
				alert(msg);
				return false;
			}
			
			// column
			if (this.gfn_IsNull(column)) {
				var msg = this._gfn_Msg(this.VALID_MSG.empty, "Column");
				alert(msg);
				return false;
			}
			
			// alert 표시명
			if (this.gfn_IsNull(title)) {
				var msg = this._gfn_Msg(this.VALID_MSG.empty, "alert 표시명");
				alert(msg);
				return false;
			}
			
			// 검증 Rule
			if (this.gfn_IsNull(rule)) {
				var msg = this._gfn_Msg(this.VALID_MSG.empty, "검증 Rule");
				alert(msg);
				return false;
			}
			
			// Column 확인
			if (this.gfn_IsNull(column)) {
				var msg = this._gfn_Msg(this.VALID_MSG.notexist, column + " Column");
				alert(msg);
				return false;
			}
			
			var arrTitle = title.split(";"); // Title
			var arrColumn = column.split(";");
			var arrRule = rule.split(";");
			
			// 다중 Column 확인
			for (var k = 0; k < arrColumn.length; k++) {
				if (this.gfn_IsNull(bindDs.getColumnInfo(arrColumn[k]))) {
					var msg = this._gfn_Msg(this.VALID_MSG.notexist, arrColumn[k] + " Column");
					alert(msg);
					return false;
				}
			}
			
			var value = bindDs.getColumn(i, arrColumn[0]);
			
			for (var r = 0; r < arrRule.length; r++) {
				var arrParam = arrRule[r].split("=");
				var type = this.gfn_ToLower(arrParam[0]);
				
				// 두 개의 칼럼값을 비교하는 경우 (equals, greate, less, fromto, termyear, termmonth, termday) 또는 필수 (required)
				var compareValue = null;
				if (arrColumn.length > 1
					&& (type == "equal" || type == "greate" || type == "less" || type == "fromto"
					|| type == "termyear" || type == "termmonth" || type == "termday" || type == "required")) {
					compareValue = bindDs.getColumn(i, arrColumn[1]);
					objGrid.col2 = objGrid.getBindCellIndex("body", arrColumn[1]);
				}
				
				// 사용자 함수에서 사용
				objGrid.col = objGrid.getBindCellIndex("body", arrColumn[0]);
				objGrid.row = i;
				
				var option = {
					tmpComp : objGrid
					, objCompare : [objGrid]
					, arrTitle : arrTitle
					, arrColumn : arrColumn
					, arrParam : arrParam
					, value : value
					, compareValue : compareValue
				};
				
				var ret = this._gfn_IsValidate(oThis, option);
				isValid = ret.isValid;
				
				if (isValid == false) {
					msg = ret.msg;
					break; // for문 break
				}
			}
			
			if (isValid == false) break; // for문 break
		}
		
		if (isValid == false) {
			if (!this.gfn_IsNull(msg)) {
				oThis.alert(msg);
				
				if (objGrid.col > -1) {
					bindDs.set_rowposition(i);
					objGrid.setFocus();
					objGrid.setCellPos(objGrid.col);
					objGrid.showEditor(true);
				}
			}
			return false;
		}
	}
	
	return true;
};

/**
 * @class  값 검증 여부 반환 <br>
 * @param  {Object} pThis - Form 객체
 * @param  {Object} option - JSON 객체
 *					{Array} arrTitle      - Title Array
 *					{Array} arrColumn     - Column Array
 *					{Array} arrParam      - Param Array
 *					{String} value        - 값
 *					{String} compareValue - 비교값
 * @return {Boolean} ture (성공) / false (실패)
 */
pForm._gfn_IsValidate = function(pThis, option)
{
	var isValid = true;
	var msg = "";
	
	var tmpComp = option.tmpComp;
	var objCompare = option.objCompare;
	var arrTitle = option.arrTitle;
	var arrColumn = option.arrColumn;
	var arrParam = option.arrParam;
	var value = option.value;
	var compareValue = option.compareValue;
	
	switch (arrParam[0]) {
		case "required" : // 필수
			msg = this._gfn_Msg(this.VALID_MSG.required, arrTitle[0]);
			if (this.gfn_IsNull(value)) {
				isValid = false;
			} else if (arrColumn.length > 1 && this.gfn_IsNull(compareValue)) {
				msg = this._gfn_Msg(this.VALID_MSG.required, arrTitle[1]);
				tmpComp = objCompare[0];
				isValid = false;
				
				if (tmpComp instanceof Grid) {
					tmpComp.col = tmpComp.col2;
				}
			} else { // checkbox이며 무조건 Check 해야 할때 : "required=true" 사용 (※ Grid는 사용불가)
				if (arrParam[1] == "true" && !tmpComp.isChecked()) {
					isValid = false;
				}
			}
			break;
			
		case "length" : // 길이
			if (!this.gfn_IsNull(value)) {
				if (this.gfn_Length(value) != parseInt(arrParam[1])) {
					msg = this._gfn_Msg(this.VALID_MSG.length, arrTitle[0], arrParam[1]);
					isValid = false;
				}
			}
			break;
			
		case "minlength" : // 최소길이
			if (!this.gfn_IsNull(value)) {
				if (this.gfn_Length(value) < parseInt(arrParam[1])) {
					msg = this._gfn_Msg(this.VALID_MSG.minlength, arrTitle[0], arrParam[1]);
					isValid = false;
				}
			}
			break;
			
		case "maxlength" : // 최대길이
			if (!this.gfn_IsNull(value)) {
				if (this.gfn_Length(value) > parseInt(arrParam[1])) {
					msg = this._gfn_Msg(this.VALID_MSG.maxlength, arrTitle[0], arrParam[1]);
					isValid = false;
				}
			}
			break;
			
		case "maxlengthb" : // 최대길이 byte 단위 체크
			if (!this.gfn_IsNull(value)) {
				if (this.gfn_Lengthb(value) > parseInt(arrParam[1])) {
					msg = this._gfn_Msg(this.VALID_MSG.maxlengthb, arrTitle[0], arrParam[1]);
					isValid = false;
				}
			}
			break;	
			
		case "min" : // 최소값
			if (!this.gfn_IsNull(value)) {
				if (parseFloat(value) < parseFloat(arrParam[1])) {
					msg = this._gfn_Msg(this.VALID_MSG.min, arrTitle[0], arrParam[1]);
					isValid = false;
				}
			}
			break;
			
		case "max" : // 최대값
			if (!this.gfn_IsNull(value)) {
				if (parseFloat(value) > parseFloat(arrParam[1])) {
					msg = this._gfn_Msg(this.VALID_MSG.max, arrTitle[0], arrParam[1]);
					isValid = false;
				}
			}
			break;
			
		case "equal" : // 비교
			if (!this.gfn_IsNull(value)) {
				if (value != compareValue) {
					msg = this._gfn_Msg(this.VALID_MSG.equal, arrTitle[0], arrTitle[1]);
					isValid = false;
				}
			}
			break;
			
		case "greate" : // 보다 큰
			if (!this.gfn_IsNull(value)) {
				if (value < compareValue) {
					msg = this._gfn_Msg(this.VALID_MSG.greate, arrTitle[0], arrTitle[1]);
					isValid = false;
				}
			}
			break;
			
		case "less" : // 보다 작은
			if (!this.gfn_IsNull(value)) {
				if (value > compareValue) {
					msg = this._gfn_Msg(this.VALID_MSG.less, arrTitle[0], arrTitle[1]);
					isValid = false;
				}
			}
			break;
			
		case "range" : // 범위
			if (!this.gfn_IsNull(value)) {
				var arrRange = arrParam[1].split(",");
				if (parseInt(value) < parseInt(arrRange[0]) || parseInt(value) > parseInt(arrRange[1])) {
					msg = this._gfn_Msg(this.VALID_MSG.range, arrTitle[0], (arrRange[0] + " ~ " + arrRange[1]));
					isValid = false;
				}
			}
			break;
			
		case "digit" : // 숫자
			if (!this.gfn_IsNull(value)) {
				if (!this.gfn_IsDigit(value)) {
					msg = this._gfn_Msg(this.VALID_MSG.digit, arrTitle[0]);
					isValid = false;
				}
			}
			break;
			
		case "date" : // 날짜 (년-월-일)
			if (!this.gfn_IsNull(value)) {
				if (!this.gfn_IsDate(value)) {
					msg = this._gfn_Msg(this.VALID_MSG.date, "(년-월-일)");
					isValid = false;
				}
			}
			break;
			
		case "dateym" : // 날짜 (년-월)
			if (!this.gfn_IsNull(value)) {
				if (!this.gfn_IsDate(value + "01")) {
					msg = this._gfn_Msg(this.VALID_MSG.date, "(년-월)");
					isValid = false;
				}
			}
			break;
			
		case "fromto" : // 기간
			if (!this.gfn_IsNull(value) && !this.gfn_IsNull(compareValue)) {
				if (value > compareValue) {
					msg = this._gfn_Msg(this.VALID_MSG.fromto, arrTitle[0], arrTitle[1]);
					isValid = false;
				}
			}
			break;
			
		case "dategreate" : // 현재날짜 보다 큰
			if (!this.gfn_IsNull(value)) {
				if (value < this.gfn_Today()) {
					msg = this._gfn_Msg(this.VALID_MSG.dategreate, arrTitle[0]);
					isValid = false;
				}
			}
			break;
			
		case "dateless" : // 현재날짜 보다 작은
			if (!this.gfn_IsNull(value)) {
				if (value > this.gfn_Today()) {
					msg = this._gfn_Msg(this.VALID_MSG.dateless, arrTitle[0]);
					isValid = false;
				}
			}
			break;
			
		case "termday" : // 기간(일)
			if (!this.gfn_IsNull(value) && !this.gfn_IsNull(compareValue)) {
				if (value > compareValue) {
					msg = this._gfn_Msg(this.VALID_MSG.fromto, arrTitle[0], arrTitle[1]);
					isValid = false;
					break;
				}
				
				var term = parseInt(arrParam[1]);
				if (compareValue >= this.gfn_AddDate(value, term)) {
					msg = this._gfn_Msg(this.VALID_MSG.term, term + "일");
					isValid = false;
				}
			}
			break;
			
		case "termmonth" : // 기간(월)
			if (!this.gfn_IsNull(value) && !this.gfn_IsNull(compareValue)) {
				if (value > compareValue) {
					msg = this._gfn_Msg(this.VALID_MSG.fromto, arrTitle[0], arrTitle[1]);
					isValid = false;
					break;
				}
				
				var term = parseInt(arrParam[1]);
				if (compareValue >= this.gfn_AddMonth(value, term)) {
					msg = this._gfn_Msg(this.VALID_MSG.term, term + "개월");
					isValid = false;
				}
			}
			break;
			
		case "termyear" : // 기간(년)
			if (!this.gfn_IsNull(value) && !this.gfn_IsNull(compareValue)) {
				if (value > compareValue) {
					msg = this._gfn_Msg(this.VALID_MSG.fromto, arrTitle[0], arrTitle[1]);
					isValid = false;
					break;
				}
				
				var term = parseInt(arrParam[1]);
				if (compareValue >= this.gfn_AddYear(value, term)) {
					msg = this._gfn_Msg(this.VALID_MSG.term, term + "년");
					isValid = false;
				}
			}
			break;
			
		case "resno" : // 주민등록번호
			if (!this.gfn_IsNull(value)) {
				if (!this.gfn_IsResno(value)) {
					msg = this._gfn_Msg(this.VALID_MSG.resno);
					isValid = false;
				}
			}
			break;
			
		case "bzno" : // 사업자등록번호
			if (!this.gfn_IsNull(value)) {
				if (!this.gfn_IsBizNo(value)) {
					msg = this._gfn_Msg(this.VALID_MSG.bzno);
					isValid = false;
				}
			}
			break;
			
		case "email" : // 이메일
			if (!this.gfn_IsNull(value)) {
				if (!this.gfn_IsEmail(value)) {
					msg = this._gfn_Msg(this.VALID_MSG.email);
					isValid = false;
				}
			}
			break;
			
		case "function" : // 사용자 함수
			var objFnc = pThis[arrParam[1]];
			
			if ((typeof objFnc) == "function") {
				// 두번째 인자값 부터 Argument로 전달됨
				isValid = objFnc.call(pThis, pThis, tmpComp, value);
				break;
			} else {
				msg = this._gfn_Msg(this.VALID_MSG.userfunc, arrParam[1]);
				isValid = false;
			}
			break;
			
		case "regex" : // 정규식
			var regExp = arrParam[1];
			
			if (!this.gfn_IsNull(value)) {
				var objRegExp = eval(regExp);
				var objResult = objRegExp.exec(value);
				
				if (this.gfn_IsNull(objResult)) {
					msg = this._gfn_Msg(this.VALID_MSG.regex, arrTitle[0]);
					isValid = false;
				}
			}
			break;
			
		default :
			msg = this._gfn_Msg(this.VALID_MSG.norule); // [To 개발자] 검증방식을 확인하세요.\n(예: required, length)
			isValid = false;
			break;
	}
	
	var ret = {
		isValid : isValid
		, msg : msg
		, tmpComp : tmpComp
	};
	return ret;
};

/**
 * @class  검증 정보 추가 <br>
 * @param  {Object} objDs - 검증 정보 Dataset 객체
 * @param  {Object} option - JSON 객체
 *					{String} key     - 검증 구분값 (구분 가능 문자로 표시)
 *					{String} dataset - Bind Dataset명 (※객체 아님)
 *					{String} column  - Bind Column
 *					{String} title   - alert 표시명
 *					{String} rule    - 검증규칙
 *					{String} [useYn] - 사용여부 (Y / N)
 *					{String} [row]   - 특정 위치인 경우
 * @return {Number} 성공 : 추가된 row 의 position
 *					실패 : -1
 */
pForm.gfn_AddValidation = function(objDs, option)
{
	if (this.gfn_IsNull(objDs)) return -1;
	if (this.gfn_IsNull(option)) return -1;
	
	var key     = option.key;
	var dataset = option.dataset;
	var column  = option.column;
	var title   = option.title;
	var rule    = option.rule;
	var useYn   = option.useYn;
	var insRow  = option.row;
	
	// Null 확인
	if (this.gfn_IsNull(dataset) || this.gfn_IsNull(column) || this.gfn_IsNull(title) || this.gfn_IsNull(rule)) return -1;
	
	// Parent 객체(Form)
	var oThis = objDs.parent;
	var row = -1;
	
	// 행 추가
	if (!this.gfn_IsNull(insRow) && insRow > -1) {
		row = objDs.insertRow(insRow);
	} else {
		row = objDs.addRow();
	}
	
	// 값 설정
	objDs.setColumn(row, "Key", key); // 검증 구분값 (구분 가능 문자로 표시)
	objDs.setColumn(row, "Dataset", dataset); // Bind Dataset명
	objDs.setColumn(row, "Column", column); // Bind Column
	objDs.setColumn(row, "Title", title); // alert 표시명
	objDs.setColumn(row, "Rule", rule); // 검증규칙
	objDs.setColumn(row, "UseYn", this.gfn_Nvl(useYn, "Y")); // 사용여부
	
	return row;
};

/**
 * @class  검증 Row의 "사용여부(Y, N) / 검증규칙 / alert 표시명"을 변경 <br>
 * @param  {Object} objDs - 검증 정보 Dataset 객체
 * @param  {Object} option - JSON 객체 (아래 항목값은 Array 가능)
 *					{Number | Array} row - row position
 *					{String | Array} [useYn] - 사용여부  Y / N (default : N)
 *					{String | Array} [rule] - 검증규칙
 *					{String | Array} [title] - alert 표시명
 * @return N/A
 */
pForm.gfn_SetValidation = function(objDs, option)
{
	if (this.gfn_IsNull(objDs)) return;
	if (this.gfn_IsNull(option)) return;
	
	var row = option.row;
	var useYn = option.useYn;
	var rule = option.rule;
	var title = option.title;
	
	if (row instanceof Array) { // 다건
		for (var i = 0; i < row.length; i++) {
			if (!this.gfn_IsNull(useYn)) {
				if (useYn instanceof Array) { 
					if (!this.gfn_IsNull(useYn[i])) objDs.setColumn(row[i], "UseYn", useYn[i]);
				} else {
					if (!this.gfn_IsNull(useYn)) objDs.setColumn(row[i], "UseYn", useYn);
				}
			}
			
			if (!this.gfn_IsNull(rule)) {
				if (!this.gfn_IsNull(rule[i])) objDs.setColumn(row[i], "Rule", rule[i]);
			}
			
			if (!this.gfn_IsNull(title)) {
				if (!this.gfn_IsNull(title[i])) objDs.setColumn(row[i], "Title", title[i]);
			}
		}
	} else { // 단건
		if (!this.gfn_IsNull(useYn)) objDs.setColumn(row, "UseYn", useYn);
		if (!this.gfn_IsNull(rule)) objDs.setColumn(row, "Rule", rule);
		if (!this.gfn_IsNull(title)) objDs.setColumn(row, "Title", title);
	}
};

/**
 * @class  검증 정보 Dataset 에서 해당 정보를 삭제 <br>
 * @param  {Object} objDs - 검증 정보 Dataset 객체
 * @param  {String | Number} [option] - 검증구분값 또는 삭제할 row (※ option이 없는 경우 전체 삭제)
 * @return N/A
 */
pForm.gfn_DeleteValidation = function(objDs, option)
{
	// 검증 Dataset
	if (this.gfn_IsNull(objDs)) {
		var msg = this._gfn_Msg(this.VALID_MSG.notexist, "검증 Dataset");
		alert(msg);
		return false;
	}
	
	// option이 없는 경우 전체 삭제
	if (this.gfn_IsNull(option)) {
		objDs.clearData();
	}
	
	if (typeof(option) == "string") { // 검증구분값
		var filter = this._gfn_Msg("Key=='{0}'", option);
		objDs.filter(filter);
		objDs.deleteAll();
		objDs.applyChange();
		objDs.filter("");
	} else { // 삭제할 row
		if (option instanceof Array) {
			objDs.deleteMultiRows(option);
		} else {
			objDs.deleteRow(option);
		}
	}
};

/**
 * @class  Dataset의 Column과 Bind되어 있는 Component 객체 반환 <br>
 * @param  {Object} pThis - Form 객체
 * @param  {String} dataset - Dataset 명
 * @param  {String} column - Column 명
 * @return {Array} Component 객체 배열
 */
pForm.gfn_GetBindComp = function(pThis, dataset, column)
{
	if (this.gfn_IsNull(pThis)) return null;
	if (this.gfn_IsNull(dataset)) return null;
	if (this.gfn_IsNull(column)) return null;
	
	/*
	 * [BindItem]
	 * columnid 	바인딩할 Dataset의 Column ID를 설정하는 속성
	 * compid 		바인딩할 컴포넌트 ID를 설정하는 속성
	 * datasetid 	바인딩할 Dataset ID를 설정하는 속성
	 * name 		BindItem 의 이름을 설정하는 속성 
	 * parent 		BindItem 의 부모 오브젝트를 갖는 읽기전용 속성 
	 * propid 		바인딩할 컴포넌트의 속성을 설정하는 속성
	 */
	
	var arrComp = new Array();
	
	for (var i = 0; i < pThis.binds.length; i++) {
		var objBindItem = pThis.binds[i];
		
		if (dataset == objBindItem.datasetid && column == objBindItem.columnid) {
			var objComp = eval("this." + objBindItem.compid);
			arrComp.push(objComp);
		}
	}
	
	return arrComp;
};

/**
 * @class  TabOrder 범위를 두어 일정범위에 대해 필수항목 검증 <br>
 *         startTabOrder, endTabOrder를 생략시 전체대상
 * @param  {Object} pThis - Form 객체
 * @param  {Number} [startTabOrder] - 시작 TabOrder
 * @param  {Number} [endTabOrder] - 종료 TabOrder
 * @param  {boolean} enableCompFlag - 비활성화 컴포넌트 대상 필수 체크할지 결정하는 Flag (default는 false)
 * @return {Object} null : 값을 가지고 있으면
 *					component : 값을 가지고 있지 않으면
 */
pForm.gfn_CheckRequired = function(pThis, startTabOrder, endTabOrder, enableCompFlag)
{
	if (this.gfn_IsNull(pThis)) return null;
	
	var comps = pThis.components;
	var eFlag = this.gfn_Nvl(enableCompFlag, false);
	
	for (var i = 0; i < comps.length; i++) {
		var comp = comps[i];
		
		if (!this.gfn_IsNull(startTabOrder) && comp.taborder < startTabOrder) continue;
		if (!this.gfn_IsNull(endTabOrder) && comp.taborder > endTabOrder) continue;		
		if ( !eFlag && comp.enable == false) continue;
		
		var type = this.gfn_GetType(comp, true);
		
		switch (type) {
			case "CALENDAR" :
			case "CHECKBOX" :
			case "COMBO" :
			case "EDIT" :
			case "FILEUPLOAD" :
			case "LISTBOX" :
			case "MASKEDIT" :
			case "RADIO" :
			case "SKETCH" :
			case "SPIN" :
			case "TEXTAREA" :
				if (this.gfn_IsNull(comp.value) && new String(comp.cssclass).indexOf("Required") > -1) {
					return comp;
				}
				break;
		}
	}
	
	return null;
};

//////////////////////////////////////////////////////////////////////////
pForm._gfn_Msg = pForm.gfn_ChangeMessage;

/**
 * @class  날짜 검증 <br>
 * @param  {String} value
 * @return {Boolean} 적합여부 (true / false)
 *         AS-IS : 0(적합), -1(부적합)
 * @example
 */
pForm.gfn_IsDate = function(value)
{
	if (this.gfn_IsNull(value)) return false;
  	
  	// 길이 확인
  	if (value.length != 8) return false;
  	
  	var month = nexacro.toNumber(value.substr(4, 2));
  	var day = nexacro.toNumber(value.substr(6, 2));
	var last = this.gfn_GetLastDay(value);
  	
  	if (month < 1 || month > 12) return false;
  	if (day < 1 || day > last) return false;
	
  	return true;
};

/**
 * @class  숫자 검증 <br>
 * @param  {String} value
 * @return {Boolean} 적합여부 (true / false)
 */
pForm.gfn_IsDigit = function(value)
{
	var ret = true;
	var cntPoint = 0;
	var c;
	
	if (this.gfn_IsNull(value)) return false;
	
	for (var i = 0; i < value.length; i++) {
		c = value.charAt(i);
		
		if (i == 0 && (c == "+" || c == "-"));
		else if (c >= "0" && c <= "9");
		else if (c == ".") {
			cntPoint++;
			
			if (cntPoint > 1) {
				ret = false;
				break;
			}
		} else {
			ret = false;
			break;
		}
	}
	
	return ret;
};

/**
 * @class  value의 number 여부 검증 <br>
 * @param  {*} value 확인할 value
 * @return {Boolean} number 여부
 * @example
 * this.gfn_IsNumber(1234); // true
 * this.gfn_IsNumber("1234"); // false
 */		
pForm.gfn_IsNumber = function(value)
{
	return typeof(value) === "number" && isFinite(value);
};

/**
 * @class  특수문자가 있는지 검증 <br>
 * @param  {String} value - 문자열
 * @return {Boolean} true (특수문자가 있는 경우) / false (특수문자가 없는 경우)
 *         AS-IS : "Y" : 특수문자가 있는 경우, "N" : 특수문자가 없는 경우
 * @example
 */
pForm.gfn_IsSpecialChar = function(value)
{
//	var sReturnValue = "Y";
	var ret = true;
	var iLen = "";
	var i, iBit;
	var sStandard = "~!@#$%^&*-+./=_`{|}\\?<>\'\"";
	
	iLen = this.gfn_Length(value);
	
	if (this.gfn_IsNull(value) == true) {
//		sReturnValue = "N";
		ret = false;
	}
	
	for (i = 0; i < iLen; i++) {
		iBit = this.gfn_SubStr(value, i, 1);
		if ( this.gfn_IndexOf(sStandard, iBit)  == -1 ) {
//			sReturnValue = "N";
			ret = false;
		} else {
//			sReturnValue = "Y";
			ret = true;
			break;
		}
	}
	
//	return sReturnValue;
	return ret;
};

/**
 * @class  사업자등록번호 검증 <br>
 * @param  {String} value
 * @return {Boolean} 적합여부 (true / false)
 *         AS-IS : 0(적합), -1(부적합)
 * @example
 */
pForm.gfn_IsBizNo = function(bizNo)
{
	if (this.gfn_Length(bizNo) != 10) {
		return false;
	}
	
	// bizID는 숫자만 10자리로 해서 문자열로 넘긴다.
	var checkID = new Array(9);
	checkID[0] = 1;
	checkID[1] = 3;
	checkID[2] = 7;
	checkID[3] = 1;
	checkID[4] = 3;
	checkID[5] = 7;
	checkID[6] = 1;
	checkID[7] = 3;
	checkID[8] = 5;
	
	var chkSum = 0, remander;
	for (var i = 0; i < this.gfn_Length(checkID); i++) {
		chkSum += checkID[i] * parseInt(this.gfn_SubStr(bizNo, i, 1));
	}
	
	if (chkSum == 0) {
		return false;
	}
	
	chkSum += Math.floor((checkID[8] * parseInt(this.gfn_SubStr(bizNo,8, 1))) / 10);
	var remain = chkSum % 10;
	if (remain != 0) {
		remain = 10 - remain;
	}
	
	if (remain == parseInt(this.gfn_SubStr(bizNo,9, 1))) {
		return true;
	}
	
	return false;
};

/**
 * @class  정규식을 이용하여 이메일 검증 <br>
 * @param  {String} email - 이메일
 * @return {Boolean} 적합여부 (true / false)
 * @example
 */
pForm.gfn_IsEmail = function(email)
{
	var ret = false;
	var expr = "[0-9a-zA-Z_-]+[0-9a-zA-Z.,_-]+@[0-9a-zA-Z_-]+(\\.[a-zA-Z]+)+";
	var regexp = new RegExp(expr, "ig");
	var exec = regexp.exec(email);
	
	if (this.gfn_IsNull(exec)) {
		ret = false;
	} else {
		if ((exec.index == 0) && (exec[0].length == email.length)) {
			ret = true;
		} else {
			ret = false;
		}
	}
	return ret;
};

/**
 * @class  주민등록번호 검증 <br>
 * @param  {String} resNo - 주민등록번호
 * @return {Boolean} 적합여부 (true / false)
 *         AS-IS : 0(적합), -1(부적합)
 * @example
 */
pForm.gfn_IsResno = function(resNo)
{
	if (this.gfn_IsNull(resNo)) return false;
	
	if(resNo.substr(6, 1) == '3' || resNo.substr(6, 1) == '4' || resNo.substr(6, 1) == '7' || resNo.substr(6, 1) == '8') {
        if(resNo.substr(0, 6) >= '201005') {
            return true;
        }
    }
	
	var birthYear = this.gfn_GetBirthYear(resNo);
	if (birthYear == "N") return false;
	
	birthYear += resNo.substr(0, 2);
	var birthMonth = resNo.substr(2, 2) - 1;
	var birthDate = resNo.substr(4, 2);
	var birth = new Date(birthYear, birthMonth, birthDate);

	if (birth.getYear() % 100 != resNo.substr(0, 2) ||
		birth.getMonth() != birthMonth ||
		birth.getDate() != birthDate) {
		return false;
	}

	// Check Sum 코드의 유효성 검사
	var buf = new Array(13);
	for (i = 0; i < 6; i++) {
		buf[i] = parseInt(resNo.charAt(i));
	}
	
	for (i = 6; i < 13; i++) {
		buf[i] = parseInt(resNo.charAt(i));
	}
	
	var multipliers = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
	for (i = 0, sum = 0; i < 12; i++) {
		sum += (buf[i] *= multipliers[i]);
	}

	//kjh 20221111 외국인등록번호 검증 추가.
	if(resNo.substr(6, 1) == '5' || resNo.substr(6, 1) == '6' || resNo.substr(6, 1) == '7' || resNo.substr(6, 1) == '8') {
        if ((13 - (sum % 11)) % 10 != buf[12]) {
			return false;
		} else {
			return true;
		}
    }	
	
	//내국인 검증
	if ((11 - (sum % 11)) % 10 != buf[12]) {
		return false;
	} else {
		return true;
	}
};

/**
 * @class  2018-02-08 전화식별번호 검증 (공통코드 : A10110 참조) <br>
 * @param  {String} prefixCode - 전화 식별번호
 * @return {Boolean} 체크여부
 * @example
 */
pForm.gfn_IsExchangeNumber = function(prefixCode)
{
	var lengVal = this.gfn_Lengthb(prefixCode);
	
	if (lengVal > 4 || lengVal == 0) {
		this.alert("국번자릿수는 4자리 이하입니다.");
		return false;
	}
	
	var arrFirst = new Array();
	arrFirst = ["010", "011", "0130", "016", "017",
				"018", "019", "02", "0303", "031",
				"032", "033", "041", "042", "043",
				"044", "0502", "0503", "0504", "0505",
				"0507", "0508", "051", "052", "053",
				"054", "055", "061", "062", "063",
				"064", "070", "080"];
	
	var ret = false;
	
	for (var i = 0; i < arrFirst.length; i++) {
		if (prefixCode == arrFirst[i]) {
			ret = true;
			break;
		}
	}
	
	if (ret == false) {
		this.alert("국번입력이 잘못되었습니다.\n확인 후 다시 입력해주세요");
		return false;
	}
	
	return true;
};

/**
 * @class  2018-02-08 일반번호 검증 <br>
 * @param  {String} code - 전화번호
 * @return {Boolean} 체크여부
 * @example
 */
pForm.gfn_IsPhoneNumber = function(code)
{
	var lengVal = this.gfn_Lengthb(code);
	var number  = nexacro.toNumber(code);
	
	if (lengVal > 4 || lengVal == 0) {
		this.alert("자릿수는 4자리 이하입니다.");
		return false;
	}
	
	if (number == 0) {
		this.alert("유효한 전화번호가 아닙니다.");
		return false;	
	}
	
	return true;
};

/**
 * @class  휴대폰/유선전화 오입력 번호 검증 <br>
 * 1) 2번째 국번 = "0000" or 3번째 번호 = "0000" <br>
 * 2) 2번째 국번 + 3번째 번호 = "11111111" ~ "99999999" (동일숫자 나열) <br>
 * @param  {String} exNumber - 국번
 * @param  {String} number - 전화번호 뒤의 4자리
 * @return N/A
 * @return {Boolean} true (정상) / false (예외 케이스에 해당)
 * @example
 */
pForm.gfn_IsPhoneNumberFormat = function(exNumber, number)
{
	if (this.gfn_Trim(exNumber) == "000" || this.gfn_Trim(exNumber) == "0000") return false;
	if (this.gfn_Trim(number) == "0000") return false;
	
	var phoneNum = this.gfn_Trim(exNumber) +  this.gfn_Trim(number);
	
	var firstNum = this.gfn_SubStr(phoneNum, 1, 1);
	for (var i = 0; i < this.gfn_Length(phoneNum); i++) {
		// 첫번째 숫자와 다른 숫자가 나올 경우 true
		if (firstNum != this.gfn_SubStr(phoneNum, i, 1)) return true;
	}
	
	// 끝까지 다른 숫자가 없을 경우 false
	return false;
};


/**
 * @class  입력범위의 최소값,  최대값을 체크하고 최소값보다 작은 경우, 최소값으로 셋팅
 *         최대값보다 큰 경우 최대값으로 셋팅함
 * @param  {Number} inpNum - 입력값
 * @param  {Number} minNum - 최소값
 * @param  {Number} maxNum - 최대값
 * @param  {Object} setObj - 객체
 * @return boolean 
 * @example 
 *  this.gfn_ChkMinMaxNum(11,1,10,this.spin_01);
 */
pForm.gfn_ChkMinMaxNum = function(inpNum, minNum, maxNum,setObj) 
{
	
	if(inpNum<minNum) {
		alert("현재 입력값::"+inpNum+" 최소 입력값은 "+ minNum+" 입니다");				
		setObj.set_value(minNum);			
	}
	
	if(inpNum>maxNum) {
		alert("현재 입력값::"+inpNum+" 최대 입력값은 "+ maxNum+" 입니다");				
		setObj.set_value(maxNum);		
	}
	return true;
};


/**
 * @class  입력년도의  최소값,  최대값을 체크하고 최소값보다 작은 경우, 최소값으로 셋팅하고
 *         최대값보다 큰 경우 최대값으로 셋팅함
 * @param  {Number} inpNum - 입력값
 * @param  {Number} minNum - 최소값
 * @param  {Number} maxNum - 최대값
 * @param  {Object} setObj - 객체
 * @return boolean 
 * @example 
 *  this.gfn_ChkYearMinMaxNum(1979,1980,9999,this.spin_01);
 */
pForm.gfn_ChkYearMinMaxNum = function(inpNum, minNum, maxNum,setObj) 
{

	if(String(inpNum).length > 4){
		setObj.set_value(maxNum);		
	}
	
	if( String(inpNum).length == 4){
		if(inpNum<minNum) {
			alert("현재 입력값 :: "+inpNum+"[ 최소 입력값은 "+ minNum+" 입니다");				
			setObj.set_value(minNum);			
		}
		
		if(inpNum>maxNum) {
			alert("현재 입력값 :: "+inpNum+"[ 최대 입력값은 "+ maxNum+" 입니다");				
			setObj.set_value(maxNum);		
		}
	} 
	return true;
};
