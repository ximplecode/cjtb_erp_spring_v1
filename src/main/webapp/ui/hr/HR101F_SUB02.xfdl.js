(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR101F_SUB02");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1244,242);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_fam_relation", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_family","2","2",null,null,"100","2",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_family");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"152\"/><Column size=\"187\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"성명\"/><Cell col=\"1\" text=\"관계\"/><Cell col=\"2\" text=\"생년월일\"/><Cell col=\"3\" text=\"학력\"/><Cell col=\"4\" text=\"직업\"/><Cell col=\"5\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:NAME\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:GUAN\" combodataset=\"ds_fam_relation\" combocodecol=\"CODE\" combodatacol=\"NAME\" combotype=\"dropdown\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"2\" text=\"bind:YMD\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:SCH_GB\" displaytype=\"combotext\" edittype=\"combo\" combotype=\"dropdown\" combodataset=\"ds_schGB\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"4\" text=\"bind:JIKUP\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:BIGO\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"8","90","22","4",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"38","90","22","4",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1244,242,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("HR101F_SUB02.xfdl","Lib::Lib_service.xjs");
        this.registerScript("HR101F_SUB02.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;

        this.HR101F_SUB02_onload = function(obj,e)
        {
        	var str_url, in_ds, out_ds, str_arg;

        	str_url = "JSP/hr/getData_fam_relation.jsp";
        	in_ds = "ds_fam_relation=ds_fam_relation";
        	out_ds = "ds_fam_relation=ds_fam_relation";
        	str_arg = "";
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_select", true, "P", false, this);
        };

        this.Callback_select = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}
        }

        this.btn_add_onclick = function(obj,e)
        {
        	this.parent.parent.ds_family.addRow();
        };

        this.btn_del_onclick = function(obj,e)
        {
        	var nRow = this.parent.parent.ds_family.rowposition;
        	var seq;
        	if (this.confirm("선택한 정보를 삭제하시겠습니까?","가족사항 삭제","warning") )
        	{
        		this.parent.parent.ds_family.deleteRow(nRow);
        	}
        };

        this.grd_family_onenterdown = function(obj,e)
        {
        	if (e.col == this.grd_family.getCellCount("head") - 1)
        	{
        		if (e.row == this.grd_family.rowcount - 1 )
        		{
        			this.btn_add_onclick(null, null);
        		}
        		this.grd_family.moveToNextCell();
        		this.grd_family.setCellPos(0);
        	}
        	else
        	{
        		this.grd_family.moveToNextCell();
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.HR101F_SUB02_onload,this);
            this.grd_family.addEventHandler("onenterdown",this.grd_family_onenterdown,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
        };
        this.loadIncludeScript("HR101F_SUB02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
