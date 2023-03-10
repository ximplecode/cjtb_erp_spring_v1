(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED141F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMnscript", this);
            obj._setContents("<ColumnInfo><Column id=\"MNSCRIPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MNSCRIPT_CLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_CG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MNSCRIPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MNSCRIPT_PERSON_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MNSCRIPT_COMPANY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MNSCRIPT_ENABLE\" type=\"STRING\" size=\"256\"/><Column id=\"MNSCRIPT_PCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSection", this);
            obj._setContents("<ColumnInfo><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_SHORTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWithHoldDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"WITHHOLDMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"WITHHOLDDTL_SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"MNSCRIPT_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"ATHR_IDENTITY\" type=\"INT\" size=\"20\"/><Column id=\"ATHR_JUMINNO2\" type=\"STRING\" size=\"13\"/><Column id=\"ATHR_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"ATHR_ABODEGB\" type=\"STRING\" size=\"1\"/><Column id=\"BOOKCODEYEAR\" type=\"STRING\" size=\"2\"/><Column id=\"MNSCRIPT_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"ACNT_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"WITHHOLDDTL_BOOKNAME\" type=\"STRING\" size=\"60\"/><Column id=\"WITHHOLDDTL_WORKCONTENT\" type=\"STRING\" size=\"60\"/><Column id=\"WITHHOLDDTL_STANDARD\" type=\"STRING\" size=\"20\"/><Column id=\"WITHHOLDDTL_WRITEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"WITHHOLDDTL_PAYDATE\" type=\"STRING\" size=\"8\"/><Column id=\"WITHHOLDDTL_TRANSFERDATE\" type=\"STRING\" size=\"8\"/><Column id=\"WITHHOLDDTL_QTY\" type=\"BIGDECIMAL\" size=\"6\"/><Column id=\"WITHHOLDDTL_UNITCOST\" type=\"INT\" size=\"9\"/><Column id=\"WITHHOLDDTL_AMOUNT\" type=\"INT\" size=\"10\"/><Column id=\"WITHHOLDDTL_PREAMOUNT\" type=\"INT\" size=\"10\"/><Column id=\"WITHHOLDDTL_INCOMETAX\" type=\"INT\" size=\"8\"/><Column id=\"WITHHOLDDTL_RESIDENTTAX\" type=\"INT\" size=\"7\"/><Column id=\"WITHHOLDDTL_TAXRATE\" type=\"BIGDECIMAL\" size=\"4\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"WITHHOLDDTL_DELETE\" type=\"STRING\" size=\"1\"/><Column id=\"WITHHOLDDTL_FINISHDATE\" type=\"STRING\" size=\"8\"/><Column id=\"WITHHOLDDTL_WITHHOLDDATE\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWithHoldMst", this);
            obj._setContents("<ColumnInfo><Column id=\"WITHHOLDMST_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"WITHHOLDMST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WITHHOLDMST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"WITHHOLD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"WITHHOLDMST_ID\" type=\"INT\" size=\"256\"/><Column id=\"WITHHOLDMST_BOOKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"WITHHOLDMST_RECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"WITHHOLDMST_PERMITE0\" type=\"STRING\" size=\"256\"/><Column id=\"WITHHOLDMST_PERMITEDATE0\" type=\"STRING\" size=\"256\"/><Column id=\"WITHHOLDMST_PERMITEUSER0\" type=\"STRING\" size=\"256\"/><Column id=\"WITHHOLDMST_PERMITE\" type=\"STRING\" size=\"256\"/><Column id=\"WITHHOLDMST_PERMITEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"WITHHOLDMST_PERMITEUSER\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"WITHHOLDMST_DELETE\" type=\"STRING\" size=\"256\"/><Column id=\"BU_DECISIONECODE\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"INT\" size=\"256\"/><Column id=\"WITHHOLDMST_PAYKIND\" type=\"STRING\" size=\"256\"/><Column id=\"WITHHOLDMST_NOTEAPRV\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"WITHHOLDMST_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REF_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBookMst", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApproval", this);
            obj._setContents("<ColumnInfo><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"F_NEXT\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKCHAK\" type=\"STRING\" size=\"256\"/><Column id=\"BUSOR\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KS_SIGN\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthor", this);
            obj._setContents("<ColumnInfo><Column id=\"ATHR_IDENTITY\" type=\"INT\" size=\"20\"/><Column id=\"ATHR_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"ATHR_JUMINNO\" type=\"STRING\" size=\"13\"/><Column id=\"ATHR_ABODEGB\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAcntDoc", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNT_NAME\" type=\"STRING\" size=\"35\"/><Column id=\"AD_KIND\" type=\"STRING\" size=\"2\"/><Column id=\"AD_ACNT_KIND\" type=\"STRING\" size=\"1\"/><Column id=\"AD_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"AD_NO\" type=\"STRING\" size=\"1\"/><Column id=\"AD_ACNT_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"AD_USEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"AD_CUST_NAME\" type=\"STRING\" size=\"35\"/><Column id=\"AD_ID\" type=\"INT\" size=\"20\"/><Column id=\"AD_DEBTOR_AMOUNT\" type=\"INT\" size=\"20\"/><Column id=\"AD_CREDIT_AMOUNT\" type=\"INT\" size=\"20\"/><Column id=\"AD_VOUCHERS\" type=\"STRING\" size=\"50\"/><Column id=\"AD_MANAGEMENT_ITEM\" type=\"STRING\" size=\"200\"/><Column id=\"AD_REMARK\" type=\"STRING\" size=\"200\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAcntDocMst", this);
            obj._setContents("<ColumnInfo><Column id=\"AD_DATENO\" type=\"STRING\" size=\"12\"/><Column id=\"AD_TYPE\" type=\"STRING\" size=\"30\"/><Column id=\"AD_WRITEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAcntDocDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNT_NAME\" type=\"STRING\" size=\"35\"/><Column id=\"AD_DEBTOR_AMOUNT\" type=\"INT\" size=\"20\"/><Column id=\"AD_CREDIT_AMOUNT\" type=\"INT\" size=\"20\"/><Column id=\"AD_REMARK\" type=\"STRING\" size=\"200\"/><Column id=\"AD_CUST_NAME\" type=\"STRING\" size=\"35\"/><Column id=\"AD_VOUCHERS\" type=\"STRING\" size=\"50\"/><Column id=\"AD_USEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"AD_MANAGEMENT_ITEM\" type=\"STRING\" size=\"200\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComp", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"1\"/><Column id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"GB\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"F_NO\" type=\"STRING\" size=\"256\"/><Column id=\"R_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_CHAMJO", this);
            obj._setContents("<ColumnInfo><Column id=\"F_FNUM\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_K", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_H", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_C", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_D", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_GW_U", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_flow_order", this);
            obj._setContents("<ColumnInfo><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"F_NEXT\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STORE\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKCHAK\" type=\"STRING\" size=\"256\"/><Column id=\"BUSOR\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANG\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_CODE2\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFormpath", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"2\"/><Column id=\"F_NUM\" type=\"INT\" size=\"3\"/><Column id=\"F_SEQ\" type=\"INT\" size=\"2\"/><Column id=\"SABUN\" type=\"STRING\" size=\"6\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"POSITION_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"POSITION_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"APPROVAL_EMP\" type=\"STRING\" size=\"6\"/><Column id=\"POSITION_CODE2\" type=\"STRING\" size=\"2\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_flow_order2", this);
            obj._setContents("<ColumnInfo><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"20\"/><Column id=\"F_SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"POSITION_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"10\"/><Column id=\"POSITION_CODE2\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileD", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fileDownTrans", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","15","10","98%","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid lightgray");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"7","63","25","231",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("??????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"7","63","25","92",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("??????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","63","25","162",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("??????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"7","63","25","25",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("??????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"7","75","25","606",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("????????????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"7","75","25","686",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("????????????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_tempchk",null,"7","90","25","767",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("??????????????????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_tempSave",null,"7","75","25","864",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("????????????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_02","15","60","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("??????????????????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_outOrderNo","Static00_02:2","60","14%","40",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","edt_outOrderNo:2","60","7.69%","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("????????????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_mstDate","Static00_01:3","60","14%","40",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","cal_mstDate:2","60","7.69%","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("????????????");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","15","102","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("?????????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06","15","145","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("????????????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_totQty","Static00_06:3","144","14%","40",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_format("#,#.#");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04","medt_totQty:2","144","7.69%","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("????????????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_totAmount","Static00_04:3","145","14%","40",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_format("#,#");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_SCMst_availableTerm","medt_totAmount:3","145","7.69%","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("????????????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mstName","Static00_00:3","102","68%","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_07","edt_mstName:5","102","7.62%","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("????????????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_name","15","187","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("??????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","btn_name:2","187","14%","40",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_jumin","edt_name:2","187","7.69%","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_text("????????????");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_juminNo","btn_jumin:4","187","14%","40",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_format("###### - #@@@@@#");
            obj.set_type("string");
            obj.set_trimtype("both");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_08","medt_juminNo:3","187","7.69%","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("????????????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_book","15","228","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("????????????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookCode","btn_book:2","229","11%","40",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_maxlength("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookYear","edt_bookCode:2","229","5.00%","40",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookName","edt_bookYear:2","229","31.8%","40",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_SCDtl_contractAmount","edt_bookName:3","229","7.62%","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("??????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_qty","st_SCDtl_contractAmount:3","229","13%","40",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_format("#,#.#");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_10","medt_qty:2","229","7.69%","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("??????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_11","15","270","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("????????? ?????????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_amount","Static00_11:2","270","13.85%","40",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_format("#,#");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_12","medt_amount:2","270","7.69%","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("??????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_section","Static00:2","60","14%","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_innerdataset("dsSection");
            obj.set_codecolumn("SECTION_CODE");
            obj.set_datacolumn("SECTION_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_13","cb_section:3","60","7.69%","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("????????????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dtl","15","434","98.00%","296",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_binddataset("dsWithHoldDtl");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"?????????\"/><Cell col=\"1\" text=\"????????????\"/><Cell col=\"2\" text=\"?????????\"/><Cell col=\"3\" text=\"??????\"/><Cell col=\"4\" text=\"??????\"/><Cell col=\"5\" text=\"?????????\"/><Cell col=\"6\" text=\"??????\"/><Cell col=\"7\" text=\"????????????\"/><Cell col=\"8\" text=\"????????????\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/></Band><Band id=\"body\"><Cell text=\"bind:ATHR_NAME\"/><Cell col=\"1\" text=\"bind:BOOKCODEYEAR\"/><Cell col=\"2\" text=\"bind:WITHHOLDDTL_BOOKNAME\"/><Cell col=\"3\" text=\"bind:WITHHOLDDTL_QTY\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:WITHHOLDDTL_UNITCOST\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:WITHHOLDDTL_AMOUNT\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:WITHHOLDDTL_WORKCONTENT\"/><Cell col=\"7\" text=\"bind:WITHHOLDDTL_PAYDATE\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"8\" text=\"bind:WITHHOLDDTL_TRANSFERDATE\" edittype=\"date\" displaytype=\"date\"/><Cell col=\"9\" text=\"bind:WITHHOLDDTL_TAXRATE\"/><Cell col=\"10\" text=\"bind:WITHHOLDDTL_INCOMETAX\"/><Cell col=\"11\" text=\"bind:WITHHOLDDTL_RESIDENTTAX\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_mnScript","Static00_08:2","187","14%","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_innerdataset("dsMnscript");
            obj.set_codecolumn("MNSCRIPT_CODE");
            obj.set_datacolumn("MNSCRIPT_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_permite","Static00_13:18","60","6.62%","40",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("???????????????");
            obj.set_value("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_receipDate","Static00_07:3","102","13.85%","40",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_contractDate","st_SCMst_availableTerm:2","144","14%","40",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_fixAthr","cal_contractDate:84","144","8.85%","40",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("?????? ????????????");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_fixBook","chk_fixAthr:45","145","10.77%","40",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("???????????? ????????????");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_unitCost","Static00_10:3","229","13%","40",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_format("#,#");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_taxRate","Static00_12:3","270","13.85%","40",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_format("#.###");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_14","medt_taxRate:3","270","7.69%","40",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("??????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_workContent","Static00_14:3","270","46.38%","40",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_payDate","15","312","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("????????????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_payDate","btn_payDate:2","312","14%","40",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_transferDate","cal_payDate:2","313","7.69%","40",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("????????????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_transferDate","btn_transferDate:2","312","14%","40",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_finishDate","cal_transferDate:2","313","7.69%","40",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("???????????????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_finishDate","btn_finishDate:3","313","14.00%","40",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_withholeDate","cal_finishDate:4","313","7.69%","40",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("??????????????????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_withholeDate","btn_withholeDate:2","312","14%","40",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","cal_withholeDate:18","316","7.85%","33",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("??????????????????");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ck_open","156","22","78","22",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("????????????");
            obj.set_value("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_09","cb_mnScript:3","185","7.69%","40",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("??????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ref","Static00_09:3","186","24.00%","40",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_15","15","354","100","70",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("????????????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_file","Static00_15:2","354","38.77%","70",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_binddataset("ds_file");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"495\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:GB\"/><Cell col=\"1\" text=\"bind:F_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file","grd_file:2","362","2.62%","25",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #ffffff");
            obj.set_border("0px none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Fdelete","grd_file:0","396","2.92%","24",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_background("url(\'Img::btn_TF_Close_O.png\') no-repeat center center #ffffff");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cham","btn_file:3","355","7.69%","70",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("????????????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cham","btn_cham:4","355","40.46%","70",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_binddataset("DS_CHAMJO");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"111\"/><Column size=\"356\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:CO_SEQ\"/><Cell col=\"1\" text=\"bind:TITLE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pay","chk_permite:21","60","6.15%","36",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("????????????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","321","536","760","129",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_text("PopupDiv00");
            obj.set_border("1px solid");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","1","759","125",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsAcntDoc");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"????????????\"/><Cell col=\"1\" text=\"????????????\"/><Cell col=\"2\" text=\"????????????\"/><Cell col=\"3\" text=\"????????????\"/><Cell col=\"4\" text=\"????????????\"/></Band><Band id=\"body\"><Cell text=\"bind:ACNT_NAME\"/><Cell col=\"1\" text=\"bind:AD_DEBTOR_AMOUNT\"/><Cell col=\"2\" text=\"bind:AD_CREDIT_AMOUNT\"/><Cell col=\"3\" text=\"bind:AD_VOUCHERS\"/><Cell col=\"4\" text=\"bind:AD_MANAGEMENT_ITEM\"/></Band></Format></Formats>");
            this.PopupDiv00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,750,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","cb_section","value","dsWithHoldMst","SECTION_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_outOrderNo","value","dsWithHoldMst","WITHHOLD_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cb_mnScript","value","dsWithHoldDtl","MNSCRIPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_mstName","value","dsWithHoldMst","WITHHOLDMST_BOOKNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","medt_juminNo","value","dsWithHoldDtl","ATHR_JUMINNO2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_name","value","dsWithHoldDtl","ATHR_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","chk_permite","value","dsWithHoldMst","WITHHOLDMST_PERMITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","ck_open","value","dsWithHoldMst","OPEN_CHECK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cal_mstDate","value","dsWithHoldMst","WITHHOLDMST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","cal_receipDate","value","dsWithHoldMst","WITHHOLDMST_RECEIPTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","cal_contractDate","value","dsWithHoldDtl","WITHHOLDDTL_WRITEDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edt_ref","value","dsWithHoldMst","REF_USER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edt_bookCode","value","dsWithHoldDtl","BOOKMST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edt_bookYear","value","dsWithHoldDtl","BOOKMST_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edt_bookName","value","dsWithHoldDtl","WITHHOLDDTL_BOOKNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","medt_qty","value","dsWithHoldDtl","WITHHOLDDTL_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","medt_unitCost","value","dsWithHoldDtl","WITHHOLDDTL_UNITCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","medt_amount","value","dsWithHoldDtl","WITHHOLDDTL_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","medt_taxRate","value","dsWithHoldDtl","WITHHOLDDTL_TAXRATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","edt_workContent","value","dsWithHoldDtl","WITHHOLDDTL_WORKCONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","cal_payDate","value","dsWithHoldDtl","WITHHOLDDTL_PAYDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","cal_transferDate","value","dsWithHoldDtl","WITHHOLDDTL_TRANSFERDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","cal_finishDate","value","dsWithHoldDtl","WITHHOLDDTL_FINISHDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","cal_withholeDate","value","dsWithHoldDtl","WITHHOLDDTL_WITHHOLDDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","CheckBox02","value","dsWithHoldMst","WITHHOLDMST_NOTEAPRV");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ED141F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED141F.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("ED141F.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("ED141F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var gv_urlFile = nexacro.getApplication().gv_urlNext;
        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;

        var gds_userinfo = nexacro.getApplication().gds_userinfo;
        var sSection_Code = nexacro.getApplication().gds_userinfo.getColumn(0, "BUSECD");
        var sSection_Name = nexacro.getApplication().gds_userinfo.getColumn(0, "BUSENM");
        var sSection_ShortCode = nexacro.getApplication().gds_userinfo.getColumn(0, "SHORTCODE");
        var sSection_ShortName = nexacro.getApplication().gds_userinfo.getColumn(0, "SHORTNAME");
        var sSabun = nexacro.getApplication().gds_userinfo.getColumn(0, "SABUN");
        var sName = nexacro.getApplication().gds_userinfo.getColumn(0, "NAME");

        var sSelect, iI_Flow_id, section_value, temp_chk, setAmountCode;

        // ???????????? ?????? ???????????? ??????
        var sFixBookCode, sFixBookYear, sFixBookName, sFixAthrName, sFixAthrJuminNo, sFixBookSeq, sFixBookId;
        var sFixAthrName, sFixOuterName, sFixAthrIdentity, sFixAthrJuminno2, sFixAthrAbodegb, sFixCustGubn, sFixCustCode;

        this.ED141F_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", "ed_03_101");
        	sSelect = nexacro.getApplication().gds_menu.getColumn(nRow, "UM_SELECT");
        	sSelect = Eco.decode(sSelect, null, "1", sSelect);

        	/*????????? ?????? ?????? ??????  ?????? ?????? 50 */

        	var strArg = "ORDER=0";
        	this.gfn_TransactionP("search","JSP/ed/mnscript_select.jsp", "dsMnscript=dsMnscript", "dsMnscript=dsMnscript", strArg, "fnMnscriptCallback", false, "P", false, this);	//????????????

        	strArg = "SECTION_CODE=" + sSection_Code
        		   + " COMPETENCE=A"; //+ Eco.decode(sSelect, "1", "P", "2", "P", "A");
        	this.gfn_TransactionP("search","JSP/ed/section_select2.jsp", "dsSection=dsSection", "dsSection=dsSection", strArg, "fnSectionCallback", false, "P", false, this);	//??????

        	strArg = "Section_Code=" + sSection_Code;
        	this.gfn_TransactionP("search","JSP/ed/paykind_select.jsp", "", "", strArg, "fnSectionPayCallback", false, "P", false, this);	//????????? ????????????
        };

        this.fnMnscriptCallback = function(scvid, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(svcid + "::" + errMsg);
        	else
        		this.dsMnscript.filter("MNSCRIPT_CODE='01'||MNSCRIPT_CODE='02'||MNSCRIPT_CODE='29'||MNSCRIPT_PCODE='29'||MNSCRIPT_CODE='36'");
        }

        this.fnSectionCallback = function(svcid, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(svcid + "::" + errMsg);
        	else
        		this.dsSection.rowposition = this.dsSection.findRow("SECTION_CODE", sSection_Code);
        };

        this.fnSectionPayCallback = function(svcId, errCode, errMsg, gv_rt_value)
        {
        	section_value =nexacro.getApplication().gv_rt_value;

        	if(section_value > 0)	//????????????
        	{
        		this.btn_pay.set_visible(true);
        		this.btn_pay.text = "????????????";
        		this.dsWithHoldMst.addRow();
        		this.dsWithHoldMst.setColumn(this.dsWithHoldMst.rowposition, "WITHHOLDMST_PAYKIND", "0");
        		this.dsWithHoldMst.setColumn(this.dsWithHoldMst.rowposition, "WITHHOLDMST_NOTEAPRV", "0");
        	}
        	else	//????????????
        	{
        		this.dsWithHoldMst.addRow();
        		this.dsWithHoldMst.setColumn(this.dsWithHoldMst.rowposition, "WITHHOLDMST_PAYKIND", "1");
        		this.dsWithHoldMst.setColumn(this.dsWithHoldMst.rowposition, "WITHHOLDMST_NOTEAPRV", "0");
        	}
        }

        //MST ?????????
        this.dsWithHoldMst_onrowsetchanged = function(obj,e)
        {
        	var d = new Date();
        	var today = Eco.date.getMaskFormatString(d, "yyyyMMdd");

        	if(e.reason == 12 ) //dataset??? ??????????????? ???
        	{
        		obj.setColumn(e.row, "WITHHOLDMST_DATE", today);
        		obj.setColumn(e.row, "WITHHOLDMST_KIND", "1");
        		obj.setColumn(e.row, "SECTION_CODE", sSection_Code);
        		obj.setColumn(e.row, "SECTION_NAME", sSection_Name);
        		obj.setColumn(e.row, "WITHHOLDMST_RECEIPTDATE", null);
        		obj.setColumn(e.row, "WITHHOLDMST_PERMITEUSER0", null);
        		obj.setColumn(e.row, "WITHHOLDMST_PERMITEDATE0", null);
        		obj.setColumn(e.row, "WITHHOLDMST_PERMITE0", "0");
        		obj.setColumn(e.row, "WITHHOLDMST_PERMITEUSER", null);
        		obj.setColumn(e.row, "WITHHOLDMST_PERMITEUSER", null);
        		obj.setColumn(e.row, "WITHHOLDMST_PERMITE", "0");
        		obj.setColumn(e.row, "EMPLOYEE_ID", sSabun);
        		obj.setColumn(e.row, "EMPLOYEE_NAME", sName);
        		obj.setColumn(e.row, "I_FLOW_ID", null);
        		obj.setColumn(e.row, "WITHHOLDMST_PAYKIND", "0");
        		obj.setColumn(e.row, "WITHHOLDMST_NOTEAPRV", "0");
        		obj.setColumn(e.row, "OPEN_CHECK", "1");
        		obj.setColumn(e.row, "REF_USER", null);

        		if(obj.getColumn(e.row, "WITHHOLDMST_DATE") >= "20180820")
        			this.ck_open.set_visible(true);

        		this.edt_outOrderNo.text = obj.getColumn(e.row, "WITHHOLDMST_DATE") + "-" + obj.getColumn(e.row, "WITHHOLDMST_NO");

        		this.lfn_I_FLOW_FOMPAHT2_LOAD(sSabun, this.dsFormpath);	//???????????? ????????????

        		this.dsWithHoldDtl.clearData();
        		this.dsWithHoldDtl.addRow();
        	}
        };

        //DTL ?????????
        this.dsWithHoldDtl_onrowsetchanged = function(obj,e)
        {
        	this.dsWithHoldDtl.setColumn(e.row, "WITHHOLDDTL_SEQ", (this.dsWithHoldDtl.rowcount + 1).toString().padLeft(2,"0"));

        	this.dsWithHoldDtl.setColumn(e.row, "MNSCRIPT_CODE", "01");
        	this.dsWithHoldDtl.setColumn(e.row, "BOOKMST_CODE", sFixBookCode);
        	this.dsWithHoldDtl.setColumn(e.row, "BOOKMST_YEAR", sFixBookYear);
        	this.dsWithHoldDtl.setColumn(e.row, "BOOKMST_SEQ", sFixBookSeq);
        	this.dsWithHoldDtl.setColumn(e.row, "BOOKMST_ID", sFixBookId);
        	this.dsWithHoldDtl.setColumn(e.row, "WITHHOLDDTL_BOOKNAME", sFixBookName);
        	this.dsWithHoldDtl.setColumn(e.row, "WITHHOLDDTL_WORKCONTENT", null);
        	this.dsWithHoldDtl.setColumn(e.row, "WITHHOLDDTL_STANDARD", null);

        	if(this.dsWithHoldDtl.rowcount == 0)
        		var wrDate = null;
        	else
        		wrDate = this.dsWithHoldDtl.getColumn(e.row-1, "WITHHOLDDTL_WRITEDATE");

        	this.dsWithHoldDtl.setColumn(e.row, "WITHHOLDDTL_WRITEDATE", wrDate);

        	this.dsWithHoldDtl.setColumn(e.row, "WITHHOLDDTL_PAYDATE", null);
        	this.dsWithHoldDtl.setColumn(e.row, "WITHHOLDDTL_TRANSFERDATE", null);
        	this.dsWithHoldDtl.setColumn(e.row, "WITHHOLDDTL_FINISHDATE", null);

        	this.dsWithHoldDtl.setColumn(e.row, "ATHR_NAME", sFixAthrName);
        	this.dsWithHoldDtl.setColumn(e.row, "OUTER_NAME", sFixOuterName);
        	this.dsWithHoldDtl.setColumn(e.row, "ATHR_IDENTITY", sFixAthrIdentity);
        	this.dsWithHoldDtl.setColumn(e.row, "ATHR_JUMINNO2", sFixAthrJuminno2);
        	this.dsWithHoldDtl.setColumn(e.row, "ATHR_ABODEGB", sFixAthrAbodegb);
        	this.dsWithHoldDtl.setColumn(e.row, "CUST_GUBN", sFixCustGubn);
        	this.dsWithHoldDtl.setColumn(e.row, "CUST_CODE", sFixCustCode);

        	this.dsWithHoldDtl.setColumn(e.row, "EMPLOYEE_ID", sSabun);
        	this.dsWithHoldDtl.setColumn(e.row, "WITHHOLDDTL_QTY", 0);
        	this.dsWithHoldDtl.setColumn(e.row, "ACNT_CODE", "11505");
        	this.dsWithHoldDtl.setColumn(e.row, "WITHHOLDDTL_UNITCOST", 0);
        	this.dsWithHoldDtl.setColumn(e.row, "WITHHOLDDTL_AMOUNT", 0);
        	this.dsWithHoldDtl.setColumn(e.row, "WITHHOLDDTL_PREAMOUNT", 0);
        	this.dsWithHoldDtl.setColumn(e.row, "WITHHOLDDTL_INCOMETAX", 0);
        	this.dsWithHoldDtl.setColumn(e.row, "WITHHOLDDTL_RESIDENTTAX", 0);
        	this.dsWithHoldDtl.setColumn(e.row, "WITHHOLDDTL_TAXRATE", 3);
        	this.dsWithHoldDtl.setColumn(e.row, "WITHHOLDDTL_DELETE", " ");

        	//this.DS_CHAMJO.clearData();
        	this.edt_bookName.setFocus();
        };

        //??????????????????
        this.fn_approval_chk = function()
        {
        	var chkRow = this.dsApproval.findRow("SABUN", sSabun); //????????? ???????????? ??????

        	//??????????????? ?????? ?????? ????????? ???????????? ???????????? ???????????? ??????????????? ????????? ?????? ???????????? ????????? ??????
        	if( (this.dsApproval.rowcount >0 ) && ( (this.dsWithHoldMst.getColumn(this.dsWithHoldMst.rowposition, "EMPLOYEE_ID") != sSabun) || (chkRow == -1) || (this.dsApproval.getColumn(chkRow+1, "STATUS") == 1) ) )
        	{
        		alert("????????? ???????????? ???????????? ???????????? ?????? ????????? ?????? ??? ?????? ??? ??? ????????????.");
        		return false;
        	}
        	else
        		return true;
        }

        //??????????????????
        this.Div00_btn_tempchk_onclick = function(obj,e)
        {
        	if(this.dsWithHoldMst.getColumn(this.dsWithHoldMst.rowposition, "EMPLOYEE_ID") != sSabun)
        	{
        		alert("????????? ?????? ????????? ??????????????? ????????? ??? ????????????.");
        		return false;
        	}

        	var objParam = {p_fnum : 61,
        					p_ffnum : 7,
        					p_EMPLOYEE_ID : this.dsWithHoldMst.getColumn(this.dsWithHoldMst.rowposition, "EMPLOYEE_ID"),
        					P_SECTION_CODE : sSection_Code };

        	this.lfn_showModal("popupTemp", objParam, "gw::GW121.xfdl", "fnFormpathCallback", this, '', '', 670, 750); //GW121_2
        };

        this.fnFormpathCallback = function(svcId)
        {
        	if(this.fn_approval_chk())
        	{
        		if(section_value > 0)
        		{
        			if(this.dsWithHoldMst.getColumn(this.dsWithHoldMst.rowposition, "WITHHOLDMST_PAYKIND") == "1")
        			{	//????????? + ????????????
        				setAmountCode = this.lfn_Set_Approval( this.dsWithHoldMst.getColumn(this.dsWithHoldMst.rowposition, "I_FLOW_ID")
        												, this.dsWithHoldDtl.getSum("WITHHOLDDTL_AMOUNT")
        												, setAmountCode
        												, sSabun == gds_userinfo.getColumn(0, "DEPARTMENT_MANAGER")
        												, this.dsWithHoldMst.getColumn(this.dsWithHoldMst.rowposition, "WITHHOLDMST_NOTEAPRV")
        												, ""
        												, sSection_Code
        												, this.dsFormpath, this.ds_flow_order, this.ds_flow_order2);

        			}else
        			{	//????????? + ????????????
        				setAmountCode = this.lfn_I_FLOW_ORDER2_SAVE_AMOUNT_Edit(this.dsWithHoldMst.getColumn(this.dsWithHoldMst.rowposition, "I_FLOW_ID")
        												, this.dsWithHoldDtl.getSum("WITHHOLDDTL_AMOUNT")
        												, setAmountCode
        												, sSabun == gds_userinfo.getColumn(0, "DEPARTMENT_MANAGER")
        												, this.dsWithHoldMst.getColumn(this.dsWithHoldMst.rowposition, "WITHHOLDMST_NOTEAPRV")
        												, ""
        												, sSection_Code
        												, this.dsFormpath, this.ds_flow_order, this.ds_flow_order2);
        			}
        		}
        		else
        		{
        			//??????????????? + ????????????
        			setAmountCode = this.lfn_Set_Approval( this.dsWithHoldMst.getColumn(this.dsWithHoldMst.rowposition, "I_FLOW_ID")
        												, this.dsWithHoldDtl.getSum("WITHHOLDDTL_AMOUNT")
        												, setAmountCode
        												, sSabun == gds_userinfo.getColumn(0, "DEPARTMENT_MANAGER")
        												, this.dsWithHoldMst.getColumn(this.dsWithHoldMst.rowposition, "WITHHOLDMST_NOTEAPRV")
        												, ""
        												, sSection_Code
        												, this.dsFormpath, this.ds_flow_order, this.ds_flow_order2);

        		}
        	}
        }

        //????????????
        this.Div00_btn_new_onclick = function(obj,e)
        {
        	//if(this.dsWithHoldMst.rowcount > 0)
        	//	this.Div00_btn_save_onclick();

        	this.dsWithHoldMst.clearData();
        	this.dsWithHoldDtl.clearData();
        	this.dsFormpath.clearData();
        	this.ds_file.clearData();
        	this.DS_CHAMJO.clearData();
        	this.dsBookMst.clearData();

        	this.dsWithHoldMst.addRow();
        	this.dsWithHoldDtl.addRow();

        	if(section_value > 0)	//????????????
        	{
        		this.btn_pay.set_visible(true);
        		this.dsWithHoldMst.addRow();
        		this.dsWithHoldMst.setColumn(this.dsWithHoldMst.rowposition, "WITHHOLDMST_PAYKIND", "0");
        		this.dsWithHoldMst.setColumn(this.dsWithHoldMst.rowposition, "WITHHOLDMST_NOTEAPRV", "0");
        	}
        	else	//????????????
        	{
        		this.dsWithHoldMst.addRow();
        		this.dsWithHoldMst.setColumn(this.dsWithHoldMst.rowposition, "WITHHOLDMST_PAYKIND", "1");
        		this.dsWithHoldMst.setColumn(this.dsWithHoldMst.rowposition, "WITHHOLDMST_NOTEAPRV", "0");
        	}

        	this.cal_contractDate.setFocus();
        };

        //????????????
        this.Div00_btn_add_onclick = function(obj,e)
        {
        	var nRow = this.dsWithHoldDtl.rowposition;

        	if(this.chk_fixBook.value == true)
        	{
        		sFixBookCode = this.dsWithHoldDtl.getColumn(nRow, "BOOKMST_CODE");
        		sFixBookYear = this.dsWithHoldDtl.getColumn(nRow, "BOOKMST_YEAR");
        		sFixBookSeq  = this.dsWithHoldDtl.getColumn(nRow, "BOOKMST_SEQ");
        		sFixBookId   = this.dsWithHoldDtl.getColumn(nRow, "BOOKMST_ID");
        		sFixBookName = this.dsWithHoldDtl.getColumn(nRow, "WITHHOLDDTL_BOOKNAME");
        	}

        	if(this.chk_fixAthr.value == true)
        	{
        		sFixAthrName     = this.dsWithHoldDtl.getColumn(nRow, "ATHR_NAME");
        	    sFixOuterName    = this.dsWithHoldDtl.getColumn(nRow, "OUTER_NAME");
        	    sFixAthrIdentity = this.dsWithHoldDtl.getColumn(nRow, "ATHR_IDENTITY");
        	    sFixAthrJuminno2 = this.dsWithHoldDtl.getColumn(nRow, "ATHR_JUMINNO2");
        	    sFixAthrAbodegb  = this.dsWithHoldDtl.getColumn(nRow, "ATHR_ABODEGB");
        	    sFixCustGubn     = this.dsWithHoldDtl.getColumn(nRow, "CUST_GUBN");
         	    sFixCustCode     = this.dsWithHoldDtl.getColumn(nRow, "CUST_CODE");
        	}

        	this.dsWithHoldDtl.addRow();
        };

        //??????
        this.Div00_btn_search_onclick = function(obj,e)
        {
        	var objParam = {dsParam1:this.dsWithHoldMst,
        					dsParam2:this.dsWithHoldDtl,
        					dsParam3:this.dsSection,
        					dsParam4:this.dsFormpath,
        					pSabun:sSabun,
        					pSelect:sSelect,
        					pMstKind:"1"}; //popup ???????????? ????????? ???
        	this.lfn_showModal("popupSearch", objParam, "ed::ED140_SearchF.xfdl", "popupCallback", this, 10, 58, 400, 390);
        };

        this.popupCallback = function(svcId, rt_value)
        {
        	this.dsWithHoldDtl.filter("WITHHOLDDTL_DELETE !='D'");

        	if(this.dsWithHoldMst.getColumn(this.dsWithHoldMst.rowposition, "WITHHOLDMST_PAYKIND") == 0)
        		this.btn_pay.set_text("????????????");
        	else
        		this.btn_pay.set_text("????????????");

        	this.fn_getFiles(rt_value);
        	this.fn_getChamjo(rt_value);
        	this.lfn_Approval_Select(rt_value, this.dsApproval, this.DS_GW_U, this.DS_GW_K, this.DS_GW_H, this.DS_GW_C, this.DS_GW_D);	//???????????? ?????? ??????
        }

        //???????????? ????????????
        this.fn_getFiles = function (iI_Flow_id)
        {
        	if(iI_Flow_id != null)
        	{
        		var strUrl = "JSP/gw/SQL_GW130_FList_v3.jsp";
        		var inds = "ds_file=ds_file";
        		var outds = "ds_file=ds_file";
        		var strArg = "i_flow_id=" + iI_Flow_id;

        		this.gfn_TransactionP("select", strUrl, inds, outds, strArg, "", false, "P", false, this);
        	}
        };

        //???????????? ????????????
        this.fn_getChamjo = function (iI_Flow_id)
        {
        	if(iI_Flow_id != null)
        	{
        		var strUrl = "JSP/gw/SQL_GW110_Cham.jsp";
        		var inds = "DS_CHAMJO=DS_CHAMJO";
        		var outds = "DS_CHAMJO=DS_CHAMJO";

        		var strArg = "i_flow_id=" + iI_Flow_id;
        			strArg += " gubun='01'";

        		this.gfn_TransactionP("select", strUrl, inds, outds, strArg, "", false, "P", false, this);
        	}
        };

        //mst ?????? ??? ????????? ?????? ??????
        this.dsWithHoldMst_onrowposchanged = function(obj,e)
        {
        	this.fn_compEnable(e.row);	//???????????? ?????????
        	this.fn_compView(sSelect >= 5);	//????????? ???????????? (5 = 1??? ?????????)

        	this.chk_permite.set_enable(sSelect >= 5);
        };

        //???????????? ?????????
        this.fn_compEnable = function(nRow)
        {
        	var setValue = true;

        	if(sSelect < 6) //2??????????????? ?????????
        		setValue = (this.dsWithHoldMst.getColumn(nRow, "WITHHOLDMST_PERMITE") != "1");

        	this.Div00.form.btn_tempchk.set_enable(setValue);
        	this.Div00.form.btn_add.set_enable(setValue);
        	this.Div00.form.btn_save.set_enable(setValue);
        	this.Div00.form.btn_delete.set_enable(setValue);

        	this.btn_name.set_enable(setValue);
        	this.btn_jumin.set_enable(setValue);
        	this.cb_mnScript.set_enable(setValue);
        	this.btn_book.set_enable(setValue);
        	this.edt_bookCode.set_enable(setValue);
        	this.edt_bookYear.set_enable(setValue);
        	this.edt_workContent.set_enable(setValue);
        	this.medt_qty.set_enable(setValue);
        	this.medt_unitCost.set_enable(setValue);
        	this.edt_ref.set_enable(setValue);

        	//????????? 2??? ????????? ????????????, ????????????, ???????????? ?????? ??????
        	if(sSelect >= 5)
        	{
        		this.cb_mnScript.set_enable(setValue);
        		this.btn_book.set_enable(setValue);
        		this.edt_bookCode.set_enable(setValue);
        		this.edt_bookYear.set_enable(setValue);
        		this.edt_workContent.set_enable(setValue);
        	}

        }

        //????????? ????????????
        this.fn_compView = function(setValue)
        {
        	this.chk_permite.set_enable(setValue);
        	this.cal_receipDate.set_enable(setValue);
        	this.btn_payDate.set_enable(setValue);
        	this.cal_payDate.set_enable(setValue);
        	this.btn_transferDate.set_enable(setValue);
        	this.cal_transferDate.set_enable(setValue);

        	this.btn_finishDate.set_enable(setValue);
        	this.cal_finishDate.set_enable(setValue);
        	this.btn_finishDate.set_visible(setValue);
        	this.cal_finishDate.set_visible(setValue);

        	this.btn_withholeDate.set_enable(setValue);
        	this.cal_withholeDate.set_enable(setValue);
        	this.btn_withholeDate.set_visible(setValue);
        	this.cal_withholeDate.set_visible(setValue);

        	this.medt_taxRate.set_enable(setValue);
        }

        //??????
        this.Div00_btn_save_onclick = function(obj,e)
        {
        	if(this.dsFormpath.getColumn(0, "APPROVAL_EMP") != sSabun)
        	{
        		alert("???????????? ????????? ??????????????? ????????????. ?????? ??? ????????? ????????? ????????????.");
        		return false;
        	}
        	temp_chk = "N";
        	this.fn_save();
        };

        //????????????
        this.Div00_btn_tempSave_onclick = function(obj,e)
        {
        	temp_chk="Y";
        	this.fn_save();
        };

        //??????
        this.fn_save = function()
        {
        	if(temp_chk != "N" && sSection_Code != "2F000")
        		alert("???????????? ????????? ?????? ????????? ?????? ?????? ???????????????.\n ??????????????? ?????? ????????? ???????????????. \n?????? ?????? ??? ??? ????????? ????????? ?????? ????????? ?????????.");

        	if((temp_chk == "N") && (this.ds_file.rowcount + this.DS_CHAMJO.rowcount <= 0))
        	{
        		alert("???????????? ?????? ??????????????? ????????? ?????????.");
        		return false;
        	}

        	var rowType = this.dsWithHoldMst.getRowType(this.dsWithHoldMst.rowposition);

        	if(rowType == 2 || rowType == 4)
        	{
        		if(this.fn_mst_save(rowType))
        			this.fn_dtl_save();
        	}else
        		this.fn_dtl_save();
        }

        //mst ??????
        this.fn_mst_save = function(rowType)
        {
        	var nRow = this.dsWithHoldMst.rowposition;
        	var setSave = true;

        	if((rowType != "delete") && (this.fn_mst_rowCheck(nRow) == false))
        	{
        		setSave = false;
        		return false;
        	}

        	if(setSave)
        	{
        		var str_url = "JSP/ed/ed140f_withhold_mst_dml.jsp";
        		var inds = "dsWithHoldMst=dsWithHoldMst:U";
        		this.gfn_TransactionP(rowType ,str_url, inds, "", "", "fnMStSaveCallback", false, "P", false, this);

        		return true;
        	}
        };

        this.fnMStSaveCallback = function(svcId, errCode, errMsg, gv_rt_mst_id, gv_rt_mst_no, gv_rt_i_flow_id)
        {
        	var open_i_flow_id, rt_WITHHOLDMST_ID, rt_WITHHOLDMST_NO;
        	var nRow = this.dsWithHoldMst.rowposition;

        	if(errCode != 0)
        		alert(errMsg);
        	else if(svcId != "delete")
        	{
        		if(svcId == 2)
        		{
        			rt_WITHHOLDMST_ID =nexacro.getApplication().gv_rt_mst_id;
        			rt_WITHHOLDMST_NO = nexacro.getApplication().gv_rt_mst_no;
        			open_i_flow_id = nexacro.getApplication().gv_rt_i_flow_id;

        			this.dsWithHoldMst.setColumn(nRow, "WITHHOLDMST_ID", rt_WITHHOLDMST_ID);
        			this.dsWithHoldMst.setColumn(nRow, "WITHHOLDMST_NO", rt_WITHHOLDMST_NO);
        			this.dsWithHoldMst.setColumn(nRow, "I_FLOW_ID", open_i_flow_id);

        			this.dsWithHoldMst.setColumn(nRow, "WITHHOLD_NO",
        										this.dsWithHoldMst.getColumn(nRow, "WITHHOLDMST_DATE") + "-" + rt_WITHHOLDMST_NO);

        			this.dsWithHoldMst.setRowType(nRow, 1);

        		}else
        		{
        			open_i_flow_id = this.dsWithHoldMst.getColumn(nRow, "I_FLOW_ID");
        			rt_WITHHOLDMST_ID = this.dsWithHoldMst.getColumn(nRow, "WITHHOLDMST_ID");
        		}

        		if(this.ck_open.visible == true)
        		{
        			if(this.ck_open.value == true)
        				strArg = "i_flow_id=" + open_i_flow_id  + " open_check=1";
        			else
        				strArg = "i_flow_id=" + open_i_flow_id  + " open_check=0";

        			this.gfn_TransactionP("open_chk", "JSP/gw/SQL_GW110_OPEN_CHECK.jsp", "", "", strArg, "", false, "P", false, this);
        		}

        		if(this.ds_file.rowcount > 0)				//???????????? ??????
        			this.fn_upload_file(open_i_flow_id);

        		if(this.DS_CHAMJO.rowcount > 0)				//???????????? ??????
        			this.fn_upload_chamjo(open_i_flow_id);

        		this.fn_mstPay_save(svcId, rt_WITHHOLDMST_ID);	//???????????? ??????
        	}
        };

        //mst checkRow
        this.fn_mst_rowCheck = function (nRow)
        {
        	if (nRow == -1)
        		return true;

        	if (this.dsWithHoldMst.getColumn(nRow, "WITHHOLDMST_DATE") == null)
        	{
        		alert("??????????????? ????????? ????????????.");
        		this.cal_mstDate.setFocus();
        		return false;
        	}

        	// ??????????????? ????????? ?????? ???????????? ?????? ????????? ?????????
        	// ?????? ????????? ?????? ????????? ?????????.
        	if ((this.dsWithHoldMst.getColumn(nRow, "WITHHOLDMST_BOOKNAME") == null) &&
        		(this.dsWithHoldMst.getColumn(nRow, "BOOKMST_CODE") == "0000000000"))
        	{
        		alert("???????????? ????????? ????????????.");
        		this.edt_bookName.SetFocus();
        		return false;
        	}

        	if (sSection_Code == "99000" || gds_userinfo.getColumn(0,"BIRTH_DT") == "")
        	{
        		if(this.dsWithHoldMst.getColumn(nRow, "REF_USER") == null|| this.dsWithHoldMst.getColumn(nRow, "REF_USER") == "")
        		{
        			alert("?????????????????? ?????? ??????????????? ?????? ???????????? ????????? ????????????.");
        			this.edt_ref.SetFocus();
        			return false;
        		}
        	}

        	if ((this.dsWithHoldMst.getRowType(nRow) == 2) && (this.dsFormpath.rowcount <= 0))
        	{
        		alert("??????????????? ??????????????????.");
        		this.Div00_btn_tempchk_onclick();
        		return false;
        	}

        	return true;
        };

        //??????????????????
        this.btn_file_onclick = function(obj,e)
        {
        	var dt = new Date();
        	var vFileSubUrl = "attachedfile/"+Eco.date.getMaskFormatString(dt, "yyyy")+"/"+Eco.date.getMaskFormatString(dt, "MM");
        	this.lfn_FileUpload(this.fileD, this.fileUpTrans, this.ds_file, vFileSubUrl);
        };

        //???????????? ??????
        this.fn_upload_file = function(i_flow_id)
        {
        	var dt = new Date();
        	var vFileSubUrl = "attachedfile/"+Eco.date.getMaskFormatString(dt, "yyyy")+"/"+Eco.date.getMaskFormatString(dt, "MM");
        	this.lfn_FileUpload_Save(gv_urlFile + "/JSP", i_flow_id, vFileSubUrl);
        };

        //???????????? ????????????
        this.Grid00_oncellclick = function(obj,e)
        {
        	if(e.cell == 1)
        		this.lfn_FileDownload(this.fileDownTrans ,this.ds_file, gv_urlFile, e.row);
        };

        //????????????
        this.btn_cham_onclick = function(obj,e)
        {
        	this.lfn_showModal("popupChamjo", "", "gw::GW140.xfdl", "popupCallBack", this, '', '', 530, 570);
        };

        //???????????? ??????
        this.fn_upload_chamjo = function(i_flow_id)
        {
        	if(i_flow_id != "" || i_flow_id != null)
        	{
        		var inds = "DS_CHAMJO=DS_CHAMJO:A";
        		var strArg = "I_FLOW_ID=" + i_flow_id;

        		this.gfn_TransactionP("search","JSP/ed/ed150f_uploaddoc_dml.jsp", inds, "", strArg, "", false, "P", false, this);
        	}
        }

        //???????????? ??????
        this.fn_mstPay_save = function(rowType, mstId)
        {
        	var nRow = this.dsWithHoldMst.rowposition;
        	var payKind = this.dsWithHoldMst.getColumn(nRow, "WITHHOLDMST_PAYKIND");
        	var noteAprv = this.dsWithHoldMst.getColumn(nRow, "WITHHOLDMST_NOTEAPRV" );

        	var strArg = "WITHHOLDMST_ID=" + mstId
        				+" WITHHOLDMST_PAYKIND=" + payKind
        				+" WITHHOLDMST_NOTEAPRV=" + noteAprv
        				+" WITHHOLDMST_STATUS="+ rowType;

        	this.gfn_TransactionP("search","JSP/ed/ed140f_withhold_mst_pay_dml.jsp", "", "", strArg, "fnMstPaySaveCallback", false, "P", false, this);
        }

        //dtl save
        this.fn_dtl_save = function ()
        {
        	var nRow = this.dsWithHoldDtl.rowposition;
        	var setSave = true;

        	for(var i=0; i<this.dsWithHoldDtl.rowcount; i++)
        	{
        		this.dsWithHoldDtl.setColumn(i, "WITHHOLDMST_ID", this.dsWithHoldMst.getColumn(this.dsWithHoldMst.rowposition, "WITHHOLDMST_ID"));

        		if(this.fn_dtl_rowCheck(i) == false)
        		{
        			setSave = false;
        			return false;
        			break;
        		}
        	}

        	if(setSave)
        	{
        		var str_url = "JSP/ed/ed140f_withhold_dtl_dml.jsp";
        		var inds = "dsWithHoldDtl=dsWithHoldDtl:U";
        		var strArg = "AD_KIND=05";
        		this.gfn_TransactionP(this.dsWithHoldMst.getRowType(nRow),str_url, inds, "", strArg, "fnDtlSaveCallback", false, "P", false, this);

        		return true;
        	}
        };

        this.fnDtlSaveCallback = function (svcId, errCod, errMsg)
        {
        	if(svcId != 0)
        		alert(errMsg);
        	else
        	{
        		if(this.ds_file.rowcount > 0)				//???????????? ??????
        			this.fn_upload_file(this.dsWithHoldMst.getColumn(this.dsWithHoldMst.rowposition, "I_FLOW_ID"));

        		if(this.DS_CHAMJO.rowcount > 0)				//???????????? ??????
        			this.fn_upload_chamjo(this.dsWithHoldMst.getColumn(this.dsWithHoldMst.rowposition, "I_FLOW_ID"));

        		if(this.fn_approval_chk())
        		{
        			if(section_value > 0)
        			{
        				if(this.dsWithHoldMst.getColumn(this.dsWithHoldMst.rowposition, "WITHHOLDMST_PAYKIND") == "1")
        				{	//????????? + ????????????
        					setAmountCode = this.lfn_Set_Approval( this.dsWithHoldMst.getColumn(this.dsWithHoldMst.rowposition, "I_FLOW_ID")
        													, this.dsWithHoldDtl.getSum("WITHHOLDDTL_AMOUNT")
        													, setAmountCode
        													, sSabun == gds_userinfo.getColumn(0, "DEPARTMENT_MANAGER")
        													, this.dsWithHoldMst.getColumn(this.dsWithHoldMst.rowposition, "WITHHOLDMST_NOTEAPRV")
        													, ""
        													, sSection_Code
        													, this.dsFormpath, this.ds_flow_order, this.ds_flow_order2);

        				}else
        				{	//????????? + ????????????
        					setAmountCode = this.lfn_Set_Approval_Edit(this.dsWithHoldMst.getColumn(this.dsWithHoldMst.rowposition, "I_FLOW_ID")
        													, this.dsWithHoldDtl.getSum("WITHHOLDDTL_AMOUNT")
        													, setAmountCode
        													, sSabun == gds_userinfo.getColumn(0, "DEPARTMENT_MANAGER")
        													, this.dsWithHoldMst.getColumn(this.dsWithHoldMst.rowposition, "WITHHOLDMST_NOTEAPRV")
        													, ""
        													, sSection_Code
        													, this.dsFormpath, this.ds_flow_order, this.ds_flow_order2);
        				}
        			}
        			else
        			{
        				//??????????????? + ????????????
        				setAmountCode = this.lfn_Set_Approval( this.dsWithHoldMst.getColumn(this.dsWithHoldMst.rowposition, "I_FLOW_ID")
        													, this.dsWithHoldDtl.getSum("WITHHOLDDTL_AMOUNT")
        													, setAmountCode
        													, sSabun == gds_userinfo.getColumn(0, "DEPARTMENT_MANAGER")
        													, this.dsWithHoldMst.getColumn(this.dsWithHoldMst.rowposition, "WITHHOLDMST_NOTEAPRV")
        													, ""
        													, sSection_Code
        													, this.dsFormpath, this.ds_flow_order, this.ds_flow_order2);

        			}
        		}
        	}

        };

        //dtl CheckRow
        this.fn_dtl_rowCheck = function (nRow)
        {
        	if(nRow == -1)
        		return true;

        	if ((this.dsWithHoldMst.getColumn(this.dsWithHoldMst.rowposition, "WITHHOLDMST_DATE") > "20121121") &&
        	    ((this.dsWithHoldDtl.getColumn(nRow, "WITHHOLDDTL_WRITEDATE") == null) ||
        	     (this.dsWithHoldDtl.getColumn(nRow, "WITHHOLDDTL_WRITEDATE") == "")) )
        	{
        		alert("??????????????? ????????? ????????????.");
        		this.cal_contractDate.setFocus();
        		return false;
        	}

        	if (this.dsWithHoldDtl.getColumn(nRow, "ATHR_IDENTITY") == null)
        	{
        		alert("????????? ????????? ????????????.");
        		this.btn_name_onclick();
        		return false;
        	}

        	if (this.dsWithHoldDtl.getColumn(nRow, "MNSCRIPT_CODE") == null)
        	{
        		alert("??????????????? ????????? ????????????.");
        		this.cb_mnScript.dropdown();
        		return false;
        	}

        	if ((this.dsWithHoldDtl.getColumn(nRow, "BOOKMST_CODE") == null)
        		|| (this.dsWithHoldDtl.getColumn(nRow, "BOOKMST_YEAR") == null))
        	{
        		alert("????????? ????????? ????????????.");
        		this.btn_book_onclick();
        		return false;
        	}

        	if ((this.dsWithHoldDtl.getColumn(nRow, "WITHHOLDDTL_QTY") == null)
        		|| (this.dsWithHoldDtl.getColumn(nRow, "WITHHOLDDTL_QTY") == 0))
        	{
        		alert("??????????????? ????????? ????????????.");
        		this.medt_qty.setFocus();
        		return false;
        	}

        	if ((this.dsWithHoldDtl.getColumn(nRow, "WITHHOLDDTL_UNITCOST") == null)
        		|| (this.dsWithHoldDtl.getColumn(nRow, "WITHHOLDDTL_UNITCOST") == 0))
        	{
        		alert("??????????????? ????????? ????????????.");
        		this.medt_unitCost.setFocus();
        		return false;
        	}

        	return true;
        };

        //??????
        this.Div00_btn_delete_onclick = function(obj,e)
        {
        	if(this.fn_approval_chk())
        	{
        		alert("??????????????? ??? ?????? ????????? ??? ????????????.\n\n" +
        			  "????????? ????????? ???????????? ????????? ???????????? ????????? ??????????????? ?????? ????????? ????????????.");
        		this.lfn_showModal("popupDelete", "", "ed::EDMstDtlCancel_ConformF.xfdl", "popupDeleteCallBack", this, 10, 58, 280, 100);
        	}
        };

        this.popupDeleteCallBack = function(svcId, rt_value)
        {
        	if(rt_value == "??????")
        	{
        		this.dsWithHoldMst.deleteRow(this.dsWithHoldMst.rowposition);
        		this.fn_mst_save("delete");
        		this.dsWithHoldDtl.clearData();
        		this.ds_file.clearData();
        		this.DS_CHAMJO.clearData();
        	}
        	else if(rt_value == "??????")
        	{
        		this.dsWithHoldDtl.setColumn(this.dsWithHoldDtl.rowposition, "WITHHOLDDTL_DELETE", "D");
        		this.dsWithHoldDtl.filter("WITHHOLDDTL_DELETE!='D'");
        		this.fn_dtl_save();
        	}
        }

        //??????
        this.Div00_btn_print_onclick = function(obj,e)
        {
        	var nRow = this.dsWithHoldMst.rowposition;
        	var I_FLOW_ID = this.dsWithHoldMst.getColumn(nRow, "I_FLOW_ID");
        	var rdUrl, rdParam;

        	if(I_FLOW_ID != "")
        	{
        		rdUrl = gv_urlMrd + "/ed/ED141.mrd";
        		rdParam  = "/rp [1]["+ I_FLOW_ID + "]";

        		this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1024, 770);
        	}
        	else
        		alert("????????? ????????? ????????????.");
        };

        //????????????
        this.btn_name_onclick = function(obj,e)
        {
        	this.lfn_showModal("popuppAuthor", "", "ed::EDAuthor_SearchF.xfdl", "", this, 10, 58, 500, 550);
        };

        //?????? ?????? ????????? ????????????
        this.fn_setAuthorValue = function(rtArray)
        {
        	nRow = this.dsWithHoldDtl.rowposition;

        	this.dsWithHoldDtl.setColumn(nRow, "ATHR_NAME", rtArray[0]);
        	this.dsWithHoldDtl.setColumn(nRow, "OUTER_NAME", rtArray[0]);
        	this.dsWithHoldDtl.setColumn(nRow, "ATHR_IDENTITY", rtArray[10]);
        	this.dsWithHoldDtl.setColumn(nRow, "ATHR_JUMINNO2", rtArray[6]);
        	this.dsWithHoldDtl.setColumn(nRow, "ATHR_ABODEGB", rtArray[9]);
        	this.dsWithHoldDtl.setColumn(nRow, "CUST_GUBN", null);
        	this.dsWithHoldDtl.setColumn(nRow, "CUST_CODE", null);
        }

        //????????????
        this.btn_book_onclick = function(obj,e)
        {
        	var objParam = {dsParam1:this.dsBookMst};
        	this.lfn_showModal("popupAddress", objParam, "mk::MKBook_SearchF.xfdl", "popupBookCallBack", this, 10, 58, 450, 400);
        };

        this.popupBookCallBack = function(svcId)
        {
        	var nRow = this.dsWithHoldDtl.rowposition;
        	var bRow = this.dsBookMst.rowposition;

        	this.dsWithHoldDtl.setColumn(nRow, "BOOKMST_CODE", this.dsBookMst.getColumn(bRow, "BOOKMST_CODE"));
        	this.dsWithHoldDtl.setColumn(nRow, "BOOKMST_YEAR", this.dsBookMst.getColumn(bRow, "BOOKMST_YEAR"));
        	this.dsWithHoldDtl.setColumn(nRow, "WITHHOLDDTL_BOOKNAME", this.dsBookMst.getColumn(bRow, "BOOKMST_NAME"));
        	this.dsWithHoldDtl.setColumn(nRow, "BOOKMST_SEQ", this.dsBookMst.getColumn(bRow, "BOOKMST_SEQ"));
        	this.dsWithHoldDtl.setColumn(nRow, "BOOKMST_ID", this.dsBookMst.getColumn(bRow, "BOOKMST_ID"));
        	this.dsWithHoldDtl.setColumn(nRow, "BOOKCODEYEAR", this.dsBookMst.getColumn(bRow, "BOOKMST_CODE") + " [" + this.dsBookMst.getColumn(bRow, "BOOKMST_YEAR") + "]" );

        };

        this.edt_bookYear_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		if((this.edt_bookCode.maxlength == this.edt_bookCode.getLength()) &&
        			(this.edt_bookYear.maxlength == this.edt_bookYear.getLength()) )
        		{
        			var strUrl = "JSP/ed/book_select.jsp";
        			var inds = "dsBookMst=dsBookMst";
        			var outds = "dsBookMst=dsBookMst";
        			var strArg = "BOOKMST_CODE=" + this.edt_bookCode.value
        					   + " BOOKMST_YEAR=" + this.edt_bookYear.value;

        			this.gfn_TransactionP("select" ,strUrl, inds, outds, strArg, "fnBookMstCallback", false, "P", false, this);
        		}
        		else
        		{
        			alert("??????????????? ????????? ????????? ?????????.");
        			this.edt_bookCode.setFocus();
        			return false;
        		}

        		if(this.chk_fixBook.value == 1)
        		{
        			sFixBookCode = this.edt_bookCode.value;
        			sFixBookYear = this.edt_bookYear.value;
        			sFixBookName = this.edt_bookName.value;
        			sFixBookSeq  = this.dsWithHoldDtl.getColumn(this.dsWithHoldDtl.rowposition, "BOOKMST_SEQ");
        			sFixBookId	 = this.dsWithHoldDtl.getColumn(this.dsWithHoldDtl.rowposition, "BOOKMST_ID");
        		}
        	}
        };

        this.fnBookMstCallback = function (svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        	{
        		if(this.dsBookMst.rowcount == 0)
        		{
        			alert("????????? ?????? ??? ????????????");
        			this.edt_bookCode.set_value("9000000002");
        			this.edt_bookYear.set_value("0000");
        			this.edt_bookName.set_value(null);
        			this.dsWithHoldDtl.setColumn(this.dsWithHoldDtl.rowposition, "BOOKCODEYEAR", this.edt_bookCode.value + " [" + this.edt_bookYear.value + "]");
        			return false;
        		}
        		else if(this.dsBookMst.rowcount == 1)
        		{
        			this.edt_bookName.set_value(this.dsBookMst.getColumn(this.dsBookMst.rowposition, "BOOKMST_NAME"));

        			this.dsWithHoldDtl.setColumn(this.dsWithHoldDtl.rowposition, "BOOKMST_ID", this.dsBookMst.getColumn(this.dsBookMst.rowposition, "BOOKMST_ID"));
        			this.dsWithHoldDtl.setColumn(this.dsWithHoldDtl.rowposition, "WITHHOLDDTL_BOOKNAME", this.edt_bookName.value);
        			this.dsWithHoldDtl.setColumn(this.dsWithHoldDtl.rowposition, "BOOKCODEYEAR", this.edt_bookCode.value + " [" + this.edt_bookYear.value + "]");
        		}
        		else
        		{
        			alert("2??? ????????? ????????? ?????????????????????.");

        			var objParam = {dsParam1:this.dsBookMst};
        			this.lfn_showModal("popupAddress", objParam, "mk::MKBook_SearchF.xfdl", "popupBookCallBack", this, 10, 58, 450, 400);
        		}
        	}

        };
        //################################################################################################################################################

        //???????????? ??????
        this.btn_Fdelete_onclick = function(obj,e)
        {
        	if (this.ds_file.getColumn(this.ds_file.rowposition, "F_NO") == ""){
        		this.ds_file.deleteRow(this.ds_file.rowposition);
        	}else{
        		var vFpath = this.ds_file.getColumn(this.ds_file.rowposition, "F_PATH");
        		var vFileSubUrl = nexacro.replaceAll(vFpath, "/gw/attachedfile", "attattachedfile");
        		this.lfn_FileDelete(this.ds_file, this.dsWithHoldMst.getColumn(0, "I_FLOW_ID"), vFileSubUrl);
        	}
        };

        //??????????????????
        this.grd_cham_oncelldblclick = function(obj,e)
        {
        	if(this.DS_CHAMJO.rowcount > 0)
        	{
        		for(var i = 0; i <= this.DS_CHAMJO.rowcount -1; i++)
        		{
        			if(this.DS_CHAMJO.getColumn(i, "CO_SEQ") == this.grd_cham.getCellValue(e.row, 0))
        				this.DS_CHAMJO.deleteRow(i);
        		}
        	}
        };

        //?????? ????????????
        this.chk_fixAthr_onclick = function(obj,e)
        {
        	var nRow =  this.dsWithHoldDtl.rowposition;
        	if(obj.value == true)
        	{
        		sFixAthrName     = this.dsWithHoldDtl.getColumn(nRow, "ATHR_NAME");
        	    sFixOuterName    = this.dsWithHoldDtl.getColumn(nRow, "OUTER_NAME");
        	    sFixAthrIdentity = this.dsWithHoldDtl.getColumn(nRow, "ATHR_IDENTITY");
        	    sFixAthrJuminno2 = this.dsWithHoldDtl.getColumn(nRow, "ATHR_JUMINNO2");
        	    sFixAthrAbodegb  = this.dsWithHoldDtl.getColumn(nRow, "ATHR_ABODEGB");
        	    sFixCustGubn     = this.dsWithHoldDtl.getColumn(nRow, "CUST_GUBN");
         	    sFixCustCode     = this.dsWithHoldDtl.getColumn(nRow, "CUST_CODE");

        		if(this.dsWithHoldDtl.rowcount <= 1)
        			this.btn_name.setFocus();
        		else
        			this.cb_mnScript.setFocus();
        	}else
        	{
        		sFixAthrName     = "";
        	    sFixOuterName    = "";
        	    sFixAthrIdentity = "";
        	    sFixAthrJuminno2 = "";
        	    sFixAthrAbodegb  = "";
        	    sFixCustGubn     = "";
         	    sFixCustCode     = "";

        		this.btn_name.setFocus();
        	}
        };

        //???????????? ????????????
        this.chk_fixBook_onclick = function(obj,e)
        {
        	var nRow =  this.dsWithHoldDtl.rowposition;

        	if(obj.value == true)
        	{
        		sFixBookCode = this.dsWithHoldDtl.getColumn(nRow, "BOOKMST_CODE");
        		sFixBookYear = this.dsWithHoldDtl.getColumn(nRow, "BOOKMST_YEAR");
        		sFixBookSeq  = this.dsWithHoldDtl.getColumn(nRow, "BOOKMST_SEQ");
        		sFixBookId   = this.dsWithHoldDtl.getColumn(nRow, "BOOKMST_ID");
        		sFixBookName = this.dsWithHoldDtl.getColumn(nRow, "WITHHOLDDTL_BOOKNAME");

        		if(this.dsWithHoldDtl.rowcount <= 1)
        			this.edt_bookCode.setFocus();
        		else
        			this.medt_qty.setFocus();
        	}else
        	{
        		sFixBookCode = "";
        		sFixBookYear = "";
        		sFixBookSeq  = "";
        		sFixBookid   = "";
        		sFixBookName = "";

        		this.edt_bookCode.setFocus();
        	}
        };

        //?????????, ????????? ?????????
        this.dsWithHoldDtl_oncolumnchanged = function(obj,e)
        {
        	if((e.columnid == "WITHHOLDDTL_AMOUNT") || (e.columnid == "WITHHOLDDTL_QTY"))
        	{
        		this.medt_totAmount.set_value(obj.getSum("WITHHOLDDTL_AMOUNT"));
        		this.medt_totQty.set_value(obj.getSum("WITHHOLDDTL_QTY"));
        	}

        	//???????????? ???????????? ??????
        	if((e.columnid == "WITHHOLDDTL_FINISHDATE") && (obj.getColumn(e.row, e.columnid) != null))
        	{
        		if(this.dsWithHoldDtl.getMax(e.columnid) != obj.getColumn(e.row, e.columnid))
        		{
        			obj.setColumn(e.row, e.columnid, null);
        			alert("????????? ??????????????? ???????????? ????????? ?????? ????????? ????????? ??? ????????????.");
        			return false;
        		}
        	}
        };

        //????????? ??? ????????????
        this.fn_amountCalculate = function(obj,e)
        {
        	var nRow = this.dsWithHoldDtl.rowposition;

        	var amount = new nexacro.Decimal(this.dsWithHoldDtl.getColumn(nRow, "WITHHOLDDTL_QTY") * this.dsWithHoldDtl.getColumn(nRow, "WITHHOLDDTL_UNITCOST"));
        	var incometax = new nexacro.Decimal(this.dsWithHoldDtl.getColumn(nRow, "WITHHOLDDTL_AMOUNT") * (this.dsWithHoldDtl.getColumn(nRow, "WITHHOLDDTL_TAXRATE") / 100));
        	var residenttax = new nexacro.Decimal(this.dsWithHoldDtl.getColumn(nRow, "WITHHOLDDTL_INCOMETAX") / 10 );

        	this.dsWithHoldDtl.setColumn(nRow, "WITHHOLDDTL_AMOUNT", amount.trunc());
        	this.dsWithHoldDtl.setColumn(nRow, "WITHHOLDDTL_INCOMETAX", incometax.trunc());
        	this.dsWithHoldDtl.setColumn(nRow, "WITHHOLDDTL_RESIDENTTAX", residenttax.trunc());
        };
        //###################################################################################################################################

        //???????????? ????????????
        this.btn_payDate_onclick = function(obj,e)
        {
        	var sDate = this.dsWithHoldDtl.getColumn(this.dsWithHoldDtl.rowposition, "WITHHOLDDTL_PAYDATE");

        	for(var i=0; i<this.dsWithHoldDtl.rowcount; i++)
        	{
        		this.dsWithHoldDtl.setColumn(i, "WITHHOLDDTL_PAYDATE", sDate);
        	}
        };

        //???????????? ????????????
        this.btn_transferDate_onclick = function(obj,e)
        {
        	var sDate = this.dsWithHoldDtl.getColumn(this.dsWithHoldDtl.rowposition, "WITHHOLDDTL_TRANSFERDATE");

        	for(var i=0; i<this.dsWithHoldDtl.rowcount; i++)
        	{
        		this.dsWithHoldDtl.setColumn(i, "WITHHOLDDTL_TRANSFERDATE", sDate);
        	}
        };

        //??????????????? ????????????
        this.btn_finishDate_onclick = function(obj,e)
        {
        	var sDate = this.dsWithHoldDtl.getColumn(this.dsWithHoldDtl.rowposition, "WITHHOLDDTL_FINISHDATE");

        	for(var i=0; i<this.dsWithHoldDtl.rowcount; i++)
        	{
        		this.dsWithHoldDtl.setColumn(i, "WITHHOLDDTL_FINISHDATE", sDate);
        	}
        };

        //?????????????????? ????????????
        this.btn_withholeDate_onclick = function(obj,e)
        {
        	var sDate = this.dsWithHoldDtl.getColumn(this.dsWithHoldDtl.rowposition, "WITHHOLDDTL_WITHHOLDDATE");

        	for(var i=0; i<this.dsWithHoldDtl.rowcount; i++)
        	{
        		this.dsWithHoldDtl.setColumn(i, "WITHHOLDDTL_WITHHOLDDATE", sDate);
        	}
        };

        //???????????? ??????
        this.btn_pay_onclick = function(obj,e)
        {
        	this.lfn_showModal("popupPayKind", "", "ed::EDMstApproval_KindF.xfdl", "popupPayKindCallback", this, 10, 58, 300, 200);
        };

        this.popupPayKindCallback = function (svcId, rtValue)
        {
        	if(rtValue == 0) //????????????
        	{
        		this.btn_pay.set_text("????????????");
        		this.dsWithHoldMst.setColumn(this.dsWithHoldMst.rowposition, "WITHHOLDMST_PAYKIND", "0");
        	}
        	else	//????????????
        	{
        		this.btn_pay.set_text("????????????");
        		this.dsWithHoldMst.setColumn(this.dsWithHoldMst.rowposition, "WITHHOLDMST_PAYKIND", "1");
        	}

        };

        //?????? grid ?????????
        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var strUrl = "JSP/pd/pd_acnt_doc.jsp";
        	var inds = "dsAcntDoc=dsAcntDoc";
        	var outds = "dsAcntDoc=dsAcntDoc";
        	var strArg = "AD_KIND=05"
        			   + " AD_ID=" + this.dsWithHoldDtl.getColumn(e.row, "WITHHOLDMST_ID")
        			   + " AD_SEQ=" + this.dsWithHoldDtl.getColumn(e.row, "WITHHOLDDTL_SEQ");

        	this.gfn_TransactionP("select" ,strUrl, inds, outds, strArg, "fnAcntCallback", false, "P", false, this);
        };

        this.fnAcntCallback = function (svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        	{
        		var objRect = this.grd_dtl.getCellRect(this.dsWithHoldDtl.rowposition, 2);

        		var x = objRect.left;
        		var y = objRect.top;

        		this.PopupDiv00.trackPopupByComponent(this.grd_dtl, x, y);
        	}
        };

        //????????? ??????
        this.chk_permite_onclick = function(obj,e)
        {
        	if(obj.value == 0)
        	{
        		this.dsWithHoldMst.setColumn(this.dsWithHoldMst.rowposition, "WITHHOLDMST_PERMITEDATE", null);
        		this.dsWithHoldMst.setColumn(this.dsWithHoldMst.rowposition, "WITHHOLDMST_PERMITEUSER", null);
        	}
        	else if(sSelect > 5)
        	{
        		var d = new Date();
        		var today = Eco.date.getMaskFormatString(d, "yyyyMMdd");

        		this.dsWithHoldMst.setColumn(this.dsWithHoldMst.rowposition, "WITHHOLDMST_PERMITEDATE", today);
        		this.dsWithHoldMst.setColumn(this.dsWithHoldMst.rowposition, "WITHHOLDMST_PERMITEUSER", sSabun);
        	}
        };

        //????????????
        this.CheckBox02_onclick = function(obj,e)
        {
        	if(obj.value == 1)
        		this.dsWithHoldMst.setColumn(this.dsWithHoldMst.rowposition, "OUTORDERMST_NOTEAPRV", "1");
        	else
        		this.dsWithHoldMst.setColumn(this.dsWithHoldMst.rowposition, "OUTORDERMST_NOTEAPRV", "0");
        };

        //????????????
        this.cb_section_onitemchanged = function(obj,e)
        {
        	sSection_Code = obj.value;
        	sSection_Name = obj.text;
        	this.dsWithHoldMst.setColumn(this.dsWithHoldMst.rowposition, "SECTION_CODE", sSection_Code);
        	this.dsWithHoldMst.setColumn(this.dsWithHoldMst.rowposition, "SECTION_NAME", sSection_Name.trim());
        };

        //?????????
        this.fn_localKeyDown = function(obj,e)
        {
        	var comobj;

        	if(e.keycode == 13)
        	{
        		comobj = this.getNextComponent(obj, true);
        		comobj.setFocus();
        	}
        }

        this.ED141F_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.ED141F_ontimer = function(obj,e)
        {
        	var l;
        	if (obj.getOffsetWidth() < 1300)
        	{
        		l = 0;
        	}
        	else
        	{
        		l = (obj.getOffsetWidth() - 1300) / 2;
        	}

        	trace(l);
        	this.killTimer(0);
        	this.lfn_grdAutofit(this.grd_dtl);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ED141F_onload,this);
            this.addEventHandler("onsize",this.ED141F_onsize,this);
            this.addEventHandler("ontimer",this.ED141F_ontimer,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.Div00.form.btn_delete.addEventHandler("onclick",this.Div00_btn_delete_onclick,this);
            this.Div00.form.btn_save.addEventHandler("onclick",this.Div00_btn_save_onclick,this);
            this.Div00.form.btn_print.addEventHandler("onclick",this.Div00_btn_print_onclick,this);
            this.Div00.form.btn_add.addEventHandler("onclick",this.Div00_btn_add_onclick,this);
            this.Div00.form.btn_new.addEventHandler("onclick",this.Div00_btn_new_onclick,this);
            this.Div00.form.btn_tempchk.addEventHandler("onclick",this.Div00_btn_tempchk_onclick,this);
            this.Div00.form.btn_tempSave.addEventHandler("onclick",this.Div00_btn_tempSave_onclick,this);
            this.Static00_02.addEventHandler("onclick",this.Static00_onclick,this);
            this.edt_outOrderNo.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.cal_mstDate.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_06.addEventHandler("onclick",this.Static00_onclick,this);
            this.medt_totQty.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_04.addEventHandler("onclick",this.Static00_onclick,this);
            this.medt_totAmount.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.st_SCMst_availableTerm.addEventHandler("onclick",this.Static00_onclick,this);
            this.edt_mstName.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_07.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_name.addEventHandler("onclick",this.btn_name_onclick,this);
            this.edt_name.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.btn_jumin.addEventHandler("onclick",this.btn_name_onclick,this);
            this.medt_juminNo.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_08.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_book.addEventHandler("onclick",this.btn_book_onclick,this);
            this.edt_bookCode.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.edt_bookYear.addEventHandler("onkeydown",this.edt_bookYear_onkeydown,this);
            this.edt_bookName.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.st_SCDtl_contractAmount.addEventHandler("onclick",this.Static00_onclick,this);
            this.medt_qty.addEventHandler("onchanged",this.fn_amountCalculate,this);
            this.medt_qty.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_10.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_11.addEventHandler("onclick",this.Static00_onclick,this);
            this.medt_amount.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_12.addEventHandler("onclick",this.Static00_onclick,this);
            this.cb_section.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.cb_section.addEventHandler("onitemchanged",this.cb_section_onitemchanged,this);
            this.Static00_13.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_dtl.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.cb_mnScript.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.chk_permite.addEventHandler("onclick",this.chk_permite_onclick,this);
            this.cal_receipDate.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.cal_contractDate.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.chk_fixAthr.addEventHandler("onclick",this.chk_fixAthr_onclick,this);
            this.chk_fixBook.addEventHandler("onclick",this.chk_fixBook_onclick,this);
            this.medt_unitCost.addEventHandler("onchanged",this.fn_amountCalculate,this);
            this.medt_taxRate.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.medt_taxRate.addEventHandler("onchanged",this.fn_amountCalculate,this);
            this.Static00_14.addEventHandler("onclick",this.Static00_onclick,this);
            this.edt_workContent.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.btn_payDate.addEventHandler("onclick",this.btn_payDate_onclick,this);
            this.cal_payDate.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.btn_transferDate.addEventHandler("onclick",this.btn_transferDate_onclick,this);
            this.cal_transferDate.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.btn_finishDate.addEventHandler("onclick",this.btn_finishDate_onclick,this);
            this.cal_finishDate.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.btn_withholeDate.addEventHandler("onclick",this.btn_withholeDate_onclick,this);
            this.cal_withholeDate.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.CheckBox02.addEventHandler("onclick",this.CheckBox02_onclick,this);
            this.Static00_09.addEventHandler("onclick",this.Static00_onclick,this);
            this.edt_ref.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_15.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_file.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.btn_file.addEventHandler("onclick",this.btn_file_onclick,this);
            this.btn_Fdelete.addEventHandler("onclick",this.btn_Fdelete_onclick,this);
            this.btn_cham.addEventHandler("onclick",this.btn_cham_onclick,this);
            this.grd_cham.addEventHandler("oncelldblclick",this.grd_cham_oncelldblclick,this);
            this.btn_pay.addEventHandler("onclick",this.btn_pay_onclick,this);
            this.dsWithHoldDtl.addEventHandler("onrowsetchanged",this.dsWithHoldDtl_onrowsetchanged,this);
            this.dsWithHoldDtl.addEventHandler("oncolumnchanged",this.dsWithHoldDtl_oncolumnchanged,this);
            this.dsWithHoldMst.addEventHandler("onrowsetchanged",this.dsWithHoldMst_onrowsetchanged,this);
            this.dsWithHoldMst.addEventHandler("onrowposchanged",this.dsWithHoldMst_onrowposchanged,this);
        };
        this.loadIncludeScript("ED141F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
