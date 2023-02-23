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
            this.set_titletext("인쇄비명세서_국전/4*6");
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
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"91\"/><Column size=\"246\"/><Column size=\"139\"/><Column size=\"93\"/><Column size=\"127\"/><Column size=\"59\"/><Column size=\"103\"/><Column size=\"64\"/><Column size=\"82\"/><Column size=\"82\"/><Column size=\"82\"/><Column size=\"82\"/><Column size=\"82\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"22\" band=\"summ\"/><Row size=\"22\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"진행일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"도서명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"판형\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"부수\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"용도\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"구분\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"규격\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"색도\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" text=\"수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"9\" text=\"단가\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"10\" text=\"공급가액\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"11\" text=\"세액\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"12\" text=\"발주일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:ORDDTL_RUNDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" maskeditformat=\"@@\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"expr:dataset.getRowLevel(currow)==1||dataset.getRowLevel(currow)==2?&apos;normal&apos;:&apos;date&apos;\" calendardateformat=\"yyyy-MM-dd\" suppress=\"1\" suppressalign=\"middle\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\"/><Cell col=\"1\" rowspan=\"2\" text=\"bind:BOOK_CODEYEAR\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"3\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\"/><Cell col=\"2\" rowspan=\"2\" text=\"bind:PLT_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppressalign=\"middle\" expr=\"dataset.getRowLevel(currow)==2?PPR_STND_NAME+&apos; 소계&apos;:dataset.getRowLevel(currow)==1?&apos;도서별 소계&apos;:PPR_STND_NAME\" suppress=\"3\"/><Cell col=\"3\" rowspan=\"2\" text=\"bind:ORDMST_QTY\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,###\" maskedittype=\"number\" maskeditmaskchar=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" suppress=\"3\" suppressalign=\"middle\"/><Cell col=\"4\" rowspan=\"2\" text=\"bind:USE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" calendardateformat=\"yyyy-MM-dd\" suppress=\"0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\"/><Cell col=\"5\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\" text=\"인쇄판\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\"/><Cell col=\"6\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\" text=\"bind:DTL_PAGE\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\"/><Cell col=\"7\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\" text=\"bind:CTP\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\"/><Cell col=\"8\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:ORDDTL_PANQTY\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" maskeditformat=\"#,###\"/><Cell col=\"9\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:ORDDTL_PANUNITCOST\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" maskeditformat=\"#,###\"/><Cell col=\"10\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:ORDDTL_PANAMOUNT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" maskeditformat=\"#,###\"/><Cell col=\"11\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" text=\"bind:ORDDTL_PANVAT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" maskeditformat=\"#,###\"/><Cell col=\"12\" rowspan=\"2\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"expr:dataset.getRowLevel(currow)==1||dataset.getRowLevel(currow)==2?&apos;mask&apos;:&apos;normal&apos;\" text=\"bind:ORD_NO\" suppress=\"2\" suppressalign=\"middle\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" expr=\"dataset.getRowLevel(currow)==1||dataset.getRowLevel(currow)==2?ORDDTL_PANVAT+ORDDTL_PANAMOUNT+ORDDTL_VAT+ORDDTL_AMOUNT:ORD_NO\" maskeditformat=\"#,###\"/><Cell row=\"1\" col=\"5\" text=\"인쇄비\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\"/><Cell row=\"1\" col=\"6\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" text=\"bind:PPR_STNDNAME\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\"/><Cell row=\"1\" col=\"7\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" text=\"bind:ORDDTL_TONE\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\"/><Cell row=\"1\" col=\"8\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" text=\"bind:ORDDTL_JMI\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" displaytype=\"mask\" maskeditformat=\"#,##0.000\"/><Cell row=\"1\" col=\"9\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" text=\"bind:ORDDTL_UNITCOST\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell row=\"1\" col=\"10\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" text=\"bind:ORDDTL_AMOUNT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell row=\"1\" col=\"11\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" text=\"bind:ORDDTL_VAT\" displaytype=\"mask\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;mk_subtotal&apos;:dataset.getRowLevel(currow)==2?&apos;mk_daytotal&apos;:&apos;&apos;\" maskeditformat=\"#,###\"/></Band><Band id=\"summary\"><Cell rowspan=\"2\" colspan=\"6\" background=\"#fbce78\" text=\"총계\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" background=\"#fbce78\"/><Cell col=\"7\" background=\"#fbce78\"/><Cell col=\"8\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" expr=\"dataset.getSum(&apos;ORDDTL_PANQTY&apos;);\" textAlign=\"right\"/><Cell col=\"9\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"10\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" expr=\"dataset.getSum(&apos;ORDDTL_PANAMOUNT&apos;);\" textAlign=\"right\"/><Cell col=\"11\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" expr=\"dataset.getSum(&apos;ORDDTL_PANVAT&apos;);\" textAlign=\"right\"/><Cell col=\"12\" rowspan=\"2\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" expr=\"dataset.getSum(&apos;ORDDTL_PANVAT&apos;)+dataset.getSum(&apos;ORDDTL_PANAMOUNT&apos;)+dataset.getSum(&apos;ORDDTL_VAT&apos;)+dataset.getSum(&apos;ORDDTL_AMOUNT&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell row=\"1\" col=\"6\" background=\"#fbce78\"/><Cell row=\"1\" col=\"7\" background=\"#fbce78\"/><Cell row=\"1\" col=\"8\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###.##\" displaytype=\"mask\" expr=\"dataset.getSum(&apos;ORDDTL_JMI&apos;);\" textAlign=\"right\"/><Cell row=\"1\" col=\"9\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"1\" col=\"10\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" expr=\"dataset.getSum(&apos;ORDDTL_AMOUNT&apos;);\" textAlign=\"right\"/><Cell row=\"1\" col=\"11\" background=\"#fbce78\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" maskeditformat=\"#,###\" displaytype=\"mask\" expr=\"dataset.getSum(&apos;ORDDTL_VAT&apos;);\" textAlign=\"right\"/></Band></Format></Formats>");
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
        this.addIncludeScript("MK143_1_PAPER.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK143_1_PAPER.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);
        	this.fnChk(this.parent.parent.rdGubun.value);
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

        this.fnChk = function(rdGubunChk)
        {
        	if(rdGubunChk == 5){
        		this.grdList.setCellProperty("head", "9", "text", "단가(현금)");
        		this.grdList.setCellProperty("head", "10", "text", "공급가액(현금)");
        	}else{
        		this.grdList.setCellProperty("head", "9", "text", "단가");
        		this.grdList.setCellProperty("head", "10", "text", "공급가액");
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
            this.addEventHandler("onload",this.MkMain_onload,this);
        };
        this.loadIncludeScript("MK143_1_PAPER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
