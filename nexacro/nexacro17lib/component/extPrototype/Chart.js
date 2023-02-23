/**
 * 통합정보시스템 고도화 구축
 * @FileName    Chart.js
 * @Creator     UI공통
 * @CreateDate  2019.07.24
 * @Desction    Chart 관련 함수
 ************** 소스 수정 이력 ***********************************************
 * date                Modifier                Description
 *******************************************************************************
 * 2019.07.24          UI공통               최초 생성
 *******************************************************************************
 */

var pForm = nexacro.Form.prototype;

// Chart 범례 색상코드
pForm.CHART_LEGNED = [
	"#619fca", "#e25a5a", "#5ebd5e", "#ffa555", "#a374d0", "#64d1dd",
	"#40c183", "#e564c8", "#6386d6", "#5d886e", "#c0db61", "#e56335",
	"#a0a0a0", "#285cba", "#cb7964", "#ebd467", "#9da583", "#a546ae",
	"#f18282", "#526588", "#39a7d1", "#0d6b3e", "#a975a2", "#ae464b"
];

// 제목 (title)
pForm.CHART_TITLE_FONT = "bold 14pt/normal \"맑은 고딕\"";
pForm.CHART_TITLE_COLOR = "#222222";

// 범례 (legend)
pForm.CHART_LEGEND_FONT = "11pt/normal \"맑은 고딕\"";
pForm.CHART_LEGEND_COLOR = "#777777";

// 툴팁 (tooltip)
pForm.CHART_TOOLTIP_FONT = "10pt/normal \"맑은 고딕\"";
pForm.CHART_TOOLTIP_COLOR = "#ffffff";

// Category (X축) / Value (Y축)
pForm.CHART_AXIS_TITLE_FONT = "12pt/normal \"맑은 고딕\"";
pForm.CHART_AXIS_TITLE_COLOR = "#414141";

// Item (Series)
pForm.CHART_ITEM_FONT = "11pt/normal \"맑은 고딕\"";
pForm.CHART_ITEM_COLOR = "#000000";

// Title
pForm.CHART_objTitle = {
	"id": "title",
	"text": "",
	"textfont": "",
	"textcolor": ""
};

// Legend
pForm.CHART_objLegend = {
	"id": "legend",
	"padding": "3px 10px 3px 10px",
	"itemtextfont": "", // this.CHART_LEGEND_FONT
	"itemtextcolor": "", // this.CHART_LEGEND_COLOR
	"horizontalitemgap": "20",
	"markertype": "square"
};

// Tooltip
pForm.CHART_objTooltip = {
	"id": "tooltip",
	"background": "#4b4b4b",
	"linestyle": "0px none",
	"textcolor": "", // this.CHART_TOOLTIP_COLOR,
	"textfont": "", // this.CHART_TOOLTIP_FONT,
	"padding": "5px"
};

// Category (X축)
pForm.CHART_objCategoryaxis = {
	"id": "categoryaxis",
	"titletext": "",
	"titletextcolor": "", // this.CHART_AXIS_TITLE_COLOR,
	"titletextfont": "", // this.CHART_AXIS_TITLE_FONT,
	"labeltextcolor": "", // this.CHART_LEGEND_COLOR,
	"labeltextfont": "", // this.CHART_LEGEND_FONT,
	"axislinestyle": "1px solid #525252",
	"ticklinestyle": "1px solid #525252",
	"boardlinestyle": "1px solid #d0d0d0"
};

// Value (Y축)
pForm.CHART_objValueaxes = {
	"id": "valueaxis0",
	"titletext": "",
	"boardlinevisible": true,
	"boardlinestyle": "1px solid #d0d0d0",
	"labeltextcolor": "", // this.CHART_LEGEND_COLOR,
	"labeltextfont": "", // this.CHART_ITEM_FONT,
	"titletextcolor": "", // this.CHART_AXIS_TITLE_COLOR,
	"titletextfont": "", // this.CHART_AXIS_TITLE_FONT,
	"ticklinestyle": "1px solid #525252",
	"axislinestyle": "1px solid #525252",
};

