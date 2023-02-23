(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comment");
            this.set_titletext("결재자 의견 popup");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsComment", this);
            obj._setContents("<ColumnInfo><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"F_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"F_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"F_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","7","48","385","371",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static00");
            obj.set_background("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","321","422","72","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","42","10","228","41",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("결재자 의견 보기");
            obj.set_color("#7fb39d");
            obj.set_font("bold 25px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtS_View","15","57","369","353",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_displaynulltext("등록된 결재자 의견이 없습니다.");
            obj.set_readonly("false");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","9","12","30","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_image("url(\'Img::loupe.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,450,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("GW130_COM.xfdl","Lib::Lib_service.xjs");
        this.registerScript("GW130_COM.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;

        this.com_onload = function(obj,e)
        {
        	this.dsComment.copyData(this.parent.dsParam1);
        	this.fn_View();
        };


        this.fn_View = function(){

        	var strview = "";
        	for (var iRow=0; iRow <= this.dsComment.getRowCount()-1;iRow++)
        	{
        		var kind_str = "";

        		if (this.dsComment.getColumn(iRow, "KIND") == "1")
        			kind_str = "결재자";
        		else if (this.dsComment.getColumn(iRow, "KIND") == "2")
        			kind_str = "합의자";
        		else if (this.dsComment.getColumn(iRow, "KIND") == "3")
        			kind_str = "최종결재자";
        		else if (this.dsComment.getColumn(iRow, "KIND") == "")
        			kind_str = "";

        		var fdate = nexacro.trim(this.dsComment.getColumn(iRow, "F_DATE"));

        		strdate = fdate.substr(0,4) + "/" + fdate.substr(4, 2) + "/"+ fdate.substr(6,2) + " " + fdate.substr(8,2)+ ":" + fdate.substr(10, 2);

        		strview += "* " + this.dsComment.getColumn(iRow, "F_NAME") + " [" + strdate + "] \n\n";
        		strview += " " + this.dsComment.getColumn(iRow, "F_COMMENT")+ "\n\n\n";
        	}

        	this.txtS_View.set_value(strview);

        };


        this.btn_close_onclick = function(obj,e)
        {
        	this.close(-1);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.com_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("GW130_COM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
