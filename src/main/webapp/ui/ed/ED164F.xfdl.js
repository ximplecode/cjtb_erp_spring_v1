(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED164F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_keystring("SECTION_CODE+ROYALTY_KIND, SECTION_CODE");
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKNAME\" type=\"STRING\" size=\"60\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"ROYALTY_KIND\" type=\"STRING\" size=\"1\"/><Column id=\"BOOK_ROYALTY_KIND\" type=\"STRING\" size=\"11\"/><Column id=\"SECTION_ROYALTY_KIND\" type=\"STRING\" size=\"6\"/><Column id=\"ROYALTY_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"PRICE\" type=\"INT\" size=\"6\"/><Column id=\"ROYALTYRATE\" type=\"DECIMAL\" size=\"6\"/><Column id=\"DELIVERYQTY\" type=\"INT\" size=\"7\"/><Column id=\"RETURNEDQTY\" type=\"INT\" size=\"7\"/><Column id=\"CHANGEQTY\" type=\"INT\" size=\"7\"/><Column id=\"NETSALEQTY\" type=\"INT\" size=\"7\"/><Column id=\"TOTAL_AMOUNT\" type=\"INT\" size=\"13\"/><Column id=\"PRE_AMOUNT\" type=\"INT\" size=\"13\"/><Column id=\"PAYRATE\" type=\"DECIMAL\" size=\"6\"/><Column id=\"YEAR_PAYAMOUNT\" type=\"INT\" size=\"13\"/><Column id=\"DOWN_PAYMENT\" type=\"INT\" size=\"13\"/><Column id=\"MANUSCRIPT_AMOUNT\" type=\"INT\" size=\"13\"/><Column id=\"REAL_PAYAMOUNT\" type=\"INT\" size=\"13\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list2", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKNAME\" type=\"STRING\" size=\"60\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"ATHR_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"ROYALTY_KIND\" type=\"STRING\" size=\"1\"/><Column id=\"BOOK_ROYALTY_KIND\" type=\"STRING\" size=\"11\"/><Column id=\"SECTION_ROYALTY_KIND\" type=\"STRING\" size=\"6\"/><Column id=\"ROYALTY_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"PRICE\" type=\"INT\" size=\"6\"/><Column id=\"ROYALTYRATE\" type=\"DECIMAL\" size=\"6\"/><Column id=\"DELIVERYQTY\" type=\"INT\" size=\"7\"/><Column id=\"RETURNEDQTY\" type=\"INT\" size=\"7\"/><Column id=\"CHANGEQTY\" type=\"INT\" size=\"7\"/><Column id=\"NETSALEQTY\" type=\"INT\" size=\"7\"/><Column id=\"TOTAL_AMOUNT\" type=\"INT\" size=\"13\"/><Column id=\"PRE_AMOUNT\" type=\"INT\" size=\"13\"/><Column id=\"PAYRATE\" type=\"DECIMAL\" size=\"6\"/><Column id=\"YEAR_PAYAMOUNT\" type=\"INT\" size=\"13\"/><Column id=\"DOWN_PAYMENT\" type=\"INT\" size=\"13\"/><Column id=\"MANUSCRIPT_AMOUNT\" type=\"INT\" size=\"13\"/><Column id=\"REAL_PAYAMOUNT\" type=\"INT\" size=\"13\"/><Column id=\"PAYDATE\" type=\"STRING\" size=\"8\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"JOB_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","22","27","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("지급일자");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Sdate","105","27","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("20220701");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Edate","236","27","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("20220729");
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

            obj = new Static("Static00_00_00","369","27","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("출력구분");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_gubun","457","26","223","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_gubun_innerdataset = new nexacro.NormalDataset("rdo_gubun_innerdataset", obj);
            rdo_gubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">도서별집계</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">도서별상세집계</Col></Row></Rows>");
            obj.set_innerdataset(rdo_gubun_innerdataset);
            obj.set_text("도서별집계");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("div_grid","20","65","97.19%","630",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
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
        this.addIncludeScript("ED164F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED164F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("ED164F.xfdl", function() {
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
        		this.getData();
        	}
        };

        //출력
        this.Div00_btn_print_onclick = function(obj,e)
        {
        	if(this.chkValue())
        	{
        		if(this.rdo_gubun.value == "1")
        			rdUrl = gv_urlMrd + "/ed/ED164.mrd";
        		else
        			rdUrl = gv_urlMrd + "/ed/ED164_3.mrd";

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

        //데이터 가져오기
        this.getData = function()
        {
        	var outds, inds, str_url;

        	var strArg = "SDATE="  + nexacro.wrapQuote(this.cal_Sdate.value)
        			   + " EDATE="  + nexacro.wrapQuote(this.cal_Edate.value);

        	switch(this.rdo_gubun.value) {
        	case "1":
        		this.div_grid.set_url("ed::ED164F_GRID1.xfdl");

        	    outds = "ds_list=ds_list";
        		inds = "ds_list=ds_list";
        		str_url = "JSP/ed/ed164f_list.jsp";

        		this.gfn_TransactionP("select1", str_url, inds, outds, strArg, "fnSearchCallback", true, "P", false, this);

        		break;

        	case "2":
        		this.div_grid.set_url("ed::ED164F_GRID2.xfdl");

        		outds = "ds_list2=ds_list2";
        		inds = "ds_list2=ds_list2";
        		str_url = "JSP/ed/ed164f_list2.jsp";

        		this.gfn_TransactionP("select2", str_url, inds, outds, strArg, "fnSearchCallback", true, "P", false, this);

        		break;

        	default:
        	}
        }

        this.fnSearchCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else if((svcId == "select1" && this.ds_list.rowcount < 1) || (svcId == "select2" && this.ds_list2.rowcount < 1))
        		alert("조회된 데이터가 없습니다.");
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.btn_print.addEventHandler("onclick",this.Div00_btn_print_onclick,this);
        };
        this.loadIncludeScript("ED164F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
