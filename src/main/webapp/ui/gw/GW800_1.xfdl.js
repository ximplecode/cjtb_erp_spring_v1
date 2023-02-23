(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GW800_1");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(610,100);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCPostMst", this);
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POST_MST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"POST_MST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"POST_MST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DELETEDATETIME\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_GUBUN_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","5","5","600","90",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ededed");
            obj.set_border("1px solid #dddddd");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_begin_date","110","24","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_end_date","310","24","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_payeename","110","60","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","474","24","50","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","534","24","50","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","40","24","58","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("일자구간");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","40","60","58","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("수취인");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","260","24","40","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",610,100,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("GW800_1.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("GW800_1.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("GW800_1.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        this.GW800_1_onload = function(obj,e)
        {
        	var objDate1 = new nexacro.Date();
        	var endDate = Eco.date.getMaskFormatString(objDate1, "yyyyMMdd");
        	objDate1.addDate(-30);
        	var beginDate = Eco.date.getMaskFormatString(objDate1, "yyyyMMdd");

        	this.cald_begin_date.set_value(beginDate);
        	this.cald_end_date.set_value(endDate);
        	this.cald_begin_date.setFocus();
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close("cancel");
        };

        this.btn_search_onclick = function(obj,e)
        {
        	if(this.cald_begin_date.text == null || this.cald_end_date.text == null)
        	{
        		alert("날짜구간을 확인하세요");
        		return;
        	}
        	this.dsCPostMst.clearData();
        	var strUrl = "JSP/gw/SQL_GW800_SELECT.jsp";
        	var strDs = "dsCPostMst=dsCPostMst";
        	var strArg = " start="+ nexacro.wrapQuote(' start');
        	strArg += " prepareCall="+ nexacro.wrapQuote(' ITOP.PKG_COMMON_NEWPOST.PROC_MST_SELECT');
        	strArg += " SABUN =" + nexacro.wrapQuote(this.parent.gv_sabun);
        	strArg += " BEGIN_DATE =" + nexacro.wrapQuote(this.cald_begin_date.value);
        	strArg += " END_DATE =" + nexacro.wrapQuote(this.cald_end_date.value);
        	strArg += " PAYEE_NAME =" + nexacro.wrapQuote(this.edt_payeename.value);

        	this.gfn_TransactionP("SelectIsMstSearch", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);

        };

        this.fnCallback = function(trid, ErrorCode, Error)
        {
        	if(ErrorCode == -1 )
        		alert(Error + "\r\n이 화면을 캡쳐한 후 전산실로 문의하세요");


        	if(this.dsCPostMst.rowcount == 0)
        		alert("조회된 자료가 없습니다");
        	else
        	{
        		this.opener.dsPostMst.copyData(this.dsCPostMst);
        		this.opener.dsPostDst.clearData();
        		this.opener.dsBookList.clearData();
        		this.close();
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GW800_1_onload,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("GW800_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
