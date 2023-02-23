(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD1020F_GRID7");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1370,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("SD1020F_GRID7","0.00%","0",null,"100.00%","0.00%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_7");
            obj.set_formatid("default");
            obj.set_cellmovingtype("col");
            obj.set_cellsizebandtype("nohead");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"72\"/><Column size=\"72\"/><Column size=\"256\"/><Column size=\"97\"/><Column size=\"97\"/><Column size=\"97\"/><Column size=\"70\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"거래처구분\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" rowspan=\"2\" text=\"거래처코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" rowspan=\"2\" text=\"거래처명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" rowspan=\"2\" colspan=\"2\" font=\"11px/normal &quot;Gulim&quot;\" text=\"도서명\"/><Cell col=\"5\" rowspan=\"2\" text=\"유형\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" rowspan=\"2\" font=\"11px/normal &quot;Gulim&quot;\" text=\"수량\"/><Cell col=\"7\" rowspan=\"2\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:CUST_GB\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"1\" suppressalign=\"first\"/><Cell col=\"1\" text=\"bind:CUST_CD\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"1\" suppressalign=\"first\"/><Cell col=\"2\" text=\"bind:CUST_NM\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"1\" suppressalign=\"first\"/><Cell col=\"3\" text=\"bind:BOOK_CD\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"1\" suppressalign=\"first\"/><Cell col=\"4\" text=\"bind:HAK\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"1\" suppressalign=\"first\"/><Cell col=\"5\" text=\"bind:YOUHYUNG\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"0\" suppressalign=\"first\"/><Cell col=\"6\" text=\"bind:QTY\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" suppressalign=\"first\"/><Cell col=\"7\" text=\"bind:AMT\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" suppressalign=\"first\"/></Band><Band id=\"summary\"><Cell textAlign=\"center\" font=\"bold 11px/normal &quot;Gulim&quot;\" text=\"총계\" suppressalign=\"first\"/><Cell col=\"1\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\" text=\"expr:dataset.getRowCount()\"/><Cell col=\"2\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" expr=\"dataset.getSum(&apos;QTY&apos;);\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" expr=\"dataset.getSum(&apos;AMT&apos;);\" textAlign=\"right\" displaytype=\"currency\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/></Band></Format></Formats>");
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
        this.addIncludeScript("SD1020F_GRID7.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD1020F_GRID7.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        this.SD1020F_GRID7_onsize = function(obj,e)
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
        	this.lfn_grdAutofit(this.SD1020F_GRID7);
        };

        this.SD1020F_GRID7_ontimer = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.SD1020F_GRID7_onsize,this);
            this.addEventHandler("ontimer",this.SD1020F_GRID7_ontimer,this);
        };
        this.loadIncludeScript("SD1020F_GRID7.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
