(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD1140F");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,1200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_radio", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">1</Col><Col id=\"name\">매출일보(출고)</Col></Row><Row><Col id=\"value\">2</Col><Col id=\"name\">매출일보(반품)</Col></Row><Row><Col id=\"value\">3</Col><Col id=\"name\">매출일보(출고+반품)</Col></Row><Row><Col id=\"value\">4</Col><Col id=\"name\">매출일보(업체구분)</Col></Row><Row><Col id=\"value\">5</Col><Col id=\"name\">매출일보(관리자)</Col></Row><Row><Col id=\"value\">6</Col><Col id=\"name\">매출일보(배송)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmd_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">판매용</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">교사용</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">타계정</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ccode1", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"1\"/><Column id=\"code\" type=\"STRING\" size=\"2\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_1", this);
            obj.set_keystring("BJP");
            obj._setContents("<ColumnInfo><Column id=\"BJP\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"JPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CGB\" type=\"STRING\" size=\"256\"/><Column id=\"CGB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CSU1\" type=\"INT\" size=\"256\"/><Column id=\"BSU1\" type=\"INT\" size=\"256\"/><Column id=\"CCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"BCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"SSU\" type=\"FLOAT\" size=\"256\"/><Column id=\"SCOST\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_2", this);
            obj.set_keystring("BJP");
            obj._setContents("<ColumnInfo><Column id=\"BJP\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"JPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CGB\" type=\"STRING\" size=\"256\"/><Column id=\"CGB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CSU1\" type=\"INT\" size=\"256\"/><Column id=\"BSU1\" type=\"INT\" size=\"256\"/><Column id=\"CCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"BCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"SSU\" type=\"FLOAT\" size=\"256\"/><Column id=\"SCOST\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_3", this);
            obj.set_keystring("BJP");
            obj._setContents("<ColumnInfo><Column id=\"BJP\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"JPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CGB\" type=\"STRING\" size=\"256\"/><Column id=\"CGB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CSU1\" type=\"INT\" size=\"256\"/><Column id=\"BSU1\" type=\"INT\" size=\"256\"/><Column id=\"CCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"BCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"SSU\" type=\"FLOAT\" size=\"256\"/><Column id=\"SCOST\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_4", this);
            obj.set_keystring("BJP");
            obj._setContents("<ColumnInfo><Column id=\"BJP\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"JPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CGB\" type=\"STRING\" size=\"256\"/><Column id=\"CGB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IOYH\" type=\"STRING\" size=\"256\"/><Column id=\"CSU1\" type=\"INT\" size=\"256\"/><Column id=\"BSU1\" type=\"INT\" size=\"256\"/><Column id=\"CCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"BCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"SSU\" type=\"FLOAT\" size=\"256\"/><Column id=\"SCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"CSU11\" type=\"FLOAT\" size=\"256\"/><Column id=\"CSU12\" type=\"FLOAT\" size=\"256\"/><Column id=\"CSU13\" type=\"FLOAT\" size=\"256\"/><Column id=\"BSU11\" type=\"FLOAT\" size=\"256\"/><Column id=\"BSU12\" type=\"FLOAT\" size=\"256\"/><Column id=\"BSU13\" type=\"FLOAT\" size=\"256\"/><Column id=\"CCOST11\" type=\"FLOAT\" size=\"256\"/><Column id=\"CCOST12\" type=\"FLOAT\" size=\"256\"/><Column id=\"CCOST13\" type=\"FLOAT\" size=\"256\"/><Column id=\"BCOST11\" type=\"FLOAT\" size=\"256\"/><Column id=\"BCOST12\" type=\"FLOAT\" size=\"256\"/><Column id=\"BCOST13\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_5", this);
            obj.set_keystring("BJP");
            obj._setContents("<ColumnInfo><Column id=\"KWAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BJP\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"JPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CGB\" type=\"STRING\" size=\"256\"/><Column id=\"CGB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CSU1\" type=\"INT\" size=\"256\"/><Column id=\"BSU1\" type=\"INT\" size=\"256\"/><Column id=\"CCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"BCOST\" type=\"FLOAT\" size=\"256\"/><Column id=\"SSU\" type=\"FLOAT\" size=\"256\"/><Column id=\"SCOST\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_6", this);
            obj.set_keystring("BYMD");
            obj._setContents("<ColumnInfo><Column id=\"BYMD\" type=\"STRING\" size=\"256\"/><Column id=\"JPNO\" type=\"STRING\" size=\"256\"/><Column id=\"JP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CQTY1\" type=\"INT\" size=\"256\"/><Column id=\"CAMT1\" type=\"FLOAT\" size=\"256\"/><Column id=\"TRCD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_01_00_00","10.64%","12",null,"40","67.14%",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_sdate","11.21%","17",null,"30","80.71%",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01","10.57%","88",null,"40","67.07%",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01_00_00","74.50%","12",null,"154","1.00%",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("ed_edate","23.71%","17",null,"30","68.57%",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","21.07%","17",null,"30","77.07%",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_sgb","11.14%","93",null,"30","85.86%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_scode","14.14%","93",null,"30","82%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_value("0000");
            this.addChild(obj.name, obj);

            obj = new Button("btn_scust","18.07%","99",null,"19","80.36%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_egb","23.64%","93",null,"30","73.36%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("##");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_ecode","26.64%","93",null,"30","69.43%",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("####");
            obj.set_type("string");
            obj.set_value("0000");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ecust","30.64%","99",null,"19","67.71%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","21.00%","93",null,"30","77.79%",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","1.79%","210",null,"81.50%","1.00%",null,null,null,null,null,this);
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel","92.50%","171",null,"25","1.00%",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("엑셀변환");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01_00_01","10.57%","126",null,"40","67.00%",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_adduser","11.14%","130",null,"30","84.36%",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("######");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","19.29%","135",null,"21","75.07%",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("반품전표구분");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("Mk_jpgb","24.93%","131",null,"30","72.93%",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("#");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Button("btn_s_saleuser","15.71%","136",null,"19","82.64%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_edge("url(\'Img::ico_grdSrc.png\') 0px 0px");
            obj.set_background("");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00_00_01","10.57%","50",null,"40","67.00%",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","21.00%","55",null,"30","77.64%",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_sjpno","11.14%","55",null,"30","80.64%",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@@@@@@@@@");
            obj.set_type("string");
            obj.set_value("20220101H001");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("ed_ejpno","23.64%","55",null,"30","68.5%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_maskchar("_");
            obj.set_enableevent("true");
            obj.set_accessibilityrole("edit");
            obj.set_format("@@@@@@@@@@@@");
            obj.set_type("string");
            obj.set_value("20220101HzzZ");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_code","42.00%","12",null,"154","34.29%",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_binddataset("ds_ccode1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:code\"/><Cell col=\"2\" text=\"bind:name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("print_select","75.64%","20",null,"30","2.21%",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_radio");
            obj.set_datacolumn("name");
            obj.set_codecolumn("value");
            obj.set_text("일자별 출고현황");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_printview","86.36%","130",null,"25","7.14%",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("미리보기");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print","93.29%","130",null,"25","2.14%",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("출력");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00","65.64%","12",null,"154","25.29%",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("출력물");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00_00","32.79%","12",null,"154","58.00%",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("거래처구분");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1.79%","12",null,"40","89.07%",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("일자구간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","1.79%","88",null,"40","89.07%",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("업체구간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_01","1.79%","50",null,"40","89.07%",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("전표구간");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_01","1.79%","126",null,"40","89.00%",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("관리담당");
            obj.set_background("#ffffff");
            obj.set_color("#10aea9");
            obj.set_font("bold 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_border("2px solid #10aea9");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_i","76%","67",null,"20","13.29%",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("이체전표제외");
            this.addChild(obj.name, obj);

            obj = new CheckBox("C_i1","76%","99",null,"20","13.29%",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("이체전표만");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1400,1200,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SD1140F.xfdl","Lib::Lib_service.xjs");
        this.addIncludeScript("SD1140F.xfdl","Lib::Lib_etc.xjs");
        this.addIncludeScript("SD1140F.xfdl","Lib::Lib_sd.xjs");
        this.registerScript("SD1140F.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_service.xjs"); /*include "Lib::Lib_service.xjs"*/;
        this.executeIncludeScript("Lib::Lib_etc.xjs"); /*include "Lib::Lib_etc.xjs"*/;
        this.executeIncludeScript("Lib::Lib_sd.xjs"); /*include "Lib::Lib_sd.xjs"*/;

        //--------------------------------------------------------------
        // 폼 전역변수 선언
        //--------------------------------------------------------------
        var F_ScreenName    = "";					// 화면명
        var	lovflag = true;
        var qryStr ="";								//쿼리
        var printqry_1 = "";						//쿼리 유형.
        var printqry_2 = "";						//쿼리 유형.
        var Fv_HeadChk1 = 0;                         //체크박스1.
        var Fv_HeadChk2 = 0;                         //체크박스1.
        var Fv_HeadChk3 = 0;                         //체크박스1.
        var Fv_HeadChk4 = 0;                         //체크박스1.
        var Find1_sw  = "N";
        var Find2_sw  = "N";
        var Find3_sw  = "N";
        var Find4_sw  = "N";
        var Find5_sw  = "N";
        var Gv_BookYear = this.lfn_sd_getBookYear(); // 영업관리 년판 세팅 얻어오기
        var bgbrnm;

        var gv_urlMrd = nexacro.getApplication().gv_urlMrd;
        var gv_urlXeni = nexacro.getApplication().gv_urlXeni;
        var gv_urlRdDataServer = nexacro.getApplication().gv_urlRdDataServer;

        //----------------------------------------------------------------------------------------
        //
        //  사용자정의 함수..
        //
        //----------------------------------------------------------------------------------------

        this.sqlCreate = function(event_id)
        {
        	//	 도서코드/도서코드 /기간 /기간 / 업체구간 /업체구간 /등급/학기/판매용구분/주/초/중/고/등록자/부수체크/ioyh/bgbr/custgb/속성코드/판매유형/도서구분
        	//rp [0000000000][9999999999][20061220][20061222][200000][299999][00,01][00,01][0][][][][][][busu][][][][][출고,증정][시험지,답안]
        	var s_cust, e_cust, p_yh;
        	var s_sql1, s_sql2, s_sql3, s_sql4, Hak_g;
            var Line_sw, rdopt;
        	bgbrnm    = "";
            Find1_sw  = "N";
            Find2_sw  = "N";
            Find3_sw  = "N";
            Find4_sw  = "N";
            Find5_sw  = "N";

        	var custcode  = this.Gridcheck("dsCode");
        	var rdfile = this.selectfile(this.print_select.value);
            s_cust     =  this.ed_sgb.value + this.ed_scode.value;
            e_cust     =  this.ed_egb.value + this.ed_ecode.value;
            s_sql1     = "";
            s_sql2     = "";
            s_sql3     = "";
            s_sql4     = "";
        	bgbrnm  = bgbrnm.substr(0,bgbrnm.length-1);

            if ((this.print_select.value == 1) || (this.print_select.value == 2) || (this.print_select.value == 3) || (this.print_select.value == 4) || (this.print_select.value == 5))
        	{
        		if ((this.print_select.value != 2) && (this.print_select.value != 4))
        		{
        			s_sql1     = "  SELECT A.JP_GB,A.JPNO, A.cust_gb, A.cust_cd, ";
        			s_sql1     = s_sql1 + "    sum(B.QTY) cqty1, sum(B.AMT) camt1, ";
        			s_sql1     = s_sql1 + "     0   b_qty1, 0 b_amt1 ";
        			s_sql1     = s_sql1 + "FROM SALE.MEIO_M A, SALE.MEIO_D B ";
        			s_sql1     = s_sql1 + " WHERE  A.bymd >=  '" + this.ed_sdate.value +"'";
        			s_sql1     = s_sql1 + "    AND A.bymd <=  '" + this.ed_edate.value +"'";
        			s_sql1     = s_sql1 + "    and ( A.cust_gb || A.CUST_CD ) >= '" + s_cust +"'";
        			s_sql1     = s_sql1 + "    and ( A.cust_gb || A.CUST_CD ) <= '" + e_cust +"'";
        			s_sql1     = s_sql1 + "    and A.jp_gb =  '3' ";
        			if ( this.C_i.value == true )
        			{
        				s_sql1     = s_sql1 + "    AND substr(A.jpno,9,1) <>  '5' ";
        			}
        			if ( this.C_i1.value == true )
        			{
        				s_sql1     = s_sql1 + "    AND substr(A.jpno,9,1) =  '5' ";
        			}
        			s_sql1     = s_sql1 + "    AND A.jpno >=  '" + this.ed_sjpno.value +"'";
        			s_sql1     = s_sql1 + "    AND A.jpno <=  '" + this.ed_ejpno.value +"'";
        			if ( this.ed_sjpno.value.substr(8,1) == this.ed_ejpno.value.substr(8,1) )
        			{
        				s_sql1     = s_sql1 + "    AND substr(A.jpno,9,1) =  '" + this.ed_sjpno.value.substr(8,1) +"'";
        				s_sql1     = s_sql1 + "    AND substr(A.jpno,10,3) >=  '" + this.ed_sjpno.value.substr(9,3) +"'";
        				s_sql1     = s_sql1 + "    AND substr(A.jpno,10,3) <=  '" + this.ed_ejpno.value.substr(9,3) +"'";
        			}
        			s_sql1     = s_sql1 + "    and A.JPNO    = B.JPNO ";
        			s_sql1     = s_sql1 + "    AND A.JP_GB   = B.JP_GB ";
        			s_sql1     = s_sql1 + " group by A.JP_GB,A.JPNO,a.cust_gb, a.cust_cd  ";
        		}
        		if (this.print_select.value == 4)
        		{
        			s_sql1     = "  SELECT A.JP_GB,A.JPNO, A.cust_gb, A.cust_cd,b.ioyh_cd, ";
        			s_sql1     = s_sql1 + "    sum(B.QTY) cqty1, sum(B.AMT) camt1, ";
        			s_sql1     = s_sql1 + "     0   b_qty1, 0 b_amt1 ";
        			s_sql1     = s_sql1 + "FROM SALE.MEIO_M A, SALE.MEIO_D B ";
        			s_sql1     = s_sql1 + " WHERE  A.bymd >=  '" + this.ed_sdate.value +"'";
        			s_sql1     = s_sql1 + "    AND A.bymd <=  '" + this.ed_edate.value +"'";
        			s_sql1     = s_sql1 + "    and ( A.cust_gb || A.CUST_CD ) >= '" + s_cust +"'";
        			s_sql1     = s_sql1 + "    and ( A.cust_gb || A.CUST_CD ) <= '" + e_cust +"'";
        			s_sql1     = s_sql1 + "    and A.jp_gb =  '3' ";
        			s_sql1     = s_sql1 + "    AND A.jpno >=  '" + this.ed_sjpno.value +"'";
        			s_sql1     = s_sql1 + "    AND A.jpno <=  '" + this.ed_ejpno.value +"'";
        			if ( this.ed_sjpno.value.substr(8,1) == this.ed_ejpno.value.substr(8,1) )
        			{
        				s_sql1     = s_sql1 + "    AND substr(A.jpno,9,1) =  '" + this.ed_sjpno.value.substr(8,1) +"'";
        				s_sql1     = s_sql1 + "    AND substr(A.jpno,10,3) >=  '" + this.ed_sjpno.value.substr(9,3) +"'";
        				s_sql1     = s_sql1 + "    AND substr(A.jpno,10,3) <=  '" + this.ed_ejpno.value.substr(9,3) +"'";
        			}
        			s_sql1     = s_sql1 + "    and A.JPNO    = B.JPNO ";
        			s_sql1     = s_sql1 + "    AND A.JP_GB   = B.JP_GB ";
        			s_sql1     = s_sql1 + " group by A.JP_GB,A.JPNO,a.cust_gb, a.cust_cd, b.ioyh_cd ";
        		}
        		if ((this.print_select.value != 1) && (this.print_select.value != 2))
        		{
        			s_sql1     = s_sql1 + "    union all ";
        		}
        		if ((this.print_select.value != 1) && (this.print_select.value != 4))
        		{
        			s_sql2     = "  SELECT A.JP_GB,A.JPNO, A.cust_gb, A.cust_cd, ";
        			s_sql2     = s_sql2 + "     0 cqty1, 0 camt1, ";
        			s_sql2     = s_sql2 + "     sum(B.QTY) b_qty1, sum(B.AMT) b_amt1 ";
        			s_sql2     = s_sql2 + "FROM SALE.MEIB_M A, SALE.MEIB_D B ";
        			s_sql2     = s_sql2 + " WHERE A.bymd >=  '" + this.ed_sdate.value +"'";
        			s_sql2     = s_sql2 + " AND A.bymd <=  '" + this.ed_edate.value +"'";
        			s_sql2     = s_sql2 + "    and  ( A.cust_gb || A.CUST_CD ) >= '" + s_cust +"'";
        			s_sql2     = s_sql2 + "    and  ( A.cust_gb || A.CUST_CD ) <= '" + e_cust +"'";
        			s_sql2     = s_sql2 + "    and A.jp_gb =  '4' ";
        			s_sql2     = s_sql2 + "    AND A.jpno >=  '" + this.ed_sjpno.value +"'";
        			s_sql2     = s_sql2 + "    AND A.jpno <=  '" + this.ed_ejpno.value +"'";
        			if ( this.Mk_jpgb.value != undefined )
        			{
        				s_sql2     = s_sql2 + "    AND substr(A.jpno,9,1) =  '" + this.Mk_jpgb.value +"'";
        			}
        			if ( this.C_i.value == true )
        			{
        				s_sql2     = s_sql2 + "    AND substr(A.jpno,9,1) <>  '5' ";
        			}
        			if ( this.C_i1.value == true )
        			{
        				s_sql2     = s_sql2 + "    AND substr(A.jpno,9,1) =  '5' ";
        			}
        			if (( this.ed_sjpno.value.substr(8,1) == "5" ) && ( this.ed_sjpno.value.substr(8,1) == this.ed_ejpno.value.substr(8,1) ))
        			{
        				s_sql2     = s_sql2 + "    AND substr(A.jpno,9,1) =  '" + this.ed_sjpno.value.substr(8,1) +"'";
        				s_sql2     = s_sql2 + "    AND substr(A.jpno,10,3) >=  '" + this.ed_sjpno.value.substr(9,3) +"'";
        				s_sql2     = s_sql2 + "    AND substr(A.jpno,10,3) <=  '" + this.ed_ejpno.value.substr(9,3) +"'";
        			}
        			s_sql2     = s_sql2 + " and A.JPNO    = B.JPNO ";
        			s_sql2     = s_sql2 + " AND A.JP_GB   = B.JP_GB ";
        			s_sql2     = s_sql2 + " group by A.JP_GB,A.JPNO,a.cust_gb, a.cust_cd ";
        		}
        		if (this.print_select.value == 4)
        		{
        			s_sql2     = "  SELECT A.JP_GB,A.JPNO, A.cust_gb, A.cust_cd,b.ioyh_cd, ";
        			s_sql2     = s_sql2 + "     0 cqty1, 0 camt1, ";
        			s_sql2     = s_sql2 + "     sum(B.QTY) b_qty1, sum(B.AMT) b_amt1 ";
        			s_sql2     = s_sql2 + "FROM SALE.MEIB_M A, SALE.MEIB_D B ";
        			s_sql2     = s_sql2 + " WHERE A.bymd >=  '" + this.ed_sdate.value +"'";
        			s_sql2     = s_sql2 + " AND A.bymd <=  '" + this.ed_edate.value +"'";
        			s_sql2     = s_sql2 + "    and  ( A.cust_gb || A.CUST_CD ) >= '" + s_cust +"'";
        			s_sql2     = s_sql2 + "    and  ( A.cust_gb || A.CUST_CD ) <= '" + e_cust +"'";
        			s_sql2     = s_sql2 + "    and A.jp_gb =  '4' ";
        			if ( this.Mk_jpgb.value != undefined )
        			{
        				s_sql2     = s_sql2 + "    AND substr(A.jpno,9,1) =  '" + this.Mk_jpgb.value +"'";
        			}
        			s_sql2     = s_sql2 + "    AND A.jpno >=  '" + this.ed_sjpno.value +"'";
        			s_sql2     = s_sql2 + "    AND A.jpno <=  '" + this.ed_ejpno.value +"'";
        			if (( this.ed_sjpno.value.substr(8,1) == "5" ) && ( this.ed_sjpno.value.substr(8,1) == this.ed_ejpno.value.substr(8,1) ))
        			{
        				s_sql2     = s_sql2 + "    AND substr(A.jpno,9,1) =  '" + this.ed_sjpno.value.substr(8,1) +"'";
        				s_sql2     = s_sql2 + "    AND substr(A.jpno,10,3) >=  '" + this.ed_sjpno.value.substr(9,3) +"'";
        				s_sql2     = s_sql2 + "    AND substr(A.jpno,10,3) <=  '" + this.ed_ejpno.value.substr(9,3) +"'";
        			}
        			s_sql2     = s_sql2 + " and A.JPNO    = B.JPNO ";
        			s_sql2     = s_sql2 + " AND A.JP_GB   = B.JP_GB ";
        			s_sql2     = s_sql2 + " group by A.JP_GB,A.JPNO,a.cust_gb, a.cust_cd,b.ioyh_cd ";
        		}

        		if (( this.ed_adduser.value != undefined ) && ( this.ed_adduser.value != "100517" ) && ( this.ed_adduser.value.trim() != "" ) )
        		{
        			s_sql3    =   " and b.kwan_cd  = '" + this.ed_adduser.value +"'";
        		}
        		if (( this.ed_adduser.value != undefined ) && ( this.ed_adduser.value == "100517" ) && ( this.ed_adduser.value.trim() != "" ) )
        		{
        			s_sql3    =   " and b.kwan_cd in ( '100517','200517' ) ";
        		}
        		//======s_sql2
        		Line_sw    =   "Y";
        		if ( Find3_sw == "Y" )
        		{
        			s_sql3    = s_sql3 + "    and  b.cgb  in ( " + custcode +" ) ";
        		}

        		var rdopt  = "/ragentpath ["+ gv_urlRdDataServer +"]" + " /rp ["+this.ed_sdate.value+"]"+ // 1
        		"["+this.ed_edate.value+"]"+ // 2
        		"["+this.ed_sgb.value + this.ed_scode.value+"]"+ // 3
        		"["+this.ed_egb.value + this.ed_ecode.value+"]"+ // 4
        		"["+s_sql1+"]"+ // 5
        		"["+s_sql2+"]"+ // 6
        		"["+s_sql3+"]"; // 7

        	}
            else if (this.print_select.value == 6)
        	{
                s_sql1     = " WHERE  A.bymd >=  '" + this.ed_sdate.value +"'";
                s_sql1     = s_sql1 + "    AND A.bymd <=  '" + this.ed_edate.value +"'";
                s_sql1     = s_sql1 + "    and ( A.cust_gb || A.CUST_CD ) >= '" + s_cust +"'";
                s_sql1     = s_sql1 + "    and ( A.cust_gb || A.CUST_CD ) <= '" + e_cust +"'";
                s_sql1     = s_sql1 + "    and A.jp_gb =  '3' ";
                s_sql1     = s_sql1 + "    AND substr(A.jpno,9,1) <>  '5' ";
                s_sql1     = s_sql1 + "    AND A.jpno >=  '" + this.ed_sjpno.value +"'";
                s_sql1     = s_sql1 + "    AND A.jpno <=  '" + this.ed_ejpno.value +"'";

        		if (( this.ed_adduser.value != "" ) && ( this.ed_adduser.value != "100517" ) && ( this.ed_adduser.value.trim() != "" ) )
        		{
        			s_sql3    =   " and c.kwan_cd  = '" + this.ed_adduser.value +"'";
        		}
        		if (( this.ed_adduser.value != "" ) && ( this.ed_adduser.value == "100517" ) && ( this.ed_adduser.value.trim() != "" ) )
        		{
        			s_sql3    =   " and c.kwan_cd in ( '100517','200517' ) ";
        		}
        		//======s_sql2
        		Line_sw    =   "Y";
        		if ( Find3_sw == "Y" )
        		{
        			s_sql3    = s_sql3 + "    and  c.cgb  in ( " + custcode +" ) ";
        		}

        		var rdopt  = "/ragentpath ["+ gv_urlRdDataServer +"]" + " /rp ["+this.ed_sdate.value+"]"+ // 1
        		"["+this.ed_edate.value+"]"+ // 2
        		"["+this.ed_sgb.value + this.ed_scode.value+"]"+ // 3
        		"["+this.ed_egb.value + this.ed_ecode.value+"]"+ // 4
        		"["+s_sql1+"]"+ // 5
        		"["+s_sql2+"]"+ // 6
        		"["+s_sql3+"]"; // 7

        	}

        	/* 미리 보기 OR 출력 버튼이벤트 시작 */
        	if(event_id == "btn_printview" ) // 미리보기 일때
        	{
        		trace(this.print_select.value);
        		switch(this.print_select.value)
        		{
        		case '1' : // 일자별 출고현황
        			this.Div00.set_url("sd::SD1140F_GRID1.xfdl");

        			var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        			"s_sql2="+nexacro.wrapQuote(s_sql2)+
        			"s_sql3="+nexacro.wrapQuote(s_sql3);
        			var outds = "ds_1=ds_1";
        			var inds = "ds_1=ds_1";
        			trace(strArg);

        			this.gfn_TransactionP("ds1_select","JSP/sd/SD1140F_DS1_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        			break;
        		case '2' : // 거래처별 출고현황
        			this.Div00.set_url("sd::SD1140F_GRID2.xfdl");

        			var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        			"s_sql2="+nexacro.wrapQuote(s_sql2)+
        			"s_sql3="+nexacro.wrapQuote(s_sql3);
        			var outds = "ds_2=ds_2";
        			var inds = "ds_2=ds_2";
        			trace(strArg);

        			this.gfn_TransactionP("ds2_select","JSP/sd/SD1140F_DS2_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        			break;
        		case '3' : // 도서별 출고현황
        			this.Div00.set_url("sd::SD1140F_GRID3.xfdl");

        			var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        			"s_sql2="+nexacro.wrapQuote(s_sql2)+
        			"s_sql3="+nexacro.wrapQuote(s_sql3);
        			var outds = "ds_3=ds_3";
        			var inds = "ds_3=ds_3";
        			trace(strArg);

        			this.gfn_TransactionP("ds3_select","JSP/sd/SD1140F_DS3_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);

        			break;
        		case '4' : // 등록자별 출고현황
        			this.Div00.set_url("sd::SD1140F_GRID4.xfdl");

        			var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        			"s_sql2="+nexacro.wrapQuote(s_sql2)+
        			"s_sql3="+nexacro.wrapQuote(s_sql3);
        			var outds = "ds_4=ds_4";
        			var inds = "ds_4=ds_4";
        			trace(strArg);

        			this.gfn_TransactionP("ds4_select","JSP/sd/SD1140F_DS4_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        			break;
        		case '5' : // 도서 출고 집계
        			this.Div00.set_url("sd::SD1140F_GRID5.xfdl");

        			var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        			"s_sql2="+nexacro.wrapQuote(s_sql2)+
        			"s_sql3="+nexacro.wrapQuote(s_sql3);
        			var outds = "ds_5=ds_5";
        			var inds = "ds_5=ds_5";
        			trace(strArg);

        			this.gfn_TransactionP("ds5_select","JSP/sd/SD1140F_DS5_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        			break;
        		case '6' : // 총판도서 출고집계
        			this.Div00.set_url("sd::SD1140F_GRID6.xfdl");

        			var strArg = "s_sql1="+nexacro.wrapQuote(s_sql1)+
        			"s_sql2="+nexacro.wrapQuote(s_sql2)+
        			"s_sql3="+nexacro.wrapQuote(s_sql3);
        			var outds = "ds_6=ds_6";
        			var inds = "ds_6=ds_6";
        			trace(strArg);

        			this.gfn_TransactionP("ds6_select","JSP/sd/SD1140F_DS6_SELECT.jsp", inds, outds, strArg, "fnCallback", true, "P", false, this);
        			break;
        		}
        	}
        	else if ( event_id  == "btn_print" ) // 출력일때
        	{
        		this.lfn_showModal("print", {rdUrl:rdfile, rdParam:rdopt}, "mk::MKRDF.xfdl", "", this, 0, 0, 1024, 770);
        	}
        }

        this.btn_scust_onclick = function(obj,e)
        {
        	var objParam = {Param1:""}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupCustCode_scode", objParam, "common::Cust_2.xfdl", "popupCallBack", this, 10, 58, 590, 550);
        };

        this.btn_ecust_onclick = function(obj,e)
        {
        	var objParam = {Param1:""}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupCustCode_ecode", objParam, "common::Cust_2.xfdl", "popupCallBack", this, 10, 58, 590, 550);
        };


        this.popupCallBack = function(sFormId, sArg)
        {
        	if(!this.lfn_sd_fnisNull(sArg)) // 리턴값이 널이 아니면 수행
        	{
        		if(sFormId=="popupBookCode_sbook") // 도서시작 코드
        		{
        			var arry = sArg.split(":");
        			this.ed_sbook.set_value(arry[0]);
        		}
        		else if(sFormId=="popupBookCode_ebook") // 도서 끝 코드
        		{
        			var arry = sArg.split(":");
        			this.ed_ebook.set_value(arry[0]);
        		}
        		else if(sFormId=="popupCustCode_scode") // 거래처 시작 코드
        		{
        			var arry = sArg.split(":");
        			this.ed_sgb.set_value(arry[0]);
        			this.ed_scode.set_value(arry[1]);
        		}
        		else if(sFormId=="popupCustCode_ecode") // 거래처 끝 코드
        		{
        			var arry = sArg.split(":");
        			this.ed_egb.set_value(arry[0]);
        			this.ed_ecode.set_value(arry[1]);
        		}
        		else if(sFormId=="popupBookCode_user") // 영업자 코드
        		{
        			var arry = sArg.split(":");
        			this.ed_ju.set_value(arry[0]);
        		}
        		else if(sFormId=="popupBookCode_maker") // 등록자 코드
        		{
        			var arry = sArg.split(":");
        			this.ed_adduser.set_value(arry[0]);
        		}
        	}
        };

        this.btn_sbookcode_onclick = function(obj,e)
        {
        	var objParam = {Param1:""}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupBookCode_sbook", objParam, "common::BookCode.xfdl", "popupCallBack", this, 10, 58, 450, 550);
        };

        this.btn_ebookcode_onclick = function(obj,e)
        {
        	var objParam = {Param1:""}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupBookCode_ebook", objParam, "common::BookCode.xfdl", "popupCallBack", this, 10, 58, 450, 550);
        };

        this.btn_s_saleuser_onclick = function(obj,e)
        {
        	var objParam = {Param1:""}; //popup 화면으로 전달할 값
        	this.lfn_showModal("popupBookCode_user", objParam, "sd::frmSaleUser.xfdl", "popupCallBack", this, 10, 58, 450, 550);
        };

        this.SD1140F_onload = function(obj,e)
        {
        	if(system.navigatorname.indexOf("nexacro")==-1)
        	{
        		// 현재 hash 에 해당하는 data 를 얻어온다.
        		var hash = MyHistory.getLocationHash();
        		//var data = MyHistory.getData(hash);
        		//trace(hash);
        	}
        	//디폴드 div 셋팅
        	//this.Div00.set_url("sd::SD1140F_GRID1.xfdl")

        	//디폴트 오늘날자.
        	var today = new Date();
        	var strtoDay = Eco.date.getMaskFormatString(today, "yyyyMMdd");
        	//nexacro.getApplication().Gv_BookYear = this.lfn_sd_getBookYear();

        	this.ed_sdate.set_value(strtoDay);
        	this.ed_edate.set_value(strtoDay);
        	this.print_select.set_value(1);

        	this.ed_sgb.set_value("20");
        	this.ed_scode.set_value("0000");
        	this.ed_egb.set_value("39");
        	this.ed_ecode.set_value("9999");
        	this.ed_sjpno.set_value(strtoDay+"0000");
        	this.ed_ejpno.set_value(strtoDay+"zzzz");


        	// 거래처구분 가져오기
        	var strArg = "";
        	var inds 	   = "ds_ccode1=ds_ccode1";
        	var outds 	   = "ds_ccode1=ds_ccode1";

        	this.gfn_TransactionP("custgb_select","JSP/sd/sel_ccode1.jsp", inds, outds, strArg, "fnCallback", false, "P", false, this);

        	this.ed_sdate.setFocus();
        };

        this.btn_printview_onclick = function(obj,e)
        {
        	trace(obj.id);
        	this.sqlCreate(obj.id);
        };


        this.Gridcheck = function(strdsname)
        {
        	// 그리드 데이터 중에 체크된 데이터를 선별하여 리턴.
        	var strReturn="";
        	var loop = 0;
        	//trace("in Gridcheck" +this.dsIoyh.rowcount);

        	if(strdsname=="dsCode")
        	{
        		for (loop=0; loop< this.ds_ccode1.rowcount; loop++)
        		{
        			if ( this.ds_ccode1.getColumn(loop,"chk")==1 )
        			{
        				//trace(this.ds_bgbr.getColumn(loop,"chk") + "        loop: " + loop);
        			    Find3_sw  = "Y";
        				strReturn = strReturn +"'"+this.ds_ccode1.getColumn(loop,"code")+"',";
        			}
        		}
        	}

        	//마지막 쉼표 삭제.
        	return strReturn.substr(0,strReturn.length-1);
        };


        this.selectfile = function(num)
        {
        	if (num == 1) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1140_1r.mrd"; // 매출일보(출고)
        	else if (num == 2) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1140_2r.mrd"; // 매출일보(반품)
        	else if (num == 3) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1140r.mrd"; // 매출일보(출고+반품)
        	else if (num == 4) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1141r.mrd"; // 매출일보(업체구분)
        	else if (num == 5) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1142r.mrd"; // 매출일보(관리자)
        	else if (num == 6) return nexacro.getApplication().gv_urlNext+"/rpt/sd/SD1143r.mrd"; // 매출일보(배송)
        };

        this.btn_excel_onclick = function(obj,e)
        {
        	var filename;

        	this.exportObj = new ExcelExportObject();
        	if ( this.Div00.url == "sd::SD1140F_GRID1.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1140F_GRID1, "Sheet1!A1");
        		filename = "1"; }
        	else if ( this.Div00.url == "sd::SD1140F_GRID2.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1140F_GRID2, "Sheet1!A1");
        		filename = "2"; }
        	else if ( this.Div00.url == "sd::SD1140F_GRID3.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1140F_GRID3, "Sheet1!A1");
        		filename = "3"; }
        	else if ( this.Div00.url == "sd::SD1140F_GRID4.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1140F_GRID4, "Sheet1!A1");
        		filename = "4"; }
        	else if ( this.Div00.url == "sd::SD1140F_GRID5.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1140F_GRID5, "Sheet1!A1");
        		filename = "5"; }
        	else if ( this.Div00.url == "sd::SD1140F_GRID6.xfdl" ) {
        		var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Div00.form.SD1140F_GRID6, "Sheet1!A1");
        		filename = "6"; }


        	this.exportObj.set_exporturl(gv_urlXeni);
        	this.exportObj.set_exportfilename(filename);
            this.exportObj.exportData();
        };

        this.grd_code_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		if(Fv_HeadChk2 == 0)
        			Fv_HeadChk2 = 1;
        		else
        			Fv_HeadChk2 = 0;

        		this.grd_code.setCellProperty("head", 0, "text", Fv_HeadChk2);
        		for(var i = 0; i < this.ds_ccode1.rowcount; i++)
        		{
        			this.ds_ccode1.setColumn(i, "chk", Fv_HeadChk2);

        		}
        	}
        };


        this.fnCallback = function(svcId, ErrorCode, ErrorMsg)
        {
        	if(ErrorCode != 0)
        		this.alert(ErrorMsg);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SD1140F_onload,this);
            this.Static00_01_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00_00_01_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_scust.addEventHandler("onclick",this.btn_scust_onclick,this);
            this.btn_ecust.addEventHandler("onclick",this.btn_ecust_onclick,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.Static00_01_00_00_01_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_s_saleuser.addEventHandler("onclick",this.btn_s_saleuser_onclick,this);
            this.Static00_01_00_00_00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_code.addEventHandler("onheadclick",this.grd_code_onheadclick,this);
            this.btn_printview.addEventHandler("onclick",this.btn_printview_onclick,this);
            this.btn_print.addEventHandler("onclick",this.btn_printview_onclick,this);
            this.Static00_00_01_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01_00_01.addEventHandler("onclick",this.Static00_onclick,this);
        };
        this.loadIncludeScript("SD1140F.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
