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
            this.set_titletext("용지입고");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPprInMst", this);
            obj._setContents("<ColumnInfo><Column id=\"PPRINMST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"PPRINMST_NO\" type=\"STRING\" size=\"3\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINMST_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINMST_MODIDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_Cust", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CUST\" type=\"STRING\" size=\"6\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REPRESENTATIVE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_STARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_STOPPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ACNTNO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTDTL_SALEAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PWT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","18","10","312","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("용지입고");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPprMst","17","151","97.31%","14.17%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsPprInMst");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdUse\"><Columns><Column size=\"92\"/><Column size=\"69\"/><Column size=\"221\"/><Column size=\"444\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"입고일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"번호\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"매입처\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"비고\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:PPRINMST_DATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" maskeditformat=\"@@@@\" editmaxlength=\"4\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"1\" text=\"bind:PPRINMST_NO\" displaytype=\"normal\" combodataset=\"ds_mk_UseType\" combocodecol=\"USE_TYPE_CODE\" combodatacol=\"USE_TYPE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:CUST\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" edittype=\"none\" editmaxlength=\"20\" displaytype=\"combotext\" combodataset=\"ds_mk_Cust\" combodatacol=\"CUST_NAME\" combocodecol=\"CUST\" textAlign=\"center\"/><Cell col=\"3\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" text=\"bind:PPRINMST_REMARK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","686","19",null,"129","1.31%",null,null,null,null,null,this);
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

            obj = new Button("btnSearch","476","25","80","40",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_background("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("calSDate","105","8","158","35",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("calEDate","275","8","158","35",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbCustNm","200","48","233","35",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_mk_Cust");
            obj.set_codecolumn("CUST");
            obj.set_datacolumn("CUST_NAME");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stSCustCd","696","67","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("입고일자");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Edit("edSCustCd","792","107","88","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("stSCustNm00","696","107","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("매입처");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("stOrdDate","17","76","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("입고일자");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("calPprInMstDate","stOrdDate:3","76","119","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stOrdNo","calPprInMstDate:3","75","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("입고번호");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtPprInMstNo","stOrdNo:3","75","45","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_format("###");
            obj.set_type("string");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stBigo","17","114","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("비고");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edMstRemark","stBigo:3","114","576","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stOrdCust","medtPprInMstNo:3","75","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("매입처");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edCustCd","stOrdCust:3","75","57","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbInCustNm","edCustCd:3","75","170","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_mk_Cust");
            obj.set_codecolumn("CUST");
            obj.set_datacolumn("CUST_NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Div("DivDtl","17","grdPprMst:3","97.31%","64.44%",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_url("mk::MK122_DTL.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew","78.38%","10","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("신규");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","btnNew:13","10","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("저장");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","btnSave:10","10","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("삭제");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","calPprInMstDate","value","dsPprInMst","PPRINMST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","medtPprInMstNo","value","dsPprInMst","PPRINMST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edCustCd","value","dsPprInMst","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cbInCustNm","value","dsPprInMst","CUST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edMstRemark","value","dsPprInMst","PPRINMST_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","mk::MK122_DTL.xfdl");
        };
        
        // User Script
        this.addIncludeScript("MK122.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK122.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("MK122.xfdl","Lib::Lib_mk.xjs");
        this.registerScript("MK122.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_mk.xjs"); /*include "Lib::Lib_mk.xjs"*/;

        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var nRow, sSetDate;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerDML, vPerDel;
        var vPprInMst_Date, vPprInMst_No;
        var vStr = "U";
        var sCust_Gubn = "40";
        var nSaveRow = -1;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");


        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", nexacro.getApplication().gv_selectMenu);

        	vPerSel = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_SELECT");
        	vPerDML = "U";
        	vPerDel = "D";

        	vStr = vPerDML;

        	if(vPerSel = "1"){

        		//검색조건 날짜셋팅
        		var d = new Date();
        		var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");
        		this.Tab00.Tabpage1.form.calSDate.set_value(strtoDay);
        		this.Tab00.Tabpage1.form.calEDate.set_value(strtoDay);

        		//매입처 정보 가져오기
        		this.gfn_TransactionP("select", "JSP/mk/Cust_Select.jsp", "ds_mk_Cust=ds_mk_Cust", "ds_mk_Cust=ds_mk_Cust", "", "Callback_CustSelect", false, "S", false, this);
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

        	if(this.edSCustCd.text == "0000")
        		this.edSCustCd.set_value("");

        	str_url = "JSP/mk/mk122f_pprin_mst.jsp";
        	in_ds = "dsPprInMst=dsPprInMst";
        	out_ds = "dsPprInMst=dsPprInMst";
        	str_arg ="sDATE=" +nexacro.wrapQuote( this.Tab00.Tabpage1.form.calSDate.value);
        	str_arg +=" eDATE=" +nexacro.wrapQuote( this.Tab00.Tabpage1.form.calEDate.value);
        	str_arg +=" CUST_GUBN=" +nexacro.wrapQuote( sCust_Gubn);
        	str_arg +=" CUST_CODE=" +nexacro.wrapQuote(this.edSCustCd.value);
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

        this.dsPprInMst_onrowposchanged = function(obj,e)
        {

        	this.calPprInMstDate.set_enable((this.dsPprInMst.getRowType(e.newrow) == "2"));

        	vPprInMst_Date = this.dsPprInMst.getColumn(e.newrow, "PPRINMST_DATE");
        	vPprInMst_No = this.dsPprInMst.getColumn(e.newrow, "PPRINMST_NO");

        	this.DivDtl.form.getData_PprInDtl(vPprInMst_Date, vPprInMst_No);

        };

        //#######################################################
        //  마스터 입력값 확인
        //  저장시나 신규시 앞 레코드의 값이 정확한지 확인
        //#######################################################
        this.fctn_PprInMst_CheckRecord = function(nRow)
        {
        	if (nRow = -1)
        	{
        		return true;
        	}

        	if(Eco.isUndefined(this.dsPprInMst.getColumn(nRow, "PPRINMST_DATE") == true))
        	{
        		alert("입고일자를 입력해 주십시요.");
        		this.calPprInMstDate.setFocus();
        		return false;
        	}

        	if(Eco.isUndefined(this.dsPprInMst.getColumn(nRow, "CUST_CODE") == true))
        	{
        		alert("매입처를 입력해 주십시요.");
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

        	inds	= "input=dsPprInMst:u";
        	nRow 	= this.dsPprInMst.rowposition;

        	nSaveRow = Eco.decode(this.dsPprInMst.rowcount, 1, -1, this.dsPprInMst.rowposition);

        	if (!this.fctn_PprInMst_CheckRecord(nRow))
        	{
        		setSave = false;
        		return false;
        	}

        	if (setSave)
        	{
        		this.gfn_TransactionP("save", "JSP/mk/mk122f_pprinmst_dml.jsp", inds, "", "", "fnMstSaveCallback", false, vStr, false, this);
        	}

        };

        this.fnMstSaveCallback = function(Trid, ErrorCode, ErrorMsg, gv_rt_value)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}else{

        		this.DivDtl.form.DivDtl_DivBtn_btnDSave_onclick(vPerDML);

        		// 순번을 넣기위해 리로드
        		this.fctn_Reload_MstList("Reload");

        		this.dsPprInMst.set_rowposition(Eco.decode(nSaveRow, -1, this.dsPprInMst.getRowCount()-1, nSaveRow));

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
        		var str_url = "JSP/mk/mk122f_pprin_mst.jsp";
        		var out_ds 	= "dsPprInMst=dsPprInMst";
        		var in_ds 	= "dsPprInMst=dsPprInMst";

        		str_arg ="sDATE=" +nexacro.wrapQuote(Eco.decode(this.Tab00.Tabpage1.form.calSDate.text.length, 0 , this.calPprInMstDate.value, this.Tab00.Tabpage1.form.calSDate.value));
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
        	var nRow = this.dsPprInMst.getRowCount()-1;   //마지막 row

        	if(this.fctn_PprInMst_CheckRecord(nRow)){

        		this.dsPprInMst.addRow();
        		this.dsPprInMst.set_rowposition(this.dsPprInMst.getRowCount()-1);

        		if(Eco.isUndefined(this.dsPprInMst.getColumn(this.dsPprInMst.rowposition, "PPRINMST_DATE")) == true)
        		{
        			var d = new Date();
        			sSetDate = Eco.date.getMaskFormatString(d, "yyyyMMdd");
        			this.dsPprInMst.setColumn(this.dsPprInMst.rowposition, "PPRINMST_DATE", sSetDate);
        		}else{

        			sSetDate = this.dsPprInMst.getColumn(this.dsPprInMst.rowposition, "PPRINMST_DATE");
        		}

        		this.dsPprInMst.setColumn(this.dsPprInMst.rowposition, "CUST_GUBN", sCust_Gubn);
        		this.dsPprInMst.setColumn(this.dsPprInMst.rowposition, "EMPLOYEE_ID", gv_sabun);

        		this.fctn_Max_PprInMstNo(this.dsPprInMst.rowposition);
        	}else{
        		this.dsPprInMst.set_rowposition(this.dsPprInMst.getRowCount()-1);
        	}

        	this.calPprInMstDate.setFocus();
        };

        //#######################################################
        // 용지발주일자의 다음 순번 찾기 (과거버전)
        //#######################################################
        this.fctn_Max_PprInMstNo = function(nRow)
        {
        	var sTblName = "PRODUCT.PPRIN_MST";
        	var sPKColName = "PPRINMST_DATE";
        	var sSEQColName = "PPRINMST_NO";
        	var sPKValue = sSetDate;
        	var sColLength = this.dsPprInMst.getColumnInfo("PPRINMST_NO").size;

        	var strArg  = "";

        	//  쿼리로 지정날짜의 순번 얻기
        	this.lfn_Seq_Count(sTblName, sPKColName, sSEQColName, sPKValue, sColLength);
        	var sSqlSeq  = nexacro.getApplication().gv_rt_value;

        	// PID에서 지정날짜의 순번 얻기
        	sPidSeq = this.fctn_PID_PprInMstNo_Count(this.dsPprInMst
        	                                    , sSetDate
        	                                    , sPKColName
        	                                    , sSEQColName);

        	// 쿼리와 PID와의 순번을 맞추기 위해 비교 한 후,
        	// 같은 날짜가 있으면 PID, 없으면 쿼리 또는 PID에서 가져온다.
        	if (sSqlSeq > sPidSeq)
        		this.dsPprInMst.setColumn(nRow, "PPRINMST_NO", sSqlSeq);
        	else
        	{
        		sPidSeq = (nexacro.toNumber(sPidSeq)+1).toString();
        		sPidSeq = sPidSeq.padLeft(3, "0");
        		this.dsPprInMst.setColumn(nRow, "PPRINMST_NO", sPidSeq);
        	}
        }


        this.fctn_PID_PprInMstNo_Count = function(dsF, sNowDate, MainColumn, SeqColumn)
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
        		if(this.dsPprInMst.getRowType(nRow) == 1)
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


        //용지 입고 MST 삭제클릭 이벤트
        this.btnDel_onclick = function(obj,e)
        {
        	bRtn = this.confirm("용지입고 [ "+this.calPprInMstDate.value+" - "+this.medtPprInMstNo.text+" ] 삭제하시겠습니까?", "용지입고 삭제");

        	if(bRtn == true)
        	{
        		this.dsPprInMst.deleteRow(this.dsPprInMst.rowposition);
        		this.btnSave_onclick(vPerDel);
        		this.DivDtl.form.DivDtl_DivBtn_btnDDel_onclick();
        	}
        };

        this.edCustCd_onchanged = function(obj,e)
        {
        	if (this.edCustCd.maxlength == this.edCustCd.text.length)
        		this.cbInCustNm.set_index(this.ds_mk_Cust.findRow("CUST", sCust_Gubn + this.edCustCd.text));

        	if (this.cbInCustNm.index != -1)
        	  this.edMstRemark.setFocus();
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

        		this.edMstRemark.setFocus();
        	}
        };

        this.edCustCd_onsetfocus = function(obj,e)
        {
        	this.ds_mk_Cust.filter("CUST_GUBN=='00' || CUST_GUBN=='" + sCust_Gubn + "'");
        };

        this.cbInCustNm_onitemchanged = function(obj,e)
        {
        	this.edCustCd.set_value(e.postvalue.substr(2, 4));
        	this.edMstRemark.setFocus();
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
            this.calPprInMstDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.edCustCd.addEventHandler("onchanged",this.edCustCd_onchanged,this);
            this.edCustCd.addEventHandler("onkeydown",this.edCustCd_onkeydown,this);
            this.edCustCd.addEventHandler("onsetfocus",this.edCustCd_onsetfocus,this);
            this.cbInCustNm.addEventHandler("onitemchanged",this.cbInCustNm_onitemchanged,this);
            this.btnNew.addEventHandler("onclick",this.btnNew_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.dsPprInMst.addEventHandler("oncolumnchanged",this.ds_mk_Paper_oncolumnchanged,this);
            this.dsPprInMst.addEventHandler("onrowposchanged",this.dsPprInMst_onrowposchanged,this);
            this.ds_mk_Cust.addEventHandler("oncolumnchanged",this.ds_mk_Paper_oncolumnchanged,this);
        };
        this.loadIncludeScript("MK122.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
