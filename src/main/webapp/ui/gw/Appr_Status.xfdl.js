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
            this.set_titletext("전자결재 결재현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(710,310);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_elec_status", this);
            obj._setContents("<ColumnInfo><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"F_NEXT\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKCHAK\" type=\"STRING\" size=\"256\"/><Column id=\"BUSOR\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KS_SIGN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_appr_status","1","45",null,"255","1",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_elec_status");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"89\"/><Column size=\"40\"/><Column size=\"93\"/><Column size=\"77\"/><Column size=\"176\"/><Column size=\"73\"/><Column size=\"148\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"결재\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"순서\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"성명\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"직위\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"부서\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"상태\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"결재일\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:KIND\" font=\"12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:SEQ\" font=\"12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"2\" font=\"12px/normal &quot;함초롬돋움&quot;\" text=\"bind:F_NAME\" textAlign=\"center\"/><Cell col=\"3\" font=\"12px/normal &quot;함초롬돋움&quot;\" text=\"bind:JIKCHAK\" textAlign=\"center\"/><Cell col=\"4\" font=\"12px/normal &quot;함초롬돋움&quot;\" text=\"bind:BUSOR\" textAlign=\"center\"/><Cell col=\"5\" font=\"12px/normal &quot;함초롬돋움&quot;\" text=\"bind:STATUS\" textAlign=\"center\"/><Cell col=\"6\" font=\"12px/normal &quot;함초롬돋움&quot;\" text=\"bind:F_DATE\" textAlign=\"center\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"@@@@-@@-@@ @@:@@\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","42","10","218","41",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("결재상세내역");
            obj.set_color("#7fb39d");
            obj.set_font("bold 25px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","6","12","30","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_image("url(\'Img::electric_sign_small.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","610","17",null,"25","2",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",710,310,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Appr_Status.xfdl","Lib::Lib_service.xjs");
        this.registerScript("Appr_Status.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;

        this.btn_close_onclick = function(obj,e)
        {
        	this.close(-1);
        };

        this.Files_onload = function(obj,e)
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/gw/getData_elec_status.jsp";
        	in_ds = "ds_elec_status=ds_elec_status";
        	out_ds = "ds_elec_status=ds_elec_status";
        	str_arg = "i_flow_id="+nexacro.wrapQuote(this.parent.dsParam1);

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_select", true, "P", false, this);
        };

        this.Callback_select = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		trace("바뀜");
        		this.alert(ErrorMsg);
        		return false;
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Files_onload,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("Appr_Status.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
