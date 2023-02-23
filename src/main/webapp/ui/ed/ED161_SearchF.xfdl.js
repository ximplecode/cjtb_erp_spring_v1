(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED161_SearchF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,390);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSection", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRoyalty_Mst", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","17","17","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("도서명");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","17","49","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("도서코드");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","17","80","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("관련부서");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookName","98","17","245","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_code","98","48","150","31",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_year","249","48","94","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","98","80","245","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("dsSection");
            obj.set_codecolumn("SECTIONCODE");
            obj.set_datacolumn("SECTIONNAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","14","118","372","232",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"45","40","38","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #3cbcb8");
            obj.set_defaultbutton("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","165","355",null,"29","165",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,390,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ED161_SearchF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED161_SearchF.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("ED161_SearchF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var sSelect, sSection_Code;

        this.ED161_SearchF_onload = function(obj,e)
        {
        	this.dsSection.copyData(this.parent.p_dsSection);
        	this.dsRoyalty_Mst.copyData(this.parent.p_dsRoyaltyacnt_Mst);

        	sSelect = this.parent.p_sSelect;
        	sSection_Code = this.parent.p_sectionCode;

        	if(sSelect < "3")
        		this.cb_section.set_index(this.dsSection.findRow("SECTION_CODE", sSection_Code));
        	else
        		this.cb_section.set_index(-1);
        };

        this.btn_search_onclick = function(obj,e)
        {
        	if(this.edt_bookName.text.length == 0)
        	{
        		alert("도서명을 입력해 주세요.");
        		this.edt_bookName.setFocus();
        		return false;
        	}

        	var inds = "dsRoyalty_Mst=dsRoyalty_Mst";
        	var outds = "dsRoyalty_Mst=dsRoyalty_Mst";
        	var strArg = "BOOKMST_CODE=" + nexacro.wrapQuote(this.edt_bookName.text)
        				+ " BOOKMST_YEAR=" + nexacro.wrapQuote(this.cb_section.value)
        				+ " RCMST_BOOKNAME=" + nexacro.wrapQuote(this.cb_section.value);

        	this.gfn_TransactionP("search","JSP/ed/ed161f_contract_mst.jsp", inds, outds, strArg, "fnMstCallback", false, "P", false, this);
        };

        this.fnMstCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode !=0)
        		alert(errMsg);
        	else if(this.dsRoyalty_Mst.rowcount == 0)
        		alert("조회된 자료가 없습니다.");
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ED161_SearchF_onload,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("ED161_SearchF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
