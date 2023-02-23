(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD6200P");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(384,130);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MCODE\" type=\"STRING\" size=\"256\"/><Column id=\"MCODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DCODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SCODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"KCODE\" type=\"STRING\" size=\"256\"/><Column id=\"KCODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HCODE\" type=\"STRING\" size=\"256\"/><Column id=\"HCODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TCODENM\" type=\"STRING\" size=\"256\"/><Column id=\"SYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","5","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("속성코드 출력");
            obj.set_color("#7fb39d");
            obj.set_font("bold 24px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"10","45","22","12",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_font("8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_06","12","53","297","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("리스트 검색");
            obj.set_background("#3cbcb8");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","12","81","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("코드구간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","107","81","202","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","199","87","14","18",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_scode","114","86","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_format("#########");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_ecode","221","86","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("#########");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print","Static00_01_00:8","85","55","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("출력");
            obj.set_font("bold 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_printview","Static01_06:8","57","55","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("미리보기");
            obj.set_font("bold 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_view","0","120",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_visible("false");
            obj.set_binddataset("ds_data");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"84\"/><Column size=\"84\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"280\"/><Column size=\"64\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"속성코드\"/><Cell col=\"1\" text=\"사업부\"/><Cell col=\"2\" text=\"판매형태\"/><Cell col=\"3\" text=\"학교등급\"/><Cell col=\"4\" text=\"학기\"/><Cell col=\"5\" text=\"속성코드명\"/><Cell col=\"6\" text=\"출판년도\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:MCODE_NM\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:DCODE_NM\"/><Cell col=\"3\" text=\"bind:JCODE\" expr=\"JCODE==1?&apos;유치&apos;:JCODE==2?&apos;초등&apos;:JCODE==3?&apos;중등&apos;:JCODE==4?&apos;고등&apos;:&quot;&quot;\"/><Cell col=\"4\" text=\"bind:HCODE_NM\"/><Cell col=\"5\" text=\"bind:TCODENM\"/><Cell col=\"6\" text=\"bind:SYY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",384,130,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD6200P.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD6200P.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD6200P.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btn_printview_onclick = function(obj,e)
        {
        	if ( ((this.ed_scode.value).length < 9) || ((this.ed_ecode.value).length < 9) )
        	{
        	    alert("도서코드 구간을 정확하게 입력하여주세요!");
        	    return;
        	}

        	if(this.grd_view.visible == false)
        	{
        		if(system.navigatorname == 'nexacro')
        		{
        			this.getOwnerFrame().set_width(780);
        			this.getOwnerFrame().set_height(600);
        		}
        		else
        			window.resizeTo(805,650);
        		this.grd_view.set_visible(true);
        		this.btn_printview.set_text("미리보기 닫기");
        		this.btn_printview.set_width(80);
        		this.fnPreview();
        	}
        	else
        	{
        		this.grd_view.set_visible(false);
        		this.btn_printview.set_text("미리보기");
        		this.btn_printview.set_width(55);
        		if(system.navigatorname == 'nexacro')
        		{
        			this.getOwnerFrame().set_width(390);
        			this.getOwnerFrame().set_height(150);
        		}
        		else
        			window.resizeTo(410,190);
        	}
        };

        this.fnPreview = function()
        {
        	var strUrl = "JSP/sd/SD6200P_SELECT.jsp";
        	var strDs = "ds_data=ds_data";
        	var strArg = " scode="+nexacro.wrapQuote(nexacro.trim(this.ed_scode.value))+
        				 " ecode="+nexacro.wrapQuote(nexacro.trim(this.ed_ecode.value));
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
        	if ( ((this.ed_scode.value).length < 9) || ((this.ed_ecode.value).length < 9) )
        	{
        	    alert("도서코드 구간을 정확하게 입력하여주세요!");
        	    return;
        	}

        	var rdUrl = gv_urlMrd+"/sd/sd6200r.mrd";
        	var rdParam  = "/rp ["+this.ed_scode.value+"]"+
        					   "["+this.ed_ecode.value+"]";

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

        this.SD6200P_onload = function(obj,e)
        {
        	this.ed_scode.set_value("000000000");
        	this.ed_ecode.set_value("999999999");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD6200P_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.Static00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.ed_scode.addEventHandler("onkillfocus",this.ed_jukyocd_onkillfocus,this);
            this.ed_scode.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_ecode.addEventHandler("onkillfocus",this.ed_jukyocd_onkillfocus,this);
            this.ed_ecode.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
            this.btn_print.addEventHandler("onkeydown",this.btn_print_onkeydown,this);
            this.btn_printview.addEventHandler("onclick",this.btn_printview_onclick,this);
        };
        this.loadIncludeScript("SD6200P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
