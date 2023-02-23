(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PDEmpBankAcntF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(408,270);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBank", this);
            obj._setContents("<ColumnInfo><Column id=\"BANK_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"BANK_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"BANK_DISABLED\" type=\"STRING\" size=\"1\"/><Column id=\"BANK_REMARK\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","4","6","400","39",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("직원계좌정보");
            obj.set_border("1px solid lightgray");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew","179","15","50","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","234","15","50","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","289","15","50","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","344","15","50","23",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("Grd_EBA","4","47","401","221",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"92\"/><Column size=\"114\"/><Column size=\"76\"/><Column size=\"119\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"은행\"/><Cell col=\"1\" text=\"계좌번호\"/><Cell col=\"2\" text=\"예금주\"/><Cell col=\"3\" text=\"계좌메모\"/></Band><Band id=\"body\"><Cell text=\"bind:BANK_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodisplaynulltype=\"none\" combocodecol=\"BANK_CODE\" combodatacol=\"BANK_NAME\" combodataset=\"dsBank\"/><Cell col=\"1\" text=\"bind:EBA_BANK_ACCOUNT\" edittype=\"normal\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:EBA_ACCOUNT_HOLDER\" edittype=\"normal\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:EBA_REMARK\" edittype=\"normal\" displaytype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",408,270,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PDEmpBankAcntF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("PDEmpBankAcntF.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("PDEmpBankAcntF.xfdl","Lib::Lib_gw.xjs");
        this.registerScript("PDEmpBankAcntF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_gw.xjs"); /*include "Lib::Lib_gw.xjs"*/;

        var nDate = new Date();
        var today = Eco.date.getMaskFormatString(nDate, "yyyyMMdd");
        this.parentForm = this.opener;
        var rtnEBA_ID;

        this.PDEmpBankAcntF_onload = function(obj,e)
        {
        	this.Grd_EBA.set_binddataset(this.opener.dsEBA)
        	this.dsBank.copyData(this.opener.dsBank);
        };

        this.btnClose_OnClick = function(obj,e)
        {
        	this.close();
        };

        // 신규
        this.btnNew_OnClick = function(obj,e)
        {
        	this.opener.dsEBA.addRow();
        };

        // 저장
        this.btnSave_OnClick = function(obj,e)
        {
        	//this.fctn_EBA_save(this.opener.dsEBA.getRowType(this.opener.dsEBA.row));

        	//var tRow = this.dsEBA.rowposition;
        	var rowType = this.opener.dsEBA.getRowType(this.opener.dsEBA.rowposition);

        	this.fctn_EBA_save(rowType);

        	trace("setSave 22222 :" + rowType );

        };

        this.fctn_EBA_save = function(_dsSet)
        {
        	var nRow = this.opener.dsEBA.rowposition;
        	var inds 	= "dsEBA=dsEBA:U";
        	var setSave = true;
        	trace(" nRow : + " + nRow );
        	if (this.opener.dsEBA.getColumn(nRow, "BANK_CODE") == null)
        	{
        		alert("은행을 선택해 주십시요.");
        		return false;
        	}

        	if (this.opener.dsEBA.getColumn(nRow, "EBA_BANK_ACCOUNT") == null)
        	{
        		alert("계좌번호를 선택해 주십시요.");
        		return false;
        	}

        	if (setSave)
        	{
        		trace("setSave 111111 :" + this.opener.dsEBA.getRowType(0) );
        		trace("2222222 : "  + _dsSet);
        		this.gfn_TransactionP(_dsSet, "JSP/pd/pd_emp_bank_acnt_dml.jsp", inds, "", "", "fctn_EBASaveCallback", false, "P", false, this);
        	}
        }

        // 삭제
        this.btnDel_OnClick = function(obj,e)
        {
        	var nRow = this.opener.dsEBA.rowposition;
        	this.opener.dsEBA.deleteRow(nRow);
        	this.fctn_EBA_save("delete");
        };

        //  계좌정보 저장 콜백함수
        //#######################################################
        this.fctn_EBASaveCallback = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (Trid == "insert")
        	{
        	    if(ErrorCode != 0 )
        			trace("[PDEmpBankAcntF.fctn_EBASaveCallback(" + today + ")] " + Trid +"::"+ ErrorMsg );
        	    else
        	    {
        			this.dsEBA.setColumn(this.dsEBA.row, "EBA_ID", trim(rtnEBA_ID));
        			this.dsEBA.setRowType(this.dsEBA.row, "normal");
        		}
        	}
        	else if(ErrorCode != 0 )
        		trace("[PDEmpBankAcntF.fctn_EBASaveCallback(" + today + ")] " + Trid +"::"+ ErrorMsg );
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PDEmpBankAcntF_onload,this);
            this.btnNew.addEventHandler("onclick",this.btnNew_OnClick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_OnClick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_OnClick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_OnClick,this);
        };
        this.loadIncludeScript("PDEmpBankAcntF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
