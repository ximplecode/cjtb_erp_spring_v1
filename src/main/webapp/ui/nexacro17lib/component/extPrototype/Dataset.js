/**
 * 통합정보시스템 고도화 구축
 * @FileName    Dataset.js
 * @Creator     UI공통
 * @CreateDate  2019.05.02
 * @Desction    Dataset 관련 함수
 ************** 소스 수정 이력 ***********************************************
 * date                Modifier                Description
 *******************************************************************************
 * 2019.05.02          UI공통                 최초 생성
 *******************************************************************************
 */

var pForm = nexacro.Form.prototype;

/**
 * @class  현재 Dataset의 마지막 레코드 다음에 지정한 Dataset의 레코드를 추가 <br>
 * @param  {Object} obj - Dataset 객체
 * @param  {Object | String} objTarget - 대상 Dataset 객체 또는 명
 * @example
 */
pForm.gfn_AppendDataset = function(obj, objTarget)
{
	if (this.gfn_IsNull(obj)) return null;
	if (this.gfn_IsNull(objTarget)) return null;
	
	if (objTarget instanceof Dataset) {
		obj.appendData(objTarget);
	} else {
		obj.appendData(this.lookup(objTarget));
	}
};

/**
 * @class  현재 Dataset에 지정하는 Dataset을 통합 <br>
 * @param  {Object} obj - Dataset 객체
 * @param  {Object | String} objTarget - 대상 Dataset 객체 또는 명
 * @return {Number} DataSet의 Row 갯수
 * @example
 */
pForm.gfn_Merge = function(obj, objTarget)
{
	if (this.gfn_IsNull(obj)) return -1;
	
	if (objTarget instanceof Dataset) {
		obj.mergeData(objTarget);
	} else {
		obj.mergeData(this.lookup(objTarget));
	}
};

/**
 * @class  지정한 Dataset에서 복사 <br>
 * @param  {Object} obj - Dataset 객체
 * @param  {Object | String} - 대상 Dataset 객체 또는 명
 * @return {Number} 복사된 데이터(Row) 의 개수를 반환 (없다면 null)
 * @example
 */
pForm.gfn_Copy = function(obj, objTarget)
{
	if (this.gfn_IsNull(obj)) return null;
	if (this.gfn_IsNull(objTarget)) return null;
	
	var objDsCopy;
	if (objTarget instanceof Dataset) {
		objDsCopy = objTarget;
	} else {
		objDsCopy = this.gfn_GetLookupVar(this,objTarget);
	}
	
	if (this.gfn_IsNull(objDsCopy)) {
		trace("[gfn_Copy]  " + objTarget + " 데이타셋을 찾을 수 없음");
		return;
	}
	
	var ret = obj.copyData(objDsCopy);
	return ret;
};

/**
 * @class  필터링된 내용만을 지정한 Dataset에 복사 <br>
 * @param  {Object} obj - Dataset 객체
 * @param  {Object | String} - 대상 Dataset 객체 또는 명
 * @return {Number} 복사된 데이터(Row) 의 개수를 반환 (없다면 null)
 * @example
 */
pForm.gfn_CopyF = function(obj, objTarget)
{
	if (this.gfn_IsNull(obj)) return null;
	if (this.gfn_IsNull(objTarget)) return null;
	
	var objDsCopy;
	if (objTarget instanceof Dataset) {
		objDsCopy = objTarget;
	} else {
		objDsCopy = this.gfn_GetLookupVar(this,objTarget);
	}
	
	if (this.gfn_IsNull(objDsCopy)) {
		trace("[gfn_CopyF] " + objTarget + " 데이타셋을 찾을 수 없음");
		return;
	}
	
	var ret = obj.copyData(objDsCopy, true);
	return ret;
};

/**
 * @class  Form에 Dataset 존재시 반환, 없으면 생성 <br>
 * @param  {Object} pThis - Form 객체
 * @param  {String} dsName - Dataset 명
 * @return {Object} Dataset 객체
 * @example
 */
