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
            this.set_titletext("기타외주비 관리 세부사양");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1265,420);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBookMst", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"3\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEtcCostDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"ETCCOSTMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ETCCOSTDTL_SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/><Column id=\"USE_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"USE_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"ETCCOSTDTL_USETYPE\" type=\"STRING\" size=\"1\"/><Column id=\"ETCCOSTDTL_TYPENAME\" type=\"STRING\" size=\"6\"/><Column id=\"ETCCOSTDTL_QTY\" type=\"DECIMAL\" size=\"10\"/><Column id=\"ETCCOSTDTL_UNITCOST\" type=\"DECIMAL\" size=\"9\"/><Column id=\"ETCCOSTDTL_AMOUNT\" type=\"INT\" size=\"9\"/><Column id=\"ETCCOSTDTL_VAT\" type=\"INT\" size=\"8\"/><Column id=\"ETCCOSTDTL_REMARK\" type=\"STRING\" size=\"60\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"PDTDTL_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"PDTDTL_NUMBER\" type=\"STRING\" size=\"4\"/><Column id=\"PDTDTL_DTLNUMBER\" type=\"STRING\" size=\"3\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_use", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_SHEETPRNCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PAGECNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_DISABLED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_UseType", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_TYPE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_TYPE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_TYPE_CODE\">P</Col><Col id=\"USE_TYPE_NAME\">인쇄</Col></Row><Row><Col id=\"USE_TYPE_CODE\">B</Col><Col id=\"USE_TYPE_NAME\">제본</Col></Row><Row><Col id=\"USE_TYPE_CODE\">C</Col><Col id=\"USE_TYPE_NAME\">가공</Col></Row><Row><Col id=\"USE_TYPE_CODE\">A</Col><Col id=\"USE_TYPE_NAME\">후가공</Col></Row><Row><Col id=\"USE_TYPE_CODE\">E</Col><Col id=\"USE_TYPE_NAME\">기타</Col></Row><Row><Col id=\"USE_TYPE_CODE\">I</Col><Col id=\"USE_TYPE_NAME\">부족분</Col></Row><Row><Col id=\"USE_TYPE_CODE\">M</Col><Col id=\"USE_TYPE_NAME\">사고분</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivDtl","0","0","100.00%","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#e8e7e3");
            obj.set_visible("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnBook","21","44","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("18");
            obj.set_text("도서코드");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_background("");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edt_bookCode","btnBook:3","44","8.77%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("1");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edBookSeq","edt_bookCode:3","44","3.79%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("2");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_maxlength("3");
            obj.set_autoselect("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edt_bookYear","edBookSeq:3","44","5.45%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edBookName","edt_bookYear:3","44","25.22%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("4");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("left");
            obj.set_autoselect("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stBook","edBookName:3","44","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("0");
            obj.set_text("용도구분");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stQty","21","81","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("13");
            obj.set_text("수량");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edRemark","109","118",null,"35","1.74%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("12");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Grid("grdDtl","21","edRemark:3","96.6%","60.71%",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("14");
            obj.set_binddataset("dsEtcCostDtl");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"107\" band=\"left\"/><Column size=\"44\" band=\"left\"/><Column size=\"66\" band=\"left\"/><Column size=\"280\" band=\"left\"/><Column size=\"105\" band=\"left\"/><Column size=\"110\" band=\"left\"/><Column size=\"85\" band=\"left\"/><Column size=\"83\" band=\"left\"/><Column size=\"107\" band=\"left\"/><Column size=\"83\" band=\"left\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"도서코드\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"순번\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"년판\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"도서명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"용도구분\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"용도\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"7\" text=\"단가\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" text=\"공급가액\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"9\" text=\"부가세\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:BOOKMST_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:BOOKMST_SEQ\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:BOOKMST_YEAR\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:BOOKMST_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"bind:ETCCOSTDTL_USETYPE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"combotext\" combodatacol=\"USE_TYPE_NAME\" combocodecol=\"USE_TYPE_CODE\" combodataset=\"ds_mk_UseType\"/><Cell col=\"5\" text=\"bind:USE_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"combotext\" combodatacol=\"USE_NAME\" combocodecol=\"USE_CODE\" combodataset=\"ds_mk_use\"/><Cell col=\"6\" text=\"bind:ETCCOSTDTL_QTY\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\" maskeditautoselect=\"true\"/><Cell col=\"7\" text=\"bind:ETCCOSTDTL_UNITCOST\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\" maskeditautoselect=\"true\"/><Cell col=\"8\" text=\"bind:ETCCOSTDTL_AMOUNT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\" maskeditautoselect=\"true\"/><Cell col=\"9\" text=\"bind:ETCCOSTDTL_VAT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditformat=\"#,##0\"/></Band></Format></Formats>");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("Static01","12","0","228","46",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("15");
            obj.set_text("▣기타외주비 관리 세부사항▣");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new MaskEdit("medtQty","stQty:3","81","8.70%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("8");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_autoselect("true");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stUnitCost","medtQty:3","81","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("16");
            obj.set_text("단가");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new MaskEdit("medtUnitCost","stUnitCost:3","81","8.70%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("9");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_autoselect("true");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stRemark","21","118","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("17");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_wordWrap("char");
            obj.set_text("비고");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Combo("cbUseType","stBook:3","44","12.89%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_mk_UseType");
            obj.set_codecolumn("USE_TYPE_CODE");
            obj.set_datacolumn("USE_TYPE_NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Button("btnUse","cbUseType:3","44","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("19");
            obj.set_text("용도");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_background("");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edUseCd","btnUse:3","44","3.72%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("6");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Combo("cbUseNm","edUseCd:3","44","14.70%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_mk_use");
            obj.set_codecolumn("USE_CODE");
            obj.set_datacolumn("USE_NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stAmount","medtUnitCost:3","81","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("20");
            obj.set_text("공급가액");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new MaskEdit("medtAmt","stAmount:3","81","12.65%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("10");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_autoselect("true");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stVat","medtAmt:3","81","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("21");
            obj.set_text("부가세");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new MaskEdit("medtVat","stVat:3","81","8.46%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("11");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_autoselect("true");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stReqNo","medtVat:3","81","90","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("22");
            obj.set_text("생산의뢰번호");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edPdtDtlDate","stReqNo:3","81","7.51%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("23");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("Static00","edPdtDtlDate:3","78","10","40",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("24");
            obj.set_text("-");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edPdtDtlYear","Static00:3","81","4.43%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("25");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("Static00_00","edPdtDtlYear:5","78","14","40",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("26");
            obj.set_text("-");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edPdtDtlSeq","Static00_00:2","81","3.40%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("27");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Button("btnDDel",null,"6","50","32","1.98%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("31");
            obj.set_text("삭제");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Button("btnDSave",null,"6","50","32","btnDDel:8",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("30");
            obj.set_text("저장");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Button("btnDAdd",null,"6","50","32","btnDSave:8",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("29");
            obj.set_text("추가");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Button("btnDSearch",null,"6","50","32","btnDAdd:8",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("28");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.DivDtl.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1265,420,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","DivDtl.form.edt_bookCode","value","dsEtcCostDtl","BOOKMST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","DivDtl.form.medtQty","value","dsEtcCostDtl","ETCCOSTDTL_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","DivDtl.form.medtUnitCost","value","dsEtcCostDtl","ETCCOSTDTL_UNITCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","DivDtl.form.edRemark","value","dsEtcCostDtl","ETCCOSTDTL_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","DivDtl.form.edBookSeq","value","dsEtcCostDtl","BOOKMST_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","DivDtl.form.edt_bookYear","value","dsEtcCostDtl","BOOKMST_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","DivDtl.form.edBookName","value","dsEtcCostDtl","BOOKMST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","DivDtl.form.cbUseType","value","dsEtcCostDtl","ETCCOSTDTL_USETYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","DivDtl.form.edUseCd","value","dsEtcCostDtl","USE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","DivDtl.form.cbUseNm","value","dsEtcCostDtl","USE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","DivDtl.form.medtAmt","value","dsEtcCostDtl","ETCCOSTDTL_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","DivDtl.form.medtVat","value","dsEtcCostDtl","ETCCOSTDTL_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","DivDtl.form.edPdtDtlDate","value","dsEtcCostDtl","PDTDTL_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","DivDtl.form.edPdtDtlYear","value","dsEtcCostDtl","PDTDTL_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","DivDtl.form.edPdtDtlSeq","value","dsEtcCostDtl","PDTDTL_DTLNUMBER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK139_DTL.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK139_DTL.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("MK139_DTL.xfdl","Lib::Lib_mk.xjs");
        this.registerScript("MK139_DTL.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_mk.xjs"); /*include "Lib::Lib_mk.xjs"*/;

        var nRow, vEtcCostMst_Id;
        var str_url, in_ds, out_ds, str_arg;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var vStr = "U";
        var vMST;

        this.MkDtlMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);
        	vEtcCostMst_Id = this.parent.parent.dsEtcCostMst.getColumn(this.parent.parent.dsEtcCostMst.rowposition, "ETCCOSTMST_ID");
        	this.gfn_TransactionP("select", "JSP/mk/getData_use.jsp", "ds_mk_use=ds_mk_use", "ds_mk_use=ds_mk_use", "", "", false, "S", false, this); 	//용도코드

        	if(Eco.isUndefined(vEtcCostMst_Id) == false){
        		this.getData_EtcCostDtl(vEtcCostMst_Id);
        	}
        };

        //세부사항 조회
        this.DivDtl_btnDSearch_onclick = function(obj,e)
        {
        	vEtcCostMst_Id = this.parent.parent.dsEtcCostMst.getColumn(this.parent.parent.dsEtcCostMst.rowposition, "ETCCOSTMST_ID");
        	if(Eco.isUndefined(vEtcCostMst_Id) == false){
        		this.getData_EtcCostDtl(vEtcCostMst_Id);
        	}
        };


        // 기타외주비 관리 상세내역 가져오기
        this.getData_EtcCostDtl = function(vEtcCostMst_Id)
        {
        	str_url = "JSP/mk/mk139f_etccost_dtl.jsp";
        	in_ds ="dsEtcCostDtl=dsEtcCostDtl";
        	out_ds ="dsEtcCostDtl=dsEtcCostDtl";
        	str_arg ="ETCCOSTMST_ID=" +nexacro.wrapQuote(vEtcCostMst_Id);

        	this.gfn_TransactionP("selectDtl", str_url, in_ds, out_ds, str_arg, "Callback_Search", false, "S", false, this);
        };

        this.Callback_Search = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}
        };

        //#######################################################
        //  신규로 등록하기
        //#######################################################

        /*상세내역 추가*/
        this.DivDtl_btnDAdd_onclick = function(obj,e)
        {
        	this.fctn_Dtl_New();
        };

        this.fctn_Dtl_New = function()
        {
        	var nRow = "";
        	switch(this.dsEtcCostDtl.rowposition)
        	{
        	  // -1 이면 레코드가 없는 상태
        	  case -1 : this.dsEtcCostDtl.addRow();
        				this.fctn_Default_Value_Set(this.dsEtcCostDtl.rowposition);
        				break;

        	  default : // 마지막 레코드 입력여부 확인
        	            nRow = this.dsEtcCostDtl.getRowCount()-1;

        	            // 레코드에 내용이 있으면
        	            if (this.fctn_EtcCostDtl_CheckRecord(nRow) == true)
        	            {
        					// ROW 추가
        					this.dsEtcCostDtl.addRow();
        					this.fctn_Default_Value_Set(this.dsEtcCostDtl.rowposition);
        				}
        				else
        					break;

        				// 마지막 레코드로 위치 이동
        				this.dsEtcCostDtl.set_rowposition(this.dsEtcCostDtl.getRowCount()-1);
        				break;
        	}
        	this.DivDtl.form.edt_bookCode.setFocus();
        }

        //row추가시 기본setting
        this.fctn_Default_Value_Set = function(nRow)
        {
        	var sEtcCostDtl_SEQ = 1;
        	vEtcCostMst_Id = this.parent.parent.dsEtcCostMst.getColumn(this.parent.parent.dsEtcCostMst.rowposition, "ETCCOSTMST_ID");

        	this.dsEtcCostDtl.setColumn(nRow, "ETCCOSTMST_ID", vEtcCostMst_Id);
        	this.dsEtcCostDtl.setColumn(nRow, "EMPLOYEE_ID", gv_sabun);

        	if (this.dsEtcCostDtl.rowcount == 1){   // 미리 Addrow를 하기 때문에 1로 지정
        		sEtcCostDtl_SEQ = sEtcCostDtl_SEQ.toString();
        		sEtcCostDtl_SEQ = sEtcCostDtl_SEQ.padLeft(2, "0");
        	}else{
        		sEtcCostDtl_SEQ = this.dsEtcCostDtl.getMax("ETCCOSTDTL_SEQ");
        		sEtcCostDtl_SEQ = (nexacro.toNumber(sEtcCostDtl_SEQ)+1).toString();
        		sEtcCostDtl_SEQ = sEtcCostDtl_SEQ.padLeft(2, "0");
        	}

        	this.dsEtcCostDtl.setColumn(nRow, "ETCCOSTDTL_SEQ", sEtcCostDtl_SEQ);
        	this.dsEtcCostDtl.setColumn(nRow, "ETCCOSTDTL_QTY", 0);
        	this.dsEtcCostDtl.setColumn(nRow, "ETCCOSTDTL_UNITCOST", 0);
        	this.dsEtcCostDtl.setColumn(nRow, "ETCCOSTDTL_AMOUNT", 0);
        	this.dsEtcCostDtl.setColumn(nRow, "ETCCOSTDTL_VAT", 0);
        }

        //기타외주비 세부사양 저장이벤트
        this.DivDtl_btnDSave_onclick = function(vStr)
        {
        	var inds = "input=dsEtcCostDtl:U";
        	var setSave = true;

        	for(var nRow=0 ; nRow<=this.dsEtcCostDtl.rowcount-1 ; nRow++)
        	{
        		if (!this.fctn_EtcCostDtl_CheckRecord(nRow)){
        			setSave = false;
        			return false;
        		}

        		if(vStr != "D")
        		{
        			vEtcCostMst_Id = this.parent.parent.dsEtcCostMst.getColumn(this.parent.parent.dsEtcCostMst.rowposition, "ETCCOSTMST_ID");

        			if(Eco.isUndefined(vEtcCostMst_Id) == true){
        				alert("기타외주비 관리 등록 내역이 없습니다.");
        				return false;
        			}

        			this.dsEtcCostDtl.setColumn(nRow, "ETCCOSTMST_ID", vEtcCostMst_Id);
        		}
        	}

        	if(setSave)
        	{
        		this.gfn_TransactionP("save", "JSP/mk/mk139f_etccost_dtl_dml.jsp", inds, "", "", "fnDtlSaveCallback", false, vStr, false, this);
        	}
        };


        //#######################################################
        //  입력값 확인
        //#######################################################
        this.fctn_EtcCostDtl_CheckRecord = function(nRow)
        {
        	if (this.dsEtcCostDtl.getColumn(nRow, "BOOKMST_CODE") == null || Eco.isUndefined(this.dsEtcCostDtl.getColumn(nRow, "BOOKMST_CODE")) == true)
        	{
        		alert("도서코드를 입력해 주십시요.");
        		this.DivDtl.form.edt_bookCode.setFocus();
        		return false;
        	}

        	if (this.dsEtcCostDtl.getColumn(nRow, "BOOKMST_SEQ") == null || Eco.isUndefined(this.dsEtcCostDtl.getColumn(nRow, "BOOKMST_SEQ")) == true)
        	{
        		alert("도서순번을 입력해 주십시요.");
        		this.DivDtl.form.edBookSeq.setFocus();
        		return false;
        	}

        	if (this.dsEtcCostDtl.getColumn(nRow, "BOOKMST_YEAR") == null || Eco.isUndefined(this.dsEtcCostDtl.getColumn(nRow, "BOOKMST_YEAR")) == true)
        	{
        		alert("도서연판을 입력해 주십시요.");
        		this.DivDtl.form.edt_bookYear.setFocus();
        		return false;
        	}

        	if (this.dsEtcCostDtl.getColumn(nRow, "USE_CODE") == null || Eco.isUndefined(this.dsEtcCostDtl.getColumn(nRow, "USE_CODE")) == true)
        	{
        		alert("용도를 입력해 주십시요.");
        		this.DivDtl.form.edUseCd.setFocus();
        		return false;
        	}

        	if (this.dsEtcCostDtl.getColumn(nRow, "ETCCOSTDTL_USETYPE") == null || Eco.isUndefined(this.dsEtcCostDtl.getColumn(nRow, "ETCCOSTDTL_USETYPE")) == true)
        	{
        		alert("용도구분을 선택해 주십시요.");
        		this.DivDtl.form.cbUseType.setFocus();
        		this.DivDtl.form.cbUseName.dropdown();
        		return false;
        	}

        	return true;
        }


        this.DivDtl_btnDDel_onclick = function(obj,e, vEtcCostMst_Id)
        {
        	if(this.dsEtcCostDtl.getRowType(this.dsEtcCostDtl.rowposition) == 2){
        		//row 삭제
        		this.dsEtcCostDtl.deleteRow(this.dsEtcCostDtl.rowposition);
        	}else{
        		// row 삭제 후 저장 -> 마스터에서 전체삭제할 경우
        		if(this.dsEtcCostDtl.getColumn(this.dsEtcCostDtl.rowposition, "ETCCOSTMST_ID") == vEtcCostMst_Id)
        		{
        			  this.dsEtcCostDtl.deleteRow(this.dsEtcCostDtl.rowposition);
        			  this.DivDtl_btnDSave_onclick("D");
        		}else{
        			  this.dsEtcCostDtl.deleteRow(this.dsEtcCostDtl.rowposition);
        			  this.DivDtl_btnDSave_onclick("D");
        		}
        	}
        };

        this.DivDtl_edUseCd_onchanged = function(obj,e)
        {
        	var nRow = this.ds_mk_use.findRow("USE_CODE", this.DivDtl.form.edUseCd.text);

        	if(nRow >= 0)
        	{
        		this.DivDtl.form.cbUseNm.set_index(nRow);
        		this.DivDtl.form.medtQty.setFocus();
        	}else{
        		alert('찾고자 하는 용도가 없습니다.');
        		this.DivDtl.form.edUseCd.set_autoselect(true);
        		this.DivDtl.form.edUseCd.setFocus();
        	}
        };


        this.DivDtl_cbUseNm_onitemchanged = function(obj,e)
        {
        	var iUseIdx = this.ds_mk_use.findRow("USE_NAME", this.DivDtl.form.cbUseNm.text);
        	this.DivDtl.form.edUseCd.set_value(this.ds_mk_use.getColumn(iUseIdx, "USE_CODE"));

        	if(iUseIdx != -1)
        		this.DivDtl.form.medtQty.setFocus();
        	else
        		this.DivDtl.form.cbUseNm.dropdown();
        };


        //공급가액에 변경시 부가세 계산
        this.DivDtl_medtAmt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		var dAmt 		= nexacro.floor(this.DivDtl.form.medtAmt.value);
        		this.DivDtl.form.medtVat.set_value(dAmt/10);
        		this.DivDtl.form.medtVat.setFocus();
        	}
        };

        //단가 변경시 공급가액에 계산
        this.DivDtl_medtUnitCost_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		var dQty 		= nexacro.floor(this.DivDtl.form.medtQty.value);
        		var dUnitCost 	= nexacro.floor(this.DivDtl.form.medtUnitCost.value);
        		var dAmt 		= nexacro.floor(dQty*dUnitCost);

        		this.DivDtl.form.medtAmt.set_value(dAmt);
        		this.DivDtl.form.medtAmt.setFocus();
        	}
        };

        // 비고 키보드 이벤트
        this.DivDtl_edRemark_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.dsEtcCostDtl.setColumn(this.dsEtcCostDtl.rowposition, "ETCCOSTDTL_REMARK", this.DivDtl.form.edRemark.text);
        		this.fctn_Dtl_New();
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
        	this.lfn_grdAutofit(this.DivDtl.form.grdDtl);
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

        //도서코드 팝업 연결
        this.DivDtl_btnBook_onclick = function(obj,e)
        {
        	var objParam = {dsParam1:this.dsBookMst
        				   ,dsParam2:"MK139"}; //popup 화면으로 전달할 값
        	this.dsBookMst.clearData();
        	this.lfn_showModal("popupBook", objParam, "mk::MKBook_SearchF.xfdl", "popupBookCallback", this, 10, 58, 450, 400);
        };

        this.popupBookCallback = function(){

        	this.dsEtcCostDtl.setColumn(this.dsEtcCostDtl.rowposition, "BOOKMST_CODE", this.dsBookMst.getColumn(0, "BOOKMST_CODE"));
        	this.dsEtcCostDtl.setColumn(this.dsEtcCostDtl.rowposition, "BOOKMST_YEAR", this.dsBookMst.getColumn(0, "BOOKMST_YEAR"));
        	this.dsEtcCostDtl.setColumn(this.dsEtcCostDtl.rowposition, "BOOKMST_NAME", this.dsBookMst.getColumn(0, "BOOKMST_NAME"));
        	this.dsEtcCostDtl.setColumn(this.dsEtcCostDtl.rowposition, "BOOKMST_SEQ", this.dsBookMst.getColumn(0, "BOOKMST_SEQ"));
        	this.dsEtcCostDtl.setColumn(this.dsEtcCostDtl.rowposition, "BOOKMST_ID", this.dsBookMst.getColumn(0, "BOOKMST_ID"));

        	this.DivDtl.form.cbUseType.setFocus();
        	this.DivDtl.form.cbUseType.dropdown();
        }

        //용도코드 팝업 연결
        this.DivDtl_btnUse_onclick = function(obj,e)
        {
        	var objParam = {dsParam1:this.ds_mk_use
        				   ,dsParam2:this.DivDtl.form.edUseCd.text
        				   ,dsParam3:this.DivDtl.form.cbUseNm.text
        				   ,dsParam4:"MK139"}; //popup 화면으로 전달할 값

        	this.lfn_showModal("popupUse",objParam, "mk::MKUse_SearchF.xfdl", "popupUseCallback", this, 10, 58, 450, 400);
        };

        this.popupUseCallback = function(){

        	this.DivDtl.form.medtQty.setFocus();
        }




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkDtlMain_onload,this);
            this.addEventHandler("ontimer",this.MkDtlMain_ontimer,this);
            this.addEventHandler("onsize",this.MkDtlMain_onsize,this);
            this.DivDtl.form.btnBook.addEventHandler("onclick",this.DivDtl_btnBook_onclick,this);
            this.DivDtl.form.edt_bookCode.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.DivDtl.form.edBookSeq.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.DivDtl.form.edt_bookYear.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.DivDtl.form.edBookName.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.DivDtl.form.edRemark.addEventHandler("onkeydown",this.DivDtl_edRemark_onkeydown,this);
            this.DivDtl.form.medtQty.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.DivDtl.form.medtUnitCost.addEventHandler("onkeydown",this.DivDtl_medtUnitCost_onkeydown,this);
            this.DivDtl.form.btnUse.addEventHandler("onclick",this.DivDtl_btnUse_onclick,this);
            this.DivDtl.form.edUseCd.addEventHandler("onchanged",this.DivDtl_edUseCd_onchanged,this);
            this.DivDtl.form.cbUseNm.addEventHandler("onitemchanged",this.DivDtl_cbUseNm_onitemchanged,this);
            this.DivDtl.form.medtAmt.addEventHandler("onkeydown",this.DivDtl_medtAmt_onkeydown,this);
            this.DivDtl.form.medtVat.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.DivDtl.form.btnDDel.addEventHandler("onclick",this.DivDtl_btnDDel_onclick,this);
            this.DivDtl.form.btnDSave.addEventHandler("onclick",this.DivDtl_btnDSave_onclick,this);
            this.DivDtl.form.btnDAdd.addEventHandler("onclick",this.DivDtl_btnDAdd_onclick,this);
            this.DivDtl.form.btnDSearch.addEventHandler("onclick",this.DivDtl_btnDSearch_onclick,this);
        };
        this.loadIncludeScript("MK139_DTL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
