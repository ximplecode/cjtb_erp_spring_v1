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
            this.set_titletext("발주별 생산금액 현황");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"GB\" type=\"STRING\" size=\"256\"/><Column id=\"ORDMST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORDMST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ORDMST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_PANQTY_F\" type=\"INT\" size=\"256\"/><Column id=\"ORDDTL_PANAMOUNT_F\" type=\"INT\" size=\"256\"/><Column id=\"ORDDTL_PANVAT_F\" type=\"INT\" size=\"256\"/><Column id=\"ORDDTL_PANQTY_CTP\" type=\"INT\" size=\"256\"/><Column id=\"ORDDTL_CTP_AMOUNT\" type=\"INT\" size=\"256\"/><Column id=\"ORDDTL_AMOUNT_P\" type=\"INT\" size=\"256\"/><Column id=\"ORDDTL_VAT_P\" type=\"INT\" size=\"256\"/><Column id=\"ORDDTL_AMOUNT_B\" type=\"INT\" size=\"256\"/><Column id=\"ORDDTL_VAT_B\" type=\"INT\" size=\"256\"/><Column id=\"ORDDTL_AMOUNT_C\" type=\"INT\" size=\"256\"/><Column id=\"ORDDTL_VAT_C\" type=\"INT\" size=\"256\"/><Column id=\"ORDDTL_AMOUNT_A\" type=\"INT\" size=\"256\"/><Column id=\"ORDDTL_VAT_A\" type=\"INT\" size=\"256\"/><Column id=\"ORDDTL_AMOUNT_PICK\" type=\"INT\" size=\"256\"/><Column id=\"ORDDTL_VAT_PICK\" type=\"INT\" size=\"256\"/><Column id=\"ORDDTLPPRCOST_AMOUNT\" type=\"INT\" size=\"256\"/><Column id=\"ORDMST_QTY\" type=\"INT\" size=\"256\"/><Column id=\"ORD_AMT\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBookMst", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","12","10","528","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("발주별 생산금액 현황");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"49","43","39","0.69%",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_icon("url(\'Img::ico_excel_O.png\')");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrt",null,"49","80","40","btnExcel:7",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("출력");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"49","80","40","btnPrt:7",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEDate",null,"13","160","35","btnSearch:25",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate",null,"13","160","35","calEDate:3",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stDate",null,"13","85","35","calSDate:3",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("발주일자");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Edit("edEBookYear",null,"91","160","35","btnSearch:25",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookYear",null,"91","160","35","edEBookYear:3",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stYear",null,"91","85","35","edt_bookYear:3",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("도서년판");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","8","130","98.85%",null,null,"10",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"90\"/><Column size=\"50\"/><Column size=\"35\"/><Column size=\"252\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"55\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"도서코드\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" rowspan=\"2\" text=\"년판\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" rowspan=\"2\" text=\"순번\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" rowspan=\"2\" text=\"도서명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" rowspan=\"2\" text=\"발주일자번호\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" rowspan=\"2\" text=\"수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" colspan=\"4\" text=\"인쇄판\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"10\" rowspan=\"2\" text=\"인쇄비\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"11\" rowspan=\"2\" text=\"제본비\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"12\" rowspan=\"2\" text=\"가공비\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"13\" rowspan=\"2\" text=\"후가공비\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"14\" rowspan=\"2\" text=\"뜯기비용\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"15\" rowspan=\"2\" text=\"재료비\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"16\" rowspan=\"2\" text=\"합계\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"6\" text=\"필름수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"7\" text=\"필름금액\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"8\" text=\"CTP수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"9\" text=\"CTP금액\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:BOOKMST_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" suppress=\"0\" suppressalign=\"middle\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"bind:BOOKMST_YEAR\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" suppress=\"0\" suppressalign=\"middle\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:BOOKMST_SEQ\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" suppress=\"0\" suppressalign=\"middle\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:BOOKMST_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\" maskeditformat=\"#.###\" maskeditmaskchar=\"0\" maskedittype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\" wordWrap=\"char\"/><Cell col=\"4\" text=\"bind:ORD_NO\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\" maskeditformat=\"#.###\" maskeditmaskchar=\"0\" maskedittype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"bind:ORDMST_QTY\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###\" maskeditmaskchar=\"0\" maskedittype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\" text=\"bind:ORDDTL_PANQTY_F\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###\" maskeditmaskchar=\"0\" maskedittype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\" calendardateformat=\"yyyy-MM-dd\" color=\"#666666\"/><Cell col=\"7\" text=\"bind:ORDDTL_PANAMOUNT_F\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###\" maskeditmaskchar=\"0\" maskedittype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\" calendardateformat=\"yyyy-MM-dd\" color=\"#666666\"/><Cell col=\"8\" text=\"bind:ORDDTL_PANQTY_CTP\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###\" maskeditmaskchar=\"0\" maskedittype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"9\" text=\"bind:ORDDTL_CTP_AMOUNT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###\" maskeditmaskchar=\"0\" maskedittype=\"number\" cssclass=\"expr:ORDDTL_CTP_AMOUNT&gt;&apos;0&apos;?&apos;PRODUCT_HYPERLINK&apos;:&apos;&apos;\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"10\" text=\"bind:ORDDTL_AMOUNT_P\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###\" maskeditmaskchar=\"0\" maskedittype=\"number\" cssclass=\"expr:ORDDTL_AMOUNT_P&gt;&apos;0&apos;?&apos;PRODUCT_HYPERLINK&apos;:&apos;&apos;\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"11\" text=\"bind:ORDDTL_AMOUNT_B\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###\" maskeditmaskchar=\"0\" maskedittype=\"number\" cssclass=\"expr:ORDDTL_AMOUNT_B&gt;&apos;0&apos;?&apos;PRODUCT_HYPERLINK&apos;:&apos;&apos;\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"12\" text=\"bind:ORDDTL_AMOUNT_C\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###\" maskeditmaskchar=\"0\" maskedittype=\"number\" cssclass=\"expr:ORDDTL_AMOUNT_C&gt;&apos;0&apos;?&apos;PRODUCT_HYPERLINK&apos;:&apos;&apos;\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"13\" text=\"bind:ORDDTL_AMOUNT_A\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###\" maskeditmaskchar=\"0\" maskedittype=\"number\" cssclass=\"expr:ORDDTL_AMOUNT_A&gt;&apos;0&apos;?&apos;PRODUCT_HYPERLINK&apos;:&apos;&apos;\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"14\" text=\"bind:ORDDTL_AMOUNT_PICK\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###\" maskeditmaskchar=\"0\" maskedittype=\"number\" cssclass=\"expr:ORDDTL_AMOUNT_PICK&gt;&apos;0&apos;?&apos;PRODUCT_HYPERLINK&apos;:&apos;&apos;\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"15\" text=\"bind:ORDDTLPPRCOST_AMOUNT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###\" maskeditmaskchar=\"0\" maskedittype=\"number\" cssclass=\"expr:ORDDTLPPRCOST_AMOUNT&gt;&apos;0&apos;?&apos;PRODUCT_HYPERLINK&apos;:&apos;&apos;\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"16\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###\" maskeditmaskchar=\"0\" maskedittype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:ORD_AMT\"/></Band><Band id=\"summary\"><Cell background=\"#fbce78\"/><Cell col=\"1\" background=\"#fbce78\"/><Cell col=\"2\" background=\"#fbce78\"/><Cell col=\"3\" background=\"#fbce78\" font=\"bold 14px/normal &quot;함초롬돋움&quot;\" text=\"합 계\"/><Cell col=\"4\" background=\"#fbce78\"/><Cell col=\"5\" background=\"#fbce78\"/><Cell col=\"6\" background=\"#fbce78\" font=\"bold 14px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&apos;ORDDTL_PANQTY_F&apos;);\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"7\" background=\"#fbce78\" font=\"bold 14px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&apos;ORDDTL_PANAMOUNT_F&apos;);\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"8\" background=\"#fbce78\" font=\"bold 14px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&apos;ORDDTL_PANQTY_CTP&apos;);\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"9\" background=\"#fbce78\" font=\"bold 14px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&apos;ORDDTL_CTP_AMOUNT&apos;);\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"10\" background=\"#fbce78\" font=\"bold 14px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&apos;ORDDTL_AMOUNT_P&apos;);\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"11\" background=\"#fbce78\" font=\"bold 14px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&apos;ORDDTL_AMOUNT_B&apos;);\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"12\" background=\"#fbce78\" font=\"bold 14px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&apos;ORDDTL_AMOUNT_C&apos;);\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"13\" background=\"#fbce78\" font=\"bold 14px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&apos;ORDDTL_AMOUNT_A&apos;);\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"14\" background=\"#fbce78\" font=\"bold 14px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&apos;ORDDTL_AMOUNT_PICK&apos;);\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"15\" background=\"#fbce78\" font=\"bold 14px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&apos;ORDDTLPPRCOST_AMOUNT&apos;);\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"16\" background=\"#fbce78\" font=\"bold 14px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&apos;ORD_AMT&apos;);\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edEBookCd",null,"52","160","35","btnSearch:25",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("10");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookCode",null,"52","160","35","edEBookCd:3",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("10");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnBook_Search",null,"52","85","35","edt_bookCode:3",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("도서번호");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK14G.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK14G.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK14G.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerPrt;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var urlExcel = nexacro.getApplication().gv_urlXeni;
        var gv_urlRdDataServer = nexacro.getApplication().gv_urlRdDataServer;

        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", nexacro.getApplication().gv_selectMenu);

        	vPerSel = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_SELECT");
        	vPerPrt = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_PRINT");

        	//권한 체크 및 컴포넌트 ENABLE처리
        	if(vPerSel != "1" || vPerPrt != "1")
        		this.fctn_User_Enabled(this, false);

        	if(vPerSel = "1"){
        		this.calSDate.setFocus();
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
        	this.lfn_grdAutofit(this.grdList);
        };

        //조회버튼 클릭
        this.btnSearch_onclick = function(obj,e)
        {
        	if(this.calSDate.value == "" || Eco.isUndefined(this.calSDate.value) == true )
        	{
        		alert("시작일자를 입력해 주세요.");
        		this.calSDate.setFocus();
        		return false;
        	}

        	if (this.calEDate.value == "" || Eco.isUndefined(this.calEDate.value) == true )
        	{
        		alert("종료일자를 입력해 주세요.");
        		this.calEDate.setFocus();
        		return false;
        	}

        	in_ds 	= "dsList=dsList";
        	out_ds 	= "dsList=dsList";

        	var vSBookCd, vEBookCd, vSBookYear, vEBookYear;

        	if(Eco.isUndefined(this.edt_bookCode.value) == true || this.edt_bookCode.value == ""){
        		vSBookCd = "";
        	}else {
        		vSBookCd = this.edt_bookCode.value;
        	}

        	if(Eco.isUndefined(this.edEBookCd.value) == true || this.edEBookCd.value == ""){
        		vEBookCd = vSBookCd;
        	}else {
        		vEBookCd = this.edEBookCd.value;
        	}

        	if(Eco.isUndefined(this.edt_bookYear.value) == true || this.edt_bookYear.value == ""){
        		vSBookYear = "";
        	}else {
        		vSBookYear = this.edt_bookYear.value;
        	}

        	if(Eco.isUndefined(this.edEBookYear.value) == true || this.edEBookYear.value == ""){
        		vEBookYear = vSBookYear;
        	}else {
        		vEBookYear = this.edEBookYear.value;
        	}

        	str_url = "JSP/mk/mk14G_Select.jsp";
        	str_arg = "GB=" + nexacro.wrapQuote(1) +
        			  " SDATE=" + nexacro.wrapQuote(this.calSDate.value) +
        	          " EDATE=" + nexacro.wrapQuote(this.calEDate.value) +
        	          " SBOOKCODE=" +nexacro.wrapQuote(vSBookCd) +
        			  " EBOOKCODE=" +nexacro.wrapQuote(vEBookCd) +
        			  " SBOOKYEAR=" +nexacro.wrapQuote(vSBookYear) +
        			  " EBOOKYEAR=" +nexacro.wrapQuote(vEBookYear);

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnCallbackSelect", false, "S", false, this);
        };


        this.fnCallbackSelect = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{

        		if(this.dsList.rowcount == 0){
        			alert("조회된 자료가 없습니다.");
        			return false;
        		}
        	}
        };

        //레포트 출력 이벤트
        this.btnPrt_onclick = function(obj,e)
        {
        	if(this.calSDate.value == "" || Eco.isUndefined(this.calSDate.value) == true )
        	{
        		alert("시작일자를 입력해 주세요.");
        		this.calSDate.setFocus();
        		return false;
        	}

        	if (this.calEDate.value == "" || Eco.isUndefined(this.calEDate.value) == true )
        	{
        		alert("종료일자를 입력해 주세요.");
        		this.calEDate.setFocus();
        		return false;
        	}

        	var vSBookCd, vEBookCd, vSBookYear, vEBookYear;
        	if(Eco.isUndefined(this.edt_bookCode.value) == true || this.edt_bookCode.value == ""){
        		vSBookCd = "";
        	}else {
        		vSBookCd = this.edt_bookCode.value;
        	}

        	if(Eco.isUndefined(this.edEBookCd.value) == true || this.edEBookCd.value == ""){
        		vEBookCd = vSBookCd;
        	}else {
        		vEBookCd = this.edEBookCd.value;
        	}

        	if(Eco.isUndefined(this.edt_bookYear.value) == true || this.edt_bookYear.value == ""){
        		vSBookYear = "";
        	}else {
        		vSBookYear = this.edt_bookYear.value;
        	}

        	if(Eco.isUndefined(this.edEBookYear.value) == true || this.edEBookYear.value == ""){
        		vEBookYear = vSBookYear;
        	}else {
        		vEBookYear = this.edEBookYear.value;
        	}

        	var rdUrl = gv_svcUrl + "rpt/mk/MK14G.mrd";
            var rdParam = "/ragentpath ["+ gv_urlRdDataServer +"]"+ " /rp [1] [" + this.calSDate.value + "] [" +  this.calSDate.value + "] [" +  vSBookCd + "] [" +  vEBookCd + "] [" +  vSBookYear + "] [" +  vEBookYear + "]";

        	var vScreenWidth = system.getScreenWidth();

        	if(vScreenWidth >= 1920)
        		vScreenWidth = vScreenWidth/2

        	nexacro.open("popupPrt", "mk::MKRDF.xfdl", this.getOwnerFrame(), {rdUrl:rdUrl, rdParam:rdParam}, "autosize=false", 0, 0, vScreenWidth, system.getScreenHeight(), this);

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

        	if(vPerPrt != 1){
        		this.btnPrt.set_enable(_set);
        		this.btnExcel.set_enable(_set);
        	}
        }

        this.grdList_oncellclick = function(obj,e)
        {
        	var vGB = this.dsList.getColumn(e.row, "GB");
        	var vOrdMstId = this.dsList.getColumn(e.row, "ORDMST_ID");
        	var vBookMstId = this.dsList.getColumn(e.row, "BOOKMST_ID");
        	var objUrl = "";
        	var objParam = {dsParam1:vGB
        				   ,dsParam2:vOrdMstId
        				   ,dsParam3:vBookMstId}; //popup 화면으로 전달할 값

        	if(e.col == 10)//인쇄비
        		objUrl = "mk::MK14G_1.xfdl";
        	else if(e.col == 11) //제본비
        		objUrl = "mk::MK14G_2.xfdl";
        	else if(e.col == 12) //외주가공비
        		objUrl = "mk::MK14G_3.xfdl";
        	else if(e.col == 13) //후가공비
        		objUrl = "mk::MK14G_4.xfdl";
        	else if(e.col == 14) //뜯기비용
        		objUrl = "mk::MK14G_5.xfdl";
        	else if(e.col == 15) //재료비
        		objUrl = "mk::MK14G_6.xfdl";
        	else if(e.col == 9) //CTP
        		objUrl = "mk::MK14G_7.xfdl";

        	if(objUrl != "")
        		this.lfn_showModal("popupDetailList", objParam, objUrl, "popupCallback", this, 10, 58, 1300, 650);
        };

        this.btnBookSearch_onclick = function(obj,e)
        {
        	var vBookCd, vBookYear;
        	vBookCd = this.edt_bookCode.value;
        	vBookYear = this.edt_bookYear.value;
        	this.dsBookMst.clearData();
        	var objParam = {dsParam1:this.dsBookMst
        				   ,dsParam2:"MK14B"
        				   ,dsParam3:vBookCd
        				   ,dsParam4:vBookYear}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupBook", objParam, "mk::MKBook_SearchF.xfdl", "popupCallback", this, 10, 58, 450, 400);
        };

        this.popupCallback = function(){

        	if(this.dsBookMst.rowcount > 0)
        	{
        		this.edt_bookCode.set_value(this.dsBookMst.getColumn(0, "BOOKMST_CODE"));
        		this.edt_bookYear.set_value(this.dsBookMst.getColumn(0, "BOOKMST_YEAR"));
        	}
        }


        this.btnExcel_onclick = function(obj,e)
        {
        	this.exportObj = new ExcelExportObject();
            var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID,
                this.grdList, "Sheet1!A1");

        	this.exportObj.set_exporturl(urlExcel);
        	this.exportObj.exportData();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkMain_onload,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.btnExcel.addEventHandler("onclick",this.btnExcel_onclick,this);
            this.btnPrt.addEventHandler("onclick",this.btnPrt_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.calEDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.calSDate.addEventHandler("onkeyup",this.LocalFctn_OnKeyDown,this);
            this.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.btnBook_Search.addEventHandler("onclick",this.btnBookSearch_onclick,this);
        };
        this.loadIncludeScript("MK14G.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
