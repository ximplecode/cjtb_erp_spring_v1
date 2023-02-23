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
            this.set_titletext("제본비명세서");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList1", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMSTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMSTTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCASENAME\" type=\"STRING\" size=\"256\"/><Column id=\"BNDTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_RUNDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORDMST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ORDMST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CODEYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORDMST_QTY\" type=\"FLOAT\" size=\"256\" prop=\"SUM\"/><Column id=\"ORDDTL_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"ORDMST_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_REALWORKQTY\" type=\"FLOAT\" size=\"256\" prop=\"SUM\"/><Column id=\"ORDDTL_UNITCOST\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_AMOUNT\" type=\"FLOAT\" size=\"256\" prop=\"SUM\"/><Column id=\"ORDDTL_VAT\" type=\"FLOAT\" size=\"256\" prop=\"SUM\"/><Column id=\"PPR_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_UNITCOST\" type=\"FLOAT\" size=\"256\" prop=\"SUM\"/><Column id=\"CAL_ORDDTL_AMOUNT\" type=\"FLOAT\" size=\"256\" prop=\"SUM\"/><Column id=\"CAL_ORDDTL_VAT\" type=\"FLOAT\" size=\"256\" prop=\"SUM\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_Cust", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CUST\" type=\"STRING\" size=\"6\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REPRESENTATIVE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_STARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_STOPPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ACNTNO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTDTL_SALEAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PWT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">A4</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">136컬럼</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">표준단가</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">A4세로</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">현금단가</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSearch",null,"34","80","40","145",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdGubun",null,"93","323","66","btnSearch:40",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("dsGubun");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("horizontal");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_background("lightsteelblue");
            obj.set_color("white");
            obj.set_fittocontents("none");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_columncount("3");
            obj.set_rowcount("2");
            obj.set_text("단가 \'0\'인 건  ");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","12","10","268","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("제본비명세서");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"34","43","39","0.69%",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_icon("url(\'Img::ico_excel_O.png\')");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrt",null,"34","80","40","btnExcel:7",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("출력");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbCustNm",null,"55","232","35","btnSearch:40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_mk_Cust");
            obj.set_datacolumn("CUST_NAME");
            obj.set_codecolumn("CUST");
            obj.set_autoselect("true");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edSCustCd",null,"55","88","35","cbCustNm:3",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stCust",null,"55","85","35","edSCustCd:3",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("외주처");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new CheckBox("cbEtcCost",null,"124","53","36","293",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("포함");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEDate",null,"18","160","35","btnSearch:40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate",null,"18","160","35","calEDate:3",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stDate",null,"18","85","35","calSDate:3",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("마감일자");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Static("stPaper",null,"93","85","66","rdGubun:3",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("출력용지");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Div("DivGrd","11","166","98.85%",null,null,"3",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_async("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cbEtcCost","value","dsOrdDtl","ORDDTL_CTP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK144.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK144.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("MK144.xfdl","Lib::Lib_mk.xjs");
        this.registerScript("MK144.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_mk.xjs"); /*include "Lib::Lib_mk.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerPrt;
        var vStr;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var sCust_Gubn = "41";
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

        		//외주처 정보 가져오기
        		this.gfn_TransactionP("select", "JSP/mk/Cust_Select.jsp", "ds_mk_Cust=ds_mk_Cust", "ds_mk_Cust=ds_mk_Cust", "", "", false, "S", false, this);
        		this.ds_mk_Cust.filter("CUST_GUBN=='00' || CUST_GUBN=='" + sCust_Gubn + "'");

        		this.DivGrd.set_url("mk::MK144_1.xfdl");
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
        };

        //조회버튼 클릭
        this.btnSearch_onclick = function(obj,e)
        {

        	if(this.calSDate.value == "" || Eco.isUndefined(this.calSDate.value) == true )
        	{
        		alert("일자를 정확히 입력해 주세요.");
        		this.calSDate.setFocus();
        		return false;
        	}

        	if (this.calEDate.value == "" || Eco.isUndefined(this.calEDate.value) == true )
        	{
        		alert("일자를 정확히 입력해 주세요.");
        		this.calEDate.setFocus();
        		return false;
        	}

        	if(Eco.isUndefined(this.edSCustCd.value) == true || this.edSCustCd.value == "" || this.edSCustCd.value == "0000"){
        		alert("외주처를 입력해 주세요.");
        		this.edSCustCd.setFocus();
        		return false;
        	}

        	if(this.rdGubun.value == 1 || this.rdGubun.value == 4){
        		str_url = "JSP/mk/mk144_Select.jsp";
        	}else if(this.rdGubun.value == 2){
        		str_url = "JSP/mk/mk144_136.jsp";
        	}else if(this.rdGubun.value == 3){
        		str_url = "JSP/mk/mk144_STN.jsp";
        	}else if(this.rdGubun.value == 5){
        		str_url = "JSP/mk/mk144_ETC.jsp";
        	}

        	in_ds 	= "dsList1=dsList1";
        	out_ds 	= "dsList1=dsList1";
        	str_arg = "SDATE=" + nexacro.wrapQuote(this.calSDate.value) +
        	          " EDATE=" + nexacro.wrapQuote(this.calEDate.value) +
        	          " CUST_GUBN=" +nexacro.wrapQuote( sCust_Gubn) +
        			  " CUST_CODE=" +nexacro.wrapQuote( this.edSCustCd.value ) +
        			  " ETC_CHK=" +nexacro.wrapQuote(this.cbEtcCost.value);

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnCallbackSelect", false, "S", false, this);

        };

        this.fnCallbackSelect = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{

        		if(this.dsList1.rowcount == 0)
        		{
        			alert("조회된 자료가 없습니다.");
        			return false;
        		}

        		this.dsList1.set_keystring("G:BOOKMSTTYPE");
        	}
        };

        //레포트 출력 이벤트
        this.btnPrt_onclick = function(obj,e)
        {
        	if(this.calSDate.value == "" || Eco.isUndefined(this.calSDate.value) == true )
        	{
        		alert("일자를 정확히 입력해 주세요.");
        		this.calSDate.setFocus();
        		return false;
        	}

        	if (this.calEDate.value == "" || Eco.isUndefined(this.calEDate.value) == true )
        	{
        		alert("일자를 정확히 입력해 주세요.");
        		this.calEDate.setFocus();
        		return false;
        	}

        	if(Eco.isUndefined(this.edSCustCd.value) == true || this.edSCustCd.value == "" || this.edSCustCd.value == "0000"){
        		alert("외주처를 입력해 주세요.");
        		this.edSCustCd.setFocus();
        		return false;
        	}

        	var rdUrl = "";

        	if(this.rdGubun.value == 1){
        		rdUrl = gv_svcUrl + "rpt/mk/MK144.mrd";
        	}else if(this.rdGubun.value == 2){
        		rdUrl = gv_svcUrl + "rpt/mk/MK144_136.mrd";
        	}else if(this.rdGubun.value == 3){
        		rdUrl = gv_svcUrl + "rpt/mk/MK144_STN.mrd";
        	}else if(this.rdGubun.value == 4){
        		rdUrl = gv_svcUrl + "rpt/mk/MK144_A4.mrd";
        	}else if(this.rdGubun.value == 5){
        		rdUrl = gv_svcUrl + "rpt/mk/MK144_ETC.mrd";
        	}

        	var vEctCost = "";

        	if(this.cbEtcCost.value == 0)
        		vEctCost = "";
        	else
        		vEctCost = "1";

        	var rdParam = "/ragentpath ["+ gv_urlRdDataServer +"]"+ " /rp [" + this.calSDate.value + "] [" +  this.calEDate.value + "] [" +  sCust_Gubn + "] [" +  this.edSCustCd.value + "] [" +  vEctCost + "]";

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

        this.edSCustCd_onchanged = function(obj,e)
        {
        	if(this.edSCustCd.text.length == 1){
        		var vCustCd = this.lfn_CustName(sCust_Gubn, this.edSCustCd.text);
        		this.edSCustCd.set_value(vCustCd);
        	}

        	if(this.edSCustCd.getLength() == this.edSCustCd.text.length){

        		this.cbCustNm.set_index(this.ds_mk_Cust.findRow("CUST", sCust_Gubn+this.edSCustCd.text));

        		if(this.cbCustNm.index == -1){
        			this.cbCustNm.setFocus();
        			this.cbCustNm.dropdown();
        		}
        	}
        };

        this.cbCustNm_onitemchanged = function(obj,e)
        {
        	var iCustIdx = this.ds_mk_Cust.findRow("CUST_NAME", this.cbCustNm.text);
        	this.edSCustCd.set_value(this.ds_mk_Cust.getColumn(iCustIdx, "CUST_CODE"));

        };

        this.rdGubun_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == 1 || e.postvalue == 2 || e.postvalue == 4){

        		this.dsList1.clearData();
        		this.DivGrd.set_url("mk::MK144_1.xfdl");
        		this.calSDate.setFocus();
        		this.DivGrd.form.fnChk(this.rdGubun.value);

        	}else if(e.postvalue == 3 || e.postvalue == 5){

        		this.dsList1.clearData();
        		this.DivGrd.set_url("mk::MK144_2.xfdl");
        		this.calSDate.setFocus();
        		this.DivGrd.form.fnChk(this.rdGubun.value);
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
        this.btnExcel_onclick = function(obj,e)
        {
        	this.exportObj = new ExcelExportObject();
            var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID,
                this.DivGrd.form.grdList, "Sheet1!A1");

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
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.rdGubun.addEventHandler("onitemchanged",this.rdGubun_onitemchanged,this);
            this.btnExcel.addEventHandler("onclick",this.btnExcel_onclick,this);
            this.btnPrt.addEventHandler("onclick",this.btnPrt_onclick,this);
            this.cbCustNm.addEventHandler("onitemchanged",this.cbCustNm_onitemchanged,this);
            this.edSCustCd.addEventHandler("onchanged",this.edSCustCd_onchanged,this);
            this.calEDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.calSDate.addEventHandler("onkeyup",this.LocalFctn_OnKeyDown,this);
            this.ds_mk_Cust.addEventHandler("oncolumnchanged",this.ds_mk_Paper_oncolumnchanged,this);
        };
        this.loadIncludeScript("MK144.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
