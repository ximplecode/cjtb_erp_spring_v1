(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED158F_GRID1");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("Grid1","0","0","100%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"100\"/></Columns><Rows><Row size=\"33\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"본 부 명 \"/><Cell col=\"1\" rowspan=\"2\" expr=\"this.parent.cal_Sdate.value\"/><Cell col=\"2\" rowspan=\"2\" text=\"전년 동월&#13;&#10;외주비 지급액\"/><Cell col=\"3\" rowspan=\"2\" text=\"금년&#13;&#10;외주비 누적액\"/><Cell col=\"4\" rowspan=\"2\" text=\"전년 동기&#13;&#10;외주비 누적액\"/><Cell col=\"5\" colspan=\"2\" text=\"전년 동기대비 누적액&#13;&#10;증감비교\"/><Cell row=\"1\" col=\"5\" text=\"증감액\"/><Cell row=\"1\" col=\"6\" text=\"증감율\"/></Band><Band id=\"body\"><Cell text=\"bind:NAME\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:MONTH_AMT\" displaytype=\"currency\"/><Cell col=\"2\" text=\"bind:POST_THIS_AMT\" displaytype=\"currency\"/><Cell col=\"3\" text=\"bind:THIS_AMT\" displaytype=\"currency\"/><Cell col=\"4\" text=\"bind:POST_AMT\" displaytype=\"currency\"/><Cell col=\"5\" displaytype=\"currency\" expr=\"THIS_AMT-POST_AMT\"/><Cell col=\"6\" displaytype=\"normal\" textAlign=\"right\" expr=\"POST_AMT == &quot;0&quot;?  &quot;(전년)거래없음&quot; :  nexacro.round( ((THIS_AMT-POST_AMT)/POST_AMT*100), 0 ) + &quot;%&quot;\"/></Band><Band id=\"summary\"><Cell text=\"합계\"/><Cell col=\"1\" expr=\"dataset.getSum(&apos;MONTH_AMT&apos;);\" displaytype=\"currency\" textAlign=\"right\"/><Cell col=\"2\" expr=\"dataset.getSum(&apos;POST_THIS_AMT&apos;);\" displaytype=\"currency\" textAlign=\"right\"/><Cell col=\"3\" expr=\"dataset.getSum(&apos;THIS_AMT&apos;);\" displaytype=\"currency\" textAlign=\"right\"/><Cell col=\"4\" displaytype=\"currency\" textAlign=\"right\" expr=\"dataset.getSum(&apos;POST_AMT&apos;);\"/><Cell col=\"5\" displaytype=\"currency\" textAlign=\"right\" expr=\"dataset.getSum(&apos;THIS_AMT&apos;)-dataset.getSum(&apos;POST_AMT&apos;);\"/><Cell col=\"6\" displaytype=\"normal\" textAlign=\"right\" expr=\"dataset.getSum(&apos;POST_AMT&apos;) == &quot;0&quot;?  &quot;(전년)거래없음&quot; :  nexacro.round((dataset.getSum(&apos;THIS_AMT&apos;)-dataset.getSum(&apos;POST_AMT&apos;))/dataset.getSum(&apos;POST_AMT&apos;)*100, 0) + &quot;%&quot;\"/></Band></Format></Formats>");
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
        this.addIncludeScript("ED158F_GRID1.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("ED158F_GRID1.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        this.ED158F_GRID1_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.ED158F_GRID1_ontimer = function(obj,e)
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

        this.ED158F_GRID1_onload = function(obj,e)
        {
        	this.setTimer(0,1);
        	this.Grid1.setCellProperty("head", 1, "text", this.parent.parent.cal_Sdate.value.substr(0,4) + "년" + this.parent.parent.cal_Sdate.value.substr(4,2) + "월");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.ED158F_GRID1_onsize,this);
            this.addEventHandler("ontimer",this.ED158F_GRID1_ontimer,this);
            this.addEventHandler("onload",this.ED158F_GRID1_onload,this);
        };
        this.loadIncludeScript("ED158F_GRID1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
