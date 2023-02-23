(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TestForm");
            this.set_titletext("New Form");
            this.set_background("azure");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">a</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">b</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">c</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset02", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">11</Col><Col id=\"NAME\">가</Col></Row><Row><Col id=\"CODE\">22</Col><Col id=\"NAME\">나</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset03", this);
            obj._setContents("<ColumnInfo><Column id=\"gubn\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"gubn\">11</Col><Col id=\"name\">1</Col></Row><Row><Col id=\"gubn\">22</Col><Col id=\"name\">2</Col></Row><Row><Col id=\"gubn\">11</Col><Col id=\"name\">3</Col></Row><Row><Col id=\"gubn\">11</Col><Col id=\"name\">4</Col></Row><Row><Col id=\"gubn\">22</Col><Col id=\"name\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset04", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset05", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","20","15","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("서비스명 가져오기");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","160","16","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("서비스명 함수");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","20","75","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("Dataset01");
            obj.set_datacolumn("NAME");
            obj.set_codecolumn("YY");
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","100","180","220",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"YY\"/><Cell col=\"1\" text=\"NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:YY\"/><Cell col=\"1\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","22","340","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Button02");
            obj.set_cssclass("but_line");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","208","100","242","220",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("Dataset03");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"gubn\"/><Cell col=\"1\" text=\"name\"/></Band><Band id=\"body\"><Cell text=\"bind:gubn\" combodataset=\"Dataset02\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"combotext\"/><Cell col=\"1\" text=\"bind:name\"/></Band></Format></Formats>");
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
        this.addIncludeScript("TestForm.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("TestForm.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;


        this.Button00_onclick = function(obj,e)
        {
        	this.alert(nexacro.getEnvironment().services["svcUrl"].url);
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.alert(nexacro.getApplication().gfn_getUrl("svcUrl"));
        };

        this.Combo00_onitemchanged = function(obj,e)
        {

        };

        this.TestForm_onload = function(obj,e)
        {
        	this.lfn_setYY(this.Dataset01,"1980");
        	this.Combo01.set_index(1);
        };

        this.Combo01_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TestForm_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Combo01.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
        };
        this.loadIncludeScript("TestForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
