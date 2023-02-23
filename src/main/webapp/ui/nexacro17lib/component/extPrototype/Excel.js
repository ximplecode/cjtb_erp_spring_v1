/**
 * 통합정보시스템 고도화 구축
 * @FileName    Excel.js
 * @Creator     UI공통
 * @CreateDate  2019.05.02
 * @Desction    Excel 관련 함수
 ************** 소스 수정 이력 ***********************************************
 * date                Modifier                Description
 *******************************************************************************
 * 2019.05.02          UI공통                 최초 생성
 *******************************************************************************
 */

var pForm = nexacro.Form.prototype;
pForm._excelThis = null;
pForm._excelCallback = "";
pForm._excelExportId = "";
pForm._excelImportId = "";

/**
 * @class Excel export <br>
 * @param {Object} pThis - Form 객체
 * @param {Object} option - JSON Object
 *                 {Object} grid            - Grid 객체
 *                 {String} title           - Excel에 표시할 제목
 *                 {String} searchCondition - 표시할 조회조건
 *                 {String} [fileName]      - Excel 파일명
 *                 {String} [sheetName]     - Excel Sheet명 (default : Sheet1)
 *                 {String} [callback]      - callback 함수
 *                 {String} [exportId]      - callback export id (callback 함수 사용시 필수)
 *				   {String} [exportMerge]	- Suppress 된 그리드 셀 항목에 대한 옵션(suppress, nosuppress, merge)
 *                 {boolean} [dsRowFlag]    - dsFlag false이면 데이터셋 데이터 존재 여부 확인 안함. 
 *                 {boolean} [progressBar]  - false이면 WaiteCursor 동작, true(default)이면 프로그래스바가 동작함.
 *                 {boolean} [lineFlag]  	- false(default)이면 라인 없고, css스타일 유지, true면 라인생기고 스타일 제거
 *                 {boolean} [dataSizeFlag] - true(default)이면 데이터 사이즈 보정, flase이면 데이터 사이즈 보정 안함.
 *                 {boolean} [zeroColDelFlag] - true(default)이면 Size가 0인 컬럼 삭제, flase이면 Size가 0인컬럼 유지 
 * @return N/A
 * @example
    [예시1]
	var option = {
		grid : this.grd_Export
		, title : "Excel Export 내역1"
		, searchCondition : "기간 : 2019-05-01 ~ 2019-05-31"
	};
	
	this.gfn_ExportExcel(this, option);
	
    [예시2]
	var option = {
		grid : this.grd_Export
		, title : "Excel Export 내역2"
		, searchCondition : "기간 : 2019-05-01 ~ 2019-05-31"
		, fileName : "Excel export 샘플"
		, callback : "fn_CallbackExcel"
		, exportId : "export2"
	};
	
	this.gfn_ExportExcel(this, option);
	
	// kjh 20200626 칼럼사이즈 조정 관련하여 엑셀 변경.
 */
