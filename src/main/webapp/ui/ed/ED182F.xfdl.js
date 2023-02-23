(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED182F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"BANK_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"ATHR_ACNTNO\" type=\"STRING\" size=\"20\"/><Column id=\"TOTOUTAMNT\" type=\"STRING\" size=\"11\"/><Column id=\"ATHR_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"PAYAMOUNT\" type=\"INT\" size=\"10\"/><Column id=\"INCOMETAX\" type=\"INT\" size=\"8\"/><Column id=\"RESIDENTTAX\" type=\"INT\" size=\"7\"/><Column id=\"IC_TOTOUTAMNT\" type=\"INT\" size=\"10\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"ATHR_JUMINNO\" type=\"STRING\" size=\"13\"/><Column id=\"PAYDATE\" type=\"STRING\" size=\"8\"/><Column id=\"FINISHDATE\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","27","27","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회일자");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Sdate","112","27","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Edate","276","27","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","254","29","22","29",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"26","63","30","107",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"26","63","30","35",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("출력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_juminNo","773","27","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_format("###### - #@@@@@#");
            obj.set_type("string");
            obj.set_trimtype("both");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_taxCalculater","1000","27","109","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("세금재계산");
            this.addChild(obj.name, obj);

            obj = new Button("btn_name","690","27","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("주민번호");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","420","26","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("조회옵션");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_kind","509","25","181","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_kind_innerdataset = new nexacro.NormalDataset("rdo_kind_innerdataset", obj);
            rdo_kind_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">지급조회</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">원가조회</Col></Row></Rows>");
            obj.set_innerdataset(rdo_kind_innerdataset);
            obj.set_text("지급조회");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","72","1240","638",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"주민등록번호\"/><Cell col=\"3\" text=\"지급액\"/><Cell col=\"4\" text=\"소득세\"/><Cell col=\"5\" text=\"주민세\"/><Cell col=\"6\" text=\"지급총액\"/><Cell col=\"7\" text=\"지급일자\"/><Cell col=\"8\" text=\"완료일자\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:ATHR_NAME\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:ATHR_JUMINNO\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:PAYAMOUNT\" displaytype=\"currency\"/><Cell col=\"4\" text=\"bind:INCOMETAX\" displaytype=\"currency\"/><Cell col=\"5\" text=\"bind:RESIDENTTAX\" displaytype=\"currency\"/><Cell col=\"6\" text=\"bind:IC_TOTOUTAMNT\" displaytype=\"currency\"/><Cell col=\"7\" text=\"bind:PAYDATE\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:FINISHDATE\" textAlign=\"center\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"지급합계\"/><Cell col=\"2\"/><Cell col=\"3\" expr=\"dataset.getSum(&apos;PAYAMOUNT&apos;)\" displaytype=\"currency\" textAlign=\"right\"/><Cell col=\"4\" displaytype=\"currency\" expr=\"dataset.getSum(&apos;INCOMETAX&apos;)\" textAlign=\"right\"/><Cell col=\"5\" displaytype=\"currency\" expr=\"dataset.getSum(&apos;RESIDENTTAX&apos;)\" textAlign=\"right\"/><Cell col=\"6\" displaytype=\"currency\" expr=\"dataset.getSum(&apos;IC_TOTOUTAMNT&apos;)\" textAlign=\"right\"/><Cell col=\"7\"/><Cell col=\"8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","910","26","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("재계산여부");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","medt_juminNo","value","dsOutOrdDtl","ATHR_JUMINNO2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ED182F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED182F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("ED182F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var rdUrl,rdParam,sSelect;

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var gv_urlRdDataServer = nexacro.getApplication().gv_urlRdDataServer;

        this.ED182F_onload = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        //주민번호 찾기
        this.btn_name_onclick = function(obj,e)
        {
        	this.lfn_showModal("popuppAuthor", "", "ed::EDAuthor_SearchF.xfdl", "", this, 10, 58, 500, 550);
        };

        //찾은 저자 데이터 넣어주기
        this.fn_setAuthorValue = function(rtArray)
        {
        	this.medt_juminNo.set_value(rtArray[1]);
        }

        this.chk_value = function()
        {
        	if(this.cal_Sdate.value == null)
        	{
        		alert("조회일자를 입력해주세요.");
        		this.cal_Sdate.dropdown();
        		return false;
        	}

        	if(this.cal_Edate.value == null)
        	{
        		alert("조회일자를 입력해주세요.");
        		this.cal_Edate.dropdown();
        		return false;
        	}

        	return true;
        }

        //세금재계산
        this.taxCalculater = function()
        {
        	var strArg = "SDATE=" + nexacro.wrapQuote(this.cal_Sdate.value)
        			  + " EDATE=" + nexacro.wrapQuote(this.cal_Edate.value);

        	this.gfn_TransactionP("calculater","JSP/ed/ed180f_taxcalculater.jsp", "", "", strArg, "fnCallback", false, "P", false, this);
        }

        //조회
        this.Div00_btn_search_onclick = function(obj,e)
        {
        	if(this.rdo_kind.index == 0)
        		this.Grid00.setFormatColProperty(8, "size", 0);
        	else
        		this.Grid00.setFormatColProperty(8, "size", 150);

        	if(this.chk_taxCalculater.value == true)
        		this.taxCalculater();

        	if(this.chk_value())
        	{
        		var inds = "ds_list=ds_list";
        		var outds = "ds_list=ds_list";
        		var strArg = "OPTION=" + nexacro.wrapQuote(this.rdo_kind.index)
        				   + " SDATE=" + nexacro.wrapQuote(this.cal_Sdate.value)
        				   + " EDATE=" + nexacro.wrapQuote(this.cal_Edate.value)
        				   + " JUMINNO=" + nexacro.wrapQuote(this.medt_juminNo.value);

        		this.gfn_TransactionP("select","JSP/ed/ed182f_list.jsp", inds, outds, strArg, "fnSearchCallback", true, "P", false, this);
        	}
        };

        this.fnSearchCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else if(this.ds_list.rowcount < 1)
        		alert("조회된 데이터가 없습니다.");
        }

        //출력
        this.Div00_btn_print_onclick = function(obj,e)
        {
        	if(this.chk_value())
        	{
        		if(this.chk_taxCalculater.value == true)
        			this.taxCalculater();

        		var juminNo = '';

        		if(this.medt_juminNo.value != null)
        			juminNo = this.medt_juminNo.value;

        		rdUrl = gv_urlMrd + "/ed/ED182" + Eco.decode(this.rdo_kind.index, 1 , "UNPAY.mrd", ".mrd");

        		rdParam  = "/ragentpath ["+ gv_urlRdDataServer +"]" +
        				   " /rp ["+ this.cal_Sdate.value + "]["+ this.cal_Edate.value +"][" + juminNo + "][" + this.rdo_kind.value + "]";

        		trace(rdParam);
        		this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1500, 850);
        	}

        };

        this.ED182F_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.ED182F_ontimer = function(obj,e)
        {
        	var l;
        	if (obj.getOffsetWidth() < 1300)
        	{
        		l = 0;
        	}
        	else
        	{
        		l = (obj.getOffsetWidth() - 1300) / 2;
        	}

        	trace(l);
        	this.killTimer(0);
        	this.lfn_grdAutofit(this.Grid00);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ED182F_onload,this);
            this.addEventHandler("onsize",this.ED182F_onsize,this);
            this.addEventHandler("ontimer",this.ED182F_ontimer,this);
            this.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.btn_print.addEventHandler("onclick",this.Div00_btn_print_onclick,this);
            this.medt_juminNo.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.medt_juminNo.addEventHandler("oneditclick",this.btn_name_onclick,this);
            this.btn_name.addEventHandler("onclick",this.btn_name_onclick,this);
        };
        this.loadIncludeScript("ED182F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
