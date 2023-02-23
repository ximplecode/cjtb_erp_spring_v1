(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FCancel");
            this.set_titletext("전자결재 취소POPUP");
            if (Form == this.constructor)
            {
                this._setFormPosition(510,270);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("DivCancel","0","49","510","221",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("#e8e7e3");
            this.addChild(obj.name, obj);

            obj = new Edit("edCoSeq","82","8","173","33",null,null,null,null,null,null,this.DivCancel.form);
            obj.set_taborder("0");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_enable("false");
            this.DivCancel.addChild(obj.name, obj);

            obj = new Edit("edTitle","82","43","426","33",null,null,null,null,null,null,this.DivCancel.form);
            obj.set_taborder("1");
            obj.set_font("10px/normal \"함초롬바탕 확장\"");
            obj.set_enable("false");
            this.DivCancel.addChild(obj.name, obj);

            obj = new TextArea("txaCancel","82","78","426","133",null,null,null,null,null,null,this.DivCancel.form);
            obj.set_taborder("2");
            this.DivCancel.addChild(obj.name, obj);

            obj = new Static("Static02","42","10","167","41",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("결재취소");
            obj.set_color("#7fb39d");
            obj.set_font("bold 25px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","6","12","30","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_image("url(\'Img::img_check.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","440","17",null,"25","2",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Reg","370","17",null,"25","72",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("등록");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("StDocNo","3","57","77","33",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("문서번호");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("StDocTitle","3","92","77","33",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("문서제목");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("StCancel","3","127","77","133",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("취소사유");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",510,270,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("GW130_CANCEL.xfdl","Lib::Lib_service.xjs");
        this.registerScript("GW130_CANCEL.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;

        var vI_Flow_Id, rt_value;

        this.Cancel_onload = function(obj,e)
        {
        	vI_Flow_Id = this.parent.dsParam1;
        	this.DivCancel.form.edCoSeq.set_value(this.parent.dsParam2);
        	this.DivCancel.form.edTitle.set_value(this.parent.dsParam3);
        };

        this.btn_Reg_onclick = function(obj,e)
        {
        	if(this.DivCancel.form.txaCancel.text.length > 0){

        		var str_url, in_ds, out_ds, str_arg;
        		str_url = "JSP/gw/SQL_GW130_CANCEL_TEST.jsp";
        		str_arg = " sabun =" + nexacro.wrapQuote(nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN"));
        		str_arg += " i_flow_id ="+nexacro.wrapQuote(vI_Flow_Id);
        		str_arg += " i_flow_bigo =" + nexacro.wrapQuote(this.DivCancel.form.txaCancel.text);

        		this.gfn_TransactionP("select", str_url, "", "", str_arg, "Callback_register", true, "P", false, this);
        	}else{
        		alert("취소 사유를 입력 후 처리해 주시기 바랍니다.");
        		this.DivCancel.form.txaCancel.setFocus();
        	}
        };


        this.Callback_register = function(Trid, ErrorCode, ErrorMsg, gv_rt_value)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}

        	this.close(nexacro.getApplication().gv_rt_value);
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close(-1);
        };






        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Cancel_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_Reg.addEventHandler("onclick",this.btn_Reg_onclick,this);
        };
        this.loadIncludeScript("GW130_CANCEL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
