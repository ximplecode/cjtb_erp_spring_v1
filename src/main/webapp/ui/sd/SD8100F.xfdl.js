(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD8100F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1620,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_custipkum", this);
            obj._setContents("<ColumnInfo><Column id=\"S_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"IPIN\" type=\"STRING\" size=\"256\"/><Column id=\"INSA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUKYO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"UP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"JUKYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"U_SUGM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"U_MDATE\" type=\"STRING\" size=\"256\"/><Column id=\"U_BAL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"U_BAL_SAUP\" type=\"STRING\" size=\"256\"/><Column id=\"U_BAL_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"U_BAE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"U_JBANK\" type=\"STRING\" size=\"256\"/><Column id=\"ACC_GB\" type=\"STRING\" size=\"256\"/><Column id=\"SWCD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPYMD\" type=\"STRING\" size=\"256\"/><Column id=\"ACC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ACC_BUNHO\" type=\"STRING\" size=\"256\"/><Column id=\"ACC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"O_DPNM\" type=\"STRING\" size=\"256\"/><Column id=\"O_SAUP\" type=\"STRING\" size=\"256\"/><Column id=\"O_JUMIN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_custipkum_send", this);
            obj._setContents("<ColumnInfo><Column id=\"S_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"IPIN\" type=\"STRING\" size=\"256\"/><Column id=\"INSA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUKYO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"UP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"JUKYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"U_SUGM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"U_MDATE\" type=\"STRING\" size=\"256\"/><Column id=\"U_BAL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"U_BAL_SAUP\" type=\"STRING\" size=\"256\"/><Column id=\"U_BAL_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"U_BAE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"U_JBANK\" type=\"STRING\" size=\"256\"/><Column id=\"ACC_GB\" type=\"STRING\" size=\"256\"/><Column id=\"SWCD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPYMD\" type=\"STRING\" size=\"256\"/><Column id=\"ACC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ACC_BUNHO\" type=\"STRING\" size=\"256\"/><Column id=\"ACC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"O_DPNM\" type=\"STRING\" size=\"256\"/><Column id=\"O_SAUP\" type=\"STRING\" size=\"256\"/><Column id=\"O_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"ROWTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"O_SDATE\" type=\"STRING\" size=\"256\"/><Column id=\"O_IPIN\" type=\"STRING\" size=\"256\"/><Column id=\"O_JUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cust", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SAUP\" type=\"STRING\" size=\"256\"/><Column id=\"JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"DPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_insa", this);
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_juk", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_n8100", this);
            obj._setContents("<ColumnInfo><Column id=\"JUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_d8100", this);
            obj._setContents("<ColumnInfo><Column id=\"JUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb_upgb", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">약속</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">당좌</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">가계</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">약속:2</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">전자</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"NAME\">약속:3</Col></Row><Row><Col id=\"CODE\">7</Col><Col id=\"NAME\">자가</Col></Row><Row><Col id=\"CODE\">8</Col><Col id=\"NAME\">백지</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb_search1", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">〓  (같다)</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">&gt;   (크다)</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\"> &lt;  (작다)</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">&gt;=  (같거나크다)</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\"> &lt;= (같거나작다)</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">%% (나열)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb_orderby", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">전표일자순</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">입금자순</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">거래처순</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","92","81","107","40",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("입금일자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","Static01:-2","81","185","40",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","30","81","64","192",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("입력");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","92","157","107","40",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("어음번호");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00_00_00","Static03_00:-2","157","759","40",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_view","25","370","1534","365",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_binddataset("ds_custipkum");
            obj.set_border("2px solid #10aea9");
            obj.set_font("11px/normal \"Gulim\"");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"40\"/><Column size=\"140\"/><Column size=\"36\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"30\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"40\"/><Column size=\"36\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"입금일자\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" text=\"입금인\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"입금자명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" text=\"NO\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" text=\"구분\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" text=\"코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" text=\"업체명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" text=\"적요\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" text=\"적요명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"9\" text=\"비고\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"10\" text=\"어음\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"11\" text=\"어음번호\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"12\" text=\"입금액\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"13\" text=\"만기일\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"14\" text=\"발행인\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"15\" text=\"발행인(사업)\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"16\" text=\"발행인(주민)\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"17\" text=\"배서인\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"18\" text=\"지급은행\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"19\" text=\"전표\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"20\" text=\"반영일자\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"21\" text=\"번호\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"22\" text=\"순번\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:S_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"1\" text=\"bind:IPIN\"/><Cell col=\"2\" text=\"bind:INSA_NM\"/><Cell col=\"3\" text=\"bind:JUN\"/><Cell col=\"4\" text=\"bind:CUST_GB\"/><Cell col=\"5\" text=\"bind:CUST_CD\"/><Cell col=\"6\" text=\"bind:CUST_NM\"/><Cell col=\"7\" text=\"bind:JUKYO_CD\"/><Cell col=\"8\" text=\"bind:JUK_NM\"/><Cell col=\"9\" text=\"bind:JUKYO_NM\"/><Cell col=\"10\" text=\"bind:UP_GB\"/><Cell col=\"11\" text=\"bind:UP_NO\"/><Cell col=\"12\" text=\"bind:U_SUGM\"/><Cell col=\"13\" text=\"bind:U_MDATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"14\" text=\"bind:U_BAL_NAME\"/><Cell col=\"15\" text=\"bind:U_BAL_SAUP\"/><Cell col=\"16\" text=\"bind:U_BAL_JUMIN\"/><Cell col=\"17\" text=\"bind:U_BAE_NAME\"/><Cell col=\"18\" text=\"bind:U_JBANK\"/><Cell col=\"19\" text=\"bind:ACC_GB\"/><Cell col=\"20\" text=\"bind:ACC_DATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"21\" text=\"bind:ACC_BUNHO\"/><Cell col=\"22\" text=\"bind:ACC_SEQ\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","92","119","107","40",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("적요");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01","Static03:-2","119","759","40",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","380","81","107","40",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("입금자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","Static02:-2","81","471","40",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_sdate","Static01:5","86","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ip_search1","588","92","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            obj.set_tabstop("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_jun","707","86","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("###");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","3.46%","1.45%","40.49%","9.08%",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("어음, 수표등록");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_ipin","491","86","92","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_ipinnm","614","86","92","30",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","954","81","107","40",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("업체");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","1059","81","500","40",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","92","195","107","40",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("발행인");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","197","195","185","40",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","380","195","107","40",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("사업자\r\n( - 제외 )");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_01","485","195","185","40",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_01","668","195","107","40",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("주민번호\r\n( - 제외 )");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_02","773","195","183","40",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00_00_00_00","197","233","759","40",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01","92","233","107","40",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("지급은행");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","954","119","107","40",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("적요명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00_00","1059","119","500","40",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01","954","157","107","40",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("만기일자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00_01","1059","157","500","40",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_02","954","195","107","40",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("배서인");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00_02","1059","195","500","40",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_03","954","233","107","40",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("입금액");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00_03","1059","233","330","40",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_03_00","1386","233","107","40",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("전표반영");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00_03_00","1491","233","68","40",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_02","92","281","107","40",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("입금일자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_00","92","319","107","40",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("업체");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_03","197","281","185","40",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_00","380","281","107","40",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("입금자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_01_00","485","281","185","40",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_01_00","668","281","107","40",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("어음번호");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_02_00","773","281","183","40",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_01_00_00","954","281","107","40",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("조건");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_01_00_00_00","954","319","107","40",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("정렬조건");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_02_00_00","1059","281","193","40",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_02_00_00_00","1059","319","193","40",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_01_00_00","197","319","759","40",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","30","281","64","78",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("리스트\r\n검색");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","1268","281","110","78",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text(" 조회하기");
            this.addChild(obj.name, obj);

            obj = new Edit("s_ipin","492","286","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ip_search2","569","292","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("s_ipinnm","591","286","73","30",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("s_sdate","204","286","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_jukyocd","204","124","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("###");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_juk_search","258","130","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_jukyonm","281","124","426","30",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_upgb","204","162","37","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_upgb","242","162","142","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_cmb_upgb");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("약속");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_upno","385","162","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("########");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_bal_name","204","200","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_bal_saup","492","200","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_bal_jumin","779","200","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_jbank","204","238","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_custgb","1066","86","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_custcd","1118","86","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cust_search1","1191","92","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_custname","1213","86","339","30",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_juk_nm","1066","124","339","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_mdate","1066","162","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_bae_name","1066","200","269","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_sugm","1066","238","269","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("s_upno","779","286","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("########");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("s_custgb","204","324","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("s_custcd","256","324","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cust_search2","329","330","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("s_custname","351","324","313","30",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_search1","1074","286","162","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_innerdataset("ds_cmb_search1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text(">=  (같거나크다)");
            obj.set_value("3");
            obj.set_index("3");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_orderby","1074","324","162","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_cmb_orderby");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("전표일자순");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_accgb","1500","238","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"36","75","31","62",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("출력");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"36","75","31","236",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("삭제");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"36","75","31","324",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("저장");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_can",null,"36","75","31","149",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("취소");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_n1","671","46","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_n2","751","46","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_n3","831","46","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1620,760,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD8100F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD8100F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD8100F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        //테스트
        gv_sabun = 'C21158';
        var gv_name = nexacro.getApplication().gds_userinfo.getColumn(0,"NAME");
        gv_name = '백승훈';
        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;

        var arr_rt;

        var EditnRow	 = "";					//수정된 행번호
        var Error        = "";					//에러코드.
        var return_code  = "";
        var return_code2 = "";
        var o_sdate      = "";
        var o_ipin       = "";
        var o_jun        = "";
        var j_custgb     = "";
        var j_custcd     = "";
        var j_juk        = "";
        var j_juknm      = "";
        var j_umno       = "";
        var j_manymd     = "";
        var j_balnm      = "";
        var j_bsaupno    = "";
        var j_bjumin     = "";
        var j_baenm      = "";
        var j_jbank      = "";
        var h_custgb     = "";
        var h_custcd     = "";
        var h_juk        = "";
        var h_juknm      = "";
        var h_umno       = "";
        var h_manymd     = "";
        var h_balnm      = "";
        var h_bsaupno    = "";
        var h_bjumin     = "";
        var h_baenm      = "";
        var h_jbank      = "";
        var F_chk        = "";
        var U_IUSW       = "N";
        var O_UPNO       = "";
        var O_BALNM      = "";

        this.SD8100F_onload = function(obj,e)
        {
        	arr_rt = new Array();
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMdd");
        	this.ed_sdate.set_value(f_date);
        	this.ed_ipin.set_value(gv_sabun.substr(0,6));
        	this.ed_ipinnm.set_value(gv_name);
        	this.ed_jun.set_value("");
        	this.ed_custgb.set_value("");
        	this.ed_custcd.set_value("");
        	this.ed_jukyocd.set_value("");
        	this.ed_jukyonm.set_value("");
        	this.ed_juk_nm.set_value("");
        	this.ed_upgb.set_value("1");
        	this.ed_upno.set_value("");
        	this.cmb_upgb.set_index(0);
        	this.ed_mdate.set_value("");
        	this.ed_bal_name.set_value("");
        	this.ed_bal_saup.set_value("");
        	this.ed_bal_jumin.set_value("");
        	this.ed_bae_name.set_value("");
        	this.ed_jbank.set_value("");
        	this.ed_sugm.set_value(0);
        	this.ed_accgb.set_value("N");
        	this.ed_n1.set_value("");
        	this.ed_n2.set_value("");
        	this.ed_n3.set_value("");
            o_sdate          = "";
            o_ipin           = "";
            o_jun            = "";
            O_UPNO 	         = "";
            O_BALNM	         = "";
            F_chk            = "N";
            U_IUSW           = "N";
        	j_custgb                   = "";
            j_custcd                   = "";
            j_juk                      = "";
            j_juknm                    = "";
            j_manymd                   = "";
            j_balnm                    = "";
            j_bsaupno                  = "";
            j_bjumin                   = "";
            j_baenm                    = "";
            j_jbank                    = "";
            j_umno                     = "";
            h_custgb                   = "";
            h_custcd                   = "";
            h_juk                      = "";
            h_juknm                    = "";
            h_manymd                   = "";
            h_balnm                    = "";
            h_bsaupno                  = "";
            h_bjumin                   = "";
            h_baenm                    = "";
            h_jbank                    = "";
            h_umno                     = "";
        	this.s_sdate.set_value(f_date);
        	this.s_ipin.set_value(gv_sabun.substr(0,6));
        	this.s_ipinnm.set_value(gv_name);
        	this.s_upno.set_value("");
        	this.cmb_search1.set_index(3);
        	this.cmb_orderby.set_index(0);
        	this.s_custgb.set_value("");
        	this.s_custcd.set_value("");
        	this.s_custname.set_value("");
        };


        this.fnDataclear = function()
        {
            NewRowNum       = "";
            EditnRow	    = "";
        	this.ed_jun.set_value("");
        	this.ed_custgb.set_value("");
        	this.ed_custcd.set_value("");
        	this.ed_jukyocd.set_value("");
        	this.ed_jukyonm.set_value("");
        	this.ed_juk_nm.set_value("");
        	this.ed_upgb.set_value("1");
        	this.ed_upno.set_value("");
        	this.cmb_upgb.set_index(0);
        	this.ed_mdate.set_value("");
        	this.ed_bal_name.set_value("");
        	this.ed_bal_saup.set_value("");
        	this.ed_bal_jumin.set_value("");
        	this.ed_bae_name.set_value("");
        	this.ed_jbank.set_value("");
        	this.ed_sugm.set_value(0);
        	this.ed_accgb.set_value("N");
        	this.ed_n1.set_value("");
        	this.ed_n2.set_value("");
        	this.ed_n3.set_value("");
            o_sdate          = "";
            o_ipin           = "";
            o_jun            = "";
            O_UPNO 	         = "";
            O_BALNM	         = "";
            F_chk            = "N";
            U_IUSW           = "N";
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.fnSearch_zipcode();
        };

        this.fnSearch_zipcode = function()
        {
            if (( gv_sabun.substr(0,6) != 'C04090' ) &&
        		( gv_sabun.substr(0,6) != 'C97004' ) &&
        		( this.s_ipin.value = "" ))
        	{
                alert("입금인등록");
                return;
        	}
        	var strArg, se_cust;
        	var strDs 	= "ds_custipkum=ds_custipkum";
            se_cust     = this.s_custgb.value + this.s_custcd.value;
            strArg = " Values1="+nexacro.wrapQuote(this.s_sdate.value)+
        	         " Values2="+nexacro.wrapQuote(this.s_ipin.text)+
        	         " Values3="+nexacro.wrapQuote(se_cust)+
        	         " Values4="+nexacro.wrapQuote(nexacro.trim(this.s_upno.value))+
        	         " Option ="+nexacro.wrapQuote(this.cmb_search1.index)+
        	         " Orderby="+nexacro.wrapQuote(this.cmb_orderby.index);
        	this.gfn_TransactionP("codesearch","JSP/sd/sd8100_select.jsp", strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        }

        this.fnCallback = function(strSvcID, nErrorCode, strErrorMag)
        {
        	trace("EditnRow=>"+EditnRow);
        	this.ds_custipkum.set_rowposition(EditnRow);
        	this.fnDataclear();
        }

        this.fnInputdata = function()
        {
        	this.ds_custipkum.setColumn(NewRowNum,"S_DATE",       	nexacro.trim(this.ed_sdate.value));
        	this.ds_custipkum.setColumn(NewRowNum,"IPIN",         	nexacro.trim(this.ed_ipin.text));
        	this.ds_custipkum.setColumn(NewRowNum,"JUN",          	nexacro.trim(this.ed_jun.value));
        	this.ds_custipkum.setColumn(NewRowNum,"CUST_GB",      	nexacro.trim(this.ed_custgb.value));
        	this.ds_custipkum.setColumn(NewRowNum,"CUST_CD",	    nexacro.trim(this.ed_custcd.value));
        	this.ds_custipkum.setColumn(NewRowNum,"JUKYO_CD",     	nexacro.trim(this.ed_jukyocd.value));

        	this.ds_custipkum.setColumn(NewRowNum,"UP_GB",	     	nexacro.trim(this.ed_upgb.text));
        	this.ds_custipkum.setColumn(NewRowNum,"UP_NO",	     	nexacro.trim(this.ed_upno.value));
        	this.ds_custipkum.setColumn(NewRowNum,"JUKYO_NM",     	nexacro.trim(this.ed_juk_nm.text));
        	this.ds_custipkum.setColumn(NewRowNum,"U_SUGM",	     	nexacro.trim(this.ed_sugm.value));
        	this.ds_custipkum.setColumn(NewRowNum,"U_MDATE",	    nexacro.trim(this.ed_mdate.value));

        	this.ds_custipkum.setColumn(NewRowNum,"U_BAL_NAME",   	nexacro.trim(this.ed_bal_name.text));
        	this.ds_custipkum.setColumn(NewRowNum,"U_BAL_SAUP",	 	nexacro.trim(this.ed_bal_saup.text));
        	this.ds_custipkum.setColumn(NewRowNum,"U_BAL_JUMIN",	nexacro.trim(this.ed_bal_jumin.text));
        	this.ds_custipkum.setColumn(NewRowNum,"U_BAE_NAME",	 	nexacro.trim(this.ed_bae_name.text));

        	this.ds_custipkum.setColumn(NewRowNum,"U_JBANK",	    nexacro.trim(this.ed_jbank.text));
        	this.ds_custipkum.setColumn(NewRowNum,"ACC_GB",	     	nexacro.trim(this.ed_accgb.value));
        	this.ds_custipkum.setColumn(NewRowNum,"SWCD_CD",		nexacro.trim(gv_sabun.substr(0,6)));
        	this.ds_custipkum.setColumn(NewRowNum,"UPYMD",	     	"");
        	this.ds_custipkum.setColumn(NewRowNum,"ACC_DATE",     	"");
        	this.ds_custipkum.setColumn(NewRowNum,"ACC_BUNHO",    	"");
        	this.ds_custipkum.setColumn(NewRowNum,"ACC_SEQ",	    "");
        	this.ds_custipkum.setColumn(NewRowNum,"O_DPNM",	     	"");
        	this.ds_custipkum.setColumn(NewRowNum,"O_SAUP",	     	"");
        	this.ds_custipkum.setColumn(NewRowNum,"O_JUMIN",	    "");

            this.ds_custipkum_send.addRow();
        	this.ds_custipkum_send.copyRow(0, this.ds_custipkum, NewRowNum);
        	this.ds_custipkum_send.setColumn(0,"O_SDATE",    o_sdate);
        	this.ds_custipkum_send.setColumn(0,"O_IPIN",     o_ipin);
        	this.ds_custipkum_send.setColumn(0,"O_JUN",      o_jun);
        	this.ds_custipkum_send.setColumn(0,"ROWTYPE", "I" );
        }

        this.fnEdit_data = function()
        {
        	this.ds_custipkum.setColumn(EditnRow,"S_DATE",      nexacro.trim(this.ed_sdate.value));
        	this.ds_custipkum.setColumn(EditnRow,"IPIN", 		nexacro.trim(this.ed_ipin.text));
        	this.ds_custipkum.setColumn(EditnRow,"JUN",         nexacro.trim(this.ed_jun.value));
        	this.ds_custipkum.setColumn(EditnRow,"CUST_GB",     nexacro.trim(this.ed_custgb.value));
        	this.ds_custipkum.setColumn(EditnRow,"CUST_CD",	    nexacro.trim(this.ed_custcd.value));
        	this.ds_custipkum.setColumn(EditnRow,"JUKYO_CD",    nexacro.trim(this.ed_jukyocd.value));

        	this.ds_custipkum.setColumn(EditnRow,"UP_GB",	    nexacro.trim(this.ed_upgb.text));
        	this.ds_custipkum.setColumn(EditnRow,"UP_NO",	    nexacro.trim(this.ed_upno.value));
        	this.ds_custipkum.setColumn(EditnRow,"JUKYO_NM",    nexacro.trim(this.ed_juk_nm.text));
        	this.ds_custipkum.setColumn(EditnRow,"U_SUGM",	    nexacro.trim(this.ed_sugm.value));
        	this.ds_custipkum.setColumn(EditnRow,"U_MDATE",	    nexacro.trim(this.ed_mdate.value));

        	this.ds_custipkum.setColumn(EditnRow,"U_BAL_NAME",  nexacro.trim(this.ed_bal_name.text));
        	this.ds_custipkum.setColumn(EditnRow,"U_BAL_SAUP",	nexacro.trim(this.ed_bal_saup.text));
        	this.ds_custipkum.setColumn(EditnRow,"U_BAL_JUMIN",	nexacro.trim(this.ed_bal_jumin.text));
        	this.ds_custipkum.setColumn(EditnRow,"U_BAE_NAME",	nexacro.trim(this.ed_bae_name.text));

        	this.ds_custipkum.setColumn(EditnRow,"U_JBANK",	    nexacro.trim(this.ed_jbank.text));
        	this.ds_custipkum.setColumn(EditnRow,"ACC_GB",	    nexacro.trim(this.ed_accgb.value));
        	this.ds_custipkum.setColumn(EditnRow,"SWCD_CD",	    nexacro.trim(gv_sabun.substr(0,6)));
        	this.ds_custipkum.setColumn(EditnRow,"UPYMD",	    "");
        	this.ds_custipkum.setColumn(EditnRow,"O_DPNM",	    "");
        	this.ds_custipkum.setColumn(EditnRow,"O_SAUP",	    "");
        	this.ds_custipkum.setColumn(EditnRow,"O_JUMIN",	    "");

            this.ds_custipkum_send.addRow();
        	this.ds_custipkum_send.copyRow(0, this.ds_custipkum, EditnRow);
        	this.ds_custipkum_send.setColumn(0,"O_SDATE",    o_sdate);
        	this.ds_custipkum_send.setColumn(0,"O_IPIN",     o_ipin);
        	this.ds_custipkum_send.setColumn(0,"O_JUN",      o_jun);
        	this.ds_custipkum_send.setColumn(0,"ROWTYPE", "U" );
        }

        this.common_onkeydown = function(obj,e)
        {
        	// Enter
        	if(e.keycode == 13)
        	{
        		if (obj.name == "ed_sdate") this.ed_ipin.setFocus();
        		else if (obj.name == "ed_ipin") this.ed_custgb.setFocus();
        		else if (obj.name == "ed_custgb") this.ed_custcd.setFocus();
        		else if (obj.name == "ed_custcd") this.ed_jukyocd.setFocus();
        		else if (obj.name == "ed_jukyocd") this.ed_juk_nm.setFocus();
        		else if (obj.name == "ed_juk_nm") this.ed_upgb.setFocus();
        		else if (obj.name == "ed_upgb") this.ed_upno.setFocus();
        		else if (obj.name == "ed_upno") this.ed_mdate.setFocus();

        		else if (obj.name == "ed_mdate") this.ed_bal_name.setFocus();
        		else if (obj.name == "ed_bal_name") this.ed_bal_saup.setFocus();
        		else if (obj.name == "ed_bal_bal_saup") this.ed_bal_jumin.setFocus();
        		else if (obj.name == "ed_bal_jumin") this.ed_bae_name.setFocus();
        		else if (obj.name == "ed_bae_name") this.ed_jbank.setFocus();
        		else if (obj.name == "ed_jbank") this.ed_sugm.setFocus();
        		else if (obj.name == "ed_sugm") this.btn_save.setFocus();
        	}
        	//ESC
        	else if(e.keycode == 27)
        	{
        		if (obj.name == "ed_ipin") this.ed_sdate.setFocus();
        		else if (obj.name == "ed_custgb") this.ed_ipin.setFocus();
        		else if (obj.name == "ed_custcd") this.ed_custgb.setFocus();
        		else if (obj.name == "ed_jukyocd") this.ed_custcd.setFocus();
        		else if (obj.name == "ed_juk_nm") this.ed_jukyocd.setFocus();
        		else if (obj.name == "ed_upgb") this.ed_juk_nm.setFocus();
        		else if (obj.name == "ed_upno")   this.ed_upgb.setFocus();
        		else if (obj.name == "ed_mdate")  this.ed_upno.setFocus();
        		else if (obj.name == "ed_bal_name") this.ed_mdate.setFocus();
        		else if (obj.name == "ed_bal_saup")  this.ed_bal_name.setFocus();
        		else if (obj.name == "ed_bal_jumin") this.ed_bal_saup.setFocus();
        		else if (obj.name == "ed_bae_name") this.ed_bal_jumin.setFocus();
        		else if (obj.name == "ed_jbank") this.ed_bae_name.setFocus();
        		else if (obj.name == "ed_sugm") this.ed_jbank.setFocus();
        	}
        	//F1
        	else if(e.keycode == 112)
        	{
        		if (obj.name == "ed_ipin")
        		{
        			this.lfn_showModal("ipin_keydown", "", "sd::frmsabun_list.xfdl", "fnipinSearchCallback", this, 0, 0, 255, 500);
        		}
        		else if ((obj.name == "ed_custgb") || (obj.name == "ed_custcd"))
        		{
        			this.lfn_showModal("cust_search1", "", "sd::frmCustList.xfdl", "fnCustListCallback", this, 0, 0, 585, 500);
                }
        		else if (obj.name == "ed_jukyocd")
                {
        			this.lfn_showModal("juk_keydown", "", "sd::frmJukyo.xfdl", "fnJukSearchCallback", this, 0, 0, 585, 500);
                }
        	}
        	//Arrow Up
        	else if(e.keycode == 38)
        	{
        		if ((obj.name == "ed_custgb") && (j_custgb != ""))
        			this.ed_custgb.text   =  j_custgb;
        		else if ((obj.name == "ed_custgb") && (h_custgb != ""))
        			this.ed_custgb.text   =  h_custgb;
        		else if ((obj.name == "ed_custcd") && (j_custcd != ""))
        			this.ed_custcd.text   =  j_custcd;
        		else if ((obj.name == "ed_custcd") && (h_custcd != ""))
        			this.ed_custcd.text   =  h_custcd;
        		else if ((obj.name == "ed_jukyocd") && (j_juk != ""))
        			this.ed_jukyocd.text   =  j_juk;
        		else if ((obj.name == "ed_jukyocd") && (h_juk != ""))
        			this.ed_jukyocd.text   =  h_juk;
        		else if ((obj.name == "ed_juk_nm") && (j_juknm != ""))
        			this.ed_juk_nm.text   =  j_juknm;
        		else if ((obj.name == "ed_juk_nm") && (h_juknm != ""))
        			this.ed_juk_nm.text   =  h_juknm;
        		else if ((obj.name == "ed_upno") && (j_umno != ""))
        			this.ed_upno.text   =  j_umno;
        		else if ((obj.name == "ed_upno") && (h_umno != ""))
        			this.ed_upno.text   =  h_umno;
        		else if ((obj.name == "ed_mdate") && (j_manymd != ""))
        			this.ed_mdate.text   =  j_manymd;
        		else if ((obj.name == "ed_mdate") && (h_manymd != ""))
        			this.ed_mdate.text   =  h_manymd;
        		else if ((obj.name == "ed_bal_name") && ( j_balnm != ""))
        			this.ed_bal_name.text   =  j_balnm;
        		else if ((obj.name == "ed_bal_name") && ( h_balnm != ""))
        			this.ed_bal_name.text   =  h_balnm;
        		else if ((obj.name == "ed_bal_saup") && (j_bsaupno != ""))
        			this.ed_bal_saup.text   =  j_bsaupno;
        		else if ((obj.name == "ed_bal_saup") && (h_bsaupno != ""))
        			this.ed_bal_saup.text   =  h_bsaupno;
        		else if ((obj.name == "ed_bal_jumin") && ( j_bjumin != ""))
        			this.ed_bal_jumin.text   =   j_bjumin;
        		else if ((obj.name == "ed_bal_jumin") && ( h_bjumin != ""))
        			this.ed_bal_jumin.text   =   h_bjumin;
        		else if ((obj.name == "ed_bae_name") && (j_baenm != ""))
        			this.ed_bae_name.text   =  j_baenm;
        		else if ((obj.name == "ed_bae_name") && (h_baenm != ""))
        			this.ed_bae_name.text   =  h_baenm;
        		else if ((obj.name == "ed_jbank") && (j_jbank != ""))
        			this.ed_jbank.text   =  j_jbank;
        		else if ((obj.name == "ed_jbank") && (h_jbank != ""))
        			this.ed_jbank.text   =  h_jbank;
        	}
        	//Arrow Down
        	else if (e.keycode == 40)
        	{
        		if ((obj.name == "ed_custgb") && (j_custgb != ""))
        		   this.ed_custgb.text   =  j_custgb;
        		else if ((obj.name == "ed_custgb") && (h_custgb != ""))
        		   this.ed_custgb.text   =  h_custgb;
        		else if ((obj.name == "ed_custcd") && (j_custcd != ""))
        		   this.ed_custcd.text   =  j_custcd;
        		else if ((obj.name == "ed_custcd") && (h_custcd != ""))
        		   this.ed_custcd.text   =  h_custcd;
        		else if ((obj.name == "ed_jukyocd") && (j_juk != ""))
        		   this.ed_jukyocd.text   =  j_juk;
        		else if ((obj.name == "ed_jukyocd") && (h_juk != ""))
        		   this.ed_jukyocd.text   =  h_juk;
        		else if ((obj.name == "ed_juk_nm") && (j_juknm != ""))
        		   this.ed_juk_nm.text   =  j_juknm;
        		else if ((obj.name == "ed_juk_nm") && (h_juknm != ""))
        		   this.ed_juk_nm.text   =  h_juknm;
        		else if ((obj.name == "ed_upno") && (j_umno != ""))
        		   this.ed_upno.text   =  j_umno;
        		else if ((obj.name == "ed_upno") && (h_umno != ""))
        		   this.ed_upno.text   =  h_umno;
        		else if ((obj.name == "ed_mdate") && (j_manymd != ""))
        		   this.ed_mdate.text   =  j_manymd;
        		else if ((obj.name == "ed_mdate") && (h_manymd != ""))
        		   this.ed_mdate.text   =  h_manymd;
        		else if ((obj.name == "ed_bal_name") && ( j_balnm != ""))
        		   this.ed_bal_name.text   =  j_balnm;
        		else if ((obj.name == "ed_bal_name") && ( h_balnm != ""))
        		   this.ed_bal_name.text   =  h_balnm;
        		else if ((obj.name == "ed_bal_saup") && (j_bsaupno != ""))
        		   this.ed_bal_saup.text   =  j_bsaupno;
        		else if ((obj.name == "ed_bal_saup") && (h_bsaupno != ""))
        		   this.ed_bal_saup.text   =  h_bsaupno;
        		else if ((obj.name == "ed_bal_jumin") && ( j_bjumin != ""))
        		   this.ed_bal_jumin.text   =   j_bjumin;
        		else if ((obj.name == "ed_bal_jumin") && ( h_bjumin != ""))
        		   this.ed_bal_jumin.text   =   h_bjumin;
        		else if ((obj.name == "ed_bae_name") && (j_baenm != ""))
        		   this.ed_bae_name.text   =  j_baenm;
        		else if ((obj.name == "ed_bae_name") && (h_baenm != ""))
        		   this.ed_bae_name.text   =  h_baenm;
        		else if ((obj.name == "ed_jbank") && (j_jbank != ""))
        		   this.ed_jbank.text   =  j_jbank;
        		else if ((obj.name == "ed_jbank") && (h_jbank != ""))
        		   this.ed_jbank.text   =  h_jbank;
        	}
        };

        this.search_common_onkeydown = function(obj,e)
        {
        	//Enter
        	if (e.keycode == 13)
        	{
        		if (obj.name == "s_sdate") this.s_ipin.setFocus();
        		else if (obj.name == "s_ipin") this.s_upno.setFocus();
        		else if (obj.name == "s_upno") this.s_custgb.setFocus();
        		else if (obj.name == "s_custgb") this.s_custcd.setFocus();
        		else if (obj.name == "s_custcd") this.cmb_search1.setFocus();
        	}
        	//ESC
        	else if (e.keycode == 27)
        	{
        		if (obj.name == "s_ipin") this.s_sdate.SetFocus();
        		else if (obj.name == "s_upno") this.s_ipin.SetFocus();
        		else if (obj.name == "s_custgb") this.s_upno.SetFocus();
        		else if (obj.name == "s_custcd") this.s_custgb.SetFocus();
        	}
        	//F1
           	else if (e.keycode == 112) //F1 키...
        	{
        		if ((obj.name == "s_custgb") || (obj.name == "s_custcd"))
        		{
        			this.lfn_showModal("cust_keydown", "", "sd::frmCustList.xfdl", "fnCustListCallback", this, 0, 0, 585, 500);
                }
        	}
        }

        this.btn_save_onclick = function(obj,e)
        {
        	if ((this.ed_upgb.value != "7") && ( this.ed_sugm.value == 0 ))
        	{
        		alert("어음액 미등록");
        		return;
        	}

        	if (this.ed_ipin.text == "")
        	{
        		alert("입금자 미등록!");
        		return;
        	}

        	if (this.ed_jun.text == "")
        	{
        		alert("전표번호 미등록!");
        		return;
        	}

        	if ((EditnRow != "") && (this.ed_accgb.text == "Y" ))
        	{
        		alert("전표처리 완료자료! 수정불가!");
        		return;
        	}
        	if ((nexacro.trim(this.ed_upno.value)).length != 8)
        	{
        		alert("어음번호 오류! 수정하세요!");
        		return;
        	}
        	if ((nexacro.trim(this.ed_upgb.value)).length != 1)
        	{
        		alert("어음구분 오류! 수정하세요!");
        		return;
        	}
        	if (EditnRow != "" || EditnRow == 0)
        	{
        		if ((this.ed_accgb.text == "B" ) || (this.ed_accgb.text == "S" )  || (this.ed_accgb.text == "J" ))
        		{
        			alert("전표처리 완료자료! 수정불가!");
        			return;
        		}
        		else
        		{
        			var strUrl = "JSP/sd/sd8100_insert.jsp";
        			var inDs 	= "ds_custipkum_send=ds_custipkum_send";
        			this.fnEdit_data();
        			this.gfn_TransactionP("insert", strUrl, inDs, "", "", "fnTr_Callback", false, "P", false, this);
        		}
        	}
        	else
        	{
        		var strArg;
        		var inds 	= "";
        		NewRowNum = this.ds_custipkum.addRow();
        		if (( this.ed_sdate.value !=  "" ) && ( this.ed_ipin.value !=  "" ))
        		{
        			var strUrl = "JSP/sd/sd8100_numcnt.jsp";
        			var strDs  = "ds_n8100=ds_n8100";
        			strArg = " Values1="+nexacro.wrapQuote(this.ed_sdate.value)+
        					 " Values2="+nexacro.wrapQuote(this.ed_ipin.value);
        			this.gfn_TransactionP("insert", strUrl, strDs, strDs, strArg, "fnDis_Cnt", false, "P", false, this);
        		}
        	}
        //	trace(ds_gbook_send.SaveXML());
        	if ( j_custgb == "" )
        	{
        		j_custgb                   = this.ed_custgb.text;
        		j_custcd                   = this.ed_custcd.text;
        		j_juk                      = this.ed_jukyocd.text;
        		j_juknm                    = this.ed_juk_nm.text;
        		j_manymd                   = this.ed_mdate.text;
        		j_umno                     = this.ed_upno.value;
        		j_balnm                    = this.ed_bal_name.text;
        		j_bsaupno                  = this.ed_bal_saup.text;
        		j_bjumin                   = this.ed_bal_jumin.text;
        		j_baenm                    = this.ed_bae_name.text;
        		j_jbank                    = this.ed_jbank.text;
        	}
        	else if ( j_custgb != "" )
        	{
        		h_custgb                   = j_custgb;
        		h_custcd                   = j_custcd;
        		h_juk                      = j_juk;
        		h_juknm                    = j_juknm;
        		h_umno                     = j_umno;
        		h_manymd                   = j_manymd;
        		h_balnm                    = j_balnm;
        		h_bsaupno                  = j_bsaupno;
        		h_bjumin                   = j_bjumin;
        		h_baenm                    = j_baenm;
        		h_jbank                    = j_jbank;
        		j_custgb                   = this.ed_custgb.text;
        		j_custcd                   = this.ed_custcd.text;
        		j_juk                      = this.ed_jukyocd.text;
        		j_juknm                    = this.ed_juk_nm.text;
        		j_manymd                   = this.ed_mdate.text;
        		j_umno                     = this.ed_upno.value;
        		j_balnm                    = this.ed_bal_name.text;
        		j_bsaupno                  = this.ed_bal_saup.text;
        		j_bjumin                   = this.ed_bal_jumin.text;
        		j_baenm                    = this.ed_bae_name.text;
        		j_jbank                    = this.ed_jbank.text;
        	}
        };

        this.btn_del_onclick = function(obj,e)
        {
        	var strUrl = "JSP/sd/sd8100_insert.jsp";
        	var inDs 	= "ds_custipkum_send=ds_custipkum_send:u";
        	if ((EditnRow != "") && ((this.ed_accgb.value == 'B' ) || (this.ed_accgb.value == 'S' ) || (this.ed_accgb.value == 'J' )))
        	{
        		alert("전표처리 완료자료! 삭제불가!");
        		return;
        	}
        	var objApp = nexacro.getApplication();
        	if(msg_result = objApp.confirm( "삭제된 데이터는 복원하실수 없습니다.\n 정말 삭제하시겠습니까? " , "삭제처리", "warning" ))
            {
            	this.ds_custipkum.setColumn(EditnRow,"S_DATE",      nexacro.trim(this.ed_sdate.value));
            	this.ds_custipkum.setColumn(EditnRow,"IPIN",        nexacro.trim(this.ed_ipin.text));
            	this.ds_custipkum.setColumn(EditnRow,"JUN",         nexacro.trim(this.ed_jun.value));
        	    this.ds_custipkum.setColumn(EditnRow,"CUST_GB",     nexacro.trim(this.ed_custgb.value));
        	    this.ds_custipkum.setColumn(EditnRow,"CUST_CD",	    nexacro.trim(this.ed_custcd.value));
        	    this.ds_custipkum.setColumn(EditnRow,"JUKYO_CD",    nexacro.trim(this.ed_jukyocd.value));
        	    this.ds_custipkum.setColumn(EditnRow,"UP_GB",	    nexacro.trim(this.ed_upgb.text));
        	    this.ds_custipkum.setColumn(EditnRow,"UP_NO",	    nexacro.trim(this.ed_upno.value));
        	    this.ds_custipkum.setColumn(EditnRow,"JUKYO_NM",    nexacro.trim(this.ed_juk_nm.text));
        	    this.ds_custipkum.setColumn(EditnRow,"U_SUGM",	    nexacro.trim(this.ed_sugm.value));
        	    this.ds_custipkum.setColumn(EditnRow,"U_MDATE",	    nexacro.trim(this.ed_mdate.value));
        	    this.ds_custipkum.setColumn(EditnRow,"U_BAL_NAME",  nexacro.trim(this.ed_bal_name.text));
        	    this.ds_custipkum.setColumn(EditnRow,"U_BAL_SAUP",	nexacro.trim(this.ed_bal_saup.text));
        	    this.ds_custipkum.setColumn(EditnRow,"U_BAL_JUMIN",	nexacro.trim(this.ed_bal_jumin.text));
        	    this.ds_custipkum.setColumn(EditnRow,"U_BAE_NAME",	nexacro.trim(this.ed_bae_name.text));
        	    this.ds_custipkum.setColumn(EditnRow,"U_JBANK",	    nexacro.trim(this.ed_jbank.text));
        	    this.ds_custipkum.setColumn(EditnRow,"ACC_GB",	    nexacro.trim(this.ed_accgb.value));
        	    this.ds_custipkum.setColumn(EditnRow,"SWCD_CD",		nexacro.trim(gv_sabun.substr(0,6)));
            	this.ds_custipkum.setColumn(EditnRow,"O_DPNM",	     "");
        	    this.ds_custipkum.setColumn(EditnRow,"O_SAUP",	     "");
        	    this.ds_custipkum.setColumn(EditnRow,"O_JUMIN",	     "");
        	    this.ds_custipkum.setColumn(EditnRow,"UPYMD",	     "");
                this.ds_custipkum_send.addRow();
        	    this.ds_custipkum_send.copyRow(0, this.ds_custipkum, nexacro.toNumber(EditnRow));
        	    this.ds_custipkum_send.setColumn(0,"O_SDATE",    o_sdate);
        	    this.ds_custipkum_send.setColumn(0,"O_IPIN",     o_ipin);
        	    this.ds_custipkum_send.setColumn(0,"O_JUN",      o_jun);
        	    this.ds_custipkum_send.setColumn(0,"ROWTYPE", "D" );
        		this.gfn_TransactionP("delete", strUrl, inDs, "", "", "fnTr_Callback", false, "P", false, this);
        		this.ds_custipkum.deleteRow(EditnRow);
        		this.grid_view.updateToDataset();
        	}
        };

        this.grid_view_oncelldblclick = function(obj,e)
        {
        	EditnRow = e.row;
        	U_IUSW            = "Y";
        	this.ed_sdate.set_value(this.ds_custipkum.getColumn(e.row,"S_DATE"));
        	this.ed_ipin.set_value(this.ds_custipkum.getColumn(e.row,"IPIN"));
        	this.ed_ipinnm.set_value(this.ds_custipkum.getColumn(e.row,"INSA_NM"));
        	this.ed_jun.set_value(this.ds_custipkum.getColumn(e.row,"JUN"));
        	this.ed_custgb.set_value(this.ds_custipkum.getColumn(e.row,"CUST_GB"));
        	this.ed_custcd.set_value(this.ds_custipkum.getColumn(e.row,"CUST_CD"));
        	this.ed_custname.set_value(this.ds_custipkum.getColumn(e.row,"CUST_NM"));
        	this.ed_jukyocd.set_value(this.ds_custipkum.getColumn(e.row,"JUKYO_CD"));
        	this.ed_jukyonm.set_value(this.ds_custipkum.getColumn(e.row,"JUK_NM"));
        	this.ed_juk_nm.set_value(this.ds_custipkum.getColumn(e.row,"JUKYO_NM"));
        	this.ed_upgb.set_value(this.ds_custipkum.getColumn(e.row,"UP_GB"));
        	if ( this.ed_upgb.value == "1")
            {
                this.cmb_upgb.set_index(0);
            }
            else if ( this.ed_upgb.value == "2" )
            {
                this.cmb_upgb.set_index(1);
            }
            else if ( this.ed_upgb.value == "3" )
            {
                this.cmb_upgb.set_index(2);
            }
            else if ( this.ed_upgb.value == "4" )
            {
                this.cmb_upgb.set_index(3);
            }
            else if ( this.ed_upgb.value == "5" )
            {
                this.cmb_upgb.set_index(4);
            }
            else if ( this.ed_upgb.value == "6" )
            {
                this.cmb_upgb.set_index(5);
            }
            else if ( this.ed_upgb.value == "7" )
            {
                this.cmb_upgb.set_index(6);
            }
            else if ( this.ed_upgb.value == "8" )
            {
                this.cmb_upgb.set_index(7);
            }
        	this.ed_upno.set_value(this.ds_custipkum.getColumn(e.row,"UP_NO"));
        	O_UPNO = this.ds_custipkum.getColumn(e.row,"UP_NO");
        	this.ed_sugm.set_value(this.ds_custipkum.getColumn(e.row,"U_SUGM"));
        	this.ed_mdate.set_value(this.ds_custipkum.getColumn(e.row,"U_MDATE"));
        	this.ed_bal_name.set_value(this.ds_custipkum.getColumn(e.row,"U_BAL_NAME"));
        	O_BALNM = this.ds_custipkum.getColumn(e.row,"U_BAL_NAME");
        	this.ed_bal_saup.set_value(this.ds_custipkum.getColumn(e.row,"U_BAL_SAUP"));
        	this.ed_bal_jumin.set_value(this.ds_custipkum.getColumn(e.row,"U_BAL_JUMIN"));
        	this.ed_bae_name.set_value(this.ds_custipkum.getColumn(e.row,"U_BAE_NAME"));
        	this.ed_jbank.set_value(this.ds_custipkum.getColumn(e.row,"U_JBANK"));
        	this.ed_accgb.set_value(this.ds_custipkum.getColumn(e.row,"ACC_GB"));
            this.ed_n1.set_value(this.ds_custipkum.getColumn(e.row,"O_DPNM"));
            this.ed_n2.set_value(this.ds_custipkum.getColumn(e.row,"O_SAUP"));
            this.ed_n3.set_value(this.ds_custipkum.getColumn(e.row,"O_JUMIN"));
        	o_sdate = this.ds_custipkum.getColumn(e.row,"S_DATE");
        	o_ipin = this.ds_custipkum.getColumn(e.row,"IPIN");
        	o_jun = this.ds_custipkum.getColumn(e.row,"JUN");
        };

        this.btn_can_onclick = function(obj,e)
        {
        	EditnRow ="";
        	this.fnDataclear();
        	this.ed_sdate.setFocus();
        };

        this.btn_print_onclick = function(obj,e)
        {
        	this.lfn_showModal("print", "", "sd::SD8100P.xfdl", "fnPrintCallback", this, 0, 0, 390, 290);
        };

        this.fnTr_Callback = function(strSvcID, nErrorCode, strErrorMag)
        {
        	this.setWaitCursor(false);
        	// 서비스 정상 처리
        	if ( strSvcID == "insert" )
        	{
        		if(nErrorCode != 0 )
        		{
        			var objDate = new nexacro.Date();
        			var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMdd");
        			alert("오류! 전산실로 연락바랍니다! \n [HSD0110F.Tr_Callback(" + f_date + ")] " + strSvcID +"::"+ strErrorMag );
        			return;
        		}

        		if (Error=="True")
        		{
        			alert("코드가 중복되었습니다. \n 재검색후 저장해주세요.");
        		}
        		else
        		{
        			this.fnSearch_zipcode();
        			this.ed_ipin.setFocus();
        		}
        	}
        }

        this.ed_upgb_canchange = function(obj,e)
        {
        	if ( e.posttext == "1" )
            {
                this.cmb_upgb.set_index(0);
            }
            else if ( e.posttext == "2" )
            {
                this.cmb_upgb.set_index(1);
            }
            else if ( e.posttext == "3" )
            {
                this.cmb_upgb.set_index(2);
            }
            else if ( e.posttext == "4" )
            {
                this.cmb_upgb.set_index(3);
            }
            else if ( e.posttext == "5" )
            {
                this.cmb_upgb.set_index(4);
            }
            else if ( e.posttext == "6" )
            {
                this.cmb_upgb.set_index(5);
            }
            else if ( e.posttext == "7" )
            {
                this.cmb_upgb.set_index(6);
                this.ed_upno.set_value("00000000");
                this.ed_jbank.set_value("");
            }
            else if ( e.posttext == "8" )
            {
                this.cmb_upgb.set_index(7);
            }
        };

        this.cmb_upgb_onitemchanged = function(obj,e)
        {
        	if ( e.postindex == 0 )
            {
                 this.ed_upgb.set_value("1");
            }
            else if ( e.postindex == 1 )
            {
                 this.ed_upgb.set_value("2");
            }
            else if ( e.postindex == 2 )
            {
                 this.ed_upgb.set_value("3");
            }
            else if ( e.postindex == 3 )
            {
                 this.ed_upgb.set_value("4");
            }
            else if ( e.postindex == 4 )
            {
                 this.ed_upgb.set_value("5");
            }
            else if ( e.postindex == 5 )
            {
                 this.ed_upgb.set_value("6");
            }
            else if ( e.postindex == 6 )
            {
                 this.ed_upgb.set_value("7");
                 this.ed_upno.set_value("00000000");
                 this.ed_jbank.set_value("");
            }
            else if ( e.postindex == 7 )
            {
                 this.ed_upgb.set_value("8");
            }
        };

        this.btn_cust_search1_onclick = function(obj,e)
        {
        	this.lfn_showModal("cust_search1", "", "sd::frmCustList.xfdl", "fnCustListCallback", this, 0, 0, 590, 550);
        };

        this.fnCustListCallback = function(strID, ret)
        {
        	if(ret != null)
        	{
        		var gubun = ret.substr(0,2);
        		var code =  ret.substr(3,4);
        		if(nexacro.trim(ret) != "0")
        		{
        			if(strID == "cust_search1")
        			{
        				this.ed_custgb.set_value(gubun);
        				this.ed_custcd.set_value(code);
        				this.ed_custcd_onkillfocus();
        				this.ed_jukyocd.setFocus();
        			}
        			else if(strID == "cust_search2")
        			{
        				this.s_custgb.set_value(gubun);
        				this.s_custcd.set_value(code);
        				this.s_custcd_onkillfocus();
        				this.cmb_search1.setFocus();
        			}
        			else if(strID == "cust_keydown")
        			{
        				this.s_custgb.set_value(gubun);
        				this.s_custcd.set_value(code);
        			}
        		}
        	}
        }

        this.ed_custcd_onkillfocus = function(obj,e)
        {
        	var strUrl = "JSP/sd/sd8100_cust.jsp";
        	var strDs 	= "ds_cust=ds_cust";
        	if (( this.ed_custgb.value != "" ) && ( this.ed_custcd.value !=  "" ))
        	{
            	strArg = " Values1="+nexacro.wrapQuote(this.ed_custgb.value)+
        	             " Values2="+nexacro.wrapQuote(this.ed_custcd.value);
        		this.gfn_TransactionP("cust", strUrl, strDs, strDs, strArg, "fnDis_cust", false, "P", false, this);
        		this.grid_view.updateToDataset();
        	}
        };

        this.fnDis_cust = function(strSvcID, nErrorCode, strErrorMag)
        {
        	if ( strSvcID == "cust" )
            {
                this.ed_custname.set_value(this.ds_cust.getColumn(0,"NAME"));
        //      this.ed_bal_saup.set_value(this.ds_cust.getColumn(0,"saup"));
        //      this.ed_bal_jumin.set_value(this.ds_cust.getColumn(0,"jumin"));
                this.ed_n1.set_value(this.ds_cust.getColumn(0,"DPNM"));
                this.ed_n2.set_value(this.ds_cust.getColumn(0,"SAUP"));
                this.ed_n3.set_value(this.ds_cust.getColumn(0,"JUMIN"));
         	}
         	else if ( strSvcID == "s_cust" )
            {
                this.s_custname.set_value(this.ds_cust.getColumn(0,"NAME"));
         	}
        }

        this.ed_ipin_onkillfocus = function(obj,e)
        {
        	var strUrl = "JSP/sd/sd8100_insa.jsp";
        	var strDs = "ds_insa=ds_insa";
        	if ( this.ed_ipin.value !=  "" )
        	{
        		strArg = " Values1="+nexacro.wrapQuote(this.ed_ipin.value);
        		this.gfn_TransactionP("insa", strUrl, strDs, strDs, strArg, "fnDis_insa", false, "P", false, this);
        	}
        };

        this.fnNumber_cnt = function()
        {
        	if (( this.ed_sdate.value != "" ) && ( this.ed_ipin.value !=  "" ))
        	{
        		var strUrl = "JSP/sd/sd8100_numcnt.jsp";
            	var strDs  = "ds_n8100=ds_n8100";
        		var strArg = "";
           	    strArg = " Values1="+nexacro.wrapQuote(this.ed_sdate.value)+
                         " Values2="+nexacro.wrapQuote(this.ed_ipin.value);
        		this.gfn_TransactionP("Numcnt", strUrl, strDs, strDs, "", "fnDis_Cnt", false, "P", false, this);
                this.grid_view.updateToDataset();
            }
        }

        this.fnDis_Cnt = function(strSvcID, nErrorCode, strErrorMag)
        {
        	var strUrl = "JSP/sd/sd8100_insert.jsp";
        	var inDs 	= "ds_custipkum_send=ds_custipkum_send";
        	var  J_num;
        	trace(this.ds_n8100.saveXML());
        	if ( this.ds_n8100.rowcount == 0 || this.ds_n8100.getColumn(0,0) == 'undefined' || this.ds_n8100.getColumn(0,0) == null)
        		this.ed_jun.set_value("001");
        	else
        	{
        		J_num = (nexacro.toNumber(this.ds_n8100.getColumn(0,"JUN")) + 1).toString();
        		if ( J_num.length == 1 )
        			J_num = "00" + J_num;
        		else if ( J_num.length == 2 )
        			J_num = "0" + J_num;
        		this.ed_jun.set_value(J_num);
        	}
        	//    alert(e_JUN.value);
        	if ( this.ed_jun.value != "" )
        	{
        		this.fnInputdata();
        		this.gfn_TransactionP("insert", strUrl, inDs, "", "", "fnTr_Callback", false, "P", false, this);
        	}
        }

        this.fnDis_insa = function(strSvcID, nErrorCode, strErrorMag)
        {
        	if ( strSvcID == "insa" )
        	{
        		this.ed_ipinnm.set_value(this.ds_insa.getColumn(0,"NAME"));
        		//	  Number_cnt();
        	}
        	else  if ( strSvcID == "s_insa" )
        		this.s_ipinnm.set_value(this.ds_insa.getColumn(0,"NAME"));
        }

        this.ed_jukyocd_onkillfocus = function(obj,e)
        {
        	if(this.ed_jukyocd.value == "")
        	{
        		alert("적요 미등록");
        		this.ed_jukyocd.setFocus();
        	}
        	var strUrl = "JSP/sd/sd8100_juk.jsp";
        	var strArg;
        	var strDs = "ds_juk=ds_juk";
        	if ( this.ed_jukyocd.value !=  "" )
        	{
        		strArg = " Values1="+nexacro.wrapQuote(this.ed_jukyocd.value);
        		this.gfn_TransactionP("codesearch", strUrl, strDs, strDs, strArg, "fnDis_juk", false, "P", false, this);
        		this.grid_view.updateToDataset();
        	}
        };

        this.fnDis_juk = function(strSvcID, nErrorCode, strErrorMag)
        {
         	this.ed_jukyonm.set_value(this.ds_juk.getColumn(0,"NAME"));
         	if (( this.ed_jukyocd.value == "002" ))
        		this.ed_juk_nm.set_value("외상대 입금");
         	else if (( this.ed_jukyocd.value == "322" ))
        		this.ed_juk_nm.set_value("2012년 2학기선수금");
         	else if (( this.ed_jukyocd.value == "331" ))
        		this.ed_juk_nm.set_value("2013년 1학기선수금");
         	else if (( this.ed_jukyocd.value == "332" ))
        		this.ed_juk_nm.set_value("2013년 2학기선수금");
        }


        this.s_ipin_onkillfocus = function(obj,e)
        {
        	var strUrl = "JSP/sd/sd8100_insa.jsp";
        	var strArg;
        	var strDs = "ds_insa=ds_insa";
        	if ( this.s_ipin.text !=  "" )
        	{
        		strArg = " Values1="+nexacro.wrapQuote(this.s_ipin.text);
        		this.gfn_TransactionP("s_insa", strUrl, strDs, strDs, strArg, "fnDis_insa", false, "P", false, this);
        		this.grid_view.updateToDataset();
        	}
        };

        this.s_custcd_onkillfocus = function(obj,e)
        {
        	var strUrl = "JSP/sd/sd8100_cust.jsp";
        	var strArg;
        	var strDs = "ds_cust=ds_cust";
        	if (( this.s_custgb.value !=  "" ) && ( this.s_custcd.value !=  "" ))
        	{
        		strArg = " Values1="+nexacro.wrapQuote(this.s_custgb.value)+
        	             " Values2="+nexacro.wrapQuote(this.s_custcd.value);
        	    this.gfn_TransactionP("s_cust", strUrl, strDs, strDs, strArg, "fnDis_cust", false, "P", false, this);
        	}
        };

        this.btn_juk_search_onclick = function(obj,e)
        {
        	this.lfn_showModal("juk_search", "", "sd::frmJukyo.xfdl", "fnJukSearchCallback", this, 0, 0, 590, 550);
        };

        this.fnJukSearchCallback = function(strID, ret)
        {
        	if(ret != null)
        	{
        		var gubun = ret.substr(0,3);
        		var name =  ret.substr(4,ret.length);

        		if(nexacro.trim(ret) != "0")
        		{
        			  this.ed_jukyocd.set_value(gubun);
        			  this.ed_jukyonm.set_value(name);
        			  this.ed_juk_nm.setFocus();
        		}
        		else
        		{
        			if(strID != "juk_keydown")
        			  this.ed_jukyocd.setFocus();
        		}
        	}
        }

        this.btn_cust_search2_onclick = function(obj,e)
        {
        	this.lfn_showModal("cust_search2", "", "sd::frmCustList.xfdl", "fnCustListCallback", this, 0, 0, 590, 550);
        };

        this.btn_ip_search1_onclick = function(obj,e)
        {
        	this.lfn_showModal("ipin_search1", "", "sd::frmsabun_list.xfdl", "fnipinSearchCallback", this, 0, 0, 492, 470);
        };

        this.fnipinSearchCallback = function(strID, ret)
        {
        	if(ret != null)
        	{
        		var gubun = ret.substr(0,6);
        		if(nexacro.trim(ret) != "0")
        		{
        			if(strID == "ipin_search1")
        			{
        				this.ed_ipin.set_value(gubun);
        				this.ed_ipin_onkillfocus();
        				this.ed_custgb.setFocus();
        			}
        			else if(strID == "ipin_search2")
        			{
        				this.s_ipin.set_value(gubun);
        				this.s_ipin_onkillfocus();
        				this.s_upno.setFocus();
        			}
        			else if(strID == "ipin_keydown")
        			{
        				this.ed_ipin.set_value(gubun);
        				this.ed_ipin_onkillfocus();
        				this.ed_custgb.setFocus();
        			}
        		}
        	}
        }
        this.btn_ip_search2_onclick = function(obj,e)
        {
        	this.lfn_showModal("ipin_search2", "", "sd::frmsabun_list.xfdl", "fnipinSearchCallback", this, 0, 0, 492, 470);
        };

        this.ed_bal_name_onkillfocus = function(obj,e)
        {
        	if ( this.ed_bal_name.text == "" )
        	{
        		alert("발행인 미등록");
        		this.ed_bal_name.setFocus();
        	}
        	if ( U_IUSW == "N" )
        	{
        		if  ( this.ed_bal_name.text == this.ed_n1.text )
        		{
        			this.ed_bal_saup.set_value(this.ed_n2.text);
        			this.ed_bal_jumin.set_value(this.ed_n3.text);
        			this.ed_jbank.setFocus();
        		}
        		if (( this.ed_bal_name.text != "" ) && ( this.ed_bal_name.text != this.ed_n1.text ))
        		{
        			this.ed_bae_name.set_value(this.ed_n1.text);
        		}
        	}
        	if ( U_IUSW == "Y" )
        	{
        //	if  ( ed_bal_name.text != O_BALNM )
        //	{
        		if  ( this.ed_bal_name.text == this.ed_n1.text )
        		{
        			this.ed_bal_saup.set_value(this.ed_n2.text);
        			this.ed_bal_jumin.set_value(this.ed_n3.text);
        			this.ed_bae_name.set_value("");
        			this.ed_jbank.setFocus();
        		}
        		if (( this.ed_bal_name.text != "" ) && ( this.ed_bal_name.text != this.ed_n1.text ))
        		{
        			this.ed_bae_name.set_value(this.ed_n1.text);
        		}
        //	}
        	}
        };

        this.ed_bae_name_onkillfocus = function(obj,e)
        {
        	if (( this.ed_custcd.value != "" ) && ( U_IUSW = "N" ))
        	{
        		if ( this.ed_upgb.value != "7" )
        		{
        			if (( this.ed_bal_name.text != this.ed_n1.text ) && ( this.ed_bae_name.text = "" ))
        			{
        				alert("배서인 미등록");
        				this.ed_bae_name.setFocus();
        			}
        			if (( this.ed_bal_name.text != this.ed_n1.text ) && ( this.ed_bae_name.text != "" ) && ( this.ed_bae_name.text != this.ed_n1.text ))
        			{
        				alert("배서인과 대표명과 틀림");
        				this.ed_bae_name.setFocus();
        			}
        		}
        	}
        };

        this.ed_mdate_onkillfocus = function(obj,e)
        {
        	if ((this.ed_upgb.value != "8") && ( F_chk == "N" ))
        	{
        		if ( this.ed_mdate.value == "" )
        		{
        			alert("만기일자 미등록");
        			this.ed_mdate.setFocus();
        		}
        	}

        	if (( this.ed_mdate.value != "" )  && ( this.ed_mdate.value < this.ed_sdate.value ))
        	{
        		alert("입금일자보다 만기일자가 이전일자 입니다!");
        		this.ed_mdate.setFocus();
        	}
        };

        this.ed_bal_saup_onkillfocus = function(obj,e)
        {
        	if(this.ed_bal_saup.text == "")
        	{
        	    alert("발행인 사업자번호 미등록");
        	    this.ed_bal_saup.setFocus();
        	}
        	if ((this.ed_bal_saup.text != "" ) && ((nexacro.trim(this.ed_bal_saup.value)).length != 10))
        	{
        		alert("사업자번호 오류입니다!");
        		return;
        	}
        };

        this.ed_bal_jumin_onkillfocus = function(obj,e)
        {
        	if(this.ed_bal_jumin.text == "")
        	{
        		alert("발행인 주민번호 미등록");
        		this.ed_bal_jumin.setFocus();
        	}
        };

        this.ed_upno_onkillfocus = function(obj,e)
        {
        	if ( this.ed_upno.value == "" )
        	{
        		alert("어음번호 미등록");
        		this.ed_upno.setFocus();
        	}
        	if (( U_IUSW == "N" ) || (( U_IUSW == "Y" ) && ( this.ed_upno.value != O_UPNO )))
        	{
        		if ( ( this.ed_upno.value != "" ) && ( this.ed_upgb.value != "7" ))
        		{
        			F_chk    = "N";
        			var strUrl = "JSP/sd/sd8100_dup.jsp";
        			var strArg;
        			var strDs 	= "ds_d8100=ds_d8100";
        			strArg = " Values1="+nexacro.wrapQuote(this.ed_upgb.value)+
        					 " Values2="+nexacro.wrapQuote(this.ed_upno.value);
        			this.gfn_TransactionP("Numcnt", strUrl, strDs, strDs, strArg, "fnDis_dup", false, "P", false, this);
        		}
        	}
        };

        this.fnDis_dup = function(strSvcID, nErrorCode, strErrorMag)
        {
            if ( this.ds_d8100.rowcount != 0 )
            {
        	    F_chk    = "Y";
                alert("데이타 중복");
                this.ed_upno.setFocus();
            }
        //    else this.ed_mdate.setFocus();
        }

        this.ed_jbank_onkillfocus = function(obj,e)
        {
        	if( this.ed_upgb.value != "7" )
        	{
        		if( this.ed_jbank.text == "" )
        		{
        			alert("지급은행 미등록");
        			this.ed_jbank.setFocus();
        		}
        	}
        };

        this.ed_sugm_onkillfocus = function(obj,e)
        {
        	if ((this.ed_upgb.value != "8") && ( this.ed_sugm.value == 0 ))
        	{
        	    alert("어음액 미등록");
        	    this.ed_sugm.setFocus();
        	}
        };

        this.ed_jbank_onsetfocus = function(obj,e)
        {
           if ( this.ed_upgb.value == "7" )
              this.ed_sugm.setFocus();
        };

        this.btn_save_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        		this.btn_save.click();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD8100F_onload,this);
            this.Static00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.grid_view.addEventHandler("oncelldblclick",this.grid_view_oncelldblclick,this);
            this.ed_sdate.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.btn_ip_search1.addEventHandler("onclick",this.btn_ip_search1_onclick,this);
            this.ed_ipin.addEventHandler("onkillfocus",this.ed_ipin_onkillfocus,this);
            this.ed_ipin.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.Static00_01_00_02_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_02_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.s_ipin.addEventHandler("onkillfocus",this.s_ipin_onkillfocus,this);
            this.s_ipin.addEventHandler("onkeydown",this.search_common_onkeydown,this);
            this.btn_ip_search2.addEventHandler("onclick",this.btn_ip_search2_onclick,this);
            this.s_sdate.addEventHandler("onkeydown",this.search_common_onkeydown,this);
            this.ed_jukyocd.addEventHandler("onkillfocus",this.ed_jukyocd_onkillfocus,this);
            this.ed_jukyocd.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.btn_juk_search.addEventHandler("onclick",this.btn_juk_search_onclick,this);
            this.ed_upgb.addEventHandler("canchange",this.ed_upgb_canchange,this);
            this.ed_upgb.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.cmb_upgb.addEventHandler("onitemchanged",this.cmb_upgb_onitemchanged,this);
            this.ed_upno.addEventHandler("onkillfocus",this.ed_upno_onkillfocus,this);
            this.ed_upno.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_bal_name.addEventHandler("onkillfocus",this.ed_bal_name_onkillfocus,this);
            this.ed_bal_name.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_bal_saup.addEventHandler("onkillfocus",this.ed_bal_saup_onkillfocus,this);
            this.ed_bal_saup.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_bal_jumin.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_bal_jumin.addEventHandler("onkillfocus",this.ed_bal_jumin_onkillfocus,this);
            this.ed_jbank.addEventHandler("onsetfocus",this.ed_jbank_onsetfocus,this);
            this.ed_jbank.addEventHandler("onkillfocus",this.ed_jbank_onkillfocus,this);
            this.ed_jbank.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_custgb.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_custgb.addEventHandler("onkillfocus",this.ed_custcd_onkillfocus,this);
            this.ed_custcd.addEventHandler("onkillfocus",this.ed_custcd_onkillfocus,this);
            this.ed_custcd.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.btn_cust_search1.addEventHandler("onclick",this.btn_cust_search1_onclick,this);
            this.ed_juk_nm.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_mdate.addEventHandler("onkillfocus",this.ed_mdate_onkillfocus,this);
            this.ed_bae_name.addEventHandler("onkillfocus",this.ed_bae_name_onkillfocus,this);
            this.ed_bae_name.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_sugm.addEventHandler("onkillfocus",this.ed_sugm_onkillfocus,this);
            this.ed_sugm.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.s_upno.addEventHandler("onkeydown",this.search_common_onkeydown,this);
            this.s_custgb.addEventHandler("onkeydown",this.search_common_onkeydown,this);
            this.s_custgb.addEventHandler("onkillfocus",this.s_custcd_onkillfocus,this);
            this.s_custcd.addEventHandler("onkillfocus",this.s_custcd_onkillfocus,this);
            this.s_custcd.addEventHandler("onkeydown",this.search_common_onkeydown,this);
            this.btn_cust_search2.addEventHandler("onclick",this.btn_cust_search2_onclick,this);
            this.ed_accgb.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_save.addEventHandler("onkeydown",this.btn_save_onkeydown,this);
            this.btn_can.addEventHandler("onclick",this.btn_can_onclick,this);
        };
        this.loadIncludeScript("SD8100F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
