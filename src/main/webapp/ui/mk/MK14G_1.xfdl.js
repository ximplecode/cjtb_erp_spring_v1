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
            this.set_titletext("인쇄비 내역");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"WORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCASENAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMSTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMSTTYPE_PPRUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMSTTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORDMST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ORDMST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_RUNDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CODEYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORDMST_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"USE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_STNDNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_BUL\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_GANGED\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_TONE\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_JMI\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_UNITCOST\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_AMOUNT\" type=\"INT\" size=\"256\"/><Column id=\"ORDDTL_VAT\" type=\"INT\" size=\"256\"/><Column id=\"ORDDTL_PANQTY\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_PANUNITCOST\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_PANAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_PANVAT\" type=\"STRING\" size=\"256\"/><Column id=\"INCUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"CALAMNT\" type=\"STRING\" size=\"256\"/><Column id=\"CTP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","8","10","442","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("인쇄비 내역");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose","1254","30","31","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_image("url(\'Img::icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("닫기");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","8","78","98.33%",null,null,"20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj.set_autoenter("none");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"89\"/><Column size=\"47\"/><Column size=\"39\"/><Column size=\"211\"/><Column size=\"130\"/><Column size=\"168\"/><Column size=\"79\"/><Column size=\"59\"/><Column size=\"79\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"도서코드\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"년판\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"순번\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"도서명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"발주번호\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"거래처\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"판형\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"부수\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" text=\"용도\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"9\" text=\"규격\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"10\" text=\"색도\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"11\" text=\"수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"12\" text=\"단가\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"13\" text=\"금액\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"14\" text=\"VAT\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"15\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"작업일자\"/></Band><Band id=\"body\"><Cell text=\"bind:BOOKMST_CODE\" displaytype=\"normal\" combodataset=\"ds_mk_UseType\" combocodecol=\"USE_TYPE_CODE\" combodatacol=\"USE_TYPE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:BOOKMST_YEAR\" displaytype=\"normal\" combodataset=\"ds_mk_UseType\" combocodecol=\"USE_TYPE_CODE\" combodatacol=\"USE_TYPE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:BOOKMST_SEQ\" displaytype=\"normal\" combodataset=\"ds_mk_UseType\" combocodecol=\"USE_TYPE_CODE\" combodatacol=\"USE_TYPE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:BOOKMST_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" wordWrap=\"char\"/><Cell col=\"4\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\" expr=\"dataset.getColumn(currow, &quot;ORDMST_DATE&quot;)+&apos;-&apos;+dataset.getColumn(currow, &quot;ORDMST_NO&quot;)+&apos;-&apos;+dataset.getColumn(currow, &quot;ORDDTL_SEQ&quot;);\"/><Cell col=\"5\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" expr=\"&apos;(&apos;+dataset.getColumn(currow, &quot;CUST_CODE&quot;)+&apos;) &apos;+dataset.getColumn(currow, &quot;CUST_NAME&quot;);\"/><Cell col=\"6\" text=\"bind:PLT_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"7\" text=\"bind:ORDMST_QTY\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"8\" text=\"bind:USE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"9\" text=\"bind:PPR_STNDNAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"10\" text=\"bind:ORDDTL_TONE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"11\" text=\"bind:ORDDTL_JMI\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" maskeditformat=\"#,##0\" displaytype=\"mask\" maskeditautoselect=\"true\"/><Cell col=\"12\" text=\"bind:ORDDTL_UNITCOST\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" maskeditformat=\"#,##0\" displaytype=\"mask\" maskeditautoselect=\"true\"/><Cell col=\"13\" text=\"bind:ORDDTL_AMOUNT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" maskeditformat=\"#,##0\" displaytype=\"mask\" maskeditautoselect=\"true\"/><Cell col=\"14\" text=\"bind:ORDDTL_VAT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" maskeditformat=\"#,##0\" displaytype=\"mask\" maskeditautoselect=\"true\"/><Cell col=\"15\" text=\"bind:ORDDTL_RUNDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" maskeditformat=\"@@\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band><Band id=\"summary\"><Cell background=\"#fbce78\"/><Cell col=\"1\" background=\"#fbce78\"/><Cell col=\"2\" background=\"#fbce78\"/><Cell col=\"3\" background=\"#fbce78\" font=\"bold 14px/normal &quot;함초롬돋움&quot;\" text=\"합 계\"/><Cell col=\"4\" background=\"#fbce78\"/><Cell col=\"5\" background=\"#fbce78\"/><Cell col=\"6\" background=\"#fbce78\"/><Cell col=\"7\" background=\"#fbce78\"/><Cell col=\"8\" background=\"#fbce78\"/><Cell col=\"9\" background=\"#fbce78\"/><Cell col=\"10\" background=\"#fbce78\"/><Cell col=\"11\" background=\"#fbce78\"/><Cell col=\"12\" background=\"#fbce78\"/><Cell col=\"13\" background=\"#fbce78\" expr=\"dataset.getSum(&apos;ORDDTL_AMOUNT&apos;);\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\" font=\"bold 14px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"14\" background=\"#fbce78\" expr=\"dataset.getSum(&apos;ORDDTL_VAT&apos;);\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\" font=\"bold 14px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"15\" background=\"#fbce78\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK14G_1.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK14G_1.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK14G_1.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vGB, vOrdMstId, vBookMstId;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");

        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);
        	vGB = this.parent.dsParam1;
        	vOrdMstId = this.parent.dsParam2;
        	vBookMstId = this.parent.dsParam3;
        	this.btnSearch_onclick();

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
        this.btnSearch_onclick = function(obj,e)
        {
        	in_ds 	= "dsList=dsList";
        	out_ds 	= "dsList=dsList";
        	str_url = "JSP/mk/mk14G_1_Select.jsp";
        	str_arg = "GB=" + nexacro.wrapQuote(vGB) +
        	          " ORDMST_ID=" + nexacro.wrapQuote(vOrdMstId) +
        			  " BOOKMST_ID=" + nexacro.wrapQuote(vBookMstId);

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnCallbackSelect", false, "S", false, this);
        };

        this.fnCallbackSelect = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{
        		if(this.dsList.rowcount == 0)
        			alert("조회된 자료가 없습니다.");
        	}
        };

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
            this.ImgClose.addEventHandler("onclick",this.ImgClose_onclick,this);
            this.grdList.addEventHandler("onheadclick",this.grdList_onheadclick,this);
            this.grdList.addEventHandler("onenterdown",this.grdList_onenterdown,this);
        };
        this.loadIncludeScript("MK14G_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
