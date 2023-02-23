(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD6310F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1600,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_book", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"BGRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DANW_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DANW_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"YGUBN\" type=\"STRING\" size=\"256\"/><Column id=\"VAT_GB\" type=\"STRING\" size=\"256\"/><Column id=\"MEIP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SGRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SGRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"C_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"P_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"MOOK\" type=\"STRING\" size=\"256\"/><Column id=\"CPAGE\" type=\"INT\" size=\"256\"/><Column id=\"KWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"KWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ISBN_N\" type=\"STRING\" size=\"256\"/><Column id=\"BUGA_N\" type=\"STRING\" size=\"256\"/><Column id=\"PANH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PANH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TPAGE\" type=\"INT\" size=\"256\"/><Column id=\"NYUK\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"I_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"JBOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JBOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYMD\" type=\"STRING\" size=\"256\"/><Column id=\"EYMD\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG_CD1\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG_CD3\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG_CD4\" type=\"STRING\" size=\"256\"/><Column id=\"YUL1\" type=\"INT\" size=\"256\"/><Column id=\"YUL2\" type=\"INT\" size=\"256\"/><Column id=\"YUL3\" type=\"INT\" size=\"256\"/><Column id=\"YUL4\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PCOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"B_YN\" type=\"STRING\" size=\"256\"/><Column id=\"B_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"B_YUL\" type=\"INT\" size=\"256\"/><Column id=\"JUK_GB\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG1_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG3_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DUNG4_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"PALLET_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_KIND\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_book_bscd", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"BSCD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JYMD\" type=\"STRING\" size=\"256\"/><Column id=\"JYUL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_book_y", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"SYMD\" type=\"STRING\" size=\"256\"/><Column id=\"CYUL\" type=\"INT\" size=\"256\"/><Column id=\"CCOST\" type=\"INT\" size=\"256\"/><Column id=\"B_YN\" type=\"STRING\" size=\"256\"/><Column id=\"B_GYMD\" type=\"STRING\" size=\"256\"/><Column id=\"B_YUL\" type=\"INT\" size=\"256\"/><Column id=\"JUK_GB\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gbook", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SYMD\" type=\"STRING\" size=\"256\"/><Column id=\"EYMD\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BYUL\" type=\"INT\" size=\"256\"/><Column id=\"JONG\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bookmst", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_SALE\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FRM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_SIGNATURE\" type=\"INT\" size=\"256\"/><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"256\"/><Column id=\"BOOKMST_BODYPAGE\" type=\"INT\" size=\"256\"/><Column id=\"BOOKMST_REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bookdtl", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKDTL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"USE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_PSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COAT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COAT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_PAGE\" type=\"INT\" size=\"256\"/><Column id=\"BOOKDTL_BUL\" type=\"INT\" size=\"256\"/><Column id=\"BOOKDTL_TONE1\" type=\"INT\" size=\"256\"/><Column id=\"BOOKDTL_TONE2\" type=\"INT\" size=\"256\"/><Column id=\"BOOKDTL_GANGED\" type=\"INT\" size=\"256\"/><Column id=\"BOOKDTL_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_values6", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">판매용</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">교사용</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">타계정</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"DATA\">매입품</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_values12", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">학기물</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">학년용</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"DATA\">월간지</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"DATA\">시험대비용</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"DATA\">단계별</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"DATA\">기획도서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_values14", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">면세</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\"/></Row><Row><Col id=\"CODE\">2</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"DATA\">과세</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_yearkind", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">미등록</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">연판도서</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">무연판도서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_values49", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">적용안함</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">반품한도</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">반품정산</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_values54", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">적용</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">단가</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">출고율</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"DATA\">적용안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_s_value1", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">판매용</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">교사용</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">타계정</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"DATA\">매입품</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"DATA\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","56","11","320","59",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("도서종합정보");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","30","72","31.88%","31",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04","30","Static00_02:-2","31.88%","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06","30","Static00_04:-2","31.88%","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_08","30","Static00_06:-2","31.88%","31",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_07","30","159","117","31",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("도서명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_book","30","225","31.88%",null,null,"20",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("ds_book");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"도서코드\"/><Cell col=\"1\" text=\"년판\"/><Cell col=\"2\" text=\"도서명\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:YY\"/><Cell col=\"2\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_page0","grd_book:5","73","109","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("▷기초등록   ");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px inset #10aea9");
            obj.set_edge("");
            obj.set_borderRadius("10px 10px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","Static00_07:15","Static00_08:6",null,"21","btn_page0:23",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("검색");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static11_00_00","Static00_06:-38.63%","133","9","25",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div00","grd_book:5","btn_page0:-2",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_border("2px inset #10aea9");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","12","6","160","29",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("▶기초내역");
            obj.set_color("#7fb39d");
            obj.set_font("bold 24px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_01","25","Static01:12","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("코드");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values1","Static01_01:-1","Static01:12","12.92%","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@@@@@@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_border("1px solid #10aea9");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_12","42.7%","47","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("34");
            obj.set_text("도서명");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values2","ed_values1:-1","Static01:12",null,"22","Static01_12:15",null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_border("1px solid #10aea9");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_02","25","Static01_01:-1","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("시리즈명");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_13","42.7%","68","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("36");
            obj.set_text("유형");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("ed_values3","Static01_02:-1","ed_values1:-1",null,"22","Static01_13:15",null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("false");
            obj.set_text("#e0f6ff");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_03","25","Static01_02:-1","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("도서구분");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values7","Static01_03:-1","ed_values3:-1","6.41%","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_border("1px solid #10aea9");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_14","42.7%","89","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("37");
            obj.set_text("종속코드");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("ed_values8","ed_values7:-1","ed_values3:-1",null,"22","Static01_14:15",null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("false");
            obj.set_text("#e0f6ff");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_04","25","Static01_03:-1","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_text("도서형태");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values11","Static01_04:-1","ed_values7:-1","6.41%","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_border("1px solid #10aea9");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_15","42.7%","110","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("38");
            obj.set_text("부가세구분");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("ed_values12","ed_values11:-1","ed_values8:-1",null,"22","Static01_15:15",null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #10aea9");
            obj.set_innerdataset("ds_values12");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_text("Combo00");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_05","25","Static01_04:-1","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_text("과목");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values15","Static01_05:-1","ed_values11:-1","6.41%","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_border("1px solid #10aea9");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_16","42.7%","131","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("39");
            obj.set_text("속성코드");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("ed_values16","ed_values15:-1","ed_values12:-1",null,"22","Static01_16:15",null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("false");
            obj.set_text("#e0f6ff");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_06","25","Static01_05:-1","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_text("학년구분");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values19","Static01_06:-1","ed_values15:-1","6.41%","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_border("1px solid #10aea9");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_17","42.7%","152","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("40");
            obj.set_text("출고기한");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("ed_values20","ed_values19:-1","ed_values16:-1",null,"22","Static01_17:15",null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("false");
            obj.set_text("#e0f6ff");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_07","25","Static01_06:-1","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            obj.set_text("출판일");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_08","25","Static01_07:-1","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("25");
            obj.set_text("구분");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_18","42.7%","173","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("41");
            obj.set_text("묶음");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values24","Static01_08:-1","194","6.41%","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_border("1px solid #10aea9");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_19","42.7%","194","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("42");
            obj.set_text("도서유형");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("ed_values22","Static01_07:-1","ed_values19:-1",null,"22","Static01_18:15",null,null,null,null,null,this.div00.form);
            obj.set_taborder("97");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_border("1px solid #10aea9");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("ed_values25","ed_values24:-1","ed_values22:-1",null,"22","Static01_19:15",null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("false");
            obj.set_text("#e0f6ff");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_09","25","Static01_08:-1","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("26");
            obj.set_text("(ISBN)");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_20","42.7%","215","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("43");
            obj.set_text("종수");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("ed_values28","Static01_09:-1","ed_values24:-1",null,"22","Static01_20:15",null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_text("#e0f6ff");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_10","25","Static01_09:-1","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("27");
            obj.set_text("부가번호");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_21","42.7%","236","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("44");
            obj.set_text("비고");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("ed_values30","Static01_10:-1","ed_values28:-1",null,"22","Static01_21:15",null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_border("1px solid #10aea9");
            obj.set_text("#e0f6ff");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_11","25","Static01_10:-1","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("28");
            obj.set_text("로케이션");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("ed_location","Static01_11:-1","ed_values28:20",null,"22","Static01_21:15",null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_border("1px solid #10aea9");
            obj.set_text("#e0f6ff");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_22","25","Static01_11:-1","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("29");
            obj.set_text("파레트수량");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_23","32.84%","Static01_11:-1","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("45");
            obj.set_text("박스수량");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("ed_pallet","Static01_22:-1","ed_location:-1",null,"22","Static01_23:5",null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_border("1px solid #10aea9");
            obj.set_text("#e0f6ff");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd_view_sub","Static01_22:-1","305",null,"12.6%","25",null,null,null,"60",null,this.div00.form);
            obj.set_taborder("30");
            obj.set_binddataset("ds_book_bscd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"부서명\"/><Cell col=\"2\" text=\"개발완료\"/><Cell col=\"3\" text=\"점유율\"/></Band><Band id=\"body\"><Cell text=\"bind:BSCD_CD\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:JYMD\"/><Cell col=\"3\" text=\"bind:JYUL\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02","12","grd_view_sub:10","160","29",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("31");
            obj.set_text("▶기초출고율");
            obj.set_color("#7fb39d");
            obj.set_font("bold 24px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_06","45.1%","Static02:10","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("80");
            obj.set_text("정가");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values32","120","Static02:10","13.97%","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("32");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####-##-##");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_border("1px solid #10aea9");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_01","35","Static02:10","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("62");
            obj.set_text("시행일자");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_02","35","Static02_01:-1","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("63");
            obj.set_text("출고율1");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_03","35","Static02_02:-1","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("64");
            obj.set_text("출고율2");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_04","35","Static02_03:-1","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("65");
            obj.set_text("출고율3");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_05","35","Static02_04:-1","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("66");
            obj.set_text("출고율4");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd_view","Static02_05:-1","Static02_05:5",null,null,"26","10",null,null,"65",null,this.div00.form);
            obj.set_taborder("33");
            obj.set_binddataset("ds_gbook");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"시행일자\"/><Cell col=\"2\" text=\"종료일자\"/><Cell col=\"3\" text=\"시리즈명\"/><Cell col=\"4\" text=\"반품율\"/><Cell col=\"5\" text=\"종수\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:SYMD\"/><Cell col=\"2\" text=\"bind:EYMD\"/><Cell col=\"3\" text=\"bind:BOOK_NM\"/><Cell col=\"4\" text=\"bind:BYUL\"/><Cell col=\"5\" text=\"bind:JONG\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("ed_values55","Static01_12:-1","12","150","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("94");
            obj.set_text("년판없는도서");
            obj.set_background("#ebfef3");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("ed_values4","Static01_12:-1","ed_values55:15",null,"22","25",null,null,null,null,null,this.div00.form);
            obj.set_taborder("35");
            obj.set_border("1px solid #10aea9");
            obj.set_text("#e0f6ff");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values5","Static01_13:-1","ed_values4:-1","7.89%","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("46");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_border("1px solid #10aea9");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("ed_values6","ed_values5:-1","ed_values4:-1",null,"22","25",null,null,null,null,null,this.div00.form);
            obj.set_taborder("47");
            obj.set_border("1px solid #10aea9");
            obj.set_innerdataset("ds_values6");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_text("Combo00");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values9","Static01_14:-1","ed_values5:-1","14.79%","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("48");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@@@@@@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_border("1px solid #10aea9");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("ed_values10","ed_values9:-1","ed_values6:-1",null,"22","25",null,null,null,null,null,this.div00.form);
            obj.set_taborder("49");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("false");
            obj.set_text("#e0f6ff");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values13","Static01_15:-1","ed_values9:-1","7.89%","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("50");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_border("1px solid #10aea9");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values17","Static01_16:-1","ed_values13:-1","14.79%","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("51");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@@@@@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_border("1px solid #10aea9");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("ed_values14","ed_values13:-1","ed_values10:-1",null,"22","25",null,null,null,null,null,this.div00.form);
            obj.set_taborder("95");
            obj.set_border("1px solid #10aea9");
            obj.set_innerdataset("ds_values14");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_text("Combo00");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("ed_values18","ed_values17:-1","ed_values14:-1",null,"22","25",null,null,null,null,null,this.div00.form);
            obj.set_taborder("52");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("false");
            obj.set_text("#e0f6ff");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("ed_values21","Static01_17:-1","ed_values17:-1",null,"22","25",null,null,null,null,null,this.div00.form);
            obj.set_taborder("96");
            obj.set_border("1px solid #10aea9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_displayinvalidtext(" ");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values23","Static01_18:-1","ed_values21:-1",null,"22","25",null,null,null,null,null,this.div00.form);
            obj.set_taborder("53");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_border("1px solid #10aea9");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values26","Static01_19:-1","ed_values23:-1","7.89%","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("54");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_border("1px solid #10aea9");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("ed_values27","ed_values26:-1","ed_values23:-1",null,"22","25",null,null,null,null,null,this.div00.form);
            obj.set_taborder("55");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("false");
            obj.set_text("#e0f6ff");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("ed_values29","Static01_20:-1","ed_values26:-1",null,"22","25",null,null,null,null,null,this.div00.form);
            obj.set_taborder("56");
            obj.set_border("1px solid #10aea9");
            obj.set_text("#e0f6ff");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("ed_values31","Static01_21:-1","ed_values29:-1",null,"22","25",null,null,null,null,null,this.div00.form);
            obj.set_taborder("57");
            obj.set_border("1px solid #10aea9");
            obj.set_text("#e0f6ff");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_24","61.44%","Static01_11:-1","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("59");
            obj.set_text("연판/무연판");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("ed_box","Static01_23:-1","ed_location:-1",null,"22","Static01_24:5",null,null,null,null,null,this.div00.form);
            obj.set_taborder("58");
            obj.set_border("1px solid #10aea9");
            obj.set_text("#e0f6ff");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_yearkind_cd","Static01_24:-1","Static01_11:-1","6.41%","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("60");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_border("1px solid #10aea9");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("ed_yearkind","ed_yearkind_cd:-1","ed_location:-1",null,"22","25",null,null,null,null,null,this.div00.form);
            obj.set_taborder("61");
            obj.set_border("1px solid #10aea9");
            obj.set_innerdataset("ds_yearkind");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_text("Combo00");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values34","120","ed_values32:-1","6.69%","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("68");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_border("1px solid #10aea9");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("ed_values35","ed_values34:-1","ed_values32:-1","10.48%","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("69");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("false");
            obj.set_text("#e0f6ff");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values33","ed_values35:-1","Static02:10",null,"22","Static02_06:5",null,null,null,null,null,this.div00.form);
            obj.set_taborder("67");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####-##-##");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_border("1px solid #10aea9");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_07","45.1%","Static02_06:-1","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("81");
            obj.set_text("판매단가");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values36","ed_values35:-1","ed_values33:-1",null,"22","Static02_07:5",null,null,null,null,null,this.div00.form);
            obj.set_taborder("70");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_border("1px solid #10aea9");
            obj.set_value("0");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values37","120","ed_values34:-1","6.69%","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("71");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_border("1px solid #10aea9");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("ed_values38","ed_values37:-1","ed_values35:-1","10.48%","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("72");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("false");
            obj.set_text("#e0f6ff");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_08","45.1%","Static02_07:-1","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("82");
            obj.set_text("반품구분");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values39","ed_values38:-1","ed_values36:-1",null,"22","Static02_08:5",null,null,null,null,null,this.div00.form);
            obj.set_taborder("73");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_border("1px solid #10aea9");
            obj.set_value("0");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values40","120","ed_values37:-1","6.69%","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("74");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_border("1px solid #10aea9");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("ed_values41","ed_values40:-1","ed_values38:-1","10.48%","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("75");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("false");
            obj.set_text("#e0f6ff");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_09","45.1%","Static02_08:-1","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("83");
            obj.set_text("적용구분");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values42","ed_values41:-1","ed_values39:-1",null,"22","Static02_09:5",null,null,null,null,null,this.div00.form);
            obj.set_taborder("76");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_border("1px solid #10aea9");
            obj.set_value("0");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values43","120","ed_values40:-1","6.69%","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("77");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_border("1px solid #10aea9");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("ed_values44","ed_values43:-1","ed_values41:-1","10.48%","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("78");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("false");
            obj.set_text("#e0f6ff");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_10","45.1%","Static02_09:-1","86","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("84");
            obj.set_text("비고");
            obj.set_textAlign("right");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 8px 0px 0px");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values45","ed_values44:-1","ed_values42:-1",null,"22","Static02_10:5",null,null,null,null,null,this.div00.form);
            obj.set_taborder("79");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_border("1px solid #10aea9");
            obj.set_value("0");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values46","Static02_06:-1","Static02:10",null,"22","26",null,null,null,null,null,this.div00.form);
            obj.set_taborder("85");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_border("1px solid #10aea9");
            obj.set_value("0");
            obj.set_usesoftkeyboard("false");
            obj.set_format("###,");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values47","Static02_07:-1","ed_values46:-1",null,"22","26",null,null,null,null,null,this.div00.form);
            obj.set_taborder("86");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_border("1px solid #10aea9");
            obj.set_value("0");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values48","Static02_08:-1","ed_values47:-1","6.8%","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("87");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_border("1px solid #10aea9");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("ed_values49","ed_values48:-1","ed_values47:-1","10.06%","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("89");
            obj.set_border("1px solid #10aea9");
            obj.set_innerdataset("ds_values49");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_text("Combo00");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values50","ed_values49:-1","ed_values47:-1","11.83%","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("90");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####-##-##");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_border("1px solid #10aea9");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values51","ed_values50:-1","ed_values47:-1",null,"22","26",null,null,null,null,null,this.div00.form);
            obj.set_taborder("88");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_border("1px solid #10aea9");
            obj.set_value("0");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values53","Static02_09:-1","ed_values48:-1","6.8%","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("91");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_border("1px solid #10aea9");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("ed_values54","ed_values53:-1","ed_values49:-1",null,"22","26",null,null,null,null,null,this.div00.form);
            obj.set_taborder("92");
            obj.set_border("1px solid #10aea9");
            obj.set_innerdataset("ds_values54");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_text("Combo00");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("ed_values52","Static02_10:-1","ed_values53:-1",null,"22","26",null,null,null,null,null,this.div00.form);
            obj.set_taborder("93");
            obj.set_border("1px solid #10aea9");
            obj.set_text("#e0f6ff");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("ed_s_values5","Static11_00_00:19","135",null,"21","div00:24",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_05","30","130","117","31",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("년판");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_s_values4","Static00_05:15","135",null,"21","Static11_00_00:20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","30","72","117","31",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("ed_s_values1","Static00_01:15","77",null,"21","div00:23",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_s_value1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","30","101","117","31",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("코드");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static11_00","Static00_02:-38.63%","104","9","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_s_values2","Static00_03:15","106",null,"21","Static11_00:20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@@@@@@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_s_values3","Static11_00:19","106",null,"21","div00:23",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@@@@@@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_s_values6","Static00_07:15","164",null,"21","div00:23",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("#e0f6ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_page1","btn_page0:-1","73","109","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("▷거래처(율)   ");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px inset #10aea9");
            obj.set_edge("");
            obj.set_borderRadius("10px 10px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_page2","btn_page1:-1","73","109","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("▷제작부   ");
            obj.set_color("#01656f");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px inset #10aea9");
            obj.set_edge("");
            obj.set_borderRadius("10px 10px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Div("div01","grd_book:5","btn_page0:-2",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_border("2px inset #10aea9");
            obj.set_background("#ffffff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","12","6","180","29",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_text("▶거래처출고율");
            obj.set_color("#7fb39d");
            obj.set_font("bold 24px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.div01.addChild(obj.name, obj);

            obj = new Grid("grd_cyul","30","50",null,null,"30","30",null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_book_y");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"60\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"거래처명\"/><Cell col=\"3\" text=\"시행일자\"/><Cell col=\"4\" text=\"출고율\"/><Cell col=\"5\" text=\"정가\"/><Cell col=\"6\" text=\"반품구분\"/><Cell col=\"7\" text=\"반품기한\"/><Cell col=\"8\" text=\"한도율\"/><Cell col=\"9\" text=\"적용구분\"/></Band><Band id=\"body\"><Cell text=\"bind:CUST_GB\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:CUST_CD\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:CUST_NM\"/><Cell col=\"3\" text=\"bind:SYMD\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"####-##-##\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:CYUL\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:CCOST\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:B_YN\" textAlign=\"center\" expr=\"B_YN==&apos;1&apos;?&apos;반품한도&apos;:B_YN==&apos;2&apos;?&apos;반품정산&apos;:&apos;적용안함&apos;\"/><Cell col=\"7\" text=\"bind:B_GYMD\" textAlign=\"center\" maskeditformat=\"####-##-##\" maskedittype=\"string\" displaytype=\"mask\"/><Cell col=\"8\" text=\"bind:B_YUL\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:JUK_GB\" textAlign=\"center\" expr=\"JUK_GB==&apos;1&apos;?&apos;단가&apos;:JUK_GB==&apos;2&apos;?&apos;출고율&apos;:JUK_GB==&apos;3&apos;?&apos;적용안함&apos;:&apos;적용&apos;\"/></Band></Format></Formats>");
            this.div01.addChild(obj.name, obj);

            obj = new Div("div02","grd_book:5","btn_page0:-2",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_border("2px inset #10aea9");
            obj.set_background("#ffffff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","12","6","180","29",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("0");
            obj.set_text("▶제작도서");
            obj.set_color("#7fb39d");
            obj.set_font("bold 24px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.div02.addChild(obj.name, obj);

            obj = new Grid("grd_mst","30","Static01:15",null,"33.54%","30",null,null,null,"80",null,this.div02.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_bookmst");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"81\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"도서명\"/><Cell col=\"2\" text=\"도서구분\"/><Cell col=\"3\" text=\"판형\"/><Cell col=\"4\" text=\"제본\"/><Cell col=\"5\" text=\"본수\"/><Cell col=\"6\" text=\"대수\"/></Band><Band id=\"body\"><Cell text=\"bind:BOOKMST_SEQ\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:BOOKMST_NAME\"/><Cell col=\"2\" text=\"bind:BGBR_NM\"/><Cell col=\"3\" text=\"bind:FRM_NAME\"/><Cell col=\"4\" text=\"bind:BND_NAME\"/><Cell col=\"5\" text=\"bind:BOOKMST_BODYPAGE\"/><Cell col=\"6\" text=\"bind:BOOKMST_SIGNATURE\"/></Band></Format></Formats>");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static01_00","12","grd_mst:15","180","29",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("2");
            obj.set_text("▶제작사양");
            obj.set_color("#7fb39d");
            obj.set_font("bold 24px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.div02.addChild(obj.name, obj);

            obj = new Grid("grd_dtl","30","Static01_00:15",null,null,"30","25",null,null,"95",null,this.div02.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_bookdtl");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"55\"/><Column size=\"60\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"용도\"/><Cell col=\"1\" rowspan=\"2\" text=\"용지\"/><Cell col=\"2\" rowspan=\"2\" text=\"코팅\"/><Cell col=\"3\" rowspan=\"2\" text=\"쪽수\"/><Cell col=\"4\" rowspan=\"2\" text=\"벌\"/><Cell col=\"5\" rowspan=\"2\" text=\"돈뎅\"/><Cell col=\"6\" colspan=\"2\" text=\"색도\"/><Cell col=\"8\" rowspan=\"2\" text=\"특이사항\"/><Cell col=\"9\" rowspan=\"2\" text=\"비고\"/><Cell row=\"1\" col=\"6\" text=\"1\"/><Cell row=\"1\" col=\"7\" text=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:USE_NAME\"/><Cell col=\"1\" text=\"bind:PPR_NAME\"/><Cell col=\"2\" text=\"bind:COAT_NAME\"/><Cell col=\"3\" text=\"bind:BOOKDTL_PAGE\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:BOOKDTL_BUL\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:BOOKDTL_GANGED\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:BOOKDTL_TONE1\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:BOOKDTL_TONE2\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:BOOKDTL_COMMENT\"/><Cell col=\"9\" text=\"bind:BOOKDTL_REMARK\"/></Band></Format></Formats>");
            this.div02.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"26","75","31","20",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("출력");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel",null,"26","75","31","btn_print:10",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("엑셀변환");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1600,760,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div00.form.ed_pallet","value","ds_book","PALLET_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div00.form.ed_box","value","ds_book","BOX_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div00.form.ed_location","value","ds_book","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD6310F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD6310F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD6310F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var NewRowNum    = "";					// 추가행번호.
        var EditnRow	 = "";					//수정된 행번호
        var NewRowNum1   = "";					// 추가행번호.
        var EditnRow1    = "";					//수정된 행번호
        var IUSW    	 = "";					//수정된 행번호
        var IUSW1   	 = "";					//수정된 행번호
        var CHK_SW    	 = "";					//수정된 행번호
        var Error        = "";					//에러코드.
        var o_code       = "";
        var o_yy         = "";
        var return_code  = "";
        var return_code2 = "";
        var return_obj  = "";

        this.SD6310F_onload = function(obj,e)
        {
            this.div00.set_visible(true);
        	this.div01.set_visible(false);
        	this.div02.set_visible(false);
        	this.fnDataclear();
        };

        this.fnDataclear = function()
        {
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyy");
            IUSW                  = "N";
            IUSW1                 = "N";
            NewRowNum             = "";
            EditnRow              = "";
            NewRowNum1            = "";
            EditnRow1             = "";
            o_code                = "";
            o_yy                  = "";
        	this.ed_s_values1.set_index(0);
        	this.ed_s_values2.set_value("0000000000");
        	this.ed_s_values3.set_value("1199999999");
        	this.ed_s_values4.set_value("2009");
        	this.ed_s_values5.set_value("9999");
        	this.div00.form.ed_values1.set_value("");
        	this.div00.form.ed_values2.set_value(f_date);
        	this.div00.form.ed_values3.set_value("");
        	this.div00.form.ed_values4.set_value("");
        	this.div00.form.ed_values5.set_value("");
        	this.div00.form.ed_values6.set_value("");
        	this.div00.form.ed_values7.set_value("");
        	this.div00.form.ed_values8.set_value("");
        	this.div00.form.ed_values9.set_value("");
        	this.div00.form.ed_values10.set_value("");
        	this.div00.form.ed_values11.set_value("");
        	this.div00.form.ed_values12.set_value("");
        	this.div00.form.ed_values13.set_value("");
        	this.div00.form.ed_values14.set_value("");
        	this.div00.form.ed_values15.set_value("");
        	this.div00.form.ed_values16.set_value("");
        	this.div00.form.ed_values17.set_value("");
        	this.div00.form.ed_values18.set_value("");
        	this.div00.form.ed_values19.set_value("");
        	this.div00.form.ed_values20.set_value("");
        	this.div00.form.ed_values21.set_value("");
        	this.div00.form.ed_values22.set_value("");
        	this.div00.form.ed_values23.set_value("");
        	this.div00.form.ed_values24.set_value("");
        	this.div00.form.ed_values25.set_value("");
        	this.div00.form.ed_values26.set_value("");
        	this.div00.form.ed_values27.set_value("");
        	this.div00.form.ed_values28.set_value("");
        	this.div00.form.ed_values29.set_value("0");
        	this.div00.form.ed_values30.set_value("");
        	this.div00.form.ed_values31.set_value("");
        	this.ds_book_bscd.clearData();
        	this.ds_book_y.clearData();
        	this.ds_gbook.clearData();
        	this.ds_bookmst.clearData();
        	this.div00.form.ed_values32.set_value("");
        	this.div00.form.ed_values33.set_value("");
        	this.div00.form.ed_values34.set_value("");
        	this.div00.form.ed_values35.set_value("");
        	this.div00.form.ed_values36.set_value("0");
        	this.div00.form.ed_values37.set_value("");
        	this.div00.form.ed_values38.set_value("");
        	this.div00.form.ed_values39.set_value("0");
        	this.div00.form.ed_values40.set_value("");
        	this.div00.form.ed_values41.set_value("");
        	this.div00.form.ed_values42.set_value("0");
        	this.div00.form.ed_values43.set_value("");
        	this.div00.form.ed_values44.set_value("");
        	this.div00.form.ed_values45.set_value("0");
        	this.div00.form.ed_values46.set_value("0");
        	this.div00.form.ed_values47.set_value("0");
        	this.div00.form.ed_values48.set_value("");
        	this.div00.form.ed_values49.set_value("");
        	this.div00.form.ed_values50.set_value("");
        	this.div00.form.ed_values51.set_value("0");
        	this.div00.form.ed_values52.set_value("");
        	this.div00.form.ed_values53.set_value("");
        	this.div00.form.ed_values54.set_value("");
        	this.div00.form.ed_yearkind_cd.set_value("");
        	this.div00.form.ed_yearkind.set_index(-1);


        }
        this.btn_search_onclick = function(obj,e)
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
        		alert(strErrorMag);
        		return;
        	}
        }

        this.grd_book_oncelldblclick = function(obj,e)
        {
        	IUSW            = "Y";
        	IUSW1           = "Y";
        	this.div00.form.ed_values55.set_value(false);

        	this.div00.form.ed_values1.set_value( this.ds_book.getColumn(e.row,"CODE"));
        	this.div00.form.ed_values2.set_value(this.ds_book.getColumn(e.row,"YY"));
        	o_code                    	= this.ds_book.getColumn(e.row,"CODE");
        	o_yy                        = this.ds_book.getColumn(e.row,"YY");
        	this.div00.form.ed_values3.set_value( this.ds_book.getColumn(e.row,"BGRP_NM"));
        	this.div00.form.ed_values4.set_value( this.ds_book.getColumn(e.row,"NAME"));
        	this.div00.form.ed_values5.set_value( this.ds_book.getColumn(e.row,"MEIP_C"));
        	this.div00.form.ed_values6.set_index( this.div00.form.ed_values5.value);
        	this.div00.form.ed_values7.set_value( this.ds_book.getColumn(e.row,"BGBR_CD"));
        	this.div00.form.ed_values8.set_value( this.ds_book.getColumn(e.row,"BGBR_NM"));
        	this.div00.form.ed_values9.set_value( this.ds_book.getColumn(e.row,"CODE"));
        	this.div00.form.ed_values10.set_value( this.ds_book.getColumn(e.row,"CODE"));
        	this.div00.form.ed_values11.set_value( this.ds_book.getColumn(e.row,"YGUBN"));
        	this.div00.form.ed_values12.set_index( nexacro.toNumber(this.div00.form.ed_values11.value) - 1);
        	this.div00.form.ed_values13.set_value( this.ds_book.getColumn(e.row,"VAT_GB"));

        	this.div00.form.ed_values14.set_index( this.div00.form.ed_values13.value);
        	this.div00.form.ed_values15.set_value( this.ds_book.getColumn(e.row,"DANW_CD"));
        	this.div00.form.ed_values16.set_value( this.ds_book.getColumn(e.row,"DANW_NM"));
        	this.div00.form.ed_values17.set_value( this.ds_book.getColumn(e.row,"SGRP_CODE"));
        	this.div00.form.ed_values18.set_value( this.ds_book.getColumn(e.row,"SGRP_NM"));
        	this.div00.form.ed_values19.set_value( this.ds_book.getColumn(e.row,"HAK_CD"));
        	this.div00.form.ed_values20.set_value( this.ds_book.getColumn(e.row,"HAK_NM"));
        	this.div00.form.ed_values21.set_value( this.ds_book.getColumn(e.row,"C_YMD"));
        	this.div00.form.ed_values22.set_value( this.ds_book.getColumn(e.row,"P_YMD"));
        	this.div00.form.ed_values23.set_value( this.ds_book.getColumn(e.row,"MOOK"));
        	this.div00.form.ed_values24.set_value( this.ds_book.getColumn(e.row,"KWA_CD"));
        	this.div00.form.ed_values25.set_value( this.ds_book.getColumn(e.row,"KWA_NM"));
        	this.div00.form.ed_values26.set_value( this.ds_book.getColumn(e.row,"PANH_CD"));
        	this.div00.form.ed_values27.set_value( this.ds_book.getColumn(e.row,"PANH_NM"));
        	this.div00.form.ed_values28.set_value( this.ds_book.getColumn(e.row,"ISBN_N"));
        	this.div00.form.ed_values29.set_value( this.ds_book.getColumn(e.row,"TPAGE"));
        	this.div00.form.ed_values30.set_value( this.ds_book.getColumn(e.row,"BUGA_N"));
        	this.div00.form.ed_values31.set_value( this.ds_book.getColumn(e.row,"NYUK"));
        	this.div00.form.ed_values32.set_value( this.ds_book.getColumn(e.row,"SYMD"));
        	this.div00.form.ed_values33.set_value( this.ds_book.getColumn(e.row,"EYMD"));
        	this.div00.form.ed_values34.set_value( this.ds_book.getColumn(e.row,"DUNG_CD1"));
        	this.div00.form.ed_values35.set_value( this.ds_book.getColumn(e.row,"DUNG1_NM"));
        	this.div00.form.ed_values36.set_value( this.ds_book.getColumn(e.row,"YUL1"));
        	this.div00.form.ed_values37.set_value( this.ds_book.getColumn(e.row,"DUNG_CD2"));
        	this.div00.form.ed_values38.set_value( this.ds_book.getColumn(e.row,"DUNG2_NM"));
        	this.div00.form.ed_values39.set_value( this.ds_book.getColumn(e.row,"YUL2"));
        	this.div00.form.ed_values40.set_value( this.ds_book.getColumn(e.row,"DUNG_CD3"));
        	this.div00.form.ed_values41.set_value( this.ds_book.getColumn(e.row,"DUNG3_NM"));
        	this.div00.form.ed_values42.set_value( this.ds_book.getColumn(e.row,"YUL3"));
        	this.div00.form.ed_values43.set_value( this.ds_book.getColumn(e.row,"DUNG_CD4"));
        	this.div00.form.ed_values44.set_value( this.ds_book.getColumn(e.row,"DUNG4_NM"));
        	/* JSP 내에서 해당 컬럼 만들지 않으며, 쓰이지도 않음
        	if ( (this.ds_book.getColumn(e.row,"OLD_CODE").substr(0,1)) == "1" )
        		 this.div00.form.ed_values55.set_value(true);
        	*/
        	this.div00.form.ed_values45.set_value( this.ds_book.getColumn(e.row,"YUL4"));
        	this.div00.form.ed_values46.set_value( this.ds_book.getColumn(e.row,"COST"));
        	this.div00.form.ed_values47.set_value( this.ds_book.getColumn(e.row,"PCOST"));
        	this.div00.form.ed_values48.set_value( this.ds_book.getColumn(e.row,"B_YN"));
        	this.div00.form.ed_values49.set_index( this.div00.form.ed_values48.Text);
        	this.div00.form.ed_values50.set_value( this.ds_book.getColumn(e.row,"B_YMD"));
        	this.div00.form.ed_values51.set_value( this.ds_book.getColumn(e.row,"B_YUL"));
        	this.div00.form.ed_values52.set_value( this.ds_book.getColumn(e.row,"BIGO"));
        	this.div00.form.ed_values53.set_value( this.ds_book.getColumn(e.row,"JUK_GB"));
        	this.div00.form.ed_values54.set_index( this.div00.form.ed_values53.Text);
        	this.div00.form.ed_yearkind_cd.set_value( this.ds_book.getColumn(e.row,"YEAR_KIND"));
        	this.div00.form.ed_yearkind.set_value( this.ds_book.getColumn(e.row,"YEAR_KIND"));

        	var strUrl = "JSP/sd/select_bscd.jsp"
        	var strDs 	= "ds_book_bscd=ds_book_bscd";
        	var strArg;
        	strArg = " Values1="+nexacro.wrapQuote(this.div00.form.ed_values1.value)+" Values2="+nexacro.wrapQuote(this.div00.form.ed_values2.value);
        	this.gfn_TransactionP("select_grid", strUrl, strDs, strDs, strArg, "fnTr_Callback", false, "P", false, this);

        	var strUrl = "JSP/sd/jbook_help.jsp"
        	var strArg  = "Option1="+nexacro.wrapQuote(o_code)+
        				  " Option2="+nexacro.wrapQuote(o_yy);
        	this.gfn_TransactionP("jbook_help", strUrl, "", "", strArg, "fnTr_Callback", true, "P", false, this);

        	var strUrl = "JSP/sd/gbook_help.jsp"
        	var strDs 	= "ds_gbook=ds_gbook";
        	var strArg  = "Values1="+nexacro.wrapQuote(o_code)+
        				  " Values2="+nexacro.wrapQuote(o_yy);
        	this.gfn_TransactionP("gbook_help", strUrl, strDs, strDs, strArg, "fnTr_Callback", true, "P", false, this);

        	var strUrl = "JSP/sd/select_bookcust_all.jsp"
        	var strDs 	= "ds_book_y=ds_book_y";
        	var strArg;
        	var chk_opt ;
        	strArg = " Values1="+nexacro.wrapQuote(o_code)+
        			 " Values2="+nexacro.wrapQuote(o_yy);
        	this.gfn_TransactionP("codesearch", strUrl, strDs, strDs, strArg, "fnTr_Callback", true, "P", false, this);

        	var strUrl = "JSP/sd/bookmst_help.jsp"
        	var strDs 	= "ds_bookmst=ds_bookmst";
        	var strArg;
        	strArg = " Values1="+nexacro.wrapQuote(o_code)+
        			 " Values2="+nexacro.wrapQuote(o_yy);
        	this.gfn_TransactionP("bookmst_help", strUrl, strDs, strDs, strArg, "fnTr_Callback", true, "P", false, this);
        };


        this.fnTr_Callback = function(strSvcID, nErrorCode, strErrorMag)
        {
            if ( strSvcID == "jbook_help" )
        	{
        		var return_codes = strErrorMag.split('^');
        		return_code = return_codes[0];
        		return_code2 = return_codes[1];
        		if ((return_code).length == 0)
        			alert ("미등록 데이터");
        		else
        		{
        			this.div00.form.ed_values9.set_value(return_code);
        			this.div00.form.ed_values10.set_value(return_code2);
        		}
        	}
        }

        this.btn_page_onclick = function(obj,e)
        {
        	if(obj.name == 'btn_page1' || obj.name == 'btn_page2')
        	{
        		if(IUSW == "N")
        		{
        			alert("자료선택 후 클릭");
        			return;
        		}
        	}
        	switch(obj.name)
        	{
        		case 'btn_page0':
        			this.div00.set_visible(true);
        			this.div01.set_visible(false);
        			this.div02.set_visible(false);
        			break;
        		case 'btn_page1':
        			this.div00.set_visible(false);
        			this.div01.set_visible(true);
        			this.div02.set_visible(false);
        			break;
        		case 'btn_page2':
        			this.div00.set_visible(false);
        			this.div01.set_visible(false);
        			this.div02.set_visible(true);
        			break;
        	}
        };

        this.div02_grd_mst_oncelldblclick = function(obj,e)
        {
        	var strUrl = "JSP/sd/bookdtl_help.jsp";
        	var strArg, bookid ;
        	var strDs 	= "ds_bookdtl=ds_bookdtl";
        	bookid = this.ds_bookmst.getColumn(e.row,"BOOKMST_ID");
        	strArg = " Values1="+nexacro.wrapQuote(bookid);
        	this.gfn_TransactionP("bookdtl_help", strUrl, strDs, strDs, strArg, "fnTr_Callback", true, "P", false, this);
        };

        this.btn_print_onclick = function(obj,e)
        {
        	var nX = system.clientToScreenX(this, 0);
        	var nY = system.clientToScreenY(this, 0);
        	var strArg;
        	var sOpenStyle = "topmost=true autosize=true dragmovetype=all titletext=조회화면 showtitlebar=true showstatusbar=false resizable=true";
        	nexacro.open("print", "sd::SD6310P.xfdl", this.getOwnerFrame(), "", sOpenStyle, nX, nY);
        };

        this.btn_excel_onclick = function(obj,e)
        {
        	this.lfn_showModal("excel", "", "sd::SD6311P.xfdl", "", this, 0, 0, 880, 600);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD6310F_onload,this);
            this.grd_book.addEventHandler("oncelldblclick",this.grd_book_oncelldblclick,this);
            this.btn_page0.addEventHandler("onclick",this.btn_page_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div00.form.ed_values1.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values1.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_values2.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values2.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_values7.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values7.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_values11.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values11.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_values15.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values15.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_values19.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values19.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_values24.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values24.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_values32.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values32.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_values5.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values5.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_values9.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values9.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_values13.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values13.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_values17.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values17.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_values23.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values23.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_values26.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values26.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_yearkind_cd.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_yearkind_cd.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_values34.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values34.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_values33.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values33.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_values36.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values36.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_values37.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values37.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_values39.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values39.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_values40.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values40.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_values42.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values42.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_values43.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values43.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_values45.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values45.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_values46.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values46.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_values47.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values47.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_values48.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values48.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_values50.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values50.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_values51.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values51.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.div00.form.ed_values53.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.div00.form.ed_values53.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.ed_s_values5.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_s_values5.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.ed_s_values4.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_s_values4.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.ed_s_values2.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_s_values2.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.ed_s_values3.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_s_values3.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.btn_page1.addEventHandler("onclick",this.btn_page_onclick,this);
            this.btn_page2.addEventHandler("onclick",this.btn_page_onclick,this);
            this.div02.form.grd_mst.addEventHandler("oncelldblclick",this.div02_grd_mst_oncelldblclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
        };
        this.loadIncludeScript("SD6310F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
