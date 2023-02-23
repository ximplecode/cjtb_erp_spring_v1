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
            this.set_titletext("미진행 작업관리");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsNotProgressList", this);
            obj._setContents("<ColumnInfo><Column id=\"ORDMST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ORDMST_NO\" type=\"STRING\" size=\"4\"/><Column id=\"ORDMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ORDDTL_SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/><Column id=\"PLT_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"PLT_NAME\" type=\"STRING\" size=\"15\"/><Column id=\"ORDMST_QTY\" type=\"INT\" size=\"6\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CUST\" type=\"STRING\" size=\"6\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"35\"/><Column id=\"COAT_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"USE_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"USE_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"USE_PROCESSTYPE\" type=\"STRING\" size=\"1\"/><Column id=\"ORDDTL_JMI\" type=\"DECIMAL\" size=\"10\"/><Column id=\"PPR_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"PPR_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"ORDDTL_RUNDATE\" type=\"STRING\" size=\"6\"/><Column id=\"ORDDTL_TONE1\" type=\"STRING\" size=\"1\"/><Column id=\"ORDDTL_TONE2\" type=\"STRING\" size=\"1\"/><Column id=\"ORDDTL_PAGE\" type=\"INT\" size=\"9\"/><Column id=\"ORDDTL_PANQTY\" type=\"DECIMAL\" size=\"3\"/><Column id=\"ORDDTL_AMOUNT\" type=\"INT\" size=\"9\"/><Column id=\"ORDDTL_UNITCOST\" type=\"INT\" size=\"9\"/><Column id=\"ORDDTL_PANUNITCOST\" type=\"INT\" size=\"5\"/><Column id=\"ORDDTL_PANAMOUNT\" type=\"INT\" size=\"9\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"ORDDTL_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_CTP\" type=\"STRING\" size=\"1\"/><Column id=\"PLT_CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"PLT_CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"ORDDTL_REALWORKQTY\" type=\"INT\" size=\"6\"/><Column id=\"COAT_NAME\" type=\"STRING\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMakeClose", this);
            obj._setContents("<ColumnInfo><Column id=\"MKCLS_YM\" type=\"STRING\" size=\"6\"/><Column id=\"MKCLS_STARTDATE\" type=\"STRING\" size=\"8\"/><Column id=\"MKCLS_ENDDATE\" type=\"STRING\" size=\"8\"/><Column id=\"MKCLS_CLOSE\" type=\"STRING\" size=\"1\"/><Column id=\"MKCLS_MODIFY\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","8","10","346","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("미진행 작업관리");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"29","80","40","0.77%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"29","80","40","btnSave:7",null,null,null,null,null,this);
            obj.set_taborder("2");
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

            obj = new Grid("grdList","8","78","98.85%",null,null,"10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsNotProgressList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"93\"/><Column size=\"336\"/><Column size=\"94\"/><Column size=\"74\"/><Column size=\"67\"/><Column size=\"96\"/><Column size=\"97\"/><Column size=\"202\"/><Column size=\"140\"/><Column size=\"91\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"발주일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"도서명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"판형\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"쪽수\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"용도\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"코팅\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"용지\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" text=\"발주처\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"9\" text=\"진행일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:ORDMST_DATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" maskeditformat=\"@@\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"1\" text=\"bind:BOOKMST_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"2\" text=\"bind:PLT_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\"/><Cell col=\"3\" text=\"bind:ORDMST_QTY\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"4\" text=\"bind:ORDDTL_PAGE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"5\" text=\"bind:USE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\"/><Cell col=\"6\" text=\"bind:COAT_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\"/><Cell col=\"7\" text=\"bind:PPR_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\"/><Cell col=\"8\" text=\"bind:CUST_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\"/><Cell col=\"9\" text=\"bind:ORDDTL_RUNDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"mask\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"mask\" calendardateformat=\"yy-MM-dd\" calendareditformat=\"yy-MM-dd\" calendardisplaynulltype=\"nulltext\" calendarautoselect=\"true\" calendardisplaynulltext=\"__-__-__\" maskeditformat=\"##-##-##\"/></Band></Format></Formats>");
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
        this.addIncludeScript("MK132.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK132.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK132.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerDML, vPerDel;
        var vStr;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var sDateOKChk = false;
        var bMsgView   = false;

        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", nexacro.getApplication().gv_selectMenu);

        	vPerSel = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_SELECT");
        	vPerDML = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_DML");
        	vPerDel = "D";

        	var d = new Date();
        	var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");												   //오늘날짜 setting
        	var strPreDay = Eco.date.getMaskFormatString(Eco.date.getFirstDate(Eco.date.addMonth(d, -1)), "yyyyMMdd"); //오늘 기준 한달 전 1일 setting

        	//DML권한 체크 및 컴포넌트 ENABLE처리
        	if(vPerDML != "1")
        		this.fctn_User_Enabled(this, false);

        	if(vPerSel = "1")
        		this.fctn_MakeClose_Search();
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

        //#######################################################
        //	마감일자 조회
        //#######################################################
        this.fctn_MakeClose_Search = function()
        {

        	in_ds 	= "dsMakeClose=dsMakeClose";
        	out_ds 	= "dsMakeClose=dsMakeClose";
        	str_url = "JSP/mk/make_closing.jsp";
            str_arg = "MKCLS_YM=" + nexacro.wrapQuote( ) + " MKCLS_STARTDATE=" + nexacro.wrapQuote( );

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, "", "fnCallbackClosingSelect", false, "S", false, this);
        }

        this.fnCallbackClosingSelect = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}
        };

        //조회버튼 클릭
        this.btnSearch_onclick = function(obj,e)
        {
        	in_ds 	= "dsNotProgressList=dsNotProgressList";
        	out_ds 	= "dsNotProgressList=dsNotProgressList";
        	str_url = "JSP/mk/mk132f_not_progress_order_list.jsp";
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, "", "fnCallbackSelect", false, "S", false, this);

        };


        this.fnCallbackSelect = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{
        		if(this.dsNotProgressList.rowcount == 0)
        			alert("조회된 자료가 없습니다.");

        		this.grdList.setCellPos(9, 0);
        		this.grdList.showEditor(true);
        	}
        };

        //저장버튼이벤트
        this.btnSave_onclick = function(obj,e)
        {

        	in_ds = "input=dsNotProgressList:U";
        	vStr = vPerDML;
        	this.gfn_TransactionP("save", "JSP/mk/mk131f_orddtl_rundate_dml.jsp", in_ds, "", "", "fnSaveCallback", false, vStr, false, this);

        };

        this.fnSaveCallback = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}
        };

        this.grdList_onenterdown = function(obj,e)
        {
        	this.grdList.moveToNextCell();
        	this.grdList.showEditor();
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

        	this.btnSave.set_enable(_set);

        	if(vPerSel != 1)
        		this.btnSearch.set_enable(_set);
        }

        this.dsNotProgressList_canrowposchange = function(obj,e)
        {
        	var sRunDate;

        	if(this.dsNotProgressList.getRowCount()-1 != e.oldrow)
        	{
        		var sCellText = this.grdList.getCellText(e.oldrow, 9);
        		sCellText = nexacro.replaceAll(sCellText, "-", "");
        		sCellText = nexacro.replaceAll(sCellText, "_", "");

        		var sToday = this.dsNotProgressList.getColumn(e.oldrow, "ORDMST_DATE");

        		if(sCellText.length == 0)
        			sRunDate = "";
        		else
        			sRunDate = "20" + sCellText;

        		if(sRunDate.length > 0)
        		{
        			if(sRunDate < sToday || sRunDate < this.dsNotProgressList.getColumn(e.oldrow, "ORDMST_DATE"))
        			{
        				this.dsNotProgressList.setColumn(e.oldrow, "ORDDTL_RUNDATE", "");
        				sDateOKChk = false;
        				bMsgView   = true;
        			}else{
        				this.dsMakeClose.filter("MKCLS_STARTDATE<='" + sRunDate + "'&&MKCLS_ENDDATE>='" + sRunDate + "'");

        				if ((this.dsMakeClose.getColumn(0, "MKCLS_CLOSE") == "0") &&
        			        (this.dsMakeClose.getColumn(0, "MKCLS_MODIFY") == "1"))
        				{
        					this.dsNotProgressList.setColumn(e.oldrow, "ORDDTL_RUNDATE", sCellText);
        					sDateOKChk = true;
        				}else{
        					bMsgView = true;
        					this.dsNotProgressList.setColumn(e.oldrow, "ORDDTL_RUNDATE", "");
        					alert(sRunDate+ " 일은 마감되어 수정할 수 없습니다.");
        					return false;
        				}
        			}
        		}else
        		{
        			sDateOKChk = false;
        			bMsgView   = false;
        		}

        		if(sDateOKChk == true)
        		{
        			this.dsNotProgressList.setColumn(e.oldrow, "EMPLOYEE_ID", gv_sabun);
        			this.btnSave_onclick();
        		}else if(bMsgView == true){
        			alert("날짜지정이 잘못 되었습니다. 다시 확인해 주십시요.");
        		}

        		this.dsMakeClose.filter();
        	}
        };

        this.grdList_onselectchanged = function(obj,e)
        {
        	if(bMsgView == true)
        	{
        		this.grdList.moveToPrevCell();
        		this.grdList.setCellPos(9);
        		this.grdList.showEditor();
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
            this.grdList.addEventHandler("onenterdown",this.grdList_onenterdown,this);
            this.grdList.addEventHandler("onselectchanged",this.grdList_onselectchanged,this);
            this.dsNotProgressList.addEventHandler("canrowposchange",this.dsNotProgressList_canrowposchange,this);
        };
        this.loadIncludeScript("MK132.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
