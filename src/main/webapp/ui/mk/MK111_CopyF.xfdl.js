(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MK111_CopyF");
            this.set_titletext("제작관리 도서복사(단일건) POPUP");
            if (Form == this.constructor)
            {
                this._setFormPosition(440,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCopyBookMst", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_PID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_ORDID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_SALE\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_SIGNATURE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_BODYPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_REGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_MODIDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_HEIGHT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaleChkCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_CNT\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIsmChkCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_CNT\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopySeparateBind", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopyBookDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKDTL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"USE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_PSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COAT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_REGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_MODIDATE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_BNDSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_BUL\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_GANGED\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_TONE1\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_TONE2\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_CTP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PACK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PRINT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DVD_JACKET\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBookMst_sList", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_PID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_ORDID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBookMst_tList", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_PID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_ORDID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivIsmCopy","9","119","426","438",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Static("StSearch","3","8","85","35",null,null,null,null,null,null,this.DivIsmCopy.form);
            obj.set_taborder("0");
            obj.set_text("도서코드");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivIsmCopy.addChild(obj.name, obj);

            obj = new Edit("edBookCode","90","8","100","35",null,null,null,null,null,null,this.DivIsmCopy.form);
            obj.set_taborder("1");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("10");
            this.DivIsmCopy.addChild(obj.name, obj);

            obj = new Edit("edBookSeq","193","8","48","35",null,null,null,null,null,null,this.DivIsmCopy.form);
            obj.set_taborder("2");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("3");
            obj.set_inputtype("number");
            this.DivIsmCopy.addChild(obj.name, obj);

            obj = new Static("StSearch01","3","47","85","35",null,null,null,null,null,null,this.DivIsmCopy.form);
            obj.set_taborder("3");
            obj.set_text("도서명");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivIsmCopy.addChild(obj.name, obj);

            obj = new Edit("edBookName","90","47","251","35",null,null,null,null,null,null,this.DivIsmCopy.form);
            obj.set_taborder("4");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.DivIsmCopy.addChild(obj.name, obj);

            obj = new Static("StSearch01_00","3","86","85","35",null,null,null,null,null,null,this.DivIsmCopy.form);
            obj.set_taborder("5");
            obj.set_text("연판");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivIsmCopy.addChild(obj.name, obj);

            obj = new Edit("edBookYear","90","86","62","35",null,null,null,null,null,null,this.DivIsmCopy.form);
            obj.set_taborder("6");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_inputtype("number");
            this.DivIsmCopy.addChild(obj.name, obj);

            obj = new Button("btnCopy",null,"30","68","62","7",null,null,null,null,null,this.DivIsmCopy.form);
            obj.set_taborder("7");
            obj.set_text("복사");
            obj.set_font("bold 10pt/normal \"한컴산뜻돋움\"");
            this.DivIsmCopy.addChild(obj.name, obj);

            obj = new Static("st_ment","14","139","402","30",null,null,null,null,null,null,this.DivIsmCopy.form);
            obj.set_taborder("8");
            obj.set_text("▣ 제작인증처리가 되지 않아 복사가 불가능합니다.");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            obj.set_color("crimson");
            obj.set_visible("false");
            this.DivIsmCopy.addChild(obj.name, obj);

            obj = new Static("Static02","42","10","198","41",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("도서복사(일괄)");
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
            obj.set_font("bold 10pt/normal \"한컴산뜻돋움\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"10","55","32","71",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_font("bold 10pt/normal \"한컴산뜻돋움\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnApply",null,"10","55","32","132",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("적용");
            obj.set_font("bold 10pt/normal \"한컴산뜻돋움\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnBCopy",null,"11.61%","140","45","66.82%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("도서복사");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_border("2px groove #7fb39d");
            obj.set_background("white");
            obj.set_color("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Button("btnScopy",null,"11.61%","140","45","34.09%",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("도서구조복사");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_border("2px groove #7fb39d");
            obj.set_background("white");
            obj.set_color("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Button("btnISMCopy",null,"11.61%","140","45","1.14%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("ISM사양복사");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_border("2px groove #7fb39d");
            obj.set_background("white");
            obj.set_color("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Div("DivBCopy","9","119","426","438",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("StMsg","3","2","418","50",null,null,null,null,null,null,this.DivBCopy.form);
            obj.set_taborder("0");
            obj.set_text("현 도서 정보를 복사하려면 새로운 도서코드(숫자10자리)를 입력 후, 복사버튼을 눌러 주십시요.");
            obj.set_wordWrap("char");
            obj.set_font("bold 10pt/normal \"한컴산뜻돋움\"");
            obj.set_letterSpacing("1px");
            this.DivBCopy.addChild(obj.name, obj);

            obj = new Static("StSearch","3","58","85","35",null,null,null,null,null,null,this.DivBCopy.form);
            obj.set_taborder("1");
            obj.set_text("도서코드");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivBCopy.addChild(obj.name, obj);

            obj = new Edit("edBookCode","90","58","100","35",null,null,null,null,null,null,this.DivBCopy.form);
            obj.set_taborder("2");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("10");
            this.DivBCopy.addChild(obj.name, obj);

            obj = new Edit("edBookSeq","193","58","48","35",null,null,null,null,null,null,this.DivBCopy.form);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("3");
            obj.set_inputtype("number");
            this.DivBCopy.addChild(obj.name, obj);

            obj = new Edit("edBookYear","90","136","62","35",null,null,null,null,null,null,this.DivBCopy.form);
            obj.set_taborder("4");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_inputtype("number");
            this.DivBCopy.addChild(obj.name, obj);

            obj = new Static("StSearch01","3","97","85","35",null,null,null,null,null,null,this.DivBCopy.form);
            obj.set_taborder("5");
            obj.set_text("도서명");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivBCopy.addChild(obj.name, obj);

            obj = new Edit("edBookName","90","97","251","35",null,null,null,null,null,null,this.DivBCopy.form);
            obj.set_taborder("6");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.DivBCopy.addChild(obj.name, obj);

            obj = new Static("StSearch01_00","3","136","85","35",null,null,null,null,null,null,this.DivBCopy.form);
            obj.set_taborder("7");
            obj.set_text("신규연판");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivBCopy.addChild(obj.name, obj);

            obj = new Static("StSearch01_00_00","3","175","85","35",null,null,null,null,null,null,this.DivBCopy.form);
            obj.set_taborder("8");
            obj.set_text("복사여부");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivBCopy.addChild(obj.name, obj);

            obj = new CheckBox("cbMst","93","175","113","35",null,null,null,null,null,null,this.DivBCopy.form);
            obj.set_taborder("9");
            obj.set_text("도서기본정보");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_enable("false");
            obj.set_value("true");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.DivBCopy.addChild(obj.name, obj);

            obj = new CheckBox("cbDtl","210","175","113","35",null,null,null,null,null,null,this.DivBCopy.form);
            obj.set_taborder("10");
            obj.set_text("도서세부사양");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_value("true");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.DivBCopy.addChild(obj.name, obj);

            obj = new Button("btnCopy",null,"140","68","62","7",null,null,null,null,null,this.DivBCopy.form);
            obj.set_taborder("11");
            obj.set_text("복사");
            obj.set_font("bold 10pt/normal \"한컴산뜻돋움\"");
            this.DivBCopy.addChild(obj.name, obj);

            obj = new Grid("grdBookMstCopy","3","218","416","211",null,null,null,null,null,null,this.DivBCopy.form);
            obj.set_taborder("12");
            obj.set_binddataset("dsCopyBookMst");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"67\"/><Column size=\"100\"/><Column size=\"51\"/><Column size=\"191\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:BOOKMST_ID\"/><Cell col=\"1\" text=\"bind:BOOKMST_CODE\"/><Cell col=\"2\" text=\"bind:BOOKMST_YEAR\"/><Cell col=\"3\" text=\"bind:BOOKMST_NAME\"/></Band></Format></Formats>");
            this.DivBCopy.addChild(obj.name, obj);

            obj = new Div("DivSCopy","9","119","426","438",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Static("StSearch","3","8","85","35",null,null,null,null,null,null,this.DivSCopy.form);
            obj.set_taborder("0");
            obj.set_text("도서코드");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivSCopy.addChild(obj.name, obj);

            obj = new Static("StSearch01_00","3","46","85","35",null,null,null,null,null,null,this.DivSCopy.form);
            obj.set_taborder("1");
            obj.set_text("원본년판");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivSCopy.addChild(obj.name, obj);

            obj = new Edit("edBookSCode","90","8","100","35",null,null,null,null,null,null,this.DivSCopy.form);
            obj.set_taborder("2");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("10");
            this.DivSCopy.addChild(obj.name, obj);

            obj = new Edit("edBookOYear","90","45","62","35",null,null,null,null,null,null,this.DivSCopy.form);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_inputtype("number");
            this.DivSCopy.addChild(obj.name, obj);

            obj = new Edit("edBookECode","210","8","100","35",null,null,null,null,null,null,this.DivSCopy.form);
            obj.set_taborder("4");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("10");
            this.DivSCopy.addChild(obj.name, obj);

            obj = new Static("StSearch01_00_00","161","46","85","35",null,null,null,null,null,null,this.DivSCopy.form);
            obj.set_taborder("5");
            obj.set_text("적용년판");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivSCopy.addChild(obj.name, obj);

            obj = new Edit("edBookNYear","248","45","62","35",null,null,null,null,null,null,this.DivSCopy.form);
            obj.set_taborder("6");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_inputtype("number");
            this.DivSCopy.addChild(obj.name, obj);

            obj = new Static("Static00","195","9","18","35",null,null,null,null,null,null,this.DivSCopy.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.DivSCopy.addChild(obj.name, obj);

            obj = new Button("btnCopy",null,"14","68","62","23",null,null,null,null,null,this.DivSCopy.form);
            obj.set_taborder("8");
            obj.set_text("복사");
            obj.set_font("bold 10pt/normal \"한컴산뜻돋움\"");
            this.DivSCopy.addChild(obj.name, obj);

            obj = new Grid("grdBookSt","3","87","418","344",null,null,null,null,null,null,this.DivSCopy.form);
            obj.set_taborder("9");
            obj.set_binddataset("dsBookMst_tList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"BOOKMST_ID\"/><Cell col=\"1\" text=\"BOOKMST_PID\"/><Cell col=\"2\" text=\"BOOKMST_ORDID\"/><Cell col=\"3\" text=\"BOOKMST_CODE\"/><Cell col=\"4\" text=\"BOOKMST_YEAR\"/><Cell col=\"5\" text=\"BOOKMST_NAME\"/><Cell col=\"6\" text=\"LVL\"/><Cell col=\"7\" text=\"CHK\"/></Band><Band id=\"body\"><Cell text=\"bind:BOOKMST_ID\" displaytype=\"treeitemcontrol\" treelevel=\"bind:LVL\" treecheck=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:BOOKMST_PID\"/><Cell col=\"2\" text=\"bind:BOOKMST_ORDID\"/><Cell col=\"3\" text=\"bind:BOOKMST_CODE\"/><Cell col=\"4\" text=\"bind:BOOKMST_YEAR\"/><Cell col=\"5\" text=\"bind:BOOKMST_NAME\"/><Cell col=\"6\" text=\"bind:LVL\"/><Cell col=\"7\" text=\"bind:CHK\"/></Band></Format></Formats>");
            this.DivSCopy.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",440,560,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK111_CopyF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK111_CopyF.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK111_CopyF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var DivName, BtnName, BtnName2, BtnName3;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var rtnBOOKMST_ID, nNBookMst_Id, nBookMst_Id;

        this.MK111_CopyF_onload = function(obj,e)
        {
        	this.btnBCopy_onclick();
        	this.DivBCopy.form.edBookCode.set_value(this.parent.dsParam1);
        	this.DivBCopy.form.edBookSeq.set_value(this.parent.dsParam2);
        	this.DivBCopy.form.edBookName.set_value(this.parent.dsParam4);
        	this.DivBCopy.form.edBookCode.setFocus();

        	this.DivIsmCopy.form.edBookCode.set_value(this.parent.dsParam1);
        	this.DivIsmCopy.form.edBookSeq.set_value(this.parent.dsParam2);
        	this.DivIsmCopy.form.edBookYear.set_value(this.parent.dsParam3);
        	this.DivIsmCopy.form.edBookName.set_value(this.parent.dsParam4);

        	nBookMst_Id = this.opener.dsBookMst.getColumn(this.opener.dsBookMst.rowposition, "BOOKMST_ID");
        };

        this.fctn_visible_color = function(DivName, BtnName, BtnName2, BtnName3){

        	if(DivName == true){
        		BtnName.set_background("#7fb39d");
        		BtnName.set_color("#ffffff");
        		BtnName2.set_border("2px groove #7fb39d");
        		BtnName2.set_background("white");
        		BtnName2.set_color("#7fb39d");
        		BtnName3.set_border("2px groove #7fb39d");
        		BtnName3.set_background("white");
        		BtnName3.set_color("#7fb39d");
        	}
        }

        this.btnBCopy_onclick = function(obj,e)
        {
        	this.DivBCopy.set_visible(true);
        	this.DivSCopy.set_visible(false);
        	this.DivIsmCopy.set_visible(false);
        	//저장, 적용 버튼은 구조복사시에만 사용
        	this.btnApply.set_visible(false);
        	this.btnSave.set_visible(false);

        	this.fctn_visible_color(this.DivBCopy.visible, this.btnBCopy, this.btnScopy, this.btnISMCopy);
        };

        this.btnScopy_onclick = function(obj,e)
        {
        	this.DivBCopy.set_visible(false);
        	this.DivSCopy.set_visible(true);
        	this.DivIsmCopy.set_visible(false);

        	//저장, 적용 버튼은 구조복사시에만 사용
        	this.btnApply.set_visible(true);
        	this.btnSave.set_visible(true);
        	this.fctn_visible_color(this.DivSCopy.visible, this.btnScopy, this.btnBCopy, this.btnISMCopy);
        };

        this.btnISMCopy_onclick = function(obj,e)
        {
        	this.DivBCopy.set_visible(false);
        	this.DivSCopy.set_visible(false);
        	this.DivIsmCopy.set_visible(true);
        	//저장, 적용 버튼은 구조복사시에만 사용
        	this.btnApply.set_visible(false);
        	this.btnSave.set_visible(false);
        	this.fctn_visible_color(this.DivIsmCopy.visible, this.btnISMCopy, this.btnBCopy, this.btnScopy);
        };

        this.DivBCopy_btnCopy_onclick = function(obj,e)
        {
        	//영업에 도서코드가 존재하는지 확인
        	this.dsSaleChkCnt.clearData();
        	this.fn_sale_bookinfo_chk();

        	if(nexacro.Number(this.dsSaleChkCnt.getColumn(this.dsSaleChkCnt.rowposition, "CHK_CNT")) == 0 ||
        		this.dsSaleChkCnt.rowcount == 0)
        	{
        		alert("신규년판 영업도서코드가 생성되어 있지 않아 복사가 불가능 합니다.");
        		return false;
        	}
        	//복사할 도서정보 조회
        	this.fctn_Mst_Search();

        	var sfilter = "BOOKMST_CODE=='" + this.DivBCopy.form.edBookCode.text +
        	              "'&&BOOKMST_YEAR=='" + this.DivBCopy.form.edBookYear.text +
        	              "'&&BOOKMST_SEQ=='" + this.DivBCopy.form.edBookSeq.text + "'";

        	this.dsCopyBookMst.filter(sfilter);

        	if(this.dsCopyBookMst.rowcount == 0)
        		this.dsCopyBookMst.addRow();

        	//도서마스터 복사
        	var nRow = this.dsCopyBookMst.rowposition;
        	var nParentRow = this.opener.dsBookMst.rowposition;
        	var d = new Date();
        	var strToDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");

        	this.dsCopyBookMst.setColumn(nRow, "BOOKMST_PID", null);
        	this.dsCopyBookMst.setColumn(nRow, "BOOKMST_CODE", this.DivBCopy.form.edBookCode.text);
        	this.dsCopyBookMst.setColumn(nRow, "BOOKMST_YEAR", this.DivBCopy.form.edBookYear.text);
        	this.dsCopyBookMst.setColumn(nRow, "BOOKMST_SEQ", this.DivBCopy.form.edBookSeq.text);
        	this.dsCopyBookMst.setColumn(nRow, "BOOKMST_NAME", this.DivBCopy.form.edBookName.text);
        	this.dsCopyBookMst.setColumn(nRow, "BOOKMST_REGDATE", strToDay);
        	this.dsCopyBookMst.setColumn(nRow, "BOOKMST_TYPE", this.opener.dsBookMst.getColumn(nParentRow, "BOOKMST_TYPE"));
        	this.dsCopyBookMst.setColumn(nRow, "BOOKMST_SALE", this.opener.dsBookMst.getColumn(nParentRow, "BOOKMST_SALE"));
        	this.dsCopyBookMst.setColumn(nRow, "PLT_CODE", this.opener.dsBookMst.getColumn(nParentRow, "PLT_CODE"));
        	this.dsCopyBookMst.setColumn(nRow, "BND_CODE", this.opener.dsBookMst.getColumn(nParentRow, "BND_CODE"));
        	this.dsCopyBookMst.setColumn(nRow, "BOOKMST_SIGNATURE", this.opener.dsBookMst.getColumn(nParentRow, "BOOKMST_SIGNATURE"));
        	this.dsCopyBookMst.setColumn(nRow, "BOOKMST_BODYPAGE", this.opener.dsBookMst.getColumn(nParentRow, "BOOKMST_BODYPAGE"));
        	this.dsCopyBookMst.setColumn(nRow, "BOOKMST_REMARK", this.opener.dsBookMst.getColumn(nParentRow, "BOOKMST_REMARK"));

        	if(this.opener.dsBookMstSize.rowcount > 0){
        		//대표규격 복사
        		this.dsCopyBookMst.setColumn(nRow, "PPR_WIDTH", this.opener.dsBookMstSize.getColumn(0, "PPR_WIDTH"));
        		this.dsCopyBookMst.setColumn(nRow, "PPR_HEIGHT", this.opener.dsBookMstSize.getColumn(0, "PPR_HEIGHT"));
        	}

        	//추가부록제본 복사
        	if(this.opener.dsSeparateBind.rowcount > 0){
        		this.dsCopySeparateBind.clearData();

        		for(var i=0; i < this.opener.dsSeparateBind.rowcount;i++)
        		{
        			var nRow2 = this.dsCopySeparateBind.addRow();
        			this.dsCopySeparateBind.setColumn(nRow2, "BND_CODE", this.opener.dsSeparateBind.getColumn(i, "BND_CODE"));
        		}
        	}

        	// 도서기본 카피정보 저장하기 -> BOOK_MST_SIZE도 같이 저장(대표규격)
        	this.fctn_Mst_Save();

        	//마스터 재조회(refresh)
        	this.fctn_Mst_Search();

        	//도서세부사양 카피저장
        	if(this.DivBCopy.form.cbDtl.value == "1"){

        		nNBookMst_Id = this.dsCopyBookMst.getColumn(this.dsCopyBookMst.rowposition, "BOOKMST_ID");

        		this.fctn_Dtl_Search(nNBookMst_Id);

        		//기존 세부사양 삭제
        		if(this.dsCopyBookDtl.rowcount != 0)
        			this.dsCopyBookDtl.deleteAll();

        		this.fctn_Dtl_Search(nBookMst_Id);

        		this.fctn_Dtl_save(nNBookMst_Id);
        	}else{
        		this.btn_close_onclick();
        	}

        };

        //#######################################################
        //  도서 기본정보 찾기
        //#######################################################
        this.fctn_Mst_Search = function()
        {
        	if (this.DivBCopy.form.edBookCode.text.length != this.DivBCopy.form.edBookCode.getLength())
        	{
        		alert("도서코드를 입력해 주십시요.");
        		this.DivBCopy.form.edBookCode.setFocus();
        		return false;
        	}

        	var strArg  = "";
        	var inds = "dsCopyBookMst=dsCopyBookMst";
        	var outds 	= "dsCopyBookMst=dsCopyBookMst";

        	strArg 	= "BOOKMST_CODE=" +nexacro.wrapQuote(this.DivBCopy.form.edBookCode.text);
        	strArg += " BOOKMST_YEAR=" +nexacro.wrapQuote(this.DivBCopy.form.edBookYear.text);
        	strArg += " BOOKMST_SEQ=" +nexacro.wrapQuote(this.DivBCopy.form.edBookSeq.text);

        	this.gfn_TransactionP("select", "JSP/mk/mk111f_bookmst_copylist.jsp", inds, outds, strArg, "", false, "S", false, this);

        	if (this.dsCopyBookMst.rowcount > 0)
        	  this.DivBCopy.form.edBookName.text = this.dsCopyBookMst.getColumn(this.dsCopyBookMst.getMin(), "BOOKMST_NAME");
        }

        //#######################################################
        // 도서기본 정보 저장하기
        //#######################################################
        this.fctn_Mst_Save= function()
        {
        	var inds 	= "input=dsCopyBookMst:U";
        	var str_url = "JSP/mk/mk111f_bookmst_dml.jsp";

        	for (var nRow=0 ; nRow<=this.dsCopyBookMst.rowcount-1 ; nRow++)
        	{
        		this.dsCopyBookMst.setColumn(nRow,"EMPLOYEE_ID", gv_sabun);
        	}

        	this.gfn_TransactionP("insert", str_url, inds, "", "", "fctn_BookMstCallBack", false, "P", false, this);
        }

        //#######################################################
        // 마스타 저장 콜백함수
        //#######################################################
        this.fctn_BookMstCallBack = function(Trid, ErrorCode, ErrorMsg, gv_rt_BOOKMST_ID)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}else{

        		rtnBOOKMST_ID = nexacro.getApplication().gv_rt_BOOKMST_ID;
        		this.dsCopyBookMst.setColumn(this.dsCopyBookMst.rowposition, "BOOKMST_ID", rtnBOOKMST_ID);

        		//추가부록제본 저장
                this.fctn_dsSeparateBindCopy_save();
        	}
        }

        //추가부록제본 저장
        this.fctn_dsSeparateBindCopy_save = function()
        {
        	var inds 	= "input=dsCopySeparateBind:U";

        	if(this.dsCopySeparateBind.rowcount != 0)
        	{
        		for (var i = 0; i <= this.dsCopySeparateBind.rowcount-1 ; i++)
        		{
        			this.dsCopySeparateBind.setColumn(i, "BOOKMST_ID",  this.dsCopyBookMst.getColumn(this.dsCopyBookMst.rowposition, "BOOKMST_ID"));
        			this.dsCopySeparateBind.setColumn(i, "EMPLOYEE_ID", gv_sabun);
        		}
        	}

        	this.gfn_TransactionP("save", "JSP/mk/SeparateBind_dml.jsp", inds, "", "", "fnSeparateBindCopySaveCallback", false, "P", false, this);
        }

        //#######################################################
        // fnSeparateBindCopySaveCallback 콜백
        //#######################################################
        this.fnSeparateBindCopySaveCallback = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}
        }

        //#######################################################
        // 도서 세부사양 정보 조회하기
        //#######################################################
        this.fctn_Dtl_Search = function(iBookMst_Id)
        {
        	if (this.dsCopyBookMst.rowcount == 0)
        	{
        		alert("도서를 먼저 조회해 주십시요.");
        		this.break;
        	}
        	var inds ="dsCopyBookDtl=dsCopyBookDtl";
        	var outds 	= "dsCopyBookDtl=dsCopyBookDtl";
        	var strArg 	= "BOOKMST_ID=" + nexacro.wrapQuote(iBookMst_Id);

        	this.gfn_TransactionP("select", "JSP/mk/mk111f_bookdtl.jsp", inds, outds, strArg, "", false, "S", false, this);
        }

        //#######################################################
        // 세부내역 저장하기
        //#######################################################
        this.fctn_Dtl_save = function(iBookMst_Id)
        {
        	var in_ds 	= "input=dsCopyBookDtl:U";
        	var nRow;
        	var str_url = "JSP/mk/mk111f_bookdtl_dml.jsp";

        	for (nRow=0 ; nRow<=this.dsCopyBookDtl.rowcount-1 ; nRow++)
        	{

        		this.dsCopyBookDtl.setRowType(nRow, Dataset.ROWTYPE_INSERT);
        		this.dsCopyBookDtl.setColumn(nRow, "BOOKMST_ID", iBookMst_Id);
        		this.dsCopyBookDtl.setColumn(nRow, "EMPLOYEE_ID", gv_sabun);
        	}

        	this.gfn_TransactionP("insert", str_url, in_ds, "", "", "fnDtlSaveCallback", false, "P", false, this);
        }


        //#######################################################
        // 세부사양 저장 콜백함수
        //#######################################################
        this.fnDtlSaveCallback = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}else{

        		//CD/DVD인쇄형식 복사저장(다중선택)
                this.fctn_CD_PRINT_Copy_save();
        	}
        }
        //#######################################################
        //CD/DVD인쇄형식 복사저장(다중선택)
        //#######################################################
        this.fctn_CD_PRINT_Copy_save = function()
        {
        	var strArg 	= "P_BOOKMST_ID=" +nexacro.wrapQuote(this.opener.dsBookMst.getColumn(this.opener.dsBookMst.rowposition, "BOOKMST_ID"))
        				+ "T_BOOKMST_ID="+ nexacro.wrapQuote(this.dsCopyBookDtl.getColumn(this.dsCopyBookDtl.rowposition, "BOOKMST_ID"));
        	var str_url = "JSP/mk/mk111f_bookdtl_CD_PRINT_copy_dml.jsp";

        	this.gfn_TransactionP("insert", str_url, "", "", strArg, "fnCD_PRINT_Copy_SaveCallback", false, "P", false, this);
        }

        //#######################################################
        // CD/DVD인쇄형식 복사저장 콜백함수
        //#######################################################
        this.fnCD_PRINT_Copy_SaveCallback = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}else{
        		this.btn_close_onclick();
        	}
        }

        //영업에 도서코드가 존재하는지 확인
        this.fn_sale_bookinfo_chk= function()
        {
        	var str_arg = "BOOKMST_CODE="  +nexacro.wrapQuote(this.DivBCopy.form.edBookCode.text) +
        				  " BOOKMST_YEAR=" +nexacro.wrapQuote(this.DivBCopy.form.edBookYear.text);
        	var inds 	= "dsSaleChkCnt=dsSaleChkCnt";
        	var outds 	= "dsSaleChkCnt=dsSaleChkCnt";

        	this.gfn_TransactionP("select", "JSP/mk/mk111f_sale_bookinfo_chk.jsp", inds, outds, str_arg, "", false, "S", false, this);
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close(-1);
        };

        this.MK111_CopyF_onbeforeclose = function(obj,e)
        {
        	if (this.DivBCopy.visible == true)
        	{
        		this.opener.bSearchCopySet = true;
        		this.opener.sSaveBookMstCode = this.DivBCopy.form.edBookCode.value;
        		this.opener.sSaveBookMstYear = this.DivBCopy.form.edBookYear.value;
        		this.opener.sSaveBookMstSeq = this.DivBCopy.form.edBookSeq.value;
        	}
        	/*
        	else if(this.DivSCopy.visible == true)
        	{
        		aReturn[0] = Tab_Copy.TabPage_ListCopy.Edt_sBookMstCode.Value;
        		aReturn[1] = Tab_Copy.TabPage_ListCopy.Edt_nBookMstYear.Value;
        		aReturn[2] = Tab_Copy.TabPage_ListCopy.Edt_eBookMstCode.Value;
        	}*/
        	else if(this.DivIsmCopy.visible == true)
        	{
        		this.opener.bSearchCopySet = true;
        		this.opener.sSaveBookMstCode = this.DivBCopy.form.edBookCode.value;
        		this.opener.sSaveBookMstYear = this.DivBCopy.form.edBookYear.value;
        	}
        };

        this.DivIsmCopy_btnCopy_onclick = function(obj,e)
        {
        	this.dsIsmChkCnt.clearData();
        	this.fn_ism_bookinfo_chk();

        	//제작인증이 되어있지 않으면 복사불가
        	if(nexacro.toNumber(this.dsIsmChkCnt.getColumn(this.dsIsmChkCnt.rowposition, "CHK_CNT")) == 0 ||
        	   this.dsIsmChkCnt.rowcount == 0)
        	{
        		alert("ISM 제작인증처리가 되지 않아 복사가 불가능합니다.");
        		return false;
        	}

        	var str_arg = "BOOKMST_ID="+nexacro.wrapQuote(nBookMst_Id);
        	this.gfn_TransactionP("copy", "JSP/mk/mk111f_Ism_bookinfo_copydata.jsp", "", "", str_arg, "fnIsmCopyCallBack", false, "S", false, this);
        };

        this.fnIsmCopyCallBack = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}else{
        		this.btn_close_onclick();
        	}
        }


        //제작에 ISM인증이 되어있는지 확인
        this.fn_ism_bookinfo_chk= function()
        {
        	var str_arg = "BOOKMST_CODE="  +nexacro.wrapQuote(this.DivIsmCopy.form.edBookCode.text) +
        				  " BOOKMST_YEAR=" +nexacro.wrapQuote(this.DivIsmCopy.form.edBookYear.text);
        	var inds 	= "dsIsmChkCnt=dsIsmChkCnt";
        	var outds 	= "dsIsmChkCnt=dsIsmChkCnt";

        	this.gfn_TransactionP("select", "JSP/mk/mk111f_Ism_bookinfo_chk.jsp", inds, outds, str_arg, "fnChkCallBack", false, "S", false, this);
        }

        //#######################################################
        // ISM제작인증유무결과콜백
        //#######################################################
        this.fnChkCallBack=function(Trid, ErrorCode, ErrorMsg)
        {
        	if(ErrorCode != 0 )
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}
        	else
        	{
        		//제작인증이 되어 있다면
        		if(nexacro.toNumber(this.dsIsmChkCnt.getColumn(this.dsIsmChkCnt.rowposition, "CHK_CNT")) > 0)
        		{
        			this.DivIsmCopy.form.btnCopy.set_visible(true);
        			this.DivIsmCopy.form.st_ment.set_visible(false);
        		}
        		else//제작인증이 되어 있지 않으면 복사불가
        		{
        			this.DivIsmCopy.form.st_ment.set_visible(true);
        			this.DivIsmCopy.form.btnCopy.set_visible(false);
        		}
        	}
        }

        //도서구조 복사하기 버튼
        this.DivSCopy_btnCopy_onclick = function(obj,e)
        {
        	if(this.DivSCopy.form.edBookSCode.text.length != this.DivSCopy.form.edBookSCode.maxlength)
        	{
        		alert("도서코드를 입력해 주십시요.");
        		this.DivSCopy.form.edBookSCode.setFocus();
        		return false;
        	}

        	if(this.DivSCopy.form.edBookECode.text.length != this.DivSCopy.form.edBookECode.maxlength)
        	{
        		alert("도서코드를 입력해 주십시요.");
        		this.DivSCopy.form.edBookECode.setFocus();
        		return false;
        	}

        	if(this.DivSCopy.form.edBookOYear.text.length != this.DivSCopy.form.edBookOYear.maxlength)
        	{
        		alert("원본년판을 입력해 주십시요.");
        		this.DivSCopy.form.edBookOYear.setFocus();
        		return false;
        	}

        	if(this.DivSCopy.form.edBookNYear.text.length != this.DivSCopy.form.edBookNYear.maxlength)
        	{
        		alert("적용년판을 입력해 주십시요.");
        		this.DivSCopy.form.edBookNYear.setFocus();
        		return false;
        	}

        	// 원본 도서 불러오기
        	this.fctn_Mst_List_Search("dsBookMst_sList"
        	                    , this.DivSCopy.form.edBookSCode.text
        	                    , this.DivSCopy.form.edBookECode.text
        	                    , this.DivSCopy.form.edBookOYear.text
        	                    , "0" );  // ORDER BY 적용

        	// 적용 도서 불러오기
        	this.fctn_Mst_List_Search("dsBookMst_tList"
        	                    , this.DivSCopy.form.edBookSCode.text
        	                    , this.DivSCopy.form.edBookECode.text
        	                    , this.DivSCopy.form.edBookNYear.text
        	                    , "1");  // ORDER BY 적용

        	// 원본과 적용도서의 갯수가 틀리면 복사불가능.
            if (this.dsBookMst_sList.rowcount != this.dsBookMst_tList.rowcount)
        	{
        		alert("원본과 적용도서의 갯수가 틀립니다.");
        		return false;
        	}

        	this.fctn_Mst_List_Copy(this.dsBookMst_sList.rowcount);

        	this.btnSave_OnClick();

        	// 적용 도서 불러오기
        	this.fctn_Mst_List_Search("dsBookMst_tList"
        	                    , this.DivSCopy.form.edBookSCode.text
        	                    , this.DivSCopy.form.edBookECode.text
        	                    , this.DivSCopy.form.edBookNYear.text
        	                    , "1");  // ORDER BY 적용


        };

        //#######################################################
        // 도서 구조 조회하기
        //#######################################################
        this.fctn_Mst_List_Search=function(dsName, sBookCode, eBookCode, BookYear, SIBLINGS)
        {
        	var strArg  = "";
        	var inds 	= dsName+"="+dsName;
        	var outds 	= dsName+"="+dsName;

        	strArg 	= "sBOOKMST_CODE=" + nexacro.wrapQuote( sBookCode ) +
        			  " sBOOKMST_YEAR=" + nexacro.wrapQuote( BookYear ) +
        			  " eBOOKMST_CODE=" + nexacro.wrapQuote( eBookCode ) +
        			  " eBOOKMST_YEAR=" + nexacro.wrapQuote( ) +
        			  " SETSIBLINGS=" + nexacro.wrapQuote( SIBLINGS ) ;

        	this.gfn_TransactionP("select", "JSP/mk/mk111f_bookmst_list.jsp", inds, outds, strArg, "fnListCallBack", false, "S", false, this);
        }

        this.fnListCallBack=function(Trid, ErrorCode, ErrorMsg)
        {
        	if(ErrorCode != 0 )
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}
        }

        //#######################################################
        // 도서 구조 복사하기
        //#######################################################
        this.fctn_Mst_List_Copy=function(nRowCount)
        {
        	var sPID, sOrdID, sPIDRow, tPID, tOrdID, tPIDRow;

        	for (var nRow=0 ; nRow<=nRowCount-1 ; nRow++)
        	{
        		// 부모 관계도 설정
        		sPID	= this.dsBookMst_sList.getColumn(nRow, "BOOKMST_PID");
        		if ( sPID != "" )
        		{
        			// PID의 부모 Row Index 찾기
        			sPIDRow	= this.dsBookMst_sList.findRow("BOOKMST_ID", sPID);

        			// 적용 도서의 Row Index에 의한 ID 가져오기
        			tPID 	= this.dsBookMst_tList.getColumn(sPIDRow, "BOOKMST_ID");

        			// 적용 도서의 Row Index에 의한 ID 가져오기
        			this.dsBookMst_tList.setColumn(nRow, "BOOKMST_PID", tPID);
        		}

        		// 동시발주 관계도 설정
        		sOrdID	= this.dsBookMst_sList.getColumn(nRow, "BOOKMST_ORDID");
        		if ( sOrdID != "" )
        		{
        			// OrdID의 부모 Row Index 찾기
        			sPIDRow	= this.dsBookMst_sList.findRow("BOOKMST_ID", sOrdID);

        			// 적용 도서의 Row Index에 의한 ID 가져오기
        			tPID 	=  this.dsBookMst_tList.getColumn(sPIDRow, "BOOKMST_ID");

        			// 적용 도서의 Row Index에 의한 ID 가져오기
        			this.dsBookMst_tList.setColumn(nRow, "BOOKMST_ORDID", tPID);
        		}

        		// 레벨설정
        		this.dsBookMst_tList.setColumn(nRow, "LVL", this.dsBookMst_sList.getColumn(nRow, "LVL"));
        	}
        }



        this.btnSave_onclick = function(obj,e)
        {
        	var inds 	= "input=dsBookMst_tList:U";
        	var str_url = "JSP/mk/mk111f_bookmst_copylist_dml.jsp";
        	this.gfn_TransactionP("save", str_url, inds, "", "", "fnSaveCallback", false, "P", false, this);
        };

        this.fnSaveCallback=function(Trid, ErrorCode, ErrorMsg)
        {
        	if(ErrorCode != 0 )
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}
        }

        //#######################################################
        // 동시발주 관계도 적용
        //#######################################################
        this.btnApply_onclick = function(obj,e)
        {
        	var iBookID;  			// 체크한 첫번째 항목 저장
        	var iBookMstList_ID;  	// dsBookMst_List의 도서 ID 저장
        	var bFirstID = false;   // 첫번째 항목인지 체크
        	var nFindRow;           // parent.dsBookMst에서 도서 ID Row 저장

        	for (var i = 0; i <= this.dsBookMst_tList.rowcount-1; i++)
        	{
        		if (this.dsBookMst_tList.getColumn(i, "CHK") = "1")
        		{
        		    iBookMstList_ID = this.dsBookMst_tList.getColumn(i, "BOOKMST_ID");

        			if (bFirstID == false)
        			{
        				iBookID = iBookMstList_ID;
        				bFirstID = true;
        			}
        			// dsBookMst_List에 BOOKMST_ORDID 넣기
        			this.dsBookMst_tList.setColumn(i, "BOOKMST_ORDID", iBookID);

        			// 도서 ID를 찾은 후 BOOKMST_ORDID에 같은 도서 ID 넣기
        			nFindRow = this.dsBookMst_tList.findRow("BOOKMST_ID", iBookMstList_ID);
        			if ( nFindRow != -1 )
        			{
        				this.dsBookMst_tList.setColumn(nFindRow, "BOOKMST_ORDID", iBookID);
        			}
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MK111_CopyF_onload,this);
            this.addEventHandler("onbeforeclose",this.MK111_CopyF_onbeforeclose,this);
            this.DivIsmCopy.form.btnCopy.addEventHandler("onclick",this.DivIsmCopy_btnCopy_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnApply.addEventHandler("onclick",this.btnApply_onclick,this);
            this.btnBCopy.addEventHandler("onclick",this.btnBCopy_onclick,this);
            this.btnScopy.addEventHandler("onclick",this.btnScopy_onclick,this);
            this.btnISMCopy.addEventHandler("onclick",this.btnISMCopy_onclick,this);
            this.DivBCopy.form.StMsg.addEventHandler("onclick",this.DivBCopy_StMsg_onclick,this);
            this.DivBCopy.form.btnCopy.addEventHandler("onclick",this.DivBCopy_btnCopy_onclick,this);
            this.DivSCopy.form.btnCopy.addEventHandler("onclick",this.DivSCopy_btnCopy_onclick,this);
        };
        this.loadIncludeScript("MK111_CopyF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