// Item (Series)
pForm.CHART_objSeries = {
	"id": "",
	"titletext": "",
	"barvisible": true,
	"barsize": "",
	"itemtextvisible": true,
	"itemtextcolor": "", // this.CHART_ITEM_COLOR,
	"itemtextfont": "", // this.CHART_ITEM_FONT,
	"valuecolumn": "",
	"highlightbarvisible": "true",
	"highlightlinevisible": "true",
	"highlightpointvisible": "true",
	"barfillstyle": "",
	"linestyle" : "",
	"lineareafillstyle" : ""
};

/**
 * @class  Chart 기본 설정 <br>
 * @param  {Object} obj - Chart 객체
 * @return N/A
 * @example
 */
pForm.gfn_InitChart = function(obj)
{
	
	if (this.gfn_IsNull(obj)) return;
	
	var type = this.gfn_GetType(obj);
	switch (type) {
		case "BasicChart" :
			obj.hideHRangebar();
			obj.hideVRangebar();
			this.gfn_SetFontColorOfChart(obj, "bar");
			break;
			
		case "PieChart" :
			this.gfn_SetFontColorOfChart(obj, "pie");
			break;
	}
};

/**
 * @class  범례 색상코드 반환 <br>
 * @param  {Number} no - 범례 번호 (1 ~ 24)
 * @return {String} 범례 번호에 해당하는 색상코드
 * @example
 *  this.gfn_GetLegendOfChart(1);
 */
pForm.gfn_GetLegendOfChart = function(no)
{
	if (this.gfn_IsNull(no)) return "";
	if (this.CHART_LEGNED.length < no) return "";
	
	return this.CHART_LEGNED[no - 1];
};

/**
 * @class  Chart의 Title(제목) 변경 <br>
 * @param  {Object} obj - Chart 객체
 * @param  {String} text - Title Text
 * @return N/A
 * @example
 *  var text = this.gfn_Today(true) + " 데이터";
 *  this.gfn_SetTitleOfChart(this.basChart_00, text);
 */
pForm.gfn_SetTitleOfChart = function(obj, text)
{
	if (this.gfn_IsNull(obj)) return;
	if (this.gfn_IsNull(text)) return;
	
	obj.title.set_text(text);
};

/**
 * @class  Chart의 Title(제목) 숨김 / 보임 <br>
 * @param  {Object} obj - Chart 객체
 * @param  {Boolean} [isVisible] - true / false (default : true)
 * @return N/A
 * @example
 *  this.gfn_SetVisibleTitleOfChart(this.basChart_00, false);
 */
pForm.gfn_SetVisibleTitleOfChart = function(obj, isVisible)
{
	if (this.gfn_IsNull(obj)) return;
	if (this.gfn_IsNull(isVisible)) isVisible = true;
	
	obj.title.set_visible(isVisible);
};

/**
 * @class  Category (X축) Title 변경 <br>
 * @param  {Object} obj - Chart 객체
 * @param  {String} title - Category Title
 * @return N/A
 * @example
 */
pForm.gfn_SetTitleCategoryOfChart = function(obj, title)
{
	if (this.gfn_IsNull(obj)) return;
	if (this.gfn_IsNull(title)) return;
	
	obj.categoryaxis.set_titletext(title);
};

/**
 * @class  Value (Y축) Title 변경 <br>
 * @param  {Object} obj - Chart 객체
 * @param  {String} title - Value Title
 * @return N/A
 * @example
 */
pForm.gfn_SetTitleValueOfChart = function(obj, title)
{
	if (this.gfn_IsNull(obj)) return;
	if (this.gfn_IsNull(title)) return;
	
	obj.valueaxes[0].set_titletext(title);
};

/**
 * @class  Chart의 Font, Color 설정 <br>
 * @param  {Object} obj - Chart 객체
 * @param  {String} type - Chart 구분 (bar, pie)
 * @return {Object} Chart 객체
 * @example
 */
