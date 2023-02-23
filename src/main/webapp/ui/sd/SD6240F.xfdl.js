(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD6240F");
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
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">번호별</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">중분류별</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">년판</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">도서구분</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">OLD번호</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">시행일</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"NAME\">종료일</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_book", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"BDBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BJBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BGRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYMD\" type=\"STRING\" size=\"256\"/><Column id=\"EYMD\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG_CD1\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG_CD3\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG_CD4\" type=\"STRING\" size=\"256\"/><Column id=\"YUL1\" type=\"FLOAT\" size=\"256\"/><Column id=\"YUL2\" type=\"FLOAT\" size=\"256\"/><Column id=\"YUL3\" type=\"FLOAT\" size=\"256\"/><Column id=\"YUL4\" type=\"FLOAT\" size=\"256\"/><Column id=\"COST\" type=\"STRING\" size=\"256\"/><Column id=\"PCOST\" type=\"STRING\" size=\"256\"/><Column id=\"YCOST\" type=\"STRING\" size=\"256\"/><Column id=\"B_YN\" type=\"STRING\" size=\"256\"/><Column id=\"B_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"B_YUL\" type=\"STRING\" size=\"256\"/><Column id=\"JUK_GB\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG1_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG3_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG4_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_book_send", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"BDBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BJBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BGRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYMD\" type=\"STRING\" size=\"256\"/><Column id=\"EYMD\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG_CD1\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG_CD3\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG_CD4\" type=\"STRING\" size=\"256\"/><Column id=\"YUL1\" type=\"STRING\" size=\"256\"/><Column id=\"YUL2\" type=\"STRING\" size=\"256\"/><Column id=\"YUL3\" type=\"STRING\" size=\"256\"/><Column id=\"YUL4\" type=\"STRING\" size=\"256\"/><Column id=\"COST\" type=\"STRING\" size=\"256\"/><Column id=\"PCOST\" type=\"STRING\" size=\"256\"/><Column id=\"YCOST\" type=\"STRING\" size=\"256\"/><Column id=\"B_YN\" type=\"STRING\" size=\"256\"/><Column id=\"B_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"B_YUL\" type=\"STRING\" size=\"256\"/><Column id=\"JUK_GB\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG1_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG3_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG4_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"O_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"O_YY\" type=\"STRING\" size=\"256\"/><Column id=\"ROWTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ed_values25", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">적용안함</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">반품한도</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">반품정산</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ed_values30", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">적용</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">단가</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">출고율</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"DATA\">적용안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","56","11","400","69",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("도서출고율 관리");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","25","106","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("코드");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03","29.00%","106","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("분류명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","Static01_01:-2","106",null,"36","Static01_03:-2",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_code_search",null,"116","20","20","Static01_03:8",null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values2","20.75%","111",null,"26","btn_code_search:2",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values1","Static01_01:10","111",null,"26","ed_values2:1",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@@@@@@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","25","72",null,"36","25",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("등록");
            obj.set_background("#3cbcb8");
            obj.set_color("white");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_05","61.13%","106","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("도서구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04","Static01_03:-2","106",null,"36","Static01_05:-2",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values4","48.19%","111",null,"26","Static01_05:10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values3","Static01_03:10","111",null,"26","ed_values4:1",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("false");
            obj.set_text("테스트");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","25","287",null,"36","25",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("조회");
            obj.set_background("#3cbcb8");
            obj.set_color("white");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","25","321",null,null,"25","10",null,null,"170",null,this);
            obj.set_taborder("52");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_07","55.25%","355","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("정렬조건");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_06","25","321",null,"70","Static02_07:-2",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_03","55.25%","321","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("조건");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_09",null,"321","113","70","25",null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_04","Static02_03:-2","321",null,"36","Static02_09:-2",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_08","Static02_07:-2","355",null,"36","Static02_09:-2",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_view","37","Static02_07:10",null,null,"42","22",null,null,"80",null,this);
            obj.set_taborder("58");
            obj.set_binddataset("ds_book");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"86\"/><Column size=\"56\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"52\"/><Column size=\"52\"/><Column size=\"52\"/><Column size=\"52\"/><Column size=\"52\"/><Column size=\"52\"/><Column size=\"52\"/><Column size=\"52\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"56\"/><Column size=\"56\"/><Column size=\"72\"/><Column size=\"50\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"년판\"/><Cell col=\"2\" text=\"대분류\"/><Cell col=\"3\" text=\"중분류\"/><Cell col=\"4\" text=\"도서명\"/><Cell col=\"5\" text=\"정가\"/><Cell col=\"6\" text=\"판매단가\"/><Cell col=\"7\" text=\"예정가\"/><Cell col=\"8\" text=\"시행일자\"/><Cell col=\"9\" text=\"종료일자\"/><Cell col=\"10\" text=\"등급1\"/><Cell col=\"11\" text=\"출고율1\"/><Cell col=\"12\" text=\"등급2\"/><Cell col=\"13\" text=\"출고율2\"/><Cell col=\"14\" text=\"등급3\"/><Cell col=\"15\" text=\"출고율3\"/><Cell col=\"16\" text=\"등급4\"/><Cell col=\"17\" text=\"출고율4\"/><Cell col=\"18\" text=\"구분\"/><Cell col=\"19\" text=\"구분명\"/><Cell col=\"20\" text=\"OLD번호\"/><Cell col=\"21\" text=\"반품구분\"/><Cell col=\"22\" text=\"반품기한일\"/><Cell col=\"23\" text=\"한도율\"/><Cell col=\"24\" text=\"적용구분\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:YY\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:BDBR_NM\"/><Cell col=\"3\" text=\"bind:BJBR_NM\"/><Cell col=\"4\" text=\"bind:BGRP_NM\"/><Cell col=\"5\" text=\"bind:COST\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:PCOST\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:YCOST\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:SYMD\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"mask\" maskeditformat=\"####-##-##\" maskedittype=\"string\"/><Cell col=\"9\" text=\"bind:EYMD\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"mask\" maskeditformat=\"####-##-##\" maskedittype=\"string\"/><Cell col=\"10\" text=\"bind:DUNG_CD1\"/><Cell col=\"11\" text=\"bind:YUL1\"/><Cell col=\"12\" text=\"bind:DUNG_CD2\"/><Cell col=\"13\" text=\"bind:YUL2\"/><Cell col=\"14\" text=\"bind:DUNG_CD3\"/><Cell col=\"15\" text=\"bind:YUL3\"/><Cell col=\"16\" text=\"bind:DUNG_CD4\"/><Cell col=\"17\" text=\"bind:YUL4\"/><Cell col=\"18\" text=\"bind:BGBR_CD\"/><Cell col=\"19\" text=\"bind:BGBR_NM\"/><Cell col=\"20\" text=\"bind:OLD_CODE\"/><Cell col=\"21\" text=\"bind:B_YN\" expr=\"comp.parent.fn_expr(B_YN)\"/><Cell col=\"22\" text=\"bind:B_YMD\"/><Cell col=\"23\" text=\"bind:B_YUL\"/><Cell col=\"24\" expr=\"comp.parent.fn_expr2(JUK_GB)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"330","95","51","33",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("조회하기");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_search1","Static02_03:10","326",null,"26","Static02_09:10",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_innerdataset("ds_cmb_search");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text(">=  (같거나크다)");
            obj.set_value("3");
            obj.set_index("3");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_orderby","Static02_07:10","360",null,"26","Static02_09:10",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_innerdataset("ds_cmb_orderby");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("전표일자순");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_copy",null,"26","75","31","25",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("년판복사");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"26","75","31","btn_copy:12",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("출력");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_can",null,"26","75","31","btn_print:12",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("취소");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"26","75","31","btn_can:12",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("삭제");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"26","75","31","btn_del:12",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("저장");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_06","Static01_05:-2","106",null,"36","25",null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values5","Static01_05:9","111",null,"26","384",null,"40","120",null,null,this);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values6","ed_values5:1","111",null,"26","35",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_07","25","140","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("도서명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_09","61.13%","140","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("시행일자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_08","Static01_07:-2","140",null,"36","Static01_09:-2",null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values7","Static01_07:10","145",null,"26","Static01_09:10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_10","Static01_09:-2","140",null,"36","25",null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_values9","83.75%","145",null,"26","35",null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_values8","Static01_09:10","145",null,"26","ed_values9:1",null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_11","25","174","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("출고율1");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_19","25","208","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("정가");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_13","25.88%","174","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("출고율2");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_12","Static01_11:-2","174",null,"36","Static01_13:-2",null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values10","Static01_11:10","179",null,"26","Static01_13:191",null,"32","100",null,null,this);
            obj.set_taborder("9");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values11","ed_values10:1","179","Static01_12:26%","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values12","ed_values11:1","179",null,"26","Static01_13:8",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_15","50.19%","174","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("출고율3");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_14","Static01_13:-2","174",null,"36","Static01_15:-2",null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values13","Static01_13:10","179",null,"26","Static01_15:190",null,"32","100",null,null,this);
            obj.set_taborder("12");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values14","ed_values13:1","179","Static01_14:26%","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values15","ed_values14:1","179",null,"26","Static01_15:8",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_17","74.5%","174","124","36",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("출고율4");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_16","Static01_15:-2","174",null,"36","Static01_17:-2",null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values16","Static01_15:10","179",null,"26","Static01_17:190",null,"32","100",null,null,this);
            obj.set_taborder("15");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values17","ed_values16:1","179","Static01_14:26%","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values18","ed_values17:1","179",null,"26","Static01_17:8",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_18","Static01_17:-2","174",null,"36","25",null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values19","Static01_17:9","179",null,"26","214",null,"32","100",null,null,this);
            obj.set_taborder("18");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values20","ed_values19:1","179","Static01_18:26%","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values21","ed_values20:1","179",null,"26","35",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_21","21.44%","208","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("판매단가");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_20","Static01_19:-2","208",null,"36","Static01_21:-2",null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values22","Static01_19:10","213",null,"26","Static01_21:10",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_23","41.31%","208","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("예정가");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_22","Static01_21:-2","208",null,"36","Static01_23:-3",null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values23","Static01_21:10","213",null,"26","Static01_23:10",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_25","61.13%","208","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("비고");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_24","Static01_23:-2","208",null,"36","Static01_25:-2",null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values32","Static01_23:11","213",null,"26","Static01_25:9",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_26","Static01_25:-2","208",null,"36","25",null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values28","Static01_25:10","213",null,"26","35",null,null,null,null,null,this);
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_27","25","242","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("반품구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_33","50.19%","242","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("적용구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_28","Static01_27:-2","242",null,"36","Static01_33:-2",null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_34","Static01_33:-2","242",null,"36","25",null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values24","Static01_27:10","247",null,"26","1395",null,"26","60",null,null,this);
            obj.set_taborder("25");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("#");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Combo("ed_values25","ed_values24:1","247","Static01_28:32%","26",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_innerdataset("ds_ed_values25");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_text("적용안함");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_values26","ed_values25:1","247","Static01_28:33%","26",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_value("20220505");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values27","ed_values26:1","247",null,"26","Static01_33:10",null,"52",null,null,null,this);
            obj.set_taborder("28");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values29","Static01_33:10","247",null,"26","617",null,"26","60",null,null,this);
            obj.set_taborder("29");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("#");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Combo("ed_values30","ed_values29:1","247","Static01_34:36%","26",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_innerdataset("ds_ed_values30");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values31","ed_values30:1","247",null,"26","35",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_27_00_00","11.94%","321","81","70",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_27_00","25","321",null,"70","Static01_27_00_00:-2",null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_s_values1","36","359",null,"26","Static01_27_00_00:10",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@@@@@@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","11.94%","321","81","36",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("년판");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","25","321",null,"36","Static03_00_00:-2",null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("도서코드");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_27_00_00_01","43.63%","321","71","70",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_27_00_00_00","Static01_27_00_00:-2","321",null,"70","Static01_27_00_00_01:-2",null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_s_values2","Static01_27_00:10","359",null,"26","Static01_27_00_00_00:10",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_01","43.63%","321","71","36",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("구분");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","Static03_00_00:-2","321",null,"36","Static03_00_00_01:-2",null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("도서명");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_s_values3","Static01_27_00_00:10","359",null,"26","Static01_27_00_00_01:10",null,null,null,null,null,this);
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_s_values4","Static01_27_00_00_00:10","359","47","26",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_opt","Static01_27_00_00_01:7","363",null,"20","Static02_07:5",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("미등록");
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
        this.addIncludeScript("SD6240F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD6240F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD6240F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");

        var NewRowNum    = "";					// 추가행번호.
        var EditnRow	 = "";					//수정된 행번호
        var Error        = "";					//에러코드.
        var return_code  = "";
        var return_code1 = "";
        var return_code2 = "";
        var return_code3 = "";
        var return_code4 = "";
        var return_code5 = "";
        var IUSW         = "";
        var o_code       = "";
        var o_yy         = "";

        this.SD6240F_onload = function(obj,e)
        {
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyy");
        	this.fnDataclear();
        	this.cmb_search1.set_index(3);
        	this.cmb_orderby.set_index(0);
        	this.ed_s_values1.set_value("");
        	this.ed_s_values2.set_value(f_date);
        	this.ed_s_values3.set_value("");
        	this.ed_s_values4.set_value("");
        	this.ed_values1.setFocus();
        };

        this.fnSearch_zipcode = function()
        {
        	var strUrl = "JSP/sd/select_booky.jsp";
        	var strArg;
        	var strDs 	= "ds_book=ds_book";
        	var chk_opt;

        	if (this.chk_opt.value == true) chk_opt = "True";
        	else chk_opt = "";

        	strArg = " Values1="+nexacro.wrapQuote(nexacro.trim(this.ed_s_values1.value))+
        	         " Values2="+nexacro.wrapQuote(nexacro.trim(this.ed_s_values2.value))+
        	         " Values3="+nexacro.wrapQuote(this.ed_s_values3.value)+
        	         " Values4="+nexacro.wrapQuote(nexacro.trim(this.ed_s_values4.value))+
        	         " Values5="+nexacro.wrapQuote(chk_opt)+
        	         " Option ="+nexacro.wrapQuote(this.cmb_search1.index)+
        	         " Orderby="+nexacro.wrapQuote(this.cmb_orderby.index);
        	this.setWaitCursor(true);
        	this.gfn_TransactionP("codesearch", strUrl, strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        }

        this.fnCallback = function(strSvcID, nErrorCode, strErrorMag)
        {
        	this.setWaitCursor(false);
        	if(nErrorCode != 0)
        	{
        		alert(strErrorMag);
        		return;
        	}
        }

        this.fnDataclear = function()
        {
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyy");
            NewRowNum       = "";
            EditnRow	    = "";
            Error           = "";
            return_code     = "";
            return_code1    = "";
            return_code2    = "";
            return_code3    = "";
            return_code4    = "";
            return_code5    = "";
            IUSW            = "N";
            o_code          = "";
            o_yy            = "";
        	this.ed_values1.set_value("");
        	this.ed_values2.set_value(f_date);
        	this.ed_values3.set_value("");
        	this.ed_values4.set_value("");
        	this.ed_values5.set_value("");
        	this.ed_values6.set_value("");
        	this.ed_values7.set_value("");
        	this.ed_values8.set_value("20000101");
        	this.ed_values9.set_value("99991231");
        	this.ed_values10.set_value("");
        	this.ed_values11.set_value("");
        	this.ed_values12.set_value("0");
        	this.ed_values13.set_value("");
        	this.ed_values14.set_value("");
        	this.ed_values15.set_value("0");
        	this.ed_values16.set_value("");
        	this.ed_values17.set_value("");
        	this.ed_values18.set_value("0");
        	this.ed_values19.set_value("");
        	this.ed_values20.set_value("");
        	this.ed_values21.set_value("0");
        	this.ed_values22.set_value("0");
        	this.ed_values23.set_value("0");
        	this.ed_values32.set_value("0");
        	this.ed_values24.set_value("0");
        	this.ed_values25.set_index(0);
        	this.ed_values26.set_value("");
        	this.ed_values27.set_value("0");
        	this.ed_values28.set_value("");
        	this.ed_values29.set_value("0");
        	this.ed_values30.set_index(0);
        	this.ed_values31.set_value("");
        }

        //입력모드
        this.fnInputdata = function()
        {
        	this.ds_book.setColumn(NewRowNum,"CODE",	nexacro.trim(this.ed_values1.value));
        	this.ds_book.setColumn(NewRowNum,"YY",  	nexacro.trim(this.ed_values2.value));
        	this.ds_book.setColumn(NewRowNum,"BDBR_NM", nexacro.trim(this.ed_values3.value));
        	this.ds_book.setColumn(NewRowNum,"BJBR_NM", nexacro.trim(this.ed_values4.value));
        	this.ds_book.setColumn(NewRowNum,"BGBR_CD", nexacro.trim(this.ed_values5.value));
        	this.ds_book.setColumn(NewRowNum,"BGBR_NM", nexacro.trim(this.ed_values6.value));
        	this.ds_book.setColumn(NewRowNum,"BGRP_NM", nexacro.trim(this.ed_values7.value));
        	this.ds_book.setColumn(NewRowNum,"SYMD",    nexacro.trim(this.ed_values8.value));
        	this.ds_book.setColumn(NewRowNum,"EYMD",    nexacro.trim(this.ed_values9.value));
        	this.ds_book.setColumn(NewRowNum,"DUNG_CD1",nexacro.trim(this.ed_values10.value));
        	this.ds_book.setColumn(NewRowNum,"DUNG1_NM",nexacro.trim(this.ed_values11.value));
        	this.ds_book.setColumn(NewRowNum,"YUL1",    nexacro.trim(this.ed_values12.value));
        	this.ds_book.setColumn(NewRowNum,"DUNG_CD2",nexacro.trim(this.ed_values13.value));
        	this.ds_book.setColumn(NewRowNum,"DUNG2_NM",nexacro.trim(this.ed_values14.value));
        	this.ds_book.setColumn(NewRowNum,"YUL2",    nexacro.trim(this.ed_values15.value));
        	this.ds_book.setColumn(NewRowNum,"DUNG_CD3",nexacro.trim(this.ed_values16.value));
        	this.ds_book.setColumn(NewRowNum,"DUNG3_NM",nexacro.trim(this.ed_values17.value));
        	this.ds_book.setColumn(NewRowNum,"YUL3",    nexacro.trim(this.ed_values18.value));
        	this.ds_book.setColumn(NewRowNum,"DUNG_CD4",nexacro.trim(this.ed_values19.value));
        	this.ds_book.setColumn(NewRowNum,"DUNG4_NM",nexacro.trim(this.ed_values20.value));
        	this.ds_book.setColumn(NewRowNum,"YUL4",    nexacro.trim(this.ed_values21.value));
        	this.ds_book.setColumn(NewRowNum,"COST",    nexacro.trim(this.ed_values22.value));
        	this.ds_book.setColumn(NewRowNum,"PCOST",   nexacro.trim(this.ed_values23.value));
        	this.ds_book.setColumn(NewRowNum,"YCOST",   nexacro.trim(this.ed_values32.value));
        	this.ds_book.setColumn(NewRowNum,"B_YN",    nexacro.trim(this.ed_values24.value));
        	this.ds_book.setColumn(NewRowNum,"B_YMD",   nexacro.trim(this.ed_values26.value));
        	this.ds_book.setColumn(NewRowNum,"B_YUL",   nexacro.trim(this.ed_values27.value));
        	this.ds_book.setColumn(NewRowNum,"BIGO",    nexacro.trim(this.ed_values28.value));
        	this.ds_book.setColumn(NewRowNum,"JUK_GB",  nexacro.trim(this.ed_values29.value));
        	this.ds_book.setColumn(NewRowNum,"OLD_CODE",nexacro.trim(this.ed_values31.value));
        	if (this.ed_values10.value == "") this.ds_book.setColumn(NewRowNum,"DUNG_CD1","00");
        	if (this.ed_values13.value == "") this.ds_book.setColumn(NewRowNum,"DUNG_CD2","00");
        	if (this.ed_values16.value == "") this.ds_book.setColumn(NewRowNum,"DUNG_CD3","00");
        	if (this.ed_values19.value == "") this.ds_book.setColumn(NewRowNum,"DUNG_CD4","00");
        	if (this.ed_values24.value == "")this.ds_book.setColumn(NewRowNum,"B_YN","0");
        	if (this.ed_values26.value == "")this.ds_book.setColumn(NewRowNum,"B_YMD","00");
        	if (this.ed_values29.value == "")this.ds_book.setColumn(NewRowNum,"JUK_GB","0");
        	this.ds_book_send.addRow();
        	this.ds_book_send.copyRow(0,this.ds_book,NewRowNum);
        	this.ds_book_send.setColumn(0,"o_code", o_code);
        	this.ds_book_send.setColumn(0,"o_yy", o_yy);
        	this.ds_book_send.setColumn(0,"ROWTYPE", "I");
        }

        //수정모드
        this.fnEdit_data = function()
        {
        	this.ds_book.setColumn(EditnRow,"CODE",nexacro.trim(this.ed_values1.value));
        	this.ds_book.setColumn(EditnRow,"YY",  nexacro.trim(this.ed_values2.value));
        	this.ds_book.setColumn(EditnRow,"BDBR_NM", nexacro.trim(this.ed_values3.value));
        	this.ds_book.setColumn(EditnRow,"BJBR_NM", nexacro.trim(this.ed_values4.value));
        	this.ds_book.setColumn(EditnRow,"BGBR_CD", nexacro.trim(this.ed_values5.value));
        	this.ds_book.setColumn(EditnRow,"BGBR_NM", nexacro.trim(this.ed_values6.value));
        	this.ds_book.setColumn(EditnRow,"BGRP_NM", nexacro.trim(this.ed_values7.value));
        	this.ds_book.setColumn(EditnRow,"SYMD", 	  nexacro.trim(this.ed_values8.value));
        	this.ds_book.setColumn(EditnRow,"EYMD", 	  nexacro.trim(this.ed_values9.value));
        	this.ds_book.setColumn(EditnRow,"DUNG_CD1",nexacro.trim(this.ed_values10.value));
        	this.ds_book.setColumn(EditnRow,"DUNG1_NM",nexacro.trim(this.ed_values11.value));
        	this.ds_book.setColumn(EditnRow,"YUL1", 	  nexacro.trim(this.ed_values12.value));
        	this.ds_book.setColumn(EditnRow,"DUNG_CD2",nexacro.trim(this.ed_values13.value));
        	this.ds_book.setColumn(EditnRow,"DUNG2_NM",nexacro.trim(this.ed_values14.value));
        	this.ds_book.setColumn(EditnRow,"YUL2", 	  nexacro.trim(this.ed_values15.value));
        	this.ds_book.setColumn(EditnRow,"DUNG_CD3",nexacro.trim(this.ed_values16.value));
        	this.ds_book.setColumn(EditnRow,"DUNG3_NM",nexacro.trim(this.ed_values17.value));
        	this.ds_book.setColumn(EditnRow,"YUL3", 	  nexacro.trim(this.ed_values18.value));
        	this.ds_book.setColumn(EditnRow,"DUNG_CD4",nexacro.trim(this.ed_values19.value));
        	this.ds_book.setColumn(EditnRow,"DUNG4_NM",nexacro.trim(this.ed_values20.value));
        	this.ds_book.setColumn(EditnRow,"YUL4", 	  nexacro.trim(this.ed_values21.value));
        	this.ds_book.setColumn(EditnRow,"COST", 	  nexacro.trim(this.ed_values22.value));
        	this.ds_book.setColumn(EditnRow,"PCOST",   nexacro.trim(this.ed_values23.value));
        	this.ds_book.setColumn(EditnRow,"YCOST",   nexacro.trim(this.ed_values32.value));
        	this.ds_book.setColumn(EditnRow,"B_YN", 	  nexacro.trim(this.ed_values24.value));
        	this.ds_book.setColumn(EditnRow,"B_YMD",   nexacro.trim(this.ed_values26.value));
        	this.ds_book.setColumn(EditnRow,"B_YUL",   nexacro.trim(this.ed_values27.value));
        	this.ds_book.setColumn(EditnRow,"BIGO", 	  nexacro.trim(this.ed_values28.value));
        	this.ds_book.setColumn(EditnRow,"JUK_GB",  nexacro.trim(this.ed_values29.value));
        	this.ds_book.setColumn(EditnRow,"OLD_CODE",nexacro.trim(this.ed_values31.value));
        	if (this.ed_values10.value == "") this.ds_book.setColumn(EditnRow,"DUNG_CD1","00");
        	if (this.ed_values13.value == "") this.ds_book.setColumn(EditnRow,"DUNG_CD2","00");
        	if (this.ed_values16.value == "") this.ds_book.setColumn(EditnRow,"DUNG_CD3","00");
        	if (this.ed_values19.value == "") this.ds_book.setColumn(EditnRow,"DUNG_CD4","00");
        	if (this.ed_values24.value == "")this.ds_book.setColumn(EditnRow,"B_YN","0");
        	if (this.ed_values26.value == "")this.ds_book.setColumn(EditnRow,"B_YMD","00000000");
        	if (this.ed_values29.value == "")this.ds_book.setColumn(EditnRow,"JUK_GB","0");
        	this.ds_book_send.addRow();
        	this.ds_book_send.copyRow(0,this.ds_book,EditnRow);
        	this.ds_book_send.setColumn(0,"O_CODE", o_code);
        	this.ds_book_send.setColumn(0,"O_YY", o_yy);
        	if ( (nexacro.trim(o_code)).length != 0 )
        	{
        		this.ds_book_send.setColumn(0,"ROWTYPE", "U" );
        	}
        	else
        	{
        		this.ds_book_send.setColumn(0,"ROWTYPE", "I" );
        	}
        	this.grd_view.updateToDataset();
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.fnSearch_zipcode();
        	NewRowNum = "";
        };

        this.grd_view_oncelldblclick = function(obj,e)
        {
        	this.fnDataclear();
        	EditnRow          = e.row;
        	IUSW              = "Y";
        	this.ed_values1.set_value(this.ds_book.getColumn(e.row,"CODE"));
        	this.ed_values2.set_value(this.ds_book.getColumn(e.row,"YY"));
        	this.ed_values3.set_value(this.ds_book.getColumn(e.row,"BDBR_NM"));
        	this.ed_values4.set_value(this.ds_book.getColumn(e.row,"BJBR_NM"));
        	this.ed_values5.set_value(this.ds_book.getColumn(e.row,"BGBR_CD"));
        	this.ed_values6.set_value(this.ds_book.getColumn(e.row,"BGBR_NM"));
        	this.ed_values7.set_value(this.ds_book.getColumn(e.row,"BGRP_NM"));
        	this.ed_values8.set_value(this.ds_book.getColumn(e.row,"SYMD"));
        	if ( (nexacro.trim(this.ds_book.getColumn(e.row,"SYMD"))).length != 0 )
        	{
        		o_code = this.ds_book.getColumn(e.row,"CODE");
        		o_yy   = this.ds_book.getColumn(e.row,"YY");
        	}
        	this.ed_values9.set_value(this.ds_book.getColumn(e.row,"EYMD"));
        	this.ed_values10.set_value(this.ds_book.getColumn(e.row,"DUNG_CD1"));
        	this.ed_values11.set_value(this.ds_book.getColumn(e.row,"DUNG1_NM"));
        	this.ed_values12.set_value(this.ds_book.getColumn(e.row,"YUL1"));
        	this.ed_values13.set_value(this.ds_book.getColumn(e.row,"DUNG_CD2"));
        	this.ed_values14.set_value(this.ds_book.getColumn(e.row,"DUNG2_NM"));
        	this.ed_values15.set_value(this.ds_book.getColumn(e.row,"YUL2"));
        	this.ed_values16.set_value(this.ds_book.getColumn(e.row,"DUNG_CD3"));
        	this.ed_values17.set_value(this.ds_book.getColumn(e.row,"DUNG3_NM"));
        	this.ed_values18.set_value(this.ds_book.getColumn(e.row,"YUL3"));
        	this.ed_values19.set_value(this.ds_book.getColumn(e.row,"DUNG_CD4"));
        	this.ed_values20.set_value(this.ds_book.getColumn(e.row,"DUNG4_NM"));
        	this.ed_values21.set_value(this.ds_book.getColumn(e.row,"YUL4"));
        	this.ed_values22.set_value(this.ds_book.getColumn(e.row,"COST"));
        	this.ed_values23.set_value(this.ds_book.getColumn(e.row,"PCOST"));
        	this.ed_values32.set_value(this.ds_book.getColumn(e.row,"YCOST"));
        	this.ed_values24.set_value(this.ds_book.getColumn(e.row,"B_YN"));
        	this.ed_values25.set_index(this.ds_book.getColumn(e.row,"B_YN"));
        	this.ed_values26.set_value(this.ds_book.getColumn(e.row,"B_YMD"));
        	this.ed_values27.set_value(this.ds_book.getColumn(e.row,"B_YUL"));
        	this.ed_values28.set_value(this.ds_book.getColumn(e.row,"BIGO"));
        	this.ed_values29.set_value(this.ds_book.getColumn(e.row,"JUK_GB"));
        	this.ed_values30.set_index(this.ds_book.getColumn(e.row,"JUK_GB"));
        	this.ed_values31.set_value(this.ds_book.getColumn(e.row,"OLD_CODE"));
        };

        this.btn_save_onclick = function(obj,e)
        {
        	var strUrl = "JSP/sd/insert_booky.jsp";
        	var strArg  = "user_id="+gv_sabun;
        	var inDs 	= "ds_book_send=ds_book_send";
        	if ((nexacro.trim(this.ed_values1.value)).length != 10)
        	{
        		alert("코드 오류! 수정하세요!");
        		return;
        	}
        	if ((nexacro.trim(this.ed_values2.value)).length != 4)
        	{
        		alert("년판 오류! 수정하세요!");
        		return;
        	}

        	if (((nexacro.trim(this.ed_values12.value)).length == 0) || ((nexacro.trim(this.ed_values15.value)).length == 0) ||((nexacro.trim(this.ed_values18.value)).length == 0) ||
        	   ((nexacro.trim(this.ed_values21.value)).length == 0))
        	{
        		alert("출고율 오류! 수정하세요!");
        		return;
        	}

        	if (((nexacro.trim(this.ed_values22.value)).length == 0) || ((nexacro.trim(this.ed_values23.value)).length == 0) ||((nexacro.trim(this.ed_values25.value)).length == 0))
        	{
        		alert("단가 오류! 수정하세요!");
        		return;
        	}

        	if (IUSW == "Y")
        		this.fnEdit_data();
        	else
        	{
        		NewRowNum = this.ds_book.addRow();
        		this.fnInputdata();
        	}
        	//	trace(ds_book.SaveXML());
        	this.gfn_TransactionP("insert", strUrl, inDs, "", strArg, "fnTr_Callback", false, "P", false, this);
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
                 	if ( IUSW == "N" )
                    	this.fnDataclear();
        			this.ds_book_send.deleteRow(0);
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
        			this.ds_book.deleteRow(EditnRow);
                 	this.fnDataclear();
                	this.ed_values1.setFocus();
        		}
        	}
        }

        this.btn_can_onclick = function(obj,e)
        {
        	this.fnDataclear();
        	this.ed_values1.setFocus();
        };

        this.btn_del_onclick = function(obj,e)
        {
        	var strUrl = "JSP/sd/insert_booky.jsp";
        	var strArg  = "user_id="+gv_sabun;
        	var inDs 	= "ds_book_send=ds_book_send";
        	var objApp = nexacro.getApplication();
        	if(msg_result = objApp.confirm( "삭제된 데이터는 복원하실수 없습니다.\n 정말 삭제하시겠습니까? " , "삭제처리", "warning" ))
        	{
        		this.ds_book.setColumn(EditnRow,"CODE",    nexacro.trim(this.ed_values1.value));
        		this.ds_book.setColumn(EditnRow,"YY",      nexacro.trim(this.ed_values2.value));
        		this.ds_book.setColumn(EditnRow,"BDBR_NM", nexacro.trim(this.ed_values3.value));
        		this.ds_book.setColumn(EditnRow,"BJBR_NM", nexacro.trim(this.ed_values4.value));
        		this.ds_book.setColumn(EditnRow,"BGBR_CD", nexacro.trim(this.ed_values5.value));
        		this.ds_book.setColumn(EditnRow,"BGBR_NM", nexacro.trim(this.ed_values6.value));
        		this.ds_book.setColumn(EditnRow,"BGRP_NM", nexacro.trim(this.ed_values7.value));
        		this.ds_book.setColumn(EditnRow,"SYMD", 	  nexacro.trim(this.ed_values8.value));
        		this.ds_book.setColumn(EditnRow,"EYMD", 	  nexacro.trim(this.ed_values9.value));
        		this.ds_book.setColumn(EditnRow,"DUNG_CD1",nexacro.trim(this.ed_values10.value));
        		this.ds_book.setColumn(EditnRow,"DUNG1_NM",nexacro.trim(this.ed_values11.value));
        		this.ds_book.setColumn(EditnRow,"YUL1", 	  nexacro.trim(this.ed_values12.value));
        		this.ds_book.setColumn(EditnRow,"DUNG_CD2",nexacro.trim(this.ed_values13.value));
        		this.ds_book.setColumn(EditnRow,"DUNG2_NM",nexacro.trim(this.ed_values14.value));
        		this.ds_book.setColumn(EditnRow,"YUL2", 	  nexacro.trim(this.ed_values15.value));
        		this.ds_book.setColumn(EditnRow,"DUNG_CD3",nexacro.trim(this.ed_values16.value));
        		this.ds_book.setColumn(EditnRow,"DUNG3_NM",nexacro.trim(this.ed_values17.value));
        		this.ds_book.setColumn(EditnRow,"YUL3", 	  nexacro.trim(this.ed_values18.value));
        		this.ds_book.setColumn(EditnRow,"DUNG_CD4",nexacro.trim(this.ed_values19.value));
        		this.ds_book.setColumn(EditnRow,"DUNG4_NM",nexacro.trim(this.ed_values20.value));
        		this.ds_book.setColumn(EditnRow,"YUL4", 	  nexacro.trim(this.ed_values21.value));
        		this.ds_book.setColumn(EditnRow,"COST", 	  nexacro.trim(this.ed_values22.value));
        		this.ds_book.setColumn(EditnRow,"PCOST",   nexacro.trim(this.ed_values23.value));
        		this.ds_book.setColumn(EditnRow,"YCOST",   nexacro.trim(this.ed_values32.value));
        		this.ds_book.setColumn(EditnRow,"B_YN", 	  nexacro.trim(this.ed_values24.value));
        		this.ds_book.setColumn(EditnRow,"B_YMD",   nexacro.trim(this.ed_values26.value));
        		this.ds_book.setColumn(EditnRow,"B_YUL",   nexacro.trim(this.ed_values27.value));
        		this.ds_book.setColumn(EditnRow,"BIGO", 	  nexacro.trim(this.ed_values28.value));
        		this.ds_book.setColumn(EditnRow,"JUK_GB",  nexacro.trim(this.ed_values29.value));
        		this.ds_book.setColumn(EditnRow,"OLD_CODE",nexacro.trim(this.ed_values31.value));
        		if (this.ed_values10.value == "") this.ds_book.setColumn(EditnRow,"DUNG_CD1","00");
        		if (this.ed_values13.value == "") this.ds_book.setColumn(EditnRow,"DUNG_CD2","00");
        		if (this.ed_values16.value == "") this.ds_book.setColumn(EditnRow,"DUNG_CD3","00");
        		if (this.ed_values19.value == "") this.ds_book.setColumn(EditnRow,"DUNG_CD4","00");
        		if (this.ed_values24.value == "") this.ds_book.setColumn(EditnRow,"B_YN","0");
        		if (this.ed_values26.value == "") this.ds_book.setColumn(EditnRow,"B_YMD","00");
        		if (this.ed_values29.value == "") this.ds_book.setColumn(EditnRow,"JUK_GB","0");
        		this.ds_book_send.addRow();
        		this.ds_book_send.copyRow(0,this.ds_book,EditnRow);
        		this.ds_book_send.setColumn(0,"o_code", o_code);
        		this.ds_book_send.setColumn(0,"o_yy", o_yy);
        		this.ds_book_send.setColumn(0,"ROWTYPE", "D" );
        		this.gfn_TransactionP("delete", strUrl, inDs, "", strArg, "fnTr_Callback", false, "P", false, this);
        		this.ds_book_send.deleteRow(0);
        		this.grd_view.updateToDataset();
        	}
        };

        this.ds_book_onload = function(obj,e)
        {
        	if(e.reason == 0)
        	{
        		if (this.ds_book.rowcount == 0)
        			alert("조회된 데이터가 없습니다.");
        	}
        };
        /*
        this.s_common_onkeydown = function(obj:nexacro.MaskEdit,e:nexacro.KeyEventInfo)
        {
        	//Enter Key를 눌렀을 경우 처리
        	if (e.keycode == 13)
        	{
        		if (obj.id == "ed_s_code") this.ed_s_name.setFocus();
        	}//ESC 키처리
        	else if (e.keycode == 27)
        	{
        		if (obj.id == "ed_s_name") this.ed_s_code.setFocus();
        	}
        };
        */

        this.ed_values1_onkillfocus = function(obj,e)
        {
        	if ( IUSW == "N" )
        	{
        		var strUrl = "JSP/sd/book_help1.jsp";
        		var strArg;
        		if ((nexacro.trim(this.ed_values1.value)).length != 10) return;
        		if ((nexacro.trim(this.ed_values2.value)).length != 4) return;
        		strArg = " Values1="+nexacro.wrapQuote(nexacro.trim(this.ed_values1.value))+
        				 " Values2="+nexacro.wrapQuote(nexacro.trim(this.ed_values2.value));
        		this.gfn_TransactionP("codesearch2", strUrl, "", "", strArg, "fnTr_Callback2", false, "P", false, this);
        	}
        	if ( IUSW == "N" )
        	{
        		var strUrl = "JSP/sd/booky_help.jsp";
        		var strArg;
        		if ((nexacro.trim(this.ed_values1.value)).length != 10) return;
        		if ((nexacro.trim(this.ed_values2.value)).length != 4) return;
        		strArg = " Values1="+nexacro.wrapQuote(this.ed_values1.value)+" Values2="+nexacro.wrapQuote(this.ed_values2.value)+" Values3="+nexacro.wrapQuote(this.ed_values1.name);
        		//alert(strArg);
        		this.gfn_TransactionP("Double_chk", strUrl, "", "", strArg, "fnDouble_Callback", false, "P", false, this);
        	}
        };

        this.fnDouble_Callback = function(strSvcID, nErrorCode, strErrorMag)
        {
        	if(nErrorCode == 0)
        	{
        		var ret = strErrorMag.split('^');
        		return_code = ret[0];
        		return_code2 = ret[1];
        	}
            if ( strSvcID == "Double_chk" )
        	{
        		if(return_code != "") // 수정
        		{
        	    	alert ("자료중복 데이터");
        	    	this.ed_values1.set_value("");
        			this.ed_values1.setFocus();
        	    }
        	}
        }

        this.fnTr_Callback2 = function(strSvcID, nErrorCode, strErrorMag)
        {
        	if(nErrorCode != 0)
        	{
        		alert(strErrorMag);
        		return;
        	}
        	if ( strSvcID == "codesearch2" )
        	{
        		var ret = strErrorMag.split('^');
        		return_code1 = ret[0];
        		return_code2 = ret[1];
        		return_code3 = ret[2];
        		return_code4 = ret[3];
        		return_code5 = ret[4];

        		if(return_code3 != "") //수정
        		{
        			this.ed_values3.set_value(return_code1);
        			this.ed_values4.set_value(return_code2);
        			this.ed_values5.set_value(return_code4);
        			this.ed_values6.set_value(return_code5);
        			this.ed_values7.set_value(return_code3);
        		}
        		else
        		{
        			alert("도서코드가 잘못되었습니다.");
        			this.ed_values3.set_value("");
        			this.ed_values4.set_value("");
        			this.ed_values5.set_value("");
        			this.ed_values6.set_value("");
        			this.ed_values7.set_value("");
        			this.ed_values1.set_value("");
        			this.ed_values1.setFocus();
        		}
        	}
        	else if ( strSvcID == "codesearch3" )
        	{
        		var ret = strErrorMag.split('^');
        		return_code = ret[0];
        		return_code1 = ret[1];
        		if (return_code1 =="ed_values10") this.ed_values11.set_value(return_code);
        		else if (return_code1 =="ed_values13") this.ed_values14.set_value(return_code);
        		else if (return_code1 =="ed_values16") this.ed_values17.set_value(return_code);
        		else if (return_code1 =="ed_values19") this.ed_values20.set_value(return_code);
        	}
        }

        this.btn_print_onclick = function(obj,e)
        {
        	var strArg;
        	var sOpenStyle = "topmost=true autosize=true dragmovetype=all titletext=조회화면 showtitlebar=true showstatusbar=false resizable=true";
        	nexacro.open("print", "sd::SD6240P.xfdl", this.getOwnerFrame(), "", sOpenStyle, this.width/2, this.height/2);
        };

        this.fn_expr = function(val) // Grid 반품구분 expr에 사용
        {
        	if (val == 0) return "적용안함";
        	else if (val == 1) return "반품한도";
        	else if (val == 2) return "반품정산";
        }

        this.fn_expr2 = function(val) // Grid 적용구분 expr에 사용
        {
        	if (val == 0) return "적용";
        	else if (val == 1) return "단가";
        	else if (val == 2) return "출고율";
        	else if (val == 3) return "적용안함";
        }

        this.common_onkeydown = function(obj,e)
        {
        	var strArg = "";
        	var code = "";
        		//Enter Key를 눌렀을 경우 처리
        	if (e.keycode == 13)
        	{
        		if (obj.name == "ed_values1") this.ed_values2.setFocus();
        		else if (obj.name == "ed_values2") this.ed_values8.setFocus();
        		else if (obj.name == "ed_values8") this.ed_values9.setFocus();
        		else if (obj.name == "ed_values9") this.ed_values10.setFocus();
        		else if (obj.name == "ed_values10") this.ed_values12.setFocus();
        		else if (obj.name == "ed_values12") this.ed_values13.setFocus();
        		else if (obj.name == "ed_values13") this.ed_values15.setFocus();
        		else if (obj.name == "ed_values15") this.ed_values16.setFocus();
        		else if (obj.name == "ed_values16") this.ed_values18.setFocus();
        		else if (obj.name == "ed_values18") this.ed_values19.setFocus();
        		else if (obj.name == "ed_values19") this.ed_values21.setFocus();
        		else if (obj.name == "ed_values21") this.ed_values22.setFocus();
        		else if (obj.name == "ed_values22") this.ed_values23.setFocus();
        		else if (obj.name == "ed_values23") this.ed_values32.setFocus();
        		else if (obj.name == "ed_values32") this.ed_values24.setFocus();
        		else if (obj.name == "ed_values24") this.ed_values25.setFocus();
        		else if (obj.name == "ed_values25") this.ed_values26.setFocus();
        		else if (obj.name == "ed_values26") this.ed_values27.setFocus();
        		else if (obj.name == "ed_values27") this.ed_values28.setFocus();
        		else if (obj.name == "ed_values28") this.ed_values29.setFocus();
        		else if (obj.name == "ed_values29") this.ed_values30.setFocus();
        		else if (obj.name == "ed_values30") this.ed_values31.setFocus();
        	}//ESC 키처리
        	else if (e.keycode == 27)
        	{
        		if (obj.name == "ed_values2") this.ed_values1.setFocus();
        		else if (obj.name == "ed_values8") this.ed_values2.setFocus();
        		else if (obj.name == "ed_values9") this.ed_values8.setFocus();
        		else if (obj.name == "ed_values10") this.ed_values9.setFocus();
        		else if (obj.name == "ed_values12") this.ed_values10.setFocus();
        		else if (obj.name == "ed_values13") this.ed_values12.setFocus();
        		else if (obj.name == "ed_values15") this.ed_values13.setFocus();
        		else if (obj.name == "ed_values16") this.ed_values15.setFocus();
        		else if (obj.name == "ed_values18") this.ed_values16.setFocus();
        		else if (obj.name == "ed_values19") this.ed_values18.setFocus();
        		else if (obj.name == "ed_values21") this.ed_values19.setFocus();
        		else if (obj.name == "ed_values22") this.ed_values21.setFocus();
        		else if (obj.name == "ed_values23") this.ed_values22.setFocus();
        		else if (obj.name == "ed_values32") this.ed_values23.setFocus();
        		else if (obj.name == "ed_values24") this.ed_values32.setFocus();
        		else if (obj.name == "ed_values25") this.ed_values24.setFocus();
        		else if (obj.name == "ed_values26") this.ed_values25.setFocus();
        		else if (obj.name == "ed_values27") this.ed_values26.setFocus();
        		else if (obj.name == "ed_values28") this.ed_values27.setFocus();
        		else if (obj.name == "ed_values29") this.ed_values28.setFocus();
        		else if (obj.name == "ed_values30") this.ed_values29.setFocus();
        		else if (obj.name == "ed_values31") this.ed_values30.setFocus();
        	}
        	else if (e.keycode == 112) //F1 키...
        	{
        		if ((obj.name == "ed_values1") || (obj.name == "ed_values2"))
        		{
        			this.lfn_showModal("code", {setting:this.ed_values1.value}, "sd::frmBookcode.xfdl", "fnCodeCallback", this, 0, 0, 500, 585);
        			if(trim(code) != "0")
        			{
        				this.ed_values1.set_value(code.substr(0,10));
        				this.ed_values2.set_value(code.substr(10,4));
        				this.ed_values7.set_value(code.substr(14,code.length));
        				this.ed_values8.setFocus();
        			}
        		}
        	}
        };

        this.fnCodeCallback = function(sFormId, sArg)
        {
        	if(nexacro.trim(sArg) != "0")
        	{
        		this.ed_values1.set_value(sArg.substr(0,10));
        		this.ed_values2.set_value(sArg.substr(10,4));
        		this.ed_values7.set_value(sArg.substr(14,sArg.length));
        		this.ed_values1_onkillfocus();
        		this.ed_values8.setFocus();
        	}
        };

        this.common_onkillfocus = function(obj,e)
        {
        	var strUrl = "JSP/sd/dung_help1.jsp"
        	var strArg;
        	if ((nexacro.trim(obj.value)).length != 2)
        		return;

        	strArg = " Values1="+nexacro.wrapQuote(obj.value)+
        			 " Values2="+nexacro.wrapQuote(obj.name);
        	this.gfn_TransactionP("codesearch3", strUrl, "", "", strArg, "fnTr_Callback2", false, "P", false, this);
        };

        this.ed_values24_onkillfocus = function(obj,e)
        {
        	if (obj.value == "") return;
        	else if (obj.value == "0") this.ed_values25.set_index(0);
        	else if (obj.value == "1") this.ed_values25.set_index(1);
        	else if (obj.value == "2") this.ed_values25.set_index(2);
        };

        this.ed_values25_onitemchanged = function(obj,e)
        {
        	if (obj.text == "") return;
        	else if (obj.index == 0) this.ed_values24.set_value("0");
        	else if (obj.index == 1) this.ed_values24.set_value("1");
        	else if (obj.index == 2) this.ed_values24.set_value("2");
        };

        this.ed_values29_onkillfocus = function(obj,e)
        {
        	if (obj.value == "") return;
        	else if (obj.value == "0") this.ed_values30.set_index(0);
        	else if (obj.value == "1") this.ed_values30.set_index(1);
        	else if (obj.value == "2") this.ed_values30.set_index(2);
        	else if (obj.value == "3") this.ed_values30.set_index(3);
        };

        this.ed_values30_onitemchanged = function(obj,e)
        {
        	if (obj.text == "") return;
        	else if (obj.index == 0) this.ed_values29.set_value("0");
        	else if (obj.index == 1) this.ed_values29.set_value("1");
        	else if (obj.index == 2) this.ed_values29.set_value("2");
        	else if (obj.index == 3) this.ed_values29.set_value("3");
        };

        this.btn_copy_onclick = function(obj,e)
        {
        	this.lfn_showModal("copy", "", "sd::SD6241P.xfdl", "", this, 0, 0, 420, 160);
        };

        this.btn_code_search_onclick = function(obj,e)
        {
        	this.lfn_showModal("code_search", {setting:this.ed_values1.value}, "sd::frmBookcode.xfdl", "fnCodeCallback", this, 0, 0, 500, 585);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD6240F_onload,this);
            this.btn_code_search.addEventHandler("onclick",this.btn_code_search_onclick,this);
            this.ed_values2.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values2.addEventHandler("onkillfocus",this.ed_values1_onkillfocus,this);
            this.ed_values1.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values4.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values3.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.Static02_08.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_view.addEventHandler("oncelldblclick",this.grd_view_oncelldblclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_copy.addEventHandler("onclick",this.btn_copy_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
            this.btn_can.addEventHandler("onclick",this.btn_can_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_save.addEventHandler("onkeydown",this.btn_save_onkeydown,this);
            this.ed_values5.addEventHandler("onkillfocus",this.ed_values5_onkillfocus,this);
            this.ed_values6.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values7.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values9.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values8.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values10.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values10.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.ed_values11.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values12.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values13.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values13.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.ed_values14.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values15.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values16.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values16.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.ed_values17.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values18.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values19.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values19.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.ed_values20.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values21.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values22.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values23.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values32.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values28.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values24.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values24.addEventHandler("onkillfocus",this.ed_values24_onkillfocus,this);
            this.ed_values25.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values25.addEventHandler("onitemchanged",this.ed_values25_onitemchanged,this);
            this.ed_values26.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values27.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values29.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values29.addEventHandler("onkillfocus",this.ed_values29_onkillfocus,this);
            this.ed_values30.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values30.addEventHandler("onitemchanged",this.ed_values30_onitemchanged,this);
            this.ed_values31.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ds_book.addEventHandler("onload",this.ds_book_onload,this);
        };
        this.loadIncludeScript("SD6240F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
