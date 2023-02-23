/**
 * 통합정보시스템 고도화 구축
 * @FileName    Date.js
 * @Creator     UI공통
 * @CreateDate  2019.05.02
 * @Desction    날짜 관련 함수
 ************** 소스 수정 이력 ***********************************************
 * date                Modifier                Description
 *******************************************************************************
 * 2019.05.02          UI공통                 최초 생성
 *******************************************************************************
 */

var pForm = nexacro.Form.prototype;

/**
 * @class  오늘 날짜 반환 <br>
 * @param  {Boolean} isSeparator - 구분자 필요시 true
 * @return {String} 오늘 날짜 - "yyyyMMdd" 또는 "yyyy-MM-dd"
 * @example
 *  
 */
pForm.gfn_Today = function(isSeparator)
{
	var ret = "";
	var objDate = new Date();
	
	var year  = new String(objDate.getFullYear());
	var month = new String(objDate.getMonth() + 1).padLeft(2, "0");
	var day   = new String(objDate.getDate()).padLeft(2, "0");
	var separator = "";
	
	// 구분자 확인
	if (isSeparator == true) separator = "-";
	ret =  year + separator + month + separator + day;
	
	return ret;
};

/**
 * @class  입력된 날자에 offset 으로 지정된 만큼의 일(日)을 증감 <br>
 * @param  {String} date - 날짜 (yyyyMMdd)
 * @param  {Number} offset - 일 증감값 ( 예 : 10 또는 -10 )
 * @return {String} 증감 날짜 (yyyyMMdd)
 * @example
 */
pForm.gfn_AddDate = function(date, offset)
{
	if (this.gfn_IsNull(date)) date = this.gfn_Today();
	
	date = this.gfn_ToDate(date);
	date.addDate(offset);
	
	return this.gfn_GetDateFormatString(date, "%Y%m%d");
};

/**
 * @class  입력된 날자에 offset 으로 지정된 만큼의 월(月)을 증감 <br>
 * @param  {String} sDate - 날짜 (yyyyMMdd)
 * @param  {Number} nOffset - 월 증감값 ( 예 : 1 또는 -1 )
 * @return {String} 증감 날짜 (yyyyMMdd)
 * @example
 */
pForm.gfn_AddMonth = function(sDate, nOffset)
{
	if( this.gfn_IsNull(sDate) ) {
		sDate = this.gfn_Today();
	}

	var date = this.gfn_ToDate(sDate);

	if((date instanceof Date) == false) {
		return alert(date);
	}

	var preDay   = date.getDate();
	var nextDate = this.gfn_ToDate(this.gfn_GetFirstDay(sDate));
	nextDate.addMonth(nOffset);
	var nextLastDay = this.gfn_GetLastDay(this.gfn_GetDateFormatString(nextDate, "%Y%m%d"));
	if(preDay > nextLastDay) {
		preDay = nextLastDay;
	}
	nextDate.addDate(preDay - 1);

	return this.gfn_GetDateFormatString(nextDate, "%Y%m%d");
};

/**
 * @class  입력된 날자에 offset 으로 지정된 만큼의 년(年)을 증감 <br>
 * @param  {String} date - 날짜 (yyyyMMdd)
 * @param  {Number} offset - 년 증감값 ( 예 : 1 또는 -1 )
 * @return {String} 증감 날짜 (yyyyMMdd)
 * @example
 */
pForm.gfn_AddYear = function(date, offset)
{
	if (this.gfn_IsNull(date)) date = this.gfn_Today();
	
	date = this.gfn_ToDate(date);
	date.addYear(offset);
	
	return this.gfn_GetDateFormatString(date, "%Y%m%d");
};

/**
 * @class  입력한 날짜값 문자열 비교 및 조회기간 확인 <br>
 * @param  {String} fromDate - 시작일자 (YYYYMMDD)
 * @param  {String} toDate - 종료일자 (YYYYMMDD)
 * @param  {Number} term - 기간최대값
 * @return {Boolean} true / false - fromDate 이 toDate보다 크면 false, 작거나 같으면 true
 * @example
 *
 */
pForm.gfn_CheckTerm = function(fromDate, toDate, term)
{
	if (this.gfn_IsNull(term)) {
		if (parseInt(fromDate) > parseInt(toDate)) {
			this.alert("기간을 잘못 입력하셨습니다.");
			return false;
		} else {
			return true;
		}
	} else {
		if (term == 0) return true;
		
		if (this.gfn_GetDiffDay(fromDate, toDate) >= term) {
			this.alert("기간은 " + term + "일이내로 하셔야 합니다.");
			return false;
		}
		
		return true;
	}
};

/**
 * @class  입력된 날짜를 Date 객체로 변환 <br>
 * @param  {String} date - 날짜값
 * @return {Object} Date 객체
 * @example
 *
 */
pForm.gfn_ToDate = function(date)
{
	if (this.gfn_IsNull(date)) return null;
	
    date = date.toString();
	date = nexacro.replaceAll(date, "-", "");
	date = nexacro.replaceAll(date, "/", "");
	
	var year  = parseInt(date.substr(0, 4));
	var month = parseInt(date.substr(4, 2)) - 1;
	var day   = parseInt(date.substr(6, 2));
	
	if (date.length == 8) {
		return new Date(year, month, day);
	} else if (date.length == 14) {
		var hour = parseInt(date.substr(8, 2));
		var min  = parseInt(date.substr(10, 2));
		var sec  = parseInt(date.substr(12, 2));
		
		return new Date(year, month, day, hour, min, sec);
	}
};

/**
 * @class  yyyyMMddhhmmss의 14자리 문자열 반환 <br>
 * @param  N/A
 * @return {String} 14자리 문자열 날짜
 * @example
 */
pForm.gfn_GetDate = function()
{
	return this.gfn_GetDateFormatString(new Date(), "%Y%m%d%H%M%S");
};

/**
 * @class  요일 구하기 <br>
 * @param  {String} date - yyyyMMdd형태의 날짜 (예 : "20190621")
 * @param  {String} type - "" : 숫자값
					"S" : 짧은 요일 (일, 월, ... 토)
					"L" : 긴 요일 (일요일, 월요일, ... 토요일)
 * @return {String}
    - 성공 = 0 (일요일), 1 (월요일), 2 (화요일), 3 (수요일), 4 (목요일), 5 (금요일), 6 (토요일)
			type "S" : 일, 월, 화, 수, 목, 금, 토
			type "L" : 일요일, 월요일, 화요일, 수요일, 목요일, 금요일, 토요일
    - 실패 = -1
 * @example
 *  this.gfn_GetDay("20190621"); // 5
 *  this.gfn_GetDay("20190621", "S"); // 금
 *  this.gfn_GetDay("20190621", "L"); // 금요일
 */
