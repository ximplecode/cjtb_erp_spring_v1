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
            mainframe.set_titletext("??????????????? ????????????");
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
            var obj = new ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj.set_border("0px none");
			
            this.addChild(obj.name, obj);
            obj.set_formurl(nexacro._quickview_formurl);
            this.frame = obj;
            
            obj = null;
        };
        
        this.on_initEvent = function()
        {
        };
		// script Compiler
        this.registerScript("Application_Desktop.xadl", function() {
        /**
         * ????????????????????? ????????? ??????
         * @FileName    chtxt.xadl
         * @Creator     UI??????
         * @CreateDate  2023.02.06
         * @Desction    Application
         ************** ?????? ?????? ?????? ***********************************************
         * date                Modifier                Description
         *******************************************************************************
         * 2023.02.06          UI??????                 ?????? ??????
         *******************************************************************************
         */

        this.gfn_getUrl = function(svc)
        {
        	/*
        	 *	???????????? ????????? URL ?????? ??????
        	 */

        	var rt_value = nexacro.getEnvironment().services[svc].url;

        	return rt_value;
        }

        /************************************************************************************************
         * Application ?????? ?????? ??????
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
        this._gv_LoadForm = new Array(); // Load??? Frame??? ??????
        this.objExtCommon = {};

        /************************************************************************************************
         * Application EVENT ??????(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @class onload ??? ????????????
         */
        this.Application_onload = function(obj,e)
        {
        	// 1. Frame ?????? ??????
        	this.gv_VFrameSet	 = obj.mainframe.VFrameSet;
        	this.gv_LoginFrame	 = obj.mainframe.VFrameSet.LoginFrame;
        	this.gv_TopFrame     = obj.mainframe.VFrameSet.TopFrame;
        	this.gv_HFrameSet    = obj.mainframe.VFrameSet.HFrameSet;
        	this.gv_LeftFrame    = obj.mainframe.VFrameSet.HFrameSet.LeftFrame;
        	this.gv_VFrameSet1   = obj.mainframe.VFrameSet.HFrameSet.VFrameSet;
        	this.gv_MdiFrame     = obj.mainframe.VFrameSet.HFrameSet.VFrameSet.MdiFrame;
        	this.gv_WorkFrame    = obj.mainframe.VFrameSet.HFrameSet.VFrameSet.WorkFrame;
        	this.gv_BottomFrame	 = obj.mainframe.VFrameSet.HFrameSet.VFrameSet.BottomFrame;

        	// 2. ??? ?????? (??? ????????????)
        	if (system.navigatorname != "nexacro") {
        		obj.mainframe.set_showtitlebar(false);
        	} else { // Runtime ?????? (?????? ????????????)
        		obj.mainframe.set_showtitlebar(true);
        		var height = obj.mainframe.height;
        		var titlebarheight = parseInt(obj.mainframe.titlebarheight);
        		obj.mainframe.set_height(height + titlebarheight); // titlebar ???????????? ??????
        	}

        	// 5. ????????? ?????? ??????
        	this.gv_VFrameSet.set_separatesize("*,0,0");
        	this.gv_LoginFrame.set_formurl("Main::Login.xfdl");
        };

        /**
         * @class onerror ??? ????????????
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
         * @class Application onbeforeexit ??? ????????????
         */
        this.Application_onbeforeexit = function(obj,e)
        {
        	if (obj.gv_Exitflag == "Y") {
        		return;
        	} else {
        		// ??? html5 ?????? ???????????? logout ????????? ?????? ??????
        		return "??????????????? ???????????? ???????????? ?????????????????????????";
        	}
        };

        /**
         * @class mainframe onsize ??? ????????????
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
    };
}
)();
