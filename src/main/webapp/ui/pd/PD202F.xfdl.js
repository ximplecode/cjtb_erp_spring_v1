(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PD202F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1630,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCCUL", this);
            obj._setContents("<ColumnInfo><Column id=\"CCUL_ID\" type=\"INT\" size=\"20\"/><Column id=\"CCUL_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"CCUL_USEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"CREDITCARD_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"CREDITCARD_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CCUL_AMOUNT\" type=\"INT\" size=\"10\"/><Column id=\"CCUL_CUST_NAME\" type=\"STRING\" size=\"35\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"CCUL_GETBACK_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"CCUL_GETBACK_USER\" type=\"STRING\" size=\"6\"/><Column id=\"CCUL_GETBACK\" type=\"STRING\" size=\"1\"/><Column id=\"CCUL_REMARK\" type=\"STRING\" size=\"200\"/><Column id=\"CCUL_BUSINESSTRIP\" type=\"STRING\" size=\"1\"/><Column id=\"CCUL_BUSINESSTRIP_NAME\" type=\"STRING\" size=\"4\"/><Column id=\"CCUL_SECTIONMANAGECOST\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSection", this);
            obj._setContents("<ColumnInfo><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"LVL\" type=\"INT\" size=\"1\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"3\"/><Column id=\"SECTION_SHORTNAME\" type=\"STRING\" size=\"10\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"5\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCorpCard", this);
            obj._setContents("<ColumnInfo><Column id=\"CREDITCARD_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"CREDITCARD_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"CREDITCARD_ENABLED\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBankType", this);
            obj._setContents("<ColumnInfo><Column id=\"BANK_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"BANK_NAME\" type=\"STRING\" size=\"15\"/></ColumnInfo><Rows><Row><Col id=\"BANK_CODE\">0</Col><Col id=\"BANK_NAME\">선택</Col></Row><Row><Col id=\"BANK_CODE\">1</Col><Col id=\"BANK_NAME\">국민</Col></Row><Row><Col id=\"BANK_CODE\">2</Col><Col id=\"BANK_NAME\">신한</Col></Row><Row><Col id=\"BANK_CODE\">3</Col><Col id=\"BANK_NAME\">우리</Col></Row><Row><Col id=\"BANK_CODE\">4</Col><Col id=\"BANK_NAME\">현대</Col></Row><Row><Col id=\"BANK_CODE\">5</Col><Col id=\"BANK_NAME\">삼성</Col></Row><Row><Col id=\"BANK_CODE\">6</Col><Col id=\"BANK_NAME\">기업</Col></Row><Row><Col id=\"BANK_CODE\">7</Col><Col id=\"BANK_NAME\">(개인)법인</Col></Row><Row><Col id=\"BANK_CODE\">8</Col><Col id=\"BANK_NAME\">하나</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrdMstSort", this);
            obj._setContents("<ColumnInfo><Column id=\"Ord_NO\" type=\"STRING\" size=\"1\"/><Column id=\"Ord_NAME\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"Ord_NO\">0</Col><Col id=\"Ord_NAME\">선택</Col></Row><Row><Col id=\"Ord_NO\">1</Col><Col id=\"Ord_NAME\">대여일</Col></Row><Row><Col id=\"Ord_NO\">2</Col><Col id=\"Ord_NAME\">반납일</Col></Row><Row><Col id=\"Ord_NO\">3</Col><Col id=\"Ord_NAME\">분실일</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCardState", this);
            obj._setContents("<ColumnInfo><Column id=\"STATE_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"STATE_NAME\" type=\"STRING\" size=\"15\"/></ColumnInfo><Rows><Row><Col id=\"STATE_CODE\">0</Col><Col id=\"STATE_NAME\">선택</Col></Row><Row><Col id=\"STATE_CODE\">1</Col><Col id=\"STATE_NAME\">대여</Col></Row><Row><Col id=\"STATE_CODE\">2</Col><Col id=\"STATE_NAME\">반납</Col></Row><Row><Col id=\"STATE_CODE\">3</Col><Col id=\"STATE_NAME\">분실</Col></Row><Row><Col id=\"STATE_CODE\">4</Col><Col id=\"STATE_NAME\">장기대여</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCardGUBN", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBN_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"GUBN_NAME\" type=\"STRING\" size=\"15\"/></ColumnInfo><Rows><Row><Col id=\"GUBN_CODE\">0</Col><Col id=\"GUBN_NAME\">선택</Col></Row><Row><Col id=\"GUBN_CODE\">1</Col><Col id=\"GUBN_NAME\">편집공용</Col></Row><Row><Col id=\"GUBN_CODE\">2</Col><Col id=\"GUBN_NAME\">업무공용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCardList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"2\"/><Column id=\"CI_IDEX\" type=\"STRING\" size=\"10\"/><Column id=\"CI_CARD\" type=\"STRING\" size=\"30\"/><Column id=\"CI_CARDNUM\" type=\"STRING\" size=\"30\"/><Column id=\"CI_CARDNAME\" type=\"STRING\" size=\"25\"/><Column id=\"CI_ACCOUNT\" type=\"STRING\" size=\"30\"/><Column id=\"CI_AMTLIMIT\" type=\"STRING\" size=\"30\"/><Column id=\"CI_CARDDATE\" type=\"STRING\" size=\"20\"/><Column id=\"CI_CVCNUM\" type=\"STRING\" size=\"10\"/><Column id=\"CI_USEFLG\" type=\"STRING\" size=\"10\"/><Column id=\"CI_INUSER\" type=\"STRING\" size=\"20\"/><Column id=\"CI_INDATE\" type=\"STRING\" size=\"20\"/><Column id=\"CI_UPDATE\" type=\"STRING\" size=\"20\"/><Column id=\"CI_BIGO\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubulList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"SU_CODE\" type=\"STRING\" size=\"12\"/><Column id=\"SU_CARD\" type=\"STRING\" size=\"2\"/><Column id=\"SU_CARDNUM\" type=\"STRING\" size=\"20\"/><Column id=\"CI_CARDNAME\" type=\"STRING\" size=\"25\"/><Column id=\"CI_ACCOUNT\" type=\"STRING\" size=\"20\"/><Column id=\"CI_AMTLIMIT\" type=\"STRING\" size=\"15\"/><Column id=\"CI_CARDDATE\" type=\"STRING\" size=\"6\"/><Column id=\"CI_CVCNUM\" type=\"STRING\" size=\"3\"/><Column id=\"SU_STATE\" type=\"STRING\" size=\"5\"/><Column id=\"SU_GUBN\" type=\"STRING\" size=\"5\"/><Column id=\"SU_CAREUSER\" type=\"STRING\" size=\"6\"/><Column id=\"SU_USEDEP\" type=\"STRING\" size=\"10\"/><Column id=\"SU_USEDATE\" type=\"STRING\" size=\"14\"/><Column id=\"SU_RENT\" type=\"STRING\" size=\"14\"/><Column id=\"SU_RETURN\" type=\"STRING\" size=\"14\"/><Column id=\"SU_LOST\" type=\"STRING\" size=\"14\"/><Column id=\"SU_UPDATE\" type=\"STRING\" size=\"14\"/><Column id=\"SU_INDATE\" type=\"STRING\" size=\"14\"/><Column id=\"SU_INUSER\" type=\"STRING\" size=\"6\"/><Column id=\"SU_BIGO\" type=\"STRING\" size=\"100\"/><Column id=\"SU_CARESABUN\" type=\"STRING\" size=\"10\"/><Column id=\"SU_USE_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"SU_USE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SU_USE_BUSE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCardCount", this);
            obj._setContents("<ColumnInfo><Column id=\"CI_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CI_CARD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_CO\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_CO\" type=\"STRING\" size=\"256\"/><Column id=\"LONG_RENT_CO\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_USE_CO\" type=\"STRING\" size=\"256\"/><Column id=\"LOST_CO\" type=\"STRING\" size=\"256\"/><Column id=\"END_CO\" type=\"STRING\" size=\"256\"/><Column id=\"CO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","2.7%","1.45%","35%","8.95%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("법인카드 수불관리");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","49.33%","11.85%","8.29%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("CVC번호");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("1px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mdt_cardnum","29.21%","11.85%",null,"4.22%","Static01_02:-1",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("1px solid #10aea9");
            obj.set_type("string");
            obj.set_format("####-####-####-####");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_padding("0px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04","29.21%","mdt_cardnum:-1","8.289%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("결제한도");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_05","49.33%","Static01_02:-1","8.29%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("유효기간");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_03","49.33%","Static01_05:4","8.29%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("사용구분");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_06","49.33%","Static02_03:-1","8.29%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("결제예정일");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_09","49.33%","Static02_06:-1","8.29%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("분실일시");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_12","49.33%","Static02_09:-1","8.29%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("최근수정일");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_14","49.33%","Static02_12:-1","8.29%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("실사용자");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_padding("0px 30px 0px 00px");
            obj.set_letterSpacing("2px");
            this.addChild(obj.name, obj);

            obj = new Static("Static_SP1_00","1.78%","Static02_14:1",null,"2","1.85%",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_background("#368b65");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_03","49.33%","Static_SP1_00:1","8.29%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("결제계좌");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_08","49.33%","Static03_03:-1","8.29%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("일자조회");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new Static("Static_SP1_00_00","1.78%","Static03_08:1",null,"2","1.85%",null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_background("#368b65");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","1.78%","Static_SP1_00:1","7.37%",null,null,"Static_SP1_00_00:1",null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_border("1px solid #10aea9");
            obj.set_text("조 회 조 건");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_background("#e0f6ff");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_count",null,"11.85%","26.2%",null,"1.85%","Static_SP1_00:1",null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_border("1px solid #10aea9");
            obj.set_binddataset("dsCardCount");
            obj.set_autofittype("col");
            obj.set_font("normal 12px/normal \"Gulim\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"22\"/><Row size=\"22\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"유효\"/><Cell col=\"2\" text=\"대여\"/><Cell col=\"3\" text=\"장기\"/><Cell col=\"4\" text=\"가능\"/><Cell col=\"5\" text=\"분실\"/><Cell col=\"6\" text=\"만료\"/><Cell col=\"7\" text=\"전체\"/></Band><Band id=\"body\"><Cell text=\"bind:CI_NAME\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:USE_CO\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:RENT_CO\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:LONG_RENT_CO\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:RENT_USE_CO\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:LOST_CO\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:END_CO\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:CO\" textAlign=\"right\"/></Band><Band id=\"summary\"><Cell text=\"합계\" background=\"#0d908c\" color=\"white\"/><Cell col=\"1\" background=\"#0d908c\" color=\"white\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(USE_CO)&quot;)\" padding=\"0px 2px 0px 0px\"/><Cell col=\"2\" background=\"#0d908c\" color=\"white\" textAlign=\"right\" padding=\"0px 2px 0px 0px\" expr=\"dataset.getSum(&quot;nexacro.toNumber(RENT_CO)&quot;)\"/><Cell col=\"3\" background=\"#0d908c\" color=\"white\" textAlign=\"right\" padding=\"0px 2px 0px 0px\" expr=\"dataset.getSum(&quot;nexacro.toNumber(LONG_RENT_CO)&quot;)\"/><Cell col=\"4\" background=\"#0d908c\" color=\"white\" textAlign=\"right\" padding=\"0px 2px 0px 0px\" expr=\"dataset.getSum(&quot;nexacro.toNumber(RENT_USE_CO)&quot;)\"/><Cell col=\"5\" background=\"#0d908c\" color=\"white\" textAlign=\"right\" padding=\"0px 2px 0px 0px\" expr=\"dataset.getSum(&quot;nexacro.toNumber(LOST_CO)&quot;)\"/><Cell col=\"6\" background=\"#0d908c\" color=\"white\" textAlign=\"right\" padding=\"0px 2px 0px 0px\" expr=\"dataset.getSum(&quot;nexacro.toNumber(END_CO)&quot;)\"/><Cell col=\"7\" background=\"#0d908c\" color=\"white\" textAlign=\"right\" padding=\"0px 2px 0px 0px\" expr=\"dataset.getSum(&quot;nexacro.toNumber(CO)&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01",null,"11.85%","2.58%",null,"grd_count:-1","Static_SP1_00:1",null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("카\r\n드\r\n현\r\n황");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            obj.set_background("#ebfef3");
            this.addChild(obj.name, obj);

            obj = new Static("Static_SP1","1.78%","Static01_04:1",null,"2","Static01_01_00_00_00_01:-1",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("#368b65");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","1.78%","Static_SP1:1","7.37%",null,null,"Static_SP1_00:1",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_border("1px solid #10aea9");
            obj.set_text("수  불\r\n\r\n정  보");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_background("#ebfef3");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","Static02_00:-1","Static_SP1:1","8.29%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("관리번호");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_04","Static02_00:-1","Static02_01:-1","8.29%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("사 용 자");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_padding("0px 30px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_07","Static02_00:-1","Static02_04:-1","8.29%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("대여일시");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_10","Static02_00:-1","Static02_07:-1","8.29%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("등  록  일");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("1px");
            obj.set_padding("0px 0px 0px 1px");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_13","Static02_00:-1","Static02_10:-1","8.29%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("비      고");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","1.78%","11.85%","7.37%",null,null,"Static_SP1:1",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid #10aea9");
            obj.set_text("카 드 정 보");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_background("#ebfef3");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","Static01_00:-1","11.85%","8.29%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("카드번호");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03","Static01_00:-1","Static01_01:-1","8.29%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("결제계좌");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_card_search","Static01_01:0","Static01_01:-90.63%","2.46%","3.43%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_borderRadius("6px");
            obj.set_font("bold 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_banktype","btn_card_search:0","11.85%",null,"4.22%","mdt_cardnum:-1",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_border("1px solid #10aea9");
            obj.set_innerdataset("dsBankType");
            obj.set_codecolumn("BANK_CODE");
            obj.set_datacolumn("BANK_NAME");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_enable("false");
            obj.set_text("");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mdt_bankacc","Static01_03:-1","cbo_banktype:-1",null,"4.22%","Static01_04:-1",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_border("1px solid #10aea9");
            obj.set_type("string");
            obj.set_format("################");
            obj.set_textAlign("center");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mdt_amtlimit","Static01_04:-1","mdt_cardnum:-1",null,"4.22%","Static01_05:-1",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_border("1px solid #10aea9");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_visible("true");
            obj.set_displaynulltext("0");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_format("###,");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cvc","Static01_02:-1","11.85%",null,"4.22%","Static01_01_00_00_00_01:-1",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("false");
            obj.set_textAlign("center");
            obj.set_font("13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_expdate","Static01_05:-1","edt_cvc:-1",null,"4.22%","Static01_01_00_00_00_01:-1",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("false");
            obj.set_textAlign("center");
            obj.set_font("13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02","29.21%","Static_SP1:1","8.29%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("카드상태");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mdt_sbnum","Static02_01:-1","Static_SP1:1",null,"4.22%","Static02_02:-1",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_border("1px solid #10aea9");
            obj.set_type("string");
            obj.set_format("############");
            obj.set_textAlign("center");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_emp_sabun","Static02_04:-1","mdt_sbnum:-1","6.02%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("false");
            obj.set_textAlign("center");
            obj.set_font("13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_05","29.21%","Static02_02:-1","8.29%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("사용부서");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_emp_name","edt_emp_sabun:-1","mdt_sbnum:-1",null,"4.22%","Static02_05:-1",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("false");
            obj.set_textAlign("center");
            obj.set_font("13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_08","29.21%","Static02_05:-1","8.29%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("반납일시");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mdt_rent","Static02_07:-1","edt_emp_sabun:-1",null,"4.22%","Static02_08:-1",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_border("1px solid #10aea9");
            obj.set_type("string");
            obj.set_format("####/##/## ##:##:##");
            obj.set_textAlign("center");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_padding("0px");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_11","29.21%","Static02_08:-1","8.29%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("등  록  자");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("1px");
            obj.set_padding("0px 0px 0px 1px");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mdt_indate","Static02_10:-1","mdt_rent:-1",null,"4.22%","Static02_11:-1",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_border("1px solid #10aea9");
            obj.set_type("string");
            obj.set_format("####/##/## ##:##:##");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_padding("0px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bigo","Static02_13:-1","mdt_indate:-1",null,"4.22%","Static02_14:-1",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("true");
            obj.set_textAlign("left");
            obj.set_font("13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_state","Static02_02:-1","Static_SP1:1",null,"4.22%","Static02_03:-1",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_border("1px solid #10aea9");
            obj.set_innerdataset("dsCardState");
            obj.set_codecolumn("STATE_CODE");
            obj.set_datacolumn("STATE_NAME");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_text("");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_section","Static02_05:-1","cbo_state:-1",null,"4.22%","Static02_06:-1",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("false");
            obj.set_textAlign("center");
            obj.set_font("13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mdt_return","Static02_08:-1","edt_section:-1",null,"4.22%","Static02_09:-1",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_border("1px solid #10aea9");
            obj.set_type("string");
            obj.set_format("####/##/## ##:##:##");
            obj.set_textAlign("center");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_padding("0px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_inuser","Static02_11:-1","mdt_return:-1",null,"4.22%","Static02_12:-1",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("false");
            obj.set_textAlign("center");
            obj.set_font("13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_gubn","Static02_03:-1","Static_SP1:1",null,"4.22%","Static01_01_00_00_00_01:-1",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_border("1px solid #10aea9");
            obj.set_innerdataset("dsCardGUBN");
            obj.set_codecolumn("GUBN_CODE");
            obj.set_datacolumn("GUBN_NAME");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_text("");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_usedate","Static02_06:-1","cbo_gubn:-1",null,"4.22%","Static01_01_00_00_00_01:-1",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mdt_lost","Static02_09:-1","cald_usedate:-1",null,"4.22%","Static01_01_00_00_00_01:-1",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_border("1px solid #10aea9");
            obj.set_type("string");
            obj.set_format("####/##/## ##:##:##");
            obj.set_textAlign("center");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_padding("0px");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mdt_update","Static02_12:-1","mdt_lost:-1",null,"4.22%","Static01_01_00_00_00_01:-1",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_border("1px solid #10aea9");
            obj.set_type("string");
            obj.set_format("####/##/## ##:##:##");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_padding("0px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_use_sabun","Static02_14:-1","mdt_update:-1","6.01%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("false");
            obj.set_textAlign("center");
            obj.set_font("13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_use_name","edt_use_sabun:-1","mdt_update:-1",null,"4.22%","Static01_01_00_00_00_01:-1",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("false");
            obj.set_textAlign("center");
            obj.set_font("13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_hr_search","Static02_04:-32.00%","Static02_04:-93.00%","Static02_04:29%","Static02_04:81.25%",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("검색");
            obj.set_borderRadius("6px");
            obj.set_font("bold 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_hr_search2","Static02_14:-32.00%","Static02_14:-93.00%","Static02_14:29.00%","Static02_14:81.25%",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("검색");
            obj.set_borderRadius("6px");
            obj.set_font("bold 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01","Static03_00:-1","Static_SP1_00:1","8.29%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("카드종류");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_06","Static03_00:-1","Static03_01:-1","8.29%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("카드상태");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02","26.69%","Static_SP1_00:1","8.29%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("카드번호");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_sch_type","Static03_01:-1","Static_SP1_00:1",null,"4.22%","Static03_02:-1",null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_font("11px/normal \"Gulim\"");
            obj.set_border("1px solid #10aea9");
            obj.set_innerdataset("dsBankType");
            obj.set_codecolumn("BANK_CODE");
            obj.set_datacolumn("BANK_NAME");
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_07","26.69%","Static03_02:-1","8.29%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("사용구분");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_sch_state","Static03_06:-1","cbo_sch_type:-1",null,"4.22%","Static03_07:-1",null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_border("1px solid #10aea9");
            obj.set_innerdataset("dsCardState");
            obj.set_codecolumn("STATE_CODE");
            obj.set_datacolumn("STATE_NAME");
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mdt_sch_cardnum","Static03_02:-1","Static_SP1_00:1",null,"4.22%","Static03_03:-1",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_border("1px solid #10aea9");
            obj.set_type("string");
            obj.set_format("####-####-####-####");
            obj.set_textAlign("center");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_padding("0px");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_04","Static01_01_00_00_00_01:-100.00%","Static_SP1_00:1","7.67%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("사용부서");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mdt_sch_bankacc","Static03_03:-1","Static_SP1_00:1",null,"4.22%","Static03_04:-1",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_border("1px solid #10aea9");
            obj.set_type("string");
            obj.set_format("################");
            obj.set_textAlign("center");
            obj.set_font("13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_05","83.81%","Static_SP1_00:1","7.67%","4.22%",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("사용자");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_nm","Static03_05:-1","Static_SP1_00:1",null,"4.22%","1.85%",null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("true");
            obj.set_textAlign("left");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_text(" ");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_usedep","Static03_04:-1","Static_SP1_00:1",null,"4.22%","Static03_05:-1",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("true");
            obj.set_textAlign("left");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_text(" ");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_sch_gubn","Static03_07:-1","mdt_sch_cardnum:-1",null,"4.22%","Static03_08:-1",null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_border("1px solid #10aea9");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_innerdataset("dsCardGUBN");
            obj.set_codecolumn("GUBN_CODE");
            obj.set_datacolumn("GUBN_NAME");
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_09","Static03_08:-1","Static03_04:-1",null,"4.22%","1.85%",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_ord_mstsort","Static03_09:-97.73%","Static03_09:-93.75%","8.22%","Static03_09:87.5%",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_innerdataset("dsOrdMstSort");
            obj.set_codecolumn("Ord_NO");
            obj.set_datacolumn("Ord_NAME");
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_02","Static03_09:-48.34%","Static03_09:-93.75%","1.78%","Static03_09:87.50%",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("~");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_sch_date_s","cbo_ord_mstsort:15.04%","Static03_09:-93.75%",null,"Static03_09:87.50%","Static01_01_00_00_00_02:17.25%",null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_font("13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"Static03_09:-90.63%","4.42%","Static03_09:81.25%","Static03_09:-98.9%",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("조회");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_sch_date_e","Static01_01_00_00_00_02:5","Static03_09:-93.75%",null,"Static03_09:87.50%","btn_search:48.62%",null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_font("13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cardlist","1.78%","Static_SP1_00_00:1",null,null,"1.84%","2.63%",null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_border("1px solid #10aea9");
            obj.set_binddataset("dsSubulList");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_font("normal 12px/normal \"Gulim\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"80\"/><Column size=\"64\"/><Column size=\"136\"/><Column size=\"64\"/><Column size=\"64\"/><Column size=\"64\"/><Column size=\"144\"/><Column size=\"76\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"64\"/><Column size=\"166\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"관리번호\"/><Cell col=\"2\" text=\"카드종류\"/><Cell col=\"3\" text=\"카드번호\"/><Cell col=\"4\" text=\"카드상태\"/><Cell col=\"5\" text=\"사용구분\"/><Cell col=\"6\" text=\"사용자\"/><Cell col=\"7\" text=\"사용부서\"/><Cell col=\"8\" text=\"결제예정일\"/><Cell col=\"9\" text=\"대여일시\"/><Cell col=\"10\" text=\"반납일시\" maskedittype=\"string\" maskeditformat=\"####/##/## ##:##:##\"/><Cell col=\"11\" text=\"분실일시\"/><Cell col=\"12\" text=\"최근수정일\"/><Cell col=\"13\" text=\"등록일\"/><Cell col=\"14\" text=\"등록자\"/><Cell col=\"15\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:SU_CODE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:SU_CARD\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsBankType\" combodatacol=\"BANK_NAME\" combocodecol=\"BANK_CODE\"/><Cell col=\"3\" text=\"bind:SU_CARDNUM\" textAlign=\"center\" maskeditformat=\"####-####-####-####\" maskedittype=\"string\" displaytype=\"mask\"/><Cell col=\"4\" text=\"bind:SU_STATE\" textAlign=\"center\" combodataset=\"dsCardState\" combodatacol=\"STATE_NAME\" combocodecol=\"STATE_CODE\" displaytype=\"combotext\"/><Cell col=\"5\" text=\"bind:SU_GUBN\" combodataset=\"dsCardGUBN\" combodatacol=\"GUBN_NAME\" combocodecol=\"GUBN_CODE\" textAlign=\"center\" displaytype=\"combotext\"/><Cell col=\"6\" text=\"bind:SU_CAREUSER\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:SU_USEDEP\"/><Cell col=\"8\" text=\"bind:SU_USEDATE\" textAlign=\"center\" maskeditformat=\"####-##\" maskedittype=\"string\" displaytype=\"mask\"/><Cell col=\"9\" text=\"bind:SU_RENT\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"####/##/## ##:##:##\" maskedittype=\"string\"/><Cell col=\"10\" text=\"bind:SU_RETURN\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"####/##/## ##:##:##\" maskedittype=\"string\"/><Cell col=\"11\" text=\"bind:SU_LOST\" textAlign=\"center\" maskeditformat=\"####/##/## ##:##:##\" maskedittype=\"string\" displaytype=\"mask\"/><Cell col=\"12\" text=\"bind:SU_UPDATE\" textAlign=\"center\" maskeditformat=\"####/##/## ##:##:##\" maskedittype=\"string\" displaytype=\"mask\"/><Cell col=\"13\" text=\"bind:SU_INDATE\" textAlign=\"center\" maskeditformat=\"####/##/## ##:##:##\" maskedittype=\"string\" displaytype=\"mask\"/><Cell col=\"14\" text=\"bind:SU_INUSER\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:SU_BIGO\"/></Band><Band id=\"summary\"><Cell background=\"#0d908c\" color=\"white\"/><Cell col=\"1\" background=\"#0d908c\" color=\"white\"/><Cell col=\"2\" background=\"#0d908c\" color=\"white\"/><Cell col=\"3\" background=\"#0d908c\" color=\"white\"/><Cell col=\"4\" background=\"#0d908c\" color=\"white\"/><Cell col=\"5\" background=\"#0d908c\" color=\"white\"/><Cell col=\"6\" background=\"#0d908c\" color=\"white\"/><Cell col=\"7\" background=\"#0d908c\" color=\"white\"/><Cell col=\"8\" background=\"#0d908c\" color=\"white\"/><Cell col=\"9\" background=\"#0d908c\" color=\"white\"/><Cell col=\"10\" background=\"#0d908c\" color=\"white\"/><Cell col=\"11\" background=\"#0d908c\" color=\"white\"/><Cell col=\"12\" background=\"#0d908c\" color=\"white\"/><Cell col=\"13\" background=\"#0d908c\" color=\"white\"/><Cell col=\"14\" background=\"#0d908c\" color=\"white\"/><Cell col=\"15\" background=\"#0d908c\" color=\"white\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"5%","4.68%","4.23%","1.85%",null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("삭제");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"5%","4.68%","4.23%","btn_del:7.82%",null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("출력");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"5%","4.68%","4.23%","btn_print:7.82%",null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("저장");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_edt",null,"5%","4.68%","4.23%","btn_save:7.82",null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("수정");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"5%","4.68%","4.23%","btn_edt:7.82%",null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("취소");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"5%","5.64%","4.23%","btn_cancel:7.82%",null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("신규카드");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_use_buse","898","57","195","32",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1630,760,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cbo_banktype","value","dsSubulList","SU_CARD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","mdt_cardnum","value","dsSubulList","SU_CARDNUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","mdt_amtlimit","value","dsSubulList","CI_AMTLIMIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_cvc","value","dsSubulList","CI_CVCNUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_expdate","value","dsSubulList","CI_CARDDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","mdt_bankacc","value","dsSubulList","CI_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","mdt_sbnum","value","dsSubulList","SU_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cbo_state","index","dsSubulList","SU_STATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cbo_gubn","index","dsSubulList","SU_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_emp_name","value","dsSubulList","SU_CAREUSER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_emp_sabun","value","dsSubulList","SU_CARESABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_section","value","dsSubulList","SU_USEDEP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","cald_usedate","value","dsSubulList","SU_USEDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","mdt_rent","value","dsSubulList","SU_RENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","mdt_return","value","dsSubulList","SU_RETURN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","mdt_lost","value","dsSubulList","SU_LOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","mdt_indate","value","dsSubulList","SU_INDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edt_inuser","value","dsSubulList","SU_INUSER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","mdt_update","value","dsSubulList","SU_UPDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edt_bigo","value","dsSubulList","SU_BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","edt_use_sabun","value","dsSubulList","SU_USE_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","edt_use_name","value","dsSubulList","SU_USE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","edt_use_buse","value","dsSubulList","SU_USE_BUSE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PD202F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("PD202F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("PD202F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        //테스트

        this.PD202F_onload = function(obj,e)
        {
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMddhhmmss");
        	this.cald_sch_date_s.set_value(f_date);
        	this.cald_sch_date_e.set_value(f_date);
        	this.btn_search.click();
        	this.fnCardCount();
        	this.edt_inuser.set_value(gv_sabun); //등록자 사번
        };

        // 카드 카운터 가져오기
        this.fnCardCount = function()
        {
        	var strUrl = "JSP/pd/pd202f_count_Search.jsp";
        	var	strArg = "";   //변수
        	var strDs = "dsCardCount=dsCardCount";

        	this.dsCardCount.clearData(); //데이터 초기화

        	//Trace(strArg);
        	this.gfn_TransactionP("Search_cardcount", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        }
        // 수불 조회
        this.btn_search_onclick = function(obj,e)
        {
        	var strUrl = "JSP/pd/pd202f_corpcard_Search.jsp";
        	var	strArg;   //변수
        	var strDs = "dsSubulList=dsSubulList";
        	strArg  = " cboSchType="+ nexacro.wrapQuote(this.cbo_sch_type.value); //카드종류
        	strArg += " mdtSchCardNum="+ nexacro.wrapQuote(this.fnNullChk(this.mdt_sch_cardnum.value)); //카드번호
        	strArg += " mdtSchBankAcc="+ nexacro.wrapQuote(this.fnNullChk(this.mdt_sch_bankacc.value)); //결제계좌
        	strArg += " cboSchState="+ nexacro.wrapQuote(this.cbo_sch_state.value); //카드상태
        	strArg += " cboSchGubn="+ nexacro.wrapQuote(this.cbo_sch_gubn.value); //사용구분
        	strArg += " edtUsedep="+ nexacro.wrapQuote(this.fnNullChk(this.edt_usedep.value)); //사용부서
        	strArg += " rdo_OrdMst=" + nexacro.wrapQuote(this.cbo_ord_mstsort.value ); //날짜검색선택
        	strArg += " mdtSchdateS=" + nexacro.wrapQuote(this.fnNullChk(this.cald_sch_date_s.value) ); //날짜시작일
        	strArg += " mdtSchdateE=" + nexacro.wrapQuote(this.fnNullChk(this.cald_sch_date_e.value) ); //날짜종료일
        	strArg += " nm=" + nexacro.wrapQuote(this.fnNullChk(this.edt_nm.value));

        	this.dsSubulList.clearData(); //데이터 초기화

        	this.gfn_TransactionP("Search_cardList", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        };
        // 카드조회 가져오기
        this.btn_card_search_onclick = function(obj,e)
        {
        	//매핑된 데이터 초기화
        	//카드정보 초기화
        	this.cbo_banktype.set_index(0); //카드종류
        	this.mdt_cardnum.set_value(''); //카드번호
        	this.edt_cvc.set_value(''); //cvc번호
        	this.mdt_bankacc.set_value('');//결제계좌
        	this.mdt_amtlimit.set_value(''); //결제한도
        	this.edt_expdate.set_value(''); //유효기간

        	this.lfn_showModal("card_search", "", "pd::PD202_SearchF.xfdl", "", this, 0, 0, 610, 500);
        };

        this.btn_save_onclick = function(obj,e)
        {
        	if (this.mdt_sbnum.value != null && (this.mdt_sbnum.value).length > 0)
            {
        		alert("중복으로 등록할 수 없습니다, 신규카드 또는 수정을 이용하세요.");
        		return;
        	}
        	if (this.cbo_banktype.index == 0)
        	{
        		alert("카드종류를 선택하세요.");
        		this.cbo_banktype.setFocus();
        		return;
        	}
        	if (this.mdt_cardnum.value == null || (this.mdt_cardnum.value).length == 0)
        	{
        		alert("카드번호를 확인하세요.");
        		mdtCardNum.SetFocus();
        		return;
        	}
        	if (this.edt_emp_name.value == null || (this.edt_emp_name.value).length == 0)
        	{
        		alert("사용자를 선택하세요.");
        		this.btn_hr_search.setFocus();
        		return;
        	}

        	if (this.cbo_state.index == 0)
        	{
        		alert("카드상태를 선택하세요.");
        		this.cbo_state.setFocus();
        		return;
        	}
        	if (this.cbo_gubn.index == 0)
        	{
        		alert("사용구분을 선택하세요.");
        		this.cbo_gubn.setFocus();
        		return;
        	}
        	var objApp = nexacro.getApplication();
        	if(msg_result = objApp.confirm( "저장하시겠습니까?" , "저장확인", "warning" ))
        	{
        		//http.Sync = true;
        		var objDate = new nexacro.Date();
        		var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMddhhmmss");
        		this.fnDaySet(); //대여처리 일자 자동 픽스

        		this.mdt_indate = f_date;//등록일
        		this.mdt_update = f_date;//최근수정일
        		this.fnBtnSave(); //저장 함수 호출

        		//http.Sync = false;
        	}
        };

        this.fnDaySet = function()
        {
        	var state; //카드상태
        	state =	this.cbo_state.value;

        	var objDate = new nexacro.Date();  // getDate();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMddhhmmss");

        	if(state == 1) //대여처리
        	{
        		if (this.mdt_rent.value == null || (this.mdt_rent.value).length == 0)
        		{
        			this.mdt_rent.value = f_date;
        		}
        	}
        	if(state == 4) //장기대여처리
        	{
        		this.mdt_return.value = '99999999999999';
        		if (this.mdt_rent.value == null || (this.mdt_rent.value).length == 0)
        		{
        			this.mdt_rent.value = f_date;
        		}
        	}
        	if(state == 2) //반납처리
        	{
        		trace(this.mdt_return.value);

        		if (this.mdt_return.value == null || (this.mdt_return.value).length == 0)
        		{
        			this.mdt_return.value = f_date;
        		}
        		if (this.mdt_return.value = '99999999999999')
        		{
        			this.mdt_return.value = f_date;
        		}
        	}
        	if(state == 3) //분실처리
        	{
        		if (this.mdt_lost.value == null || (this.mdt_lost.value).length == 0)
        		{
        			this.mdt_lost.value = f_date;
        		}
        	}
        }

        this.fnBtnSave = function() //저장함수 동작
        {
        	var objDate = new nexacro.Date();  // getDate();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMddhhmmss");

        	var JPNO;
        	JPNO = f_date.substr(0,8);

        	var strUrl = "JSP/pd/pd202f_corpcard_save.jsp";
        	var	strArg;   //변수

        	//--생성
        	strArg    = " JPNO="      			+ nexacro.wrapQuote(JPNO); //수불관리번호
        	strArg   += " cboBankType="      	+ nexacro.wrapQuote(this.cbo_banktype.value); //카드종류
        	strArg   += " mdtCardNum="    		+ nexacro.wrapQuote(this.mdt_cardnum.value); //카드번호
        	strArg   += " cboState="    		+ nexacro.wrapQuote(this.cbo_state.value); //카드상태
        	strArg   += " cboGubn="   			+ nexacro.wrapQuote(this.cbo_gubn.value);  //사용구분
        	strArg   += " Edt_EmployeeName="  	+ nexacro.wrapQuote(this.fnNullChk(this.edt_emp_name.value)); //사용자
        	strArg   += " Edt_EmployeeSABUN="	+ nexacro.wrapQuote(this.fnNullChk(this.edt_emp_sabun.value)); //사용자사번
        	strArg   += " Cb_Section="      	+ nexacro.wrapQuote(this.fnNullChk(this.edt_section.value)); //사용부서
        	strArg   += " mdtUsedate="      	+ nexacro.wrapQuote(this.fnNullChk(this.cald_usedate.value)); //사용일시
        	strArg   += " mdtRent="      		+ nexacro.wrapQuote(this.fnNullChk(this.mdt_rent.value)); //대여일시
        	strArg   += " mdtReturn="      	+ nexacro.wrapQuote(this.fnNullChk(this.mdt_return.value)); //반납일시
        	strArg   += " mdtLost="      		+ nexacro.wrapQuote(this.fnNullChk(this.mdt_lost.value)); //분실일시
        	strArg   += " mdtUpDate="      	+ nexacro.wrapQuote(this.fnNullChk(this.mdt_update.value)); //최근수정일
        	strArg   += " mdtInDate="      	+ nexacro.wrapQuote(this.fnNullChk(this.mdt_indate.value)); //등록일
        	strArg   += " edtInUser="      	+ nexacro.wrapQuote(this.fnNullChk(this.edt_inuser.value)); //등록자
        	strArg   += " edtBigo="      		+ nexacro.wrapQuote(this.fnNullChk(this.edt_bigo.value)); //비고
        	strArg   += " edt_use_sabun="  	+ nexacro.wrapQuote(this.fnNullChk(this.edt_use_sabun.value)); //실사용자 사번
        	strArg   += " edt_use_name="		+ nexacro.wrapQuote(this.fnNullChk(this.edt_use_name.value)); //실사용자 이름
        	strArg   += " use_buse="			+ nexacro.wrapQuote(this.fnNullChk(this.edt_use_buse.value)); // 실사용자 부서

        	//trace(strArg);
        	this.gfn_TransactionP("Save_card", strUrl, "", "", strArg, "fnCallback", false, "P", false, this);
        }

        this.btn_edt_onclick = function(obj,e)
        {
        	if ((this.mdt_sbnum.value).length == 0)
        	{
        		alert("수불 정보가 선택되지 않았습니다.");
        		return;
        	}

        	if (this.cbo_banktype.index == 0)
        	{
        		alert("카드종류를 선택하세요.");
        		this.cbo_banktype.setFocus();
        		return;
        	}

        	if ((this.mdt_cardnum.value).length == 0)
        	{
        		alert("카드번호를 확인하세요.");
        		this.mdt_cardnum.setFocus();
        		return;
        	}

        	if (this.cbo_state.index == 0)
        	{
        		alert("카드상태를 확인하세요.");
        		this.cbo_state.setFocus();
        		return;
        	}
        	if (this.cbo_gubn.index == 0)
        	{
        		alert("사용구분을 확인하세요.");
        		this.cbo_gubn.setFocus();
        		return;
        	}

        	if (this.cbo_state.index == 3)
        	{
        		alert("분실로 처리할 경우 카드 정보가 '사용불가'로 변경됩니다.");
        	}

        	var objApp = nexacro.getApplication();
        	if(msg_result = objApp.confirm( "수정하시겠습니까?" , "수정확인", "warning" ))
        	{
        		var objDate = new nexacro.Date();  // getDate();
        		var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMddhhmmss");
        		this.fnDaySet(); //일자 자동 픽스
        		this.mdt_update = f_date;//최근수정일
        		this.fnBtnUpdate(); //수정 함수 호출
        	}
        };

        this.fnBtnUpdate = function()
        {
        	var strUrl = "JSP/pd/pd202f_corpcard_update.jsp";
        	var	strArg;   //변수

        	//조건
        	strArg    = " mdtSbNum="      	+ nexacro.wrapQuote(this.fnNullChk(this.mdt_sbnum.value)); //관리번호
        	strArg   += " cboBankType="    + nexacro.wrapQuote(this.fnNullChk(this.cbo_banktype.value)); //카드종류
        	strArg   += " mdtCardNum="    	+ nexacro.wrapQuote(this.fnNullChk(this.mdt_cardnum.value)); //카드번호

        	//변경
        	strArg   += " cboState="    	+ nexacro.wrapQuote(this.fnNullChk(this.cbo_state.value)); //카드상태
        	strArg   += " cboGubn="    	+ nexacro.wrapQuote(this.cbo_gubn.value); //사용구분
        	strArg   += " EmployeeName="   + nexacro.wrapQuote(this.fnNullChk(this.edt_emp_name.value));  //사용자
        	strArg   += " EmployeeSABUN="  + nexacro.wrapQuote(this.fnNullChk(this.edt_emp_sabun.value));  //사용자
        	strArg   += " Section="      	+ nexacro.wrapQuote(this.fnNullChk(this.edt_section.value)); //사용부서
        	strArg   += " mdtUsedate="     + nexacro.wrapQuote(this.fnNullChk(this.cald_usedate.value)); //결제예정일
        	strArg   += " mdtRent="      	+ nexacro.wrapQuote(this.fnNullChk(this.mdt_rent.value)); //대여일시
        	strArg   += " mdtReturn="      + nexacro.wrapQuote(this.fnNullChk(this.mdt_return.value)); //반납일시
        	strArg   += " mdtLost="      	+ nexacro.wrapQuote(this.fnNullChk(this.mdt_lost.value)); //분실일시
        	strArg   += " mdtUpDate="      + nexacro.wrapQuote(this.fnNullChk(this.mdt_update.value)); //최근수정일
        	strArg   += " edtBigo="      	+ nexacro.wrapQuote(this.fnNullChk(this.edt_bigo.value)); //비고
        	strArg   += " TEXTlost="      	+ nexacro.wrapQuote("-분실처리됨"); //비고
        	strArg   += " edt_use_sabun="  + nexacro.wrapQuote(this.fnNullChk(this.edt_use_sabun.value));
        	strArg   += " edt_use_name="   + nexacro.wrapQuote(this.fnNullChk(this.edt_use_name.value));
        	strArg   += " use_buse="		+ nexacro.wrapQuote(this.fnNullChk(this.edt_use_buse.value));
        	//trace(strArg);

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
        		this.btn_search.click(); //저장 후 조회 처리
        		this.fnCardCount();
        	}
        	if(trid == "Search_cardList")
        	{
        		trace("조회 완료");
        		this.fnCardCount();
        		this.btn_card_search.set_enable(false);
        	}
        	if(trid == "Update_card")
        	{
        		trace("수정 완료");
        		this.btn_search.click(); //저장 후 조회 처리
        		this.fnCardCount();
        	}
        	if(trid == "Search_cardcount")
        	{
        		trace("카운터조회 완료");
        	}
        	if(trid == "Del_cardList")
        	{
        		trace("삭제 완료");
        		this.btn_search.click(); //저장 후 조회 처리
        	}
        }

        this.fnInit = function()
        {
        	var objDate = new nexacro.Date();  // getDate();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMddhhmmss");

        	//카드정보 초기화
        	this.cbo_banktype.set_index(0); //카드종류
        	this.mdt_cardnum.set_value(''); //카드번호
        	this.edt_cvc.set_value(''); //cvc번호
        	this.mdt_bankacc.set_value('');//결제계좌
        	this.mdt_amtlimit.set_value(''); //결제한도
        	this.edt_expdate.set_value(''); //유효기간

        	//수불초기화
        	this.mdt_sbnum.set_value(''); //관리번호
        	this.cbo_state.set_index(0); //카드상태
        	this.cbo_gubn.set_index(0); //사용구분
        	this.edt_emp_name.set_value(''); //사용자
        	this.edt_emp_sabun.set_value(''); //사용자사번
        	this.edt_section.set_value(''); //사용부서
        	this.cald_usedate.set_value(''); //결제예정일
        	this.mdt_rent.set_value(''); //대여일
        	this.mdt_return.set_value(''); //반납일
        	this.mdt_lost.set_value(''); //분실일
        	this.mdt_indate.set_value(f_date); //등록일
        	this.edt_inuser.set_value(gv_sabun); //등록자 사번
        	this.mdt_update.set_value(''); //최근수정일
        	this.edt_bigo.set_value('');

        	this.edt_use_buse.set_value('');
        	this.edt_use_name.set_value('');
        	this.edt_use_sabun.set_value('');
        }
        this.btn_new_onclick = function(obj,e)
        {
        	this.fnInit();
        	this.btn_card_search.set_enable(true);
        	this.dsSubulList.clearData();
        	this.dsSubulList.addRow();
        };

        this.grd_cardlist_oncellclick = function(obj,e)
        {
        	this.fnCloseEdit();
        	this.edt_use_buse.set_value(this.dsSubulList.getColumn(e.row, "SU_USE_BUSE"));
        };

        this.fnOpenEdit = function()
        {
        	this.cbo_banktype.set_enable(true);
        	this.mdt_cardnum.set_enable(true);
        }
        this.fnCloseEdit = function()
        {
        	this.cbo_banktype.set_enable(false);
        	this.mdt_cardnum.set_enable(false);
        	this.btn_card_search.set_enable(false);
        }

        this.btn_del_onclick = function(obj,e)
        {
        	var chk = false;
        	for(var i=0; i < this.dsSubulList.rowcount; i++)
        	{
        		if(this.dsSubulList.getColumn(i,"CHK")  == '1')
        			chk = true
        	}
        	if(chk == false)
        	{
        		alert('선택된 데이터가 없습니다');
        		return;
        	}
        	var objApp = nexacro.getApplication();
        	if(msg_result = objApp.confirm( "삭제하시겠습니까?" , "삭제확인", "warning" ))
        	{
        		this.fnBtnDel(); //삭제 함수 호출
        	}
        };

        this.fnBtnDel = function()
        {
        	var strUrl = "JSP/pd/pd202f_corpcard_Delete.jsp";
        	var inDs 	= "input=dsSubulList:u";	//보내는 데이터셋

        	this.gfn_TransactionP("Del_cardList", strUrl, inDs, "", "", "fnCallback", false, "P", false, this);
        }

        this.btn_hr_search_onclick = function(obj,e)
        {
        	this.lfn_showModal("hr_search", {gubn:"emp"}, "pd::PD202_HRSearchF.xfdl", "fnHrSearchCallBack", this, 0, 0, 350, 360);
        };

        this.btn_hr_search2_onclick = function(obj,e)
        {
        	this.lfn_showModal("hr_search2", {gubn:"use"}, "pd::PD202_HRSearchF.xfdl", "fnHrSearchCallBack", this, 0, 0, 350, 360);
        };

        this.fnHrSearchCallBack = function(strID, ret)
        {
        	if(ret == 1) // 1 = 실사용자 / 0 = 사용자
        	{
        		this.edt_use_sabun.set_value(this.dsSearch.getColumn(0,"SABUN"));
        		this.edt_use_name.set_value(this.dsSearch.getColumn(0,"NAME"));
        		this.edt_use_buse.set_value(this.dsSearch.getColumn(0,"BUSE"));
        	}
        	else
        	{
        		this.edt_emp_name.set_value(this.dsSearch.getColumn(0,"NAME"));
        		this.edt_emp_sabun.set_value(this.dsSearch.getColumn(0,"SABUN"));
        		this.edt_section.set_value(this.dsSearch.getColumn(0,"BUSE"));
        	}
        }

        this.fnNullChk = function(value)
        {
        	if(value != null)
        		return nexacro.trim(value);
        	else
        		return '';
        }

        this.btn_print_onclick = function(obj,e)
        {
        	this.exportObj = new ExcelExportObject();
            var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_cardlist, "Sheet1!A1");
        	this.exportObj.set_exportfilename( "CorpCardList" );
        	this.exportObj.set_exporturl(gv_urlXeni);
            this.exportObj.exportData();
        };

        this.PD202F_onsize = function(obj,e)
        {
        	if(this.height < 480 || this.width < 1330)
        	{
        		this.Static00.set_font('bold 34px/normal "함초롬바탕 확장B"');

        		this.Static01_00.set_font('bold 9pt/normal "Arial"');
        		this.Static01_01.set_font('bold 9pt/normal "Arial"');
        		this.Static01_02.set_font('bold 9pt/normal "Arial"');
        		this.Static01_03.set_font('bold 9pt/normal "Arial"');
        		this.Static01_04.set_font('bold 9pt/normal "Arial"');
        		this.Static01_05.set_font('bold 9pt/normal "Arial"');

        		this.Static02_00.set_font('bold 9pt/normal "Arial"');
        		this.Static02_01.set_font('bold 9pt/normal "Arial"');
        		this.Static02_02.set_font('bold 9pt/normal "Arial"');
        		this.Static02_03.set_font('bold 9pt/normal "Arial"');
        		this.Static02_04.set_font('bold 9pt/normal "Arial"');
        		this.Static02_05.set_font('bold 9pt/normal "Arial"');
        		this.Static02_06.set_font('bold 9pt/normal "Arial"');
        		this.Static02_07.set_font('bold 9pt/normal "Arial"');
        		this.Static02_08.set_font('bold 9pt/normal "Arial"');
        		this.Static02_09.set_font('bold 9pt/normal "Arial"');
        		this.Static02_10.set_font('bold 9pt/normal "Arial"');
        		this.Static02_11.set_font('bold 9pt/normal "Arial"');
        		this.Static02_12.set_font('bold 9pt/normal "Arial"');
        		this.Static02_13.set_font('bold 9pt/normal "Arial"');
        		this.Static02_14.set_font('bold 9pt/normal "Arial"');

        		this.Static01_01_00_00_00_01.set_font('bold 9pt/normal "Arial"');
        		this.Static01_01_00_00_00_02.set_font('bold 9pt/normal "Arial"');

        		this.Static03_00.set_font('bold 9pt/normal "Arial"');
        		this.Static03_01.set_font('bold 9pt/normal "Arial"');
        		this.Static03_02.set_font('bold 9pt/normal "Arial"');
        		this.Static03_03.set_font('bold 9pt/normal "Arial"');
        		this.Static03_04.set_font('bold 9pt/normal "Arial"');
        		this.Static03_05.set_font('bold 9pt/normal "Arial"');
        		this.Static03_06.set_font('bold 9pt/normal "Arial"');
        		this.Static03_07.set_font('bold 9pt/normal "Arial"');
        		this.Static03_08.set_font('bold 9pt/normal "Arial"');

        		this.cbo_banktype.set_font('11px/normal "Gulim"');
        		this.mdt_cardnum.set_font('11px/normal "Gulim"');
        		this.edt_cvc.set_font('11px/normal "Gulim"');
        		this.mdt_bankacc.set_font('11px/normal "Gulim"');
        		this.mdt_amtlimit.set_font('11px/normal "Gulim"');
        		this.edt_expdate.set_font('11px/normal "Gulim"');
        		this.mdt_sbnum.set_font('11px/normal "Gulim"');
        		this.cbo_state.set_font('11px/normal "Gulim"');
        		this.cbo_gubn.set_font('11px/normal "Gulim"');
        		this.edt_emp_sabun.set_font('11px/normal "Gulim"');
        		this.edt_emp_name.set_font('11px/normal "Gulim"');
        		this.edt_section.set_font('11px/normal "Gulim"');
        		this.cald_usedate.set_font('11px/normal "Gulim"');
        		this.mdt_rent.set_font('11px/normal "Gulim"');
        		this.mdt_return.set_font('11px/normal "Gulim"');
        		this.mdt_lost.set_font('11px/normal "Gulim"');
        		this.mdt_indate.set_font('11px/normal "Gulim"');
        		this.edt_inuser.set_font('11px/normal "Gulim"');
        		this.mdt_update.set_font('11px/normal "Gulim"');
        		this.edt_bigo.set_font('11px/normal "Gulim"');
        		this.edt_use_sabun.set_font('11px/normal "Gulim"');
        		this.edt_use_name.set_font('11px/normal "Gulim"');
        		this.cbo_sch_type.set_font('11px/normal "Gulim"');
        		this.mdt_sch_cardnum.set_font('11px/normal "Gulim"');
        		this.mdt_sch_bankacc.set_font('11px/normal "Gulim"');
        		this.edt_usedep.set_font('11px/normal "Gulim"');
        		this.edt_nm.set_font('11px/normal "Gulim"');
        		this.cbo_sch_state.set_font('11px/normal "Gulim"');
        		this.cbo_sch_gubn.set_font('11px/normal "Gulim"');
        		this.cbo_ord_mstsort.set_font('11px/normal "Gulim"');
        		this.cald_sch_date_s.set_font('11px/normal "Gulim"');
        		this.cald_sch_date_e.set_font('11px/normal "Gulim"');

        		this.btn_new.set_font('bold 8pt/normal "Arial"');
        		this.btn_cancel.set_font('bold 8pt/normal "Arial"');
        		this.btn_edt.set_font('bold 8pt/normal "Arial"');
        		this.btn_save.set_font('bold 8pt/normal "Arial"');
        		this.btn_print.set_font('bold 8pt/normal "Arial"');
        		this.btn_del.set_font('bold 8pt/normal "Arial"');
        		this.btn_search.set_font('bold 8pt/normal "Arial"');

        		this.btn_card_search.set_font('bold 7pt/normal "Arial"');
        		this.btn_hr_search.set_font('bold 7pt/normal "Arial"');
        		this.btn_hr_search2.set_font('bold 7pt/normal "Arial"');

        		this.grd_cardlist.set_font('normal 11px/normal "Gulim"');
        		this.grd_count.set_font('normal 11px/normal "Gulim"');
        	}
        	else
        	{
        		this.Static00.set_font('bold 40px/normal "함초롬바탕 확장B"');

        		this.Static01_00.set_font('bold 11pt/normal "Arial"');
        		this.Static01_01.set_font('bold 11pt/normal "Arial"');
        		this.Static01_02.set_font('bold 11pt/normal "Arial"');
        		this.Static01_03.set_font('bold 11pt/normal "Arial"');
        		this.Static01_04.set_font('bold 11pt/normal "Arial"');
        		this.Static01_05.set_font('bold 11pt/normal "Arial"');

        		this.Static02_00.set_font('bold 11pt/normal "Arial"');
        		this.Static02_01.set_font('bold 11pt/normal "Arial"');
        		this.Static02_02.set_font('bold 11pt/normal "Arial"');
        		this.Static02_03.set_font('bold 11pt/normal "Arial"');
        		this.Static02_04.set_font('bold 11pt/normal "Arial"');
        		this.Static02_05.set_font('bold 11pt/normal "Arial"');
        		this.Static02_06.set_font('bold 11pt/normal "Arial"');
        		this.Static02_07.set_font('bold 11pt/normal "Arial"');
        		this.Static02_08.set_font('bold 11pt/normal "Arial"');
        		this.Static02_09.set_font('bold 11pt/normal "Arial"');
        		this.Static02_10.set_font('bold 11pt/normal "Arial"');
        		this.Static02_11.set_font('bold 11pt/normal "Arial"');
        		this.Static02_12.set_font('bold 11pt/normal "Arial"');
        		this.Static02_13.set_font('bold 11pt/normal "Arial"');
        		this.Static02_14.set_font('bold 11pt/normal "Arial"');

        		this.Static01_01_00_00_00_01.set_font('bold 11pt/normal "Arial"');
        		this.Static01_01_00_00_00_02.set_font('bold 11pt/normal "Arial"');

        		this.Static03_00.set_font('bold 11pt/normal "Arial"');
        		this.Static03_01.set_font('bold 11pt/normal "Arial"');
        		this.Static03_02.set_font('bold 11pt/normal "Arial"');
        		this.Static03_03.set_font('bold 11pt/normal "Arial"');
        		this.Static03_04.set_font('bold 11pt/normal "Arial"');
        		this.Static03_05.set_font('bold 11pt/normal "Arial"');
        		this.Static03_06.set_font('bold 11pt/normal "Arial"');
        		this.Static03_07.set_font('bold 11pt/normal "Arial"');
        		this.Static03_08.set_font('bold 11pt/normal "Arial"');

        		this.cbo_banktype.set_font('13px/normal "Gulim"');
        		this.mdt_cardnum.set_font('13px/normal "Gulim"');
        		this.edt_cvc.set_font('13px/normal "Gulim"');
        		this.mdt_bankacc.set_font('13px/normal "Gulim"');
        		this.mdt_amtlimit.set_font('13px/normal "Gulim"');
        		this.edt_expdate.set_font('13px/normal "Gulim"');
        		this.mdt_sbnum.set_font('13px/normal "Gulim"');
        		this.cbo_state.set_font('13px/normal "Gulim"');
        		this.cbo_gubn.set_font('13px/normal "Gulim"');
        		this.edt_emp_sabun.set_font('13px/normal "Gulim"');
        		this.edt_emp_name.set_font('13px/normal "Gulim"');
        		this.edt_section.set_font('13px/normal "Gulim"');
        		this.cald_usedate.set_font('13px/normal "Gulim"');
        		this.mdt_rent.set_font('13px/normal "Gulim"');
        		this.mdt_return.set_font('13px/normal "Gulim"');
        		this.mdt_lost.set_font('13px/normal "Gulim"');
        		this.mdt_indate.set_font('13px/normal "Gulim"');
        		this.edt_inuser.set_font('13px/normal "Gulim"');
        		this.mdt_update.set_font('13px/normal "Gulim"');
        		this.edt_bigo.set_font('13px/normal "Gulim"');
        		this.edt_use_sabun.set_font('13px/normal "Gulim"');
        		this.edt_use_name.set_font('13px/normal "Gulim"');
        		this.cbo_sch_type.set_font('13px/normal "Gulim"');
        		this.mdt_sch_cardnum.set_font('13px/normal "Gulim"');
        		this.mdt_sch_bankacc.set_font('13px/normal "Gulim"');
        		this.edt_usedep.set_font('13px/normal "Gulim"');
        		this.edt_nm.set_font('13px/normal "Gulim"');
        		this.cbo_sch_state.set_font('13px/normal "Gulim"');
        		this.cbo_sch_gubn.set_font('13px/normal "Gulim"');
        		this.cbo_ord_mstsort.set_font('13px/normal "Gulim"');
        		this.cald_sch_date_s.set_font('13px/normal "Gulim"');
        		this.cald_sch_date_e.set_font('13px/normal "Gulim"');


        		this.btn_new.set_font('bold 10pt/normal "Arial"');
        		this.btn_cancel.set_font('bold 10pt/normal "Arial"');
        		this.btn_edt.set_font('bold 10pt/normal "Arial"');
        		this.btn_save.set_font('bold 10pt/normal "Arial"');
        		this.btn_print.set_font('bold 10pt/normal "Arial"');
        		this.btn_del.set_font('bold 10pt/normal "Arial"');
        		this.btn_search.set_font('bold 10pt/normal "Arial"');

        		this.btn_card_search.set_font('bold 8pt/normal "Arial"');
        		this.btn_hr_search.set_font('bold 8pt/normal "Arial"');
        		this.btn_hr_search2.set_font('bold 8pt/normal "Arial"');

        		this.grd_cardlist.set_font('normal 12px/normal "Gulim"');
        		this.grd_count.set_font('normal 12px/normal "Gulim"');
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PD202F_onload,this);
            this.addEventHandler("onsize",this.PD202F_onsize,this);
            this.btn_card_search.addEventHandler("onclick",this.btn_card_search_onclick,this);
            this.btn_hr_search.addEventHandler("onclick",this.btn_hr_search_onclick,this);
            this.btn_hr_search2.addEventHandler("onclick",this.btn_hr_search2_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.grd_cardlist.addEventHandler("oncellclick",this.grd_cardlist_oncellclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_edt.addEventHandler("onclick",this.btn_edt_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.div_main_btn_print_onclick,this);
            this.btn_new.addEventHandler("onclick",this.btn_new_onclick,this);
        };
        this.loadIncludeScript("PD202F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
