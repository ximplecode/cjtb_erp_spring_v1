(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MKRDF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1500,850);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00",null,"0","100.00%","100.00%","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose",null,null,"31","30","1.27%","95.18%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_image("url(\'Img::icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1500,850,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SDRDF.xfdl", function() {

        var urlMrdHtml = nexacro.getApplication().gv_urlMrdHtml;
        var urlMrdService = nexacro.getApplication().gv_urlMrdService;

        this.MKRDF_onload = function(obj,e)
        {
        	this.WebBrowser00.set_url(urlMrdHtml);
        };
        this.WebBrowser00_onloadcompleted = function(obj,e)
        {
        	var rdUrl = this.parent.rdUrl;
        	var rdParam = this.parent.rdParam;

        	trace(rdUrl);
        	trace(rdParam);

        	var sUrl = urlMrdService;
        	var sId = "crownix-viewer";

        	this.WebBrowser00.callMethod("_crownix_createViewer", sUrl, sId, rdUrl, rdParam);
        };

        this.ImgClose_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MKRDF_onload,this);
            this.WebBrowser00.addEventHandler("onloadcompleted",this.WebBrowser00_onloadcompleted,this);
            this.ImgClose.addEventHandler("onclick",this.ImgClose_onclick,this);
        };
        this.loadIncludeScript("SDRDF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
