/**
 * 통합정보시스템 고도화 구축
 * @FileName    Grid.js
 * @Creator     UI공통
 * @CreateDate  2019.05.02
 * @Desction    Grid 관련 함수
 ************** 소스 수정 이력 ***********************************************
 * date                Modifier                Description
 *******************************************************************************
 * 2019.05.02          UI공통                 최초 생성
 *******************************************************************************
 */

var pForm = nexacro.Form.prototype;

pForm.SORT_TOGGLE_CANCEL = true;
pForm.SORT_MARKER_TYPE = "text"; // 정렬 표시자 구분 (text or image)
pForm.SORT_MARKER = ["▲", "▼"]; // [오름차순표시, 내림차순표시]
pForm.SORT_ASC_MARK = "▲";
pForm.SORT_DESC_MARK = "▼";

/**
 * @class  Grid 기능 설정 <br>
 *		   1. Grid Head Column Click에 따라 정렬 실행 <br>
 *		   2. Bind Dataset에 Grid 정보 설정
 * @param  {Object} obj - Grid 객체
 * @return N/A
 * @example
 *  this.gfn_SetGrid(this.grd_List);
 */
pForm.gfn_SetGrid = function(obj)
{
	var useSort 		= obj.user_UseSort;
	var useSelectAll 	= obj.user_UseSelectAll;
	var useTooltip 		= obj.user_UseTooltip;	
	var objDs 			= obj.getBindDataset();
		
	if( !this.gfn_IsNull(objDs) ){
		if( !this.gfn_IsNull(objDs.keystring) ) {
			obj.keystring 	= objDs.keystring;
			obj.arrGroupKey = this._gfn_SetArrGroupKey(objDs.keystring);
			var strSortKey 	= this.gfn_Nvl(this._gfn_SetSortKey(objDs.keystring), "");
			// Group key 존재
			if( strSortKey.substr(0, 1) == "," ) {
				obj.arrSortKey  = strSortKey.substr(1);
			}
			else {
				obj.arrSortKey  = strSortKey;
			}
		}
	}
	
	if (!(useSort == "nouse" && useSelectAll == "nouse")) {
		if (this.gfn_IsNull(obj.user_event_onheadclick)) {
			obj.user_event_onheadclick = "onheadclick";
			obj.addEventHandler("onheadclick", this._gfn_Grid_onheadclick, this);
		}
	}
	
	if (useTooltip != "nouse") {
		if (this.gfn_IsNull(obj.user_event_onmousemove)) {
			obj.user_event_onmousemove = "onmousemove";
			obj.addEventHandler("onmousemove", this._gfn_Grid_onmousemove, this);
		}
	}
	
	if (this.gfn_IsNull(obj.user_event_onsetfocus)) {
		obj.user_event_onsetfocus = "onsetfocus";
		obj.addEventHandler("onsetfocus", this._gfn_Grid_onsetfocus, this);
	}
	
	if (!this.gfn_IsNull(objDs)) {
		objDs.bindgrid = obj;
	}
	
	for(var i= 1; i <= obj.getFormatColCount(); i++) {
	var exprStr = obj.getCellProperty("body", i, "expr");
	var edittype ="";
	if(!this.gfn_IsNull(obj.getCellProperty("body", i, "edittype"))){
		edittype = obj.getCellProperty("body", i, "edittype").indexOf("date") != -1 ;
	}else {
		edittype = false;
	}
	if( obj.getCellProperty("body", i, "edittype") == "date" || edittype ) {
		obj.addEventHandler("ondropdown", this._calendar_ondropdown, this);
		break;
	}else if(obj.getCellProperty("body", i, "edittype") == "date"  &&  !this.gfn_IsNull(exprStr)) {
				if(obj.getCellProperty("body", i, "expr").indexOf("date") != -1)  {
					obj.addEventHandler("ondropdown", this._calendar_ondropdown, this);
					break;
				}
		 }else {
		}		
	}
};

/**
 * @class  Grid Checkbox Column 값 설정 <br>
 * @param  {Object} obj - Grid 객체
 * @param  {Object} option - JSON 객체
 *					{Number} index -  Checkbox Column Index
 *					{String} column - 칼럼명
 *					{String} value - Column 값
 *					{String} user_UseSelectAll - chkuse 설정시 선택되더라도 데이터셋의 rowtype은 변경되지 않는다.
 * @return N/A
 */
pForm.gfn_SetSelectAll = function(obj, option)
{
	var index = 0;
	var column = "CHK";
	var value = "0";
	
	if (!this.gfn_IsNull(option)) {
		index = option.index;
		column = option.column;
		value = option.value;
	}
	
	// Bind Dataset
	var objBindDs = obj.getBindDataset();
	
	obj.setCellProperty("head", index, "text", value);
	
	if (objBindDs.getRowCount() == 0) return;
	
	// 값 설정
	objBindDs.set_enableevent(false);
	if( this.gfn_Nvl(option.user_UseSelectAll, "use") == "chkuse" ) {
		objBindDs.set_updatecontrol(false);
	}
	for (var i = 0 ; i < objBindDs.rowcount; i++) {
		objBindDs.setColumn(i, column, value);
	}
	if( this.gfn_Nvl(option.user_UseSelectAll, "use") == "chkuse" ) {
		objBindDs.set_updatecontrol(true);
	}
	objBindDs.set_enableevent(true);
};