pForm.gfn_ExportExcel = function(pThis, option)
{
	// 옵션 값
	var oThis 			= this.gfn_GetScriptForm(option.grid);
	//var oThis 			= pThis;
	var objGrid 		= option.grid;
	var fileName 		= option.fileName;
	var title 			= option.title;
	var searchCondition = option.searchCondition;
	var subTitleHeight 	= option.subTitleHeight;
	var dsRowFlag 		= this.gfn_Nvl(option.dsRowFlag, true);
	var exportMerge 	= this.gfn_Nvl(option.exportMerge, "suppress");	
	var progressBar		= this.gfn_Nvl(option.progressBar, true);	
	var sheetName 		= option.sheetName;
	var callback 		= option.callback;
	var exportId 		= option.exportId;
	var exportwordwrap 	= this.gfn_Nvl(option.exportwordwrap , true);	
	var lineFlag		= this.gfn_Nvl(option.lineFlag, true);
	var dataSizeFlag	= this.gfn_Nvl(option.dataSizeFlag, true);
	var zeroColDelFlag  = this.gfn_Nvl(option.zeroColDelFlag, true);
	var objDs 	 		= objGrid.getBindDataset();
	
	// kjh 20200626 칼럼사이즈 조정 관련 font 추가
	// css 설정 값을 가져올 수 없음. 만약 grid css 변경시 동일하게 변경해야 사이즈조정됨.
	// 디폴트 css 설정은 normal 12px Malgun Gothic 이지만 해당 font로 적용시 칼럼 사이즈가 정확하게 보정되지 않음.
	// px단위에서 pt단위로 변경하여 폰트 사이즈를 크게 잡아서 칼럼 사이즈 조정처리함.
	//var font = 'normal 12px Malgun Gothic';
	var font = 'normal 12pt Malgun Gothic';
	
	// 2. null 확인
	if( this.gfn_IsNull(objGrid) ) {
		this.alert("출력대상이 없습니다.");
		return;
	}
	
	if( this.gfn_IsNull(title) && this.gfn_IsNull(fileName) ) {
		this.alert("엑셀 제목(title) 및 엑셀파일 이름(fileName)을 지정해 주세요.");
		return;
	}
	
	if ( dsRowFlag == true && (this.gfn_IsNull(objDs) || objDs.rowcount == 0)) {
		this.alert("출력대상이 없습니다.");
		return;
	}
	
	// 파일명이 없는 경우 title 사용
	fileName = this.gfn_IsNull(fileName) ? this.gfn_Today() + "_" + title : fileName; 
	sheetName = this.gfn_IsNull(sheetName) ? "Sheet1" : sheetName;
	
	// 3. 특수문자 확인
	var regExp = /[?*:\/\[\]]/g; // (엑셀에서 지원하지않는 모든 문자)
	fileName = fileName.replace(regExp, ""); // 파일명에 특수문자 제거
	sheetName = sheetName.replace(regExp, ""); // Sheet명에 특수문자 제거
	
	if( String(sheetName).length > 30 ) {
		sheetName = "Sheet1"; // sheetName 30 이상 인 경우 기본시트명
	}
	
	if( !progressBar ) {
		oThis.setWaitCursor(true, true);
	}
	
	// 5. Export 객체 생성	
	var objExport = oThis.objects["_xlsExport"];	
	if( !this.gfn_IsNull(objExport) ) {
		objExport.destroy();		
	} 	
	objExport = new ExcelExportObject();
	oThis.addChild("_xlsExport", objExport);
	
	pForm._excelThis = pThis;
	
	if( this.gfn_IsNull(callback) ) {
		pForm._excelCallback = "";
		pForm._excelExportId = "";
	} 
	else {
		pForm._excelCallback = callback;
		pForm._excelExportId = exportId;
	}
	
	objExport.set_exporturl("svcUrl::XExportImport.do");
	objExport.set_exportfilename(fileName);	
	objExport.set_exporttype(nexacro.ExportTypes.EXCEL2007);
	objExport.set_exporteventtype("itemrecord"); 	
	if( progressBar ) {		
		objExport.set_exportuitype("exportprogress");
	}
	else {		
		objExport.set_exportuitype("none");
	}
	
 	objExport.set_exportmessageprocess("%d 번째 Grid, %d 줄 / %d 전체");
	objExport.set_commdataformat("ssv"); // xml, ssv, csv
	objExport.addEventHandler("onsuccess"	, this._gfn_ExportOnsuccess	, oThis);	
	objExport.addEventHandler("onerror"		, this._gfn_ExportOnerror	, oThis);	
	objExport.set_exportwordwrap( exportwordwrap );	
	
	// addExportItem 옵션
	var constExportItemType = nexacro.ExportItemTypes.GRID;
	var exportSource 		= objExport;
	var range 				= sheetName + "!A1";
	var exportHead 			= "allband";
	var exportSelect 		= "allrecord";
	var exportMerge 		= exportMerge;	
	var exportValue 		= "allstyle";
	var exportImage 		= "image";
	var exceptStyle 		= "none";	
	var exportSize 			= "width";
	var arrCellIndex 		= [];
	var includeTitle 		= false;
	
	// 6. Body용 Grid	
	var objExcelGrid = oThis.components["objExcelGrid"];
	if( !this.gfn_IsNull(objExcelGrid) ) {
		objExcelGrid.destroy();
		objExcelGrid = null;
	}
	objExcelGrid = new Grid();
	objExcelGrid.init("objExcelGrid", 0, 0, 100, 100);
	objExcelGrid.set_visible(false);	
	oThis.addChild("objExcelGrid", objExcelGrid);
	objExcelGrid.show();
	
	// 바디 그리드 로직 시작
	objExcelGrid.set_enableredraw(false);
	
	objExcelGrid.set_formats("");
	var strFormats = "<Formats>\n";
	strFormats    += objGrid.getCurFormatString();	
	strFormats    += "</Formats>\n";	
	objExcelGrid.set_formats(strFormats);
	objExcelGrid.set_binddataset(objDs);
	
	var hColCnt = objExcelGrid.getCellCount("head");
	var bColCnt = objExcelGrid.getCellCount("body");
		
	// 초기화
	for( var i=0; i < objExcelGrid.getFormatColCount(); i++ ) {	
		objExcelGrid.setFormatColProperty(i, "band", "body");
		if( objExcelGrid.getCellProperty("body", i, "edittype") == "mask" && !this.gfn_IsNull(objExcelGrid.getCellProperty("body", i, "maskeditformat")) ) {
			var cmask = objExcelGrid.getCellProperty("body", i, "maskeditformat");
			cmask = cmask.replace("!", "");
			cmask = cmask.replace("9", "#");
			objExcelGrid.setCellProperty("body", i, "maskeditformat", cmask);
		}
	}

	//그리드 실선 추가.
	// head
	for( var i=0, cnt=objExcelGrid.getCellCount("head"); i<cnt; i++ ) {
		objExcelGrid.setCellProperty("head", i, "border", "2px solid black");
	}
	// body
	for( var i=0, cnt=objExcelGrid.getCellCount("body"); i<cnt; i++ ) {
		objExcelGrid.setCellProperty("body", i, "border", "2px solid black");
	}
	// summary
	for( var i=0, cnt=objExcelGrid.getCellCount("summary"); i<cnt; i++ ) {
		objExcelGrid.setCellProperty("summary", i, "border", "2px solid black");
	}
	
	// 헤더 Sort 표시 제거
	for( var i=nexacro.toNumber(hColCnt) - 1; i>=0; i-- ) {
		var sText = objGrid.getCellProperty("head", i, "text") ;
		if( !this.gfn_IsNull(sText) ) {
			sText = new String(sText);
			sText.replace(nexacro.Form.prototype.SORT_ASC_MARK , "");
			sText.replace(nexacro.Form.prototype.SORT_DESC_MARK, "");
			objExcelGrid.setCellProperty("head", i, "text", sText);
		}
	}
	
	// 셀 넓이 보정 로직 시작
	// 1000건 기준으로 셀넓이를 보정해줌. -> 데이터가 많으면 너무 오래 걸림.
	var maxRow = 1000;
	if( dataSizeFlag == true  ) {
		// 칼럼 loop
		for( var cell =0; cell < objExcelGrid.getFormatColCount(); cell++ ) {	
			
			// Column의 Width가 0이면 제외.
			if(  objExcelGrid.getFormatColSize( cell ) <= 0 ) continue;
			
			// 실제 칼럼 사이즈
			var colSize = objExcelGrid.getRealColSize(cell);
		
			// row loop
			for( var row = 0 ; row < objExcelGrid.rowcount; row++){
				if( row > maxRow ) break;
				
				// 그리드 텍스트 값
				var strText = new String(objExcelGrid.getCellText( row, cell ));
				// 칼럼 사이즈 계산
				var sizeObj = nexacro.getTextSize( strText, font );
				// 가로사이즈
				var size = sizeObj.nx; 

				if( colSize < size ) colSize = size;
			}
			objExcelGrid.setFormatColProperty(cell, "size", colSize);
		}
	}
	// 셀 넓이 보정 로직 끝
	
	objExcelGrid.set_enableredraw(true);
	// 바디 그리드 로직 끝
	
	// 7. 제목(title)용 Grid	
	if( !this.gfn_IsNull(title) ) {
		var objTitleGrid = oThis.components["_grd_Export"];
		if( !this.gfn_IsNull(objTitleGrid) ) {
			objTitleGrid.destroy();
			objTitleGrid = null;
		}
		
		objTitleGrid = new Grid();
		objTitleGrid.init("_grd_Export", 0, 0, objExcelGrid.getOffsetWidth(), 100, null, null);
		oThis.addChild("_grd_Export", objTitleGrid);
		objTitleGrid.set_visible(false);		
		objTitleGrid.show();
		
		// title row
		objTitleGrid.appendContentsRow("head");
		
		var colCount = objExcelGrid.getFormatColCount() - 1;
		
		// column 추가
		for( var i = 0; i < colCount; i++ ) {
			objTitleGrid.appendContentsCol("head");
			
			//그리드 타이틀용이 아닌 헤더에 대한 최소 min 값 조정( 헤더가 두줄로 나옴방지 )
			var headMinSize = nexacro.getTextSize(objExcelGrid.getCellPropertyValue(-1, i,"text"),font).nx ;	// nx속성에 텍스트의 가로크기가 저장됩니다.
			
			// kjh 20200626 autofittype col 로직 제외 및 체크오류 수정 objExcelGrid -> objGrid
			//autofittype 이 col 또는  피벗그리드가 아니고 헤드가 두줄이상 아닌경우
// 			if( objExcelGrid.autofittype != "col" 
// 				&& objExcelGrid.name != "grdPivot" 
// 				&& !(objExcelGrid.getCellCount("head") > objExcelGrid.getFormatColCount()) ) 
			if( objGrid.name != "grdPivot" 
				&& !(objExcelGrid.getCellCount("head") > objExcelGrid.getFormatColCount()) ) 
			{
				if( objExcelGrid.getRealColSize( i ) != 0  && (  objExcelGrid.getRealColSize( i ) < headMinSize  ) ) {
					objExcelGrid.setRealColSize( "body", i,  headMinSize, false );
				}
			}
		}
		
		objTitleGrid.appendContentsRow("head"); // 조회조건 row
		objTitleGrid.appendContentsRow("head"); // 출력일자 row
		objTitleGrid.appendContentsRow("head"); // blank row
		
		// merge column
		objTitleGrid.mergeContentsCell("head", 0, 0, 0, colCount, 0, false);
		objTitleGrid.mergeContentsCell("head", 1, 0, 1, colCount, 1, false);
		objTitleGrid.mergeContentsCell("head", 2, 0, 2, colCount, 2, false);
		objTitleGrid.mergeContentsCell("head", 3, 0, 3, colCount, 3, false);
		
		objTitleGrid.set_autofittype("col");
		
		// 제목, 조건, 출력일자
		objTitleGrid.setCellProperty("head", 0, "text", title);
		objTitleGrid.setCellProperty("head", 1, "text", searchCondition);
		objTitleGrid.setCellProperty("head", 2, "text", "출력일자 : " + this.gfn_Today(true));
		
		if( this.gfn_IsNull(subTitleHeight) ) {
			objTitleGrid.setFormatRowProperty(1, "size", 60);		
		} 
		else {
			objTitleGrid.setFormatRowProperty(1, "size", subTitleHeight);	
		}
		
		// cssclass
		for( var i=objTitleGrid.getFormatColCount()-1; i>=0; i-- ) {
			objTitleGrid.setCellProperty("head", i, "cssclass", "CellExportBody");
		}
		
		objTitleGrid.setCellProperty("head", 0, "cssclass", "cellExpTitle");
		objTitleGrid.setCellProperty("head", 1, "cssclass", "cellExpLeft");
		objTitleGrid.setCellProperty("head", 2, "cssclass", "cellExpRight");
		objTitleGrid.setCellProperty("head", 3, "cssclass", "cellExpBlank");
		objTitleGrid.setFormatRowProperty(3, "size", 6);		
				
		// Title Grid
		range = sheetName + "!A1";
		objExport.addExportItem(constExportItemType
							  , objTitleGrid
							  , range
							  , exportHead
							  , exportSelect
							  , exportMerge
							  , exportValue
							  , exportImage
							  , exceptStyle
							  , "both"
							  , arrCellIndex);		
		includeTitle = true;
	}
	
	// 8. Export Grid
	range = sheetName + (includeTitle ? "!A5" : "!A1");
	objExport.addExportItem(constExportItemType
						  , objExcelGrid
						  , range
						  , exportHead
						  , exportSelect
						  , exportMerge
						  , exportValue
						  , exportImage
						  , exceptStyle
						  , exportSize
						  , arrCellIndex
						  );
	var result = objExport.exportData();
	
	return result;
};

