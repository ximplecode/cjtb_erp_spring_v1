(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FrameWork");
            this.set_titletext("");
            this.set_scrollbartype("default default");
            this.set_scrolltype("both");
            this.set_accessibilityrole("form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,822);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_Title","10","8",null,"20","924",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_title");
            obj.set_text("업무명");
            this.addChild(obj.name, obj);

            obj = new Div("div_Work","10","32",null,null,"0","0",null,null,"790",null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_accessibilityrole("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta_Navi","1300","-2","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("메뉴1 > 메뉴2 > 메뉴3 > 메뉴4 >");
            obj.set_cssclass("sta_WF_location");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_CommBtn",null,"8","478","20","18",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_Title","10","833",null,"22","924",null,null,null,null,null,this);
            obj.set_text("pdv_00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Title","0","0",null,"20","0",null,null,null,null,null,this.pdv_Title.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            this.pdv_Title.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,822,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FrameWork.xfdl", function() {
        /**
         * 통합정보시스템 고도화 구축
         * @FileName    FrameWork.xfdl
         * @Creator     UI공통
         * @CreateDate  2023.02.08
         * @Description 업무공통 Frame
         ************** 소스 수정 이력 ***********************************************
         * date                Modifier                Description
         *******************************************************************************
         * 2003.02.08          UI공통                  최초 생성
         *******************************************************************************
         */

        /************************************************************************************************
         * 1. FORM 변수 선언 영역
        ************************************************************************************************/
        var objApp = nexacro.getApplication();
        this.fv_WinId 			= "";
        this.fv_Prefix 			= "";
        this.fv_MenuId 			= "";
        this.fv_MenuNm			= "";
        this.fv_BtnAuth 		= ""; // 버튼권한
        this.fv_CategoryId 		= "";
        this.fv_PreCategoryId 	= "";
        this.fv_OrgRow 			= -1;
        this.fv_BaseWidth 		= 1278;
        this.fv_PThis			= "";
        this.fv_Navi			= "";
        this.fv_FormId			= "";
        this.fv_FormUrl			= "";
        this.fv_Arg				= "";


        /************************************************************************************************
         * 2. FORM EVENT 영역(onload)
         ************************************************************************************************/
        /**
         * @description onload 이벤트
         */

        this.form_onload = function(obj,e)
        {
        	this.fn_Init(obj);
        };

        /**
         * @class  화면 초기화 정의 <br>
         * @param  {Object} obj - nexacro.Form
         * @return N/A
         */
        this.fn_Init = function(obj)
        {
        	var argument 			= obj.getOwnerFrame().arguments;
        	this.fv_MenuNm  		= argument["menuNm"];
        	this.fv_WinId   		= argument["winId"];
        	this.fv_MenuId  		= argument["menuId"];
        	this.fv_CategoryId 		= argument["categoryId"];
        	this.fv_PreCategoryId 	= argument["preCategoryId"];
        	this.fv_BtnAuth 		= argument["btnAuth"];
        	this.fv_OrgRow			= argument["orgRow"];
        	this.fv_Prefix  		= argument["prefix"];
        	this.fv_Navi    		= argument["navi"];
        	this.fv_FormId  		= argument["formId"];
        	this.fv_FormUrl 		= argument["formUrl"];
        	this.fv_Arg     		= argument["arg"];
        	var arg     		    = argument["arg"]; // 화면 전달값

        	nexacro.getApplication().gv_WinId = this.fv_WinId;

        	// title
        	if(this.fv_WinId != ""){
        		this.sta_Title.set_visible(true);
        		var txt = this.gfn_ChangeMessage("{0} [ {1} ]", this.fv_MenuNm, this.fv_FormId);
        		if( nexacro.getApplication().gv_ServerType != "PROD") {
        			var strTitle = nexacro.getApplication().gv_ServerType == "DEV" ? "개발계":"로컬";
        			txt += " [ " + strTitle + " ]";
        			this.sta_Title.set_cssclass("sta_WF_title,scr_color_red");
        		}

        		this.sta_Title.set_text(txt);
        		this.sta_Title.set_tooltiptext(this.fv_Navi);
        		this.sta_Title.set_fittocontents("width");
        		this.sta_Title.set_width(this.sta_Title.getOffsetWidth() + 2);
        		this.sta_Title.set_fittocontents("none");

        		this.pdv_Title.set_width(nexacro.toNumber(this.sta_Title.width) + 4);
        	}else{
        		this.sta_Title.set_visible(false);
        	}

        	// 업무화면 호출
        	this.div_Work.set_url(this.fv_FormUrl);

        	this.resetScroll();

        	// 메뉴 위치 찾기
        	this.fn_SetMenuPosition();
        };

        this.fn_SetInfo = function()
        {
        	this.alert(1);
        };

        this.form_onclose = function(obj,e)
        {
        	var objApp = this.gfn_GetApp();
        	objApp.gv_ActiveWin = "";
        	objApp.gv_FormPrefix = "";
        };

        this.form_onsize = function(obj,e)
        {
        	// 추가 (2019.08.08)
        	if (e.cx > this.fv_BaseWidth) {
        		//this.div_CommBtn.set_right(null);
        		this.div_CommBtn.set_right(this.width - this.fv_BaseWidth + 18);
        	} else {
        		this.div_CommBtn.set_left(null);
        		this.div_CommBtn.set_right(10);
        	}
        };

        this.child_onsyscommand = function(obj,e)
        {
        	if (e.systemcommand == "maximize") {
        		var objApp = this.gfn_GetApp();
        		var len = objApp.gv_WorkFrame.frames.length;
        		for (var i = 0; i < len; i++) {
        			var objFrame = objApp.gv_WorkFrame.frames[i];
        			objFrame.set_showtitlebar(false);
        			objFrame.set_border("0px none");
        		}
        	}
        };

        /************************************************************************************************
         * FUNCTION 영역
         ************************************************************************************************/
        /**
         * @class  Navi 위치 이동 <br>
         * @param  N/A
         * @return N/A
         */
        this.fn_MoveEtc = function()
        {
        	var top1 = this.sta_Navi.getOffsetTop();
        	var top2 = this.div_CommBtn.getOffsetTop();
        	var width = this.div_Work.getOffsetRight();

         	var left1 = width - this.sta_Navi.getOffsetWidth() - 10;
         	this.sta_Navi.move(left1, top1);

        	var left2 = width - this.div_CommBtn.getOffsetWidth() - 10;
        	this.div_CommBtn.move(left2, top2);
        };

        // 메뉴 위치 찾기
        this.fn_SetMenuPosition = function()
        {
        	// fn_SetInfo : 좌측 메뉴 데이터셋 새로 만들기
        	// fn_SetRow  : 좌측 메뉴 위치 찾기
        	var topMenu =  	objApp.gv_TopFrame.form.fn_GetTopMenuName(this.fv_CategoryId);

        	// 일반적인 경우
        	if( objApp.gv_LeftFrame.form.ds_Menu != undefined ) {
        		// 다른 대메뉴의 메뉴로 이동시
        		//if( this.fv_PreCategoryId != this.fv_CategoryId ) {
        			// 카테고리로 메뉴를 필터링함.
        			objApp.gv_LeftFrame.form.fn_SetInfo(this.fv_CategoryId, topMenu);
        		//}
        		// 메뉴의 위치를 찾아서 열게 됨.
        		objApp.gv_LeftFrame.form.fn_SetRow(this.fv_OrgRow);
        	}
        	// 탭 내부페이지에서 들어온경우.
        	else {
        		// Tab에서 들어온 경우
        		//if( this.fv_PThis.name.indexOf("_T") != -1 ) {
        			// 메뉴 새로 생성
        			//objApp.gv_LeftFrame.form.fn_SetInfo(this.fv_CategoryId, topMenu);
        		//}

        		// 줄찾기
        		objApp.gv_LeftFrame.form.fn_SetRow(this.fv_OrgRow);
        	}

        	if( !this.gfn_IsNull(this.fv_CategoryId) ) {
        		nexacro.getApplication().gv_ActiveWin  = this.fv_WinId;
        		nexacro.getApplication().gv_FormPrefix = this.fv_Prefix;
        	}
        };
        /************************************************************************************************
         * 6. 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.div_Work_onsize = function(obj,e)
        {
        //	this.fn_MoveEtc(); // 주석 처리 (2019.08.08)
        };

        // 타이틀 복사를 위한 기능
        this.sta_Title_oncontextmenu = function(obj,e)
        {
        	this.pdv_Title.form.edt_Title.set_value(this.sta_Title.text);
        	this.pdv_Title.trackPopupByComponent(this.sta_Title, 0, 20);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.sta_Title.addEventHandler("oncontextmenu",this.sta_Title_oncontextmenu,this);
            this.div_Work.addEventHandler("onsize",this.div_Work_onsize,this);
        };
        this.loadIncludeScript("FrameWork.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
