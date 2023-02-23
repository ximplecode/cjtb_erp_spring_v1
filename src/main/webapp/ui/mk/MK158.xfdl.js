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
            this.set_titletext("용지별 재고잔액장2");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(610,170);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static02","12","10","428","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("용지별 재고잔액장2");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEDate","264","80","160","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate",null,"80","161","35","calEDate:3",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stDate",null,"80","85","35","calSDate:3",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회일자");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose",null,"20","31","30","1.86%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_image("url(\'Img::icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("cbPaperTotal","114","128","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("용지 집계");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Static("stTotal",null,"119","85","35","cbPaperTotal:17",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("집계");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"73","80","80","98",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrt",null,"73","80","80","1.86%",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("인쇄");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","480","20","39","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",610,170,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK158.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK158.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK158.xfdl", function() {
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

        	//해당년도가 아니면
        	if((this.calSDate.value.substr(0, 4)) != "2022" && this.cbPaperTotal.value == true)
        	{
        		alert('해당년도만 용지집계를 하실수 있습니다.\n 용지집계 체크를 해제 하신 후 조회해 주세요.');
        		return false;
        	}

        	if(this.cbPaperTotal.value == true)
        	{
        		str_url = "JSP/mk/mk157f_paper_close_dml.jsp";
        		str_arg = "pMON_00=" + nexacro.wrapQuote() +
        				" pMONTH=" + nexacro.wrapQuote() +
        				" pPREMONTH=" + nexacro.wrapQuote() +
        				" pMON_TDATE=" + nexacro.wrapQuote() +
        				" pMON_SDATE=" + nexacro.wrapQuote(this.calSDate.value.substr(0,4)+"0101") +
        				" pMON_EDATE=" + nexacro.wrapQuote(this.calEDate.value) +
        				" pPROC_SET=" + nexacro.wrapQuote(3);

        		this.gfn_TransactionP("update", str_url, "", "", str_arg, "fnCallbackTotalUpdate", false, vPerDML, false, this);
        	}

        	rdUrl = gv_svcUrl + "rpt/mk/MK158.mrd";

        	var vEDate;
        	if(this.calEDate.value.substr(4, 4) == "1231")
        		vEDate = this.calEDate.value.substr(0,4)+"1299";
        	else
        		vEDate = this.calEDate.value;

        	if(obj.name == "btnSearch"){
        		rdParam = "/ragentpath ["+ gv_urlRdDataServer +"]"+ " /rp [" + this.calSDate.value.substr(0, 4)+"0100" + "]" +
        				  "[" + this.calSDate.value + "]" +
        				  "[" + vEDate + "]" +
        				  " /rsetxlsmrd [" + gv_svcUrl + "rpt/mk/MK158xls.mrd]";

        		var vScreenWidth = system.getScreenWidth();

        		if(vScreenWidth >= 1920)
        			vScreenWidth = vScreenWidth/2

        		nexacro.open("popupPrt", "mk::MKRDF.xfdl", this.getOwnerFrame(), {rdUrl:rdUrl, rdParam:rdParam}, "autosize=false", 0, 0, vScreenWidth, system.getScreenHeight(), this);

        	}else{

        		rdParam = "/ragentpath ["+ gv_urlRdDataServer +"]"+ " /rpdfprintdialog"+
        				  " /rp [" + this.calSDate.value.substr(0, 4)+"0100" + "]" +
        				      "[" + this.calSDate.value + "]" +
        					  "[" + vEDate + "]";

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

        this.WebBrowser00_onloadcompleted = function(obj,e)
        {
        	var sUrl = urlMrdService;
        	var sId = "crownix-viewer";

        	this.WebBrowser00.callMethod("_crownix_createPrint", sUrl, sId, rdUrl, rdParam);
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

        	if(vPerDML != 1)
        		this.cbPaperTotal.set_enable(_set);

        	if(vPerPrt != 1){
        		this.btnSearch.set_enable(_set);
        		this.btnPrt.set_enable(_set);
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
            this.calEDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.calSDate.addEventHandler("onkeyup",this.LocalFctn_OnKeyDown,this);
            this.ImgClose.addEventHandler("onclick",this.ImgClose_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnPrt_onclick,this);
            this.btnPrt.addEventHandler("onclick",this.btnPrt_onclick,this);
            this.WebBrowser00.addEventHandler("onloadcompleted",this.WebBrowser00_onloadcompleted,this);
        };
        this.loadIncludeScript("MK158.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
