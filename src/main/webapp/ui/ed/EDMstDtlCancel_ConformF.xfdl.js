(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("EDMstDtlCancel_ConformF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(280,100);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_dtl",null,"51","65","30","106",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("내용");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_all",null,"51","65","30","195",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("전체");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"51","65","30","17",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","18","10","142","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("초기화 선택");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",280,100,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("EDMstDtlCancel_ConformF.xfdl", function() {

        this.btn_close_onclick = function(obj,e)
        {
        	this.close(obj.getDisplayText());
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_dtl.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_all.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("EDMstDtlCancel_ConformF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