pForm.gfn_CreateTempDs = function(pThis, dsName)
{
	var objDs = pThis.objects[dsName];
	
	if (this.gfn_IsNull(objDs)) {
		objDs = new Dataset;
		objDs.set_name(dsName);
		pThis.addChild(dsName, objDs);		
	}
	
	return objDs;
};

/**
 * @class  DataSet의 Column 정보 이외에 모든 데이터(Row) 를 삭제 <br>
 * @param  {Object} obj - Dataset 객체
 * @param  {Object} [objGrd] - Grid 객체
 * @return N/A
 * @example
 */
pForm.gfn_ClearData = function(obj, objGrd)
{
	if (this.gfn_IsNull(obj)) return;
	
	obj.set_enableevent(false);
	obj.clearData();
	obj.set_enableevent(true);
	
// 	if (this.gfn_IsNull(objGrd)) return;
// 	objGrd.set_nodatatext("");
};

/**
 * @class  특정 Dataset의 행(row)을 현재 Dataset의 지정한 행의 위치에 복사 <br>
 * @param  {Object} obj - Dataset 객체
 * @param  {Number} toRow - 현재 Dataset에서 복사되어 변경 될 행의 위치
 * @param  {String} toCol - 복사할 column 명
 * @param  {String} objTarget - 복사할 Dataset 명
 * @param  {Number} fromRow - from Row
 * @param  {String} fromCol - from column 명
 * @return {Boolean} true (성공) / false (실패)
 * @example
 */
pForm.gfn_CopyColumn = function(obj, toRow, toCol, objTarget, fromRow, fromCol)
{
	var objDsCopy;
	if (objTarget instanceof Dataset) {
		objDsCopy = objTarget;
	} else {
		objDsCopy = this.gfn_GetLookupVar(this, objTarget);
	}
	
	if (this.gfn_IsNull(objDsCopy)) {
		trace("[gfn_CopyColumn] " + objTarget + " 데이타셋을 찾을 수 없어 copy할 수 없음");
		return;
	}
	
	var ret = obj.copyRow(toRow, objDsCopy, fromRow, toCol + "=" + fromCol);
	return ret;
};

/**
 * @class  특정 Dataset의 행(row)을 현재 Dataset의 지정한 행의 위치에 복사 <br>
 * @param  {Object} obj - Dataset 객체
 * @param  {Number} fromRow - obj 에서 복사해 올 Row 의 인덱스
 * @param  {String} objTarget - 복사할 dataset명
 * @param  {Number} toRow - 현재 DataSet 의 Row 인덱스
 * @param  {String} colInfo - 데이터를 갱신할 때 "ToColumnID=FromColumnID,ToColumnID1=FromColumnID1" 형식으로 Column 을 매칭시키는 조건
 * @return {Boolean} true (성공) / false (실패)
 * @example
 * 
 */
pForm.gfn_CopyToRow = function(obj, fromRow, objTarget, toRow, colInfo)
{
	if (this.gfn_IsNull(colInfo)) colInfo = "";

	var objDsCopy;
	if (objTarget instanceof Dataset) {
		objDsCopy = objTarget;
	} else {
		objDsCopy = this.gfn_GetLookupVar(this,objTarget);
	}
	
	if (this.gfn_IsNull(objDsCopy)) {
		trace("[gfn_CopyToRow] " + objTarget + " 데이타셋을 찾을 수 없음");
		return;
	}
	
	var ret = objDsCopy.copyRow(toRow, obj, fromRow, colInfo);
	return ret;
};

/**
 * @class  binddataset의 Dataset 명 반환 <br>
 * @param  {Object} objComp - Component 객체
 * @return {String} Dataset 명
 * @example
 */
pForm.gfn_GetBindDataset = function(objComp)
{
	if (!this.gfn_IsNull(objComp.binddataset)) return objComp.binddataset;
	var objBindItem = this.gfn_GetBindItem(objComp);
	if (this.gfn_IsNull(objBindItem)) return "";
	return objBindItem.datasetid;
};

/**
 * @class  MiPlatform의 binddataset 설정 대체함수 <br>
 * @param  {Object} objComp - Component 객체
 * @param  {String} datasetId - Dataset 명
 * @return N/A
 * @example
 */
