(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED189F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,280);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsIncomeTotAmount", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWCNT\" type=\"INT\" size=\"256\"/><Column id=\"AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"INCOMETAX\" type=\"STRING\" size=\"256\"/><Column id=\"RESIDENTTAX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","15","14","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회일자");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Sdate","100","14","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Edate","215","14","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","15","49","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("제출일자");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","15","84","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("매수");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00","15","120","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("소득금액");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"240","63","28","210",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"240","63","28","70",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"240","63","28","140",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("출력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00","15","156","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("소득제");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01","15","192","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("주민세");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_qty","99","84","220","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_format("#,##0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_amount","99","120","220","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_format("#,##0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_incometax","100","156","220","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_format("#,##0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_residenttax","99","192","220","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_format("#,##0");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_submitDate","100","49","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",350,280,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","medt_qty","value","dsIncomeTotAmount","ROWCNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","medt_amount","value","dsIncomeTotAmount","AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","medt_incometax","value","dsIncomeTotAmount","INCOMETAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","medt_residenttax","value","dsIncomeTotAmount","RESIDENTTAX");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ED189F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED189F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("ED189F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var rdUrl,rdParam,sSelect;

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var gv_urlRdDataServer = nexacro.getApplication().gv_urlRdDataServer;

        this.chk_value = function()
        {
        	if(this.cal_Sdate.value == null)
        	{
        		alert("조회일자를 입력해주세요.");
        		this.cal_Sdate.dropdown();
        		return false;
        	}

        	if(this.cal_Edate.value == null)
        	{
        		alert("조회일자를 입력해주세요.");
        		this.cal_Edate.dropdown();
        		return false;
        	}

        	return true;
        }

        //조회
        this.btn_search_onclick = function(obj,e)
        {
        	if(this.chk_value())
        	{
        		var inds = "dsIncomeTotAmount=dsIncomeTotAmount";
        		var outds = "dsIncomeTotAmount=dsIncomeTotAmount";

        		var strArg = "SDATE=" + nexacro.wrapQuote(this.cal_Sdate.value)
        				   + " EDATE=" + nexacro.wrapQuote(this.cal_Edate.value);

        		this.gfn_TransactionP("select","JSP/ed/ed189f_withhold_data.jsp", inds, outds, strArg, "fnCallback", false, "P", false, this);
        	}
        };

        this.fnCallback = function()
        {
        	trace(this.dsIncomeTotAmount.saveXML());
        }

        //출력
        this.btn_print_onclick = function(obj,e)
        {
        	if(this.cal_submitDate.value == null)
        	{
        		alert("제출일자를 입력해주세요.");
        		this.cal_submitDate.dropdown();
        		return false;
        	}

        	if(this.chk_value())
        	{
        		rdUrl = gv_urlMrd + "/ed/ED189.mrd";

        		rdParam  = "/ragentpath ["+ gv_urlRdDataServer +"]" +
        				   " /rp ["+ this.cal_Sdate.value + "]["+ this.cal_Edate.value +"][" + this.cal_submitDate.value + "]";

        		this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1500, 850);
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
            this.Static05.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static05_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static05_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
            this.Static05_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static05_00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
        };
        this.loadIncludeScript("ED189F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
