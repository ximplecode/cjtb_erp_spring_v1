(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MK111_SearchF");
            this.set_titletext("제작관리 도서조회 POPUP");
            if (Form == this.constructor)
            {
                this._setFormPosition(440,170);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("DivBookSearch","0","49","440","121",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#e8e7e3");
            this.addChild(obj.name, obj);

            obj = new Edit("edBookSCode","82","8","173","33",null,null,null,null,null,null,this.DivBookSearch.form);
            obj.set_taborder("0");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_enable("true");
            obj.set_maxlength("10");
            this.DivBookSearch.addChild(obj.name, obj);

            obj = new Edit("edBookECode","262","8","173","33",null,null,null,null,null,null,this.DivBookSearch.form);
            obj.set_taborder("1");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_enable("true");
            obj.set_maxlength("10");
            this.DivBookSearch.addChild(obj.name, obj);

            obj = new Edit("edBookSYear","82","43","173","33",null,null,null,null,null,null,this.DivBookSearch.form);
            obj.set_taborder("2");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_enable("true");
            obj.set_maxlength("4");
            obj.set_inputtype("number");
            this.DivBookSearch.addChild(obj.name, obj);

            obj = new Edit("edBookEYear","262","43","173","33",null,null,null,null,null,null,this.DivBookSearch.form);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_enable("true");
            obj.set_maxlength("4");
            obj.set_inputtype("number");
            this.DivBookSearch.addChild(obj.name, obj);

            obj = new Edit("edBookSYear00","82","78","353","33",null,null,null,null,null,null,this.DivBookSearch.form);
            obj.set_taborder("4");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_enable("true");
            this.DivBookSearch.addChild(obj.name, obj);

            obj = new Static("Static02","42","10","167","41",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("도서조회");
            obj.set_color("#7fb39d");
            obj.set_font("bold 25px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","6","12","30","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_image("url(\'theme://images/loupe.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"10","55","32","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("StDocNo","3","57","77","33",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("도서코드");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("white");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("StDocTitle","3","92","77","33",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("도서연판");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("white");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("StCancel","3","127","77","33",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("도서명");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("white");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",440,170,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK111_SerchF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK111_SerchF.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK111_SerchF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var rt_value;

        this.MK111_SearchF_onload = function(obj,e)
        {
        	this.DivBookSearch.form.edBookSCode.setFocus();
        };



        this.btn_Reg_onclick = function(obj,e)
        {
        	if(this.DivCancel.form.txaCancel.text.length > 0){

        		var str_url, in_ds, out_ds, str_arg;
        		str_url = "jsp/gw/SQL_GW130_CANCEL_TEST.jsp";
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
            this.addEventHandler("onload",this.MK111_SearchF_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("MK111_SerchF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
