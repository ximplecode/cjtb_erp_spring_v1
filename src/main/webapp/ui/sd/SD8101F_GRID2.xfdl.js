(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD8101F_GRID2");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1370,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("SD8101F_GRID2","0%","0",null,"100.00%","0%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_1");
            obj.set_formatid("default");
            obj.set_cellmovingtype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"260\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"일자\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" text=\"거래처\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"><Cell cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\" suppress=\"1\" displaytype=\"date\" calendardateformat=\"MM/dd\" expr=\"dataset.getRowLevel(currow)==1?&apos;&apos;:S_DATE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"1\" text=\"bind:CUST_NM\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"left\" expr=\"dataset.getRowLevel(currow)==1?&apos;&lt; 소 계 &gt;&apos;:CUST_NM\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"&lt; 총 계 &gt;\"/></Band></Format></Formats>");
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
        this.addIncludeScript("SD8101F_GRID2.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD8101F_GRID2.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var grid_base_col = 2;
        var ds_base_col = 7;
        /*
        this.SD8101F_GRID2_onsize = function(obj:nexacro.Form,e:nexacro.SizeEventInfo)
        {
        	this.setTimer(0,1);
        };

        this.SD8101F_GRID2_ontimer = function(obj:nexacro.Form,e:nexacro.TimerEventInfo)
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
        	this.lfn_grdAutofit(this.SD8101F_GRID2);
        };
        */
        this.SD8101F_GRID2_onload = function(obj,e)
        {
        	var j = 0; // Body Cell 위치 조정
        	var k = 0; // Summary Cell 위치 조정
        	var str_list_U = "";
        	var str_list_U_sum = "";
        	for(var i = 0; i < ((this.parent.parent.ds_1.getColCount() - ds_base_col) / 2); i++)
        	{
        		j = i*2 + grid_base_col; // ds_1의 MDD Column 시작 번호
        		k = i*2 + 1; // Summary Cell에 들어갈 ds_1 데이터 위치 맞추기 - "총계"(0번째 Cell) 다음 Data값 들어와야 하므로 +1, 한번에 2개의 column이 생성되므로 i*2
        		this.SD8101F_GRID2.appendContentsCol("body"); // Column 추가
        		this.SD8101F_GRID2.setCellProperty( "head", j, "text", ""); // 추가한 Column Head text를 해당년도로
        		this.SD8101F_GRID2.setFormatColProperty(j, "size", 20); // 추가한 Column size 조정
        		// Body Cell에 들어갈 ds_1 데이터 위치 맞추기 - ds_base_col를 +하여 MDD,SUGM값 Column 시작,  두 개의 Column 위치를 맞추기 위한 , 이후
        		this.SD8101F_GRID2.setCellProperty( "body", j, "expr", this.parent.parent.ds_1.getColID(ds_base_col+(i*2))); // cell 위치에 MDD|U_SUGM값 expr 설정
        		this.SD8101F_GRID2.setCellProperty( "body", j, "cssclass", "expr:dataset.getRowLevel(currow)==1?'sdcss_jp_total': dataset.getRowLevel(currow)==2? 'sdcss_daily_total' : ''"); // css 적용

        		this.SD8101F_GRID2.appendContentsCol("body");

        		/*  Head cell merge 코드. 사용 시 꽤나 느려짐;;
        		this.SD8101F_GRID2.mergeCell( j, j+1, -1, -1 );
        		this.SD8101F_GRID2.setCellProperty( "head", j, "text", this.parent.parent.ds_1.getColID(ds_base_col+((i*2)+1)).substr(7, 13));
        		*/
        		this.SD8101F_GRID2.setCellProperty( "head", j+1, "text", this.parent.parent.ds_1.getColID(ds_base_col+((i*2)+1)).substr(7, 13));
        		this.SD8101F_GRID2.setFormatColProperty(j+1, "size", 100); // 추가한 Column size 조정
        		this.SD8101F_GRID2.setCellProperty( "body", j+1, "expr", this.parent.parent.ds_1.getColID(ds_base_col+((i*2)+1)));
        		this.SD8101F_GRID2.setCellProperty( "body", j+1, "cssclass", "expr:dataset.getRowLevel(currow)==1?'sdcss_jp_total': dataset.getRowLevel(currow)==2? 'sdcss_daily_total' : ''"); // css 적용
        		this.SD8101F_GRID2.setCellProperty( "body", j+1, "displaytype", "number"); // 표시 형태 설정
        		this.SD8101F_GRID2.setCellProperty( "body", j+1, "textAlign", "right"); // 위치 설정

        		this.SD8101F_GRID2.setCellProperty( "summary", k+1, "expr", "  dataset.getSum("+nexacro.wrapQuote(this.parent.parent.ds_1.getColID(ds_base_col+((i*2)+1))) +")"); // cell 위치에 해당년도 U_SUGM값 SUM
        		this.SD8101F_GRID2.setCellProperty( "summary", k+1, "displaytype", "number"); // 표시 형태 설정
        		this.SD8101F_GRID2.setCellProperty( "summary", k+1, "textAlign", "right"); // 위치 설정

        		str_list_U += this.parent.parent.ds_1.getColID(ds_base_col+(i*2)+1) + "+"; // 행 합계에 사용
        		str_list_U_sum += "dataset.getSum("+ nexacro.wrapQuote(this.parent.parent.ds_1.getColID(ds_base_col+(i*2)+1)) + ")+";

        	}
        	str_list_U = str_list_U.substr(0, str_list_U.length-1);
        	str_list_U_sum = str_list_U_sum.substr(0, str_list_U_sum.length-1);

        	var last_col = this.SD8101F_GRID2.appendContentsCol("body"); // Row별 합계Column 추가
        	this.SD8101F_GRID2.setCellProperty( "head", last_col, "text", "<합계>");
        	this.SD8101F_GRID2.setCellProperty( "head", last_col, "background", "#f07b0e");
        	this.SD8101F_GRID2.setFormatColProperty(last_col, "size", 100);
        	this.SD8101F_GRID2.setCellProperty( "body", last_col, "displaytype", "number");
        	this.SD8101F_GRID2.setCellProperty( "body", last_col, "expr", str_list_U);
        	this.SD8101F_GRID2.setCellProperty( "body", last_col, "cssclass", "expr:dataset.getRowLevel(currow)==1?'sdcss_jp_total': dataset.getRowLevel(currow)==2? 'sdcss_daily_total' : 'sdcss_monthly_total'"); // css 적용

        	var last_col_summary = this.SD8101F_GRID2.getCellCount( "summary" ) - 1;
        	this.SD8101F_GRID2.setCellProperty( "summary", last_col_summary, "expr", str_list_U_sum); // cell 위치에 해당년도 U_SUGM값 SUM
        	this.SD8101F_GRID2.setCellProperty( "summary", last_col_summary, "displaytype", "number"); // 표시 형태 설정
        	this.SD8101F_GRID2.setCellProperty( "summary", last_col_summary, "textAlign", "right"); // 위치 설정

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.SD8101F_GRID2_onsize,this);
            this.addEventHandler("ontimer",this.SD8101F_GRID2_ontimer,this);
            this.addEventHandler("onload",this.SD8101F_GRID2_onload,this);
        };
        this.loadIncludeScript("SD8101F_GRID2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