pForm.gfn_SetBindDataset = function(objComp, datasetId)
{
	objComp.binddataset = datasetId;
	this.gfn_SetBindDataInfo(objComp, objComp.binddataset, objComp.column);
};

/**
 * @class  BindItem 반환 <br>
 * @param  {Object} objComp - Component 객체
 * @return {Object} BindItem 객체
 * @example
 */
pForm.gfn_GetBindItem = function(objComp)
{
	if (this.gfn_IsNull(objComp)) return null;
	
	var bindList = this.binds;
	var compid;
	var compPath = this.gfn_ToUpper(this.gfn_GetCompPath(objComp));
	
	for (var i = 0; i < bindList.length; i++) {
		compid = this.gfn_ToUpper(bindList[i].compid);
		if (compid == compPath) {
			return bindList[i];
		}
	}
	return null;
};

/**
 * @class  binddataset의 column 반환 <br>
 * @param  {Object} objComp - Component 객체
 * @return {String} Column 명
 * @example
 */
pForm.gfn_GetBindColumn = function(objComp)
{
	var objBindItem = this.gfn_GetBindItem(objComp);
	if (this.gfn_IsNull(objBindItem)) return "";
	
	return objBindItem.columnid;
};

/**
 * @class  MiPlatform의 binddataset 설정을 대체 <br>
 * @param  {Object} objComp - Component 객체
 * @param  {String} column - column 명
 * @return 
 * @example
 */
pForm.gfn_SetBindColumn = function(objComp, column)
{
	objComp.column = column;
	this.gfn_SetBindDataInfo(objComp, objComp.binddataset, objComp.column);
};

/**
 * @class  binddataset의 Dataset 객체 반환 <br>
 * @param  {Object} obj - Grid 객체
 * @return {Object} Dataset 객체
 * @example
 */
pForm.gfn_GetBindDataInfo = function(obj)
{
	var objBindItem = this.gfn_GetBindItem(obj);
	if (obj.binddataset) return this.lookup(obj.binddataset);
	if (this.gfn_IsNull(objBindItem)) return null;
	
	return this.lookup(objBindItem.datasetid);
};

/**
 * @class  MiPlatform의 BindDataset 기능 대체함수 <br>
 * @param  {Object} objComp - Component 객체
 * @param  {String} datasetId - Dataset 명
 * @param  {String} column - Column 명
 * @return 
 * @example
 */
pForm.gfn_SetBindDataInfo = function(objComp, datasetId, column)
{
	var type = this.gfn_GetType(objComp, true);
	
	if (type == "GRID") {
		objComp.set_binddataset(datasetId);
		return;
	}
	
	column = this.gfn_Nvl(column, objComp.column);
	datasetId = this.gfn_Nvl(datasetId, objComp.binddataset);
	
	var objBindItem = this.gfn_GetBindItem(objComp);
	if (!this.gfn_IsNull(objBindItem)) {
		objBindItem.set_columnid(column);
		objBindItem.set_datasetid(datasetId);
		objBindItem.bind();
		return;
	}
	
	switch (type) {
		case "IMAGEVIEWER":
			bindItem = this.gfn_Replace(this.gfn_GetCompPath(objComp), ".", "_") + "_" + "image";
			
			objBindItem = new BindItem(bindItem);
			objBindItem.init(bindItem, this.gfn_GetCompPath(objComp), "image", datasetId, column);
			break;
			
		default:
			var compColumn = "value";
			if (objComp["set_value"] == undefined) compColumn = "text";
			
			bindItem = this.gfn_Replace(this.gfn_GetCompPath(objComp), ".", "_") + "_" + compColumn;
			objBindItem = new BindItem(bindItem);
			objBindItem.init(bindItem, this.gfn_GetCompPath(objComp), compColumn, datasetId, column);
			break;
	}
	
	this.addChild(bindItem, objBindItem);
	objBindItem.bind();
};

/**
 * @class  첫번째 Row Index 반환 <br>
 * @param  {Object} obj - Dataset 객체
 * @return {Number} 존재하면 0, 그렇지 않으면 -1
 * @example
 */
