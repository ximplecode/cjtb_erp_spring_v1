(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MK111_CopyF_All");
            this.set_titletext("제작관리 도서복사(일괄) POPUP");
            if (Form == this.constructor)
            {
                this._setFormPosition(440,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCopyBookMst", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_PID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_ORDID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_SALE\" type=\"STRING\" size=\"256\"/><Column id=\"PLT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_SIGNATURE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_BODYPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_REGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_MODIDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_HEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_CHKCNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaleChkCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_CNT\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIsmChkCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_CNT\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopyIsmAll", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"ISM_CHKCNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","42","10","198","41",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("도서복사(일괄)");
            obj.set_color("#7fb39d");
            obj.set_font("bold 25px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","6","12","30","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_image("url(\'theme://images/loupe.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"10","55","32","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_font("bold 10pt/normal \"한컴산뜻돋움\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnBCopy",null,"11.61%","140","45","66.82%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("도서복사");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_border("2px groove #7fb39d");
            obj.set_background("white");
            obj.set_color("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Button("btnISMCopy",null,"11.61%","140","45","33.64%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("ISM사양복사");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            obj.set_border("2px groove #7fb39d");
            obj.set_background("white");
            obj.set_color("#7fb39d");
            this.addChild(obj.name, obj);

            obj = new Div("DivBCopy","9","119","426","438",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Static("StMsg","3","2","418","50",null,null,null,null,null,null,this.DivBCopy.form);
            obj.set_taborder("0");
            obj.set_text("현 도서 정보를 복사하려면 신규연판을 입력 후, \r\n복사버튼을 눌러 주십시요.");
            obj.set_wordWrap("char");
            obj.set_font("bold 10pt/normal \"한컴산뜻돋움\"");
            obj.set_letterSpacing("1px");
            this.DivBCopy.addChild(obj.name, obj);

            obj = new Edit("edBookYear","90","56","62","35",null,null,null,null,null,null,this.DivBCopy.form);
            obj.set_taborder("1");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_inputtype("number");
            this.DivBCopy.addChild(obj.name, obj);

            obj = new Static("StSearch01_00","3","56","85","35",null,null,null,null,null,null,this.DivBCopy.form);
            obj.set_taborder("2");
            obj.set_text("신규연판");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivBCopy.addChild(obj.name, obj);

            obj = new Static("StSearch01_00_00","3","95","85","35",null,null,null,null,null,null,this.DivBCopy.form);
            obj.set_taborder("3");
            obj.set_text("복사여부");
            obj.set_background("#7fb39d");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.DivBCopy.addChild(obj.name, obj);

            obj = new CheckBox("cbMst","93","95","113","35",null,null,null,null,null,null,this.DivBCopy.form);
            obj.set_taborder("4");
            obj.set_text("도서기본정보");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_enable("false");
            obj.set_value("true");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.DivBCopy.addChild(obj.name, obj);

            obj = new CheckBox("cbDtl","210","95","113","35",null,null,null,null,null,null,this.DivBCopy.form);
            obj.set_taborder("5");
            obj.set_text("도서세부사양");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_value("true");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.DivBCopy.addChild(obj.name, obj);

            obj = new Button("btnCopy",null,"57","68","62","17",null,null,null,null,null,this.DivBCopy.form);
            obj.set_taborder("6");
            obj.set_text("복사");
            obj.set_font("bold 10pt/normal \"한컴산뜻돋움\"");
            this.DivBCopy.addChild(obj.name, obj);

            obj = new Grid("grdBookMstCopy","3","140","416","289",null,null,null,null,null,null,this.DivBCopy.form);
            obj.set_taborder("7");
            obj.set_binddataset("dsCopyBookMst");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"62\"/><Column size=\"251\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"도서코드\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"도서연판\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"도서명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:BOOKMST_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:BOOKMST_YEAR\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:BOOKMST_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\"/></Band></Format></Formats>");
            this.DivBCopy.addChild(obj.name, obj);

            obj = new Div("DivIsmCopy","9","119","426","438",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Button("btnCopy",null,"40","68","62","7",null,null,null,null,null,this.DivIsmCopy.form);
            obj.set_taborder("0");
            obj.set_text("복사");
            obj.set_font("bold 10pt/normal \"한컴산뜻돋움\"");
            this.DivIsmCopy.addChild(obj.name, obj);

            obj = new Static("st_ment","2","0","402","30",null,null,null,null,null,null,this.DivIsmCopy.form);
            obj.set_taborder("1");
            obj.set_text("▣ 제작인증처리가 되지 않아 복사가 불가능합니다.");
            obj.set_font("bold 16px/normal \"함초롬바탕 확장\"");
            obj.set_color("crimson");
            obj.set_visible("false");
            this.DivIsmCopy.addChild(obj.name, obj);

            obj = new Grid("Grid00","6","40","335","393",null,null,null,null,null,null,this.DivIsmCopy.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsCopyIsmAll");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"202\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"도서코드\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"도서연판\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:BOOKMST_CODE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"bind:BOOKMST_YEAR\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\"/></Band></Format></Formats>");
            this.DivIsmCopy.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",440,560,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK111_CopyF_All.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK111_CopyF_All.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK111_CopyF_All.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var DivName, BtnName, BtnName2;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");
        var rtnBOOKMST_ID, nNBookMst_Id, nBookMst_Id;

        this.MK111_CopyF_All_onload = function(obj,e)
        {
        	this.btnBCopy_onclick();

        	var nRow, tRow;
        	//복사할 도서마스터/ISM정보 데이터셋 초기화
        	this.dsCopyBookMst.clearData();
        	this.dsCopyIsmAll.clearData();
        	for (i=0; i < this.opener.dsBookMst.rowcount; i++)
        	{
        		if(this.opener.dsBookMst.getColumn(i,"CHK") == "1")
        		{
        			nRow = this.dsCopyBookMst.addRow();
        			this.dsCopyBookMst.copyRow(nRow, this.opener.dsBookMst, i);

        			tRow = this.dsCopyIsmAll.addRow();
        			this.dsCopyIsmAll.setColumn(tRow, "BOOKMST_CODE", this.opener.dsBookMst.getColumn(i, "BOOKMST_CODE"));
        			this.dsCopyIsmAll.setColumn(tRow, "BOOKMST_YEAR", this.opener.dsBookMst.getColumn(i, "BOOKMST_YEAR"));
        			this.dsCopyIsmAll.setColumn(tRow, "BOOKMST_ID", this.opener.dsBookMst.getColumn(i, "BOOKMST_ID"));
        		}
        	}
        };

        this.fctn_visible_color = function(DivName, BtnName, BtnName2){

        	if(DivName == true){
        		BtnName.set_background("#7fb39d");
        		BtnName.set_color("#ffffff");
        		BtnName2.set_border("2px groove #7fb39d");
        		BtnName2.set_background("white");
        		BtnName2.set_color("#7fb39d");
        	}
        }

        this.btnBCopy_onclick = function(obj,e)
        {
        	this.DivBCopy.set_visible(true);
        	this.DivIsmCopy.set_visible(false);

        	this.fctn_visible_color(this.DivBCopy.visible, this.btnBCopy, this.btnISMCopy);
        };

        this.btnISMCopy_onclick = function(obj,e)
        {
        	this.DivBCopy.set_visible(false);
        	this.DivIsmCopy.set_visible(true);

        	this.fctn_visible_color(this.DivIsmCopy.visible, this.btnISMCopy, this.btnBCopy);
        };

        this.DivBCopy_btnCopy_onclick = function(obj,e)
        {
        	//영업에 도서코드가 존재하는지 확인
        	this.dsSaleChkCnt.clearData();
        	this.fn_sale_bookinfoAll_chk();

        	var nRow = this.dsCopyBookMst.findRow("SALE_CHKCNT", "0");

        	if(nRow >= 0)
        	{
        		alert("신규년판 영업도서코드가 생성되어 있지 않아 복사가 불가능 합니다.");
        		return false;
        	}

        	//체크한 도서 일괄 COPY -- 20200831 심임주 추가
        	for (var i = 0; i < this.dsCopyBookMst.rowcount; i++)
        	{
        		var nBookMst_Id = this.dsCopyBookMst.getColumn(i, "BOOKMST_ID");

        		var str_arg = "BOOKMST_ID=" + nexacro.wrapQuote(nBookMst_Id) +
        					" EMPLOYEE_ID=" + nexacro.wrapQuote( gv_sabun ) +
        					" BOOKMST_YEAR=" + nexacro.wrapQuote(this.DivBCopy.form.edBookYear.text) +
        					" CHK=" + nexacro.wrapQuote(this.DivBCopy.form.cbDtl.value);
        		this.gfn_TransactionP("copy", "JSP/mk/mk111f_bookmst_copydata.jsp", "", "", str_arg, "", false, "S", false, this);
        	}
        	// 자동 닫기
        	this.btn_close_onclick(obj);
        };

        //영업에 도서코드가 존재하는지 확인
        this.fn_sale_bookinfoAll_chk= function()
        {

        	for (var i = 0; i < this.dsCopyBookMst.rowcount; i++)
        	{
        		var str_arg = "BOOKMST_CODE="  +nexacro.wrapQuote(this.dsCopyBookMst.getColumn(i, "BOOKMST_CODE")) +
        					 " BOOKMST_YEAR=" +nexacro.wrapQuote(this.dsCopyBookMst.getColumn(i, "BOOKMST_YEAR"));
        		var inds 	= "dsSaleChkCnt=dsSaleChkCnt";
        		var outds 	= "dsSaleChkCnt=dsSaleChkCnt";

        		this.gfn_TransactionP("select", "JSP/mk/mk111f_sale_bookinfoAll_chk.jsp", inds, outds, str_arg, "", false, "S", false, this);

        		this.dsCopyBookMst.setColumn(i, "SALE_CHKCNT", this.dsSaleChkCnt.getColumn(0, "CHK_CNT"));
        	}
        }

        this.DivIsmCopy_btnCopy_onclick = function(obj,e)
        {
        	this.dsIsmChkCnt.clearData();
        	this.fn_ism_bookinfoAll_chk();

        	//제작인증이 되어있지 않으면 복사불가
        	var nRow = this.dsCopyIsmAll.findRow("ISM_CHKCNT", "0");
        	if(nRow >= 0)
        	{
        		alert("ISM 제작인증처리가 되지 않아 복사가 불가능합니다.");
        		this.DivIsmCopy.form.st_ment.set_visible(true);
        		return false;
        	}

        	for (var i = 0; i < this.dsCopyIsmAll.rowcount; i++)
        	{
        		var nBookMst_Id = this.dsCopyIsmAll.getColumn(i, "BOOKMST_ID");
        		var str_arg = "BOOKMST_ID="+nexacro.wrapQuote(nBookMst_Id);
        		this.gfn_TransactionP("copy", "JSP/mk/mk111f_Ism_bookinfo_copydata.jsp", "", "", str_arg, "", false, "S", false, this);
        	}

        	this.btn_close_onclick();
        };

        //제작에 ISM인증이 되어있는지 확인
        this.fn_ism_bookinfoAll_chk= function()
        {

        	for (var i = 0; i < this.dsCopyIsmAll.rowcount; i++)
        	{	var str_arg = "BOOKMST_CODE="  +nexacro.wrapQuote(this.dsCopyIsmAll.getColumn(i, "BOOKMST_CODE")) +
        					  " BOOKMST_YEAR=" +nexacro.wrapQuote(this.dsCopyIsmAll.getColumn(i, "BOOKMST_YEAR"));
        		var inds 	= "dsIsmChkCnt=dsIsmChkCnt";
        		var outds 	= "dsIsmChkCnt=dsIsmChkCnt";

        		this.gfn_TransactionP("select", "JSP/mk/mk111f_Ism_bookinfoAll_chk.jsp", inds, outds, str_arg, "", false, "S", false, this);

        		this.dsCopyIsmAll.setColumn(i, "ISM_CHKCNT", this.dsIsmChkCnt.getColumn(0, "CHK_CNT"));
        	}
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close(-1);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MK111_CopyF_All_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btnBCopy.addEventHandler("onclick",this.btnBCopy_onclick,this);
            this.btnISMCopy.addEventHandler("onclick",this.btnISMCopy_onclick,this);
            this.DivBCopy.form.StMsg.addEventHandler("onclick",this.DivBCopy_StMsg_onclick,this);
            this.DivBCopy.form.btnCopy.addEventHandler("onclick",this.DivBCopy_btnCopy_onclick,this);
            this.DivIsmCopy.form.btnCopy.addEventHandler("onclick",this.DivIsmCopy_btnCopy_onclick,this);
        };
        this.loadIncludeScript("MK111_CopyF_All.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
