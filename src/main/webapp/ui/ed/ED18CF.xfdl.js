(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED18CF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"OUTORDDTL_FINISHDATE\" type=\"STRING\" size=\"8\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"OUTORDER_KIND\" type=\"STRING\" size=\"8\"/><Column id=\"OUTORDER_NO\" type=\"STRING\" size=\"12\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"4\"/><Column id=\"OUTORDDTL_BOOKMSTNAME\" type=\"STRING\" size=\"50\"/><Column id=\"OUTORDDTL_WORKCONTENT\" type=\"STRING\" size=\"50\"/><Column id=\"OUTORDDTL_AMOUNT\" type=\"INT\" size=\"9\"/><Column id=\"OUTORDDTL_INCOMETAX\" type=\"INT\" size=\"8\"/><Column id=\"TOTAL_AMOUNT\" type=\"INT\" size=\"10\"/><Column id=\"TAX_KIND\" type=\"STRING\" size=\"6\"/><Column id=\"OUTORDDTL_INVOICE_YM\" type=\"STRING\" size=\"6\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCust", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REPRESENTATIVE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_STARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_STOPPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ACNTNO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTDTL_SALEAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PWT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","20","68","1240","632",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"완료일자\"/><Cell col=\"1\" rowspan=\"2\" text=\"관련부서\"/><Cell col=\"2\" rowspan=\"2\" text=\"작성자\"/><Cell col=\"3\" rowspan=\"2\" text=\"관리카드번호\"/><Cell col=\"4\" text=\"업체코드\"/><Cell col=\"5\" text=\"도서\"/><Cell col=\"6\" text=\"지급액\"/><Cell col=\"7\" text=\"지급총액\"/><Cell col=\"8\" rowspan=\"2\" text=\"세금계산년월\"/><Cell row=\"1\" col=\"4\" text=\"업체명\"/><Cell row=\"1\" col=\"5\" text=\"작업내용\"/><Cell row=\"1\" col=\"6\" text=\"부가세\"/><Cell row=\"1\" col=\"7\" text=\"세금구분\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:OUTORDDTL_FINISHDATE\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"1\" rowspan=\"2\" text=\"bind:SECTION_NAME\" wordWrap=\"char\"/><Cell col=\"2\" rowspan=\"2\" text=\"bind:EMPLOYEE_NAME\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:OUTORDER_NO\"/><Cell col=\"4\" text=\"bind:CUST_CODE\"/><Cell col=\"5\" text=\"bind:OUTORDDTL_BOOKMSTNAME\"/><Cell col=\"6\" text=\"bind:OUTORDDTL_AMOUNT\"/><Cell col=\"7\" text=\"bind:TOTAL_AMOUNT\"/><Cell col=\"8\" rowspan=\"2\" text=\"bind:OUTORDDTL_INVOICE_YM\" textAlign=\"center\" displaytype=\"date\" calendareditformat=\"yyyy-MM\" calendardateformat=\"yyyy-MM\"/><Cell row=\"1\" col=\"3\" text=\"bind:OUTORDER_KIND\"/><Cell row=\"1\" col=\"4\" text=\"bind:CUST_NAME\"/><Cell row=\"1\" col=\"5\" text=\"bind:OUTORDDTL_WORKCONTENT\"/><Cell row=\"1\" col=\"6\" text=\"bind:OUTORDDTL_INCOMETAX\"/><Cell row=\"1\" col=\"7\" text=\"bind:TAX_KIND\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","17","27","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회일자");
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

            obj = new Static("Static00_00_00","354","27","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("거래처");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cust1","439","27","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cust2","786","27","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_cust1","562","27","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("dsCust");
            obj.set_codecolumn("CUST_CODE");
            obj.set_datacolumn("CUST_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_cust2","910","27","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("dsCust");
            obj.set_codecolumn("CUST_CODE");
            obj.set_datacolumn("CUST_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","768","31","23","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"27","63","30","92",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"27","63","30","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("출력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
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
        this.addIncludeScript("ED18CF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED18CF.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("ED18CF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var rdUrl,rdParam,sSelect;

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var gv_urlRdDataServer = nexacro.getApplication().gv_urlRdDataServer;

        this.ED18CF_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var outds = "dsCust=dsCust";
        	var inds = "dsCust=dsCust";

        	this.gfn_TransactionP("select","JSP/mk/Cust_Select.jsp", inds, outds, "", "fnCallback", true, "P", false, this);
        };

        this.fnCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        		this.dsCust.filter("CUST_GUBN=='00' || CUST_GUBN=='41' ");
        }

        this.cb_cust1_onitemchanged = function(obj,e)
        {
        	if( obj.name == "cb_cust1")
        		this.edt_cust1.set_value(e.postvalue);
        	else
        		this.edt_cust2.set_value(e.postvalue);
        };

        this.cb_cust1_onsetfocus = function(obj,e)
        {
        	if( obj.name == "cb_cust1")
        		this.cb_cust1.dropdown();
        	else
        		this.cb_cust2.dropdown();
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

        //조회
        this.Div00_btn_search_onclick = function(obj,e)
        {
        	if(this.chk_value())
        	{
        		var inds = "ds_list=ds_list";
        		var outds = "ds_list=ds_list";

        		var strArg = "SDATE=" + nexacro.wrapQuote(this.cal_Sdate.value)
        				   + " EDATE=" + nexacro.wrapQuote(this.cal_Edate.value)
        				   + " CUST_CODE1=" + nexacro.wrapQuote(this.edt_cust1.value)
        				   + " CUST_CODE2=" + nexacro.wrapQuote(this.edt_cust2.value);

        			this.gfn_TransactionP("select","JSP/ed/ed18cf_list.jsp", inds, outds, strArg, "fnSearchCallback", false, "P", false, this);
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
        		rdUrl = gv_urlMrd + "/ed/ED18C.mrd";

        		rdParam  = "/ragentpath ["+ gv_urlRdDataServer +"]" +
        				   " /rp ["+ this.cal_Sdate.value +"][" +this.cal_Edate.value + "]["+ this.edt_cust1.text + "][" + this.edt_cust2.text + "]";

        		this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1500, 850);
        	}
        };

        this.ED18CF_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.ED18CF_ontimer = function(obj,e)
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
            this.addEventHandler("onload",this.ED18CF_onload,this);
            this.addEventHandler("onsize",this.ED18CF_onsize,this);
            this.addEventHandler("ontimer",this.ED18CF_ontimer,this);
            this.cb_cust1.addEventHandler("onitemchanged",this.cb_cust1_onitemchanged,this);
            this.cb_cust1.addEventHandler("onsetfocus",this.cb_cust1_onsetfocus,this);
            this.cb_cust2.addEventHandler("onitemchanged",this.cb_cust1_onitemchanged,this);
            this.cb_cust2.addEventHandler("onsetfocus",this.cb_cust1_onsetfocus,this);
            this.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.btn_print.addEventHandler("onclick",this.Div00_btn_print_onclick,this);
        };
        this.loadIncludeScript("ED18CF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
