/**
 * 통합정보시스템 고도화 구축
 * @FileName    String.js
 * @Creator     UI공통
 * @CreateDate  2019.05.02
 * @Desction    문자열 관련 함수
 ************** 소스 수정 이력 ***********************************************
 * date                Modifier                Description
 *******************************************************************************
 * 2019.05.02          UI공통                 최초 생성
 *******************************************************************************
 */

var pForm = nexacro.Form.prototype;

/**
 * @class  유니코드 문자값을 문자열로 반환 <br>
 * @param  {String} charCode - 유니코드 문자값
 * @return {String} 문자열
 * @example
 */
pForm.gfn_Chr = function(charCode)
{
	if (this.gfn_IsNull(charCode)) return null;
	return String.fromCharCode(charCode);
};

/**
 * @class  지정된 길이가 되도록 문자열의 왼쪽 공간을 특정 문자로 채움 <br>
 * @param  {String} value - 문자열
 * @param  {String} padChar - 왼쪽 공간을 채울 문자
 * @param  {Number} length - 지정 길이
 * @return {String} 문자열
 * @example
 */
pForm.gfn_Lpad = function(value, padChar, length)
{
	if( this.gfn_IsNull(value) ) {
		value = "";
	}
	return String(value).padLeft(length, padChar);
};

 /**
 * @class  지정된 길이가 되도록 문자열의 오른쪽 공간을 특정 문자로 채움 <br>
 * @param  {String} value - 문자열
 * @param  {String} padChar - 오른쪽 공간을 채울 문자
 * @param  {Number} length - 지정 길이
 * @return {String} 문자열
 * @example
 */
pForm.gfn_Rpad = function(value, padChar, length)
{
	if( this.gfn_IsNull(value) ) {
		value = "";
	}
	return String(value).padRight(length, padChar);
};

/**
 * @class  원본 문자열에서 인수로 지정한 영역의 문자열을 잘라 반환 <br>
 * @param  {String} value - 문자열
 * @param  {Number} start - 부분 문자열의 시작 인덱스
 * @param  {Number} length - 부분 문자열의 길이
 * @return {String} 문자열
 * @example
 */
pForm.gfn_SubStr = function(value, start, length)
{
	if (this.gfn_IsNull(value)) return "";
	if (arguments.length == 3) {
		return String(value).substr(start, length);
	} else {
		return String(value).substr(start);
	}
};

/**
 * @class  문자열의 왼쪽 부분을 지정한 길이만큼 반환 <br>
 * @param  {String} value - 문자열
 * @param  {String} size - 얻어올 크기
 * @return {String} 문자열
 * @example
 */
pForm.gfn_Left = function(value, size)
{
	var rtnVal = "";
	
	if (this.gfn_IsNull(value)) return "";
	if (this.gfn_IsNull(size)) {
        rtnVal = value;
    } else {
        rtnVal = value.toString().substring(0, size);
	}
	
    return rtnVal;
};

/**
 * @class  문자열의 오른쪽 부분을 지정한 길이만큼 반환 <br>
 * @param  {String} value - 문자열
 * @param  {Number} size - 얻어올 크기
 * @return {String} 문자열
 * @example
 */
pForm.gfn_Right = function(value, size)
{
	if (this.gfn_IsNull(value)) return "";
	if (this.gfn_IsNull(size)) return value;
	
	if (value.length < size) {
		return value;
	} else {
		return value.substr(value.length - size, size);
	}
};

/**
 * @class  문자열을 여러 개의 부분 문자열로 분할하여 배열로 반환 <br>
 * @param  {String} value - 문자열
 * @param  {String} separator - 문자열을 분할하는 기준
 * @return {Array} 문자열 배열
 * @example
 */
pForm.gfn_Split = function(value, separator)
{
	if (this.gfn_IsNull(value)) return "";
	return String(value).split(separator);
};

/**
 * @class  입력된 문자열을 separator1과 separator2로 2 번 Parsing 한 2차원 배열로 반환 <br>
 * @param  {String} value - 문자열
 * @param  {String} separator1 - 첫번째로 문자열을 분할하는 기준
 * @param  {String} separator2 - 두번째로 문자열을 분할하는 기준
 * @return {Array} 2 차원 배열
 * @example
 */