pForm.gfn_GetFirstRow = function(obj)
{
	var rowCount = obj.getRowCount();
	
	if (rowCount > 0) {
		return 0;
	} else {
		return -1;
	}
};

/**
 * @class  마지막 Row Index 반환 <br>
 * @param  {Object} obj - Dataset 객체
 * @return {Number} 존재하면 Row Index, 그렇지 않으면 -1
 * @example
 */
pForm.gfn_GetLastRow = function(obj)
{
	var rowCount= obj.getRowCount();
	
	if (rowCount > 0) {
		return rowCount - 1;
	} else {
		return -1;
	}
};

/**
 * @class  이전 Row Index 반환 <br>
 * @param  {Object} obj - Dataset 객체
 * @return {Number} 이전 Row Index
 * @example
 */
pForm.gfn_GetPrevRow = function(obj)
{
	var rowCount = obj.getRowCount();
	if (rowCount > 0) {
		if (obj.rowposition == 0) {
			return obj.rowposition;
		} else {
			return obj.rowposition - 1;
		}
	} else {
		return 	0;
	}
};

/**
 * @class  다음 Row Index 반환 <br>
 * @param  {Object} obj - Dataset 객체
 * @return {Number} 다음 Row Index
 * @example
 */
pForm.gfn_GetNextRow = function(obj)
{
	var rowCount = obj.getRowCount();
	if (rowCount > 0) {
		if (obj.rowposition == obj.getRowCount() - 1) {
			return obj.rowposition;
		} else {
			return obj.rowposition + 1;
		}
	} else {
		return -1;
	}
};

/**
 * @class  Update, Delete된 Dataset row 개수 반환 <br>
 * @param  {Object} obj - Dataset 객체
 * @return {Number} row 개수
 * @example
 */
pForm.gfn_GetORgBuffCount = function(obj)
{
	return obj.getSumNF("(getRowType(currow) != 2)") + obj.getDeletedRowCount();
};

/**
 * @class  rowtype이 insert면 수정가능, 그외의 경우는 수정불가능 <br>
 * @param  {Object} obj - Dataset 객체
 * @param  {String} edtType - Column 명
 * @return {Boolean} 존재여부
 * @example
 */
pForm.gfn_GetExprInsert = function(obj, edtType)
{
	return this.gfn_Decode(this.gfn_GetRowType(obj, obj.rowposition), "insert", edtType, "none");
};

/**
 * @class  Column type 반환 <br>
 * @param  {Object} obj - Dataset 객체
 * @param  {String} colId - Column ID
 * @return {String} Column type
 * @example
 */
pForm.gfn_GetColType = function(obj, colId)
{
	if (this.gfn_IsNull(obj)) return "STRING";
	var objInfo = obj.getColumnInfo(colId);
	return objInfo.type;
};

/**
 * @class  Column size 반환 <br>
 * @param  {Object} obj - Dataset 객체
 * @param  {String} colId - Column ID
 * @return {Number} Column size
 * @example
 */
pForm.gfn_GetColSize = function(obj, colId)
{
	if (this.gfn_IsNull(obj)) return 256;
	
	var objInfo = obj.getColumnInfo(colId);
	if (this.gfn_IsNull(objInfo)) {
		return -1;
	} else {
		return objInfo.size;
	}
};

/**
 * @class  지정된 행(row)의 type 반환 <br>
 * @param  {Object} obj - Dataset 객체
 * @param  {Number} row - Row Index
 * @return {String} 반환된 타입명
 * @example
 */
pForm.gfn_GetRowType = function(obj, row)
{
	if (this.gfn_IsNull(obj)) return "";
	
	var ret;
	var rowType = obj.getRowType(row);
	
	if (rowType == 1) {
		ret = "normal";
	} else if (rowType == 2) {
		ret = "insert";
	} else if (rowType == 4) {
		ret = "update";
	} else if (rowType == 8) {
		ret = "delete";
	} else if (rowType == 16) { //ROWTYPE_GROUP
		ret = "logical";
	} else if (rowType == 0) { //ROWTYPE_EMPTY
		ret = "normal";
	}
	
	return ret;
};

