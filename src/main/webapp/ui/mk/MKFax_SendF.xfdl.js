(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MKFax_SendF");
            this.set_titletext("FAX 발송 POPUP");
            if (Form == this.constructor)
            {
                this._setFormPosition(474,320);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOrderSelect", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"ORDMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"CUST\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_FAX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCustSelect", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"CUST\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_FAX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCustFax", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"CUST\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_FILENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","0","474","235",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsCustSelect");
            obj.set_border("#7fb39d");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"33\"/><Column size=\"72\"/><Column size=\"237\"/><Column size=\"111\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell font=\"bold 12px/normal &quot;함초롬돋움&quot;\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"거래처코드\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"거래처명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"FAX번호\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:CUST_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:CUST_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"bind:PRODUCT_FAX\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSend","90","240","90","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("발송");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_border("2px groove #7fb39d");
            obj.set_background("white");
            obj.set_color("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","280","240","90","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_border("2px groove #7fb39d");
            obj.set_background("white");
            obj.set_color("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Static("st_ment","44","283","402","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("▣ 팩스 보낼 업체를 선택 후 발송 버튼을 눌러주세요.");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            obj.set_color("#7fb39d");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","510","20","39","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",474,320,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MKFax_SendF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MKFax_SendF.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MKFax_SendF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        var vChkAll = 0;
        var gv_svcUrl = nexacro.getApplication().gfn_getUrl("svcUrl");
        var urlMrdHtml = nexacro.getApplication().gv_urlMrdHtml;
        var urlMrdService = nexacro.getApplication().gv_urlMrdService;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var rdUrl, rdParam, rdFileName, faxFileName, faxCust;
        var sOrdMst_Id = "";


        this.MKFax_SendF_onload = function(obj,e)
        {
        	this.dsOrderSelect.deleteAll();
        	this.dsCustSelect.deleteAll();
        	this.dsCustFax.deleteAll();

        	this.dsOrderSelect.copyData(this.parent.dsParam1);
        	this.dsCustSelect.copyData(this.parent.dsParam2);
        };


        this.btnSend_onclick = function(obj,e)
        {
        	for(var i = 0 ; i < this.dsCustSelect.rowcount; i++ ) // 소스 데이터셋 카운트 루핑
        	{
        		if (this.dsCustSelect.getColumn(i, "CHK") == "1") // 선택된것만 건수에 포함
        		{
        			this.dsOrderSelect.filter();
        			this.dsOrderSelect.filter("(CUST=='" + this.dsCustSelect.getColumn(i, "CUST") + "')");
        			sOrdMst_Id = "";

        			for (var j = 0 ; j < this.dsOrderSelect.rowcount; j++ )
        			{
        				if(this.dsOrderSelect.getColumn(j, "ORDMST_ID") != this.dsOrderSelect.getColumn(j + 1 ,"ORDMST_ID") )
        					sOrdMst_Id = sOrdMst_Id + "," + this.dsOrderSelect.getColumn(j, "ORDMST_ID");
        			}

        			sOrdMst_Id = sOrdMst_Id.substr(1, sOrdMst_Id.length);

        			if(sOrdMst_Id.length != 0)
        			{
        				var d = new Date();
        				var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMddhhmmss");

        				faxCust = this.dsCustSelect.getColumn(i, "CUST");
        				rdUrl = gv_svcUrl + "rpt/mk/MK131.mrd";
        				rdParam = "/rp [" + sOrdMst_Id + "]";
        				rdFileName = strtoDay+this.dsCustSelect.getColumn(i, "CUST");
        				this.WebBrowser00.set_url(urlMrdHtml);
        				this.WebBrowser00_onloadcompleted();
        			}
        		}
        	}
        };


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

        this.Grid00_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		this.fn_SetGridCheckAll(obj, e);
        	}
        };


        this.fn_SetGridCheckAll = function (obj, e)
        {
        	vChkAll = (vChkAll ? 0 : 1);
        	this.dsCustSelect.set_enableevent(false);
        	for (var i = 0; i < this.dsCustSelect.getRowCount(); i++)
        	{
        		this.dsCustSelect.setColumn(i, "CHK", vChkAll);
        	}
        	this.Grid00.setCellProperty("Head", 0, "expr", vChkAll);
        	this.dsCustSelect.set_enableevent(true);
        };

        this.WebBrowser00_onloadcompleted = function(obj,e)
        {
        	var sUrl = urlMrdService;
        	var sId = "crownix-viewer";

        	this.WebBrowser00.callMethod("_crownix_createFax", sUrl, sId, rdUrl, rdParam, rdFileName);
        };


        this.WebBrowser00_onusernotify = function(obj,e)
        {
        	var ChkSucc = e.userdata;
        	ChkSucc = ChkSucc.toString();

        	if(ChkSucc.substring(0, 1) == 1)
        	{
        		var nArr = ChkSucc.toString().split(",");
        		faxFileName = nArr[1];

        		var faxindex = this.dsCustSelect.findRow("CUST", faxCust);
        		this.dsCustFax.addRow();
        		this.dsCustFax.copyRow(this.dsCustFax.rowposition, this.dsCustSelect, faxindex);
        		this.dsCustFax.setColumn(this.dsCustFax.rowposition, "FAX_FILENAME", faxFileName);
        		this.dsCustSelect.setColumn(faxindex, "CHK", 0);

        		for(var i = 0 ; i < this.dsCustSelect.rowcount; i++ ) //소스 데이터셋 카운트 루핑
        		{
        			if (this.dsCustSelect.getColumn(i, "CHK") == "1") //선택된것만 건수에 포함
        			{
        				this.btnSend_onclick();
        			}
        		}

        		if(this.dsCustSelect.getCaseCount("CHK == '1'") == 0 && this.dsCustFax.rowcount > 0)
        			this.fctn_SendFax();
        	}
        };


        this.fctn_SendFax = function()
        {
        	for(var i = 0 ; i < this.dsCustFax.rowcount; i++ ) //소스 데이터셋 카운트 루핑
        	{
        		var FaxFileNm = this.dsCustFax.getColumn(i, "FAX_FILENAME");
        		var CustNm = this.dsCustFax.getColumn(i, "CUST_NAME");
        		var FaxTel = this.dsCustFax.getColumn(i, "PRODUCT_FAX");
        		var strUrl = "JSP/mk/mk131f_send_kt_fax.jsp";
        		var strArg = "SEND_TITLE=" + nexacro.wrapQuote("제작관리 팩스발송")
        				   + " SEND_NAME=" + nexacro.wrapQuote("(주)천재교육")
        				   + " USER_ID=" + nexacro.wrapQuote(gv_sabun)						//출력한 사람 사번
        				   + " SEND_FILENAME=" + nexacro.wrapQuote(FaxFileNm)				//발주서파일명
        				   + " RECV_NAME=" + nexacro.wrapQuote(CustNm)						//받는 업체명
        				   + " RECV_FAX=" + nexacro.wrapQuote(FaxTel)						//받는 업체팩스번호
        				   + " SEND_ORDERID=" + nexacro.wrapQuote(sOrdMst_Id);				//발주번호

        		this.gfn_TransactionP("chunjae_faxSend" ,strUrl, "", "", strArg, "fn_FaxCallback", false, "P", false, this);
        	}
        };

        this.fn_FaxCallback = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.dsCustFax.deleteAll();
        	this.close(-1);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MKFax_SendF_onload,this);
            this.Grid00.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
            this.btnSend.addEventHandler("onmouseenter",this.btn_onmouseenter,this);
            this.btnSend.addEventHandler("onmouseleave",this.btn_onmouseleave,this);
            this.btnSend.addEventHandler("onclick",this.btnSend_onclick,this);
            this.btnClose.addEventHandler("onmouseenter",this.btn_onmouseenter,this);
            this.btnClose.addEventHandler("onmouseleave",this.btn_onmouseleave,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.WebBrowser00.addEventHandler("onloadcompleted",this.WebBrowser00_onloadcompleted,this);
            this.WebBrowser00.addEventHandler("onusernotify",this.WebBrowser00_onusernotify,this);
        };
        this.loadIncludeScript("MKFax_SendF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