/**
 * @class Excel export CSV용 <br>
 * @param {Object} pThis - Form 객체
 * @param {Object} option - JSON Object
 *                 {Object} grid            - Grid 객체  
 *                 {String} [fileName]      - Excel 파일명 
 *                 {String} [sheetName]     - Excel Sheet명 (default : Sheet1)
 *                 {String} [callback]      - callback 함수 
 *                 {String} [exportId]      - callback export id (callback 함수 사용시 필수)
 *				   {String} [exportMerge]	- Suppress 된 그리드 셀 항목에 대한 옵션(suppress, nosuppress, merge)  
 * @return N/A
 * @example
    [예시1]
	var option = {
		grid : this.grd_Export		
	};
	
	this.gfn_ExportExcelCsv(this, option);
	
    [예시2]
	var option = {
		grid : this.grd_Export		
		, fileName : "Excel export 샘플"
		, callback : "fn_CallbackExcel"
		, exportId : "export2"
	};
	
	this.gfn_ExportExcelCsv(this, option);
 */
pForm.gfn_ExportExcelCsv = function(pThis, option)
{
	// 1. 변수 선언
	var oThis 			= pThis;
	var objGrid 		= option.grid;
	var fileName 		= option.fileName;
	var title 			= option.title;
	var searchCondition = option.searchCondition;
	var subTitleHeight 	= option.subTitleHeight;
	var dsRowFlag 		= this.gfn_Nvl(option.dsRowFlag, true);
	var exportMerge 	= this.gfn_Nvl(option.exportMerge, "suppress");	
	
	// [option]
	var sheetName = this.gfn_Nvl(option.sheetName, "Sheet1");
	var callback = option.callback;
	var exportId = option.exportId;
	var exportwordwrap = this.gfn_Nvl(option.exportwordwrap , true);
	
	// 2. null 확인
	if (this.gfn_IsNull(objGrid)) {
		this.alert("출력대상이 없습니다.");
		return;
	}
	
	if ( this.gfn_IsNull(fileName) ) {
		this.alert("fileName을 입력하세요.");
		return;
	}
	
	// 3. 특수문자 확인
	var regExp = /[?*:\/\[\]]/g; 				// (엑셀에서 지원하지않는 모든 문자)
	fileName = fileName.replace(regExp, ""); 	// 파일명에 특수문자 제거	
	
	oThis.setWaitCursor(true, true);
	
	// 4. callback 처리
	if (this.gfn_IsNull(callback)) {
		pForm._excelCallback = "";
		pForm._excelExportId = "";
	} else {
		pForm._excelCallback = callback;
		pForm._excelExportId = exportId;
	}
	
	// 5. Export 객체 생성
	var exportName = "_xlsExport";
	var objExport = oThis.objects[exportName];
	
	if (this.gfn_IsNull(objExport)) {
		objExport = new ExcelExportObject();
		oThis.addChild(exportName, objExport);
	} else {
		objExport.clear();
	}
	
	pForm._excelThis = oThis;	
	objExport.set_exporturl("svcUrl::XExportImport.do");
	objExport.set_exportfilename(fileName);
	objExport.set_exporttype(nexacro.ExportTypes.CSV);	
	objExport.set_exporteventtype("itemrecord"); 	
	objExport.set_exportuitype("none");
 	objExport.set_exportmessageprocess("%d 번째 Grid, %d 줄 / %d 전체");
	objExport.set_commdataformat("ssv"); // xml, ssv, csv
	objExport.addEventHandler("onsuccess", this._gfn_ExportOnsuccess, oThis);	
	objExport.addEventHandler("onerror", this._gfn_ExportOnerror, oThis);	
	objExport.set_exportwordwrap( exportwordwrap );
	
	// addExportItem 옵션
	var constExportItemType = nexacro.ExportItemTypes.GRID;
	var exportSource = objGrid;
	var range = sheetName + "!A1";
	var exportHead = "allband";
	var exportSelect = "allrecord";
	var exportMerge = exportMerge;
	var exportValue = "allstyle";
	var exportImage = "image";
	var exceptStyle = "none";
	var exportSize = "";
	var arrCellIndex = [];
	var includeTitle = false;
	
	// 7. Export Grid	
	objExport.addExportItem(constExportItemType, objGrid, range, exportHead, exportSelect, exportMerge
							, exportValue, exportImage, exceptStyle, exportSize, arrCellIndex);
	
	var result = objExport.exportData();	
	return result;
};

