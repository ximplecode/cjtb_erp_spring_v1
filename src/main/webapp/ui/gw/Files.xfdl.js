(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Files");
            this.set_titletext("전자결재 첨부파일리스트");
            if (Form == this.constructor)
            {
                this._setFormPosition(510,260);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_files", this);
            obj._setContents("<ColumnInfo><Column id=\"GB\" type=\"STRING\" size=\"2\"/><Column id=\"F_NO\" type=\"STRING\" size=\"150\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"150\"/><Column id=\"I_FLOW_ID\" type=\"INT\" size=\"256\"/><Column id=\"F_SIZE\" type=\"INT\" size=\"256\"/><Column id=\"R_NAME\" type=\"STRING\" size=\"150\"/><Column id=\"F_PATH\" type=\"STRING\" size=\"150\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_file","1","45",null,"205","1",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_files");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"465\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"파일명\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:F_NO\" font=\"12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:F_NAME\" font=\"12px/normal &quot;함초롬돋움&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","42","10","167","41",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("첨부파일 목록");
            obj.set_color("#7fb39d");
            obj.set_font("bold 25px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","6","12","30","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_image("url(\'Img::sticky_note_small.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","440","17",null,"25","2",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",510,260,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Files.xfdl","Lib::Lib_service.xjs");
        this.registerScript("Files.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;

        this.btn_close_onclick = function(obj,e)
        {
        	this.close(-1);
        };

        this.Files_onload = function(obj,e)
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/gw/getData_file.jsp";
        	in_ds = "ds_files=ds_files";
        	out_ds = "ds_files=ds_files";
        	str_arg = "i_flow_id ="+nexacro.wrapQuote(this.parent.dsParam1);

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




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Files_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("Files.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
