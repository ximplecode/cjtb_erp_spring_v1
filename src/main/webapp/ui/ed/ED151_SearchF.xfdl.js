(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED151_SearchF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOutReqDtl", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFormPath", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutReqMst", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","13","27","87","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회일자");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Sdate","104","27","110","29",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Edate","222","27","110","29",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"22","40","38","17",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #3cbcb8");
            obj.set_defaultbutton("true");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","13","64","369","246",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsOutReqMst");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"의뢰서 번호\"/><Cell col=\"1\" text=\"외주처\"/><Cell col=\"2\" text=\"담당자\"/></Band><Band id=\"body\"><Cell text=\"bind:OUTREQ_NO\"/><Cell col=\"1\" text=\"bind:CUST_NAME\"/><Cell col=\"2\" text=\"bind:EMPLOYEE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close00","151","315",null,"29","179",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,350,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ED151_SearchF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED151_SearchF.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("ED151_SearchF.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("ED151_SearchF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var iI_flow_id, sSabun, sSection_Code, sSelect;

        this.ED151_SearchF_onload = function(obj,e)
        {
        	this.dsOutReqMst.copyData(this.parent.dsParam1);
        	this.dsOutReqDtl.copyData(this.parent.dsParam2);
        	this.dsFormPath.copyData(this.parent.dsParam3);

        	sSabun = this.parent.pSabun;				//사번
        	sSelect = this.parent.pSelect;				//권한
        	sSection_Code = this.parent.psectionCode;	//부서코드

        	this.cal_Sdate.setFocus();
        };

        //조회
        this.btn_search_onclick = function(obj,e)
        {
        	var inds = "dsOutReqMst=dsOutReqMst";
        	var outds = "dsOutReqMst=dsOutReqMst";
        	var strArg = "OUTREQMST_SDATE=" + this.cal_Sdate.value
        				+ " OUTREQMST_EDATE=" + this.cal_Edate.value
        				+ " SECTION_CODE=" + sSection_Code
        				+ " EMPLOYEE_ID=" + sSabun
        				+ " COMPETENCE=S" //+ sSelect;

        	this.gfn_TransactionP("search","JSP/ed/ed151f_outrequest_mst.jsp", inds, outds, strArg, "fnMstCallback", false, "P", false, this);
        };

        this.fnMstCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else if(this.dsOutReqMst.rowcount == 0)
        		alert("조회된 자료가 없습니다");
        }

        //세부내역찾기
        this.Grid00_oncelldblclick = function(obj,e)
        {
        	//this.opener.dsOutReqMst.copyRow(0, this.dsOutReqMst, e.row);
        	var mstId = this.dsOutReqMst.getColumn(e.row, "OUTREQMST_ID");
        	this.dsOutReqMst.filter("OUTREQMST_ID ==" + mstId);
        	this.parent.dsParam1.copyData(this.dsOutReqMst, true);	//filter 된 데이터만 copy

        	if(this.dsOutReqMst.rowcount != 0)
        	{
        		iI_flow_id = this.dsOutReqMst.getColumn(0, "I_FLOW_ID");
        		this.lfn_I_FLOW_FOMPAHT2_LOAD(this.dsOutReqMst.getColumn(0, "EMPLOYEE_ID"), this.dsFormpath);	//저장된 결재라인 가져오기

        		var inds = "dsOutReqDtl=dsOutReqDtl";
        		var outds = "dsOutReqDtl=dsOutReqDtl";
        		var strArg = "OUTREQMST_ID=" + this.dsOutReqMst.getColumn(0, "OUTREQMST_ID");

        		this.gfn_TransactionP("search","JSP/ed/ed151f_outrequest_dtl.jsp", inds, outds, strArg, "fnDtlCallback", false, "P", false, this);
        	}else
        		this.dsWithHoldDtl.clearData();
        };

        this.fnDtlCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        	{
        		this.parent.dsParam2.copyData(this.dsOutReqDtl);
        		this.parent.dsParam3.copyData(this.dsFormPath);

        		this.opener.btn_athrCust.set_enable(this.dsOutReqDtl.getMax("OUTORDMST_EXIST") != "1");
        	}
        	this.close(iI_flow_id);
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ED151_SearchF_onload,this);
            this.btn_search00.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("ED151_SearchF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
