(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MkMain");
            this.set_titletext("도서코드관리");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSeparateBind", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_Separate_Binding", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"BND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BND_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_BookSale", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">판매</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">교사</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_plate", this);
            obj._setContents("<ColumnInfo><Column id=\"PLT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_BNDSIGNATURE\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_PRNSIGNATURE\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_HEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_DISABLED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_binding", this);
            obj._setContents("<ColumnInfo><Column id=\"BND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BND_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"BND_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BND_PRCSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"BND_DISABLED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBookMst", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_PID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_ORDID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_SALE\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_BASIC_FOLD\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_SIGNATURE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_BODYPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_REGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_MODIDATE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKTBKIND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BMI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_HEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_BookType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBookDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKDTL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"USE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_PSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COAT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_REGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_MODIDATE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_BNDSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_BUL\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_GANGED\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_TONE1\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_TONE2\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKDTL_CTP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PAGECNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PACK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PRINT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DVD_JACKET\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COUNT_BOTH\" type=\"STRING\" size=\"256\"/><Column id=\"COST\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBookMstSize", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_HEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new TextArea("txaBigo","100","273","489","75",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_wordWrap("char");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","10","312","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("도서코드관리");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","422","32","50","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("내용\r\n추가");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","479","31","50","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete","536","31","50","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("grdBookMst","13","353","576",null,null,"10",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsBookMst");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"29\" band=\"left\"/><Column size=\"97\" band=\"left\"/><Column size=\"47\" band=\"left\"/><Column size=\"33\" band=\"left\"/><Column size=\"232\"/><Column size=\"80\"/><Column size=\"55\"/><Column size=\"75\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"도서코드\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"연판\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"순번\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"도서명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"도서구분\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"판매구분\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"판형\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" text=\"제본\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"9\" text=\"본문대수\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"10\" text=\"본문페이지\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:BOOKMST_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" editmaxlength=\"10\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:BOOKMST_YEAR\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:BOOKMST_SEQ\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:BOOKMST_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"bind:BOOKMST_TYPE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_mk_BookType\" combodatacol=\"NAME\" combocodecol=\"CODE\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:BOOKMST_SALE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" combodataset=\"ds_mk_BookSale\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"combotext\" edittype=\"combo\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:PLT_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"ds_mk_plate\" combocodecol=\"PLT_CODE\" combodatacol=\"PLT_NAME\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:BND_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_mk_binding\" combocodecol=\"BND_CODE\" combodatacol=\"BND_NAME\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:BOOKMST_SIGNATURE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:BOOKMST_BODYPAGE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("StSearch","13","88","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("도서코드");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("StSearch00","13","162","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("판형");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edBookCode","100","88","89","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edBookYear","229","88","44","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("StSearch01","276","88","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("도서명");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edBookName","363","88","226","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("StSearch01_00","13","125","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("도서구분");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edBookMstType","100","125","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_text("expr:");
            this.addChild(obj.name, obj);

            obj = new Combo("cbBookMstType","136","125","137","35",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_mk_BookType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("StSearch00_00","276","162","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("대표규격");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edBookSeq","190","88","38","35",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("3");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("StSearch01_00_00","276","125","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("판매구분");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edBookMstSale","363","125","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbBookMstSale","400","125","189","35",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_mk_BookSale");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edPltCode","100","162","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbPltCode","136","162","137","35",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_mk_plate");
            obj.set_codecolumn("PLT_CODE");
            obj.set_datacolumn("PLT_NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edWidth","363","162","101","35",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edHeight","493","162","96","35",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","475","157","25","38",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("*");
            this.addChild(obj.name, obj);

            obj = new Static("StSearch01_00_01","13","199","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("제본");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edBndCode","100","199","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbBndCode","136","199","137","35",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_innerdataset("ds_mk_binding");
            obj.set_codecolumn("BND_CODE");
            obj.set_datacolumn("BND_NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("StSearch01_00_01_00","276","199","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("추가부록제본");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("StSearch00_01","13","236","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("본문쪽수");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edBodyPage","100","236","173","35",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("StSearch00_01_00","276","236","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("본문대수");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edSignatue","363","236","226","35",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("StSearch01_00_01_01","13","273","85","75",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("비고");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","366","32","50","50",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSepBind","363","199","190","35",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_enable("false");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnMultiSel","554","199","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("▼");
            this.addChild(obj.name, obj);

            obj = new Div("DivMultiSel","367","272","221","225",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_background("#e8e7e3");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","7","7","206","175",null,null,null,null,null,null,this.DivMultiSel.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_mk_Separate_Binding");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"0\"/><Column size=\"172\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:BND_CODE\"/><Cell col=\"2\" text=\"bind:BND_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\"/></Band></Format></Formats>");
            this.DivMultiSel.addChild(obj.name, obj);

            obj = new Button("btnSel","375","458","99","34",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("선택적용");
            obj.set_font("bold 12px/normal \"함초롬돋움\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCcl","481","458","99","34",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("선택해제");
            obj.set_font("bold 12px/normal \"함초롬돋움\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("DivBookDtl","605","86",null,null,"0.00%","0.00%",null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_url("mk::MK111_DTL.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","596","30","2",null,null,"0%",null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_background("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Button("btnCopy","1206","20","50","50",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("복사");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnBookList","1140","20","50","50",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("구조");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edBookCode","value","dsBookMst","BOOKMST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edBookYear","value","dsBookMst","BOOKMST_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edBookName","value","dsBookMst","BOOKMST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edBookSeq","value","dsBookMst","BOOKMST_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edBookMstType","value","dsBookMst","BOOKMST_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cbBookMstType","value","dsBookMst","BOOKMST_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edBookMstSale","value","dsBookMst","BOOKMST_SALE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edPltCode","value","dsBookMst","PLT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edBndCode","value","dsBookMst","BND_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","cbPltCode","value","dsBookMst","PLT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","cbBndCode","value","dsBookMst","BND_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edWidth","value","dsBookMst","PPR_WIDTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edHeight","value","dsBookMst","PPR_HEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edBodyPage","value","dsBookMst","BOOKMST_BODYPAGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edSignatue","value","dsBookMst","BOOKMST_SIGNATURE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","txaBigo","value","dsBookMst","BOOKMST_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","cbBookMstSale","value","dsBookMst","BOOKMST_SALE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","mk::MK111_DTL.xfdl");
        };
        
        // User Script
        this.addIncludeScript("MK111.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK111.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK111.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var nRow;
        var nSaveRow = -1;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerDML, vPerDel, vPerPRT;
        var vStr, strVisible, nBookMst_Id, rtnBOOKMST_ID;
        var sSaveBookMstCode, sSaveBookMstYear, sSaveBookMstSeq;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var bSearchCopySet  = false;        // 조회시 순수 검색인지 복사 검색인지 체크
        var aQryReturn 	= Array();			// 조회조건을 인쇄조건으로 넘기는 배열

        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", nexacro.getApplication().gv_selectMenu);

        	//vPerSel = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_SELECT");
        	vPerDML = "U";
        	vPerDel = "D";

        	//if(vPerSel = "0"){
        	//	this.btnSearch.set_enable(false);
        	//}else{

        		this.gfn_TransactionP("select","JSP/mk/Binding_Separate_Select.jsp", "ds_mk_Separate_Binding=ds_mk_Separate_Binding", "ds_mk_Separate_Binding=ds_mk_Separate_Binding", "", "", false, "S", false, this);	//별책 제본코드
        		this.gfn_TransactionP("select","JSP/mk/BookType_Select.jsp", "ds_mk_BookType=ds_mk_BookType", "ds_mk_BookType=ds_mk_BookType", "", "", false, "S", false, this);
        		this.gfn_TransactionP("select", "JSP/mk/getData_plate.jsp", "ds_mk_plate=ds_mk_plate", "ds_mk_plate=ds_mk_plate", "", "", false, "S", false, this); 			//판형코드
        		this.gfn_TransactionP("select", "JSP/mk/getData_bind.jsp", "ds_mk_binding=ds_mk_binding", "ds_mk_binding=ds_mk_binding", "", "", false, "S", false, this); 		//제본코드

        	//}
        };

        this.MkMain_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.MkMain_ontimer = function(obj,e)
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

        //조회 이벤트
        this.btnSearch_onclick = function(obj,e)
        {
        	var objParam = {dsParam1:this.dsBookMst}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupSearch", objParam, "mk::MK111_SearchF.xfdl", "popupCallBack", this, 10, 58, 440, 170);

        	if(this.dsBookMst.rowcount > 0){
        		this.dsBookMst.set_rowposition(1);
        	}
        };

        //저장 이벤트
        this.btnSave_onclick = function(obj,e)
        {
        	var rtnCheck = true;

        	for (var i=0; i <= this.dsBookMst.rowcount-1; i ++)
        	{
        		if ((this.dsBookMst.getRowType(i) == "insert") && (this.dsBookMst.getColumn(i, "BOOKMST_SEQ") == "000"))
        		{
        			alert("순번이 '000'인 도서코드는 저장할 수 없습니다.");
        			rtnCheck = false;
        			break;
        		}

        		if (this.fctn_Mst_CheckRecord(i) == false)
        		{
        			rtnCheck = false;
        			break;
        		}else{
        			rtnCheck = true;
        		}
        	}

        	if(rtnCheck == true){

        		str_url = "JSP/mk/mk111f_bookmst_dml.jsp";
        		in_ds = "input=dsBookMst:U";
        		str_arg = "bookmst_id='" + this.dsBookMst.getColumn(this.dsBookMst.rowposition, "BOOKMST_ID") + "'";

        		this.gfn_TransactionP("insert", str_url, in_ds, "", str_arg, "fctn_BookMstCallBack", false, vPerDML, false, this);

        	}
        };

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

        		if (rtnBOOKMST_ID != null || rtnBOOKMST_ID != "undefined" || rtnBOOKMST_ID != -1)
        		{
        			this.dsBookMst.setColumn(this.dsBookMst.rowposition, "BOOKMST_ID", rtnBOOKMST_ID);
        		}

        		//별책제본저장
        		this.fctn_SeparateBind_save(rtnBOOKMST_ID);

        		//도서mst 재조회
        		//this.fctn_Reload_MstList();
        	}
        }

        //삭제 이벤트
        this.btnDelete_onclick = function(obj,e)
        {
        	var bRtn = "";
        	bRtn = this.confirm("도서 전체 삭제하시겠습니까?", "도서마스터 삭제");

        	if(bRtn == true)
        	{
        		var strArg  = "";
        		var inds 	= "dsBookMst=dsBookMst:U";
        			// 세부사항 들어가기 전 다음 Row 위치 임시변수에.
        		var nNextRow = Eco.decode(this.dsBookMst.rowposition, this.dsBookMst.getRowCount()-1, this.dsBookMst.getRowCount()-2, this.dsBookMst.rowposition);

        		// 삭제
        		this.dsBookMst.deleteRow(this.dsBookMst.rowposition);

        		// 저장
        		this.btnSave_onclick();

        		// 다음Row로 이동
        		this.dsBookMst.set_rowposition(nNextRow);
        	}
        };


        //도서mst 재조회
        this.fctn_Reload_MstList = function(){

        	var strArg  = "";
        	var QrySearch = "";

        	// 조회된 코드로 검색할 것인지 저장한 코드로 조회할 것인지 여부
        	if (bSearchCopySet == true)
        	{
        		strArg 	= "sBOOKMST_CODE=" + nexacro.wrapQuote(sSaveBookMstCode) +
        				  " sBOOKMST_YEAR=" +nexacro.wrapQuote(sSaveBookMstYear ) +
        				  " sBOOKMST_SEQ=" + nexacro.wrapQuote(sSaveBookMstSeq ) +
        				  " eBOOKMST_CODE=" + nexacro.wrapQuote() +
        				  " eBOOKMST_YEAR=" + nexacro.wrapQuote() +
        				  " eBOOKMST_SEQ=" + nexacro.wrapQuote() +
        				  " sBOOKMST_NAME=" + nexacro.wrapQuote();
        	}
        	else
        	{

        	}

        	// 조회조건이 없으면 전체 자료를 읽기 때문에 조건을 체크한다.
        	//for (var j = 0; j<=4 ; j++)
        	//	QrySearch = QrySearch + aQryReturn[j];

        	if (QrySearch != "")
        	{
        		this.gfn_TransactionP("select", "JSP/mk/mk111f_bookmst.jsp", "dsBookMst=dsBookMst", "dsBookMst=dsBookMst", strArg, "fn_BookMst_RefreshCallback", false, "P", false, this);
        	}
        }

        //#######################################################
        // refresh 시 콜백
        //#######################################################
        this.fn_BookMst_RefreshCallback = function(Trid, ErrorCode, ErrorMsg)
        {
        	if(ErrorCode != 0 )
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}
        	else
        	{
        		//별책제본 가져오기
        		this.fctn_SeparateBind_select(Eco.decode(nSaveRow, -1, this.dsBookMst.getRowCount()-1, nSaveRow));
        		//대표규격 가져오기
        		this.fctn_BookmstSize_select(Eco.decode(nSaveRow, -1, this.dsBookMst.getRowCount()-1, nSaveRow));
        	}
        }

        this.fctn_Mst_CheckRecord = function(nRow)
        {
        	if (nRow == -1)
        	{
        		return false;
        	}

        	if (this.dsBookMst.getColumn(nRow, "BOOKMST_CODE").length != this.dsBookMst.getColumnInfo("BOOKMST_CODE").size)
        	{
        		alert("도서코드를 정확히 입력해 주십시요.");
        		this.edBookCode.setFocus();
        		return false;
        	}

        	if ((this.dsBookMst.getColumn(nRow, "BOOKMST_YEAR").length) != this.dsBookMst.getColumnInfo("BOOKMST_YEAR").size)
        	{
        		alert("연판을 정확히 입력해 주십시요.");
        		this.edBookYear.setFocus();
        		return false;
        	}

        	if (this.dsBookMst.getColumn(nRow, "BOOKMST_NAME") == null || this.dsBookMst.getColumn(nRow, "BOOKMST_NAME") == "" || this.dsBookMst.getColumn(nRow, "BOOKMST_NAME") == "undefined")
        	{
        		alert("도서명을 선택해 주십시요.");
        		this.edBookName.setFocus();
        		return false;
        	}

        	if (this.dsBookMst.getColumn(nRow, "BOOKMST_TYPE") == null || this.dsBookMst.getColumn(nRow, "BOOKMST_TYPE") == "" || this.dsBookMst.getColumn(nRow, "BOOKMST_TYPE") == "undefined")
        	{
        		alert("도서구분을 선택해 주십시요.");
        		this.cbBookMstType.dropdown();
        		this.cbBookMstType.setFocus();
        		return false;
        	}

        	if (this.dsBookMst.getColumn(nRow, "PLT_CODE") == null || this.dsBookMst.getColumn(nRow, "PLT_CODE") == "" || this.dsBookMst.getColumn(nRow, "PLT_CODE") == "undefined")
        	{
        		alert("판형을 선택해 주십시요.");
        		this.cbPltCode.dropdown();
        		this.cbPltCode.setFocus();
        		return false;
        	}

        	if (this.dsBookMst.getColumn(nRow, "BND_CODE") == null || this.dsBookMst.getColumn(nRow, "BND_CODE") == "" || this.dsBookMst.getColumn(nRow, "BND_CODE") == "undefined")
        	{
        		alert("제본을 선택해 주십시요.");
        		this.cbBndCode.dropdown();
        		this.cbBndCode.setFocus();
        		return false;
        	}

        	return true;
        }

        //닫기 이벤트
        this.btnClose_onclick = function(obj,e)
        {
        	//세부사항이 없을 경우 -> 전체닫기
        	this.DivBookDtl.set_visible(false);

        };

        this.btnMultiSel_onclick = function(obj,e, strVisible)
        {
        	strVisible = this.DivMultiSel.visible;

        	if(strVisible == false){
        		this.DivMultiSel.set_visible(true);
        		this.btnSel.set_visible(true);
        		this.btnCcl.set_visible(true);
        	}
        	else{
        		this.DivMultiSel.set_visible(false);
        		this.btnSel.set_visible(false);
        		this.btnCcl.set_visible(false);
        	}
        };

        this.btnSel_onclick = function(obj,e)
        {
        	var StrTxt = "";

        	this.dsSeparateBind.clearData();

        	for(var irow = 0; irow <= this.ds_mk_Separate_Binding.rowcount; irow++){

        		if (this.ds_mk_Separate_Binding.getColumn(irow, "CHK") == "1"){
        			this.dsSeparateBind.addRow();
        			this.dsSeparateBind.setColumn(this.dsSeparateBind.rowposition, "BND_CODE", this.ds_mk_Separate_Binding.getColumn(irow, "BND_CODE"));
        			this.dsSeparateBind.setColumn(this.dsSeparateBind.rowposition, "BND_NAME", this.ds_mk_Separate_Binding.getColumn(irow, "BND_NAME"));
        			this.dsSeparateBind.setColumn(this.dsSeparateBind.rowposition, "EMPLOYEE_ID", gv_sabun);

        			if(StrTxt == ""){
        				StrTxt = this.ds_mk_Separate_Binding.getColumn(irow, "BND_NAME");
        			}else{
        				StrTxt = StrTxt+", "+this.ds_mk_Separate_Binding.getColumn(irow, "BND_NAME");
        			}
        		}
        	}

        	this.edtSepBind.set_value(StrTxt);
        	this.btnMultiSel_onclick("false");
        };

        this.btnCcl_onclick = function(obj,e)
        {
        	for(var irow = 0; irow <= this.ds_mk_Separate_Binding.rowcount; irow++){
        		this.ds_mk_Separate_Binding.setColumn(irow, "CHK", "0");
        	}

        	this.dsSeparateBind.clearData();
        	this.btnMultiSel_onclick("false");
        	this.edtSepBind.set_value("");

        };

        //도서MST 그리드 ROW변할 때 자동 도서DTL 조회되도록
        this.dsBookMst_onrowposchanged = function(obj,e)
        {
        	nBookMst_Id = this.dsBookMst.getColumn(obj.rowposition, "BOOKMST_ID");

        	if(nBookMst_Id != null && nBookMst_Id != "" && nBookMst_Id != "undefined")
        	{
        		//별책제본(추가부록제본) 가져오기
        		this.fctn_SeparateBind_select(obj.rowposition);
        		//대표규격 가져오기
        		this.fctn_BookmstSize_select(obj.rowposition);
        		//도서세부사항 가져오기
        		this.DivBookDtl.set_visible(true);
        		this.DivBookDtl.form.getData_BookDtl(nBookMst_Id);

        	}else{

        		this.edtSepBind.set_value("");
        	}
        };

        //추가부록제본
        this.fctn_SeparateBind_select = function(nRow)
        {
        	//EDIT 초기화
        	this.edtSepBind.set_value("");
        	nBookMst_Id = this.dsBookMst.getColumn(nRow, "BOOKMST_ID");

        	str_url = "JSP/mk/SeparateBind.jsp";
        	in_ds = "dsSeparateBind=dsSeparateBind";
        	out_ds = "dsSeparateBind=dsSeparateBind";
        	str_arg = "BOOKMST_ID="+nBookMst_Id;

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnSeparateBindSelectCallback", false, "S", false, this);
        };

        this.fnSeparateBindSelectCallback = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}else{

        		//작업구분 초기화
        		for (var j = 0; j < this.ds_mk_Separate_Binding.rowcount ; j++)
        		{
        			this.ds_mk_Separate_Binding.setColumn(j, "CHK", "0");
        		}

        		if(this.dsSeparateBind.rowcount > 0){

        			var str_txt = "";

        			for (var i = 0; i < this.dsSeparateBind.rowcount; i++)
        			{
        				for (var j = 0; j < this.ds_mk_Separate_Binding.rowcount; j++)
        				{
        					if (this.dsSeparateBind.getColumn(i, "BND_CODE") == this.ds_mk_Separate_Binding.getColumn(j, "BND_CODE"))
        					{
        						this.ds_mk_Separate_Binding.setColumn(j, "CHK", "1");

        						if(str_txt == ""){
        							str_txt = this.ds_mk_Separate_Binding.getColumn(j, "BND_NAME");
        						}else{
        							str_txt = str_txt+", "+this.ds_mk_Separate_Binding.getColumn(j, "BND_NAME");
        						}
        					}
        				}
        			}

        			this.edtSepBind.set_value(str_txt);
        		}
        	}
        }

        //#######################################################
        // 별책제본내역저장
        //#######################################################
        this.fctn_SeparateBind_save = function(rtnBOOKMST_ID)
        {
        	var inds 	= "input=dsSeparateBind:U";
        	var setSave = "";

        	if(rtnBOOKMST_ID != "-1" || this.dsBookMst.getColumn(this.dsBookMst.rowposition, "BOOKMST_ID") != "undefined"){
        		rtnBOOKMST_ID = this.dsBookMst.getColumn(this.dsBookMst.rowposition, "BOOKMST_ID");
        		setSave = true;
        	}

        	for (var i = 0; i <= this.dsSeparateBind.rowcount-1 ; i++)
        	 {
        		this.dsSeparateBind.setColumn(i, "BOOKMST_ID", rtnBOOKMST_ID);
        		this.dsSeparateBind.setColumn(i, "EMPLOYEE_ID", gv_sabun);
        	 }

        	if (setSave == true)
        	{
        		this.gfn_TransactionP("save", "JSP/mk/SeparateBind_dml.jsp", inds, "", "", "fnSeparateBindSaveCallback", false, vPerDML, false, this);
        	}
        }

        //대표규격
        this.fctn_BookmstSize_select = function(nRow)
        {
        	nBookMst_Id = this.dsBookMst.getColumn(nRow, "BOOKMST_ID");

        	str_url = "JSP/mk/BookmstSize.jsp";
        	in_ds = "dsBookMstSize=dsBookMstSize";
        	out_ds = "dsBookMstSize=dsBookMstSize";
        	str_arg = "BOOKMST_ID="+nBookMst_Id;

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnBookmstSizeSelectCallback", false, "S", false, this);
        };

        this.fnBookmstSizeSelectCallback = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}else{

        		if(this.dsBookMstSize.rowcount == 0)
        		{
        			this.dsBookMstSize.addRow();
        			this.dsBookMstSize.setColumn(0, "PPR_WIDTH", 0);
        			this.dsBookMstSize.setColumn(0, "PPR_HEIGHT", 0);

        		}
        	}
        }

        //연도에서 엔터치면 도서조회 자동으로 해서 갖고오게끔
        // 있으면 갖고오고, 없으면 row추가 후 edit에 입력내용 넣어줌
        this.edBookYear_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){

        		if(this.edBookCode.text.length == this.edBookCode.getLength()){

        			var strArg  = "";

        		    sSaveBookMstCode	= this.edBookCode.text;
        		    sSaveBookMstYear	= this.edBookYear.text;
        		    sSaveBookMstSeq 	= this.edBookSeq.text;

        			strArg 	= "sBOOKMST_CODE=" + nexacro.wrapQuote( this.edBookCode.text ) +
        					  " sBOOKMST_YEAR=" + nexacro.wrapQuote( this.edBookYear.text ) +
        					  " sBOOKMST_SEQ=" + nexacro.wrapQuote( this.edBookSeq.text ) +
        					  " eBOOKMST_CODE= '' "+
        					  " eBOOKMST_YEAR= '' "+
        					  " eBOOKMST_SEQ= '' "+
        					  " sBOOKMST_NAME= '' ";

        			this.gfn_TransactionP("select", "JSP/mk/mk111f_bookmst.jsp", "dsBookMst=dsBookMst", "dsBookMst=dsBookMst", strArg, "", false, "S", false, this);

        			if (this.dsBookMst.rowcount == 0)
        			{
        				this.btnNew_OnClick();
        				this.edBookCode.text = sSaveBookMstCode;
        				this.edBookYear.text  = sSaveBookMstYear;
        				this.edBookSeq.text = sSaveBookMstSeq;
        			}

        			this.edBookName.setFocus();

        		}else{

        			alert("도서코드를 정확히 입력해 주십시요.");
        			this.edBookCode.setFocus();
        		}

        	}
        };

        //신규버튼 클릭이벤트
        this.btnNew_onclick = function(obj,e)
        {

        	var sBookMst_Code 	= "";
        	var sBookMst_Year 	= "";
        	var sBookMst_Seq 	= "";
        	var nRow          	= "";

        	switch(this.dsBookMst.rowposition) {
        	// -1 이면 레코드가 없는 상태
        	case -1 : this.dsBookMst.addRow();
        			  break;
        	default:
        			// 마지막 레코드 입력여부 확인
        			nRow = this.dsBookMst.getRowsMax();
        			sBookMst_Code = this.dsBookMst.getColumn(nRow, "BOOKMST_CODE");
        			sBookMst_Year = this.dsBookMst.getColumn(nRow, "BOOKMST_YEAR");
        			sBookMst_Seq  = this.dsBookMst.getColumn(nRow, "BOOKMST_SEQ");

        			// 레코드에 내용이 없으면
        			if ((sBookMst_Code == null) || (sBookMst_Year == null) || (sBookMst_Seq == null))
        			{
        				alert("입력을 완료해 주십시요");
        				// 마지막 레코드로 위치 이동
        				this.dsBookMst.set_rowposition(this.dsBookMst.rowposition-1);
        			}else{
        				this.dsBookMst.addRow();
        			}
        	}
        		this.edBookCode.setFocus();
        };

        this.grdBookMst_onkeydown = function(obj,e)
        {
        	if(e.keycode == "13"){

        	}
        };
        //본문대수 구하기
        this.edSignatue_onsetfocus = function(obj,e)
        {
        	if(this.edPltCode == "00")
        		this.edSignatue.text = 0;
        	else
        		this.edSignatue.text = nexacro.round(nexacro.toNumber(this.edBodyPage.text) / this.ds_mk_plate.lookup("PLT_CODE", this.edPltCode.text, "PLT_PRNSIGNATURE"), 2);
        };

        // 도서 비고사항 키처리
        this.txaBigo_onkeydown = function(obj,e)
        {
        	//ESC버튼 누를 경우
        	if(e.keycode == 27){
        		this.grdBookMst.setFocus();

        		if(this.dsBookMst.rowposition != this.dsBookMst.getRowCount()-1 )
        			this.dsBookMst.set_rowposition(this.dsBookMst.rowposition+1);
        	}// Ctrl + Enter 키일 경우 그리드로
        	else if((e.keycode == 13) && (e.ctrlkey == 1)){
        		this.grdBookMst.setFocus();
        	}
        };

        //제본코드 수정될 경우
        this.cbBndCode_onitemchanged = function(obj,e)
        {
        	this.dsBookMst.setColumn(this.dsBookMst.rowposition, "BOOKMST_BASIC_FOLD", 0);
        };

        //그리드 헤더 CHK 누를경우 이벤트
        this.grdBookMst_onheadclick = function(obj,e)
        {
        	if(obj.currentcol == 0)
        	{
        		for (var nRow = 0; nRow <= this.dsBookMst.rowcount-1; nRow ++ )
        		{
        			if (this.dsBookMst.getColumn(nRow, "CHK") == "1")
        				this.dsBookMst.setColumn(nRow, "CHK", "0");
        			else
        				this.dsBookMst.setColumn(nRow, "CHK", "1");
        		}
        	}
        };



        this.dsBookMst_onrowsetchanged = function(obj,e)
        {
        	//dsBookMst AddRow 할 경우 기본 setting
        	if(e.reason == Dataset.REASON_APPEND){

        		this.dsBookMst.setColumn(e.row, "PLT_CODE", "00");
        		this.dsBookMst.setColumn(e.row, "BOOKMST_TYPE", "02");
        		this.dsBookMst.setColumn(e.row, "BOOKMST_SALE", "0");
        		this.dsBookMst.setColumn(e.row, "BND_CODE", "00");
        		this.dsBookMst.setColumn(e.row, "BOOKMST_SEQ", "001");
        		this.dsBookMst.setColumn(e.row, "EMPLOYEE_ID", gv_sabun);
        		this.dsBookMst.setColumn(e.row, "BOOKMST_SIGNATURE", 0);
        		this.dsBookMst.setColumn(e.row, "BOOKMST_BODYPAGE", 0);
        		this.dsBookMst.setColumn(e.row, "BOOKMST_BASIC_FOLD", 0);
        	}
        };


        this.btnCopy_onclick = function(obj,e)
        {
        	if(this.dsBookMst.rowcount == 0){
        		alert("도서를 먼저 조회해 주십시요.");
        		return false;
        	}

        	var i, cnt=0;
        	for (i=0; i < this.dsBookMst.rowcount; i++)
        	{
        		if(this.dsBookMst.getColumn(i,"CHK") == "1")
        		{
        			cnt++;
        		}
        	}

        	if(cnt == 1 || cnt == 0){

        		var objParam = {dsParam1:this.dsBookMst.getColumn(this.dsBookMst.rowposition, "BOOKMST_CODE")
        						,dsParam2:this.dsBookMst.getColumn(this.dsBookMst.rowposition, "BOOKMST_SEQ")
        						,dsParam3:this.dsBookMst.getColumn(this.dsBookMst.rowposition, "BOOKMST_YEAR")
        						,dsParam4:this.dsBookMst.getColumn(this.dsBookMst.rowposition, "BOOKMST_NAME")};
        			this.lfn_showModal("popupCopyOne", objParam, "mk::MK111_CopyF.xfdl", "popupCallBack", this, '', '', '450', '600' );

        	}else{

        		this.lfn_showModal("popupCopyAll", objParam, "mk::MK111_CopyF_All.xfdl", "popupCallBack", this, '', '', '450', '600' );
        	};

        };

        this.popupCallBack = function(){

        	this.fctn_Reload_MstList();
        }


        this.btnBookList_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkMain_onload,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.txaBigo.addEventHandler("onkeydown",this.txaBigo_onkeydown,this);
            this.btnAdd.addEventHandler("onclick",this.btnNew_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.grdBookMst.addEventHandler("onkeydown",this.grdBookMst_onkeydown,this);
            this.grdBookMst.addEventHandler("onheadclick",this.grdBookMst_onheadclick,this);
            this.edBookYear.addEventHandler("onkeydown",this.edBookYear_onkeydown,this);
            this.cbBndCode.addEventHandler("onitemchanged",this.cbBndCode_onitemchanged,this);
            this.edSignatue.addEventHandler("onsetfocus",this.edSignatue_onsetfocus,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnMultiSel.addEventHandler("onclick",this.btnMultiSel_onclick,this);
            this.btnSel.addEventHandler("onclick",this.btnSel_onclick,this);
            this.btnCcl.addEventHandler("onclick",this.btnCcl_onclick,this);
            this.btnCopy.addEventHandler("onclick",this.btnCopy_onclick,this);
            this.btnBookList.addEventHandler("onclick",this.btnBookList_onclick,this);
            this.dsBookMst.addEventHandler("onrowposchanged",this.dsBookMst_onrowposchanged,this);
            this.dsBookMst.addEventHandler("onrowsetchanged",this.dsBookMst_onrowsetchanged,this);
            this.dsBookDtl.addEventHandler("onrowposchanged",this.dsBookDtl_onrowposchanged,this);
        };
        this.loadIncludeScript("MK111.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
