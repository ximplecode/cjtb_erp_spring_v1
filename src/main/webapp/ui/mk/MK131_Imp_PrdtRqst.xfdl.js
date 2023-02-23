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
            this.set_titletext("생산의뢰서 내역 POPUP");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPrdtRqst", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_DATENO\" type=\"STRING\" size=\"256\"/><Column id=\"PDTDTL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PDTDTL_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"PDTDTL_DTLNUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PDTDTL_PDTGUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PDTDTL_PDT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PDTDTL_WANT_INDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CAN_ORDER_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PDTDTL_ORIGINAL\" type=\"STRING\" size=\"256\"/><Column id=\"ORDMST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PDTDTL_BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","8","10","442","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("생산의뢰서 가져오기");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","912","29",null,"40","7.69%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("가져오기");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"29","80","40","btnSave:7",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calDate","643","33","140","35",null,null,null,null,null,null,this);
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stSCustCd",null,"33","100","35","443",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("생산의뢰일자");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","8","78","98.33%",null,null,"10",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsPrdtRqst");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"36\"/><Column size=\"182\"/><Column size=\"85\"/><Column size=\"98\"/><Column size=\"64\"/><Column size=\"288\"/><Column size=\"85\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell font=\"bold 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"1\" text=\"생산의뢰번호\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"의뢰유형\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"도서코드\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"연판\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"도서명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"입고요청일\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"비고\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" text=\"발주수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"9\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"생산의뢰수량\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:BOOKDTL_DATENO\" displaytype=\"normal\" combodataset=\"ds_mk_UseType\" combocodecol=\"USE_TYPE_CODE\" combodatacol=\"USE_TYPE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:PRODUCTTYPE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:BOOKMST_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"4\" text=\"bind:BOOKMST_YEAR\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"5\" text=\"bind:BOOKMST_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"6\" text=\"bind:PDTDTL_WANT_INDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"number\" displaytype=\"date\" editautoselect=\"true\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"7\" text=\"bind:PDTDTL_BIGO\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"number\" displaytype=\"normal\" editautoselect=\"true\"/><Cell col=\"8\" text=\"bind:ORDER_QTY\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"normal\" editinputtype=\"number\" maskeditformat=\"#,###\" displaytype=\"number\" editautoselect=\"true\" maskeditautoselect=\"true\"/><Cell col=\"9\" text=\"bind:PDTDTL_PDT_QTY\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose","1021","32","31","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_image("url(\'Img::icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK131_Imp_PrdtRqst.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK131_Imp_PrdtRqst.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK131_Imp_PrdtRqst.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerDML, vPerDel;
        var vStr;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var vChkAll = 0;

        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", nexacro.getApplication().gv_selectMenu);

        	vPerSel = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_SELECT");
        	vPerDML = "U";
        	vPerDel = "D";

        	var d = new Date();
        	var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");			//오늘날짜 setting
        	this.calDate.set_value(strtoDay);
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
        	this.lfn_grdAutofit(this.grdList);

        };

        //조회버튼 클릭
        this.btnSearch_onclick = function(obj,e)
        {
        	if(this.calDate.value == "" )
        	{
        		alert("생산의뢰일자를 입력해 주세요.");
        		this.calDate.setFocus();
        		return false;
        	}

        	if(vPerSel = "1")
        	{
        		in_ds 	= "dsPrdtRqst=dsPrdtRqst";
        		out_ds 	= "dsPrdtRqst=dsPrdtRqst";
        		str_url = "JSP/mk/mk131f_PrdtRqst.jsp";
        		str_arg = "PDTDTL_DATE=" + nexacro.wrapQuote(this.calDate.value);

        		this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnCallbackSelect", false, "S", false, this);
        	}else{

        		alert("조회 권한이 없습니다.");
        		return false;
        	}
        };

        this.fnCallbackSelect = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{
        		if(this.dsPrdtRqst.rowcount == 0)
        			alert("조회된 자료가 없습니다.");
        		else{

        			this.grdList.setCellPos(8, 0);
        			this.grdList.showEditor(true);

        		}
        	}
        };

        this.btnSave_onclick = function(obj,e)
        {
        	in_ds 	= "input=dsPrdtRqst:U";
        	str_url = "JSP/mk/mk131f_PrdtRqst_dml.jsp";
        	var nRow = this.dsPrdtRqst.rowposition;
        	var d = new Date();
        	var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");		//오늘날짜 setting

        	for (nRow=0 ; nRow<=this.dsPrdtRqst.getRowCount()-1 ; nRow++)
        	{
        		if (this.dsPrdtRqst.getColumn(nRow, "CHK") == '1')
        		{
        			this.dsPrdtRqst.setColumn(nRow, "ORDMST_DATE", strtoDay);
        			this.dsPrdtRqst.setColumn(nRow, "EMPLOYEE_ID", gv_sabun);
        		}
        	}

        	this.gfn_TransactionP("insert", str_url, in_ds, "", "", "fnCallbackSave", false, "D", false, this);
        };

        this.fnCallbackSave = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{

        		var d = new Date();
        		var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");		//오늘날짜 setting
        		this.opener.dsOrdMstS.deleteAll();
        		this.opener.dsOrdMstS.addRow();
        		this.opener.dsOrdMstS.setColumn(0, "ORDMST_SDATE", strtoDay);
        		this.opener.dsOrdMstS.setColumn(0, "ORDMST_EDATE", strtoDay);
        		this.opener.dsOrdMstS.setColumn(0, "ORDERBY", "1");
        		this.opener.fctn_Reload_MstList();

        	}
        };

        //헤더 클릭시 전체선택/전체해제
        this.grdList_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		this.fn_SetGridCheckAll(obj, e);
        	}
        };

        this.fn_SetGridCheckAll = function (obj, e)
        {
        	vChkAll = (vChkAll ? 0 : 1);
        	this.dsPrdtRqst.set_enableevent(false);
        	for (var i = 0; i < this.dsPrdtRqst.getRowCount(); i++)
        	{
        		this.dsPrdtRqst.setColumn(i, "CHK", vChkAll);
        	}
        	this.grdList.setCellProperty("Head", 0, "expr", vChkAll);
        	this.dsPrdtRqst.set_enableevent(true);
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

        this.ImgClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.grdList_onenterdown = function(obj,e)
        {
        	var vChk;

        	// 영업부 실제 의뢰 도서일 경우 의뢰 수량과 비교 하여
        	// 의뢰수량을 초과하여 발주 못하게 막는다
        	if(this.dsPrdtRqst.getColumn(e.row, "CAN_ORDER_QTY") != e.value)
        	{
        		this.dsPrdtRqst.setColumn(e.row, "ORDER_QTY", 0);
        		alert("생산의뢰 수량과 발주수량(입력수량)이 일치하지 않습니다. 다시 확인하여 주십시요.");
        		this.grdList.setCellPos(8);
        		return false;
        	}

        	if(this.dsPrdtRqst.getColumn(e.row, "CAN_ORDER_QTY") > 0){
        		if(this.dsPrdtRqst.getColumn(e.row, "CHK") == 1)
        			vChk = 0;
        		else
        			vChk = 1;

        		this.dsPrdtRqst.setColumn(e.row, "CHK", vChk);

        		if(this.dsPrdtRqst.getRowCount()-1 != e.row){
        			this.dsPrdtRqst.set_rowposition(e.row+1);
        			this.grdList.setCellPos(8);
        		}
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkMain_onload,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.grdList.addEventHandler("onheadclick",this.grdList_onheadclick,this);
            this.grdList.addEventHandler("onenterdown",this.grdList_onenterdown,this);
            this.ImgClose.addEventHandler("onclick",this.ImgClose_onclick,this);
        };
        this.loadIncludeScript("MK131_Imp_PrdtRqst.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
