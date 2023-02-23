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
            this.set_titletext("용지입고현황");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPprInList", this);
            obj._setContents("<ColumnInfo><Column id=\"PPRINMST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINMST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINDTL_PPRSTND\" type=\"STRING\" size=\"256\" prop=\"\"/><Column id=\"TYPE_NAME\" type=\"STRING\" size=\"256\" prop=\"\"/><Column id=\"PPRINDTL_QTY\" type=\"FLOAT\" size=\"256\" prop=\"SUM\"/><Column id=\"PPRINDTL_WEIGHT\" type=\"FLOAT\" size=\"256\" prop=\"SUM\"/><Column id=\"PPRINDTL_UNITCOST\" type=\"FLOAT\" size=\"256\" prop=\"\"/><Column id=\"PPRINDTL_AMOUNT\" type=\"FLOAT\" size=\"256\" prop=\"SUM\"/><Column id=\"PPRINDTL_VAT\" type=\"FLOAT\" size=\"256\" prop=\"SUM\"/><Column id=\"PPRINDTL_TOTALAMT\" type=\"FLOAT\" size=\"256\" prop=\"SUM\"/><Column id=\"CGUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CCODE\" type=\"STRING\" size=\"256\"/><Column id=\"CNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_Cust", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CUST\" type=\"STRING\" size=\"6\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REPRESENTATIVE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_STARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_STOPPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ACNTNO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTDTL_SALEAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PWT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">입고일자별</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">매입처별</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">용지별</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_Paper", this);
            obj._setContents("<ColumnInfo><Column id=\"PPR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_STND\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_REGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_LENGTH\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CONVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_DANGA\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_FEQUENT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_DISABLED\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_STNDNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_CLASS\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","12","10","346","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("용지입고현황");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrt",null,"49","80","40","0.77%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("출력");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"49","80","40","btnPrt:7",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbCustNm",null,"33","233","35","btnSearch:15",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_mk_Cust");
            obj.set_datacolumn("CUST_NAME");
            obj.set_codecolumn("CUST");
            this.addChild(obj.name, obj);

            obj = new Edit("edSCustCd",null,"33","88","35","cbCustNm:3",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Static("stOrdCust",null,"33","85","35","edSCustCd:3",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("발주처");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEDate",null,"33","140","35","stOrdCust:3",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate",null,"33","140","35","calEDate:3",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("stInDate",null,"33","85","35","calSDate:3",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("입고일자");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Radio("rdGubun",null,"btnSearch:-16","371","35","btnSearch:15",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("dsGubun");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("vertical");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_background("lightsteelblue");
            obj.set_color("white");
            obj.set_fittocontents("none");
            obj.set_wordSpacing("20px");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_text("단가 \'0\'인 건  ");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cbPprNm",null,"73","233","35","rdGubun:3",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_mk_Paper");
            obj.set_datacolumn("PPR_NAME");
            obj.set_codecolumn("PPR_CODE");
            this.addChild(obj.name, obj);

            obj = new Edit("edPprCd",null,"73","88","35","cbPprNm:3",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Static("stPpr",null,"73","85","35","edPprCd:3",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("용지코드");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("stsmallSub","13","64","279","42",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("(입고일자별)");
            obj.set_font("bold 24px/normal \"함초롬바탕 확장B\"");
            obj.set_color("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Div("DivGrd","11","122","98.85%",null,null,"2",null,null,null,null,this);
            obj.set_taborder("15");
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
        this.addIncludeScript("MK125.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK125.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("MK125.xfdl","Lib::Lib_mk.xjs");
        this.registerScript("MK125.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_mk.xjs"); /*include "Lib::Lib_mk.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerDML, vPerDel;
        var vStr;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var sCust_Gubn = "40";
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");


        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", nexacro.getApplication().gv_selectMenu);

        	vPerSel = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_SELECT");
        	vPerDML = "U";
        	vPerDel = "D";

        	if(vPerSel = "1"){
        		var d = new Date();
        		var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");							//오늘날짜 setting
        		var strPreDay = Eco.date.getMaskFormatString(Eco.date.getFirstDate(d), "yyyyMMdd"); //이번달 1일 setting

        		this.calSDate.set_value(strPreDay);
        		this.calEDate.set_value(strtoDay);

        		//발주처 정보 가져오기
        		this.gfn_TransactionP("select", "JSP/mk/Cust_Select.jsp", "ds_mk_Cust=ds_mk_Cust", "ds_mk_Cust=ds_mk_Cust", "", "", false, "S", false, this);
        		this.ds_mk_Cust.filter("CUST_GUBN=='00' || CUST_GUBN=='" + sCust_Gubn + "'");

        		//용지 데이터 가져오기
        		this.gfn_TransactionP("select", "JSP/mk/getData_paper.jsp", "ds_mk_Paper=ds_mk_Paper", "ds_mk_Paper=ds_mk_Paper", "", "", false, "S", false, this);


        		this.DivGrd.set_url("mk::MK125_1.xfdl");
        		this.dsPprInList.set_keystring("G:PPRINMST_DATE,PPRINMST_NO");

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
        	//this.lfn_grdAutofit(this.DivGrd.form.grdList);
        };

        //조회버튼 클릭
        this.btnSearch_onclick = function(obj,e)
        {
        	if(this.calSDate.value == "" )
        	{
        		alert("입고일자를 입력해 주세요.");
        		this.calSDate.setFocus();
        		return false;
        	}

        	if (this.calEDate.value == "" )
        	{
        		alert("입고일자를 입력해 주세요.");
        		this.calEDate.setFocus();
        		return false;
        	}

        	in_ds 	= "dsPprInList=dsPprInList";
        	out_ds 	= "dsPprInList=dsPprInList";

        	if(Eco.isUndefined(this.edSCustCd.value) == true){
        		vCustCd = "";
        		sCust_Gubn = "";
        	}else if(this.edSCustCd.value == "0000"){
        		vCustCd = "";
        		sCust_Gubn = "";
        	}else {
        		vCustCd = this.edSCustCd.value;
        		sCust_Gubn = "40";
        	}

        	if(this.rdGubun.value == 1)
        		str_url = "JSP/mk/mk125_Select1.jsp";
        	else if(this.rdGubun.value == 2)
        		str_url = "JSP/mk/mk125_Select2.jsp";
        	else
        		str_url = "JSP/mk/mk125_Select3.jsp";

        	str_arg = "SDATE=" + nexacro.wrapQuote(this.calSDate.value) +
        	          " EDATE=" + nexacro.wrapQuote(this.calEDate.value) +
        	          " CUST_GUBN=" +nexacro.wrapQuote( sCust_Gubn) +
        			  " CUST_CODE=" +nexacro.wrapQuote( vCustCd ) +
        			  " PPR_CODE=" +nexacro.wrapQuote(this.edPprCd.value);

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnCallbackSelect", false, "S", false, this);
        };


        this.fnCallbackSelect = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{

        		if(this.dsPprInList.rowcount == 0){
        			alert("조회된 자료가 없습니다.");
        			return false;
        		}
        	}
        };

        //레포트 출력 이벤트
        this.btnPrt_onclick = function(obj,e)
        {
        	if(this.calSDate.value == "" )
        	{
        		alert("입고일자를 입력해 주세요.");
        		this.calSDate.setFocus();
        		return false;
        	}

        	if (this.calEDate.value == "" )
        	{
        		alert("입고일자를 입력해 주세요.");
        		this.calEDate.setFocus();
        		return false;
        	}

        	var vCustCd;
        	var vPprCd;

        	if(Eco.isUndefined(this.edSCustCd.value) == true){
        		vCustCd = "";
        		sCust_Gubn = "";
        	}else if(this.edSCustCd.value == "0000"){
        		vCustCd = "";
        		sCust_Gubn = "";
        	}else {
        		vCustCd = this.edSCustCd.value;
        		sCust_Gubn = "40";
        	}

        	if(Eco.isUndefined(this.edPprCd.value) == true){
        		vPprCd = "";
        	}

        	var rdUrl = gv_svcUrl + "rpt/mk/MK125_"+this.rdGubun.value+".mrd";
            var rdParam = "/rp [" + this.calSDate.value + "] [" + this.calEDate.value + "] [" + sCust_Gubn + "] [" +  vCustCd + "] [" +  vPprCd + "]";

        	this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1500, 850);

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
        		}else{
        			this.edPprCd.setFocus();
        		}
        	}
        };

        this.cbCustNm_onitemchanged = function(obj,e)
        {
        	var iCustIdx = this.ds_mk_Cust.findRow("CUST_NAME", this.cbCustNm.text);
        	this.edSCustCd.set_value(this.ds_mk_Cust.getColumn(iCustIdx, "CUST_CODE"));

        	if(iCustIdx != -1)
        		this.edPprCd.setFocus();

        };

        this.rdGubun_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == 1){
        		this.stsmallSub.set_text("("+this.dsGubun.getColumn(e.postvalue-1, "NAME")+")");
        		this.DivGrd.set_url("mk::MK125_1.xfdl");
        		this.dsPprInList.set_keystring("G:PPRINMST_DATE,PPRINMST_NO");
        		this.lfn_grdAutofit(this.DivGrd.form.grdList);
        	}else if(e.postvalue == 2){
        		this.stsmallSub.set_text("("+this.dsGubun.getColumn(e.postvalue-1, "NAME")+")");
        		this.DivGrd.set_url("mk::MK125_2.xfdl");
        		this.dsPprInList.set_keystring("G:PPRINMST_DATE,NAME");

        	}else{
        		this.stsmallSub.set_text("("+this.dsGubun.getColumn(e.postvalue-1, "NAME")+")");
        		this.DivGrd.set_url("mk::MK125_3.xfdl");
        		this.dsPprInList.set_keystring("G:PPR_CODE");
        	}
        };

        this.edPprCd_onchanged = function(obj,e)
        {
        	if(this.edPprCd.getLength() == this.edPprCd.text.length){
        		this.cbPprNm.set_index(this.ds_mk_Paper.findRow("PPR_CODE",  this.edPprCd.text));

        		if(this.cbPprNm.index == -1)
        		{
        			this.cbPprNm.setFocus();
        			this.cbPprNm.dropdown();
        		}else{
        			this.rdGubun.setFocus();
        		}
        	}
        };

        this.cbPprNm_onitemchanged = function(obj,e)
        {
        	var iPprIdx = this.ds_mk_Paper.findRow("PPR_NAME", this.cbPprNm.text);
        	this.edPprCd.set_value(this.ds_mk_Paper.getColumn(iPprIdx, "PPR_CODE"));

        	if(this.cbPprNm.index != -1)
        	{
        		this.rdGubun.setFocus();
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkMain_onload,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.btnPrt.addEventHandler("onclick",this.btnPrt_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.cbCustNm.addEventHandler("onitemchanged",this.cbCustNm_onitemchanged,this);
            this.edSCustCd.addEventHandler("onchanged",this.edSCustCd_onchanged,this);
            this.calEDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.calSDate.addEventHandler("onkeyup",this.LocalFctn_OnKeyDown,this);
            this.rdGubun.addEventHandler("onitemchanged",this.rdGubun_onitemchanged,this);
            this.cbPprNm.addEventHandler("onitemchanged",this.cbPprNm_onitemchanged,this);
            this.edPprCd.addEventHandler("onchanged",this.edPprCd_onchanged,this);
            this.ds_mk_Cust.addEventHandler("oncolumnchanged",this.ds_mk_Paper_oncolumnchanged,this);
        };
        this.loadIncludeScript("MK125.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
