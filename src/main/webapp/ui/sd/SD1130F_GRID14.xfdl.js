(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD1130F_GRID14");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1370,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("SD1130F_GRID14","0.00%","0",null,"100.00%","0.00%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_14");
            obj.set_formatid("default");
            obj.set_cellmovingtype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"92\"/><Column size=\"60\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"60\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"55\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"구분\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" rowspan=\"2\" text=\"수량\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" rowspan=\"2\" text=\"면세\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" colspan=\"2\" text=\"매출세금\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" rowspan=\"2\" text=\"매출계\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" rowspan=\"2\" text=\"반품수량\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" rowspan=\"2\" text=\"반품계산\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" colspan=\"2\" text=\"반품\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"10\" rowspan=\"2\" text=\"반품계\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"11\" rowspan=\"2\" text=\"순매수량\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"12\" rowspan=\"2\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"3\" text=\"공급가액\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"4\" text=\"세액\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"8\" text=\"공급가액\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"9\" text=\"세액\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"1\" expr=\"dataset.getRowLevel(currow)==0? CGB_NM : &quot;&quot;\"/><Cell col=\"1\" text=\"bind:CQTY\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:CAMT\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:C_AMT\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:C_VAT\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"5\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;cornsilk&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" expr=\"CAMT+C_AMT+C_VAT\"/><Cell col=\"6\" text=\"bind:BQTY\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:BAMT\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:B_AMT\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:B_VAT\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"10\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;cornsilk&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" expr=\"BAMT+B_AMT+B_VAT\"/><Cell col=\"11\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;cornsilk&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" text=\"bind:SQTY\"/><Cell col=\"12\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;cornsilk&apos;\" textAlign=\"center\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"0\" text=\"bind:GB\"/></Band><Band id=\"summary\"><Cell textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" expr=\"dataset.getSum(&apos;CQTY&apos;);\" textAlign=\"right\" displaytype=\"number\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" expr=\"dataset.getSum(&apos;CAMT&apos;);\" textAlign=\"right\" displaytype=\"currency\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" expr=\"dataset.getSum(&apos;C_AMT&apos;);\" textAlign=\"right\" displaytype=\"currency\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" expr=\"dataset.getSum(&apos;C_VAT&apos;);\" textAlign=\"right\" displaytype=\"currency\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" expr=\"dataset.getSum(&apos;CAMT&apos;)+ dataset.getSum(&apos;C_AMT&apos;)+dataset.getSum(&apos;C_VAT&apos;);\" textAlign=\"right\" displaytype=\"currency\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" expr=\"dataset.getSum(&apos;BQTY&apos;);\" textAlign=\"right\" displaytype=\"number\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" expr=\"dataset.getSum(&apos;BAMT&apos;);\" textAlign=\"right\" displaytype=\"currency\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" expr=\"dataset.getSum(&apos;B_AMT&apos;);\" textAlign=\"right\" displaytype=\"currency\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"9\" expr=\"dataset.getSum(&apos;B_VAT&apos;);\" textAlign=\"right\" displaytype=\"currency\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"10\" expr=\"dataset.getSum(&apos;BAMT&apos;)+ dataset.getSum(&apos;B_AMT&apos;)+dataset.getSum(&apos;B_VAT&apos;);\" textAlign=\"right\" displaytype=\"currency\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"11\" expr=\"dataset.getSum(&apos;SQTY&apos;)\" textAlign=\"right\" displaytype=\"number\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"12\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/></Band></Format></Formats>");
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
        this.addIncludeScript("SD1130F_GRID14.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD1130F_GRID14.xfdl", function() {
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
            this.SD1130F_GRID14.addEventHandler("onsize",this.SD1040F_GRID1_onsize,this);
        };
        this.loadIncludeScript("SD1130F_GRID14.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
