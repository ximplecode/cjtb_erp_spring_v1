(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR751F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_gb", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">전체</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">신규 입사자</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">금일 작성자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"IPSADT\" type=\"STRING\" size=\"256\"/><Column id=\"SMONTH9\" type=\"STRING\" size=\"256\"/><Column id=\"EMONTH9\" type=\"STRING\" size=\"256\"/><Column id=\"SMONTH11\" type=\"STRING\" size=\"256\"/><Column id=\"EMONTH11\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH12\" type=\"STRING\" size=\"256\"/><Column id=\"GB\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWICD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","4","5","386","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신규입사자 미사용 연차휴가 신청 현황");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","2","Static02:0","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("구분");
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

            obj = new Combo("cb_s_gb","90","55","190","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_gb");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00","290","50","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("이름");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_s_name","374","55","132","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_border("1px solid #10aea9");
            obj.set_background("transparent");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_text("010-9118-8920");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","2","Static01_00:0",null,null,"2","2",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"185\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"부서코드\"/><Cell col=\"1\" text=\"부서명\"/><Cell col=\"2\" text=\"직책\"/><Cell col=\"3\" text=\"사번\"/><Cell col=\"4\" text=\"이름\"/><Cell col=\"5\" text=\"입사일자\"/><Cell col=\"6\" text=\"3개월전\"/><Cell col=\"7\" text=\"결재\"/><Cell col=\"8\" text=\"1개월전\"/><Cell col=\"9\" text=\"결재\"/><Cell col=\"10\" text=\"1년\"/></Band><Band id=\"body\"><Cell text=\"bind:BUSECD\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:BUSE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:JIKWI\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:SABUN\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:NAME\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:IPSADT\" displaytype=\"date\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:SMONTH9\" textAlign=\"center\" displaytype=\"date\"/><Cell col=\"7\" textAlign=\"center\" cssclass=\"expr:comp.parent.fn_setCss3(currow)\"/><Cell col=\"8\" text=\"bind:SMONTH11\" textAlign=\"center\" displaytype=\"date\"/><Cell col=\"9\" textAlign=\"center\" cssclass=\"expr:comp.parent.fn_setCss1(currow)\"/><Cell col=\"10\" text=\"bind:MONTH12\" textAlign=\"center\" displaytype=\"date\"/></Band></Format></Formats>");
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
        this.addIncludeScript("HR751F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("HR751F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("HR751F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var urlXeni = nexacro.getApplication().gv_urlXeni;

        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_getData();
        };

        this.fn_getData = function()
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/getData_hr751.jsp";
        	in_ds = "ds_list=ds_list";
        	out_ds = "ds_list=ds_list";
        	str_arg = " SABUN=''"+
        	          " GB='"+ this.cb_s_gb.value + "'" +
        			  " NAME='" + this.edt_s_name.value + "'";

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_none", true, "S", false,this);
        }

        this.Callback_none = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		if (ErrorCode != -99)
        		{
        			this.alert(ErrorMsg);
        		}
        		return false;
        	}
        };

        this.fn_setCss3 = function(nRow)
        {
        	var rt;
        	trace(this.ds_list.getColumn(nRow,"I_FLOW_ID3") );
        	if (this.ds_list.getColumn(nRow,"I_FLOW_ID3") > 0)
        	{
        		rt = "CssBGI_BC_none_loupe";
        	}
        	else
        	{
        		rt = "";
        	}

        	return rt;
        }

        this.fn_setCss1 = function(nRow)
        {
        	var rt;

        	if (this.ds_list.getColumn(nRow,"I_FLOW_ID1") > 0)
        	{
        		rt = "CssBGI_BC_none_loupe";
        	}
        	else
        	{
        		rt = "";
        	}

        	return rt;
        }
        this.cb_s_gb_onitemchanged = function(obj,e)
        {
        	this.fn_getData();
        };

        this.edt_s_name_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13)
        	{
        		this.fn_getData();
        	}
        };

        this.grd_list_oncellclick = function(obj,e)
        {
        	var permission = this.getPermission_print();

        	if (permission == false)
        	{
        		this.alert("권한이 없습니다.");
        		return false;
        	}

        	if (e.col != 7 && e.col != 9)
        	{
        		return false;
        	}

        	if (e.col == 7)
        	{
        		if (this.ds_list.getColumn(e.row,"I_FLOW_ID3") <= 0)
        		{
        			return false;
        		}
        	}

        	if (e.col == 9)
        	{
        		if (this.ds_list.getColumn(e.row,"I_FLOW_ID1") <= 0)
        		{
        			return false;
        		}
        	}


        	var rdUrl = gv_svcUrl + "rpt/hr/OT170.mrd";
        	if (e.col == 7)
        	{
        		var rdParam = "/rp [1][" + this.ds_list.getColumn(e.row,"I_FLOW_ID3") + "]";
        	}
        	else if (e.col == 9)
        	{
        		var rdParam = "/rp [1][" + this.ds_list.getColumn(e.row,"I_FLOW_ID1") + "]";
        	}


        	var objNew = new ChildFrame();
        	objNew.init("common_print",0,0,null,null,0,0,"common::H_MRD.xfdl");
        	this.addChild("common_print",objNew);
        	//objNew.set_openalign("center middle");
        	objNew.set_autosize(false);
        	objNew.set_titletext("미사용 연차 휴가 사용계획(신규입사자)");
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
            this.cb_s_gb.addEventHandler("onitemchanged",this.cb_s_gb_onitemchanged,this);
            this.edt_s_name.addEventHandler("onkeydown",this.edt_s_name_onkeydown,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
        };
        this.loadIncludeScript("HR751F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
