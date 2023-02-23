(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD6250F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1600,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmb_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">〓  (같다)</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">&gt;   (크다)</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\"> &lt;  (작다)</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">&gt;=  (같거나크다)</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\"> &lt;= (같거나작다)</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">%% (나열)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb_orderby", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">거래처별</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">번호별</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">중분류별</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">년판</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">시리즈명</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">도서구분</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"NAME\">OLD번호</Col></Row><Row><Col id=\"CODE\">7</Col><Col id=\"NAME\">시행일</Col></Row><Row><Col id=\"CODE\">8</Col><Col id=\"NAME\">도서명</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gbook", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SYMD\" type=\"STRING\" size=\"256\"/><Column id=\"EYMD\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JONG\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BYUL\" type=\"STRING\" size=\"256\"/><Column id=\"BCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SWCD\" type=\"STRING\" size=\"256\"/><Column id=\"UPYMD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gbook_send", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SYMD\" type=\"STRING\" size=\"256\"/><Column id=\"EYMD\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JONG\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BYUL\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SWCD\" type=\"STRING\" size=\"256\"/><Column id=\"UPYMD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"O_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ROWTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","56","11","540","69",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("반품규제(시리즈)도서 등록");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_13","25","174","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("코드");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_05","25","140","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("시작일자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_07","27.94%","140","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("종료일자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_15","Static01_07:-2","174","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("도서명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_14","Static01_13:-2","174",null,"36","Static01_15:-2",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sbookcode",null,"184","20","20","Static01_15:8",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values8",null,"179","Static01_14:27.44%","26","btn_sbookcode:2",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values7","Static01_13:10","179",null,"26","ed_values8:3",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@@@@@@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","25","72",null,"36","25",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("등록");
            obj.set_background("#3cbcb8");
            obj.set_color("white");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","25","217",null,"36","25",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("조회");
            obj.set_background("#3cbcb8");
            obj.set_color("white");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","25","319",null,null,"25","10",null,null,"100",null,this);
            obj.set_taborder("26");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_08","62.75%","285","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("정렬조건");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_06","62.75%","251","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("조건");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_10",null,"251","113","70","25",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_07","Static02_06:-2","251",null,"36","Static02_10:-2",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_09","Static02_08:-2","285",null,"36","Static02_10:-2",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_view","37","Static02_08:10",null,null,"42","24",null,null,"80",null,this);
            obj.set_taborder("16");
            obj.set_binddataset("ds_gbook");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"40\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"시작일자\"/><Cell col=\"2\" text=\"종료일자\"/><Cell col=\"3\" text=\"시리즈명\"/><Cell col=\"4\" text=\"종수\"/><Cell col=\"5\" text=\"도서\"/><Cell col=\"6\" text=\"년도\"/><Cell col=\"7\" text=\"규제율\"/><Cell col=\"8\" text=\"도서명\"/><Cell col=\"9\" text=\"등록자\"/><Cell col=\"10\" text=\"등록시간\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:SYMD\" displaytype=\"mask\" textAlign=\"center\" maskeditmaskchar=\" \" maskeditformat=\"####-##-##\" maskedittype=\"string\"/><Cell col=\"2\" text=\"bind:EYMD\" displaytype=\"mask\" textAlign=\"center\" maskeditformat=\"####-##-##\" maskeditmaskchar=\" \" maskedittype=\"string\"/><Cell col=\"3\" text=\"bind:BOOK_NM\"/><Cell col=\"4\" text=\"bind:JONG\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:BOOK_CD\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:BYY\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:BYUL\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:BOOK_NAME\"/><Cell col=\"9\" text=\"bind:SWCD\"/><Cell col=\"10\" text=\"bind:UPYMD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"260","95","51","33",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("조회하기");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_search1","Static02_06:10","256",null,"26","Static02_10:10",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_cmb_search");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text(">=  (같거나크다)");
            obj.set_value("3");
            obj.set_index("3");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_orderby","Static02_08:10","290",null,"26","Static02_10:10",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_innerdataset("ds_cmb_orderby");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("전표일자순");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"26","75","31","25",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("출력");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_can",null,"26","75","31","btn_print:12",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("취소");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"26","75","31","btn_can:12",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("삭제");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"26","75","31","btn_del:12",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("저장");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_16","Static01_15:-2","174",null,"36","25",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values9","Static01_15:10","179",null,"26","35",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02","11%","251","14.88%","70",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","11%","251","14.88%","36",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("시작일자");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_03","Static02_02:-2","251","14.88%","70",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_04","Static02_03:-2","251","13.88%","70",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_05","Static02_04:-2","251",null,"70","Static02_08:-2",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","25","106","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("코드");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03","Static01_07:-2","106","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("시리즈명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","Static01_01:-2","106",null,"36","Static01_03:-2",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04","Static01_03:-2","106",null,"36","25",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values2","Static01_03:10","111",null,"26","35",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values1","Static01_01:10","111",null,"26","Static01_03:10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@@@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","25","251",null,"70","Static02_02:-2",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_02_00","25","251",null,"36","Static03_00_00_00:-2",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("코드");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_06","Static01_05:-2","140",null,"36","Static01_07:-2",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_00","Static03_00_00_00:-2","251","14.88%","36",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("종료일자");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_00_00","Static03_00_00_00_00:-2","251","13.88%","36",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("도서코드");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_01_00","Static03_00_00_00_00_00:-2","251",null,"36","Static02_06:-2",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("년판");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_09","54.31%","140","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("규제율");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_08","Static01_07:-2","140",null,"36","Static01_09:-2",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_11","76.31%","140","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("종수");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_10","Static01_09:-2","140",null,"36","Static01_11:-2",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_12","Static01_11:-2","140",null,"36","25",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values5","Static01_09:10","145",null,"26","Static01_11:10",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values6","Static01_11:10","145",null,"26","35",null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_s_values1","33","289",null,"26","Static02_02:7",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@@@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_s_values5","Static02_04:7","289",null,"26","Static02_08:7",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_s_values4","Static02_03:7","289",null,"26","Static02_05:7",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@@@@@@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_s_values2","Static02_01:7","289",null,"26","Static02_03:7",null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_s_values3","Static02_02:7","289",null,"26","Static02_04:7",null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Edit("M_user","1001","39",null,"26","391",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_visible("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values3","Static01_05:10","145",null,"26","Static01_07:10",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_maskchar(" ");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####-##-##");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values4","Static01_07:10","145",null,"26","Static01_09:10",null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_maskchar(" ");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####-##-##");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1600,760,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD6280F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD6280F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD6280F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var NewRowNum    = "";					// 추가행번호.
        var EditnRow	 = -1;					//수정된 행번호
        var Error        = "";					//에러코드.
        var return_code  = "";
        var return_code2 = "";
        var o_code       = "";
        var user_id = "";
        user_id = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        //기존 Miplatform 에서는 계정id의 앞 6자리까지 사용, nexacro에는 id 저장하지 않으므로 사번으로 일단 대체

        this.SD6280F_onload = function(obj,e)
        {
        	this.cmb_search1.set_index(3);
        	this.cmb_orderby.set_index(0);
        	this.fnDataclear();
        	this.ed_s_values1.set_value("");
        	this.ed_s_values2.set_value("");
        	this.ed_s_values3.set_value("");
        	this.ed_s_values4.set_value("");
        	this.ed_s_values5.set_value("");
        	this.ed_values1.setFocus();
        };

        this.fnSearch_zipcode = function()
        {
        	var strUrl = "JSP/sd/select_gbook.jsp";
        	var strDs  = "ds_gbook=ds_gbook";
        	var strArg;
        	strArg = " Values1="+nexacro.wrapQuote(nexacro.trim(this.ed_s_values1.value))+
        			 " Values2="+nexacro.wrapQuote(nexacro.trim(this.ed_s_values2.value))+
        			 " Values3="+nexacro.wrapQuote(nexacro.trim(this.ed_s_values3.value))+
        			 " Values4="+nexacro.wrapQuote(nexacro.trim(this.ed_s_values4.value))+
        			 " Values5="+nexacro.wrapQuote(nexacro.trim(this.ed_s_values5.value))+
        			 " Option ="+nexacro.wrapQuote(this.cmb_search1.index)+
        			 " Orderby="+nexacro.wrapQuote(this.cmb_orderby.index);
        	this.gfn_TransactionP("codesearch", strUrl, strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        }

        this.fnCallback = function(strSvcID, nErrorCode, strErrorMag)
        {
        	if(nErrorCode != 0)
        	{
        		alert(strErrorMag);
        		return;
        	}
        }

        this.fnDataclear = function()
        {
            NewRowNum       = "";
            EditnRow	    = -1;
        	this.ed_values1.set_value("");
        	this.ed_values2.set_value("");
        	this.ed_values3.set_value("");
        	this.ed_values4.set_value("");
        	this.ed_values5.set_value("");
        	this.ed_values6.set_value("");
        	this.ed_values7.set_value("");
        	this.ed_values8.set_value("");
        	this.ed_values9.set_value("");
        	this.M_user.set_value(user_id);
        	o_code			= "";
        }

        //입력모드
        this.fnInputdata = function()
        {
        	this.ds_gbook.setColumn(NewRowNum,"CODE",  nexacro.trim(this.ed_values1.value));
        	this.ds_gbook.setColumn(NewRowNum,"SYMD",  nexacro.trim(this.ed_values3.value));
        	this.ds_gbook.setColumn(NewRowNum,"EYMD",  nexacro.trim(this.ed_values4.value));
        	this.ds_gbook.setColumn(NewRowNum,"BOOK_NM",nexacro.trim(this.ed_values2.text));
        	this.ds_gbook.setColumn(NewRowNum,"JONG",	 nexacro.trim(this.ed_values6.text));
        	this.ds_gbook.setColumn(NewRowNum,"BOOK_CD",nexacro.trim(this.ed_values7.value));
        	this.ds_gbook.setColumn(NewRowNum,"BYY",	 nexacro.trim(this.ed_values8.value));
        	this.ds_gbook.setColumn(NewRowNum,"BYUL",	 nexacro.trim(this.ed_values5.text));
        	this.ds_gbook.setColumn(NewRowNum,"BOOK_NAME",nexacro.trim(this.ed_values9.text));
        	this.ds_gbook.setColumn(NewRowNum,"SWCD",     nexacro.trim(this.M_user.text));

        	if (this.ed_values3.value=="") this.ds_gbook.setColumn(NewRowNum,"SYMD","00000000");
        	if (this.ed_values4.value=="") this.ds_gbook.setColumn(NewRowNum,"EYMD","99999999");
        	if (this.ed_values2.value=="") this.ds_gbook.setColumn(NewRowNum,"BOOK_NM"," ");
        	if (this.ed_values7.value=="") this.ds_gbook.setColumn(NewRowNum,"BOOK_CD","0000000000");
        	if (this.ed_values8.value=="") this.ds_gbook.setColumn(NewRowNum,"BYY","0000");

        	this.ds_gbook_send.addRow();
        	this.ds_gbook_send.copyRow(0, this.ds_gbook, NewRowNum);
        	this.ds_gbook_send.setColumn(0,"O_CODE", this.ed_values1.value);
        	this.ds_gbook_send.setColumn(0,"ROWTYPE", "I" );
        }

        //수정모드
        this.fnEdit_data = function()
        {
        	this.ds_gbook.setColumn(EditnRow,"CODE",  nexacro.trim(this.ed_values1.value));
        	this.ds_gbook.setColumn(EditnRow,"SYMD",  nexacro.trim(this.ed_values3.value));
        	this.ds_gbook.setColumn(EditnRow,"EYMD",  nexacro.trim(this.ed_values4.value));
        	this.ds_gbook.setColumn(EditnRow,"BOOK_NM",nexacro.trim(this.ed_values2.text));
        	this.ds_gbook.setColumn(EditnRow,"JONG",	 nexacro.trim(this.ed_values6.text));
        	this.ds_gbook.setColumn(EditnRow,"BOOK_CD",nexacro.trim(this.ed_values7.value));
        	this.ds_gbook.setColumn(EditnRow,"BYY",	 nexacro.trim(this.ed_values8.value));
        	this.ds_gbook.setColumn(EditnRow,"BYUL",	 nexacro.trim(this.ed_values5.text));
        	this.ds_gbook.setColumn(EditnRow,"BOOK_NAME",nexacro.trim(this.ed_values9.text));
        	this.ds_gbook.setColumn(EditnRow,"SWCD",     nexacro.trim(this.M_user.text));

        	if (this.ed_values3.value=="") this.ds_gbook.setColumn(EditnRow,"SYMD","00000000");
        	if (this.ed_values4.value=="") this.ds_gbook.setColumn(EditnRow,"EYMD","99999999");
        	if (this.ed_values2.value=="") this.ds_gbook.setColumn(EditnRow,"BOOK_NM"," ");
        	if (this.ed_values7.value=="") this.ds_gbook.setColumn(EditnRow,"BOOK_CD","0000000000");
        	if (this.ed_values8.value=="") this.ds_gbook.setColumn(EditnRow,"BYY","0000");

        	this.ds_gbook_send.addRow();
        	this.ds_gbook_send.copyRow(0, this.ds_gbook, EditnRow);
        	this.ds_gbook_send.setColumn(0,"O_CODE", o_code);
        	this.ds_gbook_send.setColumn(0,"ROWTYPE", "U" );
        	this.grd_view.updateToDataset();
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.fnSearch_zipcode();
        	NewRowNum = "";
        };

        this.grd_view_oncelldblclick = function(obj,e)
        {
        	EditnRow = e.row;
        	this.ed_values1.set_value(this.ds_gbook.getColumn(e.row,"CODE"));
        	this.ed_values2.set_value(this.ds_gbook.getColumn(e.row,"BOOK_NM"));
        	this.ed_values3.set_value(this.ds_gbook.getColumn(e.row,"SYMD"));
        	this.ed_values4.set_value(this.ds_gbook.getColumn(e.row,"EYMD"));
        	this.ed_values5.set_value(this.ds_gbook.getColumn(e.row,"BYUL"));
        	this.ed_values6.set_value(this.ds_gbook.getColumn(e.row,"JONG"));
        	this.ed_values7.set_value(this.ds_gbook.getColumn(e.row,"BOOK_CD"));
        	this.ed_values8.set_value(this.ds_gbook.getColumn(e.row,"BYY"));
        	this.ed_values9.set_value(this.ds_gbook.getColumn(e.row,"BOOK_NAME"));
        	this.M_user.set_value(this.ds_gbook.getColumn(e.row,"SWCD"));
        	o_code           = this.ds_gbook.getColumn(e.row,"CODE");
        };

        this.btn_save_onclick = function(obj,e)
        {
        	var strUrl = "JSP/sd/insert_gbook.jsp";
        	var inDs 	= "ds_gbook_send=ds_gbook_send";

        	if ((nexacro.trim(this.ed_values1.value)).length != 7)
        	{
        		alert("코드 오류! 수정하세요!");
        		return;
        	}
        	if ((nexacro.trim(this.ed_values7.value)).length != 10)
        	{
        		alert("도서코드 오류! 수정하세요!");
        		return;
        	}
        	if ((nexacro.trim(this.ed_values8.value)).length != 4)
        	{
        		alert("년판 오류! 수정하세요!");
        		return;
        	}
        	if (EditnRow != -1)
        	{
        		var objApp = nexacro.getApplication();
        		if(msg_result = objApp.confirm( "결제된 자료만 수정하세요.\n 자료보관 " , "수정처리", "warning" ))
        			this.fnEdit_data();
        		else
        			return
        	}
        	else
        	{
        		NewRowNum = this.ds_gbook.addRow();
        		this.fnInputdata();
        	}
        	this.gfn_TransactionP("insert", strUrl, inDs, "", "", "fnTr_Callback", false, "P", false, this);
        };

        this.fnTr_Callback = function(strSvcID, nErrorCode, strErrorMag)
        {
        	if ( strSvcID == "insert" )
        	{
        		if (strErrorMag == "DUP")
        		{
        			alert("코드가 중복되었습니다. \n 재검색후 저장해주세요.");
        			this.btn_search.click();
        		}
        		else
        		{
                 	if ( EditnRow != -1 )
                    	this.fnDataclear();
        			this.ds_gbook_send.deleteRow(0);
                	this.ed_values1.setFocus();
        		}
        	}
        	if ( strSvcID == "delete" )
        	{
        		if (strErrorMag=="Dup")
        		{
        			alert("삭제 Error.");
        		}
        		else
        		{
        			this.ds_gbook.deleteRow(EditnRow);
                 	this.fnDataclear();
                	this.ed_values1.setFocus();
        		}
        	}
        	else if ( strSvcID == "book_name" )
        	{
        		if(nErrorCode == 0 && strErrorMag.length == 0)
        			alert ("미등록 데이터");
        		else
        			this.ed_values9.set_value(strErrorMag);
        	}
        }

        this.btn_can_onclick = function(obj,e)
        {
        	EditnRow = -1;
        	this.fnDataclear();
        	this.ed_values1.setFocus();
        };

        this.btn_del_onclick = function(obj,e)
        {
        	var strUrl = "JSP/sd/insert_gbook.jsp";
        	var inDs 	= "ds_gbook_send=ds_gbook_send";
        	var objApp = nexacro.getApplication();
        	if(msg_result = objApp.confirm( "결제된 자료만 삭제하세요.\n 정말 삭제하시겠습니까? " , "삭제처리", "warning" ))
        	{
        		this.ds_gbook.setColumn(EditnRow,"CODE",  nexacro.trim(this.ed_values1.value));
        		this.ds_gbook.setColumn(EditnRow,"SYMD",  nexacro.trim(this.ed_values3.value));
        		this.ds_gbook.setColumn(EditnRow,"EYMD",  nexacro.trim(this.ed_values4.value));
        		this.ds_gbook.setColumn(EditnRow,"BOOK_NM",nexacro.trim(this.ed_values2.text));
        		this.ds_gbook.setColumn(EditnRow,"JONG",	 nexacro.trim(this.ed_values6.text));
        		this.ds_gbook.setColumn(EditnRow,"BOOK_CD",nexacro.trim(this.ed_values7.value));
        		this.ds_gbook.setColumn(EditnRow,"BYY",	 nexacro.trim(this.ed_values8.value));
        		this.ds_gbook.setColumn(EditnRow,"BYUL",	 nexacro.trim(this.ed_values5.text));
        		this.ds_gbook.setColumn(EditnRow,"BOOK_NAME",nexacro.trim(this.ed_values9.text));
        		 this.ds_gbook.setColumn(EditnRow,"SWCD",     nexacro.trim(this.M_user.text));
        		if (this.ed_values3.value=="") this.ds_gbook.setColumn(EditnRow,"SYMD","00000000");
        		if (this.ed_values4.value=="") this.ds_gbook.setColumn(EditnRow,"EYMD","99999999");
        		if (this.ed_values2.value=="") this.ds_gbook.setColumn(EditnRow,"BOOK_NM"," ");
        		if (this.ed_values7.value=="") this.ds_gbook.setColumn(EditnRow,"BOOK_CD","0000000000");
        		if (this.ed_values8.value=="") this.ds_gbook.setColumn(EditnRow,"BYY","0000");

        		this.ds_gbook_send.addRow();
        		this.ds_gbook_send.copyRow(0, this.ds_gbook, EditnRow);
        		this.ds_gbook_send.setColumn(0,"O_CODE", o_code);
        		this.ds_gbook_send.setColumn(0,"ROWTYPE", "D" );

        		this.gfn_TransactionP("delete", strUrl, inDs, "", "", "fnTr_Callback", false, "P", false, this);
        		this.ds_gbook.DeleteRow(EditnRow);
        		this.ds_gbook_send.DeleteRow(0);
        		this.grd_view.updateToDataset();
        	}
        };

        this.ds_gbook_onload = function(obj,e)
        {
        	if(e.reason == 0)
        	{
        		if (this.ds_gbook.rowcount == 0)
        			alert("조회된 데이터가 없습니다.");
        	}
        };

        this.btn_print_onclick = function(obj,e)
        {
        	var nX = system.clientToScreenX(this, 0);
        	var nY = system.clientToScreenY(this, 0);
        	var strArg;
        	var sOpenStyle = "topmost=true autosize=true dragmovetype=all titletext=출력화면 showtitlebar=true showstatusbar=false resizable=true";
        	nexacro.open("print", "sd::SD6280P.xfdl", this.getOwnerFrame(), "", sOpenStyle, nX, nY);
        };

        this.common_onkeydown = function(obj,e)
        {
        	var str_arg = "";
        	var code = "";
        	//Enter Key를 눌렀을 경우 처리
        	if (e.keycode == 13)
        	{
        		if (obj.name == "ed_values1") this.ed_values2.setFocus();
        		else if (obj.name == "ed_values2") this.ed_values3.setFocus();
        		else if (obj.name == "ed_values3") this.ed_values4.setFocus();
        		else if (obj.name == "ed_values4") this.ed_values5.setFocus();
        		else if (obj.name == "ed_values5") this.ed_values6.setFocus();
        		else if (obj.name == "ed_values6") this.ed_values7.setFocus();
        		else if (obj.name == "ed_values7") this.ed_values8.setFocus();
        		else if (obj.name == "ed_values8") this.btn_save.setFocus();
        	}//ESC 키처리
        	else if (e.keycode == 27)
        	{
        		if (obj.name == "ed_values2") this.ed_values1.setFocus();
        		else if (obj.name == "ed_values3") this.ed_values2.setFocus();
        		else if (obj.name == "ed_values4") this.ed_values3.setFocus();
        		else if (obj.name == "ed_values5") this.ed_values4.setFocus();
        		else if (obj.name == "ed_values6") this.ed_values5.setFocus();
        		else if (obj.name == "ed_values7") this.ed_values6.setFocus();
        		else if (obj.name == "ed_values8") this.ed_values7.setFocus();
        	}
        	else if (e.keycode == 112) //F1 키...
        	{
        		if ((obj.name == "ed_values7") || (obj.name == "ed_values8"))
        		{
        			this.lfn_showModal("searh_bookcode", {setting:this.ed_values7.value}, "sd::frmBookcode.xfdl", "fnBookSearchCallback", this, 0, 0, 510, 595);
        		}
        	}
        };

        this.fnBookSearchCallback = function(strID, ret)
        {
        	if(nexacro.trim(ret) != "0")
        	{
        		this.ed_values7.set_value(ret.substr(0,10));
        		this.ed_values8.set_value(ret.substr(10,4));
        		this.ed_values9.set_value(ret.substr(14,ret.length));
        		this.btn_save.setFocus();
        	}
        }

        this.s_common_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		if (obj.name == "ed_values1") this.ed_values2.setFocus();
        		else if (obj.name == "ed_values2") this.ed_values3.setFocus();
        		else if (obj.name == "ed_values3") this.ed_values4.setFocus();
        		else if (obj.name == "ed_values4") this.ed_values5.setFocus();
        	}//ESC 키처리
        	else if (e.keycode == 27)
        	{
        		if (obj.name == "ed_values2") this.ed_values1.setFocus();
        		else if (obj.name == "ed_values3") this.ed_values2.setFocus();
        		else if (obj.name == "ed_values4") this.ed_values3.setFocus();
        		else if (obj.name == "ed_values5") this.ed_values4.setFocus();
        	}
        }

        this.ed_values8_onkillfocus = function(obj,e)
        {
        	var strUrl = "JSP/sd/book_help.jsp";
        	var strArg;
        	if ((this.ed_values7.value =="") || (this.ed_values8.value =="")) return;

        	if  (((nexacro.trim(this.ed_values7.value)).length != 10 ) || ((nexacro.trim(this.ed_values8.value)).length != 4 ))
        		return;
        	strArg  = "Values1="+nexacro.wrapQuote(this.ed_values7.value)+
        			  " Values2="+nexacro.wrapQuote(this.ed_values8.value);
        	this.gfn_TransactionP("book_name", strUrl, "", "", strArg, "fnTr_Callback", false, "P", false, this);
        };

        this.btn_sbookcode_onclick = function(obj,e)
        {
        	this.lfn_showModal("searh_bookcode", {setting:this.ed_values7.value}, "sd::frmBookcode.xfdl", "fnBookSearchCallback", this, 0, 0, 510, 595);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD6280F_onload,this);
            this.btn_sbookcode.addEventHandler("onclick",this.btn_sbookcode_onclick,this);
            this.ed_values8.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values8.addEventHandler("onkillfocus",this.ed_values8_onkillfocus,this);
            this.ed_values7.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values7.addEventHandler("onkillfocus",this.ed_values8_onkillfocus,this);
            this.Static02_09.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_view.addEventHandler("oncelldblclick",this.grd_view_oncelldblclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
            this.btn_can.addEventHandler("onclick",this.btn_can_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_save.addEventHandler("onkeydown",this.btn_save_onkeydown,this);
            this.ed_values9.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values2.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values1.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values5.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values6.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_s_values1.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.ed_s_values1.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.ed_s_values5.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.ed_s_values5.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.ed_s_values4.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.ed_s_values4.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.ed_s_values2.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.ed_s_values3.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.M_user.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values3.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values4.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ds_gbook.addEventHandler("onload",this.ds_gbook_onload,this);
        };
        this.loadIncludeScript("SD6280F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
