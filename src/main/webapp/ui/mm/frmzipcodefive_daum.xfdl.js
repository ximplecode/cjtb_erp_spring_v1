(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmzipcodefive_daum");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(640,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","565","65","55","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","20","190","600","550",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","68","10","272","65",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("우편코드 검색");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","100","600","80",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_border("1px solid #bfcddb");
            obj.set_color("#006400");
            obj.set_text("<주의사항>\r\n- 도로명 주소검색시 최대한 자세하게 입력하셔야 합니다.\r\n  잘못된 예) 서부로 \r\n  잘된예) 서부로1058번길");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",640,750,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmzipcodefive_daum.xfdl", function() {

        this.frmzipcodefive_daum_onload = function(obj,e)
        {
        	this.WebBrowser00.set_url("https://cj-erp.chunjae.co.kr/erp-next/jsp/mm/zipcodefive_daum.html");
        	this.WebBrowser00.show();
        	this.parentForm = this.opener;

        };

        this.WebBrowser00_onusernotify = function(obj,e)
        {
        	var p_objnumber = this.parent.p_objnum;

        	if(	(e.userdata != "about:blank") &&
        		(e.userdata != "https://cj-erp.chunjae.co.kr/erp-next/jsp/mm/zipcodefive_daum.html") &&
        		(e.userdata != "500 Internal Server Error") &&
        		(e.userdata != "다음 주소록 API") )
        	{
        		var strArgZipcd = e.userdata.substr(0,5);
        		var strArgAddr = e.userdata.substr(5, e.userdata.length);

        		if (p_objnumber == "btn_zip_cerAddr") //주소 등본
        		{
        			this.parentForm.edt_cerAddr.set_value(strArgAddr);
        			this.parentForm.MaskEdit_cerAddr.set_value(strArgZipcd);
        		}
        		else//주소 실거주
        		{
        			this.parentForm.edt_realAddr.set_value(strArgAddr);
        			this.parentForm.MaskEdit_realAddr.set_value(strArgZipcd);
        		}

        		this.close();
        	}

        };

        this.Button00_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmzipcodefive_daum_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.WebBrowser00.addEventHandler("onusernotify",this.WebBrowser00_onusernotify,this);
        };
        this.loadIncludeScript("frmzipcodefive_daum.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
