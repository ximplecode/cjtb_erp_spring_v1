(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PDAccountTitle_CustF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,392);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","-1","2","281","48",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("거래처에 따른 주 사용계정");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","294","10","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","2","38","343","57",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("※ 아래 해당하는 계정이 없으면 창을닫으시고 \n  새로운 계정을 선택해 주세요.");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","85","349","308",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"351\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" text=\"bind:ACNTTIT_NAME\" treelevel=\"bind:ACNTTIT_LVL\" edittype=\"tree\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",350,392,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PDAccountTitle_CustF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("PDAccountTitle_CustF.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("PDAccountTitle_CustF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var pACNTTIT_CUST = "0614";
        var aQryReturn = new Array();
        this.parentForm = this.opener;

        // 지급결의서 계정과목 찾기
        this.PDAccountTitle_onload = function(obj,e)
        {
        	this.Grid00.set_binddataset(this.opener.dsAccountTitle)
        };


        this.tvAccountTitle_OnDblClick = function(obj,e)
        {

        	if (this.opener.dsAccountTitle.getColumn(e.row, "ACNTTIT_ENABLED") == "0")
        	{
        	  alert("선택한 계정은 사용할 수 없는 계정이니 다른 계정이나 하위계정을 선택하여 주세요.");
        	  return false;
        	}
        	else
        	{
        		this.close(this.fnReturnValue(aQryReturn));
        	}
        };


        this.fnReturnValue = function()
        {

        	var nRow = this.opener.dsAccountTitle.rowposition;

        	aQryReturn[0] = this.opener.dsAccountTitle.getColumn(nRow, "ACNTTIT_NO");
        	aQryReturn[1] = this.opener.dsAccountTitle.getColumn(nRow, "ACNTTIT_CODE");
        	aQryReturn[2] = this.opener.dsAccountTitle.getColumn(nRow, "ACNTTIT_NAME");
        	aQryReturn[3] = this.opener.dsAccountTitle.getColumn(nRow, "ACNTTIT_PNO");
        	aQryReturn[4] = this.opener.dsAccountTitle.getColumn(nRow, "ACNTTIT_DEVELOP");
        	aQryReturn[5] = this.opener.dsAccountTitle.getColumn(nRow, "ACNTTIT_PRODUCT");

        	return aQryReturn;
        }

        this.btnClose_OnClick = function(obj,e)
        {
        	this.close();
        };


        this.PDAccountTitle_onbeforeclose = function(obj,e)
        {
        	this.opener.fn_PDAccountTitle_CustF(aQryReturn);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PDAccountTitle_onload,this);
            this.addEventHandler("onbeforeclose",this.PDAccountTitle_onbeforeclose,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_OnClick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.tvAccountTitle_OnDblClick,this);
        };
        this.loadIncludeScript("PDAccountTitle_CustF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
