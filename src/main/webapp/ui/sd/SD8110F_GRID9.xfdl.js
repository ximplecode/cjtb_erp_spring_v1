(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD8110F_GRID9");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1370,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("SD8110F_GRID9","0%","0",null,"100.00%","0%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_9");
            obj.set_formatid("default");
            obj.set_cellmovingtype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"64\"/><Column size=\"240\"/><Column size=\"70\"/><Column size=\"48\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"240\"/><Column size=\"115\"/><Column size=\"70\"/><Column size=\"78\"/><Column size=\"56\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" text=\"거래처\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"작업일자\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" text=\"전표\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" text=\"적요\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" text=\"적요 (1)\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" text=\"적요 (2)\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" text=\"연장역송금액\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" text=\"어음번호\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"9\" text=\"만기일자\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"10\" text=\"발행인\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"11\" text=\"지급장소\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" expr=\"dataset.getRowLevel(currow)==1?&apos;&apos;:CUST_GB+&quot;-&quot;+CUST_CD\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:CUST_NM\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"left\" expr=\"dataset.getRowLevel(currow)==1?&apos;&lt; 소 계 &gt;&apos;:CUST_NM\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:S_DATE\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"nulltext\" suppress=\"1\"/><Cell col=\"3\" text=\"bind:JUN\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" text=\"bind:JUKYO_CD\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" text=\"bind:JUK1\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"left\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" text=\"bind:JUK2\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"left\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" text=\"bind:D_SUGM\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" font=\"11px/normal &quot;Gulim&quot;\" padding=\"0px 3px 0px 0px\"/><Cell col=\"8\" text=\"bind:BM_NO\" displaytype=\"normal\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:BM_DATE\" displaytype=\"date\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"10\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:BM_NAME\"/><Cell col=\"11\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:BM_BIGO\"/></Band><Band id=\"summary\"><Cell colspan=\"7\" textAlign=\"center\" font=\"bold 11px/normal &quot;Gulim&quot;\" text=\"&lt; 합 계 &gt;\"/><Cell col=\"7\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\" expr=\"dataset.getSum(&quot;D_SUGM&quot;)\" displaytype=\"number\" padding=\"0px 3px 0px 0px\"/><Cell col=\"8\" textAlign=\"right\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"9\"/><Cell col=\"10\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"11\" font=\"bold 11px/normal &quot;Gulim&quot;\"/></Band></Format></Formats>");
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
        this.addIncludeScript("SD8110F_GRID9.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD8110F_GRID9.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        /*
        this.SD8110F_GRID8_onsize = function(obj:nexacro.Form,e:nexacro.SizeEventInfo)
        {
        	this.setTimer(0,1);
        };

        this.SD8110F_GRID8_ontimer = function(obj:nexacro.Form,e:nexacro.TimerEventInfo)
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
        	this.lfn_grdAutofit(this.SD8110F_GRID2);
        };
        */

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.SD8110F_GRID8_onsize,this);
            this.addEventHandler("ontimer",this.SD8110F_GRID8_ontimer,this);
            this.addEventHandler("onload",this.SD8110F_GRID9_onload,this);
        };
        this.loadIncludeScript("SD8110F_GRID9.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
