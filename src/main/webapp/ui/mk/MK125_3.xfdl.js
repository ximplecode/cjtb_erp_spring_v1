(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MkDtlMain");
            this.set_scrolltype("none");
            this.set_titletext("용지입고현황_용지별");
            if (Form == this.constructor)
            {
                this._setFormPosition(1285,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","0","100.00%","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsPprInList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"91\"/><Column size=\"51\"/><Column size=\"143\"/><Column size=\"59\"/><Column size=\"49\"/><Column size=\"226\"/><Column size=\"35\"/><Column size=\"83\"/><Column size=\"85\"/><Column size=\"78\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"102\"/><Column size=\"144\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"24\"/><Row size=\"32\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"입고번호\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"매입처\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"구분\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" colspan=\"3\" text=\"용지명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" text=\"중량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"9\" text=\"단가\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"10\" text=\"금액\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"11\" text=\"부가세\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"12\" text=\"합계\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"13\" text=\"출고처\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:PPRINMST_DATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" maskeditformat=\"9999-99-99\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"expr:dataset.getRowLevel(currow)!=1?&quot;date&quot;:&quot;text&quot;\" calendardateformat=\"yyyy-MM-dd\" suppress=\"3\" suppressalign=\"middle\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"bind:PPRINMST_NO\" displaytype=\"normal\" combodataset=\"ds_mk_UseType\" combocodecol=\"USE_TYPE_CODE\" combodatacol=\"USE_TYPE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" suppress=\"2\" suppressalign=\"middle\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" suppress=\"4\" suppressalign=\"middle\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:TYPE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" suppressalign=\"middle\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\" expr=\"dataset.getRowLevel(currow)==2?&apos;일계&apos;:dataset.getRowLevel(currow)==1?&apos;소계&apos;:TYPE_NAME\"/><Cell col=\"4\" text=\"bind:PPR_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" suppress=\"1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\" suppressalign=\"first\"/><Cell col=\"5\" text=\"bind:PPR_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\" suppressalign=\"first\"/><Cell col=\"6\" text=\"bind:PPR_UNIT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell col=\"7\" text=\"bind:PPRINDTL_QTY\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,##0.000\" maskedittype=\"number\" maskeditmaskchar=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell col=\"8\" text=\"bind:PPRINDTL_WEIGHT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#.###\" maskeditmaskchar=\"0\" maskedittype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell col=\"9\" text=\"bind:PPRINDTL_UNITCOST\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###\" maskeditmaskchar=\"0\" maskedittype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\" expr=\"dataset.getRowLevel(currow)==1?&apos;&apos;:dataset.getRowLevel(currow)==2?&apos;&apos;:PPRINDTL_UNITCOST\"/><Cell col=\"10\" text=\"bind:PPRINDTL_AMOUNT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"currency\" maskeditformat=\"#.###\" maskeditmaskchar=\"0\" maskedittype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell col=\"11\" text=\"bind:PPRINDTL_VAT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"currency\" maskeditformat=\"#.###\" maskeditmaskchar=\"0\" maskedittype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/><Cell col=\"12\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"currency\" maskeditformat=\"#.###\" maskeditmaskchar=\"0\" maskedittype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\" text=\"bind:PPRINDTL_TOTALAMT\"/><Cell col=\"13\" text=\"bind:CNAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:TYPE_CODE==&apos;03&apos;?&apos;mk_return&apos;:&apos;&apos;\"/></Band><Band id=\"summary\"><Cell colspan=\"7\" text=\"총계\" font=\"bold 14px/normal &quot;함초롬돋움&quot;\" background=\"#fbce78\"/><Cell col=\"7\" textAlign=\"right\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" expr=\"dataset.getSum(&apos;PPRINDTL_QTY&apos;);\" displaytype=\"mask\" background=\"#fbce78\" maskeditformat=\"#,##0.000\"/><Cell col=\"8\" textAlign=\"right\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" background=\"#fbce78\" maskeditformat=\"#.###\" expr=\"dataset.getSum(&apos;PPRINDTL_WEIGHT&apos;);\" displaytype=\"mask\"/><Cell col=\"9\" textAlign=\"right\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" background=\"#fbce78\" maskeditformat=\"#.###\"/><Cell col=\"10\" textAlign=\"right\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" background=\"#fbce78\" maskeditformat=\"#.###\" expr=\"dataset.getSum(&apos;PPRINDTL_AMOUNT&apos;);\" displaytype=\"currency\"/><Cell col=\"11\" textAlign=\"right\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" background=\"#fbce78\" maskeditformat=\"#.###\" expr=\"dataset.getSum(&apos;PPRINDTL_VAT&apos;);\" displaytype=\"currency\"/><Cell col=\"12\" textAlign=\"right\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" background=\"#fbce78\" maskeditformat=\"#.###\" displaytype=\"currency\" expr=\"dataset.getSum(&apos;PPRINDTL_TOTALAMT&apos;);\"/><Cell col=\"13\" background=\"#fbce78\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1285,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK125_3.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK125_3.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);
        }

        this.MkMain_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.MkMain_ontimer = function(obj,e)
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
        	this.lfn_grdAutofit(this.grdList);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkMain_onload,this);
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
        };
        this.loadIncludeScript("MK125_3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
