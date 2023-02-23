(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PD180F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1630,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPDClass", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"1\"/><Column id=\"NAME\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"NO\">0</Col><Col id=\"NAME\">일반경비</Col></Row><Row><Col id=\"NO\">1</Col><Col id=\"NAME\">정기지불</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBTMst", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"BTMST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"BTMST_NO\" type=\"STRING\" size=\"3\"/><Column id=\"BTMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BUSINESSTRIP_NO\" type=\"STRING\" size=\"12\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"BTMST_STARTDATE\" type=\"STRING\" size=\"8\"/><Column id=\"BTMST_ENDDATE\" type=\"STRING\" size=\"8\"/><Column id=\"BTMST_STARTENDDATE\" type=\"STRING\" size=\"16\"/><Column id=\"BTMST_STAY_OVERNIGHT\" type=\"INT\" size=\"2\"/><Column id=\"BTMST_STAY_DAY\" type=\"INT\" size=\"2\"/><Column id=\"BTMST_PLACE\" type=\"STRING\" size=\"100\"/><Column id=\"BTMST_CONTENTS\" type=\"STRING\" size=\"1000\"/><Column id=\"BTMST_POSTULATE\" type=\"STRING\" size=\"1000\"/><Column id=\"BTMST_DELETE\" type=\"STRING\" size=\"1\"/><Column id=\"BTMST_PERMITEDATE1\" type=\"STRING\" size=\"8\"/><Column id=\"BTMST_PERMITEUSER1\" type=\"STRING\" size=\"6\"/><Column id=\"BTMST_PERMITENAME1\" type=\"STRING\" size=\"10\"/><Column id=\"BTMST_PERMITE1\" type=\"STRING\" size=\"1\"/><Column id=\"BTMST_PERMITEDATE2\" type=\"STRING\" size=\"8\"/><Column id=\"BTMST_PERMITEUSER2\" type=\"STRING\" size=\"6\"/><Column id=\"BTMST_PERMITENAME2\" type=\"STRING\" size=\"10\"/><Column id=\"BTMST_PERMITE2\" type=\"STRING\" size=\"1\"/><Column id=\"COMPETENCE\" type=\"STRING\" size=\"1\"/><Column id=\"I_FLOW_ID\" type=\"INT\" size=\"20\"/><Column id=\"BTMST_PERMITEDATE0\" type=\"STRING\" size=\"8\"/><Column id=\"BTMST_PERMITEUSER0\" type=\"STRING\" size=\"6\"/><Column id=\"BTMST_PERMITE0\" type=\"STRING\" size=\"1\"/><Column id=\"BTMST_PAYDATE\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBTDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"BTDTL_SEQ\" type=\"STRING\" size=\"1\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"BTMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ACNTTIT_NO\" type=\"INT\" size=\"20\"/><Column id=\"BTDTL_CARD_PROVISIONAL\" type=\"DECIMAL\" size=\"13\"/><Column id=\"BTDTL_CARD_PAYAMOUNT\" type=\"DECIMAL\" size=\"13\"/><Column id=\"BTDTL_CASH_REGULATION\" type=\"DECIMAL\" size=\"13\"/><Column id=\"BTDTL_CASH_PROVISIONAL\" type=\"DECIMAL\" size=\"13\"/><Column id=\"BTDTL_CASH_PAYAMOUNT\" type=\"DECIMAL\" size=\"13\"/><Column id=\"BTDTL_CASH_OASAMOUNT\" type=\"DECIMAL\" size=\"13\"/><Column id=\"BTDTL_REMARK\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAccountTitle", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNTTIT_RN\" type=\"INT\" size=\"5\"/><Column id=\"ACNTTIT_NO\" type=\"INT\" size=\"20\"/><Column id=\"ACNTTIT_NAME\" type=\"STRING\" size=\"40\"/><Column id=\"ACNTTIT_LVL\" type=\"INT\" size=\"2\"/><Column id=\"ACNTTIT_PNO\" type=\"INT\" size=\"20\"/><Column id=\"ACNTTIT_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"ACNTTIT_REMARK\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBTMem", this);
            obj._setContents("<ColumnInfo><Column id=\"BTMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BTMEM_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"POSITION_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"POSITION_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"BT_DATE\" type=\"STRING\" size=\"21\"/><Column id=\"BTMEM_STARTDATE\" type=\"STRING\" size=\"8\"/><Column id=\"BTMEM_ENDDATE\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"BTMST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"BTMST_NO\" type=\"STRING\" size=\"2\"/><Column id=\"BUSINESSTRIP_NO\" type=\"STRING\" size=\"12\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"LEVEL_NAME\" type=\"STRING\" size=\"2\"/><Column id=\"BTMST_STARTDATE\" type=\"STRING\" size=\"8\"/><Column id=\"BTMST_ENDDATE\" type=\"STRING\" size=\"8\"/><Column id=\"BANK_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"EBA_BANK_ACCOUNT\" type=\"STRING\" size=\"50\"/><Column id=\"DAY_AMOUNT\" type=\"STRING\" size=\"100\"/><Column id=\"PAYEE\" type=\"STRING\" size=\"6\"/><Column id=\"PERMITEDATE\" type=\"STRING\" size=\"10\"/><Column id=\"BTMST_PAYDATE\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSection", this);
            obj._setContents("<ColumnInfo><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"LVL\" type=\"STRING\" size=\"1\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"3\"/><Column id=\"SECTION_SHORTNAME\" type=\"STRING\" size=\"10\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"5\"/><Column id=\"BU_GRCODE\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProof", this);
            obj._setContents("<ColumnInfo><Column id=\"PRF_CODE\" type=\"INT\" size=\"3\"/><Column id=\"PRF_NAME\" type=\"STRING\" size=\"25\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParam4", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_excel","-15","822","1746","298",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsExcel");
            obj.set_visible("false");
            obj.set_autosizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"90\"/><Column size=\"134\"/><Column size=\"130\"/><Column size=\"110\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"146\"/><Column size=\"146\"/><Column size=\"96\"/><Column size=\"156\"/><Column size=\"106\"/><Column size=\"60\"/><Column size=\"110\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"BTMST_DATE\"/><Cell col=\"1\" text=\"BTMST_NO\"/><Cell col=\"2\" text=\"BUSINESSTRIP_NO\"/><Cell col=\"3\" text=\"SECTION_NAME\"/><Cell col=\"4\" text=\"EMPLOYEE_ID\"/><Cell col=\"5\" text=\"EMPLOYEE_NAME\"/><Cell col=\"6\" text=\"LEVEL_NAME\"/><Cell col=\"7\" text=\"BTMST_STARTDATE\"/><Cell col=\"8\" text=\"BTMST_ENDDATE\"/><Cell col=\"9\" text=\"BANK_NAME\"/><Cell col=\"10\" text=\"EBA_BANK_ACCOUNT\"/><Cell col=\"11\" text=\"DAY_AMOUNT\"/><Cell col=\"12\" text=\"PAYEE\"/><Cell col=\"13\" text=\"PERMITEDATE\"/><Cell col=\"14\" text=\"BTMST_PAYDATE\"/></Band><Band id=\"body\"><Cell text=\"bind:BTMST_DATE\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:BTMST_NO\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:BUSINESSTRIP_NO\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:SECTION_NAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:EMPLOYEE_ID\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:EMPLOYEE_NAME\"/><Cell col=\"6\" text=\"bind:LEVEL_NAME\"/><Cell col=\"7\" text=\"bind:BTMST_STARTDATE\"/><Cell col=\"8\" text=\"bind:BTMST_ENDDATE\"/><Cell col=\"9\" text=\"bind:BANK_NAME\"/><Cell col=\"10\" text=\"bind:EBA_BANK_ACCOUNT\"/><Cell col=\"11\" text=\"bind:DAY_AMOUNT\"/><Cell col=\"12\" text=\"bind:PAYEE\"/><Cell col=\"13\" text=\"bind:PERMITEDATE\"/><Cell col=\"14\" text=\"bind:BTMST_PAYDATE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_main","0","0","1620","750",null,null,"920",null,"380",null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","4.75%","1.47%","30%","9.20%",null,null,"278",null,"34",null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_text("출장비 승인");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"4.8%","4.74%","4.27%","20",null,"28",null,"16",null,this.div_main.form);
            obj.set_taborder("1");
            obj.set_text("출력");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"4.8%","4.74%","4.27%","btn_print:15.89%",null,"28",null,"16",null,this.div_main.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_save1",null,"4.8%","4.74%","4.27%","btn_del:15.89%",null,"28",null,"16",null,this.div_main.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"4.8%","4.74%","4.27%","btn_save1:15.89%",null,"28",null,"16",null,this.div_main.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_mst","30","Static00:8.83%",null,"49.34%","20",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsBTMst");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"100\"/><Column size=\"105\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"190\"/><Column size=\"105\"/><Column size=\"80\"/><Column size=\"105\"/><Column size=\"80\"/><Column size=\"105\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"20\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"지급결의서번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"작성일자\"/><Cell col=\"3\" rowspan=\"2\" text=\"담당자\"/><Cell col=\"4\" rowspan=\"2\" text=\"담당부서\"/><Cell col=\"5\" rowspan=\"2\" text=\"출장기간\"/><Cell col=\"6\" colspan=\"2\" text=\"1차\"/><Cell col=\"8\" colspan=\"2\" text=\"2차\"/><Cell col=\"10\" rowspan=\"2\" text=\"지급일자\"/><Cell row=\"1\" col=\"6\" text=\"승인일자\"/><Cell row=\"1\" col=\"7\" text=\"승인자\"/><Cell row=\"1\" col=\"8\" text=\"승인일자\"/><Cell row=\"1\" col=\"9\" text=\"승인자\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:BUSINESSTRIP_NO\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:BTMST_DATE\" textAlign=\"center\" displaytype=\"date\" maskeditformat=\"####-##-##\" maskedittype=\"string\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"3\" text=\"bind:EMPLOYEE_NAME\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:SECTION_CODE\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsSection\" combodatacol=\"SECTION_NAME\" combocodecol=\"SECTION_CODE\"/><Cell col=\"5\" text=\"bind:BTMST_STARTENDDATE\" displaytype=\"mask\" maskeditformat=\"####-##-## ~ ####-##-##\" maskedittype=\"string\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:BTMST_PERMITEDATE1\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltext=\" \" calendardisplayinvalidtext=\" \" expandshow=\"expr:COMPETENCE==&quot;5&quot;?&quot;show&quot;:&quot;hide&quot;\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"7\" text=\"bind:BTMST_PERMITENAME1\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:BTMST_PERMITEDATE2\" textAlign=\"center\" displaytype=\"date\" calendardisplayinvalidtext=\" \" calendardateformat=\"yyyy-MM-dd\" expandshow=\"expr:COMPETENCE&gt;5?&quot;show&quot;:&quot;hide&quot;\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"9\" text=\"bind:BTMST_PERMITENAME2\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:BTMST_PAYDATE\" textAlign=\"center\" displaytype=\"date\" maskedittype=\"string\" maskeditformat=\"####-##\" calendardisplaynulltype=\"nulltext\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_dtl","30","grd_mst:2","53.72%","37.34%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("6");
            obj.set_binddataset("dsBTDtl");
            obj.set_cellsizingtype("col");
            obj.set_summarytype("top");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" textAlign=\"center\" text=\"구분\"/><Cell col=\"1\" colspan=\"2\" text=\"법인카드\"/><Cell col=\"3\" colspan=\"4\" text=\"현금\"/><Cell row=\"1\" col=\"1\" text=\"규정금액\"/><Cell row=\"1\" col=\"2\" text=\"실사용액\"/><Cell row=\"1\" col=\"3\" text=\"규정금액\"/><Cell row=\"1\" col=\"4\" text=\"가지급금\"/><Cell row=\"1\" col=\"5\" text=\"실사용액\"/><Cell row=\"1\" col=\"6\" text=\"과부족\"/></Band><Band id=\"body\"><Cell text=\"bind:BTDTL_SEQ\" expr=\"Eco.decode(BTDTL_SEQ, &quot;1&quot;, &quot;교통비&quot;, &quot;2&quot;, &quot;숙박비&quot;, &quot;3&quot;, &quot;식비&quot;, &quot;4&quot;, &quot;일비&quot;, &quot;기타&quot;)\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:BTDTL_CARD_PROVISIONAL\" displaytype=\"mask\" maskeditformat=\"#,##0\" edittype=\"normal\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/><Cell col=\"2\" text=\"bind:BTDTL_CARD_PAYAMOUNT\" maskeditformat=\"#,##0\" displaytype=\"mask\" edittype=\"normal\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/><Cell col=\"3\" text=\"bind:BTDTL_CASH_REGULATION\" maskeditformat=\"#,##0\" displaytype=\"mask\" edittype=\"normal\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/><Cell col=\"4\" text=\"bind:BTDTL_CASH_PROVISIONAL\" maskeditformat=\"#,##0\" displaytype=\"mask\" edittype=\"normal\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/><Cell col=\"5\" text=\"bind:BTDTL_CASH_PAYAMOUNT\" maskeditformat=\"#,##0\" displaytype=\"mask\" edittype=\"normal\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/><Cell col=\"6\" text=\"bind:BTDTL_CASH_OASAMOUNT\" maskeditformat=\"#,##0\" displaytype=\"mask\" edittype=\"normal\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/></Band><Band id=\"summary\"><Cell text=\"합계\" background=\"#0d908c\" color=\"white\"/><Cell col=\"1\" background=\"#0d908c\" color=\"white\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BTDTL_CARD_PROVISIONAL)&quot;)\" displaytype=\"mask\" textAlign=\"right\" padding=\"0px 3px 0px 0px\" maskeditformat=\"#,##0\"/><Cell col=\"2\" background=\"#0d908c\" color=\"white\" textAlign=\"right\" padding=\"0px 3px 0px 0px\" maskeditformat=\"#,##0\" displaytype=\"mask\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BTDTL_CARD_PAYAMOUNT)&quot;)\"/><Cell col=\"3\" background=\"#0d908c\" color=\"white\" textAlign=\"right\" padding=\"0px 3px 0px 0px\" maskeditformat=\"#,##0\" displaytype=\"mask\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BTDTL_CASH_REGULATION)&quot;)\"/><Cell col=\"4\" background=\"#0d908c\" color=\"white\" textAlign=\"right\" padding=\"0px 3px 0px 0px\" maskeditformat=\"#,##0\" displaytype=\"mask\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BTDTL_CASH_PROVISIONAL)&quot;)\"/><Cell col=\"5\" background=\"#0d908c\" color=\"white\" textAlign=\"right\" padding=\"0px 3px 0px 0px\" maskeditformat=\"#,##0\" displaytype=\"mask\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BTDTL_CASH_PAYAMOUNT)&quot;)\"/><Cell col=\"6\" background=\"#0d908c\" color=\"white\" textAlign=\"right\" padding=\"0px 3px 0px 0px\" maskeditformat=\"#,##0\" displaytype=\"mask\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BTDTL_CASH_OASAMOUNT)&quot;)\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Calendar("cald_00","57.12%","15.73%","17.30%","32.00%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("7");
            obj.set_type("monthonly");
            obj.set_visible("false");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_excel",null,"4.8%","5.93%","4.27%","btn_search:120%",null,"50",null,"16",null,this.div_main.form);
            obj.set_taborder("11");
            obj.set_text("EXCEL");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Calendar("cald_edate",null,"4.8%","8.28%","4.27%","btn_excel:4.05%",null,"110",null,"16",null,this.div_main.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_main.addChild(obj.name, obj);

            obj = new Calendar("cald_sdate",null,"4.8%","8.28%","4.27%","cald_edate:1%",null,"110",null,"16",null,this.div_main.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01",null,"4.8%","7.52%","4.27%","cald_sdate:1.9%",null,"62",null,"16",null,this.div_main.form);
            obj.set_taborder("8");
            obj.set_text("일비DATA");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_color("#01656f");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_mem","grd_dtl:0","grd_mst:2",null,"37.34%","20",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("12");
            obj.set_binddataset("dsBTMem");
            obj.set_cellsizingtype("col");
            obj.set_autoenter("select");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"70\"/><Column size=\"85\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"소속\"/><Cell col=\"1\" text=\"직위\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"기간\"/></Band><Band id=\"body\"><Cell text=\"bind:SECTION_NAME\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:POSITION_NAME\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:EMPLOYEE_NAME\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:BT_DATE\" textAlign=\"center\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1630,760,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PD180F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("PD180F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("PD180F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var aQryReturn = new Array();
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var gv_urlMrd = nexacro.getApplication().gv_urlMrd + "/pd/";
        var aQryReturn = new Array();
        var sSection_Code = nexacro.getApplication().gds_userinfo.getColumn(0, "BUSECD");
        var sEmployee_Name = nexacro.getApplication().gds_userinfo.getColumn(0, "NAME");
        var sSection_ShortCode = nexacro.getApplication().gds_userinfo.getColumn(0, "SHORTCODE");
        var sUserCompetence;
        var sUserCompetence1 = "1";   // 일반사용자
        var sUserCompetence2 = "2";   // 부서승인권자
        var sUserCompetence3 = "3";   // 부서장
        var sUserCompetence4 = "4";   // 일반승인권자
        var sUserCompetence5 = "5";   // 승인1차권한
        var sUserCompetence6 = "6";   // 승인2차권한
        var cald_focus = false;

        this.PD180F_onload = function(obj,e)
        {
        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", "sub7001-8");
        	sUserCompetence = nexacro.getApplication().gds_menu.getColumn(nRow, "UM_PER_USE");
        	if(sUserCompetence == null)
        		sUserCompetence = '1';
        	//sUserCompetence = "S";

        	this.gfn_TransactionP("section","JSP/ed/section_select.jsp", "dsSection=dsSection", "dsSection=dsSection", "", "fnSectionCallback", false, "P", false, this);	//부서

        	// 승인으로 초기화
        	aQryReturn[3] = 1;
        };

        this.fnSectionCallback = function(svcid, errCode, errMsg)
        {
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMddhhmmss");
        	if(svcid == "section")
        	{
        		if(errCode != 0 )
        			trace("[PD180F.fnSectionCallback(" + f_date + ")] " + svcid +"::"+ errMsg );
        		else
        		{
        			if ( sUserCompetence < sUserCompetence5 )
        				this.dsSection.filter("SECTION_CODE=='" + sSection_Code + "'");
        		}
        	}
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.lfn_showModal("search", {PDCompetence:sUserCompetence, JSPFileName:"JSP/pd/pd180f_businesstrip_mst.jsp"}, "pd::PD180_SearchF.xfdl", "fnSearchCallBack", this, 0, 0, 410, 150);
        };

        this.fnSearchCallBack = function(strID, ret)
        {
        	aQryReturn = ret.split("^");
        }

        this.btn_save1_onclick = function(obj,e)
        {
        	var strUrl = "JSP/pd/pd140f_businesstrip_mst_dml.jsp";
        	var inDs = "input=dsBTMst:u";

        	this.gfn_TransactionP("save", strUrl, inDs, "", "", "fnCallback", false, "P", false, this);
        };

        this.grd_mst_oncellclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		if((sUserCompetence == sUserCompetence5) && (this.dsBTMst.getColumn(e.row, "BTMST_PERMITE2") == "0")) // 권한 확인
        		{
        			if(this.dsBTMst.getColumn(e.row, "CHK") != '1' ) // 승인 <->미승인 토글
        			{
        				this.dsBTMst.setColumn(e.row, "BTMST_PERMITEDATE1", null);
        				this.dsBTMst.setColumn(e.row, "BTMST_PERMITEUSER1", null);
        				this.dsBTMst.setColumn(e.row, "BTMST_PERMITENAME1", null);
        				this.dsBTMst.setColumn(e.row, "BTMST_PAYDATE", null);
        			}
        			else
        			{
        				var objDate = new nexacro.Date();
        				var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMdd");
        				this.dsBTMst.setColumn(e.row, "BTMST_PERMITEDATE1", f_date);
        				this.dsBTMst.setColumn(e.row, "BTMST_PERMITEUSER1", gv_sabun);
        				this.dsBTMst.setColumn(e.row, "BTMST_PERMITENAME1", sEmployee_Name);
        				this.dsBTMst.setColumn(e.row, "BTMST_PAYDATE", f_date);
        			}
        		}
        		if((sUserCompetence > sUserCompetence5) && (this.dsBTMst.getColumn(e.row, "BTMST_PERMITE1") == "1")) // 권한 확인
        		{
        			if(this.dsBTMst.getColumn(e.row, "CHK") != '1') // 승인 <->미승인 토글
        			{
        				this.dsBTMst.setColumn(e.row, "BTMST_PERMITEDATE2", null);
        				this.dsBTMst.setColumn(e.row, "BTMST_PERMITEUSER2", null);
        				this.dsBTMst.setColumn(e.row, "BTMST_PERMITENAME2", null);
        				this.dsBTMst.setColumn(e.row, "BTMST_PAYDATE", null);
        			}
        			else
        			{
        				var objDate = new nexacro.Date();
        				var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMdd");
        				this.dsBTMst.setColumn(e.row, "BTMST_PERMITEDATE2", f_date);
        				this.dsBTMst.setColumn(e.row, "BTMST_PERMITEUSER2", gv_sabun);
        				this.dsBTMst.setColumn(e.row, "BTMST_PERMITENAME2", sEmployee_Name);
        				this.dsBTMst.setColumn(e.row, "BTMST_PAYDATE", f_date);
        			}
        		}
        	}
        };

        this.btn_del_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	if(msg_result = objApp.confirm( "삭제하시겠습니까?" , "삭제", "warning" ))
            {
        		this.dsBTMst.deleteRow(this.dsBTMst.rowposition);
        		this.fnMstSave();

        		this.dsBTMst.clearData();
            }
        };

        this.fnMstSave = function()
        {
        	var inDs = "input=dsBTMst:u";

        	for(var nRow; nRow <= this.dsBTMst.rowcount -1; nRow ++)
        	{
        		if((sUserCompetence == sUserCompetence5) && (this.dsBTMst.getColumn(nRow, "BTMST_PERMITE2") == "0") && (this.dsBTMst.getColumn(nRow, "CHK") == "1"))
        		{
        			if(aQryReturn[3] == 1) // 승인 <->미승인 토글
        			{
        				this.dsBTMst.setColumn(nRow, "BTMST_PERMITEDATE1", null);
        				this.dsBTMst.setColumn(nRow, "BTMST_PERMITEUSER1", null);
        			}
        			else if(aQryReturn[3] == 0)
        			{
        				var objDate = new nexacro.Date();
        				var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMdd");
        				this.dsBTMst.setColumn(nRow, "BTMST_PERMITEDATE1", f_date);
        				this.dsBTMst.setColumn(nRow, "BTMST_PERMITEUSER1", gv_sabun);
        			}
        		}
        		if((sUserCompetence > sUserCompetence5) && (this.dsBTMst.getColumn(e.row, "BTMST_PERMITE1") == "1") && (this.dsBTMst.getColumn(nRow, "CHK") == "1"))
        		{
        			if(aQryReturn[3] == 1) // 승인 <->미승인 토글
        			{
        				this.dsBTMst.setColumn(nRow, "BTMST_PERMITEDATE2", null);
        				this.dsBTMst.setColumn(nRow, "BTMST_PERMITEUSER2", null);
        			}
        			else if(aQryReturn[3] == 0)
        			{
        				var objDate = new nexacro.Date();
        				var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMdd");
        				this.dsBTMst.setColumn(nRow, "BTMST_PERMITEDATE2", f_date);
        				this.dsBTMst.setColumn(nRow, "BTMST_PERMITEUSER2", gv_sabun);
        			}
        		}
        	}
        	var strUrl = "JSP/pd/pd140f_businesstrip_mst_dml.jsp";
        	this.gfn_TransactionP("update", strUrl, inDs, "", "", "fnMstSaveCallback", false, "P", false, this);
        }

        this.fnMstSaveCallback = function(svcid, errCode, errMsg)
        {
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMdd");
        	if (svcid == "update")
        	{
        	    if(errCode != 0 )
        	    {
        			trace("[PD180F.fctn_MstSaveCallback(" + f_date + ")] " + svcid +"::"+ errMsg );
        	    }
        	    else
        	    {
        			var strUrl = "JSP/pd/pd180f_businesstrip_mst.jsp"
        			var strArg = "";
        			var strDs  = "dsBTMst=dsBTMst";

        			strArg 	= "BTMST_SDATE=" + nexacro.wrapQuote( aQryReturn[0] ) +
        					  " BTMST_EDATE=" + nexacro.wrapQuote( aQryReturn[1] ) +
        					  " SECTION_CODE=" + nexacro.wrapQuote( aQryReturn[2] ) +
        					  " BTMST_PERMITE=" + nexacro.wrapQuote( aQryReturn[3] ) +
        					  " COMPETENCE=" + nexacro.wrapQuote( sUserCompetence );
        			//trace(strArg);
        			this.gfn_TransactionP("search", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        	    }
        	}
        	else if(errCode != 0 )
        	{
        		trace("[PD180F.fctn_MstSaveCallback(" + f_date + ")] " + svcid +"::"+ errMsg );
        	}
        }

        this.btn_print_onclick = function(obj,e)
        {
        	if(this.dsBTMst.rowcount > 0)
        	{
        		var strArg, sOU;
        		var objApp = nexacro.getApplication();
        		if(msg_result = objApp.confirm( " 출장 복명서 및 지결서 결재 원본을 출력 하시겠습니까? " , "출력", "question" ))
        		{
        			alert(" 선택된 하나의 지결서만 조회가 가능합니다. ");

        			this.dsParam4.setColumn(0, "GUBUN", "01");
        			this.dsParam4.setColumn(0, "I_FLOW_ID", this.dsBTMst.getColumn(this.dsBTMst.rowposition, "I_FLOW_ID"));

        			strArg = {dsParam1:this.dsBTMst.getColumn(this.dsBTMst.rowposition, "I_FLOW_ID"),
        			dsParam4:this.dsParam4};

        			this.lfn_showModal("popupElecDoc", strArg, "gw::GW130.xfdl", "popupCallBack", this, 10, 58, 1300, 720);
        		}
        		else
        		{
        			rdParam = "/rp ["+aQryReturn[0]+"] ["+aQryReturn[1]+"] [";
        			if(aQryReturn[3] == 1) rdParam += "1" + "] [";
        			else rdParam += "" + "] [";
        			if(sUserCompetence == "3") rdParam += "" + "] [";
        			else rdParam += "1" + "] []";

        			strArg = {rdUrl:gv_urlMrd+"PD180.mrd", rdParam:rdParam};

        			var rect;
        			if(system.navigatorname == 'nexacro')
        			{
        				if(system.monitorcount > 1)
        				{
        					var monitor_index = system.getMonitorIndex(system.clientToScreenX(this,0), system.clientToScreenY(this,0));
        					rect = system.getScreenRect(monitor_index);
        				}
        				else
        					rect = system.getScreenRect(1);
        			}
        			else
        				rect = system.getScreenRect(1);

        			var sOpenStyle = "topmost=true autosize=false dragmovetype=all titletext=조회화면 showtitlebar=true showstatusbar=false resizable=true";

        			nexacro.open("popupElecDoc", "mk::MKRDF.xfdl", this.getOwnerFrame(), strArg, sOpenStyle, rect.left, rect.top, rect.width, rect.height, this);
        		}
        	}
        	else
        		alert("조회된 항목이 없습니다.");
        };

        this.div_main_btn_excel_onclick = function(obj,e)
        {
        	var strUrl, strDs, strArg;

        	strUrl = "JSP/pd/pd140f_businesstrip_excel.jsp";
        	strDs = "dsExcel=dsExcel";
        	strArg = "S_DATE=" + nexacro.wrapQuote( this.div_main.form.cald_sdate.value) +
        			  " E_DATE=" + nexacro.wrapQuote( this.div_main.form.cald_edate.value ) ;
        	this.gfn_TransactionP("excel_select", strUrl, strDs, strDs, strArg, "fnCallBackSelectExcel", false, "P", false, this);
        };

        this.fnCallBackSelectExcel = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		alert(ErrorMsg);
        		return;
        	}
        	else{
        		if ( this.dsExcel.rowcount <= 0){
        			alert("변환가능한 리스트가 없습니다.");
        			return;
        		}
        		this.exportObj = new ExcelExportObject();
        		this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_excel, "Sheet1!A1");
        		this.exportObj.set_exportfilename( this.div_main.form.cald_sdate.value + " - " + this.div_main.form.cald_edate.value);
        		this.exportObj.set_exporturl(gv_urlXeni);
        		this.exportObj.exportData();
        	}
        }

        this.dsBTMst_onload = function(obj,e)
        {
        	if(e.reason == 0)
        		this.dsBTMst_onrowposchanged(obj,nexacro.DSRowPosChangeEventInfo);
        };

        this.dsBTMst_onrowposchanged = function(obj,e)
        {
        	if (this.dsBTMst.rowcount != 0)
        	{
        		if (this.dsBTMst.getRowType(e.newrow) != "2")
        		{
        			var strArg 	= "BTMST_ID=" + nexacro.wrapQuote( this.dsBTMst.getColumn(e.newrow, "BTMST_ID"));

        			this.gfn_TransactionP("search","JSP/pd/pd140f_businesstrip_dtl.jsp", "dsBTDtl=dsBTDtl", "dsBTDtl=dsBTDtl", strArg, "fnCallback", false, "P", false, this);
        			this.gfn_TransactionP("search","JSP/pd/pd140f_businesstrip_mem.jsp", "dsBTMem=dsBTMem", "dsBTMem=dsBTMem", strArg, "fnCallback", false, "P", false, this);
        		}
        	}
        };

        this.cald_00_onmouseenter = function(obj,e)
        {
        	cald_focus = true;
        };

        this.cald_00_onmouseleave = function(obj,e)
        {
        	if(cald_focus == true)
        	{
        		this.div_main.form.cald_00.set_visible(false);
        		cald_focus = false;
        	}
        };

        this.div_main_cald_00_onkeydown = function(obj,e)
        {
        	if (e.keycode == 27)
        		obj.set_visible(false);  // 달력을 안보이게 합니다.
        };

        this.cald_00_ondayclick = function(obj,e)
        {
        	if (sUserCompetence == sUserCompetence5)
        		this.dsBTMst.setColumn(this.dsBTMst.rowposition, "BTMST_PERMITEDATE1", e.date); //날짜를 선택
        	else if (sUserCompetence > sUserCompetence5)
        		this.dsBTMst.setColumn(this.dsBTMst.rowposition, "BTMST_PERMITEDATE2", e.date); //날짜를 선택

        	this.div_main.form.grd_mst.moveToNextCell(); //그리드 셀 이동
        	obj.set_visible(false);  // 달력을 안보이게 합니다.
        };

        this.grd_mst_onexpanddown = function(obj,e)
        {
        	var rect = obj.getCellRect(e.row, e.cell);

        	var top = nexacro.toNumber(obj.top) + nexacro.toNumber(rect.top) + 18; //소스 중에서 달력이 표현될 위치를 지정합니다. Top
        	var right = nexacro.toNumber(rect.right) - 100; //소스 중에서 달력이 표현될 위치를 지정합니다.

        	this.div_main.form.cald_00.set_top(top);
        	this.div_main.form.cald_00.set_left(right);
        	this.div_main.form.cald_00.set_visible(true);
        };

        this.grd_mst_onheadclick = function(obj,e)
        {
        	if (e.cell == 0)
        	{
        		for(var nRow = 0; nRow <= this.dsBTMst.rowcount -1; nRow ++ )
        		{
        			if (this.dsBTMst.getColumn(nRow, "CHK") == "1")
        				this.dsBTMst.setColumn(nRow, "CHK", "0");
        			else
        				this.dsBTMst.setColumn(nRow, "CHK", "1");
        			e.row = nRow;
        			this.grd_mst_oncellclick(obj,e);
        		}
        	}
        };

        this.fnCallback = function(svcid, errCode, errMsg)
        {
        	if(errCode != 0)
        	{
        		var objDate = new nexacro.Date();
        		var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMddhhmmss");
        		if(svcid == "search")
        		{
        			trace("[PD180F.fnCallBack(" + f_date + ")] " + svcid +"::"+ errMsg );
        		}
        		else if(svcid == "save")
        		{
        			trace("[PD180F.fnCallBack(" + f_date + ")] " + svcid +"::"+ errMsg );
        			alert( "전산실로 문의 바랍니다." + "   " +  svcid +"::"+ errMsg );
        		}
        		return;
        	}
        }

        // 세부사항 저장 및 동행자 저장은 쓰이지 않음 (btn_save, 승인버튼) dsBTDtl 및 dsBTMem 바인딩 그리드의 edit도 없음

        this.LocalFn_OnKeyDown = function(obj,e)
        {
        	if (e.keycode == 13)
        	{
        		var curObj = this.getFocus();
        		var objCom;
        		if(curObj.parent.parent == "[object Div]")
        			objCom = curObj.parent.parent.form.getNextComponent(this.getFocus(),true);
        		else
        			objCom = this.getNextComponent(this.getFocus(),true);

        		objCom.setFocus();
        		if(objCom == "[object Calendar]" || objCom == "[object Combo]" )
        			objCom.dropdown();
        	}
        };

        this.PD180F_onsize = function(obj,e)
        {
        	this.div_main.set_width(this.width - 10)
        	this.div_main.set_height(this.height - 10)

        	if(this.height < 480)
        		this.div_main.form.Static00.set_font('bold 32px/normal "함초롬바탕 확장B"');
        	else
        		this.div_main.form.Static00.set_font('bold 40px/normal "함초롬바탕 확장B"');
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PD180F_onload,this);
            this.addEventHandler("onsize",this.PD180F_onsize,this);
            this.div_main.form.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
            this.div_main.form.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.div_main.form.btn_save1.addEventHandler("onclick",this.btn_save1_onclick,this);
            this.div_main.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_main.form.grd_mst.addEventHandler("oncellclick",this.grd_mst_oncellclick,this);
            this.div_main.form.grd_mst.addEventHandler("onexpanddown",this.grd_mst_onexpanddown,this);
            this.div_main.form.grd_mst.addEventHandler("onheadclick",this.grd_mst_onheadclick,this);
            this.div_main.form.grd_dtl.addEventHandler("onenterdown",this.grd_dtl_onenterdown,this);
            this.div_main.form.cald_00.addEventHandler("onmouseleave",this.cald_00_onmouseleave,this);
            this.div_main.form.cald_00.addEventHandler("onmouseenter",this.cald_00_onmouseenter,this);
            this.div_main.form.cald_00.addEventHandler("ondayclick",this.cald_00_ondayclick,this);
            this.div_main.form.cald_00.addEventHandler("onkeydown",this.div_main_cald_00_onkeydown,this);
            this.div_main.form.btn_excel.addEventHandler("onclick",this.div_main_btn_excel_onclick,this);
            this.div_main.form.cald_edate.addEventHandler("onkeydown",this.LocalFn_OnKeyDown,this);
            this.div_main.form.cald_sdate.addEventHandler("onkeydown",this.LocalFn_OnKeyDown,this);
            this.div_main.form.grd_mem.addEventHandler("onenterdown",this.grd_dtl_onenterdown,this);
            this.dsBTMst.addEventHandler("onrowposchanged",this.dsBTMst_onrowposchanged,this);
            this.dsBTMst.addEventHandler("onload",this.dsBTMst_onload,this);
        };
        this.loadIncludeScript("PD180F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
