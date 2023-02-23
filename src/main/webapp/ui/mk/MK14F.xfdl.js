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
            this.set_titletext("후가공 발주현황");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"GB\" type=\"STRING\" size=\"256\"/><Column id=\"ORDMST_JPNO\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORDMST_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PACK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PACK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_REMARK\" type=\"STRING\" size=\"256\" prop=\"\"/><Column id=\"ORDDTL_RUNDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_use", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_SHEETPRNCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PAGECNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_DISABLED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSearch",null,"34","80","40","145",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","12","10","358","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("후가공 발주현황");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"34","43","39","0.69%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_icon("url(\'Img::ico_excel_O.png\')");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrt",null,"34","80","40","btnExcel:7",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("출력");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbNm",null,"55","232","35","btnSearch:80",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_mk_use");
            obj.set_datacolumn("USE_NAME");
            obj.set_codecolumn("USE_CODE");
            obj.set_autoselect("true");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edCd",null,"55","88","35","cbNm:3",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("2");
            obj.set_autoselect("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stCust",null,"55","85","35","edCd:3",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("후가공");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEDate",null,"18","160","35","btnSearch:80",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate",null,"18","160","35","calEDate:3",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stDate",null,"18","85","35","calSDate:3",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("발주일자");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","6","97","98.85%","85.14%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"106\"/><Column size=\"33\"/><Column size=\"82\"/><Column size=\"42\"/><Column size=\"330\"/><Column size=\"60\"/><Column size=\"128\"/><Column size=\"100\"/><Column size=\"31\"/><Column size=\"110\"/><Column size=\"180\"/><Column size=\"200\"/><Column size=\"82\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"발주번호\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"순번\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"도서코드\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"년판\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"도서명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"외주처\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"내역\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" text=\"CD\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"9\" text=\"포장형식\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"10\" text=\"특이사항\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"11\" text=\"비고\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"12\" text=\"완료일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:ORDMST_JPNO\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"bind:ORDDTL_SEQ\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\"/><Cell col=\"2\" text=\"bind:BOOKMST_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\"/><Cell col=\"3\" text=\"bind:BOOKMST_YEAR\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\"/><Cell col=\"4\" text=\"bind:BOOKMST_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\" wordWrap=\"char\"/><Cell col=\"5\" text=\"bind:ORDMST_QTY\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###\" maskedittype=\"number\" maskeditmaskchar=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppress=\"0\" suppressalign=\"middle\"/><Cell col=\"6\" text=\"bind:NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\"/><Cell col=\"7\" text=\"bind:USE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\"/><Cell col=\"8\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" text=\"bind:CD_COUNT\"/><Cell col=\"9\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\" text=\"bind:PACK_NAME\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\"/><Cell col=\"10\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\" text=\"bind:ORDDTL_COMMENT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" wordWrap=\"char\"/><Cell col=\"11\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\" text=\"bind:ORDDTL_REMARK\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" wordWrap=\"char\"/><Cell col=\"12\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" text=\"bind:ORDDTL_RUNDATE\" suppress=\"0\" suppressalign=\"middle\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" maskeditformat=\"####-##-##\" displaytype=\"mask\" calendardateformat=\"yyyy-MM-dd\" maskedittype=\"string\"/></Band></Format></Formats>");
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
        this.addIncludeScript("MK14F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK14F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK14F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerPrt;
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
        		this.gfn_TransactionP("select", "JSP/mk/getData_use.jsp", "ds_mk_use=ds_mk_use", "ds_mk_use=ds_mk_use", "", "fnUseCallback", false, "S", false, this);   //용도코드
        		this.calSDate.setFocus();
        	}
        };

        this.fnUseCallback = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{
        		this.ds_mk_use.set_filterstr("USE_PROCESSTYPE=='A'");
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

        	var vUseCd;
        	if(Eco.isUndefined(this.edCd.value) == true){
        		vUseCd = "";
        	}else {
        		vUseCd = this.edCd.value;
        	}

        	str_url = "JSP/mk/mk14F_Select.jsp";
        	in_ds 	= "dsList=dsList";
        	out_ds 	= "dsList=dsList";
        	str_arg = "SDATE=" + nexacro.wrapQuote(this.calSDate.value) +
        	          " EDATE=" + nexacro.wrapQuote(this.calEDate.value) +
        	          " USE_CODE=" +nexacro.wrapQuote(vUseCd);

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
        	rdUrl = gv_svcUrl + "rpt/mk/MK14F.mrd";

        	var vUseCd;
        	if(Eco.isUndefined(this.edCd.value) == true){
        		vUseCd = "";
        	}else {
        		vUseCd = this.edCd.value;
        	}

        	var rdParam = "/ragentpath ["+ gv_urlRdDataServer +"]"+ " /rp [" + this.calSDate.value + "] [" +  this.calEDate.value + "] [" +  vUseCd + "]";

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


        this.edCd_onchanged = function(obj,e)
        {
        	if(this.edCd.getLength() == this.edCd.text.length){

        		this.cbNm.set_index(this.ds_mk_use.findRow("USE_CODE", this.edCd.text));
        		this.cbNm.setFocus();

        		if(this.cbNm.index == -1){
        			this.cbNm.setFocus();
        			this.cbNm.dropdown();
        		}
        	}
        };

        this.cbNm_onitemchanged = function(obj,e)
        {
        	var iUseIdx = this.ds_mk_use.findRow("USE_NAME", this.cbNm.text);
        	this.edCd.set_value(this.ds_mk_use.getColumn(iUseIdx, "USE_CODE"));
        };


        this.cbNm_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		if(this.cbNm.value.length != 0){
        			this.btnSearch_onclick();
        			this.btnPrt_onclick();
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
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnExcel.addEventHandler("onclick",this.btnExcel_onclick,this);
            this.btnPrt.addEventHandler("onclick",this.btnPrt_onclick,this);
            this.cbNm.addEventHandler("onitemchanged",this.cbNm_onitemchanged,this);
            this.cbNm.addEventHandler("onkeydown",this.cbNm_onkeydown,this);
            this.edCd.addEventHandler("onchanged",this.edCd_onchanged,this);
            this.calEDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.calSDate.addEventHandler("onkeyup",this.LocalFctn_OnKeyDown,this);
        };
        this.loadIncludeScript("MK14F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