pForm.gfn_SetFontColorOfChart = function(obj, type)
{
	if (this.gfn_IsNull(obj)) return;
	if (this.gfn_IsNull(type)) return;
	
	switch (type) {
		case "bar" :
		case "line" :
		case "area" :
			// title
			obj.title.set_textfont(this.CHART_TITLE_FONT);
			obj.title.set_textcolor(this.CHART_TITLE_COLOR);
			
			// legend
			obj.legend.set_itemtextfont(this.CHART_LEGEND_FONT);
			obj.legend.set_itemtextcolor(this.CHART_LEGEND_COLOR);
			
			// tooltip
			obj.tooltip.set_textcolor(this.CHART_TOOLTIP_COLOR);
			obj.tooltip.set_textfont(this.CHART_TOOLTIP_FONT);
			
			// category
			obj.categoryaxis.set_titletextcolor(this.CHART_AXIS_TITLE_COLOR);
			obj.categoryaxis.set_titletextfont(this.CHART_AXIS_TITLE_FONT);
			obj.categoryaxis.set_labeltextcolor(this.CHART_LEGEND_COLOR);
			obj.categoryaxis.set_labeltextfont(this.CHART_LEGEND_FONT);
			
			// value
			obj.valueaxes[0].set_labeltextcolor(this.CHART_LEGEND_COLOR);
			obj.valueaxes[0].set_labeltextfont(this.CHART_ITEM_FONT);
			obj.valueaxes[0].set_titletextcolor(this.CHART_AXIS_TITLE_COLOR);
			obj.valueaxes[0].set_titletextfont(this.CHART_AXIS_TITLE_FONT);
			
			for (var i = 0; i < obj.seriesset.length; i++) {
				var objSeries = obj.seriesset[i];
				objSeries.set_itemtextcolor(this.CHART_ITEM_COLOR);
				objSeries.set_itemtextfont(this.CHART_ITEM_FONT);
				
				var legendColor = this.gfn_GetLegendOfChart(i + 1);
				objSeries.set_barfillstyle(legendColor);
				objSeries.set_linestyle("1px solid " + legendColor);
				objSeries.set_lineareafillstyle(legendColor);
			}
			
			break;
			
		case "pie" :
		case "donut" :
			// title
			obj.title.set_textfont(this.CHART_TITLE_FONT);
			obj.title.set_textcolor(this.CHART_TITLE_COLOR);
			
			// legend
			obj.legend.set_itemtextfont(this.CHART_LEGEND_FONT);
			obj.legend.set_itemtextcolor(this.CHART_LEGEND_COLOR);
			
			// tooltip
			obj.tooltip.set_textcolor(this.CHART_TOOLTIP_COLOR);
			obj.tooltip.set_textfont(this.CHART_TOOLTIP_FONT);
			
			for (var i = 0; i < obj.seriesset.length; i++) {
				var objSeries = obj.seriesset[i];
				objSeries.set_itemtextcolor(this.CHART_ITEM_COLOR);
				objSeries.set_itemtextfont(this.CHART_ITEM_FONT);
				objSeries.set_linestyle("2px solid #ffffff");
			}
			break;
	}
	
	return obj;
};

/**
 * @class  Bar / Line / Area Chart의 구성 정보 설정 <br>
 * @param  {Object} obj - Chart 객체
 * @param  {Object} option - JSON Object
 *                 {String} [type] - Chart 종류 (bar, line, area) // default : bar
 *                 {String} [direction] - 방향 (h : 가로, v : 세로) // default : h
 *                 {String} bindDataset - Bind Dataset
 *                 {String} title - Chart 제목
 *                 {String} categoryTitle - X축(category) Title
 *                 {String} categoryColumn - X축 표시 칼럼
 *                 {String} valueTitle - Y축(value) Title
 *                 {String} [valueAngle] - Y축 Title 각도 (-90, 0, 90)
 *                 {Array} itemColumn - 항목 칼럼 배열
 *                 {Array} legned - 범례 배열
 *                 {Boolean} [isStack] - 누적 표시 여부 (true / false) // default : false
 *                 {String} barSize - Bar 크기 백분율 (0 ~ 100 사이)
 *                 {Boolean} [itemTextVisible] - Item (Series) Text 표시 여부
 * @return N/A
 * @example
 */
