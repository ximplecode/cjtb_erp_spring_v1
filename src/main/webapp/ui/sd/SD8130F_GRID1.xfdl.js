(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD8130F_GRID1");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1370,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("SD8130F_GRID1","0%","0",null,"100.00%","0%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_1");
            obj.set_formatid("default");
            obj.set_cellmovingtype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"88\"/><Column size=\"259\"/><Column size=\"86\"/><Column size=\"64\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"거래처코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" text=\"거래처명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"작업년월\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" text=\"구분\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" text=\"가맹비\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" text=\"광고비\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" text=\"교육비\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" text=\"합계\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" text=\"비고\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" suppress=\"1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" expr=\"dataset.getRowLevel(currow)==1?&apos;&apos;:CUST_GB+&quot;)&quot;+CUST_CD\"/><Cell col=\"1\" rowspan=\"2\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" suppress=\"1\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"left\" expr=\"dataset.getRowLevel(currow)==1?&apos;&lt; 거래처계 &gt;&apos;:NAME\"/><Cell col=\"2\" rowspan=\"2\" text=\"bind:SYYMM\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" suppress=\"0\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\" displaytype=\"date\" calendardisplaynulltype=\"nulltext\" calendardateformat=\"yyyy/MM\"/><Cell col=\"3\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" text=\"금액\"/><Cell col=\"4\" text=\"bind:N_GAMT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" suppress=\"0\" padding=\"0px 3px 0px 0px\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:N_KAMT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" font=\"11px/normal &quot;Gulim&quot;\" suppress=\"0\" padding=\"0px 3px 0px 0px\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:N_CAMT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"right\" font=\"11px/normal &quot;Gulim&quot;\" padding=\"0px 3px 0px 0px\" displaytype=\"number\"/><Cell col=\"7\" rowspan=\"2\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" padding=\"0px 3px 0px 0px\" text=\"bind:HAB\"/><Cell col=\"8\" displaytype=\"normal\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell row=\"1\" col=\"3\" text=\"VAT\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/><Cell row=\"1\" col=\"4\" font=\"11px/normal &quot;Gulim&quot;\" padding=\"0px 3px 0px 0px\" text=\"bind:N_GVAT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" displaytype=\"number\"/><Cell row=\"1\" col=\"5\" font=\"11px/normal &quot;Gulim&quot;\" padding=\"0px 3px 0px 0px\" text=\"bind:N_KVAT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" displaytype=\"number\"/><Cell row=\"1\" col=\"6\" font=\"11px/normal &quot;Gulim&quot;\" padding=\"0px 3px 0px 0px\" text=\"bind:N_CVAT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" displaytype=\"number\"/><Cell row=\"1\" col=\"8\" font=\"11px/normal &quot;Gulim&quot;\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"/></Band><Band id=\"summary\"><Cell rowspan=\"2\" colspan=\"3\" text=\"&lt; 합 계 &gt;\"/><Cell col=\"3\" text=\"금액\"/><Cell col=\"4\" font=\"bold 11px/normal &quot;Gulim&quot;\" expr=\"dataset.getSum(&quot;N_GAMT&quot;)\" displaytype=\"number\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/><Cell col=\"5\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\" expr=\"dataset.getSum(&quot;N_KAMT&quot;)\" displaytype=\"number\" padding=\"0px 3px 0px 0px\"/><Cell col=\"6\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\" expr=\"dataset.getSum(&quot;N_CAMT&quot;)\" displaytype=\"number\" padding=\"0px 3px 0px 0px\"/><Cell col=\"7\" rowspan=\"2\" expr=\"dataset.getSum(&quot;HAB&quot;)\" textAlign=\"right\" displaytype=\"number\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\" padding=\"0px 3px 0px 0px\"/><Cell col=\"8\" textAlign=\"right\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"3\" text=\"VAT\"/><Cell row=\"1\" col=\"4\" expr=\"dataset.getSum(&quot;N_GVAT&quot;)\" padding=\"0px 3px 0px 0px\" font=\"bold 11px/normal &quot;Gulim&quot;\" textAlign=\"right\" displaytype=\"number\"/><Cell row=\"1\" col=\"5\" expr=\"dataset.getSum(&quot;N_KVAT&quot;)\" padding=\"0px 3px 0px 0px\" font=\"bold 11px/normal &quot;Gulim&quot;\" textAlign=\"right\" displaytype=\"number\"/><Cell row=\"1\" col=\"6\" expr=\"dataset.getSum(&quot;N_CVAT&quot;)\" padding=\"0px 3px 0px 0px\" font=\"bold 11px/normal &quot;Gulim&quot;\" textAlign=\"right\" displaytype=\"number\"/><Cell row=\"1\" col=\"8\" font=\"bold 11px/normal &quot;Gulim&quot;\"/></Band></Format></Formats>");
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
        this.addIncludeScript("SD8130F_GRID1.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD8130F_GRID1.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        /*
        this.SD8130F_GRID1_onsize = function(obj:nexacro.Form,e:nexacro.SizeEventInfo)
        {
        	this.setTimer(0,1);
        };

        this.SD8130F_GRID1_ontimer = function(obj:nexacro.Form,e:nexacro.TimerEventInfo)
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
        	this.lfn_grdAutofit(this.SD8110F_GRID1);
        };
        */
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.SD8130F_GRID1_onsize,this);
            this.addEventHandler("ontimer",this.SD8130F_GRID1_ontimer,this);
        };
        this.loadIncludeScript("SD8130F_GRID1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
