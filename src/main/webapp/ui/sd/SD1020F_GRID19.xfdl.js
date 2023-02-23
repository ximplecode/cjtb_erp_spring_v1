(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD1020F_GRID19");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1370,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("SD1020F_GRID19","0.00%","0",null,"100.00%","0.00%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_19");
            obj.set_formatid("default");
            obj.set_cellmovingtype("col");
            obj.set_cellsizebandtype("nohead");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"53\"/><Column size=\"97\"/><Column size=\"61\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"58\"/><Column size=\"77\"/><Column size=\"45\"/><Column size=\"97\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"62\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" colspan=\"2\" text=\"업체코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" rowspan=\"2\" font=\"11px/normal &quot;Gulim&quot;\" text=\"거래처명\"/><Cell col=\"3\" rowspan=\"2\" font=\"11px/normal &quot;Gulim&quot;\" text=\"일자\"/><Cell col=\"4\" rowspan=\"2\" colspan=\"2\" font=\"11px/normal &quot;Gulim&quot;\" text=\"전표번호\"/><Cell col=\"6\" rowspan=\"2\" font=\"11px/normal &quot;Gulim&quot;\" text=\"유형명\"/><Cell col=\"7\" rowspan=\"2\" text=\"도서코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" rowspan=\"2\" text=\"년판\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"9\" rowspan=\"2\" font=\"11px/normal &quot;Gulim&quot;\" text=\"도서명\"/><Cell col=\"10\" rowspan=\"2\" text=\"정상출고율\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"11\" rowspan=\"2\" text=\"할인출고율\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"12\" rowspan=\"2\" font=\"11px/normal &quot;Gulim&quot;\" text=\"수량\"/><Cell col=\"13\" rowspan=\"2\" text=\"정가\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"14\" rowspan=\"2\" text=\"정상단가\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"15\" rowspan=\"2\" text=\"할인단가\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"16\" rowspan=\"2\" text=\"정상금액\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"17\" rowspan=\"2\" text=\"할인금액\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"18\" rowspan=\"2\" text=\"차액\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:CUST_GB\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"1\" suppressalign=\"first\"/><Cell col=\"1\" text=\"bind:CUST_CD\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"1\" suppressalign=\"first\"/><Cell col=\"2\" text=\"bind:CUST_NM\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"1\" suppressalign=\"first\" expr=\"dataset.getRowLevel(currow)==0? CUST_NM : dataset.getRowLevel(currow)==1? &quot;거래처별 소계&quot; : &quot;&quot;\"/><Cell col=\"3\" text=\"bind:BYMD\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"1\" suppressalign=\"first\"/><Cell col=\"4\" text=\"bind:NUM\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"0\" suppressalign=\"first\"/><Cell col=\"5\" text=\"bind:NUMS\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"0\" suppressalign=\"first\"/><Cell col=\"6\" text=\"bind:YOUHYUNG\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"0\" suppressalign=\"first\"/><Cell col=\"7\" text=\"bind:BOOK_CD\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"0\" suppressalign=\"first\"/><Cell col=\"8\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:BYY\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/><Cell col=\"9\" text=\"bind:BOOK_NAME\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"0\" suppressalign=\"first\"/><Cell col=\"10\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:ORI_CYUL\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\"/><Cell col=\"11\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:CYUL\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:QTY\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" suppressalign=\"first\"/><Cell col=\"13\" text=\"bind:DAN\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"0\" suppressalign=\"first\" displaytype=\"currency\"/><Cell col=\"14\" text=\"bind:ORI_COST\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"0\" suppressalign=\"first\" displaytype=\"currency\"/><Cell col=\"15\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"0\" suppressalign=\"first\" displaytype=\"currency\" text=\"bind:COST\"/><Cell col=\"16\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"0\" suppressalign=\"first\" displaytype=\"currency\" text=\"bind:ORI_AMT\"/><Cell col=\"17\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"0\" suppressalign=\"first\" displaytype=\"currency\" text=\"bind:AMT\"/><Cell col=\"18\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"0\" suppressalign=\"first\" displaytype=\"currency\" expr=\"ORI_AMT-AMT\"/></Band><Band id=\"summary\"><Cell textAlign=\"center\" font=\"bold 11px/normal &quot;Gulim&quot;\" text=\"총계\"/><Cell col=\"1\" textAlign=\"center\" font=\"bold 11px/normal &quot;Gulim&quot;\" text=\"총계\"/><Cell col=\"2\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"9\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"10\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"11\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"12\" expr=\"dataset.getSum(&apos;QTY&apos;);\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"13\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\" expr=\"dataset.getSum(&apos;DAN&apos;);\" displaytype=\"currency\" maskeditformat=\"###,###,###,###,##0\"/><Cell col=\"14\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\" expr=\"dataset.getSum(&apos;ORI_COST&apos;);\" displaytype=\"currency\" maskeditformat=\"###,###,###,###,##0\"/><Cell col=\"15\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\" expr=\"dataset.getSum(&apos;COST&apos;);\" displaytype=\"currency\" maskeditformat=\"###,###,###,###,##0\"/><Cell col=\"16\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\" expr=\"dataset.getSum(&apos;ORI_AMT&apos;);\" displaytype=\"currency\" maskeditformat=\"###,###,###,###,##0\"/><Cell col=\"17\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\" expr=\"dataset.getSum(&apos;AMT&apos;);\" displaytype=\"currency\" maskeditformat=\"###,###,###,###,##0\"/><Cell col=\"18\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\" expr=\"dataset.getSum(&apos;ORI_AMT-AMT&apos;);\" displaytype=\"currency\" maskeditformat=\"###,###,###,###,##0\"/></Band></Format></Formats>");
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
        this.addIncludeScript("SD1020F_GRID19.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD1020F_GRID19.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        this.SD1020F_GRID19_onsize = function(obj,e)
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
        	this.lfn_grdAutofit(this.SD1020F_GRID19);
        };

        this.SD1020F_GRID19_ontimer = function(obj,e)
        {
        	this.setTimer(0,1);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.SD1020F_GRID19_onsize,this);
            this.addEventHandler("ontimer",this.SD1020F_GRID19_ontimer,this);
        };
        this.loadIncludeScript("SD1020F_GRID19.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
