(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD6270F");
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
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">코드</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">코드명</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ioyh", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"2\"/><Column id=\"NAME\" type=\"STRING\" size=\"30\"/><Column id=\"JANG_CD1\" type=\"STRING\" size=\"256\"/><Column id=\"JANG1_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JANG_GB1\" type=\"STRING\" size=\"256\"/><Column id=\"JANG_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"JANG2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JANG_GB2\" type=\"STRING\" size=\"256\"/><Column id=\"COST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ioyh_send", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"2\"/><Column id=\"NAME\" type=\"STRING\" size=\"30\"/><Column id=\"JANG_CD1\" type=\"STRING\" size=\"256\"/><Column id=\"JANG_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"JANG_GB1\" type=\"STRING\" size=\"256\"/><Column id=\"JANG_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"JANG_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"JANG_GB2\" type=\"STRING\" size=\"256\"/><Column id=\"COST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"O_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ROWTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"O_GUBN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_values1", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">발주</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">입고</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"DATA\">출고</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"DATA\">반품</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"DATA\">이체</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"DATA\">재생출</Col></Row><Row><Col id=\"CODE\">7</Col><Col id=\"DATA\">폐기입</Col></Row><Row><Col id=\"CODE\">8</Col><Col id=\"DATA\">폐기출</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"DATA\">대체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_values6", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">+</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">-</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_values10", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">수불만적용</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">채권만적용</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"DATA\">금액계산안함</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"DATA\">출고율수정</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"DATA\">반품규제안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","56","11","300","69",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("입출고 유형등록");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","25","110","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("구분");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_07","33.69%","148","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("저장장소(2)");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03","Static01_07:-2","110","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("코드");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","Static01_01:-2","110",null,"40","Static01_03:-2",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
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

            obj = new Static("Static01_04","Static01_03:-2","110",null,"40","25",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values2","Static01_03:10","115","8.88%","30",null,null,"32",null,null,null,this);
            obj.set_taborder("31");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values3","ed_values2:1","115",null,"30","38",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","25","202",null,"40","25",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("조회");
            obj.set_background("#3cbcb8");
            obj.set_color("white");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","25","240",null,null,"25","15",null,null,"150",null,this);
            obj.set_taborder("15");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","25","240","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_05","25","278","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("코드명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_07","41.50%","278","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("정렬조건");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_06","Static02_05:-2","278",null,"40","Static02_07:-2",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_s_values3","Static02_05:10","283",null,"30","Static02_07:10",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_03","41.50%","240","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("조건");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_10","24.63%","240","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("코드");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02","Static02_01:-2","240",null,"40","Static02_10:-2",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_09",null,"240","123","78","25",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_04","Static02_03:-2","240",null,"40","Static02_09:-2",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_08","Static02_07:-2","278",null,"40","Static02_09:-2",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_view","37","Static02_07:10",null,null,"42","32",null,null,"50",null,this);
            obj.set_taborder("24");
            obj.set_binddataset("ds_ioyh");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"350\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"0\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"발주\"/><Cell col=\"2\" text=\"코드\"/><Cell col=\"3\" text=\"코드명\"/><Cell col=\"4\" colspan=\"2\" text=\"저장(1)\"/><Cell col=\"6\" colspan=\"2\" text=\"저장(2)\"/><Cell col=\"8\" text=\"적용구분\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:GUBN\"/><Cell col=\"2\" text=\"bind:CODE\"/><Cell col=\"3\" text=\"bind:NAME\"/><Cell col=\"4\" text=\"bind:JANG_CD1\"/><Cell col=\"5\" text=\"bind:JANG1_NM\"/><Cell col=\"6\" text=\"bind:JANG_CD2\"/><Cell col=\"7\" text=\"bind:JANG2_NM\"/><Cell col=\"8\" text=\"bind:COST_GB\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"250","101","57","35",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회하기");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_search","Static02_03:10","245",null,"30","Static02_09:10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_cmb_search");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text(">=  (같거나크다)");
            obj.set_value("3");
            obj.set_index("3");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_orderby","Static02_07:10","283",null,"30","Static02_09:10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_cmb_orderby");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("전표일자순");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_can",null,"26","75","31","35",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"26","75","31","btn_can:12",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"26","75","31","btn_del:12",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_05","25","148","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("저장장소(1)");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_06","Static01_05:-2","148",null,"40","Static01_07:-2",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values4","Static01_05:10","153","3.50%","30",null,null,"32",null,null,null,this);
            obj.set_taborder("29");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_09","65.81%","148","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("적용구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_08","Static01_07:-2","148",null,"40","Static01_09:-2",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("ed_values6","452","153",null,"30","Static01_07:10",null,"60",null,null,null,this);
            obj.set_taborder("33");
            obj.set_innerdataset("ds_values6");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values5","ed_values4:1","153",null,"30","ed_values6:1",null,"32",null,null,null,this);
            obj.set_taborder("32");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_10","Static01_09:-2","148",null,"40","25",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values7","Static01_07:10","153","3.50%","30",null,null,"32",null,null,null,this);
            obj.set_taborder("36");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Combo("ed_values9","965","153",null,"30","Static01_09:10",null,"60",null,null,null,this);
            obj.set_taborder("38");
            obj.set_innerdataset("ds_values6");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values8","ed_values7:1","153",null,"30","ed_values9:1",null,"32",null,null,null,this);
            obj.set_taborder("37");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("ed_values10","Static01_09:10","153",null,"30","37",null,"60",null,null,null,this);
            obj.set_taborder("39");
            obj.set_innerdataset("ds_values10");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("ed_values1","Static01_01:10","115",null,"30","Static01_03:10",null,"60",null,null,null,this);
            obj.set_taborder("40");
            obj.set_innerdataset("ds_values1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_11","Static02_10:-2","240",null,"40","Static02_03:-2",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_s_values2","Static02_10:10","245",null,"30","Static02_03:10",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Combo("ed_s_values1","Static02_01:10","245",null,"30","Static02_10:10",null,"60",null,null,null,this);
            obj.set_taborder("44");
            obj.set_innerdataset("ds_values1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_value("");
            obj.set_index("-1");
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
        this.addIncludeScript("SD6270F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD6270F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD6270F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var NewRowNum    = "";					// 추가행번호.
        var EditnRow	 = -1;					//수정된 행번호
        var Error        = "";					//에러코드.
        var o_code       = "";
        var o_gubn       = "";
        var jang_gb1 = "";
        var jang_gb2 = "";

        this.SD6270F_onload = function(obj,e)
        {
        	this.ed_s_values1.set_index(-1);
        	this.ed_s_values2.set_value("");
        	this.ed_s_values3.set_value("");
        	this.cmb_search.set_index(3);
        	this.cmb_orderby.set_index(0);
        	this.fnDataclear();
        	this.ed_values1.setFocus();
        };

        this.fnSearch_zipcode = function()
        {
        	var strUrl = "JSP/sd/select_ioyh.jsp";
        	var strArg;
        	var strDs 	= "ds_ioyh=ds_ioyh";
        	var option1 = nexacro.wrapQuote(this.cmb_search.indx);

        	strArg = " Values1="+nexacro.wrapQuote(this.fnNullChk(this.ed_s_values1.value))+
        			 " Values2="+nexacro.wrapQuote(this.fnNullChk(this.ed_s_values2.value))+
        			 " Values3="+nexacro.wrapQuote(this.fnNullChk(this.ed_s_values3.text))+
        			 " Option ="+nexacro.wrapQuote(this.cmb_search.index)+
        			 " Orderby="+nexacro.wrapQuote(this.cmb_orderby.index);

        	this.gfn_TransactionP("codesearch", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        }

        this.fnNullChk = function(value)
        {
        	if(value == null || value.valueOf() == "undefined")
        		return '';
        	else
        		return nexacro.trim(value);
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
        	NewRowNum       = "";
        	EditnRow	    = -1;
        	this.ed_values1.set_index(-1);
        	this.ed_values2.set_value("");
        	this.ed_values3.set_value("");
        	this.ed_values4.set_value("");
        	this.ed_values5.set_value("");
        	this.ed_values6.set_value("");
        	this.ed_values7.set_value("");
        	this.ed_values8.set_value("");
        	this.ed_values9.set_value("");
        	this.ed_values10.set_value("");
        	o_code          = "";
        	o_gubn          = "";
        }

        //입력모드
        this.fnInputdata = function()
        {
        	this.ds_ioyh.setColumn(NewRowNum,"GUBN",  nexacro.trim(this.ed_values1.value));
        	this.ds_ioyh.setColumn(NewRowNum,"CODE",  nexacro.trim(this.ed_values2.value));
        	this.ds_ioyh.setColumn(NewRowNum,"NAME",  nexacro.trim(this.ed_values3.text));
        	this.ds_ioyh.setColumn(NewRowNum,"JANG_CD1",nexacro.trim(this.ed_values4.value));
        	this.ds_ioyh.setColumn(NewRowNum,"JANG1_NM",	nexacro.trim(this.ed_values5.text));
        	this.ds_ioyh.setColumn(NewRowNum,"JANG_GB1",	nexacro.trim((this.ed_values6.index).toString()));
        	this.ds_ioyh.setColumn(NewRowNum,"JANG_CD2",	nexacro.trim(this.ed_values7.value));
        	this.ds_ioyh.setColumn(NewRowNum,"JANG2_NM",	nexacro.trim(this.ed_values8.text));
        	this.ds_ioyh.setColumn(NewRowNum,"JANG_GB2",	nexacro.trim((this.ed_values9.index).toString()));
        	this.ds_ioyh.setColumn(NewRowNum,"COST_GB",	nexacro.trim((this.ed_values10.index).toString()));
        	this.ds_ioyh_send.addRow();
        	this.ds_ioyh_send.copyRow(0,this.ds_ioyh, NewRowNum);
        	this.ds_ioyh_send.setColumn(0,"O_CODE", this.ed_values2.value);
        	this.ds_ioyh_send.setColumn(0,"O_GUBN", this.ed_values1.value);
        	this.ds_ioyh_send.setColumn(0,"ROWTYPE", "I" );
        }

        //수정모드
        this.fnEdit_data = function()
        {
        	this.ds_ioyh.setColumn(EditnRow,"GUBN",  nexacro.trim(this.ed_values1.value));
        	this.ds_ioyh.setColumn(EditnRow,"CODE",  nexacro.trim(this.ed_values2.value));
        	this.ds_ioyh.setColumn(EditnRow,"NAME",  nexacro.trim(this.ed_values3.text));
        	this.ds_ioyh.setColumn(EditnRow,"JANG_CD1",nexacro.trim(this.ed_values4.value));
        	this.ds_ioyh.setColumn(EditnRow,"JANG1_NM",	nexacro.trim(this.ed_values5.text));
        	this.ds_ioyh.setColumn(EditnRow,"JANG_GB1",	nexacro.trim((this.ed_values6.index).toString()));
        	this.ds_ioyh.setColumn(EditnRow,"JANG_CD2",	nexacro.trim(this.ed_values7.value));
        	this.ds_ioyh.setColumn(EditnRow,"JANG2_NM",	nexacro.trim(this.ed_values8.text));
        	this.ds_ioyh.setColumn(EditnRow,"JANG_GB2",	nexacro.trim((this.ed_values9.index).toString()));
        	this.ds_ioyh.setColumn(EditnRow,"COST_GB",	nexacro.trim((this.ed_values10.index).toString()));

        	this.ds_ioyh_send.addRow();
        	this.ds_ioyh_send.copyRow(0,this.ds_ioyh,EditnRow);
        	this.ds_ioyh_send.setColumn(0,"O_CODE", o_code);
        	this.ds_ioyh_send.setColumn(0,"O_GUBN", o_gubn);
        	this.ds_ioyh_send.setColumn(0,"ROWTYPE", "U" );
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
        	this.ed_values1.set_value(this.ds_ioyh.getColumn(e.row,"GUBN"));
        	this.ed_values2.set_value(this.ds_ioyh.getColumn(e.row,"CODE"));
        	this.ed_values3.set_value(this.ds_ioyh.getColumn(e.row,"NAME"));
        	this.ed_values4.set_value(this.ds_ioyh.getColumn(e.row,"JANG_CD1"));
        	this.ed_values5.set_value(this.ds_ioyh.getColumn(e.row,"JANG1_NM"));
        	if(this.ds_ioyh.getColumn(e.row,"JANG_GB1") == '0')
        		this.ed_values6.set_index(0);
        	else
        		this.ed_values6.set_index(1);
        	jang_gb1 = this.ds_ioyh.getColumn(e.row,"JANG_GB1");
        	this.ed_values7.set_value(this.ds_ioyh.getColumn(e.row,"JANG_CD2"));
        	this.ed_values8.set_value(this.ds_ioyh.getColumn(e.row,"JANG2_NM"));
        	if(this.ds_ioyh.getColumn(e.row,"JANG_GB2") == '0')
        		this.ed_values9.set_index(0);
        	else
        		this.ed_values9.set_index(1);
        	jang_gb2 = this.ds_ioyh.getColumn(e.row,"JANG_GB2");
        	this.ed_values10.set_index(this.ds_ioyh.getColumn(e.row,"COST_GB"));
        	o_code          = this.ds_ioyh.getColumn(e.row,"CODE");
        	o_gubn          = this.ds_ioyh.getColumn(e.row,"GUBN");
        };

        this.btn_save_onclick = function(obj,e)
        {
        	var strUrl = "JSP/sd/insert_ioyh.jsp";
        	var inDs 	= "ds_ioyh_send=ds_ioyh_send";
        	if ((nexacro.trim(this.ed_values2.value)).length != 2)
        	{
        		alert("코드 오류! 수정하세요!");
        		return;
        	}
        	if (EditnRow != -1)
        		this.fnEdit_data();
        	else
        	{
        		NewRowNum = this.ds_ioyh.addRow();
        		this.fnInputdata();
        	}
        	this.gfn_TransactionP("insert", strUrl, inDs, "", "", "fnTr_Callback", false, "P", false, this);
        };

        this.fnTr_Callback = function(strSvcID, nErrorCode, strErrorMag)
        {
        	if(nErrorCode != 0 && !(strErrorMag == "DUP" || strErrorMag.substr(0,10) == "JDBC-10007"))
        	{
        		alert("Error : "+strErrorMag);
        	}
        	if ( strSvcID == "insert" )
        	{
        		if (strErrorMag == "DUP" || strErrorMag.substr(0,10) == "JDBC-10007")
        		{
        			alert("코드가 중복되었습니다. \n 재검색후 저장해주세요.");
        			this.btn_search.click();
        		}
        		else
        		{
                 	if ( IUSW = "N" )
                    	this.fnDataclear();
        			this.ds_ioyh_send.deleteRow(0);
                	this.ed_values2.setFocus();
        		}
        	}
        	if ( strSvcID == "delete" )
        	{
        		if (strErrorMag == "DUP")
        		{
        			alert("삭제 Error.");
        		}
        		else
        		{
        			this.ds_ioyh.deleteRow(EditnRow);
                 	this.fnDataclear();
                	this.ed_values2.setFocus();
        		}
        	}
        	else if ( strSvcID == "codesearch" )
        	{
        		if (strErrorMag == '')
        			alert ("미등록 데이터");
        		else
        		{
        			var strArr = strErrorMag.split('^');
        			if (strArr[1]=="ed_values4") this.ed_values5.set_value(strArr[0]);
        			else if (strArr[1]=="ed_values7") this.ed_values8.set_value(strArr[0]);
        		}
        	}
        }

        this.fnSearch_name = function(code, obj_id)
        {
        	var strUrl = "JSP/sd/select_jang_name.jsp";
        	var strArg;
        	if ((this.ed_values4.value =="")&&(this.ed_values7.value ==""))
        	{
        		alert("코드값이 없습니다!!");
        		return;
        	}

        	strArg = " Values1="+nexacro.wrapQuote(code)+
        	         " obj_id="+nexacro.wrapQuote(obj_id);
        //	trace(strArg);
        	this.gfn_TransactionP("codesearch", strUrl, "", "", strArg, "fnTr_Callback", false, "P", false, this);
        }

        this.btn_can_onclick = function(obj,e)
        {
        	EditnRow = -1;
        	this.fnDataclear();
        	this.ed_values1.setFocus();
        	this.ed_s_values1.set_index(-1);
        };

        this.btn_del_onclick = function(obj,e)
        {
        	var strUrl = "JSP/sd/insert_ioyh.jsp";
        	var inDs = "ds_ioyh_send=ds_ioyh_send";
        	var strArg ;
        	var objApp = nexacro.getApplication();
        	if(msg_result = objApp.confirm( "삭제된 데이터는 복원하실수 없습니다.\n 정말 삭제하시겠습니까? " , "삭제처리", "warning" ))
        	{
        		this.ds_ioyh.setColumn(EditnRow,"GUBN",  nexacro.trim(this.ed_values1.value));
        		this.ds_ioyh.setColumn(EditnRow,"CODE",  nexacro.trim(this.ed_values2.value));
        		this.ds_ioyh.setColumn(EditnRow,"NAME",  nexacro.trim(this.ed_values3.text));
        		this.ds_ioyh.setColumn(EditnRow,"JANG_CD1",nexacro.trim(this.ed_values4.value));
        		this.ds_ioyh.setColumn(EditnRow,"JANG1_NM",	nexacro.trim(this.ed_values5.text));
        		this.ds_ioyh.setColumn(EditnRow,"JANG_GB1",	nexacro.trim((this.ed_values6.index).toString()));
        		this.ds_ioyh.setColumn(EditnRow,"JANG_CD2",	nexacro.trim(this.ed_values7.value));
        		this.ds_ioyh.setColumn(EditnRow,"JANG2_NM",	nexacro.trim(this.ed_values8.text));
        		this.ds_ioyh.setColumn(EditnRow,"JANG_GB2",	nexacro.trim((this.ed_values9.index).toString()));
        		this.ds_ioyh.setColumn(EditnRow,"COST_GB",	nexacro.trim((this.ed_values10.index).toString()));
        		this.ds_ioyh_send.addRow();
        		this.ds_ioyh_send.copyRow(0,this.ds_ioyh,EditnRow);
        		this.ds_ioyh_send.setColumn(0,"O_CODE", o_code);
        		this.ds_ioyh_send.setColumn(0,"O_GUBN", o_gubn);
        		this.ds_ioyh_send.setColumn(0,"ROWTYPE", "D" );

        		this.gfn_TransactionP("delete", strUrl, inDs, "", "", "fnTr_Callback", false, "P", false, this);
        		this.ds_ioyh.deleteRow(EditnRow);
        		this.ds_ioyh_send.deleteRow(0);
        		this.grd_view.updateToDataset();
        	}
        };

        this.ds_ioyh_onload = function(obj,e)
        {
        	if(e.reason == 0)
        	{
        		if (this.ds_ioyh.rowcount == 0)
        			alert("조회된 데이터가 없습니다.");
        	}
        };

        this.common_onkeydown = function(obj,e)
        {
        	//Enter Key를 눌렀을 경우 처리
        	if (e.keycode == 13)
        	{
        		if (obj.name == "ed_values1") this.ed_values2.setFocus();
        		else if (obj.name == "ed_values2") this.ed_values3.setFocus();
        		else if (obj.name == "ed_values3") this.ed_values4.setFocus();
        		else if (obj.name == "ed_values4") this.ed_values6.setFocus();
        		else if (obj.name == "ed_values6") this.ed_values7.setFocus();
        		else if (obj.name == "ed_values7") this.ed_values9.setFocus();
        		else if (obj.name == "ed_values9") this.ed_values10.setFocus();
        	}//ESC 키처리
        	else if (e.keycode == 27)
        	{
        		if (obj.name == "ed_values2") this.ed_values1.setFocus();
        		else if (obj.name == "ed_values3") this.ed_values2.setFocus();
        		else if (obj.name == "ed_values4") this.ed_values3.setFocus();
        		else if (obj.name == "ed_values6") this.ed_values4.setFocus();
        		else if (obj.name == "ed_values7") this.ed_values6.setFocus();
        		else if (obj.name == "ed_values9") this.ed_values7.setFocus();
        		else if (obj.name == "ed_values10") this.ed_values9.setFocus();
        	}
        };

        this.s_common_onkeydown = function(obj,e)
        {
        	//Enter Key를 눌렀을 경우 처리
        	if (e.keycode == 13)
        	{
        		if (obj.id == "ed_s_values1") this.ed_s_values2.setFocus();
        		if (obj.id == "ed_s_values2") this.ed_s_values3.setFocus();
        	}//ESC 키처리
        	else if (e.keycode == 27)
        	{
        		if (obj.id == "ed_s_values3") this.ed_s_values2.setFocus();
        		if (obj.id == "ed_s_values2") this.ed_s_values1.setFocus();
        	}
        };

        this.ed_values4_canchange = function(obj,e)
        {
        	this.fnSearch_name(this.ed_values4.value, obj.name);
        	this.ed_values6.setFocus();
        };

        this.ed_values7_canchange = function(obj,e)
        {
        	this.fnSearch_name(this.ed_values7.value, obj.name);
        	this.ed_values8.setFocus();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD6270F_onload,this);
            this.ed_values2.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values3.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_s_values3.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.Static02_08.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_view.addEventHandler("oncelldblclick",this.grd_view_oncelldblclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_can.addEventHandler("onclick",this.btn_can_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_save.addEventHandler("onkeydown",this.btn_save_onkeydown,this);
            this.ed_values4.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values4.addEventHandler("canchange",this.ed_values4_canchange,this);
            this.ed_values6.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values5.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values7.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values7.addEventHandler("canchange",this.ed_values7_canchange,this);
            this.ed_values9.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values8.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values10.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values1.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_s_values2.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.ed_s_values1.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.ds_ioyh.addEventHandler("onload",this.ds_bdbr_onload,this);
            this.ds_ioyh_send.addEventHandler("onload",this.ds_bdbr_onload,this);
        };
        this.loadIncludeScript("SD6270F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