pForm.gfn_GetDay = function(date, type)
{
	if (this.gfn_IsNull(date)) return -1;
	
	var oDate = this.gfn_ToDate(date);
	var day = oDate.getDay();
	
	if (this.gfn_IsNull(type)) {
		return day;
	} else {
		var arrDay = new Array();
		
		switch (type.toUpperCase()) {
			case "S" :
				arrDay = ["일", "월", "화", "수", "목", "금", "토"];
				break;
				
			case "L" :
				arrDay = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
				break;
		}
		
		return arrDay[day];
	}
};

/**
 * @class  입력된 월에 첫번째 날짜 가져오는 함수 <br>
 * @param  {String} date - 날짜값
 * @return {String} 첫번째 날짜
 * @example
 */
pForm.gfn_GetFirstDay = function(date)
{
	var date = this.gfn_ToDate(date);
	date.addDate(-1 * (date.getDate() - 1));
	return this.gfn_GetDateFormatString(date, "%Y%m%d");
};

/**
 * @class  입력된 월에 마지막 날짜 가져오는 함수 <br>
 * @param  {String} date - 날짜값
 * @return {Number} 첫번째 날짜 값
 * @example
 */
pForm.gfn_GetLastDay = function(date)
{
	var date = this.gfn_ToDate(this.gfn_GetFirstDay(date));
	date.addMonth(1);
	date.addDate(-1);
	return date.getDate();
};

/**
 * @class  두 일자간의 차이 일(日)수 계산 <br>
 * @param  {String} fromDate - yyyyMMdd형태의 From 일자
 * @param  {String} toDate - yyyyMMdd형태의 To 일자
 * @return {Number} 차이 일(日)수 (toDate < fromDate이면 음수가 반환)
 * @example
 */
pForm.gfn_GetDiffDay = function(fromDate, toDate)
{
    var from = this.gfn_ToDate(fromDate);
	var to = this.gfn_ToDate(toDate);
    
    return parseInt((to - from) / (1000 * 60 * 60 * 24));
};

/**
 * @class 두 일자간의 차이 월(月)수 계산 (1개월은 30일로 계산) <br>
 * @param {String} fromDate - yyyyMMdd형태의 From 일자
 * @param {String} toDate - yyyyMMdd형태의 To 일자
 * @return {Number} 차이 월(月)수 (toDate < fromDate이면 음수가 반환)
 * @example
 */
pForm.gfn_GetDiffMonth = function(fromDate, toDate)
{
	var from = this.gfn_ToDate(fromDate);
	var to = this.gfn_ToDate(toDate);
    var days = parseInt((to - from) / (1000 * 60 * 60 * 24));
    return (days / 30);
};

/**
 * @class 두 일자간의 차이 년(年)수 계산 (1년은 365일로 계산) <br>
 * @param {String} fromDate - yyyyMMdd형태의 From 일자
 * @param {String} toDate - yyyyMMdd형태의 To 일자
 * @return {Number} 차이 년(月)수 (toDate < fromDate이면 음수가 반환)
 * @example
 */
pForm.gfn_GetDiffYear = function(fromDate, toDate)
{
	var from = this.gfn_ToDate(fromDate);
	var to = this.gfn_ToDate(toDate);
    var days = parseInt((to - from) / (1000 * 60 * 60 * 24));
    return (days / 365);
};

/**
 * @class 두 날짜간의 시간 차이를 계산하여 각 차이값을 배열로 반환 <br>
 * @param {String | Object} fromDate - 시작날짜, 문자열 또는 Date 객체
 * @param {String | Object} toDate - 종료날짜, 문자열 또는 Date 객체
 * @return {array} [일,시,분,초] 두 날짜의 차이
 * @example
 * this.gfn_GetDiffTime("20190701131525", "20190701182734"); // [0,5,12,9]
 * this.gfn_GetDiffTime("20190709120000", "20190711120000"); // [2,0,0,0]
 */
pForm.gfn_GetDiffTime = function(fromDate, toDate)
{
	if (!(fromDate instanceof Date)) fromDate = this.gfn_ToDate(fromDate);
	if (!(toDate instanceof Date)) toDate = this.gfn_ToDate(toDate);
	
	var diff = (toDate.getTime() - fromDate.getTime()) / 1000;
	var sec  = diff % 60;
	var min  = nexacro.floor(diff / (60)) % 60;
	var hour = nexacro.floor(diff / (60 * 60)) % 24;
	var day  = nexacro.floor(diff / (60 * 60 * 24));
	
	return [day, hour, min, sec];
};

/**
 * @class  from 시간로부터 to 시간까지 총시간 반환 <br>
 * @param  {String} fromHour - From 시간 (hour)
 * @param  {String} toHour - To 시간 (hour)
 * @return {Number} 총시간 수
 * @example
 */
pForm.gfn_GetDiffHour = function(fromHour, toHour)
{
	var hour = 0;
	
	if (this.gfn_IsNull(fromHour)  || this.gfn_IsNull(toHour)) return 0;
	
	if (nexacro.toNumber(fromHour) >= nexacro.toNumber(toHour)) {
		hour = 24 - nexacro.toNumber(fromHour) + nexacro.toNumber(toHour);
	} else {
	   hour = nexacro.toNumber(toHour) - nexacro.toNumber(fromHour);
	}
	
	if (fromHour <= 12 && toHour >= 13) hour = hour - 1;
	return hour;
};

/**
 * @class  MiPlatform의 Time 대체함수 <br>
 * @param  N/A
 * @return {Number} 1970년 1월 1일 자정 부터 현재까지의 시간을 초로 나타낸 숫자
 * @example
 */
pForm.gfn_Time = function()
{
	var objDate = new Date();
	var time = Math.round(objDate.getTime() / 1000);
	return time;
};

/**
 * @class  MiPlatform의 Timem 대체함수 <br>
 * @param  N/A
 * @return {Number} 1970년 1월 1일 자정 부터 현재까지의 시간을 1/1000초 단위로 나타낸 숫자
 * @example
 */
