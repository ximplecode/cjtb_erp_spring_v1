(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED150_SearchF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,390);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOutOrdMst", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSection", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutOrdDtl", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFormpath", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close","155","351",null,"29","245",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","13","27","87","29",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회일자");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","13","58","87","29",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("관련부서");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Sdate","104","27","110","29",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Edate","222","27","110","29",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_section","104","58","229","29",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("dsSection");
            obj.set_codecolumn("SECTION_CODE");
            obj.set_datacolumn("SECTION_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","17","95","369","246",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsOutOrdMst");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"190\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"관리카드 번호\"/><Cell col=\"1\" text=\"도서명\"/><Cell col=\"2\" text=\"담당자\"/></Band><Band id=\"body\"><Cell text=\"bind:OUTORDER_NO\"/><Cell col=\"1\" text=\"bind:BOOKNAME\"/><Cell col=\"2\" text=\"bind:EMPLOYEE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"34","40","38","17",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #3cbcb8");
            obj.set_defaultbutton("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close00","155","351",null,"29","175",null,null,null,null,null,this);
            obj.set_taborder("8");
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
        this.addIncludeScript("ED150_SearchF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED150_SearchF.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("ED150_SearchF.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("ED150_SearchF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var iI_flow_id, sSabun, sSelect, OutOrderKind, OutOrderEtc;

        this.ED150_SearchF_onload = function(obj,e)
        {
        	this.dsOutOrdMst.copyData(this.parent.pdsOutOrdMst);
        	this.dsOutOrdDtl.copyData(this.parent.pdsOutOrdDtl);
        	this.dsSection.copyData(this.parent.pdsSection);
        	this.dsFormpath.copyData(this.parent.pdsFormpath);

        	sSabun = this.parent.pSabun;
        	sSelect = this.parent.pSelect;
        	sSection_Code = this.parent.psectionCode;

        	OutOrderKind = this.parent.pOutOrderKind;
        	OutOrderEtc = this.parent.pOutOrderEtc;

        	//this.cb_section.set_index(this.dsSection.findRow("SECTION_CODE", sSection_Code ));
        };

        this.btn_search_onclick = function(obj,e)
        {
        	var inds = "dsOutOrdMst=dsOutOrdMst";
        	var outds = "dsOutOrdMst=dsOutOrdMst";
        	var strArg = "OUTORDMST_SDATE=" + this.cal_Sdate.value
        				+ " OUTORDMST_EDATE=" + this.cal_Edate.value
        				+ " OUTORDMST_KIND=" + OutOrderKind
        				+ " OUTORDMST_ETC=" + OutOrderEtc
        				+ " SECTION_CODE=" + this.cb_section.value
        				+ " EMPLOYEE_ID=" + sSabun
        				+ " COMPETENCE=S" //+ sSelect
        				+ " SET_OPTION=1"
        				+ " I_FLOW_ID= ";

        	this.gfn_TransactionP("search","JSP/ed/ed150f_outorder_mst.jsp", inds, outds, strArg, "fnMstCallback", false, "P", false, this);
        };

        this.fnMstCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else if(this.dsOutOrdMst.rowcount == 0)
        		alert("조회된 자료가 없습니다.");
        }

        //세부내역찾기
        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var mstId = this.dsOutOrdMst.getColumn(e.row, "OUTORDMST_ID");
        	iI_flow_id = this.dsOutOrdMst.getColumn(e.row, "I_FLOW_ID");

        	this.dsOutOrdMst.filter("OUTORDMST_ID ==" + mstId);
        	this.parent.pdsOutOrdMst.copyData(this.dsOutOrdMst, true);

        	if(this.dsOutOrdMst.rowcount != 0)
        	{
        		this.lfn_I_FLOW_FOMPAHT2_LOAD(this.dsOutOrdMst.getColumn(0, "EMPLOYEE_ID"), this.dsFormpath);	//저장된 결재라인 가져오기

        		var inds = "dsOutOrdDtl=dsOutOrdDtl";
        		var outds = "dsOutOrdDtl=dsOutOrdDtl";
        		var strArg = "OUTORDMST_ID=" + mstId
        					+" OUTORDMST_KIND=" + OutOrderKind
        					+" COMPETENCE=S"  //+ sSelect;

        		this.gfn_TransactionP("search","JSP/ed/ed150f_outorder_dtl.jsp", inds, outds, strArg, "fnDtlCallback", false, "P", false, this);
        	}else
        		this.dsOutOrdDtl.clearData();
        };

        this.fnDtlCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        	{
        		this.parent.pdsOutOrdDtl.copyData(this.dsOutOrdDtl);
        		this.parent.pdsFormpath.copyData(this.dsFormpath);

        		if(this.dsOutOrdMst.getColumn(this.dsOutOrdMst.rowposition, "OUTORDMST_PAYKIND") == "0")
        			this.opener.btn_pay.text = "정기지급";
        		else
        			this.opener.btn_pay.text = "수시지급";

        		this.close(iI_flow_id);
        	}
        }

        //총쪽수, 총금액 구하기
        this.dsOutOrdDtl_onload = function(obj,e)
        {
        	this.opener.medt_totAmount.set_value(this.dsOutOrdDtl.getSum("OUTORDDTL_AMOUNT"));
        	this.opener.medt_totQty.set_value(this.dsOutOrdDtl.getSum("OUTORDDTL_QTY"));
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ED150_SearchF_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.btn_search00.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);
            this.dsOutOrdDtl.addEventHandler("onload",this.dsOutOrdDtl_onload,this);
        };
        this.loadIncludeScript("ED150_SearchF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
