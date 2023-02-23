(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hancomTest");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,840);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00","0","0",null,null,"0","260",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("https://cj-erp.chunjae.co.kr:8000/erp-next/hancom/index_test.jsp");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","2",null,"120","50",null,"205",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("ActID");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","130",null,"120","50",null,"205",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("SetID");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","260",null,"120","50",null,"205",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("CreateSet");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_00","390",null,"120","50",null,"205",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("PopupDialog");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","2",null,"120","50",null,"145",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Clear");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","2",null,"120","50",null,"85",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Open");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","132",null,"552","50",null,"85",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("https://webkian.chunjae.co.kr:8443/attachedfile/chunjae_file/1.hwp");
            obj.set_text("https://webkian.chunjae.co.kr:8443/attachedfile/chunjae_file/1.hwp");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","62","50","110","57",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","113","Combo00:33","135","81",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,840,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("hancomTest.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.WebBrowser00.callMethod("fn_ActID");
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.WebBrowser00.callMethod("fn_SetID");
        };

        this.Button01_00_onclick = function(obj,e)
        {
        	this.WebBrowser00.callMethod("fn_CreateSet");
        };

        this.Button01_00_00_onclick = function(obj,e)
        {
        	this.WebBrowser00.callMethod("fn_PopupDialog");
        };

        this.Button00_00_onclick = function(obj,e)
        {
        	this.WebBrowser00.callMethod("fn_Clear");
        };

        this.Button00_00_00_onclick = function(obj,e)
        {
        	this.WebBrowser00.callMethod("fn_Open",this.Edit00.value);
        	//this.WebBrowser00.callMethod("fn_Open");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button01_00.addEventHandler("onclick",this.Button01_00_onclick,this);
            this.Button01_00_00.addEventHandler("onclick",this.Button01_00_00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.Button00_00_00.addEventHandler("onclick",this.Button00_00_00_onclick,this);
        };
        this.loadIncludeScript("hancomTest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
