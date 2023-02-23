(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR123F");
            this.set_titletext("증명서 승인/발급");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_hr123_01", this);
            obj._setContents("<ColumnInfo><Column id=\"CK\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"BUSENM\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWINM\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_DATETIME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"USE_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"COMPLETE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"COMPLETE_DATETIME\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"PRT_BTN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hr123_03", this);
            obj._setContents("<ColumnInfo><Column id=\"BALNO\" type=\"STRING\" size=\"256\"/><Column id=\"JMGB\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"SIN\" type=\"STRING\" size=\"256\"/><Column id=\"YMD\" type=\"STRING\" size=\"256\"/><Column id=\"YONGDO\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PRT_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_type", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">재직증명서</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">경력증명서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_purpose", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">은행제출용</Col><Col id=\"CODE\">01</Col></Row><Row><Col id=\"NAME\">비자발급용</Col><Col id=\"CODE\">02</Col></Row><Row><Col id=\"NAME\">학교제출용</Col><Col id=\"CODE\">03</Col></Row><Row><Col id=\"NAME\">회사제출용</Col><Col id=\"CODE\">04</Col></Row><Row><Col id=\"NAME\">보험사제출용</Col><Col id=\"CODE\">05</Col></Row><Row><Col id=\"NAME\">카드발급용</Col><Col id=\"CODE\">06</Col></Row><Row><Col id=\"NAME\">관공서제출용</Col><Col id=\"CODE\">07</Col></Row><Row><Col id=\"NAME\">금융사제출용</Col><Col id=\"CODE\">08</Col></Row><Row><Col id=\"NAME\">EBS제출용</Col><Col id=\"CODE\">09</Col></Row><Row><Col id=\"NAME\">교육인적자원부제출용</Col><Col id=\"CODE\">10</Col></Row><Row><Col id=\"NAME\">기타</Col><Col id=\"CODE\">99</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new GroupBox("GroupBox00","2","52",null,"36%","2",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("증명서 승인");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 15pt/normal \"normal/normal\"");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox01","2","GroupBox00:13",null,null,"2","2",null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("증명서 발급");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 15pt/normal \"normal/normal\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","4","5","356","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("증명서 승인/발급");
            obj.set_color("#7fb39d");
            obj.set_font("bold 20px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","102","GroupBox00:60",null,"30","4",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","102","Static01_00:0",null,"30","4",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#9ee0de");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list2","4","Static01_00_00:0",null,null,"4","4",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_hr123_03");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"155\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"141\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"발급번호\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직위\"/><Cell col=\"5\" text=\"신청구분\"/><Cell col=\"6\" text=\"용도\"/><Cell col=\"7\" text=\"발급수량\"/><Cell col=\"8\" text=\"발급일자\"/><Cell col=\"9\"/></Band><Band id=\"body\"><Cell text=\"bind:BALNO\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:SABUN\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:SIN\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:BUSE\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:JIKWI\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:JMGB\" displaytype=\"combotext\" combodataset=\"ds_type\" combodatacol=\"NAME\" combocodecol=\"CODE\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:YONGDO\" combodataset=\"ds_purpose\" combocodecol=\"NAME\" combodatacol=\"NAME\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:QTY\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:YMD\" textAlign=\"center\" displaytype=\"date\"/><Cell col=\"9\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"출력\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_approval",null,"70","120","22","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01","4","GroupBox00:60","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("발급일자");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cald_bymd","sta00_01:2","GroupBox00:66","10.96%","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","cald_bymd:2","GroupBox00:60","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("발급번호");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_no","sta00_01_00:2","GroupBox00:66","10.56%","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_color("white");
            obj.set_text("010-9118-8920");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00","edt_no:0","GroupBox00:60","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("신청인");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sabun","sta00_01_00_00:2","GroupBox00:66","5.60%","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("white");
            obj.set_text("010-9118-8920");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","edt_sabun:0","GroupBox00:66","10.56%","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("white");
            obj.set_text("010-9118-8920");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search_insa","edt_name:0","GroupBox00:65","21","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_icon("url(\'Img::loupe.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00","edt_name:23","GroupBox00:60","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("부서");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_busenm","sta00_01_00_00_00:2","GroupBox00:66","10.56%","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("white");
            obj.set_text("010-9118-8920");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00_00","edt_busenm:0","GroupBox00:60","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("직위");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_jikwinm","sta00_01_00_00_00_00:0","GroupBox00:66",null,"20","3",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("white");
            obj.set_text("010-9118-8920");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01","4","sta00_01:0","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("증명구분");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_type","sta00_01_01:2","Static01_00:6","10.96%","20",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_type");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_type("filterlike");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_enable("true");
            obj.set_color("white");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01","cb_type:2","GroupBox00:90","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("용도");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_purpose","sta00_01_00_01:2","Static01_00:6","10.56%","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_border("0px none transparent,0px none,0px none");
            obj.set_background("transparent");
            obj.set_innerdataset("ds_purpose");
            obj.set_codecolumn("NAME");
            obj.set_datacolumn("NAME");
            obj.set_type("filterlike");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_enable("true");
            obj.set_color("white");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_01","cb_purpose:0","sta00_01_00_00:0","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("발급수량");
            obj.set_background("#3cbcb8");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_border("1px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Spin("sp_qty","sta00_01_00_00_01:2","Static01_00:2","111","25",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_background("transparent");
            obj.set_color("white");
            obj.set_font("normal 800 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"GroupBox00:30","120","22","10",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"GroupBox00:30","120","22","140",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"GroupBox00:30","120","22","270",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list1","4","98",null,"27.52%","4",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_binddataset("ds_hr123_01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"44\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"118\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"103\"/><Column size=\"80\"/><Column size=\"68\"/><Column size=\"91\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직위\"/><Cell col=\"5\" text=\"연락처\"/><Cell col=\"6\" text=\"신청구분\"/><Cell col=\"7\" text=\"용도\"/><Cell col=\"8\" text=\"발급수량\"/><Cell col=\"9\" text=\"신청일자\"/></Band><Band id=\"body\"><Cell text=\"bind:CHECK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"bind:SABUN\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:NAME\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:BUSENM\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:JIKWINM\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:PHONE_NUMBER\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:REQUEST_GUBUN\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"ds_type\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"7\" text=\"bind:USE_GUBUN\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"ds_purpose\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"8\" text=\"bind:REQUEST_QTY\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:REQUEST_DATETIME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1250,625,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cald_bymd","value","ds_hr123_03","YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_no","value","ds_hr123_03","BALNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_sabun","value","ds_hr123_03","SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_name","value","ds_hr123_03","SIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_busenm","value","ds_hr123_03","BUSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_jikwinm","value","ds_hr123_03","JIKWI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cb_type","value","ds_hr123_03","JMGB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cb_purpose","value","ds_hr123_03","YONGDO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","sp_qty","value","ds_hr123_03","QTY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("HR123F.xfdl","Lib::Lib_service.xjs");
        this.registerScript("HR123F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;

        var arr_rt;
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");

        this.HR123F_onload = function(obj,e)
        {
        	arr_rt = new Array();

        	this.getData_all();
        };

        this.getData_all = function()
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/getData_hr123_all.jsp";
        	in_ds = "ds_hr123_01=ds_hr123_01 ds_hr123_03=ds_hr123_03";
        	out_ds = "ds_hr123_01=ds_hr123_01 ds_hr123_03=ds_hr123_03";
        	str_arg = "strGUBUN='1'";

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_01", true, "S", false,this);
        }

        this.getData_list1 = function()
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/getData_hr123_01.jsp";
        	in_ds = "ds_hr123_01=ds_hr123_01";
        	out_ds = "ds_hr123_01=ds_hr123_01";
        	str_arg = "strGUBUN='1'";

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

        this.grd_list1_onheadclick = function(obj,e)
        {
        	var i;
        	if (e.col == 0)
        	{
        		var nVal = this.grd_list1.getCellProperty("head","0","text");
        		if (nVal == "0")
        		{
        			nVal = "1";
        		}
        		else
        		{
        			nVal = "0";
        		}

        		this.grd_list1.setCellProperty("head","0","text",nVal);
        		for (i = 0; i < this.ds_hr123_01.getRowCount(); i ++)
        		{
        			this.ds_hr123_01.setColumn(i,"CK",nVal);
        		}
        	}
        };


        this.btn_approval_onclick = function(obj,e)
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/setData_hr123_01.jsp";
        	in_ds = "ds_hr123_01=ds_hr123_01:U";
        	out_ds = "ds_hr123_01=ds_hr123_01";
        	str_arg = "UPDATE_ID='"+ nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN") +"'";

        	this.gfn_TransactionP("approval", str_url, in_ds, out_ds, str_arg, "Callback_approval", true, "U", false,this);
        };

        this.Callback_approval = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		if (ErrorCode != -99)
        		{
        			this.alert(ErrorMsg);
        		}
        		return false;
        	}

        	this.getData_list1();
        }

        this.getData_list2 = function()
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/getData_hr123_03.jsp";
        	in_ds = "ds_hr123_03=ds_hr123_03";
        	out_ds = "ds_hr123_03=ds_hr123_03";
        	str_arg = "";

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_none", true, "S", false,this);
        }

        this.btn_new_onclick = function(obj,e)
        {
        	var dt = new Date;
        	var nRow = this.ds_hr123_03.addRow();

        	this.ds_hr123_03.setColumn(nRow,"YMD",dt);
        	this.ds_hr123_03.setColumn(nRow,"QTY",1);
        	this.ds_hr123_03.setColumn(nRow,"PRT","N");
        };

        this.btn_search_insa_onclick = function(obj,e)
        {
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
        		this.edt_jikwinm.set_value(arr_rt[4]);
        	}
        	this.removeChild("sInsa");

        };

        this.btn_save_onclick = function(obj,e)
        {
        	if (Eco.isEmpty(this.edt_sabun.value) == true)
        	{
        		this.alert("신청인을 선택하세요..!!");
        		return false;
        	}

        	if (Eco.isEmpty(this.cb_type.value) == true)
        	{
        		this.alert("증명구분을 선택하세요..!!");
        		return false;
        	}

        	if (Eco.isEmpty(this.cb_purpose.value) == true)
        	{
        		this.alert("용도를 선택하세요..!!");
        		return false;
        	}

        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/setData_hr123_dml.jsp";
        	in_ds = "ds_hr123_03=ds_hr123_03:U";
        	out_ds = "ds_hr123_03=ds_hr123_03";
        	str_arg = "UPDATE_ID='" + nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN") +"'";;

        	this.gfn_TransactionP("delete", str_url, in_ds, out_ds, str_arg, "Callback_dml", true, "U", false,this);
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

        	this.getData_list1();
        }

        this.btn_del_onclick = function(obj,e)
        {
        	var confirm_result = objApp.confirm("삭제된 데이터는 복원하실수 없습니다.\n" + this.edt_no.value + " 자료를 정말 삭제하게요..?","삭제","warning");

        	this.ds_hr123_03.deleteRow(this.ds_hr123_03.rowposition);

        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/setData_hr123_dml.jsp";
        	in_ds = "ds_hr123_03=ds_hr123_03:U";
        	out_ds = "ds_hr123_03=ds_hr123_03";
        	str_arg = "UPDATE_ID='" + nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN") +"'";;

        	this.gfn_TransactionP("delete", str_url, in_ds, out_ds, str_arg, "Callback_none", true, "D", false,this);
        };

        this.grd_list2_oncellclick = function(obj,e)
        {
        	if (e.col == 9)
        	{
        		var permission = this.getPermission_print();

        		if (permission == false)
        		{
        			this.alert("권한이 없습니다.");
        			return false;
        		}

        		if (this.cb_type.value == "1")
        		{
        			this.fn_prt1();
        		}
        		else
        		{
        			this.fn_prt2();
        		}

        		this.ds_hr123_03.setColumn(e.row,"PRT","Y");
        		var str_url, in_ds, out_ds, str_arg;
        		str_url = "JSP/hr/setData_hr123_dml.jsp";
        		in_ds = "ds_hr123_03=ds_hr123_03:U";
        		out_ds = "ds_hr123_03=ds_hr123_03";
        		str_arg = "UPDATE_ID='" + nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN") +"'";
        		//str_arg = "UPDATE_ID='C17011'";


        		this.gfn_TransactionP("update", str_url, in_ds, out_ds, str_arg, "Callback_none", true, "P", false,this);
        	}
        };

        this.fn_prt1 = function()
        {
        	var rDate = this.cald_bymd.value;
        	var rdUrl;
        	var rdParam = "/rp ["+this.edt_no.value+"]";

        	// 2018년 이후 발급분에 대해서만 최정민 신임 회장님이 대표이사
        	if (rDate <= "20171231") rdUrl = gv_svcUrl+"rpt/hr/HR124P_01.mrd";
        	else if (rDate < "20210901") rdUrl = gv_svcUrl+"rpt/hr/HR124P_01_2018.mrd";
        	else rdUrl = gv_svcUrl+"rpt/hr/HR124P_01_2021.mrd";

        	var objNew = new ChildFrame();
        	objNew.init("common_print",0,0,null,null,100,100,"common::H_MRD.xfdl");
        	this.addChild("common_print",objNew);
        	//objNew.set_openalign("center middle");
        	objNew.set_autosize(false);
        	objNew.set_titletext("재직증명서");
        	objNew.set_showtitlebar(true);
        	objNew.set_resizable(true);
        	objNew.showModal("common_print",this.getOwnerFrame(),{rdUrl:rdUrl, rdParam:rdParam},this,this.fn_common_print);
        }

        this.fn_common_print = function(strID, variant)
        {
        	this.removeChild("common_print");
        };

        this.fn_prt2 = function()
        {
        	var rDate = this.cald_bymd.value;
        	var rdUrl = "";
        	var rdParam = "/rp ["+this.edt_no.value+"]";

        	// 2018년 이후 발급분에 대해서만 최정민 신임 회장님이 대표이사
        	if (rDate <= '20171231') rdUrl = gv_svcUrl+"rpt/hr/HR124P_02.mrd";
        	else if (rDate < '20210901') rdUrl = gv_svcUrl+"rpt/hr/HR124P_02_2018.mrd";
        	else rdUrl = gv_svcUrl+"rpt/hr/HR124P_02_2021.mrd";

        	var objNew = new ChildFrame();
        	objNew.init("common_print",0,0,null,null,100,100,"common::H_MRD.xfdl");
        	this.addChild("common_print",objNew);
        	//objNew.set_openalign("center middle");
        	objNew.set_autosize(false);
        	objNew.set_titletext("경력증명서");
        	objNew.set_showtitlebar(true);
        	objNew.set_resizable(true);
        	objNew.showModal("common_print",this.getOwnerFrame(),{rdUrl:rdUrl, rdParam:rdParam},this,this.fn_common_print);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.HR123F_onload,this);
            this.grd_list2.addEventHandler("oncellclick",this.grd_list2_oncellclick,this);
            this.btn_approval.addEventHandler("onclick",this.btn_approval_onclick,this);
            this.btn_search_insa.addEventHandler("onclick",this.btn_search_insa_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_new.addEventHandler("onclick",this.btn_new_onclick,this);
            this.grd_list1.addEventHandler("onheadclick",this.grd_list1_onheadclick,this);
        };
        this.loadIncludeScript("HR123F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
