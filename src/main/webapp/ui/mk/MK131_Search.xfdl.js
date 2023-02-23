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
            this.set_titletext("발주서 조회 POPUP");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(530,320);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGubun1", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">발주번호별</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">도서코드별</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrdMst", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"ORDMST_DATENO\" type=\"STRING\" size=\"15\"/><Column id=\"ORDMST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ORDMST_NO\" type=\"STRING\" size=\"4\"/><Column id=\"ORDMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ORDMST_QTY\" type=\"INT\" size=\"6\"/><Column id=\"ORDER_TOTAL\" type=\"INT\" size=\"6\"/><Column id=\"ORDMST_REVIVAL\" type=\"STRING\" size=\"1\"/><Column id=\"REVIVAL\" type=\"STRING\" size=\"4\"/><Column id=\"PLT_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"PLT_NAME\" type=\"STRING\" size=\"15\"/><Column id=\"PLT_PAGE\" type=\"INT\" size=\"3\"/><Column id=\"PLT_PRNSIGNATURE\" type=\"INT\" size=\"3\"/><Column id=\"BOOKMST_BODYPAGE\" type=\"INT\" size=\"5\"/><Column id=\"BOOKMST_SIGNATURE\" type=\"DECIMAL\" size=\"6\"/><Column id=\"BND_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"BND_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"ORDMST_REMARK\" type=\"STRING\" size=\"70\"/><Column id=\"BOOKMST_REMARK\" type=\"STRING\" size=\"70\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"PDTDTL_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"PDTDTL_NUMBER\" type=\"STRING\" size=\"4\"/><Column id=\"PDTDTL_DTLNUMBER\" type=\"STRING\" size=\"3\"/><Column id=\"PDTDTL_PDT_QTY\" type=\"INT\" size=\"6\"/><Column id=\"PDTDTL_WANT_INDATE\" type=\"CHAR\" size=\"8\"/><Column id=\"TONG_QTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBookMst", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","12","10","308","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("작업발주서 조회");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edSOrdNo","98","113","160","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stCust",null,"113","85","35","edSOrdNo:3",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("발주번호");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEDate","261","73","160","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate",null,"73","160","35","calEDate:3",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stDate","10","73",null,"35","calSDate:3",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("발주일자");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Radio("rdGubun1","98","273","323","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("dsGubun1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("vertical");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_background("lightsteelblue");
            obj.set_color("white");
            obj.set_fittocontents("none");
            obj.set_wordSpacing("0px");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_columncount("0");
            obj.set_rowcount("0");
            obj.set_text("발주번호별");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose",null,null,"31","30","3.40%","82.81%",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_image("url(\'Img::icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edEOrdNo","261","113","160","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stCust1_00","10","193","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("도서년판");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookYear","98","193","88","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stCust1_00_00","10","233","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("도서명");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edBookNm","98","233","323","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stCust1_00_00_00","9","273","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("정렬방법");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookCode","98","153","160","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edEBookCd","261","153","160","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnBook_Search","10","153","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("도서번호");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"74","67","59","21",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #3cbcb8");
            obj.set_defaultbutton("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",530,320,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK131_Search.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK131_Search.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("MK131_Search.xfdl","Lib::Lib_mk.xjs");
        this.registerScript("MK131_Search.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_mk.xjs"); /*include "Lib::Lib_mk.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vStr, rdUrl, rdParam;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");


        this.MkMain_onload = function(obj,e)
        {
        	this.dsOrdMst.copyData(this.parent.dsParam1);

        	var d = new Date();
        	var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");							//오늘날짜 setting
        	//var strPreDay = Eco.date.getMaskFormatString(Eco.date.getFirstDate(d), "yyyyMMdd"); //이번달 1일 setting
        	var strPreDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");

        	this.calSDate.set_value(strPreDay);
        	this.calEDate.set_value(strtoDay);
        	this.calSDate.setFocus();

        };

        //조회버튼 이벤트
        this.btnSearch_onclick = function(obj,e)
        {
        	if( (Eco.isUndefined(this.calSDate.value) == true || this.calSDate.value == "") &&
        		(Eco.isUndefined(this.calEDate.value) == true || this.calEDate.value == "") &&
        		(Eco.isUndefined(this.edSOrdNo.value) == true || this.edSOrdNo.value == "") &&
        		(Eco.isUndefined(this.edEOrdNo.value) == true || this.edEOrdNo.value == "") &&
        		(Eco.isUndefined(this.edt_bookCode.value) == true || this.edt_bookCode.value == "") &&
        		(Eco.isUndefined(this.edEBookCd.value) == true || this.edEBookCd.value == "") &&
        		(Eco.isUndefined(this.edt_bookYear.value) == true || this.edt_bookYear.value == "") &&
        		(Eco.isUndefined(this.edBookNm.value) == true || this.edBookNm.value == "")
        	  ){

        		alert("조회할 조건을 입력해 주십시요.");
        		this.calSDate.setFocus();
        		return false;
        	  }

        	str_url = "JSP/mk/mk131f_order_mst.jsp";
        	in_ds = "dsOrdMst=dsOrdMst";
        	out_ds = "dsOrdMst=dsOrdMst";
        	str_arg ="sORDMST_DATE=" +nexacro.wrapQuote(this.calSDate.value);
        	str_arg +=" eORDMST_DATE=" +nexacro.wrapQuote(this.calEDate.value);
        	str_arg +=" sORDMST_DATENO=" +nexacro.wrapQuote(this.edSOrdNo.value);
        	str_arg +=" eORDMST_DATENO=" +nexacro.wrapQuote(this.edEOrdNo.value);
        	str_arg +=" sBOOKMST_CODE=" +nexacro.wrapQuote(this.edt_bookCode.value);
        	str_arg +=" eBOOKMST_CODE=" +nexacro.wrapQuote(this.edEBookCd.value);
        	str_arg +=" BOOKMST_YEAR=" +nexacro.wrapQuote(this.edt_bookYear.value);
        	str_arg +=" BOOKMST_NAME=" +nexacro.wrapQuote(this.edBookNm.value);
        	str_arg +=" ORDER=" +nexacro.wrapQuote(this.rdGubun1.value);
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_Select", false, "S", false, this);
        };

        this.Callback_Select = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}

        	if(this.dsOrdMst.rowcount == 0)
        	{
        		alert("조회된 자료가 없습니다.");
        		return false;
        	}

        	this.opener.dsOrdMst.copyData(this.dsOrdMst);
        	this.close();
        };


        this.ImgClose_onclick = function(obj,e)
        {
        	this.close();
        };


        this.btnBook_Search_onclick = function(obj,e)
        {
        	var objParam = {dsParam1:this.dsBookMst}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupBook", objParam, "mk::MKBook_SearchF.xfdl", "popupCallback", this, 10, 58, 450, 400);
        };

        this.popupCallback = function(){

        	this.edt_bookCode.set_value(this.dsBookMst.getColumn(0, "BOOKMST_CODE"));
        	this.edt_bookYear.set_value(this.dsBookMst.getColumn(0, "BOOKMST_YEAR"));
        }

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
        			else
        				this.LocalFctn_OnKeyDown(obj, e.keycode);
        		}else if(curObj == "[object Edit]" || curObj == "[object MaskEdit]")
        			curObj.setSelect(0, -1);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkMain_onload,this);
            this.edSOrdNo.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.calEDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.calSDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.ImgClose.addEventHandler("onclick",this.ImgClose_onclick,this);
            this.edEOrdNo.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.edt_bookYear.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.edBookNm.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.edt_bookCode.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.edEBookCd.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.btnBook_Search.addEventHandler("onclick",this.btnBook_Search_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("MK131_Search.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