pForm.gfn_Timem = function()
{
	var objDate = new Date();
	var time = objDate.getTime();
	return time;
};

/**
 * @class  양력으로된 날짜를 음력으로 변환 <br>
 * @param  {String} date - 날짜값
 * @return {String} 음력
 * @example
 */
pForm.gfn_Solar2Lunar = function(date)
{
	var ret = this._gfn_Solar2LunarBase(date);

	if (ret.valueOf().length == 9) {
		ret = ret.valueOf().substr(1,8);
	} else {
		ret = "";
	}
	
	return ret;
};

/**
 * @class  양력을 음력으로 변환해주는 함수 (처리가능 기간  1841 - 2043년) <br>
 * @param  {String} date - yyyyMMdd형태의 양력일자 (예 : "20121122")
 * @return 
 * return값이 8자리가 아니고 9자리임에 주의
 *              	- 성공 = Flag(1 Byte) + (yyyyMMdd형태의 음력일자)
 *								(Flag : 평달 = "0", 윤달 = "1")
 *   				- 실패 = "" (1841 ~ 2043 범위 오류시)
 * @example
 */
pForm._gfn_Solar2LunarBase = function(date)
{
	var sMd = "31,0,31,30,31,30,31,31,30,31,30,31";
	var arrMd = new Array();
	
	var arrBaseInfo = new Array();
	var arrDt = new Array(); 	// 매년의 음력일수를 저장할 배열 변수
	var td;					// 음력일을 계산하기 위해 양력일과의 차이를 저장할 변수
	var td1;				// 1840년까지의 날수
	var td2;				// 현재까지의 날수
	var mm;					// 임시변수
	var nLy, nLm, nLd;		// 계산된 음력 년, 월, 일을 저장할 변수
	var sLyoon;				// 현재월이 윤달임을 표시
	
	if (this.gfn_IsNull(date)) return "";
	
	sY = parseInt(date.substr(0,4), 10);
	sM = parseInt(date.substr(4,2), 10);
	sD = parseInt(date.substr(6,2), 10);
	if (sY < 1841 || sY > 2043)	return "";
	
	arrBaseInfo = this._gfn_SolarBase();
	arrMd = sMd.split(",");
	if (this.gfn_IsLeapYear(date) == true) {
		arrMd[1] = 29;
	} else {
		arrMd[1] = 28;
	}
	
	td1 = 672069; // 672069 = 1840 * 365 + 1840/4 - 1840/100 + 1840/400 + 23  //1840년까지 날수
	
	// 1841년부터 작년까지의 날수
	td2 = (sY - 1) * 365 + parseInt((sY - 1)/4) - parseInt((sY - 1)/100) + parseInt((sY - 1)/400);
	
	// 전월까지의 날수를 더함
	for (i = 0 ; i <= sM - 2 ; i++) {
		td2 = td2 + parseInt(arrMd[i]);
	}
	// 현재일까지의 날수를 더함
	td2 = td2 + sD;
	
	// 양력현재일과 음력 1840년까지의 날수의 차이
	td = td2 - td1 + 1;
	
	// 1841년부터 음력날수를 계산
	for (i = 0 ; i <= sY - 1841 ; i++) {
		arrDt[i] = 0;
		for (j = 0 ; j <= 11 ; j++) {
			switch (parseInt(arrBaseInfo[i*12 + j])) {
				case 1 : mm = 29;
					break;
				case 2 : mm = 30;
					break;
				case 3 : mm = 58;	// 29 + 29
					break;
				case 4 : mm = 59;	// 29 + 30
					break;
				case 5 : mm = 59;	// 30 + 29
					break;
				case 6 : mm = 60;	// 30 + 30
					break;
			}
			arrDt[i] = arrDt[i] + mm;
		}
	}
	
	// 1840년 이후의 년도를 계산 - 현재까지의 일수에서 위에서 계산된 1841년부터의 매년 음력일수를 빼가면수 년도를 계산
	nLy = 0;
	do {
		td = td - arrDt[nLy];
		nLy = nLy + 1;
	} while(td > arrDt[nLy]);
	
	nLm = 0;
	sLyoon = "0";			// 현재월이 윤달임을 표시할 변수 - 기본값 평달
	do {
		if (parseInt(arrBaseInfo[nLy*12 + nLm]) <= 2) {
			mm = parseInt(arrBaseInfo[nLy*12 + nLm]) + 28;
			if (td > mm) {
				td = td - mm;
				nLm = nLm + 1;
			}
			else
			break;
		} else {
			switch (parseInt(arrBaseInfo[nLy*12 + nLm])) {
				case 3 :
					m1 = 29;
					m2 = 29;
					break;
				case 4 :
					m1 = 29;
					m2 = 30;
					break;
				case 5 :
					m1 = 30;
					m2 = 29;
					break;
				case 6 :
					m1 = 30;
					m2 = 30;
					break;
			}
			
			if (td > m1) {
				td = td - m1;
				if (td > m2) {
					td = td - m2;
					nLm = nLm + 1;
				} else {
					sLyoon = "1";
				}
			} else {
				break;
			}
		}
	} while(1);
	
	nLy = nLy + 1841;
	nLm = nLm + 1;
	nLd = td;
	
	return sLyoon + nLy + this.gfn_Right("0" + nLm, 2) + this.gfn_Right("0" + nLd, 2);
};

/**
 * @class  음력을 양력으로 변환해주는 함수 (처리가능 기간  1841 - 2043년) <br>
 * @param  {String} date - Flag(1 Byte) + yyyyMMdd형태의 음력일자 (예 : "020121122")
 *						   (Flag : 평달 = "0", 윤달 = "1")
 * @return {String} 성공 = yyyyMMdd형태의 양력일자
 *					실패 = null
 *							1841 ~ 2043 범위 오류의 경우
 *							date가 9자리가 아닐경우 (8자리인 경우 앞자리에 "0" 붙임)
 *							date의 첫자리 Flag가 "0"도 아니고 "1"도 아닌 경우
 * @example
 */
