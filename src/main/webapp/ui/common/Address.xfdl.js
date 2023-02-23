(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Address");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00","5","10","485","534",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,550,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Address.xfdl", function() {

        this.Address_onload = function(obj,e)
        {
            var strPostUrl = "https://cj-erp.chunjae.co.kr/erp-next/JSP/common/getdata_address.jsp";
            this.WebBrowser00.set_url(strPostUrl);
        };

        this.WebBrowser00_onusernotify = function(obj,e)
        {
        	var addData = e.userdata.split(":");

            if(addData[0] != "about" && addData[0] != "https" && addData.length > 2)
            {
        		this.close(e.userdata);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Address_onload,this);
            this.WebBrowser00.addEventHandler("onusernotify",this.WebBrowser00_onusernotify,this);
        };
        this.loadIncludeScript("Address.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
