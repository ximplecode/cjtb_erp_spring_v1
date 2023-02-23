(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FrameLeft");
            this.set_titletext("");
            this.set_scrollbartype("none none");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(280,590);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_SearchMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREFIX\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"VISIBLE\" type=\"STRING\" size=\"256\"/><Column id=\"DECO_MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NAVI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("top_title","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_background("#4364ed");
            obj.set_textAlign("center");
            obj.set_font("normal 15px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Menu","5","47",null,null,"-35","-70",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_MenuName","10","8",null,"20","55",null,null,null,null,null,this.div_Menu.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_LF_menuSearch");
            obj.set_displaynulltext("메뉴명 검색");
            this.div_Menu.addChild(obj.name, obj);

            obj = new Grid("grd_Menu","-5","36",null,null,"40","70",null,null,null,null,this.div_Menu.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_binddataset("gds_menu");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("collapse,all");
            obj.set_treeuseline("false");
            obj.set_scrollbartrackbarsize("60");
            obj.set_scrollbarsize("11");
            obj.set_scrollbarincbuttonsize("0");
            obj.set_scrollbardecbuttonsize("0");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"258\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:NAME\" treelevel=\"bind:MLEVEL\" tooltiptext=\"bind:NAME\" treestartlevel=\"1\"/></Band></Format></Formats>");
            this.div_Menu.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_SearchMenu","617","120","240","244",null,null,null,null,null,null,this);
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_SearchMenu","0","0",null,null,"27","0",null,null,null,null,this.pdv_SearchMenu.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_SearchMenu");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartrackbarsize("60");
            obj.set_scrollbarsize("11");
            obj.set_scrollbarincbuttonsize("0");
            obj.set_scrollbardecbuttonsize("0");
            obj.set_cssclass("grd_LF_menuFilter");
            obj.getSetter("user_UseTooltip").set("nouse");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"191\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:DECO_MENU_NM\" tooltiptext=\"bind:NAVI\" displaytype=\"decoratetext\" cssclass=\"cell_left\"/></Band></Format></Formats>");
            this.pdv_SearchMenu.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",280,590,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("FrameLeft.xfdl","Lib::Lib_main.xjs");
        this.registerScript("FrameLeft.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_main.xjs"); /*include "Lib::Lib_main.xjs"*/;

        /************************************************************************************************
         * 1. FORM 변수 선언 영역
         ************************************************************************************************/
        var objApp = nexacro.getApplication();
        this.fv_CurrCategoryId;
        this.fv_CurrRow;

        this.form_onload = function(obj,e)
        {
        	this.fn_Init(obj);
        };

        this.fn_Init = function(obj)
        {
        	this._gfn_AddLoadFrame(obj.name);
        };

        this.fn_SetTitle = function(categoryId, text, bFlag)
        {
        	//TOP_TITLE지정
        	this.top_title.set_text(text);
        	this.top_title.set_color("white");
        }

        this.fn_SetInfo = function()
        {
        	this.fn_setColumnSize();
        };

        this.fn_InitRow = function()
        {
        	this.fv_CurrRow = "";
        };

        this.fn_SetRow = function(row)
        {

        }

        /************************************************************************************************
         * 4. CALLBACK 함수 처리부분
         ************************************************************************************************/

        this.fn_setText = function(nRow)
        {
        	var mn_level, rt_text, nStatus, tree_row;
        	tree_row = objApp.grd_menu.getTreeRow(nRow);
        	rt_text = objApp.gds_menu.getColumn(nRow,"NAME")+"      +";
        	mn_level = objApp.gds_menu.getColumn(nRow,"MLEVEL");
        	nStatus = this.grd_Menu.getTreeStatus(tree_row);

        	if (mn_level != 0 && nStatus == 3) {
        		rt_text = rt_text.replace("+", "");
        	}

        	return rt_text;
        }

        this.fn_setCss = function(nRow)
        {
        	var app = nexacro.getApplication();
        	var mn_level, rt_css, nStatus, tree_row, select_row;

        	tree_row = this.div_Menu.form.grd_menu.getTreeRow(nRow);
        	mn_level = objApp.gds_menu.getColumn(nRow,"MLEVEL");
        	nStatus  = objApp.gds_menu.getTreeStatus(tree_row);

        	select_row = this.grd_Menu.getSelectedRows();

        	if (mn_level == 0) {
        		rt_css = "CssMenu_level_1";
        	}
        	else if (nStatus != 3) {
        		rt_css = "CssMenu_level_2";
        	}
        	else if (select_row == tree_row) {
        		rt_css = "CssMenu_level_3_select";
        	}
        	else {
        		rt_css = "CssMenu_level_3";
        	}

        	return rt_css;
        }

        this.fn_setCss_onmouse = function(nRow)
        {
        	var app = nexacro.getApplication();
        	var mn_level, rt_css, nStatus, tree_row;

        	tree_row = this.div_Menu.form.grd_menu.getTreeRow(nRow);
        	mn_level = app.gds_menu.getColumn(nRow,"MLEVEL");
        	nStatus = this.grd_menu.getTreeStatus(tree_row);

        	if (mn_level == 0) {
        		rt_css = "CssMenu_level_1";
        	}
        	else if (mn_level != 3) {
        		rt_css = "CssMenu_level_2";
        	}
        	else {
        		rt_css = "CssMenu_level_3";
        	}

        	return rt_css;
        }


        this.grd_menu_oncellclick = function(obj,e)
        {
        	var nStatus, i, tree_row, permission_use;

        	tree_row = this.div_Menu.form.grd_Menu.getTreeRow(e.row);
        	nStatus = obj.getTreeStatus(tree_row);
        	switch (nStatus) {
        		case 0 :
        			obj.setTreeStatus(tree_row,true);
        			break;
        		case 1 :
        			obj.setTreeStatus(tree_row,false);
        			break;
        		case 3 :
        			if (objApp.gds_menu.getColumn(e.row, "URL") == true) {
        				this.alert("현재 개발중에 있습니다.");
        				return false;
        			}

        			if (objApp.gds_menu.getColumn(e.row, "UM_PER_USE") == "0") {
        				this.alert("사용 권한이 없습니다.");
        				return false;
        			}
        			else{
        				//objApp.gv_selectMenu_old = objApp.gv_selectMenu;
        				//objApp.gv_selectMenu = objApp.gds_menu.getColumn(e.row, "MN_ID");
        				//nexacro.getApplication().gv_Client.selectMenu(e.row);
        				this.fn_workFrameMove(obj,e);
        			}
        			break;
        	}
        };

        this.fn_PopupCallback = function(strID, variant)
        {
        	this.removeChild("popup");
        }

        this.Callback_login = function(strID, variant)
        {
        	application.gv_selectMenu = application.gv_selectMenu_old;
        }

        this.fn_menu_filter = function(gb)
        {
        	var i, nStatus, mn_level, tree_row;
        	current_menu = gb;
        	switch (gb)
        	{
        		case "hr" :
        			this.grd_menu.setCellProperty("Head",0,"text","인사관리");
        			break;
        		case "ac" :
        			this.grd_menu.setCellProperty("Head",0,"text","회계관리");
        			break;
        		case "sd" :
        			this.grd_menu.setCellProperty("Head",0,"text","영업관리");
        			break;
        		case "mk" :
        			this.grd_menu.setCellProperty("Head",0,"text","제작관리");
        			break;
        		case "ed" :
        			this.grd_menu.setCellProperty("Head",0,"text","편집관리");
        			break;
        		case "bi" :
        			this.grd_menu.setCellProperty("Head",0,"text","경영정보관리");
        			break;
        		case "et" :
        			this.grd_menu.setCellProperty("Head",0,"text","기타업무관리");
        			break;
        		case "gw" :
        			this.grd_menu.setCellProperty("Head",0,"text","전자결재");
        			break;
        	}

        	for (i = 0; i < nexacro.getApplication().gds_menu.rowcount -1; i++)
        	{
        		mn_level = nexacro.getApplication().gds_menu.getColumn(i, "MN_LEVEL");
        		tree_row = this.div_Menu.form.grd_menu.getTreeRow(i);
        		nStatus = this.grd_menu.getTreeStatus(tree_row);

        		if (mn_level == 0)
        		{
        			this.grd_menu.setTreeStatus(tree_row, true);
        		}
        		/*else if (nStatus != 3)
        		{
        			this.grd_menu.setTreeStatus(tree_row, true);
        		}*/
        	}

        	//this.grd_menu.setTreeStatus(0, true);
        }

        this.fn_workFrameMove = function(obj, e)
        {
        	var winId   = objApp.gds_menu.getColumn(e.row, "NAME");
        	var menuNm  = objApp.gds_menu.getColumn(e.row, "NAME");
        	var prefix  = objApp.gds_menu.getColumn(e.row, "PREFIX");
        	var menuUrl = objApp.gds_menu.getColumn(e.row, "URL");
        	var winId = winId + "_" + parseInt(Math.random() * 100);
        	var objChild = new ChildFrame;
        	objChild.init(winId, 0, 0, objApp.gv_WorkFrame.getOffsetWidth() - 0, objApp.gv_WorkFrame.getOffsetHeight() - 0);
        	objApp.gv_WorkFrame.addChild(winId, objChild);

        	objChild.arguments = [];
        	objChild.set_dragmovetype("all");
        	objChild.set_showtitlebar(false);
        	objChild.set_resizable(true);
        	objChild.set_openstatus("maximize");
        	objChild.set_titletext(winId);
        	objChild.set_showtitleicon(false);
        	objChild.set_showcascadetitletext(false);
        	objChild.arguments["winId"] 		= winId;
        	objChild.arguments["menuId"] 		= menuNm;
        	objChild.arguments["menuNm"] 		= menuNm;
        	objChild.arguments["prefix"] 		= prefix;
        	objChild.arguments["formId"] 		= menuUrl.replace(".xml","");
        	objChild.arguments["formUrl"] 		= prefix+"::"+menuUrl.replace(".xml",".xfdl");
        	objChild.set_formurl("Main::FrameWork.xfdl");

        	// 화면 호출
        	objChild.addEventHandler("onsyscommand", this._onsyscommand, this);
        	objApp.gv_MdiFrame.form.fn_InitFalg2();
        	objApp.gv_MdiFrame.form.fn_AddTab(winId, menuNm, menuUrl);
        	objChild.show();
        }


        this.div_Menu_edt_MenuName_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.fn_SearchMenu();
        	}
        };

        this.fn_SearchMenu = function()
        {
        	var txt = this.div_Menu.form.edt_MenuName.value;

        	if (this.gfn_IsNull(txt)) return;

        	var objApp = this.gfn_GetApp();
        	var tmp1 = "(new String(NAME).replace(' ', '').indexOf('{0}') > -1 || new String(PREFIX).toUpperCase().indexOf('{1}') > -1) && PREFIX != null && PREFIX != ''";
        	var filter = this._gfn_Msg(tmp1, txt.replace(' ', ''), txt.toUpperCase());
        	trace("filter"+filter);
        	objApp.gds_menu.filter(filter);
        	this.ds_SearchMenu.clearData();
        	this.ds_SearchMenu.appendData(objApp.gds_menu, true);
        	objApp.gds_menu.filter("");

        	if (this.ds_SearchMenu.rowcount == 0) return;

        	// 결과 수에 따라 Line 수 변경
        	var maxLine = 10; // 최대 결과 보여줄 Line 수
        	var width = 240;
        	var height = 0;

        	if (this.ds_SearchMenu.rowcount > 10) {
        		height = 24 * maxLine + 4;
        	} else {
        		height = 24 * this.ds_SearchMenu.rowcount + 4;
        	}

        	// 결과 decorate 설정
        	var tmp2 = "<b v='true'><fc v='#00adef'>" + txt + "</fc></b>";
        	for (var i = 0; i < this.ds_SearchMenu.rowcount; i++) {
        		var menuId = this.ds_SearchMenu.getColumn(i, "URL");
        		var navi = this.fn_GetNavi(objApp.gds_menu, menuId);
        		var menuNm = this.ds_SearchMenu.getColumn(i, "NAME");
        		var formId = this.ds_SearchMenu.getColumn(i, "PREFIX");

        		this.ds_SearchMenu.setColumn(i, "NAVI", navi + menuNm + " [" + formId + "]");
        		menuNm = nexacro.replaceAll(menuNm, txt, tmp2);
        		this.ds_SearchMenu.setColumn(i, "DECO_MENU_NM", menuNm);
        	}

        	this.pdv_SearchMenu.trackPopupByComponent(this.div_Menu.form.edt_MenuName, 0, this.div_Menu.form.edt_MenuName.getOffsetHeight() + 2, width, height);
        };

        /**
         * @description navigation 가져오기 <br>
         */
        this.fn_GetNavi = function(objDs, menuId)
        {
        	var row = objDs.findRow("URL", menuId);
        	if (row > -1) {
        		var level = nexacro.toNumber(objDs.getColumn(row, "MLEVEL"));
        		var navi = "";
        		for (var i = row; i >= 0; i--) {
        			if (nexacro.toNumber(objDs.getColumn(i, "MLEVEL")) < level) {
        				level = nexacro.toNumber(objDs.getColumn(i, "MLEVEL"));
        				navi = objDs.getColumn(i, "NAME") + " > " + navi;
        			}
        		}
        	}

        	return navi;
        };

        // 메뉴명 검색 결과 클릭
        this.pdv_SearchMenu_grd_SearchMenu_oncelldblclick = function(obj,e)
        {
        	this.pdv_SearchMenu.closePopup();
        	this.fn_workFrameMove(obj, e);
        };

        this.fn_setColumnSize = function() {
        	this.div_Menu.form.grd_Menu.autoSizeCol( "body", 0, false);
        	if(this.div_Menu.form.grd_Menu.getRealColSize( 0, false ) <= 258) {
        		this.div_Menu.form.grd_Menu.setRealColSize( "body", 0, 258, false );
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_Menu.form.edt_MenuName.addEventHandler("onkeydown",this.div_Menu_edt_MenuName_onkeydown,this);
            this.div_Menu.form.grd_Menu.addEventHandler("oncellclick",this.grd_menu_oncellclick,this);
            this.pdv_SearchMenu.form.grd_SearchMenu.addEventHandler("oncelldblclick",this.pdv_SearchMenu_grd_SearchMenu_oncelldblclick,this);
        };
        this.loadIncludeScript("FrameLeft.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
