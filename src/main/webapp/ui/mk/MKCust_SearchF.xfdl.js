(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MKCust_SearchF");
            this.set_titletext("거래처코드 조회(제작) POPUP");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mk_Cust", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CUST\" type=\"STRING\" size=\"6\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REPRESENTATIVE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_STARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"OFFICE_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_STOPPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ACNTNO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTDTL_SALEAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PWT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close","155","351",null,"29","1055",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","14","54","87","29",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("거래처명");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","15","20","87","29",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("거래처코드");
            obj.set_background("#fffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"50","40","38","898",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #3cbcb8");
            obj.set_defaultbutton("true");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","14","100","420","240",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_mk_Cust");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"102\"/><Column size=\"298\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"거래처코드\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"거래처명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:CUST_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:CUST_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"28","46","44","27",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #3cbcb8");
            obj.set_defaultbutton("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close00","174","353",null,"29","190",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("닫기");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edCustNm","105","54","255","29",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edCustCd","155","20","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_maxlength("10");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edCustGubn","106","20","45","29",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_maxlength("4");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",450,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MKCust_SearchF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MKCust_SearchF.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MKCust_SearchF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        var vFormId;

        this.MKCust_SearchF_onload = function(obj,e)
        {

        	this.ds_mk_Cust.copyData(this.parent.dsParam1);
        	//this.edCustCd.set_value(this.parent.dsParam2);
        	//this.edCustNm.set_value(this.parent.dsParam3);
        	this.edCustGubn.set_value(this.parent.dsParam4);
        	this.edCustCd.setFocus();
        	vFormId = this.parent.dsParam5;
        	if(this.edCustGubn.text.length != 0)
        	{
        		this.edCustGubn.set_readonly(true);
        		this.ds_mk_Cust.filter("CUST_GUBN=='00' || CUST_GUBN=='" + this.edCustGubn.text + "'");
        		this.btn_search_onclick();
        	}else
        		this.edCustGubn.set_readonly(false);

        };

        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_mk_Cust.set_rowposition(this.fctn_CustChangeSet(this.edCustCd.text, this.edCustNm.text));
        };


        //#######################################################
        // 거래처 변경시 변경값 설정
        //#######################################################
        this.fctn_CustChangeSet = function(Cust_Code, Cust_Name)
        {
        	var icust_idx;
        	var sCmpExpr;

        	// 거래처 코드 인덱스 찾기
        	if((Cust_Code.length == 4) && (Cust_Name.length != 0))
        	{
        		sCmpExpr = "CUST=='" + this.edCustGubn.text + Cust_Code + "'&&CUST_NAME='" + Cust_Name + "'";

        	    icust_idx  = this.ds_mk_Cust.findRowExpr(sCmpExpr);
        	    return icust_idx;
        	}
        	else if(Cust_Code.length == 4)
        	{
        		sCmpExpr = "CUST=='" + this.edCustGubn.text + Cust_Code + "'";
        		icust_idx  = this.ds_mk_Cust.findRowExpr(sCmpExpr);
        	    return icust_idx;
        	}
        	else if(Cust_Name.length != 0)
        	{
        	    icust_idx  = this.ds_mk_Cust.findRow("CUST_NAME", Cust_Name);
        	    return icust_idx;
        	}
        	else
        	    return -1;
        }


        this.Grid00_oncelldblclick = function(obj,e)
        {
        	if(vFormId == "MK133" || vFormId == "MK134")
        	{
        		this.opener.edCustCd.set_value(this.ds_mk_Cust.getColumn(this.ds_mk_Cust.rowposition, "CUST_CODE"));
        		this.opener.cbCustNm.set_value(this.edCustGubn.text+this.ds_mk_Cust.getColumn(this.ds_mk_Cust.rowposition, "CUST_CODE"));
        	}else if(vFormId == "MK131_DTL")
        	{
        		this.opener.dsOrdDtl.setColumn(this.opener.dsOrdDtl.rowposition, "CUST_CODE", this.ds_mk_Cust.getColumn(this.ds_mk_Cust.rowposition, "CUST_CODE"));
        		this.opener.dsOrdDtl.setColumn(this.opener.dsOrdDtl.rowposition, "CUST", this.edCustGubn.text+this.ds_mk_Cust.getColumn(this.ds_mk_Cust.rowposition, "CUST_CODE"));
        	}

        	this.close();
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MKCust_SearchF_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.btn_search00.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("MKCust_SearchF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
