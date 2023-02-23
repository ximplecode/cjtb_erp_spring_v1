(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SW101F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(530,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DS_SW101_1", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR_MONTH\" type=\"STRING\" size=\"6\"/><Column id=\"COST\" type=\"STRING\" size=\"7\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close","450","88","60","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_font("14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","18","126","492","564",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("DS_SW101_1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"96\"/><Column size=\"104\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"년월\" background=\"#f0f0f0\" color=\"black\"/><Cell col=\"1\" text=\"사우회비\" background=\"#f0f0f0\" color=\"black\"/></Band><Band id=\"body\"><Cell maskeditformat=\"####-##\" maskedittype=\"string\" text=\"bind:YEAR_MONTH\" displaytype=\"mask\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:COST\" displaytype=\"currency\" textAlign=\"center\" maskedittype=\"number\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" text=\"expr:&apos;총 &apos; +  dataset.getRowCount() + &apos;회 납부&apos;\"/><Cell col=\"1\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(COST)&quot;)\" displaytype=\"currency\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","68","10","372","65",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("사우회비 납부 현황");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",530,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SW101F.xfdl","Lib::Lib_service.xjs");
        this.registerScript("SW101F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;

        this.SW101F_onload = function(obj,e)
        {
        	var strUrl = "JSP/sw/SQL_SW100_05S.jsp";
        	var inDs = "DS_SW101_1=DS_SW101_1";
        	var outDs = "DS_SW101_1=DS_SW101_1";
        	var strArg = "strSabun=" + nexacro.wrapQuote(nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN"));

        	this.gfn_TransactionP("get_history", strUrl, inDs, outDs, strArg, "Callback_get_history", true, "P", false, this);
        };

        this.Callback_get_history = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        		this.alert(sErrorMsg);
        }
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SW101F_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("SW101F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
