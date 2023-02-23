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
            this.set_titletext("업체정보관리");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPWT", this);
            obj._setContents("<ColumnInfo><Column id=\"PWT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PWT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCustFacilities", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CUST\" type=\"STRING\" size=\"6\"/><Column id=\"CF_SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"CF_MACHINES\" type=\"STRING\" size=\"256\"/><Column id=\"CF_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"CF_DETAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_Cust", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CUST\" type=\"STRING\" size=\"6\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REPRESENTATIVE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_STARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_STOPPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ACNTNO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTDTL_SALEAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PWT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCustDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"PWT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTDTL_SALEAMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","8","10","312","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("업체정보관리");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"31","80","40","9",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCust","11","187","628",null,null,"20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_mk_Cust");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdUse\"><Columns><Column size=\"92\"/><Column size=\"279\"/><Column size=\"86\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"업체코드\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"업체명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"업체구분\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:CUST_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" maskeditformat=\"@@@@\" editmaxlength=\"4\" editinputtype=\"normal\" maskedittype=\"string\"/><Cell col=\"1\" text=\"bind:CUST_NAME\" displaytype=\"normal\" combodataset=\"ds_mk_UseType\" combocodecol=\"USE_TYPE_CODE\" combodatacol=\"USE_TYPE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:PWT_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" edittype=\"none\" editmaxlength=\"20\" displaytype=\"combotext\" combodataset=\"dsPWT\" combodatacol=\"PWT_NAME\" combocodecol=\"PWT_CODE\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stCust","650","128","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("업체");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edCustNm","stCust:2","128","17.31%","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stCustType","edCustNm:3","128","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("업체구분");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edCustType","stCustType:3","128","4.08%","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("2");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","11","81","629","96",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_tabindex("0");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_selectedtabbuttonwidth("80");
            obj.set_selectedtabbuttonheight("40");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("검색조건");
            obj.set_border("1px double darkslateblue");
            this.Tab00.addChild(obj.name, obj);

            obj = new Button("btnSearch","490","7","80","40",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_background("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnExcel","btnSearch:3","7","43","39",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_icon("url(\'Img::ico_excel_O.png\')");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stSCustCd","22","132","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("업체코드");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Edit("edSCustCd","109","132","60","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Static("stSCustNm","181","132","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("업체명");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edSCustNm","269","132","221","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbCustTypeNm","edCustType:3","128",null,"35","0.92%",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_innerdataset("dsPWT");
            obj.set_codecolumn("PWT_CODE");
            obj.set_datacolumn("PWT_NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("stRepre","650","168","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("대표자");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edRepreNm","stRepre:3","168","17.23%","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stBizNo","edRepreNm:4","168","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("사업자번호/\r\n주민번호");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtCustNo","stBizNo:3","168",null,"35","0.92%",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_format("###-##-#####");
            obj.set_type("string");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stOfficeTel","650","208","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("대표전화");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edOfficeTel","stOfficeTel:3","208","17.23%","35",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stFAXNo","edOfficeTel:4","208","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("FAX");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edFAXNo","stFAXNo:3","208",null,"35","0.92%",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("stAddr","650","248","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("주소");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edAddr","stAddr:3","248",null,"35","0.92%",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stSaleAmt","650","288","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("매출규모");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edSaleAmt","stSaleAmt:3","288","12.31%","35",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("StUnit","edSaleAmt:3","290","58","37",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("억원");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("stStartDate","StUnit:6","288","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("거래개시일");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("calDate","stStartDate:3","288",null,"35","0.92%",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stFacilities","650","328",null,"52","0.92%",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("보유시설");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFacilities","651","383",null,null,"0.92%","20",null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_binddataset("dsCustFacilities");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdUse\"><Columns><Column size=\"188\"/><Column size=\"71\"/><Column size=\"333\"/><Column size=\"32\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"기종\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"연식\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"제원\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"+\"/></Band><Band id=\"body\"><Cell text=\"bind:CF_MACHINES\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"text\" maskeditformat=\"@@@@\" editmaxlength=\"20\" editinputtype=\"normal\" maskedittype=\"string\"/><Cell col=\"1\" text=\"bind:CF_YEAR\" displaytype=\"normal\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"text\" editmaxlength=\"4\"/><Cell col=\"2\" text=\"bind:CF_DETAIL\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" edittype=\"normal\" editmaxlength=\"40\" displaytype=\"normal\" textAlign=\"left\"/><Cell col=\"3\" text=\"-\" textAlign=\"center\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edCustNm","value","ds_mk_Cust","CUST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edCustType","value","dsCustDetail","PWT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cbCustTypeNm","value","dsCustDetail","PWT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edRepreNm","value","ds_mk_Cust","REPRESENTATIVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","medtCustNo","value","ds_mk_Cust","BUSINESSNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edOfficeTel","value","ds_mk_Cust","OFFICE_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edFAXNo","value","ds_mk_Cust","PRODUCT_FAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edAddr","value","ds_mk_Cust","ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edSaleAmt","value","ds_mk_Cust","CUSTDTL_SALEAMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","calDate","value","ds_mk_Cust","BUSINESS_STARTDATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK113.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK113.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK113.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerDML, vPerDel;
        var vStr = "U";
        var urlExcel = nexacro.getApplication().gv_urlXeni;

        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", nexacro.getApplication().gv_selectMenu);

        	vPerSel = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_SELECT");
        	vPerDML = "U";
        	vPerDel = "D";

        	if(vPerSel = "1"){
        		this.gfn_TransactionP("select", "JSP/mk/mk113f_process_work_type.jsp", "dsPWT=dsPWT", "dsPWT=dsPWT", "", "", false, "S", false, this);
        		this.btnSearch_onclick();
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
        	str_url = "JSP/mk/mk113f_cust_search.jsp";
        	in_ds = "ds_mk_Cust=ds_mk_Cust";
        	out_ds = "ds_mk_Cust=ds_mk_Cust";
        	str_arg ="CUST_CODE=" +nexacro.wrapQuote( this.edSCustCd.text);
        	str_arg +=" CUST_NAME=" +nexacro.wrapQuote( this.edSCustNm.text);
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


        this.grdCust_oncellclick = function(obj,e)
        {
        	var strArg  = "";
        	var outds 	= "";
        	var inds 	= "";

        	strArg 	= "CUST_GUBN=" + nexacro.wrapQuote( this.ds_mk_Cust.getColumn(e.row, "CUST_GUBN") ) +
        			  " CUST_CODE=" + nexacro.wrapQuote( this.ds_mk_Cust.getColumn(e.row, "CUST_CODE") ) ;

        	inds 	= "dsCustDetail=dsCustDetail";
        	outds 	= "dsCustDetail=dsCustDetail";
        	this.gfn_TransactionP("select", "JSP/mk/mk113f_cust_detail.jsp", inds, outds, strArg, "", false, "S", false, this);

        	inds 	= "dsCustFacilities=dsCustFacilities";
        	outds 	= "dsCustFacilities=dsCustFacilities";
        	this.gfn_TransactionP("select", "JSP/mk/mk113f_cust_facilities.jsp", inds, outds, strArg, "", false, "S", false, this);


        	if (this.dsCustDetail.rowcount == 0)
        	{
        		this.dsCustDetail.addRow();
        		this.dsCustDetail.setColumn(this.dsCustDetail.rowposition, "CUST_GUBN", this.ds_mk_Cust.getColumn(e.row, "CUST_GUBN"));
        		this.dsCustDetail.setColumn(this.dsCustDetail.rowposition, "CUST_CODE", this.ds_mk_Cust.getColumn(e.row, "CUST_CODE"));
        	}

        };

        //저장버튼
        this.btnSave_onclick = function()
        {
        	this.fctn_Save_Fax(vPerDML);
        	this.fctn_Save_Detail(vPerDML);
        	this.fctn_Save_Facilities(vPerDML);
        };

        //#######################################################
        // 업체 FAX 저장
        //#######################################################
        this.fctn_Save_Fax=function(vPerDML)
        {
        	var str_url, in_ds, out_ds, str_arg;
        	in_ds = "input=ds_mk_Cust:U";
        	str_url = "JSP/mk/mk113f_product_fax_dml.jsp";
        	this.gfn_TransactionP("Save", str_url, in_ds, "", "", "Callback_save", false, vPerDML, false, this);
        }

        //#######################################################
        // 업체정보 저장
        //#######################################################
        this.fctn_Save_Detail=function(vPerDML)
        {
        	var str_url, in_ds, out_ds, str_arg;
        	in_ds = "input=dsCustDetail:U";
        	str_url = "JSP/mk/mk113f_cust_detail_dml.jsp";
        	this.gfn_TransactionP("Save", str_url, in_ds, "", "", "Callback_save", false, vPerDML, false, this);
        }

        //#######################################################
        // 보유시설 저장
        //#######################################################
        this.fctn_Save_Facilities=function(vPerDML)
        {
        	var str_url, in_ds, out_ds, str_arg;
        	in_ds = "input=dsCustFacilities:U";
        	str_url = "JSP/mk/mk113f_cust_facilities_dml.jsp";
        	this.gfn_TransactionP("Save", str_url, in_ds, "", "", "Callback_save", false, vPerDML, false, this);
        }

        this.Callback_save = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		if(ErrorCode == -99)
        		{
        			this.btnSearch_onclick();
        		}else{
        			this.alert(ErrorMsg);
        		}
        		return false;
        	}
        };

        this.ImgClose_onclick = function(obj,e)
        {
        	this.close(-1);
        };

        //그리드 엑셀로 변환
        this.Tab00_Tabpage1_btnExcel_onclick = function(obj,e)
        {
        	 this.exportObj = new ExcelExportObject();
            var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID,
                this.grdCust, "Sheet1!A1");

        	this.exportObj.set_exporturl(urlExcel);
        	this.exportObj.exportData();
        };


        this.MkMain_onkeydown = function(obj,e)
        {
        	var comObj = obj.getFocus();

        	//ENTER입력시 TAB처럼 이동
        	if(e.keycode == "13"){

        		comObj = this.MkMain.getNextComponent(comObj, true);
        		comObj.setFocus();

        		//콤보타입일 경우 목록보이게 자동설정
        		if(comObj.toString() == "[object Combo]")
        			comObj.dropdown();
        		else if ((comObj.toString() == "[object Combo]") || (comObj.toString() == "[object MaskEdit]"))
        			comObj.setSelect(0, -1);
        	}
        };

        this.grdFacilities_onheadclick = function(obj,e)
        {
        	var isAppend = true;

        	if(e.cell == 3)
        	{
        		var nRow = this.dsCustFacilities.getRowCount()-1;

        		for (var i = 0; i<=this.dsCustFacilities.getRowCount()-1 ; i++)
        		{
        			if (this.dsCustFacilities.getColumn(nRow, i) == null)
        			{
        				this.dsCustFacilities.rowposition = nRow;
        				this.grdFacilities.setCellPos(i);
        				alert("입력을 완료하여 주십시요.");
        				isAppend = false;
        				break;
        			}
        		}

        		if(isAppend == true){
        			var nRow;
        			this.dsCustFacilities.addRow();
        			nRow = this.dsCustFacilities.getRowCount()-1;
        			this.dsCustFacilities.rowposition = nRow;
        			var strRow = (nexacro.toNumber(nRow)+1).toString();

        			this.dsCustFacilities.setColumn(nRow, "CUST_GUBN", this.ds_mk_Cust.getColumn(this.ds_mk_Cust.rowposition, "CUST_GUBN"));
        			this.dsCustFacilities.setColumn(nRow, "CUST_CODE", this.ds_mk_Cust.getColumn(this.ds_mk_Cust.rowposition, "CUST_CODE"));
        			this.dsCustFacilities.setColumn(nRow, "CF_SEQ", strRow.padLeft(2, "0"));

        			this.grdFacilities.setCellPos(0);
        		}

        	}
        };

        this.grdFacilities_oncellclick = function(obj,e)
        {
        	if(e.cell == 3){
        		if(this.confirm("삭제하시겠습니까?", "업체 보유시설 삭제")){
        			if(this.dsCustFacilities.getRowType(this.dsCustFacilities.rowposition) != 2){
        				this.dsCustFacilities.deleteRow(this.dsCustFacilities.rowposition);
        				this.fctn_Save_Facilities(vPerDel);
        			}else{
        				this.dsCustFacilities.deleteRow(this.dsCustFacilities.rowposition);
        			}
        		}
        	}
        };


        //업체정보 헤더 클릭하면 오름차순 정렬하기
        this.grdCust_onheadclick = function(obj,e)
        {
        	switch(e.cell){
        		case 0 :
        			this.ds_mk_Cust.set_keystring("S:+CUST_CODE");
        			break;
        		case 1 :
        			this.ds_mk_Cust.set_keystring("S:+CUST_NAME");
        			break;
        		case 2 :
        			this.ds_mk_Cust.set_keystring("S:+PWT_CODE");
        			break;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkMain_onload,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.addEventHandler("onkeydown",this.MkMain_onkeydown,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.grdCust.addEventHandler("oncellclick",this.grdCust_oncellclick,this);
            this.grdCust.addEventHandler("onheadclick",this.grdCust_onheadclick,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.Tabpage1.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.Tab00.Tabpage1.form.btnExcel.addEventHandler("onclick",this.Tab00_Tabpage1_btnExcel_onclick,this);
            this.grdFacilities.addEventHandler("onheadclick",this.grdFacilities_onheadclick,this);
            this.grdFacilities.addEventHandler("oncellclick",this.grdFacilities_oncellclick,this);
            this.ds_mk_Cust.addEventHandler("oncolumnchanged",this.ds_mk_Paper_oncolumnchanged,this);
            this.dsCustDetail.addEventHandler("oncolumnchanged",this.ds_mk_Paper_oncolumnchanged,this);
        };
        this.loadIncludeScript("MK113.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
