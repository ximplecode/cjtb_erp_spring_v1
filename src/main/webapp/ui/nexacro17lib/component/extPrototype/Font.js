/**
 * 통합정보시스템 고도화 구축
 * @FileName    Font.js
 * @Creator     김동우
 * @CreateDate  2020.06.29
 * @Desction    폰트 관련 함수
 ************** 소스 수정 이력 ***********************************************
 * date                Modifier                Description
 *******************************************************************************
 * 2020.06.29          김동우                 최초 생성
 *******************************************************************************
 */

var pForm = nexacro.Form.prototype;

/**
 * @class  클라이언트에 폰트 존재 여부 확인 <br>
 * @param  {String} user_family - 폰트 명
 * @return {String} "true" / "false" - 폰트 여부를 문자열 형태로 반환
 * @example
 */
pForm._IsFontExists = function(user_family) {
		// Define our defaults
		var base = {family:'monospace', weight:'400'};
		var user = {family:'monospace', weight:'400'};

		// Overwrite our defaults with user supplied values, if required...		
		user.family = user_family;
		
		// Insert our test paragraph
		$('body').prepend('<p id="jQuery-Font-Test" style="font-family:' + base.family + ';font-size:72px;font-weight:' + base.weight + ';height:auto;left:-9999px;position:absolute;top:-9999px;visibility:hidden;width:auto;">The quick brown fox jumps over a lazy dog!@#$</p>');
		
		// Get our test paragraph's dimensions
		var baseX = $('p#jQuery-Font-Test').width();
		var baseY = $('p#jQuery-Font-Test').height();

		// Update our test paragraph with the user supplied family.weight
		$('p#jQuery-Font-Test').css({
			'font-family': (user.family + ',' + base.family),
			'font-weight': user.weight
		});

		// Get our test paragraph's dimensions, (again)
		var userX = $('p#jQuery-Font-Test').width();
		var userY = $('p#jQuery-Font-Test').height();

		// Remove our test paragraph
		$('p#jQuery-Font-Test').remove();
		
		// If the dimensions change, the font has changed(!)
		//return(((userY != baseY) || (userX != baseX))? true: false);
		return(((userY != baseY) || (userX != baseX))? 'true': 'false');

};

/**
 * @class  클라이언트에 OCR 폰트 존재 여부 확인
 * @return {boolean} true / false - Ocrb.ttf 설치 여부를 문자열 형태로 반환
 * @example
 */
pForm.gfn_IsOcrFontExists = function(){
	if(this.gfn_IsFontExists('OCR') == false){
		this.alert("OCR 폰트가 설치 되지 않았습니다.");
		var fontUrl = nexacro.getProjectPath()
					+ "font/Ocrb.TTF";
		system.execBrowser(fontUrl);
		return false;
	}
	return true;
}


/**
 * @class  클라이언트에 Combi 폰트 존재 여부 확인
 * @return {boolean} true / false - combi-7198-citrusj.ttf 설치 여부를 문자열 형태로 반환
 * @example
 */
pForm.gfn_IsCombiFontExists = function(){
	if(this.gfn_IsFontExists('CombiNumerals Open') == false){
		this.alert("Combi 폰트가 설치 되지 않았습니다.");
		var fontUrl = nexacro.getProjectPath()
					+ "font/combi-7198-citrusj.ttf";
		system.execBrowser(fontUrl);
		return false;
	}
	return true;
}
 

/**
 * @class  클라이언트에 폰트 존재 여부 확인
 * @param  {String} fontName - 폰트 명
 * @return {boolean} true / false - 폰트 설치 여부를 문자열 형태로 반환
 * @example
 */
pForm.gfn_IsFontExists = function(fontName){
	var isOcr = $(this._IsFontExists(fontName));
	if(isOcr.selector == "true")	return true;
	else							return false;
}
