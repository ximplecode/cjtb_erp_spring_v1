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
            this.set_titletext("ė í A/Sė ė");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,410);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsErrorDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"ERROR_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ERROR_NO\" type=\"STRING\" size=\"3\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"BUSECD\" type=\"STRING\" size=\"6\"/><Column id=\"BUSE_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"256\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"ERROR_CONTENT\" type=\"STRING\" size=\"1000\"/><Column id=\"ERROR_REASON\" type=\"STRING\" size=\"1000\"/><Column id=\"IMPROVEMENT\" type=\"STRING\" size=\"1000\"/><Column id=\"RESULT_TYPE\" type=\"STRING\" size=\"1\"/><Column id=\"OK_ID\" type=\"STRING\" size=\"6\"/><Column id=\"OK_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"OK_CHK\" type=\"STRING\" size=\"1\"/><Column id=\"RECEIVE_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ORDER_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"1\"/><Column id=\"RESULT_COMMENT\" type=\"STRING\" size=\"1000\"/><Column id=\"RECEPT_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"BOOKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">A/Sė ė</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">ėŽęģ ė ė</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBookMst", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edt_bookYear","229","175","48","35",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_font("bold 12px/normal \"íĻėīëĄŽë°í íėĨ\"");
            obj.set_maxlength("4");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            obj.set_enable("false");
            obj.set_border("1px solid crimson");
            obj.set_color("crimson");
            obj.set_background("blanchedalmond");
            this.addChild(obj.name, obj);

            obj = new Button("btnBookSearch","edt_bookYear:3","175","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("url(\'Img::loupe.png\') no-repeat center center #3cbcb8");
            obj.set_defaultbutton("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","8","7","352","65",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("ė í A/Sė ė");
            obj.set_color("#7fb39d");
            obj.set_font("bold 30px/normal \"íĻėīëĄŽë°í íėĨB\"");
            this.addChild(obj.name, obj);

            obj = new Static("stDate","9","101","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("ė ėėžė");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"íĻėīëĄŽë°í íėĨ\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate","stDate:3","101","160","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"íĻėīëĄŽë°í íėĨ\"");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stGubun","9","138","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("ė ėęĩŽëķ");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"íĻėīëĄŽë°í íėĨ\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Static("stBook","9","175","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("ëėė―ë");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"íĻėīëĄŽë°í íėĨ\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Static("stBuseo","9","212","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("ė ėėē");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"íĻėīëĄŽë°í íėĨ\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Static("stErrorCont","9","249","85","151",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("ėĪëĨëīėĐ");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"íĻėīëĄŽë°í íėĨ\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Static("stWriter","319","101","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("ėėąė");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"íĻėīëĄŽë°í íėĨ\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Static("stBookNm","319","175","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("ëėëŠ");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"íĻėīëĄŽë°í íėĨ\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Static("stQty","319","212","85","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("ėë");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"íĻėīëĄŽë°í íėĨ\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Radio("rdGubun","stGubun:2","138","251","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_innerdataset("dsGubun");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("horizontal");
            obj.set_font("bold 14px/normal \"íĻėīëĄŽë°í íėĨ\"");
            obj.set_color("lightslategray");
            obj.set_fittocontents("none");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_rowcount("2");
            obj.set_columncount("2");
            obj.set_text("ëĻę° \'0\'ėļ ęąī  ");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edBookSeq",null,"175","40","35","edt_bookYear:1",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_font("bold 12px/normal \"íĻėīëĄŽë°í íėĨ\"");
            obj.set_maxlength("3");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            obj.set_enable("false");
            obj.set_border("1px solid crimson");
            obj.set_color("crimson");
            obj.set_background("blanchedalmond");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookCode",null,"175","90","35","edBookSeq:1",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_font("bold 12px/normal \"íĻėīëĄŽë°í íėĨ\"");
            obj.set_maxlength("10");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            obj.set_enable("false");
            obj.set_border("1px solid crimson");
            obj.set_color("crimson");
            obj.set_background("blanchedalmond");
            this.addChild(obj.name, obj);

            obj = new Edit("edBuseo","stBuseo:3","212","160","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_font("12px/normal \"íĻėīëĄŽë°í íėĨ\"");
            obj.set_maxlength("10");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaErrCont","stErrorCont:3","249","595","151",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_wordWrap("char");
            obj.set_font("12px/normal \"íĻėīëĄŽë°í íėĨ\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edWriter","stWriter:3","101","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_font("12px/normal \"íĻėīëĄŽë°í íėĨ\"");
            obj.set_maxlength("10");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edBookNm","stBookNm:3","174","285","35",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_font("12px/normal \"íĻėīëĄŽë°í íėĨ\"");
            obj.set_textAlign("left");
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.set_border("1px solid crimson");
            obj.set_color("crimson");
            obj.set_background("blanchedalmond");
            this.addChild(obj.name, obj);

            obj = new Edit("edQty","stQty:3","212","160","35",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_font("12px/normal \"íĻėīëĄŽë°í íėĨ\"");
            obj.set_maxlength("10");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","10","59","352","49",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("â ė í A/Sė ė");
            obj.set_color("dimgray");
            obj.set_font("bold 20px/normal \"íĻėīëĄŽë°í íėĨB\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImgClose","657","17","31","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_image("url(\'Img::icons8-close.png\')");
            obj.set_border("0px none");
            obj.set_tooltiptext("ëŦęļ°");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"12","80","40","140",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("ė­ė ");
            obj.set_font("bold 14px/normal \"íĻėīëĄŽë°í íėĨ\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"12","80","40","53",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("ė ėĨ");
            obj.set_font("bold 14px/normal \"íĻėīëĄŽë°í íėĨ\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,410,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","txaErrCont","value","dsErrorDtl","ERROR_CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","calSDate","value","dsErrorDtl","RECEIVE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edWriter","value","dsErrorDtl","EMPLOYEE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","rdGubun","value","dsErrorDtl","GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_bookCode","value","dsErrorDtl","BOOKMST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edBookSeq","value","dsErrorDtl","BOOKMST_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_bookYear","value","dsErrorDtl","BOOKMST_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edBookNm","value","dsErrorDtl","BOOKNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edBuseo","value","dsErrorDtl","RECEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edQty","value","dsErrorDtl","QTY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PRODUCT_ERROR_DTL.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("PRODUCT_ERROR_DTL.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("PRODUCT_ERROR_DTL.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var rWORK_TYPE;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var gv_buseCd = nexacro.getApplication().gds_userinfo.getColumn(0,"BUSECD");
        var gv_name = nexacro.getApplication().gds_userinfo.getColumn(0,"NAME");
        var str_url, in_ds, out_ds, str_arg;
        var vStr;

        this.MkMain_onload = function(obj,e)
        {
        	rWORK_TYPE = this.parent.dsParam1;

        	if(rWORK_TYPE == "N")
        	{
        		this.Error_Dtl_New();
        	}

        	this.SET_BTN_CONTROLL();
        	this.txaErrCont.setFocus();

        };

        this.Error_Dtl_New = function()
        {
        	var d = new Date();
        	var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");
        	this.dsErrorDtl.clearData();
        	this.dsErrorDtl.addRow();
        	this.dsErrorDtl.setColumn(0, "ERROR_DATE", strtoDay);
        	this.dsErrorDtl.setColumn(0, "EMPLOYEE_ID", gv_sabun);
        	this.dsErrorDtl.setColumn(0, "EMPLOYEE_NAME", gv_name);
        	this.dsErrorDtl.setColumn(0, "BUSECD", gv_buseCd);
        	this.dsErrorDtl.setColumn(0, "RECEIVE_DATE", strtoDay);
        	this.dsErrorDtl.setColumn(0, "GUBUN", "1");
        	this.dsErrorDtl.setColumn(0, "ORDER_CNT", "0");
            this.dsErrorDtl.setColumn(0, "RECEPT_NAME", "");
        };

        //ëēížėí
        this.SET_BTN_CONTROLL = function()
        {
            this.btnBookSearch.set_visible(true);
        	this.btnDel.set_visible(false);
        	this.btnSave.set_visible(true);

        	//ė íė,ęđė íļė ë ė§ ėė  ę°ëĨíęē íėīėĢžęļ°
        	if(gv_sabun == "C03076" || gv_sabun == "C12165" || gv_sabun == "C10161" || gv_sabun == "C02028")
        		this.calSDate.set_enable(true);
        	else
        		this.calSDate.set_enable(false);
        }

        //ė ėĨ ëēíž
        this.btnSave_onclick = function(obj,e)
        {
        	if(this.edt_bookCode.text.length == 0)
        	{
        		alert("ëėëĨž ė ííīėĢžėļė!!");
        		this.btnBookSearch.setFocus();
        		return false;
        	}

        	if(this.txaErrCont.value == "" || Eco.isUndefined(this.txaErrCont.value) == true || this.txaErrCont.text.length == 0)
        	{
        		alert("ėĪëĨëīėĐė ėë ĨíīėĢžėļė!!");
        		this.txaErrCont.setFocus();
        		return false;
        	}

        	var bRtn = this.confirm("ė ë§ ė ėĨíėęē ėĩëęđ??", "ė í A/Sė ė ė ėĨ");

        	if(bRtn == true)
        	{
        		vStr = "U";
        		this.proc_save(vStr);
        	}
        };

        this.proc_save = function(vStr)
        {
        	in_ds 	= "input=dsErrorDtl";
        	str_url = "JSP/mk/product_new_error_dtl_insert.jsp";
        	this.gfn_TransactionP("insert", str_url, in_ds, "", "", "fctn_DtlSaveCallback", false, vStr, false, this);
        }


        this.fctn_DtlSaveCallback = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{
        		this.opener.rdGubun.set_value(this.rdGubun.value);
        		this.opener.btnSearch_onclick();
        		this.close();
        	}
        };

        this.btnBookSearch_onclick = function(obj,e)
        {
        	var vBookCd, vBookYear;
        	vBookCd = this.edt_bookCode.value;
        	vBookYear = this.edt_bookYear.value;
        	this.dsBookMst.clearData();
        	var objParam = {dsParam1:this.dsBookMst
        				   ,dsParam2:"MK14B"
        				   ,dsParam3:vBookCd
        				   ,dsParam4:vBookYear}; //popup íëĐīėžëĄ ė ëŽí  ę°
        	this.lfn_showModal("popupBook", objParam, "mk::MKBook_SearchF.xfdl", "popupCallback", this, 10, 58, 450, 400);
        };

        this.popupCallback = function(){

        	if(this.dsBookMst.rowcount > 0)
        	{
        		this.dsErrorDtl.setColumn(0, "BOOKMST_CODE", this.dsBookMst.getColumn(0, "BOOKMST_CODE"));
        		this.dsErrorDtl.setColumn(0, "BOOKMST_YEAR", this.dsBookMst.getColumn(0, "BOOKMST_YEAR"));
        		this.dsErrorDtl.setColumn(0, "BOOKMST_NAME", this.dsBookMst.getColumn(0, "BOOKMST_NAME"));
        		this.dsErrorDtl.setColumn(0, "BOOKNAME", this.dsBookMst.getColumn(0, "BOOKMST_NAME"));
        		this.dsErrorDtl.setColumn(0, "BOOKMST_SEQ", this.dsBookMst.getColumn(0, "BOOKMST_SEQ"));
        		this.dsErrorDtl.setColumn(0, "BOOKMST_ID", this.dsBookMst.getColumn(0, "BOOKMST_ID"));
        	}
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
            this.btnBookSearch.addEventHandler("onclick",this.btnBookSearch_onclick,this);
            this.ImgClose.addEventHandler("onclick",this.ImgClose_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
        };
        this.loadIncludeScript("PRODUCT_ERROR_DTL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
