(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR203P");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_gb", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">입자,퇴사,정규등 일자 기준</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">경력 기준</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">월별 입퇴사자</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_gb00","2","50","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("기준일자");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","sta_gb00:0","50",null,"30","2",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","4","5","356","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("기간별 인원 현황");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_ymd","sta_gb00:5","55","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ckb_gb","cald_ymd:0","55","155","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("퇴사자 포함");
            obj.set_value("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb","ckb_gb:0","50","99","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("구분");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Radio("rd_select","sta_gb:0","50",null,"30","2",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_gb");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_columncount("3");
            obj.set_padding("0px 0px 0px 50px");
            obj.set_text("부서별 인원 현황");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"16","120","22","140",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","120","22","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("출력");
            this.addChild(obj.name, obj);

            obj = new Div("div_sub","2","Static01_00:0",null,null,"2","0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_url("hr::HR203P_01.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"16","120","22","270",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("초기화");
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
            this._addPreloadList("fdl","hr::HR203P_01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("HR203P.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("HR203P.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        this.HR203P_onload = function(obj,e)
        {
        	var dt = new Date();

        	this.cald_ymd.set_value(dt);
        	this.fn_setDivUrl();
        };

        this.rd_select_onitemchanged = function(obj,e)
        {
        	this.fn_setDivUrl();
        };

        this.fn_setDivUrl = function()
        {
        	switch (this.rd_select.value)
        	{
        		case "01" :
        			this.div_sub.set_url("hr::HR203P_01.xfdl");
        			break;
        		case "02" :
        			this.div_sub.set_url("hr::HR203P_02.xfdl");
        			break;
        		case "03" :
        			this.div_sub.set_url("hr::HR203P_03.xfdl");
        			break;
        	}
        }

        this.btn_clear_onclick = function(obj,e)
        {
        	this.div_sub.form.fn_setClear();
        };

        this.btn_search_onclick = function(obj,e)
        {
        	this.div_sub.form.fn_getData_list(this.cald_ymd.value,this.lfn_CheckBox_Return(this.ckb_gb));
        };

        this.btn_print_onclick = function(obj,e)
        {
        	var permission = this.getPermission_print();

        	if (permission == false)
        	{
        		this.alert("권한이 없습니다.");
        		return false;
        	}

        	this.div_sub.form.fn_print(this.cald_ymd.value,this.lfn_CheckBox_Return(this.ckb_gb));
        };

        this.ckb_gb_onchanged = function(obj,e)
        {
        	if (this.rd_select.value == "02")
        	{
        		this.div_sub.form.fn_setUse(this.lfn_CheckBox_Return(this.ckb_gb));
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.HR203P_onload,this);
            this.ckb_gb.addEventHandler("onchanged",this.ckb_gb_onchanged,this);
            this.rd_select.addEventHandler("onitemchanged",this.rd_select_onitemchanged,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
        };
        this.loadIncludeScript("HR203P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
