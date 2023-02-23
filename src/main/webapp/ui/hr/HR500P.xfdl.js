(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR500P");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_yy", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mm", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">1 월</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">2 월</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">3 월</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">4 월</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"NAME\">5 월</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"NAME\">6 월</Col></Row><Row><Col id=\"CODE\">07</Col><Col id=\"NAME\">7 월</Col></Row><Row><Col id=\"CODE\">08</Col><Col id=\"NAME\">8 월</Col></Row><Row><Col id=\"CODE\">09</Col><Col id=\"NAME\">9 월</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"NAME\">10 월</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"NAME\">11 월</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"NAME\">12 월</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gb", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">천재교육</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">월말퇴사자이월</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">인사발령기준</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">월말퇴사자이월,인사발령</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"J_TQTY\" type=\"INT\" size=\"256\"/><Column id=\"J_INQTY\" type=\"INT\" size=\"256\"/><Column id=\"J_OUTQTY\" type=\"INT\" size=\"256\"/><Column id=\"N_TQTY\" type=\"INT\" size=\"256\"/><Column id=\"N_INQTY\" type=\"INT\" size=\"256\"/><Column id=\"N_OUTQTY\" type=\"INT\" size=\"256\"/><Column id=\"IN_TOTAL\" type=\"INT\" size=\"256\"/><Column id=\"OUT_TOTAL\" type=\"INT\" size=\"256\"/><Column id=\"M_QTY\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","4","5","356","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("부서별 인원 변동현황");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb00","2","50","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("년월");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","102","50",null,"30","2",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_yy","sta_gb00:2","55","96","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_yy");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_mm","cb_yy:3","55","67","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_mm");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ckb_gb","cb_mm:2","55","123","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("당일 퇴사자 포함");
            obj.set_value("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gb","ckb_gb:2","50","99","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("구분");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Radio("rd_select","sta_gb:0","50",null,"30","2",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_gb");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_columncount("4");
            obj.set_padding("0px 50px");
            obj.set_text("부서별 인원 현황");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","2","sta_gb00:0",null,null,"2","2",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"164\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"97\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"부서코드\"/><Cell col=\"1\" rowspan=\"2\" text=\"부서명\"/><Cell col=\"2\" colspan=\"3\"/><Cell col=\"5\" colspan=\"3\" text=\"N_INQTY\"/><Cell col=\"8\" rowspan=\"2\" text=\"전월대비\"/><Cell col=\"9\" colspan=\"2\" text=\"IN_TOTAL\"/><Cell row=\"1\" col=\"2\" text=\"입 사\"/><Cell row=\"1\" col=\"3\" text=\"퇴 사\"/><Cell row=\"1\" col=\"4\" text=\"총인원\"/><Cell row=\"1\" col=\"5\" text=\"입 사\"/><Cell row=\"1\" col=\"6\" text=\"퇴 사\"/><Cell row=\"1\" col=\"7\" text=\"총인원\"/><Cell row=\"1\" col=\"9\" text=\"입사\"/><Cell row=\"1\" col=\"10\" text=\"퇴사\"/></Band><Band id=\"body\"><Cell text=\"bind:BUSECD\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:J_INQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:J_OUTQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:J_TQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:N_INQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:N_OUTQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:N_TQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:M_QTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:IN_TOTAL\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:OUT_TOTAL\" displaytype=\"number\" textAlign=\"right\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합 계\"/><Cell col=\"2\" text=\"expr:comp.parent.fn_setSum(&quot;J_INQTY&quot;)\" displaytype=\"number\"/><Cell col=\"3\" displaytype=\"number\" text=\"expr:comp.parent.fn_setSum(&quot;J_OUTQTY&quot;)\"/><Cell col=\"4\" displaytype=\"number\" text=\"expr:comp.parent.fn_setSum(&quot;J_TQTY&quot;)\"/><Cell col=\"5\" displaytype=\"number\" text=\"expr:comp.parent.fn_setSum(&quot;N_INQTY&quot;)\"/><Cell col=\"6\" displaytype=\"number\" text=\"expr:comp.parent.fn_setSum(&quot;N_OUTQTY&quot;)\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:comp.parent.fn_setSum(&quot;N_TQTY&quot;)\"/><Cell col=\"8\" displaytype=\"number\" text=\"expr:comp.parent.fn_setSum(&quot;M_QTY&quot;)\"/><Cell col=\"9\" text=\"expr:comp.parent.fn_setSum(&quot;IN_TOTAL&quot;)\"/><Cell col=\"10\" text=\"expr:comp.parent.fn_setSum(&quot;OUT_TOTAL&quot;)\"/></Band></Format></Formats>");
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
            obj = new BindItem("item0","cb_yy","value","ds_insa","SA_GB1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cb_mm","value","ds_insa","SA_GB1");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("HR500P.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("HR500P.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("HR500P.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");

        this.HR500P_onload = function(obj,e)
        {
        	var dt = new Date();

        	this.cb_mm.set_value(Eco.date.getMaskFormatString(dt,"MM"));
        	this.cb_yy.set_value(this.lfn_setYY(this.ds_yy, "2011"));
        };

        this.btn_search_onclick = function(obj,e)
        {
        	var str_url, in_ds, out_ds, str_arg;
        	var ym = new Date();
        	var ymd1, ymd2, ymd3, gb;
        	var dt = new Date();

        	ym = Eco.date.strToDate(this.cb_yy.value + this.cb_mm.value + "01");

        	ymd1 = Eco.date.getMaskFormatString(Eco.date.addMonth(ym, -1),"yyyyMM");
        	ymd2 = Eco.date.getMaskFormatString(ym,"yyyyMM");
        	ymd3 = Eco.date.getMaskFormatString(Eco.date.addMonth(ym, 1),"yyyyMM");

        	this.grd_list.setCellProperty("head",2,"text",Eco.date.getMaskFormatString(Eco.date.addMonth(ym, -1),"yyyy년 MM월"));
        	this.grd_list.setCellProperty("head",3,"text",Eco.date.getMaskFormatString(ym,"yyyy년 MM월"));
        	this.grd_list.setCellProperty("head",5,"text",Eco.date.getMaskFormatString(Eco.date.addMonth(ym, -1),"yyyy년 MM월") + "~" + Eco.date.getMaskFormatString(ym,"yyyy년 MM월"));


        	str_url = this.fn_selectJsp(this.rd_select.value);
        	in_ds = "ds_list=ds_list";
        	out_ds = "ds_list=ds_list";
        	str_arg = " GB='" + this.lfn_CheckBox_Return(this.ckb_gb) + "'"+
        	          " YMD1='" + ymd1 + "'" +
        			  " YMD2='" + ymd2 + "'" +
        			  " YMD3='" + ymd3 + "'";
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

        this.fn_selectJsp = function(val)
        {
        	var rt;
        	switch (val)
        	{
        		case "01" :
        			rt = "JSP/hr/getData_hr500_01.jsp";
        			break;
        		case "02" :
        			rt = "JSP/hr/getData_hr500_02.jsp";
        			break;
        		case "03" :
        			rt = "JSP/hr/getData_hr500_03.jsp";
        			break;
        		case "04" :
        			rt = "JSP/hr/getData_hr500_04.jsp";
        			break;
        	}

        	return rt;
        }

        this.fn_setSum = function(colName)
        {
        	var rt;

        	rt = this.ds_list.getSum(colName);
        	return rt;
        }

        this.btn_print_onclick = function(obj,e)
        {
        	var ym = new Date();
        	var ymd1, ymd2, ymd3, gb;
        	var dt = new Date();

        	var permission = this.getPermission_print();

        	if (permission == false)
        	{
        		this.alert("권한이 없습니다.");
        		return false;
        	}

        	ym = Eco.date.strToDate(this.cb_yy.value + this.cb_mm.value + "01");

        	ymd1 = Eco.date.getMaskFormatString(Eco.date.addMonth(ym, -1),"yyyyMM");
        	ymd2 = Eco.date.getMaskFormatString(ym,"yyyyMM");
        	ymd3 = Eco.date.getMaskFormatString(Eco.date.addMonth(ym, 1),"yyyyMM");
        	gb = this.lfn_CheckBox_Return_var(this.ckb_gb,"Y","");

        	var rdUrl = gv_svcUrl + this.fn_setMrd(this.rd_select.value);
            var rdParam = "/rp [" + ymd1 + "][" + ymd2 + "][" + ymd3 + "][" + gb +"]";

        	trace(rdParam);

        	var objNew = new ChildFrame();
        	objNew.init("common_print",0,0,null,null,0,0,"common::H_MRD.xfdl");
        	this.addChild("common_print",objNew);
        	//objNew.set_openalign("center middle");
        	objNew.set_autosize(false);
        	objNew.set_titletext("인원 변동 현황");
        	objNew.set_showtitlebar(true);
        	objNew.set_resizable(true);
        	objNew.showModal("common_print",this.getOwnerFrame(),{rdUrl:rdUrl, rdParam:rdParam},this,this.fn_common_print);
        };

        this.fn_setMrd = function(val)
        {
        	var rt;
        	switch (val)
        	{
        		case "01" :
        			rt = "rpt/hr/HR500P_01.mrd";
        			break;
        		case "02" :
        			rt = "rpt/hr/HR500P_02.mrd";
        			break;
        		case "03" :
        			rt = "rpt/hr/HR500P_03.mrd";
        			break;
        		case "04" :
        			rt = "rpt/hr/HR500P_04.mrd";
        			break;
        	}

        	return rt;
        }

        this.fn_common_print = function(strID, variant)
        {
        	this.removeChild("common_print");
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.HR500P_onload,this);
            this.ckb_gb.addEventHandler("onchanged",this.ckb_gb_onchanged,this);
            this.rd_select.addEventHandler("onitemchanged",this.rd_select_onitemchanged,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
        };
        this.loadIncludeScript("HR500P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
