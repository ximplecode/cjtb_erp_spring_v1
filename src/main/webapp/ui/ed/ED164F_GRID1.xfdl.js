(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED164F_GRID1");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("Grid00","0","0","100.00%","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"200\"/><Column size=\"35\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"80\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"도서코드\"/><Cell col=\"1\" text=\"도서명\"/><Cell col=\"2\" text=\"년판\"/><Cell col=\"3\" text=\"정산구분\"/><Cell col=\"4\" text=\"해당부서\"/><Cell col=\"5\" text=\"정가\"/><Cell col=\"6\" text=\"인세&#13;&#10;비율\" wordWrap=\"char\"/><Cell col=\"7\" text=\"출고\"/><Cell col=\"8\" text=\"반품\"/><Cell col=\"9\" text=\"반품성&#13;&#10;대체\" wordWrap=\"char\"/><Cell col=\"10\" text=\"반품합계\" wordWrap=\"char\"/><Cell col=\"11\" text=\"순매수량\" wordWrap=\"char\"/><Cell col=\"12\" text=\"인세총액\"/><Cell col=\"13\" text=\"기정산금액\"/><Cell col=\"14\" text=\"지급&#13;&#10;비율\" wordWrap=\"english\"/><Cell col=\"15\" text=\"당해년도&#13;&#10;인세지급액\" wordWrap=\"char\"/><Cell col=\"16\" text=\"계약금\"/><Cell col=\"17\" text=\"매절원고료\"/><Cell col=\"18\" text=\"실지급액\"/></Band><Band id=\"body\"><Cell text=\"bind:BOOKMST_CODE\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : dataset.getRowLevel(currow)==2? &apos;edsubtotal&apos; : &apos;&apos;\"/><Cell col=\"1\" text=\"bind:BOOKNAME\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : dataset.getRowLevel(currow)==2? &apos;edsubtotal&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:BOOKMST_YEAR\" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : dataset.getRowLevel(currow)==2? &apos;edsubtotal&apos; : &apos;&apos;\"/><Cell col=\"3\" text=\"expr:dataset.getRowLevel(currow) ==1? &quot;정산구분 합계&quot;:ROYALTY_NAME \" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : dataset.getRowLevel(currow)==2? &apos;edsubtotal&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"expr:dataset.getRowLevel(currow) ==2? &quot;부서 합계&quot;:SECTION_NAME \" textAlign=\"center\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : dataset.getRowLevel(currow)==2? &apos;edsubtotal&apos; : &apos;&apos;\"/><Cell col=\"5\" text=\"bind:PRICE\" subsumtext=\"  \" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : dataset.getRowLevel(currow)==2? &apos;edsubtotal&apos; : &apos;&apos;\"/><Cell col=\"6\" expr=\"ROYALTYRATE + &quot;%&quot;\" textAlign=\"center\" subsumtext=\"  \" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : dataset.getRowLevel(currow)==2? &apos;edsubtotal&apos; : &apos;&apos;\"/><Cell col=\"7\" text=\"bind:DELIVERYQTY\" subsumtext=\"  \" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : dataset.getRowLevel(currow)==2? &apos;edsubtotal&apos; : &apos;&apos;\"/><Cell col=\"8\" text=\"bind:RETURNEDQTY\" subsumtext=\"  \" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : dataset.getRowLevel(currow)==2? &apos;edsubtotal&apos; : &apos;&apos;\"/><Cell col=\"9\" text=\"bind:CHANGEQTY\" subsumtext=\"  \" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : dataset.getRowLevel(currow)==2? &apos;edsubtotal&apos; : &apos;&apos;\"/><Cell col=\"10\" expr=\"RETURNEDQTY + CHANGEQTY\" displaytype=\"number\" subsumtext=\"   \" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : dataset.getRowLevel(currow)==2? &apos;edsubtotal&apos; : &apos;&apos;\"/><Cell col=\"11\" text=\"bind:NETSALEQTY\" subsumtext=\"  \" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : dataset.getRowLevel(currow)==2? &apos;edsubtotal&apos; : &apos;&apos;\"/><Cell col=\"12\" suppressalign=\"middle\" suppress=\"1\" displaytype=\"number\" text=\"expr:dataset.getRowLevel(currow) ==0?TOTAL_AMOUNT:dataset.getRowLevel(currow) ==1?comp.parent.fn_sum(ROYALTY_KIND,SECTION_CODE,&quot;TOTAL_AMOUNT&quot;):comp.parent.fn_sumSection(SECTION_CODE,&quot;TOTAL_AMOUNT&quot;)\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : dataset.getRowLevel(currow)==2? &apos;edsubtotal&apos; : &apos;&apos;\"/><Cell col=\"13\" text=\"expr:dataset.getRowLevel(currow) ==0?PRE_AMOUNT:dataset.getRowLevel(currow) ==1?comp.parent.fn_sum(ROYALTY_KIND,SECTION_CODE,&quot;PRE_AMOUNT&quot;):comp.parent.fn_sumSection(SECTION_CODE,&quot;PRE_AMOUNT&quot;)\" suppressalign=\"middle\" suppress=\"2\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : dataset.getRowLevel(currow)==2? &apos;edsubtotal&apos; : &apos;&apos;\"/><Cell col=\"14\" expr=\"PAYRATE  + &quot;%&quot;\" textAlign=\"right\" suppressalign=\"middle\" subsumtext=\"   \" suppress=\"3\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : dataset.getRowLevel(currow)==2? &apos;edsubtotal&apos; : &apos;&apos;\"/><Cell col=\"15\" text=\"expr:dataset.getRowLevel(currow) ==0?YEAR_PAYAMOUNT:dataset.getRowLevel(currow) ==1?comp.parent.fn_sum(ROYALTY_KIND,SECTION_CODE,&quot;YEAR_PAYAMOUNT&quot;):comp.parent.fn_sumSection(SECTION_CODE,&quot;YEAR_PAYAMOUNT&quot;)\" suppressalign=\"middle\" suppress=\"4\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : dataset.getRowLevel(currow)==2? &apos;edsubtotal&apos; : &apos;&apos;\"/><Cell col=\"16\" text=\"expr:dataset.getRowLevel(currow) ==0?DOWN_PAYMENT:dataset.getRowLevel(currow) ==1?comp.parent.fn_sum(ROYALTY_KIND,SECTION_CODE,&quot;DOWN_PAYMENT&quot;):comp.parent.fn_sumSection(SECTION_CODE,&quot;DOWN_PAYMENT&quot;)\" suppressalign=\"middle\" suppress=\"5\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : dataset.getRowLevel(currow)==2? &apos;edsubtotal&apos; : &apos;&apos;\"/><Cell col=\"17\" text=\"expr:dataset.getRowLevel(currow) ==0?MANUSCRIPT_AMOUNT:dataset.getRowLevel(currow) ==1?comp.parent.fn_sum(ROYALTY_KIND,SECTION_CODE,&quot;MANUSCRIPT_AMOUNT&quot;):comp.parent.fn_sumSection(SECTION_CODE,&quot;MANUSCRIPT_AMOUNT&quot;)\" suppressalign=\"middle\" suppress=\"6\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : dataset.getRowLevel(currow)==2? &apos;edsubtotal&apos; : &apos;&apos;\"/><Cell col=\"18\" text=\"expr:dataset.getRowLevel(currow) ==0?REAL_PAYAMOUNT:dataset.getRowLevel(currow) ==1?comp.parent.fn_sum(ROYALTY_KIND,SECTION_CODE,&quot;REAL_PAYAMOUNT&quot;):comp.parent.fn_sumSection(SECTION_CODE,&quot;REAL_PAYAMOUNT&quot;)\" suppressalign=\"middle\" suppress=\"7\" displaytype=\"number\" cssclass=\"expr:dataset.getRowLevel(currow)==1? &apos;edbusetotal&apos; : dataset.getRowLevel(currow)==2? &apos;edsubtotal&apos; : &apos;&apos;\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\" expr=\"comp.parent.fn_Tot(&quot;TOTAL_AMOUNT&quot;)\" displaytype=\"number\"/><Cell col=\"13\" expr=\"comp.parent.fn_Tot(&quot;PRE_AMOUNT&quot;)\" displaytype=\"number\"/><Cell col=\"14\"/><Cell col=\"15\" expr=\"comp.parent.fn_Tot(&quot;YEAR_PAYAMOUNT&quot;)\" displaytype=\"number\"/><Cell col=\"16\" expr=\"comp.parent.fn_Tot(&quot;DOWN_PAYMENT&quot;)\" displaytype=\"number\"/><Cell col=\"17\" expr=\"comp.parent.fn_Tot(&quot;MANUSCRIPT_AMOUNT&quot;)\" displaytype=\"number\"/><Cell col=\"18\" expr=\"comp.parent.fn_Tot(&quot;REAL_PAYAMOUNT&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
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
        this.addIncludeScript("ED164F_GRID1.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("ED164F_GRID1.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        this.ED164F_GRID1_onload = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.ED164F_GRID1_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.ED164F_GRID1_ontimer = function(obj,e)
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
        	this.lfn_grdAutofit(this.Grid00);
        };

        this.fn_sum = function(kind, section, nCol)
        {
            var nSum = 0;
            for(var i=0; i < this.parent.parent.ds_list.rowcount; i++){
                if(this.parent.parent.ds_list.getRowLevel(i) == 0){
                    if(this.parent.parent.ds_list.getColumn(i,"ROYALTY_KIND") == kind && this.parent.parent.ds_list.getColumn(i,"SECTION_CODE") == section){
                        if(i == 0){
                            nSum+=this.parent.parent.ds_list.getColumn(i,nCol);
                        }else if(this.parent.parent.ds_list.getColumn(i,nCol) != this.parent.parent.ds_list.getColumn(i-1,nCol)){
                            nSum+=this.parent.parent.ds_list.getColumn(i,nCol);
                        }
                    }
                }
            }
            return nSum;
        }

        this.fn_sumSection = function(section, nCol)
        {
        	trace("section");
            var nSum = 0;
            for(var i=0; i < this.parent.parent.ds_list.rowcount; i++){
                if(this.parent.parent.ds_list.getRowLevel(i) == 0){
                    if(this.parent.parent.ds_list.getColumn(i,"SECTION_CODE") == section){
                        if(i == 0){
                            nSum+=this.parent.parent.ds_list.getColumn(i,nCol);
                        }else if(this.parent.parent.ds_list.getColumn(i,nCol) != this.parent.parent.ds_list.getColumn(i-1,nCol)){
                            nSum+=this.parent.parent.ds_list.getColumn(i,nCol);
                        }
                    }
                }
            }

        	trace(nSum);
            return nSum;
        }


        this.fn_Tot = function(colName)
        {
            var nTot = 0;
            for(var i=0; i < this.parent.parent.ds_list.rowcount; i++){
                if(this.parent.parent.ds_list.getRowLevel(i) == 0){
        		   if(i == 0){
                        nTot+=nexacro.toNumber(this.parent.parent.ds_list.getColumn(i,colName));
                    }else if(this.parent.parent.ds_list.getColumn(i,colName) != this.parent.parent.ds_list.getColumn(i-1,colName)){
                        nTot+=nexacro.toNumber(this.parent.parent.ds_list.getColumn(i,colName));
                    }
                }
            }
            return nTot;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ED164F_GRID1_onload,this);
            this.addEventHandler("onsize",this.ED164F_GRID1_onsize,this);
            this.addEventHandler("ontimer",this.ED164F_GRID1_ontimer,this);
        };
        this.loadIncludeScript("ED164F_GRID1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
