(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD8110F_GRID6");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1370,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("SD8110F_GRID6","0%","0",null,"100.00%","0%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_6");
            obj.set_formatid("default");
            obj.set_cellmovingtype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"80\"/><Column size=\"260\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"구분\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"1\" text=\"코드\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"2\" text=\"거래처\" font=\"11px/normal &quot;Gulim&quot;\"/><Cell col=\"3\" text=\"구분\" font=\"11px/normal &quot;Gulim&quot;\"/></Band><Band id=\"body\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\"><Cell rowspan=\"4\" text=\"bind:CGB_NAME\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\" suppress=\"1\"/><Cell col=\"1\" rowspan=\"4\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" textAlign=\"center\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" expr=\"dataset.getRowLevel(currow)==1?&apos;&apos;:dataset.getRowLevel(currow)==2?&apos;&apos;:CUST_GB+&quot;-&quot;+CUST_CD\"/><Cell col=\"2\" rowspan=\"4\" text=\"bind:NAME\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"left\" expr=\"dataset.getRowLevel(currow)==1?&apos;&lt; 업체구분소계 &gt;&apos;:dataset.getRowLevel(currow)==2?&apos;&lt; 소계 &gt;&apos;:NAME\"/><Cell col=\"3\" text=\"현금\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell row=\"1\" col=\"3\" text=\"어음\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell row=\"2\" col=\"3\" text=\"대체\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\"/><Cell row=\"3\" col=\"3\" text=\"&lt;계&gt;\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&apos;sdcss_jp_total&apos;: dataset.getRowLevel(currow)==2? &apos;sdcss_daily_total&apos; : &apos;&apos;\" suppressalign=\"first\" font=\"11px/normal &quot;Gulim&quot;\" textAlign=\"center\"/></Band><Band id=\"summary\"><Cell rowspan=\"4\" colspan=\"3\" text=\"&lt; 총 계 &gt;\"/><Cell col=\"3\" text=\"현금\"/><Cell row=\"1\" col=\"3\" text=\"어음\"/><Cell row=\"2\" col=\"3\" text=\"대체\"/><Cell row=\"3\" col=\"3\" text=\"&lt;계&gt;\"/></Band></Format></Formats>");
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
        this.addIncludeScript("SD8110F_GRID6.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD8110F_GRID6.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var grid_base_col = 4;
        var ds_base_col = 6;
        /*
        this.SD8110F_GRID6_onsize = function(obj:nexacro.Form,e:nexacro.SizeEventInfo)
        {
        	this.setTimer(0,1);
        };

        this.SD8110F_GRID6_ontimer = function(obj:nexacro.Form,e:nexacro.TimerEventInfo)
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
        	this.lfn_grdAutofit(this.SD8110F_GRID6);
        };
        */
        this.SD8110F_GRID6_onload = function(obj,e)
        {
        	var j = 0; // Body Cell 위치 조정
        	var k = 0; // Summary Cell 위치 조정
        	var last_cell_H = 0;
        	var last_cell_B = 0;
        	var last_cell_D = 0;
        	var last_cell_S = 0;
        	var last_cell_sum_H = 0;
        	var last_cell_sum_B = 0;
        	var last_cell_sum_D = 0;
        	var last_cell_sum_S = 0;
        	var str_list_H = "";
        	var str_list_B = "";
        	var str_list_D = "";
        	for(var i = 0; i < ((this.parent.parent.ds_6.getColCount() - ds_base_col) / 3); i++)
        	{
        		j = i + grid_base_col; // ds_6의 H_SUGM Column 시작 번호
        		k = i + 2; // Summary Cell에 들어갈 ds_6 데이터 위치 맞추기 - "총계"(0번째 Cell), "구분"(1번째 Cell) 다음 Data값 들어와야 하므로 2, Row count 만큼 다음 Cell로 이동 = 2+i
        		this.SD8110F_GRID6.appendContentsCol("body"); // Column 추가
        		this.SD8110F_GRID6.setCellProperty( "head", j, "text", (this.parent.parent.ds_6.getColID(ds_base_col+(i*3))).substr(7, 13)); // 추가한 Column Head text를 해당년도로
        		this.SD8110F_GRID6.setFormatColProperty(j, "size", 100); // 추가한 Column size 조정
        		// Body Cell에 들어갈 ds_6 데이터 위치 맞추기 - ds_base_col를 +하여 SUGM값 Column 시작, H/B/D 세 개의 Column 위치를 맞추기 위한 *3, 이후 0번째=H ,1번째=B, 2번째=D
        		this.SD8110F_GRID6.setCellProperty( "body", j, "text", "bind:"+this.parent.parent.ds_6.getColID(ds_base_col+(i*3))); // cell 위치에 H_SUGM 값 bind
        		this.SD8110F_GRID6.setCellProperty( "body", j, "cssclass", "expr:dataset.getRowLevel(currow)==1?'sdcss_jp_total': dataset.getRowLevel(currow)==2? 'sdcss_daily_total' : ''"); // css 적용

        		this.SD8110F_GRID6.setCellProperty( "summary", k, "expr", "dataset.getSum("+nexacro.wrapQuote(this.parent.parent.ds_6.getColID(ds_base_col+(i*3))) +")"); // cell 위치에 해당년도 H_SUGM 값 SUM
        		this.SD8110F_GRID6.setCellProperty( "summary", k, "displaytype", "number"); // 표시 형태 설정
        		this.SD8110F_GRID6.setCellProperty( "summary", k, "textAlign", "right"); // 위치 설정

        		str_list_H += this.parent.parent.ds_6.getColID(ds_base_col+(i*3)) + "+"; // 행 합계에 사용

        		if( i == ((this.parent.parent.ds_6.getColCount() - ds_base_col) / 3) -1)
        			last_cell_H = j;
        			last_cell_sum_H = k;
        		j += 2 + i; // 다음 Cell 이동 +1, 구분 Cell 건너뛰기 +1, row수 이동 +i;
        		k += 2 + i; // 다음 Cell 이동 +1, 구분 Cell 건너뛰기 +1, row수 이동 +i;
        		this.SD8110F_GRID6.setCellProperty( "body", j, "text", "bind:"+this.parent.parent.ds_6.getColID(ds_base_col+(i*3)+1)); // cell 위치에 B_SUGM 값 bind
        		this.SD8110F_GRID6.setCellProperty( "body", j, "cssclass", "expr:dataset.getRowLevel(currow)==1?'sdcss_jp_total': dataset.getRowLevel(currow)==2? 'sdcss_daily_total' : ''"); // css 적용

        		this.SD8110F_GRID6.setCellProperty( "summary", k, "expr", "dataset.getSum("+nexacro.wrapQuote(this.parent.parent.ds_6.getColID(ds_base_col+(i*3)+1)) +")"); // cell 위치에 해당년도 B_SUGM 값 SUM
        		this.SD8110F_GRID6.setCellProperty( "summary", k, "displaytype", "number"); // 표시 형태 설정
        		this.SD8110F_GRID6.setCellProperty( "summary", k, "textAlign", "right"); // 위치 설정

        		str_list_B += this.parent.parent.ds_6.getColID(ds_base_col+(i*3)+1) + "+"; // 행 합계에 사용

        		if( i == ((this.parent.parent.ds_6.getColCount() - ds_base_col) / 3) -1)
        			last_cell_B = j;
        			last_cell_sum_B = k;
        		j += 2 + i; // 다음 Cell 이동 +1, 구분 Cell 건너뛰기 +1, row수 이동 +i;
        		k += 2 + i; // 다음 Cell 이동 +1, 구분 Cell 건너뛰기 +1, row수 이동 +i;
        		this.SD8110F_GRID6.setCellProperty( "body", j, "text", "bind:"+this.parent.parent.ds_6.getColID(ds_base_col+(i*3)+2)); // cell 위치에 D_SUGM 값 bind
        		this.SD8110F_GRID6.setCellProperty( "body", j, "cssclass", "expr:dataset.getRowLevel(currow)==1?'sdcss_jp_total': dataset.getRowLevel(currow)==2? 'sdcss_daily_total' : ''"); // css 적용

        		this.SD8110F_GRID6.setCellProperty( "summary", k, "expr", "dataset.getSum("+nexacro.wrapQuote(this.parent.parent.ds_6.getColID(ds_base_col+(i*3)+2)) +")"); // cell 위치에 해당년도 D_SUGM 값 SUM
        		this.SD8110F_GRID6.setCellProperty( "summary", k, "displaytype", "number"); // 표시 형태 설정
        		this.SD8110F_GRID6.setCellProperty( "summary", k, "textAlign", "right"); // 위치 설정

        		str_list_D += this.parent.parent.ds_6.getColID(ds_base_col+(i*3)+2) + "+"; // 행 합계에 사용

        		if( i == ((this.parent.parent.ds_6.getColCount() - ds_base_col) / 3) -1)
        			last_cell_D = j;
        			last_cell_sum_D = k;
        		j += 2 + i; // 다음 Cell 이동 +1, 구분 Cell 건너뛰기 +1, row수 이동 +i;
        		k += 2 + i; // 다음 Cell 이동 +1, 구분 Cell 건너뛰기 +1, row수 이동 +i;
        		this.SD8110F_GRID6.setCellProperty( "body", j, "expr", this.parent.parent.ds_6.getColID(ds_base_col+(i*3))+"+"
        																				+this.parent.parent.ds_6.getColID(ds_base_col+(i*3)+1)+"+"
        																				+this.parent.parent.ds_6.getColID(ds_base_col+(i*3)+2));
        		this.SD8110F_GRID6.setCellProperty( "body", j, "displaytype", "number");
        		this.SD8110F_GRID6.setCellProperty( "bodt", j, "cssclass", "expr:dataset.getRowLevel(currow)==1?'sdcss_jp_total': dataset.getRowLevel(currow)==2? 'sdcss_daily_total' : ''");

        		this.SD8110F_GRID6.setCellProperty( "summary", k, "expr", "dataset.getSum(" + nexacro.wrapQuote(this.parent.parent.ds_6.getColID(ds_base_col+(i*3))) +
        																  ") + dataset.getSum(" + nexacro.wrapQuote(this.parent.parent.ds_6.getColID(ds_base_col+(i*3)+1)) +
        																  ") + dataset.getSum(" + nexacro.wrapQuote(this.parent.parent.ds_6.getColID(ds_base_col+(i*3)+2)) + ")");
        		this.SD8110F_GRID6.setCellProperty( "summary", k, "displaytype", "number"); // 표시 형태 설정
        		this.SD8110F_GRID6.setCellProperty( "summary", k, "textAlign", "right"); // 위치 설정

        		if( i == ((this.parent.parent.ds_6.getColCount() - ds_base_col) / 3) -1)
        			last_cell_S = j;

        	}
        	this.SD8110F_GRID6.appendContentsCol("body"); // Column 추가
        	var last_col = this.SD8110F_GRID6.getFormatColCount() -1;

        	this.SD8110F_GRID6.setCellProperty( "head", last_col, "text", "<합계>");
        	this.SD8110F_GRID6.setCellProperty( "head", last_col, "background", "#f07b0e");
        	this.SD8110F_GRID6.setFormatColProperty(last_col, "size", 100);

        	str_list_H = str_list_H.substr(0, str_list_H.length-1);
        	str_list_B = str_list_B.substr(0, str_list_B.length-1);
        	str_list_D = str_list_D.substr(0, str_list_D.length-1);
        	this.SD8110F_GRID6.setCellProperty( "body", last_cell_H+1, "displaytype", "number");
        	this.SD8110F_GRID6.setCellProperty( "body", last_cell_H+1, "cssclass", "expr:dataset.getRowLevel(currow)==1?'sdcss_jp_total': dataset.getRowLevel(currow)==2? 'sdcss_daily_total' : 'sdcss_monthly_total'");
        	this.SD8110F_GRID6.setCellProperty( "body", last_cell_H+1, "expr", str_list_H);
        	this.SD8110F_GRID6.setCellProperty( "body", last_cell_B+2, "displaytype", "number");
        	this.SD8110F_GRID6.setCellProperty( "body", last_cell_B+2, "cssclass", "expr:dataset.getRowLevel(currow)==1?'sdcss_jp_total': dataset.getRowLevel(currow)==2? 'sdcss_daily_total' : 'sdcss_monthly_total'");
        	this.SD8110F_GRID6.setCellProperty( "body", last_cell_B+2, "expr", str_list_B);
        	this.SD8110F_GRID6.setCellProperty( "body", last_cell_D+3, "displaytype", "number");
        	this.SD8110F_GRID6.setCellProperty( "body", last_cell_D+3, "cssclass", "expr:dataset.getRowLevel(currow)==1?'sdcss_jp_total': dataset.getRowLevel(currow)==2? 'sdcss_daily_total' : 'sdcss_monthly_total'");
        	this.SD8110F_GRID6.setCellProperty( "body", last_cell_D+3, "expr", str_list_D);
        	this.SD8110F_GRID6.setCellProperty( "body", last_cell_S+4, "displaytype", "number");
        	this.SD8110F_GRID6.setCellProperty( "body", last_cell_S+4, "cssclass", "expr:dataset.getRowLevel(currow)==1?'sdcss_jp_total': dataset.getRowLevel(currow)==2? 'sdcss_daily_total' : 'sdcss_monthly_total'");
        	this.SD8110F_GRID6.setCellProperty( "body", last_cell_S+4, "expr", str_list_H+"+"+str_list_B+"+"+str_list_D);

        	var last_col_sum = this.SD8110F_GRID6.getCellCount( "summary" );
        	var str_list_sum_H = "";
        	var str_list_sum_B = "";
        	var str_list_sum_D = "";
        	var list_H = str_list_H.split("+");
        	var list_B = str_list_B.split("+");
        	var list_D = str_list_D.split("+");
        	for (var i = 0; i < list_H.length; i++)
        	{
        		str_list_sum_H += "dataset.getSum(" + nexacro.wrapQuote(list_H[i]) + ")";
        		str_list_sum_B += "dataset.getSum(" + nexacro.wrapQuote(list_B[i]) + ")";
        		str_list_sum_D += "dataset.getSum(" + nexacro.wrapQuote(list_D[i]) + ")";

        		if( i != list_H.length -1 )
        		{
        			str_list_sum_H += "+";
        			str_list_sum_B += "+";
        			str_list_sum_D += "+";
        		}
        	}
        	this.SD8110F_GRID6.setCellProperty( "summary", last_cell_sum_H+1, "expr", str_list_sum_H);
        	this.SD8110F_GRID6.setCellProperty( "summary", last_cell_sum_H+1, "displaytype", "number"); // 표시 형태 설정
        	this.SD8110F_GRID6.setCellProperty( "summary", last_cell_sum_B+2, "expr", str_list_sum_B);
        	this.SD8110F_GRID6.setCellProperty( "summary", last_cell_sum_B+2, "displaytype", "number"); // 표시 형태 설정
        	this.SD8110F_GRID6.setCellProperty( "summary", last_cell_sum_D+3, "expr", str_list_sum_D);
        	this.SD8110F_GRID6.setCellProperty( "summary", last_cell_sum_D+3, "displaytype", "number"); // 표시 형태 설정
        	this.SD8110F_GRID6.setCellProperty( "summary", last_col_sum-1, "expr", str_list_sum_H + "+" + str_list_sum_B + "+" + str_list_sum_D);
        	this.SD8110F_GRID6.setCellProperty( "summary", last_col_sum-1, "displaytype", "number"); // 표시 형태 설정
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.SD8110F_GRID6_onsize,this);
            this.addEventHandler("ontimer",this.SD8110F_GRID6_ontimer,this);
            this.addEventHandler("onload",this.SD8110F_GRID6_onload,this);
        };
        this.loadIncludeScript("SD8110F_GRID6.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
