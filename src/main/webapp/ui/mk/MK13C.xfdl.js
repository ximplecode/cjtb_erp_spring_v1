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
            this.set_titletext("필름 관리");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOrdMst", this);
            obj._setContents("<ColumnInfo><Column id=\"ORDMST_DATENO\" type=\"STRING\" size=\"15\"/><Column id=\"ORDMST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ORDMST_NO\" type=\"STRING\" size=\"4\"/><Column id=\"ORDMST_ID\" type=\"STRING\" size=\"20\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/><Column id=\"ORDMST_QTY\" type=\"INT\" size=\"6\"/><Column id=\"ORDER_TOTAL\" type=\"INT\" size=\"6\"/><Column id=\"ORDMST_REVIVAL\" type=\"STRING\" size=\"1\"/><Column id=\"REVIVAL\" type=\"STRING\" size=\"4\"/><Column id=\"PLT_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"PLT_NAME\" type=\"STRING\" size=\"15\"/><Column id=\"PLT_PAGE\" type=\"INT\" size=\"3\"/><Column id=\"PLT_PRNSIGNATURE\" type=\"INT\" size=\"3\"/><Column id=\"BOOKMST_BODYPAGE\" type=\"INT\" size=\"4\"/><Column id=\"BOOKMST_SIGNATURE\" type=\"DECIMAL\" size=\"6\"/><Column id=\"BND_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"BND_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"ORDMST_REMARK\" type=\"STRING\" size=\"70\"/><Column id=\"BOOKMST_REMARK\" type=\"STRING\" size=\"70\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"PDTDTL_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"PDTDTL_NUMBER\" type=\"STRING\" size=\"4\"/><Column id=\"PDTDTL_DTLNUMBER\" type=\"STRING\" size=\"2\"/><Column id=\"PDTDTL_PDT_QTY\" type=\"INT\" size=\"6\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMakeClose", this);
            obj._setContents("<ColumnInfo><Column id=\"MKCLS_YM\" type=\"STRING\" size=\"6\"/><Column id=\"MKCLS_STARTDATE\" type=\"STRING\" size=\"8\"/><Column id=\"MKCLS_ENDDATE\" type=\"STRING\" size=\"8\"/><Column id=\"MKCLS_CLOSE\" type=\"STRING\" size=\"1\"/><Column id=\"MKCLS_MODIFY\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
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
            
            // UI Components Initialize
            obj = new Static("Static02","18","10","312","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("필름관리");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("stBigo00","17","187","85","116",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("도서관리\r\n\r\n비 고");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaBookRemark","stBigo00:3","187","90.54%","116",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMst","17","txaBookRemark:3","97.31%","56.25%",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_binddataset("dsOrdMst");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"105\"/><Column size=\"89\"/><Column size=\"42\"/><Column size=\"47\"/><Column size=\"242\"/><Column size=\"72\"/><Column size=\"155\"/><Column size=\"154\"/><Column size=\"63\"/><Column size=\"67\"/><Column size=\"73\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"발주번호\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" rowspan=\"2\" text=\"도서코드\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" rowspan=\"2\" text=\"순번\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" rowspan=\"2\" text=\"연판\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" rowspan=\"2\" text=\"도서명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" rowspan=\"2\" text=\"발주수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" rowspan=\"2\" text=\"판형\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" rowspan=\"2\" text=\"제본\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" colspan=\"2\" text=\"본문\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"10\" rowspan=\"2\" text=\"재생\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"8\" text=\"쪽수\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"9\" text=\"대수\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:ORDMST_DATENO\" displaytype=\"normal\" combodataset=\"ds_mk_UseType\" combocodecol=\"USE_TYPE_CODE\" combodatacol=\"USE_TYPE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" cssclass=\"expr:REVIVAL==&apos;재생&apos;?&quot;BgChange3&quot;:&quot;&quot; \"/><Cell col=\"1\" text=\"bind:BOOKMST_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" edittype=\"none\" editmaxlength=\"20\" displaytype=\"normal\" combodataset=\"ds_mk_Cust\" combodatacol=\"CUST_NAME\" combocodecol=\"CUST\" textAlign=\"center\" cssclass=\"expr:REVIVAL==&apos;재생&apos;?&quot;BgChange3&quot;:&quot;&quot; \"/><Cell col=\"2\" text=\"bind:BOOKMST_SEQ\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" edittype=\"none\" editmaxlength=\"20\" displaytype=\"normal\" combodataset=\"ds_mk_Cust\" combodatacol=\"CUST_NAME\" combocodecol=\"CUST\" textAlign=\"center\" cssclass=\"expr:REVIVAL==&apos;재생&apos;?&quot;BgChange3&quot;:&quot;&quot; \"/><Cell col=\"3\" text=\"bind:BOOKMST_YEAR\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" edittype=\"none\" editmaxlength=\"20\" displaytype=\"normal\" combodataset=\"ds_mk_Cust\" combodatacol=\"CUST_NAME\" combocodecol=\"CUST\" textAlign=\"center\" cssclass=\"expr:REVIVAL==&apos;재생&apos;?&quot;BgChange3&quot;:&quot;&quot; \"/><Cell col=\"4\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" text=\"bind:BOOKMST_NAME\" cssclass=\"expr:REVIVAL==&apos;재생&apos;?&quot;BgChange3&quot;:&quot;&quot; \"/><Cell col=\"5\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" text=\"bind:ORDMST_QTY\" textAlign=\"right\" cssclass=\"expr:REVIVAL==&apos;재생&apos;?&quot;BgChange3&quot;:&quot;&quot; \"/><Cell col=\"6\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" text=\"bind:PLT_NAME\" displaytype=\"normal\" cssclass=\"expr:REVIVAL==&apos;재생&apos;?&quot;BgChange3&quot;:&quot;&quot; \"/><Cell col=\"7\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" text=\"bind:BND_NAME\" displaytype=\"normal\" cssclass=\"expr:REVIVAL==&apos;재생&apos;?&quot;BgChange3&quot;:&quot;&quot; \"/><Cell col=\"8\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" text=\"bind:BOOKMST_BODYPAGE\" displaytype=\"normal\" textAlign=\"right\" cssclass=\"expr:REVIVAL==&apos;재생&apos;?&quot;BgChange3&quot;:&quot;&quot; \"/><Cell col=\"9\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" text=\"bind:BOOKMST_SIGNATURE\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"0.00\" cssclass=\"expr:REVIVAL==&apos;재생&apos;?&quot;BgChange3&quot;:&quot;&quot; \"/><Cell col=\"10\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" text=\"bind:REVIVAL\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:REVIVAL==&apos;재생&apos;?&quot;BgChange3&quot;:&quot;&quot; \"/></Band></Format></Formats>");
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
            obj.set_enable("false");
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
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edBookSeq","edBookCd:3","75","3.31%","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("3");
            obj.set_autoselect("true");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edBookYear","edBookSeq:3","75","4.31%","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_textAlign("center");
            obj.set_enable("false");
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

            obj = new Static("stBodyPage","17","150","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("본문쪽수");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtBodyPage","stBodyPage:3","150","9.08%","35",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stSignature","medtBodyPage:3","150","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("본문대수");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtSignature","stSignature:3","150","9.08%","35",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_autoselect("true");
            obj.set_enable("false");
            obj.set_format("#,###.##");
            this.addChild(obj.name, obj);

            obj = new Static("stRevival","medtSignature:3","150","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("재생여부");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new CheckBox("cbRevival","stRevival:16","152","65","36",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text(" 재생");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stBigo","cbRevival:7","150","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("비고");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edMstRemark","stBigo:3","150","45.15%","35",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"11","80","40","8.38%",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","btnSearch:10","11","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("저장");
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
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stPlt","medtQty:3","113","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("판형");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edPlate","stPlt:3","113","26.15%","35",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stBind","edPlate:3","113","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("제본");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edBind","stBind:3","113","25.31%","35",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("DivDtl","16","186","98.00%","73.06%",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_url("mk::MK13C_DTL.xfdl");
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

            obj = new BindItem("item16","edBind","value","dsOrdMst","BND_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","medtBodyPage","value","dsOrdMst","BOOKMST_BODYPAGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","medtSignature","value","dsOrdMst","BOOKMST_SIGNATURE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","cbRevival","value","dsOrdMst","ORDMST_REVIVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","txaBookRemark","value","dsOrdMst","BOOKMST_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","mk::MK13C_DTL.xfdl");
        };
        
        // User Script
        this.addIncludeScript("MK13C.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK13C.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("MK13C.xfdl","Lib::Lib_mk.xjs");
        this.registerScript("MK13C.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_mk.xjs"); /*include "Lib::Lib_mk.xjs"*/;

        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var nRow, nOrdMst_Id, strVisible, rdUrl, rdParam;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerDML, vPerDel, vPerPrt;
        var vStr = "U";
        var nSaveRow = -1;
        var sSetDate = "";
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");

        //필름 관리 화면은 발주서 등록내역 중 USE_PROCESSTYPE = 'P'인 항목들만 가져와서
        //필름출고일자, 필름입고일자, 필름비고만 관리하기 때문에 세부내역 저장기능(UPDATE)만 가능


        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", nexacro.getApplication().gv_selectMenu);

        	vPerSel = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_SELECT");
        	vPerDML = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_DML");
        	vPerDel = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_DELETE");
        	vPerPrt = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_PRINT");

        	if(vPerSel == "1"){

        		str_arg = "MKCLS_YM=" + nexacro.wrapQuote( ) + " MKCLS_STARTDATE=" +nexacro.wrapQuote( );
        		this.gfn_TransactionP("select", "JSP/mk/make_closing.jsp", "dsMakeClose=dsMakeClose", "dsMakeClose=dsMakeClose", str_arg, "", false, "S", false, this); 	//마감여부
        	}

        	//DML권한 체크 및 컴포넌트 ENABLE처리
        	if(vPerDML != "1" || vPerDel != "1"  || vPerPrt != "1")
        		this.fctn_User_Enabled(this, false);


        	this.grdMst.setFocus();

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
        	this.lfn_grdAutofit(this.grdMst);
        };

        this.btnSearch_onclick = function(obj,e)
        {
        	this.dsOrdMstS.deleteAll();
        	var objParam = {dsParam1:this.dsOrdMst}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupSearch", objParam, "mk::MK131_Search.xfdl", "popupCallback", this, 10, 58, 530, 320);
        };

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

        	if(vPerSel != 1)
        		this.btnSearch.set_enable(_set);

        	if(vPerDML != 1)
        		this.btnSave.set_enable(_set);

        }

        this.btnSave_onclick = function(obj,e)
        {
        	if(this.DivDtl.visible == true)
        		this.DivDtl.form.fctn_Dtl_save(vPerDML);
        };

        this.LocalFctn_OnKeyDown = function(obj,e)
        {
        	if(e.keycode == "27")   //ESC키
        	{
        		if(this.DivDtl.visible == false)
        			this.grdMst.setFocus();
        	}else if(e.keycode == "112")   //F1 키  ->  조회
        	{
        		this.btnSearch_onclick();
        	}else if(e.keycode == "114")   //F3 키  -> 저장
        	{
        		if(this.btnSave.enable == true)
        		this.btnSave_onclick();
        	}
        };

        this.edMstRemark_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.grdMst.setFocus();
        		this.grdMst_oncelldblclick();
        	}
        };

        this.grdMst_oncelldblclick = function(obj,e)
        {
        	nOrdMst_Id = this.dsOrdMst.getColumn(this.dsOrdMst.rowposition, "ORDMST_ID");

        	if(this.dsOrdMst.rowcount > 0 && ( nOrdMst_Id !="" || Eco.isUndefined(nOrdMst_Id) == false))
        	{
        		this.DivDtl.set_visible(true);
        		this.DivDtl.form.getData_Dtl(nOrdMst_Id, vPerDML);
        	}else{
        		alert("발주내역을 먼저 불러와 주십시요.");
        	}
        };

        this.grdMst_onenterdown = function(obj,e)
        {
        	this.grdMst_oncelldblclick();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkMain_onload,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.grdMst.addEventHandler("oncelldblclick",this.grdMst_oncelldblclick,this);
            this.grdMst.addEventHandler("onenterdown",this.grdMst_onenterdown,this);
            this.calOrdMstDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.edBookCd.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.edMstRemark.addEventHandler("onkeydown",this.edMstRemark_onkeydown,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
        };
        this.loadIncludeScript("MK13C.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
