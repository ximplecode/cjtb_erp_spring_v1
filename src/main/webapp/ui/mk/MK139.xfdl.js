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
            this.set_titletext("기타외주비 관리");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsEtcCostMst", this);
            obj._setContents("<ColumnInfo><Column id=\"ETCCOSTMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ETCCOSTMST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ETCCOSTMST_NO\" type=\"STRING\" size=\"2\"/><Column id=\"ETCCOST_DATENO\" type=\"STRING\" size=\"10\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CUST\" type=\"STRING\" size=\"6\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"35\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"ETCCOSTMST_REMARK\" type=\"STRING\" size=\"60\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_Cust", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CUST\" type=\"STRING\" size=\"6\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REPRESENTATIVE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_STARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_STOPPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ACNTNO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTDTL_SALEAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PWT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMakeClose", this);
            obj._setContents("<ColumnInfo><Column id=\"MKCLS_YM\" type=\"STRING\" size=\"6\"/><Column id=\"MKCLS_STARTDATE\" type=\"STRING\" size=\"8\"/><Column id=\"MKCLS_ENDDATE\" type=\"STRING\" size=\"8\"/><Column id=\"MKCLS_CLOSE\" type=\"STRING\" size=\"1\"/><Column id=\"MKCLS_MODIFY\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","18","10","312","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("기타외주비 관리");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMst","17","158","97.38%","17.08%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsEtcCostMst");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"92\"/><Column size=\"69\"/><Column size=\"221\"/><Column size=\"444\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"작업일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"번호\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"외주처\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"비고\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:ETCCOSTMST_DATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"date\" maskeditformat=\"@@@@\" editmaxlength=\"4\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"1\" text=\"bind:ETCCOSTMST_NO\" displaytype=\"normal\" combodataset=\"ds_mk_UseType\" combocodecol=\"USE_TYPE_CODE\" combodatacol=\"USE_TYPE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:CUST\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" edittype=\"none\" editmaxlength=\"20\" displaytype=\"combotext\" combodataset=\"ds_mk_Cust\" combodatacol=\"CUST_NAME\" combocodecol=\"CUST\" textAlign=\"center\"/><Cell col=\"3\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" text=\"bind:ETCCOSTMST_REMARK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stBigo","17","114","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("비고");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edRemark","stBigo:3","114","576","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","edRemark:65","19","407","129",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_tabindex("0");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_selectedtabbuttonwidth("80");
            obj.set_selectedtabbuttonheight("40");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("검색조건");
            obj.set_border("1px double darkslateblue");
            this.Tab00.addChild(obj.name, obj);

            obj = new Button("btnSearch","288","25","80","40",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_background("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("calSDate","105","28","158","35",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_editformat("yyyy-MM");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stSCustCd","14","28","85","35",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("입고일자");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stDate","17","76","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("작업일자");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("calDate","stDate:3","76","119","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stNo","calDate:3","75","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("작업번호");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtNo","stNo:3","75","45","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_format("##");
            obj.set_type("string");
            obj.set_enable("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stCust","medtNo:3","75","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("외주처");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edCustCd","stCust:3","75","57","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbCustNm","edCustCd:3","75","170","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_mk_Cust");
            obj.set_codecolumn("CUST");
            obj.set_datacolumn("CUST_NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew","71.69%","10","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("신규");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","btnNew:10","10","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("저장");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","btnSave:10","10","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("삭제");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrt","btnDel:10","10","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("출력");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("DivDtl","17","303","97.31%","58.06%",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_url("mk::MK139_DTL.xfdl");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","calDate","value","dsEtcCostMst","ETCCOSTMST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","medtNo","value","dsEtcCostMst","ETCCOSTMST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edCustCd","value","dsEtcCostMst","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cbCustNm","value","dsEtcCostMst","CUST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edRemark","value","dsEtcCostMst","ETCCOSTMST_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","mk::MK139_DTL.xfdl");
        };
        
        // User Script
        this.addIncludeScript("MK139.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK139.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("MK139.xfdl","Lib::Lib_mk.xjs");
        this.registerScript("MK139.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_mk.xjs"); /*include "Lib::Lib_mk.xjs"*/;

        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var nRow, sSetDate, vEtcCostMst_Id;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerDML, vPerDel;
        var rtnEtcCostMst_ID, rtnEtcCostMst_NO;
        var vStr = "U";
        var sCust_Gubn = "41";
        var nSaveRow = -1;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");


        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", nexacro.getApplication().gv_selectMenu);

        	vPerSel = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_SELECT");
        	vPerDML = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_DML");
        	vPerDel = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_DELETE");
        	vPerPrt = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_PRINT");

        	var d = new Date();
        	var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");
        	this.calDate.set_value(strtoDay);
        	this.Tab00.Tabpage1.form.calSDate.set_value(strtoDay);

        	//DML권한 체크 및 컴포넌트 ENABLE처리
        	if(vPerDML != "1" || vPerDel != "1"  || vPerPrt != "1")
        		this.fctn_User_Enabled(this, false);

        	if(vPerSel = "1"){

        		this.gfn_TransactionP("select", "JSP/mk/Cust_Select.jsp", "ds_mk_Cust=ds_mk_Cust", "ds_mk_Cust=ds_mk_Cust", "", "", false, "S", false, this);
        		this.fctn_MakeClose_Search();
        		this.ds_mk_Cust.filter("CUST_GUBN=='00' || CUST_GUBN=='" + sCust_Gubn + "'");
        	}
        };


        this.Callback_CustSelect = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
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

        //조회버튼 이벤트
        this.btnSearch_onclick = function(obj,e)
        {
        	if (this.Tab00.Tabpage1.form.calSDate.value == "")
        	{
        		this.Tab00.Tabpage1.form.calSDate.setFocus();
        		alert("입고일자를 입력하여 주십시요.");
        		return false;
        	}

        	var sYyyyMm = this.Tab00.Tabpage1.form.calSDate.value.substr(0, 6);

        	str_url = "JSP/mk/mk139f_etccost_mst.jsp";
        	in_ds = "dsEtcCostMst=dsEtcCostMst";
        	out_ds = "dsEtcCostMst=dsEtcCostMst";
        	str_arg ="MKCLS_YM=" +nexacro.wrapQuote(sYyyyMm);
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_Select", false, "S", false, this);
        };

        this.Callback_Select = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}
        };

        //마스터 줄 바뀔때마다 세부내역 데이터 가져오기
        this.dsEtcCostMst_onrowposchanged = function(obj,e)
        {
        	vEtcCostMst_Id = this.dsEtcCostMst.getColumn(e.newrow, "ETCCOSTMST_ID");

        	if(this.DivDtl.visible == false)
        		this.DivDtl.set_visible(true);

        	this.DivDtl.form.getData_EtcCostDtl(vEtcCostMst_Id);
        };

        //#######################################################
        //  마스터 입력값 확인
        //  저장시나 신규시 앞 레코드의 값이 정확한지 확인
        //#######################################################
        this.fctn_EtcCostMst_CheckRecord = function(nRow)
        {
        	if (nRow = -1)
        	{
        		return true;
        	}

        	if(Eco.isUndefined(this.dsEtcCostMst.getColumn(nRow, "ETCCOSTMST_DATE") == true))
        	{
        		alert("작업일자를 입력해 주십시요.");
        		this.calDate.setFocus();
        		return false;
        	}

        	if(Eco.isUndefined(this.dsEtcCostMst.getColumn(nRow, "CUST_CODE") == true))
        	{
        		alert("외주처를 입력해 주십시요.");
        		this.edCustCd.setFocus();
        		return false;
        	}

        	return true;
        }

        this.btnSave_onclick = function(vStr)
        {
        	var inds 	= "";
        	var nRow 	= 0;
        	var setSave = true;

        	inds	= "input=dsEtcCostMst:u";
        	nRow 	= this.dsEtcCostMst.rowposition;

        	nSaveRow = Eco.decode(this.dsEtcCostMst.rowcount, 1, -1, this.dsEtcCostMst.rowposition);

        	if (!this.fctn_EtcCostMst_CheckRecord(nRow))
        	{
        		setSave = false;
        		return false;
        	}

        	if (setSave)
        	{
        		this.gfn_TransactionP("save", "JSP/mk/mk139f_etccost_mst_dml.jsp", inds, "", "", "fnMstSaveCallback", false, vStr, false, this);
        	}

        };

        this.fnMstSaveCallback = function(Trid, ErrorCode, ErrorMsg, gv_rt_value, gv_rt_result)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}else{

        		rtnEtcCostMst_ID = nexacro.getApplication().gv_rt_value;
        		rtnEtcCostMst_NO = nexacro.getApplication().gv_rt_result;
        		this.dsEtcCostMst.setColumn(this.dsEtcCostMst.rowposition, "ETCCOSTMST_ID", rtnEtcCostMst_ID);
        		this.dsEtcCostMst.setColumn(this.dsEtcCostMst.rowposition, "ETCCOSTMST_NO", rtnEtcCostMst_NO);

        		if(this.DivDtl.form.dsEtcCostDtl.rowcount != -1)
        			this.DivDtl.form.DivDtl_btnDSave_onclick("U");

        	}
        };

        //#######################################################
        //  저장후 재조회 하기
        //  저장한 다음 리스트를 다시 보여줌
        //#######################################################
        this.fctn_Reload_MstList = function(strVal)
        {
        	if(strVal == "Reload")
        	{
        		var str_arg  = "";
        		var str_url = "JSP/mk/mk121f_pprord_mst.jsp";
        		var out_ds 	= "dsPprOrdMst=dsPprOrdMst";
        		var in_ds 	= "dsPprOrdMst=dsPprOrdMst";

        		str_arg ="sDATE=" +nexacro.wrapQuote(Eco.decode(this.Tab00.Tabpage1.form.calSDate.text.length, 0 , this.calPprOrdMstDate.value, this.Tab00.Tabpage1.form.calSDate.value));
        		str_arg +=" eDATE=" +nexacro.wrapQuote(Eco.decode(this.Tab00.Tabpage1.form.calEDate.text.length, 0, "", this.Tab00.Tabpage1.form.calEDate.value));
        		str_arg +=" CUST_GUBN=" +nexacro.wrapQuote( sCust_Gubn);
        		str_arg +=" CUST_CODE=" +nexacro.wrapQuote(Eco.decode(this.edSCustCd.text.length, 0, "", this.edSCustCd.value));

        		this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnReloadCallback", false, "S", false, this);
        	}
        }

        //#######################################################
        //  fctn_Reload_MstList 콜백함수
        //#######################################################
        this.fnReloadCallback = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{	this.alert(ErrorMsg);
        		return false;
        	}
        }

        this.btnNew_onclick = function(obj,e)
        {
        	var nRow = this.dsEtcCostMst.getRowCount()-1;   //마지막 row

        	if(this.fctn_EtcCostMst_CheckRecord(nRow))
        	{
        		this.dsEtcCostMst.addRow();
        		this.dsEtcCostMst.set_rowposition(this.dsEtcCostMst.getRowCount()-1);

        		if(Eco.isUndefined(this.dsEtcCostMst.getColumn(this.dsEtcCostMst.rowposition, "ETCCOSTMST_DATE")) == true)
        		{
        			var d = new Date();
        			sSetDate = Eco.date.getMaskFormatString(d, "yyyyMMdd");
        			this.dsEtcCostMst.setColumn(this.dsEtcCostMst.rowposition, "ETCCOSTMST_DATE", sSetDate);
        		}else{

        			sSetDate = this.dsEtcCostMst.getColumn(this.dsEtcCostMst.rowposition, "ETCCOSTMST_DATE");
        		}

        		this.dsEtcCostMst.setColumn(this.dsEtcCostMst.rowposition, "CUST_GUBN", sCust_Gubn);
        		this.dsEtcCostMst.setColumn(this.dsEtcCostMst.rowposition, "EMPLOYEE_ID", gv_sabun);

        		this.fctn_Max_EtcCostMstNo(this.dsEtcCostMst.rowposition);

        	}else{
        			this.dsEtcCostMst.set_rowposition(this.dsEtcCostMst.getRowCount()-1);
        	}

        	this.calDate.setFocus();
        };

        //#######################################################
        // 용지발주일자의 다음 순번 찾기 (과거버전)
        //#######################################################
        this.fctn_Max_EtcCostMstNo = function(nRow)
        {
        	var sTblName = "PRODUCT.ETCCOST_MST";
        	var sPKColName = "ETCCOSTMST_DATE";
        	var sSEQColName = "ETCCOSTMST_NO";
        	var sPKValue = sSetDate;
        	var sColLength = this.dsEtcCostMst.getColumnInfo("ETCCOSTMST_NO").size;

        	var strArg  = "";

        	//  쿼리로 지정날짜의 순번 얻기
        	this.lfn_Seq_Count(sTblName, sPKColName, sSEQColName, sPKValue, sColLength);
        	var sSqlSeq  = nexacro.getApplication().gv_rt_value;

        	// PID에서 지정날짜의 순번 얻기
        	sPidSeq = this.fctn_PID_EtcCostMstNo_Count(this.dsEtcCostMst
        	                                    , sSetDate
        	                                    , sPKColName
        	                                    , sSEQColName);

        	// 쿼리와 PID와의 순번을 맞추기 위해 비교 한 후,
        	// 같은 날짜가 있으면 PID, 없으면 쿼리 또는 PID에서 가져온다.
        	if (sSqlSeq > sPidSeq)
        		this.dsEtcCostMst.setColumn(nRow, "ETCCOSTMST_NO", sSqlSeq);
        	else
        	{
        		sPidSeq = (nexacro.toNumber(sPidSeq)+1).toString();
        		sPidSeq = sPidSeq.padLeft(2, "0");
        		this.dsEtcCostMst.setColumn(nRow, "ETCCOSTMST_NO", sPidSeq);
        	}
        }

        this.fctn_PID_EtcCostMstNo_Count = function(dsF, sNowDate, MainColumn, SeqColumn)
        {
        	var sMaxSeq	= "";
        	var sTmpDate = "";

        	sMaxSeq = dsF.getMax(SeqColumn);

        	if(sMaxSeq == "NaN" || Eco.isUndefined(sMaxSeq) == true )
        		sMaxSeq = 0;

        	for (var nRow= 0 ; nRow<=dsF.rowcount-1 ; nRow++)
        	{
        		sTmpDate	= dsF.getColumn(nRow, MainColumn);

        		//기저장된 내역에서 날짜 비교해서 seq검색
        		if(this.dsEtcCostMst.getRowType(nRow) == 1)
        		{
        			if (sTmpDate == sNowDate)
        			{
        				sTmpSeq = dsF.getColumn(nRow, SeqColumn);

        				if (sMaxSeq < sTmpSeq)
        					sMaxSeq = sTmpSeq;
        			}
        		}
        	}

        	return sMaxSeq;
        }

        //용지 발주 MST 삭제클릭 이벤트
        this.btnDel_onclick = function(obj,e)
        {
        	bRtn = this.confirm("기타외주비 관리 [ "+this.calDate.value+" - "+this.medtNo.text+" ] 전체 삭제하시겠습니까?", "기타외주비 삭제");

        	if(bRtn == true)
        	{
        		vEtcCostMst_Id = this.dsEtcCostMst.getColumn(this.dsEtcCostMst.rowposition, "ETCCOSTMST_ID");
        		this.DivDtl.form.DivDtl_btnDDel_onclick('', '', vEtcCostMst_Id);
        		this.dsEtcCostMst.deleteRow(this.dsEtcCostMst.rowposition);
        		this.btnSave_onclick("D");
        	}
        };


        //용지발주 출력 클릭 이벤트
        this.btnPrt_onclick = function(obj,e)
        {
        	vEtcCostMst_Id = this.dsEtcCostMst.getColumn(this.dsEtcCostMst.rowposition, "ETCCOSTMST_ID");

           if (Eco.isUndefined(vEtcCostMst_Id) != true)
           {
        		rdUrl = gv_svcUrl + "rpt/mk/MK139.mrd";
        		rdParam = "/rp [" + vEtcCostMst_Id + "]";
        		var vScreenWidth = system.getScreenWidth();

        		if(vScreenWidth >= 1920)
        			vScreenWidth = vScreenWidth/2

        		nexacro.open("popupPrt", "mk::MKRDF.xfdl", this.getOwnerFrame(), {rdUrl:rdUrl, rdParam:rdParam}, "autosize=false", 0, 0, vScreenWidth, system.getScreenHeight(), this);

        		// 다음칸으로 이동
        		if(this.dsEtcCostMst.rowposition != this.dsEtcCostMst.getRowCount()-1)
        			this.dsEtcCostMst.set_rowposition(this.dsEtcCostMst.rowposition+1);
           }
           else
        		alert("조회된 항목이 없습니다.");
        };

        //날짜변경시 작업번호 다시 셋팅
        this.calDate_onchanged = function(obj,e)
        {
        	sSetDate = this.calDate.value;
        	this.fctn_Max_EtcCostMstNo(this.dsEtcCostMst.rowposition);
        };


        this.edCustCd_onchanged = function(obj,e)
        {
        	if (this.edCustCd.maxlength == this.edCustCd.text.length)
        		this.cbCustNm.set_index(this.ds_mk_Cust.findRow("CUST", sCust_Gubn + this.edCustCd.text));

        	if (this.cbCustNm.index != -1)
        	  this.edRemark.setFocus();
        };

        this.edCustCd_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		if(this.edCustCd.text.length == 1){

        			var vCustCd = this.lfn_CustName(sCust_Gubn, this.edCustCd.text);
        			this.edCustCd.set_value(vCustCd);
        			this.edCustCd_onchanged();
        		}

        		this.edRemark.setFocus();
        	}
        };

        this.cbCustNm_onitemchanged = function(obj,e)
        {
        	this.edCustCd.set_value(e.postvalue.substr(2, 4));
        	this.edRemark.setFocus();
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

        	if(vPerDML != 1){
        		this.btnSave.set_enable(_set);
        		this.btnNew.set_enable(_set);
        	}

        	if(vPerDel != 1)
        		this.btnDel.set_enable(_set);

        	if(vPerPrt != 1)
        		this.btnPrt.set_enable(_set);

        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkMain_onload,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.addEventHandler("onkeydown",this.cbOrdCustNm_onkeydown,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.Tabpage1.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.calDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.calDate.addEventHandler("onchanged",this.calDate_onchanged,this);
            this.edCustCd.addEventHandler("onchanged",this.edCustCd_onchanged,this);
            this.edCustCd.addEventHandler("onkeydown",this.edCustCd_onkeydown,this);
            this.cbCustNm.addEventHandler("onitemchanged",this.cbCustNm_onitemchanged,this);
            this.btnNew.addEventHandler("onclick",this.btnNew_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.btnPrt.addEventHandler("onclick",this.btnPrt_onclick,this);
            this.dsEtcCostMst.addEventHandler("onrowposchanged",this.dsEtcCostMst_onrowposchanged,this);
            this.ds_mk_Cust.addEventHandler("oncolumnchanged",this.ds_mk_Paper_oncolumnchanged,this);
        };
        this.loadIncludeScript("MK139.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
