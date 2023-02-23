/**
 * 통합정보시스템 고도화 구축
 * @FileName    Util.js
 * @Creator     UI공통
 * @CreateDate  2019.05.02
 * @Desction    기능성 함수
 ************** 소스 수정 이력 ***********************************************
 * date                Modifier                Description
 *******************************************************************************
 * 2019.05.02          UI공통                 최초 생성
 *******************************************************************************
 */

var pForm = nexacro.Form.prototype;
pForm._arrPath = null;

/**
 * @class  값이 존재하는지 여부 체크 <br>
 * @param  {String} value - 문자열
 * @return {Boolean} true (존재) / false (미존재)
 * @example
 *  var ret = this.gfn_IsNull("aaa");
 */
pForm.gfn_IsNull = function(value)
{
	if (new String(value).valueOf() == "undefined") return true;
	if (value === " ") return true;
    if (value == null) return true;
    
    var chkStr = new String(value);
	chkStr = nexacro.trim(chkStr);
	
    if (chkStr == null) return true;
    if (chkStr.toString().length == 0) return true;
    return false;
};

/**
 * @class  value가 null 일 경우 대체할 객체 반환 <br>
 * @param  {String | Object} value - 문자열 또는 객체
 * @param  {String | Object} replace -  대체할 객체.
 * @return {null | Object} null 또는 객체
 * @example
 *  var ret = this.gfn_Nvl(null, "ABC"); // ABC
 */
pForm.gfn_Nvl = function(value, replace)
{
    return this.gfn_IsNull(value) ? replace : value;
};

/**
 * @class  입력된 값 또는 수식을 검사해 해당한 값을 반환 <br>
 * @param  {Object} arguments - 인자값1, 인자값2, ... 인자값n
 * @return {Object} 수식 결과값
 * @example
 *  this.gfn_Decode(5 != 1, true, "true", false, "false");
 *  this.gfn_Decode("2", "1", "One", "2", "Two", "Default");
 */ 
pForm.gfn_Decode = function()
{
    var condVal = (arguments[0] == undefined) ? null : arguments[0];

    for (var i = 1; i < arguments.length; i += 2) {
		if (i + 1 == arguments.length) {
			return arguments[i];
		}
		
		if (condVal == arguments[i]) {
			return arguments[i + 1];
		}
	}
	
	return arguments[i - 2];
};

/**
 * @class  조건문의 true / false를 검사해 그 결과를 반환 <br>
 * @param  {Object} cond - 조건문
 * @param  {String} rtnTrue - 조건문이 true 일때의 결과값
 * @param  {String} rtnFalse - 조건문이 false 일때의 결과값
 * @return {Boolean} true / false
 * @example
 *  this.gfn_Iif(10 != 1, true, false);
 */ 
pForm.gfn_Iif = function(cond, rtnTrue, rtnFalse)
{
	return cond ? rtnTrue : rtnFalse;
};

/**
 * @class  입력값 형태에 따라서 길이 또는 범위를 구하는 함수 <br>
 * @param  {Object} value - 객체, 문자열, 배열
 * @return {Number} 객체종류에 따른 길이 또는 범위
 * @example
 */
pForm.gfn_Length = function(value)
{
	if (this.gfn_IsNull(value)) return 0;

	if (value.components) {
		return value.components.length; // object인 경우 count of components
	} else {
		if (this.gfn_GetType(value) == "Dataset") return value.rowcount;
		return this.gfn_Nvl(value.length, 0); // Array, String, Variant인 경우
	}
};

/**
 * @class  문자열 길이(byte) 반환 <br>
 * @param  {String} value - 문자열
 * @return {Number} 길이(byte)
 * @example
 */ 
pForm.gfn_Lengthb = function(value)
{
	var sType;
	var nCount;

	if (this.gfn_IsNull(value)) return 0;
	
	if (value.components) {
		return value.components.length; // object인 경우
	}
	
	if (value.constructor == Array) {
		return value.length; // Array인 경우
	}
	
	var chkStr = value.toString(); // Variant, String인 경우
	var cnt = 0;
	
	for (var i = 0; i < chkStr.length; i++) {
		if (chkStr.charCodeAt(i) > 127) {
			//cnt += 2;
			cnt += 3;
		} else {
			cnt += 1;
		}
	}
	
	return cnt;
};

/**
 * @class  문자 전체 길이(byte)를 계산 <br>
 * @param  {String} value - 문자열
 *                 - 문자, 숫자, 특수문자 : 1 로 Count
 *                 - 그외 한글/한자 : 3 으로 count 되어 합산
 * @return {Number} Type에 따라 구해진 길이
 * @example
 * 
 */
pForm.gfn_GetLengthByte = function(value)
{
	var lengthByte = 0;

	if (this.gfn_IsNull(value)) {
		return -1;
	}
	
	for (var i = 0; i < value.length; i++) {
		if (value.charCodeAt(i) > 127) {
			//lengthByte += 2;
			lengthByte += 3;
		} else {
			lengthByte += 1;
		}
	}
	
	return lengthByte;
};

/**
 * @class  문자 전체 길이(byte)를 계산 : Euc-kr은 한글을 2byte로 체크함. (SMS 전송 보여주기용) <br>
 * @param  {String} value - 문자열
 *                 - 문자, 숫자, 특수문자 : 1 로 Count
 *                 - 그외 한글/한자 : 2 으로 count 되어 합산
 * @return {Number} Type에 따라 구해진 길이
 * @example
 * 
 */
