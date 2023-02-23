(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CntBox");
            this.set_titletext("New Form");
            this.set_scrolltype("none");
            this.set_background("#cbd3bd");
            if (Form == this.constructor)
            {
                this._setFormPosition(125,125);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("StaMi","0","0","125","125",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("gwCnt");
            this.addChild(obj.name, obj);

            obj = new Static("StKind","0","7","100.00%","57",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("미결문서");
            obj.set_font("bold 30px/normal \"한컴산뜻돋움\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("StCount","0.00%","66","100.00%","45",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("gwCnt");
            obj.set_displaynulltext("0");
            obj.set_font("32px/normal \"한컴산뜻돋움\"");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_color("#966c63");
            obj.set_format("###,999");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",125,125,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CntBox.xfdl", function() {

        /* Pasing 프로퍼티 */
        var f_num;

        this.set_Stcount = function( str1, str2 )
        {
        	this.StKind.set_text(str1);
        	this.StCount.set_value(str2);
        }

        this.CntBox_onmousemove = function(obj,e)
        {
        	this.StKind.set_background("#748c70");
        	this.StaMi.set_background("#748c70");
        	this.StCount.set_background("#748c70");
        	this.StKind.set_color("#e8e7e3");
        	this.StCount.set_color("#d2e7d6");
        };

        this.CntBox_onmouseleave = function(obj,e)
        {
        	this.StKind.set_background("#cbd3bd");
        	this.StaMi.set_background("#cbd3bd");
        	this.StCount.set_background("#cbd3bd");
        	this.StKind.set_color("#555555");
        	this.StCount.set_color("#966c63");
        };

        this.CntBox_onclick = function(obj,e)
        {
           var strPgReset = 1;
           if(this.StKind.text == "미결문서"){
        	 this.parent.parent.parent.parent.getData_mi(strPgReset);
           }else if(this.StKind.text == "진행문서"){
        	this.parent.parent.parent.parent.getData_jin(strPgReset);
           }else if(this.StKind.text == "공유문서"){
            this.parent.parent.parent.parent.getData_gong(strPgReset);
           }else if(this.StKind.text == "완결문서"){
        	this.parent.parent.parent.parent.getData_wan(strPgReset);
           }else if(this.StKind.text == "저장문서"){
        	this.parent.parent.parent.parent.getData_save(strPgReset);
           }else if(this.StKind.text == "수신문서"){
        	this.parent.parent.parent.parent.getData_receive(strPgReset);
           }else if(this.StKind.text == "대결문서"){
        	this.parent.parent.parent.parent.getData_de(strPgReset);
           }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclick",this.CntBox_onclick,this);
            this.addEventHandler("onload",this.CntBox_onload,this);
            this.StKind.addEventHandler("onmousemove",this.CntBox_onmousemove,this);
            this.StKind.addEventHandler("onmouseleave",this.CntBox_onmouseleave,this);
            this.StKind.addEventHandler("onclick",this.CntBox_onclick,this);
            this.StCount.addEventHandler("onmousemove",this.CntBox_onmousemove,this);
            this.StCount.addEventHandler("onmouseleave",this.CntBox_onmouseleave,this);
            this.StCount.addEventHandler("onlbuttondown",this.CntBox_onclick,this);
        };
        this.loadIncludeScript("CntBox.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
