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
            this.set_titletext("필름 입/출고 관리");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFilm", this);
            obj._setContents("<ColumnInfo><Column id=\"ORDMST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ORDMST_NO\" type=\"STRING\" size=\"4\"/><Column id=\"ORDDTL_SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"ORDMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"PLT_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"PLT_NAME\" type=\"STRING\" size=\"15\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/><Column id=\"ORDMST_QTY\" type=\"INT\" size=\"6\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CUST\" type=\"STRING\" size=\"6\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"35\"/><Column id=\"ORDDTL_PAGE\" type=\"INT\" size=\"3\"/><Column id=\"USE_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"USE_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"ORDDTL_TONE\" type=\"STRING\" size=\"3\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"CHOUTDATE\" type=\"INT\" size=\"1\"/><Column id=\"CHINDATE\" type=\"INT\" size=\"1\"/><Column id=\"ORDDTL_FILMOUTDATE\" type=\"STRING\" size=\"8\"/><Column id=\"ORDDTL_FILMINDATE\" type=\"STRING\" size=\"8\"/><Column id=\"CTP\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">출고일자  </Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">입고일자  </Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">발주일자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGubun1", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">발주번호별</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">도서코드별</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFilmPre", this);
            obj._setContents("<ColumnInfo><Column id=\"ORDMST_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ORDMST_NO\" type=\"STRING\" size=\"4\"/><Column id=\"ORDDTL_SEQ\" type=\"STRING\" size=\"2\"/><Column id=\"ORDMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"PLT_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"PLT_NAME\" type=\"STRING\" size=\"15\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/><Column id=\"ORDMST_QTY\" type=\"INT\" size=\"6\"/><Column id=\"CUST_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CUST\" type=\"STRING\" size=\"6\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"35\"/><Column id=\"ORDDTL_PAGE\" type=\"INT\" size=\"3\"/><Column id=\"USE_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"USE_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"ORDDTL_TONE\" type=\"STRING\" size=\"3\"/><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"6\"/><Column id=\"CHOUTDATE\" type=\"INT\" size=\"1\"/><Column id=\"CHINDATE\" type=\"INT\" size=\"1\"/><Column id=\"ORDDTL_FILMOUTDATE\" type=\"STRING\" size=\"8\"/><Column id=\"ORDDTL_FILMINDATE\" type=\"STRING\" size=\"8\"/><Column id=\"CTP\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBookMst", this);
            obj._setContents("<ColumnInfo><Column id=\"BOOKMST_ID\" type=\"INT\" size=\"20\"/><Column id=\"BOOKMST_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BOOKMST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BOOKMST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKMST_NAME\" type=\"STRING\" size=\"60\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","8","10","346","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("필름 입/출고 관리");
            obj.set_color("#7fb39d");
            obj.set_font("bold 40px/normal \"함초롬바탕 확장B\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"29","80","40","1.54%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"29","80","40","btnSave:7",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdGubun",null,"34","283","35","btnSearch:18",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("dsGubun");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("vertical");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_fittocontents("none");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_background("lightsteelblue");
            obj.set_color("white");
            obj.set_padding("0px 0px 0px 15px");
            obj.set_text("단가 \'0\'인 건  ");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("st1",null,"34","85","35","rdGubun:3",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("조회방법");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edEBookCd",null,"34","120","35","st1:23",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEDate",null,"73","140","35","btnSearch:18",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate",null,"73","140","35","calEDate:3",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stSCustCd",null,"73","85","35","calSDate:3",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회일자");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            obj.set_background("lightsteelblue");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookYear",null,"73","88","35","stSCustCd:178",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stCust1_00",null,"73","85","35","edt_bookYear:3",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("도서년판");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bookCode",null,"34","120","35","edEBookCd:3",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnBook_Search",null,"34","85","35","edt_bookCode:3",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("도서번호");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","8","157","98.85%",null,null,"10",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("dsFilm");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"grdList\"><Columns><Column size=\"102\"/><Column size=\"226\"/><Column size=\"99\"/><Column size=\"62\"/><Column size=\"63\"/><Column size=\"111\"/><Column size=\"169\"/><Column size=\"140\"/><Column size=\"28\"/><Column size=\"102\"/><Column size=\"28\"/><Column size=\"102\"/><Column size=\"53\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"발주일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"1\" text=\"도서명\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"2\" text=\"판형\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"3\" text=\"색도\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"4\" text=\"쪽수\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"5\" text=\"용도\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"6\" text=\"비고\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"7\" text=\"발주처\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"8\" colspan=\"2\" text=\"출고일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"10\" colspan=\"2\" text=\"입고일자\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/><Cell col=\"12\" text=\"CTP\" font=\"bold 12px/normal &quot;함초롬돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:ORDMST_DATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" maskeditformat=\"@@\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"1\" text=\"bind:BOOKMST_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"2\" text=\"bind:PLT_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"3\" text=\"bind:ORDDTL_TONE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"4\" text=\"bind:ORDDTL_PAGE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"right\" edittype=\"normal\" editinputtype=\"number\" maskeditformat=\"#,###\" displaytype=\"number\" editautoselect=\"true\"/><Cell col=\"5\" text=\"bind:USE_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"6\" text=\"bind:PPR_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\"/><Cell col=\"7\" text=\"bind:CUST_NAME\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\" displaytype=\"normal\"/><Cell col=\"8\" text=\"bind:CHOUTDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"checkbox\" editinputtype=\"normal\" displaytype=\"checkboxcontrol\"/><Cell col=\"9\" text=\"bind:ORDDTL_FILMOUTDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"mask\" maskeditformat=\"####-##-##\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendarautoselect=\"true\" calendardisplaynulltype=\"none\" calendardisplayinvalidtype=\"default\" maskeditautoselect=\"true\" maskedittrimtype=\"both\"/><Cell col=\"10\" text=\"bind:CHINDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"checkbox\" editinputtype=\"normal\" displaytype=\"checkboxcontrol\"/><Cell col=\"11\" text=\"bind:ORDDTL_FILMINDATE\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"center\" edittype=\"mask\" maskeditformat=\"####-##-##\" editinputtype=\"normal\" maskedittype=\"string\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendarautoselect=\"true\" calendardisplaynulltype=\"none\" calendardisplayinvalidtype=\"none\" maskeditautoselect=\"true\" maskedittrimtype=\"both\"/><Cell col=\"12\" text=\"bind:CTP\" font=\"normal 12px/normal &quot;함초롬돋움&quot;\" textAlign=\"left\" edittype=\"none\" editinputtype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Radio("rdGubun1",null,"112","283","35","btnSearch:18",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_innerdataset("dsGubun1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("vertical");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_background("lightsteelblue");
            obj.set_color("white");
            obj.set_fittocontents("none");
            obj.set_wordSpacing("0px");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_columncount("0");
            obj.set_rowcount("0");
            obj.set_text("발주번호별");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stCust1_00_00_00",null,"112","85","35","rdGubun1:3",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("정렬방법");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edBookNm",null,"112","243","35","stCust1_00_00_00:23",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_font("12px/normal \"함초롬바탕 확장\"");
            obj.set_maxlength("4");
            obj.set_textAlign("center");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stCust1_00_00",null,"112","85","35","edBookNm:3",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("도서명");
            obj.set_background("lightsteelblue");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"함초롬바탕 확장\"");
            obj.set_color("white");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MK13B.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("MK13B.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("MK13B.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;

        var nRow;
        var str_url, in_ds, out_ds, str_arg;
        var vPerSel, vPerDML, vPerDel;
        var vStr;
        var gv_sabun = nexacro.getApplication().gds_userinfo.getColumn(0,"SABUN");


        this.MkMain_onload = function(obj,e)
        {
        	this.setTimer(0,1);

        	var nRow = nexacro.getApplication().gds_menu.findRow("MN_ID", nexacro.getApplication().gv_selectMenu);

        	vPerSel = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_SELECT");
        	vPerDML = nexacro.getApplication().gds_menu.getColumn(nRow,"UM_PER_DML");

        	//DML권한 체크 및 컴포넌트 ENABLE처리
        	if(vPerDML != "1")
        		this.fctn_User_Enabled(this, false);

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
        	if(this.calSDate.value == "" || Eco.isUndefined(this.calSDate.value) == true )
        	{
        		alert("조회일자를 입력해 주세요.");
        		this.calSDate.setFocus();
        		return false;
        	}


        	if (this.calEDate.value == "" || Eco.isUndefined(this.calEDate.value) == true )
        	{
        		alert("조회일자를 입력해 주세요.");
        		this.calEDate.setFocus();
        		return false;
        	}

        	in_ds 	= "dsFilm=dsFilm";
        	out_ds 	= "dsFilm=dsFilm";
        	str_url = "JSP/mk/mk13bf_film_list.jsp";
        	str_arg = "sBOOKMST_CODE=" + nexacro.wrapQuote( this.edt_bookCode.text ) +
        	          " eBOOKMST_CODE=" + nexacro.wrapQuote( this.edEBookCd.text ) +
        	          " BOOKMST_YEAR=" + nexacro.wrapQuote( this.edt_bookYear.text ) +
        	          " BOOKMST_NAME=" + nexacro.wrapQuote( this.edBookNm.text ) +
        	          " Date_Set=" + nexacro.wrapQuote( this.rdGubun.index ) +
        	          " sDate=" + nexacro.wrapQuote( this.calSDate.value ) +
        	          " eDate=" + nexacro.wrapQuote( this.calEDate.value ) +
        	          " ORDER=" + nexacro.wrapQuote( this.rdGubun1.index ) ;

        	this.gfn_TransactionP("select", str_url, in_ds, out_ds, str_arg, "fnCallbackSelect", false, "S", false, this);

        };


        this.fnCallbackSelect = function(sTrid, nErrorCode, sErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else{
        		if(this.dsFilm.rowcount == 0)
        			alert("조회된 자료가 없습니다.");
        		else
        		{
        			this.dsFilmPre.deleteAll();
        			this.dsFilmPre.copyData(this.dsFilm);
        			this.dsFilm.set_rowposition(0);
        			this.grdList.setCellPos(9);			//출고일자
        			this.grdList.showEditor();
        		}
        	}
        };

        //저장버튼이벤트
        this.btnSave_onclick = function(obj,e)
        {
        	in_ds = "input=dsFilm:U";
        	vStr = vPerDML;
        	this.gfn_TransactionP("save", "JSP/mk/mk13bf_film_dml.jsp", in_ds, "", "", "fnSaveCallback", false, vStr, false, this);
        };

        this.fnSaveCallback = function(Trid, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode != 0)
        	{
        		this.alert(ErrorMsg);
        		return false;
        	}else{
        		this.btnSearch_onclick();
        	}

        };

        this.grdList_onenterdown = function(obj,e)
        {
        	if(this.dsFilm.rowposition != this.dsFilm.getRowCount()-1)
        	{
        		if(e.cell == 9)			//출고일자
        		{
        			var vFilmOutDate = this.dsFilm.getColumn(this.dsFilm.rowposition, "ORDDTL_FILMOUTDATE");

        			if(vFilmOutDate.length == 8 && Eco.isUndefined(vFilmOutDate) == false){
        				this.grdList.setCellPos(11);  //입고일자
        				this.grdList.showEditor();

        			}else{
        				alert("일자의 형식을 확인하여 주십시요.", "날짜 체크 오류");
        				this.grdList.setCellPos(9);		//출고일자
        				this.grdList.showEditor();
        			}
        		}else{

        			var vFilmInDate = this.dsFilm.getColumn(this.dsFilm.rowposition, "ORDDTL_FILMINDATE");

        			if(vFilmInDate.length == 8 && Eco.isUndefined(vFilmInDate) == false){
        				this.dsFilm.set_rowposition(e.row+1);
        				this.grdList.setCellPos(9);		//출고일자
        				this.grdList.showEditor();
        			}else{
        				alert("일자의 형식을 확인하여 주십시요.", "날짜 체크 오류");
        				this.grdList.setCellPos(11);  //입고일자
        				this.grdList.showEditor();
        			}
        		}
        	}
        }

        this.LocalFctn_OnKeyDown = function(obj,e)
        {
        	var curObj = this.getFocus();

        	//ENTER입력시 TAB처럼 이동
        	if(e.keycode == "13"){

        		curObj = this.getNextComponent(curObj, true);
        		curObj.setFocus();

        		//콤보타입일 경우 목록보이게 자동설정
        		if(curObj == "[object Combo]")
        		{
        			if(curObj.index == -1)
        				curObj.dropdown();
        		}
        	}
        };

        //#######################################################
        // 사용권한에 따른 컴포넌트 Enable 여부
        // formObj : 폼 ID 변수
        // _set : Enable 변수 (True, False)
        //#######################################################
        this.fctn_User_Enabled = function(formObj, _set)
        {
        	var comObj;
        	// 마스터 폼 컴포넌트 Enabled 여부
        	for(var i = 0; i < formObj.components.length;  i++)
        	{
        		comObj = formObj.components[i];

        		if (comObj == "[object Edit]" || comObj == "[object Combo]"
        		   || comObj == "[object Calendar]" || comObj == "[object MaskEdit]"
        		   || comObj == "[object TextArea]")
        		{
        			comObj.set_enable(_set);
        		}
        	}

        	if(vPerSel != 1)
        		this.btnSearch.set_enable(_set);

        	if(vPerDML != 1)
        		this.btnSave.set_enable(_set);

        }
        this.dsFilm_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "ORDDTL_FILMOUTDATE" || e.columnid == "ORDDTL_FILMINDATE"){

        		if(e.newvalue.length != 8)
        			e.newvalue = "";
        	}
        };

        this.grdList_oncellclick = function(obj,e)
        {
        	if(e.cell == 8 || e.cell == 10)
        	{

        		var d = new Date();
        		var strtoDay = Eco.date.getMaskFormatString(d, "yyyyMMdd");

        		if(this.grdList.getCellValue(e.row, e.cell) == "1"){
        			if(e.cell == 8)
        				this.dsFilm.setColumn(this.dsFilm.rowposition, "ORDDTL_FILMOUTDATE", strtoDay);
        			else if(e.cell == 10)
        				this.dsFilm.setColumn(this.dsFilm.rowposition, "ORDDTL_FILMINDATE", strtoDay);
        		}else{
        			if(e.cell == 8){
        				var strPreOutDate = this.dsFilmPre.getColumn(this.dsFilm.rowposition, "ORDDTL_FILMOUTDATE");
        				this.dsFilm.setColumn(this.dsFilm.rowposition, "ORDDTL_FILMOUTDATE", strPreOutDate);
        			}else if(e.cell == 10){
        				var strPreInDate = this.dsFilmPre.getColumn(this.dsFilm.rowposition, "ORDDTL_FILMINDATE");
        				this.dsFilm.setColumn(this.dsFilm.rowposition, "ORDDTL_FILMINDATE", strPreInDate);
        			}
        		}
        	}
        };

        this.btnBook_Search_onclick = function(obj,e)
        {
        	var objParam = {dsParam1:this.dsBookMst}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupBook", objParam, "mk::MKBook_SearchF.xfdl", "popupCallback", this, 10, 58, 450, 400);
        };

        this.popupCallback = function(){

        	this.edt_bookCode.set_value(this.dsBookMst.getColumn(0, "BOOKMST_CODE"));
        	this.edEBookCd.set_value(this.dsBookMst.getColumn(0, "BOOKMST_CODE"));
        	this.edt_bookYear.set_value(this.dsBookMst.getColumn(0, "BOOKMST_YEAR"));
        	this.edBookNm.set_value(this.dsBookMst.getColumn(0, "BOOKMST_NAME"));
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MkMain_onload,this);
            this.addEventHandler("onsize",this.MkMain_onsize,this);
            this.addEventHandler("ontimer",this.MkMain_ontimer,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.rdGubun.addEventHandler("onitemchanged",this.rdGubun_onitemchanged,this);
            this.calEDate.addEventHandler("onkeydown",this.LocalFctn_OnKeyDown,this);
            this.calSDate.addEventHandler("onkeyup",this.LocalFctn_OnKeyDown,this);
            this.btnBook_Search.addEventHandler("onclick",this.btnBook_Search_onclick,this);
            this.grdList.addEventHandler("onenterdown",this.grdList_onenterdown,this);
            this.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.dsFilm.addEventHandler("cancolumnchange",this.dsFilm_cancolumnchange,this);
        };
        this.loadIncludeScript("MK13B.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
