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
            this.set_titletext("뜯기 비용관리");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRevival_Pick", this);
            obj._setContents("<ColumnInfo><Column id=\"PICK_ID\" type=\"INT\" size=\"0\"/><Column id=\"PDTDTL_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"PDTDTL_NUMBER\" type=\"STRING\" size=\"4\"/><Column id=\"PDTDTL_DTLNUMBER\" type=\"STRING\" size=\"3\"/><Column id=\"ORDMST_ID\" type=\"INT\" size=\"0\"/><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"0\"/><Column id=\"ORD_QTY\" type=\"INT\" size=\"0\"/><Column id=\"IN_QTY\" type=\"INT\" size=\"0\"/><Column id=\"UNITCOST\" type=\"INT\" size=\"0\"/><Column id=\"AMOUNT\" type=\"INT\" size=\"0\"/><Column id=\"AMOUNT_VAT\" type=\"INT\" size=\"0\"/><Column id=\"ORDDTL_RUNDATE\" type=\"STRING\" size=\"8\"/><Column id=\"ORDMST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"200\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","8","10","382","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("뜯기비용 관리");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"28","80","40","0.77%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"29","80","40","btnDel:10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnImport",null,"29","80","40","btnSave:10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("가져오기");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"29","80","40","btnImport:95",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calYyMm",null,"30","136","35","btnSearch:28",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_editformat("yyyy-MM");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stYyyyMm",null,"30","85","35","calYyMm:3",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("해당월");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Button("btnUp","calYyMm:0","30","21","17",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("▲");
            obj.set_background("lightsteelblue");
            obj.set_font("bold 12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnDown","calYyMm:0","48","21","17",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("▼");
            obj.set_background("lightsteelblue");
            obj.set_font("bold 12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","8","78","98.85%",null,null,"10",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("dsRevival_Pick");
            obj.set_autofittype("none");
            obj.set_autoenter("none");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"90\"/><Column size=\"102\"/><Column size=\"57\"/><Column size=\"45\"/><Column size=\"270\"/><Column size=\"96\"/><Column size=\"94\"/><Column size=\"94\"/><Column size=\"97\"/><Column size=\"90\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"진행일자\"/><Cell col=\"1\" text=\"도서코드\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"년판\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"순번\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"도서명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"발주수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"입고수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"단가\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" text=\"공급가액\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"9\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"발주일자\"/></Band><Band id=\"body\"><Cell text=\"bind:ORDDTL_RUNDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" maskeditformat=\"@@\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"1\" text=\"bind:BOOKMST_CODE\" displaytype=\"normal\" combodataset=\"ds_mk_UseType\" combocodecol=\"USE_TYPE_CODE\" combodatacol=\"USE_TYPE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:BOOKMST_YEAR\" displaytype=\"normal\" combodataset=\"ds_mk_UseType\" combocodecol=\"USE_TYPE_CODE\" combodatacol=\"USE_TYPE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:BOOKMST_SEQ\" displaytype=\"normal\" combodataset=\"ds_mk_UseType\" combocodecol=\"USE_TYPE_CODE\" combodatacol=\"USE_TYPE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:BOOKMST_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"5\" text=\"bind:ORD_QTY\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"6\" text=\"bind:IN_QTY\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" maskeditformat=\"#,##0\" displaytype=\"mask\" maskeditautoselect=\"true\"/><Cell col=\"7\" text=\"bind:UNITCOST\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"mask\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,##0\" maskeditautoselect=\"true\"/><Cell col=\"8\" text=\"bind:AMOUNT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"number\" maskeditformat=\"#,##0\" displaytype=\"mask\" editautoselect=\"true\"/><Cell col=\"9\" text=\"bind:ORDMST_DATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" maskeditformat=\"@@\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK_REVIVAL_PICK.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK_REVIVAL_PICK.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK_REVIVAL_PICK.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerDML, vPerDel;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var vStr = "U";

        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", nexacro.getApplication().gv_selectMenu);

        	vPerSel = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_SELECT");
        	vPerDML = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_DML");
        	vPerDel = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_DELETE");

        	//DML권한 체크 및 컴포넌트 ENABLE처리
        	if(vPerDML != "1" || vPerSel != "1" || vPerDel != "1")
        		this.fctn_User_Enabled(this, false);

        	if(vPerSel = "1"){
        		var d = new Date();
        		var strToDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");						//오늘날짜
        		var strToDay  = strToDay.substr(0,6);
        		this.calYyMm.set_value(strToDay);
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
        	this.lfn_grdAutofit(this.grdList);
        };

        //조회버튼 클릭
        this.btnSearch_onclick = function(obj,e)
        {
        	in_ds 	= "dsRevival_Pick=dsRevival_Pick";
        	out_ds 	= "dsRevival_Pick=dsRevival_Pick";
        	str_url = "JSP/mk/mk_revival_pick_cost_list.jsp";
        	str_arg = "SDATE=" + nexacro.wrapQuote(this.calYyMm.value) +
        	          " EDATE=" + nexacro.wrapQuote(this.calYyMm.value.substr(0, 6)+"31");

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnCallbackSelect", false, "S", false, this);

        };


        this.fnCallbackSelect = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{

        		if(this.dsRevival_Pick.rowcount == 0){
        			alert("조회된 자료가 없습니다.");
        			return false;
        		}
        	}
        };

        this.btnSave_onclick = function(vStr)
        {
        	in_ds 	= "input=dsRevival_Pick:U";
        	str_url = "JSP/mk/mk_revival_pick_update.jsp";
        	this.gfn_TransactionP("insert", str_url, in_ds, "", "", "fnCallbackSave", false, vStr, false, this);
        };

        this.fnCallbackSave = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{
        		vStr = "U";
        		this.btnSearch_onclick();
        	}
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

        this.btnUp_onclick = function(obj,e)
        {
        	var strUpDate = Eco.date.addMonth(this.calYyMm.value, +1);
        	strUpDate = strUpDate.substr(0, 6);
        	this.calYyMm.set_value(strUpDate);
        };

        this.btnDown_onclick = function(obj,e)
        {
        	var strDownDate = Eco.date.addMonth(this.calYyMm.value, -1);
        	strDownDate = strDownDate.substr(0, 6);
        	this.calYyMm.set_value(strDownDate);
        };

        //#######################################################
        // 사용권한에 따른 컴포넌트 Enable 여부
        // formObj : 폼 ID 변수
        // _set : Enable 변수 (True, False)
        //#######################################################
        this.fctn_User_Enabled = function(formObj, _set)
        {
        	var comObj;
        	// 마스터 폼 컴포넌트 Enabled 여부
        	for(var i = 0; i < formObj.components.length;  i++)
        	{
        		comObj = formObj.components[i];

        		if (comObj == "[object Edit]" || comObj == "[object Combo]"
        		   || comObj == "[object Calendar]" || comObj == "[object MaskEdit]"
        		   || comObj == "[object TextArea]")
        		{
        			comObj.set_enable(_set);
        		}
        	}

        	if(vPerSel != 1)
        		this.btnSearch.set_enable(_set);

        	if(vPerDML != 1){
        		this.btnSave.set_enable(_set);
        		this.btnImport.set_enable(_set);
        	}

        	if(vPerDel != 1)
        		this.btnDel.set_enable(_set);
        }

        //뜯기비용 가져오기 POPUP
        this.btnImport_onclick = function(obj,e)
        {
        	var objParam = {dsParam1:this.calYyMm.value}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popup", objParam, "mk::MK_REVIVAL_PICK_POP.xfdl", "popupRevivalPick", this, 10, 58, 1080, 650);
        };

        this.grdList_onenterdown = function(obj,e)
        {
        	var nAmount = 0;
        	var nAmount_VAT = 0;
        	var nRow = this.dsRevival_Pick.rowposition;

        	if(this.grdList.getCellPos() == 7)		//단가 컬럼 인덱스
        	{
        		nAmount = nexacro.toNumber(this.dsRevival_Pick.getColumn(nRow, "IN_QTY"))
        				* nexacro.toNumber(this.dsRevival_Pick.getColumn(nRow, "UNITCOST"));

        		nAmount =  nexacro.floor(nAmount);
        		nAmount_VAT = nAmount * 0.1;

        		this.dsRevival_Pick.setColumn(nRow, "AMOUNT"     , nAmount);
        		this.dsRevival_Pick.setColumn(nRow, "AMOUNT_VAT" , nAmount_VAT);
        		this.dsRevival_Pick.setColumn(nRow, "EMPLOYEE_ID", gv_sabun);

        		this.grdList.moveToNextCell();
        		this.grdList.showEditor();
        	}
        };



        this.btnDel_onclick = function(obj,e)
        {
        	bRtn = this.confirm("뜯기비용 관리내역을 삭제하시겠습니까?", "뜯기비용 관리");

        	if(bRtn == true)
        	{
        		this.dsRevival_Pick.deleteRow(this.dsRevival_Pick.rowposition);
        		this.btnSave_onclick("D");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkMain_onload,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnImport.addEventHandler("onclick",this.btnImport_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnUp.addEventHandler("onclick",this.btnUp_onclick,this);
            this.btnDown.addEventHandler("onclick",this.btnDown_onclick,this);
            this.grdList.addEventHandler("onenterdown",this.grdList_onenterdown,this);
        };
        this.loadIncludeScript("MK_REVIVAL_PICK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
