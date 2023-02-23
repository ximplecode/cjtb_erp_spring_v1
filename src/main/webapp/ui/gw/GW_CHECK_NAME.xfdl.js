(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GW_CHECK_NAME");
            this.set_titletext("New Form");
            this.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(360,104);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","-4","-2","364","36",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("공통ID 사용자 확인");
            obj.set_background("#7fb39d");
            obj.set_textAlign("left");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            obj.set_padding("0px 0px 0px 30px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","95","56","167","27",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","24","56","71","27",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("사용자실명");
            obj.set_font("bold 13px/normal \"함초롬바탕 확장\"");
            obj.set_color("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","267","56","65","27",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_font("bold 13px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",360,104,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("GW_CHECK_NAME.xfdl", function() {
        var old_name, f_name
        /*
        this.GW_CHECK_NAME_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
        {
        	old_name = f_name;
        	this.edt_name.value = f_name;
        };
        */
        this.Button00_onclick = function(obj,e)
        {
        	if(this.edt_name.text == '')
        	{
        		alert("사용자 실명을 입력부탁드립니다.");
        		return;
        	}else
        	{
        		f_name = this.edt_name.text;
        		this.opener.ds_flow_order.addRow();
        		this.opener.ds_flow_order.setColumn(0, "F_COMMENT", f_name);
        		this.close();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GW_CHECK_NAME_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("GW_CHECK_NAME.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