/**
 * @class  체크박스에 체크한 것들만 삭제 <br>
 * @param  {Object} obj - Dataset 또는 Grid 객체
 * @param  {String} [bindColumn] - Checkbox에 bind된 Column명
 * @return N/A
 * @example
 */
pForm.gfn_DeleteCheckedRow = function(obj, bindColumn)
{
	if (this.gfn_IsNull(obj)) return;
	if (this.gfn_IsNull(bindColumn)) bindColumn = "CHK";
	
	var objDs = obj;
	if (obj instanceof Grid) objDs = obj.getBindDataset();
	
	var cntDel = 0;
	objDs.set_enableevent(false);
	for (i = objDs.getRowCount() - 1; i >= 0; --i) {
		var value = objDs.getColumn(i, bindColumn);
		if (value == "1" || value == 1) {
			objDs.deleteRow(i);
			cntDel++;
        }
	}
	objDs.set_enableevent(true);
	
	if (cntDel == 0) {
		this.alert(this.gfn_GetMessage("M000008", "%AAA%", "삭제할내역이"), "알림");
		return -1;
	} else {
		return cntDel;
	}
};

/*
 * @class  Tree의 계층 구조 상 Tree Path 문자열을 반환 <br>
 * @param  {Object} obj - Grid 객체
 * @param  {Number} row - Path를 구할 항목의 Row Index
 * @return {String} Tree Path 문자열
 * @example
 */
pForm.gfn_GetItemPath = function(obj, row)
{
	return obj.getTreePath(row, true);
};

/**
 * @class  Tree의 계층 구조 상 부모 행 인덱스 반환 <br>
 * @param  {Object} obj - Grid 객체 
 * @param  {Number} row - Dataset Row Index
 * @return {Number} DataSet Row 값 반환
 * @example
 */
pForm.gfn_GetParentRow = function(obj, row)
{
	if (this.gfn_IsNull(obj)) return;
	return obj.getTreeParentRow(row, true);
};

/**
 * @class  Tree의 계층 구조 상 자식 행 인덱스 반환 <br>
 * @param  {Object} obj - Grid 객체
 * @param  {Number} row - Dataset Row Index
 * @param  {Number} childIndex - 자식 항목의 row
 * @return {Number} DataSet Row 값 반환
 * @example
 */
pForm.gfn_GetChildRow = function(obj, row, childIndex)
{
	if (this.gfn_IsNull(obj)) return;
	var treeRow = obj.getTreeRow(row);
	return obj.getTreeChildRow(treeRow, childIndex, true);
};

/**
 * @class  Tree의 계층 구조 상 자식 행 개수 반환 <br>
 * @param  {Object} obj - Grid 객체
 * @param  {Number} row - Dataset Row Index
 * @return {Number} 지정한 행의 자식 행 개수를 반환
 * @example
 */
pForm.gfn_ChildCount = function(obj, row)
{
	if (this.gfn_IsNull(obj)) return;
	var treeRow = obj.getTreeRow(row);
	return obj.getTreeChildCount(treeRow, true);
};

/**
 * @class  Tree의 해당 행에 TreeStatus를 설정 <br>
 * @param  {Object} obj - Grid 객체
 * @param  {Number} row - Dataset Row Index
 * @param  {Boolean} treeStatus - 트리 상태값, true(펼침) / false(접힘)
 * @return {Boolean} true (성공) / false (실패)
 * @example
*/
pForm.gfn_ExpandItem = function(obj, row, treeStatus)
{
	if (this.gfn_IsNull(obj)) return;
	var treeRow = obj.getTreeRow(row);
	return obj.setTreeStatus(treeRow, treeStatus);
};

/**
 * @class  Grid Sort 문자 초기화 <br>
 * @param  {Object} obj - Grid 객체
 * @return N/A
 */
pForm.gfn_InitSort = function(obj)
{
	if( this.gfn_IsNull(obj) ) {
		return;
	}	
	var cntCol = obj.getCellCount("head");	
	for (i = 0; i < cntCol; i++) {
		var displaytype = obj.getCellProperty("head", i, "displaytype");
		if (displaytype != "checkboxcontrol") {
			var txt = obj.getCellProperty("head", i, "text");
			
			for (var j = 0; j < this.SORT_MARKER.length; j++) {
				txt = nexacro.replaceAll(txt, this.SORT_MARKER[j], "");
			}
			
			obj.setCellProperty("head", i, "text", txt);
		}
	}
};

/**
 * @class  Grid Sort 초기화 <br>
 * @param  {Object} obj - Grid 객체
 * @return N/A
 */
pForm.gfn_InitGrdSort = function(obj)
{
	if( this.gfn_IsNull(obj) ) {
		return false;
	}
	
	var cntCol = obj.getCellCount("head");	
	for (i = 0; i < cntCol; i++) {
		var displaytype = obj.getCellProperty("head", i, "displaytype");
		if (displaytype != "checkboxcontrol") {
			var txt = obj.getCellProperty("head", i, "text");
			
			for (var j = 0; j < this.SORT_MARKER.length; j++) {
				txt = nexacro.replaceAll(txt, this.SORT_MARKER[j], "");
			}
			
			obj.setCellProperty("head", i, "text", txt);
		}
	}
	
	var objDs = obj.getBindDataset();
	if( objDs.getRowCount() == 0 ) {
		return false;
	}
	objDs.set_keystring("");
};

