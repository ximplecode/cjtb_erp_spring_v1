(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GW800_TEAM");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(860,660);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_buse", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"BU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BU_ACTNCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONLINE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTeamCode", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSECODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSENAME\" type=\"STRING\" size=\"256\"/><Column id=\"TEAMCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TEAMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"BU_ACTNCLASS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsKind", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"1\"/><Column id=\"NAME\" type=\"STRING\" size=\"20\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">조직</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">프로젝트</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsKind_0", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"1\"/><Column id=\"NAME\" type=\"STRING\" size=\"20\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">제조/원가</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">판관</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWorkTeam", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSECODE\" type=\"STRING\" size=\"5\"/><Column id=\"BUSENAME\" type=\"STRING\" size=\"30\"/><Column id=\"WORKCODE\" type=\"STRING\" size=\"4\"/><Column id=\"WORKNAME\" type=\"STRING\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCAccountDtlTeam", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNTMST_ID\" type=\"STRING\" size=\"20\"/><Column id=\"ACNTDTL_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"ACNTTEAM_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"TEAMCODE\" type=\"STRING\" size=\"5\"/><Column id=\"TEAMNAME\" type=\"STRING\" size=\"50\"/><Column id=\"ACNTDTL_AMOUNT\" type=\"STRING\" size=\"13\"/><Column id=\"ACNTDTL_VAT\" type=\"STRING\" size=\"12\"/><Column id=\"WORKCODE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACNTTIT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORDMST_TITNO\" type=\"STRING\" size=\"256\"/><Column id=\"BU_ACTNCLASS\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDividTeam", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSECODE\" type=\"STRING\" size=\"5\"/><Column id=\"BUSENAME\" type=\"STRING\" size=\"30\"/><Column id=\"TEAMCODE\" type=\"STRING\" size=\"4\"/><Column id=\"TEAMNAME\" type=\"STRING\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_00","20","60","530","590",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid dimgray");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_buse","9","99","260","480",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_buse");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"222\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:BU_LEVEL\" border=\"0px none #dbdee2\" cssclass=\"CssBuse_tree\"/></Band></Format></Formats>");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static00","-2","-1","530","42",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_text("부서/팀 선택");
            obj.set_textAlign("center");
            obj.set_font("bold 16px/normal \"Gulim\"");
            obj.set_background("#f4f4f4");
            obj.set_border("1px none dimgray, 1px none dimgray, 1px solid dimgray");
            this.div_00.addChild(obj.name, obj);

            obj = new Grid("grd_dtl","279","99","242","480",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsTeamCode");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"56\"/><Column size=\"119\"/><Column size=\"66\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"팀코드\"/><Cell col=\"1\" text=\"팀명\"/><Cell col=\"2\" text=\"제조/판관\"/></Band><Band id=\"body\"><Cell text=\"bind:TEAMCODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:TEAMNAME\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:BU_ACTNCLASS\" textAlign=\"center\" expr=\"BU_ACTNCLASS==1?&quot;제조/원가&quot;:BU_ACTNCLASS==2?&quot;판관&quot;:&quot;&quot;\"/></Band></Format></Formats>");
            this.div_00.addChild(obj.name, obj);

            obj = new Radio("rdo_kind","329","56","190","37",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("3");
            obj.set_columncount("2");
            obj.set_rowcount("1");
            obj.set_innerdataset("dsKind");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("조직");
            obj.set_value("0");
            obj.set_index("0");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static00","89","110","120","19",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("관 리 대 상");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","790","19","50","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","563","250","52","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","564","287","52","23",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Div("div_01","630","60","210","590",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_team_div","9","99","190","480",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsCAccountDtlTeam");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"114\"/><Column size=\"74\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"팀 명\"/><Cell col=\"1\" text=\"업무구분\"/></Band><Band id=\"body\"><Cell text=\"bind:TEAMNAME\"/><Cell col=\"1\" text=\"bind:WORKNAME\"/></Band></Format></Formats>");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("Static02","26","8","462","45",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("팀/항목 추가");
            obj.set_color("#7fb39d");
            obj.set_font("bold 32px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",860,660,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("GW800_TEAM.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("GW800_TEAM.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("GW800_TEAM.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var pACNTMST_ID;
        var pACNTDTL_AMOUNT;
        var pACNTDTL_SEQ;
        var pPRF_CODE;

        var DS_GW_U = nexacro.getApplication().DS_GW_U;
        var gds_userinfo = nexacro.getApplication().gds_userinfo;
        var sSection_Code = gds_userinfo.getColumn(0, "BUSECD");

        this.GW800_TEAM_onload = function(obj,e)
        {
        	var strUrl, inDs, outDs, strArg;

        	this.dsCAccountDtlTeam.copyData(this.opener.dsAccountDtlTeam);

        	strUrl = "JSP/common/getdata_buse.jsp";
        	strDs = "ds_buse=ds_buse";
        	strDs = "ds_buse=ds_buse";
        	strArg = "buse_nm=''" ;
        	this.gfn_TransactionP("select", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);

        	strUrl = "JSP/pd/divid_team_select1.jsp";
        	strArg = "BUSECODE=" + nexacro.wrapQuote(sSection_Code);
        	strArg += " AD_KIND=" + nexacro.wrapQuote("0");
        	strDs = "dsTeamCode=dsTeamCode";
        	strDs = "dsTeamCode=dsTeamCode";
        	this.gfn_TransactionP("search", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);

        	if ( this.div_00.form.rdo_kind.value == "0" ) //조직
        	{
        		strUrl = "JSP/pd/WorkList_Select.jsp";
        		strDs = "dsWorkTeam=dsWorkTeam";
        		strDs = "dsWorkTeam=dsWorkTeam";
        		strArg = "BUSECODE=" + nexacro.wrapQuote(sSection_Code);
        		this.gfn_TransactionP("search", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        	}

        	if(pACNTMST_ID != null && pACNTDTL_SEQ != null)
        	{
        		strUrl = "JSP/pd/pd110f_account_dtl_team_divid.jsp";
        		strDs = "dsCAccountDtlTeam";
        		strDs = "dsCAccountDtlTeam";
        		strArg = "ACNTMST_ID =" + nexacro.wrapQuote(pACNTMST_ID);
        		strArg += " ACNTDTL_SEQ =" + nexacro.wrapQuote(pACNTDTL_SEQ);
        		this.gfn_TransactionP("search", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        	}
        };

        this.btn_add_onclick = function(obj,e)
        {
        	var i = this.dsCAccountDtlTeam.findRow("TEAMCODE", this.dsTeamCode.getColumn(this.dsTeamCode.rowposition, "TEAMCODE"));

        	if ( this.dsCAccountDtlTeam.rowcount >= 1 ){
        		alert("귀속부서는 1개만 선택할 수 있습니다.");
        		return;
        	}

        	if (i = -1)
        	{
        		var nRow = this.dsCAccountDtlTeam.addRow();
        	    var sACNTTEAM_SEQ = "";

        	    if (this.dsCAccountDtlTeam.getCountNF() == 1)
        			sACNTTEAM_SEQ = "001";
        	    else
        		{
        			if(this.dsCAccountDtlTeam.getMaxNF("ACNTTEAM_SEQ") == null)
        				sACNTTEAM_SEQ = "001";
        			else
        				sACNTTEAM_SEQ = (nexacro.toNumber(this.dsCAccountDtlTeam.getMaxNF("ACNTTEAM_SEQ")) + 1).padLeft(3, "0");
        		}
        		if(pACNTMST_ID != null)
        		{
        			this.dsCAccountDtlTeam.setColumn(this.dsCAccountDtlTeam.rowposition, "ACNTMST_ID",  pACNTMST_ID);
        			this.dsCAccountDtlTeam.setColumn(this.dsCAccountDtlTeam.rowposition, "ACNTDTL_SEQ",  pACNTDTL_SEQ);
        		}

        		//if( row_status == 'INSERT'){
        		this.opener.dsPostDst.setColumn(this.opener.dsPostDst.rowposition, "BELONGING_DEPT_CODE", this.dsTeamCode.getColumn(this.dsTeamCode.rowposition, "TEAMCODE"));
        		this.opener.dsPostDst.setColumn(this.opener.dsPostDst.rowposition, "BELONGING_DEPT_NAME", this.dsTeamCode.getColumn(this.dsTeamCode.rowposition, "TEAMNAME"));
        		//}
        		this.dsCAccountDtlTeam.setColumn(nRow, "ACNTTEAM_SEQ", sACNTTEAM_SEQ);
        		this.dsCAccountDtlTeam.setColumn(nRow, "TEAMCODE",     this.dsTeamCode.getColumn(this.dsTeamCode.rowposition, "TEAMCODE"));
        		this.dsCAccountDtlTeam.setColumn(nRow, "TEAMNAME",     this.dsTeamCode.getColumn(this.dsTeamCode.rowposition, "TEAMNAME"));
        		this.dsCAccountDtlTeam.setColumn(nRow, "WORKCODE",     this.dsWorkTeam.getColumn(this.dsWorkTeam.rowposition, "WORKCODE"));
        		this.dsCAccountDtlTeam.setColumn(nRow, "WORKNAME",     this.dsWorkTeam.getColumn(this.dsWorkTeam.rowposition, "WORKNAME"));
        		this.dsCAccountDtlTeam.setColumn(nRow, "BU_ACTNCLASS", this.dsTeamCode.getColumn(this.dsTeamCode.rowposition, "BU_ACTNCLASS"));
        		/*
        		if ( nRow == 0 )
        			dsAccountDtlTeam.SetColumn(nRow, "ACNTDTL_AMOUNT", Trim(MEdt_Cost.Value));
        		*/

                this.div_01.form.grd_team_div.setCellPos(2);
                this.div_01.form.grd_team_div.showEditor();

        	} else
        		alert("선택 하신 부서(팀)이 이미 등록되어 있습니다.");
        	/*
        	if ( Rd_Kind.Value == "0" )  //조직
        	{
        		var strBuse = '';
        		strBuse = TRIM(dsTeamCode.GetColumn(dsTeamCode.row, "BUSECODE"));
        		var str_arg = "BUSECODE=" + quote(strBuse);

        		http.Sync = true;
        		Transaction("search", "dgPDbl::WorkList_Select.jsp", "", "dsWorkTeam=dsWorkTeam", str_arg, "fnCallback");
        		http.Sync = false;
        	}
        	*/
        };

        this.btn_delete_onclick = function(obj,e)
        {
        	this.dsCAccountDtlTeam.deleteRow(this.dsCAccountDtlTeam.rowposition);
        };

        this.btn_close_onclick = function(obj,e)
        {
        	if(this.fnItem_check())
        	{
        		this.opener.dsAccountDtlTeam.clearData();
        		this.opener.dsAccountDtlTeam.copyData(this.dsCAccountDtlTeam);
        		this.dsCAccountDtlTeam.clearData();
        		this.close();
        	}
        };

        this.div_00_rdo_kind_onitemchanged = function(obj,e)
        {
        	if (this.div_00.form.rdo_kind.value == "0" )
        	{
        		this.dsTeamCode.clearData();
        		this.dsWorkTeam.clearData();
        		this.div_00.form.grd_buse.set_enable(true);
        	}
        	else
        	{
        		this.div_00.form.grd_buse.set_enable(false);
        		this.dsWorkTeam.clearData();

        		var strUrl = "JSP/pd/divid_team_select1.jsp";
        		var strDs = "dsTeamCode=dsTeamCode";
        		var strDs = "dsTeamCode=dsTeamCode";

        		var strArg = "BUSECODE=" + nexacro.wrapQuote("00000");
        			strArg += " AD_KIND=" + "1";

        		this.gfn_TransactionP("search", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        	}
        };

        this.div_00_grd_buse_oncellclick = function(obj,e)
        {
        	this.dsWorkTeam.clearData();

        	var strUrl = "JSP/pd/divid_team_select1.jsp";
        	var strDs = "dsTeamCode=dsTeamCode";
        	var strDs = "dsTeamCode=dsTeamCode";

        	var strBuse = '';
        	strBuse = nexacro.trim(this.ds_buse.getColumn(e.row, "CODE"));
        	var strArg = "BUSECODE=" + nexacro.wrapQuote(strBuse);
        		strArg += " AD_KIND="+ nexacro.wrapQuote("0");

        	this.gfn_TransactionP("search", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);

        	if( this.div_00.form.rdo_kind.value == "0")
        	{
        		strUrl = "JSP/pd/WorkList_Select.jsp";
        		strDs = "dsWorkTeam=dsWorkTeam";
        		strDs = "dsWorkTeam=dsWorkTeam";
        		strBuse = '';
        		strBuse = nexacro.trim(this.dsTeamCode.getColumn(this.dsTeamCode.rowposition, "BUSECODE"));
        		strArg = "BUSECODE=" + nexacro.wrapQuote(strBuse);

        		this.gfn_TransactionP("search", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        	}
        };

        this.div_00_grd_dtl_oncellclick = function(obj,e)
        {
        	this.dsWorkTeam.clearData();

        	if ( this.div_00.form.rdo_kind.value == "0" )  //조직
        	{
        		var strBuse = '';
        		strBuse = nexacro.trim(this.dsTeamCode.getColumn(e.row, "TEAMCODE"));

        		if ( strBuse == "91300" || strBuse == "91400" )   //경영관리부_에듀테크, 고객센터
        		{
        			var strUrl = "JSP/pd/WorkList_Team_Select.jsp";
        			var strDs = "dsWorkTeam=dsWorkTeam";
        			var strDs = "dsWorkTeam=dsWorkTeam";
        			var strArg = "BUSECODE=" + nexacro.wrapQuote(strBuse);

        			this.gfn_TransactionP("search", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        		}
        		else if ( strBuse.substr(0,2) == "3H" )   //경영관리부_에듀테크, 고객센터
        		{
        			var strUrl = "JSP/pd/WorkList_Team_Select.jsp";
        			var strDs = "dsWorkTeam=dsWorkTeam";
        			var strDs = "dsWorkTeam=dsWorkTeam";
        			var strArg = "BUSECODE=" + nexacro.wrapQuote("3H000");

        			this.gfn_TransactionP("search", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        		}
        	}
        };

        this.div_01_grd_team_div_onenterdown = function(obj,e)
        {
        	if( pPRF_CODE == "3")
        		this.dsCAccountDtlTeam.setColumn(e.row, "ACNTDTL_VAT", nexacro.floor(nexacro.toNumber(this.dsCAccountDtlTeam.getColumn(e.row, "ACNTDTL_AMOUNT")) /10));
        	else if( pPRF_CODE != "3")
        		this.dsCAccountDtlTeam.setColumn(e.row, "ACNTDTL_VAT", "0");
        };

        this.fnItem_check = function()
        {
        	var ret_value = true;
            if (this.dsCAccountDtlTeam.rowcount == 0)
        	{
        		alert("입력된 귀속팀이 없습니다! 귀속팀을 입력하세요!");
        		ret_value = false;
        		return ret_value;
        	}
        	else
        		return ret_value;
        }

        this.fnCallback = function(Trid, ErrorCode, ErrorMsg)
        {
            if (ErrorCode != 0)
        		{alert(ErrorMsg);
        		return;}
        	else if (Trid != null)
        	{
        		Trid = Trid.split("|");
        		Trid = Trid[0]
        	}
        	if (Trid == "search")
        	{
        		trace("[PDTeam_DividF.fnCallBack] " + Trid +"::"+ ErrorMsg );
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GW800_TEAM_onload,this);
            this.div_00.form.grd_buse.addEventHandler("oncellclick",this.div_00_grd_buse_oncellclick,this);
            this.div_00.form.grd_dtl.addEventHandler("oncellclick",this.div_00_grd_dtl_oncellclick,this);
            this.div_00.form.rdo_kind.addEventHandler("onitemchanged",this.div_00_rdo_kind_onitemchanged,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.div_01.form.grd_team_div.addEventHandler("onenterdown",this.div_01_grd_team_div_onenterdown,this);
        };
        this.loadIncludeScript("GW800_TEAM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
