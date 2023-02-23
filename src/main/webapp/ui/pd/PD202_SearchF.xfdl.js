(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PD202_SearchF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(610,500);
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


            obj = new Dataset("dsBankType", this);
            obj._setContents("<ColumnInfo><Column id=\"BANK_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"BANK_NAME\" type=\"STRING\" size=\"15\"/></ColumnInfo><Rows><Row><Col id=\"BANK_CODE\">0</Col><Col id=\"BANK_NAME\">선택</Col></Row><Row><Col id=\"BANK_CODE\">1</Col><Col id=\"BANK_NAME\">국민</Col></Row><Row><Col id=\"BANK_CODE\">2</Col><Col id=\"BANK_NAME\">신한</Col></Row><Row><Col id=\"BANK_CODE\">3</Col><Col id=\"BANK_NAME\">우리</Col></Row><Row><Col id=\"BANK_CODE\">4</Col><Col id=\"BANK_NAME\">현대</Col></Row><Row><Col id=\"BANK_CODE\">5</Col><Col id=\"BANK_NAME\">삼성</Col></Row><Row><Col id=\"BANK_CODE\">6</Col><Col id=\"BANK_NAME\">기업</Col></Row><Row><Col id=\"BANK_CODE\">7</Col><Col id=\"BANK_NAME\">(개인)법인</Col></Row><Row><Col id=\"BANK_CODE\">8</Col><Col id=\"BANK_NAME\">하나</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCardList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"2\"/><Column id=\"CI_IDEX\" type=\"STRING\" size=\"10\"/><Column id=\"CI_CARD\" type=\"STRING\" size=\"30\"/><Column id=\"CI_CARDNUM\" type=\"STRING\" size=\"30\"/><Column id=\"CI_CARDNAME\" type=\"STRING\" size=\"25\"/><Column id=\"CI_ACCOUNT\" type=\"STRING\" size=\"30\"/><Column id=\"CI_AMTLIMIT\" type=\"STRING\" size=\"30\"/><Column id=\"CI_CARDDATE\" type=\"STRING\" size=\"20\"/><Column id=\"CI_CVCNUM\" type=\"STRING\" size=\"10\"/><Column id=\"CI_USEFLG\" type=\"STRING\" size=\"10\"/><Column id=\"CI_INUSER\" type=\"STRING\" size=\"20\"/><Column id=\"CI_INDATE\" type=\"STRING\" size=\"20\"/><Column id=\"CI_UPDATE\" type=\"STRING\" size=\"20\"/><Column id=\"CI_BIGO\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","20","5","280","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("법인카드 조회");
            obj.set_color("#7fb39d");
            obj.set_font("bold 30px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"20","50","26","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_font("8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"20","50","26","btn_close:5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_font("8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","550","63","50","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_font("8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","60","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("조  회");
            obj.set_textAlign("center");
            obj.set_background("#c3e4cd");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_color("#01656f");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_sch_type","190","60","106","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid #10aea9");
            obj.set_innerdataset("dsBankType");
            obj.set_codecolumn("BANK_CODE");
            obj.set_datacolumn("BANK_NAME");
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static_SP1","10","57","590","2",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("#368b65");
            this.addChild(obj.name, obj);

            obj = new Static("Static_SP1_00","10","93","590","2",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("#368b65");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","101","60","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("카드종류");
            obj.set_textAlign("center");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_color("#01656f");
            obj.set_border("1px solid #10aea9");
            obj.set_letterSpacing("1px");
            obj.set_padding("0px 0px 0px 1px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","295","60","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("카드번호");
            obj.set_textAlign("center");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_color("#01656f");
            obj.set_border("1px solid #10aea9");
            obj.set_letterSpacing("1px");
            obj.set_padding("0px 0px 0px 1px");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mdt_sch_cardnum","384","60","146","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("1px solid #10aea9");
            obj.set_format("####-####-####-####");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cust_list","10","96","590","395",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_border("1px solid #10aea9");
            obj.set_binddataset("dsCardList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"280\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"등록번호\"/><Cell col=\"1\" text=\"카드종류\"/><Cell col=\"2\" text=\"카드번호\"/><Cell col=\"3\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:CI_IDEX\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:CI_CARD\" combodataset=\"dsBankType\" combodatacol=\"BANK_NAME\" combocodecol=\"BANK_CODE\" displaytype=\"combotext\"/><Cell col=\"2\" text=\"bind:CI_CARDNUM\" maskeditformat=\"####-####-####-####\" maskedittype=\"string\" displaytype=\"mask\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:CI_BIGO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",610,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PD202_SearchF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("PD202_SearchF.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("PD202_SearchF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        this.PD202_SearchF_onload = function(obj,e)
        {
        	this.fnInitForm();
        	this.btn_search.click();
        };

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.fnInitForm();
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.fnInitForm = function()
        {
        	this.cbo_sch_type.set_index(0);
        	this.mdt_sch_cardnum.set_value('');
        }

        this.btn_search_onclick = function(obj,e)
        {
        	var strUrl = "JSP/pd/pd202Divf_corpcard_Search.jsp";
        	var	strArg;   //변수
        	var strDs 	= "dsCardList=dsCardList";

        	strArg  = " cboBankType="      + nexacro.wrapQuote(this.cbo_sch_type.value); //카드종류
        	if(this.mdt_sch_cardnum.value != null)
        		strArg += " mdtCardNum="      + nexacro.wrapQuote(nexacro.trim(this.mdt_sch_cardnum.value)); //카드번호
        	else
        		strArg += " mdtCardNum="      + nexacro.wrapQuote();
        	strArg += " mdtBankAcc="      + nexacro.wrapQuote(); //계좌정보
        	strArg += " CI_USEFLG="    	+ nexacro.wrapQuote(1); //사용유무

        	this.dsCardList.clearData(); //데이터 초기화
        	//Trace(strArg);
        	this.gfn_TransactionP("Search_cardList", strUrl, strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        };

        this.fnCallback = function(trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0){
        		alert(ErrorMsg);
        		return;
        	}
        	else if (trid != null)
        	{
        		trid = trid.split("|");
        		trid = trid[0]
        	}

        	if(trid == "Search_cardList")
        	{
        		trace("조회 완료");
        		if(this.dsCardList.rowcount <= 0 )
        		{
        			alert("검색된 자료가 없습니다.");
        			this.mdt_sch_cardnum.setFocus();
        			return;
        		}
        	}
        }
        this.grd_cust_list_oncelldblclick = function(obj,e)
        {
        	this.opener.dsSubulList.clearData();
        	this.opener.dsSubulList.addRow();
        	this.opener.dsSubulList.setColumn(0, "SU_CARD",this.dsCardList.getColumn(e.row,"CI_CARD"));
        	this.opener.dsSubulList.setColumn(0, "SU_CARDNUM",this.dsCardList.getColumn(e.row,"CI_CARDNUM"));
        	this.opener.dsSubulList.setColumn(0, "CI_CVCNUM",this.dsCardList.getColumn(e.row,"CI_CVCNUM"));
        	this.opener.dsSubulList.setColumn(0, "CI_ACCOUNT",this.dsCardList.getColumn(e.row,"CI_ACCOUNT"));
        	this.opener.dsSubulList.setColumn(0, "CI_AMTLIMIT",this.dsCardList.getColumn(e.row,"CI_AMTLIMIT"));
        	this.opener.dsSubulList.setColumn(0, "CI_CARDDATE",this.dsCardList.getColumn(e.row,"CI_CARDDATE"));
        	this.close();
        };

        this.mdt_sch_cardnum_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        		this.btn_search.click();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PD202_SearchF_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.cbo_sch_type.addEventHandler("onitemchanged",this.cbo_section_onitemchanged,this);
            this.cbo_sch_type.addEventHandler("onkeydown",this.cbo_section_onkeydown,this);
            this.mdt_sch_cardnum.addEventHandler("onkeydown",this.mdt_sch_cardnum_onkeydown,this);
            this.grd_cust_list.addEventHandler("oncelldblclick",this.grd_cust_list_oncelldblclick,this);
        };
        this.loadIncludeScript("PD202_SearchF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