/*
 * @class  Tree 셀에서 해당 행의 TreeStatus를 반환 <br>
 * Leaf인 경우 MiPlatform은 -1 반환 <br>
 * @param  {Object} obj - Grid 객체
 * @param  {Number} row - 트리 행 인덱스를 구할 데이터셋 행 인덱스
 * @return {Number} TreeStatus 반환
 *					0 : Collapse
 *					1 : Expand
 *					3 : Leaf
 * @example
 */
pForm.gfn_IsExpanded = function(obj, row)
{
	var treeStatus= obj.getTreeStatus(row, true);
	
	if (treeStatus == 3) {
		return -1;
	} else {
		return treeStatus;
	}
};

/**
 * @class  Grid Bind Column id 반환 <br>
 * @param  {String} text - 속성값
 * @return {String} Bind Column id
 * @example
 */
pForm.gfn_GetColIdProperty = function(text)
{
	if (this.gfn_IsNull(text)) return "";
	var arrText = text.split(":");
	if (arrText.length == 2) return arrText[1];
	return text;
};

/**
 * @class  Grid의 키필드(text 속성값이 'KEY'인 것)가 중복되지 않는지 확인 <br>
 *			AS-IS는 Text와 ColID 속성이 별도로 존재하여 가능하나
 *			TO-BE는 text 속성 하나로 되어 있어 대안으로 accessibilitydescription 속성에 "KEY" 설정
 * @param  {Object} obj - Grid 객체
 * @return {Array} 중복된 두행의 위치값을 배열
 */
pForm.gfn_GetPosDupCell = function(obj)
{
	if (this.gfn_IsNull(obj)) return null;
	
	var objDs = obj.getBindDataset();
	if (objDs.rowcount < 2) return null;
	
	var arrCellInfo = new Array();
	
	var arrColId = Array();
	var k = 0;
	
	for (var i = 0; i < obj.getCellCount("body"); i++) {
		var key = obj.getCellProperty("body", i, "accessibilitydescription");
		if (key == "KEY") {
			arrColId[k] = this.gfn_GetColIdProperty(obj.getCellProperty("body", i, "text"));
			k++;
		}
	}
	
	if (k == 0) return arrCellInfo;
	
	for (var i = 0; i < objDs.rowcount; i++) {
		
		var cnt = 0; 
		
		for (k = i + 1; k < objDs.rowcount; k++) {
			for( j = 0; j < arrColId.length; j++) {
			
					var tmp1 = "";
					var tmp2 = ""
					
					typeof objDs.getColumn(i, arrColId[j]) == "object" ?  tmp1 = objDs.getColumn(i, arrColId[j]).toString() : tmp1 = objDs.getColumn(i, arrColId[j]);
					typeof objDs.getColumn(k, arrColId[j]) == "object" ?  tmp2 = objDs.getColumn(k, arrColId[j]).toString() : tmp2 = objDs.getColumn(k, arrColId[j]);
					
					
				if (tmp1 == tmp2) {
					cnt++;
				}
			}
			
			if (cnt == arrColId.length) {
				arrCellInfo[0] = i;
				arrCellInfo[1] = k;
				
				return arrCellInfo;
			} else {
				cnt = 0;
			}
		}
	}
  return arrCellInfo;
};

/**
 * @class  Grid의 필수항목이 비었는지 검사 <br>
 * @param  {Object} obj - Grid 객체
 * @return {Array} 빈 셀의 위치를 담은 배열(행, 열)
 */
pForm.gfn_GetPosEmptyCell = function(obj , zeroChk)
{
	if (this.gfn_IsNull(obj)) return null;
	
	var arrCellInfo = new Array();
	var objDs = obj.getBindDataset();
	
	for (var i = 0; i < obj.getCellCount("head"); i++) {
		var cssclass = obj.getCellProperty("head", i, "cssclass");
		var edittype = obj.getCellProperty("body", i, "edittype");
		
		if (cssclass == "Required" && edittype !="none") {
			var idx = obj.getCellProperty("head", i, "col");
			
			for (j = 0; j < obj.getCellCount("body"); j++) {
				if (obj.getCellProperty("body", j, "col") == idx) {
					var colId = this.gfn_GetColIdProperty(obj.getCellProperty("body", j, "text"));
					
					for (k = 0 ; k < objDs.rowcount ; k++) {
						var rowType = objDs.getRowType(k);
						if (rowType != Dataset.ROWTYPE_INSERT && rowType != Dataset.ROWTYPE_UPDATE) continue;
						
						if (this.gfn_IsNull(objDs.getColumn(k, colId)) || (zeroChk && objDs.getColumn(k, colId) == 0)) {
							arrCellInfo[0] = k;
							arrCellInfo[1] = j;
							arrCellInfo[2] = i;
							return arrCellInfo;
						}
					}
				}
			}
		}
	}
	
	return arrCellInfo;
};

