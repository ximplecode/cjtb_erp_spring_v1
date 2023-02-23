(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR604F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_co", this);
            obj._setContents("<ColumnInfo><Column id=\"CO\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","4","5","356","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("근태 일마감");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01","4","50","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("마감일자");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","84","50","406","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_ymd","90","55","135","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","4","80","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("사 번");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","84","80","406","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_s_sabun","89","85","58","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_border("0px none transparent");
            obj.set_textAlign("center");
            obj.set_readonly("false");
            obj.set_text("C17011");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_s_name","149","85","88","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("0px none transparent");
            obj.set_textAlign("center");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_S","239","85","21","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_icon("url(\'Img::loupe.png\')");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_e_sabun","312","85","58","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_border("0px none transparent");
            obj.set_textAlign("center");
            obj.set_readonly("false");
            obj.set_text("C17011");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_e_name","372","85","88","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_border("0px none transparent");
            obj.set_textAlign("center");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_E","462","85","21","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_icon("url(\'Img::loupe.png\')");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","370","16","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("마감");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","269","85","33","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("~");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1250,625,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cald_ymd","value","ds_insa","IPSADT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("HR604F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("HR604F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("HR604F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        this.HR604F_onload = function(obj,e)
        {
        	var dt = new Date();
        	this.cald_ymd.set_value(Eco.date.addDate(dt, -1));
        	this.edt_s_sabun.set_value("C00000");
        	this.edt_e_sabun.set_value("CZZZZZ");

        	this.btn_save.setFocus();
        };

        this.btn_S_onclick = function(obj,e)
        {
        	var objNew = new ChildFrame();
        	objNew.init("sInsa",0,0,237,440,null,null,"common::Insa.xfdl");
        	this.addChild("sInsa",objNew);
        	objNew.set_openalign("center middle");
        	objNew.set_showtitlebar(false);
        	objNew.showModal("sInsa",this.getOwnerFrame(),{arr_s:arr_rt},this,this.fn_Callback_insa_S);
        };


        this.fn_Callback_insa_S = function(strID, vArgu)
        {
        	if (vArgu == 1)
        	{
        		this.edt_s_sabun.set_value(arr_rt[0]);
        		this.edt_s_name.set_value(arr_rt[1]);
        	}

        	this.removeChild("sInsa");

        };

        this.btn_E_onclick = function(obj,e)
        {
        	var objNew = new ChildFrame();
        	objNew.init("sInsa",0,0,237,440,null,null,"common::Insa.xfdl");
        	this.addChild("sInsa",objNew);
        	objNew.set_openalign("center middle");
        	objNew.set_showtitlebar(false);
        	objNew.showModal("sInsa",this.getOwnerFrame(),{arr_s:arr_rt},this,this.fn_Callback_insa_E);
        };

        this.fn_Callback_insa_E = function(strID, vArgu)
        {
        	if (vArgu == 1)
        	{
        		this.edt_e_sabun.set_value(arr_rt[0]);
        		this.edt_e_name.set_value(arr_rt[1]);
        	}

        	this.removeChild("sInsa");

        };

        this.btn_save_onclick = function(obj,e)
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/getData_hr604.jsp";
        	in_ds = "ds_co=ds_co";
        	out_ds = "ds_co=ds_co";
        	str_arg = " YMD='" + this.cald_ymd.value + "'"+
        	          " S_SABUN='" + this.edt_s_sabun.value + "'" +
        			  " E_SABUN='" + this.edt_e_sabun.value + "'";
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_co", true, "S", false,this);
        };

        this.Callback_co = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		if (ErrorCode != -99)
        		{
        			this.alert(ErrorMsg);
        		}
        		return false;
        	}

        	if ( this.ds_co.getColumn(0,"CO") > 0)
        	{

        		var objApp = nexacro.getApplication();

        		var confirm_result = objApp.confirm("이미 마감된 자료입니다.\n 다시 마감하시겠습니까?","근태마감","warning");

        		if (confirm_result != true)
        		{
        			return false;
        		}
        	}

        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/setData_hr604.jsp";
        	in_ds = "";
        	out_ds = "";
        	str_arg = " YMD='" + this.cald_ymd.value + "'"+
        	          " S_SABUN='" + this.edt_s_sabun.value + "'" +
        			  " E_SABUN='" + this.edt_e_sabun.value + "'";
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_dml", true, "U", false,this);
        };

        this.Callback_co = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		if (ErrorCode != -99)
        		{
        			this.alert(ErrorMsg);
        		}
        		return false;
        	}

        	this.alert("마감되었습니다.");
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.HR604F_onload,this);
            this.btn_S.addEventHandler("onclick",this.btn_S_onclick,this);
            this.btn_E.addEventHandler("onclick",this.btn_E_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("HR604F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
