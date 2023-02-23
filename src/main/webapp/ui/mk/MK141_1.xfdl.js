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
            this.set_titletext("도서별 발주현황");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORDMST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ORDMST_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"USE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_TONE\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_JMI\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_MRGN\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_RUNDATE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_BUL\" type=\"STRING\" size=\"256\"/><Column id=\"COAT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBookMst", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","8","10","346","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("도서별 발주현황");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"28","43","39","1.31%",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_icon("url(\'Img::ico_excel_O.png\')");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrt",null,"29","82","40","btnExcel:8",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("출력");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"29","80","40","btnPrt:8",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","8","120","98.85%",null,null,"10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"157\"/><Column size=\"221\"/><Column size=\"91\"/><Column size=\"77\"/><Column size=\"110\"/><Column size=\"132\"/><Column size=\"105\"/><Column size=\"176\"/><Column size=\"72\"/><Column size=\"83\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"176\"/><Column size=\"97\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"도서코드\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"도서명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"발주일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"발주량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"판형\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"제본\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"용도\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"자재\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" text=\"색도\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"9\" text=\"정미\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"10\" text=\"여분\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"11\" text=\"합계\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"12\" text=\"외주처\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"13\" text=\"진행일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:BOOK\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"bind:BOOKMST_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"2\" text=\"bind:ORDMST_DATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" maskeditformat=\"@@\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" suppress=\"2\" suppressalign=\"middle\"/><Cell col=\"3\" text=\"bind:ORDMST_QTY\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" suppress=\"2\" suppressalign=\"middle\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"4\" text=\"bind:PLT_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" suppress=\"3\" suppressalign=\"middle\"/><Cell col=\"5\" text=\"bind:BND_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" suppress=\"3\" suppressalign=\"middle\"/><Cell col=\"6\" text=\"bind:USE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" suppress=\"3\" suppressalign=\"middle\"/><Cell col=\"7\" text=\"expr:USE_PROCESSTYPE==&apos;P&apos;?PPR_NAME:USE_PROCESSTYPE==&apos;C&apos;?COAT_NAME:&quot;&quot; \" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" suppress=\"3\" suppressalign=\"middle\"/><Cell col=\"8\" text=\"bind:ORDDTL_TONE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" suppress=\"3\" suppressalign=\"middle\"/><Cell col=\"9\" text=\"bind:ORDDTL_JMI\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"0.00\" maskedittype=\"number\" maskeditmaskchar=\"0\"/><Cell col=\"10\" text=\"bind:ORDDTL_MRGN\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"0.00\" maskeditmaskchar=\"0\" maskedittype=\"number\"/><Cell col=\"11\" text=\"bind:ORDDTL_SUM\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"0.00\" maskeditmaskchar=\"0\" maskedittype=\"number\"/><Cell col=\"12\" text=\"bind:CUST_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" suppress=\"0\" suppressalign=\"first\"/><Cell col=\"13\" text=\"bind:ORDDTL_RUNDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" suppress=\"3\" suppressalign=\"middle\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edEBookCd",null,"31","160","35","btnSearch:62",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("10");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookCode",null,"31","160","35","edEBookCd:3",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("10");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnBook_Search",null,"31","85","35","edt_bookCode:3",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("도서코드");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edEBookYear",null,"71","160","35","btnSearch:62",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookYear",null,"71","160","35","edEBookYear:3",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stCust1_00",null,"71","85","35","edt_bookYear:3",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("도서년판");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
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
        this.addIncludeScript("MK141_1.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK141_1.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("MK141_1.xfdl","Lib::Lib_mk.xjs");
        this.registerScript("MK141_1.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_mk.xjs"); /*include "Lib::Lib_mk.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerPrt;
        var vStr;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
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
        		this.edt_bookCode.setFocus();
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
        	if(this.edt_bookCode.value == "" || Eco.isUndefined(this.edt_bookCode.value) == true)
        	{
        		alert("도서코드를 입력해 주세요.");
        		this.edt_bookCode.setFocus();
        		return false;
        	}

        	if (this.edt_bookYear.value == "" || Eco.isUndefined(this.edt_bookYear.value) == true )
        	{
        		alert("도서연판을 입력해 주세요.");
        		this.edt_bookYear.setFocus();
        		return false;
        	}

        	in_ds 	= "dsList=dsList";
        	out_ds 	= "dsList=dsList";
        	str_url = "JSP/mk/mk141_1_Select.jsp";
        	str_arg = "BOOK_SCODE=" + nexacro.wrapQuote(this.edt_bookCode.value) +
        	          " BOOK_ECODE=" + nexacro.wrapQuote(this.edEBookCd.value) +
        	          " BOOK_SYEAR=" +nexacro.wrapQuote( this.edt_bookYear.value) +
        			  " BOOK_EYEAR=" +nexacro.wrapQuote(this.edEBookYear.value);

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
        	if(this.edt_bookCode.value == "" || Eco.isUndefined(this.edt_bookCode.value) == true)
        	{
        		alert("도서코드를 입력해 주세요.");
        		this.edt_bookCode.setFocus();
        		return false;
        	}

        	if (this.edt_bookYear.value == "" || Eco.isUndefined(this.edt_bookYear.value) == true )
        	{
        		alert("도서연판을 입력해 주세요.");
        		this.edt_bookYear.setFocus();
        		return false;
        	}

        	if(Eco.isUndefined(this.edt_bookCode.value) == true)
        		this.edt_bookCode.set_value("");

        	if(Eco.isUndefined(this.edEBookCd.value) == true)
        		this.edEBookCd.set_value("");

        	if(Eco.isUndefined(this.edt_bookYear.value) == true)
        		this.edt_bookYear.set_value("");

        	if(Eco.isUndefined(this.edEBookYear.value) == true)
        		this.edEBookYear.set_value("");

        	var rdUrl = gv_svcUrl + "rpt/mk/MK141_1.mrd";
            var rdParam = "/ragentpath ["+ gv_urlRdDataServer +"]" +" /rp [" + this.edt_bookCode.value + "] [" + this.edEBookCd.value + "] [" + this.edt_bookYear.value + "] [" +  this.edEBookYear.value + "] ";

        	var vScreenWidth = system.getScreenWidth();

        	if(vScreenWidth >= 1920)
        		vScreenWidth = vScreenWidth/2

        	nexacro.open("popupPrt", "mk::MKRDF.xfdl", this.getOwnerFrame(), {rdUrl:rdUrl, rdParam:rdParam}, "autosize=false", 0, 0, vScreenWidth, system.getScreenHeight(), this);

        };


        this.btnBook_Search_onclick = function(obj,e)
        {
        	var objParam = {dsParam1:this.dsBookMst}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupBook", objParam, "mk::MKBook_SearchF.xfdl", "popupCallback", this, 10, 58, 450, 400);
        };

        this.popupCallback = function(){

        	this.edt_bookCode.set_value(this.dsBookMst.getColumn(0, "BOOKMST_CODE"));
        	this.edt_bookYear.set_value(this.dsBookMst.getColumn(0, "BOOKMST_YEAR"));
        }

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
                this.grdList, "Sheet1!A1");

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
            this.btnExcel.addEventHandler("onclick",this.btnExcel_onclick,this);
            this.btnPrt.addEventHandler("onclick",this.btnPrt_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.grdList.addEventHandler("onenterdown",this.grdList_onenterdown,this);
            this.grdList.addEventHandler("onheadclick",this.grdList_onheadclick,this);
            this.btnBook_Search.addEventHandler("onclick",this.btnBook_Search_onclick,this);
        };
        this.loadIncludeScript("MK141_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
