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
            this.set_titletext("제지사별 용지 매입현황");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(640,280);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mk_Cust", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CUST\" type=\"STRING\" size=\"6\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REPRESENTATIVE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_STARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_STOPPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ACNTNO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTDTL_SALEAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PWT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">천재교육</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">해법에듀</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">천재교과서</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">천재문화</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_Paper", this);
            obj._setContents("<ColumnInfo><Column id=\"PPR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_STND\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_REGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_LENGTH\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CONVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_DANGA\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_FEQUENT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_DISABLED\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_STNDNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_CLASS\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGubun1", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">제지사별</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">거래처별</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","12","10","498","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("제지사별 용지 매입현황");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","446","143","170","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("마감처리");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrt","536","90","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("인쇄");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","446","90","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbCustNm","189","113","232","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_mk_Cust");
            obj.set_datacolumn("CUST_NAME");
            obj.set_codecolumn("CUST");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edSCustCd","98","113","88","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stCust",null,"113","85","35","edSCustCd:3",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("거래처1");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEDate","261","73","160","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate",null,"73","160","35","calEDate:3",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stDate","10","73",null,"35","calSDate:3",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("매입일자");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Radio("rdGubun","9","194","412","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("dsGubun");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("vertical");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_background("lightsteelblue");
            obj.set_color("white");
            obj.set_fittocontents("none");
            obj.set_padding("0px 0px 0px 15px");
            obj.set_letterSpacing("0px");
            obj.set_columncount("0");
            obj.set_rowcount("0");
            obj.set_text("천재교육");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stCust1","10","153","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("거래처2");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edSCustCd1","98","153","88","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbCustNm1","189","153","232","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_mk_Cust");
            obj.set_datacolumn("CUST_NAME");
            obj.set_codecolumn("CUST");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Radio("rdGubun1","9","235","412","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_innerdataset("dsGubun1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("vertical");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_background("lightsteelblue");
            obj.set_color("white");
            obj.set_fittocontents("none");
            obj.set_wordSpacing("0px");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_columncount("0");
            obj.set_rowcount("0");
            obj.set_text("천재교육");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose",null,null,"31","30","4.22%","78.21%",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_image("url(\'Img::icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","480","20","39","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",640,280,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK123.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK123.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("MK123.xfdl","Lib::Lib_mk.xjs");
        this.registerScript("MK123.xfdl", function() {
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

        		//거래처 정보 가져오기
        		this.gfn_TransactionP("select", "JSP/mk/Cust_Select.jsp", "ds_mk_Cust=ds_mk_Cust", "ds_mk_Cust=ds_mk_Cust", "", "", false, "S", false, this);
        		this.ds_mk_Cust.filter("CUST_GUBN=='00' || CUST_GUBN=='" + sCust_Gubn + "'");

        		this.edSCustCd.set_value("0025");
        		this.edSCustCd_onchanged();
        		this.edSCustCd1.set_value("0033");
        		this.edSCustCd1_onchanged();

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

        //레포트 출력 및 인쇄 이벤트
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

        	if(this.rdGubun.value == "0" && this.rdGubun1.value == "0")
        		rdUrl = gv_svcUrl + "rpt/mk/MK123.mrd";
        	else if(this.rdGubun.value == "1" && this.rdGubun1.value == "0")
        		rdUrl = gv_svcUrl + "rpt/mk/MK123_EDU.mrd";
         	else if(this.rdGubun.value == "2" && this.rdGubun1.value == "0")
        		rdUrl = gv_svcUrl + "MK123_CJTEXTBOOK.mrd";
         	else if(this.rdGubun.value == "3" && this.rdGubun1.value == "0")
        		rdUrl = gv_svcUrl + "MK123_HBMATH.mrd";
         	else if(this.rdGubun.value == "0" && this.rdGubun1.value== "1")
        		rdUrl = gv_svcUrl + "MK123_1.mrd";
         	else if(this.rdGubun.value == "1" && this.rdGubun1.value == "1")
        		rdUrl = gv_svcUrl + "MK123_EDU_1.mrd";
         	else if(this.rdGubun.value == "2" && this.rdGubun1.value == "1")
        		rdUrl = gv_svcUrl + "MK123_CJTEXTBOOK_1.mrd";
         	else if(this.rdGubun.value == "3" && this.rdGubun1.value == "1")
        		rdUrl = gv_svcUrl + "MK123_HBMATH_1.mrd";

        	var strArg = "";

        	if( (Eco.isUndefined(this.edSCustCd.value) == true || this.edSCustCd.value == "0000") &&
        		(Eco.isUndefined(this.edSCustCd1.value) == true || this.edSCustCd1.value == "0000") )
               strArg += "[] [] ";
        	else
        		if( Eco.isUndefined(this.edSCustCd.value) == false && this.edSCustCd.value != "0000" && this.edSCustCd.value != "" &&
        		    Eco.isUndefined(this.edSCustCd1.value) == false && this.edSCustCd1.value != "0000"  && this.edSCustCd1.value != "" )
                  strArg += "[" + sCust_Gubn + "] ['" + this.edSCustCd.value + "','" + this.edSCustCd1.value + "'] ";
        		else
        			if( (Eco.isUndefined(this.edSCustCd.value) == false && this.edSCustCd.value != "0000") &&
        				(Eco.isUndefined(this.edSCustCd1.value) == true || this.edSCustCd1.value == "0000" || this.edSCustCd1.value == "") )
        				strArg += "['" + this.edSCustCd.value + "'] ";
        			else
        				strArg += "['" + this.edSCustCd1.value + "'] ";

        	if(obj.name == "btnSearch"){
        		rdParam = "/rp [" + this.calSDate.value + "] [" + this.calEDate.value + "] "+strArg;
        		this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1500, 850);
        	}else{

        		rdParam = "/rpdfprintdialog /rp [" + this.calSDate.value + "] [" + this.calEDate.value + "] "+strArg;
        		this.WebBrowser00.set_url(urlMrdHtml);
        		this.WebBrowser00_onloadcompleted();
        	}
        };

        // 마감버튼은 사용안하는듯 (2013년 이후 데이터가 없음)
        this.btnClose_onclick = function(obj,e)
        {
        	if(this.rdGubun.value == 0)
        		str_url = "JSP/mk/paper_in_close_dml.jsp";
        	else if(this.rdGubun.value == 1)
        		str_url = "JSP/mk/paper_in_close_dml_hbedu.jsp";
        	else if(this.rdGubun.value == 2)
        		str_url = "JSP/mk/paper_in_close_dml_textbook.jsp";
        	else if(this.rdGubun.value == 3)
        		str_url = "JSP/mk/paper_in_close_dml_hbmath.jsp";

        	str_arg = "SDATE=" + nexacro.wrapQuote(this.calSDate.value) +
        	          " EDATE=" + nexacro.wrapQuote(this.calEDate.value) +
        	          " CUST_GUBUN=" +nexacro.wrapQuote(sCust_Gubn) +
        			  " CUST_CODE=" +" " +
        			  " EMPLOYEE_ID=" +nexacro.wrapQuote(gv_sabun);

        	this.gfn_TransactionP("close", str_url, "", "", str_arg, "fnCallbackClose", false, vPerDML, false, this);
        };

        this.fnCallbackClose = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{
        		alert("마감완료");
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
        			this.edSCustCd1.setFocus();
        		}
        	}
        };

        this.cbCustNm_onitemchanged = function(obj,e)
        {
        	var iCustIdx = this.ds_mk_Cust.findRow("CUST_NAME", this.cbCustNm.text);
        	this.edSCustCd.set_value(this.ds_mk_Cust.getColumn(iCustIdx, "CUST_CODE"));

        	if(iCustIdx != -1)
        		this.edSCustCd1.setFocus();

        };

        this.edSCustCd1_onchanged = function(obj,e)
        {
        	if(this.edSCustCd1.text.length == 1){

        		var vCustCd = this.lfn_CustName(sCust_Gubn, this.edSCustCd1.text);
        		this.edSCustCd1.set_value(vCustCd);
        	}

        	if(this.edSCustCd1.getLength() == this.edSCustCd1.text.length){

        		this.cbCustNm1.set_index(this.ds_mk_Cust.findRow("CUST", sCust_Gubn+this.edSCustCd1.text));

        		if(this.cbCustNm1.index == -1){
        			this.cbCustNm1.setFocus();
        			this.cbCustNm1.dropdown();
        		}else{
        			this.btnSearch.setFocus();
        		}
        	}
        };

        this.cbCustNm1_onitemchanged = function(obj,e)
        {
        	var iCustIdx = this.ds_mk_Cust.findRow("CUST_NAME", this.cbCustNm1.text);
        	this.edSCustCd1.set_value(this.ds_mk_Cust.getColumn(iCustIdx, "CUST_CODE"));

        	if(iCustIdx != -1)
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
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnPrt.addEventHandler("onclick",this.btnPrt_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnPrt_onclick,this);
            this.cbCustNm.addEventHandler("onitemchanged",this.cbCustNm_onitemchanged,this);
            this.edSCustCd.addEventHandler("onchanged",this.edSCustCd_onchanged,this);
            this.calEDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.calSDate.addEventHandler("onkeyup",this.LocalFctn_OnKeyDown,this);
            this.rdGubun.addEventHandler("onitemchanged",this.rdGubun_onitemchanged,this);
            this.edSCustCd1.addEventHandler("onchanged",this.edSCustCd1_onchanged,this);
            this.cbCustNm1.addEventHandler("onitemchanged",this.cbCustNm1_onitemchanged,this);
            this.ImgClose.addEventHandler("onclick",this.ImgClose_onclick,this);
            this.WebBrowser00.addEventHandler("onloadcompleted",this.WebBrowser00_onloadcompleted,this);
            this.ds_mk_Cust.addEventHandler("oncolumnchanged",this.ds_mk_Paper_oncolumnchanged,this);
        };
        this.loadIncludeScript("MK123.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
