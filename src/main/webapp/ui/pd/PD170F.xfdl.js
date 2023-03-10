(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PD170F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1630,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSection", this);
            obj._setContents("<ColumnInfo><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"LVL\" type=\"STRING\" size=\"1\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"3\"/><Column id=\"SECTION_SHORTNAME\" type=\"STRING\" size=\"10\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"5\"/><Column id=\"BU_GRCODE\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProof", this);
            obj._setContents("<ColumnInfo><Column id=\"PRF_CODE\" type=\"INT\" size=\"3\"/><Column id=\"PRF_NAME\" type=\"STRING\" size=\"25\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAccountTitle", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNTTIT_RN\" type=\"INT\" size=\"5\"/><Column id=\"ACNTTIT_NO\" type=\"INT\" size=\"20\"/><Column id=\"ACNTTIT_NAME\" type=\"STRING\" size=\"40\"/><Column id=\"ACNTTIT_LVL\" type=\"INT\" size=\"2\"/><Column id=\"ACNTTIT_PNO\" type=\"INT\" size=\"20\"/><Column id=\"ACNTTIT_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"ACNTTIT_REMARK\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGovAcntMst", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"GACNTMST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"GACNTMST_NO\" type=\"STRING\" size=\"3\"/><Column id=\"GACNTMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"GACCOUNT_NO\" type=\"STRING\" size=\"12\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"GACNTMST_DELETE\" type=\"STRING\" size=\"1\"/><Column id=\"GACNTMST_DEVELOPCONTENTS\" type=\"STRING\" size=\"60\"/><Column id=\"GACNTMST_ATTENDANT\" type=\"STRING\" size=\"60\"/><Column id=\"GACNTMST_DEVELOPPLACE\" type=\"STRING\" size=\"50\"/><Column id=\"GACNTMST_DEVELOPTIME\" type=\"STRING\" size=\"50\"/><Column id=\"GACNTMST_PERMITEDATE0\" type=\"STRING\" size=\"8\"/><Column id=\"GACNTMST_PERMITEUSER0\" type=\"STRING\" size=\"6\"/><Column id=\"GACNTMST_PERMITE0\" type=\"STRING\" size=\"1\"/><Column id=\"GACNTMST_PERMITEDATE1\" type=\"STRING\" size=\"8\"/><Column id=\"GACNTMST_PERMITEUSER1\" type=\"STRING\" size=\"6\"/><Column id=\"GACNTMST_PERMITENAME1\" type=\"STRING\" size=\"10\"/><Column id=\"GACNTMST_PERMITE1\" type=\"STRING\" size=\"1\"/><Column id=\"GACNTMST_PERMITEDATE2\" type=\"STRING\" size=\"8\"/><Column id=\"GACNTMST_PERMITEUSER2\" type=\"STRING\" size=\"6\"/><Column id=\"GACNTMST_PERMITENAME2\" type=\"STRING\" size=\"10\"/><Column id=\"GACNTMST_PERMITE2\" type=\"STRING\" size=\"1\"/><Column id=\"GACNTMST_REMARK1\" type=\"STRING\" size=\"100\"/><Column id=\"GACNTMST_REMARK2\" type=\"STRING\" size=\"1000\"/><Column id=\"COMPETENCE\" type=\"STRING\" size=\"1\"/><Column id=\"GACNTDTL_KIND\" type=\"STRING\" size=\"2\"/><Column id=\"EMPLOYEE_KIND\" type=\"STRING\" size=\"6\"/><Column id=\"GACNTDTL_AMOUNT\" type=\"INT\" size=\"13\"/><Column id=\"GACNTDTL_SUMAMOUNT\" type=\"INT\" size=\"13\"/><Column id=\"I_FLOW_ID\" type=\"INT\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrade", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"1\"/><Column id=\"NAME\" type=\"STRING\" size=\"2\"/></ColumnInfo><Rows><Row><Col id=\"ID\">1</Col><Col id=\"NAME\">???</Col></Row><Row><Col id=\"ID\">2</Col><Col id=\"NAME\">???</Col></Row><Row><Col id=\"ID\">3</Col><Col id=\"NAME\">???</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGovBookSection", this);
            obj._setContents("<ColumnInfo><Column id=\"GOVBOOK_SECTION_CODE\" type=\"INT\" size=\"3\"/><Column id=\"GOVBOOK_KIND\" type=\"STRING\" size=\"1\"/><Column id=\"GOVBOOK_SUBJECT\" type=\"STRING\" size=\"2\"/><Column id=\"GOVBOOK_SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"GOVBOOK_NAME\" type=\"STRING\" size=\"60\"/><Column id=\"GBR_CODE\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAcntKind", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"1\"/><Column id=\"NAME\" type=\"STRING\" size=\"5\"/></ColumnInfo><Rows><Row><Col id=\"ID\">1</Col><Col id=\"NAME\">?????????</Col></Row><Row><Col id=\"ID\">2</Col><Col id=\"NAME\">??????</Col></Row><Row><Col id=\"ID\">3</Col><Col id=\"NAME\">?????????</Col></Row><Row><Col id=\"ID\">4</Col><Col id=\"NAME\">???????????????</Col></Row><Row><Col id=\"ID\">5</Col><Col id=\"NAME\">????????????</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserKind", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"1\"/><Column id=\"NAME\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">??????</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">?????? ??? ?????????</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGovAcntDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"GACNTDTL_SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"EMPLOYEE_CHK\" type=\"STRING\" size=\"1\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"GACNTMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ACNTTIT_NO\" type=\"INT\" size=\"20\"/><Column id=\"ACNTTIT_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"ACNTTIT_NAME\" type=\"STRING\" size=\"25\"/><Column id=\"GACNTDTL_AMOUNT\" type=\"INT\" size=\"13\"/><Column id=\"PRF_CODE\" type=\"INT\" size=\"3\"/><Column id=\"PRF_NAME\" type=\"STRING\" size=\"25\"/><Column id=\"GOVBOOK_SECTION_CODE\" type=\"INT\" size=\"3\"/><Column id=\"GACNTDTL_CUSTNAME\" type=\"STRING\" size=\"35\"/><Column id=\"GACNTDTL_DELETE\" type=\"STRING\" size=\"1\"/><Column id=\"GACNTDTL_SLIPNO\" type=\"STRING\" size=\"17\"/><Column id=\"GACNTDTL_REMARK\" type=\"STRING\" size=\"200\"/><Column id=\"CCUL_ID\" type=\"INT\" size=\"20\"/><Column id=\"GOVBOOK_KIND\" type=\"STRING\" size=\"1\"/><Column id=\"GACNTDTL_KIND\" type=\"STRING\" size=\"2\"/><Column id=\"GACNTDTL_INVOICE_YM\" type=\"STRING\" size=\"6\"/><Column id=\"BANKCODE_ACCOUNT\" type=\"STRING\" size=\"32\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"GACNTDTL_ACNTHOLDER\" type=\"STRING\" size=\"35\"/><Column id=\"GACNTDTL_ACNTNO\" type=\"STRING\" size=\"20\"/><Column id=\"GACNTDTL_PAYDATE\" type=\"STRING\" size=\"8\"/><Column id=\"GBR_CODE\" type=\"INT\" size=\"2\"/><Column id=\"GACNTDTL_BILL_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"GACNTDTL_BILL_NO\" type=\"STRING\" size=\"24\"/><Column id=\"GACNTDTL_EBILL\" type=\"STRING\" size=\"1\"/><Column id=\"GACNTDTL_VAT\" type=\"INT\" size=\"12\"/><Column id=\"GACNTDTL_USEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"GOVBOOK_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"GACNTDTL_KINDNAME\" type=\"STRING\" size=\"60\"/><Column id=\"ACNTTIT_TREENAME\" type=\"STRING\" size=\"80\"/><Column id=\"CREDITCARD_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"GACNTDTL_CARDGB\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParam4", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_main","0","0","1610","760",null,null,"1100",null,"390",null,this);
            obj.set_taborder("8");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","4.23%","1.45%","50%","9.08%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_text("?????????????????? ??????");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"??????????????? ??????B\"");
            obj.set_verticalAlign("top");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"4.74%","4.72%","4.23%","0.75%",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            obj.set_text("??????");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"4.74%","4.78%","4.23%","btn_print:15.64%",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("2");
            obj.set_text("??????");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_save1",null,"4.74%","4.78%","4.23%","btn_del:15.64%",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("3");
            obj.set_text("??????");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"4.74%","4.72%","4.23%","btn_save1:15.64%",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("4");
            obj.set_text("??????");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_mst","2.24%","Static00:2.90%","76.21%","36.32%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsGovAcntMst");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"26\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"180\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"20\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"?????????????????????\"/><Cell col=\"2\" rowspan=\"2\" text=\"????????????\"/><Cell col=\"3\" rowspan=\"2\" text=\"?????????\"/><Cell col=\"4\" rowspan=\"2\" text=\"????????????\"/><Cell col=\"5\" colspan=\"2\" text=\"1???\"/><Cell col=\"7\" colspan=\"2\" text=\"2???\"/><Cell row=\"1\" col=\"5\" text=\"????????????\"/><Cell row=\"1\" col=\"6\" text=\"?????????\"/><Cell row=\"1\" col=\"7\" text=\"????????????\"/><Cell row=\"1\" col=\"8\" text=\"?????????\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:GACNTMST_NO\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:GACNTMST_DATE\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"####-##-##\" maskedittype=\"string\"/><Cell col=\"3\" text=\"bind:EMPLOYEE_NAME\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:SECTION_CODE\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsSection\" combodatacol=\"SECTION_NAME\" combocodecol=\"SECTION_CODE\"/><Cell col=\"5\" text=\"bind:GACNTMST_PERMITEDATE1\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplayinvalidtext=\" \" expandshow=\"expr:COMPETENCE==&quot;5&quot;?&quot;show&quot;:&quot;hide&quot;\" calendardisplaynulltype=\"nulltext\" calendardisplaynulltext=\" \"/><Cell col=\"6\" text=\"bind:GACNTMST_PERMITENAME1\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"7\" text=\"bind:GACNTMST_PERMITEDATE2\" textAlign=\"center\" displaytype=\"date\" calendardisplayinvalidtext=\" \" calendardateformat=\"yyyy-MM-dd\" expandshow=\"expr:COMPETENCE&gt;&quot;5&quot;?&quot;show&quot;:&quot;hide&quot;\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"8\" text=\"bind:GACNTMST_PERMITENAME2\" textAlign=\"center\" displaytype=\"text\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_dtl","2.24%","grd_mst:2.54%",null,"49.08%","0.75%",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("6");
            obj.set_binddataset("dsGovAcntDtl");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_summarytype("top");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"58\"/><Column size=\"118\"/><Column size=\"62\"/><Column size=\"76\"/><Column size=\"70\"/><Column size=\"76\"/><Column size=\"220\"/><Column size=\"40\"/><Column size=\"230\"/><Column size=\"210\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"????????????\"/><Cell col=\"1\" text=\"?????????\"/><Cell col=\"2\" text=\"????????????\"/><Cell col=\"3\" text=\"??????\"/><Cell col=\"4\" text=\"????????????\"/><Cell col=\"5\" text=\"???????????????\"/><Cell col=\"6\" text=\"????????????\"/><Cell col=\"7\" colspan=\"2\" text=\"?????????\"/><Cell col=\"9\" text=\"??????\"/><Cell col=\"10\" text=\"????????????\"/></Band><Band id=\"body\"><Cell text=\"bind:ACNTTIT_CODE\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:ACNTTIT_NAME\" displaytype=\"text\"/><Cell col=\"2\" displaytype=\"text\" expr=\"Eco.decode(GACNTDTL_KIND, &quot;01&quot;, &quot;?????????&quot;, &quot;02&quot;, &quot;??????&quot;, &quot;03&quot;, &quot;?????????&quot;, &quot;04&quot;, &quot;???????????????&quot;, &quot;05&quot;, &quot;????????????&quot;, &quot;06&quot;, &quot;?????????&quot;, &quot;07&quot;, &quot;???????????????&quot;, &quot;08&quot;, &quot;?????????&quot;, &quot;09&quot;, &quot;???????????????&quot;, &quot;10&quot;, &quot;?????????&quot;, &quot;????????????&quot;)\" text=\"bind:GACNTDTL_KIND\"/><Cell col=\"3\" expr=\"GACNTDTL_AMOUNT + GACNTDTL_VAT\" displaytype=\"mask\" maskeditformat=\"###,\"/><Cell col=\"4\" text=\"bind:PRF_CODE\" displaytype=\"combotext\" combodataset=\"dsProof\" combodatacol=\"PRF_NAME\" combocodecol=\"PRF_CODE\"/><Cell col=\"5\" text=\"bind:CUST_CODE\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:GACNTDTL_CUSTNAME\"/><Cell col=\"7\" text=\"bind:GOVBOOK_KIND\" displaytype=\"combotext\" combodataset=\"dsGrade\" combodatacol=\"NAME\" combocodecol=\"ID\" edittype=\"combo\"/><Cell col=\"8\" text=\"bind:GOVBOOK_SECTION_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsGovBookSection\" combocodecol=\"GOVBOOK_SECTION_CODE\" combodatacol=\"GOVBOOK_NAME\"/><Cell col=\"9\" text=\"bind:GACNTDTL_REMARK\"/><Cell col=\"10\" text=\"bind:GACNTDTL_PAYDATE\" textAlign=\"center\" edittype=\"date\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"nulltext\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"??????\" background=\"#0d908c\" color=\"white\"/><Cell col=\"3\" expr=\"dataset.getSum(&quot;GACNTDTL_AMOUNT&quot;) + dataset.getSum(&quot;GACNTDTL_VAT&quot;)\" background=\"#0d908c\" color=\"white\" displaytype=\"mask\" maskeditformat=\"###,\" textAlign=\"right\"/><Cell col=\"4\" colspan=\"6\" background=\"#0d908c\" color=\"white\"/><Cell col=\"10\" background=\"#0d908c\" color=\"white\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Calendar("cald_00","50.93%","15.53%","17.40%","31.58%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("7");
            obj.set_type("monthonly");
            obj.set_visible("false");
            this.div_main.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1630,760,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PD170F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("PD170F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("PD170F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var aQryReturn = new Array();
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var gv_urlMrd = nexacro.getApplication().gv_urlMrd + "/pd/";
        var aQryReturn = new Array();
        var sSection_Code = nexacro.getApplication().gds_userinfo.getColumn(0, "BUSECD");
        var sEmployee_Name = nexacro.getApplication().gds_userinfo.getColumn(0, "NAME");
        var sSection_ShortCode = nexacro.getApplication().gds_userinfo.getColumn(0, "SHORTCODE");
        var sUserCompetence;
        var sUserCompetence1 = "1";   // ???????????????
        var sUserCompetence2 = "2";   // ??????????????????
        var sUserCompetence3 = "3";   // ?????????
        var sUserCompetence4 = "4";   // ??????????????????
        var sUserCompetence5 = "5";   // ??????1?????????
        var sUserCompetence6 = "6";   // ??????2?????????
        var cald_focus = false;

        this.PD170F_onload = function(obj,e)
        {
        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", "sub7001-7");
        	sUserCompetence = nexacro.getApplication().gds_menu.getColumn(nRow, "UM_PER_USE");
        	if(sUserCompetence == null)
        		sUserCompetence = '1';
        	//sUserCompetence = "S";

        	this.gfn_TransactionP("section","JSP/ed/section_select.jsp", "dsSection=dsSection", "dsSection=dsSection", "", "fnSectionCallback", false, "P", false, this);	//??????
        	this.gfn_TransactionP("proof", "JSP/pd/proof_select.jsp", "dsProof=dsProof", "dsProof=dsProof", "", "fnProofCallback", false, "P", false, this);
        	this.gfn_TransactionP("book", "JSP/pd/govbooksection_select.jsp", "dsGovBookSection=dsGovBookSection", "dsGovBookSection=dsGovBookSection", "", "fnGovBookSectionCallback", false, "P", false, this);

        	aQryReturn[3] = 1;
        	//test
        	sUserCompetence = '1';
        };

        this.fnSectionCallback = function(svcid, errCode, errMsg)
        {
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMddhhmmss");
        	if(svcid == "section")
        	{
        		if(errCode != 0 )
        			trace("[PD160F.fnSectionCallback(" + f_date + ")] " + svcid +"::"+ errMsg );
        		else
        		{
        			if ( sUserCompetence < sUserCompetence5 )
        				this.dsSection.filter("SECTION_CODE=='" + sSection_Code + "'");
        		}
        	}
        }

        this.fnProofCallback = function(svcid, errCode, errMsg)
        {
        	if(svcid == "proof")
        	{
        		var objDate = new nexacro.Date();
        		var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMddhhmmss");
        		if(errCode != 0 )
        			trace("[PD160F.fnProofCallback(" + f_date + ")] " + svcid +"::"+ errMsg );
        	}
        }

        this.fnGovBookSectionCallback = function(svcid, errCode, errMsg)
        {
        	if(svcid == "book")
        	{
        		var objDate = new nexacro.Date();
        		var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMddhhmmss");
        		if(errCode != 0 )
        			trace("[PD160F.fnProofCallback(" + f_date + ")] " + svcid +"::"+ errMsg );
        	}
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.lfn_showModal("search", {PDCompetence:sUserCompetence, JSPFileName:"JSP/pd/pd170f_govacnt_mst.jsp"}, "pd::PD170_SearchF.xfdl", "fnSearchCallBack", this, 0, 0, 410, 150);
        };

        this.fnSearchCallBack = function(strID, ret)
        {
        	aQryReturn = ret.split("^");
        }

        this.dsGovAcntMst_onload = function(obj,e)
        {
        	if(e.reason == 0)
        		this.dsGovAcntMst_onrowposchanged(obj,nexacro.DSRowPosChangeEventInfo);
        };

        this.dsGovAcntMst_onrowposchanged = function(obj,e)
        {
        	if (this.dsGovAcntMst.rowcount != 0)
        	{
        		var strUrl = "JSP/pd/pd170f_govacnt_dtl.jsp";
        		var strDs = "dsGovAcntDtl=dsGovAcntDtl";
        		var strArg = "GACNTMST_ID=" + nexacro.wrapQuote(obj.getColumn(e.newrow,"GACNTMST_ID"));
        		this.gfn_TransactionP("select_dtl", strUrl, strDs, strDs, strArg, "fnDtlCallback", false, "P", false, this);
        	}
        };

        this.dsGovAcntDtl_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "GOVBOOK_KIND")
        	{
        		this.dsGovAcntDtl.setColumn(e.row, "GOVBOOK_SECTION_CODE", -1);
        		this.dsGovBookSection.filter("GOVBOOK_KIND=='" + e.newvalue + "'");
        		this.div_main.form.grd_dtl.setCellPos(8);
        		this.div_main.form.grd_dtl.showEditor(true);
        		this.div_main.form.grd_dtl.dropdownCombo();
        	}
        };

        this.fnDtlCallback = function(svcid, errCode, errMsg)
        {
        	if(svcid == "select_dtl")
        	{
        		var objDate = new nexacro.Date();
        		var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMddhhmmss");
        		if(errCode != 0 )
        			trace("[PD170F.fnCallBack(" + f_date + ")] " + svcid +"::"+ errMsg );
        	}
        }

        this.btn_save1_onclick = function(obj,e)
        {
        	var strUrl = "JSP/pd/pd120f_govacnt_mst_dml.jsp";
        	var inDs 	= "input=dsGovAcntMst:u";
        	this.gfn_TransactionP("save", strUrl, inDs, "", "", "fnCallBack", false, "P", false, this);

        	this.fnDtlSave();
        };

        this.fnDtlSave = function()
        {
        	var inDs = "input=dsGovAcntDtl:u";
        	var nRow = this.dsGovAcntDtl.rowposition;

        	for(var i = 0; i < this.dsGovAcntDtl.rowcount; i++)
        	{
        		if(this.dsGovAcntDtl.getColumn(i, "GOVBOOK_SECTION_CODE") == 1)
        		{
        			alert("?????? ????????? ????????? ????????? ????????????.");
        			this.dsGovAcntDtl.rowposition = i;
        			this.div_main.form.grd_dtl.setCellPos(8);
        			this.div_main.form.grd_dtl.showEditor();
        			this.div_main.form.grd_dtl.dropdownCombo();
        			return;
        		}
        	}
        	var strUrl = "JSP/pd/pd120f_govacnt_dtl_dml.jsp";
        	var strArg = "AD_KIND=" + nexacro.wrapQuote( "02" );
        	this.gfn_TransactionP("save", strUrl, inDs, "", strArg, "fnCallBack", false, "P", false, this);
        }

        this.btn_del_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	if(msg_result = objApp.confirm( "?????????????????????????" , "??????", "warning" ))
            {
        		this.dsGovAcntMst.deleteRow(this.dsGovAcntMst.rowposition);
        		this.fnMstSave();

        		this.dsGovAcntMst.clearData();
            }
        };

        this.fnMstSave = function()
        {
        	var strUrl = "JSP/pd/pd120f_govacnt_mst_dml.jsp";
        	var inDs 	= "input=dsGovAcntMst:u";

        	for (var nRow = 0; nRow <= this.dsGovAcntMst.rowcount -1; nRow ++ )
        	{
        		// 1??? ????????? ??????
        		// 1??? ????????? ??????????????? ?????? ??????
        		if ((sUserCompetence == sUserCompetence5)   // ????????? ??????
        			&& (this.dsGovAcntMst.getColumn(nRow, "GACNTMST_PERMITE2") == "0")
        			&& (this.dsGovAcntMst.getColumn(nRow, "CHK") == "1"))
        		{
        			if (aQryReturn[3] == 1)  // ?????? -> ?????????
        			{
        				this.dsGovAcntMst.setColumn(nRow, "GACNTMST_PERMITEDATE1", "");
        				this.dsGovAcntMst.setColumn(nRow, "GACNTMST_PERMITEUSER1", "");
        			}
        			else if (aQryReturn[3] == 0)  // ????????? -> ??????
        			{
        				var objDate = new nexacro.Date();
        				var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMdd");
        				this.dsGovAcntMst.setColumn(nRow, "GACNTMST_PERMITEDATE1", f_date);
        				this.dsGovAcntMst.setColumn(nRow, "GACNTMST_PERMITEUSER1", gv_sabun);
        			}
        		}

        		// 2??? ????????? ??????
        		// ????????? 1??? ?????? ????????? ?????? ??? 2??? ??????????????? ?????? ??????
        		if ((sUserCompetence == sUserCompetence6)   // ????????? ??????
        			&& (this.dsGovAcntMst.getColumn(nRow, "GACNTMST_PERMITE1") == "1")
        			&& (this.dsGovAcntMst.getColumn(nRow, "CHK") == "1"))
        		{
        			if (aQryReturn[3] == 1)  // ?????? -> ?????????
        			{
        				this.dsGovAcntMst.setColumn(nRow, "GACNTMST_PERMITEDATE2", "");
        				this.dsGovAcntMst.setColumn(nRow, "GACNTMST_PERMITEUSER2", "");
        			}
        			else if (aQryReturn[3] == 0)  // ????????? -> ??????
        			{
        				var objDate = new nexacro.Date();
        				var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMdd");
        				this.dsGovAcntMst.setColumn(nRow, "GACNTMST_PERMITEDATE2", f_date);
        				this.dsGovAcntMst.setColumn(nRow, "GACNTMST_PERMITEUSER2", gv_sabun);
        			}
        		}
        	}
        	this.gfn_TransactionP("update", strUrl, inDs, "", "", "fnMstSaveCallback", false, "P", false, this);
        }

        this.fnMstSaveCallback = function(svcid, errCode, errMsg)
        {
        	if (svcid == "update")
        	{
        	    if(errCode != 0 )
        	    {
        			var objDate = new nexacro.Date();
        			var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMdd");
        			trace("[PD170F.fnMstSaveCallback(" + f_date + ")] " + svcid +"::"+ errMsg );
        	    }
        		else
        	    {
        			var strUrl = "JSP/pd/pd170f_govacnt_mst.jsp";
        			var strArg  = "";
        			var strDs 	= "dsGovAcntMst=dsGovAcntMst";

        			strArg 	= "GACNTMST_SDATE=" + nexacro.wrapQuote( aQryReturn[0] ) +
        					  " GACNTMST_EDATE=" + nexacro.wrapQuote( aQryReturn[1] ) +
        					  " SECTION_CODE=" + nexacro.wrapQuote( aQryReturn[2] ) +
        					  " GACNTMST_PERMITE=" + nexacro.wrapQuote( aQryReturn[3] ) +
        					  " COMPETENCE=" + nexacro.wrapQuote( sUserCompetence );

        			this.gfn_TransactionP("search", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        	    }
        	}
        	else if(errCode != 0)
        	{
        		var objDate = new nexacro.Date();
        		var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMdd");
        		trace("[PD170F.fnMstSaveCallback(" + f_date + ")] " + svcid +"::"+ errMsg );
        	}
        }

        this.btn_print_onclick = function(obj,e)
        {
        	if(this.dsGovAcntMst.rowcount > 0)
        	{
        		var strArg, sOU;
        		var objApp = nexacro.getApplication();
        		if(msg_result = objApp.confirm( " ????????? ????????? ?????? ????????? ?????? ??????????????????? " , "??????", "question" ))
        		{
        			alert(" ????????? ????????? ???????????? ????????? ???????????????. ");

        			this.dsParam4.setColumn(0, "GUBUN", "01");
        			this.dsParam4.setColumn(0, "I_FLOW_ID", this.dsGovAcntMst.getColumn(this.dsGovAcntMst.rowposition, "I_FLOW_ID"));

        			strArg = {dsParam1:this.dsGovAcntMst.getColumn(this.dsGovAcntMst.rowposition, "I_FLOW_ID"),
        			dsParam4:this.dsParam4};

        			this.lfn_showModal("popupElecDoc", strArg, "gw::GW130.xfdl", "popupCallBack", this, 10, 58, 1300, 720);
        		}
        		else
        		{
        			rdParam = "/rp ["+aQryReturn[0]+"] ["+aQryReturn[1]+"] ["+aQryReturn[2]+"] [";
        			if(sUserCompetence == sUserCompetence5) rdParam += "1" + "] [";
        			else rdParam += "" + "] [";
        			if(sUserCompetence == sUserCompetence5 && aQryReturn[3] == 0) rdParam += "1" + "] [";
        			else rdParam += "" + "] [";
        			if(sUserCompetence == sUserCompetence5 && aQryReturn[3] == 1) rdParam += "1" + "] [";
        			else rdParam += "" + "] [";
        			if(sUserCompetence > sUserCompetence5) rdParam += "1" + "] [";
        			else rdParam += "" + "] [";
        			if(sUserCompetence > sUserCompetence5 && aQryReturn[3] == 0) rdParam += "1" + "] [";
        			else rdParam += "" + "] [";
        			if(sUserCompetence > sUserCompetence5 && aQryReturn[3] == 1) rdParam += "1" + "]";
        			else rdParam += "" + "]";
        			strArg = {rdUrl:gv_urlMrd+"PD170.mrd", rdParam:rdParam};

        			var rect;
        			if(system.navigatorname = 'nexacro')
        			{
        				if(system.monitorcount > 1)
        				{
        					var monitor_index = system.getMonitorIndex(system.clientToScreenX(this,0), system.clientToScreenY(this,0));
        					rect = system.getScreenRect(monitor_index);
        				}
        				else
        					rect = system.getScreenRect(1);
        			}
        			else
        				rect = system.getScreenRect(1);

        			var sOpenStyle = "topmost=true autosize=false dragmovetype=all titletext=???????????? showtitlebar=true showstatusbar=false resizable=true";

        			nexacro.open("popupElecDoc", "mk::MKRDF.xfdl", this.getOwnerFrame(), strArg, sOpenStyle, rect.left, rect.top, rect.width, rect.height, this);
        		}
        	}
        	else
        		alert("????????? ????????? ????????????.");
        };

        this.grd_mst_onexpanddown = function(obj,e)
        {
        	var rect = obj.getCellRect(e.row, e.cell);

        	var top = nexacro.toNumber(obj.top) + nexacro.toNumber(rect.top) + 18; //?????? ????????? ????????? ????????? ????????? ???????????????. Top
        	var right = nexacro.toNumber(rect.right) - 100; //?????? ????????? ????????? ????????? ????????? ???????????????.

        	this.div_main.form.cald_00.set_top(top);
        	this.div_main.form.cald_00.set_left(right);
        	this.div_main.form.cald_00.set_visible(true);
        };

        this.cald_00_onmouseleave = function(obj,e)
        {
        	if(cald_focus == true)
        	{
        		this.div_main.form.cald_00.set_visible(false);
        		cald_focus = false;
        	}
        };

        this.cald_00_onmouseenter = function(obj,e)
        {
        	cald_focus = true;
        };

        this.div_main_cald_00_onkeydown = function(obj,e)
        {
        	if (e.keycode == 27)
        		obj.set_visible(false);  // ????????? ???????????? ?????????.
        };

        this.cald_00_ondayclick = function(obj,e)
        {
        	if (sUserCompetence == sUserCompetence5)
        		this.dsGovAcntMst.setColumn(this.dsGovAcntMst.rowposition, "GACNTMST_PERMITEDATE1", e.date); //????????? ??????
        	else if (sUserCompetence > sUserCompetence5)
        		this.dsGovAcntMst.setColumn(this.dsGovAcntMst.rowposition, "GACNTMST_PERMITEDATE2", e.date); //????????? ??????

        	this.div_main.form.grd_mst.moveToNextCell(); //????????? ??? ??????
        	obj.set_visible(false);  // ????????? ???????????? ?????????.
        };

        this.grd_mst_onheadclick = function(obj,e)
        {
        	if (e.cell == 0)
        	{
        		for(var nRow = 0; nRow <= this.dsGovAcntMst.rowcount -1; nRow ++ )
        		{
        			if (this.dsGovAcntMst.getColumn(nRow, "CHK") == "1")
        				this.dsGovAcntMst.setColumn(nRow, "CHK", "0");
        			else
        				this.dsGovAcntMst.setColumn(nRow, "CHK", "1");
        			e.row = nRow;
        			this.grd_mst_oncellclick(obj,e);
        		}
        	}
        };

        this.grd_mst_oncellclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		if((sUserCompetence == sUserCompetence5) && (this.dsGovAcntMst.getColumn(e.row, "GACNTMST_PERMITE2") == "0"))
        		{
        			if(this.dsGovAcntMst.getColumn(e.row, "CHK") != ((nexacro.toNumber("1") + nexacro.toNumber(aQryReturn[3])) % 2) ) // ?????? <->????????? ??????
        			{
        				this.dsGovAcntMst.setColumn(e.row, "GACNTMST_PERMITEDATE1", null);
        				this.dsGovAcntMst.setColumn(e.row, "GACNTMST_PERMITEUSER1", null);
        				this.dsGovAcntMst.setColumn(e.row, "GACNTMST_PERMITENAME1", null);
        			}
        			else
        			{
        				var objDate = new nexacro.Date();
        				var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMdd");
        				this.dsGovAcntMst.setColumn(e.row, "GACNTMST_PERMITEDATE1", f_date);
        				this.dsGovAcntMst.setColumn(e.row, "GACNTMST_PERMITEUSER1", gv_sabun);
        				this.dsGovAcntMst.setColumn(e.row, "GACNTMST_PERMITENAME1", sEmployee_Name);
        			}
        		}
        		if((sUserCompetence > sUserCompetence5) && (this.dsGovAcntMst.getColumn(e.row, "GACNTMST_PERMITE1") == "1"))
        		{
        			if(this.dsGovAcntMst.getColumn(e.row, "CHK") != ((nexacro.toNumber("1") + nexacro.toNumber(aQryReturn[3])) % 2) ) // ?????? <->????????? ??????
        			{
        				this.dsGovAcntMst.setColumn(e.row, "GACNTMST_PERMITEDATE2", null);
        				this.dsGovAcntMst.setColumn(e.row, "GACNTMST_PERMITEUSER2", null);
        				this.dsGovAcntMst.setColumn(e.row, "GACNTMST_PERMITENAME2", null);
        			}
        			else
        			{
        				var objDate = new nexacro.Date();
        				var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMdd");
        				this.dsGovAcntMst.setColumn(e.row, "GACNTMST_PERMITEDATE2", f_date);
        				this.dsGovAcntMst.setColumn(e.row, "GACNTMST_PERMITEUSER2", gv_sabun);
        				this.dsGovAcntMst.setColumn(e.row, "GACNTMST_PERMITENAME2", sEmployee_Name);
        			}
        		}
        	}
        };

        this.fnCallBack = function(svcid, errCode, errMsg)
        {
        	if(svcid == "search")
        	{
        		var objDate = new nexacro.Date();
        		var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMddhhmmss");
        		if(errCode != 0 )
        			trace("[PD160F.fnCallBack(" + f_date + ")] " + svcid +"::"+ errMsg );
        	}
        	else if(svcid == "save")
        	{
        		if(errCode != 0 )
        		{
        			var objDate = new nexacro.Date();
        			var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMddhhmmss");
        			trace("[PD160F.fnCallBack(" + f_date + ")] " + svcid +"::"+ errMsg );
        			alert( "???????????? ?????? ????????????." + "   " +  svcid +"::"+ errMsg );
        		}
        	}
        }

        this.PD170F_onsize = function(obj,e)
        {
        	this.div_main.set_width(this.width - 20)
        	this.div_main.set_height(this.height - 10)

        	if(this.height < 480)
        		this.div_main.form.Static00.set_font('bold 32px/normal "??????????????? ??????B"');
        	else
        		this.div_main.form.Static00.set_font('bold 40px/normal "??????????????? ??????B"');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PD170F_onload,this);
            this.addEventHandler("onsize",this.PD170F_onsize,this);
            this.div_main.form.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
            this.div_main.form.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.div_main.form.btn_save1.addEventHandler("onclick",this.btn_save1_onclick,this);
            this.div_main.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_main.form.grd_mst.addEventHandler("oncellclick",this.grd_mst_oncellclick,this);
            this.div_main.form.grd_mst.addEventHandler("onexpanddown",this.grd_mst_onexpanddown,this);
            this.div_main.form.grd_mst.addEventHandler("onheadclick",this.grd_mst_onheadclick,this);
            this.div_main.form.grd_dtl.addEventHandler("onenterdown",this.grd_dtl_onenterdown,this);
            this.div_main.form.cald_00.addEventHandler("onmouseleave",this.cald_00_onmouseleave,this);
            this.div_main.form.cald_00.addEventHandler("onmouseenter",this.cald_00_onmouseenter,this);
            this.div_main.form.cald_00.addEventHandler("ondayclick",this.cald_00_ondayclick,this);
            this.div_main.form.cald_00.addEventHandler("onkeydown",this.div_main_cald_00_onkeydown,this);
            this.dsGovAcntMst.addEventHandler("onload",this.dsGovAcntMst_onload,this);
            this.dsGovAcntMst.addEventHandler("onrowposchanged",this.dsGovAcntMst_onrowposchanged,this);
            this.dsGovAcntDtl.addEventHandler("oncolumnchanged",this.dsGovAcntDtl_oncolumnchanged,this);
        };
        this.loadIncludeScript("PD170F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
