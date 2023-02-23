(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD1010F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,1200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_radio", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">0</Col><Col id=\"name\">일자별 입고현황</Col></Row><Row><Col id=\"value\">1</Col><Col id=\"name\">도서별 입고현황</Col></Row><Row><Col id=\"value\">2</Col><Col id=\"name\">거래처별 입고현황</Col></Row><Row><Col id=\"value\">3</Col><Col id=\"name\">도서별 입고(영업부출고)현황</Col></Row><Row><Col id=\"value\">4</Col><Col id=\"name\">도서별 입고(홍기부출고)현황</Col></Row><Row><Col id=\"value\">5</Col><Col id=\"name\">일자별 입고현황(등록시간순)</Col></Row><Row><Col id=\"value\">6</Col><Col id=\"name\">일자별 대체현황(미연결)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIoyh", this);
            obj._setContents("<ColumnInfo><Column id=\"index\" type=\"STRING\" size=\"256\"/><Column id=\"cd_key\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"index\">01</Col><Col id=\"cd_key\">[01] 생산</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"index\">02</Col><Col id=\"cd_key\">[02] 재생</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"index\">03</Col><Col id=\"cd_key\">[03] 대체(가)</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"index\">05</Col><Col id=\"cd_key\">[05] 대체(불)</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"index\">06</Col><Col id=\"cd_key\">[06] 대체(loss)가</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"index\">07</Col><Col id=\"cd_key\">[07] 대체(Set)가</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"index\">08</Col><Col id=\"cd_key\">[08] 대체(Set)불</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"index\">09</Col><Col id=\"cd_key\">[09] 대체(loss)불</Col><Col id=\"chk\">0</Col></Row><Row><Col id=\"index\">10</Col><Col id=\"cd_key\">[10] 대체(3면)</Col><Col id=\"chk\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubbook", this);
            obj._setContents("<ColumnInfo><Column id=\"code_key\" type=\"STRING\" size=\"10\"/><Column id=\"book_year\" type=\"STRING\" size=\"4\"/><Column id=\"book_name\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bgbr", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chk\">0</Col><Col id=\"code\">00</Col><Col id=\"name\">미등록</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sd_busecode", this);
            obj._setContents("<ColumnInfo><Column id=\"busecode\" type=\"STRING\" size=\"5\"/><Column id=\"Scode\" type=\"STRING\" size=\"5\"/><Column id=\"Ecode\" type=\"STRING\" size=\"5\"/><Column id=\"Sbookcode\" type=\"STRING\" size=\"10\"/><Column id=\"Ebookcode\" type=\"STRING\" size=\"10\"/><Column id=\"Scustcode\" type=\"STRING\" size=\"6\"/><Column id=\"Ecustcode\" type=\"STRING\" size=\"6\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmd_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">판매용</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">교사용</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">타계정</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_1", this);
            obj.set_keystring("BYMD, BYMD+JPNO+JP_GB");
            obj._setContents("<ColumnInfo><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"JPNO\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"BYMD\" type=\"STRING\" size=\"256\"/><Column id=\"CKEY\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"NUMS\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"COST\" type=\"STRING\" size=\"256\"/><Column id=\"AMT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY1\" type=\"INT\" size=\"256\"/><Column id=\"QTY2\" type=\"INT\" size=\"256\"/><Column id=\"QTY3\" type=\"INT\" size=\"256\"/><Column id=\"B_GUNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_2", this);
            obj.set_keystring("BOOK_CD+BYY");
            obj._setContents("<ColumnInfo><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"JPNO\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"BYMD\" type=\"STRING\" size=\"256\"/><Column id=\"CKEY\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"NUMS\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"COST\" type=\"STRING\" size=\"256\"/><Column id=\"AMT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY1\" type=\"INT\" size=\"256\"/><Column id=\"QTY2\" type=\"INT\" size=\"256\"/><Column id=\"QTY3\" type=\"INT\" size=\"256\"/><Column id=\"B_GUNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_3", this);
            obj.set_keystring("CKEY");
            obj._setContents("<ColumnInfo><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"JPNO\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"BYMD\" type=\"STRING\" size=\"256\"/><Column id=\"CKEY\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"NUMS\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"COST\" type=\"STRING\" size=\"256\"/><Column id=\"AMT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY1\" type=\"INT\" size=\"256\"/><Column id=\"QTY2\" type=\"INT\" size=\"256\"/><Column id=\"QTY3\" type=\"INT\" size=\"256\"/><Column id=\"B_GUNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_4", this);
            obj.set_keystring("BOOK_CD+BYY");
            obj._setContents("<ColumnInfo><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"JPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CKEY\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"CJPNO\" type=\"INT\" size=\"256\"/><Column id=\"CQTY\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_5", this);
            obj.set_keystring("BOOK_CD+BYY");
            obj._setContents("<ColumnInfo><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"JPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CKEY\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"CJPNO\" type=\"INT\" size=\"256\"/><Column id=\"CQTY\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_6", this);
            obj.set_keystring("BYMD, UPYMD");
            obj._setContents("<ColumnInfo><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"JPNO\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"BYMD\" type=\"STRING\" size=\"256\"/><Column id=\"CKEY\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"NUMS\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"COST\" type=\"STRING\" size=\"256\"/><Column id=\"AMT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY1\" type=\"INT\" size=\"256\"/><Column id=\"QTY2\" type=\"INT\" size=\"256\"/><Column id=\"QTY3\" type=\"INT\" size=\"256\"/><Column id=\"B_GUNM\" type=\"STRING\" size=\"256\"/><Column id=\"UPYMD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_7", this);
            obj.set_keystring("BYMD, BYMD+NUM");
            obj._setContents("<ColumnInfo><Column id=\"BYMD\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"SEQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_01_00_00","40.50%","12",null,"40","38.07%",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_sdate","41.14%","17",null,"30","51.07%",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01",null,"12","21.50%","40","68.00%",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01","70.64%","12",null,"40","1.50%",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","10.50%","50",null,"40","68.00%",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00_00","70.64%","50",null,"40","1.50%",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00_00_00","10.50%","88",null,"45","44.50%",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01_00","40.57%","50",null,"40","38.00%",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00_00_00","64.29%","88",null,"32","16.86%",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("유형");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00_00_00_00","83.07%","88",null,"32","1.50%",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("도서구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("gr_ioyh","64.29%","120",null,"190","16.86%",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_binddataset("dsIoyh");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"조건명\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:cd_key\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("gr_","83.21%","120",null,"190","1.57%",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_binddataset("ds_bgbr");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:code\"/><Cell col=\"2\" text=\"bind:name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_select","14.93%","17",null,"30","75.00%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_cmd_combo");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_edate","53.71%","17",null,"30","38.5%",null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","51.07%","17",null,"30","47.5%",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_sbook","11.07%","55",null,"30","82.86%",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##########");
            obj.set_type("string");
            obj.set_value("0000000000");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","20.57%","55",null,"30","78.43%",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_ebook","23.93%","55",null,"30","70%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##########");
            obj.set_type("string");
            obj.set_value("9999999999");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ebookcode","30.07%","61",null,"19","68.64%",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_hak","71.79%","60",null,"20","22.14%",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("학년용");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_hak1","78.93%","60",null,"20","15.14%",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("1학기");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_hak2","86.07%","60",null,"20","8.64%",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("2학기");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20.93%","98",null,"26","75%",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("속성코드");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","35.21%","97",null,"26","60.79%",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("속성명");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_subbookcode","25.79%","96",null,"30","68.14%",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##########");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new TextArea("ed_bookname","40%","95",null,"30","53.93%",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_scrolltype("none");
            obj.set_font("11px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ck_select","32.07%","94",null,"20","64.21%",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("도서");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ck_use","32.07%","109",null,"20","64.21%",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("사용x");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Spin("ed_year","46.36%","95",null,"30","49.29%",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_min("2009");
            obj.set_max("9999");
            obj.set_value("2012");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid0","10.50%","130",null,"180","44.50%",null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_binddataset("dsSubbook");
            obj.set_autofittype("col");
            obj.set_autosizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"167\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"도서코드\"/><Cell col=\"2\" text=\"년판\"/><Cell col=\"3\" text=\"도서명\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:code_key\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:book_year\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:book_name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button5","51%","97",null,"26","44.86%",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sbookcode","17.21%","61",null,"19","81.43%",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_sgb","71.36%","17",null,"30","25.71%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_scode","74.36%","17",null,"30","22.21%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_value("0000");
            this.addChild(obj.name, obj);

            obj = new Button("btn_scust","77.86%","23",null,"19","20.79%",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_egb","82.36%","17",null,"30","14.71%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_ecode","85.36%","17",null,"30","11.21%",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_value("0000");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ecust","88.86%","23",null,"19","9.79%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","80.64%","17",null,"30","18.43%",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","45.93%","56",null,"30","53.07%",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Spin("ed_syy","41.14%","55",null,"30","54.57%",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_circulation("true");
            obj.set_min("2009");
            obj.set_max("9999");
            obj.set_value("2021");
            this.addChild(obj.name, obj);

            obj = new Spin("ed_eyy","661","55","61","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_circulation("true");
            obj.set_min("2009");
            obj.set_max("9999");
            obj.set_value("2021");
            this.addChild(obj.name, obj);

            obj = new TextArea("E_gubn","11.21%","18",null,"30","85.86%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_maxlength("1");
            obj.set_scrolltype("none");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","1.79%","387",null,"763","1.50%",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_formscrolltype("horizontal");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01_00_00_00","10.57%","308",null,"43","1.57%",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("print_select","11.07%","315",null,"30","55.43%",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_innerdataset("ds_radio");
            obj.set_datacolumn("name");
            obj.set_codecolumn("value");
            obj.set_text("일자별 입고현황");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_printview","86.36%","316",null,"25","7.21%",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("미리보기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print","93.36%","316",null,"25","2.14%",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("출력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel","92.07%","355",null,"25","1.57%",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("엑셀변환");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1.79%","12",null,"40","89.29%",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("선택");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","1.79%","50",null,"40","89.29%",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("도서코드");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","1.79%","88",null,"222","89.29%",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("도서코드 상세조건");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00_01","1.79%","308",null,"43","89.29%",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("출력물");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00_00","55.43%","88",null,"222","35.64%",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("유형별출력조건");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","31.86%","50",null,"40","59.21%",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("도서년판");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","31.86%","12",null,"40","59.21%",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("일자구간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","61.86%","50",null,"40","29.14%",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("학년구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","61.86%","12",null,"40","29.14%",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("업체구간");
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
        this.addIncludeScript("SD1010F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD1010F.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("SD1010F.xfdl","Lib::Lib_sd.xjs");
        this.registerScript("SD1010F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_sd.xjs"); /*include "Lib::Lib_sd.xjs"*/;
        //------------------------------------------------------------------------------
        // 폼에서 사용되는 전역 번수.
        //------------------------------------------------------------------------------
        var F_ScreenName    = "";					// 화면명
        var	lovflag = true;
        var qryStr ="";								//쿼리
        var Fv_HeadChk1 = 0;                         //체크박스1.
        var Fv_HeadChk2 = 0;                         //체크박스2.
        var Find1_sw  = "N";
        var Find2_sw  = "N";
        var Find3_sw  = "N";
        var Find4_sw  = "N";
        var bgbrnm;
        var Gv_BookYear = this.lfn_sd_getBookYear(); // 영업관리 년판 세팅 얻어오기
        var Fv_HeadChk1 = 0;                         //체크박스1.
        var Fv_HeadChk2 = 0;                         //체크박스2.
        var s_sql1, s_sql2;

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var gv_urlRdDataServer = nexacro.getApplication().gv_urlRdDataServer;

        this.Button00_onclick = function(obj,e)
        {
        	this.exportObj = new ExcelExportObject();
            var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID,this.Grid00, "Sheet1!A1");
            this.exportObj.set_exporturl("https://cj-erp.chunjae.co.kr/XExportImport");
            this.exportObj.exportData();
        };

        this.btn_printview_onclick = function(obj,e)
        {
        	trace(obj.id);
        	this.sqlCreate(obj.id);
        };

        //------------------------------------------------------------------------------
        // 사용자정의함수.
        //------------------------------------------------------------------------------

        this.sqlCreate = function(event_id)
        {
        	//	시작일 /종료일 / 업체구간 /업체구간 / 도서코드/도서코드 /년판 /년판 /유형조건1 / 유형조건2 / 판매용선택 / 속성코드
        	//rp [20061201][20061215][200000][299999][0000000000][9999999999][2006][2006][1,2,3][01,02,03]/[1]/[]
        	var j_jpno, s_jpno, e_jpno, s_cust, e_cust, p_yh;
        	var s_sql1, s_sql2, s_sql3, s_sql4, Hak_g;
            var Line_sw;
        	bgbrnm    = "";
            Find1_sw  = "N";
            Find2_sw  = "N";
            Find3_sw  = "N";
            Find4_sw  = "N";

        	var grid_chk1 = this.Gridcheck("dsIoyh");
        	var grid_chk2 = this.Gridcheck("dsBgbr");
        	var gb = this.optionGb();
        	var bookcode  = this.Gridcheck("dsSubbook");
        	var rdfile = this.selectfile(this.print_select.value);
        	var pSbookcode, pEbookcode;
        	pSbookcode     = this.ed_sbook.value + ")" + this.ed_syy.value;
        	pEbookcode     = this.ed_ebook.value + ")" + this.ed_eyy.value;
            s_jpno     =  this.ed_sdate.value + "0000";
        	var sdate = this.ed_sdate.value;
        	var sdate_temp = new Date( sdate.substring(0,4), sdate.substring(4,6)-1, sdate.substring(6,8));
        	sdate_temp.addDate(-180);
        	j_jpno     =  sdate_temp.getYear()+""+sdate_temp.getMonth()+""+sdate_temp.getDate()+"";

            s_jpno     =  this.ed_sdate.value + "0000";
            e_jpno     =  this.ed_edate.value + "zzzz";
            s_cust     =  this.ed_sgb.value + this.ed_scode.value;
            e_cust     =  this.ed_egb.value + this.ed_ecode.value;
            p_yh       =  this.cmb_select.text;
            s_sql1     = "";
            s_sql2     = "";
            s_sql3     = "";
        	bgbrnm  = bgbrnm.substr(0,bgbrnm.length-1);

        	if ( Find2_sw  == "N" )
        	{
            	bgbrnm  = "전체";
        	}

        	s_sql1     =  " where a.JP_GB = '2'  ";
        	s_sql1     = s_sql1 + "    and  A.JPNO >= '" + s_jpno +"'";
        	s_sql1     = s_sql1 + "    and  A.JPNO <= '" + e_jpno +"'";
        	s_sql1     = s_sql1 + "    AND  a.JP_GB = b.JP_GB ";
        	s_sql1     = s_sql1 + "    AND  a.JPNO  = b.JPNO ";
        	if (( this.print_select.value == '3' ) || ( this.print_select.value == '4' ))
        	{
        		s_sql1     = s_sql1 + "    and  ( A.cust_gb || A.CUST_CD ) >= '200000' ";
        		s_sql1     = s_sql1 + "    and  ( A.cust_gb || A.CUST_CD ) <= '379999' ";
        	}
        	else
        	{
        		s_sql1     = s_sql1 + "    and  ( A.cust_gb || A.CUST_CD ) >= '" + s_cust +"'";
        		s_sql1     = s_sql1 + "    and  ( A.cust_gb || A.CUST_CD ) <= '" + e_cust +"'";
        	}

        	s_sql1     = s_sql1 + "    AND  B.BOOK_CD >=  '" + this.ed_sbook.value +"'";
        	s_sql1     = s_sql1 + "    AND  B.BOOK_CD <=  '" + this.ed_ebook.value +"'";
        	s_sql1     = s_sql1 + "    AND  B.Byy >=  '" + this.ed_syy.value +"'";
        	s_sql1     = s_sql1 + "    AND  B.Byy <=  '" + this.ed_eyy.value +"'";
        	if ( Find1_sw == "Y" )
        	{
        		s_sql1    = s_sql1 + "    and  b.ioyh_cd in ( " + grid_chk1 +" ) ";
        	}
        	if ( Find4_sw == "Y" )
        	{
        		s_sql1    = s_sql1 + "   and ( B.BOOK_CD || b.byy )  in ( " + bookcode +" ) ";
        	}
        	//======s_sql2
        	if ( this.E_gubn.text   == "0" )
        	{
        		s_sql2     =  s_sql2 + "  and  d.meip_c = '0'  ";
        	}
        	else if ( this.E_gubn.text   == "1" )
        	{
        		s_sql2     =  s_sql2 + " and   d.meip_c = '1'  ";
        	}
        	else if ( this.E_gubn.text   == "2" )
        	{
        		s_sql2     =  s_sql2 + " and   d.meip_c = '2'  ";
        	}
        	Line_sw    =  "N";
        	if (( this.C_hak.value == "1" ) || ( this.C_hak1.value == "1" ) || ( this.C_hak2.value == "1" ))
        	{
        		s_sql2    = s_sql2 + "    and  d.book_hcode in (  ";
        		if ( this.C_hak.value = "1" )
        		{
        			Hak_g     = "학년용";
        			s_sql2    = s_sql2 + " '00' ";
        			Line_sw  = "Y";
        		}
        		if (( Line_sw == "Y"  ) && ( this.C_hak1.value == "1"  ))
        		{
        			Hak_g     = Hak_g + "/1학기";
        			s_sql2    = s_sql2 + ", '01' ";
        			Line_sw   = "Y";
        		}
        		else if (( Line_sw == "N"  ) && ( this.C_hak1.value == "1"  ))
        		{
        			Hak_g     = "1학기";
        			s_sql2    = s_sql2 + " '01' ";
        			Line_sw   = "Y";
        		}
        		if (( Line_sw == "Y"  ) && ( this.C_hak2.value == "1"  ))
        		{
        			Hak_g     = Hak_g + "/2학기";
        			s_sql2    = s_sql2 + ", '02' ";
        			Line_sw   = "Y";
        		}
        		else if (( Line_sw == "N"  ) && ( this.C_hak2.value == "1"  ))
        		{
        			Hak_g     = "2학기";
        			s_sql2    = s_sql2 + " '02' ";
        			Line_sw   = "Y";
        		}
        		s_sql2      = s_sql2 + "    )  ";
        	}
        	else
        	{
        		Hak_g     = "전체";
        	}
        	if ( Find2_sw == "Y" )
        	{

        		s_sql2    = s_sql2 + "    and  d.bgbr_cd in ( " + grid_chk2 +" ) ";
        	}
        	if ( Find3_sw == "Y" )
        	{
        		s_sql2    = s_sql2 + "   and d.sgrp_code  in ( " + bookcode +" ) ";
        	}

        	s_sql3     =  " where a.JP_GB = '3'  ";
        	s_sql3     = s_sql3 + "    and  A.JPNO >= '" + j_jpno +"'";
        	//      s_sql3     = s_sql3 + "    and  A.JPNO <= '" + e_jpno +"'";
        	s_sql3     = s_sql3 + "    AND  a.JP_GB = b.JP_GB ";
        	s_sql3     = s_sql3 + "    AND  a.JPNO  = b.JPNO ";
        	if  ( this.print_select.value == '4' )
        	//        s_sql3     = s_sql3 + "    and  ( A.cust_gb || A.CUST_CD ) = '201602' ";
        	s_sql3     = s_sql3 + "    and  ( A.cust_gb || A.CUST_CD ) = '" + s_cust +"'";
        	else
        	s_sql3     = s_sql3 + "    and  ( A.cust_gb || A.CUST_CD ) = '" + s_cust +"'";
        	//        s_sql3     = s_sql3 + "    and  ( A.cust_gb || A.CUST_CD ) = '201614' ";
        	s_sql3     = s_sql3 + "    AND  B.BOOK_CD >=  '" + this.ed_sbook.value +"'";
        	s_sql3     = s_sql3 + "    AND  B.BOOK_CD <=  '" + this.ed_ebook.value +"'";
        	s_sql3     = s_sql3 + "    AND  B.Byy >=  '" + this.ed_syy.value +"'";
        	s_sql3     = s_sql3 + "    AND  B.Byy <=  '" + this.ed_eyy.value +"'";
        	if ( Find4_sw == "Y" )
        	{
        		s_sql3    = s_sql3 + "   and ( B.BOOK_CD || b.byy )  in ( " + bookcode +" ) ";
        	}

        	var rdopt  = "/ragentpath ["+ gv_urlRdDataServer +"]" + " /rp ["+this.ed_sdate.value+"]"+ // 1
        					 "["+this.ed_edate.value+"]"+  						//2
        					 "["+pSbookcode+"]"+								//3
        					 "["+pEbookcode+"]"+								//4
        					 "["+this.ed_sgb.value + this.ed_scode.value+"]"+	//5
        					 "["+this.ed_egb.value + this.ed_ecode.value+"]"+	//6
        					 "["+p_yh+"]"+										//7
        					 "["+bgbrnm+"]"+									//8
        					 "["+s_sql1+"]"+									//9
        					 "["+s_sql2+"]"+									//10
        					 "["+s_sql3+"] /ruseswapdisk ";						//11

        	/* 미리 보기 OR 출력 버튼이벤트 시작 */
        	if(event_id == "btn_printview" ) // 미리보기 일때
        	{
        		trace(this.print_select.value);
        		switch(this.print_select.value)
        		{
        			case '0' : // 일자별 입고현황
        					this.Div00.set_url("sd::SD1010F_GRID1.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2);
        					var outds = "ds_1=ds_1";
        					var inds = "ds_1=ds_1";
        					trace(strArg);

        					this.gfn_TransactionP("ds1_select","JSP/sd/SD1010F_DS1_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;
        			case '1' : // 도서별 입고현황
        					this.Div00.set_url("sd::SD1010F_GRID2.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2);
        					var outds = "ds_2=ds_2";
        					var inds = "ds_2=ds_2";
        					trace(strArg);

        					this.gfn_TransactionP("ds2_select","JSP/sd/SD1010F_DS2_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;
        			case '2' : // 거래처별 입고현황
        					this.Div00.set_url("sd::SD1010F_GRID3.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2);
        					var outds = "ds_3=ds_3";
        					var inds = "ds_3=ds_3";
        					trace(strArg);

        					this.gfn_TransactionP("ds3_select","JSP/sd/SD1010F_DS3_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        					break;
        			case '3' : // 도서별 입고(영업부출고)현황
        					this.Div00.set_url("sd::SD1010F_GRID4.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2)+
        								 "s_sql3="+nexacro.wrapQuote(s_sql3);
        					var outds = "ds_4=ds_4";
        					var inds = "ds_4=ds_4";
        					trace(strArg);

        					this.gfn_TransactionP("ds4_select","JSP/sd/SD1010F_DS4_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        					break;
        			case '4' : // 도서별 입고(홍기부출고)현황
        					this.Div00.set_url("sd::SD1010F_GRID5.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2)+
        								 "s_sql3="+nexacro.wrapQuote(s_sql3);
        					var outds = "ds_5=ds_5";
        					var inds = "ds_5=ds_5";
        					trace(strArg);

        					this.gfn_TransactionP("ds5_select","JSP/sd/SD1010F_DS5_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        					break;
        			case '5' : // 일자별 입고현황(등록시간순)
        					this.Div00.set_url("sd::SD1010F_GRID6.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        								 "s_sql2="+nexacro.wrapQuote(s_sql2);
        					var outds = "ds_6=ds_6";
        					var inds = "ds_6=ds_6";
        					trace(strArg);

        					this.gfn_TransactionP("ds6_select","JSP/sd/SD1010F_DS6_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        					break;
        			case '6' : // 일자별 대체현황(미연결)
        					this.Div00.set_url("sd::SD1010F_GRID7.xfdl");

        					var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1);
        					var outds = "ds_7=ds_7";
        					var inds = "ds_7=ds_7";
        					trace(strArg);

        					this.gfn_TransactionP("ds7_select","JSP/sd/SD1010F_DS7_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        					break;
        		}
        	}
        	else if ( event_id  == "btn_print" ) // 출력일때
        	{
        		this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "sd::SDRDF.xfdl", "", this, 0, 0, 1024, 770);
        	}
        }

        this.optionGb = function()
        {
        	if (this.cmb_select.index ==3) return "";
        	else return this.cmb_select.value;
        }


        this.selectfile = function(num)
        {
        	if (num == 0) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1011r.mrd";
        	else if (num == 1) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1012r.mrd";
        	else if (num == 2) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1013r.mrd";
        	else if (num == 3) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1014r.mrd";
        	else if (num == 4) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1015r.mrd";
        	else if (num == 5) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1018r.mrd";
        	else if (num == 6) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1019r.mrd";
        }

        this.Gridcheck = function(strdsname)
        {
        	// 그리드 데이터 중에 체크된 데이터를 선별하여 리턴.
        	var strReturn="";
        	var loop = 0;
        	//trace("in Gridcheck" +this.dsIoyh.rowcount);

        	if (strdsname=="dsIoyh")
        	{
        		for (loop=0; loop < this.dsIoyh.rowcount; loop++)
        		{
        			if (this.dsIoyh.getColumn(loop,"chk")==1)
        			{
        			    Find1_sw  = "Y";
        				strReturn = strReturn +"'"+this.dsIoyh.getColumn(loop,"index")+"',";
        			}
        		}
        	}


        	if (strdsname=="dsBgbr")
        	{
        		trace("in dsBgbr ");
        		for (loop=0; loop< this.ds_bgbr.rowcount; loop++)
        		{
        			if ( this.ds_bgbr.getColumn(loop,"chk")==1 )
        			{
        				//trace(this.ds_bgbr.getColumn(loop,"chk") + "        loop: " + loop);
        			    Find2_sw  = "Y";
        			    bgbrnm    = bgbrnm + "'"+nexacro.trim(this.ds_bgbr.getColumn(loop,"name"))+"',";
        				strReturn = strReturn +"'"+this.ds_bgbr.getColumn(loop,"code")+"',";
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
        				strReturn = strReturn +"'"+this.left(this.dsSubbook.getColumn(loop,"code_key"),9)+"',";
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
        				strReturn = strReturn +"'"+this.dsSubbook.getColumn(loop,"code_key").substr(0,10)+ this.dsSubbook.getColumn(loop,"book_year").substr(0,10)+"',";
        			}
        		}

        	}
        	//마지막 쉼표 삭제.
        	return strReturn.substr(0,strReturn.length-1);
        }

        this.SD1010F_onload = function(obj,e)
        {
        	if(system.navigatorname.indexOf("nexacro")==-1)
        	{
        		// 현재 hash 에 해당하는 data 를 얻어온다.
        		var hash = MyHistory.getLocationHash();
        		//var data = MyHistory.getData(hash);
        		//trace(hash);
        	}
        	//디폴드 div 셋팅
        	//this.Div00.set_url("sd::SD1010F_GRID1.xfdl")

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
        	this.ed_egb.set_value("41");
        	this.ed_ecode.set_value("9999");
        	this.ed_sbook.set_value("0000000000");
        	this.ed_ebook.set_value("9999999999");
        	this.ed_syy.set_value(this.lfn_sd_getBookYear("start"));
        	this.ed_eyy.set_value(this.lfn_sd_getBookYear("end"));
        	this.ck_use.set_value(true);
        	this.ed_year.set_value(this.lfn_sd_getBookYear("year"));

        	//도서구분 가져오기
        	var strArg = "";
        	var outds = "ds_bgbr=ds_bgbr";
        	var inds = "ds_bgbr=ds_bgbr";

        	this.gfn_TransactionP("bgbr_select","JSP/sd/sel_bgbr.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        	this.ed_sdate.setFocus();
        };

        this.fnCallback = function(svcId, ErrorCode, ErrorMsg)
        {
        	if(ErrorCode != 0)
        		this.alert(ErrorMsg);
        	/*
        	else if ( svcId == "bgbr_select" )
        		//return;
        	else if ( svcId == "ds1_select")
        		//this.alert(ErrorMsg);
        	else if ( svcId == "subbook_select");
        		//this.alert(ErrorMsg);
        		*/
        };

        this.gr_ioyh_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		if(Fv_HeadChk1 == 0)
        			Fv_HeadChk1 = 1;
        		else
        			Fv_HeadChk1 = 0;

        		this.gr_ioyh.setCellProperty("head", 0, "text", Fv_HeadChk1);
        		for(var i = 0; i < this.dsIoyh.rowcount; i++)
        		{
        			this.dsIoyh.setColumn(i, "chk", Fv_HeadChk1);

        		}
        	}
        };

        this.gr__onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		if(Fv_HeadChk2 == 0)
        			Fv_HeadChk2 = 1;
        		else
        			Fv_HeadChk2 = 0;

        		this.gr_.setCellProperty("head", 0, "text", Fv_HeadChk2);
        		for(var i = 0; i < this.ds_bgbr.rowcount; i++)
        		{
        			this.ds_bgbr.setColumn(i, "chk", Fv_HeadChk2);

        		}
        	}
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

        	//trace("cmb_select_onitemchanged" + this.E_gubn.text);
        };


        this.E_gubn_onkeydown = function(obj,e)
        {
        	//trace(this.E_gubn.text);

        	if ( this.E_gubn.text == "0" )
                this.cmb_select.set_index(0);
            else if ( this.E_gubn.text == "1" )
                this.cmb_select.set_index(1);
            else if ( this.E_gubn.text == "2" )
                this.cmb_select.set_index(2);
            else if ( this.E_gubn.text == "3" )
                this.cmb_select.set_index(3);
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
        	}
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

        this.Div00_btn_search_onclick = function(obj,e)
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
        		this.Grid0.setCellProperty("head",1,"text","도서코드");
        		this.Grid0.setCellProperty("head",2,"text","년판");
        	}
        	else
        	{
        		this.Grid0.setCellProperty("head",1,"text","속성코드");
        		this.Grid0.setCellProperty("head",2,"text","출판");
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


        this.btn_excel_onclick = function(obj,e)
        {
        	var filename;

        	this.exportObj = new ExcelExportObject();
        	if ( this.Div00.url == "sd::SD1010F_GRID1.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1010F_GRID1, "Sheet1!A1");
        		filename = "일자별 입고현황"; }
        	else if ( this.Div00.url == "sd::SD1010F_GRID2.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1010F_GRID2, "Sheet1!A1");
        		filename = "도서별 입고현황"; }
        	else if ( this.Div00.url == "sd::SD1010F_GRID3.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1010F_GRID3, "Sheet1!A1");
        		filename = "거래처별 입고현황"; }
        	else if ( this.Div00.url == "sd::SD1010F_GRID4.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1010F_GRID4, "Sheet1!A1");
        		filename = "도서별 입고(영업부출고)현황"; }
        	else if ( this.Div00.url == "sd::SD1010F_GRID5.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1010F_GRID5, "Sheet1!A1");
        		filename = "도서별 입고(홍기부출고)현황"; }
        	else if ( this.Div00.url == "sd::SD1010F_GRID6.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1010F_GRID6, "Sheet1!A1");
        		filename = "일자별 입고현황(등록시간순)"; }
        	else if ( this.Div00.url == "sd::SD1010F_GRID7.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1010F_GRID7, "Sheet1!A1");
        		filename = "일자별 대체현황(미연결)"; }
        	this.exportObj.set_exporturl(gv_urlXeni);
        	this.exportObj.set_exportfilename(filename);
            this.exportObj.exportData();

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD1010F_onload,this);
            this.Static00_01_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01_00_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.gr_ioyh.addEventHandler("onheadclick",this.gr_ioyh_onheadclick,this);
            this.gr_.addEventHandler("onheadclick",this.gr__onheadclick,this);
            this.cmb_select.addEventHandler("onitemchanged",this.cmb_select_onitemchanged,this);
            this.btn_ebookcode.addEventHandler("onclick",this.btn_ebookcode_onclick,this);
            this.Button5.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.btn_sbookcode.addEventHandler("onclick",this.btn_sbookcode_onclick,this);
            this.btn_scust.addEventHandler("onclick",this.btn_scust_onclick,this);
            this.btn_ecust.addEventHandler("onclick",this.btn_ecust_onclick,this);
            this.E_gubn.addEventHandler("onkeydown",this.E_gubn_onkeydown,this);
            this.Static00_01_00_00_01_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.print_select.addEventHandler("onitemchanged",this.cmb_select_onitemchanged,this);
            this.btn_printview.addEventHandler("onclick",this.btn_printview_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_printview_onclick,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01_00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
        };
        this.loadIncludeScript("SD1010F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