/**
 * @class Excel export <br>
 * @param {Object} pThis - Form 객체
 * @param {Object} option - JSON Object
 *                 {Array} arrGrid          - Grid 배열
 *                 {Array} arrGridTitle     - Grid 타이틀 배열
 *                 {String} title           - Excel에 표시할 제목
 *                 {String} searchCondition - 표시할 조회조건
 *                 {String} [fileName]      - Excel 파일명
 *                 {String} [sheetName]     - Excel Sheet명 (default : Sheet1)
 *                 {String} [callback]      - callback 함수
 *                 {String} [exportId]      - callback export id (callback 함수 사용시 필수)
 * @return N/A
 * @example
    [예시1]
	var option = {
		arrGrid : [
			  this.grd_Export1
			, this.grd_Export2
			, this.pivot_List.getPivotGrid() // Pivot의 Grid 객체 가져오기
			, this.grd_Export3
		]
		, arrGridTitle : ["그리드 샘플1", "그리드 샘플2", "그리드 샘플3", "그리드 샘플4"]
		, title : "Excel 다중 Export 내역1"
		, searchCondition : "기간 : 2019-05-01 ~ 2019-05-31"
   };
	
	this.gfn_ExportsExcel(this, option);
 */
//멀티그리드 다운로드
pForm.gfn_ExportsExcel = function(pThis, option)
{
	
	// 1. 변수 선언
	var oThis = pThis;
	var arrGrid = option.arrGrid;
	var arrGridTitle = option.arrGridTitle;
	var fileName = option.fileName;
	var title = option.title;	
	var searchCondition = option.searchCondition;
	var subTitleHeight = option.subTitleHeight;
	
	// [option]
	var sheetName = option.sheetName;
	var callback = option.callback;
	var exportId = option.exportId;
	
	// 2. null 확인
	if (this.gfn_IsNull(arrGrid)) return;
	if (this.gfn_IsNull(title) && this.gfn_IsNull(fileName)) return;
	
	fileName = this.gfn_IsNull(fileName) ? this.gfn_Today() + "_" + title : fileName; // 파일명이 없는 경우 title 사용
	sheetName = this.gfn_IsNull(sheetName) ? "Sheet1" : sheetName;
	
	// 3. 특수문자 확인
	var regExp = /[?*:\/\[\]]/g; // (엑셀에서 지원하지않는 모든 문자)
	fileName = fileName.replace(regExp, ""); // 파일명에 특수문자 제거
	sheetName = sheetName.replace(regExp, ""); // Sheet명에 특수문자 제거

	if (String(sheetName).length > 30) {
		sheetName = "Sheet1"; // sheetName 30 이상 인 경우 기본시트명
	}
	
	// 4. callback 처리
	if (this.gfn_IsNull(callback)) {
		pForm._excelCallback = "";
		pForm._excelExportId = "";
	} else {
		pForm._excelCallback = callback;
		pForm._excelExportId = exportId;
	}
	
	// 5. Export 객체 생성
	var exportName = "_xlsExport";
	var objExport = oThis.objects[exportName];
	
	if (this.gfn_IsNull(objExport)) {
		objExport = new ExcelExportObject();
		oThis.addChild(exportName, objExport);
	} else {
		objExport.clear();
	}
	
	pForm._excelThis = oThis;
	objExport.set_exporturl("svcUrl::XExportImport.do");
	objExport.set_exportfilename(fileName);
	objExport.set_exporttype(nexacro.ExportTypes.EXCEL2007);
	objExport.set_exporteventtype("itemrecord");
	objExport.set_exportuitype("none");
 	objExport.set_exportmessageprocess("%d 번째 Grid, %d 줄 / %d 전체");
	objExport.set_commdataformat("ssv"); // xml, ssv, csv
	objExport.addEventHandler("onsuccess", this._gfn_ExportOnsuccess, oThis);	
	objExport.addEventHandler("onerror", this._gfn_ExportOnerror, oThis);	
	
	// addExportItem 옵션
	var constExportItemType = nexacro.ExportItemTypes.GRID;	
	var exportHead 			= "allband";
	var exportSelect 		= "allrecord";
	var exportMerge 		= "suppress";
	var exportValue 		= "allstyle";
	var exportImage 		= "image";
	var exceptStyle 		= "none";
	var exportSize 			= "";
	var arrCellIndex 		= [];
	var includeTitle 		= false;
	
	// 6. 제목(title)용 Grid	
	var grdWidth = 0;
	var colCount = 0;
	

	for (var i = 0; i < arrGrid.length; i++) {
		if (arrGrid[i].getOffsetWidth() > grdWidth) grdWidth = arrGrid[i].getOffsetWidth();
		if (arrGrid[i].getFormatColCount() > colCount) colCount = arrGrid[i].getFormatColCount();
	}
	
	var grdNm = title;
				
	 objTitleGrid = oThis.components[grdNm];
	if (this.gfn_IsNull(objTitleGrid)) {
		
		objTitleGrid = new Grid();
		objTitleGrid.init(grdNm, 0, 0, grdWidth, 100, null, null);
		oThis.addChild(grdNm, objTitleGrid);
		objTitleGrid.set_visible(false);
		objTitleGrid.set_border("0px none");
		objTitleGrid.show();
	
	}
	
	// FormatClear 
	objTitleGrid.set_formats("<Formats><Format id='default'/></Formats>");
	
	// title row
	objTitleGrid.appendContentsRow("head");
	
	colCount = colCount - 1;
	// column 추가
	for (var i = 0; i < colCount; i++) {
		objTitleGrid.appendContentsCol("head");
	}
	
	objTitleGrid.appendContentsRow("head"); // 조회조건 row
	objTitleGrid.appendContentsRow("head"); // 출력일자 row
	objTitleGrid.appendContentsRow("head"); // blank row
	
	// merge column
	objTitleGrid.mergeContentsCell("head", 0, 0, 0, colCount, 0, false);
	objTitleGrid.mergeContentsCell("head", 1, 0, 1, colCount, 1, false);
	objTitleGrid.mergeContentsCell("head", 2, 0, 2, colCount, 2, false);
	objTitleGrid.mergeContentsCell("head", 3, 0, 3, colCount, 3, false);
	
	objTitleGrid.set_autofittype("col");
	
	
	// 제목, 조건, 출력일자
	objTitleGrid.setCellProperty("head", 0, "text", title);

	objTitleGrid.setCellProperty("head", 1, "text", searchCondition);
	objTitleGrid.setCellProperty("head", 2, "text", "출력일자 : " + this.gfn_Today(true));
	
	if(this.gfn_IsNull(subTitleHeight)){ 			
		objTitleGrid.setFormatRowProperty(1, "size", 60);		
	} else {
		objTitleGrid.setFormatRowProperty(1, "size", subTitleHeight);	
	}
	
	// cssclass
	objTitleGrid.setCellProperty("head", 0, "cssclass", "cell_expTitle");
	objTitleGrid.setCellProperty("head", 1, "cssclass", "cell_expLeft");
	objTitleGrid.setCellProperty("head", 2, "cssclass", "cell_expRight");
	objTitleGrid.setCellProperty("head", 3, "cssclass", "cell_expBlank");
	
	
	// Title Grid
	nTitleStartRow = 2;  //그리드 타이틀 시작행
	
	var range = sheetName + "!A" + nTitleStartRow; //그리드 타이틀 시작행
	
	objExport.addExportItem(constExportItemType, objTitleGrid, range, exportHead, exportSelect, exportMerge
							, exportValue, exportImage, exceptStyle, "both", arrCellIndex);
	
	//상단 제목용 그리드
	var objTitleGrid;
	
	var nTitleStartRow = 0 ; //상단 제목 타이틀 시작행
	var nNextStartRow = 0 ; //그리드 제목 타이틀 시작행
	var nGridStartRow = 0 ; //그리드시작행

	//for (var i = 0; i < 2; ++) {
	if(!this.gfn_IsNull(arrGridTitle)&&arrGridTitle.length>0){  //그리드 타이틀이 있는 경우
		for (var j = 0; j < arrGridTitle.length; j++) {
			
			var title = arrGridTitle[j];
			
			if (!this.gfn_IsNull(title)) {
				var grdWidth = 0;
				var colCount = 0;
				
				for (var i = 0; i < arrGrid.length; i++) {
					if (arrGrid[i].getOffsetWidth() > grdWidth) grdWidth = arrGrid[i].getOffsetWidth();
					if (arrGrid[i].getFormatColCount() > colCount) colCount = arrGrid[i].getFormatColCount();
				}
							
				var grdNm = title;
							
				 objTitleGrid = oThis.components[grdNm];
				if (this.gfn_IsNull(objTitleGrid)) {
					
					objTitleGrid = new Grid();
					objTitleGrid.init(grdNm, 0, 0, grdWidth, 100, null, null);
					oThis.addChild(grdNm, objTitleGrid);
					objTitleGrid.set_visible(false);
					objTitleGrid.set_border("0px none");
					objTitleGrid.show();
				
				}
				
				// FormatClear 
				objTitleGrid.set_formats("<Formats><Format id='default'/></Formats>");
				
				// title row
				objTitleGrid.appendContentsRow("head");
				
				colCount = colCount - 1;
				// column 추가
				for (var i = 0; i < colCount; i++) {
					objTitleGrid.appendContentsCol("head");
				}
				
				/*
				objTitleGrid.appendContentsRow("head"); // 조회조건 row
				objTitleGrid.appendContentsRow("head"); // 출력일자 row
				objTitleGrid.appendContentsRow("head"); // blank row
				*/
				// merge column
				objTitleGrid.mergeContentsCell("head", 0, 0, 0, colCount, 0, false);
				objTitleGrid.mergeContentsCell("head", 1, 0, 1, colCount, 1, false);
				objTitleGrid.mergeContentsCell("head", 2, 0, 2, colCount, 2, false);
				objTitleGrid.mergeContentsCell("head", 3, 0, 3, colCount, 3, false);
				
				objTitleGrid.set_autofittype("col");				
				
				// 제목, 조건, 출력일자		
				objTitleGrid.setCellProperty("head", 0, "text", arrGridTitle[j]);
							
				// Title Grid
				//range = sheetName + "!A1";
				if(j==0){ //첫번째 그리드 row 시작행
					nTitleStartRow = j+7;  //그리드 타이틀 시작행
					
				} else { //두번째이상 그리드 row 시작행
					
					nTitleStartRow = nNextStartRow;					
				}
				
				var range = sheetName + "!A" + nTitleStartRow; //그리드 타이틀 시작행

				objExport.addExportItem(constExportItemType, objTitleGrid, range, exportHead, exportSelect, exportMerge
										, exportValue, exportImage, exceptStyle, exportSize, arrCellIndex);
				
				
				if(j==0){
					objTitleGrid.setCellProperty("head", 0, "cssclass", "cell_expLeft");
					 nGridStartRow = 4+5; //그리드 row 시작행
				} else {	
					objTitleGrid.setCellProperty("head", 0, "cssclass", "cell_expLeft");
					nGridStartRow  = nTitleStartRow + 2;
				}
				
				nNextStartRow = 3 + nGridStartRow + arrGrid[j].rowcount;
						
				objExport.addExportItem(constExportItemType, arrGrid[j], sheetName +"!A"+nGridStartRow, exportHead, exportSelect, exportMerge
								, exportValue, exportImage, exceptStyle, exportSize, arrCellIndex);
							
			}

		}
	} else {  //그리드 타이틀이 없는 경우
	
		for (var j = 0; j < arrGrid.length; j++) {
			
				if(j==0){
					nTitleStartRow = j+7;  //그리드 타이틀 시작행					
				} else {					
					nTitleStartRow = nNextStartRow;					
				}
				
				// Title Grid
				//range = sheetName + "!A1";
				if(j==0){  //첫번째 그리드 row 시작행
					 nGridStartRow = 4+5;					
				} else { //두번째이상 그리드 row 시작행
						nGridStartRow  = nTitleStartRow + 2;
				}
				
				nNextStartRow = 3 + nGridStartRow + arrGrid[j].rowcount;
				objExport.addExportItem(constExportItemType, arrGrid[j], sheetName +"!A"+nGridStartRow, exportHead, exportSelect, exportMerge
								, exportValue, exportImage, exceptStyle, exportSize, arrCellIndex);							
		}
	}
	
	var result = objExport.exportData();
	return result;
};