pForm.gfn_Lunar2Solar = function(date)
{
	var sMd = "31,0,31,30,31,30,31,31,30,31,30,31";
	var arrMd = new Array();
	var arrBaseInfo = new Array();
	
	var nLy,nLm,nLd,sLflag;
	var nSy,nSm,nSd;
	var y1,m1,i,j,y2,y3;
	var leap;
	
	if (this.gfn_IsNull(date)) return "";
	if (date.length == 8) date = "0" + date;
	if (date.length != 9) return "";
	
	sLflag = date.substr(0, 1);
	nLy = parseInt(date.substr(1, 4), 10);
	nLm = parseInt(date.substr(5, 2), 10);
	nLd = parseInt(date.substr(7, 2), 10);
	
	if (nLy < 1841 || nLy > 2043)  return "";
	if (sLflag != "0" && sLflag != "1") return "";
	
	arrBaseInfo = this._gfn_SolarBase();
	arrMd = sMd.split(",");
	
	if (this.gfn_IsLeapYear(date.substr(1, 8)) == true) {
		arrMd[1] = 29;
	} else {
		arrMd[1] = 28;
	}
	
	y1 = nLy - 1841;
	m1 = nLm - 1;
	leap = 0;
	if (parseInt(arrBaseInfo[y1 * 12 + m1], 10) > 2) {
		leap = this.gfn_IsLeapYear(nLy + "0101");
	}
	
	var mm;
	if (leap == 1) {
		switch (parseInt(arrBaseInfo[y1 * 12 + m1], 10)) {
			case 3:
				mm = 29;
				break;
			case 4:
				mm = 30;
				break;
			case 5:
				mm = 29;
				break;
			case 6:
				mm = 30;
				break;
		}
	} else {
		switch (parseInt(arrBaseInfo[y1 * 12 + m1], 10)) {
			case 1:
				mm = 29;
				break;
			case 2:
				mm = 30;
				break;
			case 3:
				mm = 29;
				break;
			case 4:
				mm = 29;
				break;
			case 5:
				mm = 30;
				break;
			case 6:
				mm = 30;
				break;
		}
	}
	
	var td;
	td = 0;
	for (i = 0; i <= y1 - 1; i++) {
		for (j = 0; j <= 11; j++) {
			switch (parseInt(arrBaseInfo[i * 12 + j], 10)) {
				case 1:
					td = td + 29;
					break;
				case 2:
					td = td + 30;
					break;
				case 3:
					td = td + 58;
					break;
				case 4:
					td = td + 59;
					break;
				case 5:
					td = td + 59;
					break;
				case 6:
					td = td + 60;
					break;
			}
		}
	}
	
	for (j = 0; j <= m1 - 1; j++) {
		switch (parseInt(arrBaseInfo[y1 * 12 + j], 10)) {
			case 1:
				td = td + 29;
				break;
			case 2:
				td = td + 30;
				break;
			case 3:
				td = td + 58;
				break;
			case 4:
				td = td + 58;
				break;
			case 5:
				td = td + 59;
				break;
			case 6:
				td = td + 60;
				break;
		}
	}
	
	if (leap == 1) {
		switch (parseInt(arrBaseInfo[y1 * 12 + m1], 10)) {
			case 3:
				mm = 29;
				break;
			case 4:
				mm = 29;
				break;
			case 5:
				mm = 30;
				break;
			case 6:
				mm = 30;
				break;
		}
	}
	
	td = td + nLd + 22;
	
	if (sLflag == "1") {
		switch (parseInt(arrBaseInfo[y1 * 12 + m1], 10)) {
			case 3:
				td = td + 29;
				break;
			case 4:
				td = td + 30;
				break;
			case 5:
				td = td + 29;
				break;
			case 6:
				td = td + 30;
				break;
		}
	}
	
	y1 = 1840;
	do {
		y1 = y1 + 1;
		leap = this.gfn_IsLeapYear(y1 + "0101");
		
		if (leap == 1) {
			y2 = 366;
		} else {
			y2 = 365;
		}
		
		if (td <= y2) break;
		
		td = td - y2;
	} while (1);
	
	nSy = y1;
	arrMd[1] = y2 - 337;
	m1 = 0;
	do {
		m1 = m1 + 1;
		if (td <= parseInt(arrMd[m1 - 1], 10)) break;
		
		td = td - parseInt(arrMd[m1 - 1], 10);
	} while (1);
	
	nSm = m1;
	nSd = td;
	y3 = nSy;
	td = y3 * 365 + parseInt(y3 / 4, 10) - parseInt(y3 / 100, 10) + parseInt(y3 / 400, 10);
	
	for (i = 0; i <= nSm - 1; i++) {
		td = td + parseInt(arrMd[i], 10);
	}
	
	td = td + nSd;
	
	return y3 + this.gfn_Right("0" + nSm, 2) + this.gfn_Right("0" + nSd, 2);
};

/**
 * @class  윤년 여부 반환 <br>
 * @param  {String} date : yyyyMMdd형태의 날짜 (예 : "20121122")
 * @return {Boolean} date가 윤년인 경우 = true
 *					 date가 윤년이 아닌 경우 = false
 *   				 date가 입력되지 않은 경우 = false
 * @example
 */ 
pForm.gfn_IsLeapYear = function(date)
{
	var ret;
    var year = parseInt(date.substring(0, 4), 10);
	
    if ((year % 4) == 0) {
        if ((year % 100) != 0 || (year % 400) == 0) {
			ret = true;
        } else {
			ret = false;
		}
    } else {
		ret = false;
	}
	
    return ret;
};

/**
 * @class  MiPlatform ParseDateTime 대체함수 <br>
 *         입력된 값을 DateTime 형으로 전환 <br>
 * @param  {String} value
 *					지원되는 value 값은 Decimal, Object, String
 *					Decimal > 0000년 1월 1일 기준으로한 날자수로 계산할 일자 전환
 *					Object > 날짜형식을 넣으면 yyyyMMddhhmmss 형식으로 전환
 *					String > yyyyMMddhhmmss 형으로 가정한 날짜로 인식해 전환.
 * @return {String} yyyyMMddhhmmss 형식의 String 데이터
 * @example
 */
