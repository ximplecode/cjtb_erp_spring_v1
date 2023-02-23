(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmBookcode");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,585);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_book_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Grid("grd_list","16","140","470","400",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_book_list");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"280\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"년판\"/><Cell col=\"2\" text=\"도서명\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:YY\"/><Cell col=\"2\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_yy","306","66","65","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","227","66","77","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("년판");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","16","100","77","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("코드명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_bookname","95","100","276","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","380","66","107","64",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","22","20","248","41",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("도서코드 리스트");
            obj.set_color("#7fb39d");
            obj.set_font("bold 25px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search_all","356","28","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("전체목록");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","426","28","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_bookcode","95","66","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@@@@@@@");
            obj.set_type("string");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,585,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("frmBookcode.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("frmBookcode.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("frmBookcode.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        this.fnInit = function()
        {
        	this.ed_bookcode.set_value("");
        	this.ed_yy.set_value("");
        	this.ed_bookname.set_value("");
        }

        this.fnNullChk = function(val)
        {
        	if(new String(val).valueOf() == "undefined")
        		return true;
        	if(val == null)
        		return true;
        	if(val.length == 0)
        		return true;
        	return false;
        }

        this.frmBookcode_onload = function(obj,e)
        {
        	this.fnInit();
        	if (!this.fnNullChk(this.parent.setting))
        	{
        		this.ed_bookcode.set_value(this.parent.setting);
        		this.btn_search.click();
        	}
        	this.ed_bookcode.setFocus();
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close("0");
        };

        this.btn_search_onclick = function(obj,e)
        {
        	var strUrl = "JSP/sd/select_books.jsp";
        	var strArg ;
        	var code, yyear, bookname;
        	var old_code = "";
        	var strDs 	= "ds_book_list=ds_book_list";

        	if (this.ed_bookcode.value == "")
        		code = "null";
        	else
        		code = this.ed_bookcode.value;

        	if (this.ed_yy.value == "")
        		yyear = "null";
        	else
        		yyear = this.ed_yy.value;

        	if (this.ed_bookname.value == "")
        		bookname = "null";
        	else
        		bookname = this.ed_bookname.value;

        	if (obj.name == "btn_search_all")
        		strArg = "Codes="+nexacro.wrapQuote(null)+" old_Code="+nexacro.wrapQuote(null)+
        				 " yy="+nexacro.wrapQuote(null)+" Names="+nexacro.wrapQuote(null);
        	else
        		strArg = "Codes="+nexacro.wrapQuote(code)+" old_Code="+nexacro.wrapQuote(old_code)+
        				 " yy="+nexacro.wrapQuote(yyear)+" Names="+nexacro.wrapQuote(bookname);
        	this.setWaitCursor(true);
        	this.gfn_TransactionP("select_custcode", strUrl, strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        };

        this.fnCallback = function(svcid,errCode,errMsg)
        {
        	this.setWaitCursor(false);
        	if(errCode != 0)
        	{
        		alert(errMsg);
        		return;
        	}
        	if(svcid == "select_custcode")
        		this.grd_list.setFocus();
        }

        this.grd_list_oncelldblclick = function(obj,e)
        {
        	this.fnCodeReturn();
        };
        this.grd_list_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        		this.fnCodeReturn();
        };

        this.fnCodeReturn = function()
        {
        	var bookcode;
        	bookcode = this.ds_book_list.getColumn(this.ds_book_list.rowposition,"CODE") + this.ds_book_list.getColumn(this.ds_book_list.rowposition,"YY")
        	         + nexacro.trim(this.ds_book_list.getColumn(this.ds_book_list.rowposition,"NAME"));
        	this.close(bookcode);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmBookcode_onload,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.ed_yy.addEventHandler("onkeydown",this.ed_code_onkeydown,this);
            this.ed_bookname.addEventHandler("onkeydown",this.ed_code_onkeydown,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_search_all.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.ed_bookcode.addEventHandler("onkeydown",this.ed_code_onkeydown,this);
        };
        this.loadIncludeScript("frmBookcode.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
