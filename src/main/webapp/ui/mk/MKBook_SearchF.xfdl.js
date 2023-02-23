(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MKBook_SearchF");
            this.set_titletext("도서코드 조회(제작) POPUP");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBookMst", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close","155","351",null,"29","1055",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","14","26","87","29",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("도서명");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","14","60","87","29",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("도서코드");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"50","40","38","898",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #3cbcb8");
            obj.set_defaultbutton("true");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","14","100","420","240",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsBookMst");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"40\"/><Column size=\"55\"/><Column size=\"230\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"도서코드\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"순번\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"년판\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"도서명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:BOOKMST_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:BOOKMST_SEQ\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:BOOKMST_YEAR\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:BOOKMST_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"25","46","44","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #3cbcb8");
            obj.set_defaultbutton("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close00","164","351",null,"29","166",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("닫기");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookName","105","26","276","29",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookCode","106","60","101","29",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_maxlength("10");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookYear","212","60","75","29",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_maxlength("4");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_search","292","62","98","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("결과내재검색");
            obj.set_font("bold 12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",450,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MKBook_SearchF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MKBook_SearchF.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MKBook_SearchF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var bSearch_Set = false;
        var vFormId;

        this.MKBook_SearchF_onload = function(obj,e)
        {
        	this.dsBookMst.copyData(this.parent.dsParam1);
        	vFormId = this.parent.dsParam2;
        	vBookCode = this.parent.dsParam3;
        	vBookYear = this.parent.dsParam4;

        	//기타외주비 관리 -- 데이터셋에서 바로 가져올 경우
        	if(vFormId == "MK139"){

        		var vBookCode = this.opener.dsEtcCostDtl.getColumn(this.opener.dsEtcCostDtl.rowposition, "BOOKMST_CODE");
        		var vBookYY = this.opener.dsEtcCostDtl.getColumn(this.opener.dsEtcCostDtl.rowposition, "BOOKMST_YEAR");

        		if(Eco.isUndefined(vBookCode) == false || vBookCode != "")
        		{
        			if(String(vBookCode).length == 10)
        			{
        				this.edt_bookCode.set_value(vBookCode);
        				bSearch_Set = true;
        			}
        		}

        		if(Eco.isUndefined(vBookYY) == false || vBookYY != "")
        		{
        			if(String(vBookYY).length == 4)
        			{
        				this.edt_bookYear.set_value(vBookYY);
        				bSearch_Set = true;
        			}
        		}

        	}else if(vFormId == "MK14B") //FORM의 DIV에서 가져올 경우
        	{
        		if(Eco.isUndefined(vBookCode) == false)
        		{
        			if(vBookCode.length == 10)
        			{
        				this.edt_bookCode.set_value(vBookCode);
        				bSearch_Set = true;
        			}
        		}

        		if(Eco.isUndefined(vBookYear) == false)
        		{
        			if(vBookYear.length == 4)
        			{
        				this.edt_bookYear.set_value(vBookYear);
        				bSearch_Set = true;
        			}
        		}

        	}else{
        		if(Eco.isUndefined(this.opener.edt_bookCode.value) == false || this.opener.edt_bookCode.value != "")
        		{	if(this.opener.edt_bookCode.text.length == 10)
        			{
        				this.edt_bookCode.set_value(this.opener.edt_bookCode.value);
        				bSearch_Set = true;
        			}
        		}

        		if(Eco.isUndefined(this.opener.edt_bookYear.value) == false || this.opener.edt_bookYear.value != "")
        		{

        			if(this.opener.edt_bookYear.text.length == 4)
        			{
        				this.edt_bookYear.set_value(this.opener.edt_bookYear.value);
        				bSearch_Set = true;
        			}
        		}
        	}

        	if(bSearch_Set)
        		this.btn_search_onclick(obj);
        };

        this.btn_search_onclick = function(obj,e)
        {
        	if(this.chk_search.value == false)
        	{
        		if ((this.edt_bookCode.value == "" || Eco.isUndefined(this.edt_bookCode.value) == true)
        			&& (this.edt_bookYear.value == "" || Eco.isUndefined(this.edt_bookYear.value) == true))
        		{
        			this.edt_bookCode.setFocus();
        			alert("도서코드나 도서연판 중 하나를 입력하여 주십시요.");
        			return false;
        		}

        		var strUrl = "JSP/mk/book_select.jsp";
        		var inds = "dsBookMst=dsBookMst";
        		var outds = "dsBookMst=dsBookMst";

        		var strArg = "BOOKMST_CODE=" + nexacro.wrapQuote(this.edt_bookCode.value)
        				   + " BOOKMST_YEAR=" + nexacro.wrapQuote(this.edt_bookYear.value)
        				   + " BOOKMST_NAME=" + nexacro.wrapQuote(this.edt_bookName.value);

        		this.gfn_TransactionP("select" ,strUrl, inds, outds, strArg, "fnBookMstCallback", false, "P", false, this);
        	}else
        		this.dsBookMst.filter("BOOKMST_NAME.indexOf('"+this.edt_bookName.value+"') > -1");
        };

        this.fnBookMstCallback = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}
        };


        this.Grid00_oncelldblclick = function(obj,e)
        {
        	this.parent.dsParam1.addRow();
        	this.parent.dsParam1.copyRow(0, this.dsBookMst, e.row);
        	this.close();
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MKBook_SearchF_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.btn_search00.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("MKBook_SearchF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
