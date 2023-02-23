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
            this.set_titletext("인쇄비 관리");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPrintUnitcost", this);
            obj._setContents("<ColumnInfo><Column id=\"ORDMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ORDDTL_SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/><Column id=\"PLT_NAME\" type=\"STRING\" size=\"15\"/><Column id=\"ORDMST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ORDMST_QTY\" type=\"INT\" size=\"6\"/><Column id=\"USE_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"PRCS_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"PPR_STNDNAME\" type=\"STRING\" size=\"8\"/><Column id=\"ORDDTL_TONE1\" type=\"INT\" size=\"1\"/><Column id=\"ORDDTL_TONE2\" type=\"INT\" size=\"1\"/><Column id=\"ORDDTL_TONE\" type=\"STRING\" size=\"3\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"35\"/><Column id=\"ORDDTL_DETAIL\" type=\"STRING\" size=\"20\"/><Column id=\"ORDDTL_JMI\" type=\"DECIMAL\" size=\"10\"/><Column id=\"ORDDTL_PAGE\" type=\"STRING\" size=\"5\"/><Column id=\"ORDDTL_UNITCOST\" type=\"DECIMAL\" size=\"10\"/><Column id=\"ORDDTL_AMOUNT\" type=\"INT\" size=\"9\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"ORDDTL_RUNDATE\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMakeClose", this);
            obj._setContents("<ColumnInfo><Column id=\"MKCLS_YM\" type=\"STRING\" size=\"6\"/><Column id=\"MKCLS_STARTDATE\" type=\"STRING\" size=\"8\"/><Column id=\"MKCLS_ENDDATE\" type=\"STRING\" size=\"8\"/><Column id=\"MKCLS_CLOSE\" type=\"STRING\" size=\"1\"/><Column id=\"MKCLS_MODIFY\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_Cust", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CUST\" type=\"STRING\" size=\"6\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REPRESENTATIVE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_STARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_STOPPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ACNTNO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTDTL_SALEAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PWT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","8","10","346","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("인쇄비 관리");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"28","43","39","1.38%",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_icon("url(\'Img::ico_excel_O.png\')");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"29","80","40","btnExcel:10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEDate",null,"33","140","35","btnSearch:10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate",null,"33","140","35","calEDate:3",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stDate",null,"33","85","35","calSDate:3",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("진행일자");
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

            obj = new Grid("grdList","8","78","98.85%",null,null,"10",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsPrintUnitcost");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"226\"/><Column size=\"80\"/><Column size=\"102\"/><Column size=\"73\"/><Column size=\"79\"/><Column size=\"189\"/><Column size=\"76\"/><Column size=\"138\"/><Column size=\"60\"/><Column size=\"76\"/><Column size=\"94\"/><Column size=\"97\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"도서명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"판형\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"발주일자\"/><Cell col=\"3\" text=\"부수\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"용도\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"외주처\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"규격\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"사양\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" text=\"색도\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"9\" text=\"기계\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"10\" text=\"수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"11\" text=\"단가\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:BOOKMST_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"1\" text=\"bind:PLT_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"2\" text=\"bind:ORDMST_DATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" maskeditformat=\"@@\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"3\" text=\"bind:ORDMST_QTY\" displaytype=\"normal\" combodataset=\"ds_mk_UseType\" combocodecol=\"USE_TYPE_CODE\" combodatacol=\"USE_TYPE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:USE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:CUST_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"6\" text=\"bind:PPR_STNDNAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"7\" text=\"bind:ORDDTL_DETAIL\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"8\" text=\"bind:ORDDTL_TONE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"9\" text=\"bind:PRCS_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"normal\" editinputtype=\"normal\"/><Cell col=\"10\" text=\"bind:ORDDTL_JMI\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,0.000\"/><Cell col=\"11\" text=\"bind:ORDDTL_UNITCOST\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"normal\" editinputtype=\"number\" maskeditformat=\"#,##0.00\" displaytype=\"number\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cbCustNm",null,"33","230","35","stDate:13",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_mk_Cust");
            obj.set_codecolumn("CUST");
            obj.set_datacolumn("CUST_NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edCustCd",null,"33","80","35","cbCustNm:3",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnCust_Search",null,"33","85","35","edCustCd:3",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("외주처");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
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
        this.addIncludeScript("MK133.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK133.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK133.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerDML, vPerDel;
        var vStr;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var urlExcel = nexacro.getApplication().gv_urlXeni;
        var sCust_Gubn = "41";
        var sPRCS_CODE, iUNITCOST;

        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", nexacro.getApplication().gv_selectMenu);

        	vPerSel = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_SELECT");
        	vPerDML = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_DML");
        	vPerDel = "D";

        	var d = new Date();

        	var strPreMonth = Eco.date.getMaskFormatString(Eco.date.addMonth(d, -1), "yyyyMMdd");
        	strPreMonth = strPreMonth.substr(0, 6);					//202206
        	var strPreLastDay = Eco.date.getLastDayOfMonth(Eco.date.getMaskFormatString(Eco.date.addMonth(d, -1), "yyyyMMdd"));	//오늘 기준 한달 전 마지막날 setting
        	var strLastDay = strPreMonth+strPreLastDay;
        	var strPreDay = Eco.date.getMaskFormatString(Eco.date.getFirstDate(Eco.date.addMonth(d, -1)), "yyyyMMdd"); 			//오늘 기준 한달 전 1일 setting

        	this.calSDate.set_value(strPreDay);
        	this.calEDate.set_value(strLastDay);

        	//DML권한 체크 및 컴포넌트 ENABLE처리
        	if(vPerDML != "1")
        		this.fctn_User_Enabled(this, false);

        	if(vPerSel = "1"){
        		this.gfn_TransactionP("select", "JSP/mk/Cust_Select.jsp", "ds_mk_Cust=ds_mk_Cust", "ds_mk_Cust=ds_mk_Cust", "", "", false, "S", false, this);   				 //업체코드
        		this.fctn_MakeClose_Search();
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
        		this.edCustCd.setFocus();
        	}
        };

        //조회버튼 클릭
        this.btnSearch_onclick = function(obj,e)
        {
        	if(this.edCustCd.value == "" || Eco.isUndefined(this.edCustCd.value) == true )
        	{
        		alert("외주처를 선택해 주세요.");
        		this.edCustCd.setFocus();
        		return false;
        	}

        	if(this.calSDate.value == "" || Eco.isUndefined(this.calSDate.value) == true )
        	{
        		alert("조회 시작일자를 입력해 주세요.");
        		this.calSDate.setFocus();
        		return false;
        	}

        	if(this.calSDate.value != "" && (this.calEDate.value == "" || Eco.isUndefined(this.calEDate.value) == true))
        		this.calEDate.set_value(this.calSDate.value);

        	in_ds 	= "dsPrintUnitcost=dsPrintUnitcost";
        	out_ds 	= "dsPrintUnitcost=dsPrintUnitcost";
        	str_url = "JSP/mk/mk133f_printing_unitcost.jsp";
        	str_arg = "ORDMST_SDATE=" + nexacro.wrapQuote(this.calSDate.value) +
        	          " ORDMST_EDATE=" + nexacro.wrapQuote(this.calEDate.value) +
        	          " CUST_CODE=" + nexacro.wrapQuote(this.edCustCd.value);

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnCallbackSelect", false, "S", false, this);

        };


        this.fnCallbackSelect = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{
        		if(this.dsPrintUnitcost.rowcount == 0)
        			alert("조회된 자료가 없습니다.");
        		else{
        			this.dsPrintUnitcost.set_rowposition(0);

        			if(this.dsPrintUnitcost.getColumn(this.dsPrintUnitcost.rowposition, "CUST_CODE") == "1034")
        				this.grdList.setCellPos(9);
        			else
        				this.grdList.setCellPos(11);

        			this.grdList.showEditor();
        		}
        	}
        };

        //저장버튼이벤트
        this.btnSave_onclick = function(obj,e)
        {
        	in_ds = "input=dsPrintUnitcost:U";
        	vStr = vPerDML;
        	this.gfn_TransactionP("save", "JSP/mk/mk133f_printing_unitcost_dml.jsp", in_ds, "", "", "fnSaveCallback", false, vStr, false, this);
        };

        this.fnSaveCallback = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}
        };

        this.grdList_onenterdown = function(obj,e)
        {
        	if(this.grdList.getCellPos() == 11)
        	{
        		this.dsPrintUnitcost.setColumn(e.row, "EMPLOYEE_ID", gv_sabun);
        		var sRunDate = this.dsPrintUnitcost.getColumn(e.row, "ORDDTL_RUNDATE");
        		this.dsMakeClose.filter("MKCLS_STARTDATE<='" + sRunDate + "'&&MKCLS_ENDDATE>='" + sRunDate + "'");

        		if ((this.dsMakeClose.getColumn(0, "MKCLS_CLOSE") == "0") &&
        			(this.dsMakeClose.getColumn(0, "MKCLS_MODIFY") == "1"))
        		{
        			this.btnSave_onclick();

        			if(this.dsPrintUnitcost.rowposition == this.dsPrintUnitcost.getRowCount()-1){
        				this.dsPrintUnitcost.set_rowposition(0);
        				this.grdList.set_binddataset("");
        				alert(this.calSDate.text + "일자 작업이 완료됐습니다.");
        				this.calSDate.setFocus();
        			}else{
        				this.dsPrintUnitcost.set_rowposition(this.dsPrintUnitcost.rowposition+1);

        				if(this.dsPrintUnitcost.getColumn(this.dsPrintUnitcost.rowposition, "CUST_CODE") == "1034")
        					this.grdList.setCellPos(9);			// 작업기계의 컬럼 인덱스 위치
        				else
        					this.grdList.setCellPos(11);		// 단가의 컬럼 인덱스 위치

        				this.grdList.showEditor();
        			}
        		}else{
        			alert(this.calSDate.text + "일은 마감되어 수정할 수 없습니다.");

        			if(Eco.isUndefined(sPRCS_CODE) == false){
        				this.dsPrintUnitcost.setColumn(e.row, "PRCS_CODE", sPRCS_CODE);
        			}
        			if(Eco.isUndefined(iUNITCOST) == false){
        				this.dsPrintUnitcost.setColumn(e.row, "ORDDTL_UNITCOST", iUNITCOST);
        			}

        			this.grdList.showEditor();

        		}
        	}else{
        		this.grdList.moveToNextCell();
        		this.grdList.showEditor();
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
        }

        this.btnCust_Search_onclick = function(obj,e)
        {
        	var objParam = {dsParam1:this.ds_mk_Cust
        				   ,dsParam2:this.edCustCd.text
        				   ,dsParam3:this.cbCustNm.text
        				   ,dsParam4:sCust_Gubn
        				   ,dsParam5:"MK133"}; //popup 화면으로 전달할 값

        	this.lfn_showModal("popupCust",objParam, "mk::MKCust_SearchF.xfdl", "popupCust", this, 10, 58, 450, 400);
        };

        this.edCustCd_onchanged = function(obj,e)
        {
        	var nRow = this.ds_mk_Cust.findRow("CUST_CODE", this.edCustCd.text);

        	if(nRow >= 0)
        	{
        		this.cbCustNm.set_index(nRow);

        		if(this.cbCustNm.index == -1){
        			this.cbCustNm.setFocus();
        			this.cbCustNm.dropdown();
        		}else{
        			this.calSDate.setFocus();
        		}
        	}
        };

        this.edCustCd_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        		this.edCustCd_onchanged();
        };

        this.cbCustNm_onitemchanged = function(obj,e)
        {
        	var iCustIdx = this.ds_mk_Cust.findRow("CUST_NAME", this.cbCustNm.text);
        	this.edCustCd.set_value(this.ds_mk_Cust.getColumn(iCustIdx, "CUST_CODE"));

        	if(iCustIdx != -1)
        		this.calSDate.setFocus();
        	else
        		this.cbCustNm.dropdown();
        };


        this.dsPrintUnitcost_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "PRCS_CODE")
        		sPRCS_CODE 	= e.oldvalue;


        	if(e.columnid == "ORDDTL_UNITCOST")
        		iUNITCOST 	= e.oldvalue;

        };

        this.btnExcel_onclick = function(obj,e)
        {
        	this.exportObj = new ExcelExportObject();
            var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID,
                this.grdList, "Sheet1!A1");

        	this.exportObj.set_exporturl(urlExcel);
        	this.exportObj.exportData();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkMain_onload,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.btnExcel.addEventHandler("onclick",this.btnExcel_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.calEDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.calSDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.grdList.addEventHandler("onenterdown",this.grdList_onenterdown,this);
            this.grdList.addEventHandler("onheadclick",this.grdList_onheadclick,this);
            this.cbCustNm.addEventHandler("onitemchanged",this.cbCustNm_onitemchanged,this);
            this.edCustCd.addEventHandler("onchanged",this.edCustCd_onchanged,this);
            this.edCustCd.addEventHandler("onkeydown",this.edCustCd_onkeydown,this);
            this.btnCust_Search.addEventHandler("onclick",this.btnCust_Search_onclick,this);
            this.dsPrintUnitcost.addEventHandler("cancolumnchange",this.dsPrintUnitcost_cancolumnchange,this);
        };
        this.loadIncludeScript("MK133.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
