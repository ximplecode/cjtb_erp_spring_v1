(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD1050F_GRID1");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1370,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("SD1050F_GRID1","0.00%","0",null,"100.00%","0.00%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_1");
            obj.set_formatid("default");
            obj.set_cellmovingtype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"61\"/><Column size=\"50\"/><Column size=\"87\"/><Column size=\"61\"/><Column size=\"197\"/><Column size=\"150\"/><Column size=\"65\"/><Column size=\"50\"/><Column size=\"84\"/><Column size=\"84\"/><Column size=\"84\"/><Column size=\"150\"/><Column size=\"65\"/><Column size=\"50\"/><Column size=\"84\"/><Column size=\"84\"/><Column size=\"84\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"일자\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" rowspan=\"2\" text=\"전표\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" rowspan=\"2\" text=\"도서코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" rowspan=\"2\" text=\"년판\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" rowspan=\"2\" text=\"도서명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" colspan=\"6\" font=\"11px/normal &quot;Gulim&quot;\" text=\"이체반품\"/><Cell col=\"11\" colspan=\"6\" font=\"11px/normal &quot;Gulim&quot;\" text=\"이체출고 총판\"/><Cell row=\"1\" col=\"5\" text=\"총판명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"6\" text=\"반품전표\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"7\" text=\"율\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"8\" text=\"수량\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"9\" text=\"단가\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"10\" text=\"금액\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"11\" text=\"총판명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"12\" text=\"출고전표\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"13\" text=\"율\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"14\" text=\"수량\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"15\" text=\"단가\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"16\" text=\"금액\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:BYMD\" suppress=\"1\" expr=\"dataset.getRowLevel(currow)==0? BYMD : dataset.getRowLevel(currow)==1? &quot;&quot; : &quot;일자별소계&quot;\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" displaytype=\"normal\"/><Cell col=\"1\" text=\"bind:JPNO\" suppress=\"1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" expr=\"dataset.getRowLevel(currow)==0? JPNO : dataset.getRowLevel(currow)==1? &quot;전표 계 &quot; : &quot;&quot;\"/><Cell col=\"2\" text=\"bind:BOOK_CD\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" text=\"bind:BYY\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\" suppress=\"0\"/><Cell col=\"4\" text=\"bind:BOOK_NM\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"0\"/><Cell col=\"5\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" suppress=\"1\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\" text=\"bind:CUST_NM\"/><Cell col=\"6\" text=\"bind:BJPNO\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" text=\"bind:BCYUL\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" suppress=\"0\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:BQTY\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:BCOST\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:BAMT\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"11\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" suppress=\"1\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\" text=\"bind:ICUST_NM\"/><Cell col=\"12\" text=\"bind:CJPNO\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"13\" text=\"bind:CCYUL\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" suppress=\"0\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:CQTY\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"15\" text=\"bind:CCOST\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"16\" text=\"bind:CAMT\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\"/></Band><Band id=\"summary\"><Cell text=\"총계 \" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" textAlign=\"right\" displaytype=\"normal\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" expr=\"dataset.getSum(&apos;BQTY&apos;);\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"9\" expr=\"dataset.getSum(&apos;BCOST&apos;);\" textAlign=\"right\" displaytype=\"currency\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"10\" expr=\"dataset.getSum(&apos;BAMT&apos;);\" textAlign=\"right\" displaytype=\"currency\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"11\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"12\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"13\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"14\" expr=\"dataset.getSum(&apos;CQTY&apos;);\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"15\" expr=\"dataset.getSum(&apos;CCOST&apos;);\" textAlign=\"right\" displaytype=\"currency\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"16\" expr=\"dataset.getSum(&apos;CAMT&apos;);\" textAlign=\"right\" displaytype=\"currency\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/></Band></Format></Formats>");
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
        this.addIncludeScript("SD1050F_GRID1.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD1050F_GRID1.xfdl", function() {
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

        };
        this.loadIncludeScript("SD1050F_GRID1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
