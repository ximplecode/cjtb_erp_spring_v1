(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PDTeam_DivideF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(840,640);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DSDIVIDTEAM", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSECODE\" type=\"STRING\" size=\"5\"/><Column id=\"BUSENAME\" type=\"STRING\" size=\"30\"/><Column id=\"TEAMCODE\" type=\"STRING\" size=\"4\"/><Column id=\"TEAMNAME\" type=\"STRING\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DSTEAMCODE", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSECODE\" type=\"STRING\" size=\"5\"/><Column id=\"BUSENAME\" type=\"STRING\" size=\"30\"/><Column id=\"TEAMCODE\" type=\"STRING\" size=\"4\"/><Column id=\"TEAMNAME\" type=\"STRING\" size=\"50\"/><Column id=\"BU_ACTNCLASS\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DSKIND", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"1\"/><Column id=\"NAME\" type=\"STRING\" size=\"20\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">조직</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">프로젝트</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_DEPT_TREE", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"CHAR\" size=\"5\"/><Column id=\"bu_level\" type=\"CHAR\" size=\"1\"/><Column id=\"bu_grcode\" type=\"CHAR\" size=\"5\"/><Column id=\"bu_seq\" type=\"CHAR\" size=\"2\"/><Column id=\"bu_name\" type=\"STRING\" size=\"50\"/><Column id=\"bu_actnclass\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DSWORKTEAM", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSECODE\" type=\"STRING\" size=\"5\"/><Column id=\"BUSENAME\" type=\"STRING\" size=\"30\"/><Column id=\"WORKCODE\" type=\"STRING\" size=\"4\"/><Column id=\"WORKNAME\" type=\"STRING\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DSKIND_0", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"1\"/><Column id=\"NAME\" type=\"STRING\" size=\"20\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">제조/원가</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">판관</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAccountDtlTeam", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNTMST_ID\" type=\"STRING\" size=\"20\"/><Column id=\"ACNTDTL_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"ACNTTEAM_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"TEAMCODE\" type=\"STRING\" size=\"5\"/><Column id=\"TEAMNAME\" type=\"STRING\" size=\"50\"/><Column id=\"ACNTDTL_AMOUNT\" type=\"INT\" size=\"13\"/><Column id=\"ACNTDTL_VAT\" type=\"STRING\" size=\"12\"/><Column id=\"WORKCODE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACNTTIT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORDMST_TITNO\" type=\"STRING\" size=\"256\"/><Column id=\"BU_ACTNCLASS\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static07","3","44","443","596",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Static07");
            obj.set_border("1px solid lightgray");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","528","42","307","597",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Static06");
            obj.set_border("1px solid lightgray");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","1","640","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("팀/항목 추가");
            obj.set_font("bold 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","2","44","443","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("부서/팀 선택");
            obj.set_border("1px solid lightgray");
            obj.set_background("#D3D3Dr");
            obj.set_textAlign("center");
            obj.set_font("bold 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","528","42","307","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("귀속 비용 등록");
            obj.set_background("#D3D3Dr");
            obj.set_border("1px solid lightgray");
            obj.set_textAlign("center");
            obj.set_font("bold 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","781","8","54","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Grid("grdOrgTree","2","111","188","527",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("DS_DEPT_TREE");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"187\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:bu_name\" treelevel=\"bind:bu_level\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","5","76","192","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("관 리 대 장");
            obj.set_textAlign("center");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grd_Dtl","189","111","256","264",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("DSTEAMCODE");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"팀코드\"/><Cell col=\"1\" text=\"팀        명\"/><Cell col=\"2\" text=\"제조/판관\"/></Band><Band id=\"body\"><Cell text=\"bind:TEAMCODE\"/><Cell col=\"1\" text=\"bind:TEAMNAME\"/><Cell col=\"2\" text=\"bind:BU_ACTNCLASS\" displaytype=\"combotext\" combodataset=\"DSKIND_0\" combocodecol=\"CODE\" combodatacol=\"NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Radio("Rd_Kind","208","78","232","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_direction("vertical");
            obj.set_innerdataset("DSKIND");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("조직");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","189","374","256","264",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("DSWORKTEAM");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"81\"/><Column size=\"176\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"업무 항목\"/></Band><Band id=\"body\"><Cell text=\"bind:WORKCODE\"/><Cell col=\"1\" text=\"bind:WORKNAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Btn_Book_Reg","461","333","52","23",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_BookDelete","461","364","52","23",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("Grd_TEAM_DIVIDE","528","140","307","498",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("dsAccountDtlTeam");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"팀    명\"/><Cell col=\"1\" text=\"업무 구분\"/><Cell col=\"2\" text=\"금    액\"/></Band><Band id=\"body\"><Cell text=\"bind:TEAMNAME\"/><Cell col=\"1\" text=\"bind:WORKNAME\"/><Cell col=\"2\" text=\"bind:ACNTDTL_AMOUNT\" displaytype=\"number\" edittype=\"mask\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","546","73","52","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("대상비용");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","539","108","76","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("귀속비용합계");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MEdt_Cost","629","71","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("Mkedt_divid_cost","629","105","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_enable("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",840,640,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PDTeam_DivideF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("PDTeam_DivideF.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("PDTeam_DivideF.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("PDTeam_DivideF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var pACNTDTL_AMOUNT;
        var pACNTMST_ID;
        var pACNTDTL_SEQ;
        var sSection_Code = nexacro.wrapQuote(nexacro.getApplication().gds_userinfo.getColumn(0,"BUSECD"));

        this.parentForm = this.opener;
        var nDate = new Date();
        var today = Eco.date.getMaskFormatString(nDate, "yyyyMMdd");

        this.PDProduct_SearchF_OnLoad = function(obj,e)
        {
        	pACNTDTL_AMOUNT = this.parent.ACNTDTL_AMOUNT;
        	pACNTMST_ID = this.parent.ACNTMST_ID;
        	pACNTDTL_SEQ = this.parent.ACNTDTL_SEQ;
        	var pPRF_CODE = this.parent.PRF_CODE;

        	this.gfn_TransactionP("search", "JSP/hr/sql_dept_Tree_payd.jsp", "DS_DEPT_TREE=DS_DEPT_TREE", "DS_DEPT_TREE=DS_DEPT_TREE", "", "", false, "P", false, this);

        	// 작성부서로 기본 SELECT
        	var str_Arg = "BUSECODE=" + sSection_Code;
        		str_Arg += " AD_KIND=" + nexacro.wrapQuote("0");

        	this.gfn_TransactionP("search", "JSP/pd/divid_team_select1.jsp", "DSTEAMCODE=DSTEAMCODE", "DSTEAMCODE=DSTEAMCODE", str_Arg, "fnCallback", false, "P", false, this);

        	if ( this.Rd_Kind.value == "0" )  //조직
        	{
        		var str_Arg = "BUSECODE=" + sSection_Code;

        		this.gfn_TransactionP("search", "JSP/pd/WorkList_Select.jsp", "DSWORKTEAM=DSWORKTEAM", "DSWORKTEAM=DSWORKTEAM", str_Arg, "fnCallback", false, "P", false, this);
        	}

        	if(pACNTMST_ID != null && pACNTDTL_SEQ != null)
        	{
        		var str_Arg = "ACNTMST_ID =" + pACNTMST_ID;
        			str_Arg += " ACNTDTL_SEQ =" + pACNTDTL_SEQ;

        		this.gfn_TransactionP("search", "JSP/pd/pd110f_account_dtl_team_divid.jsp", "dsAccountDtlTeam=dsAccountDtlTeam", "dsAccountDtlTeam=dsAccountDtlTeam", str_Arg, "fnCallback", false, "P", false, this);

        		this.Mkedt_divid_cost.set_value(this.dsAccountDtlTeam.getSum("ACNTDTL_AMOUNT"));
        	}

        	this.MEdt_Cost.set_value(pACNTDTL_AMOUNT);
        };

        this.btnClose_OnClick = function(obj,e)
        {
        	if(this.item_check())
        		this.close();
        };


        // fnCallBack
        this.fnCallback = function(Trid, ErrorCode, ErrorMsg)
        {
        	if(Trid == "search")
        	{
        		if(ErrorCode != 0 )
        			trace("[PD110F.fnCallback(" + today + ")] " + Trid +"::"+ ErrorMsg );
        	}
        }

        this.grdOrgTree_oncellclick = function(obj,e)
        {
        	this.DSWORKTEAM.clearData();

        	var strBuse = "", strname = "";

        	strBuse = nexacro.trim(this.DS_DEPT_TREE.getColumn(e.row, "code"));

        	var str_Arg = "BUSECODE=" + nexacro.wrapQuote(strBuse);
        		str_Arg += " AD_KIND=" + nexacro.wrapQuote("0");

        	this.gfn_TransactionP("search", "JSP/pd/divid_team_select1.jsp", "DSTEAMCODE=DSTEAMCODE", "DSTEAMCODE=DSTEAMCODE", str_Arg, "fnCallback", false, "P", false, this);

        	if ( this.Rd_Kind.value == "0" )  //조직
        	{
        		var nRow = this.DSTEAMCODE.rowposition;
        		strBuse = this.DSTEAMCODE.getColumn(this.DSTEAMCODE.nRow, "BUSECODE");
        		var str_Arg = "BUSECODE=" + nexacro.wrapQuote(strBuse);


        		this.gfn_TransactionP("search", "JSP/pd/WorkList_Select.jsp", "DSWORKTEAM=DSWORKTEAM", "DSWORKTEAM=DSWORKTEAM", str_Arg, "fnCallback", false, "P", false, this);
        	}
        };

        this.Grd_Dtl_OnCellClick = function(obj,e)
        {
        	this.DSWORKTEAM	.clearData();

        	if ( this.Rd_Kind.value == "0" )  //조직
        	{
        		var strBuse = "";
        		strBuse = nexacro.trim(this.DSTEAMCODE.getColumn(e.row, "TEAMCODE"));

        		if ( strBuse == "91300" || strBuse == "91400" )   //경영관리부_에듀테크, 고객센터
        		{
        			var str_Arg = "BUSECODE=" + nexacro.wrapQuote(strBuse);

        			this.gfn_TransactionP("search", "JSP/pd/WorkList_Team_Select.jsp", "DSWORKTEAM=DSWORKTEAM", "DSWORKTEAM=DSWORKTEAM", str_Arg, "fnCallback", false, "P", false, this);
        		}
        		else if ( strBuse.substr(0,2) == "3H" )   //경영관리부_에듀테크, 고객센터
        		{
        			var str_Arg = "BUSECODE=" + nexacro.wrapQuote("3H000");

        			this.gfn_TransactionP("search", "JSP/pd/WorkList_Team_Select.jsp", "DSWORKTEAM=DSWORKTEAM", "DSWORKTEAM=DSWORKTEAM", str_Arg, "fnCallback", false, "P", false, this);
        		}
        	}
        };

        this.Btn_Book_Reg_OnClick = function(obj,e)
        {
        	var nRow = this.DSTEAMCODE.rowposition;
        	var aRow = this.DSWORKTEAM.rowposition;
        	var i = this.dsAccountDtlTeam.findRow("TEAMCODE", this.DSTEAMCODE.getColumn(nRow, "TEAMCODE"));

        	if (i == -1)
        	{
        		if (this.DSTEAMCODE.getColumn(nRow, "TEAMCODE") != "99000") //중등교과서
        		{
        			var iRow = this.dsAccountDtlTeam.addRow();
        			var sACNTTEAM_SEQ = "";

        			if (this.dsAccountDtlTeam.getCountNF() == 1)
        			{
        				sACNTTEAM_SEQ = ((sACNTTEAM_SEQ)+1).padLeft(3, "0");
        			}
        			else
        			{
        				var sACNTTEAM_SEQ1 = nexacro.toNumber(this.dsAccountDtlTeam.getMaxNF("ACNTTEAM_SEQ")) + 1;
        				sACNTTEAM_SEQ = sACNTTEAM_SEQ1.toString().padLeft(3, "0");
        			}

        			if(pACNTMST_ID != null || "undefined")
        			{

        				this.dsAccountDtlTeam.setColumn(iRow, "ACNTMST_ID",  pACNTMST_ID.replace(pACNTMST_ID));
        				this.dsAccountDtlTeam.setColumn(iRow, "ACNTDTL_SEQ",  pACNTDTL_SEQ);
        			}

        			this.dsAccountDtlTeam.setColumn(iRow, "ACNTTEAM_SEQ", sACNTTEAM_SEQ);
        			this.dsAccountDtlTeam.setColumn(iRow, "TEAMCODE",     this.DSTEAMCODE.getColumn(nRow, "TEAMCODE"));
        			this.dsAccountDtlTeam.setColumn(iRow, "TEAMNAME",     this.DSTEAMCODE.getColumn(nRow, "TEAMNAME"));
        			this.dsAccountDtlTeam.setColumn(iRow, "WORKCODE",     this.DSWORKTEAM.getColumn(aRow, "WORKCODE"));
        			this.dsAccountDtlTeam.setColumn(iRow, "WORKNAME",     this.DSWORKTEAM.getColumn(aRow, "WORKNAME"));
        			this.dsAccountDtlTeam.setColumn(iRow, "BU_ACTNCLASS", this.DSTEAMCODE.getColumn(nRow, "BU_ACTNCLASS"));

        			if ( nRow == 0 )
        				this.dsAccountDtlTeam.setColumn(iRow, "ACNTDTL_AMOUNT", nexacro.trim(this.MEdt_Cost.value));

        			this.Grd_TEAM_DIVIDE.setCellPos(2);
        			this.Grd_TEAM_DIVIDE.showEditor();
        		}
        		else
        		{
        			alert("중등교과서는 귀속대상이 될수 없습니다. 다른 부서를 선택해 주세요");
        		}


        	} else
        		alert("선택 하신 부서(팀)이 이미 등록되어 있습니다.");
        };

        this.Grd_TEAM_DIVIDE_OnEnterDown = function(obj,e)
        {
        	var pPRF_CODE = this.parent.PRF_CODE;
        	var nRow = this.dsAccountDtlTeam.rowposition;

        	if( pPRF_CODE == 3)
        	{
        		this.dsAccountDtlTeam.setColumn(nRow, "ACNTDTL_VAT", nexacro.Decimal(nexacro.toNumber(this.dsAccountDtlTeam.getColumn(nRow, "ACNTDTL_AMOUNT"))).trunc() /10 );
        	}
        	else if( pPRF_CODE != 3)
        	{
        		this.dsAccountDtlTeam.setColumn(nRow, "ACNTDTL_VAT", "0");
        	}
        };

        this.Grd_TEAM_DIVIDE_OnKeyDown = function(obj,e)
        {
        	var nChar = e.keycode;

        	if (nChar == 13)
        	{
        		this.Grd_TEAM_DIVIDE.moveToNextCell();
        		this.Grd_TEAM_DIVIDE.showEditor();

        		this.Mkedt_divid_cost.set_value(this.dsAccountDtlTeam.getSum("ACNTDTL_AMOUNT"));
        	}
        };

        this.Rd_Kind_OnChanged = function(obj,e)
        {
        	if (this.Rd_Kind.value == "0" )
        	{
        		this.DSTEAMCODE.clearData();
        		this.DSWORKTEAM.clearData();
        		this.grdOrgTree.set_enable(true);
        	}
        	else
        	{
        		this.grdOrgTree.set_enable(false);
        		this.DSWORKTEAM.clearData();

        		var str_arg = "BUSECODE=" + nexacro.wrapQuote("00000");
        			str_arg += " AD_KIND=" + "1";

        		this.gfn_TransactionP("search", "JSP/pd/divid_team_select1.jsp", "DSTEAMCODE=DSTEAMCODE", "DSTEAMCODE=DSTEAMCODE", str_arg, "fnCallback", false, "P", false, this);
        	}
        };

        // 삭제
        this.btn_BookDelete_OnClick = function(obj,e)
        {
        	this.dsAccountDtlTeam.deleteRow(this.dsAccountDtlTeam.row);
        };

        this.item_check = function()
        {
        	var ret_value = true;
        	var pPRF_CODE = this.parent.PRF_CODE;

            if (this.dsAccountDtlTeam.rowcount == 0)
             {
               alert("입력된 비용 귀속팀이 없습니다! 비용 귀속팀을 입력하세요!");
               ret_value = false;
               return false;
             }

            var cost_tot = this.dsAccountDtlTeam.getSum("ACNTDTL_AMOUNT");

            if ( this.MEdt_Cost.value != cost_tot)
             {
               alert("등록하신 귀속비용의 합이 귀속대상 금액과 일치 하지 않습니다!\r\n금액을 확인하세요!");
               ret_value = false;
               return false;
             }

            for( var i=0; i <= this.dsAccountDtlTeam.rowcount-1; i++)
        	{
        		if( this.dsAccountDtlTeam.getColumn(i,"ACNTDTL_AMOUNT") == null || this.dsAccountDtlTeam.getColumn(i,"ACNTDTL_AMOUNT") == 0 )
        		{
        		  alert("금액이 입력되지 않은 항목이 있습니다!\r\n금액을 확인해 주세요!");
        		  ret_value = false;
        		  break;
        		}

        		if( pPRF_CODE == "3")
        		{
        			this.dsAccountDtlTeam.setColumn(i, "ACNTDTL_VAT", nexacro.Decimal(nexacro.toNumber(this.dsAccountDtlTeam.getColumn(i, "ACNTDTL_AMOUNT"))).trunc() /10 );
        		}

        	}

           return ret_value;
        };

        this.PDTeam_divideF_onbeforeclose = function(obj,e)
        {
        	this.opener.dsAccountDtlTeam.copyData(this.dsAccountDtlTeam);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PDProduct_SearchF_OnLoad,this);
            this.addEventHandler("onbeforeclose",this.PDTeam_divideF_onbeforeclose,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_OnClick,this);
            this.grdOrgTree.addEventHandler("oncellclick",this.grdOrgTree_oncellclick,this);
            this.Grd_Dtl.addEventHandler("oncellclick",this.Grd_Dtl_OnCellClick,this);
            this.Rd_Kind.addEventHandler("onitemchanged",this.Rd_Kind_OnChanged,this);
            this.Btn_Book_Reg.addEventHandler("onclick",this.Btn_Book_Reg_OnClick,this);
            this.btn_BookDelete.addEventHandler("onclick",this.btn_BookDelete_OnClick,this);
            this.Grd_TEAM_DIVIDE.addEventHandler("onenterdown",this.Grd_TEAM_DIVIDE_OnEnterDown,this);
            this.Grd_TEAM_DIVIDE.addEventHandler("onkeydown",this.Grd_TEAM_DIVIDE_OnKeyDown,this);
        };
        this.loadIncludeScript("PDTeam_DivideF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