pForm.gfn_GetLengthByteEucKr = function(value)
{
	var lengthByte = 0;

	if (this.gfn_IsNull(value)) {
		return -1;
	}
	
	for (var i = 0; i < value.length; i++) {
		if (value.charCodeAt(i) > 127) {
			lengthByte += 2;			
		} else {
			lengthByte += 1;
		}
	}
	
	return lengthByte;
};

/**
 * @class  Component Type 반환 <br>
 * @param  {Object} obj - 변환할 object
 * @param  {Boolean} isUpper - toUpperCase 적용여부 (true)
 * @return {String} 객체 type
 * @example
 */
pForm.gfn_GetType = function(obj, isUpper)
{
	if (!this.gfn_IsNull(obj)) {
		var ret = obj.toString().replace("object", "").replace("[", "").replace("]", "").trim()
		if (isUpper == true) {
			ret = this.gfn_ToUpper(ret);
		}
		return ret;
	}
};

/**
 * @class  Component focus 여부 <br>
 * @param  {Object} objComp - Component 객체
 * @return {Boolean} focus 여부
 * @example
 */ 
pForm.gfn_IsAboveSel = function(objComp)
{
	if (this.gfn_IsNull(objComp)) return null;
	
	if (objComp._status && objComp._status == "focus") {
		return true;
	} else {
		return false;
	}
};

/**
 * @class  Share / Global / AppGroup / Form 에 변수 존재여부 확인 <br>
 * @param  {Object} pThis - Form 객체
 * @param  {String} varName - 변수명
 * @param  {Boolean} searchAll - parent (opener) 체크 여부
 * @return {Boolean} 존재여부
 * @example
 */
pForm.gfn_IsExistVar = function(pThis, varName, searchAll)
{
	if (this.gfn_IsNull(pThis)) pThis = this;
	var varObj = (varName in pThis);
	if (varObj == true) return true;
	
	if (searchAll == true) {
		if (pThis.parent && this.gfn_IsExistVar(pThis.parent, varName, searchAll)) {
			return true;
		} else if (pThis.opener && this.gfn_IsExistVar(pThis.opener, varName, searchAll)) {
			return true;
		}
	}
	return false;
};

/**
 * @class  Share / Global / AppGroup / Form 에 변수 존재여부 확인 <br>
 * @param  {String} varName - 변수명
 * @param  {String} target - 확인 영역
 * @return {Boolean} 존재여부
 * @example
 */
pForm.gfn_IsExistVariable = function(varName, target)
{
	var exist = false;
	
	target = this.gfn_Nvl(target, "");
	target = this.gfn_ToLower(target);
	
	switch(target) {
		case "share":
		case "global":
		case "aglobal":
			exist = (varName in nexacro.getApplication()) || false;	
			break;
		case "local":
			exist = (varName in this) || (varName in this.parent);	
			break;
		default:
			exist = this.gfn_IsExistVar(this, varName, true);
			break;
	}
	
	if (exist == false) return exist;
	
	return true;
};

/**
 * @class  function 존재여부 체크 <br>
 * @param  {Object} obj - 체크할 폼 객체(Form, division...)
 * @param  {String} funcId - fuction id
 * @param  {Boolean} searchAll - parent (opener) 체크 여부
 * @return {Boolean} true / false - function 존재여부
 * @example
 */
pForm.gfn_IsExistFunc = function(obj, funcId, searchAll)
{
	if (this.gfn_IsNull(searchAll)) searchAll = false;
	var funcobj;

	if (this.gfn_IsNull(obj)) obj = this;

	if (searchAll) {
		funcobj = this.gfn_GetObject(obj, funcId);
	} else {
		funcobj = obj[funcId];
	}
	
	if (this.gfn_IsNull(funcobj))	return false;
	
	if (typeof(funcobj) == "function") {
		return true;
	} else {
		return false;
	}
};

/**
 * @class  특정 Object 또는 Object 이름이 Form 내에 존재하는지 여부 <br>
 * @param  {Object} objComp - Component 객체
 * @return {Boolean} 존재여부
 * @example
 */
pForm.gfn_IsValidObject = function(objComp)
{
	if (typeof objComp == "string") {
		if (this.gfn_GetObject(objComp)) return true;
    } else if (objComp instanceof Object) {
		return (objComp.toString().indexOf("object") > -1);
    }
    return false;
};

/**
 * @class  Tab의 Index를 이용해 TabPage 반환 <br>
 * @param  {Object} objTab - Tab 객체
 * @param  {Number} idx - 검색할 Tab index
 * @return {object} TabPage Form 객체
 * @example
 */
pForm.gfn_GetItem = function(objTab, idx)
{
	var objTabPg = objTab.tabpages[idx];
	if (this.gfn_IsNull(objTabPg)) return null;
	return objTabPg.form;
};

/**
 * @class  입력된 문자열을 이용해 현재위치에서 해당 Object를 검색하여 반환 <br>
 * @param  {*} arguments
 * @return {Object}
 * @example
 */
