(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GW510_common_new");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(770,430);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_common", this);
            obj._setContents("<ColumnInfo><Column id=\"COMMON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HIGHLEVEL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HIGHLEVEL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLELEVEL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLELEVEL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOWLEVEL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LOWLEVEL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DAN\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGE_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_h", this);
            obj._setContents("<ColumnInfo><Column id=\"HIGHLEVEL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HIGHLEVEL_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_m", this);
            obj._setContents("<ColumnInfo><Column id=\"HIGHLEVEL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HIGHLEVEL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLELEVEL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLELEVEL_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_l", this);
            obj._setContents("<ColumnInfo><Column id=\"COMMON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HIGHLEVEL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HIGHLEVEL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLELEVEL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLELEVEL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOWLEVEL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LOWLEVEL_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","15","12","125","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("품목선택");
            obj.set_color("#7fb39d");
            obj.set_font("bold 25px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"25","63","25","14",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"25","63","25","80",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_07","12","60","7.56%","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("대분류");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_07_00","491","60","7.44%","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("품명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_07_01","250","60","7.56%","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("중분류");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_h","76","60","170","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_h");
            obj.set_codecolumn("HIGHLEVEL_CODE");
            obj.set_datacolumn("HIGHLEVEL_NAME");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_m","315","60","170","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_m");
            obj.set_codecolumn("MIDDLELEVEL_CODE");
            obj.set_datacolumn("MIDDLELEVEL_NAME");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_l","556","60","200","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_l");
            obj.set_codecolumn("LOWLEVEL_CODE");
            obj.set_datacolumn("LOWLEVEL_NAME");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_add","27","95","128","18",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("연속추가");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","463","95","287","21",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("※단가 없는 품목은 인사관리팀 별도 요청바람※");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("#f35373");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","6","123","750","292",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_common");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"230\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"대분류\"/><Cell col=\"1\" text=\"중분류\"/><Cell col=\"2\" text=\"코드\"/><Cell col=\"3\" text=\"품명\"/><Cell col=\"4\" text=\"단가\"/></Band><Band id=\"body\"><Cell text=\"bind:HIGHLEVEL_NAME\"/><Cell col=\"1\" text=\"bind:MIDDLELEVEL_NAME\"/><Cell col=\"2\" text=\"bind:LOWLEVEL_CODE\"/><Cell col=\"3\" text=\"bind:LOWLEVEL_NAME\"/><Cell col=\"4\" text=\"bind:DAN\" displaytype=\"number\"/></Band></Format></Formats>");
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
        this.addIncludeScript("GW510_common_new.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("GW510_common_new.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("GW510_common_new.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var sRow, formId;

        this.GW510_common_new_onload = function(obj,e)
        {
        	sRow = this.parent.p_nRow;
        	formId = this.parent.p_Id;

        	var strUrl = "JSP/gw/SQL_GW510_COMMON_SELECT.jsp";
        	var inds = "ds_h=ds_h ds_m=ds_m ds_common=ds_common";
        	var outds = "ds_h=ds_h ds_m=ds_m ds_common=ds_common";

        	this.gfn_TransactionP("select", strUrl, inds, outds, "", "fnSelectCallback", false, "P", false, this);
        };

        this.fnSelectCallback = function (svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        		this.ds_l.copyData(this.ds_common);
        };

        this.cb_h_onitemchanged = function(obj,e)
        {
        	if(this.cb_h.text == "")
        	{
        		this.ds_m.filter("");
        		this.ds_common.filter("");
        		this.ds_l.filter("");
        	}
        	else
        	{
        		this.ds_m.filter("HIGHLEVEL_CODE==" + nexacro.wrapQuote(this.cb_h.value) + " || MIDDLELEVEL_CODE==''");
        		this.ds_common.filter("HIGHLEVEL_CODE==" + nexacro.wrapQuote(this.cb_h.value));
        		this.ds_l.filter("HIGHLEVEL_CODE=="+nexacro.wrapQuote(this.cb_h.value)+ " || MIDDLELEVEL_CODE==''");
        	}
        	this.cb_m.set_text("");
        	this.fn_dataFilter();
        };

        this.cb_m_onitemchanged = function(obj,e)
        {
        	if(this.cb_m.value == "")
        		this.ds_l.filter("HIGHLEVEL_CODE==" + nexacro.wrapQuote(this.cb_h.value) + "|| MIDDLELEVEL_CODE==''");
        	else
        	{
        		this.cb_h.set_value(this.ds_m.getColumn(this.cb_m.index, "HIGHLEVEL_CODE"));
        		this.ds_l.filter("HIGHLEVEL_CODE==" + nexacro.wrapQuote(this.cb_h.value) + "|| MIDDLELEVEL_CODE==" + nexacro.wrapQuote(this.cb_h.value));
        	}
        	this.fn_dataFilter();
        };

        this.cb_l_onitemchanged = function(obj,e)
        {
        	this.fn_dataFilter();
        };

        this.fn_dataFilter = function()
        {
        	var check = 0;
        	var str;

        	if(this.cb_h.text != "")
        	{
        		str = "HIGHLEVEL_CODE==" + nexacro.wrapQuote(this.cb_h.value);
        		check = 1;
        	}

        	if (this.cb_m.text != "")
        	{
        		if (check == 1)
        			 str += " && ";

        		str += " MIDDLELEVEL_CODE=="+ nexacro.wrapQuote(this.cb_m.value);
        		check = 1;
        	}

        	if (this.cb_l.text != "")
        	{
        		if (check == 1)
        			str += " && ";

        		str = " LOWLEVEL_NAME=="+ nexacro.wrapQuote(this.cb_l.text);
           }

           if (str == "") this.ds_common.filter("");
           else this.ds_common.filter(str);
        }

        this.btn_clear_onclick = function(obj,e)
        {
        	this.cb_h.set_value("");
        	this.cb_m.set_value("");
        	this.cb_l.set_text("");
        	this.ds_common.filter("");
        };

        this.Grid00_oncelldblclick = function(obj,e)
        {
        	if(formId == "GW510")
        	{
        		this.opener.ds_dtl.setColumn(sRow, "COMMON_ID", this.ds_common.getColumn(e.row,"COMMON_ID"));
        		this.opener.ds_dtl.setColumn(sRow, "LOWLEVEL_NAME", this.ds_common.getColumn(e.row,"LOWLEVEL_NAME"));
        		this.opener.ds_dtl.setColumn(sRow, "BUY_COST", this.ds_common.getColumn(e.row,"DAN"));

        		if(this.chk_add.value == false)
        		{
        			this.opener.grd_dtl.setCellPos(2);
        			this.opener.ds_dtl.rowposition = sRow-1;
        			this.close();
        		}
        		else
        		{
        			if(sRow == this.opener.ds_dtl.rowcount -1 )
        				sRow = this.opener.ds_dtl.addRow();
        		}
        	}
        	else if(formId == "GW540")
        	{
        		this.opener.ds_mst.setColumn(sRow, "COMMON_ID", this.ds_common.getColumn(e.row, "COMMON_ID"));
        		this.opener.ds_mst.setColumn(sRow, "LOWLEVEL_NAME", this.ds_common.getColumn(e.row, "LOWLEVEL_NAME"));
        		this.close();
        	}
        };

        //이미지 추가
        this.ds_common_onrowposchanged = function(obj,e)
        {

        };


        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GW510_common_new_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.Static00_07.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_07_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_07_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.cb_h.addEventHandler("canitemchange",this.cb_h_canitemchange,this);
            this.cb_h.addEventHandler("onitemchanged",this.cb_h_onitemchanged,this);
            this.cb_m.addEventHandler("canitemchange",this.cb_m_canitemchange,this);
            this.cb_m.addEventHandler("onitemchanged",this.cb_m_onitemchanged,this);
            this.cb_l.addEventHandler("canitemchange",this.cb_l_canitemchange,this);
            this.cb_l.addEventHandler("onitemchanged",this.cb_l_onitemchanged,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.ds_common.addEventHandler("onrowposchanged",this.ds_common_onrowposchanged,this);
        };
        this.loadIncludeScript("GW510_common_new.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
