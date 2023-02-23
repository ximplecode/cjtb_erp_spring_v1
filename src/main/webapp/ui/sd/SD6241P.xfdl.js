(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD6241P");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(420,160);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","10","5","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("출고율 년판복사");
            obj.set_color("#7fb39d");
            obj.set_font("bold 24px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_06","12","53","332","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("리스트 검색");
            obj.set_background("#3cbcb8");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","12","81","202","58",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","104","115","14","18",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values1","19","114","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_format("@@@@@@@@@@");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values2","126","114","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@@@@@@@");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_copy","353","95","55","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("복사하기");
            obj.set_font("8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"10","45","22","12",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.set_font("8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","12","81","202","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("코드구간");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","212","81","62","58",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","212","81","62","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("년판");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values3","218","114","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","272","81","72","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("복사년판");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            obj.set_background("#dffff8");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","272","81","72","58",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_values4","278","114","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",420,160,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD6241P.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD6241P.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD6241P.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var Rcount    = "";

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.SD6241P_onload = function(obj,e)
        {
        	this.ed_values1.set_value("");
        	this.ed_values2.set_value("");
        	this.ed_values3.set_value("");
        	this.ed_values4.set_value("");
        	this.ed_values1.setFocus();
        };

        this.common_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13)
        	{
        		if (obj.name == "ed_values1") this.ed_values2.setFocus();
        		else if (obj.name == "ed_values2") this.ed_values3.setFocus();
        		else if (obj.name == "ed_values3") this.ed_values4.setFocus();
        	}//ESC 키처리
        	else if (e.keycode == 27)
        	{
        		if (obj.name == "ed_values2") this.ed_values1.setFocus();
        		else if (obj.name == "ed_values3") this.ed_values2.setFocus();
        		else if (obj.name == "ed_values4") this.ed_values3.setFocus();
        	}
        };

        this.btn_copy_onclick = function(obj,e)
        {
        	var strUrl = "JSP/sd/copy_booky.jsp";
        	var strArg;

        	if (this.fnNullCheck() == "False")
        	{
        		alert("데이터를 정확하게 넣어주세요!");
        		return;
        	}

        	strArg = " Values1="+nexacro.wrapQuote(this.ed_values1.value)+
        	         " Values2="+nexacro.wrapQuote(this.ed_values2.value)+
        	         " Values3="+nexacro.wrapQuote(this.ed_values3.value)+
        	         " Values4="+nexacro.wrapQuote(this.ed_values4.value);
        	this.gfn_TransactionP("codesearch", strUrl, "", "", strArg, "fnTr_Callback", false, "P", false, this);
        };

        this.fnNullCheck = function()
        {
        	if (this.ed_values1.value=="")
        	{
        		return "False";
        	}
        	if (this.ed_values2.value=="")
        	{
        		return "False";
        	}
        	if (this.ed_values3.value=="")
        	{
        		return "False";
        	}
        	if (this.ed_values4.value=="")
        	{
        		return "False";
        	}
        	return "True";
        }

        this.fnTr_Callback = function(strSvcID, nErrorCode, strErrorMag)
        {
        	if ( strSvcID == "codesearch" )
        	{
        		alert(strErrorMag+"건의 데이터를 신규 추가하였습니다.");
        	}
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD6241P_onload,this);
            this.ed_values1.addEventHandler("onkillfocus",this.ed_jukyocd_onkillfocus,this);
            this.ed_values1.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values2.addEventHandler("onkillfocus",this.ed_jukyocd_onkillfocus,this);
            this.ed_values2.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.btn_copy.addEventHandler("onclick",this.btn_copy_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.ed_values3.addEventHandler("onkillfocus",this.ed_jukyocd_onkillfocus,this);
            this.ed_values3.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.ed_values4.addEventHandler("onkillfocus",this.ed_jukyocd_onkillfocus,this);
            this.ed_values4.addEventHandler("onkeydown",this.common_onkeydown,this);
        };
        this.loadIncludeScript("SD6241P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
