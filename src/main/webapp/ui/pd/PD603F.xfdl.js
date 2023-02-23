(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PD603F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1630,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"EDT_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"EDT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EDT_SABUN2\" type=\"STRING\" size=\"256\"/><Column id=\"EDT_NAME2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDataList", this);
            obj._setContents("<ColumnInfo><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"nCell\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_main","0","0","1330","670",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","5.19%","0.9%","46.25%","11.95%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_text("개인 통제성경비 관리");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01","3.01%","13.74%","7.52%","4.78%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("2");
            obj.set_text("년도");
            obj.set_textAlign("center");
            obj.set_font("bold 13px/normal \"Gulim\"");
            obj.set_background("#c3e4cd");
            this.div_main.addChild(obj.name, obj);

            obj = new Spin("sp_yy","Static01:0%","13.74%","10.53%","4.78%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            obj.getSetter("textAlign").set("center");
            obj.set_border("1px groove #c3e4cd");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_min("0");
            obj.set_max("9999");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("Static01_00","3.01%","18.81%","7.52%","4.78%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("3");
            obj.set_text("사용자");
            obj.set_textAlign("center");
            obj.set_font("bold 13px/normal \"Gulim\"");
            obj.set_background("#c3e4cd");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("Grid00","3.01%","Static01_00:37.5%","22.71%","73.14%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsUser");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_font("13px/normal \"Gulim\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"부서\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" text=\"직위\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"성명\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:SECTION_NAME\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:JIKWI\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_all","Grid00:3.32%","19.86%","10.53%","4.78%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("4");
            obj.set_text("일괄 적용");
            obj.set_font("12px/normal \"Gulim\"");
            obj.set_value("true");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("Grid01","Grid00:3.32%","Static01_00:37.5%","41.36%","73.14%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("6");
            obj.set_binddataset("dsData");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_font("13px/normal \"Gulim\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"60\"/><Column size=\"115\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"사용자\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" text=\"월\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"예산\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" colspan=\"2\" text=\"지결 작성자\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" colspan=\"2\" text=\"지결 작성자\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:NAME\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:MM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:BUDGET_AMOUNT\" edittype=\"normal\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:EDT_NAME\" textAlign=\"center\"/><Cell col=\"4\" textAlign=\"center\" background=\"url(&apos;Img::btn_TF_src.png&apos;) no-repeat center center\"/><Cell col=\"5\" text=\"bind:EDT_NAME2\" textAlign=\"center\"/><Cell col=\"6\" textAlign=\"center\" background=\"url(&apos;Img::btn_TF_src.png&apos;) no-repeat center center\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("Grid02","Grid01:1.82%","Static01_00:37.5%","30.46%","73.14%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("7");
            obj.set_binddataset("dsDataList");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_font("13px/normal \"Gulim\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"125\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"34\"/><Row size=\"34\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"월\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" text=\"예산\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"사용금액\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" text=\"합계\" font=\"normal 700 13px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:MM\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:BUDGET_AMOUNT\" displaytype=\"number\" textAlign=\"right\" padding=\"0px 5px 0px 0px\"/><Cell col=\"2\" text=\"bind:USE_AMOUNT\" displaytype=\"currency\" textAlign=\"right\" padding=\"0px 5px 0px 0px\"/><Cell col=\"3\" text=\"bind:TOTAL_AMOUNT\" displaytype=\"currency\" background=\"#ebfef3\" textAlign=\"right\" padding=\"0px 5px 0px 0px\" cssclass=\"expr:TOTAL_AMOUNT&lt;0?&apos;pdColorChange&apos;:&apos;&apos;\"/></Band><Band id=\"summary\"><Cell background=\"#0d908c\"/><Cell col=\"1\" background=\"#0d908c\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BUDGET_AMOUNT)&quot;)\" textAlign=\"right\" color=\"white\" displaytype=\"number\" padding=\"0px 5px 0px 0px\"/><Cell col=\"2\" background=\"#0d908c\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(USE_AMOUNT)&quot;)\" color=\"white\" displaytype=\"number\" padding=\"0px 5px 0px 0px\"/><Cell col=\"3\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(TOTAL_AMOUNT)&quot;)\" displaytype=\"number\" padding=\"0px 5px 0px 0px\" cssclass=\"expr:dataset.getSum(&quot;nexacro.toNumber(TOTAL_AMOUNT)&quot;)&lt;0?&apos;pdColorChange&apos;:&apos;&apos;\" background=\"#ebfef3\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_search","Static01_00:5%","18.81%","2.71%","4.78%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("8");
            obj.set_background("url(\'Img::btn_TF_src.png\') no-repeat center center");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"5.98%","5.73%","4.8%","0.98%",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("10");
            obj.set_text("삭제");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"5.98%","5.73%","4.80%","btn_del:8.34%",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.set_font("13px/normal \"Gulim\"");
            this.div_main.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1630,760,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PD603F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("PD603F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("PD603F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var jikwi, section_name, name, sabun;
        var yy, sSabun;
        var nRow, nCell;

        this.PD603F_onload = function(obj,e)
        {
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyy");
        	this.div_main.form.sp_yy.set_value(f_date);
        	yy = this.div_main.form.sp_yy.value;
        	this.fnGetdata_personal();
        };

        this.div_main_btn_search_onclick = function(obj,e)
        {
        	this.lfn_showModal("search", "", "pd::PD202_HRSearchF.xfdl", "fnSearchCallBack", this, 10, 58, 350, 360);
        };

        this.fnSearchCallBack = function(strID, ret)
        {
        	if (ret == 1)
        	{
        		sSabun = this.dsSearch.getColumn(0,"SABUN");
        		yy = this.div_main.form.sp_yy.value;
        		var nRow = this.dsUser.findRow("SABUN", this.dsSearch.getColumn(0,"SABUN"));
        		if (nRow >= 0)
        		{
        			this.fnGetdata_budget();
        			return;
        		}
        		nRow = this.dsUser.addRow();

        		this.dsUser.setColumn(nRow, "YY", this.div_main.form.sp_yy.value);
        		this.dsUser.setColumn(nRow, "SABUN", this.dsSearch.getColumn(0,"SABUN"));
        		this.dsUser.setColumn(nRow, "SECTION_NAME", this.dsSearch.getColumn(0,"SECTION_NAME"));
        		this.dsUser.setColumn(nRow, "JIKWI", this.dsSearch.getColumn(0,"JIKWI"));
        		this.dsUser.setColumn(nRow, "NAME", this.dsSearch.getColumn(0,"NAME"));

        		this.fnGetdata_budget();
        	}
        }

        this.fnGetdata_budget = function()
        {
        	var strUrl, strDs, strArg;

        	strUrl = "JSP/pd/PD603_select.jsp";
        	strDs = "dsData=dsData";
        	strArg = "yy="+nexacro.wrapQuote(yy) + " sabun="+nexacro.wrapQuote(sSabun);
        	this.gfn_TransactionP("select", strUrl, strDs, strDs, strArg, "fnCallback_select", false, "P", false, this);
        }

        this.fnCallback_select = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return;
        	}
        	for(var i=0; i < this.dsData.rowcount; i++)
        	{
        		this.dsData.setColumn(i, "NAME", nexacro.trim(this.dsData.getColumn(i,"NAME")));
        		this.dsData.setColumn(i, "EDT_NAME", nexacro.trim(this.dsData.getColumn(i,"EDT_NAME")));
        		this.dsData.setColumn(i, "EDT_NAME2", nexacro.trim(this.dsData.getColumn(i,"EDT_NAME2")));
        	}
        }

        this.fnGetdata_personal= function()
        {
        	var strUrl, strDs, strArg;
        	this.dsData.clearData();

        	strUrl = "JSP/pd/PD603_personal.jsp";
        	strDs = "dsUser=dsUser";
        	strArg = "yy="+nexacro.wrapQuote(yy);

        	this.gfn_TransactionP("personal", strUrl, strDs, strDs, strArg, "fnCallback_personal", true, "P", false, this);
        }

        this.fnCallback_personal = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return;
        	}
        	for(var i=0; i < this.dsUser.rowcount; i++)
        		this.dsUser.setColumn(i, "NAME", nexacro.trim(this.dsUser.getColumn(i,"NAME")));
        }

        this.div_main_Grid01_oncellclick = function(obj,e)
        {
        	if (e.cell != 4 && e.cell != 6) return;
        	nCell = e.cell;
        	nRow = e.row;
        	this.lfn_showModal("select", "", "pd::PD202_HRSearchF.xfdl", "fnWriterCallBack", this, 10, 58, 350, 360);
        };

        this.fnWriterCallBack = function(strID, ret)
        {
        	var i;
        	if (ret == 1)
        	{
        		if (nCell == 4)
        		{
        			this.dsData.setColumn(nRow,"EDT_SABUN", this.dsSearch.getColumn(0,"SABUN"));
        			this.dsData.setColumn(nRow,"EDT_NAME", this.dsSearch.getColumn(0,"NAME"));
        			if (this.div_main.form.chk_all.value == true)
        			{
        				for (i = nRow + 1; i < this.dsData.rowcount; i++)
        				{
        					this.dsData.setColumn(i,"EDT_SABUN", this.dsSearch.getColumn(0,"SABUN"));
        					this.dsData.setColumn(i,"EDT_NAME", this.dsSearch.getColumn(0,"NAME"));
        				}
        			}
        		}
        		else if (nCell == 6)
        		{
        			this.dsData.setColumn(nRow,"EDT_SABUN2",this.dsSearch.getColumn(0,"SABUN"));
        			this.dsData.setColumn(nRow,"EDT_NAME2",this.dsSearch.getColumn(0,"NAME"));

        			if (this.div_main.form.chk_all.value == true)
        			{
        				for (i = nRow + 1; i < this.dsData.rowcount; i++)
        				{
        				   this.dsData.setColumn(i,"EDT_SABUN2",this.dsSearch.getColumn(0,"SABUN"));
        				   this.dsData.setColumn(i,"EDT_NAME2",this.dsSearch.getColumn(0,"NAME"));
        				}
        			}
        		}
        	}
        }

        this.div_main_Grid01_onenterdown = function(obj,e)
        {
        	if (e.cell == 2)
        	{
        	   if (this.div_main.form.chk_all.value == false ) return;
        	   for (var i = e.row + 1; i < this.dsData.rowcount; i++)
        	   {
        	      this.dsData.setColumn(i,"BUDGET_AMOUNT",e.value);
        	   }
        	}
        };

        this.div_main_Grid00_oncelldblclick = function(obj,e)
        {
        	sSabun = this.dsUser.getColumn(e.row,"SABUN");
        	this.fnGetdata_budget();
        	this.fnGetdata_budget_list();
        };

        this.div_main_btn_save_onclick = function(obj,e)
        {
        	var strUrl, inDs;

        	strUrl = "JSP/pd/PD603_dml.jsp";
        	inDs = "dsData=dsData:U";

        	this.gfn_TransactionP("dml", strUrl, inDs, "", "", "fnCallback_dml", true, "P", false, this);
        };

        this.fnCallback_dml = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return;
        	}
        }
        this.div_main_sp_yy_onspin = function(obj,e)
        {
        	yy = e.postvalue;
        	this.fnGetdata_personal();
        	this.dsDataList.clearData();
        };

        this.div_main_btn_del_onclick = function(obj,e)
        {
        	var strUrl, strArg;
        	var objApp = nexacro.getApplication();

        	if(msg_result = objApp.confirm( "선택하신 임직원의 예산을 삭제하시겠습니까?" , "삭제", "warning" ))
            {
        		strUrl = "JSP/pd/PD603_delete.jsp";
        		strArg = "yy="+nexacro.wrapQuote(yy) + " sabun="+nexacro.wrapQuote(sSabun);

        		this.gfn_TransactionP("delete", strUrl, "", "", strArg, "fnCallback_delete", true, "P", false, this);
            }
        };

        this.fnCallback_dml = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return;
        	}
        	this.dsData.clearData();
        	this.dsDataList.clearData();
        	this.fnGetdata_personal();
        }

        this.fnCallback_delete = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return;
        	}
        	this.dsData.clearData();
        	this.dsDataList.clearData();
        	this.fnGetdata_personal();
        }



        this.fnGetdata_budget_list = function()
        {
            var strUrl, strDs, strArg;

            strUrl = "JSP/pd/PD604_select.jsp";
            strDs = "dsDataList=dsDataList";
            strArg = "yy="+nexacro.wrapQuote(yy) + " sabun="+nexacro.wrapQuote(sSabun);
        	this.gfn_TransactionP("select", strUrl, strDs, strDs, strArg, "fnCallback_select", false, "P", false, this);
        }

        this.PD603F_onsize = function(obj,e)
        {
        	if(this.width < 1330 || this.width > 1630)
        		this.div_main.set_width(this.width - 20)
        	else
        		this.div_main.set_width(1330);

        	if(this.height < 670)
        		this.div_main.set_height(this.height - 20)
        	else
        		this.div_main.set_height(670);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PD603F_onload,this);
            this.addEventHandler("onsize",this.PD603F_onsize,this);
            this.div_main.form.sp_yy.addEventHandler("onspin",this.div_main_sp_yy_onspin,this);
            this.div_main.form.Grid00.addEventHandler("oncelldblclick",this.div_main_Grid00_oncelldblclick,this);
            this.div_main.form.Grid01.addEventHandler("oncellclick",this.div_main_Grid01_oncellclick,this);
            this.div_main.form.Grid01.addEventHandler("onenterdown",this.div_main_Grid01_onenterdown,this);
            this.div_main.form.btn_search.addEventHandler("onclick",this.div_main_btn_search_onclick,this);
            this.div_main.form.btn_del.addEventHandler("onclick",this.div_main_btn_del_onclick,this);
            this.div_main.form.btn_save.addEventHandler("onclick",this.div_main_btn_save_onclick,this);
        };
        this.loadIncludeScript("PD603F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
