(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PD110_CardUseListF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(640,504);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DSCORPCARDUSELIST", this);
            obj._setContents("<ColumnInfo><Column id=\"CCUL_ID\" type=\"INT\" size=\"100\"/><Column id=\"CCUL_USEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"CREDITCARD_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"CREDITCARD_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"CCUL_AMOUNT\" type=\"INT\" size=\"10\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CCUL_CUST_NAME\" type=\"STRING\" size=\"35\"/><Column id=\"CCUL_GETBACK_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"CCUL_GETBACK_USER\" type=\"STRING\" size=\"6\"/><Column id=\"CCUL_REMARK\" type=\"STRING\" size=\"200\"/><Column id=\"CCUL_SECTIONMANAGECOST\" type=\"STRING\" size=\"1\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK_CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"CCUL_USETIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DSHYUNDAICARDUSELIST", this);
            obj._setContents("<ColumnInfo><Column id=\"CCUL_ID\" type=\"STRING\" size=\"20\"/><Column id=\"CCUL_USEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"CREDITCARD_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"CREDITCARD_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"CCUL_AMOUNT\" type=\"INT\" size=\"10\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CCUL_CUST_NAME\" type=\"STRING\" size=\"35\"/><Column id=\"CCUL_GETBACK_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"CCUL_GETBACK_USER\" type=\"STRING\" size=\"6\"/><Column id=\"CCUL_REMARK\" type=\"STRING\" size=\"200\"/><Column id=\"CCUL_SECTIONMANAGECOST\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DSKIND", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"1\"/><Column id=\"NAME\" type=\"STRING\" size=\"20\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">NEW 법인카드</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">신한, 우리카드 외</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","2","639","38",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("법인카드 사용내역");
            obj.set_border("1px solid lightgray");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","2","51","101","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("관 리 대 상");
            this.addChild(obj.name, obj);

            obj = new Button("btn_all","480","8","75","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("일괄등록");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","569","8","57","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid0","1","90","637","411",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("DSCORPCARDUSELIST");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사용일자\"/><Cell col=\"1\" text=\"카드종류\"/><Cell col=\"2\" text=\"사용금액\"/><Cell col=\"3\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:CCUL_USEDATE\" displaytype=\"date\"/><Cell col=\"1\" text=\"bind:CREDITCARD_NAME\"/><Cell col=\"2\" text=\"bind:CCUL_AMOUNT\"/><Cell col=\"3\" text=\"bind:CCUL_REMARK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Radio("Rd_Kind","230","50","402","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("DSKIND");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_visible("false");
            obj.set_direction("vertical");
            obj.set_text("NEW 법인카드");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid1","2","90","638","410",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("DSCORPCARDUSELIST");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"71\"/><Column size=\"128\"/><Column size=\"70\"/><Column size=\"123\"/><Column size=\"74\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"승인일자\"/><Cell col=\"1\" text=\"카드종류\"/><Cell col=\"2\" text=\"카드번호\"/><Cell col=\"3\" text=\"사용금액\"/><Cell col=\"4\" text=\"가맹점명\"/><Cell col=\"5\" text=\"부서운영비\"/></Band><Band id=\"body\"><Cell text=\"bind:CCUL_USEDATE\" displaytype=\"date\"/><Cell col=\"1\" text=\"bind:CREDITCARD_NAME\"/><Cell col=\"2\" text=\"bind:CREDITCARD_CODE\"/><Cell col=\"3\" text=\"bind:CCUL_AMOUNT\"/><Cell col=\"4\" text=\"bind:CCUL_CUST_NAME\"/><Cell col=\"5\" text=\"bind:CCUL_SECTIONMANAGECOST\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band></Format><Format id=\"default0\"><Columns><Column size=\"31\"/><Column size=\"88\"/><Column size=\"49\"/><Column size=\"71\"/><Column size=\"110\"/><Column size=\"70\"/><Column size=\"123\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"승인일자\"/><Cell col=\"2\" text=\"시간\"/><Cell col=\"3\" text=\"카드종류\"/><Cell col=\"4\" text=\"카드번호\"/><Cell col=\"5\" text=\"사용금액\"/><Cell col=\"6\" text=\"가맹점명\"/><Cell col=\"7\" text=\"부서운영비\"/></Band><Band id=\"body\"><Cell col=\"0\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:CCUL_USEDATE\" displaytype=\"date\"/><Cell col=\"2\" text=\"bind:CCUL_USETIME\"/><Cell col=\"3\" text=\"bind:CREDITCARD_NAME\"/><Cell col=\"4\" text=\"bind:CREDITCARD_CODE\"/><Cell col=\"5\" text=\"bind:CCUL_AMOUNT\"/><Cell col=\"6\" text=\"bind:CCUL_CUST_NAME\"/><Cell col=\"7\" text=\"bind:CCUL_SECTIONMANAGECOST\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",640,504,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PD110_CardUseListF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("PD110_CardUseListF.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("PD110_CardUseListF.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("PD110_CardUseListF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var gv_SABUN = nexacro.getApplication().gds_userinfo.getColumn(0, "SABUN");
        var gv_actnclass = nexacro.getApplication().gds_userinfo.getColumn(0, "BU_ACTNCLASS");
        var nDate = new Date();
        var today = Eco.date.getMaskFormatString(nDate, "yyyyMMdd");
        this.parentForm = this.opener;
        var iClickCnt = 0;
        var s_chk;
        var dsObj;
        var nCell;

        this.PD110_CardUseListF_OnLoad = function(obj,e)
        {
        	var ImgTitleName = this.parent.ImgTitleName;
        	dsObj = this.parent.DSName;
        	s_chk = true;
        	this.Static00.set_text(ImgTitleName);
        	this.CardUseList_Search();


        	if ( this.parentForm.name == "PD110F" ||  this.parentForm.name == "PD120F")
        	{
        		this.btn_all.set_visible(true);
        		this.Grid1.set_formatid("default0");
        	}
        	else
        	{
        		this.btn_all.set_visible(false);
        		this.Grid1.set_formatid("default");
        	}
        };

        this.CardUseList_Search = function()
        {
        	var JSPFileName = this.parent.JSPFileName;
        	this.DSCORPCARDUSELIST.clearData();

        	if ( this.Rd_Kind.value == "0" )  //현대카드
        	{
        		this.Grid0.set_visible(false);
        		this.Grid1.set_visible(true);
        	}
        	else
        	{
        		this.Grid0.set_visible(true);
        		this.Grid1.set_visible(false);
        	}
        	var str_arg  = "";

        	str_arg = "EMPLOYEE_ID=" + nexacro.wrapQuote(gv_SABUN);
        	str_arg += " Rd_Kind=" + nexacro.wrapQuote(this.Rd_Kind.value);
        	this.gfn_TransactionP("search", JSPFileName, "DSCORPCARDUSELIST=DSCORPCARDUSELIST", "DSCORPCARDUSELIST=DSCORPCARDUSELIST", str_arg, "fnCallBack", false, "P", false, this);
        }

        //fnCallBack 콜백
        this.fnCallBack = function(Trid, errCode, errMsg)
        {
        	if(Trid == "search")
        	{
        		if(errCode != 0 )
        			trace("[PD110_CardUseListF.fnCallBack(" + today + ")] " + Trid +"::"+ errMsg );
        		else if (this.DSCORPCARDUSELIST.rowcount == 0)
        		{
        			this.DSCORPCARDUSELIST.clearData();
        			this.parentForm.Div01.form.Cb_Proof.index = -1;
        			alert("법인카드 사용내역이 없거나, 경리부에서 카드가 미회수 상태입니다.\n\n" +
        			      "법인카드 사용내역이 미회수 상태일 경우 경리부에 회수 요청하시기 바랍니다.");
        		}
        	}
        }
        this.Grid0_OnCellDblClick = function(obj,e)
        {
        	var nRow = e.row
        	var tRow = this.parent.DSRowNum;

        	trace("nRow :" + nRow);
        	trace("CUST_GUBN : "  + this.DSCORPCARDUSELIST.getColumn(nRow, "CUST_GUBN"));
        	trace("tRow :" + tRow);

        	if (this.DSCORPCARDUSELIST.getCount() > 0)
        	{
        		iClickCnt = ++iClickCnt;

        		if ( dsObj.id == "dsAccountDtl")
        		{
        			this.opener.dsAccountDtl.setColumn(tRow, "CUST_GUBN", this.DSCORPCARDUSELIST.getColumn(nRow, "CUST_GUBN"));
        			this.opener.dsAccountDtl.setColumn(tRow, "CUST_CODE", this.DSCORPCARDUSELIST.getColumn(nRow, "CUST_CODE"));
        			this.opener.dsAccountDtl.setColumn(tRow, "CCUL_ID"	, this.DSCORPCARDUSELIST.getColumn(nRow, "CCUL_ID"));
        			trace("ccul_id : " + this.DSCORPCARDUSELIST.getColumn(nRow, "CCUL_ID"));
        			if ( this.Rd_Kind.value == "0" )  //현대카드
        			{
        				this.opener.dsAccountDtl.setColumn(tRow, "ACNTDTL_CARDGB"	, "01");
        				this.opener.dsAccountDtl.setColumn(tRow, "CCUL_SECTIONMANAGECOST"	, this.DSCORPCARDUSELIST.getColumn(nRow, "CCUL_SECTIONMANAGECOST"));
        			}
        			else
        			{
        				this.opener.dsAccountDtl.setColumn(tRow, "ACNTDTL_CARDGB"	, "");
        				this.opener.dsAccountDtl.setColumn(tRow, "CCUL_SECTIONMANAGECOST"	, "0");
        			}
        			this.opener.dsAccountDtl.setColumn(tRow, "ACNTDTL_AMOUNT"	, this.DSCORPCARDUSELIST.getColumn(nRow, "CCUL_AMOUNT"));
        			this.opener.dsAccountDtl.setColumn(tRow, "ACNTDTL_CUSTNAME", this.DSCORPCARDUSELIST.getColumn(nRow, "CCUL_CUST_NAME"));

        			this.opener.dsAccountDtl.setColumn(tRow, "ACNTDTL_USEDATE" , this.DSCORPCARDUSELIST.getColumn(nRow, "CCUL_USEDATE"));
        			this.opener.dsAccountDtl.setColumn(tRow, "CREDITCARD_NAME" , this.DSCORPCARDUSELIST.getColumn(nRow, "CREDITCARD_NAME"));
        			this.opener.dsAccountDtl.setColumn(tRow, "WEEK_CHECK", this.DSCORPCARDUSELIST.getColumn(nRow, "WEEK_CHECK"));
        			this.opener.dsAccountDtl.setColumn(tRow, "CARDNUM"	  , this.DSCORPCARDUSELIST.getColumn(nRow, "CREDITCARD_CODE"));

        			//부서 운영비
        			if (this.DSCORPCARDUSELIST.getColumn(nRow, "CCUL_SECTIONMANAGECOST") == "1")
        			{
        				this.opener.dsAccountDtl.setColumn(tRow, "ACNTTIT_NAME", "부서운영비");
        				this.opener.Div01.form.Edt_AcntTitName.set_text("부서운영비");
        				this.opener.Div01.form.Img_AccountTitle.set_enable(false);
        				this.opener.Div01.form.Edt_AcntTitName.set_enable(false);

        				if (gv_actnclass == "1")
        				{
        					this.opener.dsAccountDtl.setColumn(tRow, "ACNTTIT_NO"	, 10);
        					this.opener.Div01.form.Edt_AcntTitName.userData	= 10;
        					this.opener.dsAccountDtl.setColumn(tRow, "ACNTTIT_NO", 10);
        					this.opener.dsAccountDtl.setColumn(tRow, "ACNTTIT_CODE", "0010");
        				}
        				else
        				{
        					this.opener.dsAccountDtl.setColumn(tRow, "ACNTTIT_NO"	, 32);
        					this.opener.Div01.form.Edt_AcntTitName.userData	= 32;
        					this.opener.dsAccountDtl.setColumn(tRow, "ACNTTIT_NO", 32);
        					this.opener.dsAccountDtl.setColumn(tRow, "ACNTTIT_CODE", "0032");
        				}
        			}
        		}
        		else if (dsObj.id == "dsGovAcntDtl")
        		{
        			this.dsGovAcntDtl.setColumn(tRow, "CUST_GUBN", this.DSCORPCARDUSELIST.getColumn(nRow, "CUST_GUBN"));
        			this.dsGovAcntDtl.setColumn(tRow, "CUST_CODE", this.DSCORPCARDUSELIST.getColumn(nRow, "CUST_CODE"));
        			this.dsGovAcntDtl.setColumn(tRow, "CCUL_ID"	, this.DSCORPCARDUSELIST.getColumn(nRow, "CCUL_ID"));

        			if ( this.Rd_Kind.value == "0" )  //현대카드
        			{
        				this.opener.dsGovAcntDtl.setColumn(tRow, "GACNTDTL_CARDGB"	, "01");
        			}
        			else
        			{
        				this.opener.dsGovAcntDtl.setColumn(tRow, "GACNTDTL_CARDGB"	, "");
        			}

        			this.opener.dsGovAcntDtl.setColumn(tRow, "GACNTDTL_AMOUNT"	 , this.DSCORPCARDUSELIST.getColumn(nRow, "CCUL_AMOUNT"));
        			this.opener.dsGovAcntDtl.setColumn(tRow, "GACNTDTL_CUSTNAME", this.DSCORPCARDUSELIST.getColumn(nRow, "CCUL_CUST_NAME"));

        			this.opener.dsGovAcntDtl.setColumn(tRow, "GACNTDTL_USEDATE" , this.DSCORPCARDUSELIST.getColumn(nRow, "CCUL_USEDATE"));
        			this.opener.dsGovAcntDtl.setColumn(tRow, "CREDITCARD_NAME" , this.DSCORPCARDUSELIST.getColumn(nRow, "CREDITCARD_NAME"));
        		}
        	}
        	this.btnClose_OnClick(obj);
        };

        this.btnClose_OnClick = function(obj)
        {
        	this.opener.fctn_Proof_Com_Enable(true);
        	this.close(iClickCnt);
        };

        // 헤더클릭시 오름 내림+전체 체크박스 잘 되도록...
        this.Grid1_OnHeadClick = function(obj,e)
        {
        	if(e.cell == 0){
        	trace(e.cell);
        		if(obj.getCellProperty("head",0,'text') ==1){
        			obj.setCellProperty("head",0,'text',0);

        			var intColCnt = this.DSCORPCARDUSELIST.getColCount();

        			this.DSCORPCARDUSELIST.set_enableevent(false);
        			for(var i=0;i<this.DSCORPCARDUSELIST.rowcount;i++){
        				//this.Dataset00.setColumn(i,"CHK",this.Dataset00.getOrgColumn( e.row ,"CHK" ));
        				for (j=0;j<intColCnt;j++) {
        					this.DSCORPCARDUSELIST.setColumn(i,this.DSCORPCARDUSELIST.getColID(j),this.DSCORPCARDUSELIST.getOrgColumn( i ,this.DSCORPCARDUSELIST.getColID(j) ));
        				}
        			}
        			this.DSCORPCARDUSELIST.set_enableevent(true);
        		}else{
        			obj.setCellProperty("head",0,'text',1);
        			this.DSCORPCARDUSELIST.set_enableevent(false);
        			for(var i=0;i<this.DSCORPCARDUSELIST.rowcount;i++){
        				this.DSCORPCARDUSELIST.setColumn(i,"CHK",1);
        			}
        			this.DSCORPCARDUSELIST.set_enableevent(true);
        		}
        	}

        	if (this.DSCORPCARDUSELIST.rowcount > 0) {
        		this.gfn_gridSort(obj, e.col, "▼","▲") ;
        	}
        };

        //오름 내림 정렬
        this.gfn_gridSort = function(objGrid, col, AscMark,DscMark){
        	var	objDataset ;
        	var strHeadText ;
        	var strTitle ;
        	var strMark ;
        	var i;
        	var chk_value;

        	objDataset = objGrid.getBindDataset() ;
        	if(objDataset == null) return ;

        	var BodyColId = (objGrid.getCellProperty("body", col,"text")).toString().split(":");

        	for (var i = 1; i < objGrid.getCellCount("head"); i++) {
        		strHeadText = objGrid.getCellText(-1, i) ;
        		strTitle = strHeadText.substr(0, strHeadText.length - 1);
        		strMark = strHeadText.substr(strHeadText.length-1);

        		if(i==col)
        		{
        			if (strMark == AscMark)
        			{
        				objGrid.setCellProperty( "head", i, "text", strTitle+DscMark);
        				objDataset.set_keystring("S:-"+BodyColId[1]);
        			}
        			else if (strMark == DscMark)
        			{
        				objGrid.setCellProperty( "head", i, "text", strTitle+AscMark);
        				objDataset.set_keystring("S:+"+BodyColId[1]);
        			} else
        			{
        				objGrid.setCellProperty( "head", i, "text", strHeadText+AscMark);
        				objDataset.set_keystring("S:+"+BodyColId[1]);
        			}
        		}
        		else
        		{
        			if (strMark == AscMark || strMark == DscMark)
        			{
        				objGrid.setCellProperty( "head", i, "text", strTitle);
        			}
        		}
        	}
        };

        this.Rd_Kind_OnChanged = function(obj,e)
        {
        	this.CardUseList_Search();
        };

        this.btn_all_Onclick = function(obj,e)
        {
        	var i, nRow;
        	var tRow = dsObj.rowposition;

        	this.opener.dsCorpCardUseList.clearData();

        	for (i = 0; i < this.DSCORPCARDUSELIST.rowcount; i++)
        	{
        	   if (this.DSCORPCARDUSELIST.getColumn(i,"CHK") == "1")
        	   {
        	      if ( this.check_CorpCardKind(i) == false )
        		  {
        			alert("법인카드와 개인형 법인카드는 하나의 지결서에 작성할 수 없습니다.");
        			break;
        		  }else{
        			nRow = this.opener.dsCorpCardUseList.addRow();
        			this.opener.dsCorpCardUseList.copyRow(nRow,this.DSCORPCARDUSELIST,i);
        			trace("nRow : " + nRow );
        		  }
        	   }
        	}

        	this.opener.setdata_CardUse(tRow); // PD110F
        	this.close(1);
        };


        this.check_CorpCardKind = function(sRow)
        {
        	var acc_check, acc_check2, check, i;

        	check = true;

            if(this.DSCORPCARDUSELIST.getColumn(sRow,"CHK") == "1"){
        		if (this.DSCORPCARDUSELIST.getColumn(sRow,"CREDITCARD_NAME") == "(개인)법인")
        			acc_check = "0";
        		else
        			acc_check = "1";
            }

            for (i = 0; i < this.DSCORPCARDUSELIST.rowcount; i++)
        	{
        		if(this.DSCORPCARDUSELIST.getColumn(i,"CHK") == "1")
        		{
        			if (this.DSCORPCARDUSELIST.getColumn(i,"CREDITCARD_NAME") == "(개인)법인")
        				acc_check2 = "0";
        			else
        				acc_check2 = "1";

        			if (acc_check2 != acc_check)
        			{
        				check = false;
        				break;
        			}
        		}
        	}
        	trace("check : "+check);
        	return check;
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PD110_CardUseListF_OnLoad,this);
            this.btn_all.addEventHandler("onclick",this.btn_all_Onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_OnClick,this);
            this.Rd_Kind.addEventHandler("onitemchanged",this.Rd_Kind_OnChanged,this);
            this.Grid1.addEventHandler("oncelldblclick",this.Grid0_OnCellDblClick,this);
            this.Grid1.addEventHandler("onheadclick",this.Grid1_OnHeadClick,this);
        };
        this.loadIncludeScript("PD110_CardUseListF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