pForm.gfn_SetBarChart = function(obj, option)
{
	if (this.gfn_IsNull(obj)) return;
	if (this.gfn_IsNull(option)) return;
	
	var type = option.type; // Chart 종류 (bar, line, area)
	var direction = option.direction; // 방향 (h : 가로, v : 세로)
	var bindDataset = option.bindDataset; // Bind Dataset
	var title = option.title; // Chart 제목
	var categoryTitle = option.categoryTitle; // X축(category) Title
	var categoryColumn = option.categoryColumn; // X축 표시 칼럼
	var valueTitle = option.valueTitle; // Y축(value) Title
	var valueAngle = option.valueAngle; // Y축 Title 각도 (-90, 0, 90)
	var itemColumn = option.itemColumn; // 항목 칼럼
	var legned = option.legned; // 범례
	var isStack = option.isStack; // 누적 표시 여부 (true / false)
	var barsize = option.barSize; // Bar 크기 백분율
	var itemTextVisible = option.itemTextVisible; // Item (Series) Text 표시 여부
	
	if (this.gfn_IsNull(type)) type = "bar";
	if (this.gfn_IsNull(direction)) direction = "h";
	if (!this.gfn_IsNull(bindDataset)) obj.set_binddataset(bindDataset);
	if (!this.gfn_IsNull(categoryColumn)) {
		if (new String(categoryColumn).indexOf("bind:") > -1) {
			obj.set_categorycolumn(categoryColumn);
		} else {
			obj.set_categorycolumn("bind:" + categoryColumn);
		}
	}
	
	if (!this.gfn_IsNull(title)) this.CHART_objTitle.text = title;
	if (!this.gfn_IsNull(categoryTitle)) this.CHART_objCategoryaxis.titletext = categoryTitle;
	if (!this.gfn_IsNull(valueTitle)) this.CHART_objValueaxes.titletext = valueTitle;
	if (this.gfn_IsNull(valueAngle)) valueAngle = -90;
	
	if (this.gfn_IsNull(isStack)) isStack = false;
	if (this.gfn_IsNull(barsize)) barsize = 70;
	if (this.gfn_IsNull(itemTextVisible)) itemTextVisible = true;
	
	var objContents = {
		"title": this.CHART_objTitle,
		"legend": this.CHART_objLegend,
		"tooltip": this.CHART_objTooltip,
		"categoryaxis": this.CHART_objCategoryaxis,
		"seriesset": [],
		"valueaxes": [this.CHART_objValueaxes],
		"board": {
			"id": "board"
		},
	};
	
	obj.updateContents(objContents);
	this.gfn_SetFontColorOfChart(obj, "bar");
	obj.valueaxes[0].set_titlerotate(valueAngle);
	
	// item (Series)
	for (var i = 0; i < itemColumn.length; i++) {
		this.CHART_objSeries.id = "series" + i;
		this.CHART_objSeries.titletext = legned[i];
		this.CHART_objSeries.valuecolumn = "bind:" + itemColumn[i];
		
		var legendColor = this.gfn_GetLegendOfChart(i + 1);
		this.CHART_objSeries.barfillstyle = legendColor;
		this.CHART_objSeries.linestyle = "1px solid " + legendColor;
		this.CHART_objSeries.lineareafillstyle = legendColor;
		
		obj.setSeries(this.CHART_objSeries.id, this.CHART_objSeries);
		
		var objSeries = obj.getSeriesByID(this.CHART_objSeries.id);		
		objSeries.set_itemtextcolor(this.CHART_ITEM_COLOR);
		objSeries.set_itemtextfont(this.CHART_ITEM_FONT);
		objSeries.set_itemtextvisible(itemTextVisible);
		objSeries.set_barsize(barsize);
		
		if (type == "line" || type == "area") {
			objSeries.set_barvisible(false);
			objSeries.set_highlightbarvisible(false);
			objSeries.set_highlightlinevisible(false);
			objSeries.set_highlightpointvisible(false);
			
			if (type == "line") {
				objSeries.set_linevisible(true);
			} else {
				objSeries.set_lineareavisible(true);
			}
		}
	}
	
	// option
	if (direction == "v") obj.set_rotateaxis(true);
	if (isStack == true) obj.set_stacktype("normal");
};