pForm.gfn_Split2 = function(value, separator1, separator2)
{
	if (this.gfn_IsNull(value)) return "";
	
	var arrRet = [];
	var arrString = this.gfn_Split(value, separator1);
	
	for (var i = 0; i < arrString.length; i++) {
		arrRet.push(this.gfn_Split(arrString[i], separator2));
	}
	return arrRet;
};

/**
 * @class  문자열에 있는 모든 영어를 소문자로 변환 <br>
 * @param  {String} value - 문자열
 * @return {String} 바뀐 소문자 문자열
 * @example
 */
pForm.gfn_ToLower = function(value)
{
	if (this.gfn_IsNull(value)) return "";
	return String(value).toLowerCase();
}

/**
 * @class  문자열에 있는 모든 영어를 소문자로 변환 <br>
 * @param  {String} value - 문자열
 * @return {String} 바뀐 소문자 문자열
 * @example
 */
pForm.gfn_ToLowerCase = function(value)
{
	if (this.gfn_IsNull(value)) return "";
	return String(value).toLowerCase();
}

/**
 * @class  문자열에 있는 모든 영어를 대문자로 변환 <br>
 * @param  {String} value - 문자열
 * @return {String} 대문자 문자열
 * @example
 */
pForm.gfn_ToUpper = function(value)
{
	if (this.gfn_IsNull(value)) return "";
	return String(value).toUpperCase();
};

/**
 * @class  문자열에 있는 모든 영어를 대문자로 변환 <br>
 * @param  {String} value - 문자열
 * @return {String} 대문자 문자열
 * @example
 */
pForm.gfn_ToUpperCase = function(value)
{
	if (this.gfn_IsNull(value)) return "";
	return String(value).toUpperCase();
};

/**
 * @class  문자열 양 끝의 공백문자 또는 지정된 문자를 제거 <br>
 * @param  {String} value - 문자열
 * @param  {String} text - 지정된 문자
 * @return {String} 문자열
 * @example
 */
pForm.gfn_Trim = function(value, text)
{
	if (this.gfn_IsNull(value)) return "";
	if (this.gfn_IsNull(text)) {
		return nexacro.trim(value);
	} else {
		return nexacro.trim(value, text);
	}
};

/**
 * @class  문자열 왼쪽 공백 제거 <br>
 * @param  {String} value - 문자열
 * @return {String} 왼쪽 공백 제거된 문자열
 * @example
 */
pForm.gfn_Ltrim = function(value)
{
	if (this.gfn_IsNull(value)) return "";
	return this.gfn_LTrimCase(value, "");
};

/**
 * @class  대소문자 구별없이 왼쪽에서 문자열 제거 <br>
 * @param  {String} value - 문자열
 * @param  {String} sTrim - Trim할 문자열(옵션 : Default=" ")(예 : "bb")
 * @return {String} 문자열
 * @example
 */
pForm.gfn_LTrimCase = function(value, sTrim)
{
	if (this.gfn_IsNull(value)) return "";
	
	var pos;
	
	if (this.gfn_IsNull(value))	return "";
	if (this.gfn_IsNull(sTrim)) sTrim = " ";
	
	value = String(value);
	
	for (pos = 0; pos < value.length; pos+=sTrim.length) {
		if (value.toLowerCase().substr(pos, sTrim.length) != sTrim.toLowerCase()) {
			break;
		}
	}
	return value.substr(pos);
};

/**
 * @class  입력된 문자열의 오른쪽 공백을 제거 <br>
 * @param  {String} value - 문자열
 * @return {String} 문자열
 * @example
 */
pForm.gfn_Rtrim = function(value)
{
	if (this.gfn_IsNull(value)) return "";
	return this.gfn_RTrimCase(value, "");
};

/**
 * @class  대소문자 구별없이 오른쪽에서 문자열 제거 <br>
 * @param  {String} value - 문자열
 * @param  {String} Trim할 문자열(옵션 : Default=" ")(예 : "CC")
 * @return {String} 문자열
 * @example
 */
pForm.gfn_RTrimCase = function(value, sTrim)
{
	if (this.gfn_IsNull(value)) return "";
	var pos;

	if (this.gfn_IsNull(value))		return "";
	if (this.gfn_IsNull(sTrim))		sTrim = " ";

	for (pos = value.length-sTrim.length; pos >= 0; pos -= sTrim.length) {
		if (value.toLowerCase().substr(pos, sTrim.length) != sTrim.toLowerCase()) {
			break;
		}
	}
	
	return value.substr(0, pos+sTrim.length);
};

