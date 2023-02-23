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
            this.set_titletext("제지사 거래처원장");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(630,220);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPprInList", this);
            obj.set_keystring("CUST,PPR_CUST");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CUST\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_PPR_CUST\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PAPER\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_QTY\" type=\"FLOAT\" size=\"256\" prop=\"SUM\"/><Column id=\"PPR_WEIGHT\" type=\"FLOAT\" size=\"256\" prop=\"SUM\"/><Column id=\"PPR_AMOUNT\" type=\"INT\" size=\"256\" prop=\"SUM\"/><Column id=\"PPR_VAT\" type=\"INT\" size=\"256\" prop=\"SUM\"/><Column id=\"PPR_TOTAL_AMT\" type=\"INT\" size=\"256\" prop=\"SUM\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_Cust", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CUST\" type=\"STRING\" size=\"6\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REPRESENTATIVE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_STARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_STOPPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ACNTNO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTDTL_SALEAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PWT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","12","10","398","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("제지사 거래처원장");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrt",null,"103","80","80","1.59%",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("인쇄");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"103","80","80","btnPrt:13",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbCustNm","191","127","233","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_mk_Cust");
            obj.set_datacolumn("CUST_NAME");
            obj.set_codecolumn("CUST");
            this.addChild(obj.name, obj);

            obj = new Edit("edSCustCd",null,"127","88","35","cbCustNm:3",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stOrdCust",null,"127","85","35","edSCustCd:3",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("매입처");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEDate","264","85","160","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate",null,"85","161","35","calEDate:3",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stDate",null,"86","85","35","calSDate:3",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("매입일자");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","480","20","39","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose",null,null,"31","30","3.02%","72.73%",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_image("url(\'Img::icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stPpr",null,"168","85","35","533",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("제지사");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edPprCustCd",null,"168","88","35","442",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbPprCustNm",null,"168","233","35","206",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_mk_Cust");
            obj.set_datacolumn("CUST_NAME");
            obj.set_codecolumn("CUST");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",630,220,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK129.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK129.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("MK129.xfdl","Lib::Lib_mk.xjs");
        this.registerScript("MK129.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_mk.xjs"); /*include "Lib::Lib_mk.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerDML, vPerDel;
        var vStr, rdUrl, rdParam;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var sCust_Gubn = "40";
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var urlMrdHtml = nexacro.getApplication().gv_urlMrdHtml;
        var urlMrdService = nexacro.getApplication().gv_urlMrdService;



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

        //레포트 출력 이벤트
        this.btnPrt_onclick = function(obj,e)
        {
        	if(this.calSDate.value == "" )
        	{
        		alert("매입일자를 입력해 주세요.");
        		this.calSDate.setFocus();
        		return false;
        	}

        	if (this.calEDate.value == "" )
        	{
        		alert("매입일자를 입력해 주세요.");
        		this.calEDate.setFocus();
        		return false;
        	}

        	var vCustCd;
        	var vPprCd;

        	if(Eco.isUndefined(this.edSCustCd.value) == true || this.edSCustCd.value == "0000"){
        		vCustCd = "";
        		sCust_Gubn = "";
        	}else {
        		vCustCd = this.edSCustCd.value;
        		sCust_Gubn = "40";
        	}

        	if(Eco.isUndefined(this.edPprCustCd.value) == true || this.edSCustCd.value == "0000"){
        		vPCustCd = "";
        		sPCust_Gubn = "";
        	}else {
        		vPCustCd = this.edPprCustCd.value;
        		sPCust_Gubn = "40";
        	}

        	rdUrl = gv_svcUrl + "rpt/mk/MK129.mrd";

        	if(obj.name == "btnSearch"){
        		rdParam = "/rp [" + this.calSDate.value + "] [" + this.calEDate.value + "] [" + sCust_Gubn + "] [" +  vCustCd + "] [" +  sPCust_Gubn + "] [" +  vPCustCd + "]";
        		this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1500, 850);
        	}else{

        		rdParam = "/rpdfprintdialog /rp [" + this.calSDate.value + "] [" + this.calEDate.value + "] [" + sCust_Gubn + "] [" +  vCustCd + "] [" +  sPCust_Gubn + "] [" +  vPCustCd + "]";
        		this.WebBrowser00.set_url(urlMrdHtml);
        		this.WebBrowser00_onloadcompleted();
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
        			this.edPprCustCd.setFocus();
        		}
        	}
        };

        this.cbCustNm_onitemchanged = function(obj,e)
        {
        	var iCustIdx = this.ds_mk_Cust.findRow("CUST_NAME", this.cbCustNm.text);
        	this.edSCustCd.set_value(this.ds_mk_Cust.getColumn(iCustIdx, "CUST_CODE"));

        	if(iCustIdx != -1)
        		this.edPprCustCd.setFocus();
        };

        this.edPprCustCd_onchanged = function(obj,e)
        {
        	if(this.edPprCustCd.text.length == 1){

        		var vPprCustCd = this.lfn_CustName(sCust_Gubn, this.edPprCustCd.text);
        		this.edPprCustCd.set_value(vPprCustCd);
        	}

        	if(this.edPprCustCd.getLength() == this.edPprCustCd.text.length){

        		this.cbPprCustNm.set_index(this.ds_mk_Cust.findRow("CUST", sCust_Gubn+this.edPprCustCd.text));

        		if(this.cbPprCustNm.index == -1){
        			this.cbPprCustNm.setFocus();
        			this.cbPprCustNm.dropdown();
        		}else{
        			this.btnSearch.setFocus();
        		}
        	}
        };


        this.cbPprCustNm_onitemchanged = function(obj,e)
        {
        	var iCustIdx = this.ds_mk_Cust.findRow("CUST_NAME", this.cbPprCustNm.text);
        	this.edPprCustCd.set_value(this.ds_mk_Cust.getColumn(iCustIdx, "CUST_CODE"));

        	this.btnSearch.setFocus();

        };


        this.WebBrowser00_onloadcompleted = function(obj,e)
        {
        	var sUrl = urlMrdService;
        	var sId = "crownix-viewer";

        	this.WebBrowser00.callMethod("_crownix_createPrint", sUrl, sId, rdUrl, rdParam);
        };

        this.ImgClose_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkMain_onload,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.btnPrt.addEventHandler("onclick",this.btnPrt_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnPrt_onclick,this);
            this.cbCustNm.addEventHandler("onitemchanged",this.cbCustNm_onitemchanged,this);
            this.edSCustCd.addEventHandler("onchanged",this.edSCustCd_onchanged,this);
            this.edSCustCd.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.calEDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.calSDate.addEventHandler("onkeyup",this.LocalFctn_OnKeyDown,this);
            this.WebBrowser00.addEventHandler("onloadcompleted",this.WebBrowser00_onloadcompleted,this);
            this.ImgClose.addEventHandler("onclick",this.ImgClose_onclick,this);
            this.edPprCustCd.addEventHandler("onchanged",this.edPprCustCd_onchanged,this);
            this.ds_mk_Cust.addEventHandler("oncolumnchanged",this.ds_mk_Paper_oncolumnchanged,this);
        };
        this.loadIncludeScript("MK129.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
