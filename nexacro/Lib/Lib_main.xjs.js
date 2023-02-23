//XJS=Lib_main.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /*
        	lfn_OpenMenu : 메뉴 열기
        	lfn_WorkMain_open : 메인창 복귀
        	lfn_reLogin : 로그인 다시 하기
        */

        this.lfn_OpenMenu = function(MenuID)
        {
        	nexacro.getApplication().gv_selectMenu = MenuID;
        	nexacro.getApplication().gds_menu.filter("MN_GB=='"+nexacro.getApplication().gv_selectMenu+"'");

        	if (nexacro.getApplication().gv_WorkFrame.div_work.url == "Main::WorkBody.xfdl")
        	{
        		nexacro.getApplication().gv_WorkFrame.div_work.set_url("Main::WorkDetail.xfdl");
        	}
        	else if (nexacro.getApplication().gv_WorkFrame.div_work.url == "Main::WorkDetail.xfdl")
        	{
        		nexacro.getApplication().gv_WorkFrame.div_work.form.div_left.form.fn_menu_filter(nexacro.getApplication().gv_selectMenu);
        	}
        }

        this.lfn_WorkMain_open = function()
        {
        	if (nexacro.getApplication().gv_WorkFrame.div_work.url != "Main::WorkBody.xfdl")
        	{
        		nexacro.getApplication().gv_WorkFrame.div_work.set_url("Main::WorkBody.xfdl");
        	}
        }

        this.lfn_reLogin = function()
        {
        	nexacro.getApplication().mainframe.WorkFrame.form.div_main.set_url("");
        	nexacro.getApplication().gv_selectMenu = "";
        	nexacro.getApplication().mainframe.WorkFrame.form.Popup_Login();
        }




        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
