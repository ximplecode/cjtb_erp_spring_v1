(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR952F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_SAGB", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">정규직</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">계약직</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">임시직</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"NAME\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_JIKGB", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">임원</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">관리</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">생산</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"NAME\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nick", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_HR951", this);
            obj._setContents("<ColumnInfo><Column id=\"HR_CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"APPNO\" type=\"STRING\" size=\"256\"/><Column id=\"NAME_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"APP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PAY\" type=\"STRING\" size=\"256\"/><Column id=\"SCHOOL\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWICD\" type=\"STRING\" size=\"256\"/><Column id=\"SA_GB1\" type=\"STRING\" size=\"256\"/><Column id=\"IPSADT\" type=\"STRING\" size=\"256\"/><Column id=\"SOOENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"KYEENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_PRINT\" type=\"STRING\" size=\"256\"/><Column id=\"NICK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWINM\" type=\"STRING\" size=\"256\"/><Column id=\"BUSENM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","4","5","296","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("입사지원서 조회");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","4","140",null,null,"410","5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_HR951");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"153\"/><Column size=\"114\"/><Column size=\"109\"/><Column size=\"210\"/><Column size=\"92\"/><Column size=\"73\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"성 명\"/><Cell col=\"2\" text=\"응시부문\"/><Cell col=\"3\" text=\"입사구분\"/><Cell col=\"4\" text=\"최종학교\"/><Cell col=\"5\" text=\"희망연봉\"/><Cell col=\"6\" text=\"등록일시\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" text=\"bind:HR_CHECK\"/><Cell col=\"1\" text=\"bind:NAME_KOR\"/><Cell col=\"2\" text=\"bind:TITLE\"/><Cell col=\"3\" text=\"bind:APP_TYPE\"/><Cell col=\"4\" text=\"bind:SCHOOL\"/><Cell col=\"5\" text=\"bind:PAY\"/><Cell col=\"6\" text=\"bind:UPDATE_DT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sagb00","grd_list:0","140","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("성 명");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sagb","grd_list:0","sta_sagb00:0","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("사원구분");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_buse","grd_list:0","sta_sagb:0","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("부 서");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sagb_bg00","sta_sagb00:0","140",null,"30","3",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sagb_bg","sta_sagb:0","sta_sagb_bg00:0",null,"30","3",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_sagb","sta_sagb:5","sta_sagb_bg:-25","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_SAGB");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_buse_bg","sta_buse:0","sta_sagb:0",null,"30","3",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buse_cd","sta_buse:5","sta_buse_bg:-25","59","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("50000");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buse_nm","edt_buse_cd:0","sta_buse_bg:-25","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Button("btn_buse_search","edt_buse_nm:1","sta_buse_bg:-25","21","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_icon("url(\'Img::loupe.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("sta_jikwi","grd_list:0","sta_buse:0","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("직 위");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_jikwi_bg","sta_jikwi:0","sta_buse_bg:0",null,"30","3",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_jikwicd","sta_jikwi:5","sta_jikwi_bg:-25","59","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("50000");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_jikwinm","edt_jikwicd:0","sta_jikwi_bg:-25","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Button("btn_jikwi_search","edt_jikwinm:0","sta_jikwi_bg:-25","21","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_icon("url(\'Img::loupe.png\')");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_nick","btn_jikwi_search:1","sta_jikwi_bg:-25","82","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_nick");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ipsadt","grd_list:0","sta_jikwi:0","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("입사일");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ipsadt_bg","sta_ipsadt:0","sta_jikwi_bg:0",null,"30","3",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_ipsadt","sta_ipsadt:5","sta_ipsadt_bg:-25","190","20",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ssdate","grd_list:0","sta_ipsadt:0","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("수습만료일");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ssdate_bg","sta_ssdate:0","sta_ipsadt_bg:0",null,"30","3",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_ssdate","sta_ssdate:5","sta_ssdate_bg:-25","190","20",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Static("sta_skdate","grd_list:0","sta_ssdate:0","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("계약만료일");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sldate_bg","sta_skdate:0","sta_ssdate_bg:0",null,"30","3",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_skdate","sta_skdate:5","sta_sldate_bg:-25","190","20",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","4","56",null,"68","3",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_border("1px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sDate","0","3","120","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("조회기간");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","sta_sDate:0","3","29.41%","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","Static01:0","3","120","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("성명");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01_00","Static00_00:0","3",null,"30","252",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("Button00","Static01_00:5","3","120","60",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("검색");
            obj.set_icon("url(\'Img::loupe.png\')");
            obj.set_iconPosition("left");
            obj.set_padding("0px");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("Button00_00","Button00:1","3","120","60",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("초기화");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cald_sdate","sta_sDate:15","Static01:-25","12.33%","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","cald_sdate:0","8","25","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("부터");
            obj.set_color("white");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cald_edate","Static02:0","Static01:-25","12.01%","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_name","Static00_00:15","8","225","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","sta_sDate:0","120","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("부서");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","Static00_00_00:0","Static01:0","29.41%","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_sBuse_cd","Static00_00_00:15","38","90","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("50000");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_sBuse_nm","edt_sBuse_cd:0","38","160","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("Button01","385","38","21","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_icon("url(\'Img::loupe.png\')");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","Static01_00_00_00:0","Static00_00:0","120","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_text("출력여부");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","Static00_00_01:0","Static01_00:0",null,"30","252",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chk_print","Static00_00_01:15","37","150","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_text("출력건포함");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_falsevalue("N");
            obj.set_truevalue("A");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chk_end","chk_print:0","37","150","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_text("이전건포함");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_falsevalue("N");
            obj.set_truevalue("A");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("Button00",null,"16","120","22","10",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("적용");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","sta_sagb00:5","sta_sagb_bg00:-25","190","20",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1250,625,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cb_sagb","value","ds_HR951","SA_GB1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_buse_cd","value","ds_HR951","BUSECD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_jikwicd","value","ds_HR951","JIKWICD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cb_nick","value","ds_HR951","NICK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cald_ipsadt","value","ds_HR951","IPSADT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cald_ssdate","value","ds_HR951","SOOENDDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cald_skdate","value","ds_HR951","KYEENDDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_name","value","ds_HR951","NAME_KOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_buse_nm","value","ds_HR951","BUSENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_jikwinm","value","ds_HR951","JIKWINM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("HR952F.xfdl","Lib::Lib_service.xjs");
        this.registerScript("HR952F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;

        var arr_rt;

        this.btn_buse_search_onclick = function(obj,e)
        {
        	var objNew = new ChildFrame();
        		objNew.init("sBuse",0,0,237,440,null,null,"common::Buse.xfdl");
        		this.addChild("sBuse",objNew);
        		objNew.set_openalign("center middle");
        		objNew.set_showtitlebar(false);
        		objNew.showModal("sBuse",this.getOwnerFrame(),{arr_s:arr_rt},this,this.fn_Callback);
        };

        this.fn_Callback = function(strID, vArgu)
        {
        	if (vArgu == 1)
        	{
        		this.edt_buse_cd.set_value(arr_rt[0]);
        		this.edt_buse_nm.set_value(arr_rt[1]);
        	}

        	this.removeChild("sBuse");
        };


        this.HR952F_onload = function(obj,e)
        {
        	arr_rt = new Array();

        	var ndate = new Date();
        	this.div_search.form.cald_edate.set_value(ndate);
        	this.div_search.form.cald_sdate.set_value(Eco.date.addMonth(ndate,-2));

        	str_url = "JSP/hr/getData_nick.jsp";
        	in_ds = "ds_nick=ds_nick";
        	out_ds = "ds_nick=ds_nick";
        	str_arg = "";
        	this.gfn_TransactionP("nick", str_url, in_ds, out_ds, str_arg, "Callback_select", true, "P", false, this);


        };

        this.div_search_Button01_onclick = function(obj,e)
        {
        	var objNew = new ChildFrame();
        		objNew.init("sBuse",0,0,237,440,null,null,"common::Buse.xfdl");
        		this.addChild("sBuse",objNew);
        		objNew.set_openalign("center middle");
        		objNew.set_showtitlebar(false);
        		objNew.showModal("sBuse",this.getOwnerFrame(),{arr_s:arr_rt},this,this.fn_Callback_select);
        };

        this.fn_Callback_select = function(strID, vArgu)
        {
        	if (vArgu == 1)
        	{
        		this.div_search.form.edt_sBuse_cd.set_value(arr_rt[0]);
        		this.div_search.form.edt_sBuse_nm.set_value(arr_rt[1]);
        	}

        	this.removeChild("sBuse");
        };

        this.btn_jikwi_search_onclick = function(obj,e)
        {
        	var objNew = new ChildFrame();
        		objNew.init("sBuse",0,0,237,440,null,null,"common::Jikwi.xfdl");
        		this.addChild("sJikwi",objNew);
        		objNew.set_openalign("center middle");
        		objNew.set_showtitlebar(false);
        		objNew.showModal("sJikwi",this.getOwnerFrame(),{arr_s:arr_rt},this,this.fn_Callback_jikwi);
        };

        this.fn_Callback_jikwi = function(strID, vArgu)
        {
        	if (vArgu == 1)
        	{
        		this.edt_jikwicd.set_value(arr_rt[0]);
        		this.edt_jikwinm.set_value(arr_rt[1]);
        	}

        	this.removeChild("sJikwi");
        };

        this.div_search_Button00_onclick = function(obj,e)
        {
        	var str_url, in_ds, out_ds, str_arg;

        	this.grd_list.setCellProperty("head",0,"text","0");

        	str_url = "JSP/hr/SQL_HR952_01S.jsp";
        	in_ds = "ds_HR951=ds_HR951";
        	out_ds = "ds_HR951=ds_HR951";
        	str_arg = "strSDATE='" + this.div_search.form.cald_sdate.value + "' "+
        	          "strEDATE='" + this.div_search.form.cald_edate.value + "' "+
        			  "strNAME='" + this.div_search.form.edt_name.value + "' "+
        			  "strDIVISIONCODE='" + this.div_search.form.edt_sBuse_cd.value + "' "+
        			  "strPrint='" + this.div_search.form.chk_print.value + "' "+
        			  "strEnd='" + this.div_search.form.chk_end.value + "'";
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_select", true, "S", false, this);
        };

        this.Callback_select = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}
        }


        this.div_search_Button00_00_onclick = function(obj,e)
        {
        	this.div_search.form.edt_name.set_value("");
        	this.div_search.form.edt_sBuse_cd.set_value("");
        	this.div_search.form.edt_sBuse_nm.set_value("");
        };

        this.grd_list_onheadclick = function(obj,e)
        {
        	var cValue;
        	var i;
        	if (e.col == "0")
        	{
        		cValue = this.grd_list.getCellProperty("head",0,"text");
        		if (cValue == "1")
        		{
        			cValue = "0";
        		}
        		else
        		{
        			cValue = "1";
        		}
        		this.grd_list.setCellProperty("head",0,"text",cValue);
        		for (i = 0; i < this.ds_HR951.rowcount; i++)
        		{
        			this.ds_HR951.setColumn(i,"HR_CHECK",cValue);
        		}
        	}
        };

        this.Button00_onclick = function(obj,e)
        {
        	var i;
        	var c = 0;
        	for (i = 0; i < this.ds_HR951.rowcount; i++)
        	{
        		if (this.ds_HR951.getColumn(i,"HR_CHECK") == "1")
        		{
        			c = c + 1;
        			if (this.ds_HR951.getColumn(i,"SA_GB1") == null)
        			{
        				this.alert(this.ds_HR951.getColumn(i,"NAME_KOR") + "의 사원구분을 입력하여 주세요");
        				return false;
        			}

        			if (this.ds_HR951.getColumn(i,"BUSECD") == null)
        			{
        				this.alert(this.ds_HR951.getColumn(i,"NAME_KOR") + "의 부서를 입력하여 주세요");
        				return false;
        			}

        			if (this.ds_HR951.getColumn(i,"BUSECD") == null)
        			{
        				this.alert(this.ds_HR951.getColumn(i,"NAME_KOR") + "의 부서를 입력하여 주세요");
        				return false;
        			}

        			if (this.ds_HR951.getColumn(i,"JIKWICD") == null)
        			{
        				this.alert(this.ds_HR951.getColumn(i,"NAME_KOR") + "의 직위를 입력하여 주세요");
        				return false;
        			}

        			if (this.ds_HR951.getColumn(i,"NICK_CD") == null)
        			{
        				this.alert(this.ds_HR951.getColumn(i,"NAME_KOR") + "의 직책을 입력하여 주세요");
        				return false;
        			}

        			if (this.ds_HR951.getColumn(i,"IPSADT") == null)
        			{
        				this.alert(this.ds_HR951.getColumn(i,"NAME_KOR") + "의 입사일자를 입력하여 주세요");
        				return false;
        			}

        			if (this.ds_HR951.getColumn(i,"IPSADT") == null)
        			{
        				this.alert(this.ds_HR951.getColumn(i,"NAME_KOR") + "의 입사일자를 입력하여 주세요");
        				return false;
        			}
        		}
        	}

        	str_url = "JSP/hr/SQL_HR952_01U.jsp";
        	in_ds = "ds_HR951=ds_HR951:U";
        	out_ds = "";
        	str_arg = "";
        	this.gfn_TransactionP("dml", str_url, in_ds, out_ds, str_arg, "Callback_dml", true, "U", false, this);

        };

        this.Callback_dml = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		alert(ErrorMsg);
        		return false;
        	}

        	this.alert("처리되었습니다.");


        }


        this.edt_buse_cd_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.HR952F_onload,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.edt_buse_cd.addEventHandler("onchanged",this.edt_buse_cd_onchanged,this);
            this.btn_buse_search.addEventHandler("onclick",this.btn_buse_search_onclick,this);
            this.btn_jikwi_search.addEventHandler("onclick",this.btn_jikwi_search_onclick,this);
            this.div_search.form.Button00.addEventHandler("onclick",this.div_search_Button00_onclick,this);
            this.div_search.form.Button00_00.addEventHandler("onclick",this.div_search_Button00_00_onclick,this);
            this.div_search.form.Button01.addEventHandler("onclick",this.div_search_Button01_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("HR952F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
