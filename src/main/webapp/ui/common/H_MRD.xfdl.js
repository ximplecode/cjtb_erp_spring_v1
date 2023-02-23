(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("H_MRD");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("H_MRD.xfdl", function() {
        var urlMrdHtml = nexacro.getApplication().gv_urlMrdHtml;
        var urlMrdService = nexacro.getApplication().gv_urlMrdService;

        this.H_MRD_onload = function(obj,e)
        {
        	this.WebBrowser00.set_url(urlMrdHtml);
        };

        this.WebBrowser00_onloadcompleted = function(obj,e)
        {
        	var rdUrl = this.parent.rdUrl;
        	var rdParam = this.parent.rdParam;

        	var sUrl = urlMrdService;
        	var sId = "crownix-viewer";
        	trace(rdUrl);
        	trace(rdParam);
        	this.WebBrowser00.callMethod("_crownix_createViewer", sUrl, sId, rdUrl, rdParam);
        };

        this.Button00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.H_MRD_onload,this);
            this.WebBrowser00.addEventHandler("onloadcompleted",this.WebBrowser00_onloadcompleted,this);
        };
        this.loadIncludeScript("H_MRD.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
