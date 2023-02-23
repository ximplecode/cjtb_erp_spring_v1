(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD6310P_GRID1");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1370,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("SD6310P_GRID1","0%","0",null,"100.00%","0%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_1");
            obj.set_formatid("default");
            obj.set_cellmovingtype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"40\"/><Column size=\"300\"/><Column size=\"60\"/><Column size=\"56\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"도서코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" text=\"년판\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"도서명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" text=\"도서구분\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" text=\"VAT구분\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" text=\"출고기한\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" text=\"속성코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" text=\"속성명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" text=\"구분\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"9\" text=\"묶음\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"10\" text=\"형태\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"11\" text=\"ISBN\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"12\" text=\"과목\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"13\" text=\"비고\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"><Cell textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:YY\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"2\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:BOOK_NM\"/><Cell col=\"3\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:BGBR_NM\"/><Cell col=\"4\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\" expr=\"VAT_GB==&apos;0&apos;?&apos;면세&apos;:VAT_GB==&apos;1&apos;?&apos;세액포함&apos;:VAT_GB==&apos;2&apos;?&apos;세엑별도&apos;:VAT_GB==&apos;3&apos;?&apos;과세&apos;:&apos;&apos;\"/><Cell col=\"5\" font=\"11px/normal &quot;Gulim&quot;\" displaytype=\"mask\" maskeditformat=\"####-##-##\" maskedittype=\"string\" textAlign=\"center\" text=\"bind:C_YMD\"/><Cell col=\"6\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:SGRP_CODE\"/><Cell col=\"7\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:SGRP_NM\"/><Cell col=\"8\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\" expr=\"MEIP_C==&apos;0&apos;?&apos;판매용&apos;:MEIP_C==&apos;1&apos;?&apos;교사용&apos;:MEIP_C==&apos;2&apos;?타계정&apos;:MEIP_C==&apos;3&apos;?&apos;매입품&apos;:&apos;&apos;\"/><Cell col=\"9\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\" text=\"bind:MOOK\"/><Cell col=\"10\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\" expr=\"YGUBN==&apos;0&apos;?&apos; &apos;:YGUBN==&apos;1&apos;?&apos;학기&apos;:YGUBN==&apos;2&apos;?&apos;단행&apos;:YGUBN==&apos;3&apos;?&apos;월간&apos;:&apos;&apos;\"/><Cell col=\"11\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:ISBN_N\"/><Cell col=\"12\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:DANW_NM\"/><Cell col=\"13\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:NYUK\"/></Band></Format></Formats>");
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
        this.addIncludeScript("SD6310P_GRID1.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD6310P_GRID1.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        /*
        this.SD6310P_GRID1_onsize = function(obj:nexacro.Form,e:nexacro.SizeEventInfo)
        {
        	this.setTimer(0,1);
        };

        this.SD6310P_GRID1_ontimer = function(obj:nexacro.Form,e:nexacro.TimerEventInfo)
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
            this.addEventHandler("onsize",this.SD6310F_GRID1_onsize,this);
            this.addEventHandler("ontimer",this.SD6310F_GRID1_ontimer,this);
        };
        this.loadIncludeScript("SD6310P_GRID1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
