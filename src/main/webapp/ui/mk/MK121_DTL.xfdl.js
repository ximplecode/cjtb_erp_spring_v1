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
            this.set_titletext("용지발주 세부사양");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1265,420);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPprOrdDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"PPRORDMST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PPRORDMST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PPRORDDTL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPRORDDTL_PPRSTND\" type=\"STRING\" size=\"256\"/><Column id=\"PPRORDDTL_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PPRORDDTL_WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CUST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CUST\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST\" type=\"STRING\" size=\"256\"/><Column id=\"PPRORDDTL_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"PPRORDDTL_REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PPRORDDTL_MODIDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_UNIT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            
            // UI Components Initialize
            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Div("DivDtl","0","0","100%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#e8e7e3");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("stPprCd","21","44","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("0");
            obj.set_text("용지코드");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stOrdQty","21","81","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("13");
            obj.set_text("발주수량");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edPprCd","stPprCd:3","44","5.45%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("1");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Combo("cbPprCd","edPprCd:3","44","23.56%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_mk_Paper");
            obj.set_codecolumn("PPR_CODE");
            obj.set_datacolumn("PPR_NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edRemark","109","118",null,"35","1.74%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("12");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Grid("grdPprDtl","21","edRemark:3","96.6%","60.71%",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("14");
            obj.set_binddataset("dsPprOrdDtl");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"215\" band=\"left\"/><Column size=\"54\" band=\"left\"/><Column size=\"138\" band=\"left\"/><Column size=\"85\" band=\"left\"/><Column size=\"83\" band=\"left\"/><Column size=\"131\" band=\"left\"/><Column size=\"97\"/><Column size=\"400\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"용지\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"제지사\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"발주수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"4\" text=\"발주중량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"입고처\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"입고요청일\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"비고\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:PPR_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"combotext\" combodataset=\"ds_mk_Paper\" combocodecol=\"PPR_CODE\" combodatacol=\"PPR_NAME\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:PPRORDDTL_PPRSTND\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"combotext\" combodataset=\"dsPprStnd\" combocodecol=\"PPR_STND\" combodatacol=\"PPR_STNDNAME\"/><Cell col=\"2\" text=\"bind:PPR_CUST\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"combotext\" combodatacol=\"CUST_NAME\" combocodecol=\"CUST\" combodataset=\"ds_mk_Cust\"/><Cell col=\"3\" text=\"bind:PPRORDDTL_QTY\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:PPRORDDTL_WEIGHT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:CUST\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" combodataset=\"ds_mk_Cust\" combocodecol=\"CUST\" combodatacol=\"CUST_NAME\" displaytype=\"combotext\"/><Cell col=\"6\" text=\"bind:PPRORDDTL_REQUESTDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"7\" text=\"bind:PPRORDDTL_CONTENT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\"/></Band></Format></Formats>");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("Static01","12","0","185","46",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("15");
            obj.set_text("▣용지발주 세부사항▣");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Div("DivBtn",null,"0","310","56","0.72%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("16");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Button("btnDSearch","68","7","50","32",null,null,null,null,null,null,this.DivDtl.form.DivBtn.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.DivDtl.form.DivBtn.addChild(obj.name, obj);

            obj = new Button("btnDAdd","126","7","50","32",null,null,null,null,null,null,this.DivDtl.form.DivBtn.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.DivDtl.form.DivBtn.addChild(obj.name, obj);

            obj = new Button("btnDSave","184","7","50","32",null,null,null,null,null,null,this.DivDtl.form.DivBtn.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.DivDtl.form.DivBtn.addChild(obj.name, obj);

            obj = new Button("btnDDel","242","7","50","32",null,null,null,null,null,null,this.DivDtl.form.DivBtn.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.DivDtl.form.DivBtn.addChild(obj.name, obj);

            obj = new Edit("edPprUnit","cbPprCd:20","44","3.08%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Combo("cbPprStnd","edPprUnit:3","44","11.62%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsPprStnd");
            obj.set_codecolumn("PPR_STND");
            obj.set_datacolumn("PPR_STNDNAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new MaskEdit("medtDtlQty","stOrdQty:3","81","12.65%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("7");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_autoselect("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stOrdWeight","medtDtlQty:3","81","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("17");
            obj.set_text("발주중량");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new MaskEdit("medtDtlWeight","stOrdWeight:3","81","12.65%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("8");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_autoselect("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stInCust","medtDtlWeight:3","81","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("18");
            obj.set_text("입고처");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edInCustCd","stInCust:3","81","5.45%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("9");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Combo("cbInCustNm","edInCustCd:3","81","23.56%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_mk_InCust");
            obj.set_codecolumn("CUST");
            obj.set_datacolumn("CUST_NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stRemark","21","118","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("19");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_wordWrap("char");
            obj.set_text("비고");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stPprCust","cbPprStnd:3","44","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("20");
            obj.set_text("제지사");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Edit("edPprCustCd","stPprCust:3","44","5.45%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("5");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Combo("cbPprCustNm","edPprCustCd:3","44","23.64%","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_mk_PprCust");
            obj.set_codecolumn("CUST");
            obj.set_datacolumn("CUST_NAME");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Static("stReqDate","cbInCustNm:3","81","85","35",null,null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("21");
            obj.set_text("입고요청일");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivDtl.addChild(obj.name, obj);

            obj = new Calendar("calReqDate","stReqDate:3","80",null,"35","1.74%",null,null,null,null,null,this.DivDtl.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.DivDtl.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1265,420,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","DivDtl.form.edPprCd","value","dsPprOrdDtl","PPR_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","DivDtl.form.cbPprCd","value","dsPprOrdDtl","PPR_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","DivDtl.form.edPprUnit","value","dsPprOrdDtl","PPR_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","DivDtl.form.cbPprStnd","value","dsPprOrdDtl","PPRORDDTL_PPRSTND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","DivDtl.form.cbPprCustNm","value","dsPprOrdDtl","PPR_CUST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","DivDtl.form.medtDtlQty","value","dsPprOrdDtl","PPRORDDTL_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","DivDtl.form.medtDtlWeight","value","dsPprOrdDtl","PPRORDDTL_WEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","DivDtl.form.edInCustCd","value","dsPprOrdDtl","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","DivDtl.form.cbInCustNm","value","dsPprOrdDtl","CUST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","DivDtl.form.calReqDate","value","dsPprOrdDtl","PPRORDDTL_REQUESTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","DivDtl.form.edRemark","value","dsPprOrdDtl","PPRORDDTL_CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","DivDtl.form.edPprCustCd","value","dsPprOrdDtl","PPR_CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK121_DTL.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK121_DTL.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("MK121_DTL.xfdl","Lib::Lib_mk.xjs");
        this.registerScript("MK121_DTL.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_mk.xjs"); /*include "Lib::Lib_mk.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPprOrdMst_Date, vPprOrdMst_No;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var sCust_Gubn = "41";
        var sPprCust_Gubn = "40";
        var vStr = "D";
        var vPerDML = "U";
        var	vPerDel = "D";

        this.MkDtlMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);
        	vPprOrdMst_Date = this.parent.parent.dsPprOrdMst.getColumn(this.parent.parent.dsPprOrdMst.rowposition, "PPRORDMST_DATE");
        	vPprOrdMst_No = this.parent.parent.dsPprOrdMst.getColumn(this.parent.parent.dsPprOrdMst.rowposition, "PPRORDMST_NO");
        	this.gfn_TransactionP("select", "JSP/mk/getData_paper.jsp", "ds_mk_Paper=ds_mk_Paper", "ds_mk_Paper=ds_mk_Paper", "", "", false, "S", false, this); 			//용지코드
        	this.gfn_TransactionP("select", "JSP/mk/Cust_Select.jsp", "ds_mk_PprCust=ds_mk_PprCust", "ds_mk_PprCust=ds_mk_PprCust", "", "", false, "S", false, this);   				 //업체코드
        	this.ds_mk_InCust.copyData(this.ds_mk_PprCust);

        	this.ds_mk_InCust.filter("CUST_GUBN=='00' || CUST_GUBN=='" + sCust_Gubn + "'");
        	this.ds_mk_PprCust.filter("CUST_GUBN=='00' || CUST_GUBN=='" + sPprCust_Gubn + "'");


        	if(Eco.isUndefined(vPprOrdMst_Date) == false && Eco.isUndefined(vPprOrdMst_No) == false){
        		this.getData_PprOrdDtl(vPprOrdMst_Date, vPprOrdMst_No);
        	}
        };

        //#######################################################
        //  신규로 등록하기
        //#######################################################
        this.fctn_Dtl_New = function()
        {
        	var nRow          = "";
        	switch(this.dsPprOrdDtl.rowposition)
        	{
        	  // -1 이면 레코드가 없는 상태
        	  case -1 : this.dsPprOrdDtl.addRow();
        				this.fctn_Default_Value_Set(this.dsPprOrdDtl.rowposition);
        				break;

        	  default : // 마지막 레코드 입력여부 확인
        	            nRow = this.dsPprOrdDtl.getRowCount()-1;

        	            // 레코드에 내용이 있으면
        	            if (this.fctn_PprOrdDtl_CheckRecord(nRow) == true)
        	            {
        					// ROW 추가
        					this.dsPprOrdDtl.addRow();
        					this.fctn_Default_Value_Set(this.dsPprOrdDtl.rowposition);
        				}
        				else
        					break;

        				// 마지막 레코드로 위치 이동
        				this.dsPprOrdDtl.set_rowposition(this.dsPprOrdDtl.getRowCount()-1);
        				break;
        	}
        	this.DivDtl.form.edPprCd.setFocus();
        }

        // 용지발주 상세내역 가져오기
        this.getData_PprOrdDtl = function(vPprOrdMst_Date, vPprOrdMst_No)
        {
        	str_url = "JSP/mk/mk121f_pprord_dtl.jsp";
        	in_ds ="dsPprOrdDtl=dsPprOrdDtl";
        	out_ds ="dsPprOrdDtl=dsPprOrdDtl";
        	str_arg ="PPRORDMST_DATE=" +nexacro.wrapQuote(vPprOrdMst_Date);
        	str_arg +=" PPRORDMST_NO=" +nexacro.wrapQuote(vPprOrdMst_No);

        	this.gfn_TransactionP("selectDtl", str_url, in_ds, out_ds, str_arg, "Callback_Search", false, "S", false, this);
        };

        this.Callback_Search = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}else{

        		if (this.dsPprOrdDtl.rowcount == 0 && (Eco.isUndefined(vPprOrdMst_Date) == false && Eco.isUndefined(vPprOrdMst_No) == false))
        			this.fctn_Dtl_New();
        		else{  // 있을 경우 그리드에 포커스
        			this.DivDtl.form.grdPprDtl.setFocus();
        		}
        	}
        };

        /*상세내역 조회*/
        this.DivDtl_DivBtn_btnDSearch_onclick = function(obj,e)
        {
        	vPprOrdMst_Date = this.parent.parent.dsPprOrdMst.getColumn(this.parent.parent.dsPprOrdMst.rowposition, "PPRORDMST_DATE");
        	vPprOrdMst_No = this.parent.parent.dsPprOrdMst.getColumn(this.parent.parent.dsPprOrdMst.rowposition, "PPRORDMST_NO");
        	this.getData_PprOrdDtl(vPprOrdMst_Date, vPprOrdMst_No);
        };

        /*상세내역 추가*/
        this.DivDtl_DivBtn_btnDAdd_onclick = function(obj,e)
        {
        	this.dsPprOrdDtl.addRow();
        	this.fctn_Default_Value_Set(this.dsPprOrdDtl.rowposition);
        	this.DivDtl.form.edPprCd.setFocus();
        };

        //row추가시 기본setting
        this.fctn_Default_Value_Set = function(nRow)
        {
        	vPprOrdMst_Date = this.parent.parent.dsPprOrdMst.getColumn(this.parent.parent.dsPprOrdMst.rowposition, "PPRORDMST_DATE");
        	vPprOrdMst_No = this.parent.parent.dsPprOrdMst.getColumn(this.parent.parent.dsPprOrdMst.rowposition, "PPRORDMST_NO");

        	this.dsPprOrdDtl.setColumn(nRow, "PPRORDMST_DATE", vPprOrdMst_Date);
        	this.dsPprOrdDtl.setColumn(nRow, "PPRORDMST_NO", vPprOrdMst_No);
        	this.dsPprOrdDtl.setColumn(nRow, "PPRORDDTL_PPRSTND", 0);
        	this.dsPprOrdDtl.setColumn(nRow, "PPRORDDTL_QTY", 0);
        	this.dsPprOrdDtl.setColumn(nRow, "PPRORDDTL_WEIGHT", 0);

        	this.dsPprOrdDtl.setColumn(nRow, "PPR_CUST_GUBN", sPprCust_Gubn);
        	this.dsPprOrdDtl.setColumn(nRow, "CUST_GUBN", sCust_Gubn);
        	this.dsPprOrdDtl.setColumn(nRow, "EMPLOYEE_ID", gv_sabun);
        	var d = new Date();
        	var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");
        	this.dsPprOrdDtl.setColumn(nRow, "PPRORDDTL_REQUESTDATE", strtoDay);
        }

        //용지발주 세부사양 저장이벤트
        this.DivDtl_DivBtn_btnDSave_onclick = function(vStr)
        {
        	var inds = "input=dsPprOrdDtl:U";
        	var setSave = true;

        	for(var nRow=0 ; nRow<=this.dsPprOrdDtl.rowcount-1 ; nRow++)
        	{
        		if (!this.fctn_PprOrdDtl_CheckRecord(nRow)){
        			setSave = false;
        			return false;
        		}

        		if(Eco.isUndefined(vPprOrdMst_Date) == true && Eco.isUndefined(vPprOrdMst_No) == true){

        			vPprOrdMst_Date = this.parent.parent.dsPprOrdMst.getColumn(this.parent.parent.dsPprOrdMst.rowposition, "PPRORDMST_DATE");
        			vPprOrdMst_No = this.parent.parent.dsPprOrdMst.getColumn(this.parent.parent.dsPprOrdMst.rowposition, "PPRORDMST_NO");

        			if(Eco.isUndefined(vPprOrdMst_Date) == true && Eco.isUndefined(vPprOrdMst_No) == true){
        				alert("용지 발주일자 등록 내역이 없습니다.");
        				return false;
        			}

        			this.dsPprOrdDtl.setColumn(nRow, "PPRORDMST_DATE", vPprOrdMst_Date);
        			this.dsPprOrdDtl.setColumn(nRow, "PPRORDMST_NO", vPprOrdMst_No);
        		}
        	}

        	if(setSave)
        	{
        		this.gfn_TransactionP("save", "JSP/mk/mk121f_pprorddtl_dml.jsp", inds, "", "", "fnDtlSaveCallback", false, vStr, false, this);
        	}
        };


        //#######################################################
        //  입력값 확인
        //#######################################################
        this.fctn_PprOrdDtl_CheckRecord = function(nRow)
        {
        	if (this.dsPprOrdDtl.getColumn(nRow, "PPR_CODE") == null)
        	{
        		alert("용지를 입력해 주십시요.");
        		this.DivDtl.form.edPprCd.setFocus();
        		return false;
        	}

        	if (this.dsPprOrdDtl.getColumn(nRow, "CUST_CODE") == null)
        	{
        		alert("입고처를 입력해 주십시요.");
        		this.DivDtl.form.edInCustCd.setFocus();
        		return false;
        	}

        	if (this.dsPprOrdDtl.getColumn(nRow, "PPRORDDTL_QTY") == null)
        	{
        		alert("발주수량을 입력해 주십시요.");
        		this.DivDtl.form.medtDtlQty.setFocus();
        		return false;
        	}
        	return true;
        }

        this.DivDtl_DivBtn_btnDDel_onclick = function(obj,e)
        {
        	if(Eco.isUndefined(this.dsPprOrdDtl.getColumn(this.dsPprOrdDtl.rowposition, "PPRORDDTL_SEQ")) == true){
        		//row 삭제
        		this.dsPprOrdDtl.deleteRow(this.dsPprOrdDtl.rowposition);
        	}else{
        		// row 삭제 후 저장
        		this.dsPprOrdDtl.deleteRow(this.dsPprOrdDtl.rowposition);
        		this.DivDtl_DivBtn_btnDSave_onclick(vPerDel);
        	}
        };

        //용지발주 세부그리드 키처리
        this.DivDtl_grdPprDtl_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.DivDtl.form.edPprCd.setFocus();
        	}else if(e.keycode == 46){
        		if(Confirm("삭제하시겠습니까?"))
        			this.DivDtl_DivBtn_btnDDel_onclick();
        	}else if(e.keycode == 27){
        		this.parent.parent.grdPprMst.setFocus();
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


        this.DivDtl_cbPprStnd_onitemchanged = function(obj,e)
        {
        	this.DivDtl.form.edPprCustCd.setFocus();
        };

        //#######################################################
        //	용지 종류에 따른 수량 활성화
        //#######################################################
        this.fctn_PprUnit_Change = function()
        {
        	this.DivDtl.form.medtDtlQty.set_enable((this.DivDtl.form.edPprUnit.text != "T"));
        	this.DivDtl.form.medtDtlWeight.set_enable((this.DivDtl.form.edPprUnit.text == "T"));
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

        	if(this.DivDtl.form.edPprUnit.text == "T")
        		this.DivDtl.form.medtDtlWeight.setFocus();
        	else
        		this.DivDtl.form.medtDtlQty.setFocus();
        };

        this.DivDtl_cbPprCustNm_onitemchanged = function(obj,e)
        {

        	var iCustIdx = this.ds_mk_PprCust.findRow("CUST_NAME", this.DivDtl.form.cbPprCustNm.text);
        	this.DivDtl.form.edPprCustCd.set_value(this.ds_mk_PprCust.getColumn(iCustIdx, "CUST_CODE"));

        	if(this.DivDtl.form.edPprUnit.Text == "T")
        		this.DivDtl.form.medtDtlWeight.setFocus();
        	else
        		this.DivDtl.form.medtDtlQty.setFocus();


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
        		this.DivDtl.form.calReqDate.setFocus();
        };

        //입고처명 콤보 변경 이벤트
        this.DivDtl_cbInCustNm_onitemchanged = function(obj,e)
        {
        	var iCustIdx = this.ds_mk_InCust.findRow("CUST_NAME", this.DivDtl.form.cbInCustNm.text);
        	this.DivDtl.form.edInCustCd.set_value(this.ds_mk_InCust.getColumn(iCustIdx, "CUST_CODE"));

        	this.DivDtl.form.calReqDate.setFocus();
        };

        // 비고 키보드 이벤트
        this.DivDtl_edRemark_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.dsPprOrdDtl.setColumn(this.dsPprOrdDtl.rowposition, "PPRORDDTL_CONTENT", this.DivDtl.form.edRemark.text);
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




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkDtlMain_onload,this);
            this.addEventHandler("ontimer",this.MkDtlMain_ontimer,this);
            this.addEventHandler("onsize",this.MkDtlMain_onsize,this);
            this.DivDtl.form.edPprCd.addEventHandler("onchanged",this.DivDtl_edPprCd_onchanged,this);
            this.DivDtl.form.cbPprCd.addEventHandler("onitemchanged",this.DivDtl_cbPprCd_onitemchanged,this);
            this.DivDtl.form.edRemark.addEventHandler("onkeydown",this.DivDtl_edRemark_onkeydown,this);
            this.DivDtl.form.DivBtn.form.btnDSearch.addEventHandler("onclick",this.DivDtl_DivBtn_btnDSearch_onclick,this);
            this.DivDtl.form.DivBtn.form.btnDAdd.addEventHandler("onclick",this.DivDtl_DivBtn_btnDAdd_onclick,this);
            this.DivDtl.form.DivBtn.form.btnDSave.addEventHandler("onclick",this.DivDtl_DivBtn_btnDSave_onclick,this);
            this.DivDtl.form.DivBtn.form.btnDDel.addEventHandler("onclick",this.DivDtl_DivBtn_btnDDel_onclick,this);
            this.DivDtl.form.edPprUnit.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.DivDtl.form.cbPprStnd.addEventHandler("onitemchanged",this.DivDtl_cbPprStnd_onitemchanged,this);
            this.DivDtl.form.medtDtlQty.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.DivDtl.form.medtDtlWeight.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.DivDtl.form.medtDtlWeight.addEventHandler("onchanged",this.DivDtl_medtDtlWeight_onchanged,this);
            this.DivDtl.form.edInCustCd.addEventHandler("onchanged",this.DivDtl_edInCustCd_onchanged,this);
            this.DivDtl.form.cbInCustNm.addEventHandler("onsetfocus",this.DivDtl_cbInCustNm_onsetfocus,this);
            this.DivDtl.form.cbInCustNm.addEventHandler("canitemchange",this.DivDtl_cbInCustNm_canitemchange,this);
            this.DivDtl.form.cbInCustNm.addEventHandler("onitemchanged",this.DivDtl_cbInCustNm_onitemchanged,this);
            this.DivDtl.form.edPprCustCd.addEventHandler("onchanged",this.DivDtl_edPprCustCd_onchanged,this);
            this.DivDtl.form.cbPprCustNm.addEventHandler("onsetfocus",this.DivDtl_edPprCustCd_onsetfocus,this);
            this.DivDtl.form.cbPprCustNm.addEventHandler("onitemchanged",this.DivDtl_cbPprCustNm_onitemchanged,this);
            this.DivDtl.form.calReqDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.dsPprOrdDtl.addEventHandler("onrowposchanged",this.dsPprOrdDtl_onrowposchanged,this);
        };
        this.loadIncludeScript("MK121_DTL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