pForm.gfn_GetObject = function()
{
	var length = arguments.length;
	var objParent, objStr, objRet;
	
	if (length == 0) return null;

	if (length == 1) {
		objParent = this;
		objStr = arguments[0];
	} else {
		objParent = arguments[0]; // obj
		objStr = arguments[1]; // stringid
	}
	
	if (objParent.name == objStr) return this;
	
	var objFind =  objParent.lookup(objStr); // Object
	if (objFind == null || objFind == undefined) {
		try {
			objFind = eval("objParent." + objStr);
		} catch(e) {}
		
		if (!objFind) {
			if (this.opener) {
				objFind = this.opener.lookup(objStr); // Object
				if (!objFind) {
					try {
						objFind = eval("this.opener." + objStr);
					} catch(e) {}
				}
			}
		}
	}
	
	if (this.gfn_IsNull(objFind)) {
		trace("[gfn_GetObject] " + objStr +"을(를) 찾지 못했습니다.");
	}
	return objFind;
};

/**
 * @class  지번주소와 도로명주소간 시도명이 불일치하므로 상호변경해줌 <br>
 *         시/도명의 순서는 반드시 일치 <br>
 * @param  {String} cityNm - 시도명
 * @return {String} 시도명
 * @example
 *  this.gfn_ChangeCityNm("강원"); // 강원도
 */
pForm.gfn_ChangeCityNm = function(cityNm)
{
	var rtnValue = "";

	// 우편테이블의 시/도 명
	var jibunCity = [
		"강원"
		,"경기"
		,"경남"
		,"경북"
		,"광주"
		,"대구"
		,"대전"
		,"부산"
		,"서울"
		,"세종시"
		,"울산"
		,"인천"
		,"전남"
		,"전북"
		,"제주"
		,"충남"
		,"충북"
	];
	
	// 새주소테이블의 시/도 명
	var roadNmCity = [
		"강원도"
		,"경기도"
		,"경상남도"
		,"경상북도"
		,"광주광역시"
		,"대구광역시"
		,"대전광역시"
		,"부산광역시"
		,"서울특별시"
		,"세종특별자치시"
		,"울산광역시"
		,"인천광역시"
		,"전라남도"
		,"전라북도"
		,"제주특별자치도"
		,"충청남도"
		,"충청북도"
	];
	
	for (i = 0; i < jibunCity.length; i++) {
		if (jibunCity[i] == cityNm) {
			rtnValue = roadNmCity[i];
			break;
		}
	}
	
	if (this.gfn_IsNull(rtnValue)) {
		for (i = 0; i < roadNmCity.length; i++) {
			if (roadNmCity[i] == cityNm) {
				rtnValue = jibunCity[i];
				break;
			}
		}
	}
	
	return rtnValue;
};

/**
 * @class  Form 에 편집중인 값이 있는경우 강제로 반영 <br>
 * @param  {Object} objComp - Component 객체
 * @return N/A
 * @example
 */
pForm.gfn_ApplyData = function(objComp)
{
	if (this.gfn_IsNull(objComp)) {
		objComp = this.getFocus();
	} else {
		try {
			objComp.updateToDataset();
		} catch(e) {}
	}
};

/**
 * @class  동적으로 지정한 Component를 생성 (MiPlatform create 대체함수) <br>
 * @param  {Object} objParent - 생성될 객체가 올라갈 부모 명칭
 * @param  {String} compId - 생성할 객체명  Ex) Div, Edit, Dataset ...
 * @param  {String} compName - 생성할 객체의 ID   Ex) "ChildFrame00"
 * @param  {String} strAttrib - Compnent 생성할때 기본값
 * @return {Object} 생성된 Compnent 객체
 * @example
 */
pForm.gfn_Create = function(objParent, compId, compName, strAttrib)
{
	if (typeof(objParent) == "string") {
		strAttrib = compName;
		compName = compId;
		compId = objParent;
		objParent = this;
    }
	
    if (this.gfn_IsNull(objParent)) objParent = this;
    var comp = this.gfn_GetAllCommponents(objParent, compName);
	if (comp) return comp;
	
	var newObj;
	
	if (this.isValidObject(compName)) this.removeChild(compName);	
    if (compId.toLowerCase() == "dataset") {
		newObj = new Dataset;
		objParent.addChild(compName, newObj);
    } else {
		newObj = eval("new " +  compId +"('" + compName + "')");
		newObj.init(compName, "absolute", 0, 0);
		objParent.addChild(compName, newObj);
		newObj.show();
    }
	
    if (this.gfn_IsNull(strAttrib)) return newObj;
	
    var attributes = this.gfn_MakeArgumentArray(strAttrib);
    this.gfn_SetProperty(newObj, attributes);
	
    return newObj;
};

/**
 * @class  MiPlatform CreateDataObject 대체함수 <br>
 * @param  N/A
 * @return N/A
 * @example
 */
pForm.gfn_CreateDataObject = function()
{
	return new this.DataObject;
};

/**
 * @class  스크립트에서 동적으로 생성한 후 추가한 컴포넌트를 삭제 <br>
 * @param  {Object} objContainer - Parent 객체
 * @param  {String} compId - 객체명
 * @return N/A
 * @example
 */
pForm.gfn_Destroy = function(objContainer, compId)
{
	var objParent = this;
	
	if (arguments.length == 2) {
		objParent = objContainer;
	} else {
		compId = objContainer;
	}
	
	var objDelete = objParent.removeChild(compId);
	if (this.gfn_IsNull(objDelete)) return;
	if (objDelete.destroy) objDelete.destroy();
};

/**
 * @class  CreateObject로 생성한 COM객체를 강제로 파괴 <br>
 * @param  {Object} objContainer - Parent 객체
 * @param  {Object} obj - 객체
 * @return N/A
 * @example
 */ 
