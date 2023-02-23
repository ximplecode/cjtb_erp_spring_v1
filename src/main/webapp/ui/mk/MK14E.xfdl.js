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
            this.set_titletext("디지털인쇄기 명세서");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCASENAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMSTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ORDMST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ORDMST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_RUNDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CODEYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORDMST_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"USE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_STNDNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_TONE\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_JMI\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_UNITCOST\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_AMOUNT\" type=\"FLOAT\" size=\"256\" prop=\"SUM\"/><Column id=\"ORDDTL_VAT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSearch",null,"34","80","40","145",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","12","10","388","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("디지털인쇄기 명세서");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"34","43","39","0.69%",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_icon("url(\'Img::ico_excel_O.png\')");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrt",null,"34","80","40","btnExcel:7",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("출력");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEDate",null,"37","160","35","btnSearch:53",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate",null,"37","160","35","calEDate:3",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stDate",null,"37","85","35","calSDate:3",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("마감일자");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","6","80","98.85%","87.22%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"90\"/><Column size=\"312\"/><Column size=\"82\"/><Column size=\"82\"/><Column size=\"52\"/><Column size=\"172\"/><Column size=\"53\"/><Column size=\"58\"/><Column size=\"61\"/><Column size=\"64\"/><Column size=\"102\"/><Column size=\"90\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"34\"/><Row size=\"34\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"진행일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"도서명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"구분\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"판형\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"부수\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"지종\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"대수\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"색도\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" text=\"페이지수\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"9\" text=\"단가\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"10\" text=\"공급가액\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"11\" text=\"발주일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:ORDDTL_RUNDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\" displaytype=\"expr:dataset.getRowLevel(currow)==1?&apos;normal&apos;:&apos;date&apos;\"/><Cell col=\"1\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\" text=\"bind:BOOK_INFO\"/><Cell col=\"2\" text=\"bind:KIND\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\" expr=\"dataset.getRowLevel(currow)==1?KIND||&apos; 소계&apos;:KIND\"/><Cell col=\"3\" text=\"bind:PLT_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\"/><Cell col=\"4\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"expr:dataset.getRowLevel(currow)==1?&apos;normal&apos;:&apos;mask&apos;\" text=\"bind:ORDMST_QTY\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" maskeditformat=\"#,##0.##\"/><Cell col=\"5\" text=\"bind:PPR_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\"/><Cell col=\"6\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"expr:dataset.getRowLevel(currow)==1?&apos;normal&apos;:&apos;mask&apos;\" text=\"bind:ORDDTL_JMI\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" maskeditformat=\"#,##0.000\"/><Cell col=\"7\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" text=\"bind:ORDDTL_TONE\" suppress=\"0\" suppressalign=\"middle\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" maskeditformat=\"#,###\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"8\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" text=\"bind:DTL_PAGE\" suppress=\"0\" suppressalign=\"middle\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" maskeditformat=\"#,###\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"9\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"expr:dataset.getRowLevel(currow)==1?&apos;normal&apos;:&apos;mask&apos;\" text=\"bind:ORDDTL_UNITCOST\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" maskeditformat=\"#,##0.##\"/><Cell col=\"10\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:ORDDTL_AMOUNT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" maskeditformat=\"#,##0.##\"/><Cell col=\"11\" text=\"bind:ORDMST_DATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\" displaytype=\"expr:dataset.getRowLevel(currow)==1?&apos;normal&apos;:&apos;date&apos;\" maskeditformat=\"####-##-##\" maskedittype=\"string\"/></Band><Band id=\"summary\"><Cell background=\"#fbce78\"/><Cell col=\"1\" background=\"#fbce78\"/><Cell col=\"2\" background=\"#fbce78\" text=\"총합계\" font=\"bold 14px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" background=\"#fbce78\"/><Cell col=\"4\" background=\"#fbce78\"/><Cell col=\"5\" background=\"#fbce78\"/><Cell col=\"6\" background=\"#fbce78\"/><Cell col=\"7\" background=\"#fbce78\"/><Cell col=\"8\" background=\"#fbce78\"/><Cell col=\"9\" background=\"#fbce78\"/><Cell col=\"10\" background=\"#fbce78\" font=\"bold 14px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&apos;ORDDTL_AMOUNT&apos;);\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"11\" background=\"#fbce78\"/></Band></Format></Formats>");
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
        this.addIncludeScript("MK14E.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK14E.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("MK14E.xfdl","Lib::Lib_mk.xjs");
        this.registerScript("MK14E.xfdl", function() {
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

        	str_url = "JSP/mk/mk14E_Select.jsp";
        	in_ds 	= "dsList=dsList";
        	out_ds 	= "dsList=dsList";
        	str_arg = "SDATE=" + nexacro.wrapQuote(this.calSDate.value) +
        	          " EDATE=" + nexacro.wrapQuote(this.calEDate.value);

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
        		{
        			alert("조회된 자료가 없습니다.");
        			return false;
        		}

        		this.dsList.set_keystring("G:WORK_KIND");
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

        	var rdUrl = "";
        	rdUrl = gv_svcUrl + "rpt/mk/MK143_DIGITAL.mrd";

        	var rdParam = "/ragentpath ["+ gv_urlRdDataServer +"]"+ " /rp [" + this.calSDate.value + "] [" +  this.calEDate.value + "]"+" /rsetxlsmrd [" + gv_svcUrl+ "rpt/mk/MK143_DIGITALxls.mrd]";

        	trace(rdParam);

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


        this.edPrcsCd_onchanged = function(obj,e)
        {
        	if(this.edPrcsCd.getLength() == this.edPrcsCd.text.length){

        		this.cbPrcsNm.set_index(this.dsProcess.findRow("PRCS_CODE", this.edPrcsCd.text));

        		if(this.cbPrcsNm.index == -1){
        			this.cbPrcsNm.setFocus();
        			this.cbPrcsNm.dropdown();
        		}
        	}
        };


        this.cbPrcsNm_onitemchanged = function(obj,e)
        {
        	var iPrcsIdx = this.dsProcess.findRow("PRCS_NAME", this.cbPrcsNm.text);

        	this.edPrcsCd.set_value(this.dsProcess.getColumn(iPrcsIdx, "PRCS_CODE"));
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
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnExcel.addEventHandler("onclick",this.btnExcel_onclick,this);
            this.btnPrt.addEventHandler("onclick",this.btnPrt_onclick,this);
            this.calEDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.calSDate.addEventHandler("onkeyup",this.LocalFctn_OnKeyDown,this);
        };
        this.loadIncludeScript("MK14E.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
