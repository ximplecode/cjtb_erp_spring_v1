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
            this.set_titletext("후가공비명세서_일반");
            if (Form == this.constructor)
            {
                this._setFormPosition(1285,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grdList","0","0","100.00%","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsList1");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"139\"/><Column size=\"80\"/><Column size=\"358\"/><Column size=\"106\"/><Column size=\"49\"/><Column size=\"74\"/><Column size=\"75\"/><Column size=\"71\"/><Column size=\"82\"/><Column size=\"82\"/><Column size=\"99\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"33\"/><Row size=\"39\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"외주처\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"진행일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"도서명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"용도\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"페이지\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"발주수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"작업수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"단가\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" text=\"공급가액\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"9\" text=\"세액\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"10\" text=\"발주일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:CUST\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"bind:ORDDTL_RUNDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" maskeditformat=\"@@\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"expr:dataset.getRowLevel(currow)==1||dataset.getRowLevel(currow)==2?&apos;normal&apos;:&apos;date&apos;\" calendardateformat=\"yyyy-MM-dd\" suppress=\"2\" suppressalign=\"middle\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:BOOKMST_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\" expr=\"dataset.getRowLevel(currow)==1?&apos;용도별 소계&apos;:dataset.getRowLevel(currow)==2?&apos;도서별 소계&apos;:BOOK_INFO\"/><Cell col=\"3\" text=\"bind:USE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\"/><Cell col=\"4\" text=\"bind:ORDDTL_PAGE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\"/><Cell col=\"5\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:ORDMST_QTY\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" maskeditformat=\"#,##0.##\"/><Cell col=\"6\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:ORDMST_WORKQTY\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" maskeditformat=\"#,##0.##\"/><Cell col=\"7\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:ORDDTL_UNITCOST\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" maskeditformat=\"#,###.#\"/><Cell col=\"8\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:ORDDTL_AMOUNT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" maskeditformat=\"#,###\"/><Cell col=\"9\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:ORDDTL_VAT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" maskeditformat=\"#,###\"/><Cell col=\"10\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"expr:dataset.getRowLevel(currow)==1||dataset.getRowLevel(currow)==2?&apos;mask&apos;:&apos;normal&apos;\" text=\"bind:ORD_NO\" suppress=\"3\" suppressalign=\"middle\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" expr=\"dataset.getRowLevel(currow)==1||dataset.getRowLevel(currow)==2?ORDDTL_VAT+ORDDTL_AMOUNT:ORD_NO\" maskeditformat=\"#,###\" calendardateformat=\"yyyy-MM-dd\"/></Band><Band id=\"summary\"><Cell background=\"#fbce78\"/><Cell col=\"1\" colspan=\"2\" background=\"#fbce78\" text=\"외주가공비 합계\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" background=\"#fbce78\"/><Cell col=\"4\" background=\"#fbce78\"/><Cell col=\"5\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"6\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"7\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"8\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" expr=\"dataset.getSum(&apos;ORDDTL_AMOUNT&apos;);\" textAlign=\"right\"/><Cell col=\"9\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" expr=\"dataset.getSum(&apos;ORDDTL_VAT&apos;);\" textAlign=\"right\"/><Cell col=\"10\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" expr=\"dataset.getSum(&apos;ORDDTL_VAT&apos;)+dataset.getSum(&apos;ORDDTL_AMOUNT&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/></Band></Format></Formats>");
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
        this.addIncludeScript("MK146_1.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK146_1.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var rdGubunChk;

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
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
            this.addEventHandler("onload",this.MkMain_onload,this);
        };
        this.loadIncludeScript("MK146_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
