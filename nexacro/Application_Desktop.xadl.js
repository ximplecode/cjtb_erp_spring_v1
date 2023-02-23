(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
			// global dataobject
		
            // global dataset
            obj = new Dataset("gds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MN_GB\" type=\"STRING\" size=\"256\"/><Column id=\"MN_PUBLIC\" type=\"STRING\" size=\"256\"/><Column id=\"MLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"UM_PER_USE\" type=\"STRING\" size=\"256\"/><Column id=\"UM_PER_SELECT\" type=\"STRING\" size=\"256\"/><Column id=\"UM_PER_DML\" type=\"STRING\" size=\"256\"/><Column id=\"UM_PER_DELETE\" type=\"STRING\" size=\"256\"/><Column id=\"UM_PER_PRINT\" type=\"STRING\" size=\"256\"/><Column id=\"UM_PER_DML_DELETE\" type=\"STRING\" size=\"256\"/><Column id=\"MN_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMARK_GB\" type=\"STRING\" size=\"256\"/><Column id=\"MN_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"PREFIX\" type=\"STRING\" size=\"256\"/><Column id=\"UPCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_userinfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSENM\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWICD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWINM\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"PART_DIRECTOR\" type=\"STRING\" size=\"256\"/><Column id=\"GENERAL_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTH_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_logintest", this);
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_PW\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMPETENCE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSENAME\" type=\"STRING\" size=\"256\"/><Column id=\"SBUSENAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UI_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BU_ACTNCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_CHIEF\" type=\"STRING\" size=\"256\"/><Column id=\"KS_CPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"KS_IPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWICD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"KS_PHOTO\" type=\"STRING\" size=\"256\"/><Column id=\"KS_SIGN\" type=\"STRING\" size=\"256\"/><Column id=\"JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"GENERAL_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"PART_DIRECTOR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IPSADT\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR1\" type=\"STRING\" size=\"256\"/><Column id=\"MR_GB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("g_UseForm","");
            this._addVariable("gv_selectMenu","");
            this._addVariable("gv_WorkFrame","");
            this._addVariable("gv_selectMenu_old","");
            this._addVariable("gv_Client","");
            this._addVariable("gv_rt_value","");
            this._addVariable("gv_rt_i_flow_id","");
            this._addVariable("gv_rt_result","");
            this._addVariable("gv_urlHwp","https://webkian.chunjae.co.kr:8443");
            this._addVariable("gv_urlMrd","https://cj-erp.chunjae.co.kr/erp-next/rpt");
            this._addVariable("gv_urlNext","https://cj-erp.chunjae.co.kr/erp-next");
            this._addVariable("gv_rt_mst_id","");
            this._addVariable("gv_rt_mst_no","");
            this._addVariable("gv_urlMrdHtml","https://cj-erp.chunjae.co.kr/erp-next/html/html/ie8/sample.html");
            this._addVariable("gv_urlMrdService","https://cj-erp.chunjae.co.kr:9294/service");
            this._addVariable("gv_urlXeni","https://cj-erp.chunjae.co.kr/XExportImport");
            this._addVariable("gv_urlRdDataServer","https://cj-erp.chunjae.co.kr:9293/rdagent.jsp");
            this._addVariable("gv_TopFrame","");
            this._addVariable("gv_LeftFrame","");
            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen");
            this.set_licenseurl("../nexacro17_client_license.xml");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1500","720",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_titletext("천재교과서 통합관리");
            mainframe.set_openstatus("maximize");
            mainframe.set_showtitleicon("true");
            mainframe.set_border("1px solid #000000");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("VFrameSet",null,null,null,null,null,null,this);
            frame0.set_separatesize("0,38,*");
            frame0.set_showcascadetitletext("false");
            frame0.set_showtitlebar("false");
            frame0.set_showtitleicon("false");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("LoginFrame",null,null,null,null,null,null,"Main::Login.xfdl",frame0);
            frame1.set_showtitlebar("false");
            frame1.set_showtitleicon("false");
            frame1.set_dragmovetype("none");
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("Main::Login.xfdl");


            var frame2 = new ChildFrame("TopFrame",null,null,null,null,null,null,"",frame0);
            frame2.set_showtitlebar("false");
            frame2.set_showtitleicon("false");
            frame2.set_dragmovetype("none");
            frame0.addChild(frame2.name, frame2);

            var frame3 = new HFrameSet("HFrameSet",null,null,null,null,null,null,frame0);
            frame3.set_separatesize("0,*");
            frame3.set_showcascadetitletext("false");
            frame3.set_showtitlebar("false");
            frame3.set_showtitleicon("false");
            frame0.addChild(frame3.name, frame3);

            var frame4 = new ChildFrame("LeftFrame",null,null,null,null,null,null,"",frame3);
            frame4.set_showtitlebar("false");
            frame4.set_showtitleicon("false");
            frame4.set_dragmovetype("none");
            frame3.addChild(frame4.name, frame4);

            var frame5 = new VFrameSet("VFrameSet",null,null,null,null,null,null,frame3);
            frame5.set_separatesize("26,*,18");
            frame5.set_showcascadetitletext("false");
            frame5.set_showtitlebar("false");
            frame5.set_showtitleicon("false");
            frame3.addChild(frame5.name, frame5);

            var frame6 = new ChildFrame("MdiFrame",null,null,null,null,null,null,"",frame5);
            frame6.set_showtitlebar("false");
            frame6.set_showtitleicon("false");
            frame6.set_dragmovetype("none");
            frame6.set_showcascadetitletext("true");
            frame5.addChild(frame6.name, frame6);

            var frame7 = new FrameSet("WorkFrame",null,null,null,null,"20",null,frame5);
            frame7.set_restorechildpositiontype("keepmaximizeposition");
            frame7.set_showcascadetitletext("true");
            frame7.set_showtitlebar("false");
            frame7.set_showtitleicon("false");
            frame7.set_background("url(\'theme://images/main_bg.jpg\') no-repeat center center");
            frame5.addChild(frame7.name, frame7);

            var frame8 = new ChildFrame("BottomFrame",null,null,null,null,null,null,"",frame5);
            frame8.set_showtitlebar("false");
            frame8.set_showtitleicon("false");
            frame8.set_dragmovetype("none");
            frame5.addChild(frame8.name, frame8);
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Application_onload,this);
            this.addEventHandler("onerror",this.Application_onerror,this);
            this.addEventHandler("onbeforeexit",this.Application_onbeforeexit,this);
            this.mainframe.VFrameSet.addEventHandler("onsyscommand",this.mainframe_VFrameSet_onsyscommand,this);
        };
        
        // script Compiler
        this.registerScript("Application_Desktop.xadl", function() {
        /**
         * 통합정보시스템 고도화 구축
         * @FileName    chtxt.xadl
         * @Creator     UI공통
         * @CreateDate  2023.02.06
         * @Desction    Application
         ************** 소스 수정 이력 ***********************************************
         * date                Modifier                Description
         *******************************************************************************
         * 2023.02.06          UI공통                 최초 생성
         *******************************************************************************
         */

        this.gfn_getUrl = function(svc)
        {
        	/*
        	 *	서비스에 등록한 URL 주소 리턴
        	 */

        	var rt_value = nexacro.getEnvironment().services[svc].url;

        	return rt_value;
        }

        /************************************************************************************************
         * Application 변수 선언 영역
         ************************************************************************************************/
        this.gv_VFrameSet   = null;
        this.gv_LoginFrame  = null;
        this.gv_TopFrame    = null;
        this.gv_HFrameSet   = null;
        this.gv_LeftFrame   = null;
        this.gv_VFrameSet1  = null;
        this.gv_MdiFrame    = null;
        this.gv_WorkFrame   = null;
        this.gv_BottomFrame = null;
        this._gv_LoadForm = new Array(); // Load된 Frame명 배열
        this.objExtCommon = {};

        /************************************************************************************************
         * Application EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @class onload 시 처리내역
         */
        this.Application_onload = function(obj,e)
        {
        	// 1. Frame 변수 저장
        	this.gv_VFrameSet	 = obj.mainframe.VFrameSet;
        	this.gv_LoginFrame	 = obj.mainframe.VFrameSet.LoginFrame;
        	this.gv_TopFrame     = obj.mainframe.VFrameSet.TopFrame;
        	this.gv_HFrameSet    = obj.mainframe.VFrameSet.HFrameSet;
        	this.gv_LeftFrame    = obj.mainframe.VFrameSet.HFrameSet.LeftFrame;
        	this.gv_VFrameSet1   = obj.mainframe.VFrameSet.HFrameSet.VFrameSet;
        	this.gv_MdiFrame     = obj.mainframe.VFrameSet.HFrameSet.VFrameSet.MdiFrame;
        	this.gv_WorkFrame    = obj.mainframe.VFrameSet.HFrameSet.VFrameSet.WorkFrame;
        	this.gv_BottomFrame	 = obj.mainframe.VFrameSet.HFrameSet.VFrameSet.BottomFrame;

        	// 2. 웹 접속 (웹 브라우저)
        	if (system.navigatorname != "nexacro") {
        		obj.mainframe.set_showtitlebar(false);
        	} else { // Runtime 접속 (전용 브라우저)
        		obj.mainframe.set_showtitlebar(true);
        		var height = obj.mainframe.height;
        		var titlebarheight = parseInt(obj.mainframe.titlebarheight);
        		obj.mainframe.set_height(height + titlebarheight); // titlebar 높이만큼 추가
        	}

        	// 5. 로그인 화면 연결
        	this.gv_VFrameSet.set_separatesize("*,0,0");
        	this.gv_LoginFrame.set_formurl("Main::Login.xfdl");
        };

        /**
         * @class onerror 시 처리내역
         */
        this.Application_onerror = function(obj,e)
        {
        	var msg = "\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Application_onerror!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
        			+ "\ne.statuscode : " + e.statuscode
        			+ "\ne.errormsg : " + e.errormsg
        			+ "\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
        	trace(msg);
        };

        /**
         * @class Application onbeforeexit 시 처리내역
         */
        this.Application_onbeforeexit = function(obj,e)
        {
        	if (obj.gv_Exitflag == "Y") {
        		return;
        	} else {
        		// ※ html5 제약 사항으로 logout 서비스 실행 불가
        		return "천재교과서 통합관리 시스템을 종료하시겠습니까?";
        	}
        };

        /**
         * @class mainframe onsize 시 처리내역
         */
        this.mainframe_onsize = function(obj,e)
        {

        };


        this.mainframe_VFrameSet_onsyscommand = function(obj,e)
        {

        };


        });
        this.checkLicense("../nexacro17_client_license.xml");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::erpCss.xcss");
        this.loadCss("xcssrc::etcCss.xcss");
        this.loadCss("xcssrc::mkCss.xcss");
        this.loadCss("xcssrc::gwCss.xcss");
        this.loadCss("xcssrc::sdCss.xcss");
        this.loadCss("xcssrc::pdCss.xcss");
        this.loadCss("xcssrc::hrCss.xcss");
        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
