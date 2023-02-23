(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD6311P");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(870,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_s_values1", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">판매용</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">교사용</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">타계정</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"DATA\">매입품</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"DATA\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_book", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"BGRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DANW_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DANW_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"YGUBN\" type=\"STRING\" size=\"256\"/><Column id=\"VAT_GB\" type=\"STRING\" size=\"256\"/><Column id=\"MEIP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SGRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SGRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"C_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"P_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"MOOK\" type=\"STRING\" size=\"256\"/><Column id=\"CPAGE\" type=\"INT\" size=\"256\"/><Column id=\"KWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"KWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ISBN_N\" type=\"STRING\" size=\"256\"/><Column id=\"BUGA_N\" type=\"STRING\" size=\"256\"/><Column id=\"PANH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PANH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TPAGE\" type=\"INT\" size=\"256\"/><Column id=\"NYUK\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"I_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"JBOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JBOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYMD\" type=\"STRING\" size=\"256\"/><Column id=\"EYMD\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG_CD1\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG_CD3\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG_CD4\" type=\"STRING\" size=\"256\"/><Column id=\"YUL1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YUL2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YUL3\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YUL4\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"COST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PCOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"B_YN\" type=\"STRING\" size=\"256\"/><Column id=\"B_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"B_YUL\" type=\"STRING\" size=\"256\"/><Column id=\"JUK_GB\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG1_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG3_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG4_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"PALLET_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_KIND\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_book_y", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"SYMD\" type=\"STRING\" size=\"256\"/><Column id=\"CYUL\" type=\"INT\" size=\"256\"/><Column id=\"CCOST\" type=\"INT\" size=\"256\"/><Column id=\"B_YN\" type=\"STRING\" size=\"256\"/><Column id=\"B_GYMD\" type=\"STRING\" size=\"256\"/><Column id=\"B_YUL\" type=\"INT\" size=\"256\"/><Column id=\"JUK_GB\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_book_bscd", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"BSCD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JYMD\" type=\"STRING\" size=\"256\"/><Column id=\"JYUL\" type=\"INT\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bookmst", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_SALE\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FRM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_SIGNATURE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BOOKMST_BODYPAGE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BOOKMST_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BOOKMST_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bookdtl", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKDTL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"USE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_PSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COAT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COAT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_BUL\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_GANGED\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_TONE1\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_TONE2\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","20","10","280","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("도서정보 엑셀전환");
            obj.set_color("#7fb39d");
            obj.set_font("bold 28px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","12","91","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("도서구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","107","91","205","30",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","12","119","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("도서코드");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","107","119","205","30",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","202","125","14","18",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","12","147","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("도서년판");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","107","147","205","30",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","202","153","14","18",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_05","12","175","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("도서명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_04","107","175","205","30",null,null,null,null,null,null,this);
            obj.set_taborder("82");
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
            obj.set_taborder("3");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_s_values5","224","152","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_06","12","63","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("리스트 검색");
            obj.set_background("#3cbcb8");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Combo("ed_s_values1","114","96","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_innerdataset("ds_s_values1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_tabstop("true");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_s_values6","115","180","189","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","320","63","2","490",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_background("#10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","Static02:44","88","54","15",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("도서코드");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_all1","Static02:30","63","125","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_color("#01656f");
            obj.set_font("bold 12pt/normal \"Arial\"");
            obj.set_text(" 도서구분 ");
            obj.set_iconPosition("right");
            obj.set_textAlign("left");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","Static02:44","108","54","15",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("년판");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box1_1","Static02:0","Static04_00:5","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("도서명 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box1_2","Static02:0","148","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("유형 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box1_3","Static02:0","168","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("종속코드 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box1_19","Static02:0","188","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("로케이션 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box1_4","Static04:37","88","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("부가세구분 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box1_5","Static04_00:37","108","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("속성코드 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box1_6","chk_box1_1:20","128","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("출고기한 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box1_7","chk_box1_2:20","148","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("묶음 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box1_8","chk_box1_3:20","168","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("도서유형 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box1_20","chk_box1_19:20","188","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("파레트수량 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box1_9","chk_box1_4:20","88","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("종수 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box1_10","chk_box1_5:20","108","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("비고 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box1_11","chk_box1_6:20","128","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("도서구분 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box1_12","chk_box1_7:20","148","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("도서형태 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box1_13","chk_box1_8:20","168","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("과목 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box1_21","chk_box1_20:20","188","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("박스수량 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box1_14","chk_box1_9:20","88","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("학년구분 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box1_15","chk_box1_10:20","108","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("출판일 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box1_16","chk_box1_11:20","128","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("구분 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box1_17","chk_box1_12:20","148","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("(ISBN) ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box1_18","chk_box1_13:20","168","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("부가번호 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box1_22","chk_box1_21:15","188","120","15",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("연판/무연판구분 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_all2","Static02:30","218","125","20",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_color("#01656f");
            obj.set_font("bold 12pt/normal \"Arial\"");
            obj.set_text("기초출고율 ");
            obj.set_iconPosition("right");
            obj.set_textAlign("left");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box2_1","Static02:0","243","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("시리즈명 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box2_2","Static02:0","263","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("시행일자 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box2_3","Static02:0","283","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("출고율1 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box2_4","chk_box2_1:20","243","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("출고율2 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box2_5","chk_box2_2:20","263","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("출고율3 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box2_6","chk_box2_3:20","283","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("출고율4 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box2_7","chk_box2_4:20","243","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("판매단가 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box2_8","chk_box2_5:20","263","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("반품구분 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box2_9","chk_box2_6:20","283","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("적용구분 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box2_10","chk_box2_7:20","243","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("정가 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box2_11","chk_box2_8:20","263","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("비고 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_all3","Static02:30","313","125","20",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_color("#01656f");
            obj.set_font("bold 12pt/normal \"Arial\"");
            obj.set_text("거래처출고율 ");
            obj.set_iconPosition("right");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box3_1","Static02:0","338","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("시행일자 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box3_2","Static02:0","358","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("출고율 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box3_3","Static02:0","378","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("정가 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box3_5","chk_box3_1:20","338","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("반품기한 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box3_6","chk_box3_2:20","358","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("한도율 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box3_7","chk_box3_3:20","378","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("적용구분 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box4_1","chk_box3_5:20","338","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("부서명 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box4_2","chk_box3_6:20","358","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("개발완료 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box4_3","chk_box3_7:20","378","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("점유율 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box3_4","Static02:0","398","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("반품구분 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box3_8","chk_box3_4:20","398","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("OLD번호 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_all4","607","313","125","20",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_color("#01656f");
            obj.set_font("bold 12pt/normal \"Arial\"");
            obj.set_text("개발부서정보 ");
            obj.set_iconPosition("right");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_all5","Static02:30","428","125","20",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_color("#01656f");
            obj.set_font("bold 12pt/normal \"Arial\"");
            obj.set_text("제작도서정보 ");
            obj.set_iconPosition("right");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box5_1","Static02:0","453","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("순번 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box5_2","Static02:0","473","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("도서명 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box5_3","Static02:0","493","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("도서구분 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box5_5","chk_box5_1:20","453","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("제본 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box5_6","chk_box5_2:20","473","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("본수 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box5_7","chk_box5_3:20","493","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("대수 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box6_1","chk_box5_5:20","453","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("용도 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box6_2","chk_box5_6:20","473","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("용지 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box6_3","chk_box5_7:20","493","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("코팅 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box5_4","Static02:0","513","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("판형 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_all6","607","428","125","20",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_color("#01656f");
            obj.set_font("bold 12pt/normal \"Arial\"");
            obj.set_text("제작사양정보 ");
            obj.set_iconPosition("right");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static03",null,"316","5","14","chk_all3:-1",null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_background("#14b0aa");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00",null,"221","5","14","chk_all2:-1",null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_background("#14b0aa");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00",null,"66","5","14","chk_all1:-1",null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_background("#14b0aa");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01",null,"431","5","14","chk_all5:-1",null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_background("#14b0aa");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02",null,"316","5","14","chk_all4:-1",null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_background("#14b0aa");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01_00",null,"431","5","14","chk_all6:-1",null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_background("#14b0aa");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box6_4","chk_box5_7:20","513","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("쪽수 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box6_5","chk_box6_1:20","453","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("벌 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box6_6","chk_box6_2:20","473","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("돈뎅 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box6_7","chk_box6_3:20","493","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("색도 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_box6_8","chk_box6_4:20","513","115","15",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("특이사항 ");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("black");
            obj.set_iconPosition("right");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","330","538","380","15",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("▶ 항복선택시 꼭! 대분류 타이블에 체크가 되어져 있어야합니다.");
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"26","75","26","28",null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("닫기");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel",null,"26","75","26","btn_close:10",null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("엑셀변환");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_excel","34","230","240","158",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_autosizingtype("both");
            obj.set_autosizebandtype("allband");
            obj.set_visible("false");
            obj._setContents("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",870,560,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD6311P.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD6311P.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD6311P.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;

        var chk1_cnt = 22;
        var chk2_cnt = 11;
        var chk3_cnt = 8;
        var chk4_cnt = 3;
        var chk5_cnt = 7;
        var chk6_cnt = 8;

        this.SD6311P_onload = function(obj,e)
        {
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyy");
        	this.ed_s_values1.set_index(0);
        	this.ed_s_values2.set_value("0000000000");
        	this.ed_s_values3.set_value("1199999999");
        	this.ed_s_values4.set_value("2010");
        	this.ed_s_values5.set_value(f_date);
        };

        this.chk_all_canchange = function(obj,e)
        {
        	var cnt;
        	var objComp = obj;
        	switch(obj.name)
        	{
        		case 'chk_all1': cnt = chk1_cnt; break;
        		case 'chk_all2': cnt = chk2_cnt; break;
        		case 'chk_all3': cnt = chk3_cnt; break;
        		case 'chk_all4': cnt = chk4_cnt; break;
        		case 'chk_all5': cnt = chk5_cnt; break;
        		case 'chk_all6': cnt = chk6_cnt; break;
        	}
        	for(var i = 0; i < cnt; i++)
        	{
        		objComp = this.getNextComponent(objComp);
        		objComp.set_value(e.postvalue);
        	}
        };

        this.fnCheckBoxChk = function(id)
        {
        	var cnt;
        	var ret = false;
        	switch(id)
        	{
        		case '1': cnt = chk1_cnt; break;
        		case '2': cnt = chk2_cnt; break;
        		case '3': cnt = chk3_cnt; break;
        		case '4': cnt = chk4_cnt; break;
        		case '5': cnt = chk5_cnt; break;
        		case '6': cnt = chk6_cnt; break;
        	}
        	for(var i = 1; i < cnt+1; i++)
        	{
        		var strComp = 'chk_box'+id+'_'+i;
        		ret = ret || this.all[strComp].value
        	}
        	return ret;
        }

        this.fnConv = function(code_gubn, code)
        {
        	//부가세구분
        	if (code_gubn =="VAT_GB")
        	{
        		if (code == "0") return "면세";
        		else if (code == "3") return "과세";
        		else return "";
        	}
        	else if (code_gubn =="MEIP_C") //출고유형
        	{
        		if (code == "0") return "판매용";
        		else if (code == "1") return "교사용";
        		else if (code == "2") return "타계정";
        		else if (code == "3") return "매입품";
        		else return "";
        	}
        	else if (code_gubn =="YGUBN") //도서형태
        	{
        		if (code == "1") return "학기물";
        		else if (code == "2") return "학년용";
        		else if (code == "3") return "월간지";
        		else if (code == "4") return "시험대비용";
        		else if (code == "5") return "단계별";
        		else if (code == "6") return "기획도서";
        		else return "";
        	}
        	else if (code_gubn =="B_YN") //반품구분
        	{
        		if (code == "0") return "적용안함";
        		else if (code == "1") return "반품한도";
        		else if (code == "2") return "반품정산";
        		else return "";
        	}
        	else if (code_gubn =="B_YN") //적용구분
        	{
        		if (code == "0") return "적용";
        		else if (code == "1") return "단가";
        		else if (code == "2") return "출고율";
        		else if (code == "3") return "적용안함";
        		else return "";
        	}
        }

        this.fnNullChk_int = function(ret)
        {
        	if(Eco.isUndefined(ret) || ret == null)
        		return 0;
        	else
        		return ret;
        }

        this.fnNullChk_str = function(ret)
        {
        	if(Eco.isUndefined(ret) || ret == null)
        		return "";
        	else
        		return ret;
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	var strUrl = "JSP/sd/select_book_all.jsp";
        	var strArg;
        	var strDs 	= "ds_book=ds_book";
        	strArg = " Option="+nexacro.wrapQuote(this.ed_s_values1.index)+
        			 " Values1="+nexacro.wrapQuote(this.ed_s_values2.value)+
        			 " Values2="+nexacro.wrapQuote(this.ed_s_values3.value)+
        			 " Values3="+nexacro.wrapQuote(this.ed_s_values4.value)+
        			 " Values4="+nexacro.wrapQuote(this.ed_s_values5.value)+
        			 " Values5="+nexacro.wrapQuote(this.ed_s_values6.value);
        	this.gfn_TransactionP("codesearch", strUrl, strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        };

        this.fnCallback = function(strSvcID, nErrorCode, strErrorMag)
        {
        	if(nErrorCode != 0)
        	{
        		alert('error : '+strErrorMag);
        		return;
        	}
        	var strUrl = "JSP/sd/select_bookcust_excel.jsp";
        	var strArg;
        	var strDs  = "ds_book_y=ds_book_y";
        	if (this.fnCheckBoxChk('3'))
        	{
        		strArg = " Values1="+nexacro.wrapQuote(this.ed_s_values2.value)+
        				 " Values2="+nexacro.wrapQuote(this.ed_s_values3.value)+
        				 " Values3="+nexacro.wrapQuote(this.ed_s_values4.value)+
        				 " Values4="+nexacro.wrapQuote(this.ed_s_values5.value)+
        				 " Values5="+nexacro.wrapQuote(this.ed_s_values6.text)+
        				 " Values6="+nexacro.wrapQuote(this.ed_s_values1.index);
        		this.gfn_TransactionP("ds_book_search", strUrl, strDs, strDs, strArg, "fnCallback_2", true, "P", false, this);
        	}
        	else
        	{
        		this.fnCallback_5("","","");
        	}
        }

        this.fnCallback_2 = function(strSvcID, nErrorCode, strErrorMag)
        {
        	if(nErrorCode != 0)
        	{
        		alert('error : '+strErrorMag);
        		return;
        	}
        	var strUrl = "JSP/sd/select_bscd_excel.jsp";
        	var strArg;
        	var strDs 	= "ds_book_bscd=ds_book_bscd";
        	strArg = " Values1="+nexacro.wrapQuote(this.ed_s_values2.value)+
        	         " Values2="+nexacro.wrapQuote(this.ed_s_values3.value)+
        	         " Values3="+nexacro.wrapQuote(this.ed_s_values4.value)+
        	         " Values4="+nexacro.wrapQuote(this.ed_s_values5.value)+
        	         " Values5="+nexacro.wrapQuote(this.ed_s_values6.text)+
        	         " Values6="+nexacro.wrapQuote(this.ed_s_values1.index);
        	this.gfn_TransactionP("ds_book_bscd", strUrl, strDs, strDs, strArg, "fnCallback_3", true, "P", false, this);
        }

        this.fnCallback_3 = function(strSvcID, nErrorCode, strErrorMag)
        {
        	var strUrl = "JSP/sd/bookmst_help_excel.jsp";
        	var strArg;
        	var strDs = "ds_bookmst=ds_bookmst";
        	strArg = " Values1="+nexacro.wrapQuote(this.ed_s_values2.value)+
        	         " Values2="+nexacro.wrapQuote(this.ed_s_values3.value)+
        	         " Values3="+nexacro.wrapQuote(this.ed_s_values4.value)+
        	         " Values4="+nexacro.wrapQuote(this.ed_s_values5.value)+
        	         " Values5="+nexacro.wrapQuote(this.ed_s_values6.text)+
        	         " Values6="+nexacro.wrapQuote(this.ed_s_values1.index);
        	this.gfn_TransactionP("bookmst_help", strUrl, strDs, strDs, strArg, "fnCallback_4", true, "P", false, this);
        }

        this.fnCallback_4 = function(strSvcID, nErrorCode, strErrorMag)
        {
            var strUrl = "JSP/sd/bookdtl_help_excel.jsp";
            var strArg;
            var strDs 	= "ds_bookdtl=ds_bookdtl";
            if (this.fnCheckBoxChk('6'))
            {
                strArg = " Values1="+nexacro.wrapQuote(this.ed_s_values2.value)+
                         " Values2="+nexacro.wrapQuote(this.ed_s_values3.value)+
                         " Values3="+nexacro.wrapQuote(this.ed_s_values4.value)+
                         " Values4="+nexacro.wrapQuote(this.ed_s_values5.value)+
                         " Values5="+nexacro.wrapQuote(this.ed_s_values6.text)+
                         " Values6="+nexacro.wrapQuote(this.ed_s_values1.index);
        		this.gfn_TransactionP("bookdtl_help", strUrl, strDs, strDs, strArg, "fnCallback_5", true, "P", false, this);
            }
            else
                this.fnCallback_5("","","");
        }

        this.fnCallback_5 = function(strSvcID, nErrorCode, strErrorMag)
        {
        	var i, row;
        	var pSymd, pCyul, pCost, pByn, pGymd, pByul, pJukgb, pOldcode,pScustnm,pNm,pJymd,pJyul ;
        	var bookmst_seq, bookmst_name, bgbr_nm, frm_name, bnd_name, bookmst_bodypage, bookmst_signature;
        	var USE_NAME, PPR_NAME, COAT_NAME, BOOKDTL_PAGE, BOOKDTL_BUL, BOOKDTL_GANGED;
        	var BOOKDTL_TONE1, BOOKDTL_TONE2, BOOKDTL_COMMENT, BOOKDTL_REMARK;
        	var LOCATION, PALLET_QTY, BOX_QTY, YEAR_KIND;

        	this.ds_excel.clear();
        	this.ds_excel.addColumn("도서코드", "String", 10);
        	this.ds_excel.addColumn("년판", "String", 4);
        	if (this.chk_box1_1.value) this.ds_excel.addColumn("도서명",    "String", 50);
        	if (this.chk_box1_2.value) this.ds_excel.addColumn("유형",      "String", 1);
        	if (this.chk_box1_3.value) this.ds_excel.addColumn("종속코드",  "String", 10);
        	if (this.chk_box1_4.value) this.ds_excel.addColumn("부가세구분","String", 1);
        	if (this.chk_box1_5.value) this.ds_excel.addColumn("속성코드",  "String", 9);
        	if (this.chk_box1_6.value) this.ds_excel.addColumn("출고기한",  "String", 8);
        	if (this.chk_box1_7.value) this.ds_excel.addColumn("묶음",      "String", 4);
        	if (this.chk_box1_8.value) this.ds_excel.addColumn("도서유형",  "String", 15);
        	if (this.chk_box1_9.value) this.ds_excel.addColumn("종수",      "Int", 6);
        	if (this.chk_box1_10.value) this.ds_excel.addColumn("비고",     "String", 30);
        	if (this.chk_box1_11.value) this.ds_excel.addColumn("도서구분", "String", 15);
        	if (this.chk_box1_12.value) this.ds_excel.addColumn("도서형태", "String", 30);
        	if (this.chk_box1_13.value) this.ds_excel.addColumn("과목",     "String", 15);
        	if (this.chk_box1_14.value) this.ds_excel.addColumn("학년구분", "String", 15);
        	if (this.chk_box1_15.value) this.ds_excel.addColumn("출판일",   "String", 8);
        	if (this.chk_box1_16.value) this.ds_excel.addColumn("구분",     "String", 15);
        	if (this.chk_box1_17.value) this.ds_excel.addColumn("ISBN",     "String", 14);
        	if (this.chk_box1_18.value) this.ds_excel.addColumn("부가번호", "String", 4);
        	if (this.chk_box1_19.value) this.ds_excel.addColumn("로케이션정보", "String", 40);
        	if (this.chk_box1_20.value) this.ds_excel.addColumn("파레트수량", "String", 5);
        	if (this.chk_box1_21.value) this.ds_excel.addColumn("박스수량", "String", 4);
        	if (this.chk_box1_22.value) this.ds_excel.addColumn("연판/무연판구분", "String", 10);

        	if (this.chk_box2_1.value) this.ds_excel.addColumn("시리즈명", "String", 35);
        	if (this.chk_box2_2.value) this.ds_excel.addColumn("시행일자", "String", 17);
        	if (this.chk_box2_3.value) this.ds_excel.addColumn("출고율1",  "Int", 6);
        	if (this.chk_box2_4.value) this.ds_excel.addColumn("출고율2",  "Int", 6);
        	if (this.chk_box2_5.value) this.ds_excel.addColumn("출고율3",  "Int", 6);
        	if (this.chk_box2_6.value) this.ds_excel.addColumn("출고율4",  "Int", 6);
        	if (this.chk_box2_10.value) this.ds_excel.addColumn("정가"    , "Int", 10);
        	if (this.chk_box2_7.value) this.ds_excel.addColumn("판매단가", "Int", 10);
        	if (this.chk_box2_8.value) this.ds_excel.addColumn("반품구분", "String", 1);
        	if (this.chk_box2_9.value) this.ds_excel.addColumn("적용구분", "String", 1);
        	if (this.chk_box2_11.value) this.ds_excel.addColumn("출고율비고"    , "String", 20);

        	if (this.chk_box3_1.value) this.ds_excel.addColumn("거래처명" , "String", 500);
        	if (this.chk_box3_1.value) this.ds_excel.addColumn("거래처시행일자" , "String", 500);
        	if (this.chk_box3_2.value) this.ds_excel.addColumn("거래처출고율" , "String", 500);
        	if (this.chk_box3_3.value) this.ds_excel.addColumn("거래처정가" , "String", 500);
        	if (this.chk_box3_4.value) this.ds_excel.addColumn("거래처반품구분" , "String", 500);
        	if (this.chk_box3_5.value) this.ds_excel.addColumn("거래처반품기한" , "String", 500);
        	if (this.chk_box3_6.value) this.ds_excel.addColumn("거래처한도율" , "String", 500);
        	if (this.chk_box3_7.value) this.ds_excel.addColumn("거래처적용구분" , "String", 500);
        	if (this.chk_box3_8.value) this.ds_excel.addColumn("거래처OLD번호" , "String", 500);

        	if (this.chk_box4_1.value) this.ds_excel.addColumn("부서명" , "String", 500);
        	if (this.chk_box4_2.value) this.ds_excel.addColumn("개발완료" , "String", 500);
        	if (this.chk_box4_3.value) this.ds_excel.addColumn("점유율" , "String", 500);

        	if (this.chk_box5_1.value) this.ds_excel.addColumn("제작순번" , "String", 500);
        	if (this.chk_box5_2.value) this.ds_excel.addColumn("제작도서명" , "String", 500);
        	if (this.chk_box5_3.value) this.ds_excel.addColumn("제작도서구분" , "String", 500);
        	if (this.chk_box5_4.value) this.ds_excel.addColumn("제작판형" , "String", 500);
        	if (this.chk_box5_5.value) this.ds_excel.addColumn("제작제본" , "String", 500);
        	if (this.chk_box5_6.value) this.ds_excel.addColumn("제작본문" , "String", 500);
        	if (this.chk_box5_7.value) this.ds_excel.addColumn("제작대수" , "String", 500);

        	if (this.chk_box6_1.value) this.ds_excel.addColumn("제작사양_용도" , "String", 500);
        	if (this.chk_box6_2.value) this.ds_excel.addColumn("제작사양_용지" , "String", 500);
        	if (this.chk_box6_3.value) this.ds_excel.addColumn("제작사양_코팅" , "String", 500);
        	if (this.chk_box6_4.value) this.ds_excel.addColumn("제작사양_쪽수" , "String", 500);
        	if (this.chk_box6_5.value) this.ds_excel.addColumn("제작사양_벌" , "String", 500);
        	if (this.chk_box6_6.value) this.ds_excel.addColumn("제작사양_돈뎅" , "String", 500);
        	if (this.chk_box6_7.value) this.ds_excel.addColumn("제작사양_색도1" , "String", 500);
        	if (this.chk_box6_7.value) this.ds_excel.addColumn("제작사양_색도2" , "String", 500);
        	if (this.chk_box6_8.value) this.ds_excel.addColumn("제작사양_특이사항" , "String", 500);
        	if (this.chk_box6_8.value) this.ds_excel.addColumn("제작사양_비고" , "String", 500);

        	for (i = 0 ; i < this.ds_book.rowcount; i++)
            {
        		pSymd = "";
                pCyul = "";
                pCost = "";
                pByn  = "";
                pGymd = "";
                pByul = "";
                pJukgb= "";
                pOldcode="";
                pScustnm="";
                pNm   ="";
                pJymd ="";
                pJyul ="";
                bookmst_seq   ="";
                bookmst_name  ="";
                bgbr_nm       ="";
                frm_name      ="";
                bnd_name      ="";
                bookmst_bodypage ="";
                bookmst_signature="";
                USE_NAME      ="";
                PPR_NAME      ="";
                COAT_NAME      ="";
                BOOKDTL_PAGE   ="";
                BOOKDTL_BUL    ="";
                BOOKDTL_GANGED ="";
                BOOKDTL_TONE1  ="";
                BOOKDTL_TONE2  ="";
                BOOKDTL_COMMENT="";
                BOOKDTL_REMARK ="";
                LOCATION   ="";
                PALLET_QTY ="";
                BOX_QTY    ="";
                YEAR_KIND = "";

                this.ds_excel.addRow();
                this.ds_excel.setColumn(i, "도서코드", this.ds_book.getColumn(i,"CODE"));
                this.ds_excel.setColumn(i, "년판",     this.ds_book.getColumn(i,"YY"));
                if (this.chk_box1_1.value) this.ds_excel.setColumn(i, "도서명",    this.ds_book.getColumn(i,"NAME"));
                if (this.chk_box1_2.value) this.ds_excel.setColumn(i, "유형",      this.fnConv("MEIP_C",this.ds_book.getColumn(i,"MEIP_C")));
                if (this.chk_box1_3.value) this.ds_excel.setColumn(i, "종속코드",  this.ds_book.getColumn(i,"CODE"));
                if (this.chk_box1_4.value) this.ds_excel.setColumn(i, "부가세구분", this.fnConv("VAT_GB",this.ds_book.getColumn(i,"VAT_GB")));
                if (this.chk_box1_5.value) this.ds_excel.setColumn(i, "속성코드",  this.ds_book.getColumn(i,"SGRP_CODE"));
                if (this.chk_box1_6.value) this.ds_excel.setColumn(i, "출고기한",  this.ds_book.getColumn(i,"C_YMD"));
                if (this.chk_box1_7.value) this.ds_excel.setColumn(i, "묶음",      this.ds_book.getColumn(i,"MOOK"));
                if (this.chk_box1_8.value) this.ds_excel.setColumn(i, "도서유형",  this.ds_book.getColumn(i,"PANH_NM"));
                if (this.chk_box1_9.value) this.ds_excel.setColumn(i, "종수",      this.ds_book.getColumn(i,"TPAGE"));
                if (this.chk_box1_10.value) this.ds_excel.setColumn(i, "비고",     this.ds_book.getColumn(i,"NYUK"));
                if (this.chk_box1_11.value) this.ds_excel.setColumn(i, "도서구분", this.ds_book.getColumn(i,"BGBR_NM"));
                if (this.chk_box1_12.value) this.ds_excel.setColumn(i, "도서형태", this.fnConv("YGUBN",this.ds_book.getColumn(i,"YGUBN")));
                if (this.chk_box1_13.value) this.ds_excel.setColumn(i, "과목",     this.ds_book.getColumn(i,"DANW_NM"));
                if (this.chk_box1_14.value) this.ds_excel.setColumn(i, "학년구분", this.ds_book.getColumn(i,"HAK_NM"));
                if (this.chk_box1_15.value) this.ds_excel.setColumn(i, "출판일",   this.ds_book.getColumn(i,"P_YMD"));
                if (this.chk_box1_16.value) this.ds_excel.setColumn(i, "구분",     this.ds_book.getColumn(i,"KWA_NM"));
                if (this.chk_box1_17.value) this.ds_excel.setColumn(i, "ISBN",     this.ds_book.getColumn(i,"ISBN_N"));
                if (this.chk_box1_18.value) this.ds_excel.setColumn(i, "부가번호", this.ds_book.getColumn(i,"BUGA_N"));
                if (this.chk_box1_19.value) this.ds_excel.setColumn(i, "로케이션정보", this.ds_book.getColumn(i,"LOCATION"));
                if (this.chk_box1_20.value) this.ds_excel.setColumn(i, "파레트수량", this.ds_book.getColumn(i,"PALLET_QTY"));
                if (this.chk_box1_21.value) this.ds_excel.setColumn(i, "박스수량", this.ds_book.getColumn(i,"BOX_QTY"));

                if (this.chk_box1_22.value)
                {
                    if(this.ds_book.getColumn(i,"YEAR_KIND") == "0")
                        this.ds_excel.setColumn(i, "연판/무연판구분", "미등록");
                    else if(this.ds_book.getColumn(i,"YEAR_KIND") == "1")
                        this.ds_excel.setColumn(i, "연판/무연판구분", "연판도서");
                    else if(this.ds_book.getColumn(i,"YEAR_KIND") == "2")
                        this.ds_excel.setColumn(i, "연판/무연판구분", "무연판도서");
                }

                if (this.chk_box2_1.value) this.ds_excel.setColumn(i, "시리즈명", this.ds_book.getColumn(i,"SGRP_NM"));
                if (this.chk_box2_2.value) this.ds_excel.setColumn(i, "시행일자", this.fnNullChk_str(this.ds_book.getColumn(i,"SYMD"))+"~"+this.fnNullChk_str(this.ds_book.getColumn(i,"EYMD")));
                if (this.chk_box2_3.value) this.ds_excel.setColumn(i, "출고율1",  this.fnNullChk_int(this.ds_book.getColumn(i,"YUL1")));
                if (this.chk_box2_4.value) this.ds_excel.setColumn(i, "출고율2",  this.fnNullChk_int(this.ds_book.getColumn(i,"YUL2")));
                if (this.chk_box2_5.value) this.ds_excel.setColumn(i, "출고율3",  this.fnNullChk_int(this.ds_book.getColumn(i,"YUL3")));
                if (this.chk_box2_6.value) this.ds_excel.setColumn(i, "출고율4",  this.fnNullChk_int(this.ds_book.getColumn(i,"YUL4")));
                if (this.chk_box2_7.value) this.ds_excel.setColumn(i, "정가"    , this.fnNullChk_int(this.ds_book.getColumn(i,"COST")));
                if (this.chk_box2_8.value) this.ds_excel.setColumn(i, "판매단가", this.fnNullChk_int(this.ds_book.getColumn(i,"PCOST")));
                if (this.chk_box2_9.value) this.ds_excel.setColumn(i, "반품구분", this.fnConv("B_YN",this.ds_book.getColumn(i,"B_YN")));
                if (this.chk_box2_10.value) this.ds_excel.setColumn(i,"적용구분", this.fnConv("JUK_GB",this.ds_book.getColumn(i,"JUK_GB")));
                if (this.chk_box2_11.value) this.ds_excel.setColumn(i,"출고율비고"    , this.ds_book.getColumn(i,"BIGO"));

                //데이터셋 필터링 거래처출고율
                if (this.chk_all3.value)
                {
                    var filter_list  = "BOOK_CD=="+nexacro.wrapQuote(this.ds_book.getColumn(i,"CODE"));
                        filter_list += " && YY=="+nexacro.wrapQuote(this.ds_book.getColumn(i,"YY"));

                    this.ds_book_y.filter(filter_list);
                    var symd = "";
                    for (var loop = 0 ; loop < this.ds_book_y.getRowCount() ; loop++)
                    {
                        pScustnm += this.ds_book_y.getColumn(loop,"CUST_NM")+"\r\n";
                        pSymd += this.ds_book_y.getColumn(loop,"SYMD")+"\r\n";
                        pCyul += this.ds_book_y.getColumn(loop,"CYUL")+"\r\n";
                        pCost += this.ds_book_y.getColumn(loop,"CCOST")+"\r\n";
                        pByn  += this.ds_book_y.getColumn(loop,"B_YN")+"\r\n";
                        pGymd += this.ds_book_y.getColumn(loop,"B_GYMD")+"\r\n";
                        pByul += this.ds_book_y.getColumn(loop,"B_YUL")+"\r\n";
                        pJukgb += this.ds_book_y.getColumn(loop,"JUK_GB")+"\r\n";
                        pOldcode += this.fnNullChk_str(this.ds_book_y.getColumn(loop,"OLD_CODE"))+"\r\n";
                    }
                    this.ds_book_y.filter("");
                    if (this.chk_box3_1.value) this.ds_excel.setColumn(i,"거래처명" , pScustnm);
                    if (this.chk_box3_1.value) this.ds_excel.setColumn(i,"거래처시행일자" , pSymd);
                    if (this.chk_box3_2.value) this.ds_excel.setColumn(i,"거래처출고율"   , pCyul);
                    if (this.chk_box3_3.value) this.ds_excel.setColumn(i,"거래처정가"     , pCost);
                    if (this.chk_box3_4.value) this.ds_excel.setColumn(i,"거래처반품구분" , pByn);
                    if (this.chk_box3_5.value) this.ds_excel.setColumn(i,"거래처반품기한" , pGymd);
                    if (this.chk_box3_6.value) this.ds_excel.setColumn(i,"거래처한도율"   , pByul);
                    if (this.chk_box3_7.value) this.ds_excel.setColumn(i,"거래처적용구분" , pJukgb);
                    if (this.chk_box3_8.value) this.ds_excel.setColumn(i,"거래처OLD번호"  , pOldcode);
                }
                //데이터셋 필터링 부서코드
                if (this.chk_all4.value)
                {
                    var filter_list  = "BOOK_CD=="+this.ds_book.getColumn(i,"CODE");
                        filter_list += " && YY=="+this.ds_book.getColumn(i,"YY");

                    this.ds_book_bscd.filter(filter_list);
                    var symd = "";
                    for (var loop = 0 ; loop < this.ds_book_bscd.rowcount ; loop++)
                    {
                        pNm  += this.ds_book_bscd.getColumn(loop,"NAME")+"\r\n";
                        pJymd += this.ds_book_bscd.getColumn(loop,"JYMD")+"\r\n";
                        pJyul += this.ds_book_bscd.getColumn(loop,"JYUL")+"\r\n";
                    }
                    this.ds_book_bscd.filter("");
                    this.ds_excel.setColumn(i,"부서명" , pNm);
                    this.ds_excel.setColumn(i,"개발완료" , pJymd);
                    this.ds_excel.setColumn(i,"점유율" , pJyul);
                }

                //데이터셋 필터링 제작도서정보
                if (this.chk_all5.value)
                {
                    var filter_list  = "BOOKMST_CODE=="+this.ds_book.getColumn(i,"CODE");
                        filter_list += "&&BOOKMST_YEAR=="+this.ds_book.getColumn(i,"YY");

                    this.ds_bookmst.filter(filter_list);
                    var symd = "";
                    for (var loop = 0 ; loop < this.ds_bookmst.rowcount ; loop++)
                    {
                        bookmst_seq      += this.ds_bookmst.getColumn(loop,"BOOKMST_SEQ")+"\r\n";
                        bookmst_name     += this.ds_bookmst.getColumn(loop,"BOOKMST_NAME")+"\r\n";
                        bgbr_nm          += this.ds_bookmst.getColumn(loop,"BGBR_NM")+"\r\n";
                        frm_name         += this.ds_bookmst.getColumn(loop,"FRM_NAME")+"\r\n";
                        bnd_name         += this.ds_bookmst.getColumn(loop,"BND_NAME")+"\r\n";
                        bookmst_bodypage += this.ds_bookmst.getColumn(loop,"BOOKMST_BODYPAGE")+"\r\n";
                        bookmst_signature+= this.ds_bookmst.getColumn(loop,"BOOKMST_SIGNATURE")+"\r\n";
                    }
                    this.ds_bookmst.filter("");
                    if (this.chk_box5_1.value) this.ds_excel.setColumn(i,"제작순번"  ,  bookmst_seq);
                    if (this.chk_box5_2.value) this.ds_excel.setColumn(i,"제작도서명",  bookmst_name);
                    if (this.chk_box5_3.value) this.ds_excel.setColumn(i,"제작도서구분",bgbr_nm);
                    if (this.chk_box5_4.value) this.ds_excel.setColumn(i,"제작판형",    frm_name);
                    if (this.chk_box5_5.value) this.ds_excel.setColumn(i,"제작제본",    bnd_name);
                    if (this.chk_box5_6.value) this.ds_excel.setColumn(i,"제작본문",    bookmst_bodypage);
                    if (this.chk_box5_7.value) this.ds_excel.setColumn(i,"제작대수",    bookmst_signature);
                }

                //데이터셋 필터링 제작사양정보
                if (this.chk_all6.value)
                {
                    var filter_list  = "BOOKMST_CODE=="+this.ds_book.getColumn(i,"CODE");
                        filter_list += "&&BOOKMST_YEAR=="+this.ds_book.getColumn(i,"YY");

                    this.ds_bookdtl.filter(filter_list);
                    var symd = "";
                    for (var loop = 0 ; loop < this.ds_bookdtl.rowcount ; loop++)
                    {
                        USE_NAME       += this.ds_bookdtl.getColumn(loop,"USE_NAME")+"\r\n";
                        PPR_NAME       += this.ds_bookdtl.getColumn(loop,"PPR_NAME")+"\r\n";
                        COAT_NAME      += this.ds_bookdtl.getColumn(loop,"COAT_NAME")+"\r\n";
                        BOOKDTL_PAGE   += this.ds_bookdtl.getColumn(loop,"BOOKDTL_PAGE")+"\r\n";
                        BOOKDTL_BUL    += this.ds_bookdtl.getColumn(loop,"BOOKDTL_BUL")+"\r\n";
                        BOOKDTL_GANGED += this.ds_bookdtl.getColumn(loop,"BOOKDTL_GANGED")+"\r\n";
                        BOOKDTL_TONE1  += this.ds_bookdtl.getColumn(loop,"BOOKDTL_TONE1")+"\r\n";
                        BOOKDTL_TONE2  += this.ds_bookdtl.getColumn(loop,"BOOKDTL_TONE2")+"\r\n";
                        BOOKDTL_COMMENT += this.fnNullChk_str(this.ds_bookdtl.getColumn(loop,"BOOKDTL_COMMENT"))+"\r\n";
                        BOOKDTL_REMARK  += this.fnNullChk_str(this.ds_bookdtl.getColumn(loop,"BOOKDTL_REMARK"))+"\r\n";
                    }
                    this.ds_bookdtl.filter("");

                    if (this.chk_box6_1.value)this.ds_excel.setColumn(i,"제작사양_용도", USE_NAME);
                    if (this.chk_box6_2.value)this.ds_excel.setColumn(i,"제작사양_용지", PPR_NAME);
                    if (this.chk_box6_3.value)this.ds_excel.setColumn(i,"제작사양_코팅", COAT_NAME);
                    if (this.chk_box6_4.value)this.ds_excel.setColumn(i,"제작사양_쪽수", BOOKDTL_PAGE);
                    if (this.chk_box6_5.value)this.ds_excel.setColumn(i,"제작사양_벌",   BOOKDTL_BUL);
                    if (this.chk_box6_6.value)this.ds_excel.setColumn(i,"제작사양_돈뎅", BOOKDTL_GANGED);
                    if (this.chk_box6_7.value)this.ds_excel.setColumn(i,"제작사양_색도1", BOOKDTL_TONE1);
                    if (this.chk_box6_7.value)this.ds_excel.setColumn(i,"제작사양_색도2", BOOKDTL_TONE2);
                    if (this.chk_box6_8.value)this.ds_excel.setColumn(i,"제작사양_특이사항", BOOKDTL_COMMENT);
                    if (this.chk_box6_8.value)this.ds_excel.setColumn(i,"제작사양_비고", BOOKDTL_REMARK);
                }
            }
            //trace(this.ds_bookdtl.SaveXML());
            this.grd_excel.set_binddataset("ds_excel");
            this.grd_excel.createFormat();

        	this.setWaitCursor(true);
        	this.setTimer(0, 10);
        }

        this.SD6311P_ontimer = function(obj,e)
        {
        	if(e.timerid==0)
        	{
        		this.fnExcellExport();
        	}
        	else
        		this.setWaitCursor(false);
        	this.killTimer(e.timerid);
        };

        this.fnExcellExport = function()
        {
        	var filename = "Book_info";
        	this.exportObj = new ExcelExportObject();
        	var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_excel, "Sheet1!A1");

        	this.exportObj.set_exporturl(gv_urlXeni);
        	this.exportObj.set_exportfilename(filename);
            this.exportObj.exportData();
        	this.setWaitCursor(false);
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD6311P_onload,this);
            this.addEventHandler("ontimer",this.SD6311P_ontimer,this);
            this.ed_s_values2.addEventHandler("onkillfocus",this.ed_jukyocd_onkillfocus,this);
            this.ed_s_values2.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_s_values3.addEventHandler("onkillfocus",this.ed_jukyocd_onkillfocus,this);
            this.ed_s_values3.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_s_values4.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_s_values4.addEventHandler("onkillfocus",this.ed_values5_onkillfocus,this);
            this.ed_s_values5.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_s_values5.addEventHandler("onkillfocus",this.ed_values6_onkillfocus,this);
            this.ed_s_values1.addEventHandler("onitemchanged",this.ed_values5_1_onitemchanged,this);
            this.chk_all1.addEventHandler("canchange",this.chk_all_canchange,this);
            this.chk_all2.addEventHandler("canchange",this.chk_all_canchange,this);
            this.chk_all3.addEventHandler("canchange",this.chk_all_canchange,this);
            this.chk_all4.addEventHandler("canchange",this.chk_all_canchange,this);
            this.chk_all5.addEventHandler("canchange",this.chk_all_canchange,this);
            this.chk_all6.addEventHandler("canchange",this.chk_all_canchange,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
        };
        this.loadIncludeScript("SD6311P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
