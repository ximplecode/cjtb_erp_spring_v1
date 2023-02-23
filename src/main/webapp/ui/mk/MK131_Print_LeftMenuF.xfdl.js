(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MK131_Print");
            this.set_titletext("발주관리 출력물 양식");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,510);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSelectOrdMst", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"ORDMST_DATENO\" type=\"STRING\" size=\"15\"/><Column id=\"ORDMST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ORDMST_NO\" type=\"STRING\" size=\"4\"/><Column id=\"ORDMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ORDMST_QTY\" type=\"INT\" size=\"6\"/><Column id=\"ORDER_TOTAL\" type=\"INT\" size=\"6\"/><Column id=\"ORDMST_REVIVAL\" type=\"STRING\" size=\"1\"/><Column id=\"REVIVAL\" type=\"STRING\" size=\"4\"/><Column id=\"PLT_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"PLT_NAME\" type=\"STRING\" size=\"15\"/><Column id=\"PLT_PAGE\" type=\"INT\" size=\"3\"/><Column id=\"PLT_PRNSIGNATURE\" type=\"INT\" size=\"3\"/><Column id=\"BOOKMST_BODYPAGE\" type=\"INT\" size=\"5\"/><Column id=\"BOOKMST_SIGNATURE\" type=\"DECIMAL\" size=\"6\"/><Column id=\"BND_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"BND_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"ORDMST_REMARK\" type=\"STRING\" size=\"70\"/><Column id=\"BOOKMST_REMARK\" type=\"STRING\" size=\"70\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"PDTDTL_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"PDTDTL_NUMBER\" type=\"STRING\" size=\"4\"/><Column id=\"PDTDTL_DTLNUMBER\" type=\"STRING\" size=\"3\"/><Column id=\"PDTDTL_PDT_QTY\" type=\"INT\" size=\"6\"/><Column id=\"PDTDTL_WANT_INDATE\" type=\"CHAR\" size=\"8\"/><Column id=\"TONG_QTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrderSelect", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"ORDMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"CUST\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_FAX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCustSelect", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"CUST\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_FAX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close","155","351",null,"29","1055",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"50","40","38","898",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #3cbcb8");
            obj.set_defaultbutton("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn1",null,"10","170","50","15",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("선택 발주서 출력");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_border("2px groove #7fb39d");
            obj.set_background("white");
            obj.set_color("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Button("btn2",null,"65","170","50","15",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("선택 발주서 확인");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_border("2px groove #7fb39d");
            obj.set_background("white");
            obj.set_color("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Button("btn3",null,"120","170","50","15",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("발주리스트 출력");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_border("2px groove #7fb39d");
            obj.set_background("white");
            obj.set_color("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Button("btn4",null,"175","170","50","15",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("선택 용지 합산");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_border("2px groove #7fb39d");
            obj.set_background("white");
            obj.set_color("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Button("btn5",null,"230","170","50","15",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("용지+발주리스트");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_border("2px groove #7fb39d");
            obj.set_background("white");
            obj.set_color("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Button("btn6",null,"285","170","50","15",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("발주서 팩스발송");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_border("2px groove #7fb39d");
            obj.set_background("white");
            obj.set_color("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Button("btn7",null,"340","170","50","15",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("팩스발송현황");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_border("2px groove #7fb39d");
            obj.set_background("white");
            obj.set_color("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Button("btn8",null,"395","170","50","15",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("선택 용지 재고");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_border("2px groove #7fb39d");
            obj.set_background("white");
            obj.set_color("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Button("btn9",null,"450","170","50","15",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("닫기");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_border("2px groove #7fb39d");
            obj.set_background("white");
            obj.set_color("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","480","20","39","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",200,510,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK131_Print_LeftMenuF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK131_Print_LeftMenuF.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK131_Print_LeftMenuF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var urlMrdHtml = nexacro.getApplication().gv_urlMrdHtml;
        var urlMrdService = nexacro.getApplication().gv_urlMrdService;

        var nOrdMst_Id, rdUrl, rdParam;

        this.btn_onmouseenter = function(obj,e)
        {
        	obj.set_background("#7fb39d");
        	obj.set_color("#ffffff");
        };

        this.btn_onmouseleave = function(obj,e)
        {
        	obj.set_border("2px groove #7fb39d");
        	obj.set_background("white");
        	obj.set_color("#7fb39d");
        };

        //선택 발주서 출력
        this.btn1_onclick = function(obj,e)
        {
        	var ordmst_id = "";

        	for(var i = 0 ; i < this.opener.dsOrdMst.rowcount; i++) // 소스 데이터셋 카운트 루핑
        	{
        		if( this.opener.dsOrdMst.getColumn(i, "CHK") == "1" ) // 선택된것만 건수에 포함
        		{
        			nOrdMst_Id = this.opener.dsOrdMst.getColumn(i, "ORDMST_ID");

        			if(ordmst_id.length != 0)
        			{
        			   ordmst_id = ordmst_id + ",";
        			}

        			ordmst_id = ordmst_id + nOrdMst_Id;
        		}
        	}

        	if(ordmst_id.length != 0){
        		if(nOrdMst_Id != ""){

        			rdUrl = gv_svcUrl + "rpt/mk/MK131_list.mrd";
        			rdParam = "/rpdfprintdialog /rp [" + ordmst_id + "]";
        			this.WebBrowser00.set_url(urlMrdHtml);
        		}
        	}

        };

        //선택발주서 확인 버튼
        this.btn2_onclick = function(obj,e)
        {
        	var ordmst_id = "";

        	for(var i = 0 ; i < this.opener.dsOrdMst.rowcount; i++) // 소스 데이터셋 카운트 루핑
        	{
        		if( this.opener.dsOrdMst.getColumn(i, "CHK") == "1" ) // 선택된것만 건수에 포함
        		{
        			nOrdMst_Id = this.opener.dsOrdMst.getColumn(i, "ORDMST_ID");

        			if(ordmst_id.length != 0)
        			{
        			   ordmst_id = ordmst_id + ",";
        			}

        			ordmst_id = ordmst_id + nOrdMst_Id;
        		}
        	}

        	if(ordmst_id.length != 0){
        		if(nOrdMst_Id != "")
        		{

        			rdUrl = gv_svcUrl + "rpt/mk/MK131_list.mrd";
        			rdParam = "/rp [" + ordmst_id + "]";
        			//this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1500, 850);
        			var vScreenWidth = system.getScreenWidth();

        			if(vScreenWidth >= 1920)
        				vScreenWidth = vScreenWidth/2

        			nexacro.open("popupPrt", "mk::MKRDF.xfdl", this.getOwnerFrame(), {rdUrl:rdUrl, rdParam:rdParam}, "autosize=false", 0, 0, vScreenWidth, system.getScreenHeight(), this);
        		}
        	}
        };

        //발주리스트 출력
        this.btn3_onclick = function(obj,e)
        {
        	var ordmst_id = "";

        	for(var i = 0 ; i < this.opener.dsOrdMst.rowcount; i++) // 소스 데이터셋 카운트 루핑
        	{
        		if( this.opener.dsOrdMst.getColumn(i, "CHK") == "1" ) // 선택된것만 건수에 포함
        		{
        			nOrdMst_Id = this.opener.dsOrdMst.getColumn(i, "ORDMST_ID");

        			if(ordmst_id.length != 0)
        			{
        			   ordmst_id = ordmst_id + ",";
        			}

        			ordmst_id = ordmst_id + nOrdMst_Id;
        		}
        	}

        	if(ordmst_id.length != 0){
        		if(nOrdMst_Id != "")
        		{

        			rdUrl = gv_svcUrl + "rpt/mk/MK131_OrderList.mrd";
        			rdParam = "/rp [" + ordmst_id + "]";
        			//this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1500, 850);
        			var vScreenWidth = system.getScreenWidth();

        			if(vScreenWidth >= 1920)
        				vScreenWidth = vScreenWidth/2

        			nexacro.open("popupPrt", "mk::MKRDF.xfdl", this.getOwnerFrame(), {rdUrl:rdUrl, rdParam:rdParam}, "autosize=false", 0, 0, vScreenWidth, system.getScreenHeight(), this);
        		}
        	}
        };

        //선택용지 합산 출력
        this.btn4_onclick = function(obj,e)
        {
        	var ordmst_id = "";

        	for(var i = 0 ; i < this.opener.dsOrdMst.rowcount; i++) // 소스 데이터셋 카운트 루핑
        	{
        		if( this.opener.dsOrdMst.getColumn(i, "CHK") == "1" ) // 선택된것만 건수에 포함
        		{
        			nOrdMst_Id = this.opener.dsOrdMst.getColumn(i, "ORDMST_ID");

        			if(ordmst_id.length != 0)
        			{
        			   ordmst_id = ordmst_id + ",";
        			}

        			ordmst_id = ordmst_id + nOrdMst_Id;
        		}
        	}

        	if(ordmst_id.length != 0){
        		if(nOrdMst_Id != "")
        		{
        			rdUrl = gv_svcUrl + "rpt/mk/MK131_PaperSum.mrd";
        			rdParam = "/rp [" + ordmst_id + "]";
        			//this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1500, 850);
        			var vScreenWidth = system.getScreenWidth();

        			if(vScreenWidth >= 1920)
        				vScreenWidth = vScreenWidth/2

        			nexacro.open("popupPrt", "mk::MKRDF.xfdl", this.getOwnerFrame(), {rdUrl:rdUrl, rdParam:rdParam}, "autosize=false", 0, 0, vScreenWidth, system.getScreenHeight(), this);
        		}
        	}
        };

        //용지+발주리스트  출력
        this.btn5_onclick = function(obj,e)
        {
        	var ordmst_id = "";

        	for(var i = 0 ; i < this.opener.dsOrdMst.rowcount; i++) // 소스 데이터셋 카운트 루핑
        	{
        		if( this.opener.dsOrdMst.getColumn(i, "CHK") == "1" ) // 선택된것만 건수에 포함
        		{
        			nOrdMst_Id = this.opener.dsOrdMst.getColumn(i, "ORDMST_ID");

        			if(ordmst_id.length != 0)
        			{
        			   ordmst_id = ordmst_id + ",";
        			}

        			ordmst_id = ordmst_id + nOrdMst_Id;
        		}
        	}

        	if(ordmst_id.length != 0){
        		if(nOrdMst_Id != "")
        		{
        			rdUrl = gv_svcUrl + "rpt/mk/MK131_PaperSum_Orderlist.mrd";
        			rdParam = "/rp [" + ordmst_id + "]";
        			//this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1500, 850);
        			var vScreenWidth = system.getScreenWidth();

        			if(vScreenWidth >= 1920)
        				vScreenWidth = vScreenWidth/2

        			nexacro.open("popupPrt", "mk::MKRDF.xfdl", this.getOwnerFrame(), {rdUrl:rdUrl, rdParam:rdParam}, "autosize=false", 0, 0, vScreenWidth, system.getScreenHeight(), this);
        		}
        	}
        };

        //팩스발송
        this.btn6_onclick = function(obj,e)
        {
        	var ordmst_id = "";

        	for(var i = 0 ; i < this.opener.dsOrdMst.rowcount; i++) // 소스 데이터셋 카운트 루핑
        	{
        		if( this.opener.dsOrdMst.getColumn(i, "CHK") == "1" ) // 선택된것만 건수에 포함
        		{
        			nOrdMst_Id = this.opener.dsOrdMst.getColumn(i, "ORDMST_ID");

        			if(ordmst_id.length != 0)
        			{
        			   ordmst_id = ordmst_id + ",";
        			}

        			ordmst_id = ordmst_id + nOrdMst_Id;
        		}
        	}

        	var str_url, in_ds, out_ds, str_arg;
        	str_arg = "ORDMST_ID=" + nexacro.wrapQuote(ordmst_id);
        	in_ds = "dsOrderSelect=dsOrderSelect";
        	out_ds = "dsOrderSelect=dsOrderSelect";
        	str_url = "JSP/mk/mk131f_send_fax_list.jsp";

        	this.gfn_TransactionP("search", str_url, in_ds, out_ds, str_arg, "Callback_fax", false, "D", false, this);
        };

        this.Callback_fax = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{

        		this.dsCustSelect.deleteAll();

        		for( i=0; i<this.dsOrderSelect.rowcount; i++ )
        		{
        			if( this.dsOrderSelect.getColumn(i, "CUST") != this.dsOrderSelect.getColumn(i + 1 ,"CUST") )
        			{
        				var nRow = this.dsCustSelect.addRow();
        				this.dsCustSelect.setColumn(nRow ,"CHK"			, this.dsOrderSelect.getColumn(i ,"CHK"));
        				this.dsCustSelect.setColumn(nRow ,"CUST"		, this.dsOrderSelect.getColumn(i ,"CUST"));
        				this.dsCustSelect.setColumn(nRow ,"CUST_GUBN"	, this.dsOrderSelect.getColumn(i ,"CUST_GUBN"));
        				this.dsCustSelect.setColumn(nRow ,"CUST_CODE"	, this.dsOrderSelect.getColumn(i ,"CUST_CODE"));
        				this.dsCustSelect.setColumn(nRow ,"CUST_NAME"	, this.dsOrderSelect.getColumn(i ,"CUST_NAME"));
        				this.dsCustSelect.setColumn(nRow ,"CUST_TEL"	, this.dsOrderSelect.getColumn(i ,"CUST_TEL"));
        				this.dsCustSelect.setColumn(nRow ,"PRODUCT_FAX"	, this.dsOrderSelect.getColumn(i ,"PRODUCT_FAX"));
        			}
        		}

        		var objParam = {dsParam1:this.dsOrderSelect
        					   ,dsParam2:this.dsCustSelect}; //popup 화면으로 전달할 값
        		nexacro.open("popupFax", "mk::MKFax_SendF.xfdl", this.getOwnerFrame(), objParam, "", "", "", 480, 310, this);
        	}
        };

        //팩스발송현황 POPUP
        this.btn7_onclick = function(obj,e)
        {
        	nexacro.open("popupFaxResult", "mk::MKFax_ResultF.xfdl", this.getOwnerFrame(), "", "", "", "", 1080, 650, this);
        };

        //선택용지 재고  출력
        this.btn8_onclick = function(obj,e)
        {
        	var ordmst_id = "";

        	for(var i = 0 ; i < this.opener.dsOrdMst.rowcount; i++) // 소스 데이터셋 카운트 루핑
        	{
        		if( this.opener.dsOrdMst.getColumn(i, "CHK") == "1" ) // 선택된것만 건수에 포함
        		{
        			nOrdMst_Id = this.opener.dsOrdMst.getColumn(i, "ORDMST_ID");

        			if(ordmst_id.length != 0)
        			{
        			   ordmst_id = ordmst_id + ",";
        			}

        			ordmst_id = ordmst_id + nOrdMst_Id;
        		}
        	}

        	if(ordmst_id.length != 0){
        		if(nOrdMst_Id != "")
        		{
        			rdUrl = gv_svcUrl + "rpt/mk/MK131_PaperJego.mrd";
        			rdParam = "/rp [" + ordmst_id + "]";
        			this.lfn_showModal("print", {rdUrl:rdUrl, rdParam:rdParam}, "mk::MKRDF.xfdl", "", this, 0, 0, 1500, 850);
        		}
        	}
        };

        //닫기 버튼
        this.btn9_onclick = function(obj,e)
        {
        	this.close(-1);
        };

        this.WebBrowser00_onloadcompleted = function(obj,e)
        {
        	var sUrl = urlMrdService;
        	var sId = "crownix-viewer";

        	this.WebBrowser00.callMethod("_crownix_createPrint", sUrl, sId, rdUrl, rdParam);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn1.addEventHandler("onmouseenter",this.btn_onmouseenter,this);
            this.btn1.addEventHandler("onmouseleave",this.btn_onmouseleave,this);
            this.btn1.addEventHandler("onclick",this.btn1_onclick,this);
            this.btn2.addEventHandler("onmouseenter",this.btn_onmouseenter,this);
            this.btn2.addEventHandler("onmouseleave",this.btn_onmouseleave,this);
            this.btn2.addEventHandler("onclick",this.btn2_onclick,this);
            this.btn3.addEventHandler("onmouseenter",this.btn_onmouseenter,this);
            this.btn3.addEventHandler("onmouseleave",this.btn_onmouseleave,this);
            this.btn3.addEventHandler("onclick",this.btn3_onclick,this);
            this.btn4.addEventHandler("onmouseenter",this.btn_onmouseenter,this);
            this.btn4.addEventHandler("onmouseleave",this.btn_onmouseleave,this);
            this.btn4.addEventHandler("onclick",this.btn4_onclick,this);
            this.btn5.addEventHandler("onmouseenter",this.btn_onmouseenter,this);
            this.btn5.addEventHandler("onmouseleave",this.btn_onmouseleave,this);
            this.btn5.addEventHandler("onclick",this.btn5_onclick,this);
            this.btn6.addEventHandler("onmouseenter",this.btn_onmouseenter,this);
            this.btn6.addEventHandler("onmouseleave",this.btn_onmouseleave,this);
            this.btn6.addEventHandler("onclick",this.btn6_onclick,this);
            this.btn7.addEventHandler("onmouseenter",this.btn_onmouseenter,this);
            this.btn7.addEventHandler("onmouseleave",this.btn_onmouseleave,this);
            this.btn7.addEventHandler("onclick",this.btn7_onclick,this);
            this.btn8.addEventHandler("onmouseenter",this.btn_onmouseenter,this);
            this.btn8.addEventHandler("onmouseleave",this.btn_onmouseleave,this);
            this.btn8.addEventHandler("onclick",this.btn8_onclick,this);
            this.btn9.addEventHandler("onmouseenter",this.btn_onmouseenter,this);
            this.btn9.addEventHandler("onmouseleave",this.btn_onmouseleave,this);
            this.btn9.addEventHandler("onclick",this.btn9_onclick,this);
            this.WebBrowser00.addEventHandler("onloadcompleted",this.WebBrowser00_onloadcompleted,this);
        };
        this.loadIncludeScript("MK131_Print_LeftMenuF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