/**
 * @class  Pie / Donut Chart의 구성 정보 설정 <br>
 * @param  {Object} obj - Chart 객체
 * @param  {Object} option - JSON Object
 *                 {String} [type] - Chart 종류 (pie, donut) // default : pie
 *                 {String} bindDataset - Bind Dataset
 *                 {String} title - Chart 제목
 *                 {String} categoryColumn - category 칼럼
 *                 {Array} itemColumn - 항목 칼럼 배열
 *                 {String} [radius] - 지름 크기 백분율 (0 ~ 100 사이)
 * @return N/A
 * @example
 */
pForm.gfn_SetPieChart = function(obj, option)
{
	if (this.gfn_IsNull(obj)) return;
	if (this.gfn_IsNull(option)) return;
	
	var type = option.type; // Chart 종류 (pie, donut)
	var bindDataset = option.bindDataset; // Bind Dataset
	var title = option.title; // Chart 제목
	var categoryColumn = option.categoryColumn; // category 칼럼
	var itemColumn = option.itemColumn; // 항목 칼럼
	var radius = option.radius; // 지름 크기 백분율
	
	if (this.gfn_IsNull(type)) type = "pie";
	if (!this.gfn_IsNull(bindDataset)) obj.set_binddataset(bindDataset);
	if (!this.gfn_IsNull(categoryColumn)) {
		if (new String(categoryColumn).indexOf("bind:") > -1) {
			obj.set_categorycolumn(categoryColumn);
		} else {
			obj.set_categorycolumn("bind:" + categoryColumn);
		}
	}
	
	if (!this.gfn_IsNull(title)) this.CHART_objTitle.text = title;
	if (!this.gfn_IsNull(radius)) radius = 80;
	
	var objContents = {
		"title": this.CHART_objTitle,
		"legend": this.CHART_objLegend,
		"tooltip": this.CHART_objTooltip,
		"seriesset": [],
		"board": {
			"id": "board"
		},
	};
	
	obj.updateContents(objContents);
	this.gfn_SetFontColorOfChart(obj, "pie");
	
	// item (Series)
	if (!this.gfn_IsNull(itemColumn)) {
		this.CHART_objSeries.id = "series0";
		this.CHART_objSeries.valuecolumn = "bind:" + itemColumn;
		
		obj.setSeries(this.CHART_objSeries.id, this.CHART_objSeries);
		
		var objSeries = obj.getSeriesByID(this.CHART_objSeries.id);		
		objSeries.set_itemtextcolor(this.CHART_ITEM_COLOR);
		objSeries.set_itemtextfont(this.CHART_ITEM_FONT);
		objSeries.set_linestyle("2px solid #ffffff");
		objSeries.set_radius(radius);
		
		// Donut 형태로 표시하기 위한 안쪽 원의 지름 크기를 백분율로 설정하는 속성 (0 ~ 100 사이)
		if (type == "donut") objSeries.set_innerradius(70);
	}
};

//this.chartVars = "rMateOnLoadCallFunction=chartReadyHandler";


/**
 * @class 차트정보 설정 <br>
 * @param  {String} divId - Div ID
 *         {String} chartId - 차트 ID      
 *         {String} chartVars - 핸들러 문자열    
 *         {String} chartWidth - 차트 가로 크기    
 *         {String} chartHeight - 차트 세로 크기                
 *                
 *                 
 * @return N/A
 * @example
 */

