(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR750F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_yy", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gb", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"NAME\">전체</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">작성중</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"NAME\">미작성</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESTCNT\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_1\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_2\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"INT\" size=\"256\"/><Column id=\"CNT_STAT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_holiday", this);
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"YYYYMMDD\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","4","5","356","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("미사용 연차휴가 신청 현황");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","2","Static02:0","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("년도");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","82","50",null,"30","2",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_s_yy","90","55","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_yy");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00","cb_s_yy:2","50","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("대상자");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Radio("rd_s_gb","302","50",null,"30","4",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_gb");
            obj.set_datacolumn("NAME");
            obj.set_codecolumn("CODE");
            obj.set_columncount("4");
            obj.set_padding("0px 0px 0px 40px");
            obj.set_text("전체");
            obj.set_value("00");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","2","Static01_00:0",null,null,"2","2",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"36\"/><Column size=\"159\"/><Column size=\"66\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\"/><Cell col=\"1\" colspan=\"4\" text=\"대     상     자\"/><Cell col=\"5\" rowspan=\"2\" text=\"연차갯수\"/><Cell col=\"6\" rowspan=\"2\" text=\"진행상태\"/><Cell col=\"7\" rowspan=\"2\" text=\"결재상태\"/><Cell row=\"1\" col=\"1\" text=\"부 서\"/><Cell row=\"1\" col=\"2\" text=\"직 책\"/><Cell row=\"1\" col=\"3\" text=\"사 번\"/><Cell row=\"1\" col=\"4\" text=\"성 명\"/></Band><Band id=\"body\"><Cell cssclass=\"expr:comp.parent.fn_setCss(currow)\"/><Cell col=\"1\" text=\"bind:BUSE_NM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:JIKWI_NM\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:SABUN\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:NAME\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:RESTCNT\" displaytype=\"number\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:STATUS_1\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:STATUS_2\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"18","120","22","4",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel",null,"18","120","22","130",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Excel");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1250,625,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("HR750F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("HR750F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("HR750F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var urlXeni = nexacro.getApplication().gv_urlXeni;

        this.HR750F_onload = function(obj,e)
        {
        	this.cb_s_yy.set_value( this.lfn_setYY(this.ds_yy,"2015") );
        	this.fn_getData();
        };

        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_getData();
        };

        this.fn_getData = function()
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/getData_hr750.jsp";
        	in_ds = "ds_list=ds_list";
        	out_ds = "ds_list=ds_list";
        	str_arg = " YYYY='" + this.cb_s_yy.value + "'";

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_select", true, "S", false,this);
        };

        this.Callback_select = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		if (ErrorCode != -99)
        		{
        			this.alert(ErrorMsg);
        		}
        		return false;
        	}

        	this.fn_setFilter();
        };

        this.fn_setFilter = function()
        {
        	if (Eco.isEmpty(this.rd_s_gb.value) == true)
        	{
        		this.ds_list.set_filterstr("");
        	}
        	else
        	{
        		this.ds_list.set_filterstr("CNT_STAT=='" + this.rd_s_gb.value + "'");
        	}
        	this.ds_list.filter();
        }

        this.rd_s_gb_onitemchanged = function(obj,e)
        {
        	this.fn_setFilter();
        };

        this.cb_s_yy_onitemchanged = function(obj,e)
        {
        	this.fn_getData();
        };

        this.fn_setCss = function(nRow)
        {
        	var rt;

        	if (this.ds_list.getColumn(nRow,"I_FLOW_ID") > 0)
        	{
        		rt = "CssBGI_BC_none_loupe";
        	}
        	else
        	{
        		rt = "";
        	}

        	return rt;
        };

        this.grd_list_oncellclick = function(obj,e)
        {
        	var permission = this.getPermission_print();

        	if (permission == false)
        	{
        		this.alert("권한이 없습니다.");
        		return false;
        	}

        	if (e.col != 0)
        	{
        		return false;
        	}

        	if (Eco.isEmpty( this.ds_list.getColumn(e.row,"I_FLOW_ID") ) == true)
        	{
        		return false;
        	}


        	var rdUrl = gv_svcUrl + "rpt/hr/OT140_2020.mrd";
        	var rdParam = "/rp [1][" + this.ds_list.getColumn(e.row,"I_FLOW_ID") + "]";


        	var objNew = new ChildFrame();
        	objNew.init("common_print",0,0,null,null,0,0,"common::H_MRD.xfdl");
        	this.addChild("common_print",objNew);
        	//objNew.set_openalign("center middle");
        	objNew.set_autosize(false);
        	objNew.set_titletext("미사용 연차 휴가 사용계획");
        	objNew.set_showtitlebar(true);
        	objNew.set_resizable(false);
        	objNew.showModal("common_print",this.getOwnerFrame(),{rdUrl:rdUrl, rdParam:rdParam},this,this.fn_common_print);
        };

        this.fn_common_print = function(strID, variant)
        {
        	this.removeChild("common_print");
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	var permission = this.getPermission_print();

        	if (permission == false)
        	{
        		this.alert("권한이 없습니다.");
        		return false;
        	}

        	var filename;
        	filename = "GridList";
        	this.exportObj = new ExcelExportObject();
        	var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_list , "Sheet1!A1");

        	this.exportObj.set_exporturl(urlXeni);
        	this.exportObj.set_exportfilename(filename);
            this.exportObj.exportData();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.HR750F_onload,this);
            this.cb_s_yy.addEventHandler("onitemchanged",this.cb_s_yy_onitemchanged,this);
            this.rd_s_gb.addEventHandler("onitemchanged",this.rd_s_gb_onitemchanged,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
        };
        this.loadIncludeScript("HR750F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