pForm.gfn_DestroyObject = function(objContainer, obj)
{
	var objParent = this;
	var compId = "";

	if (arguments.length == 2) {
		objParent = objContainer;
		compId = obj.name;
	} else {
		compId = objContainer.name;
	}
	
	this.gfn_Destroy(objParent, compId);
};

/**
 * @class  지정된 ProgID를 가지는 COM객체를 생성하는 Method <br>
 * @param  {String} progId
 * @return {Object} Plugin 객체
 * @example
 */ 
pForm.gfn_CreateObject = function(progId)
{
	var objPlugin = new Plugin();
	objPlugin.set_classid(progId);
	return objPlugin;
};

/**
 * @class  검색 패턴과 옵션을 지정하여 Regular Expression 객체를 반환
 *         Reference Guide(도움말)의 "Script > RegExp"와 "Script > Regular Expression" 참조
 * @param  {String} pattern - 정규식 패턴
 * @param  {String} option - g, i, m의 조합 문자열 (g: global, i: ignore case, m: multiline)
 * @return {Object} 생성된 Regular Expression 객체
 * @example
 *
 */
pForm.gfn_CreateRegExp = function(pattern, option)
{
	return new RegExp(pattern, option);
};

/**
 * @class  문자열을 숫자로 변환하여 반환 <br>
 * @param  {String} value - 문자열 숫자
 * @return {Number} 변환값
 * @example
 *  this.gfn_Currency("123.4"); // 123.4
 */
pForm.gfn_Currency = function(value)
{
	if (!this.gfn_IsNull(value)) {
		return nexacro.toNumber(value, 0);
	}
};

/**
 * @class  입력된 실수를 문자열 표현법으로 변환 <br>
 * @param  {Number} number - 문자열로 출력할 실수
 * @param  {Number} detail - 출력시 소숫점 이하의 자릿수(Default : 0)
 * @return {String} 문자열로 바뀐 실수
 *					출력되는 정수부분에 3자리마다 "," 가 삽입
 * @example
 */
pForm.gfn_NumFormat = function(number, detail)
{
	if (this.gfn_IsNull(detail)) detail = 0;
	return nexacro.toNumber(number).toFixed(detail).toLocaleString();
};

/**
 * @class  숫자형 문자열의 ","를 삭제하고 숫자로 반환 <br>
 * @param  {String} value - "," 포함된 숫자형 문자열
 * @return {Number} 숫자
 * @example
 */
pForm.gfn_RemoveComma = function(value)
{
	if (this.gfn_IsNull(value)) return value;
	
	value = nexacro.replaceAll(value, ",", "");
	return nexacro.toNumber(value);
};

/**
 * @class  숫자형 문자열에 ","를 넣어 반환 <br>
 * @param  {String} inpVal - 숫자형 문자열
 * @return {String} "," 포함 문자열
 * @example
 */
 pForm.gfn_SetComma = function(inpVal)
{

	if (typeof(inpVal) != "string") {
		inpVal = String(inpVal);
	}

	var arrTmp = inpVal.split(".");
	var val1 = arrTmp[0];
	var dot = arrTmp[1];

	rtnVal = String(val1);
    var minus = rtnVal.substring(0, 1);
    rtnVal = rtnVal.replace(/[^\d]+/g, '');
	
	if (arrTmp.length > 1) {
		rtnVal = rtnVal.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,') + "." + dot;
	} else {
		rtnVal = rtnVal.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,') 
	}
	//음수일 경우
    if(minus == "-") rtnVal = "-"+rtnVal;
	return rtnVal; 
}
 
 /*
 //음수일 경우 오류발생하여 2019-11-13 일 변경 : 손봉주 부장
pForm.gfn_SetComma = function(value)
{
	if (this.gfn_IsNull(value)) return "";
	
	if (typeof(value) != "string") {
		value = value.toString();
	}
	
	var arrTmp = value.split(".");
	var tmp = arrTmp[0];
	var dot = arrTmp[1];
	
	var cnt = 0;
	var arrValue = tmp.split("");
	for (var i = arrValue.length - 1; i > -1; i--) {
		cnt++;
		if (cnt == 3 && i != 0) {
			arrValue.splice(i, 0, ",");
			cnt = 0;
		}
	}
	
	if (arrTmp.length > 1) {
		return arrValue.join("") + "." + dot;
	} else {
		return arrValue.join("");
	}
};
*/

/**
 * @class  property를 설정 <br>
 * @param  {Component} obj - 컴포넌트
 * @param  {String} attributes - property 문자열
 * @param  {Boolean} addUserProperty - 없을경우 user property로 생성할지 여부
 * @return N/A
 * @example
 */
pForm.gfn_SetProperty = function(obj, attributes, addUserProperty)
{
	var orgProperty;
	for (var property in attributes) {
		orgProperty = property;
		property = this.gfn_ToLower(property);
		
		if (obj.hasOwnProperty(property) || obj["set_" + property]) {
			try{
				obj["set_" + property].call(obj, attributes[orgProperty]);
			} catch(e) {
				trace("[gfn_SetProperty] Property 설정 오류 : " + orgProperty);
			}
		} else { // 없을경우 user property로 생성한다.
			if (orgProperty.indexOf("on") == 0||orgProperty.indexOf("can") == 0) {
				try {
					obj.setEventHandlerLookup(property, attributes[orgProperty], this);
				} catch(e) {
					trace("[gfn_SetProperty] Property 설정 오류 : " + orgProperty);
				}
			} else {
				if (addUserProperty != false) obj[property] = attributes[orgProperty];
			}
		}
    }
};

