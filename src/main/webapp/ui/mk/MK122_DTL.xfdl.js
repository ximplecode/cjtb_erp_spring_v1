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
            this.set_titletext("용지입고 세부사양");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1265,420);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPprInDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"PPRINMST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINMST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINDTL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CUST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CUST\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST\" type=\"STRING\" size=\"256\"/><Column id=\"PPRORDMST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PPRORDMST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PPRORDDTL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PPRORDNO\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINDTL_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINDTL_MODIDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINDTL_PPRSTND\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINDTL_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINDTL_WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINDTL_UNITCOST\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINDTL_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINDTL_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINDTL_INVOICE\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINDTL_PREEMPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPprStnd", this);
            obj._setContents("<ColumnInfo><Column id=\"PPR_STND\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_STNDNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PPR_STND\">0</Col><Col id=\"PPR_STNDNAME\"/></Row><Row><Col id=\"PPR_STND\">1</Col><Col id=\"PPR_STNDNAME\">횡</Col></Row><Row><Col id=\"PPR_STND\">2</Col><Col id=\"PPR_STNDNAME\">종</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_Paper", this);
            obj._setContents("<ColumnInfo><Column id=\"PPR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_STND\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_REGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_LENGTH\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CONVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_DANGA\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_FEQUENT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_DISABLED\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_STNDNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_CLASS\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_PprCust", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CUST\" type=\"STRING\" size=\"6\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REPRESENTATIVE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_STARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_STOPPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ACNTNO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTDTL_SALEAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PWT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_InCust", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CUST\" type=\"STRING\" size=\"6\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REPRESENTATIVE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_STARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_STOPPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ACNTNO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTDTL_SALEAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PWT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsType", this);
            obj._setContents("<ColumnInfo><Column id=\"TYPE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TYPE_CODE\">01</Col><Col id=\"TYPE_NAME\">입고</Col></Row><Row><Col id=\"TYPE_CODE\">02</Col><Col id=\"TYPE_NAME\">무상</Col></Row><Row><Col id=\"TYPE_CODE\">03</Col><Col id=\"TYPE_NAME\">반품</Col></Row></Rows>");
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

            obj = new Static("stType","21","34","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("0");
            obj.set_text("입출고구분");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stAmount","21","106","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("18");
            obj.set_text("공급가액");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edType","stType:3","34","3.95%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("1");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Combo("cbType","edType:3","34","7.91%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsType");
            obj.set_codecolumn("TYPE_CODE");
            obj.set_datacolumn("TYPE_NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stOrdNo","21","143","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("25");
            obj.set_text("발주서 No.");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new MaskEdit("medtOrdNo","stOrdNo:3","143","14.23%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("26");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_autoselect("true");
            obj.set_format("########-###-##");
            obj.set_limitbymask("integer");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stInvoice","medtOrdNo:3","143","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("27");
            obj.set_text("송장수령여부");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new CheckBox("cbInvoice","stInvoice:10","143","102","34",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("28");
            obj.set_text("송장수령");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_value("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stRemark","cbInvoice:74","143","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("29");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_wordWrap("char");
            obj.set_text("비고");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edRemark","stRemark:3","143","47.83%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("30");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Grid("grdPprDtl","21","edRemark:4","97.63%",null,null,"2",null,null,null,null,this.DivDtl.form);
            obj.set_taborder("31");
            obj.set_binddataset("dsPprInDtl");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"69\"/><Column size=\"215\"/><Column size=\"54\"/><Column size=\"85\"/><Column size=\"83\"/><Column size=\"83\"/><Column size=\"83\"/><Column size=\"83\"/><Column size=\"131\"/><Column size=\"131\"/><Column size=\"131\"/><Column size=\"52\"/><Column size=\"51\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" colspan=\"2\" text=\"용지\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"입고수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"4\" text=\"입고중량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"단가\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"공급가액\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"부가세\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" text=\"제지사\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"9\" text=\"입고처\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"10\" text=\"발주서 No\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"11\" text=\"선매입\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"12\" text=\"송장\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:TYPE_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"combotext\" combodataset=\"dsType\" combocodecol=\"TYPE_CODE\" combodatacol=\"TYPE_NAME\" textAlign=\"center\" cssclass=\"expr:TYPE_CODE==&apos;03&apos;?&quot;BgChange4&quot;:&quot;&quot; \"/><Cell col=\"1\" text=\"bind:PPR_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"combotext\" combodataset=\"ds_mk_Paper\" combocodecol=\"PPR_CODE\" combodatacol=\"PPR_NAME\" textAlign=\"left\" cssclass=\"expr:TYPE_CODE==&apos;03&apos;?&quot;BgChange4&quot;:&quot;&quot; \"/><Cell col=\"2\" text=\"bind:PPRINDTL_PPRSTND\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"combotext\" combodataset=\"dsPprStnd\" combocodecol=\"PPR_STND\" combodatacol=\"PPR_STNDNAME\" textAlign=\"center\" cssclass=\"expr:TYPE_CODE==&apos;03&apos;?&quot;BgChange4&quot;:&quot;&quot; \"/><Cell col=\"3\" text=\"bind:PPRINDTL_QTY\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,0.000\" cssclass=\"expr:TYPE_CODE==&apos;03&apos;?&quot;BgChange4&quot;:&quot;&quot; \"/><Cell col=\"4\" text=\"bind:PPRINDTL_WEIGHT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,0.000\" cssclass=\"expr:TYPE_CODE==&apos;03&apos;?&quot;BgChange4&quot;:&quot;&quot; \"/><Cell col=\"5\" text=\"bind:PPRINDTL_UNITCOST\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" cssclass=\"expr:TYPE_CODE==&apos;03&apos;?&quot;BgChange4&quot;:&quot;&quot; \" maskeditformat=\"#,###\" displaytype=\"mask\"/><Cell col=\"6\" text=\"bind:PPRINDTL_AMOUNT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" cssclass=\"expr:TYPE_CODE==&apos;03&apos;?&quot;BgChange4&quot;:&quot;&quot; \" maskeditformat=\"#,###\" displaytype=\"mask\"/><Cell col=\"7\" text=\"bind:PPRINDTL_VAT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" cssclass=\"expr:TYPE_CODE==&apos;03&apos;?&quot;BgChange4&quot;:&quot;&quot; \" maskeditformat=\"#,###\" displaytype=\"mask\"/><Cell col=\"8\" text=\"bind:PPR_CUST\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" combodataset=\"ds_mk_PprCust\" combocodecol=\"CUST\" combodatacol=\"CUST_NAME\" displaytype=\"combotext\" cssclass=\"expr:TYPE_CODE==&apos;03&apos;?&quot;BgChange4&quot;:&quot;&quot; \"/><Cell col=\"9\" text=\"bind:CUST\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" combodataset=\"ds_mk_InCust\" combocodecol=\"CUST\" combodatacol=\"CUST_NAME\" displaytype=\"combotext\" cssclass=\"expr:TYPE_CODE==&apos;03&apos;?&quot;BgChange4&quot;:&quot;&quot; \"/><Cell col=\"10\" text=\"bind:PPRORDNO\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"mask\" maskeditformat=\"########-###-##\" maskeditlimitbymask=\"both\" maskedittype=\"string\" cssclass=\"expr:TYPE_CODE==&apos;03&apos;?&quot;BgChange4&quot;:&quot;&quot; \" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:PPRINDTL_PREEMPTION\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" combodataset=\"ds_mk_Cust\" combocodecol=\"CUST\" combodatacol=\"CUST_NAME\" displaytype=\"checkboxcontrol\" cssclass=\"expr:TYPE_CODE==&apos;03&apos;?&quot;BgChange4&quot;:&quot;&quot; \"/><Cell col=\"12\" text=\"bind:PPRINDTL_INVOICE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" combodataset=\"ds_mk_Cust\" combocodecol=\"CUST\" combodatacol=\"CUST_NAME\" displaytype=\"checkboxcontrol\" cssclass=\"expr:TYPE_CODE==&apos;03&apos;?&quot;BgChange4&quot;:&quot;&quot; \"/></Band></Format></Formats>");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stDtlNm","22","-5","185","46",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("32");
            obj.set_text("▣용지입고 세부사항▣");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Div("DivBtn",null,"0","253","56","0.08%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("33");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Button("btnDSearch","18","7","50","32",null,null,null,null,null,null,this.DivDtl.form.DivBtn.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.DivDtl.form.DivBtn.addChild(obj.name, obj);

            obj = new Button("btnDAdd","76","7","50","32",null,null,null,null,null,null,this.DivDtl.form.DivBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.DivDtl.form.DivBtn.addChild(obj.name, obj);

            obj = new Button("btnDSave","134","7","50","32",null,null,null,null,null,null,this.DivDtl.form.DivBtn.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.DivDtl.form.DivBtn.addChild(obj.name, obj);

            obj = new Button("btnDDel","192","7","50","32",null,null,null,null,null,null,this.DivDtl.form.DivBtn.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.DivDtl.form.DivBtn.addChild(obj.name, obj);

            obj = new Static("stPprCd","cbType:3","34","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("3");
            obj.set_text("용지코드");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edPprCd","stPprCd:3","34","6.32%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("4");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Combo("cbPprCd","edPprCd:3","34","21.42%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_mk_Paper");
            obj.set_codecolumn("PPR_CODE");
            obj.set_datacolumn("PPR_NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edPprUnit","cbPprCd:30","34","3.16%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("6");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Combo("cbPprStnd","edPprUnit:3","34","7.91%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsPprStnd");
            obj.set_codecolumn("PPR_STND");
            obj.set_datacolumn("PPR_STNDNAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new MaskEdit("medtAmount","stAmount:3","106","14.23%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("19");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_autoselect("true");
            obj.set_format("#,###");
            obj.set_displaynulltext("0");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stVat","medtAmount:3","106","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("20");
            obj.set_text("부가세");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new MaskEdit("medtVat","stVat:3","106","14.23%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("21");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_autoselect("true");
            obj.set_format("#,###");
            obj.set_displaynulltext("0");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stInCust","medtVat:3","106","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("22");
            obj.set_text("입고처");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edInCustCd","stInCust:3","106","6.32%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("23");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Combo("cbInCustNm","edInCustCd:3","106","24.03%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("24");
            obj.set_innerdataset("ds_mk_InCust");
            obj.set_codecolumn("CUST");
            obj.set_datacolumn("CUST_NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stPprCust","21","70","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("9");
            obj.set_text("제지사");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edPprCustCd","stPprCust:3","70","6.32%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("10");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Combo("cbPprCustNm","edPprCustCd:3","70","16.52%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_mk_PprCust");
            obj.set_codecolumn("CUST");
            obj.set_datacolumn("CUST_NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new CheckBox("cbPreBuy","cbPprStnd:10","36","102","34",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("8");
            obj.set_text("선매입");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stInQty","cbPprCustNm:3","71","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("12");
            obj.set_text("입고수량");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new MaskEdit("medtInQty","stInQty:3","70","14.47%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("13");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_autoselect("true");
            obj.set_format("#,0.000");
            obj.set_limitbymask("both");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stInWeight","medtInQty:3","70","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("14");
            obj.set_text("입고중량");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new MaskEdit("medtInWeight","stInWeight:3","70","14.47%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("15");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_autoselect("true");
            obj.set_format("#,0.000");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stUnitCost","medtInWeight:3","70","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("16");
            obj.set_text("단가");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new MaskEdit("medtUnitCost","stUnitCost:3","70","17.23%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("17");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_autoselect("true");
            obj.set_format("#,###");
            obj.set_displaynulltext("0");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Button("btnApply",null,"7","85","32","22.92%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("34");
            obj.set_text("가져오기");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.DivDtl.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1265,420,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","DivDtl.form.edType","value","dsPprInDtl","TYPE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","DivDtl.form.cbType","value","dsPprInDtl","TYPE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","DivDtl.form.edPprCd","value","dsPprInDtl","PPR_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","DivDtl.form.cbPprCd","value","dsPprInDtl","PPR_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","DivDtl.form.edPprUnit","value","dsPprInDtl","PPR_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","DivDtl.form.cbPprStnd","value","dsPprInDtl","PPRINDTL_PPRSTND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","DivDtl.form.cbPreBuy","value","dsPprInDtl","PPRINDTL_PREEMPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","DivDtl.form.edPprCustCd","value","dsPprInDtl","PPR_CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","DivDtl.form.cbPprCustNm","value","dsPprInDtl","PPR_CUST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","DivDtl.form.medtInQty","value","dsPprInDtl","PPRINDTL_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","DivDtl.form.medtInWeight","value","dsPprInDtl","PPRINDTL_WEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","DivDtl.form.medtUnitCost","value","dsPprInDtl","PPRINDTL_UNITCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","DivDtl.form.medtAmount","value","dsPprInDtl","PPRINDTL_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","DivDtl.form.medtVat","value","dsPprInDtl","PPRINDTL_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","DivDtl.form.edInCustCd","value","dsPprInDtl","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","DivDtl.form.cbInCustNm","value","dsPprInDtl","CUST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","DivDtl.form.medtOrdNo","value","dsPprInDtl","PPRORDNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","DivDtl.form.cbInvoice","value","dsPprInDtl","PPRINDTL_INVOICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","DivDtl.form.edRemark","value","dsPprInDtl","PPRINDTL_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK122_DTL.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK122_DTL.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("MK122_DTL.xfdl","Lib::Lib_mk.xjs");
        this.registerScript("MK122_DTL.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_mk.xjs"); /*include "Lib::Lib_mk.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPprInMst_Date, vPprInMst_No, nPpr_UnitCost;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var sCust_Gubn = "41";
        var sPprCust_Gubn = "40";
        var vStr = "D";
        var vPerDML = "U";
        var	vPerDel = "D";

        this.MkDtlMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);
        	vPprInMst_Date = this.parent.parent.dsPprInMst.getColumn(this.parent.parent.dsPprInMst.rowposition, "PPRINMST_DATE");
        	vPprInMst_No = this.parent.parent.dsPprInMst.getColumn(this.parent.parent.dsPprInMst.rowposition, "PPRINMST_NO");
        	this.gfn_TransactionP("select", "JSP/mk/getData_paper.jsp", "ds_mk_Paper=ds_mk_Paper", "ds_mk_Paper=ds_mk_Paper", "", "", false, "S", false, this); 			//용지코드
        	this.gfn_TransactionP("select", "JSP/mk/Cust_Select.jsp", "ds_mk_PprCust=ds_mk_PprCust", "ds_mk_PprCust=ds_mk_PprCust", "", "", false, "S", false, this);   				 //업체코드
        	this.ds_mk_InCust.copyData(this.ds_mk_PprCust);

        	this.ds_mk_InCust.filter("CUST_GUBN=='00' || CUST_GUBN=='" + sCust_Gubn + "'");
        	this.ds_mk_PprCust.filter("CUST_GUBN=='00' || CUST_GUBN=='" + sPprCust_Gubn + "'");


        	if(Eco.isUndefined(vPprInMst_Date) == false && Eco.isUndefined(vPprInMst_No) == false){
        		this.getData_PprInDtl(vPprInMst_Date, vPprInMst_No);
        	}
        };

        //#######################################################
        //  신규로 등록하기
        //#######################################################
        this.fctn_Dtl_New = function()
        {
        	var nRow          = "";
        	switch(this.dsPprInDtl.rowposition)
        	{
        	  // -1 이면 레코드가 없는 상태
        	  case -1 : this.dsPprInDtl.addRow();
        				this.fctn_Default_Value_Set(this.dsPprInDtl.rowposition);
        				break;

        	  default : // 마지막 레코드 입력여부 확인
        	            nRow = this.dsPprInDtl.getRowCount()-1;

        	            // 레코드에 내용이 있으면
        	            if (this.fctn_PprOrdDtl_CheckRecord(nRow) == true)
        	            {
        					// ROW 추가
        					this.dsPprInDtl.addRow();
        					this.fctn_Default_Value_Set(this.dsPprInDtl.rowposition);
        				}
        				else
        					break;

        				// 마지막 레코드로 위치 이동
        				this.dsPprInDtl.set_rowposition(this.dsPprInDtl.getRowCount()-1);
        				break;
        	}
        	this.DivDtl.form.edType.setFocus();
        }

        // 용지발주 상세내역 가져오기
        this.getData_PprInDtl = function(vPprInMst_Date, vPprInMst_No)
        {
        	str_url = "JSP/mk/mk122f_pprin_dtl.jsp";
        	in_ds ="dsPprInDtl=dsPprInDtl";
        	out_ds ="dsPprInDtl=dsPprInDtl";
        	str_arg ="PPRINMST_DATE=" +nexacro.wrapQuote(vPprInMst_Date);
        	str_arg +=" PPRINMST_NO=" +nexacro.wrapQuote(vPprInMst_No);

        	this.gfn_TransactionP("selectDtl", str_url, in_ds, out_ds, str_arg, "Callback_Search", false, "S", false, this);
        };

        this.Callback_Search = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}else{

        		if (this.dsPprInDtl.rowcount == 0 && (Eco.isUndefined(vPprInMst_Date) == false && Eco.isUndefined(vPprInMst_No) == false))
        			this.fctn_Dtl_New();
        		else{  // 있을 경우 그리드에 포커스
        			this.DivDtl.form.grdPprDtl.setFocus();
        		}
        	}
        };

        /*상세내역 조회*/
        this.DivDtl_DivBtn_btnDSearch_onclick = function(obj,e)
        {
        	vPprInMst_Date = this.parent.parent.dsPprInMst.getColumn(this.parent.parent.dsPprInMst.rowposition, "PPRINMST_DATE");
        	vPprInMst_No = this.parent.parent.dsPprInMst.getColumn(this.parent.parent.dsPprInMst.rowposition, "PPRINMST_NO");
        	this.getData_PprInDtl(vPprInMst_Date, vPprInMst_No);
        };

        /*상세내역 추가*/
        this.DivDtl_DivBtn_btnDAdd_onclick = function(obj,e)
        {
        	this.dsPprInDtl.addRow();
        	this.fctn_Default_Value_Set(this.dsPprInDtl.rowposition);
        	this.DivDtl.form.edType.setFocus();
        };

        //row추가시 기본setting
        this.fctn_Default_Value_Set = function(nRow)
        {
        	vPprInMst_Date = this.parent.parent.dsPprInMst.getColumn(this.parent.parent.dsPprInMst.rowposition, "PPRINMST_DATE");
        	vPprInMst_No = this.parent.parent.dsPprInMst.getColumn(this.parent.parent.dsPprInMst.rowposition, "PPRINMST_NO");

        	this.dsPprInDtl.setColumn(nRow, "PPRINMST_DATE", vPprInMst_Date);
        	this.dsPprInDtl.setColumn(nRow, "PPRINMST_NO", vPprInMst_No);
        	this.dsPprInDtl.setColumn(nRow, "PPRINDTL_PPRSTND", 0);
        	this.dsPprInDtl.setColumn(nRow, "PPRINDTL_QTY", 0);
        	this.dsPprInDtl.setColumn(nRow, "PPRINDTL_WEIGHT", 0);

        	this.dsPprInDtl.setColumn(nRow, "PPR_CUST_GUBN", sPprCust_Gubn);
        	this.dsPprInDtl.setColumn(nRow, "CUST_GUBN", sCust_Gubn);
        	this.dsPprInDtl.setColumn(nRow, "EMPLOYEE_ID", gv_sabun);
        	this.dsPprInDtl.setColumn(nRow, "PPRINDTL_PREEMPTION", 0);
        	this.dsPprInDtl.setColumn(nRow, "PPRINDTL_INVOICE", 0);
        }

        //용지발주 세부사양 저장이벤트
        this.DivDtl_DivBtn_btnDSave_onclick = function(vStr)
        {
        	var inds = "input=dsPprInDtl:U";
        	var setSave = true;

        	for(var nRow=0 ; nRow<=this.dsPprInDtl.getRowCount-1 ; nRow++)
        	{
        		if (!this.fctn_PprInDtl_CheckRecord(nRow)){
        			setSave = false;
        			return false;
        		}

        		if(Eco.isUndefined(vPprInMst_Date) == true && Eco.isUndefined(vPprInMst_No) == true){

        			vPprInMst_Date = this.parent.parent.dsPprInMst.getColumn(this.parent.parent.dsPprInMst.rowposition, "PPRINMST_DATE");
        			vPprInMst_No = this.parent.parent.dsPprInMst.getColumn(this.parent.parent.dsPprInMst.rowposition, "PPRINMST_NO");

        			if(Eco.isUndefined(vPprInMst_Date) == true && Eco.isUndefined(vPprInMst_No) == true){
        				alert("용지 입고일자 등록 내역이 없습니다.");
        				return false;
        			}

        			this.dsPprInDtl.setColumn(nRow, "PPRINMST_DATE", vPprInMst_Date);
        			this.dsPprInDtl.setColumn(nRow, "PPRINMST_NO", vPprInMst_No);
        		}
        	}

        	if(setSave)
        	{
        		this.gfn_TransactionP("save", "JSP/mk/mk122f_pprindtl_dml.jsp", inds, "", "", "fnDtlSaveCallback", false, vStr, false, this);
        	}
        };

        this.fnDtlSaveCallback = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}
        };



        //#######################################################
        //  입력값 확인
        //#######################################################
        this.fctn_PprInDtl_CheckRecord = function(nRow)
        {
        	if(Eco.isUndefined(this.dsPprInDtl.getColumn(nRow, "TYPE_CODE")) == true)
        	{
        		alert("입출고 구분을 입력해 주십시요.");
        		this.DivDtl.form.edType.setFocus();
        		return false;
        	}

        	if(Eco.isUndefined(this.dsPprInDtl.getColumn(nRow, "PPR_CODE")) == true)
        	{
        		alert("용지를 입력해 주십시요.");
        		this.DivDtl.form.edPprCd.setFocus();
        		return false;
        	}

        	if(Eco.isUndefined(this.dsPprInDtl.getColumn(nRow, "PPRINDTL_QTY")) == true)
        	{
        		alert("입고수량을 입력해 주십시요.");
        		this.DivDtl.form.medtInQty.setFocus();
        		return false;
        	}

        	if(Eco.isUndefined(this.dsPprInDtl.getColumn(nRow, "CUST_CODE")) == true)
        	{
        		alert("입고처를 입력해 주십시요.");
        		this.DivDtl.form.edInCustCd.setFocus();
        		return false;
        	}

        	return true;
        }

        this.DivDtl_DivBtn_btnDDel_onclick = function(obj,e)
        {
        	if(Eco.isUndefined(this.dsPprInDtl.getColumn(this.dsPprInDtl.rowposition, "PPRINDTL_SEQ")) == true){
        		//row 삭제
        		this.dsPprInDtl.deleteRow(this.dsPprInDtl.rowposition);
        	}else{
        		// row 삭제 후 저장
        		this.dsPprInDtl.deleteRow(this.dsPprInDtl.rowposition);
        		this.DivDtl_DivBtn_btnDSave_onclick(vPerDel);
        	}
        };

        //용지발주 세부그리드 키처리
        this.DivDtl_grdPprDtl_onkeydown = function(obj,e)
        {
        	if(e.ctrlkey == true)      //Ctrl+Z 누를경우 되돌리기
        	{
        		if(e.keycode == 90)
        			this.dsPprInDtl.reset();
        	}else{

        		if(e.keycode == 13){
        			this.DivDtl.form.edType.setFocus();
        		}else if(e.keycode == 46){
        			if(Confirm("삭제하시겠습니까?"))
        				this.DivDtl_DivBtn_btnDDel_onclick();
        		}else if(e.keycode == 27){
        			this.parent.parent.grdPprMst.setFocus();
        		}
        	}
        };

        //입출고구분 변경이벤트
        this.DivDtl_cbType_onitemchanged = function(obj,e)
        {
        	var varPerDML = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_DML");
        	if(varPerDML != 1)
        	{
        		this.DivDtl.form.medtUnitCost.set_enable(e.postindex != 1);
        	}
        };


        //용지코드 변경 이벤트 -> 동기화
        this.DivDtl_edPprCd_onchanged = function(obj,e)
        {
        	if(this.DivDtl.form.edPprCd.getLength() == this.DivDtl.form.edPprCd.text.length){
        		this.DivDtl.form.cbPprCd.set_index(this.ds_mk_Paper.findRow("PPR_CODE",  this.DivDtl.form.edPprCd.text));
        		this.DivDtl.form.edPprUnit.set_value(this.ds_mk_Paper.getColumn(this.DivDtl.form.cbPprCd.index, "PPR_UNIT"));

        		if(this.DivDtl.form.cbPprCd.index == -1)
        		{
        			this.DivDtl.form.cbPprCd.setFocus();
        			this.DivDtl.form.cbPprCd.dropdown();
        		}else{
        			this.DivDtl.form.cbPprStnd.setFocus();
        			this.DivDtl.form.cbPprStnd.dropdown();
        		}

        		this.fctn_PprUnit_Change();
        	}
        };

        //#######################################################
        //	용지 종류에 따른 수량 활성화
        //#######################################################
        this.fctn_PprUnit_Change = function()
        {
        	this.DivDtl.form.medtInQty.set_enable((this.DivDtl.form.edPprUnit.text != "T"));
        	this.DivDtl.form.medtInWeight.set_enable((this.DivDtl.form.edPprUnit.text == "T"));
        }

        //용지코드콤보 변경 이벤트
        this.DivDtl_cbPprCd_onitemchanged = function(obj,e)
        {
        	var iPprIdx = this.ds_mk_Paper.findRow("PPR_NAME", this.DivDtl.form.cbPprCd.text);
        	this.DivDtl.form.edPprCd.set_value(this.ds_mk_Paper.getColumn(iPprIdx, "PPR_CODE"));
        	this.DivDtl.form.edPprUnit.set_value(this.ds_mk_Paper.getColumn(this.DivDtl.form.cbPprCd.index, "PPR_UNIT"));

        	this.fctn_PprUnit_Change();

        	this.DivDtl.form.cbPprStnd.setFocus();
        	this.DivDtl.form.cbPprStnd.dropdown();
        };

        //제지사 변경 이벤트
        this.DivDtl_edPprCustCd_onchanged = function(obj,e)
        {
        	if(this.DivDtl.form.edPprCustCd.text.length == 1){

        		var vCustCd = this.lfn_CustName(sPprCust_Gubn, this.DivDtl.form.edPprCustCd.text);
        		this.DivDtl.form.edPprCustCd.set_value(vCustCd);
        	}

        	if(this.DivDtl.form.edPprCustCd.getLength() == this.DivDtl.form.edPprCustCd.text.length){
        		this.DivDtl.form.cbPprCustNm.set_index(this.ds_mk_PprCust.findRow("CUST", sPprCust_Gubn+this.DivDtl.form.edPprCustCd.text));
        	}

        	// 용지단가 가져오기
        	this.fctn_Paper_UnitCost(this.parent.parent.dsPprInMst.getColumn(this.parent.parent.dsPprInMst.rowposition, "PPRINMST_DATE")
        												, this.parent.parent.dsPprInMst.getColumn(this.parent.parent.dsPprInMst.rowposition, "CUST_GUBN")
        												, this.parent.parent.dsPprInMst.getColumn(this.parent.parent.dsPprInMst.rowposition, "CUST_CODE")
        												, this.dsPprInDtl.getColumn(this.dsPprInDtl.rowposition, "PPR_CUST_GUBN")
        												, this.dsPprInDtl.getColumn(this.dsPprInDtl.rowposition, "PPR_CUST_CODE")
        												, this.DivDtl.form.edPprCd.text);

        	this.DivDtl.form.medtUnitCost.set_value(nPpr_UnitCost);

        	if(this.DivDtl.form.edPprUnit.text == "T")
        		this.DivDtl.form.medtInWeight.setFocus();
        	else
        		this.DivDtl.form.medtInQty.setFocus();

        };

        this.DivDtl_cbPprCustNm_onitemchanged = function(obj,e)
        {

        	var iCustIdx = this.ds_mk_PprCust.findRow("CUST_NAME", this.DivDtl.form.cbPprCustNm.text);
        	this.DivDtl.form.edPprCustCd.set_value(this.ds_mk_PprCust.getColumn(iCustIdx, "CUST_CODE"));

        	if(this.DivDtl.form.edPprUnit.Text == "T")
        		this.DivDtl.form.medtInWeight.setFocus();
        	else
        		this.DivDtl.form.medtInQty.setFocus();
        };

        //입고수량 변경이벤트
        this.DivDtl_medtInQty_onchanged = function(obj,e)
        {
        	this.fctn_Paper_Changed();
        	this.DivDtl.form.medtAmount.setFocus();
        };

        //입고중량 변경이벤트
        this.DivDtl_medtInWeight_onchanged = function(obj,e)
        {
        	this.fctn_Paper_Changed();
        	this.DivDtl.form.medtAmount.setFocus();
        };

        //공급가액 변경이벤트
        this.DivDtl_medtAmount_onchanged = function(obj,e)
        {
        	if(this.DivDtl.form.edPprUnit.value == "T")
        		this.DivDtl.form.medtAmount.set_value(nexacro.floor(nexacro.Decimal(this.DivDtl.form.medtInWeight.value * this.DivDtl.form.medtUnitCost.value)));
        	else
        		this.DivDtl.form.medtAmount.set_value(nexacro.floor(nexacro.Decimal(this.DivDtl.form.medtInQty.value * this.DivDtl.form.medtUnitCost.value)));

        	//부가세 변경
        	this.DivDtl.form.medtVat.set_value(nexacro.floor(this.DivDtl.form.medtAmount.value / 10));
        };


        //입고처 변경 이벤트
        this.DivDtl_edInCustCd_onchanged = function(obj,e)
        {
        	if(this.DivDtl.form.edInCustCd.text.length == 1){
        		var vInCustCd = this.lfn_CustName(sCust_Gubn, this.DivDtl.form.edInCustCd.text);
        		this.DivDtl.form.edInCustCd.set_value(vInCustCd);
        	}

        	if(this.DivDtl.form.edInCustCd.getLength() == this.DivDtl.form.edInCustCd.text.length)
        		this.DivDtl.form.cbInCustNm.set_index(this.ds_mk_InCust.findRow("CUST", sCust_Gubn+this.DivDtl.form.edInCustCd.text));

        	if(this.DivDtl.form.cbInCustNm.index != -1)
        		this.DivDtl.form.medtOrdNo.setFocus();
        };

        //입고처명 콤보 변경 이벤트
        this.DivDtl_cbInCustNm_onitemchanged = function(obj,e)
        {
        	var iCustIdx = this.ds_mk_InCust.findRow("CUST_NAME", this.DivDtl.form.cbInCustNm.text);
        	this.DivDtl.form.edInCustCd.set_value(this.ds_mk_InCust.getColumn(iCustIdx, "CUST_CODE"));

        	this.DivDtl.form.medtOrdNo.setFocus();
        };

        // 비고 키보드 이벤트
        this.DivDtl_edRemark_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.dsPprInDtl.setColumn(this.dsPprInDtl.rowposition, "PPRINDTL_REMARK", this.DivDtl.form.edRemark.text);
        		this.fctn_Dtl_New();
        	}
        };

        //#######################################################
        //  톤지를 연으로 환산하기
        //	단위가 'T' 이면 수량 = (용지환산 * 중량)
        //#######################################################
        this.DivDtl_medtDtlWeight_onchanged = function(obj,e)
        {
        	if(this.DivDtl.form.edPprUnit.text == "T"){
        		var strConversion = this.ds_mk_Paper.getColumn(this.DivDtl.form.cbPprCd.index, "PPR_CONVERSION");
        		var strQty = nexacro.toNumber(this.DivDtl.form.medtDtlWeight.value)*nexacro.toNumber(strConversion);
        		this.DivDtl.form.medtDtlQty.set_value(strQty);
        	}else{
        		this.DivDtl.form.medtDtlWeight.set_value(0);
        	}
        };

        //#######################################################
        //	DataSet Row가 변경시 용지종류(T/R)에 따른 수량 활성화
        //#######################################################
        this.dsPprOrdDtl_onrowposchanged = function(obj,e)
        {
        	this.fctn_PprUnit_Change();
        };


        this.MkDtlMain_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };


        this.MkDtlMain_ontimer = function(obj,e)
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

        	this.lfn_grdAutofit(this.DivDtl.form.grdPprDtl);

        };



        this.LocalFctn_OnKeyDown = function(obj,e)
        {
        	var curObj = this.getFocus();

        	//ENTER입력시 TAB처럼 이동
        	if(e.keycode == "13"){

        		curObj = this.DivDtl.form.getNextComponent(curObj, true);
        		curObj.setFocus();

        		//콤보타입일 경우 목록보이게 자동설정
        		if(curObj == "[object Combo]")
        		{
        			if(curObj.index == -1)
        				curObj.dropdown();
        		}
        	}
        };

        //용지단가 가져오기
        this.fctn_Paper_UnitCost = function(sPPRUC_DATE, sCUST_GUBN, sCUST_CODE, sPPR_CUST_GUBN, sPPR_CUST_CODE, sPPR_CODE)
        {
        	var strArg  = "";

        	strArg 	= "pPPRUC_DATE=" + nexacro.wrapQuote( sPPRUC_DATE ) +
        	          " pCUST_GUBN=" + nexacro.wrapQuote( sCUST_GUBN ) +
        	          " pCUST_CODE=" + nexacro.wrapQuote( sCUST_CODE ) +
        	          " pPPR_CUST_GUBN=" + nexacro.wrapQuote( sPPR_CUST_GUBN ) +
        	          " pPPR_CUST_CODE=" + nexacro.wrapQuote( sPPR_CUST_CODE ) +
        	          " pPPR_CODE=" + nexacro.wrapQuote( sPPR_CODE );

        	this.gfn_TransactionP("search", "JSP/mk/mk122f_paper_unitcost.jsp", "", "", strArg, "fctn_Paper_UnitCost_CallBack", false, "S", false, this);
        }

        //#######################################################
        //	fctn_Paper_UnitCost_CallBack.	(단가조회)
        //#######################################################
        this.fctn_Paper_UnitCost_CallBack = function(sTrid, nErrorCode, sErrorMsg, gv_rt_value)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{
        		nPpr_UnitCost = nexacro.getApplication().gv_rt_value;
        	}
        }

        //#######################################################
        //	용지 종류에 따른 수량 변경
        //-------------------------------------------------------
        // "T" : 윤전지(톤지)
        // "R" : 매엽지(쉬트지)
        //#######################################################
        this.fctn_Paper_Changed = function()
        {
        	var nPpr_Row = this.ds_mk_Paper.findRow("PPR_CODE", this.DivDtl.form.edPprCd.value);
        	if (this.ds_mk_Paper.getColumn(nPpr_Row, "PPR_UNIT") == "T")
        	{
        		var nQty = new nexacro.Decimal(nexacro.toNumber(this.DivDtl.form.medtInWeight.value)
        		        * this.ds_mk_Paper.getColumn(nPpr_Row, "PPR_CONVERSION"), 3);

        		nQty = nexacro.floor(nQty, 3);
        		this.dsPprInDtl.setColumn(this.dsPprInDtl.rowposition, "PPRINDTL_QTY", nQty);
        	}
        	else
        	{
        		if(this.ds_mk_Paper.getColumn(nPpr_Row, "PPR_CONVERSION") == 0)
        			this.dsPprInDtl.setColumn(this.dsPprInDtl.rowposition, "PPRINDTL_WEIGHT", 0);
        		else{

        			var nQty = new nexacro.Decimal(nexacro.toNumber(this.DivDtl.form.medtInQty.value)
        					/ this.ds_mk_Paper.getColumn(nPpr_Row, "PPR_CONVERSION"));
        			nQty = nexacro.floor(nQty, 3);
        			this.dsPprInDtl.setColumn(this.dsPprInDtl.rowposition, "PPRINDTL_WEIGHT", nQty);
        		}
        	}
        }

        //용지 발주내역 불러오기
        this.DivDtl_btnApply_onclick = function(obj,e)
        {
        	 var objParam = {dsParam1:this.parent.parent.dsPprInMst.getColumn(this.parent.parent.dsPprInMst.rowposition, "PPRINMST_DATE")
        					,dsParam2:this.parent.parent.dsPprInMst.getColumn(this.parent.parent.dsPprInMst.rowposition, "CUST_CODE")
        					,dsParam3:this.ds_mk_Paper
        					,dsParam4:this.ds_mk_PprCust
        					,dsParam5:this.parent.parent.dsPprInMst.getColumn(this.parent.parent.dsPprInMst.rowposition, "PPRINMST_NO")};

        	 this.lfn_showModal("popupOrdList", objParam, "mk::MK122_OrdImpF.xfdl", "popupCallBack", this, 10, 58, 950, 360);
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
            this.DivDtl.form.medtOrdNo.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.DivDtl.form.cbInvoice.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.DivDtl.form.edRemark.addEventHandler("onkeydown",this.DivDtl_edRemark_onkeydown,this);
            this.DivDtl.form.grdPprDtl.addEventHandler("onkeydown",this.DivDtl_grdPprDtl_onkeydown,this);
            this.DivDtl.form.DivBtn.form.btnDSearch.addEventHandler("onclick",this.DivDtl_DivBtn_btnDSearch_onclick,this);
            this.DivDtl.form.DivBtn.form.btnDAdd.addEventHandler("onclick",this.DivDtl_DivBtn_btnDAdd_onclick,this);
            this.DivDtl.form.DivBtn.form.btnDSave.addEventHandler("onclick",this.DivDtl_DivBtn_btnDSave_onclick,this);
            this.DivDtl.form.DivBtn.form.btnDDel.addEventHandler("onclick",this.DivDtl_DivBtn_btnDDel_onclick,this);
            this.DivDtl.form.edPprCd.addEventHandler("onchanged",this.DivDtl_edPprCd_onchanged,this);
            this.DivDtl.form.cbPprCd.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.DivDtl.form.cbPprCd.addEventHandler("onitemchanged",this.DivDtl_cbPprCd_onitemchanged,this);
            this.DivDtl.form.edPprUnit.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.DivDtl.form.cbPprStnd.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.DivDtl.form.medtAmount.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.DivDtl.form.medtAmount.addEventHandler("onchanged",this.DivDtl_medtAmount_onchanged,this);
            this.DivDtl.form.edInCustCd.addEventHandler("onchanged",this.DivDtl_edInCustCd_onchanged,this);
            this.DivDtl.form.cbInCustNm.addEventHandler("onsetfocus",this.DivDtl_cbInCustNm_onsetfocus,this);
            this.DivDtl.form.cbInCustNm.addEventHandler("onitemchanged",this.DivDtl_cbInCustNm_onitemchanged,this);
            this.DivDtl.form.edPprCustCd.addEventHandler("onchanged",this.DivDtl_edPprCustCd_onchanged,this);
            this.DivDtl.form.cbPprCustNm.addEventHandler("onsetfocus",this.DivDtl_edPprCustCd_onsetfocus,this);
            this.DivDtl.form.cbPprCustNm.addEventHandler("onitemchanged",this.DivDtl_cbPprCustNm_onitemchanged,this);
            this.DivDtl.form.cbPreBuy.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.DivDtl.form.medtInQty.addEventHandler("onchanged",this.DivDtl_medtInQty_onchanged,this);
            this.DivDtl.form.medtInWeight.addEventHandler("onchanged",this.DivDtl_medtInWeight_onchanged,this);
            this.DivDtl.form.btnApply.addEventHandler("onclick",this.DivDtl_btnApply_onclick,this);
            this.dsPprInDtl.addEventHandler("onrowposchanged",this.dsPprOrdDtl_onrowposchanged,this);
        };
        this.loadIncludeScript("MK122_DTL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
