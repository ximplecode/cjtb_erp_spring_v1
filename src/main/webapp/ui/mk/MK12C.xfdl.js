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
            this.set_titletext("용지단가 일괄적용");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">단가 &apos;0&apos;인 건  </Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">단가 틀린 건  </Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">반품 건</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPprInList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINMST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINMST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINDTL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINDTL_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINDTL_WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINDTL_UNITCOST\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINDTL_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINDTL_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CUST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CUST\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPprInListSave", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINMST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINMST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINDTL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINDTL_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINDTL_WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINDTL_UNITCOST\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINDTL_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PPRINDTL_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CUST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CUST\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","8","10","346","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("용지단가 일괄적용");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"29","80","40","0.77%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"29","80","40","btnSave:7",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEDate",null,"33","140","35","btnSearch:10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate",null,"33","140","35","calEDate:3",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("stSCustCd",null,"33","85","35","calSDate:3",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("입고일자");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Radio("rdGubun",null,"33","345","35","stSCustCd:30",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("dsGubun");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("vertical");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_fittocontents("none");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_background("lightsteelblue");
            obj.set_color("white");
            obj.set_padding("0px 0px 0px 25px");
            obj.set_text("단가 \'0\'인 건  ");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","8","78","98.85%",null,null,"10",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsPprInList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdUse\"><Columns><Column size=\"36\"/><Column size=\"102\"/><Column size=\"51\"/><Column size=\"41\"/><Column size=\"80\"/><Column size=\"226\"/><Column size=\"83\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"110\"/><Column size=\"83\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell font=\"bold 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"1\" text=\"입고일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"번호\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"순번\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"용지코드\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"용지명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"중량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" text=\"단가\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"9\" text=\"금액\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"10\" text=\"부가세\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"11\" text=\"제지사\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"12\" text=\"입고처\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" edittype=\"checkbox\" cssclass=\"expr:TYPE_CODE==&apos;03&apos;?&quot;BgChange4&quot;:&quot;&quot;\"/><Cell col=\"1\" text=\"bind:PPRINMST_DATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" maskeditformat=\"@@\" editinputtype=\"normal\" maskedittype=\"string\" cssclass=\"expr:TYPE_CODE==&apos;03&apos;?&quot;BgChange4&quot;:&quot;&quot;\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:PPRINMST_NO\" displaytype=\"normal\" combodataset=\"ds_mk_UseType\" combocodecol=\"USE_TYPE_CODE\" combodatacol=\"USE_TYPE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" cssclass=\"expr:TYPE_CODE==&apos;03&apos;?&quot;BgChange4&quot;:&quot;&quot;\"/><Cell col=\"3\" text=\"bind:PPRINDTL_SEQ\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" edittype=\"none\" cssclass=\"expr:TYPE_CODE==&apos;03&apos;?&quot;BgChange4&quot;:&quot;&quot;\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:PPR_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" cssclass=\"expr:TYPE_CODE==&apos;03&apos;?&quot;BgChange4&quot;:&quot;&quot;\"/><Cell col=\"5\" text=\"bind:PPR_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" cssclass=\"expr:TYPE_CODE==&apos;03&apos;?&quot;BgChange4&quot;:&quot;&quot;\"/><Cell col=\"6\" text=\"bind:PPRINDTL_QTY\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" cssclass=\"expr:TYPE_CODE==&apos;03&apos;?&quot;BgChange4&quot;:&quot;&quot;\" displaytype=\"mask\" maskeditformat=\"#,0.000\"/><Cell col=\"7\" text=\"bind:PPRINDTL_WEIGHT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" cssclass=\"expr:TYPE_CODE==&apos;03&apos;?&quot;BgChange4&quot;:&quot;&quot;\" displaytype=\"mask\" maskeditformat=\"#,0.000\"/><Cell col=\"8\" text=\"bind:PPRINDTL_UNITCOST\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"normal\" editinputtype=\"number\" cssclass=\"expr:TYPE_CODE==&apos;03&apos;?&quot;BgChange4&quot;:&quot;&quot;\" maskeditformat=\"#,###\" displaytype=\"number\" editautoselect=\"true\"/><Cell col=\"9\" text=\"bind:PPRINDTL_AMOUNT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"normal\" editinputtype=\"number\" cssclass=\"expr:TYPE_CODE==&apos;03&apos;?&quot;BgChange4&quot;:&quot;&quot;\" maskeditformat=\"#,###\" displaytype=\"number\" editautoselect=\"true\"/><Cell col=\"10\" text=\"bind:PPRINDTL_VAT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"normal\" editinputtype=\"number\" cssclass=\"expr:TYPE_CODE==&apos;03&apos;?&quot;BgChange4&quot;:&quot;&quot;\" maskeditformat=\"#,###\" displaytype=\"number\" editautoselect=\"true\"/><Cell col=\"11\" text=\"bind:PPR_CUST\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" cssclass=\"expr:TYPE_CODE==&apos;03&apos;?&quot;BgChange4&quot;:&quot;&quot;\" displaytype=\"normal\"/><Cell col=\"12\" text=\"bind:CUST\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" cssclass=\"expr:TYPE_CODE==&apos;03&apos;?&quot;BgChange4&quot;:&quot;&quot;\" displaytype=\"normal\"/></Band></Format></Formats>");
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
        this.addIncludeScript("MK12C.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK12C.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK12C.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerDML, vPerDel;
        var vStr;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var vChkAll = 0;

        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", nexacro.getApplication().gv_selectMenu);

        	vPerSel = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_SELECT");
        	vPerDML = "U";
        	vPerDel = "D";

        	var d = new Date();
        	var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");							//오늘날짜 setting
        	var strPreDay = Eco.date.getMaskFormatString(Eco.date.getFirstDate(Eco.date.addMonth(d, -1)), "yyyyMMdd"); //오늘 기준 한달 전 1일 setting

        	this.calSDate.set_value(strPreDay);
        	this.calEDate.set_value(strtoDay);

        	if(vPerSel = "1")
        		this.btnSearch_onclick();
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
        	if(this.calSDate.value == "" )
        	{
        		alert("입고일자를 입력해 주세요.");
        		this.calSDate.setFocus();
        		return false;
        	}


        	if (this.calEDate.value == "" )
        	{
        		alert("입고일자를 입력해 주세요.");
        		this.calEDate.setFocus();
        		return false;
        	}

        	in_ds 	= "dsPprInList=dsPprInList";
        	out_ds 	= "dsPprInList=dsPprInList";
        	str_url = "JSP/mk/mk12Cf_Select.jsp";
        	str_arg = "SDATE=" + nexacro.wrapQuote(this.calSDate.value) +
        	          " EDATE=" + nexacro.wrapQuote(this.calEDate.value) +
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
        		if(this.dsPprInList.rowcount == 0)
        			alert("조회된 자료가 없습니다.");
        	}
        };

        //저장버튼이벤트
        this.btnSave_onclick = function(obj,e)
        {
        	var bRtn = this.confirm("저장하시겠습니까??", "용지단가 일괄적용");

        	if(bRtn == true)
            {
        		if(this.dsPprInList.getRowCount() == 0)
        		{
        			alert("저장할 자료가 없습니다.");
        			return false;
        		}

        		var data_cnt = 0;

        		for(var ii = 0 ; ii < this.dsPprInList.getRowCount(); ii++)
        		{
        			if(this.dsPprInList.getColumn(ii, "CHK") == "1")
        			{
        				data_cnt = data_cnt + 1;
        				this.dsPprInListSave.addRow();
        				this.dsPprInListSave.copyRow(this.dsPprInListSave.rowposition, this.dsPprInList, ii);
        			}
        		}

        		if(data_cnt == 0)
        		{
        			alert("선택된 자료가 없습니다.");
        			return false;
        		}

        		in_ds = "input=dsPprInListSave:U";
        		vStr = vPerDML;
        		str_arg ="EMPLOYEE_ID=" +nexacro.wrapQuote(gv_sabun);
        		this.gfn_TransactionP("save", "JSP/mk/mk12Cf_dml.jsp", in_ds, "", str_arg, "fnSaveCallback", false, vStr, false, this);
        	}
        };

        this.fnSaveCallback = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}

        	this.dsPprInListSave.clearData();
        };


        //라디오버튼 변경시 조회
        this.rdGubun_onitemchanged = function(obj,e)
        {
        	this.btnSearch_onclick();
        };

        this.grdList_onenterdown = function(obj,e)
        {
        	this.grdList.moveToNextCell();
        	this.grdList.showEditor();

        	if(e.cell == 8)
        	{
        		var vPprCode = this.dsPprInList.getColumn(e.row, "PPR_CODE");
        		var vPprCust = this.dsPprInList.getColumn(e.row, "PPR_CUST");
        		var vPprInDtl_Unitcost = this.dsPprInList.getColumn(e.row, "PPRINDTL_UNITCOST");

        		for(var i=0; i< this.dsPprInList.rowcount; i++)
        		{
        			if((this.dsPprInList.getColumn(i, "PPR_CODE") == vPprCode) && (this.dsPprInList.getColumn(i, "PPR_CUST") == vPprCust))
        			{
        				this.dsPprInList.setColumn(i, "PPRINDTL_UNITCOST",  vPprInDtl_Unitcost);
        				this.dsPprInList.setColumn(i, "CHK",  "1");
        			}
        		}
        	}
        };

        //헤더 클릭시 전체선택/전체해제
        this.grdList_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		this.fn_SetGridCheckAll(obj, e);
        	}
        };

        this.fn_SetGridCheckAll = function (obj, e)
        {
        	vChkAll = (vChkAll ? 0 : 1);
        	this.dsPprInList.set_enableevent(false);
        	for (var i = 0; i < this.dsPprInList.getRowCount(); i++)
        	{
        		this.dsPprInList.setColumn(i, "CHK", vChkAll);
        	}
        	this.grdList.setCellProperty("Head", 0, "expr", vChkAll);
        	this.dsPprInList.set_enableevent(true);
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkMain_onload,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.calEDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.calSDate.addEventHandler("onkeyup",this.LocalFctn_OnKeyDown,this);
            this.rdGubun.addEventHandler("onitemchanged",this.rdGubun_onitemchanged,this);
            this.grdList.addEventHandler("onenterdown",this.grdList_onenterdown,this);
            this.grdList.addEventHandler("onheadclick",this.grdList_onheadclick,this);
        };
        this.loadIncludeScript("MK12C.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
