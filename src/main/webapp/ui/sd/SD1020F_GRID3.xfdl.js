(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD1020F_GRID3");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1370,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("SD1020F_GRID3","0.00%","0",null,"100.00%","0.00%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_3");
            obj.set_formatid("default");
            obj.set_cellmovingtype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"72\"/><Column size=\"44\"/><Column size=\"206\"/><Column size=\"60\"/><Column size=\"65\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"150\"/><Column size=\"55\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"204\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"도서코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" text=\"년판\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"도서명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" text=\"도서구분\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" text=\"처리일자\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" text=\"업체구분\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" text=\"업체코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" text=\"업체명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" text=\"유형명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"9\" text=\"전표\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"10\" text=\"전표번호\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"11\" text=\"수량\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"12\" text=\"단가\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"13\" text=\"금액\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"14\" text=\"비고\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:BOOK_CD\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:BYY\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"2\"/><Cell col=\"2\" text=\"bind:BOOK_NAME\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" expr=\"dataset.getRowLevel(currow)==0? BOOK_NAME : dataset.getRowLevel(currow)==1? &quot;도서별 소계&gt;&gt;&quot; : &quot;&quot;\" suppress=\"3\"/><Cell col=\"3\" text=\"bind:B_GUNM\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"3\"/><Cell col=\"4\" text=\"bind:BYMD\" suppress=\"3\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" text=\"bind:CUST_GB\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" text=\"bind:CUST_CD\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: &apos;&apos;\" suppress=\"0\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:CUST_NM\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" text=\"bind:YOUHYUNG\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:NUM\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"10\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: &apos;&apos;\" text=\"bind:NUMS\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:QTY\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:COST\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:AMT\" displaytype=\"currency\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"14\" text=\"bind:BIGO\" displaytype=\"currency\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"summary\"><Cell textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\" text=\"총계 \"/><Cell col=\"1\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\" text=\"expr:dataset.getRowCount()\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\"/><Cell col=\"2\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" font=\"bold 11px/normal &quot;Gulim&quot;\" displaytype=\"normal\"/><Cell col=\"7\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"9\" textAlign=\"right\" displaytype=\"normal\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"10\"/><Cell col=\"11\" expr=\"dataset.getSum(&apos;QTY&apos;);\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"12\" expr=\"dataset.getSum(&apos;COST&apos;);\" textAlign=\"right\" displaytype=\"currency\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"13\" textAlign=\"right\" expr=\"dataset.getSum(&apos;AMT&apos;);\" displaytype=\"currency\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"14\" textAlign=\"right\" expr=\"dataset.getSum(&apos;AMT&apos;);\" displaytype=\"currency\" font=\"bold 11px/normal &quot;Gulim&quot;\"/></Band></Format></Formats>");
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
        this.addIncludeScript("SD1020F_GRID3.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD1020F_GRID3.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;


        this.SD1020F_GRID3_onsize = function(obj,e)
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
        	this.lfn_grdAutofit(this.SD1020F_GRID3);
        };

        this.SD1020F_GRID3_ontimer = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.SD1020F_GRID3_onsize,this);
            this.addEventHandler("ontimer",this.SD1020F_GRID3_ontimer,this);
        };
        this.loadIncludeScript("SD1020F_GRID3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
