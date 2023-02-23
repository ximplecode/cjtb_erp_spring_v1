(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED161F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRoyalty_Mst", this);
            obj._setContents("<ColumnInfo><Column id=\"RCMST_DATENO\" type=\"STRING\" size=\"12\"/><Column id=\"RCMST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"RCMST_NO\" type=\"STRING\" size=\"3\"/><Column id=\"RCMST_CONTRACTDATE\" type=\"STRING\" size=\"8\"/><Column id=\"RCMST_PUBLICATIONDATE\" type=\"STRING\" size=\"8\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"RCMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"RCMST_ROYALTYRATE\" type=\"DECIMAL\" size=\"6\"/><Column id=\"RCMST_BOOKNAME\" type=\"STRING\" size=\"60\"/><Column id=\"RCMST_DELETE\" type=\"STRING\" size=\"1\"/><Column id=\"RCMST_PERMITEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"RCMST_PERMITEUSER\" type=\"STRING\" size=\"6\"/><Column id=\"RCMST_REMARK\" type=\"STRING\" size=\"1000\"/><Column id=\"RCMST_PERMITE\" type=\"STRING\" size=\"1\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"UI_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"UI_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"RMAMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"SCMST_ID\" type=\"INT\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRoyalty_Dtl1", this);
            obj._setContents("<ColumnInfo><Column id=\"RCDTL_KIND\" type=\"STRING\" size=\"1\"/><Column id=\"RCDTL_SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"RCDTL_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ATHR_IDENTITY\" type=\"INT\" size=\"20\"/><Column id=\"ATHR_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"ATHR_JUMINNO2\" type=\"STRING\" size=\"13\"/><Column id=\"UI_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"RCMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"RCDTL_DELETE\" type=\"STRING\" size=\"1\"/><Column id=\"RCDTL_AMOUNT\" type=\"INT\" size=\"10\"/><Column id=\"RCDTL_PAYDATE\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRoyalty_Dtl2", this);
            obj._setContents("<ColumnInfo><Column id=\"RCDTL_KIND\" type=\"STRING\" size=\"1\"/><Column id=\"RCDTL_SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"RCDTL_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ATHR_IDENTITY\" type=\"INT\" size=\"20\"/><Column id=\"ATHR_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"ATHR_JUMINNO2\" type=\"STRING\" size=\"13\"/><Column id=\"UI_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"RCMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"RCDTL_DELETE\" type=\"STRING\" size=\"1\"/><Column id=\"RCDTL_AMOUNT\" type=\"INT\" size=\"10\"/><Column id=\"RCDTL_PAYDATE\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBookMst", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRoyalty_Mst_Search", this);
            obj._setContents("<ColumnInfo><Column id=\"RCMST_DATENO\" type=\"STRING\" size=\"12\"/><Column id=\"RCMST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"RCMST_NO\" type=\"STRING\" size=\"3\"/><Column id=\"RCMST_CONTRACTDATE\" type=\"STRING\" size=\"8\"/><Column id=\"RCMST_PUBLICATIONDATE\" type=\"STRING\" size=\"8\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"RCMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"RCMST_ROYALTYRATE\" type=\"DECIMAL\" size=\"4\"/><Column id=\"RCMST_BOOKNAME\" type=\"STRING\" size=\"60\"/><Column id=\"RCMST_DELETE\" type=\"STRING\" size=\"1\"/><Column id=\"RCMST_PERMITEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"RCMST_PERMITEUSER\" type=\"STRING\" size=\"6\"/><Column id=\"RCMST_REMARK\" type=\"STRING\" size=\"1000\"/><Column id=\"RCMST_PERMITE\" type=\"STRING\" size=\"1\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"UI_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"UI_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"RMAMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"SCMST_ID\" type=\"INT\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSection", this);
            obj._setContents("<ColumnInfo><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"LVL\" type=\"INT\" size=\"1\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"3\"/><Column id=\"SECTION_SHORTNAME\" type=\"STRING\" size=\"10\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"5\"/><Column id=\"BU_GRCODE\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","15","10","97.27%","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid lightgray");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"7","63","25","231",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"7","63","25","92",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","63","25","162",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"7","63","25","25",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("출력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"7","75","25","761",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("신규카드");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_tempchk",null,"7","75","25","601",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("가져오기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"7","75","25","864",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("도움말");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"7","75","25","681",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("내용추가");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_02","15","60","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("관리카드번호");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mstNo","Static00_02:2","60","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","edt_mstNo:3","60","7.66%","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("작성일자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_mstDate","Static00_01:3","60","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","cal_mstDate:2","60","7.66%","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("관련부서");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_section","Static00:2","60","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("dsSection");
            obj.set_codecolumn("SECTION_CODE");
            obj.set_datacolumn("SECTION_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","15","102","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("도서명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookName","Static00_02_00:2","102","26.56%","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_book","edt_bookName:3","102","7.66%","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("도서코드");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookCode","btn_book:2","102","10.16%","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_maxlength("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookYear","edt_bookCode:3","102","3.44%","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_07","edt_bookYear:3","101","7.66%","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("계약일자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("st_taxRate","cb_section:2","60","7.66%","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("인세율(%)");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_contractDate","Static00_07:2","101","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_royaltyRate","st_taxRate:2","60","8.91%","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_format("#.###");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_13","medt_royaltyRate:3","60","7.66%","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("승인여부");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_permite","Static00_13:10","60","6.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("승인");
            obj.set_value("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_14","15","143","100","60",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("비고");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_remark","Static00_14:1","143","88.05%","60",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_07_00","cal_contractDate:3","101","7.66%","40",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("출간예정일");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_publicationDate","Static00_07_00:2","101","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dtl1","17","208","95.78%","240",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_binddataset("dsRoyalty_Dtl1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"5\" text=\"   1. 계약금 지급내역\" textAlign=\"left\" background=\"#7fb39d\"/><Cell row=\"1\" text=\"작성일자\"/><Cell row=\"1\" col=\"1\" text=\"저자명\"/><Cell row=\"1\" col=\"2\" text=\"주민등록번호\"/><Cell row=\"1\" col=\"3\" text=\"계약금\"/><Cell row=\"1\" col=\"4\" text=\"지급일자\"/></Band><Band id=\"body\"><Cell text=\"bind:RCDTL_DATE\" textAlign=\"center\" displaytype=\"date\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" text=\"bind:ATHR_NAME\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:ATHR_JUMINNO2\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"###### - #@@@@@#\" edittype=\"none\" maskedittype=\"string\"/><Cell col=\"3\" text=\"bind:RCDTL_AMOUNT\" textAlign=\"right\" displaytype=\"currency\"/><Cell col=\"4\" text=\"bind:RCDTL_PAYDATE\" textAlign=\"center\" displaytype=\"date\" calendardisplaynulltype=\"none\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합계\"/><Cell col=\"2\"/><Cell col=\"3\" expr=\"dataset.getSum(&apos;RCDTL_AMOUNT&apos;)\" textAlign=\"right\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dtl2","17","458","95.78%","240",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_binddataset("dsRoyalty_Dtl2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"5\" text=\"   2. 선인세 지급내역\" textAlign=\"left\" background=\"#7fb39d\"/><Cell row=\"1\" text=\"작성일자\"/><Cell row=\"1\" col=\"1\" text=\"저자명\"/><Cell row=\"1\" col=\"2\" text=\"주민등록번호\"/><Cell row=\"1\" col=\"3\" text=\"계약금\"/><Cell row=\"1\" col=\"4\" text=\"지급일자\"/></Band><Band id=\"body\"><Cell text=\"bind:RCDTL_DATE\" textAlign=\"center\" displaytype=\"date\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" text=\"bind:ATHR_NAME\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:ATHR_JUMINNO2\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"###### - #@@@@@#\" maskedittype=\"string\"/><Cell col=\"3\" text=\"bind:RCDTL_AMOUNT\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:RCDTL_PAYDATE\" textAlign=\"center\" displaytype=\"date\" calendardisplaynulltype=\"none\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합계\"/><Cell col=\"2\"/><Cell col=\"3\" expr=\"dataset.getSum(&apos;RCDTL_AMOUNT&apos;)\" textAlign=\"right\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","edt_mstNo","value","dsRoyalty_Mst","RCMST_DATENO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cal_mstDate","value","dsRoyalty_Mst","RCMST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cb_section","value","dsBookMst","SECTION_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_bookCode","value","dsRoyalty_Mst","BOOKMST_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_bookYear","value","dsRoyalty_Mst","BOOKMST_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_bookName","value","dsRoyalty_Mst","RCMST_BOOKNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","cal_contractDate","value","dsRoyalty_Mst","RCMST_CONTRACTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","chk_permite","value","dsRoyalty_Mst","RCMST_PERMITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","medt_royaltyRate","value","dsRoyalty_Mst","RCMST_ROYALTYRATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","txa_remark","value","dsRoyalty_Mst","RCMST_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cal_publicationDate","value","dsRoyalty_Mst","RCMST_PUBLICATIONDATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ED161F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED161F.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("ED161F.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("ED161F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var gv_urlFile = nexacro.getApplication().gv_urlNext;
        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;

        var gds_userinfo = nexacro.getApplication().gds_userinfo;
        var sSection_Code = nexacro.getApplication().gds_userinfo.getColumn(0, "BUSECD");
        var sSection_Name = nexacro.getApplication().gds_userinfo.getColumn(0, "BUSENM");
        var sSection_ShortCode = nexacro.getApplication().gds_userinfo.getColumn(0, "SHORTCODE");
        var sSection_ShortName = nexacro.getApplication().gds_userinfo.getColumn(0, "SHORTNAME");
        var sSabun = nexacro.getApplication().gds_userinfo.getColumn(0, "SABUN");
        var sName = nexacro.getApplication().gds_userinfo.getColumn(0, "NAME");

        var sSelect, objGrid, nSelectCell, sGridFocus;
        var bBookRowChange = false; // 도서조회 후 onchanged 이벤트 set 설정

        this.ED161F_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", "ed_04_104");
        	sSelect = nexacro.getApplication().gds_menu.getColumn(nRow, "UM_PER_SELECT");
        	//sSelect = Eco.decode(sSelect, null, "1", sSelect);
        	sSelect = 6;
        	//권한별 그리드 셀 수정여부
        	//this.grd_dtl1.setCellProperty("body", 4, "edit", Eco.decode(sSelect, 1, "none", "expend"));
        	//this.grd_dtl2.setCellProperty("body", 4, "edit", Eco.decode(sSelect, 1, "none", "expend"));

        	strArg = "SECTION_CODE=" + sSection_Code
        		   + " COMPETENCE=" + Eco.decode(sSelect, "1", "P", "2", "P", "A");
        	this.gfn_TransactionP("search","JSP/ed/section_select2.jsp", "dsSection=dsSection", "dsSection=dsSection", strArg, "fnSectionCallback", false, "P", false, this);	//부서

        	this.dsRoyalty_Mst.addRow();

        	this.edt_bookName.setFocus();
        };

        this.fnSectionCallback = function(svcid, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(svcid + "::" + errMsg);
        	else
        		this.dsSection.rowposition = this.dsSection.findRow("SECTION_CODE", sSection_Code);
        };

        //	dsRoyalty_Mst RowInserted
        this.dsRoyalty_Mst_onrowsetchanged = function(obj,e)
        {
        	var d = new Date();
        	var today = Eco.date.getMaskFormatString(d, "yyyyMMdd");

        	if(e.reason == 12 ) //dataset이 추가되었을 때
        	{
        		this.dsRoyalty_Mst.setColumn(e.row, "RCMST_DATE" ,today);
        		this.dsRoyalty_Mst.setColumn(e.row, "SECTION_CODE", sSection_Code);
        		this.dsRoyalty_Mst.setColumn(e.row, "UI_CODE", sSabun);
        		this.dsRoyalty_Mst.setColumn(e.row, "UI_NMAE", sName);
        		this.dsRoyalty_Mst.setColumn(e.row, "RCMST_PERMITE", "0");
        		this.dsRoyalty_Mst.setColumn(e.row, "SCMST_ID", -1);

        		this.edt_mstNo.text = this.dsRoyalty_Mst.getColumn(e.row, "RCMST_DATE")
        							+ "-" + this.dsRoyalty_Mst.getColumn(e.row, "RCMST_NO");

        		this.dsRoyalty_Dtl1.clearData();
        		this.dsRoyalty_Dtl2.clearData();

        		this.dsRoyalty_Dtl1.addRow();

        		bBookRowChange = true;
        	}
        };

        //세부내역 찾기, 관리자모드 체크
        this.dsRoyalty_Mst_onrowposchanged = function(obj,e)
        {

        };

        //신규카드
        this.Div00_btn_new_onclick = function(obj,e)
        {
        	if(this.dsRoyalty_Mst.rowcount > 0)
        		this.Div00_btn_save_onclick();

        	this.dsRoyalty_Mst.clearData();
        	this.dsRoyalty_Mst.addRow();
        	this.edt_bookName.setFocus();
        };

        //내용추가
        this.Div00_btn_add_onclick = function(obj,e)
        {
        	var objGrid, objDataset;

        	if(sGridFocus == "grd_dtl2")
        	{
        		objGrid = this.objects["grid_dtl2"];
        		objDataset = this.objects["dsRoyalty_Dtl2"];
        	}
        	else
        	{
        		objGrid = this.objects["grd_dtl1"];
        		objDataset = this.objects["dsRoyalty_Dtl1"];
        	}

        	if(fn_dtl_save(objGrid, "") == true)
        	{
        		objDataset.addRow();
        	}
        };

        //가져오기 (인세계약서 찾기)
        this.Div00_btn_tempchk_onclick = function(obj,e)
        {
        	if(this.confirm("기존 작성문서가 있을 경우 먼저 저장하시겠습니까?"))
        		this.Div00_btn_save_onclick();
        	else
        	{
        		this.dsRoyalty_Mst.clearData();

        		var objParam = {p_dsSection:this.dsSection,
        						p_Select:sSelect,
        						p_sectionCode:sSection_Code};

        		this.lfn_showModal("popup", objParam, "ed::ED161_Contract_SearchF.xfdl", "popupContractCallBack", this, 10, 58, 500, 390);
        	}
        };

        //조회
        this.Div00_btn_search_onclick = function(obj,e)
        {
        	var objParam = {p_dsSection:this.dsSection,
        					p_ : this.dsRoyalty_Mst,
        					p_Select:sSelect,
        					p_sectionCode:sSection_Code};
        	this.lfn_showModal("popup", objParam, "ed::ED161_SearchF.xfdl", "popupSearchCallBack", this, 10, 58, 400, 390);
        };

        //저장
        this.Div00_btn_save_onclick = function(obj,e)
        {

        };

        //삭제
        this.Div00_btn_delete_onclick = function(obj,e)
        {

        };

        //출력
        this.Div00_btn_print_onclick = function(obj,e)
        {

        };

        //현재 Focuse 된 grid
        this.grd_dtl1_onsetfocus = function(obj,e)
        {
        	sGridFocus = obj.name;
        };

        //도서코드 찾기
        this.btn_book_onclick = function(obj,e)
        {
        	var objParam = {dsParam1:this.dsBookMst};
        	this.lfn_showModal("popupAddress", objParam, "mk::MKBook_SearchF.xfdl", "popupBookCallBack", this, 10, 58, 450, 400);
        };

        this.popupBookCallBack = function(svcId)
        {
        	var bRow = this.dsBookMst.rowposition;

        	this.edt_bookCode.set_value(this.dsBookMst.getColumn(bRow, "BOOKMST_CODE"));
        	this.edt_bookYear.set_value(this.dsBookMst.getColumn(bRow, "BOOKMST_YEAR"));
        	this.edt_bookName.set_value(this.dsBookMst.getColumn(bRow, "BOOKMST_NAME"));
        	this.dsRoyalty_Mst.setColumn(this.dsRoyalty_Mst.rowposition, "BOOKMST_ID", this.dsBookMst.getColumn(bRow, "BOOKMST_ID"));

        	this.cal_contractDate.dropdown();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ED161F_onload,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.Div00.form.btn_delete.addEventHandler("onclick",this.Div00_btn_delete_onclick,this);
            this.Div00.form.btn_save.addEventHandler("onclick",this.Div00_btn_save_onclick,this);
            this.Div00.form.btn_print.addEventHandler("onclick",this.Div00_btn_print_onclick,this);
            this.Div00.form.btn_new.addEventHandler("onclick",this.Div00_btn_new_onclick,this);
            this.Div00.form.btn_tempchk.addEventHandler("onclick",this.Div00_btn_tempchk_onclick,this);
            this.Div00.form.btn_help.addEventHandler("onclick",this.Div00_btn_tempSave_onclick,this);
            this.Div00.form.btn_add.addEventHandler("onclick",this.Div00_btn_add_onclick,this);
            this.Static00_02.addEventHandler("onclick",this.Static00_onclick,this);
            this.edt_mstNo.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.cal_mstDate.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.cb_section.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_02_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.edt_bookName.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.btn_book.addEventHandler("onclick",this.btn_book_onclick,this);
            this.edt_bookCode.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.edt_bookYear.addEventHandler("onkeydown",this.edt_bookYear_onkeydown,this);
            this.Static00_07.addEventHandler("onclick",this.Static00_onclick,this);
            this.st_taxRate.addEventHandler("onclick",this.Static00_onclick,this);
            this.cal_contractDate.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.medt_royaltyRate.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.medt_royaltyRate.addEventHandler("onchanged",this.fn_amountCalculate,this);
            this.Static00_13.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_14.addEventHandler("onclick",this.Static00_onclick,this);
            this.txa_remark.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_07_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.cal_publicationDate.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.grd_dtl1.addEventHandler("onsetfocus",this.grd_dtl1_onsetfocus,this);
            this.grd_dtl2.addEventHandler("onsetfocus",this.grd_dtl1_onsetfocus,this);
            this.dsRoyalty_Mst.addEventHandler("onrowsetchanged",this.dsRoyalty_Mst_onrowsetchanged,this);
            this.dsRoyalty_Mst.addEventHandler("onrowposchanged",this.dsRoyalty_Mst_onrowposchanged,this);
        };
        this.loadIncludeScript("ED161F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