/**
 * @class  문자열을 대소문자 구별하여 치환 <br>
 * @param  {String} orgText - 원래 문자열 (예 : "aaBBbbccBB")
 * @param  {String} repFrom - 치환할 문자열 (예 : "BB")
 * @param  {String} repText - 치환될 문자열 (예 : "xx")
 * @return {String} 문자열
 * @example
 */
pForm.gfn_Replace = function(orgText, repFrom, repText)
{
	if (this.gfn_IsNull(orgText)) return "";
	return String(orgText).split(repFrom).join(this.gfn_Nvl(repText, ""));
};

/**
 * @class  지정된 문자열이 처음으로 일치하는 위치의 인덱스를 반환 <br>
 * @param  {String} value - 문자열
 * @param  {String} searchText - 검색할 문자열
 * @param  {Number} start - 검색할 시작 위치 값
 * @return {Number} 문자 위치 값
 * @example
 */
pForm.gfn_IndexOf = function(value, searchText, start)
{
	if (this.gfn_IsNull(value)) return -1;
	
	if (arguments.length == 3) {
		return String(value).indexOf(searchText, start);
	} else {
		return String(value).indexOf(searchText);
	}
};

/**
 * @class  문자열로 변환하여 반환 <br>
 * @param  {Object} value - 문자열
 * @return {String} 문자열
 * @example
 */
pForm.gfn_ToString = function(value)
{
	if (this.gfn_IsNull(value)) return "";
	return String(value).toString();
};

/**
 * @class  입력된 문자열에서 가운데 부분을 주어진 길이만큼 반환 <br>
 * @param  {Object} value - 문자열
 * @param  {Number} start - 얻어올 첫 글자의 시작 위치 값
 * @param  {Number} length - 지정 길이
 * @return {String} 문자열
 * @example
 */ 
pForm.gfn_Mid = function(value, start, length)
{
	if (this.gfn_IsNull(value)) return "";
	if (arguments.length == 3) {
		return String(value).substr(start, length);
	} else {
		return String(value).substr(start);
	}
};

/**
 * @class  입력된 문자열에서 가운데 부분을 주어진 Byte 만큼 반환 <br>
 * @param  {Object} value - 문자열
 * @param  {Number} start - 얻어올 첫 글자의 시작 위치 값
 * @param  {Number} length - 지정 길이
 * @return {String} 문자열
 * @example
 */
pForm.gfn_Midb = function(value, start, length)
{
	if (this.gfn_IsNull(value)) return "";
	
	var arrByte = [];
	for (var i = 0, byteIndex = 0; i < value.length; i++, byteIndex++) {
		if (byteIndex == start) {
			arrByte = this._gfn_String2Array(value.substr(i));
			break;
		}
		else if (byteIndex > start) {
			arrByte.push(this._gfn_Get2ByteChar1CodeNo(value.substr(i - 1, 1), false));
			arrByte = this._gfn_String2Array(value.substr(i));
			break;
		}
		else {
			if (value.charCodeAt(i) > 127) {
				++byteIndex;
			}
		}
	}
	
	if (arguments.length <= 2) return this.array2String(arrByte);
	
	var arrSize = [];
	for (var i = 0, byteSize = 0; i < arrByte.length; i++, byteSize++) {
		if (byteSize == length) {
			arrSize = arrByte.slice(0, i);
			break;
		}
		else if (byteSize > length) {
			arrByte[i-1] = this._gfn_Get2ByteChar1CodeNo(String.fromCharCode(arrByte[i - 1]), true);
			arrSize = arrByte.slice(0, i - 1);
			break;
		}
		if (arrByte[i] > 127) {
			++byteSize;
		}
	}
	return this._gfn_Array2String(arrSize);
};

//////////////////////////////////////////////////////////////////////////
/**
 * @class  2Byte Char ->  1CodeNo
 * @param  {String} charStr - 문자
 * @param  {Boolen} bLeft - left 여부
 * @return {Number} 
 * @example
 */ 
pForm._gfn_Get2ByteChar1CodeNo = function(charStr, bLeft)
{
    var binText = charStr.charCodeAt(0).toString(2).padLeft(16, "0");
	
    if (bLeft == true) {
		binText = binText.substr(0, 8);
        return parseInt(binText, 2);
	}
	
    binText = binText.substr(8);
    return parseInt(binText, 2);
};

/**
 * @class  문자열을 유니코드값 배열로 변환 <br>
 * @param  {String} value - 문자열
 * @return {Array} 배열 문자열
 * @example
 */ 
