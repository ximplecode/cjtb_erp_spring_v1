(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LeftMenu");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(190,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grd_menu","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("0px none");
            obj.set_binddataset("gds_menu");
            obj.set_treeasynctoggle("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeusebutton("no");
            obj.set_treeuseline("false");
            obj.set_treeuseimage("false");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"158\"/><Column size=\"22\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" border=\"1px none #cacaca\" background=\"linear-gradient(#10aea9,#10aea9) #10aea9\" color=\"#ffffff\" textAlign=\"left\" font=\"normal 900 16px/normal &quot;Gulim&quot;\" text=\"인사관리\" padding=\"0px 0px 0px 10px\"/></Band><Band id=\"body\"><Cell text=\"bind:MN_NAME\" displaytype=\"treeitemcontrol\" treelevel=\"bind:MN_LEVEL\" edittype=\"tree\" cssclass=\"expr:comp.parent.fn_setCss(currow)\"/><Cell col=\"1\" text=\"expr:comp.parent.fn_setText(currow)\" cssclass=\"expr:comp.parent.fn_setCss(currow)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",190,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("LeftMenu.xfdl","Lib::Lib_main.xjs");
        this.registerScript("LeftMenu.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_main.xjs"); /*include "Lib::Lib_main.xjs"*/;

        this.LeftMenu_onload = function(obj,e)
        {
        	this.gfn_LoadForm(this);
        	this.fn_Init(obj);

        };

        this.fn_Init = function(obj)
        {
        	this._gfn_AddLoadFrame(obj.name);
        };


        this.fn_SetInfo = function()
        {

        };

        this.fn_setText = function(nRow)
        {
        	var app = nexacro.getApplication();
        	var mn_level, rt_text, nStatus, tree_row;
        	tree_row = this.grd_menu.getTreeRow(nRow);
        	rt_text = "+";
        	mn_level = app.gds_menu.getColumn(nRow,"MN_LEVEL");
        	nStatus = this.grd_menu.getTreeStatus(tree_row);
        	if (mn_level != 0 && nStatus == 3) {
        		rt_text = "";
        	}

        	return rt_text;
        }

        this.fn_setCss = function(nRow)
        {
        	var app = nexacro.getApplication();
        	var mn_level, rt_css, nStatus, tree_row, select_row;

        	tree_row = this.grd_menu.getTreeRow(nRow);
        	mn_level = app.gds_menu.getColumn(nRow,"MN_LEVEL");
        	nStatus = this.grd_menu.getTreeStatus(tree_row);
        	select_row = this.grd_menu.getSelectedRows();

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

        	tree_row = this.grd_menu.getTreeRow(nRow);
        	mn_level = app.gds_menu.getColumn(nRow,"MN_LEVEL");
        	nStatus = this.grd_menu.getTreeStatus(tree_row);

        	/*if (mn_level == 0)
        	{
        		rt_css = "CssMenu_level_1";
        	}
        	else if (mn_level != 3)
        	{
        		rt_css = "CssMenu_level_2";
        	}
        	else
        	{
        		rt_css = "CssMenu_level_3";
        	}*/

        	rt_css = "CssMenu_level_3";


        	return rt_css;
        }


        this.grd_menu_oncellclick = function(obj,e)
        {
        	var nStatus, i, tree_row, permission_use;

        	tree_row = this.grd_menu.getTreeRow(e.row);
        	nStatus = obj.getTreeStatus(tree_row);

        	switch (nStatus)
        	{
        		case 0 :
        			obj.setTreeStatus(tree_row,true);
        			break;
        		case 1 :
        			obj.setTreeStatus(tree_row,false);
        			break;
        		case 3 :
        			if (Eco.isEmpty(nexacro.getApplication().gds_menu.getColumn(e.row, "MN_URL")) == true)
        			{
        				this.alert("현재 개발중에 있습니다.");
        				return false;
        			}

        			permission_use = nexacro.getApplication().gds_menu.getColumn(e.row, "UM_PER_USE");
        			if (permission_use == "0")
        			{
        				this.alert("사용 권한이 없습니다.");
        			}
        			else
        			{

        				trace("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
        				trace(nexacro.getApplication().gds_menu.saveXML());
        				trace("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");

        				nexacro.getApplication().gv_selectMenu_old = nexacro.getApplication().gv_selectMenu;
        				nexacro.getApplication().gv_selectMenu = nexacro.getApplication().gds_menu.getColumn(e.row, "MN_ID");

        				if (nexacro.getApplication().gds_menu.getColumn(e.row, "MN_FORM") == "POPUP")
        				{
        					var objNew = new ChildFrame();
        						objNew.init("popup",0,0,237,440,null,null,nexacro.getApplication().gds_menu.getColumn(e.row, "MN_URL"));
        						this.addChild("popup",objNew);
        						//objNew.init("Login","absolute",null,null,null,null,null,null,"Main::Login.xfdl",this);
        						objNew.set_openalign("center middle");
        						//objNew.style.set_overlaycolor("#f3f4f5ff");
        						objNew.set_showtitlebar(false);
        						objNew.showModal("popup",this.getOwnerFrame(),{},this,this.fn_PopupCallback);
        				}
        				else
        				{
        					nexacro.getApplication().gv_Client.selectMenu(e.row);
        				}
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

        this.grd_menu_onselectchanged = function(obj,e)
        {

        };

        this.grd_menu_onmousemove = function(obj,e)
        {
        	this.fn_setCss_onmouse(e.row);
        };


        this.fn_menu_filter = function(gb)
        {
        	var i, nStatus, mn_level, tree_row;
        	current_menu = gb;
        	trace(gb);
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
        		tree_row = this.grd_menu.getTreeRow(i);
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


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.LeftMenu_onload,this);
            this.grd_menu.addEventHandler("oncellclick",this.grd_menu_oncellclick,this);
            this.grd_menu.addEventHandler("onselectchanged",this.grd_menu_onselectchanged,this);
            this.grd_menu.addEventHandler("onmousemove",this.grd_menu_onmousemove,this);
        };
        this.loadIncludeScript("LeftMenu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
