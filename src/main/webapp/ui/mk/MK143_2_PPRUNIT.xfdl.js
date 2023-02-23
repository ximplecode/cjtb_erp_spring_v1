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
            this.set_titletext("인쇄비명세서_용지구분/매엽,윤전");
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
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"91\"/><Column size=\"246\"/><Column size=\"139\"/><Column size=\"93\"/><Column size=\"127\"/><Column size=\"59\"/><Column size=\"103\"/><Column size=\"64\"/><Column size=\"82\"/><Column size=\"82\"/><Column size=\"82\"/><Column size=\"82\"/><Column size=\"82\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"22\" band=\"summ\"/><Row size=\"22\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"진행일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"도서명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"판형\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"부수\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"용도\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"구분\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"규격\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"색도\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" text=\"수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"9\" text=\"단가\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"10\" text=\"공급가액\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"11\" text=\"세액\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"12\" text=\"발주일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:ORDDTL_RUNDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" maskeditformat=\"@@\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"expr:dataset.getRowLevel(currow)==1||dataset.getRowLevel(currow)==2?&apos;normal&apos;:&apos;date&apos;\" calendardateformat=\"yyyy-MM-dd\" suppress=\"3\" suppressalign=\"middle\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\"/><Cell col=\"1\" rowspan=\"2\" text=\"bind:BOOK_CODEYEAR\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"3\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\"/><Cell col=\"2\" rowspan=\"2\" text=\"bind:PPR_UNIT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"3\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\" expr=\"dataset.getRowLevel(currow)==1?&apos;도서별 소계&apos;:PLT_NAME\"/><Cell col=\"3\" rowspan=\"2\" text=\"bind:ORDMST_QTY\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###\" maskedittype=\"number\" maskeditmaskchar=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppress=\"3\" suppressalign=\"middle\"/><Cell col=\"4\" rowspan=\"2\" text=\"bind:USE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\"/><Cell col=\"5\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\" text=\"인쇄판\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\"/><Cell col=\"6\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\" text=\"bind:DTL_PAGE\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:&apos;&apos;\"/><Cell col=\"7\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\" text=\"bind:CTP\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\"/><Cell col=\"8\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:ORDDTL_PANQTY\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" maskeditformat=\"#,###\"/><Cell col=\"9\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:ORDDTL_PANUNITCOST\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" maskeditformat=\"#,###\"/><Cell col=\"10\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:ORDDTL_PANAMOUNT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" maskeditformat=\"#,###\"/><Cell col=\"11\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:ORDDTL_PANVAT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" maskeditformat=\"#,###\"/><Cell col=\"12\" rowspan=\"2\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"expr:dataset.getRowLevel(currow)==1||dataset.getRowLevel(currow)==2?&apos;mask&apos;:&apos;normal&apos;\" text=\"bind:ORD_NO\" suppress=\"5\" suppressalign=\"middle\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" expr=\"dataset.getRowLevel(currow)==1||dataset.getRowLevel(currow)==2?ORDDTL_PANVAT+ORDDTL_PANAMOUNT+ORDDTL_VAT+ORDDTL_AMOUNT:ORD_NO\" maskeditformat=\"#,###\"/><Cell row=\"1\" col=\"5\" text=\"인쇄비\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\"/><Cell row=\"1\" col=\"6\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" text=\"bind:PPR_STNDNAME\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\"/><Cell row=\"1\" col=\"7\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" text=\"bind:ORDDTL_TONE\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\"/><Cell row=\"1\" col=\"8\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" text=\"bind:ORDDTL_JMI\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" displaytype=\"mask\" maskeditformat=\"#,##0.000\"/><Cell row=\"1\" col=\"9\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" text=\"bind:ORDDTL_UNITCOST\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell row=\"1\" col=\"10\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" text=\"bind:ORDDTL_AMOUNT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell row=\"1\" col=\"11\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" text=\"bind:ORDDTL_VAT\" displaytype=\"mask\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" maskeditformat=\"#,###\"/></Band><Band id=\"summary\"><Cell rowspan=\"2\" colspan=\"6\" background=\"#fbce78\" text=\"인쇄비 총계\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" background=\"#fbce78\"/><Cell col=\"7\" background=\"#fbce78\"/><Cell col=\"8\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" expr=\"dataset.getSum(&apos;ORDDTL_PANQTY&apos;);\" textAlign=\"right\"/><Cell col=\"9\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"10\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" expr=\"dataset.getSum(&apos;ORDDTL_PANAMOUNT&apos;);\" textAlign=\"right\"/><Cell col=\"11\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" expr=\"dataset.getSum(&apos;ORDDTL_PANVAT&apos;);\" textAlign=\"right\"/><Cell col=\"12\" rowspan=\"2\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" expr=\"dataset.getSum(&apos;ORDDTL_PANVAT&apos;)+dataset.getSum(&apos;ORDDTL_PANAMOUNT&apos;)+dataset.getSum(&apos;ORDDTL_VAT&apos;)+dataset.getSum(&apos;ORDDTL_AMOUNT&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell row=\"1\" col=\"6\" background=\"#fbce78\"/><Cell row=\"1\" col=\"7\" background=\"#fbce78\"/><Cell row=\"1\" col=\"8\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.000\" displaytype=\"mask\" expr=\"dataset.getSum(&apos;ORDDTL_JMI&apos;);\" textAlign=\"right\"/><Cell row=\"1\" col=\"9\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"1\" col=\"10\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" expr=\"dataset.getSum(&apos;ORDDTL_AMOUNT&apos;);\" textAlign=\"right\"/><Cell row=\"1\" col=\"11\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" expr=\"dataset.getSum(&apos;ORDDTL_VAT&apos;);\" textAlign=\"right\"/><Cell row=\"2\" rowspan=\"2\" colspan=\"6\" background=\"#F7CAC9\" text=\"매엽지 총계\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"2\" col=\"6\" background=\"#F7CAC9\"/><Cell row=\"2\" col=\"7\" background=\"#F7CAC9\"/><Cell row=\"2\" col=\"8\" background=\"#F7CAC9\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\" expr=\"dataset.getCaseSum(&quot;PPR_UNIT == &apos;R&apos;&quot;, &quot;ORDDTL_PANQTY&quot;);\"/><Cell row=\"2\" col=\"9\" background=\"#F7CAC9\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"2\" col=\"10\" background=\"#F7CAC9\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" expr=\"dataset.getCaseSum(&quot;PPR_UNIT == &apos;R&apos;&quot;, &quot;ORDDTL_PANAMOUNT&quot;);\" textAlign=\"right\"/><Cell row=\"2\" col=\"11\" background=\"#F7CAC9\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" expr=\"dataset.getCaseSum(&quot;PPR_UNIT == &apos;R&apos;&quot;, &quot;ORDDTL_PANVAT&quot;);\" textAlign=\"right\"/><Cell row=\"2\" col=\"12\" rowspan=\"2\" background=\"#F7CAC9\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" expr=\"dataset.getCaseSum(&quot;PPR_UNIT == &apos;R&apos;&quot;, &quot;ORDDTL_PANVAT&quot;)+dataset.getCaseSum(&quot;PPR_UNIT == &apos;R&apos;&quot;, &quot;ORDDTL_PANAMOUNT&quot;)+dataset.getCaseSum(&quot;PPR_UNIT == &apos;R&apos;&quot;, &quot;ORDDTL_VAT&quot;)+dataset.getCaseSum(&quot;PPR_UNIT == &apos;R&apos;&quot;, &quot;ORDDTL_AMOUNT&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell row=\"3\" col=\"6\" background=\"#F7CAC9\"/><Cell row=\"3\" col=\"7\" background=\"#F7CAC9\"/><Cell row=\"3\" col=\"8\" background=\"#F7CAC9\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.000\" displaytype=\"mask\" expr=\"dataset.getCaseSum(&quot;PPR_UNIT == &apos;R&apos;&quot;, &quot;ORDDTL_JMI&quot;);\" textAlign=\"right\"/><Cell row=\"3\" col=\"9\" background=\"#F7CAC9\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"3\" col=\"10\" background=\"#F7CAC9\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" expr=\"dataset.getCaseSum(&quot;PPR_UNIT == &apos;R&apos;&quot;, &quot;ORDDTL_AMOUNT&quot;);\" textAlign=\"right\"/><Cell row=\"3\" col=\"11\" background=\"#F7CAC9\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" expr=\"dataset.getCaseSum(&quot;PPR_UNIT == &apos;R&apos;&quot;, &quot;ORDDTL_VAT&quot;);\" textAlign=\"right\"/><Cell row=\"4\" rowspan=\"2\" colspan=\"6\" background=\"#89ABE3\" text=\"윤전지 총계\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell row=\"4\" col=\"6\" background=\"#89ABE3\"/><Cell row=\"4\" col=\"7\" background=\"#89ABE3\"/><Cell row=\"4\" col=\"8\" background=\"#89ABE3\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" expr=\"dataset.getCaseSum(&quot;PPR_UNIT == &apos;T&apos;&quot;, &quot;ORDDTL_PANQTY&quot;);\" textAlign=\"right\"/><Cell row=\"4\" col=\"9\" background=\"#89ABE3\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"4\" col=\"10\" background=\"#89ABE3\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" expr=\"dataset.getCaseSum(&quot;PPR_UNIT == &apos;T&apos;&quot;, &quot;ORDDTL_PANAMOUNT&quot;);\" textAlign=\"right\"/><Cell row=\"4\" col=\"11\" background=\"#89ABE3\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" expr=\"dataset.getCaseSum(&quot;PPR_UNIT == &apos;T&apos;&quot;, &quot;ORDDTL_PANVAT&quot;);\" textAlign=\"right\"/><Cell row=\"4\" col=\"12\" rowspan=\"2\" background=\"#89ABE3\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" expr=\"dataset.getCaseSum(&quot;PPR_UNIT == &apos;T&apos;&quot;, &quot;ORDDTL_PANVAT&quot;)+dataset.getCaseSum(&quot;PPR_UNIT == &apos;T&apos;&quot;, &quot;ORDDTL_PANAMOUNT&quot;)+dataset.getCaseSum(&quot;PPR_UNIT == &apos;T&apos;&quot;, &quot;ORDDTL_VAT&quot;)+dataset.getCaseSum(&quot;PPR_UNIT == &apos;T&apos;&quot;, &quot;ORDDTL_AMOUNT&quot;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell row=\"5\" col=\"6\" background=\"#89ABE3\"/><Cell row=\"5\" col=\"7\" background=\"#89ABE3\"/><Cell row=\"5\" col=\"8\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,##0.000\" displaytype=\"mask\" expr=\"dataset.getCaseSum(&quot;PPR_UNIT == &apos;T&apos;&quot;, &quot;ORDDTL_JMI&quot;);\" textAlign=\"right\" background=\"#89ABE3\"/><Cell row=\"5\" col=\"9\" background=\"#89ABE3\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"5\" col=\"10\" background=\"#89ABE3\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" expr=\"dataset.getCaseSum(&quot;PPR_UNIT == &apos;T&apos;&quot;, &quot;ORDDTL_AMOUNT&quot;);\" textAlign=\"right\"/><Cell row=\"5\" col=\"11\" background=\"#89ABE3\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" expr=\"dataset.getCaseSum(&quot;PPR_UNIT == &apos;T&apos;&quot;, &quot;ORDDTL_VAT&quot;);\" textAlign=\"right\"/></Band></Format></Formats>");
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
        this.addIncludeScript("MK143_2_PPRUNIT.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK143_2_PPRUNIT.xfdl", function() {
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
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
            this.addEventHandler("onload",this.MkMain_onload,this);
        };
        this.loadIncludeScript("MK143_2_PPRUNIT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