/**
 * @class Excel export <br>
 * @param {Object} pThis - Form 객체
 * @param {Object} option - JSON Object
 *                 {Array} arrGrid          - Grid 배열
 *                 {Array} arrSheetName     - Grid 타이틀 배열
 *                 {Array} arrGridTitle     - Grid 타이틀 배열
 *                 {String} title           - Excel에 표시할 제목
 *                 {String} searchCondition - 표시할 조회조건
 *                 {String} [fileName]      - Excel 파일명
 *                 {String} [sheetName]     - Excel Sheet명 (default : Sheet1)
 *                 {String} [callback]      - callback 함수
 *                 {String} [exportId]      - callback export id (callback 함수 사용시 필수)
 * @return N/A
 * @example
    [예시1]
	var option = {
		arrGrid : [
				   this.tab_00.Tabpage1.form.grd_EmpGoalList
				  ,this.tab_00.Tabpage2.form.grd_Export21
				  ,this.tab_00.Tabpage3.form.grd_Export31
				  ,this.tab_00.Tabpage4.form.grd_Export41
				  ]
		 ,arrSheetName : [ "사원평가목록"  ,"그리드2"  ,"그리드3"  ,"그리드4"]
		, arrGridTitle : ["그리드 타이틀1" , "그리드 타이틀2" , "그리드 타이틀3" , "그리드 타이틀4"]
		, title : "Excel 다중 Export 내역1"			   
		, searchCondition : "기간 : 2019-05-01 ~ 2019-05-31"
		, fileName : "Excel 탭 다운로드"
		, callback : "fn_CallbackExcel"
		, exportId : "export4"
	};
	
	this.gfn_ExportsTabExcelBySheet(this, option);
 */
