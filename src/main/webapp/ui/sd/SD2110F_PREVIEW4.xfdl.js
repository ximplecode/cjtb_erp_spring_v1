(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD2110F_PREVIEW4");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("SD2110F_PREVIEW4","0.00%","0",null,null,"5","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_preview4");
            obj.set_formatid("default");
            obj.set_cellmovingtype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"196\"/><Column size=\"62\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"64\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"59\"/><Column size=\"62\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"속성코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" rowspan=\"2\" text=\"속성명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" rowspan=\"2\" text=\"전일재고\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" colspan=\"6\" text=\"당일입고\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"9\" colspan=\"6\" text=\"당일출고\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"15\" rowspan=\"2\" text=\"재고\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"16\" rowspan=\"2\" text=\"매출\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"17\" rowspan=\"2\" font=\"11px/normal &quot;Gulim&quot;\" text=\"반품\"/><Cell col=\"18\" rowspan=\"2\" font=\"11px/normal &quot;Gulim&quot;\" text=\"순매\"/><Cell row=\"1\" col=\"3\" text=\"생산\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"4\" text=\"재생\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"5\" text=\"대체\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"6\" text=\"이체\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"7\" text=\"반품\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"8\" text=\"입고계\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"9\" text=\"출고\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"10\" text=\"증정\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"11\" text=\"대체\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"12\" text=\"재생\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"13\" text=\"폐기\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"14\" text=\"출고계\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:SGRP_CODE\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" displaytype=\"normal\"/><Cell col=\"1\" suppress=\"1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"left\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:SGRP_NM\" expr=\"dataset.getRowLevel(currow)==0?SGRP_NM : &quot;코드별 합계&quot;\"/><Cell col=\"2\" text=\"bind:J_JEGO\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" displaytype=\"number\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" text=\"bind:ISU1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" displaytype=\"number\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" text=\"bind:ISU2\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" displaytype=\"number\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" text=\"bind:ISU5\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" displaytype=\"number\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" text=\"bind:ISU3\" textAlign=\"right\" displaytype=\"number\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" text=\"bind:ISU4\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" displaytype=\"number\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" text=\"bind:IHAB\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" displaytype=\"number\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"9\" text=\"bind:CSU1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" displaytype=\"number\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"10\" text=\"bind:CSU3\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" displaytype=\"number\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"11\" text=\"bind:CSU5\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" displaytype=\"number\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"12\" text=\"bind:CSU6\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" displaytype=\"number\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"13\" text=\"bind:CSU7\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" displaytype=\"number\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"14\" text=\"bind:CHAB\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" displaytype=\"number\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"15\" text=\"bind:JEGO\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" displaytype=\"number\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"16\" text=\"bind:CAMT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" displaytype=\"number\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"17\" text=\"bind:BAMT\" textAlign=\"right\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"18\" text=\"bind:SAMT\" textAlign=\"right\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" font=\"bold 11px/normal &quot;Gulim&quot;\" text=\"총 계\"/><Cell col=\"2\" expr=\"dataset.getSum(&quot;nexacro.toNumber(J_JEGO)&quot;);\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"3\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(ISU1)&quot;);\" displaytype=\"number\"/><Cell col=\"4\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(ISU2)&quot;);\" displaytype=\"number\"/><Cell col=\"5\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(ISU5)&quot;);\" displaytype=\"number\"/><Cell col=\"6\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(ISU3)&quot;);\" displaytype=\"number\"/><Cell col=\"7\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(ISU4&quot;));\" displaytype=\"number\"/><Cell col=\"8\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(IHAB)&quot;);\" displaytype=\"number\"/><Cell col=\"9\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(CSU1)&quot;);\" displaytype=\"number\"/><Cell col=\"10\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(CSU3)&quot;);\" displaytype=\"number\"/><Cell col=\"11\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(CSU5)&quot;);\" displaytype=\"number\"/><Cell col=\"12\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(CSU6)&quot;);\" displaytype=\"number\"/><Cell col=\"13\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(CSU7)&quot;);\" displaytype=\"number\"/><Cell col=\"14\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(CHAB)&quot;);\" displaytype=\"number\"/><Cell col=\"15\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(JEGO)&quot;);\" displaytype=\"number\"/><Cell col=\"16\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(CAMT)&quot;);\" displaytype=\"number\"/><Cell col=\"17\" expr=\"dataset.getSum(&quot;nexacro.toNumber(BAMT)&quot;);\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"18\" expr=\"dataset.getSum(&quot;nexacro.toNumber(SAMT)&quot;);\" textAlign=\"right\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,720,this,function(p){});
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
            this.SD2110F_PREVIEW4.addEventHandler("onsize",this.SD1040F_GRID1_onsize,this);
        };
        this.loadIncludeScript("SD2110F_PREVIEW4.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