pForm.gfn_ParseDateTime = function(value)
{
	var type = typeof(value);
	var rtn;
	
	switch (type) {
		case "object" : // 날짜
			rtn = value;
			break;
			
		case "string" : // 문자열
			var yyyy = "";
			var mm = "";
			var dd = "";
			var hh = "";
			var min = "";
			var ss = "";
			
			if (value.length >= 8) {
				yyyy = value.substr(0, 4);
				mm = value.substr(4, 2);
				dd = value.substr(6, 2);
				
				// month 가 12 이상이면 00000101 리턴
				if (nexacro.toNumber(mm) > 12) {
					return "00000101";
				}
				
				// date 가 31 이상이면 00000101 리턴
				if (nexacro.toNumber(dd) > 31) {
					return "00000101";
				}
				
				if (value.length >= 10) {
					hh = value.substr(8, 2);
				} else {
					hh = "00";
				}
				
				if (value.length >= 12){
					min = value.substr(10, 2);
				} else {
					min = "00";
				}
				
				if (value.length >= 14) {
					ss = value.substr(12, 2);
				} else {
					ss = "00";
				}
				
				rtn = new Date(yyyy, mm-1, dd, hh, min, ss);
			} else {
				return "00000101";
			}
			break;
			
		case "number" :
			var nMPDate = 719528; // MiPlatform 기준 0000년 01월 01 부터 1970년 01월 01일까지 일 수
			var startDt = new Date(Number(1970), Number(01) - 1, Number(01));
			var nDay = value - nMPDate; // 입력값
			
			if (nDay.toString().indexOf(".") > -1) return "00000101"; // 실수 입력시 00000101 리턴
			
			rtn = new Date(startDt);
			rtn.setDate(rtn.getDate() + nDay);
			break;
			
		default : // date object, string, Decimal 이외는 00000101 리턴
			return "00000101";
			break;
	}
	
	var yyyy = rtn.getFullYear().toString();
	yyyy = yyyy.padLeft(4, "0"); // 년도 4자리 고정 비었을 경우 0으로 채움
	var mm = (rtn.getMonth() + 1).toString();
	var dd = rtn.getDate().toString();
	return yyyy + (mm[1] ? mm : "0" + mm[0]) + (dd[1] ? dd : "0" + dd[0]); // padding
};

/**
 * @class  MiPlatform에서 사용하던 Datetime형식으로 변환 <br>
 *         Date Type을 String으로 변환
 * @param  {String} year - 년도
 * @param  {String} month - 월
 * @param  {String} date - 일
 * @return {String} YYYYMMDD 형식의 날짜
 * @example
 */
pForm.gfn_DateTime = function(year, month, date)
{
	if (this.gfn_Trim(year.toString()).length >= 5) {
		var dateTime = new String(year);
		
		year = dateTime.substr(0,4);
		month = dateTime.substr(4,2);
		date = ((dateTime.substr(6,2) == "") ? 1 : dateTime.substr(6,2));
		var hours = ((dateTime.substr(8,2) == "") ? 0 : dateTime.substr(8,2));
		var minutes = ((dateTime.substr(10,2) == "") ? 0 : dateTime.substr(10,2));
		var seconds = ((dateTime.substr(12,2) == "") ? 0 : dateTime.substr(12,2));
		var objDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(date), parseInt(hours), parseInt(minutes), parseInt(seconds));
	} else {
		var objDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(((date == null) ? 1 : date)));
	}
	
	year = objDate.getFullYear().toString();
	month = (objDate.getMonth() + 1).toString();
	date = objDate.getDate().toString();
	
	month = month.padLeft(2, "0");
	date = date.padLeft(2, "0");
	
	return year + month + date;
};

/**
 * @class  날짜 포맷변환 함수 <br>
 * @param  {Object} objDate - Date 객체
 * @param  {String} format - 날짜 Format
 * @return {String} 반환된 날짜      
 * @example
   this.gfn_GetDateFormatString(new Date(), "%Y-%m-%d %H:%M:%S");
 */
pForm.gfn_GetDateFormatString = function(objDate, format)
{
	if (this.gfn_IsNull(format))	return "";
	
	var fullYear = String(objDate.getFullYear());
	fullYear = fullYear.substr(fullYear.length - 2, 2);
	
	format = format.toString();
	format = format.split("%Y").join(String(objDate.getFullYear()));
	format = format.split("%y").join(fullYear);
	format = format.split("%m").join(String(objDate.getMonth() + 1).padLeft(2, "0"));
	format = format.split("%d").join(String(objDate.getDate()).padLeft(2, "0"));
	format = format.split("%H").join(String(objDate.getHours()).padLeft(2, "0"));
	format = format.split("%M").join(String(objDate.getMinutes()).padLeft(2, "0"));
	format = format.split("%S").join(String(objDate.getSeconds()).padLeft(2, "0"));
	format = format.split("%s").join(String(objDate.getMilliseconds()).padLeft(3, "0"));
	
	return format;
};

//////////////////////////////////////////////////////////////////////////

/**
 * @class  각 월별 음력 기준 정보를 처리하는 함수(처리가능 기간  1841 - 2043년) <br>
 * @param  N/A
 * @return N/A
 * @example
 */ 
