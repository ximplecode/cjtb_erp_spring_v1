(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FrameTop");
            this.set_titletext("");
            this.set_font("normal 11pt/normal \"Arial\"");
            this.set_scrollbartype("none none");
            this.set_scrolltype("none");
            this.set_background("#1155a9");
            this.set_accessibilityrole("form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,120);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_TopMenuList", this);
            obj._setContents("<ColumnInfo><Column id=\"CATEGORY_ID\" type=\"STRING\" size=\"32\"/><Column id=\"SUB_IMAGE_WIDTH\" type=\"STRING\" size=\"32\"/><Column id=\"SUB_IMAGE\" type=\"STRING\" size=\"32\"/><Column id=\"TOP_IMAGE\" type=\"STRING\" size=\"32\"/><Column id=\"ADMIN\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"TOP_IMAGE_WIDTH\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_Title","20","8","218","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TF_logo");
            obj.set_tooltiptext("천재교과서 통합관리시스템");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#4364ed");
            this.addChild(obj.name, obj);

            obj = new Div("div_TopMenu","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#4364ed");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_logo","0","15","150","50",null,null,null,null,null,null,this.div_TopMenu.form);
            obj.set_taborder("0");
            obj.set_image("url(\'Img::logo.png\')");
            obj.set_stretch("none");
            obj.set_background("#4364ed");
            obj.set_border("0px none");
            this.div_TopMenu.addChild(obj.name, obj);

            obj = new Button("btn_hr","240","25","100","30",null,null,null,null,null,null,this.div_TopMenu.form);
            obj.set_taborder("1");
            obj.set_text("인사관리");
            obj.set_border("0px none");
            obj.set_borderRadius("15px");
            obj.set_cssclass("btn_normal");
            obj.set_background("#4364ed");
            this.div_TopMenu.addChild(obj.name, obj);

            obj = new Button("btn_ac","370","25","100","30",null,null,null,null,null,null,this.div_TopMenu.form);
            obj.set_taborder("2");
            obj.set_text("회계관리");
            obj.set_border("0px none");
            obj.set_borderRadius("15px");
            obj.set_cssclass("btn_normal");
            obj.set_background("#4364ed");
            this.div_TopMenu.addChild(obj.name, obj);

            obj = new Button("btn_sd","500","25","100","30",null,null,null,null,null,null,this.div_TopMenu.form);
            obj.set_taborder("3");
            obj.set_text("영업관리");
            obj.set_border("0px none");
            obj.set_borderRadius("15px");
            obj.set_cssclass("btn_normal");
            obj.set_background("#4364ed");
            this.div_TopMenu.addChild(obj.name, obj);

            obj = new Button("btn_mk","630","25","100","30",null,null,null,null,null,null,this.div_TopMenu.form);
            obj.set_taborder("4");
            obj.set_text("제작관리");
            obj.set_border("0px none");
            obj.set_borderRadius("15px");
            obj.set_cssclass("btn_normal");
            obj.set_background("#4364ed");
            this.div_TopMenu.addChild(obj.name, obj);

            obj = new Button("btn_ed","760","25","100","30",null,null,null,null,null,null,this.div_TopMenu.form);
            obj.set_taborder("5");
            obj.set_text("편집관리");
            obj.set_border("0px none");
            obj.set_borderRadius("15px");
            obj.set_cssclass("btn_normal");
            obj.set_background("#4364ed");
            this.div_TopMenu.addChild(obj.name, obj);

            obj = new Button("btn_bi","890","25","100","30",null,null,null,null,null,null,this.div_TopMenu.form);
            obj.set_taborder("6");
            obj.set_text("경영정보관리");
            obj.set_border("0px none");
            obj.set_borderRadius("15px");
            obj.set_cssclass("btn_normal");
            obj.set_background("#4364ed");
            this.div_TopMenu.addChild(obj.name, obj);

            obj = new Button("btn_et","1020","25","100","30",null,null,null,null,null,null,this.div_TopMenu.form);
            obj.set_taborder("7");
            obj.set_text("기타업무관리");
            obj.set_border("0px none");
            obj.set_borderRadius("15px");
            obj.set_cssclass("btn_normal");
            obj.set_background("#4364ed");
            this.div_TopMenu.addChild(obj.name, obj);

            obj = new Button("btn_gw","1150","25","100","30",null,null,null,null,null,null,this.div_TopMenu.form);
            obj.set_taborder("8");
            obj.set_text("전자결재");
            obj.set_border("0px none");
            obj.set_borderRadius("15px");
            obj.set_cssclass("btn_normal");
            obj.set_background("#4364ed");
            this.div_TopMenu.addChild(obj.name, obj);

            obj = new Button("btn_bookmark","8","0","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("즐겨찾기 설정");
            obj.set_background("#4364ed");
            obj.set_border("0px none");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_email","1118","10","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_image("url(\'Img::ico_auth.png\')");
            obj.set_stretch("none");
            obj.set_background("#4364ed");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_personal","1168","10","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_image("url(\'Img::ico_myinfo.png\')");
            obj.set_stretch("none");
            obj.set_background("#4364ed");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_logout","1218","10","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_image("url(\'Img::ico_logout.png\')");
            obj.set_stretch("none");
            obj.set_background("#4364ed");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1250,120,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("FrameTop.xfdl","Lib::Lib_main.xjs");
        this.registerScript("FrameTop.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_main.xjs"); /*include "Lib::Lib_main.xjs"*/;
        /************************************************************************************************
         * 1. FORM 변수 선언 영역
         ************************************************************************************************/
        this.fv_MinWidth 	= 0; 		// 최소 너비
        var objApp = nexacro.getApplication();

        this.form_onload = function(obj,e)
        {
        	this.fn_Init(obj);
        };

        this.form_onsize = function(obj,e)
        {
        	if (this.fv_MinWidth > 0) {
        		if (e.cx > this.fv_MinWidth) {
        			obj.set_width(e.cx);
        		} else {
        			obj.set_width(this.fv_MinWidth);
        		}
        	}
        };

        this.fn_Init = function(obj)
        {
        	this._gfn_AddLoadFrame(obj.name);
        };


        this.fn_SetInfo = function()
        {

        };

        this.form_onsize = function(obj,e)
        {
        	if (this.fv_MinWidth > 0) {
        		if (e.cx > this.fv_MinWidth) {
        			obj.set_width(e.cx);
        		} else {
        			obj.set_width(this.fv_MinWidth);
        		}
        	}
        };


        this.div_menu_btn_onclick = function(obj,e)
        {
        	var btn_nm;

        	btn_nm = obj.id;

        	if (btn_nm != "btn_ac") {this.div_TopMenu.form.btn_ac.set_cssclass("btn_normal");}
        	if (btn_nm != "btn_bi") {this.div_TopMenu.form.btn_bi.set_cssclass("btn_normal");}
        	if (btn_nm != "btn_ed") {this.div_TopMenu.form.btn_ed.set_cssclass("btn_normal");}
        	if (btn_nm != "btn_et") {this.div_TopMenu.form.btn_et.set_cssclass("btn_normal");}
        	if (btn_nm != "btn_gw") {this.div_TopMenu.form.btn_gw.set_cssclass("btn_normal");}
        	if (btn_nm != "btn_hr") {this.div_TopMenu.form.btn_hr.set_cssclass("btn_normal");}
        	if (btn_nm != "btn_pd") {this.div_TopMenu.form.btn_mk.set_cssclass("btn_normal");}
        	if (btn_nm != "btn_sd") {this.div_TopMenu.form.btn_sd.set_cssclass("btn_normal");}

        	obj.set_cssclass("btn_line");

        	btn_nm = btn_nm.replace("btn_","");

        	if ( nexacro.getApplication().gv_selectMenu != btn_nm)
        	{
        		if (system.navigatorname != 'nexacro')
        		{
        			//MyHistory.setLocationHash(btn_nm, btn_nm); // 해쉬값에 메뉴 설정
        		}
        		trace(obj, obj.id);
        		this.lfn_OpenMenu(obj, obj.id);
        	}
        };

        this.lfn_OpenMenu = function(obj, btnId)
        {
        	objApp.mainframe.VFrameSet.HFrameSet.VFrameSet.MdiFrame.form.fn_SetLeftFrameSize("expand");
        	objApp.mainframe.VFrameSet.HFrameSet.LeftFrame.form.fn_SetTitle(obj.id, obj.text, true);
        	objApp.mainframe.VFrameSet.HFrameSet.LeftFrame.form.fn_SetInfo();
        	objApp.mainframe.VFrameSet.HFrameSet.LeftFrame.form.fn_InitRow();
        };

        /**
         * @class  Top Menu 명 반환 <br>
         * @param  {String} categoryId - Category Id
         * @return {String} Top Menu 명
         */
        this.fn_GetTopMenuName = function(categoryId)
        {
        	var row = this.ds_TopMenuList.findRow("CATEGORY_ID", categoryId);
        	return this.ds_TopMenuList.getColumn(row, "MENU_NAME");
        };

        this.div_menu_img_logo_onclick = function(obj,e)
        {
        	objApp.gv_selectMenu = "";
        	this.lfn_WorkMain_open();
        };

        this.img_logout_onclick = function(obj,e)
        {
        	this.lfn_reLogin();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.div_TopMenu.form.img_logo.addEventHandler("onclick",this.div_menu_img_logo_onclick,this);
            this.div_TopMenu.form.btn_hr.addEventHandler("onclick",this.div_menu_btn_onclick,this);
            this.div_TopMenu.form.btn_ac.addEventHandler("onclick",this.div_menu_btn_onclick,this);
            this.div_TopMenu.form.btn_sd.addEventHandler("onclick",this.div_menu_btn_onclick,this);
            this.div_TopMenu.form.btn_mk.addEventHandler("onclick",this.div_menu_btn_onclick,this);
            this.div_TopMenu.form.btn_ed.addEventHandler("onclick",this.div_menu_btn_onclick,this);
            this.div_TopMenu.form.btn_bi.addEventHandler("onclick",this.div_menu_btn_onclick,this);
            this.div_TopMenu.form.btn_et.addEventHandler("onclick",this.div_menu_btn_onclick,this);
            this.div_TopMenu.form.btn_gw.addEventHandler("onclick",this.div_menu_btn_onclick,this);
            this.img_logout.addEventHandler("onclick",this.img_logout_onclick,this);
        };
        this.loadIncludeScript("FrameTop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
