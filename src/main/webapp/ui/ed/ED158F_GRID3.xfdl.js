(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED158F_GRID3");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("Grid1","0","0","100.00%","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\" band=\"left\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"33\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"부서명\"/><Cell col=\"1\" rowspan=\"2\" text=\"도서명\"/><Cell col=\"2\" rowspan=\"2\" expr=\"this.cal_Sdate.value\"/><Cell col=\"3\" rowspan=\"2\" text=\"전년 동월&#13;&#10;외주비 지급액\"/><Cell col=\"4\" rowspan=\"2\" text=\"금년&#13;&#10;외주비 누적액\"/><Cell col=\"5\" rowspan=\"2\" text=\"전년 동기&#13;&#10;외주비 누적액\"/><Cell col=\"6\" colspan=\"2\" text=\"전년 동기대비 누적액&#13;&#10;증감비교\"/><Cell row=\"1\" col=\"6\" text=\"증감액\"/><Cell row=\"1\" col=\"7\" text=\"증감율\"/></Band><Band id=\"body\"><Cell text=\"bind:NAME\" suppress=\"1\" expr=\"dataset.getRowLevel(currow)==0? NAME : dataset.getRowLevel(currow)==1? NAME + &quot;소계&quot; : BU_GRCODE == &quot;20&quot;? &quot;경영지원본부 소계&quot; : BU_GRCODE == &quot;50&quot;? &quot;중등개발본부 소계&quot; : BU_GRCODE == &quot;60&quot;? &quot;초등개발본부 소계&quot; : &quot;기업부설연구소 소계&quot;\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : dataset.getRowLevel(currow)==2? &apos;edsubtotal&apos; : &apos;&apos;\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:BOOK_NAME\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : dataset.getRowLevel(currow)==2? &apos;edsubtotal&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:MONTH_AMT\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : dataset.getRowLevel(currow)==2? &apos;edsubtotal&apos; : &apos;&apos;\"/><Cell col=\"3\" text=\"bind:POST_THIS_AMT\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : dataset.getRowLevel(currow)==2? &apos;edsubtotal&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"bind:THIS_AMT\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : dataset.getRowLevel(currow)==2? &apos;edsubtotal&apos; : &apos;&apos;\"/><Cell col=\"5\" text=\"bind:POST_AMT\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : dataset.getRowLevel(currow)==2? &apos;edsubtotal&apos; : &apos;&apos;\"/><Cell col=\"6\" expr=\"THIS_AMT-POST_AMT\" displaytype=\"currency\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : dataset.getRowLevel(currow)==2? &apos;edsubtotal&apos; : &apos;&apos;\"/><Cell col=\"7\" expr=\"POST_AMT == &quot;0&quot;?  &quot;(전년)거래없음&quot; :  nexacro.round( ((THIS_AMT-POST_AMT)/POST_AMT*100), 0 ) + &quot;%&quot;\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : dataset.getRowLevel(currow)==2? &apos;edsubtotal&apos; : &apos;&apos;\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" expr=\"dataset.getSum(&apos;MONTH_AMT&apos;)\" displaytype=\"currency\" textAlign=\"right\"/><Cell col=\"3\" expr=\"dataset.getSum(&apos;POST_THIS_AMT&apos;)\" displaytype=\"currency\" textAlign=\"right\"/><Cell col=\"4\" expr=\"dataset.getSum(&apos;THIS_AMT&apos;)\" displaytype=\"currency\" textAlign=\"right\"/><Cell col=\"5\" expr=\"dataset.getSum(&apos;POST_AMT&apos;)\" displaytype=\"currency\" textAlign=\"right\"/><Cell col=\"6\" expr=\"dataset.getSum(&apos;THIS_AMT&apos;)-dataset.getSum(&apos;POST_AMT&apos;);\" displaytype=\"currency\" textAlign=\"right\"/><Cell col=\"7\" expr=\"dataset.getSum(&apos;POST_AMT&apos;) == &quot;0&quot;?  &quot;(전년)거래없음&quot; :  nexacro.round((dataset.getSum(&apos;THIS_AMT&apos;)-dataset.getSum(&apos;POST_AMT&apos;))/dataset.getSum(&apos;POST_AMT&apos;)*100, 0) + &quot;%&quot;\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ED158F_GRID3.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("ED158F_GRID3.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        this.ED158F_GRID3_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.ED158F_GRID3_ontimer = function(obj,e)
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
        	this.lfn_grdAutofit(this.Grid1);
        };

        this.ED158F_GRID3_onload = function(obj,e)
        {
        	this.setTimer(0,1);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.ED158F_GRID3_onsize,this);
            this.addEventHandler("ontimer",this.ED158F_GRID3_ontimer,this);
            this.addEventHandler("onload",this.ED158F_GRID3_onload,this);
            this.Grid1.addEventHandler("onsize",this.Grid1_onsize,this);
        };
        this.loadIncludeScript("ED158F_GRID3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
