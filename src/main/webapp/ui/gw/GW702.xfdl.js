(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GW702");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(660,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_flow", this);
            obj._setContents("<ColumnInfo><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"F_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"F_FNUM\" type=\"STRING\" size=\"256\"/><Column id=\"F_XML\" type=\"STRING\" size=\"256\"/><Column id=\"F_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","8","18","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신청일자");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","339","18","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("문서번호");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","8","50","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("제목");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title","89","50","501","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_sDate","90","18","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_eDate","212","18","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_coSeq","421","18","169","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"33","40","38","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #3cbcb8");
            obj.set_defaultbutton("true");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","88","640","262",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_flow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"110\"/><Column size=\"250\"/><Column size=\"110\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"작성일자\"/><Cell col=\"1\" text=\"문서번호\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"문서유형\"/><Cell col=\"4\" text=\"작성자\"/></Band><Band id=\"body\"><Cell text=\"bind:F_DATE\"/><Cell col=\"1\" text=\"bind:CO_SEQ\"/><Cell col=\"2\" text=\"bind:TITLE\"/><Cell col=\"3\" text=\"bind:F_NAME\"/><Cell col=\"4\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","285","360",null,"29","305",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",660,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("GW702.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("GW702.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("GW702.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");

        this.GW702_onload = function(obj,e)
        {
        	var d = new Date();
        	var today = Eco.date.getMaskFormatString(d, "yyyyMMdd");

        	this.cal_sDate.set_value(today.substr(0,6) + "01");
        	this.cal_eDate.set_value(today);
        };

        //조회
        this.btn_search_onclick = function(obj,e)
        {
        	var strUrl = "JSP/gw/GW700_i_flow_header.jsp";
        	var inds = "ds_flow=ds_flow";
        	var outds = "ds_flow=ds_flow";
        	var strArg ="gb=''" +
        				" sabun="+ nexacro.wrapQuote(gv_sabun) +
        				" bymd="+ nexacro.wrapQuote(this.cal_sDate.value) +
        				" eymd="+ nexacro.wrapQuote(this.cal_eDate.value) +
        				" title="+ nexacro.wrapQuote(this.edt_title.text) +
        				" co_seq="+ nexacro.wrapQuote(this.edt_coSeq.value);

        	this.gfn_TransactionP("select", strUrl, inds, outds, strArg, "", false, "P", false, this);
        };

        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var nRow = this.opener.ds_i_flow_seal_s.rowposition;

        	this.opener.ds_i_flow_seal_s.setColumn(nRow, "I_FLOW_ID", this.ds_flow.getColumn(e.row, "I_FLOW_ID"));
        	this.opener.ds_i_flow_seal_s.setColumn(nRow, "CO_SEQ", this.ds_flow.getColumn(e.row, "CO_SEQ"));
        	this.opener.ds_i_flow_seal_s.setColumn(nRow, "FS_TITLE", this.ds_flow.getColumn(e.row, "TITLE"));
        	this.opener.ds_i_flow_seal_s.setColumn(nRow, "F_TYPE", this.ds_flow.getColumn(e.row, "F_TYPE"));
        	this.close();
        };

        //닫기
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GW702_onload,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("GW702.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
