(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Test0701");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.set_keystring("Column0, Column0+Column1");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"INT\" size=\"256\"/><Column id=\"Column3\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">A</Col><Col id=\"Column1\">A-1</Col><Col id=\"Column2\">1</Col><Col id=\"Column3\">10</Col></Row><Row><Col id=\"Column0\">A</Col><Col id=\"Column1\">A-1</Col><Col id=\"Column2\">2</Col><Col id=\"Column3\">20</Col></Row><Row><Col id=\"Column0\">A</Col><Col id=\"Column1\">A-2</Col><Col id=\"Column2\">3</Col><Col id=\"Column3\">30</Col></Row><Row><Col id=\"Column0\">A</Col><Col id=\"Column1\">A-2</Col><Col id=\"Column2\">4</Col><Col id=\"Column3\">40</Col></Row><Row><Col id=\"Column0\">B</Col><Col id=\"Column1\">B-1</Col><Col id=\"Column2\">5</Col><Col id=\"Column3\">110</Col></Row><Row><Col id=\"Column0\">B</Col><Col id=\"Column1\">B-1</Col><Col id=\"Column2\">6</Col><Col id=\"Column3\">120</Col></Row><Row><Col id=\"Column0\">B</Col><Col id=\"Column1\">B-2</Col><Col id=\"Column2\">7</Col><Col id=\"Column3\">130</Col></Row><Row><Col id=\"Column0\">B</Col><Col id=\"Column1\">B-2</Col><Col id=\"Column2\">8</Col><Col id=\"Column3\">140</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","91","20","398","324",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"팀\"/><Cell col=\"1\" text=\"부서\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" expr=\"dataset.getRowLevel(currow)==0?Column0:dataset.getRowLevel(currow)==1?&quot;부서별소계&quot;:&quot;팀별소계&quot;\"/><Cell col=\"1\" text=\"bind:Column1\" expr=\"dataset.getRowLevel(currow)==0?Column1:&quot;&quot;\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band><Band id=\"summary\"><Cell text=\"총계\"/><Cell col=\"1\"/><Cell col=\"2\" expr=\"dataset.getSum(&quot;Column2&quot;)\"/><Cell col=\"3\" expr=\"dataset.getSum(&quot;Column3&quot;)\"/></Band></Format></Formats>");
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
        this.loadIncludeScript("Z202107_2021070009-Test0701.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