pForm._gfn_SolarBase = function()
{
	var kk;
	
	// 1841
	kk = "1,2,4,1,1,2,1,2,1,2,2,1,";
	kk += "2,2,1,2,1,1,2,1,2,1,2,1,";
	kk += "2,2,2,1,2,1,4,1,2,1,2,1,";
	kk += "2,2,1,2,1,2,1,2,1,2,1,2,";
	kk += "1,2,1,2,2,1,2,1,2,1,2,1,";
	kk += "2,1,2,1,5,2,1,2,2,1,2,1,";
	kk += "2,1,1,2,1,2,1,2,2,2,1,2,";
	kk += "1,2,1,1,2,1,2,1,2,2,2,1,";
	kk += "2,1,2,3,2,1,2,1,2,1,2,2,";
	kk += "2,1,2,1,1,2,1,1,2,2,1,2,";
	// 1851
	kk += "2,2,1,2,1,1,2,1,2,1,5,2,";
	kk += "2,1,2,2,1,1,2,1,2,1,1,2,";
	kk += "2,1,2,2,1,2,1,2,1,2,1,2,";
	kk += "1,2,1,2,1,2,5,2,1,2,1,2,";
	kk += "1,1,2,1,2,2,1,2,2,1,2,1,";
	kk += "2,1,1,2,1,2,1,2,2,2,1,2,";
	kk += "1,2,1,1,5,2,1,2,1,2,2,2,";
	kk += "1,2,1,1,2,1,1,2,2,1,2,2,";
	kk += "2,1,2,1,1,2,1,1,2,1,2,2,";
	kk += "2,1,6,1,1,2,1,1,2,1,2,2,";
	// 1861
	kk += "1,2,2,1,2,1,2,1,2,1,1,2,";
	kk += "2,1,2,1,2,2,1,2,2,3,1,2,";
	kk += "1,2,2,1,2,1,2,2,1,2,1,2,";
	kk += "1,1,2,1,2,1,2,2,1,2,2,1,";
	kk += "2,1,1,2,4,1,2,2,1,2,2,1,";
	kk += "2,1,1,2,1,1,2,2,1,2,2,2,";
	kk += "1,2,1,1,2,1,1,2,1,2,2,2,";
	kk += "1,2,2,3,2,1,1,2,1,2,2,1,";
	kk += "2,2,2,1,1,2,1,1,2,1,2,1,";
	kk += "2,2,2,1,2,1,2,1,1,5,2,1,";
	// 1871
	kk += "2,2,1,2,2,1,2,1,2,1,1,2,";
	kk += "1,2,1,2,2,1,2,1,2,2,1,2,";
	kk += "1,1,2,1,2,4,2,1,2,2,1,2,";
	kk += "1,1,2,1,2,1,2,1,2,2,2,1,";
	kk += "2,1,1,2,1,1,2,1,2,2,2,1,";
	kk += "2,2,1,1,5,1,2,1,2,2,1,2,";
	kk += "2,2,1,1,2,1,1,2,1,2,1,2,";
	kk += "2,2,1,2,1,2,1,1,2,1,2,1,";
	kk += "2,2,4,2,1,2,1,1,2,1,2,1,";
	kk += "2,1,2,2,1,2,2,1,2,1,1,2,";
	// 1881
	kk += "1,2,1,2,1,2,5,2,2,1,2,1,";
	kk += "1,2,1,2,1,2,1,2,2,1,2,2,";
	kk += "1,1,2,1,1,2,1,2,2,2,1,2,";
	kk += "2,1,1,2,3,2,1,2,2,1,2,2,";
	kk += "2,1,1,2,1,1,2,1,2,1,2,2,";
	kk += "2,1,2,1,2,1,1,2,1,2,1,2,";
	kk += "2,2,1,5,2,1,1,2,1,2,1,2,";
	kk += "2,1,2,2,1,2,1,1,2,1,2,1,";
	kk += "2,1,2,2,1,2,1,2,1,2,1,2,";
	kk += "1,5,2,1,2,2,1,2,1,2,1,2,";
	// 1891
	kk += "1,2,1,2,1,2,1,2,2,1,2,2,";
	kk += "1,1,2,1,1,5,2,2,1,2,2,2,";
	kk += "1,1,2,1,1,2,1,2,1,2,2,2,";
	kk += "1,2,1,2,1,1,2,1,2,1,2,2,";
	kk += "2,1,2,1,5,1,2,1,2,1,2,1,";
	kk += "2,2,2,1,2,1,1,2,1,2,1,2,";
	kk += "1,2,2,1,2,1,2,1,2,1,2,1,";
	kk += "2,1,5,2,2,1,2,1,2,1,2,1,";
	kk += "2,1,2,1,2,1,2,2,1,2,1,2,";
	kk += "1,2,1,1,2,1,2,5,2,2,1,2,";
	// 1901
	kk += "1,2,1,1,2,1,2,1,2,2,2,1,";
	kk += "2,1,2,1,1,2,1,2,1,2,2,2,";
	kk += "1,2,1,2,3,2,1,1,2,2,1,2,";
	kk += "2,2,1,2,1,1,2,1,1,2,2,1,";
	kk += "2,2,1,2,2,1,1,2,1,2,1,2,";
	kk += "1,2,2,4,1,2,1,2,1,2,1,2,";
	kk += "1,2,1,2,1,2,2,1,2,1,2,1,";
	kk += "2,1,1,2,2,1,2,1,2,2,1,2,";
	kk += "1,5,1,2,1,2,1,2,2,2,1,2,";
	kk += "1,2,1,1,2,1,2,1,2,2,2,1,";
	// 1911
	kk += "2,1,2,1,1,5,1,2,2,1,2,2,";
	kk += "2,1,2,1,1,2,1,1,2,2,1,2,";
	kk += "2,2,1,2,1,1,2,1,1,2,1,2,";
	kk += "2,2,1,2,5,1,2,1,2,1,1,2,";
	kk += "2,1,2,2,1,2,1,2,1,2,1,2,";
	kk += "1,2,1,2,1,2,2,1,2,1,2,1,";
	kk += "2,3,2,1,2,2,1,2,2,1,2,1,";
	kk += "2,1,1,2,1,2,1,2,2,2,1,2,";
	kk += "1,2,1,1,2,1,5,2,2,1,2,2,";
	kk += "1,2,1,1,2,1,1,2,2,1,2,2,";
	// 1921
	kk += "2,1,2,1,1,2,1,1,2,1,2,2,";
	kk += "2,1,2,2,3,2,1,1,2,1,2,2,";
	kk += "1,2,2,1,2,1,2,1,2,1,1,2,";
	kk += "2,1,2,1,2,2,1,2,1,2,1,1,";
	kk += "2,1,2,5,2,1,2,2,1,2,1,2,";
	kk += "1,1,2,1,2,1,2,2,1,2,2,1,";
	kk += "2,1,1,2,1,2,1,2,2,1,2,2,";
	kk += "1,5,1,2,1,1,2,2,1,2,2,2,";
	kk += "1,2,1,1,2,1,1,2,1,2,2,2,";
	kk += "1,2,2,1,1,5,1,2,1,2,2,1,";
	// 1931
	kk += "2,2,2,1,1,2,1,1,2,1,2,1,";
	kk += "2,2,2,1,2,1,2,1,1,2,1,2,";
	kk += "1,2,2,1,6,1,2,1,2,1,1,2,";
	kk += "1,2,1,2,2,1,2,2,1,2,1,2,";
	kk += "1,1,2,1,2,1,2,2,1,2,2,1,";
	kk += "2,1,4,1,2,1,2,1,2,2,2,1,";
	kk += "2,1,1,2,1,1,2,1,2,2,2,1,";
	kk += "2,2,1,1,2,1,4,1,2,2,1,2,";
	kk += "2,2,1,1,2,1,1,2,1,2,1,2,";
	kk += "2,2,1,2,1,2,1,1,2,1,2,1,";
	// 1941
	kk += "2,2,1,2,2,4,1,1,2,1,2,1,";
	kk += "2,1,2,2,1,2,2,1,2,1,1,2,";
	kk += "1,2,1,2,1,2,2,1,2,2,1,2,";
	kk += "1,1,2,4,1,2,1,2,2,1,2,2,";
	kk += "1,1,2,1,1,2,1,2,2,2,1,2,";
	kk += "2,1,1,2,1,1,2,1,2,2,1,2,";
	kk += "2,5,1,2,1,1,2,1,2,1,2,2,";
	kk += "2,1,2,1,2,1,1,2,1,2,1,2,";
	kk += "2,2,1,2,1,2,3,2,1,2,1,2,";
	kk += "2,1,2,2,1,2,1,1,2,1,2,1,";
	// 1951
	kk += "2,1,2,2,1,2,1,2,1,2,1,2,";
	kk += "1,2,1,2,4,2,1,2,1,2,1,2,";
	kk += "1,2,1,1,2,2,1,2,2,1,2,2,";
	kk += "1,1,2,1,1,2,1,2,2,1,2,2,";
	kk += "2,1,4,1,1,2,1,2,1,2,2,2,";
	kk += "1,2,1,2,1,1,2,1,2,1,2,2,";
	kk += "2,1,2,1,2,1,1,5,2,1,2,2,";
	kk += "1,2,2,1,2,1,1,2,1,2,1,2,";
	kk += "1,2,2,1,2,1,2,1,2,1,2,1,";
	kk += "2,1,2,1,2,5,2,1,2,1,2,1,";
	// 1961
	kk += "2,1,2,1,2,1,2,2,1,2,1,2,";
	kk += "1,2,1,1,2,1,2,2,1,2,2,1,";
	kk += "2,1,2,3,2,1,2,1,2,2,2,1,";
	kk += "2,1,2,1,1,2,1,2,1,2,2,2,";
	kk += "1,2,1,2,1,1,2,1,1,2,2,1,";
	kk += "2,2,5,2,1,1,2,1,1,2,2,1,";
	kk += "2,2,1,2,2,1,1,2,1,2,1,2,";
	kk += "1,2,2,1,2,1,5,2,1,2,1,2,";
	kk += "1,2,1,2,1,2,2,1,2,1,2,1,";
	kk += "2,1,1,2,2,1,2,1,2,2,1,2,";
	// 1971
	kk += "1,2,1,1,5,2,1,2,2,2,1,2,";
	kk += "1,2,1,1,2,1,2,1,2,2,2,1,";
	kk += "2,1,2,1,1,2,1,1,2,2,2,1,";
	kk += "2,2,1,5,1,2,1,1,2,2,1,2,";
	kk += "2,2,1,2,1,1,2,1,1,2,1,2,";
	kk += "2,2,1,2,1,2,1,5,2,1,1,2,";
	kk += "2,1,2,2,1,2,1,2,1,2,1,1,";
	kk += "2,2,1,2,1,2,2,1,2,1,2,1,";
	kk += "2,1,1,2,1,6,1,2,2,1,2,1,";
	kk += "2,1,1,2,1,2,1,2,2,1,2,2,";
	// 1981
	kk += "1,2,1,1,2,1,1,2,2,1,2,2,";
	kk += "2,1,2,3,2,1,1,2,2,1,2,2,";
	kk += "2,1,2,1,1,2,1,1,2,1,2,2,";
	kk += "2,1,2,2,1,1,2,1,1,5,2,2,";
	kk += "1,2,2,1,2,1,2,1,1,2,1,2,";
	kk += "1,2,2,1,2,2,1,2,1,2,1,1,";
	kk += "2,1,2,2,1,5,2,2,1,2,1,2,";
	kk += "1,1,2,1,2,1,2,2,1,2,2,1,";
	kk += "2,1,1,2,1,2,1,2,2,1,2,2,";
	kk += "1,2,1,1,5,1,2,1,2,2,2,2,";
	// 1991
	kk += "1,2,1,1,2,1,1,2,1,2,2,2,";
	kk += "1,2,2,1,1,2,1,1,2,1,2,2,";
	kk += "1,2,5,2,1,2,1,1,2,1,2,1,";
	kk += "2,2,2,1,2,1,2,1,1,2,1,2,";
	kk += "1,2,2,1,2,2,1,5,2,1,1,2,";
	kk += "1,2,1,2,2,1,2,1,2,2,1,2,";
	kk += "1,1,2,1,2,1,2,2,1,2,2,1,";
	kk += "2,1,1,2,3,2,2,1,2,2,2,1,";
	kk += "2,1,1,2,1,1,2,1,2,2,2,1,";
	kk += "2,2,1,1,2,1,1,2,1,2,2,1,";
	// 2001
	kk += "2,2,2,3,2,1,1,2,1,2,1,2,";
	kk += "2,2,1,2,1,2,1,1,2,1,2,1,";
	kk += "2,2,1,2,2,1,2,1,1,2,1,2,";
	kk += "1,5,2,2,1,2,1,2,2,1,1,2,";
	kk += "1,2,1,2,1,2,2,1,2,2,1,2,";
	kk += "1,1,2,1,2,1,5,2,2,1,2,2,";
	kk += "1,1,2,1,1,2,1,2,2,2,1,2,";
	kk += "2,1,1,2,1,1,2,1,2,2,1,2,";
	kk += "2,2,1,1,5,1,2,1,2,1,2,2,";
	kk += "2,1,2,1,2,1,1,2,1,2,1,2,";
	// 2011
	kk += "2,1,2,2,1,2,1,1,2,1,2,1,";
	kk += "2,1,6,2,1,2,1,1,2,1,2,1,";
	kk += "2,1,2,2,1,2,1,2,1,2,1,2,";
	kk += "1,2,1,2,1,2,1,2,5,2,1,2,";
	kk += "1,2,1,1,2,1,2,2,2,1,2,2,";
	kk += "1,1,2,1,1,2,1,2,2,1,2,2,";
	kk += "2,1,1,2,3,2,1,2,1,2,2,2,";
	kk += "1,2,1,2,1,1,2,1,2,1,2,2,";
	kk += "2,1,2,1,2,1,1,2,1,2,1,2,";
	kk += "2,1,2,5,2,1,1,2,1,2,1,2,";
	// 2021
	kk += "1,2,2,1,2,1,2,1,2,1,2,1,";
	kk += "2,1,2,1,2,2,1,2,1,2,1,2,";
	kk += "1,5,2,1,2,1,2,2,1,2,1,2,";
	kk += "1,2,1,1,2,1,2,2,1,2,2,1,";
	kk += "2,1,2,1,1,5,2,1,2,2,2,1,";
	kk += "2,1,2,1,1,2,1,2,1,2,2,2,";
	kk += "1,2,1,2,1,1,2,1,1,2,2,2,";
	kk += "1,2,2,1,5,1,2,1,1,2,2,1,";
	kk += "2,2,1,2,2,1,1,2,1,1,2,2,";
	kk += "1,2,1,2,2,1,2,1,2,1,2,1,";
	// 2031
	kk += "2,1,5,2,1,2,2,1,2,1,2,1,";
	kk += "2,1,1,2,1,2,2,1,2,2,1,2,";
	kk += "1,2,1,1,2,1,5,2,2,2,1,2,";
	kk += "1,2,1,1,2,1,2,1,2,2,2,1,";
	kk += "2,1,2,1,1,2,1,1,2,2,1,2,";
	kk += "2,2,1,2,1,4,1,1,2,1,2,2,";
	kk += "2,2,1,2,1,1,2,1,1,2,1,2,";
	kk += "2,2,1,2,1,2,1,2,1,1,2,1,";
	kk += "2,2,1,2,5,2,1,2,1,2,1,1,";
	kk += "2,1,2,2,1,2,2,1,2,1,2,1,";
	// 2041
	kk += "2,1,1,2,1,2,2,1,2,2,1,2,";
	kk += "1,5,1,2,1,2,1,2,2,2,1,2,";
	kk += "1,2,1,1,2,1,1,2,2,1,2,2";
	
	var arr = new Array();
	arr = kk.split(",");
	
	return arr;
};

