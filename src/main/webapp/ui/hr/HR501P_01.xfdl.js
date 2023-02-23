(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR501P_01");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1246,543);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSENAME\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION01\" type=\"INT\" size=\"256\"/><Column id=\"POSITION02\" type=\"INT\" size=\"256\"/><Column id=\"POSITION03\" type=\"INT\" size=\"256\"/><Column id=\"POSITION04\" type=\"INT\" size=\"256\"/><Column id=\"POSITION05\" type=\"INT\" size=\"256\"/><Column id=\"POSITION06\" type=\"INT\" size=\"256\"/><Column id=\"POSITION07\" type=\"INT\" size=\"256\"/><Column id=\"POSITION08\" type=\"INT\" size=\"256\"/><Column id=\"POSITION09\" type=\"INT\" size=\"256\"/><Column id=\"POSITION10\" type=\"INT\" size=\"256\"/><Column id=\"POSITION_TOTAL\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"250\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"부서명\"/><Cell col=\"1\" text=\"본사\"/><Cell col=\"2\" text=\"R&amp;D\"/><Cell col=\"3\" text=\"스타벨리\"/><Cell col=\"4\" text=\"리더스타워\"/><Cell col=\"5\" text=\"인천\"/><Cell col=\"6\" text=\"삼지전자\"/><Cell col=\"7\" text=\"SK트윈타워\"/><Cell col=\"8\" text=\"가산테라타워\"/><Cell col=\"9\" text=\"AP타워\"/><Cell col=\"10\" text=\"한신IT타워\"/><Cell col=\"11\" text=\"전체\"/></Band><Band id=\"body\"><Cell text=\"bind:BUSENAME\"/><Cell col=\"1\" text=\"bind:POSITION01\" displaytype=\"number\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:POSITION02\" displaytype=\"number\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:POSITION03\" displaytype=\"number\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:POSITION04\" displaytype=\"number\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:POSITION05\" displaytype=\"number\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:POSITION06\" displaytype=\"number\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:POSITION07\" displaytype=\"number\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:POSITION08\" displaytype=\"number\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:POSITION09\" displaytype=\"number\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:POSITION10\" displaytype=\"number\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:POSITION_TOTAL\" displaytype=\"number\" textAlign=\"center\"/></Band><Band id=\"summary\"><Cell text=\"합 계\"/><Cell col=\"1\" text=\"expr:comp.parent.fn_setSum(&quot;POSITION01&quot;)\"/><Cell col=\"2\" text=\"expr:comp.parent.fn_setSum(&quot;POSITION02&quot;)\"/><Cell col=\"3\" text=\"expr:comp.parent.fn_setSum(&quot;POSITION03&quot;)\"/><Cell col=\"4\" text=\"expr:comp.parent.fn_setSum(&quot;POSITION04&quot;)\"/><Cell col=\"5\" text=\"expr:comp.parent.fn_setSum(&quot;POSITION05&quot;)\"/><Cell col=\"6\" text=\"expr:comp.parent.fn_setSum(&quot;POSITION06&quot;)\"/><Cell col=\"7\" text=\"expr:comp.parent.fn_setSum(&quot;POSITION07&quot;)\"/><Cell col=\"8\" text=\"expr:comp.parent.fn_setSum(&quot;POSITION08&quot;)\"/><Cell col=\"9\" text=\"expr:comp.parent.fn_setSum(&quot;POSITION09&quot;)\"/><Cell col=\"10\" text=\"expr:comp.parent.fn_setSum(&quot;POSITION10&quot;)\"/><Cell col=\"11\" text=\"expr:comp.parent.fn_setSum(&quot;POSITION_TOTAL&quot;)\"/></Band></Format></Formats>");
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
        this.addIncludeScript("HR501P_01.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("HR501P_01.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("HR501P_01.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");

        this.fn_setSum = function(colName)
        {
        	var rt;
        	rt = this.ds_list.getSum(colName);

        	return rt;
        }

        this.fn_getData = function(ymd, gb)
        {
        	var vSql = "";

        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/hr/getData_hr501_01.jsp";
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
        	var rdUrl = gv_svcUrl + "rpt/hr/HR501P_01.mrd";
        	var rdParam = "/rp [" + ymd + "][" + gb + "]";
        	var objNew = new ChildFrame();
        	objNew.init("common_print",0,0,null,null,0,0,"common::H_MRD.xfdl");
        	this.addChild("common_print",objNew);
        	//objNew.set_openalign("center middle");
        	objNew.set_autosize(false);
        	objNew.set_titletext("근무지별 인원 현황");
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
        this.loadIncludeScript("HR501P_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
