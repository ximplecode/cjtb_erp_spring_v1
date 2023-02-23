(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TestForm_CJTB");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,790);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("test", this);
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTH_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"searchType\" type=\"STRING\" size=\"256\"/><Column id=\"keyword\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("outDs", this);
            obj._setContents("<ColumnInfo><Column id=\"GB\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWICD\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JIKGUN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKMU_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Ds", this);
            obj._setContents("<ColumnInfo><Column id=\"SYSDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("sys", this);
            obj._setContents("<ColumnInfo><Column id=\"test\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("BTN_SEARCH","238","93","90","37",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","30","142","300","343",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("test");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"SABUN\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"BIRTH_DT\"/></Band><Band id=\"body\"><Cell text=\"bind:SABUN\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:BIRTH_DT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","30","100","86","27",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">SABUN</Col><Col id=\"datacolumn\">sabun</Col></Row><Row><Col id=\"datacolumn\">name</Col><Col id=\"codecolumn\">NAME</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","126","100","98","29",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("BTN_DELETE","256","650","145","37",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("BTN_UPDATE","256","604","145","37",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("BTN_INSERT","256","557","145","37",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","427","93","146","37",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("교육 JSP 테스트");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","343","141","315","349",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("outDs");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"GB\"/><Cell col=\"1\" text=\"BUSECD\"/><Cell col=\"2\" text=\"JIKWICD\"/><Cell col=\"3\" text=\"SABUN\"/><Cell col=\"4\" text=\"BUSE\"/><Cell col=\"5\" text=\"JIKWI\"/><Cell col=\"6\" text=\"NAME\"/><Cell col=\"7\" text=\"JIKGUN_CD\"/><Cell col=\"8\" text=\"JIKMU_CD\"/></Band><Band id=\"body\"><Cell text=\"bind:GB\"/><Cell col=\"1\" text=\"bind:BUSECD\"/><Cell col=\"2\" text=\"bind:JIKWICD\"/><Cell col=\"3\" text=\"bind:SABUN\"/><Cell col=\"4\" text=\"bind:BUSE\"/><Cell col=\"5\" text=\"bind:JIKWI\"/><Cell col=\"6\" text=\"bind:NAME\"/><Cell col=\"7\" text=\"bind:JIKGUN_CD\"/><Cell col=\"8\" text=\"bind:JIKMU_CD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("testname","40","50","72","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","110","43","200","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("님 환영합니다.");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","238","27","152","38",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("화면 컨버전 (Mybatis)");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","403","27","152","38",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("화면 컨버전 (JSP)");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","461","544","170","44",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("교과서 JSP 테스트");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","442","610","217","60",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("Ds");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"SYSDATE\"/></Band><Band id=\"body\"><Cell text=\"bind:SYSDATE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02_00","26","610","217","60",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_binddataset("sys");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"test\"/></Band><Band id=\"body\"><Cell text=\"bind:test\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00","44","544","170","44",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("교과서 JSP 테스트");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","240","510","196","34",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("프로시저 테스트");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,790,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("TestForm_CJTB.xfdl", function() {

        this.BTN_SEARCH_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0, "searchType", this.Combo00.value);
        	this.ds_search.setColumn(0, "keyword", this.Edit00.text);

        	this.transaction("select", "testURL::search", "input1=ds_search", "test=test", "", "callback", true);
        };

        // this.BTN_DELETE_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	var nRow = this.test.rowposition;
        // 	this.test.deleteRow(nRow);
        // };

        this.callback = function(svcId, eCode, eMsg)
        {
        	if(eCode != 0) alert(eMsg);

        	switch(svcId) {
        	    case "update":
        		    this.BTN_SEARCH_onclick();
        		    break;
        	    case "select":
        		    break;
        	}
        };

        // this.BTN_INSERT_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	var nRow = this.test.addRow();
        // 	this.test.set_rowposition();
        // 	this.Grid00.setCellPos(1);
        // 	this.Grid00.showEditor(true);
        // };

        // this.BTN_UPDATE_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	this.transaction("update", "testURL::erp/update", "input1=test:U", "", "", "callback", true);
        // };

        this.Button00_onclick = function(obj,e)
        {
        	var str_url =  nexacro.getApplication().gfn_getUrl("svcUrl")+"JSP/hr/getData_jikgunList.jsp";
        	var in_ds = "outDs=outDs";
        	var out_ds = "outDs=outDs";
        	var str_arg = "";

        	trace(str_url);

        	this.transaction("select", str_url, in_ds, out_ds, str_arg, "callback", true);
        };

        this.TestForm_CJTB_onload = function(obj,e)
        {
        	this.alert("hello~ Test World");

        	var name = nexacro.getApplication().gds_logintest.getColumn(0, "LOGIN_NAME");

        	this.testname.set_text(name);
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.go("Test::SelectTest_Mybatis.xfdl");
        };

        this.Button02_onclick = function(obj,e)
        {
        	var urls = "https://cjtb-erp.chunjae.co.kr:8000/JSPTEST/jsptest.jsp";

        	this.transaction("select", urls, "", "Ds=Ds", "", "fn_test");
        };

        this.fn_test = function(svcId, eCode, eMsg)
        {
        	if(eCode != 0)
        	{
        		this.alert(eCode + " : " +eMsg);
        	} else {
        		this.alert("성공");
        	}
        }
        this.Button05_onclick = function(obj,e)
        {
        	this.go("Test::SelectTest_JSP.xfdl");
        };

        this.Button08_onclick = function(obj,e)
        {
        	var urls = "testURL::testsys";

        	this.transaction("select", urls, "", "sys=sys", "", "fn_test");
        };

        this.Button03_onclick = function(obj,e)
        {
        	var sabun = nexacro.getApplication().gds_logintest.getColumn(0, "SABUN");
        	var sayu = "테스트요";

        	var url = "testURL::updateTest";

        	var arg = "SABUN="+nexacro.wrapQuote(sabun);
        	    arg += " SAYU="+nexacro.wrapQuote(sayu);

        	this.transaction("test", url, "", "", arg, "");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TestForm_CJTB_onload,this);
            this.addEventHandler("onkeydown",this.TestForm_CJTB_onkeydown,this);
            this.BTN_SEARCH.addEventHandler("onclick",this.BTN_SEARCH_onclick,this);
            this.BTN_DELETE.addEventHandler("onclick",this.BTN_DELETE_onclick,this);
            this.BTN_UPDATE.addEventHandler("onclick",this.BTN_UPDATE_onclick,this);
            this.BTN_INSERT.addEventHandler("onclick",this.BTN_INSERT_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button02_00.addEventHandler("onclick",this.Button08_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
        };
        this.loadIncludeScript("TestForm_CJTB.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
