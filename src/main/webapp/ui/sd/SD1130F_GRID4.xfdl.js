(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD1130F_GRID4");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1370,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("SD1130F_GRID4","0.00%","0",null,"100.00%","0.00%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_4");
            obj.set_formatid("default");
            obj.set_cellmovingtype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"77\"/><Column size=\"48\"/><Column size=\"173\"/><Column size=\"62\"/><Column size=\"135\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"도서코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" rowspan=\"2\" text=\"년판\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" rowspan=\"2\" text=\"도서명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" rowspan=\"2\" text=\"업체\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" rowspan=\"2\" text=\"업체명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" colspan=\"3\" text=\"입고\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" colspan=\"3\" text=\"반품\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"11\" colspan=\"3\" font=\"11px/normal &quot;Gulim&quot;\" text=\"출고\"/><Cell row=\"1\" col=\"5\" text=\"생산\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"6\" text=\"재생\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"7\" text=\"기타\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"8\" text=\"정상반\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"9\" text=\"이체반\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"10\" text=\"총)이체\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"11\" text=\"출고\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"12\" text=\"증정\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"13\" text=\"총)이체\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell suppress=\"1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" expr=\"dataset.getRowLevel(currow)==0? BOOK_CD : &quot;&quot;\"/><Cell col=\"1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\" suppress=\"1\" expr=\"dataset.getRowLevel(currow)==0 ? BYY : &quot;&quot;\"/><Cell col=\"2\" text=\"bind:BOOK_NM\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"1\" expr=\"dataset.getRowLevel(currow)==0? BOOK_NM : &quot;도서별 소계&quot;\"/><Cell col=\"3\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" expr=\"dataset.getRowLevel(currow)==0? CUST_GB + &quot;-&quot; + CUST_CD : &quot;&quot;\"/><Cell col=\"4\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" expr=\"dataset.getRowLevel(currow)==0? CUST_NM\"/><Cell col=\"5\" text=\"bind:IQTY1\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:IQTY2\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:IQTY3\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:BQTY1\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:BQTY2\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:BQTY3\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:CQTY1\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:CQTY2\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:CQTY3\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" textAlign=\"right\" displaytype=\"normal\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" textAlign=\"right\" displaytype=\"normal\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" expr=\"dataset.getSum(&apos;IQTY1&apos;);\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" expr=\"dataset.getSum(&apos;IQTY2&apos;);\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" expr=\"dataset.getSum(&apos;IQTY3&apos;);\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" expr=\"dataset.getSum(&apos;BQTY1&apos;);\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"9\" expr=\"dataset.getSum(&apos;BQTY2&apos;);\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"10\" expr=\"dataset.getSum(&apos;BQTY3&apos;);\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"11\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\" expr=\"dataset.getSum(&apos;CQTY1&apos;);\"/><Cell col=\"12\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\" expr=\"dataset.getSum(&apos;CQTY2&apos;);\"/><Cell col=\"13\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\" expr=\"dataset.getSum(&apos;CQTY3&apos;);\"/></Band></Format></Formats>");
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
        this.addIncludeScript("SD1130F_GRID4.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD1130F_GRID4.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        /*
        this.SD1040F_GRID1_ontimer = function(obj:nexacro.Form,e:nexacro.TimerEventInfo)
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
        	this.lfn_grdAutofit(this.SD1040F_GRID1);
        };

        this.SD1040F_GRID1_onsize = function(obj:nexacro.Form,e:nexacro.SizeEventInfo)
        {
        	this.setTimer(0,1);
        };
        */

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.SD1040F_GRID1_onsize,this);
            this.addEventHandler("ontimer",this.SD1040F_GRID1_ontimer,this);
            this.SD1130F_GRID4.addEventHandler("onsize",this.SD1040F_GRID1_onsize,this);
        };
        this.loadIncludeScript("SD1130F_GRID4.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
