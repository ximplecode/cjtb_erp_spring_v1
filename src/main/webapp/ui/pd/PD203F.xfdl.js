(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PD203F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1630,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CCUL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CCUL_USEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CCUL_USETIME\" type=\"STRING\" size=\"256\"/><Column id=\"SU_CARD\" type=\"STRING\" size=\"256\"/><Column id=\"CREDITCARD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CREDITCARD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SU_CARESABUN\" type=\"STRING\" size=\"256\"/><Column id=\"SU_CAREUSER\" type=\"STRING\" size=\"256\"/><Column id=\"SU_USEDEP\" type=\"STRING\" size=\"256\"/><Column id=\"CCUL_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_GB\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CCUL_CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SU_RENT\" type=\"STRING\" size=\"256\"/><Column id=\"SU_RETURN\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_SALE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_AMT_FX\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DATE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_COUNTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_GB\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_NB\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SU_USE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CI_PAYBANKNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBankType", this);
            obj._setContents("<ColumnInfo><Column id=\"BANK_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"BANK_NAME\" type=\"STRING\" size=\"15\"/></ColumnInfo><Rows><Row><Col id=\"BANK_CODE\">0</Col><Col id=\"BANK_NAME\">선택</Col></Row><Row><Col id=\"BANK_CODE\">1</Col><Col id=\"BANK_NAME\">국민</Col></Row><Row><Col id=\"BANK_CODE\">2</Col><Col id=\"BANK_NAME\">신한</Col></Row><Row><Col id=\"BANK_CODE\">3</Col><Col id=\"BANK_NAME\">우리</Col></Row><Row><Col id=\"BANK_CODE\">4</Col><Col id=\"BANK_NAME\">현대</Col></Row><Row><Col id=\"BANK_CODE\">5</Col><Col id=\"BANK_NAME\">삼성</Col></Row><Row><Col id=\"BANK_CODE\">6</Col><Col id=\"BANK_NAME\">기업</Col></Row><Row><Col id=\"BANK_CODE\">8</Col><Col id=\"BANK_NAME\">하나</Col></Row><Row><Col id=\"BANK_CODE\">7</Col><Col id=\"BANK_NAME\">(개인)법인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAcnt", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\"/></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">일반</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">교과서</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">출장</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBank", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">국민</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">신한</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">우리</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">현대</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">삼성</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"NAME\">기업</Col></Row><Row><Col id=\"CODE\">7</Col><Col id=\"NAME\">(개인)법인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGb", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">(출장)교통비</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">(출장)숙박비</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">(출장)식비</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">(출장)일비</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">(출장)기타</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"NAME\">(출장)접대비</Col></Row><Row><Col id=\"CODE\">99</Col><Col id=\"NAME\">전체 제외</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","2.70%","1.45%","50%","8.95%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("법인카드 지결서 현황");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03","55.5%","Static00:17%","8.25%","4.25%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("결제계좌");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","32%","Static00:17%","8.25%","4.25%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("카드번호");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mdt_card_num","Static01_02:-1","Static00:17%",null,"4.25%","Static01_03:-1",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_border("1px solid #10aea9");
            obj.set_type("string");
            obj.set_format("####-####-####-####");
            obj.set_textAlign("center");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_padding("0px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_07","Static01_02:-1","mdt_card_num:-1","8.25%","4.25%",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("사용자");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 40px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cardlist","30","Static01_07:0",null,null,"30","30",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_border("1px solid #10aea9");
            obj.set_binddataset("dsData");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_font("normal 12px/normal \"Gulim\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"64\"/><Column size=\"68\"/><Column size=\"134\"/><Column size=\"62\"/><Column size=\"62\"/><Column size=\"130\"/><Column size=\"76\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"76\"/><Column size=\"80\"/><Column size=\"78\"/><Column size=\"138\"/><Column size=\"58\"/><Column size=\"100\"/><Column size=\"82\"/><Column size=\"82\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"사용일자\"/><Cell col=\"1\" text=\"사용시간\"/><Cell col=\"2\" text=\"카드종류\"/><Cell col=\"3\" text=\"카드번호\"/><Cell col=\"4\" text=\"사용자\"/><Cell col=\"5\" text=\"실사용자\"/><Cell col=\"6\" text=\"사용부서\"/><Cell col=\"7\" text=\"사용금액\"/><Cell col=\"8\" text=\"승인번호\"/><Cell col=\"9\" text=\"구분\"/><Cell col=\"10\" text=\"확정금액\"/><Cell col=\"11\" text=\"지결서 구분\"/><Cell col=\"12\" text=\"지결서 번호\"/><Cell col=\"13\" text=\"선택구분\"/><Cell col=\"14\" text=\"사용처\"/><Cell col=\"15\" text=\"결제은행\"/><Cell col=\"16\" text=\"계좌번호\"/><Cell col=\"17\" text=\"해외 결제금액\" font=\"normal 700 11px/normal &quot;Gulim&quot;\"/><Cell col=\"18\" text=\"해외 결제지역\" font=\"normal 700 11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:CCUL_USEDATE\" textAlign=\"center\" maskedittype=\"string\" maskeditformat=\"####-##-##\" displaytype=\"mask\"/><Cell col=\"1\" text=\"bind:CCUL_USETIME\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"##:##:##\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:SU_CARD\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsBank\" combodatacol=\"NAME\" combocodecol=\"CODE\"/><Cell col=\"3\" text=\"bind:CREDITCARD_CODE\" textAlign=\"center\" maskeditformat=\"####-####-####-####\" maskedittype=\"string\" displaytype=\"mask\"/><Cell col=\"4\" text=\"bind:SU_CAREUSER\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:SU_USE_NAME\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:SU_USEDEP\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:CCUL_AMOUNT\" displaytype=\"number\" maskeditformat=\"###,\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:APPR_NB\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:APPR_SALE_TYPE\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:ACNT_AMOUNT\" textAlign=\"right\" maskeditformat=\"###,\" displaytype=\"number\" edittype=\"normal\"/><Cell col=\"11\" text=\"bind:ACNT_GB\" textAlign=\"center\" combodataset=\"dsAcnt\" combodatacol=\"NAME\" combocodecol=\"CODE\" displaytype=\"combotext\"/><Cell col=\"12\" text=\"bind:ACNT_NO\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:ACCOUNT_GB\" textAlign=\"center\" combodataset=\"dsGb\" combodatacol=\"NAME\" combocodecol=\"CODE\" displaytype=\"combotext\"/><Cell col=\"14\" text=\"bind:CCUL_CUST_NAME\"/><Cell col=\"15\" text=\"bind:CI_PAYBANKNAME\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:CI_ACCOUNT\"/><Cell col=\"17\" text=\"bind:APPR_AMT_FX\"/><Cell col=\"18\" text=\"bind:APPR_COUNTRY_NM\"/></Band><Band id=\"summary\"><Cell background=\"#0d908c\" color=\"white\"/><Cell col=\"1\" background=\"#0d908c\" color=\"white\"/><Cell col=\"2\" background=\"#0d908c\" color=\"white\"/><Cell col=\"3\" background=\"#0d908c\" color=\"white\"/><Cell col=\"4\" background=\"#0d908c\" color=\"white\"/><Cell col=\"5\" background=\"#0d908c\" color=\"white\"/><Cell col=\"6\" background=\"#0d908c\" color=\"white\"/><Cell col=\"7\" background=\"#0d908c\" color=\"white\" expr=\"dataset.getSum(&quot;nexacro.toNumber(CCUL_AMOUNT)&quot;)\" displaytype=\"number\" maskeditformat=\"###,\" maskedittype=\"number\"/><Cell col=\"8\" background=\"#0d908c\" color=\"white\"/><Cell col=\"9\" background=\"#0d908c\" color=\"white\"/><Cell col=\"10\" background=\"#0d908c\" color=\"white\" expr=\"dataset.getSum(&quot;nexacro.toNumber(ACNT_AMOUNT)&quot;)\" displaytype=\"number\" maskeditformat=\"###,\"/><Cell col=\"11\" background=\"#0d908c\" color=\"white\"/><Cell col=\"12\" background=\"#0d908c\" color=\"white\"/><Cell col=\"13\" background=\"#0d908c\" color=\"white\"/><Cell col=\"14\" background=\"#0d908c\" color=\"white\"/><Cell col=\"15\" background=\"#0d908c\" color=\"white\"/><Cell col=\"16\" background=\"#0d908c\" color=\"white\"/><Cell col=\"17\" background=\"#0d908c\" color=\"white\"/><Cell col=\"18\" background=\"#0d908c\" color=\"white\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","30","Static00:17%","7.36%",null,null,"grd_cardlist:0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid #10aea9");
            obj.set_text("조 회 조 건");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_background("#e0f6ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","Static01_00:-1","Static00:17%","8.25%","4.25%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("카드종류");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_05","Static01_00:-1","Static01_01:-1","8.25%","4.25%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("일자조회");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_card_gb","Static01_01:-1","Static00:17%",null,"4.25%","Static01_02:-1",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_font("11px/normal \"Gulim\"");
            obj.set_border("1px solid #10aea9");
            obj.set_innerdataset("dsBankType");
            obj.set_codecolumn("BANK_CODE");
            obj.set_datacolumn("BANK_NAME");
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04","78%","Static00:17%","8.25%","4.25%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("사용부서");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mdt_bank_num","Static01_03:-1","Static00:17%",null,"4.25%","Static01_04:-1",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_border("1px solid #10aea9");
            obj.set_type("string");
            obj.set_format("################");
            obj.set_textAlign("center");
            obj.set_font("13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buse","Static01_04:-1","Static00:17%",null,"4.25%","30",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("true");
            obj.set_textAlign("left");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_text(" ");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_06","Static01_05:-1","Static01_02:-1",null,"4.25%","Static01_07:-1",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_bymd","Static01_06:-98.11%","Static01_06:-93.75%","Static01_06:45.60%",null,null,"Static01_06:-93.75%",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_eymd","Static01_06:-47.17%","Static01_06:-93.75%","Static01_06:45.60%",null,null,"Static01_06:-93.75%",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_font("13px/normal \"Gulim\"");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_06_01","cald_bymd:1","Static01_06:-93.75%",null,"Static01_06:87.50%","cald_eymd:1",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("~");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("black");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_hr_select","Static01_07:-38.06%","Static01_07:-84.37%","Static01_07:28.36%",null,null,"Static01_07:-90%",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("검색");
            obj.set_borderRadius("6px");
            obj.set_font("bold 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_emp_sabun","Static01_07:-1","Static01_03:-1",null,"4.25%","Static01_03:-1",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("false");
            obj.set_textAlign("center");
            obj.set_font("13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_08","Static01_03:-1","Static01_03:-1","8.25%","4.25%",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("지결번호");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_emp_name","edt_emp_sabun:-1","Static01_03:-1",null,"4.25%","Static01_08:-1",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_border("1px solid #10aea9");
            obj.set_enable("false");
            obj.set_textAlign("center");
            obj.set_font("13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_09","Static01_04:-1","Static01_04:-1","8.25%","4.25%",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("미작성");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mdt_acnt_no","Static01_08:-1","Static01_03:-1",null,"4.25%","Static01_09:-1",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_border("1px solid #10aea9");
            obj.set_type("string");
            obj.set_format("########-###");
            obj.set_textAlign("center");
            obj.set_font("13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_10","Static01_09:-1","Static01_04:-1",null,"4.25%","30",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_border("1px solid #10aea9");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_letterSpacing("2px");
            obj.set_padding("0px 0px 0px 2px");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_gb","Static01_10:-65%","Static01_10:-80%","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_border("1px solid #01656f");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"5%","4.68%","4.23%","30",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("조회");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"5.00%","4.68%","4.23%","btn_search:5",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("취소");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"5.00%","4.68%","4.23%","btn_cancel:5",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("저장");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel",null,"5.00%","5.90%","4.23%","btn_save:5",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("엑셀변환");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
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
        this.addIncludeScript("PD203F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("PD203F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("PD203F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");

        this.PD203F_onload = function(obj,e)
        {
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMdd");
        	this.cald_bymd.set_value(f_date.substr(0,6) + "01");
        	this.cald_eymd.set_value(f_date);
        };

        this.btn_search_onclick = function(obj,e)
        {
        	var strUrl = "JSP/pd/pd203_select.jsp";
        	var	strArg;
        	var strDs = "dsData=dsData";

        	strArg  = " card_gb="+ nexacro.wrapQuote(this.cbo_card_gb.value); //카드종류
        	strArg += " card_num="+ nexacro.wrapQuote(this.fnNullChk(this.mdt_card_num.value)); //카드번호
        	strArg += " bank_num="+ nexacro.wrapQuote(this.fnNullChk(this.mdt_bank_num.value)); //결제계좌
        	strArg += " buse="+ nexacro.wrapQuote(this.fnNullChk(this.edt_buse.value)); //사용부서
        	strArg += " bymd=" + nexacro.wrapQuote(this.fnNullChk(this.cald_bymd.value)); //날짜시작일
        	strArg += " eymd=" + nexacro.wrapQuote(this.fnNullChk(this.cald_eymd.value)); //날짜종료일
        	strArg += " sabun=" + nexacro.wrapQuote(this.fnNullChk(this.edt_emp_sabun.value));
        	strArg += " acnt_no="+nexacro.wrapQuote(this.fnNullChk(this.mdt_acnt_no.value));
        	strArg += " acnt_gb="+nexacro.wrapQuote(this.chk_gb.value);

        	this.gfn_TransactionP("select", strUrl, strDs, strDs, strArg, "fnCallbackSelect", false, "P", false, this);
        };

        this.fnCallbackSelect = function(Trid,ErrorCode,ErrorMsg)
        {
            if (ErrorCode != 0)
            {
                alert(ErrorMsg);
                return;
            }
        }

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.cbo_card_gb.set_value(0);
        	this.mdt_card_num.set_value("");
        	this.mdt_bank_num.set_value("");
        	this.edt_buse.set_value("");
        	this.edt_emp_sabun.set_value("");
        	this.edt_emp_name.set_value("");
        	this.mdt_acnt_no.set_value("");
        };

        this.btn_save_onclick = function(obj,e)
        {
        	var strUrl, inDs, strArg;

        	strUrl = "JSP/pd/pd203_dml.jsp";
        	inDs = "input=dsData:U";
        	strArg = "sabun="+nexacro.wrapQuote(gv_sabun);

        	this.gfn_TransactionP("dml", strUrl, inDs, "", strArg, "fnCallbackDml", false, "P", false, this);
        };

        this.fnCallbackDml = function(Trid,ErrorCode,ErrorMsg)
        {
            if (ErrorCode != 0)
            {
                alert(ErrorMsg);
                return;
            }
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	if(this.dsData.rowcount <= 0)
        		return;

        	this.exportObj = new ExcelExportObject();
            var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_cardlist, "Sheet1!A1");
        	this.exportObj.set_exportfilename( "CorpCardList" );
        	this.exportObj.set_exporturl(gv_urlXeni);
            this.exportObj.exportData();
        };

        this.btn_hr_select_onclick = function(obj,e)
        {
        	this.lfn_showModal("hr_search", {gubn:"emp"}, "pd::PD202_HRSearchF.xfdl", "fnHrSearchCallBack", this, 0, 0, 350, 360);
        };

        this.fnHrSearchCallBack = function(strID, ret)
        {
        	if(ret == 0) // 1 = 실사용자 / 0 = 사용자
        	{
        		this.edt_emp_sabun.set_value(this.dsSearch.getColumn(0,"SABUN"));
        		this.edt_emp_name.set_value(this.dsSearch.getColumn(0,"NAME"));
        		this.edt_buse.set_value(this.dsSearch.getColumn(0,"BUSE"));
        	}
        }

        this.fnNullChk = function(value)
        {
        	if(value != null)
        		return nexacro.trim(value);
        	else
        		return '';
        }

        this.PD203F_onsize = function(obj,e)
        {
        	if(this.height < 480 || this.width < 850)
        		this.Static00.set_font('bold 32px/normal "함초롬바탕 확장B"');
        	else
        		this.Static00.set_font('bold 40px/normal "함초롬바탕 확장B"');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PD203F_onload,this);
            this.addEventHandler("onsize",this.PD203F_onsize,this);
            this.btn_hr_select.addEventHandler("onclick",this.btn_hr_select_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
        };
        this.loadIncludeScript("PD203F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
