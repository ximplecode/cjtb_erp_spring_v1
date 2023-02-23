(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR_PRT_L");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"20","50","28","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","68","10","312","65",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("HR_PRT_L.xfdl", function() {
        var urlMrdHtml = nexacro.getApplication().gv_urlMrdHtml;
        var urlMrdService = nexacro.getApplication().gv_urlMrdService;

        this.HR_PRT_L_onload = function(obj,e)
        {
        	if(this.opener.name == "SW102F" || this.opener.name == "SW200F")
        	{
        		this.Static02.set_visible(true);
        		this.WebBrowser00.set_top(80);
        		this.btn_close.set_top(90);
        		if(this.opener.name == "SW102F")
        			this.Static02.set_text("사우회 조직도");
        		else
        			this.Static02.set_text("사우회 규정");
        	}
        	else
        	{
        		this.Static02.set_visible(false);
        	}
        	this.WebBrowser00.set_url(urlMrdHtml);
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.WebBrowser00_onloadcompleted = function(obj,e)
        {
        	var urlMrdDoc = this.parent.rdfile;
        	var param = this.parent.rdopt;

        	var sUrl = urlMrdService;
        	var sId = "crownix-viewer";
        	this.WebBrowser00.callMethod("_crownix_createViewer", sUrl, sId, urlMrdDoc, param);
        };

        this.HR_PRT_L_onclose = function(obj,e)
        {
        	if(this.opener.name == "SW102F" || this.opener.name == "SW200F"){
        		if(this.opener.parent.parent != null && this.opener.parent.parent.name == "WorkDetail")
        		{
        			var nRow = this.opener.parent.parent.ds_selectMenu.findRow("selectMenu_Div_id",this.opener.parent.name);
        			var bClose_id = this.opener.parent.parent.ds_selectMenu.getColumn(nRow,"selectButton_Div_id");
        			this.opener.parent.parent.div_selectMenu.form.all[bClose_id].form.CloseButton.click();
        		}
        		else
        			return;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.HR_PRT_L_onload,this);
            this.addEventHandler("onclose",this.HR_PRT_L_onclose,this);
            this.WebBrowser00.addEventHandler("onloadcompleted",this.WebBrowser00_onloadcompleted,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("HR_PRT_L.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
