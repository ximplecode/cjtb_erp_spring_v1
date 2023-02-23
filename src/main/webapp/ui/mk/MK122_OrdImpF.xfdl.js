(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MkPopup");
            this.set_titletext("용지 발주리스트");
            if (Form == this.constructor)
            {
                this._setFormPosition(950,360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOrdList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PPRORDMST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PPRORDMST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PPRORDDTL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PPRORD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PPRORDDTL_PPRSTND\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_CUSTGUBN\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_CUSTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_CUST\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CUST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CUST\" type=\"STRING\" size=\"256\"/><Column id=\"IN_CUSTGUBN\" type=\"STRING\" size=\"256\"/><Column id=\"IN_CUSTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_CUST\" type=\"STRING\" size=\"256\"/><Column id=\"PPRORDDTL_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PPRORDDTL_WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"PAPER_UNITCOST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_Paper", this);
            obj._setContents("<ColumnInfo><Column id=\"PPR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_STND\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_REGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_LENGTH\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CONVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_DANGA\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_FEQUENT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_DISABLED\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_STNDNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_CLASS\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PPRKND_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mk_Cust", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CUST\" type=\"STRING\" size=\"6\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REPRESENTATIVE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_STARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_STOPPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ACNTNO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTDTL_SALEAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PWT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdOrdList","1","45",null,"305","1",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsOrdList");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"113\"/><Column size=\"192\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell font=\"bold 13px/normal &quot;함초롬돋움&quot;\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"발주번호\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"용지\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"입고수량\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"입고중량\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"입고처\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"매입처\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"제지사\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell font=\"12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:PPRORD_NO\" font=\"12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"2\" font=\"12px/normal &quot;함초롬돋움&quot;\" text=\"bind:PPR_CODE\" textAlign=\"left\" displaytype=\"combotext\" combodataset=\"ds_mk_Paper\" combocodecol=\"PPR_CODE\" combodatacol=\"PPR_NAME\"/><Cell col=\"3\" font=\"12px/normal &quot;함초롬돋움&quot;\" text=\"bind:PPRORDDTL_QTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,0.000\"/><Cell col=\"4\" font=\"12px/normal &quot;함초롬돋움&quot;\" text=\"bind:PPRORDDTL_WEIGHT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,0.000\"/><Cell col=\"5\" font=\"12px/normal &quot;함초롬돋움&quot;\" text=\"bind:IN_CUST\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"ds_mk_Cust\" combocodecol=\"CUST\" combodatacol=\"CUST_NAME\"/><Cell col=\"6\" font=\"12px/normal &quot;함초롬돋움&quot;\" text=\"bind:ORD_CUST\" textAlign=\"center\" combodataset=\"ds_mk_Cust\" combocodecol=\"CUST\" combodatacol=\"CUST_NAME\" displaytype=\"combotext\"/><Cell col=\"7\" font=\"12px/normal &quot;함초롬돋움&quot;\" text=\"bind:PPR_CUST\" textAlign=\"center\" combodataset=\"ds_mk_Cust\" combocodecol=\"CUST\" combodatacol=\"CUST_NAME\" displaytype=\"combotext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","5","6","218","41",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("용지 발주리스트");
            obj.set_color("#7fb39d");
            obj.set_font("bold 25px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","744","8","50","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnApply","800","8","82","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("가져오기");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","888","8","50","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("stSOrdDate","403","7","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("발주일자");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate","490","7","158","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",950,360,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK122_OrdImpF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK122_OrdImpF.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK122_OrdImpF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var sCust_Gubn = "40";
        var vPprInMstDate, vPprInMstNo;
        var vCustCd;

        this.MkPopup_onload = function(obj,e)
        {
        	vPprInMstDate = this.parent.dsParam1;
        	vCustCd = this.parent.dsParam2;
        	this.ds_mk_Paper.copyData(this.parent.dsParam3);
        	this.ds_mk_Cust.copyData(this.parent.dsParam4);
        	vPprInMstNo = this.parent.dsParam5;

        	this.calSDate.setFocus();
        };

        this.btnSearch_onclick = function(obj,e)
        {
        	if(vCustCd == "0000")
        		vCustCd = "";

        	var str_url = "JSP/mk/mk122f_not_in_pprord_cal_pprunitcost.jsp";
        	var in_ds = "dsOrdList=dsOrdList";
        	var out_ds = "dsOrdList=dsOrdList";
        	var str_arg ="PPRINMST_DATE=" +nexacro.wrapQuote(vPprInMstDate);
        	str_arg +=" PPRORDMST_DATE=" +nexacro.wrapQuote(this.calSDate.value);
        	str_arg +=" CUST_GUBN=" +nexacro.wrapQuote(sCust_Gubn);
        	str_arg +=" CUST_CODE=" +nexacro.wrapQuote(vCustCd);
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_Select", false, "S", false, this);
        };

        this.Callback_Select = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}
        };

        this.btnApply_onclick = function(obj,e)
        {
        	//기존에 내용없이 추가한 내역 확인해서 삭제
        	for(var i=this.opener.dsPprInDtl.getRowCount()-1 ; i== 0 ; i--)
        	{
        		if((Eco.isUndefined(this.opener.dsPprInDtl.getColumn(i, "TYPE_CODE")) == true)
        		&& (Eco.isUndefined(this.opener.dsPprInDtl.getColumn(i, "PPR_CODE")) == true))
        			this.opener.dsPprInDtl.deleteRow(i);
        	}

        	for(var nRow=0 ; nRow<= this.dsOrdList.getRowCount()-1 ; nRow++)
        	{
        		if (this.dsOrdList.getColumn(nRow, "CHK") == "1")
        		{
        			var dtlRow = this.opener.dsPprInDtl.addRow();

        			this.opener.dsPprInDtl.setColumn(dtlRow, "TYPE_CODE"		, "01");
        			this.opener.dsPprInDtl.setColumn(dtlRow, "PPR_CODE"			, this.dsOrdList.getColumn(nRow, "PPR_CODE"));

        			this.opener.dsPprInDtl.setColumn(dtlRow, "CUST_GUBN"		, this.dsOrdList.getColumn(nRow, "IN_CUSTGUBN"));
        			this.opener.dsPprInDtl.setColumn(dtlRow, "CUST_CODE"		, this.dsOrdList.getColumn(nRow, "IN_CUSTCODE"));
        			this.opener.dsPprInDtl.setColumn(dtlRow, "CUST"				, this.dsOrdList.getColumn(nRow, "IN_CUST"));

        			this.opener.dsPprInDtl.setColumn(dtlRow, "PPR_CUST_GUBN"	, this.dsOrdList.getColumn(nRow, "PPR_CUST_GUBN"));
        			this.opener.dsPprInDtl.setColumn(dtlRow, "PPR_CUST_CODE"	, this.dsOrdList.getColumn(nRow, "PPR_CUST_CODE"));
        			this.opener.dsPprInDtl.setColumn(dtlRow, "PPR_CUST"			, this.dsOrdList.getColumn(nRow, "PPR_CUST"));

        			this.opener.dsPprInDtl.setColumn(dtlRow, "PPRORDMST_DATE"	, this.dsOrdList.getColumn(nRow, "PPRORDMST_DATE"));

        			this.opener.dsPprInDtl.setColumn(dtlRow, "PPRORDMST_NO"		, this.dsOrdList.getColumn(nRow, "PPRORDMST_NO"));
        			this.opener.dsPprInDtl.setColumn(dtlRow, "PPRORDDTL_SEQ"	, this.dsOrdList.getColumn(nRow, "PPRORDDTL_SEQ"));

        			this.opener.dsPprInDtl.setColumn(dtlRow, "PPRORDNO"			, this.dsOrdList.getColumn(nRow, "PPRORD_NO"));
        			this.opener.dsPprInDtl.setColumn(dtlRow, "PPRINDTL_REMARK"	, "");

        			this.opener.dsPprInDtl.setColumn(dtlRow, "PPR_UNIT"			, this.dsOrdList.getColumn(nRow, "PPR_UNIT"));
        			this.opener.dsPprInDtl.setColumn(dtlRow, "PPRINDTL_PPRSTND"	, this.dsOrdList.getColumn(nRow, "PPRORDDTL_PPRSTND"));

        			this.opener.dsPprInDtl.setColumn(dtlRow, "PPRINDTL_QTY"		, this.dsOrdList.getColumn(nRow, "PPRORDDTL_QTY"));
        			this.opener.dsPprInDtl.setColumn(dtlRow, "PPRINDTL_WEIGHT"	, this.dsOrdList.getColumn(nRow, "PPRORDDTL_WEIGHT"));

        			this.opener.dsPprInDtl.setColumn(dtlRow, "PPRINDTL_UNITCOST", this.dsOrdList.getColumn(nRow, "PAPER_UNITCOST"));
        			this.opener.dsPprInDtl.setColumn(dtlRow, "PPRINDTL_AMOUNT"	, 0);
        			this.opener.dsPprInDtl.setColumn(dtlRow, "PPRINDTL_VAT"		, 0);
        			this.opener.dsPprInDtl.setColumn(dtlRow, "PPRINDTL_INVOICE"	, "0");
        			this.opener.dsPprInDtl.setColumn(dtlRow, "PPRINDTL_PREEMPTION", "0");

        			this.opener.dsPprInDtl.setColumn(dtlRow, "PPRINMST_DATE"	, vPprInMstDate);
        			this.opener.dsPprInDtl.setColumn(dtlRow, "PPRINMST_NO"		, vPprInMstNo);
        			this.opener.dsPprInDtl.setColumn(dtlRow, "EMPLOYEE_ID"		, gv_sabun);
        		}
        	}

        	this.btnClose_onclick();
        };


        this.calSDate_onchanged = function(obj,e)
        {
        	this.btnSearch_onclick();
        };

        this.grdOrdList_onheadclick = function(obj,e)
        {
        	if(e.cell == "0")
        	{
        		for(var nRow = 0; nRow <= this.dsOrdList.rowcount; nRow++)
        		{
        			if(this.dsOrdList.getColumn(nRow, "CHK") == "1")
        				this.dsOrdList.setColumn(nRow, "CHK", "0");
        			else
        				this.dsOrdList.setColumn(nRow, "CHK", "1");
        		}
        	}
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close(-1);
        };






        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkPopup_onload,this);
            this.grdOrdList.addEventHandler("onheadclick",this.grdOrdList_onheadclick,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnApply.addEventHandler("onclick",this.btnApply_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.calSDate.addEventHandler("onchanged",this.calSDate_onchanged,this);
            this.ds_mk_Cust.addEventHandler("oncolumnchanged",this.ds_mk_Paper_oncolumnchanged,this);
        };
        this.loadIncludeScript("MK122_OrdImpF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
