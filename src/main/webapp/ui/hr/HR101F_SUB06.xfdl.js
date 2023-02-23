(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR101F_SUB06");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1244,242);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grd_Edu","2","2",null,null,"100","2",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_edu");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"190\"/><Column size=\"121\"/><Column size=\"245\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"기간\"/><Cell col=\"2\" text=\"교육기간\"/><Cell col=\"3\" text=\"교육내용\"/><Cell col=\"4\" text=\"자격취득\"/><Cell col=\"5\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:YMD1\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:YMD2\" textAlign=\"center\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"2\" text=\"bind:GIGUAN\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:NAEYONG\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:CHUI\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:BIGO\" edittype=\"normal\"/></Band></Format></Formats>");
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
        this.registerScript("HR101F_SUB06.xfdl", function() {

        this.btn_add_onclick = function(obj,e)
        {
        	this.parent.parent.ds_edu.addRow();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
        };
        this.loadIncludeScript("HR101F_SUB06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
