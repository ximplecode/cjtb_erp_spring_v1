(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("common팝업사용");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","11","15","239","53",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("부서(부서코드, 부서명)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buse_cd","254","15","160","53",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("부서코드");
            obj.set_text("부서코드");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buse_nm","424","15","220","53",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("부서명");
            obj.set_text("부서명");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","11","78","239","53",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("인사(사번, 이름)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sabun","254","78","160","53",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("사번");
            obj.set_text("사번");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","424","78","220","53",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_value("이름");
            obj.set_text("이름");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","11","137","239","53",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("거래처(구분,코드,명,사용명,사업자번호)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cust_gb","254","137","160","53",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("거래처구분");
            obj.set_text("거래처구분");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cust_nm","650","137","160","53",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_value("거래처명");
            obj.set_text("거래처명");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cust_cd","424","137","220","53",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_value("거래처코드");
            obj.set_text("거래처코드");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cust_f_nm","820","137","160","53",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("내부거래처명");
            obj.set_text("내부거래처명");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_saupno","990","137","160","53",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_value("사업자번호");
            obj.set_text("사업자번호");
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
        this.registerScript("common팝업사용.xfdl", function() {
        var arr_rt;

        this.Button00_onclick = function(obj,e)
        {
        	var objNew = new ChildFrame();
        		objNew.init("sBuse",0,0,237,440,null,null,"common::Buse.xfdl");
        		this.addChild("sBuse",objNew);
        		objNew.set_openalign("center middle");
        		objNew.set_showtitlebar(false);
        		objNew.showModal("sBuse",this.getOwnerFrame(),{arr_s:arr_rt},this,this.fn_Callback);
        };

        this.fn_Callback = function(strID, vArgu)
        {
        	if (vArgu == 1)
        	{
        		this.edt_buse_cd.set_value(arr_rt[0]);
        		this.edt_buse_nm.set_value(arr_rt[1]);
        	}

        	this.removeChild("sBuse");
        };

        this.common팝업사용_onload = function(obj,e)
        {
        	arr_rt = new Array();
        };



        this.Button00_00_onclick = function(obj,e)
        {
        	var objNew = new ChildFrame();
        		objNew.init("sInsa",0,0,474,440,null,null,"common::Insa.xfdl");
        		this.addChild("sInsa",objNew);
        		objNew.set_openalign("center middle");
        		objNew.set_showtitlebar(false);
        		objNew.showModal("sInsa",this.getOwnerFrame(),{arr_s:arr_rt},this,this.fn_InsaCallback);
        };

        this.fn_InsaCallback = function(strID, vArgu)
        {
        	if (vArgu == 1)
        	{
        		this.edt_sabun.set_value(arr_rt[0]);
        		this.edt_name.set_value(arr_rt[1]);
        	}

        	this.removeChild("sInsa");
        };

        this.Button00_00_00_onclick = function(obj,e)
        {
        	var objNew = new ChildFrame();
        		objNew.init("sCust",0,0,560,380,null,null,"common::Cust.xfdl");
        		this.addChild("sCust",objNew);
        		objNew.set_openalign("center middle");
        		objNew.set_showtitlebar(false);
        		objNew.showModal("sCust",this.getOwnerFrame(),{arr_s:arr_rt, pCust_gb:"21", pUse_gb:true},this,this.fn_CustCallback);
        };

        this.fn_CustCallback = function(strID, vArgu)
        {
        	if (vArgu == 1)
        	{
        		this.edt_cust_gb.set_value(arr_rt[0]);
        		this.edt_cust_cd.set_value(arr_rt[1]);
        		this.edt_cust_nm.set_value(arr_rt[2]);
        		this.edt_cust_f_nm.set_value(arr_rt[3]);
        		this.edt_saupno.set_value(arr_rt[4]);
        	}

        	this.removeChild("sCust");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.common팝업사용_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.Button00_00_00.addEventHandler("onclick",this.Button00_00_00_onclick,this);
        };
        this.loadIncludeScript("common팝업사용.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