//탭 그리드 엑셀 다운로드
pForm.gfn_ExportsTabExcelBySheet = function(pThis, option)
{
	
	// 1. 변수 선언
	var oThis = pThis;
	
	var arrGrid = option.arrGrid;
	var arrGridTitle = option.arrGridTitle;
	var fileName = option.fileName;
	var title = option.title;	
	var searchCondition = option.searchCondition;
	
	// [option]
	var arrSheetName = option.arrSheetName;
	var callback = option.callback;
	var exportId = option.exportId;
	
	// 2. null 확인
	if (this.gfn_IsNull(arrGrid)) return;
	if (this.gfn_IsNull(title) && this.gfn_IsNull(fileName)) return;
	
	fileName = this.gfn_IsNull(fileName) ? this.gfn_Today() + "_" + title : fileName; // 파일명이 없는 경우 title 사용
	//sheetName = this.gfn_IsNull(arrSheetName) ? "Sheet1" : sheetName;
	
	// 3. 특수문자 확인
	var regExp = /[?*:\/\[\]]/g; // (엑셀에서 지원하지않는 모든 문자)
	fileName = fileName.replace(regExp, ""); // 파일명에 특수문자 제거
	//sheetName = sheetName.replace(regExp, ""); // Sheet명에 특수문자 제거

	//if (String(sheetName).length > 30) {
		//sheetName = "Sheet1"; // sheetName 30 이상 인 경우 기본시트명
	//}
	
	// 4. callback 처리
	if (this.gfn_IsNull(callback)) {
		pForm._excelCallback = "";
		pForm._excelExportId = "";
	} else {
		pForm._excelCallback = callback;
		pForm._excelExportId = exportId;
	}
	
	// 5. Export 객체 생성
	var exportName = "_xlsExport";
	var objExport = oThis.objects[exportName];
	
	if (this.gfn_IsNull(objExport)) {
		objExport = new ExcelExportObject();
		oThis.addChild(exportName, objExport);
	} else {
		objExport.clear();
	}
	
	pForm._excelThis = oThis;
	objExport.set_exporturl("svcUrl::XExportImport.do");
	objExport.set_exportfilename(fileName);
	objExport.set_exporttype(nexacro.ExportTypes.EXCEL2007);
	objExport.set_exporteventtype("itemrecord");
	//objExport.set_exportuitype("none");
	objExport.set_exportuitype("exportprogress");
	objExport.set_exportmessageprocess("%d [ %d / %d ]");
 	objExport.set_exportmessageprocess("%d 번째 Grid, %d 줄 / %d 전체");
	objExport.set_commdataformat("ssv"); // xml, ssv, csv
	objExport.addEventHandler("onsuccess", this._gfn_ExportOnsuccess, oThis);	
	objExport.addEventHandler("onerror", this._gfn_ExportOnerror, oThis);	
	
	// addExportItem 옵션
	var constExportItemType = nexacro.ExportItemTypes.GRID;
	//var exportSource = arrGrid;
	//var range = sheetName + "!A1";
	var exportHead = "allband";
	var exportSelect = "allrecord";
	var exportMerge = "suppress";
	var exportValue = "allstyle";
	var exportImage = "image";
	var exceptStyle = "none";
	var exportSize = "both";
	var arrCellIndex = [];
	var includeTitle = false;
	
	var sheetName ;
	var objTitleGrid;
	for(j=0;j<arrGrid.length;j++){		
	
		var grdWidth = 0;
		var colCount = 0;
		
		
		//for (var i = 0; i < arrGrid.length; i++) {
			if (arrGrid[j].getOffsetWidth() > grdWidth) grdWidth = arrGrid[j].getOffsetWidth();
			if (arrGrid[j].getFormatColCount() > colCount) colCount = arrGrid[j].getFormatColCount();
		//}
		
		var grdNm =  arrSheetName[j];
				
		 objTitleGrid = this.components[grdNm];
		if (this.gfn_IsNull(objTitleGrid)) {
			
			objTitleGrid = new Grid();
			objTitleGrid.init(grdNm, 0, 0, grdWidth, 100, null, null);
			this.addChild(grdNm, objTitleGrid);
			objTitleGrid.set_visible(false);
			objTitleGrid.set_border("0px none");
			objTitleGrid.show();		
		}
		
		// FormatClear 
		objTitleGrid.set_formats("<Formats><Format id='default'/></Formats>");
		
		// title row
		objTitleGrid.appendContentsRow("head");
		
		colCount = colCount - 1;
		// column 추가
		for (var i = 0; i < colCount; i++) {
			objTitleGrid.appendContentsCol("head");
		}
		
		objTitleGrid.appendContentsRow("head"); // 조회조건 row
		objTitleGrid.appendContentsRow("head"); // 출력일자 row
		objTitleGrid.appendContentsRow("head"); // blank row
	
		// merge column
		objTitleGrid.mergeContentsCell("head", 0, 0, 0, colCount, 0, false);
		objTitleGrid.mergeContentsCell("head", 1, 0, 1, colCount, 1, false);
		objTitleGrid.mergeContentsCell("head", 2, 0, 2, colCount, 2, false);
		objTitleGrid.mergeContentsCell("head", 3, 0, 3, colCount, 3, false);
		
		objTitleGrid.set_autofittype("col");
		
		// 제목
		objTitleGrid.setCellProperty("head", 0, "text", grdNm);
		objTitleGrid.setCellProperty("head", 1, "text", searchCondition);
		objTitleGrid.setCellProperty("head", 2, "text", "출력일자 : " + this.gfn_Today(true));
		
		// cssclass
		objTitleGrid.setCellProperty("head", 0, "cssclass", "cell_expTitle");
		objTitleGrid.setCellProperty("head", 1, "cssclass", "cell_expLeft");
		objTitleGrid.setCellProperty("head", 2, "cssclass", "cell_expRight");
		objTitleGrid.setCellProperty("head", 3, "cssclass", "cell_expBlank");
		objTitleGrid.setFormatRowProperty(3, "size", 6);
	
		// Title Grid	
		if(arrSheetName[j] == "" || arrSheetName[j] == undefined){
			sheetName = sheetName + j+ "!A2"
		} else {
			sheetName = arrSheetName[j]+ "!A2";
		}
		
		var range = sheetName ; //그리드 타이틀 시작행

		objExport.addExportItem(constExportItemType
									,objTitleGrid
									, range
									, exportHead
									, exportSelect
									, exportMerge
									, exportValue
									, exportImage
									, exceptStyle
									, exportSize
									,arrCellIndex);
		
		//var nGridStartRow = arrSheetName[j] + "!A" + nTitleStartRow+; //그리드 타이틀 시작행
		
		objExport.addExportItem(constExportItemType
									, arrGrid[j]
									, arrSheetName[j]+"!A6"
									, exportHead
									, exportSelect
									, exportMerge
									, exportValue
									, exportImage
									, exceptStyle
									, exportSize
									, arrCellIndex);
	}
	
	var result = objExport.exportData();
	return result;

};

