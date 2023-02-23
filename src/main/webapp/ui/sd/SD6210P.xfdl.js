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
                this._setFormPosition(384,205);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BG_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"BH_YUL\" type=\"STRING\" size=\"256\"/><Column id=\"D_CD\" type=\"STRING\" size=\"256\"/><Column id=\"D_NM\" type=\"STRING\" size=\"256\"/><Column id=\"J_CD\" type=\"STRING\" size=\"256\"/><Column id=\"J_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rpt", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">대분류코드별</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">중분류코드별</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","5","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("시리즈 현황출력");
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

            obj = new MaskEdit("ed_values1","114","86","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("string");
            obj.set_format("@@@@@");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values2","221","86","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@@");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print","Static00_01_00:8","168","55","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("출력");
            obj.set_font("8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_printview","Static01_06:8","140","55","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("미리보기");
            obj.set_font("8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_view","0","195",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_visible("false");
            obj.set_binddataset("ds_data");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"250\"/><Column size=\"36\"/><Column size=\"100\"/><Column size=\"36\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"시리즈명\"/><Cell col=\"2\" colspan=\"2\" text=\"대분류\"/><Cell col=\"4\" colspan=\"2\" text=\"중분류\"/><Cell col=\"6\" text=\"반품구분\"/><Cell col=\"7\" text=\"반품기한\"/><Cell col=\"8\" text=\"반품한도\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:D_CD\"/><Cell col=\"3\" text=\"bind:D_NM\"/><Cell col=\"4\" text=\"bind:J_CD\"/><Cell col=\"5\" text=\"bind:J_NM\"/><Cell col=\"6\" text=\"bind:BP_YN\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:BG_YMD\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"mask\" textAlign=\"center\" maskeditformat=\"####-##-##\" maskedittype=\"string\" maskeditmaskchar=\" \"/><Cell col=\"8\" text=\"bind:BH_YUL\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","12","109","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("대분류");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","107","109","202","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","199","115","14","18",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values3","114","114","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("string");
            obj.set_format("@");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values4","221","114","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","12","137","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("중분류");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_01","107","137","202","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","199","143","14","18",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values5","114","142","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("string");
            obj.set_format("@");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values6","221","142","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_02","12","165","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("출력물");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_02","107","165","202","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("print_select","114","170","187","20",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_rpt");
            obj.set_datacolumn("DATA");
            obj.set_codecolumn("CODE");
            obj.set_value("5");
            obj.set_index("5");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",384,205,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD6210P.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD6210P.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD6210P.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;


        this.SD6200P_onload = function(obj,e)
        {
        	this.print_select.set_index(0);
        	this.ed_values1.setFocus();
        	this.ed_values1.set_value("");
        	this.ed_values2.set_value("");
        	this.ed_values3.set_value("0");
        	this.ed_values4.set_value("9");
        	this.ed_values5.set_value("0");
        	this.ed_values6.set_value("9");
        };

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
        		this.ds_data.clearData();
        		this.btn_printview.set_text("미리보기");
        		this.btn_printview.set_width(55);
        		if(system.navigatorname == 'nexacro')
        		{
        			this.getOwnerFrame().set_width(390);
        			this.getOwnerFrame().set_height(215);
        		}
        		else
        			window.resizeTo(410,260);
        	}
        };

        this.fnPreview = function()
        {
        	var orderby;
        	if (this.print_select.index == 0)
        		orderby = " ORDER BY A.CODE ";
        	else
        		orderby = " ORDER BY C.CODE,A.CODE ";

        	var strUrl = "JSP/sd/SD6210P_SELECT.jsp";
        	var strDs = "ds_data=ds_data";
        	var strArg = " Values1="+nexacro.wrapQuote(nexacro.trim(this.ed_values1.value))+
        			 	 " Values2="+nexacro.wrapQuote(nexacro.trim(this.ed_values2.value))+
        				 " Values3="+nexacro.wrapQuote(nexacro.trim(this.ed_values3.value))+
        				 " Values4="+nexacro.wrapQuote(nexacro.trim(this.ed_values4.value))+
        				 " Values5="+nexacro.wrapQuote(nexacro.trim(this.ed_values5.value))+
        				 " Values6="+nexacro.wrapQuote(nexacro.trim(this.ed_values6.value))+
        				 " Orderby="+nexacro.wrapQuote(orderby);
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
        	var orderby;
        	if (this.print_select.index == 0)
        		orderby = " ORDER BY A.CODE ";
        	else
        		orderby = " ORDER BY C.CODE,A.CODE ";

        	var rdUrl = gv_urlMrd+"/sd/sd6210r.mrd";
        	var rdopt  = "/rp ["+this.ed_values1.value +"]"+
                     "["+this.ed_values2.value+"]"+
                     "["+this.ed_values3.value+"]"+
                     "["+this.ed_values4.value+"]"+
                     "["+this.ed_values5.value+"]"+
                     "["+this.ed_values6.value+"]"+
                     "["+orderby+"]";

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

        	var objParam = {rdUrl:rdUrl, rdParam:rdopt};
        	var sOpenStyle = "topmost=true autosize=false dragmovetype=all titletext=조회화면 showtitlebar=true showstatusbar=false resizable=true";

        	nexacro.open("search", "sd::SDRDF.xfdl", this.getOwnerFrame(), objParam, sOpenStyle, rect.left, rect.top, rect.width, rect.height, this);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD6200P_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.Static00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.ed_values1.addEventHandler("onkillfocus",this.ed_jukyocd_onkillfocus,this);
            this.ed_values1.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values2.addEventHandler("onkillfocus",this.ed_jukyocd_onkillfocus,this);
            this.ed_values2.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
            this.btn_print.addEventHandler("onkeydown",this.btn_print_onkeydown,this);
            this.btn_printview.addEventHandler("onclick",this.btn_printview_onclick,this);
            this.Static00_01_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.ed_values3.addEventHandler("onkillfocus",this.ed_jukyocd_onkillfocus,this);
            this.ed_values3.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values4.addEventHandler("onkillfocus",this.ed_jukyocd_onkillfocus,this);
            this.ed_values4.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.Static00_01_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.ed_values5.addEventHandler("onkillfocus",this.ed_jukyocd_onkillfocus,this);
            this.ed_values5.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values6.addEventHandler("onkillfocus",this.ed_jukyocd_onkillfocus,this);
            this.ed_values6.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.print_select.addEventHandler("onkeydown",this.common_onkeydown,this);
        };
        this.loadIncludeScript("SD6210P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
