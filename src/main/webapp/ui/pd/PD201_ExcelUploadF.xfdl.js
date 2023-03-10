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
            obj._setContents("<ColumnInfo><Column id=\"STATE_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"STATE_NAME\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"STATE_CODE\">01</Col><Col id=\"STATE_NAME\">???????????????</Col></Row><Row><Col id=\"STATE_CODE\">02</Col><Col id=\"STATE_NAME\">??????????????????</Col></Row><Row><Col id=\"STATE_CODE\">03</Col><Col id=\"STATE_NAME\">????????????</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBankType", this);
            obj._setContents("<ColumnInfo><Column id=\"BANK_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"BANK_NAME\" type=\"STRING\" size=\"15\"/></ColumnInfo><Rows><Row><Col id=\"BANK_CODE\">0</Col><Col id=\"BANK_NAME\">??????</Col></Row><Row><Col id=\"BANK_CODE\">1</Col><Col id=\"BANK_NAME\">??????</Col></Row><Row><Col id=\"BANK_CODE\">2</Col><Col id=\"BANK_NAME\">??????</Col></Row><Row><Col id=\"BANK_CODE\">3</Col><Col id=\"BANK_NAME\">??????</Col></Row><Row><Col id=\"BANK_CODE\">4</Col><Col id=\"BANK_NAME\">??????</Col></Row><Row><Col id=\"BANK_CODE\">5</Col><Col id=\"BANK_NAME\">??????</Col></Row><Row><Col id=\"BANK_CODE\">6</Col><Col id=\"BANK_NAME\">??????</Col></Row><Row><Col id=\"BANK_CODE\">7</Col><Col id=\"BANK_NAME\">(??????)??????</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBankType_0", this);
            obj._setContents("<ColumnInfo><Column id=\"BANK_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"BANK_NAME\" type=\"STRING\" size=\"15\"/></ColumnInfo><Rows><Row><Col id=\"BANK_CODE\">0</Col><Col id=\"BANK_NAME\">??????</Col></Row><Row><Col id=\"BANK_CODE\">1</Col><Col id=\"BANK_NAME\">??????</Col></Row><Row><Col id=\"BANK_CODE\">2</Col><Col id=\"BANK_NAME\">??????</Col></Row><Row><Col id=\"BANK_CODE\">3</Col><Col id=\"BANK_NAME\">??????</Col></Row><Row><Col id=\"BANK_CODE\">4</Col><Col id=\"BANK_NAME\">??????</Col></Row><Row><Col id=\"BANK_CODE\">5</Col><Col id=\"BANK_NAME\">??????</Col></Row><Row><Col id=\"BANK_CODE\">6</Col><Col id=\"BANK_NAME\">??????</Col></Row><Row><Col id=\"BANK_CODE\">7</Col><Col id=\"BANK_NAME\">(??????)??????</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHelp", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"text\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_excel_sp","580","20","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("?????? ????????????");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancle","685","20","50","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("??????");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","740","20","50","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("??????");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel_up","600","59","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("????????????");
            this.addChild(obj.name, obj);

            obj = new Button("btn_erchk","685","59","50","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("??????");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel_save","740","59","50","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("??????");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"76\"/><Column size=\"122\"/><Column size=\"112\"/><Column size=\"70\"/><Column size=\"92\"/><Column size=\"72\"/><Column size=\"110\"/><Column size=\"42\"/><Column size=\"82\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"*??????(??????)\"/><Cell col=\"1\" text=\"*????????????(-??????)\"/><Cell col=\"2\" text=\"?????????\"/><Cell col=\"3\" text=\"????????????\"/><Cell col=\"4\" text=\"????????????\"/><Cell col=\"5\" text=\"????????????\"/><Cell col=\"6\" text=\"*????????????(-??????)\"/><Cell col=\"7\" text=\"*CVC\"/><Cell col=\"8\" text=\"??????\"/></Band><Band id=\"body\"><Cell text=\"bind:CI_CARD\" combodataset=\"dsBankType\" combocodecol=\"BANK_CODE\" combodatacol=\"BANK_NAME\" displaytype=\"combotext\"/><Cell col=\"1\" text=\"bind:CI_CARDNUM\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"####-####-####-####\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:CI_CARDNAME\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:CI_PAYBANKNAME\"/><Cell col=\"4\" text=\"bind:CI_ACCOUNT\"/><Cell col=\"5\" text=\"bind:CI_AMTLIMIT\" displaytype=\"mask\" maskeditformat=\"###,\"/><Cell col=\"6\" text=\"bind:CI_CARDDATE\" maskedittype=\"string\" maskeditformat=\"####-##\" displaytype=\"mask\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:CI_CVCNUM\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:CI_BIGO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_excel_sp2","0","515","980","395",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_autofittype("col");
            obj.set_binddataset("dsHelp");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"890\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"23\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Excel ????????? ?????? ??????\"/></Band><Band id=\"body\"><Cell text=\"[Excel????????? ?????? ????????????]\" font=\"bold 12px/normal &quot;Gulim&quot;\" background=\"#e7fdf0\" padding=\"0px 0px 0px 10px\"/><Cell row=\"1\" text=\"(1) ?????? ???????????? ????????? ???????????? ???????????? ????????? ????????? ?????? ?????? ??? ????????????.\" background=\"white\" padding=\"0px 0px 0px 10px\"/><Cell row=\"2\" text=\"(2) ????????? ???????????? ??? ??????????????? ????????? ????????? ????????? ???????????? ?????? ????????? ????????? ??? ??? ????????????.\" background=\"white\" padding=\"0px 0px 0px 10px\"/><Cell row=\"3\" background=\"white\" padding=\"0px 0px 0px 10px\"/><Cell row=\"4\" text=\"[??????! ????????? ??? ????????? ?????? ??????] \" font=\"bold 12px/normal &quot;Gulim&quot;\" background=\"#e7fdf0\" padding=\"0px 0px 0px 10px\"/><Cell row=\"5\" text=\"??????????????? ????????? ??????(???????????????????????????), ???????????? ??? ?????? ????????? (-)????????? ??????, ???????????? 6????????? CVC 3??????\" background=\"white\" padding=\"0px 0px 0px 10px\"/><Cell row=\"6\" text=\"??????????????????: ??????(1),??????(2),??????(3),??????(4),??????(5),??????(6)  ??? ??? ?????? ?????? ??? ????????? ??????\" background=\"white\" padding=\"0px 0px 0px 10px\"/><Cell row=\"7\" background=\"white\" padding=\"0px 0px 0px 10px\"/><Cell row=\"8\" text=\"[????????? ?????? ??? ????????????]\" font=\"bold 12px/normal &quot;Gulim&quot;\" background=\"#e7fdf0\" padding=\"0px 0px 0px 10px\"/><Cell row=\"9\" text=\"(1) ??????-(  ) ?????????????????????. ?????? ??? ???????????????????????????.\" background=\"white\" padding=\"0px 0px 0px 10px\"/><Cell row=\"10\" text=\"  -&gt; ???????????? (  )??? ????????? ??????????????? ?????? ?????? ????????? ????????? ?????? ??????????????? ?????? ?????? ?????? ???????????????. ?????? ???????????? ??????????????? ????????????.\" background=\"white\" padding=\"0px 0px 0px 10px\"/><Cell row=\"11\" text=\"(2) ??????-???????????? ?????????????????????. \" background=\"white\" padding=\"0px 0px 0px 10px\"/><Cell row=\"12\" text=\"  -&gt;???????????? ??????????????? ?????? ?????????????????? ??? ???????????????.\" background=\"white\" padding=\"0px 0px 0px 10px\"/><Cell row=\"13\" text=\"(3) ??? ??? ?????? ????????????\" background=\"white\" padding=\"0px 0px 0px 10px\"/><Cell row=\"14\" text=\"  -&gt;????????? ??????????????? ??? ?????? ????????? ??????????????? ???????????? ???????????? ???????????????. ???????????? ??? ???????????? ??????????????? ????????????.\" background=\"white\" padding=\"0px 0px 0px 10px\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","5","360","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("???????????? Excel ?????????");
            obj.set_color("#7fb39d");
            obj.set_font("bold 30px/normal \"??????????????? ??????B\"");
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
        	this.cbo_state.set_index(-1); //???????????? ??????
        }

        this.fnCallback = function(trid, errcode, errMsg)
        {
        	if(trid == "Search_cardList")
        		trace("?????? ??????");
        	if(trid == "Save_card")
        		trace("?????? ??????");
        }

        this.btn_excel_sp_onclick = function(obj,e)
        {
        	this.exportObj = new ExcelExportObject();
            var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_excel_sp, "???????????????????????????!A1");
        	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_excel_sp2, "?????????????????????!A1");
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
        		this.alert("???????????? ?????????????????????.");
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

        	//????????? ?????? ?????? ??????
        	trace(this.dsCardExcel.rowcount);
        	count = this.dsCardExcel.rowcount;
        	this.cbo_state.set_index(1);

        	if (count == "0")
        	{
        		alert("???????????? ???????????? ????????????.");
        		this.cbo_state.set_index(-1); //???????????? ??????
        		return;
        	}

        	//???????????????, ????????????
        	for(var i=0; i < this.dsCardExcel.rowcount; i++)
        	{

        		//??????????????????
        		if(this.dsCardExcel.getColumn(i,"CI_CARD") != null)
        			cardChk = nexacro.trim(this.dsCardExcel.getColumn(i,"CI_CARD"));
        		else
        			cardChk = "";
        		if (cardChk.length != 1)
        		{
        			alert("??????"+(i+1)+"?????? : "+"??????????????? ??????????????? ????????????.(????????? ?????? ???????????????)");
        			return;
        		}

        		//???????????? ?????????
        		if(this.dsCardExcel.getColumn(i,"CI_CARDNUM") != null)
        			cardNumChk = nexacro.trim(this.dsCardExcel.getColumn(i,"CI_CARDNUM"));
        		else
        			cardNumChk = "";
        		if (cardNumChk.length != 16)
        		{
        			alert("??????"+(i+1)+"?????? : "+"??????????????? ??????????????? ????????????.");
        			return;
        		}

        		//???????????? ?????????
        		if(this.dsCardExcel.getColumn(i,"CI_CARDDATE") != null)
        			cardDateChk = nexacro.trim(this.dsCardExcel.getColumn(i,"CI_CARDDATE"));
        		else
        			cardDateChk = "";
        		if (cardDateChk.length != 6)
        		{
        			alert("??????"+(i+1)+"?????? : "+"??????????????? ??????????????? ????????????.");
        			return;
        		}

        		//CVC ?????????
        		if(this.dsCardExcel.getColumn(i,"CI_CVCNUM") != null)
        			cardCVCChk = nexacro.trim(this.dsCardExcel.getColumn(i,"CI_CVCNUM"));
        		else
        			cardCVCChk = "";
        		if (cardCVCChk.length != 3)
        		{
        			alert("??????"+(i+1)+"?????? : "+"CVC??? ??????????????? ????????????.");
        			return;
        		}

        		//???????????? ??????
        		var strUrl = "JSP/pd/pd201f_corpcard_Search.jsp";
        		var	strArg;   //??????
        		var strDs 	= "dsCardList=dsCardList"; //?????? ????????????

        		strArg  = " cboBankType="	+ nexacro.wrapQuote(cardChk); //????????????
        		strArg += " mdtCardNum="	+ nexacro.wrapQuote(cardNumChk); //????????????
        		strArg += " mdtBankAcc="	+ nexacro.wrapQuote(""); //????????????
        		strArg += " CI_USEFLG="		+ nexacro.wrapQuote(0); //????????????

        		this.dsCardList.clearData(); //????????? ?????????

        		this.gfn_TransactionP("Search_count", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        		//???????????? ?????? ??????

        		var countcard = nexacro.toNumber(this.dsCardList.rowcount);

        		if (countcard > 0)
        		{
        			alert("??????"+(i+1)+"?????? ?????? : "+cardChk+", "+cardNumChk+"?????? ????????? ?????? ???????????????.");
        			this.cbo_state.set_index(1); //???????????? ????????????
        		}
        		else
        		{
        			this.cbo_state.set_index(2); //???????????? ????????????
        		}
        	}
        	alert("??????????????? ?????????????????????.");
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
        		alert("??????????????? ?????? ????????? ???????????????.");
        		return;
        	}

        	this.fnBtnSave(); //?????? ?????? ??????
        };

        this.fnBtnSave = function() //???????????? ??????
        {
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMddhhmmss");
        	var inDate =f_date;//?????????
        	var upDate =f_date;//???????????????

        	var strUrl = "JSP/pd/pd201f_corpcard_save.jsp";
        	var	strArg;   //??????
        	var inDs 	= "";	//????????? ????????????
        	var outDs 	= ""; //?????? ????????????

        	//????????? ????????? ????????? ??????
        	for(var i=0; i < this.dsCardExcel.rowcount; i++)
        	{
        	//--??????
        		strArg    = " cboBankType="        + nexacro.wrapQuote(this.dsCardExcel.getColumn(i,"CI_CARD")); //????????????
        		strArg   += " mdtCardNum="         + nexacro.wrapQuote(this.dsCardExcel.getColumn(i,"CI_CARDNUM")); //????????????
        		strArg   += " edtCvc="    	        + nexacro.wrapQuote(this.dsCardExcel.getColumn(i,"CI_CVCNUM")); //cvc??????
        		strArg   += " edtExpdate="      	+ nexacro.wrapQuote(this.dsCardExcel.getColumn(i,"CI_CARDDATE")); //????????????
        		if(this.dsCardExcel.getColumn(i,"CI_ACCOUNT") != null)
        			strArg   += " mdtBankAcc="    	    + nexacro.wrapQuote(this.dsCardExcel.getColumn(i,"CI_ACCOUNT")); //????????????
        		if(this.dsCardExcel.getColumn(i,"CI_AMTLIMIT") != null)
        			strArg   += " mdtAmtLimit="   	    + nexacro.wrapQuote(this.dsCardExcel.getColumn(i,"CI_AMTLIMIT"));  //????????????
        		if(this.dsCardExcel.getColumn(i,"CI_BIGO") != null)
        			strArg   += " edtBigo="      	    + nexacro.wrapQuote(this.dsCardExcel.getColumn(i,"CI_BIGO")); //??????
        		strArg   += " chkusecode="      	+ nexacro.wrapQuote(1); //????????????
        		strArg   += " edtInUser="      	+ nexacro.wrapQuote(gv_sabun); //?????????
        		strArg   += " mdtInDate="      	+ nexacro.wrapQuote(inDate); //?????????
        		strArg   += " mdtupdate="      	+ nexacro.wrapQuote(upDate); //???????????????
        		if(this.dsCardExcel.getColumn(i,"CI_CARDNAME") != null)
        			strArg   += " edtCardname="      	+ nexacro.wrapQuote(this.dsCardExcel.getColumn(i,"CI_CARDNAME")); //?????????
        		strArg   += " cust_gb="			+ nexacro.wrapQuote("47");
        		strArg   += " cust_cd="			+ nexacro.wrapQuote("");
        		if(this.dsCardExcel.getColumn(i,"CI_PAYBANKNAME") != null)
        			strArg   += " edtPayBankNm="      	+ nexacro.wrapQuote(this.dsCardExcel.getColumn(i,"CI_PAYBANKNAME")); //????????????

        		this.gfn_TransactionP("Save_card", strUrl, "", "", strArg, "fnCallback", false, "P", false, this);
        	}

        	alert(this.dsCardExcel.rowcount+"?????? ????????? ????????? ??????");

        	this.close(); //????????? ?????? ??????

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
