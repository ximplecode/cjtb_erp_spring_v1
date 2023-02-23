(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GWProduct_SearchF");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(820,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBookMst", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_PID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_ORDID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_TYPE\" type=\"STRING\" size=\"2\"/><Column id=\"BOOKMST_SALE\" type=\"STRING\" size=\"1\"/><Column id=\"PLT_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"BND_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"BOOKMST_SIGNATURE\" type=\"FLOAT\" size=\"7\"/><Column id=\"BOOKMST_BODYPAGE\" type=\"INT\" size=\"3\"/><Column id=\"BOOKMST_REMARK\" type=\"STRING\" size=\"400\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"BOOKMST_REGDATE\" type=\"STRING\" size=\"12\"/><Column id=\"BOOKMST_MODIDATE\" type=\"STRING\" size=\"12\"/><Column id=\"BOOKTBKIND_NAME\" type=\"STRING\" size=\"4\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubject", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"2\"/><Column id=\"NAME\" type=\"STRING\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAttribute", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"ATTRIBUTE_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"ATTRIBUTE_NAME\" type=\"STRING\" size=\"60\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsKind", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"1\"/><Column id=\"NAME\" type=\"STRING\" size=\"20\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">10</Col><Col id=\"NAME\">도서코드 정보</Col></Row><Row><Col id=\"CODE\">20</Col><Col id=\"NAME\">속성코드 정보</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCProduct", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"YY\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_NAME\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCProductAtt", this);
            obj._setContents("<ColumnInfo><Column id=\"POST_DST_ID\" type=\"INT\" size=\"20\"/><Column id=\"ATT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"ATT_NAME\" type=\"STRING\" size=\"60\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close","750","25","51","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_kind","130","67","227","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("dsKind");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_columncount("2");
            obj.set_rowcount("0");
            obj.set_background("#c3e4cd");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookname","73","110","144","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookcode","73","140","144","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookyear","73","170","144","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_attname","73","120","144","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_attcode","73","160","144","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dtl","15","218","368","302",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsBookMst");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"26\"/><Column size=\"80\"/><Column size=\"30\"/><Column size=\"46\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"0\"/><Cell col=\"1\" text=\"도서코드\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"년판\"/><Cell col=\"4\" text=\"도서명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:BOOKMST_CODE\"/><Cell col=\"2\" text=\"bind:BOOKMST_SEQ\"/><Cell col=\"3\" text=\"bind:BOOKMST_YEAR\"/><Cell col=\"4\" text=\"bind:BOOKMST_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_add_book","437","220","368","302",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsCProduct");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"30\"/><Column size=\"40\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"도서코드\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"년판\"/><Cell col=\"3\" text=\"도서명\"/></Band><Band id=\"body\"><Cell text=\"bind:BOOK_CD\"/><Cell col=\"1\" text=\"bind:BOOKMST_SEQ\"/><Cell col=\"2\" text=\"bind:YY\"/><Cell col=\"3\" text=\"bind:BOOK_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","437","191","368","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("적용항목");
            obj.set_textAlign("center");
            obj.set_background("#c3e4cd");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_book_search","240","120","80","55",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("조회하기");
            this.addChild(obj.name, obj);

            obj = new CheckBox("cb_bookresearch","230","182","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("결과내재검색");
            this.addChild(obj.name, obj);

            obj = new CheckBox("cb_attresearch","230","182","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("결과내재검색");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_att_search","240","120","80","55",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("조회하기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_book_add","388","343","44","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_book_del","388","373","44","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_att","15","218","368","302",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_visible("false");
            obj.set_binddataset("dsAttribute");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"26\"/><Column size=\"68\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"0\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"속성코드\"/><Cell col=\"2\" text=\"도서속성명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ATTRIBUTE_CODE\"/><Cell col=\"2\" text=\"bind:ATTRIBUTE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_add_att","437","220","368","302",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_visible("false");
            obj.set_binddataset("dsCProductAtt");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"84\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"도서코드\"/><Cell col=\"1\" text=\"도서명\"/></Band><Band id=\"body\"><Cell text=\"bind:ATT_CD\"/><Cell col=\"1\" text=\"bind:ATT_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_att_add","388","343","44","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("추가");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_att_del","388","373","44","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("삭제");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stt_bookname","12","110","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("도서명");
            obj.set_textAlign("center");
            obj.set_background("#c3e4cd");
            this.addChild(obj.name, obj);

            obj = new Static("stt_bookcode","12","140","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("도서코드");
            obj.set_textAlign("center");
            obj.set_background("#c3e4cd");
            this.addChild(obj.name, obj);

            obj = new Static("stt_bookyear","12","170","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("도서연판");
            obj.set_textAlign("center");
            obj.set_background("#c3e4cd");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","25","67","95","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("도서 직과 기준");
            obj.set_textAlign("center");
            obj.set_background("#c3e4cd");
            this.addChild(obj.name, obj);

            obj = new Static("stt_attname","12","120","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("속성명");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_background("#c3e4cd");
            this.addChild(obj.name, obj);

            obj = new Static("stt_attcode","12","160","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("속성코드");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_background("#c3e4cd");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","26","8","462","45",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("도서정보");
            obj.set_color("#7fb39d");
            obj.set_font("bold 32px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",820,550,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("GWProduct_SearchF.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("GWProduct_SearchF.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("GWProduct_SearchF.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var Fv_HeadChk = 0;

        this.GWProduct_SearchF_onload = function(obj,e)
        {
        	this.rdo_kind.set_index(0);
        	this.dsCProduct.copyData(this.opener.dsProduct);
        	this.dsCProductAtt.copyData(this.opener.dsProductAtt);
        	this.btn_book_search.set_enable(true);
        };

        this.rdo_kind_onitemchanged = function(obj,e)
        {
        	if ( this.rdo_kind.index == 0 )
        	{
        		this.dsCProductAtt.clearData();
        		// 도서코드 보이기
        		this.stt_bookcode.set_visible(true);
        		this.stt_bookname.set_visible(true);
        		this.stt_bookyear.set_visible(true);
        		this.edt_bookname.set_visible(true);
        		this.edt_bookcode.set_visible(true);
        		this.edt_bookyear.set_visible(true);
        		this.cb_bookresearch.set_visible(true);
        		this.btn_book_search.set_visible(true);
        		this.grd_dtl.set_visible(true);
        		this.btn_book_add.set_visible(true);
        		this.btn_book_del.set_visible(true);
        		this.grd_add_book.set_visible(true);

        		// 속성정보 숨기기
        		this.stt_attcode.set_visible(false);
        		this.stt_attname.set_visible(false);
        		this.edt_attname.set_visible(false);
        		this.edt_attcode.set_visible(false);
        		this.cb_attresearch.set_visible(false);
        		this.btn_att_search.set_visible(false);
        		this.grd_att.set_visible(false);
        		this.grd_add_att.set_visible(false);
        		this.btn_att_add.set_visible(false);
        		this.btn_att_del.set_visible(false);
        	}
        	else if ( this.rdo_kind.index == 1 )
        	{
        		this.dsCProduct.clearData();
        		// 속성 정보 보이기
        		this.stt_attcode.set_visible(true);
        		this.stt_attname.set_visible(true);
        		this.edt_attname.set_visible(true);
        		this.edt_attcode.set_visible(true);
        		this.cb_attresearch.set_visible(true);
        		this.btn_att_search.set_visible(true);
        		this.grd_att.set_visible(true);
        		this.grd_add_att.set_visible(true);
        		this.btn_att_add.set_visible(true);
        		this.btn_att_del.set_visible(true);

        		// 도서코드 숨기기
        		this.stt_bookcode.set_visible(false);
        		this.stt_bookname.set_visible(false);
        		this.stt_bookyear.set_visible(false);
        		this.edt_bookname.set_visible(false);
        		this.edt_bookcode.set_visible(false);
        		this.edt_bookyear.set_visible(false);
        		this.cb_bookresearch.set_visible(false);
        		this.btn_book_search.set_visible(false);
        		this.grd_dtl.set_visible(false);
        		this.btn_book_add.set_visible(false);
        		this.btn_book_del.set_visible(false);
        		this.grd_add_book.set_visible(false);
        	}
        };
        // 도서 조회
        this.btn_book_search_onclick = function(obj,e)
        {
        	var bSearch_Set = true;

        	if ( (nexacro.trim(this.edt_bookname.text).length) == 0 && (nexacro.trim(this.edt_bookcode.text).length) == 0 )
        	{
        	   alert("도서명 또는 도서코드를 입력해 주세요");
        	   bSearch_Set = false;
        	}

        	if ((nexacro.trim(this.edt_bookyear.text).length) != 4)
        	{
        	   alert("년판을 입력해 주세요");
        	   bSearch_Set = false;
        	}

        	if (bSearch_Set)
        	{
        		if (this.cb_bookresearch.value == false)
        		{
        			var strUrl = "JSP/pd/pd_BookcodeSerch.jsp";
        			var strArg  = "";
        			var strDs 	= "dsBookMst=dsBookMst";
        			strArg 	= "sBOOKMST_CODE=" + nexacro.wrapQuote( this.edt_bookcode.text ) +
        					  " sBOOKMST_YEAR=" + nexacro.wrapQuote( this.edt_bookyear.text ) +
        					  " eBOOKMST_CODE=" + nexacro.wrapQuote( ) +
        					  " eBOOKMST_YEAR=" + nexacro.wrapQuote( ) +
        					  " sBOOKMST_NAME=" + nexacro.wrapQuote( this.edt_bookname.text ) ;

        			this.gfn_TransactionP("search", strUrl, strDs, strDs, strArg, "fnCallback", true, "P", false, this);
        			this.grd_dtl.setFocus();
        		} else
        		{
        			this.dsBookMst.filter("BOOKMST_NAME.indexOf('" + this.edt_bookname.text + "') >= 0");
        		}
        	}
        };
        // 도서코드 등록
        this.btn_book_add_onclick = function(obj,e)
        {
        	var nRow = 0;
        	for( var j = 0 ; j <= this.dsBookMst.rowcount ; j++)
        	{
        		if (this.dsBookMst.getColumn(j,"CHK") == "1" )
        		{
        			var i = this.dsCProduct.findRow("BOOKMST_ID", this.dsBookMst.getColumn(j, "BOOKMST_ID"));
        			trace(this.dsCProduct.getColumn(i, "BOOKMST_ID"));
        			if (i = -1)
        			{
        				nRow = this.dsCProduct.addRow();

        				this.dsCProduct.setColumn(nRow, "BOOKMST_ID", this.dsBookMst.getColumn(j, "BOOKMST_ID"));
        				this.dsCProduct.setColumn(nRow, "BOOK_CD", this.dsBookMst.getColumn(j, "BOOKMST_CODE"));
        				this.dsCProduct.setColumn(nRow, "YY", this.dsBookMst.getColumn(j, "BOOKMST_YEAR"));
        				this.dsCProduct.setColumn(nRow, "BOOKMST_SEQ", this.dsBookMst.getColumn(j, "BOOKMST_SEQ"));
        				this.dsCProduct.setColumn(nRow, "BOOK_NAME", this.dsBookMst.getColumn(j, "BOOKMST_NAME"));

        			} else
        			{
        				alert(this.dsBookMst.getColumn(j, "BOOKMST_NAME") + "해당도서는 등록되어 있습니다.");
        			}
        			nRow = nRow + 1;
        		}
        	}
        	this.opener.dsProduct.copyData(this.dsCProduct);
        };
        // 도서 삭제
        this.btn_book_del_onclick = function(obj,e)
        {
        	this.dsCProduct.deleteRow(this.dsCProduct.rowposition);
        	this.opener.dsProduct.copyData(this.dsCProduct);
        };
        // 조회된 도서 전체 체크
        this.grd_dtl_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		if(Fv_HeadChk == 0)
        			Fv_HeadChk = 1;
        		else
        			Fv_HeadChk = 0;

        		this.grd_dtl.setCellProperty("head", 0, "text", Fv_HeadChk);

        		for(var i = 0; i < this.dsBookMst.rowcount; i++)
        		{
        			this.dsBookMst.setColumn(i, "CHK", Fv_HeadChk);
        		}
        	}
        };
        // 속성 조회
        this.btn_att_search_onclick = function(obj,e)
        {
        	var bSearch_Set = true;

        	if ( (nexacro.trim(this.edt_attname.text)).length == 0 && (nexacro.trim(this.edt_attcode.text)).length == 0 )
        	{
        	   alert("도서명 또는 도서코드를 입력해 주세요");
        	   bSearch_Set = false;
        	}

        	if (bSearch_Set)
        	{
        		if (this.cb_attresearch.value == false)
        		{
        			var strUrl = "JSP/pd/pd_AttributeSerch.jsp";
        			var strDs 	= "dsAttribute=dsAttribute";
        			var strDs 	= "dsAttribute=dsAttribute";
        			var grade_list, term_list, subject_list;
        			var strArg  = "";

        			strArg 	= "sATTRIBUTE_CODE=" + nexacro.wrapQuote( this.edt_attcode.text ) +
        					  " sATTRIBUTE_NAME=" + nexacro.wrapQuote( this.edt_attname.text );
        			this.gfn_TransactionP("search", strUrl, strDs, strDs, strArg, "fnCallback", false, "P", false, this);
        			this.grd_att.setFocus();
        		} else
        		{
        			this.dsAttribute.filter("ATTRIBUTE_NAME.indexOf('" + this.edt_attname.text + "') >= 0");
        		}
        	}
        };
        // 속성코드 등록
        this.btn_att_add_onclick = function(obj,e)
        {
        	var nRow = 0;
        	for( var j = 0 ; j <= this.dsAttribute.rowcount ; j++)
        	{
        		if (this.dsAttribute.getColumn(j,"CHK") == "1" )
        		{
        			var i = this.dsCProductAtt.findRow("ATT_CD", this.dsAttribute.getColumn(j, "ATTRIBUTE_CODE"));
        			if (i = -1)
        			{
        				nRow = this.dsCProductAtt.addRow();
        				this.dsCProductAtt.setColumn(nRow, "POST_DST_ID", 0);
        				this.dsCProductAtt.setColumn(nRow, "ATT_CD", this.dsAttribute.getColumn(j, "ATTRIBUTE_CODE"));
        				this.dsCProductAtt.setColumn(nRow, "ATT_NAME", this.dsAttribute.getColumn(j, "ATTRIBUTE_NAME"));
        			} else
        			{
        				alert(this.dsAttribute.getColumn(j, "ATTRIBUTE_NAME") + "해당도서는 등록되어 있습니다.");
        			}
        			nRow = nRow + 1;
        		}
        	}
        	this.opener.dsProductAtt.copyData(this.dsCProductAtt);
        };
        // 속성코드 삭제
        this.btn_att_del_onclick = function(obj,e)
        {
        	this.dsCProductAtt.deleteRow(this.dsCProductAtt.rowposition);
        	this.opener.dsProductAtt.copyData(this.dsCProductAtt);
        };
        // edt key down처리
        this.edt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		switch(obj.name)
        		{
        			case 'edt_bookname':
        			case 'edt_bookcode':
        				this.edt_bookyear.setFocus();
        				break;
        			case 'edt_bookyear':
        				this.btn_book_search.click();
        				break;
        			case 'edt_attname':
        			case 'edt_attcode':
        				this.btn_att_search.click();
        				break;
        		}
        	}
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.opener.dsProduct.copyData(this.dsCProduct);
        	this.opener.dsProductAtt.copyData(this.dsCProductAtt);
        	if(this.rdo_kind.index == 0)
        	{
        		this.opener.dsProductAtt.clearData();
        		if( this.opener.dsPostDst.getRowType(this.opener.dsPostDst.rowposition) == '1' || this.opener.dsPostDst.getRowType(this.opener.dsPostDst.rowposition) == '4' ) // nomal or update
        		{
        			this.opener.fnAttlistDeleteTran();
        			this.opener.fnBooklistDeleteTran();
        			this.opener.fnBookListInsertTran(this.opener.dsPostDst.getColumn(this.opener.dsPostDst.rowposition, "POST_DST_ID"));
        			this.opener.fnSelectBookListMstTran();
        		}
        	}
        	else if(this.rdo_kind.index == 1)
        	{
        		this.opener.dsProduct.clearData();
        		if( this.opener.dsPostDst.getRowType(this.opener.dsPostDst.rowposition) == '1' || this.opener.dsPostDst.getRowType(this.opener.dsPostDst.rowposition) == '4' ) // nomal or update
        		{
        			this.opener.fnAttlistDeleteTran();
        			this.opener.fnBooklistDeleteTran();
        			this.opener.fnAttListInsertTran(this.opener.dsPostDst.getColumn(this.opener.dsPostDst.rowposition, "POST_DST_ID"));
        			this.opener.fnSelectAttListMstTran();
        		}
        	}
        	this.close();
        };

        this.fnCallback = function(Trid, ErrorCode, ErrorMsg)
        {
            if (ErrorCode != 0)
        		{alert(ErrorMsg);
        		return;}
        	else if (Trid != null)
        	{
        		Trid = Trid.split("|");
        		Trid = Trid[0]
        	}
        	if (Trid == "search")
        	{
        		trace("[PDProduct_SearchF.fnCallBack] " + Trid +"::"+ ErrorMsg );
        	}
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GWProduct_SearchF_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.rdo_kind.addEventHandler("onitemchanged",this.rdo_kind_onitemchanged,this);
            this.edt_bookname.addEventHandler("onkeydown",this.edt_onkeydown,this);
            this.edt_bookcode.addEventHandler("onkeydown",this.edt_onkeydown,this);
            this.edt_bookyear.addEventHandler("onkeydown",this.edt_onkeydown,this);
            this.edt_attname.addEventHandler("onkeydown",this.edt_onkeydown,this);
            this.edt_attcode.addEventHandler("onkeydown",this.edt_onkeydown,this);
            this.grd_dtl.addEventHandler("onheadclick",this.grd_dtl_onheadclick,this);
            this.grd_add_book.addEventHandler("oncelldblclick",this.btn_book_del_onclick,this);
            this.btn_book_search.addEventHandler("onclick",this.btn_book_search_onclick,this);
            this.btn_att_search.addEventHandler("onclick",this.btn_att_search_onclick,this);
            this.btn_book_add.addEventHandler("onclick",this.btn_book_add_onclick,this);
            this.btn_book_del.addEventHandler("onclick",this.btn_book_del_onclick,this);
            this.grd_add_att.addEventHandler("oncelldblclick",this.btn_att_del_onclick,this);
            this.btn_att_add.addEventHandler("onclick",this.btn_att_add_onclick,this);
            this.btn_att_del.addEventHandler("onclick",this.btn_att_del_onclick,this);
        };
        this.loadIncludeScript("GWProduct_SearchF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
