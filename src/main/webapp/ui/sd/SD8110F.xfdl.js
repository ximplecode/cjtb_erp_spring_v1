(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD8110F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,1200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_ccode1", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK\">0</Col><Col id=\"CODE\">01</Col><Col id=\"NAME\">교판</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"CODE\">02</Col><Col id=\"NAME\">속셈</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_juk", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK\">0</Col><Col id=\"CODE\">271</Col><Col id=\"NAME\">2007년 1학기 선수금</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"CODE\">272</Col><Col id=\"NAME\">2007년 2학기 선수금</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cgbcust", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_SAUPNO\" type=\"STRING\" size=\"256\"/><Column id=\"F_DPNO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK\">0</Col><Col id=\"GUBN\">21</Col><Col id=\"GBNM\">교판</Col><Col id=\"CODE\">0143</Col><Col id=\"NAME\">(강남)천지</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"GUBN\">21</Col><Col id=\"GBNM\">교판</Col><Col id=\"CODE\">0144</Col><Col id=\"NAME\">(도봉)백서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rpt", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">일자별 수금현황</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">업체별 수금현황</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">적요별 수금현황</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"DATA\">만기일별 수금현황</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"DATA\">업체별 어음현황</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"DATA\">업체별 수금현황(월별)</Col></Row><Row><Col id=\"CODE\">7</Col><Col id=\"DATA\">업체별만기일별수금현황</Col></Row><Row><Col id=\"CODE\">8</Col><Col id=\"DATA\">업체별역송,역장현황</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"DATA\">업체별역송,연장집계</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"DATA\">일자별 수금현황+만기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_1", this);
            obj.set_keystring("G:+S_DATE");
            obj._setContents("<ColumnInfo><Column id=\"S_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JUN\" type=\"STRING\" size=\"256\"/><Column id=\"CGB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JUK2\" type=\"STRING\" size=\"256\"/><Column id=\"H_SUGM\" type=\"FLOAT\" size=\"256\"/><Column id=\"B_SUGM\" type=\"FLOAT\" size=\"256\"/><Column id=\"D_SUGM\" type=\"FLOAT\" size=\"256\"/><Column id=\"BM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BM_BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_2", this);
            obj.set_keystring("CUST_GB+CUST_CD");
            obj._setContents("<ColumnInfo><Column id=\"S_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JUN\" type=\"STRING\" size=\"256\"/><Column id=\"CGB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JUK2\" type=\"STRING\" size=\"256\"/><Column id=\"H_SUGM\" type=\"FLOAT\" size=\"256\"/><Column id=\"B_SUGM\" type=\"FLOAT\" size=\"256\"/><Column id=\"D_SUGM\" type=\"FLOAT\" size=\"256\"/><Column id=\"BM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BM_BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_3", this);
            obj.set_keystring("JUKYO_CD");
            obj._setContents("<ColumnInfo><Column id=\"S_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JUN\" type=\"STRING\" size=\"256\"/><Column id=\"CGB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JUKYO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUK1\" type=\"STRING\" size=\"256\"/><Column id=\"JUK2\" type=\"STRING\" size=\"256\"/><Column id=\"H_SUGM\" type=\"FLOAT\" size=\"256\"/><Column id=\"B_SUGM\" type=\"FLOAT\" size=\"256\"/><Column id=\"D_SUGM\" type=\"FLOAT\" size=\"256\"/><Column id=\"BM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BM_BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_4", this);
            obj.set_keystring("G:+BM_DATE");
            obj._setContents("<ColumnInfo><Column id=\"S_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JUN\" type=\"STRING\" size=\"256\"/><Column id=\"CGB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JUK2\" type=\"STRING\" size=\"256\"/><Column id=\"H_SUGM\" type=\"FLOAT\" size=\"256\"/><Column id=\"B_SUGM\" type=\"FLOAT\" size=\"256\"/><Column id=\"D_SUGM\" type=\"FLOAT\" size=\"256\"/><Column id=\"BM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BM_BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_5", this);
            obj.set_keystring("CUST_GB+CUST_CD");
            obj._setContents("<ColumnInfo><Column id=\"S_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JUN\" type=\"STRING\" size=\"256\"/><Column id=\"CGB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNM\" type=\"STRING\" size=\"256\"/><Column id=\"JUK2\" type=\"STRING\" size=\"256\"/><Column id=\"H_SUGM\" type=\"FLOAT\" size=\"256\"/><Column id=\"B_SUGM\" type=\"FLOAT\" size=\"256\"/><Column id=\"D_SUGM\" type=\"FLOAT\" size=\"256\"/><Column id=\"BM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BM_BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_6", this);
            obj.set_keystring("CG, CGB");
            obj._setContents("<ColumnInfo><Column id=\"CG\" type=\"STRING\" size=\"256\"/><Column id=\"CGB\" type=\"STRING\" size=\"256\"/><Column id=\"CGB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SYYMM\" type=\"STRING\" size=\"256\"/><Column id=\"H_SUGM\" type=\"FLOAT\" size=\"500\"/><Column id=\"B_SUGM\" type=\"FLOAT\" size=\"500\"/><Column id=\"D_SUGM\" type=\"FLOAT\" size=\"500\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_8", this);
            obj.set_keystring("CUST_GB+CUST_CD");
            obj._setContents("<ColumnInfo><Column id=\"S_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JUN\" type=\"STRING\" size=\"256\"/><Column id=\"CGB\" type=\"STRING\" size=\"256\"/><Column id=\"CGB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JUK2\" type=\"STRING\" size=\"256\"/><Column id=\"H_SUGM\" type=\"INT\" size=\"256\"/><Column id=\"B_SUGM\" type=\"INT\" size=\"256\"/><Column id=\"D_SUGM\" type=\"INT\" size=\"256\"/><Column id=\"BM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BM_BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_9", this);
            obj.set_keystring("CUST_GB+CUST_CD");
            obj._setContents("<ColumnInfo><Column id=\"S_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JUN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUKYO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUK1\" type=\"STRING\" size=\"256\"/><Column id=\"JUK2\" type=\"STRING\" size=\"256\"/><Column id=\"D_SUGM\" type=\"INT\" size=\"256\"/><Column id=\"BM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BM_BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_10", this);
            obj.set_keystring("CUST_GB+CUST_CD");
            obj._setContents("<ColumnInfo><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUKYO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUK1\" type=\"STRING\" size=\"256\"/><Column id=\"D_SUGM\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_11", this);
            obj.set_keystring("S_DATE");
            obj._setContents("<ColumnInfo><Column id=\"GB\" type=\"STRING\" size=\"256\"/><Column id=\"S_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JUN\" type=\"STRING\" size=\"256\"/><Column id=\"CGB\" type=\"STRING\" size=\"256\"/><Column id=\"CGB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JUKYO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUK1\" type=\"STRING\" size=\"256\"/><Column id=\"JUK2\" type=\"STRING\" size=\"256\"/><Column id=\"H_SUGM\" type=\"INT\" size=\"256\"/><Column id=\"B_SUGM\" type=\"INT\" size=\"256\"/><Column id=\"D_SUGM\" type=\"INT\" size=\"256\"/><Column id=\"BM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BM_BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","25","12","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("작업구간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","Static01:-2","12","290","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","25","88","127","263",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("업체코드(선택)");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00_00_00","Static06:-2","88","701","40",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid0","Static06:-2","Static00_01_00_00_00_00_00:-2","701","225",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_binddataset("ds_cgbcust");
            obj.set_autofittype("col");
            obj.set_autosizingtype("col");
            obj.set_border("2px solid #10aea9");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"80\"/><Column size=\"30\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"선택\" displaytype=\"text\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"GU\"/><Cell col=\"3\" text=\"코드\"/><Cell col=\"4\" text=\"거래처명\"/><Cell col=\"5\" text=\"사업자번호\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:GBNM\"/><Cell col=\"2\" text=\"bind:GUBN\"/><Cell col=\"3\" text=\"bind:CODE\"/><Cell col=\"4\" text=\"bind:NAME\"/><Cell col=\"5\" text=\"bind:F_SAUPNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","849","50","64","263",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("업체구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","1113","51","64","262",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("적요");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","849","12","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("적요코드");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ioyh00","Static08:-2","Static03:-2","204","263",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_binddataset("ds_juk");
            obj.set_autofittype("col");
            obj.set_border("2px solid #10aea9");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"40\"/><Column size=\"128\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"구분명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:CODE\"/><Cell col=\"2\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","849","311","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("출력물");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01_00_00","Static09:-2","311","405","40",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01","Static03:-2","12","405","40",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","436","12","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("업체구간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","Static02:-2","12","290","40",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","25","50","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("만기일자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","Static04:-2","50","290","40",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","436","50","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("출력구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","Static05:-2","50","290","40",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ioyh","Static07:-2","Static03:-2","204","263",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_binddataset("ds_ccode1");
            obj.set_autofittype("col");
            obj.set_border("2px solid #10aea9");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"36\"/><Column size=\"50\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"구분명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:CODE\"/><Cell col=\"2\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_work_symd","Static01:5","17","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","ed_work_symd:7","17","20","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_work_eymd","Static10:7","17","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_sgb","Static02:5","17","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_scode","ed_sgb:0","17","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_value("0000");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Hscust","ed_scode:2","23","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_egb","728","17","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_ecode","ed_egb:0","17","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_value("0000");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Hecust","ed_ecode:2","23","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","697","17","19","30",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_ssjuk","987","17","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("###");
            obj.set_type("string");
            obj.set_value("000");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","ed_ssjuk:15","17","19","30",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_esjuk","Static12:15","17","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("###");
            obj.set_type("string");
            obj.set_value("000");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_mature_symd","157","55","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","284","55","20","30",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_mature_eymd","311","55","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_dae","Static05:6","61","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("대체금액제외");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_scust","311","93","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_name","436","93","320","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","769","93","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("검색");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_print_select","Static09:5","316","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_rpt");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_text("일자별 출고현황");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_printview","1213","318","90","25",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("미리보기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print","1310","318","63","25",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("출력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","1.79%","387",null,"763","1.50%",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_formscrolltype("horizontal");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel","92.00%","355",null,"25","1.50%",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("엑셀변환");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_gymd","167","98","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("중지업체제외");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1400,1200,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD8110F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD8110F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD8110F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;

        this.SD8110F_onload = function(obj,e)
        {
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMdd");

        	var     u_yy;
        	var		i,j = 0;
        	var     u_yymm;
        	var     u_ym;
        	var     u_mm;
        	this.ed_work_eymd.set_value(Eco.date.addDate(f_date, -1));
        	u_yy           = f_date;
        	this.ed_work_symd.set_value(u_yy.substr(0,6) + "01");
        	this.ed_mature_symd.set_value("");
        	this.ed_mature_eymd.set_value("");
            this.ed_sgb.set_value("20");
            this.ed_scode.set_value("0000");
            this.ed_egb.set_value("39");
            this.ed_ecode.set_value("9999");
            this.ed_ssjuk.set_value("000");
            this.ed_esjuk.set_value("999");
        	this.C_gymd.set_value("1");

        	var strUrl = "JSP/sd/sel_ccode1.jsp";
        	var strArg 	= "" ;
        	var strDs 	= "ds_ccode1=ds_ccode1";

        	this.gfn_TransactionP("select", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);

        	strUrl = "JSP/sd/sel_juk.jsp";
        	strArg 	= "" ;
        	strDs 	= "ds_juk=ds_juk";

        	this.gfn_TransactionP("select", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        };

        this.fnCallback = function(svcid, errCode, errMsg)
        {
        	if(svcid == "select")
        	{
        		var objDate = new nexacro.Date();
        		var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMddhhmmss");
        		if(errCode != 0)
        			trace("[PD160_SearchF.fnCallBack(" + f_date + ")] " + svcid +"::"+ errMsg );
        		else
        		{
        			trace('succ');
        		}
        	}
        }
        this.btn_search_onclick = function(obj,e)
        {
            var U_cgb, U_code, U_name, U_egb, U_jumin, U_gymd;
            var Find_sw = "N";
            U_code = this.ed_scust.text;
            if ( this.ed_scust.text == "" )
        		U_code = "All";
        	U_name   = this.ed_name.text;
            if ( this.ed_name.text == "" )
        		U_name = "All";
        	var  i = 0;
        	var  j = 0;
        	for( i = 0 ; i < this.ds_ccode1.rowcount; i++ )
        	{
        		if ( this.ds_ccode1.getColumn(i, "CHK") == "1" )
        		{
        			Find_sw = "Y";
        		}
        	}
        	U_cgb = "";
        	U_egb = "";
        	if ( Find_sw == "N" )
            {
        		U_cgb = this.ed_scust.text.substr(0,2);
        		U_code = this.ed_scust.text.substr(2,4);
        		if ( U_code == "" )
        		{
        			U_code = "All";
        		}
            }
        	if ( Find_sw == "Y" )
            {
               for( i = 0 ; i < this.ds_ccode1.rowcount; i++ )
            	{
        			if (( Find_sw == "Y"  ) && ( this.ds_ccode1.getColumn(i, "CHK") == "1" ))
        			{
        				U_egb = this.ds_ccode1.getColumn(i, "CODE");
        				Find_sw  = "N";
        			}
             	}
            }
            U_gymd = "";
            if ( this.C_gymd.value == "1" )
        		U_gymd = "1";
        	U_jumin = "";
        	var strUrl = "JSP/sd/sel_cust.jsp";
        //	var strArg 	= "Gubn="+ quote(U_gb) + " Code=" + quote(U_code)  + " Name='"+Ed_NAME.Text +"'" + " Egb='"+U_egb +"'";
        	var strArg 	= "Cgb='"+ U_cgb + "'"+ " Code='" + U_code + "'" + " Name='" + U_name + "'" + " Egb= '" + U_egb + "'" + " Fjumin= '" + U_jumin + "'" + " Eymd= '" + U_gymd + "'";
        	var strDs = "ds_cgbcust=ds_cgbcust";
        	this.gfn_TransactionP("select", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        };

        this.btn_Hcust_onclick = function(obj,e)
        {
        	this.lfn_showModal(obj.name, "", "sd::frmCustList.xfdl", "fnCustlistCallBack", this, 0, 0, 590, 555);
        };

        this.fnCustlistCallBack = function(strID, ret)
        {
        	if(ret == null)
        		return;

        	var gubun = ret.substr(0,2);
        	var code =  ret.substr(3,4);

        	if(nexacro.trim(ret) != "0"){
        		if (strID == "btn_Hscust") {
        			this.ed_sgb.set_value(gubun);
        			this.ed_scode.set_value(code);
        		}
        		else if (strID = "btn_Hecust") {
        			this.ed_egb.set_value(gubun);
        			this.ed_ecode.set_value(code);
        		}
        	}
        }
        this.btn_printview_onclick = function(obj,e)
        {
        	var  Find1_sw   = "N";
        	var  Find2_sw   = "N";
        	var  Find3_sw   = "N";
        	var  Line_sw    = "N";
        	var  Dol_cust;
        	var  Sd_sql, Sd_sql1, Sd_sql2, Sd_sql3, Sd_sql4, Sd_sql5, Sd_sql6;
        	var  rdfile;
        	var  i = 0;
        	Sd_sql    =   "";
        	Sd_sql1   =   "";
        	Sd_sql2   =   "";
        	Sd_sql3   =   "";
        	for( i = 0 ; i < this.ds_ccode1.rowcount ; i++ )
        	{
        	    if ( this.ds_ccode1.getColumn(i, "CHK") == "1" )
        		{
        			Find1_sw   = "Y";
        		}
        	}
        	for( i = 0 ; i < this.ds_juk.rowcount ; i++ )
        	{
        	    if ( this.ds_juk.getColumn(i, "CHK") == "1" )
        		{
        			Find2_sw   = "Y";
        		}
        	}
        	for( i = 0 ; i < this.ds_cgbcust.rowcount ; i++ )
        	{
        	    if ( this.ds_cgbcust.getColumn(i, "CHK") == "1" )
        		{
        			Find3_sw   = "Y";
        		}
        	}
        	if (( this.cmb_print_select.index != 5 ) && ( this.cmb_print_select.index != 6 ))
        	{
        		Sd_sql     =  "    and a.S_DATE >= '" + this.ed_work_symd.value +"'";
        		Sd_sql     = Sd_sql + "    and  a.S_DATE <= '" + this.ed_work_eymd.value +"'";
        		Line_Sw    = "Y";
        		if ( Find3_sw == "Y" )
        		{
        			Sd_sql    = Sd_sql + "    and  A.cust_gb || A.cust_cd in (  ";
        			for( i = 0 ; i < this.ds_cgbcust.rowcount ; i++ )
        			{
        				if (( Line_Sw == "Y"  ) && ( this.ds_cgbcust.getColumn(i, "CHK") == "1" ))
        				{
        					Dol_cust  =  "'" + this.ds_cgbcust.getColumn(i, "GUBN") + this.ds_cgbcust.getColumn(i, "CODE") + "'";
        					Sd_sql    = Sd_sql +  Dol_cust;
        					Line_Sw   = "N";
        				}
        				else if (( Line_Sw == "N"  ) && ( this.ds_cgbcust.getColumn(i, "CHK") == "1" ))
        				{
        					Dol_cust  =  ",'" + this.ds_cgbcust.getColumn(i, "GUBN") + this.ds_cgbcust.getColumn(i, "CODE") + "'";
        					Sd_sql    = Sd_sql +  Dol_cust;
        				}
        			}
        			Sd_sql    = Sd_sql + "    )  ";
        		}
        		else if ( Find3_sw == "N" )
        		{
        			Sd_sql    = Sd_sql + "   and a.cust_gb  >= '" + this.ed_sgb.value +"'";
        			Sd_sql    = Sd_sql + "   and a.cust_gb <= '" + this.ed_egb.value +"'";
        			Sd_sql    = Sd_sql + "   and a.cust_cd  >= '" + this.ed_scode.value +"'";
        			Sd_sql    = Sd_sql + "   and a.cust_cd <= '" + this.ed_ecode.value +"'";
        		}
        		Line_Sw    = "Y";
        		if ( Find1_sw == "Y" )
        		{
        			Sd_sql    = Sd_sql + "    and  b.cgb in (  ";
        			for( i = 0 ; i < this.ds_ccode1.rowcount ; i++ )
        			{
        				if (( Line_Sw == "Y"  ) && ( this.ds_ccode1.getColumn(i, "CHK") == "1" ))
        				{
        					Sd_sql    = Sd_sql +  "'" +  this.ds_ccode1.getColumn(i, "CODE") + "'";
        					Line_Sw   = "N";
        				}
        				else if (( Line_Sw == "N"  ) && ( this.ds_ccode1.getColumn(i, "CHK") == "1" ))
        				{
        					Sd_sql    = Sd_sql +  ",'" +  this.ds_ccode1.getColumn(i, "CODE") + "'";
        				}
        			}
        			Sd_sql    = Sd_sql + "    )  ";
        		}

        		Line_Sw    = "Y";
        		if ( Find2_sw == "Y" )
        		{
        			Sd_sql    = Sd_sql + "    and  A.JUKYO_CD in (  ";
        			for( i = 0 ; i < this.ds_juk.rowcount ; i++ )
        			{
        				if (( Line_Sw == "Y"  ) && ( this.ds_juk.getColumn(i, "CHK") == "1" ))
        				{
        					Sd_sql    = Sd_sql +  "'" +  this.ds_juk.getColumn(i, "CODE") + "'";
        					Line_Sw   = "N";
        				}
        				else if (( Line_Sw == "N"  ) && ( this.ds_juk.getColumn(i, "CHK") == "1" ))
        				{
        					Sd_sql    = Sd_sql +  ",'" +  this.ds_juk.getColumn(i, "CODE") + "'";
        				}
        			}
        			Sd_sql    = Sd_sql + "    )  ";
        		}
        		else if ( Find2_sw == "N" )
        		{
        			Sd_sql    = Sd_sql + "   and A.JUKYO_CD  >= '" + this.ed_ssjuk.value +"'";
        			Sd_sql    = Sd_sql + "   and A.JUKYO_CD  <= '" + this.ed_esjuk.value +"'";
        		}
        		if (( this.ed_mature_symd.value != "" ) || ( this.ed_mature_eymd.value != "" ))
        		{
        			Sd_sql    = Sd_sql + "   and A.BM_DATE  >= '" + this.ed_mature_symd.value +"'";
        			Sd_sql    = Sd_sql + "   and A.BM_DATE  <= '" + this.ed_mature_eymd.value +"'";
        		}
        		if (this.C_dae.value == 1)
        		{
        			Sd_sql    = Sd_sql + "   AND ( A.H_SUGM <> 0  or   A.B_SUGM <> 0 ) ";
        		}

        //=====================Sd_sql3
        		Sd_sql3    =  "    and a.S_DATE <= '" + this.ed_work_eymd.value +"'";
        		Sd_sql3    = Sd_sql3 + "    and  a.BM_DATE >= '" + this.ed_work_symd.value +"'";
        		Sd_sql3    = Sd_sql3 + "    and  a.BM_DATE <= '" + this.ed_work_eymd.value +"'";
        		Line_Sw    = "Y";
        		if ( Find3_sw == "Y" )
        		{
        			Sd_sql3    = Sd_sql3 + "    and  A.cust_gb || A.cust_cd in (  ";
        			for( i = 0 ; i < this.ds_cgbcust.rowcount ; i++ )
        			{
        				if (( Line_Sw == "Y"  ) && ( this.ds_cgbcust.getColumn(i, "CHK") == "1" ))
        				{
        					Dol_cust  =  "'" + this.ds_cgbcust.getColumn(i, "GUBN") + this.ds_cgbcust.getColumn(i, "CODE") + "'";
        					Sd_sql3    = Sd_sql3 +  Dol_cust;
        					Line_Sw   = "N";
        				}
        				else if (( Line_Sw == "N"  ) && ( this.ds_cgbcust.getColumn(i, "CHK") == "1" ))
        				{
        					Dol_cust  =  ",'" + this.ds_cgbcust.getColumn(i, "GUBN") + this.ds_cgbcust.getColumn(i, "CODE") + "'";
        					Sd_sql3    = Sd_sql3 +  Dol_cust;
        				}
        			}
        			Sd_sql3    = Sd_sql3 + "    )  ";
        		}
        		else if ( Find3_sw == "N" )
        		{
        			Sd_sql3    = Sd_sql3 + "   and a.cust_gb  >= '" + this.ed_sgb.value +"'";
        			Sd_sql3    = Sd_sql3 + "   and a.cust_gb <= '" + this.ed_egb.value +"'";
        			Sd_sql3    = Sd_sql3 + "   and a.cust_cd  >= '" + this.ed_scode.value +"'";
        			Sd_sql3    = Sd_sql3 + "   and a.cust_cd <= '" + this.ed_ecode.value +"'";
        		}
        		Line_Sw    = "Y";
        		if ( Find1_sw == "Y" )
        		{
        			Sd_sql3    = Sd_sql3 + "    and  b.cgb in (  ";
        			for( i = 0 ; i < this.ds_ccode1.rowcount ; i++ )
        			{
        				if (( Line_Sw == "Y"  ) && ( this.ds_ccode1.getColumn(i, "CHK") == "1" ))
        				{
        					Sd_sql3    = Sd_sql3 +  "'" +  this.ds_ccode1.getColumn(i, "CODE") + "'";
        					Line_Sw   = "N";
        				}
        				else if (( Line_Sw == "N"  ) && ( this.ds_ccode1.getColumn(i, "CHK") == "1" ))
        				{
        					Sd_sql3    = Sd_sql3 +  ",'" +  this.ds_ccode1.getColumn(i, "CODE") + "'";
        				}
        			}
        			Sd_sql3    = Sd_sql3 + "    )  ";
        		}

        		Line_Sw    = "Y";
        		if ( Find2_sw == "Y" )
        		{
        			Sd_sql3    = Sd_sql3 + "    and  A.JUKYO_CD in (  ";
        			for( i = 0 ; i < this.ds_juk.rowcount ; i++ )
        			{
        				if (( Line_Sw == "Y"  ) && ( this.ds_juk.getColumn(i, "CHK") == "1" ))
        				{
        					Sd_sql3    = Sd_sql3 +  "'" +  this.ds_juk.getColumn(i, "CODE") + "'";
        					Line_Sw   = "N";
        				}
        				else if (( Line_Sw == "N"  ) && ( this.ds_juk.getColumn(i, "CHK") == "1" ))
        				{
        					Sd_sql3    = Sd_sql3 +  ",'" +  this.ds_juk.getColumn(i, "CODE") + "'";
        				}
        			}
        			Sd_sql3    = Sd_sql3 + "    )  ";
        		}
        		else if ( Find2_sw == "N" )
        		{
        			Sd_sql3    = Sd_sql3 + "   and A.JUKYO_CD  >= '" + this.ed_ssjuk.value +"'";
        			Sd_sql3    = Sd_sql3 + "   and A.JUKYO_CD  <= '" + this.ed_esjuk.value +"'";
        		}
        		if (( this.ed_mature_symd.value != "" ) || ( this.ed_mature_eymd.value != "" ))
        		{
        			Sd_sql3    = Sd_sql3 + "   and A.BM_DATE  >= '" + this.ed_mature_symd.value +"'";
        			Sd_sql3    = Sd_sql3 + "   and A.BM_DATE  <= '" + this.ed_mature_eymd.value +"'";
        		}
        		if (this.C_dae.value == 1)
        		{
        			Sd_sql3    = Sd_sql3 + "   AND ( A.H_SUGM <> 0  or   A.B_SUGM <> 0 ) ";
        		}

        	//=====================Sd_sql1
        		Sd_sql1     =  "    and a.S_DATE >= '" + this.ed_work_symd.value +"'";
        		Sd_sql1     = Sd_sql1 + "    and  a.S_DATE <= '" + this.ed_work_eymd.value +"'";
        		Line_Sw    = "Y";
        		if ( Find3_sw == "Y" )
        		{
        			Sd_sql1    = Sd_sql1 + "    and  A.cust_gb || A.cust_cd in (  ";
        			for( i = 0 ; i < this.ds_cgbcust.rowcount ; i++ )
        			{
        				if (( Line_Sw == "Y"  ) && ( this.ds_cgbcust.getColumn(i, "CHK") == "1" ))
        				{
        					Dol_cust  =  "'" + this.ds_cgbcust.getColumn(i, "GUBN") + this.ds_cgbcust.getColumn(i, "CODE") + "'";
        					Sd_sql1    = Sd_sql1 +  Dol_cust;
        					Line_Sw   = "N";
        				}
        				else if (( Line_Sw == "N"  ) && ( this.ds_cgbcust.getColumn(i, "CHK") == "1" ))
        				{
        					Dol_cust  =  ",'" + this.ds_cgbcust.getColumn(i, "GUBN") + this.ds_cgbcust.getColumn(i, "CODE") + "'";
        					Sd_sql1    = Sd_sql1 +  Dol_cust;
        				}
        			}
        			Sd_sql1    = Sd_sql1 + "    )  ";
        		}
        		else if ( Find3_sw == "N" )
        		{
        			Sd_sql1    = Sd_sql1 + "   and a.cust_gb  >= '" + this.ed_sgb.value +"'";
        			Sd_sql1    = Sd_sql1 + "   and a.cust_gb <= '" + this.ed_egb.value +"'";
        			Sd_sql1    = Sd_sql1 + "   and a.cust_cd  >= '" + this.ed_scode.value +"'";
        			Sd_sql1    = Sd_sql1 + "   and a.cust_cd <= '" + this.ed_ecode.value +"'";
        		}
        		Line_Sw    = "Y";
        		if ( Find1_sw == "Y" )
        		{
        			Sd_sql1    = Sd_sql1 + "    and  b.cgb in (  ";
        			for( i = 0 ; i < this.ds_ccode1.rowcount ; i++ )
        			{
        				if (( Line_Sw == "Y"  ) && ( this.ds_ccode1.getColumn(i, "CHK") == "1" ))
        				{
        					Sd_sql1    = Sd_sql1 +  "'" +  this.ds_ccode1.getColumn(i, "CODE") + "'";
        					Line_Sw   = "N";
        				}
        				else if (( Line_Sw == "N"  ) && ( this.ds_ccode1.getColumn(i, "CHK") == "1" ))
        				{
        					Sd_sql1    = Sd_sql1 +  ",'" +  this.ds_ccode1.getColumn(i, "CODE") + "'";
        				}
        			}
        			Sd_sql1    = Sd_sql1 + "    )  ";
        		}

        		Line_Sw    = "Y";
        		if ( Find2_sw == "Y" )
        		{
        			Sd_sql1    = Sd_sql1 + "    and  A.JUKYO_CD in (  ";
        			for( i = 0 ; i < this.ds_juk.rowcount ; i++ )
        			{
        				if (( Line_Sw == "Y"  ) && ( this.ds_juk.getColumn(i, "CHK") == "1" ))
        				{
        					Sd_sql1    = Sd_sql1 +  "'" +  this.ds_juk.getColumn(i, "CODE") + "'";
        					Line_Sw   = "N";
        				}
        				else if (( Line_Sw == "N"  ) && ( this.ds_juk.getColumn(i, "CHK") == "1" ))
        				{
        					Sd_sql1    = Sd_sql1 +  ",'" +  this.ds_juk.getColumn(i, "CODE") + "'";
        				}
        			}
        			Sd_sql1    = Sd_sql1 + "    )  ";
        		}
        		else if ( Find2_sw == "N" )
        		{
        			Sd_sql1    = Sd_sql1 + "   and A.JUKYO_CD  >= '" + this.ed_ssjuk.value +"'";
        			Sd_sql1    = Sd_sql1 + "   and A.JUKYO_CD  <= '" + this.ed_esjuk.value +"'";
        		}
        		if (( this.ed_mature_symd.value != "" ) || ( this.ed_mature_eymd.value != "" ))
        		{
        			Sd_sql1    = Sd_sql1 + "   and A.BM_DATE  >= '" + this.ed_mature_symd.value +"'";
        			Sd_sql1    = Sd_sql1 + "   and A.BM_DATE  <= '" + this.ed_mature_eymd.value +"'";
        		}
        		if (this.C_dae.value == 1)
        		{
        			Sd_sql1    = Sd_sql1 + "   AND ( A.H_SUGM <> 0  or   A.B_SUGM <> 0 ) ";
        		}
        	}
        	else if (( this.cmb_print_select.index == 5 ) || ( this.cmb_print_select.index == 6 ))
        	{
        		Sd_sql2   = "   where syymm >= '" + this.ed_work_symd.value.substr(0,6) +"'";
        		Sd_sql2   = Sd_sql2 + "    and  syymm <= '" + this.ed_work_eymd.value.substr(0,6) +"'";

        		Sd_sql    =  "    and a.S_DATE >= '" + this.ed_work_symd.value +"'";
        		Sd_sql    = Sd_sql + "    and  a.S_DATE <= '" + this.ed_work_eymd.value +"'";
        		Line_Sw   = "Y";
        		if ( Find3_sw == "Y" )
        		{
        			Sd_sql    = Sd_sql + "    and  A.cust_gb || A.cust_cd in (  ";
        			for( i = 0 ; i < this.ds_cgbcust.rowcount ; i++ )
        			{
        				if (( Line_Sw == "Y"  ) && ( this.ds_cgbcust.getColumn(i, "CHK") == "1" ))
        				{
        					Dol_cust  =  "'" + this.ds_cgbcust.getColumn(i, "GUBN") + this.ds_cgbcust.getColumn(i, "CODE") + "'";
        					Sd_sql    = Sd_sql +  Dol_cust;
        					Line_Sw   = "N";
        				}
        				else if (( Line_Sw == "N"  ) && ( this.ds_cgbcust.getColumn(i, "CHK") == "1" ))
        				{
        					Dol_cust  =  ",'" + this.ds_cgbcust.getColumn(i, "GUBN") + this.ds_cgbcust.getColumn(i, "CODE") + "'";
        					Sd_sql    = Sd_sql +  Dol_cust;
        				}
        			}
        			Sd_sql    = Sd_sql + "    )  ";
        		}
        		else if ( Find3_sw == "N" )
        		{
        			Sd_sql    = Sd_sql + "   and a.cust_gb  >= '" + this.ed_sgb.value +"'";
        			Sd_sql    = Sd_sql + "   and a.cust_gb <= '" + this.ed_egb.value +"'";
        			Sd_sql    = Sd_sql + "   and a.cust_cd  >= '" + this.ed_scode.value +"'";
        			Sd_sql    = Sd_sql + "   and a.cust_cd <= '" + this.ed_ecode.value +"'";
        		}
        		Line_Sw    = "Y";
        		if ( Find1_sw == "Y" )
        		{
        			Sd_sql    = Sd_sql + "    and  b.cgb in (  ";
        			for( i = 0 ; i < this.ds_ccode1.rowcount ; i++ )
        			{
        				if (( Line_Sw == "Y"  ) && ( this.ds_ccode1.getColumn(i, "CHK") == "1" ))
        				{
        					Sd_sql    = Sd_sql +  "'" +  this.ds_ccode1.getColumn(i, "CODE") + "'";
        					Line_Sw   = "N";
        				}
        				else if (( Line_Sw == "N"  ) && ( this.ds_ccode1.getColumn(i, "CHK") == "1" ))
        				{
        					Sd_sql    = Sd_sql +  ",'" +  this.ds_ccode1.getColumn(i, "CODE") + "'";
        				}
        			}
        			Sd_sql    = Sd_sql + "    )  ";
        		}
        		Line_Sw    = "Y";
        		if ( Find2_sw == "Y" )
        		{
        			Sd_sql    = Sd_sql + "    and  A.JUKYO_CD in (  ";
        			for( i = 0 ; i < this.ds_juk.rowcount ; i++ )
        			{
        				if (( Line_Sw == "Y"  ) && ( this.ds_juk.getColumn(i, "CHK") == "1" ))
        				{
        					Sd_sql    = Sd_sql +  "'" +  this.ds_juk.getColumn(i, "CODE") + "'";
        					Line_Sw   = "N";
        				}
        				else if (( Line_Sw == "N"  ) && ( this.ds_juk.getColumn(i, "CHK") == "1" ))
        				{
        					Sd_sql    = Sd_sql +  ",'" +  this.ds_juk.getColumn(i, "CODE") + "'";
        				}
        			}
        			Sd_sql    = Sd_sql + "    )  ";
        		}
        		else if ( Find2_sw == "N" )
        		{
        			Sd_sql    = Sd_sql + "   and A.JUKYO_CD  >= '" + this.ed_ssjuk.value +"'";
        			Sd_sql    = Sd_sql + "   and A.JUKYO_CD  <= '" + this.ed_esjuk.value +"'";
        		}
        		if (( this.ed_mature_symd.value != "" ) || ( this.ed_mature_eymd.value != "" ))
        		{
        			Sd_sql    = Sd_sql + "   and A.BM_DATE  >= '" + this.ed_mature_symd.value +"'";
        			Sd_sql    = Sd_sql + "   and A.BM_DATE  <= '" + this.ed_mature_eymd.value +"'";
        		}
        		if (this.C_dae.value == 1)
        		{
        			Sd_sql    = Sd_sql + "   AND ( A.H_SUGM <> 0  or   A.B_SUGM <> 0 ) ";
        		}
        //=====================Sd_sql1
        		Sd_sql1     =  "    and a.S_DATE >= '" + this.ed_work_symd.value +"'";
        		Sd_sql1     = Sd_sql1 + "    and  a.S_DATE <= '" + this.ed_work_eymd.value +"'";
        		Line_Sw    = "Y";
        		if ( Find3_sw == "Y" )
        		{
        			Sd_sql1    = Sd_sql1 + "    and  A.cust_gb || A.cust_cd in (  ";
        			for( i = 0 ; i < this.ds_cgbcust.rowcount ; i++ )
        			{
        				if (( Line_Sw == "Y"  ) && ( this.ds_cgbcust.getColumn(i, "CHK") == "1" ))
        				{
        					Dol_cust  =  "'" + this.ds_cgbcust.getColumn(i, "GUBN") + this.ds_cgbcust.getColumn(i, "CODE") + "'";
        					Sd_sql1    = Sd_sql1 +  Dol_cust;
        					Line_Sw   = "N";
        				}
        				else if (( Line_Sw == "N"  ) && ( this.ds_cgbcust.getColumn(i, "CHK") == "1" ))
        				{
        					Dol_cust  =  ",'" + this.ds_cgbcust.getColumn(i, "GUBN") + this.ds_cgbcust.getColumn(i, "CODE") + "'";
        					Sd_sql1    = Sd_sql1 +  Dol_cust;
        				}
        			}
        			Sd_sql1    = Sd_sql1 + "    )  ";
        		}
        		else if ( Find3_sw == "N" )
        		{
        			Sd_sql1    = Sd_sql1 + "   and a.cust_gb  >= '" + this.ed_sgb.value +"'";
        			Sd_sql1    = Sd_sql1 + "   and a.cust_gb <= '" + this.ed_egb.value +"'";
        			Sd_sql1    = Sd_sql1 + "   and a.cust_cd  >= '" + this.ed_scode.value +"'";
        			Sd_sql1    = Sd_sql1 + "   and a.cust_cd <= '" + this.ed_ecode.value +"'";
        		}
        		Line_Sw    = "Y";
        		if ( Find1_sw == "Y" )
        		{
        			Sd_sql1    = Sd_sql1 + "    and  b.cgb in (  ";
        			for( i = 0 ; i < this.ds_ccode1.rowcount ; i++ )
        			{
        				if (( Line_Sw == "Y"  ) && ( this.ds_ccode1.getColumn(i, "CHK") == "1" ))
        				{
        					Sd_sql1    = Sd_sql1 +  "'" +  this.ds_ccode1.getColumn(i, "CODE") + "'";
        					Line_Sw   = "N";
        				}
        				else if (( Line_Sw == "N"  ) && ( this.ds_ccode1.getColumn(i, "CHK") == "1" ))
        				{
        					Sd_sql1    = Sd_sql1 +  ",'" +  this.ds_ccode1.getColumn(i, "CODE") + "'";
        				}
        			}
        			Sd_sql1    = Sd_sql1 + "    )  ";
        		}

        		Line_Sw    = "Y";
        		if ( Find2_sw == "Y" )
        		{
        			Sd_sql1    = Sd_sql1 + "    and  A.JUKYO_CD in (  ";
        			for( i = 0 ; i < this.ds_juk.rowcount ; i++ )
        			{
        				if (( Line_Sw == "Y"  ) && ( this.ds_juk.getColumn(i, "CHK") == "1" ))
        				{
        					Sd_sql1    = Sd_sql1 +  "'" +  this.ds_juk.getColumn(i, "CODE") + "'";
        					Line_Sw   = "N";
        				}
        				else if (( Line_Sw == "N"  ) && ( this.ds_juk.getColumn(i, "CHK") == "1" ))
        				{
        					Sd_sql1    = Sd_sql1 +  ",'" +  this.ds_juk.getColumn(i, "CODE") + "'";
        				}
        			}
        			Sd_sql1    = Sd_sql1 + "    )  ";
        		}
        		else if ( Find2_sw == "N" )
        		{
        			Sd_sql1    = Sd_sql1 + "   and A.JUKYO_CD  >= '" + this.ed_ssjuk.value +"'";
        			Sd_sql1    = Sd_sql1 + "   and A.JUKYO_CD  <= '" + this.ed_esjuk.value +"'";
        		}
        		if (( this.ed_mature_symd.value != "" ) || ( this.ed_mature_eymd.value != "" ))
        		{
        			Sd_sql1    = Sd_sql1 + "   and A.BM_DATE  >= '" + this.ed_mature_symd.value +"'";
        			Sd_sql1    = Sd_sql1 + "   and A.BM_DATE  <= '" + this.ed_mature_eymd.value +"'";
        		}
        		if (this.C_dae.value == 1)
        		{
        			Sd_sql1    = Sd_sql1 + "   AND ( A.H_SUGM <> 0  or   A.B_SUGM <> 0 ) ";
        		}
        	}
        	// 미리보기 변수
        	var strArg = "s_sql1="+nexacro.wrapQuote(Sd_sql1)+
        				 "s_sql2="+nexacro.wrapQuote(Sd_sql3)+
        				 "s_sql="+nexacro.wrapQuote(Sd_sql);

        	// 출력 변수
        	var rdopt  = "/rp ["+this.ed_work_symd.value+"]" +
        	                 "["+this.ed_work_eymd.value+"]" +
        					 "["+this.ed_sgb.value + this.ed_scode.value+"]" +
        					 "["+this.ed_egb.value + this.ed_ecode.value+"]" +
        					 "["+Sd_sql+"]" +
        					 "["+Sd_sql1+"]" +
        					 "["+Sd_sql2+"]" +
        					 "["+Sd_sql3+"]";  //속성코드 자리
        	/*
        	if  ( this.cmb_print_select.index == 0 )
            {
        		rdfile = gv_urlMrd+"/sd/SD8110r.mrd";
            }
            else
            if  ( this.cmb_print_select.index == 1 )
            {
        		rdfile = gv_urlMrd+"/sd/SD8111r.mrd";
            }
            else
            if  ( this.cmb_print_select.index == 2 )
            {
        		rdfile = gv_urlMrd+"/sd/SD8112r.mrd";
            }
            else
            if  ( this.cmb_print_select.index == 3 )
            {
        		rdfile = gv_urlMrd+"/sd/SD8113r.mrd";
            }
            else
            if  ( this.cmb_print_select.index == 4 )
            {
        		rdfile = gv_urlMrd+"/sd/SD8114r.mrd";
            }
            else
            if  ( this.cmb_print_select.index == 5 )
            {
        		rdfile = gv_urlMrd+"/sd/SD8115R.mrd";
            }
            else
            if  ( this.cmb_print_select.index == 6 )
            {
        		rdfile = gv_urlMrd+"/sd/SD8116R.mrd";
            }
            else
            if  ( this.cmb_print_select.index == 7 )
            {
        		rdfile = gv_urlMrd+"/sd/SD8117r.mrd";
            }
            else
            if  ( this.cmb_print_select.index == 8 )
            {
        		rdfile = gv_urlMrd+"/sd/SD8118r.mrd";
            }
            else
            if  ( this.cmb_print_select.index == 9 )
            {
        		rdfile = gv_urlMrd+"/sd/SD8119r.mrd";
            }
            else
            if  ( this.cmb_print_select.index == 10 )
            {
        		rdfile = gv_urlMrd+"/sd/SD8110r_t.mrd";
            }
        	*/

        	//this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "mk::MKRDF.xfdl", "", this, 0, 0, 1400, 760);



        	switch(this.cmb_print_select.index)
        	{
        		case 0:
        			if(obj.name == "btn_printview" ) // 미리보기 일때
        			{
        				var strDs = "ds_1=ds_1";
        				this.Div00.set_url("sd::SD8110F_GRID1.xfdl");
        				this.gfn_TransactionP("ds_1","JSP/sd/SD8110F_DS1_SELECT.jsp", strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        			}
        			else if(obj.name == "btn_print")
        			{
        				rdfile = gv_urlMrd+"/sd/SD8110r.mrd";
        				this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "mk::MKRDF.xfdl", "", this, 0, 0, 1400, 760);
        			}
        			break;
        		case 1:
        			if(obj.name == "btn_printview" ) // 미리보기 일때
        			{
        				var strDs = "ds_2=ds_2";
        				this.Div00.set_url("sd::SD8110F_GRID2.xfdl");
        				this.gfn_TransactionP("ds_2","JSP/sd/SD8110F_DS2_SELECT.jsp", strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        			}
        			else if(obj.name == "btn_print")
        			{
        				rdfile = gv_urlMrd+"/sd/SD8111r.mrd";
        				this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "sd::SDRDF.xfdl", "", this, 0, 0, 1400, 760);
        			}
        			break;
        		case 2:
        			if(obj.name == "btn_printview" ) // 미리보기 일때
        			{
        				var strDs = "ds_3=ds_3";
        				this.Div00.set_url("sd::SD8110F_GRID3.xfdl");
        				this.gfn_TransactionP("ds_3","JSP/sd/SD8110F_DS3_SELECT.jsp", strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        			}
        			else if(obj.name == "btn_print")
        			{
        				rdfile = gv_urlMrd+"/sd/SD8112r.mrd";
        				this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "sd::SDRDF.xfdl", "", this, 0, 0, 1400, 760);
        			}
        			break;
        		case 3:
        			if(obj.name == "btn_printview" ) // 미리보기 일때
        			{
        				var strDs = "ds_4=ds_4";
        				this.Div00.set_url("sd::SD8110F_GRID4.xfdl");
        				this.gfn_TransactionP("ds_4","JSP/sd/SD8110F_DS4_SELECT.jsp", strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        			}
        			else if(obj.name == "btn_print")
        			{
        				rdfile = gv_urlMrd+"/sd/SD8113r.mrd";
        				this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "sd::SDRDF.xfdl", "", this, 0, 0, 1400, 760);
        			}
        			break;
        		case 4:
        			if(obj.name == "btn_printview" ) // 미리보기 일때
        			{
        				var strDs = "ds_5=ds_5";
        				this.Div00.set_url("sd::SD8110F_GRID5.xfdl");
        				this.gfn_TransactionP("ds_5","JSP/sd/SD8110F_DS5_SELECT.jsp", strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        			}
        			else if(obj.name == "btn_print")
        			{
        				rdfile = gv_urlMrd+"/sd/SD8114r.mrd";
        				this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "sd::SDRDF.xfdl", "", this, 0, 0, 1400, 760);
        			}
        			break;
        		case 5:
        			if(obj.name == "btn_printview" ) // 미리보기 일때
        			{
        				var strDs = "ds_6=ds_6";
        				strArg += " syymm="+nexacro.wrapQuote((this.ed_work_symd.value).substr(0,6));
        				strArg += " eyymm="+nexacro.wrapQuote((this.ed_work_eymd.value).substr(0,6));
        				this.gfn_TransactionP("ds_6","JSP/sd/SD8110F_DS6_SELECT.jsp", strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        			}
        			else if(obj.name == "btn_print")
        			{
        				rdfile = gv_urlMrd+"/sd/SD8115R.mrd";
        				this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "sd::SDRDF.xfdl", "", this, 0, 0, 1400, 760);
        			}
        			break;
        		case 6:
        			if(obj.name == "btn_printview" ) // 미리보기 일때
        			{
        				var strDs = "ds_8=ds_8";
        				this.Div00.set_url("sd::SD8110F_GRID8.xfdl");
        				this.gfn_TransactionP("ds_8","JSP/sd/SD8110F_DS8_SELECT.jsp", strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        			}
        			else if(obj.name == "btn_print")
        			{
        				rdfile = gv_urlMrd+"/sd/SD8117r.mrd";
        				this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "sd::SDRDF.xfdl", "", this, 0, 0, 1400, 760);
        			}
        			break;
        		case 7:
        			if(obj.name == "btn_printview" ) // 미리보기 일때
        			{
        				var strDs = "ds_9=ds_9";
        				this.Div00.set_url("sd::SD8110F_GRID9.xfdl");
        				this.gfn_TransactionP("ds_9","JSP/sd/SD8110F_DS9_SELECT.jsp", strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        			}
        			else if(obj.name == "btn_print")
        			{
        				rdfile = gv_urlMrd+"/sd/SD8118r.mrd";
        				this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "sd::SDRDF.xfdl", "", this, 0, 0, 1400, 760);
        			}
        			break;
        		case 8:
        			if(obj.name == "btn_printview" ) // 미리보기 일때
        			{
        				var strDs = "ds_10=ds_10";
        				this.Div00.set_url("sd::SD8110F_GRID10.xfdl");
        				this.gfn_TransactionP("ds_10","JSP/sd/SD8110F_DS10_SELECT.jsp", strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        			}
        			else if(obj.name == "btn_print")
        			{
        				rdfile = gv_urlMrd+"/sd/SD8119r.mrd";
        				this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "sd::SDRDF.xfdl", "", this, 0, 0, 1400, 760);
        			}
        			break;
        		case 9:
        			if(obj.name == "btn_printview" ) // 미리보기 일때
        			{
        				var strDs = "ds_11=ds_11";
        				this.Div00.set_url("sd::SD8110F_GRID11.xfdl");
        				this.gfn_TransactionP("ds_11","JSP/sd/SD8110F_DS11_SELECT.jsp", strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        			}
        			else if(obj.name == "btn_print")
        			{
        				rdfile = gv_urlMrd+"/sd/SD8110r_t.mrd";
        				this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "sd::SDRDF.xfdl", "", this, 0, 0, 1400, 760);
        			}
        			break;
        	}
        };

        this.fnCallback = function(Trid, ErroCode, ErrorMsg)
        {
        	if(ErroCode != 0)
        		return;

        	if(Trid.substr(0,3) == "ds_" && this.all[Trid].rowcount <= 0)
        	{
        		alert('조회된 데이터가 없습니다.');
        		return;
        	}

        	if(Trid == "ds_6")
        	{
        		this.Div00.set_url();
        		this.Div00.set_url("sd::SD8110F_GRID6.xfdl");
        	}
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	// Excell Export시 ds row가 많으면 시간이 좀 걸리지만 화면은 멈춤상태이기에, Export중임을 알리기 위해 setWaitCursor 사용.
        	// 그러나 바로 사용하게 되면 setWaitCursor가 실행되기 전에 exportData() 로 넘어가버려 WaitCursor가 나오지않음.
        	// setWaitCursor가 실행되기동안 아주 잠깐 기다리기 위한 setTimer사용
        	this.setWaitCursor(true);
        	this.setTimer(0, 10);
        };

        this.SD8110F_ontimer = function(obj,e)
        {
        	if(e.timerid==0)
        	{
        		this.fnExcellExport();
        		this.killTimer(e.timerid);
        	}
        };

        this.fnExcellExport = function()
        {
        	var filename;
        	this.exportObj = new ExcelExportObject();
        	if ( this.Div00.url == "sd::SD8110F_GRID1.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD8110F_GRID1, "Sheet1!A1");
        		filename = "Excel_1"; } //"일자별 출고현황"
        	else if ( this.Div00.url == "sd::SD8110F_GRID2.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD8110F_GRID2, "Sheet1!A1");
        		filename = "Excel_2"; } //"업체별 수금현황"
        	else if ( this.Div00.url == "sd::SD8110F_GRID3.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD8110F_GRID3, "Sheet1!A1");
        		filename = "Excel_3"; } //"적요별 수금현황"
        	else if ( this.Div00.url == "sd::SD8110F_GRID4.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD8110F_GRID4, "Sheet1!A1");
        		filename = "Excel_4"; } //"만기일별 수금현황"
        	else if ( this.Div00.url == "sd::SD8110F_GRID5.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD8110F_GRID5, "Sheet1!A1");
        		filename = "Excel_5"; } //"업체별 어음현황"
        	else if ( this.Div00.url == "sd::SD8110F_GRID6.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD8110F_GRID6, "Sheet1!A1");
        		filename = "Excel_6"; } //"업체별 수금현황(월별)"
        	else if ( this.Div00.url == "sd::SD8110F_GRID7.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD8110F_GRID7, "Sheet1!A1");
        		filename = "Excel_7"; } //"업체구분별 수금현황(월별)"
        	else if ( this.Div00.url == "sd::SD8110F_GRID8.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD8110F_GRID8, "Sheet1!A1");
        		filename = "Excel_8"; } //"업체별만기일별수금현황"
        	else if ( this.Div00.url == "sd::SD8110F_GRID9.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD8110F_GRID9, "Sheet1!A1");
        		filename = "Excel_9"; } //"업체별역송,역장현황"
        	else if ( this.Div00.url == "sd::SD8110F_GRID10.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD8110F_GRID10, "Sheet1!A1");
        		filename = "Excel_10"; } //"업체별역송,연장집계"
        	else if ( this.Div00.url == "sd::SD8110F_GRID11.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD8110F_GRID11, "Sheet1!A1");
        		filename = "Excel_11"; } //"일자별 수금현황+만기"

        	this.exportObj.set_exporturl(gv_urlXeni);
        	this.exportObj.set_exportfilename(filename);
            this.exportObj.exportData();
        	this.setWaitCursor(false);
        }

        this.common_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		if(obj.name == 'ed_scode')
        			this.btn_Hscust.click();
        		else if(obj.name == 'ed_ecode')
        			this.btn_Hecust.click();
        		else if(obj.name == 'ed_name')
        			this.btn_search.click();
        		else if(obj.name == 'cmb_print_select')
        			this.cmb_print_select.dropdown();
        	}
        };

        this.check_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13)
        	{
        		if(obj.value == 0) obj.set_value(1);
        		else obj.set_value(0)
        	}
        };

        this.common_set_focus = function(obj,e)
        {
        	obj.set_border("2px solid #10aea9");
        };


        this.common_kill_focus = function(obj,e)
        {
        	obj.set_border("");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD8110F_onload,this);
            this.addEventHandler("ontimer",this.SD8110F_ontimer,this);
            this.Static01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static06.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static07.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static08.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static03.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_ioyh00.addEventHandler("onheadclick",this.gr_ioyh_onheadclick,this);
            this.Static09.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_01_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static04.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static05.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_ioyh.addEventHandler("onheadclick",this.gr_ioyh_onheadclick,this);
            this.ed_work_symd.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.ed_work_symd.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.ed_work_eymd.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.ed_work_eymd.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.ed_sgb.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.ed_sgb.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.ed_scode.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_scode.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.ed_scode.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.btn_Hscust.addEventHandler("onclick",this.btn_Hcust_onclick,this);
            this.ed_egb.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.ed_egb.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.ed_ecode.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.ed_ecode.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.btn_Hecust.addEventHandler("onclick",this.btn_Hcust_onclick,this);
            this.ed_ssjuk.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.ed_ssjuk.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.ed_esjuk.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.ed_esjuk.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.ed_mature_symd.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.ed_mature_symd.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.ed_mature_eymd.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.ed_mature_eymd.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.C_dae.addEventHandler("onkeydown",this.check_onkeydown,this);
            this.C_dae.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.C_dae.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.ed_scust.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.ed_scust.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.ed_name.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.ed_name.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.ed_name.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.cmb_print_select.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.cmb_print_select.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.cmb_print_select.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.btn_printview.addEventHandler("onclick",this.btn_printview_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_printview_onclick,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.C_gymd.addEventHandler("onkeydown",this.check_onkeydown,this);
            this.C_gymd.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.C_gymd.addEventHandler("onsetfocus",this.common_set_focus,this);
        };
        this.loadIncludeScript("SD8110F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
