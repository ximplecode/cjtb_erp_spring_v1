(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PD160F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1630,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPDClass", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"1\"/><Column id=\"NAME\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAccountMst", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTMST_CLASS\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTMST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ACNTMST_NO\" type=\"STRING\" size=\"3\"/><Column id=\"ACNTMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ACCOUNT_NO\" type=\"STRING\" size=\"12\"/><Column id=\"ACNTMST_YM\" type=\"STRING\" size=\"6\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"DK_CODE\" type=\"INT\" size=\"2\"/><Column id=\"ACNTMST_DELETE\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTMST_PERMITEDATE1\" type=\"STRING\" size=\"8\"/><Column id=\"ACNTMST_PERMITEUSER1\" type=\"STRING\" size=\"6\"/><Column id=\"ACNTMST_PERMITENAME1\" type=\"STRING\" size=\"10\"/><Column id=\"ACNTMST_PERMITE1\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTMST_PERMITEDATE2\" type=\"STRING\" size=\"8\"/><Column id=\"ACNTMST_PERMITEUSER2\" type=\"STRING\" size=\"6\"/><Column id=\"ACNTMST_PERMITENAME2\" type=\"STRING\" size=\"10\"/><Column id=\"ACNTMST_PERMITE2\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTMST_REMARK\" type=\"STRING\" size=\"1000\"/><Column id=\"COMPETENCE\" type=\"STRING\" size=\"1\"/><Column id=\"I_FLOW_ID\" type=\"INT\" size=\"20\"/><Column id=\"ACNTMST_PERMITEDATE0\" type=\"STRING\" size=\"8\"/><Column id=\"ACNTMST_PERMITEUSER0\" type=\"STRING\" size=\"6\"/><Column id=\"ACNTMST_PERMITE0\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTMST_TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProof", this);
            obj._setContents("<ColumnInfo><Column id=\"PRF_CODE\" type=\"INT\" size=\"3\"/><Column id=\"PRF_NAME\" type=\"STRING\" size=\"25\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAccountTitle", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNTTIT_RN\" type=\"INT\" size=\"5\"/><Column id=\"ACNTTIT_NO\" type=\"INT\" size=\"20\"/><Column id=\"ACNTTIT_NAME\" type=\"STRING\" size=\"40\"/><Column id=\"ACNTTIT_LVL\" type=\"INT\" size=\"2\"/><Column id=\"ACNTTIT_PNO\" type=\"INT\" size=\"20\"/><Column id=\"ACNTTIT_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"ACNTTIT_REMARK\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAccountDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNTDTL_SEQ\" type=\"STRING\" size=\"39\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"29\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"49\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"5\"/><Column id=\"ACNTMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ACNTTIT_NO\" type=\"INT\" size=\"20\"/><Column id=\"ACNTTIT_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"ACNTTIT_NAME\" type=\"STRING\" size=\"25\"/><Column id=\"PL_CODE\" type=\"INT\" size=\"3\"/><Column id=\"ACNTDTL_AMOUNT\" type=\"INT\" size=\"13\"/><Column id=\"PRF_CODE\" type=\"INT\" size=\"3\"/><Column id=\"ACNTDTL_CUSTNAME\" type=\"STRING\" size=\"35\"/><Column id=\"ACNTDTL_INVOICE_YM\" type=\"STRING\" size=\"6\"/><Column id=\"ACNTDTL_DELETE\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTDTL_SLIPNO\" type=\"STRING\" size=\"17\"/><Column id=\"ACNTDTL_REMARK\" type=\"STRING\" size=\"200\"/><Column id=\"CCUL_ID\" type=\"INT\" size=\"20\"/><Column id=\"BANKCODE_ACCOUNT\" type=\"STRING\" size=\"32\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"EBA_BANK_ACCOUNT\" type=\"STRING\" size=\"20\"/><Column id=\"ACNTDTL_ACNTHOLDER\" type=\"STRING\" size=\"35\"/><Column id=\"ACNTDTL_PAYDATE\" type=\"STRING\" size=\"8\"/><Column id=\"ACNTDTL_BILL_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ACNTDTL_BILL_NO\" type=\"STRING\" size=\"24\"/><Column id=\"ACNTDTL_VAT\" type=\"INT\" size=\"12\"/><Column id=\"ACNTDTL_EBILL\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTDTL_USEDATE\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSection", this);
            obj._setContents("<ColumnInfo><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"LVL\" type=\"STRING\" size=\"1\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"3\"/><Column id=\"SECTION_SHORTNAME\" type=\"STRING\" size=\"10\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"5\"/><Column id=\"BU_GRCODE\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParam4", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","3.44%","1.45%","60%","9.08%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("일반경비/정기지불 승인");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"4.74%","4.68%","4.23%","1.42%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("출력");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"4.74%","4.68%","4.23%","btn_print:15.64%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save1",null,"4.74%","4.68%","4.23%","btn_del:15.64%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"4.74%","4.68%","4.23%","btn_save1:15.64%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mst","1.78%","11.19%",null,"36.32%","1.45%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsAccountMst");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"115\"/><Column size=\"95\"/><Column size=\"696\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"95\"/><Column size=\"80\"/><Column size=\"95\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"20\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"지급결의서번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"작성일자\"/><Cell col=\"3\" rowspan=\"2\" text=\"제목\"/><Cell col=\"4\" rowspan=\"2\" text=\"담당자\"/><Cell col=\"5\" rowspan=\"2\" text=\"담당부서\"/><Cell col=\"6\" rowspan=\"2\" text=\"지급년월\"/><Cell col=\"7\" colspan=\"2\" text=\"1차\"/><Cell col=\"9\" colspan=\"2\" text=\"2차\"/><Cell row=\"1\" col=\"7\" text=\"승인일자\"/><Cell row=\"1\" col=\"8\" text=\"승인자\"/><Cell row=\"1\" col=\"9\" text=\"승인일자\"/><Cell row=\"1\" col=\"10\" text=\"승인자\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ACCOUNT_NO\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:ACNTMST_DATE\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"####-##-##\" maskedittype=\"string\"/><Cell col=\"3\" text=\"bind:ACNTMST_TITLE\"/><Cell col=\"4\" text=\"bind:EMPLOYEE_NAME\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:SECTION_CODE\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsSection\" combodatacol=\"SECTION_NAME\" combocodecol=\"SECTION_CODE\"/><Cell col=\"6\" text=\"bind:ACNTMST_YM\" textAlign=\"center\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"####-##\"/><Cell col=\"7\" text=\"bind:ACNTMST_PERMITEDATE1\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltext=\" \" calendardisplayinvalidtext=\" \" expr=\"ACNTMST_PERMITEDATE1!=null?ACNTMST_PERMITEDATE1:null\" expandshow=\"expr:COMPETENCE==&quot;5&quot;?&quot;show&quot;:&quot;hide&quot;\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"8\" text=\"bind:ACNTMST_PERMITENAME1\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:ACNTMST_PERMITEDATE2\" textAlign=\"center\" displaytype=\"date\" calendardisplayinvalidtext=\" \" expr=\"ACNTMST_PERMITEDATE2!=null?ACNTMST_PERMITEDATE2:null\" calendardateformat=\"yyyy-MM-dd\" expandshow=\"expr:COMPETENCE&gt;5?&quot;show&quot;:&quot;hide&quot;\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"10\" text=\"bind:ACNTMST_PERMITENAME2\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dtl","1.78%","48.03%",null,"49.35%","1.42%",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsAccountDtl");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_summarytype("top");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"180\"/><Column size=\"88\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"270\"/><Column size=\"670\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"계정코드\"/><Cell col=\"1\" text=\"계정명\"/><Cell col=\"2\" text=\"금액\"/><Cell col=\"3\" text=\"지급수단\"/><Cell col=\"4\" text=\"거래처코드\"/><Cell col=\"5\" text=\"거래처명\"/><Cell col=\"6\" text=\"적요\"/><Cell col=\"7\" text=\"지급일자\"/></Band><Band id=\"body\"><Cell text=\"bind:ACNTTIT_CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ACNTTIT_NAME\"/><Cell col=\"2\" expr=\"ACNTDTL_AMOUNT + ACNTDTL_VAT\" displaytype=\"mask\" maskeditformat=\"###,\"/><Cell col=\"3\" text=\"bind:PRF_CODE\" displaytype=\"combotext\" combodataset=\"dsProof\" combodatacol=\"PRF_NAME\" combocodecol=\"PRF_CODE\"/><Cell col=\"4\" text=\"bind:CUST_CODE\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:ACNTDTL_CUSTNAME\"/><Cell col=\"6\" text=\"bind:ACNTDTL_REMARK\"/><Cell col=\"7\" text=\"bind:ACNTDTL_PAYDATE\" textAlign=\"center\" edittype=\"date\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"nulltext\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\" background=\"#0d908c\" color=\"white\"/><Cell col=\"2\" expr=\"dataset.getSum(&quot;ACNTDTL_AMOUNT&quot;) + dataset.getSum(&quot;ACNTDTL_VAT&quot;)\" background=\"#0d908c\" color=\"white\" displaytype=\"mask\" maskeditformat=\"###,\" textAlign=\"right\"/><Cell col=\"3\" colspan=\"4\" background=\"#0d908c\" color=\"white\"/><Cell col=\"7\" background=\"#0d908c\" color=\"white\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_00","41.45+%","15.53%","17.43%","31.71%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_type("monthonly");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
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
        this.addIncludeScript("PD160F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("PD160F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("PD160F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;

        var aQryReturn = new Array();
        var sSection_Code = nexacro.getApplication().gds_userinfo.getColumn(0, "BUSECD");
        var cald_focus = false;
        var sEmployee_Name = nexacro.getApplication().gds_userinfo.getColumn(0, "NAME");
        var sSection_ShortCode = nexacro.getApplication().gds_userinfo.getColumn(0, "SHORTCODE");
        var sUserCompetence;
        var sUserCompetence1 = "1";   // 일반사용자
        var sUserCompetence2 = "2";   // 부서승인권자
        var sUserCompetence3 = "3";   // 부서장
        var sUserCompetence4 = "4";   // 일반승인권자
        var sUserCompetence5 = "5";   // 승인1차권한
        var sUserCompetence6 = "6";   // 승인2차권한

        this.PD160F_onload = function(obj,e)
        {
        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", "sub7001-6");
        	sUserCompetence = nexacro.getApplication().gds_menu.getColumn(nRow, "UM_PER_USE");
        	if(sUserCompetence == null)
        		sUserCompetence = '1';
        	//sUserCompetence = "S";

        	this.gfn_TransactionP("select","JSP/ed/section_select.jsp", "dsSection=dsSection", "dsSection=dsSection", "", "fnSectionCallback", false, "P", false, this);	//부서
        	this.gfn_TransactionP("search", "JSP/pd/proof_select.jsp", "dsProof=dsProof", "dsProof=dsProof", "", "fnProofCallback", false, "P", false, this);

        	// 승인으로 초기화
        	aQryReturn[3] = 1;
        };
        this.fnSectionCallback = function(svcid, errCode, errMsg)
        {

        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMddhhmmss");
        	if(svcid == "select")
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
        	if(svcid == "search")
        	{
        		var objDate = new nexacro.Date();
        		var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMddhhmmss");
        		if(errCode != 0 )
        			trace("[PD160F.fnProofCallback(" + f_date + ")] " + svcid +"::"+ errMsg );
        	}
        }


        function fnCallBack(svcid, errCode, errMsg)
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
        			alert( "전산실로 문의 바랍니다." + "   " +  svcid +"::"+ errMsg );
        		}
        	}
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.lfn_showModal("search", {PDCompetence:sUserCompetence, JSPFileName:"JSP/pd/pd160f_account_mst.jsp"}, "pd::PD160_SearchF.xfdl", "fnSearchCallBack", this, 0, 0, 410, 150);
        };

        this.fnSearchCallBack = function(strID, ret)
        {
        	aQryReturn = ret.split("^");
        	/*
        	if (aQryReturn[3] == 1)
        	{
        		this.btn_save.set_text("승인취소");
        		this.btn_save.set_width(72);
        	}
        	else
        	{
        		this.btn_save.set_text("승인");
        		this.btn_save.set_width(52);
        	}
        	*/
        }

        this.dsAccountMst_onload = function(obj,e)
        {
        	if(e.reason == 0)
        		this.dsAccountMst_onrowposchanged(obj,nexacro.DSRowPosChangeEventInfo);
        };

        this.dsAccountMst_onrowposchanged = function(obj,e)
        {
        	if (this.dsAccountMst.rowcount != 0)
        	{
        		var strUrl = "JSP/pd/pd160f_account_dtl.jsp";
        		var strDs = "dsAccountDtl=dsAccountDtl";
        		var strArg = "ACNTMST_ID=" + nexacro.wrapQuote(obj.getColumn(e.newrow,"ACNTMST_ID"));
        		this.gfn_TransactionP("select_dtl", strUrl, strDs, strDs, strArg, "fnDtlCallback", false, "P", false, this);
        		//this.dsAccountDtl.filter("ACNTMST_ID="+nexacro.wrapQuote(this.dsAccountMst.getColumn(e.newrow, "ACNTMST_ID")));
        	}
        };

        this.fnDtlCallback = function(svcid, errCode, errMsg)
        {
        	if(svcid == "select_dtl")
        	{
        		var objDate = new nexacro.Date();
        		var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMddhhmmss");
        		if(errCode != 0 )
        			trace("[PD160F.fnCallBack(" + f_date + ")] " + svcid +"::"+ errMsg );
        	}
        }

        this.Button00_onclick = function(obj,e)
        {
        	trace('test');
        };

        this.grd_mst_oncellclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		if((sUserCompetence == sUserCompetence5) && (this.dsAccountMst.getColumn(e.row, "ACNTMST_PERMITE2") == "0"))
        		{
        			if(this.dsAccountMst.getColumn(e.row, "CHK") != ((nexacro.toNumber("1") + nexacro.toNumber(aQryReturn[3])) % 2) ) // 승인 <->미승인 토글
        			{
        				this.dsAccountMst.setColumn(e.row, "ACNTMST_PERMITEDATE1", null);
        				this.dsAccountMst.setColumn(e.row, "ACNTMST_PERMITEUSER1", null);
        				this.dsAccountMst.setColumn(e.row, "ACNTMST_PERMITENAME1", null);
        			}
        			else
        			{
        				var objDate = new nexacro.Date();
        				var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMdd");
        				this.dsAccountMst.setColumn(e.row, "ACNTMST_PERMITEDATE1", f_date);
        				this.dsAccountMst.setColumn(e.row, "ACNTMST_PERMITEUSER1", gv_sabun);
        				this.dsAccountMst.setColumn(e.row, "ACNTMST_PERMITENAME1", sEmployee_Name);
        			}
        		}
        		if((sUserCompetence > sUserCompetence5) && (this.dsAccountMst.getColumn(e.row, "ACNTMST_PERMITE1") == "1"))
        		{
        			if(this.dsAccountMst.getColumn(e.row, "CHK") != ((nexacro.toNumber("1") + nexacro.toNumber(aQryReturn[3])) % 2) ) // 승인 <->미승인 토글
        			{
        				this.dsAccountMst.setColumn(e.row, "ACNTMST_PERMITEDATE2", null);
        				this.dsAccountMst.setColumn(e.row, "ACNTMST_PERMITEUSER2", null);
        				this.dsAccountMst.setColumn(e.row, "ACNTMST_PERMITENAME2", null);
        			}
        			else
        			{
        				var objDate = new nexacro.Date();
        				var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMdd");
        				this.dsAccountMst.setColumn(e.row, "ACNTMST_PERMITEDATE2", f_date);
        				this.dsAccountMst.setColumn(e.row, "ACNTMST_PERMITEUSER2", gv_sabun);
        				this.dsAccountMst.setColumn(e.row, "ACNTMST_PERMITENAME2", sEmployee_Name);
        			}
        		}
        	}
        };

        this.grd_mst_onexpanddown = function(obj,e)
        {
        	var rect = obj.getCellRect(e.row, e.cell);

        	var top = nexacro.toNumber(obj.top) + nexacro.toNumber(rect.top) + 18; //소스 중에서 달력이 표현될 위치를 지정합니다. Top
        	var right = nexacro.toNumber(rect.right) - 100; //소스 중에서 달력이 표현될 위치를 지정합니다.

        	this.cald_00.set_top(top);
        	this.cald_00.set_left(right);
        	this.cald_00.set_visible(true);
        };

        this.cald_00_onmouseleave = function(obj,e)
        {
        	if(cald_focus == true)
        	{
        		this.cald_00.set_visible(false);
        		cald_focus = false;
        	}
        };

        this.cald_00_onmouseenter = function(obj,e)
        {
        	cald_focus = true;
        };

        this.cald_00_ondayclick = function(obj,e)
        {
        	if (sUserCompetence == sUserCompetence5)
        		this.dsAccountMst.setColumn(this.dsAccountMst.rowposition, "ACNTMST_PERMITEDATE1", e.date); //날짜를 선택
        	else if (sUserCompetence > sUserCompetence5)
        		this.dsAccountMst.setColumn(this.dsAccountMst.rowposition, "ACNTMST_PERMITEDATE2", e.date); //날짜를 선택

        	this.grd_mst.moveToNextCell(); //그리드 셀 이동
        	obj.set_visible(false);  // 달력을 안보이게 합니다.
        };

        this.btn_save1_onclick = function(obj,e)
        {
        	var strUrl = "JSP/pd/pd160f_account_mst_dml.jsp";
        	var inDs 	= "input=dsAccountMst:u";
        	this.gfn_TransactionP("save", strUrl, inDs, "", "", "fnCallback_mst_dml", false, "P", false, this);
        };

        this.fnCallback_mst_dml = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		alert(ErrorMsg);
        		return;
        	}
        	var strUrl = "JSP/pd/pd160f_account_dtl_dml.jsp";
        	var inDs 	= "input=dsAccountDtl:u";
        	this.gfn_TransactionP("save", strUrl, inDs, "", "", "fnCallback_dtl_dml", false, "P", false, this);
        }

        this.fnCallback_dtl_dml = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		alert(ErrorMsg);
        		return;
        	}
        }

        this.fnMstSave = function()
        {
        	var strUrl = "JSP/pd/pd160f_account_mst_dml.jsp";
        	var inDs = "input=dsAccountMst:u";

        	for(var nRow = 0; nRow <= this.dsAccountMst.rowcount -1; nRow++)
        	{
        		// 1차 관리자 권한
        		// 1차 승인시 승인일자와 사번 넣기
        		if ((sUserCompetence == sUserCompetence5)   // 괸리자 권한
        			&& (this.dsAccountMst.getColumn(nRow, "ACNTMST_PERMITE2") == "0")
        			&& (this.dsAccountMst.getColumn(nRow, "CHK") == "1"))
        		{
        			if (aQryReturn[3] == 1)  // 승인 -> 미승인
        			{
        				this.dsAccountMst.setColumn(nRow, "ACNTMST_PERMITEDATE1", "");
        				this.dsAccountMst.setColumn(nRow, "ACNTMST_PERMITEUSER1", "");
        			}
        			else if (aQryReturn[3] == 0)  // 미승인 -> 승인
        			{
        				var objDate = new nexacro.Date();
        				var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMdd");
        				this.dsAccountMst.setColumn(nRow, "ACNTMST_PERMITEDATE1", f_date);
        				this.dsAccountMst.setColumn(nRow, "ACNTMST_PERMITEUSER1", gv_sabun);
        			}
        		}

        		// 2차 관리자 권한
        		// 승인시 1차 승인 됐는지 확인 후 2차 승인일자와 사번 넣기
        		if ((sUserCompetence == sUserCompetence6)   // 괸리자 권한
        			&& (this.dsAccountMst.getColumn(nRow, "ACNTMST_PERMITE1") == "1")
        			&& (this.dsAccountMst.getColumn(nRow, "CHK") == "1"))
        		{
        			if (aQryReturn[3] == 1)  // 승인 -> 미승인
        			{
        				this.dsAccountMst.setColumn(nRow, "ACNTMST_PERMITEDATE2", "");
        				this.dsAccountMst.setColumn(nRow, "ACNTMST_PERMITEUSER2", "");
        			}
        			else if (aQryReturn[3] == 0)  // 미승인 -> 승인
        			{
        				var objDate = new nexacro.Date();
        				var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMdd");
        				this.dsAccountMst.setColumn(nRow, "ACNTMST_PERMITEDATE2", f_date);
        				this.dsAccountMst.setColumn(nRow, "ACNTMST_PERMITEUSER2", gv_sabun);
        			}
        		}
        	}
        	this.gfn_TransactionP("update", strUrl, inDs, "", "", "fnMstSaveCallback", false, "P", false, this);
        }

        this.fnMstSaveCallback = function(svcid, errCode, errMsg)
        {
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMddhhmmss");
        	if (svcid == "update")
        	{
        	    if(errCode != 0 )
        	    {
        			trace("[PD160F.fctn_MstSaveCallback(" + f_date + ")] " + svcid +"::"+ errMsg );
        	    }
        	    else
        	    {
        			var strUrl = "JPS/pd/pd160f_account_mst.jsp"
        			var strArg  = "";
        			var strDs 	= "dsAccountMst=dsAccountMst";

        			strArg 	= "ACNTMST_SDATE=" + nexacro.wrapQuote( aQryReturn[0] ) +
        					  " ACNTMST_EDATE=" + nexacro.wrapQuote( aQryReturn[1] ) +
        					  " SECTION_CODE=" + nexacro.wrapQuote( aQryReturn[2] ) +
        					  " ACNTMST_PERMITE=" + nexacro.wrapQuote( aQryReturn[3] ) +
        					  " COMPETENCE=" + nexacro.wrapQuote( sUserCompetence );
        //			trace(strArg);
        			this.gfn_TransactionP("search", strUrl, strDs, strDs, strDs, "fnCallback", false, "P", false, this);
        	    }
        	}
        	else if(errCode != 0 )
        	{
        		trace("[PD160F.fctn_MstSaveCallback(" + f_date + ")] " + svcid +"::"+ errMsg );
        	}
        }

        this.btn_del_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	if(msg_result = objApp.confirm( "삭제하시겠습니까?" , "삭제", "warning" ))
            {

        		this.dsAccountMst.deleteRow(this.dsAccountMst.rowposition);
        		this.fnMstSave();

        		this.dsAccountMst.clearData();
            }
        };

        this.btn_print_onclick = function(obj,e)
        {
        	if(this.dsAccountMst.rowcount > 0)
        	{
        		var strArg, sOU;
        		var objApp = nexacro.getApplication();
        		if(msg_result = objApp.confirm( " 일반 지결서 결재 원본을 출력 하시겠습니까? " , "출력", "question" ))
        		{
        			alert(" 선택된 하나의 지결서만 조회가 가능합니다. ");

        			this.dsParam4.setColumn(0, "GUBUN", "01");
        			this.dsParam4.setColumn(0, "I_FLOW_ID", this.dsAccountMst.getColumn(this.dsAccountMst.rowposition, "I_FLOW_ID"));

        			strArg = {dsParam1:this.dsAccountMst.getColumn(this.dsAccountMst.rowposition, "I_FLOW_ID"),
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
        			strArg = {rdUrl:gv_urlMrd+"/pd/PD160.mrd", rdParam:rdParam};

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

        			var sOpenStyle = "topmost=true autosize=false dragmovetype=all titletext=조회화면 showtitlebar=true showstatusbar=false resizable=true";

        			nexacro.open("popupElecDoc", "mk::MKRDF.xfdl", this.getOwnerFrame(), strArg, sOpenStyle, rect.left, rect.top, rect.width, rect.height, this);
        		}
        	}
        };

        this.grd_mst_onheadclick = function(obj,e)
        {
        	if (e.cell == 0)
        	{
        		for(var nRow = 0; nRow <= this.dsAccountMst.rowcount -1; nRow ++ )
        		{
        			if (this.dsAccountMst.getColumn(nRow, "CHK") == "1")
        				this.dsAccountMst.setColumn(nRow, "CHK", "0");
        			else
        				this.dsAccountMst.setColumn(nRow, "CHK", "1");
        			e.row = nRow;
        			this.grd_mst_oncellclick(obj,e);
        		}
        	}
        };

        this.grd_dtl_onenterdown = function(obj,e)
        {
        	if(e.cell == 7)
        	{
        		if(this.dsAccountDtl.rowposition < this.dsAccountDtl.rowcount)
        		{
        			this.grd_dtl.setCellPos(7, this.dsAccountDtl.rowposition + 1);
        		}
        	}
        };

        this.PD160F_onsize = function(obj,e)
        {
        	if(this.height < 480 || this.width < 730)
        		this.Static00.set_font('bold 32px/normal "함초롬바탕 확장B"');
        	else
        		this.Static00.set_font('bold 40px/normal "함초롬바탕 확장B"');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PD160F_onload,this);
            this.addEventHandler("onsize",this.PD160F_onsize,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_save1.addEventHandler("onclick",this.btn_save1_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.grd_mst.addEventHandler("oncellclick",this.grd_mst_oncellclick,this);
            this.grd_mst.addEventHandler("onexpanddown",this.grd_mst_onexpanddown,this);
            this.grd_mst.addEventHandler("onheadclick",this.grd_mst_onheadclick,this);
            this.grd_dtl.addEventHandler("onenterdown",this.grd_dtl_onenterdown,this);
            this.cald_00.addEventHandler("onmouseleave",this.cald_00_onmouseleave,this);
            this.cald_00.addEventHandler("onmouseenter",this.cald_00_onmouseenter,this);
            this.cald_00.addEventHandler("ondayclick",this.cald_00_ondayclick,this);
            this.dsAccountMst.addEventHandler("onload",this.dsAccountMst_onload,this);
            this.dsAccountMst.addEventHandler("onrowposchanged",this.dsAccountMst_onrowposchanged,this);
        };
        this.loadIncludeScript("PD160F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