/**
 * @class  component 가져오기 <br>
 * @param  {Object} objParent - parent 객체
 * @param  {String} compName - Component 명
 * @return {String} 가져온 값
 * @example
 */
pForm.gfn_GetAllCommponents = function(objParent, compName)
{
    if (!objParent) return null;
	if (objParent.components && objParent.components[compName]) return objParent.components[compName];
    if (objParent.objects && objParent.objects[compName]) return objParent.objects[compName];
    return null;
};

/**
 * @class  MiPlatform의 random 대체함수 <br>
 * 일정한 정수 범위의 난수를 구함 <br>
 * start와 end 사이에 있는 임의의 정수를 반환 <br>
 * @param  {Number} start - 시작값 
 * @param  {Number} end - 마지막값 
 * @return {Number} decimal 난수값
 * @example
 */
pForm.gfn_Random = function(start, end)
{
	if (this.gfn_IsNull(start)) start = 0;
	if (this.gfn_IsNull(end)) end = 65535;	//MiPlatform 기준

	if (start < 0) start = 0;
	if (start >= 65535) start = 65535;
	if (end > 65535) end = 65535;

	var gap = end - start;	// 두 값 사이의 차이
	var ret = start + Math.floor(Math.random() * gap);
	return ret;
};

/**
 * @class  Form내 Combo들의 Index 설정 <br>
 * @param  {Object} pThis - Form 객체
 * @param  {String} index - Combo Index
 * @return N/A
 * @example
 */
pForm.gfn_SetComboIndex = function(pThis, index)
{
	if (this.gfn_IsNull(pThis)) return null;
	if (this.gfn_IsNull(index)) index = 0;
	
	var comps = this.components;
	
	for (var i = 0; i < comps.length; i++) {
		if (comps[i] instanceof Combo) {
			comps[i].set_index(index);
		}
	}
};

/**
 * @class  주민등록번호 뒷자리, 첫번째 번호로 년대를 반환 <br>
 * @param  {String} resNo - 주민등록번호
 * @return {String} 년대
 * @example
 */
pForm.gfn_GetBirthYear = function(resNo)
{
	if (resNo.toString().length != 13) return "N";
	if (!(resNo).match(/^\d{6}\d{7}$/)) return "N";
	
	var vGb = resNo.substr(6, 1);
	
	if (vGb == "1" || vGb == "2" || vGb == "5" || vGb == "6") {
		return "19";
	} else if (vGb == "3" || vGb == "4" || vGb == "7" || vGb == "8") {
		return "20";
	}
};

/**
 * @class  현재사용자의 IP정보가 내부망인지 확인 <br>
 * @param  {String} ipAddress - IP 주소
 * @return {Boolean} 내부망 여부
 * @example
 *
 */
pForm.gfn_IsLocalPc = function(ipAddress)
{
	var objApp = this.gfn_GetApp();
	var ret = false;
	if (ipAddress.substr(0, 2) == "10" || ipAddress.substr(0, 3) == "172" || objApp.gv_ServerType == "Y") {
		ret = true;
	}
	
	return ret;
};

//////////////////////////////////////////////////////////////////////////

/**
 * @class  Variable / Object / Component를 찾고 없으면 상위 form에서 찾음 <br>
 * @param  {Object} pThis - Form 객체
 * @param  {String} varName - 객체명
 * @return {Object} 해당 객체
 * @example
 */
pForm.gfn_GetLookupVar = function(pThis, varName)
{
	// Dataset 이면
    if (varName instanceof Dataset) {
		varName = varName.name;
	} else {
		varName = varName.trim();
	}
	
	var	orgSelfForm = pThis;
	
	if (typeof(pThis) == "string") {
		var tmparr = pThis.split(".");
		pThis = this;
		
		for (var i = 0, len = tmparr.length ; i < len ; i++) {
			if (!pThis) {
				trace("[gfn_GetLookupVar] 해당 경로가 정확하지 않습니다.(" + tmparr.join(".") + ") ==> 객체명: " + varName + " url: " + this._url);
				return;
			}
			
			switch (tmparr[i]) {
				case "this" :
					pThis = this;
					break;
				case "parent" :
					if (pThis instanceof nexacro.Form && pThis.opener) {
						pThis = pThis.opener;
					} else {
						pThis = pThis.parent;
					}
					break;
					
				default:
					pThis = pThis[tmparr[i]];
					break;
			}
		}
	}
	
	var scope = pThis;
	var value, isFind = false;
	
	while(scope) {
		if (scope.hasOwnProperty(varName)) {
			value = scope[varName];
			isFind = true;
			break;
		}
		
		if (scope instanceof nexacro.Frame && scope.opener) {
			scope = scope.opener;
		} else {
			scope = scope.parent;
		}
	}
	
	if (!isFind) {
		trace("[gfn_GetLookupVar] 해당 객체를 찾을 수 없습니다.(" + varName + ") ==> 해당 경로 : " + (orgSelfForm.name||orgSelfForm) + " url: " +  (orgSelfForm.name ? pThis._url : this._url));
		return;
	}
	return value;
};

