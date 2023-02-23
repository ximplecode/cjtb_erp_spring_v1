(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR608F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_usecd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hr608_04", this);
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TMSNM\" type=\"STRING\" size=\"256\"/><Column id=\"FRDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TODATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hr608_01", this);
            obj._setContents("<ColumnInfo><Column id=\"HR_CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUSEO\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"CARDIN\" type=\"STRING\" size=\"256\"/><Column id=\"CARDOUT\" type=\"STRING\" size=\"256\"/><Column id=\"SAYOO\" type=\"STRING\" size=\"256\"/><Column id=\"TMSCD\" type=\"STRING\" size=\"256\"/><Column id=\"LUNTIME\" type=\"STRING\" size=\"256\"/><Column id=\"EVETIME\" type=\"STRING\" size=\"256\"/><Column id=\"OVERTIME\" type=\"STRING\" size=\"256\"/><Column id=\"OVERPAY\" type=\"STRING\" size=\"256\"/><Column id=\"EATPAY\" type=\"STRING\" size=\"256\"/><Column id=\"CARDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DANGPAY\" type=\"STRING\" size=\"256\"/><Column id=\"KYOPAY\" type=\"STRING\" size=\"256\"/><Column id=\"MIDNIGHTOVERTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MIDNIGHTOVERPAY\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_OVERTIME\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_OVERPAY\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_KYOPAY\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALOVERPAY\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_CARDIN\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_CARDOUT\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_TMSCD\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OVERTIME_I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new GroupBox("GroupBox00","2","52","398","218",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("검색");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 15pt/normal \"normal/normal\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","129","230","262","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","129","200","262","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","129","170","262","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","129","110","262","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("sta_buse","9","140","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("부서");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","sta_buse:0","Static01:0","262","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","4","5","296","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("입사지원서 조회");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ymd","9","110","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("일자");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_s_ymd","sta_ymd:0","sta_ymd:-25","182","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ckb_month","cald_s_ymd:2","sta_ymd:-25","69","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("월별 검색");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("N");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_s_busecd","sta_buse:2","145","85","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_border("1px solid #10aea9");
            obj.set_background("transparent");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_s_busenm","edt_s_busecd:2","145","145","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("1px solid #10aea9");
            obj.set_background("transparent");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search_buse","edt_s_busenm:1","145","21","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_icon("url(\'Img::loupe.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sabun00_00","9","170","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("성명");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sabun01","9","200","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("근태사유");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_s_usegb","sta_sabun01:2","205","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_usecd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_type("filterlike");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_s_sabun","sta_sabun00_00:2","175","85","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_border("1px solid #10aea9");
            obj.set_background("transparent");
            obj.set_textAlign("center");
            obj.set_readonly("false");
            obj.set_text("C17011");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_s_name","edt_s_sabun:2","175","145","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_border("1px solid #10aea9");
            obj.set_background("transparent");
            obj.set_textAlign("center");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search_nm","edt_s_name:2","175","21","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_icon("url(\'Img::loupe.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sabun01_00","9","230","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("필터");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ckb_01","sta_sabun01_00:2","235","118","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("출근자만 필터링");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ckb_02","ckb_01:17","235","118","20",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("근태청원 필터링");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00_00","2","272","398","58",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("출력");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 15pt/normal \"normal/normal\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print","10","300","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("출력");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print_long","btn_print:2","300","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("장기근태출력");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ckb_long","btn_print_long:2","301","136","20",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("장기근태 퇴사자 포함");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00_00_00","2","340","398",null,null,"2",null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("장기근태자");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 15pt/normal \"normal/normal\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","9","370","382",null,null,"8",null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_binddataset("ds_hr608_04");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"57\"/><Column size=\"61\"/><Column size=\"61\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"부서\"/><Cell col=\"1\" text=\"직위\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"근태\"/><Cell col=\"4\" colspan=\"2\" text=\"기간\"/></Band><Band id=\"body\"><Cell text=\"bind:BUSE\"/><Cell col=\"1\" text=\"bind:JIKWI\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:NAME\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:TMSNM\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:TODATE\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:FRDATE\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","407","62",null,null,"2","2",null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_binddataset("ds_hr608_01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"21\"/><Column size=\"53\"/><Column size=\"80\"/><Column size=\"53\"/><Column size=\"61\"/><Column size=\"58\"/><Column size=\"52\"/><Column size=\"52\"/><Column size=\"52\"/><Column size=\"52\"/><Column size=\"52\"/><Column size=\"52\"/><Column size=\"52\"/><Column size=\"52\"/><Column size=\"60\"/><Column size=\"52\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" rowspan=\"2\" text=\"사번\"/><Cell col=\"2\" rowspan=\"2\" text=\"부서\"/><Cell col=\"3\" rowspan=\"2\" text=\"직위\"/><Cell col=\"4\" rowspan=\"2\" text=\"성명\"/><Cell col=\"5\" rowspan=\"2\" text=\"일자\"/><Cell col=\"6\" text=\"R출근\" border=\"1px solid #cacaca,1px solid #cacaca,0px solid #cacaca\"/><Cell col=\"7\" text=\"R퇴근\" border=\"1px solid #cacaca,1px solid #cacaca,0px solid #cacaca\"/><Cell col=\"8\" text=\"R출근\" border=\"1px solid #cacaca,1px solid #cacaca,0px solid #cacaca\"/><Cell col=\"9\" text=\"출근\" border=\"1px solid #cacaca,1px solid #cacaca,0px solid #cacaca\"/><Cell col=\"10\" text=\"퇴근\" border=\"1px solid #cacaca,1px solid #cacaca,0px solid #cacaca\" tooltiptext=\"시간\"/><Cell col=\"11\" text=\"출근\" border=\"1px solid #cacaca,1px solid #cacaca,0px solid #cacaca\"/><Cell col=\"12\" text=\"반반\" border=\"1px solid #cacaca,1px solid #cacaca,0px solid #cacaca\"/><Cell col=\"13\" colspan=\"2\" text=\"연장\" border=\"1px solid #cacaca\"/><Cell col=\"15\" colspan=\"3\" text=\"승인\" border=\"1px solid #cacaca\"/><Cell col=\"18\" rowspan=\"2\" text=\"결재\"/><Cell col=\"19\" rowspan=\"2\" text=\"재처리\"/><Cell row=\"1\" col=\"6\" text=\"시간\" border=\"0px solid #cacaca,1px solid #cacaca,1px solid #cacaca\"/><Cell row=\"1\" col=\"7\" text=\"시간\" border=\"0px solid #cacaca,1px solid #cacaca,1px solid #cacaca\"/><Cell row=\"1\" col=\"8\" text=\"현황\" border=\"0px solid #cacaca,1px solid #cacaca,1px solid #cacaca\"/><Cell row=\"1\" col=\"9\" border=\"0px solid #cacaca,1px solid #cacaca,1px solid #cacaca\" text=\"시간\"/><Cell row=\"1\" col=\"10\" border=\"0px solid #cacaca,1px solid #cacaca,1px solid #cacaca\" text=\"시간\"/><Cell row=\"1\" col=\"11\" border=\"0px solid #cacaca,1px solid #cacaca,1px solid #cacaca\" text=\"현황\"/><Cell row=\"1\" col=\"12\" border=\"0px solid #cacaca,1px solid #cacaca,1px solid #cacaca\" text=\"상태\"/><Cell row=\"1\" col=\"13\" border=\"0px solid #cacaca,1px solid #cacaca,1px solid #cacaca\" text=\"시간\"/><Cell row=\"1\" col=\"14\" border=\"0px solid #cacaca,1px solid #cacaca,1px solid #cacaca\" text=\"수당\"/><Cell row=\"1\" col=\"15\" border=\"0px solid #cacaca,1px solid #cacaca,1px solid #cacaca\" text=\"시간\"/><Cell row=\"1\" col=\"16\" border=\"0px solid #cacaca,1px solid #cacaca,1px solid #cacaca\" text=\"야근\"/><Cell row=\"1\" col=\"17\" border=\"0px solid #cacaca,1px solid #cacaca,1px solid #cacaca\" text=\"교통\"/></Band><Band id=\"body\"><Cell text=\"bind:HR_CHECK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"expr:comp.parent.fn_setCss_BGdarkgreen(currow)\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"bind:SABUN\" textAlign=\"center\" cssclass=\"expr:comp.parent.fn_setCss_BGdarkgreen(currow)\"/><Cell col=\"2\" text=\"bind:BUSEO\" textAlign=\"center\" cssclass=\"expr:comp.parent.fn_setCss_BGdarkgreen(currow)\"/><Cell col=\"3\" text=\"bind:JIKWI\" textAlign=\"center\" cssclass=\"expr:comp.parent.fn_setCss_BGdarkgreen(currow)\"/><Cell col=\"4\" text=\"bind:NAME\" textAlign=\"center\" cssclass=\"expr:comp.parent.fn_setCss_BGdarkgreen(currow)\"/><Cell col=\"5\" text=\"bind:CARDDATE\" textAlign=\"center\" cssclass=\"expr:comp.parent.fn_setCss_BGdarkgreen(currow)\"/><Cell col=\"6\" text=\"bind:REAL_CARDIN\" textAlign=\"center\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"##:##:##\" maskeditmaskchar=\" \" maskeditclipmode=\"excludespace\" cssclass=\"expr:comp.parent.fn_setCss_BGdarkgreen(currow)\"/><Cell col=\"7\" text=\"bind:REAL_CARDOUT\" textAlign=\"center\" maskeditformat=\"##:##:##\" maskedittype=\"string\" displaytype=\"mask\" maskeditmaskchar=\" \" cssclass=\"expr:comp.parent.fn_setCss_BGdarkgreen(currow)\"/><Cell col=\"8\" text=\"bind:REAL_TMSCD\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"ds_usecd\" combocodecol=\"CODE\" combodatacol=\"NAME\" cssclass=\"expr:comp.parent.fn_setCss_BGdarkgreen(currow)\"/><Cell col=\"9\" text=\"bind:CARDIN\" textAlign=\"center\" maskeditformat=\"##:##:##\" maskedittype=\"string\" displaytype=\"mask\" maskeditmaskchar=\" \" cssclass=\"expr:comp.parent.fn_setCss_BGdarkgreen(currow)\"/><Cell col=\"10\" text=\"bind:CARDOUT\" textAlign=\"center\" maskeditformat=\"##:##:##\" maskedittype=\"string\" displaytype=\"mask\" maskeditmaskchar=\" \" cssclass=\"expr:comp.parent.fn_setCss_BGdarkgreen(currow)\"/><Cell col=\"11\" text=\"bind:SAYOO\" textAlign=\"center\" cssclass=\"expr:comp.parent.fn_setCss_BGdarkgreen(currow)\"/><Cell col=\"12\" text=\"bind:EDIT_NM\" textAlign=\"center\" cssclass=\"expr:comp.parent.fn_setCss_BGdarkgreen(currow)\"/><Cell col=\"13\" text=\"bind:OVERTIME\" textAlign=\"center\" maskeditformat=\"##:##:##\" maskedittype=\"string\" displaytype=\"mask\" maskeditmaskchar=\" \" cssclass=\"expr:comp.parent.fn_setCss_BGdarkgreen(currow)\"/><Cell col=\"14\" text=\"bind:OVERPAY\" textAlign=\"right\" displaytype=\"number\" cssclass=\"expr:comp.parent.fn_setCss_BGdarkgreen(currow)\"/><Cell col=\"15\" text=\"bind:APPROVAL_OVERTIME\" textAlign=\"center\" maskeditformat=\"##:##\" maskedittype=\"string\" displaytype=\"mask\" maskeditmaskchar=\" \" cssclass=\"expr:comp.parent.fn_setCss_BGdarkgreen(currow)\"/><Cell col=\"16\" text=\"bind:APPROVAL_OVERPAY\" textAlign=\"right\" displaytype=\"number\" cssclass=\"expr:comp.parent.fn_setCss_BGdarkgreen(currow)\"/><Cell col=\"17\" text=\"bind:APPROVAL_KYOPAY\" textAlign=\"right\" displaytype=\"number\" cssclass=\"expr:comp.parent.fn_setCss_BGdarkgreen(currow)\"/><Cell col=\"18\" textAlign=\"center\" cssclass=\"expr:comp.parent.fn_setCssImg(currow)\"/><Cell col=\"19\" textAlign=\"center\" edittype=\"button\" displaytype=\"buttoncontrol\" text=\"재처리\" cssclass=\"expr:comp.parent.fn_setCss_BGdarkgreen(currow)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","271","78","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_all","265","204","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("근태일괄적용");
            this.addChild(obj.name, obj);

            obj = new Button("btn_open",null,"16","120","22","20",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("근태정보오픈");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1250,625,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("HR608F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("HR608F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("HR608F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var arr_rt;


        this.HR608F_onload = function(obj,e)
        {
        	arr_rt = new Array();
        	var dt = new Date();
        	this.cald_s_ymd.set_value(Eco.date.addDate(dt, -1));

        	this.lfn_grdAutofit(this.grd_list);

        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/getData_tmscode.jsp";
        	in_ds = "ds_usecd=ds_usecd";
        	out_ds = "ds_usecd=ds_usecd";
        	str_arg = "";

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_tmscode", true, "S", false,this);
        };

        this.Callback_none = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		if (ErrorCode != -99)
        		{
        			this.alert(ErrorMsg);
        		}
        		return false;
        	}
        };

        this.Callback_tmscode = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		if (ErrorCode != -99)
        		{
        			this.alert(ErrorMsg);
        		}
        		return false;
        	}

        	this.ds_usecd.insertRow(0);
        	this.ds_usecd.setColumn(0,"CODE","AL");
        	this.ds_usecd.setColumn(0,"NAME","전체");
        	this.cb_s_usegb.set_index(0);
        };


        this.btn_Search_buse_onclick = function(obj,e)
        {
        	var objNew = new ChildFrame();
        		objNew.init("sBuse",0,0,237,440,null,null,"common::Buse.xfdl");
        		this.addChild("sBuse",objNew);
        		objNew.set_openalign("center middle");
        		objNew.set_showtitlebar(false);
        		objNew.showModal("sBuse",this.getOwnerFrame(),{arr_s:arr_rt},this,this.fn_Callback_buse);
        };

        this.fn_Callback_buse = function(strID, vArgu)
        {
        	if (vArgu == 1)
        	{
        		this.edt_s_busecd.set_value(arr_rt[0]);
        		this.edt_s_busenm.set_value(arr_rt[1]);
        	}

        	this.removeChild("sBuse");
        };

        this.btn_Search_nm_onclick = function(obj,e)
        {
        	var objNew = new ChildFrame();
        	objNew.init("sInsa",0,0,237,440,null,null,"common::Insa.xfdl");
        	this.addChild("sInsa",objNew);
        	objNew.set_openalign("center middle");
        	objNew.set_showtitlebar(false);
        	objNew.showModal("sInsa",this.getOwnerFrame(),{arr_s:arr_rt},this,this.fn_Callback_insa);
        };

        this.fn_Callback_insa = function(strID, vArgu)
        {
        	if (vArgu == 1)
        	{
        		this.edt_s_sabun.set_value(arr_rt[0]);
        		this.edt_s_name.set_value(arr_rt[1]);
        	}

        	this.removeChild("sInsa");

        };

        this.HR608F_onsize = function(obj,e)
        {
        	this.lfn_grdAutofit(this.grd_list);
        };

        this.fn_setCssImg = function(nRow)
        {
        	var rt;
        	if (this.ds_hr608_01.getColumn(nRow,"I_FLOW_ID") > 0)
        	{
        		rt = "hr_CssBGI_loupe";
        	}
        	else
        	{
        		rt = "";
        	}

        	return rt;
        }

        this.fn_setCss_BGdarkgreen = function(nRow)
        {
        	var rt;
        	if (this.ds_hr608_01.getColumn(nRow,"I_FLOW_ID") > 0)
        	{
        		rt = "CssBG_darkseagreen";
        	}
        	else
        	{
        		rt = "";
        	}

        	return rt;
        }

        this.grd_list_oncelldblclick = function(obj,e)
        {
        	if (e.col >= 1 && e.col <= 12)
        	{
        		this.fn_Popup_hr804f_01(e.row);
        	}
        	else if (e.col >= 13 && e.col <= 18)
        	{
        	}
        	else if (e.col == 19)
        	{
        	}
        	else if (e.col == 20)
        	{
        	}
        };

        this.fn_Popup_hr804f_01 = function(nRow)
        {
        	var ymd = this.ds_hr608_01.getColumn(nRow,"CARDDATE");
        	var sabun = this.ds_hr608_01.getColumn(nRow,"SABUN");
        	var objNew = new ChildFrame();
        	objNew.init("HR608F_01",0,0,null,null,0,0,"hr::HR608F_01.xfdl");
        	this.addChild("HR608F_01",objNew);
        	objNew.set_openalign("center middle");
        	objNew.set_autosize(true);
        	objNew.set_titletext("인원 변동 현황");
        	//objNew.set_showtitlebar(true);
        	objNew.set_resizable(false);
        	objNew.showModal("HR608F_01",this.getOwnerFrame(),{nRow:nRow, ymd:ymd, sabun:sabun, ds:this.ds_hr608_01},this,this.fn_Popup_01);
        }

        this.fn_Popup_01 = function(strID, variant)
        {
        	this.removeChild("HR608F_01");
        }

        this.ckb_01_onchanged = function(obj,e)
        {
        	this.fn_setFillter(this.ckb_01.value, this.ckb_02.value);
        };

        this.fn_setFillter = function(var1, var2)
        {
        	var filter_txt = "";
        	if (var1 == "0" && var2 == "0")
        	{
        		this.ds_hr608_01.filter("");
        		return false;
        	}

        	if (var1 == "1")
        	{
        		filter_txt = "(CARDIN >='0' || CARDOUT >= '0')";
        	}

        	if (var2 == "1")
        	{
        		if (var1 == "1")
        		{
        			filter_txt = filter_txt + " && I_FLOW_ID > '0'";
        		}
        		else
        		{
        			filter_txt = " I_FLOW_ID > '0'";
        		}
        	}

        	this.ds_hr608_01.set_filterstr(filter_txt);
        }

        this.ckb_02_onchanged = function(obj,e)
        {
        	this.fn_setFillter(this.ckb_01.value, this.ckb_02.value);
        };

        this.btn_all_onclick = function(obj,e)
        {
        	if (Eco.isEmpty(this.cb_s_usegb.value) == true || this.cb_s_usegb.value == "AL")
        	{
        		this.alert("근태 구분을 선택하세요...!!!");
        		return false;
        	}

        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/setData_hr608_tmscd.jsp";
        	in_ds = "ds_hr608_01=ds_hr608_01";
        	out_ds = "ds_hr608_01=ds_hr608_01";
        	str_arg = " TMSCD='" + this.cb_s_usegb.value + "'";

        	this.gfn_TransactionP("dml", str_url, in_ds, out_ds, str_arg, "Callback_dml", true, "U", false,this);
        };

        this.Callback_dml = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		if (ErrorCode != -99)
        		{
        			this.alert(ErrorMsg);
        		}
        		return false;
        	}

        	this.alert("처리되었습니다.");

        };

        this.grd_list_onheadclick = function(obj,e)
        {
        	var nVal, i;
        	if (e.col > 0)
        	{
        		return false;
        	}

        	nVal = obj.getCellProperty("head",0,"text");

        	if (nVal == "0")
        	{
        		nVal = "1";
        	}
        	else
        	{
        		nVal = "0";
        	}

        	obj.setCellProperty("head",0,"text",nVal);

        	/*for ( i = 0; i < this.ds_hr608_01.rowcount - 1; i++)
        	{
        		this.ds_hr608_01.setColumn(i,"HR_CHECK",nVal);
        	}*/


        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/getData_hr608_checkbox.jsp";
        	in_ds = "ds_hr608_01=ds_hr608_01";
        	out_ds = "ds_hr608_01=ds_hr608_01";
        	str_arg = " VAL='" + nVal+ "'";

        	this.gfn_TransactionP("change", str_url, in_ds, out_ds, str_arg, "Callback_none", true, "U", false,this);

        };

        this.btn_print_onclick = function(obj,e)
        {
        	var strArg1, strArg2, strTITLE;
        	var permission = this.getPermission_print();

        	if (permission == false)
        	{
        		this.alert("권한이 없습니다.");
        		return false;
        	}

        	strTITLE = this.cb_s_usegb.text + " 근태 현황";
        	strArg1 = "";
        	strArg2 = "";

        	if (this.ckb_month.value == "Y")
        	{
        		strArg1 = " WHERE A.CARDDATE LIKE substr('" + this.cald_s_ymd.value + "',1,6)||'%'";
        	}
        	else
        	{
        		strArg1 = " WHERE A.CARDDATE = '" + this.cald_s_ymd.value + "'";
        	}

        	if (Eco.isEmpty(this.edt_s_busecd.value) == false)
        	{
        		strArg2 = " AND B.BUSECD = '" + this.edt_s_busecd.value + "'";
        	}

        	if (this.cb_s_usegb.value != "AL")
        	{
        		strArg2 = strArg2 + " AND A.TMSCD = '" + this.cb_s_usegb.value + "'";
        	}

        	if (Eco.isEmpty(this.edt_s_sabun.value) == false)
        	{
        		strArg2 = strArg2 + " AND B.SABUN = '" + this.edt_s_sabun.value + "'";
        	}



        	var rdUrl = gv_svcUrl + "rpt/hr/HR608P_01.mrd";
            var rdParam = "/rp [" + strTITLE + "][" + strArg1 + "][" + strArg2 + "][" + this.cald_s_ymd.value +"]";

        	trace(rdParam);

        	var objNew = new ChildFrame();
        	objNew.init("common_print",0,0,null,null,0,0,"common::H_MRD.xfdl");
        	this.addChild("common_print",objNew);
        	//objNew.set_openalign("center middle");
        	objNew.set_autosize(false);
        	objNew.set_titletext(strTITLE);
        	objNew.set_showtitlebar(true);
        	objNew.set_resizable(false);
        	objNew.showModal("common_print",this.getOwnerFrame(),{rdUrl:rdUrl, rdParam:rdParam},this,this.fn_common_print);
        };

        this.fn_common_print = function(strID, variant)
        {
        	this.removeChild("common_print");
        }

        this.btn_print_long_onclick = function(obj,e)
        {
        	var permission = this.getPermission_print();

        	if (permission == false)
        	{
        		this.alert("권한이 없습니다.");
        		return false;
        	}

        	var sDate, eDate;

        	if (this.ckb_month.value == "Y")
        	{
        		sDate = Eco.date.getMaskFormatString(Eco.date.strToDate(this.cald_s_ymd.value),"yyyyMM") + "01";
        		eDate = Eco.date.getMaskFormatString(Eco.date.strToDate(this.cald_s_ymd.value),"yyyyMM") + "31";
        	}
        	else
        	{
        		sDate = this.cald_s_ymd.value;
        		eDate = this.cald_s_ymd.value;
        	}



        	var rdUrl = gv_svcUrl + "rpt/hr/HR620P_01.mrd";
        	if (this.ckb_long.value == "Y")
        	{
        		var rdParam = "/rp [" + sDate + "][" + eDate + "][][Y]";
        	}
        	else
        	{
        		var rdParam = "/rp [" + sDate + "][" + eDate + "][][]";
        	}

        	var objNew = new ChildFrame();
        	objNew.init("common_print",0,0,null,null,0,0,"common::H_MRD.xfdl");
        	this.addChild("common_print",objNew);
        	//objNew.set_openalign("center middle");
        	objNew.set_autosize(false);
        	objNew.set_titletext("장기근태");
        	objNew.set_showtitlebar(true);
        	objNew.set_resizable(false);
        	objNew.showModal("common_print",this.getOwnerFrame(),{rdUrl:rdUrl, rdParam:rdParam},this,this.fn_common_print);
        };

        this.btn_open_onclick = function(obj,e)
        {
        	this.fn_Popup_hr808_99();
        };

        this.fn_Popup_hr808_99 = function()
        {
        	var objNew = new ChildFrame();
        	objNew.init("HR608F_99",0,0,null,null,0,0,"hr::HR608F_99.xfdl");
        	this.addChild("HR608F_99",objNew);
        	objNew.set_openalign("center middle");
        	objNew.set_autosize(true);
        	objNew.set_titletext("근태 정보 오픈");
        	objNew.set_showtitlebar(false);
        	objNew.set_resizable(false);
        	objNew.showModal("HR608F_99",this.getOwnerFrame(),{},this,this.fn_Popup_02);
        }

        this.fn_Popup_02 = function(strID, variant)
        {
        	this.removeChild("HR608F_99");
        }

        this.grd_list_oncellclick = function(obj,e)
        {
        	if (e.col == 19)
        	{
        		var str_url, in_ds, out_ds, str_arg;
        		str_url = "JSP/hr/setData_hr608_person.jsp";
        		in_ds = "";
        		out_ds = "";
        		str_arg = " CARDDATE='" + this.ds_hr608_01.getColumn(e.row, "CARDDATE") + "'" +
        				  " SABUN='" + this.ds_hr608_01.getColumn(e.row, "SABUN") + "'";

        		this.gfn_TransactionP("dml", str_url, in_ds, out_ds, str_arg, "Callback_none", true, "U", false,this);
        	}
        	else if (e.col == 18 && this.ds_hr608_01.getColumn(e.row, "SAYOO") == "경조")
        	{
        		var rdUrl = gv_svcUrl + "rpt/hr/HR710.mrd";
        		var rdParam = "/rp [1][" + this.ds_hr608_01.getColumn(e.row, "I_FLOW_ID") + "][1]";

        		var objNew = new ChildFrame();
        		objNew.init("common_print",0,0,null,null,0,0,"common::H_MRD.xfdl");
        		this.addChild("common_print",objNew);
        		//objNew.set_openalign("center middle");
        		objNew.set_autosize(false);
        		objNew.set_titletext("근태청원");
        		objNew.set_showtitlebar(true);
        		objNew.set_resizable(true);
        		objNew.showModal("common_print",this.getOwnerFrame(),{rdUrl:rdUrl, rdParam:rdParam},this,this.fn_common_print);
        	}
        	else if (e.col == 18 && this.ds_hr608_01.getColumn(e.row, "I_FLOW_ID") > 0 )
        	{
        		var rdUrl = gv_svcUrl + "rpt/hr/HR700.mrd";
        		var rdParam = "/rp [1][" + this.ds_hr608_01.getColumn(e.row, "I_FLOW_ID") + "][1]";

        		var objNew = new ChildFrame();
        		objNew.init("common_print",0,0,null,null,0,0,"common::H_MRD.xfdl");
        		this.addChild("common_print",objNew);
        		//objNew.set_openalign("center middle");
        		objNew.set_autosize(false);
        		objNew.set_titletext("근태청원");
        		objNew.set_showtitlebar(true);
        		objNew.set_resizable(true);
        		objNew.showModal("common_print",this.getOwnerFrame(),{rdUrl:rdUrl, rdParam:rdParam},this,this.fn_common_print);
        	}
        };

        this.fn_common_print = function(strID, variant)
        {
        	this.removeChild("common_print");
        }

        this.btn_search_onclick = function(obj,e)
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/getData_hr608.jsp";
        	in_ds = "ds_hr608_01=ds_hr608_01 ds_hr608_04=ds_hr608_04";
        	out_ds = "ds_hr608_01=ds_hr608_01 ds_hr608_04=ds_hr608_04";
        	str_arg = " YMD='" + this.cald_s_ymd.value + "'"+
        	          " S_MONTH='" + this.ckb_month.value + "'" +
        			  " TMSCD='" + this.cb_s_usegb.value + "'" +
        			  " S_BUSECD='" + this.edt_s_busecd.value + "'" +
        			  " E_BUSECD='" + this.edt_s_busecd.value + "'" +
        			  " SABUN='" + this.edt_s_sabun.value + "'" +
        			  " NAME='" +  this.edt_s_name.value + "'" +
        			  " TOISAGB='" + this.ckb_long.value + "'";

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_none", true, "S", false,this);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.HR608F_onload,this);
            this.addEventHandler("onsize",this.HR608F_onsize,this);
            this.edt_s_busecd.addEventHandler("onchanged",this.Edit00_00_onchanged,this);
            this.btn_Search_buse.addEventHandler("onclick",this.btn_Search_buse_onclick,this);
            this.btn_Search_nm.addEventHandler("onclick",this.btn_Search_nm_onclick,this);
            this.ckb_01.addEventHandler("onchanged",this.ckb_01_onchanged,this);
            this.ckb_02.addEventHandler("onchanged",this.ckb_02_onchanged,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
            this.btn_print_long.addEventHandler("onclick",this.btn_print_long_onclick,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_all.addEventHandler("onclick",this.btn_all_onclick,this);
            this.btn_open.addEventHandler("onclick",this.btn_open_onclick,this);
        };
        this.loadIncludeScript("HR608F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