/**
 * @class  Grid의 필수항목이 비었는지 또는 중복인지 검사 <br>
 *			AS-IS는 Text와 ColID 속성이 별도로 존재하여 가능하나
 *			TO-BE는 text 속성 하나로 되어 있어 대안으로 accessibilitydescription 속성에 "KEY" 설정
 * @param  {Object} obj - Grid 객체
 * @return {Boolean} true - 성공
 *					 false - empty 또는 키중복
 */
pForm.gfn_IsDupEmptyCell = function(obj, zeroChk)
{
	if (this.gfn_IsNull(obj)) return null;
	
	zeroChk == undefined ? zeroChk = true : zeroChk;
	
	var objDs = obj.getBindDataset();
	var emptyCell = this.gfn_GetPosEmptyCell(obj, zeroChk);	
	
	if (emptyCell.length == 0) {
		var dupRows = this.gfn_GetPosDupCell(obj);
		
		if (this.gfn_IsNull(dupRows)) return true;
		if (dupRows.length > 0) {
			var keyName = "";
			for (var i = 0; i < obj.getCellCount("body"); i++) {
				var key = obj.getCellProperty("body", i, "accessibilitydescription");
				if (key == "KEY") {
					//keyName = keyName + ' , ' + obj.getCellProperty("head", i, "text");
					keyName = obj.getCellProperty("head", i, "text");
				}
			}
			
// 			if (keyName.length > 0 ) {
// 				keyName = this.gfn_SubStr(keyName, 2, keyName.length);
// 			}
//			
// 			var msg;
// 			msg = msg + (dupRows[0] + 1) + "행과 " + (dupRows[1] + 1) + "행의";
// 			msg = msg + keyName + " 항목이 중복되었습니다." ;
			var msg = (dupRows[0] + 1) + "행과 " + (dupRows[1] + 1) + "행의 "
					+ keyName + " 항목이 중복되었습니다." ;
			this.alert(msg);
			objDs.set_rowposition(dupRows[0]);
			return false;
		}
		
	} else {
		var columnName = obj.getCellProperty("head", emptyCell[2], "text") + "항목은";
		
		var msg = this.gfn_GetMessage("M000015","%AAA%", columnName);
		this.alert(msg); // "?은 필수항목입니다.";
		objDs.set_rowposition(emptyCell[0]);
		obj.setCellPos(emptyCell[1], emptyCell[0]);
		
		if( obj.getCellProperty("body", obj.getCellPos(), "displaytype") == "combocontrol"
		 && obj.getCellProperty("body", obj.getCellPos(), "edittype") == "combo")
		{
				if(obj.isDropdownCombo() == false) {
					obj.showEditor(true);
					obj.dropdownCombo();
					
				}
		}else{
		
			obj.showEditor(true);
		}
		return false;
	}
	
	return true;
};

/**
 * @class  Grid Cell displaytype="imagecontrol" 인 경우 text에 사용할 이미지 URL 반환  <br>
 * @param  {String} type - insert / update / delete / expand 중 선택
 * @return {String} 이미지 URL
 * @example
 */
pForm.gfn_GetCellImgUrl = function(type)
{
	if (this.gfn_IsNull(type)) return;
	
	var url = "";
	switch (type.toLowerCase()) {
		case "insert" :
			url = "url('theme://images/grd_cell_insert.png')";
			break;
			
		case "update" :
			url = "url('theme://images/grd_cell_update.png')";
			break;
			
		case "delete" :
			url = "url('theme://images/grd_cell_delete.png')";
			break;
			
		case "expand" :
			url = "url('theme://images/grd_btn_expand.png')";
			break;
	}
	
	return url;
};

//////////////////////////////////////////////////////////////////////////

/**
 * @class  Grid Head click 이벤트 [Sort, Checkbox]
 * @param  {Object} obj - Grid 객체
 * @param  {Evnet} e - nexacro.GridClickEventInfo
 * @return  N/A
 */
pForm._gfn_Grid_onheadclick = function(obj, e)
{	
	var useSort = obj.user_UseSort;
	var useSelectAll = obj.user_UseSelectAll;
	
	var displaytype = obj.getCellProperty("head", e.cell, "displaytype");
	var edittype = obj.getCellProperty("head", e.cell, "edittype");
	
	//if (displaytype == "checkboxcontrol" && edittype == "checkbox") {
	if (edittype == "checkbox") {		
		if (useSelectAll != "nouse") {		
			this._gfn_SetSelectAll(obj, e, useSelectAll);
		}
	} else {
		if (useSort != "nouse") {
			// 멀티 Sort
			if( e.shiftkey == true ) {								
				this._gfn_SetMultiSort(obj, e);
			}
			// 싱글 Sort
			else {
				var objApp 	= this.gfn_GetApp();
				objApp.gds_GrdSortInfo.clearData();
				this._gfn_SetSort(obj, e);
			}
		}
	}	
};

/**
 * @class  Grid mouse move 이벤트 [tooltiptext]
 * @param  {Object} obj - Grid 객체
 * @param  {Evnet} e - nexacro.GridMouseEventInfo
 * @return  N/A
 */
pForm._gfn_Grid_onmousemove = function(obj, e)
{
	var useTooltip = obj.user_UseTooltip;
	
	if (useTooltip != "nouse") {
		if( obj.getTreeStatus(e.row) != -1 ) {
			return;
		}
		var text = obj.getCellText(e.row, e.cell);		
		obj.set_enableredraw(false);
		obj.setCellProperty("body", e.cell, "tooltiptext", text);
		obj.set_enableredraw(true);
	}
};

