(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("EDCust_SearchF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCust", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REPRESENTATIVE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_STARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_STOPPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ACNTNO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTDTL_SALEAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PWT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","16","26","77","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("업체명");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","97","26","393","29",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("홍길동");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","36","46","444","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("찾고자 하는 업체명을 입력하세요.  업체 확인 후 더블클릭하여 적용하세요.");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","183","510",null,"29","193",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","13","100","477","400",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsCust");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"180\"/><Column size=\"130\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"거래처코드\"/><Cell col=\"1\" text=\"거래처명\"/><Cell col=\"2\" text=\"사업자번호\"/><Cell col=\"3\" text=\"대표자\"/></Band><Band id=\"body\"><Cell text=\"bind:CUST_CODE\"/><Cell col=\"1\" text=\"bind:CUST_NAME\"/><Cell col=\"2\" text=\"bind:BUSINESSNO\"/><Cell col=\"3\" text=\"bind:REPRESENTATIVE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,550,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("EDCust_SearchF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("EDCust_SearchF.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("EDCust_SearchF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var aReturn = new Array();

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.EDCust_SearchF_onload = function(obj,e)
        {
        	var outds = "dsCust=dsCust";
        	var inds = "dsCust=dsCust";

        	this.gfn_TransactionP("select","JSP/mk/Cust_Select.jsp", inds, outds, "", "fnCallback", true, "P", false, this);
        };

        this.fnCallback = function(svcId, errCode, errMsg)
        {
        	if(errCode != 0)
        		alert(errMsg);
        	else
        	{
        		this.dsCust.filter("CUST_GUBN=='00' || CUST_GUBN=='41'");
        		this.dsCust.set_keystring("S:+CUST_NAME");
        		this.edt_name.setFocus();
        	}
        }

        this.edt_name_onkeyup = function(obj,e)
        {
        	this.fnSetFilterExcute(obj.value);
        };

        this.fnSetFilterExcute = function (strValue)
        {

        	var sFilterstr = "CUST_NAME.indexOf('"+strValue+"') > -1";

        	this.dsCust.set_enableevent(false);
        	this.dsCust.set_filterstr(sFilterstr);
        	this.dsCust.set_enableevent(true);
        }

        this.Grid00_oncelldblclick = function(obj,e)
        {
        	aReturn.push(this.dsCust.getColumn(e.row, "CUST_NAME"));
        	aReturn.push(this.dsCust.getColumn(e.row, "CUST_GUBN"));
        	aReturn.push(this.dsCust.getColumn(e.row, "CUST_CODE"));
        	aReturn.push(this.dsCust.getColumn(e.row, "CUST"));
        	aReturn.push(this.dsCust.getColumn(e.row, "BUSINESSNO"));
        	aReturn.push(this.dsCust.getColumn(e.row, "REPRESENTATIVE"));

        	this.dsCust.set_keystring()
        	this.close();
        };

        this.EDCust_SearchF_onbeforeclose = function(obj,e)
        {
        	this.opener.fn_setCustValue(aReturn);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.EDCust_SearchF_onload,this);
            this.addEventHandler("onbeforeclose",this.EDCust_SearchF_onbeforeclose,this);
            this.edt_name.addEventHandler("onkeyup",this.edt_name_onkeyup,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.Grid00.addEventHandler("onenterdown",this.Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("EDCust_SearchF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
