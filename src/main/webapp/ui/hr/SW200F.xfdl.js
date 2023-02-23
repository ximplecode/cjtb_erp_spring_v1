(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SW200F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1060,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1060,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SW200F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SW200F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SW200F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        var gv_svraddr = nexacro.getApplication().gfn_getUrl("svcUrl");
        this.SW200F_onload = function(obj,e)
        {
        	var rdopt, rdfile;

        	rdfile = gv_urlMrd + "/hr/SW100P_02.mrd";
        	rdopt  = "";

        	var rect;
        	if(system.navigatorname = 'nexacro')
        	{
        		if(system.monitorcount > 1)
        		{
        			var monitor_index = system.getMonitorIndex(system.clientToScreenX(this,0), system.clientToScreenY(this,0));
        			rect = system.getScreenRect(monitor_index);
        		}
        		else
        			rect = system.getScreenRect(1);
        	}
        	else
        		rect = system.getScreenRect(1);

        	var sOpenStyle = "autosize=false dragmovetype=all titletext=조회화면 showtitlebar=true showstatusbar=false resizable=true";

        	nexacro.open("print", "hr::HR_PRT_L.xfdl", this.getOwnerFrame(), {rdfile:rdfile, rdopt:rdopt}, sOpenStyle, rect.left, rect.top, rect.width, rect.height, this);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SW200F_onload,this);
        };
        this.loadIncludeScript("SW200F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
