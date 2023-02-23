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
            this.set_titletext("FAX 발송현황 POPUP");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFaxList", this);
            obj._setContents("<ColumnInfo><Column id=\"DEST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVER_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REPORT_RES_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"ERROR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ERROR_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">전체</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">성공</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">실패</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","8","10","352","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("FAX전송결과(발주)");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"49","80","40","105",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate","583","33","140","35",null,null,null,null,null,null,this);
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stSearch",null,"33","100","35","503",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색기간");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","8","110","98.33%",null,null,"20",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsFaxList");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"111\"/><Column size=\"133\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"129\"/><Column size=\"79\"/><Column size=\"100\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"착신번호\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"업체명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"전송시간\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"전송완료시간\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"리포트완료시간\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"페이지\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"전송결과\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:PHONE_NUMBER\" displaytype=\"normal\" combodataset=\"ds_mk_UseType\" combocodecol=\"USE_TYPE_CODE\" combodatacol=\"USE_TYPE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" cssclass=\"expr:ERROR_CODE!=&apos;0&apos;?&quot;BgChange4&quot;:&quot;&quot; \"/><Cell col=\"1\" text=\"bind:DEST_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" edittype=\"none\" textAlign=\"center\" cssclass=\"expr:ERROR_CODE!=&apos;0&apos;?&quot;BgChange4&quot;:&quot;&quot; \"/><Cell col=\"2\" text=\"bind:SEND_DATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" cssclass=\"expr:ERROR_CODE!=&apos;0&apos;?&quot;BgChange4&quot;:&quot;&quot; \"/><Cell col=\"3\" text=\"bind:DELIVER_DATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" cssclass=\"expr:ERROR_CODE!=&apos;0&apos;?&quot;BgChange4&quot;:&quot;&quot; \"/><Cell col=\"4\" text=\"bind:REPORT_RES_DATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" cssclass=\"expr:ERROR_CODE!=&apos;0&apos;?&quot;BgChange4&quot;:&quot;&quot; \"/><Cell col=\"5\" text=\"bind:FAX_PAGE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"number\" displaytype=\"normal\" editautoselect=\"true\" cssclass=\"expr:ERROR_CODE!=&apos;0&apos;?&quot;BgChange4&quot;:&quot;&quot; \"/><Cell col=\"6\" text=\"bind:RESULT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"number\" maskeditformat=\"#,###\" displaytype=\"normal\" editautoselect=\"true\" maskeditautoselect=\"true\" cssclass=\"expr:ERROR_CODE!=&apos;0&apos;?&quot;BgChange4&quot;:&quot;&quot; \"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose","1001","52","31","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_image("url(\'Img::icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEDate","728","33","140","35",null,null,null,null,null,null,this);
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_taborder("7");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdGubun",null,"73","391","35","212",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("dsGubun");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("vertical");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_background("lightsteelblue");
            obj.set_color("white");
            obj.set_fittocontents("none");
            obj.set_wordSpacing("20px");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_text("단가 \'0\'인 건  ");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("DivFailLog","260","99","510","451",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("#e8e7e3");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edCust","82","59","173","33",null,null,null,null,null,null,this.DivFailLog.form);
            obj.set_taborder("0");
            obj.set_font("14px/normal \"함초롬바탕 확장\"");
            obj.set_enable("true");
            obj.set_background("white");
            obj.set_readonly("true");
            this.DivFailLog.addChild(obj.name, obj);

            obj = new Edit("edNumber","82","94","426","33",null,null,null,null,null,null,this.DivFailLog.form);
            obj.set_taborder("1");
            obj.set_font("14px/normal \"함초롬바탕 확장\"");
            obj.set_enable("true");
            obj.set_background("white");
            obj.set_readonly("true");
            this.DivFailLog.addChild(obj.name, obj);

            obj = new TextArea("txaFail","82","128","426","312",null,null,null,null,null,null,this.DivFailLog.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_background("white");
            obj.set_font("14px/normal \"함초롬바탕 확장\"");
            this.DivFailLog.addChild(obj.name, obj);

            obj = new Static("stCust","3","58","77","33",null,null,null,null,null,null,this.DivFailLog.form);
            obj.set_taborder("3");
            obj.set_text("업체명");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.DivFailLog.addChild(obj.name, obj);

            obj = new Static("stNumber","3","93","77","33",null,null,null,null,null,null,this.DivFailLog.form);
            obj.set_taborder("4");
            obj.set_text("착신번호");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.DivFailLog.addChild(obj.name, obj);

            obj = new Static("StFail","3","128","77","313",null,null,null,null,null,null,this.DivFailLog.form);
            obj.set_taborder("5");
            obj.set_text("실패사유");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.DivFailLog.addChild(obj.name, obj);

            obj = new Static("Static02","7","10","167","41",null,null,null,null,null,null,this.DivFailLog.form);
            obj.set_taborder("6");
            obj.set_text("실패내역");
            obj.set_color("#7fb39d");
            obj.set_font("bold 25px/normal \"함초롬바탕 확장B\"");
            this.DivFailLog.addChild(obj.name, obj);

            obj = new Button("btn_close","428","11",null,"31","14",null,null,null,null,null,this.DivFailLog.form);
            obj.set_taborder("7");
            obj.set_text("닫기");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.DivFailLog.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","DivFailLog.form.edCust","value","dsFaxList","DEST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","DivFailLog.form.edNumber","value","dsFaxList","PHONE_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MKFax_ResultF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MKFax_ResultF.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MKFax_ResultF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerDML, vPerDel;
        var vStr;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");

        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", nexacro.getApplication().gv_selectMenu);

        	vPerSel = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_SELECT");
        	vPerDML = "U";
        	vPerDel = "D";

        	var d = new Date();
        	var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");			//오늘날짜 setting
        	this.calSDate.set_value(strtoDay);
        	this.calEDate.set_value(strtoDay);

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
        		alert("조회일자를 입력해 주세요.");
        		this.calSDate.setFocus();
        		return false;
        	}

        	if(this.calEDate.value == "" )
        	{
        		alert("조회일자를 입력해 주세요.");
        		this.calEDate.setFocus();
        		return false;
        	}

        	if(vPerSel = "1")
        	{
        		in_ds 	= "dsFaxList=dsFaxList";
        		out_ds 	= "dsFaxList=dsFaxList";
        		str_url = "JSP/mk/mk131f_result_kt_fax_list.jsp";
        		str_arg = "SDATE=" + nexacro.wrapQuote(this.calSDate.value)
        				+ " EDATE=" + nexacro.wrapQuote(this.calEDate.value)
        				+ " SEARCHTYPE=" + nexacro.wrapQuote(this.rdGubun.value)
        				+ " CPRTYPE=" + nexacro.wrapQuote("(주)천재교육")
        				+ " SUBJECT=" + nexacro.wrapQuote("제작관리 팩스발송");

        		this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnCallbackSelect", false, "S", false, this);
        	}
        };

        this.fnCallbackSelect = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{
        		if(this.dsFaxList.rowcount == 0)
        			alert("조회된 자료가 없습니다.");
        		else{

        			//this.grdList.setCellPos(8, 0);
        			//this.grdList.showEditor(true);

        		}
        	}
        };


        this.grdList_oncelldblclick = function(obj,e)
        {
        	if(e.cell == 6 && this.dsFaxList.getColumn(this.dsFaxList.rowposition, "RESULT") == "실패"){
        		this.DivFailLog.set_visible(true);
        		this.DivFailLog.form.txaFail.set_value(this.dsFaxList.getColumn(this.dsFaxList.rowposition, "ERROR_CONTENT"));
        	}
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

        this.ImgClose_onclick = function(obj,e)
        {
        	this.close();
        };


        this.rdGubun_onitemchanged = function(obj,e)
        {
        	this.btnSearch_onclick();
        };

        this.DivFailLog_btn_close_onclick = function(obj,e)
        {
        	this.DivFailLog.set_visible(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkMain_onload,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.grdList.addEventHandler("onheadclick",this.grdList_onheadclick,this);
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.ImgClose.addEventHandler("onclick",this.ImgClose_onclick,this);
            this.rdGubun.addEventHandler("onitemchanged",this.rdGubun_onitemchanged,this);
            this.DivFailLog.form.btn_close.addEventHandler("onclick",this.DivFailLog_btn_close_onclick,this);
        };
        this.loadIncludeScript("MKFax_ResultF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
