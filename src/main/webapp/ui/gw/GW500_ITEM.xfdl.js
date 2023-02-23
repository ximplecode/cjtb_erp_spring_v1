(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GW500_ITEM");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(770,430);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_step", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_unit", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"STEP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_item", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"STEP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"STEP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GB\" type=\"STRING\" size=\"256\"/><Column id=\"COST\" type=\"STRING\" size=\"256\"/><Column id=\"S_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"E_YMD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","15","12","175","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("품목 리스트");
            obj.set_color("#7fb39d");
            obj.set_font("bold 25px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"25","63","25","14",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_07","12","60","65","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("대분류");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_07_01","262","60","65","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("중분류");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_step","78","60","180","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_step");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_unit","329","60","180","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_unit");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","6","120","754","300",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_item");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"230\"/><Column size=\"45\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"대분류\"/><Cell col=\"2\" text=\"중분류\"/><Cell col=\"3\" text=\"코드\"/><Cell col=\"4\" text=\"품명\"/><Cell col=\"5\" text=\"단위\"/><Cell col=\"6\" text=\"단가\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:STEP_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_step\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"2\" text=\"bind:UNIT_CODE\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"ds_unit\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"3\" text=\"bind:CODE\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:NAME\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:GB\" edittype=\"normal\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:COST\" displaytype=\"number\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_code","581","60","180","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"25","63","25","80",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_07_00","513","60","65","25",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("코드");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"25","63","25","147",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"25","63","25","215",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("추가");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_07_00_00","12","90","65","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("품명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","79","90","682","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",770,430,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("GW500_ITEM.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("GW500_ITEM.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("GW500_ITEM.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var d = new Date();
        var today = Eco.date.getMaskFormatString(d, "yyyyMMdd");

        this.GW500_ITEM_onload = function(obj,e)
        {
        	//인사팀만 추가/저장 버튼 보이게
        	//인사팀 아니면 readonly
        	//this.Grid00.set_readonly(true);

        	this.fn_getData();

        	var strUrl = "JSP/gw/GW500_item_basic.jsp";
        	var inds = "ds_step=ds_step ds_unit=ds_unit";
        	var outds = "ds_step=ds_step ds_unit=ds_unit";

        	this.gfn_TransactionP("select", strUrl, inds, outds, "", "fnSelectCallback", false, "P", false, this);
        };

        //조회
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_getData();
        };

        this.fn_getData = function()
        {
        	var strUrl = "JSP/gw/GW500_item_select.jsp";
        	var inds = "ds_item=ds_item";
        	var outds = "ds_item=ds_item";
        	var strArg = "step_code=" + nexacro.wrapQuote(this.cb_step.value) +
        				 " unit_code=" + nexacro.wrapQuote(this.cb_unit.value) +
        				 " nm=" + nexacro.wrapQuote(this.edt_name.value) +
        				 " code=" + nexacro.wrapQuote(this.edt_code.value);

        	this.gfn_TransactionP("select", strUrl, inds, outds, strArg, "", false, "P", false, this);
        }

        //선택
        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var nRow = this.opener.ds_data.rowposition;
        	this.opener.ds_data.setColumn(nRow, "P_NAME", this.ds_item.getColumn(e.row,"NAME"));
        	this.opener.ds_data.setColumn(nRow, "P_STANDARD", this.ds_item.getColumn(e.row,"GB"));
        	this.opener.ds_data.setColumn(nRow, "P_COST", this.ds_item.getColumn(e.row,"COST"));
        	this.opener.ds_data.setColumn(nRow, "CODE", this.ds_item.getColumn(e.row,"CODE"));

        	this.close();
        };

        this.Grid00_oncellposchanged = function(obj,e)
        {
        	if(e.oldcell == 1)
        	{
        		this.ds_unit.filter("STEP_CODE==" + nexacro.wrapQuote(this.Grid00.getCellValue(e.row, 0)) + " || CODE==''");
        	}
        };

        this.Grid00_onenterdown = function(obj,e)
        {
        	if(e.cell == 6)
        	{
        		this.ds_item.insertRow(this.ds_item.rowposition+1);
        		obj.setCellPos(0);
        	}
        	else
        		obj.setCellPos(e.cell + 1);
        };

        //추가
        this.btn_add_onclick = function(obj,e)
        {
        	var chkRow = this.ds_item.findRow("CHK", 1);
        	var STEP_CODE = this.ds_item.getColumn(chkRow, "STEP_CODE");
        	var UNIT_CODE = this.ds_item.getColumn(chkRow, "UNIT_CODE");
        	var CODE = this.ds_item.getColumn(chkRow, "CODE");
        	var NAME = this.ds_item.getColumn(chkRow, "NAME");
        	var GB = this.ds_item.getColumn(chkRow, "GB");
        	var COST = this.ds_item.getColumn(chkRow, "COST");

        	var d = new Date();
        	var today = Eco.date.getMaskFormatString(d, "yyyyMMdd");

        	var nRow = this.ds_item.insertRow(0);

        	if(chkRow != -1)
        	{
        		this.ds_item.setColumn(nRow, "STEP_CODE", STEP_CODE);
        		this.ds_item.setColumn(nRow, "UNIT_CODE", UNIT_CODE);
        		this.ds_item.setColumn(nRow, "CODE", CODE);
        		this.ds_item.setColumn(nRow, "NAME", NAME);
        		this.ds_item.setColumn(nRow, "GB", GB);
        		this.ds_item.setColumn(nRow, "COST", COST);
        		this.ds_item.setColumn(nRow, "S_YMD", today);
        		this.ds_item.setColumn(nRow, "E_YMD", "99991231");

        		d.addDate(-1)
        		var endDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");
        		this.ds_item.setColumn(chkRow+1, "E_YMD", endDay);
        	}
        	else
        	{
        		this.ds_item.setColumn(nRow, "S_YMD", today);
        		this.ds_item.setColumn(nRow, "E_YMD", "99991231");
        	}
        };

        //저장
        this.btn_save_onclick = function(obj,e)
        {
        	var strUrl = "JSP/gw/SQL_GW500_ITEM_DML.jsp";
        	var inds = "ds_item=ds_item:U";

        	this.gfn_TransactionP("select", strUrl, inds, "", "", "fnSaveCallback", false, "P", false, this);
        };

        this.fnSaveCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        	{
        		alert("처리가 완료되었습니다.");
        		this.fn_getData();
        	}
        }

        this.cb_step_onitemchanged = function(obj,e)
        {
        	this.cb_unit.set_value("");

        	if(this.cb_step.value == "")
        		this.ds_unit.filter("");
        	else
        		this.ds_unit.filter("STEP_CODE==" + nexacro.wrapQuote(this.cb_step.value) + " || CODE==''");

        	this.fn_getData();
        };

        this.cb_unit_onitemchanged = function(obj,e)
        {
        	this.fn_getData();
        };

        this.edt_code_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_getData();
        		this.edt_name.setFocus();
        	}
        };

        this.edt_name_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        		this.fn_getData();
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GW500_ITEM_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.Static00_07.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_07_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.cb_step.addEventHandler("onitemchanged",this.cb_step_onitemchanged,this);
            this.cb_unit.addEventHandler("onitemchanged",this.cb_unit_onitemchanged,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.edt_code.addEventHandler("onkeydown",this.edt_code_onkeydown,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Static00_07_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.Static00_07_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.edt_name.addEventHandler("onkeydown",this.edt_name_onkeydown,this);
            this.ds_item.addEventHandler("onrowsetchanged",this.ds_item_onrowsetchanged,this);
        };
        this.loadIncludeScript("GW500_ITEM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
