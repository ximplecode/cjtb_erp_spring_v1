(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD6310P_GRID5");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1370,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("SD6310P_GRID5","0%","0",null,"100.00%","0%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_5");
            obj.set_formatid("default");
            obj.set_cellmovingtype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"40\"/><Column size=\"300\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"도서코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" text=\"년판\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"도서명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" text=\"속성코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"4\" text=\"속성명\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"5\" text=\"도서구분\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"6\" text=\"VAT구분\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"7\" text=\"판매유형\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"8\" text=\"묶음\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"9\" text=\"출고기한\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"10\" text=\"ISBN\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"11\" text=\"율1\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"12\" text=\"율2\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"13\" text=\"율3\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"14\" text=\"율4\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"15\" text=\"정가\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"16\" text=\"판매가\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"17\" text=\"반품\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"18\" text=\"개발부서\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"19\" text=\"반품규제\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"20\" text=\"동기간\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"><Cell textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:YY\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"2\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:BOOK_NAME\"/><Cell col=\"3\" text=\"bind:SGRP_CODE\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:SGRP_NM\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:BGBR_NM\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"6\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\" expr=\"VAT_GB==&apos;0&apos;?&apos;면세&apos;:VAT_GB==&apos;1&apos;?&apos;세액포함&apos;:VAT_GB==&apos;2&apos;?&apos;세엑별도&apos;:VAT_GB==&apos;3&apos;?&apos;TAPE&apos;:&apos;&apos;\"/><Cell col=\"7\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\" expr=\"MEIP_C==&apos;0&apos;?&apos;판매&apos;:MEIP_C==&apos;1&apos;?&apos;교사용&apos;:MEIP_C==&apos;2&apos;?&apos;기타&apos;:&apos;&apos;\"/><Cell col=\"8\" text=\"bind:MOOK\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell col=\"9\" font=\"11px/normal &quot;Gulim&quot;\" displaytype=\"mask\" maskeditformat=\"####-##-##\" maskedittype=\"string\" textAlign=\"center\" text=\"bind:C_YMD\"/><Cell col=\"10\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:ISBN\" textAlign=\"center\"/><Cell col=\"11\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:YUL1\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"12\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:YUL2\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"13\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:YUL3\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"14\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:YUL4\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"15\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:COST\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"16\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:PCOST\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"17\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\" expr=\"B_YN==&apos;0&apos;?&apos; &apos;:B_YN==&apos;1&apos;?&apos;반품한도&apos;:B_YN==&apos;2&apos;?&apos;반품정산&apos;:&apos;&apos;\"/><Cell col=\"18\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"left\" maskedittype=\"string\" expr=\"comp.parent.parent.parent.fnExpr_buse(BSCD_CD, BSCD_NM)\"/><Cell col=\"19\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\" text=\"bind:GCODE\"/><Cell col=\"20\" font=\"11px/normal &quot;Gulim&quot;\" text=\"bind:DONG_CODE\"/></Band></Format></Formats>");
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
        this.addIncludeScript("SD6310P_GRID5.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD6310P_GRID5.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        /*
        this.SD6310P_GRID5_onsize = function(obj:nexacro.Form,e:nexacro.SizeEventInfo)
        {
        	this.setTimer(0,1);
        };

        this.SD6310P_GRID5_ontimer = function(obj:nexacro.Form,e:nexacro.TimerEventInfo)
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
        this.loadIncludeScript("SD6310P_GRID5.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