/**
 * @class  조회조건 영역에서 날짜 조건 체크 <br>
 * @param  {Object} fromObj - From Date 컴포넌트
 * @param  {Object} toObj 	- To Date 컴포넌트
 * @param  {boolean} rFlag 	- 컴포넌트의 필수 여부
 * @return {boolean} Validation 결과
 * @example
    if( !this.gfn_CheckDateCond(this.cal_StrCrtYmd, this.cal_EndCrtYmd, true) ) {
		return false;
	}
 */
pForm.gfn_CheckDateCond = function(fromObj, toObj, rFlag)
{
	if( rFlag == true && this.gfn_IsNull(fromObj.value) ){
		this.alert("시작일자는 필수조건입니다.");
		fromObj.setFocus(true);
		return false;
	}
	
	if( rFlag == true && this.gfn_IsNull(toObj.value) ){
		this.alert("종료일자는 필수조건입니다.");
		toObj.setFocus(true);
		return false;
	}
	
	if( fromObj.value > toObj.value ){
		this.alert("시작일이 종료일 보다 클수는 없습니다.");
		fromObj.setFocus(true);
		return false;
	}
	return true;
};

/**
 * @class  날짜형식이 맞는지 확인(yyyy) <br>
 * @param  {String} yyyy - yyyy 형식의 스트링(2019) 
 * @return {boolean} Validation 결과
 * @example    
 */
