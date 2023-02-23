(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED158F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_1", this);
            obj._setContents("<ColumnInfo><Column id=\"NOW_CD\" type=\"STRING\" size=\"2\"/><Column id=\"NAME\" type=\"STRING\" size=\"100\"/><Column id=\"MONTH_AMT\" type=\"INT\" size=\"256\"/><Column id=\"THIS_AMT\" type=\"INT\" size=\"256\"/><Column id=\"POST_AMT\" type=\"INT\" size=\"256\"/><Column id=\"POST_THIS_AMT\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_2", this);
            obj.set_keystring("BU_GRCODE");
            obj._setContents("<ColumnInfo><Column id=\"BU_GRCODE\" type=\"STRING\" size=\"256\"/><Column id=\"NOW_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH_AMT\" type=\"INT\" size=\"256\"/><Column id=\"THIS_AMT\" type=\"INT\" size=\"256\"/><Column id=\"POST_AMT\" type=\"INT\" size=\"256\"/><Column id=\"POST_THIS_AMT\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_3", this);
            obj.set_keystring("BU_GRCODE, NAME");
            obj._setContents("<ColumnInfo><Column id=\"BU_GRCODE\" type=\"STRING\" size=\"256\"/><Column id=\"NOW_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH_AMT\" type=\"INT\" size=\"256\"/><Column id=\"THIS_AMT\" type=\"INT\" size=\"256\"/><Column id=\"POST_AMT\" type=\"INT\" size=\"256\"/><Column id=\"BOOK_NO\" type=\"STRING\" size=\"256\"/><Column id=\"POST_THIS_AMT\" type=\"INT\" size=\"256\"/><Column id=\"BOOK_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","23","27","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("지급일자(기준년도)");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Sdate","156","27","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Edate","433","28","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","300","28","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("지급일자(과거년도)");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"28","63","30","115",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"28","63","30","43",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("출력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_gubun","666","27","129","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_gubun_innerdataset = new nexacro.NormalDataset("rdo_gubun_innerdataset", obj);
            rdo_gubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">개인</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">업체</Col></Row></Rows>");
            obj.set_innerdataset(rdo_gubun_innerdataset);
            obj.set_text("개인");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","580","27","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("구분");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","800","28","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("출력물");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_kind","873","27","178","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cb_kind_innerdataset = new nexacro.NormalDataset("cb_kind_innerdataset", obj);
            cb_kind_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">본부합계</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">부서합계</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">도서별합계</Col></Row></Rows>");
            obj.set_innerdataset(cb_kind_innerdataset);
            obj.set_text("본부합계");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("div_grid","26","72","97.19%","630",null,null,null,null,null,null,this);
            obj.set_taborder("10");
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
        this.addIncludeScript("ED158F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED158F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("ED158F.xfdl", function() {
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
        			rdUrl = gv_urlMrd + "/ed/ED158A_1.mrd";
        		else
        			rdUrl = gv_urlMrd + "/ed/ED158B_1.mrd";

        		var d = new Date();
        		var today = Eco.date.getMaskFormatString(d, "yyyy-MM-dd");

        		var now_sDate = this.cal_Sdate.value.substr(0,4) + "0101";
        		var post_sDate = this.cal_Edate.value.substr(0,4) + "0101";

        		rdParam  = "/ragentpath ["+ gv_urlRdDataServer +"]" +
        				   " /rp ["+ this.cal_Sdate.value + "]["+ now_sDate +"]["+ post_sDate +"]["+ this.cal_Edate.value +"]["+ today +"]";

        		this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1500, 850);
        	}
        };

        //입력값 확인
        this.chkValue = function()
        {
        	if(this.cal_Sdate.value == null)
        	{
        		alert("지급일자(기준년도)를 입력해주세요.");
        		this.cal_Sdate.dropdown();
        		return false;
        	}

        	if(this.cal_Edate.value == null)
        	{
        		alert("지급일자(과거년도)를 입력해주세요.");
        		this.cal_Edate.dropdown();
        		return false;
        	}

        	if(this.cal_Sdate.value.substr(0,4) < "2017")
        	{
        		alert("2017년도(기준년도) 이전 데이터는 조회할 수 없습니다.");
        		return false;
        	}

        	if(this.cal_Edate.value.substr(0,4) < "2017")
        	{
        		alert("2016년도(과거년도) 이전 데이터는 조회할 수 없습니다.");
        		return false;
        	}

        	return true;
        }

        //데이터 가져오기
        this.getData = function()
        {
        	var now_sDate = this.cal_Sdate.value.substr(0,4) + "0101";
        	var post_sDate = this.cal_Edate.value.substr(0,4) + "0101";

        	var outds, inds;

        	var strArg = "now_eDate="  + nexacro.wrapQuote(this.cal_Sdate.value)
        			   + " now_sDate="  + nexacro.wrapQuote(now_sDate)
        			   + " post_sDate=" + nexacro.wrapQuote(post_sDate)
        			   + " post_eDate=" + nexacro.wrapQuote(this.cal_Edate.value);

        	switch(this.cb_kind.value) {
        	case "0":
        		this.div_grid.set_url("ed::ED158F_GRID1.xfdl");

        	    outds = "ds_1=ds_1";
        		inds = "ds_1=ds_1";

        		if(this.rdo_gubun.value == "1")
        			strArg += " kind=" + nexacro.wrapQuote("P1");
        		else
        			strArg += " kind=" + nexacro.wrapQuote("C1");
        		break;

        	case "1":
        		this.div_grid.set_url("ed::ED158F_GRID2.xfdl");

        		outds = "ds_2=ds_2";
        		inds = "ds_2=ds_2";

        		if(this.rdo_gubun.value == "1")
        			strArg += " kind=P2";
        		else
        			strArg += " kind=C2";
        		break;

        	case "2":
        		this.div_grid.set_url("ed::ED158F_GRID3.xfdl");

        		outds = "ds_3=ds_3";
        		inds = "ds_3=ds_3";

        		if(this.rdo_gubun.value == "1")
        			strArg += " kind=P3";
        		else
        			strArg += " kind=C3";
        		break;

        	default:
        	}
        	this.gfn_TransactionP("dsC1_select","JSP/ed/ED158F_RPT_SELECT.jsp", inds, outds, strArg, "fnSearchCallback", true, "P", false, this);
        }

        this.fnSearchCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else if(this.ds_list.rowcount < 1)
        		alert("조회된 데이터가 없습니다.");
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.btn_print.addEventHandler("onclick",this.Div00_btn_print_onclick,this);
        };
        this.loadIncludeScript("ED158F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
