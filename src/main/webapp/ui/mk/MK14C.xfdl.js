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
            this.set_titletext("제작진행관리");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"PDTDTL_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"PDTDTL_NUMBER\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BOOK_GROUP\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/><Column id=\"PDTDTL_DTLNUMBER\" type=\"STRING\" size=\"3\"/><Column id=\"ORDMST_ID\" type=\"STRING\" size=\"100\"/><Column id=\"ORDMST_TYPE\" type=\"STRING\" size=\"1\"/><Column id=\"PLT_NAME\" type=\"STRING\" size=\"15\"/><Column id=\"ORDMST_DATE\" type=\"STRING\" size=\"5\"/><Column id=\"ORDREQ_DATE\" type=\"STRING\" size=\"5\"/><Column id=\"ORDMST_REMARK2\" type=\"STRING\" size=\"70\"/><Column id=\"STUDENT_QTY\" type=\"STRING\" size=\"8\"/><Column id=\"STUDENT_REVIVALQTY\" type=\"STRING\" size=\"8\"/><Column id=\"TEACHER_QTY\" type=\"STRING\" size=\"8\"/><Column id=\"RESEARCH_QTY\" type=\"STRING\" size=\"8\"/><Column id=\"PRCS_1\" type=\"STRING\" size=\"1\"/><Column id=\"PRCS_2\" type=\"STRING\" size=\"1\"/><Column id=\"PRCS_3\" type=\"STRING\" size=\"1\"/><Column id=\"PRCS_51\" type=\"STRING\" size=\"1\"/><Column id=\"PRCS_52\" type=\"STRING\" size=\"1\"/><Column id=\"PRCS_6\" type=\"STRING\" size=\"1\"/><Column id=\"PRCS_7\" type=\"STRING\" size=\"1\"/><Column id=\"PRCS1\" type=\"STRING\" size=\"6\"/><Column id=\"PRCS2\" type=\"STRING\" size=\"6\"/><Column id=\"PRCS3\" type=\"STRING\" size=\"6\"/><Column id=\"PRINTOKDATE\" type=\"STRING\" size=\"5\"/><Column id=\"PRCS5_1\" type=\"STRING\" size=\"6\"/><Column id=\"PRCS5_2\" type=\"STRING\" size=\"6\"/><Column id=\"PRCS6\" type=\"STRING\" size=\"6\"/><Column id=\"PRCS7\" type=\"STRING\" size=\"6\"/><Column id=\"BINDOKDATE\" type=\"STRING\" size=\"5\"/><Column id=\"CTP\" type=\"STRING\" size=\"3\"/><Column id=\"SALE_WANT_INDATE\" type=\"STRING\" size=\"5\"/><Column id=\"EXPECTDATE\" type=\"STRING\" size=\"6\"/><Column id=\"INDATE\" type=\"STRING\" size=\"6\"/><Column id=\"ORDMSTPROG_BIGO\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">교판</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">학원</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">교과서</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">자습서평가                </Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">이러닝</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","8","10","382","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("제작진행관리");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"25","43","39","0.62%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_icon("url(\'Img::ico_excel_O.png\')");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrt",null,"25","80","40","btnExcel:10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("출력");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"25","80","40","btnPrt:10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"25","80","40","btnSave:10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("stBook",null,"72","85","35","513",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("도서구분");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate",null,"71","140","35","stBook:3",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stDate",null,"71","85","35","calSDate:3",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("진행일자");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","8","110","98.85%",null,null,"20",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"313\"/><Column size=\"48\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"80\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"62\"/><Column size=\"63\"/><Column size=\"61\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"116\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"도서명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" rowspan=\"2\" text=\"년판\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" colspan=\"4\" text=\"인  쇄\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" colspan=\"4\" text=\"제  본\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"10\" rowspan=\"2\" text=\"기타\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"11\" rowspan=\"2\" text=\"판형\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"12\" colspan=\"2\" text=\"발주수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"14\" rowspan=\"2\" text=\"의뢰일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"15\" rowspan=\"2\" text=\"발주일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"16\" rowspan=\"2\" text=\"요청일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"17\" rowspan=\"2\" text=\"예정일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"18\" rowspan=\"2\" text=\"입고일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"19\" rowspan=\"2\" text=\"비고\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"2\" text=\"표지\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"3\" text=\"부속\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"4\" text=\"본문\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"5\" text=\"완료일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"1\" col=\"6\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"중철\"/><Cell row=\"1\" col=\"7\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"무선\"/><Cell row=\"1\" col=\"8\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"세팅\"/><Cell row=\"1\" col=\"9\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"완료일자\"/><Cell row=\"1\" col=\"12\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"학생(재생)\"/><Cell row=\"1\" col=\"13\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"교사(연구)\"/></Band><Band id=\"body\"><Cell text=\"bind:BOOKMST_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" cssclass=\"expr:ORDMST_TYPE==&apos;A&apos;?&quot;MK14C_Color1&quot;:ORDMST_TYPE==&apos;P&apos;?&quot;MK14C_Color2&quot;:ORDMST_TYPE==&apos;O&apos;?&quot;MK14C_Color3&quot;:&quot;&quot;\"/><Cell col=\"1\" text=\"bind:BOOKMST_YEAR\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"2\" text=\"bind:PRCS1\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"normal\" editinputtype=\"normal\" displaytype=\"normal\" cssclass=\"expr:PRCS_51==&apos;1&apos;||PRCS_52==&apos;1&apos;||PRCS_6==&apos;1&apos;||PRCS_1==&apos;1&apos;?&quot;MK14C_Bg&quot;:&quot;&quot;\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:PRCS2\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"normal\" editinputtype=\"number\" maskeditformat=\"#,###\" displaytype=\"normal\" editautoselect=\"true\" cssclass=\"expr:PRCS_51==&apos;1&apos;||PRCS_52==&apos;1&apos;||PRCS_6==&apos;1&apos;||PRCS_2==&apos;1&apos;?&quot;MK14C_Bg&quot;:&quot;&quot;\"/><Cell col=\"4\" text=\"bind:PRCS3\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"normal\" editinputtype=\"normal\" cssclass=\"expr:PRCS_51==&apos;1&apos;||PRCS_52==&apos;1&apos;||PRCS_6==&apos;1&apos;||PRCS_3==&apos;1&apos;?&quot;MK14C_Bg&quot;:&quot;&quot;\" editautoselect=\"true\"/><Cell col=\"5\" text=\"bind:PRINTOKDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"mask\" editinputtype=\"normal\" cssclass=\"expr:PRCS_51==&apos;1&apos;||PRCS_52==&apos;1&apos;||PRCS_6==&apos;1&apos;?&quot;MK14C_Bg&quot;:&quot;&quot;\" maskeditformat=\"@@/@@\" maskeditautoselect=\"true\" maskedittype=\"string\"/><Cell col=\"6\" text=\"bind:PRCS5_1\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"normal\" editinputtype=\"normal\" displaytype=\"normal\" cssclass=\"expr:PRCS_51==&apos;1&apos;||PRCS_52==&apos;1&apos;||PRCS_6==&apos;1&apos;?&quot;MK14C_Bg&quot;:&quot;&quot;\" editautoselect=\"true\"/><Cell col=\"7\" text=\"bind:PRCS5_2\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"normal\" editinputtype=\"normal\" displaytype=\"normal\" cssclass=\"expr:PRCS_51==&apos;1&apos;||PRCS_52==&apos;1&apos;||PRCS_6==&apos;1&apos;?&quot;MK14C_Bg&quot;:&quot;&quot;\" editautoselect=\"true\"/><Cell col=\"8\" text=\"bind:PRCS6\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"normal\" editinputtype=\"normal\" displaytype=\"normal\" cssclass=\"expr:PRCS_51==&apos;1&apos;||PRCS_52==&apos;1&apos;||PRCS_6==&apos;1&apos;?&quot;MK14C_Bg&quot;:&quot;&quot;\" editautoselect=\"true\"/><Cell col=\"9\" text=\"bind:BINDOKDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"mask\" editinputtype=\"normal\" displaytype=\"normal\" cssclass=\"expr:PRCS_51==&apos;1&apos;||PRCS_52==&apos;1&apos;||PRCS_6==&apos;1&apos;?&quot;MK14C_Bg&quot;:&quot;&quot;\" maskedittype=\"string\" maskeditformat=\"@@/@@\" maskeditautoselect=\"true\"/><Cell col=\"10\" text=\"bind:PRCS7\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" maskeditformat=\"@@\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"11\" text=\"bind:PLT_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" maskeditformat=\"@@\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"12\" text=\"bind:STUDENT_QTY\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"@@\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"13\" text=\"bind:TEACHER_QTY\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"@@\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"14\" text=\"bind:ORDREQ_DATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" maskeditformat=\"@@/@@\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"mask\" calendardateformat=\"MM-dd\"/><Cell col=\"15\" text=\"bind:ORDMST_DATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" maskeditformat=\"@@/@@\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"mask\" calendardateformat=\"MM-dd\"/><Cell col=\"16\" text=\"bind:SALE_WANT_INDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" maskeditformat=\"@@/@@\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"mask\" calendardateformat=\"MM-dd\"/><Cell col=\"17\" text=\"bind:EXPECTDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"mask\" maskeditformat=\"##/##/##\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"mask\" calendardateformat=\"MM-dd\" maskeditautoselect=\"true\"/><Cell col=\"18\" text=\"bind:INDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"mask\" maskeditformat=\"##/##/##\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"mask\" calendardateformat=\"MM-dd\" maskeditautoselect=\"true\"/><Cell col=\"19\" text=\"bind:ORDMSTPROG_BIGO\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"normal\" maskeditformat=\"@@\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Radio("rdGubun",null,"72","502","35","0.62%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("dsGubun");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("vertical");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_background("lightsteelblue");
            obj.set_color("white");
            obj.set_fittocontents("none");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_rowcount("1");
            obj.set_columncount("5");
            obj.set_text("비용별 업체 리스트");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"32","681","39","btnSearch:10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("※ 예정일자 저장시 ISM 제작입고예상일도 같이 등록됩니다(단, 도서가 등록되어 있을경우)");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            obj.set_color("crimson");
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
        this.addIncludeScript("MK14C.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK14C.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK14C.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerDML, vPerPrt;
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
        	vPerDML = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_DML");
        	vPerPrt = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_PRINT");

        	//DML권한 체크 및 컴포넌트 ENABLE처리
        	if(vPerDML != "1" || vPerSel != "1" || vPerPrt != "1")
        		this.fctn_User_Enabled(this, false);

        	var d = new Date();
        	var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");							//오늘날짜 setting

        	this.calSDate.set_value(strtoDay);
        	this.calSDate.setFocus();

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
        	if(this.calSDate.value == "" || Eco.isUndefined(this.calSDate.value) == true)
        	{
        		alert("진행일자를 입력해 주세요.");
        		this.calSDate.setFocus();
        		return false;
        	}

        	var d = new Date();
        	var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");

        	//오늘보다 이전날짜 검색시
        	if(nexacro.toNumber(strtoDay)-nexacro.toNumber(this.calSDate.value) > 0)
        		str_url = "JSP/mk/mk14cf_order_mst_progress_preday3.jsp";
        	else
        		str_url = "JSP/mk/mk14cf_order_mst_progress3.jsp";

        	in_ds 	= "dsList=dsList";
        	out_ds 	= "dsList=dsList";
        	str_arg = "SDATE=" + nexacro.wrapQuote(this.calSDate.value) +
        	          " GUBUN=" + nexacro.wrapQuote(this.rdGubun.value);

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnCallbackSelect", false, "S", false, this);

        };


        this.fnCallbackSelect = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{
        		if(this.dsList.rowcount == 0)
        			alert("조회된 자료가 없습니다.");
        	}
        };

        //발송 버튼 이벤트
        this.btnSave_onclick = function(obj,e)
        {
        	if(this.dsList.rowcount == 0){
        		alert("저장할 자료가 없습니다.");
        		return false;
        	}

        	if(this.calSDate.value == "" || Eco.isUndefined(this.calSDate.value) == true)
        	{
        		alert("진행일자를 입력해 주세요.");
        		this.calSDate.setFocus();
        		return false;
        	}

        	in_ds 	= "input=dsList:u";
        	str_url = "JSP/mk/mk14cf_order_mst_progress_dml.jsp";
        	str_arg  = " EMPLOYEE_ID =" + nexacro.wrapQuote(gv_sabun);
        	vStr = vPerDML;

        	this.gfn_TransactionP("save", str_url, in_ds, "", str_arg, "fnSaveCallback", false, vStr, false, this);
        };

        this.fnSaveCallback = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}

        	alert("저장이 완료되었습니다.");
        	this.btnSearch_onclick();
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

        	if(vPerSel != 1)
        		this.btnSearch.set_enable(_set);

        	if(vPerDML != 1)
        		this.btnSave.set_enable(_set);

        	if(vPerPrt != 1){
        		this.btnPrt.set_enable(_set);
        		this.btnExcel.set_enable(_set);
        	}
        }

        this.grdList_onenterdown = function(obj,e)
        {
        	var tRow = this.dsList.rowposition;
        	var nAmount = 0;

        	this.grdList.moveToNextCell();
        	this.grdList.showEditor();
        };

        this.btnExcel_onclick = function(obj,e)
        {
        	this.exportObj = new ExcelExportObject();
            var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID,
                this.grdList, "Sheet1!A1");

        	this.exportObj.set_exporturl(urlExcel);
        	this.exportObj.exportData();
        };

        this.btnPrt_onclick = function(obj,e)
        {
        	if(this.calSDate.value == "" || Eco.isUndefined(this.calSDate.value) == true)
        	{
        		alert("진행일자를 입력해 주세요.");
        		this.calSDate.setFocus();
        		return false;
        	}

        	var rdUrl = "";
        	var d = new Date();
        	var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");
        	//오늘보다 이전날짜 검색시
        	if(nexacro.toNumber(strtoDay)-nexacro.toNumber(this.calSDate.value) > 0)
        		rdUrl = gv_svcUrl + "rpt/mk/MK14C_3_PreDay.mrd";
        	else
        		rdUrl = gv_svcUrl + "rpt/mk/MK14C_3.mrd";

        	var rdParam = "/ragentpath ["+ gv_urlRdDataServer +"]"+ " /rp [" + this.calSDate.value + "]";

        	if(this.rdGubun.value == 1)			//교판
        		rdParam +="[1] [] [] [] [] ";
        	else if(this.rdGubun.value == 2)
        		rdParam +="[] [1] [] [] [] ";	//학원
        	else if(this.rdGubun.value == 3)
        		rdParam +="[] [] [1] [] [] ";	//교과서
        	else if(this.rdGubun.value == 4)
        		rdParam +="[] [] [] [1] [] ";	//자습서평가
        	else if(this.rdGubun.value == 5)
        		rdParam +="[] [] [] [] [1] ";	//이러닝

        	var vScreenWidth = system.getScreenWidth();

        	if(vScreenWidth >= 1920)
        		vScreenWidth = vScreenWidth/2

        	nexacro.open("popupPrt", "mk::MKRDF.xfdl", this.getOwnerFrame(), {rdUrl:rdUrl, rdParam:rdParam}, "autosize=false", 0, 0, vScreenWidth, system.getScreenHeight(), this);

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
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.calSDate.addEventHandler("onkeyup",this.LocalFctn_OnKeyDown,this);
            this.grdList.addEventHandler("onenterdown",this.grdList_onenterdown,this);
        };
        this.loadIncludeScript("MK14C.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
