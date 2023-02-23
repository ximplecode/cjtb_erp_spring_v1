(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED18BF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds18BList", this);
            obj.set_keystring("ATHR_NAME");
            obj._setContents("<ColumnInfo><Column id=\"ATHR_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"ATHR_JUMINNO\" type=\"STRING\" size=\"14\"/><Column id=\"CARD_NO\" type=\"STRING\" size=\"12\"/><Column id=\"PAYAMOUNT\" type=\"INT\" size=\"10\"/><Column id=\"DTL_REMARK\" type=\"STRING\" size=\"100\"/><Column id=\"PAYDATE\" type=\"STRING\" size=\"8\"/><Column id=\"PAYRESULT\" type=\"STRING\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSection", this);
            obj._setContents("<ColumnInfo><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"LVL\" type=\"INT\" size=\"1\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"3\"/><Column id=\"SECTION_SHORTNAME\" type=\"STRING\" size=\"10\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"5\"/><Column id=\"BU_GRCODE\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","27","27","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회일자");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Sdate","132","27","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Edate","296","27","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"26","63","30","457",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"26","63","30","385",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("출력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_section","553","26","178","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("dsSection");
            obj.set_codecolumn("SECTION_CODE");
            obj.set_datacolumn("SECTION_NAME");
            obj.set_text("본부합계");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","450","27","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("관련부서");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","274","29","22","29",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","27","74","1233","636",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds18BList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"400\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"주민등록번호\"/><Cell col=\"3\" text=\"관리카드번호\"/><Cell col=\"4\" text=\"지급액\"/><Cell col=\"5\" text=\"작업내용\"/><Cell col=\"6\" text=\"지급일자\"/><Cell col=\"7\" text=\"미지급사유\"/></Band><Band id=\"body\"><Cell text=\"bind:CNT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;edbusetotal&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"bind:ATHR_NAME\" textAlign=\"center\" expr=\"dataset.getRowLevel(currow)==0? ATHR_NAME : dataset.getRowLevel(currow)==1? &quot;소 계&quot; : &quot;&quot;\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;edbusetotal&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:ATHR_JUMINNO\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;edbusetotal&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:CARD_NO\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;edbusetotal&apos;:&apos;&apos;\"/><Cell col=\"4\" text=\"bind:PAYAMOUNT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;edbusetotal&apos;:&apos;&apos;\"/><Cell col=\"5\" text=\"bind:DTL_REMARK\" padding=\"0px 0px 0px 7px\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;edbusetotal&apos;:&apos;&apos;\"/><Cell col=\"6\" text=\"bind:PAYDATE\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;edbusetotal&apos;:&apos;&apos;\"/><Cell col=\"7\" text=\"bind:PAYRESULT\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;edbusetotal&apos;:&apos;&apos;\"/></Band></Format></Formats>");
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
        this.addIncludeScript("ED18BF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED18BF.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("ED18BF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var rdUrl,rdParam,sSelect;
        var sSection_Code = nexacro.getApplication().gds_userinfo.getColumn(0, "BUSECD");

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var gv_urlRdDataServer = nexacro.getApplication().gv_urlRdDataServer;

        this.ED18BF_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", "ed_04_104");
        	sSelect = nexacro.getApplication().gds_menu.getColumn(nRow, "UM_PER_SELECT");
        	sSelect = Eco.decode(sSelect, null, "1", sSelect);

        	//일반 사용자일 경우 부서설정 안됨
        	if(sSelect == "1")
        		this.cb_section.set_value(sSection_Code);

        	this.cb_section.set_enable(sSelect > "1");
        	this.gfn_TransactionP("search","JSP/ed/section_select.jsp", "dsSection=dsSection", "dsSection=dsSection", "", "fnSectionCallback", false, "P", false, this);	//부서
        };

        this.fnCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else if(this.ds18BList.rowcount < 1)
        		alert("조회된 데이터가 없습니다.");
        }

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
        		var inds = "ds18BList=ds18BList";
        		var outds = "ds18BList=ds18BList";
        		var strArg = "SDATE=" + nexacro.wrapQuote(this.cal_Sdate.value)
        				   + " EDATE=" + nexacro.wrapQuote(this.cal_Edate.value)
        				   + " SECTION_CODE=" + nexacro.wrapQuote(this.cb_section.value)
        				   + " COMPETENCE=" + nexacro.wrapQuote(sSelect);

        		this.gfn_TransactionP("select","JSP/ed/ed18Bf_list.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        	}
        };

        //출력
        this.Div00_btn_print_onclick = function(obj,e)
        {
        	if(this.chk_value())
        	{
        		var COMPETENCE = null;

        		if(sSelect < 5)
        			COMPETENCE = 1;

        		rdUrl = gv_urlMrd + "/ed/ED18B.mrd";
        		rdParam  = "/ragentpath ["+ gv_urlRdDataServer +"]" +
        				   " /rp ["+ this.cal_Sdate.value + "]["+ this.cal_Edate.value +"]["+ this.cb_section.text + "][" + COMPETENCE + "]";
        				   " /rsetxlsmrd [" + gv_urlMrd + "/ed/ED18B.mrd]";

        		this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1500, 850);
        	}
        };

        this.ED18BF_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.ED18BF_ontimer = function(obj,e)
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
            this.addEventHandler("onload",this.ED18BF_onload,this);
            this.addEventHandler("onsize",this.ED18BF_onsize,this);
            this.addEventHandler("ontimer",this.ED18BF_ontimer,this);
            this.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.btn_print.addEventHandler("onclick",this.Div00_btn_print_onclick,this);
        };
        this.loadIncludeScript("ED18BF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