/**
 * @class  지정된 행(row)의 type 반환 (필터링 되어 보이지 않는 Row 포함) <br>
 * @param  {Object} obj - Dataset 객체
 * @param  {Number} row - Row Index
 * @return {String} type 반환
 * @example
 */
pForm.gfn_GetRowTypeNF = function(obj, row)
{
	if (this.gfn_IsNull(obj)) return "";
	
	var ret;
	var rowType = obj.getRowTypeNF(row);
	
	if (rowType == 1) {
		ret = "normal";
	} else if (rowType == 2) {
		ret = "insert";
	} else if (rowType == 4) {
		ret = "update";
	} else if (rowType == 8) {
		ret = "delete";
	} else if (rowType == 16) { //ROWTYPE_GROUP
		ret = "logical";
	} else if (rowType == 0) { //ROWTYPE_EMPTY
		ret = "normal";
	}
	
	return ret;
};

/**
 * @class  지정된 행(row)의 type 설정 <br>
 * @param  {Object} obj - Dataset 객체
 * @param  {Number} row - Row Index
 * @param  {String} rowType - update 할 rowtype
 * @return {Boolean} true (성공) / false (실패)
 * @example
 */
pForm.gfn_SetRowType = function(obj, row, rowType)
{
	if (this.gfn_IsNull(obj)) return null;
	
	rowType = rowType.toLowerCase();

	if (rowType == "update") {
		rowType = Dataset.ROWTYPE_UPDATE;
	} else if (rowType == "insert") {
		rowType = Dataset.ROWTYPE_INSERT;
	} else if (rowType == "delete") {
		rowType = Dataset.ROWTYPE_DELETE;
	} else {
		rowType = Dataset.ROWTYPE_NORMAL;
	}
	
	return obj.setRowType(row, rowType);
};

/**
 * @class insert, update, delete가 발생한 경우 <br>
 * 각 RowType을 자동으로 변경할 것인지 여부를 설정 <br>
 * @param  {Object} obj - Dataset 객체
 * @param  {Boolean} flag - true (변경O) / false (변경X)
 * @return N/A
 * @example
 */
pForm.gfn_SetUpdate = function(obj, flag)
{
	if (flag) {
		obj.set_updatecontrol(true);
	} else {
		obj.set_updatecontrol(false);
	}
};

/**
 * @class  Dataset 에서 지정된 행(row)의 type 에 대응하는 cssclass 반환 <br>
 * @param  {Object} obj - Dataset 객체
 * @param  {Number} row - Row Index
 * @return {String} cssclass
 * @example
 *  expr:this.gfn_GetRowTypeImg(dataset, currow)
 */
pForm.gfn_GetRowTypeImg = function(obj, row)
{
	if (this.gfn_IsNull(obj)) return "";
	
	var rtn = "";
	var rowType = obj.getRowType(row);
	
	switch (rowType) {
		case 2 : // insert
			rtn = "cell_rowtypeInsert";
			break;
			
		case 4 : // update
			rtn = "cell_rowtypeUpdate";
			break;
			
		case 8 : // delete
			rtn = "cell_rowtypeDelete";
			break;
			
		default :
			break;
	}
	
	return rtn;
};

/**
 * @class  Sort 처리 공통 함수 <br>
 * @param  {Object} obj - Dataset 객체
 * @param  {String} colList - column list
 * @param  {Boolean} ascending - 소트 플레그 기본: ascending = true;
 * @return N/A
 * @example
 */