/**
 * @class  Grid Focus 이벤트
 * @param  {Object} obj - Grid 객체
 * @param  {Evnet} e - nexacro.SetFocusEventInfo
 * @return  N/A
 */
pForm._gfn_Grid_onsetfocus = function(obj, e)
{	
	this.getOwnerFrame().form.fv_FocusGrid = obj;
};

/**
 * @class  Focused Grid 객체 반환 <br>
 * @param  N/A
 * @return {Object} obj - Grid 객체
 * @example
 */
pForm.gfn_GetFocusGrid = function()
{
	return this.getOwnerFrame().form.fv_FocusGrid;
};

/**
 * @class  Grid Head Checkbox Column Click에 따라 전체 선택 / 해제 실행 <br>
 * @param  {Object} obj - Grid 객체
 * @param  {Evnet} e - nexacro.GridClickEventInfo
 * @return N/A
 */
pForm._gfn_SetSelectAll = function(obj, e, useSelectAll)
{
	if (obj.readonly == true) return;
	
	// Bind Dataset
	var objBindDs = obj.getBindDataset();
	if (objBindDs.getRowCount() < 1) return;
	
	// Cell Index
	var headCell  = e.cell;
	var bodyCell;
	
	if (obj.getCellCount("body") != obj.getCellCount("head")) {
		bodyCell = parseInt(obj.getCellProperty("head", headCell, "col"));
	} else {
		bodyCell = e.cell;
	}
	
	// Type
	var displaytype = obj.getCellProperty("head", headCell, "displaytype");
	var edittype = obj.getCellProperty("head", headCell, "edittype");
	
	if (edittype != "checkbox") return;
	
	// Bind Column
	var bindColumn = obj.getCellProperty("body", bodyCell, "text");
	if (this.gfn_IsNull(bindColumn)) return;
	bindColumn = bindColumn.toString().replace("bind:", "");
	
	// Head Value
	var headValue = obj.getCellProperty("head", headCell, "text");
	var checkValue;
	
	if (headValue == "1") {
		obj.setCellProperty("head", headCell, "text", "0");
		checkValue = "0";
	} else {
		obj.setCellProperty("head", headCell, "text", "1");
		checkValue = "1";
	}
	
	// 값 설정
	objBindDs.set_enableevent(false);
	if( useSelectAll == "chkuse" ) {
		objBindDs.set_updatecontrol(false);
	}
	for (var i = 0 ; i < objBindDs.rowcount; i++) {
		objBindDs.setColumn(i, bindColumn, checkValue);
	}
	if( useSelectAll == "chkuse" ) {
		objBindDs.set_updatecontrol(true);
	}
	objBindDs.set_enableevent(true);
};

/**
 * @class  Grid Head Column Click에 따라 정렬 실행 <br>
 * @param  {Object} obj - Grid 객체
 * @param  {Evnet} e - nexacro.GridClickEventInfo
 * @return N/A
 */
