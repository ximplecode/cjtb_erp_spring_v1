(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD8120F_GRID2");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1370,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("SD8120F_GRID2","0%","0",null,"100.00%","0%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_2");
            obj.set_formatid("default");
            obj.set_cellmovingtype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"80\"/><Column size=\"64\"/><Column size=\"220\"/><Column size=\"70\"/><Column size=\"48\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"78\"/><Column size=\"56\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"영업자\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" text=\"구분\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" text=\"거래처\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" text=\"작업일자\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" text=\"전표\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" text=\"적요\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" text=\"현금\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" text=\"어음\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"9\" text=\"대체\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"10\" text=\"금액계\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"11\" text=\"어음번호\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"12\" text=\"만기일\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"13\" text=\"발행인\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"14\" text=\"지급장소\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell expr=\"SALE_CD+&quot;)&quot;+E_NAME\" suppress=\"1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/><Cell col=\"1\" text=\"bind:CGB_NAME\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" suppress=\"1\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"2\" suppress=\"1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" expr=\"dataset.getRowLevel(currow)==1?&apos;&apos;:dataset.getRowLevel(currow)==2?&apos;&apos;:CUST_GB+&quot;-&quot;+CUST_CD\"/><Cell col=\"3\" text=\"bind:NAME\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" suppress=\"1\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"left\" expr=\"dataset.getRowLevel(currow)==1?&apos;&lt; 소 계 &gt;&apos;:dataset.getRowLevel(currow)==2?&apos;&lt;영업자계&gt;&apos;:NAME\"/><Cell col=\"4\" text=\"bind:S_DATE\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"5\" text=\"bind:JUN\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" text=\"bind:JUK2\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" text=\"bind:H_SUGM\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" suppress=\"0\" padding=\"0px 3px 0px 0px\"/><Cell col=\"8\" text=\"bind:B_SUGM\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"0\" padding=\"0px 3px 0px 0px\"/><Cell col=\"9\" text=\"bind:D_SUGM\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"0\" padding=\"0px 3px 0px 0px\"/><Cell col=\"10\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" expr=\"H_SUGM+B_SUGM+D_SUGM\" padding=\"0px 3px 0px 0px\"/><Cell col=\"11\" text=\"bind:BM_NO\" displaytype=\"normal\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:BM_DATE\" displaytype=\"date\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"0\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"13\" expr=\"BM_NAME\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"14\" expr=\"BM_BIGO\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"summary\"><Cell colspan=\"7\" text=\"&lt; 합 계 &gt;\"/><Cell col=\"7\" font=\"bold 11px/normal &quot;Gulim&quot;\" expr=\"dataset.getSum(&quot;H_SUGM&quot;)\" displaytype=\"number\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/><Cell col=\"8\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\" expr=\"dataset.getSum(&quot;B_SUGM&quot;)\" displaytype=\"number\" padding=\"0px 3px 0px 0px\"/><Cell col=\"9\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\" expr=\"dataset.getSum(&quot;D_SUGM&quot;)\" displaytype=\"number\" padding=\"0px 3px 0px 0px\"/><Cell col=\"10\" expr=\"dataset.getSum(&quot;H_SUGM&quot;) + dataset.getSum(&quot;B_SUGM&quot;) + dataset.getSum(&quot;D_SUGM&quot;)\" textAlign=\"right\" displaytype=\"number\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\" padding=\"0px 3px 0px 0px\"/><Cell col=\"11\" textAlign=\"right\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"12\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"13\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"14\" font=\"bold 11px/normal &quot;Gulim&quot;\"/></Band></Format></Formats>");
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
        this.addIncludeScript("SD8120F_GRID2.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD8120F_GRID2.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        /*
        this.SD8120F_GRID2_onsize = function(obj:nexacro.Form,e:nexacro.SizeEventInfo)
        {
        	this.setTimer(0,1);
        };

        this.SD8120F_GRID2_ontimer = function(obj:nexacro.Form,e:nexacro.TimerEventInfo)
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
        	this.lfn_grdAutofit(this.SD8110F_GRID1);
        };
        */
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.SD8120F_GRID2_onsize,this);
            this.addEventHandler("ontimer",this.SD8120F_GRID2_ontimer,this);
        };
        this.loadIncludeScript("SD8120F_GRID2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