pForm.gfn_Chart  = function( divId, chartId, chartVars, chartWidth, chartHeight)
{
	//alert("divId::"+divId+"chartId::"+chartId+"chartWidth::"+chartWidth+"chartHeight::"+chartHeight);
	var winId = this.parent.parent.fv_WinId;	
	
	var chartDiv = "mainframe.VFrameSet.HFrameSet.VFrameSet.WorkFrame."+winId+".form.div_Work.form."+divId;
	
	rMateChartH5.create(chartId, chartDiv, chartVars, chartWidth, chartHeight); 

};


pForm.gfn_MapChart  = function( divId, chartId, chartVars, chartWidth, chartHeight)
{
	//alert("divId::"+divId+"chartId::"+chartId+"chartWidth::"+chartWidth+"chartHeight::"+chartHeight);
	var winId = this.parent.parent.fv_WinId;	
	
	var chartDiv = "mainframe.VFrameSet.HFrameSet.VFrameSet.WorkFrame."+winId+".form.div_Work.form."+divId;
	
	rMateMapChartH5.create(chartId, chartDiv, chartVars, chartWidth, chartHeight); 
	rMateMapChartH5.setAssetsPath("/scg/rMateMapChartH5/");

};

/**
 * @class 차트정보 설정 <br>
 * @param  {String} winId - Window ID
 *		   {String} divId - Div ID(탭경로 포함)
 *         {String} chartId - 차트 ID      
 *         {String} chartVars - 핸들러 문자열    
 *         {String} chartWidth - 차트 가로 크기    
 *         {String} chartHeight - 차트 세로 크기                
 *                
 *                 
 * @return N/A
 * @example
 */
pForm.gfn_TabChart  = function(winId, divId, chartId, chartVars, chartWidth, chartHeight)
{
	//"mainframe.VFrameSet.HFrameSet.VFrameSet.WorkFrame.B1501060011F_8036.form.div_Work.form.tab_Market.tab2.form.div_Chart.form"
	var chartDiv = "mainframe.VFrameSet.HFrameSet.VFrameSet.WorkFrame."+winId+".form.div_Work.form."+divId;
	
	rMateChartH5.create(chartId, chartDiv, chartVars, chartWidth, chartHeight); 

};

/**
 * @class 차트 데이타를 Json 구조의 배열로 리턴 <br>
 * @param  {Object} dsObj - dsObj
 *         {Array} option - 칼럼 배열                 
 * @return 배열객체
 * @example
 */
pForm.gfn_GetChartData = function(dsObj, option)
{
	var arrJson =  new Array() ;	
	var arrCol = option.arrCol;
	
	for(i=0;i<dsObj.rowcount;i++){
		
		// 객체 생성
		var data = new Object() ;	
		for(j=0;j<arrCol.length;j++){		
		    var colName = arrCol[j];					
			data[colName] = dsObj.getColumn(i,colName);			
		}
		
		// 리스트에 생성된 객체 삽입
		arrJson.push(data) ;		
	}
	
	// String 형태로 변환
	//var chartData2 = JSON.stringify(arrJson);
	
	return arrJson;
};






/**
 * @class 차트정보 설정 <br>
 * @param  {String} divId - Div ID
 *         {String} chartId - 차트 ID      
 *         {String} chartVars - 핸들러 문자열    
 *         {String} chartWidth - 차트 가로 크기    
 *         {String} chartHeight - 차트 세로 크기                
 *                
 *                 
 * @return N/A
 * @example
 */

pForm.gfn_MapChart  = function( divId, chartId, chartVars, chartWidth, chartHeight)
{
	//alert("divId::"+divId+"chartId::"+chartId+"chartWidth::"+chartWidth+"chartHeight::"+chartHeight);
	var winId = this.parent.parent.fv_WinId;	
	
	var chartDiv = "mainframe.VFrameSet.HFrameSet.VFrameSet.WorkFrame."+winId+".form.div_Work.form."+divId;
	
	
	rMateMapChartH5.create(chartId, chartDiv, chartVars, chartWidth, chartHeight); 

};
