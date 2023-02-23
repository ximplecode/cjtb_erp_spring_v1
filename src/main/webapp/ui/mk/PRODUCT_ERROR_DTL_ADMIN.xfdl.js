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
            this.set_titletext("제품 A/S접수 세부내용");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,780);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsErrorDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"ERROR_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ERROR_NO\" type=\"STRING\" size=\"3\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"6\"/><Column id=\"BUSE_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"256\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"ERROR_CONTENT\" type=\"STRING\" size=\"1000\"/><Column id=\"ERROR_REASON\" type=\"STRING\" size=\"1000\"/><Column id=\"IMPROVEMENT\" type=\"STRING\" size=\"1000\"/><Column id=\"RESULT_TYPE\" type=\"STRING\" size=\"1\"/><Column id=\"OK_ID\" type=\"STRING\" size=\"6\"/><Column id=\"OK_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"OK_CHK\" type=\"STRING\" size=\"1\"/><Column id=\"RECEIVE_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ORDER_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"1\"/><Column id=\"RESULT_COMMENT\" type=\"STRING\" size=\"1000\"/><Column id=\"RECEPT_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"BOOKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">A/S접수</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">사고접수</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGubun2", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">인쇄</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">제본</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">후가공</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">편집</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"NAME\">디자인</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBookMst", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edt_bookYear","229","175","48","35",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnBookSearch","edt_bookYear:3","175","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #3cbcb8");
            obj.set_defaultbutton("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","8","7","352","65",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("제품 A/S접수 세부내용");
            obj.set_color("#7fb39d");
            obj.set_font("bold 30px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Static("stDate","9","101","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("접수일자");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate","stDate:3","101","160","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stGubun","9","138","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("접수구분");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Static("stBook","9","175","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("도서코드");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Static("stBuseo","9","212","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("접수처");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Static("stErrorCont","9","249","85","100",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("오류내용");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Static("stWriter","319","101","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("작성자");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Static("stBookNm","319","175","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("도서명");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Static("stQty","319","212","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("수량");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Radio("rdGubun","stGubun:2","138","251","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_innerdataset("dsGubun");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("horizontal");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("lightslategray");
            obj.set_fittocontents("none");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_rowcount("2");
            obj.set_columncount("2");
            obj.set_text("단가 \'0\'인 건  ");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edBookSeq",null,"175","40","35","edt_bookYear:1",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("3");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookCode",null,"175","90","35","edBookSeq:1",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("10");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edBuseo","stBuseo:3","212","160","35",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("10");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaErrCont","stErrorCont:3","249","595","100",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_wordWrap("char");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edWriter","stWriter:3","101","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("10");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edBookNm","stBookNm:3","174","285","35",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("left");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edQty","stQty:3","212","160","35",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("10");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("StCause","9","391","85","100",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("오류원인");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("StAction","9","493","85","100",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("결과조치");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("stImprove","9","596","85","100",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("개선사항");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("StKind","9","699","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("내용분류");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaCause","StCause:3","391","595","100",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_wordWrap("char");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaAction","StAction:3","493","595","100",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_wordWrap("char");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaImprove","stImprove:3","596","595","100",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_wordWrap("char");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdGubun2","96","701","596","35",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_innerdataset("dsGubun2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("horizontal");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("#7fb39d");
            obj.set_fittocontents("none");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_rowcount("1");
            obj.set_columncount("6");
            obj.set_text("단가 \'0\'인 건  ");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","10","59","352","49",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("◈ 접수내용");
            obj.set_color("dimgray");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","9","352","352","49",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("◈ 제작오류 처리결과");
            obj.set_color("dimgray");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Static("stNotice","13","735","681","48",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_color("crimson");
            obj.set_font("bold 15px/normal \"함초롬바탕 확장B\"");
            obj.set_text("※ 1년간 발생되는 오류 경/중에 따라 주의, 경고 조치함.   \r\n    주의 3회는 경고1회에 해당. 경고3회 이상은 협업관계 재검토 고려.");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose","662","12","31","30",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_image("url(\'Img::icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,"8","80","40","141",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("취소");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrt",null,"8","80","40","54",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("출력");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"52","80","40","100",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("삭제");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_FOK",null,"52","80","40","13",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("확인");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK",null,"8","80","40","140",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("접수완료");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"52","80","40","13",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("저장");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,780,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","txaErrCont","value","dsErrorDtl","ERROR_CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","txaCause","value","dsErrorDtl","ERROR_REASON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","txaAction","value","dsErrorDtl","RESULT_COMMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","txaImprove","value","dsErrorDtl","IMPROVEMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","calSDate","value","dsErrorDtl","RECEIVE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edWriter","value","dsErrorDtl","EMPLOYEE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","rdGubun","value","dsErrorDtl","GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_bookCode","value","dsErrorDtl","BOOKMST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edBookSeq","value","dsErrorDtl","BOOKMST_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_bookYear","value","dsErrorDtl","BOOKMST_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edBookNm","value","dsErrorDtl","BOOKNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","rdGubun2","value","dsErrorDtl","RESULT_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edBuseo","value","dsErrorDtl","RECEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edQty","value","dsErrorDtl","QTY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PRODUCT_ERROR_DTL_ADMIN.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("PRODUCT_ERROR_DTL_ADMIN.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("PRODUCT_ERROR_DTL_ADMIN.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var rWORK_TYPE, rERROR_DATE, rERROR_NO, rOK_CHK, rRESULT, rPRT;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var str_url, in_ds, out_ds, str_arg;
        var vStr;
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var gv_urlRdDataServer = nexacro.getApplication().gv_urlRdDataServer;

        this.MkMain_onload = function(obj,e)
        {
        	rWORK_TYPE = this.parent.dsParam1;
        	rERROR_DATE = this.parent.dsParam2;
        	rERROR_NO = this.parent.dsParam3;
        	rOK_CHK = this.parent.dsParam4;
        	rRESULT = this.parent.dsParam5;
        	rPRT = this.parent.dsParam6;

        	if(rWORK_TYPE == 1)
        	{
        		this.stNotice.set_visible(true);
        		this.stImprove.set_text("개선사항");
        	}else{
        		this.stNotice.set_visible(false);
        		this.stImprove.set_text("개선사항\n(준수)");
        	}

        	this.SET_BTN_CONTROLL();
        	this.getErrorList();
        	this.txaCause.setFocus();

        };

        this.getErrorList = function()
        {
        	str_url = "JSP/mk/product_new_error_dtl_select.jsp";
        	in_ds 	= "dsErrorDtl=dsErrorDtl";
        	out_ds 	= "dsErrorDtl=dsErrorDtl";
        	str_arg = "ERROR_DATE=" + nexacro.wrapQuote(rERROR_DATE) +
        	          " ERROR_NO=" + nexacro.wrapQuote(rERROR_NO) +
        			  " SEARCHTYPE=" + nexacro.wrapQuote(rWORK_TYPE);

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnCallbackSelect", false, "S", false, this);

        };

        this.fnCallbackSelect = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{
        		this.SET_BTN_CONTROLL();
        	}
        };

        //버튼셋팅
        this.SET_BTN_CONTROLL = function()
        {
            if(rOK_CHK == "0" && rRESULT == "1")		//접수등록상태
        	{
        		this.btnCancel.set_visible(false);		//취소
        		this.btnOK.set_visible(true);			//접수완료
        		this.btnDel.set_visible(true);			//삭제
        		this.btnSave.set_visible(true);			//저장
        		this.btn_FOK.set_visible(false);		//확인(권한에 따른)
        	}
            else if(rOK_CHK == "1" && rRESULT == "1")	//접수완료상태
        	{
        		this.btnCancel.set_visible(true);		//취소
        		this.btnOK.set_visible(false);			//접수완료
        		this.btnDel.set_visible(false);			//삭제
        		this.btnSave.set_visible(false);		//저장
        		this.btn_FOK.set_visible(false);		//확인(권한에 따른)
        	}
        	else if(rOK_CHK > "1" && rRESULT == "1")	//접수완료
        	{
        		this.btnCancel.set_visible(false);		//취소
        		this.btnOK.set_visible(false);			//접수완료
        		this.btnDel.set_visible(false);			//삭제
        		this.btnSave.set_visible(false);		//저장
        		this.btn_FOK.set_visible(false);		//확인(권한에 따른)
        	}
        	else
        	{
        		this.btnCancel.set_visible(false);		//취소
        		this.btnOK.set_visible(false);			//접수완료
        		this.btnDel.set_visible(false);			//삭제
        		this.btnSave.set_visible(false);		//저장

        		if(rRESULT == "2" && rOK_CHK != "1"		)//고객센터(황미정)확인한경우
        		{
        			this.btn_FOK.set_visible(false);		//확인버튼없애기
        		}
        		else if(rRESULT == "3" && rOK_CHK != "2")//영업부(양명란)확인한경우
        		{
        			this.btn_FOK.set_visible(false);		//확인버튼없애기
        		}
        		else if((rWORK_TYPE == "1" && rRESULT == "4" && rOK_CHK != "3") ||
        		       (rWORK_TYPE == "2" && rRESULT == "4" && rOK_CHK != "1"))	//차장확인한경우
        		{
        			this.btn_FOK.set_visible(false);		//확인버튼없애기
        		}
        		else if(rRESULT == "5" && rOK_CHK != "4")	//이사확인한경우
        		{
        			this.btn_FOK.set_visible(false);		//확인버튼없애기
        		}
        		else if(rRESULT == "5" && rOK_CHK == "5")	//최종완료
        		{
        			this.btn_FOK.set_visible(false);		//확인버튼없애기
        		}
        		else
        		{
        			this.btn_FOK.set_visible(true);			//확인(권한에 따른)
        		}
        	}

        	//정현석,김정호은 무조건 수정가능하게 풀어주기
        	if(gv_sabun == "C03076" || gv_sabun == "C12165" || gv_sabun == "C10161" || gv_sabun == "C02028")
        	{
        		this.btnSave.set_visible(true);		//저장
        	}

        	//출력 권한없으면 출력버튼 안보이도록 수정
        	if(rPRT != "1")
        		this.btnPrt.set_visible(false);
        }

        //접수완료처리
        this.btnOK_onclick = function(obj,e)
        {
        	if(this.txaCause.value == "" || Eco.isUndefined(this.txaCause.value) == true || this.txaCause.text.length == 0)
        	{
        		alert("오류원인을 입력해주세요!!");
        		this.txaCause.setFocus();
        		return false;
        	}

        	if(this.txaImprove.value == "" || Eco.isUndefined(this.txaImprove.value) == true || this.txaImprove.text.length == 0)
        	{
        		alert("개선사항을 입력해주세요!!");
        		this.txaImprove.setFocus();
        		return false;
        	}

        	if(this.rdGubun2.value == "" || Eco.isUndefined(this.rdGubun2.value) == true || this.rdGubun2.value.length == 0)
        	{
        		alert("내용분류를 선택해 주세요!!");
        		this.rdGubun2.setFocus();
        		return false;
        	}

        	var bRtn = this.confirm("완료처리후에는 수정이 불가능합니다.\n그래도 처리하시겠습니까??", "접수완료처리");

        	if(bRtn == true)
        	{
        		var d = new Date();
        		var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");		//오늘날짜 setting
        		this.dsErrorDtl.setColumn(0, "OK_DATE", strtoDay);
        		this.dsErrorDtl.setColumn(0, "OK_ID", gv_sabun);
        		this.dsErrorDtl.setColumn(0, "OK_CHK", "1");
        		vStr = "U";
        		this.proc_save(vStr);
        	}
        };

        //저장 버튼
        this.btnSave_onclick = function(obj,e)
        {
        	vStr = "U";
        	this.proc_save(vStr);
        };

        this.proc_save = function(vStr)
        {
        	in_ds 	= "input=dsErrorDtl:u";
        	str_url = "JSP/mk/product_new_error_dtl_update.jsp";
        	this.gfn_TransactionP("insert", str_url, in_ds, "", "", "fctn_DtlSaveCallback", false, vStr, false, this);
        }


        this.fctn_DtlSaveCallback = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{
        		this.opener.btnSearch_onclick();
        		this.close();
        	}
        };

        //취소버튼
        this.btnCancel_onclick = function(obj,e)
        {
        	var bRtn = this.confirm("정말 접수완료 취소하시겠습니까??", "취소처리");

        	if(bRtn == true)
        	{
        		this.dsErrorDtl.setColumn(0, "OK_DATE", "");
        		this.dsErrorDtl.setColumn(0, "OK_ID", "");
        		this.dsErrorDtl.setColumn(0, "OK_CHK", "0");
        		vStr = "U";
        		this.proc_save(vStr);
        	}
        };

        //삭제버튼
        this.btnDel_onclick = function(obj,e)
        {
        	var bRtn = this.confirm("정말 삭제 하시겠습니까??", "삭제처리");

        	if(bRtn == true)
        	{
        		this.dsErrorDtl.deleteRow(this.dsErrorDtl.rowposition);
        		vStr = "D";
        		this.proc_save(vStr);
        	}
        };

        //확인버튼
        this.btn_FOK_onclick = function(obj,e)
        {
        	var bRtn = this.confirm("정말 확인처리 하시겠습니까??", "확인처리");

        	if(bRtn == true)
        	{
        		if(gv_sabun == "C12047")
        			this.dsErrorDtl.setColumn(0, "OK_CHK", "2");					//2차(고객센터:황미정)
        		else if(gv_sabun == "C98002")
        			this.dsErrorDtl.setColumn(0, "OK_CHK", "3");					//3차(영업부:양명란)
        		else if(gv_sabun == "C02006")
        			this.dsErrorDtl.setColumn(0, "OK_CHK", "3");					//3차(영업부:김민규)
        		else if(gv_sabun == "C10303")
        			this.dsErrorDtl.setColumn(0, "OK_CHK", "4");					//4차(제작부:조규영)
        		else if(gv_sabun == "C03067")
        			this.dsErrorDtl.setColumn(0, "OK_CHK", "5");					//5차최종(제작부:황성진)

        		vStr = "U";
        		this.proc_save(vStr);
        	}
        };


        this.btnPrt_onclick = function(obj,e)
        {
        	var rdUrl = "";

        	if(rWORK_TYPE == 1)
        		rdUrl = gv_svcUrl + "rpt/mk/MK_PRODUCT_ERROR_RPT.mrd";
        	else
        		rdUrl = gv_svcUrl + "rpt/mk/MK_PRODUCT_ACCIDENT_RPT.mrd";

        	var rdParam = "/ragentpath ["+ gv_urlRdDataServer +"]"+ " /rp [" + rERROR_DATE + "] [" +  rERROR_NO + "]";

        	var vScreenWidth = system.getScreenWidth();

        	if(vScreenWidth >= 1920)
        		vScreenWidth = vScreenWidth/2

        	nexacro.open("popupPrt", "mk::MKRDF.xfdl", this.getOwnerFrame(), {rdUrl:rdUrl, rdParam:rdParam}, "autosize=false", 0, 0, vScreenWidth, system.getScreenHeight(), this);

        };

        this.btnBookSearch_onclick = function(obj,e)
        {
        	var vBookCd, vBookYear;
        	vBookCd = this.edt_bookCode.value;
        	vBookYear = this.edt_bookYear.value;
        	this.dsBookMst.clearData();
        	var objParam = {dsParam1:this.dsBookMst
        				   ,dsParam2:"MK14B"
        				   ,dsParam3:vBookCd
        				   ,dsParam4:vBookYear}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupBook", objParam, "mk::MKBook_SearchF.xfdl", "popupCallback", this, 10, 58, 450, 400);
        };

        this.popupCallback = function(){

        	if(this.dsBookMst.rowcount > 0)
        	{
        		this.dsErrorDtl.setColumn(0, "BOOKMST_CODE", this.dsBookMst.getColumn(0, "BOOKMST_CODE"));
        		this.dsErrorDtl.setColumn(0, "BOOKMST_YEAR", this.dsBookMst.getColumn(0, "BOOKMST_YEAR"));
        		this.dsErrorDtl.setColumn(0, "BOOKMST_NAME", this.dsBookMst.getColumn(0, "BOOKMST_NAME"));
        		this.dsErrorDtl.setColumn(0, "BOOKNAME", this.dsBookMst.getColumn(0, "BOOKMST_NAME"));
        		this.dsErrorDtl.setColumn(0, "BOOKMST_SEQ", this.dsBookMst.getColumn(0, "BOOKMST_SEQ"));
        		this.dsErrorDtl.setColumn(0, "BOOKMST_ID", this.dsBookMst.getColumn(0, "BOOKMST_ID"));
        	}
        }

        this.ImgClose_onclick = function(obj,e)
        {
        	this.close();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkMain_onload,this);
            this.btnBookSearch.addEventHandler("onclick",this.btnBookSearch_onclick,this);
            this.ImgClose.addEventHandler("onclick",this.ImgClose_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnPrt.addEventHandler("onclick",this.btnPrt_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.btn_FOK.addEventHandler("onclick",this.btn_FOK_onclick,this);
            this.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
        };
        this.loadIncludeScript("PRODUCT_ERROR_DTL_ADMIN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
