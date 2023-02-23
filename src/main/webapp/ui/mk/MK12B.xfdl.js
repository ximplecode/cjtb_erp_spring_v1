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
            this.set_titletext("제지사별 용지매입 단가현황");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_CLASS\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"PAPER\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_STNDNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRIMARY_UNITCOST\" type=\"STRING\" size=\"256\"/><Column id=\"SECONDARY_UNITCOST\" type=\"STRING\" size=\"256\"/><Column id=\"THIRD_UNITCOST\" type=\"STRING\" size=\"256\"/><Column id=\"FOURTH_UNITCOST\" type=\"STRING\" size=\"256\"/><Column id=\"QUINTIC_UNITCOST\" type=\"STRING\" size=\"256\"/><Column id=\"PRIMARY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SECONDARY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"THIRD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FOURTH_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"QUINTIC_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_Cust", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CUST\" type=\"STRING\" size=\"6\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REPRESENTATIVE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_STARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_STOPPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ACNTNO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTDTL_SALEAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PWT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","12","10","528","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("제지사별 용지매입 단가현황");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrt",null,"49","80","40","1.54%",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("출력");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"49","80","40","btnPrt:7",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbCustNm",null,"52","233","35","212",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_mk_Cust");
            obj.set_datacolumn("CUST_NAME");
            obj.set_codecolumn("CUST");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edSCustCd",null,"52","88","35","cbCustNm:3",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stOrdCust",null,"52","85","35","edSCustCd:3",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("매입처");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEDate",null,"13","160","35","212",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate",null,"13","161","35","calEDate:3",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stDate",null,"13","85","35","calSDate:3",null,null,null,null,null,this);
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

            obj = new Combo("cbPprCustNm",null,"91","233","35","212",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_mk_Cust");
            obj.set_datacolumn("CUST_NAME");
            obj.set_codecolumn("CUST");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edPprCustCd",null,"91","88","35","cbPprCustNm:3",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stPpr",null,"91","85","35","edPprCustCd:3",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("제지사");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","8","130","98.85%",null,null,"10",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdUse\"><Columns><Column size=\"143\"/><Column size=\"145\"/><Column size=\"94\"/><Column size=\"220\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"매입처\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"제지사\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" colspan=\"2\" text=\"용지명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"1차\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"2차\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"3차\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"4차\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" text=\"5차\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:CUST_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" suppress=\"1\" suppressalign=\"middle\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell col=\"1\" rowspan=\"2\" text=\"bind:PPR_CUST_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" suppress=\"2\" suppressalign=\"middle\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell col=\"2\" rowspan=\"2\" text=\"bind:PPRKND_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"3\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\" suppressalign=\"middle\"/><Cell col=\"3\" text=\"bind:PAPER\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"currency\" maskeditformat=\"#.###\" maskeditmaskchar=\"0\" maskedittype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell col=\"4\" text=\"bind:PRIMARY_DATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\" maskeditformat=\"#.###\" maskeditmaskchar=\"0\" maskedittype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"bind:SECONDARY_DATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\" maskeditformat=\"#.###\" maskeditmaskchar=\"0\" maskedittype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\" text=\"bind:THIRD_DATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\" maskeditformat=\"#.###\" maskeditmaskchar=\"0\" maskedittype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"7\" text=\"bind:FOURTH_DATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\" maskeditformat=\"#.###\" maskeditmaskchar=\"0\" maskedittype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"8\" text=\"bind:QUINTIC_DATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\" maskeditformat=\"#.###\" maskeditmaskchar=\"0\" maskedittype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\" calendardateformat=\"yyyy-MM-dd\"/><Cell row=\"1\" col=\"3\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" text=\"bind:PPR_NAME\" textAlign=\"center\"/><Cell row=\"1\" col=\"4\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" displaytype=\"mask\" text=\"bind:PRIMARY_UNITCOST\" maskeditformat=\"#,###\"/><Cell row=\"1\" col=\"5\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" displaytype=\"mask\" text=\"bind:SECONDARY_UNITCOST\" maskeditformat=\"#,###\"/><Cell row=\"1\" col=\"6\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" displaytype=\"mask\" text=\"bind:THIRD_UNITCOST\" maskeditformat=\"#,###\"/><Cell row=\"1\" col=\"7\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" displaytype=\"mask\" text=\"bind:FOURTH_UNITCOST\" maskeditformat=\"#,###\"/><Cell row=\"1\" col=\"8\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" displaytype=\"mask\" text=\"bind:QUINTIC_UNITCOST\" maskeditformat=\"#,###\"/></Band></Format></Formats>");
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
        this.addIncludeScript("MK12B.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK12B.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("MK12B.xfdl","Lib::Lib_mk.xjs");
        this.registerScript("MK12B.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_mk.xjs"); /*include "Lib::Lib_mk.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerDML, vPerDel;
        var vStr;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var sCust_Gubn = "40";
        var sPCust_Gubn = "40";
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

        	if(this.edSCustCd.value == "")
        	{
        		alert("매입처를 입력해 주세요.");
        		this.edSCustCd.setFocus();
        		return false;
        	}

        	in_ds 	= "dsList=dsList";
        	out_ds 	= "dsList=dsList";

        	if(Eco.isUndefined(this.edSCustCd.value) == true || this.edSCustCd.value == "0000"){
        		vCustCd = "";
        	}else {
        		vCustCd = this.edSCustCd.value;
        	}

        	if(Eco.isUndefined(this.edPprCustCd.value) == true || this.edSCustCd.value == "0000"){
        		vPCustCd = "";
        	}else {
        		vPCustCd = this.edPprCustCd.value;
        	}


        	str_url = "JSP/mk/mk12bf_pprunitcost_list.jsp";
        	str_arg = "SDATE=" + nexacro.wrapQuote(this.calSDate.value) +
        	          " EDATE=" + nexacro.wrapQuote(this.calEDate.value) +
        	          " CUST_CODE=" +nexacro.wrapQuote(vCustCd) +
        			  " PPR_CUST_CODE=" +nexacro.wrapQuote(vPCustCd);

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

        	if(this.edSCustCd.value == "")
        	{
        		alert("매입처를 입력해 주세요.");
        		this.edSCustCd.setFocus();
        		return false;
        	}

        	var vCustCd;
        	var vPCustCd;

        	if(Eco.isUndefined(this.edSCustCd.value) == true || this.edSCustCd.value == "0000"){
        		vCustCd = "";
        	}else {
        		vCustCd = this.edSCustCd.value;
        	}

        	if(Eco.isUndefined(this.edPprCustCd.value) == true || this.edPprCustCd.value == "0000"){
        		vPCustCd = "";
        	}else {
        		vPCustCd = this.edPprCustCd.value;
        	}

        	var rdUrl = gv_svcUrl + "rpt/mk/MK12B.mrd";
            var rdParam = "/rp [" + this.calSDate.value + "] [" + this.calEDate.value + "] [" +  vCustCd + "] [" +  vPCustCd + "]";

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
            this.edSCustCd.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.calEDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.calSDate.addEventHandler("onkeyup",this.LocalFctn_OnKeyDown,this);
            this.cbPprCustNm.addEventHandler("onitemchanged",this.cbPprCustNm_onitemchanged,this);
            this.edPprCustCd.addEventHandler("onchanged",this.edPprCustCd_onchanged,this);
            this.edPprCustCd.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.ds_mk_Cust.addEventHandler("oncolumnchanged",this.ds_mk_Paper_oncolumnchanged,this);
        };
        this.loadIncludeScript("MK12B.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
