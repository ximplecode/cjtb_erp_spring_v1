(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PD602F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,552);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DS_DATA", this);
            obj._setContents("<ColumnInfo><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_AMOUNT1\" type=\"STRING\" size=\"256\" prop=\"\"/><Column id=\"USE_AMOUNT1\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_AMOUNT2\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AMOUNT2\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_AMOUNT3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AMOUNT3\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_AMOUNT4\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AMOUNT4\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_BUSE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","11","1024","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("업무추진 예산 확인");
            obj.set_color("#7fb39d");
            obj.set_font("bold 30px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","14","72","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("년도");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_background("#7fb39d");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","225","72","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("부서");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_color("white");
            obj.set_background("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_buse","313","72","157","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("DS_BUSE");
            obj.set_datacolumn("NAME");
            obj.set_codecolumn("CODE");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Spin("sp_yy","104","72","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","951","17","70","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("Button0","870","17","70","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("엑셀");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","15","113","1016","429",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("DS_DATA");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"98\"/><Column size=\"38\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"부서\"/><Cell col=\"1\" rowspan=\"2\" text=\"월\"/><Cell col=\"2\" colspan=\"3\" text=\"부서운영비\"/><Cell col=\"5\" colspan=\"3\" text=\"업무시식비\"/><Cell col=\"8\" colspan=\"3\" text=\"사무용품비\"/><Cell col=\"11\" colspan=\"3\" text=\"전체\"/><Cell row=\"1\" col=\"2\" text=\"예산\"/><Cell row=\"1\" col=\"3\" text=\"사용\"/><Cell row=\"1\" col=\"4\" text=\"차액\"/><Cell row=\"1\" col=\"5\" text=\"예산\"/><Cell row=\"1\" col=\"6\" text=\"사용\"/><Cell row=\"1\" col=\"7\" text=\"차액\"/><Cell row=\"1\" col=\"8\" text=\"예산\"/><Cell row=\"1\" col=\"9\" text=\"사용\"/><Cell row=\"1\" col=\"10\" text=\"차액\"/><Cell row=\"1\" col=\"11\" text=\"예산\"/><Cell row=\"1\" col=\"12\" text=\"사용\"/><Cell row=\"1\" col=\"13\" text=\"차액\"/></Band><Band id=\"body\"><Cell text=\"bind:SECTION_NAME\" textAlign=\"center\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:MM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:BUDGET_AMOUNT1\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:USE_AMOUNT1\" displaytype=\"number\"/><Cell col=\"4\" expr=\"nexacro.toNumber(BUDGET_AMOUNT1) - nexacro.toNumber(USE_AMOUNT1)\" displaytype=\"number\" background=\"#f2e6c9\" cssclass=\"expr:nexacro.toNumber(BUDGET_AMOUNT1) - nexacro.toNumber(USE_AMOUNT1) &lt; &quot;0&quot;?&quot;pdFontColorChange&quot;:&quot;&quot;\"/><Cell col=\"5\" text=\"bind:BUDGET_AMOUNT2\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:USE_AMOUNT2\" displaytype=\"number\"/><Cell col=\"7\" expr=\"nexacro.toNumber(BUDGET_AMOUNT2) - nexacro.toNumber(USE_AMOUNT2)\" displaytype=\"number\" background=\"#f2e6c9\" cssclass=\"expr:nexacro.toNumber(BUDGET_AMOUNT2) - nexacro.toNumber(USE_AMOUNT2) &lt; &quot;0&quot;?&quot;pdFontColorChange&quot;:&quot;&quot;\"/><Cell col=\"8\" text=\"bind:BUDGET_AMOUNT3\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:USE_AMOUNT3\" displaytype=\"number\"/><Cell col=\"10\" expr=\"nexacro.toNumber(BUDGET_AMOUNT3) - nexacro.toNumber(USE_AMOUNT3)\" displaytype=\"number\" background=\"#f2e6c9\" cssclass=\"expr:nexacro.toNumber(BUDGET_AMOUNT3) - nexacro.toNumber(USE_AMOUNT3) &lt; &quot;0&quot;?&quot;pdFontColorChange&quot;:&quot;&quot;\"/><Cell col=\"11\" text=\"bind:BUDGET_AMOUNT\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:USE_AMOUNT\" displaytype=\"number\"/><Cell col=\"13\" expr=\"nexacro.toNumber(BUDGET_AMOUNT) - nexacro.toNumber(USE_AMOUNT)\" displaytype=\"number\" background=\"#f2e6c9\" cssclass=\"expr:nexacro.toNumber(BUDGET_AMOUNT) - nexacro.toNumber(USE_AMOUNT) &lt; &quot;0&quot;?&quot;pdFontColorChange&quot;:&quot;&quot;\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합 계\" background=\"#10aea9\"/><Cell col=\"2\" displaytype=\"number\" background=\"#10aea9\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT1)&quot;)\"/><Cell col=\"3\" displaytype=\"number\" background=\"#10aea9\" expr=\"dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT1)&quot;)\"/><Cell col=\"4\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT1)&quot;) - dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT1)&quot;)\"/><Cell col=\"5\" displaytype=\"number\" background=\"#10aea9\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT2)&quot;)\"/><Cell col=\"6\" displaytype=\"number\" background=\"#10aea9\" expr=\"dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT2)&quot;)\"/><Cell col=\"7\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT2)&quot;) - dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT2)&quot;)\"/><Cell col=\"8\" displaytype=\"number\" background=\"#10aea9\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT3)&quot;)\"/><Cell col=\"9\" displaytype=\"number\" background=\"#10aea9\" expr=\"dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT3)&quot;)\"/><Cell col=\"10\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT3)&quot;) - dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT3)&quot;)\"/><Cell col=\"11\" displaytype=\"number\" background=\"#10aea9\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT)&quot;)\"/><Cell col=\"12\" displaytype=\"number\" background=\"#10aea9\" expr=\"dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT)&quot;)\"/><Cell col=\"13\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT)&quot;) - dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT)&quot;)\"/></Band></Format><Format id=\"2019\"><Columns><Column size=\"98\"/><Column size=\"38\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"부서\"/><Cell col=\"1\" rowspan=\"2\" text=\"월\"/><Cell col=\"2\" colspan=\"3\" text=\"전체\"/><Cell col=\"5\" colspan=\"3\" text=\"부서운영비\"/><Cell col=\"8\" colspan=\"3\" text=\"업무시식비\"/><Cell col=\"11\" colspan=\"3\" text=\"일반접대비\"/><Cell row=\"1\" col=\"2\" text=\"예산\"/><Cell row=\"1\" col=\"3\" text=\"사용\"/><Cell row=\"1\" col=\"4\" text=\"차액\"/><Cell row=\"1\" col=\"5\" text=\"예산\"/><Cell row=\"1\" col=\"6\" text=\"사용\"/><Cell row=\"1\" col=\"7\" text=\"차액\"/><Cell row=\"1\" col=\"8\" text=\"예산\"/><Cell row=\"1\" col=\"9\" text=\"사용\"/><Cell row=\"1\" col=\"10\" text=\"차액\"/><Cell row=\"1\" col=\"11\" text=\"예산\"/><Cell row=\"1\" col=\"12\" text=\"사용\"/><Cell row=\"1\" col=\"13\" text=\"차액\"/></Band><Band id=\"body\"><Cell text=\"bind:SECTION_NAME\" textAlign=\"center\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:MM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:BUDGET_AMOUNT\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:USE_AMOUNT\" displaytype=\"number\"/><Cell col=\"4\" expr=\"nexacro.toNumber(BUDGET_AMOUNT) - nexacro.toNumber(USE_AMOUNT)\" displaytype=\"number\" background=\"#f2e6c9\" cssclass=\"expr:nexacro.toNumber(BUDGET_AMOUNT) - nexacro.toNumber(USE_AMOUNT) &lt; &quot;0&quot;?&quot;pdFontColorChange&quot;:&quot;&quot;\"/><Cell col=\"5\" text=\"bind:BUDGET_AMOUNT1\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:USE_AMOUNT1\" displaytype=\"number\"/><Cell col=\"7\" expr=\"nexacro.toNumber(BUDGET_AMOUNT1) - nexacro.toNumber(USE_AMOUNT1)\" displaytype=\"number\" background=\"#f2e6c9\" cssclass=\"expr:nexacro.toNumber(BUDGET_AMOUNT1) - nexacro.toNumber(USE_AMOUNT1) &lt; &quot;0&quot;?&quot;pdFontColorChange&quot;:&quot;&quot;\"/><Cell col=\"8\" text=\"bind:BUDGET_AMOUNT2\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:USE_AMOUNT2\" displaytype=\"number\"/><Cell col=\"10\" expr=\"nexacro.toNumber(BUDGET_AMOUNT2) - nexacro.toNumber(USE_AMOUNT2)\" displaytype=\"number\" background=\"#f2e6c9\" cssclass=\"expr:nexacro.toNumber(BUDGET_AMOUNT2) - nexacro.toNumber(USE_AMOUNT2) &lt; &quot;0&quot;?&quot;pdFontColorChange&quot;:&quot;&quot;\"/><Cell col=\"11\" text=\"bind:BUDGET_AMOUNT4\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:USE_AMOUNT4\" displaytype=\"number\"/><Cell col=\"13\" expr=\"nexacro.toNumber(BUDGET_AMOUNT4) - nexacro.toNumber(USE_AMOUNT4)\" displaytype=\"number\" background=\"#f2e6c9\" cssclass=\"expr:nexacro.toNumber(BUDGET_AMOUNT4) - nexacro.toNumber(USE_AMOUNT4) &lt; &quot;0&quot;?&quot;pdFontColorChange&quot;:&quot;&quot;\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합 계\" background=\"#10aea9\"/><Cell col=\"2\" displaytype=\"number\" background=\"#10aea9\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT)&quot;)\"/><Cell col=\"3\" displaytype=\"number\" background=\"#10aea9\" expr=\"dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT)&quot;)\"/><Cell col=\"4\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT)&quot;) - dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT)&quot;)\"/><Cell col=\"5\" displaytype=\"number\" background=\"#10aea9\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT1)&quot;)\"/><Cell col=\"6\" displaytype=\"number\" background=\"#10aea9\" expr=\"dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT1)&quot;)\"/><Cell col=\"7\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT1)&quot;) - dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT1)&quot;)\"/><Cell col=\"8\" displaytype=\"number\" background=\"#10aea9\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT2)&quot;)\"/><Cell col=\"9\" displaytype=\"number\" background=\"#10aea9\" expr=\"dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT2)&quot;)\"/><Cell col=\"10\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT2)&quot;) - dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT2)&quot;)\"/><Cell col=\"11\" displaytype=\"number\" background=\"#10aea9\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT4)&quot;)\"/><Cell col=\"12\" displaytype=\"number\" background=\"#10aea9\" expr=\"dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT4)&quot;)\"/><Cell col=\"13\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT4)&quot;) - dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT4)&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1040,552,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cb_buse","value","DS_BUSE","CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PD602F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("PD602F.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("PD602F.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("PD602F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var section_code, yy;
        //var str_SvrRptUrl = gv_svraddr + "pd/rpt/";

        this.parentForm = this.opener;

        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.PD602F_onLoad = function(obj,e)
        {
        	yy = this.parent.yy;
        	section_code = this.parent.section_code;
        	this.sp_yy.set_value(yy);
        	this.setdata_Grid_format(yy);
        	this.getdata_buse();
        	this.getdata_budget();
        };

        this.setdata_Grid_format = function(strText)
        {
        	if (strText < "2019")
        	{
        		this.Grid00.set_formatid("default");
        	}
        	else
        	{
        		this.Grid00.set_formatid("2019");
        	}
        }

        this.getdata_buse = function()
        {
           var str_url, str_arg;

           if (section_code == null)
           {
             this.Button0.set_visible(true);
             str_url = "JSP/pd/PD_buse_all.jsp";
             str_arg = "section_code="+nexacro.wrapQuote("10000")+
                       " employee_id="+nexacro.wrapQuote(nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN"));
           }
           else
           {
             this.Button0.set_visible(false);
             str_url = "JSP/pd/PD_buse.jsp";
             str_arg = "section_code="+nexacro.wrapQuote(section_code) +
                       " employee_id="+nexacro.wrapQuote(nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN"));
           }
           this.gfn_TransactionP("buse_select", str_url, "DS_BUSE=DS_BUSE", "DS_BUSE=DS_BUSE", str_arg, "Callback_buse_select", false, "P", false, this);
        }

        this.getdata_budget = function()
        {
           var str_url, str_arg;

           str_url = "JSP/pd/PD602_select.jsp";
           str_arg = "section_code="+nexacro.wrapQuote(this.cb_buse.value) +
                     " yy="+nexacro.wrapQuote(this.sp_yy.value);

           this.gfn_TransactionP("select", str_url, "DS_DATA=DS_DATA", "DS_DATA=DS_DATA", str_arg, "Callback_select", false, "P", false, this);
        }

        this.Callback_select = function(Trid, ErrorCode, ErrorMsg)
        {
            if (ErrorCode != 0)
            {
               alert(ErrorMsg);
               return false;
            }

        }

        //키보드로 연도 변경했을 때
        this.sp_yy_OnChanged = function(obj,e)
        {
        	var strPostvalue = e.postvalue;

        	this.setdata_Grid_format(strPostvalue);
        };


        //마우스 스핀으로 연도 변경했을 때
        this.sy_yy_onspin = function(obj,e)
        {
        	var strPostvalue = e.postvalue;
        	this.sp_yy.set_value(strPostvalue);
        	this.setdata_Grid_format(strPostvalue);
        	this.getdata_budget();
        };

        this.cb_buse_OnChanged = function(obj,e)
        {
        	this.getdata_budget();
        };

        // getdata_buse 콜백
        function Callback_buse_select(Trid,ErrorCode,ErrorMsg)
        {
           if (ErrorCode != 0)
           {
              alert(ErrorMsg);
              break;
           }

           this.cb_buse.Value = section_code;
        }
        this.Button0_OnClick = function(obj,e)
        {

        	this.exportObj = new ExcelExportObject();
            var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid00, "Sheet1!A1");
        	this.exportObj.set_exporturl(gv_urlXeni);
            this.exportObj.exportData();
        };

        this.Grid0_OnCellDblClick = function(obj,e)
        {
        	var nRow = e.row;

        	var rdUrl = gv_svcUrl + "rpt/pd/PD605.mrd";
            var rdParam = "/rp [" + this.sp_yy.value + "] [" + this.DS_DATA.getColumn(nRow,"MM") + "]"+
        					"[" + this.DS_DATA.getColumn(nRow,"SECTION_CODE") + "][" + this.DS_DATA.getColumn(nRow,"SECTION_NAME") +"]";
        	this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "pd::PDRDF.xfdl", "", this, 0, 0, 1024, 770);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PD602F_onLoad,this);
            this.cb_buse.addEventHandler("canitemchange",this.cb_buse_OnChanged,this);
            this.sp_yy.addEventHandler("onchanged",this.sp_yy_OnChanged,this);
            this.sp_yy.addEventHandler("onspin",this.sy_yy_onspin,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.Button0.addEventHandler("onclick",this.Button0_OnClick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid0_OnCellDblClick,this);
        };
        this.loadIncludeScript("PD602F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
