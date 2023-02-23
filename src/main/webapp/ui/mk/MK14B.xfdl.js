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
            this.set_titletext("필름 입/출고(이동) 현황");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList1", this);
            obj._setContents("<ColumnInfo><Column id=\"ORDMST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ORDMST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ORDMST_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"USE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_TONE\" type=\"STRING\" size=\"256\"/><Column id=\"CTP\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMSTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CODEYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_FILMOUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_FILMINDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_Cust", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CUST\" type=\"STRING\" size=\"6\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REPRESENTATIVE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_STARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_STOPPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ACNTNO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTDTL_SALEAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PWT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSort", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">발주번호별</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">도서코드별</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"ROOT1\" type=\"STRING\" size=\"256\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">필름 입/출고 현황</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">필름 이동현황</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDate", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">출고일자</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">입고일자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBookMst", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivFilmInOut","452","52","850","183",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Radio("rdDate",null,"25","323","35","425",null,null,null,null,null,this.DivFilmInOut.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsDate");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("horizontal");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_background("lightsteelblue");
            obj.set_color("white");
            obj.set_fittocontents("none");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_rowcount("2");
            obj.set_columncount("2");
            obj.set_text("단가 \'0\'인 건  ");
            obj.set_value("1");
            obj.set_index("0");
            this.DivFilmInOut.addChild(obj.name, obj);

            obj = new Combo("cbCustNm",null,"99","232","35","425",null,null,null,null,null,this.DivFilmInOut.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_mk_Cust");
            obj.set_datacolumn("CUST_NAME");
            obj.set_codecolumn("CUST");
            obj.set_autoselect("true");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.DivFilmInOut.addChild(obj.name, obj);

            obj = new Edit("edSCustCd",null,"99","88","35","660",null,null,null,null,null,this.DivFilmInOut.form);
            obj.set_taborder("9");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            this.DivFilmInOut.addChild(obj.name, obj);

            obj = new Static("stCust",null,"99","85","35","751",null,null,null,null,null,this.DivFilmInOut.form);
            obj.set_taborder("13");
            obj.set_text("외주처");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivFilmInOut.addChild(obj.name, obj);

            obj = new Calendar("calEDate",null,"62","160","35","425",null,null,null,null,null,this.DivFilmInOut.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.DivFilmInOut.addChild(obj.name, obj);

            obj = new Calendar("calSDate",null,"62","160","35","588",null,null,null,null,null,this.DivFilmInOut.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.DivFilmInOut.addChild(obj.name, obj);

            obj = new Static("stDate",null,"62","85","35","751",null,null,null,null,null,this.DivFilmInOut.form);
            obj.set_taborder("14");
            obj.set_text("조회일자");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.DivFilmInOut.addChild(obj.name, obj);

            obj = new Static("stKind",null,"25","85","35","751",null,null,null,null,null,this.DivFilmInOut.form);
            obj.set_taborder("15");
            obj.set_text("조회방법");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivFilmInOut.addChild(obj.name, obj);

            obj = new Button("btnBook_Search","430","25","85","35",null,null,null,null,null,null,this.DivFilmInOut.form);
            obj.set_taborder("4");
            obj.set_text("도서번호");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.DivFilmInOut.addChild(obj.name, obj);

            obj = new Edit("edt_bookCode","518","25","160","35",null,null,null,null,null,null,this.DivFilmInOut.form);
            obj.set_taborder("5");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("10");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.DivFilmInOut.addChild(obj.name, obj);

            obj = new Edit("edEBookCd","681","25","160","35",null,null,null,null,null,null,this.DivFilmInOut.form);
            obj.set_taborder("6");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("10");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.DivFilmInOut.addChild(obj.name, obj);

            obj = new Static("stCust1_00","430","62","85","35",null,null,null,null,null,null,this.DivFilmInOut.form);
            obj.set_taborder("16");
            obj.set_text("도서년판");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivFilmInOut.addChild(obj.name, obj);

            obj = new Edit("edt_bookYear","518","62","88","35",null,null,null,null,null,null,this.DivFilmInOut.form);
            obj.set_taborder("7");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.DivFilmInOut.addChild(obj.name, obj);

            obj = new Static("stCust1_00_00","430","99","85","35",null,null,null,null,null,null,this.DivFilmInOut.form);
            obj.set_taborder("17");
            obj.set_text("도서명");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivFilmInOut.addChild(obj.name, obj);

            obj = new Edit("edBookNm","518","99","323","35",null,null,null,null,null,null,this.DivFilmInOut.form);
            obj.set_taborder("8");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.DivFilmInOut.addChild(obj.name, obj);

            obj = new Static("stCondition",null,"136","85","35","751",null,null,null,null,null,this.DivFilmInOut.form);
            obj.set_taborder("18");
            obj.set_text("필터조건");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivFilmInOut.addChild(obj.name, obj);

            obj = new Static("stSort",null,"136","85","35","335",null,null,null,null,null,this.DivFilmInOut.form);
            obj.set_taborder("19");
            obj.set_text("정렬방법");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivFilmInOut.addChild(obj.name, obj);

            obj = new Radio("rdSort",null,"136","323","35","9",null,null,null,null,null,this.DivFilmInOut.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsSort");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("horizontal");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_background("lightsteelblue");
            obj.set_color("white");
            obj.set_fittocontents("none");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_rowcount("2");
            obj.set_columncount("2");
            obj.set_text("단가 \'0\'인 건  ");
            obj.set_value("1");
            obj.set_index("0");
            this.DivFilmInOut.addChild(obj.name, obj);

            obj = new Static("stCondition2",null,"137","323","35","425",null,null,null,null,null,this.DivFilmInOut.form);
            obj.set_taborder("20");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivFilmInOut.addChild(obj.name, obj);

            obj = new CheckBox("cbExPrinpia","119","145","150","20",null,null,null,null,null,null,this.DivFilmInOut.form);
            obj.set_taborder("10");
            obj.set_text("프린피아 제외");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_value("true");
            this.DivFilmInOut.addChild(obj.name, obj);

            obj = new CheckBox("cbExCTP","259","145","150","20",null,null,null,null,null,null,this.DivFilmInOut.form);
            obj.set_taborder("11");
            obj.set_text("CTP 제외");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_value("true");
            this.DivFilmInOut.addChild(obj.name, obj);

            obj = new Radio("rdGubun","470","28","412","45",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            obj.set_innerdataset("dsGubun");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_columncount("2");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_text("필름 입/출고 현황");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","12","10","448","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("필름 입/출고(이동)현황");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Div("DivFilmMove","452","52","850","183",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEDate",null,"25","160","35","425",null,null,null,null,null,this.DivFilmMove.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.DivFilmMove.addChild(obj.name, obj);

            obj = new Calendar("calSDate",null,"25","160","35","588",null,null,null,null,null,this.DivFilmMove.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.DivFilmMove.addChild(obj.name, obj);

            obj = new Static("stDate",null,"25","85","35","751",null,null,null,null,null,this.DivFilmMove.form);
            obj.set_taborder("1");
            obj.set_text("조회일자");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.DivFilmMove.addChild(obj.name, obj);

            obj = new Button("btnBook_Search","14","62","85","35",null,null,null,null,null,null,this.DivFilmMove.form);
            obj.set_taborder("3");
            obj.set_text("도서번호");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.DivFilmMove.addChild(obj.name, obj);

            obj = new Edit("edt_bookCode","102","62","160","35",null,null,null,null,null,null,this.DivFilmMove.form);
            obj.set_taborder("4");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("10");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.DivFilmMove.addChild(obj.name, obj);

            obj = new Edit("edEBookCd","265","62","160","35",null,null,null,null,null,null,this.DivFilmMove.form);
            obj.set_taborder("5");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("10");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.DivFilmMove.addChild(obj.name, obj);

            obj = new Static("stCust1_00","14","99","85","35",null,null,null,null,null,null,this.DivFilmMove.form);
            obj.set_taborder("8");
            obj.set_text("도서년판");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivFilmMove.addChild(obj.name, obj);

            obj = new Edit("edt_bookYear","102","99","88","35",null,null,null,null,null,null,this.DivFilmMove.form);
            obj.set_taborder("6");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.DivFilmMove.addChild(obj.name, obj);

            obj = new CheckBox("cbExCTP","259","109","150","20",null,null,null,null,null,null,this.DivFilmMove.form);
            obj.set_taborder("7");
            obj.set_text("CTP 제외");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_value("true");
            this.DivFilmMove.addChild(obj.name, obj);

            obj = new Button("btnSearch","rdGubun:193","34","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrt","btnSearch:7","34","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("출력");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel","btnPrt:7","34","43","39",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_icon("url(\'Img::ico_excel_O.png\')");
            this.addChild(obj.name, obj);

            obj = new Div("DivGrd","11","227","98.85%",null,null,"3",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_async("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","rdGubun","codecolumn","dsGubun0","CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","rdGubun","datacolumn","dsGubun0","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","rdGubun","value","dsGubun0","CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","rdGubun","innerdataset","dsGubun0","CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK14B.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK14B.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("MK14B.xfdl","Lib::Lib_mk.xjs");
        this.registerScript("MK14B.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_mk.xjs"); /*include "Lib::Lib_mk.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerPrt;
        var vStr;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var sCust_Gubn = "41";
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var urlExcel = nexacro.getApplication().gv_urlXeni;
        var gv_urlRdDataServer = nexacro.getApplication().gv_urlRdDataServer;


        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", nexacro.getApplication().gv_selectMenu);

        	vPerSel = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_SELECT");
        	vPerPrt = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_PRINT");

        	//권한 체크 및 컴포넌트 ENABLE처리
        	if(vPerSel != "1" || vPerPrt != "1")
        		this.fctn_User_Enabled(this, false);

        	if(vPerSel = "1"){

        		//외주처 정보 가져오기
        		this.gfn_TransactionP("select", "JSP/mk/Cust_Select.jsp", "ds_mk_Cust=ds_mk_Cust", "ds_mk_Cust=ds_mk_Cust", "", "", false, "S", false, this);
        		this.ds_mk_Cust.filter("CUST_GUBN=='00' || CUST_GUBN=='" + sCust_Gubn + "'");

        		if(this.rdGubun.value == 1){
        			this.DivFilmInOut.set_visible(true);
        			this.DivFilmMove.set_visible(false);
        			this.DivGrd.set_url("mk::MK14B_1.xfdl");
        			this.DivFilmInOut.form.calSDate.setFocus();
        		}else{
        			this.DivFilmInOut.set_visible(false);
        			this.DivFilmMove.set_visible(true);
        			this.DivGrd.set_url("mk::MK14B_2.xfdl");
        			this.DivFilmMove.form.calSDate.setFocus();
        		}
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
        	if(this.rdGubun.value == 1)
        	{

        		if((this.DivFilmInOut.form.calSDate.value == "" || Eco.isUndefined(this.DivFilmInOut.form.calSDate.value) == true) &&
        		   (this.DivFilmInOut.form.calEDate.value == "" || Eco.isUndefined(this.DivFilmInOut.form.calEDate.value) == true) &&
        		   (this.DivFilmInOut.form.edt_bookCode.value == "" || Eco.isUndefined(this.DivFilmInOut.form.edt_bookCode.value) == true) &&
        		   (this.DivFilmInOut.form.edEBookCd.value == "" || Eco.isUndefined(this.DivFilmInOut.form.edEBookCd.value) == true) &&
        		   (this.DivFilmInOut.form.edt_bookYear.value == "" || Eco.isUndefined(this.DivFilmInOut.form.edt_bookYear.value) == true) &&
        		   (this.DivFilmInOut.form.edBookNm.value == "" || Eco.isUndefined(this.DivFilmInOut.form.edBookNm.value) == true))
        		{
        			this.DivFilmInOut.form.calSDate.setFocus();
        			alert("조회할 조건을 입력해 주십시요.");
        			return false;
        		}

        		//조회방법 ""처리
        		var vDateGubun1, vDateGubun2;
        		if(this.DivFilmInOut.form.rdDate.value == 1)
        			vDateGubun1 = "1";
        		else
        			vDateGubun1 = "";

        		if(this.DivFilmInOut.form.rdDate.value == 2)
        			vDateGubun2 = "1";
        		else
        			vDateGubun2 = "";

        		//조회일자 ""처리
        		var vSDate, vEDate;
        		if(Eco.isUndefined(this.DivFilmInOut.form.calSDate.value) == true)
        			vSDate = "";
        		else
        			vSDate = this.DivFilmInOut.form.calSDate.value;
        		if(Eco.isUndefined(this.DivFilmInOut.form.calEDate.value) == true )
        			vEDate = "";
        		else
        			vEDate = this.DivFilmInOut.form.calEDate.value;

        		//도서코드 ""처리
        		var vBookSCd, vBookECd, vBookYear, vBookName;
        		if(Eco.isUndefined(this.DivFilmInOut.form.edt_bookCode.value) == true)
        			vBookSCd = "";
        		else
        			vBookSCd = this.DivFilmInOut.form.edt_bookCode.value;

        		if(Eco.isUndefined(this.DivFilmInOut.form.edEBookCd.value) == true)
        			vBookECd = "";
        		else
        			vBookECd = this.DivFilmInOut.form.edEBookCd.value;

        		if(Eco.isUndefined(this.DivFilmInOut.form.edt_bookYear.value) == true)
        			vBookYear = "";
        		else
        			vBookYear = this.DivFilmInOut.form.edt_bookYear.value;

        		if(Eco.isUndefined(this.DivFilmInOut.form.edBookNm.value) == true)
        			vBookName = "";
        		else
        			vBookName = this.DivFilmInOut.form.edBookNm.value;

        		//거래처코드 ""처리
        		var vCustCd;
        		if(Eco.isUndefined(this.DivFilmInOut.form.edSCustCd.value) == true){
        			vCustCd = "";
        			sCust_Gubn = "";
        		}else if(this.DivFilmInOut.form.edSCustCd.value == "0000"){
        			vCustCd = "";
        			sCust_Gubn = "";
        		}else {
        			vCustCd = this.DivFilmInOut.form.edSCustCd.value;
        			sCust_Gubn = "41";
        		}

        		var vExPrinpia, vExCTP;
        		if(this.DivFilmInOut.form.cbExPrinpia.value == true)
        			vExPrinpia = 1;
        		else
        			vExPrinpia = 0;

        		if(this.DivFilmInOut.form.cbExCTP.value == true)
        			vExCTP = 1;
        		else
        			vExCTP = 0;

        		var vSort1, vSort2;
        		if(this.DivFilmInOut.form.rdSort.value == 1)
        			vSort1 = "1";
        		else
        			vSort1 = "";

        		if(this.DivFilmInOut.form.rdSort.value == 2)
        			vSort2 = "1";
        		else
        			vSort2 = "";

        		str_url = "JSP/mk/mk14B_Select1.jsp";
        		in_ds 	= "dsList1=dsList1";
        		out_ds 	= "dsList1=dsList1";
        		str_arg = "DATEGUBUN1=" + nexacro.wrapQuote(vDateGubun1) +
        	          " DATEGUBUN2=" + nexacro.wrapQuote(vDateGubun2) +
        			  " SDATE=" + nexacro.wrapQuote(vSDate) +
        	          " EDATE=" + nexacro.wrapQuote(vEDate) +
        			  " SBOOKCODE=" + nexacro.wrapQuote( vBookSCd ) +
        	          " EBOOKCODE=" + nexacro.wrapQuote( vBookECd ) +
        			  " BOOKYEAR=" + nexacro.wrapQuote( vBookYear ) +
        	          " BOOKNAME=" + nexacro.wrapQuote( vBookName ) +
        	          " CUST_GUBN=" +nexacro.wrapQuote( sCust_Gubn) +
        			  " CUST_CODE=" +nexacro.wrapQuote( vCustCd ) +
        			  " PRINPIA_CHK=" +nexacro.wrapQuote( vExPrinpia) +
        			  " CTP_CHK=" +nexacro.wrapQuote( vExCTP ) +
        			  " SORT1=" +nexacro.wrapQuote( vSort1 ) +
        			  " SORT2=" +nexacro.wrapQuote(vSort2);
        	}else if(this.rdGubun.value == 2)
        	{
        		if((this.DivFilmMove.form.calSDate.value == "" || Eco.isUndefined(this.DivFilmMove.form.calSDate.value) == true) &&
        		   (this.DivFilmMove.form.calEDate.value == "" || Eco.isUndefined(this.DivFilmMove.form.calEDate.value) == true) &&
        		   (this.DivFilmMove.form.edt_bookCode.value == "" || Eco.isUndefined(this.DivFilmMove.form.edt_bookCode.value) == true) &&
        		   (this.DivFilmMove.form.edEBookCd.value == "" || Eco.isUndefined(this.DivFilmMove.form.edEBookCd.value) == true) &&
        		   (this.DivFilmMove.form.edt_bookYear.value == "" || Eco.isUndefined(this.DivFilmMove.form.edt_bookYear.value) == true))
        		{
        			this.DivFilmMove.form.calSDate.setFocus();
        			alert("조회할 조건을 입력해 주십시요.");
        			return false;
        		}

        		//조회일자 ""처리
        		var vSDate, vEDate;
        		if(Eco.isUndefined(this.DivFilmMove.form.calSDate.value) == true)
        			vSDate = "";
        		else
        			vSDate = this.DivFilmMove.form.calSDate.value;
        		if(Eco.isUndefined(this.DivFilmMove.form.calEDate.value) == true )
        			vEDate = "";
        		else
        			vEDate = this.DivFilmMove.form.calEDate.value;


        		//도서코드 ""처리
        		var vBookSCd, vBookECd, vBookYear, vBookName;
        		if(Eco.isUndefined(this.DivFilmMove.form.edt_bookCode.value) == true)
        			vBookSCd = "";
        		else
        			vBookSCd = this.DivFilmMove.form.edt_bookCode.value;

        		if(Eco.isUndefined(this.DivFilmMove.form.edEBookCd.value) == true)
        			vBookECd = "";
        		else
        			vBookECd = this.DivFilmMove.form.edEBookCd.value;

        		if(Eco.isUndefined(this.DivFilmMove.form.edt_bookYear.value) == true)
        			vBookYear = "";
        		else
        			vBookYear = this.DivFilmMove.form.edt_bookYear.value;

        		str_url = "JSP/mk/mk14B_Select2.jsp";
        		in_ds 	= "dsList2=dsList2";
        		out_ds 	= "dsList2=dsList2";
        		str_arg = " SBOOKCODE=" + nexacro.wrapQuote( vBookSCd ) +
        				  " EBOOKCODE=" + nexacro.wrapQuote( vBookECd ) +
        			      " BOOKYEAR=" + nexacro.wrapQuote( vBookYear ) +
        			      " SDATE=" + nexacro.wrapQuote(vSDate) +
        	              " EDATE=" + nexacro.wrapQuote(vEDate);
        	}

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnCallbackSelect", false, "S", false, this);
        };

        this.fnCallbackSelect = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{
        		if(this.rdGubun.value == 1){
        			if(this.dsList1.rowcount == 0){
        				alert("조회된 자료가 없습니다.");
        				return false;
        			}
        		}else{
        			if(this.dsList2.rowcount == 0){
        				alert("조회된 자료가 없습니다.");
        				return false;
        			}
        		}
        	}
        };

        //레포트 출력 이벤트
        this.btnPrt_onclick = function(obj,e)
        {
        	if(this.rdGubun.value == 1)
        	{
        		if((this.DivFilmInOut.form.calSDate.value == "" || Eco.isUndefined(this.DivFilmInOut.form.calSDate.value) == true) &&
        		   (this.DivFilmInOut.form.calEDate.value == "" || Eco.isUndefined(this.DivFilmInOut.form.calEDate.value) == true) &&
        		   (this.DivFilmInOut.form.edt_bookCode.value == "" || Eco.isUndefined(this.DivFilmInOut.form.edt_bookCode.value) == true) &&
        		   (this.DivFilmInOut.form.edEBookCd.value == "" || Eco.isUndefined(this.DivFilmInOut.form.edEBookCd.value) == true) &&
        		   (this.DivFilmInOut.form.edt_bookYear.value == "" || Eco.isUndefined(this.DivFilmInOut.form.edt_bookYear.value) == true) &&
        		   (this.DivFilmInOut.form.edBookNm.value == "" || Eco.isUndefined(this.DivFilmInOut.form.edBookNm.value) == true))
        		{
        			this.DivFilmInOut.form.calSDate.setFocus();
        			alert("조회할 조건을 입력해 주십시요.");
        			return false;
        		}

        		//조회방법 ""처리
        		var vDateGubun1, vDateGubun2;
        		if(this.DivFilmInOut.form.rdDate.value == 1)
        			vDateGubun1 = "1";
        		else
        			vDateGubun1 = "";

        		if(this.DivFilmInOut.form.rdDate.value == 2)
        			vDateGubun2 = "1";
        		else
        			vDateGubun2 = "";

        		//조회일자 ""처리
        		var vSDate, vEDate;
        		if(Eco.isUndefined(this.DivFilmInOut.form.calSDate.value) == true)
        			vSDate = "";
        		else
        			vSDate = this.DivFilmInOut.form.calSDate.value;
        		if(Eco.isUndefined(this.DivFilmInOut.form.calEDate.value) == true )
        			vEDate = "";
        		else
        			vEDate = this.DivFilmInOut.form.calEDate.value;

        		//도서코드 ""처리
        		var vBookSCd, vBookECd, vBookYear, vBookName;
        		if(Eco.isUndefined(this.DivFilmInOut.form.edt_bookCode.value) == true)
        			vBookSCd = "";
        		else
        			vBookSCd = this.DivFilmInOut.form.edt_bookCode.value;

        		if(Eco.isUndefined(this.DivFilmInOut.form.edEBookCd.value) == true)
        			vBookECd = "";
        		else
        			vBookECd = this.DivFilmInOut.form.edEBookCd.value;

        		if(Eco.isUndefined(this.DivFilmInOut.form.edt_bookYear.value) == true)
        			vBookYear = "";
        		else
        			vBookYear = this.DivFilmInOut.form.edt_bookYear.value;

        		if(Eco.isUndefined(this.DivFilmInOut.form.edBookNm.value) == true)
        			vBookName = "";
        		else
        			vBookName = this.DivFilmInOut.form.edBookNm.value;

        		//거래처코드 ""처리
        		var vCustCd;
        		if(Eco.isUndefined(this.DivFilmInOut.form.edSCustCd.value) == true){
        			vCustCd = "";
        			sCust_Gubn = "";
        		}else if(this.DivFilmInOut.form.edSCustCd.value == "0000"){
        			vCustCd = "";
        			sCust_Gubn = "";
        		}else {
        			vCustCd = this.DivFilmInOut.form.edSCustCd.value;
        			sCust_Gubn = "41";
        		}

        		var vExPrinpia, vExCTP;
        		if(this.DivFilmInOut.form.cbExPrinpia.value == true)
        			vExPrinpia = 1;
        		else
        			vExPrinpia = 0;

        		if(this.DivFilmInOut.form.cbExCTP.value == true)
        			vExCTP = 1;
        		else
        			vExCTP = 0;

        		var vSort1, vSort2;
        		if(this.DivFilmInOut.form.rdSort.value == 1)
        			vSort1 = "1";
        		else
        			vSort1 = "";

        		if(this.DivFilmInOut.form.rdSort.value == 2)
        			vSort2 = "1";
        		else
        			vSort2 = "";

        		rdParam = "/ragentpath ["+ gv_urlRdDataServer +"]"+ " /rp [" + vDateGubun1 + "] [" +  vDateGubun2 + "] [" +  vSDate + "] [" +  vEDate + "] " +
        							                                     "[" +  vBookSCd + "] [" +  vBookECd + "] [" +  vBookYear + "] [" +  vBookName + "] " +
        																 "[" +  sCust_Gubn + "] [" +  vCustCd + "] [" +  vExPrinpia + "] [" +  vExCTP + "] " +
        																 "[" +  vSort1 + "] [" +  vSort2 + "]";
        	}else if(this.rdGubun.value == 2)
        	{
        		if((this.DivFilmMove.form.calSDate.value == "" || Eco.isUndefined(this.DivFilmMove.form.calSDate.value) == true) &&
        		   (this.DivFilmMove.form.calEDate.value == "" || Eco.isUndefined(this.DivFilmMove.form.calEDate.value) == true) &&
        		   (this.DivFilmMove.form.edt_bookCode.value == "" || Eco.isUndefined(this.DivFilmMove.form.edt_bookCode.value) == true) &&
        		   (this.DivFilmMove.form.edEBookCd.value == "" || Eco.isUndefined(this.DivFilmMove.form.edEBookCd.value) == true) &&
        		   (this.DivFilmMove.form.edt_bookYear.value == "" || Eco.isUndefined(this.DivFilmMove.form.edt_bookYear.value) == true))
        		{
        			this.DivFilmMove.form.calSDate.setFocus();

        			alert("조회할 조건을 입력해 주십시요.");
        			return false;
        		}

        		//조회일자 ""처리
        		var vSDate, vEDate;
        		if(Eco.isUndefined(this.DivFilmMove.form.calSDate.value) == true)
        			vSDate = "";
        		else
        			vSDate = this.DivFilmMove.form.calSDate.value;
        		if(Eco.isUndefined(this.DivFilmMove.form.calEDate.value) == true )
        			vEDate = "";
        		else
        			vEDate = this.DivFilmMove.form.calEDate.value;


        		//도서코드 ""처리
        		var vBookSCd, vBookECd, vBookYear, vBookName;
        		if(Eco.isUndefined(this.DivFilmMove.form.edt_bookCode.value) == true)
        			vBookSCd = "";
        		else
        			vBookSCd = this.DivFilmMove.form.edt_bookCode.value;

        		if(Eco.isUndefined(this.DivFilmMove.form.edEBookCd.value) == true)
        			vBookECd = "";
        		else
        			vBookECd = this.DivFilmMove.form.edEBookCd.value;

        		if(Eco.isUndefined(this.DivFilmMove.form.edt_bookYear.value) == true)
        			vBookYear = "";
        		else
        			vBookYear = this.DivFilmMove.form.edt_bookYear.value;

        		rdParam = "/ragentpath ["+ gv_urlRdDataServer +"]"+ " /rp [" + vBookSCd + "] [" +  vBookECd + "] [" +  vBookYear + "] [" +  vSDate + "] [" +  vEDate + "]";
        	}

        	var rdUrl = "";

        	if(this.rdGubun.value == 1){
        		rdUrl = gv_svcUrl + "rpt/mk/MK14B_1.mrd";
        	}else{
        		rdUrl = gv_svcUrl + "rpt/mk/MK14B_2.mrd";
        	}

        	var vScreenWidth = system.getScreenWidth();

        	if(vScreenWidth >= 1920)
        		vScreenWidth = vScreenWidth/2

        	nexacro.open("popupPrt", "mk::MKRDF.xfdl", this.getOwnerFrame(), {rdUrl:rdUrl, rdParam:rdParam}, "autosize=false", 0, 0, vScreenWidth, system.getScreenHeight(), this);

        };

        this.LocalFctn_OnKeyDown = function(obj,e)
        {
        	var curObj = this.DivFilmInOut.form.getFocus();
        	//ENTER입력시 TAB처럼 이동
        	if(e.keycode == "13"){

        		curObj = this.DivFilmInOut.form.getNextComponent(curObj, true);
        		curObj.setFocus();

        		//콤보타입일 경우 목록보이게 자동설정
        		if(curObj == "[object Combo]")
        		{
        			if(curObj.index == -1)
        				curObj.dropdown();
        		}
        	}
        };

        this.LocalFctn_OnKeyDown2 = function(obj,e)
        {
        	var curObj = this.DivFilmMove.form.getFocus();
        	//ENTER입력시 TAB처럼 이동
        	if(e.keycode == "13"){

        		curObj = this.DivFilmMove.form.getNextComponent(curObj, true);
        		curObj.setFocus();

        		//콤보타입일 경우 목록보이게 자동설정
        		if(curObj == "[object Combo]")
        		{
        			if(curObj.index == -1)
        				curObj.dropdown();
        		}
        	}
        };

        this.edSCustCd_onchanged = function(obj,e)
        {

        	sCust_Gubn = "41";
        	if(this.DivFilmInOut.form.edSCustCd.text.length == 1){
        		var vCustCd = this.lfn_CustName(sCust_Gubn, this.DivFilmInOut.form.edSCustCd.text);
        		this.DivFilmInOut.form.edSCustCd.set_value(vCustCd);
        	}

        	if(this.DivFilmInOut.form.edSCustCd.getLength() == this.DivFilmInOut.form.edSCustCd.text.length){
        		this.DivFilmInOut.form.cbCustNm.set_index(this.ds_mk_Cust.findRow("CUST", sCust_Gubn+this.DivFilmInOut.form.edSCustCd.text));

        		if(this.DivFilmInOut.form.cbCustNm.index == -1){
        			this.DivFilmInOut.form.cbCustNm.setFocus();
        			this.DivFilmInOut.form.cbCustNm.dropdown();
        		}
        	}
        };

        this.cbCustNm_onitemchanged = function(obj,e)
        {
        	var iCustIdx = this.ds_mk_Cust.findRow("CUST_NAME", this.DivFilmInOut.form.cbCustNm.text);
        	this.DivFilmInOut.form.edSCustCd.set_value(this.ds_mk_Cust.getColumn(iCustIdx, "CUST_CODE"));

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

        	if(vPerPrt != 1){
        		this.btnPrt.set_enable(_set);
        		this.btnExcel.set_enable(_set);
        	}
        }
        this.btnExcel_onclick = function(obj,e)
        {
        	this.exportObj = new ExcelExportObject();
            var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID,
                this.DivGrd.form.grdList, "Sheet1!A1");

        	this.exportObj.set_exporturl(urlExcel);
        	this.exportObj.exportData();
        };

        this.rdGubun_onitemchanged = function(obj,e)
        {
        	if(this.rdGubun.value == 1)
        	{
        		this.DivFilmInOut.set_visible(true);
        		this.DivFilmMove.set_visible(false);
        		this.DivFilmInOut.form.calSDate.setFocus();
        		this.DivGrd.set_url("mk::MK14B_1.xfdl");
        	}
        	else{
        		this.DivFilmInOut.set_visible(false);
        		this.DivFilmMove.set_visible(true);
        		this.DivFilmMove.form.calSDate.setFocus();
        		this.DivGrd.set_url("mk::MK14B_2.xfdl");
        	}
        };

        this.btnBook_Search_onclick = function(obj,e)
        {
        	var vBookCd, vBookYear;
        	if(this.rdGubun.value == 1)
        	{
        		vBookCd = this.DivFilmInOut.form.edt_bookCode.value;
        		vBookYear = this.DivFilmInOut.form.edt_bookYear.value;
        	}else{
        		vBookCd = this.DivFilmMove.form.edt_bookCode.value;
        		vBookYear = this.DivFilmMove.form.edt_bookYear.value;
        	}

        	var objParam = {dsParam1:this.dsBookMst
        				   ,dsParam2:"MK14B"
        				   ,dsParam3:vBookCd
        				   ,dsParam4:vBookYear}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupBook", objParam, "mk::MKBook_SearchF.xfdl", "popupCallback", this, 10, 58, 450, 400);
        };

        this.popupCallback = function(){

        	if(this.dsBookMst.rowcount > 0)
        	{
        		if(this.rdGubun.value == 1){
        			this.DivFilmInOut.form.edt_bookCode.set_value(this.dsBookMst.getColumn(0, "BOOKMST_CODE"));
        			this.DivFilmInOut.form.edt_bookYear.set_value(this.dsBookMst.getColumn(0, "BOOKMST_YEAR"));
        		}else
        		{
        			this.DivFilmMove.form.edt_bookCode.set_value(this.dsBookMst.getColumn(0, "BOOKMST_CODE"));
        			this.DivFilmMove.form.edt_bookYear.set_value(this.dsBookMst.getColumn(0, "BOOKMST_YEAR"));
        		}
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkMain_onload,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.DivFilmInOut.form.cbCustNm.addEventHandler("onitemchanged",this.cbCustNm_onitemchanged,this);
            this.DivFilmInOut.form.edSCustCd.addEventHandler("onchanged",this.edSCustCd_onchanged,this);
            this.DivFilmInOut.form.calEDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.DivFilmInOut.form.calSDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.DivFilmInOut.form.btnBook_Search.addEventHandler("onclick",this.btnBook_Search_onclick,this);
            this.DivFilmInOut.form.edt_bookCode.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.DivFilmInOut.form.edEBookCd.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.DivFilmInOut.form.edt_bookYear.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.DivFilmInOut.form.edBookNm.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.rdGubun.addEventHandler("onitemchanged",this.rdGubun_onitemchanged,this);
            this.DivFilmMove.form.calEDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown2,this);
            this.DivFilmMove.form.calSDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown2,this);
            this.DivFilmMove.form.btnBook_Search.addEventHandler("onclick",this.btnBook_Search_onclick,this);
            this.DivFilmMove.form.edt_bookCode.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown2,this);
            this.DivFilmMove.form.edEBookCd.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown2,this);
            this.DivFilmMove.form.edt_bookYear.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown2,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnPrt.addEventHandler("onclick",this.btnPrt_onclick,this);
            this.btnExcel.addEventHandler("onclick",this.btnExcel_onclick,this);
            this.ds_mk_Cust.addEventHandler("oncolumnchanged",this.ds_mk_Paper_oncolumnchanged,this);
        };
        this.loadIncludeScript("MK14B.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
