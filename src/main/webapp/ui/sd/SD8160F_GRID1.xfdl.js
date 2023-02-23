(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD8160F_GRID1");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1600,740);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("SD8160F_GRID1","0%","0",null,"100.00%","0%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_1");
            obj.set_formatid("default");
            obj.set_cellmovingtype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"190\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"거래처\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" rowspan=\"2\" text=\"거래처명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" colspan=\"2\" text=\"담보\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" colspan=\"2\" text=\"채권\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" rowspan=\"2\" text=\"채권율&#13;&#10;(%)\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" rowspan=\"2\" text=\"전월&#13;&#10;실채권\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" rowspan=\"2\" text=\"전년동월&#13;&#10;실채권\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"9\" rowspan=\"2\" font=\"11px/normal &quot;Gulim&quot;\" text=\"최근1년&#13;&#10;순매출\"/><Cell col=\"10\" rowspan=\"2\" font=\"11px/normal &quot;Gulim&quot;\" text=\"수금대상&#13;&#10;매출액\"/><Cell col=\"11\" rowspan=\"2\" font=\"11px/normal &quot;Gulim&quot;\" text=\"추가&#13;&#10;수금액\"/><Cell col=\"12\" rowspan=\"2\" font=\"11px/normal &quot;Gulim&quot;\" text=\"담당자&#13;&#10;추가수금\"/><Cell col=\"13\" rowspan=\"2\" font=\"11px/normal &quot;Gulim&quot;\" text=\"전월&#13;&#10;미수금\"/><Cell col=\"14\" rowspan=\"2\" font=\"11px/normal &quot;Gulim&quot;\" text=\"당월최종&#13;&#10;수금액\"/><Cell col=\"15\" rowspan=\"2\" font=\"11px/normal &quot;Gulim&quot;\" text=\"당월&#13;&#10;어음결제&#13;&#10;예정액\"/><Cell col=\"16\" colspan=\"3\" font=\"11px/normal &quot;Gulim&quot;\" text=\"전월수금실적\"/><Cell col=\"19\" rowspan=\"2\" font=\"11px/normal &quot;Gulim&quot;\" text=\"보증보험&#13;&#10;만료일\"/><Cell row=\"1\" col=\"2\" text=\"설정액\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"3\" font=\"11px/normal &quot;Gulim&quot;\" text=\"인정액\"/><Cell row=\"1\" col=\"4\" font=\"11px/normal &quot;Gulim&quot;\" text=\"현채권\"/><Cell row=\"1\" col=\"5\" font=\"11px/normal &quot;Gulim&quot;\" text=\"실채권\"/><Cell row=\"1\" col=\"16\" font=\"11px/normal &quot;Gulim&quot;\" text=\"전월통보액\"/><Cell row=\"1\" col=\"17\" font=\"11px/normal &quot;Gulim&quot;\" text=\"수금\"/><Cell row=\"1\" col=\"18\" font=\"11px/normal &quot;Gulim&quot;\" text=\"수금율\"/></Band><Band id=\"body\"><Cell suppress=\"1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" expr=\"CUST_GB+&quot;-&quot;+CUST_CD\"/><Cell col=\"1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" suppress=\"1\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"left\" text=\"bind:CUST_NM\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:GJD_AMT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" suppress=\"0\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" calendardisplaynulltype=\"nulltext\" calendardateformat=\"yyyy/MM\" displaytype=\"number\"/><Cell col=\"3\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" displaytype=\"number\" text=\"bind:GJD_IN_AMT\"/><Cell col=\"4\" text=\"bind:AMT_JAN\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" suppress=\"0\" padding=\"0px 3px 0px 0px\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:SIL_JAN\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"0\" padding=\"0px 3px 0px 0px\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:DAM_YUL\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" font=\"11px/normal &quot;Gulim&quot;\" padding=\"0px 3px 0px 0px\" displaytype=\"number\"/><Cell col=\"7\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" padding=\"0px 3px 0px 0px\" text=\"bind:JW_AMT_JAN\"/><Cell col=\"8\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" text=\"bind:JDW_AMT_JAN\"/><Cell col=\"9\" text=\"bind:J_YEAR_AMT\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:WOL_MCHUL\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:CHO_SUGUM\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:SALES_SUGUM\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:IWOL_SUGUM\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:SUGUM_SUGUM\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:BILL_JAN\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"16\" text=\"bind:JWOL_T_SUGUM\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"17\" text=\"bind:JWOL_SUGUM\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"18\" text=\"bind:SUGUM_YUL\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"19\" text=\"bind:BEXP_DATE1\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"&lt; 합 계 &gt;\"/><Cell col=\"2\" expr=\"dataset.getSum(&quot;nexacro.toNumber(GJD_AMT)&quot;)\" displaytype=\"number\" font=\"bold 11px/normal &quot;Gulim&quot;\" padding=\"0px 3px 0px 0px\" textAlign=\"right\"/><Cell col=\"3\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(GJD_IN_AMT)&quot;)\" font=\"bold 11px/normal &quot;Gulim&quot;\" padding=\"0px 3px 0px 0px\" textAlign=\"right\"/><Cell col=\"4\" font=\"bold 11px/normal &quot;Gulim&quot;\" expr=\"dataset.getSum(&quot;nexacro.toNumber(AMT_JAN)&quot;)\" displaytype=\"number\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/><Cell col=\"5\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\" expr=\"dataset.getSum(&quot;nexacro.toNumber(SIL_JAN)&quot;)\" displaytype=\"number\" padding=\"0px 3px 0px 0px\"/><Cell col=\"6\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\" displaytype=\"text\" padding=\"0px 3px 0px 0px\" text=\"0.00\"/><Cell col=\"7\" expr=\"dataset.getSum(&quot;nexacro.toNumber(JW_AMT_JAN)&quot;)\" textAlign=\"right\" displaytype=\"number\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\" padding=\"0px 3px 0px 0px\"/><Cell col=\"8\" textAlign=\"right\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(JDW_AMT_JAN)&quot;)\" padding=\"0px 3px 0px 0px\"/><Cell col=\"9\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(J_YEAR_AMT)&quot;)\" font=\"bold 11px/normal &quot;Gulim&quot;\" padding=\"0px 3px 0px 0px\" textAlign=\"right\"/><Cell col=\"10\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(WOL_MCHUL)&quot;)\" font=\"bold 11px/normal &quot;Gulim&quot;\" padding=\"0px 3px 0px 0px\" textAlign=\"right\"/><Cell col=\"11\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(CHO_SUGUM)&quot;)\" font=\"bold 11px/normal &quot;Gulim&quot;\" padding=\"0px 3px 0px 0px\" textAlign=\"right\"/><Cell col=\"12\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(SALES_SUGUM)&quot;)\" font=\"bold 11px/normal &quot;Gulim&quot;\" padding=\"0px 3px 0px 0px\" textAlign=\"right\"/><Cell col=\"13\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(IWOL_SUGUM)&quot;)\" font=\"bold 11px/normal &quot;Gulim&quot;\" padding=\"0px 3px 0px 0px\" textAlign=\"right\"/><Cell col=\"14\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(SUGUM_SUGUM)&quot;)\" font=\"bold 11px/normal &quot;Gulim&quot;\" padding=\"0px 3px 0px 0px\" textAlign=\"right\"/><Cell col=\"15\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BILL_JAN)&quot;)\" font=\"bold 11px/normal &quot;Gulim&quot;\" padding=\"0px 3px 0px 0px\" textAlign=\"right\"/><Cell col=\"16\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(JWOL_T_SUGUM)&quot;)\" font=\"bold 11px/normal &quot;Gulim&quot;\" padding=\"0px 3px 0px 0px\" textAlign=\"right\"/><Cell col=\"17\" displaytype=\"number\" expr=\"dataset.getSum(&quot;nexacro.toNumber(JWOL_SUGUM)&quot;)\" font=\"bold 11px/normal &quot;Gulim&quot;\" padding=\"0px 3px 0px 0px\" textAlign=\"right\"/><Cell col=\"18\" displaytype=\"number\" font=\"bold 11px/normal &quot;Gulim&quot;\" padding=\"0px 3px 0px 0px\" textAlign=\"right\"/><Cell col=\"19\" displaytype=\"number\" font=\"bold 11px/normal &quot;Gulim&quot;\" padding=\"0px 3px 0px 0px\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1600,740,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.SD8160F_GRID1_onsize,this);
            this.addEventHandler("ontimer",this.SD8160F_GRID1_ontimer,this);
        };
        this.loadIncludeScript("SD8160F_GRID1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
