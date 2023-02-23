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
            this.set_titletext("발주관리 세부사양");
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
            obj._setContents("<ColumnInfo><Column id=\"ORDMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ORDDTL_SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"ORDDTL_PSEQ\" type=\"STRING\" size=\"2\"/><Column id=\"USE_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"USE_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"PPR_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"COAT_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"ORDDTL_PAGE\" type=\"INT\" size=\"5\"/><Column id=\"ORDDTL_BUL\" type=\"INT\" size=\"3\"/><Column id=\"ORDDTL_GANGED\" type=\"INT\" size=\"1\"/><Column id=\"ORDDTL_DETAIL\" type=\"STRING\" size=\"20\"/><Column id=\"ORDDTL_TONE1\" type=\"INT\" size=\"1\"/><Column id=\"ORDDTL_TONE2\" type=\"INT\" size=\"1\"/><Column id=\"ORDDTL_TONE\" type=\"STRING\" size=\"3\"/><Column id=\"ORDDTL_JMI\" type=\"DECIMAL\" size=\"10\"/><Column id=\"ORDDTL_MRGN\" type=\"DECIMAL\" size=\"8\"/><Column id=\"CUST\" type=\"STRING\" size=\"6\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"ORDDTL_RUNDATE\" type=\"STRING\" size=\"8\"/><Column id=\"ORDDTL_REALWORKQTY\" type=\"INT\" size=\"6\"/><Column id=\"ORDDTL_TONQTY\" type=\"DECIMAL\" size=\"10\"/><Column id=\"ORDDTL_UNITCOST\" type=\"DECIMAL\" size=\"10\"/><Column id=\"ORDDTL_AMOUNT\" type=\"INT\" size=\"9\"/><Column id=\"ORDDTL_VAT\" type=\"INT\" size=\"8\"/><Column id=\"ORDDTL_PANQTY\" type=\"INT\" size=\"3\"/><Column id=\"ORDDTL_PANUNITCOST\" type=\"INT\" size=\"5\"/><Column id=\"ORDDTL_PANAMOUNT\" type=\"INT\" size=\"9\"/><Column id=\"ORDDTL_PANVAT\" type=\"INT\" size=\"8\"/><Column id=\"PRCS_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"ORDDTL_COMMENT\" type=\"STRING\" size=\"30\"/><Column id=\"ORDDTL_REMARK\" type=\"STRING\" size=\"60\"/><Column id=\"USE_PROCESSTYPE\" type=\"STRING\" size=\"2\"/><Column id=\"USE_PAGECNT\" type=\"STRING\" size=\"1\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"ORDDTL_BNDSEQ\" type=\"INT\" size=\"2\"/><Column id=\"LAST_FILM_CUST\" type=\"STRING\" size=\"6\"/><Column id=\"ORDDTL_CTP\" type=\"STRING\" size=\"1\"/><Column id=\"PLT_CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"PLT_CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"ORDMST_QTY\" type=\"INT\" size=\"6\"/><Column id=\"CD_PACK_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"CD_PRINT_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"CD_DVD_JACKET\" type=\"STRING\" size=\"1\"/><Column id=\"CD_COUNT\" type=\"INT\" size=\"256\"/><Column id=\"CD_COUNT_BOTH\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_use", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_SHEETPRNCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PAGECNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_DISABLED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_coating", this);
            obj._setContents("<ColumnInfo><Column id=\"COAT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COAT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COAT_DISABLED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_CDPack", this);
            obj._setContents("<ColumnInfo><Column id=\"PACK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PACK_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_CDPrint", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrdDtl_CD_PRINT", this);
            obj._setContents("<ColumnInfo><Column id=\"ORDMST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Grid("grdOrdDtl","10","224","98.74%",null,null,"10",null,null,null,null,this.DivDtl.form);
            obj.set_taborder("12");
            obj.set_binddataset("dsOrdDtl");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"116\"/><Column size=\"215\"/><Column size=\"127\"/><Column size=\"177\"/><Column size=\"85\"/><Column size=\"37\"/><Column size=\"83\"/><Column size=\"83\"/><Column size=\"83\"/><Column size=\"164\"/><Column size=\"101\"/><Column size=\"164\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"용도\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"용지\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"코팅\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"세부사항\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"4\" text=\"색도\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"5\" text=\"CTP\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"6\" text=\"정미\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"여분\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" text=\"톤수\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"9\" text=\"외주처\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"10\" text=\"진행일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"11\" text=\"필름입고처\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:USE_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"combotext\" combodataset=\"ds_mk_use\" combocodecol=\"USE_CODE\" combodatacol=\"USE_NAME\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:PPR_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"combotext\" combodataset=\"ds_mk_Paper\" combocodecol=\"PPR_CODE\" combodatacol=\"PPR_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:COAT_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"combotext\" combodataset=\"ds_mk_coating\" combocodecol=\"COAT_CODE\" combodatacol=\"COAT_NAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:ORDDTL_DETAIL\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" displaytype=\"normal\" maskeditformat=\"#,0.000\"/><Cell col=\"4\" text=\"bind:ORDDTL_TONE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" displaytype=\"normal\" maskeditformat=\"#,0.000\"/><Cell col=\"5\" text=\"bind:ORDDTL_CTP\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" displaytype=\"checkboxcontrol\" maskeditformat=\"#,0.000\"/><Cell col=\"6\" text=\"bind:ORDDTL_JMI\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,0.000\"/><Cell col=\"7\" text=\"bind:ORDDTL_MRGN\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" maskeditformat=\"#,0.000\" displaytype=\"mask\"/><Cell col=\"8\" text=\"bind:ORDDTL_TONQTY\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" maskeditformat=\"#,0.000\" displaytype=\"mask\"/><Cell col=\"9\" text=\"bind:CUST\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" combodataset=\"ds_mk_Cust\" combocodecol=\"CUST\" combodatacol=\"CUST_NAME\" displaytype=\"combotext\"/><Cell col=\"10\" text=\"bind:ORDDTL_RUNDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"mask\" maskeditformat=\"####-##-##\" maskedittype=\"string\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:LAST_FILM_CUST\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" combodataset=\"ds_mk_Cust\" combocodecol=\"CUST\" combodatacol=\"CUST_NAME\" displaytype=\"combotext\"/></Band></Format></Formats>");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stDtlNm","12","-5","185","46",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("21");
            obj.set_text("▣작업발주 세부사항▣");
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

            obj = new Combo("cbPprCd","edPprCd:3","34","31.28%","35",null,null,null,null,null,null,this.DivDtl.form);
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
            obj.set_taborder("44");
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
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("Static00_00","edTone1:7","68","12","38",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("19");
            obj.set_text("/");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edTone2","Static00_00:2","72","58","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("20");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stJmi","9","110","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("45");
            obj.set_text("정미");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new MaskEdit("medtJmi","stJmi:3","110","8.93%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("46");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_autoselect("true");
            obj.set_enable("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stMrgn","medtJmi:3","110","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("47");
            obj.set_text("여분");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new MaskEdit("medtMrgn","stMrgn:3","110","8.93%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("48");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_autoselect("true");
            obj.set_enable("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stCTP","medtMrgn:3","110","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("22");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_wordWrap("char");
            obj.set_text("CTP");
            this.DivDtl.addChild(obj.name, obj);

            obj = new CheckBox("cbCtp","stCTP:15","110","53","36",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("23");
            obj.set_text("CTP");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_value("0");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Button("btnCust_Search","cbCtp:15","110","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("51");
            obj.set_text("외주처");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edCustCd","btnCust_Search:3","110","5.85%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("24");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Combo("cbCustNm","edCustCd:3","110","23.3%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("25");
            obj.set_innerdataset("ds_mk_Cust");
            obj.set_codecolumn("CUST");
            obj.set_datacolumn("CUST_NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stCdCnt","9","148","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("26");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_wordWrap("char");
            obj.set_text("CD/DVD\r\n알판 ");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edCdCnt","stCdCnt:3","148","63","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("27");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("StaJang","edCdCnt:3","148","21","38",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("28");
            obj.set_text("장");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new CheckBox("cbCdCntBoth","StaJang:5","148","51","36",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("29");
            obj.set_text("양면");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            obj.set_enable("false");
            obj.set_value("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stPackCd","cbCdCntBoth:10","148","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("30");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_wordWrap("char");
            obj.set_text("CD/DVD\r\n 포장형식 ");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Combo("cbPackCd","stPackCd:3","148","15.24%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("31");
            obj.set_innerdataset("ds_mk_CDPack");
            obj.set_codecolumn("PACK_CODE");
            obj.set_datacolumn("PACK_NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_enable("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new CheckBox("ckDvdJacket","cbPackCd:10","148","94","36",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("32");
            obj.set_text("DVD자켓");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            obj.set_enable("false");
            obj.set_value("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stCdPrt","ckDvdJacket:10","148","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("33");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_wordWrap("none");
            obj.set_text("CD/DVD\r\n인쇄형식");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edCdPrint","stCdPrt:3","148","16.03%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("34");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_enable("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Button("btnCdPrint","edCdPrint:0","148","35","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("35");
            obj.set_text("▼");
            obj.set_enable("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stUnitCost","btnCdPrint:3","149","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("36");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_wordWrap("char");
            obj.set_text("후가공단가");
            this.DivDtl.addChild(obj.name, obj);

            obj = new MaskEdit("medCost","stUnitCost:3","149","15.88%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("37");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stRunDate","9","187","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("38");
            obj.set_text("진행일자");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Calendar("calRunDate","stRunDate:3","187","172","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("39");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stComment","calRunDate:3","187","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("40");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_wordWrap("char");
            obj.set_text("특이사항");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edCommt","stComment:3","187","30.81%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("41");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stRemark","edCommt:3","187","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("42");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_wordWrap("char");
            obj.set_text("비고");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edRemark","stRemark:3","187","33.18%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("43");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose",null,null,"31","30","1.11%","91.43%",null,null,null,null,this.DivDtl.form);
            obj.set_taborder("49");
            obj.set_image("url(\'Img::icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            obj.set_text("");
            obj.set_background("#e8e7e3");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Div("DivMultiCdPrt","stCdPrt:3","183","18.5%","225",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("50");
            obj.set_background("#e8e7e3");
            obj.set_visible("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Grid("Grid00","5","7","95.3%","170",null,null,null,null,null,null,this.DivDtl.form.DivMultiCdPrt.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_mk_CDPrint");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:CHK\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"checkboxcontrol\" textAlign=\"center\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:PRINT_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\"/></Band></Format></Formats>");
            this.DivDtl.form.DivMultiCdPrt.addChild(obj.name, obj);

            obj = new Button("btnSel","395","518","99","34",null,null,null,null,null,null,this.DivDtl.form.DivMultiCdPrt.form);
            obj.set_taborder("1");
            obj.set_text("선택적용");
            obj.set_font("bold 12px/normal \"함초롬돋움\"");
            obj.set_visible("false");
            this.DivDtl.form.DivMultiCdPrt.addChild(obj.name, obj);

            obj = new Button("btnSel00","375","458","99","34",null,null,null,null,null,null,this.DivDtl.form.DivMultiCdPrt.form);
            obj.set_taborder("2");
            obj.set_text("선택적용");
            obj.set_font("bold 12px/normal \"함초롬돋움\"");
            obj.set_visible("false");
            this.DivDtl.form.DivMultiCdPrt.addChild(obj.name, obj);

            obj = new Button("btnSel2","15%","Grid00:9","78","32",null,null,null,null,null,null,this.DivDtl.form.DivMultiCdPrt.form);
            obj.set_taborder("3");
            obj.set_text("선택적용");
            obj.set_font("bold 12px/normal \"함초롬돋움\"");
            this.DivDtl.form.DivMultiCdPrt.addChild(obj.name, obj);

            obj = new Button("btnCcl2","54.7%","Grid00:9","78","32",null,null,null,null,null,null,this.DivDtl.form.DivMultiCdPrt.form);
            obj.set_taborder("4");
            obj.set_text("선택해제");
            obj.set_font("bold 12px/normal \"함초롬돋움\"");
            this.DivDtl.form.DivMultiCdPrt.addChild(obj.name, obj);
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

            obj = new BindItem("item11","DivDtl.form.cbCtp","value","dsOrdDtl","ORDDTL_CTP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","DivDtl.form.edCustCd","value","dsOrdDtl","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","DivDtl.form.cbCustNm","value","dsOrdDtl","CUST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","DivDtl.form.edCdCnt","value","dsOrdDtl","CD_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","DivDtl.form.cbCdCntBoth","value","dsOrdDtl","CD_COUNT_BOTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","DivDtl.form.cbPackCd","value","dsOrdDtl","CD_PACK_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","DivDtl.form.ckDvdJacket","value","dsOrdDtl","CD_DVD_JACKET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","DivDtl.form.medCost","value","dsOrdDtl","ORDDTL_UNITCOST");
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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK131_DTL.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK131_DTL.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("MK131_DTL.xfdl","Lib::Lib_mk.xjs");
        this.registerScript("MK131_DTL.xfdl", function() {
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
        	this.gfn_TransactionP("select", "JSP/mk/getData_cdPack.jsp", "ds_mk_CDPack=ds_mk_CDPack", "ds_mk_CDPack=ds_mk_CDPack", "", "", false, "S", false, this); 		//CD PACK 코드
        	this.gfn_TransactionP("select", "JSP/mk/getData_cdPrint.jsp", "ds_mk_CDPrint=ds_mk_CDPrint", "ds_mk_CDPrint=ds_mk_CDPrint", "", "", false, "S", false, this); 	//CD PRINT 코드
        	this.gfn_TransactionP("select", "JSP/mk/getData_paper.jsp", "ds_mk_Paper=ds_mk_Paper", "ds_mk_Paper=ds_mk_Paper", "", "", false, "S", false, this); 			//용지코드
        	this.gfn_TransactionP("select", "JSP/mk/Cust_Select.jsp", "ds_mk_Cust=ds_mk_Cust", "ds_mk_Cust=ds_mk_Cust", "", "", false, "S", false, this);   				 //업체코드

        };

        // 용지발주 상세내역 가져오기
        this.getData_Dtl = function(nOrdMst_Id, vPerDML)
        {
        	if(vPerDML != 1)
        		this.parent.parent.fctn_User_Enabled(this, false);

        	str_url = "JSP/mk/mk131f_order_dtl.jsp";
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

        		 this.set_CD_Visible_Status(this.dsOrdDtl.getColumn(this.dsOrdDtl.rowposition, "USE_CODE"));
        		 this.DivDtl.form.grdOrdDtl.setFocus();
        	}
        };

        //도서세부사항 CD/DVD VISIBLE 처리
        this.set_CD_Visible_Status = function(strCode)
        {
        	//용도가 CD, DVD 일 경우
        	if(strCode == "16" || strCode == "64")
        	{
        		this.DivDtl.form.edCdCnt.set_visible(true);
        		this.DivDtl.form.StaJang.set_visible(true);
        		this.DivDtl.form.cbCdCntBoth.set_visible(true);
        		this.DivDtl.form.cbPackCd.set_visible(true);
        		this.DivDtl.form.ckDvdJacket.set_visible(true);
        		this.DivDtl.form.edCdPrint.set_visible(true);
        		this.DivDtl.form.btnCdPrint.set_visible(true);
        		this.getData_CD_Print();
        	}else{
        		this.DivDtl.form.edCdCnt.set_visible(false);
        		this.DivDtl.form.StaJang.set_visible(false);
        		this.DivDtl.form.cbCdCntBoth.set_visible(false);
        		this.DivDtl.form.cbPackCd.set_visible(false);
        		this.DivDtl.form.ckDvdJacket.set_visible(false);
        		this.DivDtl.form.edCdPrint.set_visible(false);
        		this.DivDtl.form.btnCdPrint.set_visible(false);
        	}
        };

        this.getData_CD_Print = function()
        {
        	this.DivDtl.form.edCdPrint.set_value("");

        	if(Eco.isUndefined(this.dsOrdDtl.getColumn(this.dsOrdDtl.rowposition,"ORDMST_ID")) == false &&
        	   this.dsOrdDtl.getColumn(this.dsOrdDtl.rowposition,"ORDMST_ID") != "")
        	{
        		var str_url, in_ds, out_ds, str_arg;

        		str_url = "JSP/mk/mk131f_Orddtl_CD_PRINT.jsp";
        		in_ds = "dsOrdDtl_CD_PRINT=dsOrdDtl_CD_PRINT";
        		out_ds = "dsOrdDtl_CD_PRINT=dsOrdDtl_CD_PRINT";
        		str_arg  = "ORDMST_ID="+ nexacro.wrapQuote(this.dsOrdDtl.getColumn(this.dsOrdDtl.rowposition,"ORDMST_ID"));
        		str_arg += " ORDDTL_SEQ="+ nexacro.wrapQuote(this.dsOrdDtl.getColumn(this.dsOrdDtl.rowposition,"ORDDTL_SEQ"));

        		this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_getData_CD_Print", false, "S", false, this);
        	}
        }

        this.Callback_getData_CD_Print = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}else{

        		//작업구분 초기화
        		for (var j = 0; j < this.ds_mk_CDPrint.rowcount ; j++)
        		{
        			this.ds_mk_CDPrint.setColumn(j, "CHK", "0");
        		}

        		if(this.dsOrdDtl_CD_PRINT.rowcount > 0){

        			var str_txt = "";

        			for (var i = 0; i < this.dsOrdDtl_CD_PRINT.rowcount; i++)
        			{
        				for (var j = 0; j < this.ds_mk_CDPrint.rowcount; j++)
        				{
        					if (this.dsOrdDtl_CD_PRINT.getColumn(i, "PRINT_CODE") == this.ds_mk_CDPrint.getColumn(j, "PRINT_CODE"))
        					{
        						this.ds_mk_CDPrint.setColumn(j, "CHK", "1");

        						if(str_txt == ""){
        							str_txt = this.ds_mk_CDPrint.getColumn(j, "PRINT_NAME");
        						}else{
        							str_txt = str_txt+", "+this.ds_mk_CDPrint.getColumn(j, "PRINT_NAME");
        						}
        					}
        				}
        			}

        			this.DivDtl.form.edCdPrint.set_value(str_txt);
        		}
        	}
        };


        //#######################################################
        // 세부사양 저장
        //#######################################################
        this.fctn_Dtl_save = function(vStr)
        {
        	in_ds 	= "input=dsOrdDtl:u";
        	str_url = "JSP/mk/mk131f_order_dtl_dml.jsp";

        	for(nRow=0 ; nRow < this.dsOrdDtl.getRowCount(); nRow++)
        	{
        		if(this.parent.parent.dsOrdMst.getRowType(this.parent.parent.dsOrdMst.rowposition) == "4")
        			this.dsOrdDtl.setColumn(nRow, "EMPLOYEE_ID", gv_sabun);
        		else if (this.parent.parent.dsOrdMst.getRowType(this.parent.parent.dsOrdMst.rowposition) == "2")
        			this.dsOrdDtl.setColumn(nRow, "ORDMST_ID", this.parent.parent.dsOrdMst.getColumn(this.parent.parent.dsOrdMst.rowposition, "ORDMST_ID"));

        		// 진행일자가 널일경우 인덱스를 타기 위해 빈 공백을 넣어줌
        		if (this.dsOrdDtl.getColumn(nRow, "ORDDTL_RUNDATE") == "" || Eco.isUndefined(this.dsOrdDtl.getColumn(nRow, "ORDDTL_RUNDATE")) == true)
        			this.dsOrdDtl.setColumn(nRow, "ORDDTL_RUNDATE", " ");

        		if (this.dsOrdDtl.getColumn(nRow, "USE_PROCESSTYPE") == "P")
        			this.fctn_Dtl_PSeq_Save(nRow);
        	}

        	this.gfn_TransactionP("insert", str_url, in_ds, "", "", "", false, vStr, false, this);
        	this.DivDtl.form.grdOrdDtl.setFocus();
        }

        this.dsOrdDtl_onrowposchanged = function(obj,e)
        {
        	this.DivDtl.form.edPprCd.set_enable(false);
        	this.DivDtl.form.cbPprCd.set_enable(false);

        	// DataSet이 바뀐 후
        	if (this.dsOrdDtl.getColumn(e.newrow, "CUST") == '000000')
            {
        		this.DivDtl.form.edCustCd.set_value("5700");
        	}

        	//CD/DVD 셋팅
        	this.set_CD_Visible_Status(this.dsOrdDtl.getColumn(this.dsOrdDtl.rowposition, "USE_CODE"));

        	//후가공금액 셋팅
        	this.med_dan_visible(this.dsOrdDtl.rowposition);
        };

        this.med_dan_visible = function(nRow)
        {
        	if(
        		this.dsOrdDtl.getColumn(nRow, "USE_PROCESSTYPE") == "A" &&
        		this.dsOrdDtl.getColumn(nRow, "USE_CODE") != "16" &&
        		this.dsOrdDtl.getColumn(nRow, "USE_CODE") != "64"
        	   )
        	{
        		this.DivDtl.form.medCost.set_visible(true);
        	}
        	else
        	{
        		this.DivDtl.form.medCost.set_visible(false);
        	}
        }

        //후가공 단가 변경이벤트
        this.DivDtl_medCost_onchanged = function(obj,e)
        {
        	var vAmt = nexacro.toNumber(this.parent.parent.dsOrdMst.getColumn(this.parent.parent.dsOrdMst.rowposition, "ORDMST_QTY")) * nexacro.toNumber(e.postvalue);
        	vAmt = nexacro.floor(vAmt , 0);

        	this.dsOrdDtl.setColumn(this.dsOrdDtl.rowposition, "ORDDTL_AMOUNT", vAmt);
        };

        this.DivDtl_btnCdPrint_onclick = function(obj,e)
        {
        	strVisibleD = this.DivDtl.form.DivMultiCdPrt.visible;

        	if(strVisibleD == false){
        		this.DivDtl.form.DivMultiCdPrt.set_visible(true);
        	}
        	else{
        		this.DivDtl.form.DivMultiCdPrt.set_visible(false);
        	}
        };

        this.DivDtl_DivMultiCdPrt_btnSel2_onclick = function(obj,e)
        {
        	var StrTxt = "";

        	this.dsOrdDtl_CD_PRINT.clearData();

        	for(var irow = 0; irow <= this.ds_mk_CDPrint.rowcount; irow++){

        		if (this.ds_mk_CDPrint.getColumn(irow, "CHK") == "1"){
        			this.dsOrdDtl_CD_PRINT.addRow();
        			this.dsOrdDtl_CD_PRINT.setColumn(this.dsOrdDtl_CD_PRINT.rowposition, "PRINT_CODE", this.ds_mk_CDPrint.getColumn(irow, "PRINT_CODE"));
        			this.dsOrdDtl_CD_PRINT.setColumn(this.dsOrdDtl_CD_PRINT.rowposition, "PRINT_NAME", this.ds_mk_CDPrint.getColumn(irow, "PRINT_NAME"));
        			this.dsOrdDtl_CD_PRINT.setColumn(this.dsOrdDtl_CD_PRINT.rowposition, "EMPLOYEE_ID", gv_sabun);

        			if(StrTxt == ""){
        				StrTxt = this.ds_mk_CDPrint.getColumn(irow, "PRINT_NAME");
        			}else{
        				StrTxt = StrTxt+", "+this.ds_mk_CDPrint.getColumn(irow, "PRINT_NAME");
        			}
        		}
        	}

        	this.DivDtl.form.edCdPrint.set_value(StrTxt);
        	this.fctn_CD_PRINT_save();
        	this.DivDtl_btnCdPrint_onclick("false");
        };

        this.DivDtl_DivMultiCdPrt_btnCcl2_onclick = function(obj,e)
        {
        	for(var irow = 0; irow <= this.ds_mk_CDPrint.rowcount; irow++){
        		this.ds_mk_CDPrint.setColumn(irow, "CHK", "0");
        	}

        	this.dsOrdDtl_CD_PRINT.clearData();
        	this.DivDtl_btnCdPrint_onclick("false");
        	this.DivDtl.form.edCdPrint.set_value("");
        };


        //#######################################################
        // CD/DVD 인쇄형식내역저장
        //#######################################################
        this.fctn_CD_PRINT_save = function()
        {
        	var in_ds 	= "dsOrdDtl_CD_PRINT=dsOrdDtl_CD_PRINT:U";
        	var str_url = "JSP/mk/mk131f_Orddtl_CD_PRINT_dml.jsp";

        	for (var i = 0; i <= this.dsOrdDtl_CD_PRINT.rowcount-1 ; i++)
        	 {
        		this.dsOrdDtl_CD_PRINT.setColumn(i, "ORDMST_ID", this.dsOrdDtl.getColumn(this.dsOrdDtl.rowposition, "ORDMST_ID"));
        		this.dsOrdDtl_CD_PRINT.setColumn(i, "ORDDTL_SEQ", this.dsOrdDtl.getColumn(this.dsOrdDtl.rowposition, "ORDDTL_SEQ"));
        	 }

        	this.gfn_TransactionP("insert", str_url, in_ds, "", "", "", false, "P", false, this);
        }

        this.DivDtl_grdOrdDtl_onkeydown = function(obj,e)
        {
        	//DML권한 없을 경우
        	if(vPerDML != 1)
        	{
        		if(e.keycode == 27)   //ESC -> 세부내역 DIV 닫기
        			this.DivDtl_ImgClose_onclick();
        	}else
        	{
        		if(e.ctrlkey == true)
        		{
        			if(e.keycode == 13)				//Ctrl+Enter눌렀을 경우 용지 수정할 수 있도록 enable 시킴
        			{
        				if(this.dsOrdDtl.getColumn(this.dsOrdDtl.rowposition, "USE_PROCESSTYPE") == "P")
        				{
        					this.DivDtl.form.edPprCd.set_enable(true);
        					this.DivDtl.form.cbPprCd.set_enable(true);
        					this.DivDtl.form.edPprCd.setFocus();
        					this.DivDtl.form.cbPprCd.setSelect(0, -1);
        				}else if(this.dsOrdDtl.getColumn(this.dsOrdDtl.rowposition, "USE_PROCESSTYPE") == "C")
        				{
        					this.DivDtl.form.edCoat.set_enable(true);
        					this.DivDtl.form.cbCoat.set_enable(true);
        					this.DivDtl.form.edCoat.setFocus();
        					this.DivDtl.form.cbCoat.setSelect(0, -1);
        				}else if(this.dsOrdDtl.getColumn(this.dsOrdDtl.rowposition, "USE_CODE") == "68")
        				{
        					this.DivDtl.form.edPprCd.set_enable(true);
        					this.DivDtl.form.cbPprCd.set_enable(true);
        					this.DivDtl.form.edPprCd.setFocus();
        					this.DivDtl.form.cbPprCd.setSelect(0, -1);
        				}else if(this.dsOrdDtl.getColumn(this.dsOrdDtl.rowposition, "USE_CODE") == "16" || this.dsOrdDtl.getColumn(this.dsOrdDtl.rowposition, "USE_CODE") == "64")   //CD/DVD
        				{
        					this.DivDtl.form.cbPackCd.set_enable(true);
        					this.DivDtl.form.ckDvdJacket.set_enable(true);
        					this.DivDtl.form.edCdPrint.set_enable(true);
        					this.DivDtl.form.btnCdPrint.set_enable(true);
        					this.getData_CD_Print();
        				}
        			}else if(e.keycode == 90)     //Ctrl + Z 되돌리기
        				this.dsOrdDtl.reset();
        		}else if(e.keycode == 13)		//Enter키 입력
        		{
        			if(this.dsOrdDtl.getColumn(this.dsOrdDtl.rowposition, "USE_PROCESSTYPE") == "P")
        			{
        				this.DivDtl.form.medtJmi.setFocus();
        				this.DivDtl.form.medtJmi.setSelect(0, -1);
        			}else
        			{
        				this.DivDtl.form.edCustCd.setFocus();
        				this.DivDtl.form.edCustCd.setSelect(0, -1);
        			}
        		}else if(e.keycode == 46)		//DELETE 버튼
        		{
        			if(Confirm("삭제하시겠습니까?"))
        				this.fctn_Dtl_Delete();
        		}else if(e.keycode == 27)		// ESC버튼 -> 세부내역DIV 닫기
        				this.DivDtl_ImgClose_onclick();

        	}
        };

        //#######################################################
        // 세부사양 삭제
        //#######################################################
        this.fctn_Dtl_Delete = function()
        {
        	this.dsOrdDtl.deleteRow(this.dsOrdDtl.rowposition);
        	this.fctn_Dtl_save(vPerDML);
        	this.DivDtl.form.grdOrdDtl.setFocus();
        }



        this.DivDtl_edPprCd_onkeydown = function(obj,e)
        {
        	if((this.DivDtl.form.edPprCd.maxlength == this.DivDtl.form.edPprCd.text.length) && e.keycode == 13){
        		var i = this.ds_mk_Paper.findRow("PPR_CODE", this.DivDtl.form.edPprCd.text);

        		if( i == -1)
        		{
        			alert("용지를 찾을 수 없습니다.");
        			this.DivDtl.form.edPprCd.text = "";
        		}else{

        			this.DivDtl.form.cbPprCd.set_index(i);
        			//톤수 재계산
        			this.fctn_TonQty();
        			this.DivDtl.form.grdOrdDtl.setFocus();

        			//세부사양 자식코드 동시 수정
        			this.fctn_Dtl_PSeq_Save(this.dsOrdDtl.rowposition);
        		}
        	}else if(e.keycode == 27)
        		this.DivDtl.form.grdOrdDtl.setFocus();
        };

        //#######################################################
        // 톤수 재계산
        //#######################################################
        this.fctn_TonQty = function()
        {
        	var nTonQty;
        	var nPpr_Row = this.ds_mk_Paper.findRow("PPR_CODE", this.DivDtl.form.edPprCd.text);

        	if(this.ds_mk_Paper.getColumn(nPpr_Row, "PPR_UNIT") == "T")
        	{

        		nTonQty = nexacro.toNumber(this.DivDtl.form.medtJmi.value) + nexacro.toNumber(this.DivDtl.form.medtMrgn.value)
        					  / this.ds_mk_Paper.getColumn(nPpr_Row, "PPR_CONVERSION");

        		nTonQty =  nexacro.floor(nTonQty, 3);

        		this.dsOrdDtl.setColumn(this.dsOrdDtl.rowposition, "ORDDTL_TONQTY", nTonQty);
        	}
        	else
        		this.dsOrdDtl.setColumn(this.dsOrdDtl.rowposition, "ORDDTL_TONQTY", 0);
        }


        //#######################################################
        // 세부사양 동시 수정
        //#######################################################
        this.fctn_Dtl_PSeq_Save = function(nRow)
        {
        	var sSeq    = this.dsOrdDtl.getColumn(nRow, "ORDDTL_SEQ");
        	var sPPR_CODE
        	  , nORDDTL_PAGE
        	  , nORDDTL_BUL
        	  , nORDDTL_GANGED
        	  , nORDDTL_TONE1
        	  , nORDDTL_TONE2
        	  , nORDDTL_JMI
        	  , nORDDTL_MRGN
        	  , sORDDTL_REMARK;

        	if ((this.dsOrdDtl.getColumn(nRow, "ORDDTL_SEQ") ==
        	     this.dsOrdDtl.getColumn(nRow, "ORDDTL_PSEQ")) &&
        	     this.dsOrdDtl.getColumn(nRow, "USE_PROCESSTYPE") == "P")
        	{
        		/* 부모 코드에 의한 변경값 설정 (인쇄용도)*/
        		sPPR_CODE      = this.dsOrdDtl.getColumn(nRow, "PPR_CODE");
        		nORDDTL_PAGE   = this.dsOrdDtl.getColumn(nRow, "ORDDTL_PAGE");
        		nORDDTL_JMI    = this.dsOrdDtl.getColumn(nRow, "ORDDTL_JMI");
        		nORDDTL_MRGN   = this.dsOrdDtl.getColumn(nRow, "ORDDTL_MRGN");
        		nORDDTL_BUL    = this.dsOrdDtl.getColumn(nRow, "ORDDTL_BUL");
        		nORDDTL_GANGED = this.dsOrdDtl.getColumn(nRow, "ORDDTL_GANGED");
        		nORDDTL_TONE1  = this.dsOrdDtl.getColumn(nRow, "ORDDTL_TONE1");
        		nORDDTL_TONE2  = this.dsOrdDtl.getColumn(nRow, "ORDDTL_TONE2");
        		sORDDTL_REMARK = this.dsOrdDtl.getColumn(nRow, "ORDDTL_REMARK");

        		for (nRow=0 ; nRow<=this.dsOrdDtl.getRowCount()-1 ; nRow++)
        		{
        			if (this.dsOrdDtl.getColumn(nRow, "ORDDTL_PSEQ") == sSeq )
        			{
        				if ((this.dsOrdDtl.getColumn(nRow, "USE_PROCESSTYPE") == "P") ||
        				    (this.dsOrdDtl.getColumn(nRow, "USE_PROCESSTYPE") == "C") ||
        				    (this.dsOrdDtl.getColumn(nRow, "USE_CODE") == "68"))
        				{
        					this.dsOrdDtl.setColumn(nRow, "PPR_CODE"		, sPPR_CODE);
        					this.dsOrdDtl.setColumn(nRow, "ORDDTL_PAGE"		, nORDDTL_PAGE);
        					this.dsOrdDtl.setColumn(nRow, "ORDDTL_JMI"		, nORDDTL_JMI);
        					this.dsOrdDtl.setColumn(nRow, "ORDDTL_MRGN"		, nORDDTL_MRGN);
        					this.dsOrdDtl.setColumn(nRow, "ORDDTL_BUL"		, nORDDTL_BUL);
        					this.dsOrdDtl.setColumn(nRow, "ORDDTL_GANGED"	, nORDDTL_GANGED);
        					this.dsOrdDtl.setColumn(nRow, "ORDDTL_TONE1"	, nORDDTL_TONE1);
        					this.dsOrdDtl.setColumn(nRow, "ORDDTL_TONE2"	, nORDDTL_TONE2);

        					if(nexacro.trim(this.dsOrdDtl.getColumn(nRow, "ORDDTL_REMARK")) == "" || Eco.isUndefined(this.dsOrdDtl.getColumn(nRow, "ORDDTL_REMARK")) == true)
        						this.dsOrdDtl.setColumn(nRow, "ORDDTL_REMARK", sORDDTL_REMARK);
        				}
        			}
        		}
        	}
        }

        this.DivDtl_edCustCd_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		var vCustCd;

        		if(this.DivDtl.form.edCustCd.text.length == 1){
        			vCustCd = this.lfn_CustName(sCust_Gubn, this.DivDtl.form.edCustCd.text);
        			this.DivDtl.form.edCustCd.text = vCustCd;
        		}else
        			vCustCd = this.DivDtl.form.edCustCd.text;

        		this.dsOrdDtl.setColumn(this.dsOrdDtl.rowposition, "CUST", sCust_Gubn+vCustCd);
        		this.dsOrdDtl.setColumn(this.dsOrdDtl.rowposition, "CUST_GUBN", sCust_Gubn);
        		this.dsOrdDtl.setColumn(this.dsOrdDtl.rowposition, "CUST_CODE", vCustCd);

        		this.DivDtl.form.calRunDate.setFocus();
        	}else if(e.keycode == 27)
        		this.DivDtl.form.grdOrdDtl.setFocus();
        };

        //#######################################################
        // 정미 수정
        //#######################################################
        this.DivDtl_medtJmi_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.fctn_TonQty();
        		this.DivDtl.form.medtMrgn.setFocus();
        	}else if(e.keycode == 27)
        		this.DivDtl.form.grdOrdDtl.setFocus();
        };

        //#######################################################
        // 여분 수정
        //#######################################################
        this.DivDtl_medtMrgn_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.fctn_TonQty();
        		this.DivDtl.form.edCustCd.setFocus();
        	}else if(e.keycode == 27)
        		this.DivDtl.form.grdOrdDtl.setFocus();
        };

        //CD/DVD 포장형식 선택시 변경이벤트
        this.DivDtl_cbPackCd_onitemchanged = function(obj,e)
        {
        	if(e.postvalue >= 15)
        	{
        		if(e.postvalue == 33 || e.postvalue == 34 || e.postvalue == 35)
        		{
        			this.DivDtl.form.ckDvdJacket.set_value(false);
        		}else
        			this.DivDtl.form.ckDvdJacket.set_value(true);

        	}else{
        		this.DivDtl.form.ckDvdJacket.set_value(false);
        	}
        };

        //진행일자 변경이벤트
        this.DivDtl_calRunDate_onchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue)
        	{
        		if(this.sDateValid_Check(e.postvalue) == false)
        		{
        			this.dsOrdDtl.setColumn(this.dsOrdDtl.rowposition, "ORDDTL_RUNDATE", e.prevalue);
        		}else
        		{
        			if(e.postvalue.length == 8)
        			{
        				if(e.postvalue < this.parent.parent.dsOrdMst.getColumn(this.parent.parent.dsOrdMst.rowposition, "ORDMST_DATE")){
        					alert("날짜지정이 발주일자보다 작습니다. 다시 확인해 주십시요.");
        					this.dsOrdDtl.setColumn(this.dsOrdDtl.rowposition, "ORDDTL_RUNDATE", e.prevalue);
        				}
        			}
        		}
        	}
        };

        //#######################################################
        //	날짜 유효성 체크(마감여부/수정여부 체크)
        //#######################################################
        this.sDateValid_Check = function(strText)
        {
        	if(strText.length == 8)
        	{
        		this.parent.parent.dsMakeClose.filter("MKCLS_STARTDATE<='" + strText + "'&&MKCLS_ENDDATE>='" + strText + "'");

        		if ((this.parent.parent.dsMakeClose.getColumn(0, "MKCLS_CLOSE") == "1") &&
        			(this.parent.parent.dsMakeClose.getColumn(0, "MKCLS_MODIFY") == "0"))
        		{
        			alert("입력일자는 마감되어 수정할 수 없습니다.");
        			return false;
        		}
        	}
        	return true;
        }

        //비고 변경이벤트
        this.DivDtl_edRemark_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		if(this.dsOrdDtl.rowposition != this.dsOrdDtl.getRowCount()-1)
        		{
        			this.dsOrdDtl.setColumn(this.dsOrdDtl.rowposition, "ORDDTL_REMARK", this.DivDtl.form.edRemark.text);

        			// 세부사양 자식 코드 동시 수정
        			this.fctn_Dtl_PSeq_Save(this.dsOrdDtl.rowposition);

        			//다음 row로 이동
        			this.dsOrdDtl.set_rowposition(this.dsOrdDtl.rowposition+1);

        			if(this.dsOrdDtl.getColumn(this.dsOrdDtl.rowposition, "USE_PROCESSTYPE") == "P")
        			{
        				this.DivDtl.form.medtJmi.setFocus();
        				this.DivDtl.form.medtJmi.setSelect(0, -1);
        			}else{
        				this.DivDtl.form.edCustCd.setFocus();
        				this.DivDtl.form.edCustCd.setSelect(0, -1);
        			}

        			var vCustCd;

        			if(this.DivDtl.form.edCustCd.text.length == 1)
        				vCustCd = this.lfn_CustName(sCust_Gubn, this.DivDtl.form.edCustCd.text);
        			else
        				vCustCd = this.DivDtl.form.edCustCd.text;

        			this.dsOrdDtl.setColumn(this.dsOrdDtl.rowposition, "CUST", sCust_Gubn+vCustCd);
        			this.dsOrdDtl.setColumn(this.dsOrdDtl.rowposition, "CUST_GUBN", sCust_Gubn);
        			this.dsOrdDtl.setColumn(this.dsOrdDtl.rowposition, "CUST_CODE", vCustCd);

        			this.fctn_Dtl_save(vPerDML);
        		}else{

        			this.fctn_Dtl_save(vPerDML);

        			if(Confirm("발주서를 출력하시겠습니까?"))
        			{
        				bSetSave = true;
        				this.parent.parent.btnPrt_onclick();
        			}

        			this.DivDtl.form.grdOrdDtl.setFocus();
        		}
        	}else if(e.keycode == 27)
        		this.DivDtl.form.grdOrdDtl.setFocus();
        };

        //거래처 찾기 POPUP
        this.DivDtl_btnCust_Search_onclick = function(obj,e)
        {
        	var objParam = {dsParam1:this.ds_mk_Cust
        				   ,dsParam2:this.DivDtl.form.edCustCd.text
        				   ,dsParam3:this.DivDtl.form.cbCustNm.text
        				   ,dsParam4:sCust_Gubn
        				   ,dsParam5:"MK131_DTL"}; //popup 화면으로 전달할 값

        	this.lfn_showModal("popup",objParam, "mk::MKCust_SearchF.xfdl", "popupCust", this, 10, 58, 450, 400);
        };


        //#######################################################
        // 세부사양 DIV 닫기
        //#######################################################
        this.DivDtl_ImgClose_onclick = function(obj,e)
        {
        	this.DivDtl.form.edPprCd.set_enable(false);
        	this.DivDtl.form.cbPprCd.set_enable(false);
        	this.parent.parent.DivDtl.set_visible("false");

        	if(this.parent.parent.dsOrdMst.rowposition < this.parent.parent.dsOrdMst.getRowCount()-1)
        		this.parent.parent.dsOrdMst.set_rowposition(this.parent.parent.dsOrdMst.rowposition+1);

        	this.parent.parent.grdOrdMst.setFocus();

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
            this.DivDtl.form.grdOrdDtl.addEventHandler("onkeydown",this.DivDtl_grdOrdDtl_onkeydown,this);
            this.DivDtl.form.edPprCd.addEventHandler("onkeydown",this.DivDtl_edPprCd_onkeydown,this);
            this.DivDtl.form.cbPprCd.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.DivDtl.form.cbPprCd.addEventHandler("onitemchanged",this.DivDtl_cbPprCd_onitemchanged,this);
            this.DivDtl.form.medtJmi.addEventHandler("onkeydown",this.DivDtl_medtJmi_onkeydown,this);
            this.DivDtl.form.medtMrgn.addEventHandler("onkeydown",this.DivDtl_medtMrgn_onkeydown,this);
            this.DivDtl.form.btnCust_Search.addEventHandler("onclick",this.DivDtl_btnCust_Search_onclick,this);
            this.DivDtl.form.edCustCd.addEventHandler("onkeydown",this.DivDtl_edCustCd_onkeydown,this);
            this.DivDtl.form.cbPackCd.addEventHandler("onitemchanged",this.DivDtl_cbPackCd_onitemchanged,this);
            this.DivDtl.form.btnCdPrint.addEventHandler("onclick",this.DivDtl_btnCdPrint_onclick,this);
            this.DivDtl.form.medCost.addEventHandler("onchanged",this.DivDtl_medCost_onchanged,this);
            this.DivDtl.form.calRunDate.addEventHandler("onchanged",this.DivDtl_calRunDate_onchanged,this);
            this.DivDtl.form.edRemark.addEventHandler("onkeydown",this.DivDtl_edRemark_onkeydown,this);
            this.DivDtl.form.ImgClose.addEventHandler("onclick",this.DivDtl_ImgClose_onclick,this);
            this.DivDtl.form.DivMultiCdPrt.form.btnSel2.addEventHandler("onclick",this.DivDtl_DivMultiCdPrt_btnSel2_onclick,this);
            this.DivDtl.form.DivMultiCdPrt.form.btnCcl2.addEventHandler("onclick",this.DivDtl_DivMultiCdPrt_btnCcl2_onclick,this);
            this.dsOrdDtl.addEventHandler("onrowposchanged",this.dsOrdDtl_onrowposchanged,this);
        };
        this.loadIncludeScript("MK131_DTL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
