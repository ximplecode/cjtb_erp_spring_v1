/**
 * 통합정보시스템 고도화 구축
 * @FileName    Mask.js
 * @Creator     UI공통
 * @CreateDate  2019.07.17
 * @Desction    Mask 관련 함수
 ************** 소스 수정 이력 ***********************************************
 * date                Modifier                Description
 *******************************************************************************
 * 2019.07.17          UI공통               최초 생성
 *******************************************************************************
 */

var pForm = nexacro.Form.prototype;

/**
 * @class  문자형식(Mask Format)을 반환 <br>
 * @param  {String} type - mask 종류
 * @return {String} mask format
 * @example
 */
pForm.gfn_GetMask = function(type)
{
    if (this.gfn_IsNull(type)) return "";
	type = this.gfn_ToLower(type);
	
	var mask = "";
	switch (type) {
		case "zip" :           mask = "#####";            break; // 우편번호 (12345)
		case "time" :          mask = "##:##:##";         break; // 시분초 (hh:mm:ss)
		case "timehm" :        mask = "##:##";            break; // 시분 (hh:mm)
		case "date" :          mask = "####-##-##";       break; // 년월일 (yyyy-MM-dd)
		case "dateym" :        mask = "####-##";          break; // 년월 (yyyy-MM)
		case "datemd" :        mask = "##-##";            break; // 월일 (MM-dd)
		case "datetime" :      mask = "####-##-## ##:##:##"; break; // 년월일시분초 (yyyy-MM-dd hh:mm:ss)
		case "ymd" :           mask = "yyyy-MM-dd";       break; // Calendar 년월일 (yyyy-MM-dd)
		case "ym" :            mask = "yyyy-MM";          break; // Calendar 년월 (yyyy-MM)
		case "weekdaylong" :   mask = "yyyy-MM-dd dddd";  break; // Calendar 년월일 요일(long) (yyyy-MM-dd dddd, 월요일 ~ 일요일)
		case "weekdayshort" :  mask = "yyyy-MM-dd ddd";   break; // Calendar 년월일 요일(short) (yyyy-MM-dd ddd, 월 ~ 일)
		case "resno" :         mask = "######-#{######}"; break; // 주민등록번호 (123456-1******)		
		case "orgresno" :      mask = "######-#######";   break; // 주민등록번호 (123456-1234567)
		case "bzno" :          mask = "###-##-#####";     break; // 사업자등록번호 (123-12-12345)
		case "mtrnum" :        mask = "#####-####";       break; // 계량기번호 (12345-1234)
		case "usecontnum" :    mask = "#####-#####";      break; // 사용계약번호 (12345-12345)
		case "accountnum" :    mask = "################"; break; // 계좌번호 (1234567890123456)
		case "socaccountnum" : mask = "##########{######}"; ; break; // 계좌번호 (1234567890******)
		case "cardnum" :       mask = "####-####-####-####"; break; // 카드번호 (1234-1234-1234-1234)
		case "numberdot" :     mask = "#,###.##";         break; // 소수점 : null, blank 인 경우 blank 처리
		case "numberdotzero" : mask = "#,##0.00";         break; // 소수점 : null, blank, 0 인 경우 0
		case "number" :        mask = "#,###";            break; // 0인 경우 blank 처리
		case "numberzero" :    mask = "#,##0";            break; // 0인 경우 0으로 표시
		case "summarypercent" :    mask = "##.##%";            break; // 0인 경우 0으로 표시
	}
	
    return mask;
};

/**
 * @class  문자형식(Mask Format)을 해당 Component (또는 Grid Cell) 에 설정 <br>
 * @param  {Object | Array} objComp - "Component / Grid 객체" 또는 "Component 객체 배열"
 * @param  {String | Array} type - "mask 종류" 또는 "mask 종류 배열"
 * @param  {Boolean} [isEdittype] - objComp가 Grid 객체이면서, Cell edittype을 설정하는 경우 사용
 * @return N/A
 * @example
 */
pForm.gfn_SetMask = function(objComp, type, isEdittype)
{
	if (this.gfn_IsNull(objComp)) return;
	if (this.gfn_IsNull(type)) return;
	
	if (objComp instanceof Grid) {
		if (type instanceof Array) { // Mask Array
			for (var i = 0; i < type.length; i++) {
				this._gfn_SetMaskCell(objComp, type[i], isEdittype);
			}
		} else {
			this._gfn_SetMaskCell(objComp, type, isEdittype);
		}
	} else {
		if ((objComp instanceof Array) && (type instanceof Array)) { // Component Array & Mask Array
			if (objComp.length != type.length) return; // Component와 Mask의 개수가 다르면
			
			for (var i = 0; i < objComp.length; i++) {
				this._gfn_SetMaskComp(objComp[i], type[i]);
			}
		} else if ((objComp instanceof Array) && (typeof(type) == "string")) { // Component Array & 1 Mask
			for (var i = 0; i < objComp.length; i++) {
				this._gfn_SetMaskComp(objComp[i], type);
			}
		} else { // 1 Component & 1 Mask
			this._gfn_SetMaskComp(objComp, type);
		}
	}
};

