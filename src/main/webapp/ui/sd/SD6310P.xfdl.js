(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD6310P");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(850,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bgbr", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK\">0</Col><Col id=\"CODE\">00</Col><Col id=\"NAME\">미등록</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_panh", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rpt", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">도서현황</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">속성코드별도서현황</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">출교율현황</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"DATA\">거래처출고율현황</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"DATA\">도서현황(종합)</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"DATA\">도서현황(New)</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"DATA\">속성코드별도서현황(종합)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mdcode", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"mdcode\" type=\"STRING\" size=\"256\"/><Column id=\"mnm\" type=\"STRING\" size=\"256\"/><Column id=\"dnm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chk\">0</Col><Col id=\"mdcode\">00</Col><Col id=\"mnm\">미등록</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_s_values1", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">판매용</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">교사용</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">타계정</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"DATA\">매입품</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"DATA\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_s_values6", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">면세</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">과세</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_1", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DANW_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DANW_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"YGUBN\" type=\"STRING\" size=\"256\"/><Column id=\"VAT_GB\" type=\"STRING\" size=\"256\"/><Column id=\"MEIP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SGRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SGRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"C_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"P_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"MOOK\" type=\"STRING\" size=\"256\"/><Column id=\"CPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"KWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"KWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ISBN_N\" type=\"STRING\" size=\"256\"/><Column id=\"BUGA_N\" type=\"STRING\" size=\"256\"/><Column id=\"PANH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PANH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"NYUK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_2", this);
            obj.set_keystring("SGRP_CODE");
            obj._setContents("<ColumnInfo><Column id=\"MCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DCODE\" type=\"STRING\" size=\"256\"/><Column id=\"MNM\" type=\"STRING\" size=\"256\"/><Column id=\"DNM\" type=\"STRING\" size=\"256\"/><Column id=\"SGRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SGRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DANW_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"YGUBN\" type=\"STRING\" size=\"256\"/><Column id=\"VAT_GB\" type=\"STRING\" size=\"256\"/><Column id=\"MEIP_C\" type=\"STRING\" size=\"256\"/><Column id=\"C_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"P_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"MOOK\" type=\"STRING\" size=\"256\"/><Column id=\"CPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"KWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ISBN_N\" type=\"STRING\" size=\"256\"/><Column id=\"BUGA_N\" type=\"STRING\" size=\"256\"/><Column id=\"PANH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"NYUK\" type=\"STRING\" size=\"256\"/><Column id=\"PANH_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_2_copy1", this);
            obj.set_keystring("SGRP_CODE");
            obj._setContents("<ColumnInfo><Column id=\"MCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DCODE\" type=\"STRING\" size=\"256\"/><Column id=\"MNM\" type=\"STRING\" size=\"256\"/><Column id=\"DNM\" type=\"STRING\" size=\"256\"/><Column id=\"SGRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SGRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DANW_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"YGUBN\" type=\"STRING\" size=\"256\"/><Column id=\"VAT_GB\" type=\"STRING\" size=\"256\"/><Column id=\"MEIP_C\" type=\"STRING\" size=\"256\"/><Column id=\"C_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"P_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"MOOK\" type=\"STRING\" size=\"256\"/><Column id=\"CPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"KWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ISBN_N\" type=\"STRING\" size=\"256\"/><Column id=\"BUGA_N\" type=\"STRING\" size=\"256\"/><Column id=\"PANH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"NYUK\" type=\"STRING\" size=\"256\"/><Column id=\"PANH_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_3", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"B_NM\" type=\"STRING\" size=\"256\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"SYMD\" type=\"STRING\" size=\"256\"/><Column id=\"EYMD\" type=\"STRING\" size=\"256\"/><Column id=\"YUL1\" type=\"STRING\" size=\"256\"/><Column id=\"YUL2\" type=\"STRING\" size=\"256\"/><Column id=\"YUL3\" type=\"STRING\" size=\"256\"/><Column id=\"YUL4\" type=\"STRING\" size=\"256\"/><Column id=\"COST\" type=\"STRING\" size=\"256\"/><Column id=\"B_YN\" type=\"STRING\" size=\"256\"/><Column id=\"B_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"B_YUL\" type=\"STRING\" size=\"256\"/><Column id=\"JUK_GB\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PCOST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_4", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"B_NM\" type=\"STRING\" size=\"256\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"SYMD\" type=\"STRING\" size=\"256\"/><Column id=\"CYUL\" type=\"STRING\" size=\"256\"/><Column id=\"CCOST\" type=\"STRING\" size=\"256\"/><Column id=\"B_YN\" type=\"STRING\" size=\"256\"/><Column id=\"B_GYMD\" type=\"STRING\" size=\"256\"/><Column id=\"B_YUL\" type=\"STRING\" size=\"256\"/><Column id=\"JUK_GB\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_5", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ISBN\" type=\"STRING\" size=\"256\"/><Column id=\"YGUBN\" type=\"STRING\" size=\"256\"/><Column id=\"VAT_GB\" type=\"STRING\" size=\"256\"/><Column id=\"MEIP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SGRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SGRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"C_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"P_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"MOOK\" type=\"STRING\" size=\"256\"/><Column id=\"MCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSCD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"YUL1\" type=\"STRING\" size=\"256\"/><Column id=\"YUL2\" type=\"STRING\" size=\"256\"/><Column id=\"YUL3\" type=\"STRING\" size=\"256\"/><Column id=\"YUL4\" type=\"STRING\" size=\"256\"/><Column id=\"COST\" type=\"STRING\" size=\"256\"/><Column id=\"PCOST\" type=\"STRING\" size=\"256\"/><Column id=\"B_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BSCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_6", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DANW_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DANW_NM\" type=\"STRING\" size=\"256\"/><Column id=\"YGUBN\" type=\"STRING\" size=\"256\"/><Column id=\"VAT_GB\" type=\"STRING\" size=\"256\"/><Column id=\"HAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MEIP_C\" type=\"STRING\" size=\"256\"/><Column id=\"MOOK\" type=\"STRING\" size=\"256\"/><Column id=\"SGRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SGRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"C_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"P_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"ISBN_N\" type=\"STRING\" size=\"256\"/><Column id=\"PANH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PANH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NYUK\" type=\"STRING\" size=\"256\"/><Column id=\"YUL1\" type=\"STRING\" size=\"256\"/><Column id=\"YUL2\" type=\"STRING\" size=\"256\"/><Column id=\"YUL3\" type=\"STRING\" size=\"256\"/><Column id=\"YUL4\" type=\"STRING\" size=\"256\"/><Column id=\"COST\" type=\"STRING\" size=\"256\"/><Column id=\"PCOST\" type=\"STRING\" size=\"256\"/><Column id=\"B_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BSCD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN\" type=\"STRING\" size=\"256\"/><Column id=\"BODYP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_7", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISBN\" type=\"STRING\" size=\"256\"/><Column id=\"YGUBN\" type=\"STRING\" size=\"256\"/><Column id=\"VAT_GB\" type=\"STRING\" size=\"256\"/><Column id=\"MEIP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SGRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SGRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"C_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"P_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"MOOK\" type=\"STRING\" size=\"256\"/><Column id=\"MCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSCD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"YUL1\" type=\"STRING\" size=\"256\"/><Column id=\"YUL2\" type=\"STRING\" size=\"256\"/><Column id=\"YUL3\" type=\"STRING\" size=\"256\"/><Column id=\"YUL4\" type=\"STRING\" size=\"256\"/><Column id=\"COST\" type=\"STRING\" size=\"256\"/><Column id=\"PCOST\" type=\"STRING\" size=\"256\"/><Column id=\"B_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BSCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","20","10","310","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("도서출고율 출력");
            obj.set_color("#7fb39d");
            obj.set_font("bold 28px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"20","45","20","13",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_font("8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","12","91","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("판매구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","107","91","205","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","12","119","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("도서코드");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","107","119","205","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","202","125","14","18",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","12","147","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("년판");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","107","147","205","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","202","153","14","18",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03","12","175","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("속성코드");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_02","107","175","205","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_02","202","181","14","18",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04","12","203","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("부가세구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03","107","203","205","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_05","12","259","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("출력물");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_04","107","259","205","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_s_values2","114","124","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@@@@@@@");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_s_values3","224","124","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@@@@@@@");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_s_values4","114","152","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_s_values5","224","152","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_06","12","63","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("리스트 검색");
            obj.set_background("#3cbcb8");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Combo("print_select","115","264","189","20",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_rpt");
            obj.set_datacolumn("DATA");
            obj.set_codecolumn("CODE");
            obj.set_value("5");
            obj.set_index("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"20","45","20","btn_close:10",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("출력");
            obj.set_font("bold 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("ed_s_values6","114","208","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_innerdataset("ds_s_values6");
            obj.set_datacolumn("DATA");
            obj.set_codecolumn("CODE");
            obj.set_text("입금자별입금현황");
            obj.set_value("5");
            obj.set_index("5");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_ecode","224","180","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_type("string");
            obj.set_format("@@@@@@@@@");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_scode","114","180","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_type("string");
            obj.set_format("@@@@@@@@@");
            this.addChild(obj.name, obj);

            obj = new Button("btn_preview",null,"20","65","20","btn_print:10",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("미리보기");
            obj.set_font("bold 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04_00","12","231","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("학기");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_00","107","231","205","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_hak","115","236","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("학년용");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_hak1","chk_hak:5","236","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("1학년");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_hak2","chk_hak1:5","236","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("2학기");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_bgbr","312","93","149","196",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_binddataset("ds_bgbr");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"23\"/><Column size=\"34\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:CODE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("ed_s_values1","114","96","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_s_values1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_tabstop("true");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mdcode","610","93","229","196",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_binddataset("ds_mdcode");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"23\"/><Column size=\"34\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"대분류\"/><Cell col=\"3\" text=\"중분류\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:mdcode\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:mnm\"/><Cell col=\"3\" text=\"bind:dnm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_panh","461","93","149","196",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_binddataset("ds_panh");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"23\"/><Column size=\"34\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:CODE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_06_00","311","75","150","18",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("도서구분");
            obj.set_background("#3cbcb8");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_06_00_00","460","75","150","18",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("도서유형");
            obj.set_background("#3cbcb8");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_06_00_00_00","609","75","230","18",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("도서분류");
            obj.set_background("#3cbcb8");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","294",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",850,300,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD6310P.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD6310P.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD6310P.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;

        var Find1_sw  = "N";
        var Find2_sw  = "N";
        var Find3_sw  = "N";
        var Fv_HeadChk1 = 0;                        //체크박스1.
        var Fv_HeadChk2 = 0;                        //체크박스2.
        var view_x = 0;				// 창 크기 변경 전 스크린에서 팝업창 x좌표
        var view_y = 0;				// 창 크기 변경 전 스크린에서 팝업창 y좌표
        var p_row = 0;


        this.SD6310P_onload = function(obj,e)
        {
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyy");
        	this.print_select.set_index(0);
        	this.ed_s_values1.set_index(4);
        	this.ed_s_values2.set_value("0000000000");
        	this.ed_s_values3.set_value("9999999999");
        	this.ed_s_values4.set_value(f_date);
        	this.ed_s_values5.set_value(f_date);
        	this.ed_scode.set_value("000000000");
        	this.ed_ecode.set_value("999999999");
        	this.ed_s_values6.set_index(2);

        	var strUrl = "JSP/sd/sel_bgbr.jsp";
        	var strDs 	= "ds_bgbr=ds_bgbr";
        	this.gfn_TransactionP("select", strUrl, strDs, strDs, "", "fnCallback", true, "P", false, this);

        	var strUrl2 = "JSP/sd/sel_panh.jsp";
        	var strDs2	= "ds_panh=ds_panh";
        	this.gfn_TransactionP("select2", strUrl, strDs2, strDs2, "", "fnCallback", true, "P", false, this);

        	var strUrl3 = "JSP/sd/sel_mdcode.jsp";
        	var strDs3 = "ds_mdcode=ds_mdcode";
        	this.gfn_TransactionP("select3", strUrl3, strDs3, strDs3, "", "fnCallback", true, "P", false, this);

        	this.ed_s_values1.setFocus();
        };

        this.fnCallback = function(strSvcID, nErrorCode, strErrorMag)
        {
        	if(nErrorCode != 0)
        	{
        		alert(strErrorMag);
        		return;
        	}
        }

        this.fnSelectfile = function(chk_value)
        {
        	if (chk_value=="0") return gv_urlMrd+"/sd/sd6222r.mrd";
        	else if (chk_value=="1") return gv_urlMrd+"/sd/sd6223r.mrd";
        	else if (chk_value=="2") return gv_urlMrd+"/sd/sd63101r.mrd";
        	else if (chk_value=="3") return gv_urlMrd+"/sd/sd63102r.mrd";
        	else if (chk_value=="4") return gv_urlMrd+"/sd/sd63103r.mrd";
        	else if (chk_value=="5") return gv_urlMrd+"/sd/sd63105r.mrd";

        	else if (chk_value=="6") return gv_urlMrd+"/sd/sd63104r.mrd";
        }

        this.fnGridcheck = function(strdsname)
        {
        	// 그리드 데이터 중에 체크된 데이터를 선별하여 리턴.
        	var strReturn="";

        	if (strdsname == "ds_mdcode")
        	{
        		for (var loop = 0; loop < this.ds_mdcode.rowcount; loop++)
        			if (this.ds_mdcode.getColumn(loop,"chk") == '1')
        			{
        			    Find1_sw  = "Y";
        				strReturn = strReturn +"'"+this.ds_mdcode.getColumn(loop,"mdcode")+"',";
        			}
        	}

        	if (strdsname == "ds_bgbr")
        	{
        		for (var loop = 0; loop < this.ds_bgbr.rowcount; loop++)
        			if (this.ds_bgbr.getColumn(loop,"CHK") == '1')
        			{
        			    Find2_sw  = "Y";
        				strReturn = strReturn +"'"+this.ds_bgbr.getColumn(loop,"CODE")+"',";
        			}
        	}

        	if (strdsname == "ds_panh")
        	{
        		for (var loop = 0; loop < this.ds_panh.rowcount; loop++)
        			if (this.ds_panh.getColumn(loop,"chk") == '1')
        			{
        			    Find3_sw  = "Y";
        				strReturn = strReturn +"'"+this.ds_panh.getColumn(loop,"CODE")+"',";
        			}
        	}


        	//마지막 쉼표 삭제.
        	return strReturn.substr(0, strReturn.length -1);
        }

        this.btn_print_onclick = function(obj,e)
        {
        	var rdfile = this.fnSelectfile(this.print_select.index);
        	var s_sql1, s_sql2, Hak_g;
        	var Line_sw;
        	Find1_sw  = "N";
        	Find3_sw  = "N";
        	s_sql1     = "";
        	s_sql2     = "";
        	var bgbr      = this.fnGridcheck("ds_bgbr");
        	var r_sel     = this.fnGridcheck("ds_mdcode");
        	var panh	  = this.fnGridcheck("ds_panh");

        	if (( this.print_select.index == 0 ) || ( this.print_select.index == 1 ) || ( this.print_select.index == 4 ) || ( this.print_select.index == 5 ) || ( this.print_select.index == 6 ))
        	{
        		s_sql1     = "    AND  A.CODE >=  '" + this.ed_s_values2.value +"'";
        		s_sql1     = s_sql1 + "    AND  A.CODE <=  '" + this.ed_s_values3.value +"'";
        		s_sql1     = s_sql1 + "    AND  A.yy >=  '" + this.ed_s_values4.value +"'";
        		s_sql1     = s_sql1 + "    AND  A.yy <=  '" + this.ed_s_values5.value +"'";
        		if ( Find2_sw == "Y" )
        		{
        			s_sql1    = s_sql1 + "    and  a.bgbr_cd in ( " + bgbr +" ) ";
        		}

        		if ( Find1_sw == "Y" )
        		{
        			s_sql1    = s_sql1 + "   and substr(a.sgrp_code,1,2) in ( " + r_sel +" ) ";
        		}

        		if ( Find3_sw == "Y" )
        		{
        			s_sql1    = s_sql1 + "   and a.panh_cd in ( " + panh +" ) ";
        		}


        		if (((nexacro.trim(this.ed_scode.value)).length == 9) && ((nexacro.trim(this.ed_ecode.value)).length == 9))
        		{
        			s_sql1     = s_sql1 + "    AND  A.sgrp_code >=  '" + this.ed_scode.value +"'";
        			s_sql1     = s_sql1 + "    AND  A.sgrp_code <=  '" + this.ed_ecode.value +"'";
        		}
        		Hak_g      = "4";
        		if ( this.ed_s_values1.index == 0 )
        		{
        			s_sql1     =  s_sql1 + "  and  A.meip_c = '0'  ";
        			Hak_g      = "0";
        		}
        		else if ( this.ed_s_values1.index == 1 )
        		{
        			s_sql1     =  s_sql1 + " and   A.meip_c = '1'  ";
        			Hak_g      = "1";
        		}
        		else if ( this.ed_s_values1.index == 2 )
        		{
        			s_sql1     =  s_sql1 + " and   A.meip_c = '2'  ";
        			Hak_g      = "2";
        		}
        		else if ( this.ed_s_values1.index == 3 )
        		{
        			s_sql1     =  s_sql1 + " and   A.meip_c = '3'  ";
        			Hak_g      = "3";
        		}
        		if ( this.ed_s_values6.index == 0 )
        		{
        			s_sql1     =  s_sql1 + "  and  A.VAT_GB = '0'  ";
        		}
        		else if ( this.ed_s_values6.index == 1 )
        		{
        			s_sql1     =  s_sql1 + " and   A.VAT_GB = '3'  ";
        		}

        		Line_sw    =  "N";
        		if (( this.chk_hak.value == "1" ) || ( this.chk_hak1.value == "1" ) || ( this.chk_hak2.value == "1" ))
        		{
        			s_sql1    = s_sql1 + "    and  A.book_hcode in (  ";
        			if ( this.chk_hak.value == "1" )
        			{
        				s_sql1    = s_sql1 + " '00' ";
        				Line_sw  = "Y";
        			}
        			if (( Line_sw == "Y"  ) && ( this.chk_hak1.value == "1"  ))
        			{
        				s_sql1    = s_sql1 + ", '01' ";
        				Line_sw   = "Y";
        			}
        			else if (( Line_sw == "N"  ) && ( this.chk_hak1.value == "1"  ))
        			{
        				s_sql1    = s_sql1 + " '01' ";
        				Line_sw   = "Y";
        			}
        			if (( Line_sw == "Y"  ) && ( this.chk_hak2.value == "1"  ))
        			{
        				s_sql1    = s_sql1 + ", '02' ";
        				Line_sw   = "Y";
        			}
        			else if (( Line_sw == "N"  ) && ( this.chk_hak2.value == "1"  ))
        			{
        				s_sql1    = s_sql1 + " '02' ";
        				Line_sw   = "Y";
        			}
        			s_sql1      = s_sql1 + "    )  ";
        		}
        		if ( this.print_select.index == 0 )
        			s_sql1     = s_sql1 + "  ORDER BY A.CODE, A.YY ";
        		else if ( this.print_select.index == 1 )
        			s_sql1     = s_sql1 + "  ORDER BY a.SGRP_CODE, A.CODE, A.YY ";
        		else if ( this.print_select.index == 2 )
        			s_sql1     = s_sql1 + "  ORDER BY  A.CODE, A.YY ";
        		if ( this.print_select.index == 5 )
        		{
        			s_sql2     = "    AND  A.BOOKMST_CODE >=  '" + this.ed_s_values2.value +"'";
        			s_sql2     = s_sql2 + "    AND  A.BOOKMST_CODE <=  '" + this.ed_s_values3.value +"'";
        			s_sql2     = s_sql2 + "    AND  A.BOOKMST_YEAR >=  '" + this.ed_s_values4.value +"'";
        			s_sql2     = s_sql2 + "    AND  A.BOOKMST_YEAR <=  '" + this.ed_s_values5.value +"'";
        		}
        	}
        	else  if ( this.print_select.index == 2 )
        	{
        		s_sql1     = "    AND  A.CODE >=  '" + this.ed_s_values2.value +"'";
        		s_sql1     = s_sql1 + "    AND  A.CODE <=  '" + this.ed_s_values3.value +"'";
        		s_sql1     = s_sql1 + "    AND  A.yy >=  '" + this.ed_s_values4.value +"'";
        		s_sql1     = s_sql1 + "    AND  A.yy <=  '" + this.ed_s_values5.value +"'";
        		if ( Find2_sw == "Y" )
        		{
        			s_sql1    = s_sql1 + "    and  b.bgbr_cd in ( " + bgbr +" ) ";
        		}

        		if ( Find1_sw == "Y" )
        		{
        			s_sql1    = s_sql1 + "   and substr(a.sgrp_code,1,2) in ( " + r_sel +" ) ";
        		}

        		if ( Find3_sw == "Y" )
        		{
        			s_sql1    = s_sql1 + "   and a.panh_cd in ( " + panh +" ) ";
        		}

        		if (((nexacro.trim(this.ed_scode.value)).length == 9) && ((nexacro.trim(this.ed_ecode.value)).length == 9))
        		{
        			s_sql1     = s_sql1 + "    AND  b.sgrp_code >=  '" + this.ed_scode.value +"'";
        			s_sql1     = s_sql1 + "    AND  b.sgrp_code <=  '" + this.ed_ecode.value +"'";
        		}
        		Hak_g      = "4";
        		if ( this.ed_s_values1.index == 0 )
        		{
        			s_sql1     =  s_sql1 + "  and  b.meip_c = '0'  ";
        			Hak_g      = "0";
        		}
        		else if ( this.ed_s_values1.index == 1 )
        		{
        			s_sql1     =  s_sql1 + " and   b.meip_c = '1'  ";
        			Hak_g      = "1";
        		}
        		else if ( this.ed_s_values1.index == 2 )
        		{
        			s_sql1     =  s_sql1 + " and   b.meip_c = '2'  ";
        			Hak_g      = "2";
        		}
        		else if ( this.ed_s_values1.index == 3 )
        		{
        			s_sql1     =  s_sql1 + " and   b.meip_c = '3'  ";
        			Hak_g      = "3";
        		}
        		if ( this.ed_s_values6.index == 0 )
        		{
        			s_sql1     =  s_sql1 + "  and  b.VAT_GB = '0'  ";
        		}
        		else if ( this.ed_s_values6.index == 1 )
        		{
        			s_sql1     =  s_sql1 + " and   b.VAT_GB = '3'  ";
        		}

        		Line_sw    =  "N";
        		if (( this.chk_hak.value == "1" ) || ( this.chk_hak1.value == "1" ) || ( this.chk_hak2.value == "1" ))
        		{
        			s_sql1    = s_sql1 + "    and  b.book_hcode in (  ";
        			if ( this.chk_hak.value == "1" )
        			{
        				s_sql1    = s_sql1 + " '00' ";
        				Line_sw  = "Y";
        			}
        			if (( Line_sw == "Y"  ) && ( this.chk_hak1.value == "1"  ))
        			{
        				s_sql1    = s_sql1 + ", '01' ";
        				Line_sw   = "Y";
        			}
        			else if (( Line_sw == "N"  ) && ( this.chk_hak1.value == "1"  ))
        			{
        				s_sql1    = s_sql1 + " '01' ";
        				Line_sw   = "Y";
        			}
        			if (( Line_sw == "Y"  ) && ( this.chk_hak2.value == "1"  ))
        			{
        				s_sql1    = s_sql1 + ", '02' ";
        				Line_sw   = "Y";
        			}
        			else if (( Line_sw == "N"  ) && ( this.chk_hak2.value == "1"  ))
        			{
        				s_sql1    = s_sql1 + " '02' ";
        				Line_sw   = "Y";
        			}
        			s_sql1      = s_sql1 + "    )  ";
        		}
        		s_sql1     = s_sql1 + "  ORDER BY  A.CODE, A.YY ";
        	}
        	else  if ( this.print_select.index == 3 )
        	{
        		s_sql1     = "    AND  A.book_cd >=  '" + this.ed_s_values2.value +"'";
        		s_sql1     = s_sql1 + "    AND  A.book_cd <=  '" + this.ed_s_values3.value +"'";
        		s_sql1     = s_sql1 + "    AND  A.yy >=  '" + this.ed_s_values4.value +"'";
        		s_sql1     = s_sql1 + "    AND  A.yy <=  '" + this.ed_s_values5.value +"'";
        		if ( Find2_sw == "Y" )
        		{
        			s_sql1    = s_sql1 + "    and  b.bgbr_cd in ( " + bgbr +" ) ";
        		}

        		if ( Find1_sw == "Y" )
        		{
        			s_sql1    = s_sql1 + "   and substr(a.sgrp_code,1,2) in ( " + r_sel +" ) ";
        		}

        		if ( Find3_sw == "Y" )
        		{
        			s_sql1    = s_sql1 + "   and a.panh_cd in ( " + panh +" ) ";
        		}

        		if (((nexacro.trim(this.ed_scode.value)).length == 9) && ((nexacro.trim(this.ed_ecode.value)).length == 9))
        		{
        			s_sql1     = s_sql1 + "    AND  b.sgrp_code >=  '" + this.ed_scode.value +"'";
        			s_sql1     = s_sql1 + "    AND  b.sgrp_code <=  '" + this.ed_ecode.value +"'";
        		}
        		Hak_g      = "4";
        		if ( this.ed_s_values1.index  == 0 )
        		{
        			s_sql1     =  s_sql1 + "  and  b.meip_c = '0'  ";
        			Hak_g      = "0";
        		}
        		else if ( this.ed_s_values1.index == 1 )
        		{
        			s_sql1     =  s_sql1 + " and   b.meip_c = '1'  ";
        			Hak_g      = "1";
        		}
        		else if ( this.ed_s_values1.index == 2 )
        		{
        			s_sql1     =  s_sql1 + " and   b.meip_c = '2'  ";
        			Hak_g      = "2";
        		}
        		else if ( this.ed_s_values1.index == 3 )
        		{
        			s_sql1     =  s_sql1 + " and   b.meip_c = '3'  ";
        			Hak_g      = "3";
        		}
        		if ( this.ed_s_values6.index == 0 )
        		{
        			s_sql1     =  s_sql1 + "  and  b.VAT_GB = '0'  ";
        		}
        		else if ( this.ed_s_values6.index == 1 )
        		{
        			s_sql1     =  s_sql1 + " and   b.VAT_GB = '3'  ";
        		}

        		Line_sw    =  "N";
        		if (( this.chk_hak.value == "1" ) || ( this.chk_hak1.value == "1" ) || ( this.chk_hak2.value == "1" ))
        		{
        			s_sql1    = s_sql1 + "    and  b.book_hcode in (  ";
        			if ( this.chk_hak.value == "1" )
        			{
        				s_sql1    = s_sql1 + " '00' ";
        				Line_sw  = "Y";
        			}
        			if (( Line_sw == "Y"  ) && ( this.chk_hak1.value == "1"  ))
        			{
        				s_sql1    = s_sql1 + ", '01' ";
        				Line_sw   = "Y";
        			}
        			else if (( Line_sw == "N"  ) && ( this.chk_hak1.value == "1"  ))
        			{
        				s_sql1    = s_sql1 + " '01' ";
        				Line_sw   = "Y";
        			}
        			if (( Line_sw == "Y"  ) && ( this.chk_hak2.value == "1"  ))
        			{
        				s_sql1    = s_sql1 + ", '02' ";
        				Line_sw   = "Y";
        			}
        			else if (( Line_sw == "N"  ) && ( this.chk_hak2.value == "1"  ))
        			{
        				s_sql1    = s_sql1 + " '02' ";
        				Line_sw   = "Y";
        			}
        			s_sql1      = s_sql1 + "    )  ";
        		}
        		s_sql1     = s_sql1 + "  ORDER BY  a.cust_gb, a.cust_cd, a.book_cd, a.yy ";
        	}
        	if(obj.name == "btn_print")
        	{
        		var rdopt  = "/rp ["+this.ed_s_values2.value+"]"+
        			 "["+this.ed_s_values3.value+"]"+
        			 "["+this.ed_s_values4.value+"]"+
        			 "["+this.ed_s_values5.value+"]"+
        			 "["+this.ed_s_values1.value+"]"+
        			 "["+this.ed_s_values6.value+"]"+
        			 "["+this.ed_scode.value+"]"+
        			 "["+this.ed_ecode.value+"]"+
        			 "["+Hak_g+"]"+
        			 "["+s_sql1+"]"+
        			 "["+s_sql2+"]";

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

        		var objParam = {rdUrl:rdfile, rdParam:rdopt};
        		var sOpenStyle = "topmost=true autosize=false dragmovetype=all titletext=조회화면 showtitlebar=true showstatusbar=false resizable=true";
        		nexacro.open("print_rpt", "sd::SDRDF.xfdl", this.getOwnerFrame(), objParam, sOpenStyle, rect.left, rect.top, rect.width, rect.height, this);
        	}
        	else
        	{
        		if(this.Div00.visible == false)
        		{
        			view_x = system.clientToScreenX(this, 0);
        			view_y = system.clientToScreenY(this, 0);
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

        			if(system.navigatorname == 'nexacro')
        			{
        				this.getOwnerFrame().set_left(rect.left);
        				this.getOwnerFrame().set_top(rect.top);
        				this.getOwnerFrame().set_width(rect.width);
        				this.getOwnerFrame().set_height(rect.height);
        			}
        			else
        			{
        				//window.moveTo(rect.left, rect.top); 		moveTo 안먹힘
        				window.resizeTo(rect.width,rect.height);
        			}
        			this.Div00.set_visible(true);
        			this.btn_preview.set_text("미리보기 닫기");
        			this.btn_preview.set_width(90);

        			var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        						 "s_sql2="+nexacro.wrapQuote(s_sql2);

        			switch(this.print_select.index)
        			{
        				case 0:
        					var strDs = "ds_1=ds_1";
        					this.Div00.set_url("sd::SD6310P_GRID1.xfdl");
        					this.gfn_TransactionP("ds_1","JSP/sd/SD6310P_DS1_SELECT.jsp", strDs, strDs, strArg, "fnDSCallback", true, "P", false, this);
        					break;
        				case 1:
        					var strDs = "ds_2=ds_2";
        					this.Div00.set_url("sd::SD6310P_GRID2.xfdl");
        					this.gfn_TransactionP("ds_2","JSP/sd/SD6310P_DS2_SELECT.jsp", strDs, strDs, strArg, "fnDSCallback", true, "P", false, this);
        					break;
        				case 2:
        					var strDs = "ds_3=ds_3";
        					this.Div00.set_url("sd::SD6310P_GRID3.xfdl");
        					this.gfn_TransactionP("ds_3","JSP/sd/SD6310P_DS3_SELECT.jsp", strDs, strDs, strArg, "fnDSCallback", true, "P", false, this);
        					break;
        				case 3:
        					var strDs = "ds_4=ds_4";
        					this.Div00.set_url("sd::SD6310P_GRID4.xfdl");
        					this.gfn_TransactionP("ds_4","JSP/sd/SD6310P_DS4_SELECT.jsp", strDs, strDs, strArg, "fnDSCallback", true, "P", false, this);
        					break;
        				case 4:
        					var strDs = "ds_5=ds_5";
        					this.Div00.set_url("sd::SD6310P_GRID5.xfdl");
        					this.gfn_TransactionP("ds_5","JSP/sd/SD6310P_DS5_SELECT.jsp", strDs, strDs, strArg, "fnDSCallback", true, "P", false, this);
        					break;
        				case 5:
        					var strDs = "ds_6=ds_6";
        					this.Div00.set_url("sd::SD6310P_GRID6.xfdl");
        					this.gfn_TransactionP("ds_6","JSP/sd/SD6310P_DS6_SELECT.jsp", strDs, strDs, strArg, "fnDSCallback", true, "P", false, this);
        					break;
        				case 6:
        					var strDs = "ds_7=ds_7";
        					this.Div00.set_url("sd::SD6310P_GRID7.xfdl");
        					this.gfn_TransactionP("ds_7","JSP/sd/SD6310P_DS7_SELECT.jsp", strDs, strDs, strArg, "fnDSCallback", true, "P", false, this);
        					break;
        			}
        		}
        		else
        		{
        			if(system.navigatorname == 'nexacro')
        			{
        				this.getOwnerFrame().set_left(view_x);
        				this.getOwnerFrame().set_top(view_y-20); // 타이틀 바 크기
        				this.getOwnerFrame().set_width(850);
        				this.getOwnerFrame().set_height(320);
        			}
        			else
        			{
        				//window.moveTo(view_x, view_y-20);  	moveTo 안먹힘
        				window.resizeTo(870, 370);
        			}
        			this.btn_preview.set_text("미리보기");
        			this.btn_preview.set_width(65);
        			this.ds_1.clearData();
        			this.ds_2.clearData();
        			this.ds_3.clearData();
        			this.ds_4.clearData();
        			this.ds_5.clearData();
        			this.ds_6.clearData();
        			this.ds_7.clearData();
        			this.Div00.set_visible(false);
        		}
        	}
        };

        this.fnDSCallback = function(strID, ErrorCode, ErrorMsg)
        {
        	if(ErrorCode != 0)
        	{
        		alert(ErrorMsg);
        		return;
        	}
        	if(strID == "ds_2")
        	{
        		this.ds_2_copy1.copyData(this.ds_2);
        		this.ds_2_copy1.set_keystring('');
        		for(var i = 0; i < this.ds_2.rowcount; i++)
        		{
        			if(this.ds_2.getRowLevel(i) == 1)
        			{
        				this.fnGetRowData(i);
        			}
        		}
        		p_row = 0;
        	}
        }

        this.fnGetRowData = function(i)
        {
        	this.ds_2_copy1.insertRow(i);
        	this.ds_2_copy1.copyRow(i, this.ds_2_copy1, i-1);
        	var value1=0, value2=0, value3=0, value4=0, value5=0, value6=0, value7=0, value8=0, value9=0, cnt = 0;
        	for(p_row; p_row < i; p_row++)
        	{
        		var panh_cd = this.ds_2_copy1.getColumn(p_row, "PANH_CD");
        		switch(panh_cd)
        		{
        			case '01': value1 += 1; break;
        			case '02': value2 += 1; break;
        			case '03': value3 += 1; break;
        			case '04': value4 += 1; break;
        			case '05': value5 += 1; break;
        			case '06': value6 += 1; break;
        			case '07': value7 += 1; break;
        			case '08': value8 += 1; break;
        			case '00': value9 += 1; break;
        		}
        		cnt += 1;
        	}
        	this.ds_2_copy1.setColumn(i, "CODE", "신간 : " + value1);
        	this.ds_2_copy1.setColumn(i, "BOOK_NM", "재편 : " + value2 + "     표지교체 : " + value3 + "     수정(재생가) : " + value4 + "     수정(재생불가) : " + value5);
        	this.ds_2_copy1.setColumn(i, "BGBR_NM", "무 : " + value6);
        	this.ds_2_copy1.setColumn(i, "VAT_GB", "케이스교체 : " + value7);
        	this.ds_2_copy1.setColumn(i, "PANH_NM", "폐간 : " + value8);
        	this.ds_2_copy1.setColumn(i, "ISBN_N", "유형X : " + value9);
        	this.ds_2_copy1.setColumn(i, "NYUK", "권수 : " + cnt);

        	this.ds_2_copy1.setColumn(i, "YY", "");
        	this.ds_2_copy1.setColumn(i, "C_YMD", "");
        	this.ds_2_copy1.setColumn(i, "MEIP_C", "");
        	this.ds_2_copy1.setColumn(i, "MOOK", "");
        	this.ds_2_copy1.setColumn(i, "YGUBN", "");
        	p_row += 1;
        }

        this.fnExpr_buse = function(code, name)
        {
        	if (code.valueOf() == "undefined" || name.valueOf() == "undefined" ) return '';
        	else return code + ')' + name;
        }

        this.fnNullChk = function(value)
        {
        	if (value.valueOf() == "undefined" || value == null ) return '';
        	else return value;
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD6310P_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.ed_s_values2.addEventHandler("onkillfocus",this.ed_jukyocd_onkillfocus,this);
            this.ed_s_values2.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_s_values3.addEventHandler("onkillfocus",this.ed_jukyocd_onkillfocus,this);
            this.ed_s_values3.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_s_values4.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_s_values4.addEventHandler("onkillfocus",this.ed_values5_onkillfocus,this);
            this.ed_s_values5.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_s_values5.addEventHandler("onkillfocus",this.ed_values6_onkillfocus,this);
            this.print_select.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
            this.btn_print.addEventHandler("onkeydown",this.btn_print_onkeydown,this);
            this.ed_s_values6.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_ecode.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_scode.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.btn_preview.addEventHandler("onclick",this.btn_print_onclick,this);
            this.btn_preview.addEventHandler("onkeydown",this.btn_print_onkeydown,this);
            this.ed_s_values1.addEventHandler("onitemchanged",this.ed_values5_1_onitemchanged,this);
        };
        this.loadIncludeScript("SD6310P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
