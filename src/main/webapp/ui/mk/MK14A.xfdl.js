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
            this.set_titletext("정기지출분 결의서");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(510,210);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPprInList", this);
            obj.set_keystring("CUST,PPR_CUST");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CUST\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_PPR_CUST\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PAPER\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_QTY\" type=\"FLOAT\" size=\"256\" prop=\"SUM\"/><Column id=\"PPR_WEIGHT\" type=\"FLOAT\" size=\"256\" prop=\"SUM\"/><Column id=\"PPR_AMOUNT\" type=\"INT\" size=\"256\" prop=\"SUM\"/><Column id=\"PPR_VAT\" type=\"INT\" size=\"256\" prop=\"SUM\"/><Column id=\"PPR_TOTAL_AMT\" type=\"INT\" size=\"256\" prop=\"SUM\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">비용별 업체 리스트</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">비용별 후가공 세부 리스트</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">비용별 업체 리스트(이러닝만)</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","12","10","398","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("정기지출분 결의서");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","418","110","80","80",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose","463","25","31","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_image("url(\'Img::icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("calYyMm","101","80","136","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_editformat("yyyy-MM");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stYyyyMm","13","80","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회연월");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Button("btnUp","237","80","21","17",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("▲");
            obj.set_background("lightsteelblue");
            obj.set_font("bold 12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnDown","237","98","21","17",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("▼");
            obj.set_background("lightsteelblue");
            obj.set_font("bold 12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("stPaper00","13","117","85","73",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("출력구분");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Radio("rdGubun","101","117","299","73",null,null,null,null,null,null,this);
            obj.set_taborder("9");
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
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",510,210,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK14A.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK14A.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("MK14A.xfdl","Lib::Lib_mk.xjs");
        this.registerScript("MK14A.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_mk.xjs"); /*include "Lib::Lib_mk.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel;
        var vStr, rdUrl, rdParam;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var gv_urlRdDataServer = nexacro.getApplication().gv_urlRdDataServer;

        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", nexacro.getApplication().gv_selectMenu);

        	vPerSel = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_SELECT");

        	if(vPerSel != "1")
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

        };

        //레포트 출력 이벤트
        this.btnPrt_onclick = function(obj,e)
        {

        	if(this.rdGubun.value == 3){
        		rdUrl = gv_svcUrl + "rpt/mk/MK14A_E.mrd";
        		rdParam = "/ragentpath ["+ gv_urlRdDataServer +"]"+ " /rp [" + this.calYyMm.value.substr(0, 6) + "] [0]";
        	}else{
        		rdUrl = gv_svcUrl + "rpt/mk/MK14A.mrd";
        		rdParam = "/ragentpath ["+ gv_urlRdDataServer +"]"+ " /rp [" + this.calYyMm.value.substr(0, 6) + "] [" +  this.rdGubun.index + "]";
        	}

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
            this.btnSearch.addEventHandler("onclick",this.btnPrt_onclick,this);
            this.ImgClose.addEventHandler("onclick",this.ImgClose_onclick,this);
            this.btnUp.addEventHandler("onclick",this.btnUp_onclick,this);
            this.btnDown.addEventHandler("onclick",this.btnDown_onclick,this);
        };
        this.loadIncludeScript("MK14A.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