/**
 * @class  Excel Export Sucess <br>
 * @param  {Object} obj
 * @param  {Event} e
 * @return N/A
 * @example
 */
pForm._gfn_ExportOnsuccess = function(obj, e)
{
	var oThis 		= pForm._excelThis;
	var callback 	= pForm._excelCallback;
	var exportId 	= pForm._excelExportId;	
	
	oThis.setWaitCursor(false, true);	
	
	// 화면의 callback 함수 호출
	if (!this.gfn_IsNull(callback)) {
		if (oThis[callback]) {
			this.lookupFunc(callback).call(exportId, 0, "");
		}
	}
};

/**
 * @class  Excel Export Error <br>
 * @param  {Object} obj
 * @param  {Event} e
 * @return N/A
 * @example
 */
pForm._gfn_ExportOnerror = function(obj,  e)
{
	var oThis 		= pForm._excelThis;
	var callback 	= pForm._excelCallback;
	var exportId 	= pForm._excelExportId;
	
	oThis.setWaitCursor(false, true);	
	
	// 화면의 callback 함수 호출
	if (!this.gfn_IsNull(callback)) {
		if (oThis[callback]) {
			this.lookupFunc(callback).call(exportId, -1, e.errormsg);
		}
	}
};

/**
 * @class  Excel import <br>
 * @param  {Object} pThis - Form 객체
 * @param  {Object} option               - JSON Object
 *                 {Object} dataset      - Dataset명
 *                 {String} [sheetName]  - Excel Sheet명 (default : Sheet1)
 *                 {Number} [startRow]   - 데이타 시작줄 (default : 6)
 *                 {String} [body]       - body 영역지정이 A칼럼이 아닌 경우 사용 (B6, C6, ....)
 *                 {String} [callback]   - callback 함수
 *                 {String} [importId]   - callback import id (callback 함수 사용시 필수) 
 * @return N/A
 * @example
    [예시1]
	var option = {
		dataset : "ds_Import"
		, sheetName : "Sheet1"
	};
	
	this.gfn_ImportExcel(this, option);
	
    [예시2]
	var option = {
		dataset : "ds_Import2"
		, sheetName : "Sheet1"
		, startRow : 6
		, callback : "fn_CallbackExcel"
		, importId : "import2"
	};
	
	this.gfn_ImportExcel(this, option);
 */
pForm.gfn_ImportExcel = function(pThis, option)
{
	
	// 1. 변수 선언
	var oThis = pThis;
	var dataset = option.dataset;
	var sheetName = option.sheetName;
	var startRow = option.startRow;
	var body = option.body;
	var callback = option.callback;
	var importId = option.importId;	
	
	// 2. null 확인
	if (this.gfn_IsNull(dataset)) return;	
	
	if (this.gfn_IsNull(body) && this.gfn_IsNull(startRow)) {
		body = "A6";
	} else if (this.gfn_IsNull(body) && !this.gfn_IsNull(startRow)) {
		body = "A" + startRow;
	}
	
	pForm._excelThis = oThis;
	
	// 3. 칼럼정보 수집
	var arrColInfo = Array();
	var objDs = oThis.objects[dataset];
	
	for (var i = 0; i < objDs.getColCount(); i++) {
		var colId = objDs.getColID(i);
		arrColInfo.push(colId);
	}
	
	// 4. callback 처리
	if (this.gfn_IsNull(callback)) {
		pForm._excelCallback = "";
		pForm._excelImportId = "";
	} else {
		pForm._excelCallback = callback;
		pForm._excelImportId = importId;
	}
	
	// 4. Import 객체 생성
	var importName = "_xlsImport";
	var objImport = oThis.objects[importName];
	
	if (!this.gfn_IsNull(objImport)) {
		var tmp = oThis.removeChild(importName);
		tmp.destroy();
		tmp = null;
	}
	
	objImport = new nexacro.ExcelImportObject(importName, oThis);
	objImport.set_importurl("svcUrl::XImport.do");
	objImport.set_importtype(nexacro.ImportTypes.EXCEL2007);	
	objImport.addEventHandler("onsuccess", this._gfn_ImporOnsuccess, this);
	objImport.addEventHandler("onerror", this._gfn_ImporOnerror, this);
	
	objImport.outds = dataset; // 원본 Dataset
	objImport.colInfo = arrColInfo;
	
	// 5. Excel import
	var param1; 
	if(sheetName == "" || sheetName == undefined){		
		param1 =  "[command=getsheetdata;Output=outDs;Body=!" + body +";]";  	
	} else {
		param1 = "[Command=getsheetdata;Output=outDs;Head=" + sheetName + ";Body=" + sheetName + "!" + body +";]";
	}
	var param2 = "[" + dataset + "=outDs]";
	objImport.importDataEx(importId, "", param1, param2);	
	oThis.addChild(importName, objImport);
	objImport = null;
};

