(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR601F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_paygb", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">야근비대상자</Col></Row><Row><Col id=\"CODE\">K</Col><Col id=\"NAME\">교통비대상자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gb", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0001</Col><Col id=\"NAME\">편집부</Col></Row><Row><Col id=\"CODE\">0002</Col><Col id=\"NAME\">업무국</Col></Row><Row><Col id=\"CODE\">0003</Col><Col id=\"NAME\">관리부</Col></Row><Row><Col id=\"CODE\">0004</Col><Col id=\"NAME\">영업부</Col></Row><Row><Col id=\"CODE\">4001</Col><Col id=\"NAME\">천재미디어</Col></Row><Row><Col id=\"CODE\">5001</Col><Col id=\"NAME\">해법에듀</Col></Row><Row><Col id=\"CODE\">9990</Col><Col id=\"NAME\">외부상주직원</Col></Row><Row><Col id=\"CODE\">9999</Col><Col id=\"NAME\">임시_접대용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CARDNO\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CREDATE\" type=\"STRING\" size=\"256\"/><Column id=\"IPSADT\" type=\"STRING\" size=\"256\"/><Column id=\"TOISADT\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cardno", this);
            obj._setContents("<ColumnInfo><Column id=\"CARDNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new GroupBox("GroupBox00_00","2","142","328",null,null,"2",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("자료 검색");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 15pt/normal \"normal/normal\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","85","325","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","85","295","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","85","265","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","85","235","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","4","5","356","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("근태 사용자 관리");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00","2","Static02:2",null,"90","2",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("자료 등록/수정");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 15pt/normal \"normal/normal\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","GroupBox00_00:2","153",null,null,"2","2",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"151\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"112\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"카드번호\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"직위\"/><Cell col=\"4\" text=\"이름\"/><Cell col=\"5\" text=\"업무구분\"/><Cell col=\"6\" text=\"입사일\"/><Cell col=\"7\" text=\"퇴사일\"/><Cell col=\"8\" text=\"등록일\"/><Cell col=\"9\" text=\"대상구분\"/></Band><Band id=\"body\"><Cell text=\"bind:CARDNO\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:SABUN\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:BUSE\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:JIKWI\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:NAME\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:CODE\" displaytype=\"combotext\" combodataset=\"ds_gb\" combocodecol=\"CODE\" combodatacol=\"NAME\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:IPSADT\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:TOISADT\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:CREDATE\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:BIGO\" displaytype=\"combotext\" combodataset=\"ds_paygb\" combocodecol=\"CODE\" combodatacol=\"NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01","4","100","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("카드번호");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","sta00_01:0","100",null,"30","4",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_cardno","sta00_01:1","100","5.2%","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_type("string");
            obj.set_color("black");
            obj.set_format("@@@@@@@@");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","medt_cardno:10","100","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("성명");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sabun","sta00_01_00:2","105","4.64%","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_text("C17011");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","edt_sabun:2","105","7.04%","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search_nm","edt_name:2","105","21","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_icon("url(\'Img::loupe.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00","btn_Search_nm:5","100","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("부서");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_busenm","sta00_01_00_00:2","105","11.2%","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_text("010-9118-8920");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00","edt_busenm:2","100","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("업무구분");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_gb","sta00_01_00_00_00:2","105","9.92%","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_gb");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00_00","cb_gb:2","100","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("등록일");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_ymd","sta00_01_00_00_00_00:2","105","8.4%","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00_00_00","cald_ymd:0","100","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("야근/교통비");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_paygb","sta00_01_00_00_00_00_00:0","105","9.92%","20",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_paygb");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"69","120","22","264",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"69","120","22","134",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"69","120","22","4",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01","5","GroupBox00:63","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("카드번호");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","85","GroupBox00:63","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_s_cardno","85","206","65","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_type("string");
            obj.set_color("black");
            obj.set_format("@@@@@@@@");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00","5","sta00_01_01:0","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("성명");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_s_name","87","240","232","20",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_01","5","265","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("부서");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_s_busecd","88","270","72","20",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_s_busenm","edt_s_busecd:1","270","135","20",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search_buse","edt_s_busenm:2","270","21","20",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_icon("url(\'Img::loupe.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_01_00","5","295","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("업무구분");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_s_gb","88","300","231","20",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_gb");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ckb_s_toisadt","90","330","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("퇴사자 포함");
            obj.set_visible("true");
            obj.set_value("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear","83","178","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","205","178","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_01_00_00","5","325","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("퇴사자");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1250,625,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","medt_cardno","value","ds_list","CARDNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_sabun","value","ds_list","SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_name","value","ds_list","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_busenm","value","ds_list","BUSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cb_gb","value","ds_list","CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cald_ymd","value","ds_list","CREDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cb_paygb","value","ds_list","BIGO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("HR601F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("HR601F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("HR601F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var arr_rt;



        this.btn_search_onclick = function(obj,e)
        {
        	this.getData_list();
        };

        this.getData_list = function()
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/getData_hr601.jsp";
        	in_ds = "ds_list=ds_list";
        	out_ds = "ds_list=ds_list";
        	str_arg = " CARDNO='" + this.medt_s_cardno.value + "'" +
        			  " NAME='" + this.edt_s_name.value + "'" +
        			  " GB='" + this.cb_s_gb.value + "'" +
        			  " BUSECD='" + this.edt_s_busecd.value + "'" +
        			  " TOISAGB='" + this.lfn_CheckBox_Return_var(this.ckb_s_toisadt,"Y","N")  + "'";

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

        this.HR601F_onload = function(obj,e)
        {
        	arr_rt = new Array();
        };

        this.btn_Search_nm_onclick = function(obj,e)
        {
        	if (this.ds_list.getRowCount() == 0)
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
        	}

        	this.removeChild("sInsa");

        };

        this.btn_Search_buse_onclick = function(obj,e)
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

        this.btn_clear_onclick = function(obj,e)
        {
        	this.medt_s_cardno.set_value("");
        	this.edt_s_name.set_value("");
        	this.edt_s_busecd.set_value("");
        	this.edt_s_busenm.set_value("");
        	this.cb_s_gb.set_value("");

        };

        this.btn_new_onclick = function(obj,e)
        {
        	if (this.ds_list.getRowCount() != 0)
        	{

        		if ( Eco.isEmpty(this.ds_list.getColumn(this.ds_list.rowposition,"CARDNO")) == true )
        		{
        			this.alert("현재 작업을 완료 후 신규 추가 해주시기 바랍니다.");
        			return false;
        		}
        	}
        	this.ds_list.addRow();
        };

        this.btn_save_onclick = function(obj,e)
        {
        	if ( Eco.isEmpty(this.medt_cardno.value) == true)
        	{
        		this.alert("카드번호를 입력하세요");
        		//return false;
        	}

        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/getData_hr601_chk.jsp";
        	in_ds = "ds_cardno=ds_cardno:U";
        	out_ds = "ds_cardno=ds_cardno";
        	str_arg = "";
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_chk", true, "U", false,this);
        };

        this.Callback_chk = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		if (ErrorCode != -99)
        		{
        			this.alert(ErrorMsg);
        		}
        		return false;
        	}

        	if (this.ds_cardno.getRowCount() > 0)
        	{
        		this.alert("사용중인 카드번호입니다.");
        		return false;
        	}

        	this.setData_dml();
        }

        this.setData_dml = function()
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/setData_hr601.jsp";
        	in_ds = "ds_list=ds_list";
        	out_ds = "ds_list=ds_list";
        	str_arg = "";
        	this.gfn_TransactionP("dml", str_url, in_ds, out_ds, str_arg, "Callback_dml", true, "P", false,this);
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

        	this.alert("처리되었습니다.");
        }


        this.ds_list_canrowposchange = function(obj,e)
        {
        	if (e.oldrow > 0)
        	{
        		if ( Eco.isEmpty( this.ds_list.getColumn(e.oldrow,"CARDNO") ) == true)
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
        		this.ds_list.deleteRow(this.ds_list.rowposition);
        		var str_url, in_ds, out_ds, str_arg;
        	    str_url = "JSP/hr/setData_hr601.jsp";
        	    in_ds = "ds_list=ds_list:U";
        	    out_ds = "ds_list=ds_list";
        	    str_arg = "";
        	    this.gfn_TransactionP("dml", str_url, in_ds, out_ds, str_arg, "Callback_dml", true, "D", false,this);
        	}
        };

        this.edt_s_name_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13)
        	{
        		this.getData_list();
        	}
        };


        this.btnTest_onclick = function(obj,e) {
        	this.WebBrowser.set_url("http://naver.com");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.HR601F_onload,this);
            this.btn_Search_nm.addEventHandler("onclick",this.btn_Search_nm_onclick,this);
            this.btn_new.addEventHandler("onclick",this.btn_new_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.medt_s_cardno.addEventHandler("onkeydown",this.edt_s_name_onkeydown,this);
            this.edt_s_name.addEventHandler("onkeydown",this.edt_s_name_onkeydown,this);
            this.edt_s_busecd.addEventHandler("onchanged",this.Edit00_00_onchanged,this);
            this.btn_Search_buse.addEventHandler("onclick",this.btn_Search_buse_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.ds_list.addEventHandler("canrowposchange",this.ds_list_canrowposchange,this);
        };
        this.loadIncludeScript("HR601F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
