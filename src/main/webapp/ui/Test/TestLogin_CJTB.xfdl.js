(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Login");
            this.set_border("0px none");
            this.set_background("#f3f4f5");
            this.set_opacity("1");
            this.set_font("normal 9pt/normal \"Arial\"");
            this.set_borderRadius("15px");
            this.set_cursor("pointer");
            if (Form == this.constructor)
            {
                this._setFormPosition(690,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_login","0","0",null,"480","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_borderRadius("15px");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","345","65","219","55",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("0");
            obj.set_text("LOGIN");
            obj.set_font("normal 40pt/normal \"Arial\"");
            obj.set_color("blue");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("Static01","345","140","335","20",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("1");
            obj.set_text("안녕하세요! 천재교과서 ERP 시스템입니다.");
            obj.set_font("normal 700 11pt/normal \"Arial\"");
            this.div_login.addChild(obj.name, obj);

            obj = new Edit("edt_id","345","190","240","50",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("2");
            obj.set_background("url(\'Img::ico_id.png\') no-repeat 5% center /17px 20px");
            obj.set_displaynulltext("ID");
            obj.set_padding("0px 3px 0px 50px");
            obj.set_font("normal 13pt/normal \"Arial\"");
            obj.set_color("#444444");
            obj.set_autoselect("true");
            obj.set_text("goodleewin");
            this.div_login.addChild(obj.name, obj);

            obj = new Edit("edt_password","345","250","240","50",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("3");
            obj.set_background("url(\'Img::ico_pw.png\') no-repeat 5% center /17px 20px");
            obj.set_font("normal 13pt/normal \"Arial\"");
            obj.set_padding("0px 3px 0px 50px");
            obj.set_displaynulltext("PASSWORD");
            obj.set_color("#444444");
            obj.set_autoselect("true");
            obj.set_password("true");
            obj.set_text("@dusqhd1djr");
            this.div_login.addChild(obj.name, obj);

            obj = new Button("btn_login","345","331","240","60",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("4");
            obj.set_text("로그인");
            obj.set_borderRadius("30px");
            obj.set_font("normal 900 15pt/normal \"Arial\"");
            obj.set_cursor("auto");
            obj.set_background("white");
            obj.set_color("blue");
            this.div_login.addChild(obj.name, obj);

            obj = new CheckBox("id_save_yn","408","306","93","20",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("5");
            obj.set_text("ID 저장하기");
            obj.set_font("normal 10pt/normal \"Arial\"");
            this.div_login.addChild(obj.name, obj);

            obj = new Div("Div00","0","490",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_borderRadius("15px");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","28","20","41","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_image("url(\'Img::ico_info.png\')");
            obj.set_border("0px none white");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","100","15",null,"20","100",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("천재교육 ERP 시스템은 천재교육 그룹웨어 아이디와 비밀번호로 이용가능 하며");
            obj.set_color("#c8c6c6");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","100","45",null,"20","162",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("비밀번호 입력시 Caps lock이 켜져있는지 반드시 확인하시기 바랍니다.");
            obj.set_font("normal 9pt/normal \"Arial\"");
            obj.set_color("#ff988a");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_copyright","0","577",null,"17","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("COPYRIGHT 1981-2020 CHUNJAE EDUCATION INC. ALL RIGHTS RESERVED.");
            obj.set_background("transparent");
            obj.set_color("#54544c");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","643","577",null,"17","6",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Close");
            obj.set_font("normal 9pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",690,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("TestLogin_CJTB.xfdl","Lib::Lib_service.xjs");
        this.registerScript("TestLogin_CJTB.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;

        this.div_login_btn_login_onclick = function(obj,e)
        {
         	var str_url = "testURL::login_test";
        	var in_ds = "gds_logintest=gds_logintest";
        	var out_ds = "gds_logintest=gds_logintest";
        	var str_arg = "login_id='" + this.div_login.form.edt_id.value + "' login_pass='" + this.div_login.form.edt_password.value +"'";

        	this.transaction( "select"
        					, str_url
        					, in_ds                      	// inDataSet
        					, out_ds                     	// outDataSet
        					, str_arg						// strArgument
        					, "test_callback"   			// strCallbackFunc
        					, true                     	    // bAsync
        					, 0                      		// nDataType : 0(XML 타입), 2(SSV 타입) --> HTML5에서는 1(Binary 타입)은 지원안함
        					, false);
        };

        this.test_callback = function(svcId, eCode, eMsg)
        {
        	if(eCode != 0) {
        		this.alert(eCode+" : "+eMsg);
        		return false;
        	}

        	this.alert(nexacro.getApplication().gds_logintest.getColumn(0,"SBUSENAME"));

        	if (nexacro.getApplication().gds_logintest.rowcount == 0)
        	{
        		this.alert("ID 또는 PASSWORD가 정확하지 않습니다.");
        		return false;
        	}
        	else // 로그인 성공
        	{
        		if (system.navigatorname != 'nexacro')
        		{
        			MyHistory.setLocationHash("login", "login"); // 해쉬값에 로그인 설정 ( 뒤로가기 앞으로가기 기록 남기기 위함 )
        		}
        		this.go("Test::TestForm_CJTB.xfdl");
        	}
        }

        this.Login_onload = function(obj,e)
        {
        	if(this.confirm("로그인?") == false)
        	{
        		nexacro.getApplication().exit();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Login_onload,this);
            this.div_login.form.edt_password.addEventHandler("onkeydown",this.div_login_edt_password_onkeydown,this);
            this.div_login.form.btn_login.addEventHandler("onclick",this.div_login_btn_login_onclick,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
        };
        this.loadIncludeScript("TestLogin_CJTB.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
