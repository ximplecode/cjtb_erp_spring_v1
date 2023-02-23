(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD6210F");
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
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">코드</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">시리즈명</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bgrp", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BG_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"BH_YUL\" type=\"STRING\" size=\"256\"/><Column id=\"DNAME\" type=\"STRING\" size=\"256\"/><Column id=\"JNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bdbr", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">미기재</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">교판</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">속셈</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">사이버넷</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">해법스쿨</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">유치</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"NAME\">기출문제</Col></Row><Row><Col id=\"CODE\">7</Col><Col id=\"NAME\">교과서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_values6", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">적용안함</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">한도적용</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">반품적용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_s_values2", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">적용안함</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">한도적용</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">반품적용</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"DATA\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bjbr", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">유치</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">초등</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">중등</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">고등</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">초월간</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">월간지</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"NAME\">자습서</Col></Row><Row><Col id=\"CODE\">7</Col><Col id=\"NAME\">기타</Col></Row><Row><Col id=\"CODE\">8</Col><Col id=\"NAME\">초월간(20)</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"NAME\">학습지</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bgrp_send", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BG_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"BH_YUL\" type=\"STRING\" size=\"256\"/><Column id=\"DNAME\" type=\"STRING\" size=\"256\"/><Column id=\"JNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"O_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ROWTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","56","11","350","69",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("시리즈 코드 등록");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","25","110","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("코드");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03","21.38%","110","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("분류명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","Static01_01:-2","110",null,"40","Static01_03:-2",null,"68",null,null,null,this);
            obj.set_taborder("19");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","25","72",null,"40","25",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("등록");
            obj.set_background("#3cbcb8");
            obj.set_color("white");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_05","57.63%","110","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("시리즈명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04","Static01_03:-2","110",null,"40","Static01_05:-2",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","25","202",null,"40","25",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("조회");
            obj.set_background("#3cbcb8");
            obj.set_color("white");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","25","240",null,null,"25","15",null,null,"150",null,this);
            obj.set_taborder("24");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","25","240","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("코드");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_05","25","278","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("시리즈명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_07","45.88%","278","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("정렬조건");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_06","Static02_05:-2","278",null,"40","Static02_07:-2",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_s_values3","Static02_05:10","283",null,"30","Static02_07:10",null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_03","45.88%","240","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("조건");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_10","21.38%","240","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("반품허용");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02","Static02_01:-2","240",null,"40","Static02_10:-2",null,"68",null,null,null,this);
            obj.set_taborder("28");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_09",null,"240","123","78","25",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_04","Static02_03:-2","240",null,"40","Static02_09:-2",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_08","Static02_07:-2","278",null,"40","Static02_09:-2",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_view","37","Static02_07:10",null,null,"42","32",null,null,"50",null,this);
            obj.set_taborder("12");
            obj.set_binddataset("ds_bgrp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"대분류\"/><Cell col=\"2\" text=\"중분류\"/><Cell col=\"3\" text=\"시리즈명\"/><Cell col=\"4\" text=\"반품\"/><Cell col=\"5\" text=\"반품기한일\"/><Cell col=\"6\" text=\"반품한도\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DNAME\"/><Cell col=\"2\" text=\"bind:JNAME\"/><Cell col=\"3\" text=\"bind:NAME\"/><Cell col=\"4\" text=\"bind:BP_YN\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:BG_YMD\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"####-##-##\" maskedittype=\"string\" calendardateformat=\"yyyy-MM-dd\" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"nulltext\" maskeditmaskchar=\" \"/><Cell col=\"6\" text=\"bind:BH_YUL\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"250","101","57","35",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("조회하기");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_search","Static02_03:10","245",null,"30","Static02_09:10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_cmb_search");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text(">=  (같거나크다)");
            obj.set_value("3");
            obj.set_index("3");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_orderby","Static02_07:10","283",null,"30","Static02_09:10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_cmb_orderby");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("전표일자순");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_can00",null,"26","75","31","25",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("취소");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"26","75","31","btn_can00:10",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("출력");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"26","75","31","btn_print:10",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("삭제");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"26","75","31","btn_del:10",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("저장");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_07","25","148","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("반품허용");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_09","Static01_03:-2.36%","148","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("반품기한");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_08","Static01_07:-2","148",null,"40","Static01_09:-2",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_11","57.63%","148","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("반품한도");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_10","Static01_09:-2","148",null,"40","Static01_11:-2",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values5","Static01_07:10","153","3.88%","30",null,null,"32",null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_12","Static01_11:-2","148",null,"40","25",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_11","Static02_10:-2","240",null,"40","Static02_03:-2",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values1","Static01_01:10","115",null,"30","Static01_03:10",null,"48",null,null,null,this);
            obj.set_taborder("0");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values2","Static01_03:10","115","10.75%","30",null,null,"32",null,null,null,this);
            obj.set_taborder("43");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values3","ed_values2:1","115",null,"30","Static01_05:10",null,"32",null,null,null,this);
            obj.set_taborder("44");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_06","Static01_05:-2","110",null,"40","25",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values4","Static01_05:10","115",null,"30","35",null,"32",null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Combo("ed_values6","ed_values5:1","153",null,"30","Static01_09:10",null,"60",null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_values6");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_values8","Static01_11:10","153",null,"30","35",null,"32",null,null,null,this);
            obj.set_taborder("5");
            obj.set_maxlength("3");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_values7","Static01_09:10","153",null,"30","Static01_11:10",null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_s_values1","Static02_01:10","245",null,"30","Static02_10:10",null,"48",null,null,null,this);
            obj.set_taborder("6");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@@");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Combo("ed_s_values2","Static02_10:10","245",null,"30","Static02_03:10",null,"60",null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_s_values2");
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
        this.addIncludeScript("SD6210F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD6210F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD6210F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var NewRowNum    = "";					// 추가행번호.
        var EditnRow	 = -1;					//수정된 행번호
        var Error        = "";					//에러코드.
        var return_code  = "";
        var return_code2 = "";
        var IUSW         = "";
        var o_code       = "";

        this.SD6210F_onload = function(obj,e)
        {
        	this.cmb_orderby.set_index(0);
        	this.cmb_search.set_index(3);
        	this.ed_s_values2.set_index(3);
        	this.fnDataclear();
        	this.ed_values1.setFocus();
        };

        this.fnNullChk = function(value)
        {
        	if(value == null || value.valueOf() == "undefined")
        		return '';
        	else
        		return nexacro.trim(value);
        }

        this.fnSearch_zipcode = function()
        {
        	var strUrl = "JSP/sd/select_bgrp.jsp";
        	var strArg;
        	var strDs 	= "ds_bgrp=ds_bgrp";
        	var option1 = nexacro.wrapQuote(this.cmb_search.indx);

        	strArg = " Values1="+nexacro.wrapQuote(this.fnNullChk(this.ed_s_values1.value))+
        			 " Values2="+nexacro.wrapQuote(this.fnNullChk(this.ed_s_values2.value))+
        			 " Values3="+nexacro.wrapQuote(this.fnNullChk(this.ed_s_values3.text))+
        			 " Option ="+nexacro.wrapQuote(this.cmb_search.index)+
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
        	NewRowNum       = "";
        	EditnRow	    = -1;
        	IUSW            = "N";
        	o_code          = "";
        	this.ed_values1.set_value("");
        	this.ed_values2.set_value("");
        	this.ed_values3.set_value("");
        	this.ed_values4.set_value("");
        	this.ed_values5.set_value("");
        	this.ed_values6.set_index(-1);
        	this.ed_values7.set_value("");
        	this.ed_values8.set_value("0");
        }

        //입력모드
        this.fnInputdata = function()
        {
        	this.ds_bgrp.setColumn(NewRowNum,"CODE",  nexacro.trim(this.ed_values1.value));
        	this.ds_bgrp.setColumn(NewRowNum,"NAME",  nexacro.trim(this.ed_values4.value));
        	this.ds_bgrp.setColumn(NewRowNum,"BP_YN", nexacro.trim(this.ed_values5.value));
        	this.ds_bgrp.setColumn(NewRowNum,"BH_YUL",nexacro.trim(this.ed_values8.value));
        	this.ds_bgrp.setColumn(NewRowNum,"DNAME", nexacro.trim(this.ed_values2.value));
        	this.ds_bgrp.setColumn(NewRowNum,"JNAME", nexacro.trim(this.ed_values3.value));
        	if (nexacro.trim(this.ed_values7.value)=="")
        		this.ds_bgrp.setColumn(NewRowNum,"BG_YMD","99999999");
        	else
        		this.ds_bgrp.setColumn(NewRowNum,"BG_YMD",this.ed_values7.value);
        	this.ds_bgrp_send.addRow();
        	this.ds_bgrp_send.copyRow(0,this.ds_bgrp, NewRowNum);
        	this.ds_bgrp_send.setColumn(0,"O_CODE", o_code);
        	this.ds_bgrp_send.setColumn(0,"ROWTYPE", "I" );
        }

        //수정모드
        this.fnEdit_data = function()
        {
            this.ds_bgrp.setColumn(EditnRow,"CODE",  nexacro.trim(this.ed_values1.value));
            this.ds_bgrp.setColumn(EditnRow,"NAME",  nexacro.trim(this.ed_values4.value));
            this.ds_bgrp.setColumn(EditnRow,"BP_YN", nexacro.trim(this.ed_values5.value));
            this.ds_bgrp.setColumn(EditnRow,"BH_YUL",nexacro.trim(this.ed_values8.value));
            this.ds_bgrp.setColumn(EditnRow,"DNAME",	nexacro.trim(this.ed_values2.value));
            this.ds_bgrp.setColumn(EditnRow,"JNAME",	nexacro.trim(this.ed_values3.value));
            if (nexacro.trim(this.ed_values7.value)=="")
                this.ds_bgrp.setColumn(EditnRow,"BG_YMD","99999999");
            else
                this.ds_bgrp.setColumn(EditnRow,"BG_YMD",this.ed_values7.value);
            this.ds_bgrp_send.addRow();
            this.ds_bgrp_send.copyRow(0, this.ds_bgrp,EditnRow);
            this.ds_bgrp_send.setColumn(0,"O_CODE", o_code);
            this.ds_bgrp_send.setColumn(0,"ROWTYPE", "U" );
            this.grd_view.updateToDataset();
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.fnSearch_zipcode();
        	NewRowNum = "";
        };

        this.grd_view_oncelldblclick = function(obj,e)
        {
        	IUSW            = "Y";
        	EditnRow = e.row;
        	this.ed_values1.set_value(this.ds_bgrp.getColumn(e.row,"CODE"));
        	o_code          = this.ds_bgrp.getColumn(e.row,"CODE");
        	this.ed_values4.set_value(this.ds_bgrp.getColumn(e.row,"NAME"));
        	this.ed_values5.set_value(this.ds_bgrp.getColumn(e.row,"BP_YN"));
        	this.ed_values7.set_value(this.ds_bgrp.getColumn(e.row,"BG_YMD"));
        	this.ed_values8.set_value(this.ds_bgrp.getColumn(e.row,"BH_YUL"));

        	this.ed_values1_onkillfocus();
        	this.ed_values5_onkillfocus();
        };

        this.btn_save_onclick = function(obj,e)
        {
        	var strUrl = "JSP/sd/insert_bgrp.jsp";
        	var inDs 	= "ds_bgrp_send=ds_bgrp_send";
        	var strArg  = "user_id=test";

        	if ((nexacro.trim(this.ed_values1.value)).length != 5)
        	{
        		alert("코드 오류! 수정하세요!");
        		return;
        	}
        	if ((nexacro.trim(this.ed_values8.value)).length == 0)
        	{
        		alert("반품한도 오류! 수정하세요!");
        		return;
        	}

        	if (EditnRow != -1)
        		this.fnEdit_data();
        	else
        	{
        		NewRowNum = this.ds_bgrp.addRow();
        		this.fnInputdata();
        	}
        	this.gfn_TransactionP("insert", strUrl, inDs, "", strArg, "fnTr_Callback", false, "P", false, this);
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
        			this.ds_bgrp_send.deleteRow(0);
                	this.ed_values1.setFocus();
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
        			this.ds_bgrp.deleteRow(EditnRow);
                 	this.fnDataclear();
                	this.ed_values2.setFocus();
        		}
        	}
        	else if ( strSvcID == "codesearch" )
        	{
        		if (strErrorMag == '')
        			alert ("미등록 데이터");
        		else
        			this.ed_values4.set_value(strErrorMag);
        	}
        }
        /*
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
        */
        this.btn_can_onclick = function(obj,e)
        {
        	EditnRow = -1;
        	this.fnDataclear();
        	this.ed_values1.setFocus();
        };

        this.btn_del_onclick = function(obj,e)
        {
        	var strUrl = "JSP/sd/insert_bgrp.jsp";
        	var inDs = "ds_bgrp_send=ds_bgrp_send";
        	var strArg  = "user_id=test";
        	var objApp = nexacro.getApplication();
        	if(msg_result = objApp.confirm( "삭제된 데이터는 복원하실수 없습니다.\n 정말 삭제하시겠습니까? " , "삭제처리", "warning" ))
        	{
        		this.ds_bgrp.setColumn(EditnRow,"CODE",  nexacro.trim(this.ed_values1.value));
        		this.ds_bgrp.setColumn(EditnRow,"NAME",  nexacro.trim(this.ed_values4.value));
        		this.ds_bgrp.setColumn(EditnRow,"BP_YN", nexacro.trim(this.ed_values5.value));
        		this.ds_bgrp.setColumn(EditnRow,"BH_YUL",nexacro.trim(this.ed_values8.value));
        		this.ds_bgrp.setColumn(EditnRow,"DNAME",	nexacro.trim(this.ed_values2.value));
        		this.ds_bgrp.setColumn(EditnRow,"JNAME",	nexacro.trim(this.ed_values3.value));
        		if (this.ed_values7.value=="")
        			this.ds_bgrp.setColumn(EditnRow,"BG_YMD","99999999");
        		else
        			this.ds_bgrp.setColumn(EditnRow,"BG_YMD",this.ed_values7.value);
        		this.ds_bgrp_send.addRow();
        		this.ds_bgrp_send.copyRow(0, this.ds_bgrp, EditnRow);
        		this.ds_bgrp_send.setColumn(0,"O_CODE", o_code);
        		this.ds_bgrp_send.setColumn(0,"ROWTYPE", "D" );

        		this.gfn_TransactionP("delete", strUrl, inDs, "", "", "fnTr_Callback", false, "P", false, this);
        		this.ds_bgrp.deleteRow(EditnRow);
        		this.ds_bgrp_send.deleteRow(0);
        		this.grd_view.updateToDataset();
        	}
        };

        this.ds_bgrp_onload = function(obj,e)
        {
        	if(e.reason == 0)
        	{
        		if (this.ds_bgrp.rowcount == 0)
        			alert("조회된 데이터가 없습니다.");
        	}
        };

        this.common_onkeydown = function(obj,e)
        {
        	//Enter Key를 눌렀을 경우 처리
        	if (e.keycode == 13)
        	{
        		if (obj.name == "ed_values1") this.ed_values4.setFocus();
        		else if (obj.name == "ed_values4") this.ed_values5.setFocus();
        		else if (obj.name == "ed_values5") this.ed_values6.setFocus();
        		else if (obj.name == "ed_values6") this.ed_values7.setFocus();
        		else if (obj.name == "ed_values7") this.ed_values8.setFocus();
        	}//ESC 키처리
        	else if (e.keycode == 27)
        	{
        		if (obj.name == "ed_values4") this.ed_values1.setFocus();
        		else if (obj.name == "ed_values5") this.ed_values4.setFocus();
        		else if (obj.name == "ed_values6") this.ed_values5.setFocus();
        		else if (obj.name == "ed_values7") this.ed_values6.setFocus();
        		else if (obj.name == "ed_values8") this.ed_values7.setFocus();
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

        this.ed_values1_onkillfocus = function(obj,e)
        {
        	if((nexacro.trim(this.ed_values1.value)).length == 5 )
        	{
        		var strUrl = "JSP/sd/bdbr_help.jsp";
        		var strArg;
        		if(this.ed_values1.value == "")
        			return;
        		strArg = " Values1="+nexacro.wrapQuote((this.ed_values1.value).substr(0,2));
        		this.gfn_TransactionP("codesearch2", strUrl, "", "", strArg, "fnTr_Callback2", false, "P", false, this);
        	}
        };

        this.fnTr_Callback2 = function(strSvcID, nErrorCode, strErrorMag)
        {
        	if(nErrorCode != 0)
        	{
        		alert(strErrorMag);
        		return;
        	}
        	if ( strSvcID == "codesearch2" )
        	{
        		if (strErrorMag == '')
        		{
        			this.ed_values2.set_value("");
        			this.ed_values3.set_value("");
        		}
        		else
        		{
        			var strArr = strErrorMag.split('^');
        			this.ed_values2.set_value(strArr[0]);
        			this.ed_values3.set_value(strArr[1]);
        		}
        	}
        }

        this.ed_values5_onkillfocus = function(obj,e)
        {
        	if (this.ed_values5.value == "0") this.ed_values6.set_index(0);
        	else if (this.ed_values5.value == "1") this.ed_values6.set_index(1);
        	else if (this.ed_values5.value == "2") this.ed_values6.set_index(2);
        };

        this.ed_values6_onitemchanged = function(obj,e)
        {
        	if (this.ed_values6.index == 0) this.ed_values5.set_value("0");
        	else if (this.ed_values6.index == 1) this.ed_values5.set_value("1");
        	else if (this.ed_values6.index == 2) this.ed_values5.set_value("2");
        };

        this.btn_print_onclick = function(obj,e)
        {
        	var nX = system.clientToScreenX(this, 0);
        	var nY = system.clientToScreenY(this, 0);
        	var strArg;
        	var sOpenStyle = "topmost=true autosize=true dragmovetype=all titletext=출력화면 showtitlebar=true showstatusbar=false resizable=true";
        	nexacro.open("print", "sd::SD6210P.xfdl", this.getOwnerFrame(), "", sOpenStyle, nX, nY);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD6210F_onload,this);
            this.ed_s_values3.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.Static02_08.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_view.addEventHandler("oncelldblclick",this.grd_view_oncelldblclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_can00.addEventHandler("onclick",this.btn_can_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_save.addEventHandler("onkeydown",this.btn_save_onkeydown,this);
            this.ed_values5.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values5.addEventHandler("onkillfocus",this.ed_values5_onkillfocus,this);
            this.ed_values1.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values1.addEventHandler("onkillfocus",this.ed_values1_onkillfocus,this);
            this.ed_values2.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values3.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values4.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values6.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values6.addEventHandler("onitemchanged",this.ed_values6_onitemchanged,this);
            this.ed_values8.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values7.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_s_values1.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.ed_s_values2.addEventHandler("onkeydown",this.s_common_onkeydown,this);
            this.ds_bgrp.addEventHandler("onload",this.ds_bdbr_onload,this);
            this.ds_bdbr.addEventHandler("onload",this.ds_bdbr_onload,this);
            this.ds_bjbr.addEventHandler("onload",this.ds_bdbr_onload,this);
            this.ds_bgrp_send.addEventHandler("onload",this.ds_bdbr_onload,this);
        };
        this.loadIncludeScript("SD6210F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
