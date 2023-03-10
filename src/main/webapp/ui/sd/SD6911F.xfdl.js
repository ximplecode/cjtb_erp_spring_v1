(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD6911F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_MRKT_RSRCH_MST", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_RSRCH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_JOB\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_EXPRT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_PRSNL\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_ELMNT\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_MIDDLE\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_HIGH\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_JOB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"BUSE\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_CHANNEL\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_EXPRT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_CAREER\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_SEX\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_AGE\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_SCHOOL\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_LV1\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_LV2\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_LV3\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_LV4\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_LV5\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_LV6\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_LV7\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_LV8\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_LV9\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_LV10\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_LV11\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_LV12\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_MRKT_RSRCH_DTL", this);
            obj._setContents("<ColumnInfo><Column id=\"MRKT_RSRCH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MRD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EVLTN_KIND1\" type=\"STRING\" size=\"256\"/><Column id=\"EVLTN_KIND2\" type=\"STRING\" size=\"256\"/><Column id=\"EVLTN_KIND3\" type=\"STRING\" size=\"256\"/><Column id=\"EVLTN_KIND4\" type=\"STRING\" size=\"256\"/><Column id=\"EVLTN_KIND5\" type=\"STRING\" size=\"256\"/><Column id=\"MRKT_OPEN_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"EVLTN_KIND5_MEMO\" type=\"STRING\" size=\"1000\"/><Column id=\"MRKT_THIRD_DATE\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubject", this);
            obj._setContents("<ColumnInfo><Column id=\"MRKT_RSRCH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MR_SBJCT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MR_SBJCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MR_SBJCT_CHECK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MR_SBJCT_CODE\">01</Col><Col id=\"MR_SBJCT_NAME\">??????</Col></Row><Row><Col id=\"MR_SBJCT_CODE\">02</Col><Col id=\"MR_SBJCT_NAME\">??????</Col></Row><Row><Col id=\"MR_SBJCT_CODE\">03</Col><Col id=\"MR_SBJCT_NAME\">??????</Col></Row><Row><Col id=\"MR_SBJCT_CODE\">04</Col><Col id=\"MR_SBJCT_NAME\">??????</Col></Row><Row><Col id=\"MR_SBJCT_CODE\">05</Col><Col id=\"MR_SBJCT_NAME\">??????</Col></Row><Row><Col id=\"MR_SBJCT_CODE\">06</Col><Col id=\"MR_SBJCT_NAME\">??????</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchoolYear", this);
            obj._setContents("<ColumnInfo><Column id=\"MRKT_RSRCH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MR_SCHOOL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MR_SCHOOL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MR_SCHOOL_CHECK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MR_SCHOOL_CODE\">01</Col><Col id=\"MR_SCHOOL_NAME\">??????</Col></Row><Row><Col id=\"MR_SCHOOL_CODE\">02</Col><Col id=\"MR_SCHOOL_NAME\">??????</Col></Row><Row><Col id=\"MR_SCHOOL_CODE\">03</Col><Col id=\"MR_SCHOOL_NAME\">??????</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvltnKind4_cp", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvltnKind5_cp", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","4.88%","1.46%",null,null,"25.50%","85.21%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("???????????? ????????? DB??????");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"??????????????? ??????B\"");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_01","20","85","452","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#f6f7f9");
            obj.set_border("1px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","20","85","80","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("????????????");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","205","85","75","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("1px solid #10aea9");
            obj.set_background("#c3e4cd");
            obj.set_color("#01656f");
            obj.set_textAlign("center");
            obj.set_text("?????????");
            obj.set_font("normal 13px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sabun","356","90","110","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_RSRCH_id","105","90","95","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_format("@@@@@@@@@@@@");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_padding("0px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title","285","90","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mst","20","118","760","332",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_MRKT_RSRCH_MST");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"65\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"55\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"????????????\"/><Cell col=\"2\" text=\"?????????\"/><Cell col=\"3\" text=\"????????????\"/><Cell col=\"4\" text=\"?????????\"/><Cell col=\"5\" text=\"????????????\"/><Cell col=\"6\" text=\"??????\"/><Cell col=\"7\" text=\"??????\"/><Cell col=\"8\" text=\"??????\"/><Cell col=\"9\" text=\"??????\"/><Cell col=\"10\" text=\"????????????\"/><Cell col=\"11\" text=\"??????\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:MRKT_RSRCH_ID\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:MRKT_SABUN\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:MRKT_JOB\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsEvltnKind4_cp\" combodatacol=\"NAME\" combocodecol=\"CODE\"/><Cell col=\"4\" text=\"bind:MRKT_JOB_NAME\"/><Cell col=\"5\" text=\"bind:MRKT_KIND\" combodataset=\"dsEvltnKind5_cp\" combodatacol=\"NAME\" combocodecol=\"CODE\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"6\" text=\"bind:MRKT_PRSNL\"/><Cell col=\"7\" text=\"bind:MRKT_ELMNT\"/><Cell col=\"8\" text=\"bind:MRKT_MIDDLE\"/><Cell col=\"9\" text=\"bind:MRKT_HIGH\"/><Cell col=\"10\" text=\"bind:BUSE\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","671","29","52","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("??????");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","728","29","52","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("??????");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del","604","29","52","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("??????");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,480,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD6911F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD6911F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD6911F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var Fv_HeadChk1 = 0;
        var Fv_HeadChk2 = 0;

        var gv_sabun = this.parent.gv_sabun;

        this.SD6911F_onload = function(obj,e)
        {
        	this.dsEvltnKind4_cp.clearData();
        	this.dsEvltnKind4_cp.copyData(this.opener.dsEvltnKind4);

        	this.dsEvltnKind5_cp.clearData();
        	this.dsEvltnKind5_cp.copyData(this.opener.dsEvltnKind5);
        };

        this.grd_mst_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		if(Fv_HeadChk2 == 0)
        			Fv_HeadChk2 = 1;
        		else
        			Fv_HeadChk2 = 0;

        		this.grd_mst.setCellProperty("head", 0, "text", Fv_HeadChk2);
        		for(var i = 0; i < this.ds_MRKT_RSRCH_MST.rowcount; i++)
        		{
        			this.ds_MRKT_RSRCH_MST.setColumn(i, "CHK", Fv_HeadChk2);
        		}
        	}
        };

        this.grd_mst_oncellclick = function(obj,e)
        {
        	if (e.cell >= 1)	this.close(this.ds_MRKT_RSRCH_MST.getColumn(e.row,"MRKT_RSRCH_ID"));
        };

        this.btn_del_onclick = function(obj,e)
        {
        	var pRowCount=0;

        	var objApp = nexacro.getApplication() ;

        	this.ds_MRKT_RSRCH_MST.filter("");
        	this.ds_MRKT_RSRCH_MST.filter("CHK == '1' ");
        	pRowCount = this.ds_MRKT_RSRCH_MST.rowcount;
        	this.ds_MRKT_RSRCH_MST.filter("");

        	if (pRowCount == 0)
        	{
        		alert( "????????????", "????????? ???????????? ????????????.! \n ????????? ????????? ?????? ???????????????! " ) ;
        		return;
        	}
        	if (msg_result = objApp.confirm( "????????? ???????????? ??????????????? ????????????.\n ?????? ????????????????????????? " , "????????????", "warning" ))
        	{
        		var strArg ="";

        		this.ds_MRKT_RSRCH_MST.filter("");
        		this.ds_MRKT_RSRCH_MST.filter("CHK == '1' ");
        		pRowCount = this.ds_MRKT_RSRCH_MST.rowcount;

        		for(var i=0; i<pRowCount; i++){
        			strArg = " usercode="  + nexacro.wrapQuote(this.ds_MRKT_RSRCH_MST.getColumn(i,"MRKT_SABUN"));
        			strArg += " delete_MRKT_RSRCH_ID="  + nexacro.wrapQuote(this.ds_MRKT_RSRCH_MST.getColumn(i,"MRKT_RSRCH_ID"));
        			strArg += " delete_MRD_SEQ="  + nexacro.wrapQuote(this.ds_MRKT_RSRCH_DTL.getColumn(i,"MRD_SEQ"));

        			this.ds_MRKT_RSRCH_MST.deleteRow(this.ds_MRKT_RSRCH_MST.rowposition);
        		}

        		var strUrl = "JSP/sd/sd6900_mst_tr.jsp";
        		var inDs = "ds_MRKT_RSRCH_MST=ds_MRKT_RSRCH_MST:u ds_MRKT_RSRCH_DTL=ds_MRKT_RSRCH_DTL:u dsSchoolYear=dsSchoolYear:u dsSubject=dsSubject:u";

        		this.gfn_TransactionP("delete", strUrl, inDs, "", strArg, "fnCallback", true, "P", false, this);
        		this.ds_MRKT_RSRCH_MST.filter("");
        	}
        };

        this.fnCallback = function(trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0){
        		alert(ErrorMsg);
        		return;
        	}
        }

        this.btn_search_onclick = function(obj,e)
        {
        	var strUrl = "JSP/sd/sd6911_search.jsp";
        	var strArg;
        	var strDs 	= "ds_MRKT_RSRCH_MST=ds_MRKT_RSRCH_MST ds_MRKT_RSRCH_DTL=ds_MRKT_RSRCH_DTL";

        	strArg = "values0="+nexacro.wrapQuote(gv_sabun);
        	this.gfn_TransactionP("codesearch", strUrl, strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close("cancel");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD6911F_onload,this);
            this.grd_mst.addEventHandler("onheadclick",this.grd_mst_onheadclick,this);
            this.grd_mst.addEventHandler("oncellclick",this.grd_mst_oncellclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
        };
        this.loadIncludeScript("SD6911F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
