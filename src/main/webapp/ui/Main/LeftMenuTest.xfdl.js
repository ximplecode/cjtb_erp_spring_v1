(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LeftMenuTest");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Multi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREFIX\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Multi2", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREFIX\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button01","10","60","152","38",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Spring Mvc Call");
            obj.set_background("#4364ed");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","600","60","152","38",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Servlet Call");
            obj.set_background("#4364ed");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","110","410","490",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_Multi");
            obj.set_formatid("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CODE\"/><Cell col=\"1\" text=\"MLEVEL\"/><Cell col=\"2\" text=\"NAME\"/><Cell col=\"3\" text=\"PREFIX\"/><Cell col=\"4\" text=\"URL\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:MLEVEL\"/><Cell col=\"2\" text=\"bind:NAME\"/><Cell col=\"3\" text=\"bind:PREFIX\"/><Cell col=\"4\" text=\"bind:URL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","600","110","410","490",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_Multi2");
            obj.set_formatid("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CODE\"/><Cell col=\"1\" text=\"MLEVEL\"/><Cell col=\"2\" text=\"NAME\"/><Cell col=\"3\" text=\"PREFIX\"/><Cell col=\"4\" text=\"URL\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:MLEVEL\"/><Cell col=\"2\" text=\"bind:NAME\"/><Cell col=\"3\" text=\"bind:PREFIX\"/><Cell col=\"4\" text=\"bind:URL\"/></Band></Format></Formats>");
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
        this.registerScript("LeftMenuTest.xfdl", function() {

        this.Button01_onclick = function(obj,e)
        {
        	var str_svcId = "SpringVer";
        	var str_url = "testURL::LeftMenuList.do";
        	var str_inDs = "";
        	var str_outDs = "ds_Multi=ds_Multi";
        	var str_arg = "";
        	var str_callback = "fn_Callback";
        	this.transaction(str_svcId, str_url, str_inDs, str_outDs, str_arg, str_callback, 2);
        };

        this.Button05_onclick = function(obj,e)
        {
        	var str_svcId = "ServletVer";
        	var str_url = "jspTestURL::LeftMenuList.jsp";
        	var str_inDs = "";
        	var str_outDs = "ds_Multi2=ds_Multi";
        	var str_arg = "";
        	var str_callback = "fn_Callback";

        	this.transaction(str_svcId, str_url, str_inDs, str_outDs, str_arg, str_callback);
        };


        this.fn_Callback = function(svcId, eCode, eMsg)
        {
        	if(eCode != 0) this.alert(eCode + " : " + eMsg);
        	switch (svcId)
        	{
        		case "SpringVer" :
        			trace(this.ds_Multi.saveXML());
        		break;
        		case "ServletVer" :
        			trace(this.ds_Multi2.saveXML());
        		break;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
        };
        this.loadIncludeScript("LeftMenuTest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