pForm.gfn_Sort = function(obj, colList, ascending)
{
	if (this.gfn_IsNull(obj)) return null;
	if (!(obj instanceof Dataset)) return null;
	
	var keyString;
	var arrColList;
	var _keycols = obj._keycols ? obj._keycols.slice(0) : [];
	var columnId;
	var findIdx;
	var addSortSeq = 0;
	var existKeyString = (_keycols && _keycols.length);
	
	if (existKeyString) {
		for (var i = 0, len = _keycols.length; i < len; i++) {
			if (_keycols[i].level > 0) {
				addSortSeq = i;
				break;
			}
		}
	}
	
	function _find_sortcolumn(colid) {
		for (var i = 0, len = _keycols.length; i < len; i++) {
			if (_keycols[i].colid == colid) {
				return i;
			}
		}
		return -1;
	}
	
	//개별 소팅이 정의된 경우
	if (colList.indexOf(":") > 0) {
		arrColList = colList.split(",");
		
		for (var i = 0; i < arrColList.length; i++) {
			if (arrColList[i].indexOf(":D") > 0) {
				columnId = this.gfn_RTrimCase(arrColList[i], ":D");
				if ((findIdx = _find_sortcolumn(columnId)) > -1) {
					_keycols[findIdx].descending = true;
				} else {
					_keycols.splice(addSortSeq, 0, {
							level: 0,
							colid: columnId,
							descending: true
						});
					addSortSeq++;
				}
			} else if (arrColList[i].indexOf(":A") > 0) {
				columnId = this.gfn_RTrimCase(arrColList[i], ":A");
				
				if ((findIdx = _find_sortcolumn(columnId)) > -1) {
					_keycols[findIdx].descending = false;
				} else {
					_keycols.splice(addSortSeq, 0, {
							level: 0,
							colid: columnId,
							descending: false
						});
					addSortSeq++;
				}
			} else if (arrColList[i].indexOf(":") == -1) { // 언급이 없는 것은 Ascending
				columnId = this.gfn_RTrimCase(arrColList[i], ":A");
				
				if ((findIdx = _find_sortcolumn(columnId)) > -1) {
					_keycols[findIdx].descending = false;
				} else {
					_keycols.splice(addSortSeq, 0, {
							level: 0,
							colid: columnId,
							descending: false
						});
					addSortSeq++;
				}
			}
		}
	} else { // ascending에 의해서 소팅 적용
		if (this.gfn_IsNull(ascending)) ascending = true;
		
		if (ascending) {
			arrColList = colList.split(",");
			for (var i = 0; i < arrColList.length; i++) {
				columnId = arrColList[i];
				if ((findIdx = _find_sortcolumn(columnId)) > -1) {
					_keycols[findIdx].descending = false;
				} else {
					_keycols.splice(addSortSeq, 0, {
							level: 0,
							colid: columnId,
							descending: false
						});
					addSortSeq++;
				}
			}
		} else {
			arrColList = colList.split(",");
			
			for (var i = 0; i < arrColList.length; i++) {
				columnId = arrColList[i];
				if ((findIdx = _find_sortcolumn(columnId)) > -1) {
					_keycols[findIdx].descending = true;
				} else {
					_keycols.splice(addSortSeq, 0, {
							level: 0,
							colid: columnId,
							descending: true
						});
					addSortSeq++;
				}
			}
		}
	}
	
	keyString = "";
	var startG = false;
	var startS = false;
	
	for (var i = 0, len = _keycols.length; i < len; i++) {
		if (_keycols[i].level > 0) {
			if (!startG) {
				if (keyString && keyString.length) {
					keyString += ",G:";
				} else {
					keyString += "G:";
				}
				startG = true;
			}
			keyString += (_keycols[i].descending ? "-" : "+") + _keycols[i].colid;
		} else {
			if (!startS) {
				keyString += "S:";
				startS = true;
			}
			keyString += (_keycols[i].descending ? "-" : "+") + _keycols[i].colid;
		}
	}
	
	obj.set_keystring(keyString);
};

/**
 * @class  DataSet의 Row 중에서 변경된 내용이 있는지 여부 <br>
 * @param  {Object} obj - Dataset 객체
 * @return {Boolean} 변경여부
 * @example
 */
pForm.gfn_IsUpdate = function(obj)
{
	if (obj.getDeletedRowCount() > 0) {
		return true;
	}
	
	for (var i = 0; i < obj.getRowCount(); i++) {
		if (obj.getRowType(i) == 2 || obj.getRowType(i) == 4 || obj.getRowType(i) == 8) {
			return true;
		}
	}
	return false;
};

/**
 * @class  DataSet의 Row가 변경되었는지 여부 <br>
 * @param  {Object} obj - Dataset 객체
 * @param  {Number} row - Row Index
 * @return {Boolean} 변경여부
 * @example
 */
