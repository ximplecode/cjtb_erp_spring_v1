(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED18DF");
            this.set_titletext("원청징수마감관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(430,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsWithHoldClose", this);
            obj._setContents("<ColumnInfo><Column id=\"EDWHCLS_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"EDWHCLS_MONTH\" type=\"STRING\" size=\"2\"/><Column id=\"EDWHCLS_YM\" type=\"STRING\" size=\"6\"/><Column id=\"EDWHCLS_STARTDATE\" type=\"STRING\" size=\"8\"/><Column id=\"EDWHCLS_ENDDATE\" type=\"STRING\" size=\"8\"/><Column id=\"EDWHCLS_CLOSE\" type=\"STRING\" size=\"1\"/><Column id=\"EDWHCLS_MODIFY\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYear", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">ALL</Col><Col id=\"NAME\">전체</Col></Row><Row><Col id=\"CODE\">2022</Col><Col id=\"NAME\">2022년</Col></Row><Row><Col id=\"CODE\">2021</Col><Col id=\"NAME\">2021년</Col></Row><Row><Col id=\"CODE\">2020</Col><Col id=\"NAME\">2020년</Col></Row><Row><Col id=\"CODE\">2019</Col><Col id=\"NAME\">2019년</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_delete",null,"10","63","25","83",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"10","63","25","17",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"10","63","25","148",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"10","63","25","213",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"10","63","25","278",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("신규");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","13","56","77","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회년월");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","13","89","403","423",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsWithHoldClose");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"85\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"마감년월\"/><Cell col=\"1\" text=\"시작일자\"/><Cell col=\"2\" text=\"종료일자\"/><Cell col=\"3\" text=\"마감완료여부\"/></Band><Band id=\"body\"><Cell text=\"bind:EDWHCLS_YM\" displaytype=\"date\" calendareditformat=\"yyyy-MM\" calendardateformat=\"yyyy-MM\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:EDWHCLS_STARTDATE\" textAlign=\"center\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:EDWHCLS_ENDDATE\" textAlign=\"center\" edittype=\"date\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"3\" text=\"bind:EDWHCLS_CLOSE\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_year","95","55","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cb_year_innerdataset = new nexacro.NormalDataset("cb_year_innerdataset", obj);
            cb_year_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">ALL</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2022</Col><Col id=\"datacolumn\">2022년</Col></Row><Row><Col id=\"codecolumn\">2021</Col><Col id=\"datacolumn\">2021년</Col></Row><Row><Col id=\"codecolumn\">2020</Col><Col id=\"datacolumn\">2020년</Col></Row><Row><Col id=\"codecolumn\">2019</Col><Col id=\"datacolumn\">2019년</Col></Row><Row><Col id=\"codecolumn\">2018</Col><Col id=\"datacolumn\">2018년</Col></Row><Row><Col id=\"codecolumn\">2017</Col><Col id=\"datacolumn\">2017년</Col></Row><Row><Col id=\"codecolumn\">2016</Col><Col id=\"datacolumn\">2016년</Col></Row><Row><Col id=\"codecolumn\">2015</Col><Col id=\"datacolumn\">2015년</Col></Row><Row><Col id=\"codecolumn\">2014</Col><Col id=\"datacolumn\">2014년</Col></Row><Row><Col id=\"codecolumn\">2013</Col><Col id=\"datacolumn\">2013년</Col></Row><Row><Col id=\"codecolumn\">2012</Col><Col id=\"datacolumn\">2012년</Col></Row><Row><Col id=\"codecolumn\">2011</Col><Col id=\"datacolumn\">2011년</Col></Row><Row><Col id=\"codecolumn\">2010</Col><Col id=\"datacolumn\">2010년</Col></Row><Row><Col id=\"codecolumn\">2009</Col><Col id=\"datacolumn\">2009년</Col></Row><Row><Col id=\"codecolumn\">2008</Col><Col id=\"datacolumn\">2008년</Col></Row><Row><Col id=\"codecolumn\">2007</Col><Col id=\"datacolumn\">2007년</Col></Row><Row><Col id=\"codecolumn\">2006</Col><Col id=\"datacolumn\">2006년</Col></Row><Row><Col id=\"codecolumn\">2005</Col><Col id=\"datacolumn\">2005년</Col></Row><Row><Col id=\"codecolumn\">2004</Col><Col id=\"datacolumn\">2004년</Col></Row><Row><Col id=\"codecolumn\">2003</Col><Col id=\"datacolumn\">2003년</Col></Row><Row><Col id=\"codecolumn\">2002</Col><Col id=\"datacolumn\">2002년</Col></Row><Row><Col id=\"codecolumn\">2001</Col><Col id=\"datacolumn\">2001년</Col></Row><Row><Col id=\"codecolumn\">2000</Col><Col id=\"datacolumn\">2000년</Col></Row><Row><Col id=\"codecolumn\">1999</Col><Col id=\"datacolumn\">1999년</Col></Row><Row><Col id=\"codecolumn\">1998</Col><Col id=\"datacolumn\">1998년</Col></Row><Row><Col id=\"codecolumn\">1997</Col><Col id=\"datacolumn\">1997년</Col></Row></Rows>");
            obj.set_innerdataset(cb_year_innerdataset);
            obj.set_text("전체");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_month","210","55","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cb_month_innerdataset = new nexacro.NormalDataset("cb_month_innerdataset", obj);
            cb_month_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">ALL</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">1월</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">2월</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">3월</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">4월</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">5월</Col></Row><Row><Col id=\"codecolumn\">06</Col><Col id=\"datacolumn\">6월</Col></Row><Row><Col id=\"codecolumn\">07</Col><Col id=\"datacolumn\">7월</Col></Row><Row><Col id=\"codecolumn\">08</Col><Col id=\"datacolumn\">8월</Col></Row><Row><Col id=\"codecolumn\">09</Col><Col id=\"datacolumn\">9월</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10월</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">11월</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">12월</Col></Row></Rows>");
            obj.set_innerdataset(cb_month_innerdataset);
            obj.set_text("전체");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",430,520,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ED18DF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED18DF.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("ED18DF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        this.ED18DF_onload = function(obj,e)
        {

        };

        //신규
        this.btn_new_onclick = function(obj,e)
        {
        	if(this.dsWithHoldClose.rowcount == 0)
        	{
        		alert("조회된 자료가 없습니다. 먼저 추가하려는 조회년 정보를 조회해주세요.");
        		return false;
        	}

        	this.dsWithHoldClose.insertRow(0);
        };

        this.dsWithHoldClose_onrowsetchanged = function(obj,e)
        {
        	var next_Date, month, year;

        	if(obj.getRowType(obj.rowposition) == 2) //insert
        	{
        		year = nexacro.toNumber(this.dsWithHoldClose.getColumn(e.row + 1 , "EDWHCLS_YEAR"));
        		month = nexacro.toNumber(this.dsWithHoldClose.getColumn(e.row + 1, "EDWHCLS_MONTH"));

        		var objDate = new nexacro.Date(year, month-1, 1); //월은 숫자 0~11로 입력
        		objDate.addMonth(1);

        		next_Date = objDate.toString();

        		this.dsWithHoldClose.setColumn(e.row, "EDWHCLS_YM", next_Date.substr(0,6));
        		this.dsWithHoldClose.setColumn(e.row, "EDWHCLS_STARTDATE", next_Date);
        		this.dsWithHoldClose.setColumn(e.row, "EDWHCLS_ENDDATE", next_Date.substr(0,6)
        										+ this.fnMonthLastDay(next_Date.substr(0,4), next_Date.substr(4,2)) );
        		this.dsWithHoldClose.setColumn(e.row, "EDWHCLS_CLOSE", "0");
        		this.dsWithHoldClose.setColumn(e.row, "EDWHCLS_MODIFY", "1");

        	}
        };

        this.fnMonthLastDay = function(year, month)
        {
        	switch(month) {
        	case "01":
        	case "03":
        	case "05":
        	case "07":
        	case "08":
        	case "10":
        	case "12":
        		return "31";
        	case "04":
        	case "06":
        	case "09":
        	case "11":
        		return "30";
        	case "02":
        		if(this.fnIsLeapYear(year))
        			return "29";
        		else
        			return "28";
        	default:
        		return 0;
        	}
        }

        this.fnIsLeapYear = function(year)
        {
        	if (year % 400 == 0) return true;
        	if (year % 100 == 0) return false;
        	if (year % 4 == 0) return true;
        	return false;
        }

        //조회
        this.btn_search_onclick = function(obj,e)
        {
        	var inds = "dsWithHoldClose=dsWithHoldClose";
        	var outds = "dsWithHoldClose=dsWithHoldClose";
        	var strArg = "EDWHCLS_YEAR_SET=" + nexacro.wrapQuote(this.cb_year.value)
        			   + " EDWHCLS_MONTH_SET=" + nexacro.wrapQuote(this.cb_month.value);

        	this.gfn_TransactionP("select","JSP/ed/withhold_closing.jsp", inds, outds, strArg, "", true, "P", false, this);
        };

        //저장
        this.btn_save_onclick = function(obj,e)
        {
        	var inds = "dsWithHoldClose=dsWithHoldClose";

        	this.gfn_TransactionP("select","JSP/ed/ed18df_withhold_close_dml.jsp", inds, "", "", "", true, "P", false, this);
        };

        //삭제
        this.btn_delete_onclick = function(obj,e)
        {
        	if(this.dsWithHoldClose.getColumn(this.dsWithHoldClose.rowposition, "EDWHCLS_CLOSE") == "1")
        	{
        		alert("마감된 항목은 삭제할 수 없습니다.");
        		return false;
        	}else if( this.confirm("삭제 하시겠습니까?"))
        	{
        		this.dsWithHoldClose.deleteRow(this.dsWithHoldClose.rowposition);
        		this.btn_save_onclick();
        	}
        };

        //닫기
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ED18DF_onload,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_new.addEventHandler("onclick",this.btn_new_onclick,this);
            this.dsWithHoldClose.addEventHandler("onrowsetchanged",this.dsWithHoldClose_onrowsetchanged,this);
        };
        this.loadIncludeScript("ED18DF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
