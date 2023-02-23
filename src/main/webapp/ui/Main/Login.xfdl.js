(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FrameLogin");
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

            obj = new ImageViewer("ImageViewer00","55","55",null,"360","357",null,null,null,null,null,this.div_login.form);
            obj.set_taborder("0");
            obj.set_border("0px none white");
            obj.set_image("url(\'Img::img_login.png\')");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("Static00","345","65","219","55",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("1");
            obj.set_text("LOGIN");
            obj.set_font("normal 40pt/normal \"Arial\"");
            obj.set_background("#4364ed");
            obj.set_color("#ffffff");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("Static01","345","140","335","20",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("2");
            obj.set_text("안녕하세요! 천재교육 ERP 시스템입니다.");
            obj.set_font("normal 700 11pt/normal \"Arial\"");
            this.div_login.addChild(obj.name, obj);

            obj = new Edit("edt_id","345","190","240","50",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("3");
            obj.set_background("url(\'Img::ico_id.png\') no-repeat 5% center /17px 20px");
            obj.set_displaynulltext("ID");
            obj.set_padding("0px 3px 0px 50px");
            obj.set_font("normal 13pt/normal \"Arial\"");
            obj.set_color("#444444");
            obj.set_autoselect("true");
            obj.set_text("goodleewin");
            this.div_login.addChild(obj.name, obj);

            obj = new Edit("edt_password","345","250","240","50",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("4");
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
            obj.set_taborder("5");
            obj.set_text("로그인");
            obj.set_borderRadius("30px");
            obj.set_font("normal 900 15pt/normal \"Arial\"");
            obj.set_cursor("auto");
            obj.set_background("#4364ed");
            this.div_login.addChild(obj.name, obj);

            obj = new CheckBox("id_save_yn","408","306","93","20",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("6");
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
            obj = new Layout("default","Desktop_screen",690,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Login.xfdl","Lib::Lib_service.xjs");
        this.registerScript("Login.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        var objApp = nexacro.getApplication();

        this.Login_onload = function(obj,e)
        {
        	this.fn_Init(obj);
        };

        this.fn_Init = function(obj)
        {
        	this.fn_MoveDiv(obj.width, obj.height);
        	// 각 Frame 화면 연결
        	this.fn_openForm();
        	/*
        	var dt = new Date();
        	var yy = Eco.date.getMaskFormatString(dt, "yyyy");

        	this.stc_copyright.set_text("COPYRIGHT 1981-"+yy+" CHUNJAE EDUCATION INC. ALL RIGHTS RESERVED.");

        	var ID = nexacro.getPrivateProfile("LOGIN_ID"); // 개인화데이터 nexacro.xml 에서 id값을 가져옴
        	if(ID != null && ID != "" ) // nexacro.xml 값이 존재하면 ID저장 기본으로 체크
        	{
        		this.div_login.form.edt_id.set_value(ID);
        		this.div_login.form.id_save_yn.set_value(true);
        	}
        	else	// nexacro.xml 값이 존재하지 않으면 ID저장 체크 해제
        		this.div_login.form.id_save_yn.set_value(false);
        	*/
        }

        this.fn_openForm = function()
        {
            objApp.mainframe.VFrameSet.TopFrame.set_formurl("Main::FrameTop.xfdl");
        	objApp.mainframe.VFrameSet.HFrameSet.LeftFrame.set_formurl("Main::FrameLeft.xfdl");
        	objApp.mainframe.VFrameSet.HFrameSet.VFrameSet.MdiFrame.set_formurl("Main::FrameMDI.xfdl");
        	//objApp.mainframe.VFrameSet.HFrameSet.VFrameSet.WorkFrame.set_formurl("Main::FrameWork.xfdl");
        	this.LeftMenuList();
        };


        this.LeftMenuList = function()
        {
        	var str_svcId = "LEFTMENU";
        	var str_url = "jspTestURL::LeftMenuList.jsp";
        	var str_inDs = "";
        	var str_outDs = ""; //"gds_menu=ds_Multi";
        	var str_arg = "";
        	var str_callback = "fn_Callback";

        	this.transaction(str_svcId, str_url, str_inDs, str_outDs, str_arg, str_callback, 2);

        };

        this.fn_Callback = function(svcId, eCode, eMsg)
        {
        	if(eCode != 0) this.alert(eCode + " : " + eMsg);
        	switch (svcId)
        	{
        		case "LEFTMENU" :
        			trace(nexacro.getApplication().gds_menu.saveXML());
        		break;
        	}
        }


        /************************************************************************************************
         * 5. 사용자 FUNCTION 영역
         ************************************************************************************************/
        // div_Main 중앙으로 위치이동
        this.fn_MoveDiv = function(width, height)
        {
         	var left = (width - this.div_login.getOffsetWidth()) / 2;
        	var top = this.div_login.getOffsetTop();

         	this.div_login.move(left, top);
        	this.resetScroll();

         	this.div_login.set_visible(true);
        };

        this.Static01_onclick = function(obj,e)
        {
        	//nexacro.getApplication().exit();
        	this.close(-1);
        };

        this.Callback_login = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}

        	if (nexacro.getApplication().gds_userinfo.rowcount == 0)
        	{
        		this.alert("ID 또는 PASSWORD가 정확하지 않습니다.");
        		return false;
        	}
        	else // 로그인 성공
        	{
        		/*
        		  개인화 데이터(nexacro.xml)에 ID값 저장
        		  "nexacro.xml" 파일은 사용자별로 정보를 관리하기 위해 사용하는 XML 형식의 파일입니다.
        		  Windows Vista 이상의 경우 "C:\Users\[사용자 계정]\AppData\LocalLow\nexacro\17" 위치에 파일이 생성됩니다.
        		  Windows Vista 미만의 경우 "C:\Documents and Settings\[사용자 계정]\Local Settings\Application Data\nexacro\17" 위치에 파일이 생성됩니다.
        		*/
        		if ( this.div_login.form.id_save_yn.value == true)
        			nexacro.setPrivateProfile("LOGIN_ID", this.div_login.form.edt_id.value);
        		else
        			nexacro.setPrivateProfile("LOGIN_ID", "");
        		if (system.navigatorname != 'nexacro')
        		{
        			MyHistory.setLocationHash("login", "login"); // 해쉬값에 로그인 설정 ( 뒤로가기 앞으로가기 기록 남기기 위함 )
        		}
        		this.close(1);
        	}
        }

        this.mainStart = function()
        {
        	this.close(1);
        }

        this.div_login_edt_password_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.div_login_btn_login_onclick(null,null);
        	}
        };

        this.div_login_btn_login_onclick = function(obj,e)
        {
        	this.close(1);
        	this.fn_ExecMain();

        //	var str_url = "JSP/main/getData_login.jsp";
        //	var in_ds = "gds_userinfo=gds_userinfo gds_menu=gds_menu";
        //	var out_ds = "gds_userinfo=gds_userinfo gds_menu=gds_menu";
        //	var str_arg = "login_id='" + this.div_login.form.edt_id.value + "' login_pass='" + this.div_login.form.edt_password.value +"'";

        // this.alert(nexacro.getApplication().gfn_getUrl("svcUrl")+str_url);

        //	this.gfn_TransactionP("Login", str_url, in_ds, out_ds, str_arg, "Callback_login", true, "P", false, this);

        	/*this.transaction( "select"
        					   , str_url
        					   , in_ds                      	// inDataSet
        					   , out_ds                     	// outDataSet
        					   , str_arg
        					   , "Callback_login"   				 	// strCallbackFunc
        					   , true                     	// bAsync
        					   , 0                      		// nDataType : 0(XML 타입), 2(SSV 타입) --> HTML5에서는 1(Binary 타입)은 지원안함
        					   , false);*/
        };

        this.div_login_Static00_onclick = function(obj,e)
        {
        	// this.close(1);
        };

        this.div_login_Static01_onclick = function(obj,e)
        {
        	this.close(1);
        };

        this.fn_ExecMain = function()
        {
        	// 각 Frame 실행
        	objApp.mainframe.VFrameSet.set_separatesize("120,*,*");
        	objApp.mainframe.VFrameSet.TopFrame.form.fn_SetInfo();
        	objApp.gv_LeftFrame.form.fn_SetInfo();
        	objApp.gv_MdiFrame.form.fn_SetInfo();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Login_onload,this);
            this.div_login.form.ImageViewer00.addEventHandler("onclick",this.div_login_ImageViewer00_onclick,this);
            this.div_login.form.Static00.addEventHandler("onclick",this.div_login_Static00_onclick,this);
            this.div_login.form.Static01.addEventHandler("onclick",this.div_login_Static01_onclick,this);
            this.div_login.form.edt_password.addEventHandler("onkeydown",this.div_login_edt_password_onkeydown,this);
            this.div_login.form.btn_login.addEventHandler("onclick",this.div_login_btn_login_onclick,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
        };
        this.loadIncludeScript("Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
