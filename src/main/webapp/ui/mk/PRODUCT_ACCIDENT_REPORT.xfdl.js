(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MkMain");
            this.set_titletext("제품사고접수 통계 POPUP");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsErrorReport", this);
            obj._setContents("<ColumnInfo><Column id=\"ORDMST_MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"ORDMST_CNT\" type=\"FLOAT\" size=\"256\" prop=\"SUM\"/><Column id=\"ERROR_CNT\" type=\"FLOAT\" size=\"256\" prop=\"SUM\"/><Column id=\"RATE\" type=\"STRING\" size=\"256\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","8","10","352","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("제품사고접수 통계");
            obj.set_color("#7fb39d");
            obj.set_font("bold 30px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose01",null,null,"40","40","-65.37%","113.33%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_image("url(\'theme://images/icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","8","70","332",null,null,"10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsErrorReport");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"170\"/><Column size=\"154\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"32\"/><Row size=\"32\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"해당월\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"사고건수\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:ORDMST_MONTH\" displaytype=\"normal\" combodataset=\"ds_mk_UseType\" combocodecol=\"USE_TYPE_CODE\" combodatacol=\"USE_TYPE_NAME\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" cssclass=\"expr:ERROR_CODE!=&apos;0&apos;?&quot;BgChange4&quot;:&quot;&quot; \" color=\"steelblue\"/><Cell col=\"1\" text=\"bind:ERROR_CNT\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" edittype=\"none\" textAlign=\"right\" cssclass=\"expr:ERROR_CODE!=&apos;0&apos;?&quot;BgChange4&quot;:&quot;&quot; \" displaytype=\"number\" color=\"steelblue\"/></Band><Band id=\"summary\"><Cell background=\"#fbce78\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" text=\"총계\"/><Cell col=\"1\" background=\"#fbce78\" expr=\"dataset.getSum(&apos;ERROR_CNT&apos;);\" font=\"bold 13px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose","309","25","31","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_image("url(\'Img::icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",350,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PRODUCT_ACCIDENT_REPORT.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("PRODUCT_ACCIDENT_REPORT.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("PRODUCT_ACCIDENT_REPORT.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var rSDATE, rEDATE;

        this.MkMain_onload = function(obj,e)
        {
        	rSDATE = this.parent.dsParam1;
        	rEDATE = this.parent.dsParam2;
        	this.Get_Error_Report();
        };

        this.MkMain_onsize = function(obj,e)
        {
        	this.setTimer(0,1);
        };

        this.MkMain_ontimer = function(obj,e)
        {
        	var l;
        	if (obj.getOffsetWidth() < 1300)
        	{
        		l = 0;
        	}
        	else
        	{
        		l = (obj.getOffsetWidth() - 1300) / 2;
        	}

        	trace(l);
        	this.killTimer(0);
        	this.lfn_grdAutofit(this.grdList);

        };

        //조회버튼 클릭
        this.Get_Error_Report = function()
        {
        	in_ds 	= "dsErrorReport=dsErrorReport";
        	out_ds 	= "dsErrorReport=dsErrorReport";
        	str_url = "JSP/mk/product_error_report_select.jsp";
        	str_arg = "SDATE=" + nexacro.wrapQuote(rSDATE)
        			+ " EDATE=" + nexacro.wrapQuote(rEDATE)
        			+ " GUBUN=" + nexacro.wrapQuote("2");

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnCallbackSelect", false, "S", false, this);

        };

        this.fnCallbackSelect = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{

        		if(this.dsErrorReport.rowcount == 0)
        			alert("조회된 자료가 없습니다.");

        	}
        };

        this.setdata_rate = function(rate)
        {
           var rt_rate;
           if (rate <= 0) rt_rate = "S";
           else if (rate <= 0.1) rt_rate = "A";
           else if (rate <= 0.2) rt_rate = "B";
           else if (rate < 0.3) rt_rate = "C";
           else rt_rate = "D";
           return rt_rate;
        }



        this.ImgClose_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkMain_onload,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.grdList.addEventHandler("onheadclick",this.grdList_onheadclick,this);
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.ImgClose.addEventHandler("onclick",this.ImgClose_onclick,this);
        };
        this.loadIncludeScript("PRODUCT_ACCIDENT_REPORT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
