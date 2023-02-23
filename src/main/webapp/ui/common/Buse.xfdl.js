(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Buse");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(237,440);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_buse", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"BU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BU_ACTNCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONLINE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","8","8","55","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("부서명");
            obj.set_background("#10aea9");
            obj.set_color("#ffffff");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","64","8","115","29",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"8","51","29","5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #3cbcb8");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_buse","1","45",null,"357","1",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_buse");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"222\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:BU_LEVEL\" border=\"0px none #dbdee2\" cssclass=\"CssBuse_tree\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","77","407",null,"29","77",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",237,440,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Buse.xfdl","Lib::Lib_service.xjs");
        this.registerScript("Buse.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;

        this.btn_close_onclick = function(obj,e)
        {
        	this.alert("hi");

        	this.close(-1);
        };

        this.Buse_onload = function(obj,e)
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/common/getdata_buse.jsp";
        	in_ds = "ds_buse=ds_buse";
        	out_ds = "ds_buse=ds_buse";
        	str_arg = "buse_nm=''" ;
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_select", true, "P", false, this);
        };

        this.Callback_select = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}
        };

        this.grd_buse_oncelldblclick = function(obj,e)
        {
        	this.parent.arr_s[0] = this.ds_buse.getColumn( e.row, "CODE" );
        	this.parent.arr_s[1] = this.ds_buse.getColumn( e.row, "NAME" );
        	this.close(1);
        };

        this.btn_search_onclick = function(obj,e)
        {
        	var nRow;
        	nRow = this.ds_buse.findRowExpr("NAME.toString().indexOf('" + this.edt_name.text + "') >= 0");
        	this.grd_buse.set_treeinitstatus("expand,all");
        	this.ds_buse.set_rowposition(nRow);
        };

        this.edt_name_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13)
        	{
        		this.btn_search_onclick(null,null);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Buse_onload,this);
            this.edt_name.addEventHandler("onkeydown",this.edt_name_onkeydown,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.grd_buse.addEventHandler("oncelldblclick",this.grd_buse_oncelldblclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("Buse.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
