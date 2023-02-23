(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD8160F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1600,740);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rpt", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">N</Col><Col id=\"DATA\">수금통보서 관리자(교판)</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"DATA\">수금통보서 관리자(학판)</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"DATA\">수금통보서 관리자(유치)</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"DATA\">수금통보서 관리자(학습지)</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"DATA\">수금통보서 총판용(교판)</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"DATA\">수금통보서 총판용(학판)</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"DATA\">수금통보서 총판용(유치)</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"DATA\">수금통보서 총판용(학습지)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_1", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BEXP_DATE1\" type=\"STRING\" size=\"256\"/><Column id=\"GJD_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"GJD_IN_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"AMT_JAN\" type=\"STRING\" size=\"256\"/><Column id=\"BAMT_JAN\" type=\"STRING\" size=\"256\"/><Column id=\"BILL_JAN\" type=\"STRING\" size=\"256\"/><Column id=\"SIL_JAN\" type=\"STRING\" size=\"256\"/><Column id=\"DAM_YUL\" type=\"STRING\" size=\"256\"/><Column id=\"CHOO_YUL\" type=\"STRING\" size=\"256\"/><Column id=\"JW_AMT_JAN\" type=\"STRING\" size=\"256\"/><Column id=\"JDW_AMT_JAN\" type=\"STRING\" size=\"256\"/><Column id=\"J_YEAR_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"WOL_MCHUL\" type=\"STRING\" size=\"256\"/><Column id=\"IWOL_SUGUM\" type=\"STRING\" size=\"256\"/><Column id=\"CHO_SUGUM\" type=\"STRING\" size=\"256\"/><Column id=\"SALES_SUGUM\" type=\"STRING\" size=\"256\"/><Column id=\"JWOL_T_SUGUM\" type=\"STRING\" size=\"256\"/><Column id=\"JWOL_SUGUM\" type=\"STRING\" size=\"256\"/><Column id=\"SUGUM_SUGUM\" type=\"STRING\" size=\"256\"/><Column id=\"SUGUM_YUL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_3", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BEXP_DATE1\" type=\"STRING\" size=\"256\"/><Column id=\"GJD_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"GJD_IN_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"AMT_JAN\" type=\"STRING\" size=\"256\"/><Column id=\"BAMT_JAN\" type=\"STRING\" size=\"256\"/><Column id=\"SIL_JAN\" type=\"STRING\" size=\"256\"/><Column id=\"DAM_YUL\" type=\"STRING\" size=\"256\"/><Column id=\"CHOO_YUL\" type=\"STRING\" size=\"256\"/><Column id=\"JW_AMT_JAN\" type=\"STRING\" size=\"256\"/><Column id=\"JDW_AMT_JAN\" type=\"STRING\" size=\"256\"/><Column id=\"J_YEAR_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"WOL_MCHUL\" type=\"STRING\" size=\"256\"/><Column id=\"IWOL_SUGUM\" type=\"STRING\" size=\"256\"/><Column id=\"CHO_SUGUM\" type=\"STRING\" size=\"256\"/><Column id=\"SALES_SUGUM\" type=\"STRING\" size=\"256\"/><Column id=\"JWOL_T_SUGUM\" type=\"STRING\" size=\"256\"/><Column id=\"JWOL_SUGUM\" type=\"STRING\" size=\"256\"/><Column id=\"SUGUM_SUGUM\" type=\"STRING\" size=\"256\"/><Column id=\"SUGUM_YUL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_5", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BEXP_DATE1\" type=\"STRING\" size=\"256\"/><Column id=\"GJD_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"GJD_IN_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"AMT_JAN\" type=\"STRING\" size=\"256\"/><Column id=\"BAMT_JAN\" type=\"STRING\" size=\"256\"/><Column id=\"BILL_JAN\" type=\"STRING\" size=\"256\"/><Column id=\"SIL_JAN\" type=\"STRING\" size=\"256\"/><Column id=\"DAM_YUL\" type=\"STRING\" size=\"256\"/><Column id=\"CHOO_YUL\" type=\"STRING\" size=\"256\"/><Column id=\"JW_AMT_JAN\" type=\"STRING\" size=\"256\"/><Column id=\"JDW_AMT_JAN\" type=\"STRING\" size=\"256\"/><Column id=\"J_YEAR_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"WOL_MCHUL\" type=\"STRING\" size=\"256\"/><Column id=\"IWOL_SUGUM\" type=\"STRING\" size=\"256\"/><Column id=\"CHO_SUGUM\" type=\"STRING\" size=\"256\"/><Column id=\"SALES_SUGUM\" type=\"STRING\" size=\"256\"/><Column id=\"JWOL_T_SUGUM\" type=\"STRING\" size=\"256\"/><Column id=\"JWOL_SUGUM\" type=\"STRING\" size=\"256\"/><Column id=\"SUGUM_SUGUM\" type=\"STRING\" size=\"256\"/><Column id=\"SUGUM_YUL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_7", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BEXP_DATE1\" type=\"STRING\" size=\"256\"/><Column id=\"GJD_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"GJD_IN_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"AMT_JAN\" type=\"STRING\" size=\"256\"/><Column id=\"BAMT_JAN\" type=\"STRING\" size=\"256\"/><Column id=\"SIL_JAN\" type=\"STRING\" size=\"256\"/><Column id=\"DAM_YUL\" type=\"STRING\" size=\"256\"/><Column id=\"CHOO_YUL\" type=\"STRING\" size=\"256\"/><Column id=\"JW_AMT_JAN\" type=\"STRING\" size=\"256\"/><Column id=\"JDW_AMT_JAN\" type=\"STRING\" size=\"256\"/><Column id=\"J_YEAR_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"WOL_MCHUL\" type=\"STRING\" size=\"256\"/><Column id=\"IWOL_SUGUM\" type=\"STRING\" size=\"256\"/><Column id=\"CHO_SUGUM\" type=\"STRING\" size=\"256\"/><Column id=\"SALES_SUGUM\" type=\"STRING\" size=\"256\"/><Column id=\"JWOL_T_SUGUM\" type=\"STRING\" size=\"256\"/><Column id=\"JWOL_SUGUM\" type=\"STRING\" size=\"256\"/><Column id=\"SUGUM_SUGUM\" type=\"STRING\" size=\"256\"/><Column id=\"SUGUM_YUL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","25","12","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("일자구간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","150","12","155","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","849","12","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("정렬조건");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01_00_00","974","12","405","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","303","12","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("거래처");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","428","12","423","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_sdate","157","17","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_sgb","435","17","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_scode","475","17","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_value("0000");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Hscust","532","23","19","19",null,null,null,null,null,null,this);
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            obj.set_tabstop("false");
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_egb","595","17","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_ecode","635","17","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_value("0000");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Hecust","692","23","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","564","17","19","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_print_select","981","17","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_rpt");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_text("일자별 출고현황");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_printview","1213","19","90","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("미리보기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print","1310","19","63","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("출력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel","92.00%","56",null,"25","1.50%",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("엑셀변환");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","1.79%","92",null,"630","1.50%",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_formscrolltype("horizontal");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_jong","720","22","121","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("거래중지업체 제외");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1600,740,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD8160F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD8160F.xfdl","Lib::Lib_etc.xjs");
        this.registerScript("SD8160F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;

        var F_ScreenName    = "";					// 화면명
        var	lovflag = true;
        var qryStr ="";								//쿼리
        var Fv_HeadChk1 = 0;                         //체크박스1.
        var Fv_HeadChk2 = 0;                         //체크박스2.
        var Find1_sw  = "N";
        var Find2_sw  = "N";
        var Find3_sw  = "N";
        var Find4_sw  = "N";
        var bgbrnm;


        this.SD8160F_onload = function(obj,e)
        {
        	var objDate = new nexacro.Date();
        	var f_date = Eco.date.getMaskFormatString(objDate, "yyyyMMdd");
        	this.ed_sdate.set_value(f_date);
            this.ed_sgb.set_value("21");
            this.ed_scode.set_value("0000");
            this.ed_egb.set_value("21");
            this.ed_ecode.set_value("9999");

        	this.chk_jong.set_value(true);
        	this.cmb_print_select.set_index(0);
        	this.ed_sdate.setFocus();
        };

        this.btn_Hcust_onclick = function(obj,e)
        {
        	this.lfn_showModal(obj.name, "", "sd::frmCustList.xfdl", "fnCustlistCallBack", this, 0, 0, 590, 555);
        };

        this.fnCustlistCallBack = function(strID, ret)
        {
        	if(ret == null)
        		return;

        	var gubun = ret.substr(0,2);
        	var code =  ret.substr(3,4);

        	if(nexacro.trim(ret) != "0"){
        		if (strID == "btn_Hscust") {
        			this.ed_sgb.set_value(gubun);
        			this.ed_scode.set_value(code);
        		}
        		else if (strID = "btn_Hecust") {
        			this.ed_egb.set_value(gubun);
        			this.ed_ecode.set_value(code);
        		}
        	}
        }

        this.ed_sgb_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		if ((this.ed_sgb.value).length == 2)
        			this.ed_scode.setFocus();
        	}
        	else if (e.keycode == 27)
        		this.ed_sdate.setFocus();
        };

        this.ed_scode_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		if ((this.ed_scode.value).length == 4)
        			this.ed_egb.setFocus();
        	}
        	else if (e.keycode == 27)
        		this.ed_sgb.setFocus();
        };

        this.ed_egb_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		if ((this.ed_egb.value).length == 2)
        			this.ed_ecode.setFocus();
        	}
        	else if (e.keycode == 27)
        		this.ed_scode.setFocus();

        };

        this.ed_ecode_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		if ((this.ed_ecode.value).length == 4)
        			this.chk_jong.setFocus();
        	}
        	else if (e.keycode == 27)
        		this.ed_egb.setFocus();
        };

        this.btn_printview_onclick = function(obj,e)
        {
        	//	시작일 /종료일 / 업체구간 /업체구간 / 도서코드/도서코드 /년판 /년판 /유형조건1 / 유형조건2 / 판매용선택 / 속성코드
        	//rp [20061201][20061215][200000][299999][0000000000][9999999999][2006][2006][1,2,3][01,02,03]/[1]/[]
        	var s_jpno, e_jpno, s_cust, e_cust, p_yh;
        	var s_sql1, s_sql2, s_sql3, s_sql4, s_sql5, Hak_g;
            var Line_sw, jwol_date, jwol_sdate, jyear_dwol_year, jyear_date, jwol_yy, jwol_mm, jwol_dd, h_yy, h_mm, h_dd;
            var jyear_dwol_yy, jyear_dwol_mm, jyear_dwol_dd, jj_wol_yy, jj_wol_mm, h_wol_sdate, h_wol_edate;
        	var rdfile = "";
        	bgbrnm    = "";
            Find1_sw  = "N";
            Find2_sw  = "N";
            Find3_sw  = "N";
            Find4_sw  = "N";
        	var pSbookcode, pEbookcode;
            s_sql1     = "";
            s_sql2     = "";
            s_sql3     = "";
            s_sql4     = "";
            s_sql5     = "";
            h_yy       = (this.ed_sdate.value).substr(0,4);	  //현재년
            h_mm       = (this.ed_sdate.value).substr(4,2);	  //현재월
            h_dd       = (this.ed_sdate.value).substr(6,2);	  //현재일

        	jwol_date  = Eco.date.addMonth(this.ed_sdate.value, -1);    //전월
        	jwol_date  = jwol_date.substr(0,6) + "31";   //전월마지말일자
        	jwol_sdate = jwol_date.substr(0,6) + "01";   //전월시작일자

        	jj_wol_yy        = Eco.date.addMonth(this.ed_sdate.value, -2);    //전전월
        	jj_wol_mm        = jj_wol_yy.substr(4,2);	       //전전월
        	jj_wol_yy        = jj_wol_yy.substr(0,4);	       //전전년

        	h_wol_edate     = Eco.date.addDate(((Eco.date.addMonth(this.ed_sdate.value, 1)).substr(0,6))+"01", -1); //이번달마지말일자
        	h_wol_sdate     = (this.ed_sdate.value).substr(0,6) + "01";  //이번달마지말일자

        	jwol_yy          = jwol_date.substr(0,4);	       //전월년도
        	jwol_mm          = jwol_date.substr(4,2);	       //전월월
        	jwol_dd          = jwol_date.substr(6,2);	       //전월일

        	jyear_dwol_year       = Eco.date.addMonth(this.ed_sdate.value, -12);         //1년전
        	jyear_dwol_year       = jyear_dwol_year.substr(0,6) + "31";	  //1년전월마지막일자
        	jyear_dwol_yy         = jyear_dwol_year.substr(0,4);	      //1년전년
        	jyear_dwol_mm         = jyear_dwol_year.substr(4,2);	      //1년전월
        	jyear_dwol_dd         = jyear_dwol_year.substr(6,2);	      //1년전일

        	jyear_date       = Eco.date.addMonth(this.ed_sdate.value, -12);               //전년

        	if (( this.cmb_print_select.index != 9 ))
        	{
        		if ( this.cmb_print_select.index == 1 )
        		{
        			s_sql4     =   s_sql4  + "  or     sum(a.jgqty) <> 0 ";
        			s_sql4     =   s_sql4  + "  or     sum(a.jgamt) <> 0 ";
        		}
        		else
        		{
        			s_sql4     =   s_sql4  + "  or     sum(c.qty) <> 0 ";
        			s_sql4     =   s_sql4  + "  or     sum(c.amt) <> 0 ";
        		}
        		s_sql4     =   s_sql4  + "  or     sum(a.mqty) <> 0 ";
        		s_sql4     =   s_sql4  + "  or     sum(a.mamt) <> 0 ";

        		if ( this.chk_jong.value == true )
        		{
        			s_sql5     =  " and rtrim(b.eymd) is null ";
        		}
        		var rdopt  = "/rp ["+this.ed_sdate.value+"]"+        //1
        					 "['"+this.ed_sdate.value+"']"+
        					 "["+this.ed_sgb.value+"]"+
        					 "["+this.ed_egb.value+"]"+
        					 "["+this.ed_scode.value+"]"+
        					 "["+this.ed_ecode.value+"]"+
        					 "["+h_yy+"]"+					  //7
        					 "["+h_mm+"]"+					  //8
        					 "["+h_dd+"]"+					  //9
        					 "["+jwol_yy+"]"+				  //10
        					 "["+jwol_mm+"]"+
        					 "["+jwol_dd+"]"+
        					 "["+jwol_date+"]"+              //13
        					 "["+jyear_dwol_yy+"]"+
        					 "["+jyear_dwol_mm+"]"+
        					 "["+jyear_dwol_dd+"]"+
        					 "["+jyear_dwol_year+"]"+        //17
        					 "["+jyear_date+"]"+
        					 "["+s_sql5+"]"+                 //19
        					 "["+h_wol_sdate+"]"+
        					 "["+h_wol_edate+"]"+
        					 "["+jj_wol_yy+"]"+
        					 "["+jj_wol_mm+"]"+
        					 "["+jwol_sdate+"] /ruseswapdisk ";

        		var strArg = "param1="+nexacro.wrapQuote(this.ed_sdate.value)+
        					 "param2="+nexacro.wrapQuote(this.ed_sdate.value)+
        					 "param3="+nexacro.wrapQuote(this.ed_sgb.value)+
        					 "param4="+nexacro.wrapQuote(this.ed_egb.value)+
        					 "param5="+nexacro.wrapQuote(this.ed_scode.value)+
        					 "param6="+nexacro.wrapQuote(this.ed_ecode.value)+
        					 "param7="+nexacro.wrapQuote(h_yy)+
        					 "param8="+nexacro.wrapQuote(h_mm)+
        					 "param9="+nexacro.wrapQuote(h_dd)+
        					 "param10="+nexacro.wrapQuote(jwol_yy)+
        					 "param11="+nexacro.wrapQuote(jwol_mm)+
        					 "param12="+nexacro.wrapQuote(jwol_dd)+
        					 "param13="+nexacro.wrapQuote(jwol_date)+
        					 "param14="+nexacro.wrapQuote(jyear_dwol_yy)+
        					 "param15="+nexacro.wrapQuote(jyear_dwol_mm)+
        					 "param16="+nexacro.wrapQuote(jyear_dwol_dd)+
        					 "param17="+nexacro.wrapQuote(jyear_dwol_year)+
        					 "param18="+nexacro.wrapQuote(jyear_date)+
        					 "param19="+nexacro.wrapQuote(s_sql5)+
        					 "param20="+nexacro.wrapQuote(h_wol_sdate)+
        					 "param21="+nexacro.wrapQuote(h_wol_edate)+
        					 "param22="+nexacro.wrapQuote(jj_wol_yy)+
        					 "param23="+nexacro.wrapQuote(jj_wol_mm)+
        					 "param24="+nexacro.wrapQuote(jwol_sdate);
        		switch(this.cmb_print_select.index)
        		{
        			case 0:
        				if(obj.name == "btn_printview" ) // 미리보기 일때
        				{
        					var strDs = "ds_1=ds_1";
        					this.Div00.set_url("sd::SD8160F_GRID1.xfdl");
        					this.gfn_TransactionP("ds_1","JSP/sd/SD8160F_DS1-2_SELECT.jsp", strDs, strDs, strArg, "fnDSCallback", true, "P", false, this);
        				}
        				else if(obj.name == "btn_print")
        				{
        					rdfile = gv_urlMrd+"/sd/SD8160r.mrd";
        					this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "sd::SDRDF.xfdl", "", this, 0, 0, 1400, 760);
        				}
        				break;
        			case 1:
        				if(obj.name == "btn_printview" ) // 미리보기 일때
        				{
        					var strDs = "ds_1=ds_1";
        					this.Div00.set_url("sd::SD8160F_GRID1.xfdl");
        					this.gfn_TransactionP("ds_2","JSP/sd/SD8160F_DS1-2_SELECT.jsp", strDs, strDs, strArg, "fnDSCallback", true, "P", false, this);
        				}
        				else if(obj.name == "btn_print")
        				{
        					rdfile = gv_urlMrd+"/sd/SD8161r.mrd";
        					this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "sd::SDRDF.xfdl", "", this, 0, 0, 1400, 760);
        				}
        				break;
        			case 2:
        				if(obj.name == "btn_printview" ) // 미리보기 일때
        				{
        					var strDs = "ds_3=ds_3";
        					this.Div00.set_url("sd::SD8160F_GRID3.xfdl");
        					this.gfn_TransactionP("ds_3","JSP/sd/SD8160F_DS3-4_SELECT.jsp", strDs, strDs, strArg, "fnDSCallback", true, "P", false, this);
        				}
        				else if(obj.name == "btn_print")
        				{
        					rdfile = gv_urlMrd+"/sd/SD8162r.mrd";
        					this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "sd::SDRDF.xfdl", "", this, 0, 0, 1400, 760);
        				}
        				break;
        			case 3:
        				if(obj.name == "btn_printview" ) // 미리보기 일때
        				{
        					var strDs = "ds_3=ds_3";
        					this.Div00.set_url("sd::SD8160F_GRID3.xfdl");
        					this.gfn_TransactionP("ds_4","JSP/sd/SD8160F_DS3-4_SELECT.jsp", strDs, strDs, strArg, "fnDSCallback", true, "P", false, this);
        				}
        				else if(obj.name == "btn_print")
        				{
        					rdfile = gv_urlMrd+"/sd/SD8163r.mrd";
        					this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "sd::SDRDF.xfdl", "", this, 0, 0, 1400, 760);
        				}
        				break;
        			case 4:
        				if(obj.name == "btn_printview" ) // 미리보기 일때
        				{
        					var strDs = "ds_5=ds_5";
        					this.Div00.set_url("sd::SD8160F_GRID5.xfdl");
        					this.gfn_TransactionP("ds_5","JSP/sd/SD8160F_DS5-6_SELECT.jsp", strDs, strDs, strArg, "fnDSCallback", true, "P", false, this);
        				}
        				else if(obj.name == "btn_print")
        				{
        					rdfile = gv_urlMrd+"/sd/SD8164r.mrd";
        					this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "sd::SDRDF.xfdl", "", this, 0, 0, 1400, 760);
        				}
        				break;
        			case 5:
        				if(obj.name == "btn_printview" ) // 미리보기 일때
        				{
        					var strDs = "ds_5=ds_5";
        					this.Div00.set_url("sd::SD8160F_GRID5.xfdl");
        					this.gfn_TransactionP("ds_6","JSP/sd/SD8160F_DS5-6_SELECT.jsp", strDs, strDs, strArg, "fnDSCallback", true, "P", false, this);
        				}
        				else if(obj.name == "btn_print")
        				{
        					rdfile = gv_urlMrd+"/sd/SD8165r.mrd";
        					this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "sd::SDRDF.xfdl", "", this, 0, 0, 1400, 760);
        				}
        				break;
        			case 6:
        				if(obj.name == "btn_printview" ) // 미리보기 일때
        				{
        					var strDs = "ds_7=ds_7";
        					this.Div00.set_url("sd::SD8160F_GRID7.xfdl");
        					this.gfn_TransactionP("ds_7","JSP/sd/SD8160F_DS7-8_SELECT.jsp", strDs, strDs, strArg, "fnDSCallback", true, "P", false, this);
        				}
        				else if(obj.name == "btn_print")
        				{
        					rdfile = gv_urlMrd+"/sd/SD8166r.mrd";
        					this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "sd::SDRDF.xfdl", "", this, 0, 0, 1400, 760);
        				}
        				break;
        			case 7:
        				if(obj.name == "btn_printview" ) // 미리보기 일때
        				{
        					var strDs = "ds_7=ds_7";
        					this.Div00.set_url("sd::SD8160F_GRID7.xfdl");
        					this.gfn_TransactionP("ds_8","JSP/sd/SD8160F_DS7-8_SELECT.jsp", strDs, strDs, strArg, "fnDSCallback", true, "P", false, this);
        				}
        				else if(obj.name == "btn_print")
        				{
        					rdfile = gv_urlMrd+"/sd/SD8167r.mrd";
        					this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "sd::SDRDF.xfdl", "", this, 0, 0, 1400, 760);
        				}
        				break;
        		}
        	}
        };

        this.fnDSCallback = function(Trid, ErroCode, ErrorMsg)
        {
        	if(ErroCode != 0)
        		return;
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	this.setWaitCursor(true);
        	this.setTimer(0, 10);
        };

        this.SD8160F_ontimer = function(obj,e)
        {
        	if(e.timerid==0)
        	{
        		this.fnExcellExport();
        	}
        	else
        		this.setWaitCursor(false);
        	this.killTimer(e.timerid);
        };

        this.fnExcellExport = function()
        {
        	var filename;

        	this.exportObj = new ExcelExportObject();
        	if ( this.cmb_print_select.index == 0 ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD8160F_GRID1, "Sheet1!A1");
        		filename = "Excel_1"; } //"일자별 출고현황"
        	else if ( this.cmb_print_select.index == 1 ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD8160F_GRID1, "Sheet1!A1");
        		filename = "Excel_2"; } //"업체별 수금현황"
        	else if ( this.cmb_print_select.index == 2 ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD8160F_GRID3, "Sheet1!A1");
        		filename = "Excel_3"; } //"업체별 수금현황"
        	else if ( this.cmb_print_select.index == 3 ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD8160F_GRID3, "Sheet1!A1");
        		filename = "Excel_4"; } //"업체별 수금현황"
        	else if ( this.cmb_print_select.index == 4 ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD8160F_GRID5, "Sheet1!A1");
        		filename = "Excel_5"; } //"업체별 수금현황"
        	else if ( this.cmb_print_select.index == 5 ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD8160F_GRID5, "Sheet1!A1");
        		filename = "Excel_6"; } //"업체별 수금현황"
        	else if ( this.cmb_print_select.index == 6 ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD8160F_GRID7, "Sheet1!A1");
        		filename = "Excel_7"; } //"업체별 수금현황"
        	else if ( this.cmb_print_select.index == 7 ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD8160F_GRID7, "Sheet1!A1");
        		filename = "Excel_8"; } //"업체별 수금현황"
        	this.exportObj.set_exporturl(gv_urlXeni);
        	this.exportObj.set_exportfilename(filename);
            this.exportObj.exportData();
        	this.setWaitCursor(false);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD8160F_onload,this);
            this.addEventHandler("ontimer",this.SD8160F_ontimer,this);
            this.Static01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static09.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_01_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static00_onclick,this);
            this.ed_sdate.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.ed_sdate.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.ed_sgb.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.ed_sgb.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.ed_sgb.addEventHandler("onkeydown",this.ed_sgb_onkeydown,this);
            this.ed_scode.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.ed_scode.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.ed_scode.addEventHandler("onkeydown",this.ed_scode_onkeydown,this);
            this.btn_Hscust.addEventHandler("onclick",this.btn_Hcust_onclick,this);
            this.ed_egb.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.ed_egb.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.ed_egb.addEventHandler("onkeydown",this.ed_egb_onkeydown,this);
            this.ed_ecode.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.ed_ecode.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.ed_ecode.addEventHandler("onkeydown",this.ed_ecode_onkeydown,this);
            this.btn_Hecust.addEventHandler("onclick",this.btn_Hcust_onclick,this);
            this.cmb_print_select.addEventHandler("onkillfocus",this.common_kill_focus,this);
            this.cmb_print_select.addEventHandler("onsetfocus",this.common_set_focus,this);
            this.cmb_print_select.addEventHandler("onkeydown",this.common_onkeydown,this);
            this.btn_printview.addEventHandler("onclick",this.btn_printview_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_printview_onclick,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
        };
        this.loadIncludeScript("SD8160F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
