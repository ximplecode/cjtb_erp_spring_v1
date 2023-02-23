(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED184F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_keystring("S:+SECTION_CODE, G:SECTION_NAME");
            obj._setContents("<ColumnInfo><Column id=\"PAYDATE\" type=\"DATE\" size=\"256\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AUTHOR\" type=\"STRING\" size=\"256\"/><Column id=\"MNSCRIPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FINISHDATE\" type=\"DATE\" size=\"256\"/><Column id=\"AMOUNT\" type=\"INT\" size=\"256\"/><Column id=\"INCOMETAX\" type=\"INT\" size=\"256\"/><Column id=\"RESIDENTTAX\" type=\"INT\" size=\"256\"/><Column id=\"TOTAL\" type=\"INT\" size=\"256\"/><Column id=\"MST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("Static00_00_00","350","27","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회구분");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_kind","439","26","181","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
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

            obj = new Calendar("cal_Sdate","100","27","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Edate","224","27","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","630","26","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("출력선택");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_prtKind","715","26","210","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("none");
            var rdo_prtKind_innerdataset = new nexacro.NormalDataset("rdo_prtKind_innerdataset", obj);
            rdo_prtKind_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">도서코드순</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">부서-지급일자순</Col></Row></Rows>");
            obj.set_innerdataset(rdo_prtKind_innerdataset);
            obj.set_text("도서코드순");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","940","27","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("재계산여부");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_taxCalculater","1030","27","86","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("세금재계산");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"26","63","30","91",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"26","63","30","22",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("출력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","18","68","1240","582",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"과목명\"/><Cell col=\"1\" text=\"저자\"/><Cell col=\"2\" text=\"완료일자\"/><Cell col=\"3\" text=\"지급일자\"/><Cell col=\"4\" text=\"지급액\"/><Cell col=\"5\" text=\"소득세\"/><Cell col=\"6\" text=\"주민세\"/><Cell col=\"7\" text=\"실지급액\"/><Cell col=\"8\" text=\"작업구분\"/></Band><Band id=\"body\"><Cell text=\"bind:BOOKNAME\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\" subsumtext=\"bind:SECTION_NAME\"/><Cell col=\"1\" text=\"bind:AUTHOR\" subsumtext=\"소 계\" suppressalign=\"middle\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:FINISHDATE\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\" subsumtext=\"  \"/><Cell col=\"3\" text=\"bind:PAYDATE\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\" subsumtext=\"  \"/><Cell col=\"4\" text=\"bind:AMOUNT\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\"/><Cell col=\"5\" text=\"bind:INCOMETAX\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\"/><Cell col=\"6\" text=\"bind:RESIDENTTAX\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\"/><Cell col=\"7\" text=\"bind:TOTAL\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\"/><Cell col=\"8\" text=\"bind:MNSCRIPT_NAME\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : &apos;&apos;\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"원고료 지급합계\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" expr=\"dataset.getSum(&apos;AMOUNT&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"5\" expr=\"dataset.getSum(&apos;INCOMETAX&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"6\" expr=\"dataset.getSum(&apos;RESIDENTTAX&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"7\" expr=\"dataset.getSum(&apos;TOTAL&apos;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"8\"/></Band></Format></Formats>");
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
        this.addIncludeScript("ED184F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED184F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("ED184F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var rdUrl,rdParam,sSelect;

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var gv_urlRdDataServer = nexacro.getApplication().gv_urlRdDataServer;

        this.ED184F_onload = function(obj,e)
        {
        	this.setTimer(0,1);
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
        	if(this.rdo_kind.index == 1 && this.rdo_prtKind.index == 0)
        	{
        		this.Grid00.setFormatColProperty(2, "size", 100);
        		this.Grid00.setFormatColProperty(3, "size", 100);
        	}else
        	{
        		this.Grid00.setFormatColProperty(2, "size", 0);
        		this.Grid00.setFormatColProperty(3, "size", 0);
        	}

        	if(this.chk_taxCalculater.value == true)
        		this.taxCalculater();

        	if(this.chk_value())
        	{
        		var inds = "ds_list=ds_list";
        		var outds = "ds_list=ds_list";

        		var strArg = "SDATE=" + nexacro.wrapQuote(this.cal_Sdate.value)
        				   + " EDATE=" + nexacro.wrapQuote(this.cal_Edate.value);

        		if(this.rdo_prtKind.index == 0)
        		{
        			strArg += " KIND=" + nexacro.wrapQuote(this.rdo_kind.value);	//0 : 지급조회 1 : 원가조회

        			this.gfn_TransactionP("select","JSP/ed/ed184f_list.jsp", inds, outds, strArg, "fnSearchCallback", false, "P", false, this);
        		}
        		else
        			this.gfn_TransactionP("select","JSP/ed/ed184f_list2.jsp", inds, outds, strArg, "fnSearchCallback", false, "P", false, this);
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

        		if(this.rdo_prtKind.index == 0)
        			rdUrl = gv_urlMrd + "/ed/ED184" + Eco.decode(this.rdo_kind.index, 1 , "UNPAY.mrd", ".mrd");
        		else
        			rdUrl = gv_urlMrd + "/ed/ED184_2.mrd";

        		rdParam  = "/ragentpath ["+ gv_urlRdDataServer +"]" +
        				   " /rp ["+ this.cal_Sdate.value + "]["+ this.cal_Edate.value +"]";

        		this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1500, 850);
        	}

        };

        this.ED184F_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.ED184F_ontimer = function(obj,e)
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
            this.addEventHandler("onload",this.ED184F_onload,this);
            this.addEventHandler("onsize",this.ED184F_onsize,this);
            this.addEventHandler("ontimer",this.ED184F_ontimer,this);
            this.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.btn_print.addEventHandler("onclick",this.Div00_btn_print_onclick,this);
        };
        this.loadIncludeScript("ED184F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
