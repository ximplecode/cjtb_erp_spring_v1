(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR501P");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_gb", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">부서기준</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">개인별 근무위치</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","4","5","356","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("근무지별 인원현황");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb","2","50","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("기준일자");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","sta_gb:0","50",null,"30","2",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_ymd","sta_gb:2","55","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ckb_gb","cald_ymd:2","55","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("당일퇴사자 포함");
            obj.set_value("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb00","319","50","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("구분");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Radio("rd_select","sta_gb00:0","50",null,"30","2",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_gb");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_columncount("3");
            obj.set_padding("0px 0px 0px 50px");
            obj.set_text("부서별 인원 현황");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("div_sub","2","Static01_00:0",null,null,"2","2",null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"16","120","22","140",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","120","22","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("출력");
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
        this.addIncludeScript("HR501P.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("HR501P.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        this.HR501P_onload = function(obj,e)
        {
        	var dt = new Date();

        	this.cald_ymd.set_value(dt);

        	this.fn_setDiv(this.rd_select.value);
        };

        this.fn_setDiv = function(val)
        {
        	var rt;
        	switch (val)
        	{
        		case "01" :
        			rt = "hr::HR501P_01.xfdl";
        			break;
        		case "02" :
        			rt = "hr::HR501P_02.xfdl";
        			break;
        	}

        	this.div_sub.set_url(rt);
        }

        this.rd_select_onitemchanged = function(obj,e)
        {
        	this.fn_setDiv(e.postvalue);
        };

        this.btn_search_onclick = function(obj,e)
        {
        	this.div_sub.form.fn_getData(this.cald_ymd.value, this.lfn_CheckBox_Return(this.ckb_gb));
        };

        this.btn_print_onclick = function(obj,e)
        {
        	var permission = this.getPermission_print();

        	if (permission == false)
        	{
        		this.alert("권한이 없습니다.");
        		return false;
        	}

        	this.div_sub.form.fn_print(this.cald_ymd.value, this.lfn_CheckBox_Return_var(this.ckb_gb,"Y",""));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.HR501P_onload,this);
            this.rd_select.addEventHandler("onitemchanged",this.rd_select_onitemchanged,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
        };
        this.loadIncludeScript("HR501P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