pForm.gfn_IsUpdateRow = function(obj, row)
{
	if (obj.updatecontrol == true) {
		if (obj.getRowType(row) == 2 || obj.getRowType(row) == 4) {
			return true;
		}
		return false;
	} else {
		for (var i = 0; obj.getColCount(); i++) {
			if (this.gfn_IsUpdateColumn(obj, row, i) == true) {
				return true;
			}
		}
	}
	return false;
};

/**
 * @class  DataSet Row에서 해당 칼럼이 변경되었는지 여부 <br>
 * @param  {Object} obj - Dataset 객체
 * @param  {Number} row - Row Index
 * @param  {String || Number} Column - 칼럼명 or 칼럼index
 * @return {Boolean} 변경여부
 * @example
 */
pForm.gfn_IsUpdateColumn = function(obj, row, column)
{
	if (obj.getRowType(row) == 2) {
		if (this.gfn_IsNull(obj.getColumn(row, column))) {
			return false;
		}
	} else {
		if (obj.getColumn(row, column) == obj.getOrgColumn(row, column)) {
			return false;
		}
	}
	return true;
};

/**
 * @class  DataSet Column 존재여부를 반환 <br>
 * @param  {Object} obj - Dataset 객체
 * @param  {String} column - Column 명
 * @return {Boolean} 존재여부
 * @example
 */
pForm.gfn_IsExistCol = function(obj, column)
{
	if (obj.getColIndex(column) == -1) {
		return false;
	} else {
		return true;
	}
};

/**
 * @class  Miplatform의 GroupKey 속성 대체 함수 (정렬 기능없이 Group 설정) <br>
 * @param  {Object} objDs - Dataset 객체
 * @param  {String} groupKey - GroupKey
 * @return N/A
 * @example
 *  this.gfn_SetGroupKey(this.ds_List, "GROUP_COLUMN1,GROUP_COLUMN2");
 *  this.gfn_SetGroupKey(this.ds_List, "GROUP_COLUMN1:GROUP_COLUMN2");
 * @desc
	1. gfn_SetGroupKey : "," 와 ":" 혼합사용 불가능
	2. gfn_SetGroupKeyMerge : "," 와 ":" 혼합사용 가능. (20200507 kjh 보완함수추가함 )
 */
pForm.gfn_SetGroupKey = function(objDs, groupKey)
{
	if (this.gfn_IsNull(objDs)) return;
	if (this.gfn_IsNull(groupKey)) return;
	if (objDs.rowcount < 2) return;
	
	objDs.set_enableevent(false);
	objDs.set_keystring("");
	
	if (groupKey.indexOf(":") > -1) {
		var arrGroup = ["Merge_Data", "Merge_Group"];
		var arrKey = this.gfn_Split(groupKey, ":");
		
		// Group Column 추가
		objDs.addColumn(arrGroup[0], "STRING", 255);
		objDs.addColumn(arrGroup[1], "INT", 255);
		
		// Merge Data 생성
		for (var i = 0; i < objDs.rowcount; i++) {
			var tmp = "";
			for (var k = 0; k < arrKey.length; k++) {
				tmp += objDs.getColumn(i, arrKey[k]);
			}
			
			objDs.setColumn(i, arrGroup[0], tmp);
		}
		
		// Group Data 비교
		var cnt = 1;
		var tmp = objDs.getColumn(0, arrGroup[0]);
		for (var i = 0; i < objDs.rowcount; i++) {
			if (tmp != objDs.getColumn(i, arrGroup[0])) {
				tmp = objDs.getColumn(i, arrGroup[0]);
				cnt++;
			}
			
			objDs.setColumn(i, arrGroup[1], cnt);
		}
		
		objDs.set_keystring("G:" + arrGroup[1]);
	} else {
		var arrGroup = new Array();
		var arrKey = this.gfn_Split(groupKey, ",");
		
		// Group Column 추가
		for (var i = 0; i < arrKey.length; i++) {
			var column = arrKey[i] + "_Group";
			arrGroup.push(column);
			objDs.addColumn(column, "INT", 255);
		}
		
		// Group Data 비교
		for (var i = 0; i < arrKey.length; i++) {
			var cnt = 1;
			var tmp = objDs.getColumn(0, arrKey[i]);
			
			for (var j = 0; j < objDs.rowcount; j++) {
				if (tmp != objDs.getColumn(j, arrKey[i])) {
					tmp = objDs.getColumn(j, arrKey[i]);
					cnt++;
				}
				
				objDs.setColumn(j, arrGroup[i], cnt);
			}
		}
		
		objDs.set_keystring("G:" + arrGroup.join(","));
	}
	
	objDs.set_enableevent(true);
};

