(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PD201_printF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,120);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGB", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">전체</Col><Col id=\"CODE\"/></Row><Row><Col id=\"NAME\">사용중</Col><Col id=\"CODE\">01</Col></Row><Row><Col id=\"NAME\">미사용</Col><Col id=\"CODE\">02</Col></Row><Row><Col id=\"NAME\">분실</Col><Col id=\"CODE\">03</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCardYM", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">전체</Col><Col id=\"CODE\"/></Row><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">유효</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">만료</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close",null,"10","45","22","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_font("8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","9","55","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("구       분");
            obj.set_textAlign("center");
            obj.set_background("#c3e4cd");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_color("#01656f");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_gb","99","55","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px groove #c3e4cd");
            obj.set_innerdataset("dsGB");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_cardym","99","83","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("1px groove #c3e4cd");
            obj.set_innerdataset("dsCardYM");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","9","83","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("유효기간");
            obj.set_textAlign("center");
            obj.set_background("#c3e4cd");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_color("#01656f");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"63","65","37","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("출력하기");
            obj.set_font("8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static_SP2","9","52","250","2",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#368b65");
            this.addChild(obj.name, obj);

            obj = new Static("Static_SP2_00","9","80","250","2",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("#368b65");
            this.addChild(obj.name, obj);

            obj = new Static("Static_SP2_00_00","9","108","250","2",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("#368b65");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","5","280","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("업무추진비 예산 확인");
            obj.set_color("#7fb39d");
            obj.set_font("bold 24px/normal \"함초롬바탕 확장B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",350,120,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PD201_printF.xfdl", function() {
        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btn_print_onclick = function(obj,e)
        {
        	var rdUrl = "";
        	var rdParam = "";
        	rdUrl = gv_urlMrd + "/pd/PD201.mrd";

        	rdParam = "/rp [" + nexacro.trim(this.cbo_gb.value) + "][" + nexacro.trim(this.cbo_cardym.value) + "]";

        	var objParam = {rdUrl:rdUrl, rdParam:rdParam};
        	var sOpenStyle = "topmost=true autosize=false dragmovetype=all titletext=조회화면 showtitlebar=true showstatusbar=false";

        	var rect;
        	if(system.navigatorname = 'nexacro')
        	{
        		if(system.monitorcount > 1)
        		{
        			var monitor_index = system.getMonitorIndex(system.clientToScreenX(this,0), system.clientToScreenY(this,0));
        			rect = system.getScreenRect(monitor_index);
        		}
        		else
        			rect = system.getScreenRect(1);
        	}
        	else
        		rect = system.getScreenRect(1);

        	var sOpenStyle = "topmost=true autosize=false dragmovetype=all titletext=조회화면 showtitlebar=true showstatusbar=false resizable=true";

        	nexacro.open("print_mrd", "mk::MKRDF.xfdl", this.getOwnerFrame(), objParam, sOpenStyle, rect.left, rect.top, rect.width, rect.height, this);
        };

        this.PD201_printF_onload = function(obj,e)
        {
        	this.cbo_cardym.set_index(0);
        	this.cbo_gb.set_index(0);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PD201_printF_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);
        };
        this.loadIncludeScript("PD201_printF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