/**
 * @class  compId에 해당되는 객체를 찾아서 object로 반환 <br>
 * @param  {String} varName - 객체명
 * @return {Object} 해당 객체
 * @example
 *  this.gfn_LookupPath("ds_Temp");
 */
pForm.gfn_LookupPath = function(varName)
{
	var pThis = this;
	this._arrPath = new Array();
	this._arrPath.push("this");
	
    var retObj = this.gfn_LookupParent(pThis, varName, null);
	if (retObj) {
		return retObj[varName];
	} else if (nexacro.getApplication()[varName]) {
		return nexacro.getApplication()[varName];
	}
	
	trace("[gfn_LookupPath] 객체(" + varName + ")를 찾을 수 없습니다. url: " +  this._url);
	return null;
};

/**
 * @class  Variable / Object / Component을 해당 Form, parent Form, opener Form에서 각각 찾고 존재하면 Object를 반환 <br>
 * @param  {Object} pThis - Form 객체
 * @param  {String} varName - 객체명
 * @param  {String} pathName - 객체 경로 
 * @return {Object} 해당 객체
 * @example
 *  this.gfn_LookupPath("ds_Temp");
 */
pForm.gfn_LookupParent = function(pThis, varName, pathName)
{
	var selfForm;
	
    if (pathName) {
		this._arrPath.push(pathName);
    }
	
	if (pThis[varName] || varName in pThis) {
		return pThis;
	} else if (pThis.parent && pThis.parent != nexacro.getApplication() && (selfForm = this.gfn_LookupParent(pThis.parent, varName, "parent"))) {
		return selfForm;
	} else if (pThis.opener && pThis.opener != nexacro.getApplication() && (selfForm = this.gfn_LookupParent(pThis.opener, varName, "opener"))) {
		return selfForm;
	}
	
	this._arrPath.pop();
	return null;
};

/**
 * @class  String으로 넘어오는 Parameter를 Array 객체로 변환 <br>
 * @param  {String} value - string Parameter
 * @return {Array} Array 객체
 * @example
 */
pForm.gfn_MakeArgumentArray = function(value)
{
	if (typeof(value) == "object") return value;
	
	var tokenPatterns = [["", "[^-\\d\\s~!#^&*=+|\\)\\(\\]\\[\\}\\{%~:;?\\\"<,.>\|/\\'][^-\\s~!#^&*=+|\\)\\(\\]\\[\\}\\{%~:;?\\\"<,.>\|/\\']*"]
		, ["", "="]
		, ["'", "'[^'\\\\]*(\\\\[\\S\\s]|[^'\\\\]*)*'"]
		, ['"', '"[^"\\\\]*(\\\\[\\S\\s]|[^"\\\\]*)*"']
		, ["", "[0-9]+(\\.[0-9]*)?"]
		, ["", "[ \\t\\n\\r]+"]
		, ["", "[\\S]+"]
	];
	
    var arrToken = this.gfn_GetMatchToken(value, tokenPatterns, "m", -1);
	return this.gfn_GetTokenToArgArr(arrToken);
};

/**
 * @class  String pattern을 기준으로 scan해서 Array객체로 생성 <br>
 * @param  {String} value
 * @param  {String} tokenPatterns
 * @param  {Boolean} flag
 * @return {Array} pattern을 기준으로 scan된 Array 객체
 * @example
 */
pForm.gfn_GetMatchToken = function(value, tokenPatterns, flag, nEtcIndex)
{
	var allPattern = "[\\S\\s]";
	var pos    = 0;
    var retPos = 0;
    var firstStr   = "";
    var pattern = "";
    var bFind = false;

    var arrToken = new Array();
    var token;

    while (pos < value.length) {
		bFind = false;
		
		for (var i = 0; i < tokenPatterns.length; i++) {
			firstStr   = tokenPatterns[i][0];
			pattern = tokenPatterns[i][1];
			retPos = this.gfn_MatchTokenType(value, firstStr, pattern, pos, flag);
			
			if (retPos > pos) {
				token = value.substr(pos, retPos - pos);
				arrToken.push([i, token]);
				pos = retPos;
				bFind = true;
				break;
			}
		}
		
	    if (bFind == true) continue;
		
		retPos = this.gfn_MatchTokenType(value, "", allPattern, pos, flag);
		if (retPos > pos) {
			if (nEtcIndex != -1) {
				token = value.substr(pos, retPos - pos);
				arrToken.push([nEtcIndex, token]);
			}
			
			pos = retPos;
		}
	}
	
	return arrToken;
};

/**
 * @class  String을 pattern과 주어진 position에서 matching 되는 문자열의 위치를 확인 <br>
 * @param  {String} str
 * @param  {String} firstStr
 * @param  {String} pattern
 * @param  {String} pos
 * @param  {Boolean} flag
 * @return {Array} matching 되는 첫 위치에서 부터의 문자열 마지막 위치
 * @example
 */
pForm.gfn_MatchTokenType = function(str, firstStr, pattern, pos, flag)
{
	if (this.gfn_IsNull(firstStr) == false && this.gfn_MatchTokenString(str, firstStr, pos) == false) return -1;
	
    var strFirst = str.substr(pos);
    var exp     = new RegExp(pattern, flag);
    var objArr  = exp.exec(strFirst);
	
	if (objArr != null && objArr.index == 0) return pos + objArr[0].length;
	return -1;
};

/**
 * @class  String을 부분 문자열이 검색할 string matching 되는지 확인 <br>
 * @param  {String} str
 * @param  {String} firstStr
 * @param  {String} pos
 * @return {String} matching 여부
 * @example
 */
