(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED183F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_keystring("BOOKMST_CODEYEAR");
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_CODEYEAR\" type=\"STRING\" size=\"17\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/><Column id=\"PAYDATE\" type=\"STRING\" size=\"8\"/><Column id=\"OUTERCODE\" type=\"STRING\" size=\"13\"/><Column id=\"OUTERNAME\" type=\"STRING\" size=\"30\"/><Column id=\"QTY\" type=\"STRING\" size=\"9\"/><Column id=\"UNITCOST\" type=\"INT\" size=\"9\"/><Column id=\"PAYAMOUNT\" type=\"INT\" size=\"10\"/><Column id=\"WORKCONTENT\" type=\"STRING\" size=\"50\"/><Column id=\"MNSCRIPT_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBookMst", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","17","27","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회일자");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"26","63","30","81",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_name","630","27","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("도서코드");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","350","27","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("조회옵션");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_kind","439","26","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_kind_innerdataset = new nexacro.NormalDataset("rdo_kind_innerdataset", obj);
            rdo_kind_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">개인 외주비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">업체 외주비</Col></Row></Rows>");
            obj.set_innerdataset(rdo_kind_innerdataset);
            obj.set_text("개인 외주비");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"26","63","30","12",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("출력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","883","26","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("도서년판");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Sdate","100","27","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Edate","224","27","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","16","71","1236","639",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"도서코드\"/><Cell col=\"1\" text=\"도서명\"/><Cell col=\"2\" text=\"지급일자\"/><Cell col=\"3\" text=\"작성부서\"/><Cell col=\"4\" text=\"외주자(처)\"/><Cell col=\"5\" text=\"외주자(처) 번호\"/><Cell col=\"6\" text=\"작업내용\"/><Cell col=\"7\" text=\"수량\"/><Cell col=\"8\" text=\"단가\"/><Cell col=\"9\" text=\"지급액\"/></Band><Band id=\"body\"><Cell text=\"bind:BOOKMST_CODEYEAR\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\" subsumtext=\"    \"/><Cell col=\"1\" text=\"bind:BOOKMST_NAME\" subsumtext=\"소   계\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PAYDATE\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\" displaytype=\"date\" subsumtext=\"      \"/><Cell col=\"3\" text=\"bind:SECTION_NAME\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"bind:OUTERNAME\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\"/><Cell col=\"5\" text=\"bind:OUTERCODE\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\"/><Cell col=\"6\" text=\"bind:MNSCRIPT_NAME\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\"/><Cell col=\"7\" text=\"bind:QTY\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\"/><Cell col=\"8\" text=\"bind:UNITCOST\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\" subsumtext=\"     \"/><Cell col=\"9\" text=\"bind:PAYAMOUNT\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"총   계\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\" expr=\"dataset.getSum(&apos;PAYAMOUNT&apos;)\" displaytype=\"currency\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookScode","714","26","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_inputtype("number");
            obj.set_maxlength("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookEcode","797","26","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_inputtype("number");
            obj.set_maxlength("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookEyear","1049","27","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookSyear","966","27","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
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
        this.addIncludeScript("ED183F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED183F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("ED183F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var rdUrl,rdParam,sSelect;

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var gv_urlRdDataServer = nexacro.getApplication().gv_urlRdDataServer;

        this.ED183F_onload = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        //도서코드 찾기
        this.btn_name_onclick = function(obj,e)
        {
        	var objParam = {dsParam1:this.dsBookMst};
        	this.lfn_showModal("popupAddress", objParam, "mk::MKBook_SearchF.xfdl", "popupBookCallBack", this, 10, 58, 450, 400);
        };

        this.popupBookCallBack = function(svcId)
        {
        	if(this.edt_bookScode.text.length != this.edt_bookScode.maxlength)
        		this.edt_bookScode.set_value(this.dsBookMst.getColumn(this.dsBookMst.rowposition,"BOOKMST_CODE"));
        	else
        		this.edt_bookEcode.set_value(this.dsBookMst.getColumn(this.dsBookMst.rowposition,"BOOKMST_CODE"))
        };

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

        	if(this.edt_bookScode.text.length != this.edt_bookScode.maxlength)
        	{
        		alert("도서코드를 입력해주세요.");
        		this.edt_bookScode.setFocus();
        		return false;
        	}

        	if(this.edt_bookSyear.text.length != this.edt_bookSyear.maxlength)
        	{
        		alert("도서년판을 입력해주세요.");
        		this.edt_bookScode.setFocus();
        		return false;
        	}

        	return true;
        }

        //조회
        this.Div00_btn_search_onclick = function(obj,e)
        {
        	if(this.chk_value())
        	{
        		var inds = "ds_list=ds_list";
        		var outds = "ds_list=ds_list";

        		var strArg = "SDATE=" + nexacro.wrapQuote(this.cal_Sdate.value)
        				   + " EDATE=" + nexacro.wrapQuote(this.cal_Edate.value)
        				   + " SBOOKMST_CODE=" + nexacro.wrapQuote(this.edt_bookScode.value)
        				   + " EBOOKMST_CODE=" + nexacro.wrapQuote(this.edt_bookEcode.value)
        				   + " SBOOKMST_YEAR=" + nexacro.wrapQuote(this.edt_bookSyear.value)
        				   + " EBOOKMST_YEAR=" + nexacro.wrapQuote(this.edt_bookEyear.value)
        				   + " OPTION=" + nexacro.wrapQuote(this.rdo_kind.value);

        		this.gfn_TransactionP("select","JSP/ed/ed183f_list.jsp", inds, outds, strArg, "fnSearchCallback", true, "P", false, this);
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
        		rdUrl = gv_urlMrd + "/ed/ED183.mrd";

        		rdParam  = "/ragentpath ["+ gv_urlRdDataServer +"]" +
        				   " /rp ["+ this.cal_Sdate.value + "]["+ this.cal_Edate.value  + "]["+ this.edt_bookScode.text + "][" +this.edt_bookEcode.text + "][" + this.edt_bookSyear.text + "][" + this.edt_bookEyear.text + "][" + this.rdo_kind.value + "]";

        		this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1500, 850);
        	}

        };

        this.ED183F_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.ED183F_ontimer = function(obj,e)
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
            this.addEventHandler("onload",this.ED183F_onload,this);
            this.addEventHandler("onsize",this.ED183F_onsize,this);
            this.addEventHandler("ontimer",this.ED183F_ontimer,this);
            this.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.btn_name.addEventHandler("onclick",this.btn_name_onclick,this);
            this.btn_print.addEventHandler("onclick",this.Div00_btn_print_onclick,this);
            this.edt_bookEyear.addEventHandler("onchanged",this.Edit00_01_onchanged,this);
        };
        this.loadIncludeScript("ED183F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