/** 20200507 kjh
 * @class  Miplatform의 GroupKey 속성 대체 함수 (정렬 기능없이 Group 설정) <br>
           
 * @param  {Object} objDs - Dataset 객체
 * @param  {String} groupKey - GroupKey
 * @return N/A
 * @example
 *  this.gfn_SetGroupKeyMerge(this.ds_List, "GROUP_COLUMN1,GROUP_COLUMN2,GROUP_COLUMN3:GROUP_COLUMN4");
 * @desc
	기존 gfn_SetGroupKey 사용시
	1. GROUP_COLUMN1,GROUP_COLUMN2
	2. GROUP_COLUMN3:GROUP_COLUMN4
    3. 1,2 처럼 "," 또는 ":" 혼합사용은 불가능.
	4. 문제를 보완하여 "," 와 ":" 혼합사용 가능 하게 처리함.
 */
pForm.gfn_SetGroupKeyMerge = function(objDs, groupKey)
{
	if (this.gfn_IsNull(objDs)) return;
	if (this.gfn_IsNull(groupKey)) return;	
	objDs.set_enableevent(false);
	objDs.set_keystring("");
	
	var arrGroup = new Array();
	var arrKey = this.gfn_Split(groupKey, ",");

	for (var i = 0; i < arrKey.length; i++) {
		var group = arrKey[i];
		if (group.indexOf(":") > -1) {
			var arrMergeKey = this.gfn_Split(group, ":");
			var arrMergeGroup = ["Merge_Data", "Merge_Group"];
			arrMergeGroup[0] = arrMergeGroup[0] + i
			arrMergeGroup[1] = arrMergeGroup[1] + i
			arrGroup.push(arrMergeGroup[1] + "+" + this.gfn_Replace(group,":","+"));
			  
			// Group Column 추가
			objDs.addColumn(arrMergeGroup[0], "STRING", 255);
			objDs.addColumn(arrMergeGroup[1], "INT", 255);
			
			// Merge Data 생성
			for (var j = 0; j < objDs.rowcount; j++) {
				var tmp = "";
				for (var k = 0; k < arrMergeKey.length; k++) {
					tmp += objDs.getColumn(j, arrMergeKey[k]);
				}
				objDs.setColumn(j, arrMergeGroup[0], tmp);
			}
			
			// Group Data 비교
			var cnt = 1;
			var tmp = objDs.getColumn(0, arrMergeGroup[0]);
			for (var j = 0; j < objDs.rowcount; j++) {
				if (tmp != objDs.getColumn(j, arrMergeGroup[0])) {
					tmp = objDs.getColumn(j, arrMergeGroup[0]);
					cnt++;
				}
				
				objDs.setColumn(j, arrMergeGroup[1], cnt);
			}
		
		}else{
			var column = group + "_Group"+(i);
			arrGroup.push(column+"+"+group);
			objDs.addColumn(column, "INT", 255);
			
			// Group Data 비교
			var cnt = 1;
			var tmp = objDs.getColumn(0, group);
			for (var j = 0; j < objDs.rowcount; j++) {
				if (tmp != objDs.getColumn(j, group)) {
					tmp = objDs.getColumn(j, group);
					cnt++;
				}
				objDs.setColumn(j, column, cnt);
			}
		}
	}
	objDs.set_keystring("G:" + arrGroup.join(","));
	objDs.set_enableevent(true);
};

//////////////////////////////////////////////////////////////////////////
