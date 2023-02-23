(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PD120_SearchF");
            this.set_titletext("New Form");
            this.set_font("bold 15pt/normal \"Arial\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(696,392);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUploadFile_delete1", this);
            obj._setContents("<ColumnInfo><Column id=\"f_contents\" type=\"BLOB\" size=\"256\"/><Column id=\"file_name\" type=\"STRING\" size=\"256\"/><Column id=\"f_name\" type=\"STRING\" size=\"256\"/><Column id=\"r_name\" type=\"STRING\" size=\"256\"/><Column id=\"f_path\" type=\"STRING\" size=\"256\"/><Column id=\"l_fname\" type=\"STRING\" size=\"256\"/><Column id=\"f_size\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUploadFile", this);
            obj._setContents("<ColumnInfo><Column id=\"GB\" type=\"STRING\" size=\"256\"/><Column id=\"F_NO\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"F_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"R_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSection", this);
            obj._setContents("<ColumnInfo><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"LVL\" type=\"INT\" size=\"1\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"3\"/><Column id=\"SECTION_SHORTNAME\" type=\"STRING\" size=\"10\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"5\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_File", this);
            obj._setContents("<ColumnInfo><Column id=\"GB\" type=\"STRING\" size=\"256\"/><Column id=\"F_NO\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"F_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"R_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUploadFile_delete", this);
            obj._setContents("<ColumnInfo><Column id=\"GB\" type=\"STRING\" size=\"256\"/><Column id=\"F_NO\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"F_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"R_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","9","53","119","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회일자");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #10aea9");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_letterSpacing("1px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","9","90","119","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("지결제목");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_color("#10aea9");
            obj.set_letterSpacing("1px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("st_Secton","9","127","119","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("담당부서");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_color("#10aea9");
            obj.set_letterSpacing("1px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("Cal_SDate","128","53","144","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Calendar("Cal_EDate","277","52","147","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","429","53","90","72",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회하기");
            this.addChild(obj.name, obj);

            obj = new Combo("Cb_Section","128","127","296","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("dsSection");
            obj.set_codecolumn("SECTION_CODE");
            obj.set_datacolumn("SECTION_NAME");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid0","9","166","680","212",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj.set_binddataset("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"지급결의서번호\"/><Cell col=\"1\" text=\"작성일자\"/><Cell col=\"2\" text=\"담당자\"/><Cell col=\"3\" text=\"지결서 제목\"/><Cell col=\"4\" text=\"담당부서\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCOUNT_NO\" font=\"normal 700 15pt/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"bind:ACNTMST_DATE\"/><Cell col=\"2\" text=\"bind:EMPLOYEE_NAME\"/><Cell col=\"3\" text=\"bind:ACNTMST_TITLE\"/><Cell col=\"4\" text=\"bind:SECTION_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","8","7","682","41",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("지급결의서 조회");
            obj.set_border("1px solid lightgray");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","623","14","61","27",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","18","63","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("√");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("St_Section","15","133","21","23",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("√");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title","128","90","296","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","68","418","689","97",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_binddataset("dsAccountMst");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ACNTMST_CLASS\"/><Cell col=\"1\" text=\"ACNTMST_DATE\"/><Cell col=\"2\" text=\"ACNTMST_NO\"/><Cell col=\"3\" text=\"ACNTMST_ID\"/><Cell col=\"4\" text=\"ACCOUNT_NO\"/><Cell col=\"5\" text=\"ACNTMST_YM\"/><Cell col=\"6\" text=\"SECTION_CODE\"/><Cell col=\"7\" text=\"SECTION_NAME\"/><Cell col=\"8\" text=\"EMPLOYEE_ID\"/><Cell col=\"9\" text=\"EMPLOYEE_NAME\"/><Cell col=\"10\" text=\"DK_CODE\"/><Cell col=\"11\" text=\"ACNTMST_DELETE\"/><Cell col=\"12\" text=\"ACNTMST_PERMITEDATE0\"/><Cell col=\"13\" text=\"ACNTMST_PERMITEUSER0\"/><Cell col=\"14\" text=\"ACNTMST_PERMITE0\"/><Cell col=\"15\" text=\"ACNTMST_PERMITEDATE1\"/><Cell col=\"16\" text=\"ACNTMST_PERMITEUSER1\"/><Cell col=\"17\" text=\"ACNTMST_PERMITE1\"/><Cell col=\"18\" text=\"ACNTMST_PERMITEDATE2\"/><Cell col=\"19\" text=\"ACNTMST_PERMITEUSER2\"/><Cell col=\"20\" text=\"ACNTMST_PERMITE2\"/><Cell col=\"21\" text=\"ACNTMST_REMARK\"/><Cell col=\"22\" text=\"ACNT_SECTIONKIND\"/><Cell col=\"23\" text=\"I_FLOW_ID\"/><Cell col=\"24\" text=\"ACNTMST_TITLE\"/><Cell col=\"25\" text=\"OPEN_CHECK\"/></Band><Band id=\"body\"><Cell text=\"bind:ACNTMST_CLASS\"/><Cell col=\"1\" text=\"bind:ACNTMST_DATE\"/><Cell col=\"2\" text=\"bind:ACNTMST_NO\"/><Cell col=\"3\" text=\"bind:ACNTMST_ID\"/><Cell col=\"4\" text=\"bind:ACCOUNT_NO\"/><Cell col=\"5\" text=\"bind:ACNTMST_YM\"/><Cell col=\"6\" text=\"bind:SECTION_CODE\"/><Cell col=\"7\" text=\"bind:SECTION_NAME\"/><Cell col=\"8\" text=\"bind:EMPLOYEE_ID\"/><Cell col=\"9\" text=\"bind:EMPLOYEE_NAME\"/><Cell col=\"10\" text=\"bind:DK_CODE\"/><Cell col=\"11\" text=\"bind:ACNTMST_DELETE\"/><Cell col=\"12\" text=\"bind:ACNTMST_PERMITEDATE0\"/><Cell col=\"13\" text=\"bind:ACNTMST_PERMITEUSER0\"/><Cell col=\"14\" text=\"bind:ACNTMST_PERMITE0\"/><Cell col=\"15\" text=\"bind:ACNTMST_PERMITEDATE1\"/><Cell col=\"16\" text=\"bind:ACNTMST_PERMITEUSER1\"/><Cell col=\"17\" text=\"bind:ACNTMST_PERMITE1\"/><Cell col=\"18\" text=\"bind:ACNTMST_PERMITEDATE2\"/><Cell col=\"19\" text=\"bind:ACNTMST_PERMITEUSER2\"/><Cell col=\"20\" text=\"bind:ACNTMST_PERMITE2\"/><Cell col=\"21\" text=\"bind:ACNTMST_REMARK\"/><Cell col=\"22\" text=\"bind:ACNT_SECTIONKIND\"/><Cell col=\"23\" text=\"bind:I_FLOW_ID\"/><Cell col=\"24\" text=\"bind:ACNTMST_TITLE\"/><Cell col=\"25\" text=\"bind:OPEN_CHECK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",696,392,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PD110_SearchF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("PD110_SearchF.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("PD110_SearchF.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("PD110_SearchF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var sSection = nexacro.wrapQuote(nexacro.getApplication().gds_userinfo.getColumn(0,"BUSECD"));
        var gv_SABUN = nexacro.getApplication().gds_userinfo.getColumn(0, "SABUN");
        var nDate = new Date();
        var today = Eco.date.getMaskFormatString(nDate, "yyyyMMdd");

        var sUserCompetence5 = "5";
        this.parentForm = this.opener;

        this.PD120_SearchF_onload = function(obj,e)
        {
        	PDCompetence = this.parent.PDCompetence;

        	this.st_Secton.set_visible(PDCompetence >= sUserCompetence5);
         	this.St_Section.set_visible(PDCompetence >= sUserCompetence5);
         	this.Cb_Section.set_visible(PDCompetence >= sUserCompetence5);
         	this.Cb_Section.index = -1;

        	if (PDCompetence >= sUserCompetence5)
        		sSection = "";


        	this.Grid0.set_binddataset(this.opener.dsAccountMst)

        	this.Cal_SDate.setFocus();
        	//PDF100f  btnSearch_OnClick 에서 데이터셋 가져옴.
        	this.dsSection.copyData(this.parent.dsParam);
        };

        this.btn_Search_OnClick = function(obj,e)
        {
        	this.Grid0.set_binddataset(this.opener.dsAccountMst)

        	if (this.Cal_SDate.value == null || this.Cal_SDate.value.length != 8)
        	{
        		alert("조회일자를 선택해 주십시요.");
        		this.Cal_SDate.setFocus();
        		return false;
        	}

        	if (this.Cal_EDate.value == null || this.Cal_EDate.value.length != 8)
        	{
        		alert("조회일자를 선택해 주십시요.");
        		this.Cal_EDate.setFocus();
        		return false;
        	}

        	var OutDataSet = this.parent.OutDataSet;
        	var AcntMst_Class = this.parent.AcntMst_Class;
        	var JSPFileName = this.parent.JSPFileName;

        	var str_arg  = "";
        	var out_ds 	= OutDataSet;
        	var in_ds 	= OutDataSet;

        	str_arg = "ACNTMST_CLASS=" + nexacro.wrapQuote( AcntMst_Class ) +
        	          " ACNTMST_SDATE=" + nexacro.wrapQuote( this.Cal_SDate.value ) +
        	          " ACNTMST_EDATE=" + nexacro.wrapQuote( this.Cal_EDate.value ) +
        	          " SECTION_CODE=" +  sSection +
        	          " EMPLOYEE_ID=" + nexacro.wrapQuote( gv_SABUN ) +
        	          " COMPETENCE=" + nexacro.wrapQuote( PDCompetence ) +
        			  " SET_OPTION=" +  nexacro.wrapQuote("1")  +
        			  " I_FLOW_ID=" + nexacro.wrapQuote( "" ) +
        			  " TITLE=" + nexacro.wrapQuote(this.edt_title.text);

        	this.gfn_TransactionP("Select", JSPFileName, in_ds, out_ds, str_arg, "fnCallBack", false, "P", false, this);

        	//PDF110F 부모폼으로 dsAccountMst 데이터셋 카피
        	//this.parentForm.dsAccountMst.copyData(this.dsAccountMst);

        };


        //첨부 파일 SELECT
        this.Grid0_OnCellClick = function(obj,e)
        {
        	var str_arg = "i_flow_id =" + nexacro.wrapQuote(this.opener.dsAccountMst.getColumn(e.row,"I_FLOW_ID"));

        	this.dsUploadFile_delete.clearData();
        	this.gfn_TransactionP("Select", "JSP/gw/SQL_GW110_files_v2.jsp", "ds_File=ds_File", "ds_File=ds_File", str_arg, "fnCallBack", false, "P", false, this);

        	this.parentForm.ds_File.copyData(this.ds_File);

        };

        //그리드내 부서필터
        this.Grid0_OnRButtonDown = function(obj,e)
        {
        	if (PDCompetence >= sUserCompetence5)
        		this.opener.dsAccountMst.filter("SECTION_CODE='" + this.opener.dsAccountMst.getColumn(e.row, "SECTION_CODE") + "'");
        };

        //부서 선택 온체인지 이벤트
        this.Cb_Section_OnChanged = function(obj,e)
        {
        	sSection = e.postvalue;
        };


        //Grid0 oncelldbclick
        this.btnClose_OnClick = function(obj,e)
        {
        	this.close(this.fnReturnValue());
        };

        this.fnReturnValue = function()
        {
        	var aReturn = Array();

        	return aReturn;
        };

        //fnCallBack 콜백
        this.fnCallBack = function(Trid, errCode, errMsg)
        {
        	if(Trid == "Select")
        	{
        		if(errCode != 0 )
        			trace("[PD110_SearchF.fnCallBack(" + today + ")] " + Trid +"::"+ errMsg );
        		else if (this.opener.dsAccountMst.rowcount == 0)
        		{
        			//this.parentForm.dsAccountMst.clearData();
        			//this.parentForm.dsAccountDtl.clearData();
        			this.opener.dsAccountMst.clearData();
        			this.opener.dsAccountDtl.clearData();
        			trace("11111111111");
        			alert("조회된 자료가 없습니다.");
        		}
        	}
        }

        //닫기 콜백
        this.fnReturnValue = function()
        {
        	var aReturn = Array();

        	return aReturn;
        };

        this.Cb_Section_OnKeyDown = function(obj,e)
        {
        	if (e.keycode == 27)
        	{
        		this.Cb_Section.index = -1;
        		sSection = "";
        	}
        };

        //dsAccountMst 온로드 함수 호출
        this.dsAccountMst_OnLoadCompleted = function(obj,e)
        {
        	var nReason = e.reason;

        	if (nReason == 0)
        		this.opener.dsAccountMst_OnRowPosChanged(obj, -1, 0);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PD120_SearchF_onload,this);
            this.btn_Search.addEventHandler("onclick",this.btn_Search_OnClick,this);
            this.Cb_Section.addEventHandler("onitemchanged",this.Cb_Section_OnChanged,this);
            this.Cb_Section.addEventHandler("onkeydown",this.Cb_Section_OnKeyDown,this);
            this.Grid0.addEventHandler("oncellclick",this.Grid0_OnCellClick,this);
            this.Grid0.addEventHandler("onrbuttondown",this.Grid0_OnRButtonDown,this);
            this.Grid0.addEventHandler("oncelldblclick",this.btnClose_OnClick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_OnClick,this);
        };
        this.loadIncludeScript("PD110_SearchF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
