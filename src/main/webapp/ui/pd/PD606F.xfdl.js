(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PD606F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,440);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds310", this);
            obj._setContents("<ColumnInfo><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACNTMST_CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PAYAMOUNT\" type=\"FLOAT\" size=\"256\"/><Column id=\"PAYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRF_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRF_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PAYRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ACNTTIT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_VAT\" type=\"FLOAT\" size=\"256\"/><Column id=\"BILL_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSection", this);
            obj._setContents("<ColumnInfo><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_SHORTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BU_GRCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGB", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">년별 예산</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">상세내역</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBuse", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"T_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","20","10","300","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("업무추진비 예산 확인");
            obj.set_color("#7fb39d");
            obj.set_font("bold 28px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","340","20","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","60","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("년월");
            obj.set_textAlign("center");
            obj.set_background("#c3e4cd");
            obj.set_font("bold 13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","97","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("담당부서");
            obj.set_textAlign("center");
            obj.set_background("#c3e4cd");
            obj.set_font("bold 13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","134","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("구분");
            obj.set_textAlign("center");
            obj.set_background("#c3e4cd");
            obj.set_font("bold 13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Spin("sp_yy","100","60","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.getSetter("textAlign").set("center");
            obj.set_border("1px groove #c3e4cd");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_min("0");
            obj.set_max("9999");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_section","100","97","210","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_border("1px groove #c3e4cd");
            obj.set_innerdataset("dsSection");
            obj.set_codecolumn("SECTION_CODE");
            obj.set_datacolumn("SECTION_NAME");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_gb","100","134","210","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("1px groove #c3e4cd");
            obj.set_innerdataset("dsGB");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","320","113","70","49",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("조회하기");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk00","20","cbo_gb:0","186","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("사용중지 부서 포함");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","chk00:0","380","240",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsBuse");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"부서명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:T_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,440,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PD606F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("PD606F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("PD606F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        //var str_SvrRptUrl = gv_svraddr + "pd/rpt/";
        var str_file_path = "C:\\Temp\\";
        var sSection_Code = nexacro.getApplication().gds_userinfo.getColumn(0,"BUSECD");
        var gv_SABUN = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        //var sSection_Code = gds_userinfo.getColumn(0, "busecd");
        var sUserCompetence = "";
        var sUserCompetence1 = "1";   // 일반사용자
        var sUserCompetence2 = "2";   // 부서승인권자
        var sUserCompetence3 = "3";   // 부서장
        var sUserCompetence4 = "4";   // 일반승인권자
        var sUserCompetence5 = "5";   // 승인1차권한
        var sUserCompetence6 = "6";   // 승인2차권한
        var Fv_HeadChk=0;

        this.PD606F_onload = function(obj,e)
        {
            var strArg;
        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", "et_10_104");
        	sUserCompetence = nexacro.getApplication().gds_menu.getColumn(nRow, "UM_PER_USE");
        	if(sUserCompetence == null)
        		sUserCompetence = sUserCompetence1;

        	//sUserCompetence = "S";

        	if (gv_SABUN == "C16096")
        		sUserCompetence = "6";

        	// 일반 사용자일 경우 부서설정 안됨
        	if (sUserCompetence == sUserCompetence1)
        	{
        		this.cbo_section.set_value(sSection_Code);
        	}
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyy");
        	this.sp_yy.set_value(f_date);
        	this.cbo_gb.set_value(0);

        	if(sUserCompetence < sUserCompetence5)
        		this.cbo_section.set_enable(false);
        	else
        		this.cbo_section.set_enable(true);

        	var strUrl = "JSP/pd/section_select_pay.jsp";
        	var strDs = "dsSection=dsSection";
        	this.gfn_TransactionP("search", strUrl, strDs, strDs, "", "fnCallbackSection", false, "P", false, this);

        	this.fnGetdata_buse();
        	this.cbo_gb.set_value(0);
        };

        this.fnCallbackSection = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return;
        	}
        	sRow = this.dsSection.addRow();
        	this.dsSection.setColumn(sRow,"SECTION_CODE","00000");
        	this.dsSection.setColumn(sRow,"SECTION_NAME","전체");
        	this.dsSection.setColumn(sRow,"LVL","0");
        	this.dsSection.setColumn(sRow,"BU_UPCODE","00000");
        }

        this.fnGetdata_buse = function()
        {
        	var strUrl, strDs, strArg, bucode;

        	if (this.cbo_section.index < 0)
        		bucode = nexacro.getApplication().gds_userinfo.getColumn(0,"BUSECD");
        	else
        		bucode = this.cbo_section.value;
        	strArg = "bucode="+nexacro.wrapQuote(bucode);
        	strUrl = "JSP/pd/buse_select.jsp";
        	strDs = "dsBuse=dsBuse"

        	this.gfn_TransactionP("search", strUrl, strDs, strDs, strArg, "fnCallbackBuse", false, "P", false, this);
        }

        this.fnCallbackBuse = function(Trid, ErrorCode, ErrorMsg)
        {
            if (ErrorCode != 0)
            {
        		alert(ErrorMsg);
        		return;
            }
            this.Grid00.setCellProperty("head",0,"text","1");
        	Fv_HeadChk=1;
        }

        this.cbo_section_onitemchanged = function(obj,e)
        {
        	if (e.postvalue == "00000")
        	{
        	  this.chk00.set_visible(true);
        	  this.chk00.set_value(false);
        	}
        	else
        	{
        	  this.chk00.set_visible(false);
        	  this.chk00.set_value(false);
        	}
        	this.fnGetdata_buse();
        };

        this.cbo_section_onkeydown = function(obj,e)
        {
        	if (e.keycode == 27)
        	{
        		this.cbo_section.set_index(-1);
        		sSection_Code = "";
        	}
        };

        this.btn_search_onclick = function(obj,e)
        {
        	var i;

        	var r_arg = "";
        	var rdUrl = "";
        	var rdParam = "";

        	var cnt = 0;
        	for(i = 0; i < this.dsBuse.rowcount; i++)
        	{
        		if(this.dsBuse.getColumn(i, "CHK") == "1")
        			cnt++;
        	}
        	if(cnt == 0){
        		alert('선택된 부서가 없습니다.\n조회할 부서를 체크해주세요.');
        		return;
        	}

        	if (this.cbo_gb.value == 0)
        	{
        		if (this.sp_yy.value < "2019")
        			rdUrl = gv_urlMrd + "/pd/PD606.mrd";
        		else
        			rdUrl = gv_urlMrd + "/pd/PD606_2019.mrd";
        	}
        	else
        		rdUrl  = gv_urlMrd + "/pd/PD606_2.mrd";

        	for (i = 0; i < this.dsBuse.rowcount; i++)
        	{
        		if (this.dsBuse.getColumn(i,"CHK") == "1")
        		{
        			if (r_arg.length != 0)
        				r_arg += ",";
        			r_arg += "'" + this.dsBuse.getColumn(i,"CODE") + "'";
        		}
        	}

        	if (this.chk00.value == true)
        		rdParam = "/rp [" + this.sp_yy.value + "][" + r_arg + "][]";
        	else
        		rdParam = "/rp [" + this.sp_yy.value + "][" + r_arg + "][1]";

        	var rect;
        	if(system.navigatorname = 'nexacro')
        	{
        		if(system.monitorcount > 1)
        		{
        			var monitor_index = system.getMonitorIndex(system.clientToScreenX(this,0), system.clientToScreenY(this,0));
        			rect = system.getScreenRect(monitor_index);
        		}
        		else
        			rect = system.getScreenRect(1);
        	}
        	else
        		rect = system.getScreenRect(1);

        	var objParam = {rdUrl:rdUrl, rdParam:rdParam};
        	var sOpenStyle = "topmost=true autosize=false dragmovetype=all titletext=조회화면 showtitlebar=true showstatusbar=false resizable=true";

        	nexacro.open("search", "mk::MKRDF.xfdl", this.getOwnerFrame(), objParam, sOpenStyle, rect.left, rect.top, rect.width, rect.height, this);
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.close();
        };

        this.Grid00_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		if(Fv_HeadChk == 0)
        			Fv_HeadChk = 1;
        		else
        			Fv_HeadChk = 0;
        		this.Grid00.setCellProperty("head",0,"text",Fv_HeadChk);
        		for(var i = 0; i < this.dsBuse.rowcount; i++)
        		{
        			this.dsBuse.setColumn(i, "CHK", Fv_HeadChk);
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PD606F_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.sp_yy.addEventHandler("onspin",this.sp_yy_onspin,this);
            this.cbo_section.addEventHandler("onitemchanged",this.cbo_section_onitemchanged,this);
            this.cbo_section.addEventHandler("onkeydown",this.cbo_section_onkeydown,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Grid00.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
        };
        this.loadIncludeScript("PD606F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
