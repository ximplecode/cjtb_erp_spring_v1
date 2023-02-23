(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PD201F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1630,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCCUL", this);
            obj._setContents("<ColumnInfo><Column id=\"CCUL_ID\" type=\"STRING\" size=\"20\"/><Column id=\"CCUL_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"CCUL_USEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"CREDITCARD_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"CREDITCARD_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CCUL_AMOUNT\" type=\"STRING\" size=\"10\"/><Column id=\"CCUL_CUST_NAME\" type=\"STRING\" size=\"35\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"CCUL_GETBACK_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"CCUL_GETBACK_USER\" type=\"STRING\" size=\"6\"/><Column id=\"CCUL_GETBACK\" type=\"STRING\" size=\"1\"/><Column id=\"CCUL_REMARK\" type=\"STRING\" size=\"200\"/><Column id=\"CCUL_BUSINESSTRIP\" type=\"STRING\" size=\"1\"/><Column id=\"CCUL_BUSINESSTRIP_NAME\" type=\"STRING\" size=\"4\"/><Column id=\"CCUL_SECTIONMANAGECOST\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCorpCard", this);
            obj._setContents("<ColumnInfo><Column id=\"CREDITCARD_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"CREDITCARD_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"CREDITCARD_ENABLED\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCardList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"2\"/><Column id=\"CI_IDEX\" type=\"STRING\" size=\"10\"/><Column id=\"CI_CARD\" type=\"STRING\" size=\"30\"/><Column id=\"CI_CARDNUM\" type=\"STRING\" size=\"30\"/><Column id=\"CI_CARDNAME\" type=\"STRING\" size=\"25\"/><Column id=\"CI_ACCOUNT\" type=\"STRING\" size=\"30\"/><Column id=\"CI_AMTLIMIT\" type=\"STRING\" size=\"30\"/><Column id=\"CI_CARDDATE\" type=\"STRING\" size=\"20\"/><Column id=\"CI_CVCNUM\" type=\"STRING\" size=\"10\"/><Column id=\"CI_USEFLG\" type=\"STRING\" size=\"10\"/><Column id=\"CI_INUSER\" type=\"STRING\" size=\"20\"/><Column id=\"CI_INDATE\" type=\"STRING\" size=\"20\"/><Column id=\"CI_UPDATE\" type=\"STRING\" size=\"20\"/><Column id=\"CI_BIGO\" type=\"STRING\" size=\"100\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"4\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"25\"/><Column id=\"CI_PAYBANKNAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSection", this);
            obj._setContents("<ColumnInfo><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_SHORTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBankType", this);
            obj._setContents("<ColumnInfo><Column id=\"BANK_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"BANK_NAME\" type=\"STRING\" size=\"15\"/></ColumnInfo><Rows><Row><Col id=\"BANK_CODE\">0</Col><Col id=\"BANK_NAME\">선택</Col></Row><Row><Col id=\"BANK_CODE\">1</Col><Col id=\"BANK_NAME\">국민</Col></Row><Row><Col id=\"BANK_CODE\">2</Col><Col id=\"BANK_NAME\">신한</Col></Row><Row><Col id=\"BANK_CODE\">3</Col><Col id=\"BANK_NAME\">우리</Col></Row><Row><Col id=\"BANK_CODE\">4</Col><Col id=\"BANK_NAME\">현대</Col></Row><Row><Col id=\"BANK_CODE\">5</Col><Col id=\"BANK_NAME\">삼성</Col></Row><Row><Col id=\"BANK_CODE\">6</Col><Col id=\"BANK_NAME\">기업</Col></Row><Row><Col id=\"BANK_CODE\">7</Col><Col id=\"BANK_NAME\">(개인)법인</Col></Row><Row><Col id=\"BANK_CODE\">8</Col><Col id=\"BANK_NAME\">하나</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGB", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">전체</Col></Row><Row><Col id=\"NAME\">유효</Col><Col id=\"CODE\">01</Col></Row><Row><Col id=\"NAME\">만료</Col><Col id=\"CODE\">02</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCardList_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"2\"/><Column id=\"CI_IDEX\" type=\"STRING\" size=\"10\"/><Column id=\"CI_CARD\" type=\"STRING\" size=\"30\"/><Column id=\"CI_CARDNUM\" type=\"STRING\" size=\"30\"/><Column id=\"CI_CARDNAME\" type=\"STRING\" size=\"25\"/><Column id=\"CI_ACCOUNT\" type=\"STRING\" size=\"30\"/><Column id=\"CI_AMTLIMIT\" type=\"STRING\" size=\"30\"/><Column id=\"CI_CARDDATE\" type=\"STRING\" size=\"20\"/><Column id=\"CI_CVCNUM\" type=\"STRING\" size=\"10\"/><Column id=\"CI_USEFLG\" type=\"STRING\" size=\"10\"/><Column id=\"CI_INUSER\" type=\"STRING\" size=\"20\"/><Column id=\"CI_INDATE\" type=\"STRING\" size=\"20\"/><Column id=\"CI_UPDATE\" type=\"STRING\" size=\"20\"/><Column id=\"CI_BIGO\" type=\"STRING\" size=\"100\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"4\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"25\"/><Column id=\"CI_PAYBANKNAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_main","0","0","1350","730",null,null,"790",null,"390",null,this);
            obj.set_taborder("56");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"5.48%","5.63%","4.4%","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"5.48%","5.63%","4.40%","btn_del:16.68%",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("5");
            obj.set_text("출력");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_excel",null,"5.48%","7.12%","4.40%","btn_print:16.68%",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("4");
            obj.set_text("엑셀변환");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"5.48%","5.63%","4.40%","btn_excel:11.12%",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_edit",null,"5.48%","5.63%","4.40%","btn_save:16.68%",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("2");
            obj.set_text("수정");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_cancle",null,"5.48%","5.63%","4.40%","btn_edit:16.68%",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"5.48%","7.12%","4.40%","btn_cancle:16.68%",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_text("신규카드");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01_03","58.75%","11.79%","9.5%","4.53%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("39");
            obj.set_text("CVC번호");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("1px");
            obj.set_padding("0px 0px 0px 2px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01_07","58.75%","Static01_03:-1","9.5%","4.53%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("40");
            obj.set_text("유효기간");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_padding("0px 0px 0px 2px");
            obj.set_letterSpacing("2px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01_11","58.75%","Static01_07:-1","9.5%","4.53%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("41");
            obj.set_text("사용유무");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01_14","58.75%","Static01_11:-1","9.5%","4.53%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("42");
            obj.set_text("은      행");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static_SP1","2.22%","Static01_14:1",null,"2","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("48");
            obj.set_background("#368b65");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static_BG2","2.22%","Static_SP1:1",null,"4.53%","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("47");
            obj.set_border("1px solid #10aea9");
            obj.set_textAlign("center");
            obj.set_color("#00307a");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static02_00","Static_BG2:-100%","Static_BG2:-100%","Static_SP1:8.40%","4.53%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("49");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_text("조    회");
            obj.set_background("#e0f6ff");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01_01","Static02_00:-1","11.79%","9.5%","4.53%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("32");
            obj.set_text("등록번호");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01_05","Static02_00:-1","Static01_01:-1","9.5%","4.53%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("33");
            obj.set_text("카 드 명");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01_09","Static02_00:-1","Static01_05:-1","9.5%","4.53%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("34");
            obj.set_text("결제은행");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01_13","Static02_00:-1","Static01_09:-1","9.5%","4.53%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("35");
            obj.set_text("비      고");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_padding("1px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01_00","2.22%","Static01_01:-100%","8.15%",null,null,"Static01_13:-100%",null,null,null,null,this.div_main.form);
            obj.set_taborder("31");
            obj.set_border("1px solid #10aea9");
            obj.set_text("카  드\r\n\r\n정  보");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_background("#ebfef3");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("cbo_banktype","36.67%","11.79%","9.5%","4.53%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("8");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("false");
            obj.set_innerdataset("dsBankType");
            obj.set_codecolumn("BANK_CODE");
            obj.set_datacolumn("BANK_NAME");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_text("");
            obj.set_value("");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01_02",null,"11.79%","9%","4.53%","cbo_banktype:-1",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("36");
            obj.set_text("카드번호");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_padding("0px 0px 0px 2px");
            obj.set_letterSpacing("2px");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_index","Static01_01:-1","11.79%",null,"4.53%","Static01_02:-1",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("false");
            obj.set_textAlign("center");
            obj.set_font("12px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("medt_cardnum","cbo_banktype:-1","11.79%",null,"4.53%","Static01_03:-1",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("9");
            obj.set_border("1px solid #10aea9");
            obj.set_type("string");
            obj.set_format("####-####-####-####");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01_06","36.67%","Static01_01:-1","9.5%","4.53%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("37");
            obj.set_text("결제한도");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_padding("0px 0px 0px 2px");
            obj.set_letterSpacing("2px");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_cardname","Static01_05:-1","Static01_01:-1",null,"4.53%","Static01_06:-1",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("12");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("true");
            obj.set_textAlign("left");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01_10","36.67%","Static01_05:-1","9.5%","4.53%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("38");
            obj.set_text("결제계좌");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_padding("0px 0px 0px 2px");
            obj.set_letterSpacing("2px");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_paybank","Static01_09:-1","Static01_05:-1",null,"4.53%","Static01_10:-1",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("16");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("true");
            obj.set_textAlign("left");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("medt_amtlimit","Static01_06:-1","Static01_01:-1",null,"4.53%","Static01_07:-1",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("13");
            obj.set_border("1px solid #10aea9");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_visible("true");
            obj.set_displaynulltext("0");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("medt_bankacc","Static01_10:-1","Static01_05:-1",null,"4.53%","Static01_11:-1",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("17");
            obj.set_border("1px solid #10aea9");
            obj.set_type("string");
            obj.set_format("################");
            obj.set_textAlign("center");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_bigo","Static01_13:-1","Static01_09:-1",null,"4.53%","Static01_14:-1",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("20");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("true");
            obj.set_textAlign("left");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_cvc","Static01_03:-1","11.79%","8.89%","4.53%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("true");
            obj.set_textAlign("center");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_expdate","Static01_07:-1","Static01_03:-1","8.89%","4.53%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("14");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("true");
            obj.set_textAlign("center");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_04","Static01_11:-1","Static01_07:-1","8.89%","4.53%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("43");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("true");
            obj.set_textAlign("center");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("medt_cust_cd","Static01_14:-1","Static01_11:-1","5.19%","4.53%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("21");
            obj.set_border("1px solid #10aea9");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_format("@@@@");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_cust_nm","medt_cust_cd:-1","Static01_11:-1","13.19%","4.53%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("22");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("true");
            obj.set_textAlign("left");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01_04","edt_cvc:-1","11.79%","9.5%","4.53%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("44");
            obj.set_text("등  록  자");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_padding("0px 0px 0px 1px");
            obj.set_letterSpacing("1px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01_08","edt_expdate:-1","Static01_03:-1","9.5%","4.53%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("45");
            obj.set_text("등  록  일");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("1px");
            obj.set_padding("0px 0px 0px 1px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01_12","edt_04:-1","Static01_07:-1","9.5%","4.53%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("46");
            obj.set_text("최근수정일");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("medt_update","Static01_12:-1","Static01_07:-1",null,"4.53%","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("19");
            obj.set_border("1px solid #10aea9");
            obj.set_type("string");
            obj.set_format("####/##/## ##:##:##");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("medt_indate","Static01_08:-1","Static01_03:-1",null,"4.53%","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("15");
            obj.set_border("1px solid #10aea9");
            obj.set_type("string");
            obj.set_format("####/##/## ##:##:##");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_inuser","Static01_04:-1","11.79%",null,"4.53%","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("11");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("false");
            obj.set_textAlign("center");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_usecode","edt_04:-75%","edt_04:-78.79%","4.44%","2.74%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("18");
            obj.set_text("사용");
            obj.set_textAlign("center");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_value("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static02_01","Static02_00:-1","Static_BG2:-100%","9.5%","4.53%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("50");
            obj.set_text("카드종류");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static02_03","Static_BG2:-51.48%","Static_BG2:-100%","9.5%","4.53%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("52");
            obj.set_text("결제계좌");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_padding("0px 0px 0px 2px");
            obj.set_letterSpacing("2px");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("medt_sch_cardnum","36.67%","Static_BG2:-100%",null,"4.53%","Static02_03:-1",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("24");
            obj.set_border("1px solid #10aea9");
            obj.set_type("string");
            obj.set_format("####-####-####-####");
            obj.set_textAlign("center");
            obj.set_enable("true");
            obj.set_font("12px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"Static_BG2:-100%","9.00%","4.53%","medt_sch_cardnum:-1",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("51");
            obj.set_text("카드번호");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_padding("0px 0px 0px 2px");
            obj.set_letterSpacing("2px");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("cbo_sch_type","Static02_01:-1","Static_BG2:-100%",null,"4.53%","Static02_02:-1",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("23");
            obj.set_border("1px solid #10aea9");
            obj.set_innerdataset("dsBankType");
            obj.set_codecolumn("BANK_CODE");
            obj.set_datacolumn("BANK_NAME");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("medt_sch_bankacc","Static02_03:-1","Static_BG2:-100%","9.48%","4.52%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("26");
            obj.set_border("1px solid #10aea9");
            obj.set_type("string");
            obj.set_format("################");
            obj.set_textAlign("center");
            obj.set_font("12px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static02_04","medt_sch_bankacc:-1","Static_BG2:-100%","8.89%","4.53%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("53");
            obj.set_text("유효기간");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_padding("0px 0px 0px 2px");
            obj.set_letterSpacing("2px");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("cbo_gb","Static02_04:-1","Static_BG2:-100%","9.50%","4.53%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("27");
            obj.set_border("1px solid #10aea9");
            obj.set_innerdataset("dsGB");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_search","cbo_gb:75%","Static_BG2:-90%",null,"Static_BG2:80%","Static_BG2:-99.33%",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("30");
            obj.set_text("조회");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static_SP2","2.22%","Static_BG2:1",null,"2","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("54");
            obj.set_background("#368b65");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_cardlist","2.22%","Static_SP2:1",null,"63.42%","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("55");
            obj.set_border("1px solid #10aea9");
            obj.set_binddataset("dsCardList");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"26\"/><Column size=\"64\"/><Column size=\"64\"/><Column size=\"124\"/><Column size=\"116\"/><Column size=\"78\"/><Column size=\"100\"/><Column size=\"84\"/><Column size=\"64\"/><Column size=\"40\"/><Column size=\"56\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"64\"/><Column size=\"186\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"등록번호\"/><Cell col=\"2\" text=\"종류\"/><Cell col=\"3\" text=\"카드번호\"/><Cell col=\"4\" text=\"카드명\"/><Cell col=\"5\" text=\"결제은행\"/><Cell col=\"6\" text=\"결제계좌\"/><Cell col=\"7\" text=\"결제한도\"/><Cell col=\"8\" text=\"유효기간\"/><Cell col=\"9\" text=\"CVC\"/><Cell col=\"10\" text=\"등록자\"/><Cell col=\"11\" text=\"등록일\"/><Cell col=\"12\" text=\"최근수정일\"/><Cell col=\"13\" text=\"사용유무\"/><Cell col=\"14\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:CI_IDEX\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:CI_CARD\" displaytype=\"combotext\" combodataset=\"dsBankType\" combocodecol=\"BANK_CODE\" combodatacol=\"BANK_NAME\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:CI_CARDNUM\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"####-####-####-####\" maskedittype=\"string\"/><Cell col=\"4\" text=\"bind:CI_CARDNAME\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:CI_PAYBANKNAME\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:CI_ACCOUNT\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:CI_AMTLIMIT\" textAlign=\"center\" displaytype=\"currency\"/><Cell col=\"8\" text=\"bind:CI_CARDDATE\" textAlign=\"center\" maskeditformat=\"@@@@-@@\" maskedittype=\"string\" displaytype=\"mask\"/><Cell col=\"9\" text=\"bind:CI_CVCNUM\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:CI_INUSER\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:CI_INDATE\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"@@@@/@@/@@ @@:@@:@@\" maskedittype=\"string\"/><Cell col=\"12\" text=\"bind:CI_UPDATE\" textAlign=\"center\" maskeditformat=\"@@@@/@@/@@ @@:@@:@@\" maskedittype=\"string\" displaytype=\"mask\"/><Cell col=\"13\" text=\"bind:CI_USEFLG\" textAlign=\"center\" expr=\"Eco.decode(CI_USEFLG, &quot;1&quot;,&apos;사용&apos;,&quot;true&quot;,&apos;사용&apos;,&quot;0&quot;,&quot;사용불가&quot;,&quot;false&quot;,&quot;사용불가&quot;)\"/><Cell col=\"14\" text=\"bind:CI_BIGO\" textAlign=\"center\"/></Band><Band id=\"summary\"><Cell background=\"#0d908c\" color=\"white\"/><Cell col=\"1\" background=\"#0d908c\" color=\"white\"/><Cell col=\"2\" background=\"#0d908c\" color=\"white\"/><Cell col=\"3\" background=\"#0d908c\" text=\"등록 합계\" color=\"white\"/><Cell col=\"4\" background=\"#0d908c\" color=\"white\"/><Cell col=\"5\" background=\"#0d908c\" color=\"white\"/><Cell col=\"6\" background=\"#0d908c\" expr=\"dataset.rowcount\" displaytype=\"text\" color=\"white\"/><Cell col=\"7\" background=\"#0d908c\" color=\"white\"/><Cell col=\"8\" background=\"#0d908c\" color=\"white\"/><Cell col=\"9\" background=\"#0d908c\" color=\"white\"/><Cell col=\"10\" background=\"#0d908c\" color=\"white\"/><Cell col=\"11\" background=\"#0d908c\" color=\"white\"/><Cell col=\"12\" background=\"#0d908c\" color=\"white\"/><Cell col=\"13\" background=\"#0d908c\" color=\"white\"/><Cell col=\"14\" background=\"#0d908c\" color=\"white\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static00","3.33%","1.51%","30%","9.45%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("56");
            obj.set_text("법인카드 등록");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static_99","edt_cust_nm:-1","medt_update:-1",null,"4.53%","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("25");
            obj.set_border("1px solid #10aea9");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_scust","edt_cust_nm:2.63%","Static_99:-90%","Static_99:17.45%","Static_99:80%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("28");
            obj.set_background("url(\'Img::btn_TF_src.png\') no-repeat center center");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_newup","btn_scust:19.23%","Static_99:-90%",null,"Static_99:80%","Static_99:-95.97%",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("29");
            obj.set_text("데이터 업로드");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.div_main.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1630,760,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_main.form.edt_index","value","dsCardList","CI_IDEX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_main.form.cbo_banktype","value","dsCardList","CI_CARD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_main.form.medt_cardnum","value","dsCardList","CI_CARDNUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_main.form.edt_cvc","value","dsCardList","CI_CVCNUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_main.form.medt_bankacc","value","dsCardList","CI_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_main.form.medt_amtlimit","value","dsCardList","CI_AMTLIMIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_main.form.edt_expdate","value","dsCardList","CI_CARDDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_main.form.chk_usecode","value","dsCardList","CI_USEFLG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_main.form.edt_bigo","value","dsCardList","CI_BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_main.form.edt_inuser","value","dsCardList","CI_INUSER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_main.form.medt_indate","value","dsCardList","CI_INDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_main.form.medt_update","value","dsCardList","CI_UPDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_main.form.edt_cardname","value","dsCardList","CI_CARDNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_main.form.medt_cust_cd","value","dsCardList","CUST_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_main.form.edt_cust_nm","value","dsCardList","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_main.form.edt_paybank","value","dsCardList","CI_PAYBANKNAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PD201F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("PD201F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("PD201F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var cust_cd, cust_nm;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");

        this.PD201F_onload = function(obj,e)
        {
        	this.fnInit();
        	this.div_main.form.btn_search.click();
        	this.fnCloseEdit();
        };

        this.fnInit = function()
        {
        	this.div_main.form.edt_index.set_value("");
        	this.div_main.form.cbo_banktype.set_index(0);
        	this.div_main.form.medt_cardnum.set_value("");
        	this.div_main.form.edt_cvc.set_value("");
        	this.div_main.form.medt_bankacc.set_value("");
        	this.div_main.form.medt_amtlimit.set_value("");
        	this.div_main.form.edt_expdate.set_value("");
        	this.div_main.form.chk_usecode.set_value(1);
        	this.div_main.form.edt_bigo.set_value("");
        	this.div_main.form.edt_inuser.set_value(gv_sabun);
        	this.div_main.form.edt_cardname.set_value("");
        }

        this.fnOpenEdit = function()
        {
        	this.div_main.form.cbo_banktype.set_enable(true);
        	this.div_main.form.medt_cardnum.set_enable(true);
        }

        this.fnCloseEdit = function()
        {
        	this.div_main.form.cbo_banktype.set_enable(false);
        	this.div_main.form.medt_cardnum.set_enable(false);
        }

        this.div_main_btn_new_onclick = function(obj,e)
        {
        	this.dsCardList.clearData();
        	this.dsCardList.addRow();
        	this.fnInit();
        	this.fnOpenEdit();
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMddhhmmss");
        	this.div_main.form.cbo_banktype.set_index(0);		// 선택
        	this.div_main.form.medt_indate.set_value(f_date); 	// 등록일
        	this.div_main.form.medt_update.set_value(""); 		// 최근수정일
        };

        this.div_main_btn_cancle_onclick = function(obj,e)
        {
        	// 데이터 입력 취소 처리
        	if(this.div_main.form.cbo_banktype.enable == true)
        	{
        		this.fnInit();
        		this.fnCloseEdit();
        		this.div_main.form.medt_indate.set_value(""); // 등록일
        		this.div_main.form.medt_update.set_value(""); // 최근수정일
        		this.div_main.form.cbo_banktype.set_index(-1);
        	}
        	// 조회 취소 처리
        	else
        	{
        		this.div_main.form.cbo_sch_type.set_index(0);
        		this.div_main.form.medt_sch_cardnum.set_value("");
        		this.div_main.form.medt_sch_bankacc.set_value("");
        	}
        };

        this.div_main_btn_save_onclick = function(obj,e)
        {
        	var count;

            if (this.div_main.form.edt_index.value == null || (this.div_main.form.edt_index.value).length > 0)
            {
        		alert("기존카드를 중복으로 등록할 수 없습니다, 신규카드 또는 수정을 이용하세요.");
        		return;
        	}
        	if (this.div_main.form.cbo_banktype.index == null || this.div_main.form.cbo_banktype.index == 0)
        	{
        		alert("카드종류를 선택하세요.");
        		this.div_main.form.cbo_banktype.setFocus();
        		return;
        	}
        	if (this.div_main.form.medt_cardnum.value == null || (nexacro.trim(this.div_main.form.medt_cardnum.value)).length != 16)
        	{
        		alert("카드번호를 확인하세요.");
        		this.div_main.form.medt_cardnum.setFocus();
        		return;
        	}
        	if (this.div_main.form.edt_cvc.value == null || (this.div_main.form.edt_cvc.value).length != 3)
        	{
        		alert("CVC번호를 확인하세요.");
        		this.div_main.form.edt_cvc.setFocus();
        		return;
        	}
        	if (this.div_main.form.edt_expdate.value == null || (this.div_main.form.edt_expdate.value).length != 6)
        	{
        		alert("유효기간을 확인하세요.\n(유효기간은 년월 6자리 입니다)");
        		this.div_main.form.edt_expdate.setFocus();
        		return;
        	}
        	var objApp = nexacro.getApplication();
        	if(msg_result = objApp.confirm( "저장하시겠습니까?" , "저장확인", "warning" ))
        	{
        		this.fnSaveSearch(); //저장가능 여부 확인

        		count = nexacro.toNumber(this.dsCardList_search.rowcount);

        		if (count > 0)
        		{
        			alert("등록 카드가 이미 존재합니다.");
        			return;
        		}
        		else
        		{
        			var objDate = new nexacro.Date();
        			var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMddhhmmss");
        			this.div_main.form.medt_indate.set_value(f_date);//등록일
        			this.div_main.form.medt_update.set_value(f_date);//최근수정일
        			this.fnBtnSave(); //저장 함수 호출
        		}
        	}
        };

        this.fnBtnSave = function()
        {
        	var strUrl = "JSP/pd/pd201f_corpcard_save.jsp";
        	var strArg;
        	strArg  = " cboBankType="	+ nexacro.wrapQuote(this.div_main.form.cbo_banktype.value);
        	strArg += " mdtCardNum="	+ nexacro.wrapQuote(this.div_main.form.medt_cardnum.value); //카드번호
        	strArg += " edtCvc="    	+ nexacro.wrapQuote(this.div_main.form.edt_cvc.value); //cvc번호
        	strArg += " mdtBankAcc="    + nexacro.wrapQuote(this.div_main.form.medt_bankacc.value); //결제계좌
        	strArg += " mdtAmtLimit="   + nexacro.wrapQuote(this.div_main.form.medt_amtlimit.value);  //결제한도
        	strArg += " edtExpdate="    + nexacro.wrapQuote(this.div_main.form.edt_expdate.value); //유효기간
        	strArg += " edtBigo="      	+ nexacro.wrapQuote(this.div_main.form.edt_bigo.value); //비고
        	if(this.div_main.form.chk_usecode.value == true || this.div_main.form.chk_usecode.value == 1)
        		strArg += " chkusecode="    + nexacro.wrapQuote(1); // 사용유무 (nexacro에서는 checkbox value값이 true or false로 나오기에 조건문 추가)
        	else
        		strArg += " chkusecode="    + nexacro.wrapQuote(0); //사용유무
        	strArg += " edtInUser="     + nexacro.wrapQuote(gv_sabun); //등록자
        	strArg += " mdtInDate="     + nexacro.wrapQuote(this.div_main.form.medt_indate.value); //등록일
        	strArg += " mdtupdate="     + nexacro.wrapQuote(this.div_main.form.medt_update.value); //최근수정일
        	strArg += " edtCardname="   + nexacro.wrapQuote(this.div_main.form.edt_cardname.text); //카드명
        	strArg += " cust_gb="		+ nexacro.wrapQuote("47");
        	strArg += " cust_cd="		+ nexacro.wrapQuote(this.div_main.form.medt_cust_cd.value);
        	strArg += " edtPayBankNm="	+ nexacro.wrapQuote(this.div_main.form.edt_paybank.value);  //결제은행

        	this.gfn_TransactionP("Save_card", strUrl, "", "", strArg, "fnCallback", false, "P", false, this);
        }

        this.fnSaveSearch = function()
        {
        	var strUrl = "JSP/pd/pd201f_corpcard_Search.jsp"
        	var	strArg;   //변수
        	var strDs 	= "dsCardList_search=dsCardList_search"; //받는 데이터셋

        	strArg  = " cboBankType="	+ nexacro.wrapQuote(this.div_main.form.cbo_banktype.value);
        	strArg += " mdtCardNum="	+ nexacro.wrapQuote(this.div_main.form.medt_cardnum.value);
        	strArg += " mdtBankAcc="	+ nexacro.wrapQuote(this.div_main.form.medt_bankacc.value);
        	strArg += " CI_USEFLG="		+ nexacro.wrapQuote(0); //사용유무

        	this.dsCardList_search.clearData(); //데이터 초기화

        	this.gfn_TransactionP("Search_count", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        }

        this.div_main_btn_search_onclick = function(obj,e)
        {
        	var strUrl = "JSP/pd/pd201f_corpcard_Search.jsp";
        	var	strArg;   //변수
        	var strDs 	= "dsCardList=dsCardList"; //받는 데이터셋

        	strArg  = " cboBankType="	+ nexacro.wrapQuote(this.div_main.form.cbo_sch_type.value);
        	if(this.div_main.form.medt_sch_cardnum.value != null)
        		strArg += " mdtCardNum="	+ nexacro.wrapQuote(nexacro.trim(this.div_main.form.medt_sch_cardnum.value));
        	else
        		strArg += " mdtCardNum=" 	+ nexacro.wrapQuote();
        	if(this.div_main.form.medt_sch_bankacc.value != null)
        		strArg += " mdtBankAcc="   	+ nexacro.wrapQuote(nexacro.trim(this.div_main.form.medt_sch_bankacc.value));
        	else
        		strArg += " mdtBankAcc="   	+ nexacro.wrapQuote();
        	strArg += " CI_USEFLG="		+ nexacro.wrapQuote(0); //사용유무
        	strArg += " cb_gubn="		+ nexacro.wrapQuote(this.div_main.form.cbo_gb.value);

        	this.dsCardList.clearData(); //데이터 초기화

        	this.gfn_TransactionP("Search_cardList", strUrl, strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        };

        this.div_main_btn_del_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	if(msg_result = objApp.confirm( "수불 진행 중인 카드는 삭제되지 않습니다, 삭제하시겠습니까? " , "삭제확인", "warning" ))
        	{
        		this.fnBtnDel(); //삭제 함수 호출
        	}
        };

        this.fnBtnDel = function()
        {
        	var strUrl = "JSP/pd/pd201f_corpcard_Delete.jsp";
        	var inDs 	= "input=dsCardList:u";	//보내는 데이터셋

        	this.gfn_TransactionP("Del_cardList", strUrl, inDs, "", "", "fnCallback", false, "P", false, this);
        }

        this.div_main_btn_edit_onclick = function(obj,e)
        {
        	if ((this.div_main.form.edt_index.value).length == 0)
        	{
        		alert("수정할 정보가 선택되지 않았습니다.");
        		return;
        	}

        	var objApp = nexacro.getApplication();
        	if(msg_result = objApp.confirm( "수정하시겠습니까? ", "수정확인", "warning" ))
        	{
        		var objDate = new nexacro.Date();
        		var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMddhhmmss");
        		this.div_main.form.medt_update.set_value(f_date);//최근수정일
        		this.fnBtnUpdate(); //수정 함수 호출
        	}
        };

        this.fnBtnUpdate = function()
        {
        	var strUrl = "JSP/pd/pd201f_corpcard_update.jsp";
        	var	strArg;   //변수
        	//--생성
        	strArg  = " edtindex="		+ nexacro.wrapQuote(this.div_main.form.edt_index.text); //등록번호
        	strArg += " edtCvc="    	+ nexacro.wrapQuote(this.div_main.form.edt_cvc.value); //cvc번호
        	strArg += " mdtBankAcc="    + nexacro.wrapQuote(this.div_main.form.medt_bankacc.value); //결제계좌
        	strArg += " mdtAmtLimit="   + nexacro.wrapQuote(this.div_main.form.medt_amtlimit.value);  //결제한도
        	strArg += " edtExpdate="    + nexacro.wrapQuote(this.div_main.form.edt_expdate.value); //유효기간
        	strArg += " edtBigo="      	+ nexacro.wrapQuote(this.div_main.form.edt_bigo.value); //비고
        	strArg += " chkusecode="    + nexacro.wrapQuote(this.div_main.form.chk_usecode.value); //사용유무
        	strArg += " mdtupdate="     + nexacro.wrapQuote(this.div_main.form.medt_update.value); //최근수정일
        	strArg += " edtCardname="   + nexacro.wrapQuote(this.div_main.form.edt_cardname.value); //카드명
        	strArg += " cust_gb="      	+ nexacro.wrapQuote("47");
        	strArg += " cust_cd="      	+ nexacro.wrapQuote(this.div_main.form.medt_cust_cd.value);
        	strArg += " edtPayBankNm="	+ nexacro.wrapQuote(this.div_main.form.edt_paybank.value);  //결제은행

        	this.gfn_TransactionP("Update_card", strUrl, "", "", strArg, "fnCallback", false, "P", false, this);
        }

        this.fnCallback = function(trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0){
        		alert(ErrorMsg);
        		return;
        	}
        	else if (trid != null)
        	{
        		trid = trid.split("|");
        		trid = trid[0]
        	}

        	if(trid == "Save_card")
        	{
        		trace("저장 완료");
        		this.div_main.form.btn_search.click();
        		this.fnCloseEdit();
        		this.fnInit(); //저장 후 초기화
        	}
        	if(trid == "Search_cardList")
        	{
        		trace("조회 완료");
        	}
        	if(trid == "Update_card")
        	{
        		trace("수정 완료");
        		this.div_main.form.btn_search.click();
        		this.fnCloseEdit();
        		this.fnInit(); //저장 후 초기화
        	}
        	if(trid == "Search_count")
        	{
        		trace("카운트조회완료");
        	}
        	if(trid == "Del_cardList")
        	{
        		trace("삭제완료");
        		this.div_main.form.btn_search.click();
        		this.fnCloseEdit();
        		this.fnInit(); //저장 후 초기화
        	}
        }

        this.div_main_btn_print_onclick = function(obj,e)
        {
        	this.lfn_showModal("print_popup", "", "pd::PD201_printF.xfdl", "fnPrintCallBack", this, 0, 0, 350, 120);
        };

        this.div_main_btn_newup_onclick = function(obj,e)
        {
        	//매핑된 데이터 초기화
        	//카드정보 초기화
        	this.div_main.form.cbo_banktype.set_index(0); //카드종류
        	this.div_main.form.medt_cardnum.set_value(''); //카드번호
        	this.div_main.form.edt_cvc.set_value(''); //cvc번호
        	this.div_main.form.medt_bankacc.set_value('');//결제계좌
        	this.div_main.form.medt_amtlimit.set_value(''); //결제한도
        	this.div_main.form.edt_expdate.set_value(''); //유효기간

        	this.lfn_showModal("excelup_popup", "", "pd::PD201_ExcelUploadF.xfdl", "fnExcelUpCallBack", this, 0, 0, 800, 480);
        };

        this.fnExcelUpCallBack = function(strID, ret)
        {
        	this.div_main.form.btn_search.click();
        }

        this.div_main_btn_excel_onclick = function(obj,e)
        {
        	this.exportObj = new ExcelExportObject();
            var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.div_main.form.grd_cardlist, "Sheet1!A1");
        	this.exportObj.set_exportfilename( "CorpCardList" );
        	this.exportObj.set_exporturl(gv_urlXeni);
            this.exportObj.exportData();
        };

        this.PD201F_onsize = function(obj,e)
        {
        	if(this.width < 1350 || this.width > 1630)
        		this.div_main.set_width(this.width - 20)
        	else
        		this.div_main.set_width(1350);

        	if(this.height < 730)
        		this.div_main.set_height(this.height - 20)
        	else
        		this.div_main.set_height(730);

        	if(this.height < 490 || this.width < 910)
        	{
        		this.div_main.form.Static00.set_font('bold 30px/normal "함초롬바탕 확장B"');

        		this.div_main.form.Static01_00.set_font('bold 10pt/normal "Arial"');
        		this.div_main.form.Static01_01.set_font('bold 10pt/normal "Arial"');
        		this.div_main.form.Static01_02.set_font('bold 10pt/normal "Arial"');
        		this.div_main.form.Static01_03.set_font('bold 10pt/normal "Arial"');
        		this.div_main.form.Static01_04.set_font('bold 10pt/normal "Arial"');
        		this.div_main.form.Static01_05.set_font('bold 10pt/normal "Arial"');
        		this.div_main.form.Static01_06.set_font('bold 10pt/normal "Arial"');
        		this.div_main.form.Static01_07.set_font('bold 10pt/normal "Arial"');
        		this.div_main.form.Static01_08.set_font('bold 10pt/normal "Arial"');
        		this.div_main.form.Static01_09.set_font('bold 10pt/normal "Arial"');
        		this.div_main.form.Static01_10.set_font('bold 10pt/normal "Arial"');
        		this.div_main.form.Static01_11.set_font('bold 10pt/normal "Arial"');
        		this.div_main.form.Static01_12.set_font('bold 10pt/normal "Arial"');
        		this.div_main.form.Static01_13.set_font('bold 10pt/normal "Arial"');
        		this.div_main.form.Static01_14.set_font('bold 10pt/normal "Arial"');
        		this.div_main.form.Static02_00.set_font('bold 10pt/normal "Arial"');
        		this.div_main.form.Static02_01.set_font('bold 10pt/normal "Arial"');
        		this.div_main.form.Static02_02.set_font('bold 10pt/normal "Arial"');
        		this.div_main.form.Static02_03.set_font('bold 10pt/normal "Arial"');
        		this.div_main.form.Static02_04.set_font('bold 10pt/normal "Arial"');

        		this.div_main.form.edt_index.set_font('10px/normal "Arial"');
        		this.div_main.form.medt_cardnum.set_font('10px/normal "Arial"');
        		this.div_main.form.medt_bankacc.set_font('10px/normal "Arial"');
        		this.div_main.form.chk_usecode.set_font('10px/normal "Arial"');
        		this.div_main.form.medt_indate.set_font('10px/normal "Arial"');
        		this.div_main.form.medt_update.set_font('10px/normal "Arial"');
        		this.div_main.form.medt_sch_bankacc.set_font('10px/normal "Arial"');
        		this.div_main.form.medt_sch_cardnum.set_font('10px/normal "Arial"');

        		this.div_main.form.cbo_banktype.set_font('11px/normal "Gulim"');
        		this.div_main.form.edt_cvc.set_font('11px/normal "Gulim"');
        		this.div_main.form.edt_inuser.set_font('11px/normal "Gulim"');
        		this.div_main.form.edt_cardname.set_font('11px/normal "Gulim"');
        		this.div_main.form.medt_amtlimit.set_font('11px/normal "Gulim"');
        		this.div_main.form.edt_expdate.set_font('11px/normal "Gulim"');
        		this.div_main.form.edt_paybank.set_font('11px/normal "Gulim"');
        		this.div_main.form.edt_bigo.set_font('11px/normal "Gulim"');
        		this.div_main.form.medt_cust_cd.set_font('11px/normal "Gulim"');
        		this.div_main.form.edt_cust_nm.set_font('11px/normal "Gulim"');
        		this.div_main.form.cbo_sch_type.set_font('11px/normal "Gulim"');
        		this.div_main.form.cbo_gb.set_font('11px/normal "Gulim"');

        		this.div_main.form.btn_new.set_font('bold 9pt/normal "Arial"');
        		this.div_main.form.btn_cancle.set_font('bold 9pt/normal "Arial"');
        		this.div_main.form.btn_edit.set_font('bold 9pt/normal "Arial"');
        		this.div_main.form.btn_save.set_font('bold 9pt/normal "Arial"');
        		this.div_main.form.btn_excel.set_font('bold 9pt/normal "Arial"');
        		this.div_main.form.btn_print.set_font('bold 9pt/normal "Arial"');
        		this.div_main.form.btn_del.set_font('bold 9pt/normal "Arial"');
        		this.div_main.form.btn_newup.set_font('bold 9pt/normal "Arial"');
        		this.div_main.form.btn_search.set_font('bold 9pt/normal "Arial"');
        	}
        	else
        	{
        		this.div_main.form.Static00.set_font('bold 40px/normal "함초롬바탕 확장B"');

        		this.div_main.form.Static01_00.set_font('bold 11pt/normal "Arial"');
        		this.div_main.form.Static01_01.set_font('bold 11pt/normal "Arial"');
        		this.div_main.form.Static01_02.set_font('bold 11pt/normal "Arial"');
        		this.div_main.form.Static01_03.set_font('bold 11pt/normal "Arial"');
        		this.div_main.form.Static01_04.set_font('bold 11pt/normal "Arial"');
        		this.div_main.form.Static01_05.set_font('bold 11pt/normal "Arial"');
        		this.div_main.form.Static01_06.set_font('bold 11pt/normal "Arial"');
        		this.div_main.form.Static01_07.set_font('bold 11pt/normal "Arial"');
        		this.div_main.form.Static01_08.set_font('bold 11pt/normal "Arial"');
        		this.div_main.form.Static01_09.set_font('bold 11pt/normal "Arial"');
        		this.div_main.form.Static01_10.set_font('bold 11pt/normal "Arial"');
        		this.div_main.form.Static01_11.set_font('bold 11pt/normal "Arial"');
        		this.div_main.form.Static01_12.set_font('bold 11pt/normal "Arial"');
        		this.div_main.form.Static01_13.set_font('bold 11pt/normal "Arial"');
        		this.div_main.form.Static01_14.set_font('bold 11pt/normal "Arial"');
        		this.div_main.form.Static02_00.set_font('bold 11pt/normal "Arial"');
        		this.div_main.form.Static02_01.set_font('bold 11pt/normal "Arial"');
        		this.div_main.form.Static02_02.set_font('bold 11pt/normal "Arial"');
        		this.div_main.form.Static02_03.set_font('bold 11pt/normal "Arial"');
        		this.div_main.form.Static02_04.set_font('bold 11pt/normal "Arial"');

        		this.div_main.form.edt_index.set_font('12px/normal "Gulim"');
        		this.div_main.form.medt_cardnum.set_font('12px/normal "Gulim"');
        		this.div_main.form.medt_bankacc.set_font('12px/normal "Gulim"');
        		this.div_main.form.chk_usecode.set_font('12px/normal "Gulim"');
        		this.div_main.form.medt_indate.set_font('12px/normal "Gulim"');
        		this.div_main.form.medt_update.set_font('12px/normal "Gulim"');
        		this.div_main.form.medt_sch_bankacc.set_font('12px/normal "Gulim"');
        		this.div_main.form.medt_sch_cardnum.set_font('12px/normal "Gulim"');

        		this.div_main.form.cbo_banktype.set_font('13px/normal "Gulim"');
        		this.div_main.form.edt_cvc.set_font('13px/normal "Gulim"');
        		this.div_main.form.edt_inuser.set_font('13px/normal "Gulim"');
        		this.div_main.form.edt_cardname.set_font('13px/normal "Gulim"');
        		this.div_main.form.medt_amtlimit.set_font('13px/normal "Gulim"');
        		this.div_main.form.edt_expdate.set_font('13px/normal "Gulim"');
        		this.div_main.form.edt_paybank.set_font('13px/normal "Gulim"');
        		this.div_main.form.edt_bigo.set_font('13px/normal "Gulim"');
        		this.div_main.form.medt_cust_cd.set_font('13px/normal "Gulim"');
        		this.div_main.form.edt_cust_nm.set_font('13px/normal "Gulim"');
        		this.div_main.form.cbo_sch_type.set_font('13px/normal "Gulim"');
        		this.div_main.form.cbo_gb.set_font('13px/normal "Gulim"');

        		this.div_main.form.btn_new.set_font('bold 10pt/normal "Arial"');
        		this.div_main.form.btn_cancle.set_font('bold 10pt/normal "Arial"');
        		this.div_main.form.btn_edit.set_font('bold 10pt/normal "Arial"');
        		this.div_main.form.btn_save.set_font('bold 10pt/normal "Arial"');
        		this.div_main.form.btn_excel.set_font('bold 10pt/normal "Arial"');
        		this.div_main.form.btn_print.set_font('bold 10pt/normal "Arial"');
        		this.div_main.form.btn_del.set_font('bold 10pt/normal "Arial"');
        		this.div_main.form.btn_newup.set_font('bold 10pt/normal "Arial"');
        		this.div_main.form.btn_search.set_font('bold 10pt/normal "Arial"');
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PD201F_onload,this);
            this.addEventHandler("onsize",this.PD201F_onsize,this);
            this.div_main.form.btn_del.addEventHandler("onclick",this.div_main_btn_del_onclick,this);
            this.div_main.form.btn_print.addEventHandler("onclick",this.div_main_btn_print_onclick,this);
            this.div_main.form.btn_excel.addEventHandler("onclick",this.div_main_btn_excel_onclick,this);
            this.div_main.form.btn_save.addEventHandler("onclick",this.div_main_btn_save_onclick,this);
            this.div_main.form.btn_edit.addEventHandler("onclick",this.div_main_btn_edit_onclick,this);
            this.div_main.form.btn_cancle.addEventHandler("onclick",this.div_main_btn_cancle_onclick,this);
            this.div_main.form.btn_new.addEventHandler("onclick",this.div_main_btn_new_onclick,this);
            this.div_main.form.btn_search.addEventHandler("onclick",this.div_main_btn_search_onclick,this);
            this.div_main.form.btn_newup.addEventHandler("onclick",this.div_main_btn_newup_onclick,this);
        };
        this.loadIncludeScript("PD201F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
