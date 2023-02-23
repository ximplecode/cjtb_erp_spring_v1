(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("INFO_SECURITY_SIGN");
            this.set_titletext("INFO_SECURITY_SIGN");
            if (Form == this.constructor)
            {
                this._setFormPosition(790,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00","5","55","780","700",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","385","WebBrowser00:7","400","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("위 사항을 충분히 인지하고 준수할 것을 서약합니다");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_color("red");
            obj.set_background("#d5ebd7");
            obj.set_letterSpacing("1px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","316","43",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("정보보호 서약서");
            obj.set_color("#7fb39d");
            obj.set_font("bold 32px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",790,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("INFO_SECURITY_SIGN.xfdl","Lib::Lib_service.xjs");
        this.registerScript("INFO_SECURITY_SIGN.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");

        gv_sabun = 'C99999';

        this.INFO_SECURITY_SIGN_onload = function(obj,e)
        {

        	this.WebBrowser00.set_url(gv_urlMrd+"/gw/2018.jpg");
        	this.WebBrowser00.show();
        };

        this.btn_save_onclick = function(obj,e)
        {
        	var strUrl, strArg;

        	strUrl = "JSP/gw/SQL_INFO_SECURITY_SIGN_DML.jsp";
        	strArg = "sabun="+nexacro.wrapQuote(gv_sabun);

        	this.gfn_TransactionP("dml", strUrl, "", "", strArg, "fnCallbackDml", false, "P", false, this);
        };

        this.fnCallbackDml = function(Trid,ErrorCode,ErrorMsg)
        {
            if (ErrorCode != 0)
            {
               alert(ErrorMsg);
               return;
            }

            alert("정보보호 서약서 서명되었습니다.");
            this.close();
            return;
        }
        this.WebBrowser00_onloadcompleted = function(obj,e)
        {
        	alert("하단 부분 '위 사항을 충분히 인지하고 준수할 것을 서약합니다' 버튼을 클릭 하시여 서명을 진행하여 주시기 바랍니다.");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.INFO_SECURITY_SIGN_onload,this);
            this.WebBrowser00.addEventHandler("onloadcompleted",this.WebBrowser00_onloadcompleted,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("INFO_SECURITY_SIGN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
