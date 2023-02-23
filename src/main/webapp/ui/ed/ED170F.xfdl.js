(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED170F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(190,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_close",null,"267","63","25","63",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button","25","10","141","30",null,null,null,null,null,null,this);
            obj.set_initvalueid("171");
            obj.set_taborder("1");
            obj.set_text("표준계약서(매절)");
            obj.set_color("#10aea9");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button1","25","46","141","30",null,null,null,null,null,null,this);
            obj.set_initvalueid("172");
            obj.set_taborder("2");
            obj.set_text("표준계약서(인세)");
            obj.set_color("#10aea9");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button2","25","82","141","30",null,null,null,null,null,null,this);
            obj.set_initvalueid("173");
            obj.set_taborder("3");
            obj.set_text("편집외주약정서");
            obj.set_color("#10aea9");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button3","25","118","141","30",null,null,null,null,null,null,this);
            obj.set_initvalueid("174");
            obj.set_taborder("4");
            obj.set_text("원고료지급규정");
            obj.set_color("#10aea9");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button4","25","154","141","30",null,null,null,null,null,null,this);
            obj.set_initvalueid("175");
            obj.set_taborder("5");
            obj.set_text("교과 지도서 계약서");
            obj.set_color("#10aea9");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button5","25","190","141","30",null,null,null,null,null,null,this);
            obj.set_initvalueid("176");
            obj.set_taborder("6");
            obj.set_text("교과 디자인 약정서");
            obj.set_color("#10aea9");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button6","25","226","141","30",null,null,null,null,null,null,this);
            obj.set_initvalueid("177");
            obj.set_taborder("7");
            obj.set_text("교과 삽화 약정서");
            obj.set_color("#10aea9");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",190,300,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ED170F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("ED170F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        var gv_urlRdDataServer = nexacro.getApplication().gv_urlRdDataServer;

        this.Button_onclick = function(obj,e)
        {
        	rdUrl = gv_urlMrd + "/ed/ED" + obj.initvalueid  + ".mrd";

        	rdParam  = "/ragentpath ["+ gv_urlRdDataServer +"]" +
        			   " /rp";

        	this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1500, 850);
        };

        this.Div00_btn_print_onclick = function(obj,e)
        {
        	this.close();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_close.addEventHandler("onclick",this.Div00_btn_print_onclick,this);
            this.Button.addEventHandler("onsetfocus",this.Button00_onsetfocus,this);
            this.Button.addEventHandler("onclick",this.Button_onclick,this);
            this.Button1.addEventHandler("onclick",this.Button_onclick,this);
            this.Button2.addEventHandler("onclick",this.Button_onclick,this);
            this.Button3.addEventHandler("onclick",this.Button_onclick,this);
            this.Button4.addEventHandler("onclick",this.Button_onclick,this);
            this.Button5.addEventHandler("onclick",this.Button_onclick,this);
            this.Button6.addEventHandler("onclick",this.Button_onclick,this);
        };
        this.loadIncludeScript("ED170F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
