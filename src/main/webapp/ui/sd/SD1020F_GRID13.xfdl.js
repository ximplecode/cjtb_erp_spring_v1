(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD1020F_GRID13");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1370,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("SD1020F_GRID13","0.00%","0",null,"100.00%","0.00%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_13");
            obj.set_formatid("default");
            obj.set_cellmovingtype("col");
            obj.set_cellsizebandtype("nohead");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"72\"/><Column size=\"72\"/><Column size=\"72\"/><Column size=\"256\"/><Column size=\"72\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"ISBN\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" rowspan=\"2\" text=\"도서코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" rowspan=\"2\" text=\"년판\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" rowspan=\"2\" text=\"도서명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" rowspan=\"2\" text=\"구분\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" colspan=\"2\" font=\"11px/normal &quot;Gulim&quot;\" text=\"출고\"/><Cell col=\"7\" colspan=\"2\" font=\"11px/normal &quot;Gulim&quot;\" text=\"증정\"/><Cell col=\"9\" colspan=\"2\" font=\"11px/normal &quot;Gulim&quot;\" text=\"유증\"/><Cell col=\"11\" colspan=\"2\" font=\"11px/normal &quot;Gulim&quot;\" text=\"이체\"/><Cell col=\"13\" colspan=\"2\" font=\"11px/normal &quot;Gulim&quot;\" text=\"계\"/><Cell col=\"15\" colspan=\"2\" font=\"11px/normal &quot;Gulim&quot;\" text=\"장소\"/><Cell col=\"17\" colspan=\"2\" font=\"11px/normal &quot;Gulim&quot;\" text=\"재고\"/><Cell row=\"1\" col=\"5\" text=\"수량\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"6\" text=\"금액\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"7\" text=\"수량\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"8\" text=\"금액\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"9\" text=\"수량\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"10\" text=\"금액\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"11\" text=\"수량\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"12\" text=\"금액\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"13\" text=\"수량\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"14\" text=\"금액\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"15\" text=\"장소1\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"16\" text=\"장소2\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"17\" text=\"재고1\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"18\" text=\"재고2\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:ISBN\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"0\" suppressalign=\"first\"/><Cell col=\"1\" text=\"bind:BOOK_CD\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"0\" suppressalign=\"first\"/><Cell col=\"2\" text=\"bind:BYY\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"0\" suppressalign=\"first\"/><Cell col=\"3\" text=\"bind:BOOK_NAME\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"0\" suppressalign=\"first\"/><Cell col=\"4\" text=\"bind:B_GUNM\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"0\" suppressalign=\"first\"/><Cell col=\"5\" text=\"bind:QTY1\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" suppressalign=\"first\"/><Cell col=\"6\" text=\"bind:AMT1\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" suppressalign=\"first\"/><Cell col=\"7\" text=\"bind:QTY2\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" suppressalign=\"first\"/><Cell col=\"8\" text=\"bind:AMT2\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" suppressalign=\"first\"/><Cell col=\"9\" text=\"bind:QTY3\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" suppressalign=\"first\"/><Cell col=\"10\" text=\"bind:AMT3\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" suppressalign=\"first\"/><Cell col=\"11\" text=\"bind:QTY4\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" suppressalign=\"first\"/><Cell col=\"12\" text=\"bind:AMT4\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" suppressalign=\"first\"/><Cell col=\"13\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" suppressalign=\"first\" expr=\"QTY1+QTY2+QTY3+QTY4\"/><Cell col=\"14\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" suppressalign=\"first\" expr=\"AMT1+AMT2+AMT3+AMT4\"/><Cell col=\"15\" text=\"bind:JANG1_JEGO\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" suppressalign=\"first\"/><Cell col=\"16\" text=\"bind:JANG2_JEGO\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" suppressalign=\"first\"/><Cell col=\"17\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" suppressalign=\"first\" expr=\"J1_JEGO &lt; 0 &amp;&amp; J2_JEGO &gt; 0 ? J2_JEGO &lt;= (J1_JEGO * -1) ? J2_JEGO + J1_JEGO : 0 : J1_JEGO &gt;= (J2_JEGO * -1) &amp;&amp; J2_JEGO &lt; 0 ? J1_JEGO + J2_JEGO : J1_JEGO\"/><Cell col=\"18\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" suppressalign=\"first\" expr=\"J1_JEGO &lt; 0 &amp;&amp; J2_JEGO &gt; 0 ? J2_JEGO &lt;= (J1_JEGO * -1) ? 0 : J2_JEGO + J1_JEGO : J1_JEGO &gt;= (J2_JEGO * -1) &amp;&amp; J2_JEGO &lt;0 ? 0 : J2_JEGO\"/></Band><Band id=\"summary\"><Cell textAlign=\"center\" font=\"bold 11px/normal &quot;Gulim&quot;\" text=\"총계\"/><Cell col=\"1\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\" text=\"expr:dataset.getRowCount()\"/><Cell col=\"2\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\" text=\"expr:dataset.getRowCount()\"/><Cell col=\"3\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\" text=\"expr:dataset.getRowCount()\"/><Cell col=\"5\" expr=\"dataset.getSum(&apos;QTY1&apos;);\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" expr=\"dataset.getSum(&apos;AMT1&apos;);\" textAlign=\"right\" displaytype=\"currency\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" expr=\"dataset.getSum(&apos;QTY2&apos;);\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" expr=\"dataset.getSum(&apos;AMT2&apos;);\" textAlign=\"right\" displaytype=\"currency\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"9\" expr=\"dataset.getSum(&apos;QTY3&apos;);\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"10\" expr=\"dataset.getSum(&apos;AMT3&apos;);\" textAlign=\"right\" displaytype=\"currency\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"11\" expr=\"dataset.getSum(&apos;QTY4&apos;);\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"12\" expr=\"dataset.getSum(&apos;AMT4&apos;);\" textAlign=\"right\" displaytype=\"currency\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"13\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\" expr=\"dataset.getSum(&apos;QTY1+QTY2+QTY3+QTY4&apos;);\"/><Cell col=\"14\" textAlign=\"right\" displaytype=\"currency\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\" expr=\"dataset.getSum(&apos;AMT1+AMT2+AMT3+AMT4&apos;);\"/><Cell col=\"15\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\" expr=\"dataset.getSum(&apos;JANG1_JEGO&apos;);\"/><Cell col=\"16\" textAlign=\"right\" displaytype=\"currency\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\" expr=\"dataset.getSum(&apos;JANG2_JEGO&apos;);\"/><Cell col=\"17\" textAlign=\"right\" displaytype=\"number\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"18\" textAlign=\"right\" displaytype=\"number\" font=\"bold 11px/normal &quot;Gulim&quot;\"/></Band></Format></Formats>");
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
        this.addIncludeScript("SD1020F_GRID13.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD1020F_GRID13.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        this.SD1020F_GRID13_onsize = function(obj,e)
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
        	this.lfn_grdAutofit(this.SD1020F_GRID13);
        };

        this.SD1020F_GRID13_ontimer = function(obj,e)
        {
        	this.setTimer(0,1);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.SD1020F_GRID13_onsize,this);
            this.addEventHandler("ontimer",this.SD1020F_GRID13_ontimer,this);
        };
        this.loadIncludeScript("SD1020F_GRID13.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