pForm._gfn_SetSort = function(obj, e)
{	
	var col = e.col;
	var cell = e.cell;
	
	// Checkbox 확인
	var displaytype = obj.getCellProperty("Head", col, "displaytype");
	if (displaytype == "checkbox" || displaytype == "calendarcontrol" || displaytype == "combocontrol") return false;
	
	// 데이타 row 개수 확인
	var objDs = obj.getBindDataset();
	if (objDs.getRowCount() < 2) return false;
	
	// Bind 칼럼 확인
	var colId = obj.getCellProperty("Body", col, "text");
	colId = this.gfn_Replace(colId, "bind:", "");
	
	// Merge 된 칼럼인 경우
	if (col != cell) col = cell;
	if (obj.getCellProperty("head", col, "colspan") > 1) return false;
	
	// Sort 설정
	objDs.set_enableevent(false);
	var keyString 	 = obj.keystring;
	var sKeyArr	  	 = obj.arrSortKey;
	var gKeyArr	  	 = obj.arrGroupKey;
	var strGkey   	 = "";
	var strColId  	 = "";
	var strKeystring = "";	
	for (var i = 0; i < obj.getCellCount("head"); i++) {
		// Head명
		var headText = obj.getCellText(-1, i);
		if (this.gfn_IsNull(headText)) continue;
		

		// 해당 Head인 경우
		if (i == col) {
			// 오름차순(▲) → 내림차순(▼)
			if (headText.substr(headText.length - 1) == this.SORT_ASC_MARK) {
				obj.setCellProperty("Head", i, "text", headText.substr(0, headText.length - 1) + this.SORT_DESC_MARK);
				
				// 내림차순 설정
				if( !this.gfn_IsNull(keyString) ) {
				
					// G: 가 존재하면 
					if( !this.gfn_IsNull(gKeyArr) ) {
						for( var j=0,cnt2=gKeyArr.length; j<cnt2; j++ ) {
							strColId = gKeyArr[j].replace(",", "").replace("+", "").replace("-", "");					
							if( strColId == colId ) {
								// + - ,+  ,-
								if( gKeyArr[j].substr(0, 1) == "-" || gKeyArr[j].substr(0, 1) == "+" ) {
									strGkey += "-" + strColId;
								}
								else if( gKeyArr[j].substr(0, 2) == ",-" || gKeyArr[j].substr(0, 2) == ",+" ) {
									strGkey += ",-" + strColId;
								}
							}
							else {
								strGkey += gKeyArr[j];
							}
						}
					}
					
					if( !this.gfn_IsNull(strGkey) ) {
						strKeystring = "G:"+strGkey + ",S:-" + colId + sKeyArr;
					}
					else {
						strKeystring = "S:-" + colId + sKeyArr;
					}					
					objDs.set_keystring(strKeystring); 
				}
				else {
					objDs.set_keystring(("S:-" + colId));
				}				
			}
			// 내림차순(▼) → 해제
			else if (headText.substr(headText.length - 1) == this.SORT_DESC_MARK) {
				obj.setCellProperty("Head", i, "text", headText.substr(0, headText.length - 1));
				objDs.set_keystring(keyString); // 해제
			} 
			// 해제  → 오름차순(▲)
			else {
				obj.setCellProperty("Head", i, "text", headText + this.SORT_ASC_MARK);
				
				// 오름차순 설정
				if( !this.gfn_IsNull(keyString) ) {								
					// G: 가 존재하면 
					if( !this.gfn_IsNull(gKeyArr) ) {
						for( var j=0,cnt2=gKeyArr.length; j<cnt2; j++ ) {
							strColId = gKeyArr[j].replace(",", "").replace("+", "").replace("-", "");	
							if( strColId == colId ) {
								// + - ,+  ,-
								if( gKeyArr[j].substr(0, 1) == "-" || gKeyArr[j].substr(0, 1) == "+" ) {
									strGkey += "+" + strColId;
								}
								else if( gKeyArr[j].substr(0, 2) == ",-" || gKeyArr[j].substr(0, 2) == ",+" ) {
									strGkey += ",+" + strColId;
								}
							}
							else {
								strGkey += gKeyArr[j];
							}
						}
					}
					
					if( !this.gfn_IsNull(strGkey) ) {
						strKeystring = "G:"+strGkey + ",S:+" + colId + sKeyArr;
					}
					else {
						strKeystring = "S:+" + colId + sKeyArr;
					}
					objDs.set_keystring(strKeystring); 
				}					
				else {
					objDs.set_keystring(("S:+" + colId)); 
				}				
			}
		} 
		else  {
			// 정렬표시 삭제
			if (headText.substr(headText.length - 1) == this.SORT_ASC_MARK || 
				headText.substr(headText.length - 1) == this.SORT_DESC_MARK) {
				obj.setCellProperty("Head", i, "text", headText.substr(0, headText.length - 1));
				if (displaytype == "checkboxcontrol" ) {
					objDs.set_keystring(keyString); // 해제
				}
			}
		}
	}
	
	objDs.set_enableevent(true);
	objDs.set_rowposition(0);
};

/**
 * @class  Grid Head Column Click에 따라 정렬 실행(Shift 누른 후 정렬시 멀티 정렬 가능) <br>
 * @param  {Object} obj - Grid 객체
 * @param  {Evnet} e - nexacro.GridClickEventInfo
 * @return N/A
 */
