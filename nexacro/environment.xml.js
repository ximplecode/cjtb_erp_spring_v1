if (nexacro.Environment)
{
    var env = nexacro._environment = new nexacro.Environment();
    env.on_init = function ()
    {
        this.set_themeid("theme::default");
        this.set_datatyperule("2.0");
        this.set_filesecurelevel("all");
        this.set_networksecurelevel("all");
        this.set_httptimeout("900");
        this.set_loadingimage("url(\'theme://images/btn_N.png\')");
    };
    env.on_initEvent = function ()
    {
        // add event handler

    };
    env.loadTypeDefinition = function ()
    {
        nexacro._setTypeDefinitionURL("typedefinition.xml");
        nexacro._addService("theme", "file", "./_resource_/_theme_/", "session", null, "", "0", "");
        nexacro._addService("initvalue", "file", "./_resource_/_initvalue_/", "session", null, "", "0", "");
        nexacro._addService("xcssrc", "file", "./_resource_/_xcss_/", "session", null, "", "0", "");
        nexacro._addService("imagerc", "file", "./_resource_/_images_/", "session", null, "", "0", "");
        nexacro._addService("font", "file", "./_resource_/_font_/", "session", null, "", "0", "");
        nexacro._addService("extPrototype", "js", "./nexacro17lib/component/extPrototype/", "session", null, "", "0", "0");
        nexacro._addService("Main", "form", "./Main/", "session", null, "", "0", "0");
        nexacro._addService("Lib", "js", "./Lib/", "session", null, "", "0", "0");
        nexacro._addService("Test", "form", "./Test/", "none", null, "", "0", "0");
        nexacro._addService("Img", "file", "./Img/", "session", null, "", "0", "0");
        nexacro._addService("svcUrl", "JSP", "https://cj-erp.chunjae.co.kr/erp-next/", "session", null, "", "0", "0");
        nexacro._addService("ad", "form", "./ad/", "session", null, "", "0", "0");
        nexacro._addService("bi", "form", "./bi/", "session", null, "", "0", "0");
        nexacro._addService("ed", "form", "./ed/", "session", null, "", "0", "0");
        nexacro._addService("gw", "form", "./gw/", "session", null, "", "0", "0");
        nexacro._addService("hr", "form", "./hr/", "session", null, "", "0", "0");
        nexacro._addService("hr_mr", "form", "./hr_mr/", "session", null, "", "0", "0");
        nexacro._addService("js", "form", "./js/", "session", null, "", "0", "0");
        nexacro._addService("mk", "form", "./mk/", "session", null, "", "0", "0");
        nexacro._addService("pa", "form", "./pa/", "session", null, "", "0", "0");
        nexacro._addService("pd", "form", "./pd/", "session", null, "", "0", "0");
        nexacro._addService("pp", "form", "./pp/", "session", null, "", "0", "0");
        nexacro._addService("pr", "form", "./pr/", "session", null, "", "0", "0");
        nexacro._addService("sd", "form", "./sd/", "session", null, "", "0", "0");
        nexacro._addService("sm", "form", "./sm/", "session", null, "", "0", "0");
        nexacro._addService("un", "form", "./un/", "session", null, "", "0", "0");
        nexacro._addService("yy", "form", "./yy/", "session", null, "", "0", "0");
        nexacro._addService("common", "form", "./common/", "session", null, "", "0", "0");
        nexacro._addService("mm", "form", "./mm/", "session", null, "", "0", "0");
        nexacro._addService("testURL", "JSP", "http://localhost:8080/", "none", null, "", "0", "0");
        nexacro._addService("jsptestURL", "JSP", "https://cjtb-erp.chunjae.co.kr:8000/", "none", null, "", "0", "0");
    	nexacro._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacro17lib/component/");
    	nexacro._theme_uri = "./_resource_/_theme_/";
    	// load components
        var registerclass = [
        		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
        		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
        		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
        		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
        		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
        		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
        		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
        		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
        		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
        		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
        		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
        		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
        		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
        		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
        		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
        		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
        		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
        		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
        		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
        		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
        		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
        		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
        		{"id":"ListView", "classname":"nexacro.ListView", "type":"JavaScript"},
        		{"id":"DataObject", "classname":"nexacro.DataObject", "type":"JavaScript"},
        		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
        		{"id":"FileDialog", "classname":"nexacro.FileDialog", "type":"JavaScript"},
        		{"id":"FileDownload", "classname":"nexacro.FileDownload", "type":"JavaScript"},
        		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"},
        		{"id":"FileDownTransfer", "classname":"nexacro.FileDownTransfer", "type":"JavaScript"},
        		{"id":"FileUpTransfer", "classname":"nexacro.FileUpTransfer", "type":"JavaScript"},
        		{"id":"VirtualFile", "classname":"nexacro.VirtualFile", "type":"JavaScript"}
        ];
    	nexacro._addClasses(registerclass);
    };
    env.on_loadVariables = function ()
    {
        // Variables

        // Cookies

        // HTTP Header

    };
	env.on_loadDeviceAdaptors = function ()
	{
        // load device adatpor

	};
    // User Script

					
    env = null;
}