pForm.gfn_IsYear = function(yyyy) 
{	
	if( this.gfn_IsNull(yyyy) ) {
		return false;
	}
	
    if( yyyy.length != 4 ) {
		return false;
	}
    
    if( !this.gfn_IsNum2(yyyy) ) {
		return false;
	}
    
    return true;
};

/**
 * @class  날짜형식이 맞는지 확인(yyyyMM) <br>
 * @param  {String} yyyyMM - yyyymm 형식의 스트링(201902) 
 * @return {boolean} Validation 결과
 * @example    
 */
pForm.gfn_IsMonth = function(yyyyMM) 
{	
	if( this.gfn_IsNull(yyyyMM) ) {
		return false;
	}
	
    if( yyyyMM.length != 6 ) {
		return false;
	}
    
    if( !this.gfn_IsNum2(yyyyMM) ) {
		return false;
	}
    
	var nMonth  = parseInt(yyyyMM.substring(4, 6), 10);
    if( nMonth < 1 || nMonth > 12 ) {
		return false;
    }        
    
    return true;
};

/**
 * @class 날짜 형식이 맞는지 확인
 * @param  sDate : yyyyMMdd형태의 날짜 ( 예 : "20121122" )
 * @return boolean 	날짜형식이 맞는 경우= true
					날짜형식이 맞지 않는 경우= false
					sDate가 입력되지 않은 경우= false
 */  
pForm.gfn_IsDate = function(sDate) 
{	
	if( this.gfn_IsNull(sDate) ) {
		return false;
	}
	
    if( sDate.length != 8 ) {
		return false;
	}
    
    if( !this.gfn_IsNum2(sDate) )
	{
		return false;
	}
    
	var nMonth  = parseInt(sDate.substring(4,6), 10);
	var nDate   = parseInt(sDate.substring(6,8), 10);
    
    if( nMonth < 1 || nMonth > 12 ) {
		return false;
    }        
        
    if( nDate < 1 || nDate > this.gfn_GetLastDay(sDate) ) {
		return false;
    }     
    return true;
};

/**
 * @class  오늘 날짜 월 반환 <br>
 * @param  {Boolean} isSeparator - 구분자 필요시 true
 * @return {String} 오늘 날짜 - "yyyyMM" 또는 "yyyy-MM"
 * @example
 *  
 */
pForm.gfn_ToMonth = function(isSeparator)
{
	var ret = "";
	var objDate = new Date();
	
	var year  = new String(objDate.getFullYear());
	var month = new String(objDate.getMonth() + 1).padLeft(2, "0");	
	var separator = "";
	
	// 구분자 확인
	if (isSeparator == true) separator = "-";
	ret =  year + separator + month;
	
	return ret;
};

/**
 * @class  오늘 날짜 년 반환 <br>
 * @return {String} 오늘 날짜 - "yyyy"
 * @example
 *  
 */
pForm.gfn_ToYear = function()
{
	var objDate = new Date();	
	return new String(objDate.getFullYear());	
};