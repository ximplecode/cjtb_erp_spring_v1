(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD1030F_GRID3");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1370,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("SD1030F_GRID3","0.00%","0",null,"100.00%","0.00%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_3");
            obj.set_formatid("default");
            obj.set_cellmovingtype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"87\"/><Column size=\"183\"/><Column size=\"51\"/><Column size=\"44\"/><Column size=\"75\"/><Column size=\"59\"/><Column size=\"55\"/><Column size=\"248\"/><Column size=\"84\"/><Column size=\"84\"/><Column size=\"289\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"거래처\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" text=\"거래처명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" colspan=\"2\" text=\"전표번호\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" text=\"도서코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" text=\"년판\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" text=\"구분\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" text=\"도서명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" text=\"재생\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"9\" text=\"대체\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"10\" text=\"비고\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:CKEY\" suppress=\"1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" text=\"bind:CUST_KEY\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\" expr=\"dataset.getRowLevel(currow)==0? CUST_KEY : &quot;거래처별소계&quot;\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:NUM\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" text=\"bind:NUMS\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" text=\"bind:BOOK_CD\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" text=\"bind:BYY\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" text=\"bind:B_GUNM\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" text=\"bind:BOOK_KEY\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" suppress=\"0\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:QTY_JAE\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:QTY_DAE\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:BIGO\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"summary\"><Cell textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\" text=\"총계 \"/><Cell col=\"1\" font=\"bold 11px/normal &quot;Gulim&quot;\" text=\"expr:dataset.getRowCount()\" maskeditformat=\"###,###,###,###,##0\" edittype=\"mask\"/><Cell col=\"2\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" textAlign=\"right\" displaytype=\"normal\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" expr=\"dataset.getSum(&apos;QTY_JAE&apos;);\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"9\" expr=\"dataset.getSum(&apos;QTY_DAE&apos;);\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"10\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/></Band></Format></Formats>");
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
        this.addIncludeScript("SD1030F_GRID3.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD1030F_GRID3.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;


        this.SD1030F_GRID3_ontimer = function(obj,e)
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
        	this.lfn_grdAutofit(this.SD1030F_GRID3);
        };

        this.SD1030F_GRID3_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.SD1030F_GRID3_onsize,this);
            this.addEventHandler("ontimer",this.SD1030F_GRID3_ontimer,this);
            this.SD1030F_GRID3.addEventHandler("onsize",this.SD1030F_GRID3_onsize,this);
        };
        this.loadIncludeScript("SD1030F_GRID3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
