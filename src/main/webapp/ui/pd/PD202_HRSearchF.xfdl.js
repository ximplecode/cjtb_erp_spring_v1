(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PD202_HRSearchF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Ds_Sawon2", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOISADT\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","20","32","70","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("성 명");
            obj.set_textAlign("center");
            obj.set_font("bold 13px/normal \"Gulim\"");
            obj.set_background("#c3e4cd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"34","52","22","76",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"34","51","22","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_search","20","70","310","230",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("Ds_Sawon2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"115\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"부서\"/><Cell col=\"1\" text=\"직위\"/><Cell col=\"2\" text=\"사번\"/><Cell col=\"3\" text=\"성명\"/></Band><Band id=\"body\"><Cell text=\"bind:BUSE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:JIKWI\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:SABUN\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","310","310","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("직원을 조회한 후 리스트에서 \r\n해당 직원을 더블클릭 하시면 추가 할 수 있습니다");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_search","90","32","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",350,360,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PD202_HRSearchF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("PD202_HRSearchF.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("PD202_HRSearchF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.btn_search_onclick = function(obj,e)
        {
        	  var strBuse = "",strName = "",strEndDate = "";
        	  if(this.edt_search.value != null)
        		strName = nexacro.trim(this.edt_search.value);
              if(strName != "") {
        		var strUrl, strDs, strArg;
        		strUrl   = "JSP/hr/sql_SawonList5.jsp";
        		strDs = "Ds_Sawon2=Ds_Sawon2";
        		strArg = "strBuse=" + nexacro.wrapQuote(strBuse);
        	    strArg += " strName=" + nexacro.wrapQuote(strName);
        	    strArg += " strEndDate=" + nexacro.wrapQuote(strEndDate);
        		this.gfn_TransactionP("select", strUrl, strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        	}
        };

        this.grd_search_oncelldblclick = function(obj,e)
        {
        	if (this.opener.name == "PD603F")
            {
        		this.opener.dsSearch.clearData();
        		this.opener.dsSearch.addRow();
        		this.opener.dsSearch.setColumn(0, "JIKWI",  nexacro.trim(this.Ds_Sawon2.getColumn(e.row,"JIKWI")));
        		this.opener.dsSearch.setColumn(0, "SECTION_NAME",  nexacro.trim(this.Ds_Sawon2.getColumn(e.row,"BUSE")));
        		this.opener.dsSearch.setColumn(0, "NAME",  nexacro.trim(this.Ds_Sawon2.getColumn(e.row,"NAME")));
        		this.opener.dsSearch.setColumn(0, "SABUN",  nexacro.trim(this.Ds_Sawon2.getColumn(e.row,"SABUN")));
            }
            else if (this.opener.name == "GONGSU_TOTAL")
            {
        		this.Parent.sabun = nexacro.trim(this.Ds_Sawon2.getColumn(e.row,"SABUN"));
        		this.parent.name = nexacro.trim(this.Ds_Sawon2.getColumn(e.row,"NAME"));
            }
            else if (this.opener.name == "PD202F" || this.opener.name == "PD203F")
            {
        		this.opener.dsSearch.clearData();
        		this.opener.dsSearch.addRow();
        		this.opener.dsSearch.setColumn(0, "BUSE",  nexacro.trim(this.Ds_Sawon2.getColumn(e.row,"BUSE")));
        		this.opener.dsSearch.setColumn(0, "NAME",  nexacro.trim(this.Ds_Sawon2.getColumn(e.row,"NAME")));
        		this.opener.dsSearch.setColumn(0, "SABUN",  nexacro.trim(this.Ds_Sawon2.getColumn(e.row,"SABUN")));
        		if(this.parent.gubn == "use") // use = 실사용자 -> 1 / emp = 사용자 -> 0
        			this.close(1);
        		else
        			this.close(0);
        		return;
            }
        	else if(this.opener.name == "GW551")
        	{
        		this.opener.edt_name.set_value(nexacro.trim(this.Ds_Sawon2.getColumn(e.row,"NAME")));
        		this.opener.edt_buse.set_value(nexacro.trim(this.Ds_Sawon2.getColumn(e.row,"BUSE")));
        		this.opener.edt_sabun.set_value(nexacro.trim(this.Ds_Sawon2.getColumn(e.row,"SABUN")));
        	}
            else
            {
              // this.parent.Edt_EmployeeName.VALUE  = Ds_Sawon2.getColumn(nRow,"sabun");
        	  this.parent.Edt_EmployeeName.value  = nexacro.trim(this.Ds_Sawon2.getColumn(e.row,"NAME"));
              this.parent.Edt_EmployeeSABUN.value  = nexacro.trim(this.Ds_Sawon2.getColumn(e.row,"SABUN"));
              this.parent.Cb_Section.value  = nexacro.trim(this.Ds_Sawon2.getColumn(e.row,"BUSE"));
            }

            this.close(1);
        };

        this.PD202_HRSearchF_onload = function(obj,e)
        {
        	trace('');
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };


        this.edt_search_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        		this.btn_search.click();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PD202_HRSearchF_onload,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.grd_search.addEventHandler("oncelldblclick",this.grd_search_oncelldblclick,this);
            this.edt_search.addEventHandler("onkeydown",this.edt_search_onkeydown,this);
        };
        this.loadIncludeScript("PD202_HRSearchF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
