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
            this.set_titletext("발주서 관리");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOrdMst", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"ORDMST_DATENO\" type=\"STRING\" size=\"15\"/><Column id=\"ORDMST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ORDMST_NO\" type=\"STRING\" size=\"4\"/><Column id=\"ORDMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ORDMST_QTY\" type=\"INT\" size=\"6\"/><Column id=\"ORDER_TOTAL\" type=\"INT\" size=\"6\"/><Column id=\"ORDMST_REVIVAL\" type=\"STRING\" size=\"1\"/><Column id=\"REVIVAL\" type=\"STRING\" size=\"4\"/><Column id=\"PLT_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"PLT_NAME\" type=\"STRING\" size=\"15\"/><Column id=\"PLT_PAGE\" type=\"INT\" size=\"3\"/><Column id=\"PLT_PRNSIGNATURE\" type=\"INT\" size=\"3\"/><Column id=\"BOOKMST_BODYPAGE\" type=\"INT\" size=\"5\"/><Column id=\"BOOKMST_SIGNATURE\" type=\"DECIMAL\" size=\"6\"/><Column id=\"BND_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"BND_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"ORDMST_REMARK\" type=\"STRING\" size=\"70\"/><Column id=\"BOOKMST_REMARK\" type=\"STRING\" size=\"70\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"PDTDTL_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"PDTDTL_NUMBER\" type=\"STRING\" size=\"4\"/><Column id=\"PDTDTL_DTLNUMBER\" type=\"STRING\" size=\"3\"/><Column id=\"PDTDTL_PDT_QTY\" type=\"INT\" size=\"6\"/><Column id=\"PDTDTL_WANT_INDATE\" type=\"CHAR\" size=\"8\"/><Column id=\"TONG_QTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMakeClose", this);
            obj._setContents("<ColumnInfo><Column id=\"MKCLS_YM\" type=\"STRING\" size=\"6\"/><Column id=\"MKCLS_STARTDATE\" type=\"STRING\" size=\"8\"/><Column id=\"MKCLS_ENDDATE\" type=\"STRING\" size=\"8\"/><Column id=\"MKCLS_CLOSE\" type=\"STRING\" size=\"1\"/><Column id=\"MKCLS_MODIFY\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBookMstSize", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"PPR_WIDTH\" type=\"INT\" size=\"4\"/><Column id=\"PPR_HEIGHT\" type=\"INT\" size=\"4\"/><Column id=\"EMPLOYEE_ID\" type=\"CHAR\" size=\"6\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_Separate_Binding", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"BND_CODE\" type=\"CHAR\" size=\"2\"/><Column id=\"BND_NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_plate", this);
            obj._setContents("<ColumnInfo><Column id=\"PLT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_BNDSIGNATURE\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_PRNSIGNATURE\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_HEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_DISABLED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_binding", this);
            obj._setContents("<ColumnInfo><Column id=\"BND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BND_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"BND_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BND_PRCSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"BND_DISABLED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSeparateBind", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBookOrd", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/><Column id=\"BOOKMST_SIGNATURE\" type=\"FLOAT\" size=\"6\"/><Column id=\"PLT_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"PLT_NAME\" type=\"STRING\" size=\"15\"/><Column id=\"PLT_PAGE\" type=\"INT\" size=\"3\"/><Column id=\"PLT_PRNSIGNATURE\" type=\"INT\" size=\"3\"/><Column id=\"BND_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"BND_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"BOOKMST_BODYPAGE\" type=\"INT\" size=\"6\"/><Column id=\"BOOKMST_REMARK\" type=\"STRING\" size=\"70\"/><Column id=\"ORDER_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"ORDMST_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrdBook", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ORDMST_NO\" type=\"STRING\" size=\"4\"/><Column id=\"ORDMST_DATE\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrdMstS", this);
            obj._setContents("<ColumnInfo><Column id=\"ORDMST_SDATE\" type=\"STRING\" size=\"10\"/><Column id=\"ORDMST_EDATE\" type=\"STRING\" size=\"10\"/><Column id=\"ORDMST_SNO\" type=\"STRING\" size=\"10\"/><Column id=\"ORDMST_ENO\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_SCD\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_ECD\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"ORDERBY\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrdDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"ORDMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ORDDTL_SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"ORDDTL_PSEQ\" type=\"STRING\" size=\"2\"/><Column id=\"USE_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"USE_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"PPR_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"COAT_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"ORDDTL_PAGE\" type=\"INT\" size=\"5\"/><Column id=\"ORDDTL_BUL\" type=\"INT\" size=\"3\"/><Column id=\"ORDDTL_GANGED\" type=\"INT\" size=\"1\"/><Column id=\"ORDDTL_DETAIL\" type=\"STRING\" size=\"20\"/><Column id=\"ORDDTL_TONE1\" type=\"INT\" size=\"1\"/><Column id=\"ORDDTL_TONE2\" type=\"INT\" size=\"1\"/><Column id=\"ORDDTL_TONE\" type=\"STRING\" size=\"3\"/><Column id=\"ORDDTL_JMI\" type=\"DECIMAL\" size=\"10\"/><Column id=\"ORDDTL_MRGN\" type=\"DECIMAL\" size=\"8\"/><Column id=\"CUST\" type=\"STRING\" size=\"6\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"ORDDTL_RUNDATE\" type=\"STRING\" size=\"8\"/><Column id=\"ORDDTL_REALWORKQTY\" type=\"INT\" size=\"6\"/><Column id=\"ORDDTL_TONQTY\" type=\"DECIMAL\" size=\"10\"/><Column id=\"ORDDTL_UNITCOST\" type=\"DECIMAL\" size=\"9\"/><Column id=\"ORDDTL_AMOUNT\" type=\"INT\" size=\"9\"/><Column id=\"ORDDTL_VAT\" type=\"INT\" size=\"8\"/><Column id=\"ORDDTL_PANQTY\" type=\"INT\" size=\"3\"/><Column id=\"ORDDTL_PANUNITCOST\" type=\"INT\" size=\"5\"/><Column id=\"ORDDTL_PANAMOUNT\" type=\"INT\" size=\"9\"/><Column id=\"ORDDTL_PANVAT\" type=\"INT\" size=\"8\"/><Column id=\"PRCS_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"ORDDTL_COMMENT\" type=\"STRING\" size=\"30\"/><Column id=\"ORDDTL_REMARK\" type=\"STRING\" size=\"60\"/><Column id=\"USE_PROCESSTYPE\" type=\"STRING\" size=\"2\"/><Column id=\"USE_PAGECNT\" type=\"STRING\" size=\"1\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"ORDDTL_BNDSEQ\" type=\"INT\" size=\"2\"/><Column id=\"LAST_FILM_CUST\" type=\"STRING\" size=\"6\"/><Column id=\"ORDDTL_CTP\" type=\"STRING\" size=\"1\"/><Column id=\"PLT_CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"PLT_CUST_CODE\" type=\"STRING\" size=\"4\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","18","10","312","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("작업발주");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("grdOrdMst","17","345","97.31%","50.56%",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_binddataset("dsOrdMst");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"38\"/><Column size=\"105\"/><Column size=\"89\"/><Column size=\"42\"/><Column size=\"47\"/><Column size=\"242\"/><Column size=\"72\"/><Column size=\"89\"/><Column size=\"89\"/><Column size=\"63\"/><Column size=\"67\"/><Column size=\"73\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"발주번호\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" rowspan=\"2\" text=\"도서코드\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" rowspan=\"2\" text=\"순번\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" rowspan=\"2\" text=\"연판\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" rowspan=\"2\" text=\"도서명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" rowspan=\"2\" text=\"발주수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" rowspan=\"2\" text=\"판형\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" rowspan=\"2\" text=\"제본\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"9\" colspan=\"2\" text=\"본문\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"11\" rowspan=\"2\" text=\"재생\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"9\" text=\"쪽수\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"10\" text=\"대수\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"checkbox\" maskeditformat=\"@@@@\" editmaxlength=\"4\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"checkboxcontrol\" calendardateformat=\"yyyy-MM-dd\" cssclass=\"expr:REVIVAL==&apos;재생&apos;?&quot;BgChange3&quot;:&quot;&quot; \"/><Cell col=\"1\" text=\"bind:ORDMST_DATENO\" displaytype=\"normal\" combodataset=\"ds_mk_UseType\" combocodecol=\"USE_TYPE_CODE\" combodatacol=\"USE_TYPE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" cssclass=\"expr:REVIVAL==&apos;재생&apos;?&quot;BgChange3&quot;:&quot;&quot; \"/><Cell col=\"2\" text=\"bind:BOOKMST_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" edittype=\"none\" editmaxlength=\"20\" displaytype=\"normal\" combodataset=\"ds_mk_Cust\" combodatacol=\"CUST_NAME\" combocodecol=\"CUST\" textAlign=\"center\" cssclass=\"expr:REVIVAL==&apos;재생&apos;?&quot;BgChange3&quot;:&quot;&quot; \"/><Cell col=\"3\" text=\"bind:BOOKMST_SEQ\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" edittype=\"none\" editmaxlength=\"20\" displaytype=\"normal\" combodataset=\"ds_mk_Cust\" combodatacol=\"CUST_NAME\" combocodecol=\"CUST\" textAlign=\"center\" cssclass=\"expr:REVIVAL==&apos;재생&apos;?&quot;BgChange3&quot;:&quot;&quot; \"/><Cell col=\"4\" text=\"bind:BOOKMST_YEAR\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" edittype=\"none\" editmaxlength=\"20\" displaytype=\"normal\" combodataset=\"ds_mk_Cust\" combodatacol=\"CUST_NAME\" combocodecol=\"CUST\" textAlign=\"center\" cssclass=\"expr:REVIVAL==&apos;재생&apos;?&quot;BgChange3&quot;:&quot;&quot; \"/><Cell col=\"5\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" text=\"bind:BOOKMST_NAME\" cssclass=\"expr:REVIVAL==&apos;재생&apos;?&quot;BgChange3&quot;:&quot;&quot; \"/><Cell col=\"6\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" text=\"bind:ORDMST_QTY\" textAlign=\"right\" cssclass=\"expr:REVIVAL==&apos;재생&apos;?&quot;BgChange3&quot;:&quot;&quot; \"/><Cell col=\"7\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" text=\"bind:PLT_NAME\" displaytype=\"normal\" cssclass=\"expr:REVIVAL==&apos;재생&apos;?&quot;BgChange3&quot;:&quot;&quot; \"/><Cell col=\"8\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" text=\"bind:BND_NAME\" displaytype=\"normal\" cssclass=\"expr:REVIVAL==&apos;재생&apos;?&quot;BgChange3&quot;:&quot;&quot; \"/><Cell col=\"9\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" text=\"bind:BOOKMST_BODYPAGE\" displaytype=\"normal\" textAlign=\"right\" cssclass=\"expr:REVIVAL==&apos;재생&apos;?&quot;BgChange3&quot;:&quot;&quot; \"/><Cell col=\"10\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" text=\"bind:BOOKMST_SIGNATURE\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"0.00\" cssclass=\"expr:REVIVAL==&apos;재생&apos;?&quot;BgChange3&quot;:&quot;&quot; \"/><Cell col=\"11\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" text=\"bind:REVIVAL\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:REVIVAL==&apos;재생&apos;?&quot;BgChange3&quot;:&quot;&quot; \"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stOrdDate","17","76","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("발주일자");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("calOrdMstDate","stOrdDate:3","76","9.08%","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtOrdMstNo","calOrdMstDate:3","75","4.31%","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_enable("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stBook","medtOrdMstNo:3","75","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("도서코드");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edBookCd","stBook:3","75","7.62%","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edBookSeq","edBookCd:3","75","3.31%","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("3");
            obj.set_autoselect("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edBookYear","edBookSeq:3","75","4.31%","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stBookNm","edBookYear:3","75","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("도서명");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edBookNm","stBookNm:3","75","22.08%","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stReqNo","edBookNm:3","75","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("생산의뢰번호");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edPdtDtlDate","stReqNo:3","75","7.31%","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","edPdtDtlDate:6","72","10","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("-");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edPdtDtlYear","Static00:5","75","4.31%","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","edPdtDtlYear:6","72","14","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("-");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edPdtDtlSeq","Static00_00:1","75","3.31%","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stBigo","17","187","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("비고");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edMstRemark","stBigo:3","187","90.54%","35",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnView",null,"10","80","40","1.23%",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("보기");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrt",null,"10","80","40","btnView:10",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("출력");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"10","80","40","btnPrt:10",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("삭제");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"10","80","40","btnDel:10",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("저장");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew",null,"10","80","40","btnSave:10",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("신규");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","80","40","btnNew:10",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnImport",null,"10","80","40","btnSearch:20",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("생산의뢰");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("stOrdTotal","17","113","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("발주누계");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtTotal","stOrdTotal:3","113","9.08%","35",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_autoselect("true");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stOrdQty","medtTotal:3","113","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("수량");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtQty","stOrdQty:3","113","9.08%","35",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_autoselect("true");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            this.addChild(obj.name, obj);

            obj = new Static("stPlt","medtQty:3","113","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("판형");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edPlate","stPlt:3","113","18.08%","35",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stBasic","edPlate:3","113","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("대표규격");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edBasicWidth","stBasic:3","113","6.08%","35",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","edBasicWidth:8","110","15","40",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("*");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edBasicHeight","Static00_01:4","113","6.08%","35",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stInDate","edBasicHeight:3","113","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("영업입고\r\n요청일자");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtWantIndate","stInDate:3","113","12.08%","35",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_autoselect("true");
            obj.set_textAlign("center");
            obj.set_format("####-##-##");
            obj.set_type("string");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stBind","17","150","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("제본");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edBind","stBind:3","150","18%","35",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stBndSeparate","edBind:3","150","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("추가부록제본");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSepBind","stBndSeparate:3","150","190","35",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_enable("false");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnMultiSel","edtSepBind:1","150","34","35",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("▼");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stBodyPage","btnMultiSel:3","150","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("본문쪽수");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtBodyPage","stBodyPage:3","150","9%","35",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stSignature","medtBodyPage:3","150","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("본문대수");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtSignature","stSignature:3","150","9%","35",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_autoselect("true");
            obj.set_enable("false");
            obj.set_format("#,###.##");
            this.addChild(obj.name, obj);

            obj = new Static("stRevival","medtSignature:3","150","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("재생여부");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new CheckBox("cbRevival","stRevival:20","152","103","36",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text(" 재생");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("stBigo00","17","224","85","116",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("도서관리\r\n\r\n비 고");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaBookRemark","stBigo00:3","224","90.54%","116",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("DivDtl","16","223","97.31%","68.06%",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_url("mk::MK131_DTL.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("DivMultiSel","stBndSeparate:3","edtSepBind:0","226","225",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_background("#e8e7e3");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","6","7","216","175",null,null,null,null,null,null,this.DivMultiSel.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_mk_Separate_Binding");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"0\"/><Column size=\"172\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:BND_CODE\"/><Cell col=\"2\" text=\"bind:BND_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\"/></Band></Format></Formats>");
            this.DivMultiSel.addChild(obj.name, obj);

            obj = new Button("btnSel","stBndSeparate:14","372","99","34",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("선택적용");
            obj.set_font("bold 12px/normal \"함초롬돋움\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCcl","btnSel:8","371","99","34",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("선택해제");
            obj.set_font("bold 12px/normal \"함초롬돋움\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","calOrdMstDate","value","dsOrdMst","ORDMST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","medtOrdMstNo","value","dsOrdMst","ORDMST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edBookCd","value","dsOrdMst","BOOKMST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edMstRemark","value","dsOrdMst","ORDMST_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edBookSeq","value","dsOrdMst","BOOKMST_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edBookYear","value","dsOrdMst","BOOKMST_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edBookNm","value","dsOrdMst","BOOKMST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edPdtDtlDate","value","dsOrdMst","PDTDTL_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edPdtDtlYear","value","dsOrdMst","PDTDTL_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edPdtDtlSeq","value","dsOrdMst","PDTDTL_DTLNUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","medtTotal","value","dsOrdMst","ORDER_TOTAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","medtQty","value","dsOrdMst","ORDMST_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edPlate","value","dsOrdMst","PLT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edBasicWidth","value","dsBookmstSize","PPR_WIDTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edBasicHeight","value","dsBookmstSize","PPR_HEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","medtWantIndate","value","dsOrdMst","PDTDTL_WANT_INDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edBind","value","dsOrdMst","BND_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","medtBodyPage","value","dsOrdMst","BOOKMST_BODYPAGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","medtSignature","value","dsOrdMst","BOOKMST_SIGNATURE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","cbRevival","value","dsOrdMst","REVIVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","txaBookRemark","value","dsOrdMst","BOOKMST_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","mk::MK131_DTL.xfdl");
        };
        
        // User Script
        this.addIncludeScript("MK131.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK131.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("MK131.xfdl","Lib::Lib_mk.xjs");
        this.registerScript("MK131.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_mk.xjs"); /*include "Lib::Lib_mk.xjs"*/;

        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var nRow, nOrdMst_Id, strVisible, rdUrl, rdParam;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerDML, vPerDel;
        var vStr = "U";
        var nSaveRow = -1;
        var sSetDate = "";
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var vChkAll = 0;

        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", nexacro.getApplication().gv_selectMenu);

        	vPerSel = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_SELECT");
        	vPerDML = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_DML");
        	vPerDel = "D";

        	vStr = vPerDML;

        	if(vPerSel == "1"){

        		str_arg = "MKCLS_YM=" + nexacro.wrapQuote( ) + " MKCLS_STARTDATE=" +nexacro.wrapQuote( );
        		this.gfn_TransactionP("select", "JSP/mk/make_closing.jsp", "dsMakeClose=dsMakeClose", "dsMakeClose=dsMakeClose", str_arg, "", false, "S", false, this); 	//마감여부
        		this.gfn_TransactionP("select", "JSP/mk/Binding_Separate_Select.jsp", "ds_mk_Separate_Binding=ds_mk_Separate_Binding", "ds_mk_Separate_Binding=ds_mk_Separate_Binding", "", "", false, "S", false, this);
        		str_arg  = "PLATE_CODE =''"+ " SQL_SET =' '";
        		this.gfn_TransactionP("select", "JSP/mk/getData_plate.jsp", "ds_mk_plate=ds_mk_plate", "ds_mk_plate=ds_mk_plate", str_arg, "", false, "S", false, this);	//판형
        		str_arg  = "BIND_CODE =''"+ " SQL_SET =' '";
        		this.gfn_TransactionP("select", "JSP/mk/getData_bind.jsp", "ds_mk_binding=ds_mk_binding", "ds_mk_binding=ds_mk_binding", str_arg, "", false, "S", false, this); //제본
        	}

        	//DML권한 체크 및 컴포넌트 ENABLE처리
        	if(vPerDML == "1"){
        		this.btnNew_onclick();
        	}else{
        		this.fctn_User_Enabled(this, false);
        	}

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
        	this.lfn_grdAutofit(this.grdOrdMst);
        };

        this.btnSearch_onclick = function(obj,e)
        {
        	this.dsOrdMstS.deleteAll();
        	var objParam = {dsParam1:this.dsOrdMst}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupSearch", objParam, "mk::MK131_Search.xfdl", "popupCallback", this, 10, 58, 530, 320);
        };


        this.dsOrdMst_onrowposchanged = function(obj,e)
        {
        	this.calOrdMstDate.set_enable(this.dsOrdMst.getRowType(obj.rowposition) == 2);

        	nOrdMst_Id = this.dsOrdMst.getColumn(obj.rowposition, "ORDMST_ID");

        	if(nOrdMst_Id != null && nOrdMst_Id != "" && nOrdMst_Id != "undefined")
        	{
        		//별책제본(추가부록제본) 가져오기
        		this.fctn_SeparateBind_select(obj.rowposition);
        		//대표규격 가져오기
        		this.fctn_BookmstSize_select(obj.rowposition);
        	}
        };

        //추가부록제본
        this.fctn_SeparateBind_select = function(nRow)
        {
        	//EDIT 초기화
        	this.edtSepBind.set_value("");
        	nBookMst_Id = this.dsOrdMst.getColumn(nRow, "BOOKMST_ID");

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

        //대표규격
        this.fctn_BookmstSize_select = function(nRow)
        {
        	nBookMst_Id = this.dsOrdMst.getColumn(nRow, "BOOKMST_ID");

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


        //데이터 수정시 마감여부 확인
        this.dsOrdMst_cancolumnchange = function(obj,e)
        {
        	var nRow, mkcls_close, mkcls_modify;

        	if(e.columnid == "ORDMST_DATE"){

        		if(Eco.isUndefined(e.newvalue) == false || e.newvalue != ""){

        			if(e.newvalue.length == 0){
        				return true;
        				this.break;
        			}

        			nRow = this.dsMakeClose.findRow("MKCLS_YM", e.newvalue.substr(0, 6));

        			if(nRow < 0)
        			{
        				mkcls_close = "1";
        				mkcls_modify = "0";
        			}else{

        				 mkcls_close = this.dsMakeClose.getColumn(nRow,"MKCLS_CLOSE");
        				 mkcls_modify = this.dsMakeClose.getColumn(nRow,"MKCLS_MODIFY");
        			}


        			if(mkcls_close == "1" || mkcls_modify == "0"){
        				alert("선택하신 발주일자는 마감 완료 되었거나 수정불가 상태입니다.");
        				return false;
        			}
        		}
        	}
        };

        //#######################################################
        // 사용권한에 따른 컴포넌트 Enable 여부
        // formObj : 폼 ID 변수
        // _set : Enable 변수 (True, False)
        //#######################################################
        this.fctn_User_Enabled = function(formObj, _set)
        {
        	var comObj;
        	// 마스터 폼 컴포넌트 Enabled 여부
        	for(var i = 0; i < formObj.components.length;  i++)
        	{
        		comObj = formObj.components[i];

        		if (comObj == "[object Edit]" || comObj == "[object Combo]"
        		   || comObj == "[object Calendar]" || comObj == "[object MaskEdit]"
        		   || comObj == "[object TextArea]")
        		{
        			comObj.set_enable(_set);
        		}
        	}

        	this.btnNew.set_enable(_set);
        	this.btnSave.set_enable(_set);
        	this.btnImport.set_enable(_set);
        	this.btnDel.set_enable(_set);
        }

        this.btnNew_onclick = function(obj,e)
        {
        	if(this.DivDtl.visible == false){

        		var setError 	= false;

        		switch(this.dsOrdMst.rowposition) {
        		case -1 :

        			this.dsOrdMst.set_rowposition(this.dsOrdMst.addRow());
        			break;

        		default:
        			for(var nRow = 0; nRow < this.dsOrdMst.rowcount; nRow++)
        			{	// 수정된 값 체크후 입력값 확인
        				if(this.dsOrdMst.getRowType(nRow) != "normal")
        					setError = this.fctn_Mst_CheckRecord(nRow);

        				// 에러 입력값 오류 발생시 빠져나감.
        				if(setError == false) break;
        			}

        			if(setError == true) this.dsOrdMst.set_rowposition(this.dsOrdMst.addRow());
        		}

        		this.edBookCd.setFocus();
        	}
        };

        this.btnSave_onclick = function(obj,e)
        {
        	if(this.DivDtl.visible == false)
        		this.fctn_Mst_Save("save");
        	else
        		this.DivDtl.form.fctn_Dtl_save(vPerDML);
        };

        //#######################################################
        // 발주 마스터 저장하기
        //#######################################################
        this.fctn_Mst_Save = function(_dsSet)
        {
        	// 입력확인
        	var setSave 	= true;
        	var vStr;

        	if(_dsSet == "save")
        		vStr = "U";
        	else
        		vStr = "D";

        	if(vPerDML == "1")
        	{
        		if (_dsSet != "delete")
        		{
        			for (var nRow = 0; nRow < this.dsOrdMst.rowcount; nRow++)
        			{
        				// 입력된 레코드 체크.
        				// 수정된 내용이 없으면 건너뜀(normal).
        				if ((this.dsOrdMst.getRowType(nRow) != 1) && (this.fctn_Mst_CheckRecord(nRow) == false))
        				{
        					this.dsOrdMst.set_rowposition(nRow);
        					setSave = false;
        					return false;
        				}
        			}
        		}

        		if(setSave == true)
        		{
        			in_ds 	= "input=dsOrdMst:u";
        			str_url = "JSP/mk/mk131f_order_mst_dml.jsp";
        			this.gfn_TransactionP("insert", str_url, in_ds, "", "", "fctn_MstSaveCallback", false, vStr, false, this);
        		}
        	}
        	return true;
        }

        //#######################################################
        // 도서발주MST SAVE 콜백함수
        //#######################################################
        this.fctn_MstSaveCallback = function(Trid, ErrorCode, ErrorMsg, gv_rt_value, gv_rt_result)
        {
        	if(ErrorCode != 0 )
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}else{

        		var rtnORDMST_ID = nexacro.getApplication().gv_rt_value;
        		var rtnORDMST_NO = nexacro.getApplication().gv_rt_result;

        		if(rtnORDMST_ID != "-1" && rtnORDMST_NO != "0000"){
        			this.dsOrdMst.setColumn(this.dsOrdMst.rowposition, "ORDMST_ID", rtnORDMST_ID);
        			this.dsOrdMst.setColumn(this.dsOrdMst.rowposition, "ORDMST_NO", rtnORDMST_NO);

        			this.dsOrdMst.setRowType(this.dsOrdMst.rowposition, "1");
        		}
        	}
        }

        this.btnDel_onclick = function(obj,e)
        {
        	var bRtn = "";
        	var bCloseChk = false;
        	var bRunChk = false;

        	bRtn = this.confirm("발주내역 삭제하시겠습니까?", "발주 삭제");

        	if(bRtn == true && this.DivDtl.visible == false)
        	{
        		//세부내역 조회
        		this.fctn_DetailRowSearch();

        		for (var nRow = 0; nRow < this.dsOrdDtl.getRowCount()-1; nRow++)
        		{

        			if(nexacro.trim(this.dsOrdDtl.getColumn(nRow, "ORDDTL_RUNDATE")) != "" && Eco.isUndefined(nexacro.trim(this.dsOrdDtl.getColumn(nRow, "ORDDTL_RUNDATE"))) == false)
        			{
        				var sRundate = nexacro.trim(this.dsOrdDtl.getColumn(nRow, "ORDDTL_RUNDATE"));
        				this.dsMakeClose.filter("MKCLS_STARTDATE<='" + sRundate + "'&&MKCLS_ENDDATE>='" + sRundate + "'");

        				if ((this.dsMakeClose.getColumn(this.dsMakeClose.rowposition, "MKCLS_CLOSE") == "1") &&
        					(this.dsMakeClose.getColumn(this.dsMakeClose.rowposition, "MKCLS_MODIFY") == "0"))
        				{
        					alert("마감되어 삭제할 수 없습니다.");
        					bCloseChk = true;
        				}

        				bRunChk = true;
        				return false;
        			}
        		}

        		//세부내역 진행된 것이 있으면 삭제여부 물어봄
        		if(bCloseChk == false)
        		{
        			if(bRunChk == true)
        			{
        				if(this.confirm("진행된 세부내역이 있습니다. 삭제하시겠습니까?", "발주 삭제") == true)
        					this.fctn_Delete();
        			}else
        				this.fctn_Delete();
        		}
        	}else{

        		this.DivDtl.form.fctn_Dtl_Delete();
        	}
        };

        //#######################################################
        //  발주서 삭제
        //#######################################################
        this.fctn_Delete = function()
        {
        	var vNextRow;
        	if(this.dsOrdMst.rowposition == this.dsOrdMst.getRowCount()-1)
        		nNextRow = this.dsOrdMst.getRowCount()-2;
        	else
        		nNextRow = this.dsOrdMst.rowposition;

        	in_ds 	= "input=dsOrdMst:u";
        	str_url = "JSP/mk/mk131f_order_mst_dml.jsp";
        	this.dsOrdMst.deleteRow(this.dsOrdMst.rowposition);
        	this.gfn_TransactionP("save", str_url, in_ds, "", "", "", false, "D", false, this);

        	//다음Row로 이동
        	this.dsOrdMst.set_rowposition(vNextRow);
        }

        //세부내역 조회
        this.fctn_DetailRowSearch = function()
        {
        	str_url = "JSP/mk/mk131f_order_dtl.jsp";
        	in_ds = "dsOrdDtl=dsOrdDtl";
        	out_ds = "dsOrdDtl=dsOrdDtl";
        	str_arg ="ORDMST_ID=" +nexacro.wrapQuote(this.dsOrdMst.getColumn(this.dsOrdMst.rowposition, "ORDMST_ID"));

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "", false, "S", false, this);
        };

        this.fctn_Mst_CheckRecord = function(nRow)
        {
        	if (nRow == -1)
        	{
        		return false;
        	}

        	if(Eco.isUndefined(this.dsOrdMst.getColumn(nRow, "ORDMST_DATE")) == true || this.dsOrdMst.getColumn(nRow, "ORDMST_DATE") == "")
        	{
        		alert("발주일자를 입력해 주십시요.");
        		this.calOrdMstDate.setFocus();
        		return false;
        	}

        	if(Eco.isUndefined(this.dsOrdMst.getColumn(nRow, "BOOKMST_CODE")) == true || this.dsOrdMst.getColumn(nRow, "BOOKMST_CODE") == "")
        	{
        		alert("도서코드를 입력해 주십시요.");
        		this.edBookCd.setFocus();
        		return false;
        	}

        	if(Eco.isUndefined(this.dsOrdMst.getColumn(nRow, "BOOKMST_SEQ")) == true || this.dsOrdMst.getColumn(nRow, "BOOKMST_SEQ") == "")
        	{
        		alert("도서순번을 입력해 주십시요.");
        		this.edBookSeq.setFocus();
        		return false;
        	}

        	if(Eco.isUndefined(this.dsOrdMst.getColumn(nRow, "BOOKMST_YEAR")) == true || this.dsOrdMst.getColumn(nRow, "BOOKMST_YEAR") == "")
        	{
        		alert("도서년판을 입력해 주십시요.");
        		this.edBookYear.setFocus();
        		return false;
        	}

        	if(Eco.isUndefined(this.dsOrdMst.getColumn(nRow, "ORDMST_QTY")) == true || this.dsOrdMst.getColumn(nRow, "ORDMST_QTY") == ""
        	   || this.dsOrdMst.getColumn(nRow, "ORDMST_QTY") == 0)
        	{
        		alert("발주수량을 입력해 주십시요.");
        		this.medtQty.setFocus();
        		return false;
        	}

        	return true;
        }

        this.dsOrdMst_onrowsetchanged = function(obj,e)
        {
        	//dataset addRow되었을 때
        	if(e.reason == 12){
        		//발주일자 setting
        		if(sSetDate == "")
        		{
        			var d = new Date();
        			var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");
        			this.dsOrdMst.setColumn(e.row, "ORDMST_DATE", strtoDay);
        		}else{
        			this.dsOrdMst.setColumn(e.row, "ORDMST_DATE", sSetDate);
        		}
        	}
        };

        //#######################################################
        // 발주일자의 다음 순번 찾기
        //#######################################################
        this.fctn_Max_OrdMstNo = function(nRow)
        {
        	var sTblName = "PRODUCT.ORDER_MST";
        	var sPKColName = "ORDMST_DATE";
        	var sSEQColName = "ORDMST_NO";
        	var sPKValue = sSetDate;
        	var sColLength = this.dsOrdMst.getColumnInfo("ORDMST_NO").size;

        	var strArg  = "";

        	//  쿼리로 지정날짜의 순번 얻기
        	this.lfn_Seq_Count(sTblName, sPKColName, sSEQColName, sPKValue, sColLength);
        	var sSqlSeq  = nexacro.getApplication().gv_rt_value;

        	// PID에서 지정날짜의 순번 얻기
        	sPidSeq = this.fctn_PID_OrdMstNo_Count(this.dsOrdMst
        	                                    , sSetDate
        	                                    , sPKColName
        	                                    , sSEQColName);

        	// 쿼리와 PID와의 순번을 맞추기 위해 비교 한 후,
        	// 같은 날짜가 있으면 PID, 없으면 쿼리 또는 PID에서 가져온다.

        	if (sSqlSeq > sPidSeq)
        		this.dsOrdMst.setColumn(nRow, "ORDMST_NO", sSqlSeq);
        	else
        	{
        		sPidSeq = (nexacro.toNumber(sPidSeq)+1).toString();
        		sPidSeq = sPidSeq.padLeft(4, "0");
        		this.dsOrdMst.setColumn(nRow, "ORDMST_NO", sPidSeq);
        	}

        	this.dsOrdMst.setColumn(nRow, "ORDMST_DATENO", sSetDate + " [" + this.dsOrdMst.getColumn(nRow, "ORDMST_NO") + "]" );
        }


        this.fctn_PID_OrdMstNo_Count = function(dsF, sNowDate, MainColumn, SeqColumn)
        {
        	var sMaxSeq	= "";
        	var sTmpDate = "";

        	sMaxSeq = dsF.getMax(SeqColumn);

        	if(sMaxSeq == "NaN" || Eco.isUndefined(sMaxSeq) == true )
        		sMaxSeq = 0;

        	for (var nRow= 0 ; nRow<=dsF.rowcount-1 ; nRow++)
        	{
        		sTmpDate	= dsF.getColumn(nRow, MainColumn);

        		//기저장된 내역에서 날짜 비교해서 seq검색
        		if(this.dsOrdMst.getRowType(nRow) == 1)
        		{
        			if (sTmpDate == sNowDate)
        			{
        				sTmpSeq = dsF.getColumn(nRow, SeqColumn);

        				if (sMaxSeq < sTmpSeq)
        					sMaxSeq = sTmpSeq;
        			}
        		}
        	}

        	return sMaxSeq;
        }

        this.dsOrdMst_oncolumnchanged = function(obj,e)
        {
        	//발주순번
        	if(e.columnid == "ORDMST_DATE"){

        		sSetDate = this.dsOrdMst.getColumn(e.row, "ORDMST_DATE");
        		this.fctn_Max_OrdMstNo(e.row);
        	}
        };

        //#######################################################
        // 도서 및 발주내역 조회
        //#######################################################
        this.edBookYear_onchanged = function(obj,e)
        {
        	if(this.edBookYear.maxlength == this.edBookYear.text.length){
        		//발주된 도서 찾기
        		str_url = "JSP/mk/mk131f_reorder_book_mst.jsp";
        		in_ds = "dsOrdBook=dsOrdBook";
        		out_ds = "dsOrdBook=dsOrdBook";
        		str_arg ="ORDMST_DATE=" +nexacro.wrapQuote(this.calOrdMstDate.value);
        		str_arg +=" BOOKMST_CODE=" +nexacro.wrapQuote(this.edBookCd.value);
        		str_arg +=" BOOKMST_YEAR=" +nexacro.wrapQuote(this.edBookYear.value);
        		str_arg +=" BOOKMST_SEQ=" +nexacro.wrapQuote(this.edBookSeq.value);

        		this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fctn_ReOrderBookCallback", false, "S", false, this);

        	}
        };

        //#######################################################
        // 도서조회 fctn_ReOrderBookCallback 콜백함수
        //#######################################################
        this.fctn_ReOrderBookCallback = function(Trid, ErrorCode, ErrorMsg)
        {
        	if(ErrorCode != 0 )
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}
        	else
        	{
        		// 발주된 도서가 없으면 발주
        		if (this.dsOrdBook.getRowCount() == 0)
        		{
        			// 도서 발주 준비
        			str_url = "JSP/mk/mk131f_book_mst.jsp";
        			in_ds 	= "dsBookOrd=dsBookOrd";
        			out_ds 	= "dsBookOrd=dsBookOrd";
        			str_arg ="ORDMST_DATE=" +nexacro.wrapQuote(this.calOrdMstDate.value);
        			str_arg +=" BOOKMST_CODE=" +nexacro.wrapQuote(this.edBookCd.value);
        			str_arg +=" BOOKMST_YEAR=" +nexacro.wrapQuote(this.edBookYear.value);
        			str_arg +=" BOOKMST_SEQ=" +nexacro.wrapQuote(this.edBookSeq.value);

        			this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fctn_BookOrdCallback", false, "S", false, this);
        		}
        		else
        		{
        			//한번도 조회를 안했을 경우
        			if(this.dsOrdMstS.getRowCount() == 0){
        				this.dsOrdMstS.addRow();
        				this.dsOrdMstS.setColumn(0, "ORDMST_SDATE", this.calOrdMstDate.value);
        				this.dsOrdMstS.setColumn(0, "ORDMST_EDATE", this.calOrdMstDate.value);
        				this.dsOrdMstS.setColumn(0, "ORDERBY", "1");
        			}

        			// 재조회
        			this.fctn_Reload_MstList("search");
        			// 위치이동
        			var iRow = this.dsOrdMst.findRow("BOOKMST_CODE", this.dsOrdBook.getColumn(this.dsOrdBook.rowposition, "BOOKMST_CODE"));
        			this.dsOrdMst.set_rowposition(iRow);

        			alert("금일 발주된 도서가 있습니다.");
        		}

        	}
        }


        //#######################################################
        // 도서발주 fctn_BookOrdCallback 콜백함수
        //#######################################################
        this.fctn_BookOrdCallback = function(Trid, ErrorCode, ErrorMsg)
        {
        	if(ErrorCode != 0 )
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}else{

        		if(this.dsBookOrd.getRowCount() > 0)
        			this.fctn_Book_Ord_Import();
        		else
        			alert("도서를 찾을 수 없습니다. 다시 확인해 주십시요.");

        		//발주수량으로 커서 이동
        		this.medtQty.setFocus();
        	}
        }

        //#######################################################
        // 발주 마스터 재조회
        //#######################################################
        this.fctn_Reload_MstList = function()
        {
        	str_url = "JSP/mk/mk131f_order_mst.jsp";
        	in_ds = "dsOrdMst=dsOrdMst";
        	out_ds = "dsOrdMst=dsOrdMst";
        	str_arg ="sORDMST_DATE=" +nexacro.wrapQuote(this.dsOrdMstS.getColumn(0, "ORDMST_SDATE"));
        	str_arg +=" eORDMST_DATE=" +nexacro.wrapQuote(this.dsOrdMstS.getColumn(0, "ORDMST_EDATE"));
        	str_arg +=" sORDMST_DATENO=" +nexacro.wrapQuote(this.dsOrdMstS.getColumn(0, "ORDMST_SNO"));
        	str_arg +=" eORDMST_DATENO=" +nexacro.wrapQuote(this.dsOrdMstS.getColumn(0, "ORDMST_ENO"));
        	str_arg +=" sBOOKMST_CODE=" +nexacro.wrapQuote(this.dsOrdMstS.getColumn(0, "BOOKMST_SCD"));
        	str_arg +=" eBOOKMST_CODE=" +nexacro.wrapQuote(this.dsOrdMstS.getColumn(0, "BOOKMST_ECD"));
        	str_arg +=" BOOKMST_YEAR=" +nexacro.wrapQuote(this.dsOrdMstS.getColumn(0, "BOOKMST_YEAR"));
        	str_arg +=" BOOKMST_NAME=" +nexacro.wrapQuote(this.dsOrdMstS.getColumn(0, "BOOKMST_NAME"));
        	str_arg +=" ORDER=" +nexacro.wrapQuote(this.dsOrdMstS.getColumn(0, "ORDERBY"));

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fn_OrdMst_RefreshCallback", false, "S", false, this);
        }

        //#######################################################
        // 도서마스터 재조회 콜백함수
        //#######################################################
        this.fn_OrdMst_RefreshCallback = function(Trid, ErrorCode, ErrorMsg)
        {
        	if(ErrorCode != 0 )
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}else{

        	}

        }

        //#######################################################
        // 도서 마스터 내역 불러오기
        //#######################################################
        this.fctn_Book_Ord_Import = function()
        {
        	var nMstRow = this.dsOrdMst.rowposition;
        	var nOrdRow = this.dsBookOrd.rowposition;

        	this.dsOrdMst.setColumn(nMstRow, "ORDMST_DATE"		, sSetDate);
        	this.dsOrdMst.setColumn(nMstRow, "BOOKMST_CODE"		, this.dsBookOrd.getColumn(nOrdRow, "BOOKMST_CODE"));
        	this.dsOrdMst.setColumn(nMstRow, "BOOKMST_YEAR"		, this.dsBookOrd.getColumn(nOrdRow, "BOOKMST_YEAR"));
        	this.dsOrdMst.setColumn(nMstRow, "BOOKMST_SEQ"		, this.dsBookOrd.getColumn(nOrdRow, "BOOKMST_SEQ"));
        	this.dsOrdMst.setColumn(nMstRow, "BOOKMST_ID"		, this.dsBookOrd.getColumn(nOrdRow, "BOOKMST_ID"));
        	this.dsOrdMst.setColumn(nMstRow, "BOOKMST_NAME"		, this.dsBookOrd.getColumn(nOrdRow, "BOOKMST_NAME"));
        	this.dsOrdMst.setColumn(nMstRow, "ORDER_TOTAL"		, this.dsBookOrd.getColumn(nOrdRow, "ORDER_TOTAL"));
        	this.dsOrdMst.setColumn(nMstRow, "ORDMST_REVIVAL"	, "0");
        	this.dsOrdMst.setColumn(nMstRow, "REVIVAL"			, "");
        	this.dsOrdMst.setColumn(nMstRow, "PLT_CODE"			, this.dsBookOrd.getColumn(nOrdRow, "PLT_CODE"));
        	this.dsOrdMst.setColumn(nMstRow, "PLT_NAME"			, this.dsBookOrd.getColumn(nOrdRow, "PLT_NAME"));
        	this.dsOrdMst.setColumn(nMstRow, "PLT_PAGE"			, this.dsBookOrd.getColumn(nOrdRow, "PLT_PAGE"));
        	this.dsOrdMst.setColumn(nMstRow, "PLT_PRNSIGNATURE"	, this.dsBookOrd.getColumn(nOrdRow, "PLT_PRNSIGNATURE"));
        	this.dsOrdMst.setColumn(nMstRow, "BOOKMST_SIGNATURE", this.dsBookOrd.getColumn(nOrdRow, "BOOKMST_SIGNATURE"));
        	this.dsOrdMst.setColumn(nMstRow, "BOOKMST_BODYPAGE"	, this.dsBookOrd.getColumn(nOrdRow, "BOOKMST_BODYPAGE"));
        	this.dsOrdMst.setColumn(nMstRow, "BND_CODE"			, this.dsBookOrd.getColumn(nOrdRow, "BND_CODE"));
        	this.dsOrdMst.setColumn(nMstRow, "BND_NAME"			, this.dsBookOrd.getColumn(nOrdRow, "BND_NAME"));
        	this.dsOrdMst.setColumn(nMstRow, "BOOKMST_REMARK"	, this.dsBookOrd.getColumn(nOrdRow, "BOOKMST_REMARK"));
        	this.dsOrdMst.setColumn(nMstRow, "PDTDTL_DATE"		, "00000000");
        	this.dsOrdMst.setColumn(nMstRow, "PDTDTL_NUMBER"	, "0000");
        	this.dsOrdMst.setColumn(nMstRow, "PDTDTL_DTLNUMBER"	, "00");
        	this.dsOrdMst.setColumn(nMstRow, "PDTDTL_PDT_QTY"	, 0);			// 생산의뢰서에서 불러오지 않기 때문에 0으로 설정
        	this.dsOrdMst.setColumn(nMstRow, "EMPLOYEE_ID"		, gv_sabun);

            //별책제본 가져오기
            this.fctn_SeparateBind_select(nMstRow);
            //대표규격 가져오기
            this.fctn_BookmstSize_select(nMstRow);

        	// 도서코드를 수정 못하게
        	this.edBookCd.set_enable(false);
        	this.edBookYear.set_enable(false);
        	this.edBookSeq.set_enable(false);
        }

        //생산의뢰서 내역 가져오기 POPUP호출
        this.btnImport_onclick = function(obj,e)
        {
        	this.lfn_showModal("popup", "", "mk::MK131_Imp_PrdtRqst.xfdl", "popupImpPrdtRqst", this, 10, 58, 1080, 650);
        };

        //추가부록제본 멀티선택div 호출
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

        //추가부록제본 멀티선택 적용
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

        //추가부록제본 멀티선택 취소
        this.btnCcl_onclick = function(obj,e)
        {
        	for(var irow = 0; irow <= this.ds_mk_Separate_Binding.rowcount; irow++){
        		this.ds_mk_Separate_Binding.setColumn(irow, "CHK", "0");
        	}

        	this.dsSeparateBind.clearData();
        	this.btnMultiSel_onclick("false");
        	this.edtSepBind.set_value("");

        };

        //본문대수 구하기
        this.medtSignature_onsetfocus = function(obj,e)
        {
        	if(this.edPlate.value == "00")
        		this.medtSignature.set_value(0);
        	else{
        		 // 본문 페이지 / 인쇄대수, 소수 3번째 자리에서 반올림
        		this.medtSignature.text = nexacro.round(nexacro.toNumber(this.medtBodyPage.text) / this.ds_mk_plate.lookup("PLT_CODE", this.edPlate.text, "PLT_PRNSIGNATURE"), 2);
        	}
        };

        this.LocalFctn_OnKeyDown = function(obj,e)
        {
        	var curObj = this.getFocus();

        	//ENTER입력시 TAB처럼 이동
        	if(e.keycode == "13"){

        		curObj = this.getNextComponent(curObj, true);
        		curObj.setFocus();

        		//콤보타입일 경우 목록보이게 자동설정
        		if(curObj == "[object Combo]")
        		{
        			if(curObj.index == -1)
        				curObj.dropdown();
        			else
        				this.LocalFctn_OnKeyDown(obj, e.keycode);
        		}else if(curObj == "[object Edit]" || curObj == "[object MaskEdit]")
        			curObj.setSelect(0, -1);
        	}else if(e.keycode == "27")   //ESC키
        	{
        		if(this.DivDtl.visible == true)
        			this.grdOrdMst.setFocus();
        		else
        			this.grdOrdMst.setFocus();
        	}else if(e.keycode == "112")   //F1 키  ->  조회
        	{
        		this.btnSearch_onclick();
        	}else if(e.keycode == "113")   //F2 키  -> 신규
        	{
        		if(this.btnNew.enable == true)
        			this.btnNew_onclick();
        	}else if(e.keycode == "114")   //F3 키  -> 저장
        	{
        		if(this.btnSave.enable == true)
        			this.btnSave_onclick();
        	}else if(e.keycode == "115")   //F4 키  -> 삭제
        	{
        		if(this.btnDel.enable == true)
        			this.btnDel_onclick();
        	}else if(e.keycode == "116")   //F5 키  -> 출력
        	{
        		this.btnPrt_onclick();
        	}
        };

        this.common_OnFocus = function(obj,e)
        {
        	if(obj != "[object Calendar]")
        		obj.setSelect(0, -1);

        };

        this.edMstRemark_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.grdOrdMst.setFocus();
        		this.grdOrdMst_oncelldblclick();
        	}
        };

        this.grdOrdMst_oncelldblclick = function(obj,e)
        {
        	nOrdMst_Id = this.dsOrdMst.getColumn(this.dsOrdMst.rowposition, "ORDMST_ID");

        	if(this.dsOrdMst.rowcount > 0 && ( nOrdMst_Id !="" || Eco.isUndefined(nOrdMst_Id) == false))
        	{

        		if(vPerDML == 1)
        			this.btnSave_onclick();

        		this.DivDtl.set_visible(true);
        		this.DivDtl.form.getData_Dtl(nOrdMst_Id, vPerDML);

        		if(vPerDML != 1 && vPerSel == 1)
        			this.fctn_User_Enabled(this, false);

        	}else{
        		alert("발주내역을 먼저 불러와 주십시요.");
        	}
        };

        this.grdOrdMst_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		this.fn_SetGridCheckAll(obj, e);
        	}
        };


        this.fn_SetGridCheckAll = function (obj, e)
        {
        	vChkAll = (vChkAll ? 0 : 1);
        	this.dsOrdMst.set_enableevent(false);
        	for (var i = 0; i < this.dsOrdMst.getRowCount(); i++)
        	{
        		this.dsOrdMst.setColumn(i, "CHK", vChkAll);
        	}
        	this.grdOrdMst.setCellProperty("Head", 0, "expr", vChkAll);
        	this.dsOrdMst.set_enableevent(true);
        };

        //출력버튼 이벤트
        this.btnPrt_onclick = function(obj,e)
        {
        	this.fctn_Mst_Save("save");

        	nOrdMst_Id = this.dsOrdMst.getColumn(this.dsOrdMst.rowposition, "ORDMST_ID");

        	if(nOrdMst_Id !="" || Eco.isUndefined(nOrdMst_Id))
        	{
        		var rdUrl = gv_svcUrl + "rpt/mk/MK131.mrd";
        		var rdParam = "/rp [" + nOrdMst_Id + "]";

        		this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1500, 850);

        		if(this.DivDtl.visible == false && this.dsOrdMst.rowposition != this.dsOrdMst.getRowCount()-1)
        			this.dsOrdMst.set_rowposition(this.dsOrdMst.rowposition+1);

        	}else{
        		alert("조회된 항목이 없습니다.");
        	}
        };

        //출력 오른쪽 마우스 클릭이벤트
        this.btnPrt_onrbuttonup = function(obj,e)
        {
        	var nSelectRowCount = 0;
        	nSelectRowCount = this.dsOrdMst.getCaseCount("CHK=='1'");

        	if ((nSelectRowCount == 1 || nSelectRowCount == 0) && (this.dsOrdMst.getRowType(this.dsOrdMst.rowpostion) == "2"))
        	{
        		alert("선택된 자료가 없습니다.");
        		return false;
        	}

        	var formX = this.btnView.getOffsetLeft();
        	var formY = this.btnView.getOffsetBottom();

        	var childFrame = new ChildFrame();
        	var parentFrame = this.getOwnerFrame();

        	//child frame 초기화
        	childFrame.init("popupRightPrt", formX, formY, 200, 510, null, null, "mk::MK131_Print_LeftMenuF.xfdl");
        	childFrame.set_showtitlebar(false);

        	// 동적으로 생성한 ChildFrame을 Modal Dialog로 보여줌.
        	childFrame.showModal(parentFrame, "", this, "", true);

        };

        //발주서 보기 클릭이벤트
        this.btnView_onclick = function(obj,e)
        {
        	nOrdMst_Id = this.dsOrdMst.getColumn(this.dsOrdMst.rowposition, "ORDMST_ID");

        	if(nOrdMst_Id != "" && Eco.isUndefined(nOrdMst_Id) == false)
        	{
        		rdUrl = gv_svcUrl + "rpt/mk/MK131.mrd";
        		rdParam = "/rp [" + nOrdMst_Id + "]";
        		var vScreenWidth = system.getScreenWidth();

        		if(vScreenWidth >= 1920)
        			vScreenWidth = vScreenWidth/2

        		nexacro.open("popupPrt", "mk::MKRDF.xfdl", this.getOwnerFrame(), {rdUrl:rdUrl, rdParam:rdParam}, "autosize=false", 0, 0, vScreenWidth, system.getScreenHeight(), this);

        		if(this.DivDtl.visible == false && this.dsOrdMst.rowposition != this.dsOrdMst.getRowCount()-1)
        			this.dsOrdMst.set_rowposition(this.dsOrdMst.rowposition+1);
        	}else{
        		alert("조회된 항목이 없습니다.");
        		return false;
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkMain_onload,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.grdOrdMst.addEventHandler("oncelldblclick",this.grdOrdMst_oncelldblclick,this);
            this.grdOrdMst.addEventHandler("onheadclick",this.grdOrdMst_onheadclick,this);
            this.calOrdMstDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.edBookCd.addEventHandler("onchanged",this.edBookCd_onchanged,this);
            this.edBookCd.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.edBookCd.addEventHandler("onsetfocus",this.common_OnFocus,this);
            this.edBookYear.addEventHandler("onchanged",this.edBookYear_onchanged,this);
            this.edMstRemark.addEventHandler("onsetfocus",this.common_OnFocus,this);
            this.edMstRemark.addEventHandler("onkeydown",this.edMstRemark_onkeydown,this);
            this.btnView.addEventHandler("onclick",this.btnView_onclick,this);
            this.btnPrt.addEventHandler("onclick",this.btnPrt_onclick,this);
            this.btnPrt.addEventHandler("onrbuttonup",this.btnPrt_onrbuttonup,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnNew.addEventHandler("onclick",this.btnNew_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnImport.addEventHandler("onclick",this.btnImport_onclick,this);
            this.medtQty.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.medtQty.addEventHandler("onsetfocus",this.common_OnFocus,this);
            this.btnMultiSel.addEventHandler("onclick",this.btnMultiSel_onclick,this);
            this.medtSignature.addEventHandler("onsetfocus",this.medtSignature_onsetfocus,this);
            this.btnSel.addEventHandler("onclick",this.btnSel_onclick,this);
            this.btnCcl.addEventHandler("onclick",this.btnCcl_onclick,this);
            this.dsOrdMst.addEventHandler("onrowposchanged",this.dsOrdMst_onrowposchanged,this);
            this.dsOrdMst.addEventHandler("cancolumnchange",this.dsOrdMst_cancolumnchange,this);
            this.dsOrdMst.addEventHandler("onrowsetchanged",this.dsOrdMst_onrowsetchanged,this);
            this.dsOrdMst.addEventHandler("oncolumnchanged",this.dsOrdMst_oncolumnchanged,this);
        };
        this.loadIncludeScript("MK131.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
