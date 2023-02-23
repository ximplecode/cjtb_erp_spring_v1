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
            this.set_titletext("용지마감");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(470,280);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">거래처 월마감</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">용지수불 마감</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">거래처 용지수불 연마감</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMakeClose", this);
            obj._setContents("<ColumnInfo><Column id=\"MKCLS_YM\" type=\"STRING\" size=\"6\"/><Column id=\"MKCLS_STARTDATE\" type=\"STRING\" size=\"8\"/><Column id=\"MKCLS_ENDDATE\" type=\"STRING\" size=\"8\"/><Column id=\"MKCLS_CLOSE\" type=\"STRING\" size=\"1\"/><Column id=\"MKCLS_MODIFY\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","12","10","398","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("용지마감");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","373","77","80","80",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("마감");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose","418","16","31","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_image("url(\'Img::icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stYyyyMm","16","175","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("마감연월");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Calendar("calYyMm","stYyyyMm:3","175","136","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_editformat("yyyy-MM");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnUp","240","175","21","17",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("▲");
            obj.set_background("lightsteelblue");
            obj.set_font("bold 12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnDown","240","193","21","17",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("▼");
            obj.set_background("lightsteelblue");
            obj.set_font("bold 12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Radio("rdGubun","16","74","345","86",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("dsGubun");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("horizontal");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_background("lightsteelblue");
            obj.set_color("white");
            obj.set_fittocontents("none");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_rowcount("3");
            obj.set_columncount("1");
            obj.set_text("비용별 업체 리스트");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stDate","16","213","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("마감일자");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate","stDate:3","213","161","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEDate","calSDate:3","213","160","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",470,280,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK157.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK157.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK157.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerDML;
        var vStr;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");

        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", nexacro.getApplication().gv_selectMenu);

        	vPerSel = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_SELECT");
        	vPerDML = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_DML");

        	if(vPerSel != "1" || vPerDML != "1")
        		this.fctn_User_Enabled(this, false);

        	if(vPerSel = "1"){
        		var d = new Date();
        		var strToDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");						//오늘날짜
        		var strToDay  = strToDay.substr(0,6);
        		this.calYyMm.set_value(strToDay);
        		this.fctn_MakeClose_Search();
        	}
        };

        //#######################################################
        //	마감일자 조회
        //#######################################################
        this.fctn_MakeClose_Search = function()
        {
        	if(this.calYyMm.value == "" || Eco.isUndefined(this.calYyMm.value) == true || this.calYyMm.value.substr(0,6).length != 6)
        	{
        		this.calYyMm.setFocus();
        		alert("마감년월을 입력하여 주십시요.");
        		return false;
        	}

        	str_arg = "MKCLS_YM=" + nexacro.wrapQuote()+ " MKCLS_STARTDATE=" +nexacro.wrapQuote(this.calYyMm.value);
        	this.gfn_TransactionP("select", "JSP/mk/make_closing.jsp", "dsMakeClose=dsMakeClose", "dsMakeClose=dsMakeClose", str_arg, "", false, "S", false, this);

        	this.calSDate.set_value(this.dsMakeClose.getColumn(0, "MKCLS_STARTDATE"));
        	this.calEDate.set_value(this.dsMakeClose.getColumn(0, "MKCLS_ENDDATE"));
        }

        //마감하기 버튼
        this.btnSearch_onclick = function(obj,e)
        {
        	if(this.calSDate.value == "" || Eco.isUndefined(this.calSDate.value) == true || this.calSDate.value.length != 8)
        	{
        		alert("마감일자를 정확히 입력해 주세요.");
        		this.calSDate.setFocus();
        		return false;
        	}

        	if (this.calEDate.value == "" || Eco.isUndefined(this.calEDate.value) == true || this.calEDate.value.length != 8 )
        	{
        		alert("마감일자를 정확히 입력해 주세요.");
        		this.calEDate.setFocus();
        		return false;
        	}

        	if(this.calSDate.value.substr(0, 4) != this.calEDate.value.substr(0, 4)){
        		alert("검색연도가 다릅니다. 수정후 다시 입력 하시길 바랍니다.");
        		return false;
        	}

        	var sMON_00		= "";
        	var sMONTH		= "";
        	var sPREMONTH	= "";
        	var sMON_TDATE	= "";
        	var pMON_SDATE	= "";
        	var pMON_EDATE	= "";

        	//addmonth + 1 처리
        	var dFrom = new Date(this.calYyMm.value.substring(0,4), this.calYyMm.value.substring(4,6)-1, this.calYyMm.value.substring(6,8));
        	dFrom.addMonth(1);
        	var dMonth = dFrom.getMonth()+1;

        	if(dMonth.toString().length == 1)
        	{
        		dMonth = "0"+dMonth;
        	}
        	var dTo = dFrom.getYear() + ""+ dMonth;

        	var vEDate;
        	if(this.calEDate.value.substr(4, 4) == "1231")
        		vEDate = this.calEDate.value.substr(0,4)+"1299";
        	else
        		vEDate = this.calEDate.value;

        	switch(this.rdGubun.index) {
        	case 0 :	//거래처 월마감
        		sMON_00		= dTo;
        		sMONTH		= this.calYyMm.value.substr(0, 6);
        	    pMON_SDATE	= this.calSDate.value;
        	    pMON_EDATE	= this.calEDate.value;
        		break;
        	case 1 :	//용지수불 월마감
        		sMON_00 	= dTo;
        	    sMON_TDATE	= this.calSDate.value.substr(0, 6)+"01";
        	    pMON_SDATE	= this.calSDate.value.substr(0, 4)+"0100";
        	    pMON_EDATE	= vEDate;
        		break;
        	case 2 :	//거래처 용지수불 연마감
        		sMON_00 = dTo.substr(0, 4)+ "0100";
        	    pMON_SDATE	= this.calSDate.value.substr(0, 4)+"0100";
        	    pMON_EDATE	= this.calEDate.value.substr(0,4)+"1299";
        		break;
        	}

        	str_url = "JSP/mk/mk157f_paper_close_dml.jsp";
        	str_arg = "pMON_00=" + nexacro.wrapQuote(sMON_00) +
        			 " pMONTH=" + nexacro.wrapQuote(sMONTH) +
        			 " pPREMONTH=" + nexacro.wrapQuote(sPREMONTH) +
        			 " pMON_TDATE=" + nexacro.wrapQuote(sMON_TDATE) +
        			 " pMON_SDATE=" + nexacro.wrapQuote(pMON_SDATE) +
        			 " pMON_EDATE=" + nexacro.wrapQuote(pMON_EDATE) +
        			 " pPROC_SET=" + nexacro.wrapQuote(this.rdGubun.index);

        	this.gfn_TransactionP("update", str_url, "", "", str_arg, "fnCallbackTotalUpdate", false, vPerDML, false, this);

        };

        this.fnCallbackTotalUpdate = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
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

        	if(vPerSel != 1){
        		this.btnUp.set_enable(_set);
        		this.btnDown.set_enable(_set);
        	}

        	if(vPerDML != 1)
        		this.btnSearch.set_enable(_set);
        }

        this.btnUp_onclick = function(obj,e)
        {
        	var strUpDate = Eco.date.addMonth(this.calYyMm.value, +1);
        	strUpDate = strUpDate.substr(0, 6);
        	this.calYyMm.set_value(strUpDate);

        	this.fctn_MakeClose_Search();
        };

        this.btnDown_onclick = function(obj,e)
        {
        	var strDownDate = Eco.date.addMonth(this.calYyMm.value, -1);
        	strDownDate = strDownDate.substr(0, 6);
        	this.calYyMm.set_value(strDownDate);

        	this.fctn_MakeClose_Search();
        };

        this.ImgClose_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkMain_onload,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.ImgClose.addEventHandler("onclick",this.ImgClose_onclick,this);
            this.btnUp.addEventHandler("onclick",this.btnUp_onclick,this);
            this.btnDown.addEventHandler("onclick",this.btnDown_onclick,this);
        };
        this.loadIncludeScript("MK157.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
