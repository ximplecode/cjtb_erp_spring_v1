(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR203P_02");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,543);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSENM\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JIKGUB\" type=\"STRING\" size=\"256\"/><Column id=\"INSA_AGE\" type=\"STRING\" size=\"256\"/><Column id=\"JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"INSA_SEX\" type=\"STRING\" size=\"256\"/><Column id=\"IPSADT\" type=\"STRING\" size=\"256\"/><Column id=\"SA_GB1\" type=\"STRING\" size=\"256\"/><Column id=\"PAY101_KIBON\" type=\"STRING\" size=\"256\"/><Column id=\"C_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"O_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"T_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"IN_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"IN_T_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"SCHOOL\" type=\"STRING\" size=\"256\"/><Column id=\"F_IPSADT\" type=\"STRING\" size=\"256\"/><Column id=\"S_UP\" type=\"STRING\" size=\"256\"/><Column id=\"IPSADT_CH\" type=\"STRING\" size=\"256\"/><Column id=\"TOISADT\" type=\"STRING\" size=\"256\"/><Column id=\"US_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_gb00_00","0","0","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("입사일");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","100","0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","210","5","30","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("부터");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_s_ipsadt","103","5","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_e_ipsadt","242","5","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","sta_gb00_00:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_list");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"138\"/><Column size=\"67\"/><Column size=\"69\"/><Column size=\"80\"/><Column size=\"36\"/><Column size=\"47\"/><Column size=\"110\"/><Column size=\"52\"/><Column size=\"107\"/><Column size=\"75\"/><Column size=\"109\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"163\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"197\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"부서\"/><Cell col=\"1\" text=\"직책\"/><Cell col=\"2\" text=\"사번\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"직급\"/><Cell col=\"5\" text=\"나이\"/><Cell col=\"6\" text=\"주민번호\"/><Cell col=\"7\" text=\"성별\"/><Cell col=\"8\" text=\"입사일\"/><Cell col=\"9\" text=\"구분\"/><Cell col=\"10\" text=\"월급여\"/><Cell col=\"11\" text=\"본사경력\"/><Cell col=\"12\" text=\"타사경력\"/><Cell col=\"13\" text=\"총경력\"/><Cell col=\"14\" text=\"인정타사경력\"/><Cell col=\"15\" text=\"인정총경력\"/><Cell col=\"16\" text=\"최종학력\"/><Cell col=\"17\" text=\"최초입사일\"/><Cell col=\"18\" text=\"승진일\"/><Cell col=\"19\" text=\"정규직전환일\"/><Cell col=\"20\" text=\"퇴사일자\"/><Cell col=\"21\" text=\"Email\"/></Band><Band id=\"body\"><Cell text=\"bind:BUSENM\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:JIKWI\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:SABUN\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:NAME\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:JIKGUB\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:INSA_AGE\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:JUMIN\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:INSA_SEX\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:IPSADT\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:SA_GB1\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:PAY101_KIBON\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:C_WORK\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:O_WORK\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:T_WORK\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:IN_WORK\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:IN_T_WORK\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:SCHOOL\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"17\" text=\"bind:F_IPSADT\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"18\" text=\"bind:S_UP\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"19\" text=\"bind:IPSADT_CH\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"20\" text=\"bind:TOISADT\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"21\" text=\"bind:US_ID\" displaytype=\"normal\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1250,543,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("HR203P_02.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("HR203P_02.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("HR203P_02.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");

        this.fn_setUse = function(gb)
        {
        	if (gb == "0")
        	{
        		this.cald_s_ipsadt.set_value("");
        		this.cald_e_ipsadt.set_value("");
        		this.cald_s_ipsadt.set_enable(false);
        		this.cald_e_ipsadt.set_enable(false);
        	}
        	else
        	{
        		this.cald_s_ipsadt.set_enable(true);
        		this.cald_e_ipsadt.set_enable(true);
        	}
        }

        this.HR203P_02_onload = function(obj,e)
        {
        	if ( this.parent.parent.parent.form.ckb_gb.value == true)
        	{
        		this.cald_s_ipsadt.set_enable(true);
        		this.cald_e_ipsadt.set_enable(true);
        	}
        	else
        	{
        		this.cald_s_ipsadt.set_value("");
        		this.cald_e_ipsadt.set_value("");
        		this.cald_s_ipsadt.set_enable(false);
        		this.cald_e_ipsadt.set_enable(false);
        	}
        };

        this.fn_getData_list = function(ymd, gb)
        {
        	var str_url, in_ds, out_ds, str_arg, gb_c;
        	str_url = "JSP/hr/getData_hr203_02.jsp";
        	in_ds = "ds_list=ds_list";
        	out_ds = "ds_list=ds_list";

        	if (gb == "0")
        	{
        		gb_c = "";
        	}
        	else
        	{
        		gb_c = "1";
        	}

        	str_arg = " gb='" + gb_c + "'" +
        			  " ymd='" + ymd + "'" +
        			  " s_ipsadt='" + this.cald_s_ipsadt.value + "'"+
        			  " e_ipsadt='" + this.cald_e_ipsadt.value + "'";
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


        this.fn_print = function(ymd, gb)
        {
        	var rdUrl = gv_svcUrl + "rpt/hr/HR203P_02.mrd";
        	var gb_c = "";

        	if (gb == "1")
        	{
        		gb_c = gb;
        	}
        	else
        	{
        		gb_c = "";
        	}



        	var rdParam = "/rp [" + ymd + "][" + gb_c + "][" + this.cald_s_ipsadt.value + "][" + this.cald_e_ipsadt.value + "]";
        	var objNew = new ChildFrame();
        	objNew.init("common_print",0,0,null,null,0,0,"common::H_MRD.xfdl");
        	this.addChild("common_print",objNew);
        	//objNew.set_openalign("center middle");
        	objNew.set_autosize(false);
        	objNew.set_titletext("경력기준 포함");
        	objNew.set_showtitlebar(true);
        	objNew.set_resizable(true);
        	objNew.showModal("common_print",this.getOwnerFrame(),{rdUrl:rdUrl, rdParam:rdParam},this,this.fn_common_print);
        }

        this.fn_common_print = function(strID, variant)
        {
        	this.removeChild("common_print");
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.HR203P_02_onload,this);
        };
        this.loadIncludeScript("HR203P_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
