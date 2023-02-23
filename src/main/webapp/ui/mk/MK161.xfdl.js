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
            this.set_titletext("기간별 도서제조원가 집계표");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOK_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKGROUP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EDITCOST\" type=\"INT\" size=\"256\"/><Column id=\"MATERIALCOST\" type=\"INT\" size=\"256\"/><Column id=\"JOJEPANCOST\" type=\"INT\" size=\"256\"/><Column id=\"BINDCOST\" type=\"INT\" size=\"256\"/><Column id=\"BINDQTY\" type=\"INT\" size=\"256\"/><Column id=\"PRINTCOST\" type=\"INT\" size=\"256\"/><Column id=\"COATINGCOST\" type=\"INT\" size=\"256\"/><Column id=\"ETCCOST\" type=\"INT\" size=\"256\"/><Column id=\"TOTALCOST\" type=\"INT\" size=\"256\"/><Column id=\"BOOK_INFO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBookMst", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","12","10","528","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("기간별 도서제조원가 집계표");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"49","43","39","0.69%",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_icon("url(\'Img::ico_excel_O.png\')");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrt",null,"49","80","40","btnExcel:7",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("출력");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"49","80","40","btnPrt:7",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEDate",null,"13","160","35","btnSearch:25",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate",null,"13","160","35","calEDate:3",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stDate",null,"13","85","35","calSDate:3",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회일자");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Edit("edEBookCd",null,"52","160","35","btnSearch:25",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("10");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookCode",null,"52","160","35","edEBookCd:3",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("10");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnBook_Search",null,"52","85","35","edt_bookCode:3",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("도서번호");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","6","97","98.85%","83.75%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"106\"/><Column size=\"271\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"84\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"119\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"33\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"도서그룹\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"제품명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"제품코드\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"원고료\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"고정비\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"변동비\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"제본수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"제본비\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" text=\"재료비\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"9\" text=\"제조비합계\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:BOOKGROUP_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"bind:BOOKMST_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" suppressalign=\"middle\" expr=\"dataset.getRowLevel(currow)==1?&apos;소계&apos;:dataset.getRowLevel(currow)==2?&apos;도서구분 소계&apos;:dataset.getRowLevel(currow)==3?dataset.getColumn(currow-3, &quot;BOOKGROUP_NAME&quot;)+&apos; 소계&apos;:BOOKMST_NAME\"/><Cell col=\"2\" text=\"bind:BOOK_INFO\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" suppressalign=\"middle\" wordWrap=\"char\"/><Cell col=\"3\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:EDITCOST\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###\"/><Cell col=\"4\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:JOJEPANCOST\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###\"/><Cell col=\"5\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:ORDDTL_COMMENT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###\" expr=\"dataset.getColumn(currow, &quot;PRINTCOST&quot;)+dataset.getColumn(currow, &quot;COATINGCOST&quot;)+dataset.getColumn(currow, &quot;ETCCOST&quot;);\"/><Cell col=\"6\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:BINDQTY\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###\"/><Cell col=\"7\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:BINDCOST\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###\"/><Cell col=\"8\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:MATERIALCOST\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###\"/><Cell col=\"9\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:TOTALCOST\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###\"/></Band><Band id=\"summary\"><Cell font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" text=\"총합계\" textAlign=\"left\"/><Cell col=\"2\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;EDITCOST&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###\" textAlign=\"right\"/><Cell col=\"4\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;JOJEPANCOST&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###\" textAlign=\"right\"/><Cell col=\"5\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;PRINTCOST&quot;)+dataset.getSum(&quot;COATINGCOST&quot;)+dataset.getSum(&quot;ETCCOST&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###\" textAlign=\"right\"/><Cell col=\"6\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;BINDQTY&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###\" textAlign=\"right\"/><Cell col=\"7\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;BINDCOST&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###\" textAlign=\"right\"/><Cell col=\"8\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;MATERIALCOST&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###\" textAlign=\"right\"/><Cell col=\"9\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;TOTALCOST&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###\" textAlign=\"right\"/></Band></Format></Formats>");
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
        this.addIncludeScript("MK161.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK161.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK161.xfdl", function() {
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
        		alert("시작일자를 입력해 주세요.");
        		this.calSDate.setFocus();
        		return false;
        	}

        	if (this.calEDate.value == "" || Eco.isUndefined(this.calEDate.value) == true )
        	{
        		alert("종료일자를 입력해 주세요.");
        		this.calEDate.setFocus();
        		return false;
        	}

        	in_ds 	= "dsList=dsList";
        	out_ds 	= "dsList=dsList";

        	var vSBookCd, vEBookCd;

        	if(Eco.isUndefined(this.edt_bookCode.value) == true || this.edt_bookCode.value == ""){
        		vSBookCd = "";
        	}else {
        		vSBookCd = this.edt_bookCode.value;
        	}

        	if(Eco.isUndefined(this.edEBookCd.value) == true || this.edEBookCd.value == ""){
        		vEBookCd = vSBookCd;
        	}else {
        		vEBookCd = this.edEBookCd.value;
        	}


        	str_url = "JSP/mk/mk161_Select.jsp";
        	str_arg = "GB=" + nexacro.wrapQuote(1) +
        			  " SDATE=" + nexacro.wrapQuote(this.calSDate.value) +
        	          " EDATE=" + nexacro.wrapQuote(this.calEDate.value) +
        	          " SBOOKCODE=" +nexacro.wrapQuote(vSBookCd) +
        			  " EBOOKCODE=" +nexacro.wrapQuote(vEBookCd);

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

        		this.dsList.set_keystring("G:BOOK_GROUP,BOOKTYPE,BOOKMST_SUBCODE");
        	}
        };

        //레포트 출력 이벤트
        this.btnPrt_onclick = function(obj,e)
        {
        	if(this.calSDate.value == "" || Eco.isUndefined(this.calSDate.value) == true )
        	{
        		alert("시작일자를 입력해 주세요.");
        		this.calSDate.setFocus();
        		return false;
        	}

        	if (this.calEDate.value == "" || Eco.isUndefined(this.calEDate.value) == true )
        	{
        		alert("종료일자를 입력해 주세요.");
        		this.calEDate.setFocus();
        		return false;
        	}

        	var vSBookCd, vEBookCd;
        	if(Eco.isUndefined(this.edt_bookCode.value) == true || this.edt_bookCode.value == ""){
        		vSBookCd = "";
        	}else {
        		vSBookCd = this.edt_bookCode.value;
        	}

        	if(Eco.isUndefined(this.edEBookCd.value) == true || this.edEBookCd.value == ""){
        		vEBookCd = vSBookCd;
        	}else {
        		vEBookCd = this.edEBookCd.value;
        	}

        	var rdUrl = gv_svcUrl + "rpt/mk/MK161.mrd";
            var rdParam = "/ragentpath ["+ gv_urlRdDataServer +"]"+ " /rp [" + this.calSDate.value + "] [" +  this.calEDate.value + "] [" +vSBookCd+ "] [" +vEBookCd+ "] /rsetxlsmrd [" + gv_svcUrl + "rpt/mk/MK161xls.mrd]";

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

        this.btnBookSearch_onclick = function(obj,e)
        {
        	var vBookCd;
        	vBookCd = this.edt_bookCode.value;
        	this.dsBookMst.clearData();
        	var objParam = {dsParam1:this.dsBookMst
        				   ,dsParam2:"MK14B"
        				   ,dsParam3:vBookCd
        				   ,dsParam4:""}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupBook", objParam, "mk::MKBook_SearchF.xfdl", "popupCallback", this, 10, 58, 450, 400);
        };

        this.popupCallback = function(){

        	if(this.dsBookMst.rowcount > 0)
        	{
        		this.edt_bookCode.set_value(this.dsBookMst.getColumn(0, "BOOKMST_CODE"));
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
            this.calEDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.calSDate.addEventHandler("onkeyup",this.LocalFctn_OnKeyDown,this);
            this.btnBook_Search.addEventHandler("onclick",this.btnBookSearch_onclick,this);
        };
        this.loadIncludeScript("MK161.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
