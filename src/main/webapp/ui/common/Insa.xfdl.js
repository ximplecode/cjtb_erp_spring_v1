(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Insa");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(474,470);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_insa", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSECD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSENM\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWICD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWINM\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_JIKWINM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_buse", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BU_UPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"BU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"BU_ACTNCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONLINE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","245","6","55","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("성명");
            obj.set_background("#10aea9");
            obj.set_color("#ffffff");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","301","6","115","29",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","418","6","51","29",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #3cbcb8");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","196","436","83","29",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_insa","237","45","233","385",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_insa");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"115\" band=\"left\"/><Column size=\"47\" band=\"left\"/><Column size=\"57\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"부서\"/><Cell col=\"1\" text=\"직책\"/><Cell col=\"2\" text=\"성명\"/></Band><Band id=\"body\"><Cell text=\"bind:BUSENM\"/><Cell col=\"1\" text=\"bind:JIKWINM\"/><Cell col=\"2\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_buse","7","3","231","427",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_buse");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"222\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:BU_LEVEL\" border=\"0px none #dbdee2\" cssclass=\"CssBuse_tree\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",474,470,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Insa.xfdl","Lib::Lib_service.xjs");
        this.registerScript("Insa.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;

        this.btn_close_onclick = function(obj,e)
        {
        	this.close(-1);
        };

        this.Insa_onload = function(obj,e)
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/common/getdata_buse.jsp";
        	in_ds = "ds_buse=ds_buse";
        	out_ds = "ds_buse=ds_buse";
        	str_arg = "buse_nm=''" ;
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_buse_select", true, "P", false, this);
        };

        this.Callback_buse_select = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}
        };

        this.getData_insa = function(sabun,name,busecd)
        {
        	var str_url, in_ds, out_ds, str_arg;

        	str_url = "JSP/common/getdata_insa.jsp";
        	in_ds = "ds_insa=ds_insa";
        	out_ds = "ds_insa=ds_insa";
        	str_arg = "sabun='"+sabun+"' name='"+name+"' busecd='"+busecd+"'";
        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_insa", true, "P", false,this);
        };

        this.Callback_insa = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}
        };
        this.grd_buse_oncelldblclick = function(obj,e)
        {
        	this.getData_insa("","",this.ds_buse.getColumn(e.row,"CODE"));
        };

        this.btn_search_onclick = function(obj,e)
        {
        	if (Eco.isEmpty(this.edt_name.value) == false)
        	{
        		this.getData_insa("",this.edt_name.value,"");
        	}
        };

        this.edt_name_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13)
        	{
        		this.btn_search_onclick(null,null);
        	}
        };

        this.grd_insa_oncelldblclick = function(obj,e)
        {
        	this.parent.arr_s[0] = this.ds_insa.getColumn(e.row,"SABUN");
        	this.parent.arr_s[1] = this.ds_insa.getColumn(e.row,"NAME");
        	this.parent.arr_s[2] = this.ds_insa.getColumn(e.row,"JIKWINM");
        	this.parent.arr_s[3] = this.ds_insa.getColumn(e.row,"BUSENM");
        	this.parent.arr_s[4] = this.ds_insa.getColumn(e.row,"OLD_JIKWINM");

        	this.close(1);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Insa_onload,this);
            this.edt_name.addEventHandler("onkeydown",this.edt_name_onkeydown,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.grd_insa.addEventHandler("oncelldblclick",this.grd_insa_oncelldblclick,this);
            this.grd_buse.addEventHandler("oncelldblclick",this.grd_buse_oncelldblclick,this);
        };
        this.loadIncludeScript("Insa.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
