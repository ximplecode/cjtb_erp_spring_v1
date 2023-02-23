(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TGW200");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Search", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_FNUM\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gwList", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"F_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"F_FNUM\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"F_PRIOR\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"F_DURING\" type=\"STRING\" size=\"256\"/><Column id=\"F_IDNO\" type=\"STRING\" size=\"256\"/><Column id=\"AP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_1",null,"70","170","25","1080",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("1. 일반공용양식");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_2",null,"70","170","25","900",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("2. 인사관련양식");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_gw","30","105","716","370",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"문서명\"/><Cell col=\"1\" text=\"보존연한\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"회사문서함\"/><Cell col=\"4\" text=\"결재선\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("TGW200.xfdl", function() {

        this.Div00_btn_close_onclick = function(obj,e)
        {

        	this.ds_Search.setColumn(0, "GUBUN" , "01");
        	this.ds_Search.setColumn(0, "F_FNUM", "1");
        	this.ds_Search.setColumn(0, "SABUN", "T23050");
        	trace(this.ds_Search.saveXML());

        	//AS-IS ("select", "Svcjsp_gw::TSQL_GW170_01S.jsp", "", "DS_FLIST=DS_FLIST", str_arg, "Empty_visi");
        	var option = {
        		  svcId    	: "TSQL_GW170_01S"
        		, svcUrl   	: "testURL::TSQLGW17001S"
        		, argument 	: ""
        		, inDs	 	: "ds_Search=ds_Search"
        		, outDs    	: "ds_gwList=ds_Multi"
        		, callback 	: "fn_Callback"
        		, async    	: true
        	};

        	this.gfn_Transaction(this, option);
        };

        this.fn_Callback = function(svcId, eCode, eMsg)
        {
        	if(eCode != 0) this.alert(eCode + " : " + eMsg);

        	switch (svcId)
        	{
        		case "TSQL_GW170_01S" :
        		 trace(this.ds_gwList.saveXML());
        		break;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_1.addEventHandler("onclick",this.Div00_btn_close_onclick,this);
            this.btn_2.addEventHandler("onclick",this.Div00_btn_close_onclick,this);
        };
        this.loadIncludeScript("TGW200.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
