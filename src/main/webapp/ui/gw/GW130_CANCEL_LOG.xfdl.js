(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FCancelLog");
            this.set_titletext("전자결재 취소 LOG");
            if (Form == this.constructor)
            {
                this._setFormPosition(510,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cancel_log", this);
            obj._setContents("<ColumnInfo><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"I_FLOW_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivCancelLog","0","49","510","551",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#e8e7e3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edCoSeq","82","8","173","33",null,null,null,null,null,null,this.DivCancelLog.form);
            obj.set_taborder("0");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_enable("false");
            this.DivCancelLog.addChild(obj.name, obj);

            obj = new Edit("edTitle","82","43","426","33",null,null,null,null,null,null,this.DivCancelLog.form);
            obj.set_taborder("1");
            obj.set_font("10px/normal \"함초롬바탕 확장\"");
            obj.set_enable("false");
            this.DivCancelLog.addChild(obj.name, obj);

            obj = new TextArea("txaCancel","82","78","426","473",null,null,null,null,null,null,this.DivCancelLog.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.DivCancelLog.addChild(obj.name, obj);

            obj = new Static("Static02","42","10","167","41",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("결재취소내역");
            obj.set_color("#7fb39d");
            obj.set_font("bold 25px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","6","12","30","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_image("url(\'Img::img_check.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","440","17",null,"25","2",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("StDocNo","3","57","77","33",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("문서번호");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("StDocTitle","3","92","77","33",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("문서제목");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("StCancel","3","127","77","473",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("취소사유");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_color("#e8e7e3");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",510,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("GW130_CANCEL_LOG.xfdl","Lib::Lib_service.xjs");
        this.registerScript("GW130_CANCEL_LOG.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;

        var vI_Flow_Id, rt_value;

        this.Cancel_Log_onload = function(obj,e)
        {
        	vI_Flow_Id = this.parent.dsParam1;
        	this.DivCancelLog.form.edCoSeq.set_value(this.parent.dsParam2);
        	this.DivCancelLog.form.edTitle.set_value(this.parent.dsParam3);

        	this.getdata_cancel_log();
        };

        this.getdata_cancel_log = function()
        {
        	var str_url, in_ds, out_ds, str_arg;
        	str_url = "JSP/gw/SQL_GW130_CANCEL_LOG.jsp";
        	in_ds = "ds_cancel_log=ds_cancel_log";
        	out_ds = "ds_cancel_log=ds_cancel_log";
        	str_arg  = " i_flow_id ="+nexacro.wrapQuote(vI_Flow_Id);

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "Callback_cancelLog", true, "P", false, this);
        };


        this.Callback_cancelLog = function(Trid, ErrorCode, ErrorMsg)
        {
        	var str = "";

        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}

        	for (var i = 0; i < this.ds_cancel_log.getRowCount(); i++)
        	{
        		str = str + "시  간 : " + this.ds_cancel_log.getColumn(i,"F_DATE") + "\n\n";
        		str = str + "취소자 : " + this.ds_cancel_log.getColumn(i,"NAME") + "\n\n";
        		str = str + "사  유 : " + this.ds_cancel_log.getColumn(i, "I_FLOW_BIGO") + "\n\n\n\n\n\n";
        	}

        	this.DivCancelLog.form.txaCancel.set_value(str);
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close(-1);
        };






        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Cancel_Log_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("GW130_CANCEL_LOG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
