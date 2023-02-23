(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD1010F_GRID6");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1370,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("SD1010F_GRID6","0%","0",null,"100.00%","0%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_6");
            obj.set_formatid("default");
            obj.set_cellmovingtype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"107\"/><Column size=\"80\"/><Column size=\"101\"/><Column size=\"57\"/><Column size=\"301\"/><Column size=\"75\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"84\"/><Column size=\"433\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"일자\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" text=\"전표\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"업체\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" text=\"업체명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" text=\"번호\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" text=\"도서코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" text=\"년판\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" text=\"도서명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" text=\"도서구분\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"9\" text=\"생산\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"10\" text=\"재생\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"11\" text=\"대체\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"12\" text=\"단가\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"13\" text=\"금액\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"14\" text=\"비고\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:BYMD\" suppress=\"1\" expr=\"dataset.getRowLevel(currow)==0? BYMD : dataset.getRowLevel(currow)==1? BYMD : &quot;일자별소계&quot;\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/><Cell col=\"1\" text=\"bind:NUM\" suppress=\"2\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:CKEY\" suppress=\"3\" expr=\"dataset.getRowLevel(currow)==0? CKEY : dataset.getRowLevel(currow)==1? &quot;전표계&gt;&gt;&quot; : &quot;&quot;\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/><Cell col=\"3\" text=\"bind:CUST_KEY\" suppress=\"3\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"bind:NUMS\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/><Cell col=\"5\" text=\"bind:BOOK_CD\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/><Cell col=\"6\" text=\"bind:BYY\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/><Cell col=\"7\" text=\"bind:BOOK_KEY\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/><Cell col=\"8\" text=\"bind:B_GUNM\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/><Cell col=\"9\" text=\"bind:QTY1\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/><Cell col=\"10\" text=\"bind:QTY2\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/><Cell col=\"11\" text=\"bind:QTY3\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/><Cell col=\"12\" text=\"bind:COST\" displaytype=\"currency\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/><Cell col=\"13\" text=\"bind:AMT\" displaytype=\"currency\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/><Cell col=\"14\" text=\"bind:BIGO\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/></Band><Band id=\"summary\"><Cell text=\"총계 \"/><Cell col=\"1\" text=\"expr:dataset.getRowCount()\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" textAlign=\"right\"/><Cell col=\"2\" textAlign=\"right\"/><Cell col=\"3\" textAlign=\"right\"/><Cell col=\"4\" textAlign=\"right\"/><Cell col=\"5\" textAlign=\"right\"/><Cell col=\"6\" textAlign=\"right\"/><Cell col=\"7\" textAlign=\"right\"/><Cell col=\"8\" textAlign=\"right\"/><Cell col=\"9\" expr=\"dataset.getSum(&apos;QTY1&apos;);\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" textAlign=\"right\"/><Cell col=\"10\" expr=\"dataset.getSum(&apos;QTY2&apos;);\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" textAlign=\"right\"/><Cell col=\"11\" expr=\"dataset.getSum(&apos;QTY3&apos;);\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" textAlign=\"right\"/><Cell col=\"12\" displaytype=\"currency\" textAlign=\"right\"/><Cell col=\"13\" displaytype=\"currency\" textAlign=\"right\"/><Cell col=\"14\"/></Band></Format></Formats>");
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
        this.addIncludeScript("SD1010F_GRID6.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD1010F_GRID6.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        this.SD1010F_GRID6_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.SD1010F_GRID6_ontimer = function(obj,e)
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
        	this.lfn_grdAutofit(this.SD1010F_GRID6);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.SD1010F_GRID6_onsize,this);
            this.addEventHandler("ontimer",this.SD1010F_GRID6_ontimer,this);
        };
        this.loadIncludeScript("SD1010F_GRID6.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
