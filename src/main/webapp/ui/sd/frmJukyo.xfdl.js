(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmJukyo");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(590,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsJukyo", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","16","105","560","430",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsJukyo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"적요명\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_code","95","66","45","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("###");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","16","66","77","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("코드");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","146","66","77","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("상호");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_name","225","66","218","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","447","69","57","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","22","20","248","41",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("적요코드 리스트");
            obj.set_color("#7fb39d");
            obj.set_font("bold 25px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search_all","446","28","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("전체목록");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","516","28","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",590,550,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("frmJukyo.xfdl","Lib::Lib_service.xjs");
        this.registerScript("frmJukyo.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;

        this.frmJukyo_onload = function(obj,e)
        {
        	this.ed_name.setFocus();
        };

        this.btn_search_onclick = function(obj,e)
        {
        	var strArg;
        	var strDs 	= "dsJukyo=dsJukyo";
        	var code    = this.fnNullChk(this.ed_code.value);
        	var nameis  = this.fnNullChk(this.ed_name.value);

        	if (obj.name =="btn_search_all") strArg = "values1=NULL values2=NULL";
        	else strArg = "values1="+nexacro.wrapQuote(code)+" values2="+nexacro.wrapQuote(nameis);
        	this.gfn_TransactionP("select","JSP/sd/select_jukyo.jsp", strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        };

        this.fnNullChk = function(value)
        {
        	var str_ret = value;
        	if(value == null)
        		str_ret = "NULL";
        	return str_ret;
        }

        this.grd_list_oncelldblclick = function(obj,e)
        {
        	var code, name;
        	code  = this.dsJukyo.getColumn(this.dsJukyo.rowposition,"CODE");
        	name  = this.dsJukyo.getColumn(this.dsJukyo.rowposition,"NAME");
        	this.close(code+"/"+name);
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmJukyo_onload,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.ed_code.addEventHandler("onkeydown",this.ed_code_onkeydown,this);
            this.ed_name.addEventHandler("onkeydown",this.ed_code_onkeydown,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_search_all.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("frmJukyo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
