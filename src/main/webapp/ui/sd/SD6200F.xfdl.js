(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD6170F");
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
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">코드순</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">도서구분명순</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_book_scode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MCODE\" type=\"STRING\" size=\"256\"/><Column id=\"MCODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DCODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SCODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"KCODE\" type=\"STRING\" size=\"256\"/><Column id=\"KCODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HCODE\" type=\"STRING\" size=\"256\"/><Column id=\"HCODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TCODENM\" type=\"STRING\" size=\"256\"/><Column id=\"SYY\" type=\"STRING\" size=\"256\"/><Column id=\"UU_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_book_scode_send", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MCODE\" type=\"STRING\" size=\"256\"/><Column id=\"MCODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DCODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SCODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"KCODE\" type=\"STRING\" size=\"256\"/><Column id=\"KCODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HCODE\" type=\"STRING\" size=\"256\"/><Column id=\"HCODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TCODENM\" type=\"STRING\" size=\"256\"/><Column id=\"SYY\" type=\"STRING\" size=\"256\"/><Column id=\"UU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"O_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"O_MCODE\" type=\"STRING\" size=\"256\"/><Column id=\"O_DCODE\" type=\"STRING\" size=\"256\"/><Column id=\"O_JCODE\" type=\"STRING\" size=\"256\"/><Column id=\"O_SCODE\" type=\"STRING\" size=\"256\"/><Column id=\"O_KCODE\" type=\"STRING\" size=\"256\"/><Column id=\"O_HCODE\" type=\"STRING\" size=\"256\"/><Column id=\"ROWTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jcode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">유아</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">초등</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">중등</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">고등</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","56","11","300","69",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("속성코드등록");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","25","72",null,"40","25",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("등록");
            obj.set_background("#3cbcb8");
            obj.set_color("white");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","25","Static01:-2","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("사업부");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03","957","-816","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("명칭");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03_00_00","33.81%","Static01:-2","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("판매형태");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","Static01_01:-2","Static01:-2",null,"40","Static01_03_00_00:-2",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03_00_00_00","66.06%","Static01:-2","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("학교등급");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04","Static01_03_00_00:-2","Static01:-2",null,"40","Static01_03_00_00_00:-2",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","25","236",null,"40","25",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("조회");
            obj.set_background("#3cbcb8");
            obj.set_color("white");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","25","350",null,null,"25","15",null,null,"70",null,this);
            obj.set_taborder("15");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","25","274","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("속성코드");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_05","25","312","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("명칭");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_07","45.88%","312","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("정렬조건");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_06","Static02_05:-2","312",null,"40","Static02_07:-2",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_s_name","Static02_05:10","317",null,"30","Static02_07:10",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_03","45.88%","274","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("조건");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","23.63%","274","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("출판년도");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02","Static02_01:-2","274",null,"40","Static02_01_00:-2",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_s_code","Static02_01:10","279",null,"30","Static02_01_00:10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_format("@@@@@@@@@");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_09",null,"274","123","78","25",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_04","Static02_03:-2","274",null,"40","Static02_09:-2",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_08","Static02_07:-2","312",null,"40","Static02_09:-2",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_view","42","Static02_07:10",null,null,"42","32",null,null,"50",null,this);
            obj.set_taborder("24");
            obj.set_binddataset("ds_book_scode");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"40\"/><Column size=\"180\"/><Column size=\"56\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"사업부명\"/><Cell col=\"2\" text=\"판매형태\"/><Cell col=\"3\" text=\"학급\"/><Cell col=\"4\" text=\"시리즈\"/><Cell col=\"5\" text=\"시리즈명\"/><Cell col=\"6\" text=\"과목\"/><Cell col=\"7\" text=\"과목명\"/><Cell col=\"8\" text=\"학기/월\"/><Cell col=\"9\" text=\"학기/월\"/><Cell col=\"10\" text=\"연결코드\"/><Cell col=\"11\" text=\"연결코드명\"/><Cell col=\"12\" text=\"출판년도\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:MCODE_NM\"/><Cell col=\"2\" text=\"bind:DCODE_NM\"/><Cell col=\"3\" text=\"bind:JCODE\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:SCODE\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:SCODE_NM\"/><Cell col=\"6\" text=\"bind:KCODE\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:KCODE_NM\"/><Cell col=\"8\" text=\"bind:HCODE\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:HCODE_NM\"/><Cell col=\"10\" text=\"bind:TCODE\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:TCODENM\"/><Cell col=\"12\" text=\"bind:SYY\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"284","101","57","35",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회하기");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_search2","Static02_03:10","279",null,"30","Static02_09:10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_cmb_search");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text(">=  (같거나크다)");
            obj.set_value("3");
            obj.set_index("3");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_orderby","Static02_07:10","317",null,"30","Static02_09:10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_cmb_orderby");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("전표일자순");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"26","75","31","25",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("출력");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_can",null,"26","75","31","btn_print:12",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"26","75","31","btn_can:12",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"26","75","31","btn_del:13",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04_02","Static01_03_00_00_00:-2","Static01:-2",null,"40","25",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","25","148","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("시리즈명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03_00_00_01","33.81%","148","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("과목");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","Static01_01_00:-2","148",null,"40","Static01_03_00_00_01:-2",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03_00_00_00_00","66.06%","148","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("학기/월");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04_00","Static01_03_00_00_01:-2","148",null,"40","Static01_03_00_00_00_00:-2",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04_02_00","Static01_03_00_00_00_00:-2","148",null,"40","25",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","25","186","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("연결코드");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03_00_00_02","50.06%","186","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("출판년도");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","Static01_01_01:-2","186",null,"40","Static01_03_00_00_02:-2",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04_01","Static01_03_00_00_02:-2","186",null,"40","25",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02_00","Static02_01_00:-2","274",null,"40","Static02_03:-2",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values1","Static01_01:10","115",null,"30","87%",null,"36",null,null,null,this);
            obj.set_taborder("41");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_format("@");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_return1","ed_values1:-1","115",null,"30","Static01_03_00_00:10",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values2","Static01_03_00_00:10","115",null,"30","54.81%",null,"36",null,null,null,this);
            obj.set_taborder("43");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_format("@");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_return2","ed_values2:-1","115",null,"30","Static01_03_00_00_00:10",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values4","Static01_01_00:10","153",null,"30","87%",null,"36",null,null,null,this);
            obj.set_taborder("45");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_format("@@");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_return4","ed_values4:-1","153",null,"30","Static01_03_00_00_01:10",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values5","Static01_03_00_00_01:10","153",null,"30","54.81%",null,"36",null,null,null,this);
            obj.set_taborder("47");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_format("@@");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_return5","ed_values5:-1","153",null,"30","Static01_03_00_00_00_00:10",null,null,null,null,null,this);
            obj.set_taborder("48");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values6","Static01_03_00_00_00_00:10","153",null,"30","22.63%",null,"36",null,null,null,this);
            obj.set_taborder("49");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_format("@@");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_return6","ed_values6:-1","153",null,"30","35",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values7","Static01_01_01:10","191",null,"30","83.19%",null,"66",null,null,null,this);
            obj.set_taborder("51");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_format("@@@@@@@@@");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_return7","ed_values7:-1","191",null,"30","Static01_03_00_00_02:10",null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_jcode","Static01_03_00_00_00:10","115",null,"30","35",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_innerdataset("ds_jcode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Spin("ed_values8","Static01_03_00_00_02:10","191",null,"30","14.94%",null,null,null,null,null,this);
            obj.set_taborder("55");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_uuyn","ed_values8:10","191",null,"30","35",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("사용안함");
            this.addChild(obj.name, obj);

            obj = new Spin("ed_s_yy","Static02_01_00:10","279",null,"30","Static02_03:10",null,null,null,null,null,this);
            obj.set_taborder("56");
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
        this.addIncludeScript("SD6200F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD6200F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD6200F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var NewRowNum    = "";					// 추가행번호.
        var EditnRow	 = "";					//수정된 행번호
        var Error        = "";					//에러코드.
        var return_code  = "";
        var IUSW         = "";
        var n_code       = "";
        var o_code       = "";
        var o_mcode      = "";
        var o_dcode      = "";
        var o_jcode      = "";
        var o_scode      = "";
        var o_kcode      = "";
        var o_hcode      = "";

        this.SD6170F_onload = function(obj,e)
        {
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyy");
        	this.cb_jcode.set_value(2);
        	this.cmb_search2.set_index(3);
        	this.cmb_orderby.set_index(1);
        	this.ed_values8.set_value(f_date);
        	this.ed_s_yy.set_value("");
        	this.fnDataclear();
        	this.ed_values1.setFocus();
        	this.ed_s_code.set_value("");
        };

        this.fnSearch_zipcode = function()
        {
        	var strUrl = "JSP/sd/select_book_scode.jsp";
        	var strArg;
        	var strDs 	= "ds_book_scode=ds_book_scode";

        	strArg = " Values1="+nexacro.wrapQuote(nexacro.trim(this.ed_s_code.value))+
        	         " Values2="+nexacro.wrapQuote(this.ed_s_yy.text)+
        			 " Values3="+nexacro.wrapQuote(this.ed_s_name.text)+
        			 " Option1="+nexacro.wrapQuote(this.cmb_search2.index)+
        	         " Orderby="+nexacro.wrapQuote(this.cmb_orderby.index);

        	this.gfn_TransactionP("codesearch", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        }

        this.fnCallback = function(strSvcID, nErrorCode, strErrorMag)
        {
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
            IUSW            = "N";
            NewRowNum       = "";
            EditnRow	    = "";
            n_code          = "";
            o_code          = "";
            o_mcode         = "";
            o_dcode         = "";
            o_jcode         = "";
            o_scode         = "";
            o_kcode         = "";
            o_hcode         = "";
        	this.ed_values1.set_value("");
        	this.ed_return1.set_value("");
        	this.ed_values2.set_value("");
        	this.ed_return2.set_value("");
        	this.ed_values4.set_value("");
        	this.ed_return4.set_value("");
        	this.ed_values5.set_value("");
        	this.ed_return5.set_value("");
        	this.ed_values6.set_value("");
        	this.ed_return6.set_value("");
        	this.ed_values7.set_value("");
        	this.ed_return7.set_value("");
        	this.ed_values8.set_value(f_date);
        	this.cb_jcode.set_value(2);
        	this.chk_uuyn.set_value(false);
        }

        //입력모드
        this.fnInputdata = function()
        {
            n_code  =  this.ed_values1.value + this.ed_values2.value + this.cb_jcode.value +
                       this.ed_values4.value + this.ed_values5.value + this.ed_values6.value;
        	this.ds_book_scode.setColumn(NewRowNum,"CODE",     n_code);
        	this.ds_book_scode.setColumn(NewRowNum,"MCODE",    this.ed_values1.value);
        	this.ds_book_scode.setColumn(NewRowNum,"DCODE",    this.ed_values2.value);
        	this.ds_book_scode.setColumn(NewRowNum,"JCODE",    this.cb_jcode.value);
        	this.ds_book_scode.setColumn(NewRowNum,"SCODE",    this.ed_values4.value);
        	this.ds_book_scode.setColumn(NewRowNum,"SCODE_NM", this.ed_return4.value);
        	this.ds_book_scode.setColumn(NewRowNum,"KCODE",    this.ed_values5.value);
        	this.ds_book_scode.setColumn(NewRowNum,"KCODE_NM", this.ed_return5.value);
        	this.ds_book_scode.setColumn(NewRowNum,"HCODE",    this.ed_values6.value);
        	this.ds_book_scode.setColumn(NewRowNum,"TCODE",    this.ed_values7.value);
        	this.ds_book_scode.setColumn(NewRowNum,"SYY",      this.ed_values8.value);
        	this.ds_book_scode.setColumn(NewRowNum,"UU_YN",    "Y");
        	if ( this.chk_uuyn.value == true )
        		this.ds_book_scode.setColumn(NewRowNum,"UU_YN",    "N");

            this.ds_book_scode_send.addRow();
        	this.ds_book_scode_send.copyRow(0,this.ds_book_scode,NewRowNum);
        	this.ds_book_scode_send.setColumn(0,"O_CODE",   o_code);
        	this.ds_book_scode_send.setColumn(0,"O_MCODE",  o_mcode);
        	this.ds_book_scode_send.setColumn(0,"O_DCODE",  o_dcode);
        	this.ds_book_scode_send.setColumn(0,"O_JCODE",  o_jcode);
        	this.ds_book_scode_send.setColumn(0,"O_SCODE",  o_scode);
        	this.ds_book_scode_send.setColumn(0,"O_KCODE",  o_kcode);
        	this.ds_book_scode_send.setColumn(0,"O_HCODE",  o_hcode);
        	this.ds_book_scode_send.setColumn(0,"ROWTYPE", "I" );
        }

        //수정모드
        this.fnEdit_data = function()
        {
            n_code  =  this.ed_values1.value + this.ed_values2.value + this.cb_jcode.value +
                       this.ed_values4.value + this.ed_values5.value + this.ed_values6.value;
        	this.ds_book_scode.setColumn(NewRowNum,"CODE",  n_code);
        	this.ds_book_scode.setColumn(EditnRow,"MCODE", this.ed_values1.value);
        	this.ds_book_scode.setColumn(EditnRow,"DCODE", this.ed_values2.value);
        	this.ds_book_scode.setColumn(EditnRow,"JCODE", this.cb_jcode.value);
        	this.ds_book_scode.setColumn(EditnRow,"SCODE", this.ed_values4.value);
        	this.ds_book_scode.setColumn(EditnRow,"SCODE_NM", this.ed_return4.value);
        	this.ds_book_scode.setColumn(EditnRow,"KCODE",    this.ed_values5.value);
        	this.ds_book_scode.setColumn(EditnRow,"KCODE_NM", this.ed_return5.value);
        	this.ds_book_scode.setColumn(EditnRow,"HCODE", this.ed_values6.value);
        	this.ds_book_scode.setColumn(EditnRow,"TCODE", this.ed_values7.value);
        	this.ds_book_scode.setColumn(EditnRow,"SYY",   this.ed_values8.value);
        	this.ds_book_scode.setColumn(EditnRow,"UU_YN",    "Y");
        	if ( this.chk_uuyn.value == true )
        	this.ds_book_scode.setColumn(EditnRow,"UU_YN",    "N");
            this.ds_book_scode_send.addRow();
        	this.ds_book_scode_send.copyRow(0,this.ds_book_scode,EditnRow);
        	this.ds_book_scode_send.setColumn(0,"O_CODE",   o_code);
        	this.ds_book_scode_send.setColumn(0,"O_MCODE",  o_mcode);
        	this.ds_book_scode_send.setColumn(0,"O_DCODE",  o_dcode);
        	this.ds_book_scode_send.setColumn(0,"O_JCODE",  o_jcode);
        	this.ds_book_scode_send.setColumn(0,"O_SCODE",  o_scode);
        	this.ds_book_scode_send.setColumn(0,"O_KCODE",  o_kcode);
        	this.ds_book_scode_send.setColumn(0,"O_HCODE",  o_hcode);
        	this.ds_book_scode_send.setColumn(0,"ROWTYPE", "U" );
        	this.grd_view.updateToDataset();
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.fnSearch_zipcode();
        	NewRowNum = "";
        };

        this.grd_view_oncelldblclick = function(obj,e)
        {
        	EditnRow = e.row;
        	o_code           = this.ds_book_scode.getColumn(e.row,"CODE");
        	o_mcode          = this.ds_book_scode.getColumn(e.row,"MCODE");
        	o_dcode          = this.ds_book_scode.getColumn(e.row,"DCODE");
        	o_jcode          = this.ds_book_scode.getColumn(e.row,"JCODE");
        	o_scode          = this.ds_book_scode.getColumn(e.row,"SCODE");
        	o_kcode          = this.ds_book_scode.getColumn(e.row,"KCODE");
        	o_hcode          = this.ds_book_scode.getColumn(e.row,"HCODE");
            IUSW             = "Y";
        	this.ed_values1.set_value(this.ds_book_scode.getColumn(e.row,"MCODE"));
        	this.ed_return1.set_value(this.ds_book_scode.getColumn(e.row,"MCODE_NM"));
        	this.ed_values2.set_value(this.ds_book_scode.getColumn(e.row,"DCODE"));
        	this.ed_return2.set_value(this.ds_book_scode.getColumn(e.row,"DCODE_NM"));
        	this.cb_jcode.set_value(this.ds_book_scode.getColumn(e.row,"JCODE"));
        	this.ed_values4.set_value(this.ds_book_scode.getColumn(e.row,"SCODE"));
        	this.ed_return4.set_value(this.ds_book_scode.getColumn(e.row,"SCODE_NM"));
        	this.ed_values5.set_value(this.ds_book_scode.getColumn(e.row,"KCODE"));
        	this.ed_return5.set_value(this.ds_book_scode.getColumn(e.row,"KCODE_NM"));
        	this.ed_values6.set_value(this.ds_book_scode.getColumn(e.row,"HCODE"));
        	this.ed_return6.set_value(this.ds_book_scode.getColumn(e.row,"HCODE_NM"));
        	this.ed_values7.set_value(this.ds_book_scode.getColumn(e.row,"TCODE"));
        	this.ed_return7.set_value(this.ds_book_scode.getColumn(e.row,"TCODENM"));
        	this.ed_values8.set_value(this.ds_book_scode.getColumn(e.row,"SYY"));
            this.chk_uuyn.set_value(false);
        	if ( this.ds_book_scode.getColumn(e.row,"UU_YN") == "N" )
        	   this.chk_uuyn.set_value(true);

            this.ed_values1.setFocus();
        };

        this.btn_save_onclick = function(obj,e)
        {
        	var strUrl = "JSP/sd/insert_book_scode.jsp";
        	var inDs 	= "ds_book_scode_send=ds_book_scode_send";
        	if ((nexacro.trim(this.ed_values1.value)).length != 1)
        	{
        		alert("사업부 오류! 수정하세요!");
        		return;
        	}
        	if ((nexacro.trim(this.ed_values2.value)).length != 1)
        	{
        		alert("형태 오류! 수정하세요!");
        		return;
        	}
        	if ((nexacro.trim(this.ed_values4.value)).length != 2)
        	{
        		alert("시리즈 오류! 수정하세요!");
        		return;
        	}
        	if ((nexacro.trim(this.ed_values5.value)).length != 2)
        	{
        		alert("과목 오류! 수정하세요!");
        		return;
        	}
        	if ((nexacro.trim(this.ed_values6.value)).length != 2)
        	{
        		alert("학기 오류! 수정하세요!");
        		return;
        	}
        	if ((nexacro.trim(this.ed_values7.value)).length != 9)
        	{
        		alert("연결코드 오류! 수정하세요!");
        		return;
        	}

        	if (IUSW == "Y")
        		this.fnEdit_data();
        	else
        	{
        		NewRowNum = this.ds_book_scode.addRow();
        		this.fnInputdata();
        	}
        	this.gfn_TransactionP("insert", strUrl, inDs, "", "", "fnTr_Callback", false, "P", false, this);
        };

        this.fnTr_Callback = function(strSvcID, nErrorCode, strErrorMag)
        {
        	if ( strSvcID == "insert" )
        	{
        		if (strErrorMag == "DUP" || strErrorMag.substr(0,10) == "JDBC-10007")
        		{
        			alert("코드가 중복되었습니다. \n 재검색후 저장해주세요.");
        			this.btn_search.click();
        		}
        		else
        		{
        			alert("저장완료.");
                 	if ( IUSW == "N" )
                    	this.fnDataclear();
        			this.ds_book_scode_send.deleteRow(0);
                	this.ed_values1.setFocus();
        		}
        	}
        	else if ( strSvcID == "delete" )
        	{
        		if (strErrorMag == "Dup")
        		{
        			alert("삭제 Error.");
        		}
        		else
        		{
        			this.ds_book_scode.deleteRow(EditnRow);
                 	this.fnDataclear();
                	this.ed_values1.setFocus();
        		}
        	}
        	else if ( strSvcID == "codesearch" )
        	{
        		if(nErrorCode == 0 && strErrorMag != "")
        			this.ed_return1.set_value(strErrorMag);
        		else
        		{
        			this.ed_return1.set_value("");
        			alert("자료가 없습니다");
        		}
        	}
        	else if ( strSvcID == "codesearch2" )
        	{
        		if(nErrorCode == 0 && strErrorMag != "")
        			this.ed_return2.set_value(strErrorMag);
        		else
        		{
        			this.ed_return2.set_value("");
        			alert("자료가 없습니다");
        		}
        	}
        	else if ( strSvcID == "codesearch3" )
        	{
        		if(nErrorCode == 0 && strErrorMag != "")
        			this.ed_return4.set_value(strErrorMag);
        	}
        	else if ( strSvcID == "codesearch4" )
        	{
        		if(nErrorCode == 0 && strErrorMag != "")
        			this.ed_return5.set_value(strErrorMag);
        	}
        	else if ( strSvcID == "codesearch5" )
        	{
        		if(nErrorCode == 0 && strErrorMag != "")
        			this.ed_return6.set_value(strErrorMag);
        		else
        		{
        			this.ed_return6.set_value("");
        			alert("자료가 없습니다");
        		}
        		if (((nexacro.trim(this.ed_values1.value)).length == 1) ||((nexacro.trim(this.ed_values2.value)).length == 1) ||
        	    ((nexacro.trim(this.ed_values4.value)).length == 2) || ((trim(this.ed_values5.value)).length == 2) ||
        		((trim(this.ed_values6.value)).length == 2))
        	    {
        			this.ed_values7.set_value(nexacro.trim(this.ed_values1.value) + nexacro.trim(this.ed_values2.value) +
        									  this.cb_jcode.value + nexacro.trim(this.ed_values4.value) +
        								      nexacro.trim(this.ed_values5.value) + nexacro.trim(this.ed_values6.value));
        			this.ed_return7.set_value(nexacro.trim(this.ed_return4.value) + nexacro.trim(this.ed_return5.value) +
        									  nexacro.trim(this.ed_return6.value));
        		}
        		else
        		{
        			this.ed_values7.set_value("");
        			this.ed_return7.set_value("");
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
        	var strUrl = "JSP/sd/insert_book_scode.jsp";
        	var inDs = "ds_book_scode_send=ds_book_scode_send";
        	var objApp = nexacro.getApplication();
        	if(msg_result = objApp.confirm( "삭제된 데이터는 복원하실수 없습니다.\n 정말 삭제하시겠습니까? " , "삭제처리", "warning" ))
            {
        		n_code  =  this.ed_values1.value + this.ed_values2.value + this.cb_jcode.value +
                           this.ed_values4.value + this.ed_values5.value + this.ed_values6.value;
        	    this.ds_book_scode.setColumn(NewRowNum,"CODE",  n_code);
        		this.ds_book_scode.setColumn(EditnRow,"MCODE", this.ed_values1.value);
        		this.ds_book_scode.setColumn(EditnRow,"DCODE", this.ed_values2.value);
        		this.ds_book_scode.setColumn(EditnRow,"JCODE", this.cb_jcode.value);
        		this.ds_book_scode.setColumn(EditnRow,"SCODE", this.ed_values4.value);
        		this.ds_book_scode.setColumn(EditnRow,"KCODE", this.ed_values5.value);
        		this.ds_book_scode.setColumn(EditnRow,"HCODE", this.ed_values6.value);
        		this.ds_book_scode.setColumn(EditnRow,"TCODE", this.ed_values7.value);
        		this.ds_book_scode.setColumn(EditnRow,"SYY",   this.ed_values8.value);
            	this.ds_book_scode.setColumn(EditnRow,"UU_YN",    "Y");
        	    if ( this.chk_uuyn.value == true )
        	      this.ds_book_scode.setColumn(EditnRow,"UU_YN",    "N");
                this.ds_book_scode_send.addRow();
        		this.ds_book_scode_send.copyRow(0,this.ds_book_scode,EditnRow);
        		this.ds_book_scode_send.setColumn(0,"O_CODE",   o_code);
        		this.ds_book_scode_send.setColumn(0,"O_MCODE",  o_mcode);
        		this.ds_book_scode_send.setColumn(0,"O_DCODE",  o_dcode);
        		this.ds_book_scode_send.setColumn(0,"O_JCODE",  o_jcode);
        		this.ds_book_scode_send.setColumn(0,"O_SCODE",  o_scode);
        		this.ds_book_scode_send.setColumn(0,"O_KCODE",  o_kcode);
        		this.ds_book_scode_send.setColumn(0,"O_HCODE",  o_hcode);
        		this.ds_book_scode_send.setColumn(0,"ROWTYPE", "D" );
        		this.gfn_TransactionP("delete", strUrl, inDs, "", "", "fnTr_Callback", false, "P", false, this);
        		this.ds_book_scode.deleteRow(EditnRow);
        		this.ds_book_scode_send.deleteRow(0);
        		this.grd_view.updateToDataset();
        	}
        };

        this.ds_book_scode_onload = function(obj,e)
        {
        	if(e.reason == 0)
        	{
        		if (this.ds_book_scode.rowcount == 0)
        			alert("조회된 데이터가 없습니다.");
        	}
        };
        /*
        this.common_onkeydown = function(obj:nexacro.MaskEdit,e:nexacro.KeyEventInfo)
        {
        	//Enter Key를 눌렀을 경우 처리
        	if (e.keycode == 13)
        	{
        		if (obj.name == "ed_code") this.ed_name.setFocus();
        	}//ESC 키처리
        	else if (e.keycode == 27)
        	{
        		if (obj.name == "ed_name") this.ed_code.setFocus();
        	}
        };

        this.s_common_onkeydown = function(obj:nexacro.MaskEdit,e:nexacro.KeyEventInfo)
        {
        	//Enter Key를 눌렀을 경우 처리
        	if (e.keycode == 13)
        	{
        		if (obj.id == "ed_s_code") this.ed_s_name.setFocus();
        	}//ESC 키처리
        	else if (e.keycode == 27)
        	{
        		if (obj.id == "ed_s_name") this.ed_s_code.setFocus();
        	}
        };
        */
        this.ed_values1_onkillfocus = function(obj,e)
        {
        	this.ed_return1.set_value("");
        	var strUrl = "JSP/sd/book_scode1_help.jsp";
        	var strArg;
        	var inds 	= "";
        	var outds 	= "";
        	if ((nexacro.trim(this.ed_values1.value)).length != 1) return;

        	strArg = " Values1="+nexacro.wrapQuote(this.ed_values1.value);
        	this.gfn_TransactionP("codesearch", strUrl, "", "", strArg, "fnTr_Callback", false, "P", false, this);
        };

        this.ed_values2_onkillfocus = function(obj,e)
        {
        	this.ed_return2.set_value("");
        	var strUrl = "JSP/sd/book_scode2_help.jsp";
        	var strArg;
        	var inds 	= "";
        	var outds 	= "";
        	if ((nexacro.trim(this.ed_values1.value)).length != 1) return;
        	if ((nexacro.trim(this.ed_values2.value)).length != 1) return;
        	strArg = " Values1="+nexacro.wrapQuote(this.ed_values1.value)+" Values2="+nexacro.wrapQuote(this.ed_values2.value);
        	this.gfn_TransactionP("codesearch2", strUrl, "", "", strArg, "fnTr_Callback", false, "P", false, this);
        };

        this.ed_values4_onkillfocus = function(obj,e)
        {
        	this.ed_return4.set_value("");
        	var strUrl = "JSP/sd/book_scode3_help.jsp";
        	var strArg;
        	var inds 	= "";
        	var outds 	= "";
        	if ((nexacro.trim(this.ed_values1.value)).length != 1) return;
        	if ((nexacro.trim(this.ed_values2.value)).length != 1) return;
        	if ((nexacro.trim(this.ed_values4.value)).length == 0) return;
        	else if((nexacro.trim(this.ed_values4.value)).length == 1)
        		this.ed_values4.set_value("0"+nexacro.trim(this.ed_values4.value));
        	this.ed_values4.updateToDataset();

        	strArg = " Values1="+nexacro.wrapQuote(this.ed_values1.value)+" Values2="+nexacro.wrapQuote(this.ed_values2.value)+
        			 " Values3="+nexacro.wrapQuote(this.cb_jcode.value)+" Values4="+nexacro.wrapQuote(this.ed_values4.value);
        	this.gfn_TransactionP("codesearch3", strUrl, "", "", strArg, "fnTr_Callback", false, "P", false, this);
        };

        this.ed_values5_onkillfocus = function(obj,e)
        {
        	this.ed_return5.set_value("");
        	var strUrl = "JSP/sd/book_scode4_help.jsp";
        	var strArg;
        	var inds 	= "";
        	var outds 	= "";
        	if ((nexacro.trim(this.ed_values1.value)).length != 1) return;
        	if ((nexacro.trim(this.ed_values2.value)).length != 1) return;
        	if ((nexacro.trim(this.ed_values4.value)).length != 2) return;
        	if ((nexacro.trim(this.ed_values5.value)).length == 0) return;
        	else if((nexacro.trim(this.ed_values5.value)).length == 1)
        		this.ed_values5.set_value("0"+nexacro.trim(this.ed_values5.value));
        	this.ed_values5.updateToDataset();

        	strArg = " Values1="+nexacro.wrapQuote(this.ed_values1.value)+" Values2="+nexacro.wrapQuote(this.ed_values2.value)+
        			 " Values3="+nexacro.wrapQuote(this.cb_jcode.value)+" Values4="+nexacro.wrapQuote(this.ed_values4.value)+" Values5="+nexacro.wrapQuote(this.ed_values5.value);
        	this.gfn_TransactionP("codesearch4", strUrl, "", "", strArg, "fnTr_Callback", false, "P", false, this);
        };

        this.ed_values6_onkillfocus = function(obj,e)
        {
        	this.ed_return6.set_value("");
        	var strUrl = "JSP/sd/book_hcode_help.jsp";
        	var strArg;
        	var inds 	= "";
        	var outds 	= "";
        	if ((nexacro.trim(this.ed_values6.value)).length == 0) return;
        	else if ((nexacro.trim(this.ed_values6.value)).length == 1)
        		this.ed_values6.set_value("0"+nexacro.trim(this.ed_values6.value));
        	this.ed_values6.updateToDataset();
        	strArg = " Values1="+nexacro.wrapQuote(this.ed_values6.value);
        	this.gfn_TransactionP("codesearch5", strUrl, "", "", strArg, "fnTr_Callback", false, "P", false, this);
        };

        this.btn_print_onclick = function(obj,e)
        {
        	var sOpenStyle = "topmost=true autosize=true dragmovetype=all titletext=조회화면 showtitlebar=true showstatusbar=false resizable=true";
        	nexacro.open("print", "sd::SD6200P.xfdl", this.getOwnerFrame(), "", sOpenStyle, this.width/2, this.height/2);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD6170F_onload,this);
            this.ed_s_name.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.ed_s_code.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.Static02_08.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_view.addEventHandler("oncelldblclick",this.grd_view_oncelldblclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
            this.btn_can.addEventHandler("onclick",this.btn_can_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_save.addEventHandler("onkeydown",this.btn_save_onkeydown,this);
            this.ed_values1.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.ed_values1.addEventHandler("onkillfocus",this.ed_values1_onkillfocus,this);
            this.ed_return1.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.ed_values2.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.ed_values2.addEventHandler("onkillfocus",this.ed_values2_onkillfocus,this);
            this.ed_return2.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.ed_values4.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.ed_values4.addEventHandler("onkillfocus",this.ed_values4_onkillfocus,this);
            this.ed_return4.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.ed_values5.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.ed_values5.addEventHandler("onkillfocus",this.ed_values5_onkillfocus,this);
            this.ed_return5.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.ed_values6.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.ed_values6.addEventHandler("onkillfocus",this.ed_values6_onkillfocus,this);
            this.ed_return6.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.ed_values7.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.ed_return7.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.ds_book_scode.addEventHandler("onload",this.ds_book_scode_onload,this);
            this.ds_book_scode_send.addEventHandler("onload",this.ds_kwa_onload,this);
        };
        this.loadIncludeScript("SD6200F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
