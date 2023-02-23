(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD6310P_GRID3");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1370,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("SD6310P_GRID3","0%","0",null,"100.00%","0%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_3");
            obj.set_formatid("default");
            obj.set_cellmovingtype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"40\"/><Column size=\"300\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"도서코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" rowspan=\"2\" text=\"년판\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" rowspan=\"2\" text=\"도서명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" rowspan=\"2\" text=\"시행일자\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" rowspan=\"2\" text=\"마감일자\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" colspan=\"4\" text=\"출고율\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"9\" rowspan=\"2\" text=\"정가\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"10\" colspan=\"3\" font=\"11px/normal &quot;Gulim&quot;\" text=\"반품\"/><Cell col=\"13\" rowspan=\"2\" text=\"적용구분\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"14\" rowspan=\"2\" text=\"판매단가\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"5\" text=\"서울\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"6\" font=\"11px/normal &quot;Gulim&quot;\" text=\"A\"/><Cell row=\"1\" col=\"7\" font=\"11px/normal &quot;Gulim&quot;\" text=\"B\"/><Cell row=\"1\" col=\"8\" font=\"11px/normal &quot;Gulim&quot;\" text=\"C\"/><Cell row=\"1\" col=\"10\" text=\"허용여부\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"11\" text=\"반품기한\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell row=\"1\" col=\"12\" text=\"한도율\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"><Cell textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:YY\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"2\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:B_NM\"/><Cell col=\"3\" font=\"11px/normal &quot;Gulim&quot;\" displaytype=\"mask\" maskeditformat=\"####-##-##\" maskedittype=\"string\" textAlign=\"center\" text=\"bind:SYMD\"/><Cell col=\"4\" font=\"11px/normal &quot;Gulim&quot;\" displaytype=\"mask\" maskeditformat=\"####-##-##\" maskedittype=\"string\" textAlign=\"center\" text=\"bind:EYMD\"/><Cell col=\"5\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:YUL1\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"6\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:YUL2\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"7\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:YUL3\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"8\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:YUL4\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"9\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:COST\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"10\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\" expr=\"B_YN==&apos;0&apos;?&apos;적용안함&apos;:B_YN==&apos;1&apos;?&apos;반품한도&apos;:B_YN==&apos;2&apos;?&apos;반품정산&apos;:&apos;기타&apos;\"/><Cell col=\"11\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\" text=\"bind:B_YMD\" displaytype=\"mask\" maskeditformat=\"####-##-##\" maskedittype=\"string\"/><Cell col=\"12\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"right\" text=\"bind:B_YUL\" displaytype=\"number\"/><Cell col=\"13\" font=\"11px/normal &quot;Gulim&quot;\" expr=\"JUK_GB==&apos;0&apos;?&apos;적용&apos;:JUK_GB==&apos;1&apos;?&apos;단가&apos;:JUK_GB==&apos;2&apos;?&apos;출고율&apos;:JUK_GB==&apos;3&apos;?&apos;적용안함&apos;:&apos;기타&apos;\" textAlign=\"center\"/><Cell col=\"14\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:PCOST\" displaytype=\"number\" textAlign=\"right\"/></Band></Format></Formats>");
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
        this.addIncludeScript("SD6310P_GRID3.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD6310P_GRID3.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        /*
        this.SD6310P_GRID3_onsize = function(obj:nexacro.Form,e:nexacro.SizeEventInfo)
        {
        	this.setTimer(0,1);
        };

        this.SD6310P_GRID3_ontimer = function(obj:nexacro.Form,e:nexacro.TimerEventInfo)
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
        	this.lfn_grdAutofit(this.SD8101F_GRID1);
        };
        */

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.SD6310F_GRID4_onsize,this);
            this.addEventHandler("ontimer",this.SD6310F_GRID4_ontimer,this);
        };
        this.loadIncludeScript("SD6310P_GRID3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
