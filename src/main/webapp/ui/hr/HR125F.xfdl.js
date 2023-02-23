(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR125F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_balGB", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">00</Col><Col id=\"NAME\">전체</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"NAME\">임용</Col></Row><Row><Col id=\"CODE\">20</Col><Col id=\"NAME\">승진</Col></Row><Row><Col id=\"CODE\">30</Col><Col id=\"NAME\">전보</Col></Row><Row><Col id=\"CODE\">40</Col><Col id=\"NAME\">파견</Col></Row><Row><Col id=\"CODE\">50</Col><Col id=\"NAME\">퇴직</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hr125", this);
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"IPSADT\" type=\"STRING\" size=\"256\"/><Column id=\"YMD\" type=\"STRING\" size=\"256\"/><Column id=\"BAL_GB\" type=\"STRING\" size=\"256\"/><Column id=\"BALGB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","4","5","356","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("인사발령대장");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb","2","Static02:0","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회기간");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","sta_gb:0","Static02:0",null,"30","2",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_symd","sta_gb:5","55","163","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","cald_symd:0","55","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("부터");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_eymd","Static00:0","55","163","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb00","cald_eymd:30","50","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("발령구분");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_bal_gb","sta_gb00:5","55",null,"20","41.60%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_balGB");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_type("filterlike");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","2","sta_gb:2",null,null,"2","2",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_hr125");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"230\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"발령구분\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직위\"/><Cell col=\"5\" text=\"입사일\"/><Cell col=\"6\" text=\"발령일\"/></Band><Band id=\"body\"><Cell text=\"bind:BALGB\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:SABUN\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:NAME\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:BUSE\"/><Cell col=\"4\" text=\"bind:JIKWI\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:IPSADT\" textAlign=\"center\" displaytype=\"date\"/><Cell col=\"6\" text=\"bind:YMD\" textAlign=\"center\" displaytype=\"date\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"16","120","22","140",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","120","22","10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("출력");
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
        this.addIncludeScript("HR125F.xfdl","Lib::Lib_service.xjs");
        this.registerScript("HR125F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");

        this.btn_search_onclick = function(obj,e)
        {
        	var str_url, in_ds, out_ds, str_arg;

        	str_url = "JSP/hr/getData_hr125.jsp";
        	in_ds = "ds_hr125=ds_hr125";
        	out_ds = "ds_hr125=ds_hr125";
        	str_arg = "sdate='"+ this.cald_symd.value +"' edate='"+ this.cald_eymd.value +"' bal_gb='"+ this.cb_bal_gb.value +"'";
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_none", true, "S", false,this);
        };

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
        }

        this.HR125F_onload = function(obj,e)
        {
        	var dt = new Date();

        	this.cald_symd.set_value( Eco.date.addDate(dt, -1) );
        	this.cald_eymd.set_value(dt);
        	this.cb_bal_gb.set_value("00");
        };

        this.btn_print_onclick = function(obj,e)
        {
        	var permission = this.getPermission_print();

        	if (permission == false)
        	{
        		this.alert("권한이 없습니다.");
        		return false;
        	}

        	var rdUrl = gv_svcUrl + "rpt/hr/HR125P_01.mrd";
            var rdParam = "/rp [" +  this.cald_symd.value + "][" + this.cald_eymd.value + "][" + this.cb_bal_gb.value + "]";

        	var objNew = new ChildFrame();
        	objNew.init("common_print",0,0,null,null,0,0,"common::H_MRD.xfdl");
        	this.addChild("common_print",objNew);
        	//objNew.set_openalign("center middle");
        	objNew.set_autosize(false);
        	objNew.set_titletext("인사발령대장");
        	objNew.set_showtitlebar(true);
        	objNew.set_resizable(true);
        	objNew.showModal("common_print",this.getOwnerFrame(),{rdUrl:rdUrl, rdParam:rdParam},this,this.fn_common_print);
        };

        this.fn_common_print = function(strID, variant)
        {
        	this.removeChild("common_print");
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.HR125F_onload,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
        };
        this.loadIncludeScript("HR125F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
