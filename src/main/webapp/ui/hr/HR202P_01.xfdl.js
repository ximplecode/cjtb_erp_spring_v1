(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR202P_01");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1246,543);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grd_01","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"154\"/><Column size=\"164\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"본부명\"/><Cell col=\"1\" text=\"팀명\"/><Cell col=\"2\" text=\"직급:R\"/><Cell col=\"3\" text=\"직급:M\"/><Cell col=\"4\" text=\"직급:E\"/><Cell col=\"5\" text=\"직급:S\"/><Cell col=\"6\" text=\"직급:X\"/><Cell col=\"7\" text=\"전체\"/></Band><Band id=\"body\"><Cell text=\"expr:comp.parent.fn_setText_col0(currow)\" suppress=\"1\" cssclass=\"expr:comp.parent.fn_setCss(currow)\"/><Cell col=\"1\" text=\"bind:BUSENM\" cssclass=\"expr:comp.parent.fn_setCss(currow)\"/><Cell col=\"2\" textAlign=\"center\" cssclass=\"expr:comp.parent.fn_setCss(currow)\" text=\"bind:LEVEL_CO1\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:LEVEL_CO2\" textAlign=\"center\" cssclass=\"expr:comp.parent.fn_setCss(currow)\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:LEVEL_CO3\" textAlign=\"center\" cssclass=\"expr:comp.parent.fn_setCss(currow)\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:LEVEL_CO4\" textAlign=\"center\" cssclass=\"expr:comp.parent.fn_setCss(currow)\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:LEVEL_CO_ETC\" textAlign=\"center\" cssclass=\"expr:comp.parent.fn_setCss(currow)\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:LEVEL_TOTAL\" textAlign=\"center\" cssclass=\"expr:comp.parent.fn_setCss(currow)\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell text=\"전체 합계\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"expr:comp.parent.fn_setSum(&quot;LEVEL_CO1&quot;)\" displaytype=\"number\"/><Cell col=\"3\" text=\"expr:comp.parent.fn_setSum(&quot;LEVEL_CO2&quot;)\" displaytype=\"number\"/><Cell col=\"4\" text=\"expr:comp.parent.fn_setSum(&quot;LEVEL_CO3&quot;)\" displaytype=\"number\"/><Cell col=\"5\" text=\"expr:comp.parent.fn_setSum(&quot;LEVEL_CO4&quot;)\" displaytype=\"number\"/><Cell col=\"6\" text=\"expr:comp.parent.fn_setSum(&quot;LEVEL_CO_ETC&quot;)\" displaytype=\"number\"/><Cell col=\"7\" text=\"expr:comp.parent.fn_setSum(&quot;LEVEL_TOTAL&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
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
        this.registerScript("HR202P_01.xfdl", function() {

        this.fn_setCss = function(nRow)
        {
        	var rt;

        	if (this.parent.parent.ds_01.getRowLevel(nRow) != 0)
        	{
        		rt = "hr_CssBG_level2";
        	}
        	else
        	{
        		rt = "";
        	}

        	return rt;
        }

        this.fn_setText_col0 = function(nRow)
        {
        	var rt;

        	if (this.parent.parent.ds_01.getRowLevel(nRow) != 0)
        	{
        		rt = this.parent.parent.ds_01.getColumn(nRow - 1, "FNAME") + " 합계";
        	}
        	else
        	{
        		rt = this.parent.parent.ds_01.getColumn(nRow, "FNAME");
        	}

        	return rt;
        }

        this.fn_setSum = function(colName)
        {
        	var rt;

        	rt = this.parent.parent.ds_01.getSum(colName);

        	return rt;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("HR202P_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
