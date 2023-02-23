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
            this.set_titletext("용지수불명세서");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(630,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">A4</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">136컬럼</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_Paper", this);
            obj._setContents("<ColumnInfo><Column id=\"PPR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_STND\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_REGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_LENGTH\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CONVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_DANGA\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_FEQUENT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_DISABLED\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_STNDNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_CLASS\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","12","10","398","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("용지수불명세서");
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

            obj = new Combo("cbSPprNm","191","127","233","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_mk_Paper");
            obj.set_datacolumn("PPR_NAME");
            obj.set_codecolumn("PPR_CODE");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edSPprCd",null,"127","88","35","cbSPprNm:3",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stPaper",null,"127","85","76","edSPprCd:3",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("용지");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEDate","264","86","160","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate",null,"86","161","35","calEDate:3",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stDate",null,"86","85","35","calSDate:3",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("조회일자");
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

            obj = new ImageViewer("ImgClose",null,null,"31","30","3.02%","81.72%",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_image("url(\'Img::icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edEPprCd","stPaper:3","168","88","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_autoselect("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbEPprNm","edEPprCd:3","168","233","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_mk_Paper");
            obj.set_datacolumn("PPR_NAME");
            obj.set_codecolumn("PPR_CODE");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("stSort",null,"250","85","35","533",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("출력용지");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Radio("rdSort","stSort:3","250","323","35",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_innerdataset("dsGubun");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("horizontal");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_background("lightsteelblue");
            obj.set_color("white");
            obj.set_fittocontents("none");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_rowcount("2");
            obj.set_columncount("2");
            obj.set_text("단가 \'0\'인 건  ");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stTotal",null,"209","85","35","533",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("집계");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new CheckBox("cbPaperTotal","stTotal:17","218","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("용지집계");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_value("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",630,300,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK151.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK151.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK151.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPerDML, vPerPrt;
        var vStr, rdUrl, rdParam;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var urlMrdHtml = nexacro.getApplication().gv_urlMrdHtml;
        var urlMrdService = nexacro.getApplication().gv_urlMrdService;
        var gv_urlRdDataServer = nexacro.getApplication().gv_urlRdDataServer;

        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", nexacro.getApplication().gv_selectMenu);

        	vPerDML = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_DML");
        	vPerPrt = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_PRINT");

        	//권한 체크 및 컴포넌트 ENABLE처리
        	if(vPerDML != "1" || vPerPrt != "1")
        		this.fctn_User_Enabled(this, false);

        	if(vPerPrt = "1"){

        		//용지 데이터 가져오기
        		this.gfn_TransactionP("select", "JSP/mk/getData_paper.jsp", "ds_mk_Paper=ds_mk_Paper", "ds_mk_Paper=ds_mk_Paper", "", "", false, "S", false, this);
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
        	if(this.calSDate.value == "" || Eco.isUndefined(this.calSDate.value) == true)
        	{
        		alert("조회 시작일자를 입력해 주세요.");
        		this.calSDate.setFocus();
        		return false;
        	}

        	if (this.calEDate.value == "" || Eco.isUndefined(this.calEDate.value) == true )
        	{
        		alert("조회 종료일자를 입력해 주세요.");
        		this.calEDate.setFocus();
        		return false;
        	}

        	if(this.calSDate.value.substr(0, 4) != this.calEDate.value.substr(0, 4)){
        		alert("검색연도가 다릅니다. 수정후 다시 조회 하시길 바랍니다.");
        		return false;
        	}

        	if(this.cbPaperTotal.value == true)
        	{
        		str_url = "JSP/mk/mk157f_paper_close_dml.jsp";
        		str_arg = "pMON_00=" + nexacro.wrapQuote() +
        				" pMONTH=" + nexacro.wrapQuote() +
        				" pPREMONTH=" + nexacro.wrapQuote() +
        				" pMON_TDATE=" + nexacro.wrapQuote() +
        				" pMON_SDATE=" + nexacro.wrapQuote(this.calSDate.value) +
        				" pMON_EDATE=" + nexacro.wrapQuote(this.calEDate.value) +
        				" pPROC_SET=" + nexacro.wrapQuote(3);

        		this.gfn_TransactionP("update", str_url, "", "", str_arg, "fnCallbackTotalUpdate", false, vPerDML, false, this);
        	}

        	if(this.rdSort.value == 1)
        		rdUrl = gv_svcUrl + "rpt/mk/MK151.mrd";
        	else
        		rdUrl = gv_svcUrl + "rpt/mk/MK151_136.mrd";

        	var vEDate, vSPprCd, vEPprCd;
        	if(this.calEDate.value.substr(4, 4) == "1231")
        		vEDate = this.calEDate.value.substr(0,4)+"1299";
        	else
        		vEDate = this.calEDate.value;

        	if (this.edSPprCd.value == "" || Eco.isUndefined(this.edSPprCd.value) == true || this.edSPprCd.value.length != 4)
        	{
        		vSPprCd = "NULL";
        	}else{
        		vSPprCd = "'"+this.edSPprCd.value+"'";
        	}

        	if (this.edEPprCd.value == "" || Eco.isUndefined(this.edEPprCd.value) == true || this.edEPprCd.value.length != 4)
        	{
        		vEPprCd = "NULL";
        	}else{
        		vEPprCd = "'"+this.edEPprCd.value+"'";
        	}


        	if(obj.name == "btnSearch"){
        		rdParam = "/ragentpath ["+ gv_urlRdDataServer +"]"+ " /rp [" + this.calSDate.value.substr(0, 4)+"0100" + "]" +
        				  "[" + this.calSDate.value + "]" +
        				  "[" + vEDate + "]" +
        				  "[" +  vSPprCd + "]"+
        				  "[" +  vEPprCd + "]";

        		var vScreenWidth = system.getScreenWidth();

        		if(vScreenWidth >= 1920)
        			vScreenWidth = vScreenWidth/2

        		nexacro.open("popupPrt", "mk::MKRDF.xfdl", this.getOwnerFrame(), {rdUrl:rdUrl, rdParam:rdParam}, "autosize=false", 0, 0, vScreenWidth, system.getScreenHeight(), this);

        	}else{

        		rdParam = "/ragentpath ["+ gv_urlRdDataServer +"]"+ " /rpdfprintdialog"+
        				  " /rp [" + this.calSDate.value.substr(0, 4)+"0100" + "]" +
        				      "[" + this.calSDate.value + "]" +
        					  "[" + vEDate + "]" +
        					  "[" +  vSPprCd + "]" +
        					  "[" +  vEPprCd + "]";

        		this.WebBrowser00.set_url(urlMrdHtml);
        		this.WebBrowser00_onloadcompleted();
        	}

        };

        this.fnCallbackTotalUpdate = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
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

        this.edSPprCd_onchanged = function(obj,e)
        {
        	if(this.edSPprCd.getLength() == this.edSPprCd.text.length){

        		this.cbSPprNm.set_index(this.ds_mk_Paper.findRow("PPR_CODE", this.edSPprCd.text));

        		if(this.cbSPprNm.index == -1){
        			this.cbSPprNm.setFocus();
        			this.cbSPprNm.dropdown();
        		}else{
        			this.edEPprCd.setFocus();
        		}
        	}
        };


        this.cbSPprNm_onitemchanged = function(obj,e)
        {
        	var iSPprIdx = this.ds_mk_Paper.findRow("PPR_NAME", this.cbSPprNm.text);
        	this.edSPprCd.set_value(this.ds_mk_Paper.getColumn(iSPprIdx, "PPR_CODE"));

        	if(iSPprIdx != -1)
        		this.edEPprCd.setFocus();
        };

        this.edEPprCd_onchanged = function(obj,e)
        {
        	if(this.edEPprCd.getLength() == this.edEPprCd.text.length){

        		this.cbEPprNm.set_index(this.ds_mk_Paper.findRow("PPR_CODE", this.edEPprCd.text));

        		if(this.cbEPprNm.index == -1){
        			this.cbEPprNm.setFocus();
        			this.cbEPprNm.dropdown();
        		}
        	}
        };

        this.cbEPprNm_onitemchanged = function(obj,e)
        {
        	var iEPprIdx = this.ds_mk_Paper.findRow("PPR_NAME", this.cbEPprNm.text);
        	this.edEPprCd.set_value(this.ds_mk_Paper.getColumn(iEPprIdx, "PPR_CODE"));
        };

        this.WebBrowser00_onloadcompleted = function(obj,e)
        {
        	var sUrl = urlMrdService;
        	var sId = "crownix-viewer";

        	this.WebBrowser00.callMethod("_crownix_createPrint", sUrl, sId, rdUrl, rdParam);
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

        	if(vPerDML != 1)
        		this.cbPaperTotal.set_enable(_set);

        	if(vPerPrt != 1){
        		this.btnPrt.set_enable(_set);
        		this.btnSearch.set_enable(_set);
        	}
        }


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
            this.cbSPprNm.addEventHandler("onitemchanged",this.cbSPprNm_onitemchanged,this);
            this.edSPprCd.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.edSPprCd.addEventHandler("onchanged",this.edSPprCd_onchanged,this);
            this.calEDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.calSDate.addEventHandler("onkeyup",this.LocalFctn_OnKeyDown,this);
            this.WebBrowser00.addEventHandler("onloadcompleted",this.WebBrowser00_onloadcompleted,this);
            this.ImgClose.addEventHandler("onclick",this.ImgClose_onclick,this);
            this.edEPprCd.addEventHandler("onchanged",this.edEPprCd_onchanged,this);
            this.cbEPprNm.addEventHandler("onitemchanged",this.cbEPprNm_onitemchanged,this);
        };
        this.loadIncludeScript("MK151.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
