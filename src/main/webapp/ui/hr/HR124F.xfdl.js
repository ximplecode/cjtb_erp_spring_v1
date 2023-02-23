(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR124F");
            this.set_titletext("증명서 발급 리스트");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_hr123_03", this);
            obj._setContents("<ColumnInfo><Column id=\"BALNO\" type=\"STRING\" size=\"256\"/><Column id=\"JMGB\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"SIN\" type=\"STRING\" size=\"256\"/><Column id=\"YMD\" type=\"STRING\" size=\"256\"/><Column id=\"YONGDO\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PRT_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_type", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">재직증명서</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">경력증명서</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","4","5","356","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("즘영서 발급 리스트");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01","4","45","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회기간");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","sta00_01:0","45",null,"30","4",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_symd","sta00_01:8","50","163","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","cald_symd:0","50","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("부터");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_eymd","Static00:0","50","163","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","cald_eymd:3","45","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("신청인");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sabun","sta00_01_00:7","51","5.60%","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("white");
            obj.set_text("010-9118-8920");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","edt_sabun:0","51","10.56%","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("white");
            obj.set_text("010-9118-8920");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search_insa","edt_name:0","50","21","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_icon("url(\'Img::loupe.png\')");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"50","120","22","140",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"50","120","22","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("출력");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list2","4","Static01_00:0",null,null,"4","4",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("ds_hr123_03");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"155\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"141\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"발급번호\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직위\"/><Cell col=\"5\" text=\"신청구분\"/><Cell col=\"6\" text=\"용도\"/><Cell col=\"7\" text=\"발급수량\"/><Cell col=\"8\" text=\"발급일자\"/><Cell col=\"9\"/></Band><Band id=\"body\"><Cell text=\"bind:BALNO\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:SABUN\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:SIN\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:BUSE\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:JIKWI\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:JMGB\" displaytype=\"combotext\" combodataset=\"ds_type\" combodatacol=\"NAME\" combocodecol=\"CODE\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:YONGDO\" combodataset=\"ds_purpose\" combocodecol=\"NAME\" combodatacol=\"NAME\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:QTY\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:YMD\" textAlign=\"center\" displaytype=\"date\"/><Cell col=\"9\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"출력\"/></Band></Format></Formats>");
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
        this.addIncludeScript("HR124F.xfdl","Lib::Lib_service.xjs");
        this.registerScript("HR124F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;

        var arr_rt;
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");

        this.btn_search_onclick = function(obj,e)
        {
        	if (Eco.isEmpty(this.cald_symd.value) == true)
        	{
        		this.alert("조회 시작일자를 입력해 주세요.");
        		return false;
        	}

        	if (Eco.isEmpty(this.cald_eymd.value) == true)
        	{
        		this.alert("조회 종료일자를 입력해 주세요.");
        		return false;
        	}


        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/getData_hr124.jsp";
        	in_ds = "ds_hr123_03=ds_hr123_03";
        	out_ds = "ds_hr123_03=ds_hr123_03";
        	str_arg = "SDATE='" + this.cald_symd.value + "' EDATE='" + this.cald_eymd.value + "' SABUN='" + this.edt_sabun.value + "'";

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_none", true, "S", false,this);
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

        this.HR124F_onload = function(obj,e)
        {
        	var dt = new Date();

        	this.cald_symd.set_value( Eco.date.addMonth(dt, -1) );
        	this.cald_eymd.set_value(dt);
        	//this.edt_sabun.set_value("");
        };

        this.grd_list2_oncellclick = function(obj,e)
        {
        	if (e.col == 9)
        	{
        		var permission = this.getPermission_print();

        		if (permission == false)
        		{
        			this.alert("권한이 없습니다.");
        			return false;
        		}

        		if (this.cb_type.value == "1")
        		{
        			this.fn_prt1();
        		}
        		else
        		{
        			this.fn_prt2();
        		}

        		this.ds_hr123_03.setColumn(e.row,"PRT","Y");
        		var str_url, in_ds, out_ds, str_arg;
        		str_url = "JSP/hr/setData_hr123_dml.jsp";
        		in_ds = "ds_hr123_03=ds_hr123_03:U";
        		out_ds = "ds_hr123_03=ds_hr123_03";
        		str_arg = "UPDATE_ID='" + nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN") +"'";
        		//str_arg = "UPDATE_ID='C17011'";


        		this.gfn_TransactionP("update", str_url, in_ds, out_ds, str_arg, "Callback_none", true, "P", false,this);
        	}
        };

        this.fn_prt1 = function()
        {
        	var rDate = this.cald_bymd.value;
        	var rdUrl;
        	var rdParam = "/rp ["+this.edt_no.value+"]";

        	// 2018년 이후 발급분에 대해서만 최정민 신임 회장님이 대표이사
        	if (rDate <= "20171231") rdUrl = gv_svcUrl+"rpt/hr/HR124P_01.mrd";
        	else if (rDate < "20210901") rdUrl = gv_svcUrl+"rpt/hr/HR124P_01_2018.mrd";
        	else rdUrl = gv_svcUrl+"rpt/hr/HR124P_01_2021.mrd";

        	var objNew = new ChildFrame();
        	objNew.init("common_print",0,0,null,null,100,100,"common::H_MRD.xfdl");
        	this.addChild("common_print",objNew);
        	//objNew.set_openalign("center middle");
        	objNew.set_autosize(false);
        	objNew.set_titletext("재직증명서");
        	objNew.set_showtitlebar(true);
        	objNew.set_resizable(true);
        	objNew.showModal("common_print",this.getOwnerFrame(),{rdUrl:rdUrl, rdParam:rdParam},this,this.fn_common_print);
        }

        this.fn_common_print = function(strID, variant)
        {
        	this.removeChild("common_print");
        };

        this.fn_prt2 = function()
        {
        	var rDate = this.cald_bymd.value;
        	var rdUrl = "";
        	var rdParam = "/rp ["+this.edt_no.value+"]";

        	// 2018년 이후 발급분에 대해서만 최정민 신임 회장님이 대표이사
        	if (rDate <= '20171231') rdUrl = gv_svcUrl+"rpt/hr/HR124P_02.mrd";
        	else if (rDate < '20210901') rdUrl = gv_svcUrl+"rpt/hr/HR124P_02_2018.mrd";
        	else rdUrl = gv_svcUrl+"rpt/hr/HR124P_02_2021.mrd";

        	var objNew = new ChildFrame();
        	objNew.init("common_print",0,0,null,null,100,100,"common::H_MRD.xfdl");
        	this.addChild("common_print",objNew);
        	//objNew.set_openalign("center middle");
        	objNew.set_autosize(false);
        	objNew.set_titletext("경력증명서");
        	objNew.set_showtitlebar(true);
        	objNew.set_resizable(true);
        	objNew.showModal("common_print",this.getOwnerFrame(),{rdUrl:rdUrl, rdParam:rdParam},this,this.fn_common_print);
        }

        this.btn_search_insa_onclick = function(obj,e)
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
        		this.edt_sabun.set_value(arr_rt[0]);
        		this.edt_name.set_value(arr_rt[1]);
        	}
        	else
        	{
        		this.edt_sabun.set_value("");
        		this.edt_name.set_value("");
        	}
        	this.removeChild("sInsa");

        };

        this.btn_print_onclick = function(obj,e)
        {
        	var permission = this.getPermission_print();

        	if (permission == false)
        	{
        		this.alert("권한이 없습니다.");
        		return false;
        	}

        	var rdUrl = gv_svcUrl+"rpt/hr/HR124P_00.mrd";
        	var rdParam = "/rp ["+this.cald_symd.value +"][" + this.cald_eymd.value + "][" + this.edt_sabun.value + "]";
        	rdParam = rdParam.replace(/undefined/g,"");

        	trace(rdParam);

        	var objNew = new ChildFrame();
        	objNew.init("common_print",0,0,null,null,100,100,"common::H_MRD.xfdl");
        	this.addChild("common_print",objNew);
        	//objNew.set_openalign("center middle");
        	objNew.set_autosize(false);
        	objNew.set_titletext("증명서 발급 대장");
        	objNew.set_showtitlebar(true);
        	objNew.set_resizable(true);
        	objNew.showModal("common_print",this.getOwnerFrame(),{rdUrl:rdUrl, rdParam:rdParam},this,this.fn_common_print);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.HR124F_onload,this);
            this.btn_search_insa.addEventHandler("onclick",this.btn_search_insa_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
            this.grd_list2.addEventHandler("oncellclick",this.grd_list2_oncellclick,this);
        };
        this.loadIncludeScript("HR124F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
