(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED133_Print_ConformF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(190,220);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static02","10","10","142","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("인쇄 선택");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose",null,null,"40","40","6.32%","81.82%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn1",null,"60","140","30","25",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("편집외주약정품의서");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn1_00",null,"95","140","30","25",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("외주약정서 (공동)");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn1_01",null,"130","140","30","25",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("외주약정서 (개별)");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn1_02",null,"165","140","30","25",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("전자계약서 보기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",190,220,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ED133_Print_ConformF.xfdl", function() {

        this.ImgClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btn1_onclick = function(obj,e)
        {
        	this.close(obj.getDisplayText());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ImgClose.addEventHandler("onclick",this.ImgClose_onclick,this);
            this.btn1.addEventHandler("onclick",this.btn1_onclick,this);
            this.btn1_00.addEventHandler("onclick",this.btn1_onclick,this);
            this.btn1_01.addEventHandler("onclick",this.btn1_onclick,this);
            this.btn1_02.addEventHandler("onclick",this.btn1_onclick,this);
        };
        this.loadIncludeScript("ED133_Print_ConformF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
