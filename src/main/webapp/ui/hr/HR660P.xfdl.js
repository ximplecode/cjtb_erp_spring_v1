(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR660P");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(488,136);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","340","18","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","415","18","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","3","58","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회년월");
            obj.set_background("#deeafc");
            obj.set_border("1px solid");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","3","Static00:-1","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static00");
            obj.set_background("#92dcda");
            obj.set_border("1px solid");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","122","58","358","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#b5e7e5");
            obj.set_border("1px solid");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","122","92","108","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("#b5e7e5");
            obj.set_border("1px solid");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","229","92","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Static00");
            obj.set_background("#92dcda");
            obj.set_border("1px solid");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","348","92","132","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("#b5e7e5");
            obj.set_border("1px solid");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",488,136,this,function(p){});
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

        };
        this.loadIncludeScript("HR660P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
