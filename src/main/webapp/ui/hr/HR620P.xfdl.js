(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR620P");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_usecd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"NAME\">전체</Col></Row><Row><Col id=\"CODE\">07</Col><Col id=\"NAME\">병가</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">출산휴가</Col></Row><Row><Col id=\"CODE\">31</Col><Col id=\"NAME\">육아휴직</Col></Row><Row><Col id=\"CODE\">30</Col><Col id=\"NAME\">휴직(일반)</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"NAME\">휴직(기존)</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"NAME\">출산휴가</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TODATE\" type=\"STRING\" size=\"256\"/><Column id=\"FRDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TMSCD\" type=\"STRING\" size=\"256\"/><Column id=\"TMSNM\" type=\"STRING\" size=\"256\"/><Column id=\"TOISADT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","4","5","356","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("장기 근태자 현황");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","2","60","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("기간");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","82","60",null,"30","2",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_s_sym","sta00_01_00:2","65","10%","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_dateformat("yyyy-MM    부터");
            obj.set_editformat("yyyy-MM");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_s_eym","cald_s_sym:30","65","10%","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_dateformat("yyyy-MM    까지");
            obj.set_editformat("yyyy-MM");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00","cald_s_eym:30","60","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("근태사유");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_s_gb","sta00_01_00_00:2","65","180","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_usecd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ckb_s_toisagb","cb_s_gb:5","65","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("퇴사자 포함");
            obj.set_visible("true");
            obj.set_value("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","2","Static01_00:0",null,null,"2","2",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"211\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"부서\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"직책\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"퇴사일자\"/><Cell col=\"5\" text=\"사유\"/><Cell col=\"6\" colspan=\"2\" text=\"기간\"/></Band><Band id=\"body\"><Cell text=\"bind:BUSE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:SABUN\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:JIKWI\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:NAME\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:TOISADT\" displaytype=\"expr:comp.parent.fn_setDisplaytype(currow)\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:TMSNM\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:TODATE\" displaytype=\"date\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:FRDATE\" displaytype=\"date\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"27","120","22","2",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"27","120","22","130",null,null,null,null,null,this);
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
        this.addIncludeScript("HR620P.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("HR620P.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("HR620P.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");

        this.btn_search_onclick = function(obj,e)
        {
        	var sDate, eDate, toisagb;
        	var str_url, in_ds, out_ds, str_arg;

        	sDate = Eco.date.getMaskFormatString(Eco.date.strToDate(this.cald_s_sym.value),"yyyyMM");
        	eDate = Eco.date.getMaskFormatString(Eco.date.strToDate(this.cald_s_eym.value),"yyyyMM");
        	str_url = "JSP/hr/getData_hr620.jsp";
        	in_ds = "ds_list=ds_list";
        	out_ds = "ds_list=ds_list";
        	str_arg = " SYM='" + sDate + "'" +
        			  " EYM='" + eDate + "'" +
        			  " TMSCD='" + this.cb_s_gb.value + "'" +
        			  " TOISAGB='" + this.lfn_CheckBox_Return_var( this.ckb_s_toisagb, "1","") + "'";

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
        };

        this.fn_setDisplaytype = function(nRow)
        {
        	if ( Eco.isEmpty( this.ds_list.getColumn(nRow,"TOISADT")) == true)
        	{
        		this.grd_list.setCellProperty("body",nRow,"displaytype","normal");
        	}
        	else
        	{
        		this.grd_list.setCellProperty("body",nRow,"displaytype","date");
        	}

        }

        this.HR620P_onload = function(obj,e)
        {
        	var dt = new Date();

        	this.cald_s_sym.set_value(dt);
        	this.cald_s_eym.set_value(dt);
        };


        this.btn_save_onclick = function(obj,e)
        {
        	var sDate, eDate;
        	var permission = this.getPermission_print();

        	if (permission == false)
        	{
        		this.alert("권한이 없습니다.");
        		return false;
        	}

        	sDate = Eco.date.getMaskFormatString(Eco.date.strToDate(this.cald_s_sym.value),"yyyyMM");
        	eDate = Eco.date.getMaskFormatString(Eco.date.strToDate(this.cald_s_eym.value),"yyyyMM");

        	var rdUrl = gv_svcUrl + "rpt/hr/HR620P_01.mrd";
        	var rdParam = "/rp [" + sDate + "][" + eDate + "][" + this.cb_s_gb.value + "][" + this.lfn_CheckBox_Return_var( this.ckb_s_toisagb, "Y","") + "]";


        	var objNew = new ChildFrame();
        	objNew.init("common_print",0,0,null,null,0,0,"common::H_MRD.xfdl");
        	this.addChild("common_print",objNew);
        	//objNew.set_openalign("center middle");
        	objNew.set_autosize(false);
        	objNew.set_titletext("장기근태");
        	objNew.set_showtitlebar(true);
        	objNew.set_resizable(false);
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
            this.addEventHandler("onload",this.HR620P_onload,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("HR620P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
