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
            this.set_titletext("CTP판 업체관리");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPlateCust", this);
            obj._setContents("<ColumnInfo><Column id=\"ORDMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ORDDTL_SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/><Column id=\"PLT_NAME\" type=\"STRING\" size=\"15\"/><Column id=\"PPR_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"ORDMST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ORDMST_QTY\" type=\"INT\" size=\"6\"/><Column id=\"USE_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"PLT_CUST\" type=\"STRING\" size=\"6\"/><Column id=\"PLT_CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"PLT_CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"35\"/><Column id=\"ORDDTL_PANQTY\" type=\"INT\" size=\"3\"/><Column id=\"ORDDTL_TONE\" type=\"STRING\" size=\"3\"/><Column id=\"ORDDTL_DETAIL\" type=\"STRING\" size=\"20\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"ORDDTL_COMMENT\" type=\"STRING\" size=\"30\"/><Column id=\"ORDDTL_RUNDATE\" type=\"STRING\" size=\"8\"/><Column id=\"ORDDTL_CTP\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
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
            obj.set_text("CTP판 업체관리");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"28","43","39","1.38%",null,null,null,null,null,this);
            obj.set_taborder("7");
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
            obj.set_binddataset("dsPlateCust");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"247\"/><Column size=\"132\"/><Column size=\"90\"/><Column size=\"87\"/><Column size=\"90\"/><Column size=\"175\"/><Column size=\"128\"/><Column size=\"67\"/><Column size=\"80\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"도서명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"판형\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"발주일자\"/><Cell col=\"3\" text=\"부수\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"용도\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"외주처\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"사양\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"색도\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" text=\"판수\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:BOOKMST_NAME\" displaytype=\"normal\" combodataset=\"ds_mk_UseType\" combocodecol=\"USE_TYPE_CODE\" combodatacol=\"USE_TYPE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:PLT_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:ORDMST_DATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" maskeditformat=\"@@\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"3\" text=\"bind:ORDMST_QTY\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"4\" text=\"bind:USE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"5\" text=\"bind:PLT_CUST\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"normal\" editinputtype=\"number\" displaytype=\"combotext\" combodataset=\"ds_mk_Cust\" combocodecol=\"CUST\" combodatacol=\"CUST_NAME\" comboautoselect=\"true\" editautoselect=\"true\"/><Cell col=\"6\" text=\"bind:ORDDTL_DETAIL\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"7\" text=\"bind:ORDDTL_TONE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"number\" maskeditformat=\"#,##0.00\" displaytype=\"normal\" editautoselect=\"true\"/><Cell col=\"8\" text=\"bind:ORDDTL_PANQTY\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"number\" maskeditformat=\"#,##0.00\" displaytype=\"number\" editautoselect=\"true\"/></Band></Format></Formats>");
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
        this.addIncludeScript("MK13D.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK13D.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("MK13D.xfdl","Lib::Lib_mk.xjs");
        this.registerScript("MK13D.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_mk.xjs"); /*include "Lib::Lib_mk.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerDML, vPerDel;
        var vStr;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var urlExcel = nexacro.getApplication().gv_urlXeni;
        var sPLT_CUST_GUBN, sPLT_CUST_CODE;

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
        	if(vPerSel != "1")
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
        		this.calSDate.setFocus();
        	}
        };

        //조회버튼 클릭
        this.btnSearch_onclick = function(obj,e)
        {
        	if(this.calSDate.value == ""  || Eco.isUndefined(this.calSDate.value) == true)
        	{
        		alert("조회일자를 입력해 주세요.");
        		this.calSDate.setFocus();
        		return false;
        	}

        	if(this.calSDate.value != "" && (this.calEDate.value == "" || Eco.isUndefined(this.calEDate.value) == true))
        		this.calEDate.set_value(this.calSDate.value);

        	in_ds 	= "dsPlateCust=dsPlateCust";
        	out_ds 	= "dsPlateCust=dsPlateCust";
        	str_url = "JSP/mk/mk13df_printplate_cust.jsp";
        	str_arg = "ORDMST_SDATE=" + nexacro.wrapQuote(this.calSDate.value) +
        	          " ORDMST_EDATE=" + nexacro.wrapQuote(this.calEDate.value);

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnCallbackSelect", false, "S", false, this);

        };


        this.fnCallbackSelect = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{
        		if(this.dsPlateCust.rowcount == 0)
        			alert("조회된 자료가 없습니다.");
        		else{
        			this.dsPlateCust.set_rowposition(0);
        			this.grdList.setCellPos(5);  			// 판업체 컬럼 인덱스
        			this.grdList.showEditor();
        		}
        	}
        };

        //저장버튼이벤트
        this.btnSave_onclick = function(obj,e)
        {
        	in_ds = "input=dsPlateCust:U";
        	this.gfn_TransactionP("save", "JSP/mk/mk13df_printplate_cust_dml.jsp", in_ds, "", "", "fnSaveCallback", false, "U", false, this);
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
        	var nRow = this.dsPlateCust.rowposition;

        	if(e.cell == 5)
        	{
        		switch(e.value) {
        		case "1" :	//프린피아
        			this.dsPlateCust.setColumn(nRow, "PLT_CUST_GUBN", "41");
        			this.dsPlateCust.setColumn(nRow, "PLT_CUST_CODE", "1034");
        			this.dsPlateCust.setColumn(nRow, "PLT_CUST", "411034");
        			break;
        		case "2" :	// 아트미디어
        			this.dsPlateCust.setColumn(nRow, "PLT_CUST_GUBN", "41");
        			this.dsPlateCust.setColumn(nRow, "PLT_CUST_CODE", "1189");
        			this.dsPlateCust.setColumn(nRow, "PLT_CUST", "411189");
        			break;
        		case "3" :	// 동국문화
        			this.dsPlateCust.setColumn(nRow, "PLT_CUST_GUBN", "41");
        			this.dsPlateCust.setColumn(nRow, "PLT_CUST_CODE", "1015");
        			this.dsPlateCust.setColumn(nRow, "PLT_CUST", "411015");
        			break;
        		case "4" :	// 반도
        			this.dsPlateCust.setColumn(nRow, "PLT_CUST_GUBN", "41");
        			this.dsPlateCust.setColumn(nRow, "PLT_CUST_CODE", "1019");
        			this.dsPlateCust.setColumn(nRow, "PLT_CUST", "411019");
        			break;
        		case "5" :	// D&C
        			this.dsPlateCust.setColumn(nRow, "PLT_CUST_GUBN", "41");
        			this.dsPlateCust.setColumn(nRow, "PLT_CUST_CODE", "1548");
        			this.dsPlateCust.setColumn(nRow, "PLT_CUST", "411548");
        			break;
        		case "6" :	// 진테크
        			this.dsPlateCust.setColumn(nRow, "PLT_CUST_GUBN", "41");
        			this.dsPlateCust.setColumn(nRow, "PLT_CUST_CODE", "1377");
        			this.dsPlateCust.setColumn(nRow, "PLT_CUST", "411377");
        			break;
        		case "7" :	// 성인문화사
        			this.dsPlateCust.setColumn(nRow, "PLT_CUST_GUBN", "41");
        			this.dsPlateCust.setColumn(nRow, "PLT_CUST_CODE", "1409");
        			this.dsPlateCust.setColumn(nRow, "PLT_CUST", "411409");
        			break;
        		default:
        			this.dsPlateCust.setColumn(nRow, "PLT_CUST_GUBN", "");
        			this.dsPlateCust.setColumn(nRow, "PLT_CUST_CODE", "");
        			this.dsPlateCust.setColumn(nRow, "PLT_CUST", "");
        		}
        	}

        	if(this.grdList.getCellPos() == 5)		// 외주처
        	{
        		var sRunDate = this.dsPlateCust.getColumn(nRow, "ORDDTL_RUNDATE");
        		this.dsMakeClose.filter("MKCLS_STARTDATE<='" + sRunDate + "'&&MKCLS_ENDDATE>='" + sRunDate + "'");

        		if ((this.dsMakeClose.getColumn(0, "MKCLS_CLOSE") == "0") &&
        			(this.dsMakeClose.getColumn(0, "MKCLS_MODIFY") == "1"))
        		{
        			this.dsPlateCust.setColumn(nRow, "EMPLOYEE_ID", gv_sabun);
        			this.btnSave_onclick();

        			if(this.dsPlateCust.rowposition == this.dsPlateCust.getRowCount()-1){
        				this.dsPlateCust.set_rowposition(0);
        				this.grdList.set_binddataset("");
        				alert(sRunDate + "일자 작업이 완료됐습니다.");
        				this.calSDate.setFocus();
        			}else{
        				this.dsPlateCust.set_rowposition(this.dsPlateCust.rowposition+1);
        				this.grdList.setCellPos(5);			// 외주처 컬럼 인덱스 위치
        				this.grdList.showEditor();
        			}
        		}else{
        			alert(sRunDate + "일은 마감되어 수정할 수 없습니다.");

        			if(Eco.isUndefined(sPLT_CUST_GUBN) == false){
        				this.dsPlateCust.setColumn(nRow, "PLT_CUST_GUBN", sPLT_CUST_GUBN);
        			}

        			if(Eco.isUndefined(sPLT_CUST_CODE) == false){
        				this.dsPlateCust.setColumn(nRow, "PLT_CUST_CODE", sPLT_CUST_CODE);
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

        this.calEDate_onchanged = function(obj,e)
        {
        	if(e.postvalue.length == 8)
        	{
        		this.btnSearch_onclick();
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


        //#######################################################
        //  이전자료 임시 저장
        //#######################################################
        this.dsPlateCust_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "PLT_CUST_GUBN")
        		sPLT_CUST_GUBN 	= e.oldvalue;

        	if(e.columnid == "PLT_CUST_CODE")
        		sPLT_CUST_CODE 	= e.oldvalue;
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
            this.calEDate.addEventHandler("onchanged",this.calEDate_onchanged,this);
            this.calSDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.grdList.addEventHandler("onenterdown",this.grdList_onenterdown,this);
            this.dsPlateCust.addEventHandler("cancolumnchange",this.dsPlateCust_cancolumnchange,this);
        };
        this.loadIncludeScript("MK13D.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
