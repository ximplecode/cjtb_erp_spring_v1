(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD1050F_GRID4");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1370,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("SD1050F_GRID4","0.00%","0",null,"100.00%","0.00%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_4");
            obj.set_formatid("default");
            obj.set_cellmovingtype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"61\"/><Column size=\"73\"/><Column size=\"84\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"84\"/><Column size=\"84\"/><Column size=\"84\"/><Column size=\"84\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"일자\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" rowspan=\"2\" text=\"이체번호\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" colspan=\"7\" font=\"11px/normal &quot;Gulim&quot;\" text=\"이체출고\"/><Cell row=\"1\" col=\"2\" text=\"이체반품전표\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"3\" text=\"반품업체\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"4\" text=\"이체반품업체\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"5\" text=\"수량\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"6\" text=\"이체반품\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"7\" text=\"금액\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"8\" text=\"이체반품금액\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:BYMD\" suppress=\"1\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" displaytype=\"normal\"/><Cell col=\"1\" text=\"bind:NUM\" suppress=\"0\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"bind:IJPNO\" suppress=\"0\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" suppress=\"0\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\" expr=\"CCUST_GB + &quot;-&quot; + CCUST_CD\"/><Cell col=\"4\" suppress=\"0\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\" expr=\"ICUST_GB + &quot;-&quot; + ICUST_CD\" cssclass=\"expr:ICUST_GB+ICUST_CD != CCUST_GB+CCUST_CD ? &apos;sdcss_error&apos; : &apos;&apos;\"/><Cell col=\"5\" text=\"bind:CQTY\" displaytype=\"number\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:BQTY\" displaytype=\"number\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" cssclass=\"expr:BQTY != CQTY ? &apos;sdcss_error&apos; : &apos;&apos;\"/><Cell col=\"7\" text=\"bind:CAMT\" displaytype=\"currency\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:ICAMT\" displaytype=\"currency\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" cssclass=\"expr:CAMT != ICAMT ? &apos;sdcss_error&apos; : &apos;&apos;\"/></Band><Band id=\"summary\"><Cell text=\"총계 \" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" textAlign=\"right\" displaytype=\"normal\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" textAlign=\"right\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" expr=\"dataset.getSum(&apos;CQTY&apos;);\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" expr=\"dataset.getSum(&apos;BQTY&apos;);\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" expr=\"dataset.getSum(&apos;CAMT&apos;);\" textAlign=\"right\" displaytype=\"currency\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" expr=\"dataset.getSum(&apos;ICAMT&apos;);\" textAlign=\"right\" displaytype=\"currency\" maskeditformat=\"###,###,###,###,##0\" font=\"bold 11px/normal &quot;Gulim&quot;\"/></Band></Format></Formats>");
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
        this.addIncludeScript("SD1050F_GRID4.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD1050F_GRID4.xfdl", function() {
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
        this.loadIncludeScript("SD1050F_GRID4.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
