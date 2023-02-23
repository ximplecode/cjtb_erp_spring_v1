(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED168F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_keystring("BOOK_ROYALTY_KIND");
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKNAME\" type=\"STRING\" size=\"60\"/><Column id=\"ATHR_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"ROYALTY_KIND\" type=\"STRING\" size=\"1\"/><Column id=\"BOOK_ROYALTY_KIND\" type=\"STRING\" size=\"11\"/><Column id=\"SECTION_ROYALTY_KIND\" type=\"STRING\" size=\"6\"/><Column id=\"ROYALTY_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"TOTAL_AMOUNT\" type=\"INT\" size=\"13\"/><Column id=\"PRE_AMOUNT\" type=\"INT\" size=\"13\"/><Column id=\"PAYRATE\" type=\"DECIMAL\" size=\"6\"/><Column id=\"YEAR_PAYAMOUNT\" type=\"INT\" size=\"13\"/><Column id=\"DOWN_PAYMENT\" type=\"INT\" size=\"13\"/><Column id=\"MANUSCRIPT_AMOUNT\" type=\"INT\" size=\"13\"/><Column id=\"REAL_PAYAMOUNT\" type=\"INT\" size=\"13\"/><Column id=\"PAYDATE\" type=\"STRING\" size=\"8\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","22","27","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("작성일자");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Sdate","105","27","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("20220601");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Edate","236","27","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("20220812");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"27","63","30","96",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"27","63","30","27",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("출력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","15","68","97%","642",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"270\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"35\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"33\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"도서코드\"/><Cell col=\"1\" text=\"도서명\"/><Cell col=\"2\" text=\"저자명\"/><Cell col=\"3\" text=\"정산구분\"/><Cell col=\"4\" text=\"해당부서\"/><Cell col=\"5\" text=\"담당자\"/><Cell col=\"6\" text=\"인세총액\"/><Cell col=\"7\" text=\"가정산금액\"/><Cell col=\"8\" text=\"지급&#13;&#10;비율\" wordWrap=\"char\"/><Cell col=\"9\" text=\"당해년도 &#13;&#10;인세지급액\" wordWrap=\"char\"/><Cell col=\"10\" text=\"계약금\"/><Cell col=\"11\" text=\"매절원고료\"/><Cell col=\"12\" text=\"실지급액\"/></Band><Band id=\"body\"><Cell text=\"bind:BOOKMST_CODE\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\"/><Cell col=\"1\" text=\"expr:dataset.getRowLevel(currow) !=0?&quot;소    계&quot;:BOOKNAME\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:ATHR_NAME\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:ROYALTY_NAME\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:SECTION_NAME\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:EMPLOYEE_NAME\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\" textAlign=\"center\"/><Cell col=\"6\" text=\"expr:dataset.getRowLevel(currow) ==1?dataset.getColumn(dataset.getGroupRangeStart(currow), &quot;TOTAL_AMOUNT&quot;):TOTAL_AMOUNT\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\" displaytype=\"number\"/><Cell col=\"7\" text=\"expr:dataset.getRowLevel(currow) ==1?dataset.getColumn(dataset.getGroupRangeStart(currow), &quot;PRE_AMOUNT&quot;):PRE_AMOUNT\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\" displaytype=\"number\"/><Cell col=\"8\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\" expr=\"PAYRATE + &quot;%&quot;\" subsumtext=\"    \" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"9\" text=\"expr:dataset.getRowLevel(currow) ==1?dataset.getColumn(dataset.getGroupRangeStart(currow), &quot;YEAR_PAYAMOUNT&quot;):YEAR_PAYAMOUNT\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\" displaytype=\"number\"/><Cell col=\"10\" text=\"expr:dataset.getRowLevel(currow) ==1?dataset.getColumn(dataset.getGroupRangeStart(currow), &quot;DOWN_PAYMENT&quot;):DOWN_PAYMENT\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\" displaytype=\"number\"/><Cell col=\"11\" text=\"expr:dataset.getRowLevel(currow) ==1?dataset.getColumn(dataset.getGroupRangeStart(currow), &quot;MANUSCRIPT_AMOUNT&quot;):MANUSCRIPT_AMOUNT\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\" displaytype=\"number\"/><Cell col=\"12\" text=\"expr:dataset.getRowLevel(currow) ==1?dataset.getColumn(dataset.getGroupRangeStart(currow), &quot;REAL_PAYAMOUNT&quot;):REAL_PAYAMOUNT\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" text=\"expr:comp.parent.fn_sum(&quot;TOTAL_AMOUNT&quot;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"7\" textAlign=\"right\" text=\"expr:comp.parent.fn_sum(&quot;PRE_AMOUNT&quot;)\" displaytype=\"number\"/><Cell col=\"8\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"9\" textAlign=\"right\" text=\"expr:comp.parent.fn_sum(&quot;YEAR_PAYAMOUNT&quot;)\" displaytype=\"number\"/><Cell col=\"10\" textAlign=\"right\" text=\"expr:comp.parent.fn_sum(&quot;DOWN_PAYMENT&quot;)\" displaytype=\"number\"/><Cell col=\"11\" textAlign=\"right\" text=\"expr:comp.parent.fn_sum(&quot;MANUSCRIPT_AMOUNT&quot;)\" displaytype=\"number\"/><Cell col=\"12\" textAlign=\"right\" text=\"expr:comp.parent.fn_sum(&quot;REAL_PAYAMOUNT&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ED168F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED168F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("ED168F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var rdUrl,rdParam;

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var gv_urlRdDataServer = nexacro.getApplication().gv_urlRdDataServer;

        //조회
        this.Div00_btn_search_onclick = function(obj,e)
        {
        	if(this.chkValue())
        	{
        		var outds, inds, str_url;

        		var strArg = "SDATE="  + nexacro.wrapQuote(this.cal_Sdate.value)
        			   + " EDATE="  + nexacro.wrapQuote(this.cal_Edate.value);

        		outds = "ds_list=ds_list";
        		inds = "ds_list=ds_list";
        		str_url = "JSP/ed/ed168f_list.jsp";

        		this.gfn_TransactionP("select1", str_url, inds, outds, strArg, "fnSearchCallback", true, "P", false, this);
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
        	if(this.chkValue())
        	{

        		rdUrl = gv_urlMrd + "/ed/ED168.mrd";
        		rdParam  = "/ragentpath ["+ gv_urlRdDataServer +"]" +
        				   " /rp ["+ this.cal_Sdate.value + "]["+ this.cal_Edate.value +"]";

        		this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1500, 850);
        	}
        };

        //입력값 확인
        this.chkValue = function()
        {
        	if(this.cal_Sdate.value == null)
        	{
        		alert("지급일자를 입력해주세요.");
        		this.cal_Sdate.dropdown();
        		return false;
        	}

        	if(this.cal_Edate.value == null)
        	{
        		alert("지급일자를 입력해주세요.");
        		this.cal_Edate.dropdown();
        		return false;
        	}

        	return true;
        }

        this.fn_sum = function(colName)
        {
            var nSum = 0;
            for(var i=0; i < this.ds_list.rowcount; i++)
        	{
        		if(this.ds_list.getColumn(i,"BOOK_ROYALTY_KIND") != this.ds_list.getColumn(i-1,"BOOK_ROYALTY_KIND"))
        			nSum+=nexacro.toNumber(this.ds_list.getColumn(i,colName));
            }

            return nSum;
        }

        this.ED168F_onload = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.ED168F_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.ED168F_ontimer = function(obj,e)
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
            this.addEventHandler("onload",this.ED168F_onload,this);
            this.addEventHandler("onsize",this.ED168F_onsize,this);
            this.addEventHandler("ontimer",this.ED168F_ontimer,this);
            this.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.btn_print.addEventHandler("onclick",this.Div00_btn_print_onclick,this);
        };
        this.loadIncludeScript("ED168F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
