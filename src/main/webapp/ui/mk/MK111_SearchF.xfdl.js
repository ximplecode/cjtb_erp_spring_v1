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
            obj = new Dataset("dsBookMst", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_PID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_ORDID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_SALE\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_BASIC_FOLD\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_SIGNATURE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_BODYPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_REGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_MODIDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
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
            obj.set_textAlign("center");
            this.DivBookSearch.addChild(obj.name, obj);

            obj = new Edit("edBookECode","262","8","173","33",null,null,null,null,null,null,this.DivBookSearch.form);
            obj.set_taborder("1");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_enable("true");
            obj.set_maxlength("10");
            obj.set_textAlign("center");
            this.DivBookSearch.addChild(obj.name, obj);

            obj = new Edit("edBookSYear","82","43","173","33",null,null,null,null,null,null,this.DivBookSearch.form);
            obj.set_taborder("2");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_enable("true");
            obj.set_maxlength("4");
            obj.set_inputtype("number");
            obj.set_textAlign("center");
            this.DivBookSearch.addChild(obj.name, obj);

            obj = new Edit("edBookEYear","262","43","173","33",null,null,null,null,null,null,this.DivBookSearch.form);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_enable("true");
            obj.set_maxlength("4");
            obj.set_inputtype("number");
            obj.set_textAlign("center");
            this.DivBookSearch.addChild(obj.name, obj);

            obj = new Edit("edBookName","82","78","353","33",null,null,null,null,null,null,this.DivBookSearch.form);
            obj.set_taborder("4");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_enable("true");
            obj.set_accessibilityrole("edit");
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

            obj = new Button("btn_Search",null,"10","55","32","70",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
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
        this.addIncludeScript("MK111_SearchF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK111_SearchF.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK111_SearchF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        this.MK111_SearchF_onload = function(obj,e)
        {
        	this.dsBookMst.copyData(this.parent.dsParam1);
        	this.DivBookSearch.form.edBookSCode.setFocus();
        };

        this.btn_Search_onclick = function(obj,e)
        {
        	var str_url, in_ds, out_ds, str_arg;
        		str_url = "JSP/mk/mk111f_bookmst.jsp";
        		str_arg = "sBOOKMST_CODE=" +nexacro.wrapQuote( this.DivBookSearch.form.edBookSCode.text);
        		str_arg +=" eBOOKMST_CODE=" +nexacro.wrapQuote( this.DivBookSearch.form.edBookECode.text);
        		str_arg +=" sBOOKMST_YEAR=" +nexacro.wrapQuote( this.DivBookSearch.form.edBookSYear.text);
        		str_arg +=" eBOOKMST_YEAR=" +nexacro.wrapQuote(this.DivBookSearch.form.edBookEYear.text);
        		str_arg +=" sBOOKMST_NAME=" +nexacro.wrapQuote( this.DivBookSearch.form.edBookName.text);

        		this.gfn_TransactionP("select", str_url, "dsBookMst=dsBookMst", "dsBookMst=dsBookMst", str_arg, "Callback_Search", true, "P", false, this);
        };

        this.Callback_Search = function(Trid, ErrorCode, ErrorMsg, gv_rt_value)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}else{
        		this.MK111_SearchF_onclose();
        	}
        };

        //조회하자마자 parent화면으로 데이터 복사/팝업 닫기
        this.MK111_SearchF_onclose = function(obj,e)
        {
        	this.parent.dsParam1.copyData(this.dsBookMst);
        	this.close(-1);
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close(-1);
        };

        this.MK111_SearchF_onkeydown = function(obj,e)
        {
        	var comObj = obj.getFocus();

        	//ENTER입력시 TAB처럼 이동
        	if(e.keycode == "13"){

        		comObj = this.DivBookSearch.form.getNextComponent(comObj, true);
        		comObj.setFocus();

        		//콤보타입일 경우 목록보이게 자동설정
        		if(comObj.toString() == "[object Combo]")
        		  comObj.dropdown();
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MK111_SearchF_onload,this);
            this.addEventHandler("onclose",this.MK111_SearchF_onclose,this);
            this.addEventHandler("onkeydown",this.MK111_SearchF_onkeydown,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);
        };
        this.loadIncludeScript("MK111_SearchF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
