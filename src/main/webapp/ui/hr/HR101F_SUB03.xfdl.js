(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR101F_SUB03");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1244,242);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grd_school","2","2",null,null,"100","2",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_school");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"117\"/><Column size=\"176\"/><Column size=\"48\"/><Column size=\"162\"/><Column size=\"80\"/><Column size=\"234\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"졸업일자\"/><Cell col=\"1\" text=\"줄신학교 및 전공\"/><Cell col=\"2\" text=\"학력\"/><Cell col=\"3\" text=\"학력구분\"/><Cell col=\"4\" text=\"성적\"/><Cell col=\"5\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:YMD\" textAlign=\"center\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"1\" text=\"bind:SCHOOL\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:SCH_GB\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:SCH_GB\" combodataset=\"ds_schGB\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"combotext\" edittype=\"combo\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:SUNGJUK\" edittype=\"text\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:BIGO\" edittype=\"text\"/></Band></Format></Formats>");
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
        this.addIncludeScript("HR101F_SUB03.xfdl","Lib::Lib_service.xjs");
        this.registerScript("HR101F_SUB03.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;

        this.btn_add_onclick = function(obj,e)
        {
        	this.parent.parent.ds_school.addRow();
        };

        this.btn_del_onclick = function(obj,e)
        {
        	var nRow = this.parent.parent.ds_school.rowposition;
        	if (this.confirm("선택한 정보를 삭제하시겠습니까?","학력사항 삭제","warning") )
        	{

        		this.parent.parent.ds_school.deleteRow(nRow);
        	}
        };

        this.grd_school_onenterdown = function(obj,e)
        {
        	if (e.col == this.grd_school.getCellCount("body") - 1)
        	{
        		if (e.row == this.grd_school.rowcount - 1 )
        		{
        			this.btn_add_onclick(null, null);
        		}
        		this.grd_school.moveToNextCell();
        		this.grd_school.setCellPos(0);
        	}
        	else
        	{
        		this.grd_school.moveToNextCell();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grd_school.addEventHandler("onenterdown",this.grd_school_onenterdown,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
        };
        this.loadIncludeScript("HR101F_SUB03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
