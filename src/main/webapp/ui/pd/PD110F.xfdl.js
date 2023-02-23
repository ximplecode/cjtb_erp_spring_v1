(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PD110F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1600,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSection", this);
            obj._setContents("<ColumnInfo><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"LVL\" type=\"INT\" size=\"1\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"3\"/><Column id=\"SECTION_SHORTNAME\" type=\"STRING\" size=\"10\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"5\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPDClass", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"1\"/><Column id=\"name\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"no\">0</Col><Col id=\"name\">일반경비</Col></Row><Row><Col id=\"no\">1</Col><Col id=\"name\">정기지불</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAccountMst", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNTMST_CLASS\" summ=\"default\" size=\"1\"/><Column id=\"ACNTMST_DATE\" summ=\"default\" size=\"8\"/><Column id=\"ACNTMST_NO\" summ=\"default\" size=\"3\"/><Column id=\"ACNTMST_ID\" summ=\"default\" size=\"20\"/><Column id=\"ACCOUNT_NO\" summ=\"default\" size=\"12\"/><Column id=\"ACNTMST_YM\" summ=\"default\" size=\"8\"/><Column id=\"SECTION_CODE\" summ=\"default\" size=\"5\"/><Column id=\"SECTION_NAME\" summ=\"default\" size=\"30\"/><Column id=\"EMPLOYEE_ID\" summ=\"default\" size=\"6\"/><Column id=\"EMPLOYEE_NAME\" summ=\"default\" size=\"10\"/><Column id=\"DK_CODE\" summ=\"default\" size=\"2\"/><Column id=\"ACNTMST_DELETE\" summ=\"default\" size=\"1\"/><Column id=\"ACNTMST_PERMITEDATE0\" summ=\"default\" size=\"8\"/><Column id=\"ACNTMST_PERMITEUSER0\" summ=\"default\" size=\"6\"/><Column id=\"ACNTMST_PERMITE0\" summ=\"default\" size=\"1\"/><Column id=\"ACNTMST_PERMITEDATE1\" summ=\"default\" size=\"8\"/><Column id=\"ACNTMST_PERMITEUSER1\" summ=\"default\" size=\"6\"/><Column id=\"ACNTMST_PERMITE1\" summ=\"default\" size=\"1\"/><Column id=\"ACNTMST_PERMITEDATE2\" summ=\"default\" size=\"8\"/><Column id=\"ACNTMST_PERMITEUSER2\" summ=\"default\" size=\"6\"/><Column id=\"ACNTMST_PERMITE2\" summ=\"default\" size=\"1\"/><Column id=\"ACNTMST_REMARK\" summ=\"default\" size=\"1000\"/><Column id=\"ACNT_SECTIONKIND\" summ=\"default\" size=\"1\"/><Column id=\"I_FLOW_ID\" summ=\"default\" size=\"20\"/><Column id=\"ACNTMST_TITLE\" summ=\"default\" size=\"256\"/><Column id=\"OPEN_CHECK\" summ=\"default\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAccountDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNTDTL_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"5\"/><Column id=\"ACNTMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ACNTTIT_NO\" type=\"INT\" size=\"20\"/><Column id=\"ACNTTIT_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"ACNTTIT_NAME\" type=\"STRING\" size=\"25\"/><Column id=\"PL_CODE\" type=\"INT\" size=\"3\"/><Column id=\"ACNTDTL_AMOUNT\" type=\"CURRENCY\" size=\"13\"/><Column id=\"PRF_CODE\" type=\"INT\" size=\"3\"/><Column id=\"PRF_NAME\" type=\"STRING\" size=\"25\"/><Column id=\"ACNTDTL_CUSTNAME\" type=\"STRING\" size=\"35\"/><Column id=\"ACNTDTL_INVOICE_YM\" type=\"STRING\" size=\"6\"/><Column id=\"ACNTDTL_DELETE\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTDTL_SLIPNO\" type=\"STRING\" size=\"17\"/><Column id=\"ACNTDTL_REMARK\" type=\"STRING\" size=\"200\"/><Column id=\"CCUL_ID\" type=\"STRING\" size=\"50\"/><Column id=\"BANKCODE_ACCOUNT\" type=\"STRING\" size=\"32\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"EBA_BANK_ACCOUNT\" type=\"STRING\" size=\"20\"/><Column id=\"ACNTDTL_ACNTHOLDER\" type=\"STRING\" size=\"35\"/><Column id=\"ACNTDTL_PAYDATE\" type=\"STRING\" size=\"8\"/><Column id=\"ACNTDTL_BILL_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ACNTDTL_BILL_NO\" type=\"STRING\" size=\"24\"/><Column id=\"ACNTDTL_VAT\" type=\"INT\" size=\"12\"/><Column id=\"ACNTDTL_EBILL\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTDTL_USEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"CCUL_USEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"ACNTTIT_TREENAME\" type=\"STRING\" size=\"80\"/><Column id=\"CREDITCARD_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"ACNTDVL_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"ACNT_SALECNL_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"ACNTTIT_DEVELOP\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTTIT_PRODUCT\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTDTL_AD_NAME\" type=\"STRING\" size=\"8\"/><Column id=\"ACNTDTL_TEAMCODE\" type=\"STRING\" size=\"5\"/><Column id=\"ACNTDTL_TEAMNAME\" type=\"STRING\" size=\"50\"/><Column id=\"ACNTDTL_CARDGB\" type=\"STRING\" size=\"2\"/><Column id=\"CCUL_SECTIONMANAGECOST\" type=\"STRING\" size=\"1\"/><Column id=\"OLD_ACNTDTL_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_ACNTDTL_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_ACNTTIT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK_CHECK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProof", this);
            obj._setContents("<ColumnInfo><Column id=\"PRF_CODE\" type=\"INT\" size=\"3\"/><Column id=\"PRF_NAME\" type=\"STRING\" size=\"25\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAccountTitle", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNTTIT_RN\" type=\"INT\" size=\"5\"/><Column id=\"ACNTTIT_NO\" type=\"INT\" size=\"20\"/><Column id=\"ACNTTIT_NAME\" type=\"STRING\" size=\"40\"/><Column id=\"ACNTTIT_LVL\" type=\"INT\" size=\"2\"/><Column id=\"ACNTTIT_PNO\" type=\"INT\" size=\"20\"/><Column id=\"ACNTTIT_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"ACNTTIT_REMARK\" type=\"STRING\" size=\"100\"/><Column id=\"ACNTTIT_ENABLED\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTTIT_VISIBLE\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTTIT_DEVELOP\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTTIT_PRODUCT\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEBA", this);
            obj._setContents("<ColumnInfo><Column id=\"EBA_ID\" type=\"INT\" size=\"20\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"BANK_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"EBA_BANK_ACCOUNT\" type=\"STRING\" size=\"16\"/><Column id=\"EBA_ACCOUNT_HOLDER\" type=\"STRING\" size=\"40\"/><Column id=\"EBA_REMARK\" type=\"STRING\" size=\"50\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"EBA_DEFAULT\" type=\"STRING\" size=\"1\"/><Column id=\"BANKCODE_ACCOUNT\" type=\"STRING\" size=\"32\"/><Column id=\"BANKNAME_ACCOUNT\" type=\"STRING\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBank", this);
            obj._setContents("<ColumnInfo><Column id=\"BANK_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"BANK_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"BANK_DISABLED\" type=\"STRING\" size=\"1\"/><Column id=\"BANK_REMARK\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBillKind", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"1\"/><Column id=\"NAME\" type=\"STRING\" size=\"20\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">전자계산서</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">수기계산서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAcntDocDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNT_NAME\" type=\"STRING\" size=\"35\"/><Column id=\"AD_DEBTOR_AMOUNT\" type=\"INT\" size=\"20\"/><Column id=\"AD_CREDIT_AMOUNT\" type=\"INT\" size=\"20\"/><Column id=\"AD_REMARK\" type=\"STRING\" size=\"200\"/><Column id=\"AD_CUST_NAME\" type=\"STRING\" size=\"35\"/><Column id=\"AD_VOUCHERS\" type=\"STRING\" size=\"50\"/><Column id=\"AD_USEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"AD_MANAGEMENT_ITEM\" type=\"STRING\" size=\"200\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAcntDocMst", this);
            obj._setContents("<ColumnInfo><Column id=\"AD_DATENO\" type=\"STRING\" size=\"12\"/><Column id=\"AD_TYPE\" type=\"STRING\" size=\"30\"/><Column id=\"AD_WRITEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAcntDoc", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNT_NAME\" type=\"STRING\" size=\"35\"/><Column id=\"AD_KIND\" type=\"STRING\" size=\"2\"/><Column id=\"AD_ACNT_KIND\" type=\"STRING\" size=\"1\"/><Column id=\"AD_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"AD_NO\" type=\"STRING\" size=\"1\"/><Column id=\"AD_ACNT_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"AD_USEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"AD_CUST_NAME\" type=\"STRING\" size=\"35\"/><Column id=\"AD_ID\" type=\"INT\" size=\"20\"/><Column id=\"AD_DEBTOR_AMOUNT\" type=\"INT\" size=\"20\"/><Column id=\"AD_CREDIT_AMOUNT\" type=\"INT\" size=\"20\"/><Column id=\"AD_VOUCHERS\" type=\"STRING\" size=\"50\"/><Column id=\"AD_MANAGEMENT_ITEM\" type=\"STRING\" size=\"200\"/><Column id=\"AD_REMARK\" type=\"STRING\" size=\"200\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAccountMstPrt", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNTMST_CLASS\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTMST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ACNTMST_NO\" type=\"STRING\" size=\"3\"/><Column id=\"ACNTMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ACCOUNT_NO\" type=\"STRING\" size=\"12\"/><Column id=\"ACNTMST_YM\" type=\"STRING\" size=\"8\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"DK_CODE\" type=\"INT\" size=\"2\"/><Column id=\"ACNTMST_DELETE\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTMST_PERMITEDATE0\" type=\"STRING\" size=\"8\"/><Column id=\"ACNTMST_PERMITEUSER0\" type=\"STRING\" size=\"6\"/><Column id=\"ACNTMST_PERMITE0\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTMST_PERMITEDATE1\" type=\"STRING\" size=\"8\"/><Column id=\"ACNTMST_PERMITEUSER1\" type=\"STRING\" size=\"6\"/><Column id=\"ACNTMST_PERMITE1\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTMST_PERMITEDATE2\" type=\"STRING\" size=\"8\"/><Column id=\"ACNTMST_PERMITEUSER2\" type=\"STRING\" size=\"6\"/><Column id=\"ACNTMST_PERMITE2\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTMST_REMARK\" type=\"STRING\" size=\"1000\"/><Column id=\"ACNT_SECTIONKIND\" type=\"STRING\" size=\"1\"/><Column id=\"I_FLOW_ID\" type=\"INT\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAccountDtlPrt", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNTDTL_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"5\"/><Column id=\"ACNTMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ACNTTIT_NO\" type=\"INT\" size=\"20\"/><Column id=\"ACNTTIT_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"ACNTTIT_NAME\" type=\"STRING\" size=\"25\"/><Column id=\"PL_CODE\" type=\"INT\" size=\"3\"/><Column id=\"ACNTDTL_AMOUNT\" type=\"CURRENCY\" size=\"13\"/><Column id=\"PRF_CODE\" type=\"INT\" size=\"3\"/><Column id=\"PRF_NAME\" type=\"STRING\" size=\"25\"/><Column id=\"ACNTDTL_CUSTNAME\" type=\"STRING\" size=\"35\"/><Column id=\"ACNTDTL_INVOICE_YM\" type=\"STRING\" size=\"6\"/><Column id=\"ACNTDTL_DELETE\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTDTL_SLIPNO\" type=\"STRING\" size=\"17\"/><Column id=\"ACNTDTL_REMARK\" type=\"STRING\" size=\"200\"/><Column id=\"CCUL_ID\" type=\"INT\" size=\"20\"/><Column id=\"BANKCODE_ACCOUNT\" type=\"STRING\" size=\"32\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"EBA_BANK_ACCOUNT\" type=\"STRING\" size=\"20\"/><Column id=\"ACNTDTL_ACNTHOLDER\" type=\"STRING\" size=\"35\"/><Column id=\"ACNTDTL_PAYDATE\" type=\"STRING\" size=\"8\"/><Column id=\"ACNTDTL_BILL_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ACNTDTL_BILL_NO\" type=\"STRING\" size=\"24\"/><Column id=\"ACNTDTL_VAT\" type=\"INT\" size=\"12\"/><Column id=\"ACNTDTL_EBILL\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTDTL_USEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"CCUL_USEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"ACNTTIT_TREENAME\" type=\"STRING\" size=\"80\"/><Column id=\"CREDITCARD_NAME\" type=\"STRING\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComp", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"1\"/><Column id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAcntDevelop", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNTDVL_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"ACNTDVL_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"ACNTDVL_ENABLED\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTDVL_VISIBLE\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAcntSaleCnl", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNT_SALECNL_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"ACNT_SALECNL_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"ACNT_SALECNL_ENABLED\" type=\"STRING\" size=\"1\"/><Column id=\"ACNT_SALECNL_VISIBLE\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAcntAdProduct", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNTMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ACNTDTL_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTeamCode", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSECODE\" type=\"STRING\" size=\"5\"/><Column id=\"BUSENAME\" type=\"STRING\" size=\"30\"/><Column id=\"TEAMCODE\" type=\"STRING\" size=\"4\"/><Column id=\"TEAMNAME\" type=\"STRING\" size=\"50\"/><Column id=\"BU_ACTNCLASS\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAcntAddProduct", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNTMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ACNTDTL_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ATTRIBUTE_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"ATTRIBUTE_NAME\" type=\"STRING\" size=\"60\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDivideProduct", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNTMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ACNTDTL_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"ACNTDTL_GRADE\" type=\"STRING\" size=\"2\"/><Column id=\"ACNTDTL_TERM\" type=\"STRING\" size=\"2\"/><Column id=\"ACNTDTL_SUBJECT\" type=\"STRING\" size=\"2\"/><Column id=\"ACNTDTL_DEPTH\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWorkTeam", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSECODE\" type=\"STRING\" size=\"5\"/><Column id=\"BUSENAME\" type=\"STRING\" size=\"30\"/><Column id=\"WORKCODE\" type=\"STRING\" size=\"4\"/><Column id=\"WORKNAME\" type=\"STRING\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDivideCust", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNTMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ACNTDTL_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"H_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"M_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"L_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"GRADE_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"AREA_CODE\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAcntCust", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNTMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ACNTDTL_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"4\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"60\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAccountDtlTeam", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNTMST_ID\" type=\"STRING\" size=\"20\"/><Column id=\"ACNTDTL_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"ACNTTEAM_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"TEAMCODE\" type=\"STRING\" size=\"5\"/><Column id=\"TEAMNAME\" type=\"STRING\" size=\"50\"/><Column id=\"ACNTDTL_AMOUNT\" type=\"STRING\" size=\"13\"/><Column id=\"ACNTDTL_VAT\" type=\"STRING\" size=\"12\"/><Column id=\"WORKCODE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACNTTIT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORDMST_TITNO\" type=\"STRING\" size=\"256\"/><Column id=\"BU_ACTNCLASS\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAccountTitle_Dtl", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNTTIT_KIND\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTTIT_NO\" type=\"INT\" size=\"20\"/><Column id=\"ACNTTIT_NAME\" type=\"STRING\" size=\"40\"/><Column id=\"ACNTTIT_LINKCODE\" type=\"STRING\" size=\"5\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_s_flow", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNTMST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQNO\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"F_FNUM\" type=\"STRING\" size=\"256\"/><Column id=\"F_XML\" type=\"STRING\" size=\"256\"/><Column id=\"F_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"F_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_File", this);
            obj._setContents("<ColumnInfo><Column id=\"f_id\" type=\"STRING\" size=\"1\"/><Column id=\"f_name\" type=\"STRING\" size=\"100\"/><Column id=\"f_size\" type=\"STRING\" size=\"4\"/><Column id=\"file_name\" type=\"STRING\" size=\"256\"/><Column id=\"r_name\" type=\"STRING\" size=\"256\"/><Column id=\"f_path\" type=\"STRING\" size=\"256\"/><Column id=\"l_fname\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_File_delete", this);
            obj._setContents("<ColumnInfo><Column id=\"f_id\" type=\"STRING\" size=\"1\"/><Column id=\"f_name\" type=\"STRING\" size=\"100\"/><Column id=\"f_size\" type=\"STRING\" size=\"4\"/><Column id=\"file_name\" type=\"STRING\" size=\"256\"/><Column id=\"r_name\" type=\"STRING\" size=\"256\"/><Column id=\"f_path\" type=\"STRING\" size=\"256\"/><Column id=\"l_fname\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCorpCardUseList", this);
            obj._setContents("<ColumnInfo><Column id=\"CCUL_ID\" type=\"STRING\" size=\"100\"/><Column id=\"CCUL_USEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"CREDITCARD_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"CREDITCARD_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"CCUL_AMOUNT\" type=\"INT\" size=\"10\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CCUL_CUST_NAME\" type=\"STRING\" size=\"35\"/><Column id=\"CCUL_GETBACK_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"CCUL_GETBACK_USER\" type=\"STRING\" size=\"6\"/><Column id=\"CCUL_REMARK\" type=\"STRING\" size=\"200\"/><Column id=\"CCUL_SECTIONMANAGECOST\" type=\"STRING\" size=\"1\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK_CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"CCUL_USETIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAccountDtlTeam_tmp", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNTMST_ID\" type=\"STRING\" size=\"20\"/><Column id=\"ACNTDTL_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"ACNTTEAM_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"TEAMCODE\" type=\"STRING\" size=\"5\"/><Column id=\"TEAMNAME\" type=\"STRING\" size=\"50\"/><Column id=\"ACNTDTL_AMOUNT\" type=\"STRING\" size=\"13\"/><Column id=\"ACNTDTL_VAT\" type=\"STRING\" size=\"12\"/><Column id=\"WORKCODE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACNTTIT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORDMST_TITNO\" type=\"STRING\" size=\"256\"/><Column id=\"BU_ACTNCLASS\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_budget", this);
            obj._setContents("<ColumnInfo><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_budget_gb", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">10</Col><Col id=\"NAME\">부서운영비</Col></Row><Row><Col id=\"CODE\">32</Col><Col id=\"NAME\">부서운영비</Col></Row><Row><Col id=\"CODE\">8</Col><Col id=\"NAME\">업무시식비</Col></Row><Row><Col id=\"CODE\">30</Col><Col id=\"NAME\">업무시식비</Col></Row><Row><Col id=\"CODE\">311</Col><Col id=\"NAME\">일반접대비</Col></Row><Row><Col id=\"CODE\">380</Col><Col id=\"NAME\">일반접대비</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_edt", this);
            obj._setContents("<ColumnInfo><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EDT_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"EDT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_check", this);
            obj._setContents("<ColumnInfo><Column id=\"BUDGET_CHECK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_team_check", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNTMST_ID\" type=\"INT\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_VAT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_week_check", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">평일</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">주말 및 공휴일</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPersonalBank", this);
            obj._setContents("<ColumnInfo><Column id=\"BANK_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"BANK_ACCOUNT\" type=\"STRING\" size=\"30\"/><Column id=\"BANK_NAME_ALL\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"CARDNUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            
            // UI Components Initialize
            obj = new Div("Div00","8","15","98.88%","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid lightgray");
            obj.set_tooltiptype("default");
            obj.set_visible("true");
            obj.set_formscrollbartype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","9","-4","222","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("일반경비 지급결의서");
            obj.set_font("bold 15pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("ckb_open","260","6","82","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("부서 공유");
            obj.set_font("bold 9pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Btn_tempsave","51.90%","7","5.00%","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("임시저장");
            obj.set_letterSpacing("1px");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Btn_tempchk","Btn_tempsave:6.33%","7","6.90%","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("결재라인설정");
            obj.set_letterSpacing("1px");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnNew","Btn_tempchk:4.59%","7","5.00%","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("신규카드");
            obj.set_letterSpacing("1px");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnDtlNew","btnNew:6.33%","7","5.00%","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("내용추가");
            obj.set_letterSpacing("1px");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnSearch","btnDtlNew:6.33%","7","3.99%","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_letterSpacing("1px");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnSave","btnSearch:7.94%","7","3.99%","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("발송");
            obj.set_letterSpacing("1px");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnDel","btnSave:7.94%","7","3.99%","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_letterSpacing("1px");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnPrint","btnDel:7.94%","7","3.99%","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("출력");
            obj.set_letterSpacing("1px");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnClose","95.57%","7","3.99%","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_letterSpacing("1px");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","8","52","98.88%","648",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid lightgray");
            obj.set_color("#cfffcf");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","2","1","125","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_border("2px solid #10aea9");
            obj.set_text("결의서번호");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_letterSpacing("1px");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","2","38","125","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("결의서제목");
            obj.set_border("2px solid #10aea9");
            obj.set_color("#10aea9");
            obj.set_textAlign("center");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_letterSpacing("1px");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","2","75","125","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("총금액");
            obj.set_border("2px solid #10aea9");
            obj.set_color("#10aea9");
            obj.set_textAlign("center");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_letterSpacing("5px");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","2","112","125","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("지급방법");
            obj.set_border("2px solid #10aea9");
            obj.set_color("#10aea9");
            obj.set_textAlign("center");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_letterSpacing("1px");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","2","149","125","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("사용일자");
            obj.set_border("2px solid #10aea9");
            obj.set_color("#10aea9");
            obj.set_textAlign("center");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_letterSpacing("1px");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static05","2","290","125","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("적요");
            obj.set_border("2px solid #10aea9");
            obj.set_color("#10aea9");
            obj.set_textAlign("center");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_letterSpacing("1px");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06","2","327","125","110",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("지출근거");
            obj.set_border("2px solid #10aea9");
            obj.set_color("#10aea9");
            obj.set_textAlign("center");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_letterSpacing("1px");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static07","2","439","125","90",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("첨부파일");
            obj.set_border("2px solid #10aea9");
            obj.set_color("#10aea9");
            obj.set_textAlign("center");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_background("#ffffff");
            obj.set_letterSpacing("1px");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btnpay","2","186","125","102",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("귀속대상");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grd_Dtl","2","531","99.56%","110",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj._setContents("");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grd_FileA","Static07:1.60%","439",null,"90","8.04%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("56");
            obj.set_binddataset("ds_File");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/></Band><Band id=\"body\"><Cell text=\"bind:f_name\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("img_file","Grd_FileA:0.23%","442",null,"32","0.38%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("파일선택");
            obj.set_letterSpacing("1px");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button0","Grd_FileA:0.23%","477",null,"49","0.38%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("파일저장");
            obj.set_letterSpacing("1px");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edt_OutOrder_No","Static00:1.6%","2",null,"35","72.85%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static08","Edt_OutOrder_No:0.33%","2",null,"35","64.81%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("1차승인");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#10aea9");
            obj.set_letterSpacing("1px");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("cb_Permite0","Static08:0.00%","2",null,"35","59.68%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("승인");
            obj.set_background("#ffffff");
            obj.set_border("1px solid lightgray");
            obj.set_letterSpacing("3px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("bold 9pt/normal \"Arial\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar2","cb_Permite0:-2.47%","2",null,"35","48.86%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static09","Calendar2:-0.58%","2",null,"35","40.63%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_text("감사실승인");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_border("2px solid #10aea9");
            obj.set_textAlign("center");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("cb_Permite1","Static09:0.77%","2",null,"35","35.44%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            obj.set_text("승인");
            obj.set_background("#ffffff");
            obj.set_border("1px solid lightgray");
            obj.set_letterSpacing("3px");
            obj.set_textAlign("center");
            obj.set_font("bold 9pt/normal \"Arial\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar0","cb_Permite1:0.00%","2",null,"35","24.62%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static10","Calendar0:0.00%","2",null,"35","16.46%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            obj.set_text("재경부승인");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_border("2px solid #10aea9");
            obj.set_textAlign("center");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("cb_Permite2","Static10:0.00%","2",null,"35","11.27%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            obj.set_text("승인");
            obj.set_background("#ffffff");
            obj.set_border("1px solid lightgray");
            obj.set_letterSpacing("3px");
            obj.set_cursor("none");
            obj.set_textAlign("center");
            obj.set_font("bold 9pt/normal \"Arial\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar1","cb_Permite2:0.00%","2",null,"35","0.32%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("21");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_title","Static01:2","39",null,"35","0.32%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("22");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("MEdt_TotalAmount","Static02:1.60%","76",null,"35","73.04%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("23");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static11","MEdt_TotalAmount:0.00%","76",null,"35","64.81%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("24");
            obj.set_text("작성부서");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #10aea9");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_letterSpacing("1px");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo0","Static11:3.05%","76",null,"35","48.86%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("25");
            obj.set_innerdataset("dsSection");
            obj.set_codecolumn("SECTION_CODE");
            obj.set_datacolumn("SECTION_NAME");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static12","Combo0:-0.40%","76",null,"35","40.57%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("26");
            obj.set_text("담당자");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #10aea9");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_letterSpacing("1px");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edt_EmployeeName","Static12:0.00%","76",null,"35","24.62%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("27");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static13","Edt_EmployeeName:0.00%","76",null,"35","16.46%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("28");
            obj.set_text("작성일자");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #10aea9");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_letterSpacing("1px");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Cal_AcntMstDate","Static13:0.00%","76",null,"35","0.32%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("29");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Cb_Proof","Static03:1.60%","113",null,"35","73.04%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("30");
            obj.set_innerdataset("dsProof");
            obj.set_codecolumn("PRF_CODE");
            obj.set_datacolumn("PRF_NAME");
            obj.set_tooltiptext("지급 방법을 선택해주세요.");
            obj.set_tooltiptype("default");
            obj.set_text("");
            obj.set_value("6");
            obj.set_index("-1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static14","51.14%","113",null,"35","40.57%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("31");
            obj.set_text("금액");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            obj.set_color("#10aea9");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("MEdt_UnitCost","Static14:0.00%","113",null,"35","24.62%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("32");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static15","MEdt_UnitCost:0.00%","113",null,"35","16.46%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("33");
            obj.set_text("부가세");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            obj.set_color("#10aea9");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("MEdt_Vat","Static15:0.00%","113",null,"35","0.32%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("34");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Cal_UseDate","Static04:1.60%","149",null,"35","73.10%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("35");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static17","Cal_UseDate:-0.33%","149",null,"35","64.87%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("36");
            obj.set_text("사용부서");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #10aea9");
            obj.set_color("#10aea9");
            obj.set_textAlign("center");
            obj.set_letterSpacing("1px");
            obj.set_font("bold 9pt/normal \"Arial\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Cb_Section","Static17:3.08%","149",null,"35","48.86%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("37");
            obj.set_innerdataset("dsSection");
            obj.set_codecolumn("SECTION_CODE");
            obj.set_datacolumn("SECTION_NAME");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grd_TEAM_DIVIDE","btnpay:1.60%","186",null,"102","48.86%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("38");
            obj.set_binddataset("dsAccountDtlTeam");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"팀 명\"/><Cell col=\"1\" text=\"업무 항목\"/><Cell col=\"2\" text=\"금 액\"/><Cell col=\"3\" text=\"vat\"/></Band><Band id=\"body\"><Cell text=\"bind:TEAMNAME\"/><Cell col=\"1\" text=\"bind:WORKNAME\"/><Cell col=\"2\" text=\"bind:ACNTDTL_AMOUNT\"/><Cell col=\"3\" text=\"bind:ACNTDTL_VAT\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static18","Grd_TEAM_DIVIDE:0.45%","187",null,"33","40.76%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("39");
            obj.set_text("업체");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #10aea9");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static19","Grd_TEAM_DIVIDE:0.45%","221",null,"33","40.76%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("40");
            obj.set_text("계정");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #10aea9");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static20","Grd_TEAM_DIVIDE:0.45%","255",null,"33","40.76%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("41");
            obj.set_text("지급일자");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #10aea9");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("MEdt_Cust_Code","Static18:1.54%","187",null,"33","34.56%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("42");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edt_Cust_Name","MEdt_Cust_Code:0.00%","187",null,"33","16.46%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("43");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edt_AcntTitName","Static19:1.54%","221",null,"33","16.58%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("44");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Cal_PayDate","Static20:1.61%","255",null,"33","24.56%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("45");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button03","Edt_AcntTitName:0.79%","221",null,"33","0.38%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("46");
            obj.set_text("예산 확인");
            obj.set_letterSpacing("1px");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edt_Remark","Static05:1.60%","291",null,"35","48.86%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("47");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btnBankInfo","Edt_Remark:0.45%","291",null,"35","40.76%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("48");
            obj.set_text("입금계좌정보");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("cb_BankInfo","btnBankInfo:0.00%","291",null,"35","16.52%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("49");
            obj.set_innerdataset("dsEBA");
            obj.set_codecolumn("BANKCODE_ACCOUNT");
            obj.set_datacolumn("BANKNAME_ACCOUNT");
            this.Div01.addChild(obj.name, obj);

            obj = new TextArea("Txa_Remark","Static06:1.60%","327",null,"110","48.86%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("50");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btndivide01","Txa_Remark:0.45%","329",null,"52","40.76%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("51");
            obj.set_text("직과(도서)");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btndivide02","Txa_Remark:0.45%","384",null,"52","40.76%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("52");
            obj.set_text("직과\r\n(채널/고객)");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static21","btndivide01:1.53%","329",null,"108","34.94%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("53");
            obj.set_text("참조문서");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #10aea9");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid0","Static21:0.00%","329",null,"108","6.33%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("54");
            obj.set_binddataset("ds_s_flow");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"제목\"/><Cell col=\"1\" text=\"작성자\"/></Band><Band id=\"body\"><Cell text=\"bind:TITLE\"/><Cell col=\"1\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_reference","Grid0:0.00%","329",null,"108","0.38%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("55");
            obj.set_text("문서선택");
            this.Div01.addChild(obj.name, obj);

            obj = new Radio("Rd_BillKind","27.03%","113",null,"35","48.86%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("57");
            obj.set_background("#ffffff");
            obj.set_border("1px solid silver");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static16","Cal_PayDate:0.39%","255",null,"33","16.46%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("58");
            obj.set_text("계산서\r\n발행일자");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #10aea9");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_letterSpacing("1px");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Cal_BillDate","Static16:0%","255",null,"33","0.44%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("59");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Ed_BillNo","Cb_Section:0%","149",null,"35","24.56%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("60");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static23","Ed_BillNo:0%","149",null,"35","16.46%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("61");
            obj.set_text("예산 구분");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_color("#10aea9");
            obj.set_letterSpacing("1px");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("cb_edt","Static23:0%","149",null,"35","0.32%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("62");
            obj.set_innerdataset("ds_edt");
            obj.set_codecolumn("SABUN");
            obj.set_datacolumn("NAME");
            this.Div01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1600,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div01.form.edt_title","value","dsAccountMst","ACNTMST_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div01.form.Edt_OutOrder_No","value","dsAccountMst","ACCOUNT_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div01.form.Combo0","value","dsAccountMst","SECTION_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div01.form.cb_Permite0","value","dsAccountMst","SECTION_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div01.form.Calendar2","value","dsAccountMst","ACNTMST_PERMITEDATE0");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div01.form.cb_Permite1","value","dsAccountMst","ACNTMST_PERMITE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div01.form.Calendar0","value","dsAccountMst","ACNTMST_PERMITEDATE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div01.form.cb_Permite2","value","dsAccountMst","ACNTMST_PERMITE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div01.form.Calendar1","value","dsAccountMst","ACNTMST_PERMITEDATE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div01.form.edt_title","accessibilityaction","dsAccountMst","ACNTMST_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div01.form.Combo0","text","dsAccountDtl","ACNTDTL_EBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Div01.form.Edt_EmployeeName","value","dsAccountMst","EMPLOYEE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Div01.form.Cal_AcntMstDate","value","dsAccountMst","ACNTMST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Div01.form.Rd_BillKind","value","dsAccountDtl","ACNTDTL_EBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Div01.form.MEdt_UnitCost","value","dsAccountDtl","ACNTDTL_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Div01.form.MEdt_Vat","value","dsAccountDtl","ACNTDTL_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","Div01.form.Cb_Proof","value","dsAccountDtl","PRF_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","Div01.form.Cal_UseDate","value","dsAccountDtl","ACNTDTL_USEDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","Div01.form.Cb_Section","value","dsAccountDtl","ACNTDTL_TEAMCODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","Div01.form.Ed_BillNo","value","dsAccountDtl","ACNTDTL_BILL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","Div01.form.cb_edt","value","dsAccountDtl","BUDGET_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","Div01.form.MEdt_Cust_Code","value","dsAccountDtl","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","Div01.form.Edt_Cust_Name","value","dsAccountDtl","ACNTDTL_CUSTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","Div01.form.Edt_AcntTitName","value","dsAccountDtl","ACNTTIT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","Div01.form.Cal_PayDate","value","dsAccountDtl","ACNTDTL_PAYDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","Div01.form.Cal_BillDate","value","dsAccountDtl","ACNTDTL_BILL_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","Div01.form.Edt_Remark","value","dsAccountDtl","ACNTDTL_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","Div01.form.cb_BankInfo","value","dsAccountDtl","BANKCODE_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","Div01.form.Txa_Remark","value","dsAccountMst","ACNTMST_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PD110F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("PD110F.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("PD110F.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("PD110F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        var str_SvrRptUrl = gv_urlMrd + "/pd/";
        var str_mrd_name = "PD110";
        var str_docmrd_name = "PD_ACNTDOC";
        var str_file_path = "C:\\Temp\\";
        var aQryReturn 	= Array();  // 저자조회 리턴 변수
        var sSection_Code = nexacro.wrapQuote(nexacro.getApplication().gds_userinfo.getColumn(0,"BUSECD"));
        var sSection_Name = nexacro.wrapQuote(nexacro.getApplication().gds_userinfo.getColumn(0,"BUSENM"));
        var sEmployee_Name = nexacro.wrapQuote(nexacro.getApplication().gds_userinfo.getColumn(0,"NAME"));
        var sSection_ShortCode = nexacro.wrapQuote(nexacro.getApplication().gds_userinfo.getColumn(0,"SHORTCODE"));
        var gv_SABUN = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var sUserCompetence;
        var sUserCompetence1 = "1";   // 일반사용자
        var sUserCompetence2 = "2";   // 부서승인권자
        var sUserCompetence3 = "3";   // 부서장
        var sUserCompetence4 = "4";   // 일반승인권자
        var sUserCompetence5 = "5";   // 승인1차권한
        var sUserCompetence6 = "6";   // 승인2차권한1
        var sSetAmountCode = "";
        var temp_chk = "";  //발송시 Y
        var rtnACNTMST_ID, rtnACNTMST_NO, sReturnColSeq, rtnI_FLOW_ID;  // 마스터 저장시 ID, NO 가져오는 변수
        var iI_Flow_id; // 전자결재 ID
        var v_check;
        var rt_approval;
        var rt_order2;
        var rt_value;
        var iif_pvalue = "P"
        var iif_avalue = "A"
        var nDate = new Date();
        var today = Eco.date.getMaskFormatString(nDate, "yyyyMMdd");

        // 폼 로드시 코드테이블 불러오기
        this.PD110F_onload = function(obj,e)
        {
        	g_f_name = "";
        	nexacro.getApplication().dsFormpath.clearData();
        	temp_chk = "";

        	//this.lfn_showModal("zipPopup", '', "pd::PD_INFO.xfdl", '', this, '', '', 632, 624);
        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", "et_05_101");
        	sUserCompetence = nexacro.getApplication().gds_menu.getColumn(nRow, "UM_PER_SELECT");
        	sUserCompetence = Eco.decode(sUserCompetence, null, sUserCompetence1, sUserCompetence, sUserCompetence, sUserCompetence);

        	if ((gv_SABUN == nexacro.getApplication().gds_userinfo.getColumn(0, "DEPARTMENT_MANAGER")) ||
        	 (gv_SABUN == nexacro.getApplication().gds_userinfo.getColumn(0, "TEAM_MANAGER")) )
          	{
        		if ( sUserCompetence >= sUserCompetence4 )
        		{
        			// 기본 권한은 상위 등급으로
        			var nRow =  dsComp.AddRow();
        			dsComp.SetColumn(nRow, "CODE", sUserCompetence2);
        			dsComp.SetColumn(nRow, "NAME", "부서승인권자");

        			nRow =  dsComp.AddRow();
        			dsComp.SetColumn(nRow, "CODE", sUserCompetence);

        			switch (sUserCompetence)
        			{
        				case (sUserCompetence4) :
        					dsComp.SetColumn(nRow, "NAME", "일반관리자");
        					return false;
        				case (sUserCompetence5) :
        					dsComp.SetColumn(nRow, "NAME", "1차 승인권자");
        					return false;
        				case (sUserCompetence6) :
        					dsComp.SetColumn(nRow, "NAME", "2차 승인권자");
        					return false;
        			}

        			//var x = (GetDeviceInfo("CXScreen") / 2) - (PopDiv_Comp.Width / 2) ;
        			//var y = (GetDeviceInfo("CYScreen") / 2) - (PopDiv_Comp.Height / 2);

        			//PopDiv_Comp.TrackPopup(x , y );
        		}
        	    else
        			sUserCompetence = sUserCompetence2;

        	}

        	if (gv_SABUN == "C20078"){
        		alert("이 아이디로는 지급결의서를 작성할 수  없습니다.");
        		Close();
        	}

        	var str_arg	= "SECTION_CODE=" + sSection_Code +
        				  " COMPETENCE=" + nexacro.wrapQuote(Eco.decode(sUserCompetence, sUserCompetence1, "P", sUserCompetence2, "P", "A") );

        	this.gfn_TransactionP("Select", "JSP/pd/section_select2.jsp", "dsSection=dsSection", "dsSection=dsSection", str_arg, "fnSectionCallback", false, "P", false, this);
        	this.gfn_TransactionP("Select", "JSP/pd/proof_select.jsp", "dsProof=dsProof", "dsProof=dsProof", "", "fnProofCallback", false, "P", false, this);
        	this.gfn_TransactionP("Select", "JSP/pd/bank_select.jsp", "dsBank=dsBank", "dsBank=dsBank", "", "fnBankCallback", false, "P", false, this);
        	this.gfn_TransactionP("Select", "JSP/pd/acnt_develop_select.jsp", "dsAcntDevelop=dsAcntDevelop", "dsAcntDevelop=dsAcntDevelop", "", "fnDevelopCallback", false, "P", false, this);
        	this.gfn_TransactionP("Select", "JSP/pd/acnt_sale_channel_select.jsp", "dsAcntSaleCnl=dsAcntSaleCnl", "dsAcntSaleCnl=dsAcntSaleCnl", "", "fnCannelCallback", false, "P", false, this);

        	str_arg = "ACNTTIT_KIND=" + nexacro.wrapQuote( "0" ) +
        		  " COMPETENCE=" + nexacro.wrapQuote( "4" );

        	this.gfn_TransactionP("Select", "JSP/pd/accounttitile_select1.jsp", "dsAccountTitle=dsAccountTitle", "dsAccountTitle=dsAccountTitle", str_arg, "fnAccountTitleCallback", false, "P", false, this);

        	var str_arg	= "EMPLOYEE_ID=" + nexacro.wrapQuote( gv_SABUN );
        	this.gfn_TransactionP("Select", "JSP/pd/bankacntinfo_select.jsp", "dsEBA=dsEBA", "dsEBA=dsEBA", str_arg, "fnBankInfoCallback", false, "P", false, this);

        	this.gfn_TransactionP("Select", "JSP/pd/personalbankinfo_select.jsp", "dsPersonalBank=dsPersonalBank", "dsPersonalBank=dsPersonalBank", "", "fnCallback", false, "P", false, this);

        	if( !(sUserCompetence < sUserCompetence6) ){
        		this.Div01.form.Cal_PayDate.set_enable(true)
        	}else{
        		this.Div01.form.Cal_PayDate.set_enable(false)
        	}

        	//전자결재에서 불러오는지 확인
        	//신규작성 또는 수정 체크
        	if (iI_Flow_id == null) {
        		// 신규작성으로 적용
        		this.dsAccountMst.addRow();

        	}else{
        		var str_arg  = "";
        		str_arg	= "ACNTMST_CLASS=" + nexacro.wrapQuote( "0" ) +
        				  " ACNTMST_SDATE=" + nexacro.wrapQuote( ) +
        				  " ACNTMST_EDATE=" + nexacro.wrapQuote( ) +
        				  " SECTION_CODE=" + nexacro.wrapQuote( ) +
        				  " EMPLOYEE_ID=" + nexacro.wrapQuote( ) +
        				  " SET_OPTION=" + nexacro.wrapQuote( "0" ) +
        				  " I_FLOW_ID=" + nexacro.wrapQuote( iI_Flow_id ) +
        				  " COMPETENCE=" + nexacro.wrapQuote( sUserCompetence ) +
        				  " TITLE=" + nexacro.wrapQuote("");
        		this.gfn_TransactionP("Select", "JSP/pd/pd110f_account_mst_v2.jsp", "dsAccountMst=dsAccountMst", "dsAccountMst=dsAccountMst", str_arg, "fnAcntMstSelectCallback", false, "P", false, this);
        	}

        	this.Div01.form.Cb_Proof.setFocus();

        	this.getdata_budget_personal();

        	this.dsPersonalBank.filter("SABUN=='" + nexacro.wrapQuote(gv_SABUN) +"'");



        };




        //트랜잭션 콜백 시작

        //신규작성 또는 수정 체크 콜백
        this.fnAcntMstSelectCallback = function(Trid, ErrorCode, ErrorMsg)
        {
        	if(Trid == "Select")
        	{
        		if(ErrorCode != 0 )
        			trace("[PD110F.fnAcntMstSelectCallback(" + today + ")] " + Trid +"::"+ ErrorMsg );
        		else
        			// 결재라인 가져오기
        			I_FLOW_FORMPATH2_Load( this.dsAccountMst.GetColumn(this.dsAccountMst.row, "EMPLOYEE_ID") );
        	}
        }

        //	부서조회 콜백
        this.fnSectionCallback = function(Trid, ErrorCode, ErrorMsg)
        {
        	if(Trid == "Select")
        	{
        		if(ErrorCode != 0 )
        			trace("[PD110F.fnSectionCallback(" + today + ")] " + Trid +"::"+ ErrorMsg );
        		else
        			this.dsSection.rowposition = this.dsSection.findRow("SECTION_CODE",  sSection_Code);
        	}
        }

        //	지급방법 조회 콜백
        this.fnProofCallback = function(Trid, ErrorCode, ErrorMsg)
        {
        	if(Trid == "Select")
        	{
        		if(ErrorCode != 0 )
        			trace("[PD110F.fnProofCallback(" + today + ")] " + Trid +"::"+ ErrorMsg );
        	}
        }

        //	은행리스트 콜백
        this.fnBankCallback = function(Trid, ErrorCode, ErrorMsg)
        {
        	if(Trid == "Select")
        	{
        		if(ErrorCode != 0 )
        			trace("[PD110F.fnBankCallback(" + today + ")] " + Trid +"::"+ ErrorMsg );
        	}
        }

        //	개발부  조회 콜백
        this.fnDevelopCallback = function(Trid, ErrorCode, ErrorMsg)
        {
        	if(Trid == "Select")
        	{
        		if(ErrorCode != 0 )
        			trace("[PD110F.fnDevelopCallback(" + today + ")] " + Trid +"::"+ ErrorMsg );
        	}
        }

        //	채널 조회 콜백
        this.fnCannelCallback = function(Trid, ErrorCode, ErrorMsg)
        {
        	if(Trid == "Select")
        	{
        		if(ErrorCode != 0 )
        			trace("[PD110F.fnCannelCallback(" + today + ")] " + Trid +"::"+ ErrorMsg );
        	}
        }

        //	계정과목 조회 콜백
        this.fnAccountTitleCallback = function(Trid, ErrorCode, ErrorMsg)
        {
        	if(Trid == "Select")
        	{
        		if(ErrorCode != 0 )
        			trace("[PD110F.fnAccountTitleCallback(" + today + ")] " + Trid +"::"+ ErrorMsg );
        	}
        }

        //	조회 콜백
        this.fnCallback = function(Trid, ErrorCode, ErrorMsg)
        {
        	if(Trid == "Select")
        	{
        		if(ErrorCode != 0 )
        			trace("[PD110F.fnCallback(" + today + ")] " + Trid +"::"+ ErrorMsg );
        	}
        	else if(Trid == "save")
        	{
        		if(ErrorCode != 0 )
        		{
        			trace("[PD110F.fnCallback(" + today + ")] " + Trid +"::"+ ErrorMsg );
        			alert( "전산실로 문의 바랍니다." + "   " +  Trid +"::"+ ErrorMsg );
        		}
        	}
        }

        //	직원계좌정보 콜백
        this.fnBankInfoCallback = function(Trid, errCode, errMsg)
        {
        	if(Trid == "Select")
        	{
        		if(errCode != 0 )
        			trace("[PD110F.fnBankInfoCallback(" + today + ")] " + Trid +"::"+ errMsg );
        	}
        }


        //트랜잭션 콜백 끝


        //함수 콜백 시작

        //폼 온로드 콜백
        this.getdata_budget_personal =function()
        {
        	//this.Div01.form.Cal_UseDate.set_value('20220610');
        	//this.Div01.form.Cal_BillDate.set_value('20220610');

        	var str_arg, use_date;
        	var CalUseDate = this.Div01.form.Cal_UseDate.value;
        	var CalBillDate = this.Div01.form.Cal_BillDate.value;
        	var yyToday = today.substr(0,4);
        	//var CalUseDate = this.Div01.form.Cal_UseDate.value.substr(0,4);
        	//var CalBillDate = this.Div01.form.Cal_BillDate.value.substr(0,4);

        	if (CalUseDate == null || "undefined" )
        	{
        	   if (CalBillDate == null || "undefined"){
        			use_date = yyToday;
        		}else{
        			use_date = Cal_BillDate.substr(0,4);
        		}
        	}
        	else
        	{
        	   use_date = CalUseDate;
        	}

        	str_arg = "edt_sabun="+ "C16220"//nexacro.wrapQuote(dsAccountMst.GetColumn(this.dsAccountMst.row,"EMPLOYEE_ID")) +
        			 " use_date="+nexacro.wrapQuote(use_date);

        	this.gfn_TransactionP("budget_personal", "JSP/pd/PD110_budget_personal.jsp", "ds_edt=ds_edt", "ds_edt=ds_edt", str_arg, "Callback_budget_personal", false, "P", false, this);
        }

        //함수 콜백 끝


        //트랜잭션 콜백 시작
        //
        // this.Callback_budget_personal = function(Trid, ErrorCode, ErrorMsg)
        //
        // {
        //    var nRow;
        //    if (ErrorCode != 0)
        //    {
        //       alert(ErrorMsg);
        //       break;
        //    }
        //    nRow = ds_edt.AddRow();
        //    ds_edt.SetColumn(nRow,"NAME","부서예산");
        //    ds_edt.SetColumn(nRow,"SABUN","000000");
        //
        //    nRow = ds_edt.SearchRow("SABUN="+quote(dsAccountMst.GetColumn(dsAccountMst.row,"EMPLOYEE_ID")));
        //
        //    if (nRow >= 0)
        //    {
        //       cb_edt.Value = dsAccountMst.GetColumn(dsAccountMst.row,"EMPLOYEE_ID");
        //    }
        //    else
        //    {
        //       cb_edt.Index = ds_edt.rowcount - 1;
        //    }
        //
        //    if (ds_edt.rowcount == 1)
        //    {
        //       Static32.Visible = false;
        //       cb_edt.Visible = false;
        //    }
        //    else if (ds_edt.rowcount > 1)
        //    {
        //       Static32.Visible = true;
        //       cb_edt.Visible = true;
        //    }
        // }



        //트랜잭션 콜백 끝.









        // decode가 안되어 삼항연산으로 처리한 함수 리스트 -- 현재 사용 안함.
        this.fn_iif_strArg = function()
        {
            var arrArgument = this.fn_iif_strArg.arguments;
        	trace(arrArgument[0]);
            if (arrArgument[0])
            {
                return iif_pvalue;
            }
            else
            {
                return iif_avalue;
            }
        };

        this.fn_iif = function()
        {
            var arrArgument = this.fn_iif.arguments;
            if (arrArgument[0])
            {
                return sUserCompetence1;
            }
            else
            {
                return sUserCompetence;
            }
        };


        //신규카드
        this.Div00_btnNew_onclick = function(obj,e)
        {
        	dsAccountMst.clearData();
        	dsAccountMst.addRow();

        	ds_File.clearData();
        	Ds_flow_order2.clearData();

        	dsAcntAddProduct.clearData();
        	dsDivideProduct.clearData();
        	dsAccountDtlTeam.clearData();
        	dsDivideCust.clearData();
        	dsAccountTitle_Dtl.clearData();
        	Edt_AcntTitName.setFocus();
        	dsCorpCardUseList.clearData();
        	ds_s_flow.clearData();
        	this.dsPersonalBank.filter(""); //넥사에서 언필터가 없기에 대체 방법을 찾아봐야함.

        	temp_chk = "";
        };

        this.btnSearch_OnClick = function(obj,e)
        {
        	this.dsCorpCardUseList.clearData();

        	var objParam = {OutDataSet :  nexacro.wrapQuote("dsAccountMst=dsAccountMst"),
        					dsParam: this.dsSection,
        					JSPFileName : "JSP/pd/pd110f_account_mst_v2.jsp",
        					AcntMst_Class : "0",
        					PDCompetence : sUserCompetence,
        					ImgTitleName : " 일반경비 지급결의서" ,
        					FormId : "PD110F"};


        	this.lfn_showModal("popupTemp", objParam, "pd::PD110_SearchF.xfdl", "", this, '', '', 696, 400);
        };

        //부서 승인
        this.cb_Permite0_OnClick = function(obj,e)
        {
        	var chkValue = this.Div01.form.cb_Permite0.value;

        	if (chkValue == true)
        	{
        		this.dsAccountMst.setColumn(this.dsAccountMst.row, "ACNTMST_PERMITEDATE0", null);
        		this.dsAccountMst.setColumn(this.dsAccountMst.row, "ACNTMST_PERMITEUSER0", null);
        	}
        	else if (sUserCompetence == sUserCompetence2)
        	{
        		this.dsAccountMst.setColumn(this.dsAccountMst.row, "ACNTMST_PERMITEDATE0", today);
        		this.dsAccountMst.setColumn(this.dsAccountMst.row, "ACNTMST_PERMITEUSER0", gv_SABUN);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PD110F_onload,this);
            this.Div00.form.Btn_tempchk.addEventHandler("onclick",this.Btn_tempchk_OnClick,this);
            this.Div00.form.btnNew.addEventHandler("onclick",this.Div00_btnNew_onclick,this);
            this.Div00.form.btnSearch.addEventHandler("onclick",this.btnSearch_OnClick,this);
            this.Div00.form.btnSave.addEventHandler("onclick",this.Div00_Button03_onclick,this);
            this.Div01.form.cb_Permite0.addEventHandler("onclick",this.cb_Permite0_OnClick,this);
        };
        this.loadIncludeScript("PD110F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
