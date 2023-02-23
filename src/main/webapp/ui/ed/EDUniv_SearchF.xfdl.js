(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("EDUniv_SearchF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUniversity", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","16","26","77","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("학교명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_univ","96","26","337","29",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","49","417","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("찾고자 하는 대학의 이름을 입력하세요. (서울대학교일 경우 : 서울, 서울대)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","183","510",null,"29","193",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","13","100","424","400",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsUniversity");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"96\"/><Column size=\"154\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학교코드\"/><Cell col=\"1\" text=\"학교명\"/><Cell col=\"2\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:UNIV_CODE\"/><Cell col=\"1\" text=\"bind:UNIV_NAME\"/><Cell col=\"2\" text=\"bind:UNIV_REMARK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",450,550,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("EDUniv_SearchF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("EDUniv_SearchF.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("EDUniv_SearchF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        this.btn_close_onclick = function(obj,e)
        {
        	this.close(-1);
        };

        this.EDUniv_SearchF_onload = function(obj,e)
        {
        	//대학교정보
        	this.dsUniversity.copyData(this.parent.dsParam1);
        	this.edt_univ.setFocus();
        };

        this.edt_univ_onkeyup = function(obj,e)
        {
        	this.fnSetFilterExcute(obj.value);
        };

        this.fnSetFilterExcute = function (strValue)
        {
        	var objDs	 = this.dsUniversity;
        	var sFilterstr = "UNIV_NAME.indexOf('"+strValue+"') > -1";

        	objDs.set_enableevent(false);
        	objDs.set_filterstr(sFilterstr);
        	objDs.set_enableevent(true);
        }


        this.Grid00_oncelldblclick = function(obj,e)
        {
        	this.opener.edt_univ.set_value(this.dsUniversity.getColumn(e.row, "UNIV_NAME"));
        	this.close(-1);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.EDUniv_SearchF_onload,this);
            this.edt_univ.addEventHandler("onkeyup",this.edt_univ_onkeyup,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("EDUniv_SearchF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
