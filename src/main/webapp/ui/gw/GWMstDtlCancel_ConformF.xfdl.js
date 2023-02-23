(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GWMstDtlCancel_ConformF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(280,90);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","10","10","260","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid dimgray");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dtl","20","55","55","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("내용");
            obj.set_background("#ffffff");
            obj.set_textAlign("center");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mst","110","55","55","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("전체");
            obj.set_background("#ffffff");
            obj.set_textAlign("center");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","200","55","55","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_background("#ffffff");
            obj.set_textAlign("center");
            obj.set_color("black");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",280,90,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("GWMstDtlCancel_ConformF.xfdl", function() {
        this.GWMstDtlCancel_ConformF_onload = function(obj,e)
        {
        	this.Static00.set_text(this.parent.arg);
        };

        this.btn_dtl_onclick = function(obj,e)
        {
        	this.close("dtl");
        };

        this.btn_mst_onclick = function(obj,e)
        {
        	this.close("mst");
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GWMstDtlCancel_ConformF_onload,this);
            this.btn_dtl.addEventHandler("onclick",this.btn_dtl_onclick,this);
            this.btn_mst.addEventHandler("onclick",this.btn_mst_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("GWMstDtlCancel_ConformF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
