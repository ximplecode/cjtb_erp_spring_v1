(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR610F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_usecd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">07</Col><Col id=\"NAME\">병가</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">출산휴가</Col></Row><Row><Col id=\"CODE\">31</Col><Col id=\"NAME\">육아휴직</Col></Row><Row><Col id=\"CODE\">30</Col><Col id=\"NAME\">휴직(일반)</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"NAME\">휴직(기존)</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"NAME\">출산휴가</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hr610", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"TODATE\" type=\"STRING\" size=\"256\"/><Column id=\"FRDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TMSCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","4","5","356","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("장기 근태자 관리");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00","2","52",null,"90","2",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("자료 등록/수정");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 15pt/normal \"normal/normal\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","4","105","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("성명");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","84","105",null,"30","4",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","146","110","7.04%","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search_nm","edt_name:2","110","21","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_icon("url(\'Img::loupe.png\')");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sabun","sta00_01_00:2","110","4.64%","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_text("C17011");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00","btn_Search_nm:3","105","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("부서");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_busenm","sta00_01_00_00:2","110","11.20%","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_text("010-9118-8920");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00_01","edt_busenm:2","105","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("직책");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_jikwi","sta00_01_00_00_00_01:2","110","9%","20",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_text("010-9118-8920");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00","edt_jikwi:2","105","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("근태사유");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_gb","sta00_01_00_00_00:2","110","9.92%","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_usecd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00_00","cb_gb:2","105","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("기간");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_symd","sta00_01_00_00_00_00:2","110","9%","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","cald_symd:2","110","34","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("부터");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_eymd","Static00:2","110","9%","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00_00","2","142","328",null,null,"2",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("자료 검색");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 15pt/normal \"normal/normal\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01","6","200","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("종료년월");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","86","200","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00","6","sta00_01_00_01:0","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("성명");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","86","230","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00","6","260","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("근태사유");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","86","260","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_01","6","290","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("부서");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","86","290","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_01_00_00","6","320","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("퇴사자");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","86","320","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","333","152",null,null,"2","2",null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_binddataset("ds_hr610");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"196\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"부서\"/><Cell col=\"2\" text=\"직책\"/><Cell col=\"3\" text=\"이름\"/><Cell col=\"4\" text=\"시작일\"/><Cell col=\"5\" text=\"종료일\"/><Cell col=\"6\" text=\"근태구분\"/></Band><Band id=\"body\"><Cell text=\"bind:SABUN\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:BUSE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:JIKWI\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:NAME\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:TODATE\" textAlign=\"center\" displaytype=\"date\"/><Cell col=\"5\" text=\"bind:FRDATE\" textAlign=\"center\" displaytype=\"date\"/><Cell col=\"6\" text=\"bind:TMSCD\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"ds_usecd\" combocodecol=\"CODE\" combodatacol=\"NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel","82","170","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("Excel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear","btn_excel:2","170","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","btn_clear:2","170","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_s_ym","90","200","6.08%","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_type("string");
            obj.set_color("black");
            obj.set_format("@@@@-@@");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_s_name","91","235","232","20",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search_buse","300","295","21","20",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_icon("url(\'Img::loupe.png\')");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_s_busenm","163","295","135","20",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_s_busecd","90","295","72","20",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ckb_s_toisadt","94","325","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("퇴사자 포함");
            obj.set_visible("true");
            obj.set_value("false");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_s_gb","91","265","231","20",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_usecd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"75","120","22","264",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"75","120","22","134",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"75","120","22","4",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1250,625,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_sabun","value","ds_hr610","SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_name","value","ds_hr610","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_busenm","value","ds_hr610","BUSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cb_gb","value","ds_hr610","TMSCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cald_symd","value","ds_hr610","TODATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cald_eymd","value","ds_hr610","FRDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_jikwi","value","ds_hr610","JIKWI");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("HR610F.xfdl","Lib::Lib_service.xjs");
        this.registerScript("HR610F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;

        var arr_rt;
        var Sort, SortColumn;
        var urlXeni = nexacro.getApplication().gv_urlXeni;

        this.HR610F_onload = function(obj,e)
        {
        	arr_rt = new Array();
        	sort = "-";
        	sortColumn = "";

        };

        this.btn_search_onclick = function(obj,e)
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/getData_hr610.jsp";
        	in_ds = "ds_hr610=ds_hr610";
        	out_ds = "ds_hr610=ds_hr610";
        	str_arg = " BUSE='" + this.edt_s_busecd.value + "'" +
        			  " NAME='" + this.edt_s_name.value + "'" +
        			  " YM='" + this.medt_s_ym.value + "'" +
        			  " TMSCD='" + this.cb_s_gb.value + "'" +
        			  " TOISAGB='" + this.ckb_s_toisadt.value  + "'";

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

        this.grd_list_onheadclick = function(obj,e)
        {
        	var newSortColumn = this.grd_list.getCellProperty("body",e.col,"text");
        	newSortColumn = newSortColumn.replace("bind:","");
        	if (newSortColumn == SortColumn)
        	{
        		if (Sort == "-")
        		{
        			Sort = "+";
        		}
        		else
        		{
        			Sort = "-";
        		}
        	}
        	else
        	{
        		Sort = "+";
        		SortColumn = newSortColumn;
        	}

        	this.ds_hr610.set_keystring("S:"+Sort+newSortColumn+"+NAME");
        	this.ds_hr610.set_rowposition(0);
        };

        this.btn_new_onclick = function(obj,e)
        {
        	var nRow = this.ds_hr610.addRow();
        	var dt = new Date();
        	this.cald_symd.set_value(dt);
        	this.cald_eymd.set_value(dt);
        	this.ds_hr610.setColumn(nRow,"SEQ","");
        };

        this.btn_Search_nm_onclick = function(obj,e)
        {
        	if (this.ds_hr610.getRowCount() == 0)
        	{
        		return false;
        	}

        	var objNew = new ChildFrame();
        	objNew.init("sInsa",0,0,237,440,null,null,"common::Insa.xfdl");
        	this.addChild("sInsa",objNew);
        	objNew.set_openalign("center middle");
        	objNew.set_showtitlebar(false);
        	objNew.showModal("sInsa",this.getOwnerFrame(),{arr_s:arr_rt},this,this.fn_Callback_insa);
        };

        this.fn_Callback_insa = function(strID, vArgu)
        {
        	if (vArgu == 1)
        	{
        		this.edt_sabun.set_value(arr_rt[0]);
        		this.edt_name.set_value(arr_rt[1]);
        		this.edt_busenm.set_value(arr_rt[3]);
        		this.edt_jikwi.set_value(arr_rt[2]);
        	}

        	this.removeChild("sInsa");

        };

        this.ds_hr610_canrowposchange = function(obj,e)
        {
        	if (Eco.isEmpty(this.edt_sabun.value) == true)
        	{
        		this.alert("대상을 선택하세요");
        		return false;
        	}

        	if (Eco.isEmpty(this.cb_gb.value) == true)
        	{
        		this.alert("근태구분을 선택하세요");
        		return false;
        	}
        };

        this.fn_setData_dml = function()
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/setData_hr610.jsp";
        	in_ds = "ds_hr610=ds_hr610:U";
        	out_ds = "ds_hr610=ds_hr610";
        	str_arg = "";

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_dml", true, "U", false,this);
        }

        this.Callback_dml = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		if (ErrorCode != -99)
        		{
        			this.alert(ErrorMsg);
        		}
        		return false;
        	}

        	this.alert("저장되었습니다.");

        };

        this.btn_delete_onclick = function(obj,e)
        {

        	var objApp = nexacro.getApplication();

        	var confirm_result = objApp.confirm("삭제된 데이터는 복원하실수 없습니다.\n" + this.edt_name.value + "님의 자료를 정말 삭제하게요..?","삭제","warning");

        	if (confirm_result == true)
        	{
        		this.ds_hr610.deleteRow(this.ds_hr610.rowposition);

        		var str_url, in_ds, out_ds, str_arg;
        		str_url = "JSP/hr/setData_hr610.jsp";
        		in_ds = "ds_hr610=ds_hr610:U";
        		out_ds = "ds_hr610=ds_hr610";
        		str_arg = "";

        		this.gfn_TransactionP("delete", str_url, in_ds, out_ds, str_arg, "Callback_none", true, "D", false,this);
        	}
        };

        this.btn_save_onclick = function(obj,e)
        {
        	if (Eco.isEmpty(this.edt_sabun.value) == true)
        	{
        		this.alert("대상을 선택하세요");
        		return false;
        	}

        	if (Eco.isEmpty(this.cb_gb.value) == true)
        	{
        		this.alert("근태구분을 선택하세요");
        		return false;
        	}

        	this.fn_setData_dml();

        };

        this.btn_clear_onclick = function(obj,e)
        {
        	this.medt_s_ym.set_value("");
        	this.edt_s_name.set_value("");
        	this.edt_s_busecd.set_value("");
        	this.edt_s_busenm.set_value("");
        };


        this.btn_excel_onclick = function(obj,e)
        {
        	var permission = this.getPermission_print();

        	if (permission == false)
        	{
        		this.alert("권한이 없습니다.");
        		return false;
        	}

        	var filename;
        	filename = "GridList";
        	this.exportObj = new ExcelExportObject();
        	var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_list , "Sheet1!A1");

        	this.exportObj.set_exporturl(urlXeni);
        	this.exportObj.set_exportfilename(filename);
            this.exportObj.exportData();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.HR610F_onload,this);
            this.btn_Search_nm.addEventHandler("onclick",this.btn_Search_nm_onclick,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.edt_s_name.addEventHandler("onkeydown",this.edt_s_name_onkeydown,this);
            this.btn_Search_buse.addEventHandler("onclick",this.btn_Search_buse_onclick,this);
            this.edt_s_busecd.addEventHandler("onchanged",this.Edit00_00_onchanged,this);
            this.btn_new.addEventHandler("onclick",this.btn_new_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.ds_hr610.addEventHandler("canrowposchange",this.ds_hr610_canrowposchange,this);
        };
        this.loadIncludeScript("HR610F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
