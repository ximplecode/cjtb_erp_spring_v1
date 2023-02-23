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
            this.set_titletext("기일업무현황");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsKpiMst", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKCNT\" type=\"STRING\" size=\"256\"/><Column id=\"PERCENT\" type=\"STRING\" size=\"256\"/><Column id=\"T_BOOKCNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">참고서</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">검.인정</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsKpiDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"PDTDTL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PDTDTL_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"PDTDTL_DTLNUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_WANT_INDATE\" type=\"STRING\" size=\"256\"/><Column id=\"INDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrtGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">M</Col><Col id=\"NAME\">월별</Col></Row><Row><Col id=\"CODE\">B</Col><Col id=\"NAME\">도서리스트</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stPaper","12","69","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("도서구분");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Radio("rdGubun","stPaper:3","69","323","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
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

            obj = new Button("btnSearch","rdGubun:5","69","80","71",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","12","10","268","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("기일업무현황");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"14","43","39","0.39%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_icon("url(\'Img::ico_excel_O.png\')");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrt",null,"14","80","40","btnExcel:8",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("출력");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("stDate","12","106","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("입고일자");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate","stDate:3","106","160","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEDate","calSDate:3","106","160","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdListM","12","144","498","229",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("dsKpiMst");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"89\"/><Column size=\"84\"/><Column size=\"85\"/><Column size=\"82\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"등급\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"총합계\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"미준수건\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"비율\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:TITLE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"bind:T_BOOKCNT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" maskeditformat=\"#,###\" editinputtype=\"normal\" maskedittype=\"number\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" suppressalign=\"middle\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" displaytype=\"mask\"/><Cell col=\"2\" text=\"bind:BOOKCNT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\" maskeditformat=\"#,###\" displaytype=\"mask\"/><Cell col=\"3\" text=\"bind:PERCENT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\" expr=\"dataset.getColumn(currow, &quot;PERCENT&quot;)+&apos;%&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdListD","grdListM:5","114",null,null,"0.38%","1.39%",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("dsKpiDtl");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"100\"/><Column size=\"61\"/><Column size=\"346\"/><Column size=\"82\"/><Column size=\"82\"/><Column size=\"82\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"도서코드\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"년판\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"도서명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"의뢰일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"입고요청일\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"입고일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"bind:YY\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" maskeditformat=\"@@\" editinputtype=\"normal\" maskedittype=\"string\" calendardateformat=\"yyyy-MM-dd\" suppress=\"2\" suppressalign=\"middle\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\"/><Cell col=\"3\" text=\"bind:PDTDTL_DATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\" displaytype=\"date\"/><Cell col=\"4\" text=\"bind:SALE_WANT_INDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\" displaytype=\"date\"/><Cell col=\"5\" text=\"bind:INDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\" displaytype=\"date\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st01","12","376","498","235",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_textAlign("left");
            obj.set_font(" 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("black");
            obj.set_background("lightsteelblue");
            obj.set_text("  ※ 영업입고요청일보다 입고일자가 +2일이상인 도서기준\r\n\r\n  - (탁월) S등급 : 완벽하게 준수\r\n  \r\n  - (우수) A등급 : 준수하지못한 비율이 0.85%미만\r\n  \r\n  - (목표) B등급 : 준수하지못한 비율이 1.7%미만\r\n  \r\n  - (미흡) C등급 : 준수하지못한 비율이 2.55%미만\r\n \r\n  - (저조) D등급 : 준수하지못한 비율이 2.55%이상");
            this.addChild(obj.name, obj);

            obj = new Static("st02","12","376","498","235",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_textAlign("left");
            obj.set_font(" 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("black");
            obj.set_background("lightsteelblue");
            obj.set_text("  ※ 영업입고요청일대비 입고일자 기준에 대한 평균값\r\n\r\n  - (탁월) S등급 : -06일 조기입고(기준값 : 2)\r\n  \r\n  - (우수) A등급 : -03일 조기입고(기준값 : 1.3~1.99)\r\n  \r\n  - (목표) B등급 : 영업입고요청일 준수(기준값 : 0~1.29)\r\n  \r\n  - (미흡) C등급 : +03일 지연입고(기준값 : -0.01~-1.99)\r\n \r\n  - (저조) D등급 : +04일 지연입고(기준값 : -2)\r\n\r\n  * 생산의뢰서 입고요청일을 기준값으로 처리");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","520","58","448","65",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_color("#7fb39d");
            obj.set_font("bold 30px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Radio("rdPrtGubun",null,"14","226","40","btnPrt:8",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_innerdataset("dsPrtGubun");
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
            obj.set_text("도서리스트");
            obj.set_value("B");
            obj.set_index("1");
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
        this.addIncludeScript("MK_KPI.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK_KPI.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("MK_KPI.xfdl","Lib::Lib_mk.xjs");
        this.registerScript("MK_KPI.xfdl", function() {
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

        		this.SET_STC();

        		var d = new Date();
        		var strPreDay = Eco.date.getMaskFormatString(Eco.date.getFirstDate(Eco.date.addMonth(d, -6)), "yyyyMMdd"); 			//오늘 기준 6개월 전 1일 setting
        		var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");
        		this.calSDate.set_value(strPreDay);
        		this.calEDate.set_value(strtoDay);
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
        	this.lfn_grdAutofit(this.grdListD);
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

        	str_url = "JSP/mk/product_kpi_mst_select.jsp";
        	in_ds 	= "dsKpiMst=dsKpiMst";
        	out_ds 	= "dsKpiMst=dsKpiMst";
        	str_arg = "SDATE=" + nexacro.wrapQuote(this.calSDate.value) +
        	          " EDATE=" + nexacro.wrapQuote(this.calEDate.value) +
        	          " SEARCHTYPE=" +nexacro.wrapQuote( this.rdGubun.value);

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnCallbackSelect", false, "S", false, this);

        };

        this.fnCallbackSelect = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{

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

        	if(this.dsKpiMst.getColumn(this.dsKpiMst.rowposition, "TITLE") == "" ||
        	   Eco.isUndefined(this.dsKpiMst.getColumn(this.dsKpiMst.rowposition, "TITLE")) == true)
        	{
        		alert("등급을 선택해 주세요.");
        		return false;
        	}

        	var rdUrl = "";
        	var str_level = this.dsKpiMst.getColumn(this.dsKpiMst.rowposition,"TITLE");

        	trace(this.rdPrtGubun.value);

        	if(this.rdPrtGubun.value == "M"){
        		rdUrl = gv_svcUrl + "rpt/mk/MK_KPI_MONTH_V01.mrd";
        	}else{
        		rdUrl = gv_svcUrl + "rpt/mk/MK_KPI_LIST_V01.mrd";
        	}

        	var rdParam = "/ragentpath ["+ gv_urlRdDataServer +"]"+ " /rp [" + this.calSDate.value + "] [" +  this.calEDate.value + "] [" +  str_level+"등급("+this.rdGubun.text +")] ";

        	if(this.rdGubun.value == 1)				//참고서
        		rdParam = rdParam+" [1] [] []";
        	else 									//검,인정
        		rdParam = rdParam+" [] [1] []";

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
        	sCust_Gubn = "41";
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
                this.grdListD, "Sheet1!A1");

        	this.exportObj.set_exporturl(urlExcel);
        	this.exportObj.exportData();
        };

        this.rdGubun_onitemchanged = function(obj,e)
        {
        	this.SET_STC();
        };

        this.SET_STC = function()
        {
        	this.dsKpiMst.clearData();
        	this.dsKpiDtl.clearData();
        	this.Static03.set_text("");

        	if(this.rdGubun.value == 1)
        	{
        		this.st01.set_visible(true);
        		this.st02.set_visible(false);
        	}else{
        		this.st01.set_visible(false);
        		this.st02.set_visible(true);
        	}
        };

        this.grdListM_oncelldblclick = function(obj,e)
        {
        	this.Static03.set_text("◎검색도서 : "+this.dsKpiMst.getColumn(e.row, "TITLE")+"등급");

        	str_url = "JSP/mk/product_kpi_dtl_select.jsp";
        	in_ds 	= "dsKpiDtl=dsKpiDtl";
        	out_ds 	= "dsKpiDtl=dsKpiDtl";
        	str_arg = "SDATE=" + nexacro.wrapQuote(this.calSDate.value) +
        	          " EDATE=" + nexacro.wrapQuote(this.calEDate.value) +
        	          " SEARCHTYPE=" +nexacro.wrapQuote( this.rdGubun.value);

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnCallbackDSelect", false, "S", false, this);
        };

        this.fnCallbackDSelect = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{

        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkMain_onload,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.rdGubun.addEventHandler("onitemchanged",this.rdGubun_onitemchanged,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnExcel.addEventHandler("onclick",this.btnExcel_onclick,this);
            this.btnPrt.addEventHandler("onclick",this.btnPrt_onclick,this);
            this.calSDate.addEventHandler("onkeyup",this.LocalFctn_OnKeyDown,this);
            this.calEDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.grdListM.addEventHandler("oncelldblclick",this.grdListM_oncelldblclick,this);
            this.st01.addEventHandler("onclick",this.stDate00_onclick,this);
        };
        this.loadIncludeScript("MK_KPI.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
