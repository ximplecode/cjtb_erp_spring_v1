(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED161_Contract_SearchF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,390);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRoyaltyContract_Mst", this);
            obj._setContents("<ColumnInfo><Column id=\"SCMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"SCMST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"SCMST_BOOKNAME\" type=\"STRING\" size=\"60\"/><Column id=\"SCMST_CONTRACTNO\" type=\"STRING\" size=\"14\"/><Column id=\"UI_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"SECTION_NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRoyaltyContract_Dtl", this);
            obj._setContents("<ColumnInfo><Column id=\"SCMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ATHR_IDENTITY\" type=\"INT\" size=\"20\"/><Column id=\"ATHR_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"SCDTL_ROYALTYRATE\" type=\"STRING\" size=\"3\"/><Column id=\"SCDTL_CONTRACTAMOUNT\" type=\"STRING\" size=\"10\"/><Column id=\"ATHR_JUMINNO2\" type=\"STRING\" size=\"13\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSection", this);
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

            obj = new Edit("edt_bookName","98","17","322","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","17","50","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("관련부서");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_section","98","50","322","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("dsSection");
            obj.set_codecolumn("SECTION_CODE");
            obj.set_datacolumn("SECTION_NAME");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"27","40","38","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #3cbcb8");
            obj.set_defaultbutton("true");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","17","86","463","130",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsRoyaltyContract_Mst");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계약서 번호\"/><Cell col=\"1\" text=\"부서명\"/><Cell col=\"2\" text=\"도서명\"/></Band><Band id=\"body\"><Cell text=\"bind:SCMST_CONTRACTNO\"/><Cell col=\"1\" text=\"bind:SECTION_NAME\"/><Cell col=\"2\" text=\"bind:SCMST_BOOKNAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","213","356",null,"29","217",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","17","219","463","130",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsRoyaltyContract_Dtl");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"저자명\"/><Cell col=\"1\" text=\"계약금액\"/></Band><Band id=\"body\"><Cell text=\"bind:ATHR_NAME\"/><Cell col=\"1\" text=\"bind:SCDTL_CONTRACTAMOUNT\" displaytype=\"currency\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,390,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ED161_Contract_SearchF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED161_Contract_SearchF.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("ED161_Contract_SearchF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        this.ED161_Contract_SearchF_onload = function(obj,e)
        {
        	this.dsSection.copyData(this.parent.p_dsSection);

        	sSelect = this.parent.p_Select;
        	sSection_Code = this.parent.p_sectionCode;

        	if(sSelect < "3")
        		this.cb_section.set_index(this.dsSection.findRow("SECTION_CODE", sSection_Code));
        	else
        		this.cb_section.set_index(-1);
        };

        //인세계약서 의뢰서 조회
        this.btn_search_onclick = function(obj,e)
        {
        	var inds = "dsRoyaltyContract_Mst=dsRoyaltyContract_Mst";
        	var outds = "dsRoyaltyContract_Mst=dsRoyaltyContract_Mst";
        	var strArg = "SCMST_BOOKNAME=" + nexacro.wrapQuote(this.edt_bookName.text)
        				+ " SECTION_CODE=" + nexacro.wrapQuote(this.cb_section.value);

        	this.gfn_TransactionP("search","JSP/ed/ed161f_contract_mst.jsp", inds, outds, strArg, "fnMstCallback", false, "P", false, this);
        };

        this.fnMstCallback = function(scvId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        	{
        		if(this.dsRoyaltyContract_Mst.rowcount < 1)
        			alert("조회된 자료가 없습니다.");
        		else
        			this.dsRoyaltyContract_Mst_onrowposchanged(this.dsRoyaltyContract_Mst, 0);
        	}
        }

        //세부내용
        this.dsRoyaltyContract_Mst_onrowposchanged = function(obj,e)
        {
        	var inds = "dsRoyaltyContract_Dtl=dsRoyaltyContract_Dtl";
        	var outds = "dsRoyaltyContract_Dtl=dsRoyaltyContract_Dtl";
        	var strArg = "SCMST_ID=" + nexacro.wrapQuote(this.dsRoyaltyContract_Mst.getColumn(e.newrow, "SCMST_ID"));

        	this.gfn_TransactionP("search","JSP/ed/ed161f_contract_dtl.jsp", inds, outds, strArg, "fnDtlCallback", false, "P", false, this);
        };

        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var nRow = this.opener.dsRoyalty_Mst.addRow();
        	var cRow = this.dsRoyaltyContract_Mst.rowposition;

        	alert(this.dsRoyaltyContract_Mst.getColumn(cRow, "SCMST_BOOKNAME"));

        	if(this.opener.dsRoyalty_Mst.getColumn(nRow, "RCMST_BOOKNAME") == null)
        		this.opener.dsRoyalty_Mst.setColumn(nRow, "RCMST_BOOKNAME", this.dsRoyaltyContract_Mst.getColumn(cRow, "SCMST_BOOKNAME"));

        	this.opener.dsRoyalty_Mst.setColumn(nRow, "SCMST_ID", this.dsRoyaltyContract_Mst.getColumn(cRow, "SCMST_ID"));

        	nRow = 0;

        	var d = new Date();
        	var today = Eco.date.getMaskFormatString(d, "yyyyMMdd");

        	for( i = 0; i < this.dsRoyaltyContract_Dtl.rowcount; i++)
        	{
        		this.opener.dsRoyalty_Dtl1.setColumn(nRow, "RCDTL_KIND", "1");
        		this.opener.dsRoyalty_Dtl1.setColumn(nRow, "RCDTL_DATE", today);
        		this.opener.dsRoyalty_Dtl1.setColumn(nRow, "RCDTL_SEQ", (this.dsRoyaltyContract_Dtl.rowcount + 1).toString().padLeft(2,"0"));
        		this.opener.dsRoyalty_Dtl1.setColumn(nRow, "ATHR_IDENTITY", this.dsRoyaltyContract_Dtl.getColumn(i, "ATHR_IDENTITY"));
        		this.opener.dsRoyalty_Dtl1.setColumn(nRow, "ATHR_NAME", this.dsRoyaltyContract_Dtl.getColumn(i, "ATHR_NAME"));
        		this.opener.dsRoyalty_Dtl1.setColumn(nRow, "ATHR_JUMINNO2", this.dsRoyaltyContract_Dtl.getColumn(i, "ATHR_JUMINNO2"));
        		this.opener.dsRoyalty_Dtl1.setColumn(nRow, "RCDTL_AMOUNT", this.dsRoyaltyContract_Dtl.getColumn(i, "SCDTL_CONTRACTAMOUNT"));

        		if(this.opener.dsRoyalty_Dtl1.rowcount != this.dsRoyaltyContract_Dtl.rowcount)
        			nRow = this.opener.dsRoyalty_Dtl1.addRow();
        	}
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
            this.addEventHandler("onload",this.ED161_Contract_SearchF_onload,this);
            this.btn_search00.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.dsRoyaltyContract_Mst.addEventHandler("onrowposchanged",this.dsRoyaltyContract_Mst_onrowposchanged,this);
        };
        this.loadIncludeScript("ED161_Contract_SearchF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
