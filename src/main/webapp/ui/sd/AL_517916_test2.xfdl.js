(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test2");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.set_keystring("G:Column0");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">a</Col><Col id=\"Column1\">10</Col></Row><Row><Col id=\"Column0\">a</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">b</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">c</Col><Col id=\"Column1\">121</Col></Row><Row><Col id=\"Column0\">c</Col><Col id=\"Column1\">32</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","125","104","426","309",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/></Band><Band id=\"body\"><Cell text=\"expr:dataset.getRowLevel(currow) == 1?&quot;소계&quot;:Column0\"/><Cell col=\"1\" text=\"bind:Column1\" displaytype=\"expr:dataset.getRowLevel(currow) == 1?&quot;normal&quot;:&quot;mask&quot;\" maskeditformat=\"expr:dataset.getRowLevel(currow) == 1?&apos;&apos;:&quot;###,###,###,###,##0.0&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("AL_517916_test2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