/**
 * @class excel import on success <br>
 * @param {Object} obj
 * @param {Event} e
 * @return N/A
 * @example
 */
pForm._gfn_ImporOnsuccess = function(obj,  e)
{
	var oThis = pForm._excelThis;
	var callback = pForm._excelCallback;
	var importId = pForm._excelImportId;
	var colInfo = obj.colInfo;
	
	oThis.setWaitCursor(false,true);
	
	// 기존 칼럼명으로 변경
	var objOrgDs = this.objects[obj.outds]; // 원본 Dataset
	objOrgDs.set_enableevent(false);
	
	for (var i = 0; i < colInfo.length; i++) {
		var colId = "Column" + i;
		objOrgDs.updateColID(colId, colInfo[i]);
	}
	
	objOrgDs.set_enableevent(true);

	// 화면의 callback 함수 호출
	if (!this.gfn_IsNull(callback)) {
		if (oThis[callback]) {
			this.lookupFunc(callback).call(importId, 0, "");
		}
	}
};

/**
 * @class  excel import on error <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm._gfn_ImporOnerror = function(obj,  e)
{
	var oThis = pForm._excelThis;
	var callback = pForm._excelCallback;
	var importId = pForm._excelImportId;
	
	oThis.setWaitCursor(false,true);
	
	// 화면의 callback 함수 호출
	if (!this.gfn_IsNull(callback)) {
		if (oThis[callback]) {
			this.lookupFunc(callback).call(importId, -1, e.errormsg);
		}
	}
};

/**
 * @class  Excel import <br>
 * @param  {Object} pThis - Form 객체
 * @param  {Object} option               - JSON Object
 *                 {Object} dataset      - Dataset명   
 *                 {String} [callback]   - callback 함수
 *                 {String} [importId]   - callback import id (callback 함수 사용시 필수) 
 * @return N/A
 * @example
    [예시1]
	var option = {
		dataset : "ds_List2"		
	};
	
	this.gfn_ImportExcelCsv(this, option);
 */
pForm.gfn_ImportExcelCsv = function(pThis, option)
{
	// 1. 변수 선언
	var oThis 		= pThis;
	var dataset 	= option.dataset;	
	var body 		= "A1";
	var callback 	= option.callback;
	var importId 	= option.importId;	
	
	// 2. null 확인
	if( this.gfn_IsNull(dataset) ) {
		this.alert("대상 데이터셋이 없습니다.");
		return;	
	}
	
	// 3. 칼럼정보 수집
	var arrColInfo = Array();
	var objDs = oThis.objects[dataset];
	
	for (var i = 0; i < objDs.getColCount(); i++) {
		var colId = objDs.getColID(i);
		arrColInfo.push(colId);
	}
	
	// 4. Import 객체 생성
	var importName = "_xlsImport";
	var objImport = oThis.objects[importName];
	
	if (!this.gfn_IsNull(objImport)) {
		var tmp = oThis.removeChild(importName);
		tmp.destroy();
		tmp = null;
	}
	
	objImport = new nexacro.ExcelImportObject(importName, oThis);
	objImport.set_importurl("svcUrl::XImport.do");
	objImport.set_importtype(nexacro.ImportTypes.CSV);	
	objImport.addEventHandler("onsuccess"	, this._gfn_ImportCsvOnsuccess	, this);
	objImport.addEventHandler("onerror"		, this._gfn_ImportCsvOnerror	, this);
	
	objImport.pThis	 	= pThis;
	objImport.outds 	= dataset; // 원본 Dataset
	objImport.colInfo 	= arrColInfo;
	objImport.callback  = callback;
	objImport.importId  = importId;
	
	// 5. Excel import
	var param1 = "[command=getsheetdata;Output=outDs;Body=!" + body +";]";	
	var param2 = "[" + dataset + "=outDs]";
	
	objImport.importDataEx(importId, "", param1, param2);	
	oThis.addChild(importName, objImport);
	objImport = null;
};

// CSV 엑셀 임포트 성공시
pForm._gfn_ImportCsvOnsuccess = function(obj,  e)
{
	var oThis 		= obj.pThis;
	var callback 	= obj.callback;
	var importId 	= obj.importId;
	var colInfo 	= obj.colInfo;	
	var sFileName 	= e.url;
	sFileName 		= sFileName.substr(sFileName.lastIndexOf("/") + 1);
	oThis.setWaitCursor(false,true);
	
	// 기존 칼럼명으로 변경
	var objOrgDs = this.objects[obj.outds]; // 원본 Dataset
	objOrgDs.set_enableevent(false);
	
	for( var i=0; i<colInfo.length; i++ ) {
		var colId = "Column" + i;
		objOrgDs.updateColID(colId, colInfo[i]);
	}
	
	objOrgDs.set_enableevent(true);

	// 화면의 callback 함수 호출
	if( !this.gfn_IsNull(callback) ) {
		if( oThis[callback] ) {
			this.lookupFunc(callback).call(importId, 0, "", sFileName);
		}
	}
};

// CSV 엑셀 임포트 실패시
pForm._gfn_ImportCsvOnerror = function(obj,  e)
{
	var oThis 	 	= obj.pThis;
	var callback 	= obj.callback;
	var importId 	= obj.importId;
	var sFileName 	= e.url;
	sFileName 		= sFileName.substr(sFileName.lastIndexOf("/") + 1);
	oThis.setWaitCursor(false,true);
	
	// 화면의 callback 함수 호출
	if (!this.gfn_IsNull(callback)) {
		if (oThis[callback]) {
			this.lookupFunc(callback).call(importId, -1, e.errormsg, sFileName);
		}
	}
};