pForm._gfn_SetMultiSort = function(obj, e)
{
	var col = e.col;
	var cell = e.cell;
	
	var objApp 			= this.gfn_GetApp();
	var gdsGrdSortInfo 	= objApp.gds_GrdSortInfo;	
	
	// Checkbox 확인
	var displaytype = obj.getCellProperty("Head", col, "displaytype");
	if (displaytype == "checkbox" || displaytype == "calendarcontrol" || displaytype == "combocontrol") return false;
	
	// 데이타 row 개수 확인
	var objDs = obj.getBindDataset();
	if (objDs.getRowCount() < 2) return false;
	
	// Bind 칼럼 확인
	var colId = obj.getCellProperty("Body", col, "text");
	colId = this.gfn_Replace(colId, "bind:", "");
	
	// Merge 된 칼럼인 경우
	if (col != cell) col = cell;
	if (obj.getCellProperty("head", col, "colspan") > 1) return false;
	
	// Sort 설정
	objDs.set_enableevent(false);	
	var keyString 	  = obj.keystring;
	var sKeyArr	 	  = obj.arrSortKey;
	var gKeyArr	 	  = obj.arrGroupKey;
	var strGkey   	  = "";
	var strGkeyTemp	  = "";
	var strColId  	  = "";
	var strKeystring  = "";
	var fRow 		  = -1;
	var strSortString = "S:";
	
	for( var i=0,cnt=obj.getCellCount("head"); i<cnt; i++ ) {
		// Head명
		var headText = obj.getCellText(-1, i);
		
		if( this.gfn_IsNull(headText) ) continue;
		
		// 해당 Head인 경우
		if( i == col ) {
			fRow = gdsGrdSortInfo.findRow("COL_ID", colId);
			if( fRow == -1 ) {
				fRow = gdsGrdSortInfo.addRow();
				gdsGrdSortInfo.setColumn(fRow, "COL_ID", colId);
			}			

			// 오름차순(▲) → 내림차순(▼)
			if (headText.substr(headText.length - 1) == this.SORT_ASC_MARK) {
				gdsGrdSortInfo.setColumn(fRow, "SORT_INFO", "-");				
				obj.setCellProperty("Head", i, "text", headText.substr(0, headText.length - 1) + this.SORT_DESC_MARK);
			}
			// 내림차순(▼) → 해제
			else if (headText.substr(headText.length - 1) == this.SORT_DESC_MARK) {
				gdsGrdSortInfo.deleteRow(fRow);
				obj.setCellProperty("Head", i, "text", headText.substr(0, headText.length - 1));				
			} 
			// 해제  → 오름차순(▲)
			else {				
				gdsGrdSortInfo.setColumn(fRow, "SORT_INFO", "+");
				obj.setCellProperty("Head", i, "text", headText + this.SORT_ASC_MARK);
			}
		}		
	}
	
	// G: 가 존재하면 
	if( !this.gfn_IsNull(gKeyArr) ) {				
		// Sort 지정
		for( var k=0,cnt3=gKeyArr.length; k<cnt3; k++ ) {
			for( var j=0,cnt2=gdsGrdSortInfo.getRowCount(); j<cnt2; j++ ) {			
				strColId = gKeyArr[k].replace(",", "").replace("+", "").replace("-", "");
			
				if( strColId == gdsGrdSortInfo.getColumn(j, "COL_ID") ) {
					if( gKeyArr[k].substr(0, 1) == "-" || gKeyArr[k].substr(0, 1) == "+" ) {								
						strGkeyTemp += gdsGrdSortInfo.getColumn(j, "SORT_INFO") + strColId;
					}
					else if( gKeyArr[k].substr(0, 2) == ",-" || gKeyArr[k].substr(0, 2) == ",+" ) {								
						strGkeyTemp += "," + gdsGrdSortInfo.getColumn(j, "SORT_INFO") + strColId;
					}
				}
			}
			
			if( !this.gfn_IsNull(strGkeyTemp) ) {
				strGkey += strGkeyTemp;
			}
			else {
				strGkey += gKeyArr[k];
			}
		}
		
		// Sort 지정
		for( var j=0,cnt2=gdsGrdSortInfo.getRowCount(); j<cnt2; j++ ) {
			strSortString += gdsGrdSortInfo.getColumn(j, "SORT_INFO") + gdsGrdSortInfo.getColumn(j, "COL_ID");
		}				
		strKeystring = "G:" + strGkey + "," + strSortString;
		
	}
	else {
		// Sort 지정
		for( var j=0,cnt2=gdsGrdSortInfo.getRowCount(); j<cnt2; j++ ) {
			strSortString += gdsGrdSortInfo.getColumn(j, "SORT_INFO") + gdsGrdSortInfo.getColumn(j, "COL_ID");
		}				
		strKeystring = strSortString;				
	}	
	objDs.set_keystring(strKeystring); 
	
	objDs.set_enableevent(true);	
	//objDs.set_rowposition(0);
};

/**
 * @class  Pivot Grid 기본설정 <br>
 * @param  {Object} obj - Grid 객체
 * @return N/A
 * @example
 */
pForm.gfn_SetPivotInfo = function(obj)
{
	this.gfn_SetRowHeightPivot(obj);
};

/**
 * @class  Pivot Grid의 행(row) 높이 설정 <br>
 * @param  {Object} obj - Grid 객체
 * @return N/A
 * @example
 */
pForm.gfn_SetRowHeightPivot = function(obj)
{
	obj.set_gridbodyheight(23);
	obj.set_gridheadheight(23);
	obj.set_gridsummheight(23);
};

/**
 * @class  Grid에서 keystring으로 sort를 지정하였을 경우 유지하기 위한 함수 <br>
 * @param  {Object} grdObj - Grid 객체
 * @param  {String} strKey - keystring으로 셋팅할 값
 * @return N/A
 * @example
 */
pForm.gfn_SetKeystring = function(grdObj, strKey)
{
	var dsObj = grdObj.getBindDataset();
	dsObj.set_keystring(strKey);
	grdObj.keystring = strKey;
};

