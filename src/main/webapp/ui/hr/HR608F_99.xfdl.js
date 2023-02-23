(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR608F_99");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(255,310);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CARDDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","4","5","246","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("종합 근태정보 오픈");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ymd","4","55","96","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("일자");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","sta_ymd:0","55","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_s_ymd","104","60","136","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","4","88","246","185",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"마감 일자\"/></Band><Band id=\"body\"><Cell text=\"bind:CARDDATE\" displaytype=\"date\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","4","278","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("적용");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","130","278","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",255,310,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("HR608F_99.xfdl","Lib::Lib_service.xjs");
        this.registerScript("HR608F_99.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;

        this.HR608F_99_onload = function(obj,e)
        {
        	var dt = new Date();
        	this.cald_s_ymd.set_value(Eco.date.addDate(dt, -1));
        	this.fn_getData();

        };

        this.fn_getData = function()
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/getData_hr608_99.jsp";
        	in_ds = "ds_list=ds_list";
        	out_ds = "ds_list=ds_list";
        	str_arg = "";

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_none", true, "P", false,this);
        }

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

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btn_save_onclick = function(obj,e)
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/setData_hr608_99.jsp";
        	in_ds = "ds_list=ds_list";
        	out_ds = "ds_list=ds_list";
        	str_arg = "CARDDATE='" + this.cald_s_ymd.value + "'";

        	this.gfn_TransactionP("dml", str_url, in_ds, out_ds, str_arg, "Callback_dml", true, "P", false,this);
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
        	this.fn_getData();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.HR608F_99_onload,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("HR608F_99.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
