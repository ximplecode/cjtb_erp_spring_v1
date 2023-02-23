(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GW600");
            this.set_titletext("New Form");
            this.set_background("linear-gradient(to bottom,#ffffff,#ffffff)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1630,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSection", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"BU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BU_ACTNCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONLINE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInfoSecurity", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWICD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"YMD\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_GB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_main","0","0","1260","750",null,null,"860",null,"380",null,this);
            obj.set_taborder("8");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","3.49%","1.33%","65%","9.07%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_text("정보보호 서약서 내역 확인");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01","30","Static00:5","70","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("2");
            obj.set_text("조직도");
            obj.set_background("linear-gradient(#ebfef3,#ffffff)");
            obj.set_textAlign("center");
            obj.set_color("#01656f");
            obj.set_borderRadius("8px 8px 0px 0px");
            obj.set_border("1px solid #c3e4cd");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_section","30","Static01:-1","19.50%",null,null,"10",null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsSection");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("collapse,all");
            obj.set_border("1px solid #c3e4cd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"222\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:BU_LEVEL\" border=\"0px none #dbdee2\" cssclass=\"CssBuse_tree\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01_00","grd_section:10","Static00:29","7.72%","4.08%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("3");
            obj.set_text("년도");
            obj.set_textAlign("center");
            obj.set_background("#c3e4cd");
            obj.set_font("bold 13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Spin("sp_yy","Static01_00:0","Static00:29","11.02%","4.08%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("4");
            obj.getSetter("textAlign").set("center");
            obj.set_border("1px groove #c3e4cd");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_min("0");
            obj.set_max("9999");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("Grid00","grd_section:10","Static01_00:8",null,null,"10","10",null,null,null,null,this.div_main.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #c3e4cd");
            obj.set_binddataset("dsInfoSecurity");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"부서명\"/><Cell col=\"1\" text=\"직책\"/><Cell col=\"2\" text=\"사번\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"승인일자\"/></Band><Band id=\"body\"><Cell text=\"bind:BUSE\" cssclass=\"expr:YMD==null?&apos;BgChange&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"bind:JIKWI\" cssclass=\"expr:YMD==null?&apos;BgChange&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:SABUN\" cssclass=\"expr:YMD==null?&apos;BgChange&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:NAME\" cssclass=\"expr:YMD==null?&apos;BgChange&apos;:&apos;&apos;\"/><Cell col=\"4\" text=\"bind:YMD\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"nulltext\" cssclass=\"expr:YMD==null?&apos;BgChange&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_all",null,null,"15.87%","4.53%","10","Grid00:5",null,null,null,null,this.div_main.form);
            obj.set_taborder("6");
            obj.set_text("미승인 전체 인원");
            obj.set_font("bold 11pt/normal \"Arial\"");
            obj.set_color("red");
            obj.set_letterSpacing("1px");
            obj.set_background("#efefef");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_excel",null,"3.6%","7.62%","4.27%","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("7");
            obj.set_text("엑셀변환");
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
        this.addIncludeScript("GW600.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("GW600.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("GW600.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        var section_code;
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;

        this.GW600_onload = function(obj,e)
        {
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyy");
        	this.div_main.form.sp_yy.set_value(f_date);
        	var strUrl1, strDs1, strArg1;
        	strUrl = "JSP/common/getdata_buse.jsp";
        	strDs = "dsSection=dsSection";
        	strArg = "buse_nm=''" ;
        	this.gfn_TransactionP("search", strUrl, strDs, strDs, strArg, "fnCallbackSection", false, "P", false, this);
        };

        this.grd_section_oncellclick = function(obj,e)
        {
        	this.getDataList(this.dsSection.getColumn(e.row, "CODE"),"0");
        };

        this.getDataList = function(busecd, gb)
        {
        	var strUrl, strDs, strArg,
        	strUrl = "JSP/gw/SQL_INFO_SECURITY_LIST.jsp";
        	strDs = "dsInfoSecurity=dsInfoSecurity";
        	strArg = "busecd="+nexacro.wrapQuote(busecd) + " yy="+nexacro.wrapQuote(this.div_main.form.sp_yy.value) + " gb="+nexacro.wrapQuote(gb);
        	this.gfn_TransactionP("list", strUrl, strDs, strDs, strArg, "fnCallbackList", false, "P", false, this);
        }

        this.fnCallbackList = function(Trid,ErrorCode,ErrorMsg)
        {
           if (ErrorCode != 0)
           {
              alert(ErrorMsg);
              return;
           }
        }

        this.btn_all_onclick = function(obj,e)
        {
        	this.getDataList("","1");
        };

        this.div_main_btn_excel_onclick = function(obj,e)
        {
        	this.exportObj = new ExcelExportObject();
            var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.div_main.form.Grid00, this.div_main.form.sp_yy.value+"!A1");
        	this.exportObj.set_exportfilename( "Security_pledge" );
        	this.exportObj.set_exporturl(gv_urlXeni);
            this.exportObj.exportData();
        };

        this.GW600_onsize = function(obj,e)
        {
        	if(this.width < 1260 || this.width > 1630)
        		this.div_main.set_width(this.width - 10)
        	else
        		this.div_main.set_width(1260);

        	if(this.height < 750 || this.height > 760)
        		this.div_main.set_height(this.height - 20)
        	else
        		this.div_main.set_height(750);

        	if(this.height < 480 || this.width < 730)
        		this.div_main.form.Static00.set_font('bold 32px/normal "함초롬바탕 확장B"');
        	else
        		this.div_main.form.Static00.set_font('bold 40px/normal "함초롬바탕 확장B"');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GW600_onload,this);
            this.addEventHandler("onsize",this.GW600_onsize,this);
            this.div_main.form.grd_section.addEventHandler("oncelldblclick",this.div_main_grd_section_oncelldblclick,this);
            this.div_main.form.grd_section.addEventHandler("oncellclick",this.grd_section_oncellclick,this);
            this.div_main.form.sp_yy.addEventHandler("onspin",this.sp_yy_onspin,this);
            this.div_main.form.btn_all.addEventHandler("onclick",this.btn_all_onclick,this);
            this.div_main.form.btn_excel.addEventHandler("onclick",this.div_main_btn_excel_onclick,this);
        };
        this.loadIncludeScript("GW600.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
