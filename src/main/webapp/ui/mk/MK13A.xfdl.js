(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MkMain");
            this.set_titletext("월마감 업체 리스트");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(710,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSTYPE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ORDER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMakeClose", this);
            obj._setContents("<ColumnInfo><Column id=\"MKCLS_YM\" type=\"STRING\" size=\"6\"/><Column id=\"MKCLS_STARTDATE\" type=\"STRING\" size=\"8\"/><Column id=\"MKCLS_ENDDATE\" type=\"STRING\" size=\"8\"/><Column id=\"MKCLS_CLOSE\" type=\"STRING\" size=\"1\"/><Column id=\"MKCLS_MODIFY\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","8","10","382","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("월마감 업체 리스트");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","Static02:50","29","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrt","btnSearch:10","29","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("출력");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calYyMm","101","80","136","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_editformat("yyyy-MM");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stDate","calYyMm:42","80","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("진행일자");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate","stDate:3","80","140","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEDate","calSDate:3","80","140","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel","calEDate:7","76","43","39",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_icon("url(\'Img::ico_excel_O.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("stYyyyMm",null,"80","85","35","calYyMm:3",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("조회연월");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","8","130","672",null,null,"1.81%",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"143\"/><Column size=\"104\"/><Column size=\"330\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"비용구분\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"업체코드\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"거래처명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:PROCESSTYPE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\"/><Cell col=\"1\" text=\"bind:CUST_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\"/><Cell col=\"2\" text=\"bind:NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnUp","calYyMm:0","80","21","17",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("▲");
            obj.set_background("lightsteelblue");
            obj.set_font("bold 12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnDown","calYyMm:0","98","21","17",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("▼");
            obj.set_background("lightsteelblue");
            obj.set_font("bold 12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","btnPrt:10","28","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("닫기");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",710,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK13A.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK13A.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK13A.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var urlExcel = nexacro.getApplication().gv_urlXeni;
        var gv_urlRdDataServer = nexacro.getApplication().gv_urlRdDataServer;

        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", nexacro.getApplication().gv_selectMenu);

        	vPerSel = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_SELECT");

        	if(vPerSel = "1"){
        		var d = new Date();
        		var strToDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");						//오늘날짜
        		var strToDay  = strToDay.substr(0,6);
        		this.calYyMm.set_value(strToDay);
        		this.fctn_MakeClose_Search();													//해당월 마감기간 조회
        	}
        };

        //#######################################################
        //	마감일자 조회
        //#######################################################
        this.fctn_MakeClose_Search = function()
        {

        	in_ds 	= "dsMakeClose=dsMakeClose";
        	out_ds 	= "dsMakeClose=dsMakeClose";
        	str_url = "JSP/mk/make_closing.jsp";
            str_arg = "MKCLS_YM=" + nexacro.wrapQuote( ) + " MKCLS_STARTDATE=" + nexacro.wrapQuote( );

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, "", "fnCallbackClosingSelect", false, "S", false, this);
        }

        this.fnCallbackClosingSelect = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{

        		this.dsMakeClose.filter("MKCLS_STARTDATE<='" + this.calYyMm.value + "'&&MKCLS_ENDDATE>='" + this.calYyMm.value + "'");
        		this.calSDate.set_value(this.dsMakeClose.getColumn(0, "MKCLS_STARTDATE"));
        		this.calEDate.set_value(this.dsMakeClose.getColumn(0, "MKCLS_ENDDATE"));
        	}
        };

        this.MkMain_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.MkMain_ontimer = function(obj,e)
        {

        	var l;
        	if (obj.getOffsetWidth() < 1300)
        	{
        		l = 0;
        	}
        	else
        	{
        		l = (obj.getOffsetWidth() - 1300) / 2;
        	}

        	trace(l);
        	this.killTimer(0);
        };

        //조회버튼 클릭
        this.btnSearch_onclick = function(obj,e)
        {
        	trace(this.calSDate.value.length);

        	if(this.calSDate.value.length != 8 )
        	{
        		alert("일자를 정확히 입력하여 주십시요.");
        		this.calSDate.setFocus();
        		return false;
        	}

        	if (this.calEDate.value.length != 8 )
        	{
        		alert("일자를 정확히 입력하여 주십시요.");
        		this.calEDate.setFocus();
        		return false;
        	}

        	in_ds 	= "dsList=dsList";
        	out_ds 	= "dsList=dsList";
        	str_url = "JSP/mk/mk13A_Select.jsp";
        	str_arg = "SDATE=" + nexacro.wrapQuote(this.calSDate.value) +
        	          " EDATE=" + nexacro.wrapQuote(this.calEDate.value);

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnCallbackSelect", false, "S", false, this);

        };


        this.fnCallbackSelect = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{

        		if(this.dsList.rowcount == 0){
        			alert("조회된 자료가 없습니다.");
        			return false;
        		}
        	}
        };

        //레포트 출력 이벤트
        this.btnPrt_onclick = function(obj,e)
        {
        	if(this.calSDate.value.length != 8 )
        	{
        		alert("일자를 정확히 입력하여 주십시요.");
        		this.calSDate.setFocus();
        		return false;
        	}

        	if (this.calEDate.value.length != 8 )
        	{
        		alert("일자를 정확히 입력하여 주십시요.");
        		this.calEDate.setFocus();
        		return false;
        	}

        	var rdUrl = gv_svcUrl + "rpt/mk/MK13A.mrd";
        	var rdParam = "/ragentpath ["+ gv_urlRdDataServer +"]" + " /rp [" + this.calSDate.value + "] [" + this.calEDate.value + "] ";
        	this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1024, 770);

        };

        this.LocalFctn_OnKeyDown = function(obj,e)
        {
        	var curObj = this.getFocus();

        	//ENTER입력시 TAB처럼 이동
        	if(e.keycode == "13"){

        		curObj = this.getNextComponent(curObj, true);
        		curObj.setFocus();

        		//콤보타입일 경우 목록보이게 자동설정
        		if(curObj == "[object Combo]")
        		{
        			if(curObj.index == -1)
        				curObj.dropdown();
        		}
        	}
        };

        this.btnExcel_onclick = function(obj,e)
        {
        	this.exportObj = new ExcelExportObject();
            var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID,
                this.grdList, "Sheet1!A1");

        	this.exportObj.set_exporturl(urlExcel);
        	this.exportObj.exportData();
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close(-1);
        };

        this.btnUp_onclick = function(obj,e)
        {
        	var strUpDate = Eco.date.addMonth(this.calYyMm.value, +1);
        	strUpDate = strUpDate.substr(0, 6);
        	this.calYyMm.set_value(strUpDate);
        	this.calYyMm_onchanged();

        };

        this.btnDown_onclick = function(obj,e)
        {
        	var strDownDate = Eco.date.addMonth(this.calYyMm.value, -1);
        	strDownDate = strDownDate.substr(0, 6);
        	this.calYyMm.set_value(strDownDate);
        	this.calYyMm_onchanged();

        };

        this.calYyMm_onchanged = function(obj,e)
        {
        	this.dsMakeClose.filter();
        	this.dsMakeClose.filter("MKCLS_STARTDATE<='" + this.calYyMm.value + "'&&MKCLS_ENDDATE>='" + this.calYyMm.value + "'");
        	this.calSDate.set_value(this.dsMakeClose.getColumn(0, "MKCLS_STARTDATE"));
        	this.calEDate.set_value(this.dsMakeClose.getColumn(0, "MKCLS_ENDDATE"));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkMain_onload,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnPrt.addEventHandler("onclick",this.btnPrt_onclick,this);
            this.calYyMm.addEventHandler("onchanged",this.calYyMm_onchanged,this);
            this.calSDate.addEventHandler("onkeyup",this.LocalFctn_OnKeyDown,this);
            this.calEDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.btnExcel.addEventHandler("onclick",this.btnExcel_onclick,this);
            this.grdList.addEventHandler("onenterdown",this.grdList_onenterdown,this);
            this.grdList.addEventHandler("onheadclick",this.grdList_onheadclick,this);
            this.btnUp.addEventHandler("onclick",this.btnUp_onclick,this);
            this.btnDown.addEventHandler("onclick",this.btnDown_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("MK13A.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
