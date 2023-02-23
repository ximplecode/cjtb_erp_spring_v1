(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR202P");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_gb", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">부서별 인원 현황</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">학력/연령/근속년수별 인원현황</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">입/퇴사자 현황(연간)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_01", this);
            obj.set_keystring("FCODE");
            obj._setContents("<ColumnInfo><Column id=\"FCODE\" type=\"STRING\" size=\"256\"/><Column id=\"FNAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSENM\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL_CO1\" type=\"INT\" size=\"256\"/><Column id=\"LEVEL_CO2\" type=\"INT\" size=\"256\"/><Column id=\"LEVEL_CO3\" type=\"INT\" size=\"256\"/><Column id=\"LEVEL_CO4\" type=\"INT\" size=\"256\"/><Column id=\"LEVEL_CO_ETC\" type=\"INT\" size=\"256\"/><Column id=\"LEVEL_TOTAL\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_021", this);
            obj.set_keystring("GB");
            obj._setContents("<ColumnInfo><Column id=\"SCH\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"INT\" size=\"256\"/><Column id=\"PER\" type=\"FLOAT\" size=\"256\"/><Column id=\"GB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_022", this);
            obj.set_keystring("GB");
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"AGECNT\" type=\"INT\" size=\"256\"/><Column id=\"AGEPER\" type=\"FLOAT\" size=\"256\"/><Column id=\"GB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_023", this);
            obj.set_keystring("GB");
            obj._setContents("<ColumnInfo><Column id=\"YEARGB\" type=\"STRING\" size=\"256\"/><Column id=\"YEARCNT\" type=\"INT\" size=\"256\"/><Column id=\"YEARPER\" type=\"FLOAT\" size=\"256\"/><Column id=\"GB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_03", this);
            obj.set_keystring("GB");
            obj._setContents("<ColumnInfo><Column id=\"MDATE\" type=\"STRING\" size=\"256\"/><Column id=\"IPSADT\" type=\"INT\" size=\"256\"/><Column id=\"TOISADT\" type=\"INT\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/><Column id=\"GB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","4","5","356","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("인원현황");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb","2","50","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("적용일자");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","sta_gb:0","50",null,"30","2",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_ymd","sta_gb:5","55","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ckb_gb","cald_ymd:2","55","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("당일퇴사자 포함");
            obj.set_value("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb00","ckb_gb:0","50","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("구분");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Radio("rd_select","sta_gb00:0","50",null,"30","2",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_gb");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_columncount("3");
            obj.set_padding("0px 0px 0px 50px");
            obj.set_text("부서별 인원 현황");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("div_sub","2","sta_gb:0",null,null,"2","2",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("1px solid #3cbcb8");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"16","120","22","140",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","120","22","10",null,null,null,null,null,this);
            obj.set_taborder("9");
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
        this.addIncludeScript("HR202P.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("HR202P.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("HR202P.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");

        this.btn_search_onclick = function(obj,e)
        {
        	switch (this.rd_select.value)
        	{
        		case "01" :
        			this.getData_01();
        			break;
        		case "02" :
        			this.getData_02();
        			break;
        		case "03" :
        			this.getData_03();
        			break;
        	}
        };

        this.getData_01 = function()
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/getData_hr202_01.jsp";
        	in_ds = "ds_01=ds_01";
        	out_ds = "ds_01=ds_01";
        	str_arg = "YMD='"+ this.cald_ymd.value +"' GB='"+ this.lfn_CheckBox_Return(this.ckb_gb) + "'";
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
        }

        this.HR202P_onload = function(obj,e)
        {
        	var dt = new Date();

        	this.cald_ymd.set_value(dt);
        	this.setDiv_url();
        };

        this.setDiv_url = function()
        {
        	this.ds_01.clearData();
        	switch (this.rd_select.value)
        	{
        		case "01" :
        			this.div_sub.set_url("hr::HR202P_01.xfdl");
        			break;
        		case "02" :
        			this.div_sub.set_url("hr::HR202P_02.xfdl");
        			break;
        		case "03" :
        			this.div_sub.set_url("hr::HR202P_03.xfdl");
        			break;
        	}
        }


        this.rd_select_onitemchanged = function(obj,e)
        {
        	this.setDiv_url();
        };

        this.btn_print_onclick = function(obj,e)
        {
        	var permission = this.getPermission_print();

        	if (permission == false)
        	{
        		this.alert("권한이 없습니다.");
        		return false;
        	}

        	switch (this.rd_select.value)
        	{
        		case "01" :
        			this.fn_print("rpt/hr/HR202P_01.mrd","부서별 인원 현황");
        			break;
        		case "02" :
        			this.fn_print("rpt/hr/HR202P_02.mrd","학력/연령/근속연수별 인원 현황");
        			break;
        		case "03" :
        			this.fn_print("rpt/hr/HR202P_03.mrd","월별 입/퇴사자 인원 현황");
        			break;
        	}

        };

        this.fn_print = function(url, caption)
        {
        	var rdUrl = gv_svcUrl + url;
            var rdParam;
        	if (this.ckb_gb.value == true)
        	{
        		rdParam = "/rp [" + this.cald_ymd.value + "][][1]";
        	}
        	else
        	{
        		rdParam = "/rp [" + this.cald_ymd.value + "][1][]";
        	}


        	var objNew = new ChildFrame();
        	objNew.init("common_print",0,0,null,null,0,0,"common::H_MRD.xfdl");
        	this.addChild("common_print",objNew);
        	//objNew.set_openalign("center middle");
        	objNew.set_autosize(false);
        	objNew.set_titletext(caption);
        	objNew.set_showtitlebar(true);
        	objNew.set_resizable(true);
        	objNew.showModal("common_print",this.getOwnerFrame(),{rdUrl:rdUrl, rdParam:rdParam},this,this.fn_common_print);
        }

        this.fn_common_print = function(strID, variant)
        {
        	this.removeChild("common_print");
        }

        this.getData_02 = function()
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/getData_hr202_02all.jsp";
        	in_ds = "ds_021=ds_021 ds_022=ds_022 ds_023=ds_023";
        	out_ds = "ds_021=ds_021 ds_022=ds_022 ds_023=ds_023";
        	str_arg = "YMD='"+ this.cald_ymd.value +"' GB='"+ this.lfn_CheckBox_Return(this.ckb_gb) + "'";
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_none", true, "S", false,this);
        }

        this.getData_03 = function()
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/getData_hr202_03.jsp";
        	in_ds = "ds_03=ds_03";
        	out_ds = "ds_03=ds_03";
        	str_arg = "YMD='"+ this.cald_ymd.value +"' GB='"+ this.lfn_CheckBox_Return(this.ckb_gb) + "'";
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_none", true, "S", false,this);
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.HR202P_onload,this);
            this.rd_select.addEventHandler("onitemchanged",this.rd_select_onitemchanged,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
        };
        this.loadIncludeScript("HR202P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
