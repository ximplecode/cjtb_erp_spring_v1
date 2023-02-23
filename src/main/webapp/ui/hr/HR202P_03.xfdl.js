(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR202P_03");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1246,543);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grd_list","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_03");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"입사\"/><Cell col=\"2\" text=\"퇴사\"/><Cell col=\"3\" text=\"총 인원\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"expr:comp.parent.fn_setText(currow)\"/><Cell col=\"1\" text=\"bind:IPSADT\" displaytype=\"number\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:TOISADT\" displaytype=\"number\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"number\" textAlign=\"center\" text=\"bind:CNT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1246,543,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("HR202P_03.xfdl", function() {

        this.fn_setText = function(nRow)
        {
        	var rt;
        	if (this.parent.parent.ds_03.getRowLevel(nRow) != 0 )
        	{
        		rt = "합  계";
        	}
        	else
        	{
        		rt = this.parent.parent.ds_03.getColumn(nRow,"MDATE");
        	}

        	return rt;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("HR202P_03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
