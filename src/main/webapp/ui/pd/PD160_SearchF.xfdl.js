(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PD160_SearchF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(410,150);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPermite", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">미승인</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">승인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAccountMst_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTMST_CLASS\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTMST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ACNTMST_NO\" type=\"STRING\" size=\"3\"/><Column id=\"ACNTMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ACCOUNT_NO\" type=\"STRING\" size=\"12\"/><Column id=\"ACNTMST_YM\" type=\"STRING\" size=\"6\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"DK_CODE\" type=\"INT\" size=\"2\"/><Column id=\"ACNTMST_DELETE\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTMST_PERMITEDATE1\" type=\"STRING\" size=\"8\"/><Column id=\"ACNTMST_PERMITEUSER1\" type=\"STRING\" size=\"6\"/><Column id=\"ACNTMST_PERMITENAME1\" type=\"STRING\" size=\"10\"/><Column id=\"ACNTMST_PERMITE1\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTMST_PERMITEDATE2\" type=\"STRING\" size=\"8\"/><Column id=\"ACNTMST_PERMITEUSER2\" type=\"STRING\" size=\"6\"/><Column id=\"ACNTMST_PERMITENAME2\" type=\"STRING\" size=\"10\"/><Column id=\"ACNTMST_PERMITE2\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTMST_REMARK\" type=\"STRING\" size=\"1000\"/><Column id=\"COMPETENCE\" type=\"STRING\" size=\"1\"/><Column id=\"I_FLOW_ID\" type=\"INT\" size=\"20\"/><Column id=\"ACNTMST_PERMITEDATE0\" type=\"STRING\" size=\"8\"/><Column id=\"ACNTMST_PERMITEUSER0\" type=\"STRING\" size=\"6\"/><Column id=\"ACNTMST_PERMITE0\" type=\"STRING\" size=\"1\"/><Column id=\"ACNTMST_TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close","345","18","55","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","320","73","80","48",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회하기");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","5","320","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("일반경비/정기지불 조회");
            obj.set_color("#7fb39d");
            obj.set_font("bold 28px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","54","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회일자");
            obj.set_textAlign("center");
            obj.set_font("bold 13px/normal \"Gulim\"");
            obj.set_background("#c3e4cd");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","84","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("담당부서");
            obj.set_textAlign("center");
            obj.set_font("bold 13px/normal \"Gulim\"");
            obj.set_background("#c3e4cd");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","114","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("승인여부");
            obj.set_textAlign("center");
            obj.set_font("bold 13px/normal \"Gulim\"");
            obj.set_background("#c3e4cd");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_sdate","Static01:-1","54","105","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_border("1px solid #c3e4cd");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_edate","cal_sdate:2","54","105","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_border("1px solid #c3e4cd");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_section","Static02:-1","84","212","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_border("1px solid #c3e4cd");
            obj.set_innerdataset("dsSection");
            obj.set_codecolumn("SECTION_CODE");
            obj.set_datacolumn("SECTION_NAME");
            obj.set_displaynulltext("선택해주세요");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_permite","Static03:-1","114","212","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_border("1px solid #c3e4cd");
            obj.set_direction("horizontal");
            obj.set_rowcount("1");
            obj.set_columncount("2");
            obj.set_innerdataset("dsPermite");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_padding("0px 0px 0px 40px");
            obj.set_text("미승인");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",410,150,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PD160_SearchF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("PD160_SearchF.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("PD160_SearchF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var sSection = "";

        this.btn_close_onclick = function(obj,e)
        {
        	var strClose = this.cal_sdate.value + "^";
        	strClose += this.cal_edate.value + "^";
        	strClose += sSection + "^";
        	strClose += this.rdo_permite.index;
        	this.close(strClose);
        };

        this.PD160_SearchF_onload = function(obj,e)
        {
        	this.cbo_section.set_innerdataset(this.opener.dsSection);
        	this.cbo_section.set_index(-1);
        	this.cal_sdate.setFocus();
        	this.dsAccountMst_copy.copyData(this.opener.dsAccountMst);
        };

        this.cbo_section_onitemchanged = function(obj,e)
        {
        	sSection = e.postvalue;
        };

        this.cbo_section_onkeydown = function(obj,e)
        {
        	if(e.keycode == 27)
        	{
        		this.cbo_section.set_index(-1);
        		sSection = "";
        	}
        };

        this.btn_search_onclick = function(obj,e)
        {
        	if(this.cal_sdate.value == null)
        	{
        		alert("조회일자를 선택해 주십시오.");
        		this.cal_sdate.setFocus();
        		return;
        	}
        	if(this.cal_edate.value == null)
        	{
        		alert("조회일자를 선택해 주십시오.");
        		this.cal_edate.setFocus();
        		return;
        	}
        	var strUrl = this.parent.JSPFileName;
        	var strDs = "dsAccountMst_copy=dsAccountMst_copy";
        	strArg 	= "ACNTMST_SDATE=" + nexacro.wrapQuote( this.cal_sdate.value ) +
        	          " ACNTMST_EDATE=" + nexacro.wrapQuote( this.cal_edate.value ) +
        	          " ACNTMST_PERMITE=" + nexacro.wrapQuote( this.rdo_permite.index ) +
        	          " SECTION_CODE=" + nexacro.wrapQuote( sSection ) +
        	          " COMPETENCE=" + nexacro.wrapQuote( this.parent.PDCompetence ) +
        	          " SET_OPTION=" + nexacro.wrapQuote( "1" ) +
        	          " I_FLOW_ID=" + nexacro.wrapQuote( ) ;

        	this.gfn_TransactionP("search", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        };

        this.fnCallback = function(svcid, errCode, errMsg)
        {
        	if(svcid == "search")
        	{
        		var objDate = new nexacro.Date();
        		var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMddhhmmss");
        		if(errCode != 0)
        			trace("[PD160_SearchF.fnCallBack(" + f_date + ")] " + svcid +"::"+ errMsg );
        		else if (this.dsAccountMst_copy.rowcount == 0)
        		{
        			this.dsAccountMst_copy.clearData();
        			alert("조회된 자료가 없습니다.");
        		}
        		else
        		{
        			this.opener.dsAccountMst.copyData(this.dsAccountMst_copy);
        		}
        	}
        }
        this.Static00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PD160_SearchF_onload,this);
            this.addEventHandler("onmouseleave",this.PD160_SearchF_onmouseleave,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.cbo_section.addEventHandler("onitemchanged",this.cbo_section_onitemchanged,this);
            this.cbo_section.addEventHandler("onkeydown",this.cbo_section_onkeydown,this);
            this.rdo_permite.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
        };
        this.loadIncludeScript("PD160_SearchF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
