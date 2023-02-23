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
            this.set_titletext("도서코드 세부사양");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(695,634);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBookDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKDTL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"USE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_PSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COAT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_REGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_MODIDATE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_BNDSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_BUL\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_GANGED\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_TONE1\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_TONE2\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_CTP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PAGECNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PACK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PRINT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DVD_JACKET\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COUNT_BOTH\" type=\"STRING\" size=\"256\"/><Column id=\"COST\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_mk_Paper", this);
            obj._setContents("<ColumnInfo><Column id=\"PPR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_STND\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_REGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_LENGTH\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CONVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_DANGA\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_FEQUENT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_DISABLED\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_STNDNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_CLASS\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_CDPrint", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBookDtl_CD_PRINT", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Div("DivDtl","0","0",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#e8e7e3");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("StSearch01_00","1.73%","44",null,"35","86.04%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("0");
            obj.set_text("용도");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edUseCode","14.24%","44",null,"35","80.72%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("1");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Combo("cbUseCode","19.42%","44",null,"35","60.86%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_mk_use");
            obj.set_codecolumn("USE_CODE");
            obj.set_datacolumn("USE_NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("StSearch01_00_00","1.73%","118",null,"35","86.04%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("3");
            obj.set_text("코팅");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edCoatCd","14.24%","118",null,"35","80.72%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("4");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Combo("cbCoatCd","19.42%","118",null,"35","60.86%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_mk_coating");
            obj.set_codecolumn("COAT_CODE");
            obj.set_datacolumn("COAT_NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("StSearch01_00_01","1.73%","81",null,"35","86.04%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("6");
            obj.set_text("용지코드");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edPprCode","14.24%","81",null,"35","79.57%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("7");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Combo("cbPprCode","20.43%","81",null,"35","44.89%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_mk_Paper");
            obj.set_codecolumn("PPR_CODE");
            obj.set_datacolumn("PPR_NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("StSearch01","39.42%","44",null,"35","48.35%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("9");
            obj.set_text("제본순서");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edBndSeq","51.8%","44",null,"35","1.01%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("10");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("StSearch00_00","55.4%","81",null,"35","38.85%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("11");
            obj.set_text("쪽수");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edPage","61.44%","81",null,"35","30.65%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("12");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("StSearch00_00_00","69.64%","81",null,"35","24.6%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("13");
            obj.set_text("벌");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edBul","75.68%","81",null,"35","16.4%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("14");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("StSearch00_00_00_00","83.88%","82",null,"35","10.36%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("15");
            obj.set_text("돈뎅");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edGanged","89.78%","81",null,"35","1.01%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("16");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Button("btnTomson","39.14%","118",null,"36","48.35%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("17");
            obj.set_text("톰슨/도무송");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_background("#FEDF76");
            obj.set_color("darkblue");
            obj.set_enable("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Button("btnPubble","51.94%","118",null,"36","38.56%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("18");
            obj.set_text("퍼블코팅");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_background("#FEDF76");
            obj.set_color("darkblue");
            obj.set_enable("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("StSearch01_01","1.73%","155",null,"35","86.04%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("19");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_wordWrap("char");
            obj.set_text("CD/DVD\r\n알판 ");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edCdCnt","14.24%","154",null,"35","77.84%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("20");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("StaJang","22.45%","152",null,"38","72.81%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("21");
            obj.set_text("장");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new CheckBox("cbCdCntBoth","26.47%","154",null,"36","64.17%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("22");
            obj.set_text("양면");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("StSearch01_01_00","35.11%","155",null,"35","52.66%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("23");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_wordWrap("char");
            obj.set_text("CD/DVD\r\n포장형식 ");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Combo("cbPackCd","47.48%","155",null,"35","25.32%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("24");
            obj.set_innerdataset("ds_mk_CDPack");
            obj.set_codecolumn("PACK_CODE");
            obj.set_datacolumn("PACK_NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new CheckBox("ckDvdJacket","75.83%","154",null,"36","11.08%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("25");
            obj.set_text("DVD자켓");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("StSearch01_01_01","62.01%","118",null,"35","25.76%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("26");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_wordWrap("none");
            obj.set_text("CD/DVD\r\n인쇄형식");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("StSearch01_01_02","1.73%","192",null,"35","86.04%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("27");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_wordWrap("char");
            obj.set_text("색도");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edTone1","14.24%","192",null,"35","77.84%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("28");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("Static00_00","23.31%","187",null,"38","71.94%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("29");
            obj.set_text("/");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edTone2","25.04%","192",null,"35","67.05%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("30");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("StSearch01_01_02_00","33.38%","192",null,"35","54.39%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("31");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_wordWrap("char");
            obj.set_text("CTP");
            this.DivDtl.addChild(obj.name, obj);

            obj = new CheckBox("cbCtp","47.77%","192",null,"36","42.16%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("32");
            obj.set_text("CTP");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("StSearch01_01_02_00_00","57.55%","192",null,"35","30.22%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("33");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_wordWrap("char");
            obj.set_text("후가공단가");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("StSearch01_01_02_01","1.73%","229",null,"35","86.04%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("34");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_wordWrap("char");
            obj.set_text("특이사항");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edCommt","14.24%","229",null,"35","50.36%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("35");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("StSearch01_01_02_01_00","49.93%","229",null,"35","37.84%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("36");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_wordWrap("char");
            obj.set_text("비고");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edRemark","62.3%","229",null,"35","1.01%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("37");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Grid("grdBookDtl","11","270",null,null,"0.86%","1.60%",null,null,null,null,this.DivDtl.form);
            obj.set_taborder("38");
            obj.set_binddataset("dsBookDtl");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"71\" band=\"left\"/><Column size=\"163\" band=\"left\"/><Column size=\"109\" band=\"left\"/><Column size=\"42\"/><Column size=\"33\"/><Column size=\"37\"/><Column size=\"24\"/><Column size=\"29\"/><Column size=\"35\"/><Column size=\"200\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"용도\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" rowspan=\"2\" text=\"용지\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" rowspan=\"2\" text=\"코팅\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" rowspan=\"2\" text=\"쪽수\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"4\" rowspan=\"2\" text=\"벌\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" rowspan=\"2\" text=\"돈뎅\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" colspan=\"2\" text=\"색도\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" rowspan=\"2\" text=\"CTP\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"9\" rowspan=\"2\" text=\"특이사항\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"10\" rowspan=\"2\" text=\"비고\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"6\" text=\"1\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"7\" text=\"2\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:USE_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"combotext\" combodataset=\"ds_mk_use\" combocodecol=\"USE_CODE\" combodatacol=\"USE_NAME\"/><Cell col=\"1\" text=\"bind:PPR_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"combotext\" combodataset=\"ds_mk_Paper\" combocodecol=\"PPR_CODE\" combodatacol=\"PPR_NAME\"/><Cell col=\"2\" text=\"bind:COAT_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"combotext\" combodataset=\"ds_mk_coating\" combodatacol=\"COAT_NAME\" combocodecol=\"COAT_CODE\"/><Cell col=\"3\" text=\"bind:BOOKDTL_PAGE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:BOOKDTL_BUL\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:BOOKDTL_GANGED\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:BOOKDTL_TONE1\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:BOOKDTL_TONE2\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:BOOKDTL_CTP\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"checkboxcontrol\"/><Cell col=\"9\" text=\"bind:BOOKDTL_COMMENT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"10\" text=\"bind:BOOKDTL_REMARK\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\"/></Band></Format></Formats>");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("Static01","12","0","185","46",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("39");
            obj.set_text("▣도서코드 세부사항▣");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edCdPrint","74.39%","118",null,"35","5.76%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("40");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_enable("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Button("btnCdPrint",null,"119","35","35","0.86%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("41");
            obj.set_text("▼");
            this.DivDtl.addChild(obj.name, obj);

            obj = new MaskEdit("medCost","69.93%","192",null,"35","1.01%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("42");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_visible("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Div("DivMultiCdPrt",null,"152","173","225","0.72%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("43");
            obj.set_background("#e8e7e3");
            obj.set_visible("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Grid("Grid00","7","7","161","175",null,null,null,null,null,null,this.DivDtl.form.DivMultiCdPrt.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_mk_CDPrint");
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

            obj = new Button("btnSel2","6","188","78","32",null,null,null,null,null,null,this.DivDtl.form.DivMultiCdPrt.form);
            obj.set_taborder("3");
            obj.set_text("선택적용");
            obj.set_font("bold 12px/normal \"함초롬돋움\"");
            this.DivDtl.form.DivMultiCdPrt.addChild(obj.name, obj);

            obj = new Button("btnCcl2","87","188","78","32",null,null,null,null,null,null,this.DivDtl.form.DivMultiCdPrt.form);
            obj.set_taborder("4");
            obj.set_text("선택해제");
            obj.set_font("bold 12px/normal \"함초롬돋움\"");
            this.DivDtl.form.DivMultiCdPrt.addChild(obj.name, obj);

            obj = new Div("DivBtn",null,"0","310","56","0.72%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("44");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Button("btnDSearch","15","7","50","32",null,null,null,null,null,null,this.DivDtl.form.DivBtn.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.DivDtl.form.DivBtn.addChild(obj.name, obj);

            obj = new Button("btnDAdd","73","7","50","32",null,null,null,null,null,null,this.DivDtl.form.DivBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.DivDtl.form.DivBtn.addChild(obj.name, obj);

            obj = new Button("btnDSave","131","7","50","32",null,null,null,null,null,null,this.DivDtl.form.DivBtn.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.DivDtl.form.DivBtn.addChild(obj.name, obj);

            obj = new Button("btnDDel","189","7","50","32",null,null,null,null,null,null,this.DivDtl.form.DivBtn.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.DivDtl.form.DivBtn.addChild(obj.name, obj);

            obj = new Button("btnDClose","246","7","50","32",null,null,null,null,null,null,this.DivDtl.form.DivBtn.form);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.DivDtl.form.DivBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",695,634,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item17","DivDtl.form.edUseCode","value","dsBookDtl","USE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","DivDtl.form.cbUseCode","value","dsBookDtl","USE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","DivDtl.form.edCoatCd","value","dsBookDtl","COAT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","DivDtl.form.cbCoatCd","value","dsBookDtl","COAT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","DivDtl.form.edPprCode","value","dsBookDtl","PPR_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","DivDtl.form.cbPprCode","value","dsBookDtl","PPR_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","DivDtl.form.edBndSeq","value","dsBookDtl","BOOKDTL_BNDSEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","DivDtl.form.edPage","value","dsBookDtl","BOOKDTL_PAGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","DivDtl.form.edBul","value","dsBookDtl","BOOKDTL_BUL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","DivDtl.form.edGanged","value","dsBookDtl","BOOKDTL_GANGED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","DivDtl.form.edCdCnt","value","dsBookDtl","CD_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","DivDtl.form.cbPackCd","value","dsBookDtl","CD_PACK_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","DivDtl.form.edTone1","value","dsBookDtl","BOOKDTL_TONE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","DivDtl.form.edTone2","value","dsBookDtl","BOOKDTL_TONE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","DivDtl.form.edCommt","value","dsBookDtl","BOOKDTL_COMMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","DivDtl.form.edRemark","value","dsBookDtl","BOOKDTL_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","DivDtl.form.cbCdCntBoth","value","dsBookDtl","CD_COUNT_BOTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","DivDtl.form.ckDvdJacket","value","dsBookDtl","CD_DVD_JACKET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","DivDtl.form.cbCtp","value","dsBookDtl","BOOKDTL_CTP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","DivDtl.form.medCost","value","dsBookDtl","COST");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK111_DTL.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK111_DTL.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK111_DTL.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var nRow, nCurrentRow;
        var str_url, in_ds, out_ds, str_arg;
        var nBookMst_Id;
        var strCode, strVisibleD, ColumnNm;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var bBindChk = false;   //제본이 있는지 체크하는 변수

        var sUSE_CODE, sPSeq, sPPR_CODE, sCOAT_CODE, sBOOKDTL_BNDSEQ, nBOOKDTL_PAGE, nBOOKDTL_BUL;
        var nBOOKDTL_GANGED, nBOOKDTL_TONE1, nBOOKDTL_TONE2, sBOOKMST_ID;
        var sBOOKDTL_COMMENT, sBOOKDTL_REMARK, sBOOKDTL_CTP, sBOOKDTL_PSEQ;

        this.MkDtlMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);
        	nBookMst_Id = this.parent.parent.dsBookMst.getColumn(this.parent.parent.dsBookMst.rowposition, "BOOKMST_ID");

        	this.gfn_TransactionP("select", "JSP/mk/getData_use.jsp", "ds_mk_use=ds_mk_use", "ds_mk_use=ds_mk_use", "", "", false, "S", false, this); 						//용도코드
        	this.gfn_TransactionP("select", "JSP/mk/getData_coat.jsp", "ds_mk_coating=ds_mk_coating", "ds_mk_coating=ds_mk_coating", "", "", false, "S", false, this); 		//코팅코드
        	this.gfn_TransactionP("select", "JSP/mk/getData_paper.jsp", "ds_mk_Paper=ds_mk_Paper", "ds_mk_Paper=ds_mk_Paper", "", "", false, "S", false, this); 			//용지코드
        	this.gfn_TransactionP("select", "JSP/mk/getData_cdPack.jsp", "ds_mk_CDPack=ds_mk_CDPack", "ds_mk_CDPack=ds_mk_CDPack", "", "", false, "S", false, this); 		//CD PACK 코드
        	this.gfn_TransactionP("select", "JSP/mk/getData_cdPrint.jsp", "ds_mk_CDPrint=ds_mk_CDPrint", "ds_mk_CDPrint=ds_mk_CDPrint", "", "", false, "S", false, this); 	//CD PRINT 코드

        	if(Eco.isUndefined(nBookMst_Id) == false){
        		this.getData_BookDtl(nBookMst_Id);
        	}else{
        		this.fctn_Dtl_New(nBookMst_Id);
        		this.set_CD_Visible_Status("");
        		this.set_USE_Processtype_Cost("");
        		this.DivDtl.form.edUseCode.setFocus();
        	}
        };

        //#######################################################
        //  신규로 등록하기
        //#######################################################
        this.fctn_Dtl_New = function(nBookMst_Id)
        {
        	var nRow          = "";

        	// CD/DVD 인쇄형식 작업구분 초기화
        	this.dsBookDtl_CD_PRINT.clearData();
        	for (var j = 0; j < this.ds_mk_CDPrint.rowcount; j++)
        	{
        		this.ds_mk_CDPrint.setColumn(j, "CHK", "0");
        	}

        	switch(this.dsBookDtl.rowposition)
        	{
        	  // -1 이면 레코드가 없는 상태
        	  case -1 : this.dsBookDtl.addRow();
        				break;

        	  default : // 마지막 레코드 입력여부 확인
        	            nRow = this.dsBookDtl.getRowCount()-1;

        	            // 레코드에 내용이 있으면
        	            if (this.fctn_Dtl_CheckRecord(nRow) == true)
        	            {
        					// ROW 추가
        					this.dsBookDtl.addRow();
        				}
        				else
        					// 마지막 레코드로 위치 이동
        					this.dsBookDtl.set_rowposition(this.dsBookDtl.getRowCount()-1);

        				break;
        	}

        	this.DivDtl.form.edUseCode.setFocus();
        }

        // 도서디테일 내역 가져오기
        this.getData_BookDtl = function(nBookMst_Id)
        {
        	str_url = "JSP/mk/mk111f_bookdtl.jsp";
        	in_ds ="dsBookDtl=dsBookDtl";
        	out_ds ="dsBookDtl=dsBookDtl";
        	str_arg = "BOOKMST_ID="+nBookMst_Id;

        	this.gfn_TransactionP("selectDtl", str_url, in_ds, out_ds, str_arg, "Callback_Search", false, "S", false, this);
        };


        this.Callback_Search = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}else{

        		this.fnBookDtl_BindChk(0);

        		if(this.dsBookDtl.rowcount > 0){

        			this.DivDtl.set_visible(true);
        			//CD/DVD 셋팅
        			this.set_CD_Visible_Status(this.dsBookDtl.getColumn(this.dsBookDtl.rowposition, "USE_CODE"));
        			//후가공 셋팅
        			this.set_USE_Processtype_Cost(this.dsBookDtl.getColumn(this.dsBookDtl.rowposition, "USE_CODE"));
        		}
        		else{

        			nBookMst_Id = this.parent.parent.dsBookMst.getColumn(this.parent.parent.dsBookMst.rowposition, "BOOKMST_ID");

        			this.fctn_Dtl_New(nBookMst_Id);
        			this.set_CD_Visible_Status("");
        			this.set_USE_Processtype_Cost("");
        			this.DivDtl.form.edUseCode.setFocus();
        		}
        	}
        };

        /*상세내역 조회*/
        this.DivDtl_DivBtn_btnDSearch_onclick = function(obj,e)
        {
        	nBookMst_Id = this.parent.parent.dsBookMst.getColumn(this.parent.parent.dsBookMst.rowposition, "BOOKMST_ID");
        	this.getData_BookDtl(nBookMst_Id);
        };

        /*상세내역 추가*/
        this.DivDtl_DivBtn_btnDAdd_onclick = function(obj,e)
        {
        	this.dsBookDtl.addRow();
        };

        /*상세내역 저장*/
        this.DivDtl_DivBtn_btnDSave_onclick = function(obj,e)
        {
        	var rtnCheck 	= true;

        	for (var i=0; i <= this.dsBookDtl.rowcount-1; i ++)
        	{
        		if ((this.dsBookDtl.getRowType(i) != "normal") && (this.fctn_Dtl_CheckRecord(i) == false))
        		{
        			this.dsBookDtl.set_rowposition(i);
        			rtnCheck = false;
        			return false;
        			break;
        		}
        	}

        	if(rtnCheck == true){

        		str_url = "JSP/mk/mk111f_bookdtl_dml.jsp";
        		in_ds = "input=dsBookDtl:U";

        		this.gfn_TransactionP("insert", str_url, in_ds, "", "", "fnDtlSaveCallback", false, "P", false, this);
        	}
        };

        //#######################################################
        // 도서 상세내역 저장 콜백
        //#######################################################
        this.fnDtlSaveCallback = function(Trid, ErrorCode, ErrorMsg)
        {
        	if(ErrorCode != 0 )
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}

        	this.dsBookDtl_onrowposchanged();
        }

        //#######################################################
        //  입력값 확인
        //#######################################################
        this.fctn_Dtl_CheckRecord = function(nRow)
        {
        	if (nRow = -1)
        	{
        		return true;
        	}

        	if (this.dsBookDtl.getColumn(nRow, "USE_CODE") == null)
        	{
        		alert("용도를 입력해 주십시요.");
        		this.DivDtl.form.edUseCode.setFocus();
        		return false;
        	}

        	if (this.dsBookDtl.getColumn(nRow, "PPR_CODE") == null)
        	{
        		alert("용지를 입력해 주십시요.");
        		this.DivDtl.form.edPprCode.setFocus();
        		return false;
        	}

        	if (this.dsBookDtl.getColumn(nRow, "COAT_CODE") == null)
        	{
        		alert("코팅을 입력해 주십시요.");
        		this.DivDtl.form.edCoatCd.setFocus();
        		return false;
        	}
        	return true;
        }

        /*상세내역 삭제*/
        this.DivDtl_DivBtn_btnDDel_onclick = function(obj,e)
        {
        	var bRtn = "";
        	bRtn = this.confirm("도서 세부사항 삭제하시겠습니까?", "도서세부사항 삭제");

        	if(bRtn == true)
        	{
        		if (this.dsBookDtl.getColumn(this.dsBookDtl.rowposition, "USE_PROCESSTYPE") == "B")
        			bBindChk = false;

        		//row 삭제
        		this.dsBookDtl.deleteRow(this.dsBookDtl.rowposition);

        		// 저장
        		this.DivDtl_DivBtn_btnDSave_onclick();

        		this.DivDtl.form.grdBookDtl.setFocus();
        	}
        };

        this.dsBookDtl_onrowposchanged = function(obj,e)
        {
        	//톰슨/도무송, 퍼블코팅 버튼 활성화
        	if(this.dsBookDtl.getColumn(this.dsBookDtl.rowposition, "USE_PROCESSTYPE") == "P"){
        		this.DivDtl.form.btnTomson.set_enable(true);
        		this.DivDtl.form.btnTomson.set_background("#FEDF76");
        		this.DivDtl.form.btnTomson.set_color("darkblue");
        	}else{
        		this.DivDtl.form.btnTomson.set_enable(false);
        		this.DivDtl.form.btnTomson.set_background("#999999");
        		this.DivDtl.form.btnTomson.set_color("gray");
        	}

        	if(this.dsBookDtl.getColumn(this.dsBookDtl.rowposition, "USE_PROCESSTYPE") == "C"){
        		this.DivDtl.form.btnPubble.set_enable(true);
        		this.DivDtl.form.btnPubble.set_background("#FEDF76");
        		this.DivDtl.form.btnPubble.set_color("darkblue");
        	}
        	else{
        		this.DivDtl.form.btnPubble.set_enable(false);
        		this.DivDtl.form.btnPubble.set_background("#999999");
        		this.DivDtl.form.btnPubble.set_color("gray");
        	}

        	//후가공 셋팅
        	this.set_USE_Processtype_Cost(this.dsBookDtl.getColumn(this.dsBookDtl.rowposition, "USE_CODE"));
        	// CD/DVD 입력부분 VISIBLE
        	this.set_CD_Visible_Status(this.dsBookDtl.getColumn(this.dsBookDtl.rowposition, "USE_CODE"));
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

        //용도가 후가공일경우 후가공단가 입력 활성화
        this.set_USE_Processtype_Cost = function(strCode)
        {
        	var nRow, vProcessType;

        	nRow = this.ds_mk_use.findRow("USE_CODE", strCode);

        	if(nRow >= 0)
        		vProcessType = this.ds_mk_use.getColumn(nRow, "USE_PROCESSTYPE");
        	else
        		vProcessType = "";

        	if(vProcessType == "A")
        		this.DivDtl.form.medCost.set_visible(true);
        	else
        		this.DivDtl.form.medCost.set_visible(false);
        };

        this.getData_CD_Print = function()
        {
        	this.DivDtl.form.edCdPrint.set_value("");

        	var str_url, in_ds, out_ds, str_arg;

        	str_url = "JSP/mk/mk111f_bookdtl_CD_PRINT.jsp";
        	in_ds = "dsBookDtl_CD_PRINT=dsBookDtl_CD_PRINT";
        	out_ds = "dsBookDtl_CD_PRINT=dsBookDtl_CD_PRINT";
        	str_arg  = "BOOKMST_ID="+ nexacro.wrapQuote(this.dsBookDtl.getColumn(this.dsBookDtl.rowposition,"BOOKMST_ID"));
        	str_arg += " BOOKDTL_SEQ="+ nexacro.wrapQuote(this.dsBookDtl.getColumn(this.dsBookDtl.rowposition,"BOOKDTL_SEQ"));

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_getData_CD_Print", false, "S", false, this);
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

        		if(this.dsBookDtl_CD_PRINT.rowcount > 0){

        			var str_txt = "";

        			for (var i = 0; i < this.dsBookDtl_CD_PRINT.rowcount; i++)
        			{
        				for (var j = 0; j < this.ds_mk_CDPrint.rowcount; j++)
        				{
        					if (this.dsBookDtl_CD_PRINT.getColumn(i, "PRINT_CODE") == this.ds_mk_CDPrint.getColumn(j, "PRINT_CODE"))
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


        //CD/DVD 인쇄형식 다중선택 버튼
        this.DivBookDtl_btnCdPrint_onclick = function(obj,e)
        {
        	strVisibleD = this.DivDtl.form.DivMultiCdPrt.visible;

        	if(strVisibleD == false){
        		this.DivDtl.form.DivMultiCdPrt.set_visible(true);
        	}
        	else{
        		this.DivDtl.form.DivMultiCdPrt.set_visible(false);
        	}
        };


        this.DivBookDtl_DivMultiCdPrt_btnSel2_onclick = function(obj,e)
        {
        	var StrTxt = "";

        	this.dsBookDtl_CD_PRINT.clearData();

        	for(var irow = 0; irow <= this.ds_mk_CDPrint.rowcount; irow++){

        		if (this.ds_mk_CDPrint.getColumn(irow, "CHK") == "1"){
        			this.dsBookDtl_CD_PRINT.addRow();
        			this.dsBookDtl_CD_PRINT.setColumn(this.dsBookDtl_CD_PRINT.rowposition, "PRINT_CODE", this.ds_mk_CDPrint.getColumn(irow, "PRINT_CODE"));
        			this.dsBookDtl_CD_PRINT.setColumn(this.dsBookDtl_CD_PRINT.rowposition, "PRINT_NAME", this.ds_mk_CDPrint.getColumn(irow, "PRINT_NAME"));
        			this.dsBookDtl_CD_PRINT.setColumn(this.dsBookDtl_CD_PRINT.rowposition, "EMPLOYEE_ID", gv_sabun);

        			if(StrTxt == ""){
        				StrTxt = this.ds_mk_CDPrint.getColumn(irow, "PRINT_NAME");
        			}else{
        				StrTxt = StrTxt+", "+this.ds_mk_CDPrint.getColumn(irow, "PRINT_NAME");
        			}
        		}
        	}

        	this.DivDtl.form.edCdPrint.set_value(StrTxt);
        	this.fctn_CD_PRINT_save();
        	this.DivBookDtl_btnCdPrint_onclick("false");
        };

        //#######################################################
        // CD/DVD 인쇄형식내역저장
        //#######################################################
        this.fctn_CD_PRINT_save = function()
        {
        	var in_ds 	= "dsBookDtl_CD_PRINT=dsBookDtl_CD_PRINT:U";
        	var str_url = "JSP/mk/mk111f_bookdtl_CD_PRINT_dml.jsp";

        	for (var i = 0; i <= this.dsBookDtl_CD_PRINT.rowcount-1 ; i++)
        	 {
        		this.dsBookDtl_CD_PRINT.setColumn(i, "BOOKMST_ID", this.dsBookDtl.getColumn(this.dsBookDtl.rowposition, "BOOKMST_ID"));
        		this.dsBookDtl_CD_PRINT.setColumn(i, "BOOKDTL_SEQ", this.dsBookDtl.getColumn(this.dsBookDtl.rowposition, "BOOKDTL_SEQ"));
        	 }

        	trace(this.dsBookDtl_CD_PRINT.saveXML());

        	this.gfn_TransactionP("insert", str_url, in_ds, "", "", "", false, "P", false, this);
        }

        this.DivBookDtl_DivMultiCdPrt_btnCcl2_onclick = function(obj,e)
        {
        	for(var irow = 0; irow <= this.ds_mk_CDPrint.rowcount; irow++){
        		this.ds_mk_CDPrint.setColumn(irow, "CHK", "0");
        	}

        	this.dsBookDtl_CD_PRINT.clearData();
        	this.DivBookDtl_btnCdPrint_onclick("false");
        	this.DivDtl.form.edCdPrint.set_value("");
        };


        //톰슨/도무송, 퍼블코팅 버튼 클릭시
        this.DivBookDtl_btnTomson_onclick = function(obj,e)
        {
        	var nRow = -1;
        	var sRow = -1;
        	var sPSeq, sCmpExpr, sUSE_CODE;
        	var sPPR_CODE 			= "";
        	var sCOAT_CODE 			= "";
        	var sBOOKDTL_BNDSEQ 	= "";
        	var nBOOKDTL_PAGE 		= 0;
        	var nBOOKDTL_BUL 		= 0;
        	var nBOOKDTL_GANGED 	= 0;
        	var nBOOKDTL_TONE1 		= 0;
        	var nBOOKDTL_TONE2 		= 0;
        	var sBOOKMST_ID 		= "";
        	var sBOOKDTL_COMMENT 	= "";
        	var sBOOKDTL_REMARK 	= "";
        	var sBOOKDTL_CTP 		= "0";

        	nRow 	= this.dsBookDtl.rowposition;
        	sPSeq 	= this.dsBookDtl.getColumn(nRow, "BOOKDTL_SEQ");

        	if(obj.name == "btnTomson"){
        		sUSE_CODE	= "68";
        		sCmpExpr 	= "USE_CODE=='" + sUSE_CODE + "'&&BOOKDTL_PSEQ=='" + sPSeq + "'";
        		sCOAT_CODE	= this.dsBookDtl.getColumn(nRow, "COAT_CODE");

        	}else if(obj.name == "btnPubble"){
        		sUSE_CODE	= this.dsBookDtl.getColumn(nRow, "USE_CODE");
        		sCOAT_CODE	= "61";
        		sCmpExpr 	= "COAT_CODE=='" + sCOAT_CODE + "'&&BOOKDTL_PSEQ=='" + sPSeq + "'";
        	}

        	sRow = this.dsBookDtl.findRowExpr(sCmpExpr);

        	if(sRow == -1)
        	{
        		sPPR_CODE		= this.dsBookDtl.getColumn(nRow, "PPR_CODE");
        		sBOOKDTL_BNDSEQ	= this.dsBookDtl.getColumn(nRow, "BOOKDTL_BNDSEQ");
        		nBOOKDTL_PAGE	= this.dsBookDtl.getColumn(nRow, "BOOKDTL_PAGE");
        		nBOOKDTL_BUL	= this.dsBookDtl.getColumn(nRow, "BOOKDTL_BUL");
        		nBOOKDTL_GANGED	= this.dsBookDtl.getColumn(nRow, "BOOKDTL_GANGED");
        		nBOOKDTL_TONE1	= this.dsBookDtl.getColumn(nRow, "BOOKDTL_TONE1");
        		nBOOKDTL_TONE2	= this.dsBookDtl.getColumn(nRow, "BOOKDTL_TONE2");
        		sBOOKMST_ID		= this.dsBookDtl.getColumn(nRow, "BOOKMST_ID");
        		sBOOKDTL_COMMENT= this.dsBookDtl.getColumn(nRow, "BOOKDTL_COMMENT");
        		sBOOKDTL_REMARK	= this.dsBookDtl.getColumn(nRow, "BOOKDTL_REMARK");
        		sBOOKDTL_CTP	= this.dsBookDtl.getColumn(nRow, "BOOKDTL_CTP");


        	this.fnBoolDtl_SetColumns(sUSE_CODE, sPSeq, sPPR_CODE
        		, sCOAT_CODE, sBOOKDTL_BNDSEQ, nBOOKDTL_PAGE, nBOOKDTL_BUL
        		, nBOOKDTL_GANGED, nBOOKDTL_TONE1, nBOOKDTL_TONE2, sBOOKMST_ID
        		, sBOOKDTL_COMMENT, sBOOKDTL_REMARK, sBOOKDTL_CTP);
        	}

        	//세부사양 저장
        	this.DivDtl_DivBtn_btnDSave_onclick();

        };

        //세부사양 추가하기
        this.fnBoolDtl_SetColumns = function(sUSE_CODE, sBOOKDTL_PSEQ, sPPR_CODE
        									, sCOAT_CODE, sBOOKDTL_BNDSEQ, nBOOKDTL_PAGE, nBOOKDTL_BUL
        									, nBOOKDTL_GANGED, nBOOKDTL_TONE1, nBOOKDTL_TONE2, sBOOKMST_ID
        									, sBOOKDTL_COMMENT, sBOOKDTL_REMARK, sBOOKDTL_CTP)
        {
        	var nCurrentRow		= -1;
        	var sBOOKDTL_SEQ;
        	var nPageSum		= 0;

        	// 레코드를 추가시킨후 마지막 레코드로 이동
        	nCurrentRow	= this.dsBookDtl.addRow();

        	// 용도가 제본일 경우 용도별 페이지 합산 여부 확인 후 페이지 합산
        	if (sUSE_CODE != "72")
        		nPageSum	= nBOOKDTL_PAGE;
        	else
        		nPageSum	= this.fnBookDtl_BindPageCnt(nCurrentRow);

        	sBOOKDTL_SEQ	= this.fnPID_BookDtlSeq_Count(this.dsBookDtl, "BOOKDTL_SEQ");

        	this.dsBookDtl.setColumn(nCurrentRow, "BOOKDTL_SEQ", 		sBOOKDTL_SEQ);
        	this.dsBookDtl.setColumn(nCurrentRow, "USE_CODE", 			sUSE_CODE);
        	this.dsBookDtl.setColumn(nCurrentRow, "BOOKDTL_PSEQ", 		sBOOKDTL_PSEQ);
        	this.dsBookDtl.setColumn(nCurrentRow, "PPR_CODE", 			sPPR_CODE);
        	this.dsBookDtl.setColumn(nCurrentRow, "COAT_CODE", 			sCOAT_CODE);
        	this.dsBookDtl.setColumn(nCurrentRow, "BOOKDTL_BNDSEQ", 	sBOOKDTL_BNDSEQ);
        	this.dsBookDtl.setColumn(nCurrentRow, "BOOKDTL_PAGE", 		nPageSum);
        	this.dsBookDtl.setColumn(nCurrentRow, "BOOKDTL_BUL", 		nBOOKDTL_BUL);
        	this.dsBookDtl.setColumn(nCurrentRow, "BOOKDTL_GANGED", 	nBOOKDTL_GANGED);
        	this.dsBookDtl.setColumn(nCurrentRow, "BOOKDTL_TONE1", 		nBOOKDTL_TONE1);
        	this.dsBookDtl.setColumn(nCurrentRow, "BOOKDTL_TONE2", 		nBOOKDTL_TONE2);
        	this.dsBookDtl.setColumn(nCurrentRow, "BOOKMST_ID", 		sBOOKMST_ID);
        	this.dsBookDtl.setColumn(nCurrentRow, "BOOKDTL_COMMENT", 	sBOOKDTL_COMMENT);
        	this.dsBookDtl.setColumn(nCurrentRow, "BOOKDTL_REMARK", 	sBOOKDTL_REMARK);
        	this.dsBookDtl.setColumn(nCurrentRow, "BOOKDTL_CTP", 		sBOOKDTL_CTP);
        	this.dsBookDtl.setColumn(nCurrentRow, "USE_PROCESSTYPE", 	this.DivDtl.form.grdBookDtl.getCellText(nCurrentRow, 11));
        };



        //#######################################################
        // 제본 페이지 구하기
        //#######################################################
        this.fnBookDtl_BindPageCnt = function(nCurrentRow)
        {
        	var nSumPage	= 0;
        	var nUseCode = this.dsBookDtl.getColumn(nCurrentRow, "USE_CODE");

        	if(nUseCode == null || nUseCode == "")
        		return false;

        	for (var nRow = 0 ; nRow < this.dsBookDtl.rowcount(); nRow++)
        	{
        		if ( (this.DivDtl.form.grdBookDtl.GetCellText(nRow, 12) == "1") &&  // 페이지 카운트
        		     (this.dsBookDtl.getColumn( nRow, "BOOKDTL_BNDSEQ") != 0) )
        			nSumPage += nexacro.toNumber(this.dsBookDtl.getColumn(nRow, "BOOKDTL_PAGE"));
        	}

        	if (nSumPage != this.dsBookDtl.getColumn(this.dsBookDtl.findRow("USE_CODE", "72"), "BOOKDTL_PAGE"))
        		this.dsBookDtl.setColumn(this.dsBookDtl.findRow("USE_CODE", "72"), "BOOKDTL_PAGE", nSumPage);

        	this.dsBookDtl.rowposition = nCurrentRow;

        	return nSumPage;
        }

        //내부 DataSet에서 순번 최대값 구하기
        this.fnPID_BookDtlSeq_Count = function(dsF, ColumnNm)
        {
        	var sMaxSeq	= "";

        	sMaxSeq = dsF.getMax(ColumnNm);

        	if(sMaxSeq == "NaN" || Eco.isUndefined(sMaxSeq) == true )
        		sMaxSeq = 0;

        	sMaxSeq = (nexacro.toNumber(sMaxSeq)+1).toString();
        	sMaxSeq = sMaxSeq.padLeft(2, "0");

        	return sMaxSeq;
        }

        //제본(제책)이 들어 있는지 체크
        this.fnBookDtl_BindChk = function(nRow)
        {
        	bBindChk = false;

        	for (var i = 0 ; i < this.dsBookDtl.rowcount; i++)
        	{
        		if (this.dsBookDtl.getColumn(i, "USE_PROCESSTYPE") == "B")
        		{
        			bBindChk = true;
        			break;
        		}
        	}

        	this.dsBookDtl.set_rowposition(nRow);
        };

        //#######################################################
        // 페이지 수정시 총페이지 다시구하기
        //#######################################################
        this.dsBookDtl_oncolumnchanged = function(obj,e)
        {
        	if ((this.dsBookDtl.getColumn(e.row, "USE_CODE") == "") || (this.dsBookDtl.getColumn(e.row, "USE_CODE") == null))
        		return false;

        	var iBodyPage = this.dsBookDtl.getCaseSum("USE_PROCESSTYPE=='P'&&((USE_CODE=='51'||USE_CODE=='52'||USE_CODE=='79')&&(BOOKDTL_BNDSEQ!='0'))","BOOKDTL_PAGE");

        	//도서마스터 본문PAGE 수정
        	this.parent.parent.dsBookMst.setColumn(this.parent.parent.dsBookMst.rowposition, "BOOKMST_BODYPAGE", iBodyPage);

        	//도서마스터 본문대수 재계산
        	this.parent.parent.edSignatue_onsetfocus(this.parent.parent.edSignatue);

        	if((e.columnid == "BOOKDTL_PAGE") || (e.columnid == "BOOKDTL_BNDSEQ")){

        		var iBodyPage = this.dsBookDtl.getCaseSum("USE_PROCESSTYPE=='P'&&((USE_CODE=='51'||USE_CODE=='52'||USE_CODE=='79')&&(BOOKDTL_BNDSEQ!='0'))","BOOKDTL_PAGE");

        		if(iBodyPage != this.parent.parent.dsBookMst.getColumn(this.parent.parent.dsBookMst.rowposition, "BOOKMST_BODYPAGE"))
        			this.parent.parent.dsBookMst.setColumn(this.parent.parent.dsBookMst.rowposition, "BOOKMST_BODYPAGE", iBodyPage);

        		this.parent.parent.edSignatue_onsetfocus(this.parent.parent.edSignatue);

        		var iBindPage = this.dsBookDtl.getCaseSum("USE_PAGECNT=='1'&&BOOKDTL_BNDSEQ!='0'","BOOKDTL_PAGE");

        		if(iBindPage != this.dsBookDtl.getColumn(this.dsBookDtl.findRow("USE_CODE", "72"), "BOOKDTL_PAGE"))
        			this.dsBookDtl.setColumn(this.dsBookDtl.findRow("USE_CODE", "72"), "BOOKDTL_PAGE", iBindPage);

        	}

        };

        //도서 세부내역 addRow시 타는 이벤트
        this.dsBookDtl_onrowsetchanged = function(obj,e)
        {
        	var sBOOKDTL_SEQ;

        	sBOOKDTL_SEQ = this.fnPID_BookDtlSeq_Count(this.dsBookDtl, "BOOKDTL_SEQ");

        	//dsBookMst AddRow 할 경우 기본 setting
        	if(e.reason == Dataset.REASON_APPEND){

        		this.dsBookDtl.setColumn(e.row, "BOOKDTL_SEQ", sBOOKDTL_SEQ);
        		this.dsBookDtl.setColumn(e.row, "USE_CODE", "");
        		this.dsBookDtl.setColumn(e.row, "BOOKDTL_PSEQ", sBOOKDTL_SEQ);
        		this.dsBookDtl.setColumn(e.row, "PPR_CODE", "0000");
        		this.dsBookDtl.setColumn(e.row, "COAT_CODE", "");
        		this.dsBookDtl.setColumn(e.row, "EMPLOYEE_ID", gv_sabun);
        		this.dsBookDtl.setColumn(e.row, "BOOKDTL_REGDATE", "");
        		this.dsBookDtl.setColumn(e.row, "BOOKDTL_BNDSEQ", e.row);
        		this.dsBookDtl.setColumn(e.row, "BOOKDTL_PAGE", 0);
        		this.dsBookDtl.setColumn(e.row, "BOOKDTL_BUL", 0);
        		this.dsBookDtl.setColumn(e.row, "BOOKDTL_GANGED", 0);
        		this.dsBookDtl.setColumn(e.row, "BOOKDTL_TONE1", 0);
        		this.dsBookDtl.setColumn(e.row, "BOOKDTL_TONE2", 0);
        		this.dsBookDtl.setColumn(e.row, "BOOKMST_ID", nBookMst_Id);
        		this.dsBookDtl.setColumn(e.row, "BOOKDTL_COMMENT", "");
        		this.dsBookDtl.setColumn(e.row, "BOOKDTL_REMARK", "");
        		this.dsBookDtl.setColumn(e.row, "BOOKDTL_CTP", "0");
        	}
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
        };

        //세부사항 그리드 변경이벤트
        this.DivDtl_grdBookDtl_onkeydown = function(obj,e)
        {
        	if(e.keycode == 27){
        		this.DivDtl_DivBtn_btnDClose_onclick();
        	}else if(e.keycode == 13){
        		this.DivDtl.form.edUseCode.setFocus();
        		this.DivDtl.form.edUseCode.setSelect(0, -1);
        	}else if(e.keycode == 46){
        		this.DivDtl_DivBtn_btnDDel_onclick();
        	}

        	this.set_USE_Processtype_Cost(this.dsBookDtl.getColumn(this.dsBookDtl.rowposition, "USE_CODE"));
        	this.set_CD_Visible_Status(this.dsBookDtl.getColumn(this.dsBookDtl.rowposition, "USE_CODE"));
        };

        //세부사항 그리드 클릭이벤트
        this.DivDtl_grdBookDtl_oncellclick = function(obj,e)
        {
        	this.set_USE_Processtype_Cost(this.dsBookDtl.getColumn(e.row, "USE_CODE"));
        	this.set_CD_Visible_Status(this.dsBookDtl.getColumn(e.row, "USE_CODE"));
        };

        //용도 변경 이벤트
        this.DivDtl_edUseCode_canchange = function(obj,e)
        {
        	this.dsBookDtl.setColumn(this.dsBookDtl.rowposition, "USE_PROCESSTYPE", this.ds_mk_use.getColumn(this.ds_mk_use.rowposition, "USE_PROCESSTYPE"));
        	this.set_CD_Visible_Status(e.postvalue);
        	this.set_USE_Processtype_Cost(e.postvalue);
        	this.set_usecode_onchange(e.postvalue);
        };


        this.DivDtl_cbUseCode_canitemchange = function(obj,e)
        {
        	this.dsBookDtl.setColumn(this.dsBookDtl.rowposition, "USE_PROCESSTYPE", this.ds_mk_use.getColumn(this.ds_mk_use.rowposition, "USE_PROCESSTYPE"));
        	this.set_CD_Visible_Status(e.postvalue);
        	this.set_USE_Processtype_Cost(e.postvalue);
        	this.set_usecode_onchange(e.postvalue);
        };

        //용도변경시 알판 1장기본값, 선택된비고 없애기
        this.set_usecode_onchange = function(strCode)
        {
            if(strCode == "16" || strCode == "64")//CD/DVD활성화
        	{
        		this.dsBookDtl.setColumn(this.dsBookDtl.rowposition, "CD_COUNT", 1);
        	}
        	else
        	{
        		this.dsBookDtl.setColumn(this.dsBookDtl.rowposition, "CD_COUNT", 0);
        	}
        };

        //도서 세부사항 비고 변경 이벤트
        this.DivDtl_edRemark_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.DivDtl.form.grdBookDtl.setFocus();

        		var nRow = this.dsBookDtl.rowposition;
        		var arrRows;
        		// 같은 SEQ값을 찾아 배열로 저장
        		arrRows = this.dsBookDtl.extractRows("BOOKDTL_PSEQ =="+ this.dsBookDtl.getColumn(nRow, "BOOKDTL_SEQ"));

        		//가공으로 추가된 자식Row가 없으면 추가 배열갯수로 자식Row 확인
        		if(arrRows.length == 1)
        		{
        			this.fnBookDtl_UseAddRow(nRow,
        								  this.dsBookDtl.getColumn(nRow, "USE_CODE"),
        								  this.dsBookDtl.getColumn(nRow, "USE_PROCESSTYPE"),
        								  this.dsBookDtl.getColumn(nRow, "COAT_CODE"));

        		}

        		if(this.dsBookDtl.getRowCount()-1 != this.dsBookDtl.rowposition){
        			// 세부사양 자식 코드 동시 수정
        			this.fctn_Dtl_PSeq_Save(this.dsBookDtl.rowposition);
        			// 다음 레코드로 이동
        			this.dsBookDtl.set_rowposition(this.dsBookDtl.rowposition+1);
        		}

        		this.DivDtl_DivBtn_btnDSave_onclick();

        	}else if(e.keycode == 27){
        		this.DivDtl.setFocus();
        	}
        };

        //용지코드 변경 이벤트
        this.DivDtl_edPprCode_onkeydown = function(obj,e)
        {
        	if((this.DivDtl.form.edPprCode.maxlength == this.DivDtl.form.edPprCode.text.length) && e.keycode == 13){

        		var i = this.ds_mk_Paper.findRow("PPR_CODE", this.DivDtl.form.edPprCode.value);

        		if( i == -1){
        			alert("용지를 찾을 수 없습니다.");
        			this.DivDtl.form.edPprCode.set_value("");
        		}else{
        			this.DivDtl.form.cbPprCode.index = i;
        			this.fctn_Dtl_PSeq_Save(this.dsBookDtl.rowposition);
        			this.DivDtl.form.cbPprCode.setFocus();
        		}

        	}else if(e.keycode == 27){

        		this.DivDtl.form.grdBookDtl.setFocus();
        	}

        };

        //#######################################################
        // 용도 작업시 코팅 추가 루틴
        //#######################################################
        this.fnBookDtl_UseAddRow = function(nRow, sUse_Code, sUse_ProcessType, sCoat_Code)
        {
        	var sUSE_PUSE_CODE 		= "";
        	var sBOOKDTL_SEQ 		= "";
        	var sUSE_PUSE_CODE 		= "";
        	var sBOOKDTL_PSEQ 		= "";
        	var sPPR_CODE 			= "";
        	var sBOOKDTL_BNDSEQ 	= "";
        	var nBOOKDTL_PAGE 		= 0;
        	var nBOOKDTL_BUL 		= 0;
        	var nBOOKDTL_GANGED 	= 0;
        	var nBOOKDTL_TONE1 		= 0;
        	var nBOOKDTL_TONE2 		= 0;
        	var sBOOKMST_ID 		= "";
        	var sBOOKDTL_COMMENT 	= "";
        	var sBOOKDTL_REMARK 	= "";
        	var sBOOKDTL_CTP 		= "0";

        	sBOOKDTL_PSEQ	= this.dsBookDtl.getColumn(nRow, "BOOKDTL_SEQ");
        	sPPR_CODE		= this.dsBookDtl.getColumn(nRow, "PPR_CODE");
        	sCOAT_CODE		= this.dsBookDtl.getColumn(nRow, "COAT_CODE");
        	sBOOKDTL_BNDSEQ	= this.dsBookDtl.getColumn(nRow, "BOOKDTL_BNDSEQ");
        	nBOOKDTL_PAGE	= this.dsBookDtl.getColumn(nRow, "BOOKDTL_PAGE");
        	nBOOKDTL_BUL	= this.dsBookDtl.getColumn(nRow, "BOOKDTL_BUL");
        	nBOOKDTL_GANGED	= this.dsBookDtl.getColumn(nRow, "BOOKDTL_GANGED");
        	nBOOKDTL_TONE1	= this.dsBookDtl.getColumn(nRow, "BOOKDTL_TONE1");
        	nBOOKDTL_TONE2	= this.dsBookDtl.getColumn(nRow, "BOOKDTL_TONE2");
        	sBOOKMST_ID		= this.dsBookDtl.getColumn(nRow, "BOOKMST_ID");
        	sBOOKDTL_COMMENT= this.dsBookDtl.getColumn(nRow, "BOOKDTL_COMMENT");
        	sBOOKDTL_REMARK	= this.dsBookDtl.getColumn(nRow, "BOOKDTL_REMARK");
        	sBOOKDTL_CTP	= this.dsBookDtl.getColumn(nRow, "BOOKDTL_CTP");

        	// 스티커 가공추가로 가공코드가 들어가 있는 것을 가공용도로 추가한다. 2012.6.28
        	if ( sCoat_Code != "00" )
        	{
        		//인쇄코드와 연관된 코팅코드 가져오기
        		sUSE_PUSE_CODE 	= this.ds_mk_use.lookup("USE_CODE", sUse_Code, "USE_PUSE_CODE");

        		if (sUSE_PUSE_CODE != null)
        		{
        			// 코팅코드 변경
        			this.dsBookDtl.setColumn(nRow, "COAT_CODE", "00");

        			// 레코드 추가하기
        			this.fnBoolDtl_SetColumns( sUSE_PUSE_CODE
        									, sBOOKDTL_PSEQ
        									, sPPR_CODE
        									, sCOAT_CODE
        									, sBOOKDTL_BNDSEQ
        									, nBOOKDTL_PAGE
        									, nBOOKDTL_BUL
        									, nBOOKDTL_GANGED
        									, nBOOKDTL_TONE1
        									, nBOOKDTL_TONE2
        									, sBOOKMST_ID
        									, sBOOKDTL_COMMENT
        									, sBOOKDTL_REMARK
        									, sBOOKDTL_CTP);
        		}
        	}

        	if ( sUse_ProcessType == "P" )
        	{
        		//사양에 제본이 없고, 표지일 경우 제본등록
        		if ((bBindChk == false) && (sUse_Code = "21"))
        		{
        			// 레코드 추가하기  sBOOKDTL_SEQ
        			this.fnBoolDtl_SetColumns( "72"
        			                    , sBOOKDTL_PSEQ
        			                    , "0000"
        			                    , "00"
        			                    , nexacro.toNumber(sBOOKDTL_PSEQ)
        			                    , 0
        								, 0
        								, 0
        								, 0
        								, 0
        								, sBOOKMST_ID
        								, ""
        								, ""
        								, "0");
        			bBindChk = true;
        		}
        	}
        }

        //#######################################################
        // 세부사양 동시 수정
        //#######################################################
        this.fctn_Dtl_PSeq_Save = function(nRow)
        {
        	var sSeq = this.dsBookDtl.getColumn(nRow, "BOOKDTL_SEQ");
        	var sPPR_CODE, nBOOKDTL_PAGE, nBOOKDTL_BUL, nBOOKDTL_GANGED, nBOOKDTL_TONE1, nBOOKDTL_TONE2;

        	if ((this.dsBookDtl.getColumn(nRow, "BOOKDTL_SEQ") == this.dsBookDtl.getColumn(nRow, "BOOKDTL_PSEQ")) &&
        	     this.ds_mk_use.lookup("USE_CODE", this.dsBookDtl.getColumn(nRow, "USE_CODE"), "USE_PUSE_CODE") != null)
        	{
        		/* 부모 코드에 의한 변경값 설정 (인쇄용도)*/
        		sPPR_CODE       = this.dsBookDtl.getColumn(nRow, "PPR_CODE");
        		nBOOKDTL_PAGE   = this.dsBookDtl.getColumn(nRow, "BOOKDTL_PAGE");
        		nBOOKDTL_BUL    = this.dsBookDtl.getColumn(nRow, "BOOKDTL_BUL");
        		nBOOKDTL_GANGED = this.dsBookDtl.getColumn(nRow, "BOOKDTL_GANGED");
        		nBOOKDTL_TONE1  = this.dsBookDtl.getColumn(nRow, "BOOKDTL_TONE1");
        		nBOOKDTL_TONE2  = this.dsBookDtl.getColumn(nRow, "BOOKDTL_TONE2");

        		for (nRow = 0 ; nRow < this.dsBookDtl.rowcount; nRow++)
        		{
        			if ( this.dsBookDtl.getColumn(nRow, "BOOKDTL_PSEQ") == sSeq )
        			{
        				if ((this.dsBookDtl.getColumn(nRow, "USE_PROCESSTYPE") == "P") ||
        				    (this.dsBookDtl.getColumn(nRow, "USE_PROCESSTYPE") == "C") ||
        				    (this.dsBookDtl.getColumn(nRow, "USE_CODE") == "68"))
        				{
        					this.dsBookDtl.setColumn(nRow, "PPR_CODE"		, sPPR_CODE);
        					this.dsBookDtl.setColumn(nRow, "BOOKDTL_PAGE"	, nBOOKDTL_PAGE);
        					this.dsBookDtl.setColumn(nRow, "BOOKDTL_BUL"	, nBOOKDTL_BUL);
        					this.dsBookDtl.setColumn(nRow, "BOOKDTL_GANGED"	, nBOOKDTL_GANGED);
        					this.dsBookDtl.setColumn(nRow, "BOOKDTL_TONE1"	, nBOOKDTL_TONE1);
        					this.dsBookDtl.setColumn(nRow, "BOOKDTL_TONE2"	, nBOOKDTL_TONE2);
        				}
        			}
        		}
        	}
        }

        //CD/DVD 포장형식 변경이벤트
        this.DivDtl_cbPackCd_canitemchange = function(obj,e)
        {
        	if(e.postvalue >= 15){
        		if(e.postvalue == 33 || e.postvalue == 34 || e.postvalue == 35)
        			this.DivDtl.form.ckDvdJacket.set_value(false);
        		else
        			this.DivDtl.form.ckDvdJacket.set_value(true);
        	}else{
        		this.DivDtl.form.ckDvdJacket.set_value(false);
        	}
        };

        //#######################################################
        // 도서관리 세부사항 창 닫기
        //#######################################################
        this.DivDtl_DivBtn_btnDClose_onclick = function(obj,e)
        {
        	this.parent.parent.btnSave_onclick();

        	// 세부사항 조회후 돌아갈때 다음 칸으로 자동 이동
        	if (this.parent.parent.dsBookMst.rowposition < this.parent.parent.dsBookMst.getRowCount()-1 )
        		this.parent.parent.dsBookMst.set_rowposition(this.parent.parent.dsBookMst.getRowCount());

        	this.parent.parent.grdBookMst.setFocus();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkDtlMain_onload,this);
            this.addEventHandler("ontimer",this.MkDtlMain_ontimer,this);
            this.addEventHandler("onsize",this.MkDtlMain_onsize,this);
            this.DivDtl.form.edUseCode.addEventHandler("canchange",this.DivDtl_edUseCode_canchange,this);
            this.DivDtl.form.cbUseCode.addEventHandler("canitemchange",this.DivDtl_cbUseCode_canitemchange,this);
            this.DivDtl.form.edPprCode.addEventHandler("onkeydown",this.DivDtl_edPprCode_onkeydown,this);
            this.DivDtl.form.btnTomson.addEventHandler("onclick",this.DivBookDtl_btnTomson_onclick,this);
            this.DivDtl.form.btnPubble.addEventHandler("onclick",this.DivBookDtl_btnTomson_onclick,this);
            this.DivDtl.form.cbPackCd.addEventHandler("canitemchange",this.DivDtl_cbPackCd_canitemchange,this);
            this.DivDtl.form.edRemark.addEventHandler("onkeydown",this.DivDtl_edRemark_onkeydown,this);
            this.DivDtl.form.grdBookDtl.addEventHandler("onkeydown",this.DivDtl_grdBookDtl_onkeydown,this);
            this.DivDtl.form.grdBookDtl.addEventHandler("oncellclick",this.DivDtl_grdBookDtl_oncellclick,this);
            this.DivDtl.form.btnCdPrint.addEventHandler("onclick",this.DivBookDtl_btnCdPrint_onclick,this);
            this.DivDtl.form.DivMultiCdPrt.form.btnSel2.addEventHandler("onclick",this.DivBookDtl_DivMultiCdPrt_btnSel2_onclick,this);
            this.DivDtl.form.DivMultiCdPrt.form.btnCcl2.addEventHandler("onclick",this.DivBookDtl_DivMultiCdPrt_btnCcl2_onclick,this);
            this.DivDtl.form.DivBtn.form.btnDSearch.addEventHandler("onclick",this.DivDtl_DivBtn_btnDSearch_onclick,this);
            this.DivDtl.form.DivBtn.form.btnDAdd.addEventHandler("onclick",this.DivDtl_DivBtn_btnDAdd_onclick,this);
            this.DivDtl.form.DivBtn.form.btnDSave.addEventHandler("onclick",this.DivDtl_DivBtn_btnDSave_onclick,this);
            this.DivDtl.form.DivBtn.form.btnDDel.addEventHandler("onclick",this.DivDtl_DivBtn_btnDDel_onclick,this);
            this.DivDtl.form.DivBtn.form.btnDClose.addEventHandler("onclick",this.DivDtl_DivBtn_btnDClose_onclick,this);
            this.dsBookDtl.addEventHandler("onrowposchanged",this.dsBookDtl_onrowposchanged,this);
            this.dsBookDtl.addEventHandler("onrowsetchanged",this.dsBookDtl_onrowsetchanged,this);
            this.dsBookDtl.addEventHandler("oncolumnchanged",this.dsBookDtl_oncolumnchanged,this);
        };
        this.loadIncludeScript("MK111_DTL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
