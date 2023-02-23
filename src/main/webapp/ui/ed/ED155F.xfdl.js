(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED155F");
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


            obj = new Dataset("dsBookMst", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAcntDoc", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNT_NAME\" type=\"STRING\" size=\"35\"/><Column id=\"AD_KIND\" type=\"STRING\" size=\"2\"/><Column id=\"AD_ACNT_KIND\" type=\"STRING\" size=\"1\"/><Column id=\"AD_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"AD_NO\" type=\"STRING\" size=\"1\"/><Column id=\"AD_ACNT_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"AD_USEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"AD_CUST_NAME\" type=\"STRING\" size=\"35\"/><Column id=\"AD_ID\" type=\"INT\" size=\"20\"/><Column id=\"AD_DEBTOR_AMOUNT\" type=\"INT\" size=\"20\"/><Column id=\"AD_CREDIT_AMOUNT\" type=\"INT\" size=\"20\"/><Column id=\"AD_VOUCHERS\" type=\"STRING\" size=\"50\"/><Column id=\"AD_MANAGEMENT_ITEM\" type=\"STRING\" size=\"200\"/><Column id=\"AD_REMARK\" type=\"STRING\" size=\"200\"/></ColumnInfo>");
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


            obj = new Dataset("dsOutOrdDtlXls", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OUTORDDTL_ACNTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"OUTORDDTL_BOOKMSTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MNSCRIPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OUTORDDTL_WORKCONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTORDDTL_TONE\" type=\"STRING\" size=\"256\"/><Column id=\"OUTORDDTL_STANDARD\" type=\"STRING\" size=\"256\"/><Column id=\"OUTORDDTL_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"OUTORDDTL_UNITCOST\" type=\"STRING\" size=\"256\"/><Column id=\"OUTORDDTL_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTORDDTL_INCOMETAX\" type=\"STRING\" size=\"256\"/><Column id=\"OUTORDDTL_TOTAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTORDDTL_INVOICE_YM\" type=\"STRING\" size=\"256\"/><Column id=\"OUTORDDTL_EBILL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCust", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"7","63","25","92",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","63","25","162",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("발송");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"7","63","25","25",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("출력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"7","75","25","357",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("내용추가");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"7","75","25","437",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("신규카드");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_tempchk",null,"7","90","25","517",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("결재라인설정");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_tempSave",null,"7","75","25","613",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("임시저장");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#7fb39d");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_xlsDownload",null,"7","120","25","845",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("엑셀 양식 다운로드");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#7fb39d");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#f5f9f7");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_xlsImport",null,"7","120","25","719",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("엑셀 데이터 업로드");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_background("#7fb39d");
            obj.set_border("2px solid #7fb39d");
            obj.set_color("#f5f9f7");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("ck_open","180","19","78","22",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("부서공유");
            obj.set_value("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","15","60","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("관리카드번호");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_outOrderNo","Static00_02:2","60","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","edt_outOrderNo:3","60","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("작성일자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_mstDate","Static00_01:2","60","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","cal_mstDate:2","60","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("관련부서");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06","15","102","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("총쪽수");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_totQty","Static00_06:3","102","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_format("#,#.#");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04","medt_totQty:2","102","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("총금액");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_totAmount","Static00_04:2","102","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_format("#,#");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_08","medt_totAmount:3","103","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("작업구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_mnScript","Static00_08:3","102","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("dsMnscript");
            obj.set_codecolumn("MNSCRIPT_CODE");
            obj.set_datacolumn("MNSCRIPT_NAME");
            obj.set_enable("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("st_SCMst_availableTerm","cb_mnScript:3","102","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("완료일자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_section","Static00:4","60","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("dsSection");
            obj.set_codecolumn("SECTION_CODE");
            obj.set_datacolumn("SECTION_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_07","cb_section:3","60","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("접수일자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_custCode","15","144","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("업체코드");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_custCode","btn_custCode:2","145","4.06%","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_trimtype("both");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_custName","medt_custCode:2","145","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("업체명");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_custName","btn_custName:2","145","24.61%","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("st_SCDtl_contractAmount","15","230","100","40",null,null,null,null,null,null,this);
            obj.set_text("수량");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_taborder("42");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_qty","st_SCDtl_contractAmount:2","230","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_format("#,#.#");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_10","medt_qty:3","230","7.81%","40",null,null,null,null,null,null,this);
            obj.set_text("단가");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_taborder("43");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_unitCost","Static00_10:2","230","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_format("#,#");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_11_00","medt_unitCost:3","230","7.81%","40",null,null,null,null,null,null,this);
            obj.set_text("지급액");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            obj.set_taborder("44");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_amount","Static00_11_00:2","230","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_format("#,#");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("st_taxRate00","medt_amount:3","230","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("비용구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rd_payKind","st_taxRate00:2","230","14.22%","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_border("1px solid darkgray");
            obj.set_padding("7px");
            var rd_payKind_innerdataset = new nexacro.NormalDataset("rd_payKind_innerdataset", obj);
            rd_payKind_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약금</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">외주비정산</Col></Row></Rows>");
            obj.set_innerdataset(rd_payKind_innerdataset);
            obj.set_text("외주비정산");
            obj.set_value("2");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("st_taxRate","rd_payKind:3","230","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("세액");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_receipDate","Static00_07:2","60","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_13","cal_receipDate:6","60","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("승인여부");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dtl","14","463","97%","247",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_binddataset("dsOutOrdDtl");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"구분\"/><Cell col=\"1\" rowspan=\"2\" text=\"도서코드\"/><Cell col=\"2\" rowspan=\"2\" text=\"도서명\"/><Cell col=\"3\" rowspan=\"2\" text=\"업체명\"/><Cell col=\"4\" rowspan=\"2\" text=\"작업내용\"/><Cell col=\"5\" rowspan=\"2\" text=\"색도\"/><Cell col=\"6\" rowspan=\"2\" text=\"규격\"/><Cell col=\"7\" colspan=\"3\" text=\"작업\"/><Cell col=\"10\" rowspan=\"2\" text=\"지급일자\"/><Cell row=\"1\" col=\"7\" text=\"수량\"/><Cell row=\"1\" col=\"8\" text=\"단가\"/><Cell row=\"1\" col=\"9\" text=\"지급액\"/></Band><Band id=\"body\"><Cell text=\"bind:MNSCRIPT_NAME\"/><Cell col=\"1\" text=\"bind:BOOKCODEYEAR\"/><Cell col=\"2\" text=\"bind:OUTORDDTL_BOOKMSTNAME\"/><Cell col=\"3\" text=\"bind:OUTER_NAME\"/><Cell col=\"4\" text=\"bind:OUTORDDTL_WORKCONTENT\"/><Cell col=\"5\" text=\"bind:OUTORDDTL_TONE\"/><Cell col=\"6\" text=\"bind:OUTORDDTL_STANDARD\"/><Cell col=\"7\" text=\"bind:OUTORDDTL_QTY\"/><Cell col=\"8\" text=\"bind:OUTORDDTL_UNITCOST\"/><Cell col=\"9\" text=\"bind:OUTORDDTL_AMOUNT\"/><Cell col=\"10\" text=\"bind:OUTORDDTL_PAYDATE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_permite","Static00_13:12","60","6.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("재경부승인");
            obj.set_value("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_acntDate","st_SCMst_availableTerm:2","102","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_taxRate","st_taxRate:2","230","7.27%","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_format("#,#");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_14_00","15","187","100","40",null,null,null,null,null,null,this);
            obj.set_text("작업내용");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            obj.set_taborder("50");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_workContent","Static00_14_00:2","187","29.06%","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06_00","edt_workContent:3","187","7.81%","40",null,null,null,null,null,null,this);
            obj.set_text("색도");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_taborder("51");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_tone","Static00_06_00:1","187","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_limitbymask("none");
            obj.set_format("0");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06_00_00_00","medt_tone:1","187","7.81%","40",null,null,null,null,null,null,this);
            obj.set_text("규격");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_standard","Static00_06_00_00_00:2","187","20.08%","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_maxlength("16");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_14","16","316","100","97",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("비고");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06_00_00","15","273","100","40",null,null,null,null,null,null,this);
            obj.set_text("세금계산서\r\n발행년월");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_invoiceYM","Static00_06_00_00:3","273","6.41%","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            this.addChild(obj.name, obj);

            obj = new Radio("rd_billKind","cal_invoiceYM:2","273","14.22%","40",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_border("1px solid darkgray");
            obj.set_padding("7px");
            var rd_billKind_innerdataset = new nexacro.NormalDataset("rd_billKind_innerdataset", obj);
            rd_billKind_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전자계산서</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">세금계산서</Col></Row></Rows>");
            obj.set_innerdataset(rd_billKind_innerdataset);
            obj.set_text("전자계산서");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("rd_tax","rd_billKind:2","273","8.91%","40",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_border("1px solid darkgray");
            obj.set_padding("7px");
            var rd_tax_innerdataset = new nexacro.NormalDataset("rd_tax_innerdataset", obj);
            rd_tax_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">과세</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">면세</Col></Row></Rows>");
            obj.set_innerdataset(rd_tax_innerdataset);
            obj.set_text("과세");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ck_fixCust","rd_tax:2","273","9.7%","40",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("업체고정하기");
            obj.set_padding("10px");
            obj.set_border("1px solid darkgray");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ck_fixBook","ck_fixCust:2","273","9.7%","40",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("도서고정하기");
            obj.set_padding("10px");
            obj.set_border("1px solid darkgray");
            this.addChild(obj.name, obj);

            obj = new Button("btn_payDate","ck_fixBook:2","273","7.73%","40",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("지급일자");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_payDate","btn_payDate:3","273","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_finishDate","cal_payDate:2","273","7.73%","40",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("원가산업일");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_finishDate","btn_finishDate:3","273","11.72%","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","cal_acntDate:10","107","7.27%","33",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("수가결재진행");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_09","16","415","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("참조");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ref","Static00_09:2","415","42.27%","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_remark","Static00_14:1","316","42.27%","97",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_15","txa_remark:3","316","7.81%","70",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("첨부파일");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_file","Static00_15:2","316","36.88%","70",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_binddataset("ds_file");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"495\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:GB\"/><Cell col=\"1\" text=\"bind:F_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file","grd_file:2","325","2.66%","25",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #ffffff");
            obj.set_border("0px none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Fdelete","grd_file:0","359","2.66%","24",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_background("url(\'Img::btn_TF_Close_O.png\') no-repeat center center #ffffff");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cham","edt_ref:2","388","7.81%","70",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("참조문서");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cham","btn_cham:2","388","38.91%","70",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_binddataset("DS_CHAMJO");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"111\"/><Column size=\"356\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:CO_SEQ\"/><Cell col=\"1\" text=\"bind:TITLE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pay","CheckBox02:22","104","7.81%","36",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("정기지급");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계정과목\"/><Cell col=\"1\" text=\"차변금액\"/><Cell col=\"2\" text=\"대변금액\"/><Cell col=\"3\" text=\"증빙관리\"/><Cell col=\"4\" text=\"관리항목\"/></Band><Band id=\"body\"><Cell text=\"bind:ACNT_NAME\"/><Cell col=\"1\" text=\"bind:AD_DEBTOR_AMOUNT\"/><Cell col=\"2\" text=\"bind:AD_CREDIT_AMOUNT\"/><Cell col=\"3\" text=\"bind:AD_VOUCHERS\"/><Cell col=\"4\" text=\"bind:AD_MANAGEMENT_ITEM\"/></Band></Format></Formats>");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("btn_book","edt_custName:2","145","7.73%","40",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("도서코드");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookCode","btn_book:3","145","10.16%","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_maxlength("10");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookYear","edt_bookCode:3","145","3.44%","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_maxlength("4");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookName","edt_bookYear:3","145","30.16%","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("st_taxRate01","edt_standard:2","187","7.81%","40",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("할인율");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ck_discount","st_taxRate01:6","192","3.59%","34",null,null,null,null,null,null,this);
            obj.set_text("4.5%");
            obj.set_value("true");
            obj.set_enable("false");
            obj.set_taborder("67");
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

            obj = new BindItem("item5","medt_custCode","value","dsOutOrdDtl","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_custName","value","dsOutOrdDtl","OUTER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","medt_qty","value","dsOutOrdDtl","OUTORDDTL_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","medt_unitCost","value","dsOutOrdDtl","OUTORDDTL_UNITCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","medt_amount","value","dsOutOrdDtl","OUTORDDTL_AMOUNT");
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

            obj = new BindItem("item15","medt_tone","value","dsOutOrdDtl","OUTORDDTL_TONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edt_standard","value","dsOutOrdDtl","OUTORDDTL_STANDARD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","cal_invoiceYM","value","dsOutOrdDtl","OUTORDDTL_INVOICE_YM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","rd_billKind","value","dsOutOrdDtl","OUTORDDTL_EBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","cal_payDate","value","dsOutOrdDtl","OUTORDDTL_PAYDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","cal_finishDate","value","dsOutOrdDtl","OUTORDDTL_FINISHDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","CheckBox02","value","dsOutOrdMst","OUTORDMST_NOTEAPRV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","edt_ref","value","dsOutOrdDtl","REF_USER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","txa_remark","value","dsOutOrdMst","OUTORDMST_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","edt_bookCode","value","dsOutOrdDtl","BOOKMST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","edt_bookYear","value","dsOutOrdDtl","BOOKMST_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","edt_bookName","value","dsOutOrdDtl","OUTORDDTL_BOOKMSTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","ck_discount","value","dsOutOrdMst","OUTORDMST_DISCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ED155F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED155F.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("ED155F.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("ED155F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var gv_urlFile = nexacro.getApplication().gv_urlNext;
        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var urlFile = nexacro.getApplication().gv_urlNext;

        var gds_userinfo = nexacro.getApplication().gds_userinfo;
        var sSection_Code = nexacro.getApplication().gds_userinfo.getColumn(0, "BUSECD");
        var sSection_Name = nexacro.getApplication().gds_userinfo.getColumn(0, "BUSENM");
        var sSection_ShortCode = nexacro.getApplication().gds_userinfo.getColumn(0, "SHORTCODE");
        var sSection_ShortName = nexacro.getApplication().gds_userinfo.getColumn(0, "SHORTNAME");
        var sSabun = nexacro.getApplication().gds_userinfo.getColumn(0, "SABUN");
        var sName = nexacro.getApplication().gds_userinfo.getColumn(0, "NAME");

        var section_value, temp_chk, setAmountCode, sSelect;

        // 고정자료 정보 임지저장 변수
        var sFixCustName, sFixCustGubn, sFixCustCode;
        var sFixBookCode, sFixBookYear, sFixBookName, sFixBookSeq, sFixBookId;

        this.ED155F_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", "ed_04_105");
        	sSelect = nexacro.getApplication().gds_menu.getColumn(nRow, "UM_PER_SELECT");
        	//sSelect = Eco.decode(sSelect, null, "1", sSelect);

        	var strArg = "ORDER=0";
        	this.gfn_TransactionP("search","JSP/ed/mnscript_select.jsp", "dsMnscript=dsMnscript", "dsMnscript=dsMnscript", strArg, "fnMnscriptCallback", false, "P", false, this);	//작업구분

        	strArg = "SECTION_CODE=" + sSection_Code
        		   + " COMPETENCE=" + Eco.decode(sSelect, "1", "A");
        	this.gfn_TransactionP("search","JSP/ed/section_select2.jsp", "dsSection=dsSection", "dsSection=dsSection", strArg, "fnSectionCallback", false, "P", false, this);	//부서

        	strArg = "Section_Code=" + sSection_Code;
        	this.gfn_TransactionP("search","JSP/ed/paykind_select.jsp", "", "", strArg, "fnSectionPayCallback", true, "P", false, this);	//부서별 지급방법
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

        	if(section_value > 0)	//정기지급
        	{
        		this.btn_pay.set_visible(true);
        		this.btn_pay.text = "정기지급";
        		this.dsOutOrdMst.addRow();
        		this.dsOutOrdMst.setColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_PAYKIND", "0");
        		this.dsOutOrdMst.setColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_NOTEAPRV", "0");
        	}
        	else	//수시지급
        	{
        		this.dsOutOrdMst.addRow();
        		this.dsOutOrdMst.setColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_PAYKIND", "1");
        		this.dsOutOrdMst.setColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_NOTEAPRV", "0");
        	}
        }

        //mst 초기화
        this.dsOutOrdMst_onrowsetchanged = function(obj,e)
        {
        	var d = new Date();
        	var today = Eco.date.getMaskFormatString(d, "yyyyMMdd");

        	if(e.reason == 12 ) //dataset이 추가되었을 때
        	{
        		obj.setColumn(e.row, "OUTORDMST_DATE", today);
        		obj.setColumn(e.row, "OUTORDMST_KIND", "C");
        		obj.setColumn(e.row, "OUTORDMST_CLASS", "C2");
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

        		this.lfn_I_FLOW_FOMPAHT2_LOAD(sSabun, this.dsFormpath);	//결재라인 가져오기

        		this.dsOutOrdDtl.clearData();
        		this.dsOutOrdDtl.addRow();
        	}
        };

        //dtl 초기화
        this.dsOutOrdDtl_onrowsetchanged = function(obj,e)
        {
        	obj.setColumn(e.row, "OUTORDMST_ID", null);
        	obj.setColumn(e.row, "OUTORDDTL_SEQ", (this.dsOutOrdDtl.rowcount + 1).toString().padLeft(3,"0"));
        	obj.setColumn(e.row, "MNSCRIPT_CODE", null);

        	obj.setColumn(e.row, "BOOKMST_ID", sFixBookId);
        	obj.setColumn(e.row, "BOOKMST_CODE", sFixBookCode);
        	obj.setColumn(e.row, "BOOKMST_YEAR", sFixBookYear);
        	obj.setColumn(e.row, "BOOKMST_SEQ", sFixBookSeq);
        	obj.setColumn(e.row, "OUTORDDTL_BOOKMSTNAME", sFixBookName);

        	obj.setColumn(e.row, "OUTREQMST_ID", 0);
        	obj.setColumn(e.row, "OUTREQDTL_SEQ", null);

        	obj.setColumn(e.row, "CUST_GUBN", sFixCustGubn);
        	obj.setColumn(e.row, "CUST_CODE", sFixCustCode);
        	obj.setColumn(e.row, "OUTER_NAME", sFixCustName);

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

        //결재라인확인
        this.fn_approval_chk = function()
        {
        	var chkRow = this.dsApproval.findRow("SABUN", sSabun); //자신의 결재라인 체크

        	//결재라인이 설정 되어 있는데 작성자와 사용자가 다르거나 결재라인에 없거나 다음 결재자가 승인한 경우
        	if( (this.dsApproval.rowcount >0 ) && ( (this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "EMPLOYEE_ID") != sSabun) || (chkRow == -1) || (this.dsApproval.getColumn(chkRow+1, "STATUS") == 1) ) )
        	{
        		alert("본인이 작성하지 않았거나 결재진행 중인 문서는 수정 및 삭제 할 수 없습니다.");
        		return false;
        	}
        	else
        		return true;
        }

        //결재라인 설정
        this.Div00_btn_tempchk_onclick = function(obj,e)
        {
        	if(this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "EMPLOYEE_ID") != sSabun)
        	{
        		alert("본인이 올린 서류만 결재라인을 설정할 수 있습니다.");
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
        			{	//편집부 + 수시지급
        				setAmountCode = this.lfn_Set_Approval( this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "I_FLOW_ID")
        												, this.dsOutOrdDtl.getSum("OUTORDDTL_AMOUNT")
        												, setAmountCode
        												, sSabun == gds_userinfo.getColumn(0, "DEPARTMENT_MANAGER")
        												, this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_NOTEAPRV")
        												, ""
        												, sSection_Code
        												, this.dsFormpath, this.ds_flow_order, this.ds_flow_order2);

        			}else
        			{	//편집부 + 정기지급
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
        			//편집부소외 + 수시지급
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

        //신규카드
        this.Div00_btn_new_onclick = function(obj,e)
        {
        	//if(this.dsOutOrdMst.rowcount > 0)
        		//저장
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
        		this.btn_pay.set_text("정기지급");
        	}
        	else
        	{
        		this.dsOutOrdMst.setConstColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_PAYKIND", "1");
        		this.btn_pay.set_text("수시지급");
        	}
        };

        //내용추가
        this.Div00_btn_add_onclick = function(obj,e)
        {
        	this.dsOutOrdDtl.addRow();

        	if(this.ck_fixCust.value != 1)
        		this.btn_cust_code_onclick();

        };

        //조회
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
        					pOutOrderEtc : "2"}; //popup 화면으로 전달할 값

        	this.lfn_showModal("popupSearch", objParam, "ed::ED150_SearchF.xfdl", "popupCallback", this, 10, 58, 400, 390);
        };

        this.popupCallback = function(svcId, rt_value)
        {
        	trace(this.dsOutOrdDtl.saveXML());

        	if(this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_DELETE") == "K")
        		alert("전자결재 기각된 문서입니다");

        	if(this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_PAYKIND") == "0")
        		this.btn_pay.set_text("정기지급");
        	else
        		this.btn_pay.set_text("수시지급");

        	this.dsOutOrdDtl.filter("OUTORDDTL_DELETE !='D'");
        	this.fn_getFiles(rt_value);
        	this.fn_getChamjo(rt_value);
        	this.lfn_Approval_Select(rt_value, this.dsApproval, this.DS_GW_U, this.DS_GW_K, this.DS_GW_H, this.DS_GW_C, this.DS_GW_D);	//전자결재 승인 내역
        }

        //임시저장
        this.Div00_btn_tempSave_onclick = function(obj,e)
        {
        	temp_chk="Y";
        	this.fn_save();
        };

        //발송
        this.Div00_btn_save_onclick = function(obj,e)
        {
        	if(this.fn_approval_chk())
        	{
        		temp_chk = "N";
        		this.fn_save();
        	}
        };

        //저장
        this.fn_save = function()
        {
        	if((temp_chk == "Y") && (sSection_Code =="2F000"))
        		alert("임시저장 기능은 단지 내용에 대한 저장기능 입니다. \n첨부파일도 최종 발송 시 첨부됩니다. \n모무 작성 후 꼭 발송해주셔야 정상 처리가 됩니다.");

        	//첨부파일검사
        	if((temp_chk == "N") &&(this.ds_file.rowcount + this.DS_CHAMJO.rowcount <= 0))
        	{
        		alert("첨부파일 또는 참조문서를 선택해 주세요.");
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

        //삭제
        this.Div00_btn_delete_onclick = function(obj,e)
        {
        	if(this.fn_approval_chk())
        	{
        		alert("전체삭제를 할 경우 복원할 수 없습니다.\n\n" +
        			  "새로운 내용을 추가하실 경우는 삭제하지 마시고 신규버튼을 눌러 작업해 주십시요.");
        		this.lfn_showModal("popupDelete", "", "ed::EDMstDtlCancel_ConformF.xfdl", "popupDeleteCallBack", this, 10, 58, 280, 100);
        	}
        };

        this.popupDeleteCallBack = function(svcId, rt_value)
        {
        	if(rt_value == "전체")
        	{
        		this.dsOutOrdMst.deleteRow(this.dsOutOrdMst.rowposition);
        		this.fn_mst_save("delete");
        		this.dsOutOrdDtl.clearData();
        		this.ds_file.clearData();
        		this.DS_CHAMJO.clearData();
        	}
        	else if(rt_value == "내용")
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
        		this.gfn_TransactionP(rowType ,str_url, inds, "", "", "fnMStSaveCallback", false, "P", false, this);

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

        		if(this.ds_file.rowcount > 0)				//첨부파일 저장
        			this.fn_upload_file(open_i_flow_id);

        		if(this.DS_CHAMJO.rowcount > 0)				//참조문서 저장
        			this.fn_upload_chamjo(open_i_flow_id);

        		this.fn_mstPay_save(svcId, rt_UTORDMST_ID);	//지급방식 저장
        	}
        };

        //mst row check
        this.fn_mst_rowCheck = function(nRow)
        {
        	if (nRow == -1)
        		return true;

        	if (this.dsOutOrdMst.getColumn(nRow, "OUTORDMST_DATE") == null)
        	{
        		alert("작성일자를 선택해 주십시요.");
        		this.cal_mstDate.setFocus();
        		return false;
        	}

        	if (sSection_Code == "99000" || gds_userinfo.getColumn(0,"BIRTH_DT") == "" )
        	{
        		if(this.dsOutOrdMst.getColumn(nRow, "REF_USER") == null|| this.dsOutOrdMst.getColumn(nRow, "REF_USER") == "")
        		{
        			alert("공용아이디일 경우 참조항목에 실재 등록자를 입력해 주십시요.");
        			this.edt_ref.setFocus();
        			return false;
        		}
        	}

        	if ((this.dsOutOrdMst.getRowType(nRow) == 2) && (this.dsFormpath.rowcount <= 0))
        	{
        		alert("결재라인을 선택해주세요.");
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
        		this.gfn_TransactionP("save",str_url, inds, "", strArg, "fnDtlSaveCallback", false, "P", false, this);

        		return true;
        	}
        };

        this.fnDtlSaveCallback = function (svcId, errCod, errMsg)
        {
        	if(errCod != 0)
        		alert(errMsg);
        	else
        	{
        		if(this.ds_file.rowcount > 0)				//첨부파일 저장
        			this.fn_upload_file(this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "I_FLOW_ID"));

        		if(this.DS_CHAMJO.rowcount > 0)				//참조문서 저장
        			this.fn_upload_chamjo(this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "I_FLOW_ID"));

        		if(this.fn_approval_chk())
        		{
        			if(section_value > 0)
        			{
        				if(this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_PAYKIND") == "1")
        				{	//편집부 + 수시지급
        					setAmountCode = this.lfn_Set_Approval( this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "I_FLOW_ID")
        													, this.dsOutOrdDtl.getSum("OUTORDDTL_AMOUNT")
        													, setAmountCode
        													, sSabun == gds_userinfo.getColumn(0, "DEPARTMENT_MANAGER")
        													, this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_NOTEAPRV")
        													, ""
        													, sSection_Code
        													, this.dsFormpath, this.ds_flow_order, this.ds_flow_order2);

        				}else
        				{	//편집부 + 정기지급
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
        				//편집부외 + 수시지급
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
        		alert("작업구분을 선택해 주십시요.");
        		this.cb_mnScript.dropdown();
        		return false;
        	}

        	if ((this.dsOutOrdDtl.getColumn(nRow, "BOOKMST_CODE") == null)
        		|| (this.dsOutOrdDtl.getColumn(nRow, "BOOKMST_YEAR") == null))
        	{
        		alert("도서를 선택해 주십시요.");
        		this.btn_book_onclick();
        		return false;
        	}

        	if (this.dsOutOrdDtl.getColumn(nRow, "OUTORDDTL_WORKCONTENT") == null)
        	{
        		alert("작업내용을 입력해 주십시요.");
        		this.edt_workContent.setFocus();
        		return false;
        	}

        	if (this.dsMnscript.getColumn(this.dsMnscript.rowposition, "MNSCRIPT_CLASS") != "3")
        	{
        		if ((this.dsOutOrdDtl.getColumn(nRow, "OUTORDDTL_QTY") == null)
        			|| (this.dsOutOrdDtl.getColumn(nRow, "OUTORDDTL_QTY") == 0))
        		{
        			alert("발주수량을 입력해 주십시요.");
        			this.medt_qty.setFocus();
        			return false;
        		}

        		if ((this.dsOutOrdDtl.getColumn(nRow, "OUTORDDTL_UNITCOST") == null)
        			|| (this.dsOutOrdDtl.getColumn(nRow, "OUTORDDTL_UNITCOST") == 0))
        		{
        			alert("발주단가를 입력해 주십시요.");
        			this.medt_unitCost.setFocus();
        			return false;
        		}
        	}

        	if ((this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_DATE") > "20121121") &&
        	    ((this.dsOutOrdDtl.getColumn(nRow, "OUTORDDTL_ACNTDATE") == null) ||
        		 (this.dsOutOrdDtl.getColumn(nRow, "OUTORDDTL_ACNTDATE") == "")) )
        	{
        		alert("완료일자를 입력해 주십시요.");
        		this.cal_acntDate.SetFocus();
        		return false;
        	}

        	if(this.dsOutOrdDtl.getColumn(nRow, "OUTORDDTL_INVOICE_YM") == null)
        	{
        		alert("계산서 발행년월을 입력해 주십시요.");
        		this.cal_invoiceYM.setFocus();
        		return false;
        	}

        	if(this.dsOutOrdDtl.getColumn(nRow, "OUTORDMST_ID") == null)
        		return false;

        	return true;
        };

        //첨부파일 가져오기
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

        //첨부파일 다운로드
        this.Grid00_oncellclick = function(obj,e)
        {
        	if(e.cell == 1)
        		this.lfn_FileDownload(this.fileDownTrans ,this.ds_file, gv_urlFile, e.row);
        };

        //참조문서 가져오기
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

        //첨부파일선택
        this.btn_file_onclick = function(obj,e)
        {
        	var dt = new Date();
        	var vFileSubUrl = "attachedfile/"+Eco.date.getMaskFormatString(dt, "yyyy")+"/"+Eco.date.getMaskFormatString(dt, "MM");
        	this.lfn_FileUpload(this.fileD, this.fileUpTrans, this.ds_file, vFileSubUrl);
        };

        //첨부파일 저장
        this.fn_upload_file = function(i_flow_id)
        {
        	var dt = new Date();
        	var vFileSubUrl = "attachedfile/"+Eco.date.getMaskFormatString(dt, "yyyy")+"/"+Eco.date.getMaskFormatString(dt, "MM");
        	this.lfn_FileUpload_Save(gv_urlFile + "/JSP", i_flow_id, vFileSubUrl);
        };

        //참조문서
        this.btn_cham_onclick = function(obj,e)
        {
        	this.lfn_showModal("popupChamjo", "", "gw::GW140.xfdl", "popupCallBack", this, '', '', 530, 570);
        };

        //참조문서 저장
        this.fn_upload_chamjo = function(i_flow_id)
        {
        	if(i_flow_id != "" || i_flow_id != null)
        	{
        		var inds = "DS_CHAMJO=DS_CHAMJO:A";
        		var strArg = "I_FLOW_ID=" + i_flow_id;

        		this.gfn_TransactionP("search","JSP/ed/ed150f_uploaddoc_dml.jsp", inds, "", strArg, "", false, "P", false, this);
        	}
        }

        //첨부파일 삭제
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

        //참조문서삭제
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

        //지급방식선택
        this.btn_pay_onclick = function(obj,e)
        {
        	this.lfn_showModal("popupPayKind", "", "ed::EDMstApproval_KindF.xfdl", "popupPayKindCallback", this, 10, 58, 300, 200);
        };

        this.popupPayKindCallback = function (svcId, rtValue)
        {
        	if(rtValue == 0) //정기지급
        	{
        		this.btn_pay.set_text("정기지급");
        		this.dsOutOrdMst.setColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_PAYKIND", "0");
        	}
        	else	//수시지급
        	{
        		this.btn_pay.set_text("수시지급");
        		this.dsOutOrdMst.setColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_PAYKIND", "1");
        	}

        };

        //지급방법 저장
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

        //업체코드
        this.btn_cust_code_onclick = function(obj,e)
        {
        	this.lfn_showModal("popuppAuthor", "", "ed::EDCust_SearchF.xfdl", "", this, 10, 58, 500, 550);
        };

        //찾은 업체 데이터 넣어주기
        this.fn_setCustValue = function(rtArray)
        {
        	nRow = this.dsOutOrdDtl.rowposition;

        	this.dsOutOrdDtl.setColumn(nRow, "OUTER_NAME", rtArray[0]);
        	this.dsOutOrdDtl.setColumn(nRow, "ATHR_IDENTITY", null);
        	this.dsOutOrdDtl.setColumn(nRow, "CUST_GUBN", rtArray[1]);
        	this.dsOutOrdDtl.setColumn(nRow, "CUST_CODE", rtArray[2]);

        	if(this.ck_fixCust.value == true)
        	{
        		sFixCustName	= rtArray[0];
        		sFixCustGubn	= rtArray[1];
        		sFixCustCode	= rtArray[2];
        	}
        }

        //도서코드
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

        	if(this.ck_fixBook.value == true)
        	{
        		sFixBookCode = this.dsBookMst.getColumn(bRow, "BOOKMST_CODE");
        		sFixBookYear = this.dsBookMst.getColumn(bRow, "BOOKMST_YEAR");
        		sFixBookName = this.dsBookMst.getColumn(bRow, "BOOKMST_NAME");
        		sFixBookSeq  = this.dsBookMst.getColumn(bRow, "BOOKMST_SEQ");
        		sFixBookId   = this.dsBookMst.getColumn(bRow, "BOOKMST_ID");
        	}
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
        			alert("도서코드를 정확히 입력해 주세요.");
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
        			alert("도서를 찾을 수 없습니다");
        			this.edt_bookCode.set_value("9000000002");
        			this.edt_bookYear.set_value("0000");
        			this.edt_bookName.set_value("기타 개인 외주비");
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
        			alert("2건 이상의 도서가 조회되었습니다.");

        			var objParam = {dsParam1:this.dsBookMst};
        			this.lfn_showModal("popupAddress", objParam, "mk::MKBook_SearchF.xfdl", "popupBookCallBack", this, 10, 58, 450, 400);
        		}
        	}

        };

        //출력
        this.Div00_btn_print_onclick = function(obj,e)
        {
        	var nRow = this.dsOutOrdMst.rowposition;
        	var OUTORDMST_ID = this.dsOutOrdMst.getColumn(nRow, "OUTORDMST_ID");
        	var I_FLOW_ID = this.dsOutOrdMst.getColumn(nRow, "I_FLOW_ID");
        	var rdUrl, rdParam;

        	if(OUTORDMST_ID != null)
        	{
        		rdUrl = gv_urlMrd + "/ed/ED155_0.mrd";
        		rdParam  = "/rp ["+ OUTORDMST_ID + "][C]";

        		this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1024, 770);
        	}
        	else
        		alert("조회된 자료가 없습니다.");
        };

        //전표 Grid 보이게
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

        //총수량, 총금약, 완료일지 동일여부 체크
        this.dsOutOrdDtl_oncolumnchanged = function(obj,e)
        {
        	if((e.columnid == "OUTORDDTL_AMOUNT") || (e.columnid == "OUTORDDTL_QTY") || (e.columnid == "OUTORDDTL_INCOMETAX"))
        	{
        		this.medt_totAmount.set_value(obj.getSum("OUTORDDTL_AMOUNT") + obj.getSum("OUTORDDTL_INCOMETAX"));
        		this.medt_totQty.set_value(obj.getSum("OUTORDDTL_QTY"));
        	}

        	//세금계산서 발행년월 체크
        	if((e.columnid == "OUTORDDTL_BILL_DATE") && (obj.getColumn(e.row, e.columnid) != null))
        	{
        		if(this.dsOutOrdDtl.getMax(e.columnid) != obj.getColumn(e.row, e.columnid))
        		{
        			obj.setColumn(e.row, e.columnid, null);
        			alert("발행년월이 다른 세금계산서는 입력할 수 없습니다.");
        			return false;
        		}
        	}
        };

        //지급일자 일괄등록
        this.btn_payDate_onclick = function(obj,e)
        {
        	var sDate = this.dsOutOrdDtl.getColumn(this.dsOutOrdDtl.rowposition, "OUTORDDTL_PAYDATE");

        	for(var i = 0; i < this.dsOutOrdDtl.rowcount; i++)
        	{
        		this.dsOutOrdDtl.setColumn(i, "OUTORDDTL_PAYDATE", sDate);
        	}
        };

        //원가산업일 일괄등록
        this.btn_finishDate_onclick = function(obj,e)
        {
        	var sDate = this.dsOutOrdDtl.getColumn(this.dsOutOrdDtl.rowposition, "OUTORDDTL_FINISHDATE");

        	for(var i = 0; i < this.dsOutOrdDtl.rowcount; i++)
        	{
        		this.dsOutOrdDtl.setColumn(i, "OUTORDDTL_FINISHDATE", sDate);
        	}
        };

        //재경부승인
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

        //수기결재
        this.CheckBox02_onclick = function(obj,e)
        {
        	if(obj.value == 1)
        		this.dsOutOrdMst.setColumn(this.dsOutOrdMst.rowposition, "OUTORDERMST_NOTEAPRV", "1");
        	else
        		this.dsOutOrdMst.setColumn(this.dsOutOrdMst.rowposition, "OUTORDERMST_NOTEAPRV", "0");
        };

        //부서지정
        this.cb_section_onitemchanged = function(obj,e)
        {
        	sSection_Code = obj.value;
        	sSection_Name = obj.text;
        	this.dsOutOrdMst.setColumn(this.dsOutOrdMst.rowposition, "SECTION_CODE", sSection_Code);
        	this.dsOutOrdMst.setColumn(this.dsOutOrdMst.rowposition, "SECTION_NAME", sSection_Name.trim());
        };

        //지급액 및 세금계산
        this.fn_amountCalculate = function(nRow)
        {
        	var kind = this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_KIND");
        	var tax = Eco.decode(this.rd_tax.index,0,10,0);

        	//세율 적용
        	this.dsOutOrdDtl.setColumn(nRow, "OUTORDDTL_TAXRATE", Eco.decode(kind, "P", 3, tax));

        	var amount = new nexacro.Decimal(this.dsOutOrdDtl.getColumn(nRow, "OUTORDDTL_QTY") * this.dsOutOrdDtl.getColumn(nRow, "OUTORDDTL_UNITCOST"));
        	var incometax = new nexacro.Decimal(amount * (tax / 100));


        	this.dsOutOrdDtl.setColumn(nRow, "OUTORDDTL_AMOUNT", amount.trunc());
        	this.dsOutOrdDtl.setColumn(nRow, "OUTORDDTL_INCOMETAX", incometax.trunc());
        	this.dsOutOrdDtl.setColumn(nRow, "OUTORDDTL_TOTAMOUNT", this.dsOutOrdDtl.getColumn(nRow, "OUTORDDTL_AMOUNT") +  this.dsOutOrdDtl.getColumn(nRow, "OUTORDDTL_INCOMETAX") )

        	//주민세 계산 (업체는 0원)
        	this.dsOutOrdDtl.setColumn(nRow, "OUTORDDTL_RESIDENTTAX", 0);
        };

        //할인율 적용
        this.ck_discount_onclick = function(obj,e)
        {
        	for(var i = 0; i<this.dsOutOrdDtl.rowcount; i++)
        	{
        		this.fn_amountCalculate(i);
        	}
        };

        //수량변경
        this.medt_qty_onkillfocus = function(obj,e)
        {
        	this.fn_amountCalculate(this.dsOutOrdDtl.rowposition);
        };

        //단가변경
        this.medt_unitCost_onkillfocus = function(obj,e)
        {
        	this.fn_amountCalculate(this.dsOutOrdDtl.rowposition);
        };

        //세금변경
        this.rd_tax_onitemchanged = function(obj,e)
        {
        	this.fn_amountCalculate(this.dsOutOrdDtl.rowposition);
        };

        //mst 선택시 관리자 모드 확인
        this.dsOutOrdMst_onrowposchanged = function(obj,e)
        {
        	this.fn_compEnable(e.row);	//컴포넌트 활성화
        	this.fn_compView(sSelect >= 5);	//관리자 컴포넌트 (5 = 1차 승인자)

        	this.chk_permite.set_enable(sSelect >= 5);
        };

        this.fn_compEnable = function(nRow)
        {
        	var setValue = true;

        	if(sSelect < 6) //2차승인자가 아닐때
        		setValue = (this.dsOutOrdMst.getColumn(nRow, "OUTORDMST_PERMITE") != "1");

        	this.Div00.form.btn_tempchk.set_enable(setValue);
        	this.Div00.form.btn_add.set_enable(setValue);
        	this.Div00.form.btn_save.set_enable(setValue);
        	this.Div00.form.btn_delete.set_enable(setValue);

        	this.btn_custCode.set_enable(setValue);
        	this.medt_custCode.set_enable(setValue);
        	this.btn_custName.set_enable(setValue);
        	this.edt_custName.set_enable(setValue);
        	this.cb_mnScript.set_enable(setValue);
        	this.btn_book.set_enable(setValue);
        	this.edt_bookCode.set_enable(setValue);
        	this.edt_bookYear.set_enable(setValue);
        	this.edt_bookName.set_enable(setValue);
        	this.edt_workContent.set_enable(setValue);
        	this.medt_tone.set_enable(setValue);
        	this.edt_standard.set_enable(setValue);
        	this.medt_qty.set_enable(setValue);
        	this.medt_unitCost.set_enable(setValue);
        	this.medt_amount.set_enable(setValue);
        	this.medt_taxRate.set_enable(setValue);
        	this.rd_tax.set_enable(setValue);
        	this.txa_remark.set_enable(setValue);
        }

        //관리자 컴포넌트
        this.fn_compView = function(setValue)
        {
        	this.cal_receipDate.set_enable(setValue);
        	this.cal_payDate.set_enable(setValue);
        	this.btn_payDate.set_enable(setValue);
        	this.cal_finishDate.set_enable(setValue);
        	this.btn_finishDate.set_enable(setValue);

        	this.cal_finishDate.set_visible(setValue);
        	this.btn_finishDate.set_visible(setValue);
        }

        //승인전 수량 변경
        this.dsOutOrdDtl_onrowposchanged = function(obj,e)
        {
        	this.medt_qty.set_enable(this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_PERMITE") == "0");

        	if(obj.getColumn(e.newrow, "OUTORDDTL_AMOUNT") != 0)
        		this.rd_tax.set_index(Eco.decode(obj.getColumn(e.newrow, "OUTORDDTL_INCOMETAX"),0,1,0));
        };

        //거래처 고정시키기
        this.ck_fixCust_onclick = function(obj,e)
        {
        	var nRow = this.dsOutOrdDtl.rowposition;

        	if(obj.value == true)
        	{
        		sFixCustName = this.dsOutOrdDtl.getColumn(nRow, "OUTER_NAME");
        		sFixCustGubn = this.dsOutOrdDtl.getColumn(nRow, "CUST_GUBN");
        		sFixCustCode = this.dsOutOrdDtl.getColumn(nRow, "CUST_CODE");
        	}
        	else
        	{
        		sFixCustName = "";
        		sFixCustGubn = "";
        		sFixCustCode = "";
        	}
        };

        //도서 고정시키기
        this.ck_fixBook_onclick = function(obj,e)
        {
        	var nRow = this.dsOutOrdDtl.rowposition;

        	if(obj.value == 1)
        	{
        		sFixBookCode = this.dsOutOrdDtl.getColumn(nRow, "BOOKMST_CODE");
        		sFixBookYear = this.dsOutOrdDtl.getColumn(nRow, "BOOKMST_YEAR");
        		sFixBookSeq  = this.dsOutOrdDtl.getColumn(nRow, "BOOKMST_SEQ");
        		sFixBookId   = this.dsOutOrdDtl.getColumn(nRow, "BOOKMST_ID");
        		sFixBookName = this.dsOutOrdDtl.getColumn(nRow, "OUTORDDTL_BOOKMSTNAME");
        	}
        	else
        	{
        		sFixBookCode = "";
        		sFixBookYear = "";
        		sFixBookSeq  = "";
        		sFixBookid   = "";
        		sFixBookName = "";
        	}
        };

        //키처리
        this.fn_localKeyDown = function(obj,e)
        {
        	var comobj;

        	if(e.keycode == 13)
        	{
        		comobj = this.getNextComponent(obj, true);
        		comobj.setFocus();
        	}
        }

        this.ED155F_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.ED155F_ontimer = function(obj,e)
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

        this.Div00_btn_xlsDownload_onclick = function(obj,e)
        {
        	var file_path = "/ed/file/";
        	var file_rname = "test2.xlsx";
        	var file_fname = "test2.xlsx";

        	this.fileDownTrans.clearPostDataList();
        	this.fileDownTrans.setPostData("path", urlFile+file_path);
        	this.fileDownTrans.setPostData("filename", file_fname);
        	this.fileDownTrans.setPostData("fileRname", file_rname);
        	this.fileDownTrans.download(urlFile+"/JSP/downloadFile_url.jsp");

        	this.fileDownTrans.addEventHandler("onsuccess", this.lfn_FileDownTrans_onsuccess, this);

        };

        this.lfn_FileDownTrans_onsuccess = function(obj,e)
        {
        	system.execShell(e.targetfullpath);
        };

        this.Div00_btn_xlsImport_onclick = function(obj,e)
        {
        	this.Div00_btn_new_onclick();
        	this.importObj = new ExcelImportObject();

        	this.importObj.set_importtype(nexacro.ImportTypes.EXCEL);
        	this.importObj.set_importurl(gv_urlXeni);

        	this.importObj.addEventHandler("onsuccess", this.Import00_onsuccess, this);
            this.importObj.addEventHandler("onerror", this.Import00_onerror, this);

            this.importObj.importData("", "", "dsOutOrdDtlXls");
        };

        this.Import00_onsuccess = function(obj, e)
        {
        	if(this.dsOutOrdDtlXls.rowcount < 1)
        		alert("조회된 데이터가 존재하지 않습니다.");
        	else
        	{
        		this.dsOutOrdDtl.clearData();

        		for(var i=1; i <this.dsOutOrdDtlXls.rowcount; i++)
        		{
        			var nRow = this.dsOutOrdDtl.addRow();

        			this.dsOutOrdDtl.setColumn(nRow, "CUST_CODE", this.dsOutOrdDtlXls.getColumn(i, 0));	//업체코드

        			var strArg = "CUST_GUBN=" + nexacro.wrapQuote(41)
        						+" CUST_CODE=" + nexacro.wrapQuote(this.dsOutOrdDtlXls.getColumn(i, 0));
        			this.gfn_TransactionP("search","JSP/ed/cust_select.jsp", "dsCust=dsCust", "dsCust=dsCust", strArg, "fnCustCallback", false, "P", false, this); //업체정보

        			this.dsOutOrdDtl.setColumn(nRow, "BOOKCODEYEAR", this.dsOutOrdDtlXls.getColumn(i,2) + "[" + this.dsOutOrdDtlXls.getColumn(i,3) + "]");	//도서코드년판
        			this.dsOutOrdDtl.setColumn(nRow, "BOOKMST_CODE", this.dsOutOrdDtlXls.getColumn(i,2));	//도서코드
        			this.dsOutOrdDtl.setColumn(nRow, "BOOKMST_YEAR", this.dsOutOrdDtlXls.getColumn(i,3));	//도서년판

        			//도서코드가 없거나 0000000000인경우 엑셀자료데이터 넣기
        			if(this.dsOutOrdDtlXls.getColumn(i,2) == "0000000000" || this.dsOutOrdDtlXls.getColumn(i,2) =="" ||  this.dsOutOrdDtlXls.getColumn(i,2) == null)
        			{
        				this.dsOutOrdDtl.setColumn(nRow, "OUTORDDTL_BOOKMSTNAME", this.dsOutOrdDtlXls.getColumn(i,4));
        				this.dsOutOrdDtl.setColumn(nRow, "BOOKCODEYEAR", "0000000000[0000]");
        				this.dsOutOrdDtl.setColumn(nRow, "BOOKMST_CODE", "0000000000");
        				this.dsOutOrdDtl.setColumn(nRow, "BOOKMST_YEAR", "0000");
        				this.dsOutOrdDtl.setColumn(nRow, "BOOKMST_ID", "54152");
        				this.dsOutOrdDtl.setColumn(nRow, "BOOKMST_SEQ", "000");
        			}
        			else
        			{
        				srtArg = "BOOKMST_CODE=" + nexacro.wrapQuote(this.dsOutOrdDtlXls.getColumn(i,2))
        					   + " BOOKMST_YEAR=" + nexacro.wrapQuote(this.dsOutOrdDtlXls.getColumn(i,3));

        				this.gfn_TransactionP("search","JSP/ed/book_select.jsp", "dsBookMst=dsBookMst", "dsBookMst=dsBookMst", strArg, "fnBookIDCallback", false, "P", false, this); //도서정보

        			}
        			var mnScript  = this.dsOutOrdDtlXls.getColumn(i,5);
        			var ebill = this.dsOutOrdDtlXls.getColumn(i,14);

        			this.dsOutOrdDtl.setColumn(nRow, "OUTORDDTL_ACNTDATE", this.dsOutOrdDtlXls.getColumn(i,1));			//완료일자
        			this.dsOutOrdDtl.setColumn(nRow, "MNSCRIPT_CODE", mnScript.substr(mnScript.indexOf("(",0)+1, 2));	//작업구분
        			this.dsOutOrdDtl.setColumn(nRow, "MNSCRIPT_NAME", mnScript.substr(0, mnScript.indexOf("(",0)));		//작업명
        			this.dsOutOrdDtl.setColumn(nRow, "OUTORDDTL_WORKCONTENT", this.dsOutOrdDtlXls.getColumn(i,6));		//작업내용
        			this.dsOutOrdDtl.setColumn(nRow, "OUTORDDTL_TONE", this.dsOutOrdDtlXls.getColumn(i,7));				//색도
        			this.dsOutOrdDtl.setColumn(nRow, "OUTORDDTL_STANDARD", this.dsOutOrdDtlXls.getColumn(i,8));			//규격
        			this.dsOutOrdDtl.setColumn(nRow, "OUTORDDTL_QTY", this.dsOutOrdDtlXls.getColumn(i,9));				//수량
        			this.dsOutOrdDtl.setColumn(nRow, "OUTORDDTL_UNITCOST", this.dsOutOrdDtlXls.getColumn(i,10));		//단가
        			this.dsOutOrdDtl.setColumn(nRow, "OUTORDDTL_AMOUNT", this.dsOutOrdDtlXls.getColumn(i,11));			//지급액
        			this.dsOutOrdDtl.setColumn(nRow, "OUTORDDTL_INCOMETAX", this.dsOutOrdDtlXls.getColumn(i,12));		//세액
        			this.dsOutOrdDtl.setColumn(nRow, "OUTORDDTL_TOTAMOUNT", nexacro.toNumber(this.dsOutOrdDtlXls.getColumn(i,11)) +  nexacro.toNumber(this.dsOutOrdDtlXls.getColumn(i,12)));	//총금액
        			this.dsOutOrdDtl.setColumn(nRow, "OUTORDDTL_INVOICE_YM", this.dsOutOrdDtlXls.getColumn(i,13) + "01");	//세금계산서발행년월
        			this.dsOutOrdDtl.setColumn(nRow, "OUTORDDTL_EBILL", ebill.substr(ebill.indexOf("(",0)+1, 1));			//전자계약여부
        		}
        	}
        }

        this.fnCustCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg)
        	else
        	{
        		if(this.dsCust.rowcount ==0)
        			alert((this.dsOutOrdDtl.rowposition + 1) + "행에 업체가 존재하지 않습니다!\n재입력 해주세요!!");
        		else
        		{
        			this.dsOutOrdDtl.setColumn(this.dsOutOrdDtl.rowposition, "CUST_GUBN", "41");
        			this.dsOutOrdDtl.setColumn(this.dsOutOrdDtl.rowposition, "OUTER_NAME", this.dsCust.getColumn(0,"CUST_NAME"));
        		}
        	}
        };

        this.fnBookIDCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg)
        	else
        	{
        		if(this.dsBookMst.rowcount == 0)
        			alert((this.dsOutOrdDtl.rowposition + 1) + "행에 저자가 존재하지 않습니다!\n재입력 해주세요!!");
        		else
        		{
        			this.dsOutOrdDtl.setColumn(this.dsOutOrdDtl.rowposition, "BOOKMST_ID", this.dsBookMst.getColumn(0,"BOOKMST_ID"));
        			this.dsOutOrdDtl.setColumn(this.dsOutOrdDtl.rowposition, "OUTORDDTL_BOOKMSTNAME", this.dsBookMst.getColumn(0,"BOOKMST_NAME"));
        			this.dsOutOrdDtl.setColumn(this.dsOutOrdDtl.rowposition, "BOOKMST_SEQ", this.dsBookMst.getColumn(0,"BOOKMST_SEQ"));
        		}
        	}
        };

        this.Import00_onerror = function(obj, e)
        {
        	alert(e.errormsg);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.ED155F_onsize,this);
            this.addEventHandler("ontimer",this.ED155F_ontimer,this);
            this.addEventHandler("onload",this.ED155F_onload,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.Div00.form.btn_delete.addEventHandler("onclick",this.Div00_btn_delete_onclick,this);
            this.Div00.form.btn_save.addEventHandler("onclick",this.Div00_btn_save_onclick,this);
            this.Div00.form.btn_print.addEventHandler("onclick",this.Div00_btn_print_onclick,this);
            this.Div00.form.btn_add.addEventHandler("onclick",this.Div00_btn_add_onclick,this);
            this.Div00.form.btn_new.addEventHandler("onclick",this.Div00_btn_new_onclick,this);
            this.Div00.form.btn_tempchk.addEventHandler("onclick",this.Div00_btn_tempchk_onclick,this);
            this.Div00.form.btn_tempSave.addEventHandler("onclick",this.Div00_btn_tempSave_onclick,this);
            this.Div00.form.btn_xlsDownload.addEventHandler("onclick",this.Div00_btn_xlsDownload_onclick,this);
            this.Div00.form.btn_xlsImport.addEventHandler("onclick",this.Div00_btn_xlsImport_onclick,this);
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
            this.btn_custCode.addEventHandler("onclick",this.btn_cust_code_onclick,this);
            this.medt_custCode.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.btn_custName.addEventHandler("onclick",this.btn_cust_code_onclick,this);
            this.edt_custName.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.st_SCDtl_contractAmount.addEventHandler("onclick",this.Static00_onclick,this);
            this.medt_qty.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.medt_qty.addEventHandler("onkillfocus",this.medt_qty_onkillfocus,this);
            this.Static00_10.addEventHandler("onclick",this.Static00_onclick,this);
            this.medt_unitCost.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.medt_unitCost.addEventHandler("onkillfocus",this.medt_unitCost_onkillfocus,this);
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
            this.rd_tax.addEventHandler("onitemchanged",this.rd_tax_onitemchanged,this);
            this.ck_fixCust.addEventHandler("onclick",this.ck_fixCust_onclick,this);
            this.ck_fixBook.addEventHandler("onclick",this.ck_fixBook_onclick,this);
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
            this.st_taxRate01.addEventHandler("onclick",this.Static00_onclick,this);
            this.ck_discount.addEventHandler("onclick",this.ck_discount_onclick,this);
            this.dsOutOrdMst.addEventHandler("onrowsetchanged",this.dsOutOrdMst_onrowsetchanged,this);
            this.dsOutOrdMst.addEventHandler("onrowposchanged",this.dsOutOrdMst_onrowposchanged,this);
            this.dsOutOrdDtl.addEventHandler("onrowsetchanged",this.dsOutOrdDtl_onrowsetchanged,this);
            this.dsOutOrdDtl.addEventHandler("oncolumnchanged",this.dsOutOrdDtl_oncolumnchanged,this);
            this.dsOutOrdDtl.addEventHandler("onrowposchanged",this.dsOutOrdDtl_onrowposchanged,this);
            this.ds_file.addEventHandler("onrowsetchanged",this.ds_file_onrowsetchanged,this);
            this.ds_file.addEventHandler("onvaluechanged",this.ds_file_onvaluechanged,this);
        };
        this.loadIncludeScript("ED155F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
