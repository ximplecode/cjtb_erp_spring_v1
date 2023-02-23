(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SaleUser");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_puser", this);
            obj._setContents("<ColumnInfo><Column id=\"bsnm\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","16","66","77","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("코드");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","16","140","421","400",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_puser");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"부서이름\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"이름\"/></Band><Band id=\"body\"><Cell text=\"bind:bsnm\"/><Cell col=\"1\" text=\"bind:code\"/><Cell col=\"2\" text=\"bind:name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_code","95","66","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("######");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","16","100","77","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("직원명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_name","95","100","231","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","330","66","107","64",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","22","20","208","41",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("직원코드 리스트");
            obj.set_color("#7fb39d");
            obj.set_font("bold 25px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search_all","309","29","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("전체목록");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","376","29","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",450,550,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("frmSaleUser.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("frmSaleUser.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("frmSaleUser.xfdl","Lib::Lib_sd.xjs");
        this.registerScript("frmSaleUser.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_sd.xjs"); /*include "Lib::Lib_sd.xjs"*/;

        this.btn_close_onclick = function(obj,e)
        {
        	this.close(null);
        };

        this.fnCallback = function(svcId, ErrorCode, ErrorMsg)
        {
        	if(svcId == "select_saleuser"){
        		this.grd_list.setFocus();
        	}
        }

        this.ed_code_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13)
        		this.btn_search_onclick(obj);
        };

        this.btn_search_onclick = function(obj,e)
        {
        	var strArg;
        	var code, name
        	var inds 	= "ds_puser=ds_puser";
        	var outds 	= "ds_puser=ds_puser";

        	if( this.ed_code.text == "______" ) code = "null";
        	else code = this.ed_code.text;

        	name = this.ed_name.text;

        	if (obj.id =="btn_search_all") strArg = "values1="+nexacro.wrapQuote("null")+
        											" values2="+nexacro.wrapQuote("null");
        	else strArg = "values1="+nexacro.wrapQuote(code)+
        	              "values2="+nexacro.wrapQuote(name);

        	trace(strArg);
        	this.gfn_TransactionP("select_saleuser","JSP/sd/select_saleuser.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        };

        this.grd_list_oncelldblclick = function(obj,e)
        {

        	/*
        	리턴값을 close()에 담아서 전달
        	예) this.popupCallBack = function(sFormId, sArg) -> sArg 로 리턴
        	*/
        	if( this.ds_puser.getColumn(this.ds_puser.rowposition, "code").length == 6 )
        		this.close(this.ds_puser.getColumn(this.ds_puser.rowposition, "code")
        					+ ":" + this.ds_puser.getColumn(this.ds_puser.rowposition, "name"));
        	else
        		this.close(null);
        };

        this.SDBook_SearchF_onload = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.ed_code.addEventHandler("onkeydown",this.ed_code_onkeydown,this);
            this.ed_name.addEventHandler("onkeydown",this.ed_code_onkeydown,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_search_all.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("frmSaleUser.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