pForm.gfn_MatchTokenString = function(str, firstStr, pos)
{
	return (str.substr(pos, firstStr.length) == firstStr);
};

/**
 * @class  scan된 Array를 name과 value로 구분해서 배열로 변환 <br>
 * @param  {String} arrToken - scan된 Array
 * @return {Array} name과 value로 구분한 Array 객체
 * @example
 */
pForm.gfn_GetTokenToArgArr = function(arrToken)
{
	var tokenlength = arrToken.length;
	var argArr = {};
	var token;
	var name  = "";
	var value = "";
	var bLeft = true;
	
    for (var i = 0; i < tokenlength; i++) {
	    token = arrToken[i];
		
		switch(token[0]) {
			case 0: // name
				if (bLeft == true) {
					name = token[1];
					bLeft = false;
				} else {
					value += token[1];
				}
				break;
				
			case 1: // =
				bLeft = false;
				break;
				
			case 2: // String "xxxxx"
			case 3: // String "xxxxx"
			case 4: // Number 123456
				value = token[1];
				
				if (name != "") {
					argArr[name] = nexacro.stripQuote(value);
					bLeft = true;
					name = "";
					value = "";
				}
				break;
				
			case 5: // space
				if (value != "" && name != "") {
					argArr[name] = nexacro.stripQuote(value);
					name = "";
					value = "";
				}
				
				bLeft = true;
				break;
				
			case 6: // etc printable char
				value += token[1];
				break;
		}
	}
	
	return argArr;
};

/**
 * @class  Tab 객체의 index번째탭의 모든 button의 enable 상태를 enableFlag 상태로 변경 <br>
 * @param  {Object} objTab - Tab 객체
 * @param  {Number} tabIndex - Tab index (tabIndex -1일때는 모든 tab 대상)
 * @return {Boolean} enableFlag - enable상태
 * @example
 */
pForm.gfn_SetEnableTabInButton = function(objTab, tabIndex, enableFlag)
{
	if (this.gfn_IsNull(objTab)) return false;
	if (this.gfn_IsNull(tabIndex)) tabIndex = -1;
	if (this.gfn_IsNull(enableFlag)) enableFlag = true;
	
	if (tabIndex == -1) {
		for (var i = 0; i < objTab.tabpages.length; i++) {
			var objTabpage = objTab.tabpages[i];
			var comps = objTabpage.form.components;
			
			for (var j = 0; j < comps.length; j++) {
				if (this.gfn_GetType(comps[j], true) == "BUTTON") {
					comps[j].set_enable(enableFlag);
				}
			}
		}
	} else {
		var objTabpage = objTab.tabpages[tabIndex];
		if (this.gfn_IsNull(objTabpage)) return false;
		
		var comps = objTabpage.form.components;
		for (var i = 0; i < comps.length; i++) {
			if (this.gfn_GetType(comps[i], true) == "BUTTON") {
				comps[i].set_enable(enableFlag);
			}
		}
	}
};

// DataObject
pForm.DataObject = function(){};

pForm.DataObject.prototype.GetData = function(DataName)
{
	return this[DataName];
};

pForm.DataObject.prototype.SetData = function(DataName, DataValue)
{
	return this[DataName] = DataValue;
};


/**
 * @class  입력된 값에 대하여 소수점 이하 버림한 값을 리턴  <br>
 * @param  {Number} numVal 
 * @return {Number} 입력한 숫자의 소수점 이하 버림한 값
 * @example
 */
pForm.gfn_Truncate = function(numVal)
{	
	if(numVal == "" || numVal == undefined){
		return 0;
	} else {
		return	new nexacro.Decimal( nexacro.toNumber(numVal)).trunc();
	}
};

/**
 * @class  지정자리 반올림  <br>
 * @param  {Number} n - 값
 * @param  {Number} pos - 자릿수
 * @return {Number} 반올림 결과값
 * @example
 */
pForm.gfn_Round = function(n, pos)
{
	var digits = Math.pow(10, pos); 
	var sign = 1; if (n < 0) { 
		sign = -1; 
	} 
	// 음수이면 양수처리후 반올림 한 후 다시 음수처리 
	n = n * sign; 
	var num = Math.round(n * digits) / digits; 
	num = num * sign; 
	return num.toFixed(pos); 
};

/**
 * @class  문자열뒤에 Unit 한번만 붙히기 <br>
 * @param  {String} val - 기준값
 * @param  {String} unit - 단위
 * @return {String} 기준값 단위
 * @example
 */
pForm.gfn_ExprAddUnit = function(val, unit)
{	
	if(val.indexOf(unit) != -1 ) return val;
	
	return val + unit;
}

/**
 * @class  현재 Form에 등록된 컴포넌트 중 문자열이 포함된 컴포넌트 반환 <br>
 * @param  {String} compName - 찾고자하는 이름
 * @return {Array} 컴포넌트리스트
 * @example
 */
pForm.gfn_CompNameList = function(compName)
{	
	var compArr = [];
	for(var i = 0; i < this.components.length ; i++) {
		if(this.components[i].name.indexOf(compName) > -1 ) {
			compArr.push(this.components[i]);
		}
	}
	return compArr;
}

/**
 * @class  컴포넌트배열에 대해 탭과 같은css 인라인 적용 <br>
 * @param  {Object} obj - 버튼 오브젝트
 * @return {Array} 컴포넌트리스트
 * @example
 */
