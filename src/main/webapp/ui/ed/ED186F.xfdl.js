(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED186F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_keystring("S:ATHR_NAME, G:ATHR_JUMINNO");
            obj._setContents("<ColumnInfo><Column id=\"PAYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"WITHHOLDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ATHR_JUMINNO\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKCODEYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"UNITCOST\" type=\"INT\" size=\"256\"/><Column id=\"PAYAMOUNT\" type=\"INT\" size=\"256\"/><Column id=\"INCOMETAX\" type=\"INT\" size=\"256\"/><Column id=\"RESIDENTTAX\" type=\"INT\" size=\"256\"/><Column id=\"TOTTAX\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","20","19","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회일자");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","20","56","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("선급금옵션");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_kind","106","56","230","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_kind_innerdataset = new nexacro.NormalDataset("rdo_kind_innerdataset", obj);
            rdo_kind_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">일반조회용</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">제조원가조회용</Col></Row></Rows>");
            obj.set_innerdataset(rdo_kind_innerdataset);
            obj.set_text("일반조회용");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Sdate","103","19","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Edate","227","19","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","353","56","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("일자기준");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_date","438","56","241","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("none");
            var rdo_date_innerdataset = new nexacro.NormalDataset("rdo_date_innerdataset", obj);
            rdo_date_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">지급일자기준</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">원천징수일자기준</Col></Row></Rows>");
            obj.set_innerdataset(rdo_date_innerdataset);
            obj.set_text("지급일자기준");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","689","56","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("재계산여부");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_taxCalculater","779","56","86","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("세금재계산");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"30","63","30","198",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"30","63","30","129",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("출력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_name","353","18","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("주민번호");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_juminNo","436","18","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_format("###### - #@@@@@#");
            obj.set_type("string");
            obj.set_trimtype("both");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_taxFilter","886","57","86","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("0 세율 제외");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","99","1250","611",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"310\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"지급일자\"/><Cell col=\"1\" text=\"원천징수\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"주민등록번호\"/><Cell col=\"4\" text=\"도서코드\"/><Cell col=\"5\" text=\"소득세부사항\"/><Cell col=\"6\" text=\"수량\"/><Cell col=\"7\" text=\"단가\"/><Cell col=\"8\" text=\"지급액\"/><Cell col=\"9\" text=\"소득세\"/><Cell col=\"10\" text=\"주민세\"/><Cell col=\"11\" text=\"세금합계\"/></Band><Band id=\"body\"><Cell text=\"bind:PAYDATE\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;edbusetotal&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"bind:WITHHOLDDATE\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;edbusetotal&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:ATHR_NAME\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;edbusetotal&apos;:&apos;&apos;\" subsumtext=\"  \"/><Cell col=\"3\" text=\"bind:ATHR_JUMINNO\" subsumtext=\"소 계\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;edbusetotal&apos;:&apos;&apos;\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:BOOKCODEYEAR\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;edbusetotal&apos;:&apos;&apos;\"/><Cell col=\"5\" text=\"bind:DTL_REMARK\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;edbusetotal&apos;:&apos;&apos;\"/><Cell col=\"6\" text=\"bind:QTY\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;edbusetotal&apos;:&apos;&apos;\" subsumtext=\"  \"/><Cell col=\"7\" text=\"bind:UNITCOST\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;edbusetotal&apos;:&apos;&apos;\" subsumtext=\"  \"/><Cell col=\"8\" text=\"bind:PAYAMOUNT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;edbusetotal&apos;:&apos;&apos;\"/><Cell col=\"9\" text=\"bind:INCOMETAX\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;edbusetotal&apos;:&apos;&apos;\"/><Cell col=\"10\" text=\"bind:RESIDENTTAX\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;edbusetotal&apos;:&apos;&apos;\"/><Cell col=\"11\" text=\"bind:TOTTAX\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;edbusetotal&apos;:&apos;&apos;\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"총 계\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" expr=\"dataset.getSum(&apos;PAYAMOUNT&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"9\" expr=\"dataset.getSum(&apos;INCOMETAX&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"10\" expr=\"dataset.getSum(&apos;RESIDENTTAX&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"11\" expr=\"dataset.getSum(&apos;TOTTAX&apos;)\" displaytype=\"number\" textAlign=\"right\"/></Band></Format></Formats>");
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
        this.addIncludeScript("ED186F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED186F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("ED186F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var rdUrl,rdParam,sSelect;

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var gv_urlRdDataServer = nexacro.getApplication().gv_urlRdDataServer;

        this.ED186F_onload = function(obj,e)
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

        	if(this.chk_taxCalculater.value == true)
        		this.taxCalculater();

        	if(this.chk_value())
        	{
        		var inds = "ds_list=ds_list";
        		var outds = "ds_list=ds_list";

        		var strArg = "SDATE=" + nexacro.wrapQuote(this.cal_Sdate.value)
        				   + " EDATE=" + nexacro.wrapQuote(this.cal_Edate.value)
        				   + " ATHR_JUMINNO=" + nexacro.wrapQuote(this.medt_juminNo.value)
        				   + " ZEROTAX_ASIDE=" + nexacro.wrapQuote(Eco.decode(this.chk_taxFilter.value, true , "1", ""))
        				   + " SET_CONDITION=" + nexacro.wrapQuote(this.rdo_kind.value)
        				   + " DATE_GUBUN=" + nexacro.wrapQuote(this.rdo_date.value);

        			this.gfn_TransactionP("select","JSP/ed/ed186f_list.jsp", inds, outds, strArg, "fnSearchCallback", false, "P", false, this);
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

        		var ZEROTAX_ASIDE = Eco.decode(this.chk_taxFilter.value, true , "1", "");
        		var juminNo = '';

        		if(this.medt_juminNo.value != null)
        			juminNo = this.medt_juminNo.value;

        		rdUrl = gv_urlMrd + "/ed/ED186.mrd";

        		rdParam  = "/ragentpath ["+ gv_urlRdDataServer +"]" +
        				   " /rp ["+ ZEROTAX_ASIDE + "]["+ this.cal_Sdate.value +"][" +this.cal_Edate.value + "]"
        				   + "[" + juminNo + "][" + this.rdo_kind.value + "][" + this.rdo_date.value + "]";

        		this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1500, 850);
        	}

        };

        this.ED186F_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.ED186F_ontimer = function(obj,e)
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
            this.addEventHandler("onload",this.ED186F_onload,this);
            this.addEventHandler("onsize",this.ED186F_onsize,this);
            this.addEventHandler("ontimer",this.ED186F_ontimer,this);
            this.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.btn_print.addEventHandler("onclick",this.Div00_btn_print_onclick,this);
            this.btn_name.addEventHandler("onclick",this.btn_name_onclick,this);
            this.medt_juminNo.addEventHandler("onkeydown",this.fn_localKeyDown,this);
            this.medt_juminNo.addEventHandler("oneditclick",this.btn_name_onclick,this);
        };
        this.loadIncludeScript("ED186F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
