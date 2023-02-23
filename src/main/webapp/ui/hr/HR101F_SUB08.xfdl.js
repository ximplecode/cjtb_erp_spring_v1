(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR101F_SUB08");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1244,242);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grd_foreign","2","2",null,null,"100","2",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_foreign");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"109\"/><Column size=\"185\"/><Column size=\"137\"/><Column size=\"362\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"취득일자\"/><Cell col=\"1\" text=\"시험명\"/><Cell col=\"2\" text=\"점수/등급\"/><Cell col=\"3\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:YMD\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:EXNM\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:EXRE\" edittype=\"normal\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:BIGO\" edittype=\"normal\"/></Band></Format></Formats>");
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
        this.registerScript("HR101F_SUB08.xfdl", function() {

        this.btn_add_onclick = function(obj,e)
        {
        	this.parent.parent.ds_foreign.addRow();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
        };
        this.loadIncludeScript("HR101F_SUB08.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
