(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD6010F");
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
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">우편번호순</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">주소순</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_zipcode", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQNO\" type=\"STRING\" size=\"256\"/><Column id=\"ZIPCD\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"SIDO\" type=\"STRING\" size=\"256\"/><Column id=\"GUGUN\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"MASS\" type=\"STRING\" size=\"256\"/><Column id=\"DOSU\" type=\"STRING\" size=\"256\"/><Column id=\"BUNJIS\" type=\"STRING\" size=\"256\"/><Column id=\"BUNJIE\" type=\"STRING\" size=\"256\"/><Column id=\"OZIPCD\" type=\"STRING\" size=\"256\"/><Column id=\"DDD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_zipcode_send", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQNO\" type=\"STRING\" size=\"256\"/><Column id=\"ZIPCD\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"SIDO\" type=\"STRING\" size=\"256\"/><Column id=\"GUGUN\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"MASS\" type=\"STRING\" size=\"256\"/><Column id=\"DOSU\" type=\"STRING\" size=\"256\"/><Column id=\"BUNJIS\" type=\"STRING\" size=\"256\"/><Column id=\"BUNJIE\" type=\"STRING\" size=\"256\"/><Column id=\"OZIPCD\" type=\"STRING\" size=\"256\"/><Column id=\"DDD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","56","11","300","69",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("우편번호등록");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","25","72",null,"36","25",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("등록");
            obj.set_background("#3cbcb8");
            obj.set_color("white");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","25","Static01:-2","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("우편번호");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03","957","-816","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("명칭");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03_00_00","33.81%","Static01:-2","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("번호");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","Static01_01:-2","Static01:-2",null,"36","Static01_03_00_00:-2",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03_00_00_00_00","66.06%","140","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("동/면/읍");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04","Static01_03_00_00:-2","Static01:-2",null,"36","Static01_03_00_00_00_00:-2",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","25","253",null,"36","25",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("조회");
            obj.set_background("#3cbcb8");
            obj.set_color("white");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","25","355",null,null,"25","15",null,null,"70",null,this);
            obj.set_taborder("24");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","25","287","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("우편번호");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_05","25","321","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("주소");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_07","50%","321","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("정렬조건");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_06","Static02_05:-2","321",null,"36","Static02_07:-2",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_s_addr","Static02_05:10","326",null,"26","Static02_07:10",null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_03","50%","287","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("조건");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02","Static02_01:-2","287",null,"36","Static02_03:-2",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_s_zipcode","Static02_01:10","292",null,"26","Static02_03:10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_format("###-###");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_09",null,"287","123","70","25",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_04","Static02_03:-2","287",null,"36","Static02_09:-2",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_08","Static02_07:-2","321",null,"36","Static02_09:-2",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_view","42","Static02_07:10",null,null,"42","32",null,null,"50",null,this);
            obj.set_taborder("33");
            obj.set_binddataset("ds_zipcode");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"250\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"우편번호\"/><Cell col=\"1\" text=\"DDD\"/><Cell col=\"2\" text=\"번호\"/><Cell col=\"3\" text=\"주소\"/><Cell col=\"4\" text=\"번지(부터)\"/><Cell col=\"5\" text=\"번지(까지)\"/><Cell col=\"6\" text=\"시도\"/><Cell col=\"7\" text=\"시구군\"/><Cell col=\"8\" text=\"동/면/읍\"/><Cell col=\"9\" text=\"리/기관/아파트\"/></Band><Band id=\"body\"><Cell text=\"bind:ZIPCD\"/><Cell col=\"1\" text=\"bind:DDD\"/><Cell col=\"2\" text=\"bind:SEQNO\"/><Cell col=\"3\" text=\"bind:ADDR\"/><Cell col=\"4\" text=\"bind:BUNJIS\"/><Cell col=\"5\" text=\"bind:BUNJIE\"/><Cell col=\"6\" text=\"bind:SIDO\"/><Cell col=\"7\" text=\"bind:GUGUN\"/><Cell col=\"8\" text=\"bind:DONG\"/><Cell col=\"9\" text=\"bind:MASS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"297","101","49","35",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("조회하기");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_search","Static02_03:10","292",null,"26","Static02_09:10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_cmb_search");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text(">=  (같거나크다)");
            obj.set_value("3");
            obj.set_index("3");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_orderby","Static02_07:10","326",null,"26","Static02_09:10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_cmb_orderby");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("전표일자순");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_can",null,"26","75","31","26",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("취소");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"26","75","31","btn_can:12",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("삭제");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"26","75","31","btn_del:13",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("저장");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","25","140","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("시도");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03_00_00_01","33.81%","140","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("시구군");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","Static01_01_00:-2","140",null,"36","Static01_03_00_00_01:-2",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04_00","Static01_03_00_00_01:-2","140",null,"36","Static01_03_00_00_00_00:-2",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04_02_00","Static01_03_00_00_00_00:-2","140",null,"36","25",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_zipcd","Static01_01:10","111",null,"26","Static01_03_00_00:10",null,"36",null,null,null,this);
            obj.set_taborder("0");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_format("###-###");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_seqno","Static01_03_00_00:10","111",null,"26","Static01_03_00_00_00_00:10",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_enable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_gugun","Static01_03_00_00_01:10","145",null,"26","Static01_03_00_00_00_00:10",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_sido","Static01_01_00:10","145",null,"26","Static01_03_00_00_01:10",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00","25","208","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("주소");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03_00_00_00_00_00_00","66.06%","208","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("전화(DDD)");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","Static01_01_01_00:-2","208",null,"36","Static01_03_00_00_00_00_00_00:-2",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_addr","Static01_01_01_00:10","213",null,"26","Static01_03_00_00_00_00_00_00:10",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_enable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","25","174","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("리/기관/아파트");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03_00_00_01_00","33.81%","174","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("번지(부터)");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","Static01_01_00_00:-2","174",null,"36","Static01_03_00_00_01_00:-2",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03_00_00_00_00_00","66.06%","174","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("번지(까지)");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04_00_00","Static01_03_00_00_01_00:-2","174",null,"36","Static01_03_00_00_00_00_00:-2",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04_02_00_00","Static01_03_00_00_00_00_00:-2","174",null,"36","25",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_bunjis","Static01_03_00_00_01_00:10","179",null,"26","Static01_03_00_00_00_00_00:10",null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_mass","Static01_01_00_00:10","179",null,"26","Static01_03_00_00_01_00:10",null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04_02_00_00_00","Static01_03_00_00_00_00_00_00:-2","208",null,"36","25",null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_dong","Static01_03_00_00_00_00:10","145",null,"26","37",null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_bunjie","Static01_03_00_00_00_00_00:10","179",null,"26","37",null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_ddd","Static01_03_00_00_00_00_00_00:10","213",null,"26","37",null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04_01","Static01_04:-2","106",null,"36","25",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
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
        this.addIncludeScript("SD6010F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD6010F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD6010F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var NewRowNum    = "";					// 추가행번호.
        var EditnRow	 = "";					//수정된 행번호
        var IUSW         = "";
        var irow         = "";
        var Error        = "";					//에러코드.
        var return_zip   = "";

        this.SD6010F_onload = function(obj,e)
        {
        	this.cmb_search.set_index(5);
        	this.cmb_orderby.set_index(0);
        	this.ed_s_zipcode.set_value("");
        	this.ed_s_addr.set_value("");
        	this.fnDataclear();
        };

        this.fnSearch_zipcode = function()
        {
        	var strUrl = "JSP/sd/select_zipcodesearch.jsp";
        	var strArg;
        	var strDs 	= "ds_zipcode=ds_zipcode";

        	var option1 = this.cmb_search.index;
        	strArg = " Option1="+option1+" Values1="+nexacro.wrapQuote(nexacro.trim(this.ed_s_zipcode.value))+
        			 " Values2="+nexacro.wrapQuote(this.ed_s_addr.text)+
        			 " Orderby="+nexacro.wrapQuote(this.cmb_orderby.index);

        	this.gfn_TransactionP("zipcodesearch", strUrl, strDs, strDs, strArg, "fnCallback", true, "P", false, this);
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
        	IUSW            = "N";
        	irow            = "";
        	this.ed_zipcd.set_value("");
        	this.ed_sido.set_value("");
        	this.ed_gugun.set_value("");
        	this.ed_dong.set_value("");
        	this.ed_mass.set_value("");
        	this.ed_bunjis.set_value("");
        	this.ed_bunjie.set_value("");
        	this.ed_ddd.set_value("");
        	this.ed_seqno.set_value("");
        	this.ed_addr.set_value("");
        }

        //입력모드
        this.fnInputdata = function()
        {
        	this.ds_zipcode.setColumn(NewRowNum,"SEQNO",  "00000" );
        	this.ds_zipcode.setColumn(NewRowNum,"ZIPCD",  nexacro.trim(this.ed_zipcd.value) );
        	this.ds_zipcode.setColumn(NewRowNum,"SIDO",   nexacro.trim(this.ed_sido.value) );
        	this.ds_zipcode.setColumn(NewRowNum,"GUGUN",  nexacro.trim(this.ed_gugun.value) );
        	this.ds_zipcode.setColumn(NewRowNum,"DONG",   nexacro.trim(this.ed_dong.value) );
        	this.ds_zipcode.setColumn(NewRowNum,"MASS",   nexacro.trim(this.ed_mass.value) );
        	this.ds_zipcode.setColumn(NewRowNum,"BUNJIS", nexacro.trim(this.ed_bunjis.value) );
        	this.ds_zipcode.setColumn(NewRowNum,"BUNJIE", nexacro.trim(this.ed_bunjie.value) );
        	this.ds_zipcode.setColumn(NewRowNum,"DDD",    nexacro.trim(this.ed_ddd.value) );
        	this.ds_zipcode.setColumn(NewRowNum,"ADDR",   nexacro.trim(this.ed_addr.value) );
        	this.ds_zipcode_send.addRow();
        	this.ds_zipcode_send.copyRow(0, this.ds_zipcode,NewRowNum);
        	this.ds_zipcode_send.setColumn(0,"ROWTYPE", "I" );
        }

        //수정모드
        this.fnEdit_data = function()
        {
        	this.ds_zipcode.setColumn(EditnRow,"SEQNO",   this.ed_seqno.value);
        	this.ds_zipcode.setColumn(EditnRow,"ZIPCD",  this.ed_zipcd.value );
        	this.ds_zipcode.setColumn(EditnRow,"SIDO",   this.ed_sido.value );
        	this.ds_zipcode.setColumn(EditnRow,"GUGUN",  this.ed_gugun.value );
        	this.ds_zipcode.setColumn(EditnRow,"DONG",   this.ed_dong.value );
        	this.ds_zipcode.setColumn(EditnRow,"MASS",   this.ed_mass.value );
        	this.ds_zipcode.setColumn(EditnRow,"BUNJIS", this.ed_bunjis.value );
        	this.ds_zipcode.setColumn(EditnRow,"BUNJIE", this.ed_bunjie.value );
        	this.ds_zipcode.setColumn(EditnRow,"DDD",    this.ed_ddd.value );
        	this.ds_zipcode.setColumn(EditnRow,"ADDR",   this.ed_addr.value );
        	this.ds_zipcode_send.addRow();
        	this.ds_zipcode_send.copyRow(0, this.ds_zipcode, EditnRow);
        	this.ds_zipcode_send.setColumn(0,"ROWTYPE", "U" );
        	this.grd_view.updateToDataset();
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.fnSearch_zipcode();
        	NewRowNum = "";
        };

        this.grd_view_oncelldblclick = function(obj,e)
        {
        	IUSW            =  "Y";
        	EditnRow        = e.row;
        	this.ed_addr.set_value(this.ds_zipcode.getColumn(e.row,"ADDR"));
        	this.ed_bunjie.set_value(this.ds_zipcode.getColumn(e.row,"BUNJIE"));
        	this.ed_bunjis.set_value(this.ds_zipcode.getColumn(e.row,"BUNJIS"));
        	this.ed_ddd.set_value(this.ds_zipcode.getColumn(e.row,"DDD"));
        	this.ed_dong.set_value(this.ds_zipcode.getColumn(e.row,"DONG"));
        	this.ed_gugun.set_value(this.ds_zipcode.getColumn(e.row,"GUGUN"));
        	this.ed_mass.set_value(this.ds_zipcode.getColumn(e.row,"MASS"));
        	this.ed_seqno.set_value(this.ds_zipcode.getColumn(e.row,"SEQNO"));
        	this.ed_sido.set_value(this.ds_zipcode.getColumn(e.row,"SIDO"));
        	this.ed_zipcd.set_value(this.ds_zipcode.getColumn(e.row,"ZIPCD"));
        };

        this.btn_save_onclick = function(obj,e)
        {
        	var strUrl = "JSP/sd/sd1090b.jsp";
        	var inDs 	= "ds_zipcode_send=ds_zipcode_send";
        	if ((nexacro.trim(this.ed_zipcd.value)).length != 6)
        	{
        		alert("코드 오류! 수정하세요!");
        		return;
        	}

        	if (IUSW == "Y")
        		this.fnEdit_data();
        	else
        	{
        		NewRowNum = this.ds_zipcode.addRow();
        		this.fnInputdata();
        	}
        	this.gfn_TransactionP("insert", strUrl, inDs, "", "", "fnTr_Callback", false, "P", false, this);
        };

        this.fnTr_Callback = function(strSvcID, nErrorCode, strErrorMag)
        {
        	if ( strSvcID == "insert" )
        	{
        		if(nErrorCode != 0)
        		{
        			if (strErrorMag == "DUP" || strErrorMag.substr(0,10) == "JDBC-10007")
        			{
        				alert("코드가 중복되었습니다. \n 재검색후 저장해주세요.");
        				this.btn_search.click();
        			}
        			else if(strErrorMag.substr(0,10) == "JDBC-11048" && strErrorMag.substr(27,4) == "SIDO")
        				alert("시도 글자수 오류! 수정하세요!");
        			else
        				alert("Error : "+strErrorMag);
        		}
        		else
        		{
                 	if ( IUSW == "N" )
        			{
        				this.ds_zipcode.setColumn(NewRowNum, "SEQNO", return_zip);
        				this.fnDataclear();
        			}
        			this.ds_zipcode_send.deleteRow(0);
                	this.ed_zipcd.setFocus();
        			alert("저장완료.");
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
        			this.ds_zipcode.deleteRow(EditnRow);
                 	this.fnDataclear();
                	this.ed_zipcd.setFocus();
        		}
        	}
        }

        this.btn_can_onclick = function(obj,e)
        {
        	this.fnDataclear();
        	this.ed_zipcd.setFocus();
        };

        this.btn_del_onclick = function(obj,e)
        {
        	var strUrl = "JSP/sd/sd1090b.jsp";
        	var inDs = "ds_zipcode_send=ds_zipcode_send";
        	var objApp = nexacro.getApplication();
        	if(msg_result = objApp.confirm( "삭제된 데이터는 복원하실수 없습니다.\n 정말 삭제하시겠습니까? " , "삭제처리", "warning" ))
            {
        		if ( IUSW = "Y" )
        		{
        			this.ds_zipcode.setColumn(EditnRow,"SEQNO",   this.ed_seqno.value);
        			this.ds_zipcode.setColumn(EditnRow,"ZIPCD",  this.ed_zipcd.value );
        			this.ds_zipcode.setColumn(EditnRow,"SIDO",   this.ed_sido.value );
        			this.ds_zipcode.setColumn(EditnRow,"GUGUN",  this.ed_gugun.value );
        			this.ds_zipcode.setColumn(EditnRow,"DONG",   this.ed_dong.value );
        			this.ds_zipcode.setColumn(EditnRow,"MASS",   this.ed_mass.value );
        			this.ds_zipcode.setColumn(EditnRow,"BUNJIS", this.ed_bunjis.value );
        			this.ds_zipcode.setColumn(EditnRow,"BUNJIE", this.ed_bunjie.value );
        			this.ds_zipcode.setColumn(EditnRow,"DDD",    this.ed_ddd.value );
        			this.ds_zipcode.setColumn(EditnRow,"ADDR",   this.ed_addr.value );
        			this.ds_zipcode_send.addRow();
        			this.ds_zipcode_send.copyRow(0, this.ds_zipcode, EditnRow);
        			this.ds_zipcode_send.setColumn(0,"ROWTYPE", "D" );
        			this.gfn_TransactionP("delete", strUrl, inDs, "", "", "fnTr_Callback", false, "P", false, this);
        			this.ds_zipcode.deleteRow(EditnRow);
        			this.ds_zipcode_send.deleteRow(0);
        		}
        		this.grd_view.updateToDataset();
        	}
        };

        this.ds_zipcode_onload = function(obj,e)
        {
        	if(e.reason == 0)
        	{
        		if (this.ds_zipcode.rowcount == 0)
        			alert("조회된 데이터가 없습니다.");
        	}
        };

        this.common_onkeydown = function(obj,e)
        {
        	//Enter Key를 눌렀을 경우 처리
        	if(e.keycode == 13)
        	{
        		if (obj.name == "ed_zipcd") this.ed_sido.setFocus();
        		else if (obj.name == "ed_sido") this.ed_gugun.setFocus();
        		else if (obj.name == "ed_gugun") this.ed_dong.setFocus();
        		else if (obj.name == "ed_dong") this.ed_mass.setFocus();
        		else if (obj.name == "ed_mass") this.ed_bunjis.setFocus();
        		else if (obj.name == "ed_bunjis") this.ed_bunjie.setFocus();
        		else if (obj.name == "ed_bunjie") this.ed_ddd.setFocus();
        		else if (obj.name == "ed_ddd") this.ed_addr.setFocus();
        	}
        	else if (e.keycode == 27)
        	{
        		if (obj.name == "ed_sido") this.ed_zipcd.setFocus();
        		else if (obj.name == "ed_gugun") this.ed_sido.setFocus();
        		else if (obj.name == "ed_dong") this.ed_gugun.setFocus();
        		else if (obj.name == "ed_mass") this.ed_dong.setFocus();
        		else if (obj.name == "ed_bunjis") this.ed_mass.setFocus();
        		else if (obj.name == "ed_bunjie") this.ed_bunjis.setFocus();
        		else if (obj.name == "ed_ddd") this.ed_bunjie.setFocus();
        		else if (obj.name == "ed_seqno") this.ed_ddd.setFocus();
        		else if (obj.name == "ed_addr") this.ed_ddd.setFocus();
        	}
        };

        this.s_common_onkeydown = function(obj,e)
        {
        	//Enter Key를 눌렀을 경우 처리
        	if (e.keycode == 13)
        	{
        		if (obj.id == "ed_s_zipcode") this.ed_s_addr.setFocus();
        	}//ESC 키처리
        	else if (e.keycode == 27)
        	{
        		if (obj.id == "ed_s_addr") this.ed_s_zipcode.setFocus();
        	}
        };

        this.ed_sido_onkillfocus = function(obj,e)
        {
        	this.ed_addr.set_value(nexacro.trim(this.ed_sido.text) + ' ' +  nexacro.trim(this.ed_gugun.text)  + ' '
                         + nexacro.trim(this.ed_dong.text) + ' ' +  nexacro.trim(this.ed_mass.text));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD6010F_onload,this);
            this.ed_s_addr.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.ed_s_zipcode.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.Static02_08.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_view.addEventHandler("oncelldblclick",this.grd_view_oncelldblclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_can.addEventHandler("onclick",this.btn_can_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_save.addEventHandler("onkeydown",this.btn_save_onkeydown,this);
            this.ed_zipcd.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_zipcd.addEventHandler("onkillfocus",this.ed_values1_onkillfocus,this);
            this.ed_seqno.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_gugun.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_gugun.addEventHandler("onkillfocus",this.ed_sido_onkillfocus,this);
            this.ed_sido.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_sido.addEventHandler("onkillfocus",this.ed_sido_onkillfocus,this);
            this.ed_addr.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.ed_bunjis.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_mass.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_mass.addEventHandler("onkillfocus",this.ed_sido_onkillfocus,this);
            this.ed_dong.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_dong.addEventHandler("onkillfocus",this.ed_sido_onkillfocus,this);
            this.ed_bunjie.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_ddd.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ds_zipcode.addEventHandler("onload",this.ds_zipcode_onload,this);
            this.ds_zipcode_send.addEventHandler("onload",this.ds_book_scode_onload,this);
        };
        this.loadIncludeScript("SD6010F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
