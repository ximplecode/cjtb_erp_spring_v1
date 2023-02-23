(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR704F");
            this.set_titletext("근무시간 예외자 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INTIME\" type=\"STRING\" size=\"256\"/><Column id=\"OUTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ETC\" type=\"STRING\" size=\"256\"/><Column id=\"OVERTIME\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BNAME\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWICD\" type=\"STRING\" size=\"256\"/><Column id=\"JNAME\" type=\"STRING\" size=\"256\"/><Column id=\"IPSADT\" type=\"STRING\" size=\"256\"/><Column id=\"TOISADT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gb", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">전체</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">임신기간 단축</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("F_Dialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTrans", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","4","5","356","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("근무시간 예외자 관리");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00","2","Static02:2",null,"90","2",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("자료 등록/수정");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 15pt/normal \"normal/normal\"");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00_00","2","GroupBox00:2",null,"80","2",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("자료 검색");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 15pt/normal \"normal/normal\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","2","GroupBox00_00:2",null,null,"2","2",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_list");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"141\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"부서\"/><Cell col=\"2\" text=\"직위\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"출근시간\"/><Cell col=\"5\" text=\"퇴근시간\"/><Cell col=\"6\" text=\"입사일\"/><Cell col=\"7\" text=\"퇴사일\"/><Cell col=\"8\" text=\"기타\"/></Band><Band id=\"body\"><Cell text=\"bind:SABUN\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:BNAME\"/><Cell col=\"2\" text=\"bind:JNAME\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:NAME\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:INTIME\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"@@:@@\" maskedittype=\"string\"/><Cell col=\"5\" text=\"bind:OUTTIME\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"@@:@@\" maskedittype=\"string\"/><Cell col=\"6\" text=\"bind:IPSADT\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:TOISADT\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:ETC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_name","4","105","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("성명");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","84","105",null,"30","4",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sabun","sta_name:0","110","4.64%","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_text("C17011");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","edt_sabun:2","110","7.04%","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search_nm","edt_name:2","110","21","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_icon("url(\'Img::loupe.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("sta_buse","btn_Search_nm:2","105","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("부서");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_busenm","sta_buse:2","110","12%","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_text("010-9118-8920");
            this.addChild(obj.name, obj);

            obj = new Static("sta_jikwi","edt_busenm:2","105","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("직위");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_jikwi","sta_jikwi:2","110","6.16%","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_text("010-9118-8920");
            this.addChild(obj.name, obj);

            obj = new Static("sta_intime","edt_jikwi:2","104","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("출근시간");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_intime","sta_intime:2","105","4%","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_type("string");
            obj.set_color("black");
            obj.set_format("@@:@@");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_outtime","medt_intime:2","105","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("출근시간");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_outtime","sta_outtime:2","105","4%","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_type("string");
            obj.set_color("black");
            obj.set_format("@@:@@");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bigo","medt_outtime:2","105","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("기타");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bigo","sta_bigo:2","110",null,"20","6",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_textAlign("left");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_s_name","4","190","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("성명");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","84","190",null,"30","4",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_s_sabun","sta_s_name:0","195","4.64%","20",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_textAlign("center");
            obj.set_readonly("false");
            obj.set_text("C17011");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_s_name","edt_s_sabun:2","195","7.04%","20",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_textAlign("center");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_S_name","edt_s_name:2","195","21","20",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_icon("url(\'Img::loupe.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("sta_busecd","sta_buse:-80","190","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("부서");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_s_busecd","sta_busecd:2","195","6.8%","20",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_s_gb","sta_intime:-78","190","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("근태사유");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_s_busenm","edt_s_busecd:2","195",null,"20","sta_s_gb:26",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_s_buse","edt_s_busenm:2","195","21","20",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_icon("url(\'Img::loupe.png\')");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_gb","sta_s_gb:2","195","139","20",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_gb");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"75","120","22","266",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"75","120","22","136",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"75","120","22","6",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"163","120","22","136",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"163","120","22","6",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ckb_toisadt","cb_gb:20","195","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("퇴사자 포함");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel",null,"162","120","22","266",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("엑셀변환");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1250,625,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_sabun","value","ds_list","SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_name","value","ds_list","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_busenm","value","ds_list","BNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_jikwi","value","ds_list","JNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","medt_intime","value","ds_list","INTIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","medt_outtime","value","ds_list","OUTTIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_bigo","value","ds_list","ETC");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("HR704F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("HR704F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("HR704F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var arr_rt;
        var urlFile = nexacro.getApplication().gv_urlNext;
        var vFileList = new Array();
        var urlXeni = nexacro.getApplication().gv_urlXeni;

        this.HR704F_onload = function(obj,e)
        {
        	arr_rt = new Array();
        	this.fn_getData_list("","","","0");
        };

        this.fn_getData_list = function(sabun, name, busecd, gb)
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/getData_hr704.jsp";
        	in_ds = "ds_list=ds_list";
        	out_ds = "ds_list=ds_list";
        	str_arg = " SABUN='" + sabun + "'"+
        	          " NAME='" + name + "'" +
        			  " BUSECD='" + busecd + "'" +
        			  " GB='" + gb + "'" +
        			  " TOISADT='" + this.lfn_CheckBox_Return(this.ckb_toisadt) + "'";
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_none", true, "S", false,this);
        }

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

        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_getData_list(this.edt_s_sabun.value, this.edt_s_name.value, this.edt_s_busecd.value, this.cb_gb.value);
        };

        this.btn_S_name_onclick = function(obj,e)
        {
        	var objNew = new ChildFrame();
        	objNew.init("sInsa",0,0,237,440,null,null,"common::Insa.xfdl");
        	this.addChild("sInsa",objNew);
        	objNew.set_openalign("center middle");
        	objNew.set_showtitlebar(false);
        	objNew.showModal("sInsa",this.getOwnerFrame(),{arr_s:arr_rt},this,this.fn_Callback_s_insa);
        };

        this.fn_Callback_s_insa = function(strID, vArgu)
        {
        	if (vArgu == 1)
        	{
        		this.edt_s_sabun.set_value(arr_rt[0]);
        		this.edt_s_name.set_value(arr_rt[1]);
        	}

        	this.removeChild("sInsa");

        };

        this.btn_Search_nm_onclick = function(obj,e)
        {
        	if (this.ds_list.getRowCount() == 0)
        	{
        		return false;
        	}

        	if (this.ds_list.getRowType(this.ds_list.rowposition) != 2)
        	{
        		this.alert("저장된 데이터는 대상을 변경 할 수 없습니다.");
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

        this.btn_s_buse_onclick = function(obj,e)
        {
        	var objNew = new ChildFrame();
        		objNew.init("sBuse",0,0,237,440,null,null,"common::Buse.xfdl");
        		this.addChild("sBuse",objNew);
        		objNew.set_openalign("center middle");
        		objNew.set_showtitlebar(false);
        		objNew.showModal("sBuse",this.getOwnerFrame(),{arr_s:arr_rt},this,this.fn_Callback_buse);
        };


        this.fn_Callback_buse = function(strID, vArgu)
        {
        	if (vArgu == 1)
        	{
        		this.edt_s_busecd.set_value(arr_rt[0]);
        		this.edt_s_busenm.set_value(arr_rt[1]);
        	}

        	this.removeChild("sBuse");
        };

        this.btn_new_onclick = function(obj,e)
        {
        	if (this.ds_list.getRowCount() != 0)
        	{

        		if (
        		  Eco.isEmpty(this.ds_list.getColumn(this.ds_list.rowposition,"SABUN")) == true ||
        		  Eco.isEmpty(this.ds_list.getColumn(this.ds_list.rowposition,"INTIME")) == true ||
        		  Eco.isEmpty(this.ds_list.getColumn(this.ds_list.rowposition,"OUTTIME")) == true
        		)
        		{
        			this.alert("현재 작업을 완료 후 신규 추가 해주시기 바랍니다.");
        			return false;
        		}
        	}
        	this.ds_list.addRow();
        };

        this.ds_list_canrowposchange = function(obj,e)
        {
        	if (e.oldrow > 0)
        	{
        		if (
        		  Eco.isEmpty(this.ds_list.getColumn(e.oldrow,"SABUN")) == true ||
        		  Eco.isEmpty(this.ds_list.getColumn(e.oldrow,"INTIME")) == true ||
        		  Eco.isEmpty(this.ds_list.getColumn(e.oldrow,"OUTTIME")) == true
        		)
        		{
        			this.alert("현재 작업을 완료 후 신규 추가 해주시기 바랍니다.");
        			return false;
        		}
        	}
        };

        this.btn_delete_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();

        	var confirm_result = objApp.confirm("삭제된 데이터는 복원하실수 없습니다.\n" + this.edt_name.value + "님의 자료를 정말 삭제하게요..?","삭제","warning");

        	if (confirm_result == true)
        	{
        		if (this.ds_list.getRowType(this.ds_list.rowposition) == 2)
        		{
        			this.ds_list.setColumn(this.ds_list.rowposition,"SABUN","");
        		}

        		this.ds_list.deleteRow(this.ds_list.rowposition);
        		var str_url, in_ds, out_ds, str_arg;
        	    str_url = "JSP/hr/setData_hr704.jsp";
        	    in_ds = "ds_list=ds_list:U";
        	    out_ds = "ds_list=ds_list";
        	    str_arg = "";
        	    this.gfn_TransactionP("dml", str_url, in_ds, out_ds, str_arg, "Callback_dml", true, "D", false,this);
        	}
        };

        this.btn_save_onclick = function(obj,e)
        {
        	if (Eco.isEmpty(this.ds_list.getColumn(this.ds_list.rowposition,"SABUN")) == true)
        	{
        		this.alert("대상자를 선택해 주세요");
        		return false;
        	}

        	if (Eco.isEmpty(this.ds_list.getColumn(this.ds_list.rowposition,"INTIME")) == true)
        	{
        		this.alert("출근시간 입력해주세요");
        		return false;
        	}

        	if (Eco.isEmpty(this.ds_list.getColumn(this.ds_list.rowposition,"OUTTIME")) == true)
        	{
        		this.alert("퇴근시간 입력해주세요");
        		return false;
        	}

        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/setData_hr704.jsp";
        	in_ds = "ds_list=ds_list:U";
        	out_ds = "ds_list=ds_list";
        	str_arg = " WSABUN='" + nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN") + "'";
        	this.gfn_TransactionP("dml", str_url, in_ds, out_ds, str_arg, "Callback_dml", true, "U", false,this);
        };

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

        	this.alert("처리되었습니다.");
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
            this.addEventHandler("onload",this.HR704F_onload,this);
            this.btn_Search_nm.addEventHandler("onclick",this.btn_Search_nm_onclick,this);
            this.btn_S_name.addEventHandler("onclick",this.btn_S_name_onclick,this);
            this.edt_s_busecd.addEventHandler("onchanged",this.Edit00_00_onchanged,this);
            this.btn_s_buse.addEventHandler("onclick",this.btn_s_buse_onclick,this);
            this.btn_new.addEventHandler("onclick",this.btn_new_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.ds_list.addEventHandler("canrowposchange",this.ds_list_canrowposchange,this);
            this.FileDownTrans.addEventHandler("onsuccess",this.fileDownTrans_onsuccess,this);
            this.F_Dialog.addEventHandler("onclose",this.F_Dialog_onclose,this);
            this.FileUpTrans.addEventHandler("onsuccess",this.FileUpTrans_onsuccess,this);
            this.FileUpTrans.addEventHandler("onerror",this.FileUpTrans_onerror,this);
        };
        this.loadIncludeScript("HR704F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
