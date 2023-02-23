(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ED131_SearchF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,390);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSCMst", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSection", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSCDtl", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close","155","351",null,"29","175",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","13","26","87","29",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("계약서 종류");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","13","57","87","29",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회일자");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","13","88","87","29",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("관련부서");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_kind","124","26","186","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_kind_innerdataset = new nexacro.NormalDataset("rdo_kind_innerdataset", obj);
            rdo_kind_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">매절</Col></Row><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">인세</Col></Row></Rows>");
            obj.set_innerdataset(rdo_kind_innerdataset);
            obj.set_text("매절");
            obj.set_value("A");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Sdate","104","57","110","29",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Edate","222","57","110","29",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_section","104","88","229","29",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("dsSection");
            obj.set_codecolumn("SECTION_CODE");
            obj.set_datacolumn("SECTION_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"50","40","38","18",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #3cbcb8");
            obj.set_defaultbutton("true");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","17","125","369","208",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("dsSCMst");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"186\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"관리카드 번호\"/><Cell col=\"1\" text=\"제품명\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:SCMST_CONTRACTNO\"/><Cell col=\"1\" text=\"bind:SCMST_BOOKNAME\"/><Cell col=\"2\" text=\"bind:SCMST_ID\"/></Band></Format></Formats>");
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
        this.addIncludeScript("ED131_SearchF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("ED131_SearchF.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("ED131_SearchF.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("ED131_SearchF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0, "SABUN");
        var sSelect,iI_Flow_id;

        this.ED131_SearchF_onload = function(obj,e)
        {
        	this.dsSCMst.copyData(this.parent.dsParam1);
        	this.dsSCDtl.copyData(this.parent.dsParam2);
        	this.dsSection.copyData(this.parent.dsParam3);
        	iI_Flow_id = this.parent.piI_Flow_id;
        	sSelect = this.parent.pSelect;
        };

        //찾기
        this.btn_search_onclick = function(obj,e)
        {
        	var inds = "dsSCMst=dsSCMst";
        	var outds = "dsSCMst=dsSCMst";
        	var strArg = "SCMST_SDATE=" + this.cal_Sdate.value
        				+ " SCMST_EDATE=" + this.cal_Edate.value
        				+ " SCMST_CLASS=" + this.rdo_kind.value
        				+ " SECTION_CODE=" + this.cb_section.value
        				+ " EMPLOYEE_ID=" +gv_sabun
        				+ " SET_OPTION=1"
        				+ " I_FLOW_ID=" + iI_Flow_id
        				+ " COMPETENCE=" + sSelect;

        	this.gfn_TransactionP("search","JSP/ed/ed131f_standardcontract_mst.jsp", inds, outds, strArg, "fnSearchCallback", true, "P", false, this);
        };

        this.Grid00_oncelldblclick = function(obj,e)
        {
        	//this.parent.dsParam1.copyData(this.dsSCMst);
        	iI_Flow_id = this.dsSCMst.getColumn(e.row, "I_FLOW_ID");
        	var mstId = this.dsSCMst.getColumn(e.row, "SCMST_ID");

        	this.dsSCMst.filter("SCMST_ID ==" + mstId);
        	this.parent.dsParam1.copyData(this.dsSCMst, true);	//filter 된 데이터만 copy

        	//dsSCDtl (세부내역 가져오기)
        	if(this.dsSCMst.rowcount != 0)
        	{
        		var inds = "dsSCDtl=dsSCDtl";
        		var outds 	= "dsSCDtl=dsSCDtl";
        		var strArg	= "SCMST_ID=" + mstId;

        		this.gfn_TransactionP("search","JSP/ed/ed131f_standardcontract_dtl.jsp", outds, inds, strArg, "fnDtlCallBack", true, "P", false, this);
        	}
        	else
        		this.dsSCDtl.clearData();
        };

        this.fnDtlCallBack = function(svcid, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(svcid + "::" + errMsg);
        	else
        	{
        		this.dsSCDtl.filter("SCDTL_DELETE!='D'");
        		this.parent.dsParam2.copyData(this.dsSCDtl);
        		this.opener.rdo_contractKind_canitemchange(this.opener.rdo_contractKind, this.rdo_kind.value);
        		this.close(iI_Flow_id);
        	}
        }

        //닫기
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ED131_SearchF_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.dsSCMst.addEventHandler("onrowsetchanged",this.dsSCMst_onrowsetchanged,this);
            this.dsSCDtl.addEventHandler("onrowsetchanged",this.dsSCDtl_onrowsetchanged,this);
        };
        this.loadIncludeScript("ED131_SearchF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
