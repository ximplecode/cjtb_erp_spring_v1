(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED150_PendOutReq_SearchF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPendOutRequest", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"OUTREQMST_KIND\" type=\"STRING\" size=\"1\"/><Column id=\"OUTREQMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"OUTREQDTL_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"OUTREQUEST_NO\" type=\"STRING\" size=\"17\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"ATHR_IDENTITY\" type=\"INT\" size=\"20\"/><Column id=\"OUTER_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"MNSCRIPT_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"MNSCRIPT_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"OUTREQDTL_BOOKMSTNAME\" type=\"STRING\" size=\"50\"/><Column id=\"OUTREQDTL_WORKCONTENT\" type=\"STRING\" size=\"50\"/><Column id=\"OUTREQDTL_TONE\" type=\"STRING\" size=\"1\"/><Column id=\"OUTREQDTL_STANDARD\" type=\"STRING\" size=\"20\"/><Column id=\"OUTREQDTL_QTY\" type=\"DECIMAL\" size=\"8\"/><Column id=\"OUTREQDTL_UNITCOST\" type=\"INT\" size=\"9\"/><Column id=\"OUTREQDTL_AMOUNT\" type=\"INT\" size=\"10\"/><Column id=\"OUTREQDTL_WORKSDATE\" type=\"STRING\" size=\"8\"/><Column id=\"OUTREQDTL_WORKEDATE\" type=\"STRING\" size=\"8\"/><Column id=\"SECTION_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"ATHR_ABODEGB\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutOrdDtl", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","10","18","480","337",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsPendOutRequest");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"의뢰서 번호\"/><Cell col=\"2\" text=\"외주처\"/><Cell col=\"3\" text=\"도서\"/><Cell col=\"4\" text=\"작업내용\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:OUTREQUEST_NO\"/><Cell col=\"2\" text=\"bind:OUTER_NAME\"/><Cell col=\"3\" text=\"bind:OUTREQDTL_BOOKMSTNAME\"/><Cell col=\"4\" text=\"bind:OUTREQDTL_WORKCONTENT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"365","63","25","256",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"365","63","25","187",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ED150_PendOutReq_SearchF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED150_PendOutReq_SearchF.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("ED150_PendOutReq_SearchF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var sSabun, sSection_Code;

        this.ED150_PendOutReq_SearchF_onload = function(obj,e)
        {
        	this.dsOutOrdDtl.copyData(this.parent.p_dsOutOrdDtl);
        	sSabun = this.parent.p_sSabun;
        	sSection_Code = this.parent.p_sSection_Code;
        	OutOrderKind = this.parent.p_Kind;

        	var inds = "dsPendOutRequest=dsPendOutRequest";
        	var outds = "dsPendOutRequest=dsPendOutRequest";
        	var strArg = "OUTORDMST_KIND=" + OutOrderKind
        				+ " SECTION_CODE=" + sSection_Code;

        	this.gfn_TransactionP("search","JSP/ed/ed150f_pendoutrequest.jsp", inds, outds, strArg, "", false, "P", false, this);
        };

        this.Div00_btn_search_onclick = function(obj,e)
        {
        	var nTRow = -1;
        	var sOUTREQMST_KIND = '';

        	for(var nRow = 0; nRow < this.dsPendOutRequest.rowcount; nRow++)
        	{
        		if(this.dsPendOutRequest.getColumn(nRow, "CHK") == '1')
        		{
        			nTRow = this.dsOutOrdDtl.addRow();
        			this.dsOutOrdDtl.setColumn(nTRow, "OUTORDDTL_SEQ" , this.dsOutOrdDtl.getCountNF().toString().padLeft(3,"0"));
        			this.dsOutOrdDtl.setColumn(nTRow, "MNSCRIPT_CODE" , this.dsPendOutRequest.getColumn(nRow, "MNSCRIPT_CODE"));
        			this.dsOutOrdDtl.setColumn(nTRow, "MNSCRIPT_NAME" , this.dsPendOutRequest.getColumn(nRow, "MNSCRIPT_NAME"));
        			this.dsOutOrdDtl.setColumn(nTRow, "BOOKCODEYEAR" , this.dsPendOutRequest.getColumn(nRow, "BOOKMST_CODE") + "["
        																+ this.dsPendOutRequest.getColumn(nRow, "BOOKMST_YEAR") + "]");
        			this.dsOutOrdDtl.setColumn(nTRow, "BOOKMST_CODE" , this.dsPendOutRequest.getColumn(nRow, "BOOKMST_CODE"));
        			this.dsOutOrdDtl.setColumn(nTRow, "BOOKMST_YEAR" , this.dsPendOutRequest.getColumn(nRow, "BOOKMST_YEAR"));
        			this.dsOutOrdDtl.setColumn(nTRow, "BOOKMST_SEQ" , this.dsPendOutRequest.getColumn(nRow, "BOOKMST_SEQ"));
        			this.dsOutOrdDtl.setColumn(nTRow, "BOOKMST_ID" , this.dsPendOutRequest.getColumn(nRow, "BOOKMST_ID"));
        			this.dsOutOrdDtl.setColumn(nTRow, "EMPLOYEE_ID" ,  sSabun);
        			this.dsOutOrdDtl.setColumn(nTRow, "OUTORDDTL_QTY" , this.dsPendOutRequest.getColumn(nRow, "OUTREQDTL_QTY"));
        			this.dsOutOrdDtl.setColumn(nTRow, "OUTORDDTL_UNITCOST" , this.dsPendOutRequest.getColumn(nRow, "OUTREQDTL_UNITCOST"));

        			sOUTREQMST_KIND = this.dsPendOutRequest.getColumn(nRow, "OUTREQMST_KIND");

        			if(sOUTREQMST_KIND == "P")
        			{
        				if(this.dsPendOutRequest.getColumn(nRow, "ATHR_ABODEGB") == "0")
        					this.dsOutOrdDtl.setColumn(nTRow, "OUTORDDTL_TAXRATE", 3)
        				else	//비거주자일 경우 조세협약에 의해 세율 0%
        					this.dsOutOrdDtl.setColumn(nTRow, "OUTORDDTL_TAXRATE", 0)
        			}
        			else if(sOUTREQMST_KIND == "C")
        			{
        				this.dsOutOrdDtl.setColumn(nTRow, "OUTORDDTL_TAXRATE", 10);
        				this.dsOutOrdDtl.setColumn(nTRow, "OUTORDDTL_EBILL", "0");
        			}

        			this.dsOutOrdDtl.setColumn(nTRow, "OUTORDDTL_AMOUNT" , this.dsPendOutRequest.getColumn(nRow, "OUTREQDTL_AMOUNT"));

        			// 소득세 계산 (1원미만 절사 후 한달치씩 계산하여 1원단위 금액 재계산) / 업체는 부가세
        			var incometax = new nexacro.Decimal( this.dsPendOutRequest.getColumn(nRow, "OUTREQDTL_AMOUNT") * (this.dsOutOrdDtl.getColumn(nTRow, "OUTORDDTL_TAXRATE") / 100));
        			this.dsOutOrdDtl.setColumn(nTRow, "OUTORDDTL_INCOMETAX" , incometax.trunc());

        			// 주민세 계산 (업체는 0원)
        			var residenttax = new nexacro.Decimal(this.dsOutOrdDtl.getColumn(nTRow, "OUTORDDTL_INCOMETAX") / 10 );
        			this.dsOutOrdDtl.setColumn(nTRow, "OUTORDDTL_RESIDENTTAX" ,  Eco.decode(sOUTREQMST_KIND, 'P', residenttax.trunc(), 0));

        			this.dsOutOrdDtl.setColumn(nTRow, "CUST_GUBN" , this.dsPendOutRequest.getColumn(nRow, "CUST_GUBN"));
        			this.dsOutOrdDtl.setColumn(nTRow, "CUST_CODE" , this.dsPendOutRequest.getColumn(nRow, "CUST_CODE"));
        			this.dsOutOrdDtl.setColumn(nTRow, "ATHR_IDENTITY" , this.dsPendOutRequest.getColumn(nRow, "ATHR_IDENTITY"));
        			this.dsOutOrdDtl.setColumn(nTRow, "OUTER_NAME" , this.dsPendOutRequest.getColumn(nRow, "OUTER_NAME"));

        			this.dsOutOrdDtl.setColumn(nTRow, "OUTORDDTL_PAYDATE" , "");

        			this.dsOutOrdDtl.setColumn(nTRow, "OUTREQMST_ID" , this.dsPendOutRequest.getColumn(nRow, "OUTREQMST_ID"));
        			this.dsOutOrdDtl.setColumn(nTRow, "OUTREQDTL_SEQ" , this.dsPendOutRequest.getColumn(nRow, "OUTREQDTL_SEQ"));
        			this.dsOutOrdDtl.setColumn(nTRow, "OUTORDDTL_BOOKMSTNAME" , this.dsPendOutRequest.getColumn(nRow, "OUTREQDTL_BOOKMSTNAME"));
        			this.dsOutOrdDtl.setColumn(nTRow, "OUTORDDTL_WORKCONTENT" , this.dsPendOutRequest.getColumn(nRow, "OUTREQDTL_WORKCONTENT"));
        			this.dsOutOrdDtl.setColumn(nTRow, "OUTORDDTL_STANDARD" , this.dsPendOutRequest.getColumn(nRow, "OUTREQDTL_STANDARD"));
        			this.dsOutOrdDtl.setColumn(nTRow, "OUTORDDTL_RANGE" , this.dsPendOutRequest.getColumn(nRow, "OUTORDDTL_RANGE"));
        			this.dsOutOrdDtl.setColumn(nTRow, "OUTORDDTL_TONE" , this.dsPendOutRequest.getColumn(nRow, "OUTREQDTL_TONE"));
        			this.dsOutOrdDtl.setColumn(nTRow, "OUTORDDTL_DELETE" , " ");
        		}
        	}
        	this.parent.p_dsOutOrdDtl.copyData(this.dsOutOrdDtl);
        	this.close();
        };

        this.Div00_btn_save_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ED150_PendOutReq_SearchF_onload,this);
            this.btn_save.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.btn_close.addEventHandler("onclick",this.Div00_btn_save_onclick,this);
            this.dsOutOrdDtl.addEventHandler("onload",this.dsOutOrdDtl_onload,this);
        };
        this.loadIncludeScript("ED150_PendOutReq_SearchF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
