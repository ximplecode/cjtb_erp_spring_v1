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
            this.set_titletext("뜯기비용 가져오기 POPUP");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRevival_Pick_Pop", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"PDTDTL_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"PDTDTL_NUMBER\" type=\"STRING\" size=\"4\"/><Column id=\"PDTDTL_DTLNUMBER\" type=\"STRING\" size=\"3\"/><Column id=\"ORDMST_ID\" type=\"INT\" size=\"0\"/><Column id=\"ORDDTL_SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"0\"/><Column id=\"ORDMST_QTY\" type=\"INT\" size=\"0\"/><Column id=\"IN_QTY\" type=\"INT\" size=\"0\"/><Column id=\"DAN\" type=\"INT\" size=\"0\"/><Column id=\"AMOUNT\" type=\"INT\" size=\"0\"/><Column id=\"AMOUNT_VAT\" type=\"INT\" size=\"0\"/><Column id=\"ORDDTL_RUNDATE\" type=\"STRING\" size=\"8\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"ORDMST_DATE\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","8","10","442","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("뜯기비용 가져오기");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnImport","912","29",null,"40","7.69%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("적용");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"29","80","40","btnImport:7",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose","1021","32","31","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_image("url(\'Img::icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","8","78","98.33%",null,null,"20",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsRevival_Pick_Pop");
            obj.set_autofittype("none");
            obj.set_autoenter("none");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"32\"/><Column size=\"90\"/><Column size=\"102\"/><Column size=\"57\"/><Column size=\"45\"/><Column size=\"305\"/><Column size=\"96\"/><Column size=\"94\"/><Column size=\"90\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell font=\"bold 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"진행일자\"/><Cell col=\"2\" text=\"도서코드\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"년판\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"순번\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"도서명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"발주수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"입고수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"발주일자\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"checkbox\" maskeditformat=\"@@\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"checkboxcontrol\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"1\" text=\"bind:ORDDTL_RUNDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"mask\" maskeditformat=\"####-##-##\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" maskeditautoselect=\"true\"/><Cell col=\"2\" text=\"bind:BOOKMST_CODE\" displaytype=\"normal\" combodataset=\"ds_mk_UseType\" combocodecol=\"USE_TYPE_CODE\" combodatacol=\"USE_TYPE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:BOOKMST_YEAR\" displaytype=\"normal\" combodataset=\"ds_mk_UseType\" combocodecol=\"USE_TYPE_CODE\" combodatacol=\"USE_TYPE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:BOOKMST_SEQ\" displaytype=\"normal\" combodataset=\"ds_mk_UseType\" combocodecol=\"USE_TYPE_CODE\" combodatacol=\"USE_TYPE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:BOOKMST_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"6\" text=\"bind:ORDMST_QTY\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"7\" text=\"bind:IN_QTY\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" maskeditformat=\"#,##0\" displaytype=\"mask\" maskeditautoselect=\"true\"/><Cell col=\"8\" text=\"bind:PDTDTL_DATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" maskeditformat=\"@@\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
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
        this.addIncludeScript("MK_REVIVAL_PICK_POP.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK_REVIVAL_PICK_POP.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK_REVIVAL_PICK_POP.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vYYYYMM;
        var vStr;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var vChkAll = 0;

        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);
        	vYYYYMM = this.parent.dsParam1;
        	this.btnSearch_onclick();

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

        	in_ds 	= "dsRevival_Pick_Pop=dsRevival_Pick_Pop";
        	out_ds 	= "dsRevival_Pick_Pop=dsRevival_Pick_Pop";
        	str_url = "JSP/mk/mk_revival_pick_import_list.jsp";
        	str_arg = "SDATE=" + nexacro.wrapQuote(vYYYYMM) +
        	          " EDATE=" + nexacro.wrapQuote(vYYYYMM.substr(0, 6)+"31");

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnCallbackSelect", false, "S", false, this);

        };

        this.fnCallbackSelect = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{
        		if(this.dsRevival_Pick_Pop.rowcount == 0)
        			alert("조회된 자료가 없습니다.");
        	}
        };

        //체크 안한 항목 중 진행일자 수정(ORDER_DTL/ORDDTL_RUNDATE 수정)
        this.btnSave_onclick = function(obj,e)
        {
        	in_ds 	= "input=dsRevival_Pick_Pop:U";
        	str_url = "JSP/mk/mk_revival_pick_orddtl_rundate_update.jsp";
        	str_arg = "EMPLOYEE_ID=" + nexacro.wrapQuote(gv_sabun);
        	this.gfn_TransactionP("insert", str_url, in_ds, "", str_arg, "fnCallbackSave", false, "D", false, this);
        };

        this.fnCallbackSave = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{
        		this.btnSearch_onclick();
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
        	this.dsRevival_Pick_Pop.set_enableevent(false);
        	for (var i = 0; i < this.dsRevival_Pick_Pop.getRowCount(); i++)
        	{
        		this.dsRevival_Pick_Pop.setColumn(i, "CHK", vChkAll);
        	}
        	this.grdList.setCellProperty("Head", 0, "expr", vChkAll);
        	this.dsRevival_Pick_Pop.set_enableevent(true);
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
        	if(this.grdList.getCellPos() == 1)		//진행일자 인덱스 위치
        	{
        		this.grdList.setCellPos(1, e.row+1);
        		this.grdList.showEditor();
        	}
        };

        //체크한 항목들 PRODUCT.REVIVAL_PICK_COST 테이블에 INSERT
        this.btnImport_onclick = function(obj,e)
        {
        	in_ds 	= "input=dsRevival_Pick_Pop";
        	str_url = "JSP/mk/mk_revival_pick_insert.jsp";
        	str_arg = "EMPLOYEE_ID=" + nexacro.wrapQuote(gv_sabun);
        	this.gfn_TransactionP("insert", str_url, in_ds, "", str_arg, "fnCallbackImport", false, "D", false, this);
        };


        this.fnCallbackImport = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{

        		this.opener.btnSearch_onclick();
        		this.close();
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkMain_onload,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.btnImport.addEventHandler("onclick",this.btnImport_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.ImgClose.addEventHandler("onclick",this.ImgClose_onclick,this);
            this.grdList.addEventHandler("onheadclick",this.grdList_onheadclick,this);
            this.grdList.addEventHandler("onenterdown",this.grdList_onenterdown,this);
        };
        this.loadIncludeScript("MK_REVIVAL_PICK_POP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
