(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PD201_ExcelUploadF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCCUL", this);
            obj._setContents("<ColumnInfo><Column id=\"CCUL_ID\" type=\"INT\" size=\"20\"/><Column id=\"CCUL_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"CCUL_USEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"CREDITCARD_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"CREDITCARD_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CCUL_AMOUNT\" type=\"INT\" size=\"10\"/><Column id=\"CCUL_CUST_NAME\" type=\"STRING\" size=\"35\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"CCUL_GETBACK_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"CCUL_GETBACK_USER\" type=\"STRING\" size=\"6\"/><Column id=\"CCUL_GETBACK\" type=\"STRING\" size=\"1\"/><Column id=\"CCUL_REMARK\" type=\"STRING\" size=\"200\"/><Column id=\"CCUL_BUSINESSTRIP\" type=\"STRING\" size=\"1\"/><Column id=\"CCUL_BUSINESSTRIP_NAME\" type=\"STRING\" size=\"4\"/><Column id=\"CCUL_SECTIONMANAGECOST\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSection", this);
            obj._setContents("<ColumnInfo><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"LVL\" type=\"INT\" size=\"1\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"3\"/><Column id=\"SECTION_SHORTNAME\" type=\"STRING\" size=\"10\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"5\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCorpCard", this);
            obj._setContents("<ColumnInfo><Column id=\"CREDITCARD_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"CREDITCARD_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"CREDITCARD_ENABLED\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCardExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"CI_CARD\" type=\"STRING\" size=\"30\"/><Column id=\"CI_CARDNUM\" type=\"STRING\" size=\"30\"/><Column id=\"CI_CARDNAME\" type=\"STRING\" size=\"25\"/><Column id=\"CI_PAYBANKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ACCOUNT\" type=\"STRING\" size=\"30\"/><Column id=\"CI_AMTLIMIT\" type=\"STRING\" size=\"30\"/><Column id=\"CI_CARDDATE\" type=\"STRING\" size=\"20\"/><Column id=\"CI_CVCNUM\" type=\"STRING\" size=\"10\"/><Column id=\"CI_BIGO\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCardList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"2\"/><Column id=\"CI_IDEX\" type=\"STRING\" size=\"10\"/><Column id=\"CI_CARD\" type=\"STRING\" size=\"30\"/><Column id=\"CI_CARDNUM\" type=\"STRING\" size=\"30\"/><Column id=\"CI_CARDNAME\" type=\"STRING\" size=\"25\"/><Column id=\"CI_ACCOUNT\" type=\"STRING\" size=\"30\"/><Column id=\"CI_AMTLIMIT\" type=\"STRING\" size=\"30\"/><Column id=\"CI_CARDDATE\" type=\"STRING\" size=\"20\"/><Column id=\"CI_CVCNUM\" type=\"STRING\" size=\"10\"/><Column id=\"CI_USEFLG\" type=\"STRING\" size=\"10\"/><Column id=\"CI_INUSER\" type=\"STRING\" size=\"20\"/><Column id=\"CI_INDATE\" type=\"STRING\" size=\"20\"/><Column id=\"CI_UPDATE\" type=\"STRING\" size=\"20\"/><Column id=\"CI_BIGO\" type=\"STRING\" size=\"100\"/><Column id=\"CI_PAYBANKNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStateExl", this);
            obj._setContents("<ColumnInfo><Column id=\"STATE_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"STATE_NAME\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"STATE_CODE\">01</Col><Col id=\"STATE_NAME\">업로드완료</Col></Row><Row><Col id=\"STATE_CODE\">02</Col><Col id=\"STATE_NAME\">오류검사필요</Col></Row><Row><Col id=\"STATE_CODE\">03</Col><Col id=\"STATE_NAME\">저장가능</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBankType", this);
            obj._setContents("<ColumnInfo><Column id=\"BANK_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"BANK_NAME\" type=\"STRING\" size=\"15\"/></ColumnInfo><Rows><Row><Col id=\"BANK_CODE\">0</Col><Col id=\"BANK_NAME\">선택</Col></Row><Row><Col id=\"BANK_CODE\">1</Col><Col id=\"BANK_NAME\">국민</Col></Row><Row><Col id=\"BANK_CODE\">2</Col><Col id=\"BANK_NAME\">신한</Col></Row><Row><Col id=\"BANK_CODE\">3</Col><Col id=\"BANK_NAME\">우리</Col></Row><Row><Col id=\"BANK_CODE\">4</Col><Col id=\"BANK_NAME\">현대</Col></Row><Row><Col id=\"BANK_CODE\">5</Col><Col id=\"BANK_NAME\">삼성</Col></Row><Row><Col id=\"BANK_CODE\">6</Col><Col id=\"BANK_NAME\">기업</Col></Row><Row><Col id=\"BANK_CODE\">7</Col><Col id=\"BANK_NAME\">(개인)법인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBankType_0", this);
            obj._setContents("<ColumnInfo><Column id=\"BANK_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"BANK_NAME\" type=\"STRING\" size=\"15\"/></ColumnInfo><Rows><Row><Col id=\"BANK_CODE\">0</Col><Col id=\"BANK_NAME\">선택</Col></Row><Row><Col id=\"BANK_CODE\">1</Col><Col id=\"BANK_NAME\">국민</Col></Row><Row><Col id=\"BANK_CODE\">2</Col><Col id=\"BANK_NAME\">신한</Col></Row><Row><Col id=\"BANK_CODE\">3</Col><Col id=\"BANK_NAME\">우리</Col></Row><Row><Col id=\"BANK_CODE\">4</Col><Col id=\"BANK_NAME\">현대</Col></Row><Row><Col id=\"BANK_CODE\">5</Col><Col id=\"BANK_NAME\">삼성</Col></Row><Row><Col id=\"BANK_CODE\">6</Col><Col id=\"BANK_NAME\">기업</Col></Row><Row><Col id=\"BANK_CODE\">7</Col><Col id=\"BANK_NAME\">(개인)법인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHelp", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"text\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_excel_sp","580","20","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("양식 다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancle","685","20","50","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","740","20","50","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel_up","600","59","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("가져오기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_erchk","685","59","50","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("전달");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel_save","740","59","50","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","56","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Excel File");
            obj.set_textAlign("center");
            obj.set_background("#c3e4cd");
            obj.set_font("bold 13px/normal \"Gulim\"");
            obj.set_color("#01656f");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_state","455","56","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("1px solid #c3e4cd");
            obj.set_innerdataset("dsStateExl");
            obj.set_codecolumn("STATE_CODE");
            obj.set_datacolumn("STATE_NAME");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_excel_name","100","56","356","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_border("1px solid #c3e4cd");
            this.addChild(obj.name, obj);

            obj = new Static("Static_SP1","10","53","780","2",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("#368b65");
            this.addChild(obj.name, obj);

            obj = new Static("Static_SP1_00","10","89","780","2",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("#368b65");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_excel_sp","10","92","780","380",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_border("1px solid #10aea9");
            obj.set_binddataset("dsCardExcel");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"76\"/><Column size=\"122\"/><Column size=\"112\"/><Column size=\"70\"/><Column size=\"92\"/><Column size=\"72\"/><Column size=\"110\"/><Column size=\"42\"/><Column size=\"82\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"*종류(숫자)\"/><Cell col=\"1\" text=\"*카드번호(-생략)\"/><Cell col=\"2\" text=\"카드명\"/><Cell col=\"3\" text=\"결제은행\"/><Cell col=\"4\" text=\"결제계좌\"/><Cell col=\"5\" text=\"결제한도\"/><Cell col=\"6\" text=\"*유효기간(-생략)\"/><Cell col=\"7\" text=\"*CVC\"/><Cell col=\"8\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:CI_CARD\" combodataset=\"dsBankType\" combocodecol=\"BANK_CODE\" combodatacol=\"BANK_NAME\" displaytype=\"combotext\"/><Cell col=\"1\" text=\"bind:CI_CARDNUM\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"####-####-####-####\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:CI_CARDNAME\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:CI_PAYBANKNAME\"/><Cell col=\"4\" text=\"bind:CI_ACCOUNT\"/><Cell col=\"5\" text=\"bind:CI_AMTLIMIT\" displaytype=\"mask\" maskeditformat=\"###,\"/><Cell col=\"6\" text=\"bind:CI_CARDDATE\" maskedittype=\"string\" maskeditformat=\"####-##\" displaytype=\"mask\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:CI_CVCNUM\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:CI_BIGO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_excel_sp2","0","515","980","395",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_autofittype("col");
            obj.set_binddataset("dsHelp");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"890\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"23\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Excel 업로드 기능 안내\"/></Band><Band id=\"body\"><Cell text=\"[Excel업로드 기능 사용방법]\" font=\"bold 12px/normal &quot;Gulim&quot;\" background=\"#e7fdf0\" padding=\"0px 0px 0px 10px\"/><Cell row=\"1\" text=\"(1) 양식 다운로드 버튼을 이용하여 업로드에 필요한 양식을 내려 받을 수 있습니다.\" background=\"white\" padding=\"0px 0px 0px 10px\"/><Cell row=\"2\" text=\"(2) 양식을 작성하신 후 법인카드의 데이터 업로드 버튼을 사용하여 엑셀 문서를 업로드 할 수 있습니다.\" background=\"white\" padding=\"0px 0px 0px 10px\"/><Cell row=\"3\" background=\"white\" padding=\"0px 0px 0px 10px\"/><Cell row=\"4\" text=\"[중요! 업로드 시 데이터 입력 방법] \" font=\"bold 12px/normal &quot;Gulim&quot;\" background=\"#e7fdf0\" padding=\"0px 0px 0px 10px\"/><Cell row=\"5\" text=\"카드종류는 번호로 입력(은행종류코드표참고), 카드번호 및 모든 번호에 (-)하이픈 생략, 유효기간 6자리와 CVC 3자리\" background=\"white\" padding=\"0px 0px 0px 10px\"/><Cell row=\"6\" text=\"은행종류코드: 국민(1),신한(2),우리(3),현대(4),삼성(5),기업(6)  그 외 추가 필요 시 전산부 연락\" background=\"white\" padding=\"0px 0px 0px 10px\"/><Cell row=\"7\" background=\"white\" padding=\"0px 0px 0px 10px\"/><Cell row=\"8\" text=\"[업로드 진행 시 장애발생]\" font=\"bold 12px/normal &quot;Gulim&quot;\" background=\"#e7fdf0\" padding=\"0px 0px 0px 10px\"/><Cell row=\"9\" text=\"(1) 에러-(  ) 잘못되었습니다. 확인 후 진행하시기바랍니다.\" background=\"white\" padding=\"0px 0px 0px 10px\"/><Cell row=\"10\" text=\"  -&gt; 해당하는 (  )에 공백이 발생했거나 숫자 외에 문자가 들어갈 경우 문자형식이 맞지 않을 경우 발생합니다. 엑셀 데이터를 확인하시기 바랍니다.\" background=\"white\" padding=\"0px 0px 0px 10px\"/><Cell row=\"11\" text=\"(2) 에러-존재하는 카드번호입니다. \" background=\"white\" padding=\"0px 0px 0px 10px\"/><Cell row=\"12\" text=\"  -&gt;입력하신 카드번호가 이미 등록되어있을 때 발생합니다.\" background=\"white\" padding=\"0px 0px 0px 10px\"/><Cell row=\"13\" text=\"(3) 그 외 기타 에러코드\" background=\"white\" padding=\"0px 0px 0px 10px\"/><Cell row=\"14\" text=\"  -&gt;숫자가 입력되어야 할 곳에 문자나 특수기호를 사용하면 발생하는 에러입니다. 데이터를 재 확인하고 등록하시기 바랍니다.\" background=\"white\" padding=\"0px 0px 0px 10px\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","5","360","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("법인카드 Excel 업로드");
            obj.set_color("#7fb39d");
            obj.set_font("bold 30px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,480,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PD201_ExcelUploadF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("PD201_ExcelUploadF.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("PD201_ExcelUploadF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var strExcelFileName, err_chk ;

        this.PD201_ExcelUploadF_onload = function(obj,e)
        {
        	this.fnInitForm();
        };

        this.fnInitForm = function()
        {
        	this.edt_excel_name.set_value("");
        	this.dsCardExcel.deleteAll();
        	this.cbo_state.set_index(-1); //오류검사 유무
        }

        this.fnCallback = function(trid, errcode, errMsg)
        {
        	if(trid == "Search_cardList")
        		trace("조회 완료");
        	if(trid == "Save_card")
        		trace("저장 완료");
        }

        this.btn_excel_sp_onclick = function(obj,e)
        {
        	this.exportObj = new ExcelExportObject();
            var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_excel_sp, "법인카드업로드양식!A1");
        	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_excel_sp2, "양식작성메뉴얼!A1");
        	this.exportObj.set_exportfilename( "Upload_sp" );
            this.exportObj.set_exporturl(gv_urlXeni);
            this.exportObj.exportData();
        };
        this.btn_excel_up_onclick = function(obj,e)
        {
        	var strExcelname;
        	var ex_bookCode, ex_bookYY;
        	var str_url, str_outds, str_arg;
        	var startnum;


        	this.importObj = new ExcelImportObject("Import00",this);
            this.importObj.addEventHandler("onsuccess", this.Import_onsuccess, this);
            this.importObj.set_importurl(gv_urlXeni);
            var ret = this.importObj.importData("","output=ds","dsCardExcel=ds");
        	if(!ret){
        		this.alert("업로드에 실패하셨습니다.");
        		return;
        	}
        };

        this.Import_onsuccess = function(obj, e)
        {
        	if(this.dsCardExcel.rowcount <= 1)
        		return;
        	var ret = e.url.split("/");
        	this.edt_excel_name.set_value(ret[ret.length-1]);
        	this.cbo_state.set_index(0);

        	this.dsCardExcel.deleteRow(0);
        	this.dsCardExcel.updateColID("Column0", "CI_CARD");
        	this.dsCardExcel.updateColID("Column1", "CI_CARDNUM");
        	this.dsCardExcel.updateColID("Column2", "CI_CARDNAME");
        	this.dsCardExcel.updateColID("Column3", "CI_PAYBANKNAME");
        	this.dsCardExcel.updateColID("Column4", "CI_ACCOUNT");
        	this.dsCardExcel.updateColID("Column5", "CI_AMTLIMIT");
        	this.dsCardExcel.updateColID("Column6", "CI_CARDDATE");
        	this.dsCardExcel.updateColID("Column7", "CI_CVCNUM");
        	this.dsCardExcel.updateColID("Column8", "CI_BIGO");
        }

        this.btn_erchk_onclick = function(obj,e)
        {
        	var count;
        	var cardNumChk, cardChk, cardDateChk, cardCVCChk;

        	//데이터 존재 유무 체크
        	trace(this.dsCardExcel.rowcount);
        	count = this.dsCardExcel.rowcount;
        	this.cbo_state.set_index(1);

        	if (count == "0")
        	{
        		alert("업로드된 데이터가 없습니다.");
        		this.cbo_state.set_index(-1); //오류검사 유무
        		return;
        	}

        	//자릿수체크, 중복체크
        	for(var i=0; i < this.dsCardExcel.rowcount; i++)
        	{

        		//카드종류체크
        		if(this.dsCardExcel.getColumn(i,"CI_CARD") != null)
        			cardChk = nexacro.trim(this.dsCardExcel.getColumn(i,"CI_CARD"));
        		else
        			cardChk = "";
        		if (cardChk.length != 1)
        		{
        			alert("엑셀"+(i+1)+"번째 : "+"카드종류를 확인하시기 바랍니다.(숫자만 입력 가능합니다)");
        			return;
        		}

        		//카드번호 자릿수
        		if(this.dsCardExcel.getColumn(i,"CI_CARDNUM") != null)
        			cardNumChk = nexacro.trim(this.dsCardExcel.getColumn(i,"CI_CARDNUM"));
        		else
        			cardNumChk = "";
        		if (cardNumChk.length != 16)
        		{
        			alert("엑셀"+(i+1)+"번째 : "+"카드번호를 확인하시기 바랍니다.");
        			return;
        		}

        		//유효기간 자릿수
        		if(this.dsCardExcel.getColumn(i,"CI_CARDDATE") != null)
        			cardDateChk = nexacro.trim(this.dsCardExcel.getColumn(i,"CI_CARDDATE"));
        		else
        			cardDateChk = "";
        		if (cardDateChk.length != 6)
        		{
        			alert("엑셀"+(i+1)+"번째 : "+"유효기간을 확인하시기 바랍니다.");
        			return;
        		}

        		//CVC 자릿수
        		if(this.dsCardExcel.getColumn(i,"CI_CVCNUM") != null)
        			cardCVCChk = nexacro.trim(this.dsCardExcel.getColumn(i,"CI_CVCNUM"));
        		else
        			cardCVCChk = "";
        		if (cardCVCChk.length != 3)
        		{
        			alert("엑셀"+(i+1)+"번째 : "+"CVC를 확인하시기 바랍니다.");
        			return;
        		}

        		//카드중복 확인
        		var strUrl = "JSP/pd/pd201f_corpcard_Search.jsp";
        		var	strArg;   //변수
        		var strDs 	= "dsCardList=dsCardList"; //받는 데이터셋

        		strArg  = " cboBankType="	+ nexacro.wrapQuote(cardChk); //카드종류
        		strArg += " mdtCardNum="	+ nexacro.wrapQuote(cardNumChk); //카드번호
        		strArg += " mdtBankAcc="	+ nexacro.wrapQuote(""); //결제계좌
        		strArg += " CI_USEFLG="		+ nexacro.wrapQuote(0); //사용유무

        		this.dsCardList.clearData(); //데이터 초기화

        		this.gfn_TransactionP("Search_count", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        		//카드중복 확인 완료

        		var countcard = nexacro.toNumber(this.dsCardList.rowcount);

        		if (countcard > 0)
        		{
        			alert("엑셀"+(i+1)+"번째 카드 : "+cardChk+", "+cardNumChk+"등록 카드가 이미 존재합니다.");
        			this.cbo_state.set_index(1); //오류검사 정상유무
        		}
        		else
        		{
        			this.cbo_state.set_index(2); //오류검사 정상유무
        		}
        	}
        	alert("오류검사가 종료되었습니다.");
        };


        this.fnCallback = function(trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0){
        		alert(ErrorMsg);
        		return;
        	}
        }

        this.btn_excel_save_onclick = function(obj,e)
        {
        	if (this.cbo_state.set_index(2))
        	{
        		alert("오류검사를 위해 전달을 눌러주세요.");
        		return;
        	}

        	this.fnBtnSave(); //저장 함수 호출
        };

        this.fnBtnSave = function() //저장함수 동작
        {
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMddhhmmss");
        	var inDate =f_date;//등록일
        	var upDate =f_date;//최근수정일

        	var strUrl = "JSP/pd/pd201f_corpcard_save.jsp";
        	var	strArg;   //변수
        	var inDs 	= "";	//보내는 데이터셋
        	var outDs 	= ""; //받는 데이터셋

        	//여기서 인설트 반복문 진행
        	for(var i=0; i < this.dsCardExcel.rowcount; i++)
        	{
        	//--생성
        		strArg    = " cboBankType="        + nexacro.wrapQuote(this.dsCardExcel.getColumn(i,"CI_CARD")); //카드종류
        		strArg   += " mdtCardNum="         + nexacro.wrapQuote(this.dsCardExcel.getColumn(i,"CI_CARDNUM")); //카드번호
        		strArg   += " edtCvc="    	        + nexacro.wrapQuote(this.dsCardExcel.getColumn(i,"CI_CVCNUM")); //cvc번호
        		strArg   += " edtExpdate="      	+ nexacro.wrapQuote(this.dsCardExcel.getColumn(i,"CI_CARDDATE")); //유효기간
        		if(this.dsCardExcel.getColumn(i,"CI_ACCOUNT") != null)
        			strArg   += " mdtBankAcc="    	    + nexacro.wrapQuote(this.dsCardExcel.getColumn(i,"CI_ACCOUNT")); //결제계좌
        		if(this.dsCardExcel.getColumn(i,"CI_AMTLIMIT") != null)
        			strArg   += " mdtAmtLimit="   	    + nexacro.wrapQuote(this.dsCardExcel.getColumn(i,"CI_AMTLIMIT"));  //결제한도
        		if(this.dsCardExcel.getColumn(i,"CI_BIGO") != null)
        			strArg   += " edtBigo="      	    + nexacro.wrapQuote(this.dsCardExcel.getColumn(i,"CI_BIGO")); //비고
        		strArg   += " chkusecode="      	+ nexacro.wrapQuote(1); //사용유무
        		strArg   += " edtInUser="      	+ nexacro.wrapQuote(gv_sabun); //등록자
        		strArg   += " mdtInDate="      	+ nexacro.wrapQuote(inDate); //등록일
        		strArg   += " mdtupdate="      	+ nexacro.wrapQuote(upDate); //최근수정일
        		if(this.dsCardExcel.getColumn(i,"CI_CARDNAME") != null)
        			strArg   += " edtCardname="      	+ nexacro.wrapQuote(this.dsCardExcel.getColumn(i,"CI_CARDNAME")); //카드명
        		strArg   += " cust_gb="			+ nexacro.wrapQuote("47");
        		strArg   += " cust_cd="			+ nexacro.wrapQuote("");
        		if(this.dsCardExcel.getColumn(i,"CI_PAYBANKNAME") != null)
        			strArg   += " edtPayBankNm="      	+ nexacro.wrapQuote(this.dsCardExcel.getColumn(i,"CI_PAYBANKNAME")); //결제은행

        		this.gfn_TransactionP("Save_card", strUrl, "", "", strArg, "fnCallback", false, "P", false, this);
        	}

        	alert(this.dsCardExcel.rowcount+"개의 데이터 업로드 완료");

        	this.close(); //업로드 완료 종료

        }
        this.btn_cancle_onclick = function(obj,e)
        {
        	this.fnInitForm();
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PD201_ExcelUploadF_onload,this);
            this.btn_excel_sp.addEventHandler("onclick",this.btn_excel_sp_onclick,this);
            this.btn_cancle.addEventHandler("onclick",this.btn_cancle_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_excel_up.addEventHandler("onclick",this.btn_excel_up_onclick,this);
            this.btn_erchk.addEventHandler("onclick",this.btn_erchk_onclick,this);
            this.btn_excel_save.addEventHandler("onclick",this.btn_excel_save_onclick,this);
            this.cbo_state.addEventHandler("onitemchanged",this.cbo_section_onitemchanged,this);
            this.cbo_state.addEventHandler("onkeydown",this.cbo_section_onkeydown,this);
        };
        this.loadIncludeScript("PD201_ExcelUploadF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