/**
 * @class  문자형식(Mask Format)을 해당 Component 에 설정 <br>
 * @param  {Object} objComp - Component 객체
 * @param  {String} type - mask 종류
 * @return N/A
 * @example
 */
pForm._gfn_SetMaskComp = function(objComp, type)
{
	if (this.gfn_IsNull(objComp)) return;
	if (this.gfn_IsNull(type)) return;
	
	var mask = this.gfn_GetMask(type);
	var compType = this.gfn_GetType(objComp);
	type = this.gfn_ToLower(type);
	
	if(type == "socaccountnum" && compType == "MaskEdit") {
		mask = this.gfn_GetAccountMask(objComp);
	}
	
	
	
	switch (compType) {
		case "MaskEdit" :
			var arrCss = objComp.orgcssclass.split(",");
			objComp.set_format(mask);
			
			if (type.indexOf("number") > -1) {
				objComp.set_type("number");
				
				if (this.gfn_IsNull(objComp.orgcssclass)) {
					objComp.set_cssclass("");
				} else {
					var arrTmp = new Array();
					for (var i = 0; i < arrCss.length; i++) {
						if (arrCss[i] != "Left") {
							arrTmp.push(arrCss[i]);
						}
					}
					
					objComp.set_cssclass(arrTmp.join(","));
				}
			} else {
				objComp.set_type("string");
				
				if (this.gfn_IsNull(objComp.orgcssclass)) {
					objComp.set_cssclass("Left");
				} else {
					var arrTmp = new Array();
					for (var i = 0; i < arrCss.length; i++) {
						if (arrCss[i] != "Left") {
							arrTmp.push(arrCss[i]);
						}
					}
					arrTmp.push("Left");
					objComp.set_cssclass(arrTmp.join(","));
				}
			}
			break;
			
		case "Calendar" :
			objComp.set_dateformat(mask);
			
			if (type.indexOf("weekday") == -1) { // yyyy-MM-dd dddd, yyyy-MM-dd ddd 제외
				objComp.set_editformat(mask);
			}
			
			if (type == "ym") { // 월달력
				this.gfn_SetCalendar(objComp);
			}
			break;
			
		case "" :
			break;
	}
};

/**
 * @class  문자형식(Mask Format)을 해당 Grid Cell 에 설정 <br>
 * @param  {Object} obj - Grid 객체
 * @param  {String} type - mask 종류
 * @param  {Boolean} [isEdittype] - Cell edittype을 설정하는 경우 사용
 * @return N/A
 * @example
 */
pForm._gfn_SetMaskCell = function(obj, type, isEdittype)
{
	if (this.gfn_IsNull(obj)) return;
	if (this.gfn_IsNull(type)) return;
	
	var arrType = type.split(":");
	if (arrType.length == 2) {
		var cell = arrType[0];
		var mask = this.gfn_GetMask(arrType[1]);
		type = arrType[1];
		
		if (type == "ymd" || type == "ym" || type == "weekdaylong" || type == "weekdayshort") {
			obj.setCellProperty("body", cell, "calendardateformat", mask);
			obj.setCellProperty("body", cell, "calendareditformat", mask);
			obj.setCellProperty("body", cell, "calendardisplaynulltype", "none");
			
			if (isEdittype == true) {
				obj.setCellProperty("body", cell, "displaytype", "calendarcontrol");
				obj.setCellProperty("body", cell, "edittype", "date");
				obj.setCellProperty("body", cell, "calendarusetrailingday", "true");
			} else {
				obj.setCellProperty("body", cell, "displaytype", "date");
				obj.setCellProperty("body", cell, "edittype", "none");
			}
		} else {
			//obj.setCellProperty("body", cell, "displaytype", "mask");
			
			var colNm = obj.getCellProperty("body", cell, "text").split(":")[1];
			if( isEdittype == true ) {
				obj.setCellProperty("body",  cell, "displaytype", 'maskeditcontrol');
			}
			else {
				if (type == "summarypercent" ) {
				} else {
					obj.setCellProperty("body",  cell, "displaytype", 'expr:dataset.parent.gfn_IsNull('+colNm+')?"none":"mask"');
				}
			}			
			
			if (type == "accountnum" && isEdittype != true) {
				obj.setCellProperty("body", cell, "maskeditformat", "expr:dataset.parent._gfn_SetAccountNumFormat(comp, currow, this.col)");
			} else {
				if (type == "summarypercent" ) {
				} else {
					obj.setCellProperty("body", cell, "maskeditformat", mask);
				}
			}
			if (type == "summarypercent" ) {
				if(parseInt(obj.getCellText(-2,cell)) < 10 ) {
					 mask = "#.##%";
				}
			}
			if (type == "summarypercent" ) {
					obj.setCellProperty("summary", cell,  "maskeditformat" ,  mask);
					obj.setCellProperty("summary", cell,  "maskeditmaskchar" ,  "0");
					obj.setCellProperty("summary", cell, "maskedittype", "string");
			}
			
			if (type.indexOf("summary") == -1) {
				obj.setCellProperty("body", cell, "maskedittype", "string");
			}
			
			if (type.indexOf("number") > -1) {
				obj.setCellProperty("body", cell, "maskedittype", "number");
			}
			
			if (isEdittype == true) {
				obj.setCellProperty("body", cell, "edittype", "mask");
				
				if (type == "dateYm") {
					obj.setCellProperty("body", cell, "expandimage", "theme://images/cal_btn_monthly.png");
					obj.setCellProperty("body", cell, "expandshow", "show");
				}
			} else {
				obj.setCellProperty("body", cell, "edittype", "none");
				
				if (type == "dateYm") {
					obj.setCellProperty("body", cell, "expandshow", "hide");
				}
			}
		}
	} else {
		return;
	}
};

