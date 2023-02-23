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
            this.set_titletext("용지발주");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPprOrdMst", this);
            obj._setContents("<ColumnInfo><Column id=\"PPRORDMST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"PPRORDMST_NO\" type=\"STRING\" size=\"3\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST\" type=\"STRING\" size=\"256\"/><Column id=\"PPRORDMST_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PPRORDMST_MODIDATE\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_Cust", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CUST\" type=\"STRING\" size=\"6\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REPRESENTATIVE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_STARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_STOPPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ACNTNO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTDTL_SALEAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PWT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_H", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_K", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_D", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_C", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_U", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_FORMPATH", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH1\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH2\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH3\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_flow_order", this);
            obj._setContents("<ColumnInfo><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"F_NEXT\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STORE\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKCHAK\" type=\"STRING\" size=\"256\"/><Column id=\"BUSOR\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANG\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_CODE2\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApproval", this);
            obj._setContents("<ColumnInfo><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"F_NEXT\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKCHAK\" type=\"STRING\" size=\"256\"/><Column id=\"BUSOR\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KS_SIGN\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","18","10","312","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("용지발주");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPprMst","17","158","97.38%","17.08%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsPprOrdMst");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdUse\"><Columns><Column size=\"92\"/><Column size=\"69\"/><Column size=\"221\"/><Column size=\"444\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"발주일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"번호\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"발주처\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"비고\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:PPRORDMST_DATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"date\" maskeditformat=\"@@@@\" editmaxlength=\"4\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"1\" text=\"bind:PPRORDMST_NO\" displaytype=\"normal\" combodataset=\"ds_mk_UseType\" combocodecol=\"USE_TYPE_CODE\" combodatacol=\"USE_TYPE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:CUST\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" edittype=\"none\" editmaxlength=\"20\" displaytype=\"combotext\" combodataset=\"ds_mk_Cust\" combodatacol=\"CUST_NAME\" combocodecol=\"CUST\" textAlign=\"center\"/><Cell col=\"3\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" text=\"bind:PPRORDMST_REMARK\"/></Band></Format></Formats>");
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
            obj.set_text("발주일자");
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
            obj.set_text("발주처");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("stOrdDate","17","76","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("발주일자");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("calPprOrdMstDate","stOrdDate:3","76","119","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stOrdNo","calPprOrdMstDate:3","75","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("발주번호");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtPprOrdMstNo","stOrdNo:3","75","45","35",null,null,null,null,null,null,this);
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

            obj = new Static("stOrdCust","medtPprOrdMstNo:3","75","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("발주처");
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

            obj = new Combo("cbOrdCustNm","edCustCd:3","75","170","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_mk_Cust");
            obj.set_codecolumn("CUST");
            obj.set_datacolumn("CUST_NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Div("DivDtl","17","grdPprMst:3","97.31%","58.61%",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_url("mk::MK121_DTL.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew","71.69%","10","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("신규");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","btnNew:10","10","80","40",null,null,null,null,null,null,this);
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

            obj = new Button("btnPrt","btnDel:10","10","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("출력");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","calPprOrdMstDate","value","dsPprOrdMst","PPRORDMST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","medtPprOrdMstNo","value","dsPprOrdMst","PPRORDMST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edCustCd","value","dsPprOrdMst","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cbOrdCustNm","value","dsPprOrdMst","CUST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edMstRemark","value","dsPprOrdMst","PPRORDMST_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","mk::MK121_DTL.xfdl");
        };
        
        // User Script
        this.addIncludeScript("MK121.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK121.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("MK121.xfdl","Lib::Lib_mk.xjs");
        this.addIncludeScript("MK121.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("MK121.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_mk.xjs"); /*include "Lib::Lib_mk.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var nRow, sSetDate;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerDML, vPerDel;
        var vPprOrdMst_Date, vPprOrdMst_No;
        var vStr = "U";
        var sCust_Gubn = "40";
        var nSaveRow = -1;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var i_flow_id, NEW_I_FLOW_ID;

        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", nexacro.getApplication().gv_selectMenu);

        	vPerSel = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_SELECT");
        	vPerDML = "U";
        	vPerDel = "D";

        	vStr = vPerDML;

        	if(vPerSel = "1"){

        		//결재라인 저장여부 체크
        		this.lfn_I_FLOW_ORDER_LOAD("01", 60, gv_sabun, this.DS_FORMPATH, this.DS_GW_K, this.DS_GW_H, this.DS_GW_C, this.DS_GW_D);

        		var d = new Date();
        		var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");
        		this.Tab00.Tabpage1.form.calSDate.set_value(strtoDay);
        		this.Tab00.Tabpage1.form.calEDate.set_value(strtoDay);

        		//발주처 정보 가져오기
        		this.gfn_TransactionP("select", "JSP/mk/Cust_Select.jsp", "ds_mk_Cust=ds_mk_Cust", "ds_mk_Cust=ds_mk_Cust", "", "Callback_CustSelect", false, "S", false, this);
        	}
        };


        this.Callback_CustSelect = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{

        		if(this.fctn_elecLine_chk() == false)
        			alert("결재라인이 등록되지 않았습니다! \n\r기안작성>일반공용양식>용지발주의 결재라인을 설정하세요!");
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

        this.fctn_elecLine_chk = function()
        {
        	if(this.DS_GW_K.rowcount <= 0)
        		return false;
        	else
        		return true;
        }


        //조회버튼 이벤트
        this.btnSearch_onclick = function(obj,e)
        {
        	if (this.Tab00.Tabpage1.form.calSDate.value == "")
        	{
        		this.Tab00.Tabpage1.form.calSDate.setFocus();
        		alert("발주일자를 입력하여 주십시요.");
        		return false;
        	}

        	if(this.edSCustCd.text == "0000")
        		this.edSCustCd.set_value("");

        	str_url = "JSP/mk/mk121f_pprord_mst.jsp";
        	in_ds = "dsPprOrdMst=dsPprOrdMst";
        	out_ds = "dsPprOrdMst=dsPprOrdMst";
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

        this.dsPprOrdMst_onrowposchanged = function(obj,e)
        {
        	this.calPprOrdMstDate.set_enable((this.dsPprOrdMst.getRowType(e.newrow) == "2"));

        	vPprOrdMst_Date = this.dsPprOrdMst.getColumn(e.newrow, "PPRORDMST_DATE");
        	vPprOrdMst_No = this.dsPprOrdMst.getColumn(e.newrow, "PPRORDMST_NO");

        	this.DivDtl.form.getData_PprOrdDtl(vPprOrdMst_Date, vPprOrdMst_No);
        };

        //#######################################################
        //  마스터 입력값 확인
        //  저장시나 신규시 앞 레코드의 값이 정확한지 확인
        //#######################################################
        this.fctn_PprOrdMst_CheckRecord = function(nRow)
        {
        	if (nRow = -1)
        	{
        		return true;
        	}

        	if(Eco.isUndefined(this.dsPprOrdMst.getColumn(nRow, "PPRORDMST_DATE") == true))
        	{
        		alert("발주일자를 입력해 주십시요.");
        		this.calPprOrdMstDate.setFocus();
        		return false;
        	}

        	if(Eco.isUndefined(this.dsPprOrdMst.getColumn(nRow, "CUST_CODE") == true))
        	{
        		alert("발주처를 입력해 주십시요.");
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

        	inds	= "input=dsPprOrdMst:u";
        	nRow 	= this.dsPprOrdMst.rowposition;

        	nSaveRow = Eco.decode(this.dsPprOrdMst.rowcount, 1, -1, this.dsPprOrdMst.rowposition);

        	if (!this.fctn_PprOrdMst_CheckRecord(nRow))
        	{
        		setSave = false;
        		return false;
        	}

        	if (setSave)
        	{
        		this.gfn_TransactionP("save", "JSP/mk/mk121f_pprordmst_dml.jsp", inds, "", "", "fnMstSaveCallback", false, vStr, false, this);
        	}

        };

        this.fnMstSaveCallback = function(Trid, ErrorCode, ErrorMsg, gv_rt_value)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}else{

        		NEW_I_FLOW_ID = nexacro.getApplication().gv_rt_value;
        		this.DivDtl.form.DivDtl_DivBtn_btnDSave_onclick(vPerDML);

        		// 순번을 넣기위해 리로드
        		this.fctn_Reload_MstList("Reload");

        		this.dsPprOrdMst.set_rowposition(Eco.decode(nSaveRow, -1, this.dsPprOrdMst.getRowCount()-1, nSaveRow));

        		if(NEW_I_FLOW_ID != "" && NEW_I_FLOW_ID != null)
        		{
        			this.lfn_I_FLOW_ORDER_SAVE(NEW_I_FLOW_ID, this.ds_flow_order, this.DS_GW_K, this.DS_GW_H, this.DS_GW_C, this.DS_GW_D);
        			this.dsPprOrdMst.setColumn(this.dsPprOrdMst.rowposition, "I_FLOW_ID", NEW_I_FLOW_ID);
        		}
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
        	var nRow = this.dsPprOrdMst.getRowCount()-1;   //마지막 row

        	if(this.fctn_PprOrdMst_CheckRecord(nRow)){

        		this.dsPprOrdMst.addRow();
        		this.dsPprOrdMst.set_rowposition(this.dsPprOrdMst.getRowCount()-1);

        		if(Eco.isUndefined(this.dsPprOrdMst.getColumn(this.dsPprOrdMst.rowposition, "PPRORDMST_DATE")) == true)
        		{
        			var d = new Date();
        			sSetDate = Eco.date.getMaskFormatString(d, "yyyyMMdd");
        			this.dsPprOrdMst.setColumn(this.dsPprOrdMst.rowposition, "PPRORDMST_DATE", sSetDate);
        		}else{

        			sSetDate = this.dsPprOrdMst.getColumn(this.dsPprOrdMst.rowposition, "PPRORDMST_DATE");
        		}

        		this.dsPprOrdMst.setColumn(this.dsPprOrdMst.rowposition, "CUST_GUBN", sCust_Gubn);
        		this.dsPprOrdMst.setColumn(this.dsPprOrdMst.rowposition, "EMPLOYEE_ID", gv_sabun);

        		this.fctn_Max_PprOrdMstNo(this.dsPprOrdMst.rowposition);
        		i_flow_id = "";
        		NEW_I_FLOW_ID = "";
        	}else{
        		this.dsPprOrdMst.set_rowposition(this.dsPprOrdMst.getRowCount()-1);
        	}

        	this.calPprOrdMstDate.setFocus();
        };

        /*
        //#######################################################
        // 용지발주일자의 다음 순번 찾기
        //#######################################################
        this.fctn_Max_PprOrdMstNo = function(nRow)
        {
        	var sTblName = "PRODUCT.PPRORD_MST";
        	var sPKColName = "PPRORDMST_DATE";
        	var sSEQColName = "PPRORDMST_NO";
        	var sPKValue = sSetDate;
        	var sColLength = this.dsPprOrdMst.getColumnInfo("PPRORDMST_NO").size;

        	var strArg  = "";

        	//  쿼리로 지정날짜의 순번 얻기
        	this.lfn_Seq_Count(sTblName, sPKColName, sSEQColName, sPKValue, sColLength);
        	var sSqlSeq  = nexacro.getApplication().gv_rt_value;
        	this.dsPprOrdMst.setColumn(nRow, "PPRORDMST_NO", sSqlSeq);

        }
        */

        //#######################################################
        // 용지발주일자의 다음 순번 찾기 (과거버전)
        //#######################################################
        this.fctn_Max_PprOrdMstNo = function(nRow)
        {
        	var sTblName = "PRODUCT.PPRORD_MST";
        	var sPKColName = "PPRORDMST_DATE";
        	var sSEQColName = "PPRORDMST_NO";
        	var sPKValue = sSetDate;
        	var sColLength = this.dsPprOrdMst.getColumnInfo("PPRORDMST_NO").size;

        	var strArg  = "";

        	//  쿼리로 지정날짜의 순번 얻기
        	this.lfn_Seq_Count(sTblName, sPKColName, sSEQColName, sPKValue, sColLength);
        	var sSqlSeq  = nexacro.getApplication().gv_rt_value;

        	// PID에서 지정날짜의 순번 얻기
        	sPidSeq = this.fctn_PID_PprOrdMstNo_Count(this.dsPprOrdMst
        	                                    , sSetDate
        	                                    , sPKColName
        	                                    , sSEQColName);

        	// 쿼리와 PID와의 순번을 맞추기 위해 비교 한 후,
        	// 같은 날짜가 있으면 PID, 없으면 쿼리 또는 PID에서 가져온다.
        	if (sSqlSeq > sPidSeq)
        		this.dsPprOrdMst.setColumn(nRow, "PPRORDMST_NO", sSqlSeq);
        	else
        	{
        		sPidSeq = (nexacro.toNumber(sPidSeq)+1).toString();
        		sPidSeq = sPidSeq.padLeft(3, "0");
        		this.dsPprOrdMst.setColumn(nRow, "PPRORDMST_NO", sPidSeq);
        	}
        }


        this.fctn_PID_PprOrdMstNo_Count = function(dsF, sNowDate, MainColumn, SeqColumn)
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
        		if(this.dsPprOrdMst.getRowType(nRow) == 1)
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
        	bRtn = this.confirm("용지발주 [ "+this.calPprOrdMstDate.value+" - "+this.medtPprOrdMstNo.text+" ] 삭제하시겠습니까?", "용지발주 삭제");

        	if(bRtn == true)
        	{
        		this.dsPprOrdMst.deleteRow(this.dsPprOrdMst.rowposition);
        		this.btnSave_onclick(vPerDel);
        		this.DivDtl.form.DivDtl_DivBtn_btnDDel_onclick();
        	}
        };


        //용지발주 출력 클릭 이벤트
        this.btnPrt_onclick = function(obj,e)
        {
        	var sPprOrdMst_Date = this.dsPprOrdMst.getColumn(this.dsPprOrdMst.rowposition, "PPRORDMST_DATE");
        	var sPprOrdMst_No = this.dsPprOrdMst.getColumn(this.dsPprOrdMstrowposition, "PPRORDMST_NO");

           if ((Eco.isUndefined(sPprOrdMst_Date) != true) && (Eco.isUndefined(sPprOrdMst_No) != true))
           {
        		var rdParam;
        		var vI_Flow_Id = this.dsPprOrdMst.getColumn(this.dsPprOrdMst.rowposition, "I_FLOW_ID");
        		var strArg = this.lfn_RD_Approval_Set_mk(vI_Flow_Id, this.dsApproval);

        		rdUrl = gv_svcUrl + "rpt/mk/MK124.mrd";
                rdParam = "/rp [" + sPprOrdMst_Date + "] [" + sPprOrdMst_No + "] " + strArg;

        		this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1024, 770);

        		// 다음칸으로 이동
        		if(this.dsPprOrdMst.rowposition != this.dsPprOrdMst.getRowCount()-1)
        			this.dsPprOrdMst.set_rowposition(this.dsPprOrdMst.rowposition+1);
           }
           else
        		alert("조회된 항목이 없습니다.");
        };



        this.edCustCd_onchanged = function(obj,e)
        {
        	if (this.edCustCd.maxlength == this.edCustCd.text.length)
        		this.cbOrdCustNm.set_index(this.ds_mk_Cust.findRow("CUST", sCust_Gubn + this.edCustCd.text));

        	if (this.cbOrdCustNm.index != -1)
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

        this.cbOrdCustNm_onitemchanged = function(obj,e)
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
            this.calPprOrdMstDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.edCustCd.addEventHandler("onchanged",this.edCustCd_onchanged,this);
            this.edCustCd.addEventHandler("onkeydown",this.edCustCd_onkeydown,this);
            this.edCustCd.addEventHandler("onsetfocus",this.edCustCd_onsetfocus,this);
            this.cbOrdCustNm.addEventHandler("onitemchanged",this.cbOrdCustNm_onitemchanged,this);
            this.btnNew.addEventHandler("onclick",this.btnNew_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.btnPrt.addEventHandler("onclick",this.btnPrt_onclick,this);
            this.dsPprOrdMst.addEventHandler("oncolumnchanged",this.ds_mk_Paper_oncolumnchanged,this);
            this.dsPprOrdMst.addEventHandler("onrowposchanged",this.dsPprOrdMst_onrowposchanged,this);
            this.ds_mk_Cust.addEventHandler("oncolumnchanged",this.ds_mk_Paper_oncolumnchanged,this);
        };
        this.loadIncludeScript("MK121.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
