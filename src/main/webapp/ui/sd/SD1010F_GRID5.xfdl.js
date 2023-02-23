(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD1010F_GRID5");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1370,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("SD1010F_GRID5","0%","0",null,"100.00%","0%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_5");
            obj.set_formatid("default");
            obj.set_cellmovingtype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"101\"/><Column size=\"48\"/><Column size=\"301\"/><Column size=\"117\"/><Column size=\"80\"/><Column size=\"145\"/><Column size=\"80\"/><Column size=\"105\"/><Column size=\"80\"/><Column size=\"347\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"도서코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" text=\"년판\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"도서명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" text=\"입고전표\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" text=\"업체\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" text=\"업체명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" text=\"입고수량\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" text=\"출고전표\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" text=\"출고수량\" tooltiptext=\"bind:CQTY\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"9\" text=\"비고\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:BOOK_CD\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;:&apos;&apos;\" expr=\"dataset.getRowLevel(currow)==0? BOOK_CD : &quot;도서 계&quot;\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:BYY\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;:&apos;&apos;\" suppress=\"1\" expr=\"dataset.getRowLevel(currow)==0? BYY : &quot;&quot;\"/><Cell col=\"2\" text=\"bind:BOOK_KEY\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;:&apos;&apos;\" suppress=\"1\"/><Cell col=\"3\" text=\"bind:JPNO\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;:&apos;&apos;\" suppress=\"1\"/><Cell col=\"4\" text=\"bind:CKEY\" suppress=\"1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;:&apos;&apos;\"/><Cell col=\"5\" text=\"bind:CUST_KEY\" suppress=\"1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;:&apos;&apos;\"/><Cell col=\"6\" text=\"bind:QTY\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;:&apos;&apos;\"/><Cell col=\"7\" text=\"bind:CJPNO\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;:&apos;&apos;\"/><Cell col=\"8\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;:&apos;&apos;\" text=\"bind:CQTY\"/><Cell col=\"9\" text=\"bind:BIGO\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;:&apos;&apos;\"/></Band><Band id=\"summary\"><Cell text=\"총계 \"/><Cell col=\"1\" text=\"expr:dataset.getRowCount()\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##\" textAlign=\"right\"/><Cell col=\"2\" textAlign=\"right\"/><Cell col=\"3\" textAlign=\"right\"/><Cell col=\"4\" textAlign=\"right\"/><Cell col=\"5\" textAlign=\"right\"/><Cell col=\"6\" expr=\"dataset.getSum(&apos;QTY&apos;);\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" textAlign=\"right\"/><Cell col=\"7\" textAlign=\"right\"/><Cell col=\"8\" expr=\"dataset.getSum(&apos;CQTY&apos;);\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" textAlign=\"right\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1370,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD1010F_GRID5.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD1010F_GRID5.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        this.SD1010F_GRID5_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.SD1010F_GRID5_ontimer = function(obj,e)
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
        	this.lfn_grdAutofit(this.SD1010F_GRID5);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.SD1010F_GRID5_onsize,this);
            this.addEventHandler("ontimer",this.SD1010F_GRID5_ontimer,this);
        };
        this.loadIncludeScript("SD1010F_GRID5.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