/**
 * @class  문자 포맷 형식 변환 (해당 문자는 포맷에서 # 사용) <br>
 * @param  {String} value - 문자열
 * @return {String} 변환할 mask format
 * @example
 *  this.gfn_GetMaskFormat("20190909", "####-##-##"); // 2019-09-09
 *  this.gfn_GetMaskFormat("20190909", this.gfn_GetMask("date")); // 2019-09-09
 */
pForm.gfn_GetMaskFormat = function(value, mask)
{
    var ret = "";
	var unit;

	if (this.gfn_IsNull(value)) return null;

	var strVal  = String(value);
	var strMask = this.gfn_Nvl(mask, "");

	for (var i = 0; i < strMask.length; i++) {
		unit = strMask.substr(i, 1);
		
		if (unit == "#") {
		    ret += strVal.substr(0, 1);
		    strVal = strVal.substr(1);
		    if(strVal.length == 0) break;
		} else {
		    ret += unit;
		}
    }
	
    return ret;
};

/**
 * @class  계좌번호 형식 mask 반환 (뒤에서 6자리 *처리) <br>
 * @param  {String} objGrd - Grid 객체
 * @param  {Number} currow - row
 * @param  {Number} currcol - col
 * @return {String} 반환값 - 계좌번호 형식 mask
 * @example
 */
pForm._gfn_SetAccountNumFormat = function(objGrd, currow, currcol)
{
	var value = objGrd.getCellValue(currow, currcol);
	
	if (this.gfn_IsNull(value)) {
		return "";
	} else {
		var tmp = new Array();
		var cnt = 1;
		for (var i = value.length - 1; i > -1; i--, cnt++) {
			if (cnt < 7) {
				if (cnt == 1) {
					tmp.push("#}");
				} else if (cnt == 6) {
					tmp.push("{#");
				} else {
					tmp.push("#")
				}
			} else {
				tmp.push("#");
			}
		}
		
		tmp.reverse();
		return tmp.join("");
	}
};


/**
 * @class  계좌번호 형식 mask 반환 (뒤에서 6자리 *처리) <br>
 * @param  {String} comp - 마스크 컴포넌트 객체
 * @param  {Number} strValue - edit value
 * @return {String} 반환값 - 계좌번호 형식 mask
 * @example
 */
pForm.gfn_GetAccountMask = function(comp)
{	
	var value = comp.value;

	if (this.gfn_IsNull(value)) {
		return "";
	} else {
		var tmp = new Array();
		var cnt = 1;
		for (var i = value.length - 1; i > -1; i--, cnt++) {
			if (cnt < 7) {
				if (cnt == 1) {
					tmp.push("#}");
				} else if (cnt == 6) {
					tmp.push("{#");
				} else {
					tmp.push("#")
				}
			} else {
				tmp.push("#");
			}
		}
		
		tmp.reverse();
		return tmp.join("");
	}
};



/**
 * @class  그리드 maskedit 초기화
 * @param  objGrd - Grid 객체
 * @param  {Number} col - row
 * @param  {String} colNm - 칼럼명
 * @return 
 * @example this.gfn_SetEmptyMask(this.grd_01, 0, "RESNO");
 */
pForm.gfn_SetEmptyMask = function(grdObj, col, colNm)
{
	grdObj.setCellProperty("body",  col, "displaytype", 'expr:'+colNm+'==""||'+colNm+'==undefined?"none":"mask"');
}