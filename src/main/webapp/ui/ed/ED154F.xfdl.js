(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED154F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOutOrdMst", this);
            obj._setContents("<ColumnInfo><Column id=\"OUTORDMST_KIND\" type=\"STRING\" size=\"1\"/><Column id=\"OUTORDMST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"OUTORDMST_NO\" type=\"STRING\" size=\"3\"/><Column id=\"OUTORDMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"OUTORDER_NO\" type=\"STRING\" size=\"12\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"OUTORDMST_PERMITEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"OUTORDMST_PERMITE\" type=\"STRING\" size=\"1\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"OUTORDMST_PERMITEUSER\" type=\"STRING\" size=\"6\"/><Column id=\"OUTORDMST_RECEIPTDATE\" type=\"STRING\" size=\"8\"/><Column id=\"BOOKNAME\" type=\"STRING\" size=\"100\"/><Column id=\"OUTORDMST_REMARK\" type=\"STRING\" size=\"1000\"/><Column id=\"OUTORDMST_DISCOUNT\" type=\"STRING\" size=\"1\"/><Column id=\"OUTORDMST_DISCOUNTRATE\" type=\"DECIMAL\" size=\"4\"/><Column id=\"OUTORDMST_CLASS\" type=\"STRING\" size=\"2\"/><Column id=\"I_FLOW_ID\" type=\"INT\" size=\"20\"/><Column id=\"OUTORDMST_DELETE\" type=\"STRING\" size=\"1\"/><Column id=\"BU_DECISIONECODE\" type=\"STRING\" size=\"2\"/><Column id=\"OUTORDMST_PERMITE0\" type=\"STRING\" size=\"1\"/><Column id=\"OUTORDMST_PERMITEDATE0\" type=\"STRING\" size=\"8\"/><Column id=\"OUTORDMST_PERMITEUSER0\" type=\"STRING\" size=\"6\"/><Column id=\"OUTORDMST_PAYKIND\" type=\"STRING\" size=\"256\"/><Column id=\"OUTORDMST_NOTEAPRV\" type=\"CHAR\" size=\"1\"/><Column id=\"OPEN_CHECK\" type=\"CHAR\" size=\"1\"/><Column id=\"REF_USER\" type=\"CHAR\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMnscript", this);
            obj._setContents("<ColumnInfo><Column id=\"MNSCRIPT_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"MNSCRIPT_CLASS\" type=\"STRING\" size=\"1\"/><Column id=\"CG_CODE\" type=\"STRING\" size=\"1\"/><Column id=\"PERSON_CG_CODE\" type=\"STRING\" size=\"1\"/><Column id=\"MNSCRIPT_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"MNSCRIPT_PERSON_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"MNSCRIPT_COMPANY_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"MNSCRIPT_ENABLE\" type=\"STRING\" size=\"1\"/><Column id=\"MNSCRIPT_PCODE\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSection", this);
            obj._setContents("<ColumnInfo><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"LVL\" type=\"INT\" size=\"1\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"3\"/><Column id=\"SECTION_SHORTNAME\" type=\"STRING\" size=\"10\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"5\"/><Column id=\"BU_GRCODE\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutOrdDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"OUTORDMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"OUTORDDTL_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"MNSCRIPT_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"MNSCRIPT_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"BOOKCODEYEAR\" type=\"STRING\" size=\"17\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"OUTORDDTL_FINISHDATE\" type=\"STRING\" size=\"8\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"OUTORDDTL_QTY\" type=\"INT\" size=\"8\"/><Column id=\"OUTORDDTL_UNITCOST\" type=\"INT\" size=\"9\"/><Column id=\"OUTORDDTL_INCOMETAX\" type=\"INT\" size=\"8\"/><Column id=\"OUTORDDTL_RESIDENTTAX\" type=\"INT\" size=\"7\"/><Column id=\"OUTORDDTL_TAXRATE\" type=\"DECIMAL\" size=\"4\"/><Column id=\"OUTORDDTL_AMOUNT\" type=\"INT\" size=\"10\"/><Column id=\"OUTORDDTL_TOTAMOUNT\" type=\"INT\" size=\"10\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"ATHR_IDENTITY\" type=\"STRING\" size=\"20\"/><Column id=\"OUTER_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"OUTORDDTL_PAYDATE\" type=\"STRING\" size=\"8\"/><Column id=\"OUTREQMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"OUTREQDTL_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"OUTORDDTL_BOOKMSTNAME\" type=\"STRING\" size=\"50\"/><Column id=\"OUTORDDTL_WORKCONTENT\" type=\"STRING\" size=\"50\"/><Column id=\"OUTORDDTL_STANDARD\" type=\"STRING\" size=\"20\"/><Column id=\"OUTORDDTL_TONE\" type=\"INT\" size=\"1\"/><Column id=\"OUTORDDTL_DELETE\" type=\"STRING\" size=\"1\"/><Column id=\"OUTORDDTL_INVOICE_YM\" type=\"STRING\" size=\"6\"/><Column id=\"OUTORDDTL_PAYKIND\" type=\"STRING\" size=\"1\"/><Column id=\"OUTORDDTL_BILL_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"OUTORDDTL_BILL_NO\" type=\"STRING\" size=\"24\"/><Column id=\"OUTORDDTL_EBILL\" type=\"STRING\" size=\"1\"/><Column id=\"OUTORDDTL_ACNTDATE\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPendOutRequest", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"OUTREQMST_KIND\" type=\"STRING\" size=\"1\"/><Column id=\"OUTREQMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"OUTREQDTL_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"OUTREQUEST_NO\" type=\"STRING\" size=\"17\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"ATHR_IDENTITY\" type=\"INT\" size=\"20\"/><Column id=\"OUTER_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"MNSCRIPT_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"MNSCRIPT_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"OUTREQDTL_BOOKMSTNAME\" type=\"STRING\" size=\"50\"/><Column id=\"OUTREQDTL_WORKCONTENT\" type=\"STRING\" size=\"50\"/><Column id=\"OUTREQDTL_TONE\" type=\"STRING\" size=\"1\"/><Column id=\"OUTREQDTL_STANDARD\" type=\"STRING\" size=\"20\"/><Column id=\"OUTREQDTL_QTY\" type=\"DECIMAL\" size=\"8\"/><Column id=\"OUTREQDTL_UNITCOST\" type=\"INT\" size=\"9\"/><Column id=\"OUTREQDTL_AMOUNT\" type=\"INT\" size=\"10\"/><Column id=\"OUTREQDTL_WORKSDATE\" type=\"STRING\" size=\"8\"/><Column id=\"OUTREQDTL_WORKEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBookMst", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/></ColumnInfo>");
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


            obj = new Dataset("dsOutOrdMstPrt", this);
            obj._setContents("<ColumnInfo><Column id=\"OUTORDMST_KIND\" type=\"STRING\" size=\"1\"/><Column id=\"OUTORDMST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"OUTORDMST_NO\" type=\"STRING\" size=\"3\"/><Column id=\"OUTORDMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"OUTORDER_NO\" type=\"STRING\" size=\"12\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"OUTORDMST_PERMITEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"OUTORDMST_PERMITE\" type=\"STRING\" size=\"1\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"OUTORDMST_PERMITEUSER\" type=\"STRING\" size=\"6\"/><Column id=\"OUTORDMST_RECEIPTDATE\" type=\"STRING\" size=\"8\"/><Column id=\"BOOKNAME\" type=\"STRING\" size=\"100\"/><Column id=\"OUTORDMST_REMARK\" type=\"STRING\" size=\"1000\"/><Column id=\"OUTORDMST_DISCOUNT\" type=\"STRING\" size=\"1\"/><Column id=\"OUTORDMST_DISCOUNTRATE\" type=\"DECIMAL\" size=\"4\"/><Column id=\"OUTORDMST_CLASS\" type=\"STRING\" size=\"2\"/><Column id=\"I_FLOW_ID\" type=\"INT\" size=\"20\"/><Column id=\"OUTORDMST_DELETE\" type=\"STRING\" size=\"1\"/><Column id=\"BU_DECISIONECODE\" type=\"STRING\" size=\"2\"/><Column id=\"OUTORDMST_PERMITE0\" type=\"STRING\" size=\"1\"/><Column id=\"OUTORDMST_PERMITEDATE0\" type=\"STRING\" size=\"8\"/><Column id=\"OUTORDMST_PERMITEUSER0\" type=\"STRING\" size=\"6\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutOrdDtlPrt", this);
            obj._setContents("<ColumnInfo><Column id=\"OUTORDMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"OUTORDDTL_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"MNSCRIPT_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"MNSCRIPT_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"BOOKCODEYEAR\" type=\"STRING\" size=\"17\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"OUTORDDTL_FINISHDATE\" type=\"STRING\" size=\"8\"/><Column id=\"OUTORDDTL_WITHHOLDDATE\" type=\"STRING\" size=\"8\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"OUTORDDTL_QTY\" type=\"DECIMAL\" size=\"8\"/><Column id=\"OUTORDDTL_UNITCOST\" type=\"INT\" size=\"9\"/><Column id=\"OUTORDDTL_INCOMETAX\" type=\"INT\" size=\"8\"/><Column id=\"OUTORDDTL_RESIDENTTAX\" type=\"INT\" size=\"7\"/><Column id=\"OUTORDDTL_TAXRATE\" type=\"DECIMAL\" size=\"4\"/><Column id=\"OUTORDDTL_AMOUNT\" type=\"INT\" size=\"10\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"ATHR_IDENTITY\" type=\"STRING\" size=\"20\"/><Column id=\"ATHR_JUMINNO2\" type=\"STRING\" size=\"13\"/><Column id=\"ATHR_ABODEGB\" type=\"STRING\" size=\"1\"/><Column id=\"OUTER_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"OUTORDDTL_PAYDATE\" type=\"STRING\" size=\"8\"/><Column id=\"OUTREQMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"OUTREQDTL_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"OUTORDDTL_BOOKMSTNAME\" type=\"STRING\" size=\"50\"/><Column id=\"OUTORDDTL_WORKCONTENT\" type=\"STRING\" size=\"50\"/><Column id=\"OUTORDDTL_STANDARD\" type=\"STRING\" size=\"20\"/><Column id=\"OUTORDDTL_RANGE\" type=\"STRING\" size=\"20\"/><Column id=\"OUTORDDTL_TONE\" type=\"INT\" size=\"1\"/><Column id=\"OUTORDDTL_DELETE\" type=\"STRING\" size=\"1\"/><Column id=\"OUTORDDTL_BILL_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"OUTORDDTL_BILL_NO\" type=\"STRING\" size=\"24\"/><Column id=\"OUTORDDTL_EBILL\" type=\"STRING\" size=\"1\"/><Column id=\"OUTORDDTL_ACNTDATE\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"GB\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"F_NO\" type=\"STRING\" size=\"256\"/><Column id=\"R_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApproval", this);
            obj._setContents("<ColumnInfo><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"F_NEXT\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKCHAK\" type=\"STRING\" size=\"256\"/><Column id=\"BUSOR\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KS_SIGN\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_CHAMJO", this);
            obj._setContents("<ColumnInfo><Column id=\"F_FNUM\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_flow_order", this);
            obj._setContents("<ColumnInfo><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"F_NEXT\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STORE\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKCHAK\" type=\"STRING\" size=\"256\"/><Column id=\"BUSOR\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANG\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_CODE2\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_flow_order2", this);
            obj._setContents("<ColumnInfo><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"20\"/><Column id=\"F_SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"POSITION_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"10\"/><Column id=\"POSITION_CODE2\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFormpath", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"2\"/><Column id=\"F_NUM\" type=\"INT\" size=\"3\"/><Column id=\"F_SEQ\" type=\"INT\" size=\"2\"/><Column id=\"SABUN\" type=\"STRING\" size=\"6\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"POSITION_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"POSITION_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"APPROVAL_EMP\" type=\"STRING\" size=\"6\"/><Column id=\"POSITION_CODE2\" type=\"STRING\" size=\"2\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
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


            obj = new FileDialog("fileD", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fileDownTrans", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","15","10","97%","40",null,null,null,null,null,null,this);
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

            obj = new Button("btn_add",null,"7","90","25","588",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("??????????????????");
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

            obj = new CheckBox("ck_open","156","22","78","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("????????????");
            obj.set_value("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","15","60","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("??????????????????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_outOrderNo","Static00_02:2","60","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","edt_outOrderNo:3","60","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("????????????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_mstDate","Static00_01:3","60","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","cal_mstDate:2","60","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("????????????");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06","15","102","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("?????????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_totQty","Static00_06:3","102","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_format("#,#.#");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04","medt_totQty:2","102","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("?????????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_totAmount","Static00_04:3","102","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_format("#,#");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_08","medt_totAmount:2","103","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("????????????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_mnScript","Static00_08:3","102","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_innerdataset("dsMnscript");
            obj.set_codecolumn("MNSCRIPT_CODE");
            obj.set_datacolumn("MNSCRIPT_NAME");
            obj.set_enable("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("st_SCMst_availableTerm","cb_mnScript:2","102","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("????????????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_section","Static00:3","60","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_innerdataset("dsSection");
            obj.set_codecolumn("SECTION_CODE");
            obj.set_datacolumn("SECTION_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_07","cb_section:3","60","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("????????????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06_01","15","145","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("????????????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_juminNo","Static00_06_01:2","145","4.14%","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_trimtype("both");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06_01_00","medt_juminNo:2","145","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("?????????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","Static00_06_01_00:2","145","24.61%","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_SCDtl_contractAmount","15","230","100","40",null,null,null,null,null,null,this);
            obj.set_text("??????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_qty","st_SCDtl_contractAmount:2","230","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_format("#,#.#");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_10","medt_qty:3","230","7.81%","40",null,null,null,null,null,null,this);
            obj.set_text("??????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_taborder("33");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_unitCost","Static00_10:2","230","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_format("#,#");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_11_00","medt_unitCost:3","230","7.81%","40",null,null,null,null,null,null,this);
            obj.set_text("?????????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_amount","Static00_11_00:2","230","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_format("#,#");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("st_taxRate00","medt_amount:3","230","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("????????????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rd_payKind","st_taxRate00:2","230","14.22%","40",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_border("1px solid darkgray");
            obj.set_padding("7px");
            var rd_payKind_innerdataset = new nexacro.NormalDataset("rd_payKind_innerdataset", obj);
            rd_payKind_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">?????????</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">???????????????</Col></Row></Rows>");
            obj.set_innerdataset(rd_payKind_innerdataset);
            obj.set_text("???????????????");
            obj.set_value("2");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("st_taxRate","rd_payKind:3","230","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("??????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_receipDate","Static00_07:2","60","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_13","cal_receipDate:6","60","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("????????????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dtl","14","463","97%","247",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_binddataset("dsOutOrdDtl");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"??????\"/><Cell col=\"1\" rowspan=\"2\" text=\"????????????\"/><Cell col=\"2\" rowspan=\"2\" text=\"?????????\"/><Cell col=\"3\" rowspan=\"2\" text=\"?????????\"/><Cell col=\"4\" rowspan=\"2\" text=\"????????????\"/><Cell col=\"5\" rowspan=\"2\" text=\"??????\"/><Cell col=\"6\" rowspan=\"2\" text=\"??????\"/><Cell col=\"7\" colspan=\"3\" text=\"??????\"/><Cell col=\"10\" rowspan=\"2\" text=\"????????????\"/><Cell row=\"1\" col=\"7\" text=\"??????\"/><Cell row=\"1\" col=\"8\" text=\"??????\"/><Cell row=\"1\" col=\"9\" text=\"?????????\"/></Band><Band id=\"body\"><Cell text=\"bind:MNSCRIPT_NAME\"/><Cell col=\"1\" text=\"bind:BOOKCODEYEAR\"/><Cell col=\"2\" text=\"bind:OUTORDDTL_BOOKMSTNAME\"/><Cell col=\"3\" text=\"bind:OUTER_NAME\"/><Cell col=\"4\" text=\"bind:OUTORDDTL_WORKCONTENT\"/><Cell col=\"5\" text=\"bind:OUTORDDTL_TONE\"/><Cell col=\"6\" text=\"bind:OUTORDDTL_STANDARD\"/><Cell col=\"7\" text=\"bind:OUTORDDTL_QTY\"/><Cell col=\"8\" text=\"bind:OUTORDDTL_UNITCOST\"/><Cell col=\"9\" text=\"bind:OUTORDDTL_AMOUNT\"/><Cell col=\"10\" text=\"bind:OUTORDDTL_PAYDATE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_permite","Static00_13:11","60","6.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("???????????????");
            obj.set_value("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_acntDate","st_SCMst_availableTerm:2","102","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_taxRate","st_taxRate:2","230","7.27%","40",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_format("#,#");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_14_00","15","187","100","40",null,null,null,null,null,null,this);
            obj.set_text("????????????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_workContent","Static00_14_00:2","187","29.14%","40",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_enable("false");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06_00","edt_workContent:2","187","7.73%","40",null,null,null,null,null,null,this);
            obj.set_text("??????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_tone","Static00_06_00:2","187","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_limitbymask("none");
            obj.set_format("0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06_00_00_00","medt_tone:1","187","7.81%","40",null,null,null,null,null,null,this);
            obj.set_text("??????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_standard","Static00_06_00_00_00:2","187","32.11%","40",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_maxlength("16");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_14","16","316","100","97",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("??????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06_00_00","15","273","100","40",null,null,null,null,null,null,this);
            obj.set_text("???????????????\r\n????????????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_taborder("62");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_invoiceYM","Static00_06_00_00:3","273","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_enable("true");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            this.addChild(obj.name, obj);

            obj = new Radio("rd_billKind","cal_invoiceYM:2","273","14.22%","40",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_border("1px solid darkgray");
            obj.set_padding("7px");
            var rd_billKind_innerdataset = new nexacro.NormalDataset("rd_billKind_innerdataset", obj);
            rd_billKind_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">???????????????</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">???????????????</Col></Row></Rows>");
            obj.set_innerdataset(rd_billKind_innerdataset);
            obj.set_text("???????????????");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("rd_tax","rd_billKind:2","273","9.06%","40",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_border("1px solid darkgray");
            obj.set_padding("7px");
            var rd_tax_innerdataset = new nexacro.NormalDataset("rd_tax_innerdataset", obj);
            rd_tax_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">??????</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">??????</Col></Row></Rows>");
            obj.set_innerdataset(rd_tax_innerdataset);
            obj.set_text("??????");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_payDate","rd_tax:3","273","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("????????????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_payDate","btn_payDate:2","273","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_finishDate","cal_payDate:2","273","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("???????????????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_finishDate","btn_finishDate:2","273","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","cal_acntDate:11","107","7.34%","33",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("??????????????????");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_09","16","415","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("??????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ref","Static00_09:2","415","42.27%","40",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_remark","Static00_14:1","316","42.27%","97",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_15","txa_remark:3","316","7.81%","70",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("????????????");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_file","Static00_15:2","316","36.88%","70",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_binddataset("ds_file");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"495\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:GB\"/><Cell col=\"1\" text=\"bind:F_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file","grd_file:2","325","2.66%","25",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #ffffff");
            obj.set_border("0px none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Fdelete","grd_file:0","359","2.66%","24",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_background("url(\'Img::btn_TF_Close_O.png\') no-repeat center center #ffffff");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cham","edt_ref:2","388","7.81%","70",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("????????????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cham","btn_cham:2","388","38.91%","70",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_binddataset("DS_CHAMJO");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"111\"/><Column size=\"356\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:CO_SEQ\"/><Cell col=\"1\" text=\"bind:TITLE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pay","CheckBox02:22","104","7.81%","36",null,null,null,null,null,null,this);
            obj.set_taborder("53");
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

            obj = new Button("btn_book","edt_name:2","145","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("????????????");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookCode","btn_book:2","145","10.16%","40",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_maxlength("10");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookYear","edt_bookCode:3","145","3.44%","40",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_maxlength("4");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookName","edt_bookYear:3","145","30.16%","40",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_enable("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","ck_open","value","dsOutOrdMst","OPEN_CHECK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_outOrderNo","value","dsOutOrdMst","OUTORDER_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cal_mstDate","value","dsOutOrdMst","OUTORDMST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cb_mnScript","value","dsOutOrdDtl","MNSCRIPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cb_section","value","dsOutOrdMst","SECTION_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_name","value","dsOutOrdDtl","OUTER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","medt_juminNo","value","dsOutOrdDtl","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","cal_receipDate","value","dsOutOrdMst","OUTORDMST_RECEIPTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","chk_permite","value","dsOutOrdMst","OUTORDMST_PERMITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","cal_acntDate","value","dsOutOrdDtl","OUTORDDTL_ACNTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","medt_taxRate","value","dsOutOrdDtl","OUTORDDTL_INCOMETAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edt_workContent","value","dsOutOrdDtl","OUTORDDTL_WORKCONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","medt_tone","value","dsOutOrdDtl","OUTORDDTL_TONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edt_standard","value","dsOutOrdDtl","OUTORDDTL_STANDARD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","medt_qty","value","dsOutOrdDtl","OUTORDDTL_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","medt_unitCost","value","dsOutOrdDtl","OUTORDDTL_UNITCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","medt_amount","value","dsOutOrdDtl","OUTORDDTL_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","cal_payDate","value","dsOutOrdDtl","OUTORDDTL_PAYDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","cal_finishDate","value","dsOutOrdDtl","OUTORDDTL_FINISHDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","cal_invoiceYM","value","dsOutOrdDtl","OUTORDDTL_INVOICE_YM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","CheckBox02","value","dsOutOrdMst","OUTORDMST_NOTEAPRV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","edt_ref","value","dsOutOrdDtl","REF_USER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","txa_remark","value","dsOutOrdMst","OUTORDMST_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_bookCode","value","dsOutOrdDtl","BOOKMST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_bookYear","value","dsOutOrdDtl","BOOKMST_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_bookName","value","dsOutOrdDtl","OUTORDDTL_BOOKMSTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","rd_billKind","value","dsOutOrdDtl","OUTORDDTL_EBILL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ED154F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED154F.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("ED154F.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("ED154F.xfdl", function() {
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

        var section_value, temp_chk, setAmountCode, sSelect;

        this.ED154F_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", "ed_04_104");
        	sSelect = nexacro.getApplication().gds_menu.getColumn(nRow, "UM_PER_SELECT");
        	//sSelect = Eco.decode(sSelect, null, "1", sSelect);

        	var strArg = "ORDER=0";
        	this.gfn_TransactionP("search","JSP/ed/mnscript_select.jsp", "dsMnscript=dsMnscript", "dsMnscript=dsMnscript", strArg, "fnMnscriptCallback", false, "P", false, this);	//????????????

        	strArg = "SECTION_CODE=" + sSection_Code
        		   + " COMPETENCE=" + Eco.decode(sSelect, "1", "A");
        	this.gfn_TransactionP("search","JSP/ed/section_select2.jsp", "dsSection=dsSection", "dsSection=dsSection", strArg, "fnSectionCallback", false, "P", false, this);	//??????

        	strArg = "Section_Code=" + sSection_Code;
        	this.gfn_TransactionP("search","JSP/ed/paykind_select.jsp", "", "", strArg, "fnSectionPayCallback", true, "P", false, this);	//????????? ????????????
        };

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
        		this.dsOutOrdMst.addRow();
        		this.dsOutOrdMst.setColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_PAYKIND", "0");
        		this.dsOutOrdMst.setColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_NOTEAPRV", "0");
        	}
        	else	//????????????
        	{
        		this.dsOutOrdMst.addRow();
        		this.dsOutOrdMst.setColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_PAYKIND", "1");
        		this.dsOutOrdMst.setColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_NOTEAPRV", "0");
        	}
        }

        //mst ?????????
        this.dsOutOrdMst_onrowsetchanged = function(obj,e)
        {
        	var d = new Date();
        	var today = Eco.date.getMaskFormatString(d, "yyyyMMdd");

        	if(e.reason == 12 ) //dataset??? ??????????????? ???
        	{
        		obj.setColumn(e.row, "OUTORDMST_DATE", today);
        		obj.setColumn(e.row, "OUTORDMST_KIND", "C");
        		obj.setColumn(e.row, "OUTORDMST_CLASS", "C1");
        		obj.setColumn(e.row, "SECTION_CODE", sSection_Code);
        		obj.setColumn(e.row, "SECTION_NAME", sSection_Name);
        		obj.setColumn(e.row, "EMPLOYEE_ID", sSabun);
        		obj.setColumn(e.row, "EMPLOYEE_NAME", sName);
        		obj.setColumn(e.row, "OUTORDMST_PERMITEUSER0", null);
        		obj.setColumn(e.row, "OUTORDMST_PERMITEDATE0", null);
        		obj.setColumn(e.row, "OUTORDMST_PERMITE0", "0");
        		obj.setColumn(e.row, "OUTORDMST_PERMITEUSER", null);
        		obj.setColumn(e.row, "OUTORDMST_PERMITEDATE", null);
        		obj.setColumn(e.row, "OUTORDMST_PERMITE", "0");
        		obj.setColumn(e.row, "OUTORDMST_REMARK", null);
        		obj.setColumn(e.row, "OUTORDMST_RECEIPTDATE", null);
        		obj.setColumn(e.row, "OUTORDMST_DISCOUNTRATE", 0);
        		obj.setColumn(e.row, "OUTORDMST_RECEIPTDATE", null);
        		obj.setColumn(e.row, "BU_DECISIONECODE", this.dsSection.getColumn(this.cb_section.index, "BU_GRCODE"));
        		obj.setColumn(e.row, "I_FLOW_ID", null);
        		obj.setColumn(e.row, "OUTORDMST_PAYKIND", "1");
        		obj.setColumn(e.row, "OUTORDMST_NOTEAPRV", "0");
        		obj.setColumn(e.row, "OPEN_CHECK", "1");

        		if(obj.getColumn(e.row, "OUTORDMST_DATE") >= "20180820")
        			this.ck_open.set_visible(true);

        		this.edt_outOrderNo.text = obj.getColumn(e.row, "OUTORDMST_DATE") + "-" + obj.getColumn(e.row, "OUTORDMST_NO");

        		this.lfn_I_FLOW_FOMPAHT2_LOAD(sSabun, this.dsFormpath);	//???????????? ????????????

        		this.dsOutOrdDtl.clearData();
        		//this.dsOutOrdDtl.addRow();
        	}
        };

        //dtl ?????????
        this.dsOutOrdDtl_onrowsetchanged = function(obj,e)
        {
        	obj.setColumn(e.row, "OUTORDMST_ID", null);
        	obj.setColumn(e.row, "OUTORDDTL_SEQ", (this.dsOutOrdDtl.rowcount + 1).toString().padLeft(3,"0"));
        	obj.setColumn(e.row, "MNSCRIPT_CODE", null);
        	obj.setColumn(e.row, "BOOKMST_ID", null);
        	obj.setColumn(e.row, "BOOKMST_CODE", null);
        	obj.setColumn(e.row, "BOOKMST_YEAR", null);
        	obj.setColumn(e.row, "OUTREQMST_ID", 0);
        	obj.setColumn(e.row, "OUTREQDTL_SEQ", null);
        	obj.setColumn(e.row, "CUST_GUBN", null);
        	obj.setColumn(e.row, "CUST_CODE", null);
        	obj.setColumn(e.row, "ATHR_IDENTITY", null);
        	obj.setColumn(e.row, "OUTORDDTL_INVOICE_YM", null);
        	obj.setColumn(e.row, "EMPLOYEE_ID", sSabun);
        	obj.setColumn(e.row, "OUTORDDTL_QTY", 0);
        	obj.setColumn(e.row, "OUTORDDTL_UNITCOST", 0);
        	obj.setColumn(e.row, "OUTORDDTL_INCOMETAX", 0);
        	obj.setColumn(e.row, "OUTORDDTL_RESIDENTTAX", 0);
        	obj.setColumn(e.row, "OUTORDDTL_TAXRATE", 3);
        	obj.setColumn(e.row, "OUTORDDTL_AMOUNT", 0);
        	obj.setColumn(e.row, "OUTORDDTL_TONE", 0);
        	obj.setColumn(e.row, "OUTORDDTL_BOOKMSTNAME", null);
        	obj.setColumn(e.row, "OUTORDDTL_WORKCONTENT", null);
        	obj.setColumn(e.row, "OUTORDDTL_STANDARD", null);
        	obj.setColumn(e.row, "OUTORDDTL_RANGE", null);
        	obj.setColumn(e.row, "OUTORDDTL_FINISHDATE", " ");
        	obj.setColumn(e.row, "OUTORDDTL_PAYDATE", null);
        	obj.setColumn(e.row, "OUTORDDTL_DELETE", " ");
        	obj.setColumn(e.row, "OUTORDDTL_RANGE", null);
        	obj.setColumn(e.row, "OUTORDDTL_BILL_DATE", null);
        	obj.setColumn(e.row, "OUTORDDTL_BILL_NO", null);
        	obj.setColumn(e.row, "OUTORDDTL_EBILL", "0");

        	this.dsBookMst.clearData();
        };

        //??????????????????
        this.fn_approval_chk = function()
        {
        	var chkRow = this.dsApproval.findRow("SABUN", sSabun); //????????? ???????????? ??????

        	//??????????????? ?????? ?????? ????????? ???????????? ???????????? ???????????? ??????????????? ????????? ?????? ???????????? ????????? ??????
        	if( (this.dsApproval.rowcount >0 ) && ( (this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "EMPLOYEE_ID") != sSabun) || (chkRow == -1) || (this.dsApproval.getColumn(chkRow+1, "STATUS") == 1) ) )
        	{
        		alert("????????? ???????????? ???????????? ???????????? ?????? ????????? ?????? ??? ?????? ??? ??? ????????????.");
        		return false;
        	}
        	else
        		return true;
        }

        //???????????? ??????
        this.Div00_btn_tempchk_onclick = function(obj,e)
        {
        	if(this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "EMPLOYEE_ID") != sSabun)
        	{
        		alert("????????? ?????? ????????? ??????????????? ????????? ??? ????????????.");
        		return false;
        	}

        	var objParam = {p_fnum : 66,
        					p_ffnum : 7,
        					p_EMPLOYEE_ID : this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "EMPLOYEE_ID"),
        					P_SECTION_CODE : sSection_Code };

        	this.lfn_showModal("popupTemp", objParam, "gw::GW121.xfdl", "fnFormpathCallback", this, '', '', 670, 750); //GW121_2
        };

        this.fnFormpathCallback = function(svcId)
        {
        	if(this.fn_approval_chk())
        	{
        		if(section_value > 0)
        		{
        			if(this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_PAYKIND") == "1")
        			{	//????????? + ????????????
        				setAmountCode = this.lfn_Set_Approval( this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "I_FLOW_ID")
        												, this.dsOutOrdDtl.getSum("OUTORDDTL_AMOUNT")
        												, setAmountCode
        												, sSabun == gds_userinfo.getColumn(0, "DEPARTMENT_MANAGER")
        												, this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_NOTEAPRV")
        												, ""
        												, sSection_Code
        												, this.dsFormpath, this.ds_flow_order, this.ds_flow_order2);

        			}else
        			{	//????????? + ????????????
        				setAmountCode = this.lfn_Set_Approval_Edit(this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "I_FLOW_ID")
        												, this.dsOutOrdDtl.getSum("OUTORDDTL_AMOUNT")
        												, setAmountCode
        												, sSabun == gds_userinfo.getColumn(0, "DEPARTMENT_MANAGER")
        												, this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_NOTEAPRV")
        												, ""
        												, sSection_Code
        												, this.dsFormpath, this.ds_flow_order, this.ds_flow_order2);
        			}
        		}
        		else
        		{
        			//??????????????? + ????????????
        			setAmountCode = this.lfn_Set_Approval( this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "I_FLOW_ID")
        												, this.dsOutOrdDtl.getSum("OUTORDDTL_AMOUNT")
        												, setAmountCode
        												, sSabun == gds_userinfo.getColumn(0, "DEPARTMENT_MANAGER")
        												, this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_NOTEAPRV")
        												, ""
        												, sSection_Code
        												, this.dsFormpath, this.ds_flow_order, this.ds_flow_order2);

        		}
        	}
        }

        //????????????
        this.Div00_btn_new_onclick = function(obj,e)
        {
        	//if(this.dsOutOrdMst.rowcount > 0)
        		//??????
        	this.medt_totQty.set_value(0);
        	this.medt_totAmount.set_value(0);

        	this.dsOutOrdMst.clearData();
        	this.dsOutOrdMst.addRow();

        	this.dsApproval.clearData();
        	this.dsFormpath.clearData();
        	this.ds_file.clearData();
        	this.DS_CHAMJO.clearData();

        	if(section_value > 0)
        	{
        		this.dsOutOrdMst.setConstColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_PAYKIND", "0");
        		this.btn_pay.set_text("????????????");
        	}
        	else
        	{
        		this.dsOutOrdMst.setConstColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_PAYKIND", "1");
        		this.btn_pay.set_text("????????????");
        	}
        };

        //??????????????????
        this.Div00_btn_add_onclick = function(obj,e)
        {
        	var objParam = {p_dsOutOrdDtl : this.dsOutOrdDtl,
        					p_sSabun : sSabun,
        					p_sSection_Code : sSection_Code,
        					p_Kind : "C"};

        	this.lfn_showModal("popupTemp", objParam, "ed::ED150_PendOutReq_SearchF.xfdl", "PendOutReqCallback", this, '', '', 500, 400);
        };

        this.PendOutReqCallback = function(svcId, rt_value)
        {
        	this.medt_totAmount.set_value(this.dsOutOrdDtl.getSum("OUTORDDTL_AMOUNT"));
        	this.medt_totQty.set_value(this.dsOutOrdDtl.getSum("OUTORDDTL_QTY"));
        }

        //??????
        this.Div00_btn_search_onclick = function(obj,e)
        {
        	var objParam = {pdsOutOrdMst:this.dsOutOrdMst,
        					pdsOutOrdDtl:this.dsOutOrdDtl,
        					pdsSection:this.dsSection,
        					pdsFormpath:this.dsFormpath,
        					pSelect:sSelect,
        					pSabun:sSabun,
        					psectionCode:sSection_Code,
        					pOutOrderKind : "C",
        					pOutOrderEtc : "1"}; //popup ???????????? ????????? ???

        	this.lfn_showModal("popupSearch", objParam, "ed::ED150_SearchF.xfdl", "popupCallback", this, 10, 58, 400, 390);
        };

        this.popupCallback = function(svcId, rt_value)
        {
        	trace(this.dsOutOrdDtl.saveXML());

        	if(this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_DELETE") == "K")
        		alert("???????????? ????????? ???????????????");

        	if(this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_PAYKIND") == "0")
        		this.btn_pay.set_text("????????????");
        	else
        		this.btn_pay.set_text("????????????");

        	this.dsOutOrdDtl.filter("OUTORDDTL_DELETE !='D'");
        	this.fn_getFiles(rt_value);
        	this.fn_getChamjo(rt_value);
        	this.lfn_Approval_Select(rt_value, this.dsApproval, this.DS_GW_U, this.DS_GW_K, this.DS_GW_H, this.DS_GW_C, this.DS_GW_D);	//???????????? ?????? ??????
        }

        //????????????
        this.Div00_btn_tempSave_onclick = function(obj,e)
        {
        	temp_chk="Y";
        	this.fn_save();
        };

        //??????
        this.Div00_btn_save_onclick = function(obj,e)
        {
        	if(this.fn_approval_chk())
        	{
        		temp_chk = "N";
        		this.fn_save();
        	}
        };

        //??????
        this.fn_save = function()
        {
        	if((temp_chk == "Y") && (sSection_Code =="2F000"))
        		alert("???????????? ????????? ?????? ????????? ?????? ???????????? ?????????. \n??????????????? ?????? ?????? ??? ???????????????. \n?????? ?????? ??? ??? ?????????????????? ?????? ????????? ?????????.");

        	//??????????????????
        	if((temp_chk == "N") &&(this.ds_file.rowcount + this.DS_CHAMJO.rowcount <= 0))
        	{
        		alert("???????????? ?????? ??????????????? ????????? ?????????.");
        		return false;
        	}

        	var rowType = this.dsOutOrdMst.getRowType(this.dsOutOrdMst.rowposition);

        	if(rowType == 2 || rowType == 4)
        	{
        		if(this.fn_mst_save(rowType))
        			this.fn_dtl_save();
        	}else
        		this.fn_dtl_save();
        }

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
        		this.dsOutOrdMst.deleteRow(this.dsOutOrdMst.rowposition);
        		this.fn_mst_save("delete");
        		this.dsOutOrdDtl.clearData();
        		this.ds_file.clearData();
        		this.DS_CHAMJO.clearData();
        	}
        	else if(rt_value == "??????")
        	{
        		this.dsOutOrdDtl.setColumn(this.dsOutOrdDtl.rowposition, "OUTORDDTL_DELETE", "D");
        		this.dsOutOrdDtl.setColumn(this.dsOutOrdDtl.rowposition, "EMPLOYEE_ID", sSabun);
        		this.dsOutOrdDtl.setColumn(this.dsOutOrdDtl.rowposition, "OUTREQMST_ID", 0);
        		this.dsOutOrdDtl.setColumn(this.dsOutOrdDtl.rowposition, "OUTREQDTL_SEQ", "");
        		this.dsOutOrdDtl.filter("OUTORDDTL_DELETE!='D'");
        		this.fn_dtl_save();
        	}
        }

        //mst save
        this.fn_mst_save = function(rowType)
        {
        	var nRow = this.dsOutOrdMst.rowposition;
        	var setSave = true;

        	if((rowType != "delete") && (this.fn_mst_rowCheck(nRow) == false))
        	{
        		setSave = false;
        		return false;
        	}

        	if(setSave)
        	{
        		var str_url = "JSP/ed/ed150f_outorder_mst_dml.jsp";
        		var inds = "dsOutOrdMst=dsOutOrdMst:U";
        		//this.gfn_TransactionP(rowType ,str_url, inds, "", "", "fnMStSaveCallback", false, "P", false, this);

        		return true;
        	}
        }

        this.fnMStSaveCallback = function(svcId, errCode, errMsg, gv_rt_mst_id, gv_rt_mst_no, gv_rt_i_flow_id)
        {
        	var open_i_flow_id, rt_UTORDMST_ID, rt_UTORDMST_NO;
        	var nRow = this.dsOutOrdMst.rowposition;

        	if(errCode != 0)
        		alert(errMsg);
        	else if(svcId != "delete")
        	{
        		if(svcId == 2)
        		{
        			rt_UTORDMST_ID =nexacro.getApplication().gv_rt_mst_id;
        			rt_UTORDMST_NO = nexacro.getApplication().gv_rt_mst_no;
        			open_i_flow_id = nexacro.getApplication().gv_rt_i_flow_id;

        			this.dsOutOrdMst.setColumn(nRow, "OUTORDMST_ID", rt_UTORDMST_ID);
        			this.dsOutOrdMst.setColumn(nRow, "OUTORDMST_NO", rt_UTORDMST_NO);
        			this.dsOutOrdMst.setColumn(nRow, "I_FLOW_ID", open_i_flow_id);

        			this.dsOutOrdMst.setColumn(nRow, "OUTORDER_NO",
        										this.dsOutOrdMst.getColumn(nRow, "OUTORDMST_DATE") + "-" + rt_UTORDMST_NO);

        			this.dsOutOrdMst.setRowType(nRow, 1);

        		}else
        		{
        			open_i_flow_id = this.dsOutOrdMst.getColumn(nRow, "I_FLOW_ID");
        			rt_WITHHOLDMST_ID = this.dsOutOrdMst.getColumn(nRow, "WITHHOLDMST_ID");
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

        		this.fn_mstPay_save(svcId, rt_UTORDMST_ID);	//???????????? ??????
        	}
        };

        //mst row check
        this.fn_mst_rowCheck = function(nRow)
        {
        	if (nRow == -1)
        		return true;

        	if (this.dsOutOrdMst.getColumn(nRow, "OUTORDMST_DATE") == null)
        	{
        		alert("??????????????? ????????? ????????????.");
        		this.cal_mstDate.setFocus();
        		return false;
        	}

        	if (sSection_Code == "99000" || gds_userinfo.getColumn(0,"BIRTH_DT") == "" )
        	{
        		if(this.dsOutOrdMst.getColumn(nRow, "REF_USER") == null|| this.dsOutOrdMst.getColumn(nRow, "REF_USER") == "")
        		{
        			alert("?????????????????? ?????? ??????????????? ?????? ???????????? ????????? ????????????.");
        			this.edt_ref.setFocus();
        			return false;
        		}
        	}

        	if ((this.dsOutOrdMst.getRowType(nRow) == 2) && (this.dsFormpath.rowcount <= 0))
        	{
        		alert("??????????????? ??????????????????.");
        		this.Div00_btn_tempchk_onclick();
        		return false;
        	}

        	return true;
        }

        //dtl save
        this.fn_dtl_save = function()
        {
        	var nRow = this.dsOutOrdDtl.rowposition;
        	var setSave = true;

        	for(var i=0; i<this.dsOutOrdDtl.rowcount; i++)
        	{
        		this.dsOutOrdDtl.setColumn(i, "OUTORDMST_ID", this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_ID"));

        		if(this.fn_dtl_rowCheck(i) == false)
        		{
        			setSave = false;
        			return false;
        			break;
        		}
        	}

        	if(setSave)
        	{
        		var str_url = "JSP/ed/ed150f_outorder_dtl_dml.jsp";
        		var inds = "dsOutOrdDtl=dsOutOrdDtl:U";
        		var strArg = "AD_KIND=07";
        		//this.gfn_TransactionP("save",str_url, inds, "", strArg, "fnDtlSaveCallback", false, "P", false, this);

        		return true;
        	}
        };

        this.fnDtlSaveCallback = function (svcId, errCod, errMsg)
        {
        	if(errCod != 0)
        		alert(errMsg);
        	else
        	{
        		if(this.ds_file.rowcount > 0)				//???????????? ??????
        			this.fn_upload_file(this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "I_FLOW_ID"));

        		if(this.DS_CHAMJO.rowcount > 0)				//???????????? ??????
        			this.fn_upload_chamjo(this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "I_FLOW_ID"));

        		if(this.fn_approval_chk())
        		{
        			if(section_value > 0)
        			{
        				if(this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_PAYKIND") == "1")
        				{	//????????? + ????????????
        					setAmountCode = this.lfn_Set_Approval( this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "I_FLOW_ID")
        													, this.dsOutOrdDtl.getSum("OUTORDDTL_AMOUNT")
        													, setAmountCode
        													, sSabun == gds_userinfo.getColumn(0, "DEPARTMENT_MANAGER")
        													, this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_NOTEAPRV")
        													, ""
        													, sSection_Code
        													, this.dsFormpath, this.ds_flow_order, this.ds_flow_order2);

        				}else
        				{	//????????? + ????????????
        					setAmountCode = this.lfn_Set_Approval_Edit(this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "I_FLOW_ID")
        													, this.dsOutOrdDtl.getSum("OUTORDDTL_AMOUNT")
        													, setAmountCode
        													, sSabun == gds_userinfo.getColumn(0, "DEPARTMENT_MANAGER")
        													, this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_NOTEAPRV")
        													, ""
        													, sSection_Code
        													, this.dsFormpath, this.ds_flow_order, this.ds_flow_order2);
        				}
        			}
        			else
        			{
        				//???????????? + ????????????
        				setAmountCode = this.lfn_Set_Approval( this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "I_FLOW_ID")
        													, this.dsOutOrdDtl.getSum("OUTORDDTL_AMOUNT")
        													, setAmountCode
        													, sSabun == gds_userinfo.getColumn(0, "DEPARTMENT_MANAGER")
        													, this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_NOTEAPRV")
        													, ""
        													, sSection_Code
        													, this.dsFormpath, this.ds_flow_order, this.ds_flow_order2);

        			}
        		}
        	}
        };


        //dtl check row
        this.fn_dtl_rowCheck = function(nRow)
        {
        	if (nRow == -1)
        		return true;

        	if (this.dsOutOrdDtl.getColumn(nRow, "MNSCRIPT_CODE") == null)
        	{
        		alert("??????????????? ????????? ????????????.");
        		this.cb_mnScript.dropdown();
        		return false;
        	}

        	if ((this.dsOutOrdDtl.getColumn(nRow, "BOOKMST_CODE") == null)
        		|| (this.dsOutOrdDtl.getColumn(nRow, "BOOKMST_YEAR") == null))
        	{
        		alert("????????? ????????? ????????????.");
        		this.btn_book_onclick();
        		return false;
        	}

        	if (this.dsOutOrdDtl.getColumn(nRow, "OUTORDDTL_WORKCONTENT") == null)
        	{
        		alert("??????????????? ????????? ????????????.");
        		this.edt_workContent.setFocus();
        		return false;
        	}

        	if (this.dsMnscript.getColumn(this.dsMnscript.rowposition, "MNSCRIPT_CLASS") != "3")
        	{
        		if ((this.dsOutOrdDtl.getColumn(nRow, "OUTORDDTL_QTY") == null)
        			|| (this.dsOutOrdDtl.getColumn(nRow, "OUTORDDTL_QTY") == 0))
        		{
        			alert("??????????????? ????????? ????????????.");
        			this.medt_qty.setFocus();
        			return false;
        		}

        		if ((this.dsOutOrdDtl.getColumn(nRow, "OUTORDDTL_UNITCOST") == null)
        			|| (this.dsOutOrdDtl.getColumn(nRow, "OUTORDDTL_UNITCOST") == 0))
        		{
        			alert("??????????????? ????????? ????????????.");
        			this.medt_unitCost.setFocus();
        			return false;
        		}
        	}

        	if ((this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_DATE") > "20121121") &&
        	    ((this.dsOutOrdDtl.getColumn(nRow, "OUTORDDTL_ACNTDATE") == null) ||
        		 (this.dsOutOrdDtl.getColumn(nRow, "OUTORDDTL_ACNTDATE") == "")) )
        	{
        		alert("??????????????? ????????? ????????????.");
        		this.cal_acntDate.SetFocus();
        		return false;
        	}

        	if(this.dsOutOrdDtl.getColumn(nRow, "OUTORDDTL_INVOICE_YM") == null)
        	{
        		alert("????????? ??????????????? ????????? ????????????.");
        		this.cal_invoiceYM.setFocus();
        		return false;
        	}

        	return true;
        };

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
        this.Grid00_oncellclick = function(obj,e)
        {
        	if(e.cell == 1)
        		this.lfn_FileDownload(this.fileDownTrans ,this.ds_file, gv_urlFile, e.row);
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

        //??????????????????
        this.btn_pay_onclick = function(obj,e)
        {
        	this.lfn_showModal("popupPayKind", "", "ed::EDMstApproval_KindF.xfdl", "popupPayKindCallback", this, 10, 58, 300, 200);
        };

        this.popupPayKindCallback = function (svcId, rtValue)
        {
        	if(rtValue == 0) //????????????
        	{
        		this.btn_pay.set_text("????????????");
        		this.dsOutOrdMst.setColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_PAYKIND", "0");
        	}
        	else	//????????????
        	{
        		this.btn_pay.set_text("????????????");
        		this.dsOutOrdMst.setColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_PAYKIND", "1");
        	}

        };

        //???????????? ??????
        this.fn_mstPay_save = function(rowType, mstId)
        {
        	var nRow = this.dsOutOrdMst.rowposition;
        	var payKind = this.dsOutOrdMst.getColumn(nRow, "OUTORDMST_PAYKIND");
        	var noteAprv = this.dsOutOrdMst.getColumn(nRow, "OUTORDMST_NOTEAPRV" );

        	var strArg = "OUTORDMST_ID=" + mstId
        				+" OUTORDMST_PAYKIND=" + payKind
        				+" OUTORDMST_NOTEAPRV=" + noteAprv
        				+" OUTORDMST_STATUS="+ rowType;

        	this.gfn_TransactionP("search","JSP/ed/ed150f_outorder_mst_pay_dml.jsp", "", "", strArg, "", true, "P", false, this);
        }

        //????????????
        this.btn_book_onclick = function(obj,e)
        {
        	var objParam = {dsParam1:this.dsBookMst};
        	this.lfn_showModal("popupAddress", objParam, "mk::MKBook_SearchF.xfdl", "popupBookCallBack", this, 10, 58, 450, 400);
        };

        this.popupBookCallBack = function(svcId)
        {
        	var nRow = this.dsOutOrdDtl.rowposition;
        	var bRow = this.dsBookMst.rowposition;

        	this.dsOutOrdDtl.setColumn(nRow, "BOOKMST_CODE", this.dsBookMst.getColumn(bRow, "BOOKMST_CODE"));
        	this.dsOutOrdDtl.setColumn(nRow, "BOOKMST_YEAR", this.dsBookMst.getColumn(bRow, "BOOKMST_YEAR"));
        	this.dsOutOrdDtl.setColumn(nRow, "OUTORDDTL_BOOKMSTNAME", this.dsBookMst.getColumn(bRow, "BOOKMST_NAME"));
        	this.dsOutOrdDtl.setColumn(nRow, "BOOKMST_SEQ", this.dsBookMst.getColumn(bRow, "BOOKMST_SEQ"));
        	this.dsOutOrdDtl.setColumn(nRow, "BOOKMST_ID", this.dsBookMst.getColumn(bRow, "BOOKMST_ID"));
        	this.dsOutOrdDtl.setColumn(nRow, "BOOKCODEYEAR", this.dsBookMst.getColumn(bRow, "BOOKMST_CODE") + " [" + this.dsBookMst.getColumn(bRow, "BOOKMST_YEAR") + "]" );
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
        			this.edt_bookName.set_value("?????? ?????? ?????????");
        			this.dsOutOrdDtl.setColumn(this.dsOutOrdDtl.rowposition, "BOOKCODEYEAR", this.edt_bookCode.value + " [" + this.edt_bookYear.value + "]");
        			return false;
        		}
        		else if(this.dsBookMst.rowcount == 1)
        		{
        			this.edt_bookName.set_value(this.dsBookMst.getColumn(this.dsBookMst.rowposition, "BOOKMST_NAME"));

        			this.dsOutOrdDtl.setColumn(this.dsOutOrdDtl.rowposition, "BOOKMST_ID", this.dsBookMst.getColumn(this.dsBookMst.rowposition, "BOOKMST_ID"));
        			this.dsOutOrdDtl.setColumn(this.dsOutOrdDtl.rowposition, "WITHHOLDDTL_BOOKNAME", this.edt_bookName.value);
        			this.dsOutOrdDtl.setColumn(this.dsOutOrdDtl.rowposition, "BOOKCODEYEAR", this.edt_bookCode.value + " [" + this.edt_bookYear.value + "]");
        		}
        		else
        		{
        			alert("2??? ????????? ????????? ?????????????????????.");

        			var objParam = {dsParam1:this.dsBookMst};
        			this.lfn_showModal("popupAddress", objParam, "mk::MKBook_SearchF.xfdl", "popupBookCallBack", this, 10, 58, 450, 400);
        		}
        	}

        };

        //??????
        this.Div00_btn_print_onclick = function(obj,e)
        {
        	var nRow = this.dsOutOrdMst.rowposition;
        	var OUTORDMST_ID = this.dsOutOrdMst.getColumn(nRow, "OUTORDMST_ID");
        	var I_FLOW_ID = this.dsOutOrdMst.getColumn(nRow, "I_FLOW_ID");
        	var rdUrl, rdParam;

        	if(OUTORDMST_ID != null)
        	{
        		rdUrl = gv_urlMrd + "/ed/ED154_0.mrd";
        		rdParam  = "/rp ["+ OUTORDMST_ID + "][C]";

        		this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1024, 770);
        	}
        	else
        		alert("????????? ????????? ????????????.");
        };

        //?????? Grid ?????????
        this.grd_dtl_oncelldblclick = function(obj,e)
        {
        	var strUrl = "JSP/pd/pd_acnt_doc.jsp";
        	var inds = "dsAcntDoc=dsAcntDoc";
        	var outds = "dsAcntDoc=dsAcntDoc";
        	var strArg = "AD_KIND=07"
        			   + " AD_ID=" + this.dsOutOrdDtl.getColumn(e.row, "OUTORDMST_ID")
        			   + " AD_SEQ=" + this.dsOutOrdDtl.getColumn(e.row, "OUTORDDTL_SEQ");

        	this.gfn_TransactionP("select" ,strUrl, inds, outds, strArg, "fnAcntCallback", true, "P", false, this);
        };

        this.fnAcntCallback = function (svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        	{
        		var objRect = this.grd_dtl.getCellRect(this.dsOutOrdDtl.rowposition, 2);

        		var x = objRect.left;
        		var y = objRect.top;

        		this.PopupDiv00.trackPopupByComponent(this.grd_dtl, x, y);
        	}
        };

        //?????????, ?????????, ???????????? ???????????? ??????
        this.dsOutOrdDtl_oncolumnchanged = function(obj,e)
        {
        	if((e.columnid == "OUTORDDTL_AMOUNT") || (e.columnid == "OUTORDDTL_QTY") || (e.columnid == "OUTORDDTL_INCOMETAX"))
        	{
        		this.medt_totAmount.set_value(obj.getSum("OUTORDDTL_AMOUNT") + obj.getSum("OUTORDDTL_INCOMETAX"));
        		this.medt_totQty.set_value(obj.getSum("OUTORDDTL_QTY"));
        	}

        	//??????????????? ???????????? ??????
        	if((e.columnid == "OUTORDDTL_BILL_DATE") && (obj.getColumn(e.row, e.columnid) != null))
        	{
        		if(this.dsOutOrdDtl.getMax(e.columnid) != obj.getColumn(e.row, e.columnid))
        		{
        			obj.setColumn(e.row, e.columnid, null);
        			alert("??????????????? ?????? ?????????????????? ????????? ??? ????????????.");
        			return false;
        		}
        	}
        };

        //???????????? ????????????
        this.btn_payDate_onclick = function(obj,e)
        {
        	var sDate = this.dsOutOrdDtl.getColumn(this.dsOutOrdDtl.rowposition, "OUTORDDTL_PAYDATE");

        	for(var i = 0; i < this.dsOutOrdDtl.rowcount; i++)
        	{
        		this.dsOutOrdDtl.setColumn(i, "OUTORDDTL_PAYDATE", sDate);
        	}
        };

        //??????????????? ????????????
        this.btn_finishDate_onclick = function(obj,e)
        {
        	var sDate = this.dsOutOrdDtl.getColumn(this.dsOutOrdDtl.rowposition, "OUTORDDTL_FINISHDATE");

        	for(var i = 0; i < this.dsOutOrdDtl.rowcount; i++)
        	{
        		this.dsOutOrdDtl.setColumn(i, "OUTORDDTL_FINISHDATE", sDate);
        	}
        };

        //???????????????
        this.chk_permite_onclick = function(obj,e)
        {
        	if(obj.value == 0)
        	{
        		this.dsOutOrdMst.setColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_PERMITEDATE", null);
        		this.dsOutOrdMst.setColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_PERMITEUSER", null);
        	}
        	else if(sSelect > 5)
        	{
        		var d = new Date();
        		var today = Eco.date.getMaskFormatString(d, "yyyyMMdd");

        		this.dsOutOrdMst.setColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_PERMITEDATE", today);
        		this.dsOutOrdMst.setColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_PERMITEUSER", sSabun);
        	}
        };

        //????????????
        this.CheckBox02_onclick = function(obj,e)
        {
        	if(obj.value == 1)
        		this.dsOutOrdMst.setColumn(this.dsOutOrdMst.rowposition, "OUTORDERMST_NOTEAPRV", "1");
        	else
        		this.dsOutOrdMst.setColumn(this.dsOutOrdMst.rowposition, "OUTORDERMST_NOTEAPRV", "0");
        };

        //????????????
        this.cb_section_onitemchanged = function(obj,e)
        {
        	sSection_Code = obj.value;
        	sSection_Name = obj.text;
        	this.dsOutOrdMst.setColumn(this.dsOutOrdMst.rowposition, "SECTION_CODE", sSection_Code);
        	this.dsOutOrdMst.setColumn(this.dsOutOrdMst.rowposition, "SECTION_NAME", sSection_Name.trim());
        };

        //????????? ??? ????????????
        this.fn_amountCalculate = function(obj,e)
        {
        	var nRow = this.dsOutOrdDtl.rowposition;
        	var kind = this.dsOutOrdMst.getColumn(nRow, "OUTORDMST_KIND");
        	var tax = Eco.decode(this.rd_tax.index,0,10,0);

        	//?????? ??????
        	this.dsOutOrdDtl.setColumn(nRow, "OUTORDDTL_TAXRATE", Eco.decode(kind, "P", 3, tax));

        	var amount = new nexacro.Decimal(this.dsOutOrdDtl.getColumn(nRow, "OUTORDDTL_QTY") * this.dsOutOrdDtl.getColumn(nRow, "OUTORDDTL_UNITCOST"));
        	var incometax = new nexacro.Decimal(amount * (tax / 100));


        	this.dsOutOrdDtl.setColumn(nRow, "OUTORDDTL_AMOUNT", amount.trunc());
        	this.dsOutOrdDtl.setColumn(nRow, "OUTORDDTL_INCOMETAX", incometax.trunc());
        	this.dsOutOrdDtl.setColumn(nRow, "OUTORDDTL_TOTAMOUNT", this.dsOutOrdDtl.getColumn(nRow, "OUTORDDTL_AMOUNT") +  this.dsOutOrdDtl.getColumn(nRow, "OUTORDDTL_INCOMETAX") )

        	//????????? ?????? (????????? 0???)
        	this.dsOutOrdDtl.setColumn(nRow, "OUTORDDTL_RESIDENTTAX", 0);
        };

        //mst ????????? ????????? ?????? ??????
        this.dsOutOrdMst_onrowposchanged = function(obj,e)
        {
        	this.fn_compEnable(e.row);	//???????????? ?????????
        	this.fn_compView(sSelect >= 5);	//????????? ???????????? (5 = 1??? ?????????)

        	this.chk_permite.set_enable(sSelect >= 5);
        };

        this.fn_compEnable = function(nRow)
        {
        	var setValue = true;

        	if(sSelect < 6) //2??????????????? ?????????
        		setValue = (this.dsOutOrdMst.getColumn(nRow, "OUTORDMST_PERMITE") != "1");

        	this.Div00.form.btn_tempchk.set_enable(setValue);
        	this.Div00.form.btn_add.set_enable(setValue);
        	this.Div00.form.btn_save.set_enable(setValue);
        	this.Div00.form.btn_delete.set_enable(setValue);

        	this.medt_qty.set_enable(setValue);
        	this.rd_tax.set_enable(setValue);
        	this.txa_remark.set_enable(setValue);
        	this.medt_amount.set_enable(setValue);
        	this.medt_taxRate.set_enable(setValue);
        }

        //????????? ????????????
        this.fn_compView = function(setValue)
        {
        	this.btn_book.set_enable(setValue);
        	this.edt_bookCode.set_enable(setValue);
        	this.edt_bookYear.set_enable(setValue);
        	this.cal_receipDate.set_enable(setValue);
        	this.cal_payDate.set_enable(setValue);
        	this.btn_payDate.set_enable(setValue);
        	this.cal_finishDate.set_enable(setValue);
        	this.btn_finishDate.set_enable(setValue);

        	this.cal_finishDate.set_visible(setValue);
        	this.btn_finishDate.set_visible(setValue);
        }

        //????????? ?????? ??????
        this.dsOutOrdDtl_onrowposchanged = function(obj,e)
        {
        	this.medt_qty.set_enable(this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_PERMITE") == "0");

        	if(obj.getColumn(e.newrow, "OUTORDDTL_AMOUNT") != 0)
        		this.rd_tax.set_index(Eco.decode(obj.getColumn(e.newrow, "OUTORDDTL_INCOMETAX"),0,1,0));
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

        this.ED154F_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.ED154F_ontimer = function(obj,e)
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
            this.addEventHandler("onload",this.ED154F_onload,this);
            this.addEventHandler("onsize",this.ED154F_onsize,this);
            this.addEventHandler("ontimer",this.ED154F_ontimer,this);
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
            this.Static00_06.addEventHandler("onclick",this.Static00_onclick,this);
            this.medt_totQty.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_04.addEventHandler("onclick",this.Static00_onclick,this);
            this.medt_totAmount.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_08.addEventHandler("onclick",this.Static00_onclick,this);
            this.cb_mnScript.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.st_SCMst_availableTerm.addEventHandler("onclick",this.Static00_onclick,this);
            this.cb_section.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.cb_section.addEventHandler("onitemchanged",this.cb_section_onitemchanged,this);
            this.Static00_07.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_06_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.medt_juminNo.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_06_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.edt_name.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.st_SCDtl_contractAmount.addEventHandler("onclick",this.Static00_onclick,this);
            this.medt_qty.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.medt_qty.addEventHandler("onkillfocus",this.fn_amountCalculate,this);
            this.Static00_10.addEventHandler("onclick",this.Static00_onclick,this);
            this.medt_unitCost.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.medt_unitCost.addEventHandler("onkillfocus",this.fn_amountCalculate,this);
            this.Static00_11_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.medt_amount.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.st_taxRate00.addEventHandler("onclick",this.Static00_onclick,this);
            this.rd_payKind.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.st_taxRate.addEventHandler("onclick",this.Static00_onclick,this);
            this.cal_receipDate.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_13.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_dtl.addEventHandler("oncelldblclick",this.grd_dtl_oncelldblclick,this);
            this.chk_permite.addEventHandler("onclick",this.chk_permite_onclick,this);
            this.chk_permite.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.cal_acntDate.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.medt_taxRate.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.medt_taxRate.addEventHandler("onchanged",this.fn_amountCalculate,this);
            this.Static00_14_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.edt_workContent.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_06_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.medt_tone.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_06_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.edt_standard.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_14.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_06_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.cal_invoiceYM.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.rd_tax.addEventHandler("onitemchanged",this.fn_amountCalculate,this);
            this.btn_payDate.addEventHandler("onclick",this.btn_payDate_onclick,this);
            this.cal_payDate.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.btn_finishDate.addEventHandler("onclick",this.btn_finishDate_onclick,this);
            this.cal_finishDate.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.CheckBox02.addEventHandler("onclick",this.CheckBox02_onclick,this);
            this.CheckBox02.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_09.addEventHandler("onclick",this.Static00_onclick,this);
            this.edt_ref.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.txa_remark.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.Static00_15.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_file.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.grd_file.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.btn_file.addEventHandler("onclick",this.btn_file_onclick,this);
            this.btn_Fdelete.addEventHandler("onclick",this.btn_Fdelete_onclick,this);
            this.btn_cham.addEventHandler("onclick",this.btn_cham_onclick,this);
            this.grd_cham.addEventHandler("oncelldblclick",this.grd_cham_oncelldblclick,this);
            this.grd_cham.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.btn_pay.addEventHandler("onclick",this.btn_pay_onclick,this);
            this.btn_book.addEventHandler("onclick",this.btn_book_onclick,this);
            this.edt_bookCode.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.edt_bookYear.addEventHandler("onkeydown",this.edt_bookYear_onkeydown,this);
            this.edt_bookName.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.dsOutOrdMst.addEventHandler("onrowsetchanged",this.dsOutOrdMst_onrowsetchanged,this);
            this.dsOutOrdMst.addEventHandler("onrowposchanged",this.dsOutOrdMst_onrowposchanged,this);
            this.dsOutOrdDtl.addEventHandler("onrowsetchanged",this.dsOutOrdDtl_onrowsetchanged,this);
            this.dsOutOrdDtl.addEventHandler("oncolumnchanged",this.dsOutOrdDtl_oncolumnchanged,this);
            this.dsOutOrdDtl.addEventHandler("onrowposchanged",this.dsOutOrdDtl_onrowposchanged,this);
            this.ds_file.addEventHandler("onrowsetchanged",this.ds_file_onrowsetchanged,this);
            this.ds_file.addEventHandler("onvaluechanged",this.ds_file_onvaluechanged,this);
        };
        this.loadIncludeScript("ED154F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
