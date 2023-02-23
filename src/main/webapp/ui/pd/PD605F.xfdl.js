(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PD605F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1630,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_AMOUNT1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AMOUNT1\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_AMOUNT2\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AMOUNT2\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_AMOUNT3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AMOUNT3\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_AMOUNT4\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AMOUNT4\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBuse", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSection", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"BU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BU_ACTNCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONLINE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSection_etc", this);
            obj._setContents("<ColumnInfo><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GENERAL_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"PART_DIRECTOR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_MANAGER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_main","0","0","1510","710",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","4.51%","1.55%","50%","9.86%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_text("업무추진비 예산 확인");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_section","1.33%","Static00:14.29%","16.56%","42.26%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsSection");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("collapse,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"222\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:BU_LEVEL\" border=\"0px none #dbdee2\" cssclass=\"CssBuse_tree\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01","grd_section:4%","Static00:14.29%","6.63%","4.51%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            obj.set_text("년도");
            obj.set_textAlign("center");
            obj.set_background("#c3e4cd");
            obj.set_font("bold 13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Spin("sp_yy","Static01:0%","Static00:14.29%","9.28%","4.51%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("2");
            obj.getSetter("textAlign").set("center");
            obj.set_border("1px groove #c3e4cd");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_min("0");
            obj.set_max("9999");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("Grid00","grd_section:4%","Static01:25%","80.80%","80.29%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsData");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"34\"/><Row size=\"34\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"부서\"/><Cell col=\"1\" rowspan=\"2\" text=\"월\"/><Cell col=\"2\" colspan=\"3\" text=\"부서운영비\"/><Cell col=\"5\" colspan=\"3\" text=\"업무시식비\"/><Cell col=\"8\" colspan=\"3\" text=\"사무용품비\"/><Cell col=\"11\" colspan=\"3\" text=\"전체\"/><Cell row=\"1\" col=\"2\" text=\"예산\"/><Cell row=\"1\" col=\"3\" text=\"사용\"/><Cell row=\"1\" col=\"4\" text=\"차액\"/><Cell row=\"1\" col=\"5\" text=\"예산\"/><Cell row=\"1\" col=\"6\" text=\"사용\"/><Cell row=\"1\" col=\"7\" text=\"차액\"/><Cell row=\"1\" col=\"8\" text=\"예산\"/><Cell row=\"1\" col=\"9\" text=\"사용\"/><Cell row=\"1\" col=\"10\" text=\"차액\"/><Cell row=\"1\" col=\"11\" text=\"예산\"/><Cell row=\"1\" col=\"12\" text=\"사용\"/><Cell row=\"1\" col=\"13\" text=\"차액\"/></Band><Band id=\"body\"><Cell text=\"bind:SECTION_NAME\" suppress=\"1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:MM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:BUDGET_AMOUNT1\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:USE_AMOUNT1\" displaytype=\"number\"/><Cell col=\"4\" background=\"#ebfef3\" displaytype=\"number\" expr=\"(BUDGET_AMOUNT1!=null?nexacro.toNumber(BUDGET_AMOUNT1):0) - (USE_AMOUNT1!=null?nexacro.toNumber(USE_AMOUNT1):0)\" cssclass=\"expr:(BUDGET_AMOUNT1!=null?nexacro.toNumber(BUDGET_AMOUNT1):0) - (USE_AMOUNT1!=null?nexacro.toNumber(USE_AMOUNT1):0)&lt;0?&apos;pdColorChange&apos;:&apos;&apos;\"/><Cell col=\"5\" text=\"bind:BUDGET_AMOUNT2\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:USE_AMOUNT2\" displaytype=\"number\"/><Cell col=\"7\" background=\"#ebfef3\" displaytype=\"number\" expr=\"(BUDGET_AMOUNT2!=null?nexacro.toNumber(BUDGET_AMOUNT2):0) - (USE_AMOUNT2!=null?nexacro.toNumber(USE_AMOUNT2):0)\" cssclass=\"expr:(BUDGET_AMOUNT2!=null?nexacro.toNumber(BUDGET_AMOUNT2):0) - (USE_AMOUNT2!=null?nexacro.toNumber(USE_AMOUNT2):0)&lt;0?&apos;pdColorChange&apos;:&apos;&apos;\"/><Cell col=\"8\" text=\"bind:BUDGET_AMOUNT3\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:USE_AMOUNT3\" displaytype=\"number\"/><Cell col=\"10\" background=\"#ebfef3\" displaytype=\"number\" expr=\"(BUDGET_AMOUNT3!=null?nexacro.toNumber(BUDGET_AMOUNT3):0) - (USE_AMOUNT3!=null?nexacro.toNumber(USE_AMOUNT3):0)\" cssclass=\"expr:(BUDGET_AMOUNT3!=null?nexacro.toNumber(BUDGET_AMOUNT3):0) - (USE_AMOUNT3!=null?nexacro.toNumber(USE_AMOUNT3):0)&lt;0?&apos;pdColorChange&apos;:&apos;&apos;\"/><Cell col=\"11\" text=\"bind:BUDGET_AMOUNT\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:USE_AMOUNT\" displaytype=\"number\"/><Cell col=\"13\" background=\"#ebfef3\" displaytype=\"number\" expr=\"(BUDGET_AMOUNT!=null?nexacro.toNumber(BUDGET_AMOUNT):0) - (USE_AMOUNT!=null?nexacro.toNumber(USE_AMOUNT):0)\" cssclass=\"expr:(BUDGET_AMOUNT!=null?nexacro.toNumber(BUDGET_AMOUNT):0) - (USE_AMOUNT!=null?nexacro.toNumber(USE_AMOUNT):0)&lt;0?&apos;pdColorChange&apos;:&apos;&apos;\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\" background=\"#0d908c\" color=\"white\"/><Cell col=\"2\" background=\"#0d908c\" color=\"white\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT1)&quot;)\" textAlign=\"right\" padding=\"3px\"/><Cell col=\"3\" background=\"#0d908c\" color=\"white\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT1)&quot;)\" textAlign=\"right\" padding=\"3px\"/><Cell col=\"4\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT1)&quot;) - dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT1)&quot;)\" cssclass=\"expr:dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT1)&quot;) - dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT1)&quot;)&lt;0?&apos;pdColorChange&apos;:&apos;&apos;\" textAlign=\"right\" padding=\"3px\" background=\"#ebfef3\"/><Cell col=\"5\" background=\"#0d908c\" color=\"white\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT2)&quot;)\" textAlign=\"right\" padding=\"3px\"/><Cell col=\"6\" background=\"#0d908c\" color=\"white\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT2)&quot;)\" textAlign=\"right\" padding=\"3px\"/><Cell col=\"7\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT2)&quot;) - dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT2)&quot;)\" cssclass=\"expr:dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT2)&quot;) - dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT2)&quot;)&lt;0?&apos;pdColorChange&apos;:&apos;&apos;\" textAlign=\"right\" padding=\"3px\" background=\"#ebfef3\"/><Cell col=\"8\" background=\"#0d908c\" color=\"white\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT3)&quot;)\" textAlign=\"right\" padding=\"3px\"/><Cell col=\"9\" background=\"#0d908c\" color=\"white\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT3)&quot;)\" textAlign=\"right\" padding=\"3px\"/><Cell col=\"10\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT3)&quot;) - dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT3)&quot;)\" cssclass=\"expr:dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT3)&quot;) - dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT3)&quot;)&lt;0?&apos;pdColorChange&apos;:&apos;&apos;\" textAlign=\"right\" padding=\"3px\" background=\"#ebfef3\"/><Cell col=\"11\" background=\"#0d908c\" color=\"white\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT)&quot;)\" textAlign=\"right\" padding=\"3px\"/><Cell col=\"12\" background=\"#0d908c\" color=\"white\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT)&quot;)\" textAlign=\"right\" padding=\"3px\"/><Cell col=\"13\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT)&quot;) - dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT)&quot;)\" cssclass=\"expr:dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT)&quot;) - dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT)&quot;)&lt;0?&apos;pdColorChange&apos;:&apos;&apos;\" textAlign=\"right\" padding=\"3px\" background=\"#ebfef3\"/></Band></Format><Format id=\"format_2019\"><Columns><Column size=\"120\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"34\"/><Row size=\"34\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"부서\"/><Cell col=\"1\" rowspan=\"2\" text=\"월\"/><Cell col=\"2\" colspan=\"3\" text=\"전체\"/><Cell col=\"5\" colspan=\"3\" text=\"부서운영비\"/><Cell col=\"8\" colspan=\"3\" text=\"업무시식비\"/><Cell col=\"11\" colspan=\"3\" text=\"사무용품비\"/><Cell col=\"14\" colspan=\"3\" text=\"일반접대비\"/><Cell row=\"1\" col=\"2\" text=\"예산\"/><Cell row=\"1\" col=\"3\" text=\"사용\"/><Cell row=\"1\" col=\"4\" text=\"차액\"/><Cell row=\"1\" col=\"5\" text=\"예산\"/><Cell row=\"1\" col=\"6\" text=\"사용\"/><Cell row=\"1\" col=\"7\" text=\"차액\"/><Cell row=\"1\" col=\"8\" text=\"예산\"/><Cell row=\"1\" col=\"9\" text=\"사용\"/><Cell row=\"1\" col=\"10\" text=\"차액\"/><Cell row=\"1\" col=\"11\" text=\"예산\"/><Cell row=\"1\" col=\"12\" text=\"사용\"/><Cell row=\"1\" col=\"13\" text=\"차액\"/><Cell row=\"1\" col=\"14\" text=\"예산\"/><Cell row=\"1\" col=\"15\" text=\"사용\"/><Cell row=\"1\" col=\"16\" text=\"차액\"/></Band><Band id=\"body\"><Cell text=\"bind:SECTION_NAME\" suppress=\"1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:MM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:BUDGET_AMOUNT\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:USE_AMOUNT\" displaytype=\"number\"/><Cell col=\"4\" background=\"#ebfef3\" displaytype=\"number\" expr=\"(BUDGET_AMOUNT!=null?nexacro.toNumber(BUDGET_AMOUNT):0) - (USE_AMOUNT!=null?nexacro.toNumber(USE_AMOUNT):0)\" cssclass=\"expr:(BUDGET_AMOUNT!=null?nexacro.toNumber(BUDGET_AMOUNT):0) - (USE_AMOUNT!=null?nexacro.toNumber(USE_AMOUNT):0)&lt;0?&apos;pdColorChange&apos;:&apos;&apos;\"/><Cell col=\"5\" text=\"bind:BUDGET_AMOUNT1\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:USE_AMOUNT1\" displaytype=\"number\"/><Cell col=\"7\" displaytype=\"number\" cssclass=\"expr:(BUDGET_AMOUNT1!=null?nexacro.toNumber(BUDGET_AMOUNT1):0) - (USE_AMOUNT1!=null?nexacro.toNumber(USE_AMOUNT1):0)&lt;0?&apos;colorChange&apos;:&apos;&apos;\" expr=\"(BUDGET_AMOUNT1!=null?nexacro.toNumber(BUDGET_AMOUNT1):0) - (USE_AMOUNT1!=null?nexacro.toNumber(USE_AMOUNT1):0)\" background=\"#ebfef3\"/><Cell col=\"8\" text=\"bind:BUDGET_AMOUNT2\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:USE_AMOUNT2\" displaytype=\"number\"/><Cell col=\"10\" background=\"#ebfef3\" displaytype=\"number\" expr=\"(BUDGET_AMOUNT2!=null?nexacro.toNumber(BUDGET_AMOUNT2):0) - (USE_AMOUNT2!=null?nexacro.toNumber(USE_AMOUNT2):0)\" cssclass=\"expr:(BUDGET_AMOUNT2!=null?nexacro.toNumber(BUDGET_AMOUNT2):0) - (USE_AMOUNT2!=null?nexacro.toNumber(USE_AMOUNT2):0)&lt;0?&apos;pdColorChange&apos;:&apos;&apos;\"/><Cell col=\"11\" text=\"bind:BUDGET_AMOUNT3\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:USE_AMOUNT3\" displaytype=\"number\"/><Cell col=\"13\" background=\"#ebfef3\" displaytype=\"number\" expr=\"(BUDGET_AMOUNT3!=null?nexacro.toNumber(BUDGET_AMOUNT3):0) - (USE_AMOUNT3!=null?nexacro.toNumber(USE_AMOUNT3):0)\" cssclass=\"expr:(BUDGET_AMOUNT3!=null?nexacro.toNumber(BUDGET_AMOUNT3):0) - (USE_AMOUNT3!=null?nexacro.toNumber(USE_AMOUNT3):0)&lt;0?&apos;pdColorChange&apos;:&apos;&apos;\"/><Cell col=\"14\" text=\"bind:BUDGET_AMOUNT4\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:USE_AMOUNT4\" displaytype=\"number\"/><Cell col=\"16\" background=\"#ebfef3\" displaytype=\"number\" expr=\"(BUDGET_AMOUNT4!=null?nexacro.toNumber(BUDGET_AMOUNT4):0) - (USE_AMOUNT4!=null?nexacro.toNumber(USE_AMOUNT4):0)\" cssclass=\"expr:(BUDGET_AMOUNT4!=null?nexacro.toNumber(BUDGET_AMOUNT4):0) - (USE_AMOUNT4!=null?nexacro.toNumber(USE_AMOUNT4):0)&lt;0?&apos;pdColorChange&apos;:&apos;&apos;\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\" background=\"#0d908c\" color=\"white\"/><Cell col=\"2\" background=\"#0d908c\" color=\"white\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT)&quot;)\" textAlign=\"right\" padding=\"3px\"/><Cell col=\"3\" background=\"#0d908c\" color=\"white\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT)&quot;)\" textAlign=\"right\" padding=\"3px\"/><Cell col=\"4\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT)&quot;) - dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT)&quot;)\" cssclass=\"expr:dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT)&quot;) - dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT)&quot;)&lt;0?&apos;pdColorChange&apos;:&apos;&apos;\" textAlign=\"right\" padding=\"3px\" background=\"#ebfef3\"/><Cell col=\"5\" background=\"#0d908c\" color=\"white\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT1)&quot;)\" textAlign=\"right\" padding=\"3px\"/><Cell col=\"6\" background=\"#0d908c\" color=\"white\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT1)&quot;)\" textAlign=\"right\" padding=\"3px\"/><Cell col=\"7\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT1)&quot;) - dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT1)&quot;)\" cssclass=\"expr:dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT1)&quot;) - dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT1)&quot;)&lt;0?&apos;pdColorChange&apos;:&apos;&apos;\" textAlign=\"right\" padding=\"3px\" background=\"#ebfef3\"/><Cell col=\"8\" background=\"#0d908c\" color=\"white\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT2)&quot;)\" textAlign=\"right\" padding=\"3px\"/><Cell col=\"9\" background=\"#0d908c\" color=\"white\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT2)&quot;)\" textAlign=\"right\" padding=\"3px\"/><Cell col=\"10\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT2)&quot;) - dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT2)&quot;)\" cssclass=\"expr:dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT2)&quot;) - dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT2)&quot;)&lt;0?&apos;pdColorChange&apos;:&apos;&apos;\" textAlign=\"right\" padding=\"3px\" background=\"#ebfef3\"/><Cell col=\"11\" background=\"#0d908c\" color=\"white\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT3)&quot;)\" textAlign=\"right\" padding=\"3px\"/><Cell col=\"12\" background=\"#0d908c\" color=\"white\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT3)&quot;)\" textAlign=\"right\" padding=\"3px\"/><Cell col=\"13\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT3)&quot;) - dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT3)&quot;)\" cssclass=\"expr:dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT3)&quot;) - dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT3)&quot;)&lt;0?&apos;pdColorChange&apos;:&apos;&apos;\" textAlign=\"right\" padding=\"3px\" background=\"#ebfef3\"/><Cell col=\"14\" background=\"#0d908c\" color=\"white\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT4)&quot;)\" textAlign=\"right\" padding=\"3px\"/><Cell col=\"15\" background=\"#0d908c\" color=\"white\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT4)&quot;)\" textAlign=\"right\" padding=\"3px\"/><Cell col=\"16\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT4)&quot;) - dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT4)&quot;)\" cssclass=\"expr:dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT4)&quot;) - dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT4)&quot;)&lt;0?&apos;pdColorChange&apos;:&apos;&apos;\" textAlign=\"right\" padding=\"3px\" background=\"#ebfef3\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_excel",null,"5.64%","6.36%","4.51%","0.67%",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("4");
            obj.set_text("엑셀변환");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_section_etc","1.33%","grd_section:3.34%","16.56%","42.26%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("6");
            obj.set_binddataset("dsSection_etc");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("collapse,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"222\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:SECTION_NAME\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:LVL\" border=\"0px none #dbdee2\" cssclass=\"CssBuse_tree\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1630,760,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PD605F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("PD605F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("PD605F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        var section_code;
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;

        this.PD605F_onload = function(obj,e)
        {
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyy");
        	this.div_main.form.sp_yy.set_value(f_date);
        	this.fnSetdata_Grid_format(this.div_main.form.sp_yy.value);
        	var strUrl1, strUrl2, strDs1, strDs2, strArg1, strArg2;
        	strUrl1 = "JSP/common/getdata_buse.jsp";
        	strUrl2 = "JSP/pd/section_select_etc.jsp";
        	strDs1 = "dsSection=dsSection";
        	strDs2 = "dsSection_etc=dsSection_etc";
        	strArg1 = "buse_nm=''" ;
        	strArg2 = "yy="+nexacro.wrapQuote(this.div_main.form.sp_yy.value);
        	this.gfn_TransactionP("search", strUrl1, strDs1, strDs1, strArg1, "Callback_section", false, "P", false, this);
        	this.gfn_TransactionP("search", strUrl2, strDs2, strDs2, strArg2, "Callback_section", false, "P", false, this);
        };

        this.Callback_section = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return;
        	}
        }

        this.fnGetdata_budget = function()
        {
           var strUrl, strDs, strArg;

        	strUrl = "JSP/pd/PD602_select.jsp";
        	strDs = "dsData=dsData";
        	strArg = "section_code="+nexacro.wrapQuote(section_code) +
        			 " yy="+nexacro.wrapQuote(this.div_main.form.sp_yy.value);
        	this.gfn_TransactionP("select", strUrl, strDs, strDs, strArg, "Callback_select", false, "P", false, this);
        }

        this.Callback_select = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return;
        	}
        }

        this.fnSetdata_Grid_format = function(strText)
        {
        	if (nexacro.toNumber(strText) < 2019)
        	{
        		this.div_main.form.Grid00.set_formatid("default");
        	}
        	else
        	{
        		this.div_main.form.Grid00.set_formatid("format_2019");
        	}
        }
        this.sp_yy_onspin = function(obj,e)
        {
        	this.fnSetdata_Grid_format(e.postvalue);

        	strUrl2 = "JSP/pd/section_select_etc.jsp";
        	strDs2 = "dsSection_etc=dsSection_etc";
        	strArg2 = "yy="+nexacro.wrapQuote(e.postvalue);
        	this.gfn_TransactionP("search", strUrl2, strDs2, strDs2, strArg2, "Callback_section", false, "P", false, this);
        	this.dsData.clearData();
        };

        this.div_main_grd_section_oncelldblclick = function(obj,e)
        {
        	section_code = this.dsSection.getColumn(e.row, "CODE");
        	this.fnGetdata_budget();
        };

        this.div_main_grd_section_etc_oncelldblclick = function(obj,e)
        {
        	section_code = this.dsSection.getColumn(e.row, "SECTION_CODE");
        	this.fnGetdata_budget();
        };

        this.div_main_btn_excel_onclick = function(obj,e)
        {
        	if ( this.dsData.rowcount <= 0){
        		alert("변환가능한 리스트가 없습니다.");
        		return;
        	}

        	this.exportObj = new ExcelExportObject();
            this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.div_main.form.Grid00, "Sheet1!A1");
        	this.exportObj.set_exportfilename( this.div_main.form.sp_yy.value );
            this.exportObj.set_exporturl(gv_urlXeni);
            this.exportObj.exportData();
        };

        this.div_main_Grid00_oncelldblclick = function(obj,e)
        {
        	var rdUrl  = gv_urlMrd + "/pd/PD605.mrd";
        	var rdParam = "/rp ["+(this.div_main.form.sp_yy.value).toString()+"]"+
        					  "["+this.dsData.getColumn(e.row,"MM")+"]"+
        					  "["+this.dsData.getColumn(e.row,"SECTION_CODE")+"]"+
        					  "[" + this.dsData.getColumn(e.row,"SECTION_NAME") +"]";
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

        	var sOpenStyle = "topmost=true autosize=false dragmovetype=all titletext=조회화면 showtitlebar=true showstatusbar=false resizable=true";

        	nexacro.open("search", "mk::MKRDF.xfdl", this.getOwnerFrame(), {rdUrl:rdUrl, rdParam:rdParam}, sOpenStyle, rect.left, rect.top, rect.width, rect.height, this);
        };

        this.PD605F_onsize = function(obj,e)
        {
        	if(this.width < 1510)
        		this.div_main.set_width(this.width - 20)
        	else
        		this.div_main.set_width(this.width - 20)

        	if(this.height < 710)
        		this.div_main.set_height(this.height - 20)
        	else
        		this.div_main.set_height(710);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PD605F_onload,this);
            this.addEventHandler("onsize",this.PD605F_onsize,this);
            this.div_main.form.grd_section.addEventHandler("oncelldblclick",this.div_main_grd_section_oncelldblclick,this);
            this.div_main.form.sp_yy.addEventHandler("onspin",this.sp_yy_onspin,this);
            this.div_main.form.Grid00.addEventHandler("oncelldblclick",this.div_main_Grid00_oncelldblclick,this);
            this.div_main.form.btn_excel.addEventHandler("onclick",this.div_main_btn_excel_onclick,this);
            this.div_main.form.grd_section_etc.addEventHandler("oncelldblclick",this.div_main_grd_section_etc_oncelldblclick,this);
        };
        this.loadIncludeScript("PD605F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
