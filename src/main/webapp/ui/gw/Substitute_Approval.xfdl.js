(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Insa");
            this.set_titletext("대결자 설정");
            if (Form == this.constructor)
            {
                this._setFormPosition(520,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_insa", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSENM\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWICD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWINM\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_buse", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"BU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BU_ACTNCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONLINE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_substitute", this);
            obj._setContents("<ColumnInfo><Column id=\"T_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"T_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"S_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"E_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","245","6","55","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("성명");
            obj.set_background("#10aea9");
            obj.set_color("#ffffff");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","301","6","115","29",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","418","6","51","29",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #3cbcb8");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","427","466","83","29",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_insa","237","39","273","215",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_insa");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"145\" band=\"left\"/><Column size=\"47\" band=\"left\"/><Column size=\"63\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"부서\" font=\"bold 12px/normal &quot;함초롬바탕 확장&quot;\"/><Cell col=\"1\" text=\"직책\" font=\"bold 12px/normal &quot;함초롬바탕 확장&quot;\"/><Cell col=\"2\" text=\"성명\" font=\"bold 12px/normal &quot;함초롬바탕 확장&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:BUSENM\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:JIKWINM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_buse","7","3","231","457",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_buse");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"222\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:BU_LEVEL\" border=\"0px none #dbdee2\" cssclass=\"CssBuse_tree\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","237","253","78","37",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("시작일");
            obj.set_color("#e8e7e3");
            obj.set_background("#7fb39d");
            obj.set_font("bold 12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_border("1px solid #e8e7e3");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","237","289","78","37",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("종료일");
            obj.set_color("#e8e7e3");
            obj.set_background("#7fb39d");
            obj.set_font("bold 12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_border("1px solid #e8e7e3");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","237","325","78","37",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("대결자");
            obj.set_border("1px solid #e8e7e3");
            obj.set_color("#e8e7e3");
            obj.set_background("#7fb39d");
            obj.set_font("bold 12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","314","253","196","37",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_border("1px solid #e8e7e3");
            obj.set_background("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","314","289","196","37",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_border("1px solid #e8e7e3");
            obj.set_background("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","314","325","196","37",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_border("1px solid #e8e7e3");
            obj.set_background("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate","331","260","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEDate","331","296","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Edit("edSabun","318","331","72","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edName","393","331","72","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSubstitute","237","389","273","71",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_binddataset("ds_substitute");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"75\"/><Column size=\"75\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사번\" font=\"bold 12px/normal &quot;함초롬바탕 확장&quot;\"/><Cell col=\"1\" text=\"성명\" font=\"bold 12px/normal &quot;함초롬바탕 확장&quot;\"/><Cell col=\"2\" text=\"시작일\" font=\"bold 12px/normal &quot;함초롬바탕 확장&quot;\"/><Cell col=\"3\" text=\"종료일\" font=\"bold 12px/normal &quot;함초롬바탕 확장&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:T_SABUN\" textAlign=\"center\" font=\"12px/normal &quot;함초롬바탕&quot;\"/><Cell col=\"1\" text=\"bind:T_NAME\" textAlign=\"center\" font=\"12px/normal &quot;함초롬바탕&quot;\"/><Cell col=\"2\" text=\"bind:S_DATE\" displaytype=\"date\" textAlign=\"center\" font=\"12px/normal &quot;함초롬바탕&quot;\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"3\" text=\"bind:E_DATE\" displaytype=\"date\" textAlign=\"center\" font=\"12px/normal &quot;함초롬바탕&quot;\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnApply",null,"365","20","20","129",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("▼");
            obj.set_font("bold 14px/normal \"한컴 말랑말랑 Bold\"");
            obj.set_tooltiptext("적용");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",520,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Substitute_Approval.xfdl","Lib::Lib_service.xjs");
        this.registerScript("Substitute_Approval.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;

        this.btn_close_onclick = function(obj,e)
        {
        	this.close(-1);
        };

        this.Insa_onload = function(obj,e)
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "jsp/common/getdata_buse.jsp";
        	in_ds = "ds_buse=ds_buse";
        	out_ds = "ds_buse=ds_buse";
        	str_arg = "buse_nm=''" ;
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_buse_select", true, "P", false, this);
        };

        this.Callback_buse_select = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}
        	//인사정보 가져오기
        	this.getData_insa('', '', this.parent.dsParam1);
        	//기동록된 대결 정보 가져오기
        	this.getData_substitute(this.parent.dsParam2);
        };

        this.getData_insa = function(sabun,name,busecd)
        {
        	var str_url, in_ds, out_ds, str_arg;

        	str_url = "jsp/common/getdata_insa.jsp";
        	in_ds = "ds_insa=ds_insa";
        	out_ds = "ds_insa=ds_insa";
        	str_arg = "sabun='"+sabun+"' name='"+name+"' busecd='"+busecd+"'";
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_insa", true, "P", false,this);
        };

        this.Callback_insa = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}
        };

        this.getData_substitute = function(sabun)
        {
        	var str_url, in_ds, out_ds, str_arg;

        	str_url = "JSP/gw/getData_substitute.jsp";
        	in_ds = "ds_substitute=ds_substitute";
        	out_ds = "ds_substitute=ds_substitute";
        	str_arg = "sabun='"+sabun+"'";

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_substitute", true, "P", false,this);
        };

        this.Callback_substitute = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}
        };

        this.grd_buse_oncelldblclick = function(obj,e)
        {
        	this.getData_insa("","",this.ds_buse.getColumn(e.row,"CODE"));
        };

        this.btn_search_onclick = function(obj,e)
        {
        	if (Eco.isEmpty(this.edt_name.value) == false)
        	{
        		this.getData_insa("",this.edt_name.value,"");
        	}
        };

        this.edt_name_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13)
        	{
        		this.btn_search_onclick(null,null);
        	}
        };

        this.grd_insa_oncelldblclick = function(obj,e)
        {
        	this.edSabun.set_value(this.ds_insa.getColumn(e.row, "SABUN"));
        	this.edName.set_value(this.ds_insa.getColumn(e.row, "NAME"))
        };

        //적용시 DELETE/INSERT 바로 실행 및 자동닫기
        this.btnApply_onclick = function(obj,e)
        {

        	if (Eco.isEmpty(this.calSDate.value) || Eco.isEmpty(this.calEDate.value) ||  Eco.isEmpty(this.edSabun.value))
        	{
        		alert("부재기간 및 대결자를 지정하셔야 저장하실 수 있습니다.");
        		this.break;
        	}else{

        		this.Substitute_save();

        		this.ds_substitute.addRow();
        		this.ds_substitute.setColumn(this.ds_substitute.row, "T_SABUN", this.edSabun.value);
        		this.ds_substitute.setColumn(this.ds_substitute.row, "T_NAME", this.edName.value);
        		this.ds_substitute.setColumn(this.ds_substitute.row, "S_DATE", this.calSDate.value);
        		this.ds_substitute.setColumn(this.ds_substitute.row, "E_DATE", this.calEDate.value);
        	}
        };

        this.Substitute_save = function()
        {
        	var str_url, in_ds, out_ds, str_arg;

        	str_url = "JSP/gw/SQL_GW130_SUB.jsp";
        	in_ds = "ds_substitute=ds_substitute";
        	out_ds = "ds_substitute=ds_substitute";

        	str_arg = "sdate=" + nexacro.wrapQuote(this.calSDate.value);
        	str_arg += " edate=" + nexacro.wrapQuote(this.calEDate.value);
        	str_arg += " t_sabun=" + nexacro.wrapQuote(this.edSabun.value);
        	str_arg += " t_name=" + nexacro.wrapQuote(nexacro.trim(this.edName.value));
        	str_arg += " sabun='C16168'";

        	this.gfn_TransactionP("insert", str_url, in_ds, out_ds, str_arg, "Callback_Save", true, "P", false, this);
        };


        this.Callback_Save = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}else{
        		this.close(-1);
        	}
        };

        this.grdSubstitute_oncelldblclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var bOK = objApp.confirm("삭제 하시겠습니까?", "삭제여부 확인 팝업");
        	if(bOK == true)
        	{
        		//this.ds_substitute.deleteRow();
        		this.Substitute_save();
        	}else{
        		this.break;
        	}
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Insa_onload,this);
            this.edt_name.addEventHandler("onkeydown",this.edt_name_onkeydown,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.grd_insa.addEventHandler("oncelldblclick",this.grd_insa_oncelldblclick,this);
            this.grd_buse.addEventHandler("oncelldblclick",this.grd_buse_oncelldblclick,this);
            this.grdSubstitute.addEventHandler("oncelldblclick",this.grdSubstitute_oncelldblclick,this);
            this.btnApply.addEventHandler("onclick",this.btnApply_onclick,this);
        };
        this.loadIncludeScript("Substitute_Approval.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
