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
            this.set_titletext("프린피아 발주 전송");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSendList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"ORDMST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ORDMST_NO\" type=\"STRING\" size=\"4\"/><Column id=\"ORDDTL_SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"ORDMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"PLT_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"PLT_NAME\" type=\"STRING\" size=\"15\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/><Column id=\"ORDMST_QTY\" type=\"INT\" size=\"6\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CUST\" type=\"STRING\" size=\"6\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"35\"/><Column id=\"COAT_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"ORDDTL_PAGE\" type=\"INT\" size=\"3\"/><Column id=\"USE_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"USE_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"USE_PROCESSTYPE\" type=\"STRING\" size=\"1\"/><Column id=\"ORDDTL_JMI\" type=\"DECIMAL\" size=\"10\"/><Column id=\"PPR_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"PPR_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"ORDDTL_RUNDATE\" type=\"STRING\" size=\"6\"/><Column id=\"ORDDTL_TONE1\" type=\"STRING\" size=\"1\"/><Column id=\"ORDDTL_TONE2\" type=\"STRING\" size=\"1\"/><Column id=\"ORDDTL_PANQTY\" type=\"DECIMAL\" size=\"3\"/><Column id=\"ORDDTL_AMOUNT\" type=\"INT\" size=\"9\"/><Column id=\"ORDDTL_PANUNITCOST\" type=\"INT\" size=\"5\"/><Column id=\"ORDDTL_PANAMOUNT\" type=\"INT\" size=\"9\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"ORDDTL_CTP\" type=\"STRING\" size=\"1\"/><Column id=\"PLT_CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"PLT_CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"ORDDTL_REALWORKQTY\" type=\"INT\" size=\"6\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","8","10","382","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("프린피아 발주 전송");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"29","80","40","0.77%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("발송");
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
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate",null,"33","140","35","calEDate:3",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stDate",null,"33","85","35","calSDate:3",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("진행일자");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","8","78","98.85%",null,null,"10",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsSendList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"36\"/><Column size=\"102\"/><Column size=\"226\"/><Column size=\"115\"/><Column size=\"83\"/><Column size=\"85\"/><Column size=\"115\"/><Column size=\"238\"/><Column size=\"140\"/><Column size=\"102\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell font=\"bold 12px/normal &quot;함초롬돋움&quot;\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"1\" text=\"발주일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"도서명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"판형\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"쪽수\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"용도\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"용지\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" text=\"발주처\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"9\" text=\"진행일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ORDMST_DATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" maskeditformat=\"@@\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:BOOKMST_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"3\" text=\"bind:PLT_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"4\" text=\"bind:ORDMST_QTY\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"5\" text=\"bind:ORDDTL_PAGE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"number\" maskeditformat=\"#,###\" displaytype=\"number\" editautoselect=\"true\"/><Cell col=\"6\" text=\"bind:USE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"7\" text=\"bind:PPR_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"8\" text=\"bind:CUST_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\"/><Cell col=\"9\" text=\"bind:ORDDTL_RUNDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" maskeditformat=\"@@\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
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
        this.addIncludeScript("MK13E.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK13E.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK13E.xfdl", function() {
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
        	vPerDML = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_DML");

        	//DML권한 체크 및 컴포넌트 ENABLE처리
        	if(vPerDML != "1" || vPerSel != "1")
        		this.fctn_User_Enabled(this, false);

        	var d = new Date();
        	var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");							//오늘날짜 setting

        	this.calSDate.set_value(strtoDay);
        	this.calEDate.set_value(strtoDay);

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


        	if (this.calEDate.value == "" || Eco.isUndefined(this.calEDate.value) == true)
        	{
        		alert("진행일자를 입력해 주세요.");
        		this.calEDate.setFocus();
        		return false;
        	}

        	in_ds 	= "dsSendList=dsSendList";
        	out_ds 	= "dsSendList=dsSendList";
        	str_url = "JSP/mk/mk13ef_list.jsp";
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
        		if(this.dsSendList.rowcount == 0)
        			alert("조회된 자료가 없습니다.");
        	}
        };

        //발송 버튼 이벤트
        this.btnSave_onclick = function(obj,e)
        {
        	var bRtn = this.confirm("프린피아 발주 전송 하시겠습니까??", "프린피아 발주전송");

        	if(bRtn == true)
            {
        		var cnt_chk = 0;
        		for (var nRow=0 ; nRow<=this.dsSendList.rowcount-1; nRow++)
        		{
        			if (this.dsSendList.getColumn(nRow, "CHK") == "1")
        				cnt_chk = cnt_chk + 1;
        		}


        		if(cnt_chk == 0)
        		{
        			alert("전송할 데이터를 선택 하세요!");
        			return false;
        		}

        		for (var nRow=0 ; nRow<=this.dsSendList.rowcount-1; nRow++)
        		{
        			if (this.dsSendList.getColumn(nRow, "CHK") == "1")
        				this.fctn_Save(nRow);
        		}
        	}
        };

        this.fctn_Save = function(tRow)
        {

        	str_arg  = "ORDMST_ID =" + nexacro.wrapQuote(this.dsSendList.getColumn(tRow, "ORDMST_ID"));
        	str_arg  += " ORDDTL_SEQ =" + nexacro.wrapQuote(this.dsSendList.getColumn(tRow, "ORDDTL_SEQ"));
        	str_arg  += " ORDDTL_RUNDATE =" + nexacro.wrapQuote(this.dsSendList.getColumn(tRow, "ORDDTL_RUNDATE"));
        	str_arg  += " EMPLOYEE_ID =" + nexacro.wrapQuote(this.dsSendList.getColumn(tRow, "EMPLOYEE_ID"));
        	vStr = vPerDML;

        	this.gfn_TransactionP("save", "JSP/mk/mk13ef_order_send_dml.jsp", "", "", str_arg, "fnSaveCallback", false, vStr, false, this);
        }


        this.fnSaveCallback = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}

        	alert("발송이 완료되었습니다.");
        	this.btnSearch_onclick();
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
        	this.dsSendList.set_enableevent(false);
        	for (var i = 0; i < this.dsSendList.getRowCount(); i++)
        	{
        		this.dsSendList.setColumn(i, "CHK", vChkAll);
        	}
        	this.grdList.setCellProperty("Head", 0, "expr", vChkAll);
        	this.dsSendList.set_enableevent(true);
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
        }
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
            this.grdList.addEventHandler("onenterdown",this.grdList_onenterdown,this);
            this.grdList.addEventHandler("onheadclick",this.grdList_onheadclick,this);
        };
        this.loadIncludeScript("MK13E.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
