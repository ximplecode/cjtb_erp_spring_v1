(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED164F_GRID2");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("Grid00","0","0","100.00%","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"240\"/><Column size=\"35\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"35\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"35\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"34\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"도서코드\"/><Cell col=\"1\" text=\"도서명\"/><Cell col=\"2\" text=\"년판\"/><Cell col=\"3\" text=\"저자명\"/><Cell col=\"4\" text=\"저자직종\"/><Cell col=\"5\" text=\"정산구분\"/><Cell col=\"6\" text=\"해당부서\"/><Cell col=\"7\" text=\"담당자\"/><Cell col=\"8\" text=\"정가\"/><Cell col=\"9\" text=\"인세비율\" wordWrap=\"char\"/><Cell col=\"10\" text=\"지급일자\"/><Cell col=\"11\" text=\"인세총액\"/><Cell col=\"12\" text=\"기정산금액\"/><Cell col=\"13\" text=\"지급비율\" wordWrap=\"char\"/><Cell col=\"14\" text=\"당해년도 인세지급액\" wordWrap=\"char\"/><Cell col=\"15\" text=\"계약금\"/><Cell col=\"16\" text=\"매절원고료\"/><Cell col=\"17\" text=\"실지급액\"/></Band><Band id=\"body\"><Cell text=\"bind:BOOKMST_CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:BOOKNAME\"/><Cell col=\"2\" text=\"bind:BOOKMST_YEAR\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:ATHR_NAME\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:JOB_NAME\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:ROYALTY_NAME\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:SECTION_NAME\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:EMPLOYEE_NAME\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:PRICE\"/><Cell col=\"9\" expr=\"ROYALTYRATE + &quot;%&quot;\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:PAYDATE\" textAlign=\"center\"/><Cell col=\"11\" displaytype=\"number\" text=\"bind:TOTAL_AMOUNT\"/><Cell col=\"12\" text=\"bind:PRE_AMOUNT\"/><Cell col=\"13\" expr=\"PAYRATE  +  &quot;%&quot;\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:YEAR_PAYAMOUNT\"/><Cell col=\"15\" text=\"bind:DOWN_PAYMENT\"/><Cell col=\"16\" text=\"bind:MANUSCRIPT_AMOUNT\"/><Cell col=\"17\" text=\"bind:REAL_PAYAMOUNT\"/></Band><Band id=\"summary\"><Cell colspan=\"11\" text=\"총합계\"/><Cell col=\"11\" displaytype=\"number\" expr=\"comp.parent.fn_sum(&quot;TOTAL_AMOUNT&quot;, &quot;11&quot;)\"/><Cell col=\"12\" expr=\"comp.parent.fn_sum(&quot;PRE_AMOUNT&quot;, &quot;12&quot;)\" displaytype=\"number\"/><Cell col=\"13\"/><Cell col=\"14\" expr=\"comp.parent.fn_sum(&quot;YEAR_PAYAMOUNT&quot;, &quot;14&quot;)\" displaytype=\"number\"/><Cell col=\"15\" expr=\"comp.parent.fn_sum(&quot;DOWN_PAYMENT&quot;, &quot;15&quot;)\" displaytype=\"number\"/><Cell col=\"16\" expr=\"comp.parent.fn_sum(&quot;MANUSCRIPT_AMOUNT&quot;, &quot;16&quot;)\" displaytype=\"number\"/><Cell col=\"17\" expr=\"comp.parent.fn_sum(&quot;REAL_PAYAMOUNT&quot;, &quot;17&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ED164F_GRID2.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("ED164F_GRID2.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        this.ED164F_GRID2_onload = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.ED164F_GRID2_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.ED164F_GRID2_ontimer = function(obj,e)
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

        this.fn_sum = function(colName, colNo)
        {
            var nSum = 0;
            for(var i=0; i < this.parent.parent.ds_list2.rowcount; i++)
        	{
                if(this.parent.parent.ds_list2.getColumn(i,"BOOK_ROYALTY_KIND") != this.parent.parent.ds_list2.getColumn(i-1,"BOOK_ROYALTY_KIND"))
        			nSum+=nexacro.toNumber(this.parent.parent.ds_list2.getColumn(i,colName));
            }

            return nSum;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ED164F_GRID2_onload,this);
            this.addEventHandler("onsize",this.ED164F_GRID2_onsize,this);
            this.addEventHandler("ontimer",this.ED164F_GRID2_ontimer,this);
        };
        this.loadIncludeScript("ED164F_GRID2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
