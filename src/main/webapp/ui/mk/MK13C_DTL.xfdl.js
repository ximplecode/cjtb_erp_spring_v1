(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MkDtlMain");
            this.set_titletext("필름관리 세부사양");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1266,490);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mk_Paper", this);
            obj._setContents("<ColumnInfo><Column id=\"PPR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_STND\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_REGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_LENGTH\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CONVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_DANGA\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_FEQUENT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_DISABLED\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_STNDNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_CLASS\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_Cust", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CUST\" type=\"STRING\" size=\"6\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REPRESENTATIVE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_STARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_STOPPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ACNTNO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTDTL_SALEAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PWT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrdDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"ORDMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ORDDTL_SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"ORDDTL_PSEQ\" type=\"STRING\" size=\"2\"/><Column id=\"USE_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"USE_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"PPR_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"COAT_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"ORDDTL_PAGE\" type=\"INT\" size=\"3\"/><Column id=\"ORDDTL_BUL\" type=\"INT\" size=\"3\"/><Column id=\"ORDDTL_GANGED\" type=\"INT\" size=\"1\"/><Column id=\"ORDDTL_DETAIL\" type=\"STRING\" size=\"20\"/><Column id=\"ORDDTL_TONE1\" type=\"INT\" size=\"1\"/><Column id=\"ORDDTL_TONE2\" type=\"INT\" size=\"1\"/><Column id=\"ORDDTL_TONE\" type=\"STRING\" size=\"3\"/><Column id=\"ORDDTL_JMI\" type=\"DECIMAL\" size=\"10\"/><Column id=\"ORDDTL_MRGN\" type=\"DECIMAL\" size=\"8\"/><Column id=\"CUST\" type=\"STRING\" size=\"6\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"ORDDTL_RUNDATE\" type=\"STRING\" size=\"8\"/><Column id=\"ORDDTL_REALWORKQTY\" type=\"INT\" size=\"6\"/><Column id=\"ORDDTL_TONQTY\" type=\"DECIMAL\" size=\"10\"/><Column id=\"ORDDTL_UNITCOST\" type=\"DECIMAL\" size=\"9\"/><Column id=\"ORDDTL_AMOUNT\" type=\"INT\" size=\"9\"/><Column id=\"ORDDTL_VAT\" type=\"INT\" size=\"8\"/><Column id=\"ORDDTL_PANQTY\" type=\"INT\" size=\"3\"/><Column id=\"ORDDTL_PANUNITCOST\" type=\"INT\" size=\"5\"/><Column id=\"ORDDTL_PANAMOUNT\" type=\"INT\" size=\"9\"/><Column id=\"ORDDTL_PANVAT\" type=\"INT\" size=\"8\"/><Column id=\"PRCS_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"ORDDTL_COMMENT\" type=\"STRING\" size=\"30\"/><Column id=\"ORDDTL_REMARK\" type=\"STRING\" size=\"60\"/><Column id=\"USE_PROCESSTYPE\" type=\"STRING\" size=\"2\"/><Column id=\"USE_PAGECNT\" type=\"STRING\" size=\"1\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"ORDDTL_BNDSEQ\" type=\"INT\" size=\"2\"/><Column id=\"ORDDTL_FILMOUTDATE\" type=\"STRING\" size=\"8\"/><Column id=\"ORDDTL_FILMINDATE\" type=\"STRING\" size=\"8\"/><Column id=\"ORDDTL_FILMREMARK\" type=\"STRING\" size=\"60\"/><Column id=\"CTP\" type=\"STRING\" size=\"3\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_use", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_SHEETPRNCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PAGECNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_DISABLED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_coating", this);
            obj._setContents("<ColumnInfo><Column id=\"COAT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COAT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COAT_DISABLED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Div("DivDtl","0","0","100.00%","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#e8e7e3");
            obj.set_visible("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stType","9","34","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("0");
            obj.set_text("용도");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edType","stType:3","34","3.95%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("1");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_maxlength("2");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Combo("cbType","edType:3","34","9.48%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_mk_use");
            obj.set_codecolumn("USE_CODE");
            obj.set_datacolumn("USE_NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_enable("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Grid("grdDtl","9","261","98.74%",null,null,"9",null,null,null,null,this.DivDtl.form);
            obj.set_taborder("12");
            obj.set_binddataset("dsOrdDtl");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"116\"/><Column size=\"215\"/><Column size=\"127\"/><Column size=\"177\"/><Column size=\"65\"/><Column size=\"101\"/><Column size=\"101\"/><Column size=\"164\"/><Column size=\"101\"/><Column size=\"37\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"용도\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" rowspan=\"2\" text=\"용지\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" rowspan=\"2\" text=\"코팅\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" rowspan=\"2\" text=\"세부사항\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"4\" rowspan=\"2\" text=\"색도\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"5\" colspan=\"2\" text=\"진행일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" rowspan=\"2\" text=\"외주처\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" rowspan=\"2\" text=\"진행일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"9\" rowspan=\"2\" text=\"CTP\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell row=\"1\" col=\"5\" text=\"출고일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"6\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"입고일자\"/></Band><Band id=\"body\"><Cell text=\"bind:USE_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"combotext\" combodataset=\"ds_mk_use\" combocodecol=\"USE_CODE\" combodatacol=\"USE_NAME\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:PPR_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"combotext\" combodataset=\"ds_mk_Paper\" combocodecol=\"PPR_CODE\" combodatacol=\"PPR_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:COAT_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"combotext\" combodataset=\"ds_mk_coating\" combocodecol=\"COAT_CODE\" combodatacol=\"COAT_NAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:ORDDTL_DETAIL\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" displaytype=\"normal\" maskeditformat=\"#,0.000\"/><Cell col=\"4\" text=\"bind:ORDDTL_TONE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" displaytype=\"normal\" maskeditformat=\"#,0.000\"/><Cell col=\"5\" text=\"bind:ORDDTL_FILMOUTDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"mask\" maskeditformat=\"####-##-##\" maskedittype=\"string\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:ORDDTL_FILMINDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"mask\" maskeditformat=\"####-##-##\" maskedittype=\"string\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:CUST\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" combodataset=\"ds_mk_Cust\" combocodecol=\"CUST\" combodatacol=\"CUST_NAME\" displaytype=\"combotext\"/><Cell col=\"8\" text=\"bind:ORDDTL_RUNDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"mask\" maskeditformat=\"####-##-##\" maskedittype=\"string\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:CTP\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" displaytype=\"checkboxcontrol\" maskeditformat=\"#,0.000\"/></Band></Format></Formats>");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stDtlNm","12","-5","185","46",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("21");
            obj.set_text("▣필름관리 세부사항▣");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stType00","cbType:3","34","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("3");
            obj.set_text("제본순서");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edBndSeq","stType00:3","34","8.93%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("4");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stPprCd","edBndSeq:3","34","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("5");
            obj.set_text("용지코드");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edPprCd","stPprCd:3","34","6.32%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("6");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Combo("cbPprCd","edPprCd:3","34","31.12%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_mk_Paper");
            obj.set_codecolumn("PPR_CODE");
            obj.set_datacolumn("PPR_NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_enable("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stCoat","9","72","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("8");
            obj.set_text("코팅");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edCoat","stCoat:3","72","3.95%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("9");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_maxlength("2");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Combo("cbCoat","edCoat:3","72","9.48%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_mk_coating");
            obj.set_codecolumn("TYPE_CODE");
            obj.set_datacolumn("TYPE_NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_enable("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stPage","cbCoat:3","72","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("11");
            obj.set_text("쪽수");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new MaskEdit("medtPage","stPage:3","72","8.93%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("30");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stBul","medtPage:3","72","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("13");
            obj.set_text("벌");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edBul","stBul:3","72","6.32%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("14");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stGanged","edBul:3","72","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("15");
            obj.set_text("돈뎅");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edGanged","stGanged:3","72","6.32%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("16");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stTone","edGanged:3","72","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("17");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_wordWrap("char");
            obj.set_text("색도");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edTone1","stTone:3","72","58","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("18");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("Static00_00","edTone1:7","68","12","38",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("19");
            obj.set_text("/");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edTone2","Static00_00:-1","72","58","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("20");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stJmi","9","110","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("31");
            obj.set_text("정미");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new MaskEdit("medtJmi","stJmi:3","110","13.60%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("32");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stMrgn","medtJmi:4","110","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("33");
            obj.set_text("여분");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new MaskEdit("medtMrgn","stMrgn:3","110","17.85%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("34");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Button("btnCust_Search","medtMrgn:3","110","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("36");
            obj.set_text("외주처");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_enable("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edCustCd","btnCust_Search:3","110","5.85%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("22");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Combo("cbCustNm","edCustCd:3","110","22.67%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_mk_Cust");
            obj.set_codecolumn("CUST");
            obj.set_datacolumn("CUST_NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_enable("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stRunDate","cbCustNm:3","110","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("24");
            obj.set_text("진행일자");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Calendar("calRunDate","stRunDate:3","110","9.72%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_enable("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stComment","9","147","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("26");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_wordWrap("char");
            obj.set_text("특이사항");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edCommt","stComment:3","147","74.57%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("27");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_enable("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stRemark","9","186","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("28");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_wordWrap("char");
            obj.set_text("비고");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edRemark","stRemark:3","186","74.57%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("29");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_enable("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose",null,null,"31","30","0.39%","93.47%",null,null,null,null,this.DivDtl.form);
            obj.set_taborder("35");
            obj.set_image("url(\'Img::icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            obj.set_text("");
            obj.set_background("#e8e7e3");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stFOutDate","edCommt:3","147","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("37");
            obj.set_text("필름출고일자");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Calendar("calFilmOutDate","stFOutDate:3","147","9.72%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("38");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stFInDate","edRemark:3","186","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("39");
            obj.set_text("필름입고일자");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Calendar("calFilmInDate","stFInDate:3","186","9.72%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("40");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stFilmRemark","9","224","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("41");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_wordWrap("char");
            obj.set_text("필름비고");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edFilmRemark","97","223","91.79%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("42");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1266,490,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","DivDtl.form.edType","value","dsOrdDtl","USE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","DivDtl.form.cbType","value","dsOrdDtl","USE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","DivDtl.form.edPprCd","value","dsOrdDtl","PPR_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","DivDtl.form.cbPprCd","value","dsOrdDtl","PPR_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","DivDtl.form.edBul","value","dsOrdDtl","ORDDTL_BUL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","DivDtl.form.edCoat","value","dsOrdDtl","COAT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","DivDtl.form.cbCoat","value","dsOrdDtl","COAT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","DivDtl.form.edGanged","value","dsOrdDtl","ORDDTL_GANGED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","DivDtl.form.edTone1","value","dsOrdDtl","ORDDTL_TONE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","DivDtl.form.edTone2","value","dsOrdDtl","ORDDTL_TONE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","DivDtl.form.edCustCd","value","dsOrdDtl","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","DivDtl.form.cbCustNm","value","dsOrdDtl","CUST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","DivDtl.form.calRunDate","value","dsOrdDtl","ORDDTL_RUNDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","DivDtl.form.edCommt","value","dsOrdDtl","ORDDTL_COMMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","DivDtl.form.edRemark","value","dsOrdDtl","ORDDTL_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","DivDtl.form.medtPage","value","dsOrdDtl","ORDDTL_PAGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","DivDtl.form.medtJmi","value","dsOrdDtl","ORDDTL_JMI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","DivDtl.form.medtMrgn","value","dsOrdDtl","ORDDTL_MRGN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","DivDtl.form.edBndSeq","value","dsOrdDtl","ORDDTL_BNDSEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","DivDtl.form.calFilmOutDate","value","dsOrdDtl","ORDDTL_FILMOUTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","DivDtl.form.calFilmInDate","value","dsOrdDtl","ORDDTL_FILMINDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","DivDtl.form.edFilmRemark","value","dsOrdDtl","ORDDTL_FILMREMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK13C_DTL.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK13C_DTL.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("MK13C_DTL.xfdl","Lib::Lib_mk.xjs");
        this.registerScript("MK13C_DTL.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_mk.xjs"); /*include "Lib::Lib_mk.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var nOrdMst_Id, strVisibleD, vPerDML;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var sCust_Gubn = "41";

        this.MkDtlMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);
        	nOrdMst_Id = this.parent.parent.dsOrdMst.getColumn(this.parent.parent.dsOrdMst.rowposition, "ORDMST_ID");

        	this.gfn_TransactionP("select", "JSP/mk/getData_use.jsp", "ds_mk_use=ds_mk_use", "ds_mk_use=ds_mk_use", "", "", false, "S", false, this); 						//용도코드
        	this.gfn_TransactionP("select", "JSP/mk/getData_coat.jsp", "ds_mk_coating=ds_mk_coating", "ds_mk_coating=ds_mk_coating", "", "", false, "S", false, this); 		//코팅코드
        	this.gfn_TransactionP("select", "JSP/mk/getData_paper.jsp", "ds_mk_Paper=ds_mk_Paper", "ds_mk_Paper=ds_mk_Paper", "", "", false, "S", false, this); 			//용지코드
        	this.gfn_TransactionP("select", "JSP/mk/Cust_Select.jsp", "ds_mk_Cust=ds_mk_Cust", "ds_mk_Cust=ds_mk_Cust", "", "", false, "S", false, this);   				 //업체코드

        };

        // 용지발주 상세내역 가져오기
        this.getData_Dtl = function(nOrdMst_Id, vPerDML)
        {
        	str_url = "JSP/mk/mk13cf_order_dtl.jsp";
        	in_ds ="dsOrdDtl=dsOrdDtl";
        	out_ds ="dsOrdDtl=dsOrdDtl";
        	str_arg ="ORDMST_ID=" +nexacro.wrapQuote(nOrdMst_Id);

        	this.gfn_TransactionP("selectDtl", str_url, in_ds, out_ds, str_arg, "Callback_Search", false, "S", false, this);
        };

        this.Callback_Search = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}else{
        		this.DivDtl.form.calFilmOutDate.setFocus();
        	}
        };

        //#######################################################
        // 세부사양 저장
        //#######################################################
        this.fctn_Dtl_save = function(vStr)
        {
        	in_ds 	= "input=dsOrdDtl:u";
        	str_url = "JSP/mk/mk13bf_film_dml.jsp";

        	for(nRow=0 ; nRow < this.dsOrdDtl.getRowCount(); nRow++)
        	{
        		// 필름 입/출고일자가 null일경우 인덱스를 타기 위해 빈 공백을 넣어줌
        		if (this.dsOrdDtl.getColumn(nRow, "ORDDTL_FILEOUTDATE") == "" || Eco.isUndefined(this.dsOrdDtl.getColumn(nRow, "ORDDTL_FILEOUTDATE")) == true)
        			this.dsOrdDtl.setColumn(nRow, "ORDDTL_FILEOUTDATE", " ");

        		if (this.dsOrdDtl.getColumn(nRow, "ORDDTL_FILEINDATE") == "" || Eco.isUndefined(this.dsOrdDtl.getColumn(nRow, "ORDDTL_FILEINDATE")) == true)
        			this.dsOrdDtl.setColumn(nRow, "ORDDTL_FILEINDATE", " ");
        	}

        	this.gfn_TransactionP("insert", str_url, in_ds, "", "", "", false, vStr, false, this);
        	this.DivDtl.form.grdDtl.setFocus();
        }

        this.DivDtl_grdDtl_onkeydown = function(obj,e)
        {
        	//DML권한 없을 경우
        	if(vPerDML != 1)
        	{
        		if(e.keycode == 27)   //ESC -> 세부내역 DIV 닫기
        			this.DivDtl_ImgClose_onclick();
        	}else
        	{
        		if(e.keycode == 13)		//Enter키 입력
        		{
        			this.DivDtl.form.calFilmOutDate.setFocus();
        			this.DivDtl.form.calFilmOutDate.setSelect(0, -1);

        		}else if(e.keycode == 27)		// ESC버튼 -> 세부내역DIV 닫기
        				this.DivDtl_ImgClose_onclick();
        	}
        };

        //#######################################################
        // 세부사양 DIV 닫기
        //#######################################################
        this.DivDtl_ImgClose_onclick = function(obj,e)
        {
        	this.parent.parent.DivDtl.set_visible("false");

        	if(this.parent.parent.dsOrdMst.rowposition < this.parent.parent.dsOrdMst.getRowCount()-1)
        		this.parent.parent.dsOrdMst.set_rowposition(this.parent.parent.dsOrdMst.rowposition+1);

        	this.parent.parent.grdMst.setFocus();
        };


        this.DivDtl_edFilmRemark_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		if(this.dsOrdDtl.rowposition != this.dsOrdDtl.getRowCount()-1)
        		{
        			//다음 row로 이동
        			this.dsOrdDtl.set_rowposition(this.dsOrdDtl.rowposition+1);
        			this.DivDtl.form.calFilmOutDate.setFocus();
        		}else{
        			this.DivDtl.form.grdDtl.setFocus();
        		}
        	}
        };

        this.DivDtl_calFilmOutDate_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.DivDtl.form.calFilmInDate.setFocus();

        		if(this.DivDtl.form.calFilmInDate.value.trim() == "")
        			this.DivDtl.form.calFilmInDate.setSelect(0, 0);
        		else
        			this.DivDtl.form.calFilmInDate.setSelect(0, -1);
        	}else if(e.keycode == 27)
        		this.DivDtl.form.grdDtl.setFocus();

        };

        this.DivDtl_calFilmInDate_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        		this.DivDtl.form.edFilmRemark.setFocus();
        	else if(e.keycode == 27)
        		this.DivDtl.form.grdDtl.setFocus();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkDtlMain_onload,this);
            this.addEventHandler("ontimer",this.MkDtlMain_ontimer,this);
            this.addEventHandler("onsize",this.MkDtlMain_onsize,this);
            this.DivDtl.form.edType.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.DivDtl.form.cbType.addEventHandler("onitemchanged",this.DivDtl_cbType_onitemchanged,this);
            this.DivDtl.form.cbType.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.DivDtl.form.grdDtl.addEventHandler("onkeydown",this.DivDtl_grdDtl_onkeydown,this);
            this.DivDtl.form.cbPprCd.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.DivDtl.form.medtMrgn.addEventHandler("onkeydown",this.DivDtl_medtMrgn_onkeydown,this);
            this.DivDtl.form.btnCust_Search.addEventHandler("onclick",this.DivDtl_btnCust_Search_onclick,this);
            this.DivDtl.form.edCustCd.addEventHandler("onkeydown",this.DivDtl_edCustCd_onkeydown,this);
            this.DivDtl.form.calRunDate.addEventHandler("onchanged",this.DivDtl_calRunDate_onchanged,this);
            this.DivDtl.form.edRemark.addEventHandler("onkeydown",this.DivDtl_edRemark_onkeydown,this);
            this.DivDtl.form.ImgClose.addEventHandler("onclick",this.DivDtl_ImgClose_onclick,this);
            this.DivDtl.form.calFilmOutDate.addEventHandler("onkeydown",this.DivDtl_calFilmOutDate_onkeydown,this);
            this.DivDtl.form.calFilmInDate.addEventHandler("onkeydown",this.DivDtl_calFilmInDate_onkeydown,this);
            this.DivDtl.form.edFilmRemark.addEventHandler("onkeydown",this.DivDtl_edFilmRemark_onkeydown,this);
        };
        this.loadIncludeScript("MK13C_DTL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
