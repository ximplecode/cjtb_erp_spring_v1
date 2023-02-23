(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR501P_02");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1246,543);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSENAME\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NICK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"219\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"161\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"부서명\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"직위\"/><Cell col=\"3\" text=\"이름\"/><Cell col=\"4\" text=\"근무지 위치\"/></Band><Band id=\"body\"><Cell text=\"bind:BUSENAME\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:SABUN\"/><Cell col=\"2\" text=\"bind:NICK_NAME\"/><Cell col=\"3\" text=\"bind:NAME\"/><Cell col=\"4\" text=\"bind:POSITION_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1246,543,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("HR501P_02.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("HR501P_02.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("HR501P_02.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");

        this.fn_getData = function(ymd, gb)
        {
        	var vSql = "";

        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/getData_hr501_02.jsp";
        	in_ds = "ds_list=ds_list";
        	out_ds = "ds_list=ds_list";
        	str_arg = " GB='" + gb + "'" +
        			  " YMD='" + ymd + "'";
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
        }

        this.fn_print = function(ymd, gb)
        {
        	var rdUrl = gv_svcUrl + "rpt/hr/HR501P_02.mrd";
        	var rdParam = "/rp [" + ymd + "][" + gb + "]";
        	var objNew = new ChildFrame();
        	objNew.init("common_print",0,0,null,null,0,0,"common::H_MRD.xfdl");
        	this.addChild("common_print",objNew);
        	//objNew.set_openalign("center middle");
        	objNew.set_autosize(false);
        	objNew.set_titletext("개인별 근무지 현황");
        	objNew.set_showtitlebar(true);
        	objNew.set_resizable(true);
        	objNew.showModal("common_print",this.getOwnerFrame(),{rdUrl:rdUrl, rdParam:rdParam},this,this.fn_common_print);
        }

        this.fn_common_print = function(strID, variant)
        {
        	this.removeChild("common_print");
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("HR501P_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
