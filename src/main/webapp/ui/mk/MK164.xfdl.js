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
            this.set_titletext("기간 비목별 제조원가");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKGROUP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKGROUP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EDITCOST\" type=\"INT\" size=\"256\"/><Column id=\"FIXEDCOST\" type=\"FLOAT\" size=\"512\"/><Column id=\"VARIABLECOST\" type=\"FLOAT\" size=\"512\"/><Column id=\"BINDQTY\" type=\"INT\" size=\"256\"/><Column id=\"BINDCOST\" type=\"FLOAT\" size=\"512\"/><Column id=\"MATERIALCOST\" type=\"FLOAT\" size=\"512\"/><Column id=\"COSTTOT\" type=\"FLOAT\" size=\"512\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">월별 제조원가</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">연 누적 제조원가</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","12","10","558","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("기간 비목별 제조원가");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"49","43","39","0.69%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_icon("url(\'Img::ico_excel_O.png\')");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrt",null,"49","80","40","btnExcel:7",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("출력");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"49","80","40","btnPrt:7",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","6","97","98.85%","83.75%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"311\"/><Column size=\"115\"/><Column size=\"115\"/><Column size=\"115\"/><Column size=\"115\"/><Column size=\"115\"/><Column size=\"115\"/><Column size=\"119\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"33\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"비목명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"원고료\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"고정비\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"변동비\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"제본수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"제본비\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"재료비\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"제조비합계\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:BOOKGROUP_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" suppressalign=\"middle\"/><Cell col=\"1\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:EDITCOST\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###\"/><Cell col=\"2\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:FIXEDCOST\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###\"/><Cell col=\"3\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:VARIABLECOST\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###\"/><Cell col=\"4\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:BINDQTY\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###\"/><Cell col=\"5\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:BINDCOST\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###\"/><Cell col=\"6\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:MATERIALCOST\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###\"/><Cell col=\"7\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:COSTTOT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:dataset.getRowLevel(currow)==3?&apos;BgChange4&apos;:&apos;&apos;\" wordWrap=\"char\" maskeditformat=\"#,###\"/></Band><Band id=\"summary\"><Cell font=\"bold 13px/normal &quot;함초롬돋움&quot;\" text=\"제조비 총계\" textAlign=\"left\"/><Cell col=\"1\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;EDITCOST&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###\" textAlign=\"right\"/><Cell col=\"2\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;FIXEDCOST&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###\" textAlign=\"right\"/><Cell col=\"3\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;VARIABLECOST&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###\" textAlign=\"right\"/><Cell col=\"4\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;BINDQTY&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###\" textAlign=\"right\"/><Cell col=\"5\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;BINDCOST&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###\" textAlign=\"right\"/><Cell col=\"6\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;MATERIALCOST&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###\" textAlign=\"right\"/><Cell col=\"7\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&quot;COSTTOT&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnUp",null,"14","21","17","btnSearch:191",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("▲");
            obj.set_background("lightsteelblue");
            obj.set_font("bold 12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("calYyMm",null,"14","136","35","btnUp:0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_editformat("yyyy-MM");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stYyyyMm",null,"14","85","35","calYyMm:3",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("해당월");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Button("btnDown",null,"32","21","17","btnSearch:191",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("▼");
            obj.set_background("lightsteelblue");
            obj.set_font("bold 12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Radio("rdKind",null,"51","323","35","btnSearch:25",null,null,null,null,null,this);
            obj.set_taborder("11");
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
            obj.set_columncount("3");
            obj.set_text("월별 제조원가");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stPprKind",null,"52","85","35","rdKind:3",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("누계구분");
            obj.set_background("#7fb39d");
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
        this.addIncludeScript("MK164.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK164.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK164.xfdl", function() {
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
        		var d = new Date();
        		var strToDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");						//오늘날짜
        		var strToDay  = strToDay.substr(0,6);
        		this.calYyMm.set_value(strToDay);
        		this.calYyMm.setFocus();
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

        	if(this.calYyMm.value == "" || Eco.isUndefined(this.calYyMm.value) == true )
        	{
        		alert("조회연월을 정확히 입력해 주세요.");
        		this.calYyMm.setFocus();
        		return false;
        	}

        	in_ds 	= "dsList=dsList";
        	out_ds 	= "dsList=dsList";

        	var vKind, vSDate, vEDate;

        	if(this.rdKind.value == 1){
        		vKind = "MON"
        		vSDate = this.calYyMm.value.substr(0, 6)+"01";
        		vEDate = this.calYyMm.value.substr(0, 6)+"31";
        	}
        	else{
        		vKind = "ALL"
        		vSDate = this.calYyMm.value.substr(0, 4)+"0101";
        		vEDate = "";
        	}


        	str_url = "JSP/mk/mk164_Select.jsp";
        	str_arg = "YYYYMM=" +nexacro.wrapQuote(this.calYyMm.value.substr(0, 6)) +
        			  " KIND=" +nexacro.wrapQuote(vKind) +
        			  " SDATE=" +nexacro.wrapQuote(vSDate) +
        			  " EDATE=" +nexacro.wrapQuote(vEDate);

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
        	if(this.calYyMm.value == "" || Eco.isUndefined(this.calYyMm.value) == true )
        	{
        		alert("조회연월을 정확히 입력해 주세요.");
        		this.calYyMm.setFocus();
        		return false;
        	}

        	var vKind, vSDate, vEDate;

        	if(this.rdKind.value == 1){
        		vKind = "MON"
        		vSDate = this.calYyMm.value.substr(0, 6)+"01";
        		vEDate = this.calYyMm.value.substr(0, 6)+"31";
        	}
        	else{
        		vKind = "ALL"
        		vSDate = this.calYyMm.value.substr(0, 4)+"0101";
        		vEDate = "";
        	}

        	var rdUrl = gv_svcUrl + "rpt/mk/MK164.mrd";
            var rdParam = "/ragentpath ["+ gv_urlRdDataServer +"]"+ " /rp [" +this.calYyMm.value.substr(0, 6)+ "] [" +vKind+ "] [" +vSDate+ "] [" +vEDate+ "]";

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

        this.btnUp_onclick = function(obj,e)
        {
        	var strUpDate = Eco.date.addMonth(this.calYyMm.value, +1);
        	strUpDate = strUpDate.substr(0, 6);
        	this.calYyMm.set_value(strUpDate);
        };

        this.btnDown_onclick = function(obj,e)
        {
        	var strDownDate = Eco.date.addMonth(this.calYyMm.value, -1);
        	strDownDate = strDownDate.substr(0, 6);
        	this.calYyMm.set_value(strDownDate);
        };

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
            this.btnUp.addEventHandler("onclick",this.btnUp_onclick,this);
            this.btnDown.addEventHandler("onclick",this.btnDown_onclick,this);
        };
        this.loadIncludeScript("MK164.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