// 데이터셋 keystring에서 Group키를 지정하였을 경우 처리를 위한 초기 설정값
pForm._gfn_SetArrGroupKey = function(strKey)
{
	var keyString 	  	= strKey.split(",");	
	var tempStr       	= "";	
	var arrKeystr 	  	= new Array();
	var arrKeystrTemp 	= new Array();
	var arrKeystrTemp2  = new Array();
	var idx 		 	= 0;
	// 전제 1 : G:가 S:보다는 앞으로 지정되어야 함. 
	// 전제 2 : G:만 앞으로 붙어서 처리함.
	if( keyString[0].indexOf("S:") == -1 		// Case 1 : 컬럼으로 시작하는 경우 (COL1,COL2+COL3-COL4,S:COL5+COL6)
	 || keyString[0].indexOf("G:") != -1 )     // Case 2 : G:로 시작하는 경우      (G:COL1,COL2+COL3-COL4,S:COL5+COL6) 
	{
		for( var k=0, cnt3=keyString.length; k<cnt3; k++ ) {			
			if( keyString[k].indexOf("S:") == -1 ) {
				tempStr = keyString[k].replace("G:", "");
				
				if( tempStr.substr(0, 1) == "+" ) {
					tempStr = tempStr.substr(1, tempStr.length);
				}
				
				if( idx != 0 ) {
					tempStr = "," + tempStr;
				}
				arrKeystr[idx] = tempStr;
				idx++;
			}
		}
		
		// 2단계 : "+"로 체크		
		idx = 0;
		for( var k=0, cnt3=arrKeystr.length; k<cnt3; k++ ) {			
			arrKeystrTemp = arrKeystr[k].split("+");
			for( var l=0,cnt4=arrKeystrTemp.length; l<cnt4; l++ ) {				
				if( arrKeystrTemp[l].substr(0, 1) != "+" 
				 && arrKeystrTemp[l].substr(0, 1) != "," 
				 && arrKeystrTemp[l].substr(0, 1) != "-" ) 
				{					
					tempStr = "+" + arrKeystrTemp[l];
				}
				else if( arrKeystrTemp[l].substr(0, 2) != ",-" ) {
					tempStr = ",+" + arrKeystrTemp[l].substr(1);
				}
				else if( arrKeystrTemp[l].substr(0, 2) == ",-" ) {
					tempStr = ",^" + arrKeystrTemp[l].substr(2);
				}
				else {
					tempStr = arrKeystrTemp[l];
				}
				arrKeystrTemp2[idx] = tempStr; 
				idx++;
			}
		}
		
		// 3단계 : "-"로 체크
		idx = 0;
		for( var k=0, cnt3=arrKeystrTemp2.length; k<cnt3; k++ ) {
			arrKeystrTemp = arrKeystrTemp2[k].split("-");
			for( var l=0,cnt4=arrKeystrTemp.length; l<cnt4; l++ ) {				
				tempStr = arrKeystrTemp[l];				
				if( l != 0 ) {
					tempStr = "-" + tempStr;
				}
				arrKeystr[idx] = tempStr.replace("^", "-"); 
				idx++;
			}
		}	
	}
	return arrKeystr;
};

// Sortkey만 리턴 
pForm._gfn_SetSortKey = function(strKey)
{
	var tempStr    = strKey;
	var arrSortKey = tempStr.split(",");
	
	// Group Key 존재 없이 Sort만 존재하는 경우
	if( arrSortKey[0].indexOf("S:") != -1 ) {
		return tempStr.replace("S:","");
	}	
	
	for( var i=0, cnt=arrSortKey.length; i<cnt; i++ ) {		
		if( arrSortKey[i].indexOf("S:") != -1 ){
			return "," + arrSortKey[i].replace("S:","");
		}
	}
};

/**
 * @class  Tree에서 edit box 에서 입력받은 데이터 like로 찾기 <br>
 * @param  {Grid Tree} obj - Grid Tree 객체
 * @param  {dataSet} ds - Grid Tree에 binddataset 된 값
 * @param  {String} col - 데이터셋에서 검색할 컬럼 명
 * @param  {String} str - 검색키 값
 * @return N/A
 * @example
 * this.gfn_Tree_SearchTree(this.tv_TreeView1, this.ds_TreeView1, "CIVIL_SERV_CLASS_NM" , this.edt_CivilServClassNm.value);
 */
pForm.gfn_Tree_SearchTree = function(obj, ds, col, str, fg){

	var grdtree = obj;
	
	ds.filter("String("+col+").substr(0," + str.length + ").indexOf('" + str.replace("'","\\'") + "') >= 0 && CLASS_LEVEL == 3 ");
	str = ds.getColumn(0,col);

 	ds.filter("");

	var fRow  = ds.findRowExpr(""+col+ " ==  $0 && CLASS_LEVEL == 3  " , 0, -1 , [str]);	// 현재 Form Row 
	
	var pRow  = grdtree.getTreeParentRow(fRow);
	var pRow2 = grdtree.getTreeParentRow(pRow);
	var pRow3 = grdtree.getTreeParentRow(pRow2);
	var tRow  = -1;	
	
	if(fg) grdtree.setTreeStatus(0, true);

	
	if( pRow3 != -1 ) {
		tRow = grdtree.getTreeRow(pRow3);		
		if( tRow != -1 ) {
			grdtree.setTreeStatus(tRow, true);
		}
	}
	
	if( pRow2 != -1 ) {
		tRow = grdtree.getTreeRow(pRow2);		
		if( tRow != -1 ) {
			grdtree.setTreeStatus(tRow, true);
		}
	}
	
	if( pRow != -1 ) {
		tRow = grdtree.getTreeRow(pRow);		
		if( tRow != -1 ) {
			grdtree.setTreeStatus(tRow, true);
		}
	}	

	grdtree.set_enableredraw(true);
	ds.set_rowposition(fRow);
	this.fv_SearchFlag = true;	
};

/**
 * @class  Grid의 cellclick event에서 사용함 - cell click시 내용복사 <br>
 * @param  {Grid} obj
 * @param  {Grid} e 
 * @return N/A
 * @example
 * this.gfn_CopyGrdCellClick(obj, e);
 */
pForm.gfn_CopyGrdCellClick = function(obj, e)
{
	var strGrdDsNm = obj.binddataset;
	var v_clip 	   = "";	
		
	v_clip += obj.getCellValue(e.row, e.cell);	
	
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