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


            obj = new Dataset("ds_book", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GB\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"4\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"15\"/><Column id=\"CODE\" type=\"STRING\" size=\"10\"/><Column id=\"YY\" type=\"STRING\" size=\"4\"/><Column id=\"BDBR_NM\" type=\"STRING\" size=\"20\"/><Column id=\"BJBR_NM\" type=\"STRING\" size=\"20\"/><Column id=\"BGRP_NM\" type=\"STRING\" size=\"50\"/><Column id=\"SYMD\" type=\"STRING\" size=\"8\"/><Column id=\"CYUL\" type=\"STRING\" size=\"20\"/><Column id=\"CCOST\" type=\"STRING\" size=\"20\"/><Column id=\"B_YN\" type=\"STRING\" size=\"1\"/><Column id=\"B_GYMD\" type=\"STRING\" size=\"8\"/><Column id=\"B_YUL\" type=\"STRING\" size=\"7\"/><Column id=\"JUK_GB\" type=\"STRING\" size=\"1\"/><Column id=\"BIGO\" type=\"STRING\" size=\"20\"/><Column id=\"BGBR_CD\" type=\"STRING\" size=\"2\"/><Column id=\"BGBR_NM\" type=\"STRING\" size=\"20\"/><Column id=\"OLD_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"CHK\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bookcust_send", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"BDBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BJBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BGRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYMD\" type=\"STRING\" size=\"256\"/><Column id=\"CYUL\" type=\"STRING\" size=\"256\"/><Column id=\"CCOST\" type=\"STRING\" size=\"256\"/><Column id=\"B_YN\" type=\"STRING\" size=\"256\"/><Column id=\"B_GYMD\" type=\"STRING\" size=\"256\"/><Column id=\"B_YUL\" type=\"STRING\" size=\"256\"/><Column id=\"JUK_GB\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OCUSTGB\" type=\"STRING\" size=\"256\"/><Column id=\"OCUSTCD\" type=\"STRING\" size=\"256\"/><Column id=\"OCODE\" type=\"STRING\" size=\"256\"/><Column id=\"OYY\" type=\"STRING\" size=\"256\"/><Column id=\"ROWTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ed_values16", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">적용안함</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">반품한도</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">반품정산</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ed_values21", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">적용</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">단가</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">출고율</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"DATA\">적용안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb_search00", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">〓  (같다)</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">&gt;   (크다)</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\"> &lt;  (작다)</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">&gt;=  (같거나크다)</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\"> &lt;= (같거나작다)</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">%% (나열)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb_search01", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">〓  (같다)</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">&gt;   (크다)</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\"> &lt;  (작다)</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">&gt;=  (같거나크다)</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\"> &lt;= (같거나작다)</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">%% (나열)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_code", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">20</Col><Col id=\"NAME\">개인</Col></Row><Row><Col id=\"CODE\">21</Col><Col id=\"NAME\">교판</Col></Row><Row><Col id=\"CODE\">22</Col><Col id=\"NAME\">속셈</Col></Row><Row><Col id=\"CODE\">23</Col><Col id=\"NAME\">학원</Col></Row><Row><Col id=\"CODE\">24</Col><Col id=\"NAME\">서점</Col></Row><Row><Col id=\"CODE\">25</Col><Col id=\"NAME\">유치</Col></Row><Row><Col id=\"CODE\">26</Col><Col id=\"NAME\">스쿨</Col></Row><Row><Col id=\"CODE\">27</Col><Col id=\"NAME\">외주</Col></Row><Row><Col id=\"CODE\">28</Col><Col id=\"NAME\">기타</Col></Row><Row><Col id=\"CODE\">29</Col><Col id=\"NAME\">NET</Col></Row><Row><Col id=\"CODE\">30</Col><Col id=\"NAME\">GGE</Col></Row><Row><Col id=\"CODE\">33</Col><Col id=\"NAME\">인터넷</Col></Row><Row><Col id=\"CODE\">36</Col><Col id=\"NAME\">논술</Col></Row><Row><Col id=\"CODE\">37</Col><Col id=\"NAME\">학력</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","56","11","400","69",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("총판별 출고율 관리");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","25","140","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("코드");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_09","36.82%","140","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("시행일자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","Static01_01:-2","140",null,"36","Static01_09:-2",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_code_search",null,"150","20","20","Static01_09:8",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values6",null,"145","Static01_02:28%","26","btn_code_search:2",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values5","Static01_01:10","145",null,"26","ed_values6:1",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@@@@@@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","25","72",null,"36","25",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("등록");
            obj.set_background("#3cbcb8");
            obj.set_color("white");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_05","61.13%","174","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("도서구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","25","287",null,"36","25",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("조회");
            obj.set_background("#3cbcb8");
            obj.set_color("white");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","25","321",null,null,"25","10",null,null,"170",null,this);
            obj.set_taborder("45");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_07","62.75%","355","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("정렬조건");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_06","25","321",null,"70","Static02_07:-2",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_03","62.75%","321","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("조건");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_09",null,"321","113","70","25",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_04","Static02_03:-2","321",null,"36","Static02_09:-2",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_08","Static02_07:-2","355",null,"36","Static02_09:-2",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_view","37","Static02_07:10",null,null,"42","22",null,null,"80",null,this);
            obj.set_taborder("34");
            obj.set_binddataset("ds_book");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\"/><Column size=\"50\"/><Column size=\"240\"/><Column size=\"76\"/><Column size=\"50\"/><Column size=\"64\"/><Column size=\"80\"/><Column size=\"240\"/><Column size=\"76\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"54\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"76\"/><Column size=\"54\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"거래처명\"/><Cell col=\"3\" text=\"도서코드\"/><Cell col=\"4\" text=\"년판\"/><Cell col=\"5\" text=\"대분류\"/><Cell col=\"6\" text=\"중분류\"/><Cell col=\"7\" text=\"도서명\"/><Cell col=\"8\" text=\"시행일자\"/><Cell col=\"9\" text=\"구분\"/><Cell col=\"10\" text=\"구분명\"/><Cell col=\"11\" text=\"출고율\"/><Cell col=\"12\" text=\"정가\"/><Cell col=\"13\" text=\"반품구분\"/><Cell col=\"14\" text=\"반품기한\"/><Cell col=\"15\" text=\"한도율\"/><Cell col=\"16\" text=\"적용구분\"/><Cell col=\"17\" text=\"OLD번호\"/></Band><Band id=\"body\"><Cell text=\"bind:CUST_GB\"/><Cell col=\"1\" text=\"bind:CUST_CD\"/><Cell col=\"2\" text=\"bind:CUST_NM\"/><Cell col=\"3\" text=\"bind:CODE\"/><Cell col=\"4\" text=\"bind:YY\"/><Cell col=\"5\" text=\"bind:BDBR_NM\"/><Cell col=\"6\" text=\"bind:BJBR_NM\"/><Cell col=\"7\" text=\"bind:BGRP_NM\"/><Cell col=\"8\" text=\"bind:SYMD\" displaytype=\"mask\" calendardateformat=\"yyyy-MM-dd\" maskedittype=\"string\" maskeditformat=\"####-##-##\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:BGBR_CD\"/><Cell col=\"10\" text=\"bind:BGBR_NM\"/><Cell col=\"11\" text=\"bind:CYUL\"/><Cell col=\"12\" text=\"bind:CCOST\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:B_YN\" expr=\"comp.parent.fn_expr(B_YN)\"/><Cell col=\"14\" text=\"bind:B_GYMD\" maskeditformat=\"####-##-##\" maskedittype=\"string\" displaytype=\"mask\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:B_YUL\"/><Cell col=\"16\" text=\"bind:JUK_GB\" expr=\"comp.parent.fn_expr2(JUK_GB)\"/><Cell col=\"17\" text=\"bind:OLD_CODE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"330","95","51","33",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("조회하기");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_search1","Static02_03:10","326",null,"26","Static02_09:10",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_innerdataset("ds_cmb_search");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text(">=  (같거나크다)");
            obj.set_value("3");
            obj.set_index("3");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_orderby","Static02_07:10","360",null,"26","Static02_09:10",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_innerdataset("ds_cmb_orderby");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("전표일자순");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_copy",null,"26","75","31","25",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("년판복사");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"26","75","31","btn_copy:12",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("출력");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_can",null,"26","75","31","btn_print:12",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("취소");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"26","75","31","btn_can:12",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("삭제");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"26","75","31","btn_del:12",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("저장");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_06","Static01_05:-2","174",null,"36","25",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values11","Static01_05:9","179",null,"26","354",null,"40","120",null,null,this);
            obj.set_taborder("10");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values12","ed_values11:1","179",null,"26","35",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_07","25","174","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("도서명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_08","Static01_07:-2","174",null,"36","Static01_05:-2",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values10","Static01_07:10","179",null,"26","Static01_05:10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_11","25","208","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("출고율");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_21","21.13%","208","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("단가");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_12","Static01_11:-2","208",null,"36","Static01_21:-2",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values13","Static01_11:10","213",null,"26","Static01_21:10",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_25","50.19%","208","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("비고");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_22","Static01_21:-2","208",null,"36","Static01_25:-2",null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values14","Static01_21:10","213",null,"26","Static01_25:10",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_26","Static01_25:-2","208",null,"36","25",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values19","Static01_25:10","213",null,"26","35",null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_27","25","242","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("반품구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_33","50.19%","242","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("적용구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_28","Static01_27:-2","242",null,"36","Static01_33:-2",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_34","Static01_33:-2","242",null,"36","25",null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values15","Static01_27:10","247",null,"26","1395",null,"26","60",null,null,this);
            obj.set_taborder("15");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("#");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Combo("ed_values16","ed_values15:1","247","Static01_28:32%","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_innerdataset("ds_ed_values16");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_text("적용안함");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_values17","ed_values16:1","247","Static01_28:33%","26",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_value("20220505");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values18","ed_values17:1","247",null,"26","Static01_33:10",null,"52",null,null,null,this);
            obj.set_taborder("18");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values20","Static01_33:10","247",null,"26","617",null,"26","60",null,null,this);
            obj.set_taborder("19");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("#");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Combo("ed_values21","ed_values20:1","247","Static01_34:36%","26",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_ed_values21");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values22","ed_values21:1","247",null,"26","35",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_27_00_00","20.38%","321","58","70",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_27_00_00_02","11.00%","321","58","70",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_27_00","Static01_27_00_00_02:-2","321",null,"70","Static01_27_00_00:-2",null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_s_values3","Static01_27_00_00_02:5","359",null,"26","Static01_27_00_00:5",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@@@@@@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","20.38%","321","58","36",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("년판");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_02","11.00%","321","58","36",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("거래처");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","Static03_00_00_02:-2","321",null,"36","Static03_00_00:-2",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("도서코드");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_27_00_00_01","42.38%","321","46","70",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_27_00_00_00","Static01_27_00_00:-2","321",null,"70","Static01_27_00_00_01:-2",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_s_values4","Static01_27_00:5","359",null,"26","Static01_27_00_00_00:5",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_01","42.38%","321","46","36",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("구분");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","Static03_00_00:-2","321",null,"36","Static03_00_00_01:-2",null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("도서명");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_s_values5","Static01_27_00_00:5","359",null,"26","Static01_27_00_00_01:5",null,null,null,null,null,this);
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_27_00_00_01_00","Static01_27_00_00_01:-2","321",null,"70","Static02_07:76",null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_s_values6","Static01_27_00_00_00:5","359",null,"26","Static01_27_00_00_01_00:5",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_opt","Static01_27_00_00_01_00:5","363",null,"20","Static02_07:2",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("미등록");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","25","106","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("거래처");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_0000","36.82%","106","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("총판명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_000","Static01_00:-2","106",null,"36","Static01_0000:-2",null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values1","Static01_00:10","111",null,"26","Static01_0000:346",null,"32","100",null,null,this);
            obj.set_taborder("0");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cust_search",null,"114","20","20","Static01_0000:8",null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_tabstop("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00000","Static01_0000:-2","106",null,"36","25",null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values4","Static01_0000:10","111",null,"26","35",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values3",null,"111","Static01_000:28%","26","btn_cust_search:2",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Combo("ed_values2","ed_values1:1","111",null,"26","ed_values3:1",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_code");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.getSetter("onchanged").set("ed_values2_onchanged");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_27_00_00_02_00","25","321",null,"70","Static01_27_00_00_02:-2",null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_s_values2","Static01_27_00_00_02_00:5","359",null,"26","Static01_27_00:5",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_02_00","25","321",null,"36","Static03_00_00_02:-2",null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("총판구분");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("ed_s_values1","35","359",null,"26","Static01_27_00_00_02:5",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_innerdataset("ds_code");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03","61.13%","140","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("분류명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_10","Static01_09:-2","140",null,"36","Static01_03:-2",null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04","Static01_03:-2","140",null,"36","25",null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values8","Static01_03:9","145",null,"26","354",null,"40","120",null,null,this);
            obj.set_taborder("7");
            obj.set_enable("false");
            obj.set_text("테스트");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values9","ed_values8:1","145",null,"26","35",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_values7","Static01_09:10","145",null,"26","Static01_03:10",null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_01_00","Static03_00_00_01:-2","321",null,"36","Static02_03:76",null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("시행일자");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_s_values7","Static01_27_00_00_01:5","359",null,"26","Static02_07:85",null,null,null,null,null,this);
            obj.set_taborder("28");
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
        this.addIncludeScript("SD6250F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD6250F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD6250F.xfdl", function() {
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
        var o_custgb     = "";
        var o_custcd     = "";
        var o_code       = "";
        var o_yy         = "";

        this.SD6250F_onload = function(obj,e)
        {
        	this.fnDataclear();
        	this.cmb_search1.set_index(3);
        	this.cmb_orderby.set_index(0);
        	this.ed_s_values1.set_index(0);
        	this.ed_s_values2.set_value("");
        	this.ed_s_values3.set_value("");
        	this.ed_s_values4.set_value("");
        	this.ed_s_values5.set_value("");
        	this.ed_s_values6.set_value("");
        	this.ed_values1.setFocus();
        };

        this.fnSearch_zipcode = function()
        {
        	var strUrl = "JSP/sd/select_bookcust.jsp";
        	var strDs  = "ds_book=ds_book";
        	var strArg;
        	var chk_opt ;

        	if (this.chk_opt.value==true)
        		chk_opt = "True";
        	else
        		chk_opt = "";

        	strArg = " Values1="+nexacro.wrapQuote(this.ed_s_values1.value)+
        			 " Values2="+nexacro.wrapQuote(nexacro.trim(this.ed_s_values2.value))+
        			 " Values3="+nexacro.wrapQuote(nexacro.trim(this.ed_s_values3.value))+
        			 " Values4="+nexacro.wrapQuote(nexacro.trim(this.ed_s_values4.value))+
        			 " Values5="+nexacro.wrapQuote(this.ed_s_values5.value)+
        			 " Values6="+nexacro.wrapQuote(nexacro.trim(this.ed_s_values6.value))+
        			 " Values7="+nexacro.wrapQuote(this.ed_s_values7.value)+
        			 " Values8="+nexacro.wrapQuote(chk_opt)+
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
            NewRowNum           = "";
            EditnRow	        = "";
            Error               = "";
            return_code         = "";
            return_code1        = "";
            return_code2        = "";
            return_code3        = "";
            return_code4        = "";
            return_code5        = "";
            IUSW                = "N";
            o_custgb            = "";
            o_custcd            = "";
            o_code              = "";
            o_yy                = "";
        	this.ed_values1.set_value("");
        	this.ed_values2.set_index(0);
        	this.ed_values3.set_value("");
        	this.ed_values4.set_value("");
        	this.ed_values5.set_value("");
        	this.ed_values6.set_value(f_date);
        	this.ed_values7.set_value("20000101");
        	this.ed_values8.set_value("");
        	this.ed_values9.set_value("");
        	this.ed_values10.set_value("");
        	this.ed_values11.set_value("");
        	this.ed_values12.set_value("");
        	this.ed_values13.set_value("0");
        	this.ed_values14.set_value("0");
        	this.ed_values15.set_value("0");
        	this.ed_values16.set_index(0);
        	this.ed_values17.set_value("99991231");
        	this.ed_values18.set_value("0");
        	this.ed_values19.set_value("");
        	this.ed_values20.set_value("0");
        	this.ed_values21.set_index(0);
        	this.ed_values22.set_value("");
        }

        //입력모드
        this.fnInputdata = function()
        {
        	this.ds_book.setColumn(NewRowNum,"CUST_GB", nexacro.trim(this.ed_values1.value));
        	this.ds_book.setColumn(NewRowNum,"CUST_CD", nexacro.trim(this.ed_values3.value));
        	this.ds_book.setColumn(NewRowNum,"CUST_NM", nexacro.trim(this.ed_values4.value));
        	this.ds_book.setColumn(NewRowNum,"CODE",    nexacro.trim(this.ed_values5.value));
        	this.ds_book.setColumn(NewRowNum,"YY",      nexacro.trim(this.ed_values6.value));
        	this.ds_book.setColumn(NewRowNum,"SYMD",    nexacro.trim(this.ed_values7.value));
        	this.ds_book.setColumn(NewRowNum,"BDBR_NM", nexacro.trim(this.ed_values8.value));
        	this.ds_book.setColumn(NewRowNum,"BJBR_NM", nexacro.trim(this.ed_values9.value));
        	this.ds_book.setColumn(NewRowNum,"BGRP_NM", nexacro.trim(this.ed_values10.value));
        	this.ds_book.setColumn(NewRowNum,"BGBR_CD", nexacro.trim(this.ed_values11.value));
        	this.ds_book.setColumn(NewRowNum,"BGBR_NM", nexacro.trim(this.ed_values12.value));
        	this.ds_book.setColumn(NewRowNum,"CYUL",	nexacro.trim(this.ed_values13.value));
        	this.ds_book.setColumn(NewRowNum,"CCOST",   nexacro.trim(this.ed_values14.value));
        	this.ds_book.setColumn(NewRowNum,"B_YN",    nexacro.trim(this.ed_values15.value));
        	this.ds_book.setColumn(NewRowNum,"B_GYMD",  nexacro.trim(this.ed_values17.value));
        	this.ds_book.setColumn(NewRowNum,"B_YUL",   nexacro.trim(this.ed_values18.value));
        	this.ds_book.setColumn(NewRowNum,"BIGO",	nexacro.trim(this.ed_values19.value));
        	this.ds_book.setColumn(NewRowNum,"JUK_GB",  nexacro.trim(this.ed_values20.value));
        	this.ds_book.setColumn(NewRowNum,"OLD_CODE",nexacro.trim(this.ed_values22.value));

        	if (this.ed_values15.value == "")
        		this.ds_book.setColumn(NewRowNum,"B_YN","0");
        	if (this.ed_values17.value == "")
        		this.ds_book.setColumn(NewRowNum,"B_GYMD","99999999");
        	if (this.ed_values20.value == "")
        		this.ds_book.setColumn(NewRowNum,"JUK_GB","0");
        	this.ds_bookcust_send.addRow();
        	this.ds_bookcust_send.copyRow(0, this.ds_book, NewRowNum);
        	this.ds_bookcust_send.setColumn(0,"OCUSTGB", o_custgb);
        	this.ds_bookcust_send.setColumn(0,"OCUSTCD", o_custcd);
        	this.ds_bookcust_send.setColumn(0,"OCODE", o_code);
        	this.ds_bookcust_send.setColumn(0,"OYY", o_yy);
        	this.ds_bookcust_send.setColumn(0,"ROWTYPE", "I" );
        }

        //수정모드
        this.fnEdit_data = function()
        {
            this.ds_book.setColumn(EditnRow,"CUST_GB", nexacro.trim(this.ed_values1.value));
            this.ds_book.setColumn(EditnRow,"CUST_CD", nexacro.trim(this.ed_values3.value));
            this.ds_book.setColumn(EditnRow,"CUST_NM", nexacro.trim(this.ed_values4.text));
            this.ds_book.setColumn(EditnRow,"CODE",    nexacro.trim(this.ed_values5.value));
            this.ds_book.setColumn(EditnRow,"YY",      nexacro.trim(this.ed_values6.value));
            this.ds_book.setColumn(EditnRow,"SYMD",    nexacro.trim(this.ed_values7.value));
            this.ds_book.setColumn(EditnRow,"BDBR_NM", nexacro.trim(this.ed_values8.text));
            this.ds_book.setColumn(EditnRow,"BJBR_NM", nexacro.trim(this.ed_values9.text));
            this.ds_book.setColumn(EditnRow,"BGRP_NM", nexacro.trim(this.ed_values10.text));
            this.ds_book.setColumn(EditnRow,"BGBR_CD", nexacro.trim(this.ed_values11.text));
            this.ds_book.setColumn(EditnRow,"BGBR_NM", nexacro.trim(this.ed_values12.text));
            this.ds_book.setColumn(EditnRow,"CYUL",	   nexacro.trim(this.ed_values13.value));
            this.ds_book.setColumn(EditnRow,"CCOST",   nexacro.trim(this.ed_values14.value));
            this.ds_book.setColumn(EditnRow,"B_YN",    nexacro.trim(this.ed_values15.value));
            this.ds_book.setColumn(EditnRow,"B_GYMD",  nexacro.trim(this.ed_values17.value));
            this.ds_book.setColumn(EditnRow,"B_YUL",   nexacro.trim(this.ed_values18.value));
            this.ds_book.setColumn(EditnRow,"BIGO",	   nexacro.trim(this.ed_values19.text));
            this.ds_book.setColumn(EditnRow,"JUK_GB",  nexacro.trim(this.ed_values20.value));
            this.ds_book.setColumn(EditnRow,"OLD_CODE",nexacro.trim(this.ed_values22.text));

            if (this.ed_values15.value == "")
                this.ds_book.setColumn(EditnRow,"B_YN","0");
            if (this.ed_values17.value == "")
                this.ds_book.setColumn(EditnRow,"B_GYMD","99999999");
            if (this.ed_values20.value == "")
                this.ds_book.setColumn(EditnRow,"JUK_GB","0");
            this.ds_bookcust_send.addRow();
            this.ds_bookcust_send.copyRow(0, this.ds_book, EditnRow);
            this.ds_bookcust_send.setColumn(0,"OCUSTGB", o_custgb);
            this.ds_bookcust_send.setColumn(0,"OCUSTCD", o_custcd);
            this.ds_bookcust_send.setColumn(0,"OCODE", o_code);
            this.ds_bookcust_send.setColumn(0,"OYY", o_yy);
            if ( (nexacro.trim(o_code)).length != 0 )
            {
                this.ds_bookcust_send.setColumn(0,"ROWTYPE", "U" );
            }
            else
            {
                this.ds_bookcust_send.setColumn(0,"ROWTYPE", "I" );
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
        	EditnRow = e.row;
        	IUSW               = "N";
        	this.ed_values1.set_value(this.ds_book.getColumn(e.row,"CUST_GB"));
        	this.ed_values2.set_value(this.ds_book.getColumn(e.row,"CUST_GB"));
        	this.ed_values3.set_value(this.ds_book.getColumn(e.row,"CUST_CD"));
        	this.ed_values4.set_value(this.ds_book.getColumn(e.row,"CUST_NM"));
        	this.ed_values5.set_value(this.ds_book.getColumn(e.row,"CODE"));
        	this.ed_values6.set_value(this.ds_book.getColumn(e.row,"YY"));
        	if ( (nexacro.trim(this.ds_book.getColumn(e.row,"CODE"))).length != 0 )
        	{
        		IUSW              = "Y";
        		o_custgb          = this.ds_book.getColumn(e.row,"CUST_GB");
        		o_custcd          = this.ds_book.getColumn(e.row,"CUST_CD");
        		o_code            = this.ds_book.getColumn(e.row,"CODE");
        		o_yy              = this.ds_book.getColumn(e.row,"YY");
        	}
        	this.ed_values7.set_value(this.ds_book.getColumn(e.row,"SYMD"));
        	this.ed_values8.set_value(this.ds_book.getColumn(e.row,"BDBR_NM"));
        	this.ed_values9.set_value(this.ds_book.getColumn(e.row,"BJBR_NM"));
        	this.ed_values10.set_value(this.ds_book.getColumn(e.row,"BGRP_NM"));
        	this.ed_values11.set_value(this.ds_book.getColumn(e.row,"BGBR_CD"));
        	this.ed_values12.set_value(this.ds_book.getColumn(e.row,"BGBR_NM"));
        	this.ed_values13.set_value(this.ds_book.getColumn(e.row,"CYUL"));
        	this.ed_values14.set_value(this.ds_book.getColumn(e.row,"CCOST"));
        	this.ed_values15.set_value(this.ds_book.getColumn(e.row,"B_YN"));
        	this.ed_values16.set_value(this.ds_book.getColumn(e.row,"B_YN"));
        	this.ed_values17.set_value(this.ds_book.getColumn(e.row,"B_GYMD"));
        	this.ed_values18.set_value(this.ds_book.getColumn(e.row,"B_YUL"));
        	this.ed_values19.set_value(this.ds_book.getColumn(e.row,"BIGO"));
        	this.ed_values20.set_value(this.ds_book.getColumn(e.row,"JUK_GB"));
        	this.ed_values21.set_value(this.ds_book.getColumn(e.row,"JUK_GB"));
        	this.ed_values22.set_value(this.ds_book.getColumn(e.row,"OLD_CODE"));
        };

        this.btn_save_onclick = function(obj,e)
        {
        	var strUrl = "JSP/sd/insert_bookcust.jsp";
        	var strArg  = "user_id=test";
        	var inDs 	= "ds_bookcust_send=ds_bookcust_send";
        	if ((nexacro.trim(this.ed_values1.value)).length != 2)
        	{
        		alert("거래처구분코드 오류! 수정하세요!");
        		return;
        	}
        	if ((nexacro.trim(this.ed_values3.value)).length != 4)
        	{
        		alert("거래처 오류! 수정하세요!");
        		return;
        	}
        	if ((nexacro.trim(this.ed_values5.value)).length != 10)
        	{
        		alert("도서코드 오류! 수정하세요!");
        		return;
        	}
        	if ((nexacro.trim(this.ed_values6.value)).length != 4)
        	{
        		alert("년판 오류! 수정하세요!");
        		return;
        	}

        	if (((nexacro.trim(this.ed_values13.value)).length == 0) || ((nexacro.trim(this.ed_values14.value)).length == 0) ||((nexacro.trim(this.ed_values18.value)).length == 0))
        	{
        		alert("출고율 오류! 수정하세요!");
        		return;
        	}

        	if (IUSW == "Y")
        		this.fnEdit_data();
        	else
        	{
        		NewRowNum = this.ds_book.addRow();
        		this.fnInputdata();
        	}
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
        			this.ds_bookcust_send.deleteRow(0);
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
        	else if ( strSvcID == "codesearch" )
        	{
        		if(nErrorCode == 0 && strErrorMag.length == 0)
        			alert ("미등록 데이터");
        		else
        		{
        			return_code = strErrorMag;
        		    this.ed_values4.set_value(return_code);
                	this.ed_values5.setFocus();
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
        	var strUrl = "JSP/sd/insert_bookcust.jsp";
        	var strArg  = "user_id=test";
        	var inDs 	= "ds_bookcust_send=ds_bookcust_send";
        	var objApp = nexacro.getApplication();
        	if(msg_result = objApp.confirm( "삭제된 데이터는 복원하실수 없습니다.\n 정말 삭제하시겠습니까? " , "삭제처리", "warning" ))
        	{
        		this.ds_book.setColumn(EditnRow,"CUST_GB",  nexacro.trim(this.ed_values1.value));
        		this.ds_book.setColumn(EditnRow,"CUST_CD",  nexacro.trim(this.ed_values3.value));
        		this.ds_book.setColumn(EditnRow,"CUST_NM",  nexacro.trim(this.ed_values4.value));
        		this.ds_book.setColumn(EditnRow,"CODE", 	nexacro.trim(this.ed_values5.value));
        		this.ds_book.setColumn(EditnRow,"YY",       nexacro.trim(this.ed_values6.value));
        		this.ds_book.setColumn(EditnRow,"SYMD",     nexacro.trim(this.ed_values7.value));
        		this.ds_book.setColumn(EditnRow,"BDBR_NM",  nexacro.trim(this.ed_values8.value));
        		this.ds_book.setColumn(EditnRow,"BJBR_NM",  nexacro.trim(this.ed_values9.value));
        		this.ds_book.setColumn(EditnRow,"BGRP_NM",  nexacro.trim(this.ed_values10.value));
        		this.ds_book.setColumn(EditnRow,"BGBR_CD",  nexacro.trim(this.ed_values11.value));
        		this.ds_book.setColumn(EditnRow,"BGBR_NM",  nexacro.trim(this.ed_values12.value));
        		this.ds_book.setColumn(EditnRow,"CYUL",	    nexacro.trim(this.ed_values13.value));
        		this.ds_book.setColumn(EditnRow,"CCOST",	nexacro.trim(this.ed_values14.value));
        		this.ds_book.setColumn(EditnRow,"B_YN", 	nexacro.trim(this.ed_values15.value));
        		this.ds_book.setColumn(EditnRow,"B_GYMD",   nexacro.trim(this.ed_values17.value));
        		this.ds_book.setColumn(EditnRow,"B_YUL",    nexacro.trim(this.ed_values18.value));
        		this.ds_book.setColumn(EditnRow,"BIGO",	    nexacro.trim(this.ed_values19.value));
        		this.ds_book.setColumn(EditnRow,"JUK_GB",   nexacro.trim(this.ed_values20.value));
        		this.ds_book.setColumn(EditnRow,"OLD_CODE", nexacro.trim(this.ed_values22.value));
        		if (this.ed_values15.value == "")
        			this.ds_book.setColumn(EditnRow,"B_YN","0");
        		if (this.ed_values17.value == "")
        			this.ds_book.setColumn(EditnRow,"B_GYMD","99999999");
        		if (this.ed_values20.value == "")
        			this.ds_book.setColumn(EditnRow,"JUK_GB","0");
        		this.ds_bookcust_send.addRow();
        		this.ds_bookcust_send.copyRow(0, this.ds_book, EditnRow);
        		this.ds_bookcust_send.setColumn(0,"OCUSTGB", o_custgb);
        		this.ds_bookcust_send.setColumn(0,"OCUSTCD", o_custcd);
        		this.ds_bookcust_send.setColumn(0,"OCODE", o_code);
        		this.ds_bookcust_send.setColumn(0,"OYY", o_yy);
        		this.ds_bookcust_send.setColumn(0,"ROWTYPE", "D" );
        		this.gfn_TransactionP("delete", strUrl, inDs, "", strArg, "fnTr_Callback", false, "P", false, this);
        		this.ds_book.deleteRow(EditnRow);
        		this.ds_bookcust_send.deleteRow(0);
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

        this.btn_print_onclick = function(obj,e)
        {
        	var strArg;
        	var sOpenStyle = "topmost=true autosize=true dragmovetype=all titletext=조회화면 showtitlebar=true showstatusbar=false resizable=true";
        	nexacro.open("print", "sd::SD6250P.xfdl", this.getOwnerFrame(), "", sOpenStyle, this.width/2-300, this.height/2-120);
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

        this.fnSearch_name = function(gubn, code)
        {
        	var strUrl = "JSP/sd/cust_help.jsp";
        	var strArg;
        	if ((nexacro.trim(this.ed_values1.value)).length != 2)
        		return;
        	if ((nexacro.trim(this.ed_values3.value)).length != 4)
        		return;
        	strArg = " Option1="+nexacro.wrapQuote(gubn)+
        	         " Option2="+nexacro.wrapQuote(code);
        	this.gfn_TransactionP("codesearch", strUrl, "", "", strArg, "fnTr_Callback", false, "P", false, this);
        }

        this.common_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13)
        	{
        		if (obj.name == "ed_values1")
        			this.ed_values2.setFocus();
        		else if (obj.name == "ed_values2")
        			this.ed_values3.setFocus();
        		else if (obj.name == "ed_values3")
        		{
        			this.fnSearch_name(this.ed_values1.value, this.ed_values3.value);
        		}
        		else if (obj.name == "ed_values5") this.ed_values6.setFocus();
        		else if (obj.name == "ed_values6") this.ed_values7.setFocus();
        		else if (obj.name == "ed_values7") this.ed_values13.setFocus();
        		else if (obj.name == "ed_values13") this.ed_values14.setFocus();
        		else if (obj.name == "ed_values14") this.ed_values15.setFocus();
        		else if (obj.name == "ed_values15") this.ed_values16.setFocus();
        		else if (obj.name == "ed_values16") this.ed_values17.setFocus();
        		else if (obj.name == "ed_values17") this.ed_values18.setFocus();
        		else if (obj.name == "ed_values18") this.ed_values19.setFocus();
        		else if (obj.name == "ed_values19") this.ed_values20.setFocus();
        		else if (obj.name == "ed_values20") this.ed_values21.setFocus();
        		else if (obj.name == "ed_values21") this.ed_values22.setFocus();
        	}//ESC 키처리
        	else if (e.keycode == 27)
        	{
        		if (obj.name == "ed_values2") this.ed_values1.setFocus();
        		else if (obj.name == "ed_values3") this.ed_values2.setFocus();
        		else if (obj.name == "ed_values5") this.ed_values3.setFocus();
        		else if (obj.name == "ed_values6") this.ed_values5.setFocus();
        		else if (obj.name == "ed_values7") this.ed_values6.setFocus();
        		else if (obj.name == "ed_values13") this.ed_values7.setFocus();
        		else if (obj.name == "ed_values14") this.ed_values13.setFocus();
        		else if (obj.name == "ed_values15") this.ed_values14.setFocus();
        		else if (obj.name == "ed_values16") this.ed_values15.setFocus();
        		else if (obj.name == "ed_values17") this.ed_values16.setFocus();
        		else if (obj.name == "ed_values18") this.ed_values17.setFocus();
        		else if (obj.name == "ed_values19") this.ed_values18.setFocus();
        		else if (obj.name == "ed_values20") this.ed_values19.setFocus();
        		else if (obj.name == "ed_values21") this.ed_values20.setFocus();
        		else if (obj.name == "ed_values22") this.ed_values21.setFocus();
        	}
        };

        this.common_onkillfocus = function(obj,e)
        {
        	var strUrl = "JSP/sd/book_help1.jsp";
        	var strArg;
        	if ((nexacro.trim(this.ed_values5.value)).length != 10)
        		return;
        	if ((nexacro.trim(this.ed_values6.value)).length != 4)
        		return;
        	strArg = " Values1="+nexacro.wrapQuote(this.ed_values5.value)+
        			 " Values2="+nexacro.wrapQuote(this.ed_values6.value);
        	this.gfn_TransactionP("codesearch", strUrl, "", "", strArg, "fnTr_Callback_6250", false, "P", false, this);

        	if ((nexacro.trim(this.ed_values1.value)).length != 2)
        		return;
        	if ((nexacro.trim(this.ed_values3.value)).length != 4)
        		return;

        	strUrl = "JSP/sd/bookcust_help.jsp";
        	strArg = " Values1="+nexacro.wrapQuote(this.ed_values1.value)+
        			 " Values2="+nexacro.wrapQuote(this.ed_values3.value)+
        			 " Values3="+nexacro.wrapQuote(this.ed_values5.value)+
        			 " Values4="+nexacro.wrapQuote(this.ed_values6.value);
        	this.gfn_TransactionP("Double_chk", strUrl, "", "", strArg, "fnDouble_Callback", false, "P", false, this);

        };

        this.fnTr_Callback_6250 = function(strSvcID, nErrorCode, strErrorMag)
        {
        	this.setWaitCursor(false);
        	// 서비스 정상 처리
        	if(nErrorCode != 0)
        		return;
        	else
        	{
        		var ret = strErrorMag.split('^');
        		return_code1 = ret[0];
        		return_code2 = ret[1];
        		return_code3 = ret[2];
        		return_code4 = ret[3];
        		return_code5 = ret[4];
        	}
        	if ( strSvcID == "codesearch" )
        	{
        		this.ed_values8.set_value(return_code1);
        		this.ed_values9.set_value(return_code2);
        		this.ed_values10.set_value(return_code3);
        		this.ed_values11.set_value(return_code4);
        		this.ed_values12.set_value(return_code5);
        	}
        }

        this.fnDouble_Callback = function(strSvcID, nErrorCode, strErrorMag)
        {
        	this.setWaitCursor(false);
        	// 서비스 정상 처리
        	if(nErrorCode != 0)
        		return;
        	else
        		return_code = strErrorMag;

            if ( strSvcID == "Double_chk" )
        	{
        		if(return_code.length != 0) // 수정
        		{
        	    	alert ("자료중복 데이터");
        	    	this.ed_values6.set_value("");
        			this.ed_values6.setFocus();
        	    }
        	}
        }

        this.btn_cust_search_onclick = function(obj,e)
        {
        	this.lfn_showModal("cust_search", "", "sd::frmCustList.xfdl", "fnCustCallback", this, 0, 0, 590, 550);
        };

        this.btn_code_search_onclick = function(obj,e)
        {
        	this.lfn_showModal("code_search", {setting:this.ed_values5.value}, "sd::frmBookcode.xfdl", "fnCodeCallback", this, 0, 0, 500, 585);
        };

        this.btn_copy_onclick = function(obj,e)
        {
        	this.lfn_showModal("copy", "", "sd::SD6251P.xfdl", "fnCopyCallback", this, 0, 0, 690, 160);
        };

        this.fnCustCallback = function(strID, ret)
        {
        	if(ret != null)
        	{
        		var gubun = ret.substr(0,2);
        		var code =  ret.substr(3,4);
        		if(nexacro.trim(ret) != "0")
        		{
        			this.ed_values1.set_value(gubun);
        			this.ed_values3.set_value(code);
        		}
        	}
        };

        this.fnCodeCallback = function(sFormId, sArg)
        {
        	if(nexacro.trim(sArg) != "0")
        	{
        		this.ed_values5.set_value(sArg.substr(0,10));
        		this.ed_values6.set_value(sArg.substr(10,4));
        		this.ed_values10.set_value(sArg.substr(14,sArg.length));
        		this.common_onkillfocus();
        		this.ed_values7.setFocus();
        	}
        };

        this.ed_values1_onchanged = function(obj,e)
        {
        	this.ed_values2.set_value(e.posttext);
        };

        this.ed_values2_onitemchanged = function(obj,e)
        {
        	this.ed_values1.set_value(e.postvalue);
        };

        this.ed_values24_onkillfocus = function(obj,e)
        {
        	if (obj.value == "") return;
        	else if (obj.value == "0") this.ed_values16.set_index(0);
        	else if (obj.value == "1") this.ed_values16.set_index(1);
        	else if (obj.value == "2") this.ed_values16.set_index(2);
        };

        this.ed_values16_onitemchanged = function(obj,e)
        {
        	if (obj.text == "") return;
        	else if (obj.index == 0) this.ed_values15.set_value("0");
        	else if (obj.index == 1) this.ed_values15.set_value("1");
        	else if (obj.index == 2) this.ed_values15.set_value("2");
        };

        this.ed_values20_onkillfocus = function(obj,e)
        {
        	if (obj.value == "") return;
        	else if (obj.value == "0") this.ed_values21.set_index(0);
        	else if (obj.value == "1") this.ed_values21.set_index(1);
        	else if (obj.value == "2") this.ed_values21.set_index(2);
        	else if (obj.value == "3") this.ed_values21.set_index(3);
        };

        this.ed_values21_onitemchanged = function(obj,e)
        {
        	if (obj.text == "") return;
        	else if (obj.index == 0) this.ed_values20.set_value("0");
        	else if (obj.index == 1) this.ed_values20.set_value("1");
        	else if (obj.index == 2) this.ed_values20.set_value("2");
        	else if (obj.index == 3) this.ed_values20.set_value("3");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD6250F_onload,this);
            this.btn_code_search.addEventHandler("onclick",this.btn_code_search_onclick,this);
            this.ed_values6.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values6.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.ed_values5.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values5.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.Static02_08.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_view.addEventHandler("oncelldblclick",this.grd_view_oncelldblclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_copy.addEventHandler("onclick",this.btn_copy_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
            this.btn_can.addEventHandler("onclick",this.btn_can_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_save.addEventHandler("onkeydown",this.btn_save_onkeydown,this);
            this.ed_values12.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values10.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values13.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values14.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values19.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values15.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values15.addEventHandler("onkillfocus",this.ed_values24_onkillfocus,this);
            this.ed_values16.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values16.addEventHandler("onitemchanged",this.ed_values16_onitemchanged,this);
            this.ed_values17.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values18.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values20.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values20.addEventHandler("onkillfocus",this.ed_values20_onkillfocus,this);
            this.ed_values21.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values21.addEventHandler("onitemchanged",this.ed_values21_onitemchanged,this);
            this.ed_values22.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values1.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values1.addEventHandler("onchanged",this.ed_values1_onchanged,this);
            this.btn_cust_search.addEventHandler("onclick",this.btn_cust_search_onclick,this);
            this.ed_values3.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values2.addEventHandler("onitemchanged",this.ed_values2_onitemchanged,this);
            this.ed_values8.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values9.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values7.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_s_values7.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ds_book.addEventHandler("onload",this.ds_book_onload,this);
        };
        this.loadIncludeScript("SD6250F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
