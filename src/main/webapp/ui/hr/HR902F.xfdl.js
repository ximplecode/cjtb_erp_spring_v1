(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR902F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(330,610);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DS_DEPT_TREE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"5\"/><Column id=\"BU_LEVEL\" type=\"STRING\" size=\"1\"/><Column id=\"BU_GRCODE\" type=\"STRING\" size=\"5\"/><Column id=\"BU_SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"BU_NAME\" type=\"STRING\" size=\"50\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">21000</Col></Row><Row><Col id=\"CODE\">22000</Col></Row><Row><Col id=\"CODE\">23000</Col></Row><Row><Col id=\"CODE\">25000</Col></Row><Row><Col id=\"CODE\">26000</Col></Row><Row><Col id=\"CODE\">27000</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_tree","10","10","310","550",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("DS_DEPT_TREE");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/></Band><Band id=\"body\"><Cell/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","127","568","77","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫 기");
            obj.set_background("#f0f0f0");
            obj.set_color("black");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",330,610,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("HR902F.xfdl", function() {


        this.grd_tree_oncelldblclick = function(obj,e)
        {
        	var strArg;
        	strArg = this.DS_DEPT_TREE.getColumn(e.row,'CODE');
        	strArg += '^' + this.DS_DEPT_TREE.getColumn(e.row,'BU_NAME');
        	strArg += '^' + this.DS_DEPT_TREE.getColumn(e.row,'BU_GRCODE');
        	this.close(strArg);
        	// nexacro는 close로 string형만 보내기 가능. 구분자'^'
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grd_tree.addEventHandler("oncelldblclick",this.grd_tree_oncelldblclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("HR902F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
