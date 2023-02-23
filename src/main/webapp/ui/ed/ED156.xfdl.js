(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED156");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(550,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","10","10","530","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid lightgray");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_apply","310","7","63","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("적용");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_save","378","7","63","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_close","447","7","63","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_escapebutton("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_tempSave",null,"7","75","25","351",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("가져오기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_tempSave00",null,"7","75","25","271",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("오류검사");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("medt_custCode","90","59","8.91%","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_trimtype("both");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_custName","140","59","24.91%","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_custCode","9","59","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("업체코드");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_invoiceYM","90","155","33.82%","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06_00_00","9","155","80","30",null,null,null,null,null,null,this);
            obj.set_text("세금계산서\r\n발행년월");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","9","90","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("관련부서");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_section","90","90","34.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("dsSection");
            obj.set_codecolumn("SECTION_CODE");
            obj.set_datacolumn("SECTION_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("st_SCMst_availableTerm","9","122","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("완료일자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_acntDate","90","122","33.82%","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("st_taxRate01","9","187","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("할인율");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ck_discount","102","187","8.00%","30",null,null,null,null,null,null,this);
            obj.set_text("4.5%");
            obj.set_value("true");
            obj.set_enable("false");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","280","59","260","158",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","9","220","532","133",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","9","360","531","235",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj._setContents("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",550,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","medt_custCode","value","dsOutOrdDtl","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_custName","value","dsOutOrdDtl","OUTER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cal_invoiceYM","value","dsOutOrdDtl","OUTORDDTL_INVOICE_YM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cb_section","value","dsOutOrdMst","SECTION_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cal_acntDate","value","dsOutOrdDtl","OUTORDDTL_ACNTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","ck_discount","value","dsOutOrdMst","OUTORDMST_DISCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.btn_apply.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.Div00.form.btn_save.addEventHandler("onclick",this.Div00_btn_save_onclick,this);
            this.Div00.form.btn_close.addEventHandler("onclick",this.Div00_btn_close_onclick,this);
            this.Div00.form.btn_tempSave.addEventHandler("onclick",this.Div00_btn_tempSave_onclick,this);
            this.Div00.form.btn_tempSave00.addEventHandler("onclick",this.Div00_btn_tempSave_onclick,this);
            this.medt_custCode.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.edt_custName.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.btn_custCode.addEventHandler("onclick",this.btn_cust_code_onclick,this);
            this.cal_invoiceYM.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_06_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.cb_section.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.cb_section.addEventHandler("onitemchanged",this.cb_section_onitemchanged,this);
            this.st_SCMst_availableTerm.addEventHandler("onclick",this.Static00_onclick,this);
            this.cal_acntDate.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.st_taxRate01.addEventHandler("onclick",this.Static00_onclick,this);
            this.ck_discount.addEventHandler("onclick",this.ck_discount_onclick,this);
        };
        this.loadIncludeScript("ED156.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
