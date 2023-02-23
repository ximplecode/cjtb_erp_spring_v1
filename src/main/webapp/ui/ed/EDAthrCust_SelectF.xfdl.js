(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("EDAthrCust_SelectF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,100);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static02","18","10","182","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("저자 / 업체 선택");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cust",null,"51","65","30","126",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("업체");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_athr",null,"51","65","30","215",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저자");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"51","65","30","37",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,100,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("EDAthrCust_SelectF.xfdl", function() {

        this.btn_close_onclick = function(obj,e)
        {
        	this.close(obj.getDisplayText());
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_cust.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_athr.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("EDAthrCust_SelectF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
