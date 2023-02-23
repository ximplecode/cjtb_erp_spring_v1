(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD6280P");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(434,160);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JONG\" type=\"STRING\" size=\"256\"/><Column id=\"BYUL\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYY\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","5","310","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("반품규제(시리즈)도서 출력");
            obj.set_color("#7fb39d");
            obj.set_font("bold 24px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"10","45","22","12",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_font("8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_06","12","53","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("리스트 검색");
            obj.set_background("#3cbcb8");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print","Static01_06:13","85","55","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("출력");
            obj.set_font("bold 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_printview","Static01_06:13","57","55","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("미리보기");
            obj.set_font("bold 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_view","0","150",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            obj.set_binddataset("ds_data");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"시리즈코드\"/><Cell col=\"1\" text=\"시리즈명\"/><Cell col=\"2\" text=\"종수\"/><Cell col=\"3\" text=\"반품율\"/><Cell col=\"4\" text=\"도서코드\"/><Cell col=\"5\" text=\"년판\"/><Cell col=\"6\" text=\"도서명\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:BOOK_NM\"/><Cell col=\"2\" text=\"bind:JONG\"/><Cell col=\"3\" text=\"bind:BYUL\"/><Cell col=\"4\" text=\"bind:BOOK_CD\"/><Cell col=\"5\" text=\"bind:BYY\"/><Cell col=\"6\" text=\"bind:BOOK_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","12","81","202","58",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","12","81","202","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("도서코드구간");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","104","115","14","18",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values1","19","114","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_format("@@@@@@@@@@");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values2","126","114","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@@@@@@@");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","212","81","142","58",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","212","81","142","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("도서년판");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","274","115","14","18",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values3","219","114","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_format("####");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values4","296","114","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",434,160,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD6280P.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD6280P.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD6280P.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btn_printview_onclick = function(obj,e)
        {
        	if(this.grd_view.visible == false)
        	{
        		if(system.navigatorname == 'nexacro')
        		{
        			this.getOwnerFrame().set_width(860);
        			this.getOwnerFrame().set_height(800);
        		}
        		else
        			window.resizeTo(900,840);
        		this.grd_view.set_visible(true);
        		this.btn_printview.set_text("미리보기 닫기");
        		this.btn_printview.set_width(80);
        		this.fnPreview();
        	}
        	else
        	{
        		this.grd_view.set_visible(false);
        		this.ds_data.clearData();
        		this.btn_printview.set_text("미리보기");
        		this.btn_printview.set_width(55);
        		if(system.navigatorname == 'nexacro')
        		{
        			this.getOwnerFrame().set_width(445);
        			this.getOwnerFrame().set_height(170);
        		}
        		else
        			window.resizeTo(485,210);
        	}
        };

        this.fnPreview = function()
        {
        	var strUrl = "JSP/sd/SD6280P_SELECT.jsp";
        	var strDs = "ds_data=ds_data";
        	var strArg = " Values1="+nexacro.wrapQuote(nexacro.trim(this.ed_values1.value))+
        				 " Values2="+nexacro.wrapQuote(nexacro.trim(this.ed_values2.value))+
        				 " Values3="+nexacro.wrapQuote(nexacro.trim(this.ed_values3.value))+
        				 " Values4="+nexacro.wrapQuote(nexacro.trim(this.ed_values4.value));
        	this.gfn_TransactionP("search", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        }

        this.fnCallback = function(strSvcID, nErrorCode, strErrorMag)
        {
        	if(nErrorCode != 0)
        	{
        		alert(strErrorMag);
        		return;
        	}
        }

        this.btn_print_onclick = function(obj,e)
        {
        	var rdUrl = gv_urlMrd+"/sd/sd6280r.mrd";
        	var rdParam  = "/rp ["+this.ed_values1.value+"]"+
        					   "["+this.ed_values2.value+"]"+
        					   "["+this.ed_values3.value+"]"+
        					   "["+this.ed_values4.value+"]";

        	var rect;
        	if(system.navigatorname = 'nexacro')
        	{
        		if(system.monitorcount > 1)
        		{
        			var monitor_index = system.getMonitorIndex(system.clientToScreenX(this,0), system.clientToScreenY(this,0));
        			rect = system.getScreenRect(monitor_index);
        		}
        		else
        			rect = system.getScreenRect(1);
        	}
        	else
        		rect = system.getScreenRect(1);

        	var objParam = {rdUrl:rdUrl, rdParam:rdParam};
        	var sOpenStyle = "topmost=true autosize=false dragmovetype=all titletext=조회화면 showtitlebar=true showstatusbar=false resizable=true";

        	nexacro.open("search", "sd::SDRDF.xfdl", this.getOwnerFrame(), objParam, sOpenStyle, rect.left, rect.top, rect.width, rect.height, this);
        };

        this.SD6280P_onload = function(obj,e)
        {
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyy");
        	this.ed_values1.set_value("0000000000");
        	this.ed_values2.set_value("9999999999");
        	this.ed_values3.set_value(f_date);
        	this.ed_values4.set_value(f_date);
        	this.ed_values1.setFocus();
        };

        this.common_onkeydown = function(obj,e)
        {
        	//Enter Key를 눌렀을 경우 처리
        	if (e.keycode == 13)
        	{
        		if (obj.name == "ed_values1") this.ed_values2.setFocus();
        		else if (obj.name == "ed_values2") this.ed_values3.setFocus();
        		else if (obj.name == "ed_values3") this.ed_values4.setFocus();
        	}//ESC 키처리
        	else if (e.keycode == 27)
        	{
        		if (obj.name == "ed_values2") this.ed_values1.setFocus();
        		else if (obj.name == "ed_values3") this.ed_values2.setFocus();
        		else if (obj.name == "ed_values4") this.ed_values3.setFocus();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD6280P_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
            this.btn_print.addEventHandler("onkeydown",this.btn_print_onkeydown,this);
            this.btn_printview.addEventHandler("onclick",this.btn_printview_onclick,this);
            this.ed_values1.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values2.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values3.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values4.addEventHandler("onkeydown",this.common_onkeydown,this);
        };
        this.loadIncludeScript("SD6280P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
