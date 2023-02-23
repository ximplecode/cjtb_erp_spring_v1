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
            this.set_titletext("뜯기비용 내역");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMSTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMSTTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCASENAME\" type=\"STRING\" size=\"256\"/><Column id=\"BNDTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDTL_RUNDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORDMST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"IN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"UNITCOST\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"INT\" size=\"256\"/><Column id=\"AMOUNT_VAT\" type=\"INT\" size=\"256\"/><Column id=\"ORDMST_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","8","10","442","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("뜯기비용 내역");
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
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"123\"/><Column size=\"343\"/><Column size=\"137\"/><Column size=\"68\"/><Column size=\"68\"/><Column size=\"68\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"84\"/><Column size=\"168\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"발주번호\"/><Cell col=\"1\" text=\"도서명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"구분\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"발주수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"입고수량\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"단가\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"공급가액\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"세액\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\" text=\"작업일자\"/><Cell col=\"9\" text=\"거래처\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" maskeditformat=\"@@\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\" expr=\"dataset.getColumn(currow, &quot;ORDMST_DATE&quot;)+&apos;-&apos;+dataset.getColumn(currow, &quot;ORDMST_NO&quot;);\"/><Cell col=\"1\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" wordWrap=\"char\" expr=\"dataset.getColumn(currow, &quot;BOOKMST_CODE&quot;)+&apos;-&apos;+dataset.getColumn(currow, &quot;BOOKMST_SEQ&quot;)+&apos; [&apos;+dataset.getColumn(currow, &quot;BOOKMST_YEAR&quot;)+&apos;] &apos;+dataset.getColumn(currow, &quot;BOOKMST_NAME&quot;);\"/><Cell col=\"2\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" text=\"bind:BND_NAME\" wordWrap=\"char\"/><Cell col=\"3\" text=\"bind:ORD_QTY\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" maskeditformat=\"#,##0\" displaytype=\"mask\" maskeditautoselect=\"true\"/><Cell col=\"4\" text=\"bind:IN_QTY\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" maskeditformat=\"#,##0\" displaytype=\"mask\" maskeditautoselect=\"true\"/><Cell col=\"5\" text=\"bind:UNITCOST\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" maskeditformat=\"#,##0\" displaytype=\"mask\" maskeditautoselect=\"true\"/><Cell col=\"6\" text=\"bind:AMOUNT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" maskeditformat=\"#,##0\" displaytype=\"mask\" maskeditautoselect=\"true\"/><Cell col=\"7\" text=\"bind:AMOUNT_VAT\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"none\" editinputtype=\"normal\" maskeditformat=\"#,##0\" displaytype=\"mask\" maskeditautoselect=\"true\"/><Cell col=\"8\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" maskeditformat=\"@@\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:ORDDTL_RUNDATE\"/><Cell col=\"9\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" expr=\"&apos;(&apos;+dataset.getColumn(currow, &quot;CUST_CODE&quot;)+&apos;) &apos;+dataset.getColumn(currow, &quot;CUST_NAME&quot;);\"/></Band><Band id=\"summary\"><Cell background=\"#fbce78\"/><Cell col=\"1\" background=\"#fbce78\" font=\"bold 14px/normal &quot;함초롬돋움&quot;\" text=\"합 계\"/><Cell col=\"2\" background=\"#fbce78\"/><Cell col=\"3\" background=\"#fbce78\"/><Cell col=\"4\" background=\"#fbce78\"/><Cell col=\"5\" background=\"#fbce78\"/><Cell col=\"6\" background=\"#fbce78\" expr=\"dataset.getSum(&apos;AMOUNT&apos;);\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\" font=\"bold 14px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" background=\"#fbce78\" expr=\"dataset.getSum(&apos;AMOUNT_VAT&apos;);\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\" font=\"bold 14px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" background=\"#fbce78\"/><Cell col=\"9\" background=\"#fbce78\"/></Band></Format></Formats>");
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
        this.addIncludeScript("MK14G_5.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK14G_5.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK14G_5.xfdl", function() {
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
        	str_url = "JSP/mk/mk14G_5_Select.jsp";
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
        this.loadIncludeScript("MK14G_5.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
