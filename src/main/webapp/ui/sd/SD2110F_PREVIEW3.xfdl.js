(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD2110F_PREVIEW3");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("SD2110F_PREVIEW3","0.00%","0",null,null,"5","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_preview3");
            obj.set_formatid("default");
            obj.set_cellmovingtype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"57\"/><Column size=\"144\"/><Column size=\"77\"/><Column size=\"45\"/><Column size=\"222\"/><Column size=\"70\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"속성코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" rowspan=\"2\" text=\"속성명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" rowspan=\"2\" text=\"도서코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" rowspan=\"2\" text=\"년판\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" rowspan=\"2\" text=\"도서명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" rowspan=\"2\" text=\"전일재고\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" colspan=\"6\" text=\"당일입고\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"12\" colspan=\"6\" text=\"당일출고\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"18\" rowspan=\"2\" text=\"재고\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"6\" text=\"생산\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"7\" text=\"재생\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"8\" text=\"대체\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"9\" text=\"이체\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"10\" text=\"반품\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"11\" text=\"입고계\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"12\" text=\"출고\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"13\" text=\"증정\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"14\" text=\"대체\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"15\" text=\"재생\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"16\" text=\"폐기\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"17\" text=\"출고계\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:SGRP_CODE\" suppress=\"1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" displaytype=\"normal\"/><Cell col=\"1\" suppress=\"1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"left\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" expr=\"dataset.getRowLevel(currow)==0?SGRP_NM : &quot;속성코드별 합계&quot;\" text=\"bind:SGRP_NM\"/><Cell col=\"2\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\" suppress=\"0\" text=\"bind:BOOK_CD\"/><Cell col=\"3\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"0\" text=\"bind:BYY\"/><Cell col=\"4\" text=\"bind:BOOK_NM\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"left\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"0\"/><Cell col=\"5\" text=\"bind:J_JEGO\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:ISU1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:ISU2\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:ISU5\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"9\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" text=\"bind:ISU3\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:ISU4\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:IHAB\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:CSU1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:CSU3\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:CSU5\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:CSU6\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"16\" text=\"bind:CSU7\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"17\" text=\"bind:CHAB\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"18\" text=\"bind:PG_JEGO\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell colspan=\"5\" font=\"bold 11px/normal &quot;Gulim&quot;\" text=\"총 계\"/><Cell col=\"5\" expr=\"dataset.getSum(&quot;nexacro.toNumber(J_JEGO)&quot;);\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"6\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(ISU1)&quot;);\" displaytype=\"number\"/><Cell col=\"7\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(ISU2)&quot;);\" displaytype=\"number\"/><Cell col=\"8\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(ISU5)&quot;);\" displaytype=\"number\"/><Cell col=\"9\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(ISU3)&quot;);\" displaytype=\"number\"/><Cell col=\"10\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(ISU4)&quot;);\" displaytype=\"number\"/><Cell col=\"11\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(IHAB)&quot;);\" displaytype=\"number\"/><Cell col=\"12\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(CSU1)&quot;);\" displaytype=\"number\"/><Cell col=\"13\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(CSU3)&quot;);\" displaytype=\"number\"/><Cell col=\"14\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(CSU5)&quot;);\" displaytype=\"number\"/><Cell col=\"15\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(CSU6)&quot;);\" displaytype=\"number\"/><Cell col=\"16\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(CSU7)&quot;);\" displaytype=\"number\"/><Cell col=\"17\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(CHAB)&quot;);\" displaytype=\"number\"/><Cell col=\"18\" textAlign=\"right\" expr=\"dataset.getSum(&quot;nexacro.toNumber(PG_JEGO)&quot;);\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,720,this,function(p){});
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
            this.SD2110F_PREVIEW3.addEventHandler("onsize",this.SD1040F_GRID1_onsize,this);
        };
        this.loadIncludeScript("SD2110F_PREVIEW3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