pForm._gfn_String2Array = function(value)
{
	if (this.gfn_IsNull(value)) return null;
	
	var array = new Array();
	for (var i = 0; i < value.length; i++) {
		array.push(value.charCodeAt(i));
	}
	return array;
};

/**
 * @class  유니코드값 배열을 문자열로 변환 <br>
 * @param  {Array} value - 배열 문자열
 * @return {String} 문자열
 * @example
 */ 
pForm._gfn_Array2String = function(value)
{
	if (this.gfn_IsNull(value)) return "";
	return String.fromCharCode.apply(String, value);
};

/**
 * @class  암호화 함수 <br>
 * @param  {String} data - 문자열
 * @return {String} 암호화된 문자열
 * @example
 *  var ret = this.gfn_EncodeAes("/home/simpid/projects/samples/hires/");
 */
pForm.gfn_EncodeAes = function(data)
{
	if( !String.prototype.padStart ) {
		String.prototype.padStart = function padStart(targetLength,padString) {	 
			targetLength = targetLength>>0; //truncate if number or convert non-number to 0;
			padString = String((typeof padString !== 'undefined' ? padString : ' '));
			if( this.length > targetLength ) {
				return String(this);
			}
			else {
				targetLength = targetLength-this.length;
				if( targetLength > padString.length ) {
					padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
				}
				return padString.slice(0,targetLength) + String(this);
			}
		};
	}

	if( !String.prototype.repeat ) {
		String.prototype.repeat = function(count) {
			'use strict';
			if (this == null) {
				throw new TypeError('can\'t convert ' + this + ' to object');
			}
			var str = '' + this;
			count = +count;
			if( count != count ) {
				count = 0;
			}
			if( count < 0 ) {
				throw new RangeError('repeat count must be non-negative');
			}
			if( count == Infinity ) {
				throw new RangeError('repeat count must be less than infinity');
			}
			count = Math.floor(count);
			if( str.length == 0 || count == 0 ) {
			  return '';
			}
			// Ensuring count is a 31-bit integer allows us to heavily optimize the
			// main part. But anyway, most current (August 2014) browsers can't handle
			// strings 1 << 28 chars or longer, so:
			if( str.length * count >= 1 << 28 ) {
				throw new RangeError('repeat count must not overflow maximum string size');
			}
			
			var maxCount = str.length * count;
			count = Math.floor(Math.log(count) / Math.log(2));
			while (count) {
				str += str;
				count--;
			}
			str += str.substring(0, maxCount - str.length);
			return str;
		}
	}
	var key = "12345678901234567890123456789012"; // 32byte
	var iv = [ 11, 22, 33, 44, 55, 66, 77, 88, 99, 11, 11, 22, 33, 44, 55, 66 ]; //16 bytes
	 
	var textBytes = aesjs.utils.utf8.toBytes(data);
	var mod = textBytes.length % 16;
	if(mod % 16 != 0) {
		data += ''.padStart(16 - mod);
		textBytes = aesjs.utils.utf8.toBytes(data);
	}
	 
	var aesCbc = new aesjs.ModeOfOperation.cbc(aesjs.utils.utf8.toBytes(key), iv);
	var encryptedBytes = aesCbc.encrypt(textBytes);
	
	encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
	  
	return encryptedHex;
};

/**
 * @class  콤마를 HTML 코드변환표의 값으로 변환 <br>
 * @param  {String} strValue - 대상 문자
 * @return {String} 문자열
 * @example
 */
pForm.gfn_ChangeComma = function(strValue)
{
	if( this.gfn_IsNull(strValue) ) {
		return null;
	}
	return strValue.replace(/,/gi, "&#44;");
};

/**
 * @class  천단위로 콤마 찍기 <br>
 * @param  {String} val - 대상 문자
 * @return {String} 콤마찍은 문자열(천단위)
 * @example
 */
pForm.gfn_SetComma = function(val)
{
	var argVal = this.gfn_ToString(val);
	var rtnStr 		= "";
	var splitChar 	= "";
	
	for( var i=argVal.length-1; i>=0; i-- ) {
		splitChar = argVal.charAt(i);		
		rtnStr 	  = splitChar + rtnStr;
		
		if( i % 3 == argVal.length % 3 && i != 0 ) {
			rtnStr = ',' + rtnStr;
		}
	}	
	return rtnStr;
};