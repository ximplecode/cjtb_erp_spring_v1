(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD1150F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,1200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_radio", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">1</Col><Col id=\"name\">일자별 포인트 출고현황</Col></Row><Row><Col id=\"value\">2</Col><Col id=\"name\">거래처별 포인트 출고 집계</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubbook", this);
            obj._setContents("<ColumnInfo><Column id=\"code_key\" type=\"STRING\" size=\"10\"/><Column id=\"book_year\" type=\"STRING\" size=\"4\"/><Column id=\"book_name\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIoyh", this);
            obj._setContents("<ColumnInfo><Column id=\"index\" type=\"STRING\" size=\"256\"/><Column id=\"cd_key\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"index\">01</Col><Col id=\"cd_key\">[01] 출고</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"index\">02</Col><Col id=\"cd_key\">[02] 증정</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"index\">03</Col><Col id=\"cd_key\">[03] 유증</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"index\">05</Col><Col id=\"cd_key\">[05] 이체출고</Col><Col id=\"chk\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bgbr", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chk\">0</Col><Col id=\"code\">00</Col><Col id=\"name\">미등록</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmd_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">판매용</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">교사용</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">타계정</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ccode1", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"1\"/><Column id=\"code\" type=\"STRING\" size=\"2\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cust", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_1", this);
            obj.set_keystring("BYMD, JPNO");
            obj._setContents("<ColumnInfo><Column id=\"ROW_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"BYMD\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"JPNO\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"NUMS\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"CGB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"B_GUCD\" type=\"STRING\" size=\"256\"/><Column id=\"B_GUNM\" type=\"STRING\" size=\"256\"/><Column id=\"YOUHYUNG\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"COST\" type=\"FLOAT\" size=\"256\"/><Column id=\"AMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"VAT_GB\" type=\"STRING\" size=\"256\"/><Column id=\"POINT\" type=\"FLOAT\" size=\"256\"/><Column id=\"TIKET\" type=\"FLOAT\" size=\"256\"/><Column id=\"DELIVERY_COST\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_2", this);
            obj.set_keystring("CUST_GB+CUST_CD");
            obj._setContents("<ColumnInfo><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"AMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"POINT\" type=\"FLOAT\" size=\"256\"/><Column id=\"TIKET\" type=\"FLOAT\" size=\"256\"/><Column id=\"DELIVERY_COST\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00_01_01_00","40.79%","88",null,"68","32.00%",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","40.79%","12",null,"40","38.00%",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_sdate","41.29%","17",null,"30","50.71%",null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","10.50%","12",null,"40","68.00%",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01","70.57%","12",null,"40","1.57%",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","10.5%","50",null,"40","68%",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00_00","70.57%","50",null,"40","1.57%",null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00_00_00","10.50%","88",null,"86","64.50%",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01_00","40.36%","50",null,"40","38.00%",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01_00_00","10.50%","308",null,"43","1.50%",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_bgbr","83.00%","120",null,"190","1.50%",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_binddataset("ds_bgbr");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:code\"/><Cell col=\"2\" text=\"bind:name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_select","15%","17",null,"30","77.86%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_cmd_combo");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_edate","53.79%","17",null,"30","38.57%",null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","51.21%","17",null,"30","47.07%",null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_sbook","11.07%","55",null,"30","82.93%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##########");
            obj.set_type("string");
            obj.set_value("0000000000");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","20.57%","55",null,"30","78.5%",null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_ebook","23.93%","55",null,"30","70%",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##########");
            obj.set_type("string");
            obj.set_value("9999999999");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ebookcode","30.07%","61",null,"19","68.64%",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_hak","71.79%","60",null,"20","22.14%",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("학년용");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_hak1","78.93%","60",null,"20","15.14%",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("1학기");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_hak2","86.07%","60",null,"20","8.64%",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("2학기");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","14.93%","96",null,"26","81.00%",null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("속성코드");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","14.93%","133",null,"26","81.00%",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("속성명");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_subbookcode","19.50%","94",null,"30","74.29%",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##########");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new TextArea("ed_bookname","19.50%","131",null,"30","74.29%",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_scrolltype("none");
            obj.set_font("11px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ck_select","26.00%","91",null,"20","70.00%",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("도서");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ck_use","26.00%","108",null,"20","70.00%",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("사용x");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Spin("ed_year","26.00%","131",null,"30","69.50%",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_min("2009");
            obj.set_max("9999");
            obj.set_value("2012");
            this.addChild(obj.name, obj);

            obj = new Button("btn_attribute_search","30.50%","135",null,"26","65.00%",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sbookcode","17.21%","61",null,"19","81.5%",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_sgb","71.36%","17",null,"30","25.71%",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_scode","74.36%","17",null,"30","22.21%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_value("0000");
            this.addChild(obj.name, obj);

            obj = new Button("btn_scust","77.86%","23",null,"19","20.79%",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_egb","82.36%","17",null,"30","14.71%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_ecode","85.36%","17",null,"30","11.21%",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_value("0000");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ecust","88.86%","23",null,"19","9.79%",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","80.64%","17",null,"30","18.43%",null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","46.36%","56",null,"30","52.57%",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Spin("ed_syy","41.29%","55",null,"30","54.07%",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_circulation("true");
            obj.set_min("2009");
            obj.set_max("9999");
            this.addChild(obj.name, obj);

            obj = new Spin("ed_eyy","47.29%","55",null,"30","48.07%",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_circulation("true");
            obj.set_min("2009");
            obj.set_max("9999");
            this.addChild(obj.name, obj);

            obj = new TextArea("E_gubn","11.07%","17",null,"30","85.93%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_maxlength("1");
            obj.set_scrolltype("none");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","1.79%","392",null,"63.25%","1.50%",null,null,null,null,null,this);
            obj.set_taborder("64");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel","92.00%","357",null,"25","1.50%",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("엑셀변환");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_attribute","10.50%","166",null,"144","64.50%",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_binddataset("dsSubbook");
            obj.set_autofittype("none");
            obj.set_autosizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"177\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"도서코드\"/><Cell col=\"2\" text=\"년판\"/><Cell col=\"3\" text=\"도서명\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:code_key\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:book_year\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:book_name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00_00_00_01","67.79%","88",null,"32","16.86%",null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("거래처구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_code","67.86%","120",null,"190","16.86%",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_binddataset("ds_ccode1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"61\"/><Column size=\"149\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:code\"/><Cell col=\"2\" text=\"bind:name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("print_select","11.00%","315",null,"30","64.29%",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_innerdataset("ds_radio");
            obj.set_datacolumn("name");
            obj.set_codecolumn("value");
            obj.set_text("거래처별수불부");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_printview","85.43%","318",null,"25","7.79%",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("미리보기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print","93.00%","318",null,"25","2.00%",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("출력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_isbn","28.29%","22",null,"20","68.71%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Isbn");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_busu","22.64%","22",null,"20","72.29%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("기본부수");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1.79%","12",null,"40","89.29%",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("선택");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","1.79%","50",null,"40","89.29%",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("도서코드");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","1.79%","88",null,"222","89.29%",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("속성코드 조회");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","31.86%","12",null,"40","59.00%",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("일자구간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","31.86%","50",null,"40","59.00%",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("도서년판");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","61.93%","50",null,"40","29.07%",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("학년구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","61.93%","12",null,"40","29.07%",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("업체구간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00","1.79%","308",null,"43","89.29%",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("출력물");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid1","40.86%","153",null,"157","32.00%",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_binddataset("ds_cust");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"338\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"업체명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:CODE_KEY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_custend","51.36%","129",null,"20","37.93%",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("거래중지업체 포함");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search2","60.93%","95",null,"30","34.43%",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edt_custname","51.36%","95",null,"30","39.29%",null,null,null,null,null,this);
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","48.50%","98",null,"21","48.50%",null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("업체명");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("Edt_custcd","44.29%","95",null,"30","52.29%",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("Edt_custgb","41.29%","95",null,"30","55.79%",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            obj.set_value("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00_00_00_00","83.00%","88",null,"32","1.50%",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("도서구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00_00","35.43%","88",null,"222","59.00%",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("업체구간\r\n조회");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1400,1200,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD1150F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD1150F.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("SD1150F.xfdl","Lib::Lib_sd.xjs");
        this.registerScript("SD1150F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_sd.xjs"); /*include "Lib::Lib_sd.xjs"*/;

        //--------------------------------------------------------------
        // 폼 전역변수 선언
        //--------------------------------------------------------------
        var F_ScreenName    = "";					// 화면명
        var	lovflag = true;
        var qryStr ="";								//쿼리
        var printqry_1 = "";						//쿼리 유형.
        var printqry_2 = "";						//쿼리 유형.
        var Fv_HeadChk1 = 0;                         //체크박스1.
        var Fv_HeadChk2 = 0;                         //체크박스1.
        var Fv_HeadChk3 = 0;                         //체크박스1.
        var Fv_HeadChk4 = 0;                         //체크박스1.
        var Find1_sw  = "N";
        var Find2_sw  = "N";
        var Find3_sw  = "N";
        var Find4_sw  = "N";
        var Find5_sw  = "N";
        var Gv_BookYear = this.lfn_sd_getBookYear(); // 영업관리 년판 세팅 얻어오기
        var bgbrnm;

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var gv_urlRdDataServer = nexacro.getApplication().gv_urlRdDataServer;

        //----------------------------------------------------------------------------------------
        //
        //  사용자정의 함수..
        //
        //----------------------------------------------------------------------------------------

        this.sqlCreate = function(event_id)
        {
        	//	 도서코드/도서코드 /기간 /기간 / 업체구간 /업체구간 /등급/학기/판매용구분/주/초/중/고/등록자/부수체크/ioyh/bgbr/custgb/속성코드/판매유형/도서구분
        	//rp [0000000000][9999999999][20061220][20061222][200000][299999][00,01][00,01][0][][][][][][busu][][][][][출고,증정][시험지,답안]
        	var s_cust, e_cust, p_yh;
        	var s_sql1, s_sql2, s_sql3, s_sql4, Hak_g;
            var Line_sw, rdopt;
        	bgbrnm    = "";
            Find1_sw  = "N";
            Find2_sw  = "N";
            Find3_sw  = "N";
            Find4_sw  = "N";
            Find5_sw  = "N";
        	var bgbr      = this.Gridcheck("dsBgbr");
        	var custcode  = this.Gridcheck("dsCode");
        	var bookcode  = this.Gridcheck("dsSubbook");
        	var subcust = this.Gridcheck("dsCust");
        	var rdfile = this.selectfile(this.print_select.value);
        	var pSbookcode, pEbookcode;
        	pSbookcode     = this.ed_sbook.value + ")" + this.ed_syy.value;
        	pEbookcode     = this.ed_ebook.value + ")" + this.ed_eyy.value;
            s_cust     =  this.ed_sgb.value + this.ed_scode.value;
            e_cust     =  this.ed_egb.value + this.ed_ecode.value;
            p_yh       =  this.cmb_select.text;
            s_sql1     = "";
            s_sql2     = "";
            s_sql3     = "";
            s_sql4     = "";
        	bgbrnm  = bgbrnm.substr(0,bgbrnm.length-1);
        	if ( Find2_sw  == "N" )
        	{
            	bgbrnm  = "전체";
        	}

            if(this.print_select.value == 1)
             {
              s_sql1     = "    AND  B.BOOK_CD >=  '" + this.ed_sbook.value +"'";
              s_sql1     = s_sql1 + "    AND  B.BOOK_CD <=  '" + this.ed_ebook.value +"'";
              s_sql1     = s_sql1 + "    AND  B.Byy >=  '" + this.ed_syy.value +"'";
              s_sql1     = s_sql1 + "    AND  B.Byy <=  '" + this.ed_eyy.value +"'";
              s_sql1     = s_sql1 + "    and  a.bymd >= '" + this.ed_sdate.value +"'";
              s_sql1     = s_sql1 + "    and  a.bymd <= '" + this.ed_edate.value +"'";
              s_sql1     = s_sql1 + "    and  ( A.cust_gb || A.CUST_CD ) >= '" + s_cust +"'";
              s_sql1     = s_sql1 + "    and  ( A.cust_gb || A.CUST_CD ) <= '" + e_cust +"'";
              if ( Find5_sw == "Y" )
               {
                 s_sql1    = s_sql1 + "   and ( A.cust_gb || A.CUST_CD )  in ( " + bookcode +" ) ";
               }
              if ( Find4_sw == "Y" )
               {
                 s_sql1    = s_sql1 + "   and ( B.BOOK_CD || b.byy )  in ( " + bookcode +" ) ";
               }
        //======s_sql2
              Line_sw    =   "Y";
              if ( Find2_sw == "Y" )
              {
                 s_sql2    = s_sql2 + "    and  c.cgb  in ( " + custcode +" ) ";
              }

        /*     Line_Sw    = "N";
             if (( this.C_A.value = "1" ) || ( this.C_B.value = "1" ) || ( this.C_C.value = "1" ) || ( this.C_D.value = "1" ))
              {
                 s_sql2    = s_sql2 + "    and  c.dung_cd in (  ";
                 if (  this.C_A.value = "1" )
                 {
                   s_sql2    = s_sql2 + " '01' ";
                   Line_Sw   = "Y";
                 }
                 if (( Line_Sw = "Y"  ) && ( this.C_B.value = "1"  ))
                 {
                   s_sql2     = s_sql2 + ", '02' ";
                   Line_Sw    = "Y";
                 }
                 if (( Line_Sw = "N"  ) && ( this.C_C.value = "1"  ))
                 {
                   s_sql2     = s_sql2 + " '03' ";
                   Line_Sw    = "Y";
                 }
                 if (( Line_Sw = "Y"  ) && ( this.C_D.value = "1"  ))
                 {
                   s_sql2     = s_sql2 + ", '02' ";
                   Line_Sw     = "Y";
                 }
                 s_sql2    = s_sql2 + "    )  ";
              }       */

        //======s_sql3
              if ( this.E_gubn.value   == "0" )
                {
                 s_sql3     =  s_sql3 + "  and  d.meip_c = '0'  ";
                 }
              else if ( this.E_gubn.value   == "1" )
                {
                 s_sql3     =  s_sql3 + " and   d.meip_c = '1'  ";
                 }
              else if ( this.E_gubn.value   == "2" )
                {
                 s_sql3     =  s_sql3 + " and   d.meip_c = '2'  ";
                 }
              Line_sw    =  "N";
              if (( this.C_hak.value == "1" ) || ( this.C_hak1.value == "1" ) || ( this.C_hak2.value == "1" ))
               {
                  s_sql3    = s_sql3 + "    and  d.book_hcode in (  ";
                  if ( this.C_hak.value == "1" )
                  {
                    Hak_g     = "학년용";
                    s_sql3    = s_sql3 + " '00' ";
                    Line_sw  = "Y";
                  }
                  if (( Line_sw == "Y"  ) && ( this.C_hak1.value == "1"  ))
                  {
                    Hak_g     = Hak_g + "/1학기";
                    s_sql3    = s_sql3 + ", '01' ";
                    Line_sw   = "Y";
                  }
                  else if (( Line_sw == "N"  ) && ( this.C_hak1.value == "1"  ))
                  {
                    Hak_g     = "1학기";
                    s_sql3    = s_sql3 + " '01' ";
                    Line_sw   = "Y";
                  }
                  if (( Line_sw == "Y"  ) && ( this.C_hak2.value == "1"  ))
                  {
                    Hak_g     = Hak_g + "/2학기";
                    s_sql3    = s_sql3 + ", '02' ";
                    Line_sw   = "Y";
                  }
                  else if (( Line_sw == "N"  ) && ( this.C_hak2.value == "1"  ))
                  {
                    Hak_g     = "2학기";
                    s_sql3    = s_sql3 + " '02' ";
                    Line_sw   = "Y";
                  }
                  s_sql3      = s_sql3 + "    )  ";
               }
               else
                   {
                    Hak_g     = "전체";
                   }
              if ( Find1_sw == "Y" )
               {
                 s_sql3    = s_sql3 + "    and  d.bgbr_cd in ( " + bgbr +" ) ";
               }

              if ( Find3_sw == "Y" )
               {
                 s_sql3    = s_sql3 + "   and d.sgrp_code  in ( " + bookcode +" ) ";
               }
         	var rdopt  = "/ragentpath ["+ gv_urlRdDataServer +"]" + " /rp ["+this.ed_sdate.value+"]"+ // 1
        					 "["+this.ed_edate.value+"]"+					  // 2
        					 "["+pSbookcode+"]"+ // 3
        					 "["+pEbookcode+"]"+ // 4
        					 "["+this.ed_sgb.value + this.ed_scode.value+"]"+ // 5
        					 "["+this.ed_egb.value + this.ed_ecode.Value+"]"+ // 6
        					 "["+p_yh+"]"+ // 7
        					 "["+bgbrnm+"]"+ // 8
        					 "["+s_sql1+"]"+ // 9
        					 "["+s_sql2+"]"+ // 10
        					 "["+s_sql3+"]"+ // 11
        					 "["+Hak_g+"]"; // 12

           }
           else if ( this.print_select.value == 2 )
             {
              s_sql1     = "    AND  B.BOOK_CD >=  '" + this.ed_sbook.value +"'";
              s_sql1     = s_sql1 + "    AND  B.BOOK_CD <=  '" + this.ed_ebook.value +"'";
              s_sql1     = s_sql1 + "    AND  B.Byy >=  '" + this.ed_syy.value +"'";
              s_sql1     = s_sql1 + "    AND  B.Byy <=  '" + this.ed_eyy.value +"'";
              s_sql1     = s_sql1 + "    and  a.bymd >= '" + this.ed_sdate.value +"'";
              s_sql1     = s_sql1 + "    and  a.bymd <= '" + this.ed_edate.value +"'";
              s_sql1     = s_sql1 + "    and  ( A.cust_gb || A.CUST_CD ) >= '" + s_cust +"'";
              s_sql1     = s_sql1 + "    and  ( A.cust_gb || A.CUST_CD ) <= '" + e_cust +"'";
              if ( Find5_sw == "Y" )
               {
                 s_sql1    = s_sql1 + "   and ( A.cust_gb || A.CUST_CD )  in ( " + bookcode +" ) ";
               }
              if ( Find4_sw == "Y" )
               {
                 s_sql1    = s_sql1 + "   and ( B.BOOK_CD || b.byy )  in ( " + bookcode +" ) ";
               }
        //======s_sql2
              Line_sw    =   "Y";
              if ( Find2_sw == "Y" )
              {
                 s_sql2    = s_sql2 + "    and  c.cgb  in ( " + custcode +" ) ";
              }
             Line_Sw    = "N";

        	var rdopt  = "/ragentpath ["+ gv_urlRdDataServer +"]" + " /rp ["+this.ed_sdate.value+"]"+ // 1
        					 "["+this.ed_edate.value+"]"+
        					 "["+pSbookcode+"]"+
        					 "["+pEbookcode+"]"+
        					 "["+this.ed_sgb.value + this.ed_scode.value+"]"+
        					 "["+this.ed_egb.value + this.ed_ecode.value+"]"+
        					 "["+p_yh+"]"+
        					 "["+bgbrnm+"]"+
        					 "["+s_sql1+"]"+
        					 "["+s_sql2+"]"+
        					 "["+s_sql3+"]"+
        					 "["+Hak_g+"]";
           }

        	/* 미리 보기 OR 출력 버튼이벤트 시작 */
        	if(event_id == "btn_printview" ) // 미리보기 일때
        	{
        		trace(this.print_select.value);
        		switch(this.print_select.value)
        		{
        		case '1' : // 일자별 포인트 출고현황
        				this.Div00.set_url("sd::SD1150F_GRID1.xfdl");

        				var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        				"s_sql2="+nexacro.wrapQuote(s_sql2)+
        				"s_sql3="+nexacro.wrapQuote(s_sql3)+
        				"s_sql4="+nexacro.wrapQuote(s_sql4);

        				var outds = "ds_1=ds_1";
        				var inds = "ds_1=ds_1";
        				trace(strArg);

        				this.gfn_TransactionP("ds1_select","JSP/sd/SD1150F_DS1_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        			break;
        		case '2' : // 거래처별 포인트 출고 집계
        			this.Div00.set_url("sd::SD1150F_GRID2.xfdl");

        			var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        			"s_sql2="+nexacro.wrapQuote(s_sql2)+
        			"s_sql3="+nexacro.wrapQuote(s_sql3)+
        			"s_sql4="+nexacro.wrapQuote(s_sql4);

        			var outds = "ds_2=ds_2";
        			var inds = "ds_2=ds_2";
        			trace(strArg);

        			this.gfn_TransactionP("ds2_select","JSP/sd/SD1150F_DS2_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        			break;
        		}
        	}
        	else if ( event_id  == "btn_print" ) // 출력일때
        	{
        		this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "mk::MKRDF.xfdl", "", this, 0, 0, 1024, 770);
        	}
        }

        this.btn_attribute_search_onclick = function(obj,e)
        {
        	this.search_bookcode();
        };


        this.search_bookcode = function()
        {
        	if( this.ed_subbookcode.value == undefined || this.ed_subbookcode.value.trim() == "" )
        		this.ed_subbookcode.set_value("");

        	var strArg;
        	var inds 	= "dsSubbook=dsSubbook";
        	var outds 	= "dsSubbook=dsSubbook";
        	var subbookcode = this.ed_subbookcode.value;
        	var bookname = this.ed_bookname.value;
        	var chk      = this.ck_select.value;
        	var pyear    = this.ed_year.value;
        	var c_use    = this.ck_use.value;

        	if (pyear == "") pyear = "NULL";
        	if (subbookcode == "          ") subbookcode = "NULL";

        	if (this.ck_select.value == true)
        	{
        		this.grd_attribute.setCellProperty("head",1,"text","도서코드");
        		this.grd_attribute.setCellProperty("head",2,"text","년판");
        	}
        	else
        	{
        		this.grd_attribute.setCellProperty("head",1,"text","속성코드");
        		this.grd_attribute.setCellProperty("head",2,"text","출판");
        	}
        	strArg = "values1="+nexacro.wrapQuote(subbookcode)
        	+"values2="+nexacro.wrapQuote(bookname)
        	+"values3="+nexacro.wrapQuote(chk)
        	+"values4="+nexacro.wrapQuote(pyear)
        	+"values5="+nexacro.wrapQuote(c_use);

        	trace(strArg);
        	this.gfn_TransactionP("subbook_select","JSP/sd/select_subbookcode.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        	//Transaction("select_subbook", "select_ds::select_subbookcode.jsp", inds, outds, strArg, "fnCallback");
        }


        this.btn_scust_onclick = function(obj,e)
        {
        	var objParam = {Param1:""}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupCustCode_scode", objParam, "common::Cust_2.xfdl", "popupCallBack", this, 10, 58, 590, 550);
        };

        this.btn_ecust_onclick = function(obj,e)
        {
        	var objParam = {Param1:""}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupCustCode_ecode", objParam, "common::Cust_2.xfdl", "popupCallBack", this, 10, 58, 590, 550);
        };


        this.popupCallBack = function(sFormId, sArg)
        {
        	if(!this.lfn_sd_fnisNull(sArg)) // 리턴값이 널이 아니면 수행
        	{
        		if(sFormId=="popupBookCode_sbook") // 도서시작 코드
        		{
        			var arry = sArg.split(":");
        			this.ed_sbook.set_value(arry[0]);
        		}
        		else if(sFormId=="popupBookCode_ebook") // 도서 끝 코드
        		{
        			var arry = sArg.split(":");
        			this.ed_ebook.set_value(arry[0]);
        		}
        		else if(sFormId=="popupCustCode_scode") // 거래처 시작 코드
        		{
        			var arry = sArg.split(":");
        			this.ed_sgb.set_value(arry[0]);
        			this.ed_scode.set_value(arry[1]);
        		}
        		else if(sFormId=="popupCustCode_ecode") // 거래처 끝 코드
        		{
        			var arry = sArg.split(":");
        			this.ed_egb.set_value(arry[0]);
        			this.ed_ecode.set_value(arry[1]);
        		}
        		else if(sFormId=="popupBookCode_user") // 영업자 코드
        		{
        			var arry = sArg.split(":");
        			this.ed_ju.set_value(arry[0]);
        		}
        		else if(sFormId=="popupBookCode_maker") // 등록자 코드
        		{
        			var arry = sArg.split(":");
        			this.ed_adduser.set_value(arry[0]);
        		}
        	}
        };

        this.btn_sbookcode_onclick = function(obj,e)
        {
        	var objParam = {Param1:""}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupBookCode_sbook", objParam, "common::BookCode.xfdl", "popupCallBack", this, 10, 58, 450, 550);
        };

        this.btn_ebookcode_onclick = function(obj,e)
        {
        	var objParam = {Param1:""}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupBookCode_ebook", objParam, "common::BookCode.xfdl", "popupCallBack", this, 10, 58, 450, 550);
        };

        this.btn_s_saleuser_onclick = function(obj,e)
        {
        	var objParam = {Param1:""}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupBookCode_user", objParam, "sd::frmSaleUser.xfdl", "popupCallBack", this, 10, 58, 450, 550);
        };

        this.btn_e_saleuser_onclick = function(obj,e)
        {
        	var objParam = {Param1:""}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupBookCode_maker", objParam, "sd::frmSaleUser.xfdl", "popupCallBack", this, 10, 58, 450, 550);
        };

        this.SD1150F_onload = function(obj,e)
        {
        	if(system.navigatorname.indexOf("nexacro")==-1)
        	{
        		// 현재 hash 에 해당하는 data 를 얻어온다.
        		var hash = MyHistory.getLocationHash();
        		//var data = MyHistory.getData(hash);
        		//trace(hash);
        	}
        	//디폴드 div 셋팅
        	//this.Div00.set_url("sd::SD1150F_GRID1.xfdl")

        	//디폴트 오늘날자.
        	var today = new Date();
        	var strtoDay = Eco.date.getMaskFormatString(today, "yyyyMMdd");
        	//nexacro.getApplication().Gv_BookYear = this.lfn_sd_getBookYear();

        	this.ed_sdate.set_value(strtoDay);
        	this.ed_edate.set_value(strtoDay);
        	this.cmb_select.set_index(3);
        	this.E_gubn.set_value("3");

        	this.ed_sgb.set_value("20");
        	this.ed_scode.set_value("0000");
        	this.ed_egb.set_value("37");
        	this.ed_ecode.set_value("9999");
        	this.ed_sbook.set_value("0000000000");
        	this.ed_ebook.set_value("9999999999");
        	this.ed_syy.set_value(this.lfn_sd_getBookYear("start")-10);
        	this.ed_eyy.set_value(this.lfn_sd_getBookYear("year"));
        	this.ck_use.set_value(true);
        	this.ed_year.set_value(this.lfn_sd_getBookYear("year"));


        	// 거래처구분 가져오기
        	var strArg = "";
        	var inds 	   = "ds_ccode1=ds_ccode1";
        	var outds 	   = "ds_ccode1=ds_ccode1";

        	this.gfn_TransactionP("custgb_select","JSP/sd/sel_ccode1.jsp", inds, outds, strArg, "fnCallback", false, "P", false, this);

        	//도서구분 가져오기
        	strArg = "";
        	outds = "ds_bgbr=ds_bgbr";
        	inds = "ds_bgbr=ds_bgbr";

        	this.gfn_TransactionP("bgbr_select","JSP/sd/sel_bgbr.jsp", inds, outds, strArg, "fnCallback", false, "P", false, this);

        	this.ed_sdate.setFocus();
        };

        this.cmb_select_onitemchanged = function(obj,e)
        {
        	if( this.cmb_select.value == "0" )
        	this.E_gubn.set_value("0");
        	else if( this.cmb_select.value == "1" )
        	this.E_gubn.set_value("1");
        	else if( this.cmb_select.value == "2" )
        	this.E_gubn.set_value("2");
        	else if( this.cmb_select.value == "3" )
        	this.E_gubn.set_value("3");
        };

        this.btn_printview_onclick = function(obj,e)
        {
        	trace(obj.id);
        	this.sqlCreate(obj.id);
        };


        this.Gridcheck = function(strdsname)
        {
        	// 그리드 데이터 중에 체크된 데이터를 선별하여 리턴.
        	var strReturn="";
        	var loop = 0;
        	//trace("in Gridcheck" +this.dsIoyh.rowcount);


        	if (strdsname=="dsBgbr")
        	{
        		trace("in dsBgbr ");
        		for (loop=0; loop< this.ds_bgbr.rowcount; loop++)
        		{
        			if ( this.ds_bgbr.getColumn(loop,"chk")==1 )
        			{
        				//trace(this.ds_bgbr.getColumn(loop,"chk") + "        loop: " + loop);
        			    Find1_sw  = "Y";
        			    bgbrnm    = bgbrnm + "'"+nexacro.trim(this.ds_bgbr.getColumn(loop,"name"))+"',";
        				strReturn = strReturn +"'"+this.ds_bgbr.getColumn(loop,"code")+"',";
        			}
        		}
        	}

        	if(strdsname=="dsCode")
        	{
        		for (loop=0; loop< this.ds_ccode1.rowcount; loop++)
        		{
        			if ( this.ds_ccode1.getColumn(loop,"chk")==1 )
        			{
        				//trace(this.ds_bgbr.getColumn(loop,"chk") + "        loop: " + loop);
        			    Find2_sw  = "Y";
        				strReturn = strReturn +"'"+this.ds_ccode1.getColumn(loop,"code")+"',";
        			}
        		}
        	}

        	if ((strdsname=="dsSubbook") && (this.ck_select.value==false))
        	{
        		//trace("in dsSubbook -> ck_select.value = false ");
        		for (loop=0; loop<this.dsSubbook.rowcount; loop++)
        		{
        			if (this.dsSubbook.getColumn(loop,"chk")==1)
        			{
        			    Find3_sw  = "Y";
        				strReturn = strReturn +"'"+this.dsSubbook.getColumn(loop,"code_key").substr(0,9)+ "',";
        			}
        		}
        	}

        	if ((strdsname=="dsSubbook") && (this.ck_select.value==true))
        	{
        		//trace("in dsSubbook -> ck_select.value = true ");
        		for (loop=0; loop<this.dsSubbook.rowcount; loop++)
        		{
        			if (this.dsSubbook.getColumn(loop,"chk")==1)
        			{
        			    Find4_sw  = "Y";
        				//strReturn = strReturn +"'"+this.left(this.dsSubbook.getColumn(loop,"code_key"),10)+ this.left(this.dsSubbook.getColumn(loop,"book_year"),4)+"',";
        				strReturn = strReturn +"'"+this.dsSubbook.getColumn(loop,"code_key").substr(0,10)+ this.dsSubbook.getColumn(loop,"book_year").substr(0,4) +"',";
        			}
        		}
        	}

        	if (strdsname== "dsCust")
        	{
        		for (loop=0; loop<this.ds_cust.rowcount; loop++)
        		if (this.ds_cust.getColumn(loop,"CHK")==1)
        		{
        			Find5_sw  = "Y";
        			strReturn = strReturn +"'"+this.ds_cust.getColumn(loop,"CODE_KEY").substr(0,6)+ "',";
        		}
        	}

        	//마지막 쉼표 삭제.
        	return strReturn.substr(0,strReturn.length-1);
        };


        this.selectfile = function(num)
        {
        	if (num == 1) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1150r.mrd"; // 일자별 포인트 출고현황
        	else if (num == 2) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1151r.mrd"; // 거래처별 포인트 출고 집계

        };

        this.btn_excel_onclick = function(obj,e)
        {
        	var filename;

        	this.exportObj = new ExcelExportObject();
        	if ( this.Div00.url == "sd::SD1150F_GRID1.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1150F_GRID1, "Sheet1!A1");
        		filename = "1"; }
        	else if ( this.Div00.url == "sd::SD1150F_GRID2.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1150F_GRID2, "Sheet1!A1");
        		filename = "2"; }

        	this.exportObj.set_exporturl(gv_urlXeni);
        	this.exportObj.set_exportfilename(filename);
            this.exportObj.exportData();
        };

        this.grd_attribute_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		if(Fv_HeadChk1 == 0)
        		Fv_HeadChk1 = 1;
        		else
        		Fv_HeadChk1 = 0;

        		this.grd_attribute.setCellProperty("head", 0, "text", Fv_HeadChk1);
        		for(var i = 0; i < this.dsSubbook.rowcount; i++)
        		{
        			this.dsSubbook.setColumn(i, "chk", Fv_HeadChk1);

        		}
        	}
        };


        this.grd_code_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		if(Fv_HeadChk2 == 0)
        		Fv_HeadChk2 = 1;
        		else
        		Fv_HeadChk2 = 0;

        		this.grd_code.setCellProperty("head", 0, "text", Fv_HeadChk2);
        		for(var i = 0; i < this.ds_ccode1.rowcount; i++)
        		{
        			this.ds_ccode1.setColumn(i, "chk", Fv_HeadChk2);

        		}
        	}
        };

        this.grd_bgbr_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		if(Fv_HeadChk4 == 0)
        		Fv_HeadChk4 = 1;
        		else
        		Fv_HeadChk4 = 0;

        		this.grd_bgbr.setCellProperty("head", 0, "text", Fv_HeadChk4);
        		for(var i = 0; i < this.ds_bgbr.rowcount; i++)
        		{
        			this.ds_bgbr.setColumn(i, "chk", Fv_HeadChk4);

        		}
        	}
        };


        this.fnCallback = function(svcId, ErrorCode, ErrorMsg)
        {
        	if(ErrorCode != 0)
        	this.alert(ErrorMsg);
        };



        this.btn_search2_onclick = function(obj,e)
        {
        	var strArg;
        	var inds 	= "ds_cust=ds_cust";
        	var outds 	= "ds_cust=ds_cust";
        	var chkstop = "";

        	if (this.chk_custend.value == true) chkstop = "";
        	else chkstop = "null";

        	if( this.Edt_custcd.value == undefined || this.Edt_custcd.value.trim() == "" )
        		this.Edt_custcd.set_value("");

        	strArg = " values1="+nexacro.wrapQuote(this.Edt_custgb.value)+
        	" values2="+nexacro.wrapQuote(this.Edt_custcd.value)+
        	" values3="+nexacro.wrapQuote(this.Edt_custname.value)+
        	" values4="+nexacro.wrapQuote(chkstop);

        	this.gfn_TransactionP("select_custcd","JSP/sd/select_custcode_name.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD1150F_onload,this);
            this.Static00_01_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_01_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_bgbr.addEventHandler("onheadclick",this.grd_bgbr_onheadclick,this);
            this.cmb_select.addEventHandler("onitemchanged",this.cmb_select_onitemchanged,this);
            this.btn_ebookcode.addEventHandler("onclick",this.btn_ebookcode_onclick,this);
            this.btn_attribute_search.addEventHandler("onclick",this.btn_attribute_search_onclick,this);
            this.btn_sbookcode.addEventHandler("onclick",this.btn_sbookcode_onclick,this);
            this.ed_scode.addEventHandler("onkeydown",this.ed_scode_onkeydown,this);
            this.btn_scust.addEventHandler("onclick",this.btn_scust_onclick,this);
            this.btn_ecust.addEventHandler("onclick",this.btn_ecust_onclick,this);
            this.E_gubn.addEventHandler("onkeydown",this.E_gubn_onkeydown,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.grd_attribute.addEventHandler("onheadclick",this.grd_attribute_onheadclick,this);
            this.Static00_00_01_00_00_00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_code.addEventHandler("onheadclick",this.grd_code_onheadclick,this);
            this.btn_printview.addEventHandler("onclick",this.btn_printview_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_printview_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Grid1.addEventHandler("onheadclick",this.Grid00_01_onheadclick,this);
            this.btn_search2.addEventHandler("onclick",this.btn_search2_onclick,this);
            this.Edt_custname.addEventHandler("onkeydown",this.ed_code_onkeydown,this);
            this.Static00_00_01_00_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
        };
        this.loadIncludeScript("SD1150F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