pForm.gfn_ArrayCssTab = function(obj ,array)
{	
	for(var i = 0; i < array.length; i++){
		array[i].set_background("#ffffff");	
		array[i].set_color("#333333");	
	}
	obj.set_background("#d4c190");	
	obj.set_color("#ffffff");
}

/**
 * @class  숫자인지 확인
 * @param  {String} sNum - 검증값
 * @return {boolean} 숫자이면 true, 아니면 false
 * @example
 */
pForm.gfn_IsNum = function(sNum) 
{
	var c;
	var point_cnt = 0;		
	
	if( this.gfn_IsNull(sNum) ) {
		return false;
	}
	
	for( var i=0; i<sNum.length; i++ ) {
		c = sNum.charAt(i);
		
		if( i == 0 && ( c == "+" || c == "-" ) ) {
		}
		else if( c >= "0" && c <= "9" ) {
		}
		else if( c == "." ) {
			point_cnt++;
			if( point_cnt > 1 ) {
				return false;				
			}
		}
		else {
			return false;
		}
	}	
	return true;
};

/**
 * @class  음수 제외한 숫자인지 확인
 * @param  {String} sNum - 검증값
 * @return {boolean} 음수 제외한 숫자이면 true, 아니면 false
 * @example
 */
pForm.gfn_IsNum2 = function(sNum) 
{
	var c;
	var point_cnt = 0;		
	
	if( this.gfn_IsNull(sNum) ) {
		return false;
	}
	
	for( var i=0; i<sNum.length; i++ ) {
		c = sNum.charAt(i);
		
		if( i == 0 ) {
		}
		else if( c >= "0" && c <= "9" ) {
		}
		else if( c == "." ) {
			point_cnt++;
			if( point_cnt > 1 ) {
				return false;				
			}
		}
		else {
			return false;
		}
	}	
	return true;
};

/**
 * @class  Form 또는 Popup으로 전달된 argument값 반환 <br>
 * @param  {Object} pThis - Form 객체
 * @param  {String | Array} arg - argument명 또는 argument명 배열
 * @return {Object} argument값
 * @example
 *  this.gfn_GetArgParam(this, "arg1");
 */
pForm.gfn_GetArgParam = function(pThis, arg) 
{
	return this.gfn_Nvl(this.gfn_GetArgForm(pThis, arg), this.gfn_GetArgPopup(pThis, arg));
};

/**
 * @class  전달된 텍스트 정보를 복사하는 함수 <br>
 * @param  {String} v_clip 
 * @return N/A
 * @example
 * this.gfn_CopyText(v_clip);
 */
pForm.gfn_CopyText = function(v_clip)
{
	if( system.navigatorname == "Chrome" || system.navigatorname == "Edge" ) {
		//_sfn_CopyGrdCell(v_clip);
		var objTextArea = new TextArea();
		if( this.isValidObject("txa_copyData") ) {
			this.removeChild("txa_copyData");
		}		
		objTextArea.init( "txa_copyData", 0, 0, 0, 0 );
		this.addChild("txa_copyData", objTextArea);
		objTextArea.show(); 
		
		objTextArea.setFocus();
		objTextArea.set_value(v_clip);
		objTextArea.setSelect(0);
		
		window.document.execCommand("copy");
	}
	else {
		system.clearClipboard();
		system.setClipboard("CF_TEXT", v_clip);
	}
};

/**
 * @class  Form을 팝업처럼 호출할때 닫기 위해 제공 함수 <br>
 * @param  {Object} pThis - Form 객체
 * @param  {Object} pParam - 팝업에 전달하는 값
 * @return N/A
 * @example
 * this.gfn_CloseFormPopup(this, "");
 */
pForm.gfn_CloseFormPopup = function(pThis, pParam) 
{
	if( !this.gfn_IsNull(pThis.getOwnerFrame().opener) ) {
		pThis.gfn_ClosePopup(pParam);
	}
};

/**
 * @class  ChildFrame에 속한 계층 위치의 정보까지 명칭으로 얻는다. <br>
 * @param  {Object} pThis - pThis 계층 구조에서 중단할 상위 nexacro component.
 * @param  {Object} pParam - obj nexacro component.
 * @return N/A
 * @example
 * trace(this.getPathName(this, Div00.form.st_test));  // output : Div00.form.st_test
 */
pForm.gfn_GetPathName = function(pThis, pParam) 
{
	var objComp = pParam
	  , arr 	= [];
	   
	while( objComp ) {
		if ( objComp instanceof ChildFrame ) break;
		if ( pThis && objComp === pThis ) break;
		arr.push(objComp.name);
		objComp = objComp.parent;
	}
	arr = arr.reverse();
	return arr.join(".");
};

/**
 * @class  주어진 컴포넌트가 사용하는 script 영역(scope)의 Form을 찾는다. <br> 
 * @param  {Object} objComp - 대상 컴포넌트
 * @return {Form} script 영역이 존재하는 Form.
 * @example
 * trace(this.gfn_GetScriptForm(this.Div00.form.Button00));	// output : [object Form]
 */ 
pForm.gfn_GetScriptForm = function(objComp) 
{
	var p = objComp;
	while( p ) {
		if( (p instanceof nexacro.Form) || (p.parent instanceof ChildFrame) ) {
			break;
		}
		p = p.parent;
	}
	return p;
};