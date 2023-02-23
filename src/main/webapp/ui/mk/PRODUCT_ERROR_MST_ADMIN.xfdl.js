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
            this.set_titletext("제품 A/S 접수관리");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsErrorList", this);
            obj._setContents("<ColumnInfo><Column id=\"ERROR_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ERROR_NO\" type=\"STRING\" size=\"3\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"5\"/><Column id=\"BUSE_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"256\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"ERROR_CONTENT\" type=\"STRING\" size=\"1000\"/><Column id=\"ERROR_REASON\" type=\"STRING\" size=\"1000\"/><Column id=\"IMPROVEMENT\" type=\"STRING\" size=\"1000\"/><Column id=\"RESULT_TYPE\" type=\"STRING\" size=\"1\"/><Column id=\"OK_ID\" type=\"STRING\" size=\"6\"/><Column id=\"OK_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"OK_CHK\" type=\"STRING\" size=\"1\"/><Column id=\"RECEIVE_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ORDER_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT\" type=\"STRING\" size=\"20\"/><Column id=\"RECEPT_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"QTY\" type=\"STRING\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">A/접수</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">사고접수</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnNew",null,"34","80","40","0.77%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("신규");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrt",null,"34","80","40","btnNew:7",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("통계");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"34","80","40","btnPrt:7",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","12","10","388","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("제품 A/S 접수관리");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Radio("rdGubun",null,"37","166","35","btnSearch:23",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("dsGubun");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("horizontal");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_background("lightsteelblue");
            obj.set_color("white");
            obj.set_fittocontents("none");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_rowcount("2");
            obj.set_columncount("2");
            obj.set_text("단가 \'0\'인 건  ");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stKind",null,"37","85","35","rdGubun:3",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("구분");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEDate",null,"37","140","35","stKind:3",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate",null,"37","140","35","calEDate:3",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stDate",null,"37","85","35","calSDate:3",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("접수날짜");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","6","80","98.85%","87.22%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsErrorList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"90\"/><Column size=\"103\"/><Column size=\"82\"/><Column size=\"109\"/><Column size=\"67\"/><Column size=\"123\"/><Column size=\"68\"/><Column size=\"261\"/><Column size=\"380\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"접수결과\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" color=\"crimson\"/><Cell col=\"1\" text=\"접수날짜\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"등록자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"도서코드\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"도서년판\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"접수처\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"부수\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"도서명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" text=\"오류내용\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:RESULT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" suppressalign=\"middle\" cssclass=\"expr:OK_CHK==&apos;5&apos;?&quot;PRODUCT_ERROR_Color&quot;:&quot;&quot; \"/><Cell col=\"1\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" suppressalign=\"middle\" text=\"bind:RECEIVE_DATE\" displaytype=\"date\"/><Cell col=\"2\" text=\"bind:EMPLOYEE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" suppressalign=\"middle\"/><Cell col=\"3\" text=\"bind:BOOKMST_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" suppressalign=\"middle\"/><Cell col=\"4\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" text=\"bind:BOOKMST_YEAR\" maskeditformat=\"#,##0.##\"/><Cell col=\"5\" text=\"bind:RECEPT_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" suppressalign=\"middle\"/><Cell col=\"6\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" text=\"bind:QTY\" maskeditformat=\"#,##0.000\"/><Cell col=\"7\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" text=\"bind:BOOKMST_NAME\" suppress=\"0\" suppressalign=\"middle\" maskeditformat=\"#,###\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"8\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" text=\"bind:ERROR_CONTENT\" suppress=\"0\" suppressalign=\"middle\" maskeditformat=\"#,###\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
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
        this.addIncludeScript("PRODUCT_ERROR_MST_ADMIN.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("PRODUCT_ERROR_MST_ADMIN.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("PRODUCT_ERROR_MST_ADMIN.xfdl","Lib::Lib_mk.xjs");
        this.registerScript("PRODUCT_ERROR_MST_ADMIN.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_mk.xjs"); /*include "Lib::Lib_mk.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerPrt, vPerDML;
        var vStr;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var gv_urlRdDataServer = nexacro.getApplication().gv_urlRdDataServer;
        var Result;

        /*
        1) 오류접수확인절차
          --1차:정현석(C03076) 접수등록 및 완료(GUBUN => 0:접수, 1:접수완료)
          1차:김정호(C10161) 접수등록 및 완료(GUBUN => 0:접수, 1:접수완료)
          2차:황미정(C12047) 확인(GUBUN = > 2: 확인)
          3차:양명란(C98002) 확인(GUBUN = > 3: 확인)
          3차:김민규(C02006) 확인(GUBUN = > 3: 확인)
          4차:조규영(C10303) 확인(GUBUN = > 4: 확인)
          5차:황성진(C03067) 확인(GUBUN = > 5: 완결)
          설명) 1차접수완료(1) = > 2차 고객센터 확인완료(2) = > 3차 영업부 확인완료(3) => 4차확인완료(4) => 5차 최종완료(5)
               4차, 5차는 1차등록된 내용 볼수 있음
        2) 사고접수확인절차
          1차:정현석(C03076) 접수등록 및 완료(GUBUN => 0:접수, 1:접수완료)
          2차:조규영(C10303) 확인(GUBUN = > 4: 확인)
          3차:황성진(C03067) 확인(GUBUN = > 5: 완결)
          설명) 1차접수완료(1) => 2차확인완료(4) => 3차 최종완료(5)  : 2차인 고객센터, 3차인 영업부는 필요없음
               2차, 3차는 1차등록된 내용 볼수 있음
        */

        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", nexacro.getApplication().gv_selectMenu);

        	vPerSel = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_SELECT");
        	vPerPrt = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_PRINT");
        	vPerDML = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_DML");

        	//권한 체크 및 컴포넌트 ENABLE처리
        	if(vPerSel != "1" || vPerPrt != "1" || vPerDML != "1")
        		this.fctn_User_Enabled(this, false);

        	if(vPerSel = "1"){
        		var d = new Date();
        		var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");							//오늘날짜 setting
        		this.calSDate.set_value(strtoDay.substr(0, 4)+"0101");
        		this.calEDate.set_value(strtoDay);
        		this.calSDate.setFocus();
        	}

        	this.Set_Result();
        };

        //확인절차셋팅
        this.Set_Result = function()
        {
        	if(gv_sabun == "C03076"){Result="1";}		//정현석
        	else if(gv_sabun == "C10161"){Result="1";}	//김정호
        	else if(gv_sabun == "C02028"){Result="1";}	//이상협
        	else if(gv_sabun == "C12047"){Result="2";}  //고객센터 황미정
        	else if(gv_sabun == "C98002"){Result="3";}	//기획관리팀 양명란
        	else if(gv_sabun == "C10303"){Result="4";}	//조규영
        	else if(gv_sabun == "C03067"){Result="5";}	//황성진
        	else if(gv_sabun == "C16168"){Result="1";}	//테스트
        	else if(gv_sabun == "C02006"){Result="3";}	//기획관리팀 김민규
        }

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

        	if(this.calSDate.value == "" || Eco.isUndefined(this.calSDate.value) == true )
        	{
        		alert("시작일자를 정확히 입력해 주세요.");
        		this.calSDate.setFocus();
        		return false;
        	}

        	if (this.calEDate.value == "" || Eco.isUndefined(this.calEDate.value) == true )
        	{
        		alert("종료일자를 정확히 입력해 주세요.");
        		this.calEDate.setFocus();
        		return false;
        	}

        	str_url = "JSP/mk/product_new_error_mst_list.jsp";
        	in_ds 	= "dsErrorList=dsErrorList";
        	out_ds 	= "dsErrorList=dsErrorList";
        	str_arg = "SDATE=" + nexacro.wrapQuote(this.calSDate.value) +
        	          " EDATE=" + nexacro.wrapQuote(this.calEDate.value) +
        			  " SEARCHTYPE=" + nexacro.wrapQuote(this.rdGubun.value) +
        			  " RESULT=" + nexacro.wrapQuote(Result);

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnCallbackSelect", false, "S", false, this);

        };

        this.fnCallbackSelect = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{

        		if(this.dsErrorList.rowcount == 0)
        		{
        			alert("조회된 자료가 없습니다.");
        			return false;
        		}
        	}
        };


        this.grdList_oncelldblclick = function(obj,e)
        {
        	var objParam = {dsParam1:this.rdGubun.value		//접수구분(1:오류, 2:사고)
        					,dsParam2:this.dsErrorList.getColumn(e.row, "ERROR_DATE")
        					,dsParam3:this.dsErrorList.getColumn(e.row, "ERROR_NO")
        					,dsParam4:this.dsErrorList.getColumn(e.row, "OK_CHK")
        					,dsParam5:Result
        					,dsParam6:vPerPrt}; //popup 화면으로 전달할 값

        	this.lfn_showModal("popupDtl", objParam, "mk::PRODUCT_ERROR_DTL_ADMIN.xfdl", "popupDtlCallback", this, 10, 58, 710, 790);
        };

        //통계 POPUP 버튼 이벤트
        this.btnPrt_onclick = function(obj,e)
        {

        	var PopUrl;
        	var objParam = {dsParam1:this.calSDate.value
        					,dsParam2:this.calEDate.value}; //popup 화면으로 전달할 값

        	if(this.rdGubun.value == 1)						//제품 A/S
        	{
        		PopUrl = "mk::PRODUCT_ERROR_REPORT.xfdl"
        		this.lfn_showModal("popupPrt", objParam, PopUrl, "popupCallback", this, 10, 58, 530, 650);

        	}else{											//사고
        		PopUrl = "mk::PRODUCT_ACCIDENT_REPORT.xfdl"
        		this.lfn_showModal("popupPrt", objParam, PopUrl, "popupCallback", this, 10, 58, 350, 600);
        	}
        };

        //신규 버튼
        this.btnNew_onclick = function(obj,e)
        {
        	var objParam = {dsParam1:"N"};
        	this.lfn_showModal("popupNewDtl", objParam, "mk::PRODUCT_ERROR_DTL.xfdl", "", this, 10, 58, 700, 410);
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

        	if(vPerPrt != 1)
        		this.btnPrt.set_enable(_set);

        	if(vPerDML != 1)
        		this.btnNew.set_enable(_set);
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkMain_onload,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.btnNew.addEventHandler("onclick",this.btnNew_onclick,this);
            this.btnPrt.addEventHandler("onclick",this.btnPrt_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.calEDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.calSDate.addEventHandler("onkeyup",this.LocalFctn_OnKeyDown,this);
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
        };
        this.loadIncludeScript("PRODUCT_ERROR_MST_ADMIN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
