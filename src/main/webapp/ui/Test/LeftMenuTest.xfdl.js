(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LeftMenuTest");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button01","10","60","152","38",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("화면(Spring)");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","600","60","152","38",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("화면 (Servlet)");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
        };
        this.loadIncludeScript("LeftMenuTest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